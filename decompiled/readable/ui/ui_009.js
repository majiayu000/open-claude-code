/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: ui_009.js
 * 处理时间: 2025-12-09T03:41:38.993Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 9/53
 * Lines: 64300 - 65797 (1498 lines)
 * Original file: cli.js
 */

        DH4 = nB(),
        XAQ = P2(),
        HH4 = WW((A) => {
            return A.sigv4aSigningRegionSet = (0, DH4.normalizeProvider)(A.sigv4aSigningRegionSet), A
        }, "resolveAwsSdkSigV4AConfig"),
        CH4 = {
            environmentVariableSelector(A) {
                if (A.AWS_SIGV4A_SIGNING_REGION_SET) return A.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((Q) => Q.trim());
                throw new XAQ.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
                    tryNextLink: !0
                })
            },
            configFileSelector(A) {
                if (A.sigv4a_signing_region_set) return (A.sigv4a_signing_region_set ?? "").split(",").map((Q) => Q.trim());
                throw new XAQ.ProviderError("sigv4a_signing_region_set not set in profile.", {
                    tryNextLink: !0
                })
            },
            default: void 0
        },
        EH4 = lN(),
        Dr = nB(),
        FAQ = GAQ(),
        DAQ = WW((A) => {
            let Q = A.credentials,
                B = !!A.credentials,
                G = void 0;
            Object.defineProperty(A, "credentials", {
                set(X) {
                    if (X && X !== Q && X !== G) B = !0;
                    Q = X;
                    let F = HAQ(A, {
                            credentials: Q,
                            credentialDefaultProvider: A.credentialDefaultProvider
                        }),
                        V = CAQ(A, F);
                    if (B && !V.attributed) G = WW(async (K) => V(K).then((D) => (0, EH4.setCredentialFeature)(D, "CREDENTIALS_CODE", "e")), "resolvedCredentials"), G.memoized = V.memoized, G.configBound = V.configBound, G.attributed = !0;
                    else G = V
                },
                get() {
                    return G
                },
                enumerable: !0,
                configurable: !0
            }), A.credentials = Q;
            let {
                signingEscapePath: Z = !0,
                systemClockOffset: I = A.systemClockOffset || 0,
                sha256: Y
            } = A, J;
            if (A.signer) J = (0, Dr.normalizeProvider)(A.signer);
            else if (A.regionInfoProvider) J = WW(() => (0, Dr.normalizeProvider)(A.region)().then(async (X) => [await A.regionInfoProvider(X, {
                useFipsEndpoint: await A.useFipsEndpoint(),
                useDualstackEndpoint: await A.useDualstackEndpoint()
            }) || {}, X]).then(([X, F]) => {
                let {
                    signingRegion: V,
                    signingService: K
                } = X;
                A.signingRegion = A.signingRegion || V || F, A.signingName = A.signingName || K || A.serviceId;
                let D = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || FAQ.SignatureV4)(D)
            }), "signer");
            else J = WW(async (X) => {
                X = Object.assign({}, {
                    name: "sigv4",
                    signingName: A.signingName || A.defaultSigningName,
                    signingRegion: await (0, Dr.normalizeProvider)(A.region)(),
                    properties: {}
                }, X);
                let {
                    signingRegion: F,
                    signingName: V
                } = X;
                A.signingRegion = A.signingRegion || F, A.signingName = A.signingName || V || A.serviceId;
                let K = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || FAQ.SignatureV4)(K)
            }, "signer");
            return Object.assign(A, {
                systemClockOffset: I,
                signingEscapePath: Z,
                signer: J
            })
        }, "resolveAwsSdkSigV4Config"),
        zH4 = DAQ;

    function HAQ(A, {
        credentials: Q,
        credentialDefaultProvider: B
    }) {
        let G;
        if (Q)
            if (!Q?.memoized) G = (0, Dr.memoizeIdentityProvider)(Q, Dr.isIdentityExpired, Dr.doesIdentityRequireRefresh);
            else G = Q;
        else if (B) G = (0, Dr.normalizeProvider)(B(Object.assign({}, A, {
            parentClientConfig: A
        })));
        else G = WW(async () => {
            throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.")
        }, "credentialsProvider");
        return G.memoized = !0, G
    }
    WW(HAQ, "normalizeCredentialProvider");

    function CAQ(A, Q) {
        if (Q.configBound) return Q;
        let B = WW(async (G) => Q({
            ...G,
            callerClientConfig: A
        }), "fn");
        return B.memoized = Q.memoized, B.configBound = !0, B
    }
    WW(CAQ, "bindCallerConfig")
});
var pK = moduleWrapper((SJ7, $AQ) => {
    var {
        defineProperty: ZfA,
        getOwnPropertyDescriptor: UH4,
        getOwnPropertyNames: $H4
    } = Object, wH4 = Object.prototype.hasOwnProperty, qH4 = (A, Q) => ZfA(A, "name", {
        value: Q,
        configurable: !0
    }), NH4 = (A, Q) => {
        for (var B in Q) ZfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, LH4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of $H4(Q))
                if (!wH4.call(A, Z) && Z !== B) ZfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = UH4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, MH4 = (A) => LH4(ZfA({}, "__esModule", {
        value: !0
    }), A), UAQ = {};
    NH4(UAQ, {
        calculateBodyLength: () => OH4
    });
    $AQ.exports = MH4(UAQ);
    var zAQ = typeof TextEncoder == "function" ? new TextEncoder : null,
        OH4 = qH4((A) => {
            if (typeof A === "string") {
                if (zAQ) return zAQ.encode(A).byteLength;
                let Q = A.length;
                for (let B = Q - 1; B >= 0; B--) {
                    let G = A.charCodeAt(B);
                    if (G > 127 && G <= 2047) Q++;
                    else if (G > 2047 && G <= 65535) Q += 2;
                    if (G >= 56320 && G <= 57343) B--
                }
                return Q
            } else if (typeof A.byteLength === "number") return A.byteLength;
            else if (typeof A.size === "number") return A.size;
            throw Error(`Body Length computation failed for TextComponent{A}`)
        }, "calculateBodyLength")
});
var NAQ = moduleWrapper((wAQ) => {
    Object.defineProperty(wAQ, "__esModule", {
        value: !0
    });
    wAQ.fromBase64 = void 0;
    var RH4 = kI(),
        TH4 = /^[A-Za-z0-9+/]*={0,2}TextComponent/,
        PH4 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!TH4.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, RH4.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    wAQ.fromBase64 = PH4
});
var OAQ = moduleWrapper((LAQ) => {
    Object.defineProperty(LAQ, "__esModule", {
        value: !0
    });
    LAQ.toBase64 = void 0;
    var jH4 = kI(),
        SH4 = L2(),
        _H4 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, SH4.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, jH4.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    LAQ.toBase64 = _H4
});
var lm = moduleWrapper((yJ7, IfA) => {
    var {
        defineProperty: RAQ,
        getOwnPropertyDescriptor: kH4,
        getOwnPropertyNames: yH4
    } = Object, xH4 = Object.prototype.hasOwnProperty, Sz1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of yH4(Q))
                if (!xH4.call(A, Z) && Z !== B) RAQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = kH4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, TAQ = (A, Q, B) => (Sz1(A, Q, "default"), B && Sz1(B, Q, "default")), vH4 = (A) => Sz1(RAQ({}, "__esModule", {
        value: !0
    }), A), _z1 = {};
    IfA.exports = vH4(_z1);
    TAQ(_z1, NAQ(), IfA.exports);
    TAQ(_z1, OAQ(), IfA.exports)
});
var PR = moduleWrapper((xJ7, _AQ) => {
    var {
        defineProperty: YfA,
        getOwnPropertyDescriptor: bH4,
        getOwnPropertyNames: fH4
    } = Object, hH4 = Object.prototype.hasOwnProperty, iN = (A, Q) => YfA(A, "name", {
        value: Q,
        configurable: !0
    }), gH4 = (A, Q) => {
        for (var B in Q) YfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, uH4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of fH4(Q))
                if (!hH4.call(A, Z) && Z !== B) YfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = bH4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, mH4 = (A) => uH4(YfA({}, "__esModule", {
        value: !0
    }), A), SAQ = {};
    gH4(SAQ, {
        constructStack: () => kz1
    });
    _AQ.exports = mH4(SAQ);
    var Hr = iN((A, Q) => {
            let B = [];
            if (A) B.push(A);
            if (Q)
                for (let G of Q) B.push(G);
            return B
        }, "getAllAliases"),
        im = iN((A, Q) => {
            return `TextComponent{A||"anonymous"}TextComponent{Q&&Q.length>0?` (a.k.a. TextComponent{Q.join(",")})`:""}`
        }, "getMiddlewareNameWithAliases"),
        kz1 = iN(() => {
            let A = [],
                Q = [],
                B = !1,
                G = new Set,
                Z = iN((V) => V.sort((K, D) => PAQ[D.step] - PAQ[K.step] || jAQ[D.priority || "normal"] - jAQ[K.priority || "normal"]), "sort"),
                I = iN((V) => {
                    let K = !1,
                        D = iN((H) => {
                            let C = Hr(H.name, H.aliases);
                            if (C.includes(V)) {
                                K = !0;
                                for (let E of C) G.delete(E);
                                return !1
                            }
                            return !0
                        }, "filterCb");
                    return A = A.filter(D), Q = Q.filter(D), K
                }, "removeByName"),
                Y = iN((V) => {
                    let K = !1,
                        D = iN((H) => {
                            if (H.middleware === V) {
                                K = !0;
                                for (let C of Hr(H.name, H.aliases)) G.delete(C);
                                return !1
                            }
                            return !0
                        }, "filterCb");
                    return A = A.filter(D), Q = Q.filter(D), K
                }, "removeByReference"),
                J = iN((V) => {
                    return A.forEach((K) => {
                        V.add(K.middleware, {
                            ...K
                        })
                    }), Q.forEach((K) => {
                        V.addRelativeTo(K.middleware, {
                            ...K
                        })
                    }), V.identifyOnResolve?.(F.identifyOnResolve()), V
                }, "cloneTo"),
                W = iN((V) => {
                    let K = [];
                    return V.before.forEach((D) => {
                        if (D.before.length === 0 && D.after.length === 0) K.push(D);
                        else K.push(...W(D))
                    }), K.push(V), V.after.reverse().forEach((D) => {
                        if (D.before.length === 0 && D.after.length === 0) K.push(D);
                        else K.push(...W(D))
                    }), K
                }, "expandRelativeMiddlewareList"),
                X = iN((V = !1) => {
                    let K = [],
                        D = [],
                        H = {};
                    return A.forEach((E) => {
                        let z = {
                            ...E,
                            before: [],
                            after: []
                        };
                        for (let w of Hr(z.name, z.aliases)) H[w] = z;
                        K.push(z)
                    }), Q.forEach((E) => {
                        let z = {
                            ...E,
                            before: [],
                            after: []
                        };
                        for (let w of Hr(z.name, z.aliases)) H[w] = z;
                        D.push(z)
                    }), D.forEach((E) => {
                        if (E.toMiddleware) {
                            let z = H[E.toMiddleware];
                            if (z === void 0) {
                                if (V) return;
                                throw Error(`TextComponent{E.toMiddleware} is not found when adding TextComponent{im(E.name,E.aliases)} middleware TextComponent{E.relation} TextComponent{E.toMiddleware}`)
                            }
                            if (E.relation === "after") z.after.push(E);
                            if (E.relation === "before") z.before.push(E)
                        }
                    }), Z(K).map(W).reduce((E, z) => {
                        return E.push(...z), E
                    }, [])
                }, "getMiddlewareList"),
                F = {
                    add: (V, K = {}) => {
                        let {
                            name: D,
                            override: H,
                            aliases: C
                        } = K, E = {
                            step: "initialize",
                            priority: "normal",
                            middleware: V,
                            ...K
                        }, z = Hr(D, C);
                        if (z.length > 0) {
                            if (z.some((w) => G.has(w))) {
                                if (!H) throw Error(`Duplicate middleware name 'TextComponent{im(D,C)}'`);
                                for (let w of z) {
                                    let N = A.findIndex((R) => R.name === w || R.aliases?.some((P) => P === w));
                                    if (N === -1) continue;
                                    let q = A[N];
                                    if (q.step !== E.step || E.priority !== q.priority) throw Error(`"TextComponent{im(q.name,q.aliases)}" middleware with TextComponent{q.priority} priority in TextComponent{q.step} step cannot be overridden by "TextComponent{im(D,C)}" middleware with TextComponent{E.priority} priority in TextComponent{E.step} step.`);
                                    A.splice(N, 1)
                                }
                            }
                            for (let w of z) G.add(w)
                        }
                        A.push(E)
                    },
                    addRelativeTo: (V, K) => {
                        let {
                            name: D,
                            override: H,
                            aliases: C
                        } = K, E = {
                            middleware: V,
                            ...K
                        }, z = Hr(D, C);
                        if (z.length > 0) {
                            if (z.some((w) => G.has(w))) {
                                if (!H) throw Error(`Duplicate middleware name 'TextComponent{im(D,C)}'`);
                                for (let w of z) {
                                    let N = Q.findIndex((R) => R.name === w || R.aliases?.some((P) => P === w));
                                    if (N === -1) continue;
                                    let q = Q[N];
                                    if (q.toMiddleware !== E.toMiddleware || q.relation !== E.relation) throw Error(`"TextComponent{im(q.name,q.aliases)}" middleware TextComponent{q.relation} "TextComponent{q.toMiddleware}" middleware cannot be overridden by "TextComponent{im(D,C)}" middleware TextComponent{E.relation} "TextComponent{E.toMiddleware}" middleware.`);
                                    Q.splice(N, 1)
                                }
                            }
                            for (let w of z) G.add(w)
                        }
                        Q.push(E)
                    },
                    clone: () => J(kz1()),
                    use: (V) => {
                        V.applyToStack(F)
                    },
                    remove: (V) => {
                        if (typeof V === "string") return I(V);
                        else return Y(V)
                    },
                    removeByTag: (V) => {
                        let K = !1,
                            D = iN((H) => {
                                let {
                                    tags: C,
                                    name: E,
                                    aliases: z
                                } = H;
                                if (C && C.includes(V)) {
                                    let w = Hr(E, z);
                                    for (let N of w) G.delete(N);
                                    return K = !0, !1
                                }
                                return !0
                            }, "filterCb");
                        return A = A.filter(D), Q = Q.filter(D), K
                    },
                    concat: (V) => {
                        let K = J(kz1());
                        return K.use(V), K.identifyOnResolve(B || K.identifyOnResolve() || (V.identifyOnResolve?.() ?? !1)), K
                    },
                    applyToStack: J,
                    identify: () => {
                        return X(!0).map((V) => {
                            let K = V.step ?? V.relation + " " + V.toMiddleware;
                            return im(V.name, V.aliases) + " - " + K
                        })
                    },
                    identifyOnResolve(V) {
                        if (typeof V === "boolean") B = V;
                        return B
                    },
                    resolve: (V, K) => {
                        for (let D of X().map((H) => H.middleware).reverse()) V = D(V, K);
                        if (B) console.log(F.identify());
                        return V
                    }
                };
            return F
        }, "constructStack"),
        PAQ = {
            initialize: 5,
            serialize: 4,
            build: 3,
            finalizeRequest: 2,
            deserialize: 1
        },
        jAQ = {
            high: 3,
            normal: 2,
            low: 1
        }
});
var W6 = moduleWrapper((vJ7, gz1) => {
    var {
        defineProperty: JfA,
        getOwnPropertyDescriptor: dH4,
        getOwnPropertyNames: cH4
    } = Object, pH4 = Object.prototype.hasOwnProperty, N3 = (A, Q) => JfA(A, "name", {
        value: Q,
        configurable: !0
    }), lH4 = (A, Q) => {
        for (var B in Q) JfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, xz1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of cH4(Q))
                if (!pH4.call(A, Z) && Z !== B) JfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = dH4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, iH4 = (A, Q, B) => (xz1(A, Q, "default"), B && xz1(B, Q, "default")), nH4 = (A) => xz1(JfA({}, "__esModule", {
        value: !0
    }), A), fz1 = {};
    lH4(fz1, {
        Client: () => aH4,
        Command: () => xAQ,
        NoOpLogger: () => VC4,
        SENSITIVE_STRING: () => rH4,
        ServiceException: () => tH4,
        _json: () => bz1,
        collectBody: () => yz1.collectBody,
        convertMap: () => KC4,
        createAggregatedClient: () => oH4,
        decorateServiceException: () => vAQ,
        emitWarningIfUnsupportedVersion: () => BC4,
        extendedEncodeURIComponent: () => yz1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => XC4,
        getDefaultClientConfiguration: () => JC4,
        getDefaultExtensionConfiguration: () => fAQ,
        getValueFromTextNode: () => hAQ,
        isSerializableHeaderValue: () => FC4,
        loadConfigsForDefaultMode: () => QC4,
        map: () => hz1,
        resolveDefaultRuntimeConfig: () => WC4,
        resolvedPath: () => yz1.resolvedPath,
        serializeDateTime: () => UC4,
        serializeFloat: () => zC4,
        take: () => DC4,
        throwDefaultError: () => bAQ,
        withBaseException: () => eH4
    });
    gz1.exports = nH4(fz1);
    var yAQ = PR(),
        aH4 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, yAQ.constructStack)()
            }
            static {
                N3(this, "Client")
            }
            send(A, Q, B) {
                let G = typeof Q !== "function" ? Q : void 0,
                    Z = typeof Q === "function" ? Q : B,
                    I = G === void 0 && this.config.cacheMiddleware === !0,
                    Y;
                if (I) {
                    if (!this.handlers) this.handlers = new WeakMap;
                    let J = this.handlers;
                    if (J.has(A.constructor)) Y = J.get(A.constructor);
                    else Y = A.resolveMiddleware(this.middlewareStack, this.config, G), J.set(A.constructor, Y)
                } else delete this.handlers, Y = A.resolveMiddleware(this.middlewareStack, this.config, G);
                if (Z) Y(A).then((J) => Z(null, J.output), (J) => Z(J)).catch(() => {});
                else return Y(A).then((J) => J.output)
            }
            destroy() {
                this.config?.requestHandler?.destroy?.(), delete this.handlers
            }
        },
        yz1 = C5(),
        vz1 = CE1(),
        xAQ = class {
            constructor() {
                this.middlewareStack = (0, yAQ.constructStack)()
            }
            static {
                N3(this, "Command")
            }
            static classBuilder() {
                return new sH4
            }
            resolveMiddlewareWithContext(A, Q, B, {
                middlewareFn: G,
                clientName: Z,
                commandName: I,
                inputFilterSensitiveLog: Y,
                outputFilterSensitiveLog: J,
                smithyContext: W,
                additionalContext: X,
                CommandCtor: F
            }) {
                for (let C of G.bind(this)(F, A, Q, B)) this.middlewareStack.use(C);
                let V = A.concat(this.middlewareStack),
                    {
                        logger: K
                    } = Q,
                    D = {
                        logger: K,
                        clientName: Z,
                        commandName: I,
                        inputFilterSensitiveLog: Y,
                        outputFilterSensitiveLog: J,
                        [vz1.SMITHY_CONTEXT_KEY]: {
                            commandInstance: this,
                            ...W
                        },
                        ...X
                    },
                    {
                        requestHandler: H
                    } = Q;
                return V.resolve((C) => H.handle(C.request, B || {}), D)
            }
        },
        sH4 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                N3(this, "ClassBuilder")
            }
            init(A) {
                this._init = A
            }
            ep(A) {
                return this._ep = A, this
            }
            m(A) {
                return this._middlewareFn = A, this
            }
            s(A, Q, B = {}) {
                return this._smithyContext = {
                    service: A,
                    operation: Q,
                    ...B
                }, this
            }
            c(A = {}) {
                return this._additionalContext = A, this
            }
            n(A, Q) {
                return this._clientName = A, this._commandName = Q, this
            }
            f(A = (B) => B, Q = (B) => B) {
                return this._inputFilterSensitiveLog = A, this._outputFilterSensitiveLog = Q, this
            }
            ser(A) {
                return this._serializer = A, this
            }
            de(A) {
                return this._deserializer = A, this
            }
            sc(A) {
                return this._operationSchema = A, this._smithyContext.operationSchema = A, this
            }
            build() {
                let A = this,
                    Q;
                return Q = class extends xAQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this), this.schema = A._operationSchema
                    }
                    static {
                        N3(this, "CommandRef")
                    }
                    static getEndpointParameterInstructions() {
                        return A._ep
                    }
                    resolveMiddleware(B, G, Z) {
                        return this.resolveMiddlewareWithContext(B, G, Z, {
                            CommandCtor: Q,
                            middlewareFn: A._middlewareFn,
                            clientName: A._clientName,
                            commandName: A._commandName,
                            inputFilterSensitiveLog: A._inputFilterSensitiveLog,
                            outputFilterSensitiveLog: A._outputFilterSensitiveLog,
                            smithyContext: A._smithyContext,
                            additionalContext: A._additionalContext
                        })
                    }
                }
            }
        },
        rH4 = "***SensitiveInformation***",
        oH4 = N3((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = N3(async function(Y, J, W) {
                        let X = new G(Y);
                        if (typeof J === "function") this.send(X, J);
                        else if (typeof W === "function") {
                            if (typeof J !== "object") throw Error(`Expected http options but got TextComponent{typeof J}`);
                            this.send(X, J || {}, W)
                        } else return this.send(X, J)
                    }, "methodImpl"),
                    I = (B[0].toLowerCase() + B.slice(1)).replace(/Command$/, "");
                Q.prototype[I] = Z
            }
        }, "createAggregatedClient"),
        tH4 = class A extends Error {
            static {
                N3(this, "ServiceException")
            }
            constructor(Q) {
                super(Q.message);
                Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = Q.name, this.$fault = Q.$fault, this.$metadata = Q.$metadata
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return A.prototype.isPrototypeOf(B) || Boolean(B.$fault) && Boolean(B.$metadata) && (B.$fault === "client" || B.$fault === "server")
            }
            static[Symbol.hasInstance](Q) {
                if (!Q) return !1;
                let B = Q;
                if (this === A) return A.isInstance(Q);
                if (A.isInstance(Q)) {
                    if (B.name && this.name) return this.prototype.isPrototypeOf(Q) || B.name === this.name;
                    return this.prototype.isPrototypeOf(Q)
                }
                return !1
            }
        },
        vAQ = N3((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        bAQ = N3(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = AC4(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw vAQ(Y, Q)
        }, "throwDefaultError"),
        eH4 = N3((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                bAQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        AC4 = N3((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        QC4 = N3((A) => {
            switch (A) {
                case "standard":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "in-region":
                    return {
                        retryMode: "standard", connectionTimeout: 1100
                    };
                case "cross-region":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "mobile":
                    return {
                        retryMode: "standard", connectionTimeout: 30000
                    };
                default:
                    return {}
            }
        }, "loadConfigsForDefaultMode"),
        kAQ = !1,
        BC4 = N3((A) => {
            if (A && !kAQ && parseInt(A.substring(1, A.indexOf("."))) < 16) kAQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        GC4 = N3((A) => {
            let Q = [];
            for (let B in vz1.AlgorithmId) {
                let G = vz1.AlgorithmId[B];
                if (A[G] === void 0) continue;
                Q.push({
                    algorithmId: () => G,
                    checksumConstructor: () => A[G]
                })
            }
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        ZC4 = N3((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        IC4 = N3((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        YC4 = N3((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        fAQ = N3((A) => {
            return Object.assign(GC4(A), IC4(A))
        }, "getDefaultExtensionConfiguration"),
        JC4 = fAQ,
        WC4 = N3((A) => {
            return Object.assign(ZC4(A), YC4(A))
        }, "resolveDefaultRuntimeConfig"),
        XC4 = N3((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        hAQ = N3((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = hAQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        FC4 = N3((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        VC4 = class {
            static {
                N3(this, "NoOpLogger")
            }
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
        };

    function hz1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, HC4(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            gAQ(G, null, I, Y)
        }
        return G
    }
    N3(hz1, "map");
    var KC4 = N3((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        DC4 = N3((A, Q) => {
            let B = {};
            for (let G in Q) gAQ(B, A, Q, G);
            return B
        }, "take"),
        HC4 = N3((A, Q, B) => {
            return hz1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        gAQ = N3((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = CC4, W = EC4, X = G] = Y;
                if (typeof J === "function" && J(Q[X]) || typeof J !== "function" && !!J) A[G] = W(Q[X]);
                return
            }
            let [Z, I] = B[G];
            if (typeof I === "function") {
                let Y, J = Z === void 0 && (Y = I()) != null,
                    W = typeof Z === "function" && !!Z(void 0) || typeof Z !== "function" && !!Z;
                if (J) A[G] = Y;
                else if (W) A[G] = I()
            } else {
                let Y = Z === void 0 && I != null,
                    J = typeof Z === "function" && !!Z(I) || typeof Z !== "function" && !!Z;
                if (Y || J) A[G] = I
            }
        }, "applyInstruction"),
        CC4 = N3((A) => A != null, "nonNullish"),
        EC4 = N3((A) => A, "pass"),
        zC4 = N3((A) => {
            if (A !== A) return "NaN";
            switch (A) {
                case 1 / 0:
                    return "Infinity";
                case -1 / 0:
                    return "-Infinity";
                default:
                    return A
            }
        }, "serializeFloat"),
        UC4 = N3((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        bz1 = N3((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(bz1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = bz1(A[B])
                }
                return Q
            }
            return A
        }, "_json");
    iH4(fz1, c6(), gz1.exports)
});
var WfA = moduleWrapper((LC4) => {
    var $C4 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
        uAQ = "[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][" + $C4 + "]*",
        wC4 = new RegExp("^" + uAQ + "TextComponent"),
        qC4 = function(A, Q) {
            let B = [],
                G = Q.exec(A);
            while (G) {
                let Z = [];
                Z.startIndex = Q.lastIndex - G[0].length;
                let I = G.length;
                for (let Y = 0; Y < I; Y++) Z.push(G[Y]);
                B.push(Z), G = Q.exec(A)
            }
            return B
        },
        NC4 = function(A) {
            let Q = wC4.exec(A);
            return !(Q === null || typeof Q > "u")
        };
    LC4.isExist = function(A) {
        return typeof A < "u"
    };
    LC4.isEmptyObject = function(A) {
        return Object.keys(A).length === 0
    };
    LC4.merge = function(A, Q, B) {
        if (Q) {
            let G = Object.keys(Q),
                Z = G.length;
            for (let I = 0; I < Z; I++)
                if (B === "strict") A[G[I]] = [Q[G[I]]];
                else A[G[I]] = Q[G[I]]
        }
    };
    LC4.getValue = function(A) {
        if (LC4.isExist(A)) return A;
        else return ""
    };
    LC4.isName = NC4;
    LC4.getAllMatches = qC4;
    LC4.nameRegexp = uAQ
});
var mz1 = moduleWrapper((gC4) => {
    var uz1 = WfA(),
        SC4 = {
            allowBooleanAttributes: !1,
            unpairedTags: []
        };
    gC4.validate = function(A, Q) {
        Q = Object.assign({}, SC4, Q);
        let B = [],
            G = !1,
            Z = !1;
        if (A[0] === "\uFEFF") A = A.substr(1);
        for (let I = 0; I < A.length; I++)
            if (A[I] === "<" && A[I + 1] === "?") {
                if (I += 2, I = cAQ(A, I), I.err) return I
            } else if (A[I] === "<") {
            let Y = I;
            if (I++, A[I] === "!") {
                I = pAQ(A, I);
                continue
            } else {
                let J = !1;
                if (A[I] === "/") J = !0, I++;
                let W = "";
                for (; I < A.length && A[I] !== ">" && A[I] !== " " && A[I] !== "\t" && A[I] !== `
` && A[I] !== "\r"; I++) W += A[I];
                if (W = W.trim(), W[W.length - 1] === "/") W = W.substring(0, W.length - 1), I--;
                if (!hC4(W)) {
                    let V;
                    if (W.trim().length === 0) V = "Invalid space after '<'.";
                    else V = "Tag '" + W + "' is an invalid name.";
                    return XW("InvalidTag", V, pC(A, I))
                }
                let X = yC4(A, I);
                if (X === !1) return XW("InvalidAttr", "Attributes for '" + W + "' have open quote.", pC(A, I));
                let F = X.value;
                if (I = X.index, F[F.length - 1] === "/") {
                    let V = I - F.length;
                    F = F.substring(0, F.length - 1);
                    let K = lAQ(F, Q);
                    if (K === !0) G = !0;
                    else return XW(K.err.code, K.err.msg, pC(A, V + K.err.line))
                } else if (J)
                    if (!X.tagClosed) return XW("InvalidTag", "Closing tag '" + W + "' doesn't have proper closing.", pC(A, I));
                    else if (F.trim().length > 0) return XW("InvalidTag", "Closing tag '" + W + "' can't have attributes or invalid starting.", pC(A, Y));
                else if (B.length === 0) return XW("InvalidTag", "Closing tag '" + W + "' has not been opened.", pC(A, Y));
                else {
                    let V = B.pop();
                    if (W !== V.tagName) {
                        let K = pC(A, V.tagStartPos);
                        return XW("InvalidTag", "Expected closing tag '" + V.tagName + "' (opened in line " + K.line + ", col " + K.col + ") instead of closing tag '" + W + "'.", pC(A, Y))
                    }
                    if (B.length == 0) Z = !0
                } else {
                    let V = lAQ(F, Q);
                    if (V !== !0) return XW(V.err.code, V.err.msg, pC(A, I - F.length + V.err.line));
                    if (Z === !0) return XW("InvalidXml", "Multiple possible root nodes found.", pC(A, I));
                    else if (Q.unpairedTags.indexOf(W) !== -1);
                    else B.push({
                        tagName: W,
                        tagStartPos: Y
                    });
                    G = !0
                }
                for (I++; I < A.length; I++)
                    if (A[I] === "<")
                        if (A[I + 1] === "!") {
                            I++, I = pAQ(A, I);
                            continue
                        } else if (A[I + 1] === "?") {
                    if (I = cAQ(A, ++I), I.err) return I
                } else break;
                else if (A[I] === "&") {
                    let V = bC4(A, I);
                    if (V == -1) return XW("InvalidChar", "char '&' is not expected.", pC(A, I));
                    I = V
                } else if (Z === !0 && !dAQ(A[I])) return XW("InvalidXml", "Extra text at the end", pC(A, I));
                if (A[I] === "<") I--
            }
        } else {
            if (dAQ(A[I])) continue;
            return XW("InvalidChar", "char '" + A[I] + "' is not expected.", pC(A, I))
        }
        if (!G) return XW("InvalidXml", "Start tag expected.", 1);
        else if (B.length == 1) return XW("InvalidTag", "Unclosed tag '" + B[0].tagName + "'.", pC(A, B[0].tagStartPos));
        else if (B.length > 0) return XW("InvalidXml", "Invalid '" + JSON.stringify(B.map((I) => I.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", {
            line: 1,
            col: 1
        });
        return !0
    };

    function dAQ(A) {
        return A === " " || A === "\t" || A === `
` || A === "\r"
    }

    function cAQ(A, Q) {
        let B = Q;
        for (; Q < A.length; Q++)
            if (A[Q] == "?" || A[Q] == " ") {
                let G = A.substr(B, Q - B);
                if (Q > 5 && G === "xml") return XW("InvalidXml", "XML declaration allowed only at the start of the document.", pC(A, Q));
                else if (A[Q] == "?" && A[Q + 1] == ">") {
                    Q++;
                    break
                } else continue
            } return Q
    }

    function pAQ(A, Q) {
        if (A.length > Q + 5 && A[Q + 1] === "-" && A[Q + 2] === "-") {
            for (Q += 3; Q < A.length; Q++)
                if (A[Q] === "-" && A[Q + 1] === "-" && A[Q + 2] === ">") {
                    Q += 2;
                    break
                }
        } else if (A.length > Q + 8 && A[Q + 1] === "D" && A[Q + 2] === "O" && A[Q + 3] === "C" && A[Q + 4] === "T" && A[Q + 5] === "Y" && A[Q + 6] === "P" && A[Q + 7] === "E") {
            let B = 1;
            for (Q += 8; Q < A.length; Q++)
                if (A[Q] === "<") B++;
                else if (A[Q] === ">") {
                if (B--, B === 0) break
            }
        } else if (A.length > Q + 9 && A[Q + 1] === "[" && A[Q + 2] === "C" && A[Q + 3] === "D" && A[Q + 4] === "A" && A[Q + 5] === "T" && A[Q + 6] === "A" && A[Q + 7] === "[") {
            for (Q += 8; Q < A.length; Q++)
                if (A[Q] === "]" && A[Q + 1] === "]" && A[Q + 2] === ">") {
                    Q += 2;
                    break
                }
        }
        return Q
    }
    var _C4 = '"',
        kC4 = "'";

    function yC4(A, Q) {
        let B = "",
            G = "",
            Z = !1;
        for (; Q < A.length; Q++) {
            if (A[Q] === _C4 || A[Q] === kC4)
                if (G === "") G = A[Q];
                else if (G !== A[Q]);
            else G = "";
            else if (A[Q] === ">") {
                if (G === "") {
                    Z = !0;
                    break
                }
            }
            B += A[Q]
        }
        if (G !== "") return !1;
        return {
            value: B,
            index: Q,
            tagClosed: Z
        }
    }
    var xC4 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");

    function lAQ(A, Q) {
        let B = uz1.getAllMatches(A, xC4),
            G = {};
        for (let Z = 0; Z < B.length; Z++) {
            if (B[Z][1].length === 0) return XW("InvalidAttr", "Attribute '" + B[Z][2] + "' has no space in starting.", YDA(B[Z]));
            else if (B[Z][3] !== void 0 && B[Z][4] === void 0) return XW("InvalidAttr", "Attribute '" + B[Z][2] + "' is without value.", YDA(B[Z]));
            else if (B[Z][3] === void 0 && !Q.allowBooleanAttributes) return XW("InvalidAttr", "boolean attribute '" + B[Z][2] + "' is not allowed.", YDA(B[Z]));
            let I = B[Z][2];
            if (!fC4(I)) return XW("InvalidAttr", "Attribute '" + I + "' is an invalid name.", YDA(B[Z]));
            if (!G.hasOwnProperty(I)) G[I] = 1;
            else return XW("InvalidAttr", "Attribute '" + I + "' is repeated.", YDA(B[Z]))
        }
        return !0
    }

    function vC4(A, Q) {
        let B = /\d/;
        if (A[Q] === "x") Q++, B = /[\da-fA-F]/;
        for (; Q < A.length; Q++) {
            if (A[Q] === ";") return Q;
            if (!A[Q].match(B)) break
        }
        return -1
    }

    function bC4(A, Q) {
        if (Q++, A[Q] === ";") return -1;
        if (A[Q] === "#") return Q++, vC4(A, Q);
        let B = 0;
        for (; Q < A.length; Q++, B++) {
            if (A[Q].match(/\w/) && B < 20) continue;
            if (A[Q] === ";") break;
            return -1
        }
        return Q
    }

    function XW(A, Q, B) {
        return {
            err: {
                code: A,
                msg: Q,
                line: B.line || B,
                col: B.col
            }
        }
    }

    function fC4(A) {
        return uz1.isName(A)
    }

    function hC4(A) {
        return uz1.isName(A)
    }

    function pC(A, Q) {
        let B = A.substring(0, Q).split(/\r?\n/);
        return {
            line: B.length,
            col: B[B.length - 1].length + 1
        }
    }

    function YDA(A) {
        return A.startIndex + A[1].length
    }
});
var nAQ = moduleWrapper((dC4) => {
    var iAQ = {
            preserveOrder: !1,
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            removeNSPrefix: !1,
            allowBooleanAttributes: !1,
            parseTagValue: !0,
            parseAttributeValue: !1,
            trimValues: !0,
            cdataPropName: !1,
            numberParseOptions: {
                hex: !0,
                leadingZeros: !0,
                eNotation: !0
            },
            tagValueProcessor: function(A, Q) {
                return Q
            },
            attributeValueProcessor: function(A, Q) {
                return Q
            },
            stopNodes: [],
            alwaysCreateTextNode: !1,
            isArray: () => !1,
            commentPropName: !1,
            unpairedTags: [],
            processEntities: !0,
            htmlEntities: !1,
            ignoreDeclaration: !1,
            ignorePiTags: !1,
            transformTagName: !1,
            transformAttributeName: !1,
            updateTag: function(A, Q, B) {
                return A
            }
        },
        mC4 = function(A) {
            return Object.assign({}, iAQ, A)
        };
    dC4.buildOptions = mC4;
    dC4.defaultOptions = iAQ
});
var rAQ = moduleWrapper((pJ7, sAQ) => {
    class aAQ {
        constructor(A) {
            this.tagname = A, this.child = [], this[":@"] = {}
        }
        add(A, Q) {
            if (A === "__proto__") A = "#__proto__";
            this.child.push({
                [A]: Q
            })
        }
        addChild(A) {
            if (A.tagname === "__proto__") A.tagname = "#__proto__";
            if (A[":@"] && Object.keys(A[":@"]).length > 0) this.child.push({
                [A.tagname]: A.child,
                [":@"]: A[":@"]
            });
            else this.child.push({
                [A.tagname]: A.child
            })
        }
    }
    sAQ.exports = aAQ
});
var tAQ = moduleWrapper((lJ7, oAQ) => {
    var lC4 = WfA();

    function iC4(A, Q) {
        let B = {};
        if (A[Q + 3] === "O" && A[Q + 4] === "C" && A[Q + 5] === "T" && A[Q + 6] === "Y" && A[Q + 7] === "P" && A[Q + 8] === "E") {
            Q = Q + 9;
            let G = 1,
                Z = !1,
                I = !1,
                Y = "";
            for (; Q < A.length; Q++)
                if (A[Q] === "<" && !I) {
                    if (Z && sC4(A, Q)) {
                        if (Q += 7, [entityName, val, Q] = nC4(A, Q + 1), val.indexOf("&") === -1) B[eC4(entityName)] = {
                            regx: RegExp(`&TextComponent{entityName};`, "g"),
                            val
                        }
                    } else if (Z && rC4(A, Q)) Q += 8;
                    else if (Z && oC4(A, Q)) Q += 8;
                    else if (Z && tC4(A, Q)) Q += 9;
                    else if (aC4) I = !0;
                    else throw Error("Invalid DOCTYPE");
                    G++, Y = ""
                } else if (A[Q] === ">") {
                if (I) {
                    if (A[Q - 1] === "-" && A[Q - 2] === "-") I = !1, G--
                } else G--;
                if (G === 0) break
            } else if (A[Q] === "[") Z = !0;
            else Y += A[Q];
            if (G !== 0) throw Error("Unclosed DOCTYPE")
        } else throw Error("Invalid Tag instead of DOCTYPE");
        return {
            entities: B,
            i: Q
        }
    }

    function nC4(A, Q) {
        let B = "";
        for (; Q < A.length && (A[Q] !== "'" && A[Q] !== '"'); Q++) B += A[Q];
        if (B = B.trim(), B.indexOf(" ") !== -1) throw Error("External entites are not supported");
        let G = A[Q++],
            Z = "";
        for (; Q < A.length && A[Q] !== G; Q++) Z += A[Q];
        return [B, Z, Q]
    }

    function aC4(A, Q) {
        if (A[Q + 1] === "!" && A[Q + 2] === "-" && A[Q + 3] === "-") return !0;
        return !1
    }

    function sC4(A, Q) {
        if (A[Q + 1] === "!" && A[Q + 2] === "E" && A[Q + 3] === "N" && A[Q + 4] === "T" && A[Q + 5] === "I" && A[Q + 6] === "T" && A[Q + 7] === "Y") return !0;
        return !1
    }

    function rC4(A, Q) {
        if (A[Q + 1] === "!" && A[Q + 2] === "E" && A[Q + 3] === "lazyLoader" && A[Q + 4] === "E" && A[Q + 5] === "M" && A[Q + 6] === "E" && A[Q + 7] === "N" && A[Q + 8] === "T") return !0;
        return !1
    }

    function oC4(A, Q) {
        if (A[Q + 1] === "!" && A[Q + 2] === "A" && A[Q + 3] === "T" && A[Q + 4] === "T" && A[Q + 5] === "lazyLoader" && A[Q + 6] === "I" && A[Q + 7] === "S" && A[Q + 8] === "T") return !0;
        return !1
    }

    function tC4(A, Q) {
        if (A[Q + 1] === "!" && A[Q + 2] === "N" && A[Q + 3] === "O" && A[Q + 4] === "T" && A[Q + 5] === "A" && A[Q + 6] === "T" && A[Q + 7] === "I" && A[Q + 8] === "O" && A[Q + 9] === "N") return !0;
        return !1
    }

    function eC4(A) {
        if (lC4.isName(A)) return A;
        else throw Error(`Invalid entity name TextComponent{A}`)
    }
    oAQ.exports = iC4
});
var A1Q = moduleWrapper((iJ7, eAQ) => {
    var AE4 = /^[-+]?0x[a-fA-F0-9]+TextComponent/,
        QE4 = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)TextComponent/;
    if (!Number.parseInt && window.parseInt) Number.parseInt = window.parseInt;
    if (!Number.parseFloat && window.parseFloat) Number.parseFloat = window.parseFloat;
    var BE4 = {
        hex: !0,
        leadingZeros: !0,
        decimalPoint: ".",
        eNotation: !0
    };

    function GE4(A, Q = {}) {
        if (Q = Object.assign({}, BE4, Q), !A || typeof A !== "string") return A;
        let B = A.trim();
        if (Q.skipLike !== void 0 && Q.skipLike.test(B)) return A;
        else if (Q.hex && AE4.test(B)) return Number.parseInt(B, 16);
        else {
            let G = QE4.exec(B);
            if (G) {
                let Z = G[1],
                    I = G[2],
                    Y = ZE4(G[3]),
                    J = G[4] || G[6];
                if (!Q.leadingZeros && I.length > 0 && Z && B[2] !== ".") return A;
                else if (!Q.leadingZeros && I.length > 0 && !Z && B[1] !== ".") return A;
                else {
                    let W = Number(B),
                        X = "" + W;
                    if (X.search(/[eE]/) !== -1)
                        if (Q.eNotation) return W;
                        else return A;
                    else if (J)
                        if (Q.eNotation) return W;
                        else return A;
                    else if (B.indexOf(".") !== -1)
                        if (X === "0" && Y === "") return W;
                        else if (X === Y) return W;
                    else if (Z && X === "-" + Y) return W;
                    else return A;
                    if (I)
                        if (Y === X) return W;
                        else if (Z + Y === X) return W;
                    else return A;
                    if (B === X) return W;
                    else if (B === Z + X) return W;
                    return A
                }
            } else return A
        }
    }

    function ZE4(A) {
        if (A && A.indexOf(".") !== -1) {
            if (A = A.replace(/0+TextComponent/, ""), A === ".") A = "0";
            else if (A[0] === ".") A = "0" + A;
            else if (A[A.length - 1] === ".") A = A.substr(0, A.length - 1);
            return A
        }
        return A
    }
    eAQ.exports = GE4
});
var Z1Q = moduleWrapper((nJ7, G1Q) => {
    var Q1Q = WfA(),
        JDA = rAQ(),
        IE4 = tAQ(),
        YE4 = A1Q();
    class B1Q {
        constructor(A) {
            this.options = A, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
                apos: {
                    regex: /&(apos|#39|#x27);/g,
                    val: "'"
                },
                gt: {
                    regex: /&(gt|#62|#x3E);/g,
                    val: ">"
                },
                lt: {
                    regex: /&(lt|#60|#x3C);/g,
                    val: "<"
                },
                quot: {
                    regex: /&(quot|#34|#x22);/g,
                    val: '"'
                }
            }, this.ampEntity = {
                regex: /&(amp|#38|#x26);/g,
                val: "&"
            }, this.htmlEntities = {
                space: {
                    regex: /&(nbsp|#160);/g,
                    val: " "
                },
                cent: {
                    regex: /&(cent|#162);/g,
                    val: "¢"
                },
                pound: {
                    regex: /&(pound|#163);/g,
                    val: "£"
                },
                yen: {
                    regex: /&(yen|#165);/g,
                    val: "¥"
                },
                euro: {
                    regex: /&(euro|#8364);/g,
                    val: "€"
                },
                copyright: {
                    regex: /&(copy|#169);/g,
                    val: "©"
                },
                reg: {
                    regex: /&(reg|#174);/g,
                    val: "®"
                },
                inr: {
                    regex: /&(inr|#8377);/g,
                    val: "₹"
                },
                num_dec: {
                    regex: /&#([0-9]{1,7});/g,
                    val: (Q, B) => String.fromCharCode(Number.parseInt(B, 10))
                },
                num_hex: {
                    regex: /&#x([0-9a-fA-F]{1,6});/g,
                    val: (Q, B) => String.fromCharCode(Number.parseInt(B, 16))
                }
            }, this.addExternalEntities = JE4, this.parseXml = KE4, this.parseTextData = WE4, this.resolveNameSpace = XE4, this.buildAttributesMap = VE4, this.isItStopNode = EE4, this.replaceEntitiesValue = HE4, this.readStopNodeData = UE4, this.saveTextToParentTag = CE4, this.addChild = DE4
        }
    }

    function JE4(A) {
        let Q = Object.keys(A);
        for (let B = 0; B < Q.length; B++) {
            let G = Q[B];
            this.lastEntities[G] = {
                regex: new RegExp("&" + G + ";", "g"),
                val: A[G]
            }
        }
    }

    function WE4(A, Q, B, G, Z, I, Y) {
        if (A !== void 0) {
            if (this.options.trimValues && !G) A = A.trim();
            if (A.length > 0) {
                if (!Y) A = this.replaceEntitiesValue(A);
                let J = this.options.tagValueProcessor(Q, A, B, Z, I);
                if (J === null || J === void 0) return A;
                else if (typeof J !== typeof A || J !== A) return J;
                else if (this.options.trimValues) return cz1(A, this.options.parseTagValue, this.options.numberParseOptions);
                else if (A.trim() === A) return cz1(A, this.options.parseTagValue, this.options.numberParseOptions);
                else return A
            }
        }
    }
