/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_020.js
 * 处理时间: 2025-12-09T03:41:36.208Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       (  5x) esmImport(module) - ESM import
 * IE       (  1x) EventSourceIterator class
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 20/30
 * Lines: 222587 - 224085 (1499 lines)
 * Original file: cli.js
 */

                case "ValidationException":
                case "com.amazonaws.bedrockruntime#ValidationException":
                    throw await SdB(B, Q);
                case "ModelErrorException":
                case "com.amazonaws.bedrockruntime#ModelErrorException":
                    throw await au6(B, Q);
                case "ModelNotReadyException":
                case "com.amazonaws.bedrockruntime#ModelNotReadyException":
                    throw await su6(B, Q);
                case "ModelTimeoutException":
                case "com.amazonaws.bedrockruntime#ModelTimeoutException":
                    throw await TdB(B, Q);
                case "ServiceUnavailableException":
                case "com.amazonaws.bedrockruntime#ServiceUnavailableException":
                    throw await PdB(B, Q);
                case "ModelStreamErrorException":
                case "com.amazonaws.bedrockruntime#ModelStreamErrorException":
                    throw await RdB(B, Q);
                case "ConflictException":
                case "com.amazonaws.bedrockruntime#ConflictException":
                    throw await nu6(B, Q);
                default:
                    let Z = B.body;
                    return lu6({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        lu6 = (0, X1.withBaseException)(qU),
        iu6 = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new nmB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_AccessDeniedExceptionRes"),
        nu6 = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new omB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ConflictExceptionRes"),
        OdB = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new amB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_InternalServerExceptionRes"),
        au6 = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString,
                    originalStatusCode: X1.expectInt32,
                    resourceName: X1.expectString
                });
            Object.assign(B, Z);
            let I = new QdB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ModelErrorExceptionRes"),
        su6 = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new BdB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ModelNotReadyExceptionRes"),
        RdB = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString,
                    originalMessage: X1.expectString,
                    originalStatusCode: X1.expectInt32
                });
            Object.assign(B, Z);
            let I = new ZdB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ModelStreamErrorExceptionRes"),
        TdB = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new GdB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ModelTimeoutExceptionRes"),
        ru6 = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new tmB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ResourceNotFoundExceptionRes"),
        ou6 = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new emB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ServiceQuotaExceededExceptionRes"),
        PdB = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new AdB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ServiceUnavailableExceptionRes"),
        jdB = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new smB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ThrottlingExceptionRes"),
        SdB = tA(async (A, Q) => {
            let B = (0, X1.map)({}),
                G = A.body,
                Z = (0, X1.take)(G, {
                    message: X1.expectString
                });
            Object.assign(B, Z);
            let I = new rmB({
                $metadata: MW(A),
                ...B
            });
            return (0, X1.decorateServiceException)(I, A.body)
        }, "de_ValidationExceptionRes"),
        tu6 = tA((A, Q) => {
            let B = tA((G) => LeA.visit(G, {
                chunk: tA((Z) => eu6(Z, Q), "chunk"),
                _: tA((Z) => Z, "_")
            }), "eventMarshallingVisitor");
            return Q.eventStreamMarshaller.serialize(A, B)
        }, "se_InvokeModelWithBidirectionalStreamInput"),
        eu6 = tA((A, Q) => {
            let B = {
                    ":event-type": {
                        type: "string",
                        value: "chunk"
                    },
                    ":message-type": {
                        type: "string",
                        value: "event"
                    },
                    ":content-type": {
                        type: "string",
                        value: "application/json"
                    }
                },
                G = new Uint8Array;
            return G = Vm6(A, Q), G = Q.utf8Decoder(JSON.stringify(G)), {
                headers: B,
                body: G
            }
        }, "se_BidirectionalInputPayloadPart_event"),
        Am6 = tA((A, Q) => {
            return Q.eventStreamMarshaller.deserialize(A, async (B) => {
                if (B.messageStart != null) return {
                    messageStart: await Wm6(B.messageStart, Q)
                };
                if (B.contentBlockStart != null) return {
                    contentBlockStart: await Im6(B.contentBlockStart, Q)
                };
                if (B.contentBlockDelta != null) return {
                    contentBlockDelta: await Zm6(B.contentBlockDelta, Q)
                };
                if (B.contentBlockStop != null) return {
                    contentBlockStop: await Ym6(B.contentBlockStop, Q)
                };
                if (B.messageStop != null) return {
                    messageStop: await Xm6(B.messageStop, Q)
                };
                if (B.metadata != null) return {
                    metadata: await Jm6(B.metadata, Q)
                };
                if (B.internalServerException != null) return {
                    internalServerException: await jl1(B.internalServerException, Q)
                };
                if (B.modelStreamErrorException != null) return {
                    modelStreamErrorException: await Sl1(B.modelStreamErrorException, Q)
                };
                if (B.validationException != null) return {
                    validationException: await yl1(B.validationException, Q)
                };
                if (B.throttlingException != null) return {
                    throttlingException: await kl1(B.throttlingException, Q)
                };
                if (B.serviceUnavailableException != null) return {
                    serviceUnavailableException: await _l1(B.serviceUnavailableException, Q)
                };
                return {
                    $unknown: A
                }
            })
        }, "de_ConverseStreamOutput"),
        Qm6 = tA((A, Q) => {
            return Q.eventStreamMarshaller.deserialize(A, async (B) => {
                if (B.chunk != null) return {
                    chunk: await Gm6(B.chunk, Q)
                };
                if (B.internalServerException != null) return {
                    internalServerException: await jl1(B.internalServerException, Q)
                };
                if (B.modelStreamErrorException != null) return {
                    modelStreamErrorException: await Sl1(B.modelStreamErrorException, Q)
                };
                if (B.validationException != null) return {
                    validationException: await yl1(B.validationException, Q)
                };
                if (B.throttlingException != null) return {
                    throttlingException: await kl1(B.throttlingException, Q)
                };
                if (B.modelTimeoutException != null) return {
                    modelTimeoutException: await _dB(B.modelTimeoutException, Q)
                };
                if (B.serviceUnavailableException != null) return {
                    serviceUnavailableException: await _l1(B.serviceUnavailableException, Q)
                };
                return {
                    $unknown: A
                }
            })
        }, "de_InvokeModelWithBidirectionalStreamOutput"),
        Bm6 = tA((A, Q) => {
            return Q.eventStreamMarshaller.deserialize(A, async (B) => {
                if (B.chunk != null) return {
                    chunk: await Fm6(B.chunk, Q)
                };
                if (B.internalServerException != null) return {
                    internalServerException: await jl1(B.internalServerException, Q)
                };
                if (B.modelStreamErrorException != null) return {
                    modelStreamErrorException: await Sl1(B.modelStreamErrorException, Q)
                };
                if (B.validationException != null) return {
                    validationException: await yl1(B.validationException, Q)
                };
                if (B.throttlingException != null) return {
                    throttlingException: await kl1(B.throttlingException, Q)
                };
                if (B.modelTimeoutException != null) return {
                    modelTimeoutException: await _dB(B.modelTimeoutException, Q)
                };
                if (B.serviceUnavailableException != null) return {
                    serviceUnavailableException: await _l1(B.serviceUnavailableException, Q)
                };
                return {
                    $unknown: A
                }
            })
        }, "de_ResponseStream"),
        Gm6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, fm6(G, Q)), B
        }, "de_BidirectionalOutputPayloadPart_event"),
        Zm6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, um6(G, Q)), B
        }, "de_ContentBlockDeltaEvent_event"),
        Im6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, (0, X1._json)(G)), B
        }, "de_ContentBlockStartEvent_event"),
        Ym6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, (0, X1._json)(G)), B
        }, "de_ContentBlockStopEvent_event"),
        Jm6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, cm6(G, Q)), B
        }, "de_ConverseStreamMetadataEvent_event"),
        jl1 = tA(async (A, Q) => {
            let B = {
                ...A,
                body: await (0, Y3.parseJsonBody)(A.body, Q)
            };
            return OdB(B, Q)
        }, "de_InternalServerException_event"),
        Wm6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, (0, X1._json)(G)), B
        }, "de_MessageStartEvent_event"),
        Xm6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, Gd6(G, Q)), B
        }, "de_MessageStopEvent_event"),
        Sl1 = tA(async (A, Q) => {
            let B = {
                ...A,
                body: await (0, Y3.parseJsonBody)(A.body, Q)
            };
            return RdB(B, Q)
        }, "de_ModelStreamErrorException_event"),
        _dB = tA(async (A, Q) => {
            let B = {
                ...A,
                body: await (0, Y3.parseJsonBody)(A.body, Q)
            };
            return TdB(B, Q)
        }, "de_ModelTimeoutException_event"),
        Fm6 = tA(async (A, Q) => {
            let B = {},
                G = await (0, Y3.parseJsonBody)(A.body, Q);
            return Object.assign(B, Zd6(G, Q)), B
        }, "de_PayloadPart_event"),
        _l1 = tA(async (A, Q) => {
            let B = {
                ...A,
                body: await (0, Y3.parseJsonBody)(A.body, Q)
            };
            return PdB(B, Q)
        }, "de_ServiceUnavailableException_event"),
        kl1 = tA(async (A, Q) => {
            let B = {
                ...A,
                body: await (0, Y3.parseJsonBody)(A.body, Q)
            };
            return jdB(B, Q)
        }, "de_ThrottlingException_event"),
        yl1 = tA(async (A, Q) => {
            let B = {
                ...A,
                body: await (0, Y3.parseJsonBody)(A.body, Q)
            };
            return SdB(B, Q)
        }, "de_ValidationException_event"),
        Vm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                bytes: Q.base64Encoder
            })
        }, "se_BidirectionalInputPayloadPart"),
        Km6 = tA((A, Q) => {
            return $eA.visit(A, {
                cachePoint: tA((B) => ({
                    cachePoint: (0, X1._json)(B)
                }), "cachePoint"),
                document: tA((B) => ({
                    document: kdB(B, Q)
                }), "document"),
                guardContent: tA((B) => ({
                    guardContent: ydB(B, Q)
                }), "guardContent"),
                image: tA((B) => ({
                    image: xdB(B, Q)
                }), "image"),
                reasoningContent: tA((B) => ({
                    reasoningContent: Mm6(B, Q)
                }), "reasoningContent"),
                text: tA((B) => ({
                    text: B
                }), "text"),
                toolResult: tA((B) => ({
                    toolResult: Pm6(B, Q)
                }), "toolResult"),
                toolUse: tA((B) => ({
                    toolUse: ym6(B, Q)
                }), "toolUse"),
                video: tA((B) => ({
                    video: gdB(B, Q)
                }), "video"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_ContentBlock"),
        Dm6 = tA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return Km6(B, Q)
            })
        }, "se_ContentBlocks"),
        kdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: [],
                name: [],
                source: tA((B) => Hm6(B, Q), "source")
            })
        }, "se_DocumentBlock"),
        Hm6 = tA((A, Q) => {
            return KeA.visit(A, {
                bytes: tA((B) => ({
                    bytes: Q.base64Encoder(B)
                }), "bytes"),
                s3Location: tA((B) => ({
                    s3Location: (0, X1._json)(B)
                }), "s3Location"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_DocumentSource"),
        Cm6 = tA((A, Q) => {
            return VeA.visit(A, {
                image: tA((B) => ({
                    image: $m6(B, Q)
                }), "image"),
                text: tA((B) => ({
                    text: (0, X1._json)(B)
                }), "text"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_GuardrailContentBlock"),
        Em6 = tA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return Cm6(B, Q)
            })
        }, "se_GuardrailContentBlockList"),
        ydB = tA((A, Q) => {
            return HeA.visit(A, {
                image: tA((B) => ({
                    image: zm6(B, Q)
                }), "image"),
                text: tA((B) => ({
                    text: (0, X1._json)(B)
                }), "text"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_GuardrailConverseContentBlock"),
        zm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: [],
                source: tA((B) => Um6(B, Q), "source")
            })
        }, "se_GuardrailConverseImageBlock"),
        Um6 = tA((A, Q) => {
            return DeA.visit(A, {
                bytes: tA((B) => ({
                    bytes: Q.base64Encoder(B)
                }), "bytes"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_GuardrailConverseImageSource"),
        $m6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: [],
                source: tA((B) => wm6(B, Q), "source")
            })
        }, "se_GuardrailImageBlock"),
        wm6 = tA((A, Q) => {
            return FeA.visit(A, {
                bytes: tA((B) => ({
                    bytes: Q.base64Encoder(B)
                }), "bytes"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_GuardrailImageSource"),
        xdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: [],
                source: tA((B) => qm6(B, Q), "source")
            })
        }, "se_ImageBlock"),
        qm6 = tA((A, Q) => {
            return CeA.visit(A, {
                bytes: tA((B) => ({
                    bytes: Q.base64Encoder(B)
                }), "bytes"),
                s3Location: tA((B) => ({
                    s3Location: (0, X1._json)(B)
                }), "s3Location"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_ImageSource"),
        vdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                maxTokens: [],
                stopSequences: X1._json,
                temperature: X1.serializeFloat,
                topP: X1.serializeFloat
            })
        }, "se_InferenceConfiguration"),
        Nm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                content: tA((B) => Dm6(B, Q), "content"),
                role: []
            })
        }, "se_Message"),
        bdB = tA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return Nm6(B, Q)
            })
        }, "se_Messages"),
        Lm6 = tA((A, Q) => {
            return A
        }, "se_ModelInputPayload"),
        Mm6 = tA((A, Q) => {
            return EeA.visit(A, {
                reasoningText: tA((B) => ({
                    reasoningText: (0, X1._json)(B)
                }), "reasoningText"),
                redactedContent: tA((B) => ({
                    redactedContent: Q.base64Encoder(B)
                }), "redactedContent"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_ReasoningContentBlock"),
        Om6 = tA((A, Q) => {
            return weA.visit(A, {
                cachePoint: tA((B) => ({
                    cachePoint: (0, X1._json)(B)
                }), "cachePoint"),
                guardContent: tA((B) => ({
                    guardContent: ydB(B, Q)
                }), "guardContent"),
                text: tA((B) => ({
                    text: B
                }), "text"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_SystemContentBlock"),
        fdB = tA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return Om6(B, Q)
            })
        }, "se_SystemContentBlocks"),
        Rm6 = tA((A, Q) => {
            return NeA.visit(A, {
                cachePoint: tA((B) => ({
                    cachePoint: (0, X1._json)(B)
                }), "cachePoint"),
                toolSpec: tA((B) => ({
                    toolSpec: km6(B, Q)
                }), "toolSpec"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_Tool"),
        hdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                toolChoice: X1._json,
                tools: tA((B) => _m6(B, Q), "tools")
            })
        }, "se_ToolConfiguration"),
        Tm6 = tA((A, Q) => {
            return qeA.visit(A, {
                json: tA((B) => ({
                    json: dwA(B, Q)
                }), "json"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_ToolInputSchema"),
        Pm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                content: tA((B) => Sm6(B, Q), "content"),
                status: [],
                toolUseId: []
            })
        }, "se_ToolResultBlock"),
        jm6 = tA((A, Q) => {
            return UeA.visit(A, {
                document: tA((B) => ({
                    document: kdB(B, Q)
                }), "document"),
                image: tA((B) => ({
                    image: xdB(B, Q)
                }), "image"),
                json: tA((B) => ({
                    json: dwA(B, Q)
                }), "json"),
                text: tA((B) => ({
                    text: B
                }), "text"),
                video: tA((B) => ({
                    video: gdB(B, Q)
                }), "video"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_ToolResultContentBlock"),
        Sm6 = tA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return jm6(B, Q)
            })
        }, "se_ToolResultContentBlocks"),
        _m6 = tA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return Rm6(B, Q)
            })
        }, "se_Tools"),
        km6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                description: [],
                inputSchema: tA((B) => Tm6(B, Q), "inputSchema"),
                name: []
            })
        }, "se_ToolSpecification"),
        ym6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                input: tA((B) => dwA(B, Q), "input"),
                name: [],
                toolUseId: []
            })
        }, "se_ToolUseBlock"),
        gdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: [],
                source: tA((B) => xm6(B, Q), "source")
            })
        }, "se_VideoBlock"),
        xm6 = tA((A, Q) => {
            return zeA.visit(A, {
                bytes: tA((B) => ({
                    bytes: Q.base64Encoder(B)
                }), "bytes"),
                s3Location: tA((B) => ({
                    s3Location: (0, X1._json)(B)
                }), "s3Location"),
                _: tA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_VideoSource"),
        dwA = tA((A, Q) => {
            return A
        }, "se_Document"),
        vm6 = tA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return bm6(G, Q)
            })
        }, "de_AsyncInvokeSummaries"),
        bm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                clientRequestToken: X1.expectString,
                endTime: tA((B) => (0, X1.expectNonNull)((0, X1.parseRfc3339DateTimeWithOffset)(B)), "endTime"),
                failureMessage: X1.expectString,
                invocationArn: X1.expectString,
                lastModifiedTime: tA((B) => (0, X1.expectNonNull)((0, X1.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                modelArn: X1.expectString,
                outputDataConfig: tA((B) => (0, X1._json)((0, Y3.awsExpectUnion)(B)), "outputDataConfig"),
                status: X1.expectString,
                submitTime: tA((B) => (0, X1.expectNonNull)((0, X1.parseRfc3339DateTimeWithOffset)(B)), "submitTime")
            })
        }, "de_AsyncInvokeSummary"),
        fm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                bytes: Q.base64Decoder
            })
        }, "de_BidirectionalOutputPayloadPart"),
        hm6 = tA((A, Q) => {
            if (A.cachePoint != null) return {
                cachePoint: (0, X1._json)(A.cachePoint)
            };
            if (A.document != null) return {
                document: udB(A.document, Q)
            };
            if (A.guardContent != null) return {
                guardContent: tm6((0, Y3.awsExpectUnion)(A.guardContent), Q)
            };
            if (A.image != null) return {
                image: pdB(A.image, Q)
            };
            if (A.reasoningContent != null) return {
                reasoningContent: Id6((0, Y3.awsExpectUnion)(A.reasoningContent), Q)
            };
            if ((0, X1.expectString)(A.text) !== void 0) return {
                text: (0, X1.expectString)(A.text)
            };
            if (A.toolResult != null) return {
                toolResult: Jd6(A.toolResult, Q)
            };
            if (A.toolUse != null) return {
                toolUse: Fd6(A.toolUse, Q)
            };
            if (A.video != null) return {
                video: ldB(A.video, Q)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_ContentBlock"),
        gm6 = tA((A, Q) => {
            if (A.reasoningContent != null) return {
                reasoningContent: Yd6((0, Y3.awsExpectUnion)(A.reasoningContent), Q)
            };
            if ((0, X1.expectString)(A.text) !== void 0) return {
                text: (0, X1.expectString)(A.text)
            };
            if (A.toolUse != null) return {
                toolUse: (0, X1._json)(A.toolUse)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_ContentBlockDelta"),
        um6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                contentBlockIndex: X1.expectInt32,
                delta: tA((B) => gm6((0, Y3.awsExpectUnion)(B), Q), "delta")
            })
        }, "de_ContentBlockDeltaEvent"),
        mm6 = tA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return hm6((0, Y3.awsExpectUnion)(G), Q)
            })
        }, "de_ContentBlocks"),
        dm6 = tA((A, Q) => {
            if (A.message != null) return {
                message: Bd6(A.message, Q)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_ConverseOutput"),
        cm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                metrics: X1._json,
                performanceConfig: X1._json,
                trace: tA((B) => pm6(B, Q), "trace"),
                usage: X1._json
            })
        }, "de_ConverseStreamMetadataEvent"),
        pm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                guardrail: tA((B) => cdB(B, Q), "guardrail"),
                promptRouter: X1._json
            })
        }, "de_ConverseStreamTrace"),
        lm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                guardrail: tA((B) => cdB(B, Q), "guardrail"),
                promptRouter: X1._json
            })
        }, "de_ConverseTrace"),
        udB = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: X1.expectString,
                name: X1.expectString,
                source: tA((B) => im6((0, Y3.awsExpectUnion)(B), Q), "source")
            })
        }, "de_DocumentBlock"),
        im6 = tA((A, Q) => {
            if (A.bytes != null) return {
                bytes: Q.base64Decoder(A.bytes)
            };
            if (A.s3Location != null) return {
                s3Location: (0, X1._json)(A.s3Location)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_DocumentSource"),
        mdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                contentPolicy: X1._json,
                contextualGroundingPolicy: tA((B) => om6(B, Q), "contextualGroundingPolicy"),
                invocationMetrics: X1._json,
                sensitiveInformationPolicy: X1._json,
                topicPolicy: X1._json,
                wordPolicy: X1._json
            })
        }, "de_GuardrailAssessment"),
        ddB = tA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return mdB(G, Q)
            })
        }, "de_GuardrailAssessmentList"),
        nm6 = tA((A, Q) => {
            return Object.entries(A).reduce((B, [G, Z]) => {
                if (Z === null) return B;
                return B[G] = ddB(Z, Q), B
            }, {})
        }, "de_GuardrailAssessmentListMap"),
        am6 = tA((A, Q) => {
            return Object.entries(A).reduce((B, [G, Z]) => {
                if (Z === null) return B;
                return B[G] = mdB(Z, Q), B
            }, {})
        }, "de_GuardrailAssessmentMap"),
        sm6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                action: X1.expectString,
                detected: X1.expectBoolean,
                score: X1.limitedParseDouble,
                threshold: X1.limitedParseDouble,
                type: X1.expectString
            })
        }, "de_GuardrailContextualGroundingFilter"),
        rm6 = tA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return sm6(G, Q)
            })
        }, "de_GuardrailContextualGroundingFilters"),
        om6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                filters: tA((B) => rm6(B, Q), "filters")
            })
        }, "de_GuardrailContextualGroundingPolicyAssessment"),
        tm6 = tA((A, Q) => {
            if (A.image != null) return {
                image: em6(A.image, Q)
            };
            if (A.text != null) return {
                text: (0, X1._json)(A.text)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_GuardrailConverseContentBlock"),
        em6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: X1.expectString,
                source: tA((B) => Ad6((0, Y3.awsExpectUnion)(B), Q), "source")
            })
        }, "de_GuardrailConverseImageBlock"),
        Ad6 = tA((A, Q) => {
            if (A.bytes != null) return {
                bytes: Q.base64Decoder(A.bytes)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_GuardrailConverseImageSource"),
        cdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                actionReason: X1.expectString,
                inputAssessment: tA((B) => am6(B, Q), "inputAssessment"),
                modelOutput: X1._json,
                outputAssessments: tA((B) => nm6(B, Q), "outputAssessments")
            })
        }, "de_GuardrailTraceAssessment"),
        pdB = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: X1.expectString,
                source: tA((B) => Qd6((0, Y3.awsExpectUnion)(B), Q), "source")
            })
        }, "de_ImageBlock"),
        Qd6 = tA((A, Q) => {
            if (A.bytes != null) return {
                bytes: Q.base64Decoder(A.bytes)
            };
            if (A.s3Location != null) return {
                s3Location: (0, X1._json)(A.s3Location)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_ImageSource"),
        Bd6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                content: tA((B) => mm6(B, Q), "content"),
                role: X1.expectString
            })
        }, "de_Message"),
        Gd6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                additionalModelResponseFields: tA((B) => ReA(B, Q), "additionalModelResponseFields"),
                stopReason: X1.expectString
            })
        }, "de_MessageStopEvent"),
        Zd6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                bytes: Q.base64Decoder
            })
        }, "de_PayloadPart"),
        Id6 = tA((A, Q) => {
            if (A.reasoningText != null) return {
                reasoningText: (0, X1._json)(A.reasoningText)
            };
            if (A.redactedContent != null) return {
                redactedContent: Q.base64Decoder(A.redactedContent)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_ReasoningContentBlock"),
        Yd6 = tA((A, Q) => {
            if (A.redactedContent != null) return {
                redactedContent: Q.base64Decoder(A.redactedContent)
            };
            if ((0, X1.expectString)(A.signature) !== void 0) return {
                signature: (0, X1.expectString)(A.signature)
            };
            if ((0, X1.expectString)(A.text) !== void 0) return {
                text: (0, X1.expectString)(A.text)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_ReasoningContentBlockDelta"),
        Jd6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                content: tA((B) => Xd6(B, Q), "content"),
                status: X1.expectString,
                toolUseId: X1.expectString
            })
        }, "de_ToolResultBlock"),
        Wd6 = tA((A, Q) => {
            if (A.document != null) return {
                document: udB(A.document, Q)
            };
            if (A.image != null) return {
                image: pdB(A.image, Q)
            };
            if (A.json != null) return {
                json: ReA(A.json, Q)
            };
            if ((0, X1.expectString)(A.text) !== void 0) return {
                text: (0, X1.expectString)(A.text)
            };
            if (A.video != null) return {
                video: ldB(A.video, Q)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_ToolResultContentBlock"),
        Xd6 = tA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return Wd6((0, Y3.awsExpectUnion)(G), Q)
            })
        }, "de_ToolResultContentBlocks"),
        Fd6 = tA((A, Q) => {
            return (0, X1.take)(A, {
                input: tA((B) => ReA(B, Q), "input"),
                name: X1.expectString,
                toolUseId: X1.expectString
            })
        }, "de_ToolUseBlock"),
        ldB = tA((A, Q) => {
            return (0, X1.take)(A, {
                format: X1.expectString,
                source: tA((B) => Vd6((0, Y3.awsExpectUnion)(B), Q), "source")
            })
        }, "de_VideoBlock"),
        Vd6 = tA((A, Q) => {
            if (A.bytes != null) return {
                bytes: Q.base64Decoder(A.bytes)
            };
            if (A.s3Location != null) return {
                s3Location: (0, X1._json)(A.s3Location)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_VideoSource"),
        ReA = tA((A, Q) => {
            return A
        }, "de_Document"),
        MW = tA((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        Ol1 = "accept",
        TeA = "contentType",
        xl1 = "content-type",
        idB = "guardrailIdentifier",
        ndB = "guardrailVersion",
        hmB = "maxResults",
        gmB = "nextToken",
        PeA = "performanceConfigLatency",
        umB = "sortBy",
        mmB = "statusEquals",
        dmB = "sortOrder",
        cmB = "submitTimeAfter",
        pmB = "submitTimeBefore",
        adB = "trace",
        Kd6 = "x-amzn-bedrock-accept",
        Dd6 = "x-amzn-bedrock-content-type",
        sdB = "x-amzn-bedrock-guardrailidentifier",
        rdB = "x-amzn-bedrock-guardrailversion",
        jeA = "x-amzn-bedrock-performanceconfig-latency",
        odB = "x-amzn-bedrock-trace",
        tdB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "ApplyGuardrail", {}).n("BedrockRuntimeClient", "ApplyGuardrailCommand").f(FdB, void 0).ser(Tu6).de(bu6).build() {
            static {
                tA(this, "ApplyGuardrailCommand")
            }
        },
        edB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "Converse", {}).n("BedrockRuntimeClient", "ConverseCommand").f(KdB, HdB).ser(Pu6).de(fu6).build() {
            static {
                tA(this, "ConverseCommand")
            }
        },
        AcB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "ConverseStream", {
            eventStream: {
                output: !0
            }
        }).n("BedrockRuntimeClient", "ConverseStreamCommand").f(CdB, UdB).ser(ju6).de(hu6).build() {
            static {
                tA(this, "ConverseStreamCommand")
            }
        },
        QcB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "GetAsyncInvoke", {}).n("BedrockRuntimeClient", "GetAsyncInvokeCommand").f(void 0, IdB).ser(Su6).de(gu6).build() {
            static {
                tA(this, "GetAsyncInvokeCommand")
            }
        },
        BcB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "InvokeModel", {}).n("BedrockRuntimeClient", "InvokeModelCommand").f($dB, wdB).ser(_u6).de(uu6).build() {
            static {
                tA(this, "InvokeModelCommand")
            }
        },
        GcB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions()), (0, imB.getEventStreamPlugin)(B)]
        }).s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
            eventStream: {
                input: !0,
                output: !0
            }
        }).n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand").f(qdB, NdB).ser(ku6).de(mu6).build() {
            static {
                tA(this, "InvokeModelWithBidirectionalStreamCommand")
            }
        },
        ZcB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
            eventStream: {
                output: !0
            }
        }).n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand").f(LdB, MdB).ser(yu6).de(du6).build() {
            static {
                tA(this, "InvokeModelWithResponseStreamCommand")
            }
        },
        vl1 = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "ListAsyncInvokes", {}).n("BedrockRuntimeClient", "ListAsyncInvokesCommand").f(void 0, JdB).ser(xu6).de(cu6).build() {
            static {
                tA(this, "ListAsyncInvokesCommand")
            }
        },
        IcB = class extends X1.Command.classBuilder().ep(zf).m(function(A, Q, B, G) {
            return [(0, Uf.getSerdePlugin)(B, this.serialize, this.deserialize), (0, o_.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockFrontendService", "StartAsyncInvoke", {}).n("BedrockRuntimeClient", "StartAsyncInvokeCommand").f(WdB, void 0).ser(vu6).de(pu6).build() {
            static {
                tA(this, "StartAsyncInvokeCommand")
            }
        },
        Hd6 = {
            ApplyGuardrailCommand: tdB,
            ConverseCommand: edB,
            ConverseStreamCommand: AcB,
            GetAsyncInvokeCommand: QcB,
            InvokeModelCommand: BcB,
            InvokeModelWithBidirectionalStreamCommand: GcB,
            InvokeModelWithResponseStreamCommand: ZcB,
            ListAsyncInvokesCommand: vl1,
            StartAsyncInvokeCommand: IcB
        },
        YcB = class extends Rl1 {
            static {
                tA(this, "BedrockRuntime")
            }
        };
    (0, X1.createAggregatedClient)(Hd6, YcB);
    var Cd6 = (0, Gq.createPaginator)(Rl1, vl1, "nextToken", "nextToken", "maxResults")
});
var yZ, np, Ed6 = async (A, Q) => {
    let B = yZ.map({}),
        G = A.body,
        Z = yZ.take(G, {
            message: yZ.expectString
        });
    Object.assign(B, Z);
    let I = new np.InternalServerException({
        $metadata: SeA(A),
        ...B
    });
    return yZ.decorateServiceException(I, A.body)
}, zd6 = async (A, Q) => {
    let B = yZ.map({}),
        G = A.body,
        Z = yZ.take(G, {
            message: yZ.expectString,
            originalMessage: yZ.expectString,
            originalStatusCode: yZ.expectInt32
        });
    Object.assign(B, Z);
    let I = new np.ModelStreamErrorException({
        $metadata: SeA(A),
        ...B
    });
    return yZ.decorateServiceException(I, A.body)
}, Ud6 = async (A, Q) => {
    let B = yZ.map({}),
        G = A.body,
        Z = yZ.take(G, {
            message: yZ.expectString
        });
    Object.assign(B, Z);
    let I = new np.ThrottlingException({
        $metadata: SeA(A),
        ...B
    });
    return yZ.decorateServiceException(I, A.body)
}, $d6 = async (A, Q) => {
    let B = yZ.map({}),
        G = A.body,
        Z = yZ.take(G, {
            message: yZ.expectString
        });
    Object.assign(B, Z);
    let I = new np.ValidationException({
        $metadata: SeA(A),
        ...B
    });
    return yZ.decorateServiceException(I, A.body)
}, XcB = (A, Q) => {
    return Q.eventStreamMarshaller.deserialize(A, async (B) => {
        if (B.chunk != null) return {
            chunk: await Nd6(B.chunk, Q)
        };
        if (B.internalServerException != null) return {
            internalServerException: await wd6(B.internalServerException, Q)
        };
        if (B.modelStreamErrorException != null) return {
            modelStreamErrorException: await qd6(B.modelStreamErrorException, Q)
        };
        if (B.validationException != null) return {
            validationException: await Md6(B.validationException, Q)
        };
        if (B.throttlingException != null) return {
            throttlingException: await Ld6(B.throttlingException, Q)
        };
        return {
            $unknown: A
        }
    })
}, wd6 = async (A, Q) => {
    let B = {
        ...A,
        body: await cwA(A.body, Q)
    };
    return Ed6(B, Q)
}, qd6 = async (A, Q) => {
    let B = {
        ...A,
        body: await cwA(A.body, Q)
    };
    return zd6(B, Q)
}, Nd6 = async (A, Q) => {
    let B = {},
        G = await cwA(A.body, Q);
    return Object.assign(B, Od6(G, Q)), B
}, Ld6 = async (A, Q) => {
    let B = {
        ...A,
        body: await cwA(A.body, Q)
    };
    return Ud6(B, Q)
}, Md6 = async (A, Q) => {
    let B = {
        ...A,
        body: await cwA(A.body, Q)
    };
    return $d6(B, Q)
}, Od6 = (A, Q) => {
    return yZ.take(A, {
        bytes: Q.base64Decoder
    })
}, SeA = (A) => ({
    httpStatusCode: A.statusCode,
    requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"] ?? "",
    extendedRequestId: A.headers["x-amz-id-2"] ?? "",
    cfId: A.headers["x-amz-cf-id"] ?? ""
}), Rd6 = (A, Q) => yZ.collectBody(A, Q).then((B) => Q.utf8Encoder(B)), cwA = (A, Q) => Rd6(A, Q).then((B) => {
    if (B.length) return JSON.parse(B);
    return {}
});
var FcB = L(() => {
    yZ = GA(bfB(), 1), np = GA(WcB(), 1)
});

function VcB(A) {
    if (A[Symbol.asyncIterator]) return A;
    let Q = A.getReader();
    return {
        async next() {
            try {
                let B = await Q.read();
                if (B?.done) Q.releaseLock();
                return B
            } catch (B) {
                throw Q.releaseLock(), B
            }
        },
        async return () {
            let B = Q.cancel();
            return Q.releaseLock(), await B, {
                done: !0,
                value: void 0
            }
        },
        [Symbol.asyncIterator]() {
            return this
        }
    }
}
var bl1 = L(() => {
    ZE()
});

function _eA(A) {
    return A != null && typeof A === "object" && !Array.isArray(A)
}
var fl1 = (A) => (fl1 = Array.isArray, fl1(A)),
    hl1, KcB = (A) => {
        try {
            return JSON.parse(A)
        } catch (Q) {
            return
        }
    };
var pwA = L(() => {
    bl1();
    hl1 = fl1
});

function lwA() {}

function keA(A, Q, B) {
    if (!Q || DcB[A] > DcB[B]) return lwA;
    else return Q[A].bind(Q)
}

function CcB(A) {
    let Q = A.logger,
        B = A.logLevel ?? "off";
    if (!Q) return Td6;
    let G = HcB.get(Q);
    if (G && G[0] === B) return G[1];
    let Z = {
        error: keA("error", Q, B),
        warn: keA("warn", Q, B),
        info: keA("info", Q, B),
        debug: keA("debug", Q, B)
    };
    return HcB.set(Q, [B, Z]), Z
}
var DcB, Td6, HcB;
var EcB = L(() => {
    pwA();
    DcB = {
        off: 0,
        error: 200,
        warn: 300,
        info: 400,
        debug: 500
    };
    Td6 = {
        error: lwA,
        warn: lwA,
        info: lwA,
        debug: lwA
    }, HcB = new WeakMap
});

function jd6(A) {
    return typeof A === "object" && A !== null && (("name" in A) && A.name === "AbortError" || ("message" in A) && String(A.message).includes("FetchRequestCanceledException"))
}
var UcB, yeA, $cB, gl1 = (A) => new TextDecoder("utf-8").decode(A),
    zcB = (A) => new TextEncoder().encode(A),
    Pd6 = () => {
        let A = new UcB.EventStreamMarshaller({
            utf8Encoder: gl1,
            utf8Decoder: zcB
        });
        return {
            base64Decoder: yeA.fromBase64,
            base64Encoder: yeA.toBase64,
            utf8Decoder: zcB,
            utf8Encoder: gl1,
            eventStreamMarshaller: A,
            streamCollector: $cB.streamCollector
        }
    },
    xeA;
var wcB = L(() => {
    NnA();
    Ft();
    l_();
    FcB();
    pwA();
    EcB();
    UcB = GA(nvB(), 1), yeA = GA(Dp1(), 1), $cB = GA(mc1(), 1);
    xeA = class xeA extends IE {
        static fromSSEResponse(A, Q, B) {
            let G = !1,
                Z = B ? CcB(B) : console;
            async function* I() {
                if (!A.body) throw Q.abort(), new yB("Attempted to iterate over a response with no body");
                let J = VcB(A.body),
                    W = XcB(J, Pd6());
                for await (let X of W) if (X.chunk && X.chunk.bytes) yield {
                    event: "chunk",
                    data: gl1(X.chunk.bytes),
                    raw: []
                };
                else if (X.internalServerException) yield {
                    event: "error",
                    data: "InternalServerException",
                    raw: []
                };
                else if (X.modelStreamErrorException) yield {
                    event: "error",
                    data: "ModelStreamErrorException",
                    raw: []
                };
                else if (X.validationException) yield {
                    event: "error",
                    data: "ValidationException",
                    raw: []
                };
                else if (X.throttlingException) yield {
                    event: "error",
                    data: "ThrottlingException",
                    raw: []
                }
            }
            async function* Y() {
                if (G) throw Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");
                G = !0;
                let J = !1;
                try {
                    for await (let W of I()) {
                        if (W.event === "chunk") try {
                            yield JSON.parse(W.data)
                        } catch (X) {
                            throw Z.error("Could not parse message into JSON:", W.data), Z.error("From chunk:", W.raw), X
                        }
                        if (W.event === "error") {
                            let X = W.data,
                                F = KcB(X),
                                V = F ? void 0 : X;
                            throw a2.generate(void 0, F, V, A.headers)
                        }
                    }
                    J = !0
                } catch (W) {
                    if (jd6(W)) return;
                    throw W
                } finally {
                    if (!J) Q.abort()
                }
            }
            return new xeA(Y, Q)
        }
    }
});
var ul1 = (A) => {
    if (typeof globalThis.process < "u") return globalThis.process.env?.[A]?.trim() ?? void 0;
    if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(A)?.trim();
    return
};

function* Sd6(A) {
    if (!A) return;
    if (qcB in A) {
        let {
            values: G,
            nulls: Z
        } = A;
        yield* G.entries();
        for (let I of Z) yield [I, null];
        return
    }
    let Q = !1,
        B;
    if (A instanceof Headers) B = A.entries();
    else if (hl1(A)) B = A;
    else Q = !0, B = Object.entries(A ?? {});
    for (let G of B) {
        let Z = G[0];
        if (typeof Z !== "string") throw TypeError("expected header name to be a string");
        let I = hl1(G[1]) ? G[1] : [G[1]],
            Y = !1;
        for (let J of I) {
            if (J === void 0) continue;
            if (Q && !Y) Y = !0, yield [Z, null];
            yield [Z, J]
        }
    }
}
var qcB, ml1 = (A) => {
    let Q = new Headers,
        B = new Set;
    for (let G of A) {
        let Z = new Set;
        for (let [I, Y] of Sd6(G)) {
            let J = I.toLowerCase();
            if (!Z.has(J)) Q.delete(I), Z.add(J);
            if (Y === null) Q.delete(I), B.add(J);
            else Q.append(I, Y), B.delete(J)
        }
    }
    return {
        [qcB]: !0,
        values: Q,
        nulls: B
    }
};
var NcB = L(() => {
    pwA();
    qcB = Symbol.for("brand.privateNullableHeaders")
});

function McB(A) {
    return A.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g, encodeURIComponent)
}