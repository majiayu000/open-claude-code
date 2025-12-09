/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_023.js
 * 处理时间: 2025-12-09T03:41:36.254Z
 * 变量映射: 9 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * Fq       ( 15x) MODEL_SONNET = "claude-sonnet-4-5"
 * fAA      (  8x) WorkloadIdentityCredential class
 * V0       (  8x) parseBoolean(value) - Parse bool env
 * XLA      (  6x) ClientCertificateCredential class
 * rQ2      (  3x) ManagedIdentityCredential_TokenExchange
 * LW       (  1x) getSmallFastModel() - Returns haiku model
 * CeB      (  1x) SERVICE_FABRIC_NOT_SUPPORTED message
 * GA       (  1x) esmImport(module) - ESM import
 * D_A      (  1x) getModelProvider(model) - Get provider
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 23/30
 * Lines: 261545 - 263044 (1500 lines)
 * Original file: cli.js
 */

        system: {
            networkClient: W,
            loggerOptions: {
                loggerCallback: v01((Z = B.logger) !== null && Z !== void 0 ? Z : yU),
                logLevel: b01(fA1()),
                piiLoggingEnabled: (I = B.loggingOptions) === null || I === void 0 ? void 0 : I.enableUnsafeSupportLogging
            }
        }
    }
}

function bl(A, Q, B = {}) {
    var G;
    let Z = {
            msalConfig: H95(A, Q, B),
            cachedAccount: B.authenticationRecord ? wQ2(B.authenticationRecord) : null,
            pluginConfiguration: nsB.generatePluginConfiguration(B),
            logger: (G = B.logger) !== null && G !== void 0 ? G : yU
        },
        I = new Map;
    async function Y(R = {}) {
        let P = R.enableCae ? "CAE" : "default",
            y = I.get(P);
        if (y) return Z.logger.getToken.info("Existing PublicClientApplication found in cache, returning it."), y;
        Z.logger.getToken.info(`Creating new PublicClientApplication with CAE ${R.enableCae?"enabled":"disabled"}.`);
        let v = R.enableCae ? Z.pluginConfiguration.cache.cachePluginCae : Z.pluginConfiguration.cache.cachePlugin;
        return Z.msalConfig.auth.clientCapabilities = R.enableCae ? ["cp1"] : void 0, y = new QLA(Object.assign(Object.assign({}, Z.msalConfig), {
            broker: {
                nativeBrokerPlugin: Z.pluginConfiguration.broker.nativeBrokerPlugin
            },
            cache: {
                cachePlugin: await v
            }
        })), I.set(P, y), y
    }
    let J = new Map;
    async function W(R = {}) {
        let P = R.enableCae ? "CAE" : "default",
            y = J.get(P);
        if (y) return Z.logger.getToken.info("Existing ConfidentialClientApplication found in cache, returning it."), y;
        Z.logger.getToken.info(`Creating new ConfidentialClientApplication with CAE ${R.enableCae?"enabled":"disabled"}.`);
        let v = R.enableCae ? Z.pluginConfiguration.cache.cachePluginCae : Z.pluginConfiguration.cache.cachePlugin;
        return Z.msalConfig.auth.clientCapabilities = R.enableCae ? ["cp1"] : void 0, y = new GLA(Object.assign(Object.assign({}, Z.msalConfig), {
            broker: {
                nativeBrokerPlugin: Z.pluginConfiguration.broker.nativeBrokerPlugin
            },
            cache: {
                cachePlugin: await v
            }
        })), J.set(P, y), y
    }
    async function X(R, P, y = {}) {
        if (Z.cachedAccount === null) throw Z.logger.getToken.info("No cached account found in local state."), new Pf({
            scopes: P
        });
        if (y.claims) Z.cachedClaims = y.claims;
        let v = {
            account: Z.cachedAccount,
            scopes: P,
            claims: Z.cachedClaims
        };
        if (Z.pluginConfiguration.broker.isEnabled) {
            if (v.tokenQueryParameters || (v.tokenQueryParameters = {}), Z.pluginConfiguration.broker.enableMsaPassthrough) v.tokenQueryParameters.msal_request_type = "consumer_passthrough"
        }
        if (y.proofOfPossessionOptions) v.shrNonce = y.proofOfPossessionOptions.nonce, v.authenticationScheme = "pop", v.resourceRequestMethod = y.proofOfPossessionOptions.resourceRequestMethod, v.resourceRequestUri = y.proofOfPossessionOptions.resourceRequestUrl;
        Z.logger.getToken.info("Attempting to acquire token silently");
        try {
            return await R.acquireTokenSilent(v)
        } catch (x) {
            throw vAA(P, x, y)
        }
    }

    function F(R) {
        if (R === null || R === void 0 ? void 0 : R.tenantId) return vo1(R.tenantId, xo1(B));
        return Z.msalConfig.auth.authority
    }
    async function V(R, P, y, v) {
        var x, p;
        let u = null;
        try {
            u = await X(R, P, y)
        } catch (o) {
            if (o.name !== "AuthenticationRequiredError") throw o;
            if (y.disableAutomaticAuthentication) throw new Pf({
                scopes: P,
                getTokenOptions: y,
                message: "Automatic authentication has been disabled. You may call the authentication() method."
            })
        }
        if (u === null) try {
            u = await v()
        } catch (o) {
            throw vAA(P, o, y)
        }
        return FIA(P, u, y), Z.cachedAccount = (x = u === null || u === void 0 ? void 0 : u.account) !== null && x !== void 0 ? x : null, Z.logger.getToken.info(pV(P)), {
            token: u.accessToken,
            expiresOnTimestamp: u.expiresOn.getTime(),
            refreshAfterTimestamp: (p = u.refreshOn) === null || p === void 0 ? void 0 : p.getTime(),
            tokenType: u.tokenType
        }
    }
    async function K(R, P, y = {}) {
        var v;
        Z.logger.getToken.info("Attempting to acquire token using client secret"), Z.msalConfig.auth.clientSecret = P;
        let x = await W(y);
        try {
            let p = await x.acquireTokenByClientCredential({
                scopes: R,
                authority: F(y),
                azureRegion: f01(),
                claims: y === null || y === void 0 ? void 0 : y.claims
            });
            return FIA(R, p, y), Z.logger.getToken.info(pV(R)), {
                token: p.accessToken,
                expiresOnTimestamp: p.expiresOn.getTime(),
                refreshAfterTimestamp: (v = p.refreshOn) === null || v === void 0 ? void 0 : v.getTime(),
                tokenType: p.tokenType
            }
        } catch (p) {
            throw vAA(R, p, y)
        }
    }
    async function D(R, P, y = {}) {
        var v;
        Z.logger.getToken.info("Attempting to acquire token using client assertion"), Z.msalConfig.auth.clientAssertion = P;
        let x = await W(y);
        try {
            let p = await x.acquireTokenByClientCredential({
                scopes: R,
                authority: F(y),
                azureRegion: f01(),
                claims: y === null || y === void 0 ? void 0 : y.claims,
                clientAssertion: P
            });
            return FIA(R, p, y), Z.logger.getToken.info(pV(R)), {
                token: p.accessToken,
                expiresOnTimestamp: p.expiresOn.getTime(),
                refreshAfterTimestamp: (v = p.refreshOn) === null || v === void 0 ? void 0 : v.getTime(),
                tokenType: p.tokenType
            }
        } catch (p) {
            throw vAA(R, p, y)
        }
    }
    async function H(R, P, y = {}) {
        var v;
        Z.logger.getToken.info("Attempting to acquire token using client certificate"), Z.msalConfig.auth.clientCertificate = P;
        let x = await W(y);
        try {
            let p = await x.acquireTokenByClientCredential({
                scopes: R,
                authority: F(y),
                azureRegion: f01(),
                claims: y === null || y === void 0 ? void 0 : y.claims
            });
            return FIA(R, p, y), Z.logger.getToken.info(pV(R)), {
                token: p.accessToken,
                expiresOnTimestamp: p.expiresOn.getTime(),
                refreshAfterTimestamp: (v = p.refreshOn) === null || v === void 0 ? void 0 : v.getTime(),
                tokenType: p.tokenType
            }
        } catch (p) {
            throw vAA(R, p, y)
        }
    }
    async function C(R, P, y = {}) {
        Z.logger.getToken.info("Attempting to acquire token using device code");
        let v = await Y(y);
        return V(v, R, y, () => {
            var x, p;
            let u = {
                    scopes: R,
                    cancel: (p = (x = y === null || y === void 0 ? void 0 : y.abortSignal) === null || x === void 0 ? void 0 : x.aborted) !== null && p !== void 0 ? p : !1,
                    deviceCodeCallback: P,
                    authority: F(y),
                    claims: y === null || y === void 0 ? void 0 : y.claims
                },
                o = v.acquireTokenByDeviceCode(u);
            if (y.abortSignal) y.abortSignal.addEventListener("abort", () => {
                u.cancel = !0
            });
            return o
        })
    }
    async function E(R, P, y, v = {}) {
        Z.logger.getToken.info("Attempting to acquire token using username and password");
        let x = await Y(v);
        return V(x, R, v, () => {
            let p = {
                scopes: R,
                username: P,
                password: y,
                authority: F(v),
                claims: v === null || v === void 0 ? void 0 : v.claims
            };
            return x.acquireTokenByUsernamePassword(p)
        })
    }

    function z() {
        if (!Z.cachedAccount) return;
        return qQ2(A, Z.cachedAccount)
    }
    async function w(R, P, y, v, x = {}) {
        Z.logger.getToken.info("Attempting to acquire token using authorization code");
        let p;
        if (v) Z.msalConfig.auth.clientSecret = v, p = await W(x);
        else p = await Y(x);
        return V(p, R, x, () => {
            return p.acquireTokenByCode({
                scopes: R,
                redirectUri: P,
                code: y,
                authority: F(x),
                claims: x === null || x === void 0 ? void 0 : x.claims
            })
        })
    }
    async function N(R, P, y, v = {}) {
        var x;
        if (yU.getToken.info("Attempting to acquire token on behalf of another user"), typeof y === "string") yU.getToken.info("Using client secret for on behalf of flow"), Z.msalConfig.auth.clientSecret = y;
        else if (typeof y === "function") yU.getToken.info("Using client assertion callback for on behalf of flow"), Z.msalConfig.auth.clientAssertion = y;
        else yU.getToken.info("Using client certificate for on behalf of flow"), Z.msalConfig.auth.clientCertificate = y;
        let p = await W(v);
        try {
            let u = await p.acquireTokenOnBehalfOf({
                scopes: R,
                authority: F(v),
                claims: v.claims,
                oboAssertion: P
            });
            return FIA(R, u, v), yU.getToken.info(pV(R)), {
                token: u.accessToken,
                expiresOnTimestamp: u.expiresOn.getTime(),
                refreshAfterTimestamp: (x = u.refreshOn) === null || x === void 0 ? void 0 : x.getTime(),
                tokenType: u.tokenType
            }
        } catch (u) {
            throw vAA(R, u, v)
        }
    }
    async function q(R, P = {}) {
        yU.getToken.info("Attempting to acquire token interactively");
        let y = await Y(P);
        async function v(p) {
            var u;
            yU.verbose("Authentication will resume through the broker");
            let o = x();
            if (Z.pluginConfiguration.broker.parentWindowHandle) o.windowHandle = Buffer.from(Z.pluginConfiguration.broker.parentWindowHandle);
            else yU.warning("Parent window handle is not specified for the broker. This may cause unexpected behavior. Please provide the parentWindowHandle.");
            if (Z.pluginConfiguration.broker.enableMsaPassthrough)((u = o.tokenQueryParameters) !== null && u !== void 0 ? u : o.tokenQueryParameters = {}).msal_request_type = "consumer_passthrough";
            if (p) o.prompt = "none", yU.verbose("Attempting broker authentication using the default broker account");
            else yU.verbose("Attempting broker authentication without the default broker account");
            if (P.proofOfPossessionOptions) o.shrNonce = P.proofOfPossessionOptions.nonce, o.authenticationScheme = "pop", o.resourceRequestMethod = P.proofOfPossessionOptions.resourceRequestMethod, o.resourceRequestUri = P.proofOfPossessionOptions.resourceRequestUrl;
            try {
                return await y.acquireTokenInteractive(o)
            } catch (l) {
                if (yU.verbose(`Failed to authenticate through the broker: ${l.message}`), p) return v(!1);
                else throw l
            }
        }

        function x() {
            var p, u;
            return {
                openBrowser: async (o) => {
                    await (await Promise.resolve().then(() => (nQ2(), iQ2))).default(o, {
                        wait: !0,
                        newInstance: !0
                    })
                },
                scopes: R,
                authority: F(P),
                claims: P === null || P === void 0 ? void 0 : P.claims,
                loginHint: P === null || P === void 0 ? void 0 : P.loginHint,
                errorTemplate: (p = P === null || P === void 0 ? void 0 : P.browserCustomizationOptions) === null || p === void 0 ? void 0 : p.errorMessage,
                successTemplate: (u = P === null || P === void 0 ? void 0 : P.browserCustomizationOptions) === null || u === void 0 ? void 0 : u.successMessage,
                prompt: (P === null || P === void 0 ? void 0 : P.loginHint) ? "login" : "select_account"
            }
        }
        return V(y, R, P, async () => {
            var p;
            let u = x();
            if (Z.pluginConfiguration.broker.isEnabled) return v((p = Z.pluginConfiguration.broker.useDefaultBrokerAccount) !== null && p !== void 0 ? p : !1);
            if (P.proofOfPossessionOptions) u.shrNonce = P.proofOfPossessionOptions.nonce, u.authenticationScheme = "pop", u.resourceRequestMethod = P.proofOfPossessionOptions.resourceRequestMethod, u.resourceRequestUri = P.proofOfPossessionOptions.resourceRequestUrl;
            return y.acquireTokenInteractive(u)
        })
    }
    return {
        getActiveAccount: z,
        getTokenByClientSecret: K,
        getTokenByClientAssertion: D,
        getTokenByClientCertificate: H,
        getTokenByDeviceCode: C,
        getTokenByUsernamePassword: E,
        getTokenByAuthorizationCode: w,
        getTokenOnBehalfOf: N,
        getTokenByInteractiveRequest: q
    }
}
var yU;
var JLA = L(() => {
    x01();
    TW();
    asB();
    bo1();
    NE();
    Es1();
    OQ2();
    Se();
    vT();
    yU = G7("MsalClient")
});
class eo1 {
    constructor(A, Q, B, G = {}) {
        if (!A) throw new d9("ClientAssertionCredential: tenantId is a required parameter.");
        if (!Q) throw new d9("ClientAssertionCredential: clientId is a required parameter.");
        if (!B) throw new d9("ClientAssertionCredential: clientAssertion is a required parameter.");
        this.tenantId = A, this.additionallyAllowedTenantIds = OU(G === null || G === void 0 ? void 0 : G.additionallyAllowedTenants), this.options = G, this.getAssertion = B, this.msalClient = bl(Q, A, Object.assign(Object.assign({}, G), {
            logger: aQ2,
            tokenCredentialOptions: this.options
        }))
    }
    async getToken(A, Q = {}) {
        return GY.withSpan(`${this.constructor.name}.getToken`, Q, async (B) => {
            B.tenantId = LE(this.tenantId, B, this.additionallyAllowedTenantIds, aQ2);
            let G = Array.isArray(A) ? A : [A];
            return this.msalClient.getTokenByClientAssertion(G, this.getAssertion, B)
        })
    }
}
var aQ2;
var sQ2 = L(() => {
    JLA();
    vT();
    NE();
    TW();
    Iq();
    aQ2 = G7("ClientAssertionCredential")
});
import {
    readFile as C95
} from "node:fs/promises";
class hAA {
    constructor(A) {
        this.azureFederatedTokenFileContent = void 0, this.cacheDate = void 0;
        let Q = hA1(E95).assigned.join(", ");
        WLA.info(`Found the following environment variables: ${Q}`);
        let B = A !== null && A !== void 0 ? A : {},
            G = B.tenantId || process.env.AZURE_TENANT_ID,
            Z = B.clientId || process.env.AZURE_CLIENT_ID;
        if (this.federatedTokenFilePath = B.tokenFilePath || process.env.AZURE_FEDERATED_TOKEN_FILE, G) MU(WLA, G);
        if (!Z) throw new d9(`${fAA}: is unavailable. clientId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_CLIENT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
        if (!G) throw new d9(`${fAA}: is unavailable. tenantId is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_TENANT_ID".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
        if (!this.federatedTokenFilePath) throw new d9(`${fAA}: is unavailable. federatedTokenFilePath is a required parameter. In DefaultAzureCredential and ManagedIdentityCredential, this can be provided as an environment variable - "AZURE_FEDERATED_TOKEN_FILE".
        See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`);
        WLA.info(`Invoking ClientAssertionCredential with tenant ID: ${G}, clientId: ${B.clientId} and federated token path: [REDACTED]`), this.client = new eo1(G, Z, this.readFileContents.bind(this), A)
    }
    async getToken(A, Q) {
        if (!this.client) {
            let B = `${fAA}: is unavailable. tenantId, clientId, and federatedTokenFilePath are required parameters. 
      In DefaultAzureCredential and ManagedIdentityCredential, these can be provided as environment variables - 
      "AZURE_TENANT_ID",
      "AZURE_CLIENT_ID",
      "AZURE_FEDERATED_TOKEN_FILE". See the troubleshooting guide for more information: https://aka.ms/azsdk/js/identity/workloadidentitycredential/troubleshoot`;
            throw WLA.info(B), new d9(B)
        }
        return WLA.info("Invoking getToken() of Client Assertion Credential"), this.client.getToken(A, Q)
    }
    async readFileContents() {
        if (this.cacheDate !== void 0 && Date.now() - this.cacheDate >= 300000) this.azureFederatedTokenFileContent = void 0;
        if (!this.federatedTokenFilePath) throw new d9(`${fAA}: is unavailable. Invalid file path provided ${this.federatedTokenFilePath}.`);
        if (!this.azureFederatedTokenFileContent) {
            let Q = (await C95(this.federatedTokenFilePath, "utf8")).trim();
            if (!Q) throw new d9(`${fAA}: is unavailable. No content on the file ${this.federatedTokenFilePath}.`);
            else this.azureFederatedTokenFileContent = Q, this.cacheDate = Date.now()
        }
        return this.azureFederatedTokenFileContent
    }
}
/* fAA = WorkloadIdentityCredential class */
var fAA = "WorkloadIdentityCredential",
    E95, WLA;
var At1 = L(() => {
    TW();
    sQ2();
    NE();
    vT();
    E95 = ["AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_FEDERATED_TOKEN_FILE"], WLA = G7(fAA)
});
/* rQ2 = ManagedIdentityCredential_TokenExchange */
var rQ2 = "ManagedIdentityCredential - Token Exchange",
    z95, Qt1;
var oQ2 = L(() => {
    At1();
    TW();
    z95 = G7(rQ2), Qt1 = {
        name: "tokenExchangeMsi",
        async isAvailable(A) {
            let Q = process.env,
                B = Boolean((A || Q.AZURE_CLIENT_ID) && Q.AZURE_TENANT_ID && process.env.AZURE_FEDERATED_TOKEN_FILE);
            if (!B) z95.info(`${rQ2}: Unavailable. The environment variables needed are: AZURE_CLIENT_ID (or the client ID sent through the parameters), AZURE_TENANT_ID and AZURE_FEDERATED_TOKEN_FILE`);
            return B
        },
        async getToken(A, Q = {}) {
            let {
                scopes: B,
                clientId: G
            } = A, Z = {};
            return new hAA(Object.assign(Object.assign({
                clientId: G,
                tenantId: process.env.AZURE_TENANT_ID,
                tokenFilePath: process.env.AZURE_FEDERATED_TOKEN_FILE
            }, Z), {
                disableInstanceDiscovery: !0
            })).getToken(B, Q)
        }
    }
});
class DIA {
    constructor(A, Q) {
        var B, G;
        this.msiRetryConfig = {
            maxRetries: 5,
            startDelayInMs: 800,
            intervalIncrement: 2
        };
        let Z;
        if (typeof A === "string") this.clientId = A, Z = Q !== null && Q !== void 0 ? Q : {};
        else this.clientId = A === null || A === void 0 ? void 0 : A.clientId, Z = A !== null && A !== void 0 ? A : {};
        this.resourceId = Z === null || Z === void 0 ? void 0 : Z.resourceId, this.objectId = Z === null || Z === void 0 ? void 0 : Z.objectId;
        let I = [{
            key: "clientId",
            value: this.clientId
        }, {
            key: "resourceId",
            value: this.resourceId
        }, {
            key: "objectId",
            value: this.objectId
        }].filter((J) => J.value);
        if (I.length > 1) throw Error(`ManagedIdentityCredential: only one of 'clientId', 'resourceId', or 'objectId' can be provided. Received values: ${JSON.stringify({clientId:this.clientId,resourceId:this.resourceId,objectId:this.objectId})}`);
        if (Z.allowInsecureConnection = !0, ((B = Z.retryOptions) === null || B === void 0 ? void 0 : B.maxRetries) !== void 0) this.msiRetryConfig.maxRetries = Z.retryOptions.maxRetries;
        this.identityClient = new fZA(Object.assign(Object.assign({}, Z), {
            additionalPolicies: [{
                policy: NQ2(this.msiRetryConfig),
                position: "perCall"
            }]
        })), this.managedIdentityApp = new Ek({
            managedIdentityIdParams: {
                userAssignedClientId: this.clientId,
                userAssignedResourceId: this.resourceId,
                userAssignedObjectId: this.objectId
            },
            system: {
                disableInternalRetries: !0,
                networkClient: this.identityClient,
                loggerOptions: {
                    logLevel: b01(fA1()),
                    piiLoggingEnabled: (G = Z.loggingOptions) === null || G === void 0 ? void 0 : G.enableUnsafeSupportLogging,
                    loggerCallback: v01(Fq)
                }
            }
        }), this.isAvailableIdentityClient = new fZA(Object.assign(Object.assign({}, Z), {
            retryOptions: {
                maxRetries: 0
            }
        }));
        let Y = this.managedIdentityApp.getManagedIdentitySource();
        if (Y === "CloudShell") {
            if (this.clientId || this.resourceId || this.objectId) throw Fq.warning(`CloudShell MSI detected with user-provided IDs - throwing. Received values: ${JSON.stringify({clientId:this.clientId,resourceId:this.resourceId,objectId:this.objectId})}.`), new d9("ManagedIdentityCredential: Specifying a user-assigned managed identity is not supported for CloudShell at runtime. When using Managed Identity in CloudShell, omit the clientId, resourceId, and objectId parameters.")
        }
        if (Y === "ServiceFabric") {
            if (this.clientId || this.resourceId || this.objectId) throw Fq.warning(`Service Fabric detected with user-provided IDs - throwing. Received values: ${JSON.stringify({clientId:this.clientId,resourceId:this.resourceId,objectId:this.objectId})}.`), new d9(`ManagedIdentityCredential: ${CeB}`)
        }
        if (Fq.info(`Using ${Y} managed identity.`), I.length === 1) {
            let {
                key: J,
                value: W
            } = I[0];
            Fq.info(`${Y} with ${J}: ${W}`)
        }
    }
    async getToken(A, Q = {}) {
        Fq.getToken.info("Using the MSAL provider for Managed Identity.");
        let B = kqA(A);
        if (!B) throw new d9(`ManagedIdentityCredential: Multiple scopes are not supported. Scopes: ${JSON.stringify(A)}`);
        return GY.withSpan("ManagedIdentityCredential.getToken", Q, async () => {
            var G;
            try {
                let Z = await Qt1.isAvailable(this.clientId),
                    I = this.managedIdentityApp.getManagedIdentitySource(),
                    Y = I === "DefaultToImds" || I === "Imds";
                if (Fq.getToken.info(`MSAL Identity source: ${I}`), Z) {
                    Fq.getToken.info("Using the token exchange managed identity.");
                    let W = await Qt1.getToken({
                        scopes: A,
                        clientId: this.clientId,
                        identityClient: this.identityClient,
                        retryConfig: this.msiRetryConfig,
                        resourceId: this.resourceId
                    });
                    if (W === null) throw new d9("Attempted to use the token exchange managed identity, but received a null response.");
                    return W
                } else if (Y) {
                    if (Fq.getToken.info("Using the IMDS endpoint to probe for availability."), !await fo1.isAvailable({
                            scopes: A,
                            clientId: this.clientId,
                            getTokenOptions: Q,
                            identityClient: this.isAvailableIdentityClient,
                            resourceId: this.resourceId
                        })) throw new d9("Attempted to use the IMDS endpoint, but it is not available.")
                }
                Fq.getToken.info("Calling into MSAL for managed identity token.");
                let J = await this.managedIdentityApp.acquireToken({
                    resource: B
                });
                return this.ensureValidMsalToken(A, J, Q), Fq.getToken.info(pV(A)), {
                    expiresOnTimestamp: J.expiresOn.getTime(),
                    token: J.accessToken,
                    refreshAfterTimestamp: (G = J.refreshOn) === null || G === void 0 ? void 0 : G.getTime(),
                    tokenType: "Bearer"
                }
            } catch (Z) {
                if (Fq.getToken.error(h7(A, Z)), Z.name === "AuthenticationRequiredError") throw Z;
                if (U95(Z)) throw new d9(`ManagedIdentityCredential: Network unreachable. Message: ${Z.message}`, {
                    cause: Z
                });
                throw new d9(`ManagedIdentityCredential: Authentication failed. Message ${Z.message}`, {
                    cause: Z
                })
            }
        })
    }
    ensureValidMsalToken(A, Q, B) {
        let G = (Z) => {
            return Fq.getToken.info(Z), new Pf({
                scopes: Array.isArray(A) ? A : [A],
                getTokenOptions: B,
                message: Z
            })
        };
        if (!Q) throw G("No response.");
        if (!Q.expiresOn) throw G('Response had no "expiresOn" property.');
        if (!Q.accessToken) throw G('Response had no "accessToken" property.')
    }
}

function U95(A) {
    if (A.errorCode === "network_error") return !0;
    if (A.code === "ENETUNREACH" || A.code === "EHOSTUNREACH") return !0;
    if (A.statusCode === 403 || A.code === 403) {
        if (A.message.includes("unreachable")) return !0
    }
    return !1
}
var Fq;
var tQ2 = L(() => {
    Se();
    x01();
    Es1();
    NE();
    bo1();
    LQ2();
    TW();
    Iq();
    MQ2();
    oQ2();
    Fq = G7("ManagedIdentityCredential")
});

function g01(A) {
    return Array.isArray(A) ? A : [A]
}

function HIA(A, Q) {
    if (!A.match(/^[0-9a-zA-Z-_.:/]+$/)) {
        let B = Error("Invalid scope was specified by the user or calling client");
        throw Q.getToken.info(h7(A, B)), B
    }
}

function u01(A) {
    return A.replace(/\/.default$/, "")
}
var CIA = L(() => {
    TW()
});

function Bt1(A, Q) {
    if (!Q.match(/^[0-9a-zA-Z-._ ]+$/)) {
        let B = Error("Invalid subscription provided. You can locate your subscription by following the instructions listed here: https://learn.microsoft.com/azure/azure-portal/get-subscription-tenant-id.");
        throw A.info(h7("", B)), B
    }
}
var eQ2 = L(() => {
    TW()
});
import $95 from "child_process";
class Gt1 {
    constructor(A) {
        if (A === null || A === void 0 ? void 0 : A.tenantId) MU(hM, A === null || A === void 0 ? void 0 : A.tenantId), this.tenantId = A === null || A === void 0 ? void 0 : A.tenantId;
        if (A === null || A === void 0 ? void 0 : A.subscription) Bt1(hM, A === null || A === void 0 ? void 0 : A.subscription), this.subscription = A === null || A === void 0 ? void 0 : A.subscription;
        this.additionallyAllowedTenantIds = OU(A === null || A === void 0 ? void 0 : A.additionallyAllowedTenants), this.timeout = A === null || A === void 0 ? void 0 : A.processTimeoutInMs
    }
    async getToken(A, Q = {}) {
        let B = LE(this.tenantId, Q, this.additionallyAllowedTenantIds);
        if (B) MU(hM, B);
        if (this.subscription) Bt1(hM, this.subscription);
        let G = typeof A === "string" ? A : A[0];
        return hM.getToken.info(`Using the scope ${G}`), GY.withSpan(`${this.constructor.name}.getToken`, Q, async () => {
            var Z, I, Y, J;
            try {
                HIA(G, hM);
                let W = u01(G),
                    X = await AB2.getAzureCliAccessToken(W, B, this.subscription, this.timeout),
                    F = (Z = X.stderr) === null || Z === void 0 ? void 0 : Z.match("(.*)az login --scope(.*)"),
                    V = ((I = X.stderr) === null || I === void 0 ? void 0 : I.match("(.*)az login(.*)")) && !F;
                if (((Y = X.stderr) === null || Y === void 0 ? void 0 : Y.match("az:(.*)not found")) || ((J = X.stderr) === null || J === void 0 ? void 0 : J.startsWith("'az' is not recognized"))) {
                    let D = new d9("Azure CLI could not be found. Please visit https://aka.ms/azure-cli for installation instructions and then, once installed, authenticate to your Azure account using 'az login'.");
                    throw hM.getToken.info(h7(A, D)), D
                }
                if (V) {
                    let D = new d9("Please run 'az login' from a command prompt to authenticate before using this credential.");
                    throw hM.getToken.info(h7(A, D)), D
                }
                try {
                    let D = X.stdout,
                        H = this.parseRawResponse(D);
                    return hM.getToken.info(pV(A)), H
                } catch (D) {
                    if (X.stderr) throw new d9(X.stderr);
                    throw D
                }
            } catch (W) {
                let X = W.name === "CredentialUnavailableError" ? W : new d9(W.message || "Unknown error while trying to retrieve the access token");
                throw hM.getToken.info(h7(A, X)), X
            }
        })
    }
    parseRawResponse(A) {
        let Q = JSON.parse(A),
            B = Q.accessToken,
            G = Number.parseInt(Q.expires_on, 10) * 1000;
        if (!isNaN(G)) return hM.getToken.info("expires_on is available and is valid, using it"), {
            token: B,
            expiresOnTimestamp: G,
            tokenType: "Bearer"
        };
        if (G = new Date(Q.expiresOn).getTime(), isNaN(G)) throw new d9(`Unexpected response from Azure CLI when getting token. Expected "expiresOn" to be a RFC3339 date string. Got: "${Q.expiresOn}"`);
        return {
            token: B,
            expiresOnTimestamp: G,
            tokenType: "Bearer"
        }
    }
}
var hM, AB2;
var QB2 = L(() => {
    vT();
    TW();
    CIA();
    NE();
    Iq();
    eQ2();
    hM = G7("AzureCliCredential"), AB2 = {
        getSafeWorkingDir() {
            if (process.platform === "win32") {
                let A = process.env.SystemRoot || process.env.SYSTEMROOT;
                if (!A) hM.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure CLI credential."), A = "C:\\Windows";
                return A
            } else return "/bin"
        },
        async getAzureCliAccessToken(A, Q, B, G) {
            let Z = [],
                I = [];
            if (Q) Z = ["--tenant", Q];
            if (B) I = ["--subscription", `"${B}"`];
            return new Promise((Y, J) => {
                try {
                    $95.execFile("az", ["account", "get-access-token", "--output", "json", "--resource", A, ...Z, ...I], {
                        cwd: AB2.getSafeWorkingDir(),
                        shell: !0,
                        timeout: G
                    }, (W, X, F) => {
                        Y({
                            stdout: X,
                            stderr: F,
                            error: W
                        })
                    })
                } catch (W) {
                    J(W)
                }
            })
        }
    }
});
import w95 from "child_process";
class Zt1 {
    constructor(A) {
        if (A === null || A === void 0 ? void 0 : A.tenantId) MU(ef, A === null || A === void 0 ? void 0 : A.tenantId), this.tenantId = A === null || A === void 0 ? void 0 : A.tenantId;
        this.additionallyAllowedTenantIds = OU(A === null || A === void 0 ? void 0 : A.additionallyAllowedTenants), this.timeout = A === null || A === void 0 ? void 0 : A.processTimeoutInMs
    }
    async getToken(A, Q = {}) {
        let B = LE(this.tenantId, Q, this.additionallyAllowedTenantIds);
        if (B) MU(ef, B);
        let G;
        if (typeof A === "string") G = [A];
        else G = A;
        return ef.getToken.info(`Using the scopes ${A}`), GY.withSpan(`${this.constructor.name}.getToken`, Q, async () => {
            var Z, I, Y, J;
            try {
                G.forEach((V) => {
                    HIA(V, ef)
                });
                let W = await BB2.getAzdAccessToken(G, B, this.timeout),
                    X = ((Z = W.stderr) === null || Z === void 0 ? void 0 : Z.match("not logged in, run `azd login` to login")) || ((I = W.stderr) === null || I === void 0 ? void 0 : I.match("not logged in, run `azd auth login` to login"));
                if (((Y = W.stderr) === null || Y === void 0 ? void 0 : Y.match("azd:(.*)not found")) || ((J = W.stderr) === null || J === void 0 ? void 0 : J.startsWith("'azd' is not recognized")) || W.error && W.error.code === "ENOENT") {
                    let V = new d9("Azure Developer CLI couldn't be found. To mitigate this issue, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
                    throw ef.getToken.info(h7(A, V)), V
                }
                if (X) {
                    let V = new d9("Please run 'azd auth login' from a command prompt to authenticate before using this credential. For more information, see the troubleshooting guidelines at https://aka.ms/azsdk/js/identity/azdevclicredential/troubleshoot.");
                    throw ef.getToken.info(h7(A, V)), V
                }
                try {
                    let V = JSON.parse(W.stdout);
                    return ef.getToken.info(pV(A)), {
                        token: V.token,
                        expiresOnTimestamp: new Date(V.expiresOn).getTime(),
                        tokenType: "Bearer"
                    }
                } catch (V) {
                    if (W.stderr) throw new d9(W.stderr);
                    throw V
                }
            } catch (W) {
                let X = W.name === "CredentialUnavailableError" ? W : new d9(W.message || "Unknown error while trying to retrieve the access token");
                throw ef.getToken.info(h7(A, X)), X
            }
        })
    }
}
var ef, BB2;
var GB2 = L(() => {
    TW();
    NE();
    vT();
    Iq();
    CIA();
    ef = G7("AzureDeveloperCliCredential"), BB2 = {
        getSafeWorkingDir() {
            if (process.platform === "win32") {
                let A = process.env.SystemRoot || process.env.SYSTEMROOT;
                if (!A) ef.getToken.warning("The SystemRoot environment variable is not set. This may cause issues when using the Azure Developer CLI credential."), A = "C:\\Windows";
                return A
            } else return "/bin"
        },
        async getAzdAccessToken(A, Q, B) {
            let G = [];
            if (Q) G = ["--tenant-id", Q];
            return new Promise((Z, I) => {
                try {
                    w95.execFile("azd", ["auth", "token", "--output", "json", ...A.reduce((Y, J) => Y.concat("--scope", J), []), ...G], {
                        cwd: BB2.getSafeWorkingDir(),
                        timeout: B
                    }, (Y, J, W) => {
                        Z({
                            stdout: J,
                            stderr: W,
                            error: Y
                        })
                    })
                } catch (Y) {
                    I(Y)
                }
            })
        }
    }
});
import * as ZB2 from "child_process";
var IB2;
var YB2 = L(() => {
    IB2 = {
        execFile(A, Q, B) {
            return new Promise((G, Z) => {
                ZB2.execFile(A, Q, B, (I, Y, J) => {
                    if (Buffer.isBuffer(Y)) Y = Y.toString("utf8");
                    if (Buffer.isBuffer(J)) J = J.toString("utf8");
                    if (J || I) Z(J ? Error(J) : I);
                    else G(Y)
                })
            })
        }
    }
});

function XB2(A) {
    if (WB2) return `${A}.exe`;
    else return A
}
async function JB2(A, Q) {
    let B = [];
    for (let G of A) {
        let [Z, ...I] = G, Y = await IB2.execFile(Z, I, {
            encoding: "utf8",
            timeout: Q
        });
        B.push(Y)
    }
    return B
}
class Jt1 {
    constructor(A) {
        if (A === null || A === void 0 ? void 0 : A.tenantId) MU(Ah, A === null || A === void 0 ? void 0 : A.tenantId), this.tenantId = A === null || A === void 0 ? void 0 : A.tenantId;
        this.additionallyAllowedTenantIds = OU(A === null || A === void 0 ? void 0 : A.additionallyAllowedTenants), this.timeout = A === null || A === void 0 ? void 0 : A.processTimeoutInMs
    }
    async getAzurePowerShellAccessToken(A, Q, B) {
        for (let G of [...Yt1]) {
            try {
                await JB2([
                    [G, "/?"]
                ], B)
            } catch (Y) {
                Yt1.shift();
                continue
            }
            let I = (await JB2([
                [G, "-NoProfile", "-NonInteractive", "-Command", `
          $tenantId = "${Q!==null&&Q!==void 0?Q:""}"
          $m = Import-Module Az.Accounts -MinimumVersion 2.2.0 -PassThru
          $useSecureString = $m.Version -ge [version]'2.17.0'

          $params = @{
            ResourceUrl = "${A}"
          }

          if ($tenantId.Length -gt 0) {
            $params["TenantId"] = $tenantId
          }

          if ($useSecureString) {
            $params["AsSecureString"] = $true
          }

          $token = Get-AzAccessToken @params

          $result = New-Object -TypeName PSObject
          $result | Add-Member -MemberType NoteProperty -Name ExpiresOn -Value $token.ExpiresOn
          if ($useSecureString) {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value (ConvertFrom-SecureString -AsPlainText $token.Token)
          } else {
            $result | Add-Member -MemberType NoteProperty -Name Token -Value $token.Token
          }

          Write-Output (ConvertTo-Json $result)
          `]
            ]))[0];
            return L95(I)
        }
        throw Error("Unable to execute PowerShell. Ensure that it is installed in your system")
    }
    async getToken(A, Q = {}) {
        return GY.withSpan(`${this.constructor.name}.getToken`, Q, async () => {
            let B = LE(this.tenantId, Q, this.additionallyAllowedTenantIds),
                G = typeof A === "string" ? A : A[0];
            if (B) MU(Ah, B);
            try {
                HIA(G, Ah), Ah.getToken.info(`Using the scope ${G}`);
                let Z = u01(G),
                    I = await this.getAzurePowerShellAccessToken(Z, B, this.timeout);
                return Ah.getToken.info(pV(A)), {
                    token: I.Token,
                    expiresOnTimestamp: new Date(I.ExpiresOn).getTime(),
                    tokenType: "Bearer"
                }
            } catch (Z) {
                if (N95(Z)) {
                    let Y = new d9(It1.installed);
                    throw Ah.getToken.info(h7(G, Y)), Y
                } else if (q95(Z)) {
                    let Y = new d9(It1.login);
                    throw Ah.getToken.info(h7(G, Y)), Y
                }
                let I = new d9(`${Z}. ${It1.troubleshoot}`);
                throw Ah.getToken.info(h7(G, I)), I
            }
        })
    }
}
async function L95(A) {
    let Q = /{[^{}]*}/g,
        B = A.match(Q),
        G = A;
    if (B) try {
        for (let Z of B) try {
            let I = JSON.parse(Z);
            if (I === null || I === void 0 ? void 0 : I.Token) {
                if (G = G.replace(Z, ""), G) Ah.getToken.warning(G);
                return I
            }
        } catch (I) {
            continue
        }
    } catch (Z) {
        throw Error(`Unable to parse the output of PowerShell. Received output: ${A}`)
    }
    throw Error(`No access token found in the output. Received output: ${A}`)
}
var Ah, WB2, FB2, It1, q95 = (A) => A.message.match(`(.*)${FB2.login}(.*)`),
    N95 = (A) => A.message.match(FB2.installed),
    Yt1;
var VB2 = L(() => {
    vT();
    TW();
    CIA();
    NE();
    YB2();
    Iq();
    Ah = G7("AzurePowerShellCredential"), WB2 = process.platform === "win32";
    FB2 = {
        login: "Run Connect-AzAccount to login",
        installed: "The specified module 'Az.Accounts' with version '2.2.0' was not loaded because no valid module file was found in any module directory"
    }, It1 = {
        login: "Please run 'Connect-AzAccount' from PowerShell to authenticate before using this credential.",
        installed: `The 'Az.Account' module >= 2.2.0 is not installed. Install the Azure Az PowerShell module with: "Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force".`,
        troubleshoot: "To troubleshoot, visit https://aka.ms/azsdk/js/identity/powershellcredential/troubleshoot."
    }, Yt1 = [XB2("pwsh")];
    if (WB2) Yt1.push(XB2("powershell"))
});
class Xt1 {
    constructor(...A) {
        this._sources = [], this._sources = A
    }
    async getToken(A, Q = {}) {
        let {
            token: B
        } = await this.getTokenInternal(A, Q);
        return B
    }
    async getTokenInternal(A, Q = {}) {
        let B = null,
            G, Z = [];
        return GY.withSpan("ChainedTokenCredential.getToken", Q, async (I) => {
            for (let Y = 0; Y < this._sources.length && B === null; Y++) try {
                B = await this._sources[Y].getToken(A, I), G = this._sources[Y]
            } catch (J) {
                if (J.name === "CredentialUnavailableError" || J.name === "AuthenticationRequiredError") Z.push(J);
                else throw Wt1.getToken.info(h7(A, J)), J
            }
            if (!B && Z.length > 0) {
                let Y = new Ea1(Z, "ChainedTokenCredential authentication failed.");
                throw Wt1.getToken.info(h7(A, Y)), Y
            }
            if (Wt1.getToken.info(`Result for ${G.constructor.name}: ${pV(A)}`), B === null) throw new d9("Failed to retrieve a valid token");
            return {
                token: B,
                successfulCredential: G
            }
        })
    }
}
var Wt1;
var KB2 = L(() => {
    NE();
    TW();
    Iq();
    Wt1 = G7("ChainedTokenCredential")
});
import {
    createHash as DB2,
    createPrivateKey as M95
} from "node:crypto";
import {
    readFile as O95
} from "node:fs/promises";
class Ft1 {
    constructor(A, Q, B, G = {}) {
        if (!A || !Q) throw Error(`${XLA}: tenantId and clientId are required parameters.`);
        this.tenantId = A, this.additionallyAllowedTenantIds = OU(G === null || G === void 0 ? void 0 : G.additionallyAllowedTenants), this.sendCertificateChain = G.sendCertificateChain, this.certificateConfiguration = Object.assign({}, typeof B === "string" ? {
            certificatePath: B
        } : B);
        let Z = this.certificateConfiguration.certificate,
            I = this.certificateConfiguration.certificatePath;
        if (!this.certificateConfiguration || !(Z || I)) throw Error(`${XLA}: Provide either a PEM certificate in string form, or the path to that certificate in the filesystem. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
        if (Z && I) throw Error(`${XLA}: To avoid unexpected behaviors, providing both the contents of a PEM certificate and the path to a PEM certificate is forbidden. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.`);
        this.msalClient = bl(Q, A, Object.assign(Object.assign({}, G), {
            logger: HB2,
            tokenCredentialOptions: G
        }))
    }
    async getToken(A, Q = {}) {
        return GY.withSpan(`${XLA}.getToken`, Q, async (B) => {
            B.tenantId = LE(this.tenantId, B, this.additionallyAllowedTenantIds, HB2);
            let G = Array.isArray(A) ? A : [A],
                Z = await this.buildClientCertificate();
            return this.msalClient.getTokenByClientCertificate(G, Z, B)
        })
    }
    async buildClientCertificate() {
        var A;
        let Q = await R95(this.certificateConfiguration, (A = this.sendCertificateChain) !== null && A !== void 0 ? A : !1),
            B;
        if (this.certificateConfiguration.certificatePassword !== void 0) B = M95({
            key: Q.certificateContents,
            passphrase: this.certificateConfiguration.certificatePassword,
            format: "pem"
        }).export({
            format: "pem",
            type: "pkcs8"
        }).toString();
        else B = Q.certificateContents;
        return {
            thumbprint: Q.thumbprint,
            thumbprintSha256: Q.thumbprintSha256,
            privateKey: B,
            x5c: Q.x5c
        }
    }
}
async function R95(A, Q) {
    let {
        certificate: B,
        certificatePath: G
    } = A, Z = B || await O95(G, "utf8"), I = Q ? Z : void 0, Y = /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g, J = [], W;
    do
        if (W = Y.exec(Z), W) J.push(W[3]); while (W);
    if (J.length === 0) throw Error("The file at the specified path does not contain a PEM-encoded certificate.");
    let X = DB2("sha1").update(Buffer.from(J[0], "base64")).digest("hex").toUpperCase(),
        F = DB2("sha256").update(Buffer.from(J[0], "base64")).digest("hex").toUpperCase();
    return {
        certificateContents: Z,
        thumbprintSha256: F,
        thumbprint: X,
        x5c: I
    }
}
/* XLA = ClientCertificateCredential class */
var XLA = "ClientCertificateCredential",
    HB2;
var CB2 = L(() => {
    JLA();
    vT();
    TW();
    Iq();
    HB2 = G7(XLA)
});
class Vt1 {
    constructor(A, Q, B, G = {}) {
        if (!A) throw new d9("ClientSecretCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
        if (!Q) throw new d9("ClientSecretCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
        if (!B) throw new d9("ClientSecretCredential: clientSecret is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/serviceprincipalauthentication/troubleshoot.");
        this.clientSecret = B, this.tenantId = A, this.additionallyAllowedTenantIds = OU(G === null || G === void 0 ? void 0 : G.additionallyAllowedTenants), this.msalClient = bl(Q, A, Object.assign(Object.assign({}, G), {
            logger: EB2,
            tokenCredentialOptions: G
        }))
    }
    async getToken(A, Q = {}) {
        return GY.withSpan(`${this.constructor.name}.getToken`, Q, async (B) => {
            B.tenantId = LE(this.tenantId, B, this.additionallyAllowedTenantIds, EB2);
            let G = g01(A);
            return this.msalClient.getTokenByClientSecret(G, this.clientSecret, B)
        })
    }
}
var EB2;
var zB2 = L(() => {
    JLA();
    vT();
    NE();
    TW();
    CIA();
    Iq();
    EB2 = G7("ClientSecretCredential")
});
class Kt1 {
    constructor(A, Q, B, G, Z = {}) {
        if (!A) throw new d9("UsernamePasswordCredential: tenantId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        if (!Q) throw new d9("UsernamePasswordCredential: clientId is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        if (!B) throw new d9("UsernamePasswordCredential: username is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        if (!G) throw new d9("UsernamePasswordCredential: password is a required parameter. To troubleshoot, visit https://aka.ms/azsdk/js/identity/usernamepasswordcredential/troubleshoot.");
        this.tenantId = A, this.additionallyAllowedTenantIds = OU(Z === null || Z === void 0 ? void 0 : Z.additionallyAllowedTenants), this.username = B, this.password = G, this.msalClient = bl(Q, this.tenantId, Object.assign(Object.assign({}, Z), {
            tokenCredentialOptions: Z !== null && Z !== void 0 ? Z : {}
        }))
    }
    async getToken(A, Q = {}) {
        return GY.withSpan(`${this.constructor.name}.getToken`, Q, async (B) => {
            B.tenantId = LE(this.tenantId, B, this.additionallyAllowedTenantIds, T95);
            let G = g01(A);
            return this.msalClient.getTokenByUsernamePassword(G, this.username, this.password, B)
        })
    }
}
var T95;
var UB2 = L(() => {
    JLA();
    vT();
    NE();
    TW();
    CIA();
    Iq();
    T95 = G7("UsernamePasswordCredential")
});

function j95() {
    var A;
    return ((A = process.env.AZURE_ADDITIONALLY_ALLOWED_TENANTS) !== null && A !== void 0 ? A : "").split(";")
}

function S95() {
    var A;
    let Q = ((A = process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN) !== null && A !== void 0 ? A : "").toLowerCase(),
        B = Q === "true" || Q === "1";
    return Qh.verbose(`AZURE_CLIENT_SEND_CERTIFICATE_CHAIN: ${process.env.AZURE_CLIENT_SEND_CERTIFICATE_CHAIN}; sendCertificateChain: ${B}`), B
}
class Dt1 {
    constructor(A) {
        this._credential = void 0;
        let Q = hA1(P95).assigned.join(", ");
        Qh.info(`Found the following environment variables: ${Q}`);
        let B = process.env.AZURE_TENANT_ID,
            G = process.env.AZURE_CLIENT_ID,
            Z = process.env.AZURE_CLIENT_SECRET,
            I = j95(),
            Y = S95(),
            J = Object.assign(Object.assign({}, A), {
                additionallyAllowedTenantIds: I,
                sendCertificateChain: Y
            });
        if (B) MU(Qh, B);
        if (B && G && Z) {
            Qh.info(`Invoking ClientSecretCredential with tenant ID: ${B}, clientId: ${G} and clientSecret: [REDACTED]`), this._credential = new Vt1(B, G, Z, J);
            return
        }
        let W = process.env.AZURE_CLIENT_CERTIFICATE_PATH,
            X = process.env.AZURE_CLIENT_CERTIFICATE_PASSWORD;
        if (B && G && W) {
            Qh.info(`Invoking ClientCertificateCredential with tenant ID: ${B}, clientId: ${G} and certificatePath: ${W}`), this._credential = new Ft1(B, G, {
                certificatePath: W,
                certificatePassword: X
            }, J);
            return
        }
        let F = process.env.AZURE_USERNAME,
            V = process.env.AZURE_PASSWORD;
        if (B && G && F && V) Qh.info(`Invoking UsernamePasswordCredential with tenant ID: ${B}, clientId: ${G} and username: ${F}`), Qh.warning("Environment is configured to use username and password authentication. This authentication method is deprecated, as it doesn't support multifactor authentication (MFA). Use a more secure credential. For more details, see https://aka.ms/azsdk/identity/mfa."), this._credential = new Kt1(B, G, F, V, J)
    }
    async getToken(A, Q = {}) {
        return GY.withSpan(`${m01}.getToken`, Q, async (B) => {
            if (this._credential) try {
                let G = await this._credential.getToken(A, B);
                return Qh.getToken.info(pV(A)), G
            } catch (G) {
                let Z = new CqA(400, {
                    error: `${m01} authentication failed. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`,
                    error_description: G.message.toString().split("More details:").join("")
                });
                throw Qh.getToken.info(h7(A, Z)), Z
            }
            throw new d9(`${m01} is unavailable. No underlying credential could be used. To troubleshoot, visit https://aka.ms/azsdk/js/identity/environmentcredential/troubleshoot.`)
        })
    }
}
var P95, m01 = "EnvironmentCredential",
    Qh;
var $B2 = L(() => {
    NE();
    TW();
    CB2();
    zB2();
    UB2();
    vT();
    Iq();
    P95 = ["AZURE_TENANT_ID", "AZURE_CLIENT_ID", "AZURE_CLIENT_SECRET", "AZURE_CLIENT_CERTIFICATE_PATH", "AZURE_CLIENT_CERTIFICATE_PASSWORD", "AZURE_USERNAME", "AZURE_PASSWORD", "AZURE_ADDITIONALLY_ALLOWED_TENANTS", "AZURE_CLIENT_SEND_CERTIFICATE_CHAIN"];
    Qh = G7(m01)
});

function _95(A = {}) {
    var Q, B, G, Z;
    (Q = A.retryOptions) !== null && Q !== void 0 || (A.retryOptions = {
        maxRetries: 5,
        retryDelayInMs: 800
    });
    let I = (B = A === null || A === void 0 ? void 0 : A.managedIdentityClientId) !== null && B !== void 0 ? B : process.env.AZURE_CLIENT_ID,
        Y = (G = A === null || A === void 0 ? void 0 : A.workloadIdentityClientId) !== null && G !== void 0 ? G : I,
        J = A === null || A === void 0 ? void 0 : A.managedIdentityResourceId,
        W = process.env.AZURE_FEDERATED_TOKEN_FILE,
        X = (Z = A === null || A === void 0 ? void 0 : A.tenantId) !== null && Z !== void 0 ? Z : process.env.AZURE_TENANT_ID;
    if (J) {
        let F = Object.assign(Object.assign({}, A), {
            resourceId: J
        });
        return new DIA(F)
    }
    if (W && Y) {
        let F = Object.assign(Object.assign({}, A), {
            tenantId: X
        });
        return new DIA(Y, F)
    }
    if (I) {
        let F = Object.assign(Object.assign({}, A), {
            clientId: I
        });
        return new DIA(F)
    }
    return new DIA(A)
}

function k95(A) {
    var Q, B, G;
    let Z = (Q = A === null || A === void 0 ? void 0 : A.managedIdentityClientId) !== null && Q !== void 0 ? Q : process.env.AZURE_CLIENT_ID,
        I = (B = A === null || A === void 0 ? void 0 : A.workloadIdentityClientId) !== null && B !== void 0 ? B : Z,
        Y = process.env.AZURE_FEDERATED_TOKEN_FILE,
        J = (G = A === null || A === void 0 ? void 0 : A.tenantId) !== null && G !== void 0 ? G : process.env.AZURE_TENANT_ID;
    if (Y && I) {
        let W = Object.assign(Object.assign({}, A), {
            tenantId: J,
            clientId: I,
            tokenFilePath: Y
        });
        return new hAA(W)
    }
    if (J) {
        let W = Object.assign(Object.assign({}, A), {
            tenantId: J
        });
        return new hAA(W)
    }
    return new hAA(A)
}

function y95(A = {}) {
    let Q = A.processTimeoutInMs;
    return new Zt1(Object.assign({
        processTimeoutInMs: Q
    }, A))
}

function x95(A = {}) {
    let Q = A.processTimeoutInMs;
    return new Gt1(Object.assign({
        processTimeoutInMs: Q
    }, A))
}

function v95(A = {}) {
    let Q = A.processTimeoutInMs;
    return new Jt1(Object.assign({
        processTimeoutInMs: Q
    }, A))
}

function b95(A = {}) {
    return new Dt1(A)
}
class wB2 {
    constructor(A, Q) {
        this.credentialName = A, this.credentialUnavailableErrorMessage = Q
    }
    getToken() {
        return Ht1.getToken.info(`Skipping ${this.credentialName}, reason: ${this.credentialUnavailableErrorMessage}`), Promise.resolve(null)
    }
}
var Ht1, d01;
var qB2 = L(() => {
    tQ2();
    QB2();
    GB2();
    VB2();
    KB2();
    $B2();
    At1();
    TW();
    Ht1 = G7("DefaultAzureCredential");
    d01 = class d01 extends Xt1 {
        constructor(A) {
            let Q = process.env.AZURE_TOKEN_CREDENTIALS ? process.env.AZURE_TOKEN_CREDENTIALS.trim().toLowerCase() : void 0,
                B = [x95, v95, y95],
                G = [b95, k95, _95],
                Z = [];
            if (Q) switch (Q) {
                case "dev":
                    Z = B;
                    break;
                case "prod":
                    Z = G;
                    break;
                default: {
                    let Y = `Invalid value for AZURE_TOKEN_CREDENTIALS = ${process.env.AZURE_TOKEN_CREDENTIALS}. Valid values are 'prod' or 'dev'.`;
                    throw Ht1.warning(Y), Error(Y)
                }
            } else Z = [...G, ...B];
            let I = Z.map((Y) => {
                try {
                    return Y(A)
                } catch (J) {
                    return Ht1.warning(`Skipped ${Y.name} because of an error creating the credential: ${J}`), new wB2(Y.name, J.message)
                }
            });
            super(...I)
        }
    }
});

function Ct1(A, Q, B) {
    let {
        abortSignal: G,
        tracingOptions: Z
    } = B || {}, I = MqA();
    I.addPolicy(SqA({
        credential: A,
        scopes: Q
    }));
    async function Y() {
        var J;
        let X = (J = (await I.sendRequest({
            sendRequest: (F) => Promise.resolve({
                request: F,
                status: 200,
                headers: F.headers
            })
        }, hT({
            url: "https://example.com",
            abortSignal: G,
            tracingOptions: Z
        }))).headers.get("authorization")) === null || J === void 0 ? void 0 : J.split(" ")[1];
        if (!X) throw Error("Failed to get access token");
        return X
    }
    return Y
}
var NB2 = L(() => {
    _f()
});
var LB2 = L(() => {
    qB2();
    NB2();
    UeB()
});

function c01() {
    return {
        error: (A, ...Q) => console.error("[Anthropic SDK ERROR]", A, ...Q),
        warn: (A, ...Q) => console.error("[Anthropic SDK WARN]", A, ...Q),
        info: (A, ...Q) => console.error("[Anthropic SDK INFO]", A, ...Q),
        debug: (A, ...Q) => console.error("[Anthropic SDK DEBUG]", A, ...Q)
    }
}
async function Vq({
    apiKey: A,
    maxRetries: Q,
    model: B,
    fetchOverride: G
}) {
    let Z = process.env.CLAUDE_CODE_CONTAINER_ID,
        I = process.env.CLAUDE_CODE_REMOTE_SESSION_ID,
        Y = {
            "x-app": "cli",
            "User-Agent": Wp(),
            ...h95(),
            ...Z ? {
                "x-claude-remote-container-id": Z
            } : {},
            ...I ? {
                "x-claude-remote-session-id": I
            } : {}
        };
    if (V0(process.env.CLAUDE_CODE_ADDITIONAL_PROTECTION)) Y["x-anthropic-additional-protection"] = "true";
    if (await ko(), !AB()) f95(Y, H5());
    let W = {
        defaultHeaders: Y,
        maxRetries: Q,
        timeout: parseInt(process.env.API_TIMEOUT_MS || String(600000), 10),
        dangerouslyAllowBrowser: !0,
        fetchOptions: F3A(),
        ...G && {
            fetch: G
        }
    };
    if (V0(process.env.CLAUDE_CODE_USE_BEDROCK)) {
        let F = B === LW() && process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION ? process.env.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION : OBA(),
            V = {
                ...W,
                awsRegion: F,
                ...V0(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH) && {
                    skipAuth: !0
                },
                ...Sj() && {
                    logger: c01()
                }
            };
        if (process.env.AWS_BEARER_TOKEN_BEDROCK) V.skipAuth = !0, V.defaultHeaders = {
            ...V.defaultHeaders,
            Authorization: `Bearer ${process.env.AWS_BEARER_TOKEN_BEDROCK}`
        };
        else if (!V0(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH)) {
            let K = await K3A();
            if (K) V.awsAccessKey = K.accessKeyId, V.awsSecretKey = K.secretAccessKey, V.awsSessionToken = K.sessionToken
        }
        return new veA(V)
    }
    if (V0(process.env.CLAUDE_CODE_USE_FOUNDRY)) {
        let F;
        if (!process.env.ANTHROPIC_FOUNDRY_API_KEY)
            if (V0(process.env.CLAUDE_CODE_SKIP_FOUNDRY_AUTH)) F = () => Promise.resolve("");
            else F = Ct1(new d01, "https://cognitiveservices.azure.com/.default");
        let V = {
            ...W,
            ...F && {
                azureADTokenProvider: F
            },
            ...Sj() && {
                logger: c01()
            }
        };
        return new geA(V)
    }
    if (V0(process.env.CLAUDE_CODE_USE_VERTEX)) {
        let F = process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT || process.env.gcloud_project || process.env.google_cloud_project,
            V = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials,
            K = V0(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH) ? {
                getClient: () => ({
                    getRequestHeaders: () => ({})
                })
            } : new MB2.GoogleAuth({
                scopes: ["https://www.googleapis.com/auth/cloud-platform"],
                ...F || V ? {} : {
                    projectId: process.env.ANTHROPIC_VERTEX_PROJECT_ID
                }
            }),
            D = {
                ...W,
                region: D_A(B),
                googleAuth: K,
                ...Sj() && {
                    logger: c01()
                }
            };
        return new _A1(D)
    }
    let X = {
        apiKey: AB() ? null : A || Zw(),
        authToken: AB() ? U6()?.accessToken : void 0,
        ...{},
        ...W,
        ...Sj() && {
            logger: c01()
        }
    };
    return new MT(X)
}

function f95(A, Q) {
    let B = process.env.ANTHROPIC_AUTH_TOKEN || sEA(Q);
    if (B) A.Authorization = `Bearer ${B}`
}

function h95() {
    let A = {},
        Q = process.env.ANTHROPIC_CUSTOM_HEADERS;
    if (!Q) return A;
    let B = Q.split(/\n|\r\n/);
    for (let G of B) {
        if (!G.trim()) continue;
        let Z = G.match(/^\s*(.*?)\s*:\s*(.*?)\s*$/);
        if (Z) {
            let [, I, Y] = Z;
            if (I && Y !== void 0) A[I] = Y
        }
    }
    return A
}
var MB2;
var EIA = L(() => {
    RcB();
    kcB();
    l_();
    gsB();
    LB2();
    hB();
    S0();
    XE();
    hQ();
    Vc();
    EX();
    D0();
    s2();
    MB2 = GA(Qa1(), 1)
});
import {
    createHash as TB2
} from "crypto";
import {
    dirname as p01,
    join as PB2
} from "path";
import * as jB2 from "path";
