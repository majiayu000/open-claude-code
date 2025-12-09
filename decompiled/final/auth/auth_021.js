/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_021.js
 * 处理时间: 2025-12-09T03:41:36.567Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  2x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 21/61
 * Lines: 97193 - 98690 (1498 lines)
 * Original file: cli.js
 */

        HwQ = [UwQ],
        CwQ = [$wQ],
        EwQ = [{
            [o8A]: "Region"
        }],
        m08 = {
            version: "1.0",
            parameters: {
                Region: XwQ,
                UseDualStack: FwQ,
                UseFIPS: FwQ,
                Endpoint: XwQ
            },
            rules: [{
                conditions: [{
                    [UL]: WwQ,
                    [$L]: [VwQ]
                }],
                rules: [{
                    conditions: HwQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: s8A
                }, {
                    conditions: CwQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: s8A
                }, {
                    endpoint: {
                        url: VwQ,
                        properties: zL,
                        headers: zL
                    },
                    type: r8A
                }],
                type: sv
            }, {
                conditions: [{
                    [UL]: WwQ,
                    [$L]: EwQ
                }],
                rules: [{
                    conditions: [{
                        [UL]: "aws.partition",
                        [$L]: EwQ,
                        assign: YO1
                    }],
                    rules: [{
                        conditions: [UwQ, $wQ],
                        rules: [{
                            conditions: [{
                                [UL]: $HA,
                                [$L]: [JwQ, KwQ]
                            }, DwQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: zL,
                                    headers: zL
                                },
                                type: r8A
                            }],
                            type: sv
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: s8A
                        }],
                        type: sv
                    }, {
                        conditions: HwQ,
                        rules: [{
                            conditions: [{
                                [UL]: $HA,
                                [$L]: [KwQ, JwQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [UL]: "stringEquals",
                                    [$L]: [{
                                        [UL]: JO1,
                                        [$L]: [wwQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://oidc.{Region}.amazonaws.com",
                                    properties: zL,
                                    headers: zL
                                },
                                type: r8A
                            }, {
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: zL,
                                    headers: zL
                                },
                                type: r8A
                            }],
                            type: sv
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: s8A
                        }],
                        type: sv
                    }, {
                        conditions: CwQ,
                        rules: [{
                            conditions: [DwQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: zL,
                                    headers: zL
                                },
                                type: r8A
                            }],
                            type: sv
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: s8A
                        }],
                        type: sv
                    }, {
                        endpoint: {
                            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
                            properties: zL,
                            headers: zL
                        },
                        type: r8A
                    }],
                    type: sv
                }],
                type: sv
            }, {
                error: "Invalid Configuration: Missing Region",
                type: s8A
            }]
        };
    qwQ.ruleSet = m08
});
var RwQ = U((MwQ) => {
    Object.defineProperty(MwQ, "__esModule", {
        value: !0
    });
    MwQ.defaultEndpointResolver = void 0;
    var d08 = JHA(),
        WO1 = II(),
        c08 = LwQ(),
        p08 = new WO1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        l08 = (A, Q = {}) => {
            return p08.get(A, () => (0, WO1.resolveEndpoint)(c08.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    MwQ.defaultEndpointResolver = l08;
    WO1.customEndpointFunctions.aws = d08.awsEndpointFunctions
});
var _wQ = U((jwQ) => {
    Object.defineProperty(jwQ, "__esModule", {
        value: !0
    });
    jwQ.getRuntimeConfig = void 0;
    var i08 = pz(),
        n08 = nB(),
        a08 = R3(),
        s08 = zJ(),
        TwQ = gr(),
        PwQ = L2(),
        r08 = IO1(),
        o08 = RwQ(),
        t08 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? TwQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? TwQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? o08.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? r08.defaultSSOOIDCHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new i08.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new n08.NoAuthSigner
                }],
                logger: A?.logger ?? new a08.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO OIDC",
                urlParser: A?.urlParser ?? s08.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? PwQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? PwQ.toUtf8
            }
        };
    jwQ.getRuntimeConfig = t08
});
var hwQ = U((bwQ) => {
    Object.defineProperty(bwQ, "__esModule", {
        value: !0
    });
    bwQ.getRuntimeConfig = void 0;
    var e08 = Tr(),
        AQ8 = e08.__importDefault(FM1()),
        kwQ = pz(),
        ywQ = WuA(),
        OuA = S8(),
        QQ8 = wX(),
        xwQ = X6(),
        pr = xI(),
        vwQ = oG(),
        BQ8 = qX(),
        GQ8 = FW(),
        ZQ8 = _wQ(),
        IQ8 = R3(),
        YQ8 = NX(),
        JQ8 = R3(),
        WQ8 = (A) => {
            (0, JQ8.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, YQ8.resolveDefaultsModeConfig)(A),
                B = () => Q().then(IQ8.loadConfigsForDefaultMode),
                G = (0, ZQ8.getRuntimeConfig)(A);
            (0, kwQ.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, pr.loadConfig)(kwQ.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? BQ8.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, ywQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: AQ8.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, pr.loadConfig)(xwQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, pr.loadConfig)(OuA.NODE_REGION_CONFIG_OPTIONS, {
                    ...OuA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: vwQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, pr.loadConfig)({
                    ...xwQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || GQ8.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? QQ8.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? vwQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, pr.loadConfig)(OuA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, pr.loadConfig)(OuA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, pr.loadConfig)(ywQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    bwQ.getRuntimeConfig = WQ8
});
var VO1 = U((XC7, VqQ) => {
    var {
        defineProperty: RuA,
        getOwnPropertyDescriptor: XQ8,
        getOwnPropertyNames: FQ8
    } = Object, VQ8 = Object.prototype.hasOwnProperty, q6 = (A, Q) => RuA(A, "name", {
        value: Q,
        configurable: !0
    }), KQ8 = (A, Q) => {
        for (var B in Q) RuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, DQ8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of FQ8(Q))
                if (!VQ8.call(A, Z) && Z !== B) RuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = XQ8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, HQ8 = (A) => DQ8(RuA({}, "__esModule", {
        value: !0
    }), A), iwQ = {};
    KQ8(iwQ, {
        $Command: () => swQ.Command,
        AccessDeniedException: () => rwQ,
        AuthorizationPendingException: () => owQ,
        CreateTokenCommand: () => XqQ,
        CreateTokenRequestFilterSensitiveLog: () => twQ,
        CreateTokenResponseFilterSensitiveLog: () => ewQ,
        ExpiredTokenException: () => AqQ,
        InternalServerException: () => QqQ,
        InvalidClientException: () => BqQ,
        InvalidGrantException: () => GqQ,
        InvalidRequestException: () => ZqQ,
        InvalidScopeException: () => IqQ,
        SSOOIDC: () => FqQ,
        SSOOIDCClient: () => awQ,
        SSOOIDCServiceException: () => zw,
        SlowDownException: () => YqQ,
        UnauthorizedClientException: () => JqQ,
        UnsupportedGrantTypeException: () => WqQ,
        __Client: () => nwQ.Client
    });
    VqQ.exports = HQ8(iwQ);
    var gwQ = hgA(),
        CQ8 = ugA(),
        EQ8 = cgA(),
        uwQ = DHA(),
        zQ8 = S8(),
        XO1 = nB(),
        UQ8 = zX(),
        $Q8 = E5(),
        mwQ = X6(),
        nwQ = R3(),
        dwQ = IO1(),
        wQ8 = q6((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "sso-oauth"
            })
        }, "resolveClientEndpointParameters"),
        qQ8 = {
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
        NQ8 = hwQ(),
        cwQ = VuA(),
        pwQ = Cw(),
        lwQ = R3(),
        LQ8 = q6((A) => {
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
        MQ8 = q6((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        OQ8 = q6((A, Q) => {
            let B = Object.assign((0, cwQ.getAwsRegionExtensionConfiguration)(A), (0, lwQ.getDefaultExtensionConfiguration)(A), (0, pwQ.getHttpHandlerExtensionConfiguration)(A), LQ8(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, cwQ.resolveAwsRegionExtensionConfiguration)(B), (0, lwQ.resolveDefaultRuntimeConfig)(B), (0, pwQ.resolveHttpHandlerRuntimeConfig)(B), MQ8(B))
        }, "resolveRuntimeExtensions"),
        awQ = class extends nwQ.Client {
            static {
                q6(this, "SSOOIDCClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, NQ8.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = wQ8(Q),
                    G = (0, uwQ.resolveUserAgentConfig)(B),
                    Z = (0, mwQ.resolveRetryConfig)(G),
                    I = (0, zQ8.resolveRegionConfig)(Z),
                    Y = (0, gwQ.resolveHostHeaderConfig)(I),
                    J = (0, $Q8.resolveEndpointConfig)(Y),
                    W = (0, dwQ.resolveHttpAuthSchemeConfig)(J),
                    X = OQ8(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, uwQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, mwQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, UQ8.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, gwQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, CQ8.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, EQ8.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, XO1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: dwQ.defaultSSOOIDCHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: q6(async (F) => new XO1.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, XO1.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        RQ8 = R3(),
        TQ8 = E5(),
        PQ8 = sG(),
        swQ = R3(),
        t8A = R3(),
        jQ8 = R3(),
        zw = class A extends jQ8.ServiceException {
            static {
                q6(this, "SSOOIDCServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        rwQ = class A extends zw {
            static {
                q6(this, "AccessDeniedException")
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
        owQ = class A extends zw {
            static {
                q6(this, "AuthorizationPendingException")
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
        twQ = q6((A) => ({
            ...A,
            ...A.clientSecret && {
                clientSecret: t8A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: t8A.SENSITIVE_STRING
            },
            ...A.codeVerifier && {
                codeVerifier: t8A.SENSITIVE_STRING
            }
        }), "CreateTokenRequestFilterSensitiveLog"),
        ewQ = q6((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: t8A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: t8A.SENSITIVE_STRING
            },
            ...A.idToken && {
                idToken: t8A.SENSITIVE_STRING
            }
        }), "CreateTokenResponseFilterSensitiveLog"),
        AqQ = class A extends zw {
            static {
                q6(this, "ExpiredTokenException")
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
        QqQ = class A extends zw {
            static {
                q6(this, "InternalServerException")
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
        BqQ = class A extends zw {
            static {
                q6(this, "InvalidClientException")
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
        GqQ = class A extends zw {
            static {
                q6(this, "InvalidGrantException")
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
        ZqQ = class A extends zw {
            static {
                q6(this, "InvalidRequestException")
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
        IqQ = class A extends zw {
            static {
                q6(this, "InvalidScopeException")
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
        YqQ = class A extends zw {
            static {
                q6(this, "SlowDownException")
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
        JqQ = class A extends zw {
            static {
                q6(this, "UnauthorizedClientException")
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
        WqQ = class A extends zw {
            static {
                q6(this, "UnsupportedGrantTypeException")
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
        FO1 = pz(),
        SQ8 = nB(),
        Q2 = R3(),
        _Q8 = q6(async (A, Q) => {
            let B = (0, SQ8.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/token");
            let Z;
            return Z = JSON.stringify((0, Q2.take)(A, {
                clientId: [],
                clientSecret: [],
                code: [],
                codeVerifier: [],
                deviceCode: [],
                grantType: [],
                redirectUri: [],
                refreshToken: [],
                scope: q6((I) => (0, Q2._json)(I), "scope")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateTokenCommand"),
        kQ8 = q6(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return yQ8(A, Q);
            let B = (0, Q2.map)({
                    $metadata: wL(A)
                }),
                G = (0, Q2.expectNonNull)((0, Q2.expectObject)(await (0, FO1.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, Q2.take)(G, {
                    accessToken: Q2.expectString,
                    expiresIn: Q2.expectInt32,
                    idToken: Q2.expectString,
                    refreshToken: Q2.expectString,
                    tokenType: Q2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateTokenCommand"),
        yQ8 = q6(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, FO1.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, FO1.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "AccessDeniedException":
                case "com.amazonaws.ssooidc#AccessDeniedException":
                    throw await vQ8(B, Q);
                case "AuthorizationPendingException":
                case "com.amazonaws.ssooidc#AuthorizationPendingException":
                    throw await bQ8(B, Q);
                case "ExpiredTokenException":
                case "com.amazonaws.ssooidc#ExpiredTokenException":
                    throw await fQ8(B, Q);
                case "InternalServerException":
                case "com.amazonaws.ssooidc#InternalServerException":
                    throw await hQ8(B, Q);
                case "InvalidClientException":
                case "com.amazonaws.ssooidc#InvalidClientException":
                    throw await gQ8(B, Q);
                case "InvalidGrantException":
                case "com.amazonaws.ssooidc#InvalidGrantException":
                    throw await uQ8(B, Q);
                case "InvalidRequestException":
                case "com.amazonaws.ssooidc#InvalidRequestException":
                    throw await mQ8(B, Q);
                case "InvalidScopeException":
                case "com.amazonaws.ssooidc#InvalidScopeException":
                    throw await dQ8(B, Q);
                case "SlowDownException":
                case "com.amazonaws.ssooidc#SlowDownException":
                    throw await cQ8(B, Q);
                case "UnauthorizedClientException":
                case "com.amazonaws.ssooidc#UnauthorizedClientException":
                    throw await pQ8(B, Q);
                case "UnsupportedGrantTypeException":
                case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
                    throw await lQ8(B, Q);
                default:
                    let Z = B.body;
                    return xQ8({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        xQ8 = (0, Q2.withBaseException)(zw),
        vQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new rwQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_AccessDeniedExceptionRes"),
        bQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new owQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_AuthorizationPendingExceptionRes"),
        fQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new AqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_ExpiredTokenExceptionRes"),
        hQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new QqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_InternalServerExceptionRes"),
        gQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new BqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_InvalidClientExceptionRes"),
        uQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new GqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_InvalidGrantExceptionRes"),
        mQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new ZqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        dQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new IqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_InvalidScopeExceptionRes"),
        cQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new YqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_SlowDownExceptionRes"),
        pQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new JqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedClientExceptionRes"),
        lQ8 = q6(async (A, Q) => {
            let B = (0, Q2.map)({}),
                G = A.body,
                Z = (0, Q2.take)(G, {
                    error: Q2.expectString,
                    error_description: Q2.expectString
                });
            Object.assign(B, Z);
            let I = new WqQ({
                $metadata: wL(A),
                ...B
            });
            return (0, Q2.decorateServiceException)(I, A.body)
        }, "de_UnsupportedGrantTypeExceptionRes"),
        wL = q6((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        XqQ = class extends swQ.Command.classBuilder().ep(qQ8).m(function(A, Q, B, G) {
            return [(0, PQ8.getSerdePlugin)(B, this.serialize, this.deserialize), (0, TQ8.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(twQ, ewQ).ser(_Q8).de(kQ8).build() {
            static {
                q6(this, "CreateTokenCommand")
            }
        },
        iQ8 = {
            CreateTokenCommand: XqQ
        },
        FqQ = class extends awQ {
            static {
                q6(this, "SSOOIDC")
            }
        };
    (0, RQ8.createAggregatedClient)(iQ8, FqQ)
});
var $qQ = U((DC7, UqQ) => {
    var {
        create: nQ8,
        defineProperty: qHA,
        getOwnPropertyDescriptor: aQ8,
        getOwnPropertyNames: sQ8,
        getPrototypeOf: rQ8
    } = Object, oQ8 = Object.prototype.hasOwnProperty, rv = (A, Q) => qHA(A, "name", {
        value: Q,
        configurable: !0
    }), tQ8 = (A, Q) => {
        for (var B in Q) qHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, HqQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of sQ8(Q))
                if (!oQ8.call(A, Z) && Z !== B) qHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = aQ8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, CqQ = (A, Q, B) => (B = A != null ? nQ8(rQ8(A)) : {}, HqQ(Q || !A || !A.__esModule ? qHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), eQ8 = (A) => HqQ(qHA({}, "__esModule", {
        value: !0
    }), A), EqQ = {};
    tQ8(EqQ, {
        fromEnvSigningName: () => BB8,
        fromSso: () => zqQ,
        fromStatic: () => XB8,
        nodeProvider: () => FB8
    });
    UqQ.exports = eQ8(EqQ);
    var AB8 = DL(),
        QB8 = nL1(),
        Uw = P2(),
        BB8 = rv(({
            logger: A,
            signingName: Q
        } = {}) => async () => {
            if (A?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !Q) throw new Uw.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
                logger: A
            });
            let B = (0, QB8.getBearerTokenEnvKey)(Q);
            if (!(B in process.env)) throw new Uw.TokenProviderError(`Token not present in '${B}' environment variable`, {
                logger: A
            });
            let G = {
                token: process.env[B]
            };
            return (0, AB8.setTokenFeature)(G, "BEARER_SERVICE_ENV_VARS", "3"), G
        }, "fromEnvSigningName"),
        GB8 = 300000,
        KO1 = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
        ZB8 = rv(async (A, Q = {}) => {
            let {
                SSOOIDCClient: B
            } = await Promise.resolve().then(() => CqQ(VO1()));
            return new B(Object.assign({}, Q.clientConfig ?? {}, {
                region: A ?? Q.clientConfig?.region,
                logger: Q.clientConfig?.logger ?? Q.parentClientConfig?.logger
            }))
        }, "getSsoOidcClient"),
        IB8 = rv(async (A, Q, B = {}) => {
            let {
                CreateTokenCommand: G
            } = await Promise.resolve().then(() => CqQ(VO1()));
            return (await ZB8(Q, B)).send(new G({
                clientId: A.clientId,
                clientSecret: A.clientSecret,
                refreshToken: A.refreshToken,
                grantType: "refresh_token"
            }))
        }, "getNewSsoOidcToken"),
        KqQ = rv((A) => {
            if (A.expiration && A.expiration.getTime() < Date.now()) throw new Uw.TokenProviderError(`Token is expired. ${KO1}`, !1)
        }, "validateTokenExpiry"),
        lr = rv((A, Q, B = !1) => {
            if (typeof Q > "u") throw new Uw.TokenProviderError(`Value not present for '${A}' in SSO Token${B?". Cannot refresh":""}. ${KO1}`, !1)
        }, "validateTokenKey"),
        wHA = NG(),
        YB8 = UA("fs"),
        {
            writeFile: JB8
        } = YB8.promises,
        WB8 = rv((A, Q) => {
            let B = (0, wHA.getSSOTokenFilepath)(A),
                G = JSON.stringify(Q, null, 2);
            return JB8(B, G)
        }, "writeSSOTokenToFile"),
        DqQ = new Date(0),
        zqQ = rv((A = {}) => async ({
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
            let G = await (0, wHA.parseKnownFiles)(B),
                Z = (0, wHA.getProfileName)({
                    profile: B.profile ?? Q?.profile
                }),
                I = G[Z];
            if (!I) throw new Uw.TokenProviderError(`Profile '${Z}' could not be found in shared credentials file.`, !1);
            else if (!I.sso_session) throw new Uw.TokenProviderError(`Profile '${Z}' is missing required property 'sso_session'.`);
            let Y = I.sso_session,
                W = (await (0, wHA.loadSsoSessionData)(B))[Y];
            if (!W) throw new Uw.TokenProviderError(`Sso session '${Y}' could not be found in shared credentials file.`, !1);
            for (let C of ["sso_start_url", "sso_region"])
                if (!W[C]) throw new Uw.TokenProviderError(`Sso session '${Y}' is missing required property '${C}'.`, !1);
            let {
                sso_start_url: X,
                sso_region: F
            } = W, V;
            try {
                V = await (0, wHA.getSSOTokenFromFile)(Y)
            } catch (C) {
                throw new Uw.TokenProviderError(`The SSO session token associated with profile=${Z} was not found or is invalid. ${KO1}`, !1)
            }
            lr("accessToken", V.accessToken), lr("expiresAt", V.expiresAt);
            let {
                accessToken: K,
                expiresAt: D
            } = V, H = {
                token: K,
                expiration: new Date(D)
            };
            if (H.expiration.getTime() - Date.now() > GB8) return H;
            if (Date.now() - DqQ.getTime() < 30000) return KqQ(H), H;
            lr("clientId", V.clientId, !0), lr("clientSecret", V.clientSecret, !0), lr("refreshToken", V.refreshToken, !0);
            try {
                DqQ.setTime(Date.now());
                let C = await IB8(V, F, B);
                lr("accessToken", C.accessToken), lr("expiresIn", C.expiresIn);
                let E = new Date(Date.now() + C.expiresIn * 1000);
                try {
                    await WB8(Y, {
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
                return KqQ(H), H
            }
        }, "fromSso"),
        XB8 = rv(({
            token: A,
            logger: Q
        }) => async () => {
            if (Q?.debug("@aws-sdk/token-providers - fromStatic"), !A || !A.token) throw new Uw.TokenProviderError("Please pass a valid token to fromStatic", !1);
            return A
        }, "fromStatic"),
        FB8 = rv((A = {}) => (0, Uw.memoize)((0, Uw.chain)(zqQ(A), async () => {
            throw new Uw.TokenProviderError("Could not load token from any providers", !1)
        }), (Q) => Q.expiration !== void 0 && Q.expiration.getTime() - Date.now() < 300000, (Q) => Q.expiration !== void 0), "nodeProvider")
});
var SuA = U((HC7, PqQ) => {
    var {
        defineProperty: PuA,
        getOwnPropertyDescriptor: VB8,
        getOwnPropertyNames: NqQ
    } = Object, KB8 = Object.prototype.hasOwnProperty, juA = (A, Q) => PuA(A, "name", {
        value: Q,
        configurable: !0
    }), DB8 = (A, Q) => function() {
        return A && (Q = (0, A[NqQ(A)[0]])(A = 0)), Q
    }, LqQ = (A, Q) => {
        for (var B in Q) PuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, HB8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of NqQ(Q))
                if (!KB8.call(A, Z) && Z !== B) PuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = VB8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, CB8 = (A) => HB8(PuA({}, "__esModule", {
        value: !0
    }), A), MqQ = {};
    LqQ(MqQ, {
        GetRoleCredentialsCommand: () => DO1.GetRoleCredentialsCommand,
        SSOClient: () => DO1.SSOClient
    });
    var DO1, EB8 = DB8({
            "src/loadSso.ts"() {
                DO1 = ZwQ()
            }
        }),
        OqQ = {};
    LqQ(OqQ, {
        fromSSO: () => UB8,
        isSsoProfile: () => RqQ,
        validateSsoProfile: () => TqQ
    });
    PqQ.exports = CB8(OqQ);
    var RqQ = juA((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        wqQ = DL(),
        zB8 = $qQ(),
        vR = P2(),
        TuA = NG(),
        NHA = !1,
        qqQ = juA(async ({
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
                let v = await (0, zB8.fromSso)({
                    profile: W
                })();
                F = {
                    accessToken: v.token,
                    expiresAt: new Date(v.expiration).toISOString()
                }
            } catch (v) {
                throw new vR.CredentialsProviderError(v.message, {
                    tryNextLink: NHA,
                    logger: X
                })
            } else try {
                F = await (0, TuA.getSSOTokenFromFile)(A)
            } catch (v) {
                throw new vR.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
                    tryNextLink: NHA,
                    logger: X
                })
            }
            if (new Date(F.expiresAt).getTime() - Date.now() <= 0) throw new vR.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
                tryNextLink: NHA,
                logger: X
            });
            let {
                accessToken: K
            } = F, {
                SSOClient: D,
                GetRoleCredentialsCommand: H
            } = await Promise.resolve().then(() => (EB8(), MqQ)), C = I || new D(Object.assign({}, Y ?? {}, {
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
                throw new vR.CredentialsProviderError(v, {
                    tryNextLink: NHA,
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
            if (!z || !w || !N || !q) throw new vR.CredentialsProviderError("SSO returns an invalid temporary credential.", {
                tryNextLink: NHA,
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
            if (Q)(0, wqQ.setCredentialFeature)(y, "CREDENTIALS_SSO", "s");
            else(0, wqQ.setCredentialFeature)(y, "CREDENTIALS_SSO_LEGACY", "u");
            return y
        }, "resolveSSOCredentials"),
        TqQ = juA((A, Q) => {
            let {
                sso_start_url: B,
                sso_account_id: G,
                sso_region: Z,
                sso_role_name: I
            } = A;
            if (!B || !G || !Z || !I) throw new vR.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(A).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
                tryNextLink: !1,
                logger: Q
            });
            return A
        }, "validateSsoProfile"),
        UB8 = juA((A = {}) => async ({
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
            } = A, W = (0, TuA.getProfileName)({
                profile: A.profile ?? Q?.profile
            });
            if (!B && !G && !Z && !I && !Y) {
                let F = (await (0, TuA.parseKnownFiles)(A))[W];
                if (!F) throw new vR.CredentialsProviderError(`Profile ${W} was not found.`, {
                    logger: A.logger
                });
                if (!RqQ(F)) throw new vR.CredentialsProviderError(`Profile ${W} is not configured with SSO credentials.`, {
                    logger: A.logger
                });
                if (F?.sso_session) {
                    let z = (await (0, TuA.loadSsoSessionData)(A))[F.sso_session],
                        w = ` configurations in profile ${W} and sso-session ${F.sso_session}`;
                    if (Z && Z !== z.sso_region) throw new vR.CredentialsProviderError("Conflicting SSO region" + w, {
                        tryNextLink: !1,
                        logger: A.logger
                    });
                    if (B && B !== z.sso_start_url) throw new vR.CredentialsProviderError("Conflicting SSO start_url" + w, {
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
                } = TqQ(F, A.logger);
                return qqQ({
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
            } else if (!B || !G || !Z || !I) throw new vR.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
                tryNextLink: !1,
                logger: A.logger
            });
            else return qqQ({
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
var HO1 = U((MS) => {
    var $B8 = MS && MS.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        wB8 = MS && MS.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        qB8 = MS && MS.__importStar || function() {
            var A = function(Q) {
                return A = Object.getOwnPropertyNames || function(B) {
                    var G = [];
                    for (var Z in B)
                        if (Object.prototype.hasOwnProperty.call(B, Z)) G[G.length] = Z;
                    return G
                }, A(Q)
            };
            return function(Q) {
                if (Q && Q.__esModule) return Q;
                var B = {};
                if (Q != null) {
                    for (var G = A(Q), Z = 0; Z < G.length; Z++)
                        if (G[Z] !== "default") $B8(B, Q, G[Z])
                }
                return wB8(B, Q), B
            }
        }();
    Object.defineProperty(MS, "__esModule", {
        value: !0
    });
    MS.fromWebToken = void 0;
    var NB8 = (A) => async (Q) => {
        A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
        let {
            roleArn: B,
            roleSessionName: G,
            webIdentityToken: Z,
            providerId: I,
            policyArns: Y,
            policy: J,
            durationSeconds: W
        } = A, {
            roleAssumerWithWebIdentity: X
        } = A;
        if (!X) {
            let {
                getDefaultRoleAssumerWithWebIdentity: F
            } = await Promise.resolve().then(() => qB8(DuA()));
            X = F({
                ...A.clientConfig,
                credentialProviderLogger: A.logger,
                parentClientConfig: {
                    ...Q?.callerClientConfig,
                    ...A.parentClientConfig
                }
            }, A.clientPlugins)
        }
        return X({
            RoleArn: B,
            RoleSessionName: G ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: Z,
            ProviderId: I,
            PolicyArns: Y,
            Policy: J,
            DurationSeconds: W
        })
    };
    MS.fromWebToken = NB8
});
var kqQ = U((SqQ) => {
    Object.defineProperty(SqQ, "__esModule", {
        value: !0
    });
    SqQ.fromTokenFile = void 0;
    var LB8 = DL(),
        MB8 = P2(),
        OB8 = UA("fs"),
        RB8 = HO1(),
        jqQ = "AWS_WEB_IDENTITY_TOKEN_FILE",
        TB8 = "AWS_ROLE_ARN",
        PB8 = "AWS_ROLE_SESSION_NAME",
        jB8 = (A = {}) => async () => {
            A.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
            let Q = A?.webIdentityTokenFile ?? process.env[jqQ],
                B = A?.roleArn ?? process.env[TB8],
                G = A?.roleSessionName ?? process.env[PB8];
            if (!Q || !B) throw new MB8.CredentialsProviderError("Web identity configuration not specified", {
                logger: A.logger
            });
            let Z = await (0, RB8.fromWebToken)({
                ...A,
                webIdentityToken: (0, OB8.readFileSync)(Q, {
                    encoding: "ascii"
                }),
                roleArn: B,
                roleSessionName: G
            })();
            if (Q === process.env[jqQ])(0, LB8.setCredentialFeature)(Z, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
            return Z
        };
    SqQ.fromTokenFile = jB8
});
var LHA = U((zC7, _uA) => {
    var {
        defineProperty: yqQ,
        getOwnPropertyDescriptor: SB8,
        getOwnPropertyNames: _B8
    } = Object, kB8 = Object.prototype.hasOwnProperty, CO1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of _B8(Q))
                if (!kB8.call(A, Z) && Z !== B) yqQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = SB8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, xqQ = (A, Q, B) => (CO1(A, Q, "default"), B && CO1(B, Q, "default")), yB8 = (A) => CO1(yqQ({}, "__esModule", {
        value: !0
    }), A), EO1 = {};
    _uA.exports = yB8(EO1);
    xqQ(EO1, kqQ(), _uA.exports);
    xqQ(EO1, HO1(), _uA.exports)
});
var $O1 = U((UC7, mqQ) => {
    var {
        create: xB8,
        defineProperty: OHA,
        getOwnPropertyDescriptor: vB8,
        getOwnPropertyNames: bB8,
        getPrototypeOf: fB8
    } = Object, hB8 = Object.prototype.hasOwnProperty, RX = (A, Q) => OHA(A, "name", {
        value: Q,
        configurable: !0
    }), gB8 = (A, Q) => {
        for (var B in Q) OHA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, hqQ = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bB8(Q))
                if (!hB8.call(A, Z) && Z !== B) OHA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = vB8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, qd = (A, Q, B) => (B = A != null ? xB8(fB8(A)) : {}, hqQ(Q || !A || !A.__esModule ? OHA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), uB8 = (A) => hqQ(OHA({}, "__esModule", {
        value: !0
    }), A), gqQ = {};
    gB8(gqQ, {
        fromIni: () => tB8
    });
    mqQ.exports = uB8(gqQ);
    var UO1 = NG(),
        Nd = DL(),
        MHA = P2(),
        mB8 = RX((A, Q, B) => {
            let G = {
                EcsContainer: RX(async (Z) => {
                    let {
                        fromHttp: I
                    } = await Promise.resolve().then(() => qd(ygA())), {
                        fromContainerMetadata: Y
                    } = await Promise.resolve().then(() => qd(wF()));
                    return B?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"), async () => (0, MHA.chain)(I(Z ?? {}), Y(Z))().then(zO1)
                }, "EcsContainer"),
                Ec2InstanceMetadata: RX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
                    let {
                        fromInstanceMetadata: I
                    } = await Promise.resolve().then(() => qd(wF()));
                    return async () => I(Z)().then(zO1)
                }, "Ec2InstanceMetadata"),
                Environment: RX(async (Z) => {
                    B?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
                    let {
                        fromEnv: I
                    } = await Promise.resolve().then(() => qd(vgA()));
                    return async () => I(Z)().then(zO1)
                }, "Environment")
            };
            if (A in G) return G[A];