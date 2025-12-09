/**
 * Claude Code Decompiled
 * Category: git
 * File: 6/34
 * Lines: 68786 - 70285 (1500 lines)
 * Original file: cli.js
 */

var NG = U((yW7, HDA) => {
    var {
        defineProperty: RfA,
        getOwnPropertyDescriptor: O$4,
        getOwnPropertyNames: R$4
    } = Object, T$4 = Object.prototype.hasOwnProperty, nN = (A, Q) => RfA(A, "name", {
        value: Q,
        configurable: !0
    }), P$4 = (A, Q) => {
        for (var B in Q) RfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, JU1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of R$4(Q))
                if (!T$4.call(A, Z) && Z !== B) RfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = O$4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, XU1 = (A, Q, B) => (JU1(A, Q, "default"), B && JU1(B, Q, "default")), j$4 = (A) => JU1(RfA({}, "__esModule", {
        value: !0
    }), A), DDA = {};
    P$4(DDA, {
        CONFIG_PREFIX_SEPARATOR: () => Ur,
        DEFAULT_PROFILE: () => BQQ,
        ENV_PROFILE: () => QQQ,
        getProfileName: () => S$4,
        loadSharedConfigFiles: () => ZQQ,
        loadSsoSessionData: () => c$4,
        parseKnownFiles: () => l$4
    });
    HDA.exports = j$4(DDA);
    XU1(DDA, O4A(), HDA.exports);
    var QQQ = "AWS_PROFILE",
        BQQ = "default",
        S$4 = nN((A) => A.profile || process.env[QQQ] || BQQ, "getProfileName");
    XU1(DDA, ZU1(), HDA.exports);
    XU1(DDA, u0Q(), HDA.exports);
    var MfA = r0Q(),
        _$4 = nN((A) => Object.entries(A).filter(([Q]) => {
            let B = Q.indexOf(Ur);
            if (B === -1) return !1;
            return Object.values(MfA.IniSectionType).includes(Q.substring(0, B))
        }).reduce((Q, [B, G]) => {
            let Z = B.indexOf(Ur),
                I = B.substring(0, Z) === MfA.IniSectionType.PROFILE ? B.substring(Z + 1) : B;
            return Q[I] = G, Q
        }, {
            ...A.default && {
                default: A.default
            }
        }), "getConfigData"),
        OfA = UA("path"),
        k$4 = O4A(),
        y$4 = "AWS_CONFIG_FILE",
        GQQ = nN(() => process.env[y$4] || (0, OfA.join)((0, k$4.getHomeDir)(), ".aws", "config"), "getConfigFilepath"),
        x$4 = O4A(),
        v$4 = "AWS_SHARED_CREDENTIALS_FILE",
        b$4 = nN(() => process.env[v$4] || (0, OfA.join)((0, x$4.getHomeDir)(), ".aws", "credentials"), "getCredentialsFilepath"),
        f$4 = O4A(),
        h$4 = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/,
        g$4 = ["__proto__", "profile __proto__"],
        WU1 = nN((A) => {
            let Q = {},
                B, G;
            for (let Z of A.split(/\r?\n/)) {
                let I = Z.split(/(^|\s)[;#]/)[0].trim();
                if (I[0] === "[" && I[I.length - 1] === "]") {
                    B = void 0, G = void 0;
                    let J = I.substring(1, I.length - 1),
                        W = h$4.exec(J);
                    if (W) {
                        let [, X, , F] = W;
                        if (Object.values(MfA.IniSectionType).includes(X)) B = [X, F].join(Ur)
                    } else B = J;
                    if (g$4.includes(J)) throw Error(`Found invalid profile name "${J}"`)
                } else if (B) {
                    let J = I.indexOf("=");
                    if (![0, -1].includes(J)) {
                        let [W, X] = [I.substring(0, J).trim(), I.substring(J + 1).trim()];
                        if (X === "") G = W;
                        else {
                            if (G && Z.trimStart() === Z) G = void 0;
                            Q[B] = Q[B] || {};
                            let F = G ? [G, W].join(Ur) : W;
                            Q[B][F] = X
                        }
                    }
                }
            }
            return Q
        }, "parseIni"),
        e0Q = YU1(),
        AQQ = nN(() => ({}), "swallowError"),
        Ur = ".",
        ZQQ = nN(async (A = {}) => {
            let {
                filepath: Q = b$4(),
                configFilepath: B = GQQ()
            } = A, G = (0, f$4.getHomeDir)(), Z = "~/", I = Q;
            if (Q.startsWith("~/")) I = (0, OfA.join)(G, Q.slice(2));
            let Y = B;
            if (B.startsWith("~/")) Y = (0, OfA.join)(G, B.slice(2));
            let J = await Promise.all([(0, e0Q.slurpFile)(Y, {
                ignoreCache: A.ignoreCache
            }).then(WU1).then(_$4).catch(AQQ), (0, e0Q.slurpFile)(I, {
                ignoreCache: A.ignoreCache
            }).then(WU1).catch(AQQ)]);
            return {
                configFile: J[0],
                credentialsFile: J[1]
            }
        }, "loadSharedConfigFiles"),
        u$4 = nN((A) => Object.entries(A).filter(([Q]) => Q.startsWith(MfA.IniSectionType.SSO_SESSION + Ur)).reduce((Q, [B, G]) => ({
            ...Q,
            [B.substring(B.indexOf(Ur) + 1)]: G
        }), {}), "getSsoSessionData"),
        m$4 = YU1(),
        d$4 = nN(() => ({}), "swallowError"),
        c$4 = nN(async (A = {}) => (0, m$4.slurpFile)(A.configFilepath ?? GQQ()).then(WU1).then(u$4).catch(d$4), "loadSsoSessionData"),
        p$4 = nN((...A) => {
            let Q = {};
            for (let B of A)
                for (let [G, Z] of Object.entries(B))
                    if (Q[G] !== void 0) Object.assign(Q[G], Z);
                    else Q[G] = Z;
            return Q
        }, "mergeConfigFiles"),
        l$4 = nN(async (A) => {
            let Q = await ZQQ(A);
            return p$4(Q.configFile, Q.credentialsFile)
        }, "parseKnownFiles")
});
var xI = U((xW7, JQQ) => {
    var {
        defineProperty: TfA,
        getOwnPropertyDescriptor: i$4,
        getOwnPropertyNames: n$4
    } = Object, a$4 = Object.prototype.hasOwnProperty, R4A = (A, Q) => TfA(A, "name", {
        value: Q,
        configurable: !0
    }), s$4 = (A, Q) => {
        for (var B in Q) TfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, r$4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of n$4(Q))
                if (!a$4.call(A, Z) && Z !== B) TfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = i$4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, o$4 = (A) => r$4(TfA({}, "__esModule", {
        value: !0
    }), A), YQQ = {};
    s$4(YQQ, {
        loadConfig: () => Bw4
    });
    JQQ.exports = o$4(YQQ);
    var CDA = P2();

    function FU1(A) {
        try {
            let Q = new Set(Array.from(A.match(/([A-Z_]){3,}/g) ?? []));
            return Q.delete("CONFIG"), Q.delete("CONFIG_PREFIX_SEPARATOR"), Q.delete("ENV"), [...Q].join(", ")
        } catch (Q) {
            return A
        }
    }
    R4A(FU1, "getSelectorName");
    var t$4 = R4A((A, Q) => async () => {
            try {
                let B = A(process.env, Q);
                if (B === void 0) throw Error();
                return B
            } catch (B) {
                throw new CDA.CredentialsProviderError(B.message || `Not found in ENV: ${FU1(A.toString())}`, {
                    logger: Q?.logger
                })
            }
        }, "fromEnv"),
        IQQ = NG(),
        e$4 = R4A((A, {
            preferredFile: Q = "config",
            ...B
        } = {}) => async () => {
            let G = (0, IQQ.getProfileName)(B),
                {
                    configFile: Z,
                    credentialsFile: I
                } = await (0, IQQ.loadSharedConfigFiles)(B),
                Y = I[G] || {},
                J = Z[G] || {},
                W = Q === "config" ? {
                    ...Y,
                    ...J
                } : {
                    ...J,
                    ...Y
                };
            try {
                let F = A(W, Q === "config" ? Z : I);
                if (F === void 0) throw Error();
                return F
            } catch (X) {
                throw new CDA.CredentialsProviderError(X.message || `Not found in config files w/ profile [${G}]: ${FU1(A.toString())}`, {
                    logger: B.logger
                })
            }
        }, "fromSharedConfigFiles"),
        Aw4 = R4A((A) => typeof A === "function", "isFunction"),
        Qw4 = R4A((A) => Aw4(A) ? async () => await A(): (0, CDA.fromStatic)(A), "fromStatic"),
        Bw4 = R4A(({
            environmentVariableSelector: A,
            configFileSelector: Q,
            default: B
        }, G = {}) => {
            let {
                signingName: Z,
                logger: I
            } = G, Y = {
                signingName: Z,
                logger: I
            };
            return (0, CDA.memoize)((0, CDA.chain)(t$4(A, Y), e$4(Q, G), Qw4(B)))
        }, "loadConfig")
});
var DQQ = U((VQQ) => {
    Object.defineProperty(VQQ, "__esModule", {
        value: !0
    });
    VQQ.getEndpointUrlConfig = void 0;
    var WQQ = NG(),
        XQQ = "AWS_ENDPOINT_URL",
        FQQ = "endpoint_url",
        Gw4 = (A) => ({
            environmentVariableSelector: (Q) => {
                let B = A.split(" ").map((I) => I.toUpperCase()),
                    G = Q[[XQQ, ...B].join("_")];
                if (G) return G;
                let Z = Q[XQQ];
                if (Z) return Z;
                return
            },
            configFileSelector: (Q, B) => {
                if (B && Q.services) {
                    let Z = B[["services", Q.services].join(WQQ.CONFIG_PREFIX_SEPARATOR)];
                    if (Z) {
                        let I = A.split(" ").map((J) => J.toLowerCase()),
                            Y = Z[[I.join("_"), FQQ].join(WQQ.CONFIG_PREFIX_SEPARATOR)];
                        if (Y) return Y
                    }
                }
                let G = Q[FQQ];
                if (G) return G;
                return
            },
            default: void 0
        });
    VQQ.getEndpointUrlConfig = Gw4
});
var VU1 = U((HQQ) => {
    Object.defineProperty(HQQ, "__esModule", {
        value: !0
    });
    HQQ.getEndpointFromConfig = void 0;
    var Zw4 = xI(),
        Iw4 = DQQ(),
        Yw4 = async (A) => (0, Zw4.loadConfig)((0, Iw4.getEndpointUrlConfig)(A !== null && A !== void 0 ? A : ""))();
    HQQ.getEndpointFromConfig = Yw4
});
var $QQ = U((fW7, UQQ) => {
    var {
        defineProperty: PfA,
        getOwnPropertyDescriptor: Jw4,
        getOwnPropertyNames: Ww4
    } = Object, Xw4 = Object.prototype.hasOwnProperty, Fw4 = (A, Q) => PfA(A, "name", {
        value: Q,
        configurable: !0
    }), Vw4 = (A, Q) => {
        for (var B in Q) PfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Kw4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Ww4(Q))
                if (!Xw4.call(A, Z) && Z !== B) PfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Jw4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Dw4 = (A) => Kw4(PfA({}, "__esModule", {
        value: !0
    }), A), EQQ = {};
    Vw4(EQQ, {
        parseQueryString: () => zQQ
    });
    UQQ.exports = Dw4(EQQ);

    function zQQ(A) {
        let Q = {};
        if (A = A.replace(/^\?/, ""), A)
            for (let B of A.split("&")) {
                let [G, Z = null] = B.split("=");
                if (G = decodeURIComponent(G), Z) Z = decodeURIComponent(Z);
                if (!(G in Q)) Q[G] = Z;
                else if (Array.isArray(Q[G])) Q[G].push(Z);
                else Q[G] = [Q[G], Z]
            }
        return Q
    }
    Fw4(zQQ, "parseQueryString")
});
var zJ = U((hW7, NQQ) => {
    var {
        defineProperty: jfA,
        getOwnPropertyDescriptor: Hw4,
        getOwnPropertyNames: Cw4
    } = Object, Ew4 = Object.prototype.hasOwnProperty, zw4 = (A, Q) => jfA(A, "name", {
        value: Q,
        configurable: !0
    }), Uw4 = (A, Q) => {
        for (var B in Q) jfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, $w4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Cw4(Q))
                if (!Ew4.call(A, Z) && Z !== B) jfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Hw4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ww4 = (A) => $w4(jfA({}, "__esModule", {
        value: !0
    }), A), wQQ = {};
    Uw4(wQQ, {
        parseUrl: () => qQQ
    });
    NQQ.exports = ww4(wQQ);
    var qw4 = $QQ(),
        qQQ = zw4((A) => {
            if (typeof A === "string") return qQQ(new URL(A));
            let {
                hostname: Q,
                pathname: B,
                port: G,
                protocol: Z,
                search: I
            } = A, Y;
            if (I) Y = (0, qw4.parseQueryString)(I);
            return {
                hostname: Q,
                port: G ? parseInt(G) : void 0,
                protocol: Z,
                path: B,
                query: Y
            }
        }, "parseUrl")
});
var E5 = U((gW7, jQQ) => {
    var {
        defineProperty: _fA,
        getOwnPropertyDescriptor: Nw4,
        getOwnPropertyNames: Lw4
    } = Object, Mw4 = Object.prototype.hasOwnProperty, aN = (A, Q) => _fA(A, "name", {
        value: Q,
        configurable: !0
    }), Ow4 = (A, Q) => {
        for (var B in Q) _fA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Rw4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Lw4(Q))
                if (!Mw4.call(A, Z) && Z !== B) _fA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Nw4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Tw4 = (A) => Rw4(_fA({}, "__esModule", {
        value: !0
    }), A), MQQ = {};
    Ow4(MQQ, {
        endpointMiddleware: () => TQQ,
        endpointMiddlewareOptions: () => PQQ,
        getEndpointFromInstructions: () => OQQ,
        getEndpointPlugin: () => hw4,
        resolveEndpointConfig: () => uw4,
        resolveEndpointRequiredConfig: () => mw4,
        resolveParams: () => RQQ,
        toEndpointV1: () => KU1
    });
    jQQ.exports = Tw4(MQQ);
    var Pw4 = aN(async (A) => {
            let Q = A?.Bucket || "";
            if (typeof A.Bucket === "string") A.Bucket = Q.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
            if (yw4(Q)) {
                if (A.ForcePathStyle === !0) throw Error("Path-style addressing cannot be used with ARN buckets")
            } else if (!kw4(Q) || Q.indexOf(".") !== -1 && !String(A.Endpoint).startsWith("http:") || Q.toLowerCase() !== Q || Q.length < 3) A.ForcePathStyle = !0;
            if (A.DisableMultiRegionAccessPoints) A.disableMultiRegionAccessPoints = !0, A.DisableMRAP = !0;
            return A
        }, "resolveParamsForS3"),
        jw4 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
        Sw4 = /(\d+\.){3}\d+/,
        _w4 = /\.\./,
        kw4 = aN((A) => jw4.test(A) && !Sw4.test(A) && !_w4.test(A), "isDnsCompatibleBucketName"),
        yw4 = aN((A) => {
            let [Q, B, G, , , Z] = A.split(":"), I = Q === "arn" && A.split(":").length >= 6, Y = Boolean(I && B && G && Z);
            if (I && !Y) throw Error(`Invalid ARN: ${A} was an invalid ARN.`);
            return Y
        }, "isArnBucketName"),
        xw4 = aN((A, Q, B) => {
            let G = aN(async () => {
                let Z = B[A] ?? B[Q];
                if (typeof Z === "function") return Z();
                return Z
            }, "configProvider");
            if (A === "credentialScope" || Q === "CredentialScope") return async () => {
                let Z = typeof B.credentials === "function" ? await B.credentials() : B.credentials;
                return Z?.credentialScope ?? Z?.CredentialScope
            };
            if (A === "accountId" || Q === "AccountId") return async () => {
                let Z = typeof B.credentials === "function" ? await B.credentials() : B.credentials;
                return Z?.accountId ?? Z?.AccountId
            };
            if (A === "endpoint" || Q === "endpoint") return async () => {
                let Z = await G();
                if (Z && typeof Z === "object") {
                    if ("url" in Z) return Z.url.href;
                    if ("hostname" in Z) {
                        let {
                            protocol: I,
                            hostname: Y,
                            port: J,
                            path: W
                        } = Z;
                        return `${I}//${Y}${J?":"+J:""}${W}`
                    }
                }
                return Z
            };
            return G
        }, "createConfigValueProvider"),
        vw4 = VU1(),
        LQQ = zJ(),
        KU1 = aN((A) => {
            if (typeof A === "object") {
                if ("url" in A) return (0, LQQ.parseUrl)(A.url);
                return A
            }
            return (0, LQQ.parseUrl)(A)
        }, "toEndpointV1"),
        OQQ = aN(async (A, Q, B, G) => {
            if (!B.endpoint) {
                let Y;
                if (B.serviceConfiguredEndpoint) Y = await B.serviceConfiguredEndpoint();
                else Y = await (0, vw4.getEndpointFromConfig)(B.serviceId);
                if (Y) B.endpoint = () => Promise.resolve(KU1(Y))
            }
            let Z = await RQQ(A, Q, B);
            if (typeof B.endpointProvider !== "function") throw Error("config.endpointProvider is not set.");
            return B.endpointProvider(Z, G)
        }, "getEndpointFromInstructions"),
        RQQ = aN(async (A, Q, B) => {
            let G = {},
                Z = Q?.getEndpointParameterInstructions?.() || {};
            for (let [I, Y] of Object.entries(Z)) switch (Y.type) {
                case "staticContextParams":
                    G[I] = Y.value;
                    break;
                case "contextParams":
                    G[I] = A[Y.name];
                    break;
                case "clientContextParams":
                case "builtInParams":
                    G[I] = await xw4(Y.name, I, B)();
                    break;
                case "operationContextParams":
                    G[I] = Y.get(A);
                    break;
                default:
                    throw Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(Y))
            }
            if (Object.keys(Z).length === 0) Object.assign(G, B);
            if (String(B.serviceId).toLowerCase() === "s3") await Pw4(G);
            return G
        }, "resolveParams"),
        bw4 = nB(),
        SfA = K7(),
        TQQ = aN(({
            config: A,
            instructions: Q
        }) => {
            return (B, G) => async (Z) => {
                if (A.endpoint)(0, bw4.setFeature)(G, "ENDPOINT_OVERRIDE", "N");
                let I = await OQQ(Z.input, {
                    getEndpointParameterInstructions() {
                        return Q
                    }
                }, {
                    ...A
                }, G);
                G.endpointV2 = I, G.authSchemes = I.properties?.authSchemes;
                let Y = G.authSchemes?.[0];
                if (Y) {
                    G.signing_region = Y.signingRegion, G.signing_service = Y.signingName;
                    let W = (0, SfA.getSmithyContext)(G)?.selectedHttpAuthScheme?.httpAuthOption;
                    if (W) W.signingProperties = Object.assign(W.signingProperties || {}, {
                        signing_region: Y.signingRegion,
                        signingRegion: Y.signingRegion,
                        signing_service: Y.signingName,
                        signingName: Y.signingName,
                        signingRegionSet: Y.signingRegionSet
                    }, Y.properties)
                }
                return B({
                    ...Z
                })
            }
        }, "endpointMiddleware"),
        fw4 = sG(),
        PQQ = {
            step: "serialize",
            tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
            name: "endpointV2Middleware",
            override: !0,
            relation: "before",
            toMiddleware: fw4.serializerMiddlewareOption.name
        },
        hw4 = aN((A, Q) => ({
            applyToStack: (B) => {
                B.addRelativeTo(TQQ({
                    config: A,
                    instructions: Q
                }), PQQ)
            }
        }), "getEndpointPlugin"),
        gw4 = VU1(),
        uw4 = aN((A) => {
            let Q = A.tls ?? !0,
                {
                    endpoint: B,
                    useDualstackEndpoint: G,
                    useFipsEndpoint: Z
                } = A,
                I = B != null ? async () => KU1(await (0, SfA.normalizeProvider)(B)()): void 0, J = Object.assign(A, {
                    endpoint: I,
                    tls: Q,
                    isCustomEndpoint: !!B,
                    useDualstackEndpoint: (0, SfA.normalizeProvider)(G ?? !1),
                    useFipsEndpoint: (0, SfA.normalizeProvider)(Z ?? !1)
                }), W = void 0;
            return J.serviceConfiguredEndpoint = async () => {
                if (A.serviceId && !W) W = (0, gw4.getEndpointFromConfig)(A.serviceId);
                return W
            }, J
        }, "resolveEndpointConfig"),
        mw4 = aN((A) => {
            let {
                endpoint: Q
            } = A;
            if (Q === void 0) A.endpoint = async () => {
                throw Error("@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.")
            };
            return A
        }, "resolveEndpointRequiredConfig")
});
var DU1 = U((uW7, hQQ) => {
    var {
        defineProperty: kfA,
        getOwnPropertyDescriptor: dw4,
        getOwnPropertyNames: cw4
    } = Object, pw4 = Object.prototype.hasOwnProperty, yfA = (A, Q) => kfA(A, "name", {
        value: Q,
        configurable: !0
    }), lw4 = (A, Q) => {
        for (var B in Q) kfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, iw4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of cw4(Q))
                if (!pw4.call(A, Z) && Z !== B) kfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = dw4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, nw4 = (A) => iw4(kfA({}, "__esModule", {
        value: !0
    }), A), SQQ = {};
    lw4(SQQ, {
        AlgorithmId: () => xQQ,
        EndpointURLScheme: () => yQQ,
        FieldPosition: () => vQQ,
        HttpApiKeyAuthLocation: () => kQQ,
        HttpAuthLocation: () => _QQ,
        IniSectionType: () => bQQ,
        RequestHandlerProtocol: () => fQQ,
        SMITHY_CONTEXT_KEY: () => tw4,
        getDefaultClientConfiguration: () => rw4,
        resolveDefaultRuntimeConfig: () => ow4
    });
    hQQ.exports = nw4(SQQ);
    var _QQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(_QQ || {}),
        kQQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(kQQ || {}),
        yQQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(yQQ || {}),
        xQQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(xQQ || {}),
        aw4 = yfA((A) => {
            let Q = [];
            if (A.sha256 !== void 0) Q.push({
                algorithmId: () => "sha256",
                checksumConstructor: () => A.sha256
            });
            if (A.md5 != null) Q.push({
                algorithmId: () => "md5",
                checksumConstructor: () => A.md5
            });
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        sw4 = yfA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        rw4 = yfA((A) => {
            return aw4(A)
        }, "getDefaultClientConfiguration"),
        ow4 = yfA((A) => {
            return sw4(A)
        }, "resolveDefaultRuntimeConfig"),
        vQQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(vQQ || {}),
        tw4 = "__smithy_context",
        bQQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(bQQ || {}),
        fQQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(fQQ || {})
});
var pQQ = U((mW7, cQQ) => {
    var {
        defineProperty: xfA,
        getOwnPropertyDescriptor: ew4,
        getOwnPropertyNames: Aq4
    } = Object, Qq4 = Object.prototype.hasOwnProperty, om = (A, Q) => xfA(A, "name", {
        value: Q,
        configurable: !0
    }), Bq4 = (A, Q) => {
        for (var B in Q) xfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Gq4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Aq4(Q))
                if (!Qq4.call(A, Z) && Z !== B) xfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ew4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Zq4 = (A) => Gq4(xfA({}, "__esModule", {
        value: !0
    }), A), gQQ = {};
    Bq4(gQQ, {
        Field: () => Jq4,
        Fields: () => Wq4,
        HttpRequest: () => Xq4,
        HttpResponse: () => Fq4,
        IHttpRequest: () => uQQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => Iq4,
        isValidHostname: () => dQQ,
        resolveHttpHandlerRuntimeConfig: () => Yq4
    });
    cQQ.exports = Zq4(gQQ);
    var Iq4 = om((A) => {
            return {
                setHttpHandler(Q) {
                    A.httpHandler = Q
                },
                httpHandler() {
                    return A.httpHandler
                },
                updateHttpClientConfig(Q, B) {
                    A.httpHandler?.updateHttpClientConfig(Q, B)
                },
                httpHandlerConfigs() {
                    return A.httpHandler.httpHandlerConfigs()
                }
            }
        }, "getHttpHandlerExtensionConfiguration"),
        Yq4 = om((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        uQQ = DU1(),
        Jq4 = class {
            static {
                om(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = uQQ.FieldPosition.HEADER,
                values: B = []
            }) {
                this.name = A, this.kind = Q, this.values = B
            }
            add(A) {
                this.values.push(A)
            }
            set(A) {
                this.values = A
            }
            remove(A) {
                this.values = this.values.filter((Q) => Q !== A)
            }
            toString() {
                return this.values.map((A) => A.includes(",") || A.includes(" ") ? `"${A}"` : A).join(", ")
            }
            get() {
                return this.values
            }
        },
        Wq4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                om(this, "Fields")
            }
            setField(A) {
                this.entries[A.name.toLowerCase()] = A
            }
            getField(A) {
                return this.entries[A.toLowerCase()]
            }
            removeField(A) {
                delete this.entries[A.toLowerCase()]
            }
            getByType(A) {
                return Object.values(this.entries).filter((Q) => Q.kind === A)
            }
        },
        Xq4 = class A {
            static {
                om(this, "HttpRequest")
            }
            constructor(Q) {
                this.method = Q.method || "GET", this.hostname = Q.hostname || "localhost", this.port = Q.port, this.query = Q.query || {}, this.headers = Q.headers || {}, this.body = Q.body, this.protocol = Q.protocol ? Q.protocol.slice(-1) !== ":" ? `${Q.protocol}:` : Q.protocol : "https:", this.path = Q.path ? Q.path.charAt(0) !== "/" ? `/${Q.path}` : Q.path : "/", this.username = Q.username, this.password = Q.password, this.fragment = Q.fragment
            }
            static clone(Q) {
                let B = new A({
                    ...Q,
                    headers: {
                        ...Q.headers
                    }
                });
                if (B.query) B.query = mQQ(B.query);
                return B
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return "method" in B && "protocol" in B && "hostname" in B && "path" in B && typeof B.query === "object" && typeof B.headers === "object"
            }
            clone() {
                return A.clone(this)
            }
        };

    function mQQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    om(mQQ, "cloneQuery");
    var Fq4 = class {
        static {
            om(this, "HttpResponse")
        }
        constructor(A) {
            this.statusCode = A.statusCode, this.reason = A.reason, this.headers = A.headers || {}, this.body = A.body
        }
        static isInstance(A) {
            if (!A) return !1;
            let Q = A;
            return typeof Q.statusCode === "number" && typeof Q.headers === "object"
        }
    };

    function dQQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    om(dQQ, "isValidHostname")
});
var HU1 = U((lQQ) => {
    Object.defineProperty(lQQ, "__esModule", {
        value: !0
    });
    lQQ.default = Dq4;
    var Vq4 = Kq4(UA("crypto"));

    function Kq4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var bfA = new Uint8Array(256),
        vfA = bfA.length;

    function Dq4() {
        if (vfA > bfA.length - 16) Vq4.default.randomFillSync(bfA), vfA = 0;
        return bfA.slice(vfA, vfA += 16)
    }
});
var aQQ = U((iQQ) => {
    Object.defineProperty(iQQ, "__esModule", {
        value: !0
    });
    iQQ.default = void 0;
    var Cq4 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    iQQ.default = Cq4
});
var EDA = U((sQQ) => {
    Object.defineProperty(sQQ, "__esModule", {
        value: !0
    });
    sQQ.default = void 0;
    var Eq4 = zq4(aQQ());

    function zq4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function Uq4(A) {
        return typeof A === "string" && Eq4.default.test(A)
    }
    var $q4 = Uq4;
    sQQ.default = $q4
});
var zDA = U((tQQ) => {
    Object.defineProperty(tQQ, "__esModule", {
        value: !0
    });
    tQQ.default = void 0;
    tQQ.unsafeStringify = oQQ;
    var wq4 = qq4(EDA());

    function qq4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var lK = [];
    for (let A = 0; A < 256; ++A) lK.push((A + 256).toString(16).slice(1));

    function oQQ(A, Q = 0) {
        return lK[A[Q + 0]] + lK[A[Q + 1]] + lK[A[Q + 2]] + lK[A[Q + 3]] + "-" + lK[A[Q + 4]] + lK[A[Q + 5]] + "-" + lK[A[Q + 6]] + lK[A[Q + 7]] + "-" + lK[A[Q + 8]] + lK[A[Q + 9]] + "-" + lK[A[Q + 10]] + lK[A[Q + 11]] + lK[A[Q + 12]] + lK[A[Q + 13]] + lK[A[Q + 14]] + lK[A[Q + 15]]
    }

    function Nq4(A, Q = 0) {
        let B = oQQ(A, Q);
        if (!(0, wq4.default)(B)) throw TypeError("Stringified UUID is invalid");
        return B
    }
    var Lq4 = Nq4;
    tQQ.default = Lq4
});
var GBQ = U((QBQ) => {
    Object.defineProperty(QBQ, "__esModule", {
        value: !0
    });
    QBQ.default = void 0;
    var Oq4 = Tq4(HU1()),
        Rq4 = zDA();

    function Tq4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var ABQ, CU1, EU1 = 0,
        zU1 = 0;

    function Pq4(A, Q, B) {
        let G = Q && B || 0,
            Z = Q || Array(16);
        A = A || {};
        let I = A.node || ABQ,
            Y = A.clockseq !== void 0 ? A.clockseq : CU1;
        if (I == null || Y == null) {
            let K = A.random || (A.rng || Oq4.default)();
            if (I == null) I = ABQ = [K[0] | 1, K[1], K[2], K[3], K[4], K[5]];
            if (Y == null) Y = CU1 = (K[6] << 8 | K[7]) & 16383
        }
        let J = A.msecs !== void 0 ? A.msecs : Date.now(),
            W = A.nsecs !== void 0 ? A.nsecs : zU1 + 1,
            X = J - EU1 + (W - zU1) / 1e4;
        if (X < 0 && A.clockseq === void 0) Y = Y + 1 & 16383;
        if ((X < 0 || J > EU1) && A.nsecs === void 0) W = 0;
        if (W >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        EU1 = J, zU1 = W, CU1 = Y, J += 12219292800000;
        let F = ((J & 268435455) * 1e4 + W) % 4294967296;
        Z[G++] = F >>> 24 & 255, Z[G++] = F >>> 16 & 255, Z[G++] = F >>> 8 & 255, Z[G++] = F & 255;
        let V = J / 4294967296 * 1e4 & 268435455;
        Z[G++] = V >>> 8 & 255, Z[G++] = V & 255, Z[G++] = V >>> 24 & 15 | 16, Z[G++] = V >>> 16 & 255, Z[G++] = Y >>> 8 | 128, Z[G++] = Y & 255;
        for (let K = 0; K < 6; ++K) Z[G + K] = I[K];
        return Q || (0, Rq4.unsafeStringify)(Z)
    }
    var jq4 = Pq4;
    QBQ.default = jq4
});
var UU1 = U((ZBQ) => {
    Object.defineProperty(ZBQ, "__esModule", {
        value: !0
    });
    ZBQ.default = void 0;
    var Sq4 = _q4(EDA());

    function _q4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function kq4(A) {
        if (!(0, Sq4.default)(A)) throw TypeError("Invalid UUID");
        let Q, B = new Uint8Array(16);
        return B[0] = (Q = parseInt(A.slice(0, 8), 16)) >>> 24, B[1] = Q >>> 16 & 255, B[2] = Q >>> 8 & 255, B[3] = Q & 255, B[4] = (Q = parseInt(A.slice(9, 13), 16)) >>> 8, B[5] = Q & 255, B[6] = (Q = parseInt(A.slice(14, 18), 16)) >>> 8, B[7] = Q & 255, B[8] = (Q = parseInt(A.slice(19, 23), 16)) >>> 8, B[9] = Q & 255, B[10] = (Q = parseInt(A.slice(24, 36), 16)) / 1099511627776 & 255, B[11] = Q / 4294967296 & 255, B[12] = Q >>> 24 & 255, B[13] = Q >>> 16 & 255, B[14] = Q >>> 8 & 255, B[15] = Q & 255, B
    }
    var yq4 = kq4;
    ZBQ.default = yq4
});
var $U1 = U((WBQ) => {
    Object.defineProperty(WBQ, "__esModule", {
        value: !0
    });
    WBQ.URL = WBQ.DNS = void 0;
    WBQ.default = hq4;
    var xq4 = zDA(),
        vq4 = bq4(UU1());

    function bq4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function fq4(A) {
        A = unescape(encodeURIComponent(A));
        let Q = [];
        for (let B = 0; B < A.length; ++B) Q.push(A.charCodeAt(B));
        return Q
    }
    var YBQ = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    WBQ.DNS = YBQ;
    var JBQ = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    WBQ.URL = JBQ;

    function hq4(A, Q, B) {
        function G(Z, I, Y, J) {
            var W;
            if (typeof Z === "string") Z = fq4(Z);
            if (typeof I === "string") I = (0, vq4.default)(I);
            if (((W = I) === null || W === void 0 ? void 0 : W.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            let X = new Uint8Array(16 + Z.length);
            if (X.set(I), X.set(Z, I.length), X = B(X), X[6] = X[6] & 15 | Q, X[8] = X[8] & 63 | 128, Y) {
                J = J || 0;
                for (let F = 0; F < 16; ++F) Y[J + F] = X[F];
                return Y
            }
            return (0, xq4.unsafeStringify)(X)
        }
        try {
            G.name = A
        } catch (Z) {}
        return G.DNS = YBQ, G.URL = JBQ, G
    }
});
var KBQ = U((FBQ) => {
    Object.defineProperty(FBQ, "__esModule", {
        value: !0
    });
    FBQ.default = void 0;
    var mq4 = dq4(UA("crypto"));

    function dq4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function cq4(A) {
        if (Array.isArray(A)) A = Buffer.from(A);
        else if (typeof A === "string") A = Buffer.from(A, "utf8");
        return mq4.default.createHash("md5").update(A).digest()
    }
    var pq4 = cq4;
    FBQ.default = pq4
});
var EBQ = U((HBQ) => {
    Object.defineProperty(HBQ, "__esModule", {
        value: !0
    });
    HBQ.default = void 0;
    var lq4 = DBQ($U1()),
        iq4 = DBQ(KBQ());

    function DBQ(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var nq4 = (0, lq4.default)("v3", 48, iq4.default),
        aq4 = nq4;
    HBQ.default = aq4
});
var $BQ = U((zBQ) => {
    Object.defineProperty(zBQ, "__esModule", {
        value: !0
    });
    zBQ.default = void 0;
    var sq4 = rq4(UA("crypto"));

    function rq4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var oq4 = {
        randomUUID: sq4.default.randomUUID
    };
    zBQ.default = oq4
});
var MBQ = U((NBQ) => {
    Object.defineProperty(NBQ, "__esModule", {
        value: !0
    });
    NBQ.default = void 0;
    var wBQ = qBQ($BQ()),
        tq4 = qBQ(HU1()),
        eq4 = zDA();

    function qBQ(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function AN4(A, Q, B) {
        if (wBQ.default.randomUUID && !Q && !A) return wBQ.default.randomUUID();
        A = A || {};
        let G = A.random || (A.rng || tq4.default)();
        if (G[6] = G[6] & 15 | 64, G[8] = G[8] & 63 | 128, Q) {
            B = B || 0;
            for (let Z = 0; Z < 16; ++Z) Q[B + Z] = G[Z];
            return Q
        }
        return (0, eq4.unsafeStringify)(G)
    }
    var QN4 = AN4;
    NBQ.default = QN4
});
var TBQ = U((OBQ) => {
    Object.defineProperty(OBQ, "__esModule", {
        value: !0
    });
    OBQ.default = void 0;
    var BN4 = GN4(UA("crypto"));

    function GN4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function ZN4(A) {
        if (Array.isArray(A)) A = Buffer.from(A);
        else if (typeof A === "string") A = Buffer.from(A, "utf8");
        return BN4.default.createHash("sha1").update(A).digest()
    }
    var IN4 = ZN4;
    OBQ.default = IN4
});
var _BQ = U((jBQ) => {
    Object.defineProperty(jBQ, "__esModule", {
        value: !0
    });
    jBQ.default = void 0;
    var YN4 = PBQ($U1()),
        JN4 = PBQ(TBQ());

    function PBQ(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var WN4 = (0, YN4.default)("v5", 80, JN4.default),
        XN4 = WN4;
    jBQ.default = XN4
});
var xBQ = U((kBQ) => {
    Object.defineProperty(kBQ, "__esModule", {
        value: !0
    });
    kBQ.default = void 0;
    var FN4 = "00000000-0000-0000-0000-000000000000";
    kBQ.default = FN4
});
var fBQ = U((vBQ) => {
    Object.defineProperty(vBQ, "__esModule", {
        value: !0
    });
    vBQ.default = void 0;
    var VN4 = KN4(EDA());

    function KN4(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

    function DN4(A) {
        if (!(0, VN4.default)(A)) throw TypeError("Invalid UUID");
        return parseInt(A.slice(14, 15), 16)
    }
    var HN4 = DN4;
    vBQ.default = HN4
});
var UDA = U((SR) => {
    Object.defineProperty(SR, "__esModule", {
        value: !0
    });
    Object.defineProperty(SR, "NIL", {
        enumerable: !0,
        get: function() {
            return $N4.default
        }
    });
    Object.defineProperty(SR, "parse", {
        enumerable: !0,
        get: function() {
            return LN4.default
        }
    });
    Object.defineProperty(SR, "stringify", {
        enumerable: !0,
        get: function() {
            return NN4.default
        }
    });
    Object.defineProperty(SR, "v1", {
        enumerable: !0,
        get: function() {
            return CN4.default
        }
    });
    Object.defineProperty(SR, "v3", {
        enumerable: !0,
        get: function() {
            return EN4.default
        }
    });
    Object.defineProperty(SR, "v4", {
        enumerable: !0,
        get: function() {
            return zN4.default
        }
    });
    Object.defineProperty(SR, "v5", {
        enumerable: !0,
        get: function() {
            return UN4.default
        }
    });
    Object.defineProperty(SR, "validate", {
        enumerable: !0,
        get: function() {
            return qN4.default
        }
    });
    Object.defineProperty(SR, "version", {
        enumerable: !0,
        get: function() {
            return wN4.default
        }
    });
    var CN4 = Dv(GBQ()),
        EN4 = Dv(EBQ()),
        zN4 = Dv(MBQ()),
        UN4 = Dv(_BQ()),
        $N4 = Dv(xBQ()),
        wN4 = Dv(fBQ()),
        qN4 = Dv(EDA()),
        NN4 = Dv(zDA()),
        LN4 = Dv(UU1());

    function Dv(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
});
var qU1 = U((JX7, mBQ) => {
    var {
        defineProperty: ffA,
        getOwnPropertyDescriptor: MN4,
        getOwnPropertyNames: ON4
    } = Object, RN4 = Object.prototype.hasOwnProperty, $r = (A, Q) => ffA(A, "name", {
        value: Q,
        configurable: !0
    }), TN4 = (A, Q) => {
        for (var B in Q) ffA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, PN4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of ON4(Q))
                if (!RN4.call(A, Z) && Z !== B) ffA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = MN4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, jN4 = (A) => PN4(ffA({}, "__esModule", {
        value: !0
    }), A), hBQ = {};
    TN4(hBQ, {
        isBrowserNetworkError: () => uBQ,
        isClockSkewCorrectedError: () => gBQ,
        isClockSkewError: () => fN4,
        isRetryableByTrait: () => bN4,
        isServerError: () => gN4,
        isThrottlingError: () => hN4,
        isTransientError: () => wU1
    });
    mBQ.exports = jN4(hBQ);
    var SN4 = ["AuthFailure", "InvalidSignatureException", "RequestExpired", "RequestInTheFuture", "RequestTimeTooSkewed", "SignatureDoesNotMatch"],
        _N4 = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"],
        kN4 = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
        yN4 = [500, 502, 503, 504],
        xN4 = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
        vN4 = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"],
        bN4 = $r((A) => A.$retryable !== void 0, "isRetryableByTrait"),
        fN4 = $r((A) => SN4.includes(A.name), "isClockSkewError"),
        gBQ = $r((A) => A.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError"),
        uBQ = $r((A) => {
            let Q = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]);
            if (!(A && A instanceof TypeError)) return !1;
            return Q.has(A.message)
        }, "isBrowserNetworkError"),
        hN4 = $r((A) => A.$metadata?.httpStatusCode === 429 || _N4.includes(A.name) || A.$retryable?.throttling == !0, "isThrottlingError"),
        wU1 = $r((A, Q = 0) => gBQ(A) || kN4.includes(A.name) || xN4.includes(A?.code || "") || vN4.includes(A?.code || "") || yN4.includes(A.$metadata?.httpStatusCode || 0) || uBQ(A) || A.cause !== void 0 && Q <= 10 && wU1(A.cause, Q + 1), "isTransientError"),
        gN4 = $r((A) => {
            if (A.$metadata?.httpStatusCode !== void 0) {
                let Q = A.$metadata.httpStatusCode;
                if (500 <= Q && Q <= 599 && !wU1(A)) return !0;
                return !1
            }
            return !1
        }, "isServerError")
});
var FW = U((WX7, rBQ) => {
    var {
        defineProperty: hfA,
        getOwnPropertyDescriptor: uN4,
        getOwnPropertyNames: mN4
    } = Object, dN4 = Object.prototype.hasOwnProperty, _R = (A, Q) => hfA(A, "name", {
        value: Q,
        configurable: !0
    }), cN4 = (A, Q) => {
        for (var B in Q) hfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pN4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of mN4(Q))
                if (!dN4.call(A, Z) && Z !== B) hfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = uN4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lN4 = (A) => pN4(hfA({}, "__esModule", {
        value: !0
    }), A), cBQ = {};
    cN4(cBQ, {
        AdaptiveRetryStrategy: () => oN4,
        ConfiguredRetryStrategy: () => tN4,
        DEFAULT_MAX_ATTEMPTS: () => NU1,
        DEFAULT_RETRY_DELAY_BASE: () => $DA,
        DEFAULT_RETRY_MODE: () => iN4,
        DefaultRateLimiter: () => lBQ,
        INITIAL_RETRY_TOKENS: () => LU1,
        INVOCATION_ID_HEADER: () => aN4,
        MAXIMUM_RETRY_DELAY: () => MU1,
        NO_RETRY_INCREMENT: () => sBQ,
        REQUEST_HEADER: () => sN4,
        RETRY_COST: () => nBQ,
        RETRY_MODES: () => pBQ,
        StandardRetryStrategy: () => OU1,
        THROTTLING_RETRY_DELAY_BASE: () => iBQ,
        TIMEOUT_RETRY_COST: () => aBQ
    });
    rBQ.exports = lN4(cBQ);
    var pBQ = ((A) => {
            return A.STANDARD = "standard", A.ADAPTIVE = "adaptive", A
        })(pBQ || {}),
        NU1 = 3,
        iN4 = "standard",
        nN4 = qU1(),
        lBQ = class A {
            constructor(Q) {
                this.currentCapacity = 0, this.enabled = !1, this.lastMaxRate = 0, this.measuredTxRate = 0, this.requestCount = 0, this.lastTimestamp = 0, this.timeWindow = 0, this.beta = Q?.beta ?? 0.7, this.minCapacity = Q?.minCapacity ?? 1, this.minFillRate = Q?.minFillRate ?? 0.5, this.scaleConstant = Q?.scaleConstant ?? 0.4, this.smooth = Q?.smooth ?? 0.8;
                let B = this.getCurrentTimeInSeconds();
                this.lastThrottleTime = B, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity
            }
            static {
                _R(this, "DefaultRateLimiter")
            }
            static {
                this.setTimeoutFn = setTimeout
            }
            getCurrentTimeInSeconds() {
                return Date.now() / 1000
            }
            async getSendToken() {
                return this.acquireTokenBucket(1)
            }
            async acquireTokenBucket(Q) {
                if (!this.enabled) return;
                if (this.refillTokenBucket(), Q > this.currentCapacity) {
                    let B = (Q - this.currentCapacity) / this.fillRate * 1000;
                    await new Promise((G) => A.setTimeoutFn(G, B))
                }
                this.currentCapacity = this.currentCapacity - Q
            }
            refillTokenBucket() {
                let Q = this.getCurrentTimeInSeconds();
                if (!this.lastTimestamp) {
                    this.lastTimestamp = Q;
                    return
                }
                let B = (Q - this.lastTimestamp) * this.fillRate;
                this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + B), this.lastTimestamp = Q
            }
            updateClientSendingRate(Q) {
                let B;
                if (this.updateMeasuredRate(), (0, nN4.isThrottlingError)(Q)) {
                    let Z = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
                    this.lastMaxRate = Z, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), B = this.cubicThrottle(Z), this.enableTokenBucket()
                } else this.calculateTimeWindow(), B = this.cubicSuccess(this.getCurrentTimeInSeconds());
                let G = Math.min(B, 2 * this.measuredTxRate);
                this.updateTokenBucketRate(G)
            }
            calculateTimeWindow() {
                this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 0.3333333333333333))
            }
            cubicThrottle(Q) {
                return this.getPrecise(Q * this.beta)
            }
            cubicSuccess(Q) {
                return this.getPrecise(this.scaleConstant * Math.pow(Q - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate)
            }
            enableTokenBucket() {
                this.enabled = !0
            }
            updateTokenBucketRate(Q) {
                this.refillTokenBucket(), this.fillRate = Math.max(Q, this.minFillRate), this.maxCapacity = Math.max(Q, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)
            }
            updateMeasuredRate() {
                let Q = this.getCurrentTimeInSeconds(),
                    B = Math.floor(Q * 2) / 2;
                if (this.requestCount++, B > this.lastTxRateBucket) {
                    let G = this.requestCount / (B - this.lastTxRateBucket);
                    this.measuredTxRate = this.getPrecise(G * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = B
                }
            }
            getPrecise(Q) {
                return parseFloat(Q.toFixed(8))
            }
        },
        $DA = 100,
        MU1 = 20000,
        iBQ = 500,
        LU1 = 500,
        nBQ = 5,
        aBQ = 10,
        sBQ = 1,
        aN4 = "amz-sdk-invocation-id",
        sN4 = "amz-sdk-request",
        rN4 = _R(() => {
            let A = $DA;
            return {
                computeNextBackoffDelay: _R((G) => {
                    return Math.floor(Math.min(MU1, Math.random() * 2 ** G * A))
                }, "computeNextBackoffDelay"),
                setDelayBase: _R((G) => {
                    A = G
                }, "setDelayBase")
            }
        }, "getDefaultRetryBackoffStrategy"),
        dBQ = _R(({
            retryDelay: A,
            retryCount: Q,
            retryCost: B
        }) => {
            return {
                getRetryCount: _R(() => Q, "getRetryCount"),
                getRetryDelay: _R(() => Math.min(MU1, A), "getRetryDelay"),
                getRetryCost: _R(() => B, "getRetryCost")
            }
        }, "createDefaultRetryToken"),
        OU1 = class {
            constructor(A) {
                this.maxAttempts = A, this.mode = "standard", this.capacity = LU1, this.retryBackoffStrategy = rN4(), this.maxAttemptsProvider = typeof A === "function" ? A : async () => A
            }
            static {
                _R(this, "StandardRetryStrategy")
            }
            async acquireInitialRetryToken(A) {
                return dBQ({
                    retryDelay: $DA,
                    retryCount: 0
                })
            }
            async refreshRetryTokenForRetry(A, Q) {
                let B = await this.getMaxAttempts();
                if (this.shouldRetry(A, Q, B)) {
                    let G = Q.errorType;
                    this.retryBackoffStrategy.setDelayBase(G === "THROTTLING" ? iBQ : $DA);
                    let Z = this.retryBackoffStrategy.computeNextBackoffDelay(A.getRetryCount()),
                        I = Q.retryAfterHint ? Math.max(Q.retryAfterHint.getTime() - Date.now() || 0, Z) : Z,
                        Y = this.getCapacityCost(G);
                    return this.capacity -= Y, dBQ({
                        retryDelay: I,
                        retryCount: A.getRetryCount() + 1,
                        retryCost: Y
                    })
                }
                throw Error("No retry token available")
            }
            recordSuccess(A) {
                this.capacity = Math.max(LU1, this.capacity + (A.getRetryCost() ?? sBQ))
            }
            getCapacity() {
                return this.capacity
            }
            async getMaxAttempts() {
                try {
                    return await this.maxAttemptsProvider()
                } catch (A) {
                    return console.warn(`Max attempts provider could not resolve. Using default of ${NU1}`), NU1
                }
            }