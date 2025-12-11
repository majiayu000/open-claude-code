/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_015.js
 * 处理时间: 2025-12-09T03:41:36.501Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 15/61
 * Lines: 85263 - 86762 (1500 lines)
 * Original file: cli.js
 */

    var Mm4 = Z8A(),
        JN1 = II(),
        Om4 = nWQ(),
        Rm4 = new JN1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        Tm4 = (A, Q = {}) => {
            return Rm4.get(A, () => (0, JN1.resolveEndpoint)(Om4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    aWQ.defaultEndpointResolver = Tm4;
    JN1.customEndpointFunctions.aws = Mm4.awsEndpointFunctions
});
var QXQ = moduleWrapper((eWQ) => {
    Object.defineProperty(eWQ, "__esModule", {
        value: !0
    });
    eWQ.getRuntimeConfig = void 0;
    var Pm4 = LV(),
        jm4 = nB(),
        Sm4 = p6(),
        _m4 = zJ(),
        oWQ = Wd(),
        tWQ = L2(),
        km4 = GN1(),
        ym4 = rWQ(),
        xm4 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? oWQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? oWQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? ym4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? km4.defaultSSOOIDCHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new Pm4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new jm4.NoAuthSigner
                }],
                logger: A?.logger ?? new Sm4.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO OIDC",
                urlParser: A?.urlParser ?? _m4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? tWQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? tWQ.toUtf8
            }
        };
    eWQ.getRuntimeConfig = xm4
});
var WXQ = moduleWrapper((YXQ) => {
    Object.defineProperty(YXQ, "__esModule", {
        value: !0
    });
    YXQ.getRuntimeConfig = void 0;
    var vm4 = Pr(),
        bm4 = vm4.__importDefault(ZN1()),
        BXQ = LV(),
        GXQ = pDA(),
        VgA = S8(),
        fm4 = wX(),
        ZXQ = X6(),
        yr = xI(),
        IXQ = oG(),
        hm4 = qX(),
        gm4 = FW(),
        um4 = QXQ(),
        mm4 = p6(),
        dm4 = NX(),
        cm4 = p6(),
        pm4 = (A) => {
            (0, cm4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, dm4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(mm4.loadConfigsForDefaultMode),
                G = (0, um4.getRuntimeConfig)(A);
            (0, BXQ.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, yr.loadConfig)(BXQ.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? hm4.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, GXQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: bm4.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, yr.loadConfig)(ZXQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, yr.loadConfig)(VgA.NODE_REGION_CONFIG_OPTIONS, {
                    ...VgA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: IXQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, yr.loadConfig)({
                    ...ZXQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || gm4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? fm4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? IXQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, yr.loadConfig)(VgA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, yr.loadConfig)(VgA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, yr.loadConfig)(GXQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    YXQ.getRuntimeConfig = pm4
});
var FN1 = moduleWrapper(($K7, vXQ) => {
    var {
        defineProperty: KgA,
        getOwnPropertyDescriptor: lm4,
        getOwnPropertyNames: im4
    } = Object, nm4 = Object.prototype.hasOwnProperty, w6 = (A, Q) => KgA(A, "name", {
        value: Q,
        configurable: !0
    }), am4 = (A, Q) => {
        for (var B in Q) KgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, sm4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of im4(Q))
                if (!nm4.call(A, Z) && Z !== B) KgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = lm4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, rm4 = (A) => sm4(KgA({}, "__esModule", {
        value: !0
    }), A), EXQ = {};
    am4(EXQ, {
        $Command: () => $XQ.Command,
        AccessDeniedException: () => wXQ,
        AuthorizationPendingException: () => qXQ,
        CreateTokenCommand: () => yXQ,
        CreateTokenRequestFilterSensitiveLog: () => NXQ,
        CreateTokenResponseFilterSensitiveLog: () => LXQ,
        ExpiredTokenException: () => MXQ,
        InternalServerException: () => OXQ,
        InvalidClientException: () => RXQ,
        InvalidGrantException: () => TXQ,
        InvalidRequestException: () => PXQ,
        InvalidScopeException: () => jXQ,
        SSOOIDC: () => xXQ,
        SSOOIDCClient: () => UXQ,
        SSOOIDCServiceException: () => Fw,
        SlowDownException: () => SXQ,
        UnauthorizedClientException: () => _XQ,
        UnsupportedGrantTypeException: () => kXQ,
        __Client: () => zXQ.Client
    });
    vXQ.exports = rm4(EXQ);
    var XXQ = bDA(),
        om4 = fDA(),
        tm4 = hDA(),
        FXQ = F8A(),
        em4 = S8(),
        WN1 = nB(),
        Ad4 = zX(),
        Qd4 = E5(),
        VXQ = X6(),
        zXQ = p6(),
        KXQ = GN1(),
        Bd4 = w6((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "sso-oauth"
            })
        }, "resolveClientEndpointParameters"),
        Gd4 = {
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
        Zd4 = WXQ(),
        DXQ = iDA(),
        HXQ = cz(),
        CXQ = p6(),
        Id4 = w6((A) => {
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
        Yd4 = w6((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        Jd4 = w6((A, Q) => {
            let B = Object.assign((0, DXQ.getAwsRegionExtensionConfiguration)(A), (0, CXQ.getDefaultExtensionConfiguration)(A), (0, HXQ.getHttpHandlerExtensionConfiguration)(A), Id4(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, DXQ.resolveAwsRegionExtensionConfiguration)(B), (0, CXQ.resolveDefaultRuntimeConfig)(B), (0, HXQ.resolveHttpHandlerRuntimeConfig)(B), Yd4(B))
        }, "resolveRuntimeExtensions"),
        UXQ = class extends zXQ.Client {
            static {
                w6(this, "SSOOIDCClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, Zd4.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = Bd4(Q),
                    G = (0, FXQ.resolveUserAgentConfig)(B),
                    Z = (0, VXQ.resolveRetryConfig)(G),
                    I = (0, em4.resolveRegionConfig)(Z),
                    Y = (0, XXQ.resolveHostHeaderConfig)(I),
                    J = (0, Qd4.resolveEndpointConfig)(Y),
                    W = (0, KXQ.resolveHttpAuthSchemeConfig)(J),
                    X = Jd4(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, FXQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, VXQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, Ad4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, XXQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, om4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, tm4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, WN1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: KXQ.defaultSSOOIDCHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: w6(async (F) => new WN1.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, WN1.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        Wd4 = p6(),
        Xd4 = E5(),
        Fd4 = sG(),
        $XQ = p6(),
        U8A = p6(),
        Vd4 = p6(),
        Fw = class A extends Vd4.ServiceException {
            static {
                w6(this, "SSOOIDCServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        wXQ = class A extends Fw {
            static {
                w6(this, "AccessDeniedException")
            }
            name = "AccessDeniedException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "AccessDeniedException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        qXQ = class A extends Fw {
            static {
                w6(this, "AuthorizationPendingException")
            }
            name = "AuthorizationPendingException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "AuthorizationPendingException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        NXQ = w6((A) => ({
            ...A,
            ...A.clientSecret && {
                clientSecret: U8A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: U8A.SENSITIVE_STRING
            },
            ...A.codeVerifier && {
                codeVerifier: U8A.SENSITIVE_STRING
            }
        }), "CreateTokenRequestFilterSensitiveLog"),
        LXQ = w6((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: U8A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: U8A.SENSITIVE_STRING
            },
            ...A.idToken && {
                idToken: U8A.SENSITIVE_STRING
            }
        }), "CreateTokenResponseFilterSensitiveLog"),
        MXQ = class A extends Fw {
            static {
                w6(this, "ExpiredTokenException")
            }
            name = "ExpiredTokenException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "ExpiredTokenException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        OXQ = class A extends Fw {
            static {
                w6(this, "InternalServerException")
            }
            name = "InternalServerException";
            $fault = "server";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InternalServerException",
                    $fault: "server",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        RXQ = class A extends Fw {
            static {
                w6(this, "InvalidClientException")
            }
            name = "InvalidClientException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InvalidClientException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        TXQ = class A extends Fw {
            static {
                w6(this, "InvalidGrantException")
            }
            name = "InvalidGrantException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InvalidGrantException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        PXQ = class A extends Fw {
            static {
                w6(this, "InvalidRequestException")
            }
            name = "InvalidRequestException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InvalidRequestException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        jXQ = class A extends Fw {
            static {
                w6(this, "InvalidScopeException")
            }
            name = "InvalidScopeException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "InvalidScopeException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        SXQ = class A extends Fw {
            static {
                w6(this, "SlowDownException")
            }
            name = "SlowDownException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "SlowDownException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        _XQ = class A extends Fw {
            static {
                w6(this, "UnauthorizedClientException")
            }
            name = "UnauthorizedClientException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "UnauthorizedClientException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        kXQ = class A extends Fw {
            static {
                w6(this, "UnsupportedGrantTypeException")
            }
            name = "UnsupportedGrantTypeException";
            $fault = "client";
            error;
            error_description;
            constructor(Q) {
                super({
                    name: "UnsupportedGrantTypeException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype), this.error = Q.error, this.error_description = Q.error_description
            }
        },
        XN1 = LV(),
        Kd4 = nB(),
        A2 = p6(),
        Dd4 = w6(async (A, Q) => {
            let B = (0, Kd4.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/token");
            let Z;
            return Z = JSON.stringify((0, A2.take)(A, {
                clientId: [],
                clientSecret: [],
                code: [],
                codeVerifier: [],
                deviceCode: [],
                grantType: [],
                redirectUri: [],
                refreshToken: [],
                scope: w6((I) => (0, A2._json)(I), "scope")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateTokenCommand"),
        Hd4 = w6(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return Cd4(A, Q);
            let B = (0, A2.map)({
                    $metadata: KL(A)
                }),
                G = (0, A2.expectNonNull)((0, A2.expectObject)(await (0, XN1.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, A2.take)(G, {
                    accessToken: A2.expectString,
                    expiresIn: A2.expectInt32,
                    idToken: A2.expectString,
                    refreshToken: A2.expectString,
                    tokenType: A2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateTokenCommand"),
        Cd4 = w6(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, XN1.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, XN1.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "AccessDeniedException":
                case "com.amazonaws.ssooidc#AccessDeniedException":
                    throw await zd4(B, Q);
                case "AuthorizationPendingException":
                case "com.amazonaws.ssooidc#AuthorizationPendingException":
                    throw await Ud4(B, Q);
                case "ExpiredTokenException":
                case "com.amazonaws.ssooidc#ExpiredTokenException":
                    throw await $d4(B, Q);
                case "InternalServerException":
                case "com.amazonaws.ssooidc#InternalServerException":
                    throw await wd4(B, Q);
                case "InvalidClientException":
                case "com.amazonaws.ssooidc#InvalidClientException":
                    throw await qd4(B, Q);
                case "InvalidGrantException":
                case "com.amazonaws.ssooidc#InvalidGrantException":
                    throw await Nd4(B, Q);
                case "InvalidRequestException":
                case "com.amazonaws.ssooidc#InvalidRequestException":
                    throw await Ld4(B, Q);
                case "InvalidScopeException":
                case "com.amazonaws.ssooidc#InvalidScopeException":
                    throw await Md4(B, Q);
                case "SlowDownException":
                case "com.amazonaws.ssooidc#SlowDownException":
                    throw await Od4(B, Q);
                case "UnauthorizedClientException":
                case "com.amazonaws.ssooidc#UnauthorizedClientException":
                    throw await Rd4(B, Q);
                case "UnsupportedGrantTypeException":
                case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
                    throw await Td4(B, Q);
                default:
                    let Z = B.body;
                    return Ed4({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        Ed4 = (0, A2.withBaseException)(Fw),
        zd4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new wXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_AccessDeniedExceptionRes"),
        Ud4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new qXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_AuthorizationPendingExceptionRes"),
        $d4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new MXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_ExpiredTokenExceptionRes"),
        wd4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new OXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_InternalServerExceptionRes"),
        qd4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new RXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_InvalidClientExceptionRes"),
        Nd4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new TXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_InvalidGrantExceptionRes"),
        Ld4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new PXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        Md4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new jXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_InvalidScopeExceptionRes"),
        Od4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new SXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_SlowDownExceptionRes"),
        Rd4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new _XQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedClientExceptionRes"),
        Td4 = w6(async (A, Q) => {
            let B = (0, A2.map)({}),
                G = A.body,
                Z = (0, A2.take)(G, {
                    error: A2.expectString,
                    error_description: A2.expectString
                });
            Object.assign(B, Z);
            let I = new kXQ({
                $metadata: KL(A),
                ...B
            });
            return (0, A2.decorateServiceException)(I, A.body)
        }, "de_UnsupportedGrantTypeExceptionRes"),
        KL = w6((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        yXQ = class extends $XQ.Command.classBuilder().ep(Gd4).m(function(A, Q, B, G) {
            return [(0, Fd4.getSerdePlugin)(B, this.serialize, this.deserialize), (0, Xd4.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(NXQ, LXQ).ser(Dd4).de(Hd4).build() {
            static {
                w6(this, "CreateTokenCommand")
            }
        },
        Pd4 = {
            CreateTokenCommand: yXQ
        },
        xXQ = class extends UXQ {
            static {
                w6(this, "SSOOIDC")
            }
        };
    (0, Wd4.createAggregatedClient)(Pd4, xXQ)
});
var cXQ = moduleWrapper((LK7, dXQ) => {
    var {
        create: jd4,
        defineProperty: oDA,
        getOwnPropertyDescriptor: Sd4,
        getOwnPropertyNames: _d4,
        getPrototypeOf: kd4
    } = Object, yd4 = Object.prototype.hasOwnProperty, fv = (A, Q) => oDA(A, "name", {
        value: Q,
        configurable: !0
    }), xd4 = (A, Q) => {
        for (var B in Q) oDA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, hXQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of _d4(Q))
                if (!yd4.call(A, Z) && Z !== B) oDA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Sd4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, gXQ = (A, Q, B) => (B = A != null ? jd4(kd4(A)) : {}, hXQ(Q || !A || !A.__esModule ? oDA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), vd4 = (A) => hXQ(oDA({}, "__esModule", {
        value: !0
    }), A), uXQ = {};
    xd4(uXQ, {
        fromEnvSigningName: () => hd4,
        fromSso: () => mXQ,
        fromStatic: () => ld4,
        nodeProvider: () => id4
    });
    dXQ.exports = vd4(uXQ);
    var bd4 = yR(),
        fd4 = wq1(),
        Vw = P2(),
        hd4 = fv(({
            logger: A,
            signingName: Q
        } = {}) => async () => {
            if (A?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !Q) throw new Vw.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
                logger: A
            });
            let B = (0, fd4.getBearerTokenEnvKey)(Q);
            if (!(B in process.env)) throw new Vw.TokenProviderError(`Token not present in 'TextComponent{B}' environment variable`, {
                logger: A
            });
            let G = {
                token: process.env[B]
            };
            return (0, bd4.setTokenFeature)(G, "BEARER_SERVICE_ENV_VARS", "3"), G
        }, "fromEnvSigningName"),
        gd4 = 300000,
        VN1 = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
        ud4 = fv(async (A, Q = {}) => {
            let {
                SSOOIDCClient: B
            } = await Promise.resolve().then(() => gXQ(FN1()));
            return new B(Object.assign({}, Q.clientConfig ?? {}, {
                region: A ?? Q.clientConfig?.region,
                logger: Q.clientConfig?.logger ?? Q.parentClientConfig?.logger
            }))
        }, "getSsoOidcClient"),
        md4 = fv(async (A, Q, B = {}) => {
            let {
                CreateTokenCommand: G
            } = await Promise.resolve().then(() => gXQ(FN1()));
            return (await ud4(Q, B)).send(new G({
                clientId: A.clientId,
                clientSecret: A.clientSecret,
                refreshToken: A.refreshToken,
                grantType: "refresh_token"
            }))
        }, "getNewSsoOidcToken"),
        bXQ = fv((A) => {
            if (A.expiration && A.expiration.getTime() < Date.now()) throw new Vw.TokenProviderError(`Token is expired. TextComponent{VN1}`, !1)
        }, "validateTokenExpiry"),
        xr = fv((A, Q, B = !1) => {
            if (typeof Q > "u") throw new Vw.TokenProviderError(`Value not present for 'TextComponent{A}' in SSO Token${B?". Cannot refresh":""}. TextComponent{VN1}`, !1)
        }, "validateTokenKey"),
        rDA = NG(),
        dd4 = nodeRequire("fs"),
        {
            writeFile: cd4
        } = dd4.promises,
        pd4 = fv((A, Q) => {
            let B = (0, rDA.getSSOTokenFilepath)(A),
                G = JSON.stringify(Q, null, 2);
            return cd4(B, G)
        }, "writeSSOTokenToFile"),
        fXQ = new Date(0),
        mXQ = fv((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            let B = {
                ...A,
                parentClientConfig: {
                    ...Q,
                    ...A.parentClientConfig
                }
            };
            B.logger?.debug("@aws-sdk/token-providers - fromSso");
            let G = await (0, rDA.parseKnownFiles)(B),
                Z = (0, rDA.getProfileName)({
                    profile: B.profile ?? Q?.profile
                }),
                I = G[Z];
            if (!I) throw new Vw.TokenProviderError(`Profile 'TextComponent{Z}' could not be found in shared credentials file.`, !1);
            else if (!I.sso_session) throw new Vw.TokenProviderError(`Profile 'TextComponent{Z}' is missing required property 'sso_session'.`);
            let Y = I.sso_session,
                W = (await (0, rDA.loadSsoSessionData)(B))[Y];
            if (!W) throw new Vw.TokenProviderError(`Sso session 'TextComponent{Y}' could not be found in shared credentials file.`, !1);
            for (let C of ["sso_start_url", "sso_region"])
                if (!W[C]) throw new Vw.TokenProviderError(`Sso session 'TextComponent{Y}' is missing required property 'TextComponent{C}'.`, !1);
            let {
                sso_start_url: X,
                sso_region: F
            } = W, V;
            try {
                V = await (0, rDA.getSSOTokenFromFile)(Y)
            } catch (C) {
                throw new Vw.TokenProviderError(`The SSO session token associated with profile=TextComponent{Z} was not found or is invalid. TextComponent{VN1}`, !1)
            }
            xr("accessToken", V.accessToken), xr("expiresAt", V.expiresAt);
            let {
                accessToken: K,
                expiresAt: D
            } = V, H = {
                token: K,
                expiration: new Date(D)
            };
            if (H.expiration.getTime() - Date.now() > gd4) return H;
            if (Date.now() - fXQ.getTime() < 30000) return bXQ(H), H;
            xr("clientId", V.clientId, !0), xr("clientSecret", V.clientSecret, !0), xr("refreshToken", V.refreshToken, !0);
            try {
                fXQ.setTime(Date.now());
                let C = await md4(V, F, B);
                xr("accessToken", C.accessToken), xr("expiresIn", C.expiresIn);
                let E = new Date(Date.now() + C.expiresIn * 1000);
                try {
                    await pd4(Y, {
                        ...V,
                        accessToken: C.accessToken,
                        expiresAt: E.toISOString(),
                        refreshToken: C.refreshToken
                    })
                } catch (z) {}
                return {
                    token: C.accessToken,
                    expiration: E
                }
            } catch (C) {
                return bXQ(H), H
            }
        }, "fromSso"),
        ld4 = fv(({
            token: A,
            logger: Q
        }) => async () => {
            if (Q?.debug("@aws-sdk/token-providers - fromStatic"), !A || !A.token) throw new Vw.TokenProviderError("Please pass a valid token to fromStatic", !1);
            return A
        }, "fromStatic"),
        id4 = fv((A = {}) => (0, Vw.memoize)((0, Vw.chain)(mXQ(A), async () => {
            throw new Vw.TokenProviderError("Could not load token from any providers", !1)
        }), (Q) => Q.expiration !== void 0 && Q.expiration.getTime() - Date.now() < 300000, (Q) => Q.expiration !== void 0), "nodeProvider")
});
var DN1 = moduleWrapper((MK7, tXQ) => {
    var {
        defineProperty: HgA,
        getOwnPropertyDescriptor: nd4,
        getOwnPropertyNames: iXQ
    } = Object, ad4 = Object.prototype.hasOwnProperty, CgA = (A, Q) => HgA(A, "name", {
        value: Q,
        configurable: !0
    }), sd4 = (A, Q) => function() {
        return A && (Q = (0, A[iXQ(A)[0]])(A = 0)), Q
    }, nXQ = (A, Q) => {
        for (var B in Q) HgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, rd4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of iXQ(Q))
                if (!ad4.call(A, Z) && Z !== B) HgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = nd4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, od4 = (A) => rd4(HgA({}, "__esModule", {
        value: !0
    }), A), aXQ = {};
    nXQ(aXQ, {
        GetRoleCredentialsCommand: () => KN1.GetRoleCredentialsCommand,
        SSOClient: () => KN1.SSOClient
    });
    var KN1, td4 = sd4({
            "src/loadSso.ts"() {
                KN1 = PWQ()
            }
        }),
        sXQ = {};
    nXQ(sXQ, {
        fromSSO: () => Ac4,
        isSsoProfile: () => rXQ,
        validateSsoProfile: () => oXQ
    });
    tXQ.exports = od4(sXQ);
    var rXQ = CgA((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        pXQ = yR(),
        ed4 = cXQ(),
        xR = P2(),
        DgA = NG(),
        tDA = !1,
        lXQ = CgA(async ({
            ssoStartUrl: A,
            ssoSession: Q,
            ssoAccountId: B,
            ssoRegion: G,
            ssoRoleName: Z,
            ssoClient: I,
            clientConfig: Y,
            parentClientConfig: J,
            profile: W,
            logger: X
        }) => {
            let F, V = "To refresh this SSO session run aws sso login with the corresponding profile.";
            if (Q) try {
                let v = await (0, ed4.fromSso)({
                    profile: W
                })();
                F = {
                    accessToken: v.token,
                    expiresAt: new Date(v.expiration).toISOString()
                }
            } catch (v) {
                throw new xR.CredentialsProviderError(v.message, {
                    tryNextLink: tDA,
                    logger: X
                })
            } else try {
                F = await (0, DgA.getSSOTokenFromFile)(A)
            } catch (v) {
                throw new xR.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
                    tryNextLink: tDA,
                    logger: X
                })
            }
            if (new Date(F.expiresAt).getTime() - Date.now() <= 0) throw new xR.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
                tryNextLink: tDA,
                logger: X
            });
            let {
                accessToken: K
            } = F, {
                SSOClient: D,
                GetRoleCredentialsCommand: H
            } = await Promise.resolve().then(() => (td4(), aXQ)), C = I || new D(Object.assign({}, Y ?? {}, {
                logger: Y?.logger ?? J?.logger,
                region: Y?.region ?? G
            })), E;
            try {
                E = await C.send(new H({
                    accountId: B,
                    roleName: Z,
                    accessToken: K
                }))
            } catch (v) {
                throw new xR.CredentialsProviderError(v, {
                    tryNextLink: tDA,
                    logger: X
                })
            }
            let {
                roleCredentials: {
                    accessKeyId: z,
                    secretAccessKey: w,
                    sessionToken: N,
                    expiration: q,
                    credentialScope: R,
                    accountId: P
                } = {}
            } = E;
            if (!z || !w || !N || !q) throw new xR.CredentialsProviderError("SSO returns an invalid temporary credential.", {
                tryNextLink: tDA,
                logger: X
            });
            let y = {
                accessKeyId: z,
                secretAccessKey: w,
                sessionToken: N,
                expiration: new Date(q),
                ...R && {
                    credentialScope: R
                },
                ...P && {
                    accountId: P
                }
            };
            if (Q)(0, pXQ.setCredentialFeature)(y, "CREDENTIALS_SSO", "s");
            else(0, pXQ.setCredentialFeature)(y, "CREDENTIALS_SSO_LEGACY", "u");
            return y
        }, "resolveSSOCredentials"),
        oXQ = CgA((A, Q) => {
            let {
                sso_start_url: B,
                sso_account_id: G,
                sso_region: Z,
                sso_role_name: I
            } = A;
            if (!B || !G || !Z || !I) throw new xR.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got TextComponent{Object.keys(A).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
                tryNextLink: !1,
                logger: Q
            });
            return A
        }, "validateSsoProfile"),
        Ac4 = CgA((A = {}) => async ({
            callerClientConfig: Q
        } = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
            let {
                ssoStartUrl: B,
                ssoAccountId: G,
                ssoRegion: Z,
                ssoRoleName: I,
                ssoSession: Y
            } = A, {
                ssoClient: J
            } = A, W = (0, DgA.getProfileName)({
                profile: A.profile ?? Q?.profile
            });
            if (!B && !G && !Z && !I && !Y) {
                let F = (await (0, DgA.parseKnownFiles)(A))[W];
                if (!F) throw new xR.CredentialsProviderError(`Profile TextComponent{W} was not found.`, {
                    logger: A.logger
                });
                if (!rXQ(F)) throw new xR.CredentialsProviderError(`Profile TextComponent{W} is not configured with SSO credentials.`, {
                    logger: A.logger
                });
                if (F?.sso_session) {
                    let z = (await (0, DgA.loadSsoSessionData)(A))[F.sso_session],
                        w = ` configurations in profile TextComponent{W} and sso-session TextComponent{F.sso_session}`;
                    if (Z && Z !== z.sso_region) throw new xR.CredentialsProviderError("Conflicting SSO region" + w, {
                        tryNextLink: !1,
                        logger: A.logger
                    });
                    if (B && B !== z.sso_start_url) throw new xR.CredentialsProviderError("Conflicting SSO start_url" + w, {
                        tryNextLink: !1,
                        logger: A.logger
                    });
                    F.sso_region = z.sso_region, F.sso_start_url = z.sso_start_url
                }
                let {
                    sso_start_url: V,
                    sso_account_id: K,
                    sso_region: D,
                    sso_role_name: H,
                    sso_session: C
                } = oXQ(F, A.logger);
                return lXQ({
                    ssoStartUrl: V,
                    ssoSession: C,
                    ssoAccountId: K,
                    ssoRegion: D,
                    ssoRoleName: H,
                    ssoClient: J,
                    clientConfig: A.clientConfig,
                    parentClientConfig: A.parentClientConfig,
                    profile: W
                })
            } else if (!B || !G || !Z || !I) throw new xR.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
                tryNextLink: !1,
                logger: A.logger
            });
            else return lXQ({
                ssoStartUrl: B,
                ssoSession: Y,
                ssoAccountId: G,
                ssoRegion: Z,
                ssoRoleName: I,
                ssoClient: J,
                clientConfig: A.clientConfig,
                parentClientConfig: A.parentClientConfig,
                profile: W
            })
        }, "fromSSO")
});
var CN1 = moduleWrapper((eXQ) => {
    Object.defineProperty(eXQ, "__esModule", {
        value: !0
    });
    eXQ.resolveHttpAuthSchemeConfig = eXQ.resolveStsAuthConfig = eXQ.defaultSTSHttpAuthSchemeProvider = eXQ.defaultSTSHttpAuthSchemeParametersProvider = void 0;
    var Qc4 = LV(),
        HN1 = K7(),
        Bc4 = eDA(),
        Gc4 = async (A, Q, B) => {
            return {
                operation: (0, HN1.getSmithyContext)(Q).operation,
                region: await (0, HN1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    eXQ.defaultSTSHttpAuthSchemeParametersProvider = Gc4;

    function Zc4(A) {
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

    function Ic4(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var Yc4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "AssumeRoleWithWebIdentity": {
                Q.push(Ic4(A));
                break
            }
            default:
                Q.push(Zc4(A))
        }
        return Q
    };
    eXQ.defaultSTSHttpAuthSchemeProvider = Yc4;
    var Jc4 = (A) => Object.assign(A, {
        stsClientCtor: Bc4.STSClient
    });
    eXQ.resolveStsAuthConfig = Jc4;
    var Wc4 = (A) => {
        let Q = eXQ.resolveStsAuthConfig(A),
            B = (0, Qc4.resolveAwsSdkSigV4Config)(Q);
        return Object.assign(B, {
            authSchemePreference: (0, HN1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    eXQ.resolveHttpAuthSchemeConfig = Wc4
});
var AHA = moduleWrapper((BFQ) => {
    Object.defineProperty(BFQ, "__esModule", {
        value: !0
    });
    BFQ.commonParams = BFQ.resolveClientEndpointParameters = void 0;
    var Vc4 = (A) => {
        return Object.assign(A, {
            useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
            useFipsEndpoint: A.useFipsEndpoint ?? !1,
            useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
            defaultSigningName: "sts"
        })
    };
    BFQ.resolveClientEndpointParameters = Vc4;
    BFQ.commonParams = {
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
var TFQ = moduleWrapper((OFQ) => {
    Object.defineProperty(OFQ, "__esModule", {
        value: !0
    });
    OFQ.ruleSet = void 0;
    var CFQ = "required",
        y8 = "type",
        TASK_TOOL_NAME = "fn",
        s3 = "argv",
        Kd = "ref",
        ZFQ = !1,
        EN1 = !0,
        Vd = "booleanEquals",
        tK = "stringEquals",
        EFQ = "sigv4",
        zFQ = "sts",
        UFQ = "us-east-1",
        hI = "endpoint",
        IFQ = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        zS = "tree",
        $8A = "error",
        UN1 = "getAttr",
        YFQ = {
            [CFQ]: !1,
            [y8]: "String"
        },
        zN1 = {
            [CFQ]: !0,
            default: !1,
            [y8]: "Boolean"
        },
        $FQ = {
            [Kd]: "Endpoint"
        },
        JFQ = {
            [TASK_TOOL_NAME]: "isSet",
            [s3]: [{
                [Kd]: "Region"
            }]
        },
        eK = {
            [Kd]: "Region"
        },
        WFQ = {
            [TASK_TOOL_NAME]: "aws.partition",
            [s3]: [eK],
            assign: "PartitionResult"
        },
        wFQ = {
            [Kd]: "UseFIPS"
        },
        qFQ = {
            [Kd]: "UseDualStack"
        },
        zH = {
            url: "https://sts.amazonaws.com",
            properties: {
                authSchemes: [{
                    name: EFQ,
                    signingName: zFQ,
                    signingRegion: UFQ
                }]
            },
            headers: {}
        },
        Kw = {},
        XFQ = {
            conditions: [{
                [TASK_TOOL_NAME]: tK,
                [s3]: [eK, "aws-global"]
            }],
            [hI]: zH,
            [y8]: hI
        },
        NFQ = {
            [TASK_TOOL_NAME]: Vd,
            [s3]: [wFQ, !0]
        },
        LFQ = {
            [TASK_TOOL_NAME]: Vd,
            [s3]: [qFQ, !0]
        },
        FFQ = {
            [TASK_TOOL_NAME]: UN1,
            [s3]: [{
                [Kd]: "PartitionResult"
            }, "supportsFIPS"]
        },
        MFQ = {
            [Kd]: "PartitionResult"
        },
        VFQ = {
            [TASK_TOOL_NAME]: Vd,
            [s3]: [!0, {
                [TASK_TOOL_NAME]: UN1,
                [s3]: [MFQ, "supportsDualStack"]
            }]
        },
        KFQ = [{
            [TASK_TOOL_NAME]: "isSet",
            [s3]: [$FQ]
        }],
        DFQ = [NFQ],
        HFQ = [LFQ],
        Dc4 = {
            version: "1.0",
            parameters: {
                Region: YFQ,
                UseDualStack: zN1,
                UseFIPS: zN1,
                Endpoint: YFQ,
                UseGlobalEndpoint: zN1
            },
            rules: [{
                conditions: [{
                    [TASK_TOOL_NAME]: Vd,
                    [s3]: [{
                        [Kd]: "UseGlobalEndpoint"
                    }, EN1]
                }, {
                    [TASK_TOOL_NAME]: "not",
                    [s3]: KFQ
                }, JFQ, WFQ, {
                    [TASK_TOOL_NAME]: Vd,
                    [s3]: [wFQ, ZFQ]
                }, {
                    [TASK_TOOL_NAME]: Vd,
                    [s3]: [qFQ, ZFQ]
                }],
                rules: [{
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "ap-northeast-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "ap-south-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "ap-southeast-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "ap-southeast-2"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, XFQ, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "ca-central-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "eu-central-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "eu-north-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "eu-west-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "eu-west-2"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "eu-west-3"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "sa-east-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, UFQ]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "us-east-2"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "us-west-1"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    conditions: [{
                        [TASK_TOOL_NAME]: tK,
                        [s3]: [eK, "us-west-2"]
                    }],
                    endpoint: zH,
                    [y8]: hI
                }, {
                    endpoint: {
                        url: IFQ,
                        properties: {
                            authSchemes: [{
                                name: EFQ,
                                signingName: zFQ,
                                signingRegion: "{Region}"
                            }]
                        },