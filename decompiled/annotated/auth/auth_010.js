/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_010.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (14次) = moduleWrapper(fn) - CommonJS module wrapper
 *   L        (6次) = lazyLoader(fn) - Lazy module loader
 *   UA       (2次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 10/61
 * Lines: 74779 - 76276 (1498 lines)
 * Original file: cli.js
 */

    var Pj4 = wV(),
        C$1 = K7(),
        jj4 = _DA(),
        Sj4 = async (A, Q, B) => {
            return {
                operation: (0, C$1.getSmithyContext)(Q).operation,
                region: await (0, C$1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    E6Q.defaultSTSHttpAuthSchemeParametersProvider = Sj4;

    function _j4(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sts",
                region: A.region
            },
            propertiesExtractor: (Q, B) => ({
                signingProperties: {
                    config: Q,
                    context: B
                }
            })
        }
    }

    function kj4(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var yj4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "AssumeRoleWithWebIdentity": {
                Q.push(kj4(A));
                break
            }
            default:
                Q.push(_j4(A))
        }
        return Q
    };
    E6Q.defaultSTSHttpAuthSchemeProvider = yj4;
    var xj4 = (A) => Object.assign(A, {
        stsClientCtor: jj4.STSClient
    });
    E6Q.resolveStsAuthConfig = xj4;
    var vj4 = (A) => {
        let Q = E6Q.resolveStsAuthConfig(A),
            B = (0, Pj4.resolveAwsSdkSigV4Config)(Q);
        return Object.assign(B, {
            authSchemePreference: (0, C$1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    E6Q.resolveHttpAuthSchemeConfig = vj4
});
var kDA = U(($6Q) => {
    Object.defineProperty($6Q, "__esModule", {
        value: !0
    });
    $6Q.commonParams = $6Q.resolveClientEndpointParameters = void 0;
    var hj4 = (A) => {
        return Object.assign(A, {
            useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
            useFipsEndpoint: A.useFipsEndpoint ?? !1,
            useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
            defaultSigningName: "sts"
        })
    };
    $6Q.resolveClientEndpointParameters = hj4;
    $6Q.commonParams = {
        UseGlobalEndpoint: {
            type: "builtInParams",
            name: "useGlobalEndpoint"
        },
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
    }
});
var p6Q = U((d6Q) => {
    Object.defineProperty(d6Q, "__esModule", {
        value: !0
    });
    d6Q.ruleSet = void 0;
    var k6Q = "required",
        _8 = "type",
        p3 = "fn",
        l3 = "argv",
        Qd = "ref",
        q6Q = !1,
        z$1 = !0,
        Ad = "booleanEquals",
        iK = "stringEquals",
        y6Q = "sigv4",
        x6Q = "sts",
        v6Q = "us-east-1",
        vI = "endpoint",
        N6Q = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        XS = "tree",
        f4A = "error",
        $$1 = "getAttr",
        L6Q = {
            [k6Q]: !1,
            [_8]: "String"
        },
        U$1 = {
            [k6Q]: !0,
            default: !1,
            [_8]: "Boolean"
        },
        b6Q = {
            [Qd]: "Endpoint"
        },
        M6Q = {
            [p3]: "isSet",
            [l3]: [{
                [Qd]: "Region"
            }]
        },
        nK = {
            [Qd]: "Region"
        },
        O6Q = {
            [p3]: "aws.partition",
            [l3]: [nK],
            assign: "PartitionResult"
        },
        f6Q = {
            [Qd]: "UseFIPS"
        },
        h6Q = {
            [Qd]: "UseDualStack"
        },
        CH = {
            url: "https://sts.amazonaws.com",
            properties: {
                authSchemes: [{
                    name: y6Q,
                    signingName: x6Q,
                    signingRegion: v6Q
                }]
            },
            headers: {}
        },
        Ww = {},
        R6Q = {
            conditions: [{
                [p3]: iK,
                [l3]: [nK, "aws-global"]
            }],
            [vI]: CH,
            [_8]: vI
        },
        g6Q = {
            [p3]: Ad,
            [l3]: [f6Q, !0]
        },
        u6Q = {
            [p3]: Ad,
            [l3]: [h6Q, !0]
        },
        T6Q = {
            [p3]: $$1,
            [l3]: [{
                [Qd]: "PartitionResult"
            }, "supportsFIPS"]
        },
        m6Q = {
            [Qd]: "PartitionResult"
        },
        P6Q = {
            [p3]: Ad,
            [l3]: [!0, {
                [p3]: $$1,
                [l3]: [m6Q, "supportsDualStack"]
            }]
        },
        j6Q = [{
            [p3]: "isSet",
            [l3]: [b6Q]
        }],
        S6Q = [g6Q],
        _6Q = [u6Q],
        uj4 = {
            version: "1.0",
            parameters: {
                Region: L6Q,
                UseDualStack: U$1,
                UseFIPS: U$1,
                Endpoint: L6Q,
                UseGlobalEndpoint: U$1
            },
            rules: [{
                conditions: [{
                    [p3]: Ad,
                    [l3]: [{
                        [Qd]: "UseGlobalEndpoint"
                    }, z$1]
                }, {
                    [p3]: "not",
                    [l3]: j6Q
                }, M6Q, O6Q, {
                    [p3]: Ad,
                    [l3]: [f6Q, q6Q]
                }, {
                    [p3]: Ad,
                    [l3]: [h6Q, q6Q]
                }],
                rules: [{
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "ap-northeast-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "ap-south-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "ap-southeast-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "ap-southeast-2"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, R6Q, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "ca-central-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "eu-central-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "eu-north-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "eu-west-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "eu-west-2"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "eu-west-3"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "sa-east-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, v6Q]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "us-east-2"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "us-west-1"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    conditions: [{
                        [p3]: iK,
                        [l3]: [nK, "us-west-2"]
                    }],
                    endpoint: CH,
                    [_8]: vI
                }, {
                    endpoint: {
                        url: N6Q,
                        properties: {
                            authSchemes: [{
                                name: y6Q,
                                signingName: x6Q,
                                signingRegion: "{Region}"
                            }]
                        },
                        headers: Ww
                    },
                    [_8]: vI
                }],
                [_8]: XS
            }, {
                conditions: j6Q,
                rules: [{
                    conditions: S6Q,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    [_8]: f4A
                }, {
                    conditions: _6Q,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    [_8]: f4A
                }, {
                    endpoint: {
                        url: b6Q,
                        properties: Ww,
                        headers: Ww
                    },
                    [_8]: vI
                }],
                [_8]: XS
            }, {
                conditions: [M6Q],
                rules: [{
                    conditions: [O6Q],
                    rules: [{
                        conditions: [g6Q, u6Q],
                        rules: [{
                            conditions: [{
                                [p3]: Ad,
                                [l3]: [z$1, T6Q]
                            }, P6Q],
                            rules: [{
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Ww,
                                    headers: Ww
                                },
                                [_8]: vI
                            }],
                            [_8]: XS
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            [_8]: f4A
                        }],
                        [_8]: XS
                    }, {
                        conditions: S6Q,
                        rules: [{
                            conditions: [{
                                [p3]: Ad,
                                [l3]: [T6Q, z$1]
                            }],
                            rules: [{
                                conditions: [{
                                    [p3]: iK,
                                    [l3]: [{
                                        [p3]: $$1,
                                        [l3]: [m6Q, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://sts.{Region}.amazonaws.com",
                                    properties: Ww,
                                    headers: Ww
                                },
                                [_8]: vI
                            }, {
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: Ww,
                                    headers: Ww
                                },
                                [_8]: vI
                            }],
                            [_8]: XS
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            [_8]: f4A
                        }],
                        [_8]: XS
                    }, {
                        conditions: _6Q,
                        rules: [{
                            conditions: [P6Q],
                            rules: [{
                                endpoint: {
                                    url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Ww,
                                    headers: Ww
                                },
                                [_8]: vI
                            }],
                            [_8]: XS
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            [_8]: f4A
                        }],
                        [_8]: XS
                    }, R6Q, {
                        endpoint: {
                            url: N6Q,
                            properties: Ww,
                            headers: Ww
                        },
                        [_8]: vI
                    }],
                    [_8]: XS
                }],
                [_8]: XS
            }, {
                error: "Invalid Configuration: Missing Region",
                [_8]: f4A
            }]
        };
    d6Q.ruleSet = uj4
});
var n6Q = U((l6Q) => {
    Object.defineProperty(l6Q, "__esModule", {
        value: !0
    });
    l6Q.defaultEndpointResolver = void 0;
    var mj4 = U4A(),
        w$1 = II(),
        dj4 = p6Q(),
        cj4 = new w$1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
        }),
        pj4 = (A, Q = {}) => {
            return cj4.get(A, () => (0, w$1.resolveEndpoint)(dj4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    l6Q.defaultEndpointResolver = pj4;
    w$1.customEndpointFunctions.aws = mj4.awsEndpointFunctions
});
var t6Q = U((r6Q) => {
    Object.defineProperty(r6Q, "__esModule", {
        value: !0
    });
    r6Q.getRuntimeConfig = void 0;
    var lj4 = wV(),
        ij4 = nB(),
        nj4 = W6(),
        aj4 = zJ(),
        a6Q = lm(),
        s6Q = L2(),
        sj4 = E$1(),
        rj4 = n6Q(),
        oj4 = (A) => {
            return {
                apiVersion: "2011-06-15",
                base64Decoder: A?.base64Decoder ?? a6Q.fromBase64,
                base64Encoder: A?.base64Encoder ?? a6Q.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? rj4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? sj4.defaultSTSHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new lj4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new ij4.NoAuthSigner
                }],
                logger: A?.logger ?? new nj4.NoOpLogger,
                serviceId: A?.serviceId ?? "STS",
                urlParser: A?.urlParser ?? aj4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? s6Q.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? s6Q.toUtf8
            }
        };
    r6Q.getRuntimeConfig = oj4
});
var Z5Q = U((B5Q) => {
    Object.defineProperty(B5Q, "__esModule", {
        value: !0
    });
    B5Q.getRuntimeConfig = void 0;
    var tj4 = Vr(),
        ej4 = tj4.__importDefault(I$1()),
        q$1 = wV(),
        e6Q = qDA(),
        FhA = S8(),
        AS4 = nB(),
        QS4 = wX(),
        A5Q = X6(),
        Lr = xI(),
        Q5Q = oG(),
        BS4 = qX(),
        GS4 = FW(),
        ZS4 = t6Q(),
        IS4 = W6(),
        YS4 = NX(),
        JS4 = W6(),
        WS4 = (A) => {
            (0, JS4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, YS4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(IS4.loadConfigsForDefaultMode),
                G = (0, ZS4.getRuntimeConfig)(A);
            (0, q$1.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, Lr.loadConfig)(q$1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? BS4.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, e6Q.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: ej4.default.version
                }),
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (I) => I.getIdentityProvider("aws.auth#sigv4") || (async (Y) => await A.credentialDefaultProvider(Y?.__config || {})()),
                    signer: new q$1.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (I) => I.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new AS4.NoAuthSigner
                }],
                maxAttempts: A?.maxAttempts ?? (0, Lr.loadConfig)(A5Q.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, Lr.loadConfig)(FhA.NODE_REGION_CONFIG_OPTIONS, {
                    ...FhA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: Q5Q.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, Lr.loadConfig)({
                    ...A5Q.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || GS4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? QS4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? Q5Q.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, Lr.loadConfig)(FhA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, Lr.loadConfig)(FhA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, Lr.loadConfig)(e6Q.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    B5Q.getRuntimeConfig = WS4
});
var J5Q = U((I5Q) => {
    Object.defineProperty(I5Q, "__esModule", {
        value: !0
    });
    I5Q.resolveHttpAuthRuntimeConfig = I5Q.getHttpAuthExtensionConfiguration = void 0;
    var XS4 = (A) => {
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
    };
    I5Q.getHttpAuthExtensionConfiguration = XS4;
    var FS4 = (A) => {
        return {
            httpAuthSchemes: A.httpAuthSchemes(),
            httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
            credentials: A.credentials()
        }
    };
    I5Q.resolveHttpAuthRuntimeConfig = FS4
});
var H5Q = U((K5Q) => {
    Object.defineProperty(K5Q, "__esModule", {
        value: !0
    });
    K5Q.resolveRuntimeExtensions = void 0;
    var W5Q = MDA(),
        X5Q = cC(),
        F5Q = W6(),
        V5Q = J5Q(),
        KS4 = (A, Q) => {
            let B = Object.assign((0, W5Q.getAwsRegionExtensionConfiguration)(A), (0, F5Q.getDefaultExtensionConfiguration)(A), (0, X5Q.getHttpHandlerExtensionConfiguration)(A), (0, V5Q.getHttpAuthExtensionConfiguration)(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, W5Q.resolveAwsRegionExtensionConfiguration)(B), (0, F5Q.resolveDefaultRuntimeConfig)(B), (0, X5Q.resolveHttpHandlerRuntimeConfig)(B), (0, V5Q.resolveHttpAuthRuntimeConfig)(B))
        };
    K5Q.resolveRuntimeExtensions = KS4
});
var _DA = U((L$1) => {
    Object.defineProperty(L$1, "__esModule", {
        value: !0
    });
    L$1.STSClient = L$1.__Client = void 0;
    var C5Q = lKA(),
        DS4 = iKA(),
        HS4 = nKA(),
        E5Q = M4A(),
        CS4 = S8(),
        N$1 = nB(),
        ES4 = zX(),
        zS4 = E5(),
        z5Q = X6(),
        $5Q = W6();
    Object.defineProperty(L$1, "__Client", {
        enumerable: !0,
        get: function() {
            return $5Q.Client
        }
    });
    var U5Q = E$1(),
        US4 = kDA(),
        $S4 = Z5Q(),
        wS4 = H5Q();
    class w5Q extends $5Q.Client {
        config;
        constructor(...[A]) {
            let Q = (0, $S4.getRuntimeConfig)(A || {});
            super(Q);
            this.initConfig = Q;
            let B = (0, US4.resolveClientEndpointParameters)(Q),
                G = (0, E5Q.resolveUserAgentConfig)(B),
                Z = (0, z5Q.resolveRetryConfig)(G),
                I = (0, CS4.resolveRegionConfig)(Z),
                Y = (0, C5Q.resolveHostHeaderConfig)(I),
                J = (0, zS4.resolveEndpointConfig)(Y),
                W = (0, U5Q.resolveHttpAuthSchemeConfig)(J),
                X = (0, wS4.resolveRuntimeExtensions)(W, A?.extensions || []);
            this.config = X, this.middlewareStack.use((0, E5Q.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, z5Q.getRetryPlugin)(this.config)), this.middlewareStack.use((0, ES4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, C5Q.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, DS4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, HS4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, N$1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider: U5Q.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (F) => new N$1.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": F.credentials
                })
            })), this.middlewareStack.use((0, N$1.getHttpSigningPlugin)(this.config))
        }
        destroy() {
            super.destroy()
        }
    }
    L$1.STSClient = w5Q
});
var Aw1 = U(($F7, e$1) => {
    var {
        defineProperty: VhA,
        getOwnPropertyDescriptor: qS4,
        getOwnPropertyNames: NS4
    } = Object, LS4 = Object.prototype.hasOwnProperty, j2 = (A, Q) => VhA(A, "name", {
        value: Q,
        configurable: !0
    }), MS4 = (A, Q) => {
        for (var B in Q) VhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, i$1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of NS4(Q))
                if (!LS4.call(A, Z) && Z !== B) VhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = qS4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, OS4 = (A, Q, B) => (i$1(A, Q, "default"), B && i$1(B, Q, "default")), RS4 = (A) => i$1(VhA({}, "__esModule", {
        value: !0
    }), A), a$1 = {};
    MS4(a$1, {
        AssumeRoleCommand: () => o$1,
        AssumeRoleResponseFilterSensitiveLog: () => M5Q,
        AssumeRoleWithWebIdentityCommand: () => t$1,
        AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => _5Q,
        AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => k5Q,
        ClientInputEndpointParameters: () => U_4.ClientInputEndpointParameters,
        CredentialsFilterSensitiveLog: () => s$1,
        ExpiredTokenException: () => O5Q,
        IDPCommunicationErrorException: () => y5Q,
        IDPRejectedClaimException: () => j5Q,
        InvalidIdentityTokenException: () => S5Q,
        MalformedPolicyDocumentException: () => R5Q,
        PackedPolicyTooLargeException: () => T5Q,
        RegionDisabledException: () => P5Q,
        STS: () => p5Q,
        STSServiceException: () => $v,
        decorateDefaultCredentialProvider: () => q_4,
        getDefaultRoleAssumer: () => r5Q,
        getDefaultRoleAssumerWithWebIdentity: () => o5Q
    });
    e$1.exports = RS4(a$1);
    OS4(a$1, _DA(), e$1.exports);
    var TS4 = W6(),
        PS4 = E5(),
        jS4 = sG(),
        SS4 = W6(),
        _S4 = kDA(),
        L5Q = W6(),
        kS4 = W6(),
        $v = class A extends kS4.ServiceException {
            static {
                j2(this, "STSServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        s$1 = j2((A) => ({
            ...A,
            ...A.SecretAccessKey && {
                SecretAccessKey: L5Q.SENSITIVE_STRING
            }
        }), "CredentialsFilterSensitiveLog"),
        M5Q = j2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: s$1(A.Credentials)
            }
        }), "AssumeRoleResponseFilterSensitiveLog"),
        O5Q = class A extends $v {
            static {
                j2(this, "ExpiredTokenException")
            }
            name = "ExpiredTokenException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "ExpiredTokenException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        R5Q = class A extends $v {
            static {
                j2(this, "MalformedPolicyDocumentException")
            }
            name = "MalformedPolicyDocumentException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "MalformedPolicyDocumentException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        T5Q = class A extends $v {
            static {
                j2(this, "PackedPolicyTooLargeException")
            }
            name = "PackedPolicyTooLargeException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "PackedPolicyTooLargeException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        P5Q = class A extends $v {
            static {
                j2(this, "RegionDisabledException")
            }
            name = "RegionDisabledException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "RegionDisabledException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        j5Q = class A extends $v {
            static {
                j2(this, "IDPRejectedClaimException")
            }
            name = "IDPRejectedClaimException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "IDPRejectedClaimException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        S5Q = class A extends $v {
            static {
                j2(this, "InvalidIdentityTokenException")
            }
            name = "InvalidIdentityTokenException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "InvalidIdentityTokenException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        _5Q = j2((A) => ({
            ...A,
            ...A.WebIdentityToken && {
                WebIdentityToken: L5Q.SENSITIVE_STRING
            }
        }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog"),
        k5Q = j2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: s$1(A.Credentials)
            }
        }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog"),
        y5Q = class A extends $v {
            static {
                j2(this, "IDPCommunicationErrorException")
            }
            name = "IDPCommunicationErrorException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "IDPCommunicationErrorException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        r$1 = wV(),
        yS4 = cC(),
        D7 = W6(),
        xS4 = j2(async (A, Q) => {
            let B = g5Q,
                G;
            return G = c5Q({
                ...lS4(A, Q),
                [m5Q]: X_4,
                [d5Q]: u5Q
            }), h5Q(Q, B, "/", void 0, G)
        }, "se_AssumeRoleCommand"),
        vS4 = j2(async (A, Q) => {
            let B = g5Q,
                G;
            return G = c5Q({
                ...iS4(A, Q),
                [m5Q]: F_4,
                [d5Q]: u5Q
            }), h5Q(Q, B, "/", void 0, G)
        }, "se_AssumeRoleWithWebIdentityCommand"),
        bS4 = j2(async (A, Q) => {
            if (A.statusCode >= 300) return x5Q(A, Q);
            let B = await (0, r$1.parseXmlBody)(A.body, Q),
                G = {};
            return G = eS4(B.AssumeRoleResult, Q), {
                $metadata: wv(A),
                ...G
            }
        }, "de_AssumeRoleCommand"),
        fS4 = j2(async (A, Q) => {
            if (A.statusCode >= 300) return x5Q(A, Q);
            let B = await (0, r$1.parseXmlBody)(A.body, Q),
                G = {};
            return G = A_4(B.AssumeRoleWithWebIdentityResult, Q), {
                $metadata: wv(A),
                ...G
            }
        }, "de_AssumeRoleWithWebIdentityCommand"),
        x5Q = j2(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, r$1.parseXmlErrorBody)(A.body, Q)
                },
                G = V_4(A, B.body);
            switch (G) {
                case "ExpiredTokenException":
                case "com.amazonaws.sts#ExpiredTokenException":
                    throw await hS4(B, Q);
                case "MalformedPolicyDocument":
                case "com.amazonaws.sts#MalformedPolicyDocumentException":
                    throw await dS4(B, Q);
                case "PackedPolicyTooLarge":
                case "com.amazonaws.sts#PackedPolicyTooLargeException":
                    throw await cS4(B, Q);
                case "RegionDisabledException":
                case "com.amazonaws.sts#RegionDisabledException":
                    throw await pS4(B, Q);
                case "IDPCommunicationError":
                case "com.amazonaws.sts#IDPCommunicationErrorException":
                    throw await gS4(B, Q);
                case "IDPRejectedClaim":
                case "com.amazonaws.sts#IDPRejectedClaimException":
                    throw await uS4(B, Q);
                case "InvalidIdentityToken":
                case "com.amazonaws.sts#InvalidIdentityTokenException":
                    throw await mS4(B, Q);
                default:
                    let Z = B.body;
                    return W_4({
                        output: A,
                        parsedBody: Z.Error,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        hS4 = j2(async (A, Q) => {
            let B = A.body,
                G = Q_4(B.Error, Q),
                Z = new O5Q({
                    $metadata: wv(A),
                    ...G
                });
            return (0, D7.decorateServiceException)(Z, B)
        }, "de_ExpiredTokenExceptionRes"),
        gS4 = j2(async (A, Q) => {
            let B = A.body,
                G = B_4(B.Error, Q),
                Z = new y5Q({
                    $metadata: wv(A),
                    ...G
                });
            return (0, D7.decorateServiceException)(Z, B)
        }, "de_IDPCommunicationErrorExceptionRes"),
        uS4 = j2(async (A, Q) => {
            let B = A.body,
                G = G_4(B.Error, Q),
                Z = new j5Q({
                    $metadata: wv(A),
                    ...G
                });
            return (0, D7.decorateServiceException)(Z, B)
        }, "de_IDPRejectedClaimExceptionRes"),
        mS4 = j2(async (A, Q) => {
            let B = A.body,
                G = Z_4(B.Error, Q),
                Z = new S5Q({
                    $metadata: wv(A),
                    ...G
                });
            return (0, D7.decorateServiceException)(Z, B)
        }, "de_InvalidIdentityTokenExceptionRes"),
        dS4 = j2(async (A, Q) => {
            let B = A.body,
                G = I_4(B.Error, Q),
                Z = new R5Q({
                    $metadata: wv(A),
                    ...G
                });
            return (0, D7.decorateServiceException)(Z, B)
        }, "de_MalformedPolicyDocumentExceptionRes"),
        cS4 = j2(async (A, Q) => {
            let B = A.body,
                G = Y_4(B.Error, Q),
                Z = new T5Q({
                    $metadata: wv(A),
                    ...G
                });
            return (0, D7.decorateServiceException)(Z, B)
        }, "de_PackedPolicyTooLargeExceptionRes"),
        pS4 = j2(async (A, Q) => {
            let B = A.body,
                G = J_4(B.Error, Q),
                Z = new P5Q({
                    $metadata: wv(A),
                    ...G
                });
            return (0, D7.decorateServiceException)(Z, B)
        }, "de_RegionDisabledExceptionRes"),
        lS4 = j2((A, Q) => {
            let B = {};
            if (A[p4A] != null) B[p4A] = A[p4A];
            if (A[l4A] != null) B[l4A] = A[l4A];
            if (A[d4A] != null) {
                let G = v5Q(A[d4A], Q);
                if (A[d4A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[m4A] != null) B[m4A] = A[m4A];
            if (A[u4A] != null) B[u4A] = A[u4A];
            if (A[u$1] != null) {
                let G = tS4(A[u$1], Q);
                if (A[u$1]?.length === 0) B.Tags = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `Tags.${Z}`;
                    B[Y] = I
                })
            }
            if (A[d$1] != null) {
                let G = oS4(A[d$1], Q);
                if (A[d$1]?.length === 0) B.TransitiveTagKeys = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `TransitiveTagKeys.${Z}`;
                    B[Y] = I
                })
            }
            if (A[S$1] != null) B[S$1] = A[S$1];
            if (A[h$1] != null) B[h$1] = A[h$1];
            if (A[m$1] != null) B[m$1] = A[m$1];
            if (A[Uv] != null) B[Uv] = A[Uv];
            if (A[y$1] != null) {
                let G = sS4(A[y$1], Q);
                if (A[y$1]?.length === 0) B.ProvidedContexts = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `ProvidedContexts.${Z}`;
                    B[Y] = I
                })
            }
            return B
        }, "se_AssumeRoleRequest"),
        iS4 = j2((A, Q) => {
            let B = {};
            if (A[p4A] != null) B[p4A] = A[p4A];
            if (A[l4A] != null) B[l4A] = A[l4A];
            if (A[p$1] != null) B[p$1] = A[p$1];
            if (A[x$1] != null) B[x$1] = A[x$1];
            if (A[d4A] != null) {
                let G = v5Q(A[d4A], Q);
                if (A[d4A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[m4A] != null) B[m4A] = A[m4A];
            if (A[u4A] != null) B[u4A] = A[u4A];
            return B
        }, "se_AssumeRoleWithWebIdentityRequest"),
        v5Q = j2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = nS4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_policyDescriptorListType"),
        nS4 = j2((A, Q) => {
            let B = {};
            if (A[l$1] != null) B[l$1] = A[l$1];
            return B
        }, "se_PolicyDescriptorType"),
        aS4 = j2((A, Q) => {
            let B = {};
            if (A[k$1] != null) B[k$1] = A[k$1];
            if (A[P$1] != null) B[P$1] = A[P$1];
            return B
        }, "se_ProvidedContext"),
        sS4 = j2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = aS4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_ProvidedContextsListType"),
        rS4 = j2((A, Q) => {
            let B = {};
            if (A[_$1] != null) B[_$1] = A[_$1];
            if (A[c$1] != null) B[c$1] = A[c$1];
            return B
        }, "se_Tag"),
        oS4 = j2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                B[`member.${G}`] = Z, G++
            }
            return B
        }, "se_tagKeyListType"),
        tS4 = j2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = rS4(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_tagListType"),
        b5Q = j2((A, Q) => {
            let B = {};
            if (A[O$1] != null) B[O$1] = (0, D7.expectString)(A[O$1]);
            if (A[R$1] != null) B[R$1] = (0, D7.expectString)(A[R$1]);
            return B
        }, "de_AssumedRoleUser"),
        eS4 = j2((A, Q) => {
            let B = {};
            if (A[g4A] != null) B[g4A] = f5Q(A[g4A], Q);
            if (A[h4A] != null) B[h4A] = b5Q(A[h4A], Q);
            if (A[c4A] != null) B[c4A] = (0, D7.strictParseInt32)(A[c4A]);
            if (A[Uv] != null) B[Uv] = (0, D7.expectString)(A[Uv]);
            return B
        }, "de_AssumeRoleResponse"),
        A_4 = j2((A, Q) => {
            let B = {};
            if (A[g4A] != null) B[g4A] = f5Q(A[g4A], Q);
            if (A[f$1] != null) B[f$1] = (0, D7.expectString)(A[f$1]);
            if (A[h4A] != null) B[h4A] = b5Q(A[h4A], Q);
            if (A[c4A] != null) B[c4A] = (0, D7.strictParseInt32)(A[c4A]);
            if (A[v$1] != null) B[v$1] = (0, D7.expectString)(A[v$1]);
            if (A[T$1] != null) B[T$1] = (0, D7.expectString)(A[T$1]);
            if (A[Uv] != null) B[Uv] = (0, D7.expectString)(A[Uv]);
            return B
        }, "de_AssumeRoleWithWebIdentityResponse"),
        f5Q = j2((A, Q) => {
            let B = {};
            if (A[M$1] != null) B[M$1] = (0, D7.expectString)(A[M$1]);
            if (A[b$1] != null) B[b$1] = (0, D7.expectString)(A[b$1]);
            if (A[g$1] != null) B[g$1] = (0, D7.expectString)(A[g$1]);
            if (A[j$1] != null) B[j$1] = (0, D7.expectNonNull)((0, D7.parseRfc3339DateTimeWithOffset)(A[j$1]));
            return B
        }, "de_Credentials"),
        Q_4 = j2((A, Q) => {
            let B = {};
            if (A[VW] != null) B[VW] = (0, D7.expectString)(A[VW]);
            return B
        }, "de_ExpiredTokenException"),
        B_4 = j2((A, Q) => {
            let B = {};
            if (A[VW] != null) B[VW] = (0, D7.expectString)(A[VW]);
            return B
        }, "de_IDPCommunicationErrorException"),
        G_4 = j2((A, Q) => {
            let B = {};
            if (A[VW] != null) B[VW] = (0, D7.expectString)(A[VW]);
            return B
        }, "de_IDPRejectedClaimException"),
        Z_4 = j2((A, Q) => {
            let B = {};
            if (A[VW] != null) B[VW] = (0, D7.expectString)(A[VW]);
            return B
        }, "de_InvalidIdentityTokenException"),
        I_4 = j2((A, Q) => {
            let B = {};
            if (A[VW] != null) B[VW] = (0, D7.expectString)(A[VW]);
            return B
        }, "de_MalformedPolicyDocumentException"),
        Y_4 = j2((A, Q) => {
            let B = {};
            if (A[VW] != null) B[VW] = (0, D7.expectString)(A[VW]);
            return B
        }, "de_PackedPolicyTooLargeException"),
        J_4 = j2((A, Q) => {
            let B = {};
            if (A[VW] != null) B[VW] = (0, D7.expectString)(A[VW]);
            return B
        }, "de_RegionDisabledException"),
        wv = j2((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        W_4 = (0, D7.withBaseException)($v),
        h5Q = j2(async (A, Q, B, G, Z) => {
            let {
                hostname: I,
                protocol: Y = "https",
                port: J,
                path: W
            } = await A.endpoint(), X = {
                protocol: Y,
                hostname: I,
                port: J,
                method: "POST",
                path: W.endsWith("/") ? W.slice(0, -1) + B : W + B,
                headers: Q
            };
            if (G !== void 0) X.hostname = G;
            if (Z !== void 0) X.body = Z;
            return new yS4.HttpRequest(X)
        }, "buildHttpRpcRequest"),
        g5Q = {
            "content-type": "application/x-www-form-urlencoded"
        },
        u5Q = "2011-06-15",
        m5Q = "Action",
        M$1 = "AccessKeyId",
        X_4 = "AssumeRole",
        O$1 = "AssumedRoleId",
        h4A = "AssumedRoleUser",
        F_4 = "AssumeRoleWithWebIdentity",
        R$1 = "Arn",
        T$1 = "Audience",
        g4A = "Credentials",
        P$1 = "ContextAssertion",
        u4A = "DurationSeconds",
        j$1 = "Expiration",
        S$1 = "ExternalId",
        _$1 = "Key",
        m4A = "Policy",
        d4A = "PolicyArns",
        k$1 = "ProviderArn",
        y$1 = "ProvidedContexts",
        x$1 = "ProviderId",
        c4A = "PackedPolicySize",
        v$1 = "Provider",
        p4A = "RoleArn",
        l4A = "RoleSessionName",
        b$1 = "SecretAccessKey",
        f$1 = "SubjectFromWebIdentityToken",
        Uv = "SourceIdentity",
        h$1 = "SerialNumber",
        g$1 = "SessionToken",
        u$1 = "Tags",
        m$1 = "TokenCode",
        d$1 = "TransitiveTagKeys",
        d5Q = "Version",
        c$1 = "Value",
        p$1 = "WebIdentityToken",
        l$1 = "arn",
        VW = "message",
        c5Q = j2((A) => Object.entries(A).map(([Q, B]) => (0, D7.extendedEncodeURIComponent)(Q) + "=" + (0, D7.extendedEncodeURIComponent)(B)).join("&"), "buildFormUrlencodedString"),
        V_4 = j2((A, Q) => {
            if (Q.Error?.Code !== void 0) return Q.Error.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadQueryErrorCode"),
        o$1 = class extends SS4.Command.classBuilder().ep(_S4.commonParams).m(function(A, Q, B, G) {
            return [(0, jS4.getSerdePlugin)(B, this.serialize, this.deserialize), (0, PS4.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").f(void 0, M5Q).ser(xS4).de(bS4).build() {
            static {
                j2(this, "AssumeRoleCommand")
            }
        },
        K_4 = E5(),
        D_4 = sG(),
        H_4 = W6(),
        C_4 = kDA(),
        t$1 = class extends H_4.Command.classBuilder().ep(C_4.commonParams).m(function(A, Q, B, G) {
            return [(0, D_4.getSerdePlugin)(B, this.serialize, this.deserialize), (0, K_4.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").f(_5Q, k5Q).ser(vS4).de(fS4).build() {
            static {
                j2(this, "AssumeRoleWithWebIdentityCommand")
            }
        },
        E_4 = _DA(),
        z_4 = {
            AssumeRoleCommand: o$1,
            AssumeRoleWithWebIdentityCommand: t$1
        },
        p5Q = class extends E_4.STSClient {
            static {
                j2(this, "STS")
            }
        };
    (0, TS4.createAggregatedClient)(z_4, p5Q);
    var U_4 = kDA(),
        n$1 = lN(),
        N5Q = "us-east-1",
        l5Q = j2((A) => {
            if (typeof A?.Arn === "string") {
                let Q = A.Arn.split(":");
                if (Q.length > 4 && Q[4] !== "") return Q[4]
            }
            return
        }, "getAccountIdFromAssumedRoleUser"),
        i5Q = j2(async (A, Q, B) => {
            let G = typeof A === "function" ? await A() : A,
                Z = typeof Q === "function" ? await Q() : Q;
            return B?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${G} (provider)`, `${Z} (parent client)`, `${N5Q} (STS default)`), G ?? Z ?? N5Q
        }, "resolveRegion"),
        $_4 = j2((A, Q) => {
            let B, G;
            return async (Z, I) => {
                if (G = Z, !B) {
                    let {
                        logger: F = A?.parentClientConfig?.logger,
                        region: V,
                        requestHandler: K = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: D
                    } = A, H = await i5Q(V, A?.parentClientConfig?.region, D), C = !n5Q(K);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        credentialDefaultProvider: j2(() => async () => G, "credentialDefaultProvider"),
                        region: H,
                        requestHandler: C ? K : void 0,
                        logger: F
                    })
                }
                let {
                    Credentials: Y,
                    AssumedRoleUser: J
                } = await B.send(new o$1(I));
                if (!Y || !Y.AccessKeyId || !Y.SecretAccessKey) throw Error(`Invalid response from STS.assumeRole call with role ${I.RoleArn}`);
                let W = l5Q(J),
                    X = {
                        accessKeyId: Y.AccessKeyId,
                        secretAccessKey: Y.SecretAccessKey,
                        sessionToken: Y.SessionToken,
                        expiration: Y.Expiration,
                        ...Y.CredentialScope && {
                            credentialScope: Y.CredentialScope
                        },
                        ...W && {
                            accountId: W
                        }
                    };
                return (0, n$1.setCredentialFeature)(X, "CREDENTIALS_STS_ASSUME_ROLE", "i"), X
            }
        }, "getDefaultRoleAssumer"),
        w_4 = j2((A, Q) => {
            let B;
            return async (G) => {
                if (!B) {
                    let {
                        logger: W = A?.parentClientConfig?.logger,
                        region: X,
                        requestHandler: F = A?.parentClientConfig?.requestHandler,
                        credentialProviderLogger: V
                    } = A, K = await i5Q(X, A?.parentClientConfig?.region, V), D = !n5Q(F);
                    B = new Q({
                        profile: A?.parentClientConfig?.profile,
                        region: K,
                        requestHandler: D ? F : void 0,
                        logger: W
                    })
                }
                let {
                    Credentials: Z,
                    AssumedRoleUser: I
                } = await B.send(new t$1(G));
                if (!Z || !Z.AccessKeyId || !Z.SecretAccessKey) throw Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${G.RoleArn}`);
                let Y = l5Q(I),
                    J = {
                        accessKeyId: Z.AccessKeyId,
                        secretAccessKey: Z.SecretAccessKey,
                        sessionToken: Z.SessionToken,
                        expiration: Z.Expiration,
                        ...Z.CredentialScope && {
                            credentialScope: Z.CredentialScope
                        },
                        ...Y && {
                            accountId: Y
                        }
                    };
                if (Y)(0, n$1.setCredentialFeature)(J, "RESOLVED_ACCOUNT_ID", "T");
                return (0, n$1.setCredentialFeature)(J, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), J
            }
        }, "getDefaultRoleAssumerWithWebIdentity"),
        n5Q = j2((A) => {
            return A?.metadata?.handlerProtocol === "h2"
        }, "isH2"),
        a5Q = _DA(),
        s5Q = j2((A, Q) => {
            if (!Q) return A;
            else return class extends A {
                static {
                    j2(this, "CustomizableSTSClient")
                }
                constructor(G) {
                    super(G);
                    for (let Z of Q) this.middlewareStack.use(Z)
                }
            }
        }, "getCustomizableStsClientCtor"),
        r5Q = j2((A = {}, Q) => $_4(A, s5Q(a5Q.STSClient, Q)), "getDefaultRoleAssumer"),
        o5Q = j2((A = {}, Q) => w_4(A, s5Q(a5Q.STSClient, Q)), "getDefaultRoleAssumerWithWebIdentity"),
        q_4 = j2((A) => (Q) => A({
            roleAssumer: r5Q(Q),
            roleAssumerWithWebIdentity: o5Q(Q),
            ...Q
        }), "decorateDefaultCredentialProvider")
});
var Gw1 = U((LF7, A3Q) => {
    var {
        defineProperty: KhA,
        getOwnPropertyDescriptor: N_4,
        getOwnPropertyNames: L_4
    } = Object, M_4 = Object.prototype.hasOwnProperty, Bw1 = (A, Q) => KhA(A, "name", {
        value: Q,
        configurable: !0
    }), O_4 = (A, Q) => {
        for (var B in Q) KhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, R_4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of L_4(Q))
                if (!M_4.call(A, Z) && Z !== B) KhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = N_4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, T_4 = (A) => R_4(KhA({}, "__esModule", {
        value: !0
    }), A), e5Q = {};
    O_4(e5Q, {
        fromProcess: () => y_4
    });
    A3Q.exports = T_4(e5Q);
    var t5Q = NG(),
        Qw1 = P2(),
        P_4 = UA("child_process"),
        j_4 = UA("util"),
        S_4 = lN(),
        __4 = Bw1((A, Q, B) => {
            if (Q.Version !== 1) throw Error(`Profile ${A} credential_process did not return Version 1.`);
            if (Q.AccessKeyId === void 0 || Q.SecretAccessKey === void 0) throw Error(`Profile ${A} credential_process returned invalid credentials.`);
            if (Q.Expiration) {
                let I = new Date;
                if (new Date(Q.Expiration) < I) throw Error(`Profile ${A} credential_process returned expired credentials.`)
            }
            let G = Q.AccountId;
            if (!G && B?.[A]?.aws_account_id) G = B[A].aws_account_id;
            let Z = {
                accessKeyId: Q.AccessKeyId,
                secretAccessKey: Q.SecretAccessKey,
                ...Q.SessionToken && {
                    sessionToken: Q.SessionToken
                },
                ...Q.Expiration && {
                    expiration: new Date(Q.Expiration)
                },
                ...Q.CredentialScope && {
                    credentialScope: Q.CredentialScope
                },