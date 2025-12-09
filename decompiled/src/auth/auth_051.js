/**
 * Claude Code Decompiled
 * Category: auth
 * File: 51/61
 * Lines: 255558 - 257057 (1500 lines)
 * Original file: cli.js
 */

    get cacheHasChanged() {
        return this.hasChanged
    }
    get tokenCache() {
        return this.cache
    }
}
var dr1 = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
class jJ {
    constructor(A, Q, B, G, Z, I, Y) {
        this.clientId = A, this.cacheStorage = Q, this.cryptoObj = B, this.logger = G, this.serializableCache = Z, this.persistencePlugin = I, this.performanceClient = Y
    }
    validateTokenResponse(A, Q) {
        if (A.error || A.error_description || A.suberror) {
            let B = `Error(s): ${A.error_codes||L0.NOT_AVAILABLE} - Timestamp: ${A.timestamp||L0.NOT_AVAILABLE} - Description: ${A.error_description||L0.NOT_AVAILABLE} - Correlation ID: ${A.correlation_id||L0.NOT_AVAILABLE} - Trace ID: ${A.trace_id||L0.NOT_AVAILABLE}`,
                G = A.error_codes?.length ? A.error_codes[0] : void 0,
                Z = new PE(A.error, B, A.suberror, G, A.status);
            if (Q && A.status && A.status >= o4.SERVER_ERROR_RANGE_START && A.status <= o4.SERVER_ERROR_RANGE_END) {
                this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${Z}`);
                return
            } else if (Q && A.status && A.status >= o4.CLIENT_ERROR_RANGE_START && A.status <= o4.CLIENT_ERROR_RANGE_END) {
                this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${Z}`);
                return
            }
            if (n11(A.error, A.error_description, A.suberror)) throw new Jq(A.error, A.error_description, A.suberror, A.timestamp || L0.EMPTY_STRING, A.trace_id || L0.EMPTY_STRING, A.correlation_id || L0.EMPTY_STRING, A.claims || L0.EMPTY_STRING, G);
            throw Z
        }
    }
    async handleServerTokenResponse(A, Q, B, G, Z, I, Y, J, W) {
        this.performanceClient?.addQueueMeasurement(W0.HandleServerTokenResponse, A.correlation_id);
        let X;
        if (A.id_token) {
            if (X = mf(A.id_token || L0.EMPTY_STRING, this.cryptoObj.base64Decode), Z && Z.nonce) {
                if (X.nonce !== Z.nonce) throw v0(pe)
            }
            if (G.maxAge || G.maxAge === 0) {
                let D = X.auth_time;
                if (!D) throw v0(xf);
                DNA(D, G.maxAge)
            }
        }
        this.homeAccountIdentifier = dX.generateHomeAccountId(A.client_info || L0.EMPTY_STRING, Q.authorityType, this.logger, this.cryptoObj, X);
        let F;
        if (!!Z && !!Z.state) F = s11.parseRequestState(this.cryptoObj, Z.state);
        A.key_id = A.key_id || G.sshKid || void 0;
        let V = this.generateCacheRecord(A, Q, B, G, X, I, Z),
            K;
        try {
            if (this.persistencePlugin && this.serializableCache) this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), K = new vM(this.serializableCache, !0), await this.persistencePlugin.beforeCacheAccess(K);
            if (Y && !J && V.account) {
                let D = this.cacheStorage.generateAccountKey(dX.getAccountInfo(V.account));
                if (!this.cacheStorage.getAccount(D, G.correlationId)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), await jJ.generateAuthenticationResult(this.cryptoObj, Q, V, !1, G, X, F, void 0, W)
            }
            await this.cacheStorage.saveCacheRecord(V, G.correlationId, Rs1(X || {}), G.storeInCache)
        } finally {
            if (this.persistencePlugin && this.serializableCache && K) this.logger.verbose("Persistence enabled, calling afterCacheAccess"), await this.persistencePlugin.afterCacheAccess(K)
        }
        return jJ.generateAuthenticationResult(this.cryptoObj, Q, V, !1, G, X, F, A, W)
    }
    generateCacheRecord(A, Q, B, G, Z, I, Y) {
        let J = Q.getPreferredCache();
        if (!J) throw v0(bf);
        let W = q11(Z),
            X, F;
        if (A.id_token && !!Z) X = kr1(this.homeAccountIdentifier, J, A.id_token, this.clientId, W || ""), F = neB(this.cacheStorage, Q, this.homeAccountIdentifier, this.cryptoObj.base64Decode, G.correlationId, Z, A.client_info, J, W, Y, void 0, this.logger);
        let V = null;
        if (A.access_token) {
            let H = A.scope ? PJ.fromString(A.scope) : new PJ(G.scopes || []),
                C = (typeof A.expires_in === "string" ? parseInt(A.expires_in, 10) : A.expires_in) || 0,
                E = (typeof A.ext_expires_in === "string" ? parseInt(A.ext_expires_in, 10) : A.ext_expires_in) || 0,
                z = (typeof A.refresh_in === "string" ? parseInt(A.refresh_in, 10) : A.refresh_in) || void 0,
                w = B + C,
                N = w + E,
                q = z && z > 0 ? B + z : void 0;
            V = yr1(this.homeAccountIdentifier, J, A.access_token, this.clientId, W || Q.tenant || "", H.printScopes(), w, N, this.cryptoObj.base64Decode, q, A.token_type, I, A.key_id, G.claims, G.requestedClaimsHash)
        }
        let K = null;
        if (A.refresh_token) {
            let H;
            if (A.refresh_token_expires_in) {
                let C = typeof A.refresh_token_expires_in === "string" ? parseInt(A.refresh_token_expires_in, 10) : A.refresh_token_expires_in;
                H = B + C
            }
            K = xr1(this.homeAccountIdentifier, J, A.refresh_token, this.clientId, A.foci, I, H)
        }
        let D = null;
        if (A.foci) D = {
            clientId: this.clientId,
            environment: J,
            familyId: A.foci
        };
        return {
            account: F,
            idToken: X,
            accessToken: V,
            refreshToken: K,
            appMetadata: D
        }
    }
    static async generateAuthenticationResult(A, Q, B, G, Z, I, Y, J, W) {
        let X = L0.EMPTY_STRING,
            F = [],
            V = null,
            K, D, H = L0.EMPTY_STRING;
        if (B.accessToken) {
            if (B.accessToken.tokenType === e6.POP && !Z.popKid) {
                let w = new wAA(A),
                    {
                        secret: N,
                        keyId: q
                    } = B.accessToken;
                if (!q) throw v0(AAA);
                X = await w.signPopToken(N, q, Z)
            } else X = B.accessToken.secret;
            if (F = PJ.fromString(B.accessToken.target).asArray(), V = _NA(B.accessToken.expiresOn), K = _NA(B.accessToken.extendedExpiresOn), B.accessToken.refreshOn) D = _NA(B.accessToken.refreshOn)
        }
        if (B.appMetadata) H = B.appMetadata.familyId === Kl ? Kl : "";
        let C = I?.oid || I?.sub || "",
            E = I?.tid || "";
        if (J?.spa_accountid && !!B.account) B.account.nativeAccountId = J?.spa_accountid;
        let z = B.account ? $11(dX.getAccountInfo(B.account), void 0, I, B.idToken?.secret) : null;
        return {
            authority: Q.canonicalAuthority,
            uniqueId: C,
            tenantId: E,
            scopes: F,
            account: z,
            idToken: B?.idToken?.secret || "",
            idTokenClaims: I || {},
            accessToken: X,
            fromCache: G,
            expiresOn: V,
            extExpiresOn: K,
            refreshOn: D,
            correlationId: Z.correlationId,
            requestId: W || L0.EMPTY_STRING,
            familyId: H,
            tokenType: B.accessToken?.tokenType || L0.EMPTY_STRING,
            state: Y ? Y.userRequestState : L0.EMPTY_STRING,
            cloudGraphHostName: B.account?.cloudGraphHostName || L0.EMPTY_STRING,
            msGraphHost: B.account?.msGraphHost || L0.EMPTY_STRING,
            code: J?.spa_code,
            fromNativeBroker: !1
        }
    }
}

function neB(A, Q, B, G, Z, I, Y, J, W, X, F, V) {
    V?.verbose("setCachedAccount called");
    let D = A.getAccountKeys().find((w) => {
            return w.startsWith(B)
        }),
        H = null;
    if (D) H = A.getAccount(D, Z);
    let C = H || dX.createAccount({
            homeAccountId: B,
            idTokenClaims: I,
            clientInfo: Y,
            environment: J,
            cloudGraphHostName: X?.cloud_graph_host_name,
            msGraphHost: X?.msgraph_host,
            nativeAccountId: F
        }, Q, G),
        E = C.tenantProfiles || [],
        z = W || C.realm;
    if (z && !E.find((w) => {
            return w.tenantId === z
        })) {
        let w = VNA(B, C.localAccountId, z, I);
        E.push(w)
    }
    return C.tenantProfiles = E, C
}
var fNA = L(() => {
    mX();
    BIA();
    FNA();
    N11();
    bNA();
    ieB();
    bZ();
    r11();
    dr1();
    uT();
    aZA();
    Os1();
    w11();
    f11();
    Ol();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
async function jE(A, Q, B) {
    if (typeof A === "string") return A;
    else return A({
        clientId: Q,
        tokenEndpoint: B
    })
}
var o11 = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
var t11;
var aeB = L(() => {
    yNA();
    eZA();
    FAA();
    bZ();
    oZA();
    T11();
    fNA();
    Nl();
    mX();
    Ll();
    r11();
    Ol();
    nZA();
    ENA();
    ql();
    uT();
    lf();
    o11();
    m11();
    PW();
    uf(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    t11 = class t11 extends iH {
        constructor(A, Q) {
            super(A, Q);
            this.includeRedirectUri = !0, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions?.defaultScopes
        }
        async acquireToken(A, Q) {
            if (this.performanceClient?.addQueueMeasurement(W0.AuthClientAcquireToken, A.correlationId), !A.code) throw v0(ne);
            let B = Yq(),
                G = await P5(this.executeTokenRequest.bind(this), W0.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, A.correlationId)(this.authority, A),
                Z = G.headers?.[vZ.X_MS_REQUEST_ID],
                I = new jJ(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
            return I.validateTokenResponse(G.body), P5(I.handleServerTokenResponse.bind(I), W0.HandleServerTokenResponse, this.logger, this.performanceClient, A.correlationId)(G.body, this.authority, B, A, Q, void 0, void 0, void 0, Z)
        }
        getLogoutUri(A) {
            if (!A) throw jG(YAA);
            let Q = this.createLogoutUrlQueryString(A);
            return H8.appendQueryString(this.authority.endSessionEndpoint, Q)
        }
        async executeTokenRequest(A, Q) {
            this.performanceClient?.addQueueMeasurement(W0.AuthClientExecuteTokenRequest, Q.correlationId);
            let B = this.createTokenQueryParameters(Q),
                G = H8.appendQueryString(A.tokenEndpoint, B),
                Z = await P5(this.createTokenRequestBody.bind(this), W0.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, Q.correlationId)(Q),
                I = void 0;
            if (Q.clientInfo) try {
                let W = iZA(Q.clientInfo, this.cryptoUtils.base64Decode);
                I = {
                    credential: `${W.uid}${yf.CLIENT_INFO_SEPARATOR}${W.utid}`,
                    type: RE.HOME_ACCOUNT_ID
                }
            } catch (W) {
                this.logger.verbose("Could not parse client info for CCS Header: " + W)
            }
            let Y = this.createTokenRequestHeaders(I || Q.ccsCredential),
                J = GIA(this.config.authOptions.clientId, Q);
            return P5(this.executePostToTokenEndpoint.bind(this), W0.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, Q.correlationId)(G, Z, Y, J, Q.correlationId, W0.AuthorizationCodeClientExecutePostToTokenEndpoint)
        }
        async createTokenRequestBody(A) {
            this.performanceClient?.addQueueMeasurement(W0.AuthClientCreateTokenRequestBody, A.correlationId);
            let Q = new Map;
            if (CAA(Q, A.embeddedClientId || A.tokenBodyParameters?.[Hk] || this.config.authOptions.clientId), !this.includeRedirectUri) {
                if (!A.redirectUri) throw jG(QAA)
            } else EAA(Q, A.redirectUri);
            if (HAA(Q, A.scopes, !0, this.oidcDefaultScopes), Tr1(Q, A.code), UNA(Q, this.config.libraryInfo), $NA(Q, this.config.telemetry.application), jNA(Q), this.serverTelemetryManager && !R11(this.config)) PNA(Q, this.serverTelemetryManager);
            if (A.codeVerifier) jr1(Q, A.codeVerifier);
            if (this.config.clientCredentials.clientSecret) qNA(Q, this.config.clientCredentials.clientSecret);
            if (this.config.clientCredentials.clientAssertion) {
                let G = this.config.clientCredentials.clientAssertion;
                NNA(Q, await jE(G.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), LNA(Q, G.assertionType)
            }
            if (MNA(Q, PU.AUTHORIZATION_CODE_GRANT), $AA(Q), A.authenticationScheme === e6.POP) {
                let G = new wAA(this.cryptoUtils, this.performanceClient),
                    Z;
                if (!A.popKid) Z = (await P5(G.generateCnf.bind(G), W0.PopTokenGenerateCnf, this.logger, this.performanceClient, A.correlationId)(A, this.logger)).reqCnfString;
                else Z = this.cryptoUtils.encodeKid(A.popKid);
                RNA(Q, Z)
            } else if (A.authenticationScheme === e6.SSH)
                if (A.sshJwk) TNA(Q, A.sshJwk);
                else throw jG(gf);
            if (!YZ.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) zAA(Q, A.claims, this.config.authOptions.clientCapabilities);
            let B = void 0;
            if (A.clientInfo) try {
                let G = iZA(A.clientInfo, this.cryptoUtils.base64Decode);
                B = {
                    credential: `${G.uid}${yf.CLIENT_INFO_SEPARATOR}${G.utid}`,
                    type: RE.HOME_ACCOUNT_ID
                }
            } catch (G) {
                this.logger.verbose("Could not parse client info for CCS Header: " + G)
            } else B = A.ccsCredential;
            if (this.config.systemOptions.preventCorsPreflight && B) switch (B.type) {
                case RE.HOME_ACCOUNT_ID:
                    try {
                        let G = Kk(B.credential);
                        df(Q, G)
                    } catch (G) {
                        this.logger.verbose("Could not parse home account ID for CCS Header: " + G)
                    }
                    break;
                case RE.UPN:
                    Ml(Q, B.credential);
                    break
            }
            if (A.embeddedClientId) pf(Q, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
            if (A.tokenBodyParameters) cf(Q, A.tokenBodyParameters);
            if (A.enableSpaAuthorizationCode && (!A.tokenBodyParameters || !A.tokenBodyParameters[_11])) cf(Q, {
                [_11]: "1"
            });
            return DAA(Q, A.correlationId, this.performanceClient), Dk(Q)
        }
        createLogoutUrlQueryString(A) {
            let Q = new Map;
            if (A.postLogoutRedirectUri) Nr1(Q, A.postLogoutRedirectUri);
            if (A.correlationId) UAA(Q, A.correlationId);
            if (A.idTokenHint) Lr1(Q, A.idTokenHint);
            if (A.state) wNA(Q, A.state);
            if (A.logoutHint) Sr1(Q, A.logoutHint);
            if (A.extraQueryParameters) cf(Q, A.extraQueryParameters);
            if (this.config.authOptions.instanceAware) ONA(Q);
            return Dk(Q, this.config.authOptions.encodeExtraQueryParams, A.extraQueryParameters)
        }
    }
});
var TA5 = 300,
    ZIA;
var seB = L(() => {
    T11();
    yNA();
    eZA();
    FAA();
    bZ();
    oZA();
    fNA();
    r11();
    Nl();
    ql();
    mX();
    BIA();
    Ol();
    Ll();
    ENA();
    nZA();
    bNA();
    uT();
    lf();
    o11();
    m11();
    l11();
    uf();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    ZIA = class ZIA extends iH {
        constructor(A, Q) {
            super(A, Q)
        }
        async acquireToken(A) {
            this.performanceClient?.addQueueMeasurement(W0.RefreshTokenClientAcquireToken, A.correlationId);
            let Q = Yq(),
                B = await P5(this.executeTokenRequest.bind(this), W0.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, A.correlationId)(A, this.authority),
                G = B.headers?.[vZ.X_MS_REQUEST_ID],
                Z = new jJ(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
            return Z.validateTokenResponse(B.body), P5(Z.handleServerTokenResponse.bind(Z), W0.HandleServerTokenResponse, this.logger, this.performanceClient, A.correlationId)(B.body, this.authority, Q, A, void 0, void 0, !0, A.forceCache, G)
        }
        async acquireTokenByRefreshToken(A) {
            if (!A) throw jG(IAA);
            if (this.performanceClient?.addQueueMeasurement(W0.RefreshTokenClientAcquireTokenByRefreshToken, A.correlationId), !A.account) throw v0(vf);
            if (this.cacheManager.isAppMetadataFOCI(A.account.environment)) try {
                return await P5(this.acquireTokenWithCachedRefreshToken.bind(this), W0.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, A.correlationId)(A, !0)
            } catch (B) {
                let G = B instanceof Jq && B.errorCode === Rl,
                    Z = B instanceof PE && B.errorCode === vqA.INVALID_GRANT_ERROR && B.subError === vqA.CLIENT_MISMATCH_ERROR;
                if (G || Z) return P5(this.acquireTokenWithCachedRefreshToken.bind(this), W0.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, A.correlationId)(A, !1);
                else throw B
            }
            return P5(this.acquireTokenWithCachedRefreshToken.bind(this), W0.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, A.correlationId)(A, !1)
        }
        async acquireTokenWithCachedRefreshToken(A, Q) {
            this.performanceClient?.addQueueMeasurement(W0.RefreshTokenClientAcquireTokenWithCachedRefreshToken, A.correlationId);
            let B = ueB(this.cacheManager.getRefreshToken.bind(this.cacheManager), W0.CacheManagerGetRefreshToken, this.logger, this.performanceClient, A.correlationId)(A.account, Q, A.correlationId, void 0, this.performanceClient);
            if (!B) throw a11(Rl);
            if (B.expiresOn && AIA(B.expiresOn, A.refreshTokenExpirationOffsetSeconds || TA5)) throw this.performanceClient?.addFields({
                rtExpiresOnMs: Number(B.expiresOn)
            }, A.correlationId), a11(vNA);
            let G = {
                ...A,
                refreshToken: B.secret,
                authenticationScheme: A.authenticationScheme || e6.BEARER,
                ccsCredential: {
                    credential: A.account.homeAccountId,
                    type: RE.HOME_ACCOUNT_ID
                }
            };
            try {
                return await P5(this.acquireToken.bind(this), W0.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, A.correlationId)(G)
            } catch (Z) {
                if (Z instanceof Jq) {
                    if (this.performanceClient?.addFields({
                            rtExpiresOnMs: Number(B.expiresOn)
                        }, A.correlationId), Z.subError === Tl) {
                        this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
                        let I = this.cacheManager.generateCredentialKey(B);
                        this.cacheManager.removeRefreshToken(I, A.correlationId)
                    }
                }
                throw Z
            }
        }
        async executeTokenRequest(A, Q) {
            this.performanceClient?.addQueueMeasurement(W0.RefreshTokenClientExecuteTokenRequest, A.correlationId);
            let B = this.createTokenQueryParameters(A),
                G = H8.appendQueryString(Q.tokenEndpoint, B),
                Z = await P5(this.createTokenRequestBody.bind(this), W0.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, A.correlationId)(A),
                I = this.createTokenRequestHeaders(A.ccsCredential),
                Y = GIA(this.config.authOptions.clientId, A);
            return P5(this.executePostToTokenEndpoint.bind(this), W0.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, A.correlationId)(G, Z, I, Y, A.correlationId, W0.RefreshTokenClientExecutePostToTokenEndpoint)
        }
        async createTokenRequestBody(A) {
            this.performanceClient?.addQueueMeasurement(W0.RefreshTokenClientCreateTokenRequestBody, A.correlationId);
            let Q = new Map;
            if (CAA(Q, A.embeddedClientId || A.tokenBodyParameters?.[Hk] || this.config.authOptions.clientId), A.redirectUri) EAA(Q, A.redirectUri);
            if (HAA(Q, A.scopes, !0, this.config.authOptions.authority.options.OIDCOptions?.defaultScopes), MNA(Q, PU.REFRESH_TOKEN_GRANT), $AA(Q), UNA(Q, this.config.libraryInfo), $NA(Q, this.config.telemetry.application), jNA(Q), this.serverTelemetryManager && !R11(this.config)) PNA(Q, this.serverTelemetryManager);
            if (Pr1(Q, A.refreshToken), this.config.clientCredentials.clientSecret) qNA(Q, this.config.clientCredentials.clientSecret);
            if (this.config.clientCredentials.clientAssertion) {
                let B = this.config.clientCredentials.clientAssertion;
                NNA(Q, await jE(B.assertion, this.config.authOptions.clientId, A.resourceRequestUri)), LNA(Q, B.assertionType)
            }
            if (A.authenticationScheme === e6.POP) {
                let B = new wAA(this.cryptoUtils, this.performanceClient),
                    G;
                if (!A.popKid) G = (await P5(B.generateCnf.bind(B), W0.PopTokenGenerateCnf, this.logger, this.performanceClient, A.correlationId)(A, this.logger)).reqCnfString;
                else G = this.cryptoUtils.encodeKid(A.popKid);
                RNA(Q, G)
            } else if (A.authenticationScheme === e6.SSH)
                if (A.sshJwk) TNA(Q, A.sshJwk);
                else throw jG(gf);
            if (!YZ.isEmptyObj(A.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) zAA(Q, A.claims, this.config.authOptions.clientCapabilities);
            if (this.config.systemOptions.preventCorsPreflight && A.ccsCredential) switch (A.ccsCredential.type) {
                case RE.HOME_ACCOUNT_ID:
                    try {
                        let B = Kk(A.ccsCredential.credential);
                        df(Q, B)
                    } catch (B) {
                        this.logger.verbose("Could not parse home account ID for CCS Header: " + B)
                    }
                    break;
                case RE.UPN:
                    Ml(Q, A.ccsCredential.credential);
                    break
            }
            if (A.embeddedClientId) pf(Q, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
            if (A.tokenBodyParameters) cf(Q, A.tokenBodyParameters);
            return DAA(Q, A.correlationId, this.performanceClient), Dk(Q)
        }
    }
});
var e11;
var reB = L(() => {
    yNA();
    Ol();
    mX();
    fNA();
    bZ();
    Nl();
    aZA();
    uT();
    lf();
    g11();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    e11 = class e11 extends iH {
        constructor(A, Q) {
            super(A, Q)
        }
        async acquireCachedToken(A) {
            this.performanceClient?.addQueueMeasurement(W0.SilentFlowClientAcquireCachedToken, A.correlationId);
            let Q = IZ.NOT_APPLICABLE;
            if (A.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !YZ.isEmptyObj(A.claims)) throw this.setCacheOutcome(IZ.FORCE_REFRESH_OR_CLAIMS, A.correlationId), v0(ff);
            if (!A.account) throw v0(vf);
            let B = A.account.tenantId || deB(A.authority),
                G = this.cacheManager.getTokenKeys(),
                Z = this.cacheManager.getAccessToken(A.account, A, G, B);
            if (!Z) throw this.setCacheOutcome(IZ.NO_CACHED_ACCESS_TOKEN, A.correlationId), v0(ff);
            else if (_r1(Z.cachedAt) || AIA(Z.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(IZ.CACHED_ACCESS_TOKEN_EXPIRED, A.correlationId), v0(ff);
            else if (Z.refreshOn && AIA(Z.refreshOn, 0)) Q = IZ.PROACTIVELY_REFRESHED;
            let I = A.authority || this.authority.getPreferredCache(),
                Y = {
                    account: this.cacheManager.getAccount(this.cacheManager.generateAccountKey(A.account), A.correlationId),
                    accessToken: Z,
                    idToken: this.cacheManager.getIdToken(A.account, A.correlationId, G, B, this.performanceClient),
                    refreshToken: null,
                    appMetadata: this.cacheManager.readAppMetadataFromCache(I)
                };
            if (this.setCacheOutcome(Q, A.correlationId), this.config.serverTelemetryManager) this.config.serverTelemetryManager.incrementCacheHits();
            return [await P5(this.generateResultFromCacheRecord.bind(this), W0.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, A.correlationId)(Y, A), Q]
        }
        setCacheOutcome(A, Q) {
            if (this.serverTelemetryManager?.setCacheOutcome(A), this.performanceClient?.addFields({
                    cacheOutcome: A
                }, Q), A !== IZ.NOT_APPLICABLE) this.logger.info(`Token refresh is required due to cache outcome: ${A}`)
        }
        async generateResultFromCacheRecord(A, Q) {
            this.performanceClient?.addQueueMeasurement(W0.SilentFlowClientGenerateResultFromCacheRecord, Q.correlationId);
            let B;
            if (A.idToken) B = mf(A.idToken.secret, this.config.cryptoInterface.base64Decode);
            if (Q.maxAge || Q.maxAge === 0) {
                let G = B?.auth_time;
                if (!G) throw v0(xf);
                DNA(G, Q.maxAge)
            }
            return jJ.generateAuthenticationResult(this.cryptoUtils, this.authority, A, !0, Q, B)
        }
    }
});
var hNA = {};
pG(hNA, {
    validateAuthorizationResponse: () => oeB,
    getStandardAuthorizeRequestParameters: () => PA5,
    getAuthorizeUrl: () => jA5,
    getAuthorizationCodePayload: () => SA5
});

function PA5(A, Q, B, G) {
    let Z = Q.correlationId,
        I = new Map;
    CAA(I, Q.embeddedClientId || Q.extraQueryParameters?.[Hk] || A.clientId);
    let Y = [...Q.scopes || [], ...Q.extraScopesToConsent || []];
    if (HAA(I, Y, !0, A.authority.options.OIDCOptions?.defaultScopes), EAA(I, Q.redirectUri), UAA(I, Z), qr1(I, Q.responseMode), $AA(I), Q.prompt) Or1(I, Q.prompt), G?.addFields({
        prompt: Q.prompt
    }, Z);
    if (Q.domainHint) Mr1(I, Q.domainHint), G?.addFields({
        domainHintFromRequest: !0
    }, Z);
    if (Q.prompt !== Vl.SELECT_ACCOUNT) {
        if (Q.sid && Q.prompt === Vl.NONE) B.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), y11(I, Q.sid), G?.addFields({
            sidFromRequest: !0
        }, Z);
        else if (Q.account) {
            let J = kA5(Q.account),
                W = yA5(Q.account);
            if (W && Q.domainHint) B.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'), W = null;
            if (W) {
                B.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), tZA(I, W), G?.addFields({
                    loginHintFromClaim: !0
                }, Z);
                try {
                    let X = Kk(Q.account.homeAccountId);
                    df(I, X)
                } catch (X) {
                    B.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header")
                }
            } else if (J && Q.prompt === Vl.NONE) {
                B.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), y11(I, J), G?.addFields({
                    sidFromClaim: !0
                }, Z);
                try {
                    let X = Kk(Q.account.homeAccountId);
                    df(I, X)
                } catch (X) {
                    B.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header")
                }
            } else if (Q.loginHint) B.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), tZA(I, Q.loginHint), Ml(I, Q.loginHint), G?.addFields({
                loginHintFromRequest: !0
            }, Z);
            else if (Q.account.username) {
                B.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), tZA(I, Q.account.username), G?.addFields({
                    loginHintFromUpn: !0
                }, Z);
                try {
                    let X = Kk(Q.account.homeAccountId);
                    df(I, X)
                } catch (X) {
                    B.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header")
                }
            }
        } else if (Q.loginHint) B.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), tZA(I, Q.loginHint), Ml(I, Q.loginHint), G?.addFields({
            loginHintFromRequest: !0
        }, Z)
    } else B.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
    if (Q.nonce) Rr1(I, Q.nonce);
    if (Q.state) wNA(I, Q.state);
    if (Q.claims || A.clientCapabilities && A.clientCapabilities.length > 0) zAA(I, Q.claims, A.clientCapabilities);
    if (Q.embeddedClientId) pf(I, A.clientId, A.redirectUri);
    if (A.instanceAware && (!Q.extraQueryParameters || !Object.keys(Q.extraQueryParameters).includes(rZA))) ONA(I);
    return I
}

function jA5(A, Q, B, G) {
    let Z = Dk(Q, B, G);
    return H8.appendQueryString(A.authorizationEndpoint, Z)
}

function SA5(A, Q) {
    if (oeB(A, Q), !A.code) throw v0(te);
    return A
}

function oeB(A, Q) {
    if (!A.state || !Q) throw A.state ? v0(Cl, "Cached State") : v0(Cl, "Server State");
    let B, G;
    try {
        B = decodeURIComponent(A.state)
    } catch (Z) {
        throw v0(gT, A.state)
    }
    try {
        G = decodeURIComponent(Q)
    } catch (Z) {
        throw v0(gT, A.state)
    }
    if (B !== G) throw v0(ce);
    if (A.error || A.error_description || A.suberror) {
        let Z = _A5(A);
        if (n11(A.error, A.error_description, A.suberror)) throw new Jq(A.error || "", A.error_description, A.suberror, A.timestamp || "", A.trace_id || "", A.correlation_id || "", A.claims || "", Z);
        throw new PE(A.error || "", A.error_description, A.suberror, Z)
    }
}

function _A5(A) {
    let B = A.error_uri?.lastIndexOf("code=");
    return B && B >= 0 ? A.error_uri?.substring(B + 5) : void 0
}

function kA5(A) {
    return A.idTokenClaims?.sid || null
}

function yA5(A) {
    return A.loginHint || A.idTokenClaims?.login_hint || null
}
var teB = L(() => {
    eZA();
    oZA();
    bZ();
    nZA();
    FAA();
    Ll();
    mX();
    bNA();
    BIA();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});

function xA5(A) {
    let {
        skus: Q,
        libraryName: B,
        libraryVersion: G,
        extensionName: Z,
        extensionVersion: I
    } = A, Y = new Map([
        [0, [B, G]],
        [2, [Z, I]]
    ]), J = [];
    if (Q?.length) {
        if (J = Q.split(eeB), J.length < 4) return Q
    } else J = Array.from({
        length: 4
    }, () => AA2);
    return Y.forEach((W, X) => {
        if (W.length === 2 && W[0]?.length && W[1]?.length) vA5({
            skuArr: J,
            index: X,
            skuName: W[0],
            skuVersion: W[1]
        })
    }), J.join(eeB)
}

function vA5(A) {
    let {
        skuArr: Q,
        index: B,
        skuName: G,
        skuVersion: Z
    } = A;
    if (B >= Q.length) return;
    Q[B] = [G, Z].join(AA2)
}
class Pl {
    constructor(A, Q) {
        this.cacheOutcome = IZ.NOT_APPLICABLE, this.cacheManager = Q, this.apiId = A.apiId, this.correlationId = A.correlationId, this.wrapperSKU = A.wrapperSKU || L0.EMPTY_STRING, this.wrapperVer = A.wrapperVer || L0.EMPTY_STRING, this.telemetryCacheKey = RF.CACHE_KEY + yf.CACHE_KEY_SEPARATOR + A.clientId
    }
    generateCurrentRequestHeaderValue() {
        let A = `${this.apiId}${RF.VALUE_SEPARATOR}${this.cacheOutcome}`,
            Q = [this.wrapperSKU, this.wrapperVer],
            B = this.getNativeBrokerErrorCode();
        if (B?.length) Q.push(`broker_error=${B}`);
        let G = Q.join(RF.VALUE_SEPARATOR),
            Z = this.getRegionDiscoveryFields(),
            I = [A, Z].join(RF.VALUE_SEPARATOR);
        return [RF.SCHEMA_VERSION, I, G].join(RF.CATEGORY_SEPARATOR)
    }
    generateLastRequestHeaderValue() {
        let A = this.getLastRequests(),
            Q = Pl.maxErrorsToSend(A),
            B = A.failedRequests.slice(0, 2 * Q).join(RF.VALUE_SEPARATOR),
            G = A.errors.slice(0, Q).join(RF.VALUE_SEPARATOR),
            Z = A.errors.length,
            I = Q < Z ? RF.OVERFLOW_TRUE : RF.OVERFLOW_FALSE,
            Y = [Z, I].join(RF.VALUE_SEPARATOR);
        return [RF.SCHEMA_VERSION, A.cacheHits, B, G, Y].join(RF.CATEGORY_SEPARATOR)
    }
    cacheFailedRequest(A) {
        let Q = this.getLastRequests();
        if (Q.errors.length >= RF.MAX_CACHED_ERRORS) Q.failedRequests.shift(), Q.failedRequests.shift(), Q.errors.shift();
        if (Q.failedRequests.push(this.apiId, this.correlationId), A instanceof Error && !!A && A.toString())
            if (A instanceof t4)
                if (A.subError) Q.errors.push(A.subError);
                else if (A.errorCode) Q.errors.push(A.errorCode);
        else Q.errors.push(A.toString());
        else Q.errors.push(A.toString());
        else Q.errors.push(RF.UNKNOWN_ERROR);
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, Q, this.correlationId);
        return
    }
    incrementCacheHits() {
        let A = this.getLastRequests();
        return A.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, A, this.correlationId), A.cacheHits
    }
    getLastRequests() {
        let A = {
            failedRequests: [],
            errors: [],
            cacheHits: 0
        };
        return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || A
    }
    clearTelemetryCache() {
        let A = this.getLastRequests(),
            Q = Pl.maxErrorsToSend(A),
            B = A.errors.length;
        if (Q === B) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
        else {
            let G = {
                failedRequests: A.failedRequests.slice(Q * 2),
                errors: A.errors.slice(Q),
                cacheHits: 0
            };
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, G, this.correlationId)
        }
    }
    static maxErrorsToSend(A) {
        let Q, B = 0,
            G = 0,
            Z = A.errors.length;
        for (Q = 0; Q < Z; Q++) {
            let I = A.failedRequests[2 * Q] || L0.EMPTY_STRING,
                Y = A.failedRequests[2 * Q + 1] || L0.EMPTY_STRING,
                J = A.errors[Q] || L0.EMPTY_STRING;
            if (G += I.toString().length + Y.toString().length + J.length + 3, G < RF.MAX_LAST_HEADER_BYTES) B += 1;
            else break
        }
        return B
    }
    getRegionDiscoveryFields() {
        let A = [];
        return A.push(this.regionUsed || L0.EMPTY_STRING), A.push(this.regionSource || L0.EMPTY_STRING), A.push(this.regionOutcome || L0.EMPTY_STRING), A.join(",")
    }
    updateRegionDiscoveryMetadata(A) {
        this.regionUsed = A.region_used, this.regionSource = A.region_source, this.regionOutcome = A.region_outcome
    }
    setCacheOutcome(A) {
        this.cacheOutcome = A
    }
    setNativeBrokerErrorCode(A) {
        let Q = this.getLastRequests();
        Q.nativeBrokerErrorCode = A, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, Q, this.correlationId)
    }
    getNativeBrokerErrorCode() {
        return this.getLastRequests().nativeBrokerErrorCode
    }
    clearNativeBrokerErrorCode() {
        let A = this.getLastRequests();
        delete A.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, A, this.correlationId)
    }
    static makeExtraSkuString(A) {
        return xA5(A)
    }
}
var eeB = ",",
    AA2 = "|";
var QA2 = L(() => {
    bZ();
    yM(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
var u7 = L(() => {
    aeB();
    seB();
    reB();
    yNA();
    ENA();
    g11();
    U11();
    KNA();
    xs1();
    N11();
    Ll();
    Ns1();
    teB();
    eZA();
    fNA();
    FNA();
    C11();
    bNA();
    l11();
    yM();
    Us1();
    BIA();
    mX();
    PW();
    ql();
    uf();
    bZ();
    Nl();
    QA2();
    aZA();
    fr1();
    f11();
    Ol();
    FAA();
    oZA();
    dr1();
    o11(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
class jl {
    static deserializeJSONBlob(A) {
        return !A ? {} : JSON.parse(A)
    }
    static deserializeAccounts(A) {
        let Q = {};
        if (A) Object.keys(A).map(function(B) {
            let G = A[B],
                Z = {
                    homeAccountId: G.home_account_id,
                    environment: G.environment,
                    realm: G.realm,
                    localAccountId: G.local_account_id,
                    username: G.username,
                    authorityType: G.authority_type,
                    name: G.name,
                    clientInfo: G.client_info,
                    lastModificationTime: G.last_modification_time,
                    lastModificationApp: G.last_modification_app,
                    tenantProfiles: G.tenantProfiles?.map((Y) => {
                        return JSON.parse(Y)
                    }),
                    lastUpdatedAt: Date.now().toString()
                },
                I = new dX;
            VAA.toObject(I, Z), Q[B] = I
        });
        return Q
    }
    static deserializeIdTokens(A) {
        let Q = {};
        if (A) Object.keys(A).map(function(B) {
            let G = A[B],
                Z = {
                    homeAccountId: G.home_account_id,
                    environment: G.environment,
                    credentialType: G.credential_type,
                    clientId: G.client_id,
                    secret: G.secret,
                    realm: G.realm,
                    lastUpdatedAt: Date.now().toString()
                };
            Q[B] = Z
        });
        return Q
    }
    static deserializeAccessTokens(A) {
        let Q = {};
        if (A) Object.keys(A).map(function(B) {
            let G = A[B],
                Z = {
                    homeAccountId: G.home_account_id,
                    environment: G.environment,
                    credentialType: G.credential_type,
                    clientId: G.client_id,
                    secret: G.secret,
                    realm: G.realm,
                    target: G.target,
                    cachedAt: G.cached_at,
                    expiresOn: G.expires_on,
                    extendedExpiresOn: G.extended_expires_on,
                    refreshOn: G.refresh_on,
                    keyId: G.key_id,
                    tokenType: G.token_type,
                    requestedClaims: G.requestedClaims,
                    requestedClaimsHash: G.requestedClaimsHash,
                    userAssertionHash: G.userAssertionHash,
                    lastUpdatedAt: Date.now().toString()
                };
            Q[B] = Z
        });
        return Q
    }
    static deserializeRefreshTokens(A) {
        let Q = {};
        if (A) Object.keys(A).map(function(B) {
            let G = A[B],
                Z = {
                    homeAccountId: G.home_account_id,
                    environment: G.environment,
                    credentialType: G.credential_type,
                    clientId: G.client_id,
                    secret: G.secret,
                    familyId: G.family_id,
                    target: G.target,
                    realm: G.realm,
                    lastUpdatedAt: Date.now().toString()
                };
            Q[B] = Z
        });
        return Q
    }
    static deserializeAppMetadata(A) {
        let Q = {};
        if (A) Object.keys(A).map(function(B) {
            let G = A[B];
            Q[B] = {
                clientId: G.client_id,
                environment: G.environment,
                familyId: G.family_id
            }
        });
        return Q
    }
    static deserializeAllCache(A) {
        return {
            accounts: A.Account ? this.deserializeAccounts(A.Account) : {},
            idTokens: A.IdToken ? this.deserializeIdTokens(A.IdToken) : {},
            accessTokens: A.AccessToken ? this.deserializeAccessTokens(A.AccessToken) : {},
            refreshTokens: A.RefreshToken ? this.deserializeRefreshTokens(A.RefreshToken) : {},
            appMetadata: A.AppMetadata ? this.deserializeAppMetadata(A.AppMetadata) : {}
        }
    }
}
var A01 = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var cr1 = {};
pG(cr1, {
    Serializer: () => xe,
    Deserializer: () => jl
});
var BA2 = L(() => {
    V11();
    A01(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var GA2 = "system_assigned_managed_identity",
    dA5 = "managed_identity",
    pr1, SU, cX, D4, T4, lY, DI, Q01, ZA2 = "REGION_NAME",
    IA2 = "MSAL_FORCE_REGION",
    YA2 = 32,
    JA2, B01, lr1, SE, af, bM, G01, WA2 = 4096;
var HI = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    pr1 = `https://login.microsoftonline.com/${dA5}/`, SU = {
        AUTHORIZATION_HEADER_NAME: "Authorization",
        METADATA_HEADER_NAME: "Metadata",
        APP_SERVICE_SECRET_HEADER_NAME: "X-IDENTITY-HEADER",
        ML_AND_SF_SECRET_HEADER_NAME: "secret"
    }, cX = {
        API_VERSION: "api-version",
        RESOURCE: "resource",
        SHA256_TOKEN_TO_REFRESH: "token_sha256_to_refresh",
        XMS_CC: "xms_cc"
    }, D4 = {
        AZURE_POD_IDENTITY_AUTHORITY_HOST: "AZURE_POD_IDENTITY_AUTHORITY_HOST",
        DEFAULT_IDENTITY_CLIENT_ID: "DEFAULT_IDENTITY_CLIENT_ID",
        IDENTITY_ENDPOINT: "IDENTITY_ENDPOINT",
        IDENTITY_HEADER: "IDENTITY_HEADER",
        IDENTITY_SERVER_THUMBPRINT: "IDENTITY_SERVER_THUMBPRINT",
        IMDS_ENDPOINT: "IMDS_ENDPOINT",
        MSI_ENDPOINT: "MSI_ENDPOINT",
        MSI_SECRET: "MSI_SECRET"
    }, T4 = {
        APP_SERVICE: "AppService",
        AZURE_ARC: "AzureArc",
        CLOUD_SHELL: "CloudShell",
        DEFAULT_TO_IMDS: "DefaultToImds",
        IMDS: "Imds",
        MACHINE_LEARNING: "MachineLearning",
        SERVICE_FABRIC: "ServiceFabric"
    }, lY = {
        SYSTEM_ASSIGNED: "system-assigned",
        USER_ASSIGNED_CLIENT_ID: "user-assigned-client-id",
        USER_ASSIGNED_RESOURCE_ID: "user-assigned-resource-id",
        USER_ASSIGNED_OBJECT_ID: "user-assigned-object-id"
    }, DI = {
        GET: "get",
        POST: "post"
    }, Q01 = {
        SUCCESS_RANGE_START: o4.SUCCESS_RANGE_START,
        SUCCESS_RANGE_END: o4.SUCCESS_RANGE_END,
        SERVER_ERROR: o4.SERVER_ERROR
    }, JA2 = {
        SHA256: "sha256"
    }, B01 = {
        CV_CHARSET: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~"
    }, lr1 = {
        KEY_SEPARATOR: "-"
    }, SE = {
        MSAL_SKU: "msal.js.node",
        JWT_BEARER_ASSERTION_TYPE: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        AUTHORIZATION_PENDING: "authorization_pending",
        HTTP_PROTOCOL: "http://",
        LOCALHOST: "localhost"
    }, af = {
        acquireTokenSilent: 62,
        acquireTokenByUsernamePassword: 371,
        acquireTokenByDeviceCode: 671,
        acquireTokenByClientCredential: 771,
        acquireTokenByCode: 871,
        acquireTokenByRefreshToken: 872
    }, bM = {
        RSA_256: "RS256",
        PSS_256: "PS256",
        X5T_256: "x5t#S256",
        X5T: "x5t",
        X5C: "x5c",
        AUDIENCE: "aud",
        EXPIRATION_TIME: "exp",
        ISSUER: "iss",
        SUBJECT: "sub",
        NOT_BEFORE: "nbf",
        JWT_ID: "jti"
    }, G01 = {
        INTERVAL_MS: 100,
        TIMEOUT_MS: 5000
    }
});
class gNA {
    static getNetworkResponse(A, Q, B) {
        return {
            headers: A,
            body: Q,
            status: B
        }
    }
    static urlToHttpOptions(A) {
        let Q = {
            protocol: A.protocol,
            hostname: A.hostname && A.hostname.startsWith("[") ? A.hostname.slice(1, -1) : A.hostname,
            hash: A.hash,
            search: A.search,
            pathname: A.pathname,
            path: `${A.pathname||""}${A.search||""}`,
            href: A.href
        };
        if (A.port !== "") Q.port = Number(A.port);
        if (A.username || A.password) Q.auth = `${decodeURIComponent(A.username)}:${decodeURIComponent(A.password)}`;
        return Q
    }
}
var XA2 = L(() => {
    /*! @azure/msal-node v3.8.1 2025-10-29 */ });
import ir1 from "http";
import FA2 from "https";
class uNA {
    constructor(A, Q) {
        this.proxyUrl = A || "", this.customAgentOptions = Q || {}
    }
    async sendGetRequestAsync(A, Q, B) {
        if (this.proxyUrl) return VA2(A, this.proxyUrl, DI.GET, Q, this.customAgentOptions, B);
        else return KA2(A, DI.GET, Q, this.customAgentOptions, B)
    }
    async sendPostRequestAsync(A, Q) {
        if (this.proxyUrl) return VA2(A, this.proxyUrl, DI.POST, Q, this.customAgentOptions);
        else return KA2(A, DI.POST, Q, this.customAgentOptions)
    }
}
var VA2 = (A, Q, B, G, Z, I) => {
        let Y = new URL(A),
            J = new URL(Q),
            W = G?.headers || {},
            X = {
                host: J.hostname,
                port: J.port,
                method: "CONNECT",
                path: Y.hostname,
                headers: W
            };
        if (Z && Object.keys(Z).length) X.agent = new ir1.Agent(Z);
        let F = "";
        if (B === DI.POST) {
            let K = G?.body || "";
            F = `Content-Type: application/x-www-form-urlencoded\r
Content-Length: ${K.length}\r
\r
${K}`
        } else if (I) X.timeout = I;
        let V = `${B.toUpperCase()} ${Y.href} HTTP/1.1\r
Host: ${Y.host}\r
Connection: close\r
` + F + `\r
`;
        return new Promise((K, D) => {
            let H = ir1.request(X);
            if (I) H.on("timeout", () => {
                H.destroy(), D(Error("Request time out"))
            });
            H.end(), H.on("connect", (C, E) => {
                let z = C?.statusCode || Q01.SERVER_ERROR;
                if (z < Q01.SUCCESS_RANGE_START || z > Q01.SUCCESS_RANGE_END) H.destroy(), E.destroy(), D(Error(`Error connecting to proxy. Http status code: ${C.statusCode}. Http status message: ${C?.statusMessage||"Unknown"}`));
                E.write(V);
                let w = [];
                E.on("data", (N) => {
                    w.push(N)
                }), E.on("end", () => {
                    let q = Buffer.concat([...w]).toString().split(`\r
`),
                        R = parseInt(q[0].split(" ")[1]),
                        P = q[0].split(" ").slice(2).join(" "),
                        y = q[q.length - 1],
                        v = q.slice(1, q.length - 2),
                        x = new Map;
                    v.forEach((l) => {
                        let k = l.split(new RegExp(/:\s(.*)/s)),
                            d = k[0],
                            QA = k[1];
                        try {
                            let IA = JSON.parse(QA);
                            if (IA && typeof IA === "object") QA = IA
                        } catch (IA) {}
                        x.set(d, QA)
                    });
                    let u = Object.fromEntries(x),
                        o = gNA.getNetworkResponse(u, DA2(R, P, u, y), R);
                    if ((R < o4.SUCCESS_RANGE_START || R > o4.SUCCESS_RANGE_END) && o.body.error !== SE.AUTHORIZATION_PENDING) H.destroy();
                    K(o)
                }), E.on("error", (N) => {
                    H.destroy(), E.destroy(), D(Error(N.toString()))
                })
            }), H.on("error", (C) => {
                H.destroy(), D(Error(C.toString()))
            })
        })
    },
    KA2 = (A, Q, B, G, Z) => {
        let I = Q === DI.POST,
            Y = B?.body || "",
            J = new URL(A),
            W = B?.headers || {},
            X = {
                method: Q,
                headers: W,
                ...gNA.urlToHttpOptions(J)
            };
        if (G && Object.keys(G).length) X.agent = new FA2.Agent(G);
        if (I) X.headers = {
            ...X.headers,
            "Content-Length": Y.length
        };
        else if (Z) X.timeout = Z;
        return new Promise((F, V) => {
            let K;
            if (X.protocol === "http:") K = ir1.request(X);
            else K = FA2.request(X);
            if (I) K.write(Y);
            if (Z) K.on("timeout", () => {
                K.destroy(), V(Error("Request time out"))
            });
            K.end(), K.on("response", (D) => {
                let {
                    headers: H,
                    statusCode: C,
                    statusMessage: E
                } = D, z = [];
                D.on("data", (w) => {
                    z.push(w)
                }), D.on("end", () => {
                    let w = Buffer.concat([...z]).toString(),
                        N = H,
                        q = gNA.getNetworkResponse(N, DA2(C, E, N, w), C);
                    if ((C < o4.SUCCESS_RANGE_START || C > o4.SUCCESS_RANGE_END) && q.body.error !== SE.AUTHORIZATION_PENDING) K.destroy();
                    F(q)
                })
            }), K.on("error", (D) => {
                K.destroy(), V(Error(D.toString()))
            })
        })
    },
    DA2 = (A, Q, B, G) => {
        let Z;
        try {
            Z = JSON.parse(G)
        } catch (I) {
            let Y, J;
            if (A >= o4.CLIENT_ERROR_RANGE_START && A <= o4.CLIENT_ERROR_RANGE_END) Y = "client_error", J = "A client";
            else if (A >= o4.SERVER_ERROR_RANGE_START && A <= o4.SERVER_ERROR_RANGE_END) Y = "server_error", J = "A server";
            else Y = "unknown_error", J = "An unknown";
            Z = {
                error: Y,
                error_description: `${J} error occured.
Http status code: ${A}
Http status message: ${Q||"Unknown"}
Headers: ${JSON.stringify(B)}`
            }
        }
        return Z
    };
var HA2 = L(() => {
    u7();
    HI();
    XA2(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var Z01 = "invalid_file_extension",
    I01 = "invalid_file_path",
    Sl = "invalid_managed_identity_id_type",
    Y01 = "invalid_secret",
    CA2 = "missing_client_id",
    EA2 = "network_unavailable",
    J01 = "platform_not_supported",
    W01 = "unable_to_create_azure_arc",
    X01 = "unable_to_create_cloud_shell",
    F01 = "unable_to_create_source",
    mNA = "unable_to_read_secret_file",
    zA2 = "user_assigned_not_available_at_runtime",
    V01 = "www_authenticate_header_missing",
    K01 = "www_authenticate_header_unsupported_format",
    qAA;
var NAA = L(() => {
    HI(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    qAA = {
        [D4.AZURE_POD_IDENTITY_AUTHORITY_HOST]: "azure_pod_identity_authority_host_url_malformed",
        [D4.IDENTITY_ENDPOINT]: "identity_endpoint_url_malformed",
        [D4.IMDS_ENDPOINT]: "imds_endpoint_url_malformed",
        [D4.MSI_ENDPOINT]: "msi_endpoint_url_malformed"
    }
});

function jW(A) {
    return new nr1(A)
}
var cA5, nr1;
var IIA = L(() => {
    u7();
    NAA();
    HI(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    cA5 = {
        [Z01]: "The file path in the WWW-Authenticate header does not contain a .key file.",
        [I01]: "The file path in the WWW-Authenticate header is not in a valid Windows or Linux Format.",
        [Sl]: "More than one ManagedIdentityIdType was provided.",
        [Y01]: "The secret in the file on the file path in the WWW-Authenticate header is greater than 4096 bytes.",
        [J01]: "The platform is not supported by Azure Arc. Azure Arc only supports Windows and Linux.",
        [CA2]: "A ManagedIdentityId id was not provided.",
        [qAA.AZURE_POD_IDENTITY_AUTHORITY_HOST]: `The Managed Identity's '${D4.AZURE_POD_IDENTITY_AUTHORITY_HOST}' environment variable is malformed.`,
        [qAA.IDENTITY_ENDPOINT]: `The Managed Identity's '${D4.IDENTITY_ENDPOINT}' environment variable is malformed.`,
        [qAA.IMDS_ENDPOINT]: `The Managed Identity's '${D4.IMDS_ENDPOINT}' environment variable is malformed.`,
        [qAA.MSI_ENDPOINT]: `The Managed Identity's '${D4.MSI_ENDPOINT}' environment variable is malformed.`,
        [EA2]: "Authentication unavailable. The request to the managed identity endpoint timed out.",
        [W01]: "Azure Arc Managed Identities can only be system assigned.",
        [X01]: "Cloud Shell Managed Identities can only be system assigned.",
        [F01]: "Unable to create a Managed Identity source based on environment variables.",
        [mNA]: "Unable to read the secret file.",
        [zA2]: "Service Fabric user assigned managed identity ClientId or ResourceId is not configurable at runtime.",
        [V01]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is missing.",
        [K01]: "A 401 response was received form the Azure Arc Managed Identity, but the www-authenticate header is in an unsupported format."
    };
    nr1 = class nr1 extends t4 {
        constructor(A) {
            super(A, cA5[A]);
            this.name = "ManagedIdentityError", Object.setPrototypeOf(this, nr1.prototype)
        }
    }
});
class ar1 {
    get id() {
        return this._id
    }
    set id(A) {
        this._id = A
    }
    get idType() {
        return this._idType
    }
    set idType(A) {
        this._idType = A
    }
    constructor(A) {
        let Q = A?.userAssignedClientId,
            B = A?.userAssignedResourceId,
            G = A?.userAssignedObjectId;
        if (Q) {
            if (B || G) throw jW(Sl);
            this.id = Q, this.idType = lY.USER_ASSIGNED_CLIENT_ID
        } else if (B) {
            if (Q || G) throw jW(Sl);
            this.id = B, this.idType = lY.USER_ASSIGNED_RESOURCE_ID
        } else if (G) {
            if (Q || B) throw jW(Sl);
            this.id = G, this.idType = lY.USER_ASSIGNED_OBJECT_ID
        } else this.id = GA2, this.idType = lY.SYSTEM_ASSIGNED
    }
}
var UA2 = L(() => {
    IIA();
    HI();
    NAA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var pX, IY;
var dNA = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    pX = {
        invalidLoopbackAddressType: {
            code: "invalid_loopback_server_address_type",
            desc: "Loopback server address is not type string. This is unexpected."
        },
        unableToLoadRedirectUri: {
            code: "unable_to_load_redirectUrl",
            desc: "Loopback server callback was invoked without a url. This is unexpected."
        },
        noAuthCodeInResponse: {
            code: "no_auth_code_in_response",
            desc: "No auth code found in the server response. Please check your network trace to determine what happened."
        },
        noLoopbackServerExists: {
            code: "no_loopback_server_exists",
            desc: "No loopback server exists yet."
        },
        loopbackServerAlreadyExists: {
            code: "loopback_server_already_exists",
            desc: "Loopback server already exists. Cannot create another."
        },
        loopbackServerTimeout: {
            code: "loopback_server_timeout",
            desc: "Timed out waiting for auth code listener to be registered."
        },
        stateNotFoundError: {
            code: "state_not_found",
            desc: "State not found. Please verify that the request originated from msal."
        },
        thumbprintMissing: {
            code: "thumbprint_missing_from_client_certificate",
            desc: "Client certificate does not contain a SHA-1 or SHA-256 thumbprint."
        },
        redirectUriNotSupported: {
            code: "redirect_uri_not_supported",
            desc: "RedirectUri is not supported in this scenario. Please remove redirectUri from the request."
        }
    };
    IY = class IY extends t4 {
        constructor(A, Q) {
            super(A, Q);
            this.name = "NodeAuthError"
        }
        static createInvalidLoopbackAddressTypeError() {
            return new IY(pX.invalidLoopbackAddressType.code, `${pX.invalidLoopbackAddressType.desc}`)
        }
        static createUnableToLoadRedirectUrlError() {
            return new IY(pX.unableToLoadRedirectUri.code, `${pX.unableToLoadRedirectUri.desc}`)
        }
        static createNoAuthCodeInResponseError() {
            return new IY(pX.noAuthCodeInResponse.code, `${pX.noAuthCodeInResponse.desc}`)
        }
        static createNoLoopbackServerExistsError() {
            return new IY(pX.noLoopbackServerExists.code, `${pX.noLoopbackServerExists.desc}`)
        }
        static createLoopbackServerAlreadyExistsError() {
            return new IY(pX.loopbackServerAlreadyExists.code, `${pX.loopbackServerAlreadyExists.desc}`)
        }
        static createLoopbackServerTimeoutError() {
            return new IY(pX.loopbackServerTimeout.code, `${pX.loopbackServerTimeout.desc}`)
        }
        static createStateNotFoundError() {
            return new IY(pX.stateNotFoundError.code, pX.stateNotFoundError.desc)
        }
        static createThumbprintMissingError() {
            return new IY(pX.thumbprintMissing.code, pX.thumbprintMissing.desc)
        }
        static createRedirectUriNotSupportedError() {
            return new IY(pX.redirectUriNotSupported.code, pX.redirectUriNotSupported.desc)
        }
    }
});

function $A2({
    auth: A,
    broker: Q,
    cache: B,
    system: G,
    telemetry: Z
}) {
    let I = {
        ...iA5,
        networkClient: new uNA(G?.proxyUrl, G?.customAgentOptions),
        loggerOptions: G?.loggerOptions || sr1,
        disableInternalRetries: G?.disableInternalRetries || !1
    };
    if (!!A.clientCertificate && !A.clientCertificate.thumbprint && !A.clientCertificate.thumbprintSha256) throw IY.createStateNotFoundError();
    return {
        auth: {
            ...pA5,
            ...A
        },
        broker: {
            ...Q
        },
        cache: {
            ...lA5,
            ...B
        },
        system: {
            ...I,
            ...G
        },
        telemetry: {
            ...nA5,
            ...Z
        }
    }
}

function wA2({
    clientCapabilities: A,
    managedIdentityIdParams: Q,
    system: B
}) {
    let G = new ar1(Q),
        Z = B?.loggerOptions || sr1,
        I;
    if (B?.networkClient) I = B.networkClient;
    else I = new uNA(B?.proxyUrl, B?.customAgentOptions);
    return {
        clientCapabilities: A || [],
        managedIdentityId: G,
        system: {
            loggerOptions: Z,
            networkClient: I
        },
        disableInternalRetries: B?.disableInternalRetries || !1
    }
}
var pA5, lA5, sr1, iA5, nA5;
var rr1 = L(() => {
    u7();
    HA2();
    UA2();
    dNA(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    pA5 = {
        clientId: L0.EMPTY_STRING,
        authority: L0.DEFAULT_AUTHORITY,
        clientSecret: L0.EMPTY_STRING,
        clientAssertion: L0.EMPTY_STRING,
        clientCertificate: {
            thumbprint: L0.EMPTY_STRING,
            thumbprintSha256: L0.EMPTY_STRING,
            privateKey: L0.EMPTY_STRING,
            x5c: L0.EMPTY_STRING
        },
        knownAuthorities: [],
        cloudDiscoveryMetadata: L0.EMPTY_STRING,
        authorityMetadata: L0.EMPTY_STRING,
        clientCapabilities: [],
        protocolMode: lH.AAD,
        azureCloudOptions: {
            azureCloudInstance: hf.None,
            tenant: L0.EMPTY_STRING
        },
        skipAuthorityMetadataCache: !1,
        encodeExtraQueryParams: !1
    }, lA5 = {
        claimsBasedCachingEnabled: !1
    }, sr1 = {
        loggerCallback: () => {},
        piiLoggingEnabled: !1,
        logLevel: pY.Info
    }, iA5 = {
        loggerOptions: sr1,
        networkClient: new uNA,
        proxyUrl: L0.EMPTY_STRING,
        customAgentOptions: {},
        disableInternalRetries: !1
    }, nA5 = {
        application: {
            appName: L0.EMPTY_STRING,
            appVersion: L0.EMPTY_STRING
        }
    }
});
var or1 = U((qA2) => {
    Object.defineProperty(qA2, "__esModule", {
        value: !0
    });
    qA2.default = rA5;
    var aA5 = sA5(UA("crypto"));

    function sA5(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var H01 = new Uint8Array(256),
        D01 = H01.length;