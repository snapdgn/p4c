#include <cstdlib>

#include "frontends/common/constantFolding.h"
#include "frontends/common/options.h"
#include "frontends/common/parseInput.h"
#include "frontends/common/parser_options.h"
#include "frontends/common/resolveReferences/referenceMap.h"
#include "frontends/p4/frontend.h"
#include "frontends/p4/toP4/toP4.h"
#include "frontends/p4/typeChecking/typeChecker.h"
#include "frontends/p4/typeMap.h"
#include "ir/ir.h"
#include "ir/pass_manager.h"
#include "ir/visitor.h"
#include "lib/compile_context.h"
#include "lib/cstring.h"
#include "lib/error.h"
#include "lib/nullstream.h"
#include "lib/source_file.h"
#include "options.h"
#include "test/gtest/helpers.h"

int main(int argc, char *const argv[]) {
    AutoCompileContext autoP4FmtContext(new P4Fmt::P4FmtContext);
    auto &options = P4Fmt::P4FmtContext::get().options();

    if (options.process(argc, argv) == nullptr) {
        return EXIT_FAILURE;
    }

    options.setInputFile();

    std::ostream *out = nullptr;

    // write to stdout in absence of an output file.
    if (options.outputFile().isNullOrEmpty()) {
        out = &std::cout;
    } else {
        out = openFile(options.outputFile(), false);
        if (!(*out)) {
            ::error(ErrorType::ERR_NOT_FOUND, "%2%: No such file or directory.",
                    options.outputFile());
            options.usage();
            return EXIT_FAILURE;
        }
    }

    const IR::P4Program *program = P4::parseP4File(options);

    if (program == nullptr && ::errorCount() != 0) {
        return EXIT_FAILURE;
    }

    auto top4 = P4::ToP4(out, false);

    // This only applies the inital passes, just after the parsing phase. No
    // frontend or mid end passes are applied

    *out << "\n############################## INITIAL ##############################\n";
    program->apply(top4);

    *out << "\n############################## AFTER FRONT END ##############################\n";
    // Apply the front end passes. These are usually fixed.
    P4::FrontEnd fe;
    program = fe.run(options, program);

    // Print the program after running front end passes.
    program->apply(top4);

    // std::cout << "\n############################## AFTER MID END
    // ##############################\n";
    //// Apply the mid end passes.
    // program = program->apply(P4Dummy::MidEnd());

    //// Print the program after running front end passes.
    // program->apply(top4);

    // std::cout << "\n############################## CUSTOM VISITOR
    // ##############################\n";
    //// Apply a custom visitor that prints the parser states for the respective program.
    // program->apply(P4Dummy::ParserVisitor());

    return ::errorCount() > 0 ? EXIT_FAILURE : EXIT_SUCCESS;
}
