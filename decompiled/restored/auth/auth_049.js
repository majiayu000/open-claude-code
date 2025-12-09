/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: auth_049.js
 * 处理时间: 2025-12-09T03:37:24.333Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * pG         (  2x) = esmExport(obj, key) - ESM export binding
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 49/61
 * Lines: 252564 - 254057 (1494 lines)
 * Original file: cli.js
 */

}
var Nl = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
class PJ {
    constructor(A) {
        let Q = A ? YZ.trimArrayEntries([...A]) : [],
            B = Q ? YZ.removeEmptyStringsFromArray(Q) : [];
        if (!B || !B.length) throw jG(ZAA);
        this.scopes = new Set, B.forEach((G) => this.scopes.add(G))
    }
    static fromString(A) {
        let B = (A || L0.EMPTY_STRING).split(" ");
        return new PJ(B)
    }
    static createSearchScopes(A) {
        let Q = A && A.length > 0 ? A : [...pH],
            B = new PJ(Q);
        if (!B.containsOnlyOIDCScopes()) B.removeOIDCScopes();
        else B.removeScope(L0.OFFLINE_ACCESS_SCOPE);
        return B
    }
    containsScope(A) {
        let Q = this.printScopesLowerCase().split(" "),
            B = new PJ(Q);
        return A ? B.scopes.has(A.toLowerCase()) : !1
    }
    containsScopeSet(A) {
        if (!A || A.scopes.size <= 0) return !1;
        return this.scopes.size >= A.scopes.size && A.asArray().every((Q) => this.containsScope(Q))
    }
    containsOnlyOIDCScopes() {
        let A = 0;
        return zs1.forEach((Q) => {
            if (this.containsScope(Q)) A += 1
        }), this.scopes.size === A
    }
    appendScope(A) {
        if (A) this.scopes.add(A.trim())
    }
    appendScopes(A) {
        try {
            A.forEach((Q) => this.appendScope(Q))
        } catch (Q) {
            throw v0(se)
        }
    }
    removeScope(A) {
        if (!A) throw v0(ae);
        this.scopes.delete(A.trim())
    }
    removeOIDCScopes() {
        zs1.forEach((A) => {
            this.scopes.delete(A)
        })
    }
    unionScopeSets(A) {
        if (!A) throw v0(El);
        let Q = new Set;
        return A.scopes.forEach((B) => Q.add(B.toLowerCase())), this.scopes.forEach((B) => Q.add(B.toLowerCase())), Q
    }
    intersectingScopeSets(A) {
        if (!A) throw v0(El);
        if (!A.containsOnlyOIDCScopes()) A.removeOIDCScopes();
        let Q = this.unionScopeSets(A),
            B = A.getScopeCount(),
            G = this.getScopeCount();
        return Q.size < G + B
    }
    getScopeCount() {
        return this.scopes.size
    }
    asArray() {
        let A = [];
        return this.scopes.forEach((Q) => A.push(Q)), A
    }
    printScopes() {
        if (this.scopes) return this.asArray().join(" ");
        return L0.EMPTY_STRING
    }
    printScopesLowerCase() {
        return this.printScopes().toLowerCase()
    }
}
var FNA = L(() => {
    ql();
    Nl();
    mX();
    bZ();
    uf();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});

function iZA(A, Q) {
    if (!A) throw v0(he);
    try {
        let B = Q(A);
        return JSON.parse(B)
    } catch (B) {
        throw v0(Dl)
    }
}

function Kk(A) {
    if (!A) throw v0(Dl);
    let Q = A.split(yf.CLIENT_INFO_SEPARATOR, 2);
    return {
        uid: Q[0],
        utid: Q.length < 2 ? L0.EMPTY_STRING : Q[1]
    }
}
var nZA = L(() => {
    mX();
    bZ();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});

function weB(A, Q) {
    return !!A && !!Q && A === Q.split(".")[1]
}

function VNA(A, Q, B, G) {
    if (G) {
        let {
            oid: Z,
            sub: I,
            tid: Y,
            name: J,
            tfp: W,
            acr: X,
            preferred_username: F,
            upn: V,
            login_hint: K
        } = G, D = Y || W || X || "";
        return {
            tenantId: D,
            localAccountId: Z || I || "",
            name: J,
            username: F || V || "",
            loginHint: K,
            isHomeTenant: weB(D, A)
        }
    } else return {
        tenantId: B,
        localAccountId: Q,
        username: "",
        isHomeTenant: weB(B, A)
    }
}

function $11(A, Q, B, G) {
    let Z = A;
    if (Q) {
        let {
            isHomeTenant: I,
            ...Y
        } = Q;
        Z = {
            ...A,
            ...Y
        }
    }
    if (B) {
        let {
            isHomeTenant: I,
            ...Y
        } = VNA(A.homeAccountId, A.localAccountId, A.tenantId, B);
        return Z = {
            ...Z,
            ...Y,
            idTokenClaims: B,
            idToken: G
        }, Z
    }
    return Z
}
var w11 = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
var xM;
var Ms1 = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */
    xM = {
        Default: 0,
        Adfs: 1,
        Dsts: 2,
        Ciam: 3
    }
});

function q11(A) {
    if (A) return A.tid || A.tfp || A.acr || null;
    return null
}
var Os1 = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });
var lH;
var KNA = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */
    lH = {
        AAD: "AAD",
        OIDC: "OIDC",
        EAR: "EAR"
    }
});
class dX {
    static getAccountInfo(A) {
        return {
            homeAccountId: A.homeAccountId,
            environment: A.environment,
            tenantId: A.realm,
            username: A.username,
            localAccountId: A.localAccountId,
            loginHint: A.loginHint,
            name: A.name,
            nativeAccountId: A.nativeAccountId,
            authorityType: A.authorityType,
            tenantProfiles: new Map((A.tenantProfiles || []).map((Q) => {
                return [Q.tenantId, Q]
            })),
            dataBoundary: A.dataBoundary
        }
    }
    isSingleTenant() {
        return !this.tenantProfiles
    }
    static createAccount(A, Q, B) {
        let G = new dX;
        if (Q.authorityType === xM.Adfs) G.authorityType = be.ADFS_ACCOUNT_TYPE;
        else if (Q.protocolMode === lH.OIDC) G.authorityType = be.GENERIC_ACCOUNT_TYPE;
        else G.authorityType = be.MSSTS_ACCOUNT_TYPE;
        let Z;
        if (A.clientInfo && B) {
            if (Z = iZA(A.clientInfo, B), Z.xms_tdbr) G.dataBoundary = Z.xms_tdbr === "EU" ? "EU" : "None"
        }
        G.clientInfo = A.clientInfo, G.homeAccountId = A.homeAccountId, G.nativeAccountId = A.nativeAccountId;
        let I = A.environment || Q && Q.getPreferredCache();
        if (!I) throw v0(bf);
        G.environment = I, G.realm = Z?.utid || q11(A.idTokenClaims) || "", G.localAccountId = Z?.uid || A.idTokenClaims?.oid || A.idTokenClaims?.sub || "";
        let Y = A.idTokenClaims?.preferred_username || A.idTokenClaims?.upn,
            J = A.idTokenClaims?.emails ? A.idTokenClaims.emails[0] : null;
        if (G.username = Y || J || "", G.loginHint = A.idTokenClaims?.login_hint, G.name = A.idTokenClaims?.name || "", G.cloudGraphHostName = A.cloudGraphHostName, G.msGraphHost = A.msGraphHost, A.tenantProfiles) G.tenantProfiles = A.tenantProfiles;
        else {
            let W = VNA(A.homeAccountId, G.localAccountId, G.realm, A.idTokenClaims);
            G.tenantProfiles = [W]
        }
        return G
    }
    static createFromAccountInfo(A, Q, B) {
        let G = new dX;
        return G.authorityType = A.authorityType || be.GENERIC_ACCOUNT_TYPE, G.homeAccountId = A.homeAccountId, G.localAccountId = A.localAccountId, G.nativeAccountId = A.nativeAccountId, G.realm = A.tenantId, G.environment = A.environment, G.username = A.username, G.name = A.name, G.loginHint = A.loginHint, G.cloudGraphHostName = Q, G.msGraphHost = B, G.tenantProfiles = Array.from(A.tenantProfiles?.values() || []), G.dataBoundary = A.dataBoundary, G
    }
    static generateHomeAccountId(A, Q, B, G, Z) {
        if (!(Q === xM.Adfs || Q === xM.Dsts)) {
            if (A) try {
                let I = iZA(A, G.base64Decode);
                if (I.uid && I.utid) return `${I.uid}.${I.utid}`
            } catch (I) {}
            B.warning("No client info in response")
        }
        return Z?.sub || ""
    }
    static isAccountEntity(A) {
        if (!A) return !1;
        return A.hasOwnProperty("homeAccountId") && A.hasOwnProperty("environment") && A.hasOwnProperty("realm") && A.hasOwnProperty("localAccountId") && A.hasOwnProperty("username") && A.hasOwnProperty("authorityType")
    }
    static accountInfoIsEqual(A, Q, B) {
        if (!A || !Q) return !1;
        let G = !0;
        if (B) {
            let Z = A.idTokenClaims || {},
                I = Q.idTokenClaims || {};
            G = Z.iat === I.iat && Z.nonce === I.nonce
        }
        return A.homeAccountId === Q.homeAccountId && A.localAccountId === Q.localAccountId && A.username === Q.username && A.tenantId === Q.tenantId && A.loginHint === Q.loginHint && A.environment === Q.environment && A.nativeAccountId === Q.nativeAccountId && G
    }
}
var N11 = L(() => {
    bZ();
    nZA();
    w11();
    mX();
    Ms1();
    Os1();
    KNA();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
var L11 = {};
pG(L11, {
    isKmsi: () => Rs1,
    getJWSPayload: () => qeB,
    extractTokenClaims: () => mf,
    checkMaxAge: () => DNA
});

function mf(A, Q) {
    let B = qeB(A);
    try {
        let G = Q(B);
        return JSON.parse(G)
    } catch (G) {
        throw v0(Hl)
    }
}

function Rs1(A) {
    if (!A.signin_state) return !1;
    let Q = ["kmsi", "dvc_dmjd"];
    return A.signin_state.some((G) => Q.includes(G.trim().toLowerCase()))
}

function qeB(A) {
    if (!A) throw v0(ge);
    let B = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(A);
    if (!B || B.length < 4) throw v0(Hl);
    return B[2]
}

function DNA(A, Q) {
    if (Q === 0 || Date.now() - 300000 > A + Q) throw v0(le)
}
var aZA = L(() => {
    mX();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
var LD = {};
pG(LD, {
    stripLeadingHashOrQuery: () => LeB,
    normalizeUrlForComparison: () => be6,
    mapToQueryString: () => Dk,
    getDeserializedResponse: () => Ts1
});

function NeB(A) {
    if (!A) return A;
    let Q = A.toLowerCase();
    if (YZ.endsWith(Q, "?")) Q = Q.slice(0, -1);
    else if (YZ.endsWith(Q, "?/")) Q = Q.slice(0, -2);
    if (!YZ.endsWith(Q, "/")) Q += "/";
    return Q
}

function LeB(A) {
    if (A.startsWith("#/")) return A.substring(2);
    else if (A.startsWith("#") || A.startsWith("?")) return A.substring(1);
    return A
}

function Ts1(A) {
    if (!A || A.indexOf("=") < 0) return null;
    try {
        let Q = LeB(A),
            B = Object.fromEntries(new URLSearchParams(Q));
        if (B.code || B.ear_jwe || B.error || B.error_description || B.state) return B
    } catch (Q) {
        throw v0(de)
    }
    return null
}

function Dk(A, Q = !0, B) {
    let G = [];
    return A.forEach((Z, I) => {
        if (!Q && B && I in B) G.push(`${I}=${Z}`);
        else G.push(`${I}=${encodeURIComponent(Z)}`)
    }), G.join("&")
}

function be6(A) {
    if (!A) return A;
    let Q = A.split("#")[0];
    try {
        let B = new URL(Q),
            G = B.origin + B.pathname + B.search;
        return NeB(G)
    } catch (B) {
        return NeB(Q)
    }
}
var FAA = L(() => {
    mX();
    Nl();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});
class H8 {
    get urlString() {
        return this._urlString
    }
    constructor(A) {
        if (this._urlString = A, !this._urlString) throw jG(GAA);
        if (!A.includes("#")) this._urlString = H8.canonicalizeUri(A)
    }
    static canonicalizeUri(A) {
        if (A) {
            let Q = A.toLowerCase();
            if (YZ.endsWith(Q, "?")) Q = Q.slice(0, -1);
            else if (YZ.endsWith(Q, "?/")) Q = Q.slice(0, -2);
            if (!YZ.endsWith(Q, "/")) Q += "/";
            return Q
        }
        return A
    }
    validateAsUri() {
        let A;
        try {
            A = this.getUrlComponents()
        } catch (Q) {
            throw jG(Vk)
        }
        if (!A.HostNameAndPort || !A.PathSegments) throw jG(Vk);
        if (!A.Protocol || A.Protocol.toLowerCase() !== "https:") throw jG(BAA)
    }
    static appendQueryString(A, Q) {
        if (!Q) return A;
        return A.indexOf("?") < 0 ? `${A}?${Q}` : `${A}&${Q}`
    }
    static removeHashFromUrl(A) {
        return H8.canonicalizeUri(A.split("#")[0])
    }
    replaceTenantPath(A) {
        let Q = this.getUrlComponents(),
            B = Q.PathSegments;
        if (A && B.length !== 0 && (B[0] === TU.COMMON || B[0] === TU.ORGANIZATIONS)) B[0] = A;
        return H8.constructAuthorityUriFromObject(Q)
    }
    getUrlComponents() {
        let A = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
            Q = this.urlString.match(A);
        if (!Q) throw jG(Vk);
        let B = {
                Protocol: Q[1],
                HostNameAndPort: Q[4],
                AbsolutePath: Q[5],
                QueryString: Q[7]
            },
            G = B.AbsolutePath.split("/");
        if (G = G.filter((Z) => Z && Z.length > 0), B.PathSegments = G, B.QueryString && B.QueryString.endsWith("/")) B.QueryString = B.QueryString.substring(0, B.QueryString.length - 1);
        return B
    }
    static getDomainFromUrl(A) {
        let Q = RegExp("^([^:/?#]+://)?([^/?#]*)"),
            B = A.match(Q);
        if (!B) throw jG(Vk);
        return B[2]
    }
    static getAbsoluteUrl(A, Q) {
        if (A[0] === L0.FORWARD_SLASH) {
            let G = new H8(Q).getUrlComponents();
            return G.Protocol + "//" + G.HostNameAndPort + A
        }
        return A
    }
    static constructAuthorityUriFromObject(A) {
        return new H8(A.Protocol + "//" + A.HostNameAndPort + "/" + A.PathSegments.join("/"))
    }
    static hashContainsKnownProperties(A) {
        return !!Ts1(A)
    }
}
var Ll = L(() => {
    ql();
    Nl();
    bZ();
    FAA();
    uf(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});

function ReB(A, Q) {
    let B, G = A.canonicalAuthority;
    if (G) {
        let Z = new H8(G).getUrlComponents().HostNameAndPort;
        B = MeB(Z, A.cloudDiscoveryMetadata?.metadata, ME.CONFIG, Q) || MeB(Z, js1.metadata, ME.HARDCODED_VALUES, Q) || A.knownAuthorities
    }
    return B || []
}

function MeB(A, Q, B, G) {
    if (G?.trace(`getAliasesFromMetadata called with source: ${B}`), A && Q) {
        let Z = HNA(Q, A);
        if (Z) return G?.trace(`getAliasesFromMetadata: found cloud discovery metadata in ${B}, returning aliases`), Z.aliases;
        else G?.trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${B}`)
    }
    return null
}

function TeB(A) {
    return HNA(js1.metadata, A)
}

function HNA(A, Q) {
    for (let B = 0; B < A.length; B++) {
        let G = A[B];
        if (G.aliases.includes(Q)) return G
    }
    return null
}
var OeB, Ps1, js1, Ss1;
var _s1 = L(() => {
    Ll();
    bZ(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    OeB = {
        endpointMetadata: {
            "login.microsoftonline.com": {
                token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
                jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
                issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
                authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
                end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
            },
            "login.chinacloudapi.cn": {
                token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
                jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
                issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
                authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
                end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
            },
            "login.microsoftonline.us": {
                token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
                jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
                issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
                authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
                end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
            }
        },
        instanceDiscoveryMetadata: {
            metadata: [{
                preferred_network: "login.microsoftonline.com",
                preferred_cache: "login.windows.net",
                aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]
            }, {
                preferred_network: "login.partner.microsoftonline.cn",
                preferred_cache: "login.partner.microsoftonline.cn",
                aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]
            }, {
                preferred_network: "login.microsoftonline.de",
                preferred_cache: "login.microsoftonline.de",
                aliases: ["login.microsoftonline.de"]
            }, {
                preferred_network: "login.microsoftonline.us",
                preferred_cache: "login.microsoftonline.us",
                aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]
            }, {
                preferred_network: "login-us.microsoftonline.com",
                preferred_cache: "login-us.microsoftonline.com",
                aliases: ["login-us.microsoftonline.com"]
            }]
        }
    }, Ps1 = OeB.endpointMetadata, js1 = OeB.instanceDiscoveryMetadata, Ss1 = new Set;
    js1.metadata.forEach((A) => {
        A.aliases.forEach((Q) => {
            Ss1.add(Q)
        })
    })
});
var ks1 = "cache_quota_exceeded",
    M11 = "cache_error_unknown";
var PeB = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */ });

function jeB(A) {
    if (!(A instanceof Error)) return new CNA(M11);
    if (A.name === "QuotaExceededError" || A.name === "NS_ERROR_DOM_QUOTA_REACHED" || A.message.includes("exceeded the quota")) return new CNA(ks1);
    else return new CNA(A.name, A.message)
}
var ys1, CNA;
var SeB = L(() => {
    yM();
    PeB(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    ys1 = {
        [ks1]: "Exceeded cache storage capacity.",
        [M11]: "Unexpected error occurred when using cache storage."
    };
    CNA = class CNA extends t4 {
        constructor(A, Q) {
            let B = Q || (ys1[A] ? ys1[A] : ys1[M11]);
            super(`${A}: ${B}`);
            Object.setPrototypeOf(this, CNA.prototype), this.name = "CacheError", this.errorCode = A, this.errorMessage = B
        }
    }
});
class VAA {
    constructor(A, Q, B, G, Z) {
        this.clientId = A, this.cryptoImpl = Q, this.commonLogger = B.clone(E11, cZA), this.staticAuthorityOptions = Z, this.performanceClient = G
    }
    getAllAccounts(A, Q) {
        return this.buildTenantProfiles(this.getAccountsFilteredBy(A, Q), Q, A)
    }
    getAccountInfoFilteredBy(A, Q) {
        if (Object.keys(A).length === 0 || Object.values(A).every((G) => !G)) return this.commonLogger.warning("getAccountInfoFilteredBy: Account filter is empty or invalid, returning null"), null;
        let B = this.getAllAccounts(A, Q);
        if (B.length > 1) return B.sort((Z) => {
            return Z.idTokenClaims ? -1 : 1
        })[0];
        else if (B.length === 1) return B[0];
        else return null
    }
    getBaseAccountInfo(A, Q) {
        let B = this.getAccountsFilteredBy(A, Q);
        if (B.length > 0) return dX.getAccountInfo(B[0]);
        else return null
    }
    buildTenantProfiles(A, Q, B) {
        return A.flatMap((G) => {
            return this.getTenantProfilesFromAccountEntity(G, Q, B?.tenantId, B)
        })
    }
    getTenantedAccountInfoByFilter(A, Q, B, G, Z) {
        let I = null,
            Y;
        if (Z) {
            if (!this.tenantProfileMatchesFilter(B, Z)) return null
        }
        let J = this.getIdToken(A, G, Q, B.tenantId);
        if (J) {
            if (Y = mf(J.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(Y, Z)) return null
        }
        return I = $11(A, B, Y, J?.secret), I
    }
    getTenantProfilesFromAccountEntity(A, Q, B, G) {
        let Z = dX.getAccountInfo(A),
            I = Z.tenantProfiles || new Map,
            Y = this.getTokenKeys();
        if (B) {
            let W = I.get(B);
            if (W) I = new Map([
                [B, W]
            ]);
            else return []
        }
        let J = [];
        return I.forEach((W) => {
            let X = this.getTenantedAccountInfoByFilter(Z, Y, W, Q, G);
            if (X) J.push(X)
        }), J
    }
    tenantProfileMatchesFilter(A, Q) {
        if (!!Q.localAccountId && !this.matchLocalAccountIdFromTenantProfile(A, Q.localAccountId)) return !1;
        if (!!Q.name && A.name !== Q.name) return !1;
        if (Q.isHomeTenant !== void 0 && A.isHomeTenant !== Q.isHomeTenant) return !1;
        return !0
    }
    idTokenClaimsMatchTenantProfileFilter(A, Q) {
        if (Q) {
            if (!!Q.localAccountId && !this.matchLocalAccountIdFromTokenClaims(A, Q.localAccountId)) return !1;
            if (!!Q.loginHint && !this.matchLoginHintFromTokenClaims(A, Q.loginHint)) return !1;
            if (!!Q.username && !this.matchUsername(A.preferred_username, Q.username)) return !1;
            if (!!Q.name && !this.matchName(A, Q.name)) return !1;
            if (!!Q.sid && !this.matchSid(A, Q.sid)) return !1
        }
        return !0
    }
    async saveCacheRecord(A, Q, B, G) {
        if (!A) throw v0(re);
        try {
            if (A.account) await this.setAccount(A.account, Q, B);
            if (!!A.idToken && G?.idToken !== !1) await this.setIdTokenCredential(A.idToken, Q, B);
            if (!!A.accessToken && G?.accessToken !== !1) await this.saveAccessToken(A.accessToken, Q, B);
            if (!!A.refreshToken && G?.refreshToken !== !1) await this.setRefreshTokenCredential(A.refreshToken, Q, B);
            if (A.appMetadata) this.setAppMetadata(A.appMetadata, Q)
        } catch (Z) {
            if (this.commonLogger?.error("CacheManager.saveCacheRecord: failed"), Z instanceof t4) throw Z;
            else throw jeB(Z)
        }
    }
    async saveAccessToken(A, Q, B) {
        let G = {
                clientId: A.clientId,
                credentialType: A.credentialType,
                environment: A.environment,
                homeAccountId: A.homeAccountId,
                realm: A.realm,
                tokenType: A.tokenType,
                requestedClaimsHash: A.requestedClaimsHash
            },
            Z = this.getTokenKeys(),
            I = PJ.fromString(A.target);
        Z.accessToken.forEach((Y) => {
            if (!this.accessTokenKeyMatchesFilter(Y, G, !1)) return;
            let J = this.getAccessTokenCredential(Y, Q);
            if (J && this.credentialMatchesFilter(J, G)) {
                if (PJ.fromString(J.target).intersectingScopeSets(I)) this.removeAccessToken(Y, Q)
            }
        }), await this.setAccessTokenCredential(A, Q, B)
    }
    getAccountsFilteredBy(A, Q) {
        let B = this.getAccountKeys(),
            G = [];
        return B.forEach((Z) => {
            let I = this.getAccount(Z, Q);
            if (!I) return;
            if (!!A.homeAccountId && !this.matchHomeAccountId(I, A.homeAccountId)) return;
            if (!!A.username && !this.matchUsername(I.username, A.username)) return;
            if (!!A.environment && !this.matchEnvironment(I, A.environment)) return;
            if (!!A.realm && !this.matchRealm(I, A.realm)) return;
            if (!!A.nativeAccountId && !this.matchNativeAccountId(I, A.nativeAccountId)) return;
            if (!!A.authorityType && !this.matchAuthorityType(I, A.authorityType)) return;
            let Y = {
                    localAccountId: A?.localAccountId,
                    name: A?.name
                },
                J = I.tenantProfiles?.filter((W) => {
                    return this.tenantProfileMatchesFilter(W, Y)
                });
            if (J && J.length === 0) return;
            G.push(I)
        }), G
    }
    credentialMatchesFilter(A, Q) {
        if (!!Q.clientId && !this.matchClientId(A, Q.clientId)) return !1;
        if (!!Q.userAssertionHash && !this.matchUserAssertionHash(A, Q.userAssertionHash)) return !1;
        if (typeof Q.homeAccountId === "string" && !this.matchHomeAccountId(A, Q.homeAccountId)) return !1;
        if (!!Q.environment && !this.matchEnvironment(A, Q.environment)) return !1;
        if (!!Q.realm && !this.matchRealm(A, Q.realm)) return !1;
        if (!!Q.credentialType && !this.matchCredentialType(A, Q.credentialType)) return !1;
        if (!!Q.familyId && !this.matchFamilyId(A, Q.familyId)) return !1;
        if (!!Q.target && !this.matchTarget(A, Q.target)) return !1;
        if (Q.requestedClaimsHash || A.requestedClaimsHash) {
            if (A.requestedClaimsHash !== Q.requestedClaimsHash) return !1
        }
        if (A.credentialType === g7.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
            if (!!Q.tokenType && !this.matchTokenType(A, Q.tokenType)) return !1;
            if (Q.tokenType === e6.SSH) {
                if (Q.keyId && !this.matchKeyId(A, Q.keyId)) return !1
            }
        }
        return !0
    }
    getAppMetadataFilteredBy(A) {
        let Q = this.getKeys(),
            B = {};
        return Q.forEach((G) => {
            if (!this.isAppMetadata(G)) return;
            let Z = this.getAppMetadata(G);
            if (!Z) return;
            if (!!A.environment && !this.matchEnvironment(Z, A.environment)) return;
            if (!!A.clientId && !this.matchClientId(Z, A.clientId)) return;
            B[G] = Z
        }), B
    }
    getAuthorityMetadataByAlias(A) {
        let Q = this.getAuthorityMetadataKeys(),
            B = null;
        return Q.forEach((G) => {
            if (!this.isAuthorityMetadata(G) || G.indexOf(this.clientId) === -1) return;
            let Z = this.getAuthorityMetadata(G);
            if (!Z) return;
            if (Z.aliases.indexOf(A) === -1) return;
            B = Z
        }), B
    }
    removeAllAccounts(A) {
        this.getAllAccounts({}, A).forEach((B) => {
            this.removeAccount(B, A)
        })
    }
    removeAccount(A, Q) {
        this.removeAccountContext(A, Q);
        let B = this.getAccountKeys(),
            G = (Z) => {
                return Z.includes(A.homeAccountId) && Z.includes(A.environment)
            };
        B.filter(G).forEach((Z) => {
            this.removeItem(Z, Q), this.performanceClient.incrementFields({
                accountsRemoved: 1
            }, Q)
        })
    }
    removeAccountContext(A, Q) {
        let B = this.getTokenKeys(),
            G = (Z) => {
                return Z.includes(A.homeAccountId) && Z.includes(A.environment)
            };
        B.idToken.filter(G).forEach((Z) => {
            this.removeIdToken(Z, Q)
        }), B.accessToken.filter(G).forEach((Z) => {
            this.removeAccessToken(Z, Q)
        }), B.refreshToken.filter(G).forEach((Z) => {
            this.removeRefreshToken(Z, Q)
        })
    }
    removeAccessToken(A, Q) {
        let B = this.getAccessTokenCredential(A, Q);
        if (this.removeItem(A, Q), this.performanceClient.incrementFields({
                accessTokensRemoved: 1
            }, Q), !B || B.credentialType.toLowerCase() !== g7.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || B.tokenType !== e6.POP) return;
        let G = B.keyId;
        if (G) this.cryptoImpl.removeTokenBindingKey(G).catch(() => {
            this.commonLogger.error(`Failed to remove token binding key ${G}`, Q), this.performanceClient?.incrementFields({
                removeTokenBindingKeyFailure: 1
            }, Q)
        })
    }
    removeAppMetadata(A) {
        return this.getKeys().forEach((B) => {
            if (this.isAppMetadata(B)) this.removeItem(B, A)
        }), !0
    }
    getIdToken(A, Q, B, G, Z) {
        this.commonLogger.trace("CacheManager - getIdToken called");
        let I = {
                homeAccountId: A.homeAccountId,
                environment: A.environment,
                credentialType: g7.ID_TOKEN,
                clientId: this.clientId,
                realm: G
            },
            Y = this.getIdTokensByFilter(I, Q, B),
            J = Y.size;
        if (J < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), null;
        else if (J > 1) {
            let W = Y;
            if (!G) {
                let X = new Map;
                Y.forEach((V, K) => {
                    if (V.realm === A.tenantId) X.set(K, V)
                });
                let F = X.size;
                if (F < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), Y.values().next().value;
                else if (F === 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), X.values().next().value;
                else W = X
            }
            if (this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), W.forEach((X, F) => {
                    this.removeIdToken(F, Q)
                }), Z && Q) Z.addFields({
                multiMatchedID: Y.size
            }, Q);
            return null
        }
        return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), Y.values().next().value
    }
    getIdTokensByFilter(A, Q, B) {
        let G = B && B.idToken || this.getTokenKeys().idToken,
            Z = new Map;
        return G.forEach((I) => {
            if (!this.idTokenKeyMatchesFilter(I, {
                    clientId: this.clientId,
                    ...A
                })) return;
            let Y = this.getIdTokenCredential(I, Q);
            if (Y && this.credentialMatchesFilter(Y, A)) Z.set(I, Y)
        }), Z
    }
    idTokenKeyMatchesFilter(A, Q) {
        let B = A.toLowerCase();
        if (Q.clientId && B.indexOf(Q.clientId.toLowerCase()) === -1) return !1;
        if (Q.homeAccountId && B.indexOf(Q.homeAccountId.toLowerCase()) === -1) return !1;
        return !0
    }
    removeIdToken(A, Q) {
        this.removeItem(A, Q)
    }
    removeRefreshToken(A, Q) {
        this.removeItem(A, Q)
    }
    getAccessToken(A, Q, B, G) {
        let Z = Q.correlationId;
        this.commonLogger.trace("CacheManager - getAccessToken called", Z);
        let I = PJ.createSearchScopes(Q.scopes),
            Y = Q.authenticationScheme || e6.BEARER,
            J = Y && Y.toLowerCase() !== e6.BEARER.toLowerCase() ? g7.ACCESS_TOKEN_WITH_AUTH_SCHEME : g7.ACCESS_TOKEN,
            W = {
                homeAccountId: A.homeAccountId,
                environment: A.environment,
                credentialType: J,
                clientId: this.clientId,
                realm: G || A.tenantId,
                target: I,
                tokenType: Y,
                keyId: Q.sshKid,
                requestedClaimsHash: Q.requestedClaimsHash
            },
            X = B && B.accessToken || this.getTokenKeys().accessToken,
            F = [];
        X.forEach((K) => {
            if (this.accessTokenKeyMatchesFilter(K, W, !0)) {
                let D = this.getAccessTokenCredential(K, Z);
                if (D && this.credentialMatchesFilter(D, W)) F.push(D)
            }
        });
        let V = F.length;
        if (V < 1) return this.commonLogger.info("CacheManager:getAccessToken - No token found", Z), null;
        else if (V > 1) return this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them", Z), F.forEach((K) => {
            this.removeAccessToken(this.generateCredentialKey(K), Z)
        }), this.performanceClient.addFields({
            multiMatchedAT: F.length
        }, Z), null;
        return this.commonLogger.info("CacheManager:getAccessToken - Returning access token", Z), F[0]
    }
    accessTokenKeyMatchesFilter(A, Q, B) {
        let G = A.toLowerCase();
        if (Q.clientId && G.indexOf(Q.clientId.toLowerCase()) === -1) return !1;
        if (Q.homeAccountId && G.indexOf(Q.homeAccountId.toLowerCase()) === -1) return !1;
        if (Q.realm && G.indexOf(Q.realm.toLowerCase()) === -1) return !1;
        if (Q.requestedClaimsHash && G.indexOf(Q.requestedClaimsHash.toLowerCase()) === -1) return !1;
        if (Q.target) {
            let Z = Q.target.asArray();
            for (let I = 0; I < Z.length; I++)
                if (B && !G.includes(Z[I].toLowerCase())) return !1;
                else if (!B && G.includes(Z[I].toLowerCase())) return !0
        }
        return !0
    }
    getAccessTokensByFilter(A, Q) {
        let B = this.getTokenKeys(),
            G = [];
        return B.accessToken.forEach((Z) => {
            if (!this.accessTokenKeyMatchesFilter(Z, A, !0)) return;
            let I = this.getAccessTokenCredential(Z, Q);
            if (I && this.credentialMatchesFilter(I, A)) G.push(I)
        }), G
    }
    getRefreshToken(A, Q, B, G, Z) {
        this.commonLogger.trace("CacheManager - getRefreshToken called");
        let I = Q ? Kl : void 0,
            Y = {
                homeAccountId: A.homeAccountId,
                environment: A.environment,
                credentialType: g7.REFRESH_TOKEN,
                clientId: this.clientId,
                familyId: I
            },
            J = G && G.refreshToken || this.getTokenKeys().refreshToken,
            W = [];
        J.forEach((F) => {
            if (this.refreshTokenKeyMatchesFilter(F, Y)) {
                let V = this.getRefreshTokenCredential(F, B);
                if (V && this.credentialMatchesFilter(V, Y)) W.push(V)
            }
        });
        let X = W.length;
        if (X < 1) return this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null;
        if (X > 1 && Z && B) Z.addFields({
            multiMatchedRT: X
        }, B);
        return this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), W[0]
    }
    refreshTokenKeyMatchesFilter(A, Q) {
        let B = A.toLowerCase();
        if (Q.familyId && B.indexOf(Q.familyId.toLowerCase()) === -1) return !1;
        if (!Q.familyId && Q.clientId && B.indexOf(Q.clientId.toLowerCase()) === -1) return !1;
        if (Q.homeAccountId && B.indexOf(Q.homeAccountId.toLowerCase()) === -1) return !1;
        return !0
    }
    readAppMetadataFromCache(A) {
        let Q = {
                environment: A,
                clientId: this.clientId
            },
            B = this.getAppMetadataFilteredBy(Q),
            G = Object.keys(B).map((I) => B[I]),
            Z = G.length;
        if (Z < 1) return null;
        else if (Z > 1) throw v0(ie);
        return G[0]
    }
    isAppMetadataFOCI(A) {
        let Q = this.readAppMetadataFromCache(A);
        return !!(Q && Q.familyId === Kl)
    }
    matchHomeAccountId(A, Q) {
        return typeof A.homeAccountId === "string" && Q === A.homeAccountId
    }
    matchLocalAccountIdFromTokenClaims(A, Q) {
        let B = A.oid || A.sub;
        return Q === B
    }
    matchLocalAccountIdFromTenantProfile(A, Q) {
        return A.localAccountId === Q
    }
    matchName(A, Q) {
        return Q.toLowerCase() === A.name?.toLowerCase()
    }
    matchUsername(A, Q) {
        return !!(A && typeof A === "string" && Q?.toLowerCase() === A.toLowerCase())
    }
    matchUserAssertionHash(A, Q) {
        return !!(A.userAssertionHash && Q === A.userAssertionHash)
    }
    matchEnvironment(A, Q) {
        if (this.staticAuthorityOptions) {
            let G = ReB(this.staticAuthorityOptions, this.commonLogger);
            if (G.includes(Q) && G.includes(A.environment)) return !0
        }
        let B = this.getAuthorityMetadataByAlias(Q);
        if (B && B.aliases.indexOf(A.environment) > -1) return !0;
        return !1
    }
    matchCredentialType(A, Q) {
        return A.credentialType && Q.toLowerCase() === A.credentialType.toLowerCase()
    }
    matchClientId(A, Q) {
        return !!(A.clientId && Q === A.clientId)
    }
    matchFamilyId(A, Q) {
        return !!(A.familyId && Q === A.familyId)
    }
    matchRealm(A, Q) {
        return A.realm?.toLowerCase() === Q.toLowerCase()
    }
    matchNativeAccountId(A, Q) {
        return !!(A.nativeAccountId && Q === A.nativeAccountId)
    }
    matchLoginHintFromTokenClaims(A, Q) {
        if (A.login_hint === Q) return !0;
        if (A.preferred_username === Q) return !0;
        if (A.upn === Q) return !0;
        return !1
    }
    matchSid(A, Q) {
        return A.sid === Q
    }
    matchAuthorityType(A, Q) {
        return !!(A.authorityType && Q.toLowerCase() === A.authorityType.toLowerCase())
    }
    matchTarget(A, Q) {
        if (A.credentialType !== g7.ACCESS_TOKEN && A.credentialType !== g7.ACCESS_TOKEN_WITH_AUTH_SCHEME || !A.target) return !1;
        return PJ.fromString(A.target).containsScopeSet(Q)
    }
    matchTokenType(A, Q) {
        return !!(A.tokenType && A.tokenType === Q)
    }
    matchKeyId(A, Q) {
        return !!(A.keyId && A.keyId === Q)
    }
    isAppMetadata(A) {
        return A.indexOf(xqA) !== -1
    }
    isAuthorityMetadata(A) {
        return A.indexOf(gZA.CACHE_KEY) !== -1
    }
    generateAuthorityMetadataCacheKey(A) {
        return `${gZA.CACHE_KEY}-${this.clientId}-${A}`
    }
    static toObject(A, Q) {
        for (let B in Q) A[B] = Q[B];
        return A
    }
}
var O11;
var xs1 = L(() => {
    bZ();
    FNA();
    N11();
    mX();
    w11();
    aZA();
    z11();
    _s1();
    SeB();
    yM();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    O11 = class O11 extends VAA {
        async setAccount() {
            throw v0(g8)
        }
        getAccount() {
            throw v0(g8)
        }
        async setIdTokenCredential() {
            throw v0(g8)
        }
        getIdTokenCredential() {
            throw v0(g8)
        }
        async setAccessTokenCredential() {
            throw v0(g8)
        }
        getAccessTokenCredential() {
            throw v0(g8)
        }
        async setRefreshTokenCredential() {
            throw v0(g8)
        }
        getRefreshTokenCredential() {
            throw v0(g8)
        }
        setAppMetadata() {
            throw v0(g8)
        }
        getAppMetadata() {
            throw v0(g8)
        }
        setServerTelemetry() {
            throw v0(g8)
        }
        getServerTelemetry() {
            throw v0(g8)
        }
        setAuthorityMetadata() {
            throw v0(g8)
        }
        getAuthorityMetadata() {
            throw v0(g8)
        }
        getAuthorityMetadataKeys() {
            throw v0(g8)
        }
        setThrottlingCache() {
            throw v0(g8)
        }
        getThrottlingCache() {
            throw v0(g8)
        }
        removeItem() {
            throw v0(g8)
        }
        getKeys() {
            throw v0(g8)
        }
        getAccountKeys() {
            throw v0(g8)
        }
        getTokenKeys() {
            throw v0(g8)
        }
        generateCredentialKey() {
            throw v0(g8)
        }
        generateAccountKey() {
            throw v0(g8)
        }
    }
});
var W0, mJG, _eB;
var uT = L(() => {
    /*! @azure/msal-common v15.13.1 2025-10-29 */
    W0 = {
        AcquireTokenByCode: "acquireTokenByCode",
        AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
        AcquireTokenSilent: "acquireTokenSilent",
        AcquireTokenSilentAsync: "acquireTokenSilentAsync",
        AcquireTokenPopup: "acquireTokenPopup",
        AcquireTokenPreRedirect: "acquireTokenPreRedirect",
        AcquireTokenRedirect: "acquireTokenRedirect",
        CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
        CryptoOptsSignJwt: "cryptoOptsSignJwt",
        SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
        SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
        AwaitConcurrentIframe: "awaitConcurrentIframe",
        SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
        SsoSilent: "ssoSilent",
        StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
        FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
        NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
        BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
        NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync",
        RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
        AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
        BrokerHandhshake: "brokerHandshake",
        AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
        AcquireTokenByBroker: "acquireTokenByBroker",
        RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
        RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
        RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
        RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
        RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
        AcquireTokenFromCache: "acquireTokenFromCache",
        SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
        SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
        AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
        InitializeBaseRequest: "initializeBaseRequest",
        InitializeSilentRequest: "initializeSilentRequest",
        InitializeClientApplication: "initializeClientApplication",
        InitializeCache: "initializeCache",
        SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
        SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
        SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
        SilentHandlerLoadFrame: "silentHandlerLoadFrame",
        SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
        StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
        StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
        StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
        GetAuthCodeUrl: "getAuthCodeUrl",
        GetStandardParams: "getStandardParams",
        HandleCodeResponseFromServer: "handleCodeResponseFromServer",
        HandleCodeResponse: "handleCodeResponse",
        HandleResponseEar: "handleResponseEar",
        HandleResponsePlatformBroker: "handleResponsePlatformBroker",
        HandleResponseCode: "handleResponseCode",
        UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
        AuthClientAcquireToken: "authClientAcquireToken",
        AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
        AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
        PopTokenGenerateCnf: "popTokenGenerateCnf",
        PopTokenGenerateKid: "popTokenGenerateKid",
        HandleServerTokenResponse: "handleServerTokenResponse",
        DeserializeResponse: "deserializeResponse",
        AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
        AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
        AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
        AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
        AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
        AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
        AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
        AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
        RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
        RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
        RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
        AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
        GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
        GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
        HandleRedirectPromiseMeasurement: "handleRedirectPromise",
        HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
        UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
        UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
        NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
        NativeGenerateAuthResult: "nativeGenerateAuthResult",
        RemoveHiddenIframe: "removeHiddenIframe",
        ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
        CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
        ImportExistingCache: "importExistingCache",
        SetUserData: "setUserData",
        LocalStorageUpdated: "localStorageUpdated",
        GeneratePkceCodes: "generatePkceCodes",
        GenerateCodeVerifier: "generateCodeVerifier",
        GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
        Sha256Digest: "sha256Digest",
        GetRandomValues: "getRandomValues",
        GenerateHKDF: "generateHKDF",
        GenerateBaseKey: "generateBaseKey",
        Base64Decode: "base64Decode",
        UrlEncodeArr: "urlEncodeArr",
        Encrypt: "encrypt",
        Decrypt: "decrypt",
        GenerateEarKey: "generateEarKey",
        DecryptEarResponse: "decryptEarResponse"
    }, mJG = new Map([
        [W0.AcquireTokenByCode, "ATByCode"],
        [W0.AcquireTokenByRefreshToken, "ATByRT"],
        [W0.AcquireTokenSilent, "ATS"],
        [W0.AcquireTokenSilentAsync, "ATSAsync"],
        [W0.AcquireTokenPopup, "ATPopup"],
        [W0.AcquireTokenRedirect, "ATRedirect"],
        [W0.CryptoOptsGetPublicKeyThumbprint, "CryptoGetPKThumb"],
        [W0.CryptoOptsSignJwt, "CryptoSignJwt"],
        [W0.SilentCacheClientAcquireToken, "SltCacheClientAT"],
        [W0.SilentIframeClientAcquireToken, "SltIframeClientAT"],
        [W0.SilentRefreshClientAcquireToken, "SltRClientAT"],
        [W0.SsoSilent, "SsoSlt"],
        [W0.StandardInteractionClientGetDiscoveredAuthority, "StdIntClientGetDiscAuth"],
        [W0.FetchAccountIdWithNativeBroker, "FetchAccIdWithNtvBroker"],
        [W0.NativeInteractionClientAcquireToken, "NtvIntClientAT"],
        [W0.BaseClientCreateTokenRequestHeaders, "BaseClientCreateTReqHead"],
        [W0.NetworkClientSendPostRequestAsync, "NetClientSendPost"],
        [W0.RefreshTokenClientExecutePostToTokenEndpoint, "RTClientExecPost"],
        [W0.AuthorizationCodeClientExecutePostToTokenEndpoint, "AuthCodeClientExecPost"],
        [W0.BrokerHandhshake, "BrokerHandshake"],
        [W0.AcquireTokenByRefreshTokenInBroker, "ATByRTInBroker"],
        [W0.AcquireTokenByBroker, "ATByBroker"],
        [W0.RefreshTokenClientExecuteTokenRequest, "RTClientExecTReq"],
        [W0.RefreshTokenClientAcquireToken, "RTClientAT"],
        [W0.RefreshTokenClientAcquireTokenWithCachedRefreshToken, "RTClientATWithCachedRT"],
        [W0.RefreshTokenClientAcquireTokenByRefreshToken, "RTClientATByRT"],
        [W0.RefreshTokenClientCreateTokenRequestBody, "RTClientCreateTReqBody"],
        [W0.AcquireTokenFromCache, "ATFromCache"],
        [W0.SilentFlowClientAcquireCachedToken, "SltFlowClientATCached"],
        [W0.SilentFlowClientGenerateResultFromCacheRecord, "SltFlowClientGenResFromCache"],
        [W0.AcquireTokenBySilentIframe, "ATBySltIframe"],
        [W0.InitializeBaseRequest, "InitBaseReq"],
        [W0.InitializeSilentRequest, "InitSltReq"],
        [W0.InitializeClientApplication, "InitClientApplication"],
        [W0.InitializeCache, "InitCache"],
        [W0.ImportExistingCache, "importCache"],
        [W0.SetUserData, "setUserData"],
        [W0.LocalStorageUpdated, "localStorageUpdated"],
        [W0.SilentIframeClientTokenHelper, "SIClientTHelper"],
        [W0.SilentHandlerInitiateAuthRequest, "SHandlerInitAuthReq"],
        [W0.SilentHandlerMonitorIframeForHash, "SltHandlerMonitorIframeForHash"],
        [W0.SilentHandlerLoadFrame, "SHandlerLoadFrame"],
        [W0.SilentHandlerLoadFrameSync, "SHandlerLoadFrameSync"],
        [W0.StandardInteractionClientCreateAuthCodeClient, "StdIntClientCreateAuthCodeClient"],
        [W0.StandardInteractionClientGetClientConfiguration, "StdIntClientGetClientConf"],
        [W0.StandardInteractionClientInitializeAuthorizationRequest, "StdIntClientInitAuthReq"],
        [W0.GetAuthCodeUrl, "GetAuthCodeUrl"],
        [W0.HandleCodeResponseFromServer, "HandleCodeResFromServer"],
        [W0.HandleCodeResponse, "HandleCodeResp"],
        [W0.HandleResponseEar, "HandleRespEar"],
        [W0.HandleResponseCode, "HandleRespCode"],
        [W0.HandleResponsePlatformBroker, "HandleRespPlatBroker"],
        [W0.UpdateTokenEndpointAuthority, "UpdTEndpointAuth"],
        [W0.AuthClientAcquireToken, "AuthClientAT"],
        [W0.AuthClientExecuteTokenRequest, "AuthClientExecTReq"],
        [W0.AuthClientCreateTokenRequestBody, "AuthClientCreateTReqBody"],
        [W0.PopTokenGenerateCnf, "PopTGenCnf"],
        [W0.PopTokenGenerateKid, "PopTGenKid"],
        [W0.HandleServerTokenResponse, "HandleServerTRes"],
        [W0.DeserializeResponse, "DeserializeRes"],
        [W0.AuthorityFactoryCreateDiscoveredInstance, "AuthFactCreateDiscInst"],
        [W0.AuthorityResolveEndpointsAsync, "AuthResolveEndpointsAsync"],
        [W0.AuthorityResolveEndpointsFromLocalSources, "AuthResolveEndpointsFromLocal"],
        [W0.AuthorityGetCloudDiscoveryMetadataFromNetwork, "AuthGetCDMetaFromNet"],
        [W0.AuthorityUpdateCloudDiscoveryMetadata, "AuthUpdCDMeta"],
        [W0.AuthorityGetEndpointMetadataFromNetwork, "AuthUpdCDMetaFromNet"],
        [W0.AuthorityUpdateEndpointMetadata, "AuthUpdEndpointMeta"],
        [W0.AuthorityUpdateMetadataWithRegionalInformation, "AuthUpdMetaWithRegInfo"],
        [W0.RegionDiscoveryDetectRegion, "RegDiscDetectReg"],
        [W0.RegionDiscoveryGetRegionFromIMDS, "RegDiscGetRegFromIMDS"],
        [W0.RegionDiscoveryGetCurrentVersion, "RegDiscGetCurrentVer"],
        [W0.AcquireTokenByCodeAsync, "ATByCodeAsync"],
        [W0.GetEndpointMetadataFromNetwork, "GetEndpointMetaFromNet"],
        [W0.GetCloudDiscoveryMetadataFromNetworkMeasurement, "GetCDMetaFromNet"],
        [W0.HandleRedirectPromiseMeasurement, "HandleRedirectPromise"],
        [W0.HandleNativeRedirectPromiseMeasurement, "HandleNtvRedirectPromise"],
        [W0.UpdateCloudDiscoveryMetadataMeasurement, "UpdateCDMeta"],
        [W0.UsernamePasswordClientAcquireToken, "UserPassClientAT"],
        [W0.NativeMessageHandlerHandshake, "NtvMsgHandlerHandshake"],
        [W0.NativeGenerateAuthResult, "NtvGenAuthRes"],
        [W0.RemoveHiddenIframe, "RemoveHiddenIframe"],
        [W0.ClearTokensAndKeysWithClaims, "ClearTAndKeysWithClaims"],
        [W0.CacheManagerGetRefreshToken, "CacheManagerGetRT"],
        [W0.GeneratePkceCodes, "GenPkceCodes"],
        [W0.GenerateCodeVerifier, "GenCodeVerifier"],
        [W0.GenerateCodeChallengeFromVerifier, "GenCodeChallengeFromVerifier"],
        [W0.Sha256Digest, "Sha256Digest"],
        [W0.GetRandomValues, "GetRandomValues"],
        [W0.GenerateHKDF, "genHKDF"],
        [W0.GenerateBaseKey, "genBaseKey"],
        [W0.Base64Decode, "b64Decode"],
        [W0.UrlEncodeArr, "urlEncArr"],
        [W0.Encrypt, "encrypt"],
        [W0.Decrypt, "decrypt"],
        [W0.GenerateEarKey, "genEarKey"],
        [W0.DecryptEarResponse, "decryptEarResp"]
    ]), _eB = {
        NotStarted: 0,
        InProgress: 1,
        Completed: 2
    }
});
class vs1 {
    startMeasurement() {
        return
    }
    endMeasurement() {
        return
    }
    flushMeasurement() {
        return null
    }
}
class sZA {
    generateId() {
        return "callback-id"
    }
    startMeasurement(A, Q) {
        return {
            end: () => null,
            discard: () => {},
            add: () => {},
            increment: () => {},
            event: {
                eventId: this.generateId(),
                status: _eB.InProgress,
                authority: "",
                libraryName: "",
                libraryVersion: "",
                clientId: "",
                name: A,
                startTimeMs: Date.now(),
                correlationId: Q || ""
            },
            measurement: new vs1
        }
    }
    startPerformanceMeasurement() {
        return new vs1
    }
    calculateQueuedTime() {
        return 0
    }
    addQueueMeasurement() {
        return
    }
    setPreQueueTime() {
        return
    }
    endMeasurement() {
        return null
    }
    discardMeasurements() {
        return
    }
    removePerformanceCallback() {
        return !0
    }
    addPerformanceCallback() {
        return ""
    }
    emitEvents() {
        return
    }
    addFields() {
        return
    }
    incrementFields() {
        return
    }
    cacheEventByCorrelationId() {
        return
    }
}
var bs1 = L(() => {
    uT(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});

function keB({
    authOptions: A,
    systemOptions: Q,
    loggerOptions: B,
    cacheOptions: G,
    storageInterface: Z,
    networkInterface: I,
    cryptoInterface: Y,
    clientCredentials: J,
    libraryInfo: W,
    telemetry: X,
    serverTelemetryManager: F,
    persistencePlugin: V,
    serializableCache: K
}) {
    let D = {
        ...he6,
        ...B
    };
    return {
        authOptions: le6(A),
        systemOptions: {
            ...fe6,
            ...Q
        },
        loggerOptions: D,
        cacheOptions: {
            ...ge6,
            ...G
        },
        storageInterface: Z || new O11(A.clientId, dZA, new jU(D), new sZA),
        networkInterface: I || ue6,
        cryptoInterface: Y || dZA,
        clientCredentials: J || de6,
        libraryInfo: {
            ...me6,
            ...W
        },
        telemetry: {
            ...pe6,
            ...X
        },
        serverTelemetryManager: F || null,
        persistencePlugin: V || null,
        serializableCache: K || null
    }
}

function le6(A) {
    return {
        clientCapabilities: [],
        azureCloudOptions: ce6,
        skipAuthorityMetadataCache: !1,
        instanceAware: !1,
        encodeExtraQueryParams: !1,
        ...A
    }
}

function R11(A) {
    return A.authOptions.authority.options.protocolMode === lH.OIDC
}
var fe6, he6, ge6, ue6, me6, de6, ce6, pe6;
var T11 = L(() => {
    Ns1();
    C11();
    bZ();
    z11();
    U11();
    xs1();
    KNA();
    mX();
    bs1();
    PW(); /*! @azure/msal-common v15.13.1 2025-10-29 */
    fe6 = {
        tokenRenewalOffsetSeconds: uZA,
        preventCorsPreflight: !1
    }, he6 = {
        loggerCallback: () => {},
        piiLoggingEnabled: !1,
        logLevel: pY.Info,
        correlationId: L0.EMPTY_STRING
    }, ge6 = {
        claimsBasedCachingEnabled: !1
    }, ue6 = {
        async sendGetRequestAsync() {
            throw v0(g8)
        },
        async sendPostRequestAsync() {
            throw v0(g8)
        }