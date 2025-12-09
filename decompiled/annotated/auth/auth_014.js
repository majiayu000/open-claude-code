/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: auth_014.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   U        (11次) = moduleWrapper(fn) - CommonJS module wrapper
 *   UA       (1次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 14/61
 * Lines: 82276 - 83772 (1497 lines)
 * Original file: cli.js
 */

                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = J8A.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = J8A.NormalizedSchema.of(X),
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
        Fh4 = class extends fq1 {
            static {
                t5(this, "AwsJson1_0Protocol")
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
        Vh4 = class extends fq1 {
            static {
                t5(this, "AwsJson1_1Protocol")
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
        Sq1 = C5(),
        mDA = y4(),
        Kh4 = pK(),
        Dh4 = class extends Sq1.HttpBindingProtocol {
            static {
                t5(this, "AwsRestJsonProtocol")
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
                        default: mDA.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    httpBindings: !0,
                    jsonName: !0
                };
                this.codec = new bq1(Q), this.serializer = new Sq1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new Sq1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
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
                    Z = mDA.NormalizedSchema.of(A.input),
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
                    G.headers["content-length"] = String((0, Kh4.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async handleError(A, Q, B, G, Z) {
                let I = vq1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = mDA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = mDA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = mDA.NormalizedSchema.of(X),
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
        Hh4 = p6(),
        Ch4 = t5((A) => {
            if (A == null) return;
            if (typeof A === "object" && "__type" in A) delete A.__type;
            return (0, Hh4.expectUnion)(A)
        }, "awsExpectUnion"),
        _q1 = C5(),
        Xd = y4(),
        Eh4 = pK(),
        zh4 = C5(),
        FYQ = y4(),
        Uh4 = p6(),
        $h4 = L2(),
        wh4 = ZS(),
        hq1 = class extends _r {
            constructor(A) {
                super();
                this.settings = A, this.stringDeserializer = new zh4.FromStringShapeDeserializer(A)
            }
            static {
                t5(this, "XmlShapeDeserializer")
            }
            stringDeserializer;
            setSerdeContext(A) {
                this.serdeContext = A, this.stringDeserializer.setSerdeContext(A)
            }
            read(A, Q, B) {
                let G = FYQ.NormalizedSchema.of(A),
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
                let Y = (this.serdeContext?.utf8Encoder ?? $h4.toUtf8)(Q),
                    J = this.parseXml(Y);
                return this.readSchema(A, B ? J[B] : J)
            }
            readSchema(A, Q) {
                let B = FYQ.NormalizedSchema.of(A),
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
                    let Q = new wh4.XMLParser({
                        attributeNamePrefix: "",
                        htmlEntities: !0,
                        ignoreAttributes: !1,
                        ignoreDeclaration: !0,
                        parseTagValue: !1,
                        trimValues: !1,
                        tagValueProcessor: t5((Y, J) => J.trim() === "" && J.includes(`
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
                    return (0, Uh4.getValueFromTextNode)(I)
                }
                return {}
            }
        },
        kq1 = C5(),
        nhA = y4(),
        qh4 = c6(),
        Nh4 = p6(),
        Lh4 = Wd(),
        Mh4 = class extends _r {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                t5(this, "QueryShapeSerializer")
            }
            buffer;
            write(A, Q, B = "") {
                if (this.buffer === void 0) this.buffer = "";
                let G = nhA.NormalizedSchema.of(A);
                if (B && !B.endsWith(".")) B += ".";
                if (G.isBlobSchema()) {
                    if (typeof Q === "string" || Q instanceof Uint8Array) this.writeKey(B), this.writeValue((this.serdeContext?.base64Encoder ?? Lh4.toBase64)(Q))
                } else if (G.isBooleanSchema() || G.isNumericSchema() || G.isStringSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigIntegerSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(String(Q))
                } else if (G.isBigDecimalSchema()) {
                    if (Q != null) this.writeKey(B), this.writeValue(Q instanceof qh4.NumericValue ? Q.string : String(Q))
                } else if (G.isTimestampSchema()) {
                    if (Q instanceof Date) switch (this.writeKey(B), (0, kq1.determineTimestampFormat)(G, this.settings)) {
                        case nhA.SCHEMA.TIMESTAMP_DATE_TIME:
                            this.writeValue(Q.toISOString().replace(".000Z", "Z"));
                            break;
                        case nhA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            this.writeValue((0, Nh4.dateToUtcString)(Q));
                            break;
                        case nhA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
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
                this.buffer += `&${(0,kq1.extendedEncodeURIComponent)(A)}=`
            }
            writeValue(A) {
                this.buffer += (0, kq1.extendedEncodeURIComponent)(A)
            }
        },
        UYQ = class extends _q1.RpcProtocol {
            constructor(A) {
                super({
                    defaultNamespace: A.defaultNamespace
                });
                this.options = A;
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: Xd.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !1,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace,
                    serializeEmptyLists: !0
                };
                this.serializer = new Mh4(Q), this.deserializer = new hq1(Q)
            }
            static {
                t5(this, "AwsQueryProtocol")
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
                    }), (0, Xd.deref)(A.input) === "unit" || !G.body) G.body = "";
                if (G.body = `Action=${A.name.split("#")[1]}&Version=${this.options.version}` + G.body, G.body.endsWith("&")) G.body = G.body.slice(-1);
                try {
                    G.headers["content-length"] = String((0, Eh4.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                let G = this.deserializer,
                    Z = Xd.NormalizedSchema.of(A.output),
                    I = {};
                if (B.statusCode >= 300) {
                    let X = await (0, _q1.collectBody)(B.body, Q);
                    if (X.byteLength > 0) Object.assign(I, await G.read(Xd.SCHEMA.DOCUMENT, X));
                    await this.handleError(A, Q, B, I, this.deserializeMetadata(B))
                }
                for (let X in B.headers) {
                    let F = B.headers[X];
                    delete B.headers[X], B.headers[X.toLowerCase()] = F
                }
                let Y = Z.isStructSchema() && this.useNestedResult() ? A.name.split("#")[1] + "Result" : void 0,
                    J = await (0, _q1.collectBody)(B.body, Q);
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
                    X = Xd.TypeRegistry.for(Y),
                    F;
                try {
                    if (F = X.find((C) => Xd.NormalizedSchema.of(C).getMergedTraits().awsQueryError?.[0] === J), !F) F = X.getSchema(I)
                } catch (C) {
                    let E = Xd.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (E) {
                        let z = E.ctor;
                        throw Object.assign(new z(J), W)
                    }
                    throw Error(J)
                }
                let V = Xd.NormalizedSchema.of(F),
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
        Oh4 = class extends UYQ {
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
                t5(this, "AwsEc2QueryProtocol")
            }
            useNestedResult() {
                return !1
            }
        },
        yq1 = C5(),
        dDA = y4(),
        Rh4 = pK(),
        Th4 = p6(),
        Ph4 = ZS(),
        $YQ = t5((A, Q) => CYQ(A, Q).then((B) => {
            if (B.length) {
                let G = new Ph4.XMLParser({
                    attributeNamePrefix: "",
                    htmlEntities: !0,
                    ignoreAttributes: !1,
                    ignoreDeclaration: !0,
                    parseTagValue: !1,
                    trimValues: !1,
                    tagValueProcessor: t5((W, X) => X.trim() === "" && X.includes(`
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
                return (0, Th4.getValueFromTextNode)(J)
            }
            return {}
        }), "parseXmlBody"),
        jh4 = t5(async (A, Q) => {
            let B = await $YQ(A, Q);
            if (B.Error) B.Error.message = B.Error.message ?? B.Error.Message;
            return B
        }, "parseXmlErrorBody"),
        wYQ = t5((A, Q) => {
            if (Q?.Error?.Code !== void 0) return Q.Error.Code;
            if (Q?.Code !== void 0) return Q.Code;
            if (A.statusCode == 404) return "NotFound"
        }, "loadRestXmlErrorCode"),
        HS = WDA(),
        Sr = y4(),
        Sh4 = c6(),
        VYQ = p6(),
        KYQ = Wd(),
        qYQ = class extends _r {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                t5(this, "XmlShapeSerializer")
            }
            stringBuffer;
            byteBuffer;
            buffer;
            write(A, Q) {
                let B = Sr.NormalizedSchema.of(A);
                if (B.isStringSchema() && typeof Q === "string") this.stringBuffer = Q;
                else if (B.isBlobSchema()) this.byteBuffer = "byteLength" in Q ? Q : (this.serdeContext?.base64Decoder ?? KYQ.fromBase64)(Q);
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
                let I = HS.XmlNode.of(Z),
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
                            let V = HS.XmlNode.of(X.getMergedTraits().xmlName ?? X.getMemberName());
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
                    V = t5((K, D) => {
                        if (I.isListSchema()) this.writeList(I, Array.isArray(D) ? D : [D], K, F);
                        else if (I.isMapSchema()) this.writeMap(I, D, K, F);
                        else if (I.isStructSchema()) {
                            let H = this.writeStruct(I, D, F);
                            K.addChildNode(H.withName(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member"))
                        } else {
                            let H = HS.XmlNode.of(W ? Z.xmlName ?? A.getMemberName() : Y.xmlName ?? "member");
                            this.writeSimpleInto(I, D, H, F), K.addChildNode(H)
                        }
                    }, "writeItem");
                if (W) {
                    for (let K of Q)
                        if (J || K != null) V(B, K)
                } else {
                    let K = HS.XmlNode.of(Z.xmlName ?? A.getMemberName());
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
                    E = t5((z, w, N) => {
                        let q = HS.XmlNode.of(W, w),
                            [R, P] = this.getXmlnsAttribute(Y, C);
                        if (P) q.addAttribute(R, P);
                        z.addChildNode(q);
                        let y = HS.XmlNode.of(V);
                        if (X.isListSchema()) this.writeList(X, N, y, C);
                        else if (X.isMapSchema()) this.writeMap(X, N, y, C, !0);
                        else if (X.isStructSchema()) y = this.writeStruct(X, N, C);
                        else this.writeSimpleInto(X, N, y, C);
                        z.addChildNode(y)
                    }, "addKeyValue");
                if (D) {
                    for (let [z, w] of Object.entries(Q))
                        if (K || w != null) {
                            let N = HS.XmlNode.of(I.xmlName ?? A.getMemberName());
                            E(N, z, w), B.addChildNode(N)
                        }
                } else {
                    let z;
                    if (!Z) {
                        if (z = HS.XmlNode.of(I.xmlName ?? A.getMemberName()), C) z.addAttribute(H, C);
                        B.addChildNode(z)
                    }
                    for (let [w, N] of Object.entries(Q))
                        if (K || N != null) {
                            let q = HS.XmlNode.of("entry");
                            E(q, w, N), (Z ? B : z).addChildNode(q)
                        }
                }
            }
            writeSimple(A, Q) {
                if (Q === null) throw Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
                let B = Sr.NormalizedSchema.of(A),
                    G = null;
                if (Q && typeof Q === "object")
                    if (B.isBlobSchema()) G = (this.serdeContext?.base64Encoder ?? KYQ.toBase64)(Q);
                    else if (B.isTimestampSchema() && Q instanceof Date) {
                    let Z = this.settings.timestampFormat;
                    switch (Z.useTrait ? B.getSchema() === Sr.SCHEMA.TIMESTAMP_DEFAULT ? Z.default : B.getSchema() ?? Z.default : Z.default) {
                        case Sr.SCHEMA.TIMESTAMP_DATE_TIME:
                            G = Q.toISOString().replace(".000Z", "Z");
                            break;
                        case Sr.SCHEMA.TIMESTAMP_HTTP_DATE:
                            G = (0, VYQ.dateToUtcString)(Q);
                            break;
                        case Sr.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            G = String(Q.getTime() / 1000);
                            break;
                        default:
                            console.warn("Missing timestamp format, using http date", Q), G = (0, VYQ.dateToUtcString)(Q);
                            break
                    }
                } else if (B.isBigDecimalSchema() && Q) {
                    if (Q instanceof Sh4.NumericValue) return Q.string;
                    return String(Q)
                } else if (B.isMapSchema() || B.isListSchema()) throw Error("@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.");
                else throw Error(`@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${B.getName(!0)}`);
                if (B.isStringSchema() || B.isBooleanSchema() || B.isNumericSchema() || B.isBigIntegerSchema() || B.isBigDecimalSchema()) G = String(Q);
                if (G === null) throw Error(`Unhandled schema-value pair ${B.getName(!0)}=${Q}`);
                return G
            }
            writeSimpleInto(A, Q, B, G) {
                let Z = this.writeSimple(A, Q),
                    I = Sr.NormalizedSchema.of(A),
                    Y = new HS.XmlText(Z),
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
        NYQ = class extends _r {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                t5(this, "XmlCodec")
            }
            createSerializer() {
                let A = new qYQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new hq1(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        _h4 = class extends yq1.HttpBindingProtocol {
            static {
                t5(this, "AwsRestXmlProtocol")
            }
            codec;
            serializer;
            deserializer;
            constructor(A) {
                super(A);
                let Q = {
                    timestampFormat: {
                        useTrait: !0,
                        default: dDA.SCHEMA.TIMESTAMP_DATE_TIME
                    },
                    httpBindings: !0,
                    xmlNamespace: A.xmlNamespace,
                    serviceNamespace: A.defaultNamespace
                };
                this.codec = new NYQ(Q), this.serializer = new yq1.HttpInterceptingShapeSerializer(this.codec.createSerializer(), Q), this.deserializer = new yq1.HttpInterceptingShapeDeserializer(this.codec.createDeserializer(), Q)
            }
            getPayloadCodec() {
                return this.codec
            }
            getShapeId() {
                return "aws.protocols#restXml"
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B),
                    Z = dDA.NormalizedSchema.of(A.input),
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
                    G.headers["content-length"] = String((0, Rh4.calculateBodyLength)(G.body))
                } catch (Y) {}
                return G
            }
            async deserializeResponse(A, Q, B) {
                return super.deserializeResponse(A, Q, B)
            }
            async handleError(A, Q, B, G, Z) {
                let I = wYQ(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = dDA.TypeRegistry.for(Y),
                    X;
                try {
                    X = W.getSchema(I)
                } catch (H) {
                    let C = dDA.TypeRegistry.for("smithy.ts.sdk.synthetic." + Y).getBaseException();
                    if (C) {
                        let E = C.ctor;
                        throw Object.assign(new E(J), G)
                    }
                    throw Error(J)
                }
                let F = dDA.NormalizedSchema.of(X),
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
var LV = U((cDA) => {
    Object.defineProperty(cDA, "__esModule", {
        value: !0
    });
    var gq1 = Pr();
    gq1.__exportStar(yR(), cDA);
    gq1.__exportStar(wq1(), cDA);
    gq1.__exportStar(MYQ(), cDA)
});
var F8A = U((cV7, bYQ) => {
    var {
        defineProperty: rhA,
        getOwnPropertyDescriptor: kh4,
        getOwnPropertyNames: yh4
    } = Object, xh4 = Object.prototype.hasOwnProperty, yv = (A, Q) => rhA(A, "name", {
        value: Q,
        configurable: !0
    }), vh4 = (A, Q) => {
        for (var B in Q) rhA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, bh4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of yh4(Q))
                if (!xh4.call(A, Z) && Z !== B) rhA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = kh4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, fh4 = (A) => bh4(rhA({}, "__esModule", {
        value: !0
    }), A), PYQ = {};
    vh4(PYQ, {
        DEFAULT_UA_APP_ID: () => jYQ,
        getUserAgentMiddlewareOptions: () => vYQ,
        getUserAgentPlugin: () => lh4,
        resolveUserAgentConfig: () => _YQ,
        userAgentMiddleware: () => xYQ
    });
    bYQ.exports = fh4(PYQ);
    var hh4 = nB(),
        jYQ = void 0;

    function SYQ(A) {
        if (A === void 0) return !0;
        return typeof A === "string" && A.length <= 50
    }
    yv(SYQ, "isValidUserAgentAppId");

    function _YQ(A) {
        let Q = (0, hh4.normalizeProvider)(A.userAgentAppId ?? jYQ),
            {
                customUserAgent: B
            } = A;
        return Object.assign(A, {
            customUserAgent: typeof B === "string" ? [
                [B]
            ] : B,
            userAgentAppId: yv(async () => {
                let G = await Q();
                if (!SYQ(G)) {
                    let Z = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console : A.logger;
                    if (typeof G !== "string") Z?.warn("userAgentAppId must be a string or undefined.");
                    else if (G.length > 50) Z?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.")
                }
                return G
            }, "userAgentAppId")
        })
    }
    yv(_YQ, "resolveUserAgentConfig");
    var gh4 = Z8A(),
        uh4 = cz(),
        CS = LV(),
        mh4 = /\d{12}\.ddb/;
    async function kYQ(A, Q, B) {
        if (B.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor")(0, CS.setFeature)(A, "PROTOCOL_RPC_V2_CBOR", "M");
        if (typeof Q.retryStrategy === "function") {
            let I = await Q.retryStrategy();
            if (typeof I.acquireInitialRetryToken === "function")
                if (I.constructor?.name?.includes("Adaptive"))(0, CS.setFeature)(A, "RETRY_MODE_ADAPTIVE", "F");
                else(0, CS.setFeature)(A, "RETRY_MODE_STANDARD", "E");
            else(0, CS.setFeature)(A, "RETRY_MODE_LEGACY", "D")
        }
        if (typeof Q.accountIdEndpointMode === "function") {
            let I = A.endpointV2;
            if (String(I?.url?.hostname).match(mh4))(0, CS.setFeature)(A, "ACCOUNT_ID_ENDPOINT", "O");
            switch (await Q.accountIdEndpointMode?.()) {
                case "disabled":
                    (0, CS.setFeature)(A, "ACCOUNT_ID_MODE_DISABLED", "Q");
                    break;
                case "preferred":
                    (0, CS.setFeature)(A, "ACCOUNT_ID_MODE_PREFERRED", "P");
                    break;
                case "required":
                    (0, CS.setFeature)(A, "ACCOUNT_ID_MODE_REQUIRED", "R");
                    break
            }
        }
        let Z = A.__smithy_context?.selectedHttpAuthScheme?.identity;
        if (Z?.$source) {
            let I = Z;
            if (I.accountId)(0, CS.setFeature)(A, "RESOLVED_ACCOUNT_ID", "T");
            for (let [Y, J] of Object.entries(I.$source ?? {}))(0, CS.setFeature)(A, Y, J)
        }
    }
    yv(kYQ, "checkFeatures");
    var OYQ = "user-agent",
        uq1 = "x-amz-user-agent",
        RYQ = " ",
        mq1 = "/",
        dh4 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g,
        ch4 = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g,
        TYQ = "-",
        ph4 = 1024;

    function yYQ(A) {
        let Q = "";
        for (let B in A) {
            let G = A[B];
            if (Q.length + G.length + 1 <= ph4) {
                if (Q.length) Q += "," + G;
                else Q += G;
                continue
            }
            break
        }
        return Q
    }
    yv(yYQ, "encodeFeatures");
    var xYQ = yv((A) => (Q, B) => async (G) => {
            let {
                request: Z
            } = G;
            if (!uh4.HttpRequest.isInstance(Z)) return Q(G);
            let {
                headers: I
            } = Z, Y = B?.userAgent?.map(shA) || [], J = (await A.defaultUserAgentProvider()).map(shA);
            await kYQ(B, A, G);
            let W = B;
            J.push(`m/${yYQ(Object.assign({},B.__smithy_context?.features,W.__aws_sdk_context?.features))}`);
            let X = A?.customUserAgent?.map(shA) || [],
                F = await A.userAgentAppId();
            if (F) J.push(shA([`app/${F}`]));
            let V = (0, gh4.getUserAgentPrefix)(),
                K = (V ? [V] : []).concat([...J, ...Y, ...X]).join(RYQ),
                D = [...J.filter((H) => H.startsWith("aws-sdk-")), ...X].join(RYQ);
            if (A.runtime !== "browser") {
                if (D) I[uq1] = I[uq1] ? `${I[OYQ]} ${D}` : D;
                I[OYQ] = K
            } else I[uq1] = K;
            return Q({
                ...G,
                request: Z
            })
        }, "userAgentMiddleware"),
        shA = yv((A) => {
            let Q = A[0].split(mq1).map((Y) => Y.replace(dh4, TYQ)).join(mq1),
                B = A[1]?.replace(ch4, TYQ),
                G = Q.indexOf(mq1),
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
        vYQ = {
            name: "getUserAgentMiddleware",
            step: "build",
            priority: "low",
            tags: ["SET_USER_AGENT", "USER_AGENT"],
            override: !0
        },
        lh4 = yv((A) => ({
            applyToStack: yv((Q) => {
                Q.add(xYQ(A), vYQ)
            }, "applyToStack")
        }), "getUserAgentPlugin")
});
var cq1 = U((fYQ) => {
    Object.defineProperty(fYQ, "__esModule", {
        value: !0
    });
    fYQ.resolveHttpAuthSchemeConfig = fYQ.defaultCognitoIdentityHttpAuthSchemeProvider = fYQ.defaultCognitoIdentityHttpAuthSchemeParametersProvider = void 0;
    var ih4 = LV(),
        dq1 = K7(),
        nh4 = async (A, Q, B) => {
            return {
                operation: (0, dq1.getSmithyContext)(Q).operation,
                region: await (0, dq1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    fYQ.defaultCognitoIdentityHttpAuthSchemeParametersProvider = nh4;

    function ah4(A) {
        return {
            schemeId: "aws.auth#sigv4",
            signingProperties: {
                name: "cognito-identity",
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

    function ohA(A) {
        return {
            schemeId: "smithy.api#noAuth"
        }
    }
    var sh4 = (A) => {
        let Q = [];
        switch (A.operation) {
            case "GetCredentialsForIdentity": {
                Q.push(ohA(A));
                break
            }
            case "GetId": {
                Q.push(ohA(A));
                break
            }
            case "GetOpenIdToken": {
                Q.push(ohA(A));
                break
            }
            case "UnlinkIdentity": {
                Q.push(ohA(A));
                break
            }
            default:
                Q.push(ah4(A))
        }
        return Q
    };
    fYQ.defaultCognitoIdentityHttpAuthSchemeProvider = sh4;
    var rh4 = (A) => {
        let Q = (0, ih4.resolveAwsSdkSigV4Config)(A);
        return Object.assign(Q, {
            authSchemePreference: (0, dq1.normalizeProvider)(A.authSchemePreference ?? [])
        })
    };
    fYQ.resolveHttpAuthSchemeConfig = rh4
});
var gYQ = U((lV7, eh4) => {
    eh4.exports = {
        name: "@aws-sdk/client-cognito-identity",
        description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native",
        version: "3.840.0",
        scripts: {
            build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
            "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity",
            "build:es": "tsc -p tsconfig.es.json",
            "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
            "build:types": "tsc -p tsconfig.types.json",
            "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
            clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
            "extract:docs": "api-extractor run --local",
            "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity",
            "test:e2e": "yarn g:vitest run -c vitest.config.e2e.ts --mode development",
            "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.ts"
        },
        main: "./dist-cjs/index.js",
        types: "./dist-types/index.d.ts",
        module: "./dist-es/index.js",
        sideEffects: !1,
        dependencies: {
            "@aws-crypto/sha256-browser": "5.2.0",
            "@aws-crypto/sha256-js": "5.2.0",
            "@aws-sdk/core": "3.840.0",
            "@aws-sdk/credential-provider-node": "3.840.0",
            "@aws-sdk/middleware-host-header": "3.840.0",
            "@aws-sdk/middleware-logger": "3.840.0",
            "@aws-sdk/middleware-recursion-detection": "3.840.0",
            "@aws-sdk/middleware-user-agent": "3.840.0",
            "@aws-sdk/region-config-resolver": "3.840.0",
            "@aws-sdk/types": "3.840.0",
            "@aws-sdk/util-endpoints": "3.840.0",
            "@aws-sdk/util-user-agent-browser": "3.840.0",
            "@aws-sdk/util-user-agent-node": "3.840.0",
            "@smithy/config-resolver": "^4.1.4",
            "@smithy/core": "^3.6.0",
            "@smithy/fetch-http-handler": "^5.0.4",
            "@smithy/hash-node": "^4.0.4",
            "@smithy/invalid-dependency": "^4.0.4",
            "@smithy/middleware-content-length": "^4.0.4",
            "@smithy/middleware-endpoint": "^4.1.13",
            "@smithy/middleware-retry": "^4.1.14",
            "@smithy/middleware-serde": "^4.0.8",
            "@smithy/middleware-stack": "^4.0.4",
            "@smithy/node-config-provider": "^4.1.3",
            "@smithy/node-http-handler": "^4.0.6",
            "@smithy/protocol-http": "^5.1.2",
            "@smithy/smithy-client": "^4.4.5",
            "@smithy/types": "^4.3.1",
            "@smithy/url-parser": "^4.0.4",
            "@smithy/util-base64": "^4.0.0",
            "@smithy/util-body-length-browser": "^4.0.0",
            "@smithy/util-body-length-node": "^4.0.0",
            "@smithy/util-defaults-mode-browser": "^4.0.21",
            "@smithy/util-defaults-mode-node": "^4.0.21",
            "@smithy/util-endpoints": "^3.0.6",
            "@smithy/util-middleware": "^4.0.4",
            "@smithy/util-retry": "^4.0.6",
            "@smithy/util-utf8": "^4.0.0",
            tslib: "^2.6.2"
        },
        devDependencies: {
            "@aws-sdk/client-iam": "3.840.0",
            "@tsconfig/node18": "18.2.4",
            "@types/chai": "^4.2.11",
            "@types/node": "^18.19.69",
            concurrently: "7.0.0",
            "downlevel-dts": "0.10.1",
            rimraf: "3.0.2",
            typescript: "~5.8.3"
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
        homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity",
        repository: {
            type: "git",
            url: "https://github.com/aws/aws-sdk-js-v3.git",
            directory: "clients/client-cognito-identity"
        }
    }
});
var pq1 = U((iV7, nYQ) => {
    var {
        defineProperty: thA,
        getOwnPropertyDescriptor: Ag4,
        getOwnPropertyNames: Qg4
    } = Object, Bg4 = Object.prototype.hasOwnProperty, Gg4 = (A, Q) => thA(A, "name", {
        value: Q,
        configurable: !0
    }), Zg4 = (A, Q) => {
        for (var B in Q) thA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Ig4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Qg4(Q))
                if (!Bg4.call(A, Z) && Z !== B) thA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ag4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Yg4 = (A) => Ig4(thA({}, "__esModule", {
        value: !0
    }), A), uYQ = {};
    Zg4(uYQ, {
        ENV_ACCOUNT_ID: () => iYQ,
        ENV_CREDENTIAL_SCOPE: () => lYQ,
        ENV_EXPIRATION: () => pYQ,
        ENV_KEY: () => mYQ,
        ENV_SECRET: () => dYQ,
        ENV_SESSION: () => cYQ,
        fromEnv: () => Xg4
    });
    nYQ.exports = Yg4(uYQ);
    var Jg4 = yR(),
        Wg4 = P2(),
        mYQ = "AWS_ACCESS_KEY_ID",
        dYQ = "AWS_SECRET_ACCESS_KEY",
        cYQ = "AWS_SESSION_TOKEN",
        pYQ = "AWS_CREDENTIAL_EXPIRATION",
        lYQ = "AWS_CREDENTIAL_SCOPE",
        iYQ = "AWS_ACCOUNT_ID",
        Xg4 = Gg4((A) => async () => {
            A?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
            let Q = process.env[mYQ],
                B = process.env[dYQ],
                G = process.env[cYQ],
                Z = process.env[pYQ],
                I = process.env[lYQ],
                Y = process.env[iYQ];
            if (Q && B) {
                let J = {
                    accessKeyId: Q,
                    secretAccessKey: B,
                    ...G && {
                        sessionToken: G
                    },
                    ...Z && {
                        expiration: new Date(Z)
                    },
                    ...I && {
                        credentialScope: I
                    },
                    ...Y && {
                        accountId: Y
                    }
                };
                return (0, Jg4.setCredentialFeature)(J, "CREDENTIALS_ENV_VARS", "g"), J
            }
            throw new Wg4.CredentialsProviderError("Unable to find environment variable credentials.", {
                logger: A?.logger
            })
        }, "fromEnv")
});
var rYQ = U((aYQ) => {
    Object.defineProperty(aYQ, "__esModule", {
        value: !0
    });
    aYQ.checkUrl = void 0;
    var Fg4 = P2(),
        Vg4 = "169.254.170.2",
        Kg4 = "169.254.170.23",
        Dg4 = "[fd00:ec2::23]",
        Hg4 = (A, Q) => {
            if (A.protocol === "https:") return;
            if (A.hostname === Vg4 || A.hostname === Kg4 || A.hostname === Dg4) return;
            if (A.hostname.includes("[")) {
                if (A.hostname === "[::1]" || A.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return
            } else {
                if (A.hostname === "localhost") return;
                let B = A.hostname.split("."),
                    G = (Z) => {
                        let I = parseInt(Z, 10);
                        return 0 <= I && I <= 255
                    };
                if (B[0] === "127" && G(B[1]) && G(B[2]) && G(B[3]) && B.length === 4) return
            }
            throw new Fg4.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
                logger: Q
            })
        };
    aYQ.checkUrl = Hg4
});
var tYQ = U((oYQ) => {
    Object.defineProperty(oYQ, "__esModule", {
        value: !0
    });
    oYQ.createGetRequest = Ug4;
    oYQ.getCredentials = $g4;
    var lq1 = P2(),
        Cg4 = cz(),
        Eg4 = p6(),
        zg4 = cm();

    function Ug4(A) {
        return new Cg4.HttpRequest({
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
    async function $g4(A, Q) {
        let G = await (0, zg4.sdkStreamMixin)(A.body).transformToString();
        if (A.statusCode === 200) {
            let Z = JSON.parse(G);
            if (typeof Z.AccessKeyId !== "string" || typeof Z.SecretAccessKey !== "string" || typeof Z.Token !== "string" || typeof Z.Expiration !== "string") throw new lq1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
                logger: Q
            });
            return {
                accessKeyId: Z.AccessKeyId,
                secretAccessKey: Z.SecretAccessKey,
                sessionToken: Z.Token,
                expiration: (0, Eg4.parseRfc3339DateTime)(Z.Expiration)
            }
        }
        if (A.statusCode >= 400 && A.statusCode < 500) {
            let Z = {};
            try {
                Z = JSON.parse(G)
            } catch (I) {}
            throw Object.assign(new lq1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
                logger: Q
            }), {
                Code: Z.Code,
                Message: Z.Message
            })
        }
        throw new lq1.CredentialsProviderError(`Server responded with status: ${A.statusCode}`, {
            logger: Q
        })
    }
});
var QJQ = U((eYQ) => {
    Object.defineProperty(eYQ, "__esModule", {
        value: !0
    });
    eYQ.retryWrapper = void 0;
    var Ng4 = (A, Q, B) => {
        return async () => {
            for (let G = 0; G < Q; ++G) try {
                return await A()
            } catch (Z) {
                await new Promise((I) => setTimeout(I, B))
            }
            return await A()
        }
    };
    eYQ.retryWrapper = Ng4
});
var YJQ = U((ZJQ) => {
    Object.defineProperty(ZJQ, "__esModule", {
        value: !0
    });
    ZJQ.fromHttp = void 0;
    var Lg4 = Pr(),
        Mg4 = yR(),
        Og4 = oG(),
        BJQ = P2(),
        Rg4 = Lg4.__importDefault(UA("fs/promises")),
        Tg4 = rYQ(),
        GJQ = tYQ(),
        Pg4 = QJQ(),
        jg4 = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        Sg4 = "http://169.254.170.2",
        _g4 = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        kg4 = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
        yg4 = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        xg4 = (A = {}) => {
            A.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
            let Q, B = A.awsContainerCredentialsRelativeUri ?? process.env[jg4],
                G = A.awsContainerCredentialsFullUri ?? process.env[_g4],
                Z = A.awsContainerAuthorizationToken ?? process.env[yg4],
                I = A.awsContainerAuthorizationTokenFile ?? process.env[kg4],
                Y = A.logger?.constructor?.name === "NoOpLogger" || !A.logger ? console.warn : A.logger.warn;
            if (B && G) Y("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri."), Y("awsContainerCredentialsFullUri will take precedence.");
            if (Z && I) Y("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile."), Y("awsContainerAuthorizationToken will take precedence.");
            if (G) Q = G;
            else if (B) Q = `${Sg4}${B}`;
            else throw new BJQ.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
                logger: A.logger
            });
            let J = new URL(Q);
            (0, Tg4.checkUrl)(J, A.logger);
            let W = new Og4.NodeHttpHandler({
                requestTimeout: A.timeout ?? 1000,
                connectionTimeout: A.timeout ?? 1000
            });
            return (0, Pg4.retryWrapper)(async () => {
                let X = (0, GJQ.createGetRequest)(J);
                if (Z) X.headers.Authorization = Z;
                else if (I) X.headers.Authorization = (await Rg4.default.readFile(I)).toString();
                try {
                    let F = await W.handle(X);
                    return (0, GJQ.getCredentials)(F.response).then((V) => (0, Mg4.setCredentialFeature)(V, "CREDENTIALS_HTTP", "z"))
                } catch (F) {
                    throw new BJQ.CredentialsProviderError(String(F), {
                        logger: A.logger
                    })
                }
            }, A.maxRetries ?? 3, A.timeout ?? 1000)
        };
    ZJQ.fromHttp = xg4
});
var nq1 = U((iq1) => {
    Object.defineProperty(iq1, "__esModule", {
        value: !0
    });
    iq1.fromHttp = void 0;
    var vg4 = YJQ();
    Object.defineProperty(iq1, "fromHttp", {
        enumerable: !0,
        get: function() {
            return vg4.fromHttp
        }
    })
});
var sq1 = U((JJQ) => {
    Object.defineProperty(JJQ, "__esModule", {
        value: !0
    });
    JJQ.resolveHttpAuthSchemeConfig = JJQ.defaultSSOHttpAuthSchemeProvider = JJQ.defaultSSOHttpAuthSchemeParametersProvider = void 0;
    var fg4 = LV(),
        aq1 = K7(),
        hg4 = async (A, Q, B) => {
            return {
                operation: (0, aq1.getSmithyContext)(Q).operation,
                region: await (0, aq1.normalizeProvider)(A.region)() || (() => {
                    throw Error("expected `region` to be configured for `aws.auth#sigv4`")
                })()
            }
        };
    JJQ.defaultSSOHttpAuthSchemeParametersProvider = hg4;
