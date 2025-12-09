/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_028.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (11次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 28/61
 * Lines: 120876 - 122374 (1499 lines)
 * Original file: cli.js
 */

});
var Mj1 = U((Yw7, nuQ) => {
    var {
        defineProperty: adA,
        getOwnPropertyDescriptor: Hq8,
        getOwnPropertyNames: Cq8
    } = Object, Eq8 = Object.prototype.hasOwnProperty, sdA = (A, Q) => adA(A, "name", {
        value: Q,
        configurable: !0
    }), zq8 = (A, Q) => {
        for (var B in Q) adA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Uq8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Cq8(Q))
                if (!Eq8.call(A, Z) && Z !== B) adA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Hq8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, $q8 = (A) => Uq8(adA({}, "__esModule", {
        value: !0
    }), A), guQ = {};
    zq8(guQ, {
        AlgorithmId: () => cuQ,
        EndpointURLScheme: () => duQ,
        FieldPosition: () => puQ,
        HttpApiKeyAuthLocation: () => muQ,
        HttpAuthLocation: () => uuQ,
        IniSectionType: () => luQ,
        RequestHandlerProtocol: () => iuQ,
        SMITHY_CONTEXT_KEY: () => Mq8,
        getDefaultClientConfiguration: () => Nq8,
        resolveDefaultRuntimeConfig: () => Lq8
    });
    nuQ.exports = $q8(guQ);
    var uuQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(uuQ || {}),
        muQ = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(muQ || {}),
        duQ = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(duQ || {}),
        cuQ = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(cuQ || {}),
        wq8 = sdA((A) => {
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
        qq8 = sdA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        Nq8 = sdA((A) => {
            return wq8(A)
        }, "getDefaultClientConfiguration"),
        Lq8 = sdA((A) => {
            return qq8(A)
        }, "resolveDefaultRuntimeConfig"),
        puQ = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(puQ || {}),
        Mq8 = "__smithy_context",
        luQ = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(luQ || {}),
        iuQ = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(iuQ || {})
});
var ECA = U((Jw7, VmQ) => {
    var {
        defineProperty: tdA,
        getOwnPropertyDescriptor: Oq8,
        getOwnPropertyNames: Rq8
    } = Object, Tq8 = Object.prototype.hasOwnProperty, VB = (A, Q) => tdA(A, "name", {
        value: Q,
        configurable: !0
    }), Pq8 = (A, Q) => {
        for (var B in Q) tdA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, jq8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Rq8(Q))
                if (!Tq8.call(A, Z) && Z !== B) tdA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Oq8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Sq8 = (A) => jq8(tdA({}, "__esModule", {
        value: !0
    }), A), suQ = {};
    Pq8(suQ, {
        Client: () => _q8,
        Command: () => ouQ,
        LazyJsonString: () => Yo,
        NoOpLogger: () => TN8,
        SENSITIVE_STRING: () => yq8,
        ServiceException: () => HN8,
        _json: () => _j1,
        collectBody: () => Oj1.collectBody,
        convertMap: () => PN8,
        createAggregatedClient: () => xq8,
        dateToUtcString: () => GmQ,
        decorateServiceException: () => ZmQ,
        emitWarningIfUnsupportedVersion: () => UN8,
        expectBoolean: () => bq8,
        expectByte: () => Sj1,
        expectFloat32: () => rdA,
        expectInt: () => hq8,
        expectInt32: () => Pj1,
        expectLong: () => HCA,
        expectNonNull: () => uq8,
        expectNumber: () => DCA,
        expectObject: () => tuQ,
        expectShort: () => jj1,
        expectString: () => mq8,
        expectUnion: () => dq8,
        extendedEncodeURIComponent: () => Oj1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => ON8,
        getDefaultClientConfiguration: () => LN8,
        getDefaultExtensionConfiguration: () => YmQ,
        getValueFromTextNode: () => JmQ,
        handleFloat: () => lq8,
        isSerializableHeaderValue: () => RN8,
        limitedParseDouble: () => xj1,
        limitedParseFloat: () => iq8,
        limitedParseFloat32: () => nq8,
        loadConfigsForDefaultMode: () => zN8,
        logger: () => CCA,
        map: () => bj1,
        parseBoolean: () => vq8,
        parseEpochTimestamp: () => IN8,
        parseRfc3339DateTime: () => tq8,
        parseRfc3339DateTimeWithOffset: () => AN8,
        parseRfc7231DateTime: () => ZN8,
        quoteHeader: () => XmQ,
        resolveDefaultRuntimeConfig: () => MN8,
        resolvedPath: () => Oj1.resolvedPath,
        serializeDateTime: () => xN8,
        serializeFloat: () => yN8,
        splitEvery: () => FmQ,
        splitHeader: () => vN8,
        strictParseByte: () => BmQ,
        strictParseDouble: () => yj1,
        strictParseFloat: () => cq8,
        strictParseFloat32: () => euQ,
        strictParseInt: () => aq8,
        strictParseInt32: () => sq8,
        strictParseLong: () => QmQ,
        strictParseShort: () => m6A,
        take: () => jN8,
        throwDefaultError: () => ImQ,
        withBaseException: () => CN8
    });
    VmQ.exports = Sq8(suQ);
    var ruQ = PR(),
        _q8 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, ruQ.constructStack)()
            }
            static {
                VB(this, "Client")
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
        Oj1 = C5(),
        Tj1 = Mj1(),
        ouQ = class {
            constructor() {
                this.middlewareStack = (0, ruQ.constructStack)()
            }
            static {
                VB(this, "Command")
            }
            static classBuilder() {
                return new kq8
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
                        [Tj1.SMITHY_CONTEXT_KEY]: {
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
        kq8 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                VB(this, "ClassBuilder")
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
                return Q = class extends ouQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this)
                    }
                    static {
                        VB(this, "CommandRef")
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
        yq8 = "***SensitiveInformation***",
        xq8 = VB((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = VB(async function(Y, J, W) {
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
        vq8 = VB((A) => {
            switch (A) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                default:
                    throw Error(`Unable to parse boolean value "${A}"`)
            }
        }, "parseBoolean"),
        bq8 = VB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "number") {
                if (A === 0 || A === 1) CCA.warn(odA(`Expected boolean, got ${typeof A}: ${A}`));
                if (A === 0) return !1;
                if (A === 1) return !0
            }
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (Q === "false" || Q === "true") CCA.warn(odA(`Expected boolean, got ${typeof A}: ${A}`));
                if (Q === "false") return !1;
                if (Q === "true") return !0
            }
            if (typeof A === "boolean") return A;
            throw TypeError(`Expected boolean, got ${typeof A}: ${A}`)
        }, "expectBoolean"),
        DCA = VB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") {
                let Q = parseFloat(A);
                if (!Number.isNaN(Q)) {
                    if (String(Q) !== String(A)) CCA.warn(odA(`Expected number but observed string: ${A}`));
                    return Q
                }
            }
            if (typeof A === "number") return A;
            throw TypeError(`Expected number, got ${typeof A}: ${A}`)
        }, "expectNumber"),
        fq8 = Math.ceil(340282346638528860000000000000000000000),
        rdA = VB((A) => {
            let Q = DCA(A);
            if (Q !== void 0 && !Number.isNaN(Q) && Q !== 1 / 0 && Q !== -1 / 0) {
                if (Math.abs(Q) > fq8) throw TypeError(`Expected 32-bit float, got ${A}`)
            }
            return Q
        }, "expectFloat32"),
        HCA = VB((A) => {
            if (A === null || A === void 0) return;
            if (Number.isInteger(A) && !Number.isNaN(A)) return A;
            throw TypeError(`Expected integer, got ${typeof A}: ${A}`)
        }, "expectLong"),
        hq8 = HCA,
        Pj1 = VB((A) => kj1(A, 32), "expectInt32"),
        jj1 = VB((A) => kj1(A, 16), "expectShort"),
        Sj1 = VB((A) => kj1(A, 8), "expectByte"),
        kj1 = VB((A, Q) => {
            let B = HCA(A);
            if (B !== void 0 && gq8(B, Q) !== B) throw TypeError(`Expected ${Q}-bit integer, got ${A}`);
            return B
        }, "expectSizedInt"),
        gq8 = VB((A, Q) => {
            switch (Q) {
                case 32:
                    return Int32Array.of(A)[0];
                case 16:
                    return Int16Array.of(A)[0];
                case 8:
                    return Int8Array.of(A)[0]
            }
        }, "castInt"),
        uq8 = VB((A, Q) => {
            if (A === null || A === void 0) {
                if (Q) throw TypeError(`Expected a non-null value for ${Q}`);
                throw TypeError("Expected a non-null value")
            }
            return A
        }, "expectNonNull"),
        tuQ = VB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "object" && !Array.isArray(A)) return A;
            let Q = Array.isArray(A) ? "array" : typeof A;
            throw TypeError(`Expected object, got ${Q}: ${A}`)
        }, "expectObject"),
        mq8 = VB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A === "string") return A;
            if (["boolean", "number", "bigint"].includes(typeof A)) return CCA.warn(odA(`Expected string, got ${typeof A}: ${A}`)), String(A);
            throw TypeError(`Expected string, got ${typeof A}: ${A}`)
        }, "expectString"),
        dq8 = VB((A) => {
            if (A === null || A === void 0) return;
            let Q = tuQ(A),
                B = Object.entries(Q).filter(([, G]) => G != null).map(([G]) => G);
            if (B.length === 0) throw TypeError("Unions must have exactly one non-null member. None were found.");
            if (B.length > 1) throw TypeError(`Unions must have exactly one non-null member. Keys ${B} were not null.`);
            return Q
        }, "expectUnion"),
        yj1 = VB((A) => {
            if (typeof A == "string") return DCA(c6A(A));
            return DCA(A)
        }, "strictParseDouble"),
        cq8 = yj1,
        euQ = VB((A) => {
            if (typeof A == "string") return rdA(c6A(A));
            return rdA(A)
        }, "strictParseFloat32"),
        pq8 = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g,
        c6A = VB((A) => {
            let Q = A.match(pq8);
            if (Q === null || Q[0].length !== A.length) throw TypeError("Expected real number, got implicit NaN");
            return parseFloat(A)
        }, "parseNumber"),
        xj1 = VB((A) => {
            if (typeof A == "string") return AmQ(A);
            return DCA(A)
        }, "limitedParseDouble"),
        lq8 = xj1,
        iq8 = xj1,
        nq8 = VB((A) => {
            if (typeof A == "string") return AmQ(A);
            return rdA(A)
        }, "limitedParseFloat32"),
        AmQ = VB((A) => {
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
        QmQ = VB((A) => {
            if (typeof A === "string") return HCA(c6A(A));
            return HCA(A)
        }, "strictParseLong"),
        aq8 = QmQ,
        sq8 = VB((A) => {
            if (typeof A === "string") return Pj1(c6A(A));
            return Pj1(A)
        }, "strictParseInt32"),
        m6A = VB((A) => {
            if (typeof A === "string") return jj1(c6A(A));
            return jj1(A)
        }, "strictParseShort"),
        BmQ = VB((A) => {
            if (typeof A === "string") return Sj1(c6A(A));
            return Sj1(A)
        }, "strictParseByte"),
        odA = VB((A) => {
            return String(TypeError(A).stack || A).split(`
`).slice(0, 5).filter((Q) => !Q.includes("stackTraceWarning")).join(`
`)
        }, "stackTraceWarning"),
        CCA = {
            warn: console.warn
        },
        rq8 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        vj1 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function GmQ(A) {
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
        return `${rq8[G]}, ${W} ${vj1[B]} ${Q} ${X}:${F}:${V} GMT`
    }
    VB(GmQ, "dateToUtcString");
    var oq8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/),
        tq8 = VB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = oq8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X] = Q, F = m6A(d6A(G)), V = hS(Z, "month", 1, 12), K = hS(I, "day", 1, 31);
            return KCA(F, V, K, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            })
        }, "parseRfc3339DateTime"),
        eq8 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/),
        AN8 = VB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-3339 date-times must be expressed as strings");
            let Q = eq8.exec(A);
            if (!Q) throw TypeError("Invalid RFC-3339 date-time value");
            let [B, G, Z, I, Y, J, W, X, F] = Q, V = m6A(d6A(G)), K = hS(Z, "month", 1, 12), D = hS(I, "day", 1, 31), H = KCA(V, K, D, {
                hours: Y,
                minutes: J,
                seconds: W,
                fractionalMilliseconds: X
            });
            if (F.toUpperCase() != "Z") H.setTime(H.getTime() - DN8(F));
            return H
        }, "parseRfc3339DateTimeWithOffset"),
        QN8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        BN8 = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/),
        GN8 = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/),
        ZN8 = VB((A) => {
            if (A === null || A === void 0) return;
            if (typeof A !== "string") throw TypeError("RFC-7231 date-times must be expressed as strings");
            let Q = QN8.exec(A);
            if (Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return KCA(m6A(d6A(I)), Rj1(Z), hS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                })
            }
            if (Q = BN8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return WN8(KCA(YN8(I), Rj1(Z), hS(G, "day", 1, 31), {
                    hours: Y,
                    minutes: J,
                    seconds: W,
                    fractionalMilliseconds: X
                }))
            }
            if (Q = GN8.exec(A), Q) {
                let [B, G, Z, I, Y, J, W, X] = Q;
                return KCA(m6A(d6A(X)), Rj1(G), hS(Z.trimLeft(), "day", 1, 31), {
                    hours: I,
                    minutes: Y,
                    seconds: J,
                    fractionalMilliseconds: W
                })
            }
            throw TypeError("Invalid RFC-7231 date-time value")
        }, "parseRfc7231DateTime"),
        IN8 = VB((A) => {
            if (A === null || A === void 0) return;
            let Q;
            if (typeof A === "number") Q = A;
            else if (typeof A === "string") Q = yj1(A);
            else if (typeof A === "object" && A.tag === 1) Q = A.value;
            else throw TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
            if (Number.isNaN(Q) || Q === 1 / 0 || Q === -1 / 0) throw TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
            return new Date(Math.round(Q * 1000))
        }, "parseEpochTimestamp"),
        KCA = VB((A, Q, B, G) => {
            let Z = Q - 1;
            return FN8(A, Z, B), new Date(Date.UTC(A, Z, B, hS(G.hours, "hour", 0, 23), hS(G.minutes, "minute", 0, 59), hS(G.seconds, "seconds", 0, 60), KN8(G.fractionalMilliseconds)))
        }, "buildDate"),
        YN8 = VB((A) => {
            let Q = new Date().getUTCFullYear(),
                B = Math.floor(Q / 100) * 100 + m6A(d6A(A));
            if (B < Q) return B + 100;
            return B
        }, "parseTwoDigitYear"),
        JN8 = 1576800000000,
        WN8 = VB((A) => {
            if (A.getTime() - new Date().getTime() > JN8) return new Date(Date.UTC(A.getUTCFullYear() - 100, A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), A.getUTCMilliseconds()));
            return A
        }, "adjustRfc850Year"),
        Rj1 = VB((A) => {
            let Q = vj1.indexOf(A);
            if (Q < 0) throw TypeError(`Invalid month: ${A}`);
            return Q + 1
        }, "parseMonthByShortName"),
        XN8 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        FN8 = VB((A, Q, B) => {
            let G = XN8[Q];
            if (Q === 1 && VN8(A)) G = 29;
            if (B > G) throw TypeError(`Invalid day for ${vj1[Q]} in ${A}: ${B}`)
        }, "validateDayOfMonth"),
        VN8 = VB((A) => {
            return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)
        }, "isLeapYear"),
        hS = VB((A, Q, B, G) => {
            let Z = BmQ(d6A(A));
            if (Z < B || Z > G) throw TypeError(`${Q} must be between ${B} and ${G}, inclusive`);
            return Z
        }, "parseDateValue"),
        KN8 = VB((A) => {
            if (A === null || A === void 0) return 0;
            return euQ("0." + A) * 1000
        }, "parseMilliseconds"),
        DN8 = VB((A) => {
            let Q = A[0],
                B = 1;
            if (Q == "+") B = 1;
            else if (Q == "-") B = -1;
            else throw TypeError(`Offset direction, ${Q}, must be "+" or "-"`);
            let G = Number(A.substring(1, 3)),
                Z = Number(A.substring(4, 6));
            return B * (G * 60 + Z) * 60 * 1000
        }, "parseOffsetToMilliseconds"),
        d6A = VB((A) => {
            let Q = 0;
            while (Q < A.length - 1 && A.charAt(Q) === "0") Q++;
            if (Q === 0) return A;
            return A.slice(Q)
        }, "stripLeadingZeroes"),
        HN8 = class A extends Error {
            static {
                VB(this, "ServiceException")
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
        ZmQ = VB((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        ImQ = VB(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = EN8(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw ZmQ(Y, Q)
        }, "throwDefaultError"),
        CN8 = VB((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                ImQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        EN8 = VB((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        zN8 = VB((A) => {
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
        auQ = !1,
        UN8 = VB((A) => {
            if (A && !auQ && parseInt(A.substring(1, A.indexOf("."))) < 16) auQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        $N8 = VB((A) => {
            let Q = [];
            for (let B in Tj1.AlgorithmId) {
                let G = Tj1.AlgorithmId[B];
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
        wN8 = VB((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        qN8 = VB((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        NN8 = VB((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        YmQ = VB((A) => {
            return Object.assign($N8(A), qN8(A))
        }, "getDefaultExtensionConfiguration"),
        LN8 = YmQ,
        MN8 = VB((A) => {
            return Object.assign(wN8(A), NN8(A))
        }, "resolveDefaultRuntimeConfig"),
        ON8 = VB((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        JmQ = VB((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = JmQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        RN8 = VB((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        Yo = VB(function(Q) {
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
    Yo.from = (A) => {
        if (A && typeof A === "object" && (A instanceof Yo || ("deserializeJSON" in A))) return A;
        else if (typeof A === "string" || Object.getPrototypeOf(A) === String.prototype) return Yo(String(A));
        return Yo(JSON.stringify(A))
    };
    Yo.fromObject = Yo.from;
    var TN8 = class {
        static {
            VB(this, "NoOpLogger")
        }
        trace() {}
        debug() {}
        info() {}
        warn() {}
        error() {}
    };

    function bj1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, SN8(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            WmQ(G, null, I, Y)
        }
        return G
    }
    VB(bj1, "map");
    var PN8 = VB((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        jN8 = VB((A, Q) => {
            let B = {};
            for (let G in Q) WmQ(B, A, Q, G);
            return B
        }, "take"),
        SN8 = VB((A, Q, B) => {
            return bj1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        WmQ = VB((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = _N8, W = kN8, X = G] = Y;
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
        _N8 = VB((A) => A != null, "nonNullish"),
        kN8 = VB((A) => A, "pass");

    function XmQ(A) {
        if (A.includes(",") || A.includes('"')) A = `"${A.replace(/"/g,"\\\"")}"`;
        return A
    }
    VB(XmQ, "quoteHeader");
    var yN8 = VB((A) => {
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
        xN8 = VB((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        _j1 = VB((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(_j1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = _j1(A[B])
                }
                return Q
            }
            return A
        }, "_json");

    function FmQ(A, Q, B) {
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
    VB(FmQ, "splitEvery");
    var vN8 = VB((A) => {
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
var HmQ = U((KmQ) => {
    Object.defineProperty(KmQ, "__esModule", {
        value: !0
    });
    KmQ.fromBase64 = void 0;
    var bN8 = kI(),
        fN8 = /^[A-Za-z0-9+/]*={0,2}$/,
        hN8 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!fN8.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, bN8.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    KmQ.fromBase64 = hN8
});
var zmQ = U((CmQ) => {
    Object.defineProperty(CmQ, "__esModule", {
        value: !0
    });
    CmQ.toBase64 = void 0;
    var gN8 = kI(),
        uN8 = L2(),
        mN8 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, uN8.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, gN8.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    CmQ.toBase64 = mN8
});
var wmQ = U((Cw7, edA) => {
    var {
        defineProperty: UmQ,
        getOwnPropertyDescriptor: dN8,
        getOwnPropertyNames: cN8
    } = Object, pN8 = Object.prototype.hasOwnProperty, fj1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of cN8(Q))
                if (!pN8.call(A, Z) && Z !== B) UmQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = dN8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, $mQ = (A, Q, B) => (fj1(A, Q, "default"), B && fj1(B, Q, "default")), lN8 = (A) => fj1(UmQ({}, "__esModule", {
        value: !0
    }), A), hj1 = {};
    edA.exports = lN8(hj1);
    $mQ(hj1, HmQ(), edA.exports);
    $mQ(hj1, zmQ(), edA.exports)
});
var fmQ = U((vmQ) => {
    Object.defineProperty(vmQ, "__esModule", {
        value: !0
    });
    vmQ.ruleSet = void 0;
    var _mQ = "required",
        _L = "fn",
        kL = "argv",
        i6A = "ref",
        qmQ = !0,
        NmQ = "isSet",
        zCA = "booleanEquals",
        p6A = "error",
        l6A = "endpoint",
        Yb = "tree",
        gj1 = "PartitionResult",
        uj1 = "getAttr",
        LmQ = {
            [_mQ]: !1,
            type: "String"
        },
        MmQ = {
            [_mQ]: !0,
            default: !1,
            type: "Boolean"
        },
        OmQ = {
            [i6A]: "Endpoint"
        },
        kmQ = {
            [_L]: zCA,
            [kL]: [{
                [i6A]: "UseFIPS"
            }, !0]
        },
        ymQ = {
            [_L]: zCA,
            [kL]: [{
                [i6A]: "UseDualStack"
            }, !0]
        },
        SL = {},
        RmQ = {
            [_L]: uj1,
            [kL]: [{
                [i6A]: gj1
            }, "supportsFIPS"]
        },
        xmQ = {
            [i6A]: gj1
        },
        TmQ = {
            [_L]: zCA,
            [kL]: [!0, {
                [_L]: uj1,
                [kL]: [xmQ, "supportsDualStack"]
            }]
        },
        PmQ = [kmQ],
        jmQ = [ymQ],
        SmQ = [{
            [i6A]: "Region"
        }],
        iN8 = {
            version: "1.0",
            parameters: {
                Region: LmQ,
                UseDualStack: MmQ,
                UseFIPS: MmQ,
                Endpoint: LmQ
            },
            rules: [{
                conditions: [{
                    [_L]: NmQ,
                    [kL]: [OmQ]
                }],
                rules: [{
                    conditions: PmQ,
                    error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                    type: p6A
                }, {
                    conditions: jmQ,
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: p6A
                }, {
                    endpoint: {
                        url: OmQ,
                        properties: SL,
                        headers: SL
                    },
                    type: l6A
                }],
                type: Yb
            }, {
                conditions: [{
                    [_L]: NmQ,
                    [kL]: SmQ
                }],
                rules: [{
                    conditions: [{
                        [_L]: "aws.partition",
                        [kL]: SmQ,
                        assign: gj1
                    }],
                    rules: [{
                        conditions: [kmQ, ymQ],
                        rules: [{
                            conditions: [{
                                [_L]: zCA,
                                [kL]: [qmQ, RmQ]
                            }, TmQ],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: SL,
                                    headers: SL
                                },
                                type: l6A
                            }],
                            type: Yb
                        }, {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: p6A
                        }],
                        type: Yb
                    }, {
                        conditions: PmQ,
                        rules: [{
                            conditions: [{
                                [_L]: zCA,
                                [kL]: [RmQ, qmQ]
                            }],
                            rules: [{
                                conditions: [{
                                    [_L]: "stringEquals",
                                    [kL]: [{
                                        [_L]: uj1,
                                        [kL]: [xmQ, "name"]
                                    }, "aws-us-gov"]
                                }],
                                endpoint: {
                                    url: "https://portal.sso.{Region}.amazonaws.com",
                                    properties: SL,
                                    headers: SL
                                },
                                type: l6A
                            }, {
                                endpoint: {
                                    url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}",
                                    properties: SL,
                                    headers: SL
                                },
                                type: l6A
                            }],
                            type: Yb
                        }, {
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: p6A
                        }],
                        type: Yb
                    }, {
                        conditions: jmQ,
                        rules: [{
                            conditions: [TmQ],
                            rules: [{
                                endpoint: {
                                    url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                    properties: SL,
                                    headers: SL
                                },
                                type: l6A
                            }],
                            type: Yb
                        }, {
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: p6A
                        }],
                        type: Yb
                    }, {
                        endpoint: {
                            url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}",
                            properties: SL,
                            headers: SL
                        },
                        type: l6A
                    }],
                    type: Yb
                }],
                type: Yb
            }, {
                error: "Invalid Configuration: Missing Region",
                type: p6A
            }]
        };
    vmQ.ruleSet = iN8
});
var umQ = U((hmQ) => {
    Object.defineProperty(hmQ, "__esModule", {
        value: !0
    });
    hmQ.defaultEndpointResolver = void 0;
    var nN8 = y6A(),
        mj1 = II(),
        aN8 = fmQ(),
        sN8 = new mj1.EndpointCache({
            size: 50,
            params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
        }),
        rN8 = (A, Q = {}) => {
            return sN8.get(A, () => (0, mj1.resolveEndpoint)(aN8.ruleSet, {
                endpointParams: A,
                logger: Q.logger
            }))
        };
    hmQ.defaultEndpointResolver = rN8;
    mj1.customEndpointFunctions.aws = nN8.awsEndpointFunctions
});
var lmQ = U((cmQ) => {
    Object.defineProperty(cmQ, "__esModule", {
        value: !0
    });
    cmQ.getRuntimeConfig = void 0;
    var oN8 = OV(),
        tN8 = nB(),
        eN8 = ECA(),
        AL8 = zJ(),
        mmQ = wmQ(),
        dmQ = L2(),
        QL8 = qj1(),
        BL8 = umQ(),
        GL8 = (A) => {
            return {
                apiVersion: "2019-06-10",
                base64Decoder: A?.base64Decoder ?? mmQ.fromBase64,
                base64Encoder: A?.base64Encoder ?? mmQ.toBase64,
                disableHostPrefix: A?.disableHostPrefix ?? !1,
                endpointProvider: A?.endpointProvider ?? BL8.defaultEndpointResolver,
                extensions: A?.extensions ?? [],
                httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? QL8.defaultSSOHttpAuthSchemeProvider,
                httpAuthSchemes: A?.httpAuthSchemes ?? [{
                    schemeId: "aws.auth#sigv4",
                    identityProvider: (Q) => Q.getIdentityProvider("aws.auth#sigv4"),
                    signer: new oN8.AwsSdkSigV4Signer
                }, {
                    schemeId: "smithy.api#noAuth",
                    identityProvider: (Q) => Q.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                    signer: new tN8.NoAuthSigner
                }],
                logger: A?.logger ?? new eN8.NoOpLogger,
                serviceId: A?.serviceId ?? "SSO",
                urlParser: A?.urlParser ?? AL8.parseUrl,
                utf8Decoder: A?.utf8Decoder ?? dmQ.fromUtf8,
                utf8Encoder: A?.utf8Encoder ?? dmQ.toUtf8
            }
        };
    cmQ.getRuntimeConfig = GL8
});
var omQ = U((smQ) => {
    Object.defineProperty(smQ, "__esModule", {
        value: !0
    });
    smQ.getRuntimeConfig = void 0;
    var ZL8 = SuQ(),
        IL8 = ZL8.__importDefault(_uQ()),
        YL8 = OV(),
        imQ = VCA(),
        AcA = S8(),
        JL8 = wX(),
        nmQ = X6(),
        n6A = xI(),
        amQ = oG(),
        WL8 = qX(),
        XL8 = FW(),
        FL8 = lmQ(),
        VL8 = ECA(),
        KL8 = NX(),
        DL8 = ECA(),
        HL8 = (A) => {
            (0, DL8.emitWarningIfUnsupportedVersion)(process.version);
            let Q = (0, KL8.resolveDefaultsModeConfig)(A),
                B = () => Q().then(VL8.loadConfigsForDefaultMode),
                G = (0, FL8.getRuntimeConfig)(A);
            (0, YL8.emitWarningIfUnsupportedVersion)(process.version);
            let Z = {
                profile: A?.profile
            };
            return {
                ...G,
                ...A,
                runtime: "node",
                defaultsMode: Q,
                bodyLengthChecker: A?.bodyLengthChecker ?? WL8.calculateBodyLength,
                defaultUserAgentProvider: A?.defaultUserAgentProvider ?? (0, imQ.createDefaultUserAgentProvider)({
                    serviceId: G.serviceId,
                    clientVersion: IL8.default.version
                }),
                maxAttempts: A?.maxAttempts ?? (0, n6A.loadConfig)(nmQ.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
                region: A?.region ?? (0, n6A.loadConfig)(AcA.NODE_REGION_CONFIG_OPTIONS, {
                    ...AcA.NODE_REGION_CONFIG_FILE_OPTIONS,
                    ...Z
                }),
                requestHandler: amQ.NodeHttpHandler.create(A?.requestHandler ?? B),
                retryMode: A?.retryMode ?? (0, n6A.loadConfig)({
                    ...nmQ.NODE_RETRY_MODE_CONFIG_OPTIONS,
                    default: async () => (await B()).retryMode || XL8.DEFAULT_RETRY_MODE
                }, A),
                sha256: A?.sha256 ?? JL8.Hash.bind(null, "sha256"),
                streamCollector: A?.streamCollector ?? amQ.streamCollector,
                useDualstackEndpoint: A?.useDualstackEndpoint ?? (0, n6A.loadConfig)(AcA.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, Z),
                useFipsEndpoint: A?.useFipsEndpoint ?? (0, n6A.loadConfig)(AcA.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, Z),
                userAgentAppId: A?.userAgentAppId ?? (0, n6A.loadConfig)(imQ.NODE_APP_ID_CONFIG_OPTIONS, Z)
            }
        };
    smQ.getRuntimeConfig = HL8
});
var UCA = U((ww7, GdQ) => {
    var {
        defineProperty: QcA,
        getOwnPropertyDescriptor: CL8,
        getOwnPropertyNames: EL8
    } = Object, zL8 = Object.prototype.hasOwnProperty, gS = (A, Q) => QcA(A, "name", {
        value: Q,
        configurable: !0
    }), UL8 = (A, Q) => {
        for (var B in Q) QcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, $L8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of EL8(Q))
                if (!zL8.call(A, Z) && Z !== B) QcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = CL8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, wL8 = (A) => $L8(QcA({}, "__esModule", {
        value: !0
    }), A), emQ = {};
    UL8(emQ, {
        NODE_REGION_CONFIG_FILE_OPTIONS: () => ML8,
        NODE_REGION_CONFIG_OPTIONS: () => LL8,
        REGION_ENV_NAME: () => AdQ,
        REGION_INI_NAME: () => QdQ,
        getAwsRegionExtensionConfiguration: () => qL8,
        resolveAwsRegionExtensionConfiguration: () => NL8,
        resolveRegionConfig: () => OL8
    });
    GdQ.exports = wL8(emQ);
    var qL8 = gS((A) => {
            return {
                setRegion(Q) {
                    A.region = Q
                },
                region() {
                    return A.region
                }
            }
        }, "getAwsRegionExtensionConfiguration"),
        NL8 = gS((A) => {
            return {
                region: A.region()
            }
        }, "resolveAwsRegionExtensionConfiguration"),
        AdQ = "AWS_REGION",
        QdQ = "region",
        LL8 = {
            environmentVariableSelector: gS((A) => A[AdQ], "environmentVariableSelector"),
            configFileSelector: gS((A) => A[QdQ], "configFileSelector"),
            default: gS(() => {
                throw Error("Region is missing")
            }, "default")
        },
        ML8 = {
            preferredFile: "credentials"
        },
        BdQ = gS((A) => typeof A === "string" && (A.startsWith("fips-") || A.endsWith("-fips")), "isFipsRegion"),
        tmQ = gS((A) => BdQ(A) ? ["fips-aws-global", "aws-fips"].includes(A) ? "us-east-1" : A.replace(/fips-(dkr-|prod-)?|-fips/, "") : A, "getRealRegion"),
        OL8 = gS((A) => {
            let {
                region: Q,
                useFipsEndpoint: B
            } = A;
            if (!Q) throw Error("Region is missing");
            return Object.assign(A, {
                region: gS(async () => {
                    if (typeof Q === "string") return tmQ(Q);
                    let G = await Q();
                    return tmQ(G)
                }, "region"),
                useFipsEndpoint: gS(async () => {
                    let G = typeof Q === "string" ? Q : await Q();
                    if (BdQ(G)) return !0;
                    return typeof B !== "function" ? Promise.resolve(!!B) : B()
                }, "useFipsEndpoint")
            })
        }, "resolveRegionConfig")
});
var XdQ = U((qw7, WdQ) => {
    var {
        defineProperty: BcA,
        getOwnPropertyDescriptor: RL8,
        getOwnPropertyNames: TL8
    } = Object, PL8 = Object.prototype.hasOwnProperty, hd = (A, Q) => BcA(A, "name", {
        value: Q,
        configurable: !0
    }), jL8 = (A, Q) => {
        for (var B in Q) BcA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, SL8 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of TL8(Q))
                if (!PL8.call(A, Z) && Z !== B) BcA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = RL8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, _L8 = (A) => SL8(BcA({}, "__esModule", {
        value: !0
    }), A), ZdQ = {};
    jL8(ZdQ, {
        Field: () => xL8,
        Fields: () => vL8,
        HttpRequest: () => bL8,
        HttpResponse: () => fL8,
        IHttpRequest: () => IdQ.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => kL8,
        isValidHostname: () => JdQ,
        resolveHttpHandlerRuntimeConfig: () => yL8
    });
    WdQ.exports = _L8(ZdQ);
    var kL8 = hd((A) => {
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
        yL8 = hd((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        IdQ = Mj1(),
        xL8 = class {
            static {
                hd(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = IdQ.FieldPosition.HEADER,
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
        vL8 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                hd(this, "Fields")
            }
            setField(A) {
                this.entries[A.name.toLowerCase()] = A
            }