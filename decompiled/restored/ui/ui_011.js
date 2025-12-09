/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: ui_011.js
 * 处理时间: 2025-12-09T03:37:25.843Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: ui
 * File: 11/53
 * Lines: 80776 - 82275 (1500 lines)
 * Original file: cli.js
 */

                        let W = new Uint8Array(J.buffer);
                        return W.set(Y, 3), W;
                    case "timestamp":
                        let X = new Uint8Array(9);
                        return X[0] = 8, X.set(xb4.fromNumber(A.value.valueOf()).bytes, 1), X;
                    case "uuid":
                        if (!yb4.test(A.value)) throw Error(`Invalid UUID received: ${A.value}`);
                        let F = new Uint8Array(17);
                        return F[0] = 9, F.set((0, Jd.fromHex)(A.value.replace(/\-/g, "")), 1), F
                }
            }
        },
        yb4 = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
        xb4 = class A {
            constructor(Q) {
                if (this.bytes = Q, Q.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes")
            }
            static {
                oK(this, "Int64")
            }
            static fromNumber(Q) {
                if (Q > 9223372036854776000 || Q < -9223372036854776000) throw Error(`${Q} is too large (or, if negative, too small) to represent as an Int64`);
                let B = new Uint8Array(8);
                for (let G = 7, Z = Math.abs(Math.round(Q)); G > -1 && Z > 0; G--, Z /= 256) B[G] = Z;
                if (Q < 0) Xq1(B);
                return new A(B)
            }
            valueOf() {
                let Q = this.bytes.slice(0),
                    B = Q[0] & 128;
                if (B) Xq1(Q);
                return parseInt((0, Jd.toHex)(Q), 16) * (B ? -1 : 1)
            }
            toString() {
                return String(this.valueOf())
            }
        };

    function Xq1(A) {
        for (let Q = 0; Q < 8; Q++) A[Q] ^= 255;
        for (let Q = 7; Q > -1; Q--)
            if (A[Q]++, A[Q] !== 0) break
    }
    oK(Xq1, "negate");
    var TIQ = oK((A, Q) => {
            A = A.toLowerCase();
            for (let B of Object.keys(Q))
                if (A === B.toLowerCase()) return !0;
            return !1
        }, "hasHeader"),
        PIQ = cz(),
        jIQ = oK((A, Q = {}) => {
            let {
                headers: B,
                query: G = {}
            } = PIQ.HttpRequest.clone(A);
            for (let Z of Object.keys(B)) {
                let I = Z.toLowerCase();
                if (I.slice(0, 6) === "x-amz-" && !Q.unhoistableHeaders?.has(I) || Q.hoistableHeaders?.has(I)) G[Z] = B[Z], delete B[Z]
            }
            return {
                ...A,
                headers: B,
                query: G
            }
        }, "moveHeadersToQuery"),
        Fq1 = oK((A) => {
            A = PIQ.HttpRequest.clone(A);
            for (let Q of Object.keys(A.headers))
                if (EIQ.indexOf(Q.toLowerCase()) > -1) delete A.headers[Q];
            return A
        }, "prepareRequest"),
        XIQ = K7(),
        vb4 = L2(),
        mhA = IIQ(),
        SIQ = oK(({
            query: A = {}
        }) => {
            let Q = [],
                B = {};
            for (let G of Object.keys(A)) {
                if (G.toLowerCase() === zIQ) continue;
                let Z = (0, mhA.escapeUri)(G);
                Q.push(Z);
                let I = A[G];
                if (typeof I === "string") B[Z] = `${Z}=${(0,mhA.escapeUri)(I)}`;
                else if (Array.isArray(I)) B[Z] = I.slice(0).reduce((Y, J) => Y.concat([`${Z}=${(0,mhA.escapeUri)(J)}`]), []).sort().join("&")
            }
            return Q.sort().map((G) => B[G]).filter((G) => G).join("&")
        }, "getCanonicalQuery"),
        bb4 = oK((A) => fb4(A).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601"),
        fb4 = oK((A) => {
            if (typeof A === "number") return new Date(A * 1000);
            if (typeof A === "string") {
                if (Number(A)) return new Date(Number(A) * 1000);
                return new Date(A)
            }
            return A
        }, "toDate"),
        _IQ = class {
            static {
                oK(this, "SignatureV4Base")
            }
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                this.service = G, this.sha256 = Z, this.uriEscapePath = I, this.applyChecksum = typeof A === "boolean" ? A : !0, this.regionProvider = (0, XIQ.normalizeProvider)(B), this.credentialProvider = (0, XIQ.normalizeProvider)(Q)
            }
            createCanonicalRequest(A, Q, B) {
                let G = Object.keys(Q).sort();
                return `${A.method}
${this.getCanonicalPath(A)}
${SIQ(A)}
${G.map((Z)=>`${Z}:${Q[Z]}`).join(`
`)}

${G.join(";")}
${B}`
            }
            async createStringToSign(A, Q, B, G) {
                let Z = new this.sha256;
                Z.update((0, vb4.toUint8Array)(B));
                let I = await Z.digest();
                return `${G}
${A}
${Q}
${(0,Jd.toHex)(I)}`
            }
            getCanonicalPath({
                path: A
            }) {
                if (this.uriEscapePath) {
                    let Q = [];
                    for (let Z of A.split("/")) {
                        if (Z?.length === 0) continue;
                        if (Z === ".") continue;
                        if (Z === "..") Q.pop();
                        else Q.push(Z)
                    }
                    let B = `${A?.startsWith("/")?"/":""}${Q.join("/")}${Q.length>0&&A?.endsWith("/")?"/":""}`;
                    return (0, mhA.escapeUri)(B).replace(/%2F/g, "/")
                }
                return A
            }
            validateResolvedCredentials(A) {
                if (typeof A !== "object" || typeof A.accessKeyId !== "string" || typeof A.secretAccessKey !== "string") throw Error("Resolved credential object is not valid")
            }
            formatDate(A) {
                let Q = bb4(A).replace(/[\-:]/g, "");
                return {
                    longDate: Q,
                    shortDate: Q.slice(0, 8)
                }
            }
            getCanonicalHeaderList(A) {
                return Object.keys(A).sort().join(";")
            }
        },
        hb4 = class extends _IQ {
            constructor({
                applyChecksum: A,
                credentials: Q,
                region: B,
                service: G,
                sha256: Z,
                uriEscapePath: I = !0
            }) {
                super({
                    applyChecksum: A,
                    credentials: Q,
                    region: B,
                    service: G,
                    sha256: Z,
                    uriEscapePath: I
                });
                this.headerFormatter = new kb4
            }
            static {
                oK(this, "SignatureV4")
            }
            async presign(A, Q = {}) {
                let {
                    signingDate: B = new Date,
                    expiresIn: G = 3600,
                    unsignableHeaders: Z,
                    unhoistableHeaders: I,
                    signableHeaders: Y,
                    hoistableHeaders: J,
                    signingRegion: W,
                    signingService: X
                } = Q, F = await this.credentialProvider();
                this.validateResolvedCredentials(F);
                let V = W ?? await this.regionProvider(),
                    {
                        longDate: K,
                        shortDate: D
                    } = this.formatDate(B);
                if (G > OIQ) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
                let H = ghA(D, V, X ?? this.service),
                    C = jIQ(Fq1(A), {
                        unhoistableHeaders: I,
                        hoistableHeaders: J
                    });
                if (F.sessionToken) C.query[Dq1] = F.sessionToken;
                C.query[VIQ] = fhA, C.query[KIQ] = `${F.accessKeyId}/${H}`, C.query[Vq1] = K, C.query[HIQ] = G.toString(10);
                let E = Wq1(C, Z, Y);
                return C.query[DIQ] = this.getCanonicalHeaderList(E), C.query[Kq1] = await this.getSignature(K, H, this.getSigningKey(F, V, D, X), this.createCanonicalRequest(C, E, await uhA(A, this.sha256))), C
            }
            async sign(A, Q) {
                if (typeof A === "string") return this.signString(A, Q);
                else if (A.headers && A.payload) return this.signEvent(A, Q);
                else if (A.message) return this.signMessage(A, Q);
                else return this.signRequest(A, Q)
            }
            async signEvent({
                headers: A,
                payload: Q
            }, {
                signingDate: B = new Date,
                priorSignature: G,
                signingRegion: Z,
                signingService: I
            }) {
                let Y = Z ?? await this.regionProvider(),
                    {
                        shortDate: J,
                        longDate: W
                    } = this.formatDate(B),
                    X = ghA(J, Y, I ?? this.service),
                    F = await uhA({
                        headers: {},
                        body: Q
                    }, this.sha256),
                    V = new this.sha256;
                V.update(A);
                let K = (0, Jd.toHex)(await V.digest()),
                    D = [NIQ, W, X, G, K, F].join(`
`);
                return this.signString(D, {
                    signingDate: B,
                    signingRegion: Y,
                    signingService: I
                })
            }
            async signMessage(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            }) {
                return this.signEvent({
                    headers: this.headerFormatter.format(A.message.headers),
                    payload: A.message.body
                }, {
                    signingDate: Q,
                    signingRegion: B,
                    signingService: G,
                    priorSignature: A.priorSignature
                }).then((I) => {
                    return {
                        message: A.message,
                        signature: I
                    }
                })
            }
            async signString(A, {
                signingDate: Q = new Date,
                signingRegion: B,
                signingService: G
            } = {}) {
                let Z = await this.credentialProvider();
                this.validateResolvedCredentials(Z);
                let I = B ?? await this.regionProvider(),
                    {
                        shortDate: Y
                    } = this.formatDate(Q),
                    J = new this.sha256(await this.getSigningKey(Z, I, Y, G));
                return J.update((0, YIQ.toUint8Array)(A)), (0, Jd.toHex)(await J.digest())
            }
            async signRequest(A, {
                signingDate: Q = new Date,
                signableHeaders: B,
                unsignableHeaders: G,
                signingRegion: Z,
                signingService: I
            } = {}) {
                let Y = await this.credentialProvider();
                this.validateResolvedCredentials(Y);
                let J = Z ?? await this.regionProvider(),
                    W = Fq1(A),
                    {
                        longDate: X,
                        shortDate: F
                    } = this.formatDate(Q),
                    V = ghA(F, J, I ?? this.service);
                if (W.headers[Cq1] = X, Y.sessionToken) W.headers[UIQ] = Y.sessionToken;
                let K = await uhA(W, this.sha256);
                if (!TIQ(dhA, W.headers) && this.applyChecksum) W.headers[dhA] = K;
                let D = Wq1(W, G, B),
                    H = await this.getSignature(X, V, this.getSigningKey(Y, J, F, I), this.createCanonicalRequest(W, D, K));
                return W.headers[Hq1] = `${fhA} Credential=${Y.accessKeyId}/${V}, SignedHeaders=${this.getCanonicalHeaderList(D)}, Signature=${H}`, W
            }
            async getSignature(A, Q, B, G) {
                let Z = await this.createStringToSign(A, Q, G, fhA),
                    I = new this.sha256(await B);
                return I.update((0, YIQ.toUint8Array)(Z)), (0, Jd.toHex)(await I.digest())
            }
            getSigningKey(A, Q, B, G) {
                return RIQ(this.sha256, A, B, Q, G || this.service)
            }
        },
        gb4 = {
            SignatureV4a: null
        }
});
var wq1 = U((DV7, iIQ) => {
    var {
        defineProperty: phA,
        getOwnPropertyDescriptor: ub4,
        getOwnPropertyNames: mb4
    } = Object, db4 = Object.prototype.hasOwnProperty, KW = (A, Q) => phA(A, "name", {
        value: Q,
        configurable: !0
    }), cb4 = (A, Q) => {
        for (var B in Q) phA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, pb4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of mb4(Q))
                if (!db4.call(A, Z) && Z !== B) phA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ub4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, lb4 = (A) => pb4(phA({}, "__esModule", {
        value: !0
    }), A), mIQ = {};
    cb4(mIQ, {
        AWSSDKSigV4Signer: () => sb4,
        AwsSdkSigV4ASigner: () => ob4,
        AwsSdkSigV4Signer: () => $q1,
        NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => tb4,
        NODE_SIGV4A_CONFIG_OPTIONS: () => Qf4,
        getBearerTokenEnvKey: () => dIQ,
        resolveAWSSDKSigV4Config: () => Gf4,
        resolveAwsSdkSigV4AConfig: () => Af4,
        resolveAwsSdkSigV4Config: () => cIQ,
        validateSigningProperties: () => Uq1
    });
    iIQ.exports = lb4(mIQ);
    var ib4 = cz(),
        nb4 = cz(),
        xIQ = KW((A) => nb4.HttpResponse.isInstance(A) ? A.headers?.date ?? A.headers?.Date : void 0, "getDateHeader"),
        zq1 = KW((A) => new Date(Date.now() + A), "getSkewCorrectedDate"),
        ab4 = KW((A, Q) => Math.abs(zq1(Q).getTime() - A) >= 300000, "isClockSkewed"),
        vIQ = KW((A, Q) => {
            let B = Date.parse(A);
            if (ab4(B, Q)) return B - Date.now();
            return Q
        }, "getUpdatedSystemClockOffset"),
        gDA = KW((A, Q) => {
            if (!Q) throw Error(`Property \`${A}\` is not resolved for AWS SDK SigV4Auth`);
            return Q
        }, "throwSigningPropertyError"),
        Uq1 = KW(async (A) => {
            let Q = gDA("context", A.context),
                B = gDA("config", A.config),
                G = Q.endpointV2?.properties?.authSchemes?.[0],
                I = await gDA("signer", B.signer)(G),
                Y = A?.signingRegion,
                J = A?.signingRegionSet,
                W = A?.signingName;
            return {
                config: B,
                signer: I,
                signingRegion: Y,
                signingRegionSet: J,
                signingName: W
            }
        }, "validateSigningProperties"),
        $q1 = class {
            static {
                KW(this, "AwsSdkSigV4Signer")
            }
            async sign(A, Q, B) {
                if (!ib4.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let G = await Uq1(B),
                    {
                        config: Z,
                        signer: I
                    } = G,
                    {
                        signingRegion: Y,
                        signingName: J
                    } = G,
                    W = B.context;
                if (W?.authSchemes?.length ?? !1) {
                    let [F, V] = W.authSchemes;
                    if (F?.name === "sigv4a" && V?.name === "sigv4") Y = V?.signingRegion ?? Y, J = V?.signingName ?? J
                }
                return await I.sign(A, {
                    signingDate: zq1(Z.systemClockOffset),
                    signingRegion: Y,
                    signingService: J
                })
            }
            errorHandler(A) {
                return (Q) => {
                    let B = Q.ServerTime ?? xIQ(Q.$response);
                    if (B) {
                        let G = gDA("config", A.config),
                            Z = G.systemClockOffset;
                        if (G.systemClockOffset = vIQ(B, G.systemClockOffset), G.systemClockOffset !== Z && Q.$metadata) Q.$metadata.clockSkewCorrected = !0
                    }
                    throw Q
                }
            }
            successHandler(A, Q) {
                let B = xIQ(A);
                if (B) {
                    let G = gDA("config", Q.config);
                    G.systemClockOffset = vIQ(B, G.systemClockOffset)
                }
            }
        },
        sb4 = $q1,
        rb4 = cz(),
        ob4 = class extends $q1 {
            static {
                KW(this, "AwsSdkSigV4ASigner")
            }
            async sign(A, Q, B) {
                if (!rb4.HttpRequest.isInstance(A)) throw Error("The request is not an instance of `HttpRequest` and cannot be signed");
                let {
                    config: G,
                    signer: Z,
                    signingRegion: I,
                    signingRegionSet: Y,
                    signingName: J
                } = await Uq1(B), X = (await G.sigv4aSigningRegionSet?.() ?? Y ?? [I]).join(",");
                return await Z.sign(A, {
                    signingDate: zq1(G.systemClockOffset),
                    signingRegion: X,
                    signingService: J
                })
            }
        },
        bIQ = KW((A) => typeof A === "string" && A.length > 0 ? A.split(",").map((Q) => Q.trim()) : [], "getArrayForCommaSeparatedString"),
        dIQ = KW((A) => `AWS_BEARER_TOKEN_${A.replace(/[\s-]/g,"_").toUpperCase()}`, "getBearerTokenEnvKey"),
        fIQ = "AWS_AUTH_SCHEME_PREFERENCE",
        hIQ = "auth_scheme_preference",
        tb4 = {
            environmentVariableSelector: KW((A, Q) => {
                if (Q?.signingName) {
                    if (dIQ(Q.signingName) in A) return ["httpBearerAuth"]
                }
                if (!(fIQ in A)) return;
                return bIQ(A[fIQ])
            }, "environmentVariableSelector"),
            configFileSelector: KW((A) => {
                if (!(hIQ in A)) return;
                return bIQ(A[hIQ])
            }, "configFileSelector"),
            default: []
        },
        eb4 = nB(),
        gIQ = P2(),
        Af4 = KW((A) => {
            return A.sigv4aSigningRegionSet = (0, eb4.normalizeProvider)(A.sigv4aSigningRegionSet), A
        }, "resolveAwsSdkSigV4AConfig"),
        Qf4 = {
            environmentVariableSelector(A) {
                if (A.AWS_SIGV4A_SIGNING_REGION_SET) return A.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((Q) => Q.trim());
                throw new gIQ.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
                    tryNextLink: !0
                })
            },
            configFileSelector(A) {
                if (A.sigv4a_signing_region_set) return (A.sigv4a_signing_region_set ?? "").split(",").map((Q) => Q.trim());
                throw new gIQ.ProviderError("sigv4a_signing_region_set not set in profile.", {
                    tryNextLink: !0
                })
            },
            default: void 0
        },
        Bf4 = yR(),
        jr = nB(),
        uIQ = yIQ(),
        cIQ = KW((A) => {
            let Q = A.credentials,
                B = !!A.credentials,
                G = void 0;
            Object.defineProperty(A, "credentials", {
                set(X) {
                    if (X && X !== Q && X !== G) B = !0;
                    Q = X;
                    let F = pIQ(A, {
                            credentials: Q,
                            credentialDefaultProvider: A.credentialDefaultProvider
                        }),
                        V = lIQ(A, F);
                    if (B && !V.attributed) G = KW(async (K) => V(K).then((D) => (0, Bf4.setCredentialFeature)(D, "CREDENTIALS_CODE", "e")), "resolvedCredentials"), G.memoized = V.memoized, G.configBound = V.configBound, G.attributed = !0;
                    else G = V
                },
                get() {
                    return G
                },
                enumerable: !0,
                configurable: !0
            }), A.credentials = Q;
            let {
                signingEscapePath: Z = !0,
                systemClockOffset: I = A.systemClockOffset || 0,
                sha256: Y
            } = A, J;
            if (A.signer) J = (0, jr.normalizeProvider)(A.signer);
            else if (A.regionInfoProvider) J = KW(() => (0, jr.normalizeProvider)(A.region)().then(async (X) => [await A.regionInfoProvider(X, {
                useFipsEndpoint: await A.useFipsEndpoint(),
                useDualstackEndpoint: await A.useDualstackEndpoint()
            }) || {}, X]).then(([X, F]) => {
                let {
                    signingRegion: V,
                    signingService: K
                } = X;
                A.signingRegion = A.signingRegion || V || F, A.signingName = A.signingName || K || A.serviceId;
                let D = {
                    ...A,
                    credentials: A.credentials,
                    region: A.signingRegion,
                    service: A.signingName,
                    sha256: Y,
                    uriEscapePath: Z
                };
                return new(A.signerConstructor || uIQ.SignatureV4)(D)
            }), "signer");
            else J = KW(async (X) => {
                X = Object.assign({}, {
                    name: "sigv4",
                    signingName: A.signingName || A.defaultSigningName,
                    signingRegion: await (0, jr.normalizeProvider)(A.region)(),
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
                return new(A.signerConstructor || uIQ.SignatureV4)(K)
            }, "signer");
            return Object.assign(A, {
                systemClockOffset: I,
                signingEscapePath: Z,
                signer: J
            })
        }, "resolveAwsSdkSigV4Config"),
        Gf4 = cIQ;

    function pIQ(A, {
        credentials: Q,
        credentialDefaultProvider: B
    }) {
        let G;
        if (Q)
            if (!Q?.memoized) G = (0, jr.memoizeIdentityProvider)(Q, jr.isIdentityExpired, jr.doesIdentityRequireRefresh);
            else G = Q;
        else if (B) G = (0, jr.normalizeProvider)(B(Object.assign({}, A, {
            parentClientConfig: A
        })));
        else G = KW(async () => {
            throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.")
        }, "credentialsProvider");
        return G.memoized = !0, G
    }
    KW(pIQ, "normalizeCredentialProvider");

    function lIQ(A, Q) {
        if (Q.configBound) return Q;
        let B = KW(async (G) => Q({
            ...G,
            callerClientConfig: A
        }), "fn");
        return B.memoized = Q.memoized, B.configBound = !0, B
    }
    KW(lIQ, "bindCallerConfig")
});
var sIQ = U((nIQ) => {
    Object.defineProperty(nIQ, "__esModule", {
        value: !0
    });
    nIQ.fromBase64 = void 0;
    var Zf4 = kI(),
        If4 = /^[A-Za-z0-9+/]*={0,2}$/,
        Yf4 = (A) => {
            if (A.length * 3 % 4 !== 0) throw TypeError("Incorrect padding on base64 string.");
            if (!If4.exec(A)) throw TypeError("Invalid base64 string.");
            let Q = (0, Zf4.fromString)(A, "base64");
            return new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength)
        };
    nIQ.fromBase64 = Yf4
});
var tIQ = U((rIQ) => {
    Object.defineProperty(rIQ, "__esModule", {
        value: !0
    });
    rIQ.toBase64 = void 0;
    var Jf4 = kI(),
        Wf4 = L2(),
        Xf4 = (A) => {
            let Q;
            if (typeof A === "string") Q = (0, Wf4.fromUtf8)(A);
            else Q = A;
            if (typeof Q !== "object" || typeof Q.byteOffset !== "number" || typeof Q.byteLength !== "number") throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
            return (0, Jf4.fromArrayBuffer)(Q.buffer, Q.byteOffset, Q.byteLength).toString("base64")
        };
    rIQ.toBase64 = Xf4
});
var Wd = U((UV7, lhA) => {
    var {
        defineProperty: eIQ,
        getOwnPropertyDescriptor: Ff4,
        getOwnPropertyNames: Vf4
    } = Object, Kf4 = Object.prototype.hasOwnProperty, qq1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Vf4(Q))
                if (!Kf4.call(A, Z) && Z !== B) eIQ(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Ff4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, AYQ = (A, Q, B) => (qq1(A, Q, "default"), B && qq1(B, Q, "default")), Df4 = (A) => qq1(eIQ({}, "__esModule", {
        value: !0
    }), A), Nq1 = {};
    lhA.exports = Df4(Nq1);
    AYQ(Nq1, sIQ(), lhA.exports);
    AYQ(Nq1, tIQ(), lhA.exports)
});
var p6 = U(($V7, jq1) => {
    var {
        defineProperty: ihA,
        getOwnPropertyDescriptor: Hf4,
        getOwnPropertyNames: Cf4
    } = Object, Ef4 = Object.prototype.hasOwnProperty, M3 = (A, Q) => ihA(A, "name", {
        value: Q,
        configurable: !0
    }), zf4 = (A, Q) => {
        for (var B in Q) ihA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, Mq1 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Cf4(Q))
                if (!Ef4.call(A, Z) && Z !== B) ihA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = Hf4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, Uf4 = (A, Q, B) => (Mq1(A, Q, "default"), B && Mq1(B, Q, "default")), $f4 = (A) => Mq1(ihA({}, "__esModule", {
        value: !0
    }), A), Tq1 = {};
    zf4(Tq1, {
        Client: () => wf4,
        Command: () => GYQ,
        NoOpLogger: () => ff4,
        SENSITIVE_STRING: () => Nf4,
        ServiceException: () => Mf4,
        _json: () => Rq1,
        collectBody: () => Lq1.collectBody,
        convertMap: () => hf4,
        createAggregatedClient: () => Lf4,
        decorateServiceException: () => ZYQ,
        emitWarningIfUnsupportedVersion: () => Pf4,
        extendedEncodeURIComponent: () => Lq1.extendedEncodeURIComponent,
        getArrayIfSingleItem: () => vf4,
        getDefaultClientConfiguration: () => yf4,
        getDefaultExtensionConfiguration: () => YYQ,
        getValueFromTextNode: () => JYQ,
        isSerializableHeaderValue: () => bf4,
        loadConfigsForDefaultMode: () => Tf4,
        map: () => Pq1,
        resolveDefaultRuntimeConfig: () => xf4,
        resolvedPath: () => Lq1.resolvedPath,
        serializeDateTime: () => pf4,
        serializeFloat: () => cf4,
        take: () => gf4,
        throwDefaultError: () => IYQ,
        withBaseException: () => Of4
    });
    jq1.exports = $f4(Tq1);
    var BYQ = PR(),
        wf4 = class {
            constructor(A) {
                this.config = A, this.middlewareStack = (0, BYQ.constructStack)()
            }
            static {
                M3(this, "Client")
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
        Lq1 = C5(),
        Oq1 = Bq1(),
        GYQ = class {
            constructor() {
                this.middlewareStack = (0, BYQ.constructStack)()
            }
            static {
                M3(this, "Command")
            }
            static classBuilder() {
                return new qf4
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
                        [Oq1.SMITHY_CONTEXT_KEY]: {
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
        qf4 = class {
            constructor() {
                this._init = () => {}, this._ep = {}, this._middlewareFn = () => [], this._commandName = "", this._clientName = "", this._additionalContext = {}, this._smithyContext = {}, this._inputFilterSensitiveLog = (A) => A, this._outputFilterSensitiveLog = (A) => A, this._serializer = null, this._deserializer = null
            }
            static {
                M3(this, "ClassBuilder")
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
                return Q = class extends GYQ {
                    constructor(...[B]) {
                        super();
                        this.serialize = A._serializer, this.deserialize = A._deserializer, this.input = B ?? {}, A._init(this), this.schema = A._operationSchema
                    }
                    static {
                        M3(this, "CommandRef")
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
        Nf4 = "***SensitiveInformation***",
        Lf4 = M3((A, Q) => {
            for (let B of Object.keys(A)) {
                let G = A[B],
                    Z = M3(async function(Y, J, W) {
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
        Mf4 = class A extends Error {
            static {
                M3(this, "ServiceException")
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
        ZYQ = M3((A, Q = {}) => {
            Object.entries(Q).filter(([, G]) => G !== void 0).forEach(([G, Z]) => {
                if (A[G] == null || A[G] === "") A[G] = Z
            });
            let B = A.message || A.Message || "UnknownError";
            return A.message = B, delete A.Message, A
        }, "decorateServiceException"),
        IYQ = M3(({
            output: A,
            parsedBody: Q,
            exceptionCtor: B,
            errorCode: G
        }) => {
            let Z = Rf4(A),
                I = Z.httpStatusCode ? Z.httpStatusCode + "" : void 0,
                Y = new B({
                    name: Q?.code || Q?.Code || G || I || "UnknownError",
                    $fault: "client",
                    $metadata: Z
                });
            throw ZYQ(Y, Q)
        }, "throwDefaultError"),
        Of4 = M3((A) => {
            return ({
                output: Q,
                parsedBody: B,
                errorCode: G
            }) => {
                IYQ({
                    output: Q,
                    parsedBody: B,
                    exceptionCtor: A,
                    errorCode: G
                })
            }
        }, "withBaseException"),
        Rf4 = M3((A) => ({
            httpStatusCode: A.statusCode,
            requestId: A.headers["x-amzn-requestid"] ?? A.headers["x-amzn-request-id"] ?? A.headers["x-amz-request-id"],
            extendedRequestId: A.headers["x-amz-id-2"],
            cfId: A.headers["x-amz-cf-id"]
        }), "deserializeMetadata"),
        Tf4 = M3((A) => {
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
        QYQ = !1,
        Pf4 = M3((A) => {
            if (A && !QYQ && parseInt(A.substring(1, A.indexOf("."))) < 16) QYQ = !0
        }, "emitWarningIfUnsupportedVersion"),
        jf4 = M3((A) => {
            let Q = [];
            for (let B in Oq1.AlgorithmId) {
                let G = Oq1.AlgorithmId[B];
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
        Sf4 = M3((A) => {
            let Q = {};
            return A.checksumAlgorithms().forEach((B) => {
                Q[B.algorithmId()] = B.checksumConstructor()
            }), Q
        }, "resolveChecksumRuntimeConfig"),
        _f4 = M3((A) => {
            return {
                setRetryStrategy(Q) {
                    A.retryStrategy = Q
                },
                retryStrategy() {
                    return A.retryStrategy
                }
            }
        }, "getRetryConfiguration"),
        kf4 = M3((A) => {
            let Q = {};
            return Q.retryStrategy = A.retryStrategy(), Q
        }, "resolveRetryRuntimeConfig"),
        YYQ = M3((A) => {
            return Object.assign(jf4(A), _f4(A))
        }, "getDefaultExtensionConfiguration"),
        yf4 = YYQ,
        xf4 = M3((A) => {
            return Object.assign(Sf4(A), kf4(A))
        }, "resolveDefaultRuntimeConfig"),
        vf4 = M3((A) => Array.isArray(A) ? A : [A], "getArrayIfSingleItem"),
        JYQ = M3((A) => {
            for (let B in A)
                if (A.hasOwnProperty(B) && A[B]["#text"] !== void 0) A[B] = A[B]["#text"];
                else if (typeof A[B] === "object" && A[B] !== null) A[B] = JYQ(A[B]);
            return A
        }, "getValueFromTextNode"),
        bf4 = M3((A) => {
            return A != null
        }, "isSerializableHeaderValue"),
        ff4 = class {
            static {
                M3(this, "NoOpLogger")
            }
            trace() {}
            debug() {}
            info() {}
            warn() {}
            error() {}
        };

    function Pq1(A, Q, B) {
        let G, Z, I;
        if (typeof Q > "u" && typeof B > "u") G = {}, I = A;
        else if (G = A, typeof Q === "function") return Z = Q, I = B, uf4(G, Z, I);
        else I = Q;
        for (let Y of Object.keys(I)) {
            if (!Array.isArray(I[Y])) {
                G[Y] = I[Y];
                continue
            }
            WYQ(G, null, I, Y)
        }
        return G
    }
    M3(Pq1, "map");
    var hf4 = M3((A) => {
            let Q = {};
            for (let [B, G] of Object.entries(A || {})) Q[B] = [, G];
            return Q
        }, "convertMap"),
        gf4 = M3((A, Q) => {
            let B = {};
            for (let G in Q) WYQ(B, A, Q, G);
            return B
        }, "take"),
        uf4 = M3((A, Q, B) => {
            return Pq1(A, Object.entries(B).reduce((G, [Z, I]) => {
                if (Array.isArray(I)) G[Z] = I;
                else if (typeof I === "function") G[Z] = [Q, I()];
                else G[Z] = [Q, I];
                return G
            }, {}))
        }, "mapWithFilter"),
        WYQ = M3((A, Q, B, G) => {
            if (Q !== null) {
                let Y = B[G];
                if (typeof Y === "function") Y = [, Y];
                let [J = mf4, W = df4, X = G] = Y;
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
        mf4 = M3((A) => A != null, "nonNullish"),
        df4 = M3((A) => A, "pass"),
        cf4 = M3((A) => {
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
        pf4 = M3((A) => A.toISOString().replace(".000Z", "Z"), "serializeDateTime"),
        Rq1 = M3((A) => {
            if (A == null) return {};
            if (Array.isArray(A)) return A.filter((Q) => Q != null).map(Rq1);
            if (typeof A === "object") {
                let Q = {};
                for (let B of Object.keys(A)) {
                    if (A[B] == null) continue;
                    Q[B] = Rq1(A[B])
                }
                return Q
            }
            return A
        }, "_json");
    Uf4(Tq1, c6(), jq1.exports)
});
var MYQ = U((OV7, LYQ) => {
    var {
        defineProperty: ahA,
        getOwnPropertyDescriptor: lf4,
        getOwnPropertyNames: if4
    } = Object, nf4 = Object.prototype.hasOwnProperty, t5 = (A, Q) => ahA(A, "name", {
        value: Q,
        configurable: !0
    }), af4 = (A, Q) => {
        for (var B in Q) ahA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, sf4 = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of if4(Q))
                if (!nf4.call(A, Z) && Z !== B) ahA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = lf4(Q, Z)) || G.enumerable
                })
        }
        return A
    }, rf4 = (A) => sf4(ahA({}, "__esModule", {
        value: !0
    }), A), DYQ = {};
    af4(DYQ, {
        AwsEc2QueryProtocol: () => Oh4,
        AwsJson1_0Protocol: () => Fh4,
        AwsJson1_1Protocol: () => Vh4,
        AwsJsonRpcProtocol: () => fq1,
        AwsQueryProtocol: () => UYQ,
        AwsRestJsonProtocol: () => Dh4,
        AwsRestXmlProtocol: () => _h4,
        JsonCodec: () => bq1,
        JsonShapeDeserializer: () => EYQ,
        JsonShapeSerializer: () => zYQ,
        XmlCodec: () => NYQ,
        XmlShapeDeserializer: () => hq1,
        XmlShapeSerializer: () => qYQ,
        _toBool: () => tf4,
        _toNum: () => ef4,
        _toStr: () => of4,
        awsExpectUnion: () => Ch4,
        loadRestJsonErrorCode: () => vq1,
        loadRestXmlErrorCode: () => wYQ,
        parseJsonBody: () => xq1,
        parseJsonErrorBody: () => Ih4,
        parseXmlBody: () => $YQ,
        parseXmlErrorBody: () => jh4
    });
    LYQ.exports = rf4(DYQ);
    var of4 = t5((A) => {
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
        tf4 = t5((A) => {
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
        ef4 = t5((A) => {
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
        Ah4 = C5(),
        J8A = y4(),
        Qh4 = pK(),
        _r = class {
            static {
                t5(this, "SerdeContextConfig")
            }
            serdeContext;
            setSerdeContext(A) {
                this.serdeContext = A
            }
        },
        uDA = y4(),
        W8A = c6(),
        Bh4 = Wd(),
        Gh4 = c6();

    function HYQ(A, Q, B) {
        if (B?.source) {
            let G = B.source;
            if (typeof Q === "number") {
                if (Q > Number.MAX_SAFE_INTEGER || Q < Number.MIN_SAFE_INTEGER || G !== String(Q))
                    if (G.includes(".")) return new Gh4.NumericValue(G, "bigDecimal");
                    else return BigInt(G)
            }
        }
        return Q
    }
    t5(HYQ, "jsonReviver");
    var Zh4 = p6(),
        CYQ = t5((A, Q) => (0, Zh4.collectBody)(A, Q).then((B) => Q.utf8Encoder(B)), "collectBodyString"),
        xq1 = t5((A, Q) => CYQ(A, Q).then((B) => {
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
        Ih4 = t5(async (A, Q) => {
            let B = await xq1(A, Q);
            return B.message = B.message ?? B.Message, B
        }, "parseJsonErrorBody"),
        vq1 = t5((A, Q) => {
            let B = t5((I, Y) => Object.keys(I).find((J) => J.toLowerCase() === Y.toLowerCase()), "findKey"),
                G = t5((I) => {
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
        EYQ = class extends _r {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                t5(this, "JsonShapeDeserializer")
            }
            async read(A, Q) {
                return this._read(A, typeof Q === "string" ? JSON.parse(Q, HYQ) : await xq1(Q, this.serdeContext))
            }
            readObject(A, Q) {
                return this._read(A, Q)
            }
            _read(A, Q) {
                let B = Q !== null && typeof Q === "object",
                    G = uDA.NormalizedSchema.of(A);
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
                if (G.isBlobSchema() && typeof Q === "string") return (0, Bh4.fromBase64)(Q);
                let Z = G.getMergedTraits().mediaType;
                if (G.isStringSchema() && typeof Q === "string" && Z) {
                    if (Z === "application/json" || Z.endsWith("+json")) return W8A.LazyJsonString.from(Q)
                }
                if (G.isTimestampSchema()) {
                    let I = this.settings.timestampFormat;
                    switch (I.useTrait ? G.getSchema() === uDA.SCHEMA.TIMESTAMP_DEFAULT ? I.default : G.getSchema() ?? I.default : I.default) {
                        case uDA.SCHEMA.TIMESTAMP_DATE_TIME:
                            return (0, W8A.parseRfc3339DateTimeWithOffset)(Q);
                        case uDA.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, W8A.parseRfc7231DateTime)(Q);
                        case uDA.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
                            return (0, W8A.parseEpochTimestamp)(Q);
                        default:
                            return console.warn("Missing timestamp format, parsing value with Date constructor:", Q), new Date(Q)
                    }
                }
                if (G.isBigIntegerSchema() && (typeof Q === "number" || typeof Q === "string")) return BigInt(Q);
                if (G.isBigDecimalSchema() && Q != null) {
                    if (Q instanceof W8A.NumericValue) return Q;
                    return new W8A.NumericValue(String(Q), "bigDecimal")
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
        X8A = y4(),
        Yh4 = c6(),
        Jh4 = c6(),
        Wh4 = c6(),
        XYQ = String.fromCharCode(925),
        Xh4 = class {
            static {
                t5(this, "JsonReplacer")
            }
            values = new Map;
            counter = 0;
            stage = 0;
            createReplacer() {
                if (this.stage === 1) throw Error("@aws-sdk/core/protocols - JsonReplacer already created.");
                if (this.stage === 2) throw Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
                return this.stage = 1, (A, Q) => {
                    if (Q instanceof Wh4.NumericValue) {
                        let B = `${XYQ+NaN+this.counter++}_` + Q.string;
                        return this.values.set(`"${B}"`, Q.string), B
                    }
                    if (typeof Q === "bigint") {
                        let B = Q.toString(),
                            G = `${XYQ+"b"+this.counter++}_` + B;
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
        zYQ = class extends _r {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                t5(this, "JsonShapeSerializer")
            }
            buffer;
            rootSchema;
            write(A, Q) {
                this.rootSchema = X8A.NormalizedSchema.of(A), this.buffer = this._write(this.rootSchema, Q)
            }
            flush() {
                if (this.rootSchema?.isStructSchema() || this.rootSchema?.isDocumentSchema()) {
                    let A = new Xh4;
                    return A.replaceInJson(JSON.stringify(this.buffer, A.createReplacer(), 0))
                }
                return this.buffer
            }
            _write(A, Q, B) {
                let G = Q !== null && typeof Q === "object",
                    Z = X8A.NormalizedSchema.of(A);
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
                    switch (Y.useTrait ? Z.getSchema() === X8A.SCHEMA.TIMESTAMP_DEFAULT ? Y.default : Z.getSchema() ?? Y.default : Y.default) {
                        case X8A.SCHEMA.TIMESTAMP_DATE_TIME:
                            return Q.toISOString().replace(".000Z", "Z");
                        case X8A.SCHEMA.TIMESTAMP_HTTP_DATE:
                            return (0, Yh4.dateToUtcString)(Q);
                        case X8A.SCHEMA.TIMESTAMP_EPOCH_SECONDS:
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
                    if (I === "application/json" || I.endsWith("+json")) return Jh4.LazyJsonString.from(Q)
                }
                return Q
            }
        },
        bq1 = class extends _r {
            constructor(A) {
                super();
                this.settings = A
            }
            static {
                t5(this, "JsonCodec")
            }
            createSerializer() {
                let A = new zYQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
            createDeserializer() {
                let A = new EYQ(this.settings);
                return A.setSerdeContext(this.serdeContext), A
            }
        },
        fq1 = class extends Ah4.RpcProtocol {
            static {
                t5(this, "AwsJsonRpcProtocol")
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
                this.codec = new bq1({
                    timestampFormat: {
                        useTrait: !0,
                        default: J8A.SCHEMA.TIMESTAMP_EPOCH_SECONDS
                    },
                    jsonName: !1
                }), this.serializer = this.codec.createSerializer(), this.deserializer = this.codec.createDeserializer()
            }
            async serializeRequest(A, Q, B) {
                let G = await super.serializeRequest(A, Q, B);
                if (!G.path.endsWith("/")) G.path += "/";
                if (Object.assign(G.headers, {
                        "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
                        "x-amz-target": (this.getJsonRpcVersion() === "1.0" ? "JsonRpc10." : "JsonProtocol.") + J8A.NormalizedSchema.of(A).getName()
                    }), (0, J8A.deref)(A.input) === "unit" || !G.body) G.body = "{}";
                try {
                    G.headers["content-length"] = String((0, Qh4.calculateBodyLength)(G.body))
                } catch (Z) {}
                return G
            }
            getPayloadCodec() {
                return this.codec
            }
            async handleError(A, Q, B, G, Z) {
                let I = vq1(B, G) ?? "Unknown",
                    Y = this.options.defaultNamespace,
                    J = I;
                if (I.includes("#"))[Y, J] = I.split("#");
                let W = J8A.TypeRegistry.for(Y),
                    X;