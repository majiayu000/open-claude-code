/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.894Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 9/61
 * Lines: 73284 - 74778 (1495 lines)
 * Original file: cli.js
 */

    function pT4(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var lT4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "CreateToken": {
                Q.push(pT4(A));
                break
            }
            default:
                Q.push(cT4(A))
        }
        return Q
    };
    i4Q.defaultSSOOIDCHttpAuthSchemeProvider = lT4;
    var iT4 = (A) => {
        let Q = (0, mT4.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, G$1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    i4Q.resolveHttpAuthSchemeConfig = iT4
});
var I$1 = U((tX7, sT4) => {
    sT4.exports = {
        name: "@aws-sdk/nested-clients",
        version: "3.840.0",
        description: "Nested clients for AWS SDK packages.",
        main: "./dist-cjs/index.js",
        module: "./dist-es/index.js",
        types: "./dist-types/index.d.ts",
        scripts: {
            build: "yarn lint && concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline nested-clients",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
            test: "yarn g:vitest run",
            "test:watch": "yarn g:vitest watch"
        },
        engines: {
            node: ">=18.0.0"
        },
        author: {
            name: "AWS SDK for JavaScript Team",
            url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.840.0",
            "@aws-sdk/middleware-host-header": "3.840.0",
            "@aws-sdk/middleware-logger": "3.840.0",
            "@aws-sdk/middleware-recursion-detection": "3.840.0",
            "@aws-sdk/middleware-user-agent": "3.840.0",
            "@aws-sdk/region-config-resolver": "3.840.0",
            "@aws-sdk/types": "3.840.0",
            "@aws-sdk/util-endpoints": "3.840.0",
            "@aws-sdk/util-user-agent-browser": "3.840.0",
            "@aws-sdk/util-user-agent-node": "3.840.0",
            "@smithy/config-resolver": "^4.1.4",
            "@smithy/core": "^3.6.0",
            "@smithy/fetch-http-handler": "^5.0.4",
            "@smithy/hash-node": "^4.0.4",
            "@smithy/invalid-dependency": "^4.0.4",
            "@smithy/middleware-content-length": "^4.0.4",
            "@smithy/middleware-endpoint": "^4.1.13",
            "@smithy/middleware-retry": "^4.1.14",
            "@smithy/middleware-serde": "^4.0.8",
            "@smithy/middleware-stack": "^4.0.4",
            "@smithy/node-config-provider": "^4.1.3",
            "@smithy/node-http-handler": "^4.0.6",
            "@smithy/protocol-http": "^5.1.2",
            "@smithy/smithy-client": "^4.4.5",
            "@smithy/types": "^4.3.1",
            "@smithy/url-parser": "^4.0.4",
            "@smithy/util-base64": "^4.0.0",
            "@smithy/util-body-length-browser": "^4.0.0",
            "@smithy/util-body-length-node": "^4.0.0",
            "@smithy/util-defaults-mode-browser": "^4.0.21",
            "@smithy/util-defaults-mode-node": "^4.0.21",
            "@smithy/util-endpoints": "^3.0.6",
            "@smithy/util-middleware": "^4.0.4",
            "@smithy/util-retry": "^4.0.6",
            "@smithy/util-utf8": "^4.0.0",
            tslib: "^2.6.2"
        },
        devDependencies: {
            concurrently: "7.0.0",
            "downlevel-dts": "0.10.1",
            rimraf: "3.0.2",
            typescript: "~5.8.3"
        },
        typesVersions: {
            "<4.0": {
                "dist-types/*": ["dist-types/ts3.4/*"]
            }
        },
        files: ["./sso-oidc.d.ts", "./sso-oidc.js", "./sts.d.ts", "./sts.js", "dist-*/**"],
        browser: {
            "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
            "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser"
        },
        "react-native": {},
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "packages/nested-clients"
        },
        exports: {
            "./sso-oidc": {
                types: "./dist-types/submodules/sso-oidc/index.d.ts",
                module: "./dist-es/submodules/sso-oidc/index.js",
                node: "./dist-cjs/submodules/sso-oidc/index.js",
                import: "./dist-es/submodules/sso-oidc/index.js",
                require: "./dist-cjs/submodules/sso-oidc/index.js"
            },
            "./sts": {
                types: "./dist-types/submodules/sts/index.d.ts",
                module: "./dist-es/submodules/sts/index.js",
                node: "./dist-cjs/submodules/sts/index.js",
                import: "./dist-es/submodules/sts/index.js",
                require: "./dist-cjs/submodules/sts/index.js"
            }
        }
    }
});
var F8Q = U((W8Q) => {
    Object.defineProperty(W8Q, "__esModule", {
        value: !0
    });
    W8Q.ruleSet = void 0;
    var Z8Q = "required",
        AL = "fn",
        QL = "argv",
        v4A = "ref",
        a4Q = !0,
        s4Q = "isSet",
        TDA = "booleanEquals",
        y4A = "error",
        x4A = "endpoint",
        Ev = "tree",
        Y$1 = "PartitionResult",
        J$1 = "getAttr",
        r4Q = {
            [Z8Q]: !1,
            type: "String"
        },
        o4Q = {
            [Z8Q]: !0,
            default: !1,
            type: "Boolean"
        },
        t4Q = {
            [v4A]: "Endpoint"
        },
        I8Q = {
            [AL]: TDA,
            [QL]: [{
                [v4A]: "UseFIPS"
            }, !0]
        },
        Y8Q = {
            [AL]: TDA,
            [QL]: [{
                [v4A]: "UseDualStack"
            }, !0]
        },
        eN = {},
        e4Q = {
            [AL]: J$1,
            [QL]: [{
                [v4A]: Y$1
            }, "supportsFIPS"]
        },
        J8Q = {
            [v4A]: Y$1
        },
        A8Q = {
            [AL]: TDA,
            [QL]: [!0, {
                [AL]: J$1,
                [QL]: [J8Q, "supportsDualStack"]
            }]
        },
        Q8Q = [I8Q],
        B8Q = [Y8Q],
        G8Q = [{
            [v4A]: "Region"
        }],
        rT4 = {
            version: "1.0",
            parameters: {
                Region: r4Q,
                UseDualStack: o4Q,
                UseFIPS: o4Q,
                Endpoint: r4Q
            },
            rules: [{
                conditions: [{
                    [AL]: s4Q,
                    [QL]: [t4Q]
                }],
                rules: [{
                    conditions: Q8Q,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: y4A
                }, {
                    conditions: B8Q,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: y4A
                }, {
                    endpoint: {
                        url: t4Q,
                        properties: eN,
                        headers: eN
                    },
                    type: x4A
                }],
                type: Ev
            }, {
                conditions: [{
                    [AL]: s4Q,
                    [QL]: G8Q
                }],
                rules: [{
                    conditions: [{
                        [AL]: "aws.partition",
                        [QL]: G8Q,
                        assign: Y$1
                    }],
                    rules: [{
                        conditions: [I8Q, Y8Q],
                        rules: [{
                            conditions: [{
                                [AL]: TDA,
                                [QL]: [a4Q, e4Q]
                            }, A8Q],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: eN,
                                    headers: eN
                                },
                                type: x4A
                            }],
                            type: Ev
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: y4A
                        }],
                        type: Ev
                    }, {
                        conditions: Q8Q,
                        rules: [{
                            conditions: [{
                                [AL]: TDA,
                                [QL]: [e4Q, a4Q]
                            }],
                            rules: [{
                                conditions: [{
                                    [AL]: "stringEquals",
                                    [QL]: [{
                                        [AL]: J$1,
                                        [QL]: [J8Q, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://oidc.{Region}.amazonaws.com",
                                    properties: eN,
                                    headers: eN
                                },
                                type: x4A
                            }, {
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: eN,
                                    headers: eN
                                },
                                type: x4A
                            }],
                            type: Ev
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: y4A
                        }],
                        type: Ev
                    }, {
                        conditions: B8Q,
                        rules: [{
                            conditions: [A8Q],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: eN,
                                    headers: eN
                                },
                                type: x4A
                            }],
                            type: Ev
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: y4A
                        }],
                        type: Ev
                    }, {
                        endpoint: {
                            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
                            properties: eN,
                            headers: eN
                        },
                        type: x4A
                    }],
                    type: Ev
                }],
                type: Ev
            }, {
                error: "Invalid Configuration: Missing Region",
                type: y4A
            }]
        };
    W8Q.ruleSet = rT4
});
var D8Q = U((V8Q) => {
    Object.defineProperty(V8Q, "__esModule", {
        value: !0
    });
    V8Q.defaultEndpointResolver = void 0;
    var oT4 = U4A(),
        W$1 = II(),
        tT4 = F8Q(),
        eT4 = new W$1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        AP4 = (A, Q = {}) => {
            return eT4.get(A, () => (0, W$1.resolveEndpoint)(tT4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    V8Q.defaultEndpointResolver = AP4;
    W$1.customEndpointFunctions.aws = oT4.awsEndpointFunctions
});
var U8Q = U((E8Q) => {
    Object.defineProperty(E8Q, "__esModule", {
        value: !0
    });
    E8Q.getRuntimeConfig = void 0;
    var QP4 = wV(),
        BP4 = nB(),
        GP4 = W6(),
        ZP4 = zJ(),
        H8Q = lm(),
        C8Q = L2(),
        IP4 = Z$1(),
        YP4 = D8Q(),
        JP4 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? H8Q.fromBase64,
                base64Encoder: A?.base64Encoder ?? H8Q.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? YP4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? IP4.defaultSSOOIDCHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new QP4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new BP4.NoAuthSigner
                }],
                logger: A?.logger ?? new GP4.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO OIDC",
                urlParser: A?.urlParser ?? ZP4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? C8Q.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? C8Q.toUtf8
            }
        };
    E8Q.getRuntimeConfig = JP4
});
var O8Q = U((L8Q) => {
    Object.defineProperty(L8Q, "__esModule", {
        value: !0
    });
    L8Q.getRuntimeConfig = void 0;
    var WP4 = Vr(),
        XP4 = WP4.__importDefault(I$1()),
        $8Q = wV(),
        w8Q = qDA(),
        IhA = S8(),
        FP4 = wX(),
        q8Q = X6(),
        qr = xI(),
        N8Q = oG(),
        VP4 = qX(),
        KP4 = FW(),
        DP4 = U8Q(),
        HP4 = W6(),
        CP4 = NX(),
        EP4 = W6(),
        zP4 = (A) => {
            (0, EP4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, CP4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(HP4.loadConfigsForDefaultMode),
                G = (0, DP4.getRuntimeConfig)(A);
            (0, $8Q.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, qr.loadConfig)($8Q.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? VP4.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, w8Q.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: XP4.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, qr.loadConfig)(q8Q.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, qr.loadConfig)(IhA.NODE_REGION_CONFIG_OPTIONS, {
                    ...IhA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: N8Q.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, qr.loadConfig)({
                    ...q8Q.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || KP4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? FP4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? N8Q.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, qr.loadConfig)(IhA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, qr.loadConfig)(IhA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, qr.loadConfig)(w8Q.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    L8Q.getRuntimeConfig = zP4
});
var V$1 = U((GF7, t8Q) => {
    var {
        defineProperty: YhA,
        getOwnPropertyDescriptor: UP4,
        getOwnPropertyNames: $P4
    } = Object, wP4 = Object.prototype.hasOwnProperty, $6 = (A, Q) => YhA(A, "name", {
        value: Q,
        configurable: !0
    }), qP4 = (A, Q) => {
        for (var B in Q) YhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, NP4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of $P4(Q))
                if (!wP4.call(A, Z) && Z !== B) YhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = UP4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, LP4 = (A) => NP4(YhA({}, "__esModule", {
        value: !0
    }), A), y8Q = {};
    qP4(y8Q, {
        $Command: () => b8Q.Command,
        AccessDeniedException: () => f8Q,
        AuthorizationPendingException: () => h8Q,
        CreateTokenCommand: () => r8Q,
        CreateTokenRequestFilterSensitiveLog: () => g8Q,
        CreateTokenResponseFilterSensitiveLog: () => u8Q,
        ExpiredTokenException: () => m8Q,
        InternalServerException: () => d8Q,
        InvalidClientException: () => c8Q,
        InvalidGrantException: () => p8Q,
        InvalidRequestException: () => l8Q,
        InvalidScopeException: () => i8Q,
        SSOOIDC: () => o8Q,
        SSOOIDCClient: () => v8Q,
        SSOOIDCServiceException: () => Yw,
        SlowDownException: () => n8Q,
        UnauthorizedClientException: () => a8Q,
        UnsupportedGrantTypeException: () => s8Q,
        __Client: () => x8Q.Client
    });
    t8Q.exports = LP4(y8Q);
    var R8Q = lKA(),
        MP4 = iKA(),
        OP4 = nKA(),
        T8Q = M4A(),
        RP4 = S8(),
        X$1 = nB(),
        TP4 = zX(),
        PP4 = E5(),
        P8Q = X6(),
        x8Q = W6(),
        j8Q = Z$1(),
        jP4 = $6((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "sso-oauth"
            })
        }, "resolveClientEndpointParameters"),
        SP4 = {
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
        _P4 = O8Q(),
        S8Q = MDA(),
        _8Q = cC(),
        k8Q = W6(),
        kP4 = $6((A) => {
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
        yP4 = $6((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        xP4 = $6((A, Q) => {
            let B = Object.assign((0, S8Q.getAwsRegionExtensionConfiguration)(A), (0, k8Q.getDefaultExtensionConfiguration)(A), (0, _8Q.getHttpHandlerExtensionConfiguration)(A), kP4(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, S8Q.resolveAwsRegionExtensionConfiguration)(B), (0, k8Q.resolveDefaultRuntimeConfig)(B), (0, _8Q.resolveHttpHandlerRuntimeConfig)(B), yP4(B))
        }, "resolveRuntimeExtensions"),
        v8Q = class extends x8Q.Client {
            static {
                $6(this, "SSOOIDCClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, _P4.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = jP4(Q),
                    G = (0, T8Q.resolveUserAgentConfig)(B),
                    Z = (0, P8Q.resolveRetryConfig)(G),
                    I = (0, RP4.resolveRegionConfig)(Z),
                    Y = (0, R8Q.resolveHostHeaderConfig)(I),
                    J = (0, PP4.resolveEndpointConfig)(Y),
                    W = (0, j8Q.resolveHttpAuthSchemeConfig)(J),
                    X = xP4(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, T8Q.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, P8Q.getRetryPlugin)(this.config)), this.middlewareStack.use((0, TP4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, R8Q.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, MP4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, OP4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, X$1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: j8Q.defaultSSOOIDCHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: $6(async (F) => new X$1.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, X$1.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        vP4 = W6(),
        bP4 = E5(),
        fP4 = sG(),
        b8Q = W6(),
        b4A = W6(),
        hP4 = W6(),
        Yw = class A extends hP4.ServiceException {
            static {
                $6(this, "SSOOIDCServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        f8Q = class A extends Yw {
            static {
                $6(this, "AccessDeniedException")
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
        h8Q = class A extends Yw {
            static {
                $6(this, "AuthorizationPendingException")
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
        g8Q = $6((A) => ({
            ...A,
            ...A.clientSecret && {
                clientSecret: b4A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: b4A.SENSITIVE_STRING
            },
            ...A.codeVerifier && {
                codeVerifier: b4A.SENSITIVE_STRING
            }
        }), "CreateTokenRequestFilterSensitiveLog"),
        u8Q = $6((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: b4A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: b4A.SENSITIVE_STRING
            },
            ...A.idToken && {
                idToken: b4A.SENSITIVE_STRING
            }
        }), "CreateTokenResponseFilterSensitiveLog"),
        m8Q = class A extends Yw {
            static {
                $6(this, "ExpiredTokenException")
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
        d8Q = class A extends Yw {
            static {
                $6(this, "InternalServerException")
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
        c8Q = class A extends Yw {
            static {
                $6(this, "InvalidClientException")
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
        p8Q = class A extends Yw {
            static {
                $6(this, "InvalidGrantException")
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
        l8Q = class A extends Yw {
            static {
                $6(this, "InvalidRequestException")
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
        i8Q = class A extends Yw {
            static {
                $6(this, "InvalidScopeException")
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
        n8Q = class A extends Yw {
            static {
                $6(this, "SlowDownException")
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
        a8Q = class A extends Yw {
            static {
                $6(this, "UnauthorizedClientException")
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
        s8Q = class A extends Yw {
            static {
                $6(this, "UnsupportedGrantTypeException")
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
        F$1 = wV(),
        gP4 = nB(),
        eB = W6(),
        uP4 = $6(async (A, Q) => {
            let B = (0, gP4.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/token");
            let Z;
            return Z = JSON.stringify((0, eB.take)(A, {
                clientId: [],
                clientSecret: [],
                code: [],
                codeVerifier: [],
                deviceCode: [],
                grantType: [],
                redirectUri: [],
                refreshToken: [],
                scope: $6((I) => (0, eB._json)(I), "scope")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateTokenCommand"),
        mP4 = $6(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return dP4(A, Q);
            let B = (0, eB.map)({
                    $metadata: BL(A)
                }),
                G = (0, eB.expectNonNull)((0, eB.expectObject)(await (0, F$1.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, eB.take)(G, {
                    accessToken: eB.expectString,
                    expiresIn: eB.expectInt32,
                    idToken: eB.expectString,
                    refreshToken: eB.expectString,
                    tokenType: eB.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateTokenCommand"),
        dP4 = $6(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, F$1.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, F$1.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "AccessDeniedException":
                case "com.amazonaws.ssooidc#AccessDeniedException":
                    throw await pP4(B, Q);
                case "AuthorizationPendingException":
                case "com.amazonaws.ssooidc#AuthorizationPendingException":
                    throw await lP4(B, Q);
                case "ExpiredTokenException":
                case "com.amazonaws.ssooidc#ExpiredTokenException":
                    throw await iP4(B, Q);
                case "InternalServerException":
                case "com.amazonaws.ssooidc#InternalServerException":
                    throw await nP4(B, Q);
                case "InvalidClientException":
                case "com.amazonaws.ssooidc#InvalidClientException":
                    throw await aP4(B, Q);
                case "InvalidGrantException":
                case "com.amazonaws.ssooidc#InvalidGrantException":
                    throw await sP4(B, Q);
                case "InvalidRequestException":
                case "com.amazonaws.ssooidc#InvalidRequestException":
                    throw await rP4(B, Q);
                case "InvalidScopeException":
                case "com.amazonaws.ssooidc#InvalidScopeException":
                    throw await oP4(B, Q);
                case "SlowDownException":
                case "com.amazonaws.ssooidc#SlowDownException":
                    throw await tP4(B, Q);
                case "UnauthorizedClientException":
                case "com.amazonaws.ssooidc#UnauthorizedClientException":
                    throw await eP4(B, Q);
                case "UnsupportedGrantTypeException":
                case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
                    throw await Aj4(B, Q);
                default:
                    let Z = B.body;
                    return cP4({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        cP4 = (0, eB.withBaseException)(Yw),
        pP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new f8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_AccessDeniedExceptionRes"),
        lP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new h8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_AuthorizationPendingExceptionRes"),
        iP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new m8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_ExpiredTokenExceptionRes"),
        nP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new d8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_InternalServerExceptionRes"),
        aP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new c8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_InvalidClientExceptionRes"),
        sP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new p8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_InvalidGrantExceptionRes"),
        rP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new l8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        oP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new i8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_InvalidScopeExceptionRes"),
        tP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new n8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_SlowDownExceptionRes"),
        eP4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new a8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedClientExceptionRes"),
        Aj4 = $6(async (A, Q) => {
            let B = (0, eB.map)({}),
                G = A.body,
                Z = (0, eB.take)(G, {
                    error: eB.expectString,
                    error_description: eB.expectString
                });
            Object.assign(B, Z);
            let I = new s8Q({
                $metadata: BL(A),
                ...B
            });
            return (0, eB.decorateServiceException)(I, A.body)
        }, "de_UnsupportedGrantTypeExceptionRes"),
        BL = $6((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        r8Q = class extends b8Q.Command.classBuilder().ep(SP4).m(function(A, Q, B, G) {
            return [(0, fP4.getSerdePlugin)(B, this.serialize, this.deserialize), (0, bP4.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("AWSSSOOIDCService", "CreateToken", {}).n("SSOOIDCClient", "CreateTokenCommand").f(g8Q, u8Q).ser(uP4).de(mP4).build() {
            static {
                $6(this, "CreateTokenCommand")
            }
        },
        Qj4 = {
            CreateTokenCommand: r8Q
        },
        o8Q = class extends v8Q {
            static {
                $6(this, "SSOOIDC")
            }
        };
    (0, vP4.createAggregatedClient)(Qj4, o8Q)
});
var Y6Q = U((JF7, I6Q) => {
    var {
        create: Bj4,
        defineProperty: jDA,
        getOwnPropertyDescriptor: Gj4,
        getOwnPropertyNames: Zj4,
        getPrototypeOf: Ij4
    } = Object, Yj4 = Object.prototype.hasOwnProperty, zv = (A, Q) => jDA(A, "name", {
        value: Q,
        configurable: !0
    }), Jj4 = (A, Q) => {
        for (var B in Q) jDA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Q6Q = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Zj4(Q))
                if (!Yj4.call(A, Z) && Z !== B) jDA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Gj4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, B6Q = (A, Q, B) => (B = A != null ? Bj4(Ij4(A)) : {}, Q6Q(Q || !A || !A.__esModule ? jDA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), Wj4 = (A) => Q6Q(jDA({}, "__esModule", {
        value: !0
    }), A), G6Q = {};
    Jj4(G6Q, {
        fromEnvSigningName: () => Vj4,
        fromSso: () => Z6Q,
        fromStatic: () => Uj4,
        nodeProvider: () => $j4
    });
    I6Q.exports = Wj4(G6Q);
    var Xj4 = lN(),
        Fj4 = jz1(),
        Jw = P2(),
        Vj4 = zv(({
            logger: A,
            signingName: Q
        } = {}) => async () => {
            if (A?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !Q) throw new Jw.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
                logger: A
            });
            let B = (0, Fj4.getBearerTokenEnvKey)(Q);
            if (!(B in process.env)) throw new Jw.TokenProviderError(`Token not present in '${B}' environment variable`, {
                logger: A
            });
            let G = {
                token: process.env[B]
            };
            return (0, Xj4.setTokenFeature)(G, "BEARER_SERVICE_ENV_VARS", "3"), G
        }, "fromEnvSigningName"),
        Kj4 = 300000,
        K$1 = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
        Dj4 = zv(async (A, Q = {}) => {
            let {
                SSOOIDCClient: B
            } = await Promise.resolve().then(() => B6Q(V$1()));
            return new B(Object.assign({}, Q.clientConfig ?? {}, {
                region: A ?? Q.clientConfig?.region,
                logger: Q.clientConfig?.logger ?? Q.parentClientConfig?.logger
            }))
        }, "getSsoOidcClient"),
        Hj4 = zv(async (A, Q, B = {}) => {
            let {
                CreateTokenCommand: G
            } = await Promise.resolve().then(() => B6Q(V$1()));
            return (await Dj4(Q, B)).send(new G({
                clientId: A.clientId,
                clientSecret: A.clientSecret,
                refreshToken: A.refreshToken,
                grantType: "refresh_token"
            }))
        }, "getNewSsoOidcToken"),
        e8Q = zv((A) => {
            if (A.expiration && A.expiration.getTime() < Date.now()) throw new Jw.TokenProviderError(`Token is expired. ${K$1}`, !1)
        }, "validateTokenExpiry"),
        Nr = zv((A, Q, B = !1) => {
            if (typeof Q > "u") throw new Jw.TokenProviderError(`Value not present for '${A}' in SSO Token${B?". Cannot refresh":""}. ${K$1}`, !1)
        }, "validateTokenKey"),
        PDA = NG(),
        Cj4 = UA("fs"),
        {
            writeFile: Ej4
        } = Cj4.promises,
        zj4 = zv((A, Q) => {
            let B = (0, PDA.getSSOTokenFilepath)(A),
                G = JSON.stringify(Q, null, 2);
            return Ej4(B, G)
        }, "writeSSOTokenToFile"),
        A6Q = new Date(0),
        Z6Q = zv((A = {}) => async ({
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
            let G = await (0, PDA.parseKnownFiles)(B),
                Z = (0, PDA.getProfileName)({
                    profile: B.profile ?? Q?.profile
                }),
                I = G[Z];
            if (!I) throw new Jw.TokenProviderError(`Profile '${Z}' could not be found in shared credentials file.`, !1);
            else if (!I.sso_session) throw new Jw.TokenProviderError(`Profile '${Z}' is missing required property 'sso_session'.`);
            let Y = I.sso_session,
                W = (await (0, PDA.loadSsoSessionData)(B))[Y];
            if (!W) throw new Jw.TokenProviderError(`Sso session '${Y}' could not be found in shared credentials file.`, !1);
            for (let C of ["sso_start_url", "sso_region"])
                if (!W[C]) throw new Jw.TokenProviderError(`Sso session '${Y}' is missing required property '${C}'.`, !1);
            let {
                sso_start_url: X,
                sso_region: F
            } = W, V;
            try {
                V = await (0, PDA.getSSOTokenFromFile)(Y)
            } catch (C) {
                throw new Jw.TokenProviderError(`The SSO session token associated with profile=${Z} was not found or is invalid. ${K$1}`, !1)
            }
            Nr("accessToken", V.accessToken), Nr("expiresAt", V.expiresAt);
            let {
                accessToken: K,
                expiresAt: D
            } = V, H = {
                token: K,
                expiration: new Date(D)
            };
            if (H.expiration.getTime() - Date.now() > Kj4) return H;
            if (Date.now() - A6Q.getTime() < 30000) return e8Q(H), H;
            Nr("clientId", V.clientId, !0), Nr("clientSecret", V.clientSecret, !0), Nr("refreshToken", V.refreshToken, !0);
            try {
                A6Q.setTime(Date.now());
                let C = await Hj4(V, F, B);
                Nr("accessToken", C.accessToken), Nr("expiresIn", C.expiresIn);
                let E = new Date(Date.now() + C.expiresIn * 1000);
                try {
                    await zj4(Y, {
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
                return e8Q(H), H
            }
        }, "fromSso"),
        Uj4 = zv(({
            token: A,
            logger: Q
        }) => async () => {
            if (Q?.debug("@aws-sdk/token-providers - fromStatic"), !A || !A.token) throw new Jw.TokenProviderError("Please pass a valid token to fromStatic", !1);
            return A
        }, "fromStatic"),
        $j4 = zv((A = {}) => (0, Jw.memoize)((0, Jw.chain)(Z6Q(A), async () => {
            throw new Jw.TokenProviderError("Could not load token from any providers", !1)
        }), (Q) => Q.expiration !== void 0 && Q.expiration.getTime() - Date.now() < 300000, (Q) => Q.expiration !== void 0), "nodeProvider")
});
var H$1 = U((WF7, C6Q) => {
    var {
        defineProperty: WhA,
        getOwnPropertyDescriptor: wj4,
        getOwnPropertyNames: X6Q
    } = Object, qj4 = Object.prototype.hasOwnProperty, XhA = (A, Q) => WhA(A, "name", {
        value: Q,
        configurable: !0
    }), Nj4 = (A, Q) => function() {
        return A && (Q = (0, A[X6Q(A)[0]])(A = 0)), Q
    }, F6Q = (A, Q) => {
        for (var B in Q) WhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Lj4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of X6Q(Q))
                if (!qj4.call(A, Z) && Z !== B) WhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = wj4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Mj4 = (A) => Lj4(WhA({}, "__esModule", {
        value: !0
    }), A), V6Q = {};
    F6Q(V6Q, {
        GetRoleCredentialsCommand: () => D$1.GetRoleCredentialsCommand,
        SSOClient: () => D$1.SSOClient
    });
    var D$1, Oj4 = Nj4({
            "src/loadSso.ts"() {
                D$1 = l4Q()
            }
        }),
        K6Q = {};
    F6Q(K6Q, {
        fromSSO: () => Tj4,
        isSsoProfile: () => D6Q,
        validateSsoProfile: () => H6Q
    });
    C6Q.exports = Mj4(K6Q);
    var D6Q = XhA((A) => A && (typeof A.sso_start_url === "string" || typeof A.sso_account_id === "string" || typeof A.sso_session === "string" || typeof A.sso_region === "string" || typeof A.sso_role_name === "string"), "isSsoProfile"),
        J6Q = lN(),
        Rj4 = Y6Q(),
        kR = P2(),
        JhA = NG(),
        SDA = !1,
        W6Q = XhA(async ({
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
                let v = await (0, Rj4.fromSso)({
                    profile: W
                })();
                F = {
                    accessToken: v.token,
                    expiresAt: new Date(v.expiration).toISOString()
                }
            } catch (v) {
                throw new kR.CredentialsProviderError(v.message, {
                    tryNextLink: SDA,
                    logger: X
                })
            } else try {
                F = await (0, JhA.getSSOTokenFromFile)(A)
            } catch (v) {
                throw new kR.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
                    tryNextLink: SDA,
                    logger: X
                })
            }
            if (new Date(F.expiresAt).getTime() - Date.now() <= 0) throw new kR.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
                tryNextLink: SDA,
                logger: X
            });
            let {
                accessToken: K
            } = F, {
                SSOClient: D,
                GetRoleCredentialsCommand: H
            } = await Promise.resolve().then(() => (Oj4(), V6Q)), C = I || new D(Object.assign({}, Y ?? {}, {
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
                throw new kR.CredentialsProviderError(v, {
                    tryNextLink: SDA,
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
            if (!z || !w || !N || !q) throw new kR.CredentialsProviderError("SSO returns an invalid temporary credential.", {
                tryNextLink: SDA,
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
            if (Q)(0, J6Q.setCredentialFeature)(y, "CREDENTIALS_SSO", "s");
            else(0, J6Q.setCredentialFeature)(y, "CREDENTIALS_SSO_LEGACY", "u");
            return y
        }, "resolveSSOCredentials"),
        H6Q = XhA((A, Q) => {
            let {
                sso_start_url: B,
                sso_account_id: G,
                sso_region: Z,
                sso_role_name: I
            } = A;
            if (!B || !G || !Z || !I) throw new kR.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(A).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
                tryNextLink: !1,
                logger: Q
            });
            return A
        }, "validateSsoProfile"),
        Tj4 = XhA((A = {}) => async ({
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
            } = A, W = (0, JhA.getProfileName)({
                profile: A.profile ?? Q?.profile
            });
            if (!B && !G && !Z && !I && !Y) {
                let F = (await (0, JhA.parseKnownFiles)(A))[W];
                if (!F) throw new kR.CredentialsProviderError(`Profile ${W} was not found.`, {
                    logger: A.logger
                });
                if (!D6Q(F)) throw new kR.CredentialsProviderError(`Profile ${W} is not configured with SSO credentials.`, {
                    logger: A.logger
                });
                if (F?.sso_session) {
                    let z = (await (0, JhA.loadSsoSessionData)(A))[F.sso_session],
                        w = ` configurations in profile ${W} and sso-session ${F.sso_session}`;
                    if (Z && Z !== z.sso_region) throw new kR.CredentialsProviderError("Conflicting SSO region" + w, {
                        tryNextLink: !1,
                        logger: A.logger
                    });
                    if (B && B !== z.sso_start_url) throw new kR.CredentialsProviderError("Conflicting SSO start_url" + w, {
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
                } = H6Q(F, A.logger);
                return W6Q({
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
            } else if (!B || !G || !Z || !I) throw new kR.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
                tryNextLink: !1,
                logger: A.logger
            });
            else return W6Q({
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
var E$1 = U((E6Q) => {
    Object.defineProperty(E6Q, "__esModule", {
        value: !0
    });
    E6Q.resolveHttpAuthSchemeConfig = E6Q.resolveStsAuthConfig = E6Q.defaultSTSHttpAuthSchemeProvider = E6Q.defaultSTSHttpAuthSchemeParametersProvider = void 0;