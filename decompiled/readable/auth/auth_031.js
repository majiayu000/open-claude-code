/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.914Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 31/61
 * Lines: 128369 - 129868 (1500 lines)
 * Original file: cli.js
 */

                _cA("got proxy server response: %o %o", H, w), Y(), Q({
                    connect: {
                        statusCode: E,
                        statusText: z,
                        headers: w
                    },
                    buffered: V
                })
            }
            A.on("error", W), A.on("end", J), I()
        })
    }
    C5A.parseProxyResponse = A_8
});
var vCA = U((fL) => {
    var Q_8 = fL && fL.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        B_8 = fL && fL.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        gnQ = fL && fL.__importStar || function(A) {
            if (A && A.__esModule) return A;

var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) Q_8(Q, A, B)
            }
            return B_8(Q, A), Q
        },
        unQ = fL && fL.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        };
    Object.defineProperty(fL, "__esModule", {
        value: !0
    });
    fL.HttpsProxyAgent = void 0;
    var kcA = gnQ(UA("net")),
        bnQ = gnQ(UA("tls")),
        G_8 = unQ(UA("assert")),
        Z_8 = unQ(Os()),
        I_8 = E_1(),
        Y_8 = UA("url"),
        J_8 = vnQ(),
        xCA = (0, Z_8.default)("https-proxy-agent"),
        fnQ = (A) => {
            if (A.servername === void 0 && A.host && !kcA.isIP(A.host)) return {
                ...A,
                servername: A.host
            };
            return A
        };

class z_1 extends I_8.Agent {
        constructor(A, Q) {
            super(Q);
            this.options = {
                path: void 0
            }, this.proxy = typeof A === "string" ? new Y_8.URL(A) : A, this.proxyHeaders = Q?.headers ?? {}, xCA("Creating new HttpsProxyAgent instance: %o", this.proxy.href);
            let B = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
                G = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
            this.connectOpts = {
                ALPNProtocols: ["http/1.1"],
                ...Q ? hnQ(Q, "headers") : null,
                host: B,
                port: G
            }
        }
        async connect(A, Q) {
            let {
                proxy: B
            } = this;
            if (!Q.host) throw TypeError('No "host" provided');
            let G;
            if (B.protocol === "https:") xCA("Creating `tls.Socket`: %o", this.connectOpts), G = bnQ.connect(fnQ(this.connectOpts));
            else xCA("Creating `net.Socket`: %o", this.connectOpts), G = kcA.connect(this.connectOpts);
            let Z = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
                    ...this.proxyHeaders
                },
                I = kcA.isIPv6(Q.host) ? `[${Q.host}]` : Q.host,
                Y = `CONNECT ${I}:${Q.port} HTTP/1.1\r
`;
            if (B.username || B.password) {
                let V = `${decodeURIComponent(B.username)}:${decodeURIComponent(B.password)}`;
                Z["Proxy-Authorization"] = `Basic ${Buffer.from(V).toString("base64")}`
            }
            if (Z.Host = `${I}:${Q.port}`, !Z["Proxy-Connection"]) Z["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
            for (let V of Object.keys(Z)) Y += `${V}: ${Z[V]}\r
`;
            let J = (0, J_8.parseProxyResponse)(G);
            G.write(`${Y}\r
`);
            let {
                connect: W,
                buffered: X
            } = await J;
            if (A.emit("proxyConnect", W), this.emit("proxyConnect", W, A), W.statusCode === 200) {
                if (A.once("socket", W_8), Q.secureEndpoint) return xCA("Upgrading socket connection to TLS"), bnQ.connect({
                    ...hnQ(fnQ(Q), "host", "path", "port"),
                    socket: G
                });
                return G
            }
            G.destroy();
            let F = new kcA.Socket({
                writable: !1
            });
            return F.readable = !0, A.once("socket", (V) => {
                xCA("Replaying proxy buffer for failed request"), (0, G_8.default)(V.listenerCount("data") > 0), V.push(X), V.push(null)
            }), F
        }
    }
    z_1.protocols = ["http", "https"];
    fL.HttpsProxyAgent = z_1;

function W_8(A) {
        A.resume()
    }

function hnQ(A, ...Q) {
        let B = {},
            G;
        for (G in A)
            if (!Q.includes(G)) B[G] = A[G];
        return B
    }
});
var iI = U((jq7, mnQ) => {
    mnQ.exports = {
        kClose: Symbol("close"),
        kDestroy: Symbol("destroy"),
        kDispatch: Symbol("dispatch"),
        kUrl: Symbol("url"),
        kWriting: Symbol("writing"),
        kResuming: Symbol("resuming"),
        kQueue: Symbol("queue"),
        kConnect: Symbol("connect"),
        kConnecting: Symbol("connecting"),
        kKeepAliveDefaultTimeout: Symbol("default keep alive timeout"),
        kKeepAliveMaxTimeout: Symbol("max keep alive timeout"),
        kKeepAliveTimeoutThreshold: Symbol("keep alive timeout threshold"),
        kKeepAliveTimeoutValue: Symbol("keep alive timeout"),
        kKeepAlive: Symbol("keep alive"),
        kHeadersTimeout: Symbol("headers timeout"),
        kBodyTimeout: Symbol("body timeout"),
        kServerName: Symbol("server name"),
        kLocalAddress: Symbol("local address"),
        kHost: Symbol("host"),
        kNoRef: Symbol("no ref"),
        kBodyUsed: Symbol("used"),
        kBody: Symbol("abstracted request body"),
        kRunning: Symbol("running"),
        kBlocking: Symbol("blocking"),
        kPending: Symbol("pending"),
        kSize: Symbol("size"),
        kBusy: Symbol("busy"),
        kQueued: Symbol("queued"),
        kFree: Symbol("free"),
        kConnected: Symbol("connected"),
        kClosed: Symbol("closed"),
        kNeedDrain: Symbol("need drain"),
        kReset: Symbol("reset"),
        kDestroyed: Symbol.for("nodejs.stream.destroyed"),
        kResume: Symbol("resume"),
        kOnError: Symbol("on error"),
        kMaxHeadersSize: Symbol("max headers size"),
        kRunningIdx: Symbol("running index"),
        kPendingIdx: Symbol("pending index"),
        kError: Symbol("error"),
        kClients: Symbol("clients"),
        kClient: Symbol("client"),
        kParser: Symbol("parser"),
        kOnDestroyed: Symbol("destroy callbacks"),
        kPipelining: Symbol("pipelining"),
        kSocket: Symbol("socket"),
        kHostHeader: Symbol("host header"),
        kConnector: Symbol("connector"),
        kStrictContentLength: Symbol("strict content length"),
        kMaxRedirections: Symbol("maxRedirections"),
        kMaxRequests: Symbol("maxRequestsPerClient"),
        kProxy: Symbol("proxy agent options"),
        kCounter: Symbol("socket request counter"),
        kInterceptors: Symbol("dispatch interceptors"),
        kMaxResponseSize: Symbol("max response size"),
        kHTTP2Session: Symbol("http2Session"),
        kHTTP2SessionState: Symbol("http2Session state"),
        kRetryHandlerDefaultRetry: Symbol("retry agent default retry"),
        kConstruct: Symbol("constructable"),
        kListeners: Symbol("listeners"),
        kHTTPContext: Symbol("http context"),
        kMaxConcurrentStreams: Symbol("max concurrent streams"),
        kNoProxyAgent: Symbol("no proxy agent"),
        kHttpProxyAgent: Symbol("http proxy agent"),
        kHttpsProxyAgent: Symbol("https proxy agent")
    }
});
var U7 = U((Sq7, XaQ) => {
    class $J extends Error {
        constructor(A) {
            super(A);
            this.name = "UndiciError", this.code = "UND_ERR"
        }
    }

class dnQ extends $J {
        constructor(A) {
            super(A);
            this.name = "ConnectTimeoutError", this.message = A || "Connect Timeout Error", this.code = "UND_ERR_CONNECT_TIMEOUT"
        }
    }

class cnQ extends $J {
        constructor(A) {
            super(A);
            this.name = "HeadersTimeoutError", this.message = A || "Headers Timeout Error", this.code = "UND_ERR_HEADERS_TIMEOUT"
        }
    }

class pnQ extends $J {
        constructor(A) {
            super(A);
            this.name = "HeadersOverflowError", this.message = A || "Headers Overflow Error", this.code = "UND_ERR_HEADERS_OVERFLOW"
        }
    }

class lnQ extends $J {
        constructor(A) {
            super(A);
            this.name = "BodyTimeoutError", this.message = A || "Body Timeout Error", this.code = "UND_ERR_BODY_TIMEOUT"
        }
    }

class inQ extends $J {
        constructor(A, Q, B, G) {
            super(A);
            this.name = "ResponseStatusCodeError", this.message = A || "Response Status Code Error", this.code = "UND_ERR_RESPONSE_STATUS_CODE", this.body = G, this.status = Q, this.statusCode = Q, this.headers = B
        }
    }

class nnQ extends $J {
        constructor(A) {
            super(A);
            this.name = "InvalidArgumentError", this.message = A || "Invalid Argument Error", this.code = "UND_ERR_INVALID_ARG"
        }
    }

class anQ extends $J {
        constructor(A) {
            super(A);
            this.name = "InvalidReturnValueError", this.message = A || "Invalid Return Value Error", this.code = "UND_ERR_INVALID_RETURN_VALUE"
        }
    }

class U_1 extends $J {
        constructor(A) {
            super(A);
            this.name = "AbortError", this.message = A || "The operation was aborted"
        }
    }

class snQ extends U_1 {
        constructor(A) {
            super(A);
            this.name = "AbortError", this.message = A || "Request aborted", this.code = "UND_ERR_ABORTED"
        }
    }

class rnQ extends $J {
        constructor(A) {
            super(A);
            this.name = "InformationalError", this.message = A || "Request information", this.code = "UND_ERR_INFO"
        }
    }

class onQ extends $J {
        constructor(A) {
            super(A);
            this.name = "RequestContentLengthMismatchError", this.message = A || "Request body length does not match content-length header", this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH"
        }
    }

class tnQ extends $J {
        constructor(A) {
            super(A);
            this.name = "ResponseContentLengthMismatchError", this.message = A || "Response body length does not match content-length header", this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH"
        }
    }

class enQ extends $J {
        constructor(A) {
            super(A);
            this.name = "ClientDestroyedError", this.message = A || "The client is destroyed", this.code = "UND_ERR_DESTROYED"
        }
    }

class AaQ extends $J {
        constructor(A) {
            super(A);
            this.name = "ClientClosedError", this.message = A || "The client is closed", this.code = "UND_ERR_CLOSED"
        }
    }

class QaQ extends $J {
        constructor(A, Q) {
            super(A);
            this.name = "SocketError", this.message = A || "Socket error", this.code = "UND_ERR_SOCKET", this.socket = Q
        }
    }

class BaQ extends $J {
        constructor(A) {
            super(A);
            this.name = "NotSupportedError", this.message = A || "Not supported error", this.code = "UND_ERR_NOT_SUPPORTED"
        }
    }

class GaQ extends $J {
        constructor(A) {
            super(A);
            this.name = "MissingUpstreamError", this.message = A || "No upstream has been added to the BalancedPool", this.code = "UND_ERR_BPL_MISSING_UPSTREAM"
        }
    }

class ZaQ extends Error {
        constructor(A, Q, B) {
            super(A);
            this.name = "HTTPParserError", this.code = Q ? `HPE_${Q}` : void 0, this.data = B ? B.toString() : void 0
        }
    }

class IaQ extends $J {
        constructor(A) {
            super(A);
            this.name = "ResponseExceededMaxSizeError", this.message = A || "Response content exceeded max size", this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE"
        }
    }

class YaQ extends $J {
        constructor(A, Q, {
            headers: B,
            data: G
        }) {
            super(A);
            this.name = "RequestRetryError", this.message = A || "Request retry error", this.code = "UND_ERR_REQ_RETRY", this.statusCode = Q, this.data = G, this.headers = B
        }
    }

class JaQ extends $J {
        constructor(A, Q, {
            headers: B,
            data: G
        }) {
            super(A);
            this.name = "ResponseError", this.message = A || "Response error", this.code = "UND_ERR_RESPONSE", this.statusCode = Q, this.data = G, this.headers = B
        }
    }

class WaQ extends $J {
        constructor(A, Q, B) {
            super(Q, {
                cause: A,
                ...B ?? {}
            });
            this.name = "SecureProxyConnectionError", this.message = Q || "Secure Proxy Connection failed", this.code = "UND_ERR_PRX_TLS", this.cause = A
        }
    }
    XaQ.exports = {
        AbortError: U_1,
        HTTPParserError: ZaQ,
        UndiciError: $J,
        HeadersTimeoutError: cnQ,
        HeadersOverflowError: pnQ,
        BodyTimeoutError: lnQ,
        RequestContentLengthMismatchError: onQ,
        ConnectTimeoutError: dnQ,
        ResponseStatusCodeError: inQ,
        InvalidArgumentError: nnQ,
        InvalidReturnValueError: anQ,
        RequestAbortedError: snQ,
        ClientDestroyedError: enQ,
        ClientClosedError: AaQ,
        InformationalError: rnQ,
        SocketError: QaQ,
        NotSupportedError: BaQ,
        ResponseContentLengthMismatchError: tnQ,
        BalancedPoolMissingUpstreamError: GaQ,
        ResponseExceededMaxSizeError: IaQ,
        RequestRetryError: YaQ,
        ResponseError: JaQ,
        SecureProxyConnectionError: WaQ
    }
});
var xcA = U((_q7, FaQ) => {
    var ycA = {},
        $_1 = ["Accept", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Age", "Allow", "Alt-Svc", "Alt-Used", "Authorization", "Cache-Control", "Clear-Site-Data", "Connection", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-Location", "Content-Range", "Content-Security-Policy", "Content-Security-Policy-Report-Only", "Content-Type", "Cookie", "Cross-Origin-Embedder-Policy", "Cross-Origin-Opener-Policy", "Cross-Origin-Resource-Policy", "Date", "Device-Memory", "Downlink", "ECT", "ETag", "Expect", "Expect-CT", "Expires", "Forwarded", "From", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Range", "If-Unmodified-Since", "Keep-Alive", "Last-Modified", "Link", "Location", "Max-Forwards", "Origin", "Permissions-Policy", "Pragma", "Proxy-Authenticate", "Proxy-Authorization", "RTT", "Range", "Referer", "Referrer-Policy", "Refresh", "Retry-After", "Sec-WebSocket-Accept", "Sec-WebSocket-Extensions", "Sec-WebSocket-Key", "Sec-WebSocket-Protocol", "Sec-WebSocket-Version", "Server", "Server-Timing", "Service-Worker-Allowed", "Service-Worker-Navigation-Preload", "Set-Cookie", "SourceMap", "Strict-Transport-Security", "Supports-Loading-Mode", "TE", "Timing-Allow-Origin", "Trailer", "Transfer-Encoding", "Upgrade", "Upgrade-Insecure-Requests", "User-Agent", "Vary", "Via", "WWW-Authenticate", "X-Content-Type-Options", "X-DNS-Prefetch-Control", "X-Frame-Options", "X-Permitted-Cross-Domain-Policies", "X-Powered-By", "X-Requested-With", "X-XSS-Protection"];
    for (let A = 0; A < $_1.length; ++A) {
        let Q = $_1[A],
            B = Q.toLowerCase();
        ycA[Q] = ycA[B] = B
    }
    Object.setPrototypeOf(ycA, null);
    FaQ.exports = {
        wellknownHeaderNames: $_1,
        headerNameLowerCasedRecord: ycA
    }
});
var HaQ = U((kq7, DaQ) => {
    var {
        wellknownHeaderNames: VaQ,
        headerNameLowerCasedRecord: X_8
    } = xcA();

class E5A {
        value = null;
        left = null;
        middle = null;
        right = null;
        code;
        constructor(A, Q, B) {
            if (B === void 0 || B >= A.length) throw TypeError("Unreachable");
            if ((this.code = A.charCodeAt(B)) > 127) throw TypeError("key must be ascii string");
            if (A.length !== ++B) this.middle = new E5A(A, Q, B);
            else this.value = Q
        }
        add(A, Q) {
            let B = A.length;
            if (B === 0) throw TypeError("Unreachable");
            let G = 0,
                Z = this;
            while (!0) {
                let I = A.charCodeAt(G);
                if (I > 127) throw TypeError("key must be ascii string");
                if (Z.code === I)
                    if (B === ++G) {
                        Z.value = Q;
                        break
                    } else if (Z.middle !== null) Z = Z.middle;
                else {
                    Z.middle = new E5A(A, Q, G);
                    break
                } else if (Z.code < I)
                    if (Z.left !== null) Z = Z.left;
                    else {
                        Z.left = new E5A(A, Q, G);
                        break
                    }
                else if (Z.right !== null) Z = Z.right;
                else {
                    Z.right = new E5A(A, Q, G);
                    break
                }
            }
        }
        search(A) {
            let Q = A.length,
                B = 0,
                G = this;
            while (G !== null && B < Q) {
                let Z = A[B];
                if (Z <= 90 && Z >= 65) Z |= 32;
                while (G !== null) {
                    if (Z === G.code) {
                        if (Q === ++B) return G;
                        G = G.middle;
                        break
                    }
                    G = G.code < Z ? G.left : G.right
                }
            }
            return null
        }
    }

class w_1 {
        node = null;
        insert(A, Q) {
            if (this.node === null) this.node = new E5A(A, Q, 0);
            else this.node.add(A, Q)
        }
        lookup(A) {
            return this.node?.search(A)?.value ?? null
        }
    }
    var KaQ = new w_1;
    for (let A = 0; A < VaQ.length; ++A) {
        let Q = X_8[VaQ[A]];
        KaQ.insert(Q, Q)
    }
    DaQ.exports = {
        TernarySearchTree: w_1,
        tree: KaQ
    }
});
var M6 = U((yq7, SaQ) => {
    var bCA = UA("node:assert"),
        {
            kDestroyed: EaQ,
            kBodyUsed: z5A,
            kListeners: q_1,
            kBody: CaQ
        } = iI(),
        {
            IncomingMessage: F_8
        } = UA("node:http"),
        bcA = UA("node:stream"),
        V_8 = UA("node:net"),
        {
            Blob: K_8
        } = UA("node:buffer"),
        D_8 = UA("node:util"),
        {
            stringify: H_8
        } = UA("node:querystring"),
        {
            EventEmitter: C_8
        } = UA("node:events"),
        {
            InvalidArgumentError: RV
        } = U7(),
        {
            headerNameLowerCasedRecord: E_8
        } = xcA(),
        {
            tree: zaQ
        } = HaQ(),
        [z_8, U_8] = process.versions.node.split(".").map((A) => Number(A));

class N_1 {
        constructor(A) {
            this[CaQ] = A, this[z5A] = !1
        }
        async * [Symbol.asyncIterator]() {
            bCA(!this[z5A], "disturbed"), this[z5A] = !0, yield* this[CaQ]
        }
    }

    function $_8(A) {
        if (fcA(A)) {
            if (NaQ(A) === 0) A.on("data", function() {
                bCA(!1)
            });
            if (typeof A.readableDidRead !== "boolean") A[z5A] = !1, C_8.prototype.on.call(A, "data", function() {
                this[z5A] = !0
            });
            return A
        } else if (A && typeof A.pipeTo === "function") return new N_1(A);
        else if (A && typeof A !== "string" && !ArrayBuffer.isView(A) && qaQ(A)) return new N_1(A);
        else return A
    }

function w_8() {}

function fcA(A) {
        return A && typeof A === "object" && typeof A.pipe === "function" && typeof A.on === "function"
    }

function UaQ(A) {
        if (A === null) return !1;
        else if (A instanceof K_8) return !0;
        else if (typeof A !== "object") return !1;
        else {
            let Q = A[Symbol.toStringTag];
            return (Q === "Blob" || Q === "File") && (("stream" in A) && typeof A.stream === "function" || ("arrayBuffer" in A) && typeof A.arrayBuffer === "function")
        }
    }

function q_8(A, Q) {
        if (A.includes("?") || A.includes("#")) throw Error('Query params cannot be passed when url already contains "?" or "#".');
        let B = H_8(Q);
        if (B) A += "?" + B;
        return A
    }

    function $aQ(A) {
        let Q = parseInt(A, 10);
        return Q === Number(A) && Q >= 0 && Q <= 65535
    }

function vcA(A) {
        return A != null && A[0] === "h" && A[1] === "t" && A[2] === "t" && A[3] === "p" && (A[4] === ":" || A[4] === "s" && A[5] === ":")
    }

function waQ(A) {
        if (typeof A === "string") {
            if (A = new URL(A), !vcA(A.origin || A.protocol)) throw new RV("Invalid URL protocol: the URL must start with `http:` or `https:`.");
            return A
        }
        if (!A || typeof A !== "object") throw new RV("Invalid URL: The URL argument must be a non-null object.");
        if (!(A instanceof URL)) {
            if (A.port != null && A.port !== "" && $aQ(A.port) === !1) throw new RV("Invalid URL: port must be a valid integer or a string representation of an integer.");
            if (A.path != null && typeof A.path !== "string") throw new RV("Invalid URL path: the path must be a string or null/undefined.");
            if (A.pathname != null && typeof A.pathname !== "string") throw new RV("Invalid URL pathname: the pathname must be a string or null/undefined.");
            if (A.hostname != null && typeof A.hostname !== "string") throw new RV("Invalid URL hostname: the hostname must be a string or null/undefined.");
            if (A.origin != null && typeof A.origin !== "string") throw new RV("Invalid URL origin: the origin must be a string or null/undefined.");
            if (!vcA(A.origin || A.protocol)) throw new RV("Invalid URL protocol: the URL must start with `http:` or `https:`.");
            let Q = A.port != null ? A.port : A.protocol === "https:" ? 443 : 80,
                B = A.origin != null ? A.origin : `${A.protocol||""}//${A.hostname||""}:${Q}`,
                G = A.path != null ? A.path : `${A.pathname||""}${A.search||""}`;
            if (B[B.length - 1] === "/") B = B.slice(0, B.length - 1);
            if (G && G[0] !== "/") G = `/${G}`;
            return new URL(`${B}${G}`)
        }
        if (!vcA(A.origin || A.protocol)) throw new RV("Invalid URL protocol: the URL must start with `http:` or `https:`.");
        return A
    }

function N_8(A) {
        if (A = waQ(A), A.pathname !== "/" || A.search || A.hash) throw new RV("invalid url");
        return A
    }

function L_8(A) {
        if (A[0] === "[") {
            let B = A.indexOf("]");
            return bCA(B !== -1), A.substring(1, B)
        }
        let Q = A.indexOf(":");
        if (Q === -1) return A;
        return A.substring(0, Q)
    }

function M_8(A) {
        if (!A) return null;
        bCA(typeof A === "string");
        let Q = L_8(A);
        if (V_8.isIP(Q)) return "";
        return Q
    }

function O_8(A) {
        return JSON.parse(JSON.stringify(A))
    }

function R_8(A) {
        return A != null && typeof A[Symbol.asyncIterator] === "function"
    }

function qaQ(A) {
        return A != null && (typeof A[Symbol.iterator] === "function" || typeof A[Symbol.asyncIterator] === "function")
    }

function NaQ(A) {
        if (A == null) return 0;
        else if (fcA(A)) {
            let Q = A._readableState;
            return Q && Q.objectMode === !1 && Q.ended === !0 && Number.isFinite(Q.length) ? Q.length : null
        } else if (UaQ(A)) return A.size != null ? A.size : null;
        else if (OaQ(A)) return A.byteLength;
        return null
    }

function LaQ(A) {
        return A && !!(A.destroyed || A[EaQ] || bcA.isDestroyed?.(A))
    }

function T_8(A, Q) {
        if (A == null || !fcA(A) || LaQ(A)) return;
        if (typeof A.destroy === "function") {
            if (Object.getPrototypeOf(A).constructor === F_8) A.socket = null;
            A.destroy(Q)
        } else if (Q) queueMicrotask(() => {
            A.emit("error", Q)
        });
        if (A.destroyed !== !0) A[EaQ] = !0
    }
    var P_8 = /timeout=(\d+)/;

function j_8(A) {
        let Q = A.toString().match(P_8);
        return Q ? parseInt(Q[1], 10) * 1000 : null
    }

function MaQ(A) {
        return typeof A === "string" ? E_8[A] ?? A.toLowerCase() : zaQ.lookup(A) ?? A.toString("latin1").toLowerCase()
    }

function S_8(A) {
        return zaQ.lookup(A) ?? A.toString("latin1").toLowerCase()
    }

function __8(A, Q) {
        if (Q === void 0) Q = {};
        for (let B = 0; B < A.length; B += 2) {
            let G = MaQ(A[B]),
                Z = Q[G];
            if (Z) {
                if (typeof Z === "string") Z = [Z], Q[G] = Z;
                Z.push(A[B + 1].toString("utf8"))
            } else {
                let I = A[B + 1];
                if (typeof I === "string") Q[G] = I;
                else Q[G] = Array.isArray(I) ? I.map((Y) => Y.toString("utf8")) : I.toString("utf8")
            }
        }
        if ("content-length" in Q && "content-disposition" in Q) Q["content-disposition"] = Buffer.from(Q["content-disposition"]).toString("latin1");
        return Q
    }

function k_8(A) {
        let Q = A.length,
            B = Array(Q),
            G = !1,
            Z = -1,
            I, Y, J = 0;
        for (let W = 0; W < A.length; W += 2) {
            if (I = A[W], Y = A[W + 1], typeof I !== "string" && (I = I.toString()), typeof Y !== "string" && (Y = Y.toString("utf8")), J = I.length, J === 14 && I[7] === "-" && (I === "content-length" || I.toLowerCase() === "content-length")) G = !0;
            else if (J === 19 && I[7] === "-" && (I === "content-disposition" || I.toLowerCase() === "content-disposition")) Z = W + 1;
            B[W] = I, B[W + 1] = Y
        }
        if (G && Z !== -1) B[Z] = Buffer.from(B[Z]).toString("latin1");
        return B
    }

function OaQ(A) {
        return A instanceof Uint8Array || Buffer.isBuffer(A)
    }

function y_8(A, Q, B) {
        if (!A || typeof A !== "object") throw new RV("handler must be an object");
        if (typeof A.onConnect !== "function") throw new RV("invalid onConnect method");
        if (typeof A.onError !== "function") throw new RV("invalid onError method");
        if (typeof A.onBodySent !== "function" && A.onBodySent !== void 0) throw new RV("invalid onBodySent method");
        if (B || Q === "CONNECT") {
            if (typeof A.onUpgrade !== "function") throw new RV("invalid onUpgrade method")
        } else {
            if (typeof A.onHeaders !== "function") throw new RV("invalid onHeaders method");
            if (typeof A.onData !== "function") throw new RV("invalid onData method");
            if (typeof A.onComplete !== "function") throw new RV("invalid onComplete method")
        }
    }

function x_8(A) {
        return !!(A && (bcA.isDisturbed(A) || A[z5A]))
    }

function v_8(A) {
        return !!(A && bcA.isErrored(A))
    }

function b_8(A) {
        return !!(A && bcA.isReadable(A))
    }

function f_8(A) {
        return {
            localAddress: A.localAddress,
            localPort: A.localPort,
            remoteAddress: A.remoteAddress,
            remotePort: A.remotePort,
            remoteFamily: A.remoteFamily,
            timeout: A.timeout,
            bytesWritten: A.bytesWritten,
            bytesRead: A.bytesRead
        }
    }

function h_8(A) {
        let Q;
        return new ReadableStream({
            async start() {
                Q = A[Symbol.asyncIterator]()
            },
            async pull(B) {
                let {
                    done: G,
                    value: Z
                } = await Q.next();
                if (G) queueMicrotask(() => {
                    B.close(), B.byobRequest?.respond(0)
                });
                else {
                    let I = Buffer.isBuffer(Z) ? Z : Buffer.from(Z);
                    if (I.byteLength) B.enqueue(new Uint8Array(I))
                }
                return B.desiredSize > 0
            },
            async cancel(B) {
                await Q.return()
            },
            type: "bytes"
        })
    }

function g_8(A) {
        return A && typeof A === "object" && typeof A.append === "function" && typeof A.delete === "function" && typeof A.get === "function" && typeof A.getAll === "function" && typeof A.has === "function" && typeof A.set === "function" && A[Symbol.toStringTag] === "FormData"
    }

function u_8(A, Q) {
        if ("addEventListener" in A) return A.addEventListener("abort", Q, {
            once: !0
        }), () => A.removeEventListener("abort", Q);
        return A.addListener("abort", Q), () => A.removeListener("abort", Q)
    }
    var m_8 = typeof String.prototype.toWellFormed === "function",
        d_8 = typeof String.prototype.isWellFormed === "function";

function RaQ(A) {
        return m_8 ? `${A}`.toWellFormed() : D_8.toUSVString(A)
    }

function c_8(A) {
        return d_8 ? `${A}`.isWellFormed() : RaQ(A) === `${A}`
    }

function TaQ(A) {
        switch (A) {
            case 34:
            case 40:
            case 41:
            case 44:
            case 47:
            case 58:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
            case 91:
            case 92:
            case 93:
            case 123:
            case 125:
                return !1;
            default:
                return A >= 33 && A <= 126
        }
    }

function p_8(A) {
        if (A.length === 0) return !1;
        for (let Q = 0; Q < A.length; ++Q)
            if (!TaQ(A.charCodeAt(Q))) return !1;
        return !0
    }
    var l_8 = /[^\t\x20-\x7e\x80-\xff]/;

function i_8(A) {
        return !l_8.test(A)
    }

function n_8(A) {
        if (A == null || A === "") return {
            start: 0,
            end: null,
            size: null
        };
        let Q = A ? A.match(/^bytes (\d+)-(\d+)\/(\d+)?$/) : null;
        return Q ? {
            start: parseInt(Q[1]),
            end: Q[2] ? parseInt(Q[2]) : null,
            size: Q[3] ? parseInt(Q[3]) : null
        } : null
    }

function a_8(A, Q, B) {
        return (A[q_1] ??= []).push([Q, B]), A.on(Q, B), A
    }

function s_8(A) {
        for (let [Q, B] of A[q_1] ?? []) A.removeListener(Q, B);
        A[q_1] = null
    }

function r_8(A, Q, B) {
        try {
            Q.onError(B), bCA(Q.aborted)
        } catch (G) {
            A.emit("error", G)
        }
    }
    var PaQ = Object.create(null);
    PaQ.enumerable = !0;

var L_1 = {
            delete: "DELETE",
            DELETE: "DELETE",
            get: "GET",
            GET: "GET",
            head: "HEAD",
            HEAD: "HEAD",
            options: "OPTIONS",
            OPTIONS: "OPTIONS",
            post: "POST",
            POST: "POST",
            put: "PUT",
            PUT: "PUT"
        },
        jaQ = {
            ...L_1,
            patch: "patch",
            PATCH: "PATCH"
        };
    Object.setPrototypeOf(L_1, null);
    Object.setPrototypeOf(jaQ, null);
    SaQ.exports = {
        kEnumerableProperty: PaQ,
        nop: w_8,
        isDisturbed: x_8,
        isErrored: v_8,
        isReadable: b_8,
        toUSVString: RaQ,
        isUSVString: c_8,
        isBlobLike: UaQ,
        parseOrigin: N_8,
        parseURL: waQ,
        getServerName: M_8,
        isStream: fcA,
        isIterable: qaQ,
        isAsyncIterable: R_8,
        isDestroyed: LaQ,
        headerNameToString: MaQ,
        bufferToLowerCasedHeaderName: S_8,
        addListener: a_8,
        removeAllListeners: s_8,
        errorRequest: r_8,
        parseRawHeaders: k_8,
        parseHeaders: __8,
        parseKeepAliveTimeout: j_8,
        destroy: T_8,
        bodyLength: NaQ,
        deepClone: O_8,
        ReadableStreamFrom: h_8,
        isBuffer: OaQ,
        validateHandler: y_8,
        getSocketInfo: f_8,
        isFormDataLike: g_8,
        buildURL: q_8,
        addAbortListener: u_8,
        isValidHTTPToken: p_8,
        isValidHeaderValue: i_8,
        isTokenCharCode: TaQ,
        parseRangeHeader: n_8,
        normalizedMethodRecordsBase: L_1,
        normalizedMethodRecords: jaQ,
        isValidPort: $aQ,
        isHttpOrHttpsPrefixed: vcA,
        nodeMajor: z_8,
        nodeMinor: U_8,
        safeHTTPMethods: ["GET", "HEAD", "OPTIONS", "TRACE"],
        wrapRequestBody: $_8
    }
});
var U5A = U((xq7, kaQ) => {
    var _7 = UA("node:diagnostics_channel"),
        O_1 = UA("node:util"),
        hcA = O_1.debuglog("undici"),
        M_1 = O_1.debuglog("fetch"),
        Fo = O_1.debuglog("websocket"),
        _aQ = !1,
        o_8 = {
            beforeConnect: _7.channel("undici:client:beforeConnect"),
            connected: _7.channel("undici:client:connected"),
            connectError: _7.channel("undici:client:connectError"),
            sendHeaders: _7.channel("undici:client:sendHeaders"),
            create: _7.channel("undici:request:create"),
            bodySent: _7.channel("undici:request:bodySent"),
            headers: _7.channel("undici:request:headers"),
            trailers: _7.channel("undici:request:trailers"),
            error: _7.channel("undici:request:error"),
            open: _7.channel("undici:websocket:open"),
            close: _7.channel("undici:websocket:close"),
            socketError: _7.channel("undici:websocket:socket_error"),
            ping: _7.channel("undici:websocket:ping"),
            pong: _7.channel("undici:websocket:pong")
        };
    if (hcA.enabled || M_1.enabled) {
        let A = M_1.enabled ? M_1 : hcA;
        _7.channel("undici:client:beforeConnect").subscribe((Q) => {
            let {
                connectParams: {
                    version: B,
                    protocol: G,
                    port: Z,
                    host: I
                }
            } = Q;
            A("connecting to %s using %s%s", `${I}${Z?`:${Z}`:""}`, G, B)
        }), _7.channel("undici:client:connected").subscribe((Q) => {
            let {
                connectParams: {
                    version: B,
                    protocol: G,
                    port: Z,
                    host: I
                }
            } = Q;
            A("connected to %s using %s%s", `${I}${Z?`:${Z}`:""}`, G, B)
        }), _7.channel("undici:client:connectError").subscribe((Q) => {
            let {
                connectParams: {
                    version: B,
                    protocol: G,
                    port: Z,
                    host: I
                },
                error: Y
            } = Q;
            A("connection to %s using %s%s errored - %s", `${I}${Z?`:${Z}`:""}`, G, B, Y.message)
        }), _7.channel("undici:client:sendHeaders").subscribe((Q) => {
            let {
                request: {
                    method: B,
                    path: G,
                    origin: Z
                }
            } = Q;
            A("sending request to %s %s/%s", B, Z, G)
        }), _7.channel("undici:request:headers").subscribe((Q) => {
            let {
                request: {
                    method: B,
                    path: G,
                    origin: Z
                },
                response: {
                    statusCode: I
                }
            } = Q;
            A("received response to %s %s/%s - HTTP %d", B, Z, G, I)
        }), _7.channel("undici:request:trailers").subscribe((Q) => {
            let {
                request: {
                    method: B,
                    path: G,
                    origin: Z
                }
            } = Q;
            A("trailers received from %s %s/%s", B, Z, G)
        }), _7.channel("undici:request:error").subscribe((Q) => {
            let {
                request: {
                    method: B,
                    path: G,
                    origin: Z
                },
                error: I
            } = Q;
            A("request to %s %s/%s errored - %s", B, Z, G, I.message)
        }), _aQ = !0
    }
    if (Fo.enabled) {
        if (!_aQ) {
            let A = hcA.enabled ? hcA : Fo;
            _7.channel("undici:client:beforeConnect").subscribe((Q) => {
                let {
                    connectParams: {
                        version: B,
                        protocol: G,
                        port: Z,
                        host: I
                    }
                } = Q;
                A("connecting to %s%s using %s%s", I, Z ? `:${Z}` : "", G, B)
            }), _7.channel("undici:client:connected").subscribe((Q) => {
                let {
                    connectParams: {
                        version: B,
                        protocol: G,
                        port: Z,
                        host: I
                    }
                } = Q;
                A("connected to %s%s using %s%s", I, Z ? `:${Z}` : "", G, B)
            }), _7.channel("undici:client:connectError").subscribe((Q) => {
                let {
                    connectParams: {
                        version: B,
                        protocol: G,
                        port: Z,
                        host: I
                    },
                    error: Y
                } = Q;
                A("connection to %s%s using %s%s errored - %s", I, Z ? `:${Z}` : "", G, B, Y.message)
            }), _7.channel("undici:client:sendHeaders").subscribe((Q) => {
                let {
                    request: {
                        method: B,
                        path: G,
                        origin: Z
                    }
                } = Q;
                A("sending request to %s %s/%s", B, Z, G)
            })
        }
        _7.channel("undici:websocket:open").subscribe((A) => {
            let {
                address: {
                    address: Q,
                    port: B
                }
            } = A;
            Fo("connection opened %s%s", Q, B ? `:${B}` : "")
        }), _7.channel("undici:websocket:close").subscribe((A) => {
            let {
                websocket: Q,
                code: B,
                reason: G
            } = A;
            Fo("closed connection to %s - %s %s", Q.url, B, G)
        }), _7.channel("undici:websocket:socket_error").subscribe((A) => {
            Fo("connection errored - %s", A.message)
        }), _7.channel("undici:websocket:ping").subscribe((A) => {
            Fo("ping received")
        }), _7.channel("undici:websocket:pong").subscribe((A) => {
            Fo("pong received")
        })
    }
    kaQ.exports = {
        channels: o_8
    }
});
var haQ = U((vq7, faQ) => {
    var {
        InvalidArgumentError: hY,
        NotSupportedError: t_8
    } = U7(), Kb = UA("node:assert"), {
        isValidHTTPToken: vaQ,
        isValidHeaderValue: yaQ,
        isStream: e_8,
        destroy: Ak8,
        isBuffer: Qk8,
        isFormDataLike: Bk8,
        isIterable: Gk8,
        isBlobLike: Zk8,
        buildURL: Ik8,
        validateHandler: Yk8,
        getServerName: Jk8,
        normalizedMethodRecords: Wk8
    } = M6(), {
        channels: pS
    } = U5A(), {
        headerNameLowerCasedRecord: xaQ
    } = xcA(), Xk8 = /[^\u0021-\u00ff]/, hL = Symbol("handler");

class baQ {
        constructor(A, {
            path: Q,
            method: B,
            body: G,
            headers: Z,
            query: I,
            idempotent: Y,
            blocking: J,
            upgrade: W,
            headersTimeout: X,
            bodyTimeout: F,
            reset: V,
            throwOnError: K,
            expectContinue: D,
            servername: H
        }, C) {
            if (typeof Q !== "string") throw new hY("path must be a string");
            else if (Q[0] !== "/" && !(Q.startsWith("http://") || Q.startsWith("https://")) && B !== "CONNECT") throw new hY("path must be an absolute URL or start with a slash");
            else if (Xk8.test(Q)) throw new hY("invalid request path");
            if (typeof B !== "string") throw new hY("method must be a string");
            else if (Wk8[B] === void 0 && !vaQ(B)) throw new hY("invalid request method");
            if (W && typeof W !== "string") throw new hY("upgrade must be a string");
            if (X != null && (!Number.isFinite(X) || X < 0)) throw new hY("invalid headersTimeout");
            if (F != null && (!Number.isFinite(F) || F < 0)) throw new hY("invalid bodyTimeout");
            if (V != null && typeof V !== "boolean") throw new hY("invalid reset");
            if (D != null && typeof D !== "boolean") throw new hY("invalid expectContinue");
            if (this.headersTimeout = X, this.bodyTimeout = F, this.throwOnError = K === !0, this.method = B, this.abort = null, G == null) this.body = null;
            else if (e_8(G)) {
                this.body = G;
                let E = this.body._readableState;
                if (!E || !E.autoDestroy) this.endHandler = function() {
                    Ak8(this)
                }, this.body.on("end", this.endHandler);
                this.errorHandler = (z) => {
                    if (this.abort) this.abort(z);
                    else this.error = z
                }, this.body.on("error", this.errorHandler)
            } else if (Qk8(G)) this.body = G.byteLength ? G : null;
            else if (ArrayBuffer.isView(G)) this.body = G.buffer.byteLength ? Buffer.from(G.buffer, G.byteOffset, G.byteLength) : null;
            else if (G instanceof ArrayBuffer) this.body = G.byteLength ? Buffer.from(G) : null;
            else if (typeof G === "string") this.body = G.length ? Buffer.from(G) : null;
            else if (Bk8(G) || Gk8(G) || Zk8(G)) this.body = G;
            else throw new hY("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
            if (this.completed = !1, this.aborted = !1, this.upgrade = W || null, this.path = I ? Ik8(Q, I) : Q, this.origin = A, this.idempotent = Y == null ? B === "HEAD" || B === "GET" : Y, this.blocking = J == null ? !1 : J, this.reset = V == null ? null : V, this.host = null, this.contentLength = null, this.contentType = null, this.headers = [], this.expectContinue = D != null ? D : !1, Array.isArray(Z)) {
                if (Z.length % 2 !== 0) throw new hY("headers array must be even");
                for (let E = 0; E < Z.length; E += 2) gcA(this, Z[E], Z[E + 1])
            } else if (Z && typeof Z === "object")
                if (Z[Symbol.iterator])
                    for (let E of Z) {
                        if (!Array.isArray(E) || E.length !== 2) throw new hY("headers must be in key-value pair format");
                        gcA(this, E[0], E[1])
                    } else {
                        let E = Object.keys(Z);
                        for (let z = 0; z < E.length; ++z) gcA(this, E[z], Z[E[z]])
                    } else if (Z != null) throw new hY("headers must be an object or an array");
            if (Yk8(C, B, W), this.servername = H || Jk8(this.host), this[hL] = C, pS.create.hasSubscribers) pS.create.publish({
                request: this
            })
        }
        onBodySent(A) {
            if (this[hL].onBodySent) try {
                return this[hL].onBodySent(A)
            } catch (Q) {
                this.abort(Q)
            }
        }
        onRequestSent() {
            if (pS.bodySent.hasSubscribers) pS.bodySent.publish({
                request: this
            });
            if (this[hL].onRequestSent) try {
                return this[hL].onRequestSent()
            } catch (A) {
                this.abort(A)
            }
        }
        onConnect(A) {
            if (Kb(!this.aborted), Kb(!this.completed), this.error) A(this.error);
            else return this.abort = A, this[hL].onConnect(A)
        }
        onResponseStarted() {
            return this[hL].onResponseStarted?.()
        }
        onHeaders(A, Q, B, G) {
            if (Kb(!this.aborted), Kb(!this.completed), pS.headers.hasSubscribers) pS.headers.publish({
                request: this,
                response: {
                    statusCode: A,
                    headers: Q,
                    statusText: G
                }
            });
            try {
                return this[hL].onHeaders(A, Q, B, G)
            } catch (Z) {
                this.abort(Z)
            }
        }
        onData(A) {
            Kb(!this.aborted), Kb(!this.completed);
            try {
                return this[hL].onData(A)
            } catch (Q) {
                return this.abort(Q), !1
            }
        }
        onUpgrade(A, Q, B) {
            return Kb(!this.aborted), Kb(!this.completed), this[hL].onUpgrade(A, Q, B)
        }
        onComplete(A) {
            if (this.onFinally(), Kb(!this.aborted), this.completed = !0, pS.trailers.hasSubscribers) pS.trailers.publish({
                request: this,
                trailers: A
            });
            try {
                return this[hL].onComplete(A)
            } catch (Q) {
                this.onError(Q)
            }
        }
        onError(A) {
            if (this.onFinally(), pS.error.hasSubscribers) pS.error.publish({
                request: this,
                error: A
            });
            if (this.aborted) return;
            return this.aborted = !0, this[hL].onError(A)
        }
        onFinally() {
            if (this.errorHandler) this.body.off("error", this.errorHandler), this.errorHandler = null;
            if (this.endHandler) this.body.off("end", this.endHandler), this.endHandler = null
        }
        addHeader(A, Q) {
            return gcA(this, A, Q), this
        }
    }

function gcA(A, Q, B) {
        if (B && (typeof B === "object" && !Array.isArray(B))) throw new hY(`invalid ${Q} header`);
        else if (B === void 0) return;
        let G = xaQ[Q];
        if (G === void 0) {
            if (G = Q.toLowerCase(), xaQ[G] === void 0 && !vaQ(G)) throw new hY("invalid header key")
        }
        if (Array.isArray(B)) {
            let Z = [];
            for (let I = 0; I < B.length; I++)
                if (typeof B[I] === "string") {
                    if (!yaQ(B[I])) throw new hY(`invalid ${Q} header`);
                    Z.push(B[I])
                } else if (B[I] === null) Z.push("");
            else if (typeof B[I] === "object") throw new hY(`invalid ${Q} header`);
            else Z.push(`${B[I]}`);
            B = Z
        } else if (typeof B === "string") {
            if (!yaQ(B)) throw new hY(`invalid ${Q} header`)
        } else if (B === null) B = "";
        else B = `${B}`;
        if (A.host === null && G === "host") {
            if (typeof B !== "string") throw new hY("invalid host header");
            A.host = B
        } else if (A.contentLength === null && G === "content-length") {
            if (A.contentLength = parseInt(B, 10), !Number.isFinite(A.contentLength)) throw new hY("invalid content-length header")
        } else if (A.contentType === null && G === "content-type") A.contentType = B, A.headers.push(Q, B);
        else if (G === "transfer-encoding" || G === "keep-alive" || G === "upgrade") throw new hY(`invalid ${G} header`);
        else if (G === "connection") {
            let Z = typeof B === "string" ? B.toLowerCase() : null;
            if (Z !== "close" && Z !== "keep-alive") throw new hY("invalid connection header");
            if (Z === "close") A.reset = !0
        } else if (G === "expect") throw new t_8("expect header not supported");
        else A.headers.push(Q, B)
    }
    faQ.exports = baQ
});
var fCA = U((bq7, uaQ) => {
    var Fk8 = UA("node:events");

class R_1 extends Fk8 {
        dispatch() {
            throw Error("not implemented")
        }
        close() {
            throw Error("not implemented")
        }
        destroy() {
            throw Error("not implemented")
        }
        compose(...A) {
            let Q = Array.isArray(A[0]) ? A[0] : A,
                B = this.dispatch.bind(this);
            for (let G of Q) {
                if (G == null) continue;
                if (typeof G !== "function") throw TypeError(`invalid interceptor, expected function received ${typeof G}`);
                if (B = G(B), B == null || typeof B !== "function" || B.length !== 2) throw TypeError("invalid interceptor")
            }
            return new gaQ(this, B)
        }
    }

class gaQ extends R_1 {
        #A = null;
        #Q = null;
        constructor(A, Q) {
            super();
            this.#A = A, this.#Q = Q
        }
        dispatch(...A) {
            this.#Q(...A)
        }
        close(...A) {
            return this.#A.close(...A)
        }
        destroy(...A) {
            return this.#A.destroy(...A)
        }
    }
    uaQ.exports = R_1
});
var N5A = U((fq7, daQ) => {
    var Vk8 = fCA(),
        {
            ClientDestroyedError: T_1,
            ClientClosedError: Kk8,
            InvalidArgumentError: $5A
        } = U7(),
        {
            kDestroy: Dk8,
            kClose: Hk8,
            kClosed: hCA,
            kDestroyed: w5A,
            kDispatch: P_1,
            kInterceptors: Vo
        } = iI(),
        Db = Symbol("onDestroyed"),
        q5A = Symbol("onClosed"),
        ucA = Symbol("Intercepted Dispatch");

class maQ extends Vk8 {
        constructor() {
            super();
            this[w5A] = !1, this[Db] = null, this[hCA] = !1, this[q5A] = []
        }
        get destroyed() {
            return this[w5A]
        }
        get closed() {
            return this[hCA]
        }
        get interceptors() {
            return this[Vo]
        }
        set interceptors(A) {
            if (A) {
                for (let Q = A.length - 1; Q >= 0; Q--)
                    if (typeof this[Vo][Q] !== "function") throw new $5A("interceptor must be an function")
            }
            this[Vo] = A
        }
        close(A) {
            if (A === void 0) return new Promise((B, G) => {
                this.close((Z, I) => {
                    return Z ? G(Z) : B(I)
                })
            });
            if (typeof A !== "function") throw new $5A("invalid callback");
            if (this[w5A]) {
                queueMicrotask(() => A(new T_1, null));
                return
            }
            if (this[hCA]) {
                if (this[q5A]) this[q5A].push(A);
                else queueMicrotask(() => A(null, null));
                return
            }
            this[hCA] = !0, this[q5A].push(A);
            let Q = () => {
                let B = this[q5A];
                this[q5A] = null;
                for (let G = 0; G < B.length; G++) B[G](null, null)
            };
            this[Hk8]().then(() => this.destroy()).then(() => {
                queueMicrotask(Q)
            })
        }
        destroy(A, Q) {
            if (typeof A === "function") Q = A, A = null;
            if (Q === void 0) return new Promise((G, Z) => {
                this.destroy(A, (I, Y) => {
                    return I ? Z(I) : G(Y)
                })
            });
            if (typeof Q !== "function") throw new $5A("invalid callback");
            if (this[w5A]) {
                if (this[Db]) this[Db].push(Q);
                else queueMicrotask(() => Q(null, null));
                return
            }
            if (!A) A = new T_1;
            this[w5A] = !0, this[Db] = this[Db] || [], this[Db].push(Q);
            let B = () => {
                let G = this[Db];
                this[Db] = null;
                for (let Z = 0; Z < G.length; Z++) G[Z](null, null)
            };
            this[Dk8](A).then(() => {
                queueMicrotask(B)
            })
        } [ucA](A, Q) {
            if (!this[Vo] || this[Vo].length === 0) return this[ucA] = this[P_1], this[P_1](A, Q);
            let B = this[P_1].bind(this);
            for (let G = this[Vo].length - 1; G >= 0; G--) B = this[Vo][G](B);
            return this[ucA] = B, B(A, Q)
        }
        dispatch(A, Q) {
            if (!Q || typeof Q !== "object") throw new $5A("handler must be an object");
            try {
                if (!A || typeof A !== "object") throw new $5A("opts must be an object.");
                if (this[w5A] || this[Db]) throw new T_1;
                if (this[hCA]) throw new Kk8;
                return this[ucA](A, Q)
            } catch (B) {
                if (typeof Q.onError !== "function") throw new $5A("invalid onError method");
                return Q.onError(B), !1
            }
        }
    }
    daQ.exports = maQ
});
var b_1 = U((hq7, iaQ) => {
    var L5A = 0,
        j_1 = 1000,
        S_1 = (j_1 >> 1) - 1,
        Hb, __1 = Symbol("kFastTimer"),
        Cb = [],
        k_1 = -2,
        y_1 = -1,
        paQ = 0,
        caQ = 1;

function x_1() {
        L5A += S_1;
        let A = 0,
            Q = Cb.length;
        while (A < Q) {
            let B = Cb[A];
            if (B._state === paQ) B._idleStart = L5A - S_1, B._state = caQ;
            else if (B._state === caQ && L5A >= B._idleStart + B._idleTimeout) B._state = y_1, B._idleStart = -1, B._onTimeout(B._timerArg);
            if (B._state === y_1) {
                if (B._state = k_1, --Q !== 0) Cb[A] = Cb[Q]
            } else ++A
        }
        if (Cb.length = Q, Cb.length !== 0) laQ()
    }

function laQ() {
        if (Hb) Hb.refresh();
        else if (clearTimeout(Hb), Hb = setTimeout(x_1, S_1), Hb.unref) Hb.unref()
    }

class v_1 {
        [__1] = !0;
        _state = k_1;
        _idleTimeout = -1;
        _idleStart = -1;
        _onTimeout;
        _timerArg;
        constructor(A, Q, B) {
            this._onTimeout = A, this._idleTimeout = Q, this._timerArg = B, this.refresh()
        }
        refresh() {
            if (this._state === k_1) Cb.push(this);
            if (!Hb || Cb.length === 1) laQ();
            this._state = paQ
        }
        clear() {
            this._state = y_1, this._idleStart = -1
        }