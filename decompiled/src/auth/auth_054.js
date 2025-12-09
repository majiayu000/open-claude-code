/**
 * Claude Code Decompiled
 * Category: auth
 * File: 54/61
 * Lines: 260046 - 261544 (1499 lines)
 * Original file: cli.js
 */

        async executeTokenRequest(A, Q, B) {
            let G = this.createTokenQueryParameters(A),
                Z = H8.appendQueryString(Q.tokenEndpoint, G),
                I = await this.createTokenRequestBody(A),
                Y = this.createTokenRequestHeaders(),
                J = {
                    clientId: this.config.authOptions.clientId,
                    authority: A.authority,
                    scopes: A.scopes,
                    claims: A.claims,
                    authenticationScheme: A.authenticationScheme,
                    resourceRequestMethod: A.resourceRequestMethod,
                    resourceRequestUri: A.resourceRequestUri,
                    shrClaims: A.shrClaims,
                    sshKid: A.sshKid
                },
                W = KI.nowSeconds(),
                X = await this.executePostToTokenEndpoint(Z, I, Y, J, A.correlationId),
                F = new jJ(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            return F.validateTokenResponse(X.body), await F.handleServerTokenResponse(X.body, this.authority, W, A, void 0, B)
        }
        async createTokenRequestBody(A) {
            let Q = new Map;
            if (OB.addClientId(Q, this.config.authOptions.clientId), OB.addScopes(Q, A.scopes), OB.addGrantType(Q, PU.JWT_BEARER), OB.addClientInfo(Q), OB.addLibraryInfo(Q, this.config.libraryInfo), OB.addApplicationTelemetry(Q, this.config.telemetry.application), OB.addThrottling(Q), this.serverTelemetryManager) OB.addServerTelemetry(Q, this.serverTelemetryManager);
            let B = A.correlationId || this.config.cryptoInterface.createNewGuid();
            if (OB.addCorrelationId(Q, B), OB.addRequestTokenUse(Q, KAA.ON_BEHALF_OF), OB.addOboAssertion(Q, A.oboAssertion), this.config.clientCredentials.clientSecret) OB.addClientSecret(Q, this.config.clientCredentials.clientSecret);
            let G = this.config.clientCredentials.clientAssertion;
            if (G) OB.addClientAssertion(Q, await jE(G.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), OB.addClientAssertionType(Q, G.assertionType);
            if (A.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) OB.addClaims(Q, A.claims, this.config.authOptions.clientCapabilities);
            return LD.mapToQueryString(Q)
        }
    }
});
var GLA;
var r02 = L(() => {
    _01();
    j01();
    HI();
    u7();
    k01();
    jo1(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    GLA = class GLA extends OAA {
        constructor(A) {
            super(A);
            let Q = !!this.config.auth.clientSecret,
                B = !!this.config.auth.clientAssertion,
                G = (!!this.config.auth.clientCertificate?.thumbprint || !!this.config.auth.clientCertificate?.thumbprintSha256) && !!this.config.auth.clientCertificate?.privateKey;
            if (this.appTokenProvider) return;
            if (Q && B || B && G || Q && G) throw v0(PG.invalidClientCredential);
            if (this.config.auth.clientSecret) {
                this.clientSecret = this.config.auth.clientSecret;
                return
            }
            if (this.config.auth.clientAssertion) {
                this.developerProvidedClientAssertion = this.config.auth.clientAssertion;
                return
            }
            if (!G) throw v0(PG.invalidClientCredential);
            else this.clientAssertion = this.config.auth.clientCertificate.thumbprintSha256 ? cT.fromCertificateWithSha256Thumbprint(this.config.auth.clientCertificate.thumbprintSha256, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c) : cT.fromCertificate(this.config.auth.clientCertificate.thumbprint, this.config.auth.clientCertificate.privateKey, this.config.auth.clientCertificate.x5c);
            this.appTokenProvider = void 0
        }
        SetAppTokenProvider(A) {
            this.appTokenProvider = A
        }
        async acquireTokenByClientCredential(A) {
            this.logger.info("acquireTokenByClientCredential called", A.correlationId);
            let Q;
            if (A.clientAssertion) Q = {
                assertion: await jE(A.clientAssertion, this.config.auth.clientId),
                assertionType: SE.JWT_BEARER_ASSERTION_TYPE
            };
            let B = await this.initializeBaseRequest(A),
                G = {
                    ...B,
                    scopes: B.scopes.filter((V) => !pH.includes(V))
                },
                Z = {
                    ...A,
                    ...G,
                    clientAssertion: Q
                },
                Y = new H8(Z.authority).getUrlComponents().PathSegments[0];
            if (Object.values(TU).includes(Y)) throw v0(PG.missingTenantIdError);
            let J = process.env[IA2],
                W;
            if (Z.azureRegion !== "DisableMsalForceRegion")
                if (!Z.azureRegion && J) W = J;
                else W = Z.azureRegion;
            let X = {
                    azureRegion: W,
                    environmentRegion: process.env[ZA2]
                },
                F = this.initializeServerTelemetryManager(af.acquireTokenByClientCredential, Z.correlationId, Z.skipCache);
            try {
                let V = await this.createAuthority(Z.authority, Z.correlationId, X, A.azureCloudOptions),
                    K = await this.buildOauthClientConfiguration(V, Z.correlationId, "", F),
                    D = new RAA(K, this.appTokenProvider);
                return this.logger.verbose("Client credential client created", Z.correlationId), await D.acquireToken(Z)
            } catch (V) {
                if (V instanceof t4) V.setCorrelationId(Z.correlationId);
                throw F.cacheFailedRequest(V), V
            }
        }
        async acquireTokenOnBehalfOf(A) {
            this.logger.info("acquireTokenOnBehalfOf called", A.correlationId);
            let Q = {
                ...A,
                ...await this.initializeBaseRequest(A)
            };
            try {
                let B = await this.createAuthority(Q.authority, Q.correlationId, void 0, A.azureCloudOptions),
                    G = await this.buildOauthClientConfiguration(B, Q.correlationId, "", void 0),
                    Z = new BLA(G);
                return this.logger.verbose("On behalf of client created", Q.correlationId), await Z.acquireToken(Q)
            } catch (B) {
                if (B instanceof t4) B.setCorrelationId(Q.correlationId);
                throw B
            }
        }
    }
});

function o02(A) {
    if (typeof A !== "string") return !1;
    let Q = new Date(A);
    return !isNaN(Q.getTime()) && Q.toISOString() === A
}
var t02 = L(() => {
    /*! @azure/msal-node v3.8.1 2025-10-29 */ });
class So1 {
    constructor(A, Q, B) {
        this.httpClientNoRetries = A, this.retryPolicy = Q, this.logger = B
    }
    async sendNetworkRequestAsyncHelper(A, Q, B) {
        if (A === DI.GET) return this.httpClientNoRetries.sendGetRequestAsync(Q, B);
        else return this.httpClientNoRetries.sendPostRequestAsync(Q, B)
    }
    async sendNetworkRequestAsync(A, Q, B) {
        let G = await this.sendNetworkRequestAsyncHelper(A, Q, B);
        if ("isNewRequest" in this.retryPolicy) this.retryPolicy.isNewRequest = !0;
        let Z = 0;
        while (await this.retryPolicy.pauseForRetry(G.status, Z, this.logger, G.headers[vZ.RETRY_AFTER])) G = await this.sendNetworkRequestAsyncHelper(A, Q, B), Z++;
        return G
    }
    async sendGetRequestAsync(A, Q) {
        return this.sendNetworkRequestAsync(DI.GET, A, Q)
    }
    async sendPostRequestAsync(A, Q) {
        return this.sendNetworkRequestAsync(DI.POST, A, Q)
    }
}
var e02 = L(() => {
    u7();
    HI(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
class kU {
    constructor(A, Q, B, G, Z) {
        this.logger = A, this.nodeStorage = Q, this.networkClient = B, this.cryptoProvider = G, this.disableInternalRetries = Z
    }
    async getServerTokenResponseAsync(A, Q, B, G) {
        return this.getServerTokenResponse(A)
    }
    getServerTokenResponse(A) {
        let Q, B;
        if (A.body.expires_on) {
            if (o02(A.body.expires_on)) A.body.expires_on = new Date(A.body.expires_on).getTime() / 1000;
            if (B = A.body.expires_on - KI.nowSeconds(), B > 7200) Q = B / 2
        }
        return {
            status: A.status,
            access_token: A.body.access_token,
            expires_in: B,
            scope: A.body.resource,
            token_type: A.body.token_type,
            refresh_in: Q,
            correlation_id: A.body.correlation_id || A.body.correlationId,
            error: typeof A.body.error === "string" ? A.body.error : A.body.error?.code,
            error_description: A.body.message || (typeof A.body.error === "string" ? A.body.error_description : A.body.error?.message),
            error_codes: A.body.error_codes,
            timestamp: A.body.timestamp,
            trace_id: A.body.trace_id
        }
    }
    async acquireTokenWithManagedIdentity(A, Q, B, G) {
        let Z = this.createRequest(A.resource, Q);
        if (A.revokedTokenSha256Hash) this.logger.info(`[Managed Identity] The following claims are present in the request: ${A.claims}`), Z.queryParameters[cX.SHA256_TOKEN_TO_REFRESH] = A.revokedTokenSha256Hash;
        if (A.clientCapabilities?.length) {
            let K = A.clientCapabilities.toString();
            this.logger.info(`[Managed Identity] The following client capabilities are present in the request: ${K}`), Z.queryParameters[cX.XMS_CC] = K
        }
        let I = Z.headers;
        I[vZ.CONTENT_TYPE] = L0.URL_FORM_CONTENT_TYPE;
        let Y = {
            headers: I
        };
        if (Object.keys(Z.bodyParameters).length) Y.body = Z.computeParametersBodyString();
        let J = this.disableInternalRetries ? this.networkClient : new So1(this.networkClient, Z.retryPolicy, this.logger),
            W = KI.nowSeconds(),
            X;
        try {
            if (Z.httpMethod === DI.POST) X = await J.sendPostRequestAsync(Z.computeUri(), Y);
            else X = await J.sendGetRequestAsync(Z.computeUri(), Y)
        } catch (K) {
            if (K instanceof t4) throw K;
            else throw v0(PG.networkError)
        }
        let F = new jJ(Q.id, this.nodeStorage, this.cryptoProvider, this.logger, null, null),
            V = await this.getServerTokenResponseAsync(X, J, Z, Y);
        return F.validateTokenResponse(V, G), F.handleServerTokenResponse(V, B, W, A)
    }
    getManagedIdentityUserAssignedIdQueryParameterKey(A, Q, B) {
        switch (A) {
            case lY.USER_ASSIGNED_CLIENT_ID:
                return this.logger.info(`[Managed Identity] [API version ${B?"2017+":"2019+"}] Adding user assigned client id to the request.`), B ? TAA.MANAGED_IDENTITY_CLIENT_ID_2017 : TAA.MANAGED_IDENTITY_CLIENT_ID;
            case lY.USER_ASSIGNED_RESOURCE_ID:
                return this.logger.info("[Managed Identity] Adding user assigned resource id to the request."), Q ? TAA.MANAGED_IDENTITY_RESOURCE_ID_IMDS : TAA.MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS;
            case lY.USER_ASSIGNED_OBJECT_ID:
                return this.logger.info("[Managed Identity] Adding user assigned object id to the request."), TAA.MANAGED_IDENTITY_OBJECT_ID;
            default:
                throw jW(Sl)
        }
    }
}
var TAA;
var PAA = L(() => {
    u7();
    HI();
    IIA();
    t02();
    e02();
    NAA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    TAA = {
        MANAGED_IDENTITY_CLIENT_ID_2017: "clientid",
        MANAGED_IDENTITY_CLIENT_ID: "client_id",
        MANAGED_IDENTITY_OBJECT_ID: "object_id",
        MANAGED_IDENTITY_RESOURCE_ID_IMDS: "msi_res_id",
        MANAGED_IDENTITY_RESOURCE_ID_NON_IMDS: "mi_res_id"
    };
    kU.getValidatedEnvVariableUrlString = (A, Q, B, G) => {
        try {
            return new H8(Q).urlString
        } catch (Z) {
            throw G.info(`[Managed Identity] ${B} managed identity is unavailable because the '${A}' environment variable is malformed.`), jW(qAA[A])
        }
    }
});
class _o1 {
    calculateDelay(A, Q) {
        if (!A) return Q;
        let B = Math.round(parseFloat(A) * 1000);
        if (isNaN(B)) B = new Date(A).valueOf() - new Date().valueOf();
        return Math.max(Q, B)
    }
}
var AQ2 = L(() => {
    /*! @azure/msal-node v3.8.1 2025-10-29 */ });
class y01 {
    constructor() {
        this.linearRetryStrategy = new _o1
    }
    static get DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS() {
        return J25
    }
    async pauseForRetry(A, Q, B, G) {
        if (W25.includes(A) && Q < Y25) {
            let Z = this.linearRetryStrategy.calculateDelay(G, y01.DEFAULT_MANAGED_IDENTITY_RETRY_DELAY_MS);
            return B.verbose(`Retrying request in ${Z}ms (retry attempt: ${Q+1})`), await new Promise((I) => {
                return setTimeout(I, Z)
            }), !0
        }
        return !1
    }
}
var Y25 = 3,
    J25 = 1000,
    W25;
var QQ2 = L(() => {
    E01();
    AQ2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    W25 = [o4.NOT_FOUND, o4.REQUEST_TIMEOUT, o4.TOO_MANY_REQUESTS, o4.SERVER_ERROR, o4.SERVICE_UNAVAILABLE, o4.GATEWAY_TIMEOUT]
});
class Wq {
    constructor(A, Q, B) {
        this.httpMethod = A, this._baseEndpoint = Q, this.headers = {}, this.bodyParameters = {}, this.queryParameters = {}, this.retryPolicy = B || new y01
    }
    computeUri() {
        let A = new Map;
        if (this.queryParameters) OB.addExtraQueryParameters(A, this.queryParameters);
        let Q = LD.mapToQueryString(A);
        return H8.appendQueryString(this._baseEndpoint, Q)
    }
    computeParametersBodyString() {
        let A = new Map;
        if (this.bodyParameters) OB.addExtraQueryParameters(A, this.bodyParameters);
        return LD.mapToQueryString(A)
    }
}
var jAA = L(() => {
    u7();
    QQ2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var X25 = "2019-08-01",
    SAA;
var BQ2 = L(() => {
    PAA();
    HI();
    jAA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    SAA = class SAA extends kU {
        constructor(A, Q, B, G, Z, I, Y) {
            super(A, Q, B, G, Z);
            this.identityEndpoint = I, this.identityHeader = Y
        }
        static getEnvironmentVariables() {
            let A = process.env[D4.IDENTITY_ENDPOINT],
                Q = process.env[D4.IDENTITY_HEADER];
            return [A, Q]
        }
        static tryCreate(A, Q, B, G, Z) {
            let [I, Y] = SAA.getEnvironmentVariables();
            if (!I || !Y) return A.info(`[Managed Identity] ${T4.APP_SERVICE} managed identity is unavailable because one or both of the '${D4.IDENTITY_HEADER}' and '${D4.IDENTITY_ENDPOINT}' environment variables are not defined.`), null;
            let J = SAA.getValidatedEnvVariableUrlString(D4.IDENTITY_ENDPOINT, I, T4.APP_SERVICE, A);
            return A.info(`[Managed Identity] Environment variables validation passed for ${T4.APP_SERVICE} managed identity. Endpoint URI: ${J}. Creating ${T4.APP_SERVICE} managed identity.`), new SAA(A, Q, B, G, Z, I, Y)
        }
        createRequest(A, Q) {
            let B = new Wq(DI.GET, this.identityEndpoint);
            if (B.headers[SU.APP_SERVICE_SECRET_HEADER_NAME] = this.identityHeader, B.queryParameters[cX.API_VERSION] = X25, B.queryParameters[cX.RESOURCE] = A, Q.idType !== lY.SYSTEM_ASSIGNED) B.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(Q.idType)] = Q.id;
            return B
        }
    }
});
import {
    accessSync as F25,
    constants as GQ2,
    statSync as V25,
    readFileSync as K25
} from "fs";
import D25 from "path";
var H25 = "2019-11-01",
    ZQ2 = "http://127.0.0.1:40342/metadata/identity/oauth2/token",
    IQ2 = "N/A: himds executable exists",
    YQ2, C25, kl;
var JQ2 = L(() => {
    u7();
    jAA();
    PAA();
    IIA();
    HI();
    NAA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    YQ2 = {
        win32: `${process.env.ProgramData}\\AzureConnectedMachineAgent\\Tokens\\`,
        linux: "/var/opt/azcmagent/tokens/"
    }, C25 = {
        win32: `${process.env.ProgramFiles}\\AzureConnectedMachineAgent\\himds.exe`,
        linux: "/opt/azcmagent/bin/himds"
    };
    kl = class kl extends kU {
        constructor(A, Q, B, G, Z, I) {
            super(A, Q, B, G, Z);
            this.identityEndpoint = I
        }
        static getEnvironmentVariables() {
            let A = process.env[D4.IDENTITY_ENDPOINT],
                Q = process.env[D4.IMDS_ENDPOINT];
            if (!A || !Q) {
                let B = C25[process.platform];
                try {
                    F25(B, GQ2.F_OK | GQ2.R_OK), A = ZQ2, Q = IQ2
                } catch (G) {}
            }
            return [A, Q]
        }
        static tryCreate(A, Q, B, G, Z, I) {
            let [Y, J] = kl.getEnvironmentVariables();
            if (!Y || !J) return A.info(`[Managed Identity] ${T4.AZURE_ARC} managed identity is unavailable through environment variables because one or both of '${D4.IDENTITY_ENDPOINT}' and '${D4.IMDS_ENDPOINT}' are not defined. ${T4.AZURE_ARC} managed identity is also unavailable through file detection.`), null;
            if (J === IQ2) A.info(`[Managed Identity] ${T4.AZURE_ARC} managed identity is available through file detection. Defaulting to known ${T4.AZURE_ARC} endpoint: ${ZQ2}. Creating ${T4.AZURE_ARC} managed identity.`);
            else {
                let W = kl.getValidatedEnvVariableUrlString(D4.IDENTITY_ENDPOINT, Y, T4.AZURE_ARC, A);
                W.endsWith("/") && W.slice(0, -1), kl.getValidatedEnvVariableUrlString(D4.IMDS_ENDPOINT, J, T4.AZURE_ARC, A), A.info(`[Managed Identity] Environment variables validation passed for ${T4.AZURE_ARC} managed identity. Endpoint URI: ${W}. Creating ${T4.AZURE_ARC} managed identity.`)
            }
            if (I.idType !== lY.SYSTEM_ASSIGNED) throw jW(W01);
            return new kl(A, Q, B, G, Z, Y)
        }
        createRequest(A) {
            let Q = new Wq(DI.GET, this.identityEndpoint.replace("localhost", "127.0.0.1"));
            return Q.headers[SU.METADATA_HEADER_NAME] = "true", Q.queryParameters[cX.API_VERSION] = H25, Q.queryParameters[cX.RESOURCE] = A, Q
        }
        async getServerTokenResponseAsync(A, Q, B, G) {
            let Z;
            if (A.status === o4.UNAUTHORIZED) {
                let I = A.headers["www-authenticate"];
                if (!I) throw jW(V01);
                if (!I.includes("Basic realm=")) throw jW(K01);
                let Y = I.split("Basic realm=")[1];
                if (!YQ2.hasOwnProperty(process.platform)) throw jW(J01);
                let J = YQ2[process.platform],
                    W = D25.basename(Y);
                if (!W.endsWith(".key")) throw jW(Z01);
                if (J + W !== Y) throw jW(I01);
                let X;
                try {
                    X = await V25(Y).size
                } catch (K) {
                    throw jW(mNA)
                }
                if (X > WA2) throw jW(Y01);
                let F;
                try {
                    F = K25(Y, ND.UTF8)
                } catch (K) {
                    throw jW(mNA)
                }
                let V = `Basic ${F}`;
                this.logger.info("[Managed Identity] Adding authorization header to the request."), B.headers[SU.AUTHORIZATION_HEADER_NAME] = V;
                try {
                    Z = await Q.sendGetRequestAsync(B.computeUri(), G)
                } catch (K) {
                    if (K instanceof t4) throw K;
                    else throw v0(PG.networkError)
                }
            }
            return this.getServerTokenResponse(Z || A)
        }
    }
});
var _AA;
var WQ2 = L(() => {
    jAA();
    PAA();
    HI();
    IIA();
    NAA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    _AA = class _AA extends kU {
        constructor(A, Q, B, G, Z, I) {
            super(A, Q, B, G, Z);
            this.msiEndpoint = I
        }
        static getEnvironmentVariables() {
            return [process.env[D4.MSI_ENDPOINT]]
        }
        static tryCreate(A, Q, B, G, Z, I) {
            let [Y] = _AA.getEnvironmentVariables();
            if (!Y) return A.info(`[Managed Identity] ${T4.CLOUD_SHELL} managed identity is unavailable because the '${D4.MSI_ENDPOINT} environment variable is not defined.`), null;
            let J = _AA.getValidatedEnvVariableUrlString(D4.MSI_ENDPOINT, Y, T4.CLOUD_SHELL, A);
            if (A.info(`[Managed Identity] Environment variable validation passed for ${T4.CLOUD_SHELL} managed identity. Endpoint URI: ${J}. Creating ${T4.CLOUD_SHELL} managed identity.`), I.idType !== lY.SYSTEM_ASSIGNED) throw jW(X01);
            return new _AA(A, Q, B, G, Z, Y)
        }
        createRequest(A) {
            let Q = new Wq(DI.POST, this.msiEndpoint);
            return Q.headers[SU.METADATA_HEADER_NAME] = "true", Q.bodyParameters[cX.RESOURCE] = A, Q
        }
    }
});
class ko1 {
    constructor(A, Q, B) {
        this.minExponentialBackoff = A, this.maxExponentialBackoff = Q, this.exponentialDeltaBackoff = B
    }
    calculateDelay(A) {
        if (A === 0) return this.minExponentialBackoff;
        return Math.min(Math.pow(2, A - 1) * this.exponentialDeltaBackoff, this.maxExponentialBackoff)
    }
}
var XQ2 = L(() => {
    /*! @azure/msal-node v3.8.1 2025-10-29 */ });
class kAA {
    constructor() {
        this.exponentialRetryStrategy = new ko1(kAA.MIN_EXPONENTIAL_BACKOFF_MS, kAA.MAX_EXPONENTIAL_BACKOFF_MS, kAA.EXPONENTIAL_DELTA_BACKOFF_MS)
    }
    static get MIN_EXPONENTIAL_BACKOFF_MS() {
        return $25
    }
    static get MAX_EXPONENTIAL_BACKOFF_MS() {
        return w25
    }
    static get EXPONENTIAL_DELTA_BACKOFF_MS() {
        return q25
    }
    static get HTTP_STATUS_GONE_RETRY_AFTER_MS() {
        return N25
    }
    set isNewRequest(A) {
        this._isNewRequest = A
    }
    async pauseForRetry(A, Q, B) {
        if (this._isNewRequest) this._isNewRequest = !1, this.maxRetries = A === o4.GONE ? U25 : z25;
        if ((E25.includes(A) || A >= o4.SERVER_ERROR_RANGE_START && A <= o4.SERVER_ERROR_RANGE_END && Q < this.maxRetries) && Q < this.maxRetries) {
            let G = A === o4.GONE ? kAA.HTTP_STATUS_GONE_RETRY_AFTER_MS : this.exponentialRetryStrategy.calculateDelay(Q);
            return B.verbose(`Retrying request in ${G}ms (retry attempt: ${Q+1})`), await new Promise((Z) => {
                return setTimeout(Z, G)
            }), !0
        }
        return !1
    }
}
var E25, z25 = 3,
    U25 = 7,
    $25 = 1000,
    w25 = 4000,
    q25 = 2000,
    N25 = 1e4;
var FQ2 = L(() => {
    E01();
    XQ2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    E25 = [o4.NOT_FOUND, o4.REQUEST_TIMEOUT, o4.GONE, o4.TOO_MANY_REQUESTS]
});
var VQ2 = "/metadata/identity/oauth2/token",
    L25, M25 = "2018-02-01",
    ZLA;
var KQ2 = L(() => {
    jAA();
    PAA();
    HI();
    FQ2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    L25 = `http://169.254.169.254${VQ2}`;
    ZLA = class ZLA extends kU {
        constructor(A, Q, B, G, Z, I) {
            super(A, Q, B, G, Z);
            this.identityEndpoint = I
        }
        static tryCreate(A, Q, B, G, Z) {
            let I;
            if (process.env[D4.AZURE_POD_IDENTITY_AUTHORITY_HOST]) A.info(`[Managed Identity] Environment variable ${D4.AZURE_POD_IDENTITY_AUTHORITY_HOST} for ${T4.IMDS} returned endpoint: ${process.env[D4.AZURE_POD_IDENTITY_AUTHORITY_HOST]}`), I = ZLA.getValidatedEnvVariableUrlString(D4.AZURE_POD_IDENTITY_AUTHORITY_HOST, `${process.env[D4.AZURE_POD_IDENTITY_AUTHORITY_HOST]}${VQ2}`, T4.IMDS, A);
            else A.info(`[Managed Identity] Unable to find ${D4.AZURE_POD_IDENTITY_AUTHORITY_HOST} environment variable for ${T4.IMDS}, using the default endpoint.`), I = L25;
            return new ZLA(A, Q, B, G, Z, I)
        }
        createRequest(A, Q) {
            let B = new Wq(DI.GET, this.identityEndpoint);
            if (B.headers[SU.METADATA_HEADER_NAME] = "true", B.queryParameters[cX.API_VERSION] = M25, B.queryParameters[cX.RESOURCE] = A, Q.idType !== lY.SYSTEM_ASSIGNED) B.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(Q.idType, !0)] = Q.id;
            return B.retryPolicy = new kAA, B
        }
    }
});
var O25 = "2019-07-01-preview",
    yAA;
var DQ2 = L(() => {
    jAA();
    PAA();
    HI(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    yAA = class yAA extends kU {
        constructor(A, Q, B, G, Z, I, Y) {
            super(A, Q, B, G, Z);
            this.identityEndpoint = I, this.identityHeader = Y
        }
        static getEnvironmentVariables() {
            let A = process.env[D4.IDENTITY_ENDPOINT],
                Q = process.env[D4.IDENTITY_HEADER],
                B = process.env[D4.IDENTITY_SERVER_THUMBPRINT];
            return [A, Q, B]
        }
        static tryCreate(A, Q, B, G, Z, I) {
            let [Y, J, W] = yAA.getEnvironmentVariables();
            if (!Y || !J || !W) return A.info(`[Managed Identity] ${T4.SERVICE_FABRIC} managed identity is unavailable because one or all of the '${D4.IDENTITY_HEADER}', '${D4.IDENTITY_ENDPOINT}' or '${D4.IDENTITY_SERVER_THUMBPRINT}' environment variables are not defined.`), null;
            let X = yAA.getValidatedEnvVariableUrlString(D4.IDENTITY_ENDPOINT, Y, T4.SERVICE_FABRIC, A);
            if (A.info(`[Managed Identity] Environment variables validation passed for ${T4.SERVICE_FABRIC} managed identity. Endpoint URI: ${X}. Creating ${T4.SERVICE_FABRIC} managed identity.`), I.idType !== lY.SYSTEM_ASSIGNED) A.warning(`[Managed Identity] ${T4.SERVICE_FABRIC} user assigned managed identity is configured in the cluster, not during runtime. See also: https://learn.microsoft.com/en-us/azure/service-fabric/configure-existing-cluster-enable-managed-identity-token-service.`);
            return new yAA(A, Q, B, G, Z, Y, J)
        }
        createRequest(A, Q) {
            let B = new Wq(DI.GET, this.identityEndpoint);
            if (B.headers[SU.ML_AND_SF_SECRET_HEADER_NAME] = this.identityHeader, B.queryParameters[cX.API_VERSION] = O25, B.queryParameters[cX.RESOURCE] = A, Q.idType !== lY.SYSTEM_ASSIGNED) B.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(Q.idType)] = Q.id;
            return B
        }
    }
});
var R25 = "2017-09-01",
    T25, xAA;
var HQ2 = L(() => {
    PAA();
    HI();
    jAA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    T25 = `Only client id is supported for user-assigned managed identity in ${T4.MACHINE_LEARNING}.`;
    xAA = class xAA extends kU {
        constructor(A, Q, B, G, Z, I, Y) {
            super(A, Q, B, G, Z);
            this.msiEndpoint = I, this.secret = Y
        }
        static getEnvironmentVariables() {
            let A = process.env[D4.MSI_ENDPOINT],
                Q = process.env[D4.MSI_SECRET];
            return [A, Q]
        }
        static tryCreate(A, Q, B, G, Z) {
            let [I, Y] = xAA.getEnvironmentVariables();
            if (!I || !Y) return A.info(`[Managed Identity] ${T4.MACHINE_LEARNING} managed identity is unavailable because one or both of the '${D4.MSI_ENDPOINT}' and '${D4.MSI_SECRET}' environment variables are not defined.`), null;
            let J = xAA.getValidatedEnvVariableUrlString(D4.MSI_ENDPOINT, I, T4.MACHINE_LEARNING, A);
            return A.info(`[Managed Identity] Environment variables validation passed for ${T4.MACHINE_LEARNING} managed identity. Endpoint URI: ${J}. Creating ${T4.MACHINE_LEARNING} managed identity.`), new xAA(A, Q, B, G, Z, I, Y)
        }
        createRequest(A, Q) {
            let B = new Wq(DI.GET, this.msiEndpoint);
            if (B.headers[SU.METADATA_HEADER_NAME] = "true", B.headers[SU.ML_AND_SF_SECRET_HEADER_NAME] = this.secret, B.queryParameters[cX.API_VERSION] = R25, B.queryParameters[cX.RESOURCE] = A, Q.idType === lY.SYSTEM_ASSIGNED) B.queryParameters[TAA.MANAGED_IDENTITY_CLIENT_ID_2017] = process.env[D4.DEFAULT_IDENTITY_CLIENT_ID];
            else if (Q.idType === lY.USER_ASSIGNED_CLIENT_ID) B.queryParameters[this.getManagedIdentityUserAssignedIdQueryParameterKey(Q.idType, !1, !0)] = Q.id;
            else throw Error(T25);
            return B
        }
    }
});
class of {
    constructor(A, Q, B, G, Z) {
        this.logger = A, this.nodeStorage = Q, this.networkClient = B, this.cryptoProvider = G, this.disableInternalRetries = Z
    }
    async sendManagedIdentityTokenRequest(A, Q, B, G) {
        if (!of.identitySource) of.identitySource = this.selectManagedIdentitySource(this.logger, this.nodeStorage, this.networkClient, this.cryptoProvider, this.disableInternalRetries, Q);
        return of.identitySource.acquireTokenWithManagedIdentity(A, Q, B, G)
    }
    allEnvironmentVariablesAreDefined(A) {
        return Object.values(A).every((Q) => {
            return Q !== void 0
        })
    }
    getManagedIdentitySource() {
        return of.sourceName = this.allEnvironmentVariablesAreDefined(yAA.getEnvironmentVariables()) ? T4.SERVICE_FABRIC : this.allEnvironmentVariablesAreDefined(SAA.getEnvironmentVariables()) ? T4.APP_SERVICE : this.allEnvironmentVariablesAreDefined(xAA.getEnvironmentVariables()) ? T4.MACHINE_LEARNING : this.allEnvironmentVariablesAreDefined(_AA.getEnvironmentVariables()) ? T4.CLOUD_SHELL : this.allEnvironmentVariablesAreDefined(kl.getEnvironmentVariables()) ? T4.AZURE_ARC : T4.DEFAULT_TO_IMDS, of.sourceName
    }
    selectManagedIdentitySource(A, Q, B, G, Z, I) {
        let Y = yAA.tryCreate(A, Q, B, G, Z, I) || SAA.tryCreate(A, Q, B, G, Z) || xAA.tryCreate(A, Q, B, G, Z) || _AA.tryCreate(A, Q, B, G, Z, I) || kl.tryCreate(A, Q, B, G, Z, I) || ZLA.tryCreate(A, Q, B, G, Z);
        if (!Y) throw jW(F01);
        return Y
    }
}
var CQ2 = L(() => {
    BQ2();
    JQ2();
    WQ2();
    KQ2();
    DQ2();
    IIA();
    HI();
    HQ2();
    NAA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
class Ek {
    constructor(A) {
        this.config = wA2(A || {}), this.logger = new jU(this.config.system.loggerOptions, S01, pT);
        let Q = {
            canonicalAuthority: L0.DEFAULT_AUTHORITY
        };
        if (!Ek.nodeStorage) Ek.nodeStorage = new MAA(this.logger, this.config.managedIdentityId.id, dZA, Q);
        this.networkClient = this.config.system.networkClient, this.cryptoProvider = new rf;
        let B = {
            protocolMode: lH.AAD,
            knownAuthorities: [pr1],
            cloudDiscoveryMetadata: "",
            authorityMetadata: ""
        };
        this.fakeAuthority = new TF(pr1, this.networkClient, Ek.nodeStorage, B, this.logger, this.cryptoProvider.createNewGuid(), void 0, !0), this.fakeClientCredentialClient = new RAA({
            authOptions: {
                clientId: this.config.managedIdentityId.id,
                authority: this.fakeAuthority
            }
        }), this.managedIdentityClient = new of(this.logger, Ek.nodeStorage, this.networkClient, this.cryptoProvider, this.config.disableInternalRetries), this.hashUtils = new LAA
    }
    async acquireToken(A) {
        if (!A.resource) throw jG(pZA.urlEmptyError);
        let Q = {
            forceRefresh: A.forceRefresh,
            resource: A.resource.replace("/.default", ""),
            scopes: [A.resource.replace("/.default", "")],
            authority: this.fakeAuthority.canonicalAuthority,
            correlationId: this.cryptoProvider.createNewGuid(),
            claims: A.claims,
            clientCapabilities: this.config.clientCapabilities
        };
        if (Q.forceRefresh) return this.acquireTokenFromManagedIdentity(Q, this.config.managedIdentityId, this.fakeAuthority);
        let [B, G] = await this.fakeClientCredentialClient.getCachedAuthenticationResult(Q, this.config, this.cryptoProvider, this.fakeAuthority, Ek.nodeStorage);
        if (Q.claims) {
            let Z = this.managedIdentityClient.getManagedIdentitySource();
            if (B && P25.includes(Z)) {
                let I = this.hashUtils.sha256(B.accessToken).toString(ND.HEX);
                Q.revokedTokenSha256Hash = I
            }
            return this.acquireTokenFromManagedIdentity(Q, this.config.managedIdentityId, this.fakeAuthority)
        }
        if (B) {
            if (G === IZ.PROACTIVELY_REFRESHED) {
                this.logger.info("ClientCredentialClient:getCachedAuthenticationResult - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed.");
                let Z = !0;
                await this.acquireTokenFromManagedIdentity(Q, this.config.managedIdentityId, this.fakeAuthority, Z)
            }
            return B
        } else return this.acquireTokenFromManagedIdentity(Q, this.config.managedIdentityId, this.fakeAuthority)
    }
    async acquireTokenFromManagedIdentity(A, Q, B, G) {
        return this.managedIdentityClient.sendManagedIdentityTokenRequest(A, Q, B, G)
    }
    getManagedIdentitySource() {
        return of.sourceName || this.managedIdentityClient.getManagedIdentitySource()
    }
}
var P25;
var EQ2 = L(() => {
    u7();
    rr1();
    XIA();
    nNA();
    k01();
    CQ2();
    z01();
    HI();
    C01(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    P25 = [T4.SERVICE_FABRIC]
});
class yo1 {
    constructor(A, Q) {
        this.client = A, this.partitionManager = Q
    }
    async beforeCacheAccess(A) {
        let Q = await this.partitionManager.getKey(),
            B = await this.client.get(Q);
        A.tokenCache.deserialize(B)
    }
    async afterCacheAccess(A) {
        if (A.cacheHasChanged) {
            let Q = A.tokenCache.getKVStore(),
                B = Object.values(Q).filter((Z) => dX.isAccountEntity(Z)),
                G;
            if (B.length > 0) {
                let Z = B[0];
                G = await this.partitionManager.extractKey(Z)
            } else G = await this.partitionManager.getKey();
            await this.client.set(G, A.tokenCache.serialize())
        }
    }
}
var zQ2 = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var Xq = {};
pG(Xq, {
    version: () => pT,
    internals: () => cr1,
    UsernamePasswordClient: () => eNA,
    TokenCacheContext: () => vM,
    TokenCache: () => sNA,
    ServerError: () => PE,
    ResponseMode: () => Xk,
    PublicClientApplication: () => QLA,
    ProtocolMode: () => lH,
    PromptValue: () => Vl,
    OnBehalfOfClient: () => BLA,
    ManagedIdentitySourceNames: () => T4,
    ManagedIdentityApplication: () => Ek,
    Logger: () => jU,
    LogLevel: () => pY,
    InteractionRequiredAuthErrorMessage: () => mr1,
    InteractionRequiredAuthErrorCodes: () => p11,
    InteractionRequiredAuthError: () => Jq,
    DistributedCachePlugin: () => yo1,
    DeviceCodeClient: () => ALA,
    CryptoProvider: () => rf,
    ConfidentialClientApplication: () => GLA,
    ClientCredentialClient: () => RAA,
    ClientConfigurationErrorMessage: () => Ls1,
    ClientConfigurationErrorCodes: () => pZA,
    ClientConfigurationError: () => lZA,
    ClientAuthErrorMessage: () => qs1,
    ClientAuthErrorCodes: () => PG,
    ClientAuthError: () => Ul,
    ClientAssertion: () => cT,
    ClientApplication: () => OAA,
    AzureCloudInstance: () => hf,
    AuthErrorMessage: () => $s1,
    AuthErrorCodes: () => mZA,
    AuthError: () => t4
});
var x01 = L(() => {
    BA2();
    s02();
    r02();
    _01();
    k01();
    Po1();
    jo1();
    EQ2();
    Ro1();
    j01();
    Io1();
    zQ2();
    HI();
    nNA();
    u7();
    XIA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var UQ2 = L(() => {
    x01()
});

function FIA(A, Q, B) {
    let G = (Z) => {
        return ILA.getToken.info(Z), new Pf({
            scopes: Array.isArray(A) ? A : [A],
            getTokenOptions: B,
            message: Z
        })
    };
    if (!Q) throw G("No response");
    if (!Q.expiresOn) throw G('Response had no "expiresOn" property.');
    if (!Q.accessToken) throw G('Response had no "accessToken" property.')
}

function xo1(A) {
    let Q = A === null || A === void 0 ? void 0 : A.authorityHost;
    if (!Q && OqA) Q = process.env.AZURE_AUTHORITY_HOST;
    return Q !== null && Q !== void 0 ? Q : HqA
}

function vo1(A, Q) {
    if (!Q) Q = HqA;
    if (new RegExp(`${A}/?$`).test(Q)) return Q;
    if (Q.endsWith("/")) return Q + A;
    else return `${Q}/${A}`
}

function $Q2(A, Q, B) {
    if (A === "adfs" && Q || B) return [Q];
    return []
}

function b01(A) {
    switch (A) {
        case "error":
            return Xq.LogLevel.Error;
        case "info":
            return Xq.LogLevel.Info;
        case "verbose":
            return Xq.LogLevel.Verbose;
        case "warning":
            return Xq.LogLevel.Warning;
        default:
            return Xq.LogLevel.Info
    }
}

function vAA(A, Q, B) {
    if (Q.name === "AuthError" || Q.name === "ClientAuthError" || Q.name === "BrowserAuthError") {
        let G = Q;
        switch (G.errorCode) {
            case "endpoints_resolution_error":
                return ILA.info(h7(A, Q.message)), new d9(Q.message);
            case "device_code_polling_cancelled":
                return new yZA("The authentication has been aborted by the caller.");
            case "consent_required":
            case "interaction_required":
            case "login_required":
                ILA.info(h7(A, `Authentication returned errorCode ${G.errorCode}`));
                break;
            default:
                ILA.info(h7(A, `Failed to acquire token: ${Q.message}`));
                break
        }
    }
    if (Q.name === "ClientConfigurationError" || Q.name === "BrowserConfigurationAuthError" || Q.name === "AbortError" || Q.name === "AuthenticationError") return Q;
    if (Q.name === "NativeAuthError") return ILA.info(h7(A, `Error from the native broker: ${Q.message} with status code: ${Q.statusCode}`)), Q;
    return new Pf({
        scopes: A,
        getTokenOptions: B,
        message: Q.message
    })
}

function wQ2(A) {
    return {
        localAccountId: A.homeAccountId,
        environment: A.authority,
        username: A.username,
        homeAccountId: A.homeAccountId,
        tenantId: A.tenantId
    }
}

function qQ2(A, Q) {
    var B;
    return {
        authority: (B = Q.environment) !== null && B !== void 0 ? B : msB,
        homeAccountId: Q.homeAccountId,
        tenantId: Q.tenantId || usB,
        username: Q.username,
        clientId: A,
        version: j25
    }
}
var ILA, j25 = "1.0",
    v01 = (A, Q = Z11 ? "Node" : "Browser") => (B, G, Z) => {
        if (Z) return;
        switch (B) {
            case Xq.LogLevel.Error:
                A.info(`MSAL ${Q} V2 error: ${G}`);
                return;
            case Xq.LogLevel.Info:
                A.info(`MSAL ${Q} V2 info message: ${G}`);
                return;
            case Xq.LogLevel.Verbose:
                A.info(`MSAL ${Q} V2 verbose message: ${G}`);
                return;
            case Xq.LogLevel.Warning:
                A.info(`MSAL ${Q} V2 warning: ${G}`);
                return
        }
    };
var bo1 = L(() => {
    NE();
    TW();
    MZA();
    Xl();
    Is1();
    UQ2();
    ILA = G7("IdentityUtils")
});

function NQ2(A) {
    return Ds1([{
        name: "imdsRetryPolicy",
        retry: ({
            retryCount: Q,
            response: B
        }) => {
            if ((B === null || B === void 0 ? void 0 : B.status) !== 404) return {
                skipStrategy: !0
            };
            return BtB(Q, {
                retryDelayInMs: A.startDelayInMs,
                maxRetryDelayInMs: S25
            })
        }
    }], {
        maxRetries: A.maxRetries
    })
}
var S25 = 64000;
var LQ2 = L(() => {
    _f();
    Xl()
});

function y25(A) {
    var Q;
    if (!kqA(A)) throw Error(`${tf}: Multiple scopes are not supported.`);
    let G = new URL(k25, (Q = process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) !== null && Q !== void 0 ? Q : _25),
        Z = {
            Accept: "application/json"
        };
    return {
        url: `${G}`,
        method: "GET",
        headers: ye(Z)
    }
}
var tf = "ManagedIdentityCredential - IMDS",
    bAA, _25 = "http://169.254.169.254",
    k25 = "/metadata/identity/oauth2/token",
    fo1;
var MQ2 = L(() => {
    _f();
    Xl();
    TW();
    Iq();
    bAA = G7(tf);
    fo1 = {
        name: "imdsMsi",
        async isAvailable(A) {
            let {
                scopes: Q,
                identityClient: B,
                getTokenOptions: G
            } = A, Z = kqA(Q);
            if (!Z) return bAA.info(`${tf}: Unavailable. Multiple scopes are not supported.`), !1;
            if (process.env.AZURE_POD_IDENTITY_AUTHORITY_HOST) return !0;
            if (!B) throw Error("Missing IdentityClient");
            let I = y25(Z);
            return GY.withSpan("ManagedIdentityCredential-pingImdsEndpoint", G !== null && G !== void 0 ? G : {}, async (Y) => {
                var J, W;
                I.tracingOptions = Y.tracingOptions;
                let X = hT(I);
                X.timeout = ((J = Y.requestOptions) === null || J === void 0 ? void 0 : J.timeout) || 1000, X.allowInsecureConnection = !0;
                let F;
                try {
                    bAA.info(`${tf}: Pinging the Azure IMDS endpoint`), F = await B.sendRequest(X)
                } catch (V) {
                    if (G11(V)) bAA.verbose(`${tf}: Caught error ${V.name}: ${V.message}`);
                    return bAA.info(`${tf}: The Azure IMDS endpoint is unavailable`), !1
                }
                if (F.status === 403) {
                    if ((W = F.bodyAsText) === null || W === void 0 ? void 0 : W.includes("unreachable")) return bAA.info(`${tf}: The Azure IMDS endpoint is unavailable`), bAA.info(`${tf}: ${F.bodyAsText}`), !1
                }
                return bAA.info(`${tf}: The Azure IMDS endpoint is available`), !0
            })
        }
    }
});

function f01(A) {
    var Q, B;
    let G = A;
    if (G === void 0 && ((B = (Q = globalThis.process) === null || Q === void 0 ? void 0 : Q.env) === null || B === void 0 ? void 0 : B.AZURE_REGIONAL_AUTHORITY_NAME) !== void 0) G = process.env.AZURE_REGIONAL_AUTHORITY_NAME;
    if (G === ho1.AutoDiscoverRegion) return "AUTO_DISCOVER";
    return G
}
var ho1;
var OQ2 = L(() => {
    (function(A) {
        A.AutoDiscoverRegion = "AutoDiscoverRegion", A.USWest = "westus", A.USWest2 = "westus2", A.USCentral = "centralus", A.USEast = "eastus", A.USEast2 = "eastus2", A.USNorthCentral = "northcentralus", A.USSouthCentral = "southcentralus", A.USWestCentral = "westcentralus", A.CanadaCentral = "canadacentral", A.CanadaEast = "canadaeast", A.BrazilSouth = "brazilsouth", A.EuropeNorth = "northeurope", A.EuropeWest = "westeurope", A.UKSouth = "uksouth", A.UKWest = "ukwest", A.FranceCentral = "francecentral", A.FranceSouth = "francesouth", A.SwitzerlandNorth = "switzerlandnorth", A.SwitzerlandWest = "switzerlandwest", A.GermanyNorth = "germanynorth", A.GermanyWestCentral = "germanywestcentral", A.NorwayWest = "norwaywest", A.NorwayEast = "norwayeast", A.AsiaEast = "eastasia", A.AsiaSouthEast = "southeastasia", A.JapanEast = "japaneast", A.JapanWest = "japanwest", A.AustraliaEast = "australiaeast", A.AustraliaSouthEast = "australiasoutheast", A.AustraliaCentral = "australiacentral", A.AustraliaCentral2 = "australiacentral2", A.IndiaCentral = "centralindia", A.IndiaSouth = "southindia", A.IndiaWest = "westindia", A.KoreaSouth = "koreasouth", A.KoreaCentral = "koreacentral", A.UAECentral = "uaecentral", A.UAENorth = "uaenorth", A.SouthAfricaNorth = "southafricanorth", A.SouthAfricaWest = "southafricawest", A.ChinaNorth = "chinanorth", A.ChinaEast = "chinaeast", A.ChinaNorth2 = "chinanorth2", A.ChinaEast2 = "chinaeast2", A.GermanyCentral = "germanycentral", A.GermanyNorthEast = "germanynortheast", A.GovernmentUSVirginia = "usgovvirginia", A.GovernmentUSIowa = "usgoviowa", A.GovernmentUSArizona = "usgovarizona", A.GovernmentUSTexas = "usgovtexas", A.GovernmentUSDodEast = "usdodeast", A.GovernmentUSDodCentral = "usdodcentral"
    })(ho1 || (ho1 = {}))
});
import RQ2 from "node:fs";

function x25() {
    try {
        return RQ2.statSync("/.dockerenv"), !0
    } catch {
        return !1
    }
}

function v25() {
    try {
        return RQ2.readFileSync("/proc/self/cgroup", "utf8").includes("docker")
    } catch {
        return !1
    }
}

function uo1() {
    if (go1 === void 0) go1 = x25() || v25();
    return go1
}
var go1;
var TQ2 = () => {};
import b25 from "node:fs";

function VIA() {
    if (mo1 === void 0) mo1 = f25() || uo1();
    return mo1
}
var mo1, f25 = () => {
    try {
        return b25.statSync("/run/.containerenv"), !0
    } catch {
        return !1
    }
};
var do1 = L(() => {
    TQ2()
});
import jQ2 from "node:process";
import h25 from "node:os";
import g25 from "node:fs";
var PQ2 = () => {
        if (jQ2.platform !== "linux") return !1;
        if (h25.release().toLowerCase().includes("microsoft")) {
            if (VIA()) return !1;
            return !0
        }
        try {
            return g25.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !VIA() : !1
        } catch {
            return !1
        }
    },
    yl;
var co1 = L(() => {
    do1();
    yl = jQ2.env.__IS_WSL_TEST__ ? PQ2 : PQ2()
});
import SQ2 from "node:process";
import _Q2, {
    constants as u25
} from "node:fs/promises";
var m25, d25 = async () => {
    return `${await m25()}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`
}, po1 = async () => {
    if (yl) return d25();
    return `${SQ2.env.SYSTEMROOT||SQ2.env.windir||String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
};
var kQ2 = L(() => {
    co1();
    co1();
    m25 = (() => {
        let Q;
        return async function() {
            if (Q) return Q;
            let B = "/etc/wsl.conf",
                G = !1;
            try {
                await _Q2.access(B, u25.F_OK), G = !0
            } catch {}
            if (!G) return "/mnt/";
            let Z = await _Q2.readFile(B, {
                    encoding: "utf8"
                }),
                I = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(Z);
            if (!I) return "/mnt/";
            return Q = I.groups.mountPoint.trim(), Q = Q.endsWith("/") ? Q : `${Q}/`, Q
        }
    })()
});

function xl(A, Q, B) {
    let G = (Z) => Object.defineProperty(A, Q, {
        value: Z,
        enumerable: !0,
        writable: !0
    });
    return Object.defineProperty(A, Q, {
        configurable: !0,
        enumerable: !0,
        get() {
            let Z = B();
            return G(Z), Z
        },
        set(Z) {
            G(Z)
        }
    }), A
}
import {
    promisify as c25
} from "node:util";
import p25 from "node:process";
import {
    execFile as l25
} from "node:child_process";
async function lo1() {
    if (p25.platform !== "darwin") throw Error("macOS only");
    let {
        stdout: A
    } = await i25("defaults", ["read", "com.apple.LaunchServices/com.apple.launchservices.secure", "LSHandlers"]);
    return /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(A)?.groups.id ?? "com.apple.Safari"
}
var i25;
var yQ2 = L(() => {
    i25 = c25(l25)
});
import n25 from "node:process";
import {
    promisify as a25
} from "node:util";
import {
    execFile as s25,
    execFileSync as CzG
} from "node:child_process";
async function xQ2(A, {
    humanReadableOutput: Q = !0,
    signal: B
} = {}) {
    if (n25.platform !== "darwin") throw Error("macOS only");
    let G = Q ? [] : ["-ss"],
        Z = {};
    if (B) Z.signal = B;
    let {
        stdout: I
    } = await r25("osascript", ["-e", A, G], Z);
    return I.trim()
}
var r25;
var vQ2 = L(() => {
    r25 = a25(s25)
});
async function io1(A) {
    return xQ2(`tell application "Finder" to set app_path to application file id "${A}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`)
}
var bQ2 = L(() => {
    vQ2()
});
import {
    promisify as o25
} from "node:util";
import {
    execFile as t25
} from "node:child_process";
async function ao1(A = e25) {
    let {
        stdout: Q
    } = await A("reg", ["QUERY", " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice", "/v", "ProgId"]), B = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(Q);
    if (!B) throw new no1(`Cannot find Windows browser in stdout: ${JSON.stringify(Q)}`);
    let {
        id: G
    } = B.groups, Z = A95[G];
    if (!Z) throw new no1(`Unknown browser ID: ${G}`);
    return Z
}
var e25, A95, no1;
var fQ2 = L(() => {
    e25 = o25(t25), A95 = {
        AppXq0fevzme2pys62n3e0fbqa7peapykr8v: {
            name: "Edge",
            id: "com.microsoft.edge.old"
        },
        MSEdgeDHTML: {
            name: "Edge",
            id: "com.microsoft.edge"
        },
        MSEdgeHTM: {
            name: "Edge",
            id: "com.microsoft.edge"
        },
        "IE.HTTP": {
            name: "Internet Explorer",
            id: "com.microsoft.ie"
        },
        FirefoxURL: {
            name: "Firefox",
            id: "org.mozilla.firefox"
        },
        ChromeHTML: {
            name: "Chrome",
            id: "com.google.chrome"
        },
        BraveHTML: {
            name: "Brave",
            id: "com.brave.Browser"
        },
        BraveBHTML: {
            name: "Brave Beta",
            id: "com.brave.Browser.beta"
        },
        BraveSSHTM: {
            name: "Brave Nightly",
            id: "com.brave.Browser.nightly"
        }
    };
    no1 = class no1 extends Error {}
});
import {
    promisify as Q95
} from "node:util";
import so1 from "node:process";
import {
    execFile as B95
} from "node:child_process";
async function ro1() {
    if (so1.platform === "darwin") {
        let A = await lo1();
        return {
            name: await io1(A),
            id: A
        }
    }
    if (so1.platform === "linux") {
        let {
            stdout: A
        } = await G95("xdg-mime", ["query", "default", "x-scheme-handler/http"]), Q = A.trim();
        return {
            name: Z95(Q.replace(/.desktop$/, "").replace("-", " ")),
            id: Q
        }
    }
    if (so1.platform === "win32") return ao1();
    throw Error("Only macOS, Linux, and Windows are supported")
}
var G95, Z95 = (A) => A.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (Q) => Q.toUpperCase());
var hQ2 = L(() => {
    yQ2();
    bQ2();
    fQ2();
    G95 = Q95(B95)
});
var iQ2 = {};
pG(iQ2, {
    openApp: () => K95,
    default: () => D95,
    apps: () => vl
});
import oo1 from "node:process";
import {
    Buffer as cQ2
} from "node:buffer";
import pQ2 from "node:path";
import {
    fileURLToPath as I95
} from "node:url";
import {
    promisify as Y95
} from "node:util";
import lQ2 from "node:child_process";
import J95, {
    constants as W95
} from "node:fs/promises";
async function F95() {
    let A = await po1(),
        Q = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`,
        B = cQ2.from(Q, "utf16le").toString("base64"),
        {
            stdout: G
        } = await X95(A, ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", B], {
            encoding: "utf8"
        }),
        Z = G.trim(),
        I = {
            ChromeHTML: "com.google.chrome",
            BraveHTML: "com.brave.Browser",
            MSEdgeHTM: "com.microsoft.edge",
            FirefoxURL: "org.mozilla.firefox"
        };
    return I[Z] ? {
        id: I[Z]
    } : {}
}

function dQ2(A) {
    if (typeof A === "string" || Array.isArray(A)) return A;
    let {
        [uQ2]: Q
    } = A;
    if (!Q) throw Error(`${uQ2} is not supported`);
    return Q
}

function h01({
    [KIA]: A
}, {
    wsl: Q
}) {
    if (Q && yl) return dQ2(Q);
    if (!A) throw Error(`${KIA} is not supported`);
    return dQ2(A)
}
var X95, to1, gQ2, KIA, uQ2, mQ2 = async (A, Q) => {
    let B;
    for (let G of A) try {
        return await Q(G)
    } catch (Z) {
        B = Z
    }
    throw B
}, YLA = async (A) => {
    if (A = {
            wait: !1,
            background: !1,
            newInstance: !1,
            allowNonzeroExitCode: !1,
            ...A
        }, Array.isArray(A.app)) return mQ2(A.app, (J) => YLA({
        ...A,
        app: J
    }));
    let {
        name: Q,
        arguments: B = []
    } = A.app ?? {};
    if (B = [...B], Array.isArray(Q)) return mQ2(Q, (J) => YLA({
        ...A,
        app: {
            name: J,
            arguments: B
        }
    }));
    if (Q === "browser" || Q === "browserPrivate") {
        let J = {
                "com.google.chrome": "chrome",
                "google-chrome.desktop": "chrome",
                "com.brave.Browser": "brave",
                "org.mozilla.firefox": "firefox",
                "firefox.desktop": "firefox",
                "com.microsoft.msedge": "edge",
                "com.microsoft.edge": "edge",
                "com.microsoft.edgemac": "edge",
                "microsoft-edge.desktop": "edge"
            },
            W = {
                chrome: "--incognito",
                brave: "--incognito",
                firefox: "--private-window",
                edge: "--inPrivate"
            },
            X = yl ? await F95() : await ro1();
        if (X.id in J) {
            let F = J[X.id];
            if (Q === "browserPrivate") B.push(W[F]);
            return YLA({
                ...A,
                app: {
                    name: vl[F],
                    arguments: B
                }
            })
        }
        throw Error(`${X.name} is not supported as a default browser`)
    }
    let G, Z = [],
        I = {};
    if (KIA === "darwin") {
        if (G = "open", A.wait) Z.push("--wait-apps");
        if (A.background) Z.push("--background");
        if (A.newInstance) Z.push("--new");
        if (Q) Z.push("-a", Q)
    } else if (KIA === "win32" || yl && !VIA() && !Q) {
        if (G = await po1(), Z.push("-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand"), !yl) I.windowsVerbatimArguments = !0;
        let J = ["Start"];
        if (A.wait) J.push("-Wait");
        if (Q) {
            if (J.push(`"\`"${Q}\`""`), A.target) B.push(A.target)
        } else if (A.target) J.push(`"${A.target}"`);
        if (B.length > 0) B = B.map((W) => `"\`"${W}\`""`), J.push("-ArgumentList", B.join(","));
        A.target = cQ2.from(J.join(" "), "utf16le").toString("base64")
    } else {
        if (Q) G = Q;
        else {
            let J = !to1 || to1 === "/",
                W = !1;
            try {
                await J95.access(gQ2, W95.X_OK), W = !0
            } catch {}
            G = oo1.versions.electron ?? (KIA === "android" || J || !W) ? "xdg-open" : gQ2
        }
        if (B.length > 0) Z.push(...B);
        if (!A.wait) I.stdio = "ignore", I.detached = !0
    }
    if (KIA === "darwin" && B.length > 0) Z.push("--args", ...B);
    if (A.target) Z.push(A.target);
    let Y = lQ2.spawn(G, Z, I);
    if (A.wait) return new Promise((J, W) => {
        Y.once("error", W), Y.once("close", (X) => {
            if (!A.allowNonzeroExitCode && X > 0) {
                W(Error(`Exited with code ${X}`));
                return
            }
            J(Y)
        })
    });
    return Y.unref(), Y
}, V95 = (A, Q) => {
    if (typeof A !== "string") throw TypeError("Expected a `target`");
    return YLA({
        ...Q,
        target: A
    })
}, K95 = (A, Q) => {
    if (typeof A !== "string" && !Array.isArray(A)) throw TypeError("Expected a valid `name`");
    let {
        arguments: B = []
    } = Q ?? {};
    if (B !== void 0 && B !== null && !Array.isArray(B)) throw TypeError("Expected `appArguments` as Array type");
    return YLA({
        ...Q,
        app: {
            name: A,
            arguments: B
        }
    })
}, vl, D95;
var nQ2 = L(() => {
    kQ2();
    hQ2();
    do1();
    X95 = Y95(lQ2.execFile), to1 = pQ2.dirname(I95(import.meta.url)), gQ2 = pQ2.join(to1, "xdg-open"), {
        platform: KIA,
        arch: uQ2
    } = oo1;
    vl = {};
    xl(vl, "chrome", () => h01({
        darwin: "google chrome",
        win32: "chrome",
        linux: ["google-chrome", "google-chrome-stable", "chromium"]
    }, {
        wsl: {
            ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
            x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"]
        }
    }));
    xl(vl, "brave", () => h01({
        darwin: "brave browser",
        win32: "brave",
        linux: ["brave-browser", "brave"]
    }, {
        wsl: {
            ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe",
            x64: ["/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"]
        }
    }));
    xl(vl, "firefox", () => h01({
        darwin: "firefox",
        win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`,
        linux: "firefox"
    }, {
        wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe"
    }));
    xl(vl, "edge", () => h01({
        darwin: "microsoft edge",
        win32: "msedge",
        linux: ["microsoft-edge", "microsoft-edge-dev"]
    }, {
        wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
    }));
    xl(vl, "browser", () => "browser");
    xl(vl, "browserPrivate", () => "browserPrivate");
    D95 = V95
});

function H95(A, Q, B = {}) {
    var G, Z, I;
    let Y = VrB((G = B.logger) !== null && G !== void 0 ? G : yU, Q, A),
        J = vo1(Y, xo1(B)),
        W = new fZA(Object.assign(Object.assign({}, B.tokenCredentialOptions), {
            authorityHost: J,
            loggingOptions: B.loggingOptions
        }));
    return {
        auth: {
            clientId: A,
            authority: J,
            knownAuthorities: $Q2(Y, J, B.disableInstanceDiscovery)
        },