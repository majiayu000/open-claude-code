/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_032.js
 * 处理时间: 2025-12-09T03:37:24.186Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  9x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 32/61
 * Lines: 132865 - 134357 (1493 lines)
 * Original file: cli.js
 */

        destroy(A) {
            let {
                socket: Q,
                client: B,
                abort: G
            } = this;
            if (Q[ad] = !1, A) Y4(B[RH] <= 1, "pipeline should only contain this request"), G(A)
        }
    }
    krQ.exports = qv8
});
var mrQ = U((QN7, urQ) => {
    var mL = UA("node:assert"),
        {
            pipeline: Tv8
        } = UA("node:stream"),
        N5 = M6(),
        {
            RequestContentLengthMismatchError: Vk1,
            RequestAbortedError: xrQ,
            SocketError: rCA,
            InformationalError: Kk1
        } = U7(),
        {
            kUrl: JpA,
            kReset: XpA,
            kClient: v5A,
            kRunning: FpA,
            kPending: Pv8,
            kQueue: sd,
            kPendingIdx: Dk1,
            kRunningIdx: pR,
            kError: iR,
            kSocket: TV,
            kStrictContentLength: jv8,
            kOnError: Hk1,
            kMaxConcurrentStreams: grQ,
            kHTTP2Session: lR,
            kResume: rd,
            kSize: Sv8,
            kHTTPContext: _v8
        } = iI(),
        zb = Symbol("open streams"),
        vrQ, brQ = !1,
        WpA;
    try {
        WpA = UA("node:http2")
    } catch {
        WpA = {
            constants: {}
        }
    }
    var {
        constants: {
            HTTP2_HEADER_AUTHORITY: kv8,
            HTTP2_HEADER_METHOD: yv8,
            HTTP2_HEADER_PATH: xv8,
            HTTP2_HEADER_SCHEME: vv8,
            HTTP2_HEADER_CONTENT_LENGTH: bv8,
            HTTP2_HEADER_EXPECT: fv8,
            HTTP2_HEADER_STATUS: hv8
        }
    } = WpA;

    function gv8(A) {
        let Q = [];
        for (let [B, G] of Object.entries(A))
            if (Array.isArray(G))
                for (let Z of G) Q.push(Buffer.from(B), Buffer.from(Z));
            else Q.push(Buffer.from(B), Buffer.from(G));
        return Q
    }
    async function uv8(A, Q) {
        if (A[TV] = Q, !brQ) brQ = !0, process.emitWarning("H2 support is experimental, expect them to change at any time.", {
            code: "UNDICI-H2"
        });
        let B = WpA.connect(A[JpA], {
            createConnection: () => Q,
            peerMaxConcurrentStreams: A[grQ]
        });
        B[zb] = 0, B[v5A] = A, B[TV] = Q, N5.addListener(B, "error", dv8), N5.addListener(B, "frameError", cv8), N5.addListener(B, "end", pv8), N5.addListener(B, "goaway", lv8), N5.addListener(B, "close", function() {
            let {
                [v5A]: Z
            } = this, {
                [TV]: I
            } = Z, Y = this[TV][iR] || this[iR] || new rCA("closed", N5.getSocketInfo(I));
            if (Z[lR] = null, Z.destroyed) {
                mL(Z[Pv8] === 0);
                let J = Z[sd].splice(Z[pR]);
                for (let W = 0; W < J.length; W++) {
                    let X = J[W];
                    N5.errorRequest(Z, X, Y)
                }
            }
        }), B.unref(), A[lR] = B, Q[lR] = B, N5.addListener(Q, "error", function(Z) {
            mL(Z.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[iR] = Z, this[v5A][Hk1](Z)
        }), N5.addListener(Q, "end", function() {
            N5.destroy(this, new rCA("other side closed", N5.getSocketInfo(this)))
        }), N5.addListener(Q, "close", function() {
            let Z = this[iR] || new rCA("closed", N5.getSocketInfo(this));
            if (A[TV] = null, this[lR] != null) this[lR].destroy(Z);
            A[Dk1] = A[pR], mL(A[FpA] === 0), A.emit("disconnect", A[JpA], [A], Z), A[rd]()
        });
        let G = !1;
        return Q.on("close", () => {
            G = !0
        }), {
            version: "h2",
            defaultPipelining: 1 / 0,
            write(...Z) {
                return nv8(A, ...Z)
            },
            resume() {
                mv8(A)
            },
            destroy(Z, I) {
                if (G) queueMicrotask(I);
                else Q.destroy(Z).on("close", I)
            },
            get destroyed() {
                return Q.destroyed
            },
            busy() {
                return !1
            }
        }
    }

    function mv8(A) {
        let Q = A[TV];
        if (Q?.destroyed === !1)
            if (A[Sv8] === 0 && A[grQ] === 0) Q.unref(), A[lR].unref();
            else Q.ref(), A[lR].ref()
    }

    function dv8(A) {
        mL(A.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), this[TV][iR] = A, this[v5A][Hk1](A)
    }

    function cv8(A, Q, B) {
        if (B === 0) {
            let G = new Kk1(`HTTP/2: "frameError" received - type ${A}, code ${Q}`);
            this[TV][iR] = G, this[v5A][Hk1](G)
        }
    }

    function pv8() {
        let A = new rCA("other side closed", N5.getSocketInfo(this[TV]));
        this.destroy(A), N5.destroy(this[TV], A)
    }

    function lv8(A) {
        let Q = this[iR] || new rCA(`HTTP/2: "GOAWAY" frame received with code ${A}`, N5.getSocketInfo(this)),
            B = this[v5A];
        if (B[TV] = null, B[_v8] = null, this[lR] != null) this[lR].destroy(Q), this[lR] = null;
        if (N5.destroy(this[TV], Q), B[pR] < B[sd].length) {
            let G = B[sd][B[pR]];
            B[sd][B[pR]++] = null, N5.errorRequest(B, G, Q), B[Dk1] = B[pR]
        }
        mL(B[FpA] === 0), B.emit("disconnect", B[JpA], [B], Q), B[rd]()
    }

    function iv8(A) {
        return A !== "GET" && A !== "HEAD" && A !== "OPTIONS" && A !== "TRACE" && A !== "CONNECT"
    }

    function nv8(A, Q) {
        let B = A[lR],
            {
                method: G,
                path: Z,
                host: I,
                upgrade: Y,
                expectContinue: J,
                signal: W,
                headers: X
            } = Q,
            {
                body: F
            } = Q;
        if (Y) return N5.errorRequest(A, Q, Error("Upgrade not supported for H2")), !1;
        let V = {};
        for (let q = 0; q < X.length; q += 2) {
            let R = X[q + 0],
                P = X[q + 1];
            if (Array.isArray(P))
                for (let y = 0; y < P.length; y++)
                    if (V[R]) V[R] += `,${P[y]}`;
                    else V[R] = P[y];
            else V[R] = P
        }
        let K, {
            hostname: D,
            port: H
        } = A[JpA];
        V[kv8] = I || `${D}${H?`:${H}`:""}`, V[yv8] = G;
        let C = (q) => {
            if (Q.aborted || Q.completed) return;
            if (q = q || new xrQ, N5.errorRequest(A, Q, q), K != null) N5.destroy(K, q);
            N5.destroy(F, q), A[sd][A[pR]++] = null, A[rd]()
        };
        try {
            Q.onConnect(C)
        } catch (q) {
            N5.errorRequest(A, Q, q)
        }
        if (Q.aborted) return !1;
        if (G === "CONNECT") {
            if (B.ref(), K = B.request(V, {
                    endStream: !1,
                    signal: W
                }), K.id && !K.pending) Q.onUpgrade(null, null, K), ++B[zb], A[sd][A[pR]++] = null;
            else K.once("ready", () => {
                Q.onUpgrade(null, null, K), ++B[zb], A[sd][A[pR]++] = null
            });
            return K.once("close", () => {
                if (B[zb] -= 1, B[zb] === 0) B.unref()
            }), !0
        }
        V[xv8] = Z, V[vv8] = "https";
        let E = G === "PUT" || G === "POST" || G === "PATCH";
        if (F && typeof F.read === "function") F.read(0);
        let z = N5.bodyLength(F);
        if (N5.isFormDataLike(F)) {
            vrQ ??= _5A().extractBody;
            let [q, R] = vrQ(F);
            V["content-type"] = R, F = q.stream, z = q.length
        }
        if (z == null) z = Q.contentLength;
        if (z === 0 || !E) z = null;
        if (iv8(G) && z > 0 && Q.contentLength != null && Q.contentLength !== z) {
            if (A[jv8]) return N5.errorRequest(A, Q, new Vk1), !1;
            process.emitWarning(new Vk1)
        }
        if (z != null) mL(F, "no body must not have content length"), V[bv8] = `${z}`;
        B.ref();
        let w = G === "GET" || G === "HEAD" || F === null;
        if (J) V[fv8] = "100-continue", K = B.request(V, {
            endStream: w,
            signal: W
        }), K.once("continue", N);
        else K = B.request(V, {
            endStream: w,
            signal: W
        }), N();
        return ++B[zb], K.once("response", (q) => {
            let {
                [hv8]: R, ...P
            } = q;
            if (Q.onResponseStarted(), Q.aborted) {
                let y = new xrQ;
                N5.errorRequest(A, Q, y), N5.destroy(K, y);
                return
            }
            if (Q.onHeaders(Number(R), gv8(P), K.resume.bind(K), "") === !1) K.pause();
            K.on("data", (y) => {
                if (Q.onData(y) === !1) K.pause()
            })
        }), K.once("end", () => {
            if (K.state?.state == null || K.state.state < 6) Q.onComplete([]);
            if (B[zb] === 0) B.unref();
            C(new Kk1("HTTP/2: stream half-closed (remote)")), A[sd][A[pR]++] = null, A[Dk1] = A[pR], A[rd]()
        }), K.once("close", () => {
            if (B[zb] -= 1, B[zb] === 0) B.unref()
        }), K.once("error", function(q) {
            C(q)
        }), K.once("frameError", (q, R) => {
            C(new Kk1(`HTTP/2: "frameError" received - type ${q}, code ${R}`))
        }), !0;

        function N() {
            if (!F || z === 0) frQ(C, K, null, A, Q, A[TV], z, E);
            else if (N5.isBuffer(F)) frQ(C, K, F, A, Q, A[TV], z, E);
            else if (N5.isBlobLike(F))
                if (typeof F.stream === "function") hrQ(C, K, F.stream(), A, Q, A[TV], z, E);
                else sv8(C, K, F, A, Q, A[TV], z, E);
            else if (N5.isStream(F)) av8(C, A[TV], E, K, F, A, Q, z);
            else if (N5.isIterable(F)) hrQ(C, K, F, A, Q, A[TV], z, E);
            else mL(!1)
        }
    }

    function frQ(A, Q, B, G, Z, I, Y, J) {
        try {
            if (B != null && N5.isBuffer(B)) mL(Y === B.byteLength, "buffer body must have content length"), Q.cork(), Q.write(B), Q.uncork(), Q.end(), Z.onBodySent(B);
            if (!J) I[XpA] = !0;
            Z.onRequestSent(), G[rd]()
        } catch (W) {
            A(W)
        }
    }

    function av8(A, Q, B, G, Z, I, Y, J) {
        mL(J !== 0 || I[FpA] === 0, "stream body cannot be pipelined");
        let W = Tv8(Z, G, (F) => {
            if (F) N5.destroy(W, F), A(F);
            else {
                if (N5.removeAllListeners(W), Y.onRequestSent(), !B) Q[XpA] = !0;
                I[rd]()
            }
        });
        N5.addListener(W, "data", X);

        function X(F) {
            Y.onBodySent(F)
        }
    }
    async function sv8(A, Q, B, G, Z, I, Y, J) {
        mL(Y === B.size, "blob body must have content length");
        try {
            if (Y != null && Y !== B.size) throw new Vk1;
            let W = Buffer.from(await B.arrayBuffer());
            if (Q.cork(), Q.write(W), Q.uncork(), Q.end(), Z.onBodySent(W), Z.onRequestSent(), !J) I[XpA] = !0;
            G[rd]()
        } catch (W) {
            A(W)
        }
    }
    async function hrQ(A, Q, B, G, Z, I, Y, J) {
        mL(Y !== 0 || G[FpA] === 0, "iterator body cannot be pipelined");
        let W = null;

        function X() {
            if (W) {
                let V = W;
                W = null, V()
            }
        }
        let F = () => new Promise((V, K) => {
            if (mL(W === null), I[iR]) K(I[iR]);
            else W = V
        });
        Q.on("close", X).on("drain", X);
        try {
            for await (let V of B) {
                if (I[iR]) throw I[iR];
                let K = Q.write(V);
                if (Z.onBodySent(V), !K) await F()
            }
            if (Q.end(), Z.onRequestSent(), !J) I[XpA] = !0;
            G[rd]()
        } catch (V) {
            A(V)
        } finally {
            Q.off("close", X).off("drain", X)
        }
    }
    urQ.exports = uv8
});
var VpA = U((BN7, lrQ) => {
    var tS = M6(),
        {
            kBodyUsed: oCA
        } = iI(),
        Ek1 = UA("node:assert"),
        {
            InvalidArgumentError: rv8
        } = U7(),
        ov8 = UA("node:events"),
        tv8 = [300, 301, 302, 303, 307, 308],
        drQ = Symbol("body");
    class Ck1 {
        constructor(A) {
            this[drQ] = A, this[oCA] = !1
        }
        async * [Symbol.asyncIterator]() {
            Ek1(!this[oCA], "disturbed"), this[oCA] = !0, yield* this[drQ]
        }
    }
    class prQ {
        constructor(A, Q, B, G) {
            if (Q != null && (!Number.isInteger(Q) || Q < 0)) throw new rv8("maxRedirections must be a positive number");
            if (tS.validateHandler(G, B.method, B.upgrade), this.dispatch = A, this.location = null, this.abort = null, this.opts = {
                    ...B,
                    maxRedirections: 0
                }, this.maxRedirections = Q, this.handler = G, this.history = [], this.redirectionLimitReached = !1, tS.isStream(this.opts.body)) {
                if (tS.bodyLength(this.opts.body) === 0) this.opts.body.on("data", function() {
                    Ek1(!1)
                });
                if (typeof this.opts.body.readableDidRead !== "boolean") this.opts.body[oCA] = !1, ov8.prototype.on.call(this.opts.body, "data", function() {
                    this[oCA] = !0
                })
            } else if (this.opts.body && typeof this.opts.body.pipeTo === "function") this.opts.body = new Ck1(this.opts.body);
            else if (this.opts.body && typeof this.opts.body !== "string" && !ArrayBuffer.isView(this.opts.body) && tS.isIterable(this.opts.body)) this.opts.body = new Ck1(this.opts.body)
        }
        onConnect(A) {
            this.abort = A, this.handler.onConnect(A, {
                history: this.history
            })
        }
        onUpgrade(A, Q, B) {
            this.handler.onUpgrade(A, Q, B)
        }
        onError(A) {
            this.handler.onError(A)
        }
        onHeaders(A, Q, B, G) {
            if (this.location = this.history.length >= this.maxRedirections || tS.isDisturbed(this.opts.body) ? null : ev8(A, Q), this.opts.throwOnMaxRedirect && this.history.length >= this.maxRedirections) {
                if (this.request) this.request.abort(Error("max redirects"));
                this.redirectionLimitReached = !0, this.abort(Error("max redirects"));
                return
            }
            if (this.opts.origin) this.history.push(new URL(this.opts.path, this.opts.origin));
            if (!this.location) return this.handler.onHeaders(A, Q, B, G);
            let {
                origin: Z,
                pathname: I,
                search: Y
            } = tS.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))), J = Y ? `${I}${Y}` : I;
            if (this.opts.headers = Ab8(this.opts.headers, A === 303, this.opts.origin !== Z), this.opts.path = J, this.opts.origin = Z, this.opts.maxRedirections = 0, this.opts.query = null, A === 303 && this.opts.method !== "HEAD") this.opts.method = "GET", this.opts.body = null
        }
        onData(A) {
            if (this.location);
            else return this.handler.onData(A)
        }
        onComplete(A) {
            if (this.location) this.location = null, this.abort = null, this.dispatch(this.opts, this);
            else this.handler.onComplete(A)
        }
        onBodySent(A) {
            if (this.handler.onBodySent) this.handler.onBodySent(A)
        }
    }

    function ev8(A, Q) {
        if (tv8.indexOf(A) === -1) return null;
        for (let B = 0; B < Q.length; B += 2)
            if (Q[B].length === 8 && tS.headerNameToString(Q[B]) === "location") return Q[B + 1]
    }

    function crQ(A, Q, B) {
        if (A.length === 4) return tS.headerNameToString(A) === "host";
        if (Q && tS.headerNameToString(A).startsWith("content-")) return !0;
        if (B && (A.length === 13 || A.length === 6 || A.length === 19)) {
            let G = tS.headerNameToString(A);
            return G === "authorization" || G === "cookie" || G === "proxy-authorization"
        }
        return !1
    }

    function Ab8(A, Q, B) {
        let G = [];
        if (Array.isArray(A)) {
            for (let Z = 0; Z < A.length; Z += 2)
                if (!crQ(A[Z], Q, B)) G.push(A[Z], A[Z + 1])
        } else if (A && typeof A === "object") {
            for (let Z of Object.keys(A))
                if (!crQ(Z, Q, B)) G.push(Z, A[Z])
        } else Ek1(A == null, "headers must be an object or an array");
        return G
    }
    lrQ.exports = prQ
});
var KpA = U((GN7, irQ) => {
    var Qb8 = VpA();

    function Bb8({
        maxRedirections: A
    }) {
        return (Q) => {
            return function(G, Z) {
                let {
                    maxRedirections: I = A
                } = G;
                if (!I) return Q(G, Z);
                let Y = new Qb8(Q, I, G, Z);
                return G = {
                    ...G,
                    maxRedirections: 0
                }, Q(G, Y)
            }
        }
    }
    irQ.exports = Bb8
});
var ZEA = U((ZN7, GoQ) => {
    var Ub = UA("node:assert"),
        trQ = UA("node:net"),
        Gb8 = UA("node:http"),
        Co = M6(),
        {
            channels: b5A
        } = U5A(),
        Zb8 = haQ(),
        Ib8 = N5A(),
        {
            InvalidArgumentError: wW,
            InformationalError: Yb8,
            ClientDestroyedError: Jb8
        } = U7(),
        Wb8 = gCA(),
        {
            kUrl: eS,
            kServerName: od,
            kClient: Xb8,
            kBusy: zk1,
            kConnect: Fb8,
            kResuming: Eo,
            kRunning: BEA,
            kPending: GEA,
            kSize: QEA,
            kQueue: nR,
            kConnected: Vb8,
            kConnecting: f5A,
            kNeedDrain: ed,
            kKeepAliveDefaultTimeout: nrQ,
            kHostHeader: Kb8,
            kPendingIdx: aR,
            kRunningIdx: $b,
            kError: Db8,
            kPipelining: DpA,
            kKeepAliveTimeoutValue: Hb8,
            kMaxHeadersSize: Cb8,
            kKeepAliveMaxTimeout: Eb8,
            kKeepAliveTimeoutThreshold: zb8,
            kHeadersTimeout: Ub8,
            kBodyTimeout: $b8,
            kStrictContentLength: wb8,
            kConnector: tCA,
            kMaxRedirections: qb8,
            kMaxRequests: Uk1,
            kCounter: Nb8,
            kClose: Lb8,
            kDestroy: Mb8,
            kDispatch: Ob8,
            kInterceptors: arQ,
            kLocalAddress: eCA,
            kMaxResponseSize: Rb8,
            kOnError: Tb8,
            kHTTPContext: qW,
            kMaxConcurrentStreams: Pb8,
            kResume: AEA
        } = iI(),
        jb8 = yrQ(),
        Sb8 = mrQ(),
        srQ = !1,
        td = Symbol("kClosedResolve"),
        rrQ = () => {};

    function erQ(A) {
        return A[DpA] ?? A[qW]?.defaultPipelining ?? 1
    }
    class AoQ extends Ib8 {
        constructor(A, {
            interceptors: Q,
            maxHeaderSize: B,
            headersTimeout: G,
            socketTimeout: Z,
            requestTimeout: I,
            connectTimeout: Y,
            bodyTimeout: J,
            idleTimeout: W,
            keepAlive: X,
            keepAliveTimeout: F,
            maxKeepAliveTimeout: V,
            keepAliveMaxTimeout: K,
            keepAliveTimeoutThreshold: D,
            socketPath: H,
            pipelining: C,
            tls: E,
            strictContentLength: z,
            maxCachedSessions: w,
            maxRedirections: N,
            connect: q,
            maxRequestsPerClient: R,
            localAddress: P,
            maxResponseSize: y,
            autoSelectFamily: v,
            autoSelectFamilyAttemptTimeout: x,
            maxConcurrentStreams: p,
            allowH2: u
        } = {}) {
            super();
            if (X !== void 0) throw new wW("unsupported keepAlive, use pipelining=0 instead");
            if (Z !== void 0) throw new wW("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
            if (I !== void 0) throw new wW("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
            if (W !== void 0) throw new wW("unsupported idleTimeout, use keepAliveTimeout instead");
            if (V !== void 0) throw new wW("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
            if (B != null && !Number.isFinite(B)) throw new wW("invalid maxHeaderSize");
            if (H != null && typeof H !== "string") throw new wW("invalid socketPath");
            if (Y != null && (!Number.isFinite(Y) || Y < 0)) throw new wW("invalid connectTimeout");
            if (F != null && (!Number.isFinite(F) || F <= 0)) throw new wW("invalid keepAliveTimeout");
            if (K != null && (!Number.isFinite(K) || K <= 0)) throw new wW("invalid keepAliveMaxTimeout");
            if (D != null && !Number.isFinite(D)) throw new wW("invalid keepAliveTimeoutThreshold");
            if (G != null && (!Number.isInteger(G) || G < 0)) throw new wW("headersTimeout must be a positive integer or zero");
            if (J != null && (!Number.isInteger(J) || J < 0)) throw new wW("bodyTimeout must be a positive integer or zero");
            if (q != null && typeof q !== "function" && typeof q !== "object") throw new wW("connect must be a function or an object");
            if (N != null && (!Number.isInteger(N) || N < 0)) throw new wW("maxRedirections must be a positive number");
            if (R != null && (!Number.isInteger(R) || R < 0)) throw new wW("maxRequestsPerClient must be a positive number");
            if (P != null && (typeof P !== "string" || trQ.isIP(P) === 0)) throw new wW("localAddress must be valid string IP address");
            if (y != null && (!Number.isInteger(y) || y < -1)) throw new wW("maxResponseSize must be a positive number");
            if (x != null && (!Number.isInteger(x) || x < -1)) throw new wW("autoSelectFamilyAttemptTimeout must be a positive number");
            if (u != null && typeof u !== "boolean") throw new wW("allowH2 must be a valid boolean value");
            if (p != null && (typeof p !== "number" || p < 1)) throw new wW("maxConcurrentStreams must be a positive integer, greater than 0");
            if (typeof q !== "function") q = Wb8({
                ...E,
                maxCachedSessions: w,
                allowH2: u,
                socketPath: H,
                timeout: Y,
                ...v ? {
                    autoSelectFamily: v,
                    autoSelectFamilyAttemptTimeout: x
                } : void 0,
                ...q
            });
            if (Q?.Client && Array.isArray(Q.Client)) {
                if (this[arQ] = Q.Client, !srQ) srQ = !0, process.emitWarning("Client.Options#interceptor is deprecated. Use Dispatcher#compose instead.", {
                    code: "UNDICI-CLIENT-INTERCEPTOR-DEPRECATED"
                })
            } else this[arQ] = [_b8({
                maxRedirections: N
            })];
            this[eS] = Co.parseOrigin(A), this[tCA] = q, this[DpA] = C != null ? C : 1, this[Cb8] = B || Gb8.maxHeaderSize, this[nrQ] = F == null ? 4000 : F, this[Eb8] = K == null ? 600000 : K, this[zb8] = D == null ? 2000 : D, this[Hb8] = this[nrQ], this[od] = null, this[eCA] = P != null ? P : null, this[Eo] = 0, this[ed] = 0, this[Kb8] = `host: ${this[eS].hostname}${this[eS].port?`:${this[eS].port}`:""}\r
`, this[$b8] = J != null ? J : 300000, this[Ub8] = G != null ? G : 300000, this[wb8] = z == null ? !0 : z, this[qb8] = N, this[Uk1] = R, this[td] = null, this[Rb8] = y > -1 ? y : -1, this[Pb8] = p != null ? p : 100, this[qW] = null, this[nR] = [], this[$b] = 0, this[aR] = 0, this[AEA] = (o) => $k1(this, o), this[Tb8] = (o) => QoQ(this, o)
        }
        get pipelining() {
            return this[DpA]
        }
        set pipelining(A) {
            this[DpA] = A, this[AEA](!0)
        }
        get[GEA]() {
            return this[nR].length - this[aR]
        }
        get[BEA]() {
            return this[aR] - this[$b]
        }
        get[QEA]() {
            return this[nR].length - this[$b]
        }
        get[Vb8]() {
            return !!this[qW] && !this[f5A] && !this[qW].destroyed
        }
        get[zk1]() {
            return Boolean(this[qW]?.busy(null) || this[QEA] >= (erQ(this) || 1) || this[GEA] > 0)
        } [Fb8](A) {
            BoQ(this), this.once("connect", A)
        } [Ob8](A, Q) {
            let B = A.origin || this[eS].origin,
                G = new Zb8(B, A, Q);
            if (this[nR].push(G), this[Eo]);
            else if (Co.bodyLength(G.body) == null && Co.isIterable(G.body)) this[Eo] = 1, queueMicrotask(() => $k1(this));
            else this[AEA](!0);
            if (this[Eo] && this[ed] !== 2 && this[zk1]) this[ed] = 2;
            return this[ed] < 2
        }
        async [Lb8]() {
            return new Promise((A) => {
                if (this[QEA]) this[td] = A;
                else A(null)
            })
        }
        async [Mb8](A) {
            return new Promise((Q) => {
                let B = this[nR].splice(this[aR]);
                for (let Z = 0; Z < B.length; Z++) {
                    let I = B[Z];
                    Co.errorRequest(this, I, A)
                }
                let G = () => {
                    if (this[td]) this[td](), this[td] = null;
                    Q(null)
                };
                if (this[qW]) this[qW].destroy(A, G), this[qW] = null;
                else queueMicrotask(G);
                this[AEA]()
            })
        }
    }
    var _b8 = KpA();

    function QoQ(A, Q) {
        if (A[BEA] === 0 && Q.code !== "UND_ERR_INFO" && Q.code !== "UND_ERR_SOCKET") {
            Ub(A[aR] === A[$b]);
            let B = A[nR].splice(A[$b]);
            for (let G = 0; G < B.length; G++) {
                let Z = B[G];
                Co.errorRequest(A, Z, Q)
            }
            Ub(A[QEA] === 0)
        }
    }
    async function BoQ(A) {
        Ub(!A[f5A]), Ub(!A[qW]);
        let {
            host: Q,
            hostname: B,
            protocol: G,
            port: Z
        } = A[eS];
        if (B[0] === "[") {
            let I = B.indexOf("]");
            Ub(I !== -1);
            let Y = B.substring(1, I);
            Ub(trQ.isIP(Y)), B = Y
        }
        if (A[f5A] = !0, b5A.beforeConnect.hasSubscribers) b5A.beforeConnect.publish({
            connectParams: {
                host: Q,
                hostname: B,
                protocol: G,
                port: Z,
                version: A[qW]?.version,
                servername: A[od],
                localAddress: A[eCA]
            },
            connector: A[tCA]
        });
        try {
            let I = await new Promise((Y, J) => {
                A[tCA]({
                    host: Q,
                    hostname: B,
                    protocol: G,
                    port: Z,
                    servername: A[od],
                    localAddress: A[eCA]
                }, (W, X) => {
                    if (W) J(W);
                    else Y(X)
                })
            });
            if (A.destroyed) {
                Co.destroy(I.on("error", rrQ), new Jb8);
                return
            }
            Ub(I);
            try {
                A[qW] = I.alpnProtocol === "h2" ? await Sb8(A, I) : await jb8(A, I)
            } catch (Y) {
                throw I.destroy().on("error", rrQ), Y
            }
            if (A[f5A] = !1, I[Nb8] = 0, I[Uk1] = A[Uk1], I[Xb8] = A, I[Db8] = null, b5A.connected.hasSubscribers) b5A.connected.publish({
                connectParams: {
                    host: Q,
                    hostname: B,
                    protocol: G,
                    port: Z,
                    version: A[qW]?.version,
                    servername: A[od],
                    localAddress: A[eCA]
                },
                connector: A[tCA],
                socket: I
            });
            A.emit("connect", A[eS], [A])
        } catch (I) {
            if (A.destroyed) return;
            if (A[f5A] = !1, b5A.connectError.hasSubscribers) b5A.connectError.publish({
                connectParams: {
                    host: Q,
                    hostname: B,
                    protocol: G,
                    port: Z,
                    version: A[qW]?.version,
                    servername: A[od],
                    localAddress: A[eCA]
                },
                connector: A[tCA],
                error: I
            });
            if (I.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
                Ub(A[BEA] === 0);
                while (A[GEA] > 0 && A[nR][A[aR]].servername === A[od]) {
                    let Y = A[nR][A[aR]++];
                    Co.errorRequest(A, Y, I)
                }
            } else QoQ(A, I);
            A.emit("connectionError", A[eS], [A], I)
        }
        A[AEA]()
    }

    function orQ(A) {
        A[ed] = 0, A.emit("drain", A[eS], [A])
    }

    function $k1(A, Q) {
        if (A[Eo] === 2) return;
        if (A[Eo] = 2, kb8(A, Q), A[Eo] = 0, A[$b] > 256) A[nR].splice(0, A[$b]), A[aR] -= A[$b], A[$b] = 0
    }

    function kb8(A, Q) {
        while (!0) {
            if (A.destroyed) {
                Ub(A[GEA] === 0);
                return
            }
            if (A[td] && !A[QEA]) {
                A[td](), A[td] = null;
                return
            }
            if (A[qW]) A[qW].resume();
            if (A[zk1]) A[ed] = 2;
            else if (A[ed] === 2) {
                if (Q) A[ed] = 1, queueMicrotask(() => orQ(A));
                else orQ(A);
                continue
            }
            if (A[GEA] === 0) return;
            if (A[BEA] >= (erQ(A) || 1)) return;
            let B = A[nR][A[aR]];
            if (A[eS].protocol === "https:" && A[od] !== B.servername) {
                if (A[BEA] > 0) return;
                A[od] = B.servername, A[qW]?.destroy(new Yb8("servername changed"), () => {
                    A[qW] = null, $k1(A)
                })
            }
            if (A[f5A]) return;
            if (!A[qW]) {
                BoQ(A);
                return
            }
            if (A[qW].destroyed) return;
            if (A[qW].busy(B)) return;
            if (!B.aborted && A[qW].write(B)) A[aR]++;
            else A[nR].splice(A[aR], 1)
        }
    }
    GoQ.exports = AoQ
});
var qk1 = U((IN7, ZoQ) => {
    class wk1 {
        constructor() {
            this.bottom = 0, this.top = 0, this.list = Array(2048), this.next = null
        }
        isEmpty() {
            return this.top === this.bottom
        }
        isFull() {
            return (this.top + 1 & 2047) === this.bottom
        }
        push(A) {
            this.list[this.top] = A, this.top = this.top + 1 & 2047
        }
        shift() {
            let A = this.list[this.bottom];
            if (A === void 0) return null;
            return this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & 2047, A
        }
    }
    ZoQ.exports = class {
        constructor() {
            this.head = this.tail = new wk1
        }
        isEmpty() {
            return this.head.isEmpty()
        }
        push(Q) {
            if (this.head.isFull()) this.head = this.head.next = new wk1;
            this.head.push(Q)
        }
        shift() {
            let Q = this.tail,
                B = Q.shift();
            if (Q.isEmpty() && Q.next !== null) this.tail = Q.next;
            return B
        }
    }
});
var JoQ = U((YN7, YoQ) => {
    var {
        kFree: yb8,
        kConnected: xb8,
        kPending: vb8,
        kQueued: bb8,
        kRunning: fb8,
        kSize: hb8
    } = iI(), zo = Symbol("pool");
    class IoQ {
        constructor(A) {
            this[zo] = A
        }
        get connected() {
            return this[zo][xb8]
        }
        get free() {
            return this[zo][yb8]
        }
        get pending() {
            return this[zo][vb8]
        }
        get queued() {
            return this[zo][bb8]
        }
        get running() {
            return this[zo][fb8]
        }
        get size() {
            return this[zo][hb8]
        }
    }
    YoQ.exports = IoQ
});
var Rk1 = U((JN7, UoQ) => {
    var gb8 = N5A(),
        ub8 = qk1(),
        {
            kConnected: Nk1,
            kSize: WoQ,
            kRunning: XoQ,
            kPending: FoQ,
            kQueued: IEA,
            kBusy: mb8,
            kFree: db8,
            kUrl: cb8,
            kClose: pb8,
            kDestroy: lb8,
            kDispatch: ib8
        } = iI(),
        nb8 = JoQ(),
        AU = Symbol("clients"),
        aC = Symbol("needDrain"),
        YEA = Symbol("queue"),
        Lk1 = Symbol("closed resolve"),
        Mk1 = Symbol("onDrain"),
        VoQ = Symbol("onConnect"),
        KoQ = Symbol("onDisconnect"),
        DoQ = Symbol("onConnectionError"),
        Ok1 = Symbol("get dispatcher"),
        CoQ = Symbol("add client"),
        EoQ = Symbol("remove client"),
        HoQ = Symbol("stats");
    class zoQ extends gb8 {
        constructor() {
            super();
            this[YEA] = new ub8, this[AU] = [], this[IEA] = 0;
            let A = this;
            this[Mk1] = function(B, G) {
                let Z = A[YEA],
                    I = !1;
                while (!I) {
                    let Y = Z.shift();
                    if (!Y) break;
                    A[IEA]--, I = !this.dispatch(Y.opts, Y.handler)
                }
                if (this[aC] = I, !this[aC] && A[aC]) A[aC] = !1, A.emit("drain", B, [A, ...G]);
                if (A[Lk1] && Z.isEmpty()) Promise.all(A[AU].map((Y) => Y.close())).then(A[Lk1])
            }, this[VoQ] = (Q, B) => {
                A.emit("connect", Q, [A, ...B])
            }, this[KoQ] = (Q, B, G) => {
                A.emit("disconnect", Q, [A, ...B], G)
            }, this[DoQ] = (Q, B, G) => {
                A.emit("connectionError", Q, [A, ...B], G)
            }, this[HoQ] = new nb8(this)
        }
        get[mb8]() {
            return this[aC]
        }
        get[Nk1]() {
            return this[AU].filter((A) => A[Nk1]).length
        }
        get[db8]() {
            return this[AU].filter((A) => A[Nk1] && !A[aC]).length
        }
        get[FoQ]() {
            let A = this[IEA];
            for (let {
                    [FoQ]: Q
                }
                of this[AU]) A += Q;
            return A
        }
        get[XoQ]() {
            let A = 0;
            for (let {
                    [XoQ]: Q
                }
                of this[AU]) A += Q;
            return A
        }
        get[WoQ]() {
            let A = this[IEA];
            for (let {
                    [WoQ]: Q
                }
                of this[AU]) A += Q;
            return A
        }
        get stats() {
            return this[HoQ]
        }
        async [pb8]() {
            if (this[YEA].isEmpty()) await Promise.all(this[AU].map((A) => A.close()));
            else await new Promise((A) => {
                this[Lk1] = A
            })
        }
        async [lb8](A) {
            while (!0) {
                let Q = this[YEA].shift();
                if (!Q) break;
                Q.handler.onError(A)
            }
            await Promise.all(this[AU].map((Q) => Q.destroy(A)))
        } [ib8](A, Q) {
            let B = this[Ok1]();
            if (!B) this[aC] = !0, this[YEA].push({
                opts: A,
                handler: Q
            }), this[IEA]++;
            else if (!B.dispatch(A, Q)) B[aC] = !0, this[aC] = !this[Ok1]();
            return !this[aC]
        } [CoQ](A) {
            if (A.on("drain", this[Mk1]).on("connect", this[VoQ]).on("disconnect", this[KoQ]).on("connectionError", this[DoQ]), this[AU].push(A), this[aC]) queueMicrotask(() => {
                if (this[aC]) this[Mk1](A[cb8], [this, A])
            });
            return this
        } [EoQ](A) {
            A.close(() => {
                let Q = this[AU].indexOf(A);
                if (Q !== -1) this[AU].splice(Q, 1)
            }), this[aC] = this[AU].some((Q) => !Q[aC] && Q.closed !== !0 && Q.destroyed !== !0)
        }
    }
    UoQ.exports = {
        PoolBase: zoQ,
        kClients: AU,
        kNeedDrain: aC,
        kAddClient: CoQ,
        kRemoveClient: EoQ,
        kGetDispatcher: Ok1
    }
});
var h5A = U((WN7, MoQ) => {
    var {
        PoolBase: ab8,
        kClients: $oQ,
        kNeedDrain: sb8,
        kAddClient: rb8,
        kGetDispatcher: ob8
    } = Rk1(), tb8 = ZEA(), {
        InvalidArgumentError: Tk1
    } = U7(), woQ = M6(), {
        kUrl: qoQ,
        kInterceptors: eb8
    } = iI(), Af8 = gCA(), Pk1 = Symbol("options"), jk1 = Symbol("connections"), NoQ = Symbol("factory");

    function Qf8(A, Q) {
        return new tb8(A, Q)
    }
    class LoQ extends ab8 {
        constructor(A, {
            connections: Q,
            factory: B = Qf8,
            connect: G,
            connectTimeout: Z,
            tls: I,
            maxCachedSessions: Y,
            socketPath: J,
            autoSelectFamily: W,
            autoSelectFamilyAttemptTimeout: X,
            allowH2: F,
            ...V
        } = {}) {
            super();
            if (Q != null && (!Number.isFinite(Q) || Q < 0)) throw new Tk1("invalid connections");
            if (typeof B !== "function") throw new Tk1("factory must be a function.");
            if (G != null && typeof G !== "function" && typeof G !== "object") throw new Tk1("connect must be a function or an object");
            if (typeof G !== "function") G = Af8({
                ...I,
                maxCachedSessions: Y,
                allowH2: F,
                socketPath: J,
                timeout: Z,
                ...W ? {
                    autoSelectFamily: W,
                    autoSelectFamilyAttemptTimeout: X
                } : void 0,
                ...G
            });
            this[eb8] = V.interceptors?.Pool && Array.isArray(V.interceptors.Pool) ? V.interceptors.Pool : [], this[jk1] = Q || null, this[qoQ] = woQ.parseOrigin(A), this[Pk1] = {
                ...woQ.deepClone(V),
                connect: G,
                allowH2: F
            }, this[Pk1].interceptors = V.interceptors ? {
                ...V.interceptors
            } : void 0, this[NoQ] = B
        } [ob8]() {
            for (let A of this[$oQ])
                if (!A[sb8]) return A;
            if (!this[jk1] || this[$oQ].length < this[jk1]) {
                let A = this[NoQ](this[qoQ], this[Pk1]);
                return this[rb8](A), A
            }
        }
    }
    MoQ.exports = LoQ
});
var SoQ = U((XN7, joQ) => {
    var {
        BalancedPoolMissingUpstreamError: Bf8,
        InvalidArgumentError: Gf8
    } = U7(), {
        PoolBase: Zf8,
        kClients: TH,
        kNeedDrain: JEA,
        kAddClient: If8,
        kRemoveClient: Yf8,
        kGetDispatcher: Jf8
    } = Rk1(), Wf8 = h5A(), {
        kUrl: Sk1,
        kInterceptors: Xf8
    } = iI(), {
        parseOrigin: OoQ
    } = M6(), RoQ = Symbol("factory"), HpA = Symbol("options"), ToQ = Symbol("kGreatestCommonDivisor"), Uo = Symbol("kCurrentWeight"), $o = Symbol("kIndex"), dL = Symbol("kWeight"), CpA = Symbol("kMaxWeightPerServer"), EpA = Symbol("kErrorPenalty");

    function Ff8(A, Q) {
        if (A === 0) return Q;
        while (Q !== 0) {
            let B = Q;
            Q = A % Q, A = B
        }
        return A
    }

    function Vf8(A, Q) {
        return new Wf8(A, Q)
    }
    class PoQ extends Zf8 {
        constructor(A = [], {
            factory: Q = Vf8,
            ...B
        } = {}) {
            super();
            if (this[HpA] = B, this[$o] = -1, this[Uo] = 0, this[CpA] = this[HpA].maxWeightPerServer || 100, this[EpA] = this[HpA].errorPenalty || 15, !Array.isArray(A)) A = [A];
            if (typeof Q !== "function") throw new Gf8("factory must be a function.");
            this[Xf8] = B.interceptors?.BalancedPool && Array.isArray(B.interceptors.BalancedPool) ? B.interceptors.BalancedPool : [], this[RoQ] = Q;
            for (let G of A) this.addUpstream(G);
            this._updateBalancedPoolStats()
        }
        addUpstream(A) {
            let Q = OoQ(A).origin;
            if (this[TH].find((G) => G[Sk1].origin === Q && G.closed !== !0 && G.destroyed !== !0)) return this;
            let B = this[RoQ](Q, Object.assign({}, this[HpA]));
            this[If8](B), B.on("connect", () => {
                B[dL] = Math.min(this[CpA], B[dL] + this[EpA])
            }), B.on("connectionError", () => {
                B[dL] = Math.max(1, B[dL] - this[EpA]), this._updateBalancedPoolStats()
            }), B.on("disconnect", (...G) => {
                let Z = G[2];
                if (Z && Z.code === "UND_ERR_SOCKET") B[dL] = Math.max(1, B[dL] - this[EpA]), this._updateBalancedPoolStats()
            });
            for (let G of this[TH]) G[dL] = this[CpA];
            return this._updateBalancedPoolStats(), this
        }
        _updateBalancedPoolStats() {
            let A = 0;
            for (let Q = 0; Q < this[TH].length; Q++) A = Ff8(this[TH][Q][dL], A);
            this[ToQ] = A
        }
        removeUpstream(A) {
            let Q = OoQ(A).origin,
                B = this[TH].find((G) => G[Sk1].origin === Q && G.closed !== !0 && G.destroyed !== !0);
            if (B) this[Yf8](B);
            return this
        }
        get upstreams() {
            return this[TH].filter((A) => A.closed !== !0 && A.destroyed !== !0).map((A) => A[Sk1].origin)
        } [Jf8]() {
            if (this[TH].length === 0) throw new Bf8;
            if (!this[TH].find((Z) => !Z[JEA] && Z.closed !== !0 && Z.destroyed !== !0)) return;
            if (this[TH].map((Z) => Z[JEA]).reduce((Z, I) => Z && I, !0)) return;
            let B = 0,
                G = this[TH].findIndex((Z) => !Z[JEA]);
            while (B++ < this[TH].length) {
                this[$o] = (this[$o] + 1) % this[TH].length;
                let Z = this[TH][this[$o]];
                if (Z[dL] > this[TH][G][dL] && !Z[JEA]) G = this[$o];
                if (this[$o] === 0) {
                    if (this[Uo] = this[Uo] - this[ToQ], this[Uo] <= 0) this[Uo] = this[CpA]
                }
                if (Z[dL] >= this[Uo] && !Z[JEA]) return Z
            }
            return this[Uo] = this[TH][G][dL], this[$o] = G, this[TH][G]
        }
    }
    joQ.exports = PoQ
});
var g5A = U((FN7, hoQ) => {
    var {
        InvalidArgumentError: zpA
    } = U7(), {
        kClients: Ac,
        kRunning: _oQ,
        kClose: Kf8,
        kDestroy: Df8,
        kDispatch: Hf8,
        kInterceptors: Cf8
    } = iI(), Ef8 = N5A(), zf8 = h5A(), Uf8 = ZEA(), $f8 = M6(), wf8 = KpA(), koQ = Symbol("onConnect"), yoQ = Symbol("onDisconnect"), xoQ = Symbol("onConnectionError"), qf8 = Symbol("maxRedirections"), voQ = Symbol("onDrain"), boQ = Symbol("factory"), _k1 = Symbol("options");

    function Nf8(A, Q) {
        return Q && Q.connections === 1 ? new Uf8(A, Q) : new zf8(A, Q)
    }
    class foQ extends Ef8 {
        constructor({
            factory: A = Nf8,
            maxRedirections: Q = 0,
            connect: B,
            ...G
        } = {}) {
            super();
            if (typeof A !== "function") throw new zpA("factory must be a function.");
            if (B != null && typeof B !== "function" && typeof B !== "object") throw new zpA("connect must be a function or an object");
            if (!Number.isInteger(Q) || Q < 0) throw new zpA("maxRedirections must be a positive number");
            if (B && typeof B !== "function") B = {
                ...B
            };
            this[Cf8] = G.interceptors?.Agent && Array.isArray(G.interceptors.Agent) ? G.interceptors.Agent : [wf8({
                maxRedirections: Q
            })], this[_k1] = {
                ...$f8.deepClone(G),
                connect: B
            }, this[_k1].interceptors = G.interceptors ? {
                ...G.interceptors
            } : void 0, this[qf8] = Q, this[boQ] = A, this[Ac] = new Map, this[voQ] = (Z, I) => {
                this.emit("drain", Z, [this, ...I])
            }, this[koQ] = (Z, I) => {
                this.emit("connect", Z, [this, ...I])
            }, this[yoQ] = (Z, I, Y) => {
                this.emit("disconnect", Z, [this, ...I], Y)
            }, this[xoQ] = (Z, I, Y) => {
                this.emit("connectionError", Z, [this, ...I], Y)
            }
        }
        get[_oQ]() {
            let A = 0;
            for (let Q of this[Ac].values()) A += Q[_oQ];
            return A
        } [Hf8](A, Q) {
            let B;
            if (A.origin && (typeof A.origin === "string" || A.origin instanceof URL)) B = String(A.origin);
            else throw new zpA("opts.origin must be a non-empty string or URL.");
            let G = this[Ac].get(B);
            if (!G) G = this[boQ](A.origin, this[_k1]).on("drain", this[voQ]).on("connect", this[koQ]).on("disconnect", this[yoQ]).on("connectionError", this[xoQ]), this[Ac].set(B, G);
            return G.dispatch(A, Q)
        }
        async [Kf8]() {
            let A = [];
            for (let Q of this[Ac].values()) A.push(Q.close());
            this[Ac].clear(), await Promise.all(A)
        }
        async [Df8](A) {
            let Q = [];
            for (let B of this[Ac].values()) Q.push(B.destroy(A));
            this[Ac].clear(), await Promise.all(Q)
        }
    }
    hoQ.exports = foQ
});
var yk1 = U((VN7, coQ) => {
    var {
        kProxy: Lf8,
        kClose: Mf8,
        kDestroy: Of8,
        kInterceptors: Rf8
    } = iI(), {
        URL: WEA
    } = UA("node:url"), Tf8 = g5A(), Pf8 = h5A(), jf8 = N5A(), {
        InvalidArgumentError: wpA,
        RequestAbortedError: Sf8,
        SecureProxyConnectionError: _f8
    } = U7(), goQ = gCA(), UpA = Symbol("proxy agent"), $pA = Symbol("proxy client"), XEA = Symbol("proxy headers"), kk1 = Symbol("request tls settings"), uoQ = Symbol("proxy tls settings"), moQ = Symbol("connect endpoint function");

    function kf8(A) {
        return A === "https:" ? 443 : 80
    }

    function yf8(A, Q) {
        return new Pf8(A, Q)
    }
    var xf8 = () => {};
    class doQ extends jf8 {
        constructor(A) {
            super();
            if (!A || typeof A === "object" && !(A instanceof WEA) && !A.uri) throw new wpA("Proxy uri is mandatory");
            let {
                clientFactory: Q = yf8
            } = A;
            if (typeof Q !== "function") throw new wpA("Proxy opts.clientFactory must be a function.");
            let B = this.#A(A),
                {
                    href: G,
                    origin: Z,
                    port: I,
                    protocol: Y,
                    username: J,
                    password: W,
                    hostname: X
                } = B;
            if (this[Lf8] = {
                    uri: G,
                    protocol: Y
                }, this[Rf8] = A.interceptors?.ProxyAgent && Array.isArray(A.interceptors.ProxyAgent) ? A.interceptors.ProxyAgent : [], this[kk1] = A.requestTls, this[uoQ] = A.proxyTls, this[XEA] = A.headers || {}, A.auth && A.token) throw new wpA("opts.auth cannot be used in combination with opts.token");
            else if (A.auth) this[XEA]["proxy-authorization"] = `Basic ${A.auth}`;
            else if (A.token) this[XEA]["proxy-authorization"] = A.token;
            else if (J && W) this[XEA]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(J)}:${decodeURIComponent(W)}`).toString("base64")}`;
            let F = goQ({
                ...A.proxyTls
            });
            this[moQ] = goQ({
                ...A.requestTls
            }), this[$pA] = Q(B, {
                connect: F
            }), this[UpA] = new Tf8({
                ...A,
                connect: async (V, K) => {
                    let D = V.host;
                    if (!V.port) D += `:${kf8(V.protocol)}`;
                    try {
                        let {
                            socket: H,
                            statusCode: C
                        } = await this[$pA].connect({
                            origin: Z,
                            port: I,
                            path: D,
                            signal: V.signal,
                            headers: {
                                ...this[XEA],
                                host: V.host
                            },
                            servername: this[uoQ]?.servername || X
                        });
                        if (C !== 200) H.on("error", xf8).destroy(), K(new Sf8(`Proxy response (${C}) !== 200 when HTTP Tunneling`));
                        if (V.protocol !== "https:") {
                            K(null, H);
                            return
                        }
                        let E;
                        if (this[kk1]) E = this[kk1].servername;
                        else E = V.servername;
                        this[moQ]({
                            ...V,
                            servername: E,
                            httpSocket: H
                        }, K)
                    } catch (H) {
                        if (H.code === "ERR_TLS_CERT_ALTNAME_INVALID") K(new _f8(H));
                        else K(H)
                    }
                }
            })
        }
        dispatch(A, Q) {
            let B = vf8(A.headers);
            if (bf8(B), B && !("host" in B) && !("Host" in B)) {
                let {
                    host: G
                } = new WEA(A.origin);
                B.host = G
            }
            return this[UpA].dispatch({
                ...A,
                headers: B
            }, Q)
        }
        #A(A) {
            if (typeof A === "string") return new WEA(A);
            else if (A instanceof WEA) return A;
            else return new WEA(A.uri)
        }
        async [Mf8]() {
            await this[UpA].close(), await this[$pA].close()
        }
        async [Of8]() {
            await this[UpA].destroy(), await this[$pA].destroy()
        }
    }

    function vf8(A) {
        if (Array.isArray(A)) {
            let Q = {};
            for (let B = 0; B < A.length; B += 2) Q[A[B]] = A[B + 1];
            return Q
        }
        return A
    }

    function bf8(A) {
        if (A && Object.keys(A).find((B) => B.toLowerCase() === "proxy-authorization")) throw new wpA("Proxy-Authorization should be sent in ProxyAgent constructor")
    }
    coQ.exports = doQ
});
var roQ = U((KN7, soQ) => {
    var ff8 = N5A(),
        {
            kClose: hf8,
            kDestroy: gf8,
            kClosed: poQ,
            kDestroyed: loQ,
            kDispatch: uf8,
            kNoProxyAgent: FEA,
            kHttpProxyAgent: Qc,
            kHttpsProxyAgent: wo
        } = iI(),
        ioQ = yk1(),
        mf8 = g5A(),
        df8 = {
            "http:": 80,
            "https:": 443
        },
        noQ = !1;
    class aoQ extends ff8 {
        #A = null;
        #Q = null;
        #B = null;
        constructor(A = {}) {
            super();
            if (this.#B = A, !noQ) noQ = !0, process.emitWarning("EnvHttpProxyAgent is experimental, expect them to change at any time.", {
                code: "UNDICI-EHPA"
            });
            let {
                httpProxy: Q,
                httpsProxy: B,
                noProxy: G,
                ...Z
            } = A;
            this[FEA] = new mf8(Z);
            let I = Q ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
            if (I) this[Qc] = new ioQ({
                ...Z,
                uri: I
            });
            else this[Qc] = this[FEA];
            let Y = B ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
            if (Y) this[wo] = new ioQ({
                ...Z,
                uri: Y
            });
            else this[wo] = this[Qc];
            this.#J()
        } [uf8](A, Q) {
            let B = new URL(A.origin);
            return this.#Z(B).dispatch(A, Q)
        }
        async [hf8]() {
            if (await this[FEA].close(), !this[Qc][poQ]) await this[Qc].close();
            if (!this[wo][poQ]) await this[wo].close()
        }
        async [gf8](A) {
            if (await this[FEA].destroy(A), !this[Qc][loQ]) await this[Qc].destroy(A);
            if (!this[wo][loQ]) await this[wo].destroy(A)
        }
        #Z(A) {
            let {
                protocol: Q,
                host: B,
                port: G
            } = A;
            if (B = B.replace(/:\d*$/, "").toLowerCase(), G = Number.parseInt(G, 10) || df8[Q] || 0, !this.#G(B, G)) return this[FEA];
            if (Q === "https:") return this[wo];
            return this[Qc]
        }
        #G(A, Q) {
            if (this.#I) this.#J();
            if (this.#Q.length === 0) return !0;
            if (this.#A === "*") return !1;
            for (let B = 0; B < this.#Q.length; B++) {
                let G = this.#Q[B];
                if (G.port && G.port !== Q) continue;
                if (!/^[.*]/.test(G.hostname)) {
                    if (A === G.hostname) return !1
                } else if (A.endsWith(G.hostname.replace(/^\*/, ""))) return !1
            }
            return !0
        }
        #J() {
            let A = this.#B.noProxy ?? this.#F,
                Q = A.split(/[,\s]/),
                B = [];
            for (let G = 0; G < Q.length; G++) {
                let Z = Q[G];
                if (!Z) continue;
                let I = Z.match(/^(.+):(\d+)$/);
                B.push({
                    hostname: (I ? I[1] : Z).toLowerCase(),
                    port: I ? Number.parseInt(I[2], 10) : 0
                })
            }
            this.#A = A, this.#Q = B
        }
        get #I() {
            if (this.#B.noProxy !== void 0) return !1;
            return this.#A !== this.#F
        }
        get #F() {
            return process.env.no_proxy ?? process.env.NO_PROXY ?? ""
        }
    }
    soQ.exports = aoQ
});