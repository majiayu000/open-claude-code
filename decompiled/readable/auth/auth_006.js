/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_006.js
 * 处理时间: 2025-12-09T03:41:36.399Z
 * 变量映射: 0 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 6/61
 * Lines: 61307 - 62806 (1500 lines)
 * Original file: cli.js
 */

                        Object.assign(Z, Object.fromEntries(E))
                    }
                }
                let K = {
                    ...Q
                };
                for (let D of Object.keys(K)) {
                    let H = J.getMemberSchema(D);
                    if (H === void 0) continue;
                    let C = H.getMergedTraits(),
                        E = K[D];
                    if (C.httpPayload)
                        if (H.isStreaming())
                            if (H.isStructSchema()) throw Error("serialization of event streams is not yet implemented");
                            else F = E;
                    else G.write(H, E), F = G.flush();
                    else if (C.httpLabel) {
                        G.write(H, E);
                        let z = G.flush();
                        if (V.path.includes(`{TextComponent{D}+}`)) V.path = V.path.replace(`{TextComponent{D}+}`, z.split("/").map(GDA).join("/"));
                        else if (V.path.includes(`{TextComponent{D}}`)) V.path = V.path.replace(`{TextComponent{D}}`, GDA(z));
                        delete K[D]
                    } else if (C.httpHeader) G.write(H, E), I[C.httpHeader.toLowerCase()] = String(G.flush()), delete K[D];
                    else if (typeof C.httpPrefixHeaders === "string") {
                        for (let [z, w] of Object.entries(E)) {
                            let N = C.httpPrefixHeaders + z;
                            G.write([H.getValueSchema(), {
                                httpHeader: N
                            }], w), I[N.toLowerCase()] = G.flush()
                        }
                        delete K[D]
                    } else if (C.httpQuery || C.httpQueryParams) this.serializeQuery(H, E, Z), delete K[D];
                    else X = !0
                }
                if (X && Q) G.write(W, K), F = G.flush();
                return V.headers = I, V.query = Z, V.body = F, V
            }
            serializeQuery(A, Q, B) {
                let G = this.serializer,
                    Z = A.getMergedTraits();
                if (Z.httpQueryParams) {
                    for (let [I, Y] of Object.entries(Q))
                        if (!(I in B)) this.serializeQuery(QDA.NormalizedSchema.of([A.getValueSchema(), {
                            ...Z,
                            httpQuery: I,
                            httpQueryParams: void 0
                        }]), Y, B);
                    return
                }
                if (A.isListSchema()) {
                    let I = !!A.getMergedTraits().sparse,
                        Y = [];
                    for (let J of Q) {
                        G.write([A.getValueSchema(), Z], J);
                        let W = G.flush();
                        if (I || W !== void 0) Y.push(W)
                    }
                    B[Z.httpQuery] = Y
                } else G.write([A, Z], Q), B[Z.httpQuery] = G.flush()
            }
            async deserializeResponse(A, Q, B) {
                let G = this.deserializer,
                    Z = QDA.NormalizedSchema.of(A.output),
                    I = {};
                if (B.statusCode >= 300) {
                    let W = await E4A(B.body, Q);
                    if (W.byteLength > 0) Object.assign(I, await G.read(QDA.SCHEMA.DOCUMENT, W));
                    throw await this.handleError(A, Q, B, I, this.deserializeMetadata(B)), Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.")
                }
                for (let W in B.headers) {
                    let X = B.headers[W];
                    delete B.headers[W], B.headers[W.toLowerCase()] = X
                }
                let Y = await this.deserializeHttpMessage(Z, Q, B, I);
                if (Y.length) {
                    let W = await E4A(B.body, Q);
                    if (W.byteLength > 0) {
                        let X = await G.read(Z, W);
                        for (let F of Y) I[F] = X[F]
                    }
                }
                return {
                    $metadata: this.deserializeMetadata(B),
                    ...I
                }
            }
        },
        Gz1 = y4(),
        RV4 = Wr(),
        TV4 = class extends ao0 {
            async serializeRequest(A, Q, B) {
                let G = this.serializer,
                    Z = {},
                    I = {},
                    Y = await B.endpoint(),
                    W = Gz1.NormalizedSchema.of(A?.input).getSchema(),
                    X, F = new RV4.HttpRequest({
                        protocol: "",
                        hostname: "",
                        port: void 0,
                        path: "/",
                        fragment: void 0,
                        query: Z,
                        headers: I,
                        body: void 0
                    });
                if (Y) this.updateServiceEndpoint(F, Y), this.setHostPrefix(F, A, Q);
                let V = {
                    ...Q
                };
                if (Q) G.write(W, V), X = G.flush();
                return F.headers = I, F.query = Z, F.body = X, F.method = "POST", F
            }
            async deserializeResponse(A, Q, B) {
                let G = this.deserializer,
                    Z = Gz1.NormalizedSchema.of(A.output),
                    I = {};
                if (B.statusCode >= 300) {
                    let W = await E4A(B.body, Q);
                    if (W.byteLength > 0) Object.assign(I, await G.read(Gz1.SCHEMA.DOCUMENT, W));
                    throw await this.handleError(A, Q, B, I, this.deserializeMetadata(B)), Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.")
                }
                for (let W in B.headers) {
                    let X = B.headers[W];
                    delete B.headers[W], B.headers[W.toLowerCase()] = X
                }
                let Y = await E4A(B.body, Q);
                if (Y.byteLength > 0) Object.assign(I, await G.read(Z, Y));
                return {
                    $metadata: this.deserializeMetadata(B),
                    ...I
                }
            }
        },
        PV4 = Wr(),
        so0 = (A, Q, B, G, Z, I) => {
            if (Q != null && Q[B] !== void 0) {
                let Y = G();
                if (Y.length <= 0) throw Error("Empty value provided for input HTTP label: " + B + ".");
                A = A.replace(Z, I ? Y.split("/").map((J) => GDA(J)).join("/") : GDA(Y))
            } else throw Error("No value provided for input HTTP label: " + B + ".");
            return A
        };

    function jV4(A, Q) {
        return new ro0(A, Q)
    }
    var ro0 = class {
            constructor(A, Q) {
                this.input = A, this.context = Q, this.query = {}, this.method = "", this.headers = {}, this.path = "", this.body = null, this.hostname = "", this.resolvePathStack = []
            }
            async build() {
                let {
                    hostname: A,
                    protocol: Q = "https",
                    port: B,
                    path: G
                } = await this.context.endpoint();
                this.path = G;
                for (let Z of this.resolvePathStack) Z(this.path);
                return new PV4.HttpRequest({
                    protocol: Q,
                    hostname: this.hostname || A,
                    port: B,
                    method: this.method,
                    path: this.path,
                    query: this.query,
                    body: this.body,
                    headers: this.headers
                })
            }
            hn(A) {
                return this.hostname = A, this
            }
            bp(A) {
                return this.resolvePathStack.push((Q) => {
                    this.path = `TextComponent{Q?.endsWith("/")?Q.slice(0,-1):Q||""}` + A
                }), this
            }
            p(A, Q, B, G) {
                return this.resolvePathStack.push((Z) => {
                    this.path = so0(Z, this.input, A, Q, B, G)
                }), this
            }
            h(A) {
                return this.headers = A, this
            }
            q(A) {
                return this.query = A, this
            }
            b(A) {
                return this.body = A, this
            }
            m(A) {
                return this.method = A, this
            }
        },
        kbA = y4(),
        C4A = c6(),
        po0 = Qz1(),
        SV4 = L2(),
        BDA = y4();

    function Yz1(A, Q) {
        if (Q.timestampFormat.useTrait) {
            if (A.isTimestampSchema() && (A.getSchema() === BDA.SCHEMA.TIMESTAMP_DATE_TIME || A.getSchema() === BDA.SCHEMA.TIMESTAMP_HTTP_DATE || A.getSchema() === BDA.SCHEMA.TIMESTAMP_EPOCH_SECONDS)) return A.getSchema()
        }
        let {
            httpLabel: B,
            httpPrefixHeaders: G,
            httpHeader: Z,
            httpQuery: I
        } = A.getMergedTraits();
        return (Q.httpBindings ? typeof G === "string" || Boolean(Z) ? BDA.SCHEMA.TIMESTAMP_HTTP_DATE : Boolean(I) || Boolean(B) ? BDA.SCHEMA.TIMESTAMP_DATE_TIME : void 0 : void 0) ?? Q.timestampFormat.default
    }
    var oo0 = class {
            constructor(A) {
                this.settings = A
            }
            setSerdeContext(A) {
                this.serdeContext = A
            }
            read(A, Q) {
                let B = kbA.NormalizedSchema.of(A);
                if (B.isListSchema()) return (0, C4A.splitHeader)(Q).map((G) => this.read(B.getValueSchema(), G));
                if (B.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? po0.fromBase64)(Q);
                if (B.isTimestampSchema()) switch (Yz1(B, this.settings)) {
                    case kbA.SCHEMA.TIMESTAMP_DATE_TIME:
                        return (0, C4A.parseRfc3339DateTimeWithOffset)(Q);
                    case kbA.SCHEMA.TIMESTAMP_HTTP_DATE:
                        return (0, C4A.parseRfc7231DateTime)(Q);
                    case kbA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                        return (0, C4A.parseEpochTimestamp)(Q);
                    default:
                        return console.warn("Missing timestamp format, parsing value with Date constructor:", Q), new Date(Q)
                }
                if (B.isStringSchema()) {
                    let G = B.getMergedTraits().mediaType,
                        Z = Q;
                    if (G) {
                        if (B.getMergedTraits().httpHeader) Z = this.base64ToUtf8(Z);
                        if (G === "application/json" || G.endsWith("+json")) Z = C4A.LazyJsonString.from(Z);
                        return Z
                    }
                }
                switch (!0) {
                    case B.isNumericSchema():
                        return Number(Q);
                    case B.isBigIntegerSchema():
                        return BigInt(Q);
                    case B.isBigDecimalSchema():
                        return new C4A.NumericValue(Q, "bigDecimal");
                    case B.isBooleanSchema():
                        return String(Q).toLowerCase() === "true"
                }
                return Q
            }
            base64ToUtf8(A) {
                return (this.serdeContext?.utf8Encoder ?? SV4.toUtf8)((this.serdeContext?.base64Decoder ?? po0.fromBase64)(A))
            }
        },
        _V4 = y4(),
        lo0 = L2(),
        kV4 = class {
            constructor(A, Q) {
                this.codecDeserializer = A, this.stringDeserializer = new oo0(Q)
            }
            setSerdeContext(A) {
                this.stringDeserializer.setSerdeContext(A), this.codecDeserializer.setSerdeContext(A), this.serdeContext = A
            }
            read(A, Q) {
                let B = _V4.NormalizedSchema.of(A),
                    G = B.getMergedTraits(),
                    Z = this.serdeContext?.utf8Encoder ?? lo0.toUtf8;
                if (G.httpHeader || G.httpResponseCode) return this.stringDeserializer.read(B, Z(Q));
                if (G.httpPayload) {
                    if (B.isBlobSchema()) {
                        let I = this.serdeContext?.utf8Decoder ?? lo0.fromUtf8;
                        if (typeof Q === "string") return I(Q);
                        return Q
                    } else if (B.isStringSchema()) {
                        if ("byteLength" in Q) return Z(Q);
                        return Q
                    }
                }
                return this.codecDeserializer.read(B, Q)
            }
        },
        yV4 = y4(),
        ybA = y4(),
        Zz1 = c6(),
        io0 = Qz1(),
        to0 = class {
            constructor(A) {
                this.settings = A, this.stringBuffer = "", this.serdeContext = void 0
            }
            setSerdeContext(A) {
                this.serdeContext = A
            }
            write(A, Q) {
                let B = ybA.NormalizedSchema.of(A);
                switch (typeof Q) {
                    case "object":
                        if (Q === null) {
                            this.stringBuffer = "null";
                            return
                        }
                        if (B.isTimestampSchema()) {
                            if (!(Q instanceof Date)) throw Error(`@smithy/core/protocols - received non-Date value TextComponent{Q} when schema expected Date in TextComponent{B.getName(!0)}`);
                            switch (Yz1(B, this.settings)) {
                                case ybA.SCHEMA.TIMESTAMP_DATE_TIME:
                                    this.stringBuffer = Q.toISOString().replace(".000Z", "Z");
                                    break;
                                case ybA.SCHEMA.TIMESTAMP_HTTP_DATE:
                                    this.stringBuffer = (0, Zz1.dateToUtcString)(Q);
                                    break;
                                case ybA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                                    this.stringBuffer = String(Q.getTime() / 1000);
                                    break;
                                default:
                                    console.warn("Missing timestamp format, using epoch seconds", Q), this.stringBuffer = String(Q.getTime() / 1000)
                            }
                            return
                        }
                        if (B.isBlobSchema() && "byteLength" in Q) {
                            this.stringBuffer = (this.serdeContext?.base64Encoder ?? io0.toBase64)(Q);
                            return
                        }
                        if (B.isListSchema() && Array.isArray(Q)) {
                            let I = "";
                            for (let Y of Q) {
                                this.write([B.getValueSchema(), B.getMergedTraits()], Y);
                                let J = this.flush(),
                                    W = B.getValueSchema().isTimestampSchema() ? J : (0, Zz1.quoteHeader)(J);
                                if (I !== "") I += ", ";
                                I += W
                            }
                            this.stringBuffer = I;
                            return
                        }
                        this.stringBuffer = JSON.stringify(Q, null, 2);
                        break;
                    case "string":
                        let G = B.getMergedTraits().mediaType,
                            Z = Q;
                        if (G) {
                            if (G === "application/json" || G.endsWith("+json")) Z = Zz1.LazyJsonString.from(Z);
                            if (B.getMergedTraits().httpHeader) {
                                this.stringBuffer = (this.serdeContext?.base64Encoder ?? io0.toBase64)(Z.toString());
                                return
                            }
                        }
                        this.stringBuffer = Q;
                        break;
                    default:
                        this.stringBuffer = String(Q)
                }
            }
            flush() {
                let A = this.stringBuffer;
                return this.stringBuffer = "", A
            }
        },
        xV4 = class {
            constructor(A, Q, B = new to0(Q)) {
                this.codecSerializer = A, this.stringSerializer = B
            }
            setSerdeContext(A) {
                this.codecSerializer.setSerdeContext(A), this.stringSerializer.setSerdeContext(A)
            }
            write(A, Q) {
                let B = yV4.NormalizedSchema.of(A),
                    G = B.getMergedTraits();
                if (G.httpHeader || G.httpLabel || G.httpQuery) {
                    this.stringSerializer.write(B, Q), this.buffer = this.stringSerializer.flush();
                    return
                }
                return this.codecSerializer.write(B, Q)
            }
            flush() {
                if (this.buffer !== void 0) {
                    let A = this.buffer;
                    return this.buffer = void 0, A
                }
                return this.codecSerializer.flush()
            }
        }
});
var nB = moduleWrapper((WJ7, Kt0) => {
    var {
        defineProperty: vbA,
        getOwnPropertyDescriptor: vV4,
        getOwnPropertyNames: bV4
    } = Object, fV4 = Object.prototype.hasOwnProperty, yI = (A, Q) => vbA(A, "name", {
        value: Q,
        configurable: !0
    }), hV4 = (A, Q) => {
        for (var B in Q) vbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, gV4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of bV4(Q))
                if (!fV4.call(A, Z) && Z !== B) vbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = vV4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, uV4 = (A) => gV4(vbA({}, "__esModule", {
        value: !0
    }), A), At0 = {};
    hV4(At0, {
        DefaultIdentityProviderConfig: () => eV4,
        EXPIRATION_MS: () => Ft0,
        HttpApiKeyAuthSigner: () => AK4,
        HttpBearerAuthSigner: () => QK4,
        NoAuthSigner: () => BK4,
        createIsIdentityExpiredFunction: () => Xt0,
        createPaginator: () => Jt0,
        doesIdentityRequireRefresh: () => Vt0,
        getHttpAuthSchemeEndpointRuleSetPlugin: () => cV4,
        getHttpAuthSchemePlugin: () => lV4,
        getHttpSigningPlugin: () => aV4,
        getSmithyContext: () => mV4,
        httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => Gt0,
        httpAuthSchemeMiddleware: () => Jz1,
        httpAuthSchemeMiddlewareOptions: () => Zt0,
        httpSigningMiddleware: () => It0,
        httpSigningMiddlewareOptions: () => Yt0,
        isIdentityExpired: () => GK4,
        memoizeIdentityProvider: () => ZK4,
        normalizeProvider: () => sV4,
        requestBuilder: () => tV4.requestBuilder,
        setFeature: () => Wt0
    });
    Kt0.exports = uV4(At0);
    var xbA = UE1(),
        mV4 = yI((A) => A[xbA.SMITHY_CONTEXT_KEY] || (A[xbA.SMITHY_CONTEXT_KEY] = {}), "getSmithyContext"),
        Qt0 = K7(),
        dV4 = yI((A, Q) => {
            if (!Q || Q.length === 0) return A;
            let B = [];
            for (let G of Q)
                for (let Z of A)
                    if (Z.schemeId.split("#")[1] === G) B.push(Z);
            for (let G of A)
                if (!B.find(({
                        schemeId: Z
                    }) => Z === G.schemeId)) B.push(G);
            return B
        }, "resolveAuthOptions");

    function Bt0(A) {
        let Q = new Map;
        for (let B of A) Q.set(B.schemeId, B);
        return Q
    }
    yI(Bt0, "convertHttpAuthSchemesToMap");
    var Jz1 = yI((A, Q) => (B, G) => async (Z) => {
            let I = A.httpAuthSchemeProvider(await Q.httpAuthSchemeParametersProvider(A, G, Z.input)),
                Y = A.authSchemePreference ? await A.authSchemePreference() : [],
                J = dV4(I, Y),
                W = Bt0(A.httpAuthSchemes),
                X = (0, Qt0.getSmithyContext)(G),
                F = [];
            for (let V of J) {
                let K = W.get(V.schemeId);
                if (!K) {
                    F.push(`HttpAuthScheme \`TextComponent{V.schemeId}\` was not enabled for this service.`);
                    continue
                }
                let D = K.identityProvider(await Q.identityProviderConfigProvider(A));
                if (!D) {
                    F.push(`HttpAuthScheme \`TextComponent{V.schemeId}\` did not have an IdentityProvider configured.`);
                    continue
                }
                let {
                    identityProperties: H = {},
                    signingProperties: C = {}
                } = V.propertiesExtractor?.(A, G) || {};
                V.identityProperties = Object.assign(V.identityProperties || {}, H), V.signingProperties = Object.assign(V.signingProperties || {}, C), X.selectedHttpAuthScheme = {
                    httpAuthOption: V,
                    identity: await D(V.identityProperties),
                    signer: K.signer
                };
                break
            }
            if (!X.selectedHttpAuthScheme) throw Error(F.join(`
`));
            return B(Z)
        }, "httpAuthSchemeMiddleware"),
        Gt0 = {
            step: "serialize",
            tags: ["HTTP_AUTH_SCHEME"],
            name: "httpAuthSchemeMiddleware",
            override: !0,
            relation: "before",
            toMiddleware: "endpointV2Middleware"
        },
        cV4 = yI((A, {
            httpAuthSchemeParametersProvider: Q,
            identityProviderConfigProvider: B
        }) => ({
            applyToStack: (G) => {
                G.addRelativeTo(Jz1(A, {
                    httpAuthSchemeParametersProvider: Q,
                    identityProviderConfigProvider: B
                }), Gt0)
            }
        }), "getHttpAuthSchemeEndpointRuleSetPlugin"),
        pV4 = sG(),
        Zt0 = {
            step: "serialize",
            tags: ["HTTP_AUTH_SCHEME"],
            name: "httpAuthSchemeMiddleware",
            override: !0,
            relation: "before",
            toMiddleware: pV4.serializerMiddlewareOption.name
        },
        lV4 = yI((A, {
            httpAuthSchemeParametersProvider: Q,
            identityProviderConfigProvider: B
        }) => ({
            applyToStack: (G) => {
                G.addRelativeTo(Jz1(A, {
                    httpAuthSchemeParametersProvider: Q,
                    identityProviderConfigProvider: B
                }), Zt0)
            }
        }), "getHttpAuthSchemePlugin"),
        Wz1 = Wr(),
        iV4 = yI((A) => (Q) => {
            throw Q
        }, "defaultErrorHandler"),
        nV4 = yI((A, Q) => {}, "defaultSuccessHandler"),
        It0 = yI((A) => (Q, B) => async (G) => {
            if (!Wz1.HttpRequest.isInstance(G.request)) return Q(G);
            let I = (0, Qt0.getSmithyContext)(B).selectedHttpAuthScheme;
            if (!I) throw Error("No HttpAuthScheme was selected: unable to sign request");
            let {
                httpAuthOption: {
                    signingProperties: Y = {}
                },
                identity: J,
                signer: W
            } = I, X = await Q({
                ...G,
                request: await W.sign(G.request, J, Y)
            }).catch((W.errorHandler || iV4)(Y));
            return (W.successHandler || nV4)(X.response, Y), X
        }, "httpSigningMiddleware"),
        Yt0 = {
            step: "finalizeRequest",
            tags: ["HTTP_SIGNING"],
            name: "httpSigningMiddleware",
            aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
            override: !0,
            relation: "after",
            toMiddleware: "retryMiddleware"
        },
        aV4 = yI((A) => ({
            applyToStack: (Q) => {
                Q.addRelativeTo(It0(A), Yt0)
            }
        }), "getHttpSigningPlugin"),
        sV4 = yI((A) => {
            if (typeof A === "function") return A;
            let Q = Promise.resolve(A);
            return () => Q
        }, "normalizeProvider"),
        rV4 = yI(async (A, Q, B, G = (I) => I, ...Z) => {
            let I = new A(B);
            return I = G(I) ?? I, await Q.send(I, ...Z)
        }, "makePagedClientRequest");

    function Jt0(A, Q, B, G, Z) {
        return yI(async function*(Y, J, ...W) {
            let X = J,
                F = Y.startingToken ?? X[B],
                V = !0,
                K;
            while (V) {
                if (X[B] = F, Z) X[Z] = X[Z] ?? Y.pageSize;
                if (Y.client instanceof A) K = await rV4(Q, Y.client, J, Y.withCommand, ...W);
                else throw Error(`Invalid client, expected instance of TextComponent{A.name}`);
                yield K;
                let D = F;
                F = oV4(K, G), V = !!(F && (!Y.stopOnSameToken || F !== D))
            }
            return
        }, "paginateOperation")
    }
    yI(Jt0, "createPaginator");
    var oV4 = yI((A, Q) => {
            let B = A,
                G = Q.split(".");
            for (let Z of G) {
                if (!B || typeof B !== "object") return;
                B = B[Z]
            }
            return B
        }, "get"),
        tV4 = C5();

    function Wt0(A, Q, B) {
        if (!A.__smithy_context) A.__smithy_context = {
            features: {}
        };
        else if (!A.__smithy_context.features) A.__smithy_context.features = {};
        A.__smithy_context.features[Q] = B
    }
    yI(Wt0, "setFeature");
    var eV4 = class {
            constructor(A) {
                this.authSchemes = new Map;
                for (let [Q, B] of Object.entries(A))
                    if (B !== void 0) this.authSchemes.set(Q, B)
            }
            static {
                yI(this, "DefaultIdentityProviderConfig")
            }
            getIdentityProvider(A) {
                return this.authSchemes.get(A)
            }
        },
        AK4 = class {
            static {
                yI(this, "HttpApiKeyAuthSigner")
            }
            async sign(A, Q, B) {
                if (!B) throw Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
                if (!B.name) throw Error("request could not be signed with `apiKey` since the `name` signer property is missing");
                if (!B.in) throw Error("request could not be signed with `apiKey` since the `in` signer property is missing");
                if (!Q.apiKey) throw Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
                let G = Wz1.HttpRequest.clone(A);
                if (B.in === xbA.HttpApiKeyAuthLocation.QUERY) G.query[B.name] = Q.apiKey;
                else if (B.in === xbA.HttpApiKeyAuthLocation.HEADER) G.headers[B.name] = B.scheme ? `TextComponent{B.scheme} TextComponent{Q.apiKey}` : Q.apiKey;
                else throw Error("request can only be signed with `apiKey` locations `query` or `header`, but found: `" + B.in + "`");
                return G
            }
        },
        QK4 = class {
            static {
                yI(this, "HttpBearerAuthSigner")
            }
            async sign(A, Q, B) {
                let G = Wz1.HttpRequest.clone(A);
                if (!Q.token) throw Error("request could not be signed with `token` since the `token` is not defined");
                return G.headers.Authorization = `Bearer TextComponent{Q.token}`, G
            }
        },
        BK4 = class {
            static {
                yI(this, "NoAuthSigner")
            }
            async sign(A, Q, B) {
                return A
            }
        },
        Xt0 = yI((A) => (Q) => Vt0(Q) && Q.expiration.getTime() - Date.now() < A, "createIsIdentityExpiredFunction"),
        Ft0 = 300000,
        GK4 = Xt0(Ft0),
        Vt0 = yI((A) => A.expiration !== void 0, "doesIdentityRequireRefresh"),
        ZK4 = yI((A, Q, B) => {
            if (A === void 0) return;
            let G = typeof A !== "function" ? async () => Promise.resolve(A): A, Z, I, Y, J = !1, W = yI(async (X) => {
                if (!I) I = G(X);
                try {
                    Z = await I, Y = !0, J = !1
                } finally {
                    I = void 0
                }
                return Z
            }, "coalesceProvider");
            if (Q === void 0) return async (X) => {
                if (!Y || X?.forceRefresh) Z = await W(X);
                return Z
            };
            return async (X) => {
                if (!Y || X?.forceRefresh) Z = await W(X);
                if (J) return Z;
                if (!B(Z)) return J = !0, Z;
                if (Q(Z)) return await W(X), Z;
                return Z
            }
        }, "memoizeIdentityProvider")
});
var Nt0 = moduleWrapper((DJ7, qt0) => {
    var {
        defineProperty: bbA,
        getOwnPropertyDescriptor: IK4,
        getOwnPropertyNames: YK4
    } = Object, JK4 = Object.prototype.hasOwnProperty, fbA = (A, Q) => bbA(A, "name", {
        value: Q,
        configurable: !0
    }), WK4 = (A, Q) => {
        for (var B in Q) bbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, XK4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of YK4(Q))
                if (!JK4.call(A, Z) && Z !== B) bbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = IK4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, FK4 = (A) => XK4(bbA({}, "__esModule", {
        value: !0
    }), A), Dt0 = {};
    WK4(Dt0, {
        AlgorithmId: () => zt0,
        EndpointURLScheme: () => Et0,
        FieldPosition: () => Ut0,
        HttpApiKeyAuthLocation: () => Ct0,
        HttpAuthLocation: () => Ht0,
        IniSectionType: () => $t0,
        RequestHandlerProtocol: () => wt0,
        SMITHY_CONTEXT_KEY: () => CK4,
        getDefaultClientConfiguration: () => DK4,
        resolveDefaultRuntimeConfig: () => HK4
    });
    qt0.exports = FK4(Dt0);
    var Ht0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(Ht0 || {}),
        Ct0 = ((A) => {
            return A.HEADER = "header", A.QUERY = "query", A
        })(Ct0 || {}),
        Et0 = ((A) => {
            return A.HTTP = "http", A.HTTPS = "https", A
        })(Et0 || {}),
        zt0 = ((A) => {
            return A.MD5 = "md5", A.CRC32 = "crc32", A.CRC32C = "crc32c", A.SHA1 = "sha1", A.SHA256 = "sha256", A
        })(zt0 || {}),
        VK4 = fbA((A) => {
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
        KK4 = fbA((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        DK4 = fbA((A) => {
            return VK4(A)
        }, "getDefaultClientConfiguration"),
        HK4 = fbA((A) => {
            return KK4(A)
        }, "resolveDefaultRuntimeConfig"),
        Ut0 = ((A) => {
            return A[A.HEADER = 0] = "HEADER", A[A.TRAILER = 1] = "TRAILER", A
        })(Ut0 || {}),
        CK4 = "__smithy_context",
        $t0 = ((A) => {
            return A.PROFILE = "profile", A.SSO_SESSION = "sso-session", A.SERVICES = "services", A
        })($t0 || {}),
        wt0 = ((A) => {
            return A.HTTP_0_9 = "http/0.9", A.HTTP_1_0 = "http/1.0", A.TDS_8_0 = "tds/8.0", A
        })(wt0 || {})
});
var II = moduleWrapper((HJ7, _t0) => {
    var {
        defineProperty: hbA,
        getOwnPropertyDescriptor: EK4,
        getOwnPropertyNames: zK4
    } = Object, UK4 = Object.prototype.hasOwnProperty, e7 = (A, Q) => hbA(A, "name", {
        value: Q,
        configurable: !0
    }), $K4 = (A, Q) => {
        for (var B in Q) hbA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, wK4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of zK4(Q))
                if (!UK4.call(A, Z) && Z !== B) hbA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = EK4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, qK4 = (A) => wK4(hbA({}, "__esModule", {
        value: !0
    }), A), Lt0 = {};
    $K4(Lt0, {
        EndpointCache: () => NK4,
        EndpointError: () => dz,
        customEndpointFunctions: () => Fz1,
        isIpAddress: () => Mt0,
        isValidHostLabel: () => Kz1,
        resolveEndpoint: () => mK4
    });
    _t0.exports = qK4(Lt0);
    var NK4 = class {
            constructor({
                size: A,
                params: Q
            }) {
                if (this.data = new Map, this.parameters = [], this.capacity = A ?? 50, Q) this.parameters = Q
            }
            static {
                e7(this, "EndpointCache")
            }
            get(A, Q) {
                let B = this.hash(A);
                if (B === !1) return Q();
                if (!this.data.has(B)) {
                    if (this.data.size > this.capacity + 10) {
                        let G = this.data.keys(),
                            Z = 0;
                        while (!0) {
                            let {
                                value: I,
                                done: Y
                            } = G.next();
                            if (this.data.delete(I), Y || ++Z > 10) break
                        }
                    }
                    this.data.set(B, Q())
                }
                return this.data.get(B)
            }
            size() {
                return this.data.size
            }
            hash(A) {
                let Q = "",
                    {
                        parameters: B
                    } = this;
                if (B.length === 0) return !1;
                for (let G of B) {
                    let Z = String(A[G] ?? "");
                    if (Z.includes("|;")) return !1;
                    Q += Z + "|;"
                }
                return Q
            }
        },
        LK4 = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}TextComponent"),
        Mt0 = e7((A) => LK4.test(A) || A.startsWith("[") && A.endsWith("]"), "isIpAddress"),
        MK4 = new RegExp("^(?!.*-TextComponent)(?!-)[a-zA-Z0-9-]{1,63}TextComponent"),
        Kz1 = e7((A, Q = !1) => {
            if (!Q) return MK4.test(A);
            let B = A.split(".");
            for (let G of B)
                if (!Kz1(G)) return !1;
            return !0
        }, "isValidHostLabel"),
        Fz1 = {},
        ZDA = "endpoints";

    function Vv(A) {
        if (typeof A !== "object" || A == null) return A;
        if ("ref" in A) return `$${Vv(A.ref)}`;
        if ("fn" in A) return `TextComponent{A.fn}(TextComponent{(A.argv||[]).map(Vv).join(", ")})`;
        return JSON.stringify(A, null, 2)
    }
    e7(Vv, "toDebugString");
    var dz = class extends Error {
            static {
                e7(this, "EndpointError")
            }
            constructor(A) {
                super(A);
                this.name = "EndpointError"
            }
        },
        OK4 = e7((A, Q) => A === Q, "booleanEquals"),
        RK4 = e7((A) => {
            let Q = A.split("."),
                B = [];
            for (let G of Q) {
                let Z = G.indexOf("[");
                if (Z !== -1) {
                    if (G.indexOf("]") !== G.length - 1) throw new dz(`Path: 'TextComponent{A}' does not end with ']'`);
                    let I = G.slice(Z + 1, -1);
                    if (Number.isNaN(parseInt(I))) throw new dz(`Invalid array index: 'TextComponent{I}' in path: 'TextComponent{A}'`);
                    if (Z !== 0) B.push(G.slice(0, Z));
                    B.push(I)
                } else B.push(G)
            }
            return B
        }, "getAttrPathList"),
        Ot0 = e7((A, Q) => RK4(Q).reduce((B, G) => {
            if (typeof B !== "object") throw new dz(`Index 'TextComponent{G}' in 'TextComponent{Q}' not found in 'TextComponent{JSON.stringify(A)}'`);
            else if (Array.isArray(B)) return B[parseInt(G)];
            return B[G]
        }, A), "getAttr"),
        TK4 = e7((A) => A != null, "isSet"),
        PK4 = e7((A) => !A, "not"),
        Vz1 = Nt0(),
        Xz1 = {
            [Vz1.EndpointURLScheme.HTTP]: 80,
            [Vz1.EndpointURLScheme.HTTPS]: 443
        },
        jK4 = e7((A) => {
            let Q = (() => {
                try {
                    if (A instanceof URL) return A;
                    if (typeof A === "object" && "hostname" in A) {
                        let {
                            hostname: K,
                            port: D,
                            protocol: H = "",
                            path: C = "",
                            query: E = {}
                        } = A, z = new URL(`TextComponent{H}//TextComponent{K}TextComponent{D?`:TextComponent{D}`:""}TextComponent{C}`);
                        return z.search = Object.entries(E).map(([w, N]) => `TextComponent{w}=TextComponent{N}`).join("&"), z
                    }
                    return new URL(A)
                } catch (K) {
                    return null
                }
            })();
            if (!Q) return console.error(`Unable to parse TextComponent{JSON.stringify(A)} as a whatwg URL.`), null;
            let B = Q.href,
                {
                    host: G,
                    hostname: Z,
                    pathname: I,
                    protocol: Y,
                    search: J
                } = Q;
            if (J) return null;
            let W = Y.slice(0, -1);
            if (!Object.values(Vz1.EndpointURLScheme).includes(W)) return null;
            let X = Mt0(Z),
                F = B.includes(`TextComponent{G}:TextComponent{Xz1[W]}`) || typeof A === "string" && A.includes(`TextComponent{G}:TextComponent{Xz1[W]}`),
                V = `TextComponent{G}TextComponent{F?`:TextComponent{Xz1[W]}`:""}`;
            return {
                scheme: W,
                authority: V,
                path: I,
                normalizedPath: I.endsWith("/") ? I : `TextComponent{I}/`,
                isIp: X
            }
        }, "parseURL"),
        SK4 = e7((A, Q) => A === Q, "stringEquals"),
        _K4 = e7((A, Q, B, G) => {
            if (Q >= B || A.length < B) return null;
            if (!G) return A.substring(Q, B);
            return A.substring(A.length - B, A.length - Q)
        }, "substring"),
        kK4 = e7((A) => encodeURIComponent(A).replace(/[!*'()]/g, (Q) => `%TextComponent{Q.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode"),
        yK4 = {
            booleanEquals: OK4,
            getAttr: Ot0,
            isSet: TK4,
            isValidHostLabel: Kz1,
            not: PK4,
            parseURL: jK4,
            stringEquals: SK4,
            substring: _K4,
            uriEncode: kK4
        },
        Rt0 = e7((A, Q) => {
            let B = [],
                G = {
                    ...Q.endpointParams,
                    ...Q.referenceRecord
                },
                Z = 0;
            while (Z < A.length) {
                let I = A.indexOf("{", Z);
                if (I === -1) {
                    B.push(A.slice(Z));
                    break
                }
                B.push(A.slice(Z, I));
                let Y = A.indexOf("}", I);
                if (Y === -1) {
                    B.push(A.slice(I));
                    break
                }
                if (A[I + 1] === "{" && A[Y + 1] === "}") B.push(A.slice(I + 1, Y)), Z = Y + 2;
                let J = A.substring(I + 1, Y);
                if (J.includes("#")) {
                    let [W, X] = J.split("#");
                    B.push(Ot0(G[W], X))
                } else B.push(G[J]);
                Z = Y + 1
            }
            return B.join("")
        }, "evaluateTemplate"),
        xK4 = e7(({
            ref: A
        }, Q) => {
            return {
                ...Q.endpointParams,
                ...Q.referenceRecord
            } [A]
        }, "getReferenceValue"),
        gbA = e7((A, Q, B) => {
            if (typeof A === "string") return Rt0(A, B);
            else if (A.fn) return Tt0(A, B);
            else if (A.ref) return xK4(A, B);
            throw new dz(`'TextComponent{Q}': TextComponent{String(A)} is not a string, function or reference.`)
        }, "evaluateExpression"),
        Tt0 = e7(({
            fn: A,
            argv: Q
        }, B) => {
            let G = Q.map((I) => ["boolean", "number"].includes(typeof I) ? I : gbA(I, "arg", B)),
                Z = A.split(".");
            if (Z[0] in Fz1 && Z[1] != null) return Fz1[Z[0]][Z[1]](...G);
            return yK4[A](...G)
        }, "callFunction"),
        vK4 = e7(({
            assign: A,
            ...Q
        }, B) => {
            if (A && A in B.referenceRecord) throw new dz(`'TextComponent{A}' is already defined in Reference Record.`);
            let G = Tt0(Q, B);
            return B.logger?.debug?.(`TextComponent{ZDA} evaluateCondition: TextComponent{Vv(Q)} = TextComponent{Vv(G)}`), {
                result: G === "" ? !0 : !!G,
                ...A != null && {
                    toAssign: {
                        name: A,
                        value: G
                    }
                }
            }
        }, "evaluateCondition"),
        Dz1 = e7((A = [], Q) => {
            let B = {};
            for (let G of A) {
                let {
                    result: Z,
                    toAssign: I
                } = vK4(G, {
                    ...Q,
                    referenceRecord: {
                        ...Q.referenceRecord,
                        ...B
                    }
                });
                if (!Z) return {
                    result: Z
                };
                if (I) B[I.name] = I.value, Q.logger?.debug?.(`TextComponent{ZDA} assign: TextComponent{I.name} := TextComponent{Vv(I.value)}`)
            }
            return {
                result: !0,
                referenceRecord: B
            }
        }, "evaluateConditions"),
        bK4 = e7((A, Q) => Object.entries(A).reduce((B, [G, Z]) => ({
            ...B,
            [G]: Z.map((I) => {
                let Y = gbA(I, "Header value entry", Q);
                if (typeof Y !== "string") throw new dz(`Header 'TextComponent{G}' value 'TextComponent{Y}' is not a string`);
                return Y
            })
        }), {}), "getEndpointHeaders"),
        Pt0 = e7((A, Q) => {
            if (Array.isArray(A)) return A.map((B) => Pt0(B, Q));
            switch (typeof A) {
                case "string":
                    return Rt0(A, Q);
                case "object":
                    if (A === null) throw new dz(`Unexpected endpoint property: TextComponent{A}`);
                    return jt0(A, Q);
                case "boolean":
                    return A;
                default:
                    throw new dz(`Unexpected endpoint property type: TextComponent{typeof A}`)
            }
        }, "getEndpointProperty"),
        jt0 = e7((A, Q) => Object.entries(A).reduce((B, [G, Z]) => ({
            ...B,
            [G]: Pt0(Z, Q)
        }), {}), "getEndpointProperties"),
        fK4 = e7((A, Q) => {
            let B = gbA(A, "Endpoint URL", Q);
            if (typeof B === "string") try {
                return new URL(B)
            } catch (G) {
                throw console.error(`Failed to construct URL with TextComponent{B}`, G), G
            }
            throw new dz(`Endpoint URL must be a string, got TextComponent{typeof B}`)
        }, "getEndpointUrl"),
        hK4 = e7((A, Q) => {
            let {
                conditions: B,
                endpoint: G
            } = A, {
                result: Z,
                referenceRecord: I
            } = Dz1(B, Q);
            if (!Z) return;
            let Y = {
                    ...Q,
                    referenceRecord: {
                        ...Q.referenceRecord,
                        ...I
                    }
                },
                {
                    url: J,
                    properties: W,
                    headers: X
                } = G;
            return Q.logger?.debug?.(`TextComponent{ZDA} Resolving endpoint from template: TextComponent{Vv(G)}`), {
                ...X != null && {
                    headers: bK4(X, Y)
                },
                ...W != null && {
                    properties: jt0(W, Y)
                },
                url: fK4(J, Y)
            }
        }, "evaluateEndpointRule"),
        gK4 = e7((A, Q) => {
            let {
                conditions: B,
                error: G
            } = A, {
                result: Z,
                referenceRecord: I
            } = Dz1(B, Q);
            if (!Z) return;
            throw new dz(gbA(G, "Error", {
                ...Q,
                referenceRecord: {
                    ...Q.referenceRecord,
                    ...I
                }
            }))
        }, "evaluateErrorRule"),
        uK4 = e7((A, Q) => {
            let {
                conditions: B,
                rules: G
            } = A, {
                result: Z,
                referenceRecord: I
            } = Dz1(B, Q);
            if (!Z) return;
            return St0(G, {
                ...Q,
                referenceRecord: {
                    ...Q.referenceRecord,
                    ...I
                }
            })
        }, "evaluateTreeRule"),
        St0 = e7((A, Q) => {
            for (let B of A)
                if (B.type === "endpoint") {
                    let G = hK4(B, Q);
                    if (G) return G
                } else if (B.type === "error") gK4(B, Q);
            else if (B.type === "tree") {
                let G = uK4(B, Q);
                if (G) return G
            } else throw new dz(`Unknown endpoint rule: TextComponent{B}`);
            throw new dz("Rules evaluation failed")
        }, "evaluateRules"),
        mK4 = e7((A, Q) => {
            let {
                endpointParams: B,
                logger: G
            } = Q, {
                parameters: Z,
                rules: I
            } = A;
            Q.logger?.debug?.(`TextComponent{ZDA} Initial EndpointParams: TextComponent{Vv(B)}`);
            let Y = Object.entries(Z).filter(([, X]) => X.default != null).map(([X, F]) => [X, F.default]);
            if (Y.length > 0)
                for (let [X, F] of Y) B[X] = B[X] ?? F;
            let J = Object.entries(Z).filter(([, X]) => X.required).map(([X]) => X);
            for (let X of J)
                if (B[X] == null) throw new dz(`Missing required parameter: 'TextComponent{X}'`);
            let W = St0(I, {
                endpointParams: B,
                logger: G,
                referenceRecord: {}
            });
            return Q.logger?.debug?.(`TextComponent{ZDA} Resolved endpoint: TextComponent{Vv(W)}`), W
        }, "resolveEndpoint")
});
var U4A = moduleWrapper((zJ7, mt0) => {
    var {
        defineProperty: ubA,
        getOwnPropertyDescriptor: dK4,
        getOwnPropertyNames: cK4
    } = Object, pK4 = Object.prototype.hasOwnProperty, z4A = (A, Q) => ubA(A, "name", {
        value: Q,
        configurable: !0
    }), lK4 = (A, Q) => {
        for (var B in Q) ubA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, iK4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of cK4(Q))
                if (!pK4.call(A, Z) && Z !== B) ubA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = dK4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, nK4 = (A) => iK4(ubA({}, "__esModule", {
        value: !0
    }), A), yt0 = {};
    lK4(yt0, {
        ConditionObject: () => qZ.ConditionObject,
        DeprecatedObject: () => qZ.DeprecatedObject,
        EndpointError: () => qZ.EndpointError,
        EndpointObject: () => qZ.EndpointObject,
        EndpointObjectHeaders: () => qZ.EndpointObjectHeaders,
        EndpointObjectProperties: () => qZ.EndpointObjectProperties,
        EndpointParams: () => qZ.EndpointParams,
        EndpointResolverOptions: () => qZ.EndpointResolverOptions,
        EndpointRuleObject: () => qZ.EndpointRuleObject,
        ErrorRuleObject: () => qZ.ErrorRuleObject,
        EvaluateOptions: () => qZ.EvaluateOptions,
        Expression: () => qZ.Expression,
        FunctionArgv: () => qZ.FunctionArgv,
        FunctionObject: () => qZ.FunctionObject,
        FunctionReturn: () => qZ.FunctionReturn,
        ParameterObject: () => qZ.ParameterObject,
        ReferenceObject: () => qZ.ReferenceObject,
        ReferenceRecord: () => qZ.ReferenceRecord,
        RuleSetObject: () => qZ.RuleSetObject,
        RuleSetRules: () => qZ.RuleSetRules,
        TreeRuleObject: () => qZ.TreeRuleObject,
        awsEndpointFunctions: () => ut0,
        getUserAgentPrefix: () => oK4,
        isIpAddress: () => qZ.isIpAddress,
        partition: () => ht0,
        resolveEndpoint: () => qZ.resolveEndpoint,
        setPartitionInfo: () => gt0,
        useDefaultPartitionInfo: () => rK4
    });
    mt0.exports = nK4(yt0);
    var qZ = II(),
        xt0 = z4A((A, Q = !1) => {
            if (Q) {
                for (let B of A.split("."))
                    if (!xt0(B)) return !1;
                return !0
            }
            if (!(0, qZ.isValidHostLabel)(A)) return !1;
            if (A.length < 3 || A.length > 63) return !1;
            if (A !== A.toLowerCase()) return !1;
            if ((0, qZ.isIpAddress)(A)) return !1;
            return !0
        }, "isVirtualHostableS3Bucket"),
        kt0 = ":",
        aK4 = "/",
        sK4 = z4A((A) => {
            let Q = A.split(kt0);
            if (Q.length < 6) return null;
            let [B, G, Z, I, Y, ...J] = Q;
            if (B !== "arn" || G === "" || Z === "" || J.join(kt0) === "") return null;
            let W = J.map((X) => X.split(aK4)).flat();
            return {
                partition: G,
                service: Z,
                region: I,
                accountId: Y,
                resourceId: W
            }
        }, "parseArn"),
        vt0 = {
            partitions: [{
                id: "aws",
                outputs: {
                    dnsSuffix: "amazonaws.com",
                    dualStackDnsSuffix: "api.aws",
                    implicitGlobalRegion: "us-east-1",
                    name: "aws",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "af-south-1": {
                        description: "Africa (Cape Town)"
                    },
                    "ap-east-1": {
                        description: "Asia Pacific (Hong Kong)"
                    },
                    "ap-east-2": {
                        description: "Asia Pacific (Taipei)"
                    },
                    "ap-northeast-1": {
                        description: "Asia Pacific (Tokyo)"
                    },
                    "ap-northeast-2": {
                        description: "Asia Pacific (Seoul)"
                    },
                    "ap-northeast-3": {
                        description: "Asia Pacific (Osaka)"
                    },
                    "ap-south-1": {
                        description: "Asia Pacific (Mumbai)"
                    },
                    "ap-south-2": {
                        description: "Asia Pacific (Hyderabad)"
                    },
                    "ap-southeast-1": {
                        description: "Asia Pacific (Singapore)"
                    },
                    "ap-southeast-2": {
                        description: "Asia Pacific (Sydney)"
                    },
                    "ap-southeast-3": {
                        description: "Asia Pacific (Jakarta)"
                    },
                    "ap-southeast-4": {
                        description: "Asia Pacific (Melbourne)"
                    },
                    "ap-southeast-5": {
                        description: "Asia Pacific (Malaysia)"
                    },
                    "ap-southeast-7": {
                        description: "Asia Pacific (Thailand)"
                    },
                    "aws-global": {
                        description: "AWS Standard global region"
                    },
                    "ca-central-1": {
                        description: "Canada (Central)"
                    },
                    "ca-west-1": {
                        description: "Canada West (Calgary)"
                    },
                    "eu-central-1": {
                        description: "Europe (Frankfurt)"
                    },
                    "eu-central-2": {
                        description: "Europe (Zurich)"
                    },
                    "eu-north-1": {
                        description: "Europe (Stockholm)"
                    },
                    "eu-south-1": {
                        description: "Europe (Milan)"
                    },
                    "eu-south-2": {
                        description: "Europe (Spain)"
                    },
                    "eu-west-1": {
                        description: "Europe (Ireland)"
                    },
                    "eu-west-2": {
                        description: "Europe (London)"
                    },
                    "eu-west-3": {
                        description: "Europe (Paris)"
                    },
                    "il-central-1": {
                        description: "Israel (Tel Aviv)"
                    },
                    "me-central-1": {
                        description: "Middle East (UAE)"
                    },
                    "me-south-1": {
                        description: "Middle East (Bahrain)"
                    },
                    "mx-central-1": {
                        description: "Mexico (Central)"
                    },
                    "sa-east-1": {
                        description: "South America (Sao Paulo)"
                    },
                    "us-east-1": {
                        description: "US East (N. Virginia)"
                    },
                    "us-east-2": {
                        description: "US East (Ohio)"
                    },
                    "us-west-1": {
                        description: "US West (N. California)"
                    },
                    "us-west-2": {
                        description: "US West (Oregon)"
                    }
                }
            }, {
                id: "aws-cn",
                outputs: {
                    dnsSuffix: "amazonaws.com.cn",
                    dualStackDnsSuffix: "api.amazonwebservices.com.cn",
                    implicitGlobalRegion: "cn-northwest-1",
                    name: "aws-cn",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^cn\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-cn-global": {
                        description: "AWS China global region"
                    },
                    "cn-north-1": {
                        description: "China (Beijing)"
                    },
                    "cn-northwest-1": {
                        description: "China (Ningxia)"
                    }
                }
            }, {
                id: "aws-us-gov",
                outputs: {
                    dnsSuffix: "amazonaws.com",
                    dualStackDnsSuffix: "api.aws",
                    implicitGlobalRegion: "us-gov-west-1",
                    name: "aws-us-gov",
                    supportsDualStack: !0,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-gov\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-us-gov-global": {
                        description: "AWS GovCloud (US) global region"
                    },
                    "us-gov-east-1": {
                        description: "AWS GovCloud (US-East)"
                    },
                    "us-gov-west-1": {
                        description: "AWS GovCloud (US-West)"
                    }
                }
            }, {
                id: "aws-iso",
                outputs: {
                    dnsSuffix: "c2s.ic.gov",
                    dualStackDnsSuffix: "c2s.ic.gov",
                    implicitGlobalRegion: "us-iso-east-1",
                    name: "aws-iso",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-iso\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-iso-global": {
                        description: "AWS ISO (US) global region"
                    },
                    "us-iso-east-1": {
                        description: "US ISO East"
                    },
                    "us-iso-west-1": {
                        description: "US ISO WEST"
                    }
                }
            }, {
                id: "aws-iso-b",
                outputs: {
                    dnsSuffix: "sc2s.sgov.gov",
                    dualStackDnsSuffix: "sc2s.sgov.gov",
                    implicitGlobalRegion: "us-isob-east-1",
                    name: "aws-iso-b",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },
                regionRegex: "^us\\-isob\\-\\w+\\-\\d+TextComponent",
                regions: {
                    "aws-iso-b-global": {
                        description: "AWS ISOB (US) global region"
                    },
                    "us-isob-east-1": {
                        description: "US ISOB East (Ohio)"
                    }
                }
            }, {
                id: "aws-iso-e",
                outputs: {
                    dnsSuffix: "cloud.adc-e.uk",
                    dualStackDnsSuffix: "cloud.adc-e.uk",
                    implicitGlobalRegion: "eu-isoe-west-1",
                    name: "aws-iso-e",
                    supportsDualStack: !1,
                    supportsFIPS: !0
                },