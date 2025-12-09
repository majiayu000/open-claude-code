/**
 * Claude Code Decompiled
 * Category: auth
 * File: 20/61
 * Lines: 94202 - 95698 (1497 lines)
 * Original file: cli.js
 */

    var uEQ = "user-agent",
        YM1 = "x-amz-user-agent",
        mEQ = " ",
        JM1 = "/",
        lt4 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        it4 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
        dEQ = "-",
        nt4 = 1024;

    function aEQ(A) {
        let Q = "";
        for (let B in A) {
            let G = A[B];
            if (Q.length + G.length + 1 <= nt4) {
                if (Q.length) Q += "," + G;
                else Q += G;
                continue
            }
            break
        }
        return Q
    }
    dv(aEQ, "encodeFeatures");
    var sEQ = dv((A) => (Q, B) => async (G) => {
            let {
                request: Z
            } = G;
            if (!ct4.HttpRequest.isInstance(Z)) return Q(G);
            let {
                headers: I
            } = Z, Y = B?.userAgent?.map(ZuA) || [], J = (await A.defaultUserAgentProvider()).map(ZuA);
            await nEQ(B, A, G);
            let W = B;
            J.push(`m/${aEQ(Object.assign({},B.__smithy_context?.features,W.__aws_sdk_context?.features))}`);
            let X = A?.customUserAgent?.map(ZuA) || [],
                F = await A.userAgentAppId();
            if (F) J.push(ZuA([`app/${F}`]));
            let V = (0, dt4.getUserAgentPrefix)(),
                K = (V ? [V] : []).concat([...J, ...Y, ...X]).join(mEQ),
                D = [...J.filter((H) => H.startsWith("aws-sdk-")), ...X].join(mEQ);
            if (A.runtime !== "browser") {
                if (D) I[YM1] = I[YM1] ? `${I[uEQ]} ${D}` : D;
                I[uEQ] = K
            } else I[YM1] = K;
            return Q({
                ...G,
                request: Z
            })
        }, "userAgentMiddleware"),
        ZuA = dv((A) => {
            let Q = A[0].split(JM1).map((Y) => Y.replace(lt4, dEQ)).join(JM1),
                B = A[1]?.replace(it4, dEQ),
                G = Q.indexOf(JM1),
                Z = Q.substring(0, G),
                I = Q.substring(G + 1);
            if (Z === "api") I = I.toLowerCase();
            return [Z, I, B].filter((Y) => Y && Y.length > 0).reduce((Y, J, W) => {
                switch (W) {
                    case 0:
                        return J;
                    case 1:
                        return `${Y}/${J}`;
                    default:
                        return `${Y}#${J}`
                }
            }, "")
        }, "escapeUserAgent"),
        rEQ = {
            name: "getUserAgentMiddleware",
            step: "build",
            priority: "low",
            tags: ["SET_USER_AGENT", "USER_AGENT"],
            override: !0
        },
        at4 = dv((A) => ({
            applyToStack: dv((Q) => {
                Q.add(sEQ(A), rEQ)
            }, "applyToStack")
        }), "getUserAgentPlugin")
});
var XM1 = U((tEQ) => {
    Object.defineProperty(tEQ, "__esModule", {
        value: !0
    });
    tEQ.resolveHttpAuthSchemeConfig = tEQ.resolveStsAuthConfig = tEQ.defaultSTSHttpAuthSchemeProvider = tEQ.defaultSTSHttpAuthSchemeParametersProvider = void 0;
    var st4 = pz(),
        WM1 = K7(),
        rt4 = HHA(),
        ot4 = async (A, Q, B) => {
            return {
                operation: (0, WM1.getSmithyContext)(Q).operation,
                region: await (0, WM1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    tEQ.defaultSTSHttpAuthSchemeParametersProvider = ot4;

    function tt4(A) {
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

    function et4(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var Ae4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "AssumeRoleWithWebIdentity": {
                Q.push(et4(A));
                break
            }
            default:
                Q.push(tt4(A))
        }
        return Q
    };
    tEQ.defaultSTSHttpAuthSchemeProvider = Ae4;
    var Qe4 = (A) => Object.assign(A, {
        stsClientCtor: rt4.STSClient
    });
    tEQ.resolveStsAuthConfig = Qe4;
    var Be4 = (A) => {
        let Q = tEQ.resolveStsAuthConfig(A),
            B = (0, st4.resolveAwsSdkSigV4Config)(Q);
        return Object.assign(B, {
            authSchemePreference: (0, WM1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    tEQ.resolveHttpAuthSchemeConfig = Be4
});
var CHA = U((QzQ) => {
    Object.defineProperty(QzQ, "__esModule", {
        value: !0
    });
    QzQ.commonParams = QzQ.resolveClientEndpointParameters = void 0;
    var Ie4 = (A) => {
        return Object.assign(A, {
            useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
            useFipsEndpoint: A.useFipsEndpoint ?? !1,
            useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
            defaultSigningName: "sts"
        })
    };
    QzQ.resolveClientEndpointParameters = Ie4;
    QzQ.commonParams = {
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
var FM1 = U((jH7, Je4) => {
    Je4.exports = {
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
var WuA = U((SH7, XzQ) => {
    var {
        defineProperty: JuA,
        getOwnPropertyDescriptor: We4,
        getOwnPropertyNames: Xe4
    } = Object, Fe4 = Object.prototype.hasOwnProperty, YuA = (A, Q) => JuA(A, "name", {
        value: Q,
        configurable: !0
    }), Ve4 = (A, Q) => {
        for (var B in Q) JuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Ke4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Xe4(Q))
                if (!Fe4.call(A, Z) && Z !== B) JuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = We4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, De4 = (A) => Ke4(JuA({}, "__esModule", {
        value: !0
    }), A), ZzQ = {};
    Ve4(ZzQ, {
        NODE_APP_ID_CONFIG_OPTIONS: () => Ue4,
        UA_APP_ID_ENV_NAME: () => JzQ,
        UA_APP_ID_INI_NAME: () => WzQ,
        createDefaultUserAgentProvider: () => YzQ,
        crtAvailability: () => IzQ,
        defaultUserAgent: () => Ce4
    });
    XzQ.exports = De4(ZzQ);
    var GzQ = UA("os"),
        VM1 = UA("process"),
        IzQ = {
            isCrtAvailable: !1
        },
        He4 = YuA(() => {
            if (IzQ.isCrtAvailable) return ["md/crt-avail"];
            return null
        }, "isCrtAvailable"),
        YzQ = YuA(({
            serviceId: A,
            clientVersion: Q
        }) => {
            return async (B) => {
                let G = [
                        ["aws-sdk-js", Q],
                        ["ua", "2.1"],
                        [`os/${(0,GzQ.platform)()}`, (0, GzQ.release)()],
                        ["lang/js"],
                        ["md/nodejs", `${VM1.versions.node}`]
                    ],
                    Z = He4();
                if (Z) G.push(Z);
                if (A) G.push([`api/${A}`, Q]);
                if (VM1.env.AWS_EXECUTION_ENV) G.push([`exec-env/${VM1.env.AWS_EXECUTION_ENV}`]);
                let I = await B?.userAgentAppId?.();
                return I ? [...G, [`app/${I}`]] : [...G]
            }
        }, "createDefaultUserAgentProvider"),
        Ce4 = YzQ,
        Ee4 = DHA(),
        JzQ = "AWS_SDK_UA_APP_ID",
        WzQ = "sdk_ua_app_id",
        ze4 = "sdk-ua-app-id",
        Ue4 = {
            environmentVariableSelector: YuA((A) => A[JzQ], "environmentVariableSelector"),
            configFileSelector: YuA((A) => A[WzQ] ?? A[ze4], "configFileSelector"),
            default: Ee4.DEFAULT_UA_APP_ID
        }
});
var yzQ = U((_zQ) => {
    Object.defineProperty(_zQ, "__esModule", {
        value: !0
    });
    _zQ.ruleSet = void 0;
    var qzQ = "required",
        x8 = "type",
        r3 = "fn",
        o3 = "argv",
        $d = "ref",
        FzQ = !1,
        KM1 = !0,
        Ud = "booleanEquals",
        QD = "stringEquals",
        NzQ = "sigv4",
        LzQ = "sts",
        MzQ = "us-east-1",
        mI = "endpoint",
        VzQ = "https://sts.{Region}.{PartitionResult#dnsSuffix}",
        NS = "tree",
        b8A = "error",
        HM1 = "getAttr",
        KzQ = {
            [qzQ]: !1,
            [x8]: "String"
        },
        DM1 = {
            [qzQ]: !0,
            default: !1,
            [x8]: "Boolean"
        },
        OzQ = {
            [$d]: "Endpoint"
        },
        DzQ = {
            [r3]: "isSet",
            [o3]: [{
                [$d]: "Region"
            }]
        },
        BD = {
            [$d]: "Region"
        },
        HzQ = {
            [r3]: "aws.partition",
            [o3]: [BD],
            assign: "PartitionResult"
        },
        RzQ = {
            [$d]: "UseFIPS"
        },
        TzQ = {
            [$d]: "UseDualStack"
        },
        wH = {
            url: "https://sts.amazonaws.com",
            properties: {
                authSchemes: [{
                    name: NzQ,
                    signingName: LzQ,
                    signingRegion: MzQ
                }]
            },
            headers: {}
        },
        Ew = {},
        CzQ = {
            conditions: [{
                [r3]: QD,
                [o3]: [BD, "aws-global"]
            }],
            [mI]: wH,
            [x8]: mI
        },
        PzQ = {
            [r3]: Ud,
            [o3]: [RzQ, !0]
        },
        jzQ = {
            [r3]: Ud,
            [o3]: [TzQ, !0]
        },
        EzQ = {
            [r3]: HM1,
            [o3]: [{
                [$d]: "PartitionResult"
            }, "supportsFIPS"]
        },
        SzQ = {
            [$d]: "PartitionResult"
        },
        zzQ = {
            [r3]: Ud,
            [o3]: [!0, {
                [r3]: HM1,
                [o3]: [SzQ, "supportsDualStack"]
            }]
        },
        UzQ = [{
            [r3]: "isSet",
            [o3]: [OzQ]
        }],
        $zQ = [PzQ],
        wzQ = [jzQ],
        $e4 = {
            version: "1.0",
            parameters: {
                Region: KzQ,
                UseDualStack: DM1,
                UseFIPS: DM1,
                Endpoint: KzQ,
                UseGlobalEndpoint: DM1
            },
            rules: [{
                conditions: [{
                    [r3]: Ud,
                    [o3]: [{
                        [$d]: "UseGlobalEndpoint"
                    }, KM1]
                }, {
                    [r3]: "not",
                    [o3]: UzQ
                }, DzQ, HzQ, {
                    [r3]: Ud,
                    [o3]: [RzQ, FzQ]
                }, {
                    [r3]: Ud,
                    [o3]: [TzQ, FzQ]
                }],
                rules: [{
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "ap-northeast-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "ap-south-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "ap-southeast-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "ap-southeast-2"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, CzQ, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "ca-central-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "eu-central-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "eu-north-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "eu-west-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "eu-west-2"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "eu-west-3"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "sa-east-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, MzQ]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "us-east-2"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "us-west-1"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    conditions: [{
                        [r3]: QD,
                        [o3]: [BD, "us-west-2"]
                    }],
                    endpoint: wH,
                    [x8]: mI
                }, {
                    endpoint: {
                        url: VzQ,
                        properties: {
                            authSchemes: [{
                                name: NzQ,
                                signingName: LzQ,
                                signingRegion: "{Region}"
                            }]
                        },
                        headers: Ew
                    },
                    [x8]: mI
                }],
                [x8]: NS
            }, {
                conditions: UzQ,
                rules: [{
                    conditions: $zQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    [x8]: b8A
                }, {
                    conditions: wzQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    [x8]: b8A
                }, {
                    endpoint: {
                        url: OzQ,
                        properties: Ew,
                        headers: Ew
                    },
                    [x8]: mI
                }],
                [x8]: NS
            }, {
                conditions: [DzQ],
                rules: [{
                    conditions: [HzQ],
                    rules: [{
                        conditions: [PzQ, jzQ],
                        rules: [{
                            conditions: [{
                                [r3]: Ud,
                                [o3]: [KM1, EzQ]
                            }, zzQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Ew,
                                    headers: Ew
                                },
                                [x8]: mI
                            }],
                            [x8]: NS
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            [x8]: b8A
                        }],
                        [x8]: NS
                    }, {
                        conditions: $zQ,
                        rules: [{
                            conditions: [{
                                [r3]: Ud,
                                [o3]: [EzQ, KM1]
                            }],
                            rules: [{
                                conditions: [{
                                    [r3]: QD,
                                    [o3]: [{
                                        [r3]: HM1,
                                        [o3]: [SzQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://sts.{Region}.amazonaws.com",
                                    properties: Ew,
                                    headers: Ew
                                },
                                [x8]: mI
                            }, {
                                endpoint: {
                                    url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: Ew,
                                    headers: Ew
                                },
                                [x8]: mI
                            }],
                            [x8]: NS
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            [x8]: b8A
                        }],
                        [x8]: NS
                    }, {
                        conditions: wzQ,
                        rules: [{
                            conditions: [zzQ],
                            rules: [{
                                endpoint: {
                                    url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: Ew,
                                    headers: Ew
                                },
                                [x8]: mI
                            }],
                            [x8]: NS
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            [x8]: b8A
                        }],
                        [x8]: NS
                    }, CzQ, {
                        endpoint: {
                            url: VzQ,
                            properties: Ew,
                            headers: Ew
                        },
                        [x8]: mI
                    }],
                    [x8]: NS
                }],
                [x8]: NS
            }, {
                error: "Invalid Configuration: Missing Region",
                [x8]: b8A
            }]
        };
    _zQ.ruleSet = $e4
});
var bzQ = U((xzQ) => {
    Object.defineProperty(xzQ, "__esModule", {
        value: !0
    });
    xzQ.defaultEndpointResolver = void 0;
    var we4 = JHA(),
        CM1 = II(),
        qe4 = yzQ(),
        Ne4 = new CM1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"]
        }),
        Le4 = (A, Q = {}) => {
            return Ne4.get(A, () => (0, CM1.resolveEndpoint)(qe4.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    xzQ.defaultEndpointResolver = Le4;
    CM1.customEndpointFunctions.aws = we4.awsEndpointFunctions
});
var mzQ = U((gzQ) => {
    Object.defineProperty(gzQ, "__esModule", {
        value: !0
    });
    gzQ.getRuntimeConfig = void 0;
    var Me4 = pz(),
        Oe4 = nB(),
        Re4 = R3(),
        Te4 = zJ(),
        fzQ = gr(),
        hzQ = L2(),
        Pe4 = XM1(),
        je4 = bzQ(),
        Se4 = (A) => {
            return {
                apiVersion: "2011-06-15",
                base64Decoder: A?.base64Decoder ?? fzQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? fzQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? je4.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? Pe4.defaultSTSHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new Me4.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new Oe4.NoAuthSigner
                }],
                logger: A?.logger ?? new Re4.NoOpLogger,
                serviceId: A?.serviceId ?? "STS",
                urlParser: A?.urlParser ?? Te4.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? hzQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? hzQ.toUtf8
            }
        };
    gzQ.getRuntimeConfig = Se4
});
var nzQ = U((lzQ) => {
    Object.defineProperty(lzQ, "__esModule", {
        value: !0
    });
    lzQ.getRuntimeConfig = void 0;
    var _e4 = Tr(),
        ke4 = _e4.__importDefault(FM1()),
        EM1 = pz(),
        dzQ = WuA(),
        XuA = S8(),
        ye4 = nB(),
        xe4 = wX(),
        czQ = X6(),
        dr = xI(),
        pzQ = oG(),
        ve4 = qX(),
        be4 = FW(),
        fe4 = mzQ(),
        he4 = R3(),
        ge4 = NX(),
        ue4 = R3(),
        me4 = (A) => {
            (0, ue4.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, ge4.resolveDefaultsModeConfig)(A),
                B = () => Q().then(he4.loadConfigsForDefaultMode),
                G = (0, fe4.getRuntimeConfig)(A);
            (0, EM1.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, dr.loadConfig)(EM1.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? ve4.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, dzQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: ke4.default.version
                }),
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (I) => I.getIdentityProvider("aws.auth#sigv4") || (async (Y) => await A.credentialDefaultProvider(Y?.__config || {})()),
                    signer: new EM1.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (I) => I.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new ye4.NoAuthSigner
                }],
                maxAttempts: A?.maxAttempts ?? (0, dr.loadConfig)(czQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, dr.loadConfig)(XuA.NODE_REGION_CONFIG_OPTIONS, {
                    ...XuA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: pzQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, dr.loadConfig)({
                    ...czQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || be4.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? xe4.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? pzQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, dr.loadConfig)(XuA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, dr.loadConfig)(XuA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, dr.loadConfig)(dzQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    lzQ.getRuntimeConfig = me4
});
var VuA = U((vH7, ezQ) => {
    var {
        defineProperty: FuA,
        getOwnPropertyDescriptor: de4,
        getOwnPropertyNames: ce4
    } = Object, pe4 = Object.prototype.hasOwnProperty, LS = (A, Q) => FuA(A, "name", {
        value: Q,
        configurable: !0
    }), le4 = (A, Q) => {
        for (var B in Q) FuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, ie4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of ce4(Q))
                if (!pe4.call(A, Z) && Z !== B) FuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = de4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ne4 = (A) => ie4(FuA({}, "__esModule", {
        value: !0
    }), A), szQ = {};
    le4(szQ, {
        NODE_REGION_CONFIG_FILE_OPTIONS: () => oe4,
        NODE_REGION_CONFIG_OPTIONS: () => re4,
        REGION_ENV_NAME: () => rzQ,
        REGION_INI_NAME: () => ozQ,
        getAwsRegionExtensionConfiguration: () => ae4,
        resolveAwsRegionExtensionConfiguration: () => se4,
        resolveRegionConfig: () => te4
    });
    ezQ.exports = ne4(szQ);
    var ae4 = LS((A) => {
            return {
                setRegion(Q) {
                    A.region = Q
                },
                region() {
                    return A.region
                }
            }
        }, "getAwsRegionExtensionConfiguration"),
        se4 = LS((A) => {
            return {
                region: A.region()
            }
        }, "resolveAwsRegionExtensionConfiguration"),
        rzQ = "AWS_REGION",
        ozQ = "region",
        re4 = {
            environmentVariableSelector: LS((A) => A[rzQ], "environmentVariableSelector"),
            configFileSelector: LS((A) => A[ozQ], "configFileSelector"),
            default: LS(() => {
                throw Error("Region is missing")
            }, "default")
        },
        oe4 = {
            preferredFile: "credentials"
        },
        tzQ = LS((A) => typeof A === "string" && (A.startsWith("fips-") || A.endsWith("-fips")), "isFipsRegion"),
        azQ = LS((A) => tzQ(A) ? ["fips-aws-global", "aws-fips"].includes(A) ? "us-east-1" : A.replace(/fips-(dkr-|prod-)?|-fips/, "") : A, "getRealRegion"),
        te4 = LS((A) => {
            let {
                region: Q,
                useFipsEndpoint: B
            } = A;
            if (!Q) throw Error("Region is missing");
            return Object.assign(A, {
                region: LS(async () => {
                    if (typeof Q === "string") return azQ(Q);
                    let G = await Q();
                    return azQ(G)
                }, "region"),
                useFipsEndpoint: LS(async () => {
                    let G = typeof Q === "string" ? Q : await Q();
                    if (tzQ(G)) return !0;
                    return typeof B !== "function" ? Promise.resolve(!!B) : B()
                }, "useFipsEndpoint")
            })
        }, "resolveRegionConfig")
});
var BUQ = U((AUQ) => {
    Object.defineProperty(AUQ, "__esModule", {
        value: !0
    });
    AUQ.resolveHttpAuthRuntimeConfig = AUQ.getHttpAuthExtensionConfiguration = void 0;
    var ee4 = (A) => {
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
    AUQ.getHttpAuthExtensionConfiguration = ee4;
    var AA8 = (A) => {
        return {
            httpAuthSchemes: A.httpAuthSchemes(),
            httpAuthSchemeProvider: A.httpAuthSchemeProvider(),
            credentials: A.credentials()
        }
    };
    AUQ.resolveHttpAuthRuntimeConfig = AA8
});
var XUQ = U((JUQ) => {
    Object.defineProperty(JUQ, "__esModule", {
        value: !0
    });
    JUQ.resolveRuntimeExtensions = void 0;
    var GUQ = VuA(),
        ZUQ = Cw(),
        IUQ = R3(),
        YUQ = BUQ(),
        BA8 = (A, Q) => {
            let B = Object.assign((0, GUQ.getAwsRegionExtensionConfiguration)(A), (0, IUQ.getDefaultExtensionConfiguration)(A), (0, ZUQ.getHttpHandlerExtensionConfiguration)(A), (0, YUQ.getHttpAuthExtensionConfiguration)(A));
            return Q.forEach((G) => G.configure(B)), Object.assign(A, (0, GUQ.resolveAwsRegionExtensionConfiguration)(B), (0, IUQ.resolveDefaultRuntimeConfig)(B), (0, ZUQ.resolveHttpHandlerRuntimeConfig)(B), (0, YUQ.resolveHttpAuthRuntimeConfig)(B))
        };
    JUQ.resolveRuntimeExtensions = BA8
});
var HHA = U((UM1) => {
    Object.defineProperty(UM1, "__esModule", {
        value: !0
    });
    UM1.STSClient = UM1.__Client = void 0;
    var FUQ = hgA(),
        GA8 = ugA(),
        ZA8 = cgA(),
        VUQ = DHA(),
        IA8 = S8(),
        zM1 = nB(),
        YA8 = zX(),
        JA8 = E5(),
        KUQ = X6(),
        HUQ = R3();
    Object.defineProperty(UM1, "__Client", {
        enumerable: !0,
        get: function() {
            return HUQ.Client
        }
    });
    var DUQ = XM1(),
        WA8 = CHA(),
        XA8 = nzQ(),
        FA8 = XUQ();
    class CUQ extends HUQ.Client {
        config;
        constructor(...[A]) {
            let Q = (0, XA8.getRuntimeConfig)(A || {});
            super(Q);
            this.initConfig = Q;
            let B = (0, WA8.resolveClientEndpointParameters)(Q),
                G = (0, VUQ.resolveUserAgentConfig)(B),
                Z = (0, KUQ.resolveRetryConfig)(G),
                I = (0, IA8.resolveRegionConfig)(Z),
                Y = (0, FUQ.resolveHostHeaderConfig)(I),
                J = (0, JA8.resolveEndpointConfig)(Y),
                W = (0, DUQ.resolveHttpAuthSchemeConfig)(J),
                X = (0, FA8.resolveRuntimeExtensions)(W, A?.extensions || []);
            this.config = X, this.middlewareStack.use((0, VUQ.getUserAgentPlugin)(this.config)), this.middlewareStack.use((0, KUQ.getRetryPlugin)(this.config)), this.middlewareStack.use((0, YA8.getContentLengthPlugin)(this.config)), this.middlewareStack.use((0, FUQ.getHostHeaderPlugin)(this.config)), this.middlewareStack.use((0, GA8.getLoggerPlugin)(this.config)), this.middlewareStack.use((0, ZA8.getRecursionDetectionPlugin)(this.config)), this.middlewareStack.use((0, zM1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
                httpAuthSchemeParametersProvider: DUQ.defaultSTSHttpAuthSchemeParametersProvider,
                identityProviderConfigProvider: async (F) => new zM1.DefaultIdentityProviderConfig({
                    "aws.auth#sigv4": F.credentials
                })
            })), this.middlewareStack.use((0, zM1.getHttpSigningPlugin)(this.config))
        }
        destroy() {
            super.destroy()
        }
    }
    UM1.STSClient = CUQ
});
var DuA = U((uH7, aM1) => {
    var {
        defineProperty: KuA,
        getOwnPropertyDescriptor: VA8,
        getOwnPropertyNames: KA8
    } = Object, DA8 = Object.prototype.hasOwnProperty, _2 = (A, Q) => KuA(A, "name", {
        value: Q,
        configurable: !0
    }), HA8 = (A, Q) => {
        for (var B in Q) KuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, mM1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of KA8(Q))
                if (!DA8.call(A, Z) && Z !== B) KuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = VA8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, CA8 = (A, Q, B) => (mM1(A, Q, "default"), B && mM1(B, Q, "default")), EA8 = (A) => mM1(KuA({}, "__esModule", {
        value: !0
    }), A), cM1 = {};
    HA8(cM1, {
        AssumeRoleCommand: () => iM1,
        AssumeRoleResponseFilterSensitiveLog: () => $UQ,
        AssumeRoleWithWebIdentityCommand: () => nM1,
        AssumeRoleWithWebIdentityRequestFilterSensitiveLog: () => RUQ,
        AssumeRoleWithWebIdentityResponseFilterSensitiveLog: () => TUQ,
        ClientInputEndpointParameters: () => W18.ClientInputEndpointParameters,
        CredentialsFilterSensitiveLog: () => pM1,
        ExpiredTokenException: () => wUQ,
        IDPCommunicationErrorException: () => PUQ,
        IDPRejectedClaimException: () => MUQ,
        InvalidIdentityTokenException: () => OUQ,
        MalformedPolicyDocumentException: () => qUQ,
        PackedPolicyTooLargeException: () => NUQ,
        RegionDisabledException: () => LUQ,
        STS: () => gUQ,
        STSServiceException: () => pv,
        decorateDefaultCredentialProvider: () => V18,
        getDefaultRoleAssumer: () => lUQ,
        getDefaultRoleAssumerWithWebIdentity: () => iUQ
    });
    aM1.exports = EA8(cM1);
    CA8(cM1, HHA(), aM1.exports);
    var zA8 = R3(),
        UA8 = E5(),
        $A8 = sG(),
        wA8 = R3(),
        qA8 = CHA(),
        UUQ = R3(),
        NA8 = R3(),
        pv = class A extends NA8.ServiceException {
            static {
                _2(this, "STSServiceException")
            }
            constructor(Q) {
                super(Q);
                Object.setPrototypeOf(this, A.prototype)
            }
        },
        pM1 = _2((A) => ({
            ...A,
            ...A.SecretAccessKey && {
                SecretAccessKey: UUQ.SENSITIVE_STRING
            }
        }), "CredentialsFilterSensitiveLog"),
        $UQ = _2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: pM1(A.Credentials)
            }
        }), "AssumeRoleResponseFilterSensitiveLog"),
        wUQ = class A extends pv {
            static {
                _2(this, "ExpiredTokenException")
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
        qUQ = class A extends pv {
            static {
                _2(this, "MalformedPolicyDocumentException")
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
        NUQ = class A extends pv {
            static {
                _2(this, "PackedPolicyTooLargeException")
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
        LUQ = class A extends pv {
            static {
                _2(this, "RegionDisabledException")
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
        MUQ = class A extends pv {
            static {
                _2(this, "IDPRejectedClaimException")
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
        OUQ = class A extends pv {
            static {
                _2(this, "InvalidIdentityTokenException")
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
        RUQ = _2((A) => ({
            ...A,
            ...A.WebIdentityToken && {
                WebIdentityToken: UUQ.SENSITIVE_STRING
            }
        }), "AssumeRoleWithWebIdentityRequestFilterSensitiveLog"),
        TUQ = _2((A) => ({
            ...A,
            ...A.Credentials && {
                Credentials: pM1(A.Credentials)
            }
        }), "AssumeRoleWithWebIdentityResponseFilterSensitiveLog"),
        PUQ = class A extends pv {
            static {
                _2(this, "IDPCommunicationErrorException")
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
        lM1 = pz(),
        LA8 = Cw(),
        C7 = R3(),
        MA8 = _2(async (A, Q) => {
            let B = xUQ,
                G;
            return G = hUQ({
                ...vA8(A, Q),
                [bUQ]: eA8,
                [fUQ]: vUQ
            }), yUQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleCommand"),
        OA8 = _2(async (A, Q) => {
            let B = xUQ,
                G;
            return G = hUQ({
                ...bA8(A, Q),
                [bUQ]: A18,
                [fUQ]: vUQ
            }), yUQ(Q, B, "/", void 0, G)
        }, "se_AssumeRoleWithWebIdentityCommand"),
        RA8 = _2(async (A, Q) => {
            if (A.statusCode >= 300) return jUQ(A, Q);
            let B = await (0, lM1.parseXmlBody)(A.body, Q),
                G = {};
            return G = cA8(B.AssumeRoleResult, Q), {
                $metadata: lv(A),
                ...G
            }
        }, "de_AssumeRoleCommand"),
        TA8 = _2(async (A, Q) => {
            if (A.statusCode >= 300) return jUQ(A, Q);
            let B = await (0, lM1.parseXmlBody)(A.body, Q),
                G = {};
            return G = pA8(B.AssumeRoleWithWebIdentityResult, Q), {
                $metadata: lv(A),
                ...G
            }
        }, "de_AssumeRoleWithWebIdentityCommand"),
        jUQ = _2(async (A, Q) => {
            let B = {
                    ...A,
                    body: await (0, lM1.parseXmlErrorBody)(A.body, Q)
                },
                G = Q18(A, B.body);
            switch (G) {
                case "ExpiredTokenException":
                case "com.amazonaws.sts#ExpiredTokenException":
                    throw await PA8(B, Q);
                case "MalformedPolicyDocument":
                case "com.amazonaws.sts#MalformedPolicyDocumentException":
                    throw await kA8(B, Q);
                case "PackedPolicyTooLarge":
                case "com.amazonaws.sts#PackedPolicyTooLargeException":
                    throw await yA8(B, Q);
                case "RegionDisabledException":
                case "com.amazonaws.sts#RegionDisabledException":
                    throw await xA8(B, Q);
                case "IDPCommunicationError":
                case "com.amazonaws.sts#IDPCommunicationErrorException":
                    throw await jA8(B, Q);
                case "IDPRejectedClaim":
                case "com.amazonaws.sts#IDPRejectedClaimException":
                    throw await SA8(B, Q);
                case "InvalidIdentityToken":
                case "com.amazonaws.sts#InvalidIdentityTokenException":
                    throw await _A8(B, Q);
                default:
                    let Z = B.body;
                    return tA8({
                        output: A,
                        parsedBody: Z.Error,
                        errorCode: G
                    })
            }
        }, "de_CommandError"),
        PA8 = _2(async (A, Q) => {
            let B = A.body,
                G = lA8(B.Error, Q),
                Z = new wUQ({
                    $metadata: lv(A),
                    ...G
                });
            return (0, C7.decorateServiceException)(Z, B)
        }, "de_ExpiredTokenExceptionRes"),
        jA8 = _2(async (A, Q) => {
            let B = A.body,
                G = iA8(B.Error, Q),
                Z = new PUQ({
                    $metadata: lv(A),
                    ...G
                });
            return (0, C7.decorateServiceException)(Z, B)
        }, "de_IDPCommunicationErrorExceptionRes"),
        SA8 = _2(async (A, Q) => {
            let B = A.body,
                G = nA8(B.Error, Q),
                Z = new MUQ({
                    $metadata: lv(A),
                    ...G
                });
            return (0, C7.decorateServiceException)(Z, B)
        }, "de_IDPRejectedClaimExceptionRes"),
        _A8 = _2(async (A, Q) => {
            let B = A.body,
                G = aA8(B.Error, Q),
                Z = new OUQ({
                    $metadata: lv(A),
                    ...G
                });
            return (0, C7.decorateServiceException)(Z, B)
        }, "de_InvalidIdentityTokenExceptionRes"),
        kA8 = _2(async (A, Q) => {
            let B = A.body,
                G = sA8(B.Error, Q),
                Z = new qUQ({
                    $metadata: lv(A),
                    ...G
                });
            return (0, C7.decorateServiceException)(Z, B)
        }, "de_MalformedPolicyDocumentExceptionRes"),
        yA8 = _2(async (A, Q) => {
            let B = A.body,
                G = rA8(B.Error, Q),
                Z = new NUQ({
                    $metadata: lv(A),
                    ...G
                });
            return (0, C7.decorateServiceException)(Z, B)
        }, "de_PackedPolicyTooLargeExceptionRes"),
        xA8 = _2(async (A, Q) => {
            let B = A.body,
                G = oA8(B.Error, Q),
                Z = new LUQ({
                    $metadata: lv(A),
                    ...G
                });
            return (0, C7.decorateServiceException)(Z, B)
        }, "de_RegionDisabledExceptionRes"),
        vA8 = _2((A, Q) => {
            let B = {};
            if (A[c8A] != null) B[c8A] = A[c8A];
            if (A[p8A] != null) B[p8A] = A[p8A];
            if (A[m8A] != null) {
                let G = SUQ(A[m8A], Q);
                if (A[m8A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[u8A] != null) B[u8A] = A[u8A];
            if (A[g8A] != null) B[g8A] = A[g8A];
            if (A[vM1] != null) {
                let G = dA8(A[vM1], Q);
                if (A[vM1]?.length === 0) B.Tags = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `Tags.${Z}`;
                    B[Y] = I
                })
            }
            if (A[fM1] != null) {
                let G = mA8(A[fM1], Q);
                if (A[fM1]?.length === 0) B.TransitiveTagKeys = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `TransitiveTagKeys.${Z}`;
                    B[Y] = I
                })
            }
            if (A[OM1] != null) B[OM1] = A[OM1];
            if (A[yM1] != null) B[yM1] = A[yM1];
            if (A[bM1] != null) B[bM1] = A[bM1];
            if (A[cv] != null) B[cv] = A[cv];
            if (A[PM1] != null) {
                let G = gA8(A[PM1], Q);
                if (A[PM1]?.length === 0) B.ProvidedContexts = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `ProvidedContexts.${Z}`;
                    B[Y] = I
                })
            }
            return B
        }, "se_AssumeRoleRequest"),
        bA8 = _2((A, Q) => {
            let B = {};
            if (A[c8A] != null) B[c8A] = A[c8A];
            if (A[p8A] != null) B[p8A] = A[p8A];
            if (A[gM1] != null) B[gM1] = A[gM1];
            if (A[jM1] != null) B[jM1] = A[jM1];
            if (A[m8A] != null) {
                let G = SUQ(A[m8A], Q);
                if (A[m8A]?.length === 0) B.PolicyArns = [];
                Object.entries(G).forEach(([Z, I]) => {
                    let Y = `PolicyArns.${Z}`;
                    B[Y] = I
                })
            }
            if (A[u8A] != null) B[u8A] = A[u8A];
            if (A[g8A] != null) B[g8A] = A[g8A];
            return B
        }, "se_AssumeRoleWithWebIdentityRequest"),
        SUQ = _2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = fA8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_policyDescriptorListType"),
        fA8 = _2((A, Q) => {
            let B = {};
            if (A[uM1] != null) B[uM1] = A[uM1];
            return B
        }, "se_PolicyDescriptorType"),
        hA8 = _2((A, Q) => {
            let B = {};
            if (A[TM1] != null) B[TM1] = A[TM1];
            if (A[LM1] != null) B[LM1] = A[LM1];
            return B
        }, "se_ProvidedContext"),
        gA8 = _2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                let I = hA8(Z, Q);
                Object.entries(I).forEach(([Y, J]) => {
                    B[`member.${G}.${Y}`] = J
                }), G++
            }
            return B
        }, "se_ProvidedContextsListType"),
        uA8 = _2((A, Q) => {
            let B = {};
            if (A[RM1] != null) B[RM1] = A[RM1];
            if (A[hM1] != null) B[hM1] = A[hM1];
            return B
        }, "se_Tag"),
        mA8 = _2((A, Q) => {
            let B = {},
                G = 1;
            for (let Z of A) {
                if (Z === null) continue;
                B[`member.${G}`] = Z, G++
            }