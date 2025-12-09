/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: commands_001.js
 * 处理时间: 2025-12-09T03:41:37.069Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  6x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: commands
 * File: 1/8
 * Lines: 71786 - 73283 (1498 lines)
 * Original file: cli.js
 */


    function WO4(A) {
        return new IO4.HttpRequest({
            protocol: A.protocol,
            hostname: A.hostname,
            port: Number(A.port),
            path: A.pathname,
            query: Array.from(A.searchParams.entries()).reduce((Q, [B, G]) => {
                return Q[B] = G, Q
            }, {}),
            fragment: A.hash
        })
    }
    async function XO4(A, Q) {
        let G = await (0, JO4.sdkStreamMixin)(A.body).transformToString();
        if (A.statusCode === 200) {
            let Z = JSON.parse(G);
            if (typeof Z.AccessKeyId !== "string" || typeof Z.SecretAccessKey !== "string" || typeof Z.Token !== "string" || typeof Z.Expiration !== "string") throw new cU1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
                logger: Q
            });
            return {
                accessKeyId: Z.AccessKeyId,
                secretAccessKey: Z.SecretAccessKey,
                sessionToken: Z.Token,
                expiration: (0, YO4.parseRfc3339DateTime)(Z.Expiration)
            }
        }
        if (A.statusCode >= 400 && A.statusCode < 500) {
            let Z = {};
            try {
                Z = JSON.parse(G)
            } catch (I) {}
            throw Object.assign(new cU1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
                logger: Q
            }), {
                Code: Z.Code,
                Message: Z.Message
            })
        }
        throw new cU1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
            logger: Q
        })
    }
});
var I9Q = U((G9Q) => {
    Object.defineProperty(G9Q, "__esModule", {
        value: !0
    });
    G9Q.retryWrapper = void 0;
    var KO4 = (A, Q, B) => {
        return async () => {
            for (let G = 0; G < Q; ++G) try {
                return await A()
            } catch (Z) {
                await new Promise((I) => setTimeout(I, B))
            }
            return await A()
        }
    };
    G9Q.retryWrapper = KO4
});
var F9Q = U((W9Q) => {
    Object.defineProperty(W9Q, "__esModule", {
        value: !0
    });
    W9Q.fromHttp = void 0;
    var DO4 = Vr(),
        HO4 = lN(),
        CO4 = oG(),
        Y9Q = P2(),
        EO4 = DO4.__importDefault(UA("fs/promises")),
        zO4 = A9Q(),
        J9Q = B9Q(),
        UO4 = I9Q(),
        $O4 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        wO4 = "http://169.254.170.2",
        qO4 = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        NO4 = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
        LO4 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        MO4 = (A = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
            let Q, B = A.awsContainerCredentialsRelativeUri ?? process.env[$O4],
                G = A.awsContainerCredentialsFullUri ?? process.env[qO4],
                Z = A.awsContainerAuthorizationToken ?? process.env[LO4],
                I = A.awsContainerAuthorizationTokenFile ?? process.env[NO4],
                Y = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console.warn : A.logger.warn;
            if (B && G) Y("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), Y("awsContainerCredentialsFullUri will take precedence.");
            if (Z && I) Y("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), Y("awsContainerAuthorizationToken will take precedence.");
            if (G) Q = G;
            else if (B) Q = `${wO4}${B}`;
            else throw new Y9Q.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
                logger: A.logger
            });
            let J = new URL(Q);
            (0, zO4.checkUrl)(J, A.logger);
            let W = new CO4.NodeHttpHandler({
                requestTimeout: A.timeout ?? 1000,
                connectionTimeout: A.timeout ?? 1000
            });
            return (0, UO4.retryWrapper)(async () => {
                let X = (0, J9Q.createGetRequest)(J);
                if (Z) X.headers.Authorization = Z;
                else if (I) X.headers.Authorization = (await EO4.default.readFile(I)).toString();
                try {
                    let F = await W.handle(X);
                    return (0, J9Q.getCredentials)(F.response).then((V) => (0, HO4.setCredentialFeature)(V, "CREDENTIALS_HTTP", "z"))
                } catch (F) {
                    throw new Y9Q.CredentialsProviderError(String(F), {
                        logger: A.logger
                    })
                }
            }, A.maxRetries ?? 3, A.timeout ?? 1000)
        };
    W9Q.fromHttp = MO4
});
var lU1 = U((pU1) => {
    Object.defineProperty(pU1, "__esModule", {
        value: !0
    });
    pU1.fromHttp = void 0;
    var OO4 = F9Q();
    Object.defineProperty(pU1, "fromHttp", {
        enumerable: !0,
        get: function() {
            return OO4.fromHttp
        }
    })
});
var nU1 = U((V9Q) => {
    Object.defineProperty(V9Q, "__esModule", {
        value: !0
    });
    V9Q.resolveHttpAuthSchemeConfig = V9Q.defaultSSOHttpAuthSchemeProvider = V9Q.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var TO4 = wV(),
        iU1 = K7(),
        PO4 = async (A, Q, B) => {
            return {
                operation: (0, iU1.getSmithyContext)(Q).operation,
                region: await (0, iU1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    V9Q.defaultSSOHttpAuthSchemeParametersProvider = PO4;

    function jO4(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "awsssoportal",
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

    function lfA(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var SO4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "GetRoleCredentials": {
                Q.push(lfA(A));
                break
            }
            case "ListAccountRoles": {
                Q.push(lfA(A));
                break
            }
            case "ListAccounts": {
                Q.push(lfA(A));
                break
            }
            case "Logout": {
                Q.push(lfA(A));
                break
            }
            default:
                Q.push(jO4(A))
        }
        return Q
    };
    V9Q.defaultSSOHttpAuthSchemeProvider = SO4;
    var _O4 = (A) => {
        let Q = (0, TO4.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, iU1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    V9Q.resolveHttpAuthSchemeConfig = _O4
});
var D9Q = U((yX7, xO4) => {
    xO4.exports = {
        name: "@aws-sdk/client-sso",
        description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
        version: "3.840.0",
        scripts: {
            build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline client-sso",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            "extract:docs": "api-extractor run --local",
            "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: !1,
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
            "@tsconfig/node18": "18.2.4",
            "@types/node": "^18.19.69",
            concurrently: "7.0.0",
            "downlevel-dts": "0.10.1",
            rimraf: "3.0.2",
            typescript: "~5.8.3"
        },
        engines: {
            node: ">=18.0.0"
        },
        typesVersions: {
            "<4.0": {
                "dist-types/*": ["dist-types/ts3.4/*"]
            }
        },
        files: ["dist-*/**"],
        author: {
            name: "AWS SDK for JavaScript Team",
            url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        browser: {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
        },
        "react-native": {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
        },
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "clients/client-sso"
        }
    }
});
var qDA = U((xX7, w9Q) => {
    var {
        defineProperty: nfA,
        getOwnPropertyDescriptor: vO4,
        getOwnPropertyNames: bO4
    } = Object, fO4 = Object.prototype.hasOwnProperty, ifA = (A, Q) => nfA(A, "name", {
        value: Q,
        configurable: !0
    }), hO4 = (A, Q) => {
        for (var B in Q) nfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, gO4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bO4(Q))
                if (!fO4.call(A, Z) && Z !== B) nfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = vO4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, uO4 = (A) => gO4(nfA({}, "__esModule", {
        value: !0
    }), A), C9Q = {};
    hO4(C9Q, {
        NODE_APP_ID_CONFIG_OPTIONS: () => lO4,
        UA_APP_ID_ENV_NAME: () => U9Q,
        UA_APP_ID_INI_NAME: () => $9Q,
        createDefaultUserAgentProvider: () => z9Q,
        crtAvailability: () => E9Q,
        defaultUserAgent: () => dO4
    });
    w9Q.exports = uO4(C9Q);
    var H9Q = UA("os"),
        aU1 = UA("process"),
        E9Q = {
            isCrtAvailable: !1
        },
        mO4 = ifA(() => {
            if (E9Q.isCrtAvailable) return ["md/crt-avail"];
            return null
        }, "isCrtAvailable"),
        z9Q = ifA(({
            serviceId: A,
            clientVersion: Q
        }) => {
            return async (B) => {
                let G = [
                        ["aws-sdk-js", Q],
                        ["ua", "2.1"],
                        [`os/${(0,H9Q.platform)()}`, (0, H9Q.release)()],
                        ["lang/js"],
                        ["md/nodejs", `${aU1.versions.node}`]
                    ],
                    Z = mO4();
                if (Z) G.push(Z);
                if (A) G.push([`api/${A}`, Q]);
                if (aU1.env.AWS_EXECUTION_ENV) G.push([`exec-env/${aU1.env.AWS_EXECUTION_ENV}`]);
                let I = await B?.userAgentAppId?.();
                return I ? [...G, [`app/${I}`]] : [...G]
            }
        }, "createDefaultUserAgentProvider"),
        dO4 = z9Q,
        cO4 = M4A(),
        U9Q = "AWS_SDK_UA_APP_ID",
        $9Q = "sdk_ua_app_id",
        pO4 = "sdk-ua-app-id",
        lO4 = {
            environmentVariableSelector: ifA((A) => A[U9Q], "environmentVariableSelector"),
            configFileSelector: ifA((A) => A[$9Q] ?? A[pO4], "configFileSelector"),
            default: cO4.DEFAULT_UA_APP_ID
        }
});
var wX = U((vX7, M9Q) => {
    var {
        defineProperty: afA,
        getOwnPropertyDescriptor: iO4,
        getOwnPropertyNames: nO4
    } = Object, aO4 = Object.prototype.hasOwnProperty, N9Q = (A, Q) => afA(A, "name", {
        value: Q,
        configurable: !0
    }), sO4 = (A, Q) => {
        for (var B in Q) afA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, rO4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of nO4(Q))
                if (!aO4.call(A, Z) && Z !== B) afA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = iO4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, oO4 = (A) => rO4(afA({}, "__esModule", {
        value: !0
    }), A), L9Q = {};
    sO4(L9Q, {
        Hash: () => AR4
    });
    M9Q.exports = oO4(L9Q);
    var sU1 = kI(),
        tO4 = L2(),
        eO4 = UA("buffer"),
        q9Q = UA("crypto"),
        AR4 = class {
            static {
                N9Q(this, "Hash")
            }
            constructor(A, Q) {
                this.algorithmIdentifier = A, this.secret = Q, this.reset()
            }
            update(A, Q) {
                this.hash.update((0, tO4.toUint8Array)(rU1(A, Q)))
            }
            digest() {
                return Promise.resolve(this.hash.digest())
            }
            reset() {
                this.hash = this.secret ? (0, q9Q.createHmac)(this.algorithmIdentifier, rU1(this.secret)) : (0, q9Q.createHash)(this.algorithmIdentifier)
            }
        };

    function rU1(A, Q) {
        if (eO4.Buffer.isBuffer(A)) return A;
        if (typeof A === "string") return (0, sU1.fromString)(A, Q);
        if (ArrayBuffer.isView(A)) return (0, sU1.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength);
        return (0, sU1.fromArrayBuffer)(A)
    }
    N9Q(rU1, "castSourceData")
});
var qX = U((fX7, T9Q) => {
    var {
        defineProperty: sfA,
        getOwnPropertyDescriptor: QR4,
        getOwnPropertyNames: BR4
    } = Object, GR4 = Object.prototype.hasOwnProperty, ZR4 = (A, Q) => sfA(A, "name", {
        value: Q,
        configurable: !0
    }), IR4 = (A, Q) => {
        for (var B in Q) sfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, YR4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of BR4(Q))
                if (!GR4.call(A, Z) && Z !== B) sfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = QR4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, JR4 = (A) => YR4(sfA({}, "__esModule", {
        value: !0
    }), A), R9Q = {};
    IR4(R9Q, {
        calculateBodyLength: () => WR4
    });
    T9Q.exports = JR4(R9Q);
    var O9Q = UA("fs"),
        WR4 = ZR4((A) => {
            if (!A) return 0;
            if (typeof A === "string") return Buffer.byteLength(A);
            else if (typeof A.byteLength === "number") return A.byteLength;
            else if (typeof A.size === "number") return A.size;
            else if (typeof A.start === "number" && typeof A.end === "number") return A.end + 1 - A.start;
            else if (typeof A.path === "string" || Buffer.isBuffer(A.path)) return (0, O9Q.lstatSync)(A.path).size;
            else if (typeof A.fd === "number") return (0, O9Q.fstatSync)(A.fd).size;
            throw Error(`Body Length computation failed for ${A}`)
        }, "calculateBodyLength")
});
var p9Q = U((d9Q) => {
    Object.defineProperty(d9Q, "__esModule", {
        value: !0
    });
    d9Q.ruleSet = void 0;
    var h9Q = "required",
        oN = "fn",
        tN = "argv",
        _4A = "ref",
        P9Q = !0,
        j9Q = "isSet",
        NDA = "booleanEquals",
        j4A = "error",
        S4A = "endpoint",
        Hv = "tree",
        oU1 = "PartitionResult",
        tU1 = "getAttr",
        S9Q = {
            [h9Q]: !1,
            type: "String"
        },
        _9Q = {
            [h9Q]: !0,
            default: !1,
            type: "Boolean"
        },
        k9Q = {
            [_4A]: "Endpoint"
        },
        g9Q = {
            [oN]: NDA,
            [tN]: [{
                [_4A]: "UseFIPS"
            }, !0]
        },
        u9Q = {
            [oN]: NDA,
            [tN]: [{
                [_4A]: "UseDualStack"
            }, !0]
        },
        rN = {},
        y9Q = {
            [oN]: tU1,
            [tN]: [{
                [_4A]: oU1
            }, "supportsFIPS"]
        },
        m9Q = {
            [_4A]: oU1
        },
        x9Q = {
            [oN]: NDA,
            [tN]: [!0, {
                [oN]: tU1,
                [tN]: [m9Q, "supportsDualStack"]
            }]
        },
        v9Q = [g9Q],
        b9Q = [u9Q],
        f9Q = [{
            [_4A]: "Region"
        }],
        XR4 = {
            version: "1.0",
            parameters: {
                Region: S9Q,
                UseDualStack: _9Q,
                UseFIPS: _9Q,
                Endpoint: S9Q
            },
            rules: [{
                conditions: [{
                    [oN]: j9Q,
                    [tN]: [k9Q]
                }],
                rules: [{
                    conditions: v9Q,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: j4A
                }, {
                    conditions: b9Q,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: j4A
                }, {
                    endpoint: {
                        url: k9Q,
                        properties: rN,
                        headers: rN
                    },
                    type: S4A
                }],
                type: Hv
            }, {
                conditions: [{
                    [oN]: j9Q,
                    [tN]: f9Q
                }],
                rules: [{
                    conditions: [{
                        [oN]: "aws.partition",
                        [tN]: f9Q,
                        assign: oU1
                    }],
                    rules: [{
                        conditions: [g9Q, u9Q],
                        rules: [{
                            conditions: [{
                                [oN]: NDA,
                                [tN]: [P9Q, y9Q]
                            }, x9Q],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: rN,
                                    headers: rN
                                },
                                type: S4A
                            }],
                            type: Hv
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: j4A
                        }],
                        type: Hv
                    }, {
                        conditions: v9Q,
                        rules: [{
                            conditions: [{
                                [oN]: NDA,
                                [tN]: [y9Q, P9Q]
                            }],
                            rules: [{
                                conditions: [{
                                    [oN]: "stringEquals",
                                    [tN]: [{
                                        [oN]: tU1,
                                        [tN]: [m9Q, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://portal.sso.{Region}.amazonaws.com",
                                    properties: rN,
                                    headers: rN
                                },
                                type: S4A
                            }, {
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: rN,
                                    headers: rN
                                },
                                type: S4A
                            }],
                            type: Hv
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: j4A
                        }],
                        type: Hv
                    }, {
                        conditions: b9Q,
                        rules: [{
                            conditions: [x9Q],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: rN,
                                    headers: rN
                                },
                                type: S4A
                            }],
                            type: Hv
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: j4A
                        }],
                        type: Hv
                    }, {
                        endpoint: {
                            url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                            properties: rN,
                            headers: rN
                        },
                        type: S4A
                    }],
                    type: Hv
                }],
                type: Hv
            }, {
                error: "Invalid Configuration: Missing Region",
                type: j4A
            }]
        };
    d9Q.ruleSet = XR4
});
var n9Q = U((l9Q) => {
    Object.defineProperty(l9Q, "__esModule", {
        value: !0
    });
    l9Q.defaultEndpointResolver = void 0;
    var FR4 = U4A(),
        eU1 = II(),
        VR4 = p9Q(),
        KR4 = new eU1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        DR4 = (A, Q = {}) => {
            return KR4.get(A, () => (0, eU1.resolveEndpoint)(VR4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    l9Q.defaultEndpointResolver = DR4;
    eU1.customEndpointFunctions.aws = FR4.awsEndpointFunctions
});
var t9Q = U((r9Q) => {
    Object.defineProperty(r9Q, "__esModule", {
        value: !0
    });
    r9Q.getRuntimeConfig = void 0;
    var HR4 = wV(),
        CR4 = nB(),
        ER4 = W6(),
        zR4 = zJ(),
        a9Q = lm(),
        s9Q = L2(),
        UR4 = nU1(),
        $R4 = n9Q(),
        wR4 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? a9Q.fromBase64,
                base64Encoder: A?.base64Encoder ?? a9Q.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? $R4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? UR4.defaultSSOHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new HR4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new CR4.NoAuthSigner
                }],
                logger: A?.logger ?? new ER4.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO",
                urlParser: A?.urlParser ?? zR4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? s9Q.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? s9Q.toUtf8
            }
        };
    r9Q.getRuntimeConfig = wR4
});
var NX = U((mX7, Z4Q) => {
    var {
        create: qR4,
        defineProperty: LDA,
        getOwnPropertyDescriptor: NR4,
        getOwnPropertyNames: LR4,
        getPrototypeOf: MR4
    } = Object, OR4 = Object.prototype.hasOwnProperty, A$1 = (A, Q) => LDA(A, "name", {
        value: Q,
        configurable: !0
    }), RR4 = (A, Q) => {
        for (var B in Q) LDA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, B4Q = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of LR4(Q))
                if (!OR4.call(A, Z) && Z !== B) LDA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = NR4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, TR4 = (A, Q, B) => (B = A != null ? qR4(MR4(A)) : {}, B4Q(Q || !A || !A.__esModule ? LDA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), PR4 = (A) => B4Q(LDA({}, "__esModule", {
        value: !0
    }), A), G4Q = {};
    RR4(G4Q, {
        resolveDefaultsModeConfig: () => hR4
    });
    Z4Q.exports = PR4(G4Q);
    var jR4 = S8(),
        e9Q = xI(),
        SR4 = P2(),
        _R4 = "AWS_EXECUTION_ENV",
        A4Q = "AWS_REGION",
        Q4Q = "AWS_DEFAULT_REGION",
        kR4 = "AWS_EC2_METADATA_DISABLED",
        yR4 = ["in-region", "cross-region", "mobile", "standard", "legacy"],
        xR4 = "/latest/meta-data/placement/region",
        vR4 = "AWS_DEFAULTS_MODE",
        bR4 = "defaults_mode",
        fR4 = {
            environmentVariableSelector: (A) => {
                return A[vR4]
            },
            configFileSelector: (A) => {
                return A[bR4]
            },
            default: "legacy"
        },
        hR4 = A$1(({
            region: A = (0, e9Q.loadConfig)(jR4.NODE_REGION_CONFIG_OPTIONS),
            defaultsMode: Q = (0, e9Q.loadConfig)(fR4)
        } = {}) => (0, SR4.memoize)(async () => {
            let B = typeof Q === "function" ? await Q() : Q;
            switch (B?.toLowerCase()) {
                case "auto":
                    return gR4(A);
                case "in-region":
                case "cross-region":
                case "mobile":
                case "standard":
                case "legacy":
                    return Promise.resolve(B?.toLocaleLowerCase());
                case void 0:
                    return Promise.resolve("legacy");
                default:
                    throw Error(`Invalid parameter for "defaultsMode", expect ${yR4.join(", ")}, got ${B}`)
            }
        }), "resolveDefaultsModeConfig"),
        gR4 = A$1(async (A) => {
            if (A) {
                let Q = typeof A === "function" ? await A() : A,
                    B = await uR4();
                if (!B) return "standard";
                if (Q === B) return "in-region";
                else return "cross-region"
            }
            return "standard"
        }, "resolveNodeDefaultsModeAuto"),
        uR4 = A$1(async () => {
            if (process.env[_R4] && (process.env[A4Q] || process.env[Q4Q])) return process.env[A4Q] ?? process.env[Q4Q];
            if (!process.env[kR4]) try {
                let {
                    getInstanceMetadataEndpoint: A,
                    httpRequest: Q
                } = await Promise.resolve().then(() => TR4(wF())), B = await A();
                return (await Q({
                    ...B,
                    path: xR4
                })).toString()
            } catch (A) {}
        }, "inferPhysicalRegion")
});
var V4Q = U((X4Q) => {
    Object.defineProperty(X4Q, "__esModule", {
        value: !0
    });
    X4Q.getRuntimeConfig = void 0;
    var mR4 = Vr(),
        dR4 = mR4.__importDefault(D9Q()),
        I4Q = wV(),
        Y4Q = qDA(),
        rfA = S8(),
        cR4 = wX(),
        J4Q = X6(),
        wr = xI(),
        W4Q = oG(),
        pR4 = qX(),
        lR4 = FW(),
        iR4 = t9Q(),
        nR4 = W6(),
        aR4 = NX(),
        sR4 = W6(),
        rR4 = (A) => {
            (0, sR4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, aR4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(nR4.loadConfigsForDefaultMode),
                G = (0, iR4.getRuntimeConfig)(A);
            (0, I4Q.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, wr.loadConfig)(I4Q.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? pR4.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, Y4Q.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: dR4.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, wr.loadConfig)(J4Q.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, wr.loadConfig)(rfA.NODE_REGION_CONFIG_OPTIONS, {
                    ...rfA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: W4Q.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, wr.loadConfig)({
                    ...J4Q.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || lR4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? cR4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? W4Q.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, wr.loadConfig)(rfA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, wr.loadConfig)(rfA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, wr.loadConfig)(Y4Q.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    X4Q.getRuntimeConfig = rR4
});
var MDA = U((cX7, z4Q) => {
    var {
        defineProperty: ofA,
        getOwnPropertyDescriptor: oR4,
        getOwnPropertyNames: tR4
    } = Object, eR4 = Object.prototype.hasOwnProperty, WS = (A, Q) => ofA(A, "name", {
        value: Q,
        configurable: !0
    }), AT4 = (A, Q) => {
        for (var B in Q) ofA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, QT4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of tR4(Q))
                if (!eR4.call(A, Z) && Z !== B) ofA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = oR4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, BT4 = (A) => QT4(ofA({}, "__esModule", {
        value: !0
    }), A), D4Q = {};
    AT4(D4Q, {
        NODE_REGION_CONFIG_FILE_OPTIONS: () => YT4,
        NODE_REGION_CONFIG_OPTIONS: () => IT4,
        REGION_ENV_NAME: () => H4Q,
        REGION_INI_NAME: () => C4Q,
        getAwsRegionExtensionConfiguration: () => GT4,
        resolveAwsRegionExtensionConfiguration: () => ZT4,
        resolveRegionConfig: () => JT4
    });
    z4Q.exports = BT4(D4Q);
    var GT4 = WS((A) => {
            return {
                setRegion(Q) {
                    A.region = Q
                },
                region() {
                    return A.region
                }
            }
        }, "getAwsRegionExtensionConfiguration"),
        ZT4 = WS((A) => {
            return {
                region: A.region()
            }
        }, "resolveAwsRegionExtensionConfiguration"),
        H4Q = "AWS_REGION",
        C4Q = "region",
        IT4 = {
            environmentVariableSelector: WS((A) => A[H4Q], "environmentVariableSelector"),
            configFileSelector: WS((A) => A[C4Q], "configFileSelector"),
            default: WS(() => {
                throw Error("Region is missing")
            }, "default")
        },
        YT4 = {
            preferredFile: "credentials"
        },
        E4Q = WS((A) => typeof A === "string" && (A.startsWith("fips-") || A.endsWith("-fips")), "isFipsRegion"),
        K4Q = WS((A) => E4Q(A) ? ["fips-aws-global", "aws-fips"].includes(A) ? "us-east-1" : A.replace(/fips-(dkr-|prod-)?|-fips/, "") : A, "getRealRegion"),
        JT4 = WS((A) => {
            let {
                region: Q,
                useFipsEndpoint: B
            } = A;
            if (!Q) throw Error("Region is missing");
            return Object.assign(A, {
                region: WS(async () => {
                    if (typeof Q === "string") return K4Q(Q);
                    let G = await Q();
                    return K4Q(G)
                }, "region"),
                useFipsEndpoint: WS(async () => {
                    let G = typeof Q === "string" ? Q : await Q();
                    if (E4Q(G)) return !0;
                    return typeof B !== "function" ? Promise.resolve(!!B) : B()
                }, "useFipsEndpoint")
            })
        }, "resolveRegionConfig")
});
var l4Q = U((pX7, p4Q) => {
    var {
        defineProperty: tfA,
        getOwnPropertyDescriptor: WT4,
        getOwnPropertyNames: XT4
    } = Object, FT4 = Object.prototype.hasOwnProperty, z5 = (A, Q) => tfA(A, "name", {
        value: Q,
        configurable: !0
    }), VT4 = (A, Q) => {
        for (var B in Q) tfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, KT4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of XT4(Q))
                if (!FT4.call(A, Z) && Z !== B) tfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = WT4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, DT4 = (A) => KT4(tfA({}, "__esModule", {
        value: !0
    }), A), M4Q = {};
    VT4(M4Q, {
        GetRoleCredentialsCommand: () => m4Q,
        GetRoleCredentialsRequestFilterSensitiveLog: () => j4Q,
        GetRoleCredentialsResponseFilterSensitiveLog: () => _4Q,
        InvalidRequestException: () => O4Q,
        ListAccountRolesCommand: () => Q$1,
        ListAccountRolesRequestFilterSensitiveLog: () => k4Q,
        ListAccountsCommand: () => B$1,
        ListAccountsRequestFilterSensitiveLog: () => y4Q,
        LogoutCommand: () => d4Q,
        LogoutRequestFilterSensitiveLog: () => x4Q,
        ResourceNotFoundException: () => R4Q,
        RoleCredentialsFilterSensitiveLog: () => S4Q,
        SSO: () => c4Q,
        SSOClient: () => AhA,
        SSOServiceException: () => k4A,
        TooManyRequestsException: () => T4Q,
        UnauthorizedException: () => P4Q,
        __Client: () => Y2.Client,
        paginateListAccountRoles: () => gT4,
        paginateListAccounts: () => uT4
    });
    p4Q.exports = DT4(M4Q);
    var U4Q = lKA(),
        HT4 = iKA(),
        CT4 = nKA(),
        $4Q = M4A(),
        ET4 = S8(),
        Cv = nB(),
        zT4 = zX(),
        RDA = E5(),
        w4Q = X6(),
        q4Q = nU1(),
        UT4 = z5((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "awsssoportal"
            })
        }, "resolveClientEndpointParameters"),
        efA = {
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
        $T4 = V4Q(),
        N4Q = MDA(),
        L4Q = cC(),
        Y2 = W6(),
        wT4 = z5((A) => {
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
        qT4 = z5((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        NT4 = z5((A, Q) => {
            let B = Object.assign((0, N4Q.getAwsRegionExtensionConfiguration)(A), (0, Y2.getDefaultExtensionConfiguration)(A), (0, L4Q.getHttpHandlerExtensionConfiguration)(A), wT4(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, N4Q.resolveAwsRegionExtensionConfiguration)(B), (0, Y2.resolveDefaultRuntimeConfig)(B), (0, L4Q.resolveHttpHandlerRuntimeConfig)(B), qT4(B))
        }, "resolveRuntimeExtensions"),
        AhA = class extends Y2.Client {
            static {
                z5(this, "SSOClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, $T4.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = UT4(Q),
                    G = (0, $4Q.resolveUserAgentConfig)(B),
                    Z = (0, w4Q.resolveRetryConfig)(G),
                    I = (0, ET4.resolveRegionConfig)(Z),
                    Y = (0, U4Q.resolveHostHeaderConfig)(I),
                    J = (0, RDA.resolveEndpointConfig)(Y),
                    W = (0, q4Q.resolveHttpAuthSchemeConfig)(J),
                    X = NT4(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, $4Q.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, w4Q.getRetryPlugin)(this.config)), this.middlewareStack.use((0, zT4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, U4Q.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, HT4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, CT4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, Cv.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: q4Q.defaultSSOHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: z5(async (F) => new Cv.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, Cv.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        QhA = sG(),
        k4A = class A extends Y2.ServiceException {
            static {
                z5(this, "SSOServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        O4Q = class A extends k4A {
            static {
                z5(this, "InvalidRequestException")
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
        R4Q = class A extends k4A {
            static {
                z5(this, "ResourceNotFoundException")
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
        T4Q = class A extends k4A {
            static {
                z5(this, "TooManyRequestsException")
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
        P4Q = class A extends k4A {
            static {
                z5(this, "UnauthorizedException")
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
        j4Q = z5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: Y2.SENSITIVE_STRING
            }
        }), "GetRoleCredentialsRequestFilterSensitiveLog"),
        S4Q = z5((A) => ({
            ...A,
            ...A.secretAccessKey && {
                secretAccessKey: Y2.SENSITIVE_STRING
            },
            ...A.sessionToken && {
                sessionToken: Y2.SENSITIVE_STRING
            }
        }), "RoleCredentialsFilterSensitiveLog"),
        _4Q = z5((A) => ({
            ...A,
            ...A.roleCredentials && {
                roleCredentials: S4Q(A.roleCredentials)
            }
        }), "GetRoleCredentialsResponseFilterSensitiveLog"),
        k4Q = z5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: Y2.SENSITIVE_STRING
            }
        }), "ListAccountRolesRequestFilterSensitiveLog"),
        y4Q = z5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: Y2.SENSITIVE_STRING
            }
        }), "ListAccountsRequestFilterSensitiveLog"),
        x4Q = z5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: Y2.SENSITIVE_STRING
            }
        }), "LogoutRequestFilterSensitiveLog"),
        ODA = wV(),
        LT4 = z5(async (A, Q) => {
            let B = (0, Cv.requestBuilder)(A, Q),
                G = (0, Y2.map)({}, Y2.isSerializableHeaderValue, {
                    [ZhA]: A[GhA]
                });
            B.bp("/federation/credentials");
            let Z = (0, Y2.map)({
                    [fT4]: [, (0, Y2.expectNonNull)(A[bT4], "roleName")],
                    [b4Q]: [, (0, Y2.expectNonNull)(A[v4Q], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_GetRoleCredentialsCommand"),
        MT4 = z5(async (A, Q) => {
            let B = (0, Cv.requestBuilder)(A, Q),
                G = (0, Y2.map)({}, Y2.isSerializableHeaderValue, {
                    [ZhA]: A[GhA]
                });
            B.bp("/assignment/roles");
            let Z = (0, Y2.map)({
                    [u4Q]: [, A[g4Q]],
                    [h4Q]: [() => A.maxResults !== void 0, () => A[f4Q].toString()],
                    [b4Q]: [, (0, Y2.expectNonNull)(A[v4Q], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountRolesCommand"),
        OT4 = z5(async (A, Q) => {
            let B = (0, Cv.requestBuilder)(A, Q),
                G = (0, Y2.map)({}, Y2.isSerializableHeaderValue, {
                    [ZhA]: A[GhA]
                });
            B.bp("/assignment/accounts");
            let Z = (0, Y2.map)({
                    [u4Q]: [, A[g4Q]],
                    [h4Q]: [() => A.maxResults !== void 0, () => A[f4Q].toString()]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountsCommand"),
        RT4 = z5(async (A, Q) => {
            let B = (0, Cv.requestBuilder)(A, Q),
                G = (0, Y2.map)({}, Y2.isSerializableHeaderValue, {
                    [ZhA]: A[GhA]
                });
            B.bp("/logout");
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_LogoutCommand"),
        TT4 = z5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return BhA(A, Q);
            let B = (0, Y2.map)({
                    $metadata: em(A)
                }),
                G = (0, Y2.expectNonNull)((0, Y2.expectObject)(await (0, ODA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, Y2.take)(G, {
                    roleCredentials: Y2._json
                });
            return Object.assign(B, Z), B
        }, "de_GetRoleCredentialsCommand"),
        PT4 = z5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return BhA(A, Q);
            let B = (0, Y2.map)({
                    $metadata: em(A)
                }),
                G = (0, Y2.expectNonNull)((0, Y2.expectObject)(await (0, ODA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, Y2.take)(G, {
                    nextToken: Y2.expectString,
                    roleList: Y2._json
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountRolesCommand"),
        jT4 = z5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return BhA(A, Q);
            let B = (0, Y2.map)({
                    $metadata: em(A)
                }),
                G = (0, Y2.expectNonNull)((0, Y2.expectObject)(await (0, ODA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, Y2.take)(G, {
                    accountList: Y2._json,
                    nextToken: Y2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountsCommand"),
        ST4 = z5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return BhA(A, Q);
            let B = (0, Y2.map)({
                $metadata: em(A)
            });
            return await (0, Y2.collectBody)(A.body, Q), B
        }, "de_LogoutCommand"),
        BhA = z5(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, ODA.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, ODA.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "InvalidRequestException":
                case "com.amazonaws.sso#InvalidRequestException":
                    throw await kT4(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.sso#ResourceNotFoundException":
                    throw await yT4(B, Q);
                case "TooManyRequestsException":
                case "com.amazonaws.sso#TooManyRequestsException":
                    throw await xT4(B, Q);
                case "UnauthorizedException":
                case "com.amazonaws.sso#UnauthorizedException":
                    throw await vT4(B, Q);
                default:
                    let Z = B.body;
                    return _T4({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        _T4 = (0, Y2.withBaseException)(k4A),
        kT4 = z5(async (A, Q) => {
            let B = (0, Y2.map)({}),
                G = A.body,
                Z = (0, Y2.take)(G, {
                    message: Y2.expectString
                });
            Object.assign(B, Z);
            let I = new O4Q({
                $metadata: em(A),
                ...B
            });
            return (0, Y2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        yT4 = z5(async (A, Q) => {
            let B = (0, Y2.map)({}),
                G = A.body,
                Z = (0, Y2.take)(G, {
                    message: Y2.expectString
                });
            Object.assign(B, Z);
            let I = new R4Q({
                $metadata: em(A),
                ...B
            });
            return (0, Y2.decorateServiceException)(I, A.body)
        }, "de_ResourceNotFoundExceptionRes"),
        xT4 = z5(async (A, Q) => {
            let B = (0, Y2.map)({}),
                G = A.body,
                Z = (0, Y2.take)(G, {
                    message: Y2.expectString
                });
            Object.assign(B, Z);
            let I = new T4Q({
                $metadata: em(A),
                ...B
            });
            return (0, Y2.decorateServiceException)(I, A.body)
        }, "de_TooManyRequestsExceptionRes"),
        vT4 = z5(async (A, Q) => {
            let B = (0, Y2.map)({}),
                G = A.body,
                Z = (0, Y2.take)(G, {
                    message: Y2.expectString
                });
            Object.assign(B, Z);
            let I = new P4Q({
                $metadata: em(A),
                ...B
            });
            return (0, Y2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedExceptionRes"),
        em = z5((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        v4Q = "accountId",
        GhA = "accessToken",
        b4Q = "account_id",
        f4Q = "maxResults",
        h4Q = "max_result",
        g4Q = "nextToken",
        u4Q = "next_token",
        bT4 = "roleName",
        fT4 = "role_name",
        ZhA = "x-amz-sso_bearer_token",
        m4Q = class extends Y2.Command.classBuilder().ep(efA).m(function(A, Q, B, G) {
            return [(0, QhA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, RDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(j4Q, _4Q).ser(LT4).de(TT4).build() {
            static {
                z5(this, "GetRoleCredentialsCommand")
            }
        },
        Q$1 = class extends Y2.Command.classBuilder().ep(efA).m(function(A, Q, B, G) {
            return [(0, QhA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, RDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(k4Q, void 0).ser(MT4).de(PT4).build() {
            static {
                z5(this, "ListAccountRolesCommand")
            }
        },
        B$1 = class extends Y2.Command.classBuilder().ep(efA).m(function(A, Q, B, G) {
            return [(0, QhA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, RDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(y4Q, void 0).ser(OT4).de(jT4).build() {
            static {
                z5(this, "ListAccountsCommand")
            }
        },
        d4Q = class extends Y2.Command.classBuilder().ep(efA).m(function(A, Q, B, G) {
            return [(0, QhA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, RDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(x4Q, void 0).ser(RT4).de(ST4).build() {
            static {
                z5(this, "LogoutCommand")
            }
        },
        hT4 = {
            GetRoleCredentialsCommand: m4Q,
            ListAccountRolesCommand: Q$1,
            ListAccountsCommand: B$1,
            LogoutCommand: d4Q
        },
        c4Q = class extends AhA {
            static {
                z5(this, "SSO")
            }
        };
    (0, Y2.createAggregatedClient)(hT4, c4Q);
    var gT4 = (0, Cv.createPaginator)(AhA, Q$1, "nextToken", "nextToken", "maxResults"),
        uT4 = (0, Cv.createPaginator)(AhA, B$1, "nextToken", "nextToken", "maxResults")
});
var Z$1 = U((i4Q) => {
    Object.defineProperty(i4Q, "__esModule", {
        value: !0
    });
    i4Q.resolveHttpAuthSchemeConfig = i4Q.defaultSSOOIDCHttpAuthSchemeProvider = i4Q.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
    var mT4 = wV(),
        G$1 = K7(),
        dT4 = async (A, Q, B) => {
            return {
                operation: (0, G$1.getSmithyContext)(Q).operation,
                region: await (0, G$1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    i4Q.defaultSSOOIDCHttpAuthSchemeParametersProvider = dT4;

    function cT4(A) {
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
