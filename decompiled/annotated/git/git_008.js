/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: git_008.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (1次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 8/34
 * Lines: 101690 - 103189 (1500 lines)
 * Original file: cli.js
 */

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
        iO1 = C5(),
        aO1 = OO1(),
        aMQ = class {
            constructor() {
                this.middlewareStack = (0, nMQ.constructStack)()
            }
            static {
                T3(this, "Command")
            }
            static classBuilder() {
                return new H88
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
                        [aO1.SMITHY_CONTEXT_KEY]: {
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
        H88 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                T3(this, "ClassBuilder")
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
            sc(A) {
                return this._operationSchema = A, this._smithyContext.operationSchema = A, this
            }
            build() {
                let A = this,
                    Q;
                return Q = class extends aMQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this), this.schema = A._operationSchema
                    }
                    static {
                        T3(this, "CommandRef")
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
        C88 = "***SensitiveInformation***",
        E88 = T3((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = T3(async function(Y, J, W) {
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
        z88 = class A extends Error {
            static {
                T3(this, "ServiceException")
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
        sMQ = T3((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        rMQ = T3(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = $88(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw sMQ(Y, Q)
        }, "throwDefaultError"),
        U88 = T3((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                rMQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        $88 = T3((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        w88 = T3((A) => {
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
        iMQ = !1,
        q88 = T3((A) => {
            if (A && !iMQ && parseInt(A.substring(1, A.indexOf("."))) < 16) iMQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        N88 = T3((A) => {
            let Q = [];
            for (let B in aO1.AlgorithmId) {
                let G = aO1.AlgorithmId[B];
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
        L88 = T3((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        M88 = T3((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        O88 = T3((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        oMQ = T3((A) => {
            return Object.assign(N88(A), M88(A))
        }, "getDefaultExtensionConfiguration"),
        R88 = oMQ,
        T88 = T3((A) => {
            return Object.assign(L88(A), O88(A))
        }, "resolveDefaultRuntimeConfig"),
        P88 = T3((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        tMQ = T3((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = tMQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        j88 = T3((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        S88 = class {
            static {
                T3(this, "NoOpLogger")
            }
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
        };

    function oO1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, y88(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            eMQ(G, null, I, Y)
        }
        return G
    }
    T3(oO1, "map");
    var _88 = T3((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        k88 = T3((A, Q) => {
            let B = {};
            for (let G in Q) eMQ(B, A, Q, G);
            return B
        }, "take"),
        y88 = T3((A, Q, B) => {
            return oO1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        eMQ = T3((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = x88, W = v88, X = G] = Y;
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
        x88 = T3((A) => A != null, "nonNullish"),
        v88 = T3((A) => A, "pass"),
        b88 = T3((A) => {
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
        f88 = T3((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        sO1 = T3((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(sO1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = sO1(A[B])
                }
                return Q
            }
            return A
        }, "_json");
    V88(rO1, c6(), tO1.exports)
});
var COQ = U((XE7, HOQ) => {
    var {
        defineProperty: XmA,
        getOwnPropertyDescriptor: h88,
        getOwnPropertyNames: g88
    } = Object, u88 = Object.prototype.hasOwnProperty, Q3 = (A, Q) => XmA(A, "name", {
        value: Q,
        configurable: !0
    }), m88 = (A, Q) => {
        for (var B in Q) XmA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, d88 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of g88(Q))
                if (!u88.call(A, Z) && Z !== B) XmA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = h88(Q, Z)) || G.enumerable
                })
        }
        return A
    }, c88 = (A) => d88(XmA({}, "__esModule", {
        value: !0
    }), A), ZOQ = {};
    m88(ZOQ, {
        AwsEc2QueryProtocol: () => U68,
        AwsJson1_0Protocol: () => G68,
        AwsJson1_1Protocol: () => Z68,
        AwsJsonRpcProtocol: () => YR1,
        AwsQueryProtocol: () => XOQ,
        AwsRestJsonProtocol: () => Y68,
        AwsRestXmlProtocol: () => M68,
        JsonCodec: () => IR1,
        JsonShapeDeserializer: () => JOQ,
        JsonShapeSerializer: () => WOQ,
        XmlCodec: () => DOQ,
        XmlShapeDeserializer: () => JR1,
        XmlShapeSerializer: () => KOQ,
        _toBool: () => l88,
        _toNum: () => i88,
        _toStr: () => p88,
        awsExpectUnion: () => W68,
        loadRestJsonErrorCode: () => ZR1,
        loadRestXmlErrorCode: () => VOQ,
        parseJsonBody: () => GR1,
        parseJsonErrorBody: () => t88,
        parseXmlBody: () => FOQ,
        parseXmlErrorBody: () => N68
    });
    HOQ.exports = c88(ZOQ);
    var p88 = Q3((A) => {
            if (A == null) return A;
            if (typeof A === "number" || typeof A === "bigint") {
                let Q = Error(`Received number ${A} where a string was expected.`);
                return Q.name = "Warning", console.warn(Q), String(A)
            }
            if (typeof A === "boolean") {
                let Q = Error(`Received boolean ${A} where a string was expected.`);
                return Q.name = "Warning", console.warn(Q), String(A)
            }
            return A
        }, "_toStr"),
        l88 = Q3((A) => {
            if (A == null) return A;
            if (typeof A === "string") {
                let Q = A.toLowerCase();
                if (A !== "" && Q !== "false" && Q !== "true") {
                    let B = Error(`Received string "${A}" where a boolean was expected.`);
                    B.name = "Warning", console.warn(B)
                }
                return A !== "" && Q !== "false"
            }
            return A
        }, "_toBool"),
        i88 = Q3((A) => {
            if (A == null) return A;
            if (typeof A === "string") {
                let Q = Number(A);
                if (Q.toString() !== A) {
                    let B = Error(`Received string "${A}" where a number was expected.`);
                    return B.name = "Warning", console.warn(B), A
                }
                return Q
            }
            return A
        }, "_toNum"),
        n88 = C5(),
        Z6A = y4(),
        a88 = pK(),
        rr = class {
            static {
                Q3(this, "SerdeContextConfig")
            }
            serdeContext;
            setSerdeContext(A) {
                this.serdeContext = A
            }
        },
        _HA = y4(),
        I6A = c6(),
        s88 = Od(),
        r88 = c6();

    function IOQ(A, Q, B) {
        if (B?.source) {
            let G = B.source;
            if (typeof Q === "number") {
                if (Q > Number.MAX_SAFE_INTEGER || Q < Number.MIN_SAFE_INTEGER || G !== String(Q))
                    if (G.includes(".")) return new r88.NumericValue(G, "bigDecimal");
                    else return BigInt(G)
            }
        }
        return Q
    }
    Q3(IOQ, "jsonReviver");
    var o88 = l6(),
        YOQ = Q3((A, Q) => (0, o88.collectBody)(A, Q).then((B) => Q.utf8Encoder(B)), "collectBodyString"),
        GR1 = Q3((A, Q) => YOQ(A, Q).then((B) => {
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
        t88 = Q3(async (A, Q) => {
            let B = await GR1(A, Q);
            return B.message = B.message ?? B.Message, B
        }, "parseJsonErrorBody"),
        ZR1 = Q3((A, Q) => {
            let B = Q3((I, Y) => Object.keys(I).find((J) => J.toLowerCase() === Y.toLowerCase()), "findKey"),
                G = Q3((I) => {
                    let Y = I;
                    if (typeof Y === "number") Y = Y.toString();
                    if (Y.indexOf(",") >= 0) Y = Y.split(",")[0];
                    if (Y.indexOf(":") >= 0) Y = Y.split(":")[0];
                    if (Y.indexOf("#") >= 0) Y = Y.split("#")[1];
                    return Y
                }, "sanitizeErrorCode"),
                Z = B(A.headers, "x-amzn-errortype");
            if (Z !== void 0) return G(A.headers[Z]);
            if (Q && typeof Q === "object") {
                let I = B(Q, "code");
                if (I && Q[I] !== void 0) return G(Q[I]);
                if (Q.__type !== void 0) return G(Q.__type)
            }
        }, "loadRestJsonErrorCode"),
        JOQ = class extends rr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                Q3(this, "JsonShapeDeserializer")
            }
            async read(A, Q) {
                return this._read(A, typeof Q === "string" ? JSON.parse(Q, IOQ) : await GR1(Q, this.serdeContext))
            }
            readObject(A, Q) {
                return this._read(A, Q)
            }
            _read(A, Q) {
                let B = Q !== null && typeof Q === "object",
                    G = _HA.NormalizedSchema.of(A);
                if (G.isListSchema() && Array.isArray(Q)) {
                    let I = G.getValueSchema(),
                        Y = [],
                        J = !!G.getMergedTraits().sparse;
                    for (let W of Q)
                        if (J || W != null) Y.push(this._read(I, W));
                    return Y
                } else if (G.isMapSchema() && B) {
                    let I = G.getValueSchema(),
                        Y = {},
                        J = !!G.getMergedTraits().sparse;
                    for (let [W, X] of Object.entries(Q))
                        if (J || X != null) Y[W] = this._read(I, X);
                    return Y
                } else if (G.isStructSchema() && B) {
                    let I = {};
                    for (let [Y, J] of G.structIterator()) {
                        let W = this.settings.jsonName ? J.getMergedTraits().jsonName ?? Y : Y,
                            X = this._read(J, Q[W]);
                        if (X != null) I[Y] = X
                    }
                    return I
                }
                if (G.isBlobSchema() && typeof Q === "string") return (0, s88.fromBase64)(Q);
                let Z = G.getMergedTraits().mediaType;
                if (G.isStringSchema() && typeof Q === "string" && Z) {
                    if (Z === "application/json" || Z.endsWith("+json")) return I6A.LazyJsonString.from(Q)
                }
                if (G.isTimestampSchema()) {
                    let I = this.settings.timestampFormat;
                    switch (I.useTrait ? G.getSchema() === _HA.SCHEMA.TIMESTAMP_DEFAULT ? I.default : G.getSchema() ?? I.default : I.default) {
                        case _HA.SCHEMA.TIMESTAMP_DATE_TIME:
                            return (0, I6A.parseRfc3339DateTimeWithOffset)(Q);
                        case _HA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, I6A.parseRfc7231DateTime)(Q);
                        case _HA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            return (0, I6A.parseEpochTimestamp)(Q);
                        default:
                            return console.warn("Missing timestamp format, parsing value with Date constructor:", Q), new Date(Q)
                    }
                }
                if (G.isBigIntegerSchema() && (typeof Q === "number" || typeof Q === "string")) return BigInt(Q);
                if (G.isBigDecimalSchema() && Q != null) {
                    if (Q instanceof I6A.NumericValue) return Q;
                    return new I6A.NumericValue(String(Q), "bigDecimal")
                }
                if (G.isNumericSchema() && typeof Q === "string") switch (Q) {
                    case "Infinity":
                        return 1 / 0;
                    case "-Infinity":
                        return -1 / 0;
                    case "NaN":
                        return NaN
                }
                return Q
            }
        },
        Y6A = y4(),
        e88 = c6(),
        A68 = c6(),
        Q68 = c6(),
        AOQ = String.fromCharCode(925),
        B68 = class {
            static {
                Q3(this, "JsonReplacer")
            }
            values = new Map;
            counter = 0;
            stage = 0;
            createReplacer() {
                if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
                if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
                return this.stage = 1, (A, Q) => {
                    if (Q instanceof Q68.NumericValue) {
                        let B = `${AOQ+NaN+this.counter++}_` + Q.string;
                        return this.values.set(`"${B}"`, Q.string), B
                    }
                    if (typeof Q === "bigint") {
                        let B = Q.toString(),
                            G = `${AOQ+"b"+this.counter++}_` + B;
                        return this.values.set(`"${G}"`, B), G
                    }
                    return Q
                }
            }
            replaceInJson(A) {
                if (this.stage === 0) throw Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
                if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
                if (this.stage = 2, this.counter === 0) return A;
                for (let [Q, B] of this.values) A = A.replace(Q, B);
                return A
            }
        },
        WOQ = class extends rr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                Q3(this, "JsonShapeSerializer")
            }
            buffer;
            rootSchema;
            write(A, Q) {
                this.rootSchema = Y6A.NormalizedSchema.of(A), this.buffer = this._write(this.rootSchema, Q)
            }
            flush() {
                if (this.rootSchema?.isStructSchema() || this.rootSchema?.isDocumentSchema()) {
                    let A = new B68;
                    return A.replaceInJson(JSON.stringify(this.buffer, A.createReplacer(), 0))
                }
                return this.buffer
            }
            _write(A, Q, B) {
                let G = Q !== null && typeof Q === "object",
                    Z = Y6A.NormalizedSchema.of(A);
                if (Z.isListSchema() && Array.isArray(Q)) {
                    let Y = Z.getValueSchema(),
                        J = [],
                        W = !!Z.getMergedTraits().sparse;
                    for (let X of Q)
                        if (W || X != null) J.push(this._write(Y, X));
                    return J
                } else if (Z.isMapSchema() && G) {
                    let Y = Z.getValueSchema(),
                        J = {},
                        W = !!Z.getMergedTraits().sparse;
                    for (let [X, F] of Object.entries(Q))
                        if (W || F != null) J[X] = this._write(Y, F);
                    return J
                } else if (Z.isStructSchema() && G) {
                    let Y = {};
                    for (let [J, W] of Z.structIterator()) {
                        let X = this.settings.jsonName ? W.getMergedTraits().jsonName ?? J : J,
                            F = this._write(W, Q[J], Z);
                        if (F !== void 0) Y[X] = F
                    }
                    return Y
                }
                if (Q === null && B?.isStructSchema()) return;
                if (Z.isBlobSchema() && (Q instanceof Uint8Array || typeof Q === "string")) {
                    if (Z === this.rootSchema) return Q;
                    if (!this.serdeContext?.base64Encoder) throw Error("Missing base64Encoder in serdeContext");
                    return this.serdeContext?.base64Encoder(Q)
                }
                if (Z.isTimestampSchema() && Q instanceof Date) {
                    let Y = this.settings.timestampFormat;
                    switch (Y.useTrait ? Z.getSchema() === Y6A.SCHEMA.TIMESTAMP_DEFAULT ? Y.default : Z.getSchema() ?? Y.default : Y.default) {
                        case Y6A.SCHEMA.TIMESTAMP_DATE_TIME:
                            return Q.toISOString().replace(".000Z", "Z");
                        case Y6A.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, e88.dateToUtcString)(Q);
                        case Y6A.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            return Q.getTime() / 1000;
                        default:
                            return console.warn("Missing timestamp format, using epoch seconds", Q), Q.getTime() / 1000
                    }
                }
                if (Z.isNumericSchema() && typeof Q === "number") {
                    if (Math.abs(Q) === 1 / 0 || isNaN(Q)) return String(Q)
                }
                let I = Z.getMergedTraits().mediaType;
                if (Z.isStringSchema() && typeof Q === "string" && I) {
                    if (I === "application/json" || I.endsWith("+json")) return A68.LazyJsonString.from(Q)
                }
                return Q
            }
        },
        IR1 = class extends rr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                Q3(this, "JsonCodec")
            }
            createSerializer() {
                let A = new WOQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new JOQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        YR1 = class extends n88.RpcProtocol {
            static {
                Q3(this, "AwsJsonRpcProtocol")
            }
            serializer;
            deserializer;
            codec;
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                });
                this.codec = new IR1({
                    timestampFormat: {
                        useTrait: !0,
                        default: Z6A.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    jsonName: !1
                }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer()
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B);
                if (!G.path.endsWith("/")) G.path += "/";
                if (Object.assign(G.headers, {
                        "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
                        "x-amz-target": (this.getJsonRpcVersion() === "1.0" ? "JsonRpc10." : "JsonProtocol.") + Z6A.NormalizedSchema.of(A).getName()
                    }), (0, Z6A.deref)(A.input) === "unit" || !G.body) G.body = "{}";
                try {
                    G.headers["content-length"] = String((0, a88.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            getPayloadCodec() {
                return this.codec
            }
            async handleError(A, Q, B, G, Z) {
                let I = ZR1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = Z6A.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = Z6A.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = Z6A.NormalizedSchema.of(X),
                    V = G.message ?? G.Message ?? "Unknown",
                    K = new X.ctor(V);
                await this.deserializeHttpMessage(X, Q, B, G);
                let D = {};
                for (let [H, C] of F.structIterator()) {
                    let E = C.getMergedTraits().jsonName ?? H;
                    D[H] = this.codec.createDeserializer().readObject(C, G[E])
                }
                throw Object.assign(K, {
                    $metadata: Z,
                    $response: B,
                    $fault: F.getMergedTraits().error,
                    message: V,
                    ...D
                }), K
            }
        },
        G68 = class extends YR1 {
            static {
                Q3(this, "AwsJson1_0Protocol")
            }
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                })
            }
            getShapeId() {
                return "aws.protocols#awsJson1_0"
            }
            getJsonRpcVersion() {
                return "1.0"
            }
        },
        Z68 = class extends YR1 {
            static {
                Q3(this, "AwsJson1_1Protocol")
            }
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                })
            }
            getShapeId() {
                return "aws.protocols#awsJson1_1"
            }
            getJsonRpcVersion() {
                return "1.1"
            }
        },
        eO1 = C5(),
        kHA = y4(),
        I68 = pK(),
        Y68 = class extends eO1.HttpBindingProtocol {
            static {
                Q3(this, "AwsRestJsonProtocol")
            }
            serializer;
            deserializer;
            codec;
            constructor({
                defaultNamespace: A
            }) {
                super({
                    defaultNamespace: A
                });
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: kHA.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    httpBindings: !0,
                    jsonName: !0
                };
                this.codec = new IR1(Q), this.serializer = new eO1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new eO1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
            }
            getShapeId() {
                return "aws.protocols#restJson1"
            }
            getPayloadCodec() {
                return this.codec
            }
            setSerdeContext(A) {
                this.codec.setSerdeContext(A), super.setSerdeContext(A)
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B),
                    Z = kHA.NormalizedSchema.of(A.input),
                    I = Z.getMemberSchemas();
                if (!G.headers["content-type"]) {
                    let Y = Object.values(I).find((J) => {
                        return !!J.getMergedTraits().httpPayload
                    });
                    if (Y) {
                        let J = Y.getMergedTraits().mediaType;
                        if (J) G.headers["content-type"] = J;
                        else if (Y.isStringSchema()) G.headers["content-type"] = "text/plain";
                        else if (Y.isBlobSchema()) G.headers["content-type"] = "application/octet-stream";
                        else G.headers["content-type"] = "application/json"
                    } else if (!Z.isUnitSchema()) {
                        if (Object.values(I).find((W) => {
                                let {
                                    httpQuery: X,
                                    httpQueryParams: F,
                                    httpHeader: V,
                                    httpLabel: K,
                                    httpPrefixHeaders: D
                                } = W.getMergedTraits();
                                return !X && !F && !V && !K && D === void 0
                            })) G.headers["content-type"] = "application/json"
                    }
                }
                if (G.headers["content-type"] && !G.body) G.body = "{}";
                if (G.body) try {
                    G.headers["content-length"] = String((0, I68.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async handleError(A, Q, B, G, Z) {
                let I = ZR1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = kHA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = kHA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = kHA.NormalizedSchema.of(X),
                    V = G.message ?? G.Message ?? "Unknown",
                    K = new X.ctor(V);
                await this.deserializeHttpMessage(X, Q, B, G);
                let D = {};
                for (let [H, C] of F.structIterator()) {
                    let E = C.getMergedTraits().jsonName ?? H;
                    D[H] = this.codec.createDeserializer().readObject(C, G[E])
                }
                throw Object.assign(K, {
                    $metadata: Z,
                    $response: B,
                    $fault: F.getMergedTraits().error,
                    message: V,
                    ...D
                }), K
            }
        },
        J68 = l6(),
        W68 = Q3((A) => {
            if (A == null) return;
            if (typeof A === "object" && "__type" in A) delete A.__type;
            return (0, J68.expectUnion)(A)
        }, "awsExpectUnion"),
        AR1 = C5(),
        Rd = y4(),
        X68 = pK(),
        F68 = C5(),
        QOQ = y4(),
        V68 = l6(),
        K68 = L2(),
        D68 = ZS(),
        JR1 = class extends rr {
            constructor(A) {
                super();
                this.settings = A, this.stringDeserializer = new F68.FromStringShapeDeserializer(A)
            }
            static {
                Q3(this, "XmlShapeDeserializer")
            }
            stringDeserializer;
            setSerdeContext(A) {
                this.serdeContext = A, this.stringDeserializer.setSerdeContext(A)
            }
            read(A, Q, B) {
                let G = QOQ.NormalizedSchema.of(A),
                    Z = G.getMemberSchemas();
                if (G.isStructSchema() && G.isMemberSchema() && !!Object.values(Z).find((W) => {
                        return !!W.getMemberTraits().eventPayload
                    })) {
                    let W = {},
                        X = Object.keys(Z)[0];
                    if (Z[X].isBlobSchema()) W[X] = Q;
                    else W[X] = this.read(Z[X], Q);
                    return W
                }
                let Y = (this.serdeContext?.utf8Encoder ?? K68.toUtf8)(Q),
                    J = this.parseXml(Y);
                return this.readSchema(A, B ? J[B] : J)
            }
            readSchema(A, Q) {
                let B = QOQ.NormalizedSchema.of(A),
                    G = B.getMergedTraits(),
                    Z = B.getSchema();
                if (B.isListSchema() && !Array.isArray(Q)) return this.readSchema(Z, [Q]);
                if (Q == null) return Q;
                if (typeof Q === "object") {
                    let I = !!G.sparse,
                        Y = !!G.xmlFlattened;
                    if (B.isListSchema()) {
                        let W = B.getValueSchema(),
                            X = [],
                            F = W.getMergedTraits().xmlName ?? "member",
                            V = Y ? Q : (Q[0] ?? Q)[F],
                            K = Array.isArray(V) ? V : [V];
                        for (let D of K)
                            if (D != null || I) X.push(this.readSchema(W, D));
                        return X
                    }
                    let J = {};
                    if (B.isMapSchema()) {
                        let W = B.getKeySchema(),
                            X = B.getValueSchema(),
                            F;
                        if (Y) F = Array.isArray(Q) ? Q : [Q];
                        else F = Array.isArray(Q.entry) ? Q.entry : [Q.entry];
                        let V = W.getMergedTraits().xmlName ?? "key",
                            K = X.getMergedTraits().xmlName ?? "value";
                        for (let D of F) {
                            let H = D[V],
                                C = D[K];
                            if (C != null || I) J[H] = this.readSchema(X, C)
                        }
                        return J
                    }
                    if (B.isStructSchema()) {
                        for (let [W, X] of B.structIterator()) {
                            let F = X.getMergedTraits(),
                                V = !F.httpPayload ? X.getMemberTraits().xmlName ?? W : F.xmlName ?? X.getName();
                            if (Q[V] != null) J[W] = this.readSchema(X, Q[V])
                        }
                        return J
                    }
                    if (B.isDocumentSchema()) return Q;
                    throw Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${B.getName(!0)}`)
                } else {
                    if (B.isListSchema()) return [];
                    else if (B.isMapSchema() || B.isStructSchema()) return {};
                    return this.stringDeserializer.read(B, Q)
                }
            }
            parseXml(A) {
                if (A.length) {
                    let Q = new D68.XMLParser({
                        attributeNamePrefix: "",
                        htmlEntities: !0,
                        ignoreAttributes: !1,
                        ignoreDeclaration: !0,
                        parseTagValue: !1,
                        trimValues: !1,
                        tagValueProcessor: Q3((Y, J) => J.trim() === "" && J.includes(`
`) ? "" : void 0, "tagValueProcessor")
                    });
                    Q.addEntity("#xD", "\r"), Q.addEntity("#10", `
`);
                    let B;
                    try {
                        B = Q.parse(A, !0)
                    } catch (Y) {
                        if (Y && typeof Y === "object") Object.defineProperty(Y, "$responseBodyText", {
                            value: A
                        });
                        throw Y
                    }
                    let G = "#text",
                        Z = Object.keys(B)[0],
                        I = B[Z];
                    if (I[G]) I[Z] = I[G], delete I[G];
                    return (0, V68.getValueFromTextNode)(I)
                }
                return {}
            }
        },
        QR1 = C5(),
        WmA = y4(),
        H68 = c6(),
        C68 = l6(),
        E68 = Od(),
        z68 = class extends rr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                Q3(this, "QueryShapeSerializer")
            }
            buffer;
            write(A, Q, B = "") {
                if (this.buffer === void 0) this.buffer = "";
                let G = WmA.NormalizedSchema.of(A);
                if (B && !B.endsWith(".")) B += ".";
                if (G.isBlobSchema()) {
                    if (typeof Q === "string" || Q instanceof Uint8Array) this.writeKey(B), this.writeValue((this.serdeContext?.base64Encoder ?? E68.toBase64)(Q))
                } else if (G.isBooleanSchema() || G.isNumericSchema() || G.isStringSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigIntegerSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigDecimalSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(Q instanceof H68.NumericValue ? Q.string : String(Q))
                } else if (G.isTimestampSchema()) {
                    if (Q instanceof Date) switch (this.writeKey(B), (0, QR1.determineTimestampFormat)(G, this.settings)) {
                        case WmA.SCHEMA.TIMESTAMP_DATE_TIME:
                            this.writeValue(Q.toISOString().replace(".000Z", "Z"));
                            break;
                        case WmA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            this.writeValue((0, C68.dateToUtcString)(Q));
                            break;
                        case WmA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            this.writeValue(String(Q.getTime() / 1000));
                            break
                    }
                } else if (G.isDocumentSchema()) throw Error(`@aws-sdk/core/protocols - QuerySerializer unsupported document type ${G.getName(!0)}`);
                else if (G.isListSchema()) {
                    if (Array.isArray(Q))
                        if (Q.length === 0) {
                            if (this.settings.serializeEmptyLists) this.writeKey(B), this.writeValue("")
                        } else {
                            let Z = G.getValueSchema(),
                                I = this.settings.flattenLists || G.getMergedTraits().xmlFlattened,
                                Y = 1;
                            for (let J of Q) {
                                if (J == null) continue;
                                let W = this.getKey("member", Z.getMergedTraits().xmlName),
                                    X = I ? `${B}${Y}` : `${B}${W}.${Y}`;
                                this.write(Z, J, X), ++Y
                            }
                        }
                } else if (G.isMapSchema()) {
                    if (Q && typeof Q === "object") {
                        let Z = G.getKeySchema(),
                            I = G.getValueSchema(),
                            Y = G.getMergedTraits().xmlFlattened,
                            J = 1;
                        for (let [W, X] of Object.entries(Q)) {
                            if (X == null) continue;
                            let F = this.getKey("key", Z.getMergedTraits().xmlName),
                                V = Y ? `${B}${J}.${F}` : `${B}entry.${J}.${F}`,
                                K = this.getKey("value", I.getMergedTraits().xmlName),
                                D = Y ? `${B}${J}.${K}` : `${B}entry.${J}.${K}`;
                            this.write(Z, W, V), this.write(I, X, D), ++J
                        }
                    }
                } else if (G.isStructSchema()) {
                    if (Q && typeof Q === "object")
                        for (let [Z, I] of G.structIterator()) {
                            if (Q[Z] == null) continue;
                            let Y = this.getKey(Z, I.getMergedTraits().xmlName),
                                J = `${B}${Y}`;
                            this.write(I, Q[Z], J)
                        }
                } else if (G.isUnitSchema());
                else throw Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${G.getName(!0)}`)
            }
            flush() {
                if (this.buffer === void 0) throw Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
                let A = this.buffer;
                return delete this.buffer, A
            }
            getKey(A, Q) {
                let B = Q ?? A;
                if (this.settings.capitalizeKeys) return B[0].toUpperCase() + B.slice(1);
                return B
            }
            writeKey(A) {
                if (A.endsWith(".")) A = A.slice(0, A.length - 1);
                this.buffer += `&${(0,QR1.extendedEncodeURIComponent)(A)}=`
            }
            writeValue(A) {
                this.buffer += (0, QR1.extendedEncodeURIComponent)(A)
            }
        },
        XOQ = class extends AR1.RpcProtocol {
            constructor(A) {
                super({
                    defaultNamespace: A.defaultNamespace
                });
                this.options = A;
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: Rd.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !1,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace,
                    serializeEmptyLists: !0
                };
                this.serializer = new z68(Q), this.deserializer = new JR1(Q)
            }
            static {
                Q3(this, "AwsQueryProtocol")
            }
            serializer;
            deserializer;
            getShapeId() {
                return "aws.protocols#awsQuery"
            }
            setSerdeContext(A) {
                this.serializer.setSerdeContext(A), this.deserializer.setSerdeContext(A)
            }
            getPayloadCodec() {
                throw Error("AWSQuery protocol has no payload codec.")
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B);
                if (!G.path.endsWith("/")) G.path += "/";
                if (Object.assign(G.headers, {
                        "content-type": "application/x-www-form-urlencoded"
                    }), (0, Rd.deref)(A.input) === "unit" || !G.body) G.body = "";
                if (G.body = `Action=${A.name.split("#")[1]}&Version=${this.options.version}` + G.body, G.body.endsWith("&")) G.body = G.body.slice(-1);
                try {
                    G.headers["content-length"] = String((0, X68.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                let G = this.deserializer,
                    Z = Rd.NormalizedSchema.of(A.output),
                    I = {};
                if (B.statusCode >= 300) {
                    let X = await (0, AR1.collectBody)(B.body, Q);
                    if (X.byteLength > 0) Object.assign(I, await G.read(Rd.SCHEMA.DOCUMENT, X));
                    await this.handleError(A, Q, B, I, this.deserializeMetadata(B))
                }
                for (let X in B.headers) {
                    let F = B.headers[X];
                    delete B.headers[X], B.headers[X.toLowerCase()] = F
                }
                let Y = Z.isStructSchema() && this.useNestedResult() ? A.name.split("#")[1] + "Result" : void 0,
                    J = await (0, AR1.collectBody)(B.body, Q);
                if (J.byteLength > 0) Object.assign(I, await G.read(Z, J, Y));
                return {
                    $metadata: this.deserializeMetadata(B),
                    ...I
                }
            }
            useNestedResult() {
                return !0
            }
            async handleError(A, Q, B, G, Z) {
                let I = this.loadQueryErrorCode(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = this.loadQueryError(G),
                    X = Rd.TypeRegistry.for(Y),
                    F;
                try {
                    if (F = X.find((C) => Rd.NormalizedSchema.of(C).getMergedTraits().awsQueryError?.[0] === J), !F) F = X.getSchema(I)
                } catch (C) {
                    let E = Rd.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (E) {
                        let z = E.ctor;
                        throw Object.assign(new z(J), W)
                    }
                    throw Error(J)
                }
                let V = Rd.NormalizedSchema.of(F),
                    K = this.loadQueryErrorMessage(G),
                    D = new F.ctor(K),
                    H = {};
                for (let [C, E] of V.structIterator()) {
                    let z = E.getMergedTraits().xmlName ?? C,
                        w = W[z] ?? G[z];
                    H[C] = this.deserializer.readSchema(E, w)
                }
                throw Object.assign(D, {
                    $metadata: Z,
                    $response: B,
                    $fault: V.getMergedTraits().error,
                    message: K,
                    ...H
                }), D
            }
            loadQueryErrorCode(A, Q) {
                let B = (Q.Errors?.[0]?.Error ?? Q.Errors?.Error ?? Q.Error)?.Code;
                if (B !== void 0) return B;
                if (A.statusCode == 404) return "NotFound"
            }
            loadQueryError(A) {
                return A.Errors?.[0]?.Error ?? A.Errors?.Error ?? A.Error
            }
            loadQueryErrorMessage(A) {
                let Q = this.loadQueryError(A);
                return Q?.message ?? Q?.Message ?? A.message ?? A.Message ?? "Unknown"
            }
        },
        U68 = class extends XOQ {
            constructor(A) {
                super(A);
                this.options = A;
                let Q = {
                    capitalizeKeys: !0,
                    flattenLists: !0,
                    serializeEmptyLists: !1
                };
                Object.assign(this.serializer.settings, Q)
            }
            static {
                Q3(this, "AwsEc2QueryProtocol")
            }
            useNestedResult() {
                return !1
            }
        },
        BR1 = C5(),
        yHA = y4(),
        $68 = pK(),
        w68 = l6(),
        q68 = ZS(),
        FOQ = Q3((A, Q) => YOQ(A, Q).then((B) => {
            if (B.length) {
                let G = new q68.XMLParser({
                    attributeNamePrefix: "",
                    htmlEntities: !0,
                    ignoreAttributes: !1,
                    ignoreDeclaration: !0,
                    parseTagValue: !1,
                    trimValues: !1,
                    tagValueProcessor: Q3((W, X) => X.trim() === "" && X.includes(`
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
                return (0, w68.getValueFromTextNode)(J)
            }
            return {}
        }), "parseXmlBody"),
        N68 = Q3(async (A, Q) => {
            let B = await FOQ(A, Q);
            if (B.Error) B.Error.message = B.Error.message ?? B.Error.Message;
            return B
        }, "parseXmlErrorBody"),
        VOQ = Q3((A, Q) => {
            if (Q?.Error?.Code !== void 0) return Q.Error.Code;
            if (Q?.Code !== void 0) return Q.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadRestXmlErrorCode"),
        RS = WDA(),
        sr = y4(),
        L68 = c6(),
        BOQ = l6(),
        GOQ = Od(),
        KOQ = class extends rr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                Q3(this, "XmlShapeSerializer")
            }
            stringBuffer;
            byteBuffer;
            buffer;
            write(A, Q) {
                let B = sr.NormalizedSchema.of(A);
                if (B.isStringSchema() && typeof Q === "string") this.stringBuffer = Q;
                else if (B.isBlobSchema()) this.byteBuffer = "byteLength" in Q ? Q : (this.serdeContext?.base64Decoder ?? GOQ.fromBase64)(Q);
                else {
                    this.buffer = this.writeStruct(B, Q, void 0);
                    let G = B.getMergedTraits();
                    if (G.httpPayload && !G.xmlName) this.buffer.withName(B.getName())
                }
            }
            flush() {
                if (this.byteBuffer !== void 0) {
                    let Q = this.byteBuffer;
                    return delete this.byteBuffer, Q
                }
                if (this.stringBuffer !== void 0) {
                    let Q = this.stringBuffer;
                    return delete this.stringBuffer, Q
                }
                let A = this.buffer;
                if (this.settings.xmlNamespace) {
                    if (!A?.attributes?.xmlns) A.addAttribute("xmlns", this.settings.xmlNamespace)
                }
                return delete this.buffer, A.toString()
            }
            writeStruct(A, Q, B) {
                let G = A.getMergedTraits(),
                    Z = A.isMemberSchema() && !G.httpPayload ? A.getMemberTraits().xmlName ?? A.getMemberName() : G.xmlName ?? A.getName();
                if (!Z || !A.isStructSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${A.getName(!0)}.`);
                let I = RS.XmlNode.of(Z),
                    [Y, J] = this.getXmlnsAttribute(A, B);
                if (J) I.addAttribute(Y, J);
                for (let [W, X] of A.structIterator()) {
                    let F = Q[W];
                    if (F != null) {
                        if (X.getMergedTraits().xmlAttribute) {
                            I.addAttribute(X.getMergedTraits().xmlName ?? W, this.writeSimple(X, F));
                            continue
                        }
                        if (X.isListSchema()) this.writeList(X, F, I, J);
                        else if (X.isMapSchema()) this.writeMap(X, F, I, J);
                        else if (X.isStructSchema()) I.addChildNode(this.writeStruct(X, F, J));
                        else {
                            let V = RS.XmlNode.of(X.getMergedTraits().xmlName ?? X.getMemberName());
                            this.writeSimpleInto(X, F, V, J), I.addChildNode(V)
                        }
                    }
                }
                return I
            }
            writeList(A, Q, B, G) {
                if (!A.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${A.getName(!0)}`);
                let Z = A.getMergedTraits(),
                    I = A.getValueSchema(),
                    Y = I.getMergedTraits(),
                    J = !!Y.sparse,
                    W = !!Z.xmlFlattened,
                    [X, F] = this.getXmlnsAttribute(A, G),
                    V = Q3((K, D) => {
                        if (I.isListSchema()) this.writeList(I, Array.isArray(D) ? D : [D], K, F);
                        else if (I.isMapSchema()) this.writeMap(I, D, K, F);
                        else if (I.isStructSchema()) {
                            let H = this.writeStruct(I, D, F);
                            K.addChildNode(H.withName(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member"))
                        } else {
                            let H = RS.XmlNode.of(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member");
                            this.writeSimpleInto(I, D, H, F), K.addChildNode(H)
                        }
                    }, "writeItem");
                if (W) {
                    for (let K of Q)
                        if (J || K != null) V(B, K)
                } else {
                    let K = RS.XmlNode.of(Z.xmlName ?? A.getMemberName());
                    if (F) K.addAttribute(X, F);
                    for (let D of Q)
                        if (J || D != null) V(K, D);
                    B.addChildNode(K)
                }
            }
            writeMap(A, Q, B, G, Z = !1) {
                if (!A.isMemberSchema()) throw Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${A.getName(!0)}`);
                let I = A.getMergedTraits(),
                    Y = A.getKeySchema(),
                    W = Y.getMergedTraits().xmlName ?? "key",
                    X = A.getValueSchema(),
                    F = X.getMergedTraits(),
                    V = F.xmlName ?? "value",
                    K = !!F.sparse,
                    D = !!I.xmlFlattened,
                    [H, C] = this.getXmlnsAttribute(A, G),
                    E = Q3((z, w, N) => {
                        let q = RS.XmlNode.of(W, w),
                            [R, P] = this.getXmlnsAttribute(Y, C);
                        if (P) q.addAttribute(R, P);
                        z.addChildNode(q);
                        let y = RS.XmlNode.of(V);
                        if (X.isListSchema()) this.writeList(X, N, y, C);
                        else if (X.isMapSchema()) this.writeMap(X, N, y, C, !0);
                        else if (X.isStructSchema()) y = this.writeStruct(X, N, C);
                        else this.writeSimpleInto(X, N, y, C);
                        z.addChildNode(y)
                    }, "addKeyValue");
                if (D) {
                    for (let [z, w] of Object.entries(Q))
                        if (K || w != null) {
                            let N = RS.XmlNode.of(I.xmlName ?? A.getMemberName());
                            E(N, z, w), B.addChildNode(N)
                        }
                } else {
                    let z;
                    if (!Z) {
                        if (z = RS.XmlNode.of(I.xmlName ?? A.getMemberName()), C) z.addAttribute(H, C);
                        B.addChildNode(z)
                    }
                    for (let [w, N] of Object.entries(Q))
                        if (K || N != null) {
                            let q = RS.XmlNode.of("entry");
                            E(q, w, N), (Z ? B : z).addChildNode(q)
                        }
                }
            }
            writeSimple(A, Q) {
                if (Q === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
                let B = sr.NormalizedSchema.of(A),
                    G = null;
                if (Q && typeof Q === "object")
                    if (B.isBlobSchema()) G = (this.serdeContext?.base64Encoder ?? GOQ.toBase64)(Q);