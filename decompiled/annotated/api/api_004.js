/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: api_004.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (19次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (3次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 4/30
 * Lines: 103190 - 104689 (1500 lines)
 * Original file: cli.js
 */

                    else if (B.isTimestampSchema() && Q instanceof Date) {
                    let Z = this.settings.timestampFormat;
                    switch (Z.useTrait ? B.getSchema() === sr.SCHEMA.TIMESTAMP_DEFAULT ? Z.default : B.getSchema() ?? Z.default : Z.default) {
                        case sr.SCHEMA.TIMESTAMP_DATE_TIME:
                            G = Q.toISOString().replace(".000Z", "Z");
                            break;
                        case sr.SCHEMA.TIMESTAMP_HTTP_DATE:
                            G = (0, BOQ.dateToUtcString)(Q);
                            break;
                        case sr.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            G = String(Q.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using http date", Q), G = (0, BOQ.dateToUtcString)(Q);
                            break
                    }
                } else if (B.isBigDecimalSchema() && Q) {
                    if (Q instanceof L68.NumericValue) return Q.string;
                    return String(Q)
                } else if (B.isMapSchema() || B.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
                else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${B.getName(!0)}`);
                if (B.isStringSchema() || B.isBooleanSchema() || B.isNumericSchema() || B.isBigIntegerSchema() || B.isBigDecimalSchema()) G = String(Q);
                if (G === null) throw Error(`Unhandled schema-value pair ${B.getName(!0)}=${Q}`);
                return G
            }
            writeSimpleInto(A, Q, B, G) {
                let Z = this.writeSimple(A, Q),
                    I = sr.NormalizedSchema.of(A),
                    Y = new RS.XmlText(Z),
                    [J, W] = this.getXmlnsAttribute(I, G);
                if (W) B.addAttribute(J, W);
                B.addChildNode(Y)
            }
            getXmlnsAttribute(A, Q) {
                let B = A.getMergedTraits(),
                    [G, Z] = B.xmlNamespace ?? [];
                if (Z && Z !== Q) return [G ? `xmlns:${G}` : "xmlns", Z];
                return [void 0, void 0]
            }
        },
        DOQ = class extends rr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                Q3(this, "XmlCodec")
            }
            createSerializer() {
                let A = new KOQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new JR1(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        M68 = class extends BR1.HttpBindingProtocol {
            static {
                Q3(this, "AwsRestXmlProtocol")
            }
            codec;
            serializer;
            deserializer;
            constructor(A) {
                super(A);
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: yHA.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !0,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace
                };
                this.codec = new DOQ(Q), this.serializer = new BR1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new BR1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
            }
            getPayloadCodec() {
                return this.codec
            }
            getShapeId() {
                return "aws.protocols#restXml"
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B),
                    Z = yHA.NormalizedSchema.of(A.input),
                    I = Z.getMemberSchemas();
                if (G.path = String(G.path).split("/").filter((Y) => {
                        return Y !== "{Bucket}"
                    }).join("/") || "/", !G.headers["content-type"]) {
                    let Y = Object.values(I).find((J) => {
                        return !!J.getMergedTraits().httpPayload
                    });
                    if (Y) {
                        let J = Y.getMergedTraits().mediaType;
                        if (J) G.headers["content-type"] = J;
                        else if (Y.isStringSchema()) G.headers["content-type"] = "text/plain";
                        else if (Y.isBlobSchema()) G.headers["content-type"] = "application/octet-stream";
                        else G.headers["content-type"] = "application/xml"
                    } else if (!Z.isUnitSchema()) {
                        if (Object.values(I).find((W) => {
                                let {
                                    httpQuery: X,
                                    httpQueryParams: F,
                                    httpHeader: V,
                                    httpLabel: K,
                                    httpPrefixHeaders: D
                                } = W.getMergedTraits();
                                return !X && !F && !V && !K && D === void 0
                            })) G.headers["content-type"] = "application/xml"
                    }
                }
                if (G.headers["content-type"] === "application/xml") {
                    if (typeof G.body === "string") G.body = '<?xml version="1.0" encoding="UTF-8"?>' + G.body
                }
                if (G.body) try {
                    G.headers["content-length"] = String((0, $68.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                return super.deserializeResponse(A, Q, B)
            }
            async handleError(A, Q, B, G, Z) {
                let I = VOQ(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = yHA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = yHA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = yHA.NormalizedSchema.of(X),
                    V = G.Error?.message ?? G.Error?.Message ?? G.message ?? G.Message ?? "Unknown",
                    K = new X.ctor(V);
                await this.deserializeHttpMessage(X, Q, B, G);
                let D = {};
                for (let [H, C] of F.structIterator()) {
                    let E = C.getMergedTraits().xmlName ?? H,
                        z = G.Error?.[E] ?? G[E];
                    D[H] = this.codec.createDeserializer().readSchema(C, z)
                }
                throw Object.assign(K, {
                    $metadata: Z,
                    $response: B,
                    $fault: F.getMergedTraits().error,
                    message: V,
                    ...D
                }), K
            }
        }
});
var MV = U((xHA) => {
    Object.defineProperty(xHA, "__esModule", {
        value: !0
    });
    var WR1 = nr();
    WR1.__exportStar(bR(), xHA);
    WR1.__exportStar(cO1(), xHA);
    WR1.__exportStar(COQ(), xHA)
});
var J6A = U((TE7, TOQ) => {
    var {
        defineProperty: VmA,
        getOwnPropertyDescriptor: O68,
        getOwnPropertyNames: R68
    } = Object, T68 = Object.prototype.hasOwnProperty, ov = (A, Q) => VmA(A, "name", {
        value: Q,
        configurable: !0
    }), P68 = (A, Q) => {
        for (var B in Q) VmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, j68 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of R68(Q))
                if (!T68.call(A, Z) && Z !== B) VmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = O68(Q, Z)) || G.enumerable
                })
        }
        return A
    }, S68 = (A) => j68(VmA({}, "__esModule", {
        value: !0
    }), A), $OQ = {};
    P68($OQ, {
        DEFAULT_UA_APP_ID: () => wOQ,
        getUserAgentMiddlewareOptions: () => ROQ,
        getUserAgentPlugin: () => h68,
        resolveUserAgentConfig: () => NOQ,
        userAgentMiddleware: () => OOQ
    });
    TOQ.exports = S68($OQ);
    var _68 = nB(),
        wOQ = void 0;

    function qOQ(A) {
        if (A === void 0) return !0;
        return typeof A === "string" && A.length <= 50
    }
    ov(qOQ, "isValidUserAgentAppId");

    function NOQ(A) {
        let Q = (0, _68.normalizeProvider)(A.userAgentAppId ?? wOQ),
            {
                customUserAgent: B
            } = A;
        return Object.assign(A, {
            customUserAgent: typeof B === "string" ? [
                [B]
            ] : B,
            userAgentAppId: ov(async () => {
                let G = await Q();
                if (!qOQ(G)) {
                    let Z = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console : A.logger;
                    if (typeof G !== "string") Z?.warn("userAgentAppId must be a string or undefined.");
                    else if (G.length > 50) Z?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.")
                }
                return G
            }, "userAgentAppId")
        })
    }
    ov(NOQ, "resolveUserAgentConfig");
    var k68 = Q6A(),
        y68 = lz(),
        TS = MV(),
        x68 = /\d{12}\.ddb/;
    async function LOQ(A, Q, B) {
        if (B.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor")(0, TS.setFeature)(A, "PROTOCOL_RPC_V2_CBOR", "M");
        if (typeof Q.retryStrategy === "function") {
            let I = await Q.retryStrategy();
            if (typeof I.acquireInitialRetryToken === "function")
                if (I.constructor?.name?.includes("Adaptive"))(0, TS.setFeature)(A, "RETRY_MODE_ADAPTIVE", "F");
                else(0, TS.setFeature)(A, "RETRY_MODE_STANDARD", "E");
            else(0, TS.setFeature)(A, "RETRY_MODE_LEGACY", "D")
        }
        if (typeof Q.accountIdEndpointMode === "function") {
            let I = A.endpointV2;
            if (String(I?.url?.hostname).match(x68))(0, TS.setFeature)(A, "ACCOUNT_ID_ENDPOINT", "O");
            switch (await Q.accountIdEndpointMode?.()) {
                case "disabled":
                    (0, TS.setFeature)(A, "ACCOUNT_ID_MODE_DISABLED", "Q");
                    break;
                case "preferred":
                    (0, TS.setFeature)(A, "ACCOUNT_ID_MODE_PREFERRED", "P");
                    break;
                case "required":
                    (0, TS.setFeature)(A, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    break
            }
        }
        let Z = A.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (Z?.$source) {
            let I = Z;
            if (I.accountId)(0, TS.setFeature)(A, "RESOLVED_ACCOUNT_ID", "T");
            for (let [Y, J] of Object.entries(I.$source ?? {}))(0, TS.setFeature)(A, Y, J)
        }
    }
    ov(LOQ, "checkFeatures");
    var EOQ = "user-agent",
        XR1 = "x-amz-user-agent",
        zOQ = " ",
        FR1 = "/",
        v68 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        b68 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
        UOQ = "-",
        f68 = 1024;

    function MOQ(A) {
        let Q = "";
        for (let B in A) {
            let G = A[B];
            if (Q.length + G.length + 1 <= f68) {
                if (Q.length) Q += "," + G;
                else Q += G;
                continue
            }
            break
        }
        return Q
    }
    ov(MOQ, "encodeFeatures");
    var OOQ = ov((A) => (Q, B) => async (G) => {
            let {
                request: Z
            } = G;
            if (!y68.HttpRequest.isInstance(Z)) return Q(G);
            let {
                headers: I
            } = Z, Y = B?.userAgent?.map(FmA) || [], J = (await A.defaultUserAgentProvider()).map(FmA);
            await LOQ(B, A, G);
            let W = B;
            J.push(`m/${MOQ(Object.assign({},B.__smithy_context?.features,W.__aws_sdk_context?.features))}`);
            let X = A?.customUserAgent?.map(FmA) || [],
                F = await A.userAgentAppId();
            if (F) J.push(FmA([`app/${F}`]));
            let V = (0, k68.getUserAgentPrefix)(),
                K = (V ? [V] : []).concat([...J, ...Y, ...X]).join(zOQ),
                D = [...J.filter((H) => H.startsWith("aws-sdk-")), ...X].join(zOQ);
            if (A.runtime !== "browser") {
                if (D) I[XR1] = I[XR1] ? `${I[EOQ]} ${D}` : D;
                I[EOQ] = K
            } else I[XR1] = K;
            return Q({
                ...G,
                request: Z
            })
        }, "userAgentMiddleware"),
        FmA = ov((A) => {
            let Q = A[0].split(FR1).map((Y) => Y.replace(v68, UOQ)).join(FR1),
                B = A[1]?.replace(b68, UOQ),
                G = Q.indexOf(FR1),
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
        ROQ = {
            name: "getUserAgentMiddleware",
            step: "build",
            priority: "low",
            tags: ["SET_USER_AGENT", "USER_AGENT"],
            override: !0
        },
        h68 = ov((A) => ({
            applyToStack: ov((Q) => {
                Q.add(OOQ(A), ROQ)
            }, "applyToStack")
        }), "getUserAgentPlugin")
});
var DR1 = U((POQ) => {
    Object.defineProperty(POQ, "__esModule", {
        value: !0
    });
    POQ.resolveHttpAuthSchemeConfig = POQ.defaultBedrockHttpAuthSchemeProvider = POQ.defaultBedrockHttpAuthSchemeParametersProvider = void 0;
    var g68 = MV(),
        VR1 = nB(),
        KR1 = K7(),
        u68 = async (A, Q, B) => {
            return {
                operation: (0, KR1.getSmithyContext)(Q).operation,
                region: await (0, KR1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    POQ.defaultBedrockHttpAuthSchemeParametersProvider = u68;

    function m68(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "bedrock",
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

    function d68(A) {
        return {
            schemeId: "smithy.api#httpBearerAuth",
            propertiesExtractor: ({
                profile: Q,
                filepath: B,
                configFilepath: G,
                ignoreCache: Z
            }, I) => ({
                identityProperties: {
                    profile: Q,
                    filepath: B,
                    configFilepath: G,
                    ignoreCache: Z
                }
            })
        }
    }
    var c68 = (A) => {
        let Q = [];
        switch (A.operation) {
            default:
                Q.push(m68(A)), Q.push(d68(A))
        }
        return Q
    };
    POQ.defaultBedrockHttpAuthSchemeProvider = c68;
    var p68 = (A) => {
        let Q = (0, VR1.memoizeIdentityProvider)(A.token, VR1.isIdentityExpired, VR1.doesIdentityRequireRefresh),
            B = (0, g68.resolveAwsSdkSigV4Config)(A);
        return Object.assign(B, {
            authSchemePreference: (0, KR1.normalizeProvider)(A.authSchemePreference ?? []),
            token: Q
        })
    };
    POQ.resolveHttpAuthSchemeConfig = p68
});
var SOQ = U((jE7, n68) => {
    n68.exports = {
        name: "@aws-sdk/client-bedrock",
        description: "AWS SDK for JavaScript Bedrock Client for Node.js, Browser and React Native",
        version: "3.840.0",
        scripts: {
            build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline client-bedrock",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            "extract:docs": "api-extractor run --local",
            "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: !1,
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.840.0",
            "@aws-sdk/credential-provider-node": "3.840.0",
            "@aws-sdk/middleware-host-header": "3.840.0",
            "@aws-sdk/middleware-logger": "3.840.0",
            "@aws-sdk/middleware-recursion-detection": "3.840.0",
            "@aws-sdk/middleware-user-agent": "3.840.0",
            "@aws-sdk/region-config-resolver": "3.840.0",
            "@aws-sdk/token-providers": "3.840.0",
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
            "@types/uuid": "^9.0.1",
            tslib: "^2.6.2",
            uuid: "^9.0.1"
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
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "clients/client-bedrock"
        }
    }
});
var HR1 = U((SE7, hOQ) => {
    var {
        defineProperty: KmA,
        getOwnPropertyDescriptor: a68,
        getOwnPropertyNames: s68
    } = Object, r68 = Object.prototype.hasOwnProperty, o68 = (A, Q) => KmA(A, "name", {
        value: Q,
        configurable: !0
    }), t68 = (A, Q) => {
        for (var B in Q) KmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, e68 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of s68(Q))
                if (!r68.call(A, Z) && Z !== B) KmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = a68(Q, Z)) || G.enumerable
                })
        }
        return A
    }, A58 = (A) => e68(KmA({}, "__esModule", {
        value: !0
    }), A), _OQ = {};
    t68(_OQ, {
        ENV_ACCOUNT_ID: () => fOQ,
        ENV_CREDENTIAL_SCOPE: () => bOQ,
        ENV_EXPIRATION: () => vOQ,
        ENV_KEY: () => kOQ,
        ENV_SECRET: () => yOQ,
        ENV_SESSION: () => xOQ,
        fromEnv: () => G58
    });
    hOQ.exports = A58(_OQ);
    var Q58 = bR(),
        B58 = P2(),
        kOQ = "AWS_ACCESS_KEY_ID",
        yOQ = "AWS_SECRET_ACCESS_KEY",
        xOQ = "AWS_SESSION_TOKEN",
        vOQ = "AWS_CREDENTIAL_EXPIRATION",
        bOQ = "AWS_CREDENTIAL_SCOPE",
        fOQ = "AWS_ACCOUNT_ID",
        G58 = o68((A) => async () => {
            A?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
            let Q = process.env[kOQ],
                B = process.env[yOQ],
                G = process.env[xOQ],
                Z = process.env[vOQ],
                I = process.env[bOQ],
                Y = process.env[fOQ];
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
                return (0, Q58.setCredentialFeature)(J, "CREDENTIALS_ENV_VARS", "g"), J
            }
            throw new B58.CredentialsProviderError("Unable to find environment variable credentials.", {
                logger: A?.logger
            })
        }, "fromEnv")
});
var mOQ = U((gOQ) => {
    Object.defineProperty(gOQ, "__esModule", {
        value: !0
    });
    gOQ.checkUrl = void 0;
    var Z58 = P2(),
        I58 = "169.254.170.2",
        Y58 = "169.254.170.23",
        J58 = "[fd00:ec2::23]",
        W58 = (A, Q) => {
            if (A.protocol === "https:") return;
            if (A.hostname === I58 || A.hostname === Y58 || A.hostname === J58) return;
            if (A.hostname.includes("[")) {
                if (A.hostname === "[::1]" || A.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return
            } else {
                if (A.hostname === "localhost") return;
                let B = A.hostname.split("."),
                    G = (Z) => {
                        let I = parseInt(Z, 10);
                        return 0 <= I && I <= 255
                    };
                if (B[0] === "127" && G(B[1]) && G(B[2]) && G(B[3]) && B.length === 4) return
            }
            throw new Z58.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
                logger: Q
            })
        };
    gOQ.checkUrl = W58
});
var cOQ = U((dOQ) => {
    Object.defineProperty(dOQ, "__esModule", {
        value: !0
    });
    dOQ.createGetRequest = K58;
    dOQ.getCredentials = D58;
    var CR1 = P2(),
        X58 = lz(),
        F58 = l6(),
        V58 = cm();

    function K58(A) {
        return new X58.HttpRequest({
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
    async function D58(A, Q) {
        let G = await (0, V58.sdkStreamMixin)(A.body).transformToString();
        if (A.statusCode === 200) {
            let Z = JSON.parse(G);
            if (typeof Z.AccessKeyId !== "string" || typeof Z.SecretAccessKey !== "string" || typeof Z.Token !== "string" || typeof Z.Expiration !== "string") throw new CR1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
                logger: Q
            });
            return {
                accessKeyId: Z.AccessKeyId,
                secretAccessKey: Z.SecretAccessKey,
                sessionToken: Z.Token,
                expiration: (0, F58.parseRfc3339DateTime)(Z.Expiration)
            }
        }
        if (A.statusCode >= 400 && A.statusCode < 500) {
            let Z = {};
            try {
                Z = JSON.parse(G)
            } catch (I) {}
            throw Object.assign(new CR1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
                logger: Q
            }), {
                Code: Z.Code,
                Message: Z.Message
            })
        }
        throw new CR1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
            logger: Q
        })
    }
});
var iOQ = U((pOQ) => {
    Object.defineProperty(pOQ, "__esModule", {
        value: !0
    });
    pOQ.retryWrapper = void 0;
    var E58 = (A, Q, B) => {
        return async () => {
            for (let G = 0; G < Q; ++G) try {
                return await A()
            } catch (Z) {
                await new Promise((I) => setTimeout(I, B))
            }
            return await A()
        }
    };
    pOQ.retryWrapper = E58
});
var oOQ = U((sOQ) => {
    Object.defineProperty(sOQ, "__esModule", {
        value: !0
    });
    sOQ.fromHttp = void 0;
    var z58 = nr(),
        U58 = bR(),
        $58 = oG(),
        nOQ = P2(),
        w58 = z58.__importDefault(UA("fs/promises")),
        q58 = mOQ(),
        aOQ = cOQ(),
        N58 = iOQ(),
        L58 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        M58 = "http://169.254.170.2",
        O58 = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        R58 = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
        T58 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        P58 = (A = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
            let Q, B = A.awsContainerCredentialsRelativeUri ?? process.env[L58],
                G = A.awsContainerCredentialsFullUri ?? process.env[O58],
                Z = A.awsContainerAuthorizationToken ?? process.env[T58],
                I = A.awsContainerAuthorizationTokenFile ?? process.env[R58],
                Y = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console.warn : A.logger.warn;
            if (B && G) Y("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), Y("awsContainerCredentialsFullUri will take precedence.");
            if (Z && I) Y("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), Y("awsContainerAuthorizationToken will take precedence.");
            if (G) Q = G;
            else if (B) Q = `${M58}${B}`;
            else throw new nOQ.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
                logger: A.logger
            });
            let J = new URL(Q);
            (0, q58.checkUrl)(J, A.logger);
            let W = new $58.NodeHttpHandler({
                requestTimeout: A.timeout ?? 1000,
                connectionTimeout: A.timeout ?? 1000
            });
            return (0, N58.retryWrapper)(async () => {
                let X = (0, aOQ.createGetRequest)(J);
                if (Z) X.headers.Authorization = Z;
                else if (I) X.headers.Authorization = (await w58.default.readFile(I)).toString();
                try {
                    let F = await W.handle(X);
                    return (0, aOQ.getCredentials)(F.response).then((V) => (0, U58.setCredentialFeature)(V, "CREDENTIALS_HTTP", "z"))
                } catch (F) {
                    throw new nOQ.CredentialsProviderError(String(F), {
                        logger: A.logger
                    })
                }
            }, A.maxRetries ?? 3, A.timeout ?? 1000)
        };
    sOQ.fromHttp = P58
});
var zR1 = U((ER1) => {
    Object.defineProperty(ER1, "__esModule", {
        value: !0
    });
    ER1.fromHttp = void 0;
    var j58 = oOQ();
    Object.defineProperty(ER1, "fromHttp", {
        enumerable: !0,
        get: function() {
            return j58.fromHttp
        }
    })
});
var $R1 = U((tOQ) => {
    Object.defineProperty(tOQ, "__esModule", {
        value: !0
    });
    tOQ.resolveHttpAuthSchemeConfig = tOQ.defaultSSOHttpAuthSchemeProvider = tOQ.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var _58 = MV(),
        UR1 = K7(),
        k58 = async (A, Q, B) => {
            return {
                operation: (0, UR1.getSmithyContext)(Q).operation,
                region: await (0, UR1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    tOQ.defaultSSOHttpAuthSchemeParametersProvider = k58;

    function y58(A) {
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

    function DmA(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var x58 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "GetRoleCredentials": {
                Q.push(DmA(A));
                break
            }
            case "ListAccountRoles": {
                Q.push(DmA(A));
                break
            }
            case "ListAccounts": {
                Q.push(DmA(A));
                break
            }
            case "Logout": {
                Q.push(DmA(A));
                break
            }
            default:
                Q.push(y58(A))
        }
        return Q
    };
    tOQ.defaultSSOHttpAuthSchemeProvider = x58;
    var v58 = (A) => {
        let Q = (0, _58.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, UR1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    tOQ.resolveHttpAuthSchemeConfig = v58
});
var ARQ = U((fE7, h58) => {
    h58.exports = {
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
var vHA = U((hE7, JRQ) => {
    var {
        defineProperty: CmA,
        getOwnPropertyDescriptor: g58,
        getOwnPropertyNames: u58
    } = Object, m58 = Object.prototype.hasOwnProperty, HmA = (A, Q) => CmA(A, "name", {
        value: Q,
        configurable: !0
    }), d58 = (A, Q) => {
        for (var B in Q) CmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, c58 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of u58(Q))
                if (!m58.call(A, Z) && Z !== B) CmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = g58(Q, Z)) || G.enumerable
                })
        }
        return A
    }, p58 = (A) => c58(CmA({}, "__esModule", {
        value: !0
    }), A), BRQ = {};
    d58(BRQ, {
        NODE_APP_ID_CONFIG_OPTIONS: () => s58,
        UA_APP_ID_ENV_NAME: () => IRQ,
        UA_APP_ID_INI_NAME: () => YRQ,
        createDefaultUserAgentProvider: () => ZRQ,
        crtAvailability: () => GRQ,
        defaultUserAgent: () => i58
    });
    JRQ.exports = p58(BRQ);
    var QRQ = UA("os"),
        wR1 = UA("process"),
        GRQ = {
            isCrtAvailable: !1
        },
        l58 = HmA(() => {
            if (GRQ.isCrtAvailable) return ["md/crt-avail"];
            return null
        }, "isCrtAvailable"),
        ZRQ = HmA(({
            serviceId: A,
            clientVersion: Q
        }) => {
            return async (B) => {
                let G = [
                        ["aws-sdk-js", Q],
                        ["ua", "2.1"],
                        [`os/${(0,QRQ.platform)()}`, (0, QRQ.release)()],
                        ["lang/js"],
                        ["md/nodejs", `${wR1.versions.node}`]
                    ],
                    Z = l58();
                if (Z) G.push(Z);
                if (A) G.push([`api/${A}`, Q]);
                if (wR1.env.AWS_EXECUTION_ENV) G.push([`exec-env/${wR1.env.AWS_EXECUTION_ENV}`]);
                let I = await B?.userAgentAppId?.();
                return I ? [...G, [`app/${I}`]] : [...G]
            }
        }, "createDefaultUserAgentProvider"),
        i58 = ZRQ,
        n58 = J6A(),
        IRQ = "AWS_SDK_UA_APP_ID",
        YRQ = "sdk_ua_app_id",
        a58 = "sdk-ua-app-id",
        s58 = {
            environmentVariableSelector: HmA((A) => A[IRQ], "environmentVariableSelector"),
            configFileSelector: HmA((A) => A[YRQ] ?? A[a58], "configFileSelector"),
            default: n58.DEFAULT_UA_APP_ID
        }
});
var MRQ = U((NRQ) => {
    Object.defineProperty(NRQ, "__esModule", {
        value: !0
    });
    NRQ.ruleSet = void 0;
    var URQ = "required",
        NL = "fn",
        LL = "argv",
        F6A = "ref",
        WRQ = !0,
        XRQ = "isSet",
        bHA = "booleanEquals",
        W6A = "error",
        X6A = "endpoint",
        tv = "tree",
        qR1 = "PartitionResult",
        NR1 = "getAttr",
        FRQ = {
            [URQ]: !1,
            type: "String"
        },
        VRQ = {
            [URQ]: !0,
            default: !1,
            type: "Boolean"
        },
        KRQ = {
            [F6A]: "Endpoint"
        },
        $RQ = {
            [NL]: bHA,
            [LL]: [{
                [F6A]: "UseFIPS"
            }, !0]
        },
        wRQ = {
            [NL]: bHA,
            [LL]: [{
                [F6A]: "UseDualStack"
            }, !0]
        },
        qL = {},
        DRQ = {
            [NL]: NR1,
            [LL]: [{
                [F6A]: qR1
            }, "supportsFIPS"]
        },
        qRQ = {
            [F6A]: qR1
        },
        HRQ = {
            [NL]: bHA,
            [LL]: [!0, {
                [NL]: NR1,
                [LL]: [qRQ, "supportsDualStack"]
            }]
        },
        CRQ = [$RQ],
        ERQ = [wRQ],
        zRQ = [{
            [F6A]: "Region"
        }],
        r58 = {
            version: "1.0",
            parameters: {
                Region: FRQ,
                UseDualStack: VRQ,
                UseFIPS: VRQ,
                Endpoint: FRQ
            },
            rules: [{
                conditions: [{
                    [NL]: XRQ,
                    [LL]: [KRQ]
                }],
                rules: [{
                    conditions: CRQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: W6A
                }, {
                    conditions: ERQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: W6A
                }, {
                    endpoint: {
                        url: KRQ,
                        properties: qL,
                        headers: qL
                    },
                    type: X6A
                }],
                type: tv
            }, {
                conditions: [{
                    [NL]: XRQ,
                    [LL]: zRQ
                }],
                rules: [{
                    conditions: [{
                        [NL]: "aws.partition",
                        [LL]: zRQ,
                        assign: qR1
                    }],
                    rules: [{
                        conditions: [$RQ, wRQ],
                        rules: [{
                            conditions: [{
                                [NL]: bHA,
                                [LL]: [WRQ, DRQ]
                            }, HRQ],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: qL,
                                    headers: qL
                                },
                                type: X6A
                            }],
                            type: tv
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: W6A
                        }],
                        type: tv
                    }, {
                        conditions: CRQ,
                        rules: [{
                            conditions: [{
                                [NL]: bHA,
                                [LL]: [DRQ, WRQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [NL]: "stringEquals",
                                    [LL]: [{
                                        [NL]: NR1,
                                        [LL]: [qRQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://portal.sso.{Region}.amazonaws.com",
                                    properties: qL,
                                    headers: qL
                                },
                                type: X6A
                            }, {
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: qL,
                                    headers: qL
                                },
                                type: X6A
                            }],
                            type: tv
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: W6A
                        }],
                        type: tv
                    }, {
                        conditions: ERQ,
                        rules: [{
                            conditions: [HRQ],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: qL,
                                    headers: qL
                                },
                                type: X6A
                            }],
                            type: tv
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: W6A
                        }],
                        type: tv
                    }, {
                        endpoint: {
                            url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                            properties: qL,
                            headers: qL
                        },
                        type: X6A
                    }],
                    type: tv
                }],
                type: tv
            }, {
                error: "Invalid Configuration: Missing Region",
                type: W6A
            }]
        };
    NRQ.ruleSet = r58
});
var TRQ = U((ORQ) => {
    Object.defineProperty(ORQ, "__esModule", {
        value: !0
    });
    ORQ.defaultEndpointResolver = void 0;
    var o58 = Q6A(),
        LR1 = II(),
        t58 = MRQ(),
        e58 = new LR1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        A38 = (A, Q = {}) => {
            return e58.get(A, () => (0, LR1.resolveEndpoint)(t58.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    ORQ.defaultEndpointResolver = A38;
    LR1.customEndpointFunctions.aws = o58.awsEndpointFunctions
});
var kRQ = U((SRQ) => {
    Object.defineProperty(SRQ, "__esModule", {
        value: !0
    });
    SRQ.getRuntimeConfig = void 0;
    var Q38 = MV(),
        B38 = nB(),
        G38 = l6(),
        Z38 = zJ(),
        PRQ = Od(),
        jRQ = L2(),
        I38 = $R1(),
        Y38 = TRQ(),
        J38 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? PRQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? PRQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? Y38.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? I38.defaultSSOHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new Q38.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new B38.NoAuthSigner
                }],
                logger: A?.logger ?? new G38.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO",
                urlParser: A?.urlParser ?? Z38.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? jRQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? jRQ.toUtf8
            }
        };
    SRQ.getRuntimeConfig = J38
});
var gRQ = U((fRQ) => {
    Object.defineProperty(fRQ, "__esModule", {
        value: !0
    });
    fRQ.getRuntimeConfig = void 0;
    var W38 = nr(),
        X38 = W38.__importDefault(ARQ()),
        yRQ = MV(),
        xRQ = vHA(),
        EmA = S8(),
        F38 = wX(),
        vRQ = X6(),
        or = xI(),
        bRQ = oG(),
        V38 = qX(),
        K38 = FW(),
        D38 = kRQ(),
        H38 = l6(),
        C38 = NX(),
        E38 = l6(),
        z38 = (A) => {
            (0, E38.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, C38.resolveDefaultsModeConfig)(A),
                B = () => Q().then(H38.loadConfigsForDefaultMode),
                G = (0, D38.getRuntimeConfig)(A);
            (0, yRQ.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile,
                logger: G.logger
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                authSchemePreference: A?.authSchemePreference ?? (0, or.loadConfig)(yRQ.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, Z),
                bodyLengthChecker: A?.bodyLengthChecker ?? V38.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, xRQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: X38.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, or.loadConfig)(vRQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, or.loadConfig)(EmA.NODE_REGION_CONFIG_OPTIONS, {
                    ...EmA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: bRQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, or.loadConfig)({
                    ...vRQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || K38.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? F38.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? bRQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, or.loadConfig)(EmA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, or.loadConfig)(EmA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, or.loadConfig)(xRQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    fRQ.getRuntimeConfig = z38
});
var fHA = U((cE7, lRQ) => {
    var {
        defineProperty: zmA,
        getOwnPropertyDescriptor: U38,
        getOwnPropertyNames: $38
    } = Object, w38 = Object.prototype.hasOwnProperty, PS = (A, Q) => zmA(A, "name", {
        value: Q,
        configurable: !0
    }), q38 = (A, Q) => {
        for (var B in Q) zmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, N38 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of $38(Q))
                if (!w38.call(A, Z) && Z !== B) zmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = U38(Q, Z)) || G.enumerable
                })
        }
        return A
    }, L38 = (A) => N38(zmA({}, "__esModule", {
        value: !0
    }), A), mRQ = {};
    q38(mRQ, {
        NODE_REGION_CONFIG_FILE_OPTIONS: () => T38,
        NODE_REGION_CONFIG_OPTIONS: () => R38,
        REGION_ENV_NAME: () => dRQ,
        REGION_INI_NAME: () => cRQ,
        getAwsRegionExtensionConfiguration: () => M38,
        resolveAwsRegionExtensionConfiguration: () => O38,
        resolveRegionConfig: () => P38
    });
    lRQ.exports = L38(mRQ);
    var M38 = PS((A) => {
            return {
                setRegion(Q) {
                    A.region = Q
                },
                region() {
                    return A.region
                }
            }
        }, "getAwsRegionExtensionConfiguration"),
        O38 = PS((A) => {
            return {
                region: A.region()
            }
        }, "resolveAwsRegionExtensionConfiguration"),
        dRQ = "AWS_REGION",
        cRQ = "region",
        R38 = {
            environmentVariableSelector: PS((A) => A[dRQ], "environmentVariableSelector"),
            configFileSelector: PS((A) => A[cRQ], "configFileSelector"),
            default: PS(() => {
                throw Error("Region is missing")
            }, "default")
        },
        T38 = {
            preferredFile: "credentials"
        },
        pRQ = PS((A) => typeof A === "string" && (A.startsWith("fips-") || A.endsWith("-fips")), "isFipsRegion"),
        uRQ = PS((A) => pRQ(A) ? ["fips-aws-global", "aws-fips"].includes(A) ? "us-east-1" : A.replace(/fips-(dkr-|prod-)?|-fips/, "") : A, "getRealRegion"),
        P38 = PS((A) => {
            let {
                region: Q,
                useFipsEndpoint: B
            } = A;
            if (!Q) throw Error("Region is missing");
            return Object.assign(A, {
                region: PS(async () => {
                    if (typeof Q === "string") return uRQ(Q);
                    let G = await Q();
                    return uRQ(G)
                }, "region"),
                useFipsEndpoint: PS(async () => {
                    let G = typeof Q === "string" ? Q : await Q();
                    if (pRQ(G)) return !0;
                    return typeof B !== "function" ? Promise.resolve(!!B) : B()
                }, "useFipsEndpoint")
            })
        }, "resolveRegionConfig")
});
var $TQ = U((pE7, UTQ) => {
    var {
        defineProperty: UmA,
        getOwnPropertyDescriptor: j38,
        getOwnPropertyNames: S38
    } = Object, _38 = Object.prototype.hasOwnProperty, w5 = (A, Q) => UmA(A, "name", {
        value: Q,
        configurable: !0
    }), k38 = (A, Q) => {
        for (var B in Q) UmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, y38 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of S38(Q))
                if (!_38.call(A, Z) && Z !== B) UmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = j38(Q, Z)) || G.enumerable
                })
        }
        return A
    }, x38 = (A) => y38(UmA({}, "__esModule", {
        value: !0
    }), A), tRQ = {};
    k38(tRQ, {
        GetRoleCredentialsCommand: () => CTQ,
        GetRoleCredentialsRequestFilterSensitiveLog: () => GTQ,
        GetRoleCredentialsResponseFilterSensitiveLog: () => ITQ,
        InvalidRequestException: () => eRQ,
        ListAccountRolesCommand: () => MR1,
        ListAccountRolesRequestFilterSensitiveLog: () => YTQ,
        ListAccountsCommand: () => OR1,
        ListAccountsRequestFilterSensitiveLog: () => JTQ,
        LogoutCommand: () => ETQ,
        LogoutRequestFilterSensitiveLog: () => WTQ,
        ResourceNotFoundException: () => ATQ,
        RoleCredentialsFilterSensitiveLog: () => ZTQ,
        SSO: () => zTQ,
        SSOClient: () => wmA,
        SSOServiceException: () => V6A,
        TooManyRequestsException: () => QTQ,
        UnauthorizedException: () => BTQ,
        __Client: () => X2.Client,
        paginateListAccountRoles: () => Y78,
        paginateListAccounts: () => J78
    });
    UTQ.exports = x38(tRQ);
    var iRQ = THA(),
        v38 = PHA(),
        b38 = jHA(),
        nRQ = J6A(),
        f38 = S8(),
        ev = nB(),
        h38 = zX(),
        gHA = E5(),
        aRQ = X6(),
        sRQ = $R1(),
        g38 = w5((A) => {
            return Object.assign(A, {
                useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
                useFipsEndpoint: A.useFipsEndpoint ?? !1,
                defaultSigningName: "awsssoportal"
            })
        }, "resolveClientEndpointParameters"),
        $mA = {
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
        u38 = gRQ(),
        rRQ = fHA(),
        oRQ = lz(),
        X2 = l6(),
        m38 = w5((A) => {
            let {
                httpAuthSchemes: Q,
                httpAuthSchemeProvider: B,
                credentials: G
            } = A;