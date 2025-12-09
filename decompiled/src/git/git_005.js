/**
 * Claude Code Decompiled
 * Category: git
 * File: 5/34
 * Lines: 67298 - 68785 (1488 lines)
 * Original file: cli.js
 */

                            break;
                        case VfA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            this.writeValue((0, Mz4.dateToUtcString)(Q));
                            break;
                        case VfA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
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
                this.buffer += `&${(0,iz1.extendedEncodeURIComponent)(A)}=`
            }
            writeValue(A) {
                this.buffer += (0, iz1.extendedEncodeURIComponent)(A)
            }
        },
        k1Q = class extends lz1.RpcProtocol {
            constructor(A) {
                super({
                    defaultNamespace: A.defaultNamespace
                });
                this.options = A;
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: am.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !1,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace,
                    serializeEmptyLists: !0
                };
                this.serializer = new Rz4(Q), this.deserializer = new tz1(Q)
            }
            static {
                o5(this, "AwsQueryProtocol")
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
                    }), (0, am.deref)(A.input) === "unit" || !G.body) G.body = "";
                if (G.body = `Action=${A.name.split("#")[1]}&Version=${this.options.version}` + G.body, G.body.endsWith("&")) G.body = G.body.slice(-1);
                try {
                    G.headers["content-length"] = String((0, Uz4.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                let G = this.deserializer,
                    Z = am.NormalizedSchema.of(A.output),
                    I = {};
                if (B.statusCode >= 300) {
                    let X = await (0, lz1.collectBody)(B.body, Q);
                    if (X.byteLength > 0) Object.assign(I, await G.read(am.SCHEMA.DOCUMENT, X));
                    await this.handleError(A, Q, B, I, this.deserializeMetadata(B))
                }
                for (let X in B.headers) {
                    let F = B.headers[X];
                    delete B.headers[X], B.headers[X.toLowerCase()] = F
                }
                let Y = Z.isStructSchema() && this.useNestedResult() ? A.name.split("#")[1] + "Result" : void 0,
                    J = await (0, lz1.collectBody)(B.body, Q);
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
                    X = am.TypeRegistry.for(Y),
                    F;
                try {
                    if (F = X.find((C) => am.NormalizedSchema.of(C).getMergedTraits().awsQueryError?.[0] === J), !F) F = X.getSchema(I)
                } catch (C) {
                    let E = am.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (E) {
                        let z = E.ctor;
                        throw Object.assign(new z(J), W)
                    }
                    throw Error(J)
                }
                let V = am.NormalizedSchema.of(F),
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
        Tz4 = class extends k1Q {
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
                o5(this, "AwsEc2QueryProtocol")
            }
            useNestedResult() {
                return !1
            }
        },
        nz1 = C5(),
        VDA = y4(),
        Pz4 = pK(),
        jz4 = W6(),
        Sz4 = ZS(),
        y1Q = o5((A, Q) => j1Q(A, Q).then((B) => {
            if (B.length) {
                let G = new Sz4.XMLParser({
                    attributeNamePrefix: "",
                    htmlEntities: !0,
                    ignoreAttributes: !1,
                    ignoreDeclaration: !0,
                    parseTagValue: !1,
                    trimValues: !1,
                    tagValueProcessor: o5((W, X) => X.trim() === "" && X.includes(`
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
                return (0, jz4.getValueFromTextNode)(J)
            }
            return {}
        }), "parseXmlBody"),
        _z4 = o5(async (A, Q) => {
            let B = await y1Q(A, Q);
            if (B.Error) B.Error.message = B.Error.message ?? B.Error.Message;
            return B
        }, "parseXmlErrorBody"),
        x1Q = o5((A, Q) => {
            if (Q?.Error?.Code !== void 0) return Q.Error.Code;
            if (Q?.Code !== void 0) return Q.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadRestXmlErrorCode"),
        IS = WDA(),
        Er = y4(),
        kz4 = c6(),
        O1Q = W6(),
        R1Q = lm(),
        v1Q = class extends zr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                o5(this, "XmlShapeSerializer")
            }
            stringBuffer;
            byteBuffer;
            buffer;
            write(A, Q) {
                let B = Er.NormalizedSchema.of(A);
                if (B.isStringSchema() && typeof Q === "string") this.stringBuffer = Q;
                else if (B.isBlobSchema()) this.byteBuffer = "byteLength" in Q ? Q : (this.serdeContext?.base64Decoder ?? R1Q.fromBase64)(Q);
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
                let I = IS.XmlNode.of(Z),
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
                            let V = IS.XmlNode.of(X.getMergedTraits().xmlName ?? X.getMemberName());
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
                    V = o5((K, D) => {
                        if (I.isListSchema()) this.writeList(I, Array.isArray(D) ? D : [D], K, F);
                        else if (I.isMapSchema()) this.writeMap(I, D, K, F);
                        else if (I.isStructSchema()) {
                            let H = this.writeStruct(I, D, F);
                            K.addChildNode(H.withName(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member"))
                        } else {
                            let H = IS.XmlNode.of(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member");
                            this.writeSimpleInto(I, D, H, F), K.addChildNode(H)
                        }
                    }, "writeItem");
                if (W) {
                    for (let K of Q)
                        if (J || K != null) V(B, K)
                } else {
                    let K = IS.XmlNode.of(Z.xmlName ?? A.getMemberName());
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
                    E = o5((z, w, N) => {
                        let q = IS.XmlNode.of(W, w),
                            [R, P] = this.getXmlnsAttribute(Y, C);
                        if (P) q.addAttribute(R, P);
                        z.addChildNode(q);
                        let y = IS.XmlNode.of(V);
                        if (X.isListSchema()) this.writeList(X, N, y, C);
                        else if (X.isMapSchema()) this.writeMap(X, N, y, C, !0);
                        else if (X.isStructSchema()) y = this.writeStruct(X, N, C);
                        else this.writeSimpleInto(X, N, y, C);
                        z.addChildNode(y)
                    }, "addKeyValue");
                if (D) {
                    for (let [z, w] of Object.entries(Q))
                        if (K || w != null) {
                            let N = IS.XmlNode.of(I.xmlName ?? A.getMemberName());
                            E(N, z, w), B.addChildNode(N)
                        }
                } else {
                    let z;
                    if (!Z) {
                        if (z = IS.XmlNode.of(I.xmlName ?? A.getMemberName()), C) z.addAttribute(H, C);
                        B.addChildNode(z)
                    }
                    for (let [w, N] of Object.entries(Q))
                        if (K || N != null) {
                            let q = IS.XmlNode.of("entry");
                            E(q, w, N), (Z ? B : z).addChildNode(q)
                        }
                }
            }
            writeSimple(A, Q) {
                if (Q === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
                let B = Er.NormalizedSchema.of(A),
                    G = null;
                if (Q && typeof Q === "object")
                    if (B.isBlobSchema()) G = (this.serdeContext?.base64Encoder ?? R1Q.toBase64)(Q);
                    else if (B.isTimestampSchema() && Q instanceof Date) {
                    let Z = this.settings.timestampFormat;
                    switch (Z.useTrait ? B.getSchema() === Er.SCHEMA.TIMESTAMP_DEFAULT ? Z.default : B.getSchema() ?? Z.default : Z.default) {
                        case Er.SCHEMA.TIMESTAMP_DATE_TIME:
                            G = Q.toISOString().replace(".000Z", "Z");
                            break;
                        case Er.SCHEMA.TIMESTAMP_HTTP_DATE:
                            G = (0, O1Q.dateToUtcString)(Q);
                            break;
                        case Er.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            G = String(Q.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using http date", Q), G = (0, O1Q.dateToUtcString)(Q);
                            break
                    }
                } else if (B.isBigDecimalSchema() && Q) {
                    if (Q instanceof kz4.NumericValue) return Q.string;
                    return String(Q)
                } else if (B.isMapSchema() || B.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
                else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${B.getName(!0)}`);
                if (B.isStringSchema() || B.isBooleanSchema() || B.isNumericSchema() || B.isBigIntegerSchema() || B.isBigDecimalSchema()) G = String(Q);
                if (G === null) throw Error(`Unhandled schema-value pair ${B.getName(!0)}=${Q}`);
                return G
            }
            writeSimpleInto(A, Q, B, G) {
                let Z = this.writeSimple(A, Q),
                    I = Er.NormalizedSchema.of(A),
                    Y = new IS.XmlText(Z),
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
        b1Q = class extends zr {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                o5(this, "XmlCodec")
            }
            createSerializer() {
                let A = new v1Q(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new tz1(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        yz4 = class extends nz1.HttpBindingProtocol {
            static {
                o5(this, "AwsRestXmlProtocol")
            }
            codec;
            serializer;
            deserializer;
            constructor(A) {
                super(A);
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: VDA.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !0,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace
                };
                this.codec = new b1Q(Q), this.serializer = new nz1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new nz1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
            }
            getPayloadCodec() {
                return this.codec
            }
            getShapeId() {
                return "aws.protocols#restXml"
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B),
                    Z = VDA.NormalizedSchema.of(A.input),
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
                    G.headers["content-length"] = String((0, Pz4.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                return super.deserializeResponse(A, Q, B)
            }
            async handleError(A, Q, B, G, Z) {
                let I = x1Q(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = VDA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = VDA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = VDA.NormalizedSchema.of(X),
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
var wV = U((KDA) => {
    Object.defineProperty(KDA, "__esModule", {
        value: !0
    });
    var ez1 = Vr();
    ez1.__exportStar(lN(), KDA);
    ez1.__exportStar(jz1(), KDA);
    ez1.__exportStar(h1Q(), KDA)
});
var M4A = U(($W7, r1Q) => {
    var {
        defineProperty: HfA,
        getOwnPropertyDescriptor: xz4,
        getOwnPropertyNames: vz4
    } = Object, bz4 = Object.prototype.hasOwnProperty, Kv = (A, Q) => HfA(A, "name", {
        value: Q,
        configurable: !0
    }), fz4 = (A, Q) => {
        for (var B in Q) HfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, hz4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of vz4(Q))
                if (!bz4.call(A, Z) && Z !== B) HfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = xz4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, gz4 = (A) => hz4(HfA({}, "__esModule", {
        value: !0
    }), A), d1Q = {};
    fz4(d1Q, {
        DEFAULT_UA_APP_ID: () => c1Q,
        getUserAgentMiddlewareOptions: () => s1Q,
        getUserAgentPlugin: () => nz4,
        resolveUserAgentConfig: () => l1Q,
        userAgentMiddleware: () => a1Q
    });
    r1Q.exports = gz4(d1Q);
    var uz4 = nB(),
        c1Q = void 0;

    function p1Q(A) {
        if (A === void 0) return !0;
        return typeof A === "string" && A.length <= 50
    }
    Kv(p1Q, "isValidUserAgentAppId");

    function l1Q(A) {
        let Q = (0, uz4.normalizeProvider)(A.userAgentAppId ?? c1Q),
            {
                customUserAgent: B
            } = A;
        return Object.assign(A, {
            customUserAgent: typeof B === "string" ? [
                [B]
            ] : B,
            userAgentAppId: Kv(async () => {
                let G = await Q();
                if (!p1Q(G)) {
                    let Z = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console : A.logger;
                    if (typeof G !== "string") Z?.warn("userAgentAppId must be a string or undefined.");
                    else if (G.length > 50) Z?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.")
                }
                return G
            }, "userAgentAppId")
        })
    }
    Kv(l1Q, "resolveUserAgentConfig");
    var mz4 = U4A(),
        dz4 = cC(),
        YS = wV(),
        cz4 = /\d{12}\.ddb/;
    async function i1Q(A, Q, B) {
        if (B.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor")(0, YS.setFeature)(A, "PROTOCOL_RPC_V2_CBOR", "M");
        if (typeof Q.retryStrategy === "function") {
            let I = await Q.retryStrategy();
            if (typeof I.acquireInitialRetryToken === "function")
                if (I.constructor?.name?.includes("Adaptive"))(0, YS.setFeature)(A, "RETRY_MODE_ADAPTIVE", "F");
                else(0, YS.setFeature)(A, "RETRY_MODE_STANDARD", "E");
            else(0, YS.setFeature)(A, "RETRY_MODE_LEGACY", "D")
        }
        if (typeof Q.accountIdEndpointMode === "function") {
            let I = A.endpointV2;
            if (String(I?.url?.hostname).match(cz4))(0, YS.setFeature)(A, "ACCOUNT_ID_ENDPOINT", "O");
            switch (await Q.accountIdEndpointMode?.()) {
                case "disabled":
                    (0, YS.setFeature)(A, "ACCOUNT_ID_MODE_DISABLED", "Q");
                    break;
                case "preferred":
                    (0, YS.setFeature)(A, "ACCOUNT_ID_MODE_PREFERRED", "P");
                    break;
                case "required":
                    (0, YS.setFeature)(A, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    break
            }
        }
        let Z = A.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (Z?.$source) {
            let I = Z;
            if (I.accountId)(0, YS.setFeature)(A, "RESOLVED_ACCOUNT_ID", "T");
            for (let [Y, J] of Object.entries(I.$source ?? {}))(0, YS.setFeature)(A, Y, J)
        }
    }
    Kv(i1Q, "checkFeatures");
    var g1Q = "user-agent",
        AU1 = "x-amz-user-agent",
        u1Q = " ",
        QU1 = "/",
        pz4 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        lz4 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
        m1Q = "-",
        iz4 = 1024;

    function n1Q(A) {
        let Q = "";
        for (let B in A) {
            let G = A[B];
            if (Q.length + G.length + 1 <= iz4) {
                if (Q.length) Q += "," + G;
                else Q += G;
                continue
            }
            break
        }
        return Q
    }
    Kv(n1Q, "encodeFeatures");
    var a1Q = Kv((A) => (Q, B) => async (G) => {
            let {
                request: Z
            } = G;
            if (!dz4.HttpRequest.isInstance(Z)) return Q(G);
            let {
                headers: I
            } = Z, Y = B?.userAgent?.map(DfA) || [], J = (await A.defaultUserAgentProvider()).map(DfA);
            await i1Q(B, A, G);
            let W = B;
            J.push(`m/${n1Q(Object.assign({},B.__smithy_context?.features,W.__aws_sdk_context?.features))}`);
            let X = A?.customUserAgent?.map(DfA) || [],
                F = await A.userAgentAppId();
            if (F) J.push(DfA([`app/${F}`]));
            let V = (0, mz4.getUserAgentPrefix)(),
                K = (V ? [V] : []).concat([...J, ...Y, ...X]).join(u1Q),
                D = [...J.filter((H) => H.startsWith("aws-sdk-")), ...X].join(u1Q);
            if (A.runtime !== "browser") {
                if (D) I[AU1] = I[AU1] ? `${I[g1Q]} ${D}` : D;
                I[g1Q] = K
            } else I[AU1] = K;
            return Q({
                ...G,
                request: Z
            })
        }, "userAgentMiddleware"),
        DfA = Kv((A) => {
            let Q = A[0].split(QU1).map((Y) => Y.replace(pz4, m1Q)).join(QU1),
                B = A[1]?.replace(lz4, m1Q),
                G = Q.indexOf(QU1),
                Z = Q.substring(0, G),
                I = Q.substring(G + 1);
            if (Z === "api") I = I.toLowerCase();
            return [Z, I, B].filter((Y) => Y && Y.length > 0).reduce((Y, J, W) => {
                switch (W) {
                    case 0:
                        return J;
                    case 1:
                        return `${Y}/${J}`;
                    default:
                        return `${Y}#${J}`
                }
            }, "")
        }, "escapeUserAgent"),
        s1Q = {
            name: "getUserAgentMiddleware",
            step: "build",
            priority: "low",
            tags: ["SET_USER_AGENT", "USER_AGENT"],
            override: !0
        },
        nz4 = Kv((A) => ({
            applyToStack: Kv((Q) => {
                Q.add(a1Q(A), s1Q)
            }, "applyToStack")
        }), "getUserAgentPlugin")
});
var Q0Q = U((wW7, A0Q) => {
    var {
        defineProperty: CfA,
        getOwnPropertyDescriptor: az4,
        getOwnPropertyNames: sz4
    } = Object, rz4 = Object.prototype.hasOwnProperty, o1Q = (A, Q) => CfA(A, "name", {
        value: Q,
        configurable: !0
    }), oz4 = (A, Q) => {
        for (var B in Q) CfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, tz4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of sz4(Q))
                if (!rz4.call(A, Z) && Z !== B) CfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = az4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, ez4 = (A) => tz4(CfA({}, "__esModule", {
        value: !0
    }), A), t1Q = {};
    oz4(t1Q, {
        SelectorType: () => e1Q,
        booleanSelector: () => AU4,
        numberSelector: () => QU4
    });
    A0Q.exports = ez4(t1Q);
    var AU4 = o1Q((A, Q, B) => {
            if (!(Q in A)) return;
            if (A[Q] === "true") return !0;
            if (A[Q] === "false") return !1;
            throw Error(`Cannot load ${B} "${Q}". Expected "true" or "false", got ${A[Q]}.`)
        }, "booleanSelector"),
        QU4 = o1Q((A, Q, B) => {
            if (!(Q in A)) return;
            let G = parseInt(A[Q], 10);
            if (Number.isNaN(G)) throw TypeError(`Cannot load ${B} '${Q}'. Expected number, got '${A[Q]}'.`);
            return G
        }, "numberSelector"),
        e1Q = ((A) => {
            return A.ENV = "env", A.CONFIG = "shared config entry", A
        })(e1Q || {})
});
var S8 = U((qW7, K0Q) => {
    var {
        defineProperty: zfA,
        getOwnPropertyDescriptor: BU4,
        getOwnPropertyNames: GU4
    } = Object, ZU4 = Object.prototype.hasOwnProperty, jR = (A, Q) => zfA(A, "name", {
        value: Q,
        configurable: !0
    }), IU4 = (A, Q) => {
        for (var B in Q) zfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, YU4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of GU4(Q))
                if (!ZU4.call(A, Z) && Z !== B) zfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = BU4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, JU4 = (A) => YU4(zfA({}, "__esModule", {
        value: !0
    }), A), Z0Q = {};
    IU4(Z0Q, {
        CONFIG_USE_DUALSTACK_ENDPOINT: () => Y0Q,
        CONFIG_USE_FIPS_ENDPOINT: () => W0Q,
        DEFAULT_USE_DUALSTACK_ENDPOINT: () => WU4,
        DEFAULT_USE_FIPS_ENDPOINT: () => FU4,
        ENV_USE_DUALSTACK_ENDPOINT: () => I0Q,
        ENV_USE_FIPS_ENDPOINT: () => J0Q,
        NODE_REGION_CONFIG_FILE_OPTIONS: () => EU4,
        NODE_REGION_CONFIG_OPTIONS: () => CU4,
        NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => XU4,
        NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => VU4,
        REGION_ENV_NAME: () => X0Q,
        REGION_INI_NAME: () => F0Q,
        getRegionInfo: () => qU4,
        resolveCustomEndpointsConfig: () => KU4,
        resolveEndpointsConfig: () => HU4,
        resolveRegionConfig: () => zU4
    });
    K0Q.exports = JU4(Z0Q);
    var sm = Q0Q(),
        I0Q = "AWS_USE_DUALSTACK_ENDPOINT",
        Y0Q = "use_dualstack_endpoint",
        WU4 = !1,
        XU4 = {
            environmentVariableSelector: (A) => (0, sm.booleanSelector)(A, I0Q, sm.SelectorType.ENV),
            configFileSelector: (A) => (0, sm.booleanSelector)(A, Y0Q, sm.SelectorType.CONFIG),
            default: !1
        },
        J0Q = "AWS_USE_FIPS_ENDPOINT",
        W0Q = "use_fips_endpoint",
        FU4 = !1,
        VU4 = {
            environmentVariableSelector: (A) => (0, sm.booleanSelector)(A, J0Q, sm.SelectorType.ENV),
            configFileSelector: (A) => (0, sm.booleanSelector)(A, W0Q, sm.SelectorType.CONFIG),
            default: !1
        },
        EfA = K7(),
        KU4 = jR((A) => {
            let {
                tls: Q,
                endpoint: B,
                urlParser: G,
                useDualstackEndpoint: Z
            } = A;
            return Object.assign(A, {
                tls: Q ?? !0,
                endpoint: (0, EfA.normalizeProvider)(typeof B === "string" ? G(B) : B),
                isCustomEndpoint: !0,
                useDualstackEndpoint: (0, EfA.normalizeProvider)(Z ?? !1)
            })
        }, "resolveCustomEndpointsConfig"),
        DU4 = jR(async (A) => {
            let {
                tls: Q = !0
            } = A, B = await A.region();
            if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(B)) throw Error("Invalid region in client config");
            let Z = await A.useDualstackEndpoint(),
                I = await A.useFipsEndpoint(),
                {
                    hostname: Y
                } = await A.regionInfoProvider(B, {
                    useDualstackEndpoint: Z,
                    useFipsEndpoint: I
                }) ?? {};
            if (!Y) throw Error("Cannot resolve hostname from client config");
            return A.urlParser(`${Q?"https:":"http:"}//${Y}`)
        }, "getEndpointFromRegion"),
        HU4 = jR((A) => {
            let Q = (0, EfA.normalizeProvider)(A.useDualstackEndpoint ?? !1),
                {
                    endpoint: B,
                    useFipsEndpoint: G,
                    urlParser: Z,
                    tls: I
                } = A;
            return Object.assign(A, {
                tls: I ?? !0,
                endpoint: B ? (0, EfA.normalizeProvider)(typeof B === "string" ? Z(B) : B) : () => DU4({
                    ...A,
                    useDualstackEndpoint: Q,
                    useFipsEndpoint: G
                }),
                isCustomEndpoint: !!B,
                useDualstackEndpoint: Q
            })
        }, "resolveEndpointsConfig"),
        X0Q = "AWS_REGION",
        F0Q = "region",
        CU4 = {
            environmentVariableSelector: (A) => A[X0Q],
            configFileSelector: (A) => A[F0Q],
            default: () => {
                throw Error("Region is missing")
            }
        },
        EU4 = {
            preferredFile: "credentials"
        },
        V0Q = jR((A) => typeof A === "string" && (A.startsWith("fips-") || A.endsWith("-fips")), "isFipsRegion"),
        B0Q = jR((A) => V0Q(A) ? ["fips-aws-global", "aws-fips"].includes(A) ? "us-east-1" : A.replace(/fips-(dkr-|prod-)?|-fips/, "") : A, "getRealRegion"),
        zU4 = jR((A) => {
            let {
                region: Q,
                useFipsEndpoint: B
            } = A;
            if (!Q) throw Error("Region is missing");
            return Object.assign(A, {
                region: async () => {
                    if (typeof Q === "string") return B0Q(Q);
                    let G = await Q();
                    return B0Q(G)
                },
                useFipsEndpoint: async () => {
                    let G = typeof Q === "string" ? Q : await Q();
                    if (V0Q(G)) return !0;
                    return typeof B !== "function" ? Promise.resolve(!!B) : B()
                }
            })
        }, "resolveRegionConfig"),
        G0Q = jR((A = [], {
            useFipsEndpoint: Q,
            useDualstackEndpoint: B
        }) => A.find(({
            tags: G
        }) => Q === G.includes("fips") && B === G.includes("dualstack"))?.hostname, "getHostnameFromVariants"),
        UU4 = jR((A, {
            regionHostname: Q,
            partitionHostname: B
        }) => Q ? Q : B ? B.replace("{region}", A) : void 0, "getResolvedHostname"),
        $U4 = jR((A, {
            partitionHash: Q
        }) => Object.keys(Q || {}).find((B) => Q[B].regions.includes(A)) ?? "aws", "getResolvedPartition"),
        wU4 = jR((A, {
            signingRegion: Q,
            regionRegex: B,
            useFipsEndpoint: G
        }) => {
            if (Q) return Q;
            else if (G) {
                let Z = B.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."),
                    I = A.match(Z);
                if (I) return I[0].slice(1, -1)
            }
        }, "getResolvedSigningRegion"),
        qU4 = jR((A, {
            useFipsEndpoint: Q = !1,
            useDualstackEndpoint: B = !1,
            signingService: G,
            regionHash: Z,
            partitionHash: I
        }) => {
            let Y = $U4(A, {
                    partitionHash: I
                }),
                J = A in Z ? A : I[Y]?.endpoint ?? A,
                W = {
                    useFipsEndpoint: Q,
                    useDualstackEndpoint: B
                },
                X = G0Q(Z[J]?.variants, W),
                F = G0Q(I[Y]?.variants, W),
                V = UU4(J, {
                    regionHostname: X,
                    partitionHostname: F
                });
            if (V === void 0) throw Error(`Endpoint resolution failed for: ${{resolvedRegion:J,useFipsEndpoint:Q,useDualstackEndpoint:B}}`);
            let K = wU4(V, {
                signingRegion: Z[J]?.signingRegion,
                regionRegex: I[Y].regionRegex,
                useFipsEndpoint: Q
            });
            return {
                partition: Y,
                signingService: G,
                hostname: V,
                ...K && {
                    signingRegion: K
                },
                ...Z[J]?.signingService && {
                    signingService: Z[J].signingService
                }
            }
        }, "getRegionInfo")
});
var N0Q = U((NW7, q0Q) => {
    var {
        defineProperty: UfA,
        getOwnPropertyDescriptor: NU4,
        getOwnPropertyNames: LU4
    } = Object, MU4 = Object.prototype.hasOwnProperty, $fA = (A, Q) => UfA(A, "name", {
        value: Q,
        configurable: !0
    }), OU4 = (A, Q) => {
        for (var B in Q) UfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, RU4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of LU4(Q))
                if (!MU4.call(A, Z) && Z !== B) UfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = NU4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, TU4 = (A) => RU4(UfA({}, "__esModule", {
        value: !0
    }), A), D0Q = {};
    OU4(D0Q, {
        AlgorithmId: () => z0Q,
        EndpointURLScheme: () => E0Q,
        FieldPosition: () => U0Q,
        HttpApiKeyAuthLocation: () => C0Q,
        HttpAuthLocation: () => H0Q,
        IniSectionType: () => $0Q,
        RequestHandlerProtocol: () => w0Q,
        SMITHY_CONTEXT_KEY: () => kU4,
        getDefaultClientConfiguration: () => SU4,
        resolveDefaultRuntimeConfig: () => _U4
    });
    q0Q.exports = TU4(D0Q);
    var H0Q = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(H0Q || {}),
        C0Q = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(C0Q || {}),
        E0Q = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(E0Q || {}),
        z0Q = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(z0Q || {}),
        PU4 = $fA((A) => {
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
        jU4 = $fA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        SU4 = $fA((A) => {
            return PU4(A)
        }, "getDefaultClientConfiguration"),
        _U4 = $fA((A) => {
            return jU4(A)
        }, "resolveDefaultRuntimeConfig"),
        U0Q = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(U0Q || {}),
        kU4 = "__smithy_context",
        $0Q = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })($0Q || {}),
        w0Q = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(w0Q || {})
});
var P0Q = U((LW7, T0Q) => {
    var {
        defineProperty: wfA,
        getOwnPropertyDescriptor: yU4,
        getOwnPropertyNames: xU4
    } = Object, vU4 = Object.prototype.hasOwnProperty, rm = (A, Q) => wfA(A, "name", {
        value: Q,
        configurable: !0
    }), bU4 = (A, Q) => {
        for (var B in Q) wfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, fU4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of xU4(Q))
                if (!vU4.call(A, Z) && Z !== B) wfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = yU4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, hU4 = (A) => fU4(wfA({}, "__esModule", {
        value: !0
    }), A), L0Q = {};
    bU4(L0Q, {
        Field: () => mU4,
        Fields: () => dU4,
        HttpRequest: () => cU4,
        HttpResponse: () => pU4,
        IHttpRequest: () => M0Q.HttpRequest,
        getHttpHandlerExtensionConfiguration: () => gU4,
        isValidHostname: () => R0Q,
        resolveHttpHandlerRuntimeConfig: () => uU4
    });
    T0Q.exports = hU4(L0Q);
    var gU4 = rm((A) => {
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
        uU4 = rm((A) => {
            return {
                httpHandler: A.httpHandler()
            }
        }, "resolveHttpHandlerRuntimeConfig"),
        M0Q = N0Q(),
        mU4 = class {
            static {
                rm(this, "Field")
            }
            constructor({
                name: A,
                kind: Q = M0Q.FieldPosition.HEADER,
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
        dU4 = class {
            constructor({
                fields: A = [],
                encoding: Q = "utf-8"
            }) {
                this.entries = {}, A.forEach(this.setField.bind(this)), this.encoding = Q
            }
            static {
                rm(this, "Fields")
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
        cU4 = class A {
            static {
                rm(this, "HttpRequest")
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
                if (B.query) B.query = O0Q(B.query);
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

    function O0Q(A) {
        return Object.keys(A).reduce((Q, B) => {
            let G = A[B];
            return {
                ...Q,
                [B]: Array.isArray(G) ? [...G] : G
            }
        }, {})
    }
    rm(O0Q, "cloneQuery");
    var pU4 = class {
        static {
            rm(this, "HttpResponse")
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

    function R0Q(A) {
        return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(A)
    }
    rm(R0Q, "isValidHostname")
});
var zX = U((TW7, y0Q) => {
    var {
        defineProperty: qfA,
        getOwnPropertyDescriptor: lU4,
        getOwnPropertyNames: iU4
    } = Object, nU4 = Object.prototype.hasOwnProperty, S0Q = (A, Q) => qfA(A, "name", {
        value: Q,
        configurable: !0
    }), aU4 = (A, Q) => {
        for (var B in Q) qfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, sU4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of iU4(Q))
                if (!nU4.call(A, Z) && Z !== B) qfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = lU4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, rU4 = (A) => sU4(qfA({}, "__esModule", {
        value: !0
    }), A), _0Q = {};
    aU4(_0Q, {
        contentLengthMiddleware: () => BU1,
        contentLengthMiddlewareOptions: () => k0Q,
        getContentLengthPlugin: () => tU4
    });
    y0Q.exports = rU4(_0Q);
    var oU4 = P0Q(),
        j0Q = "content-length";

    function BU1(A) {
        return (Q) => async (B) => {
            let G = B.request;
            if (oU4.HttpRequest.isInstance(G)) {
                let {
                    body: Z,
                    headers: I
                } = G;
                if (Z && Object.keys(I).map((Y) => Y.toLowerCase()).indexOf(j0Q) === -1) try {
                    let Y = A(Z);
                    G.headers = {
                        ...G.headers,
                        [j0Q]: String(Y)
                    }
                } catch (Y) {}
            }
            return Q({
                ...B,
                request: G
            })
        }
    }
    S0Q(BU1, "contentLengthMiddleware");
    var k0Q = {
            step: "build",
            tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
            name: "contentLengthMiddleware",
            override: !0
        },
        tU4 = S0Q((A) => ({
            applyToStack: (Q) => {
                Q.add(BU1(A.bodyLengthChecker), k0Q)
            }
        }), "getContentLengthPlugin")
});
var O4A = U((x0Q) => {
    Object.defineProperty(x0Q, "__esModule", {
        value: !0
    });
    x0Q.getHomeDir = void 0;
    var eU4 = UA("os"),
        A$4 = UA("path"),
        GU1 = {},
        Q$4 = () => {
            if (process && process.geteuid) return `${process.geteuid()}`;
            return "DEFAULT"
        },
        B$4 = () => {
            let {
                HOME: A,
                USERPROFILE: Q,
                HOMEPATH: B,
                HOMEDRIVE: G = `C:${A$4.sep}`
            } = process.env;
            if (A) return A;
            if (Q) return Q;
            if (B) return `${G}${B}`;
            let Z = Q$4();
            if (!GU1[Z]) GU1[Z] = (0, eU4.homedir)();
            return GU1[Z]
        };
    x0Q.getHomeDir = B$4
});
var ZU1 = U((b0Q) => {
    Object.defineProperty(b0Q, "__esModule", {
        value: !0
    });
    b0Q.getSSOTokenFilepath = void 0;
    var G$4 = UA("crypto"),
        Z$4 = UA("path"),
        I$4 = O4A(),
        Y$4 = (A) => {
            let B = (0, G$4.createHash)("sha1").update(A).digest("hex");
            return (0, Z$4.join)((0, I$4.getHomeDir)(), ".aws", "sso", "cache", `${B}.json`)
        };
    b0Q.getSSOTokenFilepath = Y$4
});
var u0Q = U((h0Q) => {
    Object.defineProperty(h0Q, "__esModule", {
        value: !0
    });
    h0Q.getSSOTokenFromFile = void 0;
    var J$4 = UA("fs"),
        W$4 = ZU1(),
        {
            readFile: X$4
        } = J$4.promises,
        F$4 = async (A) => {
            let Q = (0, W$4.getSSOTokenFilepath)(A),
                B = await X$4(Q, "utf8");
            return JSON.parse(B)
        };
    h0Q.getSSOTokenFromFile = F$4
});
var r0Q = U((_W7, s0Q) => {
    var {
        defineProperty: NfA,
        getOwnPropertyDescriptor: V$4,
        getOwnPropertyNames: K$4
    } = Object, D$4 = Object.prototype.hasOwnProperty, LfA = (A, Q) => NfA(A, "name", {
        value: Q,
        configurable: !0
    }), H$4 = (A, Q) => {
        for (var B in Q) NfA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, C$4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of K$4(Q))
                if (!D$4.call(A, Z) && Z !== B) NfA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = V$4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, E$4 = (A) => C$4(NfA({}, "__esModule", {
        value: !0
    }), A), m0Q = {};
    H$4(m0Q, {
        AlgorithmId: () => l0Q,
        EndpointURLScheme: () => p0Q,
        FieldPosition: () => i0Q,
        HttpApiKeyAuthLocation: () => c0Q,
        HttpAuthLocation: () => d0Q,
        IniSectionType: () => n0Q,
        RequestHandlerProtocol: () => a0Q,
        SMITHY_CONTEXT_KEY: () => q$4,
        getDefaultClientConfiguration: () => $$4,
        resolveDefaultRuntimeConfig: () => w$4
    });
    s0Q.exports = E$4(m0Q);
    var d0Q = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(d0Q || {}),
        c0Q = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(c0Q || {}),
        p0Q = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(p0Q || {}),
        l0Q = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(l0Q || {}),
        z$4 = LfA((A) => {
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
        U$4 = LfA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        $$4 = LfA((A) => {
            return z$4(A)
        }, "getDefaultClientConfiguration"),
        w$4 = LfA((A) => {
            return U$4(A)
        }, "resolveDefaultRuntimeConfig"),
        i0Q = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(i0Q || {}),
        q$4 = "__smithy_context",
        n0Q = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })(n0Q || {}),
        a0Q = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(a0Q || {})
});
var YU1 = U((o0Q) => {
    Object.defineProperty(o0Q, "__esModule", {
        value: !0
    });
    o0Q.slurpFile = void 0;
    var N$4 = UA("fs"),
        {
            readFile: L$4
        } = N$4.promises,
        IU1 = {},
        M$4 = (A, Q) => {
            if (!IU1[A] || (Q === null || Q === void 0 ? void 0 : Q.ignoreCache)) IU1[A] = L$4(A, "utf8");
            return IU1[A]
        };
    o0Q.slurpFile = M$4
});