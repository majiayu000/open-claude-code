/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_019.js
 * 处理时间: 2025-12-09T03:41:36.545Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 19/61
 * Lines: 91210 - 92703 (1494 lines)
 * Original file: cli.js
 */

var vgA = moduleWrapper((pD7, sHQ) => {
    var {
        defineProperty: xgA,
        getOwnPropertyDescriptor: cs4,
        getOwnPropertyNames: ps4
    } = Object, ls4 = Object.prototype.hasOwnProperty, is4 = (A, Q) => xgA(A, "name", {
        value: Q,
        configurable: !0
    }), ns4 = (A, Q) => {
        for (var B in Q) xgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, as4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of ps4(Q))
                if (!ls4.call(A, Z) && Z !== B) xgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = cs4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ss4 = (A) => as4(xgA({}, "__esModule", {
        value: !0
    }), A), dHQ = {};
    ns4(dHQ, {
        ENV_ACCOUNT_ID: () => aHQ,
        ENV_CREDENTIAL_SCOPE: () => nHQ,
        ENV_EXPIRATION: () => iHQ,
        ENV_KEY: () => cHQ,
        ENV_SECRET: () => pHQ,
        ENV_SESSION: () => lHQ,
        fromEnv: () => ts4
    });
    sHQ.exports = ss4(dHQ);
    var rs4 = DL(),
        os4 = P2(),
        cHQ = "AWS_ACCESS_KEY_ID",
        pHQ = "AWS_SECRET_ACCESS_KEY",
        lHQ = "AWS_SESSION_TOKEN",
        iHQ = "AWS_CREDENTIAL_EXPIRATION",
        nHQ = "AWS_CREDENTIAL_SCOPE",
        aHQ = "AWS_ACCOUNT_ID",
        ts4 = is4((A) => async () => {
            A?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
            let Q = process.env[cHQ],
                B = process.env[pHQ],
                G = process.env[lHQ],
                Z = process.env[iHQ],
                I = process.env[nHQ],
                Y = process.env[aHQ];
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
                return (0, rs4.setCredentialFeature)(J, "CREDENTIALS_ENV_VARS", "g"), J
            }
            throw new os4.CredentialsProviderError("Unable to find environment variable credentials.", {
                logger: A?.logger
            })
        }, "fromEnv")
});
var tHQ = moduleWrapper((rHQ) => {
    Object.defineProperty(rHQ, "__esModule", {
        value: !0
    });
    rHQ.fromEnv = void 0;
    var es4 = vgA(),
        Ar4 = (A) => (0, es4.fromEnv)(A);
    rHQ.fromEnv = Ar4
});
var hgA = moduleWrapper((iD7, GCQ) => {
    var {
        defineProperty: fgA,
        getOwnPropertyDescriptor: Qr4,
        getOwnPropertyNames: Br4
    } = Object, Gr4 = Object.prototype.hasOwnProperty, bgA = (A, Q) => fgA(A, "name", {
        value: Q,
        configurable: !0
    }), Zr4 = (A, Q) => {
        for (var B in Q) fgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Ir4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Br4(Q))
                if (!Gr4.call(A, Z) && Z !== B) fgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Qr4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Yr4 = (A) => Ir4(fgA({}, "__esModule", {
        value: !0
    }), A), eHQ = {};
    Zr4(eHQ, {
        getHostHeaderPlugin: () => Wr4,
        hostHeaderMiddleware: () => QCQ,
        hostHeaderMiddlewareOptions: () => BCQ,
        resolveHostHeaderConfig: () => ACQ
    });
    GCQ.exports = Yr4(eHQ);
    var Jr4 = Cw();

    function ACQ(A) {
        return A
    }
    bgA(ACQ, "resolveHostHeaderConfig");
    var QCQ = bgA((A) => (Q) => async (B) => {
            if (!Jr4.HttpRequest.isInstance(B.request)) return Q(B);
            let {
                request: G
            } = B, {
                handlerProtocol: Z = ""
            } = A.requestHandler.metadata || {};
            if (Z.indexOf("h2") >= 0 && !G.headers[":authority"]) delete G.headers.host, G.headers[":authority"] = G.hostname + (G.port ? ":" + G.port : "");
            else if (!G.headers.host) {
                let I = G.hostname;
                if (G.port != null) I += `:TextComponent{G.port}`;
                G.headers.host = I
            }
            return Q(B)
        }, "hostHeaderMiddleware"),
        BCQ = {
            name: "hostHeaderMiddleware",
            step: "build",
            priority: "low",
            tags: ["HOST"],
            override: !0
        },
        Wr4 = bgA((A) => ({
            applyToStack: bgA((Q) => {
                Q.add(QCQ(A), BCQ)
            }, "applyToStack")
        }), "getHostHeaderPlugin")
});
var ugA = moduleWrapper((nD7, JCQ) => {
    var {
        defineProperty: ggA,
        getOwnPropertyDescriptor: Xr4,
        getOwnPropertyNames: Fr4
    } = Object, Vr4 = Object.prototype.hasOwnProperty, kL1 = (A, Q) => ggA(A, "name", {
        value: Q,
        configurable: !0
    }), Kr4 = (A, Q) => {
        for (var B in Q) ggA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Dr4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Fr4(Q))
                if (!Vr4.call(A, Z) && Z !== B) ggA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Xr4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Hr4 = (A) => Dr4(ggA({}, "__esModule", {
        value: !0
    }), A), ZCQ = {};
    Kr4(ZCQ, {
        getLoggerPlugin: () => Cr4,
        loggerMiddleware: () => ICQ,
        loggerMiddlewareOptions: () => YCQ
    });
    JCQ.exports = Hr4(ZCQ);
    var ICQ = kL1(() => (A, Q) => async (B) => {
            try {
                let G = await A(B),
                    {
                        clientName: Z,
                        commandName: I,
                        logger: Y,
                        dynamoDbDocumentClientOptions: J = {}
                    } = Q,
                    {
                        overrideInputFilterSensitiveLog: W,
                        overrideOutputFilterSensitiveLog: X
                    } = J,
                    F = W ?? Q.inputFilterSensitiveLog,
                    V = X ?? Q.outputFilterSensitiveLog,
                    {
                        $metadata: K,
                        ...D
                    } = G.output;
                return Y?.info?.({
                    clientName: Z,
                    commandName: I,
                    input: F(B.input),
                    output: V(D),
                    metadata: K
                }), G
            } catch (G) {
                let {
                    clientName: Z,
                    commandName: I,
                    logger: Y,
                    dynamoDbDocumentClientOptions: J = {}
                } = Q, {
                    overrideInputFilterSensitiveLog: W
                } = J, X = W ?? Q.inputFilterSensitiveLog;
                throw Y?.error?.({
                    clientName: Z,
                    commandName: I,
                    input: X(B.input),
                    error: G,
                    metadata: G.$metadata
                }), G
            }
        }, "loggerMiddleware"),
        YCQ = {
            name: "loggerMiddleware",
            tags: ["LOGGER"],
            step: "initialize",
            override: !0
        },
        Cr4 = kL1((A) => ({
            applyToStack: kL1((Q) => {
                Q.add(ICQ(), YCQ)
            }, "applyToStack")
        }), "getLoggerPlugin")
});
var cgA = moduleWrapper((aD7, VCQ) => {
    var {
        defineProperty: dgA,
        getOwnPropertyDescriptor: Er4,
        getOwnPropertyNames: zr4
    } = Object, Ur4 = Object.prototype.hasOwnProperty, mgA = (A, Q) => dgA(A, "name", {
        value: Q,
        configurable: !0
    }), $r4 = (A, Q) => {
        for (var B in Q) dgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, wr4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of zr4(Q))
                if (!Ur4.call(A, Z) && Z !== B) dgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Er4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, qr4 = (A) => wr4(dgA({}, "__esModule", {
        value: !0
    }), A), WCQ = {};
    $r4(WCQ, {
        addRecursionDetectionMiddlewareOptions: () => FCQ,
        getRecursionDetectionPlugin: () => Or4,
        recursionDetectionMiddleware: () => XCQ
    });
    VCQ.exports = qr4(WCQ);
    var Nr4 = Cw(),
        yL1 = "X-Amzn-Trace-Id",
        Lr4 = "AWS_LAMBDA_FUNCTION_NAME",
        Mr4 = "_X_AMZN_TRACE_ID",
        XCQ = mgA((A) => (Q) => async (B) => {
            let {
                request: G
            } = B;
            if (!Nr4.HttpRequest.isInstance(G) || A.runtime !== "node") return Q(B);
            let Z = Object.keys(G.headers ?? {}).find((W) => W.toLowerCase() === yL1.toLowerCase()) ?? yL1;
            if (G.headers.hasOwnProperty(Z)) return Q(B);
            let I = process.env[Lr4],
                Y = process.env[Mr4],
                J = mgA((W) => typeof W === "string" && W.length > 0, "nonEmptyString");
            if (J(I) && J(Y)) G.headers[yL1] = Y;
            return Q({
                ...B,
                request: G
            })
        }, "recursionDetectionMiddleware"),
        FCQ = {
            step: "build",
            tags: ["RECURSION_DETECTION"],
            name: "recursionDetectionMiddleware",
            override: !0,
            priority: "low"
        },
        Or4 = mgA((A) => ({
            applyToStack: mgA((Q) => {
                Q.add(XCQ(A), FCQ)
            }, "applyToStack")
        }), "getRecursionDetectionPlugin")
});
var JHA = moduleWrapper((sD7, qCQ) => {
    var {
        defineProperty: pgA,
        getOwnPropertyDescriptor: Rr4,
        getOwnPropertyNames: Tr4
    } = Object, Pr4 = Object.prototype.hasOwnProperty, _8A = (A, Q) => pgA(A, "name", {
        value: Q,
        configurable: !0
    }), jr4 = (A, Q) => {
        for (var B in Q) pgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Sr4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Tr4(Q))
                if (!Pr4.call(A, Z) && Z !== B) pgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Rr4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, _r4 = (A) => Sr4(pgA({}, "__esModule", {
        value: !0
    }), A), DCQ = {};
    jr4(DCQ, {
        ConditionObject: () => LZ.ConditionObject,
        DeprecatedObject: () => LZ.DeprecatedObject,
        EndpointError: () => LZ.EndpointError,
        EndpointObject: () => LZ.EndpointObject,
        EndpointObjectHeaders: () => LZ.EndpointObjectHeaders,
        EndpointObjectProperties: () => LZ.EndpointObjectProperties,
        EndpointParams: () => LZ.EndpointParams,
        EndpointResolverOptions: () => LZ.EndpointResolverOptions,
        EndpointRuleObject: () => LZ.EndpointRuleObject,
        ErrorRuleObject: () => LZ.ErrorRuleObject,
        EvaluateOptions: () => LZ.EvaluateOptions,
        Expression: () => LZ.Expression,
        FunctionArgv: () => LZ.FunctionArgv,
        FunctionObject: () => LZ.FunctionObject,
        FunctionReturn: () => LZ.FunctionReturn,
        ParameterObject: () => LZ.ParameterObject,
        ReferenceObject: () => LZ.ReferenceObject,
        ReferenceRecord: () => LZ.ReferenceRecord,
        RuleSetObject: () => LZ.RuleSetObject,
        RuleSetRules: () => LZ.RuleSetRules,
        TreeRuleObject: () => LZ.TreeRuleObject,
        awsEndpointFunctions: () => wCQ,
        getUserAgentPrefix: () => vr4,
        isIpAddress: () => LZ.isIpAddress,
        partition: () => UCQ,
        resolveEndpoint: () => LZ.resolveEndpoint,
        setPartitionInfo: () => $CQ,
        useDefaultPartitionInfo: () => xr4
    });
    qCQ.exports = _r4(DCQ);
    var LZ = II(),
        HCQ = _8A((A, Q = !1) => {
            if (Q) {
                for (let B of A.split("."))
                    if (!HCQ(B)) return !1;
                return !0
            }
            if (!(0, LZ.isValidHostLabel)(A)) return !1;
            if (A.length < 3 || A.length > 63) return !1;
            if (A !== A.toLowerCase()) return !1;
            if ((0, LZ.isIpAddress)(A)) return !1;
            return !0
        }, "isVirtualHostableS3Bucket"),
        KCQ = ":",
        kr4 = "/",
        yr4 = _8A((A) => {
            let Q = A.split(KCQ);
            if (Q.length < 6) return null;
            let [B, G, Z, I, Y, ...J] = Q;
            if (B !== "arn" || G === "" || Z === "" || J.join(KCQ) === "") return null;
            let W = J.map((X) => X.split(kr4)).flat();
            return {
                partition: G,
                service: Z,
                region: I,
                accountId: Y,
                resourceId: W
            }
        }, "parseArn"),
        CCQ = {
            partitions: [{
                id: "aws",
                outputs: {
                    dnsSuffix: "amazonaws.com",
                    dualStackDnsSuffix: "api.aws",
                    implicitGlobalRegion: "us-east-1",
                    name: "aws",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "af-south-1": {
                        description: "Africa (Cape Town)"
                    },
                    "ap-east-1": {
                        description: "Asia Pacific (Hong Kong)"
                    },
                    "ap-east-2": {
                        description: "Asia Pacific (Taipei)"
                    },
                    "ap-northeast-1": {
                        description: "Asia Pacific (Tokyo)"
                    },
                    "ap-northeast-2": {
                        description: "Asia Pacific (Seoul)"
                    },
                    "ap-northeast-3": {
                        description: "Asia Pacific (Osaka)"
                    },
                    "ap-south-1": {
                        description: "Asia Pacific (Mumbai)"
                    },
                    "ap-south-2": {
                        description: "Asia Pacific (Hyderabad)"
                    },
                    "ap-southeast-1": {
                        description: "Asia Pacific (Singapore)"
                    },
                    "ap-southeast-2": {
                        description: "Asia Pacific (Sydney)"
                    },
                    "ap-southeast-3": {
                        description: "Asia Pacific (Jakarta)"
                    },
                    "ap-southeast-4": {
                        description: "Asia Pacific (Melbourne)"
                    },
                    "ap-southeast-5": {
                        description: "Asia Pacific (Malaysia)"
                    },
                    "ap-southeast-7": {
                        description: "Asia Pacific (Thailand)"
                    },
                    "aws-global": {
                        description: "AWS Standard global region"
                    },
                    "ca-central-1": {
                        description: "Canada (Central)"
                    },
                    "ca-west-1": {
                        description: "Canada West (Calgary)"
                    },
                    "eu-central-1": {
                        description: "Europe (Frankfurt)"
                    },
                    "eu-central-2": {
                        description: "Europe (Zurich)"
                    },
                    "eu-north-1": {
                        description: "Europe (Stockholm)"
                    },
                    "eu-south-1": {
                        description: "Europe (Milan)"
                    },
                    "eu-south-2": {
                        description: "Europe (Spain)"
                    },
                    "eu-west-1": {
                        description: "Europe (Ireland)"
                    },
                    "eu-west-2": {
                        description: "Europe (London)"
                    },
                    "eu-west-3": {
                        description: "Europe (Paris)"
                    },
                    "il-central-1": {
                        description: "Israel (Tel Aviv)"
                    },
                    "me-central-1": {
                        description: "Middle East (UAE)"
                    },
                    "me-south-1": {
                        description: "Middle East (Bahrain)"
                    },
                    "mx-central-1": {
                        description: "Mexico (Central)"
                    },
                    "sa-east-1": {
                        description: "South America (Sao Paulo)"
                    },
                    "us-east-1": {
                        description: "US East (N. Virginia)"
                    },
                    "us-east-2": {
                        description: "US East (Ohio)"
                    },
                    "us-west-1": {
                        description: "US West (N. California)"
                    },
                    "us-west-2": {
                        description: "US West (Oregon)"
                    }
                }
            }, {
                id: "aws-cn",
                outputs: {
                    dnsSuffix: "amazonaws.com.cn",
                    dualStackDnsSuffix: "api.amazonwebservices.com.cn",
                    implicitGlobalRegion: "cn-northwest-1",
                    name: "aws-cn",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^cn\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-cn-global": {
                        description: "AWS China global region"
                    },
                    "cn-north-1": {
                        description: "China (Beijing)"
                    },
                    "cn-northwest-1": {
                        description: "China (Ningxia)"
                    }
                }
            }, {
                id: "aws-us-gov",
                outputs: {
                    dnsSuffix: "amazonaws.com",
                    dualStackDnsSuffix: "api.aws",
                    implicitGlobalRegion: "us-gov-west-1",
                    name: "aws-us-gov",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-gov\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-us-gov-global": {
                        description: "AWS GovCloud (US) global region"
                    },
                    "us-gov-east-1": {
                        description: "AWS GovCloud (US-East)"
                    },
                    "us-gov-west-1": {
                        description: "AWS GovCloud (US-West)"
                    }
                }
            }, {
                id: "aws-iso",
                outputs: {
                    dnsSuffix: "c2s.ic.gov",
                    dualStackDnsSuffix: "c2s.ic.gov",
                    implicitGlobalRegion: "us-iso-east-1",
                    name: "aws-iso",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-iso\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-iso-global": {
                        description: "AWS ISO (US) global region"
                    },
                    "us-iso-east-1": {
                        description: "US ISO East"
                    },
                    "us-iso-west-1": {
                        description: "US ISO WEST"
                    }
                }
            }, {
                id: "aws-iso-b",
                outputs: {
                    dnsSuffix: "sc2s.sgov.gov",
                    dualStackDnsSuffix: "sc2s.sgov.gov",
                    implicitGlobalRegion: "us-isob-east-1",
                    name: "aws-iso-b",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-isob\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-iso-b-global": {
                        description: "AWS ISOB (US) global region"
                    },
                    "us-isob-east-1": {
                        description: "US ISOB East (Ohio)"
                    }
                }
            }, {
                id: "aws-iso-e",
                outputs: {
                    dnsSuffix: "cloud.adc-e.uk",
                    dualStackDnsSuffix: "cloud.adc-e.uk",
                    implicitGlobalRegion: "eu-isoe-west-1",
                    name: "aws-iso-e",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-iso-e-global": {
                        description: "AWS ISOE (Europe) global region"
                    },
                    "eu-isoe-west-1": {
                        description: "EU ISOE West"
                    }
                }
            }, {
                id: "aws-iso-f",
                outputs: {
                    dnsSuffix: "csp.hci.ic.gov",
                    dualStackDnsSuffix: "csp.hci.ic.gov",
                    implicitGlobalRegion: "us-isof-south-1",
                    name: "aws-iso-f",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-isof\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-iso-f-global": {
                        description: "AWS ISOF global region"
                    },
                    "us-isof-east-1": {
                        description: "US ISOF EAST"
                    },
                    "us-isof-south-1": {
                        description: "US ISOF SOUTH"
                    }
                }
            }, {
                id: "aws-eusc",
                outputs: {
                    dnsSuffix: "amazonaws.eu",
                    dualStackDnsSuffix: "amazonaws.eu",
                    implicitGlobalRegion: "eusc-de-east-1",
                    name: "aws-eusc",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "eusc-de-east-1": {
                        description: "EU (Germany)"
                    }
                }
            }],
            version: "1.1"
        },
        ECQ = CCQ,
        zCQ = "",
        UCQ = _8A((A) => {
            let {
                partitions: Q
            } = ECQ;
            for (let G of Q) {
                let {
                    regions: Z,
                    outputs: I
                } = G;
                for (let [Y, J] of Object.entries(Z))
                    if (Y === A) return {
                        ...I,
                        ...J
                    }
            }
            for (let G of Q) {
                let {
                    regionRegex: Z,
                    outputs: I
                } = G;
                if (new RegExp(Z).test(A)) return {
                    ...I
                }
            }
            let B = Q.find((G) => G.id === "aws");
            if (!B) throw Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
            return {
                ...B.outputs
            }
        }, "partition"),
        $CQ = _8A((A, Q = "") => {
            ECQ = A, zCQ = Q
        }, "setPartitionInfo"),
        xr4 = _8A(() => {
            $CQ(CCQ, "")
        }, "useDefaultPartitionInfo"),
        vr4 = _8A(() => zCQ, "getUserAgentPrefix"),
        wCQ = {
            isVirtualHostableS3Bucket: HCQ,
            parseArn: yr4,
            partition: UCQ
        };
    LZ.customEndpointFunctions.aws = wCQ
});
var MCQ = moduleWrapper((rD7, LCQ) => {
    var {
        defineProperty: lgA,
        getOwnPropertyDescriptor: br4,
        getOwnPropertyNames: fr4
    } = Object, hr4 = Object.prototype.hasOwnProperty, gr4 = (A, Q) => lgA(A, "name", {
        value: Q,
        configurable: !0
    }), ur4 = (A, Q) => {
        for (var B in Q) lgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, mr4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of fr4(Q))
                if (!hr4.call(A, Z) && Z !== B) lgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = br4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, dr4 = (A) => mr4(lgA({}, "__esModule", {
        value: !0
    }), A), NCQ = {};
    ur4(NCQ, {
        isArrayBuffer: () => cr4
    });
    LCQ.exports = dr4(NCQ);
    var cr4 = gr4((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var PCQ = moduleWrapper((oD7, TCQ) => {
    var {
        defineProperty: igA,
        getOwnPropertyDescriptor: pr4,
        getOwnPropertyNames: lr4
    } = Object, ir4 = Object.prototype.hasOwnProperty, xL1 = (A, Q) => igA(A, "name", {
        value: Q,
        configurable: !0
    }), nr4 = (A, Q) => {
        for (var B in Q) igA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ar4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of lr4(Q))
                if (!ir4.call(A, Z) && Z !== B) igA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = pr4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, sr4 = (A) => ar4(igA({}, "__esModule", {
        value: !0
    }), A), OCQ = {};
    nr4(OCQ, {
        escapeUri: () => RCQ,
        escapeUriPath: () => or4
    });
    TCQ.exports = sr4(OCQ);
    var RCQ = xL1((A) => encodeURIComponent(A).replace(/[!'()*]/g, rr4), "escapeUri"),
        rr4 = xL1((A) => `%TextComponent{A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        or4 = xL1((A) => A.split("/").map(RCQ).join("/"), "escapeUriPath")
});
var BEQ = moduleWrapper((tD7, QEQ) => {
    var {
        defineProperty: egA,
        getOwnPropertyDescriptor: tr4,
        getOwnPropertyNames: er4
    } = Object, Ao4 = Object.prototype.hasOwnProperty, AD = (A, Q) => egA(A, "name", {
        value: Q,
        configurable: !0
    }), Qo4 = (A, Q) => {
        for (var B in Q) egA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Bo4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of er4(Q))
                if (!Ao4.call(A, Z) && Z !== B) egA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = tr4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Go4 = (A) => Bo4(egA({}, "__esModule", {
        value: !0
    }), A), yCQ = {};
    Qo4(yCQ, {
        ALGORITHM_IDENTIFIER: () => ngA,
        ALGORITHM_IDENTIFIER_V4A: () => Jo4,
        ALGORITHM_QUERY_PARAM: () => xCQ,
        ALWAYS_UNSIGNABLE_HEADERS: () => dCQ,
        AMZ_DATE_HEADER: () => dL1,
        AMZ_DATE_QUERY_PARAM: () => hL1,
        AUTH_HEADER: () => mL1,
        CREDENTIAL_QUERY_PARAM: () => vCQ,
        DATE_HEADER: () => hCQ,
        EVENT_ALGORITHM_IDENTIFIER: () => lCQ,
        EXPIRES_QUERY_PARAM: () => fCQ,
        GENERATED_HEADERS: () => gCQ,
        HOST_HEADER: () => Io4,
        KEY_TYPE_IDENTIFIER: () => cL1,
        MAX_CACHE_SIZE: () => nCQ,
        MAX_PRESIGNED_TTL: () => aCQ,
        PROXY_HEADER_PATTERN: () => cCQ,
        REGION_SET_PARAM: () => Zo4,
        SEC_HEADER_PATTERN: () => pCQ,
        SHA256_HEADER: () => tgA,
        SIGNATURE_HEADER: () => uCQ,
        SIGNATURE_QUERY_PARAM: () => gL1,
        SIGNED_HEADERS_QUERY_PARAM: () => bCQ,
        SignatureV4: () => Uo4,
        SignatureV4Base: () => AEQ,
        TOKEN_HEADER: () => mCQ,
        TOKEN_QUERY_PARAM: () => uL1,
        UNSIGNABLE_PATTERNS: () => Yo4,
        UNSIGNED_PAYLOAD: () => iCQ,
        clearCredentialCache: () => Xo4,
        createScope: () => sgA,
        getCanonicalHeaders: () => vL1,
        getCanonicalQuery: () => eCQ,
        getPayloadHash: () => rgA,
        getSigningKey: () => sCQ,
        hasHeader: () => rCQ,
        moveHeadersToQuery: () => tCQ,
        prepareRequest: () => fL1,
        signatureV4aContainer: () => $o4
    });
    QEQ.exports = Go4(yCQ);
    var jCQ = L2(),
        xCQ = "X-Amz-Algorithm",
        vCQ = "X-Amz-Credential",
        hL1 = "X-Amz-Date",
        bCQ = "X-Amz-SignedHeaders",
        fCQ = "X-Amz-Expires",
        gL1 = "X-Amz-Signature",
        uL1 = "X-Amz-Security-Token",
        Zo4 = "X-Amz-Region-Set",
        mL1 = "authorization",
        dL1 = hL1.toLowerCase(),
        hCQ = "date",
        gCQ = [mL1, dL1, hCQ],
        uCQ = gL1.toLowerCase(),
        tgA = "x-amz-content-sha256",
        mCQ = uL1.toLowerCase(),
        Io4 = "host",
        dCQ = {
            authorization: !0,
            "cache-control": !0,
            connection: !0,
            expect: !0,
            from: !0,
            "keep-alive": !0,
            "max-forwards": !0,
            pragma: !0,
            referer: !0,
            te: !0,
            trailer: !0,
            "transfer-encoding": !0,
            upgrade: !0,
            "user-agent": !0,
            "x-amzn-trace-id": !0
        },
        cCQ = /^proxy-/,
        pCQ = /^sec-/,
        Yo4 = [/^proxy-/i, /^sec-/i],
        ngA = "AWS4-HMAC-SHA256",
        Jo4 = "AWS4-ECDSA-P256-SHA256",
        lCQ = "AWS4-HMAC-SHA256-PAYLOAD",
        iCQ = "UNSIGNED-PAYLOAD",
        nCQ = 50,
        cL1 = "aws4_request",
        aCQ = 604800,
        Ed = mm(),
        Wo4 = L2(),
        k8A = {},
        agA = [],
        sgA = AD((A, Q, B) => `TextComponent{A}/TextComponent{Q}/TextComponent{B}/TextComponent{cL1}`, "createScope"),
        sCQ = AD(async (A, Q, B, G, Z) => {
            let I = await SCQ(A, Q.secretAccessKey, Q.accessKeyId),
                Y = `TextComponent{B}:TextComponent{G}:TextComponent{Z}:TextComponent{(0,Ed.toHex)(I)}:TextComponent{Q.sessionToken}`;
            if (Y in k8A) return k8A[Y];
            agA.push(Y);
            while (agA.length > nCQ) delete k8A[agA.shift()];
            let J = `AWS4${Q.secretAccessKey}`;
            for (let W of [B, G, Z, cL1]) J = await SCQ(A, J, W);
            return k8A[Y] = J
        }, "getSigningKey"),
        Xo4 = AD(() => {
            agA.length = 0, Object.keys(k8A).forEach((A) => {
                delete k8A[A]
            })
        }, "clearCredentialCache"),
        SCQ = AD((A, Q, B) => {
            let G = new A(Q);
            return G.update((0, Wo4.toUint8Array)(B)), G.digest()
        }, "hmac"),
        vL1 = AD(({
            headers: A
        }, Q, B) => {
            let G = {};
            for (let Z of Object.keys(A).sort()) {
                if (A[Z] == null) continue;
                let I = Z.toLowerCase();
                if (I in dCQ || Q?.has(I) || cCQ.test(I) || pCQ.test(I)) {
                    if (!B || B && !B.has(I)) continue
                }
                G[I] = A[Z].trim().replace(/\s+/g, " ")
            }
            return G
        }, "getCanonicalHeaders"),
        Fo4 = MCQ(),
        Vo4 = L2(),
        rgA = AD(async ({
            headers: A,
            body: Q
        }, B) => {
            for (let G of Object.keys(A))
                if (G.toLowerCase() === tgA) return A[G];
            if (Q == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
            else if (typeof Q === "string" || ArrayBuffer.isView(Q) || (0, Fo4.isArrayBuffer)(Q)) {
                let G = new B;
                return G.update((0, Vo4.toUint8Array)(Q)), (0, Ed.toHex)(await G.digest())
            }
            return iCQ
        }, "getPayloadHash"),
        _CQ = L2(),
        Ko4 = class {
            static {
                AD(this, "HeaderFormatter")
            }
            format(A) {
                let Q = [];
                for (let Z of Object.keys(A)) {
                    let I = (0, _CQ.fromUtf8)(Z);
                    Q.push(Uint8Array.from([I.byteLength]), I, this.formatHeaderValue(A[Z]))
                }
                let B = new Uint8Array(Q.reduce((Z, I) => Z + I.byteLength, 0)),
                    G = 0;
                for (let Z of Q) B.set(Z, G), G += Z.byteLength;
                return B
            }
            formatHeaderValue(A) {
                switch (A.type) {
                    case "boolean":
                        return Uint8Array.from([A.value ? 0 : 1]);
                    case "byte":
                        return Uint8Array.from([2, A.value]);
                    case "short":
                        let Q = new DataView(new ArrayBuffer(3));
                        return Q.setUint8(0, 3), Q.setInt16(1, A.value, !1), new Uint8Array(Q.buffer);
                    case "integer":
                        let B = new DataView(new ArrayBuffer(5));
                        return B.setUint8(0, 4), B.setInt32(1, A.value, !1), new Uint8Array(B.buffer);
                    case "long":
                        let G = new Uint8Array(9);
                        return G[0] = 5, G.set(A.value.bytes, 1), G;
                    case "binary":
                        let Z = new DataView(new ArrayBuffer(3 + A.value.byteLength));
                        Z.setUint8(0, 6), Z.setUint16(1, A.value.byteLength, !1);
                        let I = new Uint8Array(Z.buffer);
                        return I.set(A.value, 3), I;
                    case "string":
                        let Y = (0, _CQ.fromUtf8)(A.value),
                            J = new DataView(new ArrayBuffer(3 + Y.byteLength));
                        J.setUint8(0, 7), J.setUint16(1, Y.byteLength, !1);
                        let W = new Uint8Array(J.buffer);
                        return W.set(Y, 3), W;
                    case "timestamp":
                        let X = new Uint8Array(9);
                        return X[0] = 8, X.set(Ho4.fromNumber(A.value.valueOf()).bytes, 1), X;
                    case "uuid":
                        if (!Do4.test(A.value)) throw Error(`Invalid UUID received: TextComponent{A.value}`);
                        let F = new Uint8Array(17);
                        return F[0] = 9, F.set((0, Ed.fromHex)(A.value.replace(/\-/g, "")), 1), F
                }
            }
        },
        Do4 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}TextComponent/,
        Ho4 = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static {
                AD(this, "Int64")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`TextComponent{Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) bL1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) bL1(Q);
                return parseInt((0, Ed.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };

    function bL1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    AD(bL1, "negate");
    var rCQ = AD((A, Q) => {
            A = A.toLowerCase();
            for (let B of Object.keys(Q))
                if (A === B.toLowerCase()) return !0;
            return !1
        }, "hasHeader"),
        oCQ = Cw(),
        tCQ = AD((A, Q = {}) => {
            let {
                headers: B,
                query: G = {}
            } = oCQ.HttpRequest.clone(A);
            for (let Z of Object.keys(B)) {
                let I = Z.toLowerCase();
                if (I.slice(0, 6) === "x-amz-" && !Q.unhoistableHeaders?.has(I) || Q.hoistableHeaders?.has(I)) G[Z] = B[Z], delete B[Z]
            }
            return {
                ...A,
                headers: B,
                query: G
            }
        }, "moveHeadersToQuery"),
        fL1 = AD((A) => {
            A = oCQ.HttpRequest.clone(A);
            for (let Q of Object.keys(A.headers))
                if (gCQ.indexOf(Q.toLowerCase()) > -1) delete A.headers[Q];
            return A
        }, "prepareRequest"),
        kCQ = K7(),
        Co4 = L2(),
        ogA = PCQ(),
        eCQ = AD(({
            query: A = {}
        }) => {
            let Q = [],
                B = {};
            for (let G of Object.keys(A)) {
                if (G.toLowerCase() === uCQ) continue;
                let Z = (0, ogA.escapeUri)(G);
                Q.push(Z);
                let I = A[G];
                if (typeof I === "string") B[Z] = `TextComponent{Z}=TextComponent{(0,ogA.escapeUri)(I)}`;
                else if (Array.isArray(I)) B[Z] = I.slice(0).reduce((Y, J) => Y.concat([`TextComponent{Z}=TextComponent{(0,ogA.escapeUri)(J)}`]), []).sort().join("&")
            }
            return Q.sort().map((G) => B[G]).filter((G) => G).join("&")
        }, "getCanonicalQuery"),
        Eo4 = AD((A) => zo4(A).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
        zo4 = AD((A) => {
            if (typeof A === "number") return new Date(A * 1000);
            if (typeof A === "string") {
                if (Number(A)) return new Date(Number(A) * 1000);
                return new Date(A)
            }
            return A
        }, "toDate"),
        AEQ = class {
            static {
                AD(this, "SignatureV4Base")
            }
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                this.service = G, this.sha256 = Z, this.uriEscapePath = I, this.applyChecksum = typeof A === "boolean" ? A : !0, this.regionProvider = (0, kCQ.normalizeProvider)(B), this.credentialProvider = (0, kCQ.normalizeProvider)(Q)
            }
            createCanonicalRequest(A, Q, B) {
                let G = Object.keys(Q).sort();
                return `TextComponent{A.method}
TextComponent{this.getCanonicalPath(A)}
TextComponent{eCQ(A)}
TextComponent{G.map((Z)=>`TextComponent{Z}:TextComponent{Q[Z]}`).join(`
`)}

TextComponent{G.join(";")}
TextComponent{B}`
            }
            async createStringToSign(A, Q, B, G) {
                let Z = new this.sha256;
                Z.update((0, Co4.toUint8Array)(B));
                let I = await Z.digest();
                return `TextComponent{G}
TextComponent{A}
TextComponent{Q}
TextComponent{(0,Ed.toHex)(I)}`
            }
            getCanonicalPath({
                path: A
            }) {
                if (this.uriEscapePath) {
                    let Q = [];
                    for (let Z of A.split("/")) {
                        if (Z?.length === 0) continue;
                        if (Z === ".") continue;
                        if (Z === "..") Q.pop();
                        else Q.push(Z)
                    }
                    let B = `TextComponent{A?.startsWith("/")?"/":""}TextComponent{Q.join("/")}TextComponent{Q.length>0&&A?.endsWith("/")?"/":""}`;
                    return (0, ogA.escapeUri)(B).replace(/%2F/g, "/")
                }
                return A
            }
            validateResolvedCredentials(A) {
                if (typeof A !== "object" || typeof A.accessKeyId !== "string" || typeof A.secretAccessKey !== "string") throw Error("Resolved credential object is not valid")
            }
            formatDate(A) {
                let Q = Eo4(A).replace(/[\-:]/g, "");
                return {
                    longDate: Q,
                    shortDate: Q.slice(0, 8)
                }
            }
            getCanonicalHeaderList(A) {
                return Object.keys(A).sort().join(";")
            }
        },
        Uo4 = class extends AEQ {
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                super({
                    applyChecksum: A,
                    credentials: Q,
                    region: B,
                    service: G,
                    sha256: Z,
                    uriEscapePath: I
                });
                this.headerFormatter = new Ko4
            }
            static {
                AD(this, "SignatureV4")
            }
            async presign(A, Q = {}) {
                let {
                    signingDate: B = new Date,
                    expiresIn: G = 3600,
                    unsignableHeaders: Z,
                    unhoistableHeaders: I,
                    signableHeaders: Y,
                    hoistableHeaders: J,
                    signingRegion: W,
                    signingService: X
                } = Q, F = await this.credentialProvider();
                this.validateResolvedCredentials(F);
                let V = W ?? await this.regionProvider(),
                    {
                        longDate: K,
                        shortDate: D
                    } = this.formatDate(B);
                if (G > aCQ) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                let H = sgA(D, V, X ?? this.service),
                    C = tCQ(fL1(A), {
                        unhoistableHeaders: I,
                        hoistableHeaders: J
                    });
                if (F.sessionToken) C.query[uL1] = F.sessionToken;
                C.query[xCQ] = ngA, C.query[vCQ] = `TextComponent{F.accessKeyId}/TextComponent{H}`, C.query[hL1] = K, C.query[fCQ] = G.toString(10);
                let E = vL1(C, Z, Y);
                return C.query[bCQ] = this.getCanonicalHeaderList(E), C.query[gL1] = await this.getSignature(K, H, this.getSigningKey(F, V, D, X), this.createCanonicalRequest(C, E, await rgA(A, this.sha256))), C
            }
            async sign(A, Q) {
                if (typeof A === "string") return this.signString(A, Q);
                else if (A.headers && A.payload) return this.signEvent(A, Q);
                else if (A.message) return this.signMessage(A, Q);
                else return this.signRequest(A, Q)
            }
            async signEvent({
                headers: A,
                payload: Q
            }, {
                signingDate: B = new Date,
                priorSignature: G,
                signingRegion: Z,
                signingService: I
            }) {
                let Y = Z ?? await this.regionProvider(),
                    {
                        shortDate: J,
                        longDate: W
                    } = this.formatDate(B),
                    X = sgA(J, Y, I ?? this.service),
                    F = await rgA({
                        headers: {},
                        body: Q
                    }, this.sha256),
                    V = new this.sha256;
                V.update(A);
                let K = (0, Ed.toHex)(await V.digest()),
                    D = [lCQ, W, X, G, K, F].join(`
`);
                return this.signString(D, {
                    signingDate: B,
                    signingRegion: Y,
                    signingService: I
                })
            }
            async signMessage(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            }) {
                return this.signEvent({
                    headers: this.headerFormatter.format(A.message.headers),
                    payload: A.message.body
                }, {
                    signingDate: Q,
                    signingRegion: B,
                    signingService: G,
                    priorSignature: A.priorSignature
                }).then((I) => {
                    return {
                        message: A.message,
                        signature: I
                    }
                })
            }
            async signString(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            } = {}) {
                let Z = await this.credentialProvider();
                this.validateResolvedCredentials(Z);
                let I = B ?? await this.regionProvider(),
                    {
                        shortDate: Y
                    } = this.formatDate(Q),
                    J = new this.sha256(await this.getSigningKey(Z, I, Y, G));
                return J.update((0, jCQ.toUint8Array)(A)), (0, Ed.toHex)(await J.digest())
            }
            async signRequest(A, {
                signingDate: Q = new Date,
                signableHeaders: B,
                unsignableHeaders: G,
                signingRegion: Z,
                signingService: I
            } = {}) {
                let Y = await this.credentialProvider();
                this.validateResolvedCredentials(Y);
                let J = Z ?? await this.regionProvider(),
                    W = fL1(A),
                    {
                        longDate: X,
                        shortDate: F
                    } = this.formatDate(Q),
                    V = sgA(F, J, I ?? this.service);
                if (W.headers[dL1] = X, Y.sessionToken) W.headers[mCQ] = Y.sessionToken;
                let K = await rgA(W, this.sha256);
                if (!rCQ(tgA, W.headers) && this.applyChecksum) W.headers[tgA] = K;
                let D = vL1(W, G, B),
                    H = await this.getSignature(X, V, this.getSigningKey(Y, J, F, I), this.createCanonicalRequest(W, D, K));
                return W.headers[mL1] = `TextComponent{ngA} Credential=TextComponent{Y.accessKeyId}/TextComponent{V}, SignedHeaders=TextComponent{this.getCanonicalHeaderList(D)}, Signature=TextComponent{H}`, W
            }
            async getSignature(A, Q, B, G) {
                let Z = await this.createStringToSign(A, Q, G, ngA),
                    I = new this.sha256(await B);
                return I.update((0, jCQ.toUint8Array)(Z)), (0, Ed.toHex)(await I.digest())
            }
            getSigningKey(A, Q, B, G) {
                return sCQ(this.sha256, A, B, Q, G || this.service)
            }
        },
        $o4 = {
            SignatureV4a: null
        }
});
var nL1 = moduleWrapper((BH7, CEQ) => {
    var {
        defineProperty: AuA,
        getOwnPropertyDescriptor: wo4,
        getOwnPropertyNames: qo4
    } = Object, No4 = Object.prototype.hasOwnProperty, CW = (A, Q) => AuA(A, "name", {
        value: Q,
        configurable: !0
    }), Lo4 = (A, Q) => {
        for (var B in Q) AuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Mo4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of qo4(Q))
                if (!No4.call(A, Z) && Z !== B) AuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = wo4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Oo4 = (A) => Mo4(AuA({}, "__esModule", {
        value: !0
    }), A), FEQ = {};
    Lo4(FEQ, {
        AWSSDKSigV4Signer: () => jo4,
        AwsSdkSigV4ASigner: () => _o4,
        AwsSdkSigV4Signer: () => iL1,
        NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => ko4,
        NODE_SIGV4A_CONFIG_OPTIONS: () => vo4,
        getBearerTokenEnvKey: () => VEQ,
        resolveAWSSDKSigV4Config: () => fo4,
        resolveAwsSdkSigV4AConfig: () => xo4,
        resolveAwsSdkSigV4Config: () => KEQ,
        validateSigningProperties: () => lL1
    });
    CEQ.exports = Oo4(FEQ);
    var Ro4 = Cw(),
        To4 = Cw(),
        GEQ = CW((A) => To4.HttpResponse.isInstance(A) ? A.headers?.date ?? A.headers?.Date : void 0, "getDateHeader"),
        pL1 = CW((A) => new Date(Date.now() + A), "getSkewCorrectedDate"),
        Po4 = CW((A, Q) => Math.abs(pL1(Q).getTime() - A) >= 300000, "isClockSkewed"),
        ZEQ = CW((A, Q) => {
            let B = Date.parse(A);
            if (Po4(B, Q)) return B - Date.now();
            return Q
        }, "getUpdatedSystemClockOffset"),
        WHA = CW((A, Q) => {
            if (!Q) throw Error(`Property \`TextComponent{A}\` is not resolved for AWS SDK SigV4Auth`);
            return Q
        }, "throwSigningPropertyError"),
        lL1 = CW(async (A) => {
            let Q = WHA("context", A.context),
                B = WHA("config", A.config),
                G = Q.endpointV2?.properties?.authSchemes?.[0],
                I = await WHA("signer", B.signer)(G),
                Y = A?.signingRegion,
                J = A?.signingRegionSet,
                W = A?.signingName;
            return {
                config: B,
                signer: I,
                signingRegion: Y,
                signingRegionSet: J,
                signingName: W
            }
        }, "validateSigningProperties"),
        iL1 = class {
            static {
                CW(this, "AwsSdkSigV4Signer")
            }
            async sign(A, Q, B) {
                if (!Ro4.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let G = await lL1(B),
                    {
                        config: Z,
                        signer: I
                    } = G,
                    {
                        signingRegion: Y,
                        signingName: J
                    } = G,
                    W = B.context;
                if (W?.authSchemes?.length ?? !1) {
                    let [F, V] = W.authSchemes;
                    if (F?.name === "sigv4a" && V?.name === "sigv4") Y = V?.signingRegion ?? Y, J = V?.signingName ?? J
                }
                return await I.sign(A, {
                    signingDate: pL1(Z.systemClockOffset),
                    signingRegion: Y,
                    signingService: J
                })
            }
            errorHandler(A) {
                return (Q) => {
                    let B = Q.ServerTime ?? GEQ(Q.$response);
                    if (B) {
                        let G = WHA("config", A.config),
                            Z = G.systemClockOffset;
                        if (G.systemClockOffset = ZEQ(B, G.systemClockOffset), G.systemClockOffset !== Z && Q.$metadata) Q.$metadata.clockSkewCorrected = !0
                    }
                    throw Q
                }
            }
            successHandler(A, Q) {
                let B = GEQ(A);
                if (B) {
                    let G = WHA("config", Q.config);
                    G.systemClockOffset = ZEQ(B, G.systemClockOffset)
                }
            }
        },
        jo4 = iL1,
        So4 = Cw(),
        _o4 = class extends iL1 {
            static {
                CW(this, "AwsSdkSigV4ASigner")
            }
            async sign(A, Q, B) {
                if (!So4.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let {
                    config: G,
                    signer: Z,
                    signingRegion: I,
                    signingRegionSet: Y,
                    signingName: J
                } = await lL1(B), X = (await G.sigv4aSigningRegionSet?.() ?? Y ?? [I]).join(",");
                return await Z.sign(A, {
                    signingDate: pL1(G.systemClockOffset),
                    signingRegion: X,
                    signingService: J
                })
            }
        },
        IEQ = CW((A) => typeof A === "string" && A.length > 0 ? A.split(",").map((Q) => Q.trim()) : [], "getArrayForCommaSeparatedString"),
        VEQ = CW((A) => `AWS_BEARER_TOKEN_${A.replace(/[\s-]/g,"_").toUpperCase()}`, "getBearerTokenEnvKey"),
        YEQ = "AWS_AUTH_SCHEME_PREFERENCE",
        JEQ = "auth_scheme_preference",
        ko4 = {
            environmentVariableSelector: CW((A, Q) => {
                if (Q?.signingName) {
                    if (VEQ(Q.signingName) in A) return ["httpBearerAuth"]
                }
                if (!(YEQ in A)) return;
                return IEQ(A[YEQ])
            }, "environmentVariableSelector"),
            configFileSelector: CW((A) => {
                if (!(JEQ in A)) return;
                return IEQ(A[JEQ])
            }, "configFileSelector"),
            default: []
        },
        yo4 = nB(),
        WEQ = P2(),
        xo4 = CW((A) => {
            return A.sigv4aSigningRegionSet = (0, yo4.normalizeProvider)(A.sigv4aSigningRegionSet), A
        }, "resolveAwsSdkSigV4AConfig"),
        vo4 = {
            environmentVariableSelector(A) {
                if (A.AWS_SIGV4A_SIGNING_REGION_SET) return A.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((Q) => Q.trim());
                throw new WEQ.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
                    tryNextLink: !0
                })
            },
            configFileSelector(A) {
                if (A.sigv4a_signing_region_set) return (A.sigv4a_signing_region_set ?? "").split(",").map((Q) => Q.trim());
                throw new WEQ.ProviderError("sigv4a_signing_region_set not set in profile.", {
                    tryNextLink: !0
                })
            },
            default: void 0
        },
        bo4 = DL(),
        hr = nB(),
        XEQ = BEQ(),
        KEQ = CW((A) => {
            let Q = A.credentials,
                B = !!A.credentials,
                G = void 0;
            Object.defineProperty(A, "credentials", {
                set(X) {
                    if (X && X !== Q && X !== G) B = !0;
                    Q = X;
                    let F = DEQ(A, {
                            credentials: Q,
                            credentialDefaultProvider: A.credentialDefaultProvider
                        }),
                        V = HEQ(A, F);
                    if (B && !V.attributed) G = CW(async (K) => V(K).then((D) => (0, bo4.setCredentialFeature)(D, "CREDENTIALS_CODE", "e")), "resolvedCredentials"), G.memoized = V.memoized, G.configBound = V.configBound, G.attributed = !0;
                    else G = V
                },
                get() {
                    return G
                },
                enumerable: !0,
                configurable: !0
            }), A.credentials = Q;
            let {
                signingEscapePath: Z = !0,
                systemClockOffset: I = A.systemClockOffset || 0,
                sha256: Y
            } = A, J;
            if (A.signer) J = (0, hr.normalizeProvider)(A.signer);
            else if (A.regionInfoProvider) J = CW(() => (0, hr.normalizeProvider)(A.region)().then(async (X) => [await A.regionInfoProvider(X, {
                useFipsEndpoint: await A.useFipsEndpoint(),
                useDualstackEndpoint: await A.useDualstackEndpoint()
            }) || {}, X]).then(([X, F]) => {
                let {
                    signingRegion: V,
                    signingService: K
                } = X;
                A.signingRegion = A.signingRegion || V || F, A.signingName = A.signingName || K || A.serviceId;