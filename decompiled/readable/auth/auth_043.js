/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.926Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 43/61
 * Lines: 240577 - 242076 (1500 lines)
 * Original file: cli.js
 */

    var Ni1 = Symbol("internal");

function Ei1(A, Q) {
        let B = Object.create(Li1);
        return B[Ni1] = {
            target: A,
            kind: Q,
            index: 0
        }, B
    }
    var Li1 = Object.setPrototypeOf({
        next() {
            if (!this || Object.getPrototypeOf(this) !== Li1) throw TypeError("Value of `this` is not a HeadersIterator");
            var A = this[Ni1];
            let {
                target: Q,
                kind: B,
                index: G
            } = A, Z = qi1(Q, B), I = Z.length;
            if (G >= I) return {
                value: void 0,
                done: !0
            };
            return this[Ni1].index = G + 1, {
                value: Z[G],
                done: !1
            }
        }
    }, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
    Object.defineProperty(Li1, Symbol.toStringTag, {
        value: "HeadersIterator",
        writable: !1,
        enumerable: !1,
        configurable: !0
    });

    function $i6(A) {
        let Q = Object.assign({
                __proto__: null
            }, A[RW]),
            B = GZA(A[RW], "Host");
        if (B !== void 0) Q[B] = Q[B][0];
        return Q
    }

function wi6(A) {
        let Q = new RM;
        for (let B of Object.keys(A)) {
            if (qlB.test(B)) continue;
            if (Array.isArray(A[B]))
                for (let G of A[B]) {
                    if (wi1.test(G)) continue;
                    if (Q[RW][B] === void 0) Q[RW][B] = [G];
                    else Q[RW][B].push(G)
                } else if (!wi1.test(A[B])) Q[RW][B] = [A[B]]
        }
        return Q
    }
    var op = Symbol("Response internals"),
        qi6 = ClB.STATUS_CODES;

class OM {
        constructor() {
            let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            dV.call(this, A, Q);
            let B = Q.status || 200,
                G = new RM(Q.headers);
            if (A != null && !G.has("Content-Type")) {
                let Z = $lB(A);
                if (Z) G.append("Content-Type", Z)
            }
            this[op] = {
                url: Q.url,
                status: B,
                statusText: Q.statusText || qi6[B],
                headers: G,
                counter: Q.counter
            }
        }
        get url() {
            return this[op].url || ""
        }
        get status() {
            return this[op].status
        }
        get ok() {
            return this[op].status >= 200 && this[op].status < 300
        }
        get redirected() {
            return this[op].counter > 0
        }
        get statusText() {
            return this[op].statusText
        }
        get headers() {
            return this[op].headers
        }
        clone() {
            return new OM(UlB(this), {
                url: this.url,
                status: this.status,
                statusText: this.statusText,
                headers: this.headers,
                ok: this.ok,
                redirected: this.redirected
            })
        }
    }
    dV.mixIn(OM.prototype);
    Object.defineProperties(OM.prototype, {
        url: {
            enumerable: !0
        },
        status: {
            enumerable: !0
        },
        ok: {
            enumerable: !0
        },
        redirected: {
            enumerable: !0
        },
        statusText: {
            enumerable: !0
        },
        headers: {
            enumerable: !0
        },
        clone: {
            enumerable: !0
        }
    });
    Object.defineProperty(OM.prototype, Symbol.toStringTag, {
        value: "Response",
        writable: !1,
        enumerable: !1,
        configurable: !0
    });
    var qf = Symbol("Request internals"),
        Ni6 = AA1.URL || ElB.URL,
        Li6 = AA1.parse,
        Mi6 = AA1.format;

function zi1(A) {
        if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(A)) A = new Ni6(A).toString();
        return Li6(A)
    }
    var Oi6 = "destroy" in RT.Readable.prototype;

function eeA(A) {
        return typeof A === "object" && typeof A[qf] === "object"
    }

function Ri6(A) {
        let Q = A && typeof A === "object" && Object.getPrototypeOf(A);
        return !!(Q && Q.constructor.name === "AbortSignal")
    }

class ep {
        constructor(A) {
            let Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                B;
            if (!eeA(A)) {
                if (A && A.href) B = zi1(A.href);
                else B = zi1(`${A}`);
                A = {}
            } else B = zi1(A.url);
            let G = Q.method || A.method || "GET";
            if (G = G.toUpperCase(), (Q.body != null || eeA(A) && A.body !== null) && (G === "GET" || G === "HEAD")) throw TypeError("Request with GET/HEAD method cannot have body");
            let Z = Q.body != null ? Q.body : eeA(A) && A.body !== null ? UlB(A) : null;
            dV.call(this, Z, {
                timeout: Q.timeout || A.timeout || 0,
                size: Q.size || A.size || 0
            });
            let I = new RM(Q.headers || A.headers || {});
            if (Z != null && !I.has("Content-Type")) {
                let J = $lB(Z);
                if (J) I.append("Content-Type", J)
            }
            let Y = eeA(A) ? A.signal : null;
            if ("signal" in Q) Y = Q.signal;
            if (Y != null && !Ri6(Y)) throw TypeError("Expected signal to be an instanceof AbortSignal");
            this[qf] = {
                method: G,
                redirect: Q.redirect || A.redirect || "follow",
                headers: I,
                parsedURL: B,
                signal: Y
            }, this.follow = Q.follow !== void 0 ? Q.follow : A.follow !== void 0 ? A.follow : 20, this.compress = Q.compress !== void 0 ? Q.compress : A.compress !== void 0 ? A.compress : !0, this.counter = Q.counter || A.counter || 0, this.agent = Q.agent || A.agent
        }
        get method() {
            return this[qf].method
        }
        get url() {
            return Mi6(this[qf].parsedURL)
        }
        get headers() {
            return this[qf].headers
        }
        get redirect() {
            return this[qf].redirect
        }
        get signal() {
            return this[qf].signal
        }
        clone() {
            return new ep(this)
        }
    }
    dV.mixIn(ep.prototype);
    Object.defineProperty(ep.prototype, Symbol.toStringTag, {
        value: "Request",
        writable: !1,
        enumerable: !1,
        configurable: !0
    });
    Object.defineProperties(ep.prototype, {
        method: {
            enumerable: !0
        },
        url: {
            enumerable: !0
        },
        headers: {
            enumerable: !0
        },
        redirect: {
            enumerable: !0
        },
        clone: {
            enumerable: !0
        },
        signal: {
            enumerable: !0
        }
    });

function Ti6(A) {
        let Q = A[qf].parsedURL,
            B = new RM(A[qf].headers);
        if (!B.has("Accept")) B.set("Accept", "*/*");
        if (!Q.protocol || !Q.hostname) throw TypeError("Only absolute URLs are supported");
        if (!/^https?:$/.test(Q.protocol)) throw TypeError("Only HTTP(S) protocols are supported");
        if (A.signal && A.body instanceof RT.Readable && !Oi6) throw Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
        let G = null;
        if (A.body == null && /^(POST|PUT)$/i.test(A.method)) G = "0";
        if (A.body != null) {
            let I = wlB(A);
            if (typeof I === "number") G = String(I)
        }
        if (G) B.set("Content-Length", G);
        if (!B.has("User-Agent")) B.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)");
        if (A.compress && !B.has("Accept-Encoding")) B.set("Accept-Encoding", "gzip,deflate");
        let Z = A.agent;
        if (typeof Z === "function") Z = Z(Q);
        return Object.assign({}, Q, {
            method: A.method,
            headers: $i6(B),
            agent: Z
        })
    }

function IZA(A) {
        Error.call(this, A), this.type = "aborted", this.message = A, Error.captureStackTrace(this, this.constructor)
    }
    IZA.prototype = Object.create(Error.prototype);
    IZA.prototype.constructor = IZA;
    IZA.prototype.name = "AbortError";
    var swA = AA1.URL || ElB.URL,
        HlB = RT.PassThrough,
        Pi6 = function(Q, B) {
            let G = new swA(B).hostname,
                Z = new swA(Q).hostname;
            return G === Z || G[G.length - Z.length - 1] === "." && G.endsWith(Z)
        },
        ji6 = function(Q, B) {
            let G = new swA(B).protocol,
                Z = new swA(Q).protocol;
            return G === Z
        };

function tp(A, Q) {
        if (!tp.Promise) throw Error("native promise missing, set fetch.Promise to your favorite alternative");
        return dV.Promise = tp.Promise, new tp.Promise(function(B, G) {
            let Z = new ep(A, Q),
                I = Ti6(Z),
                Y = (I.protocol === "https:" ? Ci6 : ClB).request,
                J = Z.signal,
                W = null,
                X = function() {
                    let C = new IZA("The user aborted a request.");
                    if (G(C), Z.body && Z.body instanceof RT.Readable) Ui1(Z.body, C);
                    if (!W || !W.body) return;
                    W.body.emit("error", C)
                };
            if (J && J.aborted) {
                X();
                return
            }
            let F = function() {
                    X(), D()
                },
                V = Y(I),
                K;
            if (J) J.addEventListener("abort", F);

function D() {
                if (V.abort(), J) J.removeEventListener("abort", F);
                clearTimeout(K)
            }
            if (Z.timeout) V.once("socket", function(H) {
                K = setTimeout(function() {
                    G(new wD(`network timeout at: ${Z.url}`, "request-timeout")), D()
                }, Z.timeout)
            });
            if (V.on("error", function(H) {
                    if (G(new wD(`request to ${Z.url} failed, reason: ${H.message}`, "system", H)), W && W.body) Ui1(W.body, H);
                    D()
                }), Si6(V, function(H) {
                    if (J && J.aborted) return;
                    if (W && W.body) Ui1(W.body, H)
                }), parseInt(process.version.substring(1)) < 14) V.on("socket", function(H) {
                H.addListener("close", function(C) {
                    let E = H.listenerCount("data") > 0;
                    if (W && E && !C && !(J && J.aborted)) {
                        let z = Error("Premature close");
                        z.code = "ERR_STREAM_PREMATURE_CLOSE", W.body.emit("error", z)
                    }
                })
            });
            V.on("response", function(H) {
                clearTimeout(K);
                let C = wi6(H.headers);
                if (tp.isRedirect(H.statusCode)) {
                    let q = C.get("Location"),
                        R = null;
                    try {
                        R = q === null ? null : new swA(q, Z.url).toString()
                    } catch (P) {
                        if (Z.redirect !== "manual") {
                            G(new wD(`uri requested responds with an invalid redirect URL: ${q}`, "invalid-redirect")), D();
                            return
                        }
                    }
                    switch (Z.redirect) {
                        case "error":
                            G(new wD(`uri requested responds with a redirect, redirect mode is set to error: ${Z.url}`, "no-redirect")), D();
                            return;
                        case "manual":
                            if (R !== null) try {
                                C.set("Location", R)
                            } catch (y) {
                                G(y)
                            }
                            break;
                        case "follow":
                            if (R === null) break;
                            if (Z.counter >= Z.follow) {
                                G(new wD(`maximum redirect reached at: ${Z.url}`, "max-redirect")), D();
                                return
                            }
                            let P = {
                                headers: new RM(Z.headers),
                                follow: Z.follow,
                                counter: Z.counter + 1,
                                agent: Z.agent,
                                compress: Z.compress,
                                method: Z.method,
                                body: Z.body,
                                signal: Z.signal,
                                timeout: Z.timeout,
                                size: Z.size
                            };
                            if (!Pi6(Z.url, R) || !ji6(Z.url, R))
                                for (let y of ["authorization", "www-authenticate", "cookie", "cookie2"]) P.headers.delete(y);
                            if (H.statusCode !== 303 && Z.body && wlB(Z) === null) {
                                G(new wD("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), D();
                                return
                            }
                            if (H.statusCode === 303 || (H.statusCode === 301 || H.statusCode === 302) && Z.method === "POST") P.method = "GET", P.body = void 0, P.headers.delete("content-length");
                            B(tp(new ep(R, P))), D();
                            return
                    }
                }
                H.once("end", function() {
                    if (J) J.removeEventListener("abort", F)
                });
                let E = H.pipe(new HlB),
                    z = {
                        url: Z.url,
                        status: H.statusCode,
                        statusText: H.statusMessage,
                        headers: C,
                        size: Z.size,
                        timeout: Z.timeout,
                        counter: Z.counter
                    },
                    w = C.get("Content-Encoding");
                if (!Z.compress || Z.method === "HEAD" || w === null || H.statusCode === 204 || H.statusCode === 304) {
                    W = new OM(E, z), B(W);
                    return
                }
                let N = {
                    flush: Le.Z_SYNC_FLUSH,
                    finishFlush: Le.Z_SYNC_FLUSH
                };
                if (w == "gzip" || w == "x-gzip") {
                    E = E.pipe(Le.createGunzip(N)), W = new OM(E, z), B(W);
                    return
                }
                if (w == "deflate" || w == "x-deflate") {
                    let q = H.pipe(new HlB);
                    q.once("data", function(R) {
                        if ((R[0] & 15) === 8) E = E.pipe(Le.createInflate());
                        else E = E.pipe(Le.createInflateRaw());
                        W = new OM(E, z), B(W)
                    }), q.on("end", function() {
                        if (!W) W = new OM(E, z), B(W)
                    });
                    return
                }
                if (w == "br" && typeof Le.createBrotliDecompress === "function") {
                    E = E.pipe(Le.createBrotliDecompress()), W = new OM(E, z), B(W);
                    return
                }
                W = new OM(E, z), B(W)
            }), Ui6(V, Z)
        })
    }

function Si6(A, Q) {
        let B;
        A.on("socket", function(G) {
            B = G
        }), A.on("response", function(G) {
            let Z = G.headers;
            if (Z["transfer-encoding"] === "chunked" && !Z["content-length"]) G.once("close", function(I) {
                if (B && B.listenerCount("data") > 0 && !I) {
                    let J = Error("Premature close");
                    J.code = "ERR_STREAM_PREMATURE_CLOSE", Q(J)
                }
            })
        })
    }

function Ui1(A, Q) {
        if (A.destroy) A.destroy(Q);
        else A.emit("error", Q), A.end()
    }
    tp.isRedirect = function(A) {
        return A === 301 || A === 302 || A === 303 || A === 307 || A === 308
    };
    tp.Promise = global.Promise;
    NlB.exports = TT = tp;
    Object.defineProperty(TT, "__esModule", {
        value: !0
    });
    TT.default = TT;
    TT.Headers = RM;
    TT.Request = ep;
    TT.Response = OM;
    TT.FetchError = wD;
    TT.AbortError = IZA
});
var MlB = U((M8G, LlB) => {
    var Ak = (A) => A !== null && typeof A === "object" && typeof A.pipe === "function";
    Ak.writable = (A) => Ak(A) && A.writable !== !1 && typeof A._write === "function" && typeof A._writableState === "object";
    Ak.readable = (A) => Ak(A) && A.readable !== !1 && typeof A._read === "function" && typeof A._readableState === "object";
    Ak.duplex = (A) => Ak.writable(A) && Ak.readable(A);
    Ak.transform = (A) => Ak.duplex(A) && typeof A._transform === "function";
    LlB.exports = Ak
});
var OlB = U((O8G, _i6) => {
    _i6.exports = {
        name: "gaxios",
        version: "6.7.1",
        description: "A simple common HTTP client specifically for Google APIs and services.",
        main: "build/src/index.js",
        types: "build/src/index.d.ts",
        files: ["build/src"],
        scripts: {
            lint: "gts check",
            test: "c8 mocha build/test",
            "presystem-test": "npm run compile",
            "system-test": "mocha build/system-test --timeout 80000",
            compile: "tsc -p .",
            fix: "gts fix",
            prepare: "npm run compile",
            pretest: "npm run compile",
            webpack: "webpack",
            "prebrowser-test": "npm run compile",
            "browser-test": "node build/browser-test/browser-test-runner.js",
            docs: "compodoc src/",
            "docs-test": "linkinator docs",
            "predocs-test": "npm run docs",
            "samples-test": "cd samples/ && npm link ../ && npm test && cd ../",
            prelint: "cd samples; npm link ../; npm install",
            clean: "gts clean",
            precompile: "gts clean"
        },
        repository: "googleapis/gaxios",
        keywords: ["google"],
        engines: {
            node: ">=14"
        },
        author: "Google, LLC",
        license: "Apache-2.0",
        devDependencies: {
            "@babel/plugin-proposal-private-methods": "^7.18.6",
            "@compodoc/compodoc": "1.1.19",
            "@types/cors": "^2.8.6",
            "@types/express": "^4.16.1",
            "@types/extend": "^3.0.1",
            "@types/mocha": "^9.0.0",
            "@types/multiparty": "0.0.36",
            "@types/mv": "^2.1.0",
            "@types/ncp": "^2.0.1",
            "@types/node": "^20.0.0",
            "@types/node-fetch": "^2.5.7",
            "@types/sinon": "^17.0.0",
            "@types/tmp": "0.2.6",
            "@types/uuid": "^10.0.0",
            "abort-controller": "^3.0.0",
            assert: "^2.0.0",
            browserify: "^17.0.0",
            c8: "^8.0.0",
            cheerio: "1.0.0-rc.10",
            cors: "^2.8.5",
            execa: "^5.0.0",
            express: "^4.16.4",
            "form-data": "^4.0.0",
            gts: "^5.0.0",
            "is-docker": "^2.0.0",
            karma: "^6.0.0",
            "karma-chrome-launcher": "^3.0.0",
            "karma-coverage": "^2.0.0",
            "karma-firefox-launcher": "^2.0.0",
            "karma-mocha": "^2.0.0",
            "karma-remap-coverage": "^0.1.5",
            "karma-sourcemap-loader": "^0.4.0",
            "karma-webpack": "5.0.0",
            linkinator: "^3.0.0",
            mocha: "^8.0.0",
            multiparty: "^4.2.1",
            mv: "^2.1.1",
            ncp: "^2.0.0",
            nock: "^13.0.0",
            "null-loader": "^4.0.0",
            puppeteer: "^19.0.0",
            sinon: "^18.0.0",
            "stream-browserify": "^3.0.0",
            tmp: "0.2.3",
            "ts-loader": "^8.0.0",
            typescript: "^5.1.6",
            webpack: "^5.35.0",
            "webpack-cli": "^4.0.0"
        },
        dependencies: {
            extend: "^3.0.2",
            "https-proxy-agent": "^7.0.1",
            "is-stream": "^2.0.0",
            "node-fetch": "^2.6.9",
            uuid: "^9.0.1"
        }
    }
});
var PlB = U((RlB) => {
    Object.defineProperty(RlB, "__esModule", {
        value: !0
    });
    RlB.pkg = void 0;
    RlB.pkg = OlB()
});
var Ti1 = U((TM) => {
    var ki6 = TM && TM.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        },
        jlB;
    Object.defineProperty(TM, "__esModule", {
        value: !0
    });
    TM.GaxiosError = TM.GAXIOS_ERROR_SYMBOL = void 0;
    TM.defaultErrorRedactor = _lB;
    var yi6 = UA("url"),
        Oi1 = PlB(),
        SlB = ki6(al1());
    TM.GAXIOS_ERROR_SYMBOL = Symbol.for(`${Oi1.pkg.name}-gaxios-error`);

class Ri1 extends Error {
        static[(jlB = TM.GAXIOS_ERROR_SYMBOL, Symbol.hasInstance)](A) {
            if (A && typeof A === "object" && TM.GAXIOS_ERROR_SYMBOL in A && A[TM.GAXIOS_ERROR_SYMBOL] === Oi1.pkg.version) return !0;
            return Function.prototype[Symbol.hasInstance].call(Ri1, A)
        }
        constructor(A, Q, B, G) {
            var Z;
            super(A);
            if (this.config = Q, this.response = B, this.error = G, this[jlB] = Oi1.pkg.version, this.config = (0, SlB.default)(!0, {}, Q), this.response) this.response.config = (0, SlB.default)(!0, {}, this.response.config);
            if (this.response) {
                try {
                    this.response.data = xi6(this.config.responseType, (Z = this.response) === null || Z === void 0 ? void 0 : Z.data)
                } catch (I) {}
                this.status = this.response.status
            }
            if (G && "code" in G && G.code) this.code = G.code;
            if (Q.errorRedactor) Q.errorRedactor({
                config: this.config,
                response: this.response
            })
        }
    }
    TM.GaxiosError = Ri1;

function xi6(A, Q) {
        switch (A) {
            case "stream":
                return Q;
            case "json":
                return JSON.parse(JSON.stringify(Q));
            case "arraybuffer":
                return JSON.parse(Buffer.from(Q).toString("utf8"));
            case "blob":
                return JSON.parse(Q.text());
            default:
                return Q
        }
    }

function _lB(A) {
        function B(I) {
            if (!I) return;
            for (let Y of Object.keys(I)) {
                if (/^authentication$/i.test(Y)) I[Y] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                if (/^authorization$/i.test(Y)) I[Y] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                if (/secret/i.test(Y)) I[Y] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>."
            }
        }

function G(I, Y) {
            if (typeof I === "object" && I !== null && typeof I[Y] === "string") {
                let J = I[Y];
                if (/grant_type=/i.test(J) || /assertion=/i.test(J) || /secret/i.test(J)) I[Y] = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>."
            }
        }

function Z(I) {
            if (typeof I === "object" && I !== null) {
                if ("grant_type" in I) I.grant_type = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                if ("assertion" in I) I.assertion = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
                if ("client_secret" in I) I.client_secret = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>."
            }
        }
        if (A.config) {
            B(A.config.headers), G(A.config, "data"), Z(A.config.data), G(A.config, "body"), Z(A.config.body);
            try {
                let I = new yi6.URL("", A.config.url);
                if (I.searchParams.has("token")) I.searchParams.set("token", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
                if (I.searchParams.has("client_secret")) I.searchParams.set("client_secret", "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.");
                A.config.url = I.toString()
            } catch (I) {}
        }
        if (A.response) _lB({
            config: A.response.config
        }), B(A.response.headers), G(A.response, "data"), Z(A.response.data);
        return A
    }
});
var xlB = U((ylB) => {
    Object.defineProperty(ylB, "__esModule", {
        value: !0
    });
    ylB.getRetryConfig = vi6;

async function vi6(A) {
        let Q = klB(A);
        if (!A || !A.config || !Q && !A.config.retry) return {
            shouldRetry: !1
        };
        Q = Q || {}, Q.currentRetryAttempt = Q.currentRetryAttempt || 0, Q.retry = Q.retry === void 0 || Q.retry === null ? 3 : Q.retry, Q.httpMethodsToRetry = Q.httpMethodsToRetry || ["GET", "HEAD", "PUT", "OPTIONS", "DELETE"], Q.noResponseRetries = Q.noResponseRetries === void 0 || Q.noResponseRetries === null ? 2 : Q.noResponseRetries, Q.retryDelayMultiplier = Q.retryDelayMultiplier ? Q.retryDelayMultiplier : 2, Q.timeOfFirstRequest = Q.timeOfFirstRequest ? Q.timeOfFirstRequest : Date.now(), Q.totalTimeout = Q.totalTimeout ? Q.totalTimeout : Number.MAX_SAFE_INTEGER, Q.maxRetryDelay = Q.maxRetryDelay ? Q.maxRetryDelay : Number.MAX_SAFE_INTEGER;
        let B = [
            [100, 199],
            [408, 408],
            [429, 429],
            [500, 599]
        ];
        if (Q.statusCodesToRetry = Q.statusCodesToRetry || B, A.config.retryConfig = Q, !await (Q.shouldRetry || bi6)(A)) return {
            shouldRetry: !1,
            config: A.config
        };
        let Z = fi6(Q);
        A.config.retryConfig.currentRetryAttempt += 1;
        let I = Q.retryBackoff ? Q.retryBackoff(A, Z) : new Promise((Y) => {
            setTimeout(Y, Z)
        });
        if (Q.onRetryAttempt) Q.onRetryAttempt(A);
        return await I, {
            shouldRetry: !0,
            config: A.config
        }
    }

function bi6(A) {
        var Q;
        let B = klB(A);
        if (A.name === "AbortError" || ((Q = A.error) === null || Q === void 0 ? void 0 : Q.name) === "AbortError") return !1;
        if (!B || B.retry === 0) return !1;
        if (!A.response && (B.currentRetryAttempt || 0) >= B.noResponseRetries) return !1;
        if (!A.config.method || B.httpMethodsToRetry.indexOf(A.config.method.toUpperCase()) < 0) return !1;
        if (A.response && A.response.status) {
            let G = !1;
            for (let [Z, I] of B.statusCodesToRetry) {
                let Y = A.response.status;
                if (Y >= Z && Y <= I) {
                    G = !0;
                    break
                }
            }
            if (!G) return !1
        }
        if (B.currentRetryAttempt = B.currentRetryAttempt || 0, B.currentRetryAttempt >= B.retry) return !1;
        return !0
    }

function klB(A) {
        if (A && A.config && A.config.retryConfig) return A.config.retryConfig;
        return
    }

function fi6(A) {
        var Q;
        let G = (A.currentRetryAttempt ? 0 : (Q = A.retryDelay) !== null && Q !== void 0 ? Q : 100) + (Math.pow(A.retryDelayMultiplier, A.currentRetryAttempt) - 1) / 2 * 1000,
            Z = A.totalTimeout - (Date.now() - A.timeOfFirstRequest);
        return Math.min(G, Z, A.maxRetryDelay)
    }
});
var Pi1 = U((blB) => {
    Object.defineProperty(blB, "__esModule", {
        value: !0
    });
    blB.GaxiosInterceptorManager = void 0;

class vlB extends Set {}
    blB.GaxiosInterceptorManager = vlB
});
var alB = U((cH) => {
    var gi6 = cH && cH.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        ui6 = cH && cH.__setModuleDefault || (Object.create ? function(A, Q) {
            Object.defineProperty(A, "default", {
                enumerable: !0,
                value: Q
            })
        } : function(A, Q) {
            A.default = Q
        }),
        mi6 = cH && cH.__importStar || function(A) {
            if (A && A.__esModule) return A;

var Q = {};
            if (A != null) {
                for (var B in A)
                    if (B !== "default" && Object.prototype.hasOwnProperty.call(A, B)) gi6(Q, A, B)
            }
            return ui6(Q, A), Q
        },
        Oe = cH && cH.__classPrivateFieldGet || function(A, Q, B, G) {
            if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
            if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
        },
        di6 = cH && cH.__classPrivateFieldSet || function(A, Q, B, G, Z) {
            if (G === "m") throw TypeError("Private method is not writable");
            if (G === "a" && !Z) throw TypeError("Private accessor was defined without a setter");
            if (typeof Q === "function" ? A !== Q || !Z : !Q.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return G === "a" ? Z.call(A, B) : Z ? Z.value = B : Q.set(A, B), B
        },
        GA1 = cH && cH.__importDefault || function(A) {
            return A && A.__esModule ? A : {
                default: A
            }
        },
        JZA, Me, hlB, plB, llB, ilB, QA1, glB;
    Object.defineProperty(cH, "__esModule", {
        value: !0
    });
    cH.Gaxios = void 0;
    var ci6 = GA1(al1()),
        pi6 = UA("https"),
        li6 = GA1(Mi1()),
        ii6 = GA1(UA("querystring")),
        ni6 = GA1(MlB()),
        ulB = UA("url"),
        BA1 = Ti1(),
        ai6 = xlB(),
        mlB = UA("stream"),
        si6 = UDA(),
        dlB = Pi1(),
        ri6 = ti6() ? window.fetch : li6.default;

function oi6() {
        return typeof window < "u" && !!window
    }

function ti6() {
        return oi6() && !!window.fetch
    }

function ei6() {
        return typeof Buffer < "u"
    }

function clB(A, Q) {
        return !!nlB(A, Q)
    }

function nlB(A, Q) {
        Q = Q.toLowerCase();
        for (let B of Object.keys((A === null || A === void 0 ? void 0 : A.headers) || {}))
            if (Q === B.toLowerCase()) return A.headers[B];
        return
    }

class ji1 {
        constructor(A) {
            JZA.add(this), this.agentCache = new Map, this.defaults = A || {}, this.interceptors = {
                request: new dlB.GaxiosInterceptorManager,
                response: new dlB.GaxiosInterceptorManager
            }
        }
        async request(A = {}) {
            return A = await Oe(this, JZA, "m", ilB).call(this, A), A = await Oe(this, JZA, "m", plB).call(this, A), Oe(this, JZA, "m", llB).call(this, this._request(A))
        }
        async _defaultAdapter(A) {
            let B = await (A.fetchImplementation || ri6)(A.url, A),
                G = await this.getResponseData(A, B);
            return this.translateResponse(A, B, G)
        }
        async _request(A = {}) {
            var Q;
            try {
                let B;
                if (A.adapter) B = await A.adapter(A, this._defaultAdapter.bind(this));
                else B = await this._defaultAdapter(A);
                if (!A.validateStatus(B.status)) {
                    if (A.responseType === "stream") {
                        let G = "";
                        await new Promise((Z) => {
                            (B === null || B === void 0 ? void 0 : B.data).on("data", (I) => {
                                G += I
                            }), (B === null || B === void 0 ? void 0 : B.data).on("end", Z)
                        }), B.data = G
                    }
                    throw new BA1.GaxiosError(`Request failed with status code ${B.status}`, A, B)
                }
                return B
            } catch (B) {
                let G = B instanceof BA1.GaxiosError ? B : new BA1.GaxiosError(B.message, A, void 0, B),
                    {
                        shouldRetry: Z,
                        config: I
                    } = await (0, ai6.getRetryConfig)(G);
                if (Z && I) return G.config.retryConfig.currentRetryAttempt = I.retryConfig.currentRetryAttempt, A.retryConfig = (Q = G.config) === null || Q === void 0 ? void 0 : Q.retryConfig, this._request(A);
                throw G
            }
        }
        async getResponseData(A, Q) {
            switch (A.responseType) {
                case "stream":
                    return Q.body;
                case "json": {
                    let B = await Q.text();
                    try {
                        B = JSON.parse(B)
                    } catch (G) {}
                    return B
                }
                case "arraybuffer":
                    return Q.arrayBuffer();
                case "blob":
                    return Q.blob();
                case "text":
                    return Q.text();
                default:
                    return this.getResponseDataFromContentType(Q)
            }
        }
        validateStatus(A) {
            return A >= 200 && A < 300
        }
        paramsSerializer(A) {
            return ii6.default.stringify(A)
        }
        translateResponse(A, Q, B) {
            let G = {};
            return Q.headers.forEach((Z, I) => {
                G[I] = Z
            }), {
                config: A,
                data: B,
                headers: G,
                status: Q.status,
                statusText: Q.statusText,
                request: {
                    responseURL: Q.url
                }
            }
        }
        async getResponseDataFromContentType(A) {
            let Q = A.headers.get("Content-Type");
            if (Q === null) return A.text();
            if (Q = Q.toLowerCase(), Q.includes("application/json")) {
                let B = await A.text();
                try {
                    B = JSON.parse(B)
                } catch (G) {}
                return B
            } else if (Q.match(/^text\//)) return A.text();
            else return A.blob()
        }
        async * getMultipartRequest(A, Q) {
            let B = `--${Q}--`;
            for (let G of A) {
                let Z = G.headers["Content-Type"] || "application/octet-stream";
                if (yield `--${Q}\r
Content-Type: ${Z}\r
\r
`, typeof G.content === "string") yield G.content;
                else yield* G.content;
                yield `\r
`
            }
            yield B
        }
    }
    cH.Gaxios = ji1;
    Me = ji1, JZA = new WeakSet, hlB = function(Q, B = []) {
        var G, Z;
        let I = new ulB.URL(Q),
            Y = [...B],
            J = ((Z = (G = process.env.NO_PROXY) !== null && G !== void 0 ? G : process.env.no_proxy) === null || Z === void 0 ? void 0 : Z.split(",")) || [];
        for (let W of J) Y.push(W.trim());
        for (let W of Y)
            if (W instanceof RegExp) {
                if (W.test(I.toString())) return !1
            } else if (W instanceof ulB.URL) {
            if (W.origin === I.origin) return !1
        } else if (W.startsWith("*.") || W.startsWith(".")) {
            let X = W.replace(/^\*\./, ".");
            if (I.hostname.endsWith(X)) return !1
        } else if (W === I.origin || W === I.hostname || W === I.href) return !1;
        return !0
    }, plB = async function(Q) {
        let B = Promise.resolve(Q);
        for (let G of this.interceptors.request.values())
            if (G) B = B.then(G.resolved, G.rejected);
        return B
    }, llB = async function(Q) {
        let B = Promise.resolve(Q);
        for (let G of this.interceptors.response.values())
            if (G) B = B.then(G.resolved, G.rejected);
        return B
    }, ilB = async function(Q) {
        var B, G, Z, I;
        let Y = (0, ci6.default)(!0, {}, this.defaults, Q);
        if (!Y.url) throw Error("URL is required.");
        let J = Y.baseUrl || Y.baseURL;
        if (J) Y.url = J.toString() + Y.url;
        if (Y.paramsSerializer = Y.paramsSerializer || this.paramsSerializer, Y.params && Object.keys(Y.params).length > 0) {
            let F = Y.paramsSerializer(Y.params);
            if (F.startsWith("?")) F = F.slice(1);
            let V = Y.url.toString().includes("?") ? "&" : "?";
            Y.url = Y.url + V + F
        }
        if (typeof Q.maxContentLength === "number") Y.size = Q.maxContentLength;
        if (typeof Q.maxRedirects === "number") Y.follow = Q.maxRedirects;
        if (Y.headers = Y.headers || {}, Y.multipart === void 0 && Y.data) {
            let F = typeof FormData > "u" ? !1 : (Y === null || Y === void 0 ? void 0 : Y.data) instanceof FormData;
            if (ni6.default.readable(Y.data)) Y.body = Y.data;
            else if (ei6() && Buffer.isBuffer(Y.data)) {
                if (Y.body = Y.data, !clB(Y, "Content-Type")) Y.headers["Content-Type"] = "application/json"
            } else if (typeof Y.data === "object") {
                if (!F)
                    if (nlB(Y, "content-type") === "application/x-www-form-urlencoded") Y.body = Y.paramsSerializer(Y.data);
                    else {
                        if (!clB(Y, "Content-Type")) Y.headers["Content-Type"] = "application/json";
                        Y.body = JSON.stringify(Y.data)
                    }
            } else Y.body = Y.data
        } else if (Y.multipart && Y.multipart.length > 0) {
            let F = (0, si6.v4)();
            Y.headers["Content-Type"] = `multipart/related; boundary=${F}`;
            let V = new mlB.PassThrough;
            Y.body = V, (0, mlB.pipeline)(this.getMultipartRequest(Y.multipart, F), V, () => {})
        }
        if (Y.validateStatus = Y.validateStatus || this.validateStatus, Y.responseType = Y.responseType || "unknown", !Y.headers.Accept && Y.responseType === "json") Y.headers.Accept = "application/json";
        Y.method = Y.method || "GET";
        let W = Y.proxy || ((B = process === null || process === void 0 ? void 0 : process.env) === null || B === void 0 ? void 0 : B.HTTPS_PROXY) || ((G = process === null || process === void 0 ? void 0 : process.env) === null || G === void 0 ? void 0 : G.https_proxy) || ((Z = process === null || process === void 0 ? void 0 : process.env) === null || Z === void 0 ? void 0 : Z.HTTP_PROXY) || ((I = process === null || process === void 0 ? void 0 : process.env) === null || I === void 0 ? void 0 : I.http_proxy),
            X = Oe(this, JZA, "m", hlB).call(this, Y.url, Y.noProxy);
        if (Y.agent);
        else if (W && X) {
            let F = await Oe(Me, Me, "m", glB).call(Me);
            if (this.agentCache.has(W)) Y.agent = this.agentCache.get(W);
            else Y.agent = new F(W, {
                cert: Y.cert,
                key: Y.key
            }), this.agentCache.set(W, Y.agent)
        } else if (Y.cert && Y.key)
            if (this.agentCache.has(Y.key)) Y.agent = this.agentCache.get(Y.key);
            else Y.agent = new pi6.Agent({
                cert: Y.cert,
                key: Y.key
            }), this.agentCache.set(Y.key, Y.agent);
        if (typeof Y.errorRedactor !== "function" && Y.errorRedactor !== !1) Y.errorRedactor = BA1.defaultErrorRedactor;
        return Y
    }, glB = async function() {
        return di6(this, Me, Oe(this, Me, "f", QA1) || (await Promise.resolve().then(() => mi6(vCA()))).HttpsProxyAgent, "f", QA1), Oe(this, Me, "f", QA1)
    };
    QA1 = {
        value: void 0
    }
});
var PT = U((wE) => {
    var An6 = wE && wE.__createBinding || (Object.create ? function(A, Q, B, G) {
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
        Qn6 = wE && wE.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) An6(Q, A, B)
        };
    Object.defineProperty(wE, "__esModule", {
        value: !0
    });
    wE.instance = wE.Gaxios = wE.GaxiosError = void 0;
    wE.request = Gn6;
    var slB = alB();
    Object.defineProperty(wE, "Gaxios", {
        enumerable: !0,
        get: function() {
            return slB.Gaxios
        }
    });
    var Bn6 = Ti1();
    Object.defineProperty(wE, "GaxiosError", {
        enumerable: !0,
        get: function() {
            return Bn6.GaxiosError
        }
    });
    Qn6(Pi1(), wE);
    wE.instance = new slB.Gaxios;

async function Gn6(A) {
        return wE.instance.request(A)
    }
});
var Si1 = U((rlB, ZA1) => {
    (function(A) {
        var Q, B = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            G = Math.ceil,
            Z = Math.floor,
            I = "[BigNumber Error] ",
            Y = I + "Number primitive has more than 15 significant digits: ",
            J = 100000000000000,
            W = 14,
            X = 9007199254740991,
            F = [1, 10, 100, 1000, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 10000000000, 100000000000, 1000000000000, 10000000000000],
            V = 1e7,
            K = 1e9;

function D(R) {
            var P, y, v, x = NA.prototype = {
                    constructor: NA,
                    toString: null,
                    valueOf: null
                },
                p = new NA(1),
                u = 20,
                o = 4,
                l = -7,
                k = 21,
                d = -1e7,
                QA = 1e7,
                IA = !1,
                HA = 1,
                wA = 0,
                KA = {
                    prefix: "",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    groupSeparator: ",",
                    decimalSeparator: ".",
                    fractionGroupSize: 0,
                    fractionGroupSeparator: " ",
                    suffix: ""
                },
                SA = "0123456789abcdefghijklmnopqrstuvwxyz",
                sA = !0;

function NA(WA, XA) {
                var zA, $A, LA, TA, eA, aA, I1, w1, PA = this;
                if (!(PA instanceof NA)) return new NA(WA, XA);
                if (XA == null) {
                    if (WA && WA._isBigNumber === !0) {
                        if (PA.s = WA.s, !WA.c || WA.e > QA) PA.c = PA.e = null;
                        else if (WA.e < d) PA.c = [PA.e = 0];
                        else PA.e = WA.e, PA.c = WA.c.slice();
                        return
                    }
                    if ((aA = typeof WA == "number") && WA * 0 == 0) {
                        if (PA.s = 1 / WA < 0 ? (WA = -WA, -1) : 1, WA === ~~WA) {
                            for (TA = 0, eA = WA; eA >= 10; eA /= 10, TA++);
                            if (TA > QA) PA.c = PA.e = null;
                            else PA.e = TA, PA.c = [WA];
                            return
                        }
                        w1 = String(WA)
                    } else {
                        if (!B.test(w1 = String(WA))) return v(PA, w1, aA);
                        PA.s = w1.charCodeAt(0) == 45 ? (w1 = w1.slice(1), -1) : 1
                    }
                    if ((TA = w1.indexOf(".")) > -1) w1 = w1.replace(".", "");
                    if ((eA = w1.search(/e/i)) > 0) {
                        if (TA < 0) TA = eA;
                        TA += +w1.slice(eA + 1), w1 = w1.substring(0, eA)
                    } else if (TA < 0) TA = w1.length
                } else {
                    if (z(XA, 2, SA.length, "Base"), XA == 10 && sA) return PA = new NA(WA), rA(PA, u + PA.e + 1, o);
                    if (w1 = String(WA), aA = typeof WA == "number") {
                        if (WA * 0 != 0) return v(PA, w1, aA, XA);
                        if (PA.s = 1 / WA < 0 ? (w1 = w1.slice(1), -1) : 1, NA.DEBUG && w1.replace(/^0\.0*|\./, "").length > 15) throw Error(Y + WA)
                    } else PA.s = w1.charCodeAt(0) === 45 ? (w1 = w1.slice(1), -1) : 1;
                    zA = SA.slice(0, XA), TA = eA = 0;
                    for (I1 = w1.length; eA < I1; eA++)
                        if (zA.indexOf($A = w1.charAt(eA)) < 0) {
                            if ($A == ".") {
                                if (eA > TA) {
                                    TA = I1;
                                    continue
                                }
                            } else if (!LA) {
                                if (w1 == w1.toUpperCase() && (w1 = w1.toLowerCase()) || w1 == w1.toLowerCase() && (w1 = w1.toUpperCase())) {
                                    LA = !0, eA = -1, TA = 0;
                                    continue
                                }
                            }
                            return v(PA, String(WA), aA, XA)
                        } if (aA = !1, w1 = y(w1, XA, 10, PA.s), (TA = w1.indexOf(".")) > -1) w1 = w1.replace(".", "");
                    else TA = w1.length
                }
                for (eA = 0; w1.charCodeAt(eA) === 48; eA++);
                for (I1 = w1.length; w1.charCodeAt(--I1) === 48;);
                if (w1 = w1.slice(eA, ++I1)) {
                    if (I1 -= eA, aA && NA.DEBUG && I1 > 15 && (WA > X || WA !== Z(WA))) throw Error(Y + PA.s * WA);
                    if ((TA = TA - eA - 1) > QA) PA.c = PA.e = null;
                    else if (TA < d) PA.c = [PA.e = 0];
                    else {
                        if (PA.e = TA, PA.c = [], eA = (TA + 1) % W, TA < 0) eA += W;
                        if (eA < I1) {
                            if (eA) PA.c.push(+w1.slice(0, eA));
                            for (I1 -= W; eA < I1;) PA.c.push(+w1.slice(eA, eA += W));
                            eA = W - (w1 = w1.slice(eA)).length
                        } else eA -= I1;
                        for (; eA--; w1 += "0");
                        PA.c.push(+w1)
                    }
                } else PA.c = [PA.e = 0]
            }
            NA.clone = D, NA.ROUND_UP = 0, NA.ROUND_DOWN = 1, NA.ROUND_CEIL = 2, NA.ROUND_FLOOR = 3, NA.ROUND_HALF_UP = 4, NA.ROUND_HALF_DOWN = 5, NA.ROUND_HALF_EVEN = 6, NA.ROUND_HALF_CEIL = 7, NA.ROUND_HALF_FLOOR = 8, NA.EUCLID = 9, NA.config = NA.set = function(WA) {
                var XA, zA;
                if (WA != null)
                    if (typeof WA == "object") {
                        if (WA.hasOwnProperty(XA = "DECIMAL_PLACES")) zA = WA[XA], z(zA, 0, K, XA), u = zA;
                        if (WA.hasOwnProperty(XA = "ROUNDING_MODE")) zA = WA[XA], z(zA, 0, 8, XA), o = zA;
                        if (WA.hasOwnProperty(XA = "EXPONENTIAL_AT"))
                            if (zA = WA[XA], zA && zA.pop) z(zA[0], -K, 0, XA), z(zA[1], 0, K, XA), l = zA[0], k = zA[1];
                            else z(zA, -K, K, XA), l = -(k = zA < 0 ? -zA : zA);
                        if (WA.hasOwnProperty(XA = "RANGE"))
                            if (zA = WA[XA], zA && zA.pop) z(zA[0], -K, -1, XA), z(zA[1], 1, K, XA), d = zA[0], QA = zA[1];
                            else if (z(zA, -K, K, XA), zA) d = -(QA = zA < 0 ? -zA : zA);
                        else throw Error(I + XA + " cannot be zero: " + zA);
                        if (WA.hasOwnProperty(XA = "CRYPTO"))
                            if (zA = WA[XA], zA === !!zA)
                                if (zA)
                                    if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) IA = zA;
                                    else throw IA = !zA, Error(I + "crypto unavailable");
                        else IA = zA;
                        else throw Error(I + XA + " not true or false: " + zA);
                        if (WA.hasOwnProperty(XA = "MODULO_MODE")) zA = WA[XA], z(zA, 0, 9, XA), HA = zA;
                        if (WA.hasOwnProperty(XA = "POW_PRECISION")) zA = WA[XA], z(zA, 0, K, XA), wA = zA;
                        if (WA.hasOwnProperty(XA = "FORMAT"))
                            if (zA = WA[XA], typeof zA == "object") KA = zA;
                            else throw Error(I + XA + " not an object: " + zA);
                        if (WA.hasOwnProperty(XA = "ALPHABET"))
                            if (zA = WA[XA], typeof zA == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(zA)) sA = zA.slice(0, 10) == "0123456789", SA = zA;
                            else throw Error(I + XA + " invalid: " + zA)
                    } else throw Error(I + "Object expected: " + WA);
                return {
                    DECIMAL_PLACES: u,
                    ROUNDING_MODE: o,
                    EXPONENTIAL_AT: [l, k],
                    RANGE: [d, QA],
                    CRYPTO: IA,
                    MODULO_MODE: HA,
                    POW_PRECISION: wA,
                    FORMAT: KA,
                    ALPHABET: SA
                }
            }, NA.isBigNumber = function(WA) {
                if (!WA || WA._isBigNumber !== !0) return !1;
                if (!NA.DEBUG) return !0;
                var XA, zA, $A = WA.c,
                    LA = WA.e,
                    TA = WA.s;
                A: if ({}.toString.call($A) == "[object Array]") {
                    if ((TA === 1 || TA === -1) && LA >= -K && LA <= K && LA === Z(LA)) {
                        if ($A[0] === 0) {
                            if (LA === 0 && $A.length === 1) return !0;
                            break A
                        }
                        if (XA = (LA + 1) % W, XA < 1) XA += W;
                        if (String($A[0]).length == XA) {
                            for (XA = 0; XA < $A.length; XA++)
                                if (zA = $A[XA], zA < 0 || zA >= J || zA !== Z(zA)) break A;
                            if (zA !== 0) return !0
                        }
                    }
                } else if ($A === null && LA === null && (TA === null || TA === 1 || TA === -1)) return !0;
                throw Error(I + "Invalid BigNumber: " + WA)
            }, NA.maximum = NA.max = function() {
                return DA(arguments, -1)
            }, NA.minimum = NA.min = function() {
                return DA(arguments, 1)
            }, NA.random = function() {
                var WA = 9007199254740992,
                    XA = Math.random() * WA & 2097151 ? function() {
                        return Z(Math.random() * WA)
                    } : function() {
                        return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
                    };
                return function(zA) {
                    var $A, LA, TA, eA, aA, I1 = 0,
                        w1 = [],
                        PA = new NA(p);
                    if (zA == null) zA = u;
                    else z(zA, 0, K);
                    if (eA = G(zA / W), IA)
                        if (crypto.getRandomValues) {
                            $A = crypto.getRandomValues(new Uint32Array(eA *= 2));
                            for (; I1 < eA;)
                                if (aA = $A[I1] * 131072 + ($A[I1 + 1] >>> 11), aA >= 9000000000000000) LA = crypto.getRandomValues(new Uint32Array(2)), $A[I1] = LA[0], $A[I1 + 1] = LA[1];
                                else w1.push(aA % 100000000000000), I1 += 2;
                            I1 = eA / 2
                        } else if (crypto.randomBytes) {
                        $A = crypto.randomBytes(eA *= 7);
                        for (; I1 < eA;)
                            if (aA = ($A[I1] & 31) * 281474976710656 + $A[I1 + 1] * 1099511627776 + $A[I1 + 2] * 4294967296 + $A[I1 + 3] * 16777216 + ($A[I1 + 4] << 16) + ($A[I1 + 5] << 8) + $A[I1 + 6], aA >= 9000000000000000) crypto.randomBytes(7).copy($A, I1);
                            else w1.push(aA % 100000000000000), I1 += 7;
                        I1 = eA / 7
                    } else throw IA = !1, Error(I + "crypto unavailable");
                    if (!IA) {
                        for (; I1 < eA;)
                            if (aA = XA(), aA < 9000000000000000) w1[I1++] = aA % 100000000000000
                    }
                    if (eA = w1[--I1], zA %= W, eA && zA) aA = F[W - zA], w1[I1] = Z(eA / aA) * aA;
                    for (; w1[I1] === 0; w1.pop(), I1--);
                    if (I1 < 0) w1 = [TA = 0];
                    else {
                        for (TA = -1; w1[0] === 0; w1.splice(0, 1), TA -= W);
                        for (I1 = 1, aA = w1[0]; aA >= 10; aA /= 10, I1++);
                        if (I1 < W) TA -= W - I1
                    }
                    return PA.e = TA, PA.c = w1, PA
                }
            }(), NA.sum = function() {
                var WA = 1,
                    XA = arguments,
                    zA = new NA(XA[0]);
                for (; WA < XA.length;) zA = zA.plus(XA[WA++]);
                return zA
            }, y = function() {
                var WA = "0123456789";

function XA(zA, $A, LA, TA) {
                    var eA, aA = [0],
                        I1, w1 = 0,
                        PA = zA.length;
                    for (; w1 < PA;) {
                        for (I1 = aA.length; I1--; aA[I1] *= $A);
                        aA[0] += TA.indexOf(zA.charAt(w1++));
                        for (eA = 0; eA < aA.length; eA++)
                            if (aA[eA] > LA - 1) {
                                if (aA[eA + 1] == null) aA[eA + 1] = 0;
                                aA[eA + 1] += aA[eA] / LA | 0, aA[eA] %= LA
                            }
                    }
                    return aA.reverse()
                }
                return function(zA, $A, LA, TA, eA) {
                    var aA, I1, w1, PA, B1, Q0, b1, Y0, x0 = zA.indexOf("."),
                        u0 = u,
                        k1 = o;
                    if (x0 >= 0) PA = wA, wA = 0, zA = zA.replace(".", ""), Y0 = new NA($A), Q0 = Y0.pow(zA.length - x0), wA = PA, Y0.c = XA(q(C(Q0.c), Q0.e, "0"), 10, LA, WA), Y0.e = Y0.c.length;
                    b1 = XA(zA, $A, LA, eA ? (aA = SA, WA) : (aA = WA, SA)), w1 = PA = b1.length;
                    for (; b1[--PA] == 0; b1.pop());
                    if (!b1[0]) return aA.charAt(0);
                    if (x0 < 0) --w1;
                    else Q0.c = b1, Q0.e = w1, Q0.s = TA, Q0 = P(Q0, Y0, u0, k1, LA), b1 = Q0.c, B1 = Q0.r, w1 = Q0.e;
                    if (I1 = w1 + u0 + 1, x0 = b1[I1], PA = LA / 2, B1 = B1 || I1 < 0 || b1[I1 + 1] != null, B1 = k1 < 4 ? (x0 != null || B1) && (k1 == 0 || k1 == (Q0.s < 0 ? 3 : 2)) : x0 > PA || x0 == PA && (k1 == 4 || B1 || k1 == 6 && b1[I1 - 1] & 1 || k1 == (Q0.s < 0 ? 8 : 7)), I1 < 1 || !b1[0]) zA = B1 ? q(aA.charAt(1), -u0, aA.charAt(0)) : aA.charAt(0);
                    else {
                        if (b1.length = I1, B1) {
                            for (--LA; ++b1[--I1] > LA;)
                                if (b1[I1] = 0, !I1) ++w1, b1 = [1].concat(b1)
                        }
                        for (PA = b1.length; !b1[--PA];);
                        for (x0 = 0, zA = ""; x0 <= PA; zA += aA.charAt(b1[x0++]));
                        zA = q(zA, w1, aA.charAt(0))
                    }
                    return zA
                }
            }(), P = function() {
                function WA($A, LA, TA) {
                    var eA, aA, I1, w1, PA = 0,
                        B1 = $A.length,
                        Q0 = LA % V,
                        b1 = LA / V | 0;
                    for ($A = $A.slice(); B1--;) I1 = $A[B1] % V, w1 = $A[B1] / V | 0, eA = b1 * I1 + w1 * Q0, aA = Q0 * I1 + eA % V * V + PA, PA = (aA / TA | 0) + (eA / V | 0) + b1 * w1, $A[B1] = aA % TA;
                    if (PA) $A = [PA].concat($A);
                    return $A
                }

function XA($A, LA, TA, eA) {
                    var aA, I1;
                    if (TA != eA) I1 = TA > eA ? 1 : -1;
                    else
                        for (aA = I1 = 0; aA < TA; aA++)
                            if ($A[aA] != LA[aA]) {
                                I1 = $A[aA] > LA[aA] ? 1 : -1;
                                break
                            } return I1
                }

function zA($A, LA, TA, eA) {
                    var aA = 0;
                    for (; TA--;) $A[TA] -= aA, aA = $A[TA] < LA[TA] ? 1 : 0, $A[TA] = aA * eA + $A[TA] - LA[TA];
                    for (; !$A[0] && $A.length > 1; $A.splice(0, 1));
                }
                return function($A, LA, TA, eA, aA) {
                    var I1, w1, PA, B1, Q0, b1, Y0, x0, u0, k1, T0, fQ, F1, R1, N1, Z0, J0, s1 = $A.s == LA.s ? 1 : -1,
                        p0 = $A.c,
                        HQ = LA.c;
                    if (!p0 || !p0[0] || !HQ || !HQ[0]) return new NA(!$A.s || !LA.s || (p0 ? HQ && p0[0] == HQ[0] : !HQ) ? NaN : p0 && p0[0] == 0 || !HQ ? s1 * 0 : s1 / 0);
                    if (x0 = new NA(s1), u0 = x0.c = [], w1 = $A.e - LA.e, s1 = TA + w1 + 1, !aA) aA = J, w1 = H($A.e / W) - H(LA.e / W), s1 = s1 / W | 0;
                    for (PA = 0; HQ[PA] == (p0[PA] || 0); PA++);
                    if (HQ[PA] > (p0[PA] || 0)) w1--;
                    if (s1 < 0) u0.push(1), B1 = !0;
                    else {
                        if (R1 = p0.length, Z0 = HQ.length, PA = 0, s1 += 2, Q0 = Z(aA / (HQ[0] + 1)), Q0 > 1) HQ = WA(HQ, Q0, aA), p0 = WA(p0, Q0, aA), Z0 = HQ.length, R1 = p0.length;
                        F1 = Z0, k1 = p0.slice(0, Z0), T0 = k1.length;
                        for (; T0 < Z0; k1[T0++] = 0);
                        if (J0 = HQ.slice(), J0 = [0].concat(J0), N1 = HQ[0], HQ[1] >= aA / 2) N1++;
                        do {
                            if (Q0 = 0, I1 = XA(HQ, k1, Z0, T0), I1 < 0) {
                                if (fQ = k1[0], Z0 != T0) fQ = fQ * aA + (k1[1] || 0);
                                if (Q0 = Z(fQ / N1), Q0 > 1) {
                                    if (Q0 >= aA) Q0 = aA - 1;
                                    b1 = WA(HQ, Q0, aA), Y0 = b1.length, T0 = k1.length;
                                    while (XA(b1, k1, Y0, T0) == 1) Q0--, zA(b1, Z0 < Y0 ? J0 : HQ, Y0, aA), Y0 = b1.length, I1 = 1
                                } else {
                                    if (Q0 == 0) I1 = Q0 = 1;
                                    b1 = HQ.slice(), Y0 = b1.length
                                }
                                if (Y0 < T0) b1 = [0].concat(b1);
                                if (zA(k1, b1, T0, aA), T0 = k1.length, I1 == -1)
                                    while (XA(HQ, k1, Z0, T0) < 1) Q0++, zA(k1, Z0 < T0 ? J0 : HQ, T0, aA), T0 = k1.length
                            } else if (I1 === 0) Q0++, k1 = [0];
                            if (u0[PA++] = Q0, k1[0]) k1[T0++] = p0[F1] || 0;
                            else k1 = [p0[F1]], T0 = 1
                        } while ((F1++ < R1 || k1[0] != null) && s1--);
                        if (B1 = k1[0] != null, !u0[0]) u0.splice(0, 1)
                    }
                    if (aA == J) {
                        for (PA = 1, s1 = u0[0]; s1 >= 10; s1 /= 10, PA++);
                        rA(x0, TA + (x0.e = PA + w1 * W - 1) + 1, eA, B1)
                    } else x0.e = w1, x0.r = +B1;
                    return x0
                }
            }();

function qA(WA, XA, zA, $A) {
                var LA, TA, eA, aA, I1;
                if (zA == null) zA = o;
                else z(zA, 0, 8);
                if (!WA.c) return WA.toString();
                if (LA = WA.c[0], eA = WA.e, XA == null) I1 = C(WA.c), I1 = $A == 1 || $A == 2 && (eA <= l || eA >= k) ? N(I1, eA) : q(I1, eA, "0");
                else if (WA = rA(new NA(WA), XA, zA), TA = WA.e, I1 = C(WA.c), aA = I1.length, $A == 1 || $A == 2 && (XA <= TA || TA <= l)) {
                    for (; aA < XA; I1 += "0", aA++);
                    I1 = N(I1, TA)
                } else if (XA -= eA, I1 = q(I1, TA, "0"), TA + 1 > aA) {
                    if (--XA > 0)
                        for (I1 += "."; XA--; I1 += "0");
                } else if (XA += TA - aA, XA > 0) {
                    if (TA + 1 == aA) I1 += ".";
                    for (; XA--; I1 += "0");
                }
                return WA.s < 0 && LA ? "-" + I1 : I1
            }

function DA(WA, XA) {
                var zA, $A, LA = 1,
                    TA = new NA(WA[0]);
                for (; LA < WA.length; LA++)
                    if ($A = new NA(WA[LA]), !$A.s || (zA = E(TA, $A)) === XA || zA === 0 && TA.s === XA) TA = $A;
                return TA
            }

function yA(WA, XA, zA) {
                var $A = 1,
                    LA = XA.length;
                for (; !XA[--LA]; XA.pop());
                for (LA = XA[0]; LA >= 10; LA /= 10, $A++);
                if ((zA = $A + zA * W - 1) > QA) WA.c = WA.e = null;
                else if (zA < d) WA.c = [WA.e = 0];
                else WA.e = zA, WA.c = XA;
                return WA
            }
            v = function() {
                var WA = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                    XA = /^([^.]+)\.$/,
                    zA = /^\.([^.]+)$/,
                    $A = /^-?(Infinity|NaN)$/,
                    LA = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                return function(TA, eA, aA, I1) {
                    var w1, PA = aA ? eA : eA.replace(LA, "");
                    if ($A.test(PA)) TA.s = isNaN(PA) ? null : PA < 0 ? -1 : 1;
                    else {
                        if (!aA) {
                            if (PA = PA.replace(WA, function(B1, Q0, b1) {
                                    return w1 = (b1 = b1.toLowerCase()) == "x" ? 16 : b1 == "b" ? 2 : 8, !I1 || I1 == w1 ? Q0 : B1
                                }), I1) w1 = I1, PA = PA.replace(XA, "$1").replace(zA, "0.$1");
                            if (eA != PA) return new NA(PA, w1)
                        }
                        if (NA.DEBUG) throw Error(I + "Not a" + (I1 ? " base " + I1 : "") + " number: " + eA);
                        TA.s = null
                    }
                    TA.c = TA.e = null
                }
            }();

function rA(WA, XA, zA, $A) {
                var LA, TA, eA, aA, I1, w1, PA, B1 = WA.c,
                    Q0 = F;
                if (B1) {
                    A: {
                        for (LA = 1, aA = B1[0]; aA >= 10; aA /= 10, LA++);
                        if (TA = XA - LA, TA < 0) TA += W,
                        eA = XA,
                        I1 = B1[w1 = 0],
                        PA = Z(I1 / Q0[LA - eA - 1] % 10);
                        else if (w1 = G((TA + 1) / W), w1 >= B1.length)
                            if ($A) {
                                for (; B1.length <= w1; B1.push(0));
                                I1 = PA = 0, LA = 1, TA %= W, eA = TA - W + 1
                            } else break A;
                        else {
                            I1 = aA = B1[w1];
                            for (LA = 1; aA >= 10; aA /= 10, LA++);
                            TA %= W, eA = TA - W + LA, PA = eA < 0 ? 0 : Z(I1 / Q0[LA - eA - 1] % 10)
                        }
                        if ($A = $A || XA < 0 || B1[w1 + 1] != null || (eA < 0 ? I1 : I1 % Q0[LA - eA - 1]), $A = zA < 4 ? (PA || $A) && (zA == 0 || zA == (WA.s < 0 ? 3 : 2)) : PA > 5 || PA == 5 && (zA == 4 || $A || zA == 6 && (TA > 0 ? eA > 0 ? I1 / Q0[LA - eA] : 0 : B1[w1 - 1]) % 10 & 1 || zA == (WA.s < 0 ? 8 : 7)), XA < 1 || !B1[0]) {
                            if (B1.length = 0, $A) XA -= WA.e + 1, B1[0] = Q0[(W - XA % W) % W], WA.e = -XA || 0;
                            else B1[0] = WA.e = 0;
                            return WA
                        }
                        if (TA == 0) B1.length = w1,
                        aA = 1,
                        w1--;
                        else B1.length = w1 + 1,
                        aA = Q0[W - TA],
                        B1[w1] = eA > 0 ? Z(I1 / Q0[LA - eA] % Q0[eA]) * aA : 0;
                        if ($A)
                            for (;;)
                                if (w1 == 0) {
                                    for (TA = 1, eA = B1[0]; eA >= 10; eA /= 10, TA++);