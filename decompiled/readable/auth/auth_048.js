/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: auth_048.js
 * 处理时间: 2025-12-09T03:41:36.893Z
 * 变量映射: 7 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 48/61
 * Lines: 251064 - 252563 (1500 lines)
 * Original file: cli.js
 */

    return Cs1
}
var Cs1;
var YeB = lazyLoader(() => {
    _f()
});

function WeB(A, Q, B, G) {
    let Z = Te6(Q, B, G),
        I = !1,
        Y = JeB(A, Z);
    if (Q.path) {
        let X = JeB(Q.path, Z);
        if (Q.path === "/{nextLink}" && X.startsWith("/")) X = X.substring(1);
        if (Pe6(X)) Y = X, I = !0;
        else Y = je6(Y, X)
    }
    let {
        queryParams: J,
        sequenceParams: W
    } = Se6(Q, B, G);
    return Y = ke6(Y, J, W, I), Y
}

function JeB(A, Q) {
    let B = A;
    for (let [G, Z] of Q) B = B.split(G).join(Z);
    return B
}

function Te6(A, Q, B) {
    var G;
    let Z = new Map;
    if ((G = A.urlParameters) === null || G === void 0 ? void 0 : G.length)
        for (let I of A.urlParameters) {
            let Y = Fl(Q, I, B),
                J = Wk(I);
            if (Y = A.serializer.serialize(I.mapper, Y, J), !I.skipEncoding) Y = encodeURIComponent(Y);
            Z.set(`{TextComponent{I.mapper.serializedName||J}}`, Y)
        }
    return Z
}

function Pe6(A) {
    return A.includes("://")
}

function je6(A, Q) {
    if (!Q) return A;
    let B = new URL(A),
        G = B.pathname;
    if (!G.endsWith("/")) G = `TextComponent{G}/`;
    if (Q.startsWith("/")) Q = Q.substring(1);
    let Z = Q.indexOf("?");
    if (Z !== -1) {
        let I = Q.substring(0, Z),
            Y = Q.substring(Z + 1);
        if (G = G + I, Y) B.search = B.search ? `TextComponent{B.search}&TextComponent{Y}` : Y
    } else G = G + Q;
    return B.pathname = G, B.toString()
}

function Se6(A, Q, B) {
    var G;
    let Z = new Map,
        I = new Set;
    if ((G = A.queryParameters) === null || G === void 0 ? void 0 : G.length)
        for (let Y of A.queryParameters) {
            if (Y.mapper.type.name === "Sequence" && Y.mapper.serializedName) I.add(Y.mapper.serializedName);
            let J = Fl(Q, Y, B);
            if (J !== void 0 && J !== null || Y.mapper.required) {
                J = A.serializer.serialize(Y.mapper, J, Wk(Y));
                let W = Y.collectionFormat ? Re6[Y.collectionFormat] : "";
                if (Array.isArray(J)) J = J.map((X) => {
                    if (X === null || X === void 0) return "";
                    return X
                });
                if (Y.collectionFormat === "Multi" && J.length === 0) continue;
                else if (Array.isArray(J) && (Y.collectionFormat === "SSV" || Y.collectionFormat === "TSV")) J = J.join(W);
                if (!Y.skipEncoding)
                    if (Array.isArray(J)) J = J.map((X) => {
                        return encodeURIComponent(X)
                    });
                    else J = encodeURIComponent(J);
                if (Array.isArray(J) && (Y.collectionFormat === "CSV" || Y.collectionFormat === "Pipes")) J = J.join(W);
                Z.set(Y.mapper.serializedName || Wk(Y), J)
            }
        }
    return {
        queryParams: Z,
        sequenceParams: I
    }
}

function _e6(A) {
    let Q = new Map;
    if (!A || A[0] !== "?") return Q;
    A = A.slice(1);
    let B = A.split("&");
    for (let G of B) {
        let [Z, I] = G.split("=", 2), Y = Q.get(Z);
        if (Y)
            if (Array.isArray(Y)) Y.push(I);
            else Q.set(Z, [Y, I]);
        else Q.set(Z, I)
    }
    return Q
}

function ke6(A, Q, B, G = !1) {
    if (Q.size === 0) return A;
    let Z = new URL(A),
        I = _e6(Z.search);
    for (let [J, W] of Q) {
        let X = I.get(J);
        if (Array.isArray(X))
            if (Array.isArray(W)) {
                X.push(...W);
                let F = new Set(X);
                I.set(J, Array.from(F))
            } else X.push(W);
        else if (X) {
            if (Array.isArray(W)) W.unshift(X);
            else if (B.has(J)) I.set(J, [X, W]);
            if (!G) I.set(J, W)
        } else I.set(J, W)
    }
    let Y = [];
    for (let [J, W] of I)
        if (typeof W === "string") Y.push(`TextComponent{J}=TextComponent{W}`);
        else if (Array.isArray(W))
        for (let X of W) Y.push(`TextComponent{J}=TextComponent{X}`);
    else Y.push(`TextComponent{J}=TextComponent{W}`);
    return Z.search = Y.length ? `?TextComponent{Y.join("&")}` : "", Z.toString()
}
var Re6;
var XeB = lazyLoader(() => {
    _qA();
    X11();
    Re6 = {
        CSV: ",",
        SSV: " ",
        Multi: "Multi",
        TSV: "\t",
        Pipes: "|"
    }
});
var FeB;
var VeB = lazyLoader(() => {
    Se();
    FeB = Jl("core-client")
});
class F11 {
    constructor(A = {}) {
        var Q, B;
        if (this._requestContentType = A.requestContentType, this._endpoint = (Q = A.endpoint) !== null && Q !== void 0 ? Q : A.baseUri, A.baseUri) FeB.warning("The baseUri option for SDK Clients has been deprecated, please use endpoint instead.");
        if (this._allowInsecureConnection = A.allowInsecureConnection, this._httpClient = A.httpClient || IeB(), this.pipeline = A.pipeline || ye6(A), (B = A.additionalPolicies) === null || B === void 0 ? void 0 : B.length)
            for (let {
                    policy: G,
                    position: Z
                }
                of A.additionalPolicies) {
                let I = Z === "perRetry" ? "Sign" : void 0;
                this.pipeline.addPolicy(G, {
                    afterPhase: I
                })
            }
    }
    async sendRequest(A) {
        return this.pipeline.sendRequest(this._httpClient, A)
    }
    async sendOperationRequest(A, Q) {
        let B = Q.baseUrl || this._endpoint;
        if (!B) throw Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a endpoint string property that contains the base URL to use.");
        let G = WeB(B, Q, A, this),
            Z = hT({
                url: G
            });
        Z.method = Q.httpMethod;
        let I = kf(Z);
        I.operationSpec = Q, I.operationArguments = A;
        let Y = Q.contentType || this._requestContentType;
        if (Y && Q.requestBody) Z.headers.set("Content-Type", Y);
        let J = A.options;
        if (J) {
            let W = J.requestOptions;
            if (W) {
                if (W.timeout) Z.timeout = W.timeout;
                if (W.onUploadProgress) Z.onUploadProgress = W.onUploadProgress;
                if (W.onDownloadProgress) Z.onDownloadProgress = W.onDownloadProgress;
                if (W.shouldDeserialize !== void 0) I.shouldDeserialize = W.shouldDeserialize;
                if (W.allowInsecureConnection) Z.allowInsecureConnection = !0
            }
            if (J.abortSignal) Z.abortSignal = J.abortSignal;
            if (J.tracingOptions) Z.tracingOptions = J.tracingOptions
        }
        if (this._allowInsecureConnection) Z.allowInsecureConnection = !0;
        if (Z.streamResponseStatusCodes === void 0) Z.streamResponseStatusCodes = AeB(Q);
        try {
            let W = await this.sendRequest(Z),
                X = Ua1(W, Q.responses[W.status]);
            if (J === null || J === void 0 ? void 0 : J.onResponse) J.onResponse(W, X);
            return X
        } catch (W) {
            if (typeof W === "object" && (W === null || W === void 0 ? void 0 : W.response)) {
                let X = W.response,
                    F = Ua1(X, Q.responses[W.statusCode] || Q.responses.default);
                if (W.details = F, J === null || J === void 0 ? void 0 : J.onResponse) J.onResponse(X, F, W)
            }
            throw W
        }
    }
}

function ye6(A) {
    let Q = xe6(A),
        B = A.credential && Q ? {
            credentialScopes: Q,
            credential: A.credential
        } : void 0;
    return GeB(Object.assign(Object.assign({}, A), {
        credentialOptions: B
    }))
}

function xe6(A) {
    if (A.credentialScopes) return A.credentialScopes;
    if (A.endpoint) return `TextComponent{A.endpoint}/.default`;
    if (A.baseUri) return `TextComponent{A.baseUri}/.default`;
    if (A.credential && !A.credentialScopes) throw Error("When using credentials, the ServiceClientOptions must contain either a endpoint or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy");
    return
}
var KeB = lazyLoader(() => {
    _f();
    ZeB();
    KrB();
    YeB();
    _qA();
    XeB();
    X11();
    VeB()
});
var DeB = lazyLoader(() => {
    KeB()
});

function HeB(A) {
    if (A === "adfs") return "oauth2/token";
    else return "oauth2/v2.0/token"
}
var GY;
var Iq = lazyLoader(() => {
    MZA();
    Fs1();
    GY = PqA({
        namespace: "Microsoft.AAD",
        packageName: "@azure/identity",
        packageVersion: kA1
    })
});

function kqA(A) {
    let Q = "";
    if (Array.isArray(A)) {
        if (A.length !== 1) return;
        Q = A[0]
    } else if (typeof A === "string") Q = A;
    if (!Q.endsWith("/.default")) return Q;
    return Q.substr(0, Q.lastIndexOf("/.default"))
}

function EeB(A) {
    if (typeof A.expires_on === "number") return A.expires_on * 1000;
    if (typeof A.expires_on === "string") {
        let Q = +A.expires_on;
        if (!isNaN(Q)) return Q * 1000;
        let B = Date.parse(A.expires_on);
        if (!isNaN(B)) return B
    }
    if (typeof A.expires_in === "number") return Date.now() + A.expires_in * 1000;
    throw Error(`Failed to parse token expiration from body. expires_in="TextComponent{A.expires_in}", expires_on="TextComponent{A.expires_on}"`)
}

function zeB(A) {
    if (A.refresh_on) {
        if (typeof A.refresh_on === "number") return A.refresh_on * 1000;
        if (typeof A.refresh_on === "string") {
            let Q = +A.refresh_on;
            if (!isNaN(Q)) return Q * 1000;
            let B = Date.parse(A.refresh_on);
            if (!isNaN(B)) return B
        }
        throw Error(`Failed to parse refresh_on from body. refresh_on="TextComponent{A.refresh_on}"`)
    } else return
}
/* SERVICE_FABRIC_NOT_SUPPORTED = SERVICE_FABRIC_NOT_SUPPORTED message */
var SERVICE_FABRIC_NOT_SUPPORTED = "Specifying a `clientId` or `resourceId` is not supported by the Service Fabric managed identity environment. The managed identity configuration is determined by the Service Fabric cluster resource configuration. See https://aka.ms/servicefabricmi for more information";

function ve6(A) {
    let Q = A === null || A === void 0 ? void 0 : A.authorityHost;
    if (Z11) Q = Q !== null && Q !== void 0 ? Q : process.env.AZURE_AUTHORITY_HOST;
    return Q !== null && Q !== void 0 ? Q : HqA
}
/* NO_CORRELATION_ID = NO_CORRELATION_ID error */
var NO_CORRELATION_ID = "noCorrelationId",
    fZA;
var Es1 = lazyLoader(() => {
    DeB();
    Xl();
    _f();
    NE();
    MZA();
    Iq();
    TW();
    fZA = class fZA extends F11 {
        constructor(A) {
            var Q, B;
            let G = `azsdk-js-identity/TextComponent{kA1}`,
                Z = ((Q = A === null || A === void 0 ? void 0 : A.userAgentOptions) === null || Q === void 0 ? void 0 : Q.userAgentPrefix) ? `TextComponent{A.userAgentOptions.userAgentPrefix} TextComponent{G}` : `TextComponent{G}`,
                I = ve6(A);
            if (!I.startsWith("https:")) throw Error("The authorityHost address must use the 'https' protocol.");
            super(Object.assign(Object.assign({
                requestContentType: "application/json; charset=utf-8",
                retryOptions: {
                    maxRetries: 3
                }
            }, A), {
                userAgentOptions: {
                    userAgentPrefix: Z
                },
                baseUri: I
            }));
            if (this.allowInsecureConnection = !1, this.authorityHost = I, this.abortControllers = new Map, this.allowLoggingAccountIdentifiers = (B = A === null || A === void 0 ? void 0 : A.loggingOptions) === null || B === void 0 ? void 0 : B.allowLoggingAccountIdentifiers, this.tokenCredentialOptions = Object.assign({}, A), A === null || A === void 0 ? void 0 : A.allowInsecureConnection) this.allowInsecureConnection = A.allowInsecureConnection
        }
        async sendTokenRequest(A) {
            _M.info(`IdentityClient: sending token request to [TextComponent{A.url}]`);
            let Q = await this.sendRequest(A);
            if (Q.bodyAsText && (Q.status === 200 || Q.status === 201)) {
                let B = JSON.parse(Q.bodyAsText);
                if (!B.access_token) return null;
                this.logIdentifiers(Q);
                let G = {
                    accessToken: {
                        token: B.access_token,
                        expiresOnTimestamp: EeB(B),
                        refreshAfterTimestamp: zeB(B),
                        tokenType: "Bearer"
                    },
                    refreshToken: B.refresh_token
                };
                return _M.info(`IdentityClient: [TextComponent{A.url}] token acquired, expires on TextComponent{G.accessToken.expiresOnTimestamp}`), G
            } else {
                let B = new CqA(Q.status, Q.bodyAsText);
                throw _M.warning(`IdentityClient: authentication error. HTTP status: TextComponent{Q.status}, TextComponent{B.errorResponse.errorDescription}`), B
            }
        }
        async refreshAccessToken(A, Q, B, G, Z, I = {}) {
            if (G === void 0) return null;
            _M.info(`IdentityClient: refreshing access token with client ID: TextComponent{Q}, scopes: TextComponent{B} started`);
            let Y = {
                grant_type: "refresh_token",
                client_id: Q,
                refresh_token: G,
                scope: B
            };
            if (Z !== void 0) Y.client_secret = Z;
            let J = new URLSearchParams(Y);
            return GY.withSpan("IdentityClient.refreshAccessToken", I, async (W) => {
                try {
                    let X = HeB(A),
                        F = hT({
                            url: `TextComponent{this.authorityHost}/TextComponent{A}/TextComponent{X}`,
                            method: "POST",
                            body: J.toString(),
                            abortSignal: I.abortSignal,
                            headers: ye({
                                Accept: "application/json",
                                "Content-Type": "application/x-www-form-urlencoded"
                            }),
                            tracingOptions: W.tracingOptions
                        }),
                        V = await this.sendTokenRequest(F);
                    return _M.info(`IdentityClient: refreshed token for client ID: TextComponent{Q}`), V
                } catch (X) {
                    if (X.name === Ca1 && X.errorResponse.error === "interaction_required") return _M.info(`IdentityClient: interaction required for client ID: TextComponent{Q}`), null;
                    else throw _M.warning(`IdentityClient: failed refreshing token for client ID: TextComponent{Q}: TextComponent{X}`), X
                }
            })
        }
        generateAbortSignal(A) {
            let Q = new AbortController,
                B = this.abortControllers.get(A) || [];
            B.push(Q), this.abortControllers.set(A, B);
            let G = Q.signal.onabort;
            return Q.signal.onabort = (...Z) => {
                if (this.abortControllers.set(A, void 0), G) G.apply(Q.signal, Z)
            }, Q.signal
        }
        abortRequests(A) {
            let Q = A || NO_CORRELATION_ID,
                B = [...this.abortControllers.get(Q) || [], ...this.abortControllers.get(NO_CORRELATION_ID) || []];
            if (!B.length) return;
            for (let G of B) G.abort();
            this.abortControllers.set(Q, void 0)
        }
        getCorrelationId(A) {
            var Q;
            let B = (Q = A === null || A === void 0 ? void 0 : A.body) === null || Q === void 0 ? void 0 : Q.split("&").map((G) => G.split("=")).find(([G]) => G === "client-request-id");
            return B && B.length ? B[1] || NO_CORRELATION_ID : NO_CORRELATION_ID
        }
        async sendGetRequestAsync(A, Q) {
            let B = hT({
                    url: A,
                    method: "GET",
                    body: Q === null || Q === void 0 ? void 0 : Q.body,
                    allowInsecureConnection: this.allowInsecureConnection,
                    headers: ye(Q === null || Q === void 0 ? void 0 : Q.headers),
                    abortSignal: this.generateAbortSignal(NO_CORRELATION_ID)
                }),
                G = await this.sendRequest(B);
            return this.logIdentifiers(G), {
                body: G.bodyAsText ? JSON.parse(G.bodyAsText) : void 0,
                headers: G.headers.toJSON(),
                status: G.status
            }
        }
        async sendPostRequestAsync(A, Q) {
            let B = hT({
                    url: A,
                    method: "POST",
                    body: Q === null || Q === void 0 ? void 0 : Q.body,
                    headers: ye(Q === null || Q === void 0 ? void 0 : Q.headers),
                    allowInsecureConnection: this.allowInsecureConnection,
                    abortSignal: this.generateAbortSignal(this.getCorrelationId(Q))
                }),
                G = await this.sendRequest(B);
            return this.logIdentifiers(G), {
                body: G.bodyAsText ? JSON.parse(G.bodyAsText) : void 0,
                headers: G.headers.toJSON(),
                status: G.status
            }
        }
        getTokenCredentialOptions() {
            return this.tokenCredentialOptions
        }
        logIdentifiers(A) {
            if (!this.allowLoggingAccountIdentifiers || !A.bodyAsText) return;
            let Q = "No User Principal Name available";
            try {
                let G = (A.parsedBody || JSON.parse(A.bodyAsText)).access_token;
                if (!G) return;
                let Z = G.split(".")[1],
                    {
                        appid: I,
                        upn: Y,
                        tid: J,
                        oid: W
                    } = JSON.parse(Buffer.from(Z, "base64").toString("utf8"));
                _M.info(`[Authenticated account] Client ID: TextComponent{I}. Tenant ID: TextComponent{J}. User Principal Name: TextComponent{Y||Q}. Object ID (user): TextComponent{W}`)
            } catch (B) {
                _M.warning("allowLoggingAccountIdentifiers was set, but we couldn't log the account information. Error:", B.message)
            }
        }
    }
});
var UeB = () => {};
class xe {
    static serializeJSONBlob(A) {
        return JSON.stringify(A)
    }
    static serializeAccounts(A) {
        let Q = {};
        return Object.keys(A).map(function(B) {
            let G = A[B];
            Q[B] = {
                home_account_id: G.homeAccountId,
                environment: G.environment,
                realm: G.realm,
                local_account_id: G.localAccountId,
                username: G.username,
                authority_type: G.authorityType,
                name: G.name,
                client_info: G.clientInfo,
                last_modification_time: G.lastModificationTime,
                last_modification_app: G.lastModificationApp,
                tenantProfiles: G.tenantProfiles?.map((Z) => {
                    return JSON.stringify(Z)
                })
            }
        }), Q
    }
    static serializeIdTokens(A) {
        let Q = {};
        return Object.keys(A).map(function(B) {
            let G = A[B];
            Q[B] = {
                home_account_id: G.homeAccountId,
                environment: G.environment,
                credential_type: G.credentialType,
                client_id: G.clientId,
                secret: G.secret,
                realm: G.realm
            }
        }), Q
    }
    static serializeAccessTokens(A) {
        let Q = {};
        return Object.keys(A).map(function(B) {
            let G = A[B];
            Q[B] = {
                home_account_id: G.homeAccountId,
                environment: G.environment,
                credential_type: G.credentialType,
                client_id: G.clientId,
                secret: G.secret,
                realm: G.realm,
                target: G.target,
                cached_at: G.cachedAt,
                expires_on: G.expiresOn,
                extended_expires_on: G.extendedExpiresOn,
                refresh_on: G.refreshOn,
                key_id: G.keyId,
                token_type: G.tokenType,
                requestedClaims: G.requestedClaims,
                requestedClaimsHash: G.requestedClaimsHash,
                userAssertionHash: G.userAssertionHash
            }
        }), Q
    }
    static serializeRefreshTokens(A) {
        let Q = {};
        return Object.keys(A).map(function(B) {
            let G = A[B];
            Q[B] = {
                home_account_id: G.homeAccountId,
                environment: G.environment,
                credential_type: G.credentialType,
                client_id: G.clientId,
                secret: G.secret,
                family_id: G.familyId,
                target: G.target,
                realm: G.realm
            }
        }), Q
    }
    static serializeAppMetadata(A) {
        let Q = {};
        return Object.keys(A).map(function(B) {
            let G = A[B];
            Q[B] = {
                client_id: G.clientId,
                environment: G.environment,
                family_id: G.familyId
            }
        }), Q
    }
    static serializeAllCache(A) {
        return {
            Account: this.serializeAccounts(A.accounts),
            IdToken: this.serializeIdTokens(A.idTokens),
            AccessToken: this.serializeAccessTokens(A.accessTokens),
            RefreshToken: this.serializeRefreshTokens(A.refreshTokens),
            AppMetadata: this.serializeAppMetadata(A.appMetadata)
        }
    }
}
var V11 = lazyLoader(() => {
    /*! @azure/msal-node v3.8.1 2025-10-29 */ });
var L0, o4, pH, zs1, vZ, TU, ve, Vl, K11, hZA, Xk, PU, be, yf, g7, xqA = "appmetadata",
    $eB = "client_info",
    Kl = "1",
    gZA, ME, RF, e6, Fk, vqA, bqA, fe, D11, IZ, uZA = 300,
    ND;
var bZ = lazyLoader(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */
    L0 = {
        LIBRARY_NAME: "MSAL.JS",
        SKU: "msal.js.common",
        DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
        DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
        DEFAULT_COMMON_TENANT: "common",
        ADFS: "adfs",
        DSTS: "dstsv2",
        AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
        CIAM_AUTH_URL: ".ciamlogin.com",
        AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
        RESOURCE_DELIM: "|",
        NO_ACCOUNT: "NO_ACCOUNT",
        CLAIMS: "claims",
        CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
        OPENID_SCOPE: "openid",
        PROFILE_SCOPE: "profile",
        OFFLINE_ACCESS_SCOPE: "offline_access",
        EMAIL_SCOPE: "email",
        CODE_GRANT_TYPE: "authorization_code",
        RT_GRANT_TYPE: "refresh_token",
        S256_CODE_CHALLENGE_METHOD: "S256",
        URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
        AUTHORIZATION_PENDING: "authorization_pending",
        NOT_DEFINED: "not_defined",
        EMPTY_STRING: "",
        NOT_APPLICABLE: "N/A",
        NOT_AVAILABLE: "Not Available",
        FORWARD_SLASH: "/",
        IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
        IMDS_VERSION: "2020-06-01",
        IMDS_TIMEOUT: 2000,
        AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
        REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
        KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
        SHR_NONCE_VALIDITY: 240,
        INVALID_INSTANCE: "invalid_instance"
    }, o4 = {
        SUCCESS: 200,
        SUCCESS_RANGE_START: 200,
        SUCCESS_RANGE_END: 299,
        REDIRECT: 302,
        CLIENT_ERROR: 400,
        CLIENT_ERROR_RANGE_START: 400,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        REQUEST_TIMEOUT: 408,
        GONE: 410,
        TOO_MANY_REQUESTS: 429,
        CLIENT_ERROR_RANGE_END: 499,
        SERVER_ERROR: 500,
        SERVER_ERROR_RANGE_START: 500,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504,
        SERVER_ERROR_RANGE_END: 599,
        MULTI_SIDED_ERROR: 600
    }, pH = [L0.OPENID_SCOPE, L0.PROFILE_SCOPE, L0.OFFLINE_ACCESS_SCOPE], zs1 = [...pH, L0.EMAIL_SCOPE], vZ = {
        CONTENT_TYPE: "Content-Type",
        CONTENT_LENGTH: "Content-Length",
        RETRY_AFTER: "Retry-After",
        CCS_HEADER: "X-AnchorMailbox",
        WWWAuthenticate: "WWW-Authenticate",
        AuthenticationInfo: "Authentication-Info",
        X_MS_REQUEST_ID: "x-ms-request-id",
        X_MS_HTTP_VERSION: "x-ms-httpver"
    }, TU = {
        COMMON: "common",
        ORGANIZATIONS: "organizations",
        CONSUMERS: "consumers"
    }, ve = {
        ACCESS_TOKEN: "access_token",
        XMS_CC: "xms_cc"
    }, Vl = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none",
        CREATE: "create",
        NO_SESSION: "no_session"
    }, K11 = {
        PLAIN: "plain",
        S256: "S256"
    }, hZA = {
        CODE: "code",
        IDTOKEN_TOKEN: "id_token token",
        IDTOKEN_TOKEN_REFRESHTOKEN: "id_token token refresh_token"
    }, Xk = {
        QUERY: "query",
        FRAGMENT: "fragment",
        FORM_POST: "form_post"
    }, PU = {
        IMPLICIT_GRANT: "implicit",
        AUTHORIZATION_CODE_GRANT: "authorization_code",
        CLIENT_CREDENTIALS_GRANT: "client_credentials",
        RESOURCE_OWNER_PASSWORD_GRANT: "password",
        REFRESH_TOKEN_GRANT: "refresh_token",
        DEVICE_CODE_GRANT: "device_code",
        JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
    }, be = {
        MSSTS_ACCOUNT_TYPE: "MSSTS",
        ADFS_ACCOUNT_TYPE: "ADFS",
        MSAV1_ACCOUNT_TYPE: "MSA",
        GENERIC_ACCOUNT_TYPE: "Generic"
    }, yf = {
        CACHE_KEY_SEPARATOR: "-",
        CLIENT_INFO_SEPARATOR: "."
    }, g7 = {
        ID_TOKEN: "IdToken",
        ACCESS_TOKEN: "AccessToken",
        ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
        REFRESH_TOKEN: "RefreshToken"
    }, gZA = {
        CACHE_KEY: "authority-metadata",
        REFRESH_TIME_SECONDS: 86400
    }, ME = {
        CONFIG: "config",
        CACHE: "cache",
        NETWORK: "network",
        HARDCODED_VALUES: "hardcoded_values"
    }, RF = {
        SCHEMA_VERSION: 5,
        MAX_LAST_HEADER_BYTES: 330,
        MAX_CACHED_ERRORS: 50,
        CACHE_KEY: "server-telemetry",
        CATEGORY_SEPARATOR: "|",
        VALUE_SEPARATOR: ",",
        OVERFLOW_TRUE: "1",
        OVERFLOW_FALSE: "0",
        UNKNOWN_ERROR: "unknown_error"
    }, e6 = {
        BEARER: "Bearer",
        POP: "pop",
        SSH: "ssh-cert"
    }, Fk = {
        DEFAULT_THROTTLE_TIME_SECONDS: 60,
        DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
        THROTTLING_PREFIX: "throttling",
        X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
    }, vqA = {
        INVALID_GRANT_ERROR: "invalid_grant",
        CLIENT_MISMATCH_ERROR: "client_mismatch"
    }, bqA = {
        username: "username",
        password: "password"
    }, fe = {
        FAILED_AUTO_DETECTION: "1",
        INTERNAL_CACHE: "2",
        ENVIRONMENT_VARIABLE: "3",
        IMDS: "4"
    }, D11 = {
        CONFIGURED_NO_AUTO_DETECTION: "2",
        AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
        AUTO_DETECTION_REQUESTED_FAILED: "5"
    }, IZ = {
        NOT_APPLICABLE: "0",
        FORCE_REFRESH_OR_CLAIMS: "1",
        NO_CACHED_ACCESS_TOKEN: "2",
        CACHED_ACCESS_TOKEN_EXPIRED: "3",
        PROACTIVELY_REFRESHED: "4"
    }, ND = {
        BASE64: "base64",
        HEX: "hex",
        UTF8: "utf-8"
    }
});
var mZA = {};
esmExport(mZA, {
    unexpectedError: () => UNEXPECTED_ERROR,
    postRequestFailed: () => hqA
});
/* UNEXPECTED_ERROR = UNEXPECTED_ERROR type */
var UNEXPECTED_ERROR = "unexpected_error",
    hqA = "post_request_failed";
var Us1 = lazyLoader(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });

function ws1(A, Q) {
    return new t4(A, Q ? `TextComponent{H11[A]} TextComponent{Q}` : H11[A])
}
var H11, $s1, t4;
var yM = lazyLoader(() => {
    bZ();
    Us1(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    H11 = {
        [UNEXPECTED_ERROR]: "Unexpected error in authentication.",
        [hqA]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
    }, $s1 = {
        unexpectedError: {
            code: UNEXPECTED_ERROR,
            desc: H11[UNEXPECTED_ERROR]
        },
        postRequestFailed: {
            code: hqA,
            desc: H11[hqA]
        }
    };
    t4 = class t4 extends Error {
        constructor(A, Q, B) {
            let G = Q ? `TextComponent{A}: TextComponent{Q}` : A;
            super(G);
            Object.setPrototypeOf(this, t4.prototype), this.errorCode = A || L0.EMPTY_STRING, this.errorMessage = Q || L0.EMPTY_STRING, this.subError = B || L0.EMPTY_STRING, this.name = "AuthError"
        }
        setCorrelationId(A) {
            this.correlationId = A
        }
    }
});
var PG = {};
esmExport(PG, {
    userTimeoutReached: () => aqA,
    userCanceled: () => oqA,
    unexpectedCredentialType: () => lqA,
    tokenRefreshRequired: () => ff,
    tokenParsingError: () => Hl,
    tokenClaimsCnfRequiredForSignedJwt: () => oe,
    stateNotFound: () => Cl,
    stateMismatch: () => ce,
    requestCannotBeMade: () => ne,
    openIdConfigError: () => me,
    nullOrEmptyToken: () => ge,
    nonceMismatch: () => pe,
    noNetworkConnectivity: () => rqA,
    noCryptoObject: () => zl,
    noAccountInSilentRequest: () => vf,
    noAccountFound: () => pqA,
    networkError: () => ue,
    nestedAppAuthBridgeDisabled: () => eqA,
    multipleMatchingTokens: () => gqA,
    multipleMatchingAppMetadata: () => ie,
    multipleMatchingAccounts: () => uqA,
    missingTenantIdError: () => tqA,
    methodNotImplemented: () => g8,
    maxAgeTranspired: () => le,
    keyIdMissing: () => AAA,
    invalidState: () => gT,
    invalidClientCredential: () => nqA,
    invalidCacheRecord: () => re,
    invalidCacheEnvironment: () => bf,
    invalidAssertion: () => iqA,
    hashNotDeserialized: () => de,
    endpointResolutionError: () => OE,
    endSessionEndpointNotSupported: () => ee,
    emptyInputScopeSet: () => El,
    deviceCodeUnknownError: () => cqA,
    deviceCodePollingCancelled: () => mqA,
    deviceCodeExpired: () => dqA,
    clientInfoEmptyError: () => he,
    clientInfoDecodingError: () => CLIENT_INFO_DECODING_ERROR,
    cannotRemoveEmptyScope: () => ae,
    cannotAppendScopeSet: () => se,
    bindingKeyNotRemoved: () => sqA,
    authorizationCodeMissingFromServerResponse: () => te,
    authTimeNotFound: () => xf
});
/* CLIENT_INFO_DECODING_ERROR = CLIENT_INFO_DECODING_ERROR */
var CLIENT_INFO_DECODING_ERROR = "client_info_decoding_error",
    he = "client_info_empty_error",
    Hl = "token_parsing_error",
    ge = "null_or_empty_token",
    OE = "endpoints_resolution_error",
    ue = "network_error",
    me = "openid_config_error",
    de = "hash_not_deserialized",
    gT = "invalid_state",
    ce = "state_mismatch",
    Cl = "state_not_found",
    pe = "nonce_mismatch",
    xf = "auth_time_not_found",
    le = "max_age_transpired",
    gqA = "multiple_matching_tokens",
    uqA = "multiple_matching_accounts",
    ie = "multiple_matching_appMetadata",
    ne = "request_cannot_be_made",
    ae = "cannot_remove_empty_scope",
    se = "cannot_append_scopeset",
    El = "empty_input_scopeset",
    mqA = "device_code_polling_cancelled",
    dqA = "device_code_expired",
    cqA = "device_code_unknown_error",
    vf = "no_account_in_silent_request",
    re = "invalid_cache_record",
    bf = "invalid_cache_environment",
    pqA = "no_account_found",
    zl = "no_crypto_object",
    lqA = "unexpected_credential_type",
    iqA = "invalid_assertion",
    nqA = "invalid_client_credential",
    ff = "token_refresh_required",
    aqA = "user_timeout_reached",
    oe = "token_claims_cnf_required_for_signedjwt",
    te = "authorization_code_missing_from_server_response",
    sqA = "binding_key_not_removed",
    ee = "end_session_endpoint_not_supported",
    AAA = "key_id_missing",
    rqA = "no_network_connectivity",
    oqA = "user_canceled",
    tqA = "missing_tenant_id_error",
    g8 = "method_not_implemented",
    eqA = "nested_app_auth_bridge_disabled";
var PW = lazyLoader(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });

function v0(A, Q) {
    return new Ul(A, Q)
}
var e4, qs1, Ul;
var mX = lazyLoader(() => {
    yM();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    e4 = {
        [CLIENT_INFO_DECODING_ERROR]: "The client info could not be parsed/decoded correctly",
        [he]: "The client info was empty",
        [Hl]: "Token cannot be parsed",
        [ge]: "The token is null or empty",
        [OE]: "Endpoints cannot be resolved",
        [ue]: "Network request failed",
        [me]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
        [de]: "The hash parameters could not be deserialized",
        [gT]: "State was not the expected format",
        [ce]: "State mismatch error",
        [Cl]: "State not found",
        [pe]: "Nonce mismatch error",
        [xf]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
        [le]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
        [gqA]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
        [uqA]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
        [ie]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
        [ne]: "Token request cannot be made without authorization code or refresh token.",
        [ae]: "Cannot remove null or empty scope from ScopeSet",
        [se]: "Cannot append ScopeSet",
        [El]: "Empty input ScopeSet cannot be processed",
        [mqA]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
        [dqA]: "Device code is expired.",
        [cqA]: "Device code stopped polling for unknown reasons.",
        [vf]: "Please pass an account object, silent flow is not supported without account information",
        [re]: "Cache record object was null or undefined.",
        [bf]: "Invalid environment when attempting to create cache entry",
        [pqA]: "No account found in cache for given key.",
        [zl]: "No crypto object detected.",
        [lqA]: "Unexpected credential type.",
        [iqA]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
        [nqA]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
        [ff]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
        [aqA]: "User defined timeout for device code polling reached",
        [oe]: "Cannot generate a POP jwt if the token_claims are not populated",
        [te]: "Server response does not contain an authorization code to proceed",
        [sqA]: "Could not remove the credential's binding key from storage.",
        [ee]: "The provided authority does not support logout",
        [AAA]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
        [rqA]: "No network connectivity. Check your internet connection.",
        [oqA]: "User cancelled the flow.",
        [tqA]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
        [g8]: "This method has not been implemented",
        [eqA]: "The nested app auth bridge is disabled"
    }, qs1 = {
        clientInfoDecodingError: {
            code: CLIENT_INFO_DECODING_ERROR,
            desc: e4[CLIENT_INFO_DECODING_ERROR]
        },
        clientInfoEmptyError: {
            code: he,
            desc: e4[he]
        },
        tokenParsingError: {
            code: Hl,
            desc: e4[Hl]
        },
        nullOrEmptyToken: {
            code: ge,
            desc: e4[ge]
        },
        endpointResolutionError: {
            code: OE,
            desc: e4[OE]
        },
        networkError: {
            code: ue,
            desc: e4[ue]
        },
        unableToGetOpenidConfigError: {
            code: me,
            desc: e4[me]
        },
        hashNotDeserialized: {
            code: de,
            desc: e4[de]
        },
        invalidStateError: {
            code: gT,
            desc: e4[gT]
        },
        stateMismatchError: {
            code: ce,
            desc: e4[ce]
        },
        stateNotFoundError: {
            code: Cl,
            desc: e4[Cl]
        },
        nonceMismatchError: {
            code: pe,
            desc: e4[pe]
        },
        authTimeNotFoundError: {
            code: xf,
            desc: e4[xf]
        },
        maxAgeTranspired: {
            code: le,
            desc: e4[le]
        },
        multipleMatchingTokens: {
            code: gqA,
            desc: e4[gqA]
        },
        multipleMatchingAccounts: {
            code: uqA,
            desc: e4[uqA]
        },
        multipleMatchingAppMetadata: {
            code: ie,
            desc: e4[ie]
        },
        tokenRequestCannotBeMade: {
            code: ne,
            desc: e4[ne]
        },
        removeEmptyScopeError: {
            code: ae,
            desc: e4[ae]
        },
        appendScopeSetError: {
            code: se,
            desc: e4[se]
        },
        emptyInputScopeSetError: {
            code: El,
            desc: e4[El]
        },
        DeviceCodePollingCancelled: {
            code: mqA,
            desc: e4[mqA]
        },
        DeviceCodeExpired: {
            code: dqA,
            desc: e4[dqA]
        },
        DeviceCodeUnknownError: {
            code: cqA,
            desc: e4[cqA]
        },
        NoAccountInSilentRequest: {
            code: vf,
            desc: e4[vf]
        },
        invalidCacheRecord: {
            code: re,
            desc: e4[re]
        },
        invalidCacheEnvironment: {
            code: bf,
            desc: e4[bf]
        },
        noAccountFound: {
            code: pqA,
            desc: e4[pqA]
        },
        noCryptoObj: {
            code: zl,
            desc: e4[zl]
        },
        unexpectedCredentialType: {
            code: lqA,
            desc: e4[lqA]
        },
        invalidAssertion: {
            code: iqA,
            desc: e4[iqA]
        },
        invalidClientCredential: {
            code: nqA,
            desc: e4[nqA]
        },
        tokenRefreshRequired: {
            code: ff,
            desc: e4[ff]
        },
        userTimeoutReached: {
            code: aqA,
            desc: e4[aqA]
        },
        tokenClaimsRequired: {
            code: oe,
            desc: e4[oe]
        },
        noAuthorizationCodeFromServer: {
            code: te,
            desc: e4[te]
        },
        bindingKeyNotRemovedError: {
            code: sqA,
            desc: e4[sqA]
        },
        logoutNotSupported: {
            code: ee,
            desc: e4[ee]
        },
        keyIdMissing: {
            code: AAA,
            desc: e4[AAA]
        },
        noNetworkConnectivity: {
            code: rqA,
            desc: e4[rqA]
        },
        userCanceledError: {
            code: oqA,
            desc: e4[oqA]
        },
        missingTenantIdError: {
            code: tqA,
            desc: e4[tqA]
        },
        nestedAppAuthBridgeDisabled: {
            code: eqA,
            desc: e4[eqA]
        }
    };
    Ul = class Ul extends t4 {
        constructor(A, Q) {
            super(A, Q ? `TextComponent{e4[A]}: TextComponent{Q}` : e4[A]);
            this.name = "ClientAuthError", Object.setPrototypeOf(this, Ul.prototype)
        }
    }
});
var dZA;
var Ns1 = lazyLoader(() => {
    mX();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    dZA = {
        createNewGuid: () => {
            throw v0(g8)
        },
        base64Decode: () => {
            throw v0(g8)
        },
        base64Encode: () => {
            throw v0(g8)
        },
        base64UrlEncode: () => {
            throw v0(g8)
        },
        encodeKid: () => {
            throw v0(g8)
        },
        async getPublicKeyThumbprint() {
            throw v0(g8)
        },
        async removeTokenBindingKey() {
            throw v0(g8)
        },
        async clearKeystore() {
            throw v0(g8)
        },
        async signJwt() {
            throw v0(g8)
        },
        async hashString() {
            throw v0(g8)
        }
    }
});
class jU {
    constructor(A, Q, B) {
        this.level = pY.Info;
        let G = () => {
                return
            },
            Z = A || jU.createDefaultLoggerOptions();
        this.localCallback = Z.loggerCallback || G, this.piiLoggingEnabled = Z.piiLoggingEnabled || !1, this.level = typeof Z.logLevel === "number" ? Z.logLevel : pY.Info, this.correlationId = Z.correlationId || L0.EMPTY_STRING, this.packageName = Q || L0.EMPTY_STRING, this.packageVersion = B || L0.EMPTY_STRING
    }
    static createDefaultLoggerOptions() {
        return {
            loggerCallback: () => {},
            piiLoggingEnabled: !1,
            logLevel: pY.Info
        }
    }
    clone(A, Q, B) {
        return new jU({
            loggerCallback: this.localCallback,
            piiLoggingEnabled: this.piiLoggingEnabled,
            logLevel: this.level,
            correlationId: B || this.correlationId
        }, A, Q)
    }
    logMessage(A, Q) {
        if (Q.logLevel > this.level || !this.piiLoggingEnabled && Q.containsPii) return;
        let Z = `TextComponent{`[TextComponent{new Date().toUTCString()}] : [TextComponent{Q.correlationId||this.correlationId||""}]`} : TextComponent{this.packageName}@TextComponent{this.packageVersion} : TextComponent{pY[Q.logLevel]} - TextComponent{A}`;
        this.executeCallback(Q.logLevel, Z, Q.containsPii || !1)
    }
    executeCallback(A, Q, B) {
        if (this.localCallback) this.localCallback(A, Q, B)
    }
    error(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Error,
            containsPii: !1,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    errorPii(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Error,
            containsPii: !0,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    warning(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Warning,
            containsPii: !1,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    warningPii(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Warning,
            containsPii: !0,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    info(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Info,
            containsPii: !1,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    infoPii(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Info,
            containsPii: !0,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    verbose(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Verbose,
            containsPii: !1,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    verbosePii(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Verbose,
            containsPii: !0,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    trace(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Trace,
            containsPii: !1,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    tracePii(A, Q) {
        this.logMessage(A, {
            logLevel: pY.Trace,
            containsPii: !0,
            correlationId: Q || L0.EMPTY_STRING
        })
    }
    isPiiLoggingEnabled() {
        return this.piiLoggingEnabled || !1
    }
}
var pY;
var C11 = lazyLoader(() => {
    bZ(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    (function(A) {
        A[A.Error = 0] = "Error", A[A.Warning = 1] = "Warning", A[A.Info = 2] = "Info", A[A.Verbose = 3] = "Verbose", A[A.Trace = 4] = "Trace"
    })(pY || (pY = {}))
});
var E11 = "@azure/msal-common",
    cZA = "15.13.1";
var z11 = lazyLoader(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
var hf;
var U11 = lazyLoader(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */
    hf = {
        None: "none",
        AzurePublic: "https://login.microsoftonline.com",
        AzurePpe: "https://login.windows-ppe.net",
        AzureChina: "https://login.chinacloudapi.cn",
        AzureGermany: "https://login.microsoftonline.de",
        AzureUsGovernment: "https://login.microsoftonline.us"
    }
});
var pZA = {};
esmExport(pZA, {
    urlParseError: () => Vk,
    urlEmptyError: () => GAA,
    untrustedAuthority: () => XAA,
    tokenRequestEmpty: () => IAA,
    redirectUriEmpty: () => REDIRECT_URI_EMPTY,
    pkceParamsMissing: () => JAA,
    missingSshKid: () => BNA,
    missingSshJwk: () => gf,
    missingNonceAuthenticationHeader: () => GNA,
    logoutRequestEmpty: () => YAA,
    invalidRequestMethodForEAR: () => WNA,
    invalidCodeChallengeMethod: () => QNA,
    invalidCloudDiscoveryMetadata: () => wl,
    invalidClaims: () => $l,
    invalidAuthorizePostBodyParameters: () => XNA,
    invalidAuthorityMetadata: () => WAA,
    invalidAuthenticationHeader: () => ZNA,
    emptyInputScopesError: () => ZAA,
    claimsRequestParsingError: () => ANA,
    cannotSetOIDCOptions: () => INA,
    cannotAllowPlatformBroker: () => YNA,
    authorityUriInsecure: () => BAA,
    authorityMismatch: () => JNA
});
/* REDIRECT_URI_EMPTY = REDIRECT_URI_EMPTY error */
var REDIRECT_URI_EMPTY = "redirect_uri_empty",
    ANA = "claims_request_parsing_error",
    BAA = "authority_uri_insecure",
    Vk = "url_parse_error",
    GAA = "empty_url_error",
    ZAA = "empty_input_scopes_error",
    $l = "invalid_claims",
    IAA = "token_request_empty",
    YAA = "logout_request_empty",
    QNA = "invalid_code_challenge_method",
    JAA = "pkce_params_missing",
    wl = "invalid_cloud_discovery_metadata",
    WAA = "invalid_authority_metadata",
    XAA = "untrusted_authority",
    gf = "missing_ssh_jwk",
    BNA = "missing_ssh_kid",
    GNA = "missing_nonce_authentication_header",
    ZNA = "invalid_authentication_header",
    INA = "cannot_set_OIDCOptions",
    YNA = "cannot_allow_platform_broker",
    JNA = "authority_mismatch",
    WNA = "invalid_request_method_for_EAR",
    XNA = "invalid_authorize_post_body_parameters";
var uf = lazyLoader(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });

function jG(A) {
    return new lZA(A)
}
var ZY, Ls1, lZA;
var ql = lazyLoader(() => {
    yM();
    uf(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    ZY = {
        [REDIRECT_URI_EMPTY]: "A redirect URI is required for all calls, and none has been set.",
        [ANA]: "Could not parse the given claims request object.",
        [BAA]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/AGENT_OUTPUT_TOOL_NAME-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
        [Vk]: "URL could not be parsed into appropriate segments.",
        [GAA]: "URL was empty or null.",
        [ZAA]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
        [$l]: "Given claims parameter must be a stringified JSON object.",
        [IAA]: "Token request was empty and not found in cache.",
        [YAA]: "The logout request was null or undefined.",
        [QNA]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
        [JAA]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
        [wl]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
        [WAA]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
        [XAA]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
        [gf]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
        [BNA]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
        [GNA]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
        [ZNA]: "Invalid authentication header provided",
        [INA]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
        [YNA]: "Cannot set allowPlatformBroker parameter to true when not in AAD protocol mode.",
        [JNA]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority.",
        [XNA]: "Invalid authorize post body parameters provided. If you are using authorizePostBodyParameters, the request method must be POST. Please check the request method and parameters.",
        [WNA]: "Invalid request method for EAR protocol mode. The request method cannot be GET when using EAR protocol mode. Please change the request method to POST."
    }, Ls1 = {
        redirectUriNotSet: {
            code: REDIRECT_URI_EMPTY,
            desc: ZY[REDIRECT_URI_EMPTY]
        },
        claimsRequestParsingError: {
            code: ANA,
            desc: ZY[ANA]
        },
        authorityUriInsecure: {
            code: BAA,
            desc: ZY[BAA]
        },
        urlParseError: {
            code: Vk,
            desc: ZY[Vk]
        },
        urlEmptyError: {
            code: GAA,
            desc: ZY[GAA]
        },
        emptyScopesError: {
            code: ZAA,
            desc: ZY[ZAA]
        },
        invalidClaimsRequest: {
            code: $l,
            desc: ZY[$l]
        },
        tokenRequestEmptyError: {
            code: IAA,
            desc: ZY[IAA]
        },
        logoutRequestEmptyError: {
            code: YAA,
            desc: ZY[YAA]
        },
        invalidCodeChallengeMethod: {
            code: QNA,
            desc: ZY[QNA]
        },
        invalidCodeChallengeParams: {
            code: JAA,
            desc: ZY[JAA]
        },
        invalidCloudDiscoveryMetadata: {
            code: wl,
            desc: ZY[wl]
        },
        invalidAuthorityMetadata: {
            code: WAA,
            desc: ZY[WAA]
        },
        untrustedAuthority: {
            code: XAA,
            desc: ZY[XAA]
        },
        missingSshJwk: {
            code: gf,
            desc: ZY[gf]
        },
        missingSshKid: {
            code: BNA,
            desc: ZY[BNA]
        },
        missingNonceAuthenticationHeader: {
            code: GNA,
            desc: ZY[GNA]
        },
        invalidAuthenticationHeader: {
            code: ZNA,
            desc: ZY[ZNA]
        },
        cannotSetOIDCOptions: {
            code: INA,
            desc: ZY[INA]
        },
        cannotAllowPlatformBroker: {
            code: YNA,
            desc: ZY[YNA]
        },
        authorityMismatch: {
            code: JNA,
            desc: ZY[JNA]
        },
        invalidAuthorizePostBodyParameters: {
            code: XNA,
            desc: ZY[XNA]
        },
        invalidRequestMethodForEAR: {
            code: WNA,
            desc: ZY[WNA]
        }
    };
    lZA = class lZA extends t4 {
        constructor(A) {
            super(A, ZY[A]);
            this.name = "ClientConfigurationError", Object.setPrototypeOf(this, lZA.prototype)
        }
    }
});
class YZ {
    static isEmptyObj(A) {
        if (A) try {
            let Q = JSON.parse(A);
            return Object.keys(Q).length === 0
        } catch (Q) {}
        return !0
    }
    static startsWith(A, Q) {
        return A.indexOf(Q) === 0
    }
    static endsWith(A, Q) {
        return A.length >= Q.length && A.lastIndexOf(Q) === A.length - Q.length
    }
    static queryStringToObject(A) {
        let Q = {},
            B = A.split("&"),
            G = (Z) => decodeURIComponent(Z.replace(/\+/g, " "));
        return B.forEach((Z) => {
            if (Z.trim()) {
                let [I, Y] = Z.split(/=(.+)/g, 2);
                if (I && Y) Q[G(I)] = G(Y)
            }
        }), Q
    }
    static trimArrayEntries(A) {
        return A.map((Q) => Q.trim())
    }
    static removeEmptyStringsFromArray(A) {
        return A.filter((Q) => {
            return !!Q
        })
    }
    static jsonParseHelper(A) {
        try {
            return JSON.parse(A)
        } catch (Q) {
            return null
        }
    }
    static matchPattern(A, Q) {
        return new RegExp(A.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(Q)
    }