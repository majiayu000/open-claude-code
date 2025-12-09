/**
 * Claude Code Decompiled
 * Category: git
 * File: 2/34
 * Lines: 56809 - 58306 (1498 lines)
 * Original file: cli.js
 */

            static {
                vm(this, "Fields")
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
        NZ4 = class A {
            static {
                vm(this, "HttpRequest")
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
                if (B.query) B.query = wn0(B.query);
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

    function wn0(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    vm(wn0, "cloneQuery");
    var LZ4 = class {
        static {
            vm(this, "HttpResponse")
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

    function qn0(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    vm(qn0, "isValidHostname")
});
var lKA = U((bI7, Tn0) => {
    var {
        defineProperty: nvA,
        getOwnPropertyDescriptor: MZ4,
        getOwnPropertyNames: OZ4
    } = Object, RZ4 = Object.prototype.hasOwnProperty, ivA = (A, Q) => nvA(A, "name", {
        value: Q,
        configurable: !0
    }), TZ4 = (A, Q) => {
        for (var B in Q) nvA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, PZ4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of OZ4(Q))
                if (!RZ4.call(A, Z) && Z !== B) nvA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = MZ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, jZ4 = (A) => PZ4(nvA({}, "__esModule", {
        value: !0
    }), A), Ln0 = {};
    TZ4(Ln0, {
        getHostHeaderPlugin: () => _Z4,
        hostHeaderMiddleware: () => On0,
        hostHeaderMiddlewareOptions: () => Rn0,
        resolveHostHeaderConfig: () => Mn0
    });
    Tn0.exports = jZ4(Ln0);
    var SZ4 = cC();

    function Mn0(A) {
        return A
    }
    ivA(Mn0, "resolveHostHeaderConfig");
    var On0 = ivA((A) => (Q) => async (B) => {
            if (!SZ4.HttpRequest.isInstance(B.request)) return Q(B);
            let {
                request: G
            } = B, {
                handlerProtocol: Z = ""
            } = A.requestHandler.metadata || {};
            if (Z.indexOf("h2") >= 0 && !G.headers[":authority"]) delete G.headers.host, G.headers[":authority"] = G.hostname + (G.port ? ":" + G.port : "");
            else if (!G.headers.host) {
                let I = G.hostname;
                if (G.port != null) I += `:${G.port}`;
                G.headers.host = I
            }
            return Q(B)
        }, "hostHeaderMiddleware"),
        Rn0 = {
            name: "hostHeaderMiddleware",
            step: "build",
            priority: "low",
            tags: ["HOST"],
            override: !0
        },
        _Z4 = ivA((A) => ({
            applyToStack: ivA((Q) => {
                Q.add(On0(A), Rn0)
            }, "applyToStack")
        }), "getHostHeaderPlugin")
});
var iKA = U((fI7, _n0) => {
    var {
        defineProperty: avA,
        getOwnPropertyDescriptor: kZ4,
        getOwnPropertyNames: yZ4
    } = Object, xZ4 = Object.prototype.hasOwnProperty, EE1 = (A, Q) => avA(A, "name", {
        value: Q,
        configurable: !0
    }), vZ4 = (A, Q) => {
        for (var B in Q) avA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, bZ4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of yZ4(Q))
                if (!xZ4.call(A, Z) && Z !== B) avA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = kZ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, fZ4 = (A) => bZ4(avA({}, "__esModule", {
        value: !0
    }), A), Pn0 = {};
    vZ4(Pn0, {
        getLoggerPlugin: () => hZ4,
        loggerMiddleware: () => jn0,
        loggerMiddlewareOptions: () => Sn0
    });
    _n0.exports = fZ4(Pn0);
    var jn0 = EE1(() => (A, Q) => async (B) => {
            try {
                let G = await A(B),
                    {
                        clientName: Z,
                        commandName: I,
                        logger: Y,
                        dynamoDbDocumentClientOptions: J = {}
                    } = Q,
                    {
                        overrideInputFilterSensitiveLog: W,
                        overrideOutputFilterSensitiveLog: X
                    } = J,
                    F = W ?? Q.inputFilterSensitiveLog,
                    V = X ?? Q.outputFilterSensitiveLog,
                    {
                        $metadata: K,
                        ...D
                    } = G.output;
                return Y?.info?.({
                    clientName: Z,
                    commandName: I,
                    input: F(B.input),
                    output: V(D),
                    metadata: K
                }), G
            } catch (G) {
                let {
                    clientName: Z,
                    commandName: I,
                    logger: Y,
                    dynamoDbDocumentClientOptions: J = {}
                } = Q, {
                    overrideInputFilterSensitiveLog: W
                } = J, X = W ?? Q.inputFilterSensitiveLog;
                throw Y?.error?.({
                    clientName: Z,
                    commandName: I,
                    input: X(B.input),
                    error: G,
                    metadata: G.$metadata
                }), G
            }
        }, "loggerMiddleware"),
        Sn0 = {
            name: "loggerMiddleware",
            tags: ["LOGGER"],
            step: "initialize",
            override: !0
        },
        hZ4 = EE1((A) => ({
            applyToStack: EE1((Q) => {
                Q.add(jn0(), Sn0)
            }, "applyToStack")
        }), "getLoggerPlugin")
});
var nKA = U((hI7, vn0) => {
    var {
        defineProperty: rvA,
        getOwnPropertyDescriptor: gZ4,
        getOwnPropertyNames: uZ4
    } = Object, mZ4 = Object.prototype.hasOwnProperty, svA = (A, Q) => rvA(A, "name", {
        value: Q,
        configurable: !0
    }), dZ4 = (A, Q) => {
        for (var B in Q) rvA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, cZ4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of uZ4(Q))
                if (!mZ4.call(A, Z) && Z !== B) rvA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = gZ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, pZ4 = (A) => cZ4(rvA({}, "__esModule", {
        value: !0
    }), A), kn0 = {};
    dZ4(kn0, {
        addRecursionDetectionMiddlewareOptions: () => xn0,
        getRecursionDetectionPlugin: () => aZ4,
        recursionDetectionMiddleware: () => yn0
    });
    vn0.exports = pZ4(kn0);
    var lZ4 = cC(),
        zE1 = "X-Amzn-Trace-Id",
        iZ4 = "AWS_LAMBDA_FUNCTION_NAME",
        nZ4 = "_X_AMZN_TRACE_ID",
        yn0 = svA((A) => (Q) => async (B) => {
            let {
                request: G
            } = B;
            if (!lZ4.HttpRequest.isInstance(G) || A.runtime !== "node") return Q(B);
            let Z = Object.keys(G.headers ?? {}).find((W) => W.toLowerCase() === zE1.toLowerCase()) ?? zE1;
            if (G.headers.hasOwnProperty(Z)) return Q(B);
            let I = process.env[iZ4],
                Y = process.env[nZ4],
                J = svA((W) => typeof W === "string" && W.length > 0, "nonEmptyString");
            if (J(I) && J(Y)) G.headers[zE1] = Y;
            return Q({
                ...B,
                request: G
            })
        }, "recursionDetectionMiddleware"),
        xn0 = {
            step: "build",
            tags: ["RECURSION_DETECTION"],
            name: "recursionDetectionMiddleware",
            override: !0,
            priority: "low"
        },
        aZ4 = svA((A) => ({
            applyToStack: svA((Q) => {
                Q.add(yn0(A), xn0)
            }, "applyToStack")
        }), "getRecursionDetectionPlugin")
});
var UE1 = U((gI7, pn0) => {
    var {
        defineProperty: ovA,
        getOwnPropertyDescriptor: sZ4,
        getOwnPropertyNames: rZ4
    } = Object, oZ4 = Object.prototype.hasOwnProperty, tvA = (A, Q) => ovA(A, "name", {
        value: Q,
        configurable: !0
    }), tZ4 = (A, Q) => {
        for (var B in Q) ovA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, eZ4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of rZ4(Q))
                if (!oZ4.call(A, Z) && Z !== B) ovA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = sZ4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, AI4 = (A) => eZ4(ovA({}, "__esModule", {
        value: !0
    }), A), bn0 = {};
    tZ4(bn0, {
        AlgorithmId: () => un0,
        EndpointURLScheme: () => gn0,
        FieldPosition: () => mn0,
        HttpApiKeyAuthLocation: () => hn0,
        HttpAuthLocation: () => fn0,
        IniSectionType: () => dn0,
        RequestHandlerProtocol: () => cn0,
        SMITHY_CONTEXT_KEY: () => II4,
        getDefaultClientConfiguration: () => GI4,
        resolveDefaultRuntimeConfig: () => ZI4
    });
    pn0.exports = AI4(bn0);
    var fn0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(fn0 || {}),
        hn0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(hn0 || {}),
        gn0 = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(gn0 || {}),
        un0 = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(un0 || {}),
        QI4 = tvA((A) => {
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
        BI4 = tvA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        GI4 = tvA((A) => {
            return QI4(A)
        }, "getDefaultClientConfiguration"),
        ZI4 = tvA((A) => {
            return BI4(A)
        }, "resolveDefaultRuntimeConfig"),
        mn0 = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(mn0 || {}),
        II4 = "__smithy_context",
        dn0 = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(dn0 || {}),
        cn0 = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(cn0 || {})
});
var Aa0 = U((uI7, en0) => {
    var {
        defineProperty: evA,
        getOwnPropertyDescriptor: YI4,
        getOwnPropertyNames: JI4
    } = Object, WI4 = Object.prototype.hasOwnProperty, AbA = (A, Q) => evA(A, "name", {
        value: Q,
        configurable: !0
    }), XI4 = (A, Q) => {
        for (var B in Q) evA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, FI4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of JI4(Q))
                if (!WI4.call(A, Z) && Z !== B) evA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = YI4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, VI4 = (A) => FI4(evA({}, "__esModule", {
        value: !0
    }), A), ln0 = {};
    XI4(ln0, {
        AlgorithmId: () => sn0,
        EndpointURLScheme: () => an0,
        FieldPosition: () => rn0,
        HttpApiKeyAuthLocation: () => nn0,
        HttpAuthLocation: () => in0,
        IniSectionType: () => on0,
        RequestHandlerProtocol: () => tn0,
        SMITHY_CONTEXT_KEY: () => EI4,
        getDefaultClientConfiguration: () => HI4,
        resolveDefaultRuntimeConfig: () => CI4
    });
    en0.exports = VI4(ln0);
    var in0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(in0 || {}),
        nn0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(nn0 || {}),
        an0 = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(an0 || {}),
        sn0 = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(sn0 || {}),
        KI4 = AbA((A) => {
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
        DI4 = AbA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        HI4 = AbA((A) => {
            return KI4(A)
        }, "getDefaultClientConfiguration"),
        CI4 = AbA((A) => {
            return DI4(A)
        }, "resolveDefaultRuntimeConfig"),
        rn0 = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(rn0 || {}),
        EI4 = "__smithy_context",
        on0 = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(on0 || {}),
        tn0 = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(tn0 || {})
});
var K7 = U((mI7, Za0) => {
    var {
        defineProperty: QbA,
        getOwnPropertyDescriptor: zI4,
        getOwnPropertyNames: UI4
    } = Object, $I4 = Object.prototype.hasOwnProperty, Ba0 = (A, Q) => QbA(A, "name", {
        value: Q,
        configurable: !0
    }), wI4 = (A, Q) => {
        for (var B in Q) QbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qI4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of UI4(Q))
                if (!$I4.call(A, Z) && Z !== B) QbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zI4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, NI4 = (A) => qI4(QbA({}, "__esModule", {
        value: !0
    }), A), Ga0 = {};
    wI4(Ga0, {
        getSmithyContext: () => LI4,
        normalizeProvider: () => MI4
    });
    Za0.exports = NI4(Ga0);
    var Qa0 = Aa0(),
        LI4 = Ba0((A) => A[Qa0.SMITHY_CONTEXT_KEY] || (A[Qa0.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext"),
        MI4 = Ba0((A) => {
            if (typeof A === "function") return A;
            let Q = Promise.resolve(A);
            return () => Q
        }, "normalizeProvider")
});
var Ha0 = U((dI7, Da0) => {
    var {
        defineProperty: BbA,
        getOwnPropertyDescriptor: OI4,
        getOwnPropertyNames: RI4
    } = Object, TI4 = Object.prototype.hasOwnProperty, GbA = (A, Q) => BbA(A, "name", {
        value: Q,
        configurable: !0
    }), PI4 = (A, Q) => {
        for (var B in Q) BbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, jI4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of RI4(Q))
                if (!TI4.call(A, Z) && Z !== B) BbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = OI4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, SI4 = (A) => jI4(BbA({}, "__esModule", {
        value: !0
    }), A), Ia0 = {};
    PI4(Ia0, {
        AlgorithmId: () => Xa0,
        EndpointURLScheme: () => Wa0,
        FieldPosition: () => Fa0,
        HttpApiKeyAuthLocation: () => Ja0,
        HttpAuthLocation: () => Ya0,
        IniSectionType: () => Va0,
        RequestHandlerProtocol: () => Ka0,
        SMITHY_CONTEXT_KEY: () => vI4,
        getDefaultClientConfiguration: () => yI4,
        resolveDefaultRuntimeConfig: () => xI4
    });
    Da0.exports = SI4(Ia0);
    var Ya0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(Ya0 || {}),
        Ja0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(Ja0 || {}),
        Wa0 = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(Wa0 || {}),
        Xa0 = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(Xa0 || {}),
        _I4 = GbA((A) => {
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
        kI4 = GbA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        yI4 = GbA((A) => {
            return _I4(A)
        }, "getDefaultClientConfiguration"),
        xI4 = GbA((A) => {
            return kI4(A)
        }, "resolveDefaultRuntimeConfig"),
        Fa0 = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(Fa0 || {}),
        vI4 = "__smithy_context",
        Va0 = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(Va0 || {}),
        Ka0 = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(Ka0 || {})
});
var wa0 = U((cI7, $a0) => {
    var {
        defineProperty: ZbA,
        getOwnPropertyDescriptor: bI4,
        getOwnPropertyNames: fI4
    } = Object, hI4 = Object.prototype.hasOwnProperty, bm = (A, Q) => ZbA(A, "name", {
        value: Q,
        configurable: !0
    }), gI4 = (A, Q) => {
        for (var B in Q) ZbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, uI4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of fI4(Q))
                if (!hI4.call(A, Z) && Z !== B) ZbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = bI4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, mI4 = (A) => uI4(ZbA({}, "__esModule", {
        value: !0
    }), A), Ca0 = {};
    gI4(Ca0, {
        Field: () => pI4,
        Fields: () => lI4,
        HttpRequest: () => iI4,
        HttpResponse: () => nI4,
        IHttpRequest: () => Ea0.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => dI4,
        isValidHostname: () => Ua0,
        resolveHttpHandlerRuntimeConfig: () => cI4
    });
    $a0.exports = mI4(Ca0);
    var dI4 = bm((A) => {
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
        cI4 = bm((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        Ea0 = Ha0(),
        pI4 = class {
            static {
                bm(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = Ea0.FieldPosition.HEADER,
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
        lI4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                bm(this, "Fields")
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
        iI4 = class A {
            static {
                bm(this, "HttpRequest")
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
                if (B.query) B.query = za0(B.query);
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

    function za0(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    bm(za0, "cloneQuery");
    var nI4 = class {
        static {
            bm(this, "HttpResponse")
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

    function Ua0(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    bm(Ua0, "isValidHostname")
});
var sG = U((nI7, Ta0) => {
    var {
        defineProperty: IbA,
        getOwnPropertyDescriptor: aI4,
        getOwnPropertyNames: sI4
    } = Object, rI4 = Object.prototype.hasOwnProperty, YbA = (A, Q) => IbA(A, "name", {
        value: Q,
        configurable: !0
    }), oI4 = (A, Q) => {
        for (var B in Q) IbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, tI4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of sI4(Q))
                if (!rI4.call(A, Z) && Z !== B) IbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = aI4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, eI4 = (A) => tI4(IbA({}, "__esModule", {
        value: !0
    }), A), qa0 = {};
    oI4(qa0, {
        deserializerMiddleware: () => Na0,
        deserializerMiddlewareOption: () => Ma0,
        getSerdePlugin: () => Ra0,
        serializerMiddleware: () => La0,
        serializerMiddlewareOption: () => Oa0
    });
    Ta0.exports = eI4(qa0);
    var AY4 = wa0(),
        Na0 = YbA((A, Q) => (B, G) => async (Z) => {
            let {
                response: I
            } = await B(Z);
            try {
                let Y = await Q(I, A);
                return {
                    response: I,
                    output: Y
                }
            } catch (Y) {
                if (Object.defineProperty(Y, "$response", {
                        value: I
                    }), !("$metadata" in Y)) {
                    try {
                        Y.message += `
  Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`
                    } catch (W) {
                        if (!G.logger || G.logger?.constructor?.name === "NoOpLogger") console.warn("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.");
                        else G.logger?.warn?.("Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.")
                    }
                    if (typeof Y.$responseBodyText < "u") {
                        if (Y.$response) Y.$response.body = Y.$responseBodyText
                    }
                    try {
                        if (AY4.HttpResponse.isInstance(I)) {
                            let {
                                headers: W = {}
                            } = I, X = Object.entries(W);
                            Y.$metadata = {
                                httpStatusCode: I.statusCode,
                                requestId: $E1(/^x-[\w-]+-request-?id$/, X),
                                extendedRequestId: $E1(/^x-[\w-]+-id-2$/, X),
                                cfId: $E1(/^x-[\w-]+-cf-id$/, X)
                            }
                        }
                    } catch (W) {}
                }
                throw Y
            }
        }, "deserializerMiddleware"),
        $E1 = YbA((A, Q) => {
            return (Q.find(([B]) => {
                return B.match(A)
            }) || [void 0, void 0])[1]
        }, "findHeader"),
        La0 = YbA((A, Q) => (B, G) => async (Z) => {
            let I = A,
                Y = G.endpointV2?.url && I.urlParser ? async () => I.urlParser(G.endpointV2.url): I.endpoint;
            if (!Y) throw Error("No valid endpoint provider available.");
            let J = await Q(Z.input, {
                ...A,
                endpoint: Y
            });
            return B({
                ...Z,
                request: J
            })
        }, "serializerMiddleware"),
        Ma0 = {
            name: "deserializerMiddleware",
            step: "deserialize",
            tags: ["DESERIALIZER"],
            override: !0
        },
        Oa0 = {
            name: "serializerMiddleware",
            step: "serialize",
            tags: ["SERIALIZER"],
            override: !0
        };

    function Ra0(A, Q, B) {
        return {
            applyToStack: (G) => {
                G.add(Na0(A, B), Ma0), G.add(La0(A, Q), Oa0)
            }
        }
    }
    YbA(Ra0, "getSerdePlugin")
});
var Wr = U((aI7, ka0) => {
    var {
        defineProperty: JbA,
        getOwnPropertyDescriptor: QY4,
        getOwnPropertyNames: BY4
    } = Object, GY4 = Object.prototype.hasOwnProperty, fm = (A, Q) => JbA(A, "name", {
        value: Q,
        configurable: !0
    }), ZY4 = (A, Q) => {
        for (var B in Q) JbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, IY4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of BY4(Q))
                if (!GY4.call(A, Z) && Z !== B) JbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = QY4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, YY4 = (A) => IY4(JbA({}, "__esModule", {
        value: !0
    }), A), Pa0 = {};
    ZY4(Pa0, {
        Field: () => XY4,
        Fields: () => FY4,
        HttpRequest: () => VY4,
        HttpResponse: () => KY4,
        IHttpRequest: () => ja0.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => JY4,
        isValidHostname: () => _a0,
        resolveHttpHandlerRuntimeConfig: () => WY4
    });
    ka0.exports = YY4(Pa0);
    var JY4 = fm((A) => {
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
        WY4 = fm((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        ja0 = UE1(),
        XY4 = class {
            static {
                fm(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = ja0.FieldPosition.HEADER,
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
        FY4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                fm(this, "Fields")
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
        VY4 = class A {
            static {
                fm(this, "HttpRequest")
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
                if (B.query) B.query = Sa0(B.query);
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

    function Sa0(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    fm(Sa0, "cloneQuery");
    var KY4 = class {
        static {
            fm(this, "HttpResponse")
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

    function _a0(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    fm(_a0, "isValidHostname")
});
var va0 = U((tI7, xa0) => {
    var {
        defineProperty: WbA,
        getOwnPropertyDescriptor: DY4,
        getOwnPropertyNames: HY4
    } = Object, CY4 = Object.prototype.hasOwnProperty, EY4 = (A, Q) => WbA(A, "name", {
        value: Q,
        configurable: !0
    }), zY4 = (A, Q) => {
        for (var B in Q) WbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, UY4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of HY4(Q))
                if (!CY4.call(A, Z) && Z !== B) WbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = DY4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, $Y4 = (A) => UY4(WbA({}, "__esModule", {
        value: !0
    }), A), ya0 = {};
    zY4(ya0, {
        isArrayBuffer: () => wY4
    });
    xa0.exports = $Y4(ya0);
    var wY4 = EY4((A) => typeof ArrayBuffer === "function" && A instanceof ArrayBuffer || Object.prototype.toString.call(A) === "[object ArrayBuffer]", "isArrayBuffer")
});
var kI = U((eI7, ha0) => {
    var {
        defineProperty: XbA,
        getOwnPropertyDescriptor: qY4,
        getOwnPropertyNames: NY4
    } = Object, LY4 = Object.prototype.hasOwnProperty, ba0 = (A, Q) => XbA(A, "name", {
        value: Q,
        configurable: !0
    }), MY4 = (A, Q) => {
        for (var B in Q) XbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, OY4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of NY4(Q))
                if (!LY4.call(A, Z) && Z !== B) XbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = qY4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, RY4 = (A) => OY4(XbA({}, "__esModule", {
        value: !0
    }), A), fa0 = {};
    MY4(fa0, {
        fromArrayBuffer: () => PY4,
        fromString: () => jY4
    });
    ha0.exports = RY4(fa0);
    var TY4 = va0(),
        wE1 = UA("buffer"),
        PY4 = ba0((A, Q = 0, B = A.byteLength - Q) => {
            if (!(0, TY4.isArrayBuffer)(A)) throw TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof A} (${A})`);
            return wE1.Buffer.from(A, Q, B)
        }, "fromArrayBuffer"),
        jY4 = ba0((A, Q) => {
            if (typeof A !== "string") throw TypeError(`The "input" argument must be of type string. Received type ${typeof A} (${A})`);
            return Q ? wE1.Buffer.from(A, Q) : wE1.Buffer.from(A)
        }, "fromString")
});
var ma0 = U((ga0) => {
    Object.defineProperty(ga0, "__esModule", {
        value: !0
    });
    ga0.fromBase64 = void 0;
    var SY4 = kI(),
        _Y4 = /^[A-Za-z0-9+/]*={0,2}$/,
        kY4 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!_Y4.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, SY4.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    ga0.fromBase64 = kY4
});
var L2 = U((QY7, la0) => {
    var {
        defineProperty: FbA,
        getOwnPropertyDescriptor: yY4,
        getOwnPropertyNames: xY4
    } = Object, vY4 = Object.prototype.hasOwnProperty, qE1 = (A, Q) => FbA(A, "name", {
        value: Q,
        configurable: !0
    }), bY4 = (A, Q) => {
        for (var B in Q) FbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, fY4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of xY4(Q))
                if (!vY4.call(A, Z) && Z !== B) FbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = yY4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, hY4 = (A) => fY4(FbA({}, "__esModule", {
        value: !0
    }), A), da0 = {};
    bY4(da0, {
        fromUtf8: () => pa0,
        toUint8Array: () => gY4,
        toUtf8: () => uY4
    });
    la0.exports = hY4(da0);
    var ca0 = kI(),
        pa0 = qE1((A) => {
            let Q = (0, ca0.fromString)(A, "utf8");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength / Uint8Array.BYTES_PER_ELEMENT)
        }, "fromUtf8"),
        gY4 = qE1((A) => {
            if (typeof A === "string") return pa0(A);
            if (ArrayBuffer.isView(A)) return new Uint8Array(A.buffer, A.byteOffset, A.byteLength / Uint8Array.BYTES_PER_ELEMENT);
            return new Uint8Array(A)
        }, "toUint8Array"),
        uY4 = qE1((A) => {
            if (typeof A === "string") return A;
            if (typeof A !== "object" || typeof A.byteOffset !== "number" || typeof A.byteLength !== "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
            return (0, ca0.fromArrayBuffer)(A.buffer, A.byteOffset, A.byteLength).toString("utf8")
        }, "toUtf8")
});
var aa0 = U((ia0) => {
    Object.defineProperty(ia0, "__esModule", {
        value: !0
    });
    ia0.toBase64 = void 0;
    var mY4 = kI(),
        dY4 = L2(),
        cY4 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, dY4.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, mY4.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    ia0.toBase64 = cY4
});
var X4A = U((GY7, VbA) => {
    var {
        defineProperty: sa0,
        getOwnPropertyDescriptor: pY4,
        getOwnPropertyNames: lY4
    } = Object, iY4 = Object.prototype.hasOwnProperty, NE1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of lY4(Q))
                if (!iY4.call(A, Z) && Z !== B) sa0(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = pY4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ra0 = (A, Q, B) => (NE1(A, Q, "default"), B && NE1(B, Q, "default")), nY4 = (A) => NE1(sa0({}, "__esModule", {
        value: !0
    }), A), LE1 = {};
    VbA.exports = nY4(LE1);
    ra0(LE1, ma0(), VbA.exports);
    ra0(LE1, aa0(), VbA.exports)
});
var ME1 = U((ta0) => {
    Object.defineProperty(ta0, "__esModule", {
        value: !0
    });
    ta0.ChecksumStream = void 0;
    var aY4 = X4A(),
        sY4 = UA("stream");
    class oa0 extends sY4.Duplex {
        constructor({
            expectedChecksum: A,
            checksum: Q,
            source: B,
            checksumSourceLocation: G,
            base64Encoder: Z
        }) {
            var I, Y;
            super();
            if (typeof B.pipe === "function") this.source = B;
            else throw Error(`@smithy/util-stream: unsupported source type ${(Y=(I=B===null||B===void 0?void 0:B.constructor)===null||I===void 0?void 0:I.name)!==null&&Y!==void 0?Y:B} in ChecksumStream.`);
            this.base64Encoder = Z !== null && Z !== void 0 ? Z : aY4.toBase64, this.expectedChecksum = A, this.checksum = Q, this.checksumSourceLocation = G, this.source.pipe(this)
        }
        _read(A) {}
        _write(A, Q, B) {
            try {
                this.checksum.update(A), this.push(A)
            } catch (G) {
                return B(G)
            }
            return B()
        }
        async _final(A) {
            try {
                let Q = await this.checksum.digest(),
                    B = this.base64Encoder(Q);
                if (this.expectedChecksum !== B) return A(Error(`Checksum mismatch: expected "${this.expectedChecksum}" but received "${B}" in response header "${this.checksumSourceLocation}".`))
            } catch (Q) {
                return A(Q)
            }
            return this.push(null), A()
        }
    }
    ta0.ChecksumStream = oa0
});
var hm = U((As0) => {
    Object.defineProperty(As0, "__esModule", {
        value: !0
    });
    As0.isBlob = As0.isReadableStream = void 0;
    var rY4 = (A) => {
        var Q;
        return typeof ReadableStream === "function" && (((Q = A === null || A === void 0 ? void 0 : A.constructor) === null || Q === void 0 ? void 0 : Q.name) === ReadableStream.name || A instanceof ReadableStream)
    };
    As0.isReadableStream = rY4;
    var oY4 = (A) => {
        var Q;
        return typeof Blob === "function" && (((Q = A === null || A === void 0 ? void 0 : A.constructor) === null || Q === void 0 ? void 0 : Q.name) === Blob.name || A instanceof Blob)
    };
    As0.isBlob = oY4
});
var Is0 = U((Gs0) => {
    Object.defineProperty(Gs0, "__esModule", {
        value: !0
    });
    Gs0.ChecksumStream = void 0;
    var eY4 = typeof ReadableStream === "function" ? ReadableStream : function() {};
    class Bs0 extends eY4 {}
    Gs0.ChecksumStream = Bs0
});
var Ws0 = U((Ys0) => {
    Object.defineProperty(Ys0, "__esModule", {
        value: !0
    });
    Ys0.createChecksumStream = void 0;
    var AJ4 = X4A(),
        QJ4 = hm(),
        BJ4 = Is0(),
        GJ4 = ({
            expectedChecksum: A,
            checksum: Q,
            source: B,
            checksumSourceLocation: G,
            base64Encoder: Z
        }) => {
            var I, Y;
            if (!(0, QJ4.isReadableStream)(B)) throw Error(`@smithy/util-stream: unsupported source type ${(Y=(I=B===null||B===void 0?void 0:B.constructor)===null||I===void 0?void 0:I.name)!==null&&Y!==void 0?Y:B} in ChecksumStream.`);
            let J = Z !== null && Z !== void 0 ? Z : AJ4.toBase64;
            if (typeof TransformStream !== "function") throw Error("@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.");
            let W = new TransformStream({
                start() {},
                async transform(F, V) {
                    Q.update(F), V.enqueue(F)
                },
                async flush(F) {
                    let V = await Q.digest(),
                        K = J(V);
                    if (A !== K) {
                        let D = Error(`Checksum mismatch: expected "${A}" but received "${K}" in response header "${G}".`);
                        F.error(D)
                    } else F.terminate()
                }
            });
            B.pipeThrough(W);
            let X = W.readable;
            return Object.setPrototypeOf(X, BJ4.ChecksumStream.prototype), X
        };
    Ys0.createChecksumStream = GJ4
});
var Fs0 = U((Xs0) => {
    Object.defineProperty(Xs0, "__esModule", {
        value: !0
    });
    Xs0.createChecksumStream = JJ4;
    var ZJ4 = hm(),
        IJ4 = ME1(),
        YJ4 = Ws0();

    function JJ4(A) {
        if (typeof ReadableStream === "function" && (0, ZJ4.isReadableStream)(A.source)) return (0, YJ4.createChecksumStream)(A);
        return new IJ4.ChecksumStream(A)
    }
});
var OE1 = U((Ks0) => {
    Object.defineProperty(Ks0, "__esModule", {
        value: !0
    });
    Ks0.ByteArrayCollector = void 0;
    class Vs0 {
        constructor(A) {
            this.allocByteArray = A, this.byteLength = 0, this.byteArrays = []
        }
        push(A) {
            this.byteArrays.push(A), this.byteLength += A.byteLength
        }
        flush() {
            if (this.byteArrays.length === 1) {
                let B = this.byteArrays[0];
                return this.reset(), B
            }
            let A = this.allocByteArray(this.byteLength),
                Q = 0;
            for (let B = 0; B < this.byteArrays.length; ++B) {
                let G = this.byteArrays[B];
                A.set(G, Q), Q += G.byteLength
            }
            return this.reset(), A
        }
        reset() {
            this.byteArrays = [], this.byteLength = 0
        }
    }
    Ks0.ByteArrayCollector = Vs0
});
var $s0 = U((zs0) => {
    Object.defineProperty(zs0, "__esModule", {
        value: !0
    });
    zs0.createBufferedReadable = void 0;
    zs0.createBufferedReadableStream = Hs0;
    zs0.merge = Cs0;
    zs0.flush = KbA;
    zs0.sizeOf = F4A;
    zs0.modeOf = Es0;
    var XJ4 = OE1();

    function Hs0(A, Q, B) {
        let G = A.getReader(),
            Z = !1,
            I = 0,
            Y = ["", new XJ4.ByteArrayCollector((X) => new Uint8Array(X))],
            J = -1,
            W = async (X) => {
                let {
                    value: F,
                    done: V
                } = await G.read(), K = F;
                if (V) {
                    if (J !== -1) {
                        let D = KbA(Y, J);
                        if (F4A(D) > 0) X.enqueue(D)
                    }
                    X.close()
                } else {
                    let D = Es0(K, !1);
                    if (J !== D) {
                        if (J >= 0) X.enqueue(KbA(Y, J));
                        J = D
                    }
                    if (J === -1) {
                        X.enqueue(K);
                        return
                    }
                    let H = F4A(K);
                    I += H;
                    let C = F4A(Y[J]);
                    if (H >= Q && C === 0) X.enqueue(K);
                    else {
                        let E = Cs0(Y, J, K);
                        if (!Z && I > Q * 2) Z = !0, B === null || B === void 0 || B.warn(`@smithy/util-stream - stream chunk size ${H} is below threshold of ${Q}, automatically buffering.`);
                        if (E >= Q) X.enqueue(KbA(Y, J));
                        else await W(X)
                    }
                }
            };
        return new ReadableStream({
            pull: W
        })
    }
    zs0.createBufferedReadable = Hs0;

    function Cs0(A, Q, B) {
        switch (Q) {
            case 0:
                return A[0] += B, F4A(A[0]);
            case 1:
            case 2:
                return A[Q].push(B), F4A(A[Q])
        }
    }

    function KbA(A, Q) {
        switch (Q) {
            case 0:
                let B = A[0];
                return A[0] = "", B;
            case 1:
            case 2:
                return A[Q].flush()
        }
        throw Error(`@smithy/util-stream - invalid index ${Q} given to flush()`)
    }

    function F4A(A) {
        var Q, B;
        return (B = (Q = A === null || A === void 0 ? void 0 : A.byteLength) !== null && Q !== void 0 ? Q : A === null || A === void 0 ? void 0 : A.length) !== null && B !== void 0 ? B : 0
    }

    function Es0(A, Q = !0) {
        if (Q && typeof Buffer < "u" && A instanceof Buffer) return 2;
        if (A instanceof Uint8Array) return 1;
        if (typeof A === "string") return 0;
        return -1
    }
});
var Ns0 = U((qs0) => {
    Object.defineProperty(qs0, "__esModule", {
        value: !0
    });
    qs0.createBufferedReadable = zJ4;
    var CJ4 = UA("node:stream"),
        ws0 = OE1(),
        Fv = $s0(),
        EJ4 = hm();

    function zJ4(A, Q, B) {
        if ((0, EJ4.isReadableStream)(A)) return (0, Fv.createBufferedReadableStream)(A, Q, B);
        let G = new CJ4.Readable({
                read() {}
            }),
            Z = !1,
            I = 0,
            Y = ["", new ws0.ByteArrayCollector((W) => new Uint8Array(W)), new ws0.ByteArrayCollector((W) => Buffer.from(new Uint8Array(W)))],
            J = -1;
        return A.on("data", (W) => {
            let X = (0, Fv.modeOf)(W, !0);
            if (J !== X) {
                if (J >= 0) G.push((0, Fv.flush)(Y, J));
                J = X
            }
            if (J === -1) {
                G.push(W);
                return
            }
            let F = (0, Fv.sizeOf)(W);
            I += F;
            let V = (0, Fv.sizeOf)(Y[J]);
            if (F >= Q && V === 0) G.push(W);
            else {
                let K = (0, Fv.merge)(Y, J, W);
                if (!Z && I > Q * 2) Z = !0, B === null || B === void 0 || B.warn(`@smithy/util-stream - stream chunk size ${F} is below threshold of ${Q}, automatically buffering.`);
                if (K >= Q) G.push((0, Fv.flush)(Y, J))
            }