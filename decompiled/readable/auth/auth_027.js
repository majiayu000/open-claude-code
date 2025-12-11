/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_027.js
 * 处理时间: 2025-12-09T03:41:36.637Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 27/61
 * Lines: 119376 - 120875 (1500 lines)
 * Original file: cli.js
 */

            return YCA(F, V, K, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            })
        }, "parseRfc3339DateTime"),
        x$8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])TextComponent/),
        v$8 = FB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = x$8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X, F] = Q, V = b6A(f6A(G)), K = bS(Z, "month", 1, 12), D = bS(I, "day", 1, 31), H = YCA(V, K, D, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            });
            if (F.toUpperCase() != "Z") H.setTime(H.getTime() - a$8(F));
            return H
        }, "parseRfc3339DateTimeWithOffset"),
        b$8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        f$8 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        h$8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})TextComponent/),
        g$8 = FB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
            let Q = b$8.exec(A);
            if (Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return YCA(b6A(f6A(I)), Yj1(Z), bS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                })
            }
            if (Q = f$8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return c$8(YCA(m$8(I), Yj1(Z), bS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                }))
            }
            if (Q = h$8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return YCA(b6A(f6A(X)), Yj1(G), bS(Z.trimLeft(), "day", 1, 31), {
                    hours: I,
                    minutes: Y,
                    seconds: J,
                    fractionalMilliseconds: W
                })
            }
            throw TypeError("Invalid RFC-7231 date-time value")
        }, "parseRfc7231DateTime"),
        u$8 = FB((A) => {
            if (A === null || A === void 0) return;
            let Q;
            if (typeof A === "number") Q = A;
            else if (typeof A === "string") Q = Dj1(A);
            else if (typeof A === "object" && A.tag === 1) Q = A.value;
            else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
            if (Number.isNaN(Q) || Q === 1 / 0 || Q === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(Q * 1000))
        }, "parseEpochTimestamp"),
        YCA = FB((A, Q, B, G) => {
            let Z = Q - 1;
            return l$8(A, Z, B), new Date(Date.UTC(A, Z, B, bS(G.hours, "hour", 0, 23), bS(G.minutes, "minute", 0, 59), bS(G.seconds, "seconds", 0, 60), n$8(G.fractionalMilliseconds)))
        }, "buildDate"),
        m$8 = FB((A) => {
            let Q = new Date().getUTCFullYear(),
                B = Math.floor(Q / 100) * 100 + b6A(f6A(A));
            if (B < Q) return B + 100;
            return B
        }, "parseTwoDigitYear"),
        d$8 = 1576800000000,
        c$8 = FB((A) => {
            if (A.getTime() - new Date().getTime() > d$8) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
            return A
        }, "adjustRfc850Year"),
        Yj1 = FB((A) => {
            let Q = Cj1.indexOf(A);
            if (Q < 0) throw TypeError(`Invalid month: TextComponent{A}`);
            return Q + 1
        }, "parseMonthByShortName"),
        p$8 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        l$8 = FB((A, Q, B) => {
            let G = p$8[Q];
            if (Q === 1 && i$8(A)) G = 29;
            if (B > G) throw TypeError(`Invalid day for TextComponent{Cj1[Q]} in TextComponent{A}: TextComponent{B}`)
        }, "validateDayOfMonth"),
        i$8 = FB((A) => {
            return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
        }, "isLeapYear"),
        bS = FB((A, Q, B, G) => {
            let Z = RgQ(f6A(A));
            if (Z < B || Z > G) throw TypeError(`TextComponent{Q} must be between TextComponent{B} and TextComponent{G}, inclusive`);
            return Z
        }, "parseDateValue"),
        n$8 = FB((A) => {
            if (A === null || A === void 0) return 0;
            return LgQ("0." + A) * 1000
        }, "parseMilliseconds"),
        a$8 = FB((A) => {
            let Q = A[0],
                B = 1;
            if (Q == "+") B = 1;
            else if (Q == "-") B = -1;
            else throw TypeError(`Offset direction, TextComponent{Q}, must be "+" or "-"`);
            let G = Number(A.substring(1, 3)),
                Z = Number(A.substring(4, 6));
            return B * (G * 60 + Z) * 60 * 1000
        }, "parseOffsetToMilliseconds"),
        f6A = FB((A) => {
            let Q = 0;
            while (Q < A.length - 1 && A.charAt(Q) === "0") Q++;
            if (Q === 0) return A;
            return A.slice(Q)
        }, "stripLeadingZeroes"),
        s$8 = class A extends Error {
            static {
                FB(this, "ServiceException")
            }
            constructor(Q) {
                super(Q.message);
                Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = Q.name, this.$fault = Q.$fault, this.$metadata = Q.$metadata
            }
            static isInstance(Q) {
                if (!Q) return !1;
                let B = Q;
                return A.prototype.isPrototypeOf(B) || Boolean(B.$fault) && Boolean(B.$metadata) && (B.$fault === "client" || B.$fault === "server")
            }
            static[Symbol.hasInstance](Q) {
                if (!Q) return !1;
                let B = Q;
                if (this === A) return A.isInstance(Q);
                if (A.isInstance(Q)) {
                    if (B.name && this.name) return this.prototype.isPrototypeOf(Q) || B.name === this.name;
                    return this.prototype.isPrototypeOf(Q)
                }
                return !1
            }
        },
        PgQ = FB((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        jgQ = FB(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = o$8(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw PgQ(Y, Q)
        }, "throwDefaultError"),
        r$8 = FB((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                jgQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        o$8 = FB((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        t$8 = FB((A) => {
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
        UgQ = !1,
        e$8 = FB((A) => {
            if (A && !UgQ && parseInt(A.substring(1, A.indexOf("."))) < 16) UgQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        Aw8 = FB((A) => {
            let Q = [];
            for (let B in Jj1.AlgorithmId) {
                let G = Jj1.AlgorithmId[B];
                if (A[G] === void 0) continue;
                Q.push({
                    algorithmId: () => G,
                    checksumConstructor: () => A[G]
                })
            }
            return {
                addChecksumAlgorithm(B) {
                    Q.push(B)
                },
                checksumAlgorithms() {
                    return Q
                }
            }
        }, "getChecksumConfiguration"),
        Qw8 = FB((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        Bw8 = FB((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        Gw8 = FB((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        SgQ = FB((A) => {
            return Object.assign(Aw8(A), Bw8(A))
        }, "getDefaultExtensionConfiguration"),
        Zw8 = SgQ,
        Iw8 = FB((A) => {
            return Object.assign(Qw8(A), Gw8(A))
        }, "resolveDefaultRuntimeConfig"),
        Yw8 = FB((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        _gQ = FB((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = _gQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        Jw8 = FB((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        Io = FB(function(Q) {
            return Object.assign(new String(Q), {
                deserializeJSON() {
                    return JSON.parse(String(Q))
                },
                toString() {
                    return String(Q)
                },
                toJSON() {
                    return String(Q)
                }
            })
        }, "LazyJsonString");
    Io.from = (A) => {
        if (A && typeof A === "object" && (A instanceof Io || ("deserializeJSON" in A))) return A;
        else if (typeof A === "string" || Object.getPrototypeOf(A) === String.prototype) return Io(String(A));
        return Io(JSON.stringify(A))
    };
    Io.fromObject = Io.from;
    var Ww8 = class {
        static {
            FB(this, "NoOpLogger")
        }
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
    };

    function Ej1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, Vw8(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            kgQ(G, null, I, Y)
        }
        return G
    }
    FB(Ej1, "map");
    var Xw8 = FB((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        Fw8 = FB((A, Q) => {
            let B = {};
            for (let G in Q) kgQ(B, A, Q, G);
            return B
        }, "take"),
        Vw8 = FB((A, Q, B) => {
            return Ej1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        kgQ = FB((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = Kw8, W = Dw8, X = G] = Y;
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
        Kw8 = FB((A) => A != null, "nonNullish"),
        Dw8 = FB((A) => A, "pass");

    function ygQ(A) {
        if (A.includes(",") || A.includes('"')) A = `"TextComponent{A.replace(/"/g,"\\\"")}"`;
        return A
    }
    FB(ygQ, "quoteHeader");
    var Hw8 = FB((A) => {
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
        Cw8 = FB((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        Vj1 = FB((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(Vj1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = Vj1(A[B])
                }
                return Q
            }
            return A
        }, "_json");

    function xgQ(A, Q, B) {
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
    FB(xgQ, "splitEvery");
    var Ew8 = FB((A) => {
        let Q = A.length,
            B = [],
            G = !1,
            Z = void 0,
            I = 0;
        for (let Y = 0; Y < Q; ++Y) {
            let J = A[Y];
            switch (J) {
                case '"':
                    if (Z !== "\\") G = !G;
                    break;
                case ",":
                    if (!G) B.push(A.slice(I, Y)), I = Y + 1;
                    break;
                default:
            }
            Z = J
        }
        return B.push(A.slice(I)), B.map((Y) => {
            Y = Y.trim();
            let J = Y.length;
            if (J < 2) return Y;
            if (Y[0] === '"' && Y[J - 1] === '"') Y = Y.slice(1, J - 1);
            return Y.replace(/\\"/g, '"')
        })
    }, "splitHeader")
});
var mgQ = moduleWrapper((e$7, ugQ) => {
    var {
        defineProperty: gdA,
        getOwnPropertyDescriptor: zw8,
        getOwnPropertyNames: Uw8
    } = Object, $w8 = Object.prototype.hasOwnProperty, rz = (A, Q) => gdA(A, "name", {
        value: Q,
        configurable: !0
    }), ww8 = (A, Q) => {
        for (var B in Q) gdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qw8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Uw8(Q))
                if (!$w8.call(A, Z) && Z !== B) gdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zw8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Nw8 = (A) => qw8(gdA({}, "__esModule", {
        value: !0
    }), A), bgQ = {};
    ww8(bgQ, {
        _toBool: () => Mw8,
        _toNum: () => Ow8,
        _toStr: () => Lw8,
        awsExpectUnion: () => Tw8,
        loadRestJsonErrorCode: () => Sw8,
        loadRestXmlErrorCode: () => xw8,
        parseJsonBody: () => hgQ,
        parseJsonErrorBody: () => jw8,
        parseXmlBody: () => ggQ,
        parseXmlErrorBody: () => yw8
    });
    ugQ.exports = Nw8(bgQ);
    var Lw8 = rz((A) => {
            if (A == null) return A;
            if (typeof A === "number" || typeof A === "bigint") {
                let Q = Error(`Received number TextComponent{A} where a string was expected.`);
                return Q.name = "Warning", console.warn(Q), String(A)
            }
            if (typeof A === "boolean") {
                let Q = Error(`Received boolean TextComponent{A} where a string was expected.`);
                return Q.name = "Warning", console.warn(Q), String(A)
            }
            return A
        }, "_toStr"),
        Mw8 = rz((A) => {
            if (A == null) return A;
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (A !== "" && Q !== "false" && Q !== "true") {
                    let B = Error(`Received string "TextComponent{A}" where a boolean was expected.`);
                    B.name = "Warning", console.warn(B)
                }
                return A !== "" && Q !== "false"
            }
            return A
        }, "_toBool"),
        Ow8 = rz((A) => {
            if (A == null) return A;
            if (typeof A === "string") {
                let Q = Number(A);
                if (Q.toString() !== A) {
                    let B = Error(`Received string "TextComponent{A}" where a number was expected.`);
                    return B.name = "Warning", console.warn(B), A
                }
                return Q
            }
            return A
        }, "_toNum"),
        Rw8 = hdA(),
        Tw8 = rz((A) => {
            if (A == null) return;
            if (typeof A === "object" && "__type" in A) delete A.__type;
            return (0, Rw8.expectUnion)(A)
        }, "awsExpectUnion"),
        Pw8 = hdA(),
        fgQ = rz((A, Q) => (0, Pw8.collectBody)(A, Q).then((B) => Q.utf8Encoder(B)), "collectBodyString"),
        hgQ = rz((A, Q) => fgQ(A, Q).then((B) => {
            if (B.length) try {
                return JSON.parse(B)
            } catch (G) {
                if (G?.name === "SyntaxError") Object.defineProperty(G, "$responseBodyText", {
                    value: B
                });
                throw G
            }
            return {}
        }), "parseJsonBody"),
        jw8 = rz(async (A, Q) => {
            let B = await hgQ(A, Q);
            return B.message = B.message ?? B.Message, B
        }, "parseJsonErrorBody"),
        Sw8 = rz((A, Q) => {
            let B = rz((I, Y) => Object.keys(I).find((J) => J.toLowerCase() === Y.toLowerCase()), "findKey"),
                G = rz((I) => {
                    let Y = I;
                    if (typeof Y === "number") Y = Y.toString();
                    if (Y.indexOf(",") >= 0) Y = Y.split(",")[0];
                    if (Y.indexOf(":") >= 0) Y = Y.split(":")[0];
                    if (Y.indexOf("#") >= 0) Y = Y.split("#")[1];
                    return Y
                }, "sanitizeErrorCode"),
                Z = B(A.headers, "x-amzn-errortype");
            if (Z !== void 0) return G(A.headers[Z]);
            if (Q.code !== void 0) return G(Q.code);
            if (Q.__type !== void 0) return G(Q.__type)
        }, "loadRestJsonErrorCode"),
        _w8 = hdA(),
        kw8 = ZS(),
        ggQ = rz((A, Q) => fgQ(A, Q).then((B) => {
            if (B.length) {
                let G = new kw8.XMLParser({
                    attributeNamePrefix: "",
                    htmlEntities: !0,
                    ignoreAttributes: !1,
                    ignoreDeclaration: !0,
                    parseTagValue: !1,
                    trimValues: !1,
                    tagValueProcessor: rz((W, X) => X.trim() === "" && X.includes(`
`) ? "" : void 0, "tagValueProcessor")
                });
                G.addEntity("#xD", "\r"), G.addEntity("#10", `
`);
                let Z;
                try {
                    Z = G.parse(B, !0)
                } catch (W) {
                    if (W && typeof W === "object") Object.defineProperty(W, "$responseBodyText", {
                        value: B
                    });
                    throw W
                }
                let I = "#text",
                    Y = Object.keys(Z)[0],
                    J = Z[Y];
                if (J[I]) J[Y] = J[I], delete J[I];
                return (0, _w8.getValueFromTextNode)(J)
            }
            return {}
        }), "parseXmlBody"),
        yw8 = rz(async (A, Q) => {
            let B = await ggQ(A, Q);
            if (B.Error) B.Error.message = B.Error.message ?? B.Error.Message;
            return B
        }, "parseXmlErrorBody"),
        xw8 = rz((A, Q) => {
            if (Q?.Error?.Code !== void 0) return Q.Error.Code;
            if (Q?.Code !== void 0) return Q.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadRestXmlErrorCode")
});
var OV = moduleWrapper((FCA) => {
    Object.defineProperty(FCA, "__esModule", {
        value: !0
    });
    var zj1 = KhQ();
    zj1.__exportStar(xS(), FCA);
    zj1.__exportStar(zgQ(), FCA);
    zj1.__exportStar(mgQ(), FCA)
});
var g6A = moduleWrapper((Qw7, egQ) => {
    var {
        defineProperty: mdA,
        getOwnPropertyDescriptor: vw8,
        getOwnPropertyNames: bw8
    } = Object, fw8 = Object.prototype.hasOwnProperty, Ib = (A, Q) => mdA(A, "name", {
        value: Q,
        configurable: !0
    }), hw8 = (A, Q) => {
        for (var B in Q) mdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, gw8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bw8(Q))
                if (!fw8.call(A, Z) && Z !== B) mdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = vw8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, uw8 = (A) => gw8(mdA({}, "__esModule", {
        value: !0
    }), A), lgQ = {};
    hw8(lgQ, {
        DEFAULT_UA_APP_ID: () => igQ,
        getUserAgentMiddlewareOptions: () => tgQ,
        getUserAgentPlugin: () => aw8,
        resolveUserAgentConfig: () => agQ,
        userAgentMiddleware: () => ogQ
    });
    egQ.exports = uw8(lgQ);
    var mw8 = nB(),
        igQ = void 0;

    function ngQ(A) {
        if (A === void 0) return !0;
        return typeof A === "string" && A.length <= 50
    }
    Ib(ngQ, "isValidUserAgentAppId");

    function agQ(A) {
        let Q = (0, mw8.normalizeProvider)(A.userAgentAppId ?? igQ),
            {
                customUserAgent: B
            } = A;
        return Object.assign(A, {
            customUserAgent: typeof B === "string" ? [
                [B]
            ] : B,
            userAgentAppId: Ib(async () => {
                let G = await Q();
                if (!ngQ(G)) {
                    let Z = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console : A.logger;
                    if (typeof G !== "string") Z?.warn("userAgentAppId must be a string or undefined.");
                    else if (G.length > 50) Z?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.")
                }
                return G
            }, "userAgentAppId")
        })
    }
    Ib(agQ, "resolveUserAgentConfig");
    var dw8 = y6A(),
        cw8 = ffQ(),
        fS = OV(),
        pw8 = /\d{12}\.ddb/;
    async function sgQ(A, Q, B) {
        if (B.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor")(0, fS.setFeature)(A, "PROTOCOL_RPC_V2_CBOR", "M");
        if (typeof Q.retryStrategy === "function") {
            let I = await Q.retryStrategy();
            if (typeof I.acquireInitialRetryToken === "function")
                if (I.constructor?.name?.includes("Adaptive"))(0, fS.setFeature)(A, "RETRY_MODE_ADAPTIVE", "F");
                else(0, fS.setFeature)(A, "RETRY_MODE_STANDARD", "E");
            else(0, fS.setFeature)(A, "RETRY_MODE_LEGACY", "D")
        }
        if (typeof Q.accountIdEndpointMode === "function") {
            let I = A.endpointV2;
            if (String(I?.url?.hostname).match(pw8))(0, fS.setFeature)(A, "ACCOUNT_ID_ENDPOINT", "O");
            switch (await Q.accountIdEndpointMode?.()) {
                case "disabled":
                    (0, fS.setFeature)(A, "ACCOUNT_ID_MODE_DISABLED", "Q");
                    break;
                case "preferred":
                    (0, fS.setFeature)(A, "ACCOUNT_ID_MODE_PREFERRED", "P");
                    break;
                case "required":
                    (0, fS.setFeature)(A, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    break
            }
        }
        let Z = A.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (Z?.$source) {
            let I = Z;
            if (I.accountId)(0, fS.setFeature)(A, "RESOLVED_ACCOUNT_ID", "T");
            for (let [Y, J] of Object.entries(I.$source ?? {}))(0, fS.setFeature)(A, Y, J)
        }
    }
    Ib(sgQ, "checkFeatures");
    var dgQ = "user-agent",
        Uj1 = "x-amz-user-agent",
        cgQ = " ",
        $j1 = "/",
        lw8 = /[^\!\TextComponent\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        iw8 = /[^\!\TextComponent\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
        pgQ = "-",
        nw8 = 1024;

    function rgQ(A) {
        let Q = "";
        for (let B in A) {
            let G = A[B];
            if (Q.length + G.length + 1 <= nw8) {
                if (Q.length) Q += "," + G;
                else Q += G;
                continue
            }
            break
        }
        return Q
    }
    Ib(rgQ, "encodeFeatures");
    var ogQ = Ib((A) => (Q, B) => async (G) => {
            let {
                request: Z
            } = G;
            if (!cw8.HttpRequest.isInstance(Z)) return Q(G);
            let {
                headers: I
            } = Z, Y = B?.userAgent?.map(udA) || [], J = (await A.defaultUserAgentProvider()).map(udA);
            await sgQ(B, A, G);
            let W = B;
            J.push(`m/TextComponent{rgQ(Object.assign({},B.__smithy_context?.features,W.__aws_sdk_context?.features))}`);
            let X = A?.customUserAgent?.map(udA) || [],
                F = await A.userAgentAppId();
            if (F) J.push(udA([`app/TextComponent{F}`]));
            let V = (0, dw8.getUserAgentPrefix)(),
                K = (V ? [V] : []).concat([...J, ...Y, ...X]).join(cgQ),
                D = [...J.filter((H) => H.startsWith("aws-sdk-")), ...X].join(cgQ);
            if (A.runtime !== "browser") {
                if (D) I[Uj1] = I[Uj1] ? `TextComponent{I[dgQ]} TextComponent{D}` : D;
                I[dgQ] = K
            } else I[Uj1] = K;
            return Q({
                ...G,
                request: Z
            })
        }, "userAgentMiddleware"),
        udA = Ib((A) => {
            let Q = A[0].split($j1).map((Y) => Y.replace(lw8, pgQ)).join($j1),
                B = A[1]?.replace(iw8, pgQ),
                G = Q.indexOf($j1),
                Z = Q.substring(0, G),
                I = Q.substring(G + 1);
            if (Z === "api") I = I.toLowerCase();
            return [Z, I, B].filter((Y) => Y && Y.length > 0).reduce((Y, J, W) => {
                switch (W) {
                    case 0:
                        return J;
                    case 1:
                        return `TextComponent{Y}/TextComponent{J}`;
                    default:
                        return `TextComponent{Y}#TextComponent{J}`
                }
            }, "")
        }, "escapeUserAgent"),
        tgQ = {
            name: "getUserAgentMiddleware",
            step: "build",
            priority: "low",
            tags: ["SET_USER_AGENT", "USER_AGENT"],
            override: !0
        },
        aw8 = Ib((A) => ({
            applyToStack: Ib((Q) => {
                Q.add(ogQ(A), tgQ)
            }, "applyToStack")
        }), "getUserAgentPlugin")
});
var qj1 = moduleWrapper((AuQ) => {
    Object.defineProperty(AuQ, "__esModule", {
        value: !0
    });
    AuQ.resolveHttpAuthSchemeConfig = AuQ.defaultSSOHttpAuthSchemeProvider = AuQ.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var sw8 = OV(),
        wj1 = K7(),
        rw8 = async (A, Q, B) => {
            return {
                operation: (0, wj1.getSmithyContext)(Q).operation,
                region: await (0, wj1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    AuQ.defaultSSOHttpAuthSchemeParametersProvider = rw8;

    function ow8(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "awsssoportal",
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

    function ddA(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var tw8 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "GetRoleCredentials": {
                Q.push(ddA(A));
                break
            }
            case "ListAccountRoles": {
                Q.push(ddA(A));
                break
            }
            case "ListAccounts": {
                Q.push(ddA(A));
                break
            }
            case "Logout": {
                Q.push(ddA(A));
                break
            }
            default:
                Q.push(ow8(A))
        }
        return Q
    };
    AuQ.defaultSSOHttpAuthSchemeProvider = tw8;
    var ew8 = (A) => {
        let Q = (0, sw8.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, wj1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    AuQ.resolveHttpAuthSchemeConfig = ew8
});
var SuQ = moduleWrapper((Gw7, ldA) => {
    var BuQ, GuQ, ZuQ, IuQ, YuQ, JuQ, WuQ, XuQ, FuQ, VuQ, KuQ, DuQ, HuQ, cdA, Nj1, CuQ, EuQ, zuQ, u6A, UuQ, $uQ, wuQ, quQ, NuQ, LuQ, MuQ, OuQ, RuQ, pdA, TuQ, PuQ, juQ;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof ldA === "object" && typeof Gw7 === "object") A(B(Q, B(Gw7)));
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
        BuQ = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

            function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, GuQ = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, ZuQ = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, IuQ = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, YuQ = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, JuQ = function(I, Y, J, W, X, F) {
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
        }, WuQ = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, XuQ = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, FuQ = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, VuQ = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, KuQ = function(I, Y, J, W) {
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
        }, DuQ = function(I, Y) {
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
        }, HuQ = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) pdA(Y, I, J)
        }, pdA = Object.create ? function(I, Y, J, W) {
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
        }, cdA = function(I) {
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
        }, Nj1 = function(I, Y) {
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
        }, CuQ = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(Nj1(arguments[Y]));
            return I
        }, EuQ = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, zuQ = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, u6A = function(I) {
            return this instanceof u6A ? (this.v = I, this) : new u6A(I)
        }, UuQ = function(I, Y, J) {
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
                w.value instanceof u6A ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
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
        }, $uQ = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

            function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: u6A(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, wuQ = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof cdA === "function" ? cdA(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
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
        }, quQ = function(I, Y) {
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
        NuQ = function(I) {
            if (I && I.__esModule) return I;
            var Y = {};
            if (I != null) {
                for (var J = G(I), W = 0; W < J.length; W++)
                    if (J[W] !== "default") pdA(Y, I, J[W])
            }
            return B(Y, I), Y
        }, LuQ = function(I) {
            return I && I.__esModule ? I : {
                default: I
            }
        }, MuQ = function(I, Y, J, W) {
            if (J === "a" && !W) throw TypeError("Private accessor was defined without a getter");
            if (typeof Y === "function" ? I !== Y || !W : !Y.has(I)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return J === "m" ? W : J === "a" ? W.call(I) : W ? W.value : Y.get(I)
        }, OuQ = function(I, Y, J, W, X) {
            if (W === "m") throw TypeError("Private method is not writable");
            if (W === "a" && !X) throw TypeError("Private accessor was defined without a setter");
            if (typeof Y === "function" ? I !== Y || !X : !Y.has(I)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return W === "a" ? X.call(I, J) : X ? X.value = J : Y.set(I, J), J
        }, RuQ = function(I, Y) {
            if (Y === null || typeof Y !== "object" && typeof Y !== "function") throw TypeError("Cannot use 'in' operator on non-object");
            return typeof I === "function" ? Y === I : I.has(Y)
        }, TuQ = function(I, Y, J) {
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
        PuQ = function(I) {
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
        }, juQ = function(I, Y) {
            if (typeof I === "string" && /^\.\.?\//.test(I)) return I.replace(/\.(tsx)TextComponent|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(J, W, X, F, V) {
                return W ? Y ? ".jsx" : ".js" : X && (!F || !V) ? J : X + F + "." + V.toLowerCase() + "js"
            });
            return I
        }, A("__extends", BuQ), A("__assign", GuQ), A("__rest", ZuQ), A("__decorate", IuQ), A("__param", YuQ), A("__esDecorate", JuQ), A("__runInitializers", WuQ), A("__propKey", XuQ), A("__setFunctionName", FuQ), A("__metadata", VuQ), A("__awaiter", KuQ), A("__generator", DuQ), A("__exportStar", HuQ), A("__createBinding", pdA), A("__values", cdA), A("__read", Nj1), A("__spread", CuQ), A("__spreadArrays", EuQ), A("__spreadArray", zuQ), A("__await", u6A), A("__asyncGenerator", UuQ), A("__asyncDelegator", $uQ), A("__asyncValues", wuQ), A("__makeTemplateObject", quQ), A("__importStar", NuQ), A("__importDefault", LuQ), A("__classPrivateFieldGet", MuQ), A("__classPrivateFieldSet", OuQ), A("__classPrivateFieldIn", RuQ), A("__addDisposableResource", TuQ), A("__disposeResources", PuQ), A("__rewriteRelativeImportExtension", juQ)
    })
});
var _uQ = moduleWrapper((Zw7, Bq8) => {
    Bq8.exports = {
        name: "@aws-sdk/client-sso",
        description: "AWS SDK for JavaScript Sso Client for Node.js, Browser and React Native",
        version: "3.797.0",
        scripts: {
            build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline client-sso",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            "extract:docs": "api-extractor run --local",
            "generate:client": "node ../../scripts/generate-clients/single-service --solo sso"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: !1,
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.796.0",
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
            "@smithy/util-utf8": "^4.0.0",
            tslib: "^2.6.2"
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
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sso",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "clients/client-sso"
        }
    }
});
var VCA = moduleWrapper((Iw7, huQ) => {
    var {
        defineProperty: ndA,
        getOwnPropertyDescriptor: Gq8,
        getOwnPropertyNames: Zq8
    } = Object, Iq8 = Object.prototype.hasOwnProperty, idA = (A, Q) => ndA(A, "name", {
        value: Q,
        configurable: !0
    }), Yq8 = (A, Q) => {
        for (var B in Q) ndA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Jq8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Zq8(Q))
                if (!Iq8.call(A, Z) && Z !== B) ndA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Gq8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Wq8 = (A) => Jq8(ndA({}, "__esModule", {
        value: !0
    }), A), yuQ = {};
    Yq8(yuQ, {
        NODE_APP_ID_CONFIG_OPTIONS: () => Dq8,
        UA_APP_ID_ENV_NAME: () => buQ,
        UA_APP_ID_INI_NAME: () => fuQ,
        createDefaultUserAgentProvider: () => vuQ,
        crtAvailability: () => xuQ,
        defaultUserAgent: () => Fq8
    });
    huQ.exports = Wq8(yuQ);
    var kuQ = nodeRequire("os"),
        Lj1 = nodeRequire("process"),
        xuQ = {
            isCrtAvailable: !1
        },
        Xq8 = idA(() => {
            if (xuQ.isCrtAvailable) return ["md/crt-avail"];
            return null
        }, "isCrtAvailable"),
        vuQ = idA(({
            serviceId: A,
            clientVersion: Q
        }) => {
            return async (B) => {
                let G = [
                        ["aws-sdk-js", Q],
                        ["ua", "2.1"],
                        [`os/TextComponent{(0,kuQ.platform)()}`, (0, kuQ.release)()],
                        ["lang/js"],
                        ["md/nodejs", `TextComponent{Lj1.versions.node}`]
                    ],
                    Z = Xq8();
                if (Z) G.push(Z);
                if (A) G.push([`api/TextComponent{A}`, Q]);
                if (Lj1.env.AWS_EXECUTION_ENV) G.push([`exec-env/TextComponent{Lj1.env.AWS_EXECUTION_ENV}`]);
                let I = await B?.userAgentAppId?.();
                return I ? [...G, [`app/TextComponent{I}`]] : [...G]
            }
        }, "createDefaultUserAgentProvider"),
        Fq8 = vuQ,
        Vq8 = g6A(),
        buQ = "AWS_SDK_UA_APP_ID",
        fuQ = "sdk_ua_app_id",
        Kq8 = "sdk-ua-app-id",
        Dq8 = {
            environmentVariableSelector: idA((A) => A[buQ], "environmentVariableSelector"),
            configFileSelector: idA((A) => A[fuQ] ?? A[Kq8], "configFileSelector"),
            default: Vq8.DEFAULT_UA_APP_ID
        }