/**
 * Claude Code Decompiled
 * Category: api
 * File: 18/30
 * Lines: 219617 - 221086 (1470 lines)
 * Original file: cli.js
 */

    var CuB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(CuB || {}),
        EuB = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(EuB || {}),
        zuB = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(zuB || {}),
        UuB = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(UuB || {}),
        Wf6 = GeA((A) => {
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
        Xf6 = GeA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        Ff6 = GeA((A) => {
            return Wf6(A)
        }, "getDefaultClientConfiguration"),
        Vf6 = GeA((A) => {
            return Xf6(A)
        }, "resolveDefaultRuntimeConfig"),
        $uB = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })($uB || {}),
        Kf6 = "__smithy_context",
        wuB = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(wuB || {}),
        quB = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(quB || {})
});
var gwA = U((q9G, uuB) => {
    var {
        defineProperty: YeA,
        getOwnPropertyDescriptor: Df6,
        getOwnPropertyNames: Hf6
    } = Object, Cf6 = Object.prototype.hasOwnProperty, CB = (A, Q) => YeA(A, "name", {
        value: Q,
        configurable: !0
    }), Ef6 = (A, Q) => {
        for (var B in Q) YeA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, zf6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Hf6(Q))
                if (!Cf6.call(A, Z) && Z !== B) YeA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Df6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Uf6 = (A) => zf6(YeA({}, "__esModule", {
        value: !0
    }), A), MuB = {};
    Ef6(MuB, {
        Client: () => $f6,
        Command: () => RuB,
        LazyJsonString: () => Ne,
        NoOpLogger: () => Ch6,
        SENSITIVE_STRING: () => qf6,
        ServiceException: () => Bh6,
        _json: () => Il1,
        collectBody: () => ep1.collectBody,
        convertMap: () => Eh6,
        createAggregatedClient: () => Nf6,
        dateToUtcString: () => kuB,
        decorateServiceException: () => yuB,
        emitWarningIfUnsupportedVersion: () => Yh6,
        expectBoolean: () => Mf6,
        expectByte: () => Zl1,
        expectFloat32: () => ZeA,
        expectInt: () => Rf6,
        expectInt32: () => Bl1,
        expectLong: () => fwA,
        expectNonNull: () => Pf6,
        expectNumber: () => bwA,
        expectObject: () => TuB,
        expectShort: () => Gl1,
        expectString: () => jf6,
        expectUnion: () => Sf6,
        extendedEncodeURIComponent: () => ep1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => Dh6,
        getDefaultClientConfiguration: () => Vh6,
        getDefaultExtensionConfiguration: () => vuB,
        getValueFromTextNode: () => buB,
        handleFloat: () => yf6,
        isSerializableHeaderValue: () => Hh6,
        limitedParseDouble: () => Wl1,
        limitedParseFloat: () => xf6,
        limitedParseFloat32: () => vf6,
        loadConfigsForDefaultMode: () => Ih6,
        logger: () => hwA,
        map: () => Fl1,
        parseBoolean: () => Lf6,
        parseEpochTimestamp: () => nf6,
        parseRfc3339DateTime: () => uf6,
        parseRfc3339DateTimeWithOffset: () => df6,
        parseRfc7231DateTime: () => if6,
        quoteHeader: () => huB,
        resolveDefaultRuntimeConfig: () => Kh6,
        resolvedPath: () => ep1.resolvedPath,
        serializeDateTime: () => Nh6,
        serializeFloat: () => qh6,
        splitEvery: () => guB,
        splitHeader: () => Lh6,
        strictParseByte: () => _uB,
        strictParseDouble: () => Jl1,
        strictParseFloat: () => _f6,
        strictParseFloat32: () => PuB,
        strictParseInt: () => bf6,
        strictParseInt32: () => ff6,
        strictParseLong: () => SuB,
        strictParseShort: () => lGA,
        take: () => zh6,
        throwDefaultError: () => xuB,
        withBaseException: () => Gh6
    });
    uuB.exports = Uf6(MuB);
    var OuB = PR(),
        $f6 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, OuB.constructStack)()
            }
            static {
                CB(this, "Client")
            }
            send(A, Q, B) {
                let G = typeof Q !== "function" ? Q : void 0,
                    Z = typeof Q === "function" ? Q : B,
                    I = G === void 0 && this.config.cacheMiddleware === !0,
                    Y;
                if (I) {
                    if (!this.handlers) this.handlers = new WeakMap;
                    let J = this.handlers;
                    if (J.has(A.constructor)) Y = J.get(A.constructor);
                    else Y = A.resolveMiddleware(this.middlewareStack, this.config, G), J.set(A.constructor, Y)
                } else delete this.handlers, Y = A.resolveMiddleware(this.middlewareStack, this.config, G);
                if (Z) Y(A).then((J) => Z(null, J.output), (J) => Z(J)).catch(() => {});
                else return Y(A).then((J) => J.output)
            }
            destroy() {
                this.config?.requestHandler?.destroy?.(), delete this.handlers
            }
        },
        ep1 = C5(),
        Ql1 = tp1(),
        RuB = class {
            constructor() {
                this.middlewareStack = (0, OuB.constructStack)()
            }
            static {
                CB(this, "Command")
            }
            static classBuilder() {
                return new wf6
            }
            resolveMiddlewareWithContext(A, Q, B, {
                middlewareFn: G,
                clientName: Z,
                commandName: I,
                inputFilterSensitiveLog: Y,
                outputFilterSensitiveLog: J,
                smithyContext: W,
                additionalContext: X,
                CommandCtor: F
            }) {
                for (let C of G.bind(this)(F, A, Q, B)) this.middlewareStack.use(C);
                let V = A.concat(this.middlewareStack),
                    {
                        logger: K
                    } = Q,
                    D = {
                        logger: K,
                        clientName: Z,
                        commandName: I,
                        inputFilterSensitiveLog: Y,
                        outputFilterSensitiveLog: J,
                        [Ql1.SMITHY_CONTEXT_KEY]: {
                            commandInstance: this,
                            ...W
                        },
                        ...X
                    },
                    {
                        requestHandler: H
                    } = Q;
                return V.resolve((C) => H.handle(C.request, B || {}), D)
            }
        },
        wf6 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                CB(this, "ClassBuilder")
            }
            init(A) {
                this._init = A
            }
            ep(A) {
                return this._ep = A, this
            }
            m(A) {
                return this._middlewareFn = A, this
            }
            s(A, Q, B = {}) {
                return this._smithyContext = {
                    service: A,
                    operation: Q,
                    ...B
                }, this
            }
            c(A = {}) {
                return this._additionalContext = A, this
            }
            n(A, Q) {
                return this._clientName = A, this._commandName = Q, this
            }
            f(A = (B) => B, Q = (B) => B) {
                return this._inputFilterSensitiveLog = A, this._outputFilterSensitiveLog = Q, this
            }
            ser(A) {
                return this._serializer = A, this
            }
            de(A) {
                return this._deserializer = A, this
            }
            build() {
                let A = this,
                    Q;
                return Q = class extends RuB {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this)
                    }
                    static {
                        CB(this, "CommandRef")
                    }
                    static getEndpointParameterInstructions() {
                        return A._ep
                    }
                    resolveMiddleware(B, G, Z) {
                        return this.resolveMiddlewareWithContext(B, G, Z, {
                            CommandCtor: Q,
                            middlewareFn: A._middlewareFn,
                            clientName: A._clientName,
                            commandName: A._commandName,
                            inputFilterSensitiveLog: A._inputFilterSensitiveLog,
                            outputFilterSensitiveLog: A._outputFilterSensitiveLog,
                            smithyContext: A._smithyContext,
                            additionalContext: A._additionalContext
                        })
                    }
                }
            }
        },
        qf6 = "***SensitiveInformation***",
        Nf6 = CB((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = CB(async function(Y, J, W) {
                        let X = new G(Y);
                        if (typeof J === "function") this.send(X, J);
                        else if (typeof W === "function") {
                            if (typeof J !== "object") throw Error(`Expected http options but got ${typeof J}`);
                            this.send(X, J || {}, W)
                        } else return this.send(X, J)
                    }, "methodImpl"),
                    I = (B[0].toLowerCase() + B.slice(1)).replace(/Command$/, "");
                Q.prototype[I] = Z
            }
        }, "createAggregatedClient"),
        Lf6 = CB((A) => {
            switch (A) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    throw Error(`Unable to parse boolean value "${A}"`)
            }
        }, "parseBoolean"),
        Mf6 = CB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "number") {
                if (A === 0 || A === 1) hwA.warn(IeA(`Expected boolean, got ${typeof A}: ${A}`));
                if (A === 0) return !1;
                if (A === 1) return !0
            }
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (Q === "false" || Q === "true") hwA.warn(IeA(`Expected boolean, got ${typeof A}: ${A}`));
                if (Q === "false") return !1;
                if (Q === "true") return !0
            }
            if (typeof A === "boolean") return A;
            throw TypeError(`Expected boolean, got ${typeof A}: ${A}`)
        }, "expectBoolean"),
        bwA = CB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") {
                let Q = parseFloat(A);
                if (!Number.isNaN(Q)) {
                    if (String(Q) !== String(A)) hwA.warn(IeA(`Expected number but observed string: ${A}`));
                    return Q
                }
            }
            if (typeof A === "number") return A;
            throw TypeError(`Expected number, got ${typeof A}: ${A}`)
        }, "expectNumber"),
        Of6 = Math.ceil(340282346638528860000000000000000000000),
        ZeA = CB((A) => {
            let Q = bwA(A);
            if (Q !== void 0 && !Number.isNaN(Q) && Q !== 1 / 0 && Q !== -1 / 0) {
                if (Math.abs(Q) > Of6) throw TypeError(`Expected 32-bit float, got ${A}`)
            }
            return Q
        }, "expectFloat32"),
        fwA = CB((A) => {
            if (A === null || A === void 0) return;
            if (Number.isInteger(A) && !Number.isNaN(A)) return A;
            throw TypeError(`Expected integer, got ${typeof A}: ${A}`)
        }, "expectLong"),
        Rf6 = fwA,
        Bl1 = CB((A) => Yl1(A, 32), "expectInt32"),
        Gl1 = CB((A) => Yl1(A, 16), "expectShort"),
        Zl1 = CB((A) => Yl1(A, 8), "expectByte"),
        Yl1 = CB((A, Q) => {
            let B = fwA(A);
            if (B !== void 0 && Tf6(B, Q) !== B) throw TypeError(`Expected ${Q}-bit integer, got ${A}`);
            return B
        }, "expectSizedInt"),
        Tf6 = CB((A, Q) => {
            switch (Q) {
                case 32:
                    return Int32Array.of(A)[0];
                case 16:
                    return Int16Array.of(A)[0];
                case 8:
                    return Int8Array.of(A)[0]
            }
        }, "castInt"),
        Pf6 = CB((A, Q) => {
            if (A === null || A === void 0) {
                if (Q) throw TypeError(`Expected a non-null value for ${Q}`);
                throw TypeError("Expected a non-null value")
            }
            return A
        }, "expectNonNull"),
        TuB = CB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "object" && !Array.isArray(A)) return A;
            let Q = Array.isArray(A) ? "array" : typeof A;
            throw TypeError(`Expected object, got ${Q}: ${A}`)
        }, "expectObject"),
        jf6 = CB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") return A;
            if (["boolean", "number", "bigint"].includes(typeof A)) return hwA.warn(IeA(`Expected string, got ${typeof A}: ${A}`)), String(A);
            throw TypeError(`Expected string, got ${typeof A}: ${A}`)
        }, "expectString"),
        Sf6 = CB((A) => {
            if (A === null || A === void 0) return;
            let Q = TuB(A),
                B = Object.entries(Q).filter(([, G]) => G != null).map(([G]) => G);
            if (B.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
            if (B.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${B} were not null.`);
            return Q
        }, "expectUnion"),
        Jl1 = CB((A) => {
            if (typeof A == "string") return bwA(nGA(A));
            return bwA(A)
        }, "strictParseDouble"),
        _f6 = Jl1,
        PuB = CB((A) => {
            if (typeof A == "string") return ZeA(nGA(A));
            return ZeA(A)
        }, "strictParseFloat32"),
        kf6 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        nGA = CB((A) => {
            let Q = A.match(kf6);
            if (Q === null || Q[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
            return parseFloat(A)
        }, "parseNumber"),
        Wl1 = CB((A) => {
            if (typeof A == "string") return juB(A);
            return bwA(A)
        }, "limitedParseDouble"),
        yf6 = Wl1,
        xf6 = Wl1,
        vf6 = CB((A) => {
            if (typeof A == "string") return juB(A);
            return ZeA(A)
        }, "limitedParseFloat32"),
        juB = CB((A) => {
            switch (A) {
                case "NaN":
                    return NaN;
                case "Infinity":
                    return 1 / 0;
                case "-Infinity":
                    return -1 / 0;
                default:
                    throw Error(`Unable to parse float value: ${A}`)
            }
        }, "parseFloatString"),
        SuB = CB((A) => {
            if (typeof A === "string") return fwA(nGA(A));
            return fwA(A)
        }, "strictParseLong"),
        bf6 = SuB,
        ff6 = CB((A) => {
            if (typeof A === "string") return Bl1(nGA(A));
            return Bl1(A)
        }, "strictParseInt32"),
        lGA = CB((A) => {
            if (typeof A === "string") return Gl1(nGA(A));
            return Gl1(A)
        }, "strictParseShort"),
        _uB = CB((A) => {
            if (typeof A === "string") return Zl1(nGA(A));
            return Zl1(A)
        }, "strictParseByte"),
        IeA = CB((A) => {
            return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter((Q) => !Q.includes("stackTraceWarning")).join(`
`)
        }, "stackTraceWarning"),
        hwA = {
            warn: console.warn
        },
        hf6 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        Xl1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function kuB(A) {
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
        return `${hf6[G]}, ${W} ${Xl1[B]} ${Q} ${X}:${F}:${V} GMT`
    }
    CB(kuB, "dateToUtcString");
    var gf6 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
        uf6 = CB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = gf6.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X] = Q, F = lGA(iGA(G)), V = n_(Z, "month", 1, 12), K = n_(I, "day", 1, 31);
            return vwA(F, V, K, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            })
        }, "parseRfc3339DateTime"),
        mf6 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
        df6 = CB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = mf6.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X, F] = Q, V = lGA(iGA(G)), K = n_(Z, "month", 1, 12), D = n_(I, "day", 1, 31), H = vwA(V, K, D, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            });
            if (F.toUpperCase() != "Z") H.setTime(H.getTime() - Qh6(F));
            return H
        }, "parseRfc3339DateTimeWithOffset"),
        cf6 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        pf6 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        lf6 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
        if6 = CB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
            let Q = cf6.exec(A);
            if (Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return vwA(lGA(iGA(I)), Al1(Z), n_(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                })
            }
            if (Q = pf6.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return rf6(vwA(af6(I), Al1(Z), n_(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                }))
            }
            if (Q = lf6.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return vwA(lGA(iGA(X)), Al1(G), n_(Z.trimLeft(), "day", 1, 31), {
                    hours: I,
                    minutes: Y,
                    seconds: J,
                    fractionalMilliseconds: W
                })
            }
            throw TypeError("Invalid RFC-7231 date-time value")
        }, "parseRfc7231DateTime"),
        nf6 = CB((A) => {
            if (A === null || A === void 0) return;
            let Q;
            if (typeof A === "number") Q = A;
            else if (typeof A === "string") Q = Jl1(A);
            else if (typeof A === "object" && A.tag === 1) Q = A.value;
            else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
            if (Number.isNaN(Q) || Q === 1 / 0 || Q === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(Q * 1000))
        }, "parseEpochTimestamp"),
        vwA = CB((A, Q, B, G) => {
            let Z = Q - 1;
            return tf6(A, Z, B), new Date(Date.UTC(A, Z, B, n_(G.hours, "hour", 0, 23), n_(G.minutes, "minute", 0, 59), n_(G.seconds, "seconds", 0, 60), Ah6(G.fractionalMilliseconds)))
        }, "buildDate"),
        af6 = CB((A) => {
            let Q = new Date().getUTCFullYear(),
                B = Math.floor(Q / 100) * 100 + lGA(iGA(A));
            if (B < Q) return B + 100;
            return B
        }, "parseTwoDigitYear"),
        sf6 = 1576800000000,
        rf6 = CB((A) => {
            if (A.getTime() - new Date().getTime() > sf6) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
            return A
        }, "adjustRfc850Year"),
        Al1 = CB((A) => {
            let Q = Xl1.indexOf(A);
            if (Q < 0) throw TypeError(`Invalid month: ${A}`);
            return Q + 1
        }, "parseMonthByShortName"),
        of6 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        tf6 = CB((A, Q, B) => {
            let G = of6[Q];
            if (Q === 1 && ef6(A)) G = 29;
            if (B > G) throw TypeError(`Invalid day for ${Xl1[Q]} in ${A}: ${B}`)
        }, "validateDayOfMonth"),
        ef6 = CB((A) => {
            return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
        }, "isLeapYear"),
        n_ = CB((A, Q, B, G) => {
            let Z = _uB(iGA(A));
            if (Z < B || Z > G) throw TypeError(`${Q} must be between ${B} and ${G}, inclusive`);
            return Z
        }, "parseDateValue"),
        Ah6 = CB((A) => {
            if (A === null || A === void 0) return 0;
            return PuB("0." + A) * 1000
        }, "parseMilliseconds"),
        Qh6 = CB((A) => {
            let Q = A[0],
                B = 1;
            if (Q == "+") B = 1;
            else if (Q == "-") B = -1;
            else throw TypeError(`Offset direction, ${Q}, must be "+" or "-"`);
            let G = Number(A.substring(1, 3)),
                Z = Number(A.substring(4, 6));
            return B * (G * 60 + Z) * 60 * 1000
        }, "parseOffsetToMilliseconds"),
        iGA = CB((A) => {
            let Q = 0;
            while (Q < A.length - 1 && A.charAt(Q) === "0") Q++;
            if (Q === 0) return A;
            return A.slice(Q)
        }, "stripLeadingZeroes"),
        Bh6 = class A extends Error {
            static {
                CB(this, "ServiceException")
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
        yuB = CB((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        xuB = CB(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = Zh6(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw yuB(Y, Q)
        }, "throwDefaultError"),
        Gh6 = CB((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                xuB({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        Zh6 = CB((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        Ih6 = CB((A) => {
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
        LuB = !1,
        Yh6 = CB((A) => {
            if (A && !LuB && parseInt(A.substring(1, A.indexOf("."))) < 16) LuB = !0
        }, "emitWarningIfUnsupportedVersion"),
        Jh6 = CB((A) => {
            let Q = [];
            for (let B in Ql1.AlgorithmId) {
                let G = Ql1.AlgorithmId[B];
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
        Wh6 = CB((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        Xh6 = CB((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        Fh6 = CB((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        vuB = CB((A) => {
            return Object.assign(Jh6(A), Xh6(A))
        }, "getDefaultExtensionConfiguration"),
        Vh6 = vuB,
        Kh6 = CB((A) => {
            return Object.assign(Wh6(A), Fh6(A))
        }, "resolveDefaultRuntimeConfig"),
        Dh6 = CB((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        buB = CB((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = buB(A[B]);
            return A
        }, "getValueFromTextNode"),
        Hh6 = CB((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        Ne = CB(function(Q) {
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
    Ne.from = (A) => {
        if (A && typeof A === "object" && (A instanceof Ne || ("deserializeJSON" in A))) return A;
        else if (typeof A === "string" || Object.getPrototypeOf(A) === String.prototype) return Ne(String(A));
        return Ne(JSON.stringify(A))
    };
    Ne.fromObject = Ne.from;
    var Ch6 = class {
        static {
            CB(this, "NoOpLogger")
        }
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
    };

    function Fl1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, Uh6(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            fuB(G, null, I, Y)
        }
        return G
    }
    CB(Fl1, "map");
    var Eh6 = CB((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        zh6 = CB((A, Q) => {
            let B = {};
            for (let G in Q) fuB(B, A, Q, G);
            return B
        }, "take"),
        Uh6 = CB((A, Q, B) => {
            return Fl1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        fuB = CB((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = $h6, W = wh6, X = G] = Y;
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
        $h6 = CB((A) => A != null, "nonNullish"),
        wh6 = CB((A) => A, "pass");

    function huB(A) {
        if (A.includes(",") || A.includes('"')) A = `"${A.replace(/"/g,"\\\"")}"`;
        return A
    }
    CB(huB, "quoteHeader");
    var qh6 = CB((A) => {
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
        Nh6 = CB((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        Il1 = CB((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(Il1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = Il1(A[B])
                }
                return Q
            }
            return A
        }, "_json");

    function guB(A, Q, B) {
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
    CB(guB, "splitEvery");
    var Lh6 = CB((A) => {
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
var cuB = U((muB) => {
    Object.defineProperty(muB, "__esModule", {
        value: !0
    });
    muB.fromBase64 = void 0;
    var Mh6 = kI(),
        Oh6 = /^[A-Za-z0-9+/]*={0,2}$/,
        Rh6 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!Oh6.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, Mh6.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    muB.fromBase64 = Rh6
});
var iuB = U((puB) => {
    Object.defineProperty(puB, "__esModule", {
        value: !0
    });
    puB.toBase64 = void 0;
    var Th6 = kI(),
        Ph6 = L2(),
        jh6 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, Ph6.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, Th6.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    puB.toBase64 = jh6
});
var suB = U((j9G, JeA) => {
    var {
        defineProperty: nuB,
        getOwnPropertyDescriptor: Sh6,
        getOwnPropertyNames: _h6
    } = Object, kh6 = Object.prototype.hasOwnProperty, Vl1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of _h6(Q))
                if (!kh6.call(A, Z) && Z !== B) nuB(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Sh6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, auB = (A, Q, B) => (Vl1(A, Q, "default"), B && Vl1(B, Q, "default")), yh6 = (A) => Vl1(nuB({}, "__esModule", {
        value: !0
    }), A), Kl1 = {};
    JeA.exports = yh6(Kl1);
    auB(Kl1, cuB(), JeA.exports);
    auB(Kl1, iuB(), JeA.exports)
});
var VmB = U((XmB) => {
    Object.defineProperty(XmB, "__esModule", {
        value: !0
    });
    XmB.ruleSet = void 0;
    var YmB = "required",
        s_ = "fn",
        r_ = "argv",
        sGA = "ref",
        ruB = !0,
        ouB = "isSet",
        mwA = "booleanEquals",
        aGA = "error",
        uwA = "endpoint",
        zE = "tree",
        Dl1 = "PartitionResult",
        tuB = {
            [YmB]: !1,
            type: "String"
        },
        euB = {
            [YmB]: !0,
            default: !1,
            type: "Boolean"
        },
        AmB = {
            [sGA]: "Endpoint"
        },
        JmB = {
            [s_]: mwA,
            [r_]: [{
                [sGA]: "UseFIPS"
            }, !0]
        },
        WmB = {
            [s_]: mwA,
            [r_]: [{
                [sGA]: "UseDualStack"
            }, !0]
        },
        a_ = {},
        QmB = {
            [s_]: "getAttr",
            [r_]: [{
                [sGA]: Dl1
            }, "supportsFIPS"]
        },
        BmB = {
            [s_]: mwA,
            [r_]: [!0, {
                [s_]: "getAttr",
                [r_]: [{
                    [sGA]: Dl1
                }, "supportsDualStack"]
            }]
        },
        GmB = [JmB],
        ZmB = [WmB],
        ImB = [{
            [sGA]: "Region"
        }],
        xh6 = {
            version: "1.0",
            parameters: {
                Region: tuB,
                UseDualStack: euB,
                UseFIPS: euB,
                Endpoint: tuB
            },
            rules: [{
                conditions: [{
                    [s_]: ouB,
                    [r_]: [AmB]
                }],
                rules: [{
                    conditions: GmB,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: aGA
                }, {
                    rules: [{
                        conditions: ZmB,
                        error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                        type: aGA
                    }, {
                        endpoint: {
                            url: AmB,
                            properties: a_,
                            headers: a_
                        },
                        type: uwA
                    }],
                    type: zE
                }],
                type: zE
            }, {
                rules: [{
                    conditions: [{
                        [s_]: ouB,
                        [r_]: ImB
                    }],
                    rules: [{
                        conditions: [{
                            [s_]: "aws.partition",
                            [r_]: ImB,
                            assign: Dl1
                        }],
                        rules: [{
                            conditions: [JmB, WmB],
                            rules: [{
                                conditions: [{
                                    [s_]: mwA,
                                    [r_]: [ruB, QmB]
                                }, BmB],
                                rules: [{
                                    rules: [{
                                        endpoint: {
                                            url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: a_,
                                            headers: a_
                                        },
                                        type: uwA
                                    }],
                                    type: zE
                                }],
                                type: zE
                            }, {
                                error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                                type: aGA
                            }],
                            type: zE
                        }, {
                            conditions: GmB,
                            rules: [{
                                conditions: [{
                                    [s_]: mwA,
                                    [r_]: [QmB, ruB]
                                }],
                                rules: [{
                                    rules: [{
                                        endpoint: {
                                            url: "https://bedrock-runtime-fips.{Region}.{PartitionResult#dnsSuffix}",
                                            properties: a_,
                                            headers: a_
                                        },
                                        type: uwA
                                    }],
                                    type: zE
                                }],
                                type: zE
                            }, {
                                error: "FIPS is enabled but this partition does not support FIPS",
                                type: aGA
                            }],
                            type: zE
                        }, {
                            conditions: ZmB,
                            rules: [{
                                conditions: [BmB],
                                rules: [{
                                    rules: [{
                                        endpoint: {
                                            url: "https://bedrock-runtime.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                            properties: a_,
                                            headers: a_
                                        },
                                        type: uwA
                                    }],
                                    type: zE
                                }],
                                type: zE
                            }, {
                                error: "DualStack is enabled but this partition does not support DualStack",
                                type: aGA
                            }],
                            type: zE
                        }, {
                            rules: [{
                                endpoint: {
                                    url: "https://bedrock-runtime.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: a_,
                                    headers: a_
                                },
                                type: uwA
                            }],
                            type: zE
                        }],
                        type: zE
                    }],
                    type: zE
                }, {
                    error: "Invalid Configuration: Missing Region",
                    type: aGA
                }],
                type: zE
            }]
        };
    XmB.ruleSet = xh6
});
var HmB = U((KmB) => {
    Object.defineProperty(KmB, "__esModule", {
        value: !0
    });
    KmB.defaultEndpointResolver = void 0;
    var vh6 = y6A(),
        Hl1 = II(),
        bh6 = VmB(),
        fh6 = new Hl1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        hh6 = (A, Q = {}) => {
            return fh6.get(A, () => (0, Hl1.resolveEndpoint)(bh6.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    KmB.defaultEndpointResolver = hh6;
    Hl1.customEndpointFunctions.aws = vh6.awsEndpointFunctions
});
var $mB = U((zmB) => {
    Object.defineProperty(zmB, "__esModule", {
        value: !0
    });
    zmB.getRuntimeConfig = void 0;
    var gh6 = OV(),
        uh6 = gwA(),
        mh6 = zJ(),
        CmB = suB(),
        EmB = L2(),
        dh6 = up1(),
        ch6 = HmB(),
        ph6 = (A) => {
            return {
                apiVersion: "2023-09-30",
                base64Decoder: A?.base64Decoder ?? CmB.fromBase64,
                base64Encoder: A?.base64Encoder ?? CmB.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? ch6.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? dh6.defaultBedrockRuntimeHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new gh6.AwsSdkSigV4Signer
                }],
                logger: A?.logger ?? new uh6.NoOpLogger,
                serviceId: A?.serviceId ?? "Bedrock Runtime",
                urlParser: A?.urlParser ?? mh6.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? EmB.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? EmB.toUtf8
            }
        };
    zmB.getRuntimeConfig = ph6
});
var OmB = U((LmB) => {
    Object.defineProperty(LmB, "__esModule", {
        value: !0
    });
    LmB.getRuntimeConfig = void 0;
    var lh6 = mhB(),
        ih6 = lh6.__importDefault(dhB()),
        nh6 = OV(),
        ah6 = C_1(),
        sh6 = BuB(),
        wmB = VCA(),
        WeA = S8(),
        rh6 = DuB(),
        oh6 = wX(),
        qmB = X6(),
        rGA = xI(),
        NmB = oG(),
        th6 = qX(),
        eh6 = FW(),
        Ag6 = $mB(),
        Qg6 = gwA(),
        Bg6 = NX(),
        Gg6 = gwA(),
        Zg6 = (A) => {
            (0, Gg6.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, Bg6.resolveDefaultsModeConfig)(A),
                B = () => Q().then(Qg6.loadConfigsForDefaultMode),
                G = (0, Ag6.getRuntimeConfig)(A);
            (0, nh6.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                bodyLengthChecker: A?.bodyLengthChecker ?? th6.calculateBodyLength,
                credentialDefaultProvider: A?.credentialDefaultProvider ?? ah6.defaultProvider,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, wmB.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: ih6.default.version
                }),
                eventStreamPayloadHandlerProvider: A?.eventStreamPayloadHandlerProvider ?? sh6.eventStreamPayloadHandlerProvider,
                eventStreamSerdeProvider: A?.eventStreamSerdeProvider ?? rh6.eventStreamSerdeProvider,
                maxAttempts: A?.maxAttempts ?? (0, rGA.loadConfig)(qmB.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, rGA.loadConfig)(WeA.NODE_REGION_CONFIG_OPTIONS, {
                    ...WeA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: NmB.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, rGA.loadConfig)({
                    ...qmB.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || eh6.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? oh6.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? NmB.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, rGA.loadConfig)(WeA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, rGA.loadConfig)(WeA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, rGA.loadConfig)(wmB.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    LmB.getRuntimeConfig = Zg6
});
var _mB = U((x9G, SmB) => {
    var {
        defineProperty: XeA,
        getOwnPropertyDescriptor: Ig6,
        getOwnPropertyNames: Yg6
    } = Object, Jg6 = Object.prototype.hasOwnProperty, ip = (A, Q) => XeA(A, "name", {
        value: Q,
        configurable: !0
    }), Wg6 = (A, Q) => {
        for (var B in Q) XeA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Xg6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Yg6(Q))
                if (!Jg6.call(A, Z) && Z !== B) XeA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ig6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Fg6 = (A) => Xg6(XeA({}, "__esModule", {
        value: !0
    }), A), RmB = {};
    Wg6(RmB, {
        Field: () => Dg6,
        Fields: () => Hg6,
        HttpRequest: () => Cg6,
        HttpResponse: () => Eg6,
        IHttpRequest: () => TmB.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => Vg6,
        isValidHostname: () => jmB,
        resolveHttpHandlerRuntimeConfig: () => Kg6
    });
    SmB.exports = Fg6(RmB);
    var Vg6 = ip((A) => {
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
        Kg6 = ip((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        TmB = tp1(),
        Dg6 = class {
            static {
                ip(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = TmB.FieldPosition.HEADER,
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
        Hg6 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                ip(this, "Fields")
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
        Cg6 = class A {
            static {
                ip(this, "HttpRequest")
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
                if (B.query) B.query = PmB(B.query);
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

    function PmB(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    ip(PmB, "cloneQuery");
    var Eg6 = class {
        static {
            ip(this, "HttpResponse")
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

    function jmB(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    ip(jmB, "isValidHostname")
});
var WcB = U((h9G, JcB) => {
    var {
        defineProperty: MeA,
        getOwnPropertyDescriptor: zg6,
        getOwnPropertyNames: Ug6
    } = Object, $g6 = Object.prototype.hasOwnProperty, tA = (A, Q) => MeA(A, "name", {
        value: Q,
        configurable: !0
    }), wg6 = (A, Q) => {
        for (var B in Q) MeA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qg6 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Ug6(Q))
                if (!$g6.call(A, Z) && Z !== B) MeA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zg6(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Ng6 = (A) => qg6(MeA({}, "__esModule", {
        value: !0
    }), A), lmB = {};