/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_046.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (17次) = lazyLoader(fn) - Lazy module loader
 *   UA       (4次) = require(moduleName) - Node.js require
 *   U        (2次) = moduleWrapper(fn) - CommonJS module wrapper
 *   GA       (2次) = esmImport(module) - ESM import helper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 46/61
 * Lines: 248064 - 249563 (1500 lines)
 * Original file: cli.js
 */

    clone() {
        return new cA1(this._policies)
    }
    static create() {
        return new cA1
    }
    orderPolicies() {
        let A = [],
            Q = new Map;

        function B(D) {
            return {
                name: D,
                policies: new Set,
                hasRun: !1,
                hasAfterPolicies: !1
            }
        }
        let G = B("Serialize"),
            Z = B("None"),
            I = B("Deserialize"),
            Y = B("Retry"),
            J = B("Sign"),
            W = [G, Z, I, Y, J];

        function X(D) {
            if (D === "Retry") return Y;
            else if (D === "Serialize") return G;
            else if (D === "Deserialize") return I;
            else if (D === "Sign") return J;
            else return Z
        }
        for (let D of this._policies) {
            let {
                policy: H,
                options: C
            } = D, E = H.name;
            if (Q.has(E)) throw Error("Duplicate policy names not allowed in pipeline");
            let z = {
                policy: H,
                dependsOn: new Set,
                dependants: new Set
            };
            if (C.afterPhase) z.afterPhase = X(C.afterPhase), z.afterPhase.hasAfterPolicies = !0;
            Q.set(E, z), X(C.phase).policies.add(z)
        }
        for (let D of this._policies) {
            let {
                policy: H,
                options: C
            } = D, E = H.name, z = Q.get(E);
            if (!z) throw Error(`Missing node for policy ${E}`);
            if (C.afterPolicies)
                for (let w of C.afterPolicies) {
                    let N = Q.get(w);
                    if (N) z.dependsOn.add(N), N.dependants.add(z)
                }
            if (C.beforePolicies)
                for (let w of C.beforePolicies) {
                    let N = Q.get(w);
                    if (N) N.dependsOn.add(z), z.dependants.add(N)
                }
        }

        function F(D) {
            D.hasRun = !0;
            for (let H of D.policies) {
                if (H.afterPhase && (!H.afterPhase.hasRun || H.afterPhase.policies.size)) continue;
                if (H.dependsOn.size === 0) {
                    A.push(H.policy);
                    for (let C of H.dependants) C.dependsOn.delete(H);
                    Q.delete(H.policy.name), D.policies.delete(H)
                }
            }
        }

        function V() {
            for (let D of W) {
                if (F(D), D.policies.size > 0 && D !== Z) {
                    if (!Z.hasRun) F(Z);
                    return
                }
                if (D.hasAfterPolicies) F(Z)
            }
        }
        let K = 0;
        while (Q.size > 0) {
            K++;
            let D = A.length;
            if (V(), A.length <= D && K > 1) throw Error("Cannot satisfy policy dependencies due to requirements cycle.")
        }
        return A
    }
}

function Na1() {
    return cA1.create()
}
var UrB;
var $rB = L(() => {
    UrB = new Set(["Deserialize", "Serialize", "Retry", "Sign"])
});

function UqA(A) {
    return typeof A === "object" && A !== null && !Array.isArray(A) && !(A instanceof RegExp) && !(A instanceof Date)
}

function _e(A) {
    if (UqA(A)) {
        let Q = typeof A.name === "string",
            B = typeof A.message === "string";
        return Q && B
    }
    return !1
}
var La1 = () => {};
import {
    inspect as no6
} from "node:util";
var wrB;
var qrB = L(() => {
    wrB = no6.custom
});
class Yk {
    constructor({
        additionalAllowedHeaderNames: A = [],
        additionalAllowedQueryParameters: Q = []
    } = {}) {
        A = ao6.concat(A), Q = so6.concat(Q), this.allowedHeaderNames = new Set(A.map((B) => B.toLowerCase())), this.allowedQueryParameters = new Set(Q.map((B) => B.toLowerCase()))
    }
    sanitize(A) {
        let Q = new Set;
        return JSON.stringify(A, (B, G) => {
            if (G instanceof Error) return Object.assign(Object.assign({}, G), {
                name: G.name,
                message: G.message
            });
            if (B === "headers") return this.sanitizeHeaders(G);
            else if (B === "url") return this.sanitizeUrl(G);
            else if (B === "query") return this.sanitizeQuery(G);
            else if (B === "body") return;
            else if (B === "response") return;
            else if (B === "operationSpec") return;
            else if (Array.isArray(G) || UqA(G)) {
                if (Q.has(G)) return "[Circular]";
                Q.add(G)
            }
            return G
        }, 2)
    }
    sanitizeUrl(A) {
        if (typeof A !== "string" || A === null || A === "") return A;
        let Q = new URL(A);
        if (!Q.search) return A;
        for (let [B] of Q.searchParams)
            if (!this.allowedQueryParameters.has(B.toLowerCase())) Q.searchParams.set(B, Ma1);
        return Q.toString()
    }
    sanitizeHeaders(A) {
        let Q = {};
        for (let B of Object.keys(A))
            if (this.allowedHeaderNames.has(B.toLowerCase())) Q[B] = A[B];
            else Q[B] = Ma1;
        return Q
    }
    sanitizeQuery(A) {
        if (typeof A !== "object" || A === null) return A;
        let Q = {};
        for (let B of Object.keys(A))
            if (this.allowedQueryParameters.has(B.toLowerCase())) Q[B] = A[B];
            else Q[B] = Ma1;
        return Q
    }
}
var Ma1 = "REDACTED",
    ao6, so6;
var $qA = L(() => {
    ao6 = ["x-ms-client-request-id", "x-ms-return-client-request-id", "x-ms-useragent", "x-ms-correlation-request-id", "x-ms-request-id", "client-request-id", "ms-cv", "return-client-request-id", "traceparent", "Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Expose-Headers", "Access-Control-Max-Age", "Access-Control-Request-Headers", "Access-Control-Request-Method", "Origin", "Accept", "Accept-Encoding", "Cache-Control", "Connection", "Content-Length", "Content-Type", "Date", "ETag", "Expires", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Last-Modified", "Pragma", "Request-Id", "Retry-After", "Server", "Transfer-Encoding", "User-Agent", "WWW-Authenticate"], so6 = ["api-version"]
});

function Oa1(A) {
    if (A instanceof RU) return !0;
    return _e(A) && A.name === "RestError"
}
var ro6, RU;
var Ra1 = L(() => {
    La1();
    qrB();
    $qA();
    ro6 = new Yk;
    RU = class RU extends Error {
        constructor(A, Q = {}) {
            super(A);
            this.name = "RestError", this.code = Q.code, this.statusCode = Q.statusCode, Object.defineProperty(this, "request", {
                value: Q.request,
                enumerable: !1
            }), Object.defineProperty(this, "response", {
                value: Q.response,
                enumerable: !1
            }), Object.defineProperty(this, wrB, {
                value: () => {
                    return `RestError: ${this.message} 
 ${ro6.sanitize(Object.assign(Object.assign({},this),{request:this.request,response:this.response}))}`
                },
                enumerable: !1
            }), Object.setPrototypeOf(this, RU.prototype)
        }
    };
    RU.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
    RU.PARSE_ERROR = "PARSE_ERROR"
});

function Jk(A, Q) {
    return Buffer.from(A, Q)
}
var bT;
var pA1 = L(() => {
    bA1();
    bT = vA1("ts-http-runtime")
});
import * as RZA from "node:http";
import * as TZA from "node:https";
import * as lA1 from "node:zlib";
import {
    Transform as oo6
} from "node:stream";

function wqA(A) {
    return A && typeof A.pipe === "function"
}

function NrB(A) {
    if (A.readable === !1) return Promise.resolve();
    return new Promise((Q) => {
        let B = () => {
            Q(), A.removeListener("close", B), A.removeListener("end", B), A.removeListener("error", B)
        };
        A.on("close", B), A.on("end", B), A.on("error", B)
    })
}

function LrB(A) {
    return A && typeof A.byteLength === "number"
}
class MrB {
    constructor() {
        this.cachedHttpsAgents = new WeakMap
    }
    async sendRequest(A) {
        var Q, B, G;
        let Z = new AbortController,
            I;
        if (A.abortSignal) {
            if (A.abortSignal.aborted) throw new Wl("The operation was aborted. Request has already been canceled.");
            I = (V) => {
                if (V.type === "abort") Z.abort()
            }, A.abortSignal.addEventListener("abort", I)
        }
        let Y;
        if (A.timeout > 0) Y = setTimeout(() => {
            let V = new Yk;
            bT.info(`request to '${V.sanitizeUrl(A.url)}' timed out. canceling...`), Z.abort()
        }, A.timeout);
        let J = A.headers.get("Accept-Encoding"),
            W = (J === null || J === void 0 ? void 0 : J.includes("gzip")) || (J === null || J === void 0 ? void 0 : J.includes("deflate")),
            X = typeof A.body === "function" ? A.body() : A.body;
        if (X && !A.headers.has("Content-Length")) {
            let V = Bt6(X);
            if (V !== null) A.headers.set("Content-Length", V)
        }
        let F;
        try {
            if (X && A.onUploadProgress) {
                let E = A.onUploadProgress,
                    z = new Ta1(E);
                if (z.on("error", (w) => {
                        bT.error("Error in upload progress", w)
                    }), wqA(X)) X.pipe(z);
                else z.end(X);
                X = z
            }
            let V = await this.makeRequest(A, Z, X);
            if (Y !== void 0) clearTimeout(Y);
            let K = eo6(V),
                H = {
                    status: (Q = V.statusCode) !== null && Q !== void 0 ? Q : 0,
                    headers: K,
                    request: A
                };
            if (A.method === "HEAD") return V.resume(), H;
            F = W ? At6(V, K) : V;
            let C = A.onDownloadProgress;
            if (C) {
                let E = new Ta1(C);
                E.on("error", (z) => {
                    bT.error("Error in download progress", z)
                }), F.pipe(E), F = E
            }
            if (((B = A.streamResponseStatusCodes) === null || B === void 0 ? void 0 : B.has(Number.POSITIVE_INFINITY)) || ((G = A.streamResponseStatusCodes) === null || G === void 0 ? void 0 : G.has(H.status))) H.readableStreamBody = F;
            else H.bodyAsText = await Qt6(F);
            return H
        } finally {
            if (A.abortSignal && I) {
                let V = Promise.resolve();
                if (wqA(X)) V = NrB(X);
                let K = Promise.resolve();
                if (wqA(F)) K = NrB(F);
                Promise.all([V, K]).then(() => {
                    var D;
                    if (I)(D = A.abortSignal) === null || D === void 0 || D.removeEventListener("abort", I)
                }).catch((D) => {
                    bT.warning("Error when cleaning up abortListener on httpRequest", D)
                })
            }
        }
    }
    makeRequest(A, Q, B) {
        var G;
        let Z = new URL(A.url),
            I = Z.protocol !== "https:";
        if (I && !A.allowInsecureConnection) throw Error(`Cannot connect to ${A.url} while allowInsecureConnection is false.`);
        let Y = (G = A.agent) !== null && G !== void 0 ? G : this.getOrCreateAgent(A, I),
            J = Object.assign({
                agent: Y,
                hostname: Z.hostname,
                path: `${Z.pathname}${Z.search}`,
                port: Z.port,
                method: A.method,
                headers: A.headers.toJSON({
                    preserveCase: !0
                })
            }, A.requestOverrides);
        return new Promise((W, X) => {
            let F = I ? RZA.request(J, W) : TZA.request(J, W);
            if (F.once("error", (V) => {
                    var K;
                    X(new RU(V.message, {
                        code: (K = V.code) !== null && K !== void 0 ? K : RU.REQUEST_SEND_ERROR,
                        request: A
                    }))
                }), Q.signal.addEventListener("abort", () => {
                    let V = new Wl("The operation was aborted. Rejecting from abort signal callback while making request.");
                    F.destroy(V), X(V)
                }), B && wqA(B)) B.pipe(F);
            else if (B)
                if (typeof B === "string" || Buffer.isBuffer(B)) F.end(B);
                else if (LrB(B)) F.end(ArrayBuffer.isView(B) ? Buffer.from(B.buffer) : Buffer.from(B));
            else bT.error("Unrecognized body type", B), X(new RU("Unrecognized body type"));
            else F.end()
        })
    }
    getOrCreateAgent(A, Q) {
        var B;
        let G = A.disableKeepAlive;
        if (Q) {
            if (G) return RZA.globalAgent;
            if (!this.cachedHttpAgent) this.cachedHttpAgent = new RZA.Agent({
                keepAlive: !0
            });
            return this.cachedHttpAgent
        } else {
            if (G && !A.tlsSettings) return TZA.globalAgent;
            let Z = (B = A.tlsSettings) !== null && B !== void 0 ? B : to6,
                I = this.cachedHttpsAgents.get(Z);
            if (I && I.options.keepAlive === !G) return I;
            return bT.info("No cached TLS Agent exist, creating a new Agent"), I = new TZA.Agent(Object.assign({
                keepAlive: !G
            }, Z)), this.cachedHttpsAgents.set(Z, I), I
        }
    }
}

function eo6(A) {
    let Q = Ik();
    for (let B of Object.keys(A.headers)) {
        let G = A.headers[B];
        if (Array.isArray(G)) {
            if (G.length > 0) Q.set(B, G[0])
        } else if (G) Q.set(B, G)
    }
    return Q
}

function At6(A, Q) {
    let B = Q.get("Content-Encoding");
    if (B === "gzip") {
        let G = lA1.createGunzip();
        return A.pipe(G), G
    } else if (B === "deflate") {
        let G = lA1.createInflate();
        return A.pipe(G), G
    }
    return A
}

function Qt6(A) {
    return new Promise((Q, B) => {
        let G = [];
        A.on("data", (Z) => {
            if (Buffer.isBuffer(Z)) G.push(Z);
            else G.push(Buffer.from(Z))
        }), A.on("end", () => {
            Q(Buffer.concat(G).toString("utf8"))
        }), A.on("error", (Z) => {
            if (Z && (Z === null || Z === void 0 ? void 0 : Z.name) === "AbortError") B(Z);
            else B(new RU(`Error reading response as text: ${Z.message}`, {
                code: RU.PARSE_ERROR
            }))
        })
    })
}

function Bt6(A) {
    if (!A) return 0;
    else if (Buffer.isBuffer(A)) return A.length;
    else if (wqA(A)) return null;
    else if (LrB(A)) return A.byteLength;
    else if (typeof A === "string") return Buffer.from(A).length;
    else return null
}

function OrB() {
    return new MrB
}
var to6, Ta1;
var RrB = L(() => {
    mA1();
    EqA();
    Ra1();
    pA1();
    $qA();
    to6 = {};
    Ta1 = class Ta1 extends oo6 {
        _transform(A, Q, B) {
            this.push(A), this.loadedBytes += A.length;
            try {
                this.progressCallback({
                    loadedBytes: this.loadedBytes
                }), B()
            } catch (G) {
                B(G)
            }
        }
        constructor(A) {
            super();
            this.loadedBytes = 0, this.progressCallback = A
        }
    }
});

function Pa1() {
    return OrB()
}
var TrB = L(() => {
    RrB()
});

function Sa1(A = {}) {
    var Q;
    let B = (Q = A.logger) !== null && Q !== void 0 ? Q : bT.info,
        G = new Yk({
            additionalAllowedHeaderNames: A.additionalAllowedHeaderNames,
            additionalAllowedQueryParameters: A.additionalAllowedQueryParameters
        });
    return {
        name: ja1,
        async sendRequest(Z, I) {
            if (!B.enabled) return I(Z);
            B(`Request: ${G.sanitize(Z)}`);
            let Y = await I(Z);
            return B(`Response status code: ${Y.status}`), B(`Headers: ${G.sanitize(Y.headers)}`), Y
        }
    }
}
var ja1 = "logPolicy";
var PrB = L(() => {
    pA1();
    $qA()
});

function _a1(A = {}) {
    let {
        maxRetries: Q = 20
    } = A;
    return {
        name: "redirectPolicy",
        async sendRequest(B, G) {
            let Z = await G(B);
            return SrB(G, Z, Q)
        }
    }
}
async function SrB(A, Q, B, G = 0) {
    let {
        request: Z,
        status: I,
        headers: Y
    } = Q, J = Y.get("location");
    if (J && (I === 300 || I === 301 && jrB.includes(Z.method) || I === 302 && jrB.includes(Z.method) || I === 303 && Z.method === "POST" || I === 307) && G < B) {
        let W = new URL(J, Z.url);
        if (Z.url = W.toString(), I === 303) Z.method = "GET", Z.headers.delete("Content-Length"), delete Z.body;
        Z.headers.delete("Authorization");
        let X = await A(Z);
        return SrB(A, X, B, G + 1)
    }
    return Q
}
var jrB;
var _rB = L(() => {
    jrB = ["GET", "HEAD"]
});
var qqA = 3;

function ka1() {
    return {
        name: "decompressResponsePolicy",
        async sendRequest(A, Q) {
            if (A.method !== "HEAD") A.headers.set("Accept-Encoding", "gzip,deflate");
            return Q(A)
        }
    }
}

function ya1(A, Q) {
    return A = Math.ceil(A), Q = Math.floor(Q), Math.floor(Math.random() * (Q - A + 1)) + A
}

function NqA(A, Q) {
    let B = Q.retryDelayInMs * Math.pow(2, A),
        G = Math.min(Q.maxRetryDelayInMs, B);
    return {
        retryAfterInMs: G / 2 + ya1(0, G / 2)
    }
}
var xa1 = () => {};

function krB(A, Q, B) {
    return new Promise((G, Z) => {
        let I = void 0,
            Y = void 0,
            J = () => {
                return Z(new Wl((B === null || B === void 0 ? void 0 : B.abortErrorMsg) ? B === null || B === void 0 ? void 0 : B.abortErrorMsg : Gt6))
            },
            W = () => {
                if ((B === null || B === void 0 ? void 0 : B.abortSignal) && Y) B.abortSignal.removeEventListener("abort", Y)
            };
        if (Y = () => {
                if (I) clearTimeout(I);
                return W(), J()
            }, (B === null || B === void 0 ? void 0 : B.abortSignal) && B.abortSignal.aborted) return J();
        if (I = setTimeout(() => {
                W(), G(Q)
            }, A), B === null || B === void 0 ? void 0 : B.abortSignal) B.abortSignal.addEventListener("abort", Y)
    })
}

function yrB(A, Q) {
    let B = A.headers.get(Q);
    if (!B) return;
    let G = Number(B);
    if (Number.isNaN(G)) return;
    return G
}
var Gt6 = "The operation was aborted.";
var va1 = L(() => {
    mA1()
});

function xrB(A) {
    if (!(A && [429, 503].includes(A.status))) return;
    try {
        for (let Z of Zt6) {
            let I = yrB(A, Z);
            if (I === 0 || I) return I * (Z === ba1 ? 1000 : 1)
        }
        let Q = A.headers.get(ba1);
        if (!Q) return;
        let G = Date.parse(Q) - Date.now();
        return Number.isFinite(G) ? Math.max(0, G) : void 0
    } catch (Q) {
        return
    }
}

function vrB(A) {
    return Number.isFinite(xrB(A))
}

function brB() {
    return {
        name: "throttlingRetryStrategy",
        retry({
            response: A
        }) {
            let Q = xrB(A);
            if (!Number.isFinite(Q)) return {
                skipStrategy: !0
            };
            return {
                retryAfterInMs: Q
            }
        }
    }
}
var ba1 = "Retry-After",
    Zt6;
var fa1 = L(() => {
    va1();
    Zt6 = ["retry-after-ms", "x-ms-retry-after-ms", ba1]
});

function frB(A = {}) {
    var Q, B;
    let G = (Q = A.retryDelayInMs) !== null && Q !== void 0 ? Q : It6,
        Z = (B = A.maxRetryDelayInMs) !== null && B !== void 0 ? B : Yt6;
    return {
        name: "exponentialRetryStrategy",
        retry({
            retryCount: I,
            response: Y,
            responseError: J
        }) {
            let W = Wt6(J),
                X = W && A.ignoreSystemErrors,
                F = Jt6(Y),
                V = F && A.ignoreHttpStatusCodes;
            if (Y && (vrB(Y) || !F) || V || X) return {
                skipStrategy: !0
            };
            if (J && !W && !F) return {
                errorToThrow: J
            };
            return NqA(I, {
                retryDelayInMs: G,
                maxRetryDelayInMs: Z
            })
        }
    }
}

function Jt6(A) {
    return Boolean(A && A.status !== void 0 && (A.status >= 500 || A.status === 408) && A.status !== 501 && A.status !== 505)
}

function Wt6(A) {
    if (!A) return !1;
    return A.code === "ETIMEDOUT" || A.code === "ESOCKETTIMEDOUT" || A.code === "ECONNREFUSED" || A.code === "ECONNRESET" || A.code === "ENOENT" || A.code === "ENOTFOUND"
}
var It6 = 1000,
    Yt6 = 64000;
var hrB = L(() => {
    xa1();
    fa1()
});

function LqA(A, Q = {
    maxRetries: qqA
}) {
    let B = Q.logger || Xt6;
    return {
        name: Ft6,
        async sendRequest(G, Z) {
            var I, Y;
            let J, W, X = -1;
            A: while (!0) {
                X += 1, J = void 0, W = void 0;
                try {
                    B.info(`Retry ${X}: Attempting to send request`, G.requestId), J = await Z(G), B.info(`Retry ${X}: Received a response from request`, G.requestId)
                } catch (F) {
                    if (B.error(`Retry ${X}: Received an error from request`, G.requestId), W = F, !F || W.name !== "RestError") throw F;
                    J = W.response
                }
                if ((I = G.abortSignal) === null || I === void 0 ? void 0 : I.aborted) throw B.error(`Retry ${X}: Request aborted.`), new Wl;
                if (X >= ((Y = Q.maxRetries) !== null && Y !== void 0 ? Y : qqA))
                    if (B.info(`Retry ${X}: Maximum retries reached. Returning the last received response, or throwing the last received error.`), W) throw W;
                    else if (J) return J;
                else throw Error("Maximum retries reached with no response or error to throw");
                B.info(`Retry ${X}: Processing ${A.length} retry strategies.`);
                Q: for (let F of A) {
                    let V = F.logger || B;
                    V.info(`Retry ${X}: Processing retry strategy ${F.name}.`);
                    let K = F.retry({
                        retryCount: X,
                        response: J,
                        responseError: W
                    });
                    if (K.skipStrategy) {
                        V.info(`Retry ${X}: Skipped.`);
                        continue Q
                    }
                    let {
                        errorToThrow: D,
                        retryAfterInMs: H,
                        redirectTo: C
                    } = K;
                    if (D) throw V.error(`Retry ${X}: Retry strategy ${F.name} throws error:`, D), D;
                    if (H || H === 0) {
                        V.info(`Retry ${X}: Retry strategy ${F.name} retries after ${H}`), await krB(H, void 0, {
                            abortSignal: G.abortSignal
                        });
                        continue A
                    }
                    if (C) {
                        V.info(`Retry ${X}: Retry strategy ${F.name} redirects to ${C}`), G.url = C;
                        continue A
                    }
                }
                if (W) throw B.info("None of the retry strategies could work with the received error. Throwing it."), W;
                if (J) return B.info("None of the retry strategies could work with the received response. Returning it."), J
            }
        }
    }
}
var Xt6, Ft6 = "retryPolicy";
var ha1 = L(() => {
    va1();
    mA1();
    bA1();
    Xt6 = vA1("ts-http-runtime retryPolicy")
});

function ua1(A = {}) {
    var Q;
    return {
        name: ga1,
        sendRequest: LqA([brB(), frB(A)], {
            maxRetries: (Q = A.maxRetries) !== null && Q !== void 0 ? Q : qqA
        }).sendRequest
    }
}
var ga1 = "defaultRetryPolicy";
var grB = L(() => {
    hrB();
    fa1();
    ha1()
});
var ma1, da1, ca1, pa1, urB, mrB, drB, crB, PZA, prB;
var la1 = L(() => {
    urB = typeof window < "u" && typeof window.document < "u", mrB = typeof self === "object" && typeof(self === null || self === void 0 ? void 0 : self.importScripts) === "function" && (((ma1 = self.constructor) === null || ma1 === void 0 ? void 0 : ma1.name) === "DedicatedWorkerGlobalScope" || ((da1 = self.constructor) === null || da1 === void 0 ? void 0 : da1.name) === "ServiceWorkerGlobalScope" || ((ca1 = self.constructor) === null || ca1 === void 0 ? void 0 : ca1.name) === "SharedWorkerGlobalScope"), drB = typeof Deno < "u" && typeof Deno.version < "u" && typeof Deno.version.deno < "u", crB = typeof Bun < "u" && typeof Bun.version < "u", PZA = typeof globalThis.process < "u" && Boolean(globalThis.process.version) && Boolean((pa1 = globalThis.process.versions) === null || pa1 === void 0 ? void 0 : pa1.node), prB = typeof navigator < "u" && (navigator === null || navigator === void 0 ? void 0 : navigator.product) === "ReactNative"
});

function Vt6(A) {
    var Q;
    let B = {};
    for (let [G, Z] of A.entries())(Q = B[G]) !== null && Q !== void 0 || (B[G] = []), B[G].push(Z);
    return B
}

function na1() {
    return {
        name: ia1,
        async sendRequest(A, Q) {
            if (PZA && typeof FormData < "u" && A.body instanceof FormData) A.formData = Vt6(A.body), A.body = void 0;
            if (A.formData) {
                let B = A.headers.get("Content-Type");
                if (B && B.indexOf("application/x-www-form-urlencoded") !== -1) A.body = Kt6(A.formData);
                else await Dt6(A.formData, A);
                A.formData = void 0
            }
            return Q(A)
        }
    }
}

function Kt6(A) {
    let Q = new URLSearchParams;
    for (let [B, G] of Object.entries(A))
        if (Array.isArray(G))
            for (let Z of G) Q.append(B, Z.toString());
        else Q.append(B, G.toString());
    return Q.toString()
}
async function Dt6(A, Q) {
    let B = Q.headers.get("Content-Type");
    if (B && !B.startsWith("multipart/form-data")) return;
    Q.headers.set("Content-Type", B !== null && B !== void 0 ? B : "multipart/form-data");
    let G = [];
    for (let [Z, I] of Object.entries(A))
        for (let Y of Array.isArray(I) ? I : [I])
            if (typeof Y === "string") G.push({
                headers: Ik({
                    "Content-Disposition": `form-data; name="${Z}"`
                }),
                body: Jk(Y, "utf-8")
            });
            else if (Y === void 0 || Y === null || typeof Y !== "object") throw Error(`Unexpected value for key ${Z}: ${Y}. Value should be serialized to string first.`);
    else {
        let J = Y.name || "blob",
            W = Ik();
        W.set("Content-Disposition", `form-data; name="${Z}"; filename="${J}"`), W.set("Content-Type", Y.type || "application/octet-stream"), G.push({
            headers: W,
            body: Y
        })
    }
    Q.multipartBody = {
        parts: G
    }
}
var ia1 = "formDataPolicy";
var lrB = L(() => {
    la1();
    EqA()
});
var arB = U((kM) => {
    var Ht6 = kM && kM.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        Ct6 = kM && kM.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        nrB = kM && kM.__importStar || function(A) {
            if (A && A.__esModule) return A;
            var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) Ht6(Q, A, B)
            }
            return Ct6(Q, A), Q
        },
        Et6 = kM && kM.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        };
    Object.defineProperty(kM, "__esModule", {
        value: !0
    });
    kM.HttpProxyAgent = void 0;
    var zt6 = nrB(UA("net")),
        Ut6 = nrB(UA("tls")),
        $t6 = Et6(Os()),
        wt6 = UA("events"),
        qt6 = E_1(),
        irB = UA("url"),
        jZA = (0, $t6.default)("http-proxy-agent");
    class aa1 extends qt6.Agent {
        constructor(A, Q) {
            super(Q);
            this.proxy = typeof A === "string" ? new irB.URL(A) : A, this.proxyHeaders = Q?.headers ?? {}, jZA("Creating new HttpProxyAgent instance: %o", this.proxy.href);
            let B = (this.proxy.hostname || this.proxy.host).replace(/^\[|\]$/g, ""),
                G = this.proxy.port ? parseInt(this.proxy.port, 10) : this.proxy.protocol === "https:" ? 443 : 80;
            this.connectOpts = {
                ...Q ? Nt6(Q, "headers") : null,
                host: B,
                port: G
            }
        }
        addRequest(A, Q) {
            A._header = null, this.setRequestProps(A, Q), super.addRequest(A, Q)
        }
        setRequestProps(A, Q) {
            let {
                proxy: B
            } = this, G = Q.secureEndpoint ? "https:" : "http:", Z = A.getHeader("host") || "localhost", I = `${G}//${Z}`, Y = new irB.URL(A.path, I);
            if (Q.port !== 80) Y.port = String(Q.port);
            A.path = String(Y);
            let J = typeof this.proxyHeaders === "function" ? this.proxyHeaders() : {
                ...this.proxyHeaders
            };
            if (B.username || B.password) {
                let W = `${decodeURIComponent(B.username)}:${decodeURIComponent(B.password)}`;
                J["Proxy-Authorization"] = `Basic ${Buffer.from(W).toString("base64")}`
            }
            if (!J["Proxy-Connection"]) J["Proxy-Connection"] = this.keepAlive ? "Keep-Alive" : "close";
            for (let W of Object.keys(J)) {
                let X = J[W];
                if (X) A.setHeader(W, X)
            }
        }
        async connect(A, Q) {
            if (A._header = null, !A.path.includes("://")) this.setRequestProps(A, Q);
            let B, G;
            if (jZA("Regenerating stored HTTP header string for request"), A._implicitHeader(), A.outputData && A.outputData.length > 0) jZA("Patching connection write() output buffer with updated header"), B = A.outputData[0].data, G = B.indexOf(`\r
\r
`) + 4, A.outputData[0].data = A._header + B.substring(G), jZA("Output buffer: %o", A.outputData[0].data);
            let Z;
            if (this.proxy.protocol === "https:") jZA("Creating `tls.Socket`: %o", this.connectOpts), Z = Ut6.connect(this.connectOpts);
            else jZA("Creating `net.Socket`: %o", this.connectOpts), Z = zt6.connect(this.connectOpts);
            return await (0, wt6.once)(Z, "connect"), Z
        }
    }
    aa1.protocols = ["http", "https"];
    kM.HttpProxyAgent = aa1;

    function Nt6(A, ...Q) {
        let B = {},
            G;
        for (G in A)
            if (!Q.includes(G)) B[G] = A[G];
        return B
    }
});

function iA1(A) {
    if (process.env[A]) return process.env[A];
    else if (process.env[A.toLowerCase()]) return process.env[A.toLowerCase()];
    return
}

function Pt6() {
    if (!process) return;
    let A = iA1(Lt6),
        Q = iA1(Ot6),
        B = iA1(Mt6);
    return A || Q || B
}

function jt6(A, Q, B) {
    if (Q.length === 0) return !1;
    let G = new URL(A).hostname;
    if (B === null || B === void 0 ? void 0 : B.has(G)) return B.get(G);
    let Z = !1;
    for (let I of Q)
        if (I[0] === ".") {
            if (G.endsWith(I)) Z = !0;
            else if (G.length === I.length - 1 && G === I.slice(1)) Z = !0
        } else if (G === I) Z = !0;
    return B === null || B === void 0 || B.set(G, Z), Z
}

function St6() {
    let A = iA1(Rt6);
    if (AoB = !0, A) return A.split(",").map((Q) => Q.trim()).filter((Q) => Q.length);
    return []
}

function _t6() {
    let A = Pt6();
    return A ? new URL(A) : void 0
}

function rrB(A) {
    let Q;
    try {
        Q = new URL(A.host)
    } catch (B) {
        throw Error(`Expecting a valid host string in proxy settings, but found "${A.host}".`)
    }
    if (Q.port = String(A.port), A.username) Q.username = A.username;
    if (A.password) Q.password = A.password;
    return Q
}

function orB(A, Q, B) {
    if (A.agent) return;
    let Z = new URL(A.url).protocol !== "https:";
    if (A.tlsSettings) bT.warning("TLS settings are not supported in combination with custom Proxy, certificates provided to the client will be ignored.");
    let I = A.headers.toJSON();
    if (Z) {
        if (!Q.httpProxyAgent) Q.httpProxyAgent = new erB.HttpProxyAgent(B, {
            headers: I
        });
        A.agent = Q.httpProxyAgent
    } else {
        if (!Q.httpsProxyAgent) Q.httpsProxyAgent = new trB.HttpsProxyAgent(B, {
            headers: I
        });
        A.agent = Q.httpsProxyAgent
    }
}

function ra1(A, Q) {
    if (!AoB) srB.push(...St6());
    let B = A ? rrB(A) : _t6(),
        G = {};
    return {
        name: sa1,
        async sendRequest(Z, I) {
            var Y;
            if (!Z.proxySettings && B && !jt6(Z.url, (Y = Q === null || Q === void 0 ? void 0 : Q.customNoProxyList) !== null && Y !== void 0 ? Y : srB, (Q === null || Q === void 0 ? void 0 : Q.customNoProxyList) ? void 0 : Tt6)) orB(Z, G, B);
            else if (Z.proxySettings) orB(Z, G, rrB(Z.proxySettings));
            return I(Z)
        }
    }
}
var trB, erB, Lt6 = "HTTPS_PROXY",
    Mt6 = "HTTP_PROXY",
    Ot6 = "ALL_PROXY",
    Rt6 = "NO_PROXY",
    sa1 = "proxyPolicy",
    srB, AoB = !1,
    Tt6;
var QoB = L(() => {
    pA1();
    trB = GA(vCA(), 1), erB = GA(arB(), 1), srB = [], Tt6 = new Map
});

function oa1(A) {
    return {
        name: "agentPolicy",
        sendRequest: async (Q, B) => {
            if (!Q.agent) Q.agent = A;
            return B(Q)
        }
    }
}

function ta1(A) {
    return {
        name: "tlsPolicy",
        sendRequest: async (Q, B) => {
            if (!Q.tlsSettings) Q.tlsSettings = A;
            return B(Q)
        }
    }
}

function nA1(A) {
    return typeof A.stream === "function"
}
var SoB = U((J7G, rA1) => {
    var BoB, GoB, ZoB, IoB, YoB, JoB, WoB, XoB, FoB, VoB, KoB, DoB, HoB, aA1, ea1, CoB, EoB, zoB, SZA, UoB, $oB, woB, qoB, NoB, LoB, MoB, OoB, RoB, sA1, ToB, PoB, joB;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof rA1 === "object" && typeof J7G === "object") A(B(Q, B(J7G)));
        else A(B(Q));

        function B(G, Z) {
            if (G !== Q)
                if (typeof Object.create === "function") Object.defineProperty(G, "__esModule", {
                    value: !0
                });
                else G.__esModule = !0;
            return function(I, Y) {
                return G[I] = Z ? Z(I, Y) : Y
            }
        }
    })(function(A) {
        var Q = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(I, Y) {
            I.__proto__ = Y
        } || function(I, Y) {
            for (var J in Y)
                if (Object.prototype.hasOwnProperty.call(Y, J)) I[J] = Y[J]
        };
        BoB = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, GoB = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, ZoB = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, IoB = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, YoB = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, JoB = function(I, Y, J, W, X, F) {
            function V(P) {
                if (P !== void 0 && typeof P !== "function") throw TypeError("Function expected");
                return P
            }
            var K = W.kind,
                D = K === "getter" ? "get" : K === "setter" ? "set" : "value",
                H = !Y && I ? W.static ? I : I.prototype : null,
                C = Y || (H ? Object.getOwnPropertyDescriptor(H, W.name) : {}),
                E, z = !1;
            for (var w = J.length - 1; w >= 0; w--) {
                var N = {};
                for (var q in W) N[q] = q === "access" ? {} : W[q];
                for (var q in W.access) N.access[q] = W.access[q];
                N.addInitializer = function(P) {
                    if (z) throw TypeError("Cannot add initializers after decoration has completed");
                    F.push(V(P || null))
                };
                var R = (0, J[w])(K === "accessor" ? {
                    get: C.get,
                    set: C.set
                } : C[D], N);
                if (K === "accessor") {
                    if (R === void 0) continue;
                    if (R === null || typeof R !== "object") throw TypeError("Object expected");
                    if (E = V(R.get)) C.get = E;
                    if (E = V(R.set)) C.set = E;
                    if (E = V(R.init)) X.unshift(E)
                } else if (E = V(R))
                    if (K === "field") X.unshift(E);
                    else C[D] = E
            }
            if (H) Object.defineProperty(H, W.name, C);
            z = !0
        }, WoB = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, XoB = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, FoB = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, VoB = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, KoB = function(I, Y, J, W) {
            function X(F) {
                return F instanceof J ? F : new J(function(V) {
                    V(F)
                })
            }
            return new(J || (J = Promise))(function(F, V) {
                function K(C) {
                    try {
                        H(W.next(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function D(C) {
                    try {
                        H(W.throw(C))
                    } catch (E) {
                        V(E)
                    }
                }

                function H(C) {
                    C.done ? F(C.value) : X(C.value).then(K, D)
                }
                H((W = W.apply(I, Y || [])).next())
            })
        }, DoB = function(I, Y) {
            var J = {
                    label: 0,
                    sent: function() {
                        if (F[0] & 1) throw F[1];
                        return F[1]
                    },
                    trys: [],
                    ops: []
                },
                W, X, F, V = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
            return V.next = K(0), V.throw = K(1), V.return = K(2), typeof Symbol === "function" && (V[Symbol.iterator] = function() {
                return this
            }), V;

            function K(H) {
                return function(C) {
                    return D([H, C])
                }
            }

            function D(H) {
                if (W) throw TypeError("Generator is already executing.");
                while (V && (V = 0, H[0] && (J = 0)), J) try {
                    if (W = 1, X && (F = H[0] & 2 ? X.return : H[0] ? X.throw || ((F = X.return) && F.call(X), 0) : X.next) && !(F = F.call(X, H[1])).done) return F;
                    if (X = 0, F) H = [H[0] & 2, F.value];
                    switch (H[0]) {
                        case 0:
                        case 1:
                            F = H;
                            break;
                        case 4:
                            return J.label++, {
                                value: H[1],
                                done: !1
                            };
                        case 5:
                            J.label++, X = H[1], H = [0];
                            continue;
                        case 7:
                            H = J.ops.pop(), J.trys.pop();
                            continue;
                        default:
                            if ((F = J.trys, !(F = F.length > 0 && F[F.length - 1])) && (H[0] === 6 || H[0] === 2)) {
                                J = 0;
                                continue
                            }
                            if (H[0] === 3 && (!F || H[1] > F[0] && H[1] < F[3])) {
                                J.label = H[1];
                                break
                            }
                            if (H[0] === 6 && J.label < F[1]) {
                                J.label = F[1], F = H;
                                break
                            }
                            if (F && J.label < F[2]) {
                                J.label = F[2], J.ops.push(H);
                                break
                            }
                            if (F[2]) J.ops.pop();
                            J.trys.pop();
                            continue
                    }
                    H = Y.call(I, J)
                } catch (C) {
                    H = [6, C], X = 0
                } finally {
                    W = F = 0
                }
                if (H[0] & 5) throw H[1];
                return {
                    value: H[0] ? H[1] : void 0,
                    done: !0
                }
            }
        }, HoB = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) sA1(Y, I, J)
        }, sA1 = Object.create ? function(I, Y, J, W) {
            if (W === void 0) W = J;
            var X = Object.getOwnPropertyDescriptor(Y, J);
            if (!X || ("get" in X ? !Y.__esModule : X.writable || X.configurable)) X = {
                enumerable: !0,
                get: function() {
                    return Y[J]
                }
            };
            Object.defineProperty(I, W, X)
        } : function(I, Y, J, W) {
            if (W === void 0) W = J;
            I[W] = Y[J]
        }, aA1 = function(I) {
            var Y = typeof Symbol === "function" && Symbol.iterator,
                J = Y && I[Y],
                W = 0;
            if (J) return J.call(I);
            if (I && typeof I.length === "number") return {
                next: function() {
                    if (I && W >= I.length) I = void 0;
                    return {
                        value: I && I[W++],
                        done: !I
                    }
                }
            };
            throw TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, ea1 = function(I, Y) {
            var J = typeof Symbol === "function" && I[Symbol.iterator];
            if (!J) return I;
            var W = J.call(I),
                X, F = [],
                V;
            try {
                while ((Y === void 0 || Y-- > 0) && !(X = W.next()).done) F.push(X.value)
            } catch (K) {
                V = {
                    error: K
                }
            } finally {
                try {
                    if (X && !X.done && (J = W.return)) J.call(W)
                } finally {
                    if (V) throw V.error
                }
            }
            return F
        }, CoB = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(ea1(arguments[Y]));
            return I
        }, EoB = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, zoB = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, SZA = function(I) {
            return this instanceof SZA ? (this.v = I, this) : new SZA(I)
        }, UoB = function(I, Y, J) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var W = J.apply(I, Y || []),
                X, F = [];
            return X = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), K("next"), K("throw"), K("return", V), X[Symbol.asyncIterator] = function() {
                return this
            }, X;

            function V(w) {
                return function(N) {
                    return Promise.resolve(N).then(w, E)
                }
            }

            function K(w, N) {
                if (W[w]) {
                    if (X[w] = function(q) {
                            return new Promise(function(R, P) {
                                F.push([w, q, R, P]) > 1 || D(w, q)
                            })
                        }, N) X[w] = N(X[w])
                }
            }

            function D(w, N) {
                try {
                    H(W[w](N))
                } catch (q) {
                    z(F[0][3], q)
                }
            }

            function H(w) {
                w.value instanceof SZA ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
            }

            function C(w) {
                D("next", w)
            }

            function E(w) {
                D("throw", w)
            }

            function z(w, N) {
                if (w(N), F.shift(), F.length) D(F[0][0], F[0][1])
            }
        }, $oB = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: SZA(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, woB = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof aA1 === "function" ? aA1(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
                return this
            }, J);

            function W(F) {
                J[F] = I[F] && function(V) {
                    return new Promise(function(K, D) {
                        V = I[F](V), X(K, D, V.done, V.value)
                    })
                }
            }

            function X(F, V, K, D) {
                Promise.resolve(D).then(function(H) {
                    F({
                        value: H,
                        done: K
                    })
                }, V)
            }
        }, qoB = function(I, Y) {
            if (Object.defineProperty) Object.defineProperty(I, "raw", {
                value: Y
            });
            else I.raw = Y;
            return I
        };
        var B = Object.create ? function(I, Y) {
                Object.defineProperty(I, "default", {
                    enumerable: !0,
                    value: Y
                })
            } : function(I, Y) {
                I.default = Y
            },
            G = function(I) {
                return G = Object.getOwnPropertyNames || function(Y) {
                    var J = [];
                    for (var W in Y)
                        if (Object.prototype.hasOwnProperty.call(Y, W)) J[J.length] = W;
                    return J
                }, G(I)
            };
        NoB = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") sA1(Y, I, J[W])
            }
            return B(Y, I), Y
        }, LoB = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, MoB = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, OoB = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, RoB = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, ToB = function(I, Y, J) {
            if (Y !== null && Y !== void 0) {
                if (typeof Y !== "object" && typeof Y !== "function") throw TypeError("Object expected.");
                var W, X;
                if (J) {
                    if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                    W = Y[Symbol.asyncDispose]
                }
                if (W === void 0) {
                    if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                    if (W = Y[Symbol.dispose], J) X = W
                }
                if (typeof W !== "function") throw TypeError("Object not disposable.");
                if (X) W = function() {
                    try {
                        X.call(this)
                    } catch (F) {
                        return Promise.reject(F)
                    }
                };
                I.stack.push({
                    value: Y,
                    dispose: W,
                    async: J
                })
            } else if (J) I.stack.push({
                async: !0
            });
            return Y
        };
        var Z = typeof SuppressedError === "function" ? SuppressedError : function(I, Y, J) {
            var W = Error(J);
            return W.name = "SuppressedError", W.error = I, W.suppressed = Y, W
        };
        PoB = function(I) {
            function Y(F) {
                I.error = I.hasError ? new Z(F, I.error, "An error was suppressed during disposal.") : F, I.hasError = !0
            }
            var J, W = 0;

            function X() {
                while (J = I.stack.pop()) try {
                    if (!J.async && W === 1) return W = 0, I.stack.push(J), Promise.resolve().then(X);
                    if (J.dispose) {
                        var F = J.dispose.call(J.value);
                        if (J.async) return W |= 2, Promise.resolve(F).then(X, function(V) {
                            return Y(V), X()
                        })
                    } else W |= 1
                } catch (V) {
                    Y(V)
                }