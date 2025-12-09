/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_045.js
 * 处理时间: 2025-12-09T03:37:24.301Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * UA         (  9x) = require(moduleName) - Node.js require
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 45/61
 * Lines: 245064 - 246563 (1500 lines)
 * Original file: cli.js
 */

        let G = Math.floor(new Date().getTime() / 1000),
            Z = this.additionalClaims || {},
            I = Object.assign({
                iss: this.iss,
                scope: this.scope,
                aud: BaB,
                exp: G + 3600,
                iat: G,
                sub: this.sub
            }, Z),
            Y = Rs6.sign({
                header: {
                    alg: "RS256"
                },
                payload: I,
                secret: this.key
            });
        try {
            let J = await this.transporter.request({
                method: "POST",
                url: BaB,
                data: {
                    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
                    assertion: Y
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                responseType: "json",
                retryConfig: {
                    httpMethodsToRetry: ["POST"]
                }
            });
            return this.rawToken = J.data, this.expiresAt = J.data.expires_in === null || J.data.expires_in === void 0 ? void 0 : (G + J.data.expires_in) * 1000, this.rawToken
        } catch (J) {
            this.rawToken = void 0, this.tokenExpires = void 0;
            let W = J.response && ((Q = J.response) === null || Q === void 0 ? void 0 : Q.data) ? (B = J.response) === null || B === void 0 ? void 0 : B.data : {};
            if (W.error) {
                let X = W.error_description ? `: ${W.error_description}` : "";
                J.message = `${W.error}${X}`
            }
            throw J
        }
    }
});
var Dn1 = U((YaB) => {
    Object.defineProperty(YaB, "__esModule", {
        value: !0
    });
    YaB.JWTAccess = void 0;
    var Ss6 = Wn1(),
        _s6 = Bl(),
        IaB = {
            alg: "RS256",
            typ: "JWT"
        };
    class Kn1 {
        constructor(A, Q, B, G) {
            this.cache = new _s6.LRUCache({
                capacity: 500,
                maxAge: 3600000
            }), this.email = A, this.key = Q, this.keyId = B, this.eagerRefreshThresholdMillis = G !== null && G !== void 0 ? G : 300000
        }
        getCachedKey(A, Q) {
            let B = A;
            if (Q && Array.isArray(Q) && Q.length) B = A ? `${A}_${Q.join("_")}` : `${Q.join("_")}`;
            else if (typeof Q === "string") B = A ? `${A}_${Q}` : Q;
            if (!B) throw Error("Scopes or url must be provided");
            return B
        }
        getRequestHeaders(A, Q, B) {
            let G = this.getCachedKey(A, B),
                Z = this.cache.get(G),
                I = Date.now();
            if (Z && Z.expiration - I > this.eagerRefreshThresholdMillis) return Z.headers;
            let Y = Math.floor(Date.now() / 1000),
                J = Kn1.getExpirationTime(Y),
                W;
            if (Array.isArray(B)) B = B.join(" ");
            if (B) W = {
                iss: this.email,
                sub: this.email,
                scope: B,
                exp: J,
                iat: Y
            };
            else W = {
                iss: this.email,
                sub: this.email,
                aud: A,
                exp: J,
                iat: Y
            };
            if (Q) {
                for (let D in W)
                    if (Q[D]) throw Error(`The '${D}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`)
            }
            let X = this.keyId ? {
                    ...IaB,
                    kid: this.keyId
                } : IaB,
                F = Object.assign(W, Q),
                K = {
                    Authorization: `Bearer ${Ss6.sign({header:X,payload:F,secret:this.key})}`
                };
            return this.cache.set(G, {
                expiration: J * 1000,
                headers: K
            }), K
        }
        static getExpirationTime(A) {
            return A + 3600
        }
        fromJSON(A) {
            if (!A) throw Error("Must pass in a JSON object containing the service account auth settings.");
            if (!A.client_email) throw Error("The incoming JSON object does not contain a client_email field");
            if (!A.private_key) throw Error("The incoming JSON object does not contain a private_key field");
            this.email = A.client_email, this.key = A.private_key, this.keyId = A.private_key_id, this.projectId = A.project_id
        }
        fromStream(A, Q) {
            if (Q) this.fromStreamAsync(A).then(() => Q(), Q);
            else return this.fromStreamAsync(A)
        }
        fromStreamAsync(A) {
            return new Promise((Q, B) => {
                if (!A) B(Error("Must pass in a stream containing the service account auth settings."));
                let G = "";
                A.setEncoding("utf8").on("data", (Z) => G += Z).on("error", B).on("end", () => {
                    try {
                        let Z = JSON.parse(G);
                        this.fromJSON(Z), Q()
                    } catch (Z) {
                        B(Z)
                    }
                })
            })
        }
    }
    YaB.JWTAccess = Kn1
});
var Cn1 = U((XaB) => {
    Object.defineProperty(XaB, "__esModule", {
        value: !0
    });
    XaB.JWT = void 0;
    var WaB = ZaB(),
        ks6 = Dn1(),
        ys6 = Pe(),
        qA1 = Zk();
    class Hn1 extends ys6.OAuth2Client {
        constructor(A, Q, B, G, Z, I) {
            let Y = A && typeof A === "object" ? A : {
                email: A,
                keyFile: Q,
                key: B,
                keyId: I,
                scopes: G,
                subject: Z
            };
            super(Y);
            this.email = Y.email, this.keyFile = Y.keyFile, this.key = Y.key, this.keyId = Y.keyId, this.scopes = Y.scopes, this.subject = Y.subject, this.additionalClaims = Y.additionalClaims, this.credentials = {
                refresh_token: "jwt-placeholder",
                expiry_date: 1
            }
        }
        createScoped(A) {
            let Q = new Hn1(this);
            return Q.scopes = A, Q
        }
        async getRequestMetadataAsync(A) {
            A = this.defaultServicePath ? `https://${this.defaultServicePath}/` : A;
            let Q = !this.hasUserScopes() && A || this.useJWTAccessWithScope && this.hasAnyScopes() || this.universeDomain !== qA1.DEFAULT_UNIVERSE;
            if (this.subject && this.universeDomain !== qA1.DEFAULT_UNIVERSE) throw RangeError(`Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${qA1.DEFAULT_UNIVERSE}`);
            if (!this.apiKey && Q)
                if (this.additionalClaims && this.additionalClaims.target_audience) {
                    let {
                        tokens: B
                    } = await this.refreshToken();
                    return {
                        headers: this.addSharedMetadataHeaders({
                            Authorization: `Bearer ${B.id_token}`
                        })
                    }
                } else {
                    if (!this.access) this.access = new ks6.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis);
                    let B;
                    if (this.hasUserScopes()) B = this.scopes;
                    else if (!A) B = this.defaultScopes;
                    let G = this.useJWTAccessWithScope || this.universeDomain !== qA1.DEFAULT_UNIVERSE,
                        Z = await this.access.getRequestHeaders(A !== null && A !== void 0 ? A : void 0, this.additionalClaims, G ? B : void 0);
                    return {
                        headers: this.addSharedMetadataHeaders(Z)
                    }
                }
            else if (this.hasAnyScopes() || this.apiKey) return super.getRequestMetadataAsync(A);
            else return {
                headers: {}
            }
        }
        async fetchIdToken(A) {
            let Q = new WaB.GoogleToken({
                iss: this.email,
                sub: this.subject,
                scope: this.scopes || this.defaultScopes,
                keyFile: this.keyFile,
                key: this.key,
                additionalClaims: {
                    target_audience: A
                },
                transporter: this.transporter
            });
            if (await Q.getToken({
                    forceRefresh: !0
                }), !Q.idToken) throw Error("Unknown error: Failed to fetch ID token");
            return Q.idToken
        }
        hasUserScopes() {
            if (!this.scopes) return !1;
            return this.scopes.length > 0
        }
        hasAnyScopes() {
            if (this.scopes && this.scopes.length > 0) return !0;
            if (this.defaultScopes && this.defaultScopes.length > 0) return !0;
            return !1
        }
        authorize(A) {
            if (A) this.authorizeAsync().then((Q) => A(null, Q), A);
            else return this.authorizeAsync()
        }
        async authorizeAsync() {
            let A = await this.refreshToken();
            if (!A) throw Error("No result returned");
            return this.credentials = A.tokens, this.credentials.refresh_token = "jwt-placeholder", this.key = this.gtoken.key, this.email = this.gtoken.iss, A.tokens
        }
        async refreshTokenNoCache(A) {
            let Q = this.createGToken(),
                G = {
                    access_token: (await Q.getToken({
                        forceRefresh: this.isTokenExpiring()
                    })).access_token,
                    token_type: "Bearer",
                    expiry_date: Q.expiresAt,
                    id_token: Q.idToken
                };
            return this.emit("tokens", G), {
                res: null,
                tokens: G
            }
        }
        createGToken() {
            if (!this.gtoken) this.gtoken = new WaB.GoogleToken({
                iss: this.email,
                sub: this.subject,
                scope: this.scopes || this.defaultScopes,
                keyFile: this.keyFile,
                key: this.key,
                additionalClaims: this.additionalClaims,
                transporter: this.transporter
            });
            return this.gtoken
        }
        fromJSON(A) {
            if (!A) throw Error("Must pass in a JSON object containing the service account auth settings.");
            if (!A.client_email) throw Error("The incoming JSON object does not contain a client_email field");
            if (!A.private_key) throw Error("The incoming JSON object does not contain a private_key field");
            this.email = A.client_email, this.key = A.private_key, this.keyId = A.private_key_id, this.projectId = A.project_id, this.quotaProjectId = A.quota_project_id, this.universeDomain = A.universe_domain || this.universeDomain
        }
        fromStream(A, Q) {
            if (Q) this.fromStreamAsync(A).then(() => Q(), Q);
            else return this.fromStreamAsync(A)
        }
        fromStreamAsync(A) {
            return new Promise((Q, B) => {
                if (!A) throw Error("Must pass in a stream containing the service account auth settings.");
                let G = "";
                A.setEncoding("utf8").on("error", B).on("data", (Z) => G += Z).on("end", () => {
                    try {
                        let Z = JSON.parse(G);
                        this.fromJSON(Z), Q()
                    } catch (Z) {
                        B(Z)
                    }
                })
            })
        }
        fromAPIKey(A) {
            if (typeof A !== "string") throw Error("Must provide an API Key string.");
            this.apiKey = A
        }
        async getCredentials() {
            if (this.key) return {
                private_key: this.key,
                client_email: this.email
            };
            else if (this.keyFile) {
                let Q = await this.createGToken().getCredentials(this.keyFile);
                return {
                    private_key: Q.privateKey,
                    client_email: Q.clientEmail
                }
            }
            throw Error("A key or a keyFile must be provided to getCredentials.")
        }
    }
    XaB.JWT = Hn1
});
var En1 = U((VaB) => {
    Object.defineProperty(VaB, "__esModule", {
        value: !0
    });
    VaB.UserRefreshClient = VaB.USER_REFRESH_ACCOUNT_TYPE = void 0;
    var xs6 = Pe(),
        vs6 = UA("querystring");
    VaB.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
    class NA1 extends xs6.OAuth2Client {
        constructor(A, Q, B, G, Z) {
            let I = A && typeof A === "object" ? A : {
                clientId: A,
                clientSecret: Q,
                refreshToken: B,
                eagerRefreshThresholdMillis: G,
                forceRefreshOnFailure: Z
            };
            super(I);
            this._refreshToken = I.refreshToken, this.credentials.refresh_token = I.refreshToken
        }
        async refreshTokenNoCache(A) {
            return super.refreshTokenNoCache(this._refreshToken)
        }
        async fetchIdToken(A) {
            return (await this.transporter.request({
                ...NA1.RETRY_CONFIG,
                url: this.endpoints.oauth2TokenUrl,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: (0, vs6.stringify)({
                    client_id: this._clientId,
                    client_secret: this._clientSecret,
                    grant_type: "refresh_token",
                    refresh_token: this._refreshToken,
                    target_audience: A
                })
            })).data.id_token
        }
        fromJSON(A) {
            if (!A) throw Error("Must pass in a JSON object containing the user refresh token");
            if (A.type !== "authorized_user") throw Error('The incoming JSON object does not have the "authorized_user" type');
            if (!A.client_id) throw Error("The incoming JSON object does not contain a client_id field");
            if (!A.client_secret) throw Error("The incoming JSON object does not contain a client_secret field");
            if (!A.refresh_token) throw Error("The incoming JSON object does not contain a refresh_token field");
            this._clientId = A.client_id, this._clientSecret = A.client_secret, this._refreshToken = A.refresh_token, this.credentials.refresh_token = A.refresh_token, this.quotaProjectId = A.quota_project_id, this.universeDomain = A.universe_domain || this.universeDomain
        }
        fromStream(A, Q) {
            if (Q) this.fromStreamAsync(A).then(() => Q(), Q);
            else return this.fromStreamAsync(A)
        }
        async fromStreamAsync(A) {
            return new Promise((Q, B) => {
                if (!A) return B(Error("Must pass in a stream containing the user refresh token."));
                let G = "";
                A.setEncoding("utf8").on("error", B).on("data", (Z) => G += Z).on("end", () => {
                    try {
                        let Z = JSON.parse(G);
                        return this.fromJSON(Z), Q()
                    } catch (Z) {
                        return B(Z)
                    }
                })
            })
        }
        static fromJSON(A) {
            let Q = new NA1;
            return Q.fromJSON(A), Q
        }
    }
    VaB.UserRefreshClient = NA1
});
var zn1 = U((HaB) => {
    Object.defineProperty(HaB, "__esModule", {
        value: !0
    });
    HaB.Impersonated = HaB.IMPERSONATED_ACCOUNT_TYPE = void 0;
    var DaB = Pe(),
        fs6 = PT(),
        hs6 = Bl();
    HaB.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
    class WqA extends DaB.OAuth2Client {
        constructor(A = {}) {
            var Q, B, G, Z, I, Y;
            super(A);
            if (this.credentials = {
                    expiry_date: 1,
                    refresh_token: "impersonated-placeholder"
                }, this.sourceClient = (Q = A.sourceClient) !== null && Q !== void 0 ? Q : new DaB.OAuth2Client, this.targetPrincipal = (B = A.targetPrincipal) !== null && B !== void 0 ? B : "", this.delegates = (G = A.delegates) !== null && G !== void 0 ? G : [], this.targetScopes = (Z = A.targetScopes) !== null && Z !== void 0 ? Z : [], this.lifetime = (I = A.lifetime) !== null && I !== void 0 ? I : 3600, !(0, hs6.originalOrCamelOptions)(A).get("universe_domain")) this.universeDomain = this.sourceClient.universeDomain;
            else if (this.sourceClient.universeDomain !== this.universeDomain) throw RangeError(`Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`);
            this.endpoint = (Y = A.endpoint) !== null && Y !== void 0 ? Y : `https://iamcredentials.${this.universeDomain}`
        }
        async sign(A) {
            await this.sourceClient.getAccessToken();
            let Q = `projects/-/serviceAccounts/${this.targetPrincipal}`,
                B = `${this.endpoint}/v1/${Q}:signBlob`,
                G = {
                    delegates: this.delegates,
                    payload: Buffer.from(A).toString("base64")
                };
            return (await this.sourceClient.request({
                ...WqA.RETRY_CONFIG,
                url: B,
                data: G,
                method: "POST"
            })).data
        }
        getTargetPrincipal() {
            return this.targetPrincipal
        }
        async refreshToken() {
            var A, Q, B, G, Z, I;
            try {
                await this.sourceClient.getAccessToken();
                let Y = "projects/-/serviceAccounts/" + this.targetPrincipal,
                    J = `${this.endpoint}/v1/${Y}:generateAccessToken`,
                    W = {
                        delegates: this.delegates,
                        scope: this.targetScopes,
                        lifetime: this.lifetime + "s"
                    },
                    X = await this.sourceClient.request({
                        ...WqA.RETRY_CONFIG,
                        url: J,
                        data: W,
                        method: "POST"
                    }),
                    F = X.data;
                return this.credentials.access_token = F.accessToken, this.credentials.expiry_date = Date.parse(F.expireTime), {
                    tokens: this.credentials,
                    res: X
                }
            } catch (Y) {
                if (!(Y instanceof Error)) throw Y;
                let J = 0,
                    W = "";
                if (Y instanceof fs6.GaxiosError) J = (B = (Q = (A = Y === null || Y === void 0 ? void 0 : Y.response) === null || A === void 0 ? void 0 : A.data) === null || Q === void 0 ? void 0 : Q.error) === null || B === void 0 ? void 0 : B.status, W = (I = (Z = (G = Y === null || Y === void 0 ? void 0 : Y.response) === null || G === void 0 ? void 0 : G.data) === null || Z === void 0 ? void 0 : Z.error) === null || I === void 0 ? void 0 : I.message;
                if (J && W) throw Y.message = `${J}: unable to impersonate: ${W}`, Y;
                else throw Y.message = `unable to impersonate: ${Y}`, Y
            }
        }
        async fetchIdToken(A, Q) {
            var B, G;
            await this.sourceClient.getAccessToken();
            let Z = `projects/-/serviceAccounts/${this.targetPrincipal}`,
                I = `${this.endpoint}/v1/${Z}:generateIdToken`,
                Y = {
                    delegates: this.delegates,
                    audience: A,
                    includeEmail: (B = Q === null || Q === void 0 ? void 0 : Q.includeEmail) !== null && B !== void 0 ? B : !0,
                    useEmailAzp: (G = Q === null || Q === void 0 ? void 0 : Q.includeEmail) !== null && G !== void 0 ? G : !0
                };
            return (await this.sourceClient.request({
                ...WqA.RETRY_CONFIG,
                url: I,
                data: Y,
                method: "POST"
            })).data.token
        }
    }
    HaB.Impersonated = WqA
});
var Un1 = U((UaB) => {
    Object.defineProperty(UaB, "__esModule", {
        value: !0
    });
    UaB.OAuthClientAuthHandler = void 0;
    UaB.getErrorFromOAuthErrorResponse = ds6;
    var EaB = UA("querystring"),
        us6 = XZA(),
        ms6 = ["PUT", "POST", "PATCH"];
    class zaB {
        constructor(A) {
            this.clientAuthentication = A, this.crypto = (0, us6.createCrypto)()
        }
        applyClientAuthenticationOptions(A, Q) {
            if (this.injectAuthenticatedHeaders(A, Q), !Q) this.injectAuthenticatedRequestBody(A)
        }
        injectAuthenticatedHeaders(A, Q) {
            var B;
            if (Q) A.headers = A.headers || {}, Object.assign(A.headers, {
                Authorization: `Bearer ${Q}}`
            });
            else if (((B = this.clientAuthentication) === null || B === void 0 ? void 0 : B.confidentialClientType) === "basic") {
                A.headers = A.headers || {};
                let G = this.clientAuthentication.clientId,
                    Z = this.clientAuthentication.clientSecret || "",
                    I = this.crypto.encodeBase64StringUtf8(`${G}:${Z}`);
                Object.assign(A.headers, {
                    Authorization: `Basic ${I}`
                })
            }
        }
        injectAuthenticatedRequestBody(A) {
            var Q;
            if (((Q = this.clientAuthentication) === null || Q === void 0 ? void 0 : Q.confidentialClientType) === "request-body") {
                let B = (A.method || "GET").toUpperCase();
                if (ms6.indexOf(B) !== -1) {
                    let G, Z = A.headers || {};
                    for (let I in Z)
                        if (I.toLowerCase() === "content-type" && Z[I]) {
                            G = Z[I].toLowerCase();
                            break
                        } if (G === "application/x-www-form-urlencoded") {
                        A.data = A.data || "";
                        let I = EaB.parse(A.data);
                        Object.assign(I, {
                            client_id: this.clientAuthentication.clientId,
                            client_secret: this.clientAuthentication.clientSecret || ""
                        }), A.data = EaB.stringify(I)
                    } else if (G === "application/json") A.data = A.data || {}, Object.assign(A.data, {
                        client_id: this.clientAuthentication.clientId,
                        client_secret: this.clientAuthentication.clientSecret || ""
                    });
                    else throw Error(`${G} content-types are not supported with ${this.clientAuthentication.confidentialClientType} client authentication`)
                } else throw Error(`${B} HTTP method does not support ${this.clientAuthentication.confidentialClientType} client authentication`)
            }
        }
        static get RETRY_CONFIG() {
            return {
                retry: !0,
                retryConfig: {
                    httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"]
                }
            }
        }
    }
    UaB.OAuthClientAuthHandler = zaB;

    function ds6(A, Q) {
        let {
            error: B,
            error_description: G,
            error_uri: Z
        } = A, I = `Error code ${B}`;
        if (typeof G < "u") I += `: ${G}`;
        if (typeof Z < "u") I += ` - ${Z}`;
        let Y = Error(I);
        if (Q) {
            let J = Object.keys(Q);
            if (Q.stack) J.push("stack");
            J.forEach((W) => {
                if (W !== "message") Object.defineProperty(Y, W, {
                    value: Q[W],
                    writable: !1,
                    enumerable: !0
                })
            })
        }
        return Y
    }
});
var wn1 = U((qaB) => {
    Object.defineProperty(qaB, "__esModule", {
        value: !0
    });
    qaB.StsCredentials = void 0;
    var ps6 = PT(),
        ls6 = UA("querystring"),
        is6 = BqA(),
        waB = Un1();
    class $n1 extends waB.OAuthClientAuthHandler {
        constructor(A, Q) {
            super(Q);
            this.tokenExchangeEndpoint = A, this.transporter = new is6.DefaultTransporter
        }
        async exchangeToken(A, Q, B) {
            var G, Z, I;
            let Y = {
                grant_type: A.grantType,
                resource: A.resource,
                audience: A.audience,
                scope: (G = A.scope) === null || G === void 0 ? void 0 : G.join(" "),
                requested_token_type: A.requestedTokenType,
                subject_token: A.subjectToken,
                subject_token_type: A.subjectTokenType,
                actor_token: (Z = A.actingParty) === null || Z === void 0 ? void 0 : Z.actorToken,
                actor_token_type: (I = A.actingParty) === null || I === void 0 ? void 0 : I.actorTokenType,
                options: B && JSON.stringify(B)
            };
            Object.keys(Y).forEach((X) => {
                if (typeof Y[X] > "u") delete Y[X]
            });
            let J = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            Object.assign(J, Q || {});
            let W = {
                ...$n1.RETRY_CONFIG,
                url: this.tokenExchangeEndpoint.toString(),
                method: "POST",
                headers: J,
                data: ls6.stringify(Y),
                responseType: "json"
            };
            this.applyClientAuthenticationOptions(W);
            try {
                let X = await this.transporter.request(W),
                    F = X.data;
                return F.res = X, F
            } catch (X) {
                if (X instanceof ps6.GaxiosError && X.response) throw (0, waB.getErrorFromOAuthErrorResponse)(X.response.data, X);
                throw X
            }
        }
    }
    qaB.StsCredentials = $n1
});
var Zl = U((cV) => {
    var qn1 = cV && cV.__classPrivateFieldGet || function(A, Q, B, G) {
            if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
            if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
        },
        LaB = cV && cV.__classPrivateFieldSet || function(A, Q, B, G, Z) {
            if (G === "m") throw TypeError("Private method is not writable");
            if (G === "a" && !Z) throw TypeError("Private accessor was defined without a setter");
            if (typeof Q === "function" ? A !== Q || !Z : !Q.has(A)) throw TypeError("Cannot write private member to an object whose class did not declare it");
            return G === "a" ? Z.call(A, B) : Z ? Z.value = B : Q.set(A, B), B
        },
        Nn1, zZA, OaB;
    Object.defineProperty(cV, "__esModule", {
        value: !0
    });
    cV.BaseExternalAccountClient = cV.DEFAULT_UNIVERSE = cV.CLOUD_RESOURCE_MANAGER = cV.EXTERNAL_ACCOUNT_TYPE = cV.EXPIRATION_TIME_OFFSET = void 0;
    var ns6 = UA("stream"),
        as6 = Zk(),
        ss6 = wn1(),
        MaB = Bl(),
        rs6 = "urn:ietf:params:oauth:grant-type:token-exchange",
        os6 = "urn:ietf:params:oauth:token-type:access_token",
        Ln1 = "https://www.googleapis.com/auth/cloud-platform",
        ts6 = 3600;
    cV.EXPIRATION_TIME_OFFSET = 300000;
    cV.EXTERNAL_ACCOUNT_TYPE = "external_account";
    cV.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
    var es6 = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+",
        Ar6 = "https://sts.{universeDomain}/v1/token",
        Qr6 = mi1(),
        Br6 = Zk();
    Object.defineProperty(cV, "DEFAULT_UNIVERSE", {
        enumerable: !0,
        get: function() {
            return Br6.DEFAULT_UNIVERSE
        }
    });
    class LA1 extends as6.AuthClient {
        constructor(A, Q) {
            var B;
            super({
                ...A,
                ...Q
            });
            Nn1.add(this), zZA.set(this, null);
            let G = (0, MaB.originalOrCamelOptions)(A),
                Z = G.get("type");
            if (Z && Z !== cV.EXTERNAL_ACCOUNT_TYPE) throw Error(`Expected "${cV.EXTERNAL_ACCOUNT_TYPE}" type but received "${A.type}"`);
            let I = G.get("client_id"),
                Y = G.get("client_secret"),
                J = (B = G.get("token_url")) !== null && B !== void 0 ? B : Ar6.replace("{universeDomain}", this.universeDomain),
                W = G.get("subject_token_type"),
                X = G.get("workforce_pool_user_project"),
                F = G.get("service_account_impersonation_url"),
                V = G.get("service_account_impersonation"),
                K = (0, MaB.originalOrCamelOptions)(V).get("token_lifetime_seconds");
            if (this.cloudResourceManagerURL = new URL(G.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`), I) this.clientAuth = {
                confidentialClientType: "basic",
                clientId: I,
                clientSecret: Y
            };
            this.stsCredential = new ss6.StsCredentials(J, this.clientAuth), this.scopes = G.get("scopes") || [Ln1], this.cachedAccessToken = null, this.audience = G.get("audience"), this.subjectTokenType = W, this.workforcePoolUserProject = X;
            let D = new RegExp(es6);
            if (this.workforcePoolUserProject && !this.audience.match(D)) throw Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
            if (this.serviceAccountImpersonationUrl = F, this.serviceAccountImpersonationLifetime = K, this.serviceAccountImpersonationLifetime) this.configLifetimeRequested = !0;
            else this.configLifetimeRequested = !1, this.serviceAccountImpersonationLifetime = ts6;
            this.projectNumber = this.getProjectNumber(this.audience), this.supplierContext = {
                audience: this.audience,
                subjectTokenType: this.subjectTokenType,
                transporter: this.transporter
            }
        }
        getServiceAccountEmail() {
            var A;
            if (this.serviceAccountImpersonationUrl) {
                if (this.serviceAccountImpersonationUrl.length > 256) throw RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
                let B = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl);
                return ((A = B === null || B === void 0 ? void 0 : B.groups) === null || A === void 0 ? void 0 : A.email) || null
            }
            return null
        }
        setCredentials(A) {
            super.setCredentials(A), this.cachedAccessToken = A
        }
        async getAccessToken() {
            if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
            return {
                token: this.cachedAccessToken.access_token,
                res: this.cachedAccessToken.res
            }
        }
        async getRequestHeaders() {
            let Q = {
                Authorization: `Bearer ${(await this.getAccessToken()).token}`
            };
            return this.addSharedMetadataHeaders(Q)
        }
        request(A, Q) {
            if (Q) this.requestAsync(A).then((B) => Q(null, B), (B) => {
                return Q(B, B.response)
            });
            else return this.requestAsync(A)
        }
        async getProjectId() {
            let A = this.projectNumber || this.workforcePoolUserProject;
            if (this.projectId) return this.projectId;
            else if (A) {
                let Q = await this.getRequestHeaders(),
                    B = await this.transporter.request({
                        ...LA1.RETRY_CONFIG,
                        headers: Q,
                        url: `${this.cloudResourceManagerURL.toString()}${A}`,
                        responseType: "json"
                    });
                return this.projectId = B.data.projectId, this.projectId
            }
            return null
        }
        async requestAsync(A, Q = !1) {
            let B;
            try {
                let G = await this.getRequestHeaders();
                if (A.headers = A.headers || {}, G && G["x-goog-user-project"]) A.headers["x-goog-user-project"] = G["x-goog-user-project"];
                if (G && G.Authorization) A.headers.Authorization = G.Authorization;
                B = await this.transporter.request(A)
            } catch (G) {
                let Z = G.response;
                if (Z) {
                    let I = Z.status,
                        Y = Z.config.data instanceof ns6.Readable;
                    if (!Q && (I === 401 || I === 403) && !Y && this.forceRefreshOnFailure) return await this.refreshAccessTokenAsync(), await this.requestAsync(A, !0)
                }
                throw G
            }
            return B
        }
        async refreshAccessTokenAsync() {
            LaB(this, zZA, qn1(this, zZA, "f") || qn1(this, Nn1, "m", OaB).call(this), "f");
            try {
                return await qn1(this, zZA, "f")
            } finally {
                LaB(this, zZA, null, "f")
            }
        }
        getProjectNumber(A) {
            let Q = A.match(/\/projects\/([^/]+)/);
            if (!Q) return null;
            return Q[1]
        }
        async getImpersonatedAccessToken(A) {
            let Q = {
                    ...LA1.RETRY_CONFIG,
                    url: this.serviceAccountImpersonationUrl,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${A}`
                    },
                    data: {
                        scope: this.getScopesArray(),
                        lifetime: this.serviceAccountImpersonationLifetime + "s"
                    },
                    responseType: "json"
                },
                B = await this.transporter.request(Q),
                G = B.data;
            return {
                access_token: G.accessToken,
                expiry_date: new Date(G.expireTime).getTime(),
                res: B
            }
        }
        isExpired(A) {
            let Q = new Date().getTime();
            return A.expiry_date ? Q >= A.expiry_date - this.eagerRefreshThresholdMillis : !1
        }
        getScopesArray() {
            if (typeof this.scopes === "string") return [this.scopes];
            return this.scopes || [Ln1]
        }
        getMetricsHeaderValue() {
            let A = process.version.replace(/^v/, ""),
                Q = this.serviceAccountImpersonationUrl !== void 0,
                B = this.credentialSourceType ? this.credentialSourceType : "unknown";
            return `gl-node/${A} auth/${Qr6.version} google-byoid-sdk source/${B} sa-impersonation/${Q} config-lifetime/${this.configLifetimeRequested}`
        }
    }
    cV.BaseExternalAccountClient = LA1;
    zZA = new WeakMap, Nn1 = new WeakSet, OaB = async function() {
        let Q = await this.retrieveSubjectToken(),
            B = {
                grantType: rs6,
                audience: this.audience,
                requestedTokenType: os6,
                subjectToken: Q,
                subjectTokenType: this.subjectTokenType,
                scope: this.serviceAccountImpersonationUrl ? [Ln1] : this.getScopesArray()
            },
            G = !this.clientAuth && this.workforcePoolUserProject ? {
                userProject: this.workforcePoolUserProject
            } : void 0,
            Z = {
                "x-goog-api-client": this.getMetricsHeaderValue()
            },
            I = await this.stsCredential.exchangeToken(B, Z, G);
        if (this.serviceAccountImpersonationUrl) this.cachedAccessToken = await this.getImpersonatedAccessToken(I.access_token);
        else if (I.expires_in) this.cachedAccessToken = {
            access_token: I.access_token,
            expiry_date: new Date().getTime() + I.expires_in * 1000,
            res: I.res
        };
        else this.cachedAccessToken = {
            access_token: I.access_token,
            res: I.res
        };
        return this.credentials = {}, Object.assign(this.credentials, this.cachedAccessToken), delete this.credentials.res, this.emit("tokens", {
            refresh_token: null,
            expiry_date: this.cachedAccessToken.expiry_date,
            access_token: this.cachedAccessToken.access_token,
            token_type: "Bearer",
            id_token: null
        }), this.cachedAccessToken
    }
});
var jaB = U((TaB) => {
    var Mn1, On1, Rn1;
    Object.defineProperty(TaB, "__esModule", {
        value: !0
    });
    TaB.FileSubjectTokenSupplier = void 0;
    var Tn1 = UA("util"),
        Pn1 = UA("fs"),
        Gr6 = (0, Tn1.promisify)((Mn1 = Pn1.readFile) !== null && Mn1 !== void 0 ? Mn1 : () => {}),
        Zr6 = (0, Tn1.promisify)((On1 = Pn1.realpath) !== null && On1 !== void 0 ? On1 : () => {}),
        Ir6 = (0, Tn1.promisify)((Rn1 = Pn1.lstat) !== null && Rn1 !== void 0 ? Rn1 : () => {});
    class RaB {
        constructor(A) {
            this.filePath = A.filePath, this.formatType = A.formatType, this.subjectTokenFieldName = A.subjectTokenFieldName
        }
        async getSubjectToken(A) {
            let Q = this.filePath;
            try {
                if (Q = await Zr6(Q), !(await Ir6(Q)).isFile()) throw Error()
            } catch (Z) {
                if (Z instanceof Error) Z.message = `The file at ${Q} does not exist, or it is not a file. ${Z.message}`;
                throw Z
            }
            let B, G = await Gr6(Q, {
                encoding: "utf8"
            });
            if (this.formatType === "text") B = G;
            else if (this.formatType === "json" && this.subjectTokenFieldName) B = JSON.parse(G)[this.subjectTokenFieldName];
            if (!B) throw Error("Unable to parse the subject_token from the credential_source file");
            return B
        }
    }
    TaB.FileSubjectTokenSupplier = RaB
});
var yaB = U((_aB) => {
    Object.defineProperty(_aB, "__esModule", {
        value: !0
    });
    _aB.UrlSubjectTokenSupplier = void 0;
    class SaB {
        constructor(A) {
            this.url = A.url, this.formatType = A.formatType, this.subjectTokenFieldName = A.subjectTokenFieldName, this.headers = A.headers, this.additionalGaxiosOptions = A.additionalGaxiosOptions
        }
        async getSubjectToken(A) {
            let Q = {
                    ...this.additionalGaxiosOptions,
                    url: this.url,
                    method: "GET",
                    headers: this.headers,
                    responseType: this.formatType
                },
                B;
            if (this.formatType === "text") B = (await A.transporter.request(Q)).data;
            else if (this.formatType === "json" && this.subjectTokenFieldName) B = (await A.transporter.request(Q)).data[this.subjectTokenFieldName];
            if (!B) throw Error("Unable to parse the subject_token from the credential_source URL");
            return B
        }
    }
    _aB.UrlSubjectTokenSupplier = SaB
});
var _n1 = U((xaB) => {
    Object.defineProperty(xaB, "__esModule", {
        value: !0
    });
    xaB.IdentityPoolClient = void 0;
    var Yr6 = Zl(),
        jn1 = Bl(),
        Jr6 = jaB(),
        Wr6 = yaB();
    class Sn1 extends Yr6.BaseExternalAccountClient {
        constructor(A, Q) {
            super(A, Q);
            let B = (0, jn1.originalOrCamelOptions)(A),
                G = B.get("credential_source"),
                Z = B.get("subject_token_supplier");
            if (!G && !Z) throw Error("A credential source or subject token supplier must be specified.");
            if (G && Z) throw Error("Only one of credential source or subject token supplier can be specified.");
            if (Z) this.subjectTokenSupplier = Z, this.credentialSourceType = "programmatic";
            else {
                let I = (0, jn1.originalOrCamelOptions)(G),
                    Y = (0, jn1.originalOrCamelOptions)(I.get("format")),
                    J = Y.get("type") || "text",
                    W = Y.get("subject_token_field_name");
                if (J !== "json" && J !== "text") throw Error(`Invalid credential_source format "${J}"`);
                if (J === "json" && !W) throw Error("Missing subject_token_field_name for JSON credential_source format");
                let X = I.get("file"),
                    F = I.get("url"),
                    V = I.get("headers");
                if (X && F) throw Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
                else if (X && !F) this.credentialSourceType = "file", this.subjectTokenSupplier = new Jr6.FileSubjectTokenSupplier({
                    filePath: X,
                    formatType: J,
                    subjectTokenFieldName: W
                });
                else if (!X && F) this.credentialSourceType = "url", this.subjectTokenSupplier = new Wr6.UrlSubjectTokenSupplier({
                    url: F,
                    formatType: J,
                    subjectTokenFieldName: W,
                    headers: V,
                    additionalGaxiosOptions: Sn1.RETRY_CONFIG
                });
                else throw Error('No valid Identity Pool "credential_source" provided, must be either file or url.')
            }
        }
        async retrieveSubjectToken() {
            return this.subjectTokenSupplier.getSubjectToken(this.supplierContext)
        }
    }
    xaB.IdentityPoolClient = Sn1
});
var kn1 = U((gaB) => {
    Object.defineProperty(gaB, "__esModule", {
        value: !0
    });
    gaB.AwsRequestSigner = void 0;
    var faB = XZA(),
        baB = "AWS4-HMAC-SHA256",
        Xr6 = "aws4_request";
    class haB {
        constructor(A, Q) {
            this.getCredentials = A, this.region = Q, this.crypto = (0, faB.createCrypto)()
        }
        async getRequestOptions(A) {
            if (!A.url) throw Error('"url" is required in "amzOptions"');
            let Q = typeof A.data === "object" ? JSON.stringify(A.data) : A.data,
                B = A.url,
                G = A.method || "GET",
                Z = A.body || Q,
                I = A.headers,
                Y = await this.getCredentials(),
                J = new URL(B),
                W = await Vr6({
                    crypto: this.crypto,
                    host: J.host,
                    canonicalUri: J.pathname,
                    canonicalQuerystring: J.search.substr(1),
                    method: G,
                    region: this.region,
                    securityCredentials: Y,
                    requestPayload: Z,
                    additionalAmzHeaders: I
                }),
                X = Object.assign(W.amzDate ? {
                    "x-amz-date": W.amzDate
                } : {}, {
                    Authorization: W.authorizationHeader,
                    host: J.host
                }, I || {});
            if (Y.token) Object.assign(X, {
                "x-amz-security-token": Y.token
            });
            let F = {
                url: B,
                method: G,
                headers: X
            };
            if (typeof Z < "u") F.body = Z;
            return F
        }
    }
    gaB.AwsRequestSigner = haB;
    async function XqA(A, Q, B) {
        return await A.signWithHmacSha256(Q, B)
    }
    async function Fr6(A, Q, B, G, Z) {
        let I = await XqA(A, `AWS4${Q}`, B),
            Y = await XqA(A, I, G),
            J = await XqA(A, Y, Z);
        return await XqA(A, J, "aws4_request")
    }
    async function Vr6(A) {
        let Q = A.additionalAmzHeaders || {},
            B = A.requestPayload || "",
            G = A.host.split(".")[0],
            Z = new Date,
            I = Z.toISOString().replace(/[-:]/g, "").replace(/\.[0-9]+/, ""),
            Y = Z.toISOString().replace(/[-]/g, "").replace(/T.*/, ""),
            J = {};
        if (Object.keys(Q).forEach((N) => {
                J[N.toLowerCase()] = Q[N]
            }), A.securityCredentials.token) J["x-amz-security-token"] = A.securityCredentials.token;
        let W = Object.assign({
                host: A.host
            }, J.date ? {} : {
                "x-amz-date": I
            }, J),
            X = "",
            F = Object.keys(W).sort();
        F.forEach((N) => {
            X += `${N}:${W[N]}
`
        });
        let V = F.join(";"),
            K = await A.crypto.sha256DigestHex(B),
            D = `${A.method}
${A.canonicalUri}
${A.canonicalQuerystring}
${X}
${V}
${K}`,
            H = `${Y}/${A.region}/${G}/${Xr6}`,
            C = `${baB}
${I}
${H}
` + await A.crypto.sha256DigestHex(D),
            E = await Fr6(A.crypto, A.securityCredentials.secretAccessKey, Y, A.region, G),
            z = await XqA(A.crypto, E, C),
            w = `${baB} Credential=${A.securityCredentials.accessKeyId}/${H}, SignedHeaders=${V}, Signature=${(0,faB.fromArrayBufferToHex)(z)}`;
        return {
            amzDate: J.date ? void 0 : I,
            authorizationHeader: w,
            canonicalQuerystring: A.canonicalQuerystring
        }
    }
});
var paB = U((UZA) => {
    var Rf = UZA && UZA.__classPrivateFieldGet || function(A, Q, B, G) {
            if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
            if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
        },
        xT, yn1, maB, daB, MA1, xn1;
    Object.defineProperty(UZA, "__esModule", {
        value: !0
    });
    UZA.DefaultAwsSecurityCredentialsSupplier = void 0;
    class caB {
        constructor(A) {
            xT.add(this), this.regionUrl = A.regionUrl, this.securityCredentialsUrl = A.securityCredentialsUrl, this.imdsV2SessionTokenUrl = A.imdsV2SessionTokenUrl, this.additionalGaxiosOptions = A.additionalGaxiosOptions
        }
        async getAwsRegion(A) {
            if (Rf(this, xT, "a", MA1)) return Rf(this, xT, "a", MA1);
            let Q = {};
            if (!Rf(this, xT, "a", MA1) && this.imdsV2SessionTokenUrl) Q["x-aws-ec2-metadata-token"] = await Rf(this, xT, "m", yn1).call(this, A.transporter);
            if (!this.regionUrl) throw Error('Unable to determine AWS region due to missing "options.credential_source.region_url"');
            let B = {
                    ...this.additionalGaxiosOptions,
                    url: this.regionUrl,
                    method: "GET",
                    responseType: "text",
                    headers: Q
                },
                G = await A.transporter.request(B);
            return G.data.substr(0, G.data.length - 1)
        }
        async getAwsSecurityCredentials(A) {
            if (Rf(this, xT, "a", xn1)) return Rf(this, xT, "a", xn1);
            let Q = {};
            if (this.imdsV2SessionTokenUrl) Q["x-aws-ec2-metadata-token"] = await Rf(this, xT, "m", yn1).call(this, A.transporter);
            let B = await Rf(this, xT, "m", maB).call(this, Q, A.transporter),
                G = await Rf(this, xT, "m", daB).call(this, B, Q, A.transporter);
            return {
                accessKeyId: G.AccessKeyId,
                secretAccessKey: G.SecretAccessKey,
                token: G.Token
            }
        }
    }
    UZA.DefaultAwsSecurityCredentialsSupplier = caB;
    xT = new WeakSet, yn1 = async function(Q) {
        let B = {
            ...this.additionalGaxiosOptions,
            url: this.imdsV2SessionTokenUrl,
            method: "PUT",
            responseType: "text",
            headers: {
                "x-aws-ec2-metadata-token-ttl-seconds": "300"
            }
        };
        return (await Q.request(B)).data
    }, maB = async function(Q, B) {
        if (!this.securityCredentialsUrl) throw Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
        let G = {
            ...this.additionalGaxiosOptions,
            url: this.securityCredentialsUrl,
            method: "GET",
            responseType: "text",
            headers: Q
        };
        return (await B.request(G)).data
    }, daB = async function(Q, B, G) {
        return (await G.request({
            ...this.additionalGaxiosOptions,
            url: `${this.securityCredentialsUrl}/${Q}`,
            responseType: "json",
            headers: B
        })).data
    }, MA1 = function() {
        return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null
    }, xn1 = function() {
        if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) return {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            token: process.env.AWS_SESSION_TOKEN
        };
        return null
    }
});
var vn1 = U(($ZA) => {
    var Kr6 = $ZA && $ZA.__classPrivateFieldGet || function(A, Q, B, G) {
            if (B === "a" && !G) throw TypeError("Private accessor was defined without a getter");
            if (typeof Q === "function" ? A !== Q || !G : !Q.has(A)) throw TypeError("Cannot read private member from an object whose class did not declare it");
            return B === "m" ? G : B === "a" ? G.call(A) : G ? G.value : Q.get(A)
        },
        OA1, iaB;
    Object.defineProperty($ZA, "__esModule", {
        value: !0
    });
    $ZA.AwsClient = void 0;
    var Dr6 = kn1(),
        Hr6 = Zl(),
        Cr6 = paB(),
        laB = Bl();
    class FqA extends Hr6.BaseExternalAccountClient {
        constructor(A, Q) {
            super(A, Q);
            let B = (0, laB.originalOrCamelOptions)(A),
                G = B.get("credential_source"),
                Z = B.get("aws_security_credentials_supplier");
            if (!G && !Z) throw Error("A credential source or AWS security credentials supplier must be specified.");
            if (G && Z) throw Error("Only one of credential source or AWS security credentials supplier can be specified.");
            if (Z) this.awsSecurityCredentialsSupplier = Z, this.regionalCredVerificationUrl = Kr6(OA1, OA1, "f", iaB), this.credentialSourceType = "programmatic";
            else {
                let I = (0, laB.originalOrCamelOptions)(G);
                this.environmentId = I.get("environment_id");
                let Y = I.get("region_url"),
                    J = I.get("url"),
                    W = I.get("imdsv2_session_token_url");
                this.awsSecurityCredentialsSupplier = new Cr6.DefaultAwsSecurityCredentialsSupplier({
                    regionUrl: Y,
                    securityCredentialsUrl: J,
                    imdsV2SessionTokenUrl: W
                }), this.regionalCredVerificationUrl = I.get("regional_cred_verification_url"), this.credentialSourceType = "aws", this.validateEnvironmentId()
            }
            this.awsRequestSigner = null, this.region = ""
        }
        validateEnvironmentId() {
            var A;
            let Q = (A = this.environmentId) === null || A === void 0 ? void 0 : A.match(/^(aws)(\d+)$/);
            if (!Q || !this.regionalCredVerificationUrl) throw Error('No valid AWS "credential_source" provided');
            else if (parseInt(Q[2], 10) !== 1) throw Error(`aws version "${Q[2]}" is not supported in the current build.`)
        }
        async retrieveSubjectToken() {
            if (!this.awsRequestSigner) this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext), this.awsRequestSigner = new Dr6.AwsRequestSigner(async () => {
                return this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext)
            }, this.region);
            let A = await this.awsRequestSigner.getRequestOptions({
                    ...OA1.RETRY_CONFIG,
                    url: this.regionalCredVerificationUrl.replace("{region}", this.region),
                    method: "POST"
                }),
                Q = [],
                B = Object.assign({
                    "x-goog-cloud-target-resource": this.audience
                }, A.headers);
            for (let G in B) Q.push({
                key: G,
                value: B[G]
            });
            return encodeURIComponent(JSON.stringify({
                url: A.url,
                method: A.method,
                headers: Q
            }))
        }
    }
    $ZA.AwsClient = FqA;
    OA1 = FqA;
    iaB = {
        value: "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15"
    };
    FqA.AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
    FqA.AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254"
});
var cn1 = U((saB) => {
    Object.defineProperty(saB, "__esModule", {
        value: !0
    });
    saB.InvalidSubjectTokenError = saB.InvalidMessageFieldError = saB.InvalidCodeFieldError = saB.InvalidTokenTypeFieldError = saB.InvalidExpirationTimeFieldError = saB.InvalidSuccessFieldError = saB.InvalidVersionFieldError = saB.ExecutableResponseError = saB.ExecutableResponse = void 0;
    var RA1 = "urn:ietf:params:oauth:token-type:saml2",
        bn1 = "urn:ietf:params:oauth:token-type:id_token",
        fn1 = "urn:ietf:params:oauth:token-type:jwt";
    class naB {
        constructor(A) {
            if (!A.version) throw new hn1("Executable response must contain a 'version' field.");
            if (A.success === void 0) throw new gn1("Executable response must contain a 'success' field.");
            if (this.version = A.version, this.success = A.success, this.success) {
                if (this.expirationTime = A.expiration_time, this.tokenType = A.token_type, this.tokenType !== RA1 && this.tokenType !== bn1 && this.tokenType !== fn1) throw new un1(`Executable response must contain a 'token_type' field when successful and it must be one of ${bn1}, ${fn1}, or ${RA1}.`);
                if (this.tokenType === RA1) {
                    if (!A.saml_response) throw new TA1(`Executable response must contain a 'saml_response' field when token_type=${RA1}.`);
                    this.subjectToken = A.saml_response
                } else {
                    if (!A.id_token) throw new TA1(`Executable response must contain a 'id_token' field when token_type=${bn1} or ${fn1}.`);
                    this.subjectToken = A.id_token
                }
            } else {
                if (!A.code) throw new mn1("Executable response must contain a 'code' field when unsuccessful.");
                if (!A.message) throw new dn1("Executable response must contain a 'message' field when unsuccessful.");
                this.errorCode = A.code, this.errorMessage = A.message
            }
        }
        isValid() {
            return !this.isExpired() && this.success
        }
        isExpired() {
            return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1000)
        }
    }
    saB.ExecutableResponse = naB;
    class Tf extends Error {
        constructor(A) {
            super(A);
            Object.setPrototypeOf(this, new.target.prototype)
        }
    }
    saB.ExecutableResponseError = Tf;
    class hn1 extends Tf {}
    saB.InvalidVersionFieldError = hn1;
    class gn1 extends Tf {}
    saB.InvalidSuccessFieldError = gn1;
    class aaB extends Tf {}
    saB.InvalidExpirationTimeFieldError = aaB;
    class un1 extends Tf {}
    saB.InvalidTokenTypeFieldError = un1;
    class mn1 extends Tf {}
    saB.InvalidCodeFieldError = mn1;
    class dn1 extends Tf {}
    saB.InvalidMessageFieldError = dn1;
    class TA1 extends Tf {}
    saB.InvalidSubjectTokenError = TA1
});
var eaB = U((oaB) => {
    Object.defineProperty(oaB, "__esModule", {
        value: !0
    });
    oaB.PluggableAuthHandler = void 0;
    var Mr6 = PA1(),
        je = cn1(),
        Or6 = UA("child_process"),
        pn1 = UA("fs");
    class ln1 {
        constructor(A) {
            if (!A.command) throw Error("No command provided.");
            if (this.commandComponents = ln1.parseCommand(A.command), this.timeoutMillis = A.timeoutMillis, !this.timeoutMillis) throw Error("No timeoutMillis provided.");
            this.outputFile = A.outputFile
        }
        retrieveResponseFromExecutable(A) {
            return new Promise((Q, B) => {
                let G = Or6.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
                        env: {
                            ...process.env,
                            ...Object.fromEntries(A)
                        }
                    }),
                    Z = "";
                G.stdout.on("data", (Y) => {
                    Z += Y
                }), G.stderr.on("data", (Y) => {
                    Z += Y
                });
                let I = setTimeout(() => {
                    return G.removeAllListeners(), G.kill(), B(Error("The executable failed to finish within the timeout specified."))
                }, this.timeoutMillis);
                G.on("close", (Y) => {
                    if (clearTimeout(I), Y === 0) try {
                        let J = JSON.parse(Z),
                            W = new je.ExecutableResponse(J);
                        return Q(W)
                    } catch (J) {
                        if (J instanceof je.ExecutableResponseError) return B(J);
                        return B(new je.ExecutableResponseError(`The executable returned an invalid response: ${Z}`))
                    } else return B(new Mr6.ExecutableError(Z, Y.toString()))
                })
            })
        }
        async retrieveCachedResponse() {
            if (!this.outputFile || this.outputFile.length === 0) return;
            let A;
            try {
                A = await pn1.promises.realpath(this.outputFile)
            } catch (B) {
                return
            }
            if (!(await pn1.promises.lstat(A)).isFile()) return;
            let Q = await pn1.promises.readFile(A, {
                encoding: "utf8"
            });
            if (Q === "") return;
            try {
                let B = JSON.parse(Q);
                if (new je.ExecutableResponse(B).isValid()) return new je.ExecutableResponse(B);
                return
            } catch (B) {
                if (B instanceof je.ExecutableResponseError) throw B;
                throw new je.ExecutableResponseError(`The output file contained an invalid response: ${Q}`)
            }
        }
        static parseCommand(A) {
            let Q = A.match(/(?:[^\s"]+|"[^"]*")+/g);
            if (!Q) throw Error(`Provided command: "${A}" could not be parsed.`);
            for (let B = 0; B < Q.length; B++)
                if (Q[B][0] === '"' && Q[B].slice(-1) === '"') Q[B] = Q[B].slice(1, -1);
            return Q
        }
    }
    oaB.PluggableAuthHandler = ln1
});
var PA1 = U((ZsB) => {
    Object.defineProperty(ZsB, "__esModule", {
        value: !0
    });
    ZsB.PluggableAuthClient = ZsB.ExecutableError = void 0;
    var Rr6 = Zl(),
        Tr6 = cn1(),
        Pr6 = eaB();
    class in1 extends Error {
        constructor(A, Q) {
            super(`The executable failed with exit code: ${Q} and error message: ${A}.`);
            this.code = Q, Object.setPrototypeOf(this, new.target.prototype)
        }
    }
    ZsB.ExecutableError = in1;
    var jr6 = 30000,
        AsB = 5000,
        QsB = 120000,
        Sr6 = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES",
        BsB = 1;
    class GsB extends Rr6.BaseExternalAccountClient {
        constructor(A, Q) {
            super(A, Q);
            if (!A.credential_source.executable) throw Error('No valid Pluggable Auth "credential_source" provided.');
            if (this.command = A.credential_source.executable.command, !this.command) throw Error('No valid Pluggable Auth "credential_source" provided.');
            if (A.credential_source.executable.timeout_millis === void 0) this.timeoutMillis = jr6;
            else if (this.timeoutMillis = A.credential_source.executable.timeout_millis, this.timeoutMillis < AsB || this.timeoutMillis > QsB) throw Error(`Timeout must be between ${AsB} and ${QsB} milliseconds.`);
            this.outputFile = A.credential_source.executable.output_file, this.handler = new Pr6.PluggableAuthHandler({
                command: this.command,
                timeoutMillis: this.timeoutMillis,
                outputFile: this.outputFile
            }), this.credentialSourceType = "executable"
        }
        async retrieveSubjectToken() {
            if (process.env[Sr6] !== "1") throw Error("Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.");
            let A = void 0;
            if (this.outputFile) A = await this.handler.retrieveCachedResponse();
            if (!A) {
                let Q = new Map;
                if (Q.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience), Q.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType), Q.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0"), this.outputFile) Q.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile);
                let B = this.getServiceAccountEmail();
                if (B) Q.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", B);
                A = await this.handler.retrieveResponseFromExecutable(Q)
            }
            if (A.version > BsB) throw Error(`Version of executable is not currently supported, maximum supported version is ${BsB}.`);
            if (!A.success) throw new in1(A.errorMessage, A.errorCode);
            if (this.outputFile) {
                if (!A.expirationTime) throw new Tr6.InvalidExpirationTimeFieldError("The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.")
            }
            if (A.isExpired()) throw Error("Executable response is expired.");
            return A.subjectToken
        }
    }
    ZsB.PluggableAuthClient = GsB
});
var nn1 = U((JsB) => {
    Object.defineProperty(JsB, "__esModule", {
        value: !0
    });
    JsB.ExternalAccountClient = void 0;
    var kr6 = Zl(),
        yr6 = _n1(),
        xr6 = vn1(),
        vr6 = PA1();
    class YsB {
        constructor() {
            throw Error("ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()")
        }
        static fromJSON(A, Q) {
            var B, G;
            if (A && A.type === kr6.EXTERNAL_ACCOUNT_TYPE)
                if ((B = A.credential_source) === null || B === void 0 ? void 0 : B.environment_id) return new xr6.AwsClient(A, Q);
                else if ((G = A.credential_source) === null || G === void 0 ? void 0 : G.executable) return new vr6.PluggableAuthClient(A, Q);
            else return new yr6.IdentityPoolClient(A, Q);
            else return null
        }
    }
    JsB.ExternalAccountClient = YsB
});
var DsB = U((VsB) => {
    Object.defineProperty(VsB, "__esModule", {
        value: !0
    });
    VsB.ExternalAccountAuthorizedUserClient = VsB.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
    var br6 = Zk(),
        XsB = Un1(),
        fr6 = PT(),
        hr6 = UA("stream"),
        gr6 = Zl();
    VsB.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
    var ur6 = "https://sts.{universeDomain}/v1/oauthtoken";
    class an1 extends XsB.OAuthClientAuthHandler {
        constructor(A, Q, B) {
            super(B);
            this.url = A, this.transporter = Q
        }
        async refreshToken(A, Q) {
            let B = new URLSearchParams({
                    grant_type: "refresh_token",
                    refresh_token: A
                }),
                G = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    ...Q
                },
                Z = {
                    ...an1.RETRY_CONFIG,
                    url: this.url,
                    method: "POST",
                    headers: G,
                    data: B.toString(),
                    responseType: "json"
                };
            this.applyClientAuthenticationOptions(Z);
            try {
                let I = await this.transporter.request(Z),
                    Y = I.data;
                return Y.res = I, Y
            } catch (I) {
                if (I instanceof fr6.GaxiosError && I.response) throw (0, XsB.getErrorFromOAuthErrorResponse)(I.response.data, I);
                throw I
            }
        }
    }
    class FsB extends br6.AuthClient {
        constructor(A, Q) {
            var B;
            super({
                ...A,
                ...Q
            });
            if (A.universe_domain) this.universeDomain = A.universe_domain;
            this.refreshToken = A.refresh_token;
            let G = {
                confidentialClientType: "basic",
                clientId: A.client_id,
                clientSecret: A.client_secret
            };
            if (this.externalAccountAuthorizedUserHandler = new an1((B = A.token_url) !== null && B !== void 0 ? B : ur6.replace("{universeDomain}", this.universeDomain), this.transporter, G), this.cachedAccessToken = null, this.quotaProjectId = A.quota_project_id, typeof(Q === null || Q === void 0 ? void 0 : Q.eagerRefreshThresholdMillis) !== "number") this.eagerRefreshThresholdMillis = gr6.EXPIRATION_TIME_OFFSET;
            else this.eagerRefreshThresholdMillis = Q.eagerRefreshThresholdMillis;
            this.forceRefreshOnFailure = !!(Q === null || Q === void 0 ? void 0 : Q.forceRefreshOnFailure)
        }
        async getAccessToken() {
            if (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) await this.refreshAccessTokenAsync();
            return {
                token: this.cachedAccessToken.access_token,
                res: this.cachedAccessToken.res
            }
        }
        async getRequestHeaders() {
            let Q = {
                Authorization: `Bearer ${(await this.getAccessToken()).token}`
            };