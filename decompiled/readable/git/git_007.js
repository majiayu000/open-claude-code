/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.966Z
 */

/**
 * Claude Code Decompiled
 * Category: git
 * File: 7/34
 * Lines: 92704 - 94201 (1498 lines)
 * Original file: cli.js
 */

                let D = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || XEQ.SignatureV4)(D)
            }), "signer");
            else J = CW(async (X) => {
                X = Object.assign({}, {
                    name: "sigv4",
                    signingName: A.signingName || A.defaultSigningName,
                    signingRegion: await (0, hr.normalizeProvider)(A.region)(),
                    properties: {}
                }, X);
                let {
                    signingRegion: F,
                    signingName: V
                } = X;
                A.signingRegion = A.signingRegion || F, A.signingName = A.signingName || V || A.serviceId;
                let K = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || XEQ.SignatureV4)(K)
            }, "signer");
            return Object.assign(A, {
                systemClockOffset: I,
                signingEscapePath: Z,
                signer: J
            })
        }, "resolveAwsSdkSigV4Config"),
        fo4 = KEQ;

function DEQ(A, {
        credentials: Q,
        credentialDefaultProvider: B
    }) {
        let G;
        if (Q)
            if (!Q?.memoized) G = (0, hr.memoizeIdentityProvider)(Q, hr.isIdentityExpired, hr.doesIdentityRequireRefresh);
            else G = Q;
        else if (B) G = (0, hr.normalizeProvider)(B(Object.assign({}, A, {
            parentClientConfig: A
        })));
        else G = CW(async () => {
            throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.")
        }, "credentialsProvider");
        return G.memoized = !0, G
    }
    CW(DEQ, "normalizeCredentialProvider");

function HEQ(A, Q) {
        if (Q.configBound) return Q;
        let B = CW(async (G) => Q({
            ...G,
            callerClientConfig: A
        }), "fn");
        return B.memoized = Q.memoized, B.configBound = !0, B
    }
    CW(HEQ, "bindCallerConfig")
});
var UEQ = U((EEQ) => {
    Object.defineProperty(EEQ, "__esModule", {
        value: !0
    });
    EEQ.fromBase64 = void 0;
    var ho4 = kI(),
        go4 = /^[A-Za-z0-9+/]*={0,2}$/,
        uo4 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!go4.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, ho4.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    EEQ.fromBase64 = uo4
});
var qEQ = U(($EQ) => {
    Object.defineProperty($EQ, "__esModule", {
        value: !0
    });
    $EQ.toBase64 = void 0;
    var mo4 = kI(),
        do4 = L2(),
        co4 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, do4.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, mo4.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    $EQ.toBase64 = co4
});
var gr = U((JH7, QuA) => {
    var {
        defineProperty: NEQ,
        getOwnPropertyDescriptor: po4,
        getOwnPropertyNames: lo4
    } = Object, io4 = Object.prototype.hasOwnProperty, aL1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of lo4(Q))
                if (!io4.call(A, Z) && Z !== B) NEQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = po4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, LEQ = (A, Q, B) => (aL1(A, Q, "default"), B && aL1(B, Q, "default")), no4 = (A) => aL1(NEQ({}, "__esModule", {
        value: !0
    }), A), sL1 = {};
    QuA.exports = no4(sL1);
    LEQ(sL1, UEQ(), QuA.exports);
    LEQ(sL1, qEQ(), QuA.exports)
});
var gEQ = U((WH7, hEQ) => {
    var {
        defineProperty: GuA,
        getOwnPropertyDescriptor: ao4,
        getOwnPropertyNames: so4
    } = Object, ro4 = Object.prototype.hasOwnProperty, A3 = (A, Q) => GuA(A, "name", {
        value: Q,
        configurable: !0
    }), oo4 = (A, Q) => {
        for (var B in Q) GuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, to4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of so4(Q))
                if (!ro4.call(A, Z) && Z !== B) GuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ao4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, eo4 = (A) => to4(GuA({}, "__esModule", {
        value: !0
    }), A), PEQ = {};
    oo4(PEQ, {
        AwsEc2QueryProtocol: () => Pt4,
        AwsJson1_0Protocol: () => Dt4,
        AwsJson1_1Protocol: () => Ht4,
        AwsJsonRpcProtocol: () => GM1,
        AwsQueryProtocol: () => yEQ,
        AwsRestJsonProtocol: () => Et4,
        AwsRestXmlProtocol: () => xt4,
        JsonCodec: () => BM1,
        JsonShapeDeserializer: () => _EQ,
        JsonShapeSerializer: () => kEQ,
        XmlCodec: () => fEQ,
        XmlShapeDeserializer: () => ZM1,
        XmlShapeSerializer: () => bEQ,
        _toBool: () => Qt4,
        _toNum: () => Bt4,
        _toStr: () => At4,
        awsExpectUnion: () => Ut4,
        loadRestJsonErrorCode: () => QM1,
        loadRestXmlErrorCode: () => vEQ,
        parseJsonBody: () => AM1,
        parseJsonErrorBody: () => Wt4,
        parseXmlBody: () => xEQ,
        parseXmlErrorBody: () => kt4
    });
    hEQ.exports = eo4(PEQ);
    var At4 = A3((A) => {
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
        Qt4 = A3((A) => {
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
        Bt4 = A3((A) => {
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
        Gt4 = C5(),
        y8A = y4(),
        Zt4 = pK(),
        mr = class {
            static {
                A3(this, "SerdeContextConfig")
            }
            serdeContext;
            setSerdeContext(A) {
                this.serdeContext = A
            }
        },
        XHA = y4(),
        x8A = c6(),
        It4 = gr(),
        Yt4 = c6();

function jEQ(A, Q, B) {
        if (B?.source) {
            let G = B.source;
            if (typeof Q === "number") {
                if (Q > Number.MAX_SAFE_INTEGER || Q < Number.MIN_SAFE_INTEGER || G !== String(Q))
                    if (G.includes(".")) return new Yt4.NumericValue(G, "bigDecimal");
                    else return BigInt(G)
            }
        }
        return Q
    }
    A3(jEQ, "jsonReviver");
    var Jt4 = R3(),
        SEQ = A3((A, Q) => (0, Jt4.collectBody)(A, Q).then((B) => Q.utf8Encoder(B)), "collectBodyString"),
        AM1 = A3((A, Q) => SEQ(A, Q).then((B) => {
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
        Wt4 = A3(async (A, Q) => {
            let B = await AM1(A, Q);
            return B.message = B.message ?? B.Message, B
        }, "parseJsonErrorBody"),
        QM1 = A3((A, Q) => {
            let B = A3((I, Y) => Object.keys(I).find((J) => J.toLowerCase() === Y.toLowerCase()), "findKey"),
                G = A3((I) => {
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
        _EQ = class extends mr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                A3(this, "JsonShapeDeserializer")
            }
            async read(A, Q) {
                return this._read(A, typeof Q === "string" ? JSON.parse(Q, jEQ) : await AM1(Q, this.serdeContext))
            }
            readObject(A, Q) {
                return this._read(A, Q)
            }
            _read(A, Q) {
                let B = Q !== null && typeof Q === "object",
                    G = XHA.NormalizedSchema.of(A);
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
                if (G.isBlobSchema() && typeof Q === "string") return (0, It4.fromBase64)(Q);
                let Z = G.getMergedTraits().mediaType;
                if (G.isStringSchema() && typeof Q === "string" && Z) {
                    if (Z === "application/json" || Z.endsWith("+json")) return x8A.LazyJsonString.from(Q)
                }
                if (G.isTimestampSchema()) {
                    let I = this.settings.timestampFormat;
                    switch (I.useTrait ? G.getSchema() === XHA.SCHEMA.TIMESTAMP_DEFAULT ? I.default : G.getSchema() ?? I.default : I.default) {
                        case XHA.SCHEMA.TIMESTAMP_DATE_TIME:
                            return (0, x8A.parseRfc3339DateTimeWithOffset)(Q);
                        case XHA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, x8A.parseRfc7231DateTime)(Q);
                        case XHA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            return (0, x8A.parseEpochTimestamp)(Q);
                        default:
                            return console.warn("Missing timestamp format, parsing value with Date constructor:", Q), new Date(Q)
                    }
                }
                if (G.isBigIntegerSchema() && (typeof Q === "number" || typeof Q === "string")) return BigInt(Q);
                if (G.isBigDecimalSchema() && Q != null) {
                    if (Q instanceof x8A.NumericValue) return Q;
                    return new x8A.NumericValue(String(Q), "bigDecimal")
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
        v8A = y4(),
        Xt4 = c6(),
        Ft4 = c6(),
        Vt4 = c6(),
        MEQ = String.fromCharCode(925),
        Kt4 = class {
            static {
                A3(this, "JsonReplacer")
            }
            values = new Map;
            counter = 0;
            stage = 0;
            createReplacer() {
                if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
                if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
                return this.stage = 1, (A, Q) => {
                    if (Q instanceof Vt4.NumericValue) {
                        let B = `${MEQ+NaN+this.counter++}_` + Q.string;
                        return this.values.set(`"${B}"`, Q.string), B
                    }
                    if (typeof Q === "bigint") {
                        let B = Q.toString(),
                            G = `${MEQ+"b"+this.counter++}_` + B;
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
        kEQ = class extends mr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                A3(this, "JsonShapeSerializer")
            }
            buffer;
            rootSchema;
            write(A, Q) {
                this.rootSchema = v8A.NormalizedSchema.of(A), this.buffer = this._write(this.rootSchema, Q)
            }
            flush() {
                if (this.rootSchema?.isStructSchema() || this.rootSchema?.isDocumentSchema()) {
                    let A = new Kt4;
                    return A.replaceInJson(JSON.stringify(this.buffer, A.createReplacer(), 0))
                }
                return this.buffer
            }
            _write(A, Q, B) {
                let G = Q !== null && typeof Q === "object",
                    Z = v8A.NormalizedSchema.of(A);
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
                    switch (Y.useTrait ? Z.getSchema() === v8A.SCHEMA.TIMESTAMP_DEFAULT ? Y.default : Z.getSchema() ?? Y.default : Y.default) {
                        case v8A.SCHEMA.TIMESTAMP_DATE_TIME:
                            return Q.toISOString().replace(".000Z", "Z");
                        case v8A.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, Xt4.dateToUtcString)(Q);
                        case v8A.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
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
                    if (I === "application/json" || I.endsWith("+json")) return Ft4.LazyJsonString.from(Q)
                }
                return Q
            }
        },
        BM1 = class extends mr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                A3(this, "JsonCodec")
            }
            createSerializer() {
                let A = new kEQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new _EQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        GM1 = class extends Gt4.RpcProtocol {
            static {
                A3(this, "AwsJsonRpcProtocol")
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
                this.codec = new BM1({
                    timestampFormat: {
                        useTrait: !0,
                        default: y8A.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    jsonName: !1
                }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer()
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B);
                if (!G.path.endsWith("/")) G.path += "/";
                if (Object.assign(G.headers, {
                        "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
                        "x-amz-target": (this.getJsonRpcVersion() === "1.0" ? "JsonRpc10." : "JsonProtocol.") + y8A.NormalizedSchema.of(A).getName()
                    }), (0, y8A.deref)(A.input) === "unit" || !G.body) G.body = "{}";
                try {
                    G.headers["content-length"] = String((0, Zt4.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            getPayloadCodec() {
                return this.codec
            }
            async handleError(A, Q, B, G, Z) {
                let I = QM1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = y8A.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = y8A.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = y8A.NormalizedSchema.of(X),
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
        Dt4 = class extends GM1 {
            static {
                A3(this, "AwsJson1_0Protocol")
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
        Ht4 = class extends GM1 {
            static {
                A3(this, "AwsJson1_1Protocol")
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
        rL1 = C5(),
        FHA = y4(),
        Ct4 = pK(),
        Et4 = class extends rL1.HttpBindingProtocol {
            static {
                A3(this, "AwsRestJsonProtocol")
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
                        default: FHA.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    httpBindings: !0,
                    jsonName: !0
                };
                this.codec = new BM1(Q), this.serializer = new rL1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new rL1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
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
                    Z = FHA.NormalizedSchema.of(A.input),
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
                    G.headers["content-length"] = String((0, Ct4.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async handleError(A, Q, B, G, Z) {
                let I = QM1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = FHA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = FHA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = FHA.NormalizedSchema.of(X),
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
        zt4 = R3(),
        Ut4 = A3((A) => {
            if (A == null) return;
            if (typeof A === "object" && "__type" in A) delete A.__type;
            return (0, zt4.expectUnion)(A)
        }, "awsExpectUnion"),
        oL1 = C5(),
        zd = y4(),
        $t4 = pK(),
        wt4 = C5(),
        OEQ = y4(),
        qt4 = R3(),
        Nt4 = L2(),
        Lt4 = ZS(),
        ZM1 = class extends mr {
            constructor(A) {
                super();
                this.settings = A, this.stringDeserializer = new wt4.FromStringShapeDeserializer(A)
            }
            static {
                A3(this, "XmlShapeDeserializer")
            }
            stringDeserializer;
            setSerdeContext(A) {
                this.serdeContext = A, this.stringDeserializer.setSerdeContext(A)
            }
            read(A, Q, B) {
                let G = OEQ.NormalizedSchema.of(A),
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
                let Y = (this.serdeContext?.utf8Encoder ?? Nt4.toUtf8)(Q),
                    J = this.parseXml(Y);
                return this.readSchema(A, B ? J[B] : J)
            }
            readSchema(A, Q) {
                let B = OEQ.NormalizedSchema.of(A),
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
                    let Q = new Lt4.XMLParser({
                        attributeNamePrefix: "",
                        htmlEntities: !0,
                        ignoreAttributes: !1,
                        ignoreDeclaration: !0,
                        parseTagValue: !1,
                        trimValues: !1,
                        tagValueProcessor: A3((Y, J) => J.trim() === "" && J.includes(`
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
                    return (0, qt4.getValueFromTextNode)(I)
                }
                return {}
            }
        },
        tL1 = C5(),
        BuA = y4(),
        Mt4 = c6(),
        Ot4 = R3(),
        Rt4 = gr(),
        Tt4 = class extends mr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                A3(this, "QueryShapeSerializer")
            }
            buffer;
            write(A, Q, B = "") {
                if (this.buffer === void 0) this.buffer = "";
                let G = BuA.NormalizedSchema.of(A);
                if (B && !B.endsWith(".")) B += ".";
                if (G.isBlobSchema()) {
                    if (typeof Q === "string" || Q instanceof Uint8Array) this.writeKey(B), this.writeValue((this.serdeContext?.base64Encoder ?? Rt4.toBase64)(Q))
                } else if (G.isBooleanSchema() || G.isNumericSchema() || G.isStringSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigIntegerSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigDecimalSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(Q instanceof Mt4.NumericValue ? Q.string : String(Q))
                } else if (G.isTimestampSchema()) {
                    if (Q instanceof Date) switch (this.writeKey(B), (0, tL1.determineTimestampFormat)(G, this.settings)) {
                        case BuA.SCHEMA.TIMESTAMP_DATE_TIME:
                            this.writeValue(Q.toISOString().replace(".000Z", "Z"));
                            break;
                        case BuA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            this.writeValue((0, Ot4.dateToUtcString)(Q));
                            break;
                        case BuA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
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
                this.buffer += `&${(0,tL1.extendedEncodeURIComponent)(A)}=`
            }
            writeValue(A) {
                this.buffer += (0, tL1.extendedEncodeURIComponent)(A)
            }
        },
        yEQ = class extends oL1.RpcProtocol {
            constructor(A) {
                super({
                    defaultNamespace: A.defaultNamespace
                });
                this.options = A;
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: zd.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !1,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace,
                    serializeEmptyLists: !0
                };
                this.serializer = new Tt4(Q), this.deserializer = new ZM1(Q)
            }
            static {
                A3(this, "AwsQueryProtocol")
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
                    }), (0, zd.deref)(A.input) === "unit" || !G.body) G.body = "";
                if (G.body = `Action=${A.name.split("#")[1]}&Version=${this.options.version}` + G.body, G.body.endsWith("&")) G.body = G.body.slice(-1);
                try {
                    G.headers["content-length"] = String((0, $t4.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                let G = this.deserializer,
                    Z = zd.NormalizedSchema.of(A.output),
                    I = {};
                if (B.statusCode >= 300) {
                    let X = await (0, oL1.collectBody)(B.body, Q);
                    if (X.byteLength > 0) Object.assign(I, await G.read(zd.SCHEMA.DOCUMENT, X));
                    await this.handleError(A, Q, B, I, this.deserializeMetadata(B))
                }
                for (let X in B.headers) {
                    let F = B.headers[X];
                    delete B.headers[X], B.headers[X.toLowerCase()] = F
                }
                let Y = Z.isStructSchema() && this.useNestedResult() ? A.name.split("#")[1] + "Result" : void 0,
                    J = await (0, oL1.collectBody)(B.body, Q);
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
                    X = zd.TypeRegistry.for(Y),
                    F;
                try {
                    if (F = X.find((C) => zd.NormalizedSchema.of(C).getMergedTraits().awsQueryError?.[0] === J), !F) F = X.getSchema(I)
                } catch (C) {
                    let E = zd.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (E) {
                        let z = E.ctor;
                        throw Object.assign(new z(J), W)
                    }
                    throw Error(J)
                }
                let V = zd.NormalizedSchema.of(F),
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
        Pt4 = class extends yEQ {
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
                A3(this, "AwsEc2QueryProtocol")
            }
            useNestedResult() {
                return !1
            }
        },
        eL1 = C5(),
        VHA = y4(),
        jt4 = pK(),
        St4 = R3(),
        _t4 = ZS(),
        xEQ = A3((A, Q) => SEQ(A, Q).then((B) => {
            if (B.length) {
                let G = new _t4.XMLParser({
                    attributeNamePrefix: "",
                    htmlEntities: !0,
                    ignoreAttributes: !1,
                    ignoreDeclaration: !0,
                    parseTagValue: !1,
                    trimValues: !1,
                    tagValueProcessor: A3((W, X) => X.trim() === "" && X.includes(`
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
                return (0, St4.getValueFromTextNode)(J)
            }
            return {}
        }), "parseXmlBody"),
        kt4 = A3(async (A, Q) => {
            let B = await xEQ(A, Q);
            if (B.Error) B.Error.message = B.Error.message ?? B.Error.Message;
            return B
        }, "parseXmlErrorBody"),
        vEQ = A3((A, Q) => {
            if (Q?.Error?.Code !== void 0) return Q.Error.Code;
            if (Q?.Code !== void 0) return Q.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadRestXmlErrorCode"),
        wS = WDA(),
        ur = y4(),
        yt4 = c6(),
        REQ = R3(),
        TEQ = gr(),
        bEQ = class extends mr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                A3(this, "XmlShapeSerializer")
            }
            stringBuffer;
            byteBuffer;
            buffer;
            write(A, Q) {
                let B = ur.NormalizedSchema.of(A);
                if (B.isStringSchema() && typeof Q === "string") this.stringBuffer = Q;
                else if (B.isBlobSchema()) this.byteBuffer = "byteLength" in Q ? Q : (this.serdeContext?.base64Decoder ?? TEQ.fromBase64)(Q);
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
                let I = wS.XmlNode.of(Z),
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
                            let V = wS.XmlNode.of(X.getMergedTraits().xmlName ?? X.getMemberName());
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
                    V = A3((K, D) => {
                        if (I.isListSchema()) this.writeList(I, Array.isArray(D) ? D : [D], K, F);
                        else if (I.isMapSchema()) this.writeMap(I, D, K, F);
                        else if (I.isStructSchema()) {
                            let H = this.writeStruct(I, D, F);
                            K.addChildNode(H.withName(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member"))
                        } else {
                            let H = wS.XmlNode.of(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member");
                            this.writeSimpleInto(I, D, H, F), K.addChildNode(H)
                        }
                    }, "writeItem");
                if (W) {
                    for (let K of Q)
                        if (J || K != null) V(B, K)
                } else {
                    let K = wS.XmlNode.of(Z.xmlName ?? A.getMemberName());
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
                    E = A3((z, w, N) => {
                        let q = wS.XmlNode.of(W, w),
                            [R, P] = this.getXmlnsAttribute(Y, C);
                        if (P) q.addAttribute(R, P);
                        z.addChildNode(q);
                        let y = wS.XmlNode.of(V);
                        if (X.isListSchema()) this.writeList(X, N, y, C);
                        else if (X.isMapSchema()) this.writeMap(X, N, y, C, !0);
                        else if (X.isStructSchema()) y = this.writeStruct(X, N, C);
                        else this.writeSimpleInto(X, N, y, C);
                        z.addChildNode(y)
                    }, "addKeyValue");
                if (D) {
                    for (let [z, w] of Object.entries(Q))
                        if (K || w != null) {
                            let N = wS.XmlNode.of(I.xmlName ?? A.getMemberName());
                            E(N, z, w), B.addChildNode(N)
                        }
                } else {
                    let z;
                    if (!Z) {
                        if (z = wS.XmlNode.of(I.xmlName ?? A.getMemberName()), C) z.addAttribute(H, C);
                        B.addChildNode(z)
                    }
                    for (let [w, N] of Object.entries(Q))
                        if (K || N != null) {
                            let q = wS.XmlNode.of("entry");
                            E(q, w, N), (Z ? B : z).addChildNode(q)
                        }
                }
            }
            writeSimple(A, Q) {
                if (Q === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
                let B = ur.NormalizedSchema.of(A),
                    G = null;
                if (Q && typeof Q === "object")
                    if (B.isBlobSchema()) G = (this.serdeContext?.base64Encoder ?? TEQ.toBase64)(Q);
                    else if (B.isTimestampSchema() && Q instanceof Date) {
                    let Z = this.settings.timestampFormat;
                    switch (Z.useTrait ? B.getSchema() === ur.SCHEMA.TIMESTAMP_DEFAULT ? Z.default : B.getSchema() ?? Z.default : Z.default) {
                        case ur.SCHEMA.TIMESTAMP_DATE_TIME:
                            G = Q.toISOString().replace(".000Z", "Z");
                            break;
                        case ur.SCHEMA.TIMESTAMP_HTTP_DATE:
                            G = (0, REQ.dateToUtcString)(Q);
                            break;
                        case ur.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            G = String(Q.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using http date", Q), G = (0, REQ.dateToUtcString)(Q);
                            break
                    }
                } else if (B.isBigDecimalSchema() && Q) {
                    if (Q instanceof yt4.NumericValue) return Q.string;
                    return String(Q)
                } else if (B.isMapSchema() || B.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
                else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${B.getName(!0)}`);
                if (B.isStringSchema() || B.isBooleanSchema() || B.isNumericSchema() || B.isBigIntegerSchema() || B.isBigDecimalSchema()) G = String(Q);
                if (G === null) throw Error(`Unhandled schema-value pair ${B.getName(!0)}=${Q}`);
                return G
            }
            writeSimpleInto(A, Q, B, G) {
                let Z = this.writeSimple(A, Q),
                    I = ur.NormalizedSchema.of(A),
                    Y = new wS.XmlText(Z),
                    [J, W] = this.getXmlnsAttribute(I, G);
                if (W) B.addAttribute(J, W);
                B.addChildNode(Y)
            }
            getXmlnsAttribute(A, Q) {
                let B = A.getMergedTraits(),
                    [G, Z] = B.xmlNamespace ?? [];
                if (Z && Z !== Q) return [G ? `xmlns:${G}` : "xmlns", Z];
                return [void 0, void 0]
            }
        },
        fEQ = class extends mr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                A3(this, "XmlCodec")
            }
            createSerializer() {
                let A = new bEQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new ZM1(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        xt4 = class extends eL1.HttpBindingProtocol {
            static {
                A3(this, "AwsRestXmlProtocol")
            }
            codec;
            serializer;
            deserializer;
            constructor(A) {
                super(A);
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: VHA.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !0,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace
                };
                this.codec = new fEQ(Q), this.serializer = new eL1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new eL1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
            }
            getPayloadCodec() {
                return this.codec
            }
            getShapeId() {
                return "aws.protocols#restXml"
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B),
                    Z = VHA.NormalizedSchema.of(A.input),
                    I = Z.getMemberSchemas();
                if (G.path = String(G.path).split("/").filter((Y) => {
                        return Y !== "{Bucket}"
                    }).join("/") || "/", !G.headers["content-type"]) {
                    let Y = Object.values(I).find((J) => {
                        return !!J.getMergedTraits().httpPayload
                    });
                    if (Y) {
                        let J = Y.getMergedTraits().mediaType;
                        if (J) G.headers["content-type"] = J;
                        else if (Y.isStringSchema()) G.headers["content-type"] = "text/plain";
                        else if (Y.isBlobSchema()) G.headers["content-type"] = "application/octet-stream";
                        else G.headers["content-type"] = "application/xml"
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
                            })) G.headers["content-type"] = "application/xml"
                    }
                }
                if (G.headers["content-type"] === "application/xml") {
                    if (typeof G.body === "string") G.body = '<?xml version="1.0" encoding="UTF-8"?>' + G.body
                }
                if (G.body) try {
                    G.headers["content-length"] = String((0, jt4.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                return super.deserializeResponse(A, Q, B)
            }
            async handleError(A, Q, B, G, Z) {
                let I = vEQ(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = VHA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = VHA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = VHA.NormalizedSchema.of(X),
                    V = G.Error?.message ?? G.Error?.Message ?? G.message ?? G.Message ?? "Unknown",
                    K = new X.ctor(V);
                await this.deserializeHttpMessage(X, Q, B, G);
                let D = {};
                for (let [H, C] of F.structIterator()) {
                    let E = C.getMergedTraits().xmlName ?? H,
                        z = G.Error?.[E] ?? G[E];
                    D[H] = this.codec.createDeserializer().readSchema(C, z)
                }
                throw Object.assign(K, {
                    $metadata: Z,
                    $response: B,
                    $fault: F.getMergedTraits().error,
                    message: V,
                    ...D
                }), K
            }
        }
});
var pz = U((KHA) => {
    Object.defineProperty(KHA, "__esModule", {
        value: !0
    });
    var IM1 = Tr();
    IM1.__exportStar(DL(), KHA);
    IM1.__exportStar(nL1(), KHA);
    IM1.__exportStar(gEQ(), KHA)
});
var DHA = U((RH7, oEQ) => {
    var {
        defineProperty: IuA,
        getOwnPropertyDescriptor: vt4,
        getOwnPropertyNames: bt4
    } = Object, ft4 = Object.prototype.hasOwnProperty, dv = (A, Q) => IuA(A, "name", {
        value: Q,
        configurable: !0
    }), ht4 = (A, Q) => {
        for (var B in Q) IuA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, gt4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bt4(Q))
                if (!ft4.call(A, Z) && Z !== B) IuA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = vt4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ut4 = (A) => gt4(IuA({}, "__esModule", {
        value: !0
    }), A), cEQ = {};
    ht4(cEQ, {
        DEFAULT_UA_APP_ID: () => pEQ,
        getUserAgentMiddlewareOptions: () => rEQ,
        getUserAgentPlugin: () => at4,
        resolveUserAgentConfig: () => iEQ,
        userAgentMiddleware: () => sEQ
    });
    oEQ.exports = ut4(cEQ);
    var mt4 = nB(),
        pEQ = void 0;

function lEQ(A) {
        if (A === void 0) return !0;
        return typeof A === "string" && A.length <= 50
    }
    dv(lEQ, "isValidUserAgentAppId");

function iEQ(A) {
        let Q = (0, mt4.normalizeProvider)(A.userAgentAppId ?? pEQ),
            {
                customUserAgent: B
            } = A;
        return Object.assign(A, {
            customUserAgent: typeof B === "string" ? [
                [B]
            ] : B,
            userAgentAppId: dv(async () => {
                let G = await Q();
                if (!lEQ(G)) {
                    let Z = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console : A.logger;
                    if (typeof G !== "string") Z?.warn("userAgentAppId must be a string or undefined.");
                    else if (G.length > 50) Z?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.")
                }
                return G
            }, "userAgentAppId")
        })
    }
    dv(iEQ, "resolveUserAgentConfig");
    var dt4 = JHA(),
        ct4 = Cw(),
        qS = pz(),
        pt4 = /\d{12}\.ddb/;

async function nEQ(A, Q, B) {
        if (B.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor")(0, qS.setFeature)(A, "PROTOCOL_RPC_V2_CBOR", "M");
        if (typeof Q.retryStrategy === "function") {
            let I = await Q.retryStrategy();
            if (typeof I.acquireInitialRetryToken === "function")
                if (I.constructor?.name?.includes("Adaptive"))(0, qS.setFeature)(A, "RETRY_MODE_ADAPTIVE", "F");
                else(0, qS.setFeature)(A, "RETRY_MODE_STANDARD", "E");
            else(0, qS.setFeature)(A, "RETRY_MODE_LEGACY", "D")
        }
        if (typeof Q.accountIdEndpointMode === "function") {
            let I = A.endpointV2;
            if (String(I?.url?.hostname).match(pt4))(0, qS.setFeature)(A, "ACCOUNT_ID_ENDPOINT", "O");
            switch (await Q.accountIdEndpointMode?.()) {
                case "disabled":
                    (0, qS.setFeature)(A, "ACCOUNT_ID_MODE_DISABLED", "Q");
                    break;
                case "preferred":
                    (0, qS.setFeature)(A, "ACCOUNT_ID_MODE_PREFERRED", "P");
                    break;
                case "required":
                    (0, qS.setFeature)(A, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    break
            }
        }
        let Z = A.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (Z?.$source) {
            let I = Z;
            if (I.accountId)(0, qS.setFeature)(A, "RESOLVED_ACCOUNT_ID", "T");
            for (let [Y, J] of Object.entries(I.$source ?? {}))(0, qS.setFeature)(A, Y, J)
        }
    }
    dv(nEQ, "checkFeatures");