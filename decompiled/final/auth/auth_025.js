/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_025.js
 * 处理时间: 2025-12-09T03:41:36.614Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  1x) require(name) - Node require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 25/61
 * Lines: 114904 - 116392 (1489 lines)
 * Original file: cli.js
 */

            get() {
                return this.values
            }
        },
        IH8 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                kd(this, "Fields")
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
        YH8 = class A {
            static {
                kd(this, "HttpRequest")
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
                if (B.query) B.query = mvQ(B.query);
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

    function mvQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    kd(mvQ, "cloneQuery");
    var JH8 = class {
        static {
            kd(this, "HttpResponse")
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

    function dvQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    kd(dvQ, "isValidHostname")
});
var XbQ = U((G$7, WbQ) => {
    var {
        defineProperty: GdA,
        getOwnPropertyDescriptor: WH8,
        getOwnPropertyNames: XH8
    } = Object, FH8 = Object.prototype.hasOwnProperty, XB = (A, Q) => GdA(A, "name", {
        value: Q,
        configurable: !0
    }), VH8 = (A, Q) => {
        for (var B in Q) GdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, KH8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of XH8(Q))
                if (!FH8.call(A, Z) && Z !== B) GdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = WH8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, DH8 = (A) => KH8(GdA({}, "__esModule", {
        value: !0
    }), A), ivQ = {};
    VH8(ivQ, {
        Client: () => HH8,
        Command: () => avQ,
        LazyJsonString: () => Go,
        NoOpLogger: () => FC8,
        SENSITIVE_STRING: () => EH8,
        ServiceException: () => oH8,
        _json: () => yP1,
        collectBody: () => TP1.collectBody,
        convertMap: () => VC8,
        createAggregatedClient: () => zH8,
        dateToUtcString: () => AbQ,
        decorateServiceException: () => QbQ,
        emitWarningIfUnsupportedVersion: () => QC8,
        expectBoolean: () => $H8,
        expectByte: () => kP1,
        expectFloat32: () => QdA,
        expectInt: () => qH8,
        expectInt32: () => SP1,
        expectLong: () => eHA,
        expectNonNull: () => LH8,
        expectNumber: () => tHA,
        expectObject: () => svQ,
        expectShort: () => _P1,
        expectString: () => MH8,
        expectUnion: () => OH8,
        extendedEncodeURIComponent: () => TP1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => WC8,
        getDefaultClientConfiguration: () => YC8,
        getDefaultExtensionConfiguration: () => GbQ,
        getValueFromTextNode: () => ZbQ,
        handleFloat: () => PH8,
        isSerializableHeaderValue: () => XC8,
        limitedParseDouble: () => bP1,
        limitedParseFloat: () => jH8,
        limitedParseFloat32: () => SH8,
        loadConfigsForDefaultMode: () => AC8,
        logger: () => ACA,
        map: () => hP1,
        parseBoolean: () => UH8,
        parseEpochTimestamp: () => dH8,
        parseRfc3339DateTime: () => vH8,
        parseRfc3339DateTimeWithOffset: () => fH8,
        parseRfc7231DateTime: () => mH8,
        quoteHeader: () => YbQ,
        resolveDefaultRuntimeConfig: () => JC8,
        resolvedPath: () => TP1.resolvedPath,
        serializeDateTime: () => zC8,
        serializeFloat: () => EC8,
        splitEvery: () => JbQ,
        splitHeader: () => UC8,
        strictParseByte: () => evQ,
        strictParseDouble: () => vP1,
        strictParseFloat: () => RH8,
        strictParseFloat32: () => rvQ,
        strictParseInt: () => _H8,
        strictParseInt32: () => kH8,
        strictParseLong: () => tvQ,
        strictParseShort: () => j6A,
        take: () => KC8,
        throwDefaultError: () => BbQ,
        withBaseException: () => tH8
    });
    WbQ.exports = DH8(ivQ);
    var nvQ = PR(),
        HH8 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, nvQ.constructStack)()
            }
            static {
                XB(this, "Client")
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
        TP1 = C5(),
        jP1 = RP1(),
        avQ = class {
            constructor() {
                this.middlewareStack = (0, nvQ.constructStack)()
            }
            static {
                XB(this, "Command")
            }
            static classBuilder() {
                return new CH8
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
                        [jP1.SMITHY_CONTEXT_KEY]: {
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
        CH8 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                XB(this, "ClassBuilder")
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
                return Q = class extends avQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this)
                    }
                    static {
                        XB(this, "CommandRef")
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
        EH8 = "***SensitiveInformation***",
        zH8 = XB((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = XB(async function(Y, J, W) {
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
        UH8 = XB((A) => {
            switch (A) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    throw Error(`Unable to parse boolean value "${A}"`)
            }
        }, "parseBoolean"),
        $H8 = XB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "number") {
                if (A === 0 || A === 1) ACA.warn(BdA(`Expected boolean, got ${typeof A}: ${A}`));
                if (A === 0) return !1;
                if (A === 1) return !0
            }
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (Q === "false" || Q === "true") ACA.warn(BdA(`Expected boolean, got ${typeof A}: ${A}`));
                if (Q === "false") return !1;
                if (Q === "true") return !0
            }
            if (typeof A === "boolean") return A;
            throw TypeError(`Expected boolean, got ${typeof A}: ${A}`)
        }, "expectBoolean"),
        tHA = XB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") {
                let Q = parseFloat(A);
                if (!Number.isNaN(Q)) {
                    if (String(Q) !== String(A)) ACA.warn(BdA(`Expected number but observed string: ${A}`));
                    return Q
                }
            }
            if (typeof A === "number") return A;
            throw TypeError(`Expected number, got ${typeof A}: ${A}`)
        }, "expectNumber"),
        wH8 = Math.ceil(340282346638528860000000000000000000000),
        QdA = XB((A) => {
            let Q = tHA(A);
            if (Q !== void 0 && !Number.isNaN(Q) && Q !== 1 / 0 && Q !== -1 / 0) {
                if (Math.abs(Q) > wH8) throw TypeError(`Expected 32-bit float, got ${A}`)
            }
            return Q
        }, "expectFloat32"),
        eHA = XB((A) => {
            if (A === null || A === void 0) return;
            if (Number.isInteger(A) && !Number.isNaN(A)) return A;
            throw TypeError(`Expected integer, got ${typeof A}: ${A}`)
        }, "expectLong"),
        qH8 = eHA,
        SP1 = XB((A) => xP1(A, 32), "expectInt32"),
        _P1 = XB((A) => xP1(A, 16), "expectShort"),
        kP1 = XB((A) => xP1(A, 8), "expectByte"),
        xP1 = XB((A, Q) => {
            let B = eHA(A);
            if (B !== void 0 && NH8(B, Q) !== B) throw TypeError(`Expected ${Q}-bit integer, got ${A}`);
            return B
        }, "expectSizedInt"),
        NH8 = XB((A, Q) => {
            switch (Q) {
                case 32:
                    return Int32Array.of(A)[0];
                case 16:
                    return Int16Array.of(A)[0];
                case 8:
                    return Int8Array.of(A)[0]
            }
        }, "castInt"),
        LH8 = XB((A, Q) => {
            if (A === null || A === void 0) {
                if (Q) throw TypeError(`Expected a non-null value for ${Q}`);
                throw TypeError("Expected a non-null value")
            }
            return A
        }, "expectNonNull"),
        svQ = XB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "object" && !Array.isArray(A)) return A;
            let Q = Array.isArray(A) ? "array" : typeof A;
            throw TypeError(`Expected object, got ${Q}: ${A}`)
        }, "expectObject"),
        MH8 = XB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") return A;
            if (["boolean", "number", "bigint"].includes(typeof A)) return ACA.warn(BdA(`Expected string, got ${typeof A}: ${A}`)), String(A);
            throw TypeError(`Expected string, got ${typeof A}: ${A}`)
        }, "expectString"),
        OH8 = XB((A) => {
            if (A === null || A === void 0) return;
            let Q = svQ(A),
                B = Object.entries(Q).filter(([, G]) => G != null).map(([G]) => G);
            if (B.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
            if (B.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${B} were not null.`);
            return Q
        }, "expectUnion"),
        vP1 = XB((A) => {
            if (typeof A == "string") return tHA(_6A(A));
            return tHA(A)
        }, "strictParseDouble"),
        RH8 = vP1,
        rvQ = XB((A) => {
            if (typeof A == "string") return QdA(_6A(A));
            return QdA(A)
        }, "strictParseFloat32"),
        TH8 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        _6A = XB((A) => {
            let Q = A.match(TH8);
            if (Q === null || Q[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
            return parseFloat(A)
        }, "parseNumber"),
        bP1 = XB((A) => {
            if (typeof A == "string") return ovQ(A);
            return tHA(A)
        }, "limitedParseDouble"),
        PH8 = bP1,
        jH8 = bP1,
        SH8 = XB((A) => {
            if (typeof A == "string") return ovQ(A);
            return QdA(A)
        }, "limitedParseFloat32"),
        ovQ = XB((A) => {
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
        tvQ = XB((A) => {
            if (typeof A === "string") return eHA(_6A(A));
            return eHA(A)
        }, "strictParseLong"),
        _H8 = tvQ,
        kH8 = XB((A) => {
            if (typeof A === "string") return SP1(_6A(A));
            return SP1(A)
        }, "strictParseInt32"),
        j6A = XB((A) => {
            if (typeof A === "string") return _P1(_6A(A));
            return _P1(A)
        }, "strictParseShort"),
        evQ = XB((A) => {
            if (typeof A === "string") return kP1(_6A(A));
            return kP1(A)
        }, "strictParseByte"),
        BdA = XB((A) => {
            return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter((Q) => !Q.includes("stackTraceWarning")).join(`
`)
        }, "stackTraceWarning"),
        ACA = {
            warn: console.warn
        },
        yH8 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        fP1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function AbQ(A) {
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
        return `${yH8[G]}, ${W} ${fP1[B]} ${Q} ${X}:${F}:${V} GMT`
    }
    XB(AbQ, "dateToUtcString");
    var xH8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
        vH8 = XB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = xH8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X] = Q, F = j6A(S6A(G)), V = vS(Z, "month", 1, 12), K = vS(I, "day", 1, 31);
            return oHA(F, V, K, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            })
        }, "parseRfc3339DateTime"),
        bH8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
        fH8 = XB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = bH8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X, F] = Q, V = j6A(S6A(G)), K = vS(Z, "month", 1, 12), D = vS(I, "day", 1, 31), H = oHA(V, K, D, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            });
            if (F.toUpperCase() != "Z") H.setTime(H.getTime() - rH8(F));
            return H
        }, "parseRfc3339DateTimeWithOffset"),
        hH8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        gH8 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        uH8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
        mH8 = XB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
            let Q = hH8.exec(A);
            if (Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return oHA(j6A(S6A(I)), PP1(Z), vS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                })
            }
            if (Q = gH8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return lH8(oHA(cH8(I), PP1(Z), vS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                }))
            }
            if (Q = uH8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return oHA(j6A(S6A(X)), PP1(G), vS(Z.trimLeft(), "day", 1, 31), {
                    hours: I,
                    minutes: Y,
                    seconds: J,
                    fractionalMilliseconds: W
                })
            }
            throw TypeError("Invalid RFC-7231 date-time value")
        }, "parseRfc7231DateTime"),
        dH8 = XB((A) => {
            if (A === null || A === void 0) return;
            let Q;
            if (typeof A === "number") Q = A;
            else if (typeof A === "string") Q = vP1(A);
            else if (typeof A === "object" && A.tag === 1) Q = A.value;
            else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
            if (Number.isNaN(Q) || Q === 1 / 0 || Q === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(Q * 1000))
        }, "parseEpochTimestamp"),
        oHA = XB((A, Q, B, G) => {
            let Z = Q - 1;
            return nH8(A, Z, B), new Date(Date.UTC(A, Z, B, vS(G.hours, "hour", 0, 23), vS(G.minutes, "minute", 0, 59), vS(G.seconds, "seconds", 0, 60), sH8(G.fractionalMilliseconds)))
        }, "buildDate"),
        cH8 = XB((A) => {
            let Q = new Date().getUTCFullYear(),
                B = Math.floor(Q / 100) * 100 + j6A(S6A(A));
            if (B < Q) return B + 100;
            return B
        }, "parseTwoDigitYear"),
        pH8 = 1576800000000,
        lH8 = XB((A) => {
            if (A.getTime() - new Date().getTime() > pH8) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
            return A
        }, "adjustRfc850Year"),
        PP1 = XB((A) => {
            let Q = fP1.indexOf(A);
            if (Q < 0) throw TypeError(`Invalid month: ${A}`);
            return Q + 1
        }, "parseMonthByShortName"),
        iH8 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        nH8 = XB((A, Q, B) => {
            let G = iH8[Q];
            if (Q === 1 && aH8(A)) G = 29;
            if (B > G) throw TypeError(`Invalid day for ${fP1[Q]} in ${A}: ${B}`)
        }, "validateDayOfMonth"),
        aH8 = XB((A) => {
            return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
        }, "isLeapYear"),
        vS = XB((A, Q, B, G) => {
            let Z = evQ(S6A(A));
            if (Z < B || Z > G) throw TypeError(`${Q} must be between ${B} and ${G}, inclusive`);
            return Z
        }, "parseDateValue"),
        sH8 = XB((A) => {
            if (A === null || A === void 0) return 0;
            return rvQ("0." + A) * 1000
        }, "parseMilliseconds"),
        rH8 = XB((A) => {
            let Q = A[0],
                B = 1;
            if (Q == "+") B = 1;
            else if (Q == "-") B = -1;
            else throw TypeError(`Offset direction, ${Q}, must be "+" or "-"`);
            let G = Number(A.substring(1, 3)),
                Z = Number(A.substring(4, 6));
            return B * (G * 60 + Z) * 60 * 1000
        }, "parseOffsetToMilliseconds"),
        S6A = XB((A) => {
            let Q = 0;
            while (Q < A.length - 1 && A.charAt(Q) === "0") Q++;
            if (Q === 0) return A;
            return A.slice(Q)
        }, "stripLeadingZeroes"),
        oH8 = class A extends Error {
            static {
                XB(this, "ServiceException")
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
        QbQ = XB((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        BbQ = XB(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = eH8(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw QbQ(Y, Q)
        }, "throwDefaultError"),
        tH8 = XB((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                BbQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        eH8 = XB((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        AC8 = XB((A) => {
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
        lvQ = !1,
        QC8 = XB((A) => {
            if (A && !lvQ && parseInt(A.substring(1, A.indexOf("."))) < 16) lvQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        BC8 = XB((A) => {
            let Q = [];
            for (let B in jP1.AlgorithmId) {
                let G = jP1.AlgorithmId[B];
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
        GC8 = XB((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        ZC8 = XB((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        IC8 = XB((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        GbQ = XB((A) => {
            return Object.assign(BC8(A), ZC8(A))
        }, "getDefaultExtensionConfiguration"),
        YC8 = GbQ,
        JC8 = XB((A) => {
            return Object.assign(GC8(A), IC8(A))
        }, "resolveDefaultRuntimeConfig"),
        WC8 = XB((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        ZbQ = XB((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = ZbQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        XC8 = XB((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        Go = XB(function(Q) {
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
    Go.from = (A) => {
        if (A && typeof A === "object" && (A instanceof Go || ("deserializeJSON" in A))) return A;
        else if (typeof A === "string" || Object.getPrototypeOf(A) === String.prototype) return Go(String(A));
        return Go(JSON.stringify(A))
    };
    Go.fromObject = Go.from;
    var FC8 = class {
        static {
            XB(this, "NoOpLogger")
        }
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
    };

    function hP1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, DC8(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            IbQ(G, null, I, Y)
        }
        return G
    }
    XB(hP1, "map");
    var VC8 = XB((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        KC8 = XB((A, Q) => {
            let B = {};
            for (let G in Q) IbQ(B, A, Q, G);
            return B
        }, "take"),
        DC8 = XB((A, Q, B) => {
            return hP1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        IbQ = XB((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = HC8, W = CC8, X = G] = Y;
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
        HC8 = XB((A) => A != null, "nonNullish"),
        CC8 = XB((A) => A, "pass");

    function YbQ(A) {
        if (A.includes(",") || A.includes('"')) A = `"${A.replace(/"/g,"\\\"")}"`;
        return A
    }
    XB(YbQ, "quoteHeader");
    var EC8 = XB((A) => {
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
        zC8 = XB((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        yP1 = XB((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(yP1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = yP1(A[B])
                }
                return Q
            }
            return A
        }, "_json");

    function JbQ(A, Q, B) {
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
    XB(JbQ, "splitEvery");
    var UC8 = XB((A) => {
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
var KbQ = U((FbQ) => {
    Object.defineProperty(FbQ, "__esModule", {
        value: !0
    });
    FbQ.getCredentials = FbQ.createGetRequest = void 0;
    var gP1 = P2(),
        $C8 = pvQ(),
        wC8 = XbQ(),
        qC8 = cm();

    function NC8(A) {
        return new $C8.HttpRequest({
            protocol: A.protocol,
            hostname: A.hostname,
            port: Number(A.port),
            path: A.pathname,
            query: Array.from(A.searchParams.entries()).reduce((Q, [B, G]) => {
                return Q[B] = G, Q
            }, {}),
            fragment: A.hash
        })
    }
    FbQ.createGetRequest = NC8;
    async function LC8(A, Q) {
        let G = await (0, qC8.sdkStreamMixin)(A.body).transformToString();
        if (A.statusCode === 200) {
            let Z = JSON.parse(G);
            if (typeof Z.AccessKeyId !== "string" || typeof Z.SecretAccessKey !== "string" || typeof Z.Token !== "string" || typeof Z.Expiration !== "string") throw new gP1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
                logger: Q
            });
            return {
                accessKeyId: Z.AccessKeyId,
                secretAccessKey: Z.SecretAccessKey,
                sessionToken: Z.Token,
                expiration: (0, wC8.parseRfc3339DateTime)(Z.Expiration)
            }
        }
        if (A.statusCode >= 400 && A.statusCode < 500) {
            let Z = {};
            try {
                Z = JSON.parse(G)
            } catch (I) {}
            throw Object.assign(new gP1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
                logger: Q
            }), {
                Code: Z.Code,
                Message: Z.Message
            })
        }
        throw new gP1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
            logger: Q
        })
    }
    FbQ.getCredentials = LC8
});
var CbQ = U((DbQ) => {
    Object.defineProperty(DbQ, "__esModule", {
        value: !0
    });
    DbQ.retryWrapper = void 0;
    var OC8 = (A, Q, B) => {
        return async () => {
            for (let G = 0; G < Q; ++G) try {
                return await A()
            } catch (Z) {
                await new Promise((I) => setTimeout(I, B))
            }
            return await A()
        }
    };
    DbQ.retryWrapper = OC8
});
var wbQ = U((UbQ) => {
    Object.defineProperty(UbQ, "__esModule", {
        value: !0
    });
    UbQ.fromHttp = void 0;
    var RC8 = RvQ(),
        TC8 = xS(),
        PC8 = oG(),
        EbQ = P2(),
        jC8 = RC8.__importDefault(UA("fs/promises")),
        SC8 = jvQ(),
        zbQ = KbQ(),
        _C8 = CbQ(),
        kC8 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        yC8 = "http://169.254.170.2",
        xC8 = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        vC8 = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
        bC8 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        fC8 = (A = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
            let Q, B = A.awsContainerCredentialsRelativeUri ?? process.env[kC8],
                G = A.awsContainerCredentialsFullUri ?? process.env[xC8],
                Z = A.awsContainerAuthorizationToken ?? process.env[bC8],
                I = A.awsContainerAuthorizationTokenFile ?? process.env[vC8],
                Y = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console.warn : A.logger.warn;
            if (B && G) Y("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), Y("awsContainerCredentialsFullUri will take precedence.");
            if (Z && I) Y("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), Y("awsContainerAuthorizationToken will take precedence.");
            if (G) Q = G;
            else if (B) Q = `${yC8}${B}`;
            else throw new EbQ.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
                logger: A.logger
            });
            let J = new URL(Q);
            (0, SC8.checkUrl)(J, A.logger);
            let W = new PC8.NodeHttpHandler({
                requestTimeout: A.timeout ?? 1000,
                connectionTimeout: A.timeout ?? 1000
            });
            return (0, _C8.retryWrapper)(async () => {
                let X = (0, zbQ.createGetRequest)(J);
                if (Z) X.headers.Authorization = Z;
                else if (I) X.headers.Authorization = (await jC8.default.readFile(I)).toString();
                try {
                    let F = await W.handle(X);
                    return (0, zbQ.getCredentials)(F.response).then((V) => (0, TC8.setCredentialFeature)(V, "CREDENTIALS_HTTP", "z"))
                } catch (F) {
                    throw new EbQ.CredentialsProviderError(String(F), {
                        logger: A.logger
                    })
                }
            }, A.maxRetries ?? 3, A.timeout ?? 1000)
        };
    UbQ.fromHttp = fC8
});
var mP1 = U((uP1) => {
    Object.defineProperty(uP1, "__esModule", {
        value: !0
    });
    uP1.fromHttp = void 0;
    var hC8 = wbQ();
    Object.defineProperty(uP1, "fromHttp", {
        enumerable: !0,
        get: function() {
            return hC8.fromHttp
        }
    })
});
var SbQ = U((D$7, jbQ) => {
    var {
        defineProperty: ZdA,
        getOwnPropertyDescriptor: uC8,
        getOwnPropertyNames: mC8
    } = Object, dC8 = Object.prototype.hasOwnProperty, IdA = (A, Q) => ZdA(A, "name", {
        value: Q,
        configurable: !0
    }), cC8 = (A, Q) => {
        for (var B in Q) ZdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pC8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of mC8(Q))
                if (!dC8.call(A, Z) && Z !== B) ZdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = uC8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lC8 = (A) => pC8(ZdA({}, "__esModule", {
        value: !0
    }), A), qbQ = {};
    cC8(qbQ, {
        AlgorithmId: () => ObQ,
        EndpointURLScheme: () => MbQ,
        FieldPosition: () => RbQ,
        HttpApiKeyAuthLocation: () => LbQ,
        HttpAuthLocation: () => NbQ,
        IniSectionType: () => TbQ,
        RequestHandlerProtocol: () => PbQ,
        SMITHY_CONTEXT_KEY: () => rC8,
        getDefaultClientConfiguration: () => aC8,
        resolveDefaultRuntimeConfig: () => sC8
    });
    jbQ.exports = lC8(qbQ);
    var NbQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(NbQ || {}),
        LbQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(LbQ || {}),
        MbQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(MbQ || {}),
        ObQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(ObQ || {}),
        iC8 = IdA((A) => {
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
        nC8 = IdA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        aC8 = IdA((A) => {
            return iC8(A)
        }, "getDefaultClientConfiguration"),
        sC8 = IdA((A) => {
            return nC8(A)
        }, "resolveDefaultRuntimeConfig"),
        RbQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(RbQ || {}),
        rC8 = "__smithy_context",
        TbQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(TbQ || {}),
        PbQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(PbQ || {})
});
var bbQ = U((H$7, vbQ) => {
    var {
        defineProperty: YdA,
        getOwnPropertyDescriptor: oC8,
        getOwnPropertyNames: tC8
    } = Object, eC8 = Object.prototype.hasOwnProperty, yd = (A, Q) => YdA(A, "name", {
        value: Q,
        configurable: !0
    }), AE8 = (A, Q) => {
        for (var B in Q) YdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, QE8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of tC8(Q))
                if (!eC8.call(A, Z) && Z !== B) YdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = oC8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, BE8 = (A) => QE8(YdA({}, "__esModule", {
        value: !0
    }), A), _bQ = {};
    AE8(_bQ, {
        Field: () => IE8,
        Fields: () => YE8,
        HttpRequest: () => JE8,
        HttpResponse: () => WE8,
        IHttpRequest: () => kbQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => GE8,
        isValidHostname: () => xbQ,
        resolveHttpHandlerRuntimeConfig: () => ZE8
    });
    vbQ.exports = BE8(_bQ);
    var GE8 = yd((A) => {
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
        ZE8 = yd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        kbQ = SbQ(),
        IE8 = class {
            static {
                yd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = kbQ.FieldPosition.HEADER,
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
        YE8 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                yd(this, "Fields")
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
        JE8 = class A {
            static {
                yd(this, "HttpRequest")
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
                if (B.query) B.query = ybQ(B.query);
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

    function ybQ(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    yd(ybQ, "cloneQuery");
    var WE8 = class {
        static {
            yd(this, "HttpResponse")
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

    function xbQ(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    yd(xbQ, "isValidHostname")
});
var QCA = U((U$7, mbQ) => {
    var {
        defineProperty: WdA,
        getOwnPropertyDescriptor: XE8,
        getOwnPropertyNames: FE8
    } = Object, VE8 = Object.prototype.hasOwnProperty, JdA = (A, Q) => WdA(A, "name", {
        value: Q,
        configurable: !0
    }), KE8 = (A, Q) => {
        for (var B in Q) WdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, DE8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of FE8(Q))
                if (!VE8.call(A, Z) && Z !== B) WdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = XE8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, HE8 = (A) => DE8(WdA({}, "__esModule", {
        value: !0
    }), A), fbQ = {};
    KE8(fbQ, {
        getHostHeaderPlugin: () => EE8,
        hostHeaderMiddleware: () => gbQ,
        hostHeaderMiddlewareOptions: () => ubQ,
        resolveHostHeaderConfig: () => hbQ
    });
    mbQ.exports = HE8(fbQ);
    var CE8 = bbQ();

    function hbQ(A) {
        return A
    }
    JdA(hbQ, "resolveHostHeaderConfig");
    var gbQ = JdA((A) => (Q) => async (B) => {
            if (!CE8.HttpRequest.isInstance(B.request)) return Q(B);
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
        ubQ = {
            name: "hostHeaderMiddleware",
            step: "build",
            priority: "low",
            tags: ["HOST"],
            override: !0
        },
        EE8 = JdA((A) => ({
            applyToStack: JdA((Q) => {
                Q.add(gbQ(A), ubQ)
            }, "applyToStack")
        }), "getHostHeaderPlugin")
});
var BCA = U(($$7, lbQ) => {
    var {
        defineProperty: XdA,
        getOwnPropertyDescriptor: zE8,
        getOwnPropertyNames: UE8
    } = Object, $E8 = Object.prototype.hasOwnProperty, dP1 = (A, Q) => XdA(A, "name", {
        value: Q,
        configurable: !0
    }), wE8 = (A, Q) => {
        for (var B in Q) XdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, qE8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of UE8(Q))
                if (!$E8.call(A, Z) && Z !== B) XdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = zE8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, NE8 = (A) => qE8(XdA({}, "__esModule", {
        value: !0
    }), A), dbQ = {};
    wE8(dbQ, {
        getLoggerPlugin: () => LE8,
        loggerMiddleware: () => cbQ,
        loggerMiddlewareOptions: () => pbQ
    });
    lbQ.exports = NE8(dbQ);
    var cbQ = dP1(() => (A, Q) => async (B) => {
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
        pbQ = {
            name: "loggerMiddleware",
            tags: ["LOGGER"],
            step: "initialize",
            override: !0
        },
        LE8 = dP1((A) => ({
            applyToStack: dP1((Q) => {
                Q.add(cbQ(), pbQ)
            }, "applyToStack")
        }), "getLoggerPlugin")
});