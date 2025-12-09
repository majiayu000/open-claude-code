/**
 * Claude Code Decompiled
 * Category: auth
 * File: 50/61
 * Lines: 254058 - 255557 (1500 lines)
 * Original file: cli.js
 */

    }, me6 = {
        sku: L0.SKU,
        version: cZA,
        cpu: L0.EMPTY_STRING,
        os: L0.EMPTY_STRING
    }, de6 = {
        clientSecret: L0.EMPTY_STRING,
        clientAssertion: void 0
    }, ce6 = {
        azureCloudInstance: hf.None,
        tenant: `${L0.DEFAULT_COMMON_TENANT}`
    }, pe6 = {
        application: {
            appName: "",
            appVersion: ""
        }
    }
});
var RE;
var ENA = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */
    RE = {
        HOME_ACCOUNT_ID: "home_account_id",
        UPN: "UPN"
    }
});
var KAA = {};
pG(KAA, {
    X_MS_LIB_CAPABILITY: () => Gr1,
    X_CLIENT_VER: () => ts1,
    X_CLIENT_SKU: () => os1,
    X_CLIENT_OS: () => es1,
    X_CLIENT_LAST_TELEM: () => Br1,
    X_CLIENT_EXTRA_SKU: () => GA5,
    X_CLIENT_CURR_TELEM: () => Qr1,
    X_CLIENT_CPU: () => Ar1,
    X_APP_VER: () => Ir1,
    X_APP_NAME: () => Zr1,
    TOKEN_TYPE: () => j11,
    STATE: () => cs1,
    SID: () => Er1,
    SESSION_STATE: () => te6,
    SCOPE: () => ms1,
    RETURN_SPA_CODE: () => _11,
    RESPONSE_TYPE: () => fs1,
    RESPONSE_MODE: () => hs1,
    REQ_CNF: () => S11,
    REQUESTED_TOKEN_USE: () => Dr1,
    REFRESH_TOKEN_EXPIRES_IN: () => oe6,
    REFRESH_TOKEN: () => ds1,
    REDIRECT_URI: () => P11,
    PROMPT: () => ls1,
    POST_LOGOUT_URI: () => Yr1,
    ON_BEHALF_OF: () => AA5,
    OBO_ASSERTION: () => Kr1,
    NONCE: () => ps1,
    NATIVE_BROKER: () => Hr1,
    LOGOUT_HINT: () => Cr1,
    LOGIN_HINT: () => zr1,
    INSTANCE_AWARE: () => rZA,
    ID_TOKEN_HINT: () => Jr1,
    ID_TOKEN: () => se6,
    GRANT_TYPE: () => gs1,
    FOCI: () => QA5,
    EXPIRES_IN: () => re6,
    ERROR_DESCRIPTION: () => ne6,
    ERROR: () => ie6,
    EAR_JWK: () => $r1,
    EAR_JWE_CRYPTO: () => wr1,
    DOMAIN_HINT: () => Ur1,
    DEVICE_CODE: () => Wr1,
    CODE_VERIFIER: () => ss1,
    CODE_CHALLENGE_METHOD: () => as1,
    CODE_CHALLENGE: () => ns1,
    CODE: () => is1,
    CLIENT_SECRET: () => Xr1,
    CLIENT_REQUEST_ID: () => rs1,
    CLIENT_INFO: () => ee6,
    CLIENT_ID: () => Hk,
    CLIENT_ASSERTION_TYPE: () => Vr1,
    CLIENT_ASSERTION: () => Fr1,
    CLAIMS: () => us1,
    CCS_HEADER: () => BA5,
    BROKER_REDIRECT_URI: () => k11,
    BROKER_CLIENT_ID: () => zNA,
    ACCESS_TOKEN: () => ae6
});
var Hk = "client_id",
    P11 = "redirect_uri",
    fs1 = "response_type",
    hs1 = "response_mode",
    gs1 = "grant_type",
    us1 = "claims",
    ms1 = "scope",
    ie6 = "error",
    ne6 = "error_description",
    ae6 = "access_token",
    se6 = "id_token",
    ds1 = "refresh_token",
    re6 = "expires_in",
    oe6 = "refresh_token_expires_in",
    cs1 = "state",
    ps1 = "nonce",
    ls1 = "prompt",
    te6 = "session_state",
    ee6 = "client_info",
    is1 = "code",
    ns1 = "code_challenge",
    as1 = "code_challenge_method",
    ss1 = "code_verifier",
    rs1 = "client-request-id",
    os1 = "x-client-SKU",
    ts1 = "x-client-VER",
    es1 = "x-client-OS",
    Ar1 = "x-client-CPU",
    Qr1 = "x-client-current-telemetry",
    Br1 = "x-client-last-telemetry",
    Gr1 = "x-ms-lib-capability",
    Zr1 = "x-app-name",
    Ir1 = "x-app-ver",
    Yr1 = "post_logout_redirect_uri",
    Jr1 = "id_token_hint",
    Wr1 = "device_code",
    Xr1 = "client_secret",
    Fr1 = "client_assertion",
    Vr1 = "client_assertion_type",
    j11 = "token_type",
    S11 = "req_cnf",
    Kr1 = "assertion",
    Dr1 = "requested_token_use",
    AA5 = "on_behalf_of",
    QA5 = "foci",
    BA5 = "X-AnchorMailbox",
    _11 = "return_spa_code",
    Hr1 = "nativebroker",
    Cr1 = "logout_hint",
    Er1 = "sid",
    zr1 = "login_hint",
    Ur1 = "domain_hint",
    GA5 = "x-client-xtra-sku",
    zNA = "brk_client_id",
    k11 = "brk_redirect_uri",
    rZA = "instance_aware",
    $r1 = "ear_jwk",
    wr1 = "ear_jwe_crypto";
var oZA = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
var OB = {};
pG(OB, {
    instrumentBrokerParams: () => DAA,
    addUsername: () => FA5,
    addThrottling: () => jNA,
    addState: () => wNA,
    addSshJwk: () => TNA,
    addSid: () => y11,
    addServerTelemetry: () => PNA,
    addScopes: () => HAA,
    addResponseType: () => ZA5,
    addResponseMode: () => qr1,
    addRequestTokenUse: () => XA5,
    addRefreshToken: () => Pr1,
    addRedirectUri: () => EAA,
    addPrompt: () => Or1,
    addPostLogoutRedirectUri: () => Nr1,
    addPostBodyParameters: () => DA5,
    addPopToken: () => RNA,
    addPassword: () => VA5,
    addOboAssertion: () => WA5,
    addNonce: () => Rr1,
    addNativeBroker: () => IA5,
    addLogoutHint: () => Sr1,
    addLoginHint: () => tZA,
    addLibraryInfo: () => UNA,
    addInstanceAware: () => ONA,
    addIdTokenHint: () => Lr1,
    addGrantType: () => MNA,
    addExtraQueryParameters: () => cf,
    addEARParameters: () => KA5,
    addDomainHint: () => Mr1,
    addDeviceCode: () => JA5,
    addCorrelationId: () => UAA,
    addCodeVerifier: () => jr1,
    addCodeChallengeParams: () => YA5,
    addClientSecret: () => qNA,
    addClientInfo: () => $AA,
    addClientId: () => CAA,
    addClientCapabilitiesToClaims: () => yeB,
    addClientAssertionType: () => LNA,
    addClientAssertion: () => NNA,
    addClaims: () => zAA,
    addCcsUpn: () => Ml,
    addCcsOid: () => df,
    addBrokerParameters: () => pf,
    addAuthorizationCode: () => Tr1,
    addApplicationTelemetry: () => $NA
});

function DAA(A, Q, B) {
    if (!Q) return;
    let G = A.get(Hk);
    if (G && A.has(zNA)) B?.addFields({
        embeddedClientId: G,
        embeddedRedirectUri: A.get(P11)
    }, Q)
}

function ZA5(A, Q) {
    A.set(fs1, Q)
}

function qr1(A, Q) {
    A.set(hs1, Q ? Q : Xk.QUERY)
}

function IA5(A) {
    A.set(Hr1, "1")
}

function HAA(A, Q, B = !0, G = pH) {
    if (B && !G.includes("openid") && !Q.includes("openid")) G.push("openid");
    let Z = B ? [...Q || [], ...G] : Q || [],
        I = new PJ(Z);
    A.set(ms1, I.printScopes())
}

function CAA(A, Q) {
    A.set(Hk, Q)
}

function EAA(A, Q) {
    A.set(P11, Q)
}

function Nr1(A, Q) {
    A.set(Yr1, Q)
}

function Lr1(A, Q) {
    A.set(Jr1, Q)
}

function Mr1(A, Q) {
    A.set(Ur1, Q)
}

function tZA(A, Q) {
    A.set(zr1, Q)
}

function Ml(A, Q) {
    A.set(vZ.CCS_HEADER, `UPN:${Q}`)
}

function df(A, Q) {
    A.set(vZ.CCS_HEADER, `Oid:${Q.uid}@${Q.utid}`)
}

function y11(A, Q) {
    A.set(Er1, Q)
}

function zAA(A, Q, B) {
    let G = yeB(Q, B);
    try {
        JSON.parse(G)
    } catch (Z) {
        throw jG($l)
    }
    A.set(us1, G)
}

function UAA(A, Q) {
    A.set(rs1, Q)
}

function UNA(A, Q) {
    if (A.set(os1, Q.sku), A.set(ts1, Q.version), Q.os) A.set(es1, Q.os);
    if (Q.cpu) A.set(Ar1, Q.cpu)
}

function $NA(A, Q) {
    if (Q?.appName) A.set(Zr1, Q.appName);
    if (Q?.appVersion) A.set(Ir1, Q.appVersion)
}

function Or1(A, Q) {
    A.set(ls1, Q)
}

function wNA(A, Q) {
    if (Q) A.set(cs1, Q)
}

function Rr1(A, Q) {
    A.set(ps1, Q)
}

function YA5(A, Q, B) {
    if (Q && B) A.set(ns1, Q), A.set(as1, B);
    else throw jG(JAA)
}

function Tr1(A, Q) {
    A.set(is1, Q)
}

function JA5(A, Q) {
    A.set(Wr1, Q)
}

function Pr1(A, Q) {
    A.set(ds1, Q)
}

function jr1(A, Q) {
    A.set(ss1, Q)
}

function qNA(A, Q) {
    A.set(Xr1, Q)
}

function NNA(A, Q) {
    if (Q) A.set(Fr1, Q)
}

function LNA(A, Q) {
    if (Q) A.set(Vr1, Q)
}

function WA5(A, Q) {
    A.set(Kr1, Q)
}

function XA5(A, Q) {
    A.set(Dr1, Q)
}

function MNA(A, Q) {
    A.set(gs1, Q)
}

function $AA(A) {
    A.set($eB, "1")
}

function ONA(A) {
    if (!A.has(rZA)) A.set(rZA, "true")
}

function cf(A, Q) {
    Object.entries(Q).forEach(([B, G]) => {
        if (!A.has(B) && G) A.set(B, G)
    })
}

function yeB(A, Q) {
    let B;
    if (!A) B = {};
    else try {
        B = JSON.parse(A)
    } catch (G) {
        throw jG($l)
    }
    if (Q && Q.length > 0) {
        if (!B.hasOwnProperty(ve.ACCESS_TOKEN)) B[ve.ACCESS_TOKEN] = {};
        B[ve.ACCESS_TOKEN][ve.XMS_CC] = {
            values: Q
        }
    }
    return JSON.stringify(B)
}

function FA5(A, Q) {
    A.set(bqA.username, Q)
}

function VA5(A, Q) {
    A.set(bqA.password, Q)
}

function RNA(A, Q) {
    if (Q) A.set(j11, e6.POP), A.set(S11, Q)
}

function TNA(A, Q) {
    if (Q) A.set(j11, e6.SSH), A.set(S11, Q)
}

function PNA(A, Q) {
    A.set(Qr1, Q.generateCurrentRequestHeaderValue()), A.set(Br1, Q.generateLastRequestHeaderValue())
}

function jNA(A) {
    A.set(Gr1, Fk.X_MS_LIB_CAPABILITY_VALUE)
}

function Sr1(A, Q) {
    A.set(Cr1, Q)
}

function pf(A, Q, B) {
    if (!A.has(zNA)) A.set(zNA, Q);
    if (!A.has(k11)) A.set(k11, B)
}

function KA5(A, Q) {
    A.set($r1, encodeURIComponent(Q));
    let B = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0";
    A.set(wr1, B)
}

function DA5(A, Q) {
    Object.entries(Q).forEach(([B, G]) => {
        if (G) A.set(B, G)
    })
}
var eZA = L(() => {
    bZ();
    oZA();
    FNA();
    ql();
    uf(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});

function xeB(A) {
    return A.hasOwnProperty("authorization_endpoint") && A.hasOwnProperty("token_endpoint") && A.hasOwnProperty("issuer") && A.hasOwnProperty("jwks_uri")
}
var veB = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });

function beB(A) {
    return A.hasOwnProperty("tenant_discovery_endpoint") && A.hasOwnProperty("metadata")
}
var feB = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });

function heB(A) {
    return A.hasOwnProperty("error") && A.hasOwnProperty("error_description")
}
var geB = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
var ueB = (A, Q, B, G, Z) => {
        return (...I) => {
            B.trace(`Executing function ${Q}`);
            let Y = G?.startMeasurement(Q, Z);
            if (Z) {
                let J = Q + "CallCount";
                G?.incrementFields({
                    [J]: 1
                }, Z)
            }
            try {
                let J = A(...I);
                return Y?.end({
                    success: !0
                }), B.trace(`Returning result from ${Q}`), J
            } catch (J) {
                B.trace(`Error occurred in ${Q}`);
                try {
                    B.trace(JSON.stringify(J))
                } catch (W) {
                    B.trace("Unable to print error message.")
                }
                throw Y?.end({
                    success: !1
                }, J), J
            }
        }
    },
    P5 = (A, Q, B, G, Z) => {
        return (...I) => {
            B.trace(`Executing function ${Q}`);
            let Y = G?.startMeasurement(Q, Z);
            if (Z) {
                let J = Q + "CallCount";
                G?.incrementFields({
                    [J]: 1
                }, Z)
            }
            return G?.setPreQueueTime(Q, Z), A(...I).then((J) => {
                return B.trace(`Returning result from ${Q}`), Y?.end({
                    success: !0
                }), J
            }).catch((J) => {
                B.trace(`Error occurred in ${Q}`);
                try {
                    B.trace(JSON.stringify(J))
                } catch (W) {
                    B.trace("Unable to print error message.")
                }
                throw Y?.end({
                    success: !1
                }, J), J
            })
        }
    };
var lf = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
class SNA {
    constructor(A, Q, B, G) {
        this.networkInterface = A, this.logger = Q, this.performanceClient = B, this.correlationId = G
    }
    async detectRegion(A, Q) {
        this.performanceClient?.addQueueMeasurement(W0.RegionDiscoveryDetectRegion, this.correlationId);
        let B = A;
        if (!B) {
            let G = SNA.IMDS_OPTIONS;
            try {
                let Z = await P5(this.getRegionFromIMDS.bind(this), W0.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(L0.IMDS_VERSION, G);
                if (Z.status === o4.SUCCESS) B = Z.body, Q.region_source = fe.IMDS;
                if (Z.status === o4.BAD_REQUEST) {
                    let I = await P5(this.getCurrentVersion.bind(this), W0.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(G);
                    if (!I) return Q.region_source = fe.FAILED_AUTO_DETECTION, null;
                    let Y = await P5(this.getRegionFromIMDS.bind(this), W0.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(I, G);
                    if (Y.status === o4.SUCCESS) B = Y.body, Q.region_source = fe.IMDS
                }
            } catch (Z) {
                return Q.region_source = fe.FAILED_AUTO_DETECTION, null
            }
        } else Q.region_source = fe.ENVIRONMENT_VARIABLE;
        if (!B) Q.region_source = fe.FAILED_AUTO_DETECTION;
        return B || null
    }
    async getRegionFromIMDS(A, Q) {
        return this.performanceClient?.addQueueMeasurement(W0.RegionDiscoveryGetRegionFromIMDS, this.correlationId), this.networkInterface.sendGetRequestAsync(`${L0.IMDS_ENDPOINT}?api-version=${A}&format=text`, Q, L0.IMDS_TIMEOUT)
    }
    async getCurrentVersion(A) {
        this.performanceClient?.addQueueMeasurement(W0.RegionDiscoveryGetCurrentVersion, this.correlationId);
        try {
            let Q = await this.networkInterface.sendGetRequestAsync(`${L0.IMDS_ENDPOINT}?format=json`, A);
            if (Q.status === o4.BAD_REQUEST && Q.body && Q.body["newest-versions"] && Q.body["newest-versions"].length > 0) return Q.body["newest-versions"][0];
            return null
        } catch (Q) {
            return null
        }
    }
}
var meB = L(() => {
    bZ();
    uT();
    lf(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    SNA.IMDS_OPTIONS = {
        headers: {
            Metadata: "true"
        }
    }
});
var KI = {};
pG(KI, {
    wasClockTurnedBack: () => _r1,
    toSecondsFromDate: () => HA5,
    toDateFromSeconds: () => _NA,
    nowSeconds: () => Yq,
    isTokenExpired: () => AIA,
    isCacheExpired: () => CA5,
    delay: () => EA5
});

function Yq() {
    return Math.round(new Date().getTime() / 1000)
}

function HA5(A) {
    return A.getTime() / 1000
}

function _NA(A) {
    if (A) return new Date(Number(A) * 1000);
    return new Date
}

function AIA(A, Q) {
    let B = Number(A) || 0;
    return Yq() + Q > B
}

function CA5(A, Q) {
    let B = Number(A) + Q * 24 * 60 * 60 * 1000;
    return Date.now() > B
}

function _r1(A) {
    return Number(A) > Yq()
}

function EA5(A, Q) {
    return new Promise((B) => setTimeout(() => B(Q), A))
}
var Ol = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
var TE = {};
pG(TE, {
    updateCloudDiscoveryMetadata: () => kNA,
    updateAuthorityEndpointMetadata: () => QIA,
    isThrottlingEntity: () => qA5,
    isServerTelemetryEntity: () => wA5,
    isRefreshTokenEntity: () => $A5,
    isIdTokenEntity: () => UA5,
    isCredentialEntity: () => x11,
    isAuthorityMetadataExpired: () => b11,
    isAuthorityMetadataEntity: () => MA5,
    isAppMetadataEntity: () => LA5,
    isAccessTokenEntity: () => zA5,
    generateAuthorityMetadataExpiresAt: () => v11,
    generateAppMetadataKey: () => NA5,
    createRefreshTokenEntity: () => xr1,
    createIdTokenEntity: () => kr1,
    createAccessTokenEntity: () => yr1
});

function kr1(A, Q, B, G, Z) {
    return {
        credentialType: g7.ID_TOKEN,
        homeAccountId: A,
        environment: Q,
        clientId: G,
        secret: B,
        realm: Z,
        lastUpdatedAt: Date.now().toString()
    }
}

function yr1(A, Q, B, G, Z, I, Y, J, W, X, F, V, K, D, H) {
    let C = {
        homeAccountId: A,
        credentialType: g7.ACCESS_TOKEN,
        secret: B,
        cachedAt: Yq().toString(),
        expiresOn: Y.toString(),
        extendedExpiresOn: J.toString(),
        environment: Q,
        clientId: G,
        realm: Z,
        target: I,
        tokenType: F || e6.BEARER,
        lastUpdatedAt: Date.now().toString()
    };
    if (V) C.userAssertionHash = V;
    if (X) C.refreshOn = X.toString();
    if (D) C.requestedClaims = D, C.requestedClaimsHash = H;
    if (C.tokenType?.toLowerCase() !== e6.BEARER.toLowerCase()) switch (C.credentialType = g7.ACCESS_TOKEN_WITH_AUTH_SCHEME, C.tokenType) {
        case e6.POP:
            let E = mf(B, W);
            if (!E?.cnf?.kid) throw v0(oe);
            C.keyId = E.cnf.kid;
            break;
        case e6.SSH:
            C.keyId = K
    }
    return C
}

function xr1(A, Q, B, G, Z, I, Y) {
    let J = {
        credentialType: g7.REFRESH_TOKEN,
        homeAccountId: A,
        environment: Q,
        clientId: G,
        secret: B,
        lastUpdatedAt: Date.now().toString()
    };
    if (I) J.userAssertionHash = I;
    if (Z) J.familyId = Z;
    if (Y) J.expiresOn = Y.toString();
    return J
}

function x11(A) {
    return A.hasOwnProperty("homeAccountId") && A.hasOwnProperty("environment") && A.hasOwnProperty("credentialType") && A.hasOwnProperty("clientId") && A.hasOwnProperty("secret")
}

function zA5(A) {
    if (!A) return !1;
    return x11(A) && A.hasOwnProperty("realm") && A.hasOwnProperty("target") && (A.credentialType === g7.ACCESS_TOKEN || A.credentialType === g7.ACCESS_TOKEN_WITH_AUTH_SCHEME)
}

function UA5(A) {
    if (!A) return !1;
    return x11(A) && A.hasOwnProperty("realm") && A.credentialType === g7.ID_TOKEN
}

function $A5(A) {
    if (!A) return !1;
    return x11(A) && A.credentialType === g7.REFRESH_TOKEN
}

function wA5(A, Q) {
    let B = A.indexOf(RF.CACHE_KEY) === 0,
        G = !0;
    if (Q) G = Q.hasOwnProperty("failedRequests") && Q.hasOwnProperty("errors") && Q.hasOwnProperty("cacheHits");
    return B && G
}

function qA5(A, Q) {
    let B = !1;
    if (A) B = A.indexOf(Fk.THROTTLING_PREFIX) === 0;
    let G = !0;
    if (Q) G = Q.hasOwnProperty("throttleTime");
    return B && G
}

function NA5({
    environment: A,
    clientId: Q
}) {
    return [xqA, A, Q].join(yf.CACHE_KEY_SEPARATOR).toLowerCase()
}

function LA5(A, Q) {
    if (!Q) return !1;
    return A.indexOf(xqA) === 0 && Q.hasOwnProperty("clientId") && Q.hasOwnProperty("environment")
}

function MA5(A, Q) {
    if (!Q) return !1;
    return A.indexOf(gZA.CACHE_KEY) === 0 && Q.hasOwnProperty("aliases") && Q.hasOwnProperty("preferred_cache") && Q.hasOwnProperty("preferred_network") && Q.hasOwnProperty("canonical_authority") && Q.hasOwnProperty("authorization_endpoint") && Q.hasOwnProperty("token_endpoint") && Q.hasOwnProperty("issuer") && Q.hasOwnProperty("aliasesFromNetwork") && Q.hasOwnProperty("endpointsFromNetwork") && Q.hasOwnProperty("expiresAt") && Q.hasOwnProperty("jwks_uri")
}

function v11() {
    return Yq() + gZA.REFRESH_TIME_SECONDS
}

function QIA(A, Q, B) {
    A.authorization_endpoint = Q.authorization_endpoint, A.token_endpoint = Q.token_endpoint, A.end_session_endpoint = Q.end_session_endpoint, A.issuer = Q.issuer, A.endpointsFromNetwork = B, A.jwks_uri = Q.jwks_uri
}

function kNA(A, Q, B) {
    A.aliases = Q.aliases, A.preferred_cache = Q.preferred_cache, A.preferred_network = Q.preferred_network, A.aliasesFromNetwork = B
}

function b11(A) {
    return A.expiresAt <= Yq()
}
var f11 = L(() => {
    aZA();
    mX();
    bZ();
    Ol();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
class TF {
    constructor(A, Q, B, G, Z, I, Y, J) {
        this.canonicalAuthority = A, this._canonicalAuthority.validateAsUri(), this.networkInterface = Q, this.cacheManager = B, this.authorityOptions = G, this.regionDiscoveryMetadata = {
            region_used: void 0,
            region_source: void 0,
            region_outcome: void 0
        }, this.logger = Z, this.performanceClient = Y, this.correlationId = I, this.managedIdentity = J || !1, this.regionDiscovery = new SNA(Q, this.logger, this.performanceClient, this.correlationId)
    }
    getAuthorityType(A) {
        if (A.HostNameAndPort.endsWith(L0.CIAM_AUTH_URL)) return xM.Ciam;
        let Q = A.PathSegments;
        if (Q.length) switch (Q[0].toLowerCase()) {
            case L0.ADFS:
                return xM.Adfs;
            case L0.DSTS:
                return xM.Dsts
        }
        return xM.Default
    }
    get authorityType() {
        return this.getAuthorityType(this.canonicalAuthorityUrlComponents)
    }
    get protocolMode() {
        return this.authorityOptions.protocolMode
    }
    get options() {
        return this.authorityOptions
    }
    get canonicalAuthority() {
        return this._canonicalAuthority.urlString
    }
    set canonicalAuthority(A) {
        this._canonicalAuthority = new H8(A), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null
    }
    get canonicalAuthorityUrlComponents() {
        if (!this._canonicalAuthorityUrlComponents) this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
        return this._canonicalAuthorityUrlComponents
    }
    get hostnameAndPort() {
        return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase()
    }
    get tenant() {
        return this.canonicalAuthorityUrlComponents.PathSegments[0]
    }
    get authorizationEndpoint() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint);
        else throw v0(OE)
    }
    get tokenEndpoint() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint);
        else throw v0(OE)
    }
    get deviceCodeEndpoint() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
        else throw v0(OE)
    }
    get endSessionEndpoint() {
        if (this.discoveryComplete()) {
            if (!this.metadata.end_session_endpoint) throw v0(ee);
            return this.replacePath(this.metadata.end_session_endpoint)
        } else throw v0(OE)
    }
    get selfSignedJwtAudience() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);
        else throw v0(OE)
    }
    get jwksUri() {
        if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri);
        else throw v0(OE)
    }
    canReplaceTenant(A) {
        return A.PathSegments.length === 1 && !TF.reservedTenantDomains.has(A.PathSegments[0]) && this.getAuthorityType(A) === xM.Default && this.protocolMode !== lH.OIDC
    }
    replaceTenant(A) {
        return A.replace(/{tenant}|{tenantid}/g, this.tenant)
    }
    replacePath(A) {
        let Q = A,
            G = new H8(this.metadata.canonical_authority).getUrlComponents(),
            Z = G.PathSegments;
        return this.canonicalAuthorityUrlComponents.PathSegments.forEach((Y, J) => {
            let W = Z[J];
            if (J === 0 && this.canReplaceTenant(G)) {
                let X = new H8(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
                if (W !== X) this.logger.verbose(`Replacing tenant domain name ${W} with id ${X}`), W = X
            }
            if (Y !== W) Q = Q.replace(`/${W}/`, `/${Y}/`)
        }), this.replaceTenant(Q)
    }
    get defaultOpenIdConfigurationEndpoint() {
        let A = this.hostnameAndPort;
        if (this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === xM.Adfs || this.protocolMode === lH.OIDC && !this.isAliasOfKnownMicrosoftAuthority(A)) return `${this.canonicalAuthority}.well-known/openid-configuration`;
        return `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`
    }
    discoveryComplete() {
        return !!this.metadata
    }
    async resolveEndpointsAsync() {
        this.performanceClient?.addQueueMeasurement(W0.AuthorityResolveEndpointsAsync, this.correlationId);
        let A = this.getCurrentMetadataEntity(),
            Q = await P5(this.updateCloudDiscoveryMetadata.bind(this), W0.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(A);
        this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, A.preferred_network);
        let B = await P5(this.updateEndpointMetadata.bind(this), W0.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(A);
        this.updateCachedMetadata(A, Q, {
            source: B
        }), this.performanceClient?.addFields({
            cloudDiscoverySource: Q,
            authorityEndpointSource: B
        }, this.correlationId)
    }
    getCurrentMetadataEntity() {
        let A = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
        if (!A) A = {
            aliases: [],
            preferred_cache: this.hostnameAndPort,
            preferred_network: this.hostnameAndPort,
            canonical_authority: this.canonicalAuthority,
            authorization_endpoint: "",
            token_endpoint: "",
            end_session_endpoint: "",
            issuer: "",
            aliasesFromNetwork: !1,
            endpointsFromNetwork: !1,
            expiresAt: v11(),
            jwks_uri: ""
        };
        return A
    }
    updateCachedMetadata(A, Q, B) {
        if (Q !== ME.CACHE && B?.source !== ME.CACHE) A.expiresAt = v11(), A.canonical_authority = this.canonicalAuthority;
        let G = this.cacheManager.generateAuthorityMetadataCacheKey(A.preferred_cache);
        this.cacheManager.setAuthorityMetadata(G, A), this.metadata = A
    }
    async updateEndpointMetadata(A) {
        this.performanceClient?.addQueueMeasurement(W0.AuthorityUpdateEndpointMetadata, this.correlationId);
        let Q = this.updateEndpointMetadataFromLocalSources(A);
        if (Q) {
            if (Q.source === ME.HARDCODED_VALUES) {
                if (this.authorityOptions.azureRegionConfiguration?.azureRegion) {
                    if (Q.metadata) {
                        let G = await P5(this.updateMetadataWithRegionalInformation.bind(this), W0.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(Q.metadata);
                        QIA(A, G, !1), A.canonical_authority = this.canonicalAuthority
                    }
                }
            }
            return Q.source
        }
        let B = await P5(this.getEndpointMetadataFromNetwork.bind(this), W0.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
        if (B) {
            if (this.authorityOptions.azureRegionConfiguration?.azureRegion) B = await P5(this.updateMetadataWithRegionalInformation.bind(this), W0.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(B);
            return QIA(A, B, !0), ME.NETWORK
        } else throw v0(me, this.defaultOpenIdConfigurationEndpoint)
    }
    updateEndpointMetadataFromLocalSources(A) {
        this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
        let Q = this.getEndpointMetadataFromConfig();
        if (Q) return this.logger.verbose("Found endpoint metadata in authority configuration"), QIA(A, Q, !1), {
            source: ME.CONFIG
        };
        if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
        else {
            let G = this.getEndpointMetadataFromHardcodedValues();
            if (G) return QIA(A, G, !1), {
                source: ME.HARDCODED_VALUES,
                metadata: G
            };
            else this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.")
        }
        let B = b11(A);
        if (this.isAuthoritySameType(A) && A.endpointsFromNetwork && !B) return this.logger.verbose("Found endpoint metadata in the cache."), {
            source: ME.CACHE
        };
        else if (B) this.logger.verbose("The metadata entity is expired.");
        return null
    }
    isAuthoritySameType(A) {
        return new H8(A.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length
    }
    getEndpointMetadataFromConfig() {
        if (this.authorityOptions.authorityMetadata) try {
            return JSON.parse(this.authorityOptions.authorityMetadata)
        } catch (A) {
            throw jG(WAA)
        }
        return null
    }
    async getEndpointMetadataFromNetwork() {
        this.performanceClient?.addQueueMeasurement(W0.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
        let A = {},
            Q = this.defaultOpenIdConfigurationEndpoint;
        this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${Q}`);
        try {
            let B = await this.networkInterface.sendGetRequestAsync(Q, A);
            if (xeB(B.body)) return B.body;
            else return this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), null
        } catch (B) {
            return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${B}`), null
        }
    }
    getEndpointMetadataFromHardcodedValues() {
        if (this.hostnameAndPort in Ps1) return Ps1[this.hostnameAndPort];
        return null
    }
    async updateMetadataWithRegionalInformation(A) {
        this.performanceClient?.addQueueMeasurement(W0.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
        let Q = this.authorityOptions.azureRegionConfiguration?.azureRegion;
        if (Q) {
            if (Q !== L0.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = D11.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = Q, TF.replaceWithRegionalInformation(A, Q);
            let B = await P5(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), W0.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration?.environmentRegion, this.regionDiscoveryMetadata);
            if (B) return this.regionDiscoveryMetadata.region_outcome = D11.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = B, TF.replaceWithRegionalInformation(A, B);
            this.regionDiscoveryMetadata.region_outcome = D11.AUTO_DETECTION_REQUESTED_FAILED
        }
        return A
    }
    async updateCloudDiscoveryMetadata(A) {
        this.performanceClient?.addQueueMeasurement(W0.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
        let Q = this.updateCloudDiscoveryMetadataFromLocalSources(A);
        if (Q) return Q;
        let B = await P5(this.getCloudDiscoveryMetadataFromNetwork.bind(this), W0.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
        if (B) return kNA(A, B, !0), ME.NETWORK;
        throw jG(XAA)
    }
    updateCloudDiscoveryMetadataFromLocalSources(A) {
        this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities||L0.NOT_APPLICABLE}`), this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata||L0.NOT_APPLICABLE}`), this.logger.verbosePii(`Canonical Authority: ${A.canonical_authority||L0.NOT_APPLICABLE}`);
        let Q = this.getCloudDiscoveryMetadataFromConfig();
        if (Q) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), kNA(A, Q, !1), ME.CONFIG;
        if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
        else {
            let G = TeB(this.hostnameAndPort);
            if (G) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), kNA(A, G, !1), ME.HARDCODED_VALUES;
            this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.")
        }
        let B = b11(A);
        if (this.isAuthoritySameType(A) && A.aliasesFromNetwork && !B) return this.logger.verbose("Found cloud discovery metadata in the cache."), ME.CACHE;
        else if (B) this.logger.verbose("The metadata entity is expired.");
        return null
    }
    getCloudDiscoveryMetadataFromConfig() {
        if (this.authorityType === xM.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), TF.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        if (this.authorityOptions.cloudDiscoveryMetadata) {
            this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
            try {
                this.logger.verbose("Attempting to parse the cloud discovery metadata.");
                let A = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata),
                    Q = HNA(A.metadata, this.hostnameAndPort);
                if (this.logger.verbose("Parsed the cloud discovery metadata."), Q) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), Q;
                else this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.")
            } catch (A) {
                throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), jG(wl)
            }
        }
        if (this.isInKnownAuthorities()) return this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), TF.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        return null
    }
    async getCloudDiscoveryMetadataFromNetwork() {
        this.performanceClient?.addQueueMeasurement(W0.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
        let A = `${L0.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`,
            Q = {},
            B = null;
        try {
            let G = await this.networkInterface.sendGetRequestAsync(A, Q),
                Z, I;
            if (beB(G.body)) Z = G.body, I = Z.metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${Z.tenant_discovery_endpoint}`);
            else if (heB(G.body)) {
                if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${G.status}`), Z = G.body, Z.error === L0.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), null;
                this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${Z.error}`), this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${Z.error_description}`), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), I = []
            } else return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), null;
            this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), B = HNA(I, this.hostnameAndPort)
        } catch (G) {
            if (G instanceof t4) this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${G.errorCode}
Error Description: ${G.errorMessage}`);
            else {
                let Z = G;
                this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${Z.name}
Error Description: ${Z.message}`)
            }
            return null
        }
        if (!B) this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), B = TF.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
        return B
    }
    isInKnownAuthorities() {
        return this.authorityOptions.knownAuthorities.filter((Q) => {
            return Q && H8.getDomainFromUrl(Q).toLowerCase() === this.hostnameAndPort
        }).length > 0
    }
    static generateAuthority(A, Q) {
        let B;
        if (Q && Q.azureCloudInstance !== hf.None) {
            let G = Q.tenant ? Q.tenant : L0.DEFAULT_COMMON_TENANT;
            B = `${Q.azureCloudInstance}/${G}/`
        }
        return B ? B : A
    }
    static createCloudDiscoveryMetadataFromHost(A) {
        return {
            preferred_network: A,
            preferred_cache: A,
            aliases: [A]
        }
    }
    getPreferredCache() {
        if (this.managedIdentity) return L0.DEFAULT_AUTHORITY_HOST;
        else if (this.discoveryComplete()) return this.metadata.preferred_cache;
        else throw v0(OE)
    }
    isAlias(A) {
        return this.metadata.aliases.indexOf(A) > -1
    }
    isAliasOfKnownMicrosoftAuthority(A) {
        return Ss1.has(A)
    }
    static isPublicCloudAuthority(A) {
        return L0.KNOWN_PUBLIC_CLOUDS.indexOf(A) >= 0
    }
    static buildRegionalAuthorityString(A, Q, B) {
        let G = new H8(A);
        G.validateAsUri();
        let Z = G.getUrlComponents(),
            I = `${Q}.${Z.HostNameAndPort}`;
        if (this.isPublicCloudAuthority(Z.HostNameAndPort)) I = `${Q}.${L0.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`;
        let Y = H8.constructAuthorityUriFromObject({
            ...G.getUrlComponents(),
            HostNameAndPort: I
        }).urlString;
        if (B) return `${Y}?${B}`;
        return Y
    }
    static replaceWithRegionalInformation(A, Q) {
        let B = {
            ...A
        };
        if (B.authorization_endpoint = TF.buildRegionalAuthorityString(B.authorization_endpoint, Q), B.token_endpoint = TF.buildRegionalAuthorityString(B.token_endpoint, Q), B.end_session_endpoint) B.end_session_endpoint = TF.buildRegionalAuthorityString(B.end_session_endpoint, Q);
        return B
    }
    static transformCIAMAuthority(A) {
        let Q = A,
            G = new H8(A).getUrlComponents();
        if (G.PathSegments.length === 0 && G.HostNameAndPort.endsWith(L0.CIAM_AUTH_URL)) {
            let Z = G.HostNameAndPort.split(".")[0];
            Q = `${Q}${Z}${L0.AAD_TENANT_DOMAIN_SUFFIX}`
        }
        return Q
    }
}

function deB(A) {
    let G = new H8(A).getUrlComponents().PathSegments.slice(-1)[0]?.toLowerCase();
    switch (G) {
        case TU.COMMON:
        case TU.ORGANIZATIONS:
        case TU.CONSUMERS:
            return;
        default:
            return G
    }
}

function h11(A) {
    return A.endsWith(L0.FORWARD_SLASH) ? A : `${A}${L0.FORWARD_SLASH}`
}

function vr1(A) {
    let Q = A.cloudDiscoveryMetadata,
        B = void 0;
    if (Q) try {
        B = JSON.parse(Q)
    } catch (G) {
        throw jG(wl)
    }
    return {
        canonicalAuthority: A.authority ? h11(A.authority) : void 0,
        knownAuthorities: A.knownAuthorities,
        cloudDiscoveryMetadata: B
    }
}
var g11 = L(() => {
    Ms1();
    veB();
    Ll();
    mX();
    bZ();
    _s1();
    ql();
    KNA();
    U11();
    feB();
    geB();
    meB();
    yM();
    uT();
    lf();
    f11();
    PW();
    uf(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    TF.reservedTenantDomains = new Set(["{tenant}", "{tenantid}", TU.COMMON, TU.CONSUMERS, TU.ORGANIZATIONS])
});
var u11 = {};
pG(u11, {
    createDiscoveredInstance: () => br1
});
async function br1(A, Q, B, G, Z, I, Y) {
    Y?.addQueueMeasurement(W0.AuthorityFactoryCreateDiscoveredInstance, I);
    let J = TF.transformCIAMAuthority(h11(A)),
        W = new TF(J, Q, B, G, Z, I, Y);
    try {
        return await P5(W.resolveEndpointsAsync.bind(W), W0.AuthorityResolveEndpointsAsync, Z, Y, I)(), W
    } catch (X) {
        throw v0(OE)
    }
}
var fr1 = L(() => {
    g11();
    mX();
    uT();
    lf();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
var PE;
var BIA = L(() => {
    yM(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    PE = class PE extends t4 {
        constructor(A, Q, B, G, Z) {
            super(A, Q, B);
            this.name = "ServerError", this.errorNo = G, this.status = Z, Object.setPrototypeOf(this, PE.prototype)
        }
    }
});

function GIA(A, Q, B) {
    return {
        clientId: A,
        authority: Q.authority,
        scopes: Q.scopes,
        homeAccountIdentifier: B,
        claims: Q.claims,
        authenticationScheme: Q.authenticationScheme,
        resourceRequestMethod: Q.resourceRequestMethod,
        resourceRequestUri: Q.resourceRequestUri,
        shrClaims: Q.shrClaims,
        sshKid: Q.sshKid,
        embeddedClientId: Q.embeddedClientId || Q.tokenBodyParameters?.clientId
    }
}
var m11 = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
class nf {
    static generateThrottlingStorageKey(A) {
        return `${Fk.THROTTLING_PREFIX}.${JSON.stringify(A)}`
    }
    static preProcess(A, Q, B) {
        let G = nf.generateThrottlingStorageKey(Q),
            Z = A.getThrottlingCache(G);
        if (Z) {
            if (Z.throttleTime < Date.now()) {
                A.removeItem(G, B);
                return
            }
            throw new PE(Z.errorCodes?.join(" ") || L0.EMPTY_STRING, Z.errorMessage, Z.subError)
        }
    }
    static postProcess(A, Q, B, G) {
        if (nf.checkResponseStatus(B) || nf.checkResponseForRetryAfter(B)) {
            let Z = {
                throttleTime: nf.calculateThrottleTime(parseInt(B.headers[vZ.RETRY_AFTER])),
                error: B.body.error,
                errorCodes: B.body.error_codes,
                errorMessage: B.body.error_description,
                subError: B.body.suberror
            };
            A.setThrottlingCache(nf.generateThrottlingStorageKey(Q), Z, G)
        }
    }
    static checkResponseStatus(A) {
        return A.status === 429 || A.status >= 500 && A.status < 600
    }
    static checkResponseForRetryAfter(A) {
        if (A.headers) return A.headers.hasOwnProperty(vZ.RETRY_AFTER) && (A.status < 200 || A.status >= 300);
        return !1
    }
    static calculateThrottleTime(A) {
        let Q = A <= 0 ? 0 : A,
            B = Date.now() / 1000;
        return Math.floor(Math.min(B + (Q || Fk.DEFAULT_THROTTLE_TIME_SECONDS), B + Fk.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000)
    }
    static removeThrottle(A, Q, B, G) {
        let Z = GIA(Q, B, G),
            I = this.generateThrottlingStorageKey(Z);
        A.removeItem(I, B.correlationId)
    }
}
var ceB = L(() => {
    bZ();
    BIA();
    m11(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
var d11;
var peB = L(() => {
    yM(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    d11 = class d11 extends t4 {
        constructor(A, Q, B) {
            super(A.errorCode, A.errorMessage, A.subError);
            Object.setPrototypeOf(this, d11.prototype), this.name = "NetworkError", this.error = A, this.httpStatus = Q, this.responseHeaders = B
        }
    }
});
class iH {
    constructor(A, Q) {
        this.config = keB(A), this.logger = new jU(this.config.loggerOptions, E11, cZA), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = Q
    }
    createTokenRequestHeaders(A) {
        let Q = {};
        if (Q[vZ.CONTENT_TYPE] = L0.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && A) switch (A.type) {
            case RE.HOME_ACCOUNT_ID:
                try {
                    let B = Kk(A.credential);
                    Q[vZ.CCS_HEADER] = `Oid:${B.uid}@${B.utid}`
                } catch (B) {
                    this.logger.verbose("Could not parse home account ID for CCS Header: " + B)
                }
                break;
            case RE.UPN:
                Q[vZ.CCS_HEADER] = `UPN: ${A.credential}`;
                break
        }
        return Q
    }
    async executePostToTokenEndpoint(A, Q, B, G, Z, I) {
        if (I) this.performanceClient?.addQueueMeasurement(I, Z);
        let Y = await this.sendPostRequest(G, A, {
            body: Q,
            headers: B
        }, Z);
        if (this.config.serverTelemetryManager && Y.status < 500 && Y.status !== 429) this.config.serverTelemetryManager.clearTelemetryCache();
        return Y
    }
    async sendPostRequest(A, Q, B, G) {
        nf.preProcess(this.cacheManager, A, G);
        let Z;
        try {
            Z = await P5(this.networkClient.sendPostRequestAsync.bind(this.networkClient), W0.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, G)(Q, B);
            let I = Z.headers || {};
            this.performanceClient?.addFields({
                refreshTokenSize: Z.body.refresh_token?.length || 0,
                httpVerToken: I[vZ.X_MS_HTTP_VERSION] || "",
                requestId: I[vZ.X_MS_REQUEST_ID] || ""
            }, G)
        } catch (I) {
            if (I instanceof d11) {
                let Y = I.responseHeaders;
                if (Y) this.performanceClient?.addFields({
                    httpVerToken: Y[vZ.X_MS_HTTP_VERSION] || "",
                    requestId: Y[vZ.X_MS_REQUEST_ID] || "",
                    contentTypeHeader: Y[vZ.CONTENT_TYPE] || void 0,
                    contentLengthHeader: Y[vZ.CONTENT_LENGTH] || void 0,
                    httpStatus: I.httpStatus
                }, G);
                throw I.error
            }
            if (I instanceof t4) throw I;
            else throw v0(ue)
        }
        return nf.postProcess(this.cacheManager, A, Z, G), Z
    }
    async updateAuthority(A, Q) {
        this.performanceClient?.addQueueMeasurement(W0.UpdateTokenEndpointAuthority, Q);
        let B = `https://${A}/${this.authority.tenant}/`,
            G = await br1(B, this.networkClient, this.cacheManager, this.authority.options, this.logger, Q, this.performanceClient);
        this.authority = G
    }
    createTokenQueryParameters(A) {
        let Q = new Map;
        if (A.embeddedClientId) pf(Q, this.config.authOptions.clientId, this.config.authOptions.redirectUri);
        if (A.tokenQueryParameters) cf(Q, A.tokenQueryParameters);
        return UAA(Q, A.correlationId), DAA(Q, A.correlationId, this.performanceClient), Dk(Q)
    }
}
var yNA = L(() => {
    T11();
    C11();
    bZ();
    z11();
    ENA();
    nZA();
    eZA();
    FAA();
    fr1();
    uT();
    ceB();
    yM();
    mX();
    peB();
    lf();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
var p11 = {};
pG(p11, {
    uxNotAllowed: () => c11,
    refreshTokenExpired: () => vNA,
    noTokensFound: () => Rl,
    nativeAccountUnavailable: () => xNA,
    loginRequired: () => ur1,
    interactionRequired: () => hr1,
    consentRequired: () => gr1,
    badToken: () => Tl
});
var Rl = "no_tokens_found",
    xNA = "native_account_unavailable",
    vNA = "refresh_token_expired",
    c11 = "ux_not_allowed",
    hr1 = "interaction_required",
    gr1 = "consent_required",
    ur1 = "login_required",
    Tl = "bad_token";
var l11 = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });

function n11(A, Q, B) {
    let G = !!A && leB.indexOf(A) > -1,
        Z = !!B && OA5.indexOf(B) > -1,
        I = !!Q && leB.some((Y) => {
            return Q.indexOf(Y) > -1
        });
    return G || I || Z
}

function a11(A) {
    return new Jq(A, i11[A])
}
var leB, OA5, i11, mr1, Jq;
var bNA = L(() => {
    bZ();
    yM();
    l11(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    leB = [hr1, gr1, ur1, Tl, c11], OA5 = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token"], i11 = {
        [Rl]: "No refresh token found in the cache. Please sign-in.",
        [xNA]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
        [vNA]: "Refresh token has expired.",
        [Tl]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve.",
        [c11]: "`canShowUI` flag in Edge was set to false. User interaction required on web page. Please invoke an interactive API to resolve."
    }, mr1 = {
        noTokensFoundError: {
            code: Rl,
            desc: i11[Rl]
        },
        native_account_unavailable: {
            code: xNA,
            desc: i11[xNA]
        },
        bad_token: {
            code: Tl,
            desc: i11[Tl]
        }
    };
    Jq = class Jq extends t4 {
        constructor(A, Q, B, G, Z, I, Y, J) {
            super(A, Q, B);
            Object.setPrototypeOf(this, Jq.prototype), this.timestamp = G || L0.EMPTY_STRING, this.traceId = Z || L0.EMPTY_STRING, this.correlationId = I || L0.EMPTY_STRING, this.claims = Y || L0.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = J
        }
    }
});
class s11 {
    static setRequestState(A, Q, B) {
        let G = s11.generateLibraryState(A, B);
        return Q ? `${G}${L0.RESOURCE_DELIM}${Q}` : G
    }
    static generateLibraryState(A, Q) {
        if (!A) throw v0(zl);
        let B = {
            id: A.createNewGuid()
        };
        if (Q) B.meta = Q;
        let G = JSON.stringify(B);
        return A.base64Encode(G)
    }
    static parseRequestState(A, Q) {
        if (!A) throw v0(zl);
        if (!Q) throw v0(gT);
        try {
            let B = Q.split(L0.RESOURCE_DELIM),
                G = B[0],
                Z = B.length > 1 ? B.slice(1).join(L0.RESOURCE_DELIM) : L0.EMPTY_STRING,
                I = A.base64Decode(G),
                Y = JSON.parse(I);
            return {
                userRequestState: Z || L0.EMPTY_STRING,
                libraryState: Y
            }
        } catch (B) {
            throw v0(gT)
        }
    }
}
var ieB = L(() => {
    bZ();
    mX();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
class wAA {
    constructor(A, Q) {
        this.cryptoUtils = A, this.performanceClient = Q
    }
    async generateCnf(A, Q) {
        this.performanceClient?.addQueueMeasurement(W0.PopTokenGenerateCnf, A.correlationId);
        let B = await P5(this.generateKid.bind(this), W0.PopTokenGenerateCnf, Q, this.performanceClient, A.correlationId)(A),
            G = this.cryptoUtils.base64UrlEncode(JSON.stringify(B));
        return {
            kid: B.kid,
            reqCnfString: G
        }
    }
    async generateKid(A) {
        return this.performanceClient?.addQueueMeasurement(W0.PopTokenGenerateKid, A.correlationId), {
            kid: await this.cryptoUtils.getPublicKeyThumbprint(A),
            xms_ksl: RA5.SW
        }
    }
    async signPopToken(A, Q, B) {
        return this.signPayload(A, Q, B)
    }
    async signPayload(A, Q, B, G) {
        let {
            resourceRequestMethod: Z,
            resourceRequestUri: I,
            shrClaims: Y,
            shrNonce: J,
            shrOptions: W
        } = B, F = (I ? new H8(I) : void 0)?.getUrlComponents();
        return this.cryptoUtils.signJwt({
            at: A,
            ts: Yq(),
            m: Z?.toUpperCase(),
            u: F?.HostNameAndPort,
            nonce: J || this.cryptoUtils.createNewGuid(),
            p: F?.AbsolutePath,
            q: F?.QueryString ? [
                [], F.QueryString
            ] : void 0,
            client_claims: Y || void 0,
            ...G
        }, Q, W, B.correlationId)
    }
}
var RA5;
var r11 = L(() => {
    Ol();
    Ll();
    uT();
    lf(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    RA5 = {
        SW: "sw"
    }
});
class vM {
    constructor(A, Q) {
        this.cache = A, this.hasChanged = Q
    }