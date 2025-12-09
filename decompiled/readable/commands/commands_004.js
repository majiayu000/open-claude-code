/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.945Z
 */

/**
 * Claude Code Decompiled
 * Category: commands
 * File: 4/8
 * Lines: 104690 - 106183 (1494 lines)
 * Original file: cli.js
 */

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
        d38 = w5((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        c38 = w5((A, Q) => {
            let B = Object.assign((0, rRQ.getAwsRegionExtensionConfiguration)(A), (0, X2.getDefaultExtensionConfiguration)(A), (0, oRQ.getHttpHandlerExtensionConfiguration)(A), m38(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, rRQ.resolveAwsRegionExtensionConfiguration)(B), (0, X2.resolveDefaultRuntimeConfig)(B), (0, oRQ.resolveHttpHandlerRuntimeConfig)(B), d38(B))
        }, "resolveRuntimeExtensions"),
        wmA = class extends X2.Client {
            static {
                w5(this, "SSOClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, u38.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = g38(Q),
                    G = (0, nRQ.resolveUserAgentConfig)(B),
                    Z = (0, aRQ.resolveRetryConfig)(G),
                    I = (0, f38.resolveRegionConfig)(Z),
                    Y = (0, iRQ.resolveHostHeaderConfig)(I),
                    J = (0, gHA.resolveEndpointConfig)(Y),
                    W = (0, sRQ.resolveHttpAuthSchemeConfig)(J),
                    X = c38(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, nRQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, aRQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, h38.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, iRQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, v38.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, b38.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, ev.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: sRQ.defaultSSOHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: w5(async (F) => new ev.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, ev.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        qmA = sG(),
        V6A = class A extends X2.ServiceException {
            static {
                w5(this, "SSOServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        eRQ = class A extends V6A {
            static {
                w5(this, "InvalidRequestException")
            }
            name = "InvalidRequestException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "InvalidRequestException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        ATQ = class A extends V6A {
            static {
                w5(this, "ResourceNotFoundException")
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
        QTQ = class A extends V6A {
            static {
                w5(this, "TooManyRequestsException")
            }
            name = "TooManyRequestsException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "TooManyRequestsException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        BTQ = class A extends V6A {
            static {
                w5(this, "UnauthorizedException")
            }
            name = "UnauthorizedException";
            $fault = "client";
            constructor(Q) {
                super({
                    name: "UnauthorizedException",
                    $fault: "client",
                    ...Q
                });
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        GTQ = w5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: X2.SENSITIVE_STRING
            }
        }), "GetRoleCredentialsRequestFilterSensitiveLog"),
        ZTQ = w5((A) => ({
            ...A,
            ...A.secretAccessKey && {
                secretAccessKey: X2.SENSITIVE_STRING
            },
            ...A.sessionToken && {
                sessionToken: X2.SENSITIVE_STRING
            }
        }), "RoleCredentialsFilterSensitiveLog"),
        ITQ = w5((A) => ({
            ...A,
            ...A.roleCredentials && {
                roleCredentials: ZTQ(A.roleCredentials)
            }
        }), "GetRoleCredentialsResponseFilterSensitiveLog"),
        YTQ = w5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: X2.SENSITIVE_STRING
            }
        }), "ListAccountRolesRequestFilterSensitiveLog"),
        JTQ = w5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: X2.SENSITIVE_STRING
            }
        }), "ListAccountsRequestFilterSensitiveLog"),
        WTQ = w5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: X2.SENSITIVE_STRING
            }
        }), "LogoutRequestFilterSensitiveLog"),
        hHA = MV(),
        p38 = w5(async (A, Q) => {
            let B = (0, ev.requestBuilder)(A, Q),
                G = (0, X2.map)({}, X2.isSerializableHeaderValue, {
                    [MmA]: A[LmA]
                });
            B.bp("/federation/credentials");
            let Z = (0, X2.map)({
                    [Z78]: [, (0, X2.expectNonNull)(A[G78], "roleName")],
                    [FTQ]: [, (0, X2.expectNonNull)(A[XTQ], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_GetRoleCredentialsCommand"),
        l38 = w5(async (A, Q) => {
            let B = (0, ev.requestBuilder)(A, Q),
                G = (0, X2.map)({}, X2.isSerializableHeaderValue, {
                    [MmA]: A[LmA]
                });
            B.bp("/assignment/roles");
            let Z = (0, X2.map)({
                    [HTQ]: [, A[DTQ]],
                    [KTQ]: [() => A.maxResults !== void 0, () => A[VTQ].toString()],
                    [FTQ]: [, (0, X2.expectNonNull)(A[XTQ], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountRolesCommand"),
        i38 = w5(async (A, Q) => {
            let B = (0, ev.requestBuilder)(A, Q),
                G = (0, X2.map)({}, X2.isSerializableHeaderValue, {
                    [MmA]: A[LmA]
                });
            B.bp("/assignment/accounts");
            let Z = (0, X2.map)({
                    [HTQ]: [, A[DTQ]],
                    [KTQ]: [() => A.maxResults !== void 0, () => A[VTQ].toString()]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountsCommand"),
        n38 = w5(async (A, Q) => {
            let B = (0, ev.requestBuilder)(A, Q),
                G = (0, X2.map)({}, X2.isSerializableHeaderValue, {
                    [MmA]: A[LmA]
                });
            B.bp("/logout");
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_LogoutCommand"),
        a38 = w5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NmA(A, Q);
            let B = (0, X2.map)({
                    $metadata: Td(A)
                }),
                G = (0, X2.expectNonNull)((0, X2.expectObject)(await (0, hHA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X2.take)(G, {
                    roleCredentials: X2._json
                });
            return Object.assign(B, Z), B
        }, "de_GetRoleCredentialsCommand"),
        s38 = w5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NmA(A, Q);
            let B = (0, X2.map)({
                    $metadata: Td(A)
                }),
                G = (0, X2.expectNonNull)((0, X2.expectObject)(await (0, hHA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X2.take)(G, {
                    nextToken: X2.expectString,
                    roleList: X2._json
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountRolesCommand"),
        r38 = w5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NmA(A, Q);
            let B = (0, X2.map)({
                    $metadata: Td(A)
                }),
                G = (0, X2.expectNonNull)((0, X2.expectObject)(await (0, hHA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, X2.take)(G, {
                    accountList: X2._json,
                    nextToken: X2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountsCommand"),
        o38 = w5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return NmA(A, Q);
            let B = (0, X2.map)({
                $metadata: Td(A)
            });
            return await (0, X2.collectBody)(A.body, Q), B
        }, "de_LogoutCommand"),
        NmA = w5(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, hHA.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, hHA.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "InvalidRequestException":
                case "com.amazonaws.sso#InvalidRequestException":
                    throw await e38(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.sso#ResourceNotFoundException":
                    throw await A78(B, Q);
                case "TooManyRequestsException":
                case "com.amazonaws.sso#TooManyRequestsException":
                    throw await Q78(B, Q);
                case "UnauthorizedException":
                case "com.amazonaws.sso#UnauthorizedException":
                    throw await B78(B, Q);
                default:
                    let Z = B.body;
                    return t38({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        t38 = (0, X2.withBaseException)(V6A),
        e38 = w5(async (A, Q) => {
            let B = (0, X2.map)({}),
                G = A.body,
                Z = (0, X2.take)(G, {
                    message: X2.expectString
                });
            Object.assign(B, Z);
            let I = new eRQ({
                $metadata: Td(A),
                ...B
            });
            return (0, X2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        A78 = w5(async (A, Q) => {
            let B = (0, X2.map)({}),
                G = A.body,
                Z = (0, X2.take)(G, {
                    message: X2.expectString
                });
            Object.assign(B, Z);
            let I = new ATQ({
                $metadata: Td(A),
                ...B
            });
            return (0, X2.decorateServiceException)(I, A.body)
        }, "de_ResourceNotFoundExceptionRes"),
        Q78 = w5(async (A, Q) => {
            let B = (0, X2.map)({}),
                G = A.body,
                Z = (0, X2.take)(G, {
                    message: X2.expectString
                });
            Object.assign(B, Z);
            let I = new QTQ({
                $metadata: Td(A),
                ...B
            });
            return (0, X2.decorateServiceException)(I, A.body)
        }, "de_TooManyRequestsExceptionRes"),
        B78 = w5(async (A, Q) => {
            let B = (0, X2.map)({}),
                G = A.body,
                Z = (0, X2.take)(G, {
                    message: X2.expectString
                });
            Object.assign(B, Z);
            let I = new BTQ({
                $metadata: Td(A),
                ...B
            });
            return (0, X2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedExceptionRes"),
        Td = w5((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        XTQ = "accountId",
        LmA = "accessToken",
        FTQ = "account_id",
        VTQ = "maxResults",
        KTQ = "max_result",
        DTQ = "nextToken",
        HTQ = "next_token",
        G78 = "roleName",
        Z78 = "role_name",
        MmA = "x-amz-sso_bearer_token",
        CTQ = class extends X2.Command.classBuilder().ep($mA).m(function(A, Q, B, G) {
            return [(0, qmA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(GTQ, ITQ).ser(p38).de(a38).build() {
            static {
                w5(this, "GetRoleCredentialsCommand")
            }
        },
        MR1 = class extends X2.Command.classBuilder().ep($mA).m(function(A, Q, B, G) {
            return [(0, qmA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(YTQ, void 0).ser(l38).de(s38).build() {
            static {
                w5(this, "ListAccountRolesCommand")
            }
        },
        OR1 = class extends X2.Command.classBuilder().ep($mA).m(function(A, Q, B, G) {
            return [(0, qmA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(JTQ, void 0).ser(i38).de(r38).build() {
            static {
                w5(this, "ListAccountsCommand")
            }
        },
        ETQ = class extends X2.Command.classBuilder().ep($mA).m(function(A, Q, B, G) {
            return [(0, qmA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, gHA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(WTQ, void 0).ser(n38).de(o38).build() {
            static {
                w5(this, "LogoutCommand")
            }
        },
        I78 = {
            GetRoleCredentialsCommand: CTQ,
            ListAccountRolesCommand: MR1,
            ListAccountsCommand: OR1,
            LogoutCommand: ETQ
        },
        zTQ = class extends wmA {
            static {
                w5(this, "SSO")
            }
        };
    (0, X2.createAggregatedClient)(I78, zTQ);
    var Y78 = (0, ev.createPaginator)(wmA, MR1, "nextToken", "nextToken", "maxResults"),
        J78 = (0, ev.createPaginator)(wmA, OR1, "nextToken", "nextToken", "maxResults")
});
var TR1 = U((wTQ) => {
    Object.defineProperty(wTQ, "__esModule", {
        value: !0
    });
    wTQ.resolveHttpAuthSchemeConfig = wTQ.defaultSSOOIDCHttpAuthSchemeProvider = wTQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
    var W78 = MV(),
        RR1 = K7(),
        X78 = async (A, Q, B) => {
            return {
                operation: (0, RR1.getSmithyContext)(Q).operation,
                region: await (0, RR1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    wTQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = X78;

function F78(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "sso-oauth",
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

function V78(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var K78 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "CreateToken": {
                Q.push(V78(A));
                break
            }
            default:
                Q.push(F78(A))
        }
        return Q
    };
    wTQ.defaultSSOOIDCHttpAuthSchemeProvider = K78;
    var D78 = (A) => {
        let Q = (0, W78.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, RR1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    wTQ.resolveHttpAuthSchemeConfig = D78
});
var PR1 = U((tE7, E78) => {
    E78.exports = {
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
var hTQ = U((bTQ) => {
    Object.defineProperty(bTQ, "__esModule", {
        value: !0
    });
    bTQ.ruleSet = void 0;
    var kTQ = "required",
        OL = "fn",
        RL = "argv",
        H6A = "ref",
        NTQ = !0,
        LTQ = "isSet",
        uHA = "booleanEquals",
        K6A = "error",
        D6A = "endpoint",
        Ab = "tree",
        jR1 = "PartitionResult",
        SR1 = "getAttr",
        MTQ = {
            [kTQ]: !1,
            type: "String"
        },
        OTQ = {
            [kTQ]: !0,
            default: !1,
            type: "Boolean"
        },
        RTQ = {
            [H6A]: "Endpoint"
        },
        yTQ = {
            [OL]: uHA,
            [RL]: [{
                [H6A]: "UseFIPS"
            }, !0]
        },
        xTQ = {
            [OL]: uHA,
            [RL]: [{
                [H6A]: "UseDualStack"
            }, !0]
        },
        ML = {},
        TTQ = {
            [OL]: SR1,
            [RL]: [{
                [H6A]: jR1
            }, "supportsFIPS"]
        },
        vTQ = {
            [H6A]: jR1
        },
        PTQ = {
            [OL]: uHA,
            [RL]: [!0, {
                [OL]: SR1,
                [RL]: [vTQ, "supportsDualStack"]
            }]
        },
        jTQ = [yTQ],
        STQ = [xTQ],
        _TQ = [{
            [H6A]: "Region"
        }],
        z78 = {
            version: "1.0",
            parameters: {
                Region: MTQ,
                UseDualStack: OTQ,
                UseFIPS: OTQ,
                Endpoint: MTQ
            },
            rules: [{
                conditions: [{
                    [OL]: LTQ,
                    [RL]: [RTQ]
                }],
                rules: [{
                    conditions: jTQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: K6A
                }, {
                    conditions: STQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: K6A
                }, {
                    endpoint: {
                        url: RTQ,
                        properties: ML,
                        headers: ML
                    },
                    type: D6A
                }],
                type: Ab
            }, {
                conditions: [{
                    [OL]: LTQ,
                    [RL]: _TQ
                }],
                rules: [{
                    conditions: [{
                        [OL]: "aws.partition",
                        [RL]: _TQ,
                        assign: jR1
                    }],
                    rules: [{
                        conditions: [yTQ, xTQ],
                        rules: [{
                            conditions: [{
                                [OL]: uHA,
                                [RL]: [NTQ, TTQ]
                            }, PTQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: ML,
                                    headers: ML
                                },
                                type: D6A
                            }],
                            type: Ab
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: K6A
                        }],
                        type: Ab
                    }, {
                        conditions: jTQ,
                        rules: [{
                            conditions: [{
                                [OL]: uHA,
                                [RL]: [TTQ, NTQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [OL]: "stringEquals",
                                    [RL]: [{
                                        [OL]: SR1,
                                        [RL]: [vTQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://oidc.{Region}.amazonaws.com",
                                    properties: ML,
                                    headers: ML
                                },
                                type: D6A
                            }, {
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: ML,
                                    headers: ML
                                },
                                type: D6A
                            }],
                            type: Ab
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: K6A
                        }],
                        type: Ab
                    }, {
                        conditions: STQ,
                        rules: [{
                            conditions: [PTQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: ML,
                                    headers: ML
                                },
                                type: D6A
                            }],
                            type: Ab
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: K6A
                        }],
                        type: Ab
                    }, {
                        endpoint: {
                            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
                            properties: ML,
                            headers: ML
                        },
                        type: D6A
                    }],
                    type: Ab
                }],
                type: Ab
            }, {
                error: "Invalid Configuration: Missing Region",
                type: K6A
            }]
        };
    bTQ.ruleSet = z78
});
var mTQ = U((gTQ) => {
    Object.defineProperty(gTQ, "__esModule", {
        value: !0
    });
    gTQ.defaultEndpointResolver = void 0;
    var U78 = Q6A(),
        _R1 = II(),
        $78 = hTQ(),
        w78 = new _R1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        q78 = (A, Q = {}) => {
            return w78.get(A, () => (0, _R1.resolveEndpoint)($78.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    gTQ.defaultEndpointResolver = q78;
    _R1.customEndpointFunctions.aws = U78.awsEndpointFunctions
});
var iTQ = U((pTQ) => {
    Object.defineProperty(pTQ, "__esModule", {
        value: !0
    });
    pTQ.getRuntimeConfig = void 0;
    var N78 = MV(),
        L78 = nB(),
        M78 = l6(),
        O78 = zJ(),
        dTQ = Od(),
        cTQ = L2(),
        R78 = TR1(),
        T78 = mTQ(),
        P78 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? dTQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? dTQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? T78.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? R78.defaultSSOOIDCHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new N78.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new L78.NoAuthSigner
                }],
                logger: A?.logger ?? new M78.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO OIDC",
                urlParser: A?.urlParser ?? O78.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? cTQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? cTQ.toUtf8
            }
        };
    pTQ.getRuntimeConfig = P78
});
var eTQ = U((oTQ) => {
    Object.defineProperty(oTQ, "__esModule", {
        value: !0
    });
    oTQ.getRuntimeConfig = void 0;
    var j78 = nr(),
        S78 = j78.__importDefault(PR1()),
        nTQ = MV(),
        aTQ = vHA(),
        OmA = S8(),
        _78 = wX(),
        sTQ = X6(),
        tr = xI(),
        rTQ = oG(),
        k78 = qX(),
        y78 = FW(),
        x78 = iTQ(),
        v78 = l6(),
        b78 = NX(),
        f78 = l6(),
        h78 = (A) => {
            (0, f78.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, b78.resolveDefaultsModeConfig)(A),
                B = () => Q().then(v78.loadConfigsForDefaultMode),
                G = (0, x78.getRuntimeConfig)(A);
            (0, nTQ.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, tr.loadConfig)(nTQ.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? k78.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, aTQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: S78.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, tr.loadConfig)(sTQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, tr.loadConfig)(OmA.NODE_REGION_CONFIG_OPTIONS, {
                    ...OmA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: rTQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, tr.loadConfig)({
                    ...sTQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || y78.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? _78.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? rTQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, tr.loadConfig)(OmA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, tr.loadConfig)(OmA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, tr.loadConfig)(aTQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    oTQ.getRuntimeConfig = h78
});
var xR1 = U((Gz7, RPQ) => {
    var {
        defineProperty: RmA,
        getOwnPropertyDescriptor: g78,
        getOwnPropertyNames: u78
    } = Object, m78 = Object.prototype.hasOwnProperty, N6 = (A, Q) => RmA(A, "name", {
        value: Q,
        configurable: !0
    }), d78 = (A, Q) => {
        for (var B in Q) RmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, c78 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of u78(Q))
                if (!m78.call(A, Z) && Z !== B) RmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = g78(Q, Z)) || G.enumerable
                })
        }
        return A
    }, p78 = (A) => c78(RmA({}, "__esModule", {
        value: !0
    }), A), JPQ = {};
    d78(JPQ, {
        $Command: () => FPQ.Command,
        AccessDeniedException: () => VPQ,
        AuthorizationPendingException: () => KPQ,
        CreateTokenCommand: () => MPQ,
        CreateTokenRequestFilterSensitiveLog: () => DPQ,
        CreateTokenResponseFilterSensitiveLog: () => HPQ,
        ExpiredTokenException: () => CPQ,
        InternalServerException: () => EPQ,
        InvalidClientException: () => zPQ,
        InvalidGrantException: () => UPQ,
        InvalidRequestException: () => $PQ,
        InvalidScopeException: () => wPQ,
        SSOOIDC: () => OPQ,
        SSOOIDCClient: () => XPQ,
        SSOOIDCServiceException: () => ww,
        SlowDownException: () => qPQ,
        UnauthorizedClientException: () => NPQ,
        UnsupportedGrantTypeException: () => LPQ,
        __Client: () => WPQ.Client
    });
    RPQ.exports = p78(JPQ);
    var APQ = THA(),
        l78 = PHA(),
        i78 = jHA(),
        QPQ = J6A(),
        n78 = S8(),
        kR1 = nB(),
        a78 = zX(),
        s78 = E5(),
        BPQ = X6(),
        WPQ = l6(),
        GPQ = TR1(),
        r78 = N6((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "sso-oauth"
            })
        }, "resolveClientEndpointParameters"),
        o78 = {
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
        t78 = eTQ(),
        ZPQ = fHA(),
        IPQ = lz(),
        YPQ = l6(),
        e78 = N6((A) => {
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
        AG8 = N6((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        QG8 = N6((A, Q) => {
            let B = Object.assign((0, ZPQ.getAwsRegionExtensionConfiguration)(A), (0, YPQ.getDefaultExtensionConfiguration)(A), (0, IPQ.getHttpHandlerExtensionConfiguration)(A), e78(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, ZPQ.resolveAwsRegionExtensionConfiguration)(B), (0, YPQ.resolveDefaultRuntimeConfig)(B), (0, IPQ.resolveHttpHandlerRuntimeConfig)(B), AG8(B))
        }, "resolveRuntimeExtensions"),
        XPQ = class extends WPQ.Client {
            static {
                N6(this, "SSOOIDCClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, t78.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = r78(Q),
                    G = (0, QPQ.resolveUserAgentConfig)(B),
                    Z = (0, BPQ.resolveRetryConfig)(G),
                    I = (0, n78.resolveRegionConfig)(Z),
                    Y = (0, APQ.resolveHostHeaderConfig)(I),
                    J = (0, s78.resolveEndpointConfig)(Y),
                    W = (0, GPQ.resolveHttpAuthSchemeConfig)(J),
                    X = QG8(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, QPQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, BPQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, a78.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, APQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, l78.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, i78.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, kR1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: GPQ.defaultSSOOIDCHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: N6(async (F) => new kR1.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, kR1.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        BG8 = l6(),
        GG8 = E5(),
        ZG8 = sG(),
        FPQ = l6(),
        C6A = l6(),
        IG8 = l6(),
        ww = class A extends IG8.ServiceException {
            static {
                N6(this, "SSOOIDCServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        VPQ = class A extends ww {
            static {
                N6(this, "AccessDeniedException")
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
        KPQ = class A extends ww {
            static {
                N6(this, "AuthorizationPendingException")
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
        DPQ = N6((A) => ({
            ...A,
            ...A.clientSecret && {
                clientSecret: C6A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: C6A.SENSITIVE_STRING
            },
            ...A.codeVerifier && {
                codeVerifier: C6A.SENSITIVE_STRING
            }
        }), "CreateTokenRequestFilterSensitiveLog"),
        HPQ = N6((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: C6A.SENSITIVE_STRING
            },
            ...A.refreshToken && {
                refreshToken: C6A.SENSITIVE_STRING
            },
            ...A.idToken && {
                idToken: C6A.SENSITIVE_STRING
            }
        }), "CreateTokenResponseFilterSensitiveLog"),
        CPQ = class A extends ww {
            static {
                N6(this, "ExpiredTokenException")
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
        EPQ = class A extends ww {
            static {
                N6(this, "InternalServerException")
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
        zPQ = class A extends ww {
            static {
                N6(this, "InvalidClientException")
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
        UPQ = class A extends ww {
            static {
                N6(this, "InvalidGrantException")
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
        $PQ = class A extends ww {
            static {
                N6(this, "InvalidRequestException")
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
        wPQ = class A extends ww {
            static {
                N6(this, "InvalidScopeException")
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
        qPQ = class A extends ww {
            static {
                N6(this, "SlowDownException")
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
        NPQ = class A extends ww {
            static {
                N6(this, "UnauthorizedClientException")
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
        LPQ = class A extends ww {
            static {
                N6(this, "UnsupportedGrantTypeException")
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
        yR1 = MV(),
        YG8 = nB(),
        B2 = l6(),
        JG8 = N6(async (A, Q) => {
            let B = (0, YG8.requestBuilder)(A, Q),
                G = {
                    "content-type": "application/json"
                };
            B.bp("/token");
            let Z;
            return Z = JSON.stringify((0, B2.take)(A, {
                clientId: [],
                clientSecret: [],
                code: [],
                codeVerifier: [],
                deviceCode: [],
                grantType: [],
                redirectUri: [],
                refreshToken: [],
                scope: N6((I) => (0, B2._json)(I), "scope")
            })), B.m("POST").h(G).b(Z), B.build()
        }, "se_CreateTokenCommand"),
        WG8 = N6(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return XG8(A, Q);
            let B = (0, B2.map)({
                    $metadata: TL(A)
                }),
                G = (0, B2.expectNonNull)((0, B2.expectObject)(await (0, yR1.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, B2.take)(G, {
                    accessToken: B2.expectString,
                    expiresIn: B2.expectInt32,
                    idToken: B2.expectString,
                    refreshToken: B2.expectString,
                    tokenType: B2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_CreateTokenCommand"),
        XG8 = N6(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, yR1.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, yR1.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "AccessDeniedException":
                case "com.amazonaws.ssooidc#AccessDeniedException":
                    throw await VG8(B, Q);
                case "AuthorizationPendingException":
                case "com.amazonaws.ssooidc#AuthorizationPendingException":
                    throw await KG8(B, Q);
                case "ExpiredTokenException":
                case "com.amazonaws.ssooidc#ExpiredTokenException":
                    throw await DG8(B, Q);
                case "InternalServerException":
                case "com.amazonaws.ssooidc#InternalServerException":
                    throw await HG8(B, Q);
                case "InvalidClientException":
                case "com.amazonaws.ssooidc#InvalidClientException":
                    throw await CG8(B, Q);
                case "InvalidGrantException":
                case "com.amazonaws.ssooidc#InvalidGrantException":
                    throw await EG8(B, Q);
                case "InvalidRequestException":
                case "com.amazonaws.ssooidc#InvalidRequestException":
                    throw await zG8(B, Q);
                case "InvalidScopeException":
                case "com.amazonaws.ssooidc#InvalidScopeException":
                    throw await UG8(B, Q);
                case "SlowDownException":
                case "com.amazonaws.ssooidc#SlowDownException":
                    throw await $G8(B, Q);
                case "UnauthorizedClientException":
                case "com.amazonaws.ssooidc#UnauthorizedClientException":
                    throw await wG8(B, Q);
                case "UnsupportedGrantTypeException":
                case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
                    throw await qG8(B, Q);
                default:
                    let Z = B.body;
                    return FG8({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        FG8 = (0, B2.withBaseException)(ww),
        VG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new VPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_AccessDeniedExceptionRes"),
        KG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new KPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_AuthorizationPendingExceptionRes"),
        DG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new CPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_ExpiredTokenExceptionRes"),
        HG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new EPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_InternalServerExceptionRes"),
        CG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new zPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_InvalidClientExceptionRes"),
        EG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new UPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_InvalidGrantExceptionRes"),
        zG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new $PQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        UG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new wPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_InvalidScopeExceptionRes"),
        $G8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new qPQ({
                $metadata: TL(A),
                ...B
            });
            return (0, B2.decorateServiceException)(I, A.body)
        }, "de_SlowDownExceptionRes"),
        wG8 = N6(async (A, Q) => {
            let B = (0, B2.map)({}),
                G = A.body,
                Z = (0, B2.take)(G, {
                    error: B2.expectString,
                    error_description: B2.expectString
                });
            Object.assign(B, Z);
            let I = new NPQ({
                $metadata: TL(A),
                ...B
            });