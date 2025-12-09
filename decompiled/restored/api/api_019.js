/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: api_019.js
 * 处理时间: 2025-12-09T03:37:23.837Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * tool_use   (  1x) = TOOL_USE content type
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 19/30
 * Lines: 221087 - 222586 (1500 lines)
 * Original file: cli.js
 */

    wg6(lmB, {
        AccessDeniedException: () => nmB,
        ApplyGuardrailCommand: () => tdB,
        ApplyGuardrailRequestFilterSensitiveLog: () => FdB,
        AsyncInvokeOutputDataConfig: () => Cl1,
        AsyncInvokeStatus: () => yg6,
        AsyncInvokeSummaryFilterSensitiveLog: () => YdB,
        BedrockRuntime: () => YcB,
        BedrockRuntimeClient: () => Rl1,
        BedrockRuntimeServiceException: () => qU,
        BidirectionalInputPayloadPartFilterSensitiveLog: () => wu6,
        BidirectionalOutputPayloadPartFilterSensitiveLog: () => Nu6,
        CachePointType: () => Au6,
        ConflictException: () => omB,
        ContentBlock: () => $eA,
        ContentBlockDelta: () => wl1,
        ContentBlockDeltaEventFilterSensitiveLog: () => zdB,
        ContentBlockDeltaFilterSensitiveLog: () => EdB,
        ContentBlockFilterSensitiveLog: () => VdB,
        ContentBlockStart: () => ql1,
        ConversationRole: () => Ju6,
        ConverseCommand: () => edB,
        ConverseOutput: () => Ul1,
        ConverseOutputFilterSensitiveLog: () => DdB,
        ConverseRequestFilterSensitiveLog: () => KdB,
        ConverseResponseFilterSensitiveLog: () => HdB,
        ConverseStreamCommand: () => AcB,
        ConverseStreamOutput: () => Nl1,
        ConverseStreamOutputFilterSensitiveLog: () => $u6,
        ConverseStreamRequestFilterSensitiveLog: () => CdB,
        ConverseStreamResponseFilterSensitiveLog: () => UdB,
        DocumentFormat: () => Qu6,
        DocumentSource: () => KeA,
        GetAsyncInvokeCommand: () => QcB,
        GetAsyncInvokeResponseFilterSensitiveLog: () => IdB,
        GuardrailAction: () => ug6,
        GuardrailContentBlock: () => VeA,
        GuardrailContentBlockFilterSensitiveLog: () => XdB,
        GuardrailContentFilterConfidence: () => dg6,
        GuardrailContentFilterStrength: () => cg6,
        GuardrailContentFilterType: () => pg6,
        GuardrailContentPolicyAction: () => mg6,
        GuardrailContentQualifier: () => fg6,
        GuardrailContentSource: () => gg6,
        GuardrailContextualGroundingFilterType: () => ig6,
        GuardrailContextualGroundingPolicyAction: () => lg6,
        GuardrailConverseContentBlock: () => HeA,
        GuardrailConverseContentBlockFilterSensitiveLog: () => Tl1,
        GuardrailConverseContentQualifier: () => Gu6,
        GuardrailConverseImageBlockFilterSensitiveLog: () => Cu6,
        GuardrailConverseImageFormat: () => Bu6,
        GuardrailConverseImageSource: () => DeA,
        GuardrailConverseImageSourceFilterSensitiveLog: () => Hu6,
        GuardrailImageBlockFilterSensitiveLog: () => Du6,
        GuardrailImageFormat: () => bg6,
        GuardrailImageSource: () => FeA,
        GuardrailImageSourceFilterSensitiveLog: () => Ku6,
        GuardrailManagedWordType: () => tg6,
        GuardrailOutputScope: () => hg6,
        GuardrailPiiEntityType: () => ag6,
        GuardrailSensitiveInformationPolicyAction: () => ng6,
        GuardrailStreamProcessingMode: () => Fu6,
        GuardrailTopicPolicyAction: () => sg6,
        GuardrailTopicType: () => rg6,
        GuardrailTrace: () => eg6,
        GuardrailWordPolicyAction: () => og6,
        ImageFormat: () => Zu6,
        ImageSource: () => CeA,
        InternalServerException: () => amB,
        InvokeModelCommand: () => BcB,
        InvokeModelRequestFilterSensitiveLog: () => $dB,
        InvokeModelResponseFilterSensitiveLog: () => wdB,
        InvokeModelWithBidirectionalStreamCommand: () => GcB,
        InvokeModelWithBidirectionalStreamInput: () => LeA,
        InvokeModelWithBidirectionalStreamInputFilterSensitiveLog: () => qu6,
        InvokeModelWithBidirectionalStreamOutput: () => Ll1,
        InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog: () => Lu6,
        InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog: () => qdB,
        InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog: () => NdB,
        InvokeModelWithResponseStreamCommand: () => ZcB,
        InvokeModelWithResponseStreamRequestFilterSensitiveLog: () => LdB,
        InvokeModelWithResponseStreamResponseFilterSensitiveLog: () => MdB,
        ListAsyncInvokesCommand: () => vl1,
        ListAsyncInvokesResponseFilterSensitiveLog: () => JdB,
        MessageFilterSensitiveLog: () => OeA,
        ModelErrorException: () => QdB,
        ModelNotReadyException: () => BdB,
        ModelStreamErrorException: () => ZdB,
        ModelTimeoutException: () => GdB,
        PayloadPartFilterSensitiveLog: () => Mu6,
        PerformanceConfigLatency: () => Wu6,
        PromptVariableValues: () => El1,
        ReasoningContentBlock: () => EeA,
        ReasoningContentBlockDelta: () => $l1,
        ReasoningContentBlockDeltaFilterSensitiveLog: () => Uu6,
        ReasoningContentBlockFilterSensitiveLog: () => zu6,
        ReasoningTextBlockFilterSensitiveLog: () => Eu6,
        ResourceNotFoundException: () => tmB,
        ResponseStream: () => Ml1,
        ResponseStreamFilterSensitiveLog: () => Ou6,
        ServiceQuotaExceededException: () => emB,
        ServiceUnavailableException: () => AdB,
        SortAsyncInvocationBy: () => xg6,
        SortOrder: () => vg6,
        StartAsyncInvokeCommand: () => IcB,
        StartAsyncInvokeRequestFilterSensitiveLog: () => WdB,
        StopReason: () => Xu6,
        SystemContentBlock: () => weA,
        SystemContentBlockFilterSensitiveLog: () => Pl1,
        ThrottlingException: () => smB,
        Tool: () => NeA,
        ToolChoice: () => zl1,
        ToolInputSchema: () => qeA,
        ToolResultContentBlock: () => UeA,
        ToolResultStatus: () => Yu6,
        Trace: () => Vu6,
        ValidationException: () => rmB,
        VideoFormat: () => Iu6,
        VideoSource: () => zeA,
        __Client: () => X1.Client,
        paginateListAsyncInvokes: () => Cd6
    });
    JcB.exports = Ng6(lmB);
    var imB = JhB(),
        kmB = QCA(),
        Lg6 = BCA(),
        Mg6 = GCA(),
        ymB = g6A(),
        Og6 = S8(),
        Gq = nB(),
        Rg6 = FhB(),
        Tg6 = zX(),
        o_ = E5(),
        xmB = X6(),
        vmB = up1(),
        Pg6 = tA((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "bedrock"
            })
        }, "resolveClientEndpointParameters"),
        zf = {
            UseFIPS: {
                type: "builtInParams",
                name: "useFipsEndpoint"
            },
            Endpoint: {
                type: "builtInParams",
                name: "endpoint"
            },
            Region: {
                type: "builtInParams",
                name: "region"
            },
            UseDualStack: {
                type: "builtInParams",
                name: "useDualstackEndpoint"
            }
        },
        jg6 = OmB(),
        bmB = UCA(),
        fmB = _mB(),
        X1 = gwA(),
        Sg6 = tA((A) => {
            let {
                httpAuthSchemes: Q,
                httpAuthSchemeProvider: B,
                credentials: G
            } = A;
            return {
                setHttpAuthScheme(Z) {
                    let I = Q.findIndex((Y) => Y.schemeId === Z.schemeId);
                    if (I === -1) Q.push(Z);
                    else Q.splice(I, 1, Z)
                },
                httpAuthSchemes() {
                    return Q
                },
                setHttpAuthSchemeProvider(Z) {
                    B = Z
                },
                httpAuthSchemeProvider() {
                    return B
                },
                setCredentials(Z) {
                    G = Z
                },
                credentials() {
                    return G
                }
            }
        }, "getHttpAuthExtensionConfiguration"),
        _g6 = tA((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        kg6 = tA((A, Q) => {
            let B = Object.assign((0, bmB.getAwsRegionExtensionConfiguration)(A), (0, X1.getDefaultExtensionConfiguration)(A), (0, fmB.getHttpHandlerExtensionConfiguration)(A), Sg6(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, bmB.resolveAwsRegionExtensionConfiguration)(B), (0, X1.resolveDefaultRuntimeConfig)(B), (0, fmB.resolveHttpHandlerRuntimeConfig)(B), _g6(B))
        }, "resolveRuntimeExtensions"),
        Rl1 = class extends X1.Client {
            static {
                tA(this, "BedrockRuntimeClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, jg6.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = Pg6(Q),
                    G = (0, ymB.resolveUserAgentConfig)(B),
                    Z = (0, xmB.resolveRetryConfig)(G),
                    I = (0, Og6.resolveRegionConfig)(Z),
                    Y = (0, kmB.resolveHostHeaderConfig)(I),
                    J = (0, o_.resolveEndpointConfig)(Y),
                    W = (0, Rg6.resolveEventStreamSerdeConfig)(J),
                    X = (0, vmB.resolveHttpAuthSchemeConfig)(W),
                    F = (0, imB.resolveEventStreamConfig)(X),
                    V = kg6(F, A?.extensions || []);
                this.config = V, this.middlewareStack.use((0, ymB.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, xmB.getRetryPlugin)(this.config)), this.middlewareStack.use((0, Tg6.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, kmB.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, Lg6.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, Mg6.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, Gq.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: vmB.defaultBedrockRuntimeHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: tA(async (K) => new Gq.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": K.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, Gq.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        Uf = sG(),
        qU = class A extends X1.ServiceException {
            static {
                tA(this, "BedrockRuntimeServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        nmB = class A extends qU {
            static {
                tA(this, "AccessDeniedException")
            }
            name = "AccessDeniedException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "AccessDeniedException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        Cl1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.s3OutputDataConfig !== void 0) return B.s3OutputDataConfig(Q.s3OutputDataConfig);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(Cl1 || (Cl1 = {}));
    var yg6 = {
            COMPLETED: "Completed",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress"
        },
        amB = class A extends qU {
            static {
                tA(this, "InternalServerException")
            }
            name = "InternalServerException";
            $fault = "server";
            constructor(Q) {
                super({
                    name: "InternalServerException",
                    $fault: "server",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        smB = class A extends qU {
            static {
                tA(this, "ThrottlingException")
            }
            name = "ThrottlingException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ThrottlingException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        rmB = class A extends qU {
            static {
                tA(this, "ValidationException")
            }
            name = "ValidationException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ValidationException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        xg6 = {
            SUBMISSION_TIME: "SubmissionTime"
        },
        vg6 = {
            ASCENDING: "Ascending",
            DESCENDING: "Descending"
        },
        omB = class A extends qU {
            static {
                tA(this, "ConflictException")
            }
            name = "ConflictException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ConflictException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        tmB = class A extends qU {
            static {
                tA(this, "ResourceNotFoundException")
            }
            name = "ResourceNotFoundException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ResourceNotFoundException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        emB = class A extends qU {
            static {
                tA(this, "ServiceQuotaExceededException")
            }
            name = "ServiceQuotaExceededException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ServiceQuotaExceededException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        AdB = class A extends qU {
            static {
                tA(this, "ServiceUnavailableException")
            }
            name = "ServiceUnavailableException";
            $fault = "server";
            constructor(Q) {
                super({
                    name: "ServiceUnavailableException",
                    $fault: "server",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        bg6 = {
            JPEG: "jpeg",
            PNG: "png"
        },
        FeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.bytes !== void 0) return B.bytes(Q.bytes);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(FeA || (FeA = {}));
    var fg6 = {
            GROUNDING_SOURCE: "grounding_source",
            GUARD_CONTENT: "guard_content",
            QUERY: "query"
        },
        VeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.text !== void 0) return B.text(Q.text);
            if (Q.image !== void 0) return B.image(Q.image);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(VeA || (VeA = {}));
    var hg6 = {
            FULL: "FULL",
            INTERVENTIONS: "INTERVENTIONS"
        },
        gg6 = {
            INPUT: "INPUT",
            OUTPUT: "OUTPUT"
        },
        ug6 = {
            GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
            NONE: "NONE"
        },
        mg6 = {
            BLOCKED: "BLOCKED",
            NONE: "NONE"
        },
        dg6 = {
            HIGH: "HIGH",
            LOW: "LOW",
            MEDIUM: "MEDIUM",
            NONE: "NONE"
        },
        cg6 = {
            HIGH: "HIGH",
            LOW: "LOW",
            MEDIUM: "MEDIUM",
            NONE: "NONE"
        },
        pg6 = {
            HATE: "HATE",
            INSULTS: "INSULTS",
            MISCONDUCT: "MISCONDUCT",
            PROMPT_ATTACK: "PROMPT_ATTACK",
            SEXUAL: "SEXUAL",
            VIOLENCE: "VIOLENCE"
        },
        lg6 = {
            BLOCKED: "BLOCKED",
            NONE: "NONE"
        },
        ig6 = {
            GROUNDING: "GROUNDING",
            RELEVANCE: "RELEVANCE"
        },
        ng6 = {
            ANONYMIZED: "ANONYMIZED",
            BLOCKED: "BLOCKED",
            NONE: "NONE"
        },
        ag6 = {
            ADDRESS: "ADDRESS",
            AGE: "AGE",
            AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
            AWS_SECRET_KEY: "AWS_SECRET_KEY",
            CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
            CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
            CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
            CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
            CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
            DRIVER_ID: "DRIVER_ID",
            EMAIL: "EMAIL",
            INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
            IP_ADDRESS: "IP_ADDRESS",
            LICENSE_PLATE: "LICENSE_PLATE",
            MAC_ADDRESS: "MAC_ADDRESS",
            NAME: "NAME",
            PASSWORD: "PASSWORD",
            PHONE: "PHONE",
            PIN: "PIN",
            SWIFT_CODE: "SWIFT_CODE",
            UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
            UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
            UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
            URL: "URL",
            USERNAME: "USERNAME",
            US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
            US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
            US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
            US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
            US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
            VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER"
        },
        sg6 = {
            BLOCKED: "BLOCKED",
            NONE: "NONE"
        },
        rg6 = {
            DENY: "DENY"
        },
        og6 = {
            BLOCKED: "BLOCKED",
            NONE: "NONE"
        },
        tg6 = {
            PROFANITY: "PROFANITY"
        },
        eg6 = {
            DISABLED: "disabled",
            ENABLED: "enabled",
            ENABLED_FULL: "enabled_full"
        },
        Au6 = {
            DEFAULT: "default"
        },
        Qu6 = {
            CSV: "csv",
            DOC: "doc",
            DOCX: "docx",
            HTML: "html",
            MD: "md",
            PDF: "pdf",
            TXT: "txt",
            XLS: "xls",
            XLSX: "xlsx"
        },
        KeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.bytes !== void 0) return B.bytes(Q.bytes);
            if (Q.s3Location !== void 0) return B.s3Location(Q.s3Location);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(KeA || (KeA = {}));
    var Bu6 = {
            JPEG: "jpeg",
            PNG: "png"
        },
        DeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.bytes !== void 0) return B.bytes(Q.bytes);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(DeA || (DeA = {}));
    var Gu6 = {
            GROUNDING_SOURCE: "grounding_source",
            GUARD_CONTENT: "guard_content",
            QUERY: "query"
        },
        HeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.text !== void 0) return B.text(Q.text);
            if (Q.image !== void 0) return B.image(Q.image);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(HeA || (HeA = {}));
    var Zu6 = {
            GIF: "gif",
            JPEG: "jpeg",
            PNG: "png",
            WEBP: "webp"
        },
        CeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.bytes !== void 0) return B.bytes(Q.bytes);
            if (Q.s3Location !== void 0) return B.s3Location(Q.s3Location);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(CeA || (CeA = {}));
    var EeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.reasoningText !== void 0) return B.reasoningText(Q.reasoningText);
            if (Q.redactedContent !== void 0) return B.redactedContent(Q.redactedContent);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(EeA || (EeA = {}));
    var Iu6 = {
            FLV: "flv",
            MKV: "mkv",
            MOV: "mov",
            MP4: "mp4",
            MPEG: "mpeg",
            MPG: "mpg",
            THREE_GP: "three_gp",
            WEBM: "webm",
            WMV: "wmv"
        },
        zeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.bytes !== void 0) return B.bytes(Q.bytes);
            if (Q.s3Location !== void 0) return B.s3Location(Q.s3Location);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(zeA || (zeA = {}));
    var UeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.json !== void 0) return B.json(Q.json);
            if (Q.text !== void 0) return B.text(Q.text);
            if (Q.image !== void 0) return B.image(Q.image);
            if (Q.document !== void 0) return B.document(Q.document);
            if (Q.video !== void 0) return B.video(Q.video);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(UeA || (UeA = {}));
    var Yu6 = {
            ERROR: "error",
            SUCCESS: "success"
        },
        $eA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.text !== void 0) return B.text(Q.text);
            if (Q.image !== void 0) return B.image(Q.image);
            if (Q.document !== void 0) return B.document(Q.document);
            if (Q.video !== void 0) return B.video(Q.video);
            if (Q.toolUse !== void 0) return B.toolUse(Q.toolUse);
            if (Q.toolResult !== void 0) return B.toolResult(Q.toolResult);
            if (Q.guardContent !== void 0) return B.guardContent(Q.guardContent);
            if (Q.cachePoint !== void 0) return B.cachePoint(Q.cachePoint);
            if (Q.reasoningContent !== void 0) return B.reasoningContent(Q.reasoningContent);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })($eA || ($eA = {}));
    var Ju6 = {
            ASSISTANT: "assistant",
            USER: "user"
        },
        Wu6 = {
            OPTIMIZED: "optimized",
            STANDARD: "standard"
        },
        El1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.text !== void 0) return B.text(Q.text);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(El1 || (El1 = {}));
    var weA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.text !== void 0) return B.text(Q.text);
            if (Q.guardContent !== void 0) return B.guardContent(Q.guardContent);
            if (Q.cachePoint !== void 0) return B.cachePoint(Q.cachePoint);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(weA || (weA = {}));
    var zl1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.auto !== void 0) return B.auto(Q.auto);
            if (Q.any !== void 0) return B.any(Q.any);
            if (Q.tool !== void 0) return B.tool(Q.tool);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(zl1 || (zl1 = {}));
    var qeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.json !== void 0) return B.json(Q.json);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(qeA || (qeA = {}));
    var NeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.toolSpec !== void 0) return B.toolSpec(Q.toolSpec);
            if (Q.cachePoint !== void 0) return B.cachePoint(Q.cachePoint);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(NeA || (NeA = {}));
    var Ul1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.message !== void 0) return B.message(Q.message);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(Ul1 || (Ul1 = {}));
    var Xu6 = {
            CONTENT_FILTERED: "content_filtered",
            END_TURN: "end_turn",
            GUARDRAIL_INTERVENED: "guardrail_intervened",
            MAX_TOKENS: "max_tokens",
            STOP_SEQUENCE: "stop_sequence",
            TOOL_USE: "tool_use"
        },
        QdB = class A extends qU {
            static {
                tA(this, "ModelErrorException")
            }
            name = "ModelErrorException";
            $fault = "client";
            originalStatusCode;
            resourceName;
            constructor(Q) {
                super({
                    name: "ModelErrorException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.originalStatusCode = Q.originalStatusCode, this.resourceName = Q.resourceName
            }
        },
        BdB = class A extends qU {
            static {
                tA(this, "ModelNotReadyException")
            }
            name = "ModelNotReadyException";
            $fault = "client";
            $retryable = {};
            constructor(Q) {
                super({
                    name: "ModelNotReadyException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        GdB = class A extends qU {
            static {
                tA(this, "ModelTimeoutException")
            }
            name = "ModelTimeoutException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ModelTimeoutException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        Fu6 = {
            ASYNC: "async",
            SYNC: "sync"
        },
        $l1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.text !== void 0) return B.text(Q.text);
            if (Q.redactedContent !== void 0) return B.redactedContent(Q.redactedContent);
            if (Q.signature !== void 0) return B.signature(Q.signature);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })($l1 || ($l1 = {}));
    var wl1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.text !== void 0) return B.text(Q.text);
            if (Q.toolUse !== void 0) return B.toolUse(Q.toolUse);
            if (Q.reasoningContent !== void 0) return B.reasoningContent(Q.reasoningContent);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(wl1 || (wl1 = {}));
    var ql1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.toolUse !== void 0) return B.toolUse(Q.toolUse);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(ql1 || (ql1 = {}));
    var ZdB = class A extends qU {
            static {
                tA(this, "ModelStreamErrorException")
            }
            name = "ModelStreamErrorException";
            $fault = "client";
            originalStatusCode;
            originalMessage;
            constructor(Q) {
                super({
                    name: "ModelStreamErrorException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.originalStatusCode = Q.originalStatusCode, this.originalMessage = Q.originalMessage
            }
        },
        Nl1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.messageStart !== void 0) return B.messageStart(Q.messageStart);
            if (Q.contentBlockStart !== void 0) return B.contentBlockStart(Q.contentBlockStart);
            if (Q.contentBlockDelta !== void 0) return B.contentBlockDelta(Q.contentBlockDelta);
            if (Q.contentBlockStop !== void 0) return B.contentBlockStop(Q.contentBlockStop);
            if (Q.messageStop !== void 0) return B.messageStop(Q.messageStop);
            if (Q.metadata !== void 0) return B.metadata(Q.metadata);
            if (Q.internalServerException !== void 0) return B.internalServerException(Q.internalServerException);
            if (Q.modelStreamErrorException !== void 0) return B.modelStreamErrorException(Q.modelStreamErrorException);
            if (Q.validationException !== void 0) return B.validationException(Q.validationException);
            if (Q.throttlingException !== void 0) return B.throttlingException(Q.throttlingException);
            if (Q.serviceUnavailableException !== void 0) return B.serviceUnavailableException(Q.serviceUnavailableException);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(Nl1 || (Nl1 = {}));
    var Vu6 = {
            DISABLED: "DISABLED",
            ENABLED: "ENABLED",
            ENABLED_FULL: "ENABLED_FULL"
        },
        LeA;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.chunk !== void 0) return B.chunk(Q.chunk);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(LeA || (LeA = {}));
    var Ll1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.chunk !== void 0) return B.chunk(Q.chunk);
            if (Q.internalServerException !== void 0) return B.internalServerException(Q.internalServerException);
            if (Q.modelStreamErrorException !== void 0) return B.modelStreamErrorException(Q.modelStreamErrorException);
            if (Q.validationException !== void 0) return B.validationException(Q.validationException);
            if (Q.throttlingException !== void 0) return B.throttlingException(Q.throttlingException);
            if (Q.modelTimeoutException !== void 0) return B.modelTimeoutException(Q.modelTimeoutException);
            if (Q.serviceUnavailableException !== void 0) return B.serviceUnavailableException(Q.serviceUnavailableException);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(Ll1 || (Ll1 = {}));
    var Ml1;
    ((A) => {
        A.visit = tA((Q, B) => {
            if (Q.chunk !== void 0) return B.chunk(Q.chunk);
            if (Q.internalServerException !== void 0) return B.internalServerException(Q.internalServerException);
            if (Q.modelStreamErrorException !== void 0) return B.modelStreamErrorException(Q.modelStreamErrorException);
            if (Q.validationException !== void 0) return B.validationException(Q.validationException);
            if (Q.throttlingException !== void 0) return B.throttlingException(Q.throttlingException);
            if (Q.modelTimeoutException !== void 0) return B.modelTimeoutException(Q.modelTimeoutException);
            if (Q.serviceUnavailableException !== void 0) return B.serviceUnavailableException(Q.serviceUnavailableException);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(Ml1 || (Ml1 = {}));
    var IdB = tA((A) => ({
            ...A,
            ...A.failureMessage && {
                failureMessage: X1.SENSITIVE_STRING
            },
            ...A.outputDataConfig && {
                outputDataConfig: A.outputDataConfig
            }
        }), "GetAsyncInvokeResponseFilterSensitiveLog"),
        YdB = tA((A) => ({
            ...A,
            ...A.failureMessage && {
                failureMessage: X1.SENSITIVE_STRING
            },
            ...A.outputDataConfig && {
                outputDataConfig: A.outputDataConfig
            }
        }), "AsyncInvokeSummaryFilterSensitiveLog"),
        JdB = tA((A) => ({
            ...A,
            ...A.asyncInvokeSummaries && {
                asyncInvokeSummaries: A.asyncInvokeSummaries.map((Q) => YdB(Q))
            }
        }), "ListAsyncInvokesResponseFilterSensitiveLog"),
        WdB = tA((A) => ({
            ...A,
            ...A.modelInput && {
                modelInput: X1.SENSITIVE_STRING
            },
            ...A.outputDataConfig && {
                outputDataConfig: A.outputDataConfig
            }
        }), "StartAsyncInvokeRequestFilterSensitiveLog"),
        Ku6 = tA((A) => {
            if (A.bytes !== void 0) return {
                bytes: A.bytes
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "GuardrailImageSourceFilterSensitiveLog"),
        Du6 = tA((A) => ({
            ...A,
            ...A.source && {
                source: X1.SENSITIVE_STRING
            }
        }), "GuardrailImageBlockFilterSensitiveLog"),
        XdB = tA((A) => {
            if (A.text !== void 0) return {
                text: A.text
            };
            if (A.image !== void 0) return {
                image: X1.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "GuardrailContentBlockFilterSensitiveLog"),
        FdB = tA((A) => ({
            ...A,
            ...A.content && {
                content: A.content.map((Q) => XdB(Q))
            }
        }), "ApplyGuardrailRequestFilterSensitiveLog"),
        Hu6 = tA((A) => {
            if (A.bytes !== void 0) return {
                bytes: A.bytes
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "GuardrailConverseImageSourceFilterSensitiveLog"),
        Cu6 = tA((A) => ({
            ...A,
            ...A.source && {
                source: X1.SENSITIVE_STRING
            }
        }), "GuardrailConverseImageBlockFilterSensitiveLog"),
        Tl1 = tA((A) => {
            if (A.text !== void 0) return {
                text: A.text
            };
            if (A.image !== void 0) return {
                image: X1.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "GuardrailConverseContentBlockFilterSensitiveLog"),
        Eu6 = tA((A) => ({
            ...A
        }), "ReasoningTextBlockFilterSensitiveLog"),
        zu6 = tA((A) => {
            if (A.reasoningText !== void 0) return {
                reasoningText: X1.SENSITIVE_STRING
            };
            if (A.redactedContent !== void 0) return {
                redactedContent: A.redactedContent
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "ReasoningContentBlockFilterSensitiveLog"),
        VdB = tA((A) => {
            if (A.text !== void 0) return {
                text: A.text
            };
            if (A.image !== void 0) return {
                image: A.image
            };
            if (A.document !== void 0) return {
                document: A.document
            };
            if (A.video !== void 0) return {
                video: A.video
            };
            if (A.toolUse !== void 0) return {
                toolUse: A.toolUse
            };
            if (A.toolResult !== void 0) return {
                toolResult: A.toolResult
            };
            if (A.guardContent !== void 0) return {
                guardContent: Tl1(A.guardContent)
            };
            if (A.cachePoint !== void 0) return {
                cachePoint: A.cachePoint
            };
            if (A.reasoningContent !== void 0) return {
                reasoningContent: X1.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "ContentBlockFilterSensitiveLog"),
        OeA = tA((A) => ({
            ...A,
            ...A.content && {
                content: A.content.map((Q) => VdB(Q))
            }
        }), "MessageFilterSensitiveLog"),
        Pl1 = tA((A) => {
            if (A.text !== void 0) return {
                text: A.text
            };
            if (A.guardContent !== void 0) return {
                guardContent: Tl1(A.guardContent)
            };
            if (A.cachePoint !== void 0) return {
                cachePoint: A.cachePoint
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "SystemContentBlockFilterSensitiveLog"),
        KdB = tA((A) => ({
            ...A,
            ...A.messages && {
                messages: A.messages.map((Q) => OeA(Q))
            },
            ...A.system && {
                system: A.system.map((Q) => Pl1(Q))
            },
            ...A.toolConfig && {
                toolConfig: A.toolConfig
            },
            ...A.promptVariables && {
                promptVariables: X1.SENSITIVE_STRING
            },
            ...A.requestMetadata && {
                requestMetadata: X1.SENSITIVE_STRING
            }
        }), "ConverseRequestFilterSensitiveLog"),
        DdB = tA((A) => {
            if (A.message !== void 0) return {
                message: OeA(A.message)
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "ConverseOutputFilterSensitiveLog"),
        HdB = tA((A) => ({
            ...A,
            ...A.output && {
                output: DdB(A.output)
            }
        }), "ConverseResponseFilterSensitiveLog"),
        CdB = tA((A) => ({
            ...A,
            ...A.messages && {
                messages: A.messages.map((Q) => OeA(Q))
            },
            ...A.system && {
                system: A.system.map((Q) => Pl1(Q))
            },
            ...A.toolConfig && {
                toolConfig: A.toolConfig
            },
            ...A.promptVariables && {
                promptVariables: X1.SENSITIVE_STRING
            },
            ...A.requestMetadata && {
                requestMetadata: X1.SENSITIVE_STRING
            }
        }), "ConverseStreamRequestFilterSensitiveLog"),
        Uu6 = tA((A) => {
            if (A.text !== void 0) return {
                text: A.text
            };
            if (A.redactedContent !== void 0) return {
                redactedContent: A.redactedContent
            };
            if (A.signature !== void 0) return {
                signature: A.signature
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "ReasoningContentBlockDeltaFilterSensitiveLog"),
        EdB = tA((A) => {
            if (A.text !== void 0) return {
                text: A.text
            };
            if (A.toolUse !== void 0) return {
                toolUse: A.toolUse
            };
            if (A.reasoningContent !== void 0) return {
                reasoningContent: X1.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "ContentBlockDeltaFilterSensitiveLog"),
        zdB = tA((A) => ({
            ...A,
            ...A.delta && {
                delta: EdB(A.delta)
            }
        }), "ContentBlockDeltaEventFilterSensitiveLog"),
        $u6 = tA((A) => {
            if (A.messageStart !== void 0) return {
                messageStart: A.messageStart
            };
            if (A.contentBlockStart !== void 0) return {
                contentBlockStart: A.contentBlockStart
            };
            if (A.contentBlockDelta !== void 0) return {
                contentBlockDelta: zdB(A.contentBlockDelta)
            };
            if (A.contentBlockStop !== void 0) return {
                contentBlockStop: A.contentBlockStop
            };
            if (A.messageStop !== void 0) return {
                messageStop: A.messageStop
            };
            if (A.metadata !== void 0) return {
                metadata: A.metadata
            };
            if (A.internalServerException !== void 0) return {
                internalServerException: A.internalServerException
            };
            if (A.modelStreamErrorException !== void 0) return {
                modelStreamErrorException: A.modelStreamErrorException
            };
            if (A.validationException !== void 0) return {
                validationException: A.validationException
            };
            if (A.throttlingException !== void 0) return {
                throttlingException: A.throttlingException
            };
            if (A.serviceUnavailableException !== void 0) return {
                serviceUnavailableException: A.serviceUnavailableException
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "ConverseStreamOutputFilterSensitiveLog"),
        UdB = tA((A) => ({
            ...A,
            ...A.stream && {
                stream: "STREAMING_CONTENT"
            }
        }), "ConverseStreamResponseFilterSensitiveLog"),
        $dB = tA((A) => ({
            ...A,
            ...A.body && {
                body: X1.SENSITIVE_STRING
            }
        }), "InvokeModelRequestFilterSensitiveLog"),
        wdB = tA((A) => ({
            ...A,
            ...A.body && {
                body: X1.SENSITIVE_STRING
            }
        }), "InvokeModelResponseFilterSensitiveLog"),
        wu6 = tA((A) => ({
            ...A,
            ...A.bytes && {
                bytes: X1.SENSITIVE_STRING
            }
        }), "BidirectionalInputPayloadPartFilterSensitiveLog"),
        qu6 = tA((A) => {
            if (A.chunk !== void 0) return {
                chunk: X1.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "InvokeModelWithBidirectionalStreamInputFilterSensitiveLog"),
        qdB = tA((A) => ({
            ...A,
            ...A.body && {
                body: "STREAMING_CONTENT"
            }
        }), "InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog"),
        Nu6 = tA((A) => ({
            ...A,
            ...A.bytes && {
                bytes: X1.SENSITIVE_STRING
            }
        }), "BidirectionalOutputPayloadPartFilterSensitiveLog"),
        Lu6 = tA((A) => {
            if (A.chunk !== void 0) return {
                chunk: X1.SENSITIVE_STRING
            };
            if (A.internalServerException !== void 0) return {
                internalServerException: A.internalServerException
            };
            if (A.modelStreamErrorException !== void 0) return {
                modelStreamErrorException: A.modelStreamErrorException
            };
            if (A.validationException !== void 0) return {
                validationException: A.validationException
            };
            if (A.throttlingException !== void 0) return {
                throttlingException: A.throttlingException
            };
            if (A.modelTimeoutException !== void 0) return {
                modelTimeoutException: A.modelTimeoutException
            };
            if (A.serviceUnavailableException !== void 0) return {
                serviceUnavailableException: A.serviceUnavailableException
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog"),
        NdB = tA((A) => ({
            ...A,
            ...A.body && {
                body: "STREAMING_CONTENT"
            }
        }), "InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog"),
        LdB = tA((A) => ({
            ...A,
            ...A.body && {
                body: X1.SENSITIVE_STRING
            }
        }), "InvokeModelWithResponseStreamRequestFilterSensitiveLog"),
        Mu6 = tA((A) => ({
            ...A,
            ...A.bytes && {
                bytes: X1.SENSITIVE_STRING
            }
        }), "PayloadPartFilterSensitiveLog"),
        Ou6 = tA((A) => {
            if (A.chunk !== void 0) return {
                chunk: X1.SENSITIVE_STRING
            };
            if (A.internalServerException !== void 0) return {
                internalServerException: A.internalServerException
            };
            if (A.modelStreamErrorException !== void 0) return {
                modelStreamErrorException: A.modelStreamErrorException
            };
            if (A.validationException !== void 0) return {
                validationException: A.validationException
            };
            if (A.throttlingException !== void 0) return {
                throttlingException: A.throttlingException
            };
            if (A.modelTimeoutException !== void 0) return {
                modelTimeoutException: A.modelTimeoutException
            };
            if (A.serviceUnavailableException !== void 0) return {
                serviceUnavailableException: A.serviceUnavailableException
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "ResponseStreamFilterSensitiveLog"),
        MdB = tA((A) => ({
            ...A,
            ...A.body && {
                body: "STREAMING_CONTENT"
            }
        }), "InvokeModelWithResponseStreamResponseFilterSensitiveLog"),
        Y3 = OV(),
        Ru6 = UDA(),
        Tu6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply"), B.p("guardrailIdentifier", () => A.guardrailIdentifier, "{guardrailIdentifier}", !1), B.p("guardrailVersion", () => A.guardrailVersion, "{guardrailVersion}", !1);
            let Z;
            return Z = JSON.stringify((0, X1.take)(A, {
                content: tA((I) => Em6(I, Q), "content"),
                outputScope: [],
                source: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_ApplyGuardrailCommand"),
        Pu6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/model/{modelId}/converse"), B.p("modelId", () => A.modelId, "{modelId}", !1);
            let Z;
            return Z = JSON.stringify((0, X1.take)(A, {
                additionalModelRequestFields: tA((I) => dwA(I, Q), "additionalModelRequestFields"),
                additionalModelResponseFieldPaths: tA((I) => (0, X1._json)(I), "additionalModelResponseFieldPaths"),
                guardrailConfig: tA((I) => (0, X1._json)(I), "guardrailConfig"),
                inferenceConfig: tA((I) => vdB(I, Q), "inferenceConfig"),
                messages: tA((I) => bdB(I, Q), "messages"),
                performanceConfig: tA((I) => (0, X1._json)(I), "performanceConfig"),
                promptVariables: tA((I) => (0, X1._json)(I), "promptVariables"),
                requestMetadata: tA((I) => (0, X1._json)(I), "requestMetadata"),
                system: tA((I) => fdB(I, Q), "system"),
                toolConfig: tA((I) => hdB(I, Q), "toolConfig")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_ConverseCommand"),
        ju6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/model/{modelId}/converse-stream"), B.p("modelId", () => A.modelId, "{modelId}", !1);
            let Z;
            return Z = JSON.stringify((0, X1.take)(A, {
                additionalModelRequestFields: tA((I) => dwA(I, Q), "additionalModelRequestFields"),
                additionalModelResponseFieldPaths: tA((I) => (0, X1._json)(I), "additionalModelResponseFieldPaths"),
                guardrailConfig: tA((I) => (0, X1._json)(I), "guardrailConfig"),
                inferenceConfig: tA((I) => vdB(I, Q), "inferenceConfig"),
                messages: tA((I) => bdB(I, Q), "messages"),
                performanceConfig: tA((I) => (0, X1._json)(I), "performanceConfig"),
                promptVariables: tA((I) => (0, X1._json)(I), "promptVariables"),
                requestMetadata: tA((I) => (0, X1._json)(I), "requestMetadata"),
                system: tA((I) => fdB(I, Q), "system"),
                toolConfig: tA((I) => hdB(I, Q), "toolConfig")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_ConverseStreamCommand"),
        Su6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = {};
            B.bp("/async-invoke/{invocationArn}"), B.p("invocationArn", () => A.invocationArn, "{invocationArn}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetAsyncInvokeCommand"),
        _u6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = (0, X1.map)({}, X1.isSerializableHeaderValue, {
                    [xl1]: A[TeA] || "application/octet-stream",
                    [Ol1]: A[Ol1],
                    [odB]: A[adB],
                    [sdB]: A[idB],
                    [rdB]: A[ndB],
                    [jeA]: A[PeA]
                });
            B.bp("/model/{modelId}/invoke"), B.p("modelId", () => A.modelId, "{modelId}", !1);
            let Z;
            if (A.body !== void 0) Z = A.body;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_InvokeModelCommand"),
        ku6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/model/{modelId}/invoke-with-bidirectional-stream"), B.p("modelId", () => A.modelId, "{modelId}", !1);
            let Z;
            if (A.body !== void 0) Z = tu6(A.body, Q);
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_InvokeModelWithBidirectionalStreamCommand"),
        yu6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = (0, X1.map)({}, X1.isSerializableHeaderValue, {
                    [xl1]: A[TeA] || "application/octet-stream",
                    [Kd6]: A[Ol1],
                    [odB]: A[adB],
                    [sdB]: A[idB],
                    [rdB]: A[ndB],
                    [jeA]: A[PeA]
                });
            B.bp("/model/{modelId}/invoke-with-response-stream"), B.p("modelId", () => A.modelId, "{modelId}", !1);
            let Z;
            if (A.body !== void 0) Z = A.body;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_InvokeModelWithResponseStreamCommand"),
        xu6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = {};
            B.bp("/async-invoke");
            let Z = (0, X1.map)({
                    [cmB]: [() => A.submitTimeAfter !== void 0, () => (0, X1.serializeDateTime)(A[cmB]).toString()],
                    [pmB]: [() => A.submitTimeBefore !== void 0, () => (0, X1.serializeDateTime)(A[pmB]).toString()],
                    [mmB]: [, A[mmB]],
                    [hmB]: [() => A.maxResults !== void 0, () => A[hmB].toString()],
                    [gmB]: [, A[gmB]],
                    [umB]: [, A[umB]],
                    [dmB]: [, A[dmB]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAsyncInvokesCommand"),
        vu6 = tA(async (A, Q) => {
            let B = (0, Gq.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/async-invoke");
            let Z;
            return Z = JSON.stringify((0, X1.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, Ru6.v4)()],
                modelId: [],
                modelInput: tA((I) => Lm6(I, Q), "modelInput"),
                outputDataConfig: tA((I) => (0, X1._json)(I), "outputDataConfig"),
                tags: tA((I) => (0, X1._json)(I), "tags")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_StartAsyncInvokeCommand"),
        bu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A)
                }),
                G = (0, X1.expectNonNull)((0, X1.expectObject)(await (0, Y3.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X1.take)(G, {
                    action: X1.expectString,
                    actionReason: X1.expectString,
                    assessments: tA((I) => ddB(I, Q), "assessments"),
                    guardrailCoverage: X1._json,
                    outputs: X1._json,
                    usage: X1._json
                });
            return Object.assign(B, Z), B
        }, "de_ApplyGuardrailCommand"),
        fu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A)
                }),
                G = (0, X1.expectNonNull)((0, X1.expectObject)(await (0, Y3.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X1.take)(G, {
                    additionalModelResponseFields: tA((I) => ReA(I, Q), "additionalModelResponseFields"),
                    metrics: X1._json,
                    output: tA((I) => dm6((0, Y3.awsExpectUnion)(I), Q), "output"),
                    performanceConfig: X1._json,
                    stopReason: X1.expectString,
                    trace: tA((I) => lm6(I, Q), "trace"),
                    usage: X1._json
                });
            return Object.assign(B, Z), B
        }, "de_ConverseCommand"),
        hu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A)
                }),
                G = A.body;
            return B.stream = Am6(G, Q), B
        }, "de_ConverseStreamCommand"),
        gu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A)
                }),
                G = (0, X1.expectNonNull)((0, X1.expectObject)(await (0, Y3.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X1.take)(G, {
                    clientRequestToken: X1.expectString,
                    endTime: tA((I) => (0, X1.expectNonNull)((0, X1.parseRfc3339DateTimeWithOffset)(I)), "endTime"),
                    failureMessage: X1.expectString,
                    invocationArn: X1.expectString,
                    lastModifiedTime: tA((I) => (0, X1.expectNonNull)((0, X1.parseRfc3339DateTimeWithOffset)(I)), "lastModifiedTime"),
                    modelArn: X1.expectString,
                    outputDataConfig: tA((I) => (0, X1._json)((0, Y3.awsExpectUnion)(I)), "outputDataConfig"),
                    status: X1.expectString,
                    submitTime: tA((I) => (0, X1.expectNonNull)((0, X1.parseRfc3339DateTimeWithOffset)(I)), "submitTime")
                });
            return Object.assign(B, Z), B
        }, "de_GetAsyncInvokeCommand"),
        uu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A),
                    [TeA]: [, A.headers[xl1]],
                    [PeA]: [, A.headers[jeA]]
                }),
                G = await (0, X1.collectBody)(A.body, Q);
            return B.body = G, B
        }, "de_InvokeModelCommand"),
        mu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A)
                }),
                G = A.body;
            return B.body = Qm6(G, Q), B
        }, "de_InvokeModelWithBidirectionalStreamCommand"),
        du6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A),
                    [TeA]: [, A.headers[Dd6]],
                    [PeA]: [, A.headers[jeA]]
                }),
                G = A.body;
            return B.body = Bm6(G, Q), B
        }, "de_InvokeModelWithResponseStreamCommand"),
        cu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A)
                }),
                G = (0, X1.expectNonNull)((0, X1.expectObject)(await (0, Y3.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X1.take)(G, {
                    asyncInvokeSummaries: tA((I) => vm6(I, Q), "asyncInvokeSummaries"),
                    nextToken: X1.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListAsyncInvokesCommand"),
        pu6 = tA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return $f(A, Q);
            let B = (0, X1.map)({
                    $metadata: MW(A)
                }),
                G = (0, X1.expectNonNull)((0, X1.expectObject)(await (0, Y3.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X1.take)(G, {
                    invocationArn: X1.expectString
                });
            return Object.assign(B, Z), B
        }, "de_StartAsyncInvokeCommand"),
        $f = tA(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, Y3.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, Y3.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "AccessDeniedException":
                case "com.amazonaws.bedrockruntime#AccessDeniedException":
                    throw await iu6(B, Q);
                case "InternalServerException":
                case "com.amazonaws.bedrockruntime#InternalServerException":
                    throw await OdB(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.bedrockruntime#ResourceNotFoundException":
                    throw await ru6(B, Q);
                case "ServiceQuotaExceededException":
                case "com.amazonaws.bedrockruntime#ServiceQuotaExceededException":
                    throw await ou6(B, Q);
                case "ThrottlingException":
                case "com.amazonaws.bedrockruntime#ThrottlingException":
                    throw await jdB(B, Q);