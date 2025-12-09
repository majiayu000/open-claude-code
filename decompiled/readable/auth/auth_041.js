/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.923Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 41/61
 * Lines: 212139 - 213632 (1494 lines)
 * Original file: cli.js
 */


    function xR6(A) {
        var Q = (0, xc1.convertToBuffer)(A);
        if (Q.byteLength > foA.BLOCK_SIZE) {
            var B = new boA.RawSha256;
            B.update(Q), Q = B.digest()
        }
        var G = new Uint8Array(foA.BLOCK_SIZE);
        return G.set(Q), G
    }
});
var UkB = U((vc1) => {
    Object.defineProperty(vc1, "__esModule", {
        value: !0
    });
    var vR6 = _c1();
    vR6.__exportStar(zkB(), vc1)
});
var PkB = U((TBG, TkB) => {
    var {
        defineProperty: hoA,
        getOwnPropertyDescriptor: bR6,
        getOwnPropertyNames: fR6
    } = Object, hR6 = Object.prototype.hasOwnProperty, goA = (A, Q) => hoA(A, "name", {
        value: Q,
        configurable: !0
    }), gR6 = (A, Q) => {
        for (var B in Q) hoA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, uR6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of fR6(Q))
                if (!hR6.call(A, Z) && Z !== B) hoA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = bR6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, mR6 = (A) => uR6(hoA({}, "__esModule", {
        value: !0
    }), A), $kB = {};
    gR6($kB, {
        AlgorithmId: () => LkB,
        EndpointURLScheme: () => NkB,
        FieldPosition: () => MkB,
        HttpApiKeyAuthLocation: () => qkB,
        HttpAuthLocation: () => wkB,
        IniSectionType: () => OkB,
        RequestHandlerProtocol: () => RkB,
        SMITHY_CONTEXT_KEY: () => iR6,
        getDefaultClientConfiguration: () => pR6,
        resolveDefaultRuntimeConfig: () => lR6
    });
    TkB.exports = mR6($kB);
    var wkB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(wkB || {}),
        qkB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(qkB || {}),
        NkB = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(NkB || {}),
        LkB = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(LkB || {}),
        dR6 = goA((A) => {
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
        cR6 = goA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        pR6 = goA((A) => {
            return dR6(A)
        }, "getDefaultClientConfiguration"),
        lR6 = goA((A) => {
            return cR6(A)
        }, "resolveDefaultRuntimeConfig"),
        MkB = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(MkB || {}),
        iR6 = "__smithy_context",
        OkB = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(OkB || {}),
        RkB = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(RkB || {})
});
var xkB = U((PBG, ykB) => {
    var {
        defineProperty: uoA,
        getOwnPropertyDescriptor: nR6,
        getOwnPropertyNames: aR6
    } = Object, sR6 = Object.prototype.hasOwnProperty, gp = (A, Q) => uoA(A, "name", {
        value: Q,
        configurable: !0
    }), rR6 = (A, Q) => {
        for (var B in Q) uoA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, oR6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of aR6(Q))
                if (!sR6.call(A, Z) && Z !== B) uoA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = nR6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, tR6 = (A) => oR6(uoA({}, "__esModule", {
        value: !0
    }), A), jkB = {};
    rR6(jkB, {
        Field: () => QT6,
        Fields: () => BT6,
        HttpRequest: () => GT6,
        HttpResponse: () => ZT6,
        IHttpRequest: () => SkB.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => eR6,
        isValidHostname: () => kkB,
        resolveHttpHandlerRuntimeConfig: () => AT6
    });
    ykB.exports = tR6(jkB);
    var eR6 = gp((A) => {
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
        AT6 = gp((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        SkB = PkB(),
        QT6 = class {
            static {
                gp(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = SkB.FieldPosition.HEADER,
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
        BT6 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                gp(this, "Fields")
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
        GT6 = class A {
            static {
                gp(this, "HttpRequest")
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
                if (B.query) B.query = _kB(B.query);
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

function _kB(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    gp(_kB, "cloneQuery");

var ZT6 = class {
        static {
            gp(this, "HttpResponse")
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

function kkB(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    gp(kkB, "isValidHostname")
});
var hkB = U((kBG, fkB) => {
    var {
        defineProperty: moA,
        getOwnPropertyDescriptor: IT6,
        getOwnPropertyNames: YT6
    } = Object, JT6 = Object.prototype.hasOwnProperty, bc1 = (A, Q) => moA(A, "name", {
        value: Q,
        configurable: !0
    }), WT6 = (A, Q) => {
        for (var B in Q) moA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, XT6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of YT6(Q))
                if (!JT6.call(A, Z) && Z !== B) moA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = IT6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, FT6 = (A) => XT6(moA({}, "__esModule", {
        value: !0
    }), A), vkB = {};
    WT6(vkB, {
        escapeUri: () => bkB,
        escapeUriPath: () => KT6
    });
    fkB.exports = FT6(vkB);
    var bkB = bc1((A) => encodeURIComponent(A).replace(/[!'()*]/g, VT6), "escapeUri"),
        VT6 = bc1((A) => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        KT6 = bc1((A) => A.split("/").map(bkB).join("/"), "escapeUriPath")
});
var dkB = U((yBG, mkB) => {
    var {
        defineProperty: doA,
        getOwnPropertyDescriptor: DT6,
        getOwnPropertyNames: HT6
    } = Object, CT6 = Object.prototype.hasOwnProperty, ET6 = (A, Q) => doA(A, "name", {
        value: Q,
        configurable: !0
    }), zT6 = (A, Q) => {
        for (var B in Q) doA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, UT6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of HT6(Q))
                if (!CT6.call(A, Z) && Z !== B) doA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = DT6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, $T6 = (A) => UT6(doA({}, "__esModule", {
        value: !0
    }), A), gkB = {};
    zT6(gkB, {
        buildQueryString: () => ukB
    });
    mkB.exports = $T6(gkB);
    var fc1 = hkB();

function ukB(A) {
        let Q = [];
        for (let B of Object.keys(A).sort()) {
            let G = A[B];
            if (B = (0, fc1.escapeUri)(B), Array.isArray(G))
                for (let Z = 0, I = G.length; Z < I; Z++) Q.push(`${B}=${(0,fc1.escapeUri)(G[Z])}`);
            else {
                let Z = B;
                if (G || typeof G === "string") Z += `=${(0,fc1.escapeUri)(G)}`;
                Q.push(Z)
            }
        }
        return Q.join("&")
    }
    ET6(ukB, "buildQueryString")
});
var lkB = U((ckB) => {
    Object.defineProperty(ckB, "__esModule", {
        value: !0
    });
    ckB.fromBase64 = void 0;
    var wT6 = kI(),
        qT6 = /^[A-Za-z0-9+/]*={0,2}$/,
        NT6 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!qT6.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, wT6.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    ckB.fromBase64 = NT6
});
var akB = U((ikB) => {
    Object.defineProperty(ikB, "__esModule", {
        value: !0
    });
    ikB.toBase64 = void 0;
    var LT6 = kI(),
        MT6 = L2(),
        OT6 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, MT6.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, LT6.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    ikB.toBase64 = OT6
});
var okB = U((bBG, coA) => {
    var {
        defineProperty: skB,
        getOwnPropertyDescriptor: RT6,
        getOwnPropertyNames: TT6
    } = Object, PT6 = Object.prototype.hasOwnProperty, hc1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of TT6(Q))
                if (!PT6.call(A, Z) && Z !== B) skB(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = RT6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, rkB = (A, Q, B) => (hc1(A, Q, "default"), B && hc1(B, Q, "default")), jT6 = (A) => hc1(skB({}, "__esModule", {
        value: !0
    }), A), gc1 = {};
    coA.exports = jT6(gc1);
    rkB(gc1, lkB(), coA.exports);
    rkB(gc1, akB(), coA.exports)
});
var mc1 = U((fBG, ZyB) => {
    var {
        defineProperty: loA,
        getOwnPropertyDescriptor: ST6,
        getOwnPropertyNames: _T6
    } = Object, kT6 = Object.prototype.hasOwnProperty, p_ = (A, Q) => loA(A, "name", {
        value: Q,
        configurable: !0
    }), yT6 = (A, Q) => {
        for (var B in Q) loA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, xT6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of _T6(Q))
                if (!kT6.call(A, Z) && Z !== B) loA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ST6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, vT6 = (A) => xT6(loA({}, "__esModule", {
        value: !0
    }), A), ekB = {};
    yT6(ekB, {
        FetchHttpHandler: () => fT6,
        keepAliveSupport: () => poA,
        streamCollector: () => gT6
    });
    ZyB.exports = vT6(ekB);
    var tkB = xkB(),
        bT6 = dkB();

function uc1(A, Q) {
        return new Request(A, Q)
    }
    p_(uc1, "createRequest");

function AyB(A = 0) {
        return new Promise((Q, B) => {
            if (A) setTimeout(() => {
                let G = Error(`Request did not complete within ${A} ms`);
                G.name = "TimeoutError", B(G)
            }, A)
        })
    }
    p_(AyB, "requestTimeout");

var poA = {
            supported: void 0
        },
        fT6 = class A {
            static {
                p_(this, "FetchHttpHandler")
            }
            static create(Q) {
                if (typeof Q?.handle === "function") return Q;
                return new A(Q)
            }
            constructor(Q) {
                if (typeof Q === "function") this.configProvider = Q().then((B) => B || {});
                else this.config = Q ?? {}, this.configProvider = Promise.resolve(this.config);
                if (poA.supported === void 0) poA.supported = Boolean(typeof Request < "u" && "keepalive" in uc1("https://[::1]"))
            }
            destroy() {}
            async handle(Q, {
                abortSignal: B
            } = {}) {
                if (!this.config) this.config = await this.configProvider;
                let G = this.config.requestTimeout,
                    Z = this.config.keepAlive === !0,
                    I = this.config.credentials;
                if (B?.aborted) {
                    let z = Error("Request aborted");
                    return z.name = "AbortError", Promise.reject(z)
                }
                let Y = Q.path,
                    J = (0, bT6.buildQueryString)(Q.query || {});
                if (J) Y += `?${J}`;
                if (Q.fragment) Y += `#${Q.fragment}`;
                let W = "";
                if (Q.username != null || Q.password != null) {
                    let z = Q.username ?? "",
                        w = Q.password ?? "";
                    W = `${z}:${w}@`
                }
                let {
                    port: X,
                    method: F
                } = Q, V = `${Q.protocol}//${W}${Q.hostname}${X?`:${X}`:""}${Y}`, K = F === "GET" || F === "HEAD" ? void 0 : Q.body, D = {
                    body: K,
                    headers: new Headers(Q.headers),
                    method: F,
                    credentials: I
                };
                if (this.config?.cache) D.cache = this.config.cache;
                if (K) D.duplex = "half";
                if (typeof AbortController < "u") D.signal = B;
                if (poA.supported) D.keepalive = Z;
                if (typeof this.config.requestInit === "function") Object.assign(D, this.config.requestInit(Q));
                let H = p_(() => {}, "removeSignalEventListener"),
                    C = uc1(V, D),
                    E = [fetch(C).then((z) => {
                        let w = z.headers,
                            N = {};
                        for (let R of w.entries()) N[R[0]] = R[1];
                        if (z.body == null) return z.blob().then((R) => ({
                            response: new tkB.HttpResponse({
                                headers: N,
                                reason: z.statusText,
                                statusCode: z.status,
                                body: R
                            })
                        }));
                        return {
                            response: new tkB.HttpResponse({
                                headers: N,
                                reason: z.statusText,
                                statusCode: z.status,
                                body: z.body
                            })
                        }
                    }), AyB(G)];
                if (B) E.push(new Promise((z, w) => {
                    let N = p_(() => {
                        let q = Error("Request aborted");
                        q.name = "AbortError", w(q)
                    }, "onAbort");
                    if (typeof B.addEventListener === "function") {
                        let q = B;
                        q.addEventListener("abort", N, {
                            once: !0
                        }), H = p_(() => q.removeEventListener("abort", N), "removeSignalEventListener")
                    } else B.onabort = N
                }));
                return Promise.race(E).finally(H)
            }
            updateHttpClientConfig(Q, B) {
                this.config = void 0, this.configProvider = this.configProvider.then((G) => {
                    return G[Q] = B, G
                })
            }
            httpHandlerConfigs() {
                return this.config ?? {}
            }
        },
        hT6 = okB(),
        gT6 = p_(async (A) => {
            if (typeof Blob === "function" && A instanceof Blob || A.constructor?.name === "Blob") {
                if (Blob.prototype.arrayBuffer !== void 0) return new Uint8Array(await A.arrayBuffer());
                return QyB(A)
            }
            return ByB(A)
        }, "streamCollector");

async function QyB(A) {
        let Q = await GyB(A),
            B = (0, hT6.fromBase64)(Q);
        return new Uint8Array(B)
    }
    p_(QyB, "collectBlob");

async function ByB(A) {
        let Q = [],
            B = A.getReader(),
            G = !1,
            Z = 0;
        while (!G) {
            let {
                done: J,
                value: W
            } = await B.read();
            if (W) Q.push(W), Z += W.length;
            G = J
        }
        let I = new Uint8Array(Z),
            Y = 0;
        for (let J of Q) I.set(J, Y), Y += J.length;
        return I
    }
    p_(ByB, "collectStream");

function GyB(A) {
        return new Promise((Q, B) => {
            let G = new FileReader;
            G.onloadend = () => {
                if (G.readyState !== 2) return B(Error("Reader aborted too early"));
                let Z = G.result ?? "",
                    I = Z.indexOf(","),
                    Y = I > -1 ? I + 1 : Z.length;
                Q(Z.substring(Y))
            }, G.onabort = () => B(Error("Read aborted")), G.onerror = () => B(G.error), G.readAsDataURL(A)
        })
    }
    p_(GyB, "readToBase64")
});
var dc1 = U((hBG, DyB) => {
    var {
        defineProperty: ioA,
        getOwnPropertyDescriptor: uT6,
        getOwnPropertyNames: mT6
    } = Object, dT6 = Object.prototype.hasOwnProperty, noA = (A, Q) => ioA(A, "name", {
        value: Q,
        configurable: !0
    }), cT6 = (A, Q) => {
        for (var B in Q) ioA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pT6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of mT6(Q))
                if (!dT6.call(A, Z) && Z !== B) ioA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = uT6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lT6 = (A) => pT6(ioA({}, "__esModule", {
        value: !0
    }), A), IyB = {};
    cT6(IyB, {
        AlgorithmId: () => XyB,
        EndpointURLScheme: () => WyB,
        FieldPosition: () => FyB,
        HttpApiKeyAuthLocation: () => JyB,
        HttpAuthLocation: () => YyB,
        IniSectionType: () => VyB,
        RequestHandlerProtocol: () => KyB,
        SMITHY_CONTEXT_KEY: () => rT6,
        getDefaultClientConfiguration: () => aT6,
        resolveDefaultRuntimeConfig: () => sT6
    });
    DyB.exports = lT6(IyB);
    var YyB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(YyB || {}),
        JyB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(JyB || {}),
        WyB = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(WyB || {}),
        XyB = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(XyB || {}),
        iT6 = noA((A) => {
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
                _checksumAlgorithms: Q,
                addChecksumAlgorithm(B) {
                    this._checksumAlgorithms.push(B)
                },
                checksumAlgorithms() {
                    return this._checksumAlgorithms
                }
            }
        }, "getChecksumConfiguration"),
        nT6 = noA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        aT6 = noA((A) => {
            return {
                ...iT6(A)
            }
        }, "getDefaultClientConfiguration"),
        sT6 = noA((A) => {
            return {
                ...nT6(A)
            }
        }, "resolveDefaultRuntimeConfig"),
        FyB = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(FyB || {}),
        rT6 = "__smithy_context",
        VyB = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(VyB || {}),
        KyB = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(KyB || {})
});
var cc1 = U((gBG, qyB) => {
    var {
        defineProperty: aoA,
        getOwnPropertyDescriptor: oT6,
        getOwnPropertyNames: tT6
    } = Object, eT6 = Object.prototype.hasOwnProperty, up = (A, Q) => aoA(A, "name", {
        value: Q,
        configurable: !0
    }), AP6 = (A, Q) => {
        for (var B in Q) aoA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, QP6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of tT6(Q))
                if (!eT6.call(A, Z) && Z !== B) aoA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = oT6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, BP6 = (A) => QP6(aoA({}, "__esModule", {
        value: !0
    }), A), HyB = {};
    AP6(HyB, {
        Field: () => YP6,
        Fields: () => JP6,
        HttpRequest: () => WP6,
        HttpResponse: () => XP6,
        getHttpHandlerExtensionConfiguration: () => GP6,
        isValidHostname: () => wyB,
        resolveHttpHandlerRuntimeConfig: () => ZP6
    });
    qyB.exports = BP6(HyB);
    var GP6 = up((A) => {
            let Q = A.httpHandler;
            return {
                setHttpHandler(B) {
                    Q = B
                },
                httpHandler() {
                    return Q
                },
                updateHttpClientConfig(B, G) {
                    Q.updateHttpClientConfig(B, G)
                },
                httpHandlerConfigs() {
                    return Q.httpHandlerConfigs()
                }
            }
        }, "getHttpHandlerExtensionConfiguration"),
        ZP6 = up((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        IP6 = dc1(),
        CyB = class {
            constructor({
                name: Q,
                kind: B = IP6.FieldPosition.HEADER,
                values: G = []
            }) {
                this.name = Q, this.kind = B, this.values = G
            }
            add(Q) {
                this.values.push(Q)
            }
            set(Q) {
                this.values = Q
            }
            remove(Q) {
                this.values = this.values.filter((B) => B !== Q)
            }
            toString() {
                return this.values.map((Q) => Q.includes(",") || Q.includes(" ") ? `"${Q}"` : Q).join(", ")
            }
            get() {
                return this.values
            }
        };
    up(CyB, "Field");
    var YP6 = CyB,
        EyB = class {
            constructor({
                fields: Q = [],
                encoding: B = "utf-8"
            }) {
                this.entries = {}, Q.forEach(this.setField.bind(this)), this.encoding = B
            }
            setField(Q) {
                this.entries[Q.name.toLowerCase()] = Q
            }
            getField(Q) {
                return this.entries[Q.toLowerCase()]
            }
            removeField(Q) {
                delete this.entries[Q.toLowerCase()]
            }
            getByType(Q) {
                return Object.values(this.entries).filter((B) => B.kind === Q)
            }
        };
    up(EyB, "Fields");
    var JP6 = EyB,
        zyB = class A {
            constructor(Q) {
                this.method = Q.method || "GET", this.hostname = Q.hostname || "localhost", this.port = Q.port, this.query = Q.query || {}, this.headers = Q.headers || {}, this.body = Q.body, this.protocol = Q.protocol ? Q.protocol.slice(-1) !== ":" ? `${Q.protocol}:` : Q.protocol : "https:", this.path = Q.path ? Q.path.charAt(0) !== "/" ? `/${Q.path}` : Q.path : "/", this.username = Q.username, this.password = Q.password, this.fragment = Q.fragment
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return "method" in B && "protocol" in B && "hostname" in B && "path" in B && typeof B.query === "object" && typeof B.headers === "object"
            }
            clone() {
                let Q = new A({
                    ...this,
                    headers: {
                        ...this.headers
                    }
                });
                if (Q.query) Q.query = UyB(Q.query);
                return Q
            }
        };
    up(zyB, "HttpRequest");
    var WP6 = zyB;

function UyB(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    up(UyB, "cloneQuery");
    var $yB = class {
        constructor(Q) {
            this.statusCode = Q.statusCode, this.reason = Q.reason, this.headers = Q.headers || {}, this.body = Q.body
        }
        static isInstance(Q) {
            if (!Q) return !1;
            let B = Q;
            return typeof B.statusCode === "number" && typeof B.headers === "object"
        }
    };
    up($yB, "HttpResponse");
    var XP6 = $yB;

function wyB(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    up(wyB, "isValidHostname")
});
var _yB = U((uBG, SyB) => {
    var {
        defineProperty: soA,
        getOwnPropertyDescriptor: FP6,
        getOwnPropertyNames: VP6
    } = Object, KP6 = Object.prototype.hasOwnProperty, roA = (A, Q) => soA(A, "name", {
        value: Q,
        configurable: !0
    }), DP6 = (A, Q) => {
        for (var B in Q) soA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, HP6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of VP6(Q))
                if (!KP6.call(A, Z) && Z !== B) soA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = FP6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, CP6 = (A) => HP6(soA({}, "__esModule", {
        value: !0
    }), A), NyB = {};
    DP6(NyB, {
        AlgorithmId: () => RyB,
        EndpointURLScheme: () => OyB,
        FieldPosition: () => TyB,
        HttpApiKeyAuthLocation: () => MyB,
        HttpAuthLocation: () => LyB,
        IniSectionType: () => PyB,
        RequestHandlerProtocol: () => jyB,
        SMITHY_CONTEXT_KEY: () => wP6,
        getDefaultClientConfiguration: () => UP6,
        resolveDefaultRuntimeConfig: () => $P6
    });
    SyB.exports = CP6(NyB);
    var LyB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(LyB || {}),
        MyB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(MyB || {}),
        OyB = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(OyB || {}),
        RyB = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(RyB || {}),
        EP6 = roA((A) => {
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
                _checksumAlgorithms: Q,
                addChecksumAlgorithm(B) {
                    this._checksumAlgorithms.push(B)
                },
                checksumAlgorithms() {
                    return this._checksumAlgorithms
                }
            }
        }, "getChecksumConfiguration"),
        zP6 = roA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        UP6 = roA((A) => {
            return {
                ...EP6(A)
            }
        }, "getDefaultClientConfiguration"),
        $P6 = roA((A) => {
            return {
                ...zP6(A)
            }
        }, "resolveDefaultRuntimeConfig"),
        TyB = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(TyB || {}),
        wP6 = "__smithy_context",
        PyB = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(PyB || {}),
        jyB = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(jyB || {})
});
var byB = U((mBG, vyB) => {
    var {
        defineProperty: ooA,
        getOwnPropertyDescriptor: qP6,
        getOwnPropertyNames: NP6
    } = Object, LP6 = Object.prototype.hasOwnProperty, yyB = (A, Q) => ooA(A, "name", {
        value: Q,
        configurable: !0
    }), MP6 = (A, Q) => {
        for (var B in Q) ooA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, OP6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of NP6(Q))
                if (!LP6.call(A, Z) && Z !== B) ooA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = qP6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, RP6 = (A) => OP6(ooA({}, "__esModule", {
        value: !0
    }), A), xyB = {};
    MP6(xyB, {
        getSmithyContext: () => TP6,
        normalizeProvider: () => PP6
    });
    vyB.exports = RP6(xyB);
    var kyB = _yB(),
        TP6 = yyB((A) => A[kyB.SMITHY_CONTEXT_KEY] || (A[kyB.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext"),
        PP6 = yyB((A) => {
            if (typeof A === "function") return A;
            let Q = Promise.resolve(A);
            return () => Q
        }, "normalizeProvider")
});
var pc1 = U((dBG, hyB) => {
    var {
        defineProperty: toA,
        getOwnPropertyDescriptor: jP6,
        getOwnPropertyNames: SP6
    } = Object, _P6 = Object.prototype.hasOwnProperty, kP6 = (A, Q) => toA(A, "name", {
        value: Q,
        configurable: !0
    }), yP6 = (A, Q) => {
        for (var B in Q) toA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, xP6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of SP6(Q))
                if (!_P6.call(A, Z) && Z !== B) toA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = jP6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, vP6 = (A) => xP6(toA({}, "__esModule", {
        value: !0
    }), A), fyB = {};
    yP6(fyB, {
        isArrayBuffer: () => bP6
    });
    hyB.exports = vP6(fyB);
    var bP6 = kP6((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var dyB = U((cBG, myB) => {
    var {
        defineProperty: eoA,
        getOwnPropertyDescriptor: fP6,
        getOwnPropertyNames: hP6
    } = Object, gP6 = Object.prototype.hasOwnProperty, gyB = (A, Q) => eoA(A, "name", {
        value: Q,
        configurable: !0
    }), uP6 = (A, Q) => {
        for (var B in Q) eoA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, mP6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of hP6(Q))
                if (!gP6.call(A, Z) && Z !== B) eoA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = fP6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, dP6 = (A) => mP6(eoA({}, "__esModule", {
        value: !0
    }), A), uyB = {};
    uP6(uyB, {
        fromArrayBuffer: () => pP6,
        fromString: () => lP6
    });
    myB.exports = dP6(uyB);
    var cP6 = pc1(),
        lc1 = UA("buffer"),
        pP6 = gyB((A, Q = 0, B = A.byteLength - Q) => {
            if (!(0, cP6.isArrayBuffer)(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
            return lc1.Buffer.from(A, Q, B)
        }, "fromArrayBuffer"),
        lP6 = gyB((A, Q) => {
            if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
            return Q ? lc1.Buffer.from(A, Q) : lc1.Buffer.from(A)
        }, "fromString")
});
var MwA = U((pBG, iyB) => {
    var {
        defineProperty: AtA,
        getOwnPropertyDescriptor: iP6,
        getOwnPropertyNames: nP6
    } = Object, aP6 = Object.prototype.hasOwnProperty, ic1 = (A, Q) => AtA(A, "name", {
        value: Q,
        configurable: !0
    }), sP6 = (A, Q) => {
        for (var B in Q) AtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, rP6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of nP6(Q))
                if (!aP6.call(A, Z) && Z !== B) AtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = iP6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, oP6 = (A) => rP6(AtA({}, "__esModule", {
        value: !0
    }), A), cyB = {};
    sP6(cyB, {
        fromUtf8: () => lyB,
        toUint8Array: () => tP6,
        toUtf8: () => eP6
    });
    iyB.exports = oP6(cyB);
    var pyB = dyB(),
        lyB = ic1((A) => {
            let Q = (0, pyB.fromString)(A, "utf8");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength / Uint8Array.BYTES_PER_ELEMENT)
        }, "fromUtf8"),
        tP6 = ic1((A) => {
            if (typeof A === "string") return lyB(A);
            if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
            return new Uint8Array(A)
        }, "toUint8Array"),
        eP6 = ic1((A) => {
            if (typeof A === "string") return A;
            if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
            return (0, pyB.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8")
        }, "toUtf8")
});
var eyB = U((lBG, tyB) => {
    var {
        defineProperty: QtA,
        getOwnPropertyDescriptor: Aj6,
        getOwnPropertyNames: Qj6
    } = Object, Bj6 = Object.prototype.hasOwnProperty, nyB = (A, Q) => QtA(A, "name", {
        value: Q,
        configurable: !0
    }), Gj6 = (A, Q) => {
        for (var B in Q) QtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Zj6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Qj6(Q))
                if (!Bj6.call(A, Z) && Z !== B) QtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Aj6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Ij6 = (A) => Zj6(QtA({}, "__esModule", {
        value: !0
    }), A), ayB = {};
    Gj6(ayB, {
        fromHex: () => ryB,
        toHex: () => oyB
    });
    tyB.exports = Ij6(ayB);

var syB = {},
        nc1 = {};
    for (let A = 0; A < 256; A++) {
        let Q = A.toString(16).toLowerCase();
        if (Q.length === 1) Q = `0${Q}`;
        syB[A] = Q, nc1[Q] = A
    }

function ryB(A) {
        if (A.length % 2 !== 0) throw Error("Hex encoded strings must have an even number length");
        let Q = new Uint8Array(A.length / 2);
        for (let B = 0; B < A.length; B += 2) {
            let G = A.slice(B, B + 2).toLowerCase();
            if (G in nc1) Q[B / 2] = nc1[G];
            else throw Error(`Cannot decode unrecognized sequence ${G} as hexadecimal`)
        }
        return Q
    }
    nyB(ryB, "fromHex");

function oyB(A) {
        let Q = "";
        for (let B = 0; B < A.byteLength; B++) Q += syB[A[B]];
        return Q
    }
    nyB(oyB, "toHex")
});
var GxB = U((iBG, BxB) => {
    var {
        defineProperty: BtA,
        getOwnPropertyDescriptor: Yj6,
        getOwnPropertyNames: Jj6
    } = Object, Wj6 = Object.prototype.hasOwnProperty, ac1 = (A, Q) => BtA(A, "name", {
        value: Q,
        configurable: !0
    }), Xj6 = (A, Q) => {
        for (var B in Q) BtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Fj6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Jj6(Q))
                if (!Wj6.call(A, Z) && Z !== B) BtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Yj6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Vj6 = (A) => Fj6(BtA({}, "__esModule", {
        value: !0
    }), A), AxB = {};
    Xj6(AxB, {
        escapeUri: () => QxB,
        escapeUriPath: () => Dj6
    });
    BxB.exports = Vj6(AxB);
    var QxB = ac1((A) => encodeURIComponent(A).replace(/[!'()*]/g, Kj6), "escapeUri"),
        Kj6 = ac1((A) => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        Dj6 = ac1((A) => A.split("/").map(QxB).join("/"), "escapeUriPath")
});
var LxB = U((nBG, NxB) => {
    var {
        defineProperty: JtA,
        getOwnPropertyDescriptor: Hj6,
        getOwnPropertyNames: Cj6
    } = Object, Ej6 = Object.prototype.hasOwnProperty, uX = (A, Q) => JtA(A, "name", {
        value: Q,
        configurable: !0
    }), zj6 = (A, Q) => {
        for (var B in Q) JtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Uj6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Cj6(Q))
                if (!Ej6.call(A, Z) && Z !== B) JtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Hj6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, $j6 = (A) => Uj6(JtA({}, "__esModule", {
        value: !0
    }), A), WxB = {};
    zj6(WxB, {
        SignatureV4: () => ij6,
        clearCredentialCache: () => bj6,
        createScope: () => ItA,
        getCanonicalHeaders: () => tc1,
        getCanonicalQuery: () => ExB,
        getPayloadHash: () => YtA,
        getSigningKey: () => CxB,
        moveHeadersToQuery: () => wxB,
        prepareRequest: () => Ap1
    });
    NxB.exports = $j6(WxB);
    var ZxB = byB(),
        sc1 = MwA(),
        wj6 = "X-Amz-Algorithm",
        qj6 = "X-Amz-Credential",
        XxB = "X-Amz-Date",
        Nj6 = "X-Amz-SignedHeaders",
        Lj6 = "X-Amz-Expires",
        FxB = "X-Amz-Signature",
        VxB = "X-Amz-Security-Token",
        KxB = "authorization",
        DxB = XxB.toLowerCase(),
        Mj6 = "date",
        Oj6 = [KxB, DxB, Mj6],
        Rj6 = FxB.toLowerCase(),
        oc1 = "x-amz-content-sha256",
        Tj6 = VxB.toLowerCase(),
        Pj6 = {
            authorization: !0,
            "cache-control": !0,
            connection: !0,
            expect: !0,
            from: !0,
            "keep-alive": !0,
            "max-forwards": !0,
            pragma: !0,
            referer: !0,
            te: !0,
            trailer: !0,
            "transfer-encoding": !0,
            upgrade: !0,
            "user-agent": !0,
            "x-amzn-trace-id": !0
        },
        jj6 = /^proxy-/,
        Sj6 = /^sec-/,
        rc1 = "AWS4-HMAC-SHA256",
        _j6 = "AWS4-HMAC-SHA256-PAYLOAD",
        kj6 = "UNSIGNED-PAYLOAD",
        yj6 = 50,
        HxB = "aws4_request",
        xj6 = 604800,
        mp = eyB(),
        vj6 = MwA(),
        xGA = {},
        ZtA = [],
        ItA = uX((A, Q, B) => `${A}/${Q}/${B}/${HxB}`, "createScope"),
        CxB = uX(async (A, Q, B, G, Z) => {
            let I = await IxB(A, Q.secretAccessKey, Q.accessKeyId),
                Y = `${B}:${G}:${Z}:${(0,mp.toHex)(I)}:${Q.sessionToken}`;
            if (Y in xGA) return xGA[Y];
            ZtA.push(Y);
            while (ZtA.length > yj6) delete xGA[ZtA.shift()];
            let J = `AWS4${Q.secretAccessKey}`;
            for (let W of [B, G, Z, HxB]) J = await IxB(A, J, W);
            return xGA[Y] = J
        }, "getSigningKey"),
        bj6 = uX(() => {
            ZtA.length = 0, Object.keys(xGA).forEach((A) => {
                delete xGA[A]
            })
        }, "clearCredentialCache"),
        IxB = uX((A, Q, B) => {
            let G = new A(Q);
            return G.update((0, vj6.toUint8Array)(B)), G.digest()
        }, "hmac"),
        tc1 = uX(({
            headers: A
        }, Q, B) => {
            let G = {};
            for (let Z of Object.keys(A).sort()) {
                if (A[Z] == null) continue;
                let I = Z.toLowerCase();
                if (I in Pj6 || (Q == null ? void 0 : Q.has(I)) || jj6.test(I) || Sj6.test(I)) {
                    if (!B || B && !B.has(I)) continue
                }
                G[I] = A[Z].trim().replace(/\s+/g, " ")
            }
            return G
        }, "getCanonicalHeaders"),
        OwA = GxB(),
        ExB = uX(({
            query: A = {}
        }) => {
            let Q = [],
                B = {};
            for (let G of Object.keys(A).sort()) {
                if (G.toLowerCase() === Rj6) continue;
                Q.push(G);
                let Z = A[G];
                if (typeof Z === "string") B[G] = `${(0,OwA.escapeUri)(G)}=${(0,OwA.escapeUri)(Z)}`;
                else if (Array.isArray(Z)) B[G] = Z.slice(0).reduce((I, Y) => I.concat([`${(0,OwA.escapeUri)(G)}=${(0,OwA.escapeUri)(Y)}`]), []).sort().join("&")
            }
            return Q.map((G) => B[G]).filter((G) => G).join("&")
        }, "getCanonicalQuery"),
        fj6 = pc1(),
        hj6 = MwA(),
        YtA = uX(async ({
            headers: A,
            body: Q
        }, B) => {
            for (let G of Object.keys(A))
                if (G.toLowerCase() === oc1) return A[G];
            if (Q == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
            else if (typeof Q === "string" || ArrayBuffer.isView(Q) || (0, fj6.isArrayBuffer)(Q)) {
                let G = new B;
                return G.update((0, hj6.toUint8Array)(Q)), (0, mp.toHex)(await G.digest())
            }
            return kj6
        }, "getPayloadHash"),
        YxB = MwA(),
        zxB = class {
            format(Q) {
                let B = [];
                for (let I of Object.keys(Q)) {
                    let Y = (0, YxB.fromUtf8)(I);
                    B.push(Uint8Array.from([Y.byteLength]), Y, this.formatHeaderValue(Q[I]))
                }
                let G = new Uint8Array(B.reduce((I, Y) => I + Y.byteLength, 0)),
                    Z = 0;
                for (let I of B) G.set(I, Z), Z += I.byteLength;
                return G
            }
            formatHeaderValue(Q) {
                switch (Q.type) {
                    case "boolean":
                        return Uint8Array.from([Q.value ? 0 : 1]);
                    case "byte":
                        return Uint8Array.from([2, Q.value]);
                    case "short":
                        let B = new DataView(new ArrayBuffer(3));
                        return B.setUint8(0, 3), B.setInt16(1, Q.value, !1), new Uint8Array(B.buffer);
                    case "integer":
                        let G = new DataView(new ArrayBuffer(5));
                        return G.setUint8(0, 4), G.setInt32(1, Q.value, !1), new Uint8Array(G.buffer);
                    case "long":
                        let Z = new Uint8Array(9);
                        return Z[0] = 5, Z.set(Q.value.bytes, 1), Z;
                    case "binary":
                        let I = new DataView(new ArrayBuffer(3 + Q.value.byteLength));
                        I.setUint8(0, 6), I.setUint16(1, Q.value.byteLength, !1);
                        let Y = new Uint8Array(I.buffer);
                        return Y.set(Q.value, 3), Y;
                    case "string":
                        let J = (0, YxB.fromUtf8)(Q.value),
                            W = new DataView(new ArrayBuffer(3 + J.byteLength));
                        W.setUint8(0, 7), W.setUint16(1, J.byteLength, !1);
                        let X = new Uint8Array(W.buffer);
                        return X.set(J, 3), X;
                    case "timestamp":
                        let F = new Uint8Array(9);
                        return F[0] = 8, F.set(mj6.fromNumber(Q.value.valueOf()).bytes, 1), F;
                    case "uuid":
                        if (!uj6.test(Q.value)) throw Error(`Invalid UUID received: ${Q.value}`);
                        let V = new Uint8Array(17);
                        return V[0] = 9, V.set((0, mp.fromHex)(Q.value.replace(/\-/g, "")), 1), V
                }
            }
        };
    uX(zxB, "HeaderFormatter");
    var gj6 = zxB,
        uj6 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        UxB = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`${Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) ec1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) ec1(Q);
                return parseInt((0, mp.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };
    uX(UxB, "Int64");
    var mj6 = UxB;

function ec1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    uX(ec1, "negate");
    var dj6 = uX((A, Q) => {
            A = A.toLowerCase();
            for (let B of Object.keys(Q))
                if (A === B.toLowerCase()) return !0;
            return !1
        }, "hasHeader"),
        $xB = uX(({
            headers: A,
            query: Q,
            ...B
        }) => ({
            ...B,
            headers: {
                ...A
            },
            query: Q ? cj6(Q) : void 0
        }), "cloneRequest"),
        cj6 = uX((A) => Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {}), "cloneQuery"),
        wxB = uX((A, Q = {}) => {
            var B;
            let {
                headers: G,
                query: Z = {}
            } = typeof A.clone === "function" ? A.clone() : $xB(A);
            for (let I of Object.keys(G)) {
                let Y = I.toLowerCase();
                if (Y.slice(0, 6) === "x-amz-" && !((B = Q.unhoistableHeaders) == null ? void 0 : B.has(Y))) Z[I] = G[I], delete G[I]
            }
            return {
                ...A,
                headers: G,
                query: Z
            }
        }, "moveHeadersToQuery"),
        Ap1 = uX((A) => {
            A = typeof A.clone === "function" ? A.clone() : $xB(A);
            for (let Q of Object.keys(A.headers))
                if (Oj6.indexOf(Q.toLowerCase()) > -1) delete A.headers[Q];
            return A
        }, "prepareRequest"),
        pj6 = uX((A) => lj6(A).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
        lj6 = uX((A) => {
            if (typeof A === "number") return new Date(A * 1000);
            if (typeof A === "string") {
                if (Number(A)) return new Date(Number(A) * 1000);
                return new Date(A)
            }
            return A
        }, "toDate"),
        qxB = class {
            constructor({
                applyChecksum: Q,
                credentials: B,
                region: G,
                service: Z,
                sha256: I,
                uriEscapePath: Y = !0
            }) {
                this.headerFormatter = new gj6, this.service = Z, this.sha256 = I, this.uriEscapePath = Y, this.applyChecksum = typeof Q === "boolean" ? Q : !0, this.regionProvider = (0, ZxB.normalizeProvider)(G), this.credentialProvider = (0, ZxB.normalizeProvider)(B)
            }