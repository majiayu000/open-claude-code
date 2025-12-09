/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: git_019.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (13次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (9次) = require(moduleName) - Node.js require
 *   L        (1次) = lazyLoader(fn) - Lazy module loader
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 19/34
 * Lines: 215132 - 216630 (1499 lines)
 * Original file: cli.js
 */

var FbB = U((WbB) => {
    Object.defineProperty(WbB, "__esModule", {
        value: !0
    });
    WbB.toBase64 = void 0;
    var b_6 = UtA(),
        f_6 = JbB(),
        h_6 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, f_6.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, b_6.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    WbB.toBase64 = h_6
});
var Dp1 = U((E2G, wtA) => {
    var {
        defineProperty: VbB,
        getOwnPropertyDescriptor: g_6,
        getOwnPropertyNames: u_6
    } = Object, m_6 = Object.prototype.hasOwnProperty, Vp1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of u_6(Q))
                if (!m_6.call(A, Z) && Z !== B) VbB(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = g_6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, KbB = (A, Q, B) => (Vp1(A, Q, "default"), B && Vp1(B, Q, "default")), d_6 = (A) => Vp1(VbB({}, "__esModule", {
        value: !0
    }), A), Kp1 = {};
    wtA.exports = d_6(Kp1);
    KbB(Kp1, BbB(), wtA.exports);
    KbB(Kp1, FbB(), wtA.exports)
});
var l_ = L(() => {
    Hf();
    Jc1();
    woA();
    Hf();
    c_();
    ZE()
});
var zbB = U((M2G, EbB) => {
    var {
        defineProperty: qtA,
        getOwnPropertyDescriptor: c_6,
        getOwnPropertyNames: p_6
    } = Object, l_6 = Object.prototype.hasOwnProperty, LM = (A, Q) => qtA(A, "name", {
        value: Q,
        configurable: !0
    }), i_6 = (A, Q) => {
        for (var B in Q) qtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, n_6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of p_6(Q))
                if (!l_6.call(A, Z) && Z !== B) qtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = c_6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, a_6 = (A) => n_6(qtA({}, "__esModule", {
        value: !0
    }), A), CbB = {};
    i_6(CbB, {
        constructStack: () => Hp1
    });
    EbB.exports = a_6(CbB);
    var $e = LM((A, Q) => {
            let B = [];
            if (A) B.push(A);
            if (Q)
                for (let G of Q) B.push(G);
            return B
        }, "getAllAliases"),
        cp = LM((A, Q) => {
            return `${A||"anonymous"}${Q&&Q.length>0?` (a.k.a. ${Q.join(",")})`:""}`
        }, "getMiddlewareNameWithAliases"),
        Hp1 = LM(() => {
            let A = [],
                Q = [],
                B = !1,
                G = new Set,
                Z = LM((V) => V.sort((K, D) => DbB[D.step] - DbB[K.step] || HbB[D.priority || "normal"] - HbB[K.priority || "normal"]), "sort"),
                I = LM((V) => {
                    let K = !1,
                        D = LM((H) => {
                            let C = $e(H.name, H.aliases);
                            if (C.includes(V)) {
                                K = !0;
                                for (let E of C) G.delete(E);
                                return !1
                            }
                            return !0
                        }, "filterCb");
                    return A = A.filter(D), Q = Q.filter(D), K
                }, "removeByName"),
                Y = LM((V) => {
                    let K = !1,
                        D = LM((H) => {
                            if (H.middleware === V) {
                                K = !0;
                                for (let C of $e(H.name, H.aliases)) G.delete(C);
                                return !1
                            }
                            return !0
                        }, "filterCb");
                    return A = A.filter(D), Q = Q.filter(D), K
                }, "removeByReference"),
                J = LM((V) => {
                    var K;
                    return A.forEach((D) => {
                        V.add(D.middleware, {
                            ...D
                        })
                    }), Q.forEach((D) => {
                        V.addRelativeTo(D.middleware, {
                            ...D
                        })
                    }), (K = V.identifyOnResolve) == null || K.call(V, F.identifyOnResolve()), V
                }, "cloneTo"),
                W = LM((V) => {
                    let K = [];
                    return V.before.forEach((D) => {
                        if (D.before.length === 0 && D.after.length === 0) K.push(D);
                        else K.push(...W(D))
                    }), K.push(V), V.after.reverse().forEach((D) => {
                        if (D.before.length === 0 && D.after.length === 0) K.push(D);
                        else K.push(...W(D))
                    }), K
                }, "expandRelativeMiddlewareList"),
                X = LM((V = !1) => {
                    let K = [],
                        D = [],
                        H = {};
                    return A.forEach((E) => {
                        let z = {
                            ...E,
                            before: [],
                            after: []
                        };
                        for (let w of $e(z.name, z.aliases)) H[w] = z;
                        K.push(z)
                    }), Q.forEach((E) => {
                        let z = {
                            ...E,
                            before: [],
                            after: []
                        };
                        for (let w of $e(z.name, z.aliases)) H[w] = z;
                        D.push(z)
                    }), D.forEach((E) => {
                        if (E.toMiddleware) {
                            let z = H[E.toMiddleware];
                            if (z === void 0) {
                                if (V) return;
                                throw Error(`${E.toMiddleware} is not found when adding ${cp(E.name,E.aliases)} middleware ${E.relation} ${E.toMiddleware}`)
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
                        }, z = $e(D, C);
                        if (z.length > 0) {
                            if (z.some((w) => G.has(w))) {
                                if (!H) throw Error(`Duplicate middleware name '${cp(D,C)}'`);
                                for (let w of z) {
                                    let N = A.findIndex((R) => {
                                        var P;
                                        return R.name === w || ((P = R.aliases) == null ? void 0 : P.some((y) => y === w))
                                    });
                                    if (N === -1) continue;
                                    let q = A[N];
                                    if (q.step !== E.step || E.priority !== q.priority) throw Error(`"${cp(q.name,q.aliases)}" middleware with ${q.priority} priority in ${q.step} step cannot be overridden by "${cp(D,C)}" middleware with ${E.priority} priority in ${E.step} step.`);
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
                        }, z = $e(D, C);
                        if (z.length > 0) {
                            if (z.some((w) => G.has(w))) {
                                if (!H) throw Error(`Duplicate middleware name '${cp(D,C)}'`);
                                for (let w of z) {
                                    let N = Q.findIndex((R) => {
                                        var P;
                                        return R.name === w || ((P = R.aliases) == null ? void 0 : P.some((y) => y === w))
                                    });
                                    if (N === -1) continue;
                                    let q = Q[N];
                                    if (q.toMiddleware !== E.toMiddleware || q.relation !== E.relation) throw Error(`"${cp(q.name,q.aliases)}" middleware ${q.relation} "${q.toMiddleware}" middleware cannot be overridden by "${cp(D,C)}" middleware ${E.relation} "${E.toMiddleware}" middleware.`);
                                    Q.splice(N, 1)
                                }
                            }
                            for (let w of z) G.add(w)
                        }
                        Q.push(E)
                    },
                    clone: () => J(Hp1()),
                    use: (V) => {
                        V.applyToStack(F)
                    },
                    remove: (V) => {
                        if (typeof V === "string") return I(V);
                        else return Y(V)
                    },
                    removeByTag: (V) => {
                        let K = !1,
                            D = LM((H) => {
                                let {
                                    tags: C,
                                    name: E,
                                    aliases: z
                                } = H;
                                if (C && C.includes(V)) {
                                    let w = $e(E, z);
                                    for (let N of w) G.delete(N);
                                    return K = !0, !1
                                }
                                return !0
                            }, "filterCb");
                        return A = A.filter(D), Q = Q.filter(D), K
                    },
                    concat: (V) => {
                        var K;
                        let D = J(Hp1());
                        return D.use(V), D.identifyOnResolve(B || D.identifyOnResolve() || (((K = V.identifyOnResolve) == null ? void 0 : K.call(V)) ?? !1)), D
                    },
                    applyToStack: J,
                    identify: () => {
                        return X(!0).map((V) => {
                            let K = V.step ?? V.relation + " " + V.toMiddleware;
                            return cp(V.name, V.aliases) + " - " + K
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
        DbB = {
            initialize: 5,
            serialize: 4,
            build: 3,
            finalizeRequest: 2,
            deserialize: 1
        },
        HbB = {
            high: 3,
            normal: 2,
            low: 1
        }
});
var wbB = U((O2G, $bB) => {
    var {
        defineProperty: NtA,
        getOwnPropertyDescriptor: s_6,
        getOwnPropertyNames: r_6
    } = Object, o_6 = Object.prototype.hasOwnProperty, t_6 = (A, Q) => NtA(A, "name", {
        value: Q,
        configurable: !0
    }), e_6 = (A, Q) => {
        for (var B in Q) NtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Ak6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of r_6(Q))
                if (!o_6.call(A, Z) && Z !== B) NtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = s_6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Qk6 = (A) => Ak6(NtA({}, "__esModule", {
        value: !0
    }), A), UbB = {};
    e_6(UbB, {
        isArrayBuffer: () => Bk6
    });
    $bB.exports = Qk6(UbB);
    var Bk6 = t_6((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var Ep1 = U((R2G, LbB) => {
    var {
        defineProperty: LtA,
        getOwnPropertyDescriptor: Gk6,
        getOwnPropertyNames: Zk6
    } = Object, Ik6 = Object.prototype.hasOwnProperty, qbB = (A, Q) => LtA(A, "name", {
        value: Q,
        configurable: !0
    }), Yk6 = (A, Q) => {
        for (var B in Q) LtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Jk6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Zk6(Q))
                if (!Ik6.call(A, Z) && Z !== B) LtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Gk6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Wk6 = (A) => Jk6(LtA({}, "__esModule", {
        value: !0
    }), A), NbB = {};
    Yk6(NbB, {
        fromArrayBuffer: () => Fk6,
        fromString: () => Vk6
    });
    LbB.exports = Wk6(NbB);
    var Xk6 = wbB(),
        Cp1 = UA("buffer"),
        Fk6 = qbB((A, Q = 0, B = A.byteLength - Q) => {
            if (!(0, Xk6.isArrayBuffer)(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
            return Cp1.Buffer.from(A, Q, B)
        }, "fromArrayBuffer"),
        Vk6 = qbB((A, Q) => {
            if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
            return Q ? Cp1.Buffer.from(A, Q) : Cp1.Buffer.from(A)
        }, "fromString")
});
var PbB = U((T2G, TbB) => {
    var {
        defineProperty: MtA,
        getOwnPropertyDescriptor: Kk6,
        getOwnPropertyNames: Dk6
    } = Object, Hk6 = Object.prototype.hasOwnProperty, zp1 = (A, Q) => MtA(A, "name", {
        value: Q,
        configurable: !0
    }), Ck6 = (A, Q) => {
        for (var B in Q) MtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Ek6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Dk6(Q))
                if (!Hk6.call(A, Z) && Z !== B) MtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Kk6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, zk6 = (A) => Ek6(MtA({}, "__esModule", {
        value: !0
    }), A), MbB = {};
    Ck6(MbB, {
        fromUtf8: () => RbB,
        toUint8Array: () => Uk6,
        toUtf8: () => $k6
    });
    TbB.exports = zk6(MbB);
    var ObB = Ep1(),
        RbB = zp1((A) => {
            let Q = (0, ObB.fromString)(A, "utf8");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength / Uint8Array.BYTES_PER_ELEMENT)
        }, "fromUtf8"),
        Uk6 = zp1((A) => {
            if (typeof A === "string") return RbB(A);
            if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
            return new Uint8Array(A)
        }, "toUint8Array"),
        $k6 = zp1((A) => {
            if (typeof A === "string") return A;
            if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
            return (0, ObB.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8")
        }, "toUtf8")
});
var _bB = U((jbB) => {
    Object.defineProperty(jbB, "__esModule", {
        value: !0
    });
    jbB.getAwsChunkedEncodingStream = void 0;
    var wk6 = UA("stream"),
        qk6 = (A, Q) => {
            let {
                base64Encoder: B,
                bodyLengthChecker: G,
                checksumAlgorithmFn: Z,
                checksumLocationName: I,
                streamHasher: Y
            } = Q, J = B !== void 0 && Z !== void 0 && I !== void 0 && Y !== void 0, W = J ? Y(Z, A) : void 0, X = new wk6.Readable({
                read: () => {}
            });
            return A.on("data", (F) => {
                let V = G(F) || 0;
                X.push(`${V.toString(16)}\r
`), X.push(F), X.push(`\r
`)
            }), A.on("end", async () => {
                if (X.push(`0\r
`), J) {
                    let F = B(await W);
                    X.push(`${I}:${F}\r
`), X.push(`\r
`)
                }
                X.push(null)
            }), X
        };
    jbB.getAwsChunkedEncodingStream = qk6
});
var vbB = U((j2G, xbB) => {
    var {
        defineProperty: OtA,
        getOwnPropertyDescriptor: Nk6,
        getOwnPropertyNames: Lk6
    } = Object, Mk6 = Object.prototype.hasOwnProperty, Up1 = (A, Q) => OtA(A, "name", {
        value: Q,
        configurable: !0
    }), Ok6 = (A, Q) => {
        for (var B in Q) OtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Rk6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Lk6(Q))
                if (!Mk6.call(A, Z) && Z !== B) OtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Nk6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Tk6 = (A) => Rk6(OtA({}, "__esModule", {
        value: !0
    }), A), kbB = {};
    Ok6(kbB, {
        escapeUri: () => ybB,
        escapeUriPath: () => jk6
    });
    xbB.exports = Tk6(kbB);
    var ybB = Up1((A) => encodeURIComponent(A).replace(/[!'()*]/g, Pk6), "escapeUri"),
        Pk6 = Up1((A) => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        jk6 = Up1((A) => A.split("/").map(ybB).join("/"), "escapeUriPath")
});
var gbB = U((S2G, hbB) => {
    var {
        defineProperty: RtA,
        getOwnPropertyDescriptor: Sk6,
        getOwnPropertyNames: _k6
    } = Object, kk6 = Object.prototype.hasOwnProperty, yk6 = (A, Q) => RtA(A, "name", {
        value: Q,
        configurable: !0
    }), xk6 = (A, Q) => {
        for (var B in Q) RtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, vk6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of _k6(Q))
                if (!kk6.call(A, Z) && Z !== B) RtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Sk6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, bk6 = (A) => vk6(RtA({}, "__esModule", {
        value: !0
    }), A), bbB = {};
    xk6(bbB, {
        buildQueryString: () => fbB
    });
    hbB.exports = bk6(bbB);
    var $p1 = vbB();

    function fbB(A) {
        let Q = [];
        for (let B of Object.keys(A).sort()) {
            let G = A[B];
            if (B = (0, $p1.escapeUri)(B), Array.isArray(G))
                for (let Z = 0, I = G.length; Z < I; Z++) Q.push(`${B}=${(0,$p1.escapeUri)(G[Z])}`);
            else {
                let Z = B;
                if (G || typeof G === "string") Z += `=${(0,$p1.escapeUri)(G)}`;
                Q.push(Z)
            }
        }
        return Q.join("&")
    }
    yk6(fbB, "buildQueryString")
});
var QfB = U((_2G, AfB) => {
    var {
        create: fk6,
        defineProperty: TwA,
        getOwnPropertyDescriptor: hk6,
        getOwnPropertyNames: gk6,
        getPrototypeOf: uk6
    } = Object, mk6 = Object.prototype.hasOwnProperty, mV = (A, Q) => TwA(A, "name", {
        value: Q,
        configurable: !0
    }), dk6 = (A, Q) => {
        for (var B in Q) TwA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, dbB = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of gk6(Q))
                if (!mk6.call(A, Z) && Z !== B) TwA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = hk6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ck6 = (A, Q, B) => (B = A != null ? fk6(uk6(A)) : {}, dbB(Q || !A || !A.__esModule ? TwA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), pk6 = (A) => dbB(TwA({}, "__esModule", {
        value: !0
    }), A), cbB = {};
    dk6(cbB, {
        DEFAULT_REQUEST_TIMEOUT: () => sk6,
        NodeHttp2Handler: () => Ay6,
        NodeHttpHandler: () => rk6,
        streamCollector: () => By6
    });
    AfB.exports = pk6(cbB);
    var pbB = cc1(),
        lbB = gbB(),
        wp1 = UA("http"),
        qp1 = UA("https"),
        lk6 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
        ibB = mV((A) => {
            let Q = {};
            for (let B of Object.keys(A)) {
                let G = A[B];
                Q[B] = Array.isArray(G) ? G.join(",") : G
            }
            return Q
        }, "getTransformedHeaders"),
        ik6 = mV((A, Q, B = 0) => {
            if (!B) return;
            let G = setTimeout(() => {
                A.destroy(), Q(Object.assign(Error(`Socket timed out without establishing a connection within ${B} ms`), {
                    name: "TimeoutError"
                }))
            }, B);
            A.on("socket", (Z) => {
                if (Z.connecting) Z.on("connect", () => {
                    clearTimeout(G)
                });
                else clearTimeout(G)
            })
        }, "setConnectionTimeout"),
        nk6 = mV((A, {
            keepAlive: Q,
            keepAliveMsecs: B
        }) => {
            if (Q !== !0) return;
            A.on("socket", (G) => {
                G.setKeepAlive(Q, B || 0)
            })
        }, "setSocketKeepAlive"),
        ak6 = mV((A, Q, B = 0) => {
            A.setTimeout(B, () => {
                A.destroy(), Q(Object.assign(Error(`Connection timed out after ${B} ms`), {
                    name: "TimeoutError"
                }))
            })
        }, "setSocketTimeout"),
        nbB = UA("stream"),
        ubB = 1000;
    async function Np1(A, Q, B = ubB) {
        let G = Q.headers ?? {},
            Z = G.Expect || G.expect,
            I = -1,
            Y = !1;
        if (Z === "100-continue") await Promise.race([new Promise((J) => {
            I = Number(setTimeout(J, Math.max(ubB, B)))
        }), new Promise((J) => {
            A.on("continue", () => {
                clearTimeout(I), J()
            }), A.on("error", () => {
                Y = !0, clearTimeout(I), J()
            })
        })]);
        if (!Y) abB(A, Q.body)
    }
    mV(Np1, "writeRequestBody");

    function abB(A, Q) {
        if (Q instanceof nbB.Readable) {
            Q.pipe(A);
            return
        }
        if (Q) {
            if (Buffer.isBuffer(Q) || typeof Q === "string") {
                A.end(Q);
                return
            }
            let B = Q;
            if (typeof B === "object" && B.buffer && typeof B.byteOffset === "number" && typeof B.byteLength === "number") {
                A.end(Buffer.from(B.buffer, B.byteOffset, B.byteLength));
                return
            }
            A.end(Buffer.from(Q));
            return
        }
        A.end()
    }
    mV(abB, "writeBody");
    var sk6 = 0,
        sbB = class A {
            constructor(Q) {
                this.socketWarningTimestamp = 0, this.metadata = {
                    handlerProtocol: "http/1.1"
                }, this.configProvider = new Promise((B, G) => {
                    if (typeof Q === "function") Q().then((Z) => {
                        B(this.resolveDefaultConfig(Z))
                    }).catch(G);
                    else B(this.resolveDefaultConfig(Q))
                })
            }
            static create(Q) {
                if (typeof(Q == null ? void 0 : Q.handle) === "function") return Q;
                return new A(Q)
            }
            static checkSocketUsage(Q, B) {
                var G, Z;
                let {
                    sockets: I,
                    requests: Y,
                    maxSockets: J
                } = Q;
                if (typeof J !== "number" || J === 1 / 0) return B;
                let W = 15000;
                if (Date.now() - W < B) return B;
                if (I && Y)
                    for (let X in I) {
                        let F = ((G = I[X]) == null ? void 0 : G.length) ?? 0,
                            V = ((Z = Y[X]) == null ? void 0 : Z.length) ?? 0;
                        if (F >= J && V >= 2 * J) return console.warn("@smithy/node-http-handler:WARN", `socket usage at capacity=${F} and ${V} additional requests are enqueued.`, "See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html", "or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config."), Date.now()
                    }
                return B
            }
            resolveDefaultConfig(Q) {
                let {
                    requestTimeout: B,
                    connectionTimeout: G,
                    socketTimeout: Z,
                    httpAgent: I,
                    httpsAgent: Y
                } = Q || {}, J = !0, W = 50;
                return {
                    connectionTimeout: G,
                    requestTimeout: B ?? Z,
                    httpAgent: (() => {
                        if (I instanceof wp1.Agent || typeof(I == null ? void 0 : I.destroy) === "function") return I;
                        return new wp1.Agent({
                            keepAlive: !0,
                            maxSockets: 50,
                            ...I
                        })
                    })(),
                    httpsAgent: (() => {
                        if (Y instanceof qp1.Agent || typeof(Y == null ? void 0 : Y.destroy) === "function") return Y;
                        return new qp1.Agent({
                            keepAlive: !0,
                            maxSockets: 50,
                            ...Y
                        })
                    })()
                }
            }
            destroy() {
                var Q, B, G, Z;
                (B = (Q = this.config) == null ? void 0 : Q.httpAgent) == null || B.destroy(), (Z = (G = this.config) == null ? void 0 : G.httpsAgent) == null || Z.destroy()
            }
            async handle(Q, {
                abortSignal: B
            } = {}) {
                if (!this.config) this.config = await this.configProvider;
                let G;
                return new Promise((Z, I) => {
                    let Y = void 0,
                        J = mV(async (w) => {
                            await Y, clearTimeout(G), Z(w)
                        }, "resolve"),
                        W = mV(async (w) => {
                            await Y, I(w)
                        }, "reject");
                    if (!this.config) throw Error("Node HTTP request handler config is not resolved");
                    if (B == null ? void 0 : B.aborted) {
                        let w = Error("Request aborted");
                        w.name = "AbortError", W(w);
                        return
                    }
                    let X = Q.protocol === "https:",
                        F = X ? this.config.httpsAgent : this.config.httpAgent;
                    G = setTimeout(() => {
                        this.socketWarningTimestamp = A.checkSocketUsage(F, this.socketWarningTimestamp)
                    }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000));
                    let V = (0, lbB.buildQueryString)(Q.query || {}),
                        K = void 0;
                    if (Q.username != null || Q.password != null) {
                        let w = Q.username ?? "",
                            N = Q.password ?? "";
                        K = `${w}:${N}`
                    }
                    let D = Q.path;
                    if (V) D += `?${V}`;
                    if (Q.fragment) D += `#${Q.fragment}`;
                    let H = {
                            headers: Q.headers,
                            host: Q.hostname,
                            method: Q.method,
                            path: D,
                            port: Q.port,
                            agent: F,
                            auth: K
                        },
                        E = (X ? qp1.request : wp1.request)(H, (w) => {
                            let N = new pbB.HttpResponse({
                                statusCode: w.statusCode || -1,
                                reason: w.statusMessage,
                                headers: ibB(w.headers),
                                body: w
                            });
                            J({
                                response: N
                            })
                        });
                    if (E.on("error", (w) => {
                            if (lk6.includes(w.code)) W(Object.assign(w, {
                                name: "TimeoutError"
                            }));
                            else W(w)
                        }), ik6(E, W, this.config.connectionTimeout), ak6(E, W, this.config.requestTimeout), B) B.onabort = () => {
                        E.abort();
                        let w = Error("Request aborted");
                        w.name = "AbortError", W(w)
                    };
                    let z = H.agent;
                    if (typeof z === "object" && "keepAlive" in z) nk6(E, {
                        keepAlive: z.keepAlive,
                        keepAliveMsecs: z.keepAliveMsecs
                    });
                    Y = Np1(E, Q, this.config.requestTimeout).catch(I)
                })
            }
            updateHttpClientConfig(Q, B) {
                this.config = void 0, this.configProvider = this.configProvider.then((G) => {
                    return {
                        ...G,
                        [Q]: B
                    }
                })
            }
            httpHandlerConfigs() {
                return this.config ?? {}
            }
        };
    mV(sbB, "NodeHttpHandler");
    var rk6 = sbB,
        mbB = UA("http2"),
        ok6 = ck6(UA("http2")),
        rbB = class {
            constructor(Q) {
                this.sessions = [], this.sessions = Q ?? []
            }
            poll() {
                if (this.sessions.length > 0) return this.sessions.shift()
            }
            offerLast(Q) {
                this.sessions.push(Q)
            }
            contains(Q) {
                return this.sessions.includes(Q)
            }
            remove(Q) {
                this.sessions = this.sessions.filter((B) => B !== Q)
            } [Symbol.iterator]() {
                return this.sessions[Symbol.iterator]()
            }
            destroy(Q) {
                for (let B of this.sessions)
                    if (B === Q) {
                        if (!B.destroyed) B.destroy()
                    }
            }
        };
    mV(rbB, "NodeHttp2ConnectionPool");
    var tk6 = rbB,
        obB = class {
            constructor(Q) {
                if (this.sessionCache = new Map, this.config = Q, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw RangeError("maxConcurrency must be greater than zero.")
            }
            lease(Q, B) {
                let G = this.getUrlString(Q),
                    Z = this.sessionCache.get(G);
                if (Z) {
                    let W = Z.poll();
                    if (W && !this.config.disableConcurrency) return W
                }
                let I = ok6.default.connect(G);
                if (this.config.maxConcurrency) I.settings({
                    maxConcurrentStreams: this.config.maxConcurrency
                }, (W) => {
                    if (W) throw Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + Q.destination.toString())
                });
                I.unref();
                let Y = mV(() => {
                    I.destroy(), this.deleteSession(G, I)
                }, "destroySessionCb");
                if (I.on("goaway", Y), I.on("error", Y), I.on("frameError", Y), I.on("close", () => this.deleteSession(G, I)), B.requestTimeout) I.setTimeout(B.requestTimeout, Y);
                let J = this.sessionCache.get(G) || new tk6;
                return J.offerLast(I), this.sessionCache.set(G, J), I
            }
            deleteSession(Q, B) {
                let G = this.sessionCache.get(Q);
                if (!G) return;
                if (!G.contains(B)) return;
                G.remove(B), this.sessionCache.set(Q, G)
            }
            release(Q, B) {
                var G;
                let Z = this.getUrlString(Q);
                (G = this.sessionCache.get(Z)) == null || G.offerLast(B)
            }
            destroy() {
                for (let [Q, B] of this.sessionCache) {
                    for (let G of B) {
                        if (!G.destroyed) G.destroy();
                        B.remove(G)
                    }
                    this.sessionCache.delete(Q)
                }
            }
            setMaxConcurrentStreams(Q) {
                if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw RangeError("maxConcurrentStreams must be greater than zero.");
                this.config.maxConcurrency = Q
            }
            setDisableConcurrentStreams(Q) {
                this.config.disableConcurrency = Q
            }
            getUrlString(Q) {
                return Q.destination.toString()
            }
        };
    mV(obB, "NodeHttp2ConnectionManager");
    var ek6 = obB,
        tbB = class A {
            constructor(Q) {
                this.metadata = {
                    handlerProtocol: "h2"
                }, this.connectionManager = new ek6({}), this.configProvider = new Promise((B, G) => {
                    if (typeof Q === "function") Q().then((Z) => {
                        B(Z || {})
                    }).catch(G);
                    else B(Q || {})
                })
            }
            static create(Q) {
                if (typeof(Q == null ? void 0 : Q.handle) === "function") return Q;
                return new A(Q)
            }
            destroy() {
                this.connectionManager.destroy()
            }
            async handle(Q, {
                abortSignal: B
            } = {}) {
                if (!this.config) {
                    if (this.config = await this.configProvider, this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || !1), this.config.maxConcurrentStreams) this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams)
                }
                let {
                    requestTimeout: G,
                    disableConcurrentStreams: Z
                } = this.config;
                return new Promise((I, Y) => {
                    var J;
                    let W = !1,
                        X = void 0,
                        F = mV(async (x) => {
                            await X, I(x)
                        }, "resolve"),
                        V = mV(async (x) => {
                            await X, Y(x)
                        }, "reject");
                    if (B == null ? void 0 : B.aborted) {
                        W = !0;
                        let x = Error("Request aborted");
                        x.name = "AbortError", V(x);
                        return
                    }
                    let {
                        hostname: K,
                        method: D,
                        port: H,
                        protocol: C,
                        query: E
                    } = Q, z = "";
                    if (Q.username != null || Q.password != null) {
                        let x = Q.username ?? "",
                            p = Q.password ?? "";
                        z = `${x}:${p}@`
                    }
                    let w = `${C}//${z}${K}${H?`:${H}`:""}`,
                        N = {
                            destination: new URL(w)
                        },
                        q = this.connectionManager.lease(N, {
                            requestTimeout: (J = this.config) == null ? void 0 : J.sessionTimeout,
                            disableConcurrentStreams: Z || !1
                        }),
                        R = mV((x) => {
                            if (Z) this.destroySession(q);
                            W = !0, V(x)
                        }, "rejectWithDestroy"),
                        P = (0, lbB.buildQueryString)(E || {}),
                        y = Q.path;
                    if (P) y += `?${P}`;
                    if (Q.fragment) y += `#${Q.fragment}`;
                    let v = q.request({
                        ...Q.headers,
                        [mbB.constants.HTTP2_HEADER_PATH]: y,
                        [mbB.constants.HTTP2_HEADER_METHOD]: D
                    });
                    if (q.ref(), v.on("response", (x) => {
                            let p = new pbB.HttpResponse({
                                statusCode: x[":status"] || -1,
                                headers: ibB(x),
                                body: v
                            });
                            if (W = !0, F({
                                    response: p
                                }), Z) q.close(), this.connectionManager.deleteSession(w, q)
                        }), G) v.setTimeout(G, () => {
                        v.close();
                        let x = Error(`Stream timed out because of no activity for ${G} ms`);
                        x.name = "TimeoutError", R(x)
                    });
                    if (B) B.onabort = () => {
                        v.close();
                        let x = Error("Request aborted");
                        x.name = "AbortError", R(x)
                    };
                    v.on("frameError", (x, p, u) => {
                        R(Error(`Frame type id ${x} in stream id ${u} has failed with code ${p}.`))
                    }), v.on("error", R), v.on("aborted", () => {
                        R(Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${v.rstCode}.`))
                    }), v.on("close", () => {
                        if (q.unref(), Z) q.destroy();
                        if (!W) R(Error("Unexpected error: http2 request did not get a response"))
                    }), X = Np1(v, Q, G)
                })
            }
            updateHttpClientConfig(Q, B) {
                this.config = void 0, this.configProvider = this.configProvider.then((G) => {
                    return {
                        ...G,
                        [Q]: B
                    }
                })
            }
            httpHandlerConfigs() {
                return this.config ?? {}
            }
            destroySession(Q) {
                if (!Q.destroyed) Q.destroy()
            }
        };
    mV(tbB, "NodeHttp2Handler");
    var Ay6 = tbB,
        ebB = class extends nbB.Writable {
            constructor() {
                super(...arguments);
                this.bufferedBytes = []
            }
            _write(Q, B, G) {
                this.bufferedBytes.push(Q), G()
            }
        };
    mV(ebB, "Collector");
    var Qy6 = ebB,
        By6 = mV((A) => new Promise((Q, B) => {
            let G = new Qy6;
            A.pipe(G), A.on("error", (Z) => {
                G.end(), B(Z)
            }), G.on("error", B), G.on("finish", function() {
                let Z = new Uint8Array(Buffer.concat(this.bufferedBytes));
                Q(Z)
            })
        }), "streamCollector")
});
var IfB = U((GfB) => {
    Object.defineProperty(GfB, "__esModule", {
        value: !0
    });
    GfB.sdkStreamMixin = void 0;
    var Gy6 = QfB(),
        Zy6 = Ep1(),
        Lp1 = UA("stream"),
        Iy6 = UA("util"),
        BfB = "The stream has already been transformed.",
        Yy6 = (A) => {
            var Q, B;
            if (!(A instanceof Lp1.Readable)) {
                let I = ((B = (Q = A === null || A === void 0 ? void 0 : A.__proto__) === null || Q === void 0 ? void 0 : Q.constructor) === null || B === void 0 ? void 0 : B.name) || A;
                throw Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${I}`)
            }
            let G = !1,
                Z = async () => {
                    if (G) throw Error(BfB);
                    return G = !0, await (0, Gy6.streamCollector)(A)
                };
            return Object.assign(A, {
                transformToByteArray: Z,
                transformToString: async (I) => {
                    let Y = await Z();
                    if (I === void 0 || Buffer.isEncoding(I)) return (0, Zy6.fromArrayBuffer)(Y.buffer, Y.byteOffset, Y.byteLength).toString(I);
                    else return new Iy6.TextDecoder(I).decode(Y)
                },
                transformToWebStream: () => {
                    if (G) throw Error(BfB);
                    if (A.readableFlowing !== null) throw Error("The stream has been consumed by other callbacks.");
                    if (typeof Lp1.Readable.toWeb !== "function") throw Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
                    return G = !0, Lp1.Readable.toWeb(A)
                }
            })
        };
    GfB.sdkStreamMixin = Yy6
});
var KfB = U((y2G, jtA) => {
    var {
        defineProperty: TtA,
        getOwnPropertyDescriptor: Jy6,
        getOwnPropertyNames: Wy6
    } = Object, Xy6 = Object.prototype.hasOwnProperty, Rp1 = (A, Q) => TtA(A, "name", {
        value: Q,
        configurable: !0
    }), Fy6 = (A, Q) => {
        for (var B in Q) TtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Mp1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Wy6(Q))
                if (!Xy6.call(A, Z) && Z !== B) TtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Jy6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, YfB = (A, Q, B) => (Mp1(A, Q, "default"), B && Mp1(B, Q, "default")), Vy6 = (A) => Mp1(TtA({}, "__esModule", {
        value: !0
    }), A), PtA = {};
    Fy6(PtA, {
        Uint8ArrayBlobAdapter: () => Op1
    });
    jtA.exports = Vy6(PtA);
    var JfB = Dp1(),
        WfB = PbB();

    function XfB(A, Q = "utf-8") {
        if (Q === "base64") return (0, JfB.toBase64)(A);
        return (0, WfB.toUtf8)(A)
    }
    Rp1(XfB, "transformToString");

    function FfB(A, Q) {
        if (Q === "base64") return Op1.mutate((0, JfB.fromBase64)(A));
        return Op1.mutate((0, WfB.fromUtf8)(A))
    }
    Rp1(FfB, "transformFromString");
    var VfB = class A extends Uint8Array {
        static fromString(Q, B = "utf-8") {
            switch (typeof Q) {
                case "string":
                    return FfB(Q, B);
                default:
                    throw Error(`Unsupported conversion from ${typeof Q} to Uint8ArrayBlobAdapter.`)
            }
        }
        static mutate(Q) {
            return Object.setPrototypeOf(Q, A.prototype), Q
        }
        transformToString(Q = "utf-8") {
            return XfB(this, Q)
        }
    };
    Rp1(VfB, "Uint8ArrayBlobAdapter");
    var Op1 = VfB;
    YfB(PtA, _bB(), jtA.exports);
    YfB(PtA, IfB(), jtA.exports)
});
var bfB = U((x2G, vfB) => {
    var {
        defineProperty: ytA,
        getOwnPropertyDescriptor: Ky6,
        getOwnPropertyNames: Dy6
    } = Object, Hy6 = Object.prototype.hasOwnProperty, HB = (A, Q) => ytA(A, "name", {
        value: Q,
        configurable: !0
    }), Cy6 = (A, Q) => {
        for (var B in Q) ytA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Ey6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Dy6(Q))
                if (!Hy6.call(A, Z) && Z !== B) ytA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ky6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, zy6 = (A) => Ey6(ytA({}, "__esModule", {
        value: !0
    }), A), HfB = {};
    Cy6(HfB, {
        Client: () => $y6,
        Command: () => $fB,
        LazyJsonString: () => Cx6,
        NoOpLogger: () => Uy6,
        SENSITIVE_STRING: () => Ny6,
        ServiceException: () => Gx6,
        StringWrapper: () => kwA,
        _json: () => yp1,
        collectBody: () => wy6,
        convertMap: () => Ex6,
        createAggregatedClient: () => Ly6,
        dateToUtcString: () => RfB,
        decorateServiceException: () => PfB,
        emitWarningIfUnsupportedVersion: () => Jx6,
        expectBoolean: () => Oy6,
        expectByte: () => kp1,
        expectFloat32: () => StA,
        expectInt: () => Ty6,
        expectInt32: () => Sp1,
        expectLong: () => SwA,
        expectNonNull: () => jy6,
        expectNumber: () => jwA,
        expectObject: () => qfB,
        expectShort: () => _p1,
        expectString: () => Sy6,
        expectUnion: () => _y6,
        extendedEncodeURIComponent: () => ktA,
        getArrayIfSingleItem: () => Hx6,
        getDefaultClientConfiguration: () => Kx6,
        getDefaultExtensionConfiguration: () => SfB,
        getValueFromTextNode: () => _fB,
        handleFloat: () => xy6,
        limitedParseDouble: () => bp1,
        limitedParseFloat: () => vy6,
        limitedParseFloat32: () => by6,
        loadConfigsForDefaultMode: () => Yx6,
        logger: () => _wA,
        map: () => hp1,
        parseBoolean: () => My6,
        parseEpochTimestamp: () => ay6,
        parseRfc3339DateTime: () => my6,
        parseRfc3339DateTimeWithOffset: () => cy6,
        parseRfc7231DateTime: () => ny6,
        resolveDefaultRuntimeConfig: () => Dx6,
        resolvedPath: () => qx6,
        serializeFloat: () => Nx6,
        splitEvery: () => xfB,
        strictParseByte: () => OfB,
        strictParseDouble: () => vp1,
        strictParseFloat: () => ky6,
        strictParseFloat32: () => NfB,
        strictParseInt: () => fy6,
        strictParseInt32: () => hy6,
        strictParseLong: () => MfB,
        strictParseShort: () => hGA,
        take: () => zx6,
        throwDefaultError: () => jfB,
        withBaseException: () => Zx6
    });
    vfB.exports = zy6(HfB);
    var CfB = class {
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
    };
    HB(CfB, "NoOpLogger");
    var Uy6 = CfB,
        EfB = zbB(),
        zfB = class {
            constructor(Q) {
                this.middlewareStack = (0, EfB.constructStack)(), this.config = Q
            }
            send(Q, B, G) {
                let Z = typeof B !== "function" ? B : void 0,
                    I = typeof B === "function" ? B : G,
                    Y = Q.resolveMiddleware(this.middlewareStack, this.config, Z);
                if (I) Y(Q).then((J) => I(null, J.output), (J) => I(J)).catch(() => {});
                else return Y(Q).then((J) => J.output)
            }
            destroy() {
                if (this.config.requestHandler.destroy) this.config.requestHandler.destroy()
            }
        };
    HB(zfB, "Client");
    var $y6 = zfB,
        Tp1 = KfB(),
        wy6 = HB(async (A = new Uint8Array, Q) => {
            if (A instanceof Uint8Array) return Tp1.Uint8ArrayBlobAdapter.mutate(A);
            if (!A) return Tp1.Uint8ArrayBlobAdapter.mutate(new Uint8Array);
            let B = Q.streamCollector(A);
            return Tp1.Uint8ArrayBlobAdapter.mutate(await B)
        }, "collectBody"),
        jp1 = dc1(),
        UfB = class {
            constructor() {
                this.middlewareStack = (0, EfB.constructStack)()
            }
            static classBuilder() {
                return new qy6
            }
            resolveMiddlewareWithContext(Q, B, G, {
                middlewareFn: Z,
                clientName: I,
                commandName: Y,
                inputFilterSensitiveLog: J,
                outputFilterSensitiveLog: W,
                smithyContext: X,
                additionalContext: F,
                CommandCtor: V
            }) {
                for (let E of Z.bind(this)(V, Q, B, G)) this.middlewareStack.use(E);
                let K = Q.concat(this.middlewareStack),
                    {
                        logger: D
                    } = B,
                    H = {
                        logger: D,
                        clientName: I,
                        commandName: Y,
                        inputFilterSensitiveLog: J,
                        outputFilterSensitiveLog: W,
                        [jp1.SMITHY_CONTEXT_KEY]: {
                            ...X
                        },
                        ...F
                    },
                    {
                        requestHandler: C
                    } = B;
                return K.resolve((E) => C.handle(E.request, G || {}), H)
            }
        };
    HB(UfB, "Command");
    var $fB = UfB,
        wfB = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (Q) => Q, this._outputFilterSensitiveLog = (Q) => Q, this._serializer = null, this._deserializer = null
            }
            init(Q) {
                this._init = Q
            }
            ep(Q) {
                return this._ep = Q, this
            }
            m(Q) {
                return this._middlewareFn = Q, this
            }
            s(Q, B, G = {}) {
                return this._smithyContext = {
                    service: Q,
                    operation: B,
                    ...G
                }, this
            }
            c(Q = {}) {
                return this._additionalContext = Q, this
            }
            n(Q, B) {
                return this._clientName = Q, this._commandName = B, this
            }
            f(Q = (G) => G, B = (G) => G) {
                return this._inputFilterSensitiveLog = Q, this._outputFilterSensitiveLog = B, this
            }
            ser(Q) {
                return this._serializer = Q, this
            }
            de(Q) {
                return this._deserializer = Q, this
            }
            build() {
                var Q;
                let B = this,
                    G;
                return G = (Q = class extends $fB {
                    constructor(...[Z]) {
                        super();
                        this.serialize = B._serializer, this.deserialize = B._deserializer, this.input = Z ?? {}, B._init(this)
                    }
                    static getEndpointParameterInstructions() {
                        return B._ep
                    }
                    resolveMiddleware(Z, I, Y) {
                        return this.resolveMiddlewareWithContext(Z, I, Y, {
                            CommandCtor: G,
                            middlewareFn: B._middlewareFn,
                            clientName: B._clientName,
                            commandName: B._commandName,
                            inputFilterSensitiveLog: B._inputFilterSensitiveLog,
                            outputFilterSensitiveLog: B._outputFilterSensitiveLog,
                            smithyContext: B._smithyContext,
                            additionalContext: B._additionalContext
                        })
                    }
                }, HB(Q, "CommandRef"), Q)
            }
        };
    HB(wfB, "ClassBuilder");
    var qy6 = wfB,
        Ny6 = "***SensitiveInformation***",
        Ly6 = HB((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = HB(async function(Y, J, W) {
                        let X = new G(Y);
                        if (typeof J === "function") this.send(X, J);
                        else if (typeof W === "function") {
                            if (typeof J !== "object") throw Error(`Expected http options but got ${typeof J}`);
                            this.send(X, J || {}, W)
                        } else return this.send(X, J)
                    }, "methodImpl"),
                    I = (B[0].toLowerCase() + B.slice(1)).replace(/Command$/, "");
                Q.prototype[I] = Z
            }
        }, "createAggregatedClient"),
        My6 = HB((A) => {
            switch (A) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    throw Error(`Unable to parse boolean value "${A}"`)
            }
        }, "parseBoolean"),
        Oy6 = HB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "number") {
                if (A === 0 || A === 1) _wA.warn(_tA(`Expected boolean, got ${typeof A}: ${A}`));
                if (A === 0) return !1;
                if (A === 1) return !0
            }
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (Q === "false" || Q === "true") _wA.warn(_tA(`Expected boolean, got ${typeof A}: ${A}`));
                if (Q === "false") return !1;
                if (Q === "true") return !0
            }
            if (typeof A === "boolean") return A;
            throw TypeError(`Expected boolean, got ${typeof A}: ${A}`)
        }, "expectBoolean"),
        jwA = HB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") {
                let Q = parseFloat(A);
                if (!Number.isNaN(Q)) {
                    if (String(Q) !== String(A)) _wA.warn(_tA(`Expected number but observed string: ${A}`));
                    return Q
                }
            }
            if (typeof A === "number") return A;
            throw TypeError(`Expected number, got ${typeof A}: ${A}`)
        }, "expectNumber"),
        Ry6 = Math.ceil(340282346638528860000000000000000000000),
        StA = HB((A) => {
            let Q = jwA(A);
            if (Q !== void 0 && !Number.isNaN(Q) && Q !== 1 / 0 && Q !== -1 / 0) {
                if (Math.abs(Q) > Ry6) throw TypeError(`Expected 32-bit float, got ${A}`)
            }
            return Q
        }, "expectFloat32"),
        SwA = HB((A) => {
            if (A === null || A === void 0) return;
            if (Number.isInteger(A) && !Number.isNaN(A)) return A;
            throw TypeError(`Expected integer, got ${typeof A}: ${A}`)
        }, "expectLong"),
        Ty6 = SwA,
        Sp1 = HB((A) => xp1(A, 32), "expectInt32"),
        _p1 = HB((A) => xp1(A, 16), "expectShort"),
        kp1 = HB((A) => xp1(A, 8), "expectByte"),
        xp1 = HB((A, Q) => {
            let B = SwA(A);
            if (B !== void 0 && Py6(B, Q) !== B) throw TypeError(`Expected ${Q}-bit integer, got ${A}`);
            return B
        }, "expectSizedInt"),
        Py6 = HB((A, Q) => {
            switch (Q) {
                case 32:
                    return Int32Array.of(A)[0];
                case 16:
                    return Int16Array.of(A)[0];
                case 8:
                    return Int8Array.of(A)[0]
            }
        }, "castInt"),
        jy6 = HB((A, Q) => {
            if (A === null || A === void 0) {
                if (Q) throw TypeError(`Expected a non-null value for ${Q}`);
                throw TypeError("Expected a non-null value")
            }
            return A
        }, "expectNonNull"),
        qfB = HB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "object" && !Array.isArray(A)) return A;
            let Q = Array.isArray(A) ? "array" : typeof A;
            throw TypeError(`Expected object, got ${Q}: ${A}`)
        }, "expectObject"),
        Sy6 = HB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") return A;
            if (["boolean", "number", "bigint"].includes(typeof A)) return _wA.warn(_tA(`Expected string, got ${typeof A}: ${A}`)), String(A);
            throw TypeError(`Expected string, got ${typeof A}: ${A}`)
        }, "expectString"),
        _y6 = HB((A) => {
            if (A === null || A === void 0) return;
            let Q = qfB(A),
                B = Object.entries(Q).filter(([, G]) => G != null).map(([G]) => G);
            if (B.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
            if (B.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${B} were not null.`);
            return Q
        }, "expectUnion"),
        vp1 = HB((A) => {
            if (typeof A == "string") return jwA(uGA(A));
            return jwA(A)
        }, "strictParseDouble"),
        ky6 = vp1,
        NfB = HB((A) => {
            if (typeof A == "string") return StA(uGA(A));
            return StA(A)
        }, "strictParseFloat32"),
        yy6 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        uGA = HB((A) => {
            let Q = A.match(yy6);
            if (Q === null || Q[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
            return parseFloat(A)
        }, "parseNumber"),
        bp1 = HB((A) => {
            if (typeof A == "string") return LfB(A);
            return jwA(A)
        }, "limitedParseDouble"),
        xy6 = bp1,
        vy6 = bp1,
        by6 = HB((A) => {
            if (typeof A == "string") return LfB(A);
            return StA(A)
        }, "limitedParseFloat32"),
        LfB = HB((A) => {
            switch (A) {
                case "NaN":
                    return NaN;