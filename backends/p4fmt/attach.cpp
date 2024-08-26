#include "backends/p4fmt/attach.h"

#include "frontends/common/parser_options.h"
#include "lib/source_file.h"

namespace P4::P4Fmt {

Attach::~Attach() = default;

void Attach::addPrefixComments(NodeId node, const Util::Comment *prefix) {
    commentsMap[node].prefix.push_back(prefix);
}

void Attach::addSuffixComments(NodeId node, const Util::Comment *suffix) {
    commentsMap[node].suffix.push_back(suffix);
}

bool Attach::isSystemFile(const std::filesystem::path &file) {
    const std::filesystem::path p4include(p4includePath);
    return file.parent_path() == p4include;
}

const Attach::CommentsMap &Attach::getCommentsMap() const { return commentsMap; }

const IR::Node *Attach::attachCommentsToNode(IR::Node *node, TraversalType ttype) {
    if (node == nullptr || !node->srcInfo.isValid() || processedComments.empty()) {
        return node;
    }

    std::filesystem::path sourceFile(node->srcInfo.getSourceFile().c_str());
    if (isSystemFile(sourceFile)) {
        // Skip attachment for system files
        return node;
    }

    const auto nodeStart = node->srcInfo.getStart();

    for (auto &[comment, isAttached] : processedComments) {
        // Skip if already attached
        if (isAttached) {
            continue;
        }

        const auto &commentEnd = comment->getEndPosition();

        switch (ttype) {
            case TraversalType::Preorder:
                if (commentEnd.getLineNumber() == nodeStart.getLineNumber() - 1) {
                    addPrefixComments(node->id, comment);
                    isAttached = true;  // Mark the comment as attached
                }
                break;

            case TraversalType::Postorder:
                if (commentEnd.getLineNumber() == nodeStart.getLineNumber()) {
                    addSuffixComments(node->id, comment);
                    isAttached = true;
                }
                break;

            default:
                ::P4::error(ErrorType::ERR_INVALID, "traversal type unknown/unsupported.");
                return node;
        }
    }

    return node;
}

const IR::Node *Attach::preorder(IR::Node *node) {
    return attachCommentsToNode(node, TraversalType::Preorder);
}

const IR::Node *Attach::postorder(IR::Node *node) {
    return attachCommentsToNode(node, TraversalType::Postorder);
}

}  // namespace P4::P4Fmt