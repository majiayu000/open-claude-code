/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: git_012.js
 * 处理时间: 2025-12-09T03:41:37.397Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 12/34
 * Lines: 138847 - 140346 (1500 lines)
 * Original file: cli.js
 */

            case "csiso2022kr":
            case "hz-gb-2312":
            case "iso-2022-cn":
            case "iso-2022-cn-ext":
            case "iso-2022-kr":
            case "replacement":
                return "replacement";
            case "unicodefffe":
            case "utf-16be":
                return "UTF-16BE";
            case "csunicode":
            case "iso-10646-ucs-2":
            case "ucs-2":
            case "unicode":
            case "unicodefeff":
            case "utf-16":
            case "utf-16le":
                return "UTF-16LE";
            case "x-user-defined":
                return "x-user-defined";
            default:
                return "failure"
        }
    }
    Q1B.exports = {
        getEncoding: xm8
    }
});
var F1B = moduleWrapper((lN7, X1B) => {
    var {
        kState: o5A,
        kError: Ty1,
        kResult: G1B,
        kAborted: MEA,
        kLastProgressEventFired: Py1
    } = Ry1(), {
        ProgressEvent: vm8
    } = A1B(), {
        getEncoding: Z1B
    } = B1B(), {
        serializeAMimeType: bm8,
        parseMIMEType: I1B
    } = tz(), {
        types: fm8
    } = nodeRequire("node:util"), {
        StringDecoder: Y1B
    } = nodeRequire("string_decoder"), {
        btoa: J1B
    } = nodeRequire("node:buffer"), hm8 = {
        enumerable: !0,
        writable: !1,
        configurable: !1
    };

    function gm8(A, Q, B, G) {
        if (A[o5A] === "loading") throw new DOMException("Invalid state", "InvalidStateError");
        A[o5A] = "loading", A[G1B] = null, A[Ty1] = null;
        let I = Q.stream().getReader(),
            Y = [],
            J = I.read(),
            W = !0;
        (async () => {
            while (!A[MEA]) try {
                let {
                    done: X,
                    value: F
                } = await J;
                if (W && !A[MEA]) queueMicrotask(() => {
                    Zc("loadstart", A)
                });
                if (W = !1, !X && fm8.isUint8Array(F)) {
                    if (Y.push(F), (A[Py1] === void 0 || Date.now() - A[Py1] >= 50) && !A[MEA]) A[Py1] = Date.now(), queueMicrotask(() => {
                        Zc("progress", A)
                    });
                    J = I.read()
                } else if (X) {
                    queueMicrotask(() => {
                        A[o5A] = "done";
                        try {
                            let V = um8(Y, B, Q.type, G);
                            if (A[MEA]) return;
                            A[G1B] = V, Zc("load", A)
                        } catch (V) {
                            A[Ty1] = V, Zc("error", A)
                        }
                        if (A[o5A] !== "loading") Zc("loadend", A)
                    });
                    break
                }
            } catch (X) {
                if (A[MEA]) return;
                queueMicrotask(() => {
                    if (A[o5A] = "done", A[Ty1] = X, Zc("error", A), A[o5A] !== "loading") Zc("loadend", A)
                });
                break
            }
        })()
    }

    function Zc(A, Q) {
        let B = new vm8(A, {
            bubbles: !1,
            cancelable: !1
        });
        Q.dispatchEvent(B)
    }

    function um8(A, Q, B, G) {
        switch (Q) {
            case "DataURL": {
                let Z = "data:",
                    I = I1B(B || "application/octet-stream");
                if (I !== "failure") Z += bm8(I);
                Z += ";base64,";
                let Y = new Y1B("latin1");
                for (let J of A) Z += J1B(Y.write(J));
                return Z += J1B(Y.end()), Z
            }
            case "Text": {
                let Z = "failure";
                if (G) Z = Z1B(G);
                if (Z === "failure" && B) {
                    let I = I1B(B);
                    if (I !== "failure") Z = Z1B(I.parameters.get("charset"))
                }
                if (Z === "failure") Z = "UTF-8";
                return mm8(A, Z)
            }
            case "ArrayBuffer":
                return W1B(A).buffer;
            case "BinaryString": {
                let Z = "",
                    I = new Y1B("latin1");
                for (let Y of A) Z += I.write(Y);
                return Z += I.end(), Z
            }
        }
    }

    function mm8(A, Q) {
        let B = W1B(A),
            G = dm8(B),
            Z = 0;
        if (G !== null) Q = G, Z = G === "UTF-8" ? 3 : 2;
        let I = B.slice(Z);
        return new TextDecoder(Q).decode(I)
    }

    function dm8(A) {
        let [Q, B, G] = A;
        if (Q === 239 && B === 187 && G === 191) return "UTF-8";
        else if (Q === 254 && B === 255) return "UTF-16BE";
        else if (Q === 255 && B === 254) return "UTF-16LE";
        return null
    }

    function W1B(A) {
        let Q = A.reduce((G, Z) => {
                return G + Z.byteLength
            }, 0),
            B = 0;
        return A.reduce((G, Z) => {
            return G.set(Z, B), B += Z.byteLength, G
        }, new Uint8Array(Q))
    }
    X1B.exports = {
        staticPropertyDescriptors: hm8,
        readOperation: gm8,
        fireAProgressEvent: Zc
    }
});
var H1B = moduleWrapper((iN7, D1B) => {
    var {
        staticPropertyDescriptors: t5A,
        readOperation: spA,
        fireAProgressEvent: V1B
    } = F1B(), {
        kState: To,
        kError: K1B,
        kResult: rpA,
        kEvents: $7,
        kAborted: cm8
    } = Ry1(), {
        webidl: LG
    } = FD(), {
        kEnumerableProperty: QU
    } = M6();
    class QG extends EventTarget {
        constructor() {
            super();
            this[To] = "empty", this[rpA] = null, this[K1B] = null, this[$7] = {
                loadend: null,
                error: null,
                abort: null,
                load: null,
                progress: null,
                loadstart: null
            }
        }
        readAsArrayBuffer(A) {
            LG.brandCheck(this, QG), LG.argumentLengthCheck(arguments, 1, "FileReader.readAsArrayBuffer"), A = LG.converters.Blob(A, {
                strict: !1
            }), spA(this, A, "ArrayBuffer")
        }
        readAsBinaryString(A) {
            LG.brandCheck(this, QG), LG.argumentLengthCheck(arguments, 1, "FileReader.readAsBinaryString"), A = LG.converters.Blob(A, {
                strict: !1
            }), spA(this, A, "BinaryString")
        }
        readAsText(A, Q = void 0) {
            if (LG.brandCheck(this, QG), LG.argumentLengthCheck(arguments, 1, "FileReader.readAsText"), A = LG.converters.Blob(A, {
                    strict: !1
                }), Q !== void 0) Q = LG.converters.DOMString(Q, "FileReader.readAsText", "encoding");
            spA(this, A, "Text", Q)
        }
        readAsDataURL(A) {
            LG.brandCheck(this, QG), LG.argumentLengthCheck(arguments, 1, "FileReader.readAsDataURL"), A = LG.converters.Blob(A, {
                strict: !1
            }), spA(this, A, "DataURL")
        }
        abort() {
            if (this[To] === "empty" || this[To] === "done") {
                this[rpA] = null;
                return
            }
            if (this[To] === "loading") this[To] = "done", this[rpA] = null;
            if (this[cm8] = !0, V1B("abort", this), this[To] !== "loading") V1B("loadend", this)
        }
        get readyState() {
            switch (LG.brandCheck(this, QG), this[To]) {
                case "empty":
                    return this.EMPTY;
                case "loading":
                    return this.LOADING;
                case "done":
                    return this.DONE
            }
        }
        get result() {
            return LG.brandCheck(this, QG), this[rpA]
        }
        get error() {
            return LG.brandCheck(this, QG), this[K1B]
        }
        get onloadend() {
            return LG.brandCheck(this, QG), this[$7].loadend
        }
        set onloadend(A) {
            if (LG.brandCheck(this, QG), this[$7].loadend) this.removeEventListener("loadend", this[$7].loadend);
            if (typeof A === "function") this[$7].loadend = A, this.addEventListener("loadend", A);
            else this[$7].loadend = null
        }
        get onerror() {
            return LG.brandCheck(this, QG), this[$7].error
        }
        set onerror(A) {
            if (LG.brandCheck(this, QG), this[$7].error) this.removeEventListener("error", this[$7].error);
            if (typeof A === "function") this[$7].error = A, this.addEventListener("error", A);
            else this[$7].error = null
        }
        get onloadstart() {
            return LG.brandCheck(this, QG), this[$7].loadstart
        }
        set onloadstart(A) {
            if (LG.brandCheck(this, QG), this[$7].loadstart) this.removeEventListener("loadstart", this[$7].loadstart);
            if (typeof A === "function") this[$7].loadstart = A, this.addEventListener("loadstart", A);
            else this[$7].loadstart = null
        }
        get onprogress() {
            return LG.brandCheck(this, QG), this[$7].progress
        }
        set onprogress(A) {
            if (LG.brandCheck(this, QG), this[$7].progress) this.removeEventListener("progress", this[$7].progress);
            if (typeof A === "function") this[$7].progress = A, this.addEventListener("progress", A);
            else this[$7].progress = null
        }
        get onload() {
            return LG.brandCheck(this, QG), this[$7].load
        }
        set onload(A) {
            if (LG.brandCheck(this, QG), this[$7].load) this.removeEventListener("load", this[$7].load);
            if (typeof A === "function") this[$7].load = A, this.addEventListener("load", A);
            else this[$7].load = null
        }
        get onabort() {
            return LG.brandCheck(this, QG), this[$7].abort
        }
        set onabort(A) {
            if (LG.brandCheck(this, QG), this[$7].abort) this.removeEventListener("abort", this[$7].abort);
            if (typeof A === "function") this[$7].abort = A, this.addEventListener("abort", A);
            else this[$7].abort = null
        }
    }
    QG.EMPTY = QG.prototype.EMPTY = 0;
    QG.LOADING = QG.prototype.LOADING = 1;
    QG.DONE = QG.prototype.DONE = 2;
    Object.defineProperties(QG.prototype, {
        EMPTY: t5A,
        LOADING: t5A,
        DONE: t5A,
        readAsArrayBuffer: QU,
        readAsBinaryString: QU,
        readAsText: QU,
        readAsDataURL: QU,
        abort: QU,
        readyState: QU,
        result: QU,
        error: QU,
        onloadstart: QU,
        onprogress: QU,
        onload: QU,
        onabort: QU,
        onerror: QU,
        onloadend: QU,
        [Symbol.toStringTag]: {
            value: "FileReader",
            writable: !1,
            enumerable: !1,
            configurable: !0
        }
    });
    Object.defineProperties(QG, {
        EMPTY: t5A,
        LOADING: t5A,
        DONE: t5A
    });
    D1B.exports = {
        FileReader: QG
    }
});
var opA = moduleWrapper((nN7, C1B) => {
    C1B.exports = {
        kConstruct: iI().kConstruct
    }
});
var U1B = moduleWrapper((aN7, z1B) => {
    var pm8 = nodeRequire("node:assert"),
        {
            URLSerializer: E1B
        } = tz(),
        {
            isValidHeaderName: lm8
        } = Rw();

    function im8(A, Q, B = !1) {
        let G = E1B(A, B),
            Z = E1B(Q, B);
        return G === Z
    }

    function nm8(A) {
        pm8(A !== null);
        let Q = [];
        for (let B of A.split(","))
            if (B = B.trim(), lm8(B)) Q.push(B);
        return Q
    }
    z1B.exports = {
        urlEquals: im8,
        getFieldValues: nm8
    }
});
var q1B = moduleWrapper((sN7, w1B) => {
    var {
        kConstruct: am8
    } = opA(), {
        urlEquals: sm8,
        getFieldValues: jy1
    } = U1B(), {
        kEnumerableProperty: Po,
        isDisturbed: rm8
    } = M6(), {
        webidl: R9
    } = FD(), {
        Response: om8,
        cloneResponse: tm8,
        fromInnerResponse: em8
    } = wEA(), {
        Request: Nb,
        fromInnerRequest: Ad8
    } = r5A(), {
        kState: rR
    } = id(), {
        fetching: Qd8
    } = NEA(), {
        urlIsHttpHttpsScheme: tpA,
        createDeferredPromise: e5A,
        readAllBytes: Bd8
    } = Rw(), Sy1 = nodeRequire("node:assert");
    class G_ {
        #A;
        constructor() {
            if (arguments[0] !== am8) R9.illegalConstructor();
            R9.util.markAsUncloneable(this), this.#A = arguments[1]
        }
        async match(A, Q = {}) {
            R9.brandCheck(this, G_);
            let B = "Cache.match";
            R9.argumentLengthCheck(arguments, 1, B), A = R9.converters.RequestInfo(A, B, "request"), Q = R9.converters.CacheQueryOptions(Q, B, "options");
            let G = this.#G(A, Q, 1);
            if (G.length === 0) return;
            return G[0]
        }
        async matchAll(A = void 0, Q = {}) {
            R9.brandCheck(this, G_);
            let B = "Cache.matchAll";
            if (A !== void 0) A = R9.converters.RequestInfo(A, B, "request");
            return Q = R9.converters.CacheQueryOptions(Q, B, "options"), this.#G(A, Q)
        }
        async add(A) {
            R9.brandCheck(this, G_);
            let Q = "Cache.add";
            R9.argumentLengthCheck(arguments, 1, Q), A = R9.converters.RequestInfo(A, Q, "request");
            let B = [A];
            return await this.addAll(B)
        }
        async addAll(A) {
            R9.brandCheck(this, G_);
            let Q = "Cache.addAll";
            R9.argumentLengthCheck(arguments, 1, Q);
            let B = [],
                G = [];
            for (let V of A) {
                if (V === void 0) throw R9.errors.conversionFailed({
                    prefix: Q,
                    argument: "Argument 1",
                    types: ["undefined is not allowed"]
                });
                if (V = R9.converters.RequestInfo(V), typeof V === "string") continue;
                let K = V[rR];
                if (!tpA(K.url) || K.method !== "GET") throw R9.errors.exception({
                    header: Q,
                    message: "Expected http/s scheme when method is not GET."
                })
            }
            let Z = [];
            for (let V of A) {
                let K = new Nb(V)[rR];
                if (!tpA(K.url)) throw R9.errors.exception({
                    header: Q,
                    message: "Expected http/s scheme."
                });
                K.initiator = "fetch", K.destination = "subresource", G.push(K);
                let D = e5A();
                Z.push(Qd8({
                    request: K,
                    processResponse(H) {
                        if (H.type === "error" || H.status === 206 || H.status < 200 || H.status > 299) D.reject(R9.errors.exception({
                            header: "Cache.addAll",
                            message: "Received an invalid status code or the request failed."
                        }));
                        else if (H.headersList.contains("vary")) {
                            let C = jy1(H.headersList.get("vary"));
                            for (let E of C)
                                if (E === "*") {
                                    D.reject(R9.errors.exception({
                                        header: "Cache.addAll",
                                        message: "invalid vary field value"
                                    }));
                                    for (let z of Z) z.abort();
                                    return
                                }
                        }
                    },
                    processResponseEndOfBody(H) {
                        if (H.aborted) {
                            D.reject(new DOMException("aborted", "AbortError"));
                            return
                        }
                        D.resolve(H)
                    }
                })), B.push(D.promise)
            }
            let Y = await Promise.all(B),
                J = [],
                W = 0;
            for (let V of Y) {
                let K = {
                    type: "put",
                    request: G[W],
                    response: V
                };
                J.push(K), W++
            }
            let X = e5A(),
                F = null;
            try {
                this.#Q(J)
            } catch (V) {
                F = V
            }
            return queueMicrotask(() => {
                if (F === null) X.resolve(void 0);
                else X.reject(F)
            }), X.promise
        }
        async put(A, Q) {
            R9.brandCheck(this, G_);
            let B = "Cache.put";
            R9.argumentLengthCheck(arguments, 2, B), A = R9.converters.RequestInfo(A, B, "request"), Q = R9.converters.Response(Q, B, "response");
            let G = null;
            if (A instanceof Nb) G = A[rR];
            else G = new Nb(A)[rR];
            if (!tpA(G.url) || G.method !== "GET") throw R9.errors.exception({
                header: B,
                message: "Expected an http/s scheme when method is not GET"
            });
            let Z = Q[rR];
            if (Z.status === 206) throw R9.errors.exception({
                header: B,
                message: "Got 206 status"
            });
            if (Z.headersList.contains("vary")) {
                let K = jy1(Z.headersList.get("vary"));
                for (let D of K)
                    if (D === "*") throw R9.errors.exception({
                        header: B,
                        message: "Got * vary field value"
                    })
            }
            if (Z.body && (rm8(Z.body.stream) || Z.body.stream.locked)) throw R9.errors.exception({
                header: B,
                message: "Response body is locked or disturbed"
            });
            let I = tm8(Z),
                Y = e5A();
            if (Z.body != null) {
                let D = Z.body.stream.getReader();
                Bd8(D).then(Y.resolve, Y.reject)
            } else Y.resolve(void 0);
            let J = [],
                W = {
                    type: "put",
                    request: G,
                    response: I
                };
            J.push(W);
            let X = await Y.promise;
            if (I.body != null) I.body.source = X;
            let F = e5A(),
                V = null;
            try {
                this.#Q(J)
            } catch (K) {
                V = K
            }
            return queueMicrotask(() => {
                if (V === null) F.resolve();
                else F.reject(V)
            }), F.promise
        }
        async delete(A, Q = {}) {
            R9.brandCheck(this, G_);
            let B = "Cache.delete";
            R9.argumentLengthCheck(arguments, 1, B), A = R9.converters.RequestInfo(A, B, "request"), Q = R9.converters.CacheQueryOptions(Q, B, "options");
            let G = null;
            if (A instanceof Nb) {
                if (G = A[rR], G.method !== "GET" && !Q.ignoreMethod) return !1
            } else Sy1(typeof A === "string"), G = new Nb(A)[rR];
            let Z = [],
                I = {
                    type: "delete",
                    request: G,
                    options: Q
                };
            Z.push(I);
            let Y = e5A(),
                J = null,
                W;
            try {
                W = this.#Q(Z)
            } catch (X) {
                J = X
            }
            return queueMicrotask(() => {
                if (J === null) Y.resolve(!!W?.length);
                else Y.reject(J)
            }), Y.promise
        }
        async keys(A = void 0, Q = {}) {
            R9.brandCheck(this, G_);
            let B = "Cache.keys";
            if (A !== void 0) A = R9.converters.RequestInfo(A, B, "request");
            Q = R9.converters.CacheQueryOptions(Q, B, "options");
            let G = null;
            if (A !== void 0) {
                if (A instanceof Nb) {
                    if (G = A[rR], G.method !== "GET" && !Q.ignoreMethod) return []
                } else if (typeof A === "string") G = new Nb(A)[rR]
            }
            let Z = e5A(),
                I = [];
            if (A === void 0)
                for (let Y of this.#A) I.push(Y[0]);
            else {
                let Y = this.#B(G, Q);
                for (let J of Y) I.push(J[0])
            }
            return queueMicrotask(() => {
                let Y = [];
                for (let J of I) {
                    let W = Ad8(J, new AbortController().signal, "immutable");
                    Y.push(W)
                }
                Z.resolve(Object.freeze(Y))
            }), Z.promise
        }
        #Q(A) {
            let Q = this.#A,
                B = [...Q],
                G = [],
                Z = [];
            try {
                for (let I of A) {
                    if (I.type !== "delete" && I.type !== "put") throw R9.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: 'operation type does not match "delete" or "put"'
                    });
                    if (I.type === "delete" && I.response != null) throw R9.errors.exception({
                        header: "Cache.#batchCacheOperations",
                        message: "delete operation should not have an associated response"
                    });
                    if (this.#B(I.request, I.options, G).length) throw new DOMException("???", "InvalidStateError");
                    let Y;
                    if (I.type === "delete") {
                        if (Y = this.#B(I.request, I.options), Y.length === 0) return [];
                        for (let J of Y) {
                            let W = Q.indexOf(J);
                            Sy1(W !== -1), Q.splice(W, 1)
                        }
                    } else if (I.type === "put") {
                        if (I.response == null) throw R9.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "put operation should have an associated response"
                        });
                        let J = I.request;
                        if (!tpA(J.url)) throw R9.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "expected http or https scheme"
                        });
                        if (J.method !== "GET") throw R9.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "not get method"
                        });
                        if (I.options != null) throw R9.errors.exception({
                            header: "Cache.#batchCacheOperations",
                            message: "options must not be defined"
                        });
                        Y = this.#B(I.request);
                        for (let W of Y) {
                            let X = Q.indexOf(W);
                            Sy1(X !== -1), Q.splice(X, 1)
                        }
                        Q.push([I.request, I.response]), G.push([I.request, I.response])
                    }
                    Z.push([I.request, I.response])
                }
                return Z
            } catch (I) {
                throw this.#A.length = 0, this.#A = B, I
            }
        }
        #B(A, Q, B) {
            let G = [],
                Z = B ?? this.#A;
            for (let I of Z) {
                let [Y, J] = I;
                if (this.#Z(A, Y, J, Q)) G.push(I)
            }
            return G
        }
        #Z(A, Q, B = null, G) {
            let Z = new URL(A.url),
                I = new URL(Q.url);
            if (G?.ignoreSearch) I.search = "", Z.search = "";
            if (!sm8(Z, I, !0)) return !1;
            if (B == null || G?.ignoreVary || !B.headersList.contains("vary")) return !0;
            let Y = jy1(B.headersList.get("vary"));
            for (let J of Y) {
                if (J === "*") return !1;
                let W = Q.headersList.get(J),
                    X = A.headersList.get(J);
                if (W !== X) return !1
            }
            return !0
        }
        #G(A, Q, B = 1 / 0) {
            let G = null;
            if (A !== void 0) {
                if (A instanceof Nb) {
                    if (G = A[rR], G.method !== "GET" && !Q.ignoreMethod) return []
                } else if (typeof A === "string") G = new Nb(A)[rR]
            }
            let Z = [];
            if (A === void 0)
                for (let Y of this.#A) Z.push(Y[1]);
            else {
                let Y = this.#B(G, Q);
                for (let J of Y) Z.push(J[1])
            }
            let I = [];
            for (let Y of Z) {
                let J = em8(Y, "immutable");
                if (I.push(J.clone()), I.length >= B) break
            }
            return Object.freeze(I)
        }
    }
    Object.defineProperties(G_.prototype, {
        [Symbol.toStringTag]: {
            value: "Cache",
            configurable: !0
        },
        match: Po,
        matchAll: Po,
        add: Po,
        addAll: Po,
        put: Po,
        delete: Po,
        keys: Po
    });
    var $1B = [{
        key: "ignoreSearch",
        converter: R9.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "ignoreMethod",
        converter: R9.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "ignoreVary",
        converter: R9.converters.boolean,
        defaultValue: () => !1
    }];
    R9.converters.CacheQueryOptions = R9.dictionaryConverter($1B);
    R9.converters.MultiCacheQueryOptions = R9.dictionaryConverter([...$1B, {
        key: "cacheName",
        converter: R9.converters.DOMString
    }]);
    R9.converters.Response = R9.interfaceConverter(om8);
    R9.converters["sequence<RequestInfo>"] = R9.sequenceConverter(R9.converters.RequestInfo);
    w1B.exports = {
        Cache: G_
    }
});
var L1B = moduleWrapper((rN7, N1B) => {
    var {
        kConstruct: OEA
    } = opA(), {
        Cache: epA
    } = q1B(), {
        webidl: SH
    } = FD(), {
        kEnumerableProperty: REA
    } = M6();
    class Ic {
        #A = new Map;
        constructor() {
            if (arguments[0] !== OEA) SH.illegalConstructor();
            SH.util.markAsUncloneable(this)
        }
        async match(A, Q = {}) {
            if (SH.brandCheck(this, Ic), SH.argumentLengthCheck(arguments, 1, "CacheStorage.match"), A = SH.converters.RequestInfo(A), Q = SH.converters.MultiCacheQueryOptions(Q), Q.cacheName != null) {
                if (this.#A.has(Q.cacheName)) {
                    let B = this.#A.get(Q.cacheName);
                    return await new epA(OEA, B).match(A, Q)
                }
            } else
                for (let B of this.#A.values()) {
                    let Z = await new epA(OEA, B).match(A, Q);
                    if (Z !== void 0) return Z
                }
        }
        async has(A) {
            SH.brandCheck(this, Ic);
            let Q = "CacheStorage.has";
            return SH.argumentLengthCheck(arguments, 1, Q), A = SH.converters.DOMString(A, Q, "cacheName"), this.#A.has(A)
        }
        async open(A) {
            SH.brandCheck(this, Ic);
            let Q = "CacheStorage.open";
            if (SH.argumentLengthCheck(arguments, 1, Q), A = SH.converters.DOMString(A, Q, "cacheName"), this.#A.has(A)) {
                let G = this.#A.get(A);
                return new epA(OEA, G)
            }
            let B = [];
            return this.#A.set(A, B), new epA(OEA, B)
        }
        async delete(A) {
            SH.brandCheck(this, Ic);
            let Q = "CacheStorage.delete";
            return SH.argumentLengthCheck(arguments, 1, Q), A = SH.converters.DOMString(A, Q, "cacheName"), this.#A.delete(A)
        }
        async keys() {
            return SH.brandCheck(this, Ic), [...this.#A.keys()]
        }
    }
    Object.defineProperties(Ic.prototype, {
        [Symbol.toStringTag]: {
            value: "CacheStorage",
            configurable: !0
        },
        match: REA,
        has: REA,
        open: REA,
        delete: REA,
        keys: REA
    });
    N1B.exports = {
        CacheStorage: Ic
    }
});
var O1B = moduleWrapper((oN7, M1B) => {
    M1B.exports = {
        maxAttributeValueSize: 1024,
        maxNameValuePairSize: 4096
    }
});
var _y1 = moduleWrapper((tN7, S1B) => {
    function Gd8(A) {
        for (let Q = 0; Q < A.length; ++Q) {
            let B = A.charCodeAt(Q);
            if (B >= 0 && B <= 8 || B >= 10 && B <= 31 || B === 127) return !0
        }
        return !1
    }

    function R1B(A) {
        for (let Q = 0; Q < A.length; ++Q) {
            let B = A.charCodeAt(Q);
            if (B < 33 || B > 126 || B === 34 || B === 40 || B === 41 || B === 60 || B === 62 || B === 64 || B === 44 || B === 59 || B === 58 || B === 92 || B === 47 || B === 91 || B === 93 || B === 63 || B === 61 || B === 123 || B === 125) throw Error("Invalid cookie name")
        }
    }

    function T1B(A) {
        let Q = A.length,
            B = 0;
        if (A[0] === '"') {
            if (Q === 1 || A[Q - 1] !== '"') throw Error("Invalid cookie value");
            --Q, ++B
        }
        while (B < Q) {
            let G = A.charCodeAt(B++);
            if (G < 33 || G > 126 || G === 34 || G === 44 || G === 59 || G === 92) throw Error("Invalid cookie value")
        }
    }

    function P1B(A) {
        for (let Q = 0; Q < A.length; ++Q) {
            let B = A.charCodeAt(Q);
            if (B < 32 || B === 127 || B === 59) throw Error("Invalid cookie path")
        }
    }

    function Zd8(A) {
        if (A.startsWith("-") || A.endsWith(".") || A.endsWith("-")) throw Error("Invalid cookie domain")
    }
    var Id8 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        Yd8 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        AlA = Array(61).fill(0).map((A, Q) => Q.toString().padStart(2, "0"));

    function j1B(A) {
        if (typeof A === "number") A = new Date(A);
        return `TextComponent{Id8[A.getUTCDay()]}, TextComponent{AlA[A.getUTCDate()]} TextComponent{Yd8[A.getUTCMonth()]} TextComponent{A.getUTCFullYear()} TextComponent{AlA[A.getUTCHours()]}:TextComponent{AlA[A.getUTCMinutes()]}:TextComponent{AlA[A.getUTCSeconds()]} GMT`
    }

    function Jd8(A) {
        if (A < 0) throw Error("Invalid cookie max-age")
    }

    function Wd8(A) {
        if (A.name.length === 0) return null;
        R1B(A.name), T1B(A.value);
        let Q = [`TextComponent{A.name}=TextComponent{A.value}`];
        if (A.name.startsWith("__Secure-")) A.secure = !0;
        if (A.name.startsWith("__Host-")) A.secure = !0, A.domain = null, A.path = "/";
        if (A.secure) Q.push("Secure");
        if (A.httpOnly) Q.push("HttpOnly");
        if (typeof A.maxAge === "number") Jd8(A.maxAge), Q.push(`Max-Age=TextComponent{A.maxAge}`);
        if (A.domain) Zd8(A.domain), Q.push(`Domain=TextComponent{A.domain}`);
        if (A.path) P1B(A.path), Q.push(`Path=TextComponent{A.path}`);
        if (A.expires && A.expires.toString() !== "Invalid Date") Q.push(`Expires=TextComponent{j1B(A.expires)}`);
        if (A.sameSite) Q.push(`SameSite=TextComponent{A.sameSite}`);
        for (let B of A.unparsed) {
            if (!B.includes("=")) throw Error("Invalid unparsed");
            let [G, ...Z] = B.split("=");
            Q.push(`TextComponent{G.trim()}=TextComponent{Z.join("=")}`)
        }
        return Q.join("; ")
    }
    S1B.exports = {
        isCTLExcludingHtab: Gd8,
        validateCookieName: R1B,
        validateCookiePath: P1B,
        validateCookieValue: T1B,
        toIMFDate: j1B,
        stringify: Wd8
    }
});
var k1B = moduleWrapper((eN7, _1B) => {
    var {
        maxNameValuePairSize: Xd8,
        maxAttributeValueSize: Fd8
    } = O1B(), {
        isCTLExcludingHtab: Vd8
    } = _y1(), {
        collectASequenceOfCodePointsFast: QlA
    } = tz(), Kd8 = nodeRequire("node:assert");

    function Dd8(A) {
        if (Vd8(A)) return null;
        let Q = "",
            B = "",
            G = "",
            Z = "";
        if (A.includes(";")) {
            let I = {
                position: 0
            };
            Q = QlA(";", A, I), B = A.slice(I.position)
        } else Q = A;
        if (!Q.includes("=")) Z = Q;
        else {
            let I = {
                position: 0
            };
            G = QlA("=", Q, I), Z = Q.slice(I.position + 1)
        }
        if (G = G.trim(), Z = Z.trim(), G.length + Z.length > Xd8) return null;
        return {
            name: G,
            value: Z,
            ...A3A(B)
        }
    }

    function A3A(A, Q = {}) {
        if (A.length === 0) return Q;
        Kd8(A[0] === ";"), A = A.slice(1);
        let B = "";
        if (A.includes(";")) B = QlA(";", A, {
            position: 0
        }), A = A.slice(B.length);
        else B = A, A = "";
        let G = "",
            Z = "";
        if (B.includes("=")) {
            let Y = {
                position: 0
            };
            G = QlA("=", B, Y), Z = B.slice(Y.position + 1)
        } else G = B;
        if (G = G.trim(), Z = Z.trim(), Z.length > Fd8) return A3A(A, Q);
        let I = G.toLowerCase();
        if (I === "expires") {
            let Y = new Date(Z);
            Q.expires = Y
        } else if (I === "max-age") {
            let Y = Z.charCodeAt(0);
            if ((Y < 48 || Y > 57) && Z[0] !== "-") return A3A(A, Q);
            if (!/^\d+TextComponent/.test(Z)) return A3A(A, Q);
            let J = Number(Z);
            Q.maxAge = J
        } else if (I === "domain") {
            let Y = Z;
            if (Y[0] === ".") Y = Y.slice(1);
            Y = Y.toLowerCase(), Q.domain = Y
        } else if (I === "path") {
            let Y = "";
            if (Z.length === 0 || Z[0] !== "/") Y = "/";
            else Y = Z;
            Q.path = Y
        } else if (I === "secure") Q.secure = !0;
        else if (I === "httponly") Q.httpOnly = !0;
        else if (I === "samesite") {
            let Y = "Default",
                J = Z.toLowerCase();
            if (J.includes("none")) Y = "None";
            if (J.includes("strict")) Y = "Strict";
            if (J.includes("lax")) Y = "Lax";
            Q.sameSite = Y
        } else Q.unparsed ??= [], Q.unparsed.push(`TextComponent{G}=TextComponent{Z}`);
        return A3A(A, Q)
    }
    _1B.exports = {
        parseSetCookie: Dd8,
        parseUnparsedAttributes: A3A
    }
});
var v1B = moduleWrapper((AL7, x1B) => {
    var {
        parseSetCookie: Hd8
    } = k1B(), {
        stringify: Cd8
    } = _y1(), {
        webidl: L5
    } = FD(), {
        Headers: BlA
    } = Mo();

    function Ed8(A) {
        L5.argumentLengthCheck(arguments, 1, "getCookies"), L5.brandCheck(A, BlA, {
            strict: !1
        });
        let Q = A.get("cookie"),
            B = {};
        if (!Q) return B;
        for (let G of Q.split(";")) {
            let [Z, ...I] = G.split("=");
            B[Z.trim()] = I.join("=")
        }
        return B
    }

    function zd8(A, Q, B) {
        L5.brandCheck(A, BlA, {
            strict: !1
        });
        let G = "deleteCookie";
        L5.argumentLengthCheck(arguments, 2, G), Q = L5.converters.DOMString(Q, G, "name"), B = L5.converters.DeleteCookieAttributes(B), y1B(A, {
            name: Q,
            value: "",
            expires: new Date(0),
            ...B
        })
    }

    function Ud8(A) {
        L5.argumentLengthCheck(arguments, 1, "getSetCookies"), L5.brandCheck(A, BlA, {
            strict: !1
        });
        let Q = A.getSetCookie();
        if (!Q) return [];
        return Q.map((B) => Hd8(B))
    }

    function y1B(A, Q) {
        L5.argumentLengthCheck(arguments, 2, "setCookie"), L5.brandCheck(A, BlA, {
            strict: !1
        }), Q = L5.converters.Cookie(Q);
        let B = Cd8(Q);
        if (B) A.append("Set-Cookie", B)
    }
    L5.converters.DeleteCookieAttributes = L5.dictionaryConverter([{
        converter: L5.nullableConverter(L5.converters.DOMString),
        key: "path",
        defaultValue: () => null
    }, {
        converter: L5.nullableConverter(L5.converters.DOMString),
        key: "domain",
        defaultValue: () => null
    }]);
    L5.converters.Cookie = L5.dictionaryConverter([{
        converter: L5.converters.DOMString,
        key: "name"
    }, {
        converter: L5.converters.DOMString,
        key: "value"
    }, {
        converter: L5.nullableConverter((A) => {
            if (typeof A === "number") return L5.converters["unsigned long long"](A);
            return new Date(A)
        }),
        key: "expires",
        defaultValue: () => null
    }, {
        converter: L5.nullableConverter(L5.converters["long long"]),
        key: "maxAge",
        defaultValue: () => null
    }, {
        converter: L5.nullableConverter(L5.converters.DOMString),
        key: "domain",
        defaultValue: () => null
    }, {
        converter: L5.nullableConverter(L5.converters.DOMString),
        key: "path",
        defaultValue: () => null
    }, {
        converter: L5.nullableConverter(L5.converters.boolean),
        key: "secure",
        defaultValue: () => null
    }, {
        converter: L5.nullableConverter(L5.converters.boolean),
        key: "httpOnly",
        defaultValue: () => null
    }, {
        converter: L5.converters.USVString,
        key: "sameSite",
        allowedValues: ["Strict", "Lax", "None"]
    }, {
        converter: L5.sequenceConverter(L5.converters.DOMString),
        key: "unparsed",
        defaultValue: () => []
    }]);
    x1B.exports = {
        getCookies: Ed8,
        deleteCookie: zd8,
        getSetCookies: Ud8,
        setCookie: y1B
    }
});
var B3A = moduleWrapper((QL7, f1B) => {
    var {
        webidl: K9
    } = FD(), {
        kEnumerableProperty: BU
    } = M6(), {
        kConstruct: b1B
    } = iI(), {
        MessagePort: $d8
    } = nodeRequire("node:worker_threads");
    class yw extends Event {
        #A;
        constructor(A, Q = {}) {
            if (A === b1B) {
                super(arguments[1], arguments[2]);
                K9.util.markAsUncloneable(this);
                return
            }
            let B = "MessageEvent constructor";
            K9.argumentLengthCheck(arguments, 1, B), A = K9.converters.DOMString(A, B, "type"), Q = K9.converters.MessageEventInit(Q, B, "eventInitDict");
            super(A, Q);
            this.#A = Q, K9.util.markAsUncloneable(this)
        }
        get data() {
            return K9.brandCheck(this, yw), this.#A.data
        }
        get origin() {
            return K9.brandCheck(this, yw), this.#A.origin
        }
        get lastEventId() {
            return K9.brandCheck(this, yw), this.#A.lastEventId
        }
        get source() {
            return K9.brandCheck(this, yw), this.#A.source
        }
        get ports() {
            if (K9.brandCheck(this, yw), !Object.isFrozen(this.#A.ports)) Object.freeze(this.#A.ports);
            return this.#A.ports
        }
        initMessageEvent(A, Q = !1, B = !1, G = null, Z = "", I = "", Y = null, J = []) {
            return K9.brandCheck(this, yw), K9.argumentLengthCheck(arguments, 1, "MessageEvent.initMessageEvent"), new yw(A, {
                bubbles: Q,
                cancelable: B,
                data: G,
                origin: Z,
                lastEventId: I,
                source: Y,
                ports: J
            })
        }
        static createFastMessageEvent(A, Q) {
            let B = new yw(b1B, A, Q);
            return B.#A = Q, B.#A.data ??= null, B.#A.origin ??= "", B.#A.lastEventId ??= "", B.#A.source ??= null, B.#A.ports ??= [], B
        }
    }
    var {
        createFastMessageEvent: wd8
    } = yw;
    delete yw.createFastMessageEvent;
    class Q3A extends Event {
        #A;
        constructor(A, Q = {}) {
            K9.argumentLengthCheck(arguments, 1, "CloseEvent constructor"), A = K9.converters.DOMString(A, "CloseEvent constructor", "type"), Q = K9.converters.CloseEventInit(Q);
            super(A, Q);
            this.#A = Q, K9.util.markAsUncloneable(this)
        }
        get wasClean() {
            return K9.brandCheck(this, Q3A), this.#A.wasClean
        }
        get code() {
            return K9.brandCheck(this, Q3A), this.#A.code
        }
        get reason() {
            return K9.brandCheck(this, Q3A), this.#A.reason
        }
    }
    class SLASH_COMMAND_TOOL_NAME extends Event {
        #A;
        constructor(A, Q) {
            K9.argumentLengthCheck(arguments, 1, "ErrorEvent constructor");
            super(A, Q);
            K9.util.markAsUncloneable(this), A = K9.converters.DOMString(A, "ErrorEvent constructor", "type"), Q = K9.converters.ErrorEventInit(Q ?? {}), this.#A = Q
        }
        get message() {
            return K9.brandCheck(this, SLASH_COMMAND_TOOL_NAME), this.#A.message
        }
        get filename() {
            return K9.brandCheck(this, SLASH_COMMAND_TOOL_NAME), this.#A.filename
        }
        get lineno() {
            return K9.brandCheck(this, SLASH_COMMAND_TOOL_NAME), this.#A.lineno
        }
        get colno() {
            return K9.brandCheck(this, SLASH_COMMAND_TOOL_NAME), this.#A.colno
        }
        get error() {
            return K9.brandCheck(this, SLASH_COMMAND_TOOL_NAME), this.#A.error
        }
    }
    Object.defineProperties(yw.prototype, {
        [Symbol.toStringTag]: {
            value: "MessageEvent",
            configurable: !0
        },
        data: BU,
        origin: BU,
        lastEventId: BU,
        source: BU,
        ports: BU,
        initMessageEvent: BU
    });
    Object.defineProperties(Q3A.prototype, {
        [Symbol.toStringTag]: {
            value: "CloseEvent",
            configurable: !0
        },
        reason: BU,
        code: BU,
        wasClean: BU
    });
    Object.defineProperties(SLASH_COMMAND_TOOL_NAME.prototype, {
        [Symbol.toStringTag]: {
            value: "ErrorEvent",
            configurable: !0
        },
        message: BU,
        filename: BU,
        lineno: BU,
        colno: BU,
        error: BU
    });
    K9.converters.MessagePort = K9.interfaceConverter($d8);
    K9.converters["sequence<MessagePort>"] = K9.sequenceConverter(K9.converters.MessagePort);
    var ky1 = [{
        key: "bubbles",
        converter: K9.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "cancelable",
        converter: K9.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "composed",
        converter: K9.converters.boolean,
        defaultValue: () => !1
    }];
    K9.converters.MessageEventInit = K9.dictionaryConverter([...ky1, {
        key: "data",
        converter: K9.converters.any,
        defaultValue: () => null
    }, {
        key: "origin",
        converter: K9.converters.USVString,
        defaultValue: () => ""
    }, {
        key: "lastEventId",
        converter: K9.converters.DOMString,
        defaultValue: () => ""
    }, {
        key: "source",
        converter: K9.nullableConverter(K9.converters.MessagePort),
        defaultValue: () => null
    }, {
        key: "ports",
        converter: K9.converters["sequence<MessagePort>"],
        defaultValue: () => []
    }]);
    K9.converters.CloseEventInit = K9.dictionaryConverter([...ky1, {
        key: "wasClean",
        converter: K9.converters.boolean,
        defaultValue: () => !1
    }, {
        key: "code",
        converter: K9.converters["unsigned short"],
        defaultValue: () => 0
    }, {
        key: "reason",
        converter: K9.converters.USVString,
        defaultValue: () => ""
    }]);
    K9.converters.ErrorEventInit = K9.dictionaryConverter([...ky1, {
        key: "message",
        converter: K9.converters.DOMString,
        defaultValue: () => ""
    }, {
        key: "filename",
        converter: K9.converters.USVString,
        defaultValue: () => ""
    }, {
        key: "lineno",
        converter: K9.converters["unsigned long"],
        defaultValue: () => 0
    }, {
        key: "colno",
        converter: K9.converters["unsigned long"],
        defaultValue: () => 0
    }, {
        key: "error",
        converter: K9.converters.any
    }]);
    f1B.exports = {
        MessageEvent: yw,
        CloseEvent: Q3A,
        ErrorEvent: SLASH_COMMAND_TOOL_NAME,
        createFastMessageEvent: wd8
    }
});
var jo = moduleWrapper((BL7, h1B) => {
    var qd8 = {
            enumerable: !0,
            writable: !1,
            configurable: !1
        },
        Nd8 = {
            CONNECTING: 0,
            OPEN: 1,
            CLOSING: 2,
            CLOSED: 3
        },
        Ld8 = {
            NOT_SENT: 0,
            PROCESSING: 1,
            SENT: 2
        },
        Md8 = {
            CONTINUATION: 0,
            TEXT: 1,
            BINARY: 2,
            CLOSE: 8,
            PING: 9,
            PONG: 10
        },
        Od8 = {
            INFO: 0,
            PAYLOADLENGTH_16: 2,
            PAYLOADLENGTH_64: 3,
            READ_DATA: 4
        },
        Rd8 = Buffer.allocUnsafe(0),
        Td8 = {
            string: 1,
            typedArray: 2,
            arrayBuffer: 3,
            blob: 4
        };
    h1B.exports = {
        uid: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
        sentCloseFrameState: Ld8,
        staticPropertyDescriptors: qd8,
        states: Nd8,
        opcodes: Md8,
        maxUnsigned16Bit: 65535,
        parserStates: Od8,
        emptyBuffer: Rd8,
        sendHints: Td8
    }
});
var TEA = moduleWrapper((GL7, g1B) => {
    g1B.exports = {
        kWebSocketURL: Symbol("url"),
        kReadyState: Symbol("ready state"),
        kController: Symbol("controller"),
        kResponse: Symbol("response"),
        kBinaryType: Symbol("binary type"),
        kSentClose: Symbol("sent close"),
        kReceivedClose: Symbol("received close"),
        kByteParser: Symbol("byte parser")
    }
});
var SEA = moduleWrapper((ZL7, a1B) => {
    var {
        kReadyState: PEA,
        kController: Pd8,
        kResponse: jd8,
        kBinaryType: Sd8,
        kWebSocketURL: _d8
    } = TEA(), {
        states: jEA,
        opcodes: Jc
    } = jo(), {
        ErrorEvent: kd8,
        createFastMessageEvent: yd8
    } = B3A(), {
        isUtf8: xd8
    } = nodeRequire("node:buffer"), {
        collectASequenceOfCodePointsFast: vd8,
        removeHTTPWhitespace: u1B
    } = tz();

    function bd8(A) {
        return A[PEA] === jEA.CONNECTING
    }

    function fd8(A) {
        return A[PEA] === jEA.OPEN
    }

    function hd8(A) {
        return A[PEA] === jEA.CLOSING
    }

    function gd8(A) {
        return A[PEA] === jEA.CLOSED
    }

    function yy1(A, Q, B = (Z, I) => new Event(Z, I), G = {}) {
        let Z = B(A, G);
        Q.dispatchEvent(Z)
    }

    function ud8(A, Q, B) {
        if (A[PEA] !== jEA.OPEN) return;
        let G;
        if (Q === Jc.TEXT) try {
            G = n1B(B)
        } catch {
            d1B(A, "Received invalid UTF-8 in text frame.");
            return
        } else if (Q === Jc.BINARY)
            if (A[Sd8] === "blob") G = new Blob([B]);
            else G = md8(B);
        yy1("message", A, yd8, {
            origin: A[_d8].origin,
            data: G
        })
    }

    function md8(A) {
        if (A.byteLength === A.buffer.byteLength) return A.buffer;
        return A.buffer.slice(A.byteOffset, A.byteOffset + A.byteLength)
    }

    function dd8(A) {
        if (A.length === 0) return !1;
        for (let Q = 0; Q < A.length; ++Q) {
            let B = A.charCodeAt(Q);
            if (B < 33 || B > 126 || B === 34 || B === 40 || B === 41 || B === 44 || B === 47 || B === 58 || B === 59 || B === 60 || B === 61 || B === 62 || B === 63 || B === 64 || B === 91 || B === 92 || B === 93 || B === 123 || B === 125) return !1
        }
        return !0
    }

    function cd8(A) {
        if (A >= 1000 && A < 1015) return A !== 1004 && A !== 1005 && A !== 1006;
        return A >= 3000 && A <= 4999
    }

    function d1B(A, Q) {
        let {
            [Pd8]: B, [jd8]: G
        } = A;
        if (B.abort(), G?.socket && !G.socket.destroyed) G.socket.destroy();
        if (Q) yy1("error", A, (Z, I) => new kd8(Z, I), {
            error: Error(Q),
            message: Q
        })
    }

    function c1B(A) {
        return A === Jc.CLOSE || A === Jc.PING || A === Jc.PONG
    }

    function p1B(A) {
        return A === Jc.CONTINUATION
    }

    function l1B(A) {
        return A === Jc.TEXT || A === Jc.BINARY
    }

    function pd8(A) {
        return l1B(A) || p1B(A) || c1B(A)
    }

    function ld8(A) {
        let Q = {
                position: 0
            },
            B = new Map;
        while (Q.position < A.length) {
            let G = vd8(";", A, Q),
                [Z, I = ""] = G.split("=");
            B.set(u1B(Z, !0, !1), u1B(I, !1, !0)), Q.position++
        }
        return B
    }

    function id8(A) {
        for (let Q = 0; Q < A.length; Q++) {
            let B = A.charCodeAt(Q);
            if (B < 48 || B > 57) return !1
        }
        return !0
    }
    var i1B = typeof process.versions.icu === "string",
        m1B = i1B ? new TextDecoder("utf-8", {
            fatal: !0
        }) : void 0,
        n1B = i1B ? m1B.decode.bind(m1B) : function(A) {
            if (xd8(A)) return A.toString("utf-8");