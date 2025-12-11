/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: commands_002.js
 * 处理时间: 2025-12-09T03:41:37.079Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: commands
 * File: 2/8
 * Lines: 83773 - 85262 (1490 lines)
 * Original file: cli.js
 */

    function gg4(A) {
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

    function ehA(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var ug4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "GetRoleCredentials": {
                Q.push(ehA(A));
                break
            }
            case "ListAccountRoles": {
                Q.push(ehA(A));
                break
            }
            case "ListAccounts": {
                Q.push(ehA(A));
                break
            }
            case "Logout": {
                Q.push(ehA(A));
                break
            }
            default:
                Q.push(gg4(A))
        }
        return Q
    };
    JJQ.defaultSSOHttpAuthSchemeProvider = ug4;
    var mg4 = (A) => {
        let Q = (0, fg4.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, aq1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    JJQ.resolveHttpAuthSchemeConfig = mg4
});
var XJQ = moduleWrapper((eV7, pg4) => {
    pg4.exports = {
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
var pDA = moduleWrapper((AK7, EJQ) => {
    var {
        defineProperty: QgA,
        getOwnPropertyDescriptor: lg4,
        getOwnPropertyNames: ig4
    } = Object, ng4 = Object.prototype.hasOwnProperty, AgA = (A, Q) => QgA(A, "name", {
        value: Q,
        configurable: !0
    }), ag4 = (A, Q) => {
        for (var B in Q) QgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, sg4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of ig4(Q))
                if (!ng4.call(A, Z) && Z !== B) QgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = lg4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, rg4 = (A) => sg4(QgA({}, "__esModule", {
        value: !0
    }), A), VJQ = {};
    ag4(VJQ, {
        NODE_APP_ID_CONFIG_OPTIONS: () => Qu4,
        UA_APP_ID_ENV_NAME: () => HJQ,
        UA_APP_ID_INI_NAME: () => CJQ,
        createDefaultUserAgentProvider: () => DJQ,
        crtAvailability: () => KJQ,
        defaultUserAgent: () => tg4
    });
    EJQ.exports = rg4(VJQ);
    var FJQ = nodeRequire("os"),
        rq1 = nodeRequire("process"),
        KJQ = {
            isCrtAvailable: !1
        },
        og4 = AgA(() => {
            if (KJQ.isCrtAvailable) return ["md/crt-avail"];
            return null
        }, "isCrtAvailable"),
        DJQ = AgA(({
            serviceId: A,
            clientVersion: Q
        }) => {
            return async (B) => {
                let G = [
                        ["aws-sdk-js", Q],
                        ["ua", "2.1"],
                        [`os/TextComponent{(0,FJQ.platform)()}`, (0, FJQ.release)()],
                        ["lang/js"],
                        ["md/nodejs", `TextComponent{rq1.versions.node}`]
                    ],
                    Z = og4();
                if (Z) G.push(Z);
                if (A) G.push([`api/TextComponent{A}`, Q]);
                if (rq1.env.AWS_EXECUTION_ENV) G.push([`exec-env/TextComponent{rq1.env.AWS_EXECUTION_ENV}`]);
                let I = await B?.userAgentAppId?.();
                return I ? [...G, [`app/TextComponent{I}`]] : [...G]
            }
        }, "createDefaultUserAgentProvider"),
        tg4 = DJQ,
        eg4 = F8A(),
        HJQ = "AWS_SDK_UA_APP_ID",
        CJQ = "sdk_ua_app_id",
        Au4 = "sdk-ua-app-id",
        Qu4 = {
            environmentVariableSelector: AgA((A) => A[HJQ], "environmentVariableSelector"),
            configFileSelector: AgA((A) => A[CJQ] ?? A[Au4], "configFileSelector"),
            default: eg4.DEFAULT_UA_APP_ID
        }
});
var yJQ = moduleWrapper((_JQ) => {
    Object.defineProperty(_JQ, "__esModule", {
        value: !0
    });
    _JQ.ruleSet = void 0;
    var TJQ = "required",
        JL = "fn",
        WL = "argv",
        D8A = "ref",
        zJQ = !0,
        UJQ = "isSet",
        lDA = "booleanEquals",
        V8A = "error",
        K8A = "endpoint",
        xv = "tree",
        oq1 = "PartitionResult",
        tq1 = "getAttr",
        $JQ = {
            [TJQ]: !1,
            type: "String"
        },
        wJQ = {
            [TJQ]: !0,
            default: !1,
            type: "Boolean"
        },
        qJQ = {
            [D8A]: "Endpoint"
        },
        PJQ = {
            [JL]: lDA,
            [WL]: [{
                [D8A]: "UseFIPS"
            }, !0]
        },
        jJQ = {
            [JL]: lDA,
            [WL]: [{
                [D8A]: "UseDualStack"
            }, !0]
        },
        YL = {},
        NJQ = {
            [JL]: tq1,
            [WL]: [{
                [D8A]: oq1
            }, "supportsFIPS"]
        },
        SJQ = {
            [D8A]: oq1
        },
        LJQ = {
            [JL]: lDA,
            [WL]: [!0, {
                [JL]: tq1,
                [WL]: [SJQ, "supportsDualStack"]
            }]
        },
        MJQ = [PJQ],
        OJQ = [jJQ],
        RJQ = [{
            [D8A]: "Region"
        }],
        Bu4 = {
            version: "1.0",
            parameters: {
                Region: $JQ,
                UseDualStack: wJQ,
                UseFIPS: wJQ,
                Endpoint: $JQ
            },
            rules: [{
                conditions: [{
                    [JL]: UJQ,
                    [WL]: [qJQ]
                }],
                rules: [{
                    conditions: MJQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: V8A
                }, {
                    conditions: OJQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: V8A
                }, {
                    endpoint: {
                        url: qJQ,
                        properties: YL,
                        headers: YL
                    },
                    type: K8A
                }],
                type: xv
            }, {
                conditions: [{
                    [JL]: UJQ,
                    [WL]: RJQ
                }],
                rules: [{
                    conditions: [{
                        [JL]: "aws.partition",
                        [WL]: RJQ,
                        assign: oq1
                    }],
                    rules: [{
                        conditions: [PJQ, jJQ],
                        rules: [{
                            conditions: [{
                                [JL]: lDA,
                                [WL]: [zJQ, NJQ]
                            }, LJQ],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: YL,
                                    headers: YL
                                },
                                type: K8A
                            }],
                            type: xv
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: V8A
                        }],
                        type: xv
                    }, {
                        conditions: MJQ,
                        rules: [{
                            conditions: [{
                                [JL]: lDA,
                                [WL]: [NJQ, zJQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [JL]: "stringEquals",
                                    [WL]: [{
                                        [JL]: tq1,
                                        [WL]: [SJQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://portal.sso.{Region}.amazonaws.com",
                                    properties: YL,
                                    headers: YL
                                },
                                type: K8A
                            }, {
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: YL,
                                    headers: YL
                                },
                                type: K8A
                            }],
                            type: xv
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: V8A
                        }],
                        type: xv
                    }, {
                        conditions: OJQ,
                        rules: [{
                            conditions: [LJQ],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: YL,
                                    headers: YL
                                },
                                type: K8A
                            }],
                            type: xv
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: V8A
                        }],
                        type: xv
                    }, {
                        endpoint: {
                            url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                            properties: YL,
                            headers: YL
                        },
                        type: K8A
                    }],
                    type: xv
                }],
                type: xv
            }, {
                error: "Invalid Configuration: Missing Region",
                type: V8A
            }]
        };
    _JQ.ruleSet = Bu4
});
var bJQ = moduleWrapper((xJQ) => {
    Object.defineProperty(xJQ, "__esModule", {
        value: !0
    });
    xJQ.defaultEndpointResolver = void 0;
    var Gu4 = Z8A(),
        eq1 = II(),
        Zu4 = yJQ(),
        Iu4 = new eq1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        Yu4 = (A, Q = {}) => {
            return Iu4.get(A, () => (0, eq1.resolveEndpoint)(Zu4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    xJQ.defaultEndpointResolver = Yu4;
    eq1.customEndpointFunctions.aws = Gu4.awsEndpointFunctions
});
var mJQ = moduleWrapper((gJQ) => {
    Object.defineProperty(gJQ, "__esModule", {
        value: !0
    });
    gJQ.getRuntimeConfig = void 0;
    var Ju4 = LV(),
        Wu4 = nB(),
        Xu4 = p6(),
        Fu4 = zJ(),
        fJQ = Wd(),
        hJQ = L2(),
        Vu4 = sq1(),
        Ku4 = bJQ(),
        Du4 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? fJQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? fJQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? Ku4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? Vu4.defaultSSOHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new Ju4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new Wu4.NoAuthSigner
                }],
                logger: A?.logger ?? new Xu4.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO",
                urlParser: A?.urlParser ?? Fu4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? hJQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? hJQ.toUtf8
            }
        };
    gJQ.getRuntimeConfig = Du4
});
var aJQ = moduleWrapper((iJQ) => {
    Object.defineProperty(iJQ, "__esModule", {
        value: !0
    });
    iJQ.getRuntimeConfig = void 0;
    var Hu4 = Pr(),
        Cu4 = Hu4.__importDefault(XJQ()),
        dJQ = LV(),
        cJQ = pDA(),
        BgA = S8(),
        Eu4 = wX(),
        pJQ = X6(),
        kr = xI(),
        lJQ = oG(),
        zu4 = qX(),
        Uu4 = FW(),
        $u4 = mJQ(),
        wu4 = p6(),
        qu4 = NX(),
        Nu4 = p6(),
        Lu4 = (A) => {
            (0, Nu4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, qu4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(wu4.loadConfigsForDefaultMode),
                G = (0, $u4.getRuntimeConfig)(A);
            (0, dJQ.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, kr.loadConfig)(dJQ.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? zu4.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, cJQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: Cu4.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, kr.loadConfig)(pJQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, kr.loadConfig)(BgA.NODE_REGION_CONFIG_OPTIONS, {
                    ...BgA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: lJQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, kr.loadConfig)({
                    ...pJQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || Uu4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? Eu4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? lJQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, kr.loadConfig)(BgA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, kr.loadConfig)(BgA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, kr.loadConfig)(cJQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    iJQ.getRuntimeConfig = Lu4
});
var iDA = moduleWrapper((IK7, AWQ) => {
    var {
        defineProperty: GgA,
        getOwnPropertyDescriptor: Mu4,
        getOwnPropertyNames: Ou4
    } = Object, Ru4 = Object.prototype.hasOwnProperty, ES = (A, Q) => GgA(A, "name", {
        value: Q,
        configurable: !0
    }), Tu4 = (A, Q) => {
        for (var B in Q) GgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Pu4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Ou4(Q))
                if (!Ru4.call(A, Z) && Z !== B) GgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Mu4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ju4 = (A) => Pu4(GgA({}, "__esModule", {
        value: !0
    }), A), rJQ = {};
    Tu4(rJQ, {
        NODE_REGION_CONFIG_FILE_OPTIONS: () => yu4,
        NODE_REGION_CONFIG_OPTIONS: () => ku4,
        REGION_ENV_NAME: () => oJQ,
        REGION_INI_NAME: () => tJQ,
        getAwsRegionExtensionConfiguration: () => Su4,
        resolveAwsRegionExtensionConfiguration: () => _u4,
        resolveRegionConfig: () => xu4
    });
    AWQ.exports = ju4(rJQ);
    var Su4 = ES((A) => {
            return {
                setRegion(Q) {
                    A.region = Q
                },
                region() {
                    return A.region
                }
            }
        }, "getAwsRegionExtensionConfiguration"),
        _u4 = ES((A) => {
            return {
                region: A.region()
            }
        }, "resolveAwsRegionExtensionConfiguration"),
        oJQ = "AWS_REGION",
        tJQ = "region",
        ku4 = {
            environmentVariableSelector: ES((A) => A[oJQ], "environmentVariableSelector"),
            configFileSelector: ES((A) => A[tJQ], "configFileSelector"),
            default: ES(() => {
                throw Error("Region is missing")
            }, "default")
        },
        yu4 = {
            preferredFile: "credentials"
        },
        eJQ = ES((A) => typeof A === "string" && (A.startsWith("fips-") || A.endsWith("-fips")), "isFipsRegion"),
        sJQ = ES((A) => eJQ(A) ? ["fips-aws-global", "aws-fips"].includes(A) ? "us-east-1" : A.replace(/fips-(dkr-|prod-)?|-fips/, "") : A, "getRealRegion"),
        xu4 = ES((A) => {
            let {
                region: Q,
                useFipsEndpoint: B
            } = A;
            if (!Q) throw Error("Region is missing");
            return Object.assign(A, {
                region: ES(async () => {
                    if (typeof Q === "string") return sJQ(Q);
                    let G = await Q();
                    return sJQ(G)
                }, "region"),
                useFipsEndpoint: ES(async () => {
                    let G = typeof Q === "string" ? Q : await Q();
                    if (eJQ(G)) return !0;
                    return typeof B !== "function" ? Promise.resolve(!!B) : B()
                }, "useFipsEndpoint")
            })
        }, "resolveRegionConfig")
});
var PWQ = moduleWrapper((YK7, TWQ) => {
    var {
        defineProperty: ZgA,
        getOwnPropertyDescriptor: vu4,
        getOwnPropertyNames: bu4
    } = Object, fu4 = Object.prototype.hasOwnProperty, U5 = (A, Q) => ZgA(A, "name", {
        value: Q,
        configurable: !0
    }), hu4 = (A, Q) => {
        for (var B in Q) ZgA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, gu4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bu4(Q))
                if (!fu4.call(A, Z) && Z !== B) ZgA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = vu4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, uu4 = (A) => gu4(ZgA({}, "__esModule", {
        value: !0
    }), A), JWQ = {};
    hu4(JWQ, {
        GetRoleCredentialsCommand: () => MWQ,
        GetRoleCredentialsRequestFilterSensitiveLog: () => KWQ,
        GetRoleCredentialsResponseFilterSensitiveLog: () => HWQ,
        InvalidRequestException: () => WWQ,
        ListAccountRolesCommand: () => AN1,
        ListAccountRolesRequestFilterSensitiveLog: () => CWQ,
        ListAccountsCommand: () => QN1,
        ListAccountsRequestFilterSensitiveLog: () => EWQ,
        LogoutCommand: () => OWQ,
        LogoutRequestFilterSensitiveLog: () => zWQ,
        ResourceNotFoundException: () => XWQ,
        RoleCredentialsFilterSensitiveLog: () => DWQ,
        SSO: () => RWQ,
        SSOClient: () => YgA,
        SSOServiceException: () => H8A,
        TooManyRequestsException: () => FWQ,
        UnauthorizedException: () => VWQ,
        __Client: () => J2.Client,
        paginateListAccountRoles: () => Km4,
        paginateListAccounts: () => Dm4
    });
    TWQ.exports = uu4(JWQ);
    var QWQ = bDA(),
        mu4 = fDA(),
        du4 = hDA(),
        BWQ = F8A(),
        cu4 = S8(),
        vv = nB(),
        pu4 = zX(),
        aDA = E5(),
        GWQ = X6(),
        ZWQ = sq1(),
        lu4 = U5((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "awsssoportal"
            })
        }, "resolveClientEndpointParameters"),
        IgA = {
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
        iu4 = aJQ(),
        IWQ = iDA(),
        YWQ = cz(),
        J2 = p6(),
        nu4 = U5((A) => {
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
        au4 = U5((A) => {
            return {
                httpAuthSchemes: A.httpAuthSchemes(),
                httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
                credentials: A.credentials()
            }
        }, "resolveHttpAuthRuntimeConfig"),
        su4 = U5((A, Q) => {
            let B = Object.assign((0, IWQ.getAwsRegionExtensionConfiguration)(A), (0, J2.getDefaultExtensionConfiguration)(A), (0, YWQ.getHttpHandlerExtensionConfiguration)(A), nu4(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, IWQ.resolveAwsRegionExtensionConfiguration)(B), (0, J2.resolveDefaultRuntimeConfig)(B), (0, YWQ.resolveHttpHandlerRuntimeConfig)(B), au4(B))
        }, "resolveRuntimeExtensions"),
        YgA = class extends J2.Client {
            static {
                U5(this, "SSOClient")
            }
            config;
            constructor(...[A]) {
                let Q = (0, iu4.getRuntimeConfig)(A || {});
                super(Q);
                this.initConfig = Q;
                let B = lu4(Q),
                    G = (0, BWQ.resolveUserAgentConfig)(B),
                    Z = (0, GWQ.resolveRetryConfig)(G),
                    I = (0, cu4.resolveRegionConfig)(Z),
                    Y = (0, QWQ.resolveHostHeaderConfig)(I),
                    J = (0, aDA.resolveEndpointConfig)(Y),
                    W = (0, ZWQ.resolveHttpAuthSchemeConfig)(J),
                    X = su4(W, A?.extensions || []);
                this.config = X, this.middlewareStack.use((0, BWQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, GWQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, pu4.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, QWQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, mu4.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, du4.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, vv.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                    httpAuthSchemeParametersProvider: ZWQ.defaultSSOHttpAuthSchemeParametersProvider,
                    identityProviderConfigProvider: U5(async (F) => new vv.DefaultIdentityProviderConfig({
                        "aws.auth#sigv4": F.credentials
                    }), "identityProviderConfigProvider")
                })), this.middlewareStack.use((0, vv.getHttpSigningPlugin)(this.config))
            }
            destroy() {
                super.destroy()
            }
        },
        JgA = sG(),
        H8A = class A extends J2.ServiceException {
            static {
                U5(this, "SSOServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        WWQ = class A extends H8A {
            static {
                U5(this, "InvalidRequestException")
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
        XWQ = class A extends H8A {
            static {
                U5(this, "ResourceNotFoundException")
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
        FWQ = class A extends H8A {
            static {
                U5(this, "TooManyRequestsException")
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
        VWQ = class A extends H8A {
            static {
                U5(this, "UnauthorizedException")
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
        KWQ = U5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: J2.SENSITIVE_STRING
            }
        }), "GetRoleCredentialsRequestFilterSensitiveLog"),
        DWQ = U5((A) => ({
            ...A,
            ...A.secretAccessKey && {
                secretAccessKey: J2.SENSITIVE_STRING
            },
            ...A.sessionToken && {
                sessionToken: J2.SENSITIVE_STRING
            }
        }), "RoleCredentialsFilterSensitiveLog"),
        HWQ = U5((A) => ({
            ...A,
            ...A.roleCredentials && {
                roleCredentials: DWQ(A.roleCredentials)
            }
        }), "GetRoleCredentialsResponseFilterSensitiveLog"),
        CWQ = U5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: J2.SENSITIVE_STRING
            }
        }), "ListAccountRolesRequestFilterSensitiveLog"),
        EWQ = U5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: J2.SENSITIVE_STRING
            }
        }), "ListAccountsRequestFilterSensitiveLog"),
        zWQ = U5((A) => ({
            ...A,
            ...A.accessToken && {
                accessToken: J2.SENSITIVE_STRING
            }
        }), "LogoutRequestFilterSensitiveLog"),
        nDA = LV(),
        ru4 = U5(async (A, Q) => {
            let B = (0, vv.requestBuilder)(A, Q),
                G = (0, J2.map)({}, J2.isSerializableHeaderValue, {
                    [FgA]: A[XgA]
                });
            B.bp("/federation/credentials");
            let Z = (0, J2.map)({
                    [Fm4]: [, (0, J2.expectNonNull)(A[Xm4], "roleName")],
                    [$WQ]: [, (0, J2.expectNonNull)(A[UWQ], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_GetRoleCredentialsCommand"),
        ou4 = U5(async (A, Q) => {
            let B = (0, vv.requestBuilder)(A, Q),
                G = (0, J2.map)({}, J2.isSerializableHeaderValue, {
                    [FgA]: A[XgA]
                });
            B.bp("/assignment/roles");
            let Z = (0, J2.map)({
                    [LWQ]: [, A[NWQ]],
                    [qWQ]: [() => A.maxResults !== void 0, () => A[wWQ].toString()],
                    [$WQ]: [, (0, J2.expectNonNull)(A[UWQ], "accountId")]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountRolesCommand"),
        tu4 = U5(async (A, Q) => {
            let B = (0, vv.requestBuilder)(A, Q),
                G = (0, J2.map)({}, J2.isSerializableHeaderValue, {
                    [FgA]: A[XgA]
                });
            B.bp("/assignment/accounts");
            let Z = (0, J2.map)({
                    [LWQ]: [, A[NWQ]],
                    [qWQ]: [() => A.maxResults !== void 0, () => A[wWQ].toString()]
                }),
                I;
            return B.m("GET").h(G).q(Z).b(I), B.build()
        }, "se_ListAccountsCommand"),
        eu4 = U5(async (A, Q) => {
            let B = (0, vv.requestBuilder)(A, Q),
                G = (0, J2.map)({}, J2.isSerializableHeaderValue, {
                    [FgA]: A[XgA]
                });
            B.bp("/logout");
            let Z;
            return B.m("POST").h(G).b(Z), B.build()
        }, "se_LogoutCommand"),
        Am4 = U5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return WgA(A, Q);
            let B = (0, J2.map)({
                    $metadata: Fd(A)
                }),
                G = (0, J2.expectNonNull)((0, J2.expectObject)(await (0, nDA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, J2.take)(G, {
                    roleCredentials: J2._json
                });
            return Object.assign(B, Z), B
        }, "de_GetRoleCredentialsCommand"),
        Qm4 = U5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return WgA(A, Q);
            let B = (0, J2.map)({
                    $metadata: Fd(A)
                }),
                G = (0, J2.expectNonNull)((0, J2.expectObject)(await (0, nDA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, J2.take)(G, {
                    nextToken: J2.expectString,
                    roleList: J2._json
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountRolesCommand"),
        Bm4 = U5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return WgA(A, Q);
            let B = (0, J2.map)({
                    $metadata: Fd(A)
                }),
                G = (0, J2.expectNonNull)((0, J2.expectObject)(await (0, nDA.parseJsonBody)(A.body, Q)), "body"),
                Z = (0, J2.take)(G, {
                    accountList: J2._json,
                    nextToken: J2.expectString
                });
            return Object.assign(B, Z), B
        }, "de_ListAccountsCommand"),
        Gm4 = U5(async (A, Q) => {
            if (A.statusCode !== 200 && A.statusCode >= 300) return WgA(A, Q);
            let B = (0, J2.map)({
                $metadata: Fd(A)
            });
            return await (0, J2.collectBody)(A.body, Q), B
        }, "de_LogoutCommand"),
        WgA = U5(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, nDA.parseJsonErrorBody)(A.body, Q)
                },
                G = (0, nDA.loadRestJsonErrorCode)(A, B.body);
            switch (G) {
                case "InvalidRequestException":
                case "com.amazonaws.sso#InvalidRequestException":
                    throw await Im4(B, Q);
                case "ResourceNotFoundException":
                case "com.amazonaws.sso#ResourceNotFoundException":
                    throw await Ym4(B, Q);
                case "TooManyRequestsException":
                case "com.amazonaws.sso#TooManyRequestsException":
                    throw await Jm4(B, Q);
                case "UnauthorizedException":
                case "com.amazonaws.sso#UnauthorizedException":
                    throw await Wm4(B, Q);
                default:
                    let Z = B.body;
                    return Zm4({
                        output: A,
                        parsedBody: Z,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        Zm4 = (0, J2.withBaseException)(H8A),
        Im4 = U5(async (A, Q) => {
            let B = (0, J2.map)({}),
                G = A.body,
                Z = (0, J2.take)(G, {
                    message: J2.expectString
                });
            Object.assign(B, Z);
            let I = new WWQ({
                $metadata: Fd(A),
                ...B
            });
            return (0, J2.decorateServiceException)(I, A.body)
        }, "de_InvalidRequestExceptionRes"),
        Ym4 = U5(async (A, Q) => {
            let B = (0, J2.map)({}),
                G = A.body,
                Z = (0, J2.take)(G, {
                    message: J2.expectString
                });
            Object.assign(B, Z);
            let I = new XWQ({
                $metadata: Fd(A),
                ...B
            });
            return (0, J2.decorateServiceException)(I, A.body)
        }, "de_ResourceNotFoundExceptionRes"),
        Jm4 = U5(async (A, Q) => {
            let B = (0, J2.map)({}),
                G = A.body,
                Z = (0, J2.take)(G, {
                    message: J2.expectString
                });
            Object.assign(B, Z);
            let I = new FWQ({
                $metadata: Fd(A),
                ...B
            });
            return (0, J2.decorateServiceException)(I, A.body)
        }, "de_TooManyRequestsExceptionRes"),
        Wm4 = U5(async (A, Q) => {
            let B = (0, J2.map)({}),
                G = A.body,
                Z = (0, J2.take)(G, {
                    message: J2.expectString
                });
            Object.assign(B, Z);
            let I = new VWQ({
                $metadata: Fd(A),
                ...B
            });
            return (0, J2.decorateServiceException)(I, A.body)
        }, "de_UnauthorizedExceptionRes"),
        Fd = U5((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        UWQ = "accountId",
        XgA = "accessToken",
        $WQ = "account_id",
        wWQ = "maxResults",
        qWQ = "max_result",
        NWQ = "nextToken",
        LWQ = "next_token",
        Xm4 = "roleName",
        Fm4 = "role_name",
        FgA = "x-amz-sso_bearer_token",
        MWQ = class extends J2.Command.classBuilder().ep(IgA).m(function(A, Q, B, G) {
            return [(0, JgA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, aDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "GetRoleCredentials", {}).n("SSOClient", "GetRoleCredentialsCommand").f(KWQ, HWQ).ser(ru4).de(Am4).build() {
            static {
                U5(this, "GetRoleCredentialsCommand")
            }
        },
        AN1 = class extends J2.Command.classBuilder().ep(IgA).m(function(A, Q, B, G) {
            return [(0, JgA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, aDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccountRoles", {}).n("SSOClient", "ListAccountRolesCommand").f(CWQ, void 0).ser(ou4).de(Qm4).build() {
            static {
                U5(this, "ListAccountRolesCommand")
            }
        },
        QN1 = class extends J2.Command.classBuilder().ep(IgA).m(function(A, Q, B, G) {
            return [(0, JgA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, aDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "ListAccounts", {}).n("SSOClient", "ListAccountsCommand").f(EWQ, void 0).ser(tu4).de(Bm4).build() {
            static {
                U5(this, "ListAccountsCommand")
            }
        },
        OWQ = class extends J2.Command.classBuilder().ep(IgA).m(function(A, Q, B, G) {
            return [(0, JgA.getSerdePlugin)(B, this.serialize, this.deserialize), (0, aDA.getEndpointPlugin)(B, A.getEndpointParameterInstructions())]
        }).s("SWBPortalService", "Logout", {}).n("SSOClient", "LogoutCommand").f(zWQ, void 0).ser(eu4).de(Gm4).build() {
            static {
                U5(this, "LogoutCommand")
            }
        },
        Vm4 = {
            GetRoleCredentialsCommand: MWQ,
            ListAccountRolesCommand: AN1,
            ListAccountsCommand: QN1,
            LogoutCommand: OWQ
        },
        RWQ = class extends YgA {
            static {
                U5(this, "SSO")
            }
        };
    (0, J2.createAggregatedClient)(Vm4, RWQ);
    var Km4 = (0, vv.createPaginator)(YgA, AN1, "nextToken", "nextToken", "maxResults"),
        Dm4 = (0, vv.createPaginator)(YgA, QN1, "nextToken", "nextToken", "maxResults")
});
var GN1 = moduleWrapper((jWQ) => {
    Object.defineProperty(jWQ, "__esModule", {
        value: !0
    });
    jWQ.resolveHttpAuthSchemeConfig = jWQ.defaultSSOOIDCHttpAuthSchemeProvider = jWQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = void 0;
    var Hm4 = LV(),
        BN1 = K7(),
        Cm4 = async (A, Q, B) => {
            return {
                operation: (0, BN1.getSmithyContext)(Q).operation,
                region: await (0, BN1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    jWQ.defaultSSOOIDCHttpAuthSchemeParametersProvider = Cm4;

    function Em4(A) {
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

    function zm4(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var Um4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "CreateToken": {
                Q.push(zm4(A));
                break
            }
            default:
                Q.push(Em4(A))
        }
        return Q
    };
    jWQ.defaultSSOOIDCHttpAuthSchemeProvider = Um4;
    var $m4 = (A) => {
        let Q = (0, Hm4.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, BN1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    jWQ.resolveHttpAuthSchemeConfig = $m4
});
var ZN1 = moduleWrapper((HK7, Nm4) => {
    Nm4.exports = {
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
var nWQ = moduleWrapper((lWQ) => {
    Object.defineProperty(lWQ, "__esModule", {
        value: !0
    });
    lWQ.ruleSet = void 0;
    var mWQ = "required",
        FL = "fn",
        VL = "argv",
        z8A = "ref",
        _WQ = !0,
        kWQ = "isSet",
        sDA = "booleanEquals",
        C8A = "error",
        E8A = "endpoint",
        bv = "tree",
        IN1 = "PartitionResult",
        YN1 = "getAttr",
        yWQ = {
            [mWQ]: !1,
            type: "String"
        },
        xWQ = {
            [mWQ]: !0,
            default: !1,
            type: "Boolean"
        },
        vWQ = {
            [z8A]: "Endpoint"
        },
        dWQ = {
            [FL]: sDA,
            [VL]: [{
                [z8A]: "UseFIPS"
            }, !0]
        },
        cWQ = {
            [FL]: sDA,
            [VL]: [{
                [z8A]: "UseDualStack"
            }, !0]
        },
        XL = {},
        bWQ = {
            [FL]: YN1,
            [VL]: [{
                [z8A]: IN1
            }, "supportsFIPS"]
        },
        pWQ = {
            [z8A]: IN1
        },
        fWQ = {
            [FL]: sDA,
            [VL]: [!0, {
                [FL]: YN1,
                [VL]: [pWQ, "supportsDualStack"]
            }]
        },
        hWQ = [dWQ],
        gWQ = [cWQ],
        uWQ = [{
            [z8A]: "Region"
        }],
        Lm4 = {
            version: "1.0",
            parameters: {
                Region: yWQ,
                UseDualStack: xWQ,
                UseFIPS: xWQ,
                Endpoint: yWQ
            },
            rules: [{
                conditions: [{
                    [FL]: kWQ,
                    [VL]: [vWQ]
                }],
                rules: [{
                    conditions: hWQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: C8A
                }, {
                    conditions: gWQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: C8A
                }, {
                    endpoint: {
                        url: vWQ,
                        properties: XL,
                        headers: XL
                    },
                    type: E8A
                }],
                type: bv
            }, {
                conditions: [{
                    [FL]: kWQ,
                    [VL]: uWQ
                }],
                rules: [{
                    conditions: [{
                        [FL]: "aws.partition",
                        [VL]: uWQ,
                        assign: IN1
                    }],
                    rules: [{
                        conditions: [dWQ, cWQ],
                        rules: [{
                            conditions: [{
                                [FL]: sDA,
                                [VL]: [_WQ, bWQ]
                            }, fWQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: XL,
                                    headers: XL
                                },
                                type: E8A
                            }],
                            type: bv
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: C8A
                        }],
                        type: bv
                    }, {
                        conditions: hWQ,
                        rules: [{
                            conditions: [{
                                [FL]: sDA,
                                [VL]: [bWQ, _WQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [FL]: "stringEquals",
                                    [VL]: [{
                                        [FL]: YN1,
                                        [VL]: [pWQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://oidc.{Region}.amazonaws.com",
                                    properties: XL,
                                    headers: XL
                                },
                                type: E8A
                            }, {
                                endpoint: {
                                    url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: XL,
                                    headers: XL
                                },
                                type: E8A
                            }],
                            type: bv
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: C8A
                        }],
                        type: bv
                    }, {
                        conditions: gWQ,
                        rules: [{
                            conditions: [fWQ],
                            rules: [{
                                endpoint: {
                                    url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: XL,
                                    headers: XL
                                },
                                type: E8A
                            }],
                            type: bv
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: C8A
                        }],
                        type: bv
                    }, {
                        endpoint: {
                            url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}",
                            properties: XL,
                            headers: XL
                        },
                        type: E8A
                    }],
                    type: bv
                }],
                type: bv
            }, {
                error: "Invalid Configuration: Missing Region",
                type: C8A
            }]
        };
    lWQ.ruleSet = Lm4
});
var rWQ = moduleWrapper((aWQ) => {
    Object.defineProperty(aWQ, "__esModule", {
        value: !0
    });
    aWQ.defaultEndpointResolver = void 0;