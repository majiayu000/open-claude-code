/**
 * Claude Code Decompiled
 * Category: git
 * File: 3/34
 * Lines: 58307 - 59806 (1500 lines)
 * Original file: cli.js
 */

        }), A.on("end", () => {
            if (J !== -1) {
                let W = (0, Fv.flush)(Y, J);
                if ((0, Fv.sizeOf)(W) > 0) G.push(W)
            }
            G.push(null)
        }), G
    }
});
var Os0 = U((Ls0) => {
    Object.defineProperty(Ls0, "__esModule", {
        value: !0
    });
    Ls0.getAwsChunkedEncodingStream = void 0;
    var $J4 = UA("stream"),
        wJ4 = (A, Q) => {
            let {
                base64Encoder: B,
                bodyLengthChecker: G,
                checksumAlgorithmFn: Z,
                checksumLocationName: I,
                streamHasher: Y
            } = Q, J = B !== void 0 && Z !== void 0 && I !== void 0 && Y !== void 0, W = J ? Y(Z, A) : void 0, X = new $J4.Readable({
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
    Ls0.getAwsChunkedEncodingStream = wJ4
});
var Ts0 = U((Rs0) => {
    Object.defineProperty(Rs0, "__esModule", {
        value: !0
    });
    Rs0.headStream = qJ4;
    async function qJ4(A, Q) {
        var B;
        let G = 0,
            Z = [],
            I = A.getReader(),
            Y = !1;
        while (!Y) {
            let {
                done: X,
                value: F
            } = await I.read();
            if (F) Z.push(F), G += (B = F === null || F === void 0 ? void 0 : F.byteLength) !== null && B !== void 0 ? B : 0;
            if (G >= Q) break;
            Y = X
        }
        I.releaseLock();
        let J = new Uint8Array(Math.min(Q, G)),
            W = 0;
        for (let X of Z) {
            if (X.byteLength > J.byteLength - W) {
                J.set(X.subarray(0, J.byteLength - W), W);
                break
            } else J.set(X, W);
            W += X.length
        }
        return J
    }
});
var _s0 = U((js0) => {
    Object.defineProperty(js0, "__esModule", {
        value: !0
    });
    js0.headStream = void 0;
    var LJ4 = UA("stream"),
        MJ4 = Ts0(),
        OJ4 = hm(),
        RJ4 = (A, Q) => {
            if ((0, OJ4.isReadableStream)(A)) return (0, MJ4.headStream)(A, Q);
            return new Promise((B, G) => {
                let Z = new Ps0;
                Z.limit = Q, A.pipe(Z), A.on("error", (I) => {
                    Z.end(), G(I)
                }), Z.on("error", G), Z.on("finish", function() {
                    let I = new Uint8Array(Buffer.concat(this.buffers));
                    B(I)
                })
            })
        };
    js0.headStream = RJ4;
    class Ps0 extends LJ4.Writable {
        constructor() {
            super(...arguments);
            this.buffers = [], this.limit = 1 / 0, this.bytesBuffered = 0
        }
        _write(A, Q, B) {
            var G;
            if (this.buffers.push(A), this.bytesBuffered += (G = A.byteLength) !== null && G !== void 0 ? G : 0, this.bytesBuffered >= this.limit) {
                let Z = this.bytesBuffered - this.limit,
                    I = this.buffers[this.buffers.length - 1];
                this.buffers[this.buffers.length - 1] = I.subarray(0, I.byteLength - Z), this.emit("finish")
            }
            B()
        }
    }
});
var ms0 = U((CY7, us0) => {
    var {
        defineProperty: DbA,
        getOwnPropertyDescriptor: TJ4,
        getOwnPropertyNames: PJ4
    } = Object, jJ4 = Object.prototype.hasOwnProperty, HbA = (A, Q) => DbA(A, "name", {
        value: Q,
        configurable: !0
    }), SJ4 = (A, Q) => {
        for (var B in Q) DbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, _J4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of PJ4(Q))
                if (!jJ4.call(A, Z) && Z !== B) DbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = TJ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, kJ4 = (A) => _J4(DbA({}, "__esModule", {
        value: !0
    }), A), ks0 = {};
    SJ4(ks0, {
        AlgorithmId: () => bs0,
        EndpointURLScheme: () => vs0,
        FieldPosition: () => fs0,
        HttpApiKeyAuthLocation: () => xs0,
        HttpAuthLocation: () => ys0,
        IniSectionType: () => hs0,
        RequestHandlerProtocol: () => gs0,
        SMITHY_CONTEXT_KEY: () => fJ4,
        getDefaultClientConfiguration: () => vJ4,
        resolveDefaultRuntimeConfig: () => bJ4
    });
    us0.exports = kJ4(ks0);
    var ys0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(ys0 || {}),
        xs0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(xs0 || {}),
        vs0 = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(vs0 || {}),
        bs0 = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(bs0 || {}),
        yJ4 = HbA((A) => {
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
        xJ4 = HbA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        vJ4 = HbA((A) => {
            return yJ4(A)
        }, "getDefaultClientConfiguration"),
        bJ4 = HbA((A) => {
            return xJ4(A)
        }, "resolveDefaultRuntimeConfig"),
        fs0 = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(fs0 || {}),
        fJ4 = "__smithy_context",
        hs0 = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(hs0 || {}),
        gs0 = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(gs0 || {})
});
var ns0 = U((EY7, is0) => {
    var {
        defineProperty: CbA,
        getOwnPropertyDescriptor: hJ4,
        getOwnPropertyNames: gJ4
    } = Object, uJ4 = Object.prototype.hasOwnProperty, gm = (A, Q) => CbA(A, "name", {
        value: Q,
        configurable: !0
    }), mJ4 = (A, Q) => {
        for (var B in Q) CbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, dJ4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of gJ4(Q))
                if (!uJ4.call(A, Z) && Z !== B) CbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = hJ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, cJ4 = (A) => dJ4(CbA({}, "__esModule", {
        value: !0
    }), A), ds0 = {};
    mJ4(ds0, {
        Field: () => iJ4,
        Fields: () => nJ4,
        HttpRequest: () => aJ4,
        HttpResponse: () => sJ4,
        IHttpRequest: () => cs0.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => pJ4,
        isValidHostname: () => ls0,
        resolveHttpHandlerRuntimeConfig: () => lJ4
    });
    is0.exports = cJ4(ds0);
    var pJ4 = gm((A) => {
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
        lJ4 = gm((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        cs0 = ms0(),
        iJ4 = class {
            static {
                gm(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = cs0.FieldPosition.HEADER,
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
        nJ4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                gm(this, "Fields")
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
        aJ4 = class A {
            static {
                gm(this, "HttpRequest")
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
                if (B.query) B.query = ps0(B.query);
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

    function ps0(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    gm(ps0, "cloneQuery");
    var sJ4 = class {
        static {
            gm(this, "HttpResponse")
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

    function ls0(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    gm(ls0, "isValidHostname")
});
var os0 = U((wY7, rs0) => {
    var {
        defineProperty: EbA,
        getOwnPropertyDescriptor: rJ4,
        getOwnPropertyNames: oJ4
    } = Object, tJ4 = Object.prototype.hasOwnProperty, RE1 = (A, Q) => EbA(A, "name", {
        value: Q,
        configurable: !0
    }), eJ4 = (A, Q) => {
        for (var B in Q) EbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, AW4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of oJ4(Q))
                if (!tJ4.call(A, Z) && Z !== B) EbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = rJ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, QW4 = (A) => AW4(EbA({}, "__esModule", {
        value: !0
    }), A), as0 = {};
    eJ4(as0, {
        escapeUri: () => ss0,
        escapeUriPath: () => GW4
    });
    rs0.exports = QW4(as0);
    var ss0 = RE1((A) => encodeURIComponent(A).replace(/[!'()*]/g, BW4), "escapeUri"),
        BW4 = RE1((A) => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        GW4 = RE1((A) => A.split("/").map(ss0).join("/"), "escapeUriPath")
});
var Qr0 = U((qY7, Ar0) => {
    var {
        defineProperty: zbA,
        getOwnPropertyDescriptor: ZW4,
        getOwnPropertyNames: IW4
    } = Object, YW4 = Object.prototype.hasOwnProperty, JW4 = (A, Q) => zbA(A, "name", {
        value: Q,
        configurable: !0
    }), WW4 = (A, Q) => {
        for (var B in Q) zbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, XW4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of IW4(Q))
                if (!YW4.call(A, Z) && Z !== B) zbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ZW4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, FW4 = (A) => XW4(zbA({}, "__esModule", {
        value: !0
    }), A), ts0 = {};
    WW4(ts0, {
        buildQueryString: () => es0
    });
    Ar0.exports = FW4(ts0);
    var TE1 = os0();

    function es0(A) {
        let Q = [];
        for (let B of Object.keys(A).sort()) {
            let G = A[B];
            if (B = (0, TE1.escapeUri)(B), Array.isArray(G))
                for (let Z = 0, I = G.length; Z < I; Z++) Q.push(`${B}=${(0,TE1.escapeUri)(G[Z])}`);
            else {
                let Z = B;
                if (G || typeof G === "string") Z += `=${(0,TE1.escapeUri)(G)}`;
                Q.push(Z)
            }
        }
        return Q.join("&")
    }
    JW4(es0, "buildQueryString")
});
var oG = U((NY7, Cr0) => {
    var {
        create: VW4,
        defineProperty: aKA,
        getOwnPropertyDescriptor: KW4,
        getOwnPropertyNames: DW4,
        getPrototypeOf: HW4
    } = Object, CW4 = Object.prototype.hasOwnProperty, rG = (A, Q) => aKA(A, "name", {
        value: Q,
        configurable: !0
    }), EW4 = (A, Q) => {
        for (var B in Q) aKA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Yr0 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of DW4(Q))
                if (!CW4.call(A, Z) && Z !== B) aKA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = KW4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, zW4 = (A, Q, B) => (B = A != null ? VW4(HW4(A)) : {}, Yr0(Q || !A || !A.__esModule ? aKA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), UW4 = (A) => Yr0(aKA({}, "__esModule", {
        value: !0
    }), A), Jr0 = {};
    EW4(Jr0, {
        DEFAULT_REQUEST_TIMEOUT: () => Dr0,
        NodeHttp2Handler: () => PW4,
        NodeHttpHandler: () => MW4,
        streamCollector: () => SW4
    });
    Cr0.exports = UW4(Jr0);
    var Wr0 = ns0(),
        Xr0 = Qr0(),
        PE1 = UA("http"),
        jE1 = UA("https"),
        $W4 = ["ECONNRESET", "EPIPE", "ETIMEDOUT"],
        Fr0 = rG((A) => {
            let Q = {};
            for (let B of Object.keys(A)) {
                let G = A[B];
                Q[B] = Array.isArray(G) ? G.join(",") : G
            }
            return Q
        }, "getTransformedHeaders"),
        mz = {
            setTimeout: (A, Q) => setTimeout(A, Q),
            clearTimeout: (A) => clearTimeout(A)
        },
        Br0 = 1000,
        wW4 = rG((A, Q, B = 0) => {
            if (!B) return -1;
            let G = rG((Z) => {
                let I = mz.setTimeout(() => {
                        A.destroy(), Q(Object.assign(Error(`Socket timed out without establishing a connection within ${B} ms`), {
                            name: "TimeoutError"
                        }))
                    }, B - Z),
                    Y = rG((J) => {
                        if (J?.connecting) J.on("connect", () => {
                            mz.clearTimeout(I)
                        });
                        else mz.clearTimeout(I)
                    }, "doWithSocket");
                if (A.socket) Y(A.socket);
                else A.on("socket", Y)
            }, "registerTimeout");
            if (B < 2000) return G(0), 0;
            return mz.setTimeout(G.bind(null, Br0), Br0)
        }, "setConnectionTimeout"),
        qW4 = 3000,
        NW4 = rG((A, {
            keepAlive: Q,
            keepAliveMsecs: B
        }, G = qW4) => {
            if (Q !== !0) return -1;
            let Z = rG(() => {
                if (A.socket) A.socket.setKeepAlive(Q, B || 0);
                else A.on("socket", (I) => {
                    I.setKeepAlive(Q, B || 0)
                })
            }, "registerListener");
            if (G === 0) return Z(), 0;
            return mz.setTimeout(Z, G)
        }, "setSocketKeepAlive"),
        Gr0 = 3000,
        LW4 = rG((A, Q, B = Dr0) => {
            let G = rG((Z) => {
                let I = B - Z,
                    Y = rG(() => {
                        A.destroy(), Q(Object.assign(Error(`Connection timed out after ${B} ms`), {
                            name: "TimeoutError"
                        }))
                    }, "onTimeout");
                if (A.socket) A.socket.setTimeout(I, Y), A.on("close", () => A.socket?.removeListener("timeout", Y));
                else A.setTimeout(I, Y)
            }, "registerTimeout");
            if (0 < B && B < 6000) return G(0), 0;
            return mz.setTimeout(G.bind(null, B === 0 ? 0 : Gr0), Gr0)
        }, "setSocketTimeout"),
        Vr0 = UA("stream"),
        Zr0 = 6000;
    async function SE1(A, Q, B = Zr0) {
        let G = Q.headers ?? {},
            Z = G.Expect || G.expect,
            I = -1,
            Y = !0;
        if (Z === "100-continue") Y = await Promise.race([new Promise((J) => {
            I = Number(mz.setTimeout(() => J(!0), Math.max(Zr0, B)))
        }), new Promise((J) => {
            A.on("continue", () => {
                mz.clearTimeout(I), J(!0)
            }), A.on("response", () => {
                mz.clearTimeout(I), J(!1)
            }), A.on("error", () => {
                mz.clearTimeout(I), J(!1)
            })
        })]);
        if (Y) Kr0(A, Q.body)
    }
    rG(SE1, "writeRequestBody");

    function Kr0(A, Q) {
        if (Q instanceof Vr0.Readable) {
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
    rG(Kr0, "writeBody");
    var Dr0 = 0,
        MW4 = class A {
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
            static {
                rG(this, "NodeHttpHandler")
            }
            static create(Q) {
                if (typeof Q?.handle === "function") return Q;
                return new A(Q)
            }
            static checkSocketUsage(Q, B, G = console) {
                let {
                    sockets: Z,
                    requests: I,
                    maxSockets: Y
                } = Q;
                if (typeof Y !== "number" || Y === 1 / 0) return B;
                let J = 15000;
                if (Date.now() - J < B) return B;
                if (Z && I)
                    for (let W in Z) {
                        let X = Z[W]?.length ?? 0,
                            F = I[W]?.length ?? 0;
                        if (X >= Y && F >= 2 * Y) return G?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${X} and ${F} additional requests are enqueued.
See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html
or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`), Date.now()
                    }
                return B
            }
            resolveDefaultConfig(Q) {
                let {
                    requestTimeout: B,
                    connectionTimeout: G,
                    socketTimeout: Z,
                    socketAcquisitionWarningTimeout: I,
                    httpAgent: Y,
                    httpsAgent: J
                } = Q || {}, W = !0, X = 50;
                return {
                    connectionTimeout: G,
                    requestTimeout: B ?? Z,
                    socketAcquisitionWarningTimeout: I,
                    httpAgent: (() => {
                        if (Y instanceof PE1.Agent || typeof Y?.destroy === "function") return Y;
                        return new PE1.Agent({
                            keepAlive: !0,
                            maxSockets: 50,
                            ...Y
                        })
                    })(),
                    httpsAgent: (() => {
                        if (J instanceof jE1.Agent || typeof J?.destroy === "function") return J;
                        return new jE1.Agent({
                            keepAlive: !0,
                            maxSockets: 50,
                            ...J
                        })
                    })(),
                    logger: console
                }
            }
            destroy() {
                this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy()
            }
            async handle(Q, {
                abortSignal: B
            } = {}) {
                if (!this.config) this.config = await this.configProvider;
                return new Promise((G, Z) => {
                    let I = void 0,
                        Y = [],
                        J = rG(async (N) => {
                            await I, Y.forEach(mz.clearTimeout), G(N)
                        }, "resolve"),
                        W = rG(async (N) => {
                            await I, Y.forEach(mz.clearTimeout), Z(N)
                        }, "reject");
                    if (!this.config) throw Error("Node HTTP request handler config is not resolved");
                    if (B?.aborted) {
                        let N = Error("Request aborted");
                        N.name = "AbortError", W(N);
                        return
                    }
                    let X = Q.protocol === "https:",
                        F = X ? this.config.httpsAgent : this.config.httpAgent;
                    Y.push(mz.setTimeout(() => {
                        this.socketWarningTimestamp = A.checkSocketUsage(F, this.socketWarningTimestamp, this.config.logger)
                    }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000)));
                    let V = (0, Xr0.buildQueryString)(Q.query || {}),
                        K = void 0;
                    if (Q.username != null || Q.password != null) {
                        let N = Q.username ?? "",
                            q = Q.password ?? "";
                        K = `${N}:${q}`
                    }
                    let D = Q.path;
                    if (V) D += `?${V}`;
                    if (Q.fragment) D += `#${Q.fragment}`;
                    let H = Q.hostname ?? "";
                    if (H[0] === "[" && H.endsWith("]")) H = Q.hostname.slice(1, -1);
                    else H = Q.hostname;
                    let C = {
                            headers: Q.headers,
                            host: H,
                            method: Q.method,
                            path: D,
                            port: Q.port,
                            agent: F,
                            auth: K
                        },
                        z = (X ? jE1.request : PE1.request)(C, (N) => {
                            let q = new Wr0.HttpResponse({
                                statusCode: N.statusCode || -1,
                                reason: N.statusMessage,
                                headers: Fr0(N.headers),
                                body: N
                            });
                            J({
                                response: q
                            })
                        });
                    if (z.on("error", (N) => {
                            if ($W4.includes(N.code)) W(Object.assign(N, {
                                name: "TimeoutError"
                            }));
                            else W(N)
                        }), B) {
                        let N = rG(() => {
                            z.destroy();
                            let q = Error("Request aborted");
                            q.name = "AbortError", W(q)
                        }, "onAbort");
                        if (typeof B.addEventListener === "function") {
                            let q = B;
                            q.addEventListener("abort", N, {
                                once: !0
                            }), z.once("close", () => q.removeEventListener("abort", N))
                        } else B.onabort = N
                    }
                    Y.push(wW4(z, W, this.config.connectionTimeout)), Y.push(LW4(z, W, this.config.requestTimeout));
                    let w = C.agent;
                    if (typeof w === "object" && "keepAlive" in w) Y.push(NW4(z, {
                        keepAlive: w.keepAlive,
                        keepAliveMsecs: w.keepAliveMsecs
                    }));
                    I = SE1(z, Q, this.config.requestTimeout).catch((N) => {
                        return Y.forEach(mz.clearTimeout), Z(N)
                    })
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
        },
        Ir0 = UA("http2"),
        OW4 = zW4(UA("http2")),
        RW4 = class {
            constructor(A) {
                this.sessions = [], this.sessions = A ?? []
            }
            static {
                rG(this, "NodeHttp2ConnectionPool")
            }
            poll() {
                if (this.sessions.length > 0) return this.sessions.shift()
            }
            offerLast(A) {
                this.sessions.push(A)
            }
            contains(A) {
                return this.sessions.includes(A)
            }
            remove(A) {
                this.sessions = this.sessions.filter((Q) => Q !== A)
            } [Symbol.iterator]() {
                return this.sessions[Symbol.iterator]()
            }
            destroy(A) {
                for (let Q of this.sessions)
                    if (Q === A) {
                        if (!Q.destroyed) Q.destroy()
                    }
            }
        },
        TW4 = class {
            constructor(A) {
                if (this.sessionCache = new Map, this.config = A, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw RangeError("maxConcurrency must be greater than zero.")
            }
            static {
                rG(this, "NodeHttp2ConnectionManager")
            }
            lease(A, Q) {
                let B = this.getUrlString(A),
                    G = this.sessionCache.get(B);
                if (G) {
                    let J = G.poll();
                    if (J && !this.config.disableConcurrency) return J
                }
                let Z = OW4.default.connect(B);
                if (this.config.maxConcurrency) Z.settings({
                    maxConcurrentStreams: this.config.maxConcurrency
                }, (J) => {
                    if (J) throw Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + A.destination.toString())
                });
                Z.unref();
                let I = rG(() => {
                    Z.destroy(), this.deleteSession(B, Z)
                }, "destroySessionCb");
                if (Z.on("goaway", I), Z.on("error", I), Z.on("frameError", I), Z.on("close", () => this.deleteSession(B, Z)), Q.requestTimeout) Z.setTimeout(Q.requestTimeout, I);
                let Y = this.sessionCache.get(B) || new RW4;
                return Y.offerLast(Z), this.sessionCache.set(B, Y), Z
            }
            deleteSession(A, Q) {
                let B = this.sessionCache.get(A);
                if (!B) return;
                if (!B.contains(Q)) return;
                B.remove(Q), this.sessionCache.set(A, B)
            }
            release(A, Q) {
                let B = this.getUrlString(A);
                this.sessionCache.get(B)?.offerLast(Q)
            }
            destroy() {
                for (let [A, Q] of this.sessionCache) {
                    for (let B of Q) {
                        if (!B.destroyed) B.destroy();
                        Q.remove(B)
                    }
                    this.sessionCache.delete(A)
                }
            }
            setMaxConcurrentStreams(A) {
                if (A && A <= 0) throw RangeError("maxConcurrentStreams must be greater than zero.");
                this.config.maxConcurrency = A
            }
            setDisableConcurrentStreams(A) {
                this.config.disableConcurrency = A
            }
            getUrlString(A) {
                return A.destination.toString()
            }
        },
        PW4 = class A {
            constructor(Q) {
                this.metadata = {
                    handlerProtocol: "h2"
                }, this.connectionManager = new TW4({}), this.configProvider = new Promise((B, G) => {
                    if (typeof Q === "function") Q().then((Z) => {
                        B(Z || {})
                    }).catch(G);
                    else B(Q || {})
                })
            }
            static {
                rG(this, "NodeHttp2Handler")
            }
            static create(Q) {
                if (typeof Q?.handle === "function") return Q;
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
                    let J = !1,
                        W = void 0,
                        X = rG(async (v) => {
                            await W, I(v)
                        }, "resolve"),
                        F = rG(async (v) => {
                            await W, Y(v)
                        }, "reject");
                    if (B?.aborted) {
                        J = !0;
                        let v = Error("Request aborted");
                        v.name = "AbortError", F(v);
                        return
                    }
                    let {
                        hostname: V,
                        method: K,
                        port: D,
                        protocol: H,
                        query: C
                    } = Q, E = "";
                    if (Q.username != null || Q.password != null) {
                        let v = Q.username ?? "",
                            x = Q.password ?? "";
                        E = `${v}:${x}@`
                    }
                    let z = `${H}//${E}${V}${D?`:${D}`:""}`,
                        w = {
                            destination: new URL(z)
                        },
                        N = this.connectionManager.lease(w, {
                            requestTimeout: this.config?.sessionTimeout,
                            disableConcurrentStreams: Z || !1
                        }),
                        q = rG((v) => {
                            if (Z) this.destroySession(N);
                            J = !0, F(v)
                        }, "rejectWithDestroy"),
                        R = (0, Xr0.buildQueryString)(C || {}),
                        P = Q.path;
                    if (R) P += `?${R}`;
                    if (Q.fragment) P += `#${Q.fragment}`;
                    let y = N.request({
                        ...Q.headers,
                        [Ir0.constants.HTTP2_HEADER_PATH]: P,
                        [Ir0.constants.HTTP2_HEADER_METHOD]: K
                    });
                    if (N.ref(), y.on("response", (v) => {
                            let x = new Wr0.HttpResponse({
                                statusCode: v[":status"] || -1,
                                headers: Fr0(v),
                                body: y
                            });
                            if (J = !0, X({
                                    response: x
                                }), Z) N.close(), this.connectionManager.deleteSession(z, N)
                        }), G) y.setTimeout(G, () => {
                        y.close();
                        let v = Error(`Stream timed out because of no activity for ${G} ms`);
                        v.name = "TimeoutError", q(v)
                    });
                    if (B) {
                        let v = rG(() => {
                            y.close();
                            let x = Error("Request aborted");
                            x.name = "AbortError", q(x)
                        }, "onAbort");
                        if (typeof B.addEventListener === "function") {
                            let x = B;
                            x.addEventListener("abort", v, {
                                once: !0
                            }), y.once("close", () => x.removeEventListener("abort", v))
                        } else B.onabort = v
                    }
                    y.on("frameError", (v, x, p) => {
                        q(Error(`Frame type id ${v} in stream id ${p} has failed with code ${x}.`))
                    }), y.on("error", q), y.on("aborted", () => {
                        q(Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${y.rstCode}.`))
                    }), y.on("close", () => {
                        if (N.unref(), Z) N.destroy();
                        if (!J) q(Error("Unexpected error: http2 request did not get a response"))
                    }), W = SE1(y, Q, G)
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
        },
        jW4 = class extends Vr0.Writable {
            constructor() {
                super(...arguments);
                this.bufferedBytes = []
            }
            static {
                rG(this, "Collector")
            }
            _write(A, Q, B) {
                this.bufferedBytes.push(A), B()
            }
        },
        SW4 = rG((A) => {
            if (_W4(A)) return Hr0(A);
            return new Promise((Q, B) => {
                let G = new jW4;
                A.pipe(G), A.on("error", (Z) => {
                    G.end(), B(Z)
                }), G.on("error", B), G.on("finish", function() {
                    let Z = new Uint8Array(Buffer.concat(this.bufferedBytes));
                    Q(Z)
                })
            })
        }, "streamCollector"),
        _W4 = rG((A) => typeof ReadableStream === "function" && A instanceof ReadableStream, "isReadableStreamInstance");
    async function Hr0(A) {
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
    rG(Hr0, "collectReadableStream")
});
var Or0 = U((RY7, Mr0) => {
    var {
        defineProperty: UbA,
        getOwnPropertyDescriptor: kW4,
        getOwnPropertyNames: yW4
    } = Object, xW4 = Object.prototype.hasOwnProperty, $bA = (A, Q) => UbA(A, "name", {
        value: Q,
        configurable: !0
    }), vW4 = (A, Q) => {
        for (var B in Q) UbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, bW4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of yW4(Q))
                if (!xW4.call(A, Z) && Z !== B) UbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = kW4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, fW4 = (A) => bW4(UbA({}, "__esModule", {
        value: !0
    }), A), Er0 = {};
    vW4(Er0, {
        AlgorithmId: () => wr0,
        EndpointURLScheme: () => $r0,
        FieldPosition: () => qr0,
        HttpApiKeyAuthLocation: () => Ur0,
        HttpAuthLocation: () => zr0,
        IniSectionType: () => Nr0,
        RequestHandlerProtocol: () => Lr0,
        SMITHY_CONTEXT_KEY: () => dW4,
        getDefaultClientConfiguration: () => uW4,
        resolveDefaultRuntimeConfig: () => mW4
    });
    Mr0.exports = fW4(Er0);
    var zr0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(zr0 || {}),
        Ur0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(Ur0 || {}),
        $r0 = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })($r0 || {}),
        wr0 = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(wr0 || {}),
        hW4 = $bA((A) => {
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
        gW4 = $bA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        uW4 = $bA((A) => {
            return hW4(A)
        }, "getDefaultClientConfiguration"),
        mW4 = $bA((A) => {
            return gW4(A)
        }, "resolveDefaultRuntimeConfig"),
        qr0 = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(qr0 || {}),
        dW4 = "__smithy_context",
        Nr0 = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(Nr0 || {}),
        Lr0 = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(Lr0 || {})
});
var _r0 = U((TY7, Sr0) => {
    var {
        defineProperty: wbA,
        getOwnPropertyDescriptor: cW4,
        getOwnPropertyNames: pW4
    } = Object, lW4 = Object.prototype.hasOwnProperty, um = (A, Q) => wbA(A, "name", {
        value: Q,
        configurable: !0
    }), iW4 = (A, Q) => {
        for (var B in Q) wbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, nW4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of pW4(Q))
                if (!lW4.call(A, Z) && Z !== B) wbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = cW4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, aW4 = (A) => nW4(wbA({}, "__esModule", {
        value: !0
    }), A), Rr0 = {};
    iW4(Rr0, {
        Field: () => oW4,
        Fields: () => tW4,
        HttpRequest: () => eW4,
        HttpResponse: () => AX4,
        IHttpRequest: () => Tr0.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => sW4,
        isValidHostname: () => jr0,
        resolveHttpHandlerRuntimeConfig: () => rW4
    });
    Sr0.exports = aW4(Rr0);
    var sW4 = um((A) => {
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
        rW4 = um((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        Tr0 = Or0(),
        oW4 = class {
            static {
                um(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = Tr0.FieldPosition.HEADER,
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
        tW4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                um(this, "Fields")
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
        eW4 = class A {
            static {
                um(this, "HttpRequest")
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
                if (B.query) B.query = Pr0(B.query);
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

    function Pr0(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    um(Pr0, "cloneQuery");
    var AX4 = class {
        static {
            um(this, "HttpResponse")
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

    function jr0(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    um(jr0, "isValidHostname")
});
var vr0 = U((_Y7, xr0) => {
    var {
        defineProperty: qbA,
        getOwnPropertyDescriptor: QX4,
        getOwnPropertyNames: BX4
    } = Object, GX4 = Object.prototype.hasOwnProperty, _E1 = (A, Q) => qbA(A, "name", {
        value: Q,
        configurable: !0
    }), ZX4 = (A, Q) => {
        for (var B in Q) qbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, IX4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of BX4(Q))
                if (!GX4.call(A, Z) && Z !== B) qbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = QX4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, YX4 = (A) => IX4(qbA({}, "__esModule", {
        value: !0
    }), A), kr0 = {};
    ZX4(kr0, {
        escapeUri: () => yr0,
        escapeUriPath: () => WX4
    });
    xr0.exports = YX4(kr0);
    var yr0 = _E1((A) => encodeURIComponent(A).replace(/[!'()*]/g, JX4), "escapeUri"),
        JX4 = _E1((A) => `%${A.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode"),
        WX4 = _E1((A) => A.split("/").map(yr0).join("/"), "escapeUriPath")
});
var gr0 = U((kY7, hr0) => {
    var {
        defineProperty: NbA,
        getOwnPropertyDescriptor: XX4,
        getOwnPropertyNames: FX4
    } = Object, VX4 = Object.prototype.hasOwnProperty, KX4 = (A, Q) => NbA(A, "name", {
        value: Q,
        configurable: !0
    }), DX4 = (A, Q) => {
        for (var B in Q) NbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, HX4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of FX4(Q))
                if (!VX4.call(A, Z) && Z !== B) NbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = XX4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, CX4 = (A) => HX4(NbA({}, "__esModule", {
        value: !0
    }), A), br0 = {};
    DX4(br0, {
        buildQueryString: () => fr0
    });
    hr0.exports = CX4(br0);
    var kE1 = vr0();

    function fr0(A) {
        let Q = [];
        for (let B of Object.keys(A).sort()) {
            let G = A[B];
            if (B = (0, kE1.escapeUri)(B), Array.isArray(G))
                for (let Z = 0, I = G.length; Z < I; Z++) Q.push(`${B}=${(0,kE1.escapeUri)(G[Z])}`);
            else {
                let Z = B;
                if (G || typeof G === "string") Z += `=${(0,kE1.escapeUri)(G)}`;
                Q.push(Z)
            }
        }
        return Q.join("&")
    }
    KX4(fr0, "buildQueryString")
});
var nr0 = U((yY7, ir0) => {
    var {
        defineProperty: MbA,
        getOwnPropertyDescriptor: EX4,
        getOwnPropertyNames: zX4
    } = Object, UX4 = Object.prototype.hasOwnProperty, AS = (A, Q) => MbA(A, "name", {
        value: Q,
        configurable: !0
    }), $X4 = (A, Q) => {
        for (var B in Q) MbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, wX4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of zX4(Q))
                if (!UX4.call(A, Z) && Z !== B) MbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = EX4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, qX4 = (A) => wX4(MbA({}, "__esModule", {
        value: !0
    }), A), mr0 = {};
    $X4(mr0, {
        FetchHttpHandler: () => LX4,
        keepAliveSupport: () => LbA,
        streamCollector: () => OX4
    });
    ir0.exports = qX4(mr0);
    var ur0 = _r0(),
        NX4 = gr0();

    function yE1(A, Q) {
        return new Request(A, Q)
    }
    AS(yE1, "createRequest");

    function dr0(A = 0) {
        return new Promise((Q, B) => {
            if (A) setTimeout(() => {
                let G = Error(`Request did not complete within ${A} ms`);
                G.name = "TimeoutError", B(G)
            }, A)
        })
    }
    AS(dr0, "requestTimeout");
    var LbA = {
            supported: void 0
        },
        LX4 = class A {
            static {
                AS(this, "FetchHttpHandler")
            }
            static create(Q) {
                if (typeof Q?.handle === "function") return Q;
                return new A(Q)
            }
            constructor(Q) {
                if (typeof Q === "function") this.configProvider = Q().then((B) => B || {});
                else this.config = Q ?? {}, this.configProvider = Promise.resolve(this.config);
                if (LbA.supported === void 0) LbA.supported = Boolean(typeof Request < "u" && "keepalive" in yE1("https://[::1]"))
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
                    J = (0, NX4.buildQueryString)(Q.query || {});
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
                if (LbA.supported) D.keepalive = Z;
                if (typeof this.config.requestInit === "function") Object.assign(D, this.config.requestInit(Q));
                let H = AS(() => {}, "removeSignalEventListener"),
                    C = yE1(V, D),
                    E = [fetch(C).then((z) => {
                        let w = z.headers,
                            N = {};
                        for (let R of w.entries()) N[R[0]] = R[1];
                        if (z.body == null) return z.blob().then((R) => ({
                            response: new ur0.HttpResponse({
                                headers: N,
                                reason: z.statusText,
                                statusCode: z.status,
                                body: R
                            })
                        }));
                        return {
                            response: new ur0.HttpResponse({
                                headers: N,
                                reason: z.statusText,
                                statusCode: z.status,
                                body: z.body
                            })
                        }
                    }), dr0(G)];
                if (B) E.push(new Promise((z, w) => {
                    let N = AS(() => {
                        let q = Error("Request aborted");
                        q.name = "AbortError", w(q)
                    }, "onAbort");
                    if (typeof B.addEventListener === "function") {
                        let q = B;