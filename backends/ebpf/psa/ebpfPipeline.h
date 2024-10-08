/*
Copyright 2022-present Orange
Copyright 2022-present Open Networking Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
#ifndef BACKENDS_EBPF_PSA_EBPFPIPELINE_H_
#define BACKENDS_EBPF_PSA_EBPFPIPELINE_H_

#include "backends/ebpf/ebpfProgram.h"
#include "backends/ebpf/target.h"
#include "ebpfPsaControl.h"
#include "ebpfPsaDeparser.h"

namespace P4::EBPF {

/// EBPFPipeline represents a single eBPF program in the TC/XDP hook.
class EBPFPipeline : public EBPFProgram {
 public:
    /// A custom name of eBPF program.
    cstring name;
    /// eBPF section name, which should a concatenation of `classifier/` + a custom name.
    cstring sectionName;
    /// Variable name storing pointer to eBPF packet descriptor (e.g., __sk_buff).
    cstring contextVar;
    /// Variable name storing current timestamp retrieved from bpf_ktime_get_ns().
    cstring timestampVar;
    /// Variable storing ingress interface index.
    cstring ifindexVar;
    /// Variable storing skb->priority value (TC only).
    cstring priorityVar;
    /// Variables storing global metadata (packet_path & instance).
    cstring packetPathVar, pktInstanceVar;
    /// A name of an internal variable storing global metadata.
    cstring compilerGlobalMetadata;
    /// A variable name storing "1" value. Used to access BPF array map index.
    cstring oneKey;
    /// A unique mark used to differentiate packets processed by P4/eBPF from others.
    unsigned packetMark;
    /// A variable to store ifindex after mapping (e.g. due to recirculation).
    cstring inputPortVar;

    EBPFControlPSA *control;
    EBPFDeparserPSA *deparser;

    EBPFPipeline(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                 P4::TypeMap *typeMap)
        : EBPFProgram(options, nullptr, refMap, typeMap, nullptr),
          name(name),
          packetMark(0x99),
          control(nullptr),
          deparser(nullptr) {
        sectionName = "classifier/" + name;
        functionName = name.replace('-', '_') + "_func";
        errorEnum = "ParserError_t"_cs;
        packetStartVar = "pkt"_cs;
        headerStartVar = "hdr_start"_cs;
        contextVar = "skb"_cs;
        lengthVar = "pkt_len"_cs;
        endLabel = "deparser"_cs;
        timestampVar = "tstamp"_cs;
        ifindexVar = "skb->ifindex"_cs;
        compilerGlobalMetadata = "compiler_meta__"_cs;
        packetPathVar = compilerGlobalMetadata + "->packet_path"_cs;
        pktInstanceVar = compilerGlobalMetadata + "->instance"_cs;
        priorityVar = "skb->priority"_cs;
        oneKey = EBPFModel::reserved("one"_cs);
        inputPortVar = "ebpf_input_port"_cs;
        progTarget = new KernelSamplesTarget(options.emitTraceMessages);
    }

    /// Check if pipeline does any processing.
    /// Return false if not.
    bool isEmpty() const;

    virtual cstring dropReturnCode() {
        if (sectionName.startsWith("xdp")) {
            return "XDP_DROP"_cs;
        }

        // TC is the default hookpoint
        return "TC_ACT_SHOT"_cs;
    }
    virtual cstring forwardReturnCode() {
        if (sectionName.startsWith("xdp")) {
            return "XDP_PASS"_cs;
        }

        // TC is the default hookpoint
        return "TC_ACT_OK"_cs;
    }

    virtual void emit(CodeBuilder *builder) = 0;
    virtual void emitTrafficManager(CodeBuilder *builder) = 0;
    virtual void emitPSAControlInputMetadata(CodeBuilder *builder) = 0;
    virtual void emitPSAControlOutputMetadata(CodeBuilder *builder) = 0;

    /// Generates a pointer to struct Headers_t and puts it on the BPF program's stack.
    void emitLocalHeaderInstancesAsPointers(CodeBuilder *builder);
    /// Generates a pointer to struct hdr_md. The pointer is used to access data from per-CPU map.
    void emitCPUMAPHeadersInitializers(CodeBuilder *builder);
    /// Generates an instance of struct Headers_t,
    /// allocated in the per-CPU map.
    void emitHeaderInstances(CodeBuilder *builder) override;
    /// Generates a set of helper variables that are used during packet processing.
    void emitLocalVariables(CodeBuilder *builder) override;

    /// Generates and instance of user metadata for a pipeline,
    /// allocated in the per-CPU map.
    void emitUserMetadataInstance(CodeBuilder *builder);

    virtual void emitCPUMAPInitializers(CodeBuilder *builder);
    virtual void emitCPUMAPLookup(CodeBuilder *builder);
    /// Generates a pointer to skb->cb and maps it to
    /// psa_global_metadata to access global metadata shared between pipelines.
    virtual void emitGlobalMetadataInitializer(CodeBuilder *builder);

    virtual void emitPacketLength(CodeBuilder *builder);
    virtual void emitTimestamp(CodeBuilder *builder);
    void emitInputPortMapping(CodeBuilder *builder);

    void emitHeadersFromCPUMAP(CodeBuilder *builder);
    void emitMetadataFromCPUMAP(CodeBuilder *builder);

    bool hasAnyMeter() const {
        auto directMeter = std::find_if(control->tables.begin(), control->tables.end(),
                                        [](std::pair<const cstring, EBPFTable *> elem) {
                                            return !elem.second->to<EBPFTablePSA>()->meters.empty();
                                        });
        bool anyDirectMeter = directMeter != control->tables.end();
        return anyDirectMeter || (!control->meters.empty());
    }
    /// Returns whether the compiler should generate
    /// timestamp retrieved by bpf_ktime_get_ns().
    ///
    /// This allows to avoid overhead introduced by bpf_ktime_get_ns(),
    /// if the timestamp field is not used within a pipeline.
    bool shouldEmitTimestamp() const { return hasAnyMeter() || control->timestampIsUsed; }

    DECLARE_TYPEINFO(EBPFPipeline, EBPFProgram);
};

/// EBPFIngressPipeline represents a hook-independent EBPF-based ingress pipeline.
/// It includes common definitions for TC and XDP.
class EBPFIngressPipeline : public EBPFPipeline {
 public:
    unsigned int maxResubmitDepth;
    //// actUnspecCode stores the "undefined action" value.
    /// It's returned from eBPF program is PSA-eBPF doesn't make any forwarding/drop decision.
    int actUnspecCode;

    EBPFIngressPipeline(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                        P4::TypeMap *typeMap)
        : EBPFPipeline(name, options, refMap, typeMap) {
        // FIXME: hardcoded
        maxResubmitDepth = 4;
        // actUnspecCode should not collide with TC/XDP return codes,
        // but it's safe to use the same value as TC_ACT_UNSPEC.
        actUnspecCode = -1;
    }

    void emitSharedMetadataInitializer(CodeBuilder *builder);

    void emit(CodeBuilder *builder) override;
    void emitPSAControlInputMetadata(CodeBuilder *builder) override;
    void emitPSAControlOutputMetadata(CodeBuilder *builder) override;

    DECLARE_TYPEINFO(EBPFIngressPipeline, EBPFPipeline);
};

/// EBPFEgressPipeline represents a hook-independent EBPF-based egress pipeline.
/// It includes common definitions for TC and XDP.
class EBPFEgressPipeline : public EBPFPipeline {
 public:
    EBPFEgressPipeline(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                       P4::TypeMap *typeMap)
        : EBPFPipeline(name, options, refMap, typeMap) {}

    void emit(CodeBuilder *builder) override;
    void emitPSAControlInputMetadata(CodeBuilder *builder) override;
    void emitPSAControlOutputMetadata(CodeBuilder *builder) override;
    void emitCPUMAPLookup(CodeBuilder *builder) override;

    virtual void emitCheckPacketMarkMetadata(CodeBuilder *builder) = 0;

    DECLARE_TYPEINFO(EBPFEgressPipeline, EBPFPipeline);
};

class TCIngressPipeline : public EBPFIngressPipeline {
 public:
    TCIngressPipeline(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                      P4::TypeMap *typeMap)
        : EBPFIngressPipeline(name, options, refMap, typeMap) {}

    void emitGlobalMetadataInitializer(CodeBuilder *builder) override;
    void emitTrafficManager(CodeBuilder *builder) override;

 private:
    void emitTCWorkaroundUsingMeta(CodeBuilder *builder);
    void emitTCWorkaroundUsingHead(CodeBuilder *builder);
    void emitTCWorkaroundUsingCPUMAP(CodeBuilder *builder);

    DECLARE_TYPEINFO(TCIngressPipeline, EBPFIngressPipeline);
};

class TCEgressPipeline : public EBPFEgressPipeline {
 public:
    TCEgressPipeline(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                     P4::TypeMap *typeMap)
        : EBPFEgressPipeline(name, options, refMap, typeMap) {}

    void emitTrafficManager(CodeBuilder *builder) override;
    void emitCheckPacketMarkMetadata(CodeBuilder *builder) override;

    DECLARE_TYPEINFO(TCEgressPipeline, EBPFEgressPipeline);
};

class XDPIngressPipeline : public EBPFIngressPipeline {
 public:
    XDPIngressPipeline(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                       P4::TypeMap *typeMap)
        : EBPFIngressPipeline(name, options, refMap, typeMap) {
        sectionName = "xdp_ingress/" + name;
        ifindexVar = "skb->ingress_ifindex"_cs;
        packetPathVar = compilerGlobalMetadata + "->packet_path"_cs;
        progTarget = new XdpTarget(options.emitTraceMessages);
    }

    void emitGlobalMetadataInitializer(CodeBuilder *builder) override;
    void emitTrafficManager(CodeBuilder *builder) override;

    DECLARE_TYPEINFO(XDPIngressPipeline, EBPFIngressPipeline);
};

class XDPEgressPipeline : public EBPFEgressPipeline {
 public:
    XDPEgressPipeline(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                      P4::TypeMap *typeMap)
        : EBPFEgressPipeline(name, options, refMap, typeMap) {
        sectionName = "xdp_devmap/" + name;
        ifindexVar = "skb->egress_ifindex"_cs;
        // we do not support packet path, instance & priority in the XDP egress.
        packetPathVar = "0"_cs;
        pktInstanceVar = "0"_cs;
        priorityVar = "0"_cs;
        progTarget = new XdpTarget(options.emitTraceMessages);
    }

    void emitGlobalMetadataInitializer(CodeBuilder *builder) override;
    void emitTrafficManager(CodeBuilder *builder) override;
    void emitCheckPacketMarkMetadata(CodeBuilder *builder) override;

    DECLARE_TYPEINFO(XDPEgressPipeline, EBPFEgressPipeline);
};

class TCTrafficManagerForXDP : public TCIngressPipeline {
 public:
    TCTrafficManagerForXDP(cstring name, const EbpfOptions &options, P4::ReferenceMap *refMap,
                           P4::TypeMap *typeMap)
        : TCIngressPipeline(name, options, refMap, typeMap) {}

    void emitGlobalMetadataInitializer(CodeBuilder *builder) override;
    void emit(CodeBuilder *builder) override;

 private:
    void emitReadXDP2TCMetadataFromHead(CodeBuilder *builder);
    void emitReadXDP2TCMetadataFromCPUMAP(CodeBuilder *builder);

    DECLARE_TYPEINFO(TCTrafficManagerForXDP, TCIngressPipeline);
};

}  // namespace P4::EBPF

#endif /* BACKENDS_EBPF_PSA_EBPFPIPELINE_H_ */
