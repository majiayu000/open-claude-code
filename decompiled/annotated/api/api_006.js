/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: api_006.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 6/30
 * Lines: 109023 - 110522 (1500 lines)
 * Original file: cli.js
 */

    UJ8(o_Q, {
        AccessDeniedException: () => t_Q,
        AgreementStatus: () => SJ8,
        ApplicationType: () => fJ8,
        AttributeType: () => dJ8,
        AuthorizationStatus: () => OW8,
        AutomatedEvaluationConfigFilterSensitiveLog: () => zkQ,
        AutomatedEvaluationCustomMetricConfigFilterSensitiveLog: () => CkQ,
        AutomatedEvaluationCustomMetricSource: () => fmA,
        AutomatedEvaluationCustomMetricSourceFilterSensitiveLog: () => HkQ,
        BatchDeleteEvaluationJobCommand: () => fyQ,
        BatchDeleteEvaluationJobErrorFilterSensitiveLog: () => VkQ,
        BatchDeleteEvaluationJobItemFilterSensitiveLog: () => KkQ,
        BatchDeleteEvaluationJobRequestFilterSensitiveLog: () => FkQ,
        BatchDeleteEvaluationJobResponseFilterSensitiveLog: () => DkQ,
        Bedrock: () => fxQ,
        BedrockClient: () => sz,
        BedrockServiceException: () => uR,
        ByteContentDocFilterSensitiveLog: () => MkQ,
        CommitmentDuration: () => NW8,
        ConflictException: () => GkQ,
        CreateCustomModelCommand: () => hyQ,
        CreateEvaluationJobCommand: () => gyQ,
        CreateEvaluationJobRequestFilterSensitiveLog: () => MyQ,
        CreateFoundationModelAgreementCommand: () => uyQ,
        CreateGuardrailCommand: () => myQ,
        CreateGuardrailRequestFilterSensitiveLog: () => dkQ,
        CreateGuardrailVersionCommand: () => dyQ,
        CreateGuardrailVersionRequestFilterSensitiveLog: () => ckQ,
        CreateInferenceProfileCommand: () => cyQ,
        CreateInferenceProfileRequestFilterSensitiveLog: () => IyQ,
        CreateMarketplaceModelEndpointCommand: () => pyQ,
        CreateModelCopyJobCommand: () => lyQ,
        CreateModelCustomizationJobCommand: () => iyQ,
        CreateModelCustomizationJobRequestFilterSensitiveLog: () => EyQ,
        CreateModelImportJobCommand: () => nyQ,
        CreateModelInvocationJobCommand: () => ayQ,
        CreatePromptRouterCommand: () => syQ,
        CreatePromptRouterRequestFilterSensitiveLog: () => KyQ,
        CreateProvisionedModelThroughputCommand: () => ryQ,
        CustomMetricDefinitionFilterSensitiveLog: () => RW8,
        CustomizationConfig: () => uT1,
        CustomizationType: () => kJ8,
        DeleteCustomModelCommand: () => oyQ,
        DeleteFoundationModelAgreementCommand: () => tyQ,
        DeleteGuardrailCommand: () => eyQ,
        DeleteImportedModelCommand: () => AxQ,
        DeleteInferenceProfileCommand: () => QxQ,
        DeleteMarketplaceModelEndpointCommand: () => BxQ,
        DeleteModelInvocationLoggingConfigurationCommand: () => GxQ,
        DeletePromptRouterCommand: () => ZxQ,
        DeleteProvisionedModelThroughputCommand: () => IxQ,
        DeregisterMarketplaceModelEndpointCommand: () => YxQ,
        EndpointConfig: () => hT1,
        EntitlementAvailability: () => PW8,
        EvaluationBedrockModelFilterSensitiveLog: () => qkQ,
        EvaluationConfig: () => hmA,
        EvaluationConfigFilterSensitiveLog: () => AP1,
        EvaluationDatasetFilterSensitiveLog: () => EkQ,
        EvaluationDatasetLocation: () => cT1,
        EvaluationDatasetMetricConfigFilterSensitiveLog: () => eT1,
        EvaluationInferenceConfig: () => dmA,
        EvaluationInferenceConfigFilterSensitiveLog: () => JP1,
        EvaluationJobStatus: () => bJ8,
        EvaluationJobType: () => nJ8,
        EvaluationModelConfig: () => lT1,
        EvaluationModelConfigFilterSensitiveLog: () => NkQ,
        EvaluationPrecomputedRagSourceConfig: () => nT1,
        EvaluationTaskType: () => hJ8,
        EvaluatorModelConfig: () => pT1,
        ExternalSourceFilterSensitiveLog: () => OkQ,
        ExternalSourceType: () => uJ8,
        ExternalSourcesGenerationConfigurationFilterSensitiveLog: () => LkQ,
        ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog: () => RkQ,
        FineTuningJobStatus: () => yW8,
        FoundationModelLifecycleStatus: () => $W8,
        GenerationConfigurationFilterSensitiveLog: () => TkQ,
        GetCustomModelCommand: () => JxQ,
        GetCustomModelResponseFilterSensitiveLog: () => XkQ,
        GetEvaluationJobCommand: () => WxQ,
        GetEvaluationJobRequestFilterSensitiveLog: () => ykQ,
        GetEvaluationJobResponseFilterSensitiveLog: () => OyQ,
        GetFoundationModelAvailabilityCommand: () => XxQ,
        GetFoundationModelCommand: () => FxQ,
        GetGuardrailCommand: () => VxQ,
        GetGuardrailResponseFilterSensitiveLog: () => QyQ,
        GetImportedModelCommand: () => KxQ,
        GetInferenceProfileCommand: () => DxQ,
        GetInferenceProfileResponseFilterSensitiveLog: () => YyQ,
        GetMarketplaceModelEndpointCommand: () => HxQ,
        GetModelCopyJobCommand: () => CxQ,
        GetModelCustomizationJobCommand: () => ExQ,
        GetModelCustomizationJobResponseFilterSensitiveLog: () => zyQ,
        GetModelImportJobCommand: () => zxQ,
        GetModelInvocationJobCommand: () => UxQ,
        GetModelInvocationJobResponseFilterSensitiveLog: () => XyQ,
        GetModelInvocationLoggingConfigurationCommand: () => $xQ,
        GetPromptRouterCommand: () => wxQ,
        GetPromptRouterResponseFilterSensitiveLog: () => DyQ,
        GetProvisionedModelThroughputCommand: () => qxQ,
        GetUseCaseForModelAccessCommand: () => NxQ,
        GuardrailContentFilterAction: () => sJ8,
        GuardrailContentFilterConfigFilterSensitiveLog: () => vkQ,
        GuardrailContentFilterFilterSensitiveLog: () => pkQ,
        GuardrailContentFilterType: () => tJ8,
        GuardrailContentFiltersTierConfigFilterSensitiveLog: () => bkQ,
        GuardrailContentFiltersTierFilterSensitiveLog: () => lkQ,
        GuardrailContentFiltersTierName: () => eJ8,
        GuardrailContentPolicyConfigFilterSensitiveLog: () => BP1,
        GuardrailContentPolicyFilterSensitiveLog: () => ikQ,
        GuardrailContextualGroundingAction: () => AW8,
        GuardrailContextualGroundingFilterConfigFilterSensitiveLog: () => fkQ,
        GuardrailContextualGroundingFilterFilterSensitiveLog: () => nkQ,
        GuardrailContextualGroundingFilterType: () => QW8,
        GuardrailContextualGroundingPolicyConfigFilterSensitiveLog: () => GP1,
        GuardrailContextualGroundingPolicyFilterSensitiveLog: () => akQ,
        GuardrailFilterStrength: () => oJ8,
        GuardrailManagedWordsConfigFilterSensitiveLog: () => ukQ,
        GuardrailManagedWordsFilterSensitiveLog: () => tkQ,
        GuardrailManagedWordsType: () => WW8,
        GuardrailModality: () => rJ8,
        GuardrailPiiEntityType: () => GW8,
        GuardrailSensitiveInformationAction: () => BW8,
        GuardrailStatus: () => XW8,
        GuardrailSummaryFilterSensitiveLog: () => ByQ,
        GuardrailTopicAction: () => IW8,
        GuardrailTopicConfigFilterSensitiveLog: () => gkQ,
        GuardrailTopicFilterSensitiveLog: () => rkQ,
        GuardrailTopicPolicyConfigFilterSensitiveLog: () => ZP1,
        GuardrailTopicPolicyFilterSensitiveLog: () => okQ,
        GuardrailTopicType: () => YW8,
        GuardrailTopicsTierConfigFilterSensitiveLog: () => hkQ,
        GuardrailTopicsTierFilterSensitiveLog: () => skQ,
        GuardrailTopicsTierName: () => ZW8,
        GuardrailWordAction: () => JW8,
        GuardrailWordConfigFilterSensitiveLog: () => mkQ,
        GuardrailWordFilterSensitiveLog: () => ekQ,
        GuardrailWordPolicyConfigFilterSensitiveLog: () => IP1,
        GuardrailWordPolicyFilterSensitiveLog: () => AyQ,
        HumanEvaluationConfigFilterSensitiveLog: () => wkQ,
        HumanEvaluationCustomMetricFilterSensitiveLog: () => UkQ,
        HumanWorkflowConfigFilterSensitiveLog: () => $kQ,
        ImplicitFilterConfigurationFilterSensitiveLog: () => PkQ,
        InferenceProfileModelSource: () => aT1,
        InferenceProfileStatus: () => FW8,
        InferenceProfileSummaryFilterSensitiveLog: () => JyQ,
        InferenceProfileType: () => VW8,
        InferenceType: () => zW8,
        InternalServerException: () => e_Q,
        InvocationLogSource: () => mT1,
        InvocationLogsConfigFilterSensitiveLog: () => WkQ,
        JobStatusDetails: () => kW8,
        KnowledgeBaseConfig: () => umA,
        KnowledgeBaseConfigFilterSensitiveLog: () => NyQ,
        KnowledgeBaseRetrievalConfigurationFilterSensitiveLog: () => YP1,
        KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog: () => $yQ,
        KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog: () => UyQ,
        ListCustomModelsCommand: () => FP1,
        ListEvaluationJobsCommand: () => VP1,
        ListFoundationModelAgreementOffersCommand: () => LxQ,
        ListFoundationModelsCommand: () => MxQ,
        ListGuardrailsCommand: () => KP1,
        ListGuardrailsResponseFilterSensitiveLog: () => GyQ,
        ListImportedModelsCommand: () => DP1,
        ListInferenceProfilesCommand: () => HP1,
        ListInferenceProfilesResponseFilterSensitiveLog: () => WyQ,
        ListMarketplaceModelEndpointsCommand: () => CP1,
        ListModelCopyJobsCommand: () => EP1,
        ListModelCustomizationJobsCommand: () => zP1,
        ListModelImportJobsCommand: () => UP1,
        ListModelInvocationJobsCommand: () => $P1,
        ListModelInvocationJobsResponseFilterSensitiveLog: () => VyQ,
        ListPromptRoutersCommand: () => wP1,
        ListPromptRoutersResponseFilterSensitiveLog: () => CyQ,
        ListProvisionedModelThroughputsCommand: () => qP1,
        ListTagsForResourceCommand: () => OxQ,
        MetadataAttributeSchemaFilterSensitiveLog: () => TW8,
        MetadataConfigurationForRerankingFilterSensitiveLog: () => SkQ,
        ModelCopyJobStatus: () => KW8,
        ModelCustomization: () => EW8,
        ModelCustomizationJobStatus: () => _W8,
        ModelDataSource: () => gT1,
        ModelImportJobStatus: () => DW8,
        ModelInvocationJobInputDataConfig: () => sT1,
        ModelInvocationJobOutputDataConfig: () => rT1,
        ModelInvocationJobStatus: () => CW8,
        ModelInvocationJobSummaryFilterSensitiveLog: () => FyQ,
        ModelModality: () => UW8,
        ModelStatus: () => yJ8,
        OfferType: () => SW8,
        PerformanceConfigLatency: () => gJ8,
        PromptRouterStatus: () => wW8,
        PromptRouterSummaryFilterSensitiveLog: () => HyQ,
        PromptRouterType: () => qW8,
        PromptTemplateFilterSensitiveLog: () => QP1,
        ProvisionedModelStatus: () => LW8,
        PutModelInvocationLoggingConfigurationCommand: () => RxQ,
        PutUseCaseForModelAccessCommand: () => TxQ,
        QueryTransformationType: () => mJ8,
        RAGConfig: () => mmA,
        RAGConfigFilterSensitiveLog: () => LyQ,
        RatingScaleItemValue: () => bmA,
        RegionAvailability: () => jW8,
        RegisterMarketplaceModelEndpointCommand: () => PxQ,
        RequestMetadataBaseFiltersFilterSensitiveLog: () => oT1,
        RequestMetadataFilters: () => dT1,
        RequestMetadataFiltersFilterSensitiveLog: () => JkQ,
        RerankingMetadataSelectionMode: () => pJ8,
        RerankingMetadataSelectiveModeConfiguration: () => iT1,
        RerankingMetadataSelectiveModeConfigurationFilterSensitiveLog: () => jkQ,
        ResourceNotFoundException: () => AkQ,
        RetrievalFilter: () => gmA,
        RetrievalFilterFilterSensitiveLog: () => xW8,
        RetrieveAndGenerateConfigurationFilterSensitiveLog: () => qyQ,
        RetrieveAndGenerateType: () => iJ8,
        RetrieveConfigFilterSensitiveLog: () => wyQ,
        S3InputFormat: () => HW8,
        SearchType: () => cJ8,
        ServiceQuotaExceededException: () => ZkQ,
        ServiceUnavailableException: () => IkQ,
        SortByProvisionedModels: () => MW8,
        SortJobsBy: () => aJ8,
        SortModelsBy: () => xJ8,
        SortOrder: () => vJ8,
        Status: () => _J8,
        StopEvaluationJobCommand: () => jxQ,
        StopEvaluationJobRequestFilterSensitiveLog: () => xkQ,
        StopModelCustomizationJobCommand: () => SxQ,
        StopModelInvocationJobCommand: () => _xQ,
        TagResourceCommand: () => kxQ,
        ThrottlingException: () => QkQ,
        TooManyTagsException: () => YkQ,
        TrainingDataConfigFilterSensitiveLog: () => lmA,
        UntagResourceCommand: () => yxQ,
        UpdateGuardrailCommand: () => xxQ,
        UpdateGuardrailRequestFilterSensitiveLog: () => ZyQ,
        UpdateMarketplaceModelEndpointCommand: () => vxQ,
        UpdateProvisionedModelThroughputCommand: () => bxQ,
        ValidationException: () => BkQ,
        VectorSearchBedrockRerankingConfigurationFilterSensitiveLog: () => _kQ,
        VectorSearchRerankingConfigurationFilterSensitiveLog: () => kkQ,
        VectorSearchRerankingConfigurationType: () => lJ8,
        __Client: () => h.Client,
        paginateListCustomModels: () => ID8,
        paginateListEvaluationJobs: () => YD8,
        paginateListGuardrails: () => JD8,
        paginateListImportedModels: () => WD8,
        paginateListInferenceProfiles: () => XD8,
        paginateListMarketplaceModelEndpoints: () => FD8,
        paginateListModelCopyJobs: () => VD8,
        paginateListModelCustomizationJobs: () => KD8,
        paginateListModelImportJobs: () => DD8,
        paginateListModelInvocationJobs: () => HD8,
        paginateListPromptRouters: () => CD8,
        paginateListProvisionedModelThroughputs: () => ED8
    });
    hxQ.exports = wJ8(o_Q);
    var T_Q = THA(),
        qJ8 = PHA(),
        NJ8 = jHA(),
        P_Q = J6A(),
        LJ8 = S8(),
        BB = nB(),
        MJ8 = zX(),
        G2 = E5(),
        j_Q = X6(),
        S_Q = DR1(),
        OJ8 = AA((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "bedrock"
            })
        }, "resolveClientEndpointParameters"),
        F2 = {
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
        RJ8 = R_Q(),
        __Q = fHA(),
        k_Q = lz(),
        h = l6(),
        TJ8 = AA((A) => {
            let {
                httpAuthSchemes: Q,
                httpAuthSchemeProvider: B,
                credentials: G,
                token: Z
            } = A;
            return {
                setHttpAuthScheme(I) {
                    let Y = Q.findIndex((J) => J.schemeId === I.schemeId);
                    if (Y === -1) Q.push(I);
                    else Q.splice(Y, 1, I)
                },
                httpAuthSchemes() {
                    return Q
                },
                setHttpAuthSchemeProvider(I) {
                    B = I
                },
                httpAuthSchemeProvider() {
                    return B
                },
                setCredentials(I) {
                    G = I
                },
                credentials() {
                    return G
                },
                setToken(I) {
                    Z = I
                },
                token() {
                    return Z
                }
            }
        }, "getHttpAuthExtensionConfiguration"),
        PJ8 = AA((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials(),
                token: A.token()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        jJ8 = AA((A, Q) => {
            let B = Object.assign((0, __Q.getAwsRegionExtensionConfiguration)(A), (0, h.getDefaultExtensionConfiguration)(A), (0, k_Q.getHttpHandlerExtensionConfiguration)(A), TJ8(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, __Q.resolveAwsRegionExtensionConfiguration)(B), (0, h.resolveDefaultRuntimeConfig)(B), (0, k_Q.resolveHttpHandlerRuntimeConfig)(B), PJ8(B))
        }, "resolveRuntimeExtensions"),
        sz = class extends h.Client {
            static {
                AA(this, "BedrockClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, RJ8.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = OJ8(Q),
                    G = (0, P_Q.resolveUserAgentConfig)(B),
                    Z = (0, j_Q.resolveRetryConfig)(G),
                    I = (0, LJ8.resolveRegionConfig)(Z),
                    Y = (0, T_Q.resolveHostHeaderConfig)(I),
                    J = (0, G2.resolveEndpointConfig)(Y),
                    W = (0, S_Q.resolveHttpAuthSchemeConfig)(J),
                    X = jJ8(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, P_Q.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, j_Q.getRetryPlugin)(this.config)), this.middlewareStack.use((0, MJ8.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, T_Q.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, qJ8.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, NJ8.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, BB.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: S_Q.defaultBedrockHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: AA(async (F) => new BB.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials,
                        "smithy.api#httpBearerAuth": F.token
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, BB.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        V2 = sG(),
        uR = class A extends h.ServiceException {
            static {
                AA(this, "BedrockServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        t_Q = class A extends uR {
            static {
                AA(this, "AccessDeniedException")
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
        SJ8 = {
            AVAILABLE: "AVAILABLE",
            ERROR: "ERROR",
            NOT_AVAILABLE: "NOT_AVAILABLE",
            PENDING: "PENDING"
        },
        e_Q = class A extends uR {
            static {
                AA(this, "InternalServerException")
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
        AkQ = class A extends uR {
            static {
                AA(this, "ResourceNotFoundException")
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
        QkQ = class A extends uR {
            static {
                AA(this, "ThrottlingException")
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
        BkQ = class A extends uR {
            static {
                AA(this, "ValidationException")
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
        GkQ = class A extends uR {
            static {
                AA(this, "ConflictException")
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
        hT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.sageMaker !== void 0) return B.sageMaker(Q.sageMaker);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(hT1 || (hT1 = {}));
    var _J8 = {
            INCOMPATIBLE_ENDPOINT: "INCOMPATIBLE_ENDPOINT",
            REGISTERED: "REGISTERED"
        },
        ZkQ = class A extends uR {
            static {
                AA(this, "ServiceQuotaExceededException")
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
        IkQ = class A extends uR {
            static {
                AA(this, "ServiceUnavailableException")
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
        gT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.s3DataSource !== void 0) return B.s3DataSource(Q.s3DataSource);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(gT1 || (gT1 = {}));
    var YkQ = class A extends uR {
            static {
                AA(this, "TooManyTagsException")
            }
            name = "TooManyTagsException";
            $fault = "client";
            resourceName;
            constructor(Q) {
                super({
                    name: "TooManyTagsException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.resourceName = Q.resourceName
            }
        },
        uT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.distillationConfig !== void 0) return B.distillationConfig(Q.distillationConfig);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(uT1 || (uT1 = {}));
    var kJ8 = {
            CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
            DISTILLATION: "DISTILLATION",
            FINE_TUNING: "FINE_TUNING",
            IMPORTED: "IMPORTED"
        },
        yJ8 = {
            ACTIVE: "Active",
            CREATING: "Creating",
            FAILED: "Failed"
        },
        mT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.s3Uri !== void 0) return B.s3Uri(Q.s3Uri);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(mT1 || (mT1 = {}));
    var dT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.equals !== void 0) return B.equals(Q.equals);
            if (Q.notEquals !== void 0) return B.notEquals(Q.notEquals);
            if (Q.andAll !== void 0) return B.andAll(Q.andAll);
            if (Q.orAll !== void 0) return B.orAll(Q.orAll);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(dT1 || (dT1 = {}));
    var xJ8 = {
            CREATION_TIME: "CreationTime"
        },
        vJ8 = {
            ASCENDING: "Ascending",
            DESCENDING: "Descending"
        },
        bJ8 = {
            COMPLETED: "Completed",
            DELETING: "Deleting",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress",
            STOPPED: "Stopped",
            STOPPING: "Stopping"
        },
        fJ8 = {
            MODEL_EVALUATION: "ModelEvaluation",
            RAG_EVALUATION: "RagEvaluation"
        },
        bmA;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.stringValue !== void 0) return B.stringValue(Q.stringValue);
            if (Q.floatValue !== void 0) return B.floatValue(Q.floatValue);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(bmA || (bmA = {}));
    var fmA;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.customMetricDefinition !== void 0) return B.customMetricDefinition(Q.customMetricDefinition);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(fmA || (fmA = {}));
    var cT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.s3Uri !== void 0) return B.s3Uri(Q.s3Uri);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(cT1 || (cT1 = {}));
    var hJ8 = {
            CLASSIFICATION: "Classification",
            CUSTOM: "Custom",
            GENERATION: "Generation",
            QUESTION_AND_ANSWER: "QuestionAndAnswer",
            SUMMARIZATION: "Summarization"
        },
        pT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.bedrockEvaluatorModels !== void 0) return B.bedrockEvaluatorModels(Q.bedrockEvaluatorModels);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(pT1 || (pT1 = {}));
    var hmA;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.automated !== void 0) return B.automated(Q.automated);
            if (Q.human !== void 0) return B.human(Q.human);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(hmA || (hmA = {}));
    var gJ8 = {
            OPTIMIZED: "optimized",
            STANDARD: "standard"
        },
        lT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.bedrockModel !== void 0) return B.bedrockModel(Q.bedrockModel);
            if (Q.precomputedInferenceSource !== void 0) return B.precomputedInferenceSource(Q.precomputedInferenceSource);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(lT1 || (lT1 = {}));
    var uJ8 = {
            BYTE_CONTENT: "BYTE_CONTENT",
            S3: "S3"
        },
        mJ8 = {
            QUERY_DECOMPOSITION: "QUERY_DECOMPOSITION"
        },
        dJ8 = {
            BOOLEAN: "BOOLEAN",
            NUMBER: "NUMBER",
            STRING: "STRING",
            STRING_LIST: "STRING_LIST"
        },
        cJ8 = {
            HYBRID: "HYBRID",
            SEMANTIC: "SEMANTIC"
        },
        pJ8 = {
            ALL: "ALL",
            SELECTIVE: "SELECTIVE"
        },
        iT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.fieldsToInclude !== void 0) return B.fieldsToInclude(Q.fieldsToInclude);
            if (Q.fieldsToExclude !== void 0) return B.fieldsToExclude(Q.fieldsToExclude);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(iT1 || (iT1 = {}));
    var lJ8 = {
            BEDROCK_RERANKING_MODEL: "BEDROCK_RERANKING_MODEL"
        },
        iJ8 = {
            EXTERNAL_SOURCES: "EXTERNAL_SOURCES",
            KNOWLEDGE_BASE: "KNOWLEDGE_BASE"
        },
        nT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.retrieveSourceConfig !== void 0) return B.retrieveSourceConfig(Q.retrieveSourceConfig);
            if (Q.retrieveAndGenerateSourceConfig !== void 0) return B.retrieveAndGenerateSourceConfig(Q.retrieveAndGenerateSourceConfig);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(nT1 || (nT1 = {}));
    var nJ8 = {
            AUTOMATED: "Automated",
            HUMAN: "Human"
        },
        aJ8 = {
            CREATION_TIME: "CreationTime"
        },
        sJ8 = {
            BLOCK: "BLOCK",
            NONE: "NONE"
        },
        rJ8 = {
            IMAGE: "IMAGE",
            TEXT: "TEXT"
        },
        oJ8 = {
            HIGH: "HIGH",
            LOW: "LOW",
            MEDIUM: "MEDIUM",
            NONE: "NONE"
        },
        tJ8 = {
            HATE: "HATE",
            INSULTS: "INSULTS",
            MISCONDUCT: "MISCONDUCT",
            PROMPT_ATTACK: "PROMPT_ATTACK",
            SEXUAL: "SEXUAL",
            VIOLENCE: "VIOLENCE"
        },
        eJ8 = {
            CLASSIC: "CLASSIC",
            STANDARD: "STANDARD"
        },
        AW8 = {
            BLOCK: "BLOCK",
            NONE: "NONE"
        },
        QW8 = {
            GROUNDING: "GROUNDING",
            RELEVANCE: "RELEVANCE"
        },
        BW8 = {
            ANONYMIZE: "ANONYMIZE",
            BLOCK: "BLOCK",
            NONE: "NONE"
        },
        GW8 = {
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
        ZW8 = {
            CLASSIC: "CLASSIC",
            STANDARD: "STANDARD"
        },
        IW8 = {
            BLOCK: "BLOCK",
            NONE: "NONE"
        },
        YW8 = {
            DENY: "DENY"
        },
        JW8 = {
            BLOCK: "BLOCK",
            NONE: "NONE"
        },
        WW8 = {
            PROFANITY: "PROFANITY"
        },
        XW8 = {
            CREATING: "CREATING",
            DELETING: "DELETING",
            FAILED: "FAILED",
            READY: "READY",
            UPDATING: "UPDATING",
            VERSIONING: "VERSIONING"
        },
        aT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.copyFrom !== void 0) return B.copyFrom(Q.copyFrom);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(aT1 || (aT1 = {}));
    var FW8 = {
            ACTIVE: "ACTIVE"
        },
        VW8 = {
            APPLICATION: "APPLICATION",
            SYSTEM_DEFINED: "SYSTEM_DEFINED"
        },
        KW8 = {
            COMPLETED: "Completed",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress"
        },
        DW8 = {
            COMPLETED: "Completed",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress"
        },
        HW8 = {
            JSONL: "JSONL"
        },
        sT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.s3InputDataConfig !== void 0) return B.s3InputDataConfig(Q.s3InputDataConfig);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(sT1 || (sT1 = {}));
    var rT1;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.s3OutputDataConfig !== void 0) return B.s3OutputDataConfig(Q.s3OutputDataConfig);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(rT1 || (rT1 = {}));
    var CW8 = {
            COMPLETED: "Completed",
            EXPIRED: "Expired",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress",
            PARTIALLY_COMPLETED: "PartiallyCompleted",
            SCHEDULED: "Scheduled",
            STOPPED: "Stopped",
            STOPPING: "Stopping",
            SUBMITTED: "Submitted",
            VALIDATING: "Validating"
        },
        EW8 = {
            CONTINUED_PRE_TRAINING: "CONTINUED_PRE_TRAINING",
            DISTILLATION: "DISTILLATION",
            FINE_TUNING: "FINE_TUNING"
        },
        zW8 = {
            ON_DEMAND: "ON_DEMAND",
            PROVISIONED: "PROVISIONED"
        },
        UW8 = {
            EMBEDDING: "EMBEDDING",
            IMAGE: "IMAGE",
            TEXT: "TEXT"
        },
        $W8 = {
            ACTIVE: "ACTIVE",
            LEGACY: "LEGACY"
        },
        wW8 = {
            AVAILABLE: "AVAILABLE"
        },
        qW8 = {
            CUSTOM: "custom",
            DEFAULT: "default"
        },
        NW8 = {
            ONE_MONTH: "OneMonth",
            SIX_MONTHS: "SixMonths"
        },
        LW8 = {
            CREATING: "Creating",
            FAILED: "Failed",
            IN_SERVICE: "InService",
            UPDATING: "Updating"
        },
        MW8 = {
            CREATION_TIME: "CreationTime"
        },
        OW8 = {
            AUTHORIZED: "AUTHORIZED",
            NOT_AUTHORIZED: "NOT_AUTHORIZED"
        },
        oT1 = AA((A) => ({
            ...A,
            ...A.equals && {
                equals: h.SENSITIVE_STRING
            },
            ...A.notEquals && {
                notEquals: h.SENSITIVE_STRING
            }
        }), "RequestMetadataBaseFiltersFilterSensitiveLog"),
        JkQ = AA((A) => {
            if (A.equals !== void 0) return {
                equals: h.SENSITIVE_STRING
            };
            if (A.notEquals !== void 0) return {
                notEquals: h.SENSITIVE_STRING
            };
            if (A.andAll !== void 0) return {
                andAll: A.andAll.map((Q) => oT1(Q))
            };
            if (A.orAll !== void 0) return {
                orAll: A.orAll.map((Q) => oT1(Q))
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "RequestMetadataFiltersFilterSensitiveLog"),
        WkQ = AA((A) => ({
            ...A,
            ...A.invocationLogSource && {
                invocationLogSource: A.invocationLogSource
            },
            ...A.requestMetadataFilters && {
                requestMetadataFilters: JkQ(A.requestMetadataFilters)
            }
        }), "InvocationLogsConfigFilterSensitiveLog"),
        lmA = AA((A) => ({
            ...A,
            ...A.invocationLogsConfig && {
                invocationLogsConfig: WkQ(A.invocationLogsConfig)
            }
        }), "TrainingDataConfigFilterSensitiveLog"),
        XkQ = AA((A) => ({
            ...A,
            ...A.trainingDataConfig && {
                trainingDataConfig: lmA(A.trainingDataConfig)
            },
            ...A.customizationConfig && {
                customizationConfig: A.customizationConfig
            }
        }), "GetCustomModelResponseFilterSensitiveLog"),
        FkQ = AA((A) => ({
            ...A,
            ...A.jobIdentifiers && {
                jobIdentifiers: h.SENSITIVE_STRING
            }
        }), "BatchDeleteEvaluationJobRequestFilterSensitiveLog"),
        VkQ = AA((A) => ({
            ...A,
            ...A.jobIdentifier && {
                jobIdentifier: h.SENSITIVE_STRING
            }
        }), "BatchDeleteEvaluationJobErrorFilterSensitiveLog"),
        KkQ = AA((A) => ({
            ...A,
            ...A.jobIdentifier && {
                jobIdentifier: h.SENSITIVE_STRING
            }
        }), "BatchDeleteEvaluationJobItemFilterSensitiveLog"),
        DkQ = AA((A) => ({
            ...A,
            ...A.errors && {
                errors: A.errors.map((Q) => VkQ(Q))
            },
            ...A.evaluationJobs && {
                evaluationJobs: A.evaluationJobs.map((Q) => KkQ(Q))
            }
        }), "BatchDeleteEvaluationJobResponseFilterSensitiveLog"),
        RW8 = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.ratingScale && {
                ratingScale: A.ratingScale.map((Q) => Q)
            }
        }), "CustomMetricDefinitionFilterSensitiveLog"),
        HkQ = AA((A) => {
            if (A.customMetricDefinition !== void 0) return {
                customMetricDefinition: h.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "AutomatedEvaluationCustomMetricSourceFilterSensitiveLog"),
        CkQ = AA((A) => ({
            ...A,
            ...A.customMetrics && {
                customMetrics: A.customMetrics.map((Q) => HkQ(Q))
            }
        }), "AutomatedEvaluationCustomMetricConfigFilterSensitiveLog"),
        EkQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.datasetLocation && {
                datasetLocation: A.datasetLocation
            }
        }), "EvaluationDatasetFilterSensitiveLog"),
        eT1 = AA((A) => ({
            ...A,
            ...A.dataset && {
                dataset: EkQ(A.dataset)
            },
            ...A.metricNames && {
                metricNames: h.SENSITIVE_STRING
            }
        }), "EvaluationDatasetMetricConfigFilterSensitiveLog"),
        zkQ = AA((A) => ({
            ...A,
            ...A.datasetMetricConfigs && {
                datasetMetricConfigs: A.datasetMetricConfigs.map((Q) => eT1(Q))
            },
            ...A.evaluatorModelConfig && {
                evaluatorModelConfig: A.evaluatorModelConfig
            },
            ...A.customMetricConfig && {
                customMetricConfig: CkQ(A.customMetricConfig)
            }
        }), "AutomatedEvaluationConfigFilterSensitiveLog"),
        UkQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.description && {
                description: h.SENSITIVE_STRING
            }
        }), "HumanEvaluationCustomMetricFilterSensitiveLog"),
        $kQ = AA((A) => ({
            ...A,
            ...A.instructions && {
                instructions: h.SENSITIVE_STRING
            }
        }), "HumanWorkflowConfigFilterSensitiveLog"),
        wkQ = AA((A) => ({
            ...A,
            ...A.humanWorkflowConfig && {
                humanWorkflowConfig: $kQ(A.humanWorkflowConfig)
            },
            ...A.customMetrics && {
                customMetrics: A.customMetrics.map((Q) => UkQ(Q))
            },
            ...A.datasetMetricConfigs && {
                datasetMetricConfigs: A.datasetMetricConfigs.map((Q) => eT1(Q))
            }
        }), "HumanEvaluationConfigFilterSensitiveLog"),
        AP1 = AA((A) => {
            if (A.automated !== void 0) return {
                automated: zkQ(A.automated)
            };
            if (A.human !== void 0) return {
                human: wkQ(A.human)
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "EvaluationConfigFilterSensitiveLog"),
        qkQ = AA((A) => ({
            ...A,
            ...A.inferenceParams && {
                inferenceParams: h.SENSITIVE_STRING
            }
        }), "EvaluationBedrockModelFilterSensitiveLog"),
        NkQ = AA((A) => {
            if (A.bedrockModel !== void 0) return {
                bedrockModel: qkQ(A.bedrockModel)
            };
            if (A.precomputedInferenceSource !== void 0) return {
                precomputedInferenceSource: A.precomputedInferenceSource
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "EvaluationModelConfigFilterSensitiveLog"),
        QP1 = AA((A) => ({
            ...A,
            ...A.textPromptTemplate && {
                textPromptTemplate: h.SENSITIVE_STRING
            }
        }), "PromptTemplateFilterSensitiveLog"),
        LkQ = AA((A) => ({
            ...A,
            ...A.promptTemplate && {
                promptTemplate: QP1(A.promptTemplate)
            }
        }), "ExternalSourcesGenerationConfigurationFilterSensitiveLog"),
        MkQ = AA((A) => ({
            ...A,
            ...A.identifier && {
                identifier: h.SENSITIVE_STRING
            },
            ...A.data && {
                data: h.SENSITIVE_STRING
            }
        }), "ByteContentDocFilterSensitiveLog"),
        OkQ = AA((A) => ({
            ...A,
            ...A.byteContent && {
                byteContent: MkQ(A.byteContent)
            }
        }), "ExternalSourceFilterSensitiveLog"),
        RkQ = AA((A) => ({
            ...A,
            ...A.sources && {
                sources: A.sources.map((Q) => OkQ(Q))
            },
            ...A.generationConfiguration && {
                generationConfiguration: LkQ(A.generationConfiguration)
            }
        }), "ExternalSourcesRetrieveAndGenerateConfigurationFilterSensitiveLog"),
        TkQ = AA((A) => ({
            ...A,
            ...A.promptTemplate && {
                promptTemplate: QP1(A.promptTemplate)
            }
        }), "GenerationConfigurationFilterSensitiveLog"),
        TW8 = AA((A) => ({
            ...A
        }), "MetadataAttributeSchemaFilterSensitiveLog"),
        PkQ = AA((A) => ({
            ...A,
            ...A.metadataAttributes && {
                metadataAttributes: h.SENSITIVE_STRING
            }
        }), "ImplicitFilterConfigurationFilterSensitiveLog"),
        jkQ = AA((A) => {
            if (A.fieldsToInclude !== void 0) return {
                fieldsToInclude: h.SENSITIVE_STRING
            };
            if (A.fieldsToExclude !== void 0) return {
                fieldsToExclude: h.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "RerankingMetadataSelectiveModeConfigurationFilterSensitiveLog"),
        SkQ = AA((A) => ({
            ...A,
            ...A.selectiveModeConfiguration && {
                selectiveModeConfiguration: jkQ(A.selectiveModeConfiguration)
            }
        }), "MetadataConfigurationForRerankingFilterSensitiveLog"),
        _kQ = AA((A) => ({
            ...A,
            ...A.metadataConfiguration && {
                metadataConfiguration: SkQ(A.metadataConfiguration)
            }
        }), "VectorSearchBedrockRerankingConfigurationFilterSensitiveLog"),
        kkQ = AA((A) => ({
            ...A,
            ...A.bedrockRerankingConfiguration && {
                bedrockRerankingConfiguration: _kQ(A.bedrockRerankingConfiguration)
            }
        }), "VectorSearchRerankingConfigurationFilterSensitiveLog"),
        ykQ = AA((A) => ({
            ...A,
            ...A.jobIdentifier && {
                jobIdentifier: h.SENSITIVE_STRING
            }
        }), "GetEvaluationJobRequestFilterSensitiveLog"),
        xkQ = AA((A) => ({
            ...A,
            ...A.jobIdentifier && {
                jobIdentifier: h.SENSITIVE_STRING
            }
        }), "StopEvaluationJobRequestFilterSensitiveLog"),
        vkQ = AA((A) => ({
            ...A,
            ...A.inputModalities && {
                inputModalities: h.SENSITIVE_STRING
            },
            ...A.outputModalities && {
                outputModalities: h.SENSITIVE_STRING
            },
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailContentFilterConfigFilterSensitiveLog"),
        bkQ = AA((A) => ({
            ...A,
            ...A.tierName && {
                tierName: h.SENSITIVE_STRING
            }
        }), "GuardrailContentFiltersTierConfigFilterSensitiveLog"),
        BP1 = AA((A) => ({
            ...A,
            ...A.filtersConfig && {
                filtersConfig: A.filtersConfig.map((Q) => vkQ(Q))
            },
            ...A.tierConfig && {
                tierConfig: bkQ(A.tierConfig)
            }
        }), "GuardrailContentPolicyConfigFilterSensitiveLog"),
        fkQ = AA((A) => ({
            ...A,
            ...A.action && {
                action: h.SENSITIVE_STRING
            }
        }), "GuardrailContextualGroundingFilterConfigFilterSensitiveLog"),
        GP1 = AA((A) => ({
            ...A,
            ...A.filtersConfig && {
                filtersConfig: A.filtersConfig.map((Q) => fkQ(Q))
            }
        }), "GuardrailContextualGroundingPolicyConfigFilterSensitiveLog"),
        hkQ = AA((A) => ({
            ...A,
            ...A.tierName && {
                tierName: h.SENSITIVE_STRING
            }
        }), "GuardrailTopicsTierConfigFilterSensitiveLog"),
        gkQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.definition && {
                definition: h.SENSITIVE_STRING
            },
            ...A.examples && {
                examples: h.SENSITIVE_STRING
            },
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailTopicConfigFilterSensitiveLog"),
        ZP1 = AA((A) => ({
            ...A,
            ...A.topicsConfig && {
                topicsConfig: A.topicsConfig.map((Q) => gkQ(Q))
            },
            ...A.tierConfig && {
                tierConfig: hkQ(A.tierConfig)
            }
        }), "GuardrailTopicPolicyConfigFilterSensitiveLog"),
        ukQ = AA((A) => ({
            ...A,
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailManagedWordsConfigFilterSensitiveLog"),
        mkQ = AA((A) => ({
            ...A,
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailWordConfigFilterSensitiveLog"),
        IP1 = AA((A) => ({
            ...A,
            ...A.wordsConfig && {
                wordsConfig: A.wordsConfig.map((Q) => mkQ(Q))
            },
            ...A.managedWordListsConfig && {
                managedWordListsConfig: A.managedWordListsConfig.map((Q) => ukQ(Q))
            }
        }), "GuardrailWordPolicyConfigFilterSensitiveLog"),
        dkQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.description && {
                description: h.SENSITIVE_STRING
            },
            ...A.topicPolicyConfig && {
                topicPolicyConfig: ZP1(A.topicPolicyConfig)
            },
            ...A.contentPolicyConfig && {
                contentPolicyConfig: BP1(A.contentPolicyConfig)
            },
            ...A.wordPolicyConfig && {
                wordPolicyConfig: IP1(A.wordPolicyConfig)
            },
            ...A.contextualGroundingPolicyConfig && {
                contextualGroundingPolicyConfig: GP1(A.contextualGroundingPolicyConfig)
            },
            ...A.blockedInputMessaging && {
                blockedInputMessaging: h.SENSITIVE_STRING
            },
            ...A.blockedOutputsMessaging && {
                blockedOutputsMessaging: h.SENSITIVE_STRING
            }
        }), "CreateGuardrailRequestFilterSensitiveLog"),
        ckQ = AA((A) => ({
            ...A,
            ...A.description && {
                description: h.SENSITIVE_STRING
            }
        }), "CreateGuardrailVersionRequestFilterSensitiveLog"),
        pkQ = AA((A) => ({
            ...A,
            ...A.inputModalities && {
                inputModalities: h.SENSITIVE_STRING
            },
            ...A.outputModalities && {
                outputModalities: h.SENSITIVE_STRING
            },
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailContentFilterFilterSensitiveLog"),
        lkQ = AA((A) => ({
            ...A,
            ...A.tierName && {
                tierName: h.SENSITIVE_STRING
            }
        }), "GuardrailContentFiltersTierFilterSensitiveLog"),
        ikQ = AA((A) => ({
            ...A,
            ...A.filters && {
                filters: A.filters.map((Q) => pkQ(Q))
            },
            ...A.tier && {
                tier: lkQ(A.tier)
            }
        }), "GuardrailContentPolicyFilterSensitiveLog"),
        nkQ = AA((A) => ({
            ...A,
            ...A.action && {
                action: h.SENSITIVE_STRING
            }
        }), "GuardrailContextualGroundingFilterFilterSensitiveLog"),
        akQ = AA((A) => ({
            ...A,
            ...A.filters && {
                filters: A.filters.map((Q) => nkQ(Q))
            }
        }), "GuardrailContextualGroundingPolicyFilterSensitiveLog"),
        skQ = AA((A) => ({
            ...A,
            ...A.tierName && {
                tierName: h.SENSITIVE_STRING
            }
        }), "GuardrailTopicsTierFilterSensitiveLog"),
        rkQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.definition && {
                definition: h.SENSITIVE_STRING
            },
            ...A.examples && {
                examples: h.SENSITIVE_STRING
            },
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailTopicFilterSensitiveLog"),
        okQ = AA((A) => ({
            ...A,
            ...A.topics && {
                topics: A.topics.map((Q) => rkQ(Q))
            },
            ...A.tier && {
                tier: skQ(A.tier)
            }
        }), "GuardrailTopicPolicyFilterSensitiveLog"),
        tkQ = AA((A) => ({
            ...A,
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailManagedWordsFilterSensitiveLog"),
        ekQ = AA((A) => ({
            ...A,
            ...A.inputAction && {
                inputAction: h.SENSITIVE_STRING
            },
            ...A.outputAction && {
                outputAction: h.SENSITIVE_STRING
            }
        }), "GuardrailWordFilterSensitiveLog"),
        AyQ = AA((A) => ({
            ...A,
            ...A.words && {
                words: A.words.map((Q) => ekQ(Q))
            },
            ...A.managedWordLists && {
                managedWordLists: A.managedWordLists.map((Q) => tkQ(Q))
            }
        }), "GuardrailWordPolicyFilterSensitiveLog"),
        QyQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.description && {
                description: h.SENSITIVE_STRING
            },
            ...A.topicPolicy && {
                topicPolicy: okQ(A.topicPolicy)
            },
            ...A.contentPolicy && {
                contentPolicy: ikQ(A.contentPolicy)
            },
            ...A.wordPolicy && {
                wordPolicy: AyQ(A.wordPolicy)
            },
            ...A.contextualGroundingPolicy && {
                contextualGroundingPolicy: akQ(A.contextualGroundingPolicy)
            },
            ...A.statusReasons && {
                statusReasons: h.SENSITIVE_STRING
            },
            ...A.failureRecommendations && {
                failureRecommendations: h.SENSITIVE_STRING
            },
            ...A.blockedInputMessaging && {
                blockedInputMessaging: h.SENSITIVE_STRING
            },
            ...A.blockedOutputsMessaging && {
                blockedOutputsMessaging: h.SENSITIVE_STRING
            }
        }), "GetGuardrailResponseFilterSensitiveLog"),
        ByQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.description && {
                description: h.SENSITIVE_STRING
            }
        }), "GuardrailSummaryFilterSensitiveLog"),
        GyQ = AA((A) => ({
            ...A,
            ...A.guardrails && {
                guardrails: A.guardrails.map((Q) => ByQ(Q))
            }
        }), "ListGuardrailsResponseFilterSensitiveLog"),
        ZyQ = AA((A) => ({
            ...A,
            ...A.name && {
                name: h.SENSITIVE_STRING
            },
            ...A.description && {
                description: h.SENSITIVE_STRING
            },
            ...A.topicPolicyConfig && {
                topicPolicyConfig: ZP1(A.topicPolicyConfig)
            },
            ...A.contentPolicyConfig && {
                contentPolicyConfig: BP1(A.contentPolicyConfig)
            },
            ...A.wordPolicyConfig && {
                wordPolicyConfig: IP1(A.wordPolicyConfig)
            },
            ...A.contextualGroundingPolicyConfig && {
                contextualGroundingPolicyConfig: GP1(A.contextualGroundingPolicyConfig)
            },
            ...A.blockedInputMessaging && {
                blockedInputMessaging: h.SENSITIVE_STRING
            },
            ...A.blockedOutputsMessaging && {
                blockedOutputsMessaging: h.SENSITIVE_STRING
            }
        }), "UpdateGuardrailRequestFilterSensitiveLog"),
        IyQ = AA((A) => ({
            ...A,
            ...A.description && {
                description: h.SENSITIVE_STRING
            },
            ...A.modelSource && {
                modelSource: A.modelSource
            }
        }), "CreateInferenceProfileRequestFilterSensitiveLog"),
        YyQ = AA((A) => ({
            ...A,
            ...A.description && {
                description: h.SENSITIVE_STRING
            }