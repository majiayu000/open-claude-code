/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_024.js
 * 处理时间: 2025-12-09T03:37:24.123Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 24/61
 * Lines: 110523 - 112013 (1491 lines)
 * Original file: cli.js
 */

        }), "GetInferenceProfileResponseFilterSensitiveLog"),
        JyQ = AA((A) => ({
            ...A,
            ...A.description && {
                description: h.SENSITIVE_STRING
            }
        }), "InferenceProfileSummaryFilterSensitiveLog"),
        WyQ = AA((A) => ({
            ...A,
            ...A.inferenceProfileSummaries && {
                inferenceProfileSummaries: A.inferenceProfileSummaries.map((Q) => JyQ(Q))
            }
        }), "ListInferenceProfilesResponseFilterSensitiveLog"),
        XyQ = AA((A) => ({
            ...A,
            ...A.message && {
                message: h.SENSITIVE_STRING
            },
            ...A.inputDataConfig && {
                inputDataConfig: A.inputDataConfig
            },
            ...A.outputDataConfig && {
                outputDataConfig: A.outputDataConfig
            }
        }), "GetModelInvocationJobResponseFilterSensitiveLog"),
        FyQ = AA((A) => ({
            ...A,
            ...A.message && {
                message: h.SENSITIVE_STRING
            },
            ...A.inputDataConfig && {
                inputDataConfig: A.inputDataConfig
            },
            ...A.outputDataConfig && {
                outputDataConfig: A.outputDataConfig
            }
        }), "ModelInvocationJobSummaryFilterSensitiveLog"),
        VyQ = AA((A) => ({
            ...A,
            ...A.invocationJobSummaries && {
                invocationJobSummaries: A.invocationJobSummaries.map((Q) => FyQ(Q))
            }
        }), "ListModelInvocationJobsResponseFilterSensitiveLog"),
        KyQ = AA((A) => ({
            ...A,
            ...A.description && {
                description: h.SENSITIVE_STRING
            }
        }), "CreatePromptRouterRequestFilterSensitiveLog"),
        DyQ = AA((A) => ({
            ...A,
            ...A.description && {
                description: h.SENSITIVE_STRING
            }
        }), "GetPromptRouterResponseFilterSensitiveLog"),
        HyQ = AA((A) => ({
            ...A,
            ...A.description && {
                description: h.SENSITIVE_STRING
            }
        }), "PromptRouterSummaryFilterSensitiveLog"),
        CyQ = AA((A) => ({
            ...A,
            ...A.promptRouterSummaries && {
                promptRouterSummaries: A.promptRouterSummaries.map((Q) => HyQ(Q))
            }
        }), "ListPromptRoutersResponseFilterSensitiveLog"),
        pB = MV(),
        jL = UDA(),
        PW8 = {
            AVAILABLE: "AVAILABLE",
            NOT_AVAILABLE: "NOT_AVAILABLE"
        },
        jW8 = {
            AVAILABLE: "AVAILABLE",
            NOT_AVAILABLE: "NOT_AVAILABLE"
        },
        SW8 = {
            ALL: "ALL",
            PUBLIC: "PUBLIC"
        },
        _W8 = {
            COMPLETED: "Completed",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress",
            STOPPED: "Stopped",
            STOPPING: "Stopping"
        },
        kW8 = {
            COMPLETED: "Completed",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress",
            NOT_STARTED: "NotStarted",
            STOPPED: "Stopped",
            STOPPING: "Stopping"
        },
        yW8 = {
            COMPLETED: "Completed",
            FAILED: "Failed",
            IN_PROGRESS: "InProgress",
            STOPPED: "Stopped",
            STOPPING: "Stopping"
        },
        gmA;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.equals !== void 0) return B.equals(Q.equals);
            if (Q.notEquals !== void 0) return B.notEquals(Q.notEquals);
            if (Q.greaterThan !== void 0) return B.greaterThan(Q.greaterThan);
            if (Q.greaterThanOrEquals !== void 0) return B.greaterThanOrEquals(Q.greaterThanOrEquals);
            if (Q.lessThan !== void 0) return B.lessThan(Q.lessThan);
            if (Q.lessThanOrEquals !== void 0) return B.lessThanOrEquals(Q.lessThanOrEquals);
            if (Q.in !== void 0) return B.in(Q.in);
            if (Q.notIn !== void 0) return B.notIn(Q.notIn);
            if (Q.startsWith !== void 0) return B.startsWith(Q.startsWith);
            if (Q.listContains !== void 0) return B.listContains(Q.listContains);
            if (Q.stringContains !== void 0) return B.stringContains(Q.stringContains);
            if (Q.andAll !== void 0) return B.andAll(Q.andAll);
            if (Q.orAll !== void 0) return B.orAll(Q.orAll);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(gmA || (gmA = {}));
    var umA;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.retrieveConfig !== void 0) return B.retrieveConfig(Q.retrieveConfig);
            if (Q.retrieveAndGenerateConfig !== void 0) return B.retrieveAndGenerateConfig(Q.retrieveAndGenerateConfig);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(umA || (umA = {}));
    var mmA;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.knowledgeBaseConfig !== void 0) return B.knowledgeBaseConfig(Q.knowledgeBaseConfig);
            if (Q.precomputedRagSourceConfig !== void 0) return B.precomputedRagSourceConfig(Q.precomputedRagSourceConfig);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(mmA || (mmA = {}));
    var dmA;
    ((A) => {
        A.visit = AA((Q, B) => {
            if (Q.models !== void 0) return B.models(Q.models);
            if (Q.ragConfigs !== void 0) return B.ragConfigs(Q.ragConfigs);
            return B._(Q.$unknown[0], Q.$unknown[1])
        }, "visit")
    })(dmA || (dmA = {}));
    var EyQ = AA((A) => ({
            ...A,
            ...A.trainingDataConfig && {
                trainingDataConfig: lmA(A.trainingDataConfig)
            },
            ...A.customizationConfig && {
                customizationConfig: A.customizationConfig
            }
        }), "CreateModelCustomizationJobRequestFilterSensitiveLog"),
        zyQ = AA((A) => ({
            ...A,
            ...A.trainingDataConfig && {
                trainingDataConfig: lmA(A.trainingDataConfig)
            },
            ...A.customizationConfig && {
                customizationConfig: A.customizationConfig
            }
        }), "GetModelCustomizationJobResponseFilterSensitiveLog"),
        xW8 = AA((A) => {
            if (A.equals !== void 0) return {
                equals: A.equals
            };
            if (A.notEquals !== void 0) return {
                notEquals: A.notEquals
            };
            if (A.greaterThan !== void 0) return {
                greaterThan: A.greaterThan
            };
            if (A.greaterThanOrEquals !== void 0) return {
                greaterThanOrEquals: A.greaterThanOrEquals
            };
            if (A.lessThan !== void 0) return {
                lessThan: A.lessThan
            };
            if (A.lessThanOrEquals !== void 0) return {
                lessThanOrEquals: A.lessThanOrEquals
            };
            if (A.in !== void 0) return {
                in: A.in
            };
            if (A.notIn !== void 0) return {
                notIn: A.notIn
            };
            if (A.startsWith !== void 0) return {
                startsWith: A.startsWith
            };
            if (A.listContains !== void 0) return {
                listContains: A.listContains
            };
            if (A.stringContains !== void 0) return {
                stringContains: A.stringContains
            };
            if (A.andAll !== void 0) return {
                andAll: h.SENSITIVE_STRING
            };
            if (A.orAll !== void 0) return {
                orAll: h.SENSITIVE_STRING
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "RetrievalFilterFilterSensitiveLog"),
        UyQ = AA((A) => ({
            ...A,
            ...A.filter && {
                filter: h.SENSITIVE_STRING
            },
            ...A.implicitFilterConfiguration && {
                implicitFilterConfiguration: PkQ(A.implicitFilterConfiguration)
            },
            ...A.rerankingConfiguration && {
                rerankingConfiguration: kkQ(A.rerankingConfiguration)
            }
        }), "KnowledgeBaseVectorSearchConfigurationFilterSensitiveLog"),
        YP1 = AA((A) => ({
            ...A,
            ...A.vectorSearchConfiguration && {
                vectorSearchConfiguration: UyQ(A.vectorSearchConfiguration)
            }
        }), "KnowledgeBaseRetrievalConfigurationFilterSensitiveLog"),
        $yQ = AA((A) => ({
            ...A,
            ...A.retrievalConfiguration && {
                retrievalConfiguration: YP1(A.retrievalConfiguration)
            },
            ...A.generationConfiguration && {
                generationConfiguration: TkQ(A.generationConfiguration)
            }
        }), "KnowledgeBaseRetrieveAndGenerateConfigurationFilterSensitiveLog"),
        wyQ = AA((A) => ({
            ...A,
            ...A.knowledgeBaseRetrievalConfiguration && {
                knowledgeBaseRetrievalConfiguration: YP1(A.knowledgeBaseRetrievalConfiguration)
            }
        }), "RetrieveConfigFilterSensitiveLog"),
        qyQ = AA((A) => ({
            ...A,
            ...A.knowledgeBaseConfiguration && {
                knowledgeBaseConfiguration: $yQ(A.knowledgeBaseConfiguration)
            },
            ...A.externalSourcesConfiguration && {
                externalSourcesConfiguration: RkQ(A.externalSourcesConfiguration)
            }
        }), "RetrieveAndGenerateConfigurationFilterSensitiveLog"),
        NyQ = AA((A) => {
            if (A.retrieveConfig !== void 0) return {
                retrieveConfig: wyQ(A.retrieveConfig)
            };
            if (A.retrieveAndGenerateConfig !== void 0) return {
                retrieveAndGenerateConfig: qyQ(A.retrieveAndGenerateConfig)
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "KnowledgeBaseConfigFilterSensitiveLog"),
        LyQ = AA((A) => {
            if (A.knowledgeBaseConfig !== void 0) return {
                knowledgeBaseConfig: NyQ(A.knowledgeBaseConfig)
            };
            if (A.precomputedRagSourceConfig !== void 0) return {
                precomputedRagSourceConfig: A.precomputedRagSourceConfig
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "RAGConfigFilterSensitiveLog"),
        JP1 = AA((A) => {
            if (A.models !== void 0) return {
                models: A.models.map((Q) => NkQ(Q))
            };
            if (A.ragConfigs !== void 0) return {
                ragConfigs: A.ragConfigs.map((Q) => LyQ(Q))
            };
            if (A.$unknown !== void 0) return {
                [A.$unknown[0]]: "UNKNOWN"
            }
        }, "EvaluationInferenceConfigFilterSensitiveLog"),
        MyQ = AA((A) => ({
            ...A,
            ...A.jobDescription && {
                jobDescription: h.SENSITIVE_STRING
            },
            ...A.evaluationConfig && {
                evaluationConfig: AP1(A.evaluationConfig)
            },
            ...A.inferenceConfig && {
                inferenceConfig: JP1(A.inferenceConfig)
            }
        }), "CreateEvaluationJobRequestFilterSensitiveLog"),
        OyQ = AA((A) => ({
            ...A,
            ...A.jobDescription && {
                jobDescription: h.SENSITIVE_STRING
            },
            ...A.evaluationConfig && {
                evaluationConfig: AP1(A.evaluationConfig)
            },
            ...A.inferenceConfig && {
                inferenceConfig: JP1(A.inferenceConfig)
            }
        }), "GetEvaluationJobResponseFilterSensitiveLog"),
        vW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/evaluation-jobs/batch-delete");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                jobIdentifiers: AA((I) => (0, h._json)(I), "jobIdentifiers")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_BatchDeleteEvaluationJobCommand"),
        bW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/custom-models/create-custom-model");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                modelKmsKeyArn: [],
                modelName: [],
                modelSourceConfig: AA((I) => (0, h._json)(I), "modelSourceConfig"),
                modelTags: AA((I) => (0, h._json)(I), "modelTags"),
                roleArn: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateCustomModelCommand"),
        fW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/evaluation-jobs");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                applicationType: [],
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                customerEncryptionKeyId: [],
                evaluationConfig: AA((I) => NV8(I, Q), "evaluationConfig"),
                inferenceConfig: AA((I) => LV8(I, Q), "inferenceConfig"),
                jobDescription: [],
                jobName: [],
                jobTags: AA((I) => (0, h._json)(I), "jobTags"),
                outputDataConfig: AA((I) => (0, h._json)(I), "outputDataConfig"),
                roleArn: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateEvaluationJobCommand"),
        hW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/create-foundation-model-agreement");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                modelId: [],
                offerToken: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateFoundationModelAgreementCommand"),
        gW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/guardrails");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                blockedInputMessaging: [],
                blockedOutputsMessaging: [],
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                contentPolicyConfig: AA((I) => (0, h._json)(I), "contentPolicyConfig"),
                contextualGroundingPolicyConfig: AA((I) => RyQ(I, Q), "contextualGroundingPolicyConfig"),
                crossRegionConfig: AA((I) => (0, h._json)(I), "crossRegionConfig"),
                description: [],
                kmsKeyId: [],
                name: [],
                sensitiveInformationPolicyConfig: AA((I) => (0, h._json)(I), "sensitiveInformationPolicyConfig"),
                tags: AA((I) => (0, h._json)(I), "tags"),
                topicPolicyConfig: AA((I) => (0, h._json)(I), "topicPolicyConfig"),
                wordPolicyConfig: AA((I) => (0, h._json)(I), "wordPolicyConfig")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateGuardrailCommand"),
        uW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/guardrails/{guardrailIdentifier}"), B.p("guardrailIdentifier", () => A.guardrailIdentifier, "{guardrailIdentifier}", !1);
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                description: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateGuardrailVersionCommand"),
        mW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/inference-profiles");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                description: [],
                inferenceProfileName: [],
                modelSource: AA((I) => (0, h._json)(I), "modelSource"),
                tags: AA((I) => (0, h._json)(I), "tags")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateInferenceProfileCommand"),
        dW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/marketplace-model/endpoints");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                acceptEula: [],
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                endpointConfig: AA((I) => (0, h._json)(I), "endpointConfig"),
                endpointName: [],
                modelSourceIdentifier: [],
                tags: AA((I) => (0, h._json)(I), "tags")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateMarketplaceModelEndpointCommand"),
        cW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/model-copy-jobs");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                modelKmsKeyId: [],
                sourceModelArn: [],
                targetModelName: [],
                targetModelTags: AA((I) => (0, h._json)(I), "targetModelTags")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateModelCopyJobCommand"),
        pW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/model-customization-jobs");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                baseModelIdentifier: [],
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                customModelKmsKeyId: [],
                customModelName: [],
                customModelTags: AA((I) => (0, h._json)(I), "customModelTags"),
                customizationConfig: AA((I) => (0, h._json)(I), "customizationConfig"),
                customizationType: [],
                hyperParameters: AA((I) => (0, h._json)(I), "hyperParameters"),
                jobName: [],
                jobTags: AA((I) => (0, h._json)(I), "jobTags"),
                outputDataConfig: AA((I) => (0, h._json)(I), "outputDataConfig"),
                roleArn: [],
                trainingDataConfig: AA((I) => (0, h._json)(I), "trainingDataConfig"),
                validationDataConfig: AA((I) => (0, h._json)(I), "validationDataConfig"),
                vpcConfig: AA((I) => (0, h._json)(I), "vpcConfig")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateModelCustomizationJobCommand"),
        lW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/model-import-jobs");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [],
                importedModelKmsKeyId: [],
                importedModelName: [],
                importedModelTags: AA((I) => (0, h._json)(I), "importedModelTags"),
                jobName: [],
                jobTags: AA((I) => (0, h._json)(I), "jobTags"),
                modelDataSource: AA((I) => (0, h._json)(I), "modelDataSource"),
                roleArn: [],
                vpcConfig: AA((I) => (0, h._json)(I), "vpcConfig")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateModelImportJobCommand"),
        iW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/model-invocation-job");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                inputDataConfig: AA((I) => (0, h._json)(I), "inputDataConfig"),
                jobName: [],
                modelId: [],
                outputDataConfig: AA((I) => (0, h._json)(I), "outputDataConfig"),
                roleArn: [],
                tags: AA((I) => (0, h._json)(I), "tags"),
                timeoutDurationInHours: [],
                vpcConfig: AA((I) => (0, h._json)(I), "vpcConfig")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateModelInvocationJobCommand"),
        nW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/prompt-routers");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                description: [],
                fallbackModel: AA((I) => (0, h._json)(I), "fallbackModel"),
                models: AA((I) => (0, h._json)(I), "models"),
                promptRouterName: [],
                routingCriteria: AA((I) => dV8(I, Q), "routingCriteria"),
                tags: AA((I) => (0, h._json)(I), "tags")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreatePromptRouterCommand"),
        aW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/provisioned-model-throughput");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                commitmentDuration: [],
                modelId: [],
                modelUnits: [],
                provisionedModelName: [],
                tags: AA((I) => (0, h._json)(I), "tags")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateProvisionedModelThroughputCommand"),
        sW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/custom-models/{modelIdentifier}"), B.p("modelIdentifier", () => A.modelIdentifier, "{modelIdentifier}", !1);
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeleteCustomModelCommand"),
        rW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/delete-foundation-model-agreement");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                modelId: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_DeleteFoundationModelAgreementCommand"),
        oW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/guardrails/{guardrailIdentifier}"), B.p("guardrailIdentifier", () => A.guardrailIdentifier, "{guardrailIdentifier}", !1);
            let Z = (0, h.map)({
                    [cmA]: [, A[cmA]]
                }),
                I;
            return B.m("DELETE").h(G).q(Z).b(I), B.build()
        }, "se_DeleteGuardrailCommand"),
        tW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/imported-models/{modelIdentifier}"), B.p("modelIdentifier", () => A.modelIdentifier, "{modelIdentifier}", !1);
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeleteImportedModelCommand"),
        eW8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/inference-profiles/{inferenceProfileIdentifier}"), B.p("inferenceProfileIdentifier", () => A.inferenceProfileIdentifier, "{inferenceProfileIdentifier}", !1);
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeleteInferenceProfileCommand"),
        AX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/marketplace-model/endpoints/{endpointArn}"), B.p("endpointArn", () => A.endpointArn, "{endpointArn}", !1);
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeleteMarketplaceModelEndpointCommand"),
        QX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/logging/modelinvocations");
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeleteModelInvocationLoggingConfigurationCommand"),
        BX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/prompt-routers/{promptRouterArn}"), B.p("promptRouterArn", () => A.promptRouterArn, "{promptRouterArn}", !1);
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeletePromptRouterCommand"),
        GX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/provisioned-model-throughput/{provisionedModelId}"), B.p("provisionedModelId", () => A.provisionedModelId, "{provisionedModelId}", !1);
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeleteProvisionedModelThroughputCommand"),
        ZX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/marketplace-model/endpoints/{endpointArn}/registration"), B.p("endpointArn", () => A.endpointArn, "{endpointArn}", !1);
            let Z;
            return B.m("DELETE").h(G).b(Z), B.build()
        }, "se_DeregisterMarketplaceModelEndpointCommand"),
        IX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/custom-models/{modelIdentifier}"), B.p("modelIdentifier", () => A.modelIdentifier, "{modelIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetCustomModelCommand"),
        YX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/evaluation-jobs/{jobIdentifier}"), B.p("jobIdentifier", () => A.jobIdentifier, "{jobIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetEvaluationJobCommand"),
        JX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/foundation-models/{modelIdentifier}"), B.p("modelIdentifier", () => A.modelIdentifier, "{modelIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetFoundationModelCommand"),
        WX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/foundation-model-availability/{modelId}"), B.p("modelId", () => A.modelId, "{modelId}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetFoundationModelAvailabilityCommand"),
        XX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/guardrails/{guardrailIdentifier}"), B.p("guardrailIdentifier", () => A.guardrailIdentifier, "{guardrailIdentifier}", !1);
            let Z = (0, h.map)({
                    [cmA]: [, A[cmA]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_GetGuardrailCommand"),
        FX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/imported-models/{modelIdentifier}"), B.p("modelIdentifier", () => A.modelIdentifier, "{modelIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetImportedModelCommand"),
        VX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/inference-profiles/{inferenceProfileIdentifier}"), B.p("inferenceProfileIdentifier", () => A.inferenceProfileIdentifier, "{inferenceProfileIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetInferenceProfileCommand"),
        KX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/marketplace-model/endpoints/{endpointArn}"), B.p("endpointArn", () => A.endpointArn, "{endpointArn}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetMarketplaceModelEndpointCommand"),
        DX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-copy-jobs/{jobArn}"), B.p("jobArn", () => A.jobArn, "{jobArn}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetModelCopyJobCommand"),
        HX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-customization-jobs/{jobIdentifier}"), B.p("jobIdentifier", () => A.jobIdentifier, "{jobIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetModelCustomizationJobCommand"),
        CX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-import-jobs/{jobIdentifier}"), B.p("jobIdentifier", () => A.jobIdentifier, "{jobIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetModelImportJobCommand"),
        EX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-invocation-job/{jobIdentifier}"), B.p("jobIdentifier", () => A.jobIdentifier, "{jobIdentifier}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetModelInvocationJobCommand"),
        zX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/logging/modelinvocations");
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetModelInvocationLoggingConfigurationCommand"),
        UX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/prompt-routers/{promptRouterArn}"), B.p("promptRouterArn", () => A.promptRouterArn, "{promptRouterArn}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetPromptRouterCommand"),
        $X8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/provisioned-model-throughput/{provisionedModelId}"), B.p("provisionedModelId", () => A.provisionedModelId, "{provisionedModelId}", !1);
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetProvisionedModelThroughputCommand"),
        wX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/use-case-for-model-access");
            let Z;
            return B.m("GET").h(G).b(Z), B.build()
        }, "se_GetUseCaseForModelAccessCommand"),
        qX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/custom-models");
            let Z = (0, h.map)({
                    [nz]: [() => A.creationTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[nz]).toString()],
                    [iz]: [() => A.creationTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[iz]).toString()],
                    [az]: [, A[az]],
                    [h_Q]: [, A[h_Q]],
                    [m_Q]: [, A[m_Q]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]],
                    [c_Q]: [() => A.isOwned !== void 0, () => A[c_Q].toString()],
                    [l_Q]: [, A[l_Q]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListCustomModelsCommand"),
        NX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/evaluation-jobs");
            let Z = (0, h.map)({
                    [iz]: [() => A.creationTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[iz]).toString()],
                    [nz]: [() => A.creationTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[nz]).toString()],
                    [PL]: [, A[PL]],
                    [v_Q]: [, A[v_Q]],
                    [az]: [, A[az]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListEvaluationJobsCommand"),
        LX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/list-foundation-model-agreement-offers/{modelId}"), B.p("modelId", () => A.modelId, "{modelId}", !1);
            let Z = (0, h.map)({
                    [i_Q]: [, A[i_Q]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListFoundationModelAgreementOffersCommand"),
        MX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/foundation-models");
            let Z = (0, h.map)({
                    [u_Q]: [, A[u_Q]],
                    [b_Q]: [, A[b_Q]],
                    [g_Q]: [, A[g_Q]],
                    [f_Q]: [, A[f_Q]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListFoundationModelsCommand"),
        OX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/guardrails");
            let Z = (0, h.map)({
                    [d_Q]: [, A[d_Q]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListGuardrailsCommand"),
        RX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/imported-models");
            let Z = (0, h.map)({
                    [nz]: [() => A.creationTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[nz]).toString()],
                    [iz]: [() => A.creationTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[iz]).toString()],
                    [az]: [, A[az]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListImportedModelsCommand"),
        TX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/inference-profiles");
            let Z = (0, h.map)({
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [tT1]: [, A[BD8]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListInferenceProfilesCommand"),
        PX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/marketplace-model/endpoints");
            let Z = (0, h.map)({
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [AD8]: [, A[eK8]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListMarketplaceModelEndpointsCommand"),
        jX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-copy-jobs");
            let Z = (0, h.map)({
                    [iz]: [() => A.creationTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[iz]).toString()],
                    [nz]: [() => A.creationTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[nz]).toString()],
                    [PL]: [, A[PL]],
                    [n_Q]: [, A[n_Q]],
                    [a_Q]: [, A[a_Q]],
                    [QD8]: [, A[GD8]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListModelCopyJobsCommand"),
        SX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-customization-jobs");
            let Z = (0, h.map)({
                    [iz]: [() => A.creationTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[iz]).toString()],
                    [nz]: [() => A.creationTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[nz]).toString()],
                    [PL]: [, A[PL]],
                    [az]: [, A[az]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListModelCustomizationJobsCommand"),
        _X8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-import-jobs");
            let Z = (0, h.map)({
                    [iz]: [() => A.creationTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[iz]).toString()],
                    [nz]: [() => A.creationTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[nz]).toString()],
                    [PL]: [, A[PL]],
                    [az]: [, A[az]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListModelImportJobsCommand"),
        kX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-invocation-jobs");
            let Z = (0, h.map)({
                    [s_Q]: [() => A.submitTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[s_Q]).toString()],
                    [r_Q]: [() => A.submitTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[r_Q]).toString()],
                    [PL]: [, A[PL]],
                    [az]: [, A[az]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListModelInvocationJobsCommand"),
        yX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/prompt-routers");
            let Z = (0, h.map)({
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [tT1]: [, A[tT1]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListPromptRoutersCommand"),
        xX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/provisioned-model-throughputs");
            let Z = (0, h.map)({
                    [iz]: [() => A.creationTimeAfter !== void 0, () => (0, h.serializeDateTime)(A[iz]).toString()],
                    [nz]: [() => A.creationTimeBefore !== void 0, () => (0, h.serializeDateTime)(A[nz]).toString()],
                    [PL]: [, A[PL]],
                    [p_Q]: [, A[p_Q]],
                    [az]: [, A[az]],
                    [cI]: [() => A.maxResults !== void 0, () => A[cI].toString()],
                    [pI]: [, A[pI]],
                    [LH]: [, A[LH]],
                    [MH]: [, A[MH]]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListProvisionedModelThroughputsCommand"),
        vX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/listTagsForResource");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                resourceARN: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_ListTagsForResourceCommand"),
        bX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/logging/modelinvocations");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                loggingConfig: AA((I) => (0, h._json)(I), "loggingConfig")
            })), B.m("PUT").h(G).b(Z), B.build()
        }, "se_PutModelInvocationLoggingConfigurationCommand"),
        fX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/use-case-for-model-access");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                formData: AA((I) => Q.base64Encoder(I), "formData")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_PutUseCaseForModelAccessCommand"),
        hX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/marketplace-model/endpoints/{endpointIdentifier}/registration"), B.p("endpointIdentifier", () => A.endpointIdentifier, "{endpointIdentifier}", !1);
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                modelSourceIdentifier: []
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_RegisterMarketplaceModelEndpointCommand"),
        gX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/evaluation-job/{jobIdentifier}/stop"), B.p("jobIdentifier", () => A.jobIdentifier, "{jobIdentifier}", !1);
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_StopEvaluationJobCommand"),
        uX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-customization-jobs/{jobIdentifier}/stop"), B.p("jobIdentifier", () => A.jobIdentifier, "{jobIdentifier}", !1);
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_StopModelCustomizationJobCommand"),
        mX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {};
            B.bp("/model-invocation-job/{jobIdentifier}/stop"), B.p("jobIdentifier", () => A.jobIdentifier, "{jobIdentifier}", !1);
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_StopModelInvocationJobCommand"),
        dX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/tagResource");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                resourceARN: [],
                tags: AA((I) => (0, h._json)(I), "tags")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_TagResourceCommand"),
        cX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/untagResource");
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                resourceARN: [],
                tagKeys: AA((I) => (0, h._json)(I), "tagKeys")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_UntagResourceCommand"),
        pX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/guardrails/{guardrailIdentifier}"), B.p("guardrailIdentifier", () => A.guardrailIdentifier, "{guardrailIdentifier}", !1);
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                blockedInputMessaging: [],
                blockedOutputsMessaging: [],
                contentPolicyConfig: AA((I) => (0, h._json)(I), "contentPolicyConfig"),
                contextualGroundingPolicyConfig: AA((I) => RyQ(I, Q), "contextualGroundingPolicyConfig"),
                crossRegionConfig: AA((I) => (0, h._json)(I), "crossRegionConfig"),
                description: [],
                kmsKeyId: [],
                name: [],
                sensitiveInformationPolicyConfig: AA((I) => (0, h._json)(I), "sensitiveInformationPolicyConfig"),
                topicPolicyConfig: AA((I) => (0, h._json)(I), "topicPolicyConfig"),
                wordPolicyConfig: AA((I) => (0, h._json)(I), "wordPolicyConfig")
            })), B.m("PUT").h(G).b(Z), B.build()
        }, "se_UpdateGuardrailCommand"),
        lX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/marketplace-model/endpoints/{endpointArn}"), B.p("endpointArn", () => A.endpointArn, "{endpointArn}", !1);
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                clientRequestToken: [!0, (I) => I ?? (0, jL.v4)()],
                endpointConfig: AA((I) => (0, h._json)(I), "endpointConfig")
            })), B.m("PATCH").h(G).b(Z), B.build()
        }, "se_UpdateMarketplaceModelEndpointCommand"),
        iX8 = AA(async (A, Q) => {
            let B = (0, BB.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/provisioned-model-throughput/{provisionedModelId}"), B.p("provisionedModelId", () => A.provisionedModelId, "{provisionedModelId}", !1);
            let Z;
            return Z = JSON.stringify((0, h.take)(A, {
                desiredModelId: [],
                desiredProvisionedModelName: []
            })), B.m("PATCH").h(G).b(Z), B.build()
        }, "se_UpdateProvisionedModelThroughputCommand"),
        nX8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    errors: h._json,
                    evaluationJobs: h._json
                });
            return Object.assign(B, Z), B
        }, "de_BatchDeleteEvaluationJobCommand"),
        aX8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateCustomModelCommand"),
        sX8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    jobArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateEvaluationJobCommand"),
        rX8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelId: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateFoundationModelAgreementCommand"),
        oX8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    createdAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "createdAt"),
                    guardrailArn: h.expectString,
                    guardrailId: h.expectString,
                    version: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateGuardrailCommand"),
        tX8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    guardrailId: h.expectString,
                    version: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateGuardrailVersionCommand"),
        eX8 = AA(async (A, Q) => {
            if (A.statusCode !== 201 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    inferenceProfileArn: h.expectString,
                    status: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateInferenceProfileCommand"),
        AF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    marketplaceModelEndpoint: AA((I) => imA(I, Q), "marketplaceModelEndpoint")
                });
            return Object.assign(B, Z), B
        }, "de_CreateMarketplaceModelEndpointCommand"),
        QF8 = AA(async (A, Q) => {
            if (A.statusCode !== 201 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    jobArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateModelCopyJobCommand"),
        BF8 = AA(async (A, Q) => {
            if (A.statusCode !== 201 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    jobArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateModelCustomizationJobCommand"),
        GF8 = AA(async (A, Q) => {
            if (A.statusCode !== 201 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    jobArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateModelImportJobCommand"),
        ZF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    jobArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateModelInvocationJobCommand"),
        IF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    promptRouterArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreatePromptRouterCommand"),
        YF8 = AA(async (A, Q) => {
            if (A.statusCode !== 201 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    provisionedModelArn: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateProvisionedModelThroughputCommand"),
        JF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteCustomModelCommand"),
        WF8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteFoundationModelAgreementCommand"),
        XF8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteGuardrailCommand"),
        FF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteImportedModelCommand"),
        VF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteInferenceProfileCommand"),
        KF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteMarketplaceModelEndpointCommand"),
        DF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteModelInvocationLoggingConfigurationCommand"),
        HF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeletePromptRouterCommand"),
        CF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeleteProvisionedModelThroughputCommand"),
        EF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_DeregisterMarketplaceModelEndpointCommand"),
        zF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    baseModelArn: h.expectString,
                    creationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "creationTime"),
                    customizationConfig: AA((I) => (0, h._json)((0, pB.awsExpectUnion)(I)), "customizationConfig"),
                    customizationType: h.expectString,
                    failureMessage: h.expectString,
                    hyperParameters: h._json,
                    jobArn: h.expectString,
                    jobName: h.expectString,
                    modelArn: h.expectString,
                    modelKmsKeyArn: h.expectString,
                    modelName: h.expectString,
                    modelStatus: h.expectString,
                    outputDataConfig: h._json,
                    trainingDataConfig: h._json,
                    trainingMetrics: AA((I) => vyQ(I, Q), "trainingMetrics"),
                    validationDataConfig: h._json,
                    validationMetrics: AA((I) => byQ(I, Q), "validationMetrics")
                });
            return Object.assign(B, Z), B
        }, "de_GetCustomModelCommand"),
        UF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    applicationType: h.expectString,
                    creationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "creationTime"),
                    customerEncryptionKeyId: h.expectString,
                    evaluationConfig: AA((I) => GK8((0, pB.awsExpectUnion)(I), Q), "evaluationConfig"),
                    failureMessages: h._json,
                    inferenceConfig: AA((I) => ZK8((0, pB.awsExpectUnion)(I), Q), "inferenceConfig"),
                    jobArn: h.expectString,
                    jobDescription: h.expectString,
                    jobName: h.expectString,
                    jobType: h.expectString,
                    lastModifiedTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "lastModifiedTime"),
                    outputDataConfig: h._json,
                    roleArn: h.expectString,
                    status: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_GetEvaluationJobCommand"),
        $F8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelDetails: h._json
                });
            return Object.assign(B, Z), B
        }, "de_GetFoundationModelCommand"),
        wF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    agreementAvailability: h._json,
                    authorizationStatus: h.expectString,
                    entitlementAvailability: h.expectString,
                    modelId: h.expectString,
                    regionAvailability: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_GetFoundationModelAvailabilityCommand"),
        qF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    blockedInputMessaging: h.expectString,
                    blockedOutputsMessaging: h.expectString,
                    contentPolicy: h._json,
                    contextualGroundingPolicy: AA((I) => CK8(I, Q), "contextualGroundingPolicy"),
                    createdAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "createdAt"),
                    crossRegionDetails: h._json,
                    description: h.expectString,
                    failureRecommendations: h._json,
                    guardrailArn: h.expectString,
                    guardrailId: h.expectString,
                    kmsKeyArn: h.expectString,
                    name: h.expectString,
                    sensitiveInformationPolicy: h._json,
                    status: h.expectString,
                    statusReasons: h._json,
                    topicPolicy: h._json,
                    updatedAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "updatedAt"),
                    version: h.expectString,
                    wordPolicy: h._json
                });
            return Object.assign(B, Z), B
        }, "de_GetGuardrailCommand"),
        NF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    creationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "creationTime"),
                    customModelUnits: h._json,
                    instructSupported: h.expectBoolean,
                    jobArn: h.expectString,
                    jobName: h.expectString,
                    modelArchitecture: h.expectString,
                    modelArn: h.expectString,
                    modelDataSource: AA((I) => (0, h._json)((0, pB.awsExpectUnion)(I)), "modelDataSource"),
                    modelKmsKeyArn: h.expectString,
                    modelName: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_GetImportedModelCommand"),
        LF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    createdAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "createdAt"),
                    description: h.expectString,
                    inferenceProfileArn: h.expectString,
                    inferenceProfileId: h.expectString,
                    inferenceProfileName: h.expectString,
                    models: h._json,
                    status: h.expectString,
                    type: h.expectString,
                    updatedAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "updatedAt")
                });
            return Object.assign(B, Z), B
        }, "de_GetInferenceProfileCommand"),
        MF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    marketplaceModelEndpoint: AA((I) => imA(I, Q), "marketplaceModelEndpoint")
                });
            return Object.assign(B, Z), B
        }, "de_GetMarketplaceModelEndpointCommand"),
        OF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    creationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "creationTime"),
                    failureMessage: h.expectString,
                    jobArn: h.expectString,
                    sourceAccountId: h.expectString,
                    sourceModelArn: h.expectString,
                    sourceModelName: h.expectString,
                    status: h.expectString,
                    targetModelArn: h.expectString,
                    targetModelKmsKeyArn: h.expectString,
                    targetModelName: h.expectString,
                    targetModelTags: h._json
                });
            return Object.assign(B, Z), B
        }, "de_GetModelCopyJobCommand"),
        RF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);