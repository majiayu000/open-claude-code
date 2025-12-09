/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.969Z
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 10/34
 * Lines: 134358 - 135857 (1500 lines)
 * Original file: cli.js
 */

var qpA = U((DN7, AtQ) => {
    var u5A = UA("node:assert"),
        {
            kRetryHandlerDefaultRetry: ooQ
        } = iI(),
        {
            RequestRetryError: VEA
        } = U7(),
        {
            isDisturbed: toQ,
            parseHeaders: cf8,
            parseRangeHeader: eoQ,
            wrapRequestBody: pf8
        } = M6();

function lf8(A) {
        let Q = Date.now();
        return new Date(A).getTime() - Q
    }

class xk1 {
        constructor(A, Q) {
            let {
                retryOptions: B,
                ...G
            } = A, {
                retry: Z,
                maxRetries: I,
                maxTimeout: Y,
                minTimeout: J,
                timeoutFactor: W,
                methods: X,
                errorCodes: F,
                retryAfter: V,
                statusCodes: K
            } = B ?? {};
            this.dispatch = Q.dispatch, this.handler = Q.handler, this.opts = {
                ...G,
                body: pf8(A.body)
            }, this.abort = null, this.aborted = !1, this.retryOpts = {
                retry: Z ?? xk1[ooQ],
                retryAfter: V ?? !0,
                maxTimeout: Y ?? 30000,
                minTimeout: J ?? 500,
                timeoutFactor: W ?? 2,
                maxRetries: I ?? 5,
                methods: X ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"],
                statusCodes: K ?? [500, 502, 503, 504, 429],
                errorCodes: F ?? ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND", "ENETDOWN", "ENETUNREACH", "EHOSTDOWN", "EHOSTUNREACH", "EPIPE", "UND_ERR_SOCKET"]
            }, this.retryCount = 0, this.retryCountCheckpoint = 0, this.start = 0, this.end = null, this.etag = null, this.resume = null, this.handler.onConnect((D) => {
                if (this.aborted = !0, this.abort) this.abort(D);
                else this.reason = D
            })
        }
        onRequestSent() {
            if (this.handler.onRequestSent) this.handler.onRequestSent()
        }
        onUpgrade(A, Q, B) {
            if (this.handler.onUpgrade) this.handler.onUpgrade(A, Q, B)
        }
        onConnect(A) {
            if (this.aborted) A(this.reason);
            else this.abort = A
        }
        onBodySent(A) {
            if (this.handler.onBodySent) return this.handler.onBodySent(A)
        }
        static[ooQ](A, {
            state: Q,
            opts: B
        }, G) {
            let {
                statusCode: Z,
                code: I,
                headers: Y
            } = A, {
                method: J,
                retryOptions: W
            } = B, {
                maxRetries: X,
                minTimeout: F,
                maxTimeout: V,
                timeoutFactor: K,
                statusCodes: D,
                errorCodes: H,
                methods: C
            } = W, {
                counter: E
            } = Q;
            if (I && I !== "UND_ERR_REQ_RETRY" && !H.includes(I)) {
                G(A);
                return
            }
            if (Array.isArray(C) && !C.includes(J)) {
                G(A);
                return
            }
            if (Z != null && Array.isArray(D) && !D.includes(Z)) {
                G(A);
                return
            }
            if (E > X) {
                G(A);
                return
            }
            let z = Y?.["retry-after"];
            if (z) z = Number(z), z = Number.isNaN(z) ? lf8(z) : z * 1000;
            let w = z > 0 ? Math.min(z, V) : Math.min(F * K ** (E - 1), V);
            setTimeout(() => G(null), w)
        }
        onHeaders(A, Q, B, G) {
            let Z = cf8(Q);
            if (this.retryCount += 1, A >= 300)
                if (this.retryOpts.statusCodes.includes(A) === !1) return this.handler.onHeaders(A, Q, B, G);
                else return this.abort(new VEA("Request failed", A, {
                    headers: Z,
                    data: {
                        count: this.retryCount
                    }
                })), !1;
            if (this.resume != null) {
                if (this.resume = null, A !== 206 && (this.start > 0 || A !== 200)) return this.abort(new VEA("server does not support the range header and the payload was partially consumed", A, {
                    headers: Z,
                    data: {
                        count: this.retryCount
                    }
                })), !1;
                let Y = eoQ(Z["content-range"]);
                if (!Y) return this.abort(new VEA("Content-Range mismatch", A, {
                    headers: Z,
                    data: {
                        count: this.retryCount
                    }
                })), !1;
                if (this.etag != null && this.etag !== Z.etag) return this.abort(new VEA("ETag mismatch", A, {
                    headers: Z,
                    data: {
                        count: this.retryCount
                    }
                })), !1;
                let {
                    start: J,
                    size: W,
                    end: X = W - 1
                } = Y;
                return u5A(this.start === J, "content-range mismatch"), u5A(this.end == null || this.end === X, "content-range mismatch"), this.resume = B, !0
            }
            if (this.end == null) {
                if (A === 206) {
                    let Y = eoQ(Z["content-range"]);
                    if (Y == null) return this.handler.onHeaders(A, Q, B, G);
                    let {
                        start: J,
                        size: W,
                        end: X = W - 1
                    } = Y;
                    u5A(J != null && Number.isFinite(J), "content-range mismatch"), u5A(X != null && Number.isFinite(X), "invalid content-length"), this.start = J, this.end = X
                }
                if (this.end == null) {
                    let Y = Z["content-length"];
                    this.end = Y != null ? Number(Y) - 1 : null
                }
                if (u5A(Number.isFinite(this.start)), u5A(this.end == null || Number.isFinite(this.end), "invalid content-length"), this.resume = B, this.etag = Z.etag != null ? Z.etag : null, this.etag != null && this.etag.startsWith("W/")) this.etag = null;
                return this.handler.onHeaders(A, Q, B, G)
            }
            let I = new VEA("Request failed", A, {
                headers: Z,
                data: {
                    count: this.retryCount
                }
            });
            return this.abort(I), !1
        }
        onData(A) {
            return this.start += A.length, this.handler.onData(A)
        }
        onComplete(A) {
            return this.retryCount = 0, this.handler.onComplete(A)
        }
        onError(A) {
            if (this.aborted || toQ(this.opts.body)) return this.handler.onError(A);
            if (this.retryCount - this.retryCountCheckpoint > 0) this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint);
            else this.retryCount += 1;
            this.retryOpts.retry(A, {
                state: {
                    counter: this.retryCount
                },
                opts: {
                    retryOptions: this.retryOpts,
                    ...this.opts
                }
            }, Q.bind(this));

function Q(B) {
                if (B != null || this.aborted || toQ(this.opts.body)) return this.handler.onError(B);
                if (this.start !== 0) {
                    let G = {
                        range: `bytes=${this.start}-${this.end??""}`
                    };
                    if (this.etag != null) G["if-match"] = this.etag;
                    this.opts = {
                        ...this.opts,
                        headers: {
                            ...this.opts.headers,
                            ...G
                        }
                    }
                }
                try {
                    this.retryCountCheckpoint = this.retryCount, this.dispatch(this.opts, this)
                } catch (G) {
                    this.handler.onError(G)
                }
            }
        }
    }
    AtQ.exports = xk1
});
var GtQ = U((HN7, BtQ) => {
    var if8 = fCA(),
        nf8 = qpA();

class QtQ extends if8 {
        #A = null;
        #Q = null;
        constructor(A, Q = {}) {
            super(Q);
            this.#A = A, this.#Q = Q
        }
        dispatch(A, Q) {
            let B = new nf8({
                ...A,
                retryOptions: this.#Q
            }, {
                dispatch: this.#A.dispatch.bind(this.#A),
                handler: Q
            });
            return this.#A.dispatch(A, B)
        }
        close() {
            return this.#A.close()
        }
        destroy() {
            return this.#A.destroy()
        }
    }
    BtQ.exports = QtQ
});
var gk1 = U((CN7, DtQ) => {
    var WtQ = UA("node:assert"),
        {
            Readable: af8
        } = UA("node:stream"),
        {
            RequestAbortedError: XtQ,
            NotSupportedError: sf8,
            InvalidArgumentError: rf8,
            AbortError: vk1
        } = U7(),
        FtQ = M6(),
        {
            ReadableStreamFrom: of8
        } = M6(),
        Tw = Symbol("kConsume"),
        KEA = Symbol("kReading"),
        Bc = Symbol("kBody"),
        ZtQ = Symbol("kAbort"),
        VtQ = Symbol("kContentType"),
        ItQ = Symbol("kContentLength"),
        tf8 = () => {};

class KtQ extends af8 {
        constructor({
            resume: A,
            abort: Q,
            contentType: B = "",
            contentLength: G,
            highWaterMark: Z = 65536
        }) {
            super({
                autoDestroy: !0,
                read: A,
                highWaterMark: Z
            });
            this._readableState.dataEmitted = !1, this[ZtQ] = Q, this[Tw] = null, this[Bc] = null, this[VtQ] = B, this[ItQ] = G, this[KEA] = !1
        }
        destroy(A) {
            if (!A && !this._readableState.endEmitted) A = new XtQ;
            if (A) this[ZtQ]();
            return super.destroy(A)
        }
        _destroy(A, Q) {
            if (!this[KEA]) setImmediate(() => {
                Q(A)
            });
            else Q(A)
        }
        on(A, ...Q) {
            if (A === "data" || A === "readable") this[KEA] = !0;
            return super.on(A, ...Q)
        }
        addListener(A, ...Q) {
            return this.on(A, ...Q)
        }
        off(A, ...Q) {
            let B = super.off(A, ...Q);
            if (A === "data" || A === "readable") this[KEA] = this.listenerCount("data") > 0 || this.listenerCount("readable") > 0;
            return B
        }
        removeListener(A, ...Q) {
            return this.off(A, ...Q)
        }
        push(A) {
            if (this[Tw] && A !== null) return fk1(this[Tw], A), this[KEA] ? super.push(A) : !0;
            return super.push(A)
        }
        async text() {
            return DEA(this, "text")
        }
        async json() {
            return DEA(this, "json")
        }
        async blob() {
            return DEA(this, "blob")
        }
        async bytes() {
            return DEA(this, "bytes")
        }
        async arrayBuffer() {
            return DEA(this, "arrayBuffer")
        }
        async formData() {
            throw new sf8
        }
        get bodyUsed() {
            return FtQ.isDisturbed(this)
        }
        get body() {
            if (!this[Bc]) {
                if (this[Bc] = of8(this), this[Tw]) this[Bc].getReader(), WtQ(this[Bc].locked)
            }
            return this[Bc]
        }
        async dump(A) {
            let Q = Number.isFinite(A?.limit) ? A.limit : 131072,
                B = A?.signal;
            if (B != null && (typeof B !== "object" || !("aborted" in B))) throw new rf8("signal must be an AbortSignal");
            if (B?.throwIfAborted(), this._readableState.closeEmitted) return null;
            return await new Promise((G, Z) => {
                if (this[ItQ] > Q) this.destroy(new vk1);
                let I = () => {
                    this.destroy(B.reason ?? new vk1)
                };
                B?.addEventListener("abort", I), this.on("close", function() {
                    if (B?.removeEventListener("abort", I), B?.aborted) Z(B.reason ?? new vk1);
                    else G(null)
                }).on("error", tf8).on("data", function(Y) {
                    if (Q -= Y.length, Q <= 0) this.destroy()
                }).resume()
            })
        }
    }

function ef8(A) {
        return A[Bc] && A[Bc].locked === !0 || A[Tw]
    }

function Ah8(A) {
        return FtQ.isDisturbed(A) || ef8(A)
    }

async function DEA(A, Q) {
        return WtQ(!A[Tw]), new Promise((B, G) => {
            if (Ah8(A)) {
                let Z = A._readableState;
                if (Z.destroyed && Z.closeEmitted === !1) A.on("error", (I) => {
                    G(I)
                }).on("close", () => {
                    G(TypeError("unusable"))
                });
                else G(Z.errored ?? TypeError("unusable"))
            } else queueMicrotask(() => {
                A[Tw] = {
                    type: Q,
                    stream: A,
                    resolve: B,
                    reject: G,
                    length: 0,
                    body: []
                }, A.on("error", function(Z) {
                    hk1(this[Tw], Z)
                }).on("close", function() {
                    if (this[Tw].body !== null) hk1(this[Tw], new XtQ)
                }), Qh8(A[Tw])
            })
        })
    }

function Qh8(A) {
        if (A.body === null) return;
        let {
            _readableState: Q
        } = A.stream;
        if (Q.bufferIndex) {
            let B = Q.bufferIndex,
                G = Q.buffer.length;
            for (let Z = B; Z < G; Z++) fk1(A, Q.buffer[Z])
        } else
            for (let B of Q.buffer) fk1(A, B);
        if (Q.endEmitted) JtQ(this[Tw]);
        else A.stream.on("end", function() {
            JtQ(this[Tw])
        });
        A.stream.resume();
        while (A.stream.read() != null);
    }

function bk1(A, Q) {
        if (A.length === 0 || Q === 0) return "";
        let B = A.length === 1 ? A[0] : Buffer.concat(A, Q),
            G = B.length,
            Z = G > 2 && B[0] === 239 && B[1] === 187 && B[2] === 191 ? 3 : 0;
        return B.utf8Slice(Z, G)
    }

function YtQ(A, Q) {
        if (A.length === 0 || Q === 0) return new Uint8Array(0);
        if (A.length === 1) return new Uint8Array(A[0]);
        let B = new Uint8Array(Buffer.allocUnsafeSlow(Q).buffer),
            G = 0;
        for (let Z = 0; Z < A.length; ++Z) {
            let I = A[Z];
            B.set(I, G), G += I.length
        }
        return B
    }

function JtQ(A) {
        let {
            type: Q,
            body: B,
            resolve: G,
            stream: Z,
            length: I
        } = A;
        try {
            if (Q === "text") G(bk1(B, I));
            else if (Q === "json") G(JSON.parse(bk1(B, I)));
            else if (Q === "arrayBuffer") G(YtQ(B, I).buffer);
            else if (Q === "blob") G(new Blob(B, {
                type: Z[VtQ]
            }));
            else if (Q === "bytes") G(YtQ(B, I));
            hk1(A)
        } catch (Y) {
            Z.destroy(Y)
        }
    }

function fk1(A, Q) {
        A.length += Q.length, A.body.push(Q)
    }

function hk1(A, Q) {
        if (A.body === null) return;
        if (Q) A.reject(Q);
        else A.resolve();
        A.type = null, A.stream = null, A.resolve = null, A.reject = null, A.length = 0, A.body = null
    }
    DtQ.exports = {
        Readable: KtQ,
        chunksDecode: bk1
    }
});
var uk1 = U((EN7, UtQ) => {
    var Bh8 = UA("node:assert"),
        {
            ResponseStatusCodeError: HtQ
        } = U7(),
        {
            chunksDecode: CtQ
        } = gk1();

async function Gh8({
        callback: A,
        body: Q,
        contentType: B,
        statusCode: G,
        statusMessage: Z,
        headers: I
    }) {
        Bh8(Q);
        let Y = [],
            J = 0;
        try {
            for await (let V of Q) if (Y.push(V), J += V.length, J > 131072) {
                Y = [], J = 0;
                break
            }
        } catch {
            Y = [], J = 0
        }
        let W = `Response status code ${G}${Z?`: ${Z}`:""}`;
        if (G === 204 || !B || !J) {
            queueMicrotask(() => A(new HtQ(W, G, I)));
            return
        }
        let X = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        let F;
        try {
            if (EtQ(B)) F = JSON.parse(CtQ(Y, J));
            else if (ztQ(B)) F = CtQ(Y, J)
        } catch {} finally {
            Error.stackTraceLimit = X
        }
        queueMicrotask(() => A(new HtQ(W, G, I, F)))
    }
    var EtQ = (A) => {
            return A.length > 15 && A[11] === "/" && A[0] === "a" && A[1] === "p" && A[2] === "p" && A[3] === "l" && A[4] === "i" && A[5] === "c" && A[6] === "a" && A[7] === "t" && A[8] === "i" && A[9] === "o" && A[10] === "n" && A[12] === "j" && A[13] === "s" && A[14] === "o" && A[15] === "n"
        },
        ztQ = (A) => {
            return A.length > 4 && A[4] === "/" && A[0] === "t" && A[1] === "e" && A[2] === "x" && A[3] === "t"
        };
    UtQ.exports = {
        getResolveErrorBodyCallback: Gh8,
        isContentTypeApplicationJson: EtQ,
        isContentTypeText: ztQ
    }
});
var qtQ = U((zN7, dk1) => {
    var Zh8 = UA("node:assert"),
        {
            Readable: Ih8
        } = gk1(),
        {
            InvalidArgumentError: m5A,
            RequestAbortedError: $tQ
        } = U7(),
        Pw = M6(),
        {
            getResolveErrorBodyCallback: Yh8
        } = uk1(),
        {
            AsyncResource: Jh8
        } = UA("node:async_hooks");

class mk1 extends Jh8 {
        constructor(A, Q) {
            if (!A || typeof A !== "object") throw new m5A("invalid opts");
            let {
                signal: B,
                method: G,
                opaque: Z,
                body: I,
                onInfo: Y,
                responseHeaders: J,
                throwOnError: W,
                highWaterMark: X
            } = A;
            try {
                if (typeof Q !== "function") throw new m5A("invalid callback");
                if (X && (typeof X !== "number" || X < 0)) throw new m5A("invalid highWaterMark");
                if (B && typeof B.on !== "function" && typeof B.addEventListener !== "function") throw new m5A("signal must be an EventEmitter or EventTarget");
                if (G === "CONNECT") throw new m5A("invalid method");
                if (Y && typeof Y !== "function") throw new m5A("invalid onInfo callback");
                super("UNDICI_REQUEST")
            } catch (F) {
                if (Pw.isStream(I)) Pw.destroy(I.on("error", Pw.nop), F);
                throw F
            }
            if (this.method = G, this.responseHeaders = J || null, this.opaque = Z || null, this.callback = Q, this.res = null, this.abort = null, this.body = I, this.trailers = {}, this.context = null, this.onInfo = Y || null, this.throwOnError = W, this.highWaterMark = X, this.signal = B, this.reason = null, this.removeAbortListener = null, Pw.isStream(I)) I.on("error", (F) => {
                this.onError(F)
            });
            if (this.signal)
                if (this.signal.aborted) this.reason = this.signal.reason ?? new $tQ;
                else this.removeAbortListener = Pw.addAbortListener(this.signal, () => {
                    if (this.reason = this.signal.reason ?? new $tQ, this.res) Pw.destroy(this.res.on("error", Pw.nop), this.reason);
                    else if (this.abort) this.abort(this.reason);
                    if (this.removeAbortListener) this.res?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null
                })
        }
        onConnect(A, Q) {
            if (this.reason) {
                A(this.reason);
                return
            }
            Zh8(this.callback), this.abort = A, this.context = Q
        }
        onHeaders(A, Q, B, G) {
            let {
                callback: Z,
                opaque: I,
                abort: Y,
                context: J,
                responseHeaders: W,
                highWaterMark: X
            } = this, F = W === "raw" ? Pw.parseRawHeaders(Q) : Pw.parseHeaders(Q);
            if (A < 200) {
                if (this.onInfo) this.onInfo({
                    statusCode: A,
                    headers: F
                });
                return
            }
            let V = W === "raw" ? Pw.parseHeaders(Q) : F,
                K = V["content-type"],
                D = V["content-length"],
                H = new Ih8({
                    resume: B,
                    abort: Y,
                    contentType: K,
                    contentLength: this.method !== "HEAD" && D ? Number(D) : null,
                    highWaterMark: X
                });
            if (this.removeAbortListener) H.on("close", this.removeAbortListener);
            if (this.callback = null, this.res = H, Z !== null)
                if (this.throwOnError && A >= 400) this.runInAsyncScope(Yh8, null, {
                    callback: Z,
                    body: H,
                    contentType: K,
                    statusCode: A,
                    statusMessage: G,
                    headers: F
                });
                else this.runInAsyncScope(Z, null, null, {
                    statusCode: A,
                    headers: F,
                    trailers: this.trailers,
                    opaque: I,
                    body: H,
                    context: J
                })
        }
        onData(A) {
            return this.res.push(A)
        }
        onComplete(A) {
            Pw.parseHeaders(A, this.trailers), this.res.push(null)
        }
        onError(A) {
            let {
                res: Q,
                callback: B,
                body: G,
                opaque: Z
            } = this;
            if (B) this.callback = null, queueMicrotask(() => {
                this.runInAsyncScope(B, null, A, {
                    opaque: Z
                })
            });
            if (Q) this.res = null, queueMicrotask(() => {
                Pw.destroy(Q, A)
            });
            if (G) this.body = null, Pw.destroy(G, A);
            if (this.removeAbortListener) Q?.off("close", this.removeAbortListener), this.removeAbortListener(), this.removeAbortListener = null
        }
    }

function wtQ(A, Q) {
        if (Q === void 0) return new Promise((B, G) => {
            wtQ.call(this, A, (Z, I) => {
                return Z ? G(Z) : B(I)
            })
        });
        try {
            this.dispatch(A, new mk1(A, Q))
        } catch (B) {
            if (typeof Q !== "function") throw B;
            let G = A?.opaque;
            queueMicrotask(() => Q(B, {
                opaque: G
            }))
        }
    }
    dk1.exports = wtQ;
    dk1.exports.RequestHandler = mk1
});
var HEA = U((UN7, MtQ) => {
    var {
        addAbortListener: Wh8
    } = M6(), {
        RequestAbortedError: Xh8
    } = U7(), d5A = Symbol("kListener"), A_ = Symbol("kSignal");

function NtQ(A) {
        if (A.abort) A.abort(A[A_]?.reason);
        else A.reason = A[A_]?.reason ?? new Xh8;
        LtQ(A)
    }

function Fh8(A, Q) {
        if (A.reason = null, A[A_] = null, A[d5A] = null, !Q) return;
        if (Q.aborted) {
            NtQ(A);
            return
        }
        A[A_] = Q, A[d5A] = () => {
            NtQ(A)
        }, Wh8(A[A_], A[d5A])
    }

function LtQ(A) {
        if (!A[A_]) return;
        if ("removeEventListener" in A[A_]) A[A_].removeEventListener("abort", A[d5A]);
        else A[A_].removeListener("abort", A[d5A]);
        A[A_] = null, A[d5A] = null
    }
    MtQ.exports = {
        addSignal: Fh8,
        removeSignal: LtQ
    }
});
var jtQ = U(($N7, PtQ) => {
    var Vh8 = UA("node:assert"),
        {
            finished: Kh8,
            PassThrough: Dh8
        } = UA("node:stream"),
        {
            InvalidArgumentError: c5A,
            InvalidReturnValueError: Hh8
        } = U7(),
        sR = M6(),
        {
            getResolveErrorBodyCallback: Ch8
        } = uk1(),
        {
            AsyncResource: Eh8
        } = UA("node:async_hooks"),
        {
            addSignal: zh8,
            removeSignal: OtQ
        } = HEA();

class RtQ extends Eh8 {
        constructor(A, Q, B) {
            if (!A || typeof A !== "object") throw new c5A("invalid opts");
            let {
                signal: G,
                method: Z,
                opaque: I,
                body: Y,
                onInfo: J,
                responseHeaders: W,
                throwOnError: X
            } = A;
            try {
                if (typeof B !== "function") throw new c5A("invalid callback");
                if (typeof Q !== "function") throw new c5A("invalid factory");
                if (G && typeof G.on !== "function" && typeof G.addEventListener !== "function") throw new c5A("signal must be an EventEmitter or EventTarget");
                if (Z === "CONNECT") throw new c5A("invalid method");
                if (J && typeof J !== "function") throw new c5A("invalid onInfo callback");
                super("UNDICI_STREAM")
            } catch (F) {
                if (sR.isStream(Y)) sR.destroy(Y.on("error", sR.nop), F);
                throw F
            }
            if (this.responseHeaders = W || null, this.opaque = I || null, this.factory = Q, this.callback = B, this.res = null, this.abort = null, this.context = null, this.trailers = null, this.body = Y, this.onInfo = J || null, this.throwOnError = X || !1, sR.isStream(Y)) Y.on("error", (F) => {
                this.onError(F)
            });
            zh8(this, G)
        }
        onConnect(A, Q) {
            if (this.reason) {
                A(this.reason);
                return
            }
            Vh8(this.callback), this.abort = A, this.context = Q
        }
        onHeaders(A, Q, B, G) {
            let {
                factory: Z,
                opaque: I,
                context: Y,
                callback: J,
                responseHeaders: W
            } = this, X = W === "raw" ? sR.parseRawHeaders(Q) : sR.parseHeaders(Q);
            if (A < 200) {
                if (this.onInfo) this.onInfo({
                    statusCode: A,
                    headers: X
                });
                return
            }
            this.factory = null;
            let F;
            if (this.throwOnError && A >= 400) {
                let D = (W === "raw" ? sR.parseHeaders(Q) : X)["content-type"];
                F = new Dh8, this.callback = null, this.runInAsyncScope(Ch8, null, {
                    callback: J,
                    body: F,
                    contentType: D,
                    statusCode: A,
                    statusMessage: G,
                    headers: X
                })
            } else {
                if (Z === null) return;
                if (F = this.runInAsyncScope(Z, null, {
                        statusCode: A,
                        headers: X,
                        opaque: I,
                        context: Y
                    }), !F || typeof F.write !== "function" || typeof F.end !== "function" || typeof F.on !== "function") throw new Hh8("expected Writable");
                Kh8(F, {
                    readable: !1
                }, (K) => {
                    let {
                        callback: D,
                        res: H,
                        opaque: C,
                        trailers: E,
                        abort: z
                    } = this;
                    if (this.res = null, K || !H.readable) sR.destroy(H, K);
                    if (this.callback = null, this.runInAsyncScope(D, null, K || null, {
                            opaque: C,
                            trailers: E
                        }), K) z()
                })
            }
            return F.on("drain", B), this.res = F, (F.writableNeedDrain !== void 0 ? F.writableNeedDrain : F._writableState?.needDrain) !== !0
        }
        onData(A) {
            let {
                res: Q
            } = this;
            return Q ? Q.write(A) : !0
        }
        onComplete(A) {
            let {
                res: Q
            } = this;
            if (OtQ(this), !Q) return;
            this.trailers = sR.parseHeaders(A), Q.end()
        }
        onError(A) {
            let {
                res: Q,
                callback: B,
                opaque: G,
                body: Z
            } = this;
            if (OtQ(this), this.factory = null, Q) this.res = null, sR.destroy(Q, A);
            else if (B) this.callback = null, queueMicrotask(() => {
                this.runInAsyncScope(B, null, A, {
                    opaque: G
                })
            });
            if (Z) this.body = null, sR.destroy(Z, A)
        }
    }

function TtQ(A, Q, B) {
        if (B === void 0) return new Promise((G, Z) => {
            TtQ.call(this, A, Q, (I, Y) => {
                return I ? Z(I) : G(Y)
            })
        });
        try {
            this.dispatch(A, new RtQ(A, Q, B))
        } catch (G) {
            if (typeof B !== "function") throw G;
            let Z = A?.opaque;
            queueMicrotask(() => B(G, {
                opaque: Z
            }))
        }
    }
    PtQ.exports = TtQ
});
var btQ = U((wN7, vtQ) => {
    var {
        Readable: _tQ,
        Duplex: Uh8,
        PassThrough: $h8
    } = UA("node:stream"), {
        InvalidArgumentError: CEA,
        InvalidReturnValueError: wh8,
        RequestAbortedError: ck1
    } = U7(), cL = M6(), {
        AsyncResource: qh8
    } = UA("node:async_hooks"), {
        addSignal: Nh8,
        removeSignal: Lh8
    } = HEA(), StQ = UA("node:assert"), p5A = Symbol("resume");

class ktQ extends _tQ {
        constructor() {
            super({
                autoDestroy: !0
            });
            this[p5A] = null
        }
        _read() {
            let {
                [p5A]: A
            } = this;
            if (A) this[p5A] = null, A()
        }
        _destroy(A, Q) {
            this._read(), Q(A)
        }
    }

class ytQ extends _tQ {
        constructor(A) {
            super({
                autoDestroy: !0
            });
            this[p5A] = A
        }
        _read() {
            this[p5A]()
        }
        _destroy(A, Q) {
            if (!A && !this._readableState.endEmitted) A = new ck1;
            Q(A)
        }
    }

class xtQ extends qh8 {
        constructor(A, Q) {
            if (!A || typeof A !== "object") throw new CEA("invalid opts");
            if (typeof Q !== "function") throw new CEA("invalid handler");
            let {
                signal: B,
                method: G,
                opaque: Z,
                onInfo: I,
                responseHeaders: Y
            } = A;
            if (B && typeof B.on !== "function" && typeof B.addEventListener !== "function") throw new CEA("signal must be an EventEmitter or EventTarget");
            if (G === "CONNECT") throw new CEA("invalid method");
            if (I && typeof I !== "function") throw new CEA("invalid onInfo callback");
            super("UNDICI_PIPELINE");
            this.opaque = Z || null, this.responseHeaders = Y || null, this.handler = Q, this.abort = null, this.context = null, this.onInfo = I || null, this.req = new ktQ().on("error", cL.nop), this.ret = new Uh8({
                readableObjectMode: A.objectMode,
                autoDestroy: !0,
                read: () => {
                    let {
                        body: J
                    } = this;
                    if (J?.resume) J.resume()
                },
                write: (J, W, X) => {
                    let {
                        req: F
                    } = this;
                    if (F.push(J, W) || F._readableState.destroyed) X();
                    else F[p5A] = X
                },
                destroy: (J, W) => {
                    let {
                        body: X,
                        req: F,
                        res: V,
                        ret: K,
                        abort: D
                    } = this;
                    if (!J && !K._readableState.endEmitted) J = new ck1;
                    if (D && J) D();
                    cL.destroy(X, J), cL.destroy(F, J), cL.destroy(V, J), Lh8(this), W(J)
                }
            }).on("prefinish", () => {
                let {
                    req: J
                } = this;
                J.push(null)
            }), this.res = null, Nh8(this, B)
        }
        onConnect(A, Q) {
            let {
                ret: B,
                res: G
            } = this;
            if (this.reason) {
                A(this.reason);
                return
            }
            StQ(!G, "pipeline cannot be retried"), StQ(!B.destroyed), this.abort = A, this.context = Q
        }
        onHeaders(A, Q, B) {
            let {
                opaque: G,
                handler: Z,
                context: I
            } = this;
            if (A < 200) {
                if (this.onInfo) {
                    let J = this.responseHeaders === "raw" ? cL.parseRawHeaders(Q) : cL.parseHeaders(Q);
                    this.onInfo({
                        statusCode: A,
                        headers: J
                    })
                }
                return
            }
            this.res = new ytQ(B);
            let Y;
            try {
                this.handler = null;
                let J = this.responseHeaders === "raw" ? cL.parseRawHeaders(Q) : cL.parseHeaders(Q);
                Y = this.runInAsyncScope(Z, null, {
                    statusCode: A,
                    headers: J,
                    opaque: G,
                    body: this.res,
                    context: I
                })
            } catch (J) {
                throw this.res.on("error", cL.nop), J
            }
            if (!Y || typeof Y.on !== "function") throw new wh8("expected Readable");
            Y.on("data", (J) => {
                let {
                    ret: W,
                    body: X
                } = this;
                if (!W.push(J) && X.pause) X.pause()
            }).on("error", (J) => {
                let {
                    ret: W
                } = this;
                cL.destroy(W, J)
            }).on("end", () => {
                let {
                    ret: J
                } = this;
                J.push(null)
            }).on("close", () => {
                let {
                    ret: J
                } = this;
                if (!J._readableState.ended) cL.destroy(J, new ck1)
            }), this.body = Y
        }
        onData(A) {
            let {
                res: Q
            } = this;
            return Q.push(A)
        }
        onComplete(A) {
            let {
                res: Q
            } = this;
            Q.push(null)
        }
        onError(A) {
            let {
                ret: Q
            } = this;
            this.handler = null, cL.destroy(Q, A)
        }
    }

function Mh8(A, Q) {
        try {
            let B = new xtQ(A, Q);
            return this.dispatch({
                ...A,
                body: B.req
            }, B), B.ret
        } catch (B) {
            return new $h8().destroy(B)
        }
    }
    vtQ.exports = Mh8
});
var ctQ = U((qN7, dtQ) => {
    var {
        InvalidArgumentError: pk1,
        SocketError: Oh8
    } = U7(), {
        AsyncResource: Rh8
    } = UA("node:async_hooks"), ftQ = M6(), {
        addSignal: Th8,
        removeSignal: htQ
    } = HEA(), gtQ = UA("node:assert");

class utQ extends Rh8 {
        constructor(A, Q) {
            if (!A || typeof A !== "object") throw new pk1("invalid opts");
            if (typeof Q !== "function") throw new pk1("invalid callback");
            let {
                signal: B,
                opaque: G,
                responseHeaders: Z
            } = A;
            if (B && typeof B.on !== "function" && typeof B.addEventListener !== "function") throw new pk1("signal must be an EventEmitter or EventTarget");
            super("UNDICI_UPGRADE");
            this.responseHeaders = Z || null, this.opaque = G || null, this.callback = Q, this.abort = null, this.context = null, Th8(this, B)
        }
        onConnect(A, Q) {
            if (this.reason) {
                A(this.reason);
                return
            }
            gtQ(this.callback), this.abort = A, this.context = null
        }
        onHeaders() {
            throw new Oh8("bad upgrade", null)
        }
        onUpgrade(A, Q, B) {
            gtQ(A === 101);
            let {
                callback: G,
                opaque: Z,
                context: I
            } = this;
            htQ(this), this.callback = null;
            let Y = this.responseHeaders === "raw" ? ftQ.parseRawHeaders(Q) : ftQ.parseHeaders(Q);
            this.runInAsyncScope(G, null, null, {
                headers: Y,
                socket: B,
                opaque: Z,
                context: I
            })
        }
        onError(A) {
            let {
                callback: Q,
                opaque: B
            } = this;
            if (htQ(this), Q) this.callback = null, queueMicrotask(() => {
                this.runInAsyncScope(Q, null, A, {
                    opaque: B
                })
            })
        }
    }

function mtQ(A, Q) {
        if (Q === void 0) return new Promise((B, G) => {
            mtQ.call(this, A, (Z, I) => {
                return Z ? G(Z) : B(I)
            })
        });
        try {
            let B = new utQ(A, Q);
            this.dispatch({
                ...A,
                method: A.method || "GET",
                upgrade: A.protocol || "Websocket"
            }, B)
        } catch (B) {
            if (typeof Q !== "function") throw B;
            let G = A?.opaque;
            queueMicrotask(() => Q(B, {
                opaque: G
            }))
        }
    }
    dtQ.exports = mtQ
});
var stQ = U((NN7, atQ) => {
    var Ph8 = UA("node:assert"),
        {
            AsyncResource: jh8
        } = UA("node:async_hooks"),
        {
            InvalidArgumentError: lk1,
            SocketError: Sh8
        } = U7(),
        ptQ = M6(),
        {
            addSignal: _h8,
            removeSignal: ltQ
        } = HEA();

class itQ extends jh8 {
        constructor(A, Q) {
            if (!A || typeof A !== "object") throw new lk1("invalid opts");
            if (typeof Q !== "function") throw new lk1("invalid callback");
            let {
                signal: B,
                opaque: G,
                responseHeaders: Z
            } = A;
            if (B && typeof B.on !== "function" && typeof B.addEventListener !== "function") throw new lk1("signal must be an EventEmitter or EventTarget");
            super("UNDICI_CONNECT");
            this.opaque = G || null, this.responseHeaders = Z || null, this.callback = Q, this.abort = null, _h8(this, B)
        }
        onConnect(A, Q) {
            if (this.reason) {
                A(this.reason);
                return
            }
            Ph8(this.callback), this.abort = A, this.context = Q
        }
        onHeaders() {
            throw new Sh8("bad connect", null)
        }
        onUpgrade(A, Q, B) {
            let {
                callback: G,
                opaque: Z,
                context: I
            } = this;
            ltQ(this), this.callback = null;
            let Y = Q;
            if (Y != null) Y = this.responseHeaders === "raw" ? ptQ.parseRawHeaders(Q) : ptQ.parseHeaders(Q);
            this.runInAsyncScope(G, null, null, {
                statusCode: A,
                headers: Y,
                socket: B,
                opaque: Z,
                context: I
            })
        }
        onError(A) {
            let {
                callback: Q,
                opaque: B
            } = this;
            if (ltQ(this), Q) this.callback = null, queueMicrotask(() => {
                this.runInAsyncScope(Q, null, A, {
                    opaque: B
                })
            })
        }
    }

function ntQ(A, Q) {
        if (Q === void 0) return new Promise((B, G) => {
            ntQ.call(this, A, (Z, I) => {
                return Z ? G(Z) : B(I)
            })
        });
        try {
            let B = new itQ(A, Q);
            this.dispatch({
                ...A,
                method: "CONNECT"
            }, B)
        } catch (B) {
            if (typeof Q !== "function") throw B;
            let G = A?.opaque;
            queueMicrotask(() => Q(B, {
                opaque: G
            }))
        }
    }
    atQ.exports = ntQ
});
var rtQ = U((kh8, l5A) => {
    kh8.request = qtQ();
    kh8.stream = jtQ();
    kh8.pipeline = btQ();
    kh8.upgrade = ctQ();
    kh8.connect = stQ()
});
var nk1 = U((LN7, otQ) => {
    var {
        UndiciError: hh8
    } = U7();

class ik1 extends hh8 {
        constructor(A) {
            super(A);
            Error.captureStackTrace(this, ik1), this.name = "MockNotMatchedError", this.message = A || "The request does not match any registered mock dispatches", this.code = "UND_MOCK_ERR_MOCK_NOT_MATCHED"
        }
    }
    otQ.exports = {
        MockNotMatchedError: ik1
    }
});
var i5A = U((MN7, ttQ) => {
    ttQ.exports = {
        kAgent: Symbol("agent"),
        kOptions: Symbol("options"),
        kFactory: Symbol("factory"),
        kDispatches: Symbol("dispatches"),
        kDispatchKey: Symbol("dispatch key"),
        kDefaultHeaders: Symbol("default headers"),
        kDefaultTrailers: Symbol("default trailers"),
        kContentLength: Symbol("content length"),
        kMockAgent: Symbol("mock agent"),
        kMockAgentSet: Symbol("mock agent set"),
        kMockAgentGet: Symbol("mock agent get"),
        kMockDispatch: Symbol("mock dispatch"),
        kClose: Symbol("close"),
        kOriginalClose: Symbol("original agent close"),
        kOrigin: Symbol("origin"),
        kIsMockActive: Symbol("is mock active"),
        kNetConnect: Symbol("net connect"),
        kGetNetConnect: Symbol("get net connect"),
        kConnected: Symbol("connected")
    }
});
var EEA = U((ON7, XeQ) => {
    var {
        MockNotMatchedError: qo
    } = nk1(), {
        kDispatches: NpA,
        kMockAgent: gh8,
        kOriginalDispatch: uh8,
        kOrigin: mh8,
        kGetNetConnect: dh8
    } = i5A(), {
        buildURL: ch8
    } = M6(), {
        STATUS_CODES: ph8
    } = UA("node:http"), {
        types: {
            isPromise: lh8
        }
    } = UA("node:util");

function wb(A, Q) {
        if (typeof A === "string") return A === Q;
        if (A instanceof RegExp) return A.test(Q);
        if (typeof A === "function") return A(Q) === !0;
        return !1
    }

function AeQ(A) {
        return Object.fromEntries(Object.entries(A).map(([Q, B]) => {
            return [Q.toLocaleLowerCase(), B]
        }))
    }

function QeQ(A, Q) {
        if (Array.isArray(A)) {
            for (let B = 0; B < A.length; B += 2)
                if (A[B].toLocaleLowerCase() === Q.toLocaleLowerCase()) return A[B + 1];
            return
        } else if (typeof A.get === "function") return A.get(Q);
        else return AeQ(A)[Q.toLocaleLowerCase()]
    }

function rk1(A) {
        let Q = A.slice(),
            B = [];
        for (let G = 0; G < Q.length; G += 2) B.push([Q[G], Q[G + 1]]);
        return Object.fromEntries(B)
    }

function BeQ(A, Q) {
        if (typeof A.headers === "function") {
            if (Array.isArray(Q)) Q = rk1(Q);
            return A.headers(Q ? AeQ(Q) : {})
        }
        if (typeof A.headers > "u") return !0;
        if (typeof Q !== "object" || typeof A.headers !== "object") return !1;
        for (let [B, G] of Object.entries(A.headers)) {
            let Z = QeQ(Q, B);
            if (!wb(G, Z)) return !1
        }
        return !0
    }

function etQ(A) {
        if (typeof A !== "string") return A;
        let Q = A.split("?");
        if (Q.length !== 2) return A;
        let B = new URLSearchParams(Q.pop());
        return B.sort(), [...Q, B.toString()].join("?")
    }

function ih8(A, {
        path: Q,
        method: B,
        body: G,
        headers: Z
    }) {
        let I = wb(A.path, Q),
            Y = wb(A.method, B),
            J = typeof A.body < "u" ? wb(A.body, G) : !0,
            W = BeQ(A, Z);
        return I && Y && J && W
    }

function GeQ(A) {
        if (Buffer.isBuffer(A)) return A;
        else if (A instanceof Uint8Array) return A;
        else if (A instanceof ArrayBuffer) return A;
        else if (typeof A === "object") return JSON.stringify(A);
        else return A.toString()
    }

function ZeQ(A, Q) {
        let B = Q.query ? ch8(Q.path, Q.query) : Q.path,
            G = typeof B === "string" ? etQ(B) : B,
            Z = A.filter(({
                consumed: I
            }) => !I).filter(({
                path: I
            }) => wb(etQ(I), G));
        if (Z.length === 0) throw new qo(`Mock dispatch not matched for path '${G}'`);
        if (Z = Z.filter(({
                method: I
            }) => wb(I, Q.method)), Z.length === 0) throw new qo(`Mock dispatch not matched for method '${Q.method}' on path '${G}'`);
        if (Z = Z.filter(({
                body: I
            }) => typeof I < "u" ? wb(I, Q.body) : !0), Z.length === 0) throw new qo(`Mock dispatch not matched for body '${Q.body}' on path '${G}'`);
        if (Z = Z.filter((I) => BeQ(I, Q.headers)), Z.length === 0) {
            let I = typeof Q.headers === "object" ? JSON.stringify(Q.headers) : Q.headers;
            throw new qo(`Mock dispatch not matched for headers '${I}' on path '${G}'`)
        }
        return Z[0]
    }

function nh8(A, Q, B) {
        let G = {
                timesInvoked: 0,
                times: 1,
                persist: !1,
                consumed: !1
            },
            Z = typeof B === "function" ? {
                callback: B
            } : {
                ...B
            },
            I = {
                ...G,
                ...Q,
                pending: !0,
                data: {
                    error: null,
                    ...Z
                }
            };
        return A.push(I), I
    }

function ak1(A, Q) {
        let B = A.findIndex((G) => {
            if (!G.consumed) return !1;
            return ih8(G, Q)
        });
        if (B !== -1) A.splice(B, 1)
    }

function IeQ(A) {
        let {
            path: Q,
            method: B,
            body: G,
            headers: Z,
            query: I
        } = A;
        return {
            path: Q,
            method: B,
            body: G,
            headers: Z,
            query: I
        }
    }

function sk1(A) {
        let Q = Object.keys(A),
            B = [];
        for (let G = 0; G < Q.length; ++G) {
            let Z = Q[G],
                I = A[Z],
                Y = Buffer.from(`${Z}`);
            if (Array.isArray(I))
                for (let J = 0; J < I.length; ++J) B.push(Y, Buffer.from(`${I[J]}`));
            else B.push(Y, Buffer.from(`${I}`))
        }
        return B
    }

function YeQ(A) {
        return ph8[A] || "unknown"
    }

async function ah8(A) {
        let Q = [];
        for await (let B of A) Q.push(B);
        return Buffer.concat(Q).toString("utf8")
    }

function JeQ(A, Q) {
        let B = IeQ(A),
            G = ZeQ(this[NpA], B);
        if (G.timesInvoked++, G.data.callback) G.data = {
            ...G.data,
            ...G.data.callback(A)
        };
        let {
            data: {
                statusCode: Z,
                data: I,
                headers: Y,
                trailers: J,
                error: W
            },
            delay: X,
            persist: F
        } = G, {
            timesInvoked: V,
            times: K
        } = G;
        if (G.consumed = !F && V >= K, G.pending = V < K, W !== null) return ak1(this[NpA], B), Q.onError(W), !0;
        if (typeof X === "number" && X > 0) setTimeout(() => {
            D(this[NpA])
        }, X);
        else D(this[NpA]);

function D(C, E = I) {
            let z = Array.isArray(A.headers) ? rk1(A.headers) : A.headers,
                w = typeof E === "function" ? E({
                    ...A,
                    headers: z
                }) : E;
            if (lh8(w)) {
                w.then((P) => D(C, P));