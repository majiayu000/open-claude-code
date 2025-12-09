/**
 * Claude Code Decompiled
 * Category: api
 * File: 17/30
 * Lines: 216631 - 218129 (1499 lines)
 * Original file: cli.js
 */

                case "Infinity":
                    return 1 / 0;
                case "-Infinity":
                    return -1 / 0;
                default:
                    throw Error(`Unable to parse float value: ${A}`)
            }
        }, "parseFloatString"),
        MfB = HB((A) => {
            if (typeof A === "string") return SwA(uGA(A));
            return SwA(A)
        }, "strictParseLong"),
        fy6 = MfB,
        hy6 = HB((A) => {
            if (typeof A === "string") return Sp1(uGA(A));
            return Sp1(A)
        }, "strictParseInt32"),
        hGA = HB((A) => {
            if (typeof A === "string") return _p1(uGA(A));
            return _p1(A)
        }, "strictParseShort"),
        OfB = HB((A) => {
            if (typeof A === "string") return kp1(uGA(A));
            return kp1(A)
        }, "strictParseByte"),
        _tA = HB((A) => {
            return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter((Q) => !Q.includes("stackTraceWarning")).join(`
`)
        }, "stackTraceWarning"),
        _wA = {
            warn: console.warn
        },
        gy6 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        fp1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function RfB(A) {
        let Q = A.getUTCFullYear(),
            B = A.getUTCMonth(),
            G = A.getUTCDay(),
            Z = A.getUTCDate(),
            I = A.getUTCHours(),
            Y = A.getUTCMinutes(),
            J = A.getUTCSeconds(),
            W = Z < 10 ? `0${Z}` : `${Z}`,
            X = I < 10 ? `0${I}` : `${I}`,
            F = Y < 10 ? `0${Y}` : `${Y}`,
            V = J < 10 ? `0${J}` : `${J}`;
        return `${gy6[G]}, ${W} ${fp1[B]} ${Q} ${X}:${F}:${V} GMT`
    }
    HB(RfB, "dateToUtcString");
    var uy6 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
        my6 = HB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = uy6.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X] = Q, F = hGA(gGA(G)), V = i_(Z, "month", 1, 12), K = i_(I, "day", 1, 31);
            return PwA(F, V, K, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            })
        }, "parseRfc3339DateTime"),
        dy6 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
        cy6 = HB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = dy6.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X, F] = Q, V = hGA(gGA(G)), K = i_(Z, "month", 1, 12), D = i_(I, "day", 1, 31), H = PwA(V, K, D, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            });
            if (F.toUpperCase() != "Z") H.setTime(H.getTime() - Bx6(F));
            return H
        }, "parseRfc3339DateTimeWithOffset"),
        py6 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        ly6 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        iy6 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
        ny6 = HB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
            let Q = py6.exec(A);
            if (Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return PwA(hGA(gGA(I)), Pp1(Z), i_(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                })
            }
            if (Q = ly6.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return oy6(PwA(sy6(I), Pp1(Z), i_(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                }))
            }
            if (Q = iy6.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return PwA(hGA(gGA(X)), Pp1(G), i_(Z.trimLeft(), "day", 1, 31), {
                    hours: I,
                    minutes: Y,
                    seconds: J,
                    fractionalMilliseconds: W
                })
            }
            throw TypeError("Invalid RFC-7231 date-time value")
        }, "parseRfc7231DateTime"),
        ay6 = HB((A) => {
            if (A === null || A === void 0) return;
            let Q;
            if (typeof A === "number") Q = A;
            else if (typeof A === "string") Q = vp1(A);
            else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
            if (Number.isNaN(Q) || Q === 1 / 0 || Q === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(Q * 1000))
        }, "parseEpochTimestamp"),
        PwA = HB((A, Q, B, G) => {
            let Z = Q - 1;
            return ey6(A, Z, B), new Date(Date.UTC(A, Z, B, i_(G.hours, "hour", 0, 23), i_(G.minutes, "minute", 0, 59), i_(G.seconds, "seconds", 0, 60), Qx6(G.fractionalMilliseconds)))
        }, "buildDate"),
        sy6 = HB((A) => {
            let Q = new Date().getUTCFullYear(),
                B = Math.floor(Q / 100) * 100 + hGA(gGA(A));
            if (B < Q) return B + 100;
            return B
        }, "parseTwoDigitYear"),
        ry6 = 1576800000000,
        oy6 = HB((A) => {
            if (A.getTime() - new Date().getTime() > ry6) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
            return A
        }, "adjustRfc850Year"),
        Pp1 = HB((A) => {
            let Q = fp1.indexOf(A);
            if (Q < 0) throw TypeError(`Invalid month: ${A}`);
            return Q + 1
        }, "parseMonthByShortName"),
        ty6 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        ey6 = HB((A, Q, B) => {
            let G = ty6[Q];
            if (Q === 1 && Ax6(A)) G = 29;
            if (B > G) throw TypeError(`Invalid day for ${fp1[Q]} in ${A}: ${B}`)
        }, "validateDayOfMonth"),
        Ax6 = HB((A) => {
            return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
        }, "isLeapYear"),
        i_ = HB((A, Q, B, G) => {
            let Z = OfB(gGA(A));
            if (Z < B || Z > G) throw TypeError(`${Q} must be between ${B} and ${G}, inclusive`);
            return Z
        }, "parseDateValue"),
        Qx6 = HB((A) => {
            if (A === null || A === void 0) return 0;
            return NfB("0." + A) * 1000
        }, "parseMilliseconds"),
        Bx6 = HB((A) => {
            let Q = A[0],
                B = 1;
            if (Q == "+") B = 1;
            else if (Q == "-") B = -1;
            else throw TypeError(`Offset direction, ${Q}, must be "+" or "-"`);
            let G = Number(A.substring(1, 3)),
                Z = Number(A.substring(4, 6));
            return B * (G * 60 + Z) * 60 * 1000
        }, "parseOffsetToMilliseconds"),
        gGA = HB((A) => {
            let Q = 0;
            while (Q < A.length - 1 && A.charAt(Q) === "0") Q++;
            if (Q === 0) return A;
            return A.slice(Q)
        }, "stripLeadingZeroes"),
        TfB = class A extends Error {
            constructor(Q) {
                super(Q.message);
                Object.setPrototypeOf(this, A.prototype), this.name = Q.name, this.$fault = Q.$fault, this.$metadata = Q.$metadata
            }
        };
    HB(TfB, "ServiceException");
    var Gx6 = TfB,
        PfB = HB((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        jfB = HB(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = Ix6(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: (Q == null ? void 0 : Q.code) || (Q == null ? void 0 : Q.Code) || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw PfB(Y, Q)
        }, "throwDefaultError"),
        Zx6 = HB((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                jfB({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        Ix6 = HB((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        Yx6 = HB((A) => {
            switch (A) {
                case "standard":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "in-region":
                    return {
                        retryMode: "standard", connectionTimeout: 1100
                    };
                case "cross-region":
                    return {
                        retryMode: "standard", connectionTimeout: 3100
                    };
                case "mobile":
                    return {
                        retryMode: "standard", connectionTimeout: 30000
                    };
                default:
                    return {}
            }
        }, "loadConfigsForDefaultMode"),
        DfB = !1,
        Jx6 = HB((A) => {
            if (A && !DfB && parseInt(A.substring(1, A.indexOf("."))) < 14) DfB = !0
        }, "emitWarningIfUnsupportedVersion"),
        Wx6 = HB((A) => {
            let Q = [];
            for (let B in jp1.AlgorithmId) {
                let G = jp1.AlgorithmId[B];
                if (A[G] === void 0) continue;
                Q.push({
                    algorithmId: () => G,
                    checksumConstructor: () => A[G]
                })
            }
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
        Xx6 = HB((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        Fx6 = HB((A) => {
            let Q = A.retryStrategy;
            return {
                setRetryStrategy(B) {
                    Q = B
                },
                retryStrategy() {
                    return Q
                }
            }
        }, "getRetryConfiguration"),
        Vx6 = HB((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        SfB = HB((A) => {
            return {
                ...Wx6(A),
                ...Fx6(A)
            }
        }, "getDefaultExtensionConfiguration"),
        Kx6 = SfB,
        Dx6 = HB((A) => {
            return {
                ...Xx6(A),
                ...Vx6(A)
            }
        }, "resolveDefaultRuntimeConfig");

    function ktA(A) {
        return encodeURIComponent(A).replace(/[!'()*]/g, function(Q) {
            return "%" + Q.charCodeAt(0).toString(16).toUpperCase()
        })
    }
    HB(ktA, "extendedEncodeURIComponent");
    var Hx6 = HB((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        _fB = HB((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = _fB(A[B]);
            return A
        }, "getValueFromTextNode"),
        kwA = HB(function() {
            let A = Object.getPrototypeOf(this).constructor,
                B = new(Function.bind.apply(String, [null, ...arguments]));
            return Object.setPrototypeOf(B, A.prototype), B
        }, "StringWrapper");
    kwA.prototype = Object.create(String.prototype, {
        constructor: {
            value: kwA,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
    Object.setPrototypeOf(kwA, String);
    var kfB = class A extends kwA {
        deserializeJSON() {
            return JSON.parse(super.toString())
        }
        toJSON() {
            return super.toString()
        }
        static fromObject(Q) {
            if (Q instanceof A) return Q;
            else if (Q instanceof String || typeof Q === "string") return new A(Q);
            return new A(JSON.stringify(Q))
        }
    };
    HB(kfB, "LazyJsonString");
    var Cx6 = kfB;

    function hp1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, Ux6(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            yfB(G, null, I, Y)
        }
        return G
    }
    HB(hp1, "map");
    var Ex6 = HB((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        zx6 = HB((A, Q) => {
            let B = {};
            for (let G in Q) yfB(B, A, Q, G);
            return B
        }, "take"),
        Ux6 = HB((A, Q, B) => {
            return hp1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        yfB = HB((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = $x6, W = wx6, X = G] = Y;
                if (typeof J === "function" && J(Q[X]) || typeof J !== "function" && !!J) A[G] = W(Q[X]);
                return
            }
            let [Z, I] = B[G];
            if (typeof I === "function") {
                let Y, J = Z === void 0 && (Y = I()) != null,
                    W = typeof Z === "function" && !!Z(void 0) || typeof Z !== "function" && !!Z;
                if (J) A[G] = Y;
                else if (W) A[G] = I()
            } else {
                let Y = Z === void 0 && I != null,
                    J = typeof Z === "function" && !!Z(I) || typeof Z !== "function" && !!Z;
                if (Y || J) A[G] = I
            }
        }, "applyInstruction"),
        $x6 = HB((A) => A != null, "nonNullish"),
        wx6 = HB((A) => A, "pass"),
        qx6 = HB((A, Q, B, G, Z, I) => {
            if (Q != null && Q[B] !== void 0) {
                let Y = G();
                if (Y.length <= 0) throw Error("Empty value provided for input HTTP label: " + B + ".");
                A = A.replace(Z, I ? Y.split("/").map((J) => ktA(J)).join("/") : ktA(Y))
            } else throw Error("No value provided for input HTTP label: " + B + ".");
            return A
        }, "resolvedPath"),
        Nx6 = HB((A) => {
            if (A !== A) return "NaN";
            switch (A) {
                case 1 / 0:
                    return "Infinity";
                case -1 / 0:
                    return "-Infinity";
                default:
                    return A
            }
        }, "serializeFloat"),
        yp1 = HB((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(yp1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = yp1(A[B])
                }
                return Q
            }
            return A
        }, "_json");

    function xfB(A, Q, B) {
        if (B <= 0 || !Number.isInteger(B)) throw Error("Invalid number of delimiters (" + B + ") for splitEvery.");
        let G = A.split(Q);
        if (B === 1) return G;
        let Z = [],
            I = "";
        for (let Y = 0; Y < G.length; Y++) {
            if (I === "") I = G[Y];
            else I += Q + G[Y];
            if ((Y + 1) % B === 0) Z.push(I), I = ""
        }
        if (I !== "") Z.push(I);
        return Z
    }
    HB(xfB, "splitEvery")
});
var ifB = U((b2G, lfB) => {
    var {
        defineProperty: xtA,
        getOwnPropertyDescriptor: Lx6,
        getOwnPropertyNames: Mx6
    } = Object, Ox6 = Object.prototype.hasOwnProperty, vtA = (A, Q) => xtA(A, "name", {
        value: Q,
        configurable: !0
    }), Rx6 = (A, Q) => {
        for (var B in Q) xtA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Tx6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Mx6(Q))
                if (!Ox6.call(A, Z) && Z !== B) xtA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Lx6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Px6 = (A) => Tx6(xtA({}, "__esModule", {
        value: !0
    }), A), ffB = {};
    Rx6(ffB, {
        AlgorithmId: () => mfB,
        EndpointURLScheme: () => ufB,
        FieldPosition: () => dfB,
        HttpApiKeyAuthLocation: () => gfB,
        HttpAuthLocation: () => hfB,
        IniSectionType: () => cfB,
        RequestHandlerProtocol: () => pfB,
        SMITHY_CONTEXT_KEY: () => yx6,
        getDefaultClientConfiguration: () => _x6,
        resolveDefaultRuntimeConfig: () => kx6
    });
    lfB.exports = Px6(ffB);
    var hfB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(hfB || {}),
        gfB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(gfB || {}),
        ufB = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(ufB || {}),
        mfB = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(mfB || {}),
        jx6 = vtA((A) => {
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
        Sx6 = vtA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        _x6 = vtA((A) => {
            return jx6(A)
        }, "getDefaultClientConfiguration"),
        kx6 = vtA((A) => {
            return Sx6(A)
        }, "resolveDefaultRuntimeConfig"),
        dfB = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(dfB || {}),
        yx6 = "__smithy_context",
        cfB = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(cfB || {}),
        pfB = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(pfB || {})
});
var tfB = U((f2G, ofB) => {
    var {
        defineProperty: btA,
        getOwnPropertyDescriptor: xx6,
        getOwnPropertyNames: vx6
    } = Object, bx6 = Object.prototype.hasOwnProperty, pp = (A, Q) => btA(A, "name", {
        value: Q,
        configurable: !0
    }), fx6 = (A, Q) => {
        for (var B in Q) btA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, hx6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of vx6(Q))
                if (!bx6.call(A, Z) && Z !== B) btA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = xx6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, gx6 = (A) => hx6(btA({}, "__esModule", {
        value: !0
    }), A), nfB = {};
    fx6(nfB, {
        Field: () => dx6,
        Fields: () => cx6,
        HttpRequest: () => px6,
        HttpResponse: () => lx6,
        IHttpRequest: () => afB.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => ux6,
        isValidHostname: () => rfB,
        resolveHttpHandlerRuntimeConfig: () => mx6
    });
    ofB.exports = gx6(nfB);
    var ux6 = pp((A) => {
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
        mx6 = pp((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        afB = ifB(),
        dx6 = class {
            static {
                pp(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = afB.FieldPosition.HEADER,
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
        cx6 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                pp(this, "Fields")
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
        px6 = class A {
            static {
                pp(this, "HttpRequest")
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
                if (B.query) B.query = sfB(B.query);
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

    function sfB(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    pp(sfB, "cloneQuery");
    var lx6 = class {
        static {
            pp(this, "HttpResponse")
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

    function rfB(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    pp(rfB, "isValidHostname")
});
var JhB = U((m2G, YhB) => {
    var {
        defineProperty: ftA,
        getOwnPropertyDescriptor: ix6,
        getOwnPropertyNames: nx6
    } = Object, ax6 = Object.prototype.hasOwnProperty, ywA = (A, Q) => ftA(A, "name", {
        value: Q,
        configurable: !0
    }), sx6 = (A, Q) => {
        for (var B in Q) ftA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, rx6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of nx6(Q))
                if (!ax6.call(A, Z) && Z !== B) ftA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ix6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ox6 = (A) => rx6(ftA({}, "__esModule", {
        value: !0
    }), A), efB = {};
    sx6(efB, {
        eventStreamHandlingMiddleware: () => BhB,
        eventStreamHandlingMiddlewareOptions: () => GhB,
        eventStreamHeaderMiddleware: () => ZhB,
        eventStreamHeaderMiddlewareOptions: () => IhB,
        getEventStreamPlugin: () => tx6,
        resolveEventStreamConfig: () => AhB
    });
    YhB.exports = ox6(efB);

    function AhB(A) {
        let {
            signer: Q,
            signer: B
        } = A, G = Object.assign(A, {
            eventSigner: Q,
            messageSigner: B
        }), Z = G.eventStreamPayloadHandlerProvider(G);
        return Object.assign(G, {
            eventStreamPayloadHandler: Z
        })
    }
    ywA(AhB, "resolveEventStreamConfig");
    var QhB = tfB(),
        BhB = ywA((A) => (Q, B) => async (G) => {
            let {
                request: Z
            } = G;
            if (!QhB.HttpRequest.isInstance(Z)) return Q(G);
            return A.eventStreamPayloadHandler.handle(Q, G, B)
        }, "eventStreamHandlingMiddleware"),
        GhB = {
            tags: ["EVENT_STREAM", "SIGNATURE", "HANDLE"],
            name: "eventStreamHandlingMiddleware",
            relation: "after",
            toMiddleware: "awsAuthMiddleware",
            override: !0
        },
        ZhB = ywA((A) => async (Q) => {
            let {
                request: B
            } = Q;
            if (!QhB.HttpRequest.isInstance(B)) return A(Q);
            return B.headers = {
                ...B.headers,
                "content-type": "application/vnd.amazon.eventstream",
                "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS"
            }, A({
                ...Q,
                request: B
            })
        }, "eventStreamHeaderMiddleware"),
        IhB = {
            step: "build",
            tags: ["EVENT_STREAM", "HEADER", "CONTENT_TYPE", "CONTENT_SHA256"],
            name: "eventStreamHeaderMiddleware",
            override: !0
        },
        tx6 = ywA((A) => ({
            applyToStack: ywA((Q) => {
                Q.addRelativeTo(BhB(A), GhB), Q.add(ZhB, IhB)
            }, "applyToStack")
        }), "getEventStreamPlugin")
});
var FhB = U((d2G, XhB) => {
    var {
        defineProperty: htA,
        getOwnPropertyDescriptor: ex6,
        getOwnPropertyNames: Av6
    } = Object, Qv6 = Object.prototype.hasOwnProperty, Bv6 = (A, Q) => htA(A, "name", {
        value: Q,
        configurable: !0
    }), Gv6 = (A, Q) => {
        for (var B in Q) htA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Zv6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Av6(Q))
                if (!Qv6.call(A, Z) && Z !== B) htA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ex6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Iv6 = (A) => Zv6(htA({}, "__esModule", {
        value: !0
    }), A), WhB = {};
    Gv6(WhB, {
        resolveEventStreamSerdeConfig: () => Yv6
    });
    XhB.exports = Iv6(WhB);
    var Yv6 = Bv6((A) => Object.assign(A, {
        eventStreamMarshaller: A.eventStreamSerdeProvider(A)
    }), "resolveEventStreamSerdeConfig")
});
var up1 = U((VhB) => {
    Object.defineProperty(VhB, "__esModule", {
        value: !0
    });
    VhB.resolveHttpAuthSchemeConfig = VhB.defaultBedrockRuntimeHttpAuthSchemeProvider = VhB.defaultBedrockRuntimeHttpAuthSchemeParametersProvider = void 0;
    var Jv6 = OV(),
        gp1 = K7(),
        Wv6 = async (A, Q, B) => {
            return {
                operation: (0, gp1.getSmithyContext)(Q).operation,
                region: await (0, gp1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    VhB.defaultBedrockRuntimeHttpAuthSchemeParametersProvider = Wv6;

    function Xv6(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "bedrock",
                region: A.region
            },
            propertiesExtractor: (Q, B) => ({
                signingProperties: {
                    config: Q,
                    context: B
                }
            })
        }
    }
    var Fv6 = (A) => {
        let Q = [];
        switch (A.operation) {
            default:
                Q.push(Xv6(A))
        }
        return Q
    };
    VhB.defaultBedrockRuntimeHttpAuthSchemeProvider = Fv6;
    var Vv6 = (A) => {
        let Q = (0, Jv6.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, gp1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    VhB.resolveHttpAuthSchemeConfig = Vv6
});
var mhB = U((p2G, mtA) => {
    var DhB, HhB, ChB, EhB, zhB, UhB, $hB, whB, qhB, NhB, LhB, MhB, OhB, gtA, mp1, RhB, ThB, PhB, mGA, jhB, ShB, _hB, khB, yhB, xhB, vhB, bhB, fhB, utA, hhB, ghB, uhB;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof mtA === "object" && typeof p2G === "object") A(B(Q, B(p2G)));
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
        DhB = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, HhB = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, ChB = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, EhB = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, zhB = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, UhB = function(I, Y, J, W, X, F) {
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
        }, $hB = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, whB = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, qhB = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, NhB = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, LhB = function(I, Y, J, W) {
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
        }, MhB = function(I, Y) {
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
        }, OhB = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) utA(Y, I, J)
        }, utA = Object.create ? function(I, Y, J, W) {
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
        }, gtA = function(I) {
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
        }, mp1 = function(I, Y) {
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
        }, RhB = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(mp1(arguments[Y]));
            return I
        }, ThB = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, PhB = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, mGA = function(I) {
            return this instanceof mGA ? (this.v = I, this) : new mGA(I)
        }, jhB = function(I, Y, J) {
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
                w.value instanceof mGA ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, ShB = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: mGA(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, _hB = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof gtA === "function" ? gtA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, khB = function(I, Y) {
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
        yhB = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") utA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, xhB = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, vhB = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, bhB = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, fhB = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, hhB = function(I, Y, J) {
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
        ghB = function(I) {
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
                if (W === 1) return I.hasError ? Promise.reject(I.error) : Promise.resolve();
                if (I.hasError) throw I.error
            }
            return X()
        }, uhB = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", DhB), A("__assign", HhB), A("__rest", ChB), A("__decorate", EhB), A("__param", zhB), A("__esDecorate", UhB), A("__runInitializers", $hB), A("__propKey", whB), A("__setFunctionName", qhB), A("__metadata", NhB), A("__awaiter", LhB), A("__generator", MhB), A("__exportStar", OhB), A("__createBinding", utA), A("__values", gtA), A("__read", mp1), A("__spread", RhB), A("__spreadArrays", ThB), A("__spreadArray", PhB), A("__await", mGA), A("__asyncGenerator", jhB), A("__asyncDelegator", ShB), A("__asyncValues", _hB), A("__makeTemplateObject", khB), A("__importStar", yhB), A("__importDefault", xhB), A("__classPrivateFieldGet", vhB), A("__classPrivateFieldSet", bhB), A("__classPrivateFieldIn", fhB), A("__addDisposableResource", hhB), A("__disposeResources", ghB), A("__rewriteRelativeImportExtension", uhB)
    })
});
var dhB = U((l2G, Hv6) => {
    Hv6.exports = {
        name: "@aws-sdk/client-bedrock-runtime",
        description: "AWS SDK for JavaScript Bedrock Runtime Client for Node.js, Browser and React Native",
        version: "3.797.0",
        scripts: {
            build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline client-bedrock-runtime",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            "extract:docs": "api-extractor run --local",
            "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-runtime"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: !1,
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.796.0",
            "@aws-sdk/credential-provider-node": "3.797.0",
            "@aws-sdk/eventstream-handler-node": "3.775.0",
            "@aws-sdk/middleware-eventstream": "3.775.0",
            "@aws-sdk/middleware-host-header": "3.775.0",
            "@aws-sdk/middleware-logger": "3.775.0",
            "@aws-sdk/middleware-recursion-detection": "3.775.0",
            "@aws-sdk/middleware-user-agent": "3.796.0",
            "@aws-sdk/region-config-resolver": "3.775.0",
            "@aws-sdk/types": "3.775.0",
            "@aws-sdk/util-endpoints": "3.787.0",
            "@aws-sdk/util-user-agent-browser": "3.775.0",
            "@aws-sdk/util-user-agent-node": "3.796.0",
            "@smithy/config-resolver": "^4.1.0",
            "@smithy/core": "^3.2.0",
            "@smithy/eventstream-serde-browser": "^4.0.2",
            "@smithy/eventstream-serde-config-resolver": "^4.1.0",
            "@smithy/eventstream-serde-node": "^4.0.2",
            "@smithy/fetch-http-handler": "^5.0.2",
            "@smithy/hash-node": "^4.0.2",
            "@smithy/invalid-dependency": "^4.0.2",
            "@smithy/middleware-content-length": "^4.0.2",
            "@smithy/middleware-endpoint": "^4.1.0",
            "@smithy/middleware-retry": "^4.1.0",
            "@smithy/middleware-serde": "^4.0.3",
            "@smithy/middleware-stack": "^4.0.2",
            "@smithy/node-config-provider": "^4.0.2",
            "@smithy/node-http-handler": "^4.0.4",
            "@smithy/protocol-http": "^5.1.0",
            "@smithy/smithy-client": "^4.2.0",
            "@smithy/types": "^4.2.0",
            "@smithy/url-parser": "^4.0.2",
            "@smithy/util-base64": "^4.0.0",
            "@smithy/util-body-length-browser": "^4.0.0",
            "@smithy/util-body-length-node": "^4.0.0",
            "@smithy/util-defaults-mode-browser": "^4.0.8",
            "@smithy/util-defaults-mode-node": "^4.0.8",
            "@smithy/util-endpoints": "^3.0.2",
            "@smithy/util-middleware": "^4.0.2",
            "@smithy/util-retry": "^4.0.2",
            "@smithy/util-stream": "^4.2.0",
            "@smithy/util-utf8": "^4.0.0",
            "@types/uuid": "^9.0.1",
            tslib: "^2.6.2",
            uuid: "^9.0.1"
        },
        devDependencies: {
            "@tsconfig/node18": "18.2.4",
            "@types/node": "^18.19.69",
            concurrently: "7.0.0",
            "downlevel-dts": "0.10.1",
            rimraf: "3.0.2",
            typescript: "~5.2.2"
        },
        engines: {
            node: ">=18.0.0"
        },
        typesVersions: {
            "<4.0": {
                "dist-types/*": ["dist-types/ts3.4/*"]
            }
        },
        files: ["dist-*/**"],
        author: {
            name: "AWS SDK for JavaScript Team",
            url: "https://aws.amazon.com/javascript/"
        },
        license: "Apache-2.0",
        browser: {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
        },
        "react-native": {
            "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
        },
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-runtime",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "clients/client-bedrock-runtime"
        }
    }
});
var cp1 = U((i2G, ptA) => {
    var chB, phB, lhB, ihB, nhB, ahB, shB, rhB, ohB, thB, ehB, AgB, QgB, dtA, dp1, BgB, GgB, ZgB, dGA, IgB, YgB, JgB, WgB, XgB, FgB, VgB, KgB, DgB, ctA, HgB, CgB, EgB;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof ptA === "object" && typeof i2G === "object") A(B(Q, B(i2G)));
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