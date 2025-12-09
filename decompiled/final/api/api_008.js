/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_008.js
 * 处理时间: 2025-12-09T03:41:36.071Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 8/30
 * Lines: 113405 - 114903 (1499 lines)
 * Original file: cli.js
 */

        }, "de_RetrievalFilter"),
        x_Q = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return kyQ((0, pB.awsExpectUnion)(G), Q)
            })
        }, "de_RetrievalFilterList"),
        pK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                externalSourcesConfiguration: AA((B) => FK8(B, Q), "externalSourcesConfiguration"),
                knowledgeBaseConfiguration: AA((B) => LK8(B, Q), "knowledgeBaseConfiguration"),
                type: h.expectString
            })
        }, "de_RetrieveAndGenerateConfiguration"),
        lK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                knowledgeBaseId: h.expectString,
                knowledgeBaseRetrievalConfiguration: AA((B) => _yQ(B, Q), "knowledgeBaseRetrievalConfiguration")
            })
        }, "de_RetrieveConfig"),
        yyQ = AA((A, Q) => {
            return (0, h.take)(A, {
                responseQualityDifference: h.limitedParseDouble
            })
        }, "de_RoutingCriteria"),
        xyQ = AA((A, Q) => {
            return (0, h.take)(A, {
                dataProcessingDetails: AA((B) => BK8(B, Q), "dataProcessingDetails"),
                trainingDetails: AA((B) => nK8(B, Q), "trainingDetails"),
                validationDetails: AA((B) => aK8(B, Q), "validationDetails")
            })
        }, "de_StatusDetails"),
        iK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                maxTokens: h.expectInt32,
                stopSequences: h._json,
                temperature: h.limitedParseFloat32,
                topP: h.limitedParseFloat32
            })
        }, "de_TextInferenceConfig"),
        nK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                lastModifiedTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                status: h.expectString
            })
        }, "de_TrainingDetails"),
        vyQ = AA((A, Q) => {
            return (0, h.take)(A, {
                trainingLoss: h.limitedParseFloat32
            })
        }, "de_TrainingMetrics"),
        aK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                lastModifiedTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                status: h.expectString
            })
        }, "de_ValidationDetails"),
        byQ = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return sK8(G, Q)
            })
        }, "de_ValidationMetrics"),
        sK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                validationLoss: h.limitedParseFloat32
            })
        }, "de_ValidatorMetric"),
        rK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                metadataConfiguration: h._json,
                modelConfiguration: AA((B) => oK8(B, Q), "modelConfiguration"),
                numberOfRerankedResults: h.expectInt32
            })
        }, "de_VectorSearchBedrockRerankingConfiguration"),
        oK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                additionalModelRequestFields: AA((B) => XP1(B, Q), "additionalModelRequestFields"),
                modelArn: h.expectString
            })
        }, "de_VectorSearchBedrockRerankingModelConfiguration"),
        tK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                bedrockRerankingConfiguration: AA((B) => rK8(B, Q), "bedrockRerankingConfiguration"),
                type: h.expectString
            })
        }, "de_VectorSearchRerankingConfiguration"),
        MB = AA((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        v_Q = "applicationTypeEquals",
        b_Q = "byCustomizationType",
        f_Q = "byInferenceType",
        h_Q = "baseModelArnEquals",
        g_Q = "byOutputModality",
        u_Q = "byProvider",
        iz = "creationTimeAfter",
        nz = "creationTimeBefore",
        m_Q = "foundationModelArnEquals",
        d_Q = "guardrailIdentifier",
        cmA = "guardrailVersion",
        c_Q = "isOwned",
        p_Q = "modelArnEquals",
        cI = "maxResults",
        l_Q = "modelStatus",
        eK8 = "modelSourceEquals",
        AD8 = "modelSourceIdentifier",
        az = "nameContains",
        pI = "nextToken",
        QD8 = "outputModelNameContains",
        i_Q = "offerType",
        n_Q = "sourceAccountEquals",
        LH = "sortBy",
        PL = "statusEquals",
        a_Q = "sourceModelArnEquals",
        MH = "sortOrder",
        s_Q = "submitTimeAfter",
        r_Q = "submitTimeBefore",
        tT1 = "type",
        BD8 = "typeEquals",
        GD8 = "targetModelNameContains",
        fyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "BatchDeleteEvaluationJob", {}).n("BedrockClient", "BatchDeleteEvaluationJobCommand").f(FkQ, DkQ).ser(vW8).de(nX8).build() {
            static {
                AA(this, "BatchDeleteEvaluationJobCommand")
            }
        },
        hyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateCustomModel", {}).n("BedrockClient", "CreateCustomModelCommand").f(void 0, void 0).ser(bW8).de(aX8).build() {
            static {
                AA(this, "CreateCustomModelCommand")
            }
        },
        gyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateEvaluationJob", {}).n("BedrockClient", "CreateEvaluationJobCommand").f(MyQ, void 0).ser(fW8).de(sX8).build() {
            static {
                AA(this, "CreateEvaluationJobCommand")
            }
        },
        uyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateFoundationModelAgreement", {}).n("BedrockClient", "CreateFoundationModelAgreementCommand").f(void 0, void 0).ser(hW8).de(rX8).build() {
            static {
                AA(this, "CreateFoundationModelAgreementCommand")
            }
        },
        myQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateGuardrail", {}).n("BedrockClient", "CreateGuardrailCommand").f(dkQ, void 0).ser(gW8).de(oX8).build() {
            static {
                AA(this, "CreateGuardrailCommand")
            }
        },
        dyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateGuardrailVersion", {}).n("BedrockClient", "CreateGuardrailVersionCommand").f(ckQ, void 0).ser(uW8).de(tX8).build() {
            static {
                AA(this, "CreateGuardrailVersionCommand")
            }
        },
        cyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateInferenceProfile", {}).n("BedrockClient", "CreateInferenceProfileCommand").f(IyQ, void 0).ser(mW8).de(eX8).build() {
            static {
                AA(this, "CreateInferenceProfileCommand")
            }
        },
        pyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateMarketplaceModelEndpoint", {}).n("BedrockClient", "CreateMarketplaceModelEndpointCommand").f(void 0, void 0).ser(dW8).de(AF8).build() {
            static {
                AA(this, "CreateMarketplaceModelEndpointCommand")
            }
        },
        lyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateModelCopyJob", {}).n("BedrockClient", "CreateModelCopyJobCommand").f(void 0, void 0).ser(cW8).de(QF8).build() {
            static {
                AA(this, "CreateModelCopyJobCommand")
            }
        },
        iyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateModelCustomizationJob", {}).n("BedrockClient", "CreateModelCustomizationJobCommand").f(EyQ, void 0).ser(pW8).de(BF8).build() {
            static {
                AA(this, "CreateModelCustomizationJobCommand")
            }
        },
        nyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateModelImportJob", {}).n("BedrockClient", "CreateModelImportJobCommand").f(void 0, void 0).ser(lW8).de(GF8).build() {
            static {
                AA(this, "CreateModelImportJobCommand")
            }
        },
        ayQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateModelInvocationJob", {}).n("BedrockClient", "CreateModelInvocationJobCommand").f(void 0, void 0).ser(iW8).de(ZF8).build() {
            static {
                AA(this, "CreateModelInvocationJobCommand")
            }
        },
        syQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreatePromptRouter", {}).n("BedrockClient", "CreatePromptRouterCommand").f(KyQ, void 0).ser(nW8).de(IF8).build() {
            static {
                AA(this, "CreatePromptRouterCommand")
            }
        },
        ryQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "CreateProvisionedModelThroughput", {}).n("BedrockClient", "CreateProvisionedModelThroughputCommand").f(void 0, void 0).ser(aW8).de(YF8).build() {
            static {
                AA(this, "CreateProvisionedModelThroughputCommand")
            }
        },
        oyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteCustomModel", {}).n("BedrockClient", "DeleteCustomModelCommand").f(void 0, void 0).ser(sW8).de(JF8).build() {
            static {
                AA(this, "DeleteCustomModelCommand")
            }
        },
        tyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteFoundationModelAgreement", {}).n("BedrockClient", "DeleteFoundationModelAgreementCommand").f(void 0, void 0).ser(rW8).de(WF8).build() {
            static {
                AA(this, "DeleteFoundationModelAgreementCommand")
            }
        },
        eyQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteGuardrail", {}).n("BedrockClient", "DeleteGuardrailCommand").f(void 0, void 0).ser(oW8).de(XF8).build() {
            static {
                AA(this, "DeleteGuardrailCommand")
            }
        },
        AxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteImportedModel", {}).n("BedrockClient", "DeleteImportedModelCommand").f(void 0, void 0).ser(tW8).de(FF8).build() {
            static {
                AA(this, "DeleteImportedModelCommand")
            }
        },
        QxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteInferenceProfile", {}).n("BedrockClient", "DeleteInferenceProfileCommand").f(void 0, void 0).ser(eW8).de(VF8).build() {
            static {
                AA(this, "DeleteInferenceProfileCommand")
            }
        },
        BxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteMarketplaceModelEndpoint", {}).n("BedrockClient", "DeleteMarketplaceModelEndpointCommand").f(void 0, void 0).ser(AX8).de(KF8).build() {
            static {
                AA(this, "DeleteMarketplaceModelEndpointCommand")
            }
        },
        GxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteModelInvocationLoggingConfiguration", {}).n("BedrockClient", "DeleteModelInvocationLoggingConfigurationCommand").f(void 0, void 0).ser(QX8).de(DF8).build() {
            static {
                AA(this, "DeleteModelInvocationLoggingConfigurationCommand")
            }
        },
        ZxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeletePromptRouter", {}).n("BedrockClient", "DeletePromptRouterCommand").f(void 0, void 0).ser(BX8).de(HF8).build() {
            static {
                AA(this, "DeletePromptRouterCommand")
            }
        },
        IxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeleteProvisionedModelThroughput", {}).n("BedrockClient", "DeleteProvisionedModelThroughputCommand").f(void 0, void 0).ser(GX8).de(CF8).build() {
            static {
                AA(this, "DeleteProvisionedModelThroughputCommand")
            }
        },
        YxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "DeregisterMarketplaceModelEndpoint", {}).n("BedrockClient", "DeregisterMarketplaceModelEndpointCommand").f(void 0, void 0).ser(ZX8).de(EF8).build() {
            static {
                AA(this, "DeregisterMarketplaceModelEndpointCommand")
            }
        },
        JxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetCustomModel", {}).n("BedrockClient", "GetCustomModelCommand").f(void 0, XkQ).ser(IX8).de(zF8).build() {
            static {
                AA(this, "GetCustomModelCommand")
            }
        },
        WxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetEvaluationJob", {}).n("BedrockClient", "GetEvaluationJobCommand").f(ykQ, OyQ).ser(YX8).de(UF8).build() {
            static {
                AA(this, "GetEvaluationJobCommand")
            }
        },
        XxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetFoundationModelAvailability", {}).n("BedrockClient", "GetFoundationModelAvailabilityCommand").f(void 0, void 0).ser(WX8).de(wF8).build() {
            static {
                AA(this, "GetFoundationModelAvailabilityCommand")
            }
        },
        FxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetFoundationModel", {}).n("BedrockClient", "GetFoundationModelCommand").f(void 0, void 0).ser(JX8).de($F8).build() {
            static {
                AA(this, "GetFoundationModelCommand")
            }
        },
        VxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetGuardrail", {}).n("BedrockClient", "GetGuardrailCommand").f(void 0, QyQ).ser(XX8).de(qF8).build() {
            static {
                AA(this, "GetGuardrailCommand")
            }
        },
        KxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetImportedModel", {}).n("BedrockClient", "GetImportedModelCommand").f(void 0, void 0).ser(FX8).de(NF8).build() {
            static {
                AA(this, "GetImportedModelCommand")
            }
        },
        DxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetInferenceProfile", {}).n("BedrockClient", "GetInferenceProfileCommand").f(void 0, YyQ).ser(VX8).de(LF8).build() {
            static {
                AA(this, "GetInferenceProfileCommand")
            }
        },
        HxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetMarketplaceModelEndpoint", {}).n("BedrockClient", "GetMarketplaceModelEndpointCommand").f(void 0, void 0).ser(KX8).de(MF8).build() {
            static {
                AA(this, "GetMarketplaceModelEndpointCommand")
            }
        },
        CxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetModelCopyJob", {}).n("BedrockClient", "GetModelCopyJobCommand").f(void 0, void 0).ser(DX8).de(OF8).build() {
            static {
                AA(this, "GetModelCopyJobCommand")
            }
        },
        ExQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetModelCustomizationJob", {}).n("BedrockClient", "GetModelCustomizationJobCommand").f(void 0, zyQ).ser(HX8).de(RF8).build() {
            static {
                AA(this, "GetModelCustomizationJobCommand")
            }
        },
        zxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetModelImportJob", {}).n("BedrockClient", "GetModelImportJobCommand").f(void 0, void 0).ser(CX8).de(TF8).build() {
            static {
                AA(this, "GetModelImportJobCommand")
            }
        },
        UxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetModelInvocationJob", {}).n("BedrockClient", "GetModelInvocationJobCommand").f(void 0, XyQ).ser(EX8).de(PF8).build() {
            static {
                AA(this, "GetModelInvocationJobCommand")
            }
        },
        $xQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetModelInvocationLoggingConfiguration", {}).n("BedrockClient", "GetModelInvocationLoggingConfigurationCommand").f(void 0, void 0).ser(zX8).de(jF8).build() {
            static {
                AA(this, "GetModelInvocationLoggingConfigurationCommand")
            }
        },
        wxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetPromptRouter", {}).n("BedrockClient", "GetPromptRouterCommand").f(void 0, DyQ).ser(UX8).de(SF8).build() {
            static {
                AA(this, "GetPromptRouterCommand")
            }
        },
        qxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetProvisionedModelThroughput", {}).n("BedrockClient", "GetProvisionedModelThroughputCommand").f(void 0, void 0).ser($X8).de(_F8).build() {
            static {
                AA(this, "GetProvisionedModelThroughputCommand")
            }
        },
        NxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "GetUseCaseForModelAccess", {}).n("BedrockClient", "GetUseCaseForModelAccessCommand").f(void 0, void 0).ser(wX8).de(kF8).build() {
            static {
                AA(this, "GetUseCaseForModelAccessCommand")
            }
        },
        FP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListCustomModels", {}).n("BedrockClient", "ListCustomModelsCommand").f(void 0, void 0).ser(qX8).de(yF8).build() {
            static {
                AA(this, "ListCustomModelsCommand")
            }
        },
        VP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListEvaluationJobs", {}).n("BedrockClient", "ListEvaluationJobsCommand").f(void 0, void 0).ser(NX8).de(xF8).build() {
            static {
                AA(this, "ListEvaluationJobsCommand")
            }
        },
        LxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListFoundationModelAgreementOffers", {}).n("BedrockClient", "ListFoundationModelAgreementOffersCommand").f(void 0, void 0).ser(LX8).de(vF8).build() {
            static {
                AA(this, "ListFoundationModelAgreementOffersCommand")
            }
        },
        MxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListFoundationModels", {}).n("BedrockClient", "ListFoundationModelsCommand").f(void 0, void 0).ser(MX8).de(bF8).build() {
            static {
                AA(this, "ListFoundationModelsCommand")
            }
        },
        KP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListGuardrails", {}).n("BedrockClient", "ListGuardrailsCommand").f(void 0, GyQ).ser(OX8).de(fF8).build() {
            static {
                AA(this, "ListGuardrailsCommand")
            }
        },
        DP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListImportedModels", {}).n("BedrockClient", "ListImportedModelsCommand").f(void 0, void 0).ser(RX8).de(hF8).build() {
            static {
                AA(this, "ListImportedModelsCommand")
            }
        },
        HP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListInferenceProfiles", {}).n("BedrockClient", "ListInferenceProfilesCommand").f(void 0, WyQ).ser(TX8).de(gF8).build() {
            static {
                AA(this, "ListInferenceProfilesCommand")
            }
        },
        CP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListMarketplaceModelEndpoints", {}).n("BedrockClient", "ListMarketplaceModelEndpointsCommand").f(void 0, void 0).ser(PX8).de(uF8).build() {
            static {
                AA(this, "ListMarketplaceModelEndpointsCommand")
            }
        },
        EP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListModelCopyJobs", {}).n("BedrockClient", "ListModelCopyJobsCommand").f(void 0, void 0).ser(jX8).de(mF8).build() {
            static {
                AA(this, "ListModelCopyJobsCommand")
            }
        },
        zP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListModelCustomizationJobs", {}).n("BedrockClient", "ListModelCustomizationJobsCommand").f(void 0, void 0).ser(SX8).de(dF8).build() {
            static {
                AA(this, "ListModelCustomizationJobsCommand")
            }
        },
        UP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListModelImportJobs", {}).n("BedrockClient", "ListModelImportJobsCommand").f(void 0, void 0).ser(_X8).de(cF8).build() {
            static {
                AA(this, "ListModelImportJobsCommand")
            }
        },
        $P1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListModelInvocationJobs", {}).n("BedrockClient", "ListModelInvocationJobsCommand").f(void 0, VyQ).ser(kX8).de(pF8).build() {
            static {
                AA(this, "ListModelInvocationJobsCommand")
            }
        },
        wP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListPromptRouters", {}).n("BedrockClient", "ListPromptRoutersCommand").f(void 0, CyQ).ser(yX8).de(lF8).build() {
            static {
                AA(this, "ListPromptRoutersCommand")
            }
        },
        qP1 = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListProvisionedModelThroughputs", {}).n("BedrockClient", "ListProvisionedModelThroughputsCommand").f(void 0, void 0).ser(xX8).de(iF8).build() {
            static {
                AA(this, "ListProvisionedModelThroughputsCommand")
            }
        },
        OxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "ListTagsForResource", {}).n("BedrockClient", "ListTagsForResourceCommand").f(void 0, void 0).ser(vX8).de(nF8).build() {
            static {
                AA(this, "ListTagsForResourceCommand")
            }
        },
        RxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "PutModelInvocationLoggingConfiguration", {}).n("BedrockClient", "PutModelInvocationLoggingConfigurationCommand").f(void 0, void 0).ser(bX8).de(aF8).build() {
            static {
                AA(this, "PutModelInvocationLoggingConfigurationCommand")
            }
        },
        TxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "PutUseCaseForModelAccess", {}).n("BedrockClient", "PutUseCaseForModelAccessCommand").f(void 0, void 0).ser(fX8).de(sF8).build() {
            static {
                AA(this, "PutUseCaseForModelAccessCommand")
            }
        },
        PxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "RegisterMarketplaceModelEndpoint", {}).n("BedrockClient", "RegisterMarketplaceModelEndpointCommand").f(void 0, void 0).ser(hX8).de(rF8).build() {
            static {
                AA(this, "RegisterMarketplaceModelEndpointCommand")
            }
        },
        jxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "StopEvaluationJob", {}).n("BedrockClient", "StopEvaluationJobCommand").f(xkQ, void 0).ser(gX8).de(oF8).build() {
            static {
                AA(this, "StopEvaluationJobCommand")
            }
        },
        SxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "StopModelCustomizationJob", {}).n("BedrockClient", "StopModelCustomizationJobCommand").f(void 0, void 0).ser(uX8).de(tF8).build() {
            static {
                AA(this, "StopModelCustomizationJobCommand")
            }
        },
        _xQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "StopModelInvocationJob", {}).n("BedrockClient", "StopModelInvocationJobCommand").f(void 0, void 0).ser(mX8).de(eF8).build() {
            static {
                AA(this, "StopModelInvocationJobCommand")
            }
        },
        kxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "TagResource", {}).n("BedrockClient", "TagResourceCommand").f(void 0, void 0).ser(dX8).de(AV8).build() {
            static {
                AA(this, "TagResourceCommand")
            }
        },
        yxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "UntagResource", {}).n("BedrockClient", "UntagResourceCommand").f(void 0, void 0).ser(cX8).de(QV8).build() {
            static {
                AA(this, "UntagResourceCommand")
            }
        },
        xxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "UpdateGuardrail", {}).n("BedrockClient", "UpdateGuardrailCommand").f(ZyQ, void 0).ser(pX8).de(BV8).build() {
            static {
                AA(this, "UpdateGuardrailCommand")
            }
        },
        vxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "UpdateMarketplaceModelEndpoint", {}).n("BedrockClient", "UpdateMarketplaceModelEndpointCommand").f(void 0, void 0).ser(lX8).de(GV8).build() {
            static {
                AA(this, "UpdateMarketplaceModelEndpointCommand")
            }
        },
        bxQ = class extends h.Command.classBuilder().ep(F2).m(function(A, Q, B, G) {
            return [(0, V2.getSerdePlugin)(B, this.serialize, this.deserialize), (0, G2.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AmazonBedrockControlPlaneService", "UpdateProvisionedModelThroughput", {}).n("BedrockClient", "UpdateProvisionedModelThroughputCommand").f(void 0, void 0).ser(iX8).de(ZV8).build() {
            static {
                AA(this, "UpdateProvisionedModelThroughputCommand")
            }
        },
        ZD8 = {
            BatchDeleteEvaluationJobCommand: fyQ,
            CreateCustomModelCommand: hyQ,
            CreateEvaluationJobCommand: gyQ,
            CreateFoundationModelAgreementCommand: uyQ,
            CreateGuardrailCommand: myQ,
            CreateGuardrailVersionCommand: dyQ,
            CreateInferenceProfileCommand: cyQ,
            CreateMarketplaceModelEndpointCommand: pyQ,
            CreateModelCopyJobCommand: lyQ,
            CreateModelCustomizationJobCommand: iyQ,
            CreateModelImportJobCommand: nyQ,
            CreateModelInvocationJobCommand: ayQ,
            CreatePromptRouterCommand: syQ,
            CreateProvisionedModelThroughputCommand: ryQ,
            DeleteCustomModelCommand: oyQ,
            DeleteFoundationModelAgreementCommand: tyQ,
            DeleteGuardrailCommand: eyQ,
            DeleteImportedModelCommand: AxQ,
            DeleteInferenceProfileCommand: QxQ,
            DeleteMarketplaceModelEndpointCommand: BxQ,
            DeleteModelInvocationLoggingConfigurationCommand: GxQ,
            DeletePromptRouterCommand: ZxQ,
            DeleteProvisionedModelThroughputCommand: IxQ,
            DeregisterMarketplaceModelEndpointCommand: YxQ,
            GetCustomModelCommand: JxQ,
            GetEvaluationJobCommand: WxQ,
            GetFoundationModelCommand: FxQ,
            GetFoundationModelAvailabilityCommand: XxQ,
            GetGuardrailCommand: VxQ,
            GetImportedModelCommand: KxQ,
            GetInferenceProfileCommand: DxQ,
            GetMarketplaceModelEndpointCommand: HxQ,
            GetModelCopyJobCommand: CxQ,
            GetModelCustomizationJobCommand: ExQ,
            GetModelImportJobCommand: zxQ,
            GetModelInvocationJobCommand: UxQ,
            GetModelInvocationLoggingConfigurationCommand: $xQ,
            GetPromptRouterCommand: wxQ,
            GetProvisionedModelThroughputCommand: qxQ,
            GetUseCaseForModelAccessCommand: NxQ,
            ListCustomModelsCommand: FP1,
            ListEvaluationJobsCommand: VP1,
            ListFoundationModelAgreementOffersCommand: LxQ,
            ListFoundationModelsCommand: MxQ,
            ListGuardrailsCommand: KP1,
            ListImportedModelsCommand: DP1,
            ListInferenceProfilesCommand: HP1,
            ListMarketplaceModelEndpointsCommand: CP1,
            ListModelCopyJobsCommand: EP1,
            ListModelCustomizationJobsCommand: zP1,
            ListModelImportJobsCommand: UP1,
            ListModelInvocationJobsCommand: $P1,
            ListPromptRoutersCommand: wP1,
            ListProvisionedModelThroughputsCommand: qP1,
            ListTagsForResourceCommand: OxQ,
            PutModelInvocationLoggingConfigurationCommand: RxQ,
            PutUseCaseForModelAccessCommand: TxQ,
            RegisterMarketplaceModelEndpointCommand: PxQ,
            StopEvaluationJobCommand: jxQ,
            StopModelCustomizationJobCommand: SxQ,
            StopModelInvocationJobCommand: _xQ,
            TagResourceCommand: kxQ,
            UntagResourceCommand: yxQ,
            UpdateGuardrailCommand: xxQ,
            UpdateMarketplaceModelEndpointCommand: vxQ,
            UpdateProvisionedModelThroughputCommand: bxQ
        },
        fxQ = class extends sz {
            static {
                AA(this, "Bedrock")
            }
        };
    (0, h.createAggregatedClient)(ZD8, fxQ);
    var ID8 = (0, BB.createPaginator)(sz, FP1, "nextToken", "nextToken", "maxResults"),
        YD8 = (0, BB.createPaginator)(sz, VP1, "nextToken", "nextToken", "maxResults"),
        JD8 = (0, BB.createPaginator)(sz, KP1, "nextToken", "nextToken", "maxResults"),
        WD8 = (0, BB.createPaginator)(sz, DP1, "nextToken", "nextToken", "maxResults"),
        XD8 = (0, BB.createPaginator)(sz, HP1, "nextToken", "nextToken", "maxResults"),
        FD8 = (0, BB.createPaginator)(sz, CP1, "nextToken", "nextToken", "maxResults"),
        VD8 = (0, BB.createPaginator)(sz, EP1, "nextToken", "nextToken", "maxResults"),
        KD8 = (0, BB.createPaginator)(sz, zP1, "nextToken", "nextToken", "maxResults"),
        DD8 = (0, BB.createPaginator)(sz, UP1, "nextToken", "nextToken", "maxResults"),
        HD8 = (0, BB.createPaginator)(sz, $P1, "nextToken", "nextToken", "maxResults"),
        CD8 = (0, BB.createPaginator)(sz, wP1, "nextToken", "nextToken", "maxResults"),
        ED8 = (0, BB.createPaginator)(sz, qP1, "nextToken", "nextToken", "maxResults")
});
var xS = U((aU7, cxQ) => {
    var {
        defineProperty: nmA,
        getOwnPropertyDescriptor: zD8,
        getOwnPropertyNames: UD8
    } = Object, $D8 = Object.prototype.hasOwnProperty, LP1 = (A, Q) => nmA(A, "name", {
        value: Q,
        configurable: !0
    }), wD8 = (A, Q) => {
        for (var B in Q) nmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qD8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of UD8(Q))
                if (!$D8.call(A, Z) && Z !== B) nmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zD8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ND8 = (A) => qD8(nmA({}, "__esModule", {
        value: !0
    }), A), uxQ = {};
    wD8(uxQ, {
        emitWarningIfUnsupportedVersion: () => LD8,
        setCredentialFeature: () => mxQ,
        setFeature: () => dxQ,
        state: () => NP1
    });
    cxQ.exports = ND8(uxQ);
    var NP1 = {
            warningEmitted: !1
        },
        LD8 = LP1((A) => {
            if (A && !NP1.warningEmitted && parseInt(A.substring(1, A.indexOf("."))) < 18) NP1.warningEmitted = !0, process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`)
        }, "emitWarningIfUnsupportedVersion");

    function mxQ(A, Q, B) {
        if (!A.$source) A.$source = {};
        return A.$source[Q] = B, A
    }
    LP1(mxQ, "setCredentialFeature");

    function dxQ(A, Q, B) {
        if (!A.__aws_sdk_context) A.__aws_sdk_context = {
            features: {}
        };
        else if (!A.__aws_sdk_context.features) A.__aws_sdk_context.features = {};
        A.__aws_sdk_context.features[Q] = B
    }
    LP1(dxQ, "setFeature")
});
var MP1 = U((sU7, oxQ) => {
    var {
        defineProperty: amA,
        getOwnPropertyDescriptor: MD8,
        getOwnPropertyNames: OD8
    } = Object, RD8 = Object.prototype.hasOwnProperty, TD8 = (A, Q) => amA(A, "name", {
        value: Q,
        configurable: !0
    }), PD8 = (A, Q) => {
        for (var B in Q) amA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, jD8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of OD8(Q))
                if (!RD8.call(A, Z) && Z !== B) amA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = MD8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, SD8 = (A) => jD8(amA({}, "__esModule", {
        value: !0
    }), A), pxQ = {};
    PD8(pxQ, {
        ENV_ACCOUNT_ID: () => rxQ,
        ENV_CREDENTIAL_SCOPE: () => sxQ,
        ENV_EXPIRATION: () => axQ,
        ENV_KEY: () => lxQ,
        ENV_SECRET: () => ixQ,
        ENV_SESSION: () => nxQ,
        fromEnv: () => yD8
    });
    oxQ.exports = SD8(pxQ);
    var _D8 = xS(),
        kD8 = P2(),
        lxQ = "AWS_ACCESS_KEY_ID",
        ixQ = "AWS_SECRET_ACCESS_KEY",
        nxQ = "AWS_SESSION_TOKEN",
        axQ = "AWS_CREDENTIAL_EXPIRATION",
        sxQ = "AWS_CREDENTIAL_SCOPE",
        rxQ = "AWS_ACCOUNT_ID",
        yD8 = TD8((A) => async () => {
            A?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
            let Q = process.env[lxQ],
                B = process.env[ixQ],
                G = process.env[nxQ],
                Z = process.env[axQ],
                I = process.env[sxQ],
                Y = process.env[rxQ];
            if (Q && B) {
                let J = {
                    accessKeyId: Q,
                    secretAccessKey: B,
                    ...G && {
                        sessionToken: G
                    },
                    ...Z && {
                        expiration: new Date(Z)
                    },
                    ...I && {
                        credentialScope: I
                    },
                    ...Y && {
                        accountId: Y
                    }
                };
                return (0, _D8.setCredentialFeature)(J, "CREDENTIALS_ENV_VARS", "g"), J
            }
            throw new kD8.CredentialsProviderError("Unable to find environment variable credentials.", {
                logger: A?.logger
            })
        }, "fromEnv")
});
var RvQ = U((rU7, omA) => {
    var txQ, exQ, AvQ, QvQ, BvQ, GvQ, ZvQ, IvQ, YvQ, JvQ, WvQ, XvQ, FvQ, smA, OP1, VvQ, KvQ, DvQ, P6A, HvQ, CvQ, EvQ, zvQ, UvQ, $vQ, wvQ, qvQ, NvQ, rmA, LvQ, MvQ, OvQ;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof omA === "object" && typeof rU7 === "object") A(B(Q, B(rU7)));
        else A(B(Q));

        function B(G, Z) {
            if (G !== Q)
                if (typeof Object.create === "function") Object.defineProperty(G, "__esModule", {
                    value: !0
                });
                else G.__esModule = !0;
            return function(I, Y) {
                return G[I] = Z ? Z(I, Y) : Y
            }
        }
    })(function(A) {
        var Q = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(I, Y) {
            I.__proto__ = Y
        } || function(I, Y) {
            for (var J in Y)
                if (Object.prototype.hasOwnProperty.call(Y, J)) I[J] = Y[J]
        };
        txQ = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, exQ = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, AvQ = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, QvQ = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, BvQ = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, GvQ = function(I, Y, J, W, X, F) {
            function V(P) {
                if (P !== void 0 && typeof P !== "function") throw TypeError("Function expected");
                return P
            }
            var K = W.kind,
                D = K === "getter" ? "get" : K === "setter" ? "set" : "value",
                H = !Y && I ? W.static ? I : I.prototype : null,
                C = Y || (H ? Object.getOwnPropertyDescriptor(H, W.name) : {}),
                E, z = !1;
            for (var w = J.length - 1; w >= 0; w--) {
                var N = {};
                for (var q in W) N[q] = q === "access" ? {} : W[q];
                for (var q in W.access) N.access[q] = W.access[q];
                N.addInitializer = function(P) {
                    if (z) throw TypeError("Cannot add initializers after decoration has completed");
                    F.push(V(P || null))
                };
                var R = (0, J[w])(K === "accessor" ? {
                    get: C.get,
                    set: C.set
                } : C[D], N);
                if (K === "accessor") {
                    if (R === void 0) continue;
                    if (R === null || typeof R !== "object") throw TypeError("Object expected");
                    if (E = V(R.get)) C.get = E;
                    if (E = V(R.set)) C.set = E;
                    if (E = V(R.init)) X.unshift(E)
                } else if (E = V(R))
                    if (K === "field") X.unshift(E);
                    else C[D] = E
            }
            if (H) Object.defineProperty(H, W.name, C);
            z = !0
        }, ZvQ = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, IvQ = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, YvQ = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, JvQ = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, WvQ = function(I, Y, J, W) {
            function X(F) {
                return F instanceof J ? F : new J(function(V) {
                    V(F)
                })
            }
            return new(J || (J = Promise))(function(F, V) {
                function K(C) {
                    try {
                        H(W.next(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function D(C) {
                    try {
                        H(W.throw(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function H(C) {
                    C.done ? F(C.value) : X(C.value).then(K, D)
                }
                H((W = W.apply(I, Y || [])).next())
            })
        }, XvQ = function(I, Y) {
            var J = {
                    label: 0,
                    sent: function() {
                        if (F[0] & 1) throw F[1];
                        return F[1]
                    },
                    trys: [],
                    ops: []
                },
                W, X, F, V = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
            return V.next = K(0), V.throw = K(1), V.return = K(2), typeof Symbol === "function" && (V[Symbol.iterator] = function() {
                return this
            }), V;

            function K(H) {
                return function(C) {
                    return D([H, C])
                }
            }

            function D(H) {
                if (W) throw TypeError("Generator is already executing.");
                while (V && (V = 0, H[0] && (J = 0)), J) try {
                    if (W = 1, X && (F = H[0] & 2 ? X.return : H[0] ? X.throw || ((F = X.return) && F.call(X), 0) : X.next) && !(F = F.call(X, H[1])).done) return F;
                    if (X = 0, F) H = [H[0] & 2, F.value];
                    switch (H[0]) {
                        case 0:
                        case 1:
                            F = H;
                            break;
                        case 4:
                            return J.label++, {
                                value: H[1],
                                done: !1
                            };
                        case 5:
                            J.label++, X = H[1], H = [0];
                            continue;
                        case 7:
                            H = J.ops.pop(), J.trys.pop();
                            continue;
                        default:
                            if ((F = J.trys, !(F = F.length > 0 && F[F.length - 1])) && (H[0] === 6 || H[0] === 2)) {
                                J = 0;
                                continue
                            }
                            if (H[0] === 3 && (!F || H[1] > F[0] && H[1] < F[3])) {
                                J.label = H[1];
                                break
                            }
                            if (H[0] === 6 && J.label < F[1]) {
                                J.label = F[1], F = H;
                                break
                            }
                            if (F && J.label < F[2]) {
                                J.label = F[2], J.ops.push(H);
                                break
                            }
                            if (F[2]) J.ops.pop();
                            J.trys.pop();
                            continue
                    }
                    H = Y.call(I, J)
                } catch (C) {
                    H = [6, C], X = 0
                } finally {
                    W = F = 0
                }
                if (H[0] & 5) throw H[1];
                return {
                    value: H[0] ? H[1] : void 0,
                    done: !0
                }
            }
        }, FvQ = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) rmA(Y, I, J)
        }, rmA = Object.create ? function(I, Y, J, W) {
            if (W === void 0) W = J;
            var X = Object.getOwnPropertyDescriptor(Y, J);
            if (!X || ("get" in X ? !Y.__esModule : X.writable || X.configurable)) X = {
                enumerable: !0,
                get: function() {
                    return Y[J]
                }
            };
            Object.defineProperty(I, W, X)
        } : function(I, Y, J, W) {
            if (W === void 0) W = J;
            I[W] = Y[J]
        }, smA = function(I) {
            var Y = typeof Symbol === "function" && Symbol.iterator,
                J = Y && I[Y],
                W = 0;
            if (J) return J.call(I);
            if (I && typeof I.length === "number") return {
                next: function() {
                    if (I && W >= I.length) I = void 0;
                    return {
                        value: I && I[W++],
                        done: !I
                    }
                }
            };
            throw TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, OP1 = function(I, Y) {
            var J = typeof Symbol === "function" && I[Symbol.iterator];
            if (!J) return I;
            var W = J.call(I),
                X, F = [],
                V;
            try {
                while ((Y === void 0 || Y-- > 0) && !(X = W.next()).done) F.push(X.value)
            } catch (K) {
                V = {
                    error: K
                }
            } finally {
                try {
                    if (X && !X.done && (J = W.return)) J.call(W)
                } finally {
                    if (V) throw V.error
                }
            }
            return F
        }, VvQ = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(OP1(arguments[Y]));
            return I
        }, KvQ = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, DvQ = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, P6A = function(I) {
            return this instanceof P6A ? (this.v = I, this) : new P6A(I)
        }, HvQ = function(I, Y, J) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var W = J.apply(I, Y || []),
                X, F = [];
            return X = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), K("next"), K("throw"), K("return", V), X[Symbol.asyncIterator] = function() {
                return this
            }, X;

            function V(w) {
                return function(N) {
                    return Promise.resolve(N).then(w, E)
                }
            }

            function K(w, N) {
                if (W[w]) {
                    if (X[w] = function(q) {
                            return new Promise(function(R, P) {
                                F.push([w, q, R, P]) > 1 || D(w, q)
                            })
                        }, N) X[w] = N(X[w])
                }
            }

            function D(w, N) {
                try {
                    H(W[w](N))
                } catch (q) {
                    z(F[0][3], q)
                }
            }

            function H(w) {
                w.value instanceof P6A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
            }

            function C(w) {
                D("next", w)
            }

            function E(w) {
                D("throw", w)
            }

            function z(w, N) {
                if (w(N), F.shift(), F.length) D(F[0][0], F[0][1])
            }
        }, CvQ = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: P6A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, EvQ = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof smA === "function" ? smA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
                return this
            }, J);

            function W(F) {
                J[F] = I[F] && function(V) {
                    return new Promise(function(K, D) {
                        V = I[F](V), X(K, D, V.done, V.value)
                    })
                }
            }

            function X(F, V, K, D) {
                Promise.resolve(D).then(function(H) {
                    F({
                        value: H,
                        done: K
                    })
                }, V)
            }
        }, zvQ = function(I, Y) {
            if (Object.defineProperty) Object.defineProperty(I, "raw", {
                value: Y
            });
            else I.raw = Y;
            return I
        };
        var B = Object.create ? function(I, Y) {
                Object.defineProperty(I, "default", {
                    enumerable: !0,
                    value: Y
                })
            } : function(I, Y) {
                I.default = Y
            },
            G = function(I) {
                return G = Object.getOwnPropertyNames || function(Y) {
                    var J = [];
                    for (var W in Y)
                        if (Object.prototype.hasOwnProperty.call(Y, W)) J[J.length] = W;
                    return J
                }, G(I)
            };
        UvQ = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") rmA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, $vQ = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, wvQ = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, qvQ = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, NvQ = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, LvQ = function(I, Y, J) {
            if (Y !== null && Y !== void 0) {
                if (typeof Y !== "object" && typeof Y !== "function") throw TypeError("Object expected.");
                var W, X;
                if (J) {
                    if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                    W = Y[Symbol.asyncDispose]
                }
                if (W === void 0) {
                    if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                    if (W = Y[Symbol.dispose], J) X = W
                }
                if (typeof W !== "function") throw TypeError("Object not disposable.");
                if (X) W = function() {
                    try {
                        X.call(this)
                    } catch (F) {
                        return Promise.reject(F)
                    }
                };
                I.stack.push({
                    value: Y,
                    dispose: W,
                    async: J
                })
            } else if (J) I.stack.push({
                async: !0
            });
            return Y
        };
        var Z = typeof SuppressedError === "function" ? SuppressedError : function(I, Y, J) {
            var W = Error(J);
            return W.name = "SuppressedError", W.error = I, W.suppressed = Y, W
        };
        MvQ = function(I) {
            function Y(F) {
                I.error = I.hasError ? new Z(F, I.error, "An error was suppressed during disposal.") : F, I.hasError = !0
            }
            var J, W = 0;

            function X() {
                while (J = I.stack.pop()) try {
                    if (!J.async && W === 1) return W = 0, I.stack.push(J), Promise.resolve().then(X);
                    if (J.dispose) {
                        var F = J.dispose.call(J.value);
                        if (J.async) return W |= 2, Promise.resolve(F).then(X, function(V) {
                            return Y(V), X()
                        })
                    } else W |= 1
                } catch (V) {
                    Y(V)
                }
                if (W === 1) return I.hasError ? Promise.reject(I.error) : Promise.resolve();
                if (I.hasError) throw I.error
            }
            return X()
        }, OvQ = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", txQ), A("__assign", exQ), A("__rest", AvQ), A("__decorate", QvQ), A("__param", BvQ), A("__esDecorate", GvQ), A("__runInitializers", ZvQ), A("__propKey", IvQ), A("__setFunctionName", YvQ), A("__metadata", JvQ), A("__awaiter", WvQ), A("__generator", XvQ), A("__exportStar", FvQ), A("__createBinding", rmA), A("__values", smA), A("__read", OP1), A("__spread", VvQ), A("__spreadArrays", KvQ), A("__spreadArray", DvQ), A("__await", P6A), A("__asyncGenerator", HvQ), A("__asyncDelegator", CvQ), A("__asyncValues", EvQ), A("__makeTemplateObject", zvQ), A("__importStar", UvQ), A("__importDefault", $vQ), A("__classPrivateFieldGet", wvQ), A("__classPrivateFieldSet", qvQ), A("__classPrivateFieldIn", NvQ), A("__addDisposableResource", LvQ), A("__disposeResources", MvQ), A("__rewriteRelativeImportExtension", OvQ)
    })
});
var jvQ = U((TvQ) => {
    Object.defineProperty(TvQ, "__esModule", {
        value: !0
    });
    TvQ.checkUrl = void 0;
    var xD8 = P2(),
        vD8 = "169.254.170.2",
        bD8 = "169.254.170.23",
        fD8 = "[fd00:ec2::23]",
        hD8 = (A, Q) => {
            if (A.protocol === "https:") return;
            if (A.hostname === vD8 || A.hostname === bD8 || A.hostname === fD8) return;
            if (A.hostname.includes("[")) {
                if (A.hostname === "[::1]" || A.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return
            } else {
                if (A.hostname === "localhost") return;
                let B = A.hostname.split("."),
                    G = (Z) => {
                        let I = parseInt(Z, 10);
                        return 0 <= I && I <= 255
                    };
                if (B[0] === "127" && G(B[1]) && G(B[2]) && G(B[3]) && B.length === 4) return
            }
            throw new xD8.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
                logger: Q
            })
        };
    TvQ.checkUrl = hD8
});
var RP1 = U((tU7, hvQ) => {
    var {
        defineProperty: tmA,
        getOwnPropertyDescriptor: gD8,
        getOwnPropertyNames: uD8
    } = Object, mD8 = Object.prototype.hasOwnProperty, emA = (A, Q) => tmA(A, "name", {
        value: Q,
        configurable: !0
    }), dD8 = (A, Q) => {
        for (var B in Q) tmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, cD8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of uD8(Q))
                if (!mD8.call(A, Z) && Z !== B) tmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = gD8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, pD8 = (A) => cD8(tmA({}, "__esModule", {
        value: !0
    }), A), SvQ = {};
    dD8(SvQ, {
        AlgorithmId: () => xvQ,
        EndpointURLScheme: () => yvQ,
        FieldPosition: () => vvQ,
        HttpApiKeyAuthLocation: () => kvQ,
        HttpAuthLocation: () => _vQ,
        IniSectionType: () => bvQ,
        RequestHandlerProtocol: () => fvQ,
        SMITHY_CONTEXT_KEY: () => sD8,
        getDefaultClientConfiguration: () => nD8,
        resolveDefaultRuntimeConfig: () => aD8
    });
    hvQ.exports = pD8(SvQ);
    var _vQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(_vQ || {}),
        kvQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(kvQ || {}),
        yvQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(yvQ || {}),
        xvQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(xvQ || {}),
        lD8 = emA((A) => {
            let Q = [];
            if (A.sha256 !== void 0) Q.push({
                algorithmId: () => "sha256",
                checksumConstructor: () => A.sha256
            });
            if (A.md5 != null) Q.push({
                algorithmId: () => "md5",
                checksumConstructor: () => A.md5
            });
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        iD8 = emA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        nD8 = emA((A) => {
            return lD8(A)
        }, "getDefaultClientConfiguration"),
        aD8 = emA((A) => {
            return iD8(A)
        }, "resolveDefaultRuntimeConfig"),
        vvQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(vvQ || {}),
        sD8 = "__smithy_context",
        bvQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(bvQ || {}),
        fvQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(fvQ || {})
});
var pvQ = U((eU7, cvQ) => {
    var {
        defineProperty: AdA,
        getOwnPropertyDescriptor: rD8,
        getOwnPropertyNames: oD8
    } = Object, tD8 = Object.prototype.hasOwnProperty, kd = (A, Q) => AdA(A, "name", {
        value: Q,
        configurable: !0
    }), eD8 = (A, Q) => {
        for (var B in Q) AdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, AH8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of oD8(Q))
                if (!tD8.call(A, Z) && Z !== B) AdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = rD8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, QH8 = (A) => AH8(AdA({}, "__esModule", {
        value: !0
    }), A), gvQ = {};
    eD8(gvQ, {
        Field: () => ZH8,
        Fields: () => IH8,
        HttpRequest: () => YH8,
        HttpResponse: () => JH8,
        IHttpRequest: () => uvQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => BH8,
        isValidHostname: () => dvQ,
        resolveHttpHandlerRuntimeConfig: () => GH8
    });
    cvQ.exports = QH8(gvQ);
    var BH8 = kd((A) => {
            return {
                setHttpHandler(Q) {
                    A.httpHandler = Q
                },
                httpHandler() {
                    return A.httpHandler
                },
                updateHttpClientConfig(Q, B) {
                    A.httpHandler?.updateHttpClientConfig(Q, B)
                },
                httpHandlerConfigs() {
                    return A.httpHandler.httpHandlerConfigs()
                }
            }
        }, "getHttpHandlerExtensionConfiguration"),
        GH8 = kd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        uvQ = RP1(),
        ZH8 = class {
            static {
                kd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = uvQ.FieldPosition.HEADER,
                values: B = []
            }) {
                this.name = A, this.kind = Q, this.values = B
            }
            add(A) {
                this.values.push(A)
            }
            set(A) {
                this.values = A
            }
            remove(A) {
                this.values = this.values.filter((Q) => Q !== A)
            }
            toString() {
                return this.values.map((A) => A.includes(",") || A.includes(" ") ? `"${A}"` : A).join(", ")
            }