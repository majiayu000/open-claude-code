/**
 * Claude Code Decompiled
 * Category: api
 * File: 7/30
 * Lines: 112014 - 113404 (1391 lines)
 * Original file: cli.js
 */

            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    baseModelArn: h.expectString,
                    clientRequestToken: h.expectString,
                    creationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "creationTime"),
                    customizationConfig: AA((I) => (0, h._json)((0, pB.awsExpectUnion)(I)), "customizationConfig"),
                    customizationType: h.expectString,
                    endTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "endTime"),
                    failureMessage: h.expectString,
                    hyperParameters: h._json,
                    jobArn: h.expectString,
                    jobName: h.expectString,
                    lastModifiedTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "lastModifiedTime"),
                    outputDataConfig: h._json,
                    outputModelArn: h.expectString,
                    outputModelKmsKeyArn: h.expectString,
                    outputModelName: h.expectString,
                    roleArn: h.expectString,
                    status: h.expectString,
                    statusDetails: AA((I) => xyQ(I, Q), "statusDetails"),
                    trainingDataConfig: h._json,
                    trainingMetrics: AA((I) => vyQ(I, Q), "trainingMetrics"),
                    validationDataConfig: h._json,
                    validationMetrics: AA((I) => byQ(I, Q), "validationMetrics"),
                    vpcConfig: h._json
                });
            return Object.assign(B, Z), B
        }, "de_GetModelCustomizationJobCommand"),
        TF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    creationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "creationTime"),
                    endTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "endTime"),
                    failureMessage: h.expectString,
                    importedModelArn: h.expectString,
                    importedModelKmsKeyArn: h.expectString,
                    importedModelName: h.expectString,
                    jobArn: h.expectString,
                    jobName: h.expectString,
                    lastModifiedTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "lastModifiedTime"),
                    modelDataSource: AA((I) => (0, h._json)((0, pB.awsExpectUnion)(I)), "modelDataSource"),
                    roleArn: h.expectString,
                    status: h.expectString,
                    vpcConfig: h._json
                });
            return Object.assign(B, Z), B
        }, "de_GetModelImportJobCommand"),
        PF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    clientRequestToken: h.expectString,
                    endTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "endTime"),
                    inputDataConfig: AA((I) => (0, h._json)((0, pB.awsExpectUnion)(I)), "inputDataConfig"),
                    jobArn: h.expectString,
                    jobExpirationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "jobExpirationTime"),
                    jobName: h.expectString,
                    lastModifiedTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "lastModifiedTime"),
                    message: h.expectString,
                    modelId: h.expectString,
                    outputDataConfig: AA((I) => (0, h._json)((0, pB.awsExpectUnion)(I)), "outputDataConfig"),
                    roleArn: h.expectString,
                    status: h.expectString,
                    submitTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "submitTime"),
                    timeoutDurationInHours: h.expectInt32,
                    vpcConfig: h._json
                });
            return Object.assign(B, Z), B
        }, "de_GetModelInvocationJobCommand"),
        jF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    loggingConfig: h._json
                });
            return Object.assign(B, Z), B
        }, "de_GetModelInvocationLoggingConfigurationCommand"),
        SF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    createdAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "createdAt"),
                    description: h.expectString,
                    fallbackModel: h._json,
                    models: h._json,
                    promptRouterArn: h.expectString,
                    promptRouterName: h.expectString,
                    routingCriteria: AA((I) => yyQ(I, Q), "routingCriteria"),
                    status: h.expectString,
                    type: h.expectString,
                    updatedAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "updatedAt")
                });
            return Object.assign(B, Z), B
        }, "de_GetPromptRouterCommand"),
        _F8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    commitmentDuration: h.expectString,
                    commitmentExpirationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "commitmentExpirationTime"),
                    creationTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "creationTime"),
                    desiredModelArn: h.expectString,
                    desiredModelUnits: h.expectInt32,
                    failureMessage: h.expectString,
                    foundationModelArn: h.expectString,
                    lastModifiedTime: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "lastModifiedTime"),
                    modelArn: h.expectString,
                    modelUnits: h.expectInt32,
                    provisionedModelArn: h.expectString,
                    provisionedModelName: h.expectString,
                    status: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_GetProvisionedModelThroughputCommand"),
        kF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    formData: Q.base64Decoder
                });
            return Object.assign(B, Z), B
        }, "de_GetUseCaseForModelAccessCommand"),
        yF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelSummaries: AA((I) => QK8(I, Q), "modelSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListCustomModelsCommand"),
        xF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    jobSummaries: AA((I) => IK8(I, Q), "jobSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListEvaluationJobsCommand"),
        vF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelId: h.expectString,
                    offers: h._json
                });
            return Object.assign(B, Z), B
        }, "de_ListFoundationModelAgreementOffersCommand"),
        bF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelSummaries: h._json
                });
            return Object.assign(B, Z), B
        }, "de_ListFoundationModelsCommand"),
        fF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    guardrails: AA((I) => EK8(I, Q), "guardrails"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListGuardrailsCommand"),
        hF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelSummaries: AA((I) => $K8(I, Q), "modelSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListImportedModelsCommand"),
        gF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    inferenceProfileSummaries: AA((I) => wK8(I, Q), "inferenceProfileSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListInferenceProfilesCommand"),
        uF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    marketplaceModelEndpoints: AA((I) => OK8(I, Q), "marketplaceModelEndpoints"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListMarketplaceModelEndpointsCommand"),
        mF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelCopyJobSummaries: AA((I) => TK8(I, Q), "modelCopyJobSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListModelCopyJobsCommand"),
        dF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelCustomizationJobSummaries: AA((I) => jK8(I, Q), "modelCustomizationJobSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListModelCustomizationJobsCommand"),
        cF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    modelImportJobSummaries: AA((I) => _K8(I, Q), "modelImportJobSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListModelImportJobsCommand"),
        pF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    invocationJobSummaries: AA((I) => yK8(I, Q), "invocationJobSummaries"),
                    nextToken: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListModelInvocationJobsCommand"),
        lF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    nextToken: h.expectString,
                    promptRouterSummaries: AA((I) => vK8(I, Q), "promptRouterSummaries")
                });
            return Object.assign(B, Z), B
        }, "de_ListPromptRoutersCommand"),
        iF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    nextToken: h.expectString,
                    provisionedModelSummaries: AA((I) => fK8(I, Q), "provisionedModelSummaries")
                });
            return Object.assign(B, Z), B
        }, "de_ListProvisionedModelThroughputsCommand"),
        nF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    tags: h._json
                });
            return Object.assign(B, Z), B
        }, "de_ListTagsForResourceCommand"),
        aF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_PutModelInvocationLoggingConfigurationCommand"),
        sF8 = AA(async (A, Q) => {
            if (A.statusCode !== 201 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_PutUseCaseForModelAccessCommand"),
        rF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    marketplaceModelEndpoint: AA((I) => imA(I, Q), "marketplaceModelEndpoint")
                });
            return Object.assign(B, Z), B
        }, "de_RegisterMarketplaceModelEndpointCommand"),
        oF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_StopEvaluationJobCommand"),
        tF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_StopModelCustomizationJobCommand"),
        eF8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_StopModelInvocationJobCommand"),
        AV8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_TagResourceCommand"),
        QV8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_UntagResourceCommand"),
        BV8 = AA(async (A, Q) => {
            if (A.statusCode !== 202 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    guardrailArn: h.expectString,
                    guardrailId: h.expectString,
                    updatedAt: AA((I) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(I)), "updatedAt"),
                    version: h.expectString
                });
            return Object.assign(B, Z), B
        }, "de_UpdateGuardrailCommand"),
        GV8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                    $metadata: MB(A)
                }),
                G = (0, h.expectNonNull)((0, h.expectObject)(await (0, pB.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, h.take)(G, {
                    marketplaceModelEndpoint: AA((I) => imA(I, Q), "marketplaceModelEndpoint")
                });
            return Object.assign(B, Z), B
        }, "de_UpdateMarketplaceModelEndpointCommand"),
        ZV8 = AA(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return K2(A, Q);
            let B = (0, h.map)({
                $metadata: MB(A)
            });
            return await (0, h.collectBody)(A.body, Q), B
        }, "de_UpdateProvisionedModelThroughputCommand"),
        K2 = AA(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, pB.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, pB.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "AccessDeniedException":
                case "com.amazonaws.bedrock#AccessDeniedException":
                    throw await YV8(B, Q);
                case "ConflictException":
                case "com.amazonaws.bedrock#ConflictException":
                    throw await JV8(B, Q);
                case "InternalServerException":
                case "com.amazonaws.bedrock#InternalServerException":
                    throw await WV8(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.bedrock#ResourceNotFoundException":
                    throw await XV8(B, Q);
                case "ThrottlingException":
                case "com.amazonaws.bedrock#ThrottlingException":
                    throw await KV8(B, Q);
                case "ValidationException":
                case "com.amazonaws.bedrock#ValidationException":
                    throw await HV8(B, Q);
                case "ServiceQuotaExceededException":
                case "com.amazonaws.bedrock#ServiceQuotaExceededException":
                    throw await FV8(B, Q);
                case "TooManyTagsException":
                case "com.amazonaws.bedrock#TooManyTagsException":
                    throw await DV8(B, Q);
                case "ServiceUnavailableException":
                case "com.amazonaws.bedrock#ServiceUnavailableException":
                    throw await VV8(B, Q);
                default:
                    let Z = B.body;
                    return IV8({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        IV8 = (0, h.withBaseException)(uR),
        YV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new t_Q({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_AccessDeniedExceptionRes"),
        JV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new GkQ({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_ConflictExceptionRes"),
        WV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new e_Q({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_InternalServerExceptionRes"),
        XV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new AkQ({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_ResourceNotFoundExceptionRes"),
        FV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new ZkQ({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_ServiceQuotaExceededExceptionRes"),
        VV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new IkQ({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_ServiceUnavailableExceptionRes"),
        KV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new QkQ({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_ThrottlingExceptionRes"),
        DV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString,
                    resourceName: h.expectString
                });
            Object.assign(B, Z);
            let I = new YkQ({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_TooManyTagsExceptionRes"),
        HV8 = AA(async (A, Q) => {
            let B = (0, h.map)({}),
                G = A.body,
                Z = (0, h.take)(G, {
                    message: h.expectString
                });
            Object.assign(B, Z);
            let I = new BkQ({
                $metadata: MB(A),
                ...B
            });
            return (0, h.decorateServiceException)(I, A.body)
        }, "de_ValidationExceptionRes"),
        WP1 = AA((A, Q) => {
            return Object.entries(A).reduce((B, [G, Z]) => {
                if (Z === null) return B;
                return B[G] = CV8(Z, Q), B
            }, {})
        }, "se_AdditionalModelRequestFields"),
        CV8 = AA((A, Q) => {
            return A
        }, "se_AdditionalModelRequestFieldsValue"),
        EV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                customMetricConfig: AA((B) => zV8(B, Q), "customMetricConfig"),
                datasetMetricConfigs: h._json,
                evaluatorModelConfig: h._json
            })
        }, "se_AutomatedEvaluationConfig"),
        zV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                customMetrics: AA((B) => UV8(B, Q), "customMetrics"),
                evaluatorModelConfig: h._json
            })
        }, "se_AutomatedEvaluationCustomMetricConfig"),
        UV8 = AA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return $V8(B, Q)
            })
        }, "se_AutomatedEvaluationCustomMetrics"),
        $V8 = AA((A, Q) => {
            return fmA.visit(A, {
                customMetricDefinition: AA((B) => ({
                    customMetricDefinition: qV8(B, Q)
                }), "customMetricDefinition"),
                _: AA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_AutomatedEvaluationCustomMetricSource"),
        wV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                contentType: [],
                data: Q.base64Encoder,
                identifier: []
            })
        }, "se_ByteContentDoc"),
        qV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                instructions: [],
                name: [],
                ratingScale: AA((B) => fV8(B, Q), "ratingScale")
            })
        }, "se_CustomMetricDefinition"),
        NV8 = AA((A, Q) => {
            return hmA.visit(A, {
                automated: AA((B) => ({
                    automated: EV8(B, Q)
                }), "automated"),
                human: AA((B) => ({
                    human: (0, h._json)(B)
                }), "human"),
                _: AA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_EvaluationConfig"),
        LV8 = AA((A, Q) => {
            return dmA.visit(A, {
                models: AA((B) => ({
                    models: (0, h._json)(B)
                }), "models"),
                ragConfigs: AA((B) => ({
                    ragConfigs: bV8(B, Q)
                }), "ragConfigs"),
                _: AA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_EvaluationInferenceConfig"),
        MV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                byteContent: AA((B) => wV8(B, Q), "byteContent"),
                s3Location: h._json,
                sourceType: []
            })
        }, "se_ExternalSource"),
        OV8 = AA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return MV8(B, Q)
            })
        }, "se_ExternalSources"),
        RV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                additionalModelRequestFields: AA((B) => WP1(B, Q), "additionalModelRequestFields"),
                guardrailConfiguration: h._json,
                kbInferenceConfig: AA((B) => TyQ(B, Q), "kbInferenceConfig"),
                promptTemplate: h._json
            })
        }, "se_ExternalSourcesGenerationConfiguration"),
        TV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                generationConfiguration: AA((B) => RV8(B, Q), "generationConfiguration"),
                modelArn: [],
                sources: AA((B) => OV8(B, Q), "sources")
            })
        }, "se_ExternalSourcesRetrieveAndGenerateConfiguration"),
        hR = AA((A, Q) => {
            return (0, h.take)(A, {
                key: [],
                value: AA((B) => PV8(B, Q), "value")
            })
        }, "se_FilterAttribute"),
        PV8 = AA((A, Q) => {
            return A
        }, "se_FilterValue"),
        jV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                additionalModelRequestFields: AA((B) => WP1(B, Q), "additionalModelRequestFields"),
                guardrailConfiguration: h._json,
                kbInferenceConfig: AA((B) => TyQ(B, Q), "kbInferenceConfig"),
                promptTemplate: h._json
            })
        }, "se_GenerationConfiguration"),
        SV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                action: [],
                enabled: [],
                threshold: h.serializeFloat,
                type: []
            })
        }, "se_GuardrailContextualGroundingFilterConfig"),
        _V8 = AA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return SV8(B, Q)
            })
        }, "se_GuardrailContextualGroundingFiltersConfig"),
        RyQ = AA((A, Q) => {
            return (0, h.take)(A, {
                filtersConfig: AA((B) => _V8(B, Q), "filtersConfig")
            })
        }, "se_GuardrailContextualGroundingPolicyConfig"),
        TyQ = AA((A, Q) => {
            return (0, h.take)(A, {
                textInferenceConfig: AA((B) => cV8(B, Q), "textInferenceConfig")
            })
        }, "se_KbInferenceConfig"),
        kV8 = AA((A, Q) => {
            return umA.visit(A, {
                retrieveAndGenerateConfig: AA((B) => ({
                    retrieveAndGenerateConfig: uV8(B, Q)
                }), "retrieveAndGenerateConfig"),
                retrieveConfig: AA((B) => ({
                    retrieveConfig: mV8(B, Q)
                }), "retrieveConfig"),
                _: AA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_KnowledgeBaseConfig"),
        PyQ = AA((A, Q) => {
            return (0, h.take)(A, {
                vectorSearchConfiguration: AA((B) => xV8(B, Q), "vectorSearchConfiguration")
            })
        }, "se_KnowledgeBaseRetrievalConfiguration"),
        yV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                generationConfiguration: AA((B) => jV8(B, Q), "generationConfiguration"),
                knowledgeBaseId: [],
                modelArn: [],
                orchestrationConfiguration: h._json,
                retrievalConfiguration: AA((B) => PyQ(B, Q), "retrievalConfiguration")
            })
        }, "se_KnowledgeBaseRetrieveAndGenerateConfiguration"),
        xV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                filter: AA((B) => jyQ(B, Q), "filter"),
                implicitFilterConfiguration: h._json,
                numberOfResults: [],
                overrideSearchType: [],
                rerankingConfiguration: AA((B) => iV8(B, Q), "rerankingConfiguration")
            })
        }, "se_KnowledgeBaseVectorSearchConfiguration"),
        vV8 = AA((A, Q) => {
            return mmA.visit(A, {
                knowledgeBaseConfig: AA((B) => ({
                    knowledgeBaseConfig: kV8(B, Q)
                }), "knowledgeBaseConfig"),
                precomputedRagSourceConfig: AA((B) => ({
                    precomputedRagSourceConfig: (0, h._json)(B)
                }), "precomputedRagSourceConfig"),
                _: AA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_RAGConfig"),
        bV8 = AA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return vV8(B, Q)
            })
        }, "se_RagConfigs"),
        fV8 = AA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return hV8(B, Q)
            })
        }, "se_RatingScale"),
        hV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                definition: [],
                value: AA((B) => gV8(B, Q), "value")
            })
        }, "se_RatingScaleItem"),
        gV8 = AA((A, Q) => {
            return bmA.visit(A, {
                floatValue: AA((B) => ({
                    floatValue: (0, h.serializeFloat)(B)
                }), "floatValue"),
                stringValue: AA((B) => ({
                    stringValue: B
                }), "stringValue"),
                _: AA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_RatingScaleItemValue"),
        jyQ = AA((A, Q) => {
            return gmA.visit(A, {
                andAll: AA((B) => ({
                    andAll: y_Q(B, Q)
                }), "andAll"),
                equals: AA((B) => ({
                    equals: hR(B, Q)
                }), "equals"),
                greaterThan: AA((B) => ({
                    greaterThan: hR(B, Q)
                }), "greaterThan"),
                greaterThanOrEquals: AA((B) => ({
                    greaterThanOrEquals: hR(B, Q)
                }), "greaterThanOrEquals"),
                in: AA((B) => ({
                    in: hR(B, Q)
                }), "in"),
                lessThan: AA((B) => ({
                    lessThan: hR(B, Q)
                }), "lessThan"),
                lessThanOrEquals: AA((B) => ({
                    lessThanOrEquals: hR(B, Q)
                }), "lessThanOrEquals"),
                listContains: AA((B) => ({
                    listContains: hR(B, Q)
                }), "listContains"),
                notEquals: AA((B) => ({
                    notEquals: hR(B, Q)
                }), "notEquals"),
                notIn: AA((B) => ({
                    notIn: hR(B, Q)
                }), "notIn"),
                orAll: AA((B) => ({
                    orAll: y_Q(B, Q)
                }), "orAll"),
                startsWith: AA((B) => ({
                    startsWith: hR(B, Q)
                }), "startsWith"),
                stringContains: AA((B) => ({
                    stringContains: hR(B, Q)
                }), "stringContains"),
                _: AA((B, G) => ({
                    [B]: G
                }), "_")
            })
        }, "se_RetrievalFilter"),
        y_Q = AA((A, Q) => {
            return A.filter((B) => B != null).map((B) => {
                return jyQ(B, Q)
            })
        }, "se_RetrievalFilterList"),
        uV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                externalSourcesConfiguration: AA((B) => TV8(B, Q), "externalSourcesConfiguration"),
                knowledgeBaseConfiguration: AA((B) => yV8(B, Q), "knowledgeBaseConfiguration"),
                type: []
            })
        }, "se_RetrieveAndGenerateConfiguration"),
        mV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                knowledgeBaseId: [],
                knowledgeBaseRetrievalConfiguration: AA((B) => PyQ(B, Q), "knowledgeBaseRetrievalConfiguration")
            })
        }, "se_RetrieveConfig"),
        dV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                responseQualityDifference: h.serializeFloat
            })
        }, "se_RoutingCriteria"),
        cV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                maxTokens: [],
                stopSequences: h._json,
                temperature: h.serializeFloat,
                topP: h.serializeFloat
            })
        }, "se_TextInferenceConfig"),
        pV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                metadataConfiguration: h._json,
                modelConfiguration: AA((B) => lV8(B, Q), "modelConfiguration"),
                numberOfRerankedResults: []
            })
        }, "se_VectorSearchBedrockRerankingConfiguration"),
        lV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                additionalModelRequestFields: AA((B) => WP1(B, Q), "additionalModelRequestFields"),
                modelArn: []
            })
        }, "se_VectorSearchBedrockRerankingModelConfiguration"),
        iV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                bedrockRerankingConfiguration: AA((B) => pV8(B, Q), "bedrockRerankingConfiguration"),
                type: []
            })
        }, "se_VectorSearchRerankingConfiguration"),
        XP1 = AA((A, Q) => {
            return Object.entries(A).reduce((B, [G, Z]) => {
                if (Z === null) return B;
                return B[G] = nV8(Z, Q), B
            }, {})
        }, "de_AdditionalModelRequestFields"),
        nV8 = AA((A, Q) => {
            return A
        }, "de_AdditionalModelRequestFieldsValue"),
        aV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                customMetricConfig: AA((B) => sV8(B, Q), "customMetricConfig"),
                datasetMetricConfigs: h._json,
                evaluatorModelConfig: AA((B) => (0, h._json)((0, pB.awsExpectUnion)(B)), "evaluatorModelConfig")
            })
        }, "de_AutomatedEvaluationConfig"),
        sV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                customMetrics: AA((B) => rV8(B, Q), "customMetrics"),
                evaluatorModelConfig: h._json
            })
        }, "de_AutomatedEvaluationCustomMetricConfig"),
        rV8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return oV8((0, pB.awsExpectUnion)(G), Q)
            })
        }, "de_AutomatedEvaluationCustomMetrics"),
        oV8 = AA((A, Q) => {
            if (A.customMetricDefinition != null) return {
                customMetricDefinition: eV8(A.customMetricDefinition, Q)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_AutomatedEvaluationCustomMetricSource"),
        tV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                contentType: h.expectString,
                data: Q.base64Decoder,
                identifier: h.expectString
            })
        }, "de_ByteContentDoc"),
        eV8 = AA((A, Q) => {
            return (0, h.take)(A, {
                instructions: h.expectString,
                name: h.expectString,
                ratingScale: AA((B) => mK8(B, Q), "ratingScale")
            })
        }, "de_CustomMetricDefinition"),
        AK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                baseModelArn: h.expectString,
                baseModelName: h.expectString,
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                customizationType: h.expectString,
                modelArn: h.expectString,
                modelName: h.expectString,
                modelStatus: h.expectString,
                ownerAccountId: h.expectString
            })
        }, "de_CustomModelSummary"),
        QK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return AK8(G, Q)
            })
        }, "de_CustomModelSummaryList"),
        BK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                lastModifiedTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                status: h.expectString
            })
        }, "de_DataProcessingDetails"),
        GK8 = AA((A, Q) => {
            if (A.automated != null) return {
                automated: aV8(A.automated, Q)
            };
            if (A.human != null) return {
                human: (0, h._json)(A.human)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_EvaluationConfig"),
        ZK8 = AA((A, Q) => {
            if (A.models != null) return {
                models: (0, h._json)(A.models)
            };
            if (A.ragConfigs != null) return {
                ragConfigs: uK8(A.ragConfigs, Q)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_EvaluationInferenceConfig"),
        IK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return YK8(G, Q)
            })
        }, "de_EvaluationSummaries"),
        YK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                applicationType: h.expectString,
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                customMetricsEvaluatorModelIdentifiers: h._json,
                evaluationTaskTypes: h._json,
                evaluatorModelIdentifiers: h._json,
                inferenceConfigSummary: h._json,
                jobArn: h.expectString,
                jobName: h.expectString,
                jobType: h.expectString,
                modelIdentifiers: h._json,
                ragIdentifiers: h._json,
                status: h.expectString
            })
        }, "de_EvaluationSummary"),
        JK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                byteContent: AA((B) => tV8(B, Q), "byteContent"),
                s3Location: h._json,
                sourceType: h.expectString
            })
        }, "de_ExternalSource"),
        WK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return JK8(G, Q)
            })
        }, "de_ExternalSources"),
        XK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                additionalModelRequestFields: AA((B) => XP1(B, Q), "additionalModelRequestFields"),
                guardrailConfiguration: h._json,
                kbInferenceConfig: AA((B) => SyQ(B, Q), "kbInferenceConfig"),
                promptTemplate: h._json
            })
        }, "de_ExternalSourcesGenerationConfiguration"),
        FK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                generationConfiguration: AA((B) => XK8(B, Q), "generationConfiguration"),
                modelArn: h.expectString,
                sources: AA((B) => WK8(B, Q), "sources")
            })
        }, "de_ExternalSourcesRetrieveAndGenerateConfiguration"),
        gR = AA((A, Q) => {
            return (0, h.take)(A, {
                key: h.expectString,
                value: AA((B) => VK8(B, Q), "value")
            })
        }, "de_FilterAttribute"),
        VK8 = AA((A, Q) => {
            return A
        }, "de_FilterValue"),
        KK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                additionalModelRequestFields: AA((B) => XP1(B, Q), "additionalModelRequestFields"),
                guardrailConfiguration: h._json,
                kbInferenceConfig: AA((B) => SyQ(B, Q), "kbInferenceConfig"),
                promptTemplate: h._json
            })
        }, "de_GenerationConfiguration"),
        DK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                action: h.expectString,
                enabled: h.expectBoolean,
                threshold: h.limitedParseDouble,
                type: h.expectString
            })
        }, "de_GuardrailContextualGroundingFilter"),
        HK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return DK8(G, Q)
            })
        }, "de_GuardrailContextualGroundingFilters"),
        CK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                filters: AA((B) => HK8(B, Q), "filters")
            })
        }, "de_GuardrailContextualGroundingPolicy"),
        EK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return zK8(G, Q)
            })
        }, "de_GuardrailSummaries"),
        zK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                arn: h.expectString,
                createdAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "createdAt"),
                crossRegionDetails: h._json,
                description: h.expectString,
                id: h.expectString,
                name: h.expectString,
                status: h.expectString,
                updatedAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "updatedAt"),
                version: h.expectString
            })
        }, "de_GuardrailSummary"),
        UK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                instructSupported: h.expectBoolean,
                modelArchitecture: h.expectString,
                modelArn: h.expectString,
                modelName: h.expectString
            })
        }, "de_ImportedModelSummary"),
        $K8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return UK8(G, Q)
            })
        }, "de_ImportedModelSummaryList"),
        wK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return qK8(G, Q)
            })
        }, "de_InferenceProfileSummaries"),
        qK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                createdAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "createdAt"),
                description: h.expectString,
                inferenceProfileArn: h.expectString,
                inferenceProfileId: h.expectString,
                inferenceProfileName: h.expectString,
                models: h._json,
                status: h.expectString,
                type: h.expectString,
                updatedAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "updatedAt")
            })
        }, "de_InferenceProfileSummary"),
        SyQ = AA((A, Q) => {
            return (0, h.take)(A, {
                textInferenceConfig: AA((B) => iK8(B, Q), "textInferenceConfig")
            })
        }, "de_KbInferenceConfig"),
        NK8 = AA((A, Q) => {
            if (A.retrieveAndGenerateConfig != null) return {
                retrieveAndGenerateConfig: pK8(A.retrieveAndGenerateConfig, Q)
            };
            if (A.retrieveConfig != null) return {
                retrieveConfig: lK8(A.retrieveConfig, Q)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_KnowledgeBaseConfig"),
        _yQ = AA((A, Q) => {
            return (0, h.take)(A, {
                vectorSearchConfiguration: AA((B) => MK8(B, Q), "vectorSearchConfiguration")
            })
        }, "de_KnowledgeBaseRetrievalConfiguration"),
        LK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                generationConfiguration: AA((B) => KK8(B, Q), "generationConfiguration"),
                knowledgeBaseId: h.expectString,
                modelArn: h.expectString,
                orchestrationConfiguration: h._json,
                retrievalConfiguration: AA((B) => _yQ(B, Q), "retrievalConfiguration")
            })
        }, "de_KnowledgeBaseRetrieveAndGenerateConfiguration"),
        MK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                filter: AA((B) => kyQ((0, pB.awsExpectUnion)(B), Q), "filter"),
                implicitFilterConfiguration: h._json,
                numberOfResults: h.expectInt32,
                overrideSearchType: h.expectString,
                rerankingConfiguration: AA((B) => tK8(B, Q), "rerankingConfiguration")
            })
        }, "de_KnowledgeBaseVectorSearchConfiguration"),
        imA = AA((A, Q) => {
            return (0, h.take)(A, {
                createdAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "createdAt"),
                endpointArn: h.expectString,
                endpointConfig: AA((B) => (0, h._json)((0, pB.awsExpectUnion)(B)), "endpointConfig"),
                endpointStatus: h.expectString,
                endpointStatusMessage: h.expectString,
                modelSourceIdentifier: h.expectString,
                status: h.expectString,
                statusMessage: h.expectString,
                updatedAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "updatedAt")
            })
        }, "de_MarketplaceModelEndpoint"),
        OK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return RK8(G, Q)
            })
        }, "de_MarketplaceModelEndpointSummaries"),
        RK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                createdAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "createdAt"),
                endpointArn: h.expectString,
                modelSourceIdentifier: h.expectString,
                status: h.expectString,
                statusMessage: h.expectString,
                updatedAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "updatedAt")
            })
        }, "de_MarketplaceModelEndpointSummary"),
        TK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return PK8(G, Q)
            })
        }, "de_ModelCopyJobSummaries"),
        PK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
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
            })
        }, "de_ModelCopyJobSummary"),
        jK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return SK8(G, Q)
            })
        }, "de_ModelCustomizationJobSummaries"),
        SK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                baseModelArn: h.expectString,
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                customModelArn: h.expectString,
                customModelName: h.expectString,
                customizationType: h.expectString,
                endTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "endTime"),
                jobArn: h.expectString,
                jobName: h.expectString,
                lastModifiedTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                status: h.expectString,
                statusDetails: AA((B) => xyQ(B, Q), "statusDetails")
            })
        }, "de_ModelCustomizationJobSummary"),
        _K8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return kK8(G, Q)
            })
        }, "de_ModelImportJobSummaries"),
        kK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                endTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "endTime"),
                importedModelArn: h.expectString,
                importedModelName: h.expectString,
                jobArn: h.expectString,
                jobName: h.expectString,
                lastModifiedTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                status: h.expectString
            })
        }, "de_ModelImportJobSummary"),
        yK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return xK8(G, Q)
            })
        }, "de_ModelInvocationJobSummaries"),
        xK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                clientRequestToken: h.expectString,
                endTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "endTime"),
                inputDataConfig: AA((B) => (0, h._json)((0, pB.awsExpectUnion)(B)), "inputDataConfig"),
                jobArn: h.expectString,
                jobExpirationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "jobExpirationTime"),
                jobName: h.expectString,
                lastModifiedTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                message: h.expectString,
                modelId: h.expectString,
                outputDataConfig: AA((B) => (0, h._json)((0, pB.awsExpectUnion)(B)), "outputDataConfig"),
                roleArn: h.expectString,
                status: h.expectString,
                submitTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "submitTime"),
                timeoutDurationInHours: h.expectInt32,
                vpcConfig: h._json
            })
        }, "de_ModelInvocationJobSummary"),
        vK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return bK8(G, Q)
            })
        }, "de_PromptRouterSummaries"),
        bK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                createdAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "createdAt"),
                description: h.expectString,
                fallbackModel: h._json,
                models: h._json,
                promptRouterArn: h.expectString,
                promptRouterName: h.expectString,
                routingCriteria: AA((B) => yyQ(B, Q), "routingCriteria"),
                status: h.expectString,
                type: h.expectString,
                updatedAt: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "updatedAt")
            })
        }, "de_PromptRouterSummary"),
        fK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return hK8(G, Q)
            })
        }, "de_ProvisionedModelSummaries"),
        hK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                commitmentDuration: h.expectString,
                commitmentExpirationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "commitmentExpirationTime"),
                creationTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "creationTime"),
                desiredModelArn: h.expectString,
                desiredModelUnits: h.expectInt32,
                foundationModelArn: h.expectString,
                lastModifiedTime: AA((B) => (0, h.expectNonNull)((0, h.parseRfc3339DateTimeWithOffset)(B)), "lastModifiedTime"),
                modelArn: h.expectString,
                modelUnits: h.expectInt32,
                provisionedModelArn: h.expectString,
                provisionedModelName: h.expectString,
                status: h.expectString
            })
        }, "de_ProvisionedModelSummary"),
        gK8 = AA((A, Q) => {
            if (A.knowledgeBaseConfig != null) return {
                knowledgeBaseConfig: NK8((0, pB.awsExpectUnion)(A.knowledgeBaseConfig), Q)
            };
            if (A.precomputedRagSourceConfig != null) return {
                precomputedRagSourceConfig: (0, h._json)((0, pB.awsExpectUnion)(A.precomputedRagSourceConfig))
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_RAGConfig"),
        uK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return gK8((0, pB.awsExpectUnion)(G), Q)
            })
        }, "de_RagConfigs"),
        mK8 = AA((A, Q) => {
            return (A || []).filter((G) => G != null).map((G) => {
                return dK8(G, Q)
            })
        }, "de_RatingScale"),
        dK8 = AA((A, Q) => {
            return (0, h.take)(A, {
                definition: h.expectString,
                value: AA((B) => cK8((0, pB.awsExpectUnion)(B), Q), "value")
            })
        }, "de_RatingScaleItem"),
        cK8 = AA((A, Q) => {
            if ((0, h.limitedParseFloat32)(A.floatValue) !== void 0) return {
                floatValue: (0, h.limitedParseFloat32)(A.floatValue)
            };
            if ((0, h.expectString)(A.stringValue) !== void 0) return {
                stringValue: (0, h.expectString)(A.stringValue)
            };
            return {
                $unknown: Object.entries(A)[0]
            }
        }, "de_RatingScaleItemValue"),
        kyQ = AA((A, Q) => {
            if (A.andAll != null) return {
                andAll: x_Q(A.andAll, Q)
            };
            if (A.equals != null) return {
                equals: gR(A.equals, Q)
            };
            if (A.greaterThan != null) return {
                greaterThan: gR(A.greaterThan, Q)
            };
            if (A.greaterThanOrEquals != null) return {
                greaterThanOrEquals: gR(A.greaterThanOrEquals, Q)
            };
            if (A.in != null) return {
                in: gR(A.in, Q)
            };
            if (A.lessThan != null) return {
                lessThan: gR(A.lessThan, Q)
            };
            if (A.lessThanOrEquals != null) return {
                lessThanOrEquals: gR(A.lessThanOrEquals, Q)
            };
            if (A.listContains != null) return {
                listContains: gR(A.listContains, Q)
            };
            if (A.notEquals != null) return {
                notEquals: gR(A.notEquals, Q)
            };
            if (A.notIn != null) return {
                notIn: gR(A.notIn, Q)
            };
            if (A.orAll != null) return {
                orAll: x_Q(A.orAll, Q)
            };
            if (A.startsWith != null) return {
                startsWith: gR(A.startsWith, Q)
            };
            if (A.stringContains != null) return {
                stringContains: gR(A.stringContains, Q)
            };
            return {
                $unknown: Object.entries(A)[0]
            }