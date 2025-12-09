/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_005.js
 * 处理时间: 2025-12-09T03:37:23.969Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 5/61
 * Lines: 14990 - 16489 (1500 lines)
 * Original file: cli.js
 */

                                qA.data = K1
                            } catch (K1) {
                                return Z(NB.from(K1, null, Q, qA.request, qA))
                            }
                            kj(G, Z, qA)
                        })
                    }
                    C.once("abort", (DA) => {
                        if (!SA.destroyed) SA.emit("error", DA), SA.destroy()
                    })
                }), C.once("abort", (IA) => {
                    Z(IA), H.destroy(IA)
                }), H.on("error", function(HA) {
                    Z(NB.from(HA, null, Q, H))
                }), H.on("socket", function(HA) {
                    HA.setKeepAlive(!0, 60000)
                }), Q.timeout) {
                let IA = parseInt(Q.timeout, 10);
                if (Number.isNaN(IA)) {
                    Z(new NB("error trying to parse `config.timeout` to int", NB.ERR_BAD_OPTION_VALUE, Q, H));
                    return
                }
                H.setTimeout(IA, function() {
                    if (K) return;
                    let wA = Q.timeout ? "timeout of " + Q.timeout + "ms exceeded" : "timeout exceeded",
                        KA = Q.transitional || Y2A;
                    if (Q.timeoutErrorMessage) wA = Q.timeoutErrorMessage;
                    Z(new NB(wA, KA.clarifyTimeoutError ? NB.ETIMEDOUT : NB.ECONNABORTED, Q, H)), z()
                })
            }
            if (f1.isStream(Y)) {
                let IA = !1,
                    HA = !1;
                Y.on("end", () => {
                    IA = !0
                }), Y.once("error", (wA) => {
                    HA = !0, H.destroy(wA)
                }), Y.on("close", () => {
                    if (!IA && !HA) z(new s$("Request stream has been aborted", Q, H))
                }), Y.pipe(H)
            } else H.end(Y)
        })
    }
});
var Tw0;
var Pw0 = L(() => {
    DR();
    Tw0 = c3.hasStandardBrowserEnv ? ((A, Q) => (B) => {
        return B = new URL(B, c3.origin), A.protocol === B.protocol && A.host === B.host && (Q || A.port === B.port)
    })(new URL(c3.origin), c3.navigator && /(msie|trident)/i.test(c3.navigator.userAgent)) : () => !0
});
var jw0;
var Sw0 = L(() => {
    lG();
    DR();
    jw0 = c3.hasStandardBrowserEnv ? {
        write(A, Q, B, G, Z, I) {
            let Y = [A + "=" + encodeURIComponent(Q)];
            f1.isNumber(B) && Y.push("expires=" + new Date(B).toGMTString()), f1.isString(G) && Y.push("path=" + G), f1.isString(Z) && Y.push("domain=" + Z), I === !0 && Y.push("secure"), document.cookie = Y.join("; ")
        },
        read(A) {
            let Q = document.cookie.match(new RegExp("(^|;\\s*)(" + A + ")=([^;]*)"));
            return Q ? decodeURIComponent(Q[3]) : null
        },
        remove(A) {
            this.write(A, "", Date.now() - 86400000)
        }
    } : {
        write() {},
        read() {
            return null
        },
        remove() {}
    }
});

function HR(A, Q) {
    Q = Q || {};
    let B = {};

    function G(X, F, V, K) {
        if (f1.isPlainObject(X) && f1.isPlainObject(F)) return f1.merge.call({
            caseless: K
        }, X, F);
        else if (f1.isPlainObject(F)) return f1.merge({}, F);
        else if (f1.isArray(F)) return F.slice();
        return F
    }

    function Z(X, F, V, K) {
        if (!f1.isUndefined(F)) return G(X, F, V, K);
        else if (!f1.isUndefined(X)) return G(void 0, X, V, K)
    }

    function I(X, F) {
        if (!f1.isUndefined(F)) return G(void 0, F)
    }

    function Y(X, F) {
        if (!f1.isUndefined(F)) return G(void 0, F);
        else if (!f1.isUndefined(X)) return G(void 0, X)
    }

    function J(X, F, V) {
        if (V in Q) return G(X, F);
        else if (V in A) return G(void 0, X)
    }
    let W = {
        url: I,
        method: I,
        data: I,
        baseURL: Y,
        transformRequest: Y,
        transformResponse: Y,
        paramsSerializer: Y,
        timeout: Y,
        timeoutMessage: Y,
        withCredentials: Y,
        withXSRFToken: Y,
        adapter: Y,
        responseType: Y,
        xsrfCookieName: Y,
        xsrfHeaderName: Y,
        onUploadProgress: Y,
        onDownloadProgress: Y,
        decompress: Y,
        maxContentLength: Y,
        maxBodyLength: Y,
        beforeRedirect: Y,
        transport: Y,
        httpAgent: Y,
        httpsAgent: Y,
        cancelToken: Y,
        socketPath: Y,
        responseEncoding: Y,
        validateStatus: J,
        headers: (X, F, V) => Z(_w0(X), _w0(F), V, !0)
    };
    return f1.forEach(Object.keys(Object.assign({}, A, Q)), function(F) {
        let V = W[F] || Z,
            K = V(A[F], Q[F], F);
        f1.isUndefined(K) && V !== J || (B[F] = K)
    }), B
}
var _w0 = (A) => A instanceof PY ? {
    ...A
} : A;
var gkA = L(() => {
    lG();
    _j()
});
var ukA = (A) => {
    let Q = HR({}, A),
        {
            data: B,
            withXSRFToken: G,
            xsrfHeaderName: Z,
            xsrfCookieName: I,
            headers: Y,
            auth: J
        } = Q;
    if (Q.headers = Y = PY.from(Y), Q.url = ws(Ns(Q.baseURL, Q.url, Q.allowAbsoluteUrls), A.params, A.paramsSerializer), J) Y.set("Authorization", "Basic " + btoa((J.username || "") + ":" + (J.password ? unescape(encodeURIComponent(J.password)) : "")));
    let W;
    if (f1.isFormData(B)) {
        if (c3.hasStandardBrowserEnv || c3.hasStandardBrowserWebWorkerEnv) Y.setContentType(void 0);
        else if ((W = Y.getContentType()) !== !1) {
            let [X, ...F] = W ? W.split(";").map((V) => V.trim()).filter(Boolean) : [];
            Y.setContentType([X || "multipart/form-data", ...F].join("; "))
        }
    }
    if (c3.hasStandardBrowserEnv) {
        if (G && f1.isFunction(G) && (G = G(Q)), G || G !== !1 && Tw0(Q.url)) {
            let X = Z && I && jw0.read(I);
            if (X) Y.set(Z, X)
        }
    }
    return Q
};
var HF1 = L(() => {
    DR();
    lG();
    Pw0();
    Sw0();
    SkA();
    gkA();
    _j();
    MkA()
});
var LS9, kw0;
var yw0 = L(() => {
    lG();
    jkA();
    OkA();
    a$();
    qs();
    DR();
    _j();
    hkA();
    HF1();
    LS9 = typeof XMLHttpRequest < "u", kw0 = LS9 && function(A) {
        return new Promise(function(B, G) {
            let Z = ukA(A),
                I = Z.data,
                Y = PY.from(Z.headers).normalize(),
                {
                    responseType: J,
                    onUploadProgress: W,
                    onDownloadProgress: X
                } = Z,
                F, V, K, D, H;

            function C() {
                D && D(), H && H(), Z.cancelToken && Z.cancelToken.unsubscribe(F), Z.signal && Z.signal.removeEventListener("abort", F)
            }
            let E = new XMLHttpRequest;
            E.open(Z.method.toUpperCase(), Z.url, !0), E.timeout = Z.timeout;

            function z() {
                if (!E) return;
                let N = PY.from("getAllResponseHeaders" in E && E.getAllResponseHeaders()),
                    R = {
                        data: !J || J === "text" || J === "json" ? E.responseText : E.response,
                        status: E.status,
                        statusText: E.statusText,
                        headers: N,
                        config: A,
                        request: E
                    };
                kj(function(y) {
                    B(y), C()
                }, function(y) {
                    G(y), C()
                }, R), E = null
            }
            if ("onloadend" in E) E.onloadend = z;
            else E.onreadystatechange = function() {
                if (!E || E.readyState !== 4) return;
                if (E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0)) return;
                setTimeout(z)
            };
            if (E.onabort = function() {
                    if (!E) return;
                    G(new NB("Request aborted", NB.ECONNABORTED, A, E)), E = null
                }, E.onerror = function() {
                    G(new NB("Network Error", NB.ERR_NETWORK, A, E)), E = null
                }, E.ontimeout = function() {
                    let q = Z.timeout ? "timeout of " + Z.timeout + "ms exceeded" : "timeout exceeded",
                        R = Z.transitional || Y2A;
                    if (Z.timeoutErrorMessage) q = Z.timeoutErrorMessage;
                    G(new NB(q, R.clarifyTimeoutError ? NB.ETIMEDOUT : NB.ECONNABORTED, A, E)), E = null
                }, I === void 0 && Y.setContentType(null), "setRequestHeader" in E) f1.forEach(Y.toJSON(), function(q, R) {
                E.setRequestHeader(R, q)
            });
            if (!f1.isUndefined(Z.withCredentials)) E.withCredentials = !!Z.withCredentials;
            if (J && J !== "json") E.responseType = Z.responseType;
            if (X)[K, H] = ix(X, !0), E.addEventListener("progress", K);
            if (W && E.upload)[V, D] = ix(W), E.upload.addEventListener("progress", V), E.upload.addEventListener("loadend", D);
            if (Z.cancelToken || Z.signal) {
                if (F = (N) => {
                        if (!E) return;
                        G(!N || N.type ? new s$(null, A, E) : N), E.abort(), E = null
                    }, Z.cancelToken && Z.cancelToken.subscribe(F), Z.signal) Z.signal.aborted ? F() : Z.signal.addEventListener("abort", F)
            }
            let w = TVA(Z.url);
            if (w && c3.protocols.indexOf(w) === -1) {
                G(new NB("Unsupported protocol " + w + ":", NB.ERR_BAD_REQUEST, A));
                return
            }
            E.send(I || null)
        })
    }
});
var MS9 = (A, Q) => {
        let {
            length: B
        } = A = A ? A.filter(Boolean) : [];
        if (Q || B) {
            let G = new AbortController,
                Z, I = function(X) {
                    if (!Z) {
                        Z = !0, J();
                        let F = X instanceof Error ? X : this.reason;
                        G.abort(F instanceof NB ? F : new s$(F instanceof Error ? F.message : F))
                    }
                },
                Y = Q && setTimeout(() => {
                    Y = null, I(new NB(`timeout ${Q} of ms exceeded`, NB.ETIMEDOUT))
                }, Q),
                J = () => {
                    if (A) Y && clearTimeout(Y), Y = null, A.forEach((X) => {
                        X.unsubscribe ? X.unsubscribe(I) : X.removeEventListener("abort", I)
                    }), A = null
                };
            A.forEach((X) => X.addEventListener("abort", I));
            let {
                signal: W
            } = G;
            return W.unsubscribe = () => f1.asap(J), W
        }
    },
    xw0;
var vw0 = L(() => {
    qs();
    a$();
    lG();
    xw0 = MS9
});
var OS9 = function*(A, Q) {
        let B = A.byteLength;
        if (!Q || B < Q) {
            yield A;
            return
        }
        let G = 0,
            Z;
        while (G < B) Z = G + Q, yield A.slice(G, Z), G = Z
    },
    RS9 = async function*(A, Q) {
        for await (let B of TS9(A)) yield* OS9(B, Q)
    }, TS9 = async function*(A) {
        if (A[Symbol.asyncIterator]) {
            yield* A;
            return
        }
        let Q = A.getReader();
        try {
            for (;;) {
                let {
                    done: B,
                    value: G
                } = await Q.read();
                if (B) break;
                yield G
            }
        } finally {
            await Q.cancel()
        }
    }, CF1 = (A, Q, B, G) => {
        let Z = RS9(A, Q),
            I = 0,
            Y, J = (W) => {
                if (!Y) Y = !0, G && G(W)
            };
        return new ReadableStream({
            async pull(W) {
                try {
                    let {
                        done: X,
                        value: F
                    } = await Z.next();
                    if (X) {
                        J(), W.close();
                        return
                    }
                    let V = F.byteLength;
                    if (B) {
                        let K = I += V;
                        B(K)
                    }
                    W.enqueue(new Uint8Array(F))
                } catch (X) {
                    throw J(X), X
                }
            },
            cancel(W) {
                return J(W), Z.return()
            }
        }, {
            highWaterMark: 2
        })
    };
var dkA, fw0, PS9, hw0 = (A, ...Q) => {
        try {
            return !!A(...Q)
        } catch (B) {
            return !1
        }
    },
    jS9, bw0 = 65536,
    EF1, mkA, SS9 = async (A) => {
        if (A == null) return 0;
        if (f1.isBlob(A)) return A.size;
        if (f1.isSpecCompliantForm(A)) return (await new Request(c3.origin, {
            method: "POST",
            body: A
        }).arrayBuffer()).byteLength;
        if (f1.isArrayBufferView(A) || f1.isArrayBuffer(A)) return A.byteLength;
        if (f1.isURLSearchParams(A)) A = A + "";
        if (f1.isString(A)) return (await PS9(A)).byteLength
    }, _S9 = async (A, Q) => {
        let B = f1.toFiniteNumber(A.getContentLength());
        return B == null ? SS9(Q) : B
    }, gw0;
var uw0 = L(() => {
    DR();
    lG();
    a$();
    vw0();
    _j();
    hkA();
    HF1();
    jkA();
    dkA = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function", fw0 = dkA && typeof ReadableStream === "function", PS9 = dkA && (typeof TextEncoder === "function" ? ((A) => (Q) => A.encode(Q))(new TextEncoder) : async (A) => new Uint8Array(await new Response(A).arrayBuffer())), jS9 = fw0 && hw0(() => {
        let A = !1,
            Q = new Request(c3.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    return A = !0, "half"
                }
            }).headers.has("Content-Type");
        return A && !Q
    }), EF1 = fw0 && hw0(() => f1.isReadableStream(new Response("").body)), mkA = {
        stream: EF1 && ((A) => A.body)
    };
    dkA && ((A) => {
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((Q) => {
            !mkA[Q] && (mkA[Q] = f1.isFunction(A[Q]) ? (B) => B[Q]() : (B, G) => {
                throw new NB(`Response type '${Q}' is not supported`, NB.ERR_NOT_SUPPORT, G)
            })
        })
    })(new Response);
    gw0 = dkA && (async (A) => {
        let {
            url: Q,
            method: B,
            data: G,
            signal: Z,
            cancelToken: I,
            timeout: Y,
            onDownloadProgress: J,
            onUploadProgress: W,
            responseType: X,
            headers: F,
            withCredentials: V = "same-origin",
            fetchOptions: K
        } = ukA(A);
        X = X ? (X + "").toLowerCase() : "text";
        let D = xw0([Z, I && I.toAbortSignal()], Y),
            H, C = D && D.unsubscribe && (() => {
                D.unsubscribe()
            }),
            E;
        try {
            if (W && jS9 && B !== "get" && B !== "head" && (E = await _S9(F, G)) !== 0) {
                let R = new Request(Q, {
                        method: "POST",
                        body: G,
                        duplex: "half"
                    }),
                    P;
                if (f1.isFormData(G) && (P = R.headers.get("content-type"))) F.setContentType(P);
                if (R.body) {
                    let [y, v] = K2A(E, ix(D2A(W)));
                    G = CF1(R.body, bw0, y, v)
                }
            }
            if (!f1.isString(V)) V = V ? "include" : "omit";
            let z = "credentials" in Request.prototype;
            H = new Request(Q, {
                ...K,
                signal: D,
                method: B.toUpperCase(),
                headers: F.normalize().toJSON(),
                body: G,
                duplex: "half",
                credentials: z ? V : void 0
            });
            let w = await fetch(H),
                N = EF1 && (X === "stream" || X === "response");
            if (EF1 && (J || N && C)) {
                let R = {};
                ["status", "statusText", "headers"].forEach((x) => {
                    R[x] = w[x]
                });
                let P = f1.toFiniteNumber(w.headers.get("content-length")),
                    [y, v] = J && K2A(P, ix(D2A(J), !0)) || [];
                w = new Response(CF1(w.body, bw0, y, () => {
                    v && v(), C && C()
                }), R)
            }
            X = X || "text";
            let q = await mkA[f1.findKey(mkA, X) || "text"](w, A);
            return !N && C && C(), await new Promise((R, P) => {
                kj(R, P, {
                    data: q,
                    headers: PY.from(w.headers),
                    status: w.status,
                    statusText: w.statusText,
                    config: A,
                    request: H
                })
            })
        } catch (z) {
            if (C && C(), z && z.name === "TypeError" && /fetch/i.test(z.message)) throw Object.assign(new NB("Network Error", NB.ERR_NETWORK, A, H), {
                cause: z.cause || z
            });
            throw NB.from(z, z && z.code, A, H)
        }
    })
});
var zF1, mw0 = (A) => `- ${A}`,
    kS9 = (A) => f1.isFunction(A) || A === null || A === !1,
    ckA;
var UF1 = L(() => {
    lG();
    Rw0();
    yw0();
    uw0();
    a$();
    zF1 = {
        http: Ow0,
        xhr: kw0,
        fetch: gw0
    };
    f1.forEach(zF1, (A, Q) => {
        if (A) {
            try {
                Object.defineProperty(A, "name", {
                    value: Q
                })
            } catch (B) {}
            Object.defineProperty(A, "adapterName", {
                value: Q
            })
        }
    });
    ckA = {
        getAdapter: (A) => {
            A = f1.isArray(A) ? A : [A];
            let {
                length: Q
            } = A, B, G, Z = {};
            for (let I = 0; I < Q; I++) {
                B = A[I];
                let Y;
                if (G = B, !kS9(B)) {
                    if (G = zF1[(Y = String(B)).toLowerCase()], G === void 0) throw new NB(`Unknown adapter '${Y}'`)
                }
                if (G) break;
                Z[Y || "#" + I] = G
            }
            if (!G) {
                let I = Object.entries(Z).map(([J, W]) => `adapter ${J} ` + (W === !1 ? "is not supported by the environment" : "is not available in the build")),
                    Y = Q ? I.length > 1 ? `since :
` + I.map(mw0).join(`
`) : " " + mw0(I[0]) : "as no adapter specified";
                throw new NB("There is no suitable adapter to dispatch the request " + Y, "ERR_NOT_SUPPORT")
            }
            return G
        },
        adapters: zF1
    }
});

function $F1(A) {
    if (A.cancelToken) A.cancelToken.throwIfRequested();
    if (A.signal && A.signal.aborted) throw new s$(null, A)
}

function pkA(A) {
    if ($F1(A), A.headers = PY.from(A.headers), A.data = wVA.call(A, A.transformRequest), ["post", "put", "patch"].indexOf(A.method) !== -1) A.headers.setContentType("application/x-www-form-urlencoded", !1);
    return ckA.getAdapter(A.adapter || J2A.adapter)(A).then(function(G) {
        return $F1(A), G.data = wVA.call(A, A.transformResponse, G), G.headers = PY.from(G.headers), G
    }, function(G) {
        if (!qVA(G)) {
            if ($F1(A), G && G.response) G.response.data = wVA.call(A, A.transformResponse, G.response), G.response.headers = PY.from(G.response.headers)
        }
        return Promise.reject(G)
    })
}
var dw0 = L(() => {
    y$0();
    TkA();
    qs();
    _j();
    UF1()
});

function yS9(A, Q, B) {
    if (typeof A !== "object") throw new NB("options must be an object", NB.ERR_BAD_OPTION_VALUE);
    let G = Object.keys(A),
        Z = G.length;
    while (Z-- > 0) {
        let I = G[Z],
            Y = Q[I];
        if (Y) {
            let J = A[I],
                W = J === void 0 || Y(J, I, A);
            if (W !== !0) throw new NB("option " + I + " must be " + W, NB.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (B !== !0) throw new NB("Unknown option " + I, NB.ERR_BAD_OPTION)
    }
}
var lkA, cw0, jVA;
var pw0 = L(() => {
    a$();
    lkA = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach((A, Q) => {
        lkA[A] = function(G) {
            return typeof G === A || "a" + (Q < 1 ? "n " : " ") + A
        }
    });
    cw0 = {};
    lkA.transitional = function(Q, B, G) {
        function Z(I, Y) {
            return "[Axios v" + Ps + "] Transitional option '" + I + "'" + Y + (G ? ". " + G : "")
        }
        return (I, Y, J) => {
            if (Q === !1) throw new NB(Z(Y, " has been removed" + (B ? " in " + B : "")), NB.ERR_DEPRECATED);
            if (B && !cw0[Y]) cw0[Y] = !0, console.warn(Z(Y, " has been deprecated since v" + B + " and will be removed in the near future"));
            return Q ? Q(I, Y, J) : !0
        }
    };
    lkA.spelling = function(Q) {
        return (B, G) => {
            return console.warn(`${G} is likely a misspelling of ${Q}`), !0
        }
    };
    jVA = {
        assertOptions: yS9,
        validators: lkA
    }
});
class SVA {
    constructor(A) {
        this.defaults = A, this.interceptors = {
            request: new fX1,
            response: new fX1
        }
    }
    async request(A, Q) {
        try {
            return await this._request(A, Q)
        } catch (B) {
            if (B instanceof Error) {
                let G = {};
                Error.captureStackTrace ? Error.captureStackTrace(G) : G = Error();
                let Z = G.stack ? G.stack.replace(/^.+\n/, "") : "";
                try {
                    if (!B.stack) B.stack = Z;
                    else if (Z && !String(B.stack).endsWith(Z.replace(/^.+\n.+\n/, ""))) B.stack += `
` + Z
                } catch (I) {}
            }
            throw B
        }
    }
    _request(A, Q) {
        if (typeof A === "string") Q = Q || {}, Q.url = A;
        else Q = A || {};
        Q = HR(this.defaults, Q);
        let {
            transitional: B,
            paramsSerializer: G,
            headers: Z
        } = Q;
        if (B !== void 0) jVA.assertOptions(B, {
            silentJSONParsing: yj.transitional(yj.boolean),
            forcedJSONParsing: yj.transitional(yj.boolean),
            clarifyTimeoutError: yj.transitional(yj.boolean)
        }, !1);
        if (G != null)
            if (f1.isFunction(G)) Q.paramsSerializer = {
                serialize: G
            };
            else jVA.assertOptions(G, {
                encode: yj.function,
                serialize: yj.function
            }, !0);
        if (Q.allowAbsoluteUrls !== void 0);
        else if (this.defaults.allowAbsoluteUrls !== void 0) Q.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
        else Q.allowAbsoluteUrls = !0;
        jVA.assertOptions(Q, {
            baseUrl: yj.spelling("baseURL"),
            withXsrfToken: yj.spelling("withXSRFToken")
        }, !0), Q.method = (Q.method || this.defaults.method || "get").toLowerCase();
        let I = Z && f1.merge(Z.common, Z[Q.method]);
        Z && f1.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (D) => {
            delete Z[D]
        }), Q.headers = PY.concat(I, Z);
        let Y = [],
            J = !0;
        this.interceptors.request.forEach(function(H) {
            if (typeof H.runWhen === "function" && H.runWhen(Q) === !1) return;
            J = J && H.synchronous, Y.unshift(H.fulfilled, H.rejected)
        });
        let W = [];
        this.interceptors.response.forEach(function(H) {
            W.push(H.fulfilled, H.rejected)
        });
        let X, F = 0,
            V;
        if (!J) {
            let D = [pkA.bind(this), void 0];
            D.unshift.apply(D, Y), D.push.apply(D, W), V = D.length, X = Promise.resolve(Q);
            while (F < V) X = X.then(D[F++], D[F++]);
            return X
        }
        V = Y.length;
        let K = Q;
        F = 0;
        while (F < V) {
            let D = Y[F++],
                H = Y[F++];
            try {
                K = D(K)
            } catch (C) {
                H.call(this, C);
                break
            }
        }
        try {
            X = pkA.call(this, K)
        } catch (D) {
            return Promise.reject(D)
        }
        F = 0, V = W.length;
        while (F < V) X = X.then(W[F++], W[F++]);
        return X
    }
    getUri(A) {
        A = HR(this.defaults, A);
        let Q = Ns(A.baseURL, A.url, A.allowAbsoluteUrls);
        return ws(Q, A.params, A.paramsSerializer)
    }
}
var yj, _VA;
var lw0 = L(() => {
    lG();
    MkA();
    q$0();
    dw0();
    gkA();
    SkA();
    pw0();
    _j();
    yj = jVA.validators;
    f1.forEach(["delete", "get", "head", "options"], function(Q) {
        SVA.prototype[Q] = function(B, G) {
            return this.request(HR(G || {}, {
                method: Q,
                url: B,
                data: (G || {}).data
            }))
        }
    });
    f1.forEach(["post", "put", "patch"], function(Q) {
        function B(G) {
            return function(I, Y, J) {
                return this.request(HR(J || {}, {
                    method: Q,
                    headers: G ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: I,
                    data: Y
                }))
            }
        }
        SVA.prototype[Q] = B(), SVA.prototype[Q + "Form"] = B(!0)
    });
    _VA = SVA
});
class wF1 {
    constructor(A) {
        if (typeof A !== "function") throw TypeError("executor must be a function.");
        let Q;
        this.promise = new Promise(function(Z) {
            Q = Z
        });
        let B = this;
        this.promise.then((G) => {
            if (!B._listeners) return;
            let Z = B._listeners.length;
            while (Z-- > 0) B._listeners[Z](G);
            B._listeners = null
        }), this.promise.then = (G) => {
            let Z, I = new Promise((Y) => {
                B.subscribe(Y), Z = Y
            }).then(G);
            return I.cancel = function() {
                B.unsubscribe(Z)
            }, I
        }, A(function(Z, I, Y) {
            if (B.reason) return;
            B.reason = new s$(Z, I, Y), Q(B.reason)
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(A) {
        if (this.reason) {
            A(this.reason);
            return
        }
        if (this._listeners) this._listeners.push(A);
        else this._listeners = [A]
    }
    unsubscribe(A) {
        if (!this._listeners) return;
        let Q = this._listeners.indexOf(A);
        if (Q !== -1) this._listeners.splice(Q, 1)
    }
    toAbortSignal() {
        let A = new AbortController,
            Q = (B) => {
                A.abort(B)
            };
        return this.subscribe(Q), A.signal.unsubscribe = () => this.unsubscribe(Q), A.signal
    }
    static source() {
        let A;
        return {
            token: new wF1(function(G) {
                A = G
            }),
            cancel: A
        }
    }
}
var iw0;
var nw0 = L(() => {
    qs();
    iw0 = wF1
});

function qF1(A) {
    return function(B) {
        return A.apply(null, B)
    }
}

function NF1(A) {
    return f1.isObject(A) && A.isAxiosError === !0
}
var aw0 = L(() => {
    lG()
});
var LF1, sw0;
var rw0 = L(() => {
    LF1 = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511
    };
    Object.entries(LF1).forEach(([A, Q]) => {
        LF1[Q] = A
    });
    sw0 = LF1
});

function ow0(A) {
    let Q = new _VA(A),
        B = FVA(_VA.prototype.request, Q);
    return f1.extend(B, _VA.prototype, Q, {
        allOwnKeys: !0
    }), f1.extend(B, Q, null, {
        allOwnKeys: !0
    }), B.create = function(Z) {
        return ow0(HR(A, Z))
    }, B
}
var CX, GQ;
var tw0 = L(() => {
    lG();
    lw0();
    gkA();
    TkA();
    cX1();
    qs();
    nw0();
    zVA();
    a$();
    aw0();
    _j();
    UF1();
    rw0();
    CX = ow0(J2A);
    CX.Axios = _VA;
    CX.CanceledError = s$;
    CX.CancelToken = iw0;
    CX.isCancel = qVA;
    CX.VERSION = Ps;
    CX.toFormData = gu;
    CX.AxiosError = NB;
    CX.Cancel = CX.CanceledError;
    CX.all = function(Q) {
        return Promise.all(Q)
    };
    CX.spread = qF1;
    CX.isAxiosError = NF1;
    CX.mergeConfig = HR;
    CX.AxiosHeaders = PY;
    CX.formToJSON = (A) => RkA(f1.isHTMLForm(A) ? new FormData(A) : A);
    CX.getAdapter = ckA.getAdapter;
    CX.HttpStatusCode = sw0;
    CX.default = CX;
    GQ = CX
});
var Ns3, ew0, Ls3, Ms3, Os3, Rs3, Ts3, Ps3, js3, Ss3, _s3, ks3, ys3, xs3, vs3, bs3;
var w3 = L(() => {
    tw0();
    ({
        Axios: Ns3,
        AxiosError: ew0,
        CanceledError: Ls3,
        isCancel: Ms3,
        CancelToken: Os3,
        VERSION: Rs3,
        all: Ts3,
        Cancel: Ps3,
        isAxiosError: js3,
        spread: Ss3,
        toFormData: _s3,
        AxiosHeaders: ks3,
        HttpStatusCode: ys3,
        formToJSON: xs3,
        getAdapter: vs3,
        mergeConfig: bs3
    } = GQ)
});
var FH = U((Aq0) => {
    Object.defineProperty(Aq0, "__esModule", {
        value: !0
    });
    Aq0.Log = Aq0.LogLevel = void 0;
    var xS9 = " DEBUG ",
        vS9 = "  INFO ",
        bS9 = "  WARN ",
        fS9 = " ERROR ";

    function ikA(A) {
        return A.unshift("[Statsig]"), A
    }
    Aq0.LogLevel = {
        None: 0,
        Error: 1,
        Warn: 2,
        Info: 3,
        Debug: 4
    };
    class js {
        static info(...A) {
            if (js.level >= Aq0.LogLevel.Info) console.info(vS9, ...ikA(A))
        }
        static debug(...A) {
            if (js.level >= Aq0.LogLevel.Debug) console.debug(xS9, ...ikA(A))
        }
        static warn(...A) {
            if (js.level >= Aq0.LogLevel.Warn) console.warn(bS9, ...ikA(A))
        }
        static error(...A) {
            if (js.level >= Aq0.LogLevel.Error) console.error(fS9, ...ikA(A))
        }
    }
    Aq0.Log = js;
    js.level = Aq0.LogLevel.Warn
});
var Ss = U((Iq0) => {
    var MF1, OF1, RF1;
    Object.defineProperty(Iq0, "__esModule", {
        value: !0
    });
    Iq0._getInstance = Iq0._getStatsigGlobalFlag = Iq0._getStatsigGlobal = void 0;
    var hS9 = FH(),
        gS9 = () => {
            return __STATSIG__ ? __STATSIG__ : nkA
        };
    Iq0._getStatsigGlobal = gS9;
    var uS9 = (A) => {
        return Iq0._getStatsigGlobal()[A]
    };
    Iq0._getStatsigGlobalFlag = uS9;
    var mS9 = (A) => {
        let Q = Iq0._getStatsigGlobal();
        if (!A) {
            if (Q.instances && Object.keys(Q.instances).length > 1) hS9.Log.warn("Call made to Statsig global instance without an SDK key but there is more than one client instance. If you are using mulitple clients, please specify the SDK key.");
            return Q.firstInstance
        }
        return Q.instances && Q.instances[A]
    };
    Iq0._getInstance = mS9;
    var E2A = "__STATSIG__",
        Bq0 = typeof window < "u" ? window : {},
        Gq0 = typeof global < "u" ? global : {},
        Zq0 = typeof globalThis < "u" ? globalThis : {},
        nkA = (RF1 = (OF1 = (MF1 = Bq0[E2A]) !== null && MF1 !== void 0 ? MF1 : Gq0[E2A]) !== null && OF1 !== void 0 ? OF1 : Zq0[E2A]) !== null && RF1 !== void 0 ? RF1 : {
            instance: Iq0._getInstance
        };
    Bq0[E2A] = nkA;
    Gq0[E2A] = nkA;
    Zq0[E2A] = nkA
});
var skA = U((Yq0) => {
    Object.defineProperty(Yq0, "__esModule", {
        value: !0
    });
    Yq0.Diagnostics = void 0;
    var akA = new Map,
        jF1 = "start",
        SF1 = "end",
        cS9 = "statsig::diagnostics";
    Yq0.Diagnostics = {
        _getMarkers: (A) => {
            return akA.get(A)
        },
        _markInitOverallStart: (A) => {
            U2A(A, z2A({}, jF1, "overall"))
        },
        _markInitOverallEnd: (A, Q, B) => {
            U2A(A, z2A({
                success: Q,
                error: Q ? void 0 : {
                    name: "InitializeError",
                    message: "Failed to initialize"
                },
                evaluationDetails: B
            }, SF1, "overall"))
        },
        _markInitNetworkReqStart: (A, Q) => {
            U2A(A, z2A(Q, jF1, "initialize", "network_request"))
        },
        _markInitNetworkReqEnd: (A, Q) => {
            U2A(A, z2A(Q, SF1, "initialize", "network_request"))
        },
        _markInitProcessStart: (A) => {
            U2A(A, z2A({}, jF1, "initialize", "process"))
        },
        _markInitProcessEnd: (A, Q) => {
            U2A(A, z2A(Q, SF1, "initialize", "process"))
        },
        _clearMarkers: (A) => {
            akA.delete(A)
        },
        _formatError(A) {
            if (!(A && typeof A === "object")) return;
            return {
                code: _F1(A, "code"),
                name: _F1(A, "name"),
                message: _F1(A, "message")
            }
        },
        _getDiagnosticsData(A, Q, B, G) {
            var Z;
            return {
                success: (A === null || A === void 0 ? void 0 : A.ok) === !0,
                statusCode: A === null || A === void 0 ? void 0 : A.status,
                sdkRegion: (Z = A === null || A === void 0 ? void 0 : A.headers) === null || Z === void 0 ? void 0 : Z.get("x-statsig-region"),
                isDelta: B.includes('"is_delta":true') === !0 ? !0 : void 0,
                attempt: Q,
                error: Yq0.Diagnostics._formatError(G)
            }
        },
        _enqueueDiagnosticsEvent(A, Q, B, G) {
            let Z = Yq0.Diagnostics._getMarkers(B);
            if (Z == null || Z.length <= 0) return -1;
            let I = Z[Z.length - 1].timestamp - Z[0].timestamp;
            Yq0.Diagnostics._clearMarkers(B);
            let Y = pS9(A, {
                context: "initialize",
                markers: Z.slice(),
                statsigOptions: G
            });
            return Q.enqueue(Y), I
        }
    };

    function z2A(A, Q, B, G) {
        return Object.assign({
            key: B,
            action: Q,
            step: G,
            timestamp: Date.now()
        }, A)
    }

    function pS9(A, Q) {
        return {
            eventName: cS9,
            user: A,
            value: null,
            metadata: Q,
            time: Date.now()
        }
    }

    function U2A(A, Q) {
        var B;
        let G = (B = akA.get(A)) !== null && B !== void 0 ? B : [];
        G.push(Q), akA.set(A, G)
    }

    function _F1(A, Q) {
        if (Q in A) return A[Q];
        return
    }
});
var rkA = U((Jq0) => {
    Object.defineProperty(Jq0, "__esModule", {
        value: !0
    });
    Jq0._isTypeMatch = Jq0._typeOf = void 0;

    function lS9(A) {
        return Array.isArray(A) ? "array" : typeof A
    }
    Jq0._typeOf = lS9;

    function iS9(A, Q) {
        let B = (G) => Array.isArray(G) ? "array" : typeof G;
        return B(A) === B(Q)
    }
    Jq0._isTypeMatch = iS9
});
var $2A = U((Xq0) => {
    Object.defineProperty(Xq0, "__esModule", {
        value: !0
    });
    Xq0._getSortedObject = Xq0._DJB2Object = Xq0._DJB2 = void 0;
    var aS9 = rkA(),
        sS9 = (A) => {
            let Q = 0;
            for (let B = 0; B < A.length; B++) {
                let G = A.charCodeAt(B);
                Q = (Q << 5) - Q + G, Q = Q & Q
            }
            return String(Q >>> 0)
        };
    Xq0._DJB2 = sS9;
    var rS9 = (A, Q) => {
        return Xq0._DJB2(JSON.stringify(Xq0._getSortedObject(A, Q)))
    };
    Xq0._DJB2Object = rS9;
    var oS9 = (A, Q) => {
        if (A == null) return null;
        let B = Object.keys(A).sort(),
            G = {};
        return B.forEach((Z) => {
            let I = A[Z];
            if (Q === 0 || (0, aS9._typeOf)(I) !== "object") {
                G[Z] = I;
                return
            }
            G[Z] = Xq0._getSortedObject(I, Q != null ? Q - 1 : Q)
        }), G
    };
    Xq0._getSortedObject = oS9
});
var yVA = U((Dq0) => {
    Object.defineProperty(Dq0, "__esModule", {
        value: !0
    });
    Dq0._getStorageKey = Dq0._getUserStorageKey = void 0;
    var Vq0 = $2A();

    function Kq0(A, Q, B) {
        var G;
        if (B) return B(A, Q);
        let Z = Q && Q.customIDs ? Q.customIDs : {},
            I = [`uid:${(G=Q===null||Q===void 0?void 0:Q.userID)!==null&&G!==void 0?G:""}`, `cids:${Object.keys(Z).sort((Y,J)=>Y.localeCompare(J)).map((Y)=>`${Y}-${Z[Y]}`).join(",")}`, `k:${A}`];
        return (0, Vq0._DJB2)(I.join("|"))
    }
    Dq0._getUserStorageKey = Kq0;

    function eS9(A, Q, B) {
        if (Q) return Kq0(A, Q, B);
        return (0, Vq0._DJB2)(`k:${A}`)
    }
    Dq0._getStorageKey = eS9
});
var xVA = U((Cq0) => {
    Object.defineProperty(Cq0, "__esModule", {
        value: !0
    });
    Cq0.NetworkParam = Cq0.NetworkDefault = Cq0.Endpoint = void 0;
    Cq0.Endpoint = {
        _initialize: "initialize",
        _rgstr: "rgstr",
        _download_config_specs: "download_config_specs"
    };
    Cq0.NetworkDefault = {
        [Cq0.Endpoint._rgstr]: "https://prodregistryv2.org/v1",
        [Cq0.Endpoint._initialize]: "https://featureassets.org/v1",
        [Cq0.Endpoint._download_config_specs]: "https://api.statsigcdn.com/v1"
    };
    Cq0.NetworkParam = {
        EventCount: "ec",
        SdkKey: "k",
        SdkType: "st",
        SdkVersion: "sv",
        Time: "t",
        SessionID: "sid",
        StatsigEncoded: "se",
        IsGzipped: "gz"
    }
});
var _s = U((zq0) => {
    Object.defineProperty(zq0, "__esModule", {
        value: !0
    });
    zq0._getCurrentPageUrlSafe = zq0._addDocumentEventListenerSafe = zq0._addWindowEventListenerSafe = zq0._isServerEnv = zq0._getDocumentSafe = zq0._getWindowSafe = void 0;
    var B_9 = () => {
        return typeof window < "u" ? window : null
    };
    zq0._getWindowSafe = B_9;
    var G_9 = () => {
        var A;
        let Q = zq0._getWindowSafe();
        return (A = Q === null || Q === void 0 ? void 0 : Q.document) !== null && A !== void 0 ? A : null
    };
    zq0._getDocumentSafe = G_9;
    var Z_9 = () => {
        if (zq0._getDocumentSafe() !== null) return !1;
        let A = typeof process < "u" && process.versions != null && process.versions.node != null;
        return typeof EdgeRuntime === "string" || A
    };
    zq0._isServerEnv = Z_9;
    var I_9 = (A, Q) => {
        let B = zq0._getWindowSafe();
        if (typeof(B === null || B === void 0 ? void 0 : B.addEventListener) === "function") B.addEventListener(A, Q)
    };
    zq0._addWindowEventListenerSafe = I_9;
    var Y_9 = (A, Q) => {
        let B = zq0._getDocumentSafe();
        if (typeof(B === null || B === void 0 ? void 0 : B.addEventListener) === "function") B.addEventListener(A, Q)
    };
    zq0._addDocumentEventListenerSafe = Y_9;
    var J_9 = () => {
        var A;
        try {
            return (A = zq0._getWindowSafe()) === null || A === void 0 ? void 0 : A.location.href.split(/[?#]/)[0]
        } catch (Q) {
            return
        }
    };
    zq0._getCurrentPageUrlSafe = J_9
});
var xF1 = U((Nq0) => {
    Object.defineProperty(Nq0, "__esModule", {
        value: !0
    });
    Nq0._createLayerParameterExposure = Nq0._createConfigExposure = Nq0._mapExposures = Nq0._createGateExposure = Nq0._isExposureEvent = void 0;
    var $q0 = "statsig::config_exposure",
        wq0 = "statsig::gate_exposure",
        qq0 = "statsig::layer_exposure",
        yF1 = (A, Q, B, G, Z) => {
            if (B.bootstrapMetadata) G.bootstrapMetadata = B.bootstrapMetadata;
            return {
                eventName: A,
                user: Q,
                value: null,
                metadata: C_9(B, G),
                secondaryExposures: Z,
                time: Date.now()
            }
        },
        V_9 = ({
            eventName: A
        }) => {
            return A === wq0 || A === $q0 || A === qq0
        };
    Nq0._isExposureEvent = V_9;
    var K_9 = (A, Q, B) => {
        var G, Z, I;
        let Y = {
            gate: Q.name,
            gateValue: String(Q.value),
            ruleID: Q.ruleID
        };
        if (((G = Q.__evaluation) === null || G === void 0 ? void 0 : G.version) != null) Y.configVersion = Q.__evaluation.version;
        return yF1(wq0, A, Q.details, Y, AyA((I = (Z = Q.__evaluation) === null || Z === void 0 ? void 0 : Z.secondary_exposures) !== null && I !== void 0 ? I : [], B))
    };
    Nq0._createGateExposure = K_9;

    function AyA(A, Q) {
        return A.map((B) => {
            if (typeof B === "string") return (Q !== null && Q !== void 0 ? Q : {})[B];
            return B
        }).filter((B) => B != null)
    }
    Nq0._mapExposures = AyA;
    var D_9 = (A, Q, B) => {
        var G, Z, I, Y;
        let J = {
            config: Q.name,
            ruleID: Q.ruleID
        };
        if (((G = Q.__evaluation) === null || G === void 0 ? void 0 : G.version) != null) J.configVersion = Q.__evaluation.version;
        if (((Z = Q.__evaluation) === null || Z === void 0 ? void 0 : Z.passed) != null) J.rulePassed = String(Q.__evaluation.passed);
        return yF1($q0, A, Q.details, J, AyA((Y = (I = Q.__evaluation) === null || I === void 0 ? void 0 : I.secondary_exposures) !== null && Y !== void 0 ? Y : [], B))
    };
    Nq0._createConfigExposure = D_9;
    var H_9 = (A, Q, B, G) => {
        var Z, I, Y, J;
        let W = Q.__evaluation,
            X = ((Z = W === null || W === void 0 ? void 0 : W.explicit_parameters) === null || Z === void 0 ? void 0 : Z.includes(B)) === !0,
            F = "",
            V = (I = W === null || W === void 0 ? void 0 : W.undelegated_secondary_exposures) !== null && I !== void 0 ? I : [];
        if (X) F = (Y = W.allocated_experiment_name) !== null && Y !== void 0 ? Y : "", V = W.secondary_exposures;
        let K = {
            config: Q.name,
            parameterName: B,
            ruleID: Q.ruleID,
            allocatedExperiment: F,
            isExplicitParameter: String(X)
        };
        if (((J = Q.__evaluation) === null || J === void 0 ? void 0 : J.version) != null) K.configVersion = Q.__evaluation.version;
        return yF1(qq0, A, Q.details, K, AyA(V, G))
    };
    Nq0._createLayerParameterExposure = H_9;
    var C_9 = (A, Q) => {
        if (Q.reason = A.reason, A.lcut) Q.lcut = String(A.lcut);
        if (A.receivedAt) Q.receivedAt = String(A.receivedAt);
        return Q
    }
});
var nx = U((Mq0) => {
    Object.defineProperty(Mq0, "__esModule", {
        value: !0
    });
    Mq0._setObjectInStorage = Mq0._getObjectFromStorage = Mq0.Storage = void 0;
    var w_9 = FH(),
        q_9 = _s(),
        vVA = {},
        bF1 = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "InMemory",
            getItem: (A) => vVA[A] ? vVA[A] : null,
            setItem: (A, Q) => {
                vVA[A] = Q
            },
            removeItem: (A) => {
                delete vVA[A]
            },
            getAllKeys: () => Object.keys(vVA)
        },
        QyA = null;
    try {
        let A = (0, q_9._getWindowSafe)();
        if (A && A.localStorage && typeof A.localStorage.getItem === "function") QyA = {
            isReady: () => !0,
            isReadyResolver: () => null,
            getProviderName: () => "LocalStorage",
            getItem: (Q) => A.localStorage.getItem(Q),
            setItem: (Q, B) => A.localStorage.setItem(Q, B),
            removeItem: (Q) => A.localStorage.removeItem(Q),
            getAllKeys: () => Object.keys(A.localStorage)
        }
    } catch (A) {
        w_9.Log.warn("Failed to setup localStorageProvider.")
    }
    var vF1 = QyA !== null && QyA !== void 0 ? QyA : bF1,
        xj = vF1;

    function N_9(A) {
        try {
            return A()
        } catch (Q) {
            if (Q instanceof Error && Q.name === "SecurityError") return Mq0.Storage._setProvider(bF1), null;
            throw Q
        }
    }
    Mq0.Storage = {
        isReady: () => xj.isReady(),
        isReadyResolver: () => xj.isReadyResolver(),
        getProviderName: () => xj.getProviderName(),
        getItem: (A) => N_9(() => xj.getItem(A)),
        setItem: (A, Q) => xj.setItem(A, Q),
        removeItem: (A) => xj.removeItem(A),
        getAllKeys: () => xj.getAllKeys(),
        _setProvider: (A) => {
            vF1 = A, xj = A
        },
        _setDisabled: (A) => {
            if (A) xj = bF1;
            else xj = vF1
        }
    };

    function L_9(A) {
        let Q = Mq0.Storage.getItem(A);
        return JSON.parse(Q !== null && Q !== void 0 ? Q : "null")
    }
    Mq0._getObjectFromStorage = L_9;

    function M_9(A, Q) {
        Mq0.Storage.setItem(A, JSON.stringify(Q))
    }
    Mq0._setObjectInStorage = M_9
});
var fF1 = U((Tq0) => {
    Object.defineProperty(Tq0, "__esModule", {
        value: !0
    });
    Tq0.UrlConfiguration = void 0;
    var GyA = xVA(),
        R_9 = {
            [GyA.Endpoint._initialize]: "i",
            [GyA.Endpoint._rgstr]: "e",
            [GyA.Endpoint._download_config_specs]: "d"
        };
    class Rq0 {
        constructor(A, Q, B, G) {
            if (this.customUrl = null, this.fallbackUrls = null, this.endpoint = A, this.endpointDnsKey = R_9[A], Q) this.customUrl = Q;
            if (!Q && B) this.customUrl = B.endsWith("/") ? `${B}${A}` : `${B}/${A}`;
            if (G) this.fallbackUrls = G;
            let Z = GyA.NetworkDefault[A];
            this.defaultUrl = `${Z}/${A}`
        }
        getUrl() {
            var A;
            return (A = this.customUrl) !== null && A !== void 0 ? A : this.defaultUrl
        }
    }
    Tq0.UrlConfiguration = Rq0
});
var YyA = U((Sq0) => {
    Object.defineProperty(Sq0, "__esModule", {
        value: !0
    });
    Sq0._notifyVisibilityChanged = Sq0._subscribeToVisiblityChanged = Sq0._isUnloading = Sq0._isCurrentlyVisible = void 0;
    var ZyA = _s(),
        IyA = "foreground",
        gF1 = "background",
        jq0 = [],
        hF1 = IyA,
        uF1 = !1,
        T_9 = () => {
            return hF1 === IyA
        };
    Sq0._isCurrentlyVisible = T_9;
    var P_9 = () => uF1;
    Sq0._isUnloading = P_9;
    var j_9 = (A) => {
        jq0.unshift(A)
    };