/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.934Z
 */

/**
 * Claude Code Decompiled
 * Category: auth
 * File: 52/61
 * Lines: 257058 - 258557 (1500 lines)
 * Original file: cli.js
 */


    function rA5() {
        if (D01 > H01.length - 16) aA5.default.randomFillSync(H01), D01 = 0;
        return H01.slice(D01, D01 += 16)
    }
});
var MA2 = U((NA2) => {
    Object.defineProperty(NA2, "__esModule", {
        value: !0
    });
    NA2.default = void 0;
    var tA5 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    NA2.default = tA5
});
var cNA = U((OA2) => {
    Object.defineProperty(OA2, "__esModule", {
        value: !0
    });
    OA2.default = void 0;
    var eA5 = A15(MA2());

function A15(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

function Q15(A) {
        return typeof A === "string" && eA5.default.test(A)
    }
    var B15 = Q15;
    OA2.default = B15
});
var pNA = U((TA2) => {
    Object.defineProperty(TA2, "__esModule", {
        value: !0
    });
    TA2.default = void 0;
    var G15 = Z15(cNA());

function Z15(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

var MD = [];
    for (let A = 0; A < 256; ++A) MD.push((A + 256).toString(16).substr(1));

function I15(A, Q = 0) {
        let B = (MD[A[Q + 0]] + MD[A[Q + 1]] + MD[A[Q + 2]] + MD[A[Q + 3]] + "-" + MD[A[Q + 4]] + MD[A[Q + 5]] + "-" + MD[A[Q + 6]] + MD[A[Q + 7]] + "-" + MD[A[Q + 8]] + MD[A[Q + 9]] + "-" + MD[A[Q + 10]] + MD[A[Q + 11]] + MD[A[Q + 12]] + MD[A[Q + 13]] + MD[A[Q + 14]] + MD[A[Q + 15]]).toLowerCase();
        if (!(0, G15.default)(B)) throw TypeError("Stringified UUID is invalid");
        return B
    }
    var Y15 = I15;
    TA2.default = Y15
});
var yA2 = U((_A2) => {
    Object.defineProperty(_A2, "__esModule", {
        value: !0
    });
    _A2.default = void 0;
    var J15 = SA2(or1()),
        W15 = SA2(pNA());

function SA2(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var jA2, tr1, er1 = 0,
        Ao1 = 0;

function X15(A, Q, B) {
        let G = Q && B || 0,
            Z = Q || Array(16);
        A = A || {};
        let I = A.node || jA2,
            Y = A.clockseq !== void 0 ? A.clockseq : tr1;
        if (I == null || Y == null) {
            let K = A.random || (A.rng || J15.default)();
            if (I == null) I = jA2 = [K[0] | 1, K[1], K[2], K[3], K[4], K[5]];
            if (Y == null) Y = tr1 = (K[6] << 8 | K[7]) & 16383
        }
        let J = A.msecs !== void 0 ? A.msecs : Date.now(),
            W = A.nsecs !== void 0 ? A.nsecs : Ao1 + 1,
            X = J - er1 + (W - Ao1) / 1e4;
        if (X < 0 && A.clockseq === void 0) Y = Y + 1 & 16383;
        if ((X < 0 || J > er1) && A.nsecs === void 0) W = 0;
        if (W >= 1e4) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        er1 = J, Ao1 = W, tr1 = Y, J += 12219292800000;
        let F = ((J & 268435455) * 1e4 + W) % 4294967296;
        Z[G++] = F >>> 24 & 255, Z[G++] = F >>> 16 & 255, Z[G++] = F >>> 8 & 255, Z[G++] = F & 255;
        let V = J / 4294967296 * 1e4 & 268435455;
        Z[G++] = V >>> 8 & 255, Z[G++] = V & 255, Z[G++] = V >>> 24 & 15 | 16, Z[G++] = V >>> 16 & 255, Z[G++] = Y >>> 8 | 128, Z[G++] = Y & 255;
        for (let K = 0; K < 6; ++K) Z[G + K] = I[K];
        return Q || (0, W15.default)(Z)
    }
    var F15 = X15;
    _A2.default = F15
});
var Qo1 = U((xA2) => {
    Object.defineProperty(xA2, "__esModule", {
        value: !0
    });
    xA2.default = void 0;
    var V15 = K15(cNA());

function K15(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

function D15(A) {
        if (!(0, V15.default)(A)) throw TypeError("Invalid UUID");
        let Q, B = new Uint8Array(16);
        return B[0] = (Q = parseInt(A.slice(0, 8), 16)) >>> 24, B[1] = Q >>> 16 & 255, B[2] = Q >>> 8 & 255, B[3] = Q & 255, B[4] = (Q = parseInt(A.slice(9, 13), 16)) >>> 8, B[5] = Q & 255, B[6] = (Q = parseInt(A.slice(14, 18), 16)) >>> 8, B[7] = Q & 255, B[8] = (Q = parseInt(A.slice(19, 23), 16)) >>> 8, B[9] = Q & 255, B[10] = (Q = parseInt(A.slice(24, 36), 16)) / 1099511627776 & 255, B[11] = Q / 4294967296 & 255, B[12] = Q >>> 24 & 255, B[13] = Q >>> 16 & 255, B[14] = Q >>> 8 & 255, B[15] = Q & 255, B
    }
    var H15 = D15;
    xA2.default = H15
});
var Bo1 = U((gA2) => {
    Object.defineProperty(gA2, "__esModule", {
        value: !0
    });
    gA2.default = U15;
    gA2.URL = gA2.DNS = void 0;
    var C15 = bA2(pNA()),
        E15 = bA2(Qo1());

function bA2(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

function z15(A) {
        A = unescape(encodeURIComponent(A));
        let Q = [];
        for (let B = 0; B < A.length; ++B) Q.push(A.charCodeAt(B));
        return Q
    }
    var fA2 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    gA2.DNS = fA2;
    var hA2 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    gA2.URL = hA2;

function U15(A, Q, B) {
        function G(Z, I, Y, J) {
            if (typeof Z === "string") Z = z15(Z);
            if (typeof I === "string") I = (0, E15.default)(I);
            if (I.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
            let W = new Uint8Array(16 + Z.length);
            if (W.set(I), W.set(Z, I.length), W = B(W), W[6] = W[6] & 15 | Q, W[8] = W[8] & 63 | 128, Y) {
                J = J || 0;
                for (let X = 0; X < 16; ++X) Y[J + X] = W[X];
                return Y
            }
            return (0, C15.default)(W)
        }
        try {
            G.name = A
        } catch (Z) {}
        return G.DNS = fA2, G.URL = hA2, G
    }
});
var cA2 = U((mA2) => {
    Object.defineProperty(mA2, "__esModule", {
        value: !0
    });
    mA2.default = void 0;
    var q15 = N15(UA("crypto"));

function N15(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

function L15(A) {
        if (Array.isArray(A)) A = Buffer.from(A);
        else if (typeof A === "string") A = Buffer.from(A, "utf8");
        return q15.default.createHash("md5").update(A).digest()
    }
    var M15 = L15;
    mA2.default = M15
});
var nA2 = U((lA2) => {
    Object.defineProperty(lA2, "__esModule", {
        value: !0
    });
    lA2.default = void 0;
    var O15 = pA2(Bo1()),
        R15 = pA2(cA2());

function pA2(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var T15 = (0, O15.default)("v3", 48, R15.default),
        P15 = T15;
    lA2.default = P15
});
var oA2 = U((sA2) => {
    Object.defineProperty(sA2, "__esModule", {
        value: !0
    });
    sA2.default = void 0;
    var j15 = aA2(or1()),
        S15 = aA2(pNA());

function aA2(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

function _15(A, Q, B) {
        A = A || {};
        let G = A.random || (A.rng || j15.default)();
        if (G[6] = G[6] & 15 | 64, G[8] = G[8] & 63 | 128, Q) {
            B = B || 0;
            for (let Z = 0; Z < 16; ++Z) Q[B + Z] = G[Z];
            return Q
        }
        return (0, S15.default)(G)
    }
    var k15 = _15;
    sA2.default = k15
});
var A12 = U((tA2) => {
    Object.defineProperty(tA2, "__esModule", {
        value: !0
    });
    tA2.default = void 0;
    var y15 = x15(UA("crypto"));

function x15(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

function v15(A) {
        if (Array.isArray(A)) A = Buffer.from(A);
        else if (typeof A === "string") A = Buffer.from(A, "utf8");
        return y15.default.createHash("sha1").update(A).digest()
    }
    var b15 = v15;
    tA2.default = b15
});
var Z12 = U((B12) => {
    Object.defineProperty(B12, "__esModule", {
        value: !0
    });
    B12.default = void 0;
    var f15 = Q12(Bo1()),
        h15 = Q12(A12());

function Q12(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
    var g15 = (0, f15.default)("v5", 80, h15.default),
        u15 = g15;
    B12.default = u15
});
var J12 = U((I12) => {
    Object.defineProperty(I12, "__esModule", {
        value: !0
    });
    I12.default = void 0;
    var m15 = "00000000-0000-0000-0000-000000000000";
    I12.default = m15
});
var F12 = U((W12) => {
    Object.defineProperty(W12, "__esModule", {
        value: !0
    });
    W12.default = void 0;
    var d15 = c15(cNA());

function c15(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }

function p15(A) {
        if (!(0, d15.default)(A)) throw TypeError("Invalid UUID");
        return parseInt(A.substr(14, 1), 16)
    }
    var l15 = p15;
    W12.default = l15
});
var V12 = U((mT) => {
    Object.defineProperty(mT, "__esModule", {
        value: !0
    });
    Object.defineProperty(mT, "v1", {
        enumerable: !0,
        get: function() {
            return i15.default
        }
    });
    Object.defineProperty(mT, "v3", {
        enumerable: !0,
        get: function() {
            return n15.default
        }
    });
    Object.defineProperty(mT, "v4", {
        enumerable: !0,
        get: function() {
            return a15.default
        }
    });
    Object.defineProperty(mT, "v5", {
        enumerable: !0,
        get: function() {
            return s15.default
        }
    });
    Object.defineProperty(mT, "NIL", {
        enumerable: !0,
        get: function() {
            return r15.default
        }
    });
    Object.defineProperty(mT, "version", {
        enumerable: !0,
        get: function() {
            return o15.default
        }
    });
    Object.defineProperty(mT, "validate", {
        enumerable: !0,
        get: function() {
            return t15.default
        }
    });
    Object.defineProperty(mT, "stringify", {
        enumerable: !0,
        get: function() {
            return e15.default
        }
    });
    Object.defineProperty(mT, "parse", {
        enumerable: !0,
        get: function() {
            return A05.default
        }
    });
    var i15 = sf(yA2()),
        n15 = sf(nA2()),
        a15 = sf(oA2()),
        s15 = sf(Z12()),
        r15 = sf(J12()),
        o15 = sf(F12()),
        t15 = sf(cNA()),
        e15 = sf(pNA()),
        A05 = sf(Qo1());

function sf(A) {
        return A && A.__esModule ? A : {
            default: A
        }
    }
});
var Ck, SKG, _KG, K12, kKG, yKG, xKG, vKG, bKG, fKG;
var D12 = L(() => {
    Ck = GA(V12(), 1), SKG = Ck.default.v1, _KG = Ck.default.v3, K12 = Ck.default.v4, kKG = Ck.default.v5, yKG = Ck.default.NIL, xKG = Ck.default.version, vKG = Ck.default.validate, bKG = Ck.default.stringify, fKG = Ck.default.parse
});

class lNA {
    generateGuid() {
        return K12()
    }
    isGuid(A) {
        return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(A)
    }
}
var Go1 = L(() => {
    D12(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});

class _U {
    static base64Encode(A, Q) {
        return Buffer.from(A, Q).toString(ND.BASE64)
    }
    static base64EncodeUrl(A, Q) {
        return _U.base64Encode(A, Q).replace(/=/g, L0.EMPTY_STRING).replace(/\+/g, "-").replace(/\//g, "_")
    }
    static base64Decode(A) {
        return Buffer.from(A, ND.BASE64).toString("utf8")
    }
    static base64DecodeUrl(A) {
        let Q = A.replace(/-/g, "+").replace(/_/g, "/");
        while (Q.length % 4) Q += "=";
        return _U.base64Decode(Q)
    }
}
var iNA = L(() => {
    u7(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
import Q05 from "crypto";

class LAA {
    sha256(A) {
        return Q05.createHash(JA2.SHA256).update(A).digest()
    }
}
var C01 = L(() => {
    HI(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
import B05 from "crypto";

class Zo1 {
    constructor() {
        this.hashUtils = new LAA
    }
    async generatePkceCodes() {
        let A = this.generateCodeVerifier(),
            Q = this.generateCodeChallengeFromVerifier(A);
        return {
            verifier: A,
            challenge: Q
        }
    }
    generateCodeVerifier() {
        let A = [],
            Q = 256 - 256 % B01.CV_CHARSET.length;
        while (A.length <= YA2) {
            let G = B05.randomBytes(1)[0];
            if (G >= Q) continue;
            let Z = G % B01.CV_CHARSET.length;
            A.push(B01.CV_CHARSET[Z])
        }
        let B = A.join(L0.EMPTY_STRING);
        return _U.base64EncodeUrl(B)
    }
    generateCodeChallengeFromVerifier(A) {
        return _U.base64EncodeUrl(this.hashUtils.sha256(A).toString(ND.BASE64), ND.BASE64)
    }
}
var H12 = L(() => {
    u7();
    HI();
    iNA();
    C01(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});

class rf {
    constructor() {
        this.pkceGenerator = new Zo1, this.guidGenerator = new lNA, this.hashUtils = new LAA
    }
    base64UrlEncode() {
        throw Error("Method not implemented.")
    }
    encodeKid() {
        throw Error("Method not implemented.")
    }
    createNewGuid() {
        return this.guidGenerator.generateGuid()
    }
    base64Encode(A) {
        return _U.base64Encode(A)
    }
    base64Decode(A) {
        return _U.base64Decode(A)
    }
    generatePkceCodes() {
        return this.pkceGenerator.generatePkceCodes()
    }
    getPublicKeyThumbprint() {
        throw Error("Method not implemented.")
    }
    removeTokenBindingKey() {
        throw Error("Method not implemented.")
    }
    clearKeystore() {
        throw Error("Method not implemented.")
    }
    signJwt() {
        throw Error("Method not implemented.")
    }
    async hashString(A) {
        return _U.base64EncodeUrl(this.hashUtils.sha256(A).toString(ND.BASE64), ND.BASE64)
    }
}
var nNA = L(() => {
    u7();
    Go1();
    iNA();
    H12();
    C01(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var E01 = L(() => {
    bZ();
    bs1(); /*! @azure/msal-common v15.13.1 2025-10-29 */
});

function C12(A) {
    let Q = A.credentialType === g7.REFRESH_TOKEN && A.familyId || A.clientId,
        B = A.tokenType && A.tokenType.toLowerCase() !== e6.BEARER.toLowerCase() ? A.tokenType.toLowerCase() : "";
    return [A.homeAccountId, A.environment, A.credentialType, Q, A.realm || "", A.target || "", A.requestedClaimsHash || "", B].join(lr1.KEY_SEPARATOR).toLowerCase()
}

function E12(A) {
    let Q = A.homeAccountId.split(".")[1];
    return [A.homeAccountId, A.environment, Q || A.tenantId || ""].join(lr1.KEY_SEPARATOR).toLowerCase()
}
var z12 = L(() => {
    u7();
    HI(); /*! @azure/msal-node v3.8.1 2025-10-29 */
});
var MAA;
var z01 = L(() => {
    u7();
    A01();
    V11();
    E01();
    z12(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    MAA = class MAA extends VAA {
        constructor(A, Q, B, G) {
            super(Q, B, A, new sZA, G);
            this.cache = {}, this.changeEmitters = [], this.logger = A
        }
        registerChangeEmitter(A) {
            this.changeEmitters.push(A)
        }
        emitChange() {
            this.changeEmitters.forEach((A) => A.call(null))
        }
        cacheToInMemoryCache(A) {
            let Q = {
                accounts: {},
                idTokens: {},
                accessTokens: {},
                refreshTokens: {},
                appMetadata: {}
            };
            for (let B in A) {
                let G = A[B];
                if (typeof G !== "object") continue;
                if (G instanceof dX) Q.accounts[B] = G;
                else if (TE.isIdTokenEntity(G)) Q.idTokens[B] = G;
                else if (TE.isAccessTokenEntity(G)) Q.accessTokens[B] = G;
                else if (TE.isRefreshTokenEntity(G)) Q.refreshTokens[B] = G;
                else if (TE.isAppMetadataEntity(B, G)) Q.appMetadata[B] = G;
                else continue
            }
            return Q
        }
        inMemoryCacheToCache(A) {
            let Q = this.getCache();
            return Q = {
                ...Q,
                ...A.accounts,
                ...A.idTokens,
                ...A.accessTokens,
                ...A.refreshTokens,
                ...A.appMetadata
            }, Q
        }
        getInMemoryCache() {
            return this.logger.trace("Getting in-memory cache"), this.cacheToInMemoryCache(this.getCache())
        }
        setInMemoryCache(A) {
            this.logger.trace("Setting in-memory cache");
            let Q = this.inMemoryCacheToCache(A);
            this.setCache(Q), this.emitChange()
        }
        getCache() {
            return this.logger.trace("Getting cache key-value store"), this.cache
        }
        setCache(A) {
            this.logger.trace("Setting cache key value store"), this.cache = A, this.emitChange()
        }
        getItem(A) {
            return this.logger.tracePii(`Item key: ${A}`), this.getCache()[A]
        }
        setItem(A, Q) {
            this.logger.tracePii(`Item key: ${A}`);
            let B = this.getCache();
            B[A] = Q, this.setCache(B)
        }
        generateCredentialKey(A) {
            return C12(A)
        }
        generateAccountKey(A) {
            return E12(A)
        }
        getAccountKeys() {
            let A = this.getInMemoryCache();
            return Object.keys(A.accounts)
        }
        getTokenKeys() {
            let A = this.getInMemoryCache();
            return {
                idToken: Object.keys(A.idTokens),
                accessToken: Object.keys(A.accessTokens),
                refreshToken: Object.keys(A.refreshTokens)
            }
        }
        getAccount(A) {
            return this.getItem(A) ? Object.assign(new dX, this.getItem(A)) : null
        }
        async setAccount(A) {
            let Q = this.generateAccountKey(dX.getAccountInfo(A));
            this.setItem(Q, A)
        }
        getIdTokenCredential(A) {
            let Q = this.getItem(A);
            if (TE.isIdTokenEntity(Q)) return Q;
            return null
        }
        async setIdTokenCredential(A) {
            let Q = this.generateCredentialKey(A);
            this.setItem(Q, A)
        }
        getAccessTokenCredential(A) {
            let Q = this.getItem(A);
            if (TE.isAccessTokenEntity(Q)) return Q;
            return null
        }
        async setAccessTokenCredential(A) {
            let Q = this.generateCredentialKey(A);
            this.setItem(Q, A)
        }
        getRefreshTokenCredential(A) {
            let Q = this.getItem(A);
            if (TE.isRefreshTokenEntity(Q)) return Q;
            return null
        }
        async setRefreshTokenCredential(A) {
            let Q = this.generateCredentialKey(A);
            this.setItem(Q, A)
        }
        getAppMetadata(A) {
            let Q = this.getItem(A);
            if (TE.isAppMetadataEntity(A, Q)) return Q;
            return null
        }
        setAppMetadata(A) {
            let Q = TE.generateAppMetadataKey(A);
            this.setItem(Q, A)
        }
        getServerTelemetry(A) {
            let Q = this.getItem(A);
            if (Q && TE.isServerTelemetryEntity(A, Q)) return Q;
            return null
        }
        setServerTelemetry(A, Q) {
            this.setItem(A, Q)
        }
        getAuthorityMetadata(A) {
            let Q = this.getItem(A);
            if (Q && TE.isAuthorityMetadataEntity(A, Q)) return Q;
            return null
        }
        getAuthorityMetadataKeys() {
            return this.getKeys().filter((A) => {
                return this.isAuthorityMetadata(A)
            })
        }
        setAuthorityMetadata(A, Q) {
            this.setItem(A, Q)
        }
        getThrottlingCache(A) {
            let Q = this.getItem(A);
            if (Q && TE.isThrottlingEntity(A, Q)) return Q;
            return null
        }
        setThrottlingCache(A, Q) {
            this.setItem(A, Q)
        }
        removeItem(A) {
            this.logger.tracePii(`Item key: ${A}`);
            let Q = !1,
                B = this.getCache();
            if (B[A]) delete B[A], Q = !0;
            if (Q) this.setCache(B), this.emitChange();
            return Q
        }
        removeOutdatedAccount(A) {
            this.removeItem(A)
        }
        containsKey(A) {
            return this.getKeys().includes(A)
        }
        getKeys() {
            this.logger.trace("Retrieving all cache keys");
            let A = this.getCache();
            return [...Object.keys(A)]
        }
        clear() {
            this.logger.trace("Clearing cache entries created by MSAL"), this.getKeys().forEach((Q) => {
                this.removeItem(Q)
            }), this.emitChange()
        }
        static generateInMemoryCache(A) {
            return jl.deserializeAllCache(jl.deserializeJSONBlob(A))
        }
        static generateJsonCache(A) {
            return xe.serializeAllCache(A)
        }
        updateCredentialCacheKey(A, Q) {
            let B = this.generateCredentialKey(Q);
            if (A !== B) {
                let G = this.getItem(A);
                if (G) return this.removeItem(A), this.setItem(B, G), this.logger.verbose(`Updated an outdated ${Q.credentialType} cache key`), B;
                else this.logger.error(`Attempted to update an outdated ${Q.credentialType} cache key but no item matching the outdated key was found in storage`)
            }
            return A
        }
    }
});

class sNA {
    constructor(A, Q, B) {
        if (this.cacheHasChanged = !1, this.storage = A, this.storage.registerChangeEmitter(this.handleChangeEvent.bind(this)), B) this.persistence = B;
        this.logger = Q
    }
    hasChanged() {
        return this.cacheHasChanged
    }
    serialize() {
        this.logger.trace("Serializing in-memory cache");
        let A = xe.serializeAllCache(this.storage.getInMemoryCache());
        if (this.cacheSnapshot) this.logger.trace("Reading cache snapshot from disk"), A = this.mergeState(JSON.parse(this.cacheSnapshot), A);
        else this.logger.trace("No cache snapshot to merge");
        return this.cacheHasChanged = !1, JSON.stringify(A)
    }
    deserialize(A) {
        if (this.logger.trace("Deserializing JSON to in-memory cache"), this.cacheSnapshot = A, this.cacheSnapshot) {
            this.logger.trace("Reading cache snapshot from disk");
            let Q = jl.deserializeAllCache(this.overlayDefaults(JSON.parse(this.cacheSnapshot)));
            this.storage.setInMemoryCache(Q)
        } else this.logger.trace("No cache snapshot to deserialize")
    }
    getKVStore() {
        return this.storage.getCache()
    }
    getCacheSnapshot() {
        let A = MAA.generateInMemoryCache(this.cacheSnapshot);
        return this.storage.inMemoryCacheToCache(A)
    }
    async getAllAccounts(A = new rf().createNewGuid()) {
        this.logger.trace("getAllAccounts called");
        let Q;
        try {
            if (this.persistence) Q = new vM(this, !1), await this.persistence.beforeCacheAccess(Q);
            return this.storage.getAllAccounts({}, A)
        } finally {
            if (this.persistence && Q) await this.persistence.afterCacheAccess(Q)
        }
    }
    async getAccountByHomeId(A) {
        let Q = await this.getAllAccounts();
        if (A && Q && Q.length) return Q.filter((B) => B.homeAccountId === A)[0] || null;
        else return null
    }
    async getAccountByLocalId(A) {
        let Q = await this.getAllAccounts();
        if (A && Q && Q.length) return Q.filter((B) => B.localAccountId === A)[0] || null;
        else return null
    }
    async removeAccount(A, Q) {
        this.logger.trace("removeAccount called");
        let B;
        try {
            if (this.persistence) B = new vM(this, !0), await this.persistence.beforeCacheAccess(B);
            this.storage.removeAccount(A, Q || new lNA().generateGuid())
        } finally {
            if (this.persistence && B) await this.persistence.afterCacheAccess(B)
        }
    }
    async overwriteCache() {
        if (!this.persistence) {
            this.logger.info("No persistence layer specified, cache cannot be overwritten");
            return
        }
        this.logger.info("Overwriting in-memory cache with persistent cache"), this.storage.clear();
        let A = new vM(this, !1);
        await this.persistence.beforeCacheAccess(A);
        let Q = this.getCacheSnapshot();
        this.storage.setCache(Q), await this.persistence.afterCacheAccess(A)
    }
    handleChangeEvent() {
        this.cacheHasChanged = !0
    }
    mergeState(A, Q) {
        this.logger.trace("Merging in-memory cache with cache snapshot");
        let B = this.mergeRemovals(A, Q);
        return this.mergeUpdates(B, Q)
    }
    mergeUpdates(A, Q) {
        return Object.keys(Q).forEach((B) => {
            let G = Q[B];
            if (!A.hasOwnProperty(B)) {
                if (G !== null) A[B] = G
            } else {
                let Z = G !== null,
                    I = typeof G === "object",
                    Y = !Array.isArray(G),
                    J = typeof A[B] < "u" && A[B] !== null;
                if (Z && I && Y && J) this.mergeUpdates(A[B], G);
                else A[B] = G
            }
        }), A
    }
    mergeRemovals(A, Q) {
        this.logger.trace("Remove updated entries in cache");
        let B = A.Account ? this.mergeRemovalsDict(A.Account, Q.Account) : A.Account,
            G = A.AccessToken ? this.mergeRemovalsDict(A.AccessToken, Q.AccessToken) : A.AccessToken,
            Z = A.RefreshToken ? this.mergeRemovalsDict(A.RefreshToken, Q.RefreshToken) : A.RefreshToken,
            I = A.IdToken ? this.mergeRemovalsDict(A.IdToken, Q.IdToken) : A.IdToken,
            Y = A.AppMetadata ? this.mergeRemovalsDict(A.AppMetadata, Q.AppMetadata) : A.AppMetadata;
        return {
            ...A,
            Account: B,
            AccessToken: G,
            RefreshToken: Z,
            IdToken: I,
            AppMetadata: Y
        }
    }
    mergeRemovalsDict(A, Q) {
        let B = {
            ...A
        };
        return Object.keys(A).forEach((G) => {
            if (!Q || !Q.hasOwnProperty(G)) delete B[G]
        }), B
    }
    overlayDefaults(A) {
        return this.logger.trace("Overlaying input cache with the default cache"), {
            Account: {
                ...aNA.Account,
                ...A.Account
            },
            IdToken: {
                ...aNA.IdToken,
                ...A.IdToken
            },
            AccessToken: {
                ...aNA.AccessToken,
                ...A.AccessToken
            },
            RefreshToken: {
                ...aNA.RefreshToken,
                ...A.RefreshToken
            },
            AppMetadata: {
                ...aNA.AppMetadata,
                ...A.AppMetadata
            }
        }
    }
}
var aNA;
var Io1 = L(() => {
    z01();
    u7();
    A01();
    V11();
    nNA();
    Go1(); /*! @azure/msal-node v3.8.1 2025-10-29 */
    aNA = {
        Account: {},
        IdToken: {},
        AccessToken: {},
        RefreshToken: {},
        AppMetadata: {}
    }
});
var Yo1 = U((LDG, U12) => {
    var U01 = Gk().Buffer,
        G05 = UA("stream"),
        Z05 = UA("util");

    function $01(A) {
        if (this.buffer = null, this.writable = !0, this.readable = !0, !A) return this.buffer = U01.alloc(0), this;
        if (typeof A.pipe === "function") return this.buffer = U01.alloc(0), A.pipe(this), this;
        if (A.length || typeof A === "object") return this.buffer = A, this.writable = !1, process.nextTick(function() {
            this.emit("end", A), this.readable = !1, this.emit("close")
        }.bind(this)), this;
        throw TypeError("Unexpected data type (" + typeof A + ")")
    }
    Z05.inherits($01, G05);
    $01.prototype.write = function(Q) {
        this.buffer = U01.concat([this.buffer, U01.from(Q)]), this.emit("data", Q)
    };
    $01.prototype.end = function(Q) {
        if (Q) this.write(Q);
        this.emit("end", Q), this.emit("close"), this.writable = !1, this.readable = !1
    };
    U12.exports = $01
});
var Fo1 = U((MDG, T12) => {
    var JIA = Gk().Buffer,
        fM = UA("crypto"),
        w12 = CA1(),
        $12 = UA("util"),
        I05 = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,
        rNA = "secret must be a string or buffer",
        YIA = "key must be a string or a buffer",
        Y05 = "key must be a string, a buffer or an object",
        Wo1 = typeof fM.createPublicKey === "function";
    if (Wo1) YIA += " or a KeyObject", rNA += "or a KeyObject";

function q12(A) {
        if (JIA.isBuffer(A)) return;
        if (typeof A === "string") return;
        if (!Wo1) throw dT(YIA);
        if (typeof A !== "object") throw dT(YIA);
        if (typeof A.type !== "string") throw dT(YIA);
        if (typeof A.asymmetricKeyType !== "string") throw dT(YIA);
        if (typeof A.export !== "function") throw dT(YIA)
    }

function N12(A) {
        if (JIA.isBuffer(A)) return;
        if (typeof A === "string") return;
        if (typeof A === "object") return;
        throw dT(Y05)
    }

function J05(A) {
        if (JIA.isBuffer(A)) return;
        if (typeof A === "string") return A;
        if (!Wo1) throw dT(rNA);
        if (typeof A !== "object") throw dT(rNA);
        if (A.type !== "secret") throw dT(rNA);
        if (typeof A.export !== "function") throw dT(rNA)
    }

function Xo1(A) {
        return A.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

function L12(A) {
        A = A.toString();
        var Q = 4 - A.length % 4;
        if (Q !== 4)
            for (var B = 0; B < Q; ++B) A += "=";
        return A.replace(/\-/g, "+").replace(/_/g, "/")
    }

function dT(A) {
        var Q = [].slice.call(arguments, 1),
            B = $12.format.bind($12, A).apply(null, Q);
        return TypeError(B)
    }

function W05(A) {
        return JIA.isBuffer(A) || typeof A === "string"
    }

function oNA(A) {
        if (!W05(A)) A = JSON.stringify(A);
        return A
    }

function M12(A) {
        return function(B, G) {
            J05(G), B = oNA(B);
            var Z = fM.createHmac("sha" + A, G),
                I = (Z.update(B), Z.digest("base64"));
            return Xo1(I)
        }
    }
    var Jo1, X05 = "timingSafeEqual" in fM ? function(Q, B) {
        if (Q.byteLength !== B.byteLength) return !1;
        return fM.timingSafeEqual(Q, B)
    } : function(Q, B) {
        if (!Jo1) Jo1 = Qn1();
        return Jo1(Q, B)
    };

function F05(A) {
        return function(B, G, Z) {
            var I = M12(A)(B, Z);
            return X05(JIA.from(G), JIA.from(I))
        }
    }

function O12(A) {
        return function(B, G) {
            N12(G), B = oNA(B);
            var Z = fM.createSign("RSA-SHA" + A),
                I = (Z.update(B), Z.sign(G, "base64"));
            return Xo1(I)
        }
    }

function R12(A) {
        return function(B, G, Z) {
            q12(Z), B = oNA(B), G = L12(G);
            var I = fM.createVerify("RSA-SHA" + A);
            return I.update(B), I.verify(Z, G, "base64")
        }
    }

function V05(A) {
        return function(B, G) {
            N12(G), B = oNA(B);
            var Z = fM.createSign("RSA-SHA" + A),
                I = (Z.update(B), Z.sign({
                    key: G,
                    padding: fM.constants.RSA_PKCS1_PSS_PADDING,
                    saltLength: fM.constants.RSA_PSS_SALTLEN_DIGEST
                }, "base64"));
            return Xo1(I)
        }
    }

function K05(A) {
        return function(B, G, Z) {
            q12(Z), B = oNA(B), G = L12(G);
            var I = fM.createVerify("RSA-SHA" + A);
            return I.update(B), I.verify({
                key: Z,
                padding: fM.constants.RSA_PKCS1_PSS_PADDING,
                saltLength: fM.constants.RSA_PSS_SALTLEN_DIGEST
            }, G, "base64")
        }
    }

function D05(A) {
        var Q = O12(A);
        return function() {
            var G = Q.apply(null, arguments);
            return G = w12.derToJose(G, "ES" + A), G
        }
    }

function H05(A) {
        var Q = R12(A);
        return function(G, Z, I) {
            Z = w12.joseToDer(Z, "ES" + A).toString("base64");
            var Y = Q(G, Z, I);
            return Y
        }
    }

function C05() {
        return function() {
            return ""
        }
    }

function E05() {
        return function(Q, B) {
            return B === ""
        }
    }
    T12.exports = function(Q) {
        var B = {
                hs: M12,
                rs: O12,
                ps: V05,
                es: D05,
                none: C05
            },
            G = {
                hs: F05,
                rs: R12,
                ps: K05,
                es: H05,
                none: E05
            },
            Z = Q.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
        if (!Z) throw dT(I05, Q);
        var I = (Z[1] || Z[3]).toLowerCase(),
            Y = Z[2];
        return {
            sign: B[I](Y),
            verify: G[I](Y)
        }
    }
});
var Vo1 = U((ODG, P12) => {
    var z05 = UA("buffer").Buffer;
    P12.exports = function(Q) {
        if (typeof Q === "string") return Q;
        if (typeof Q === "number" || z05.isBuffer(Q)) return Q.toString();
        return JSON.stringify(Q)
    }
});
var x12 = U((RDG, y12) => {
    var U05 = Gk().Buffer,
        j12 = Yo1(),
        $05 = Fo1(),
        w05 = UA("stream"),
        S12 = Vo1(),
        Ko1 = UA("util");

function _12(A, Q) {
        return U05.from(A, Q).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

function q05(A, Q, B) {
        B = B || "utf8";
        var G = _12(S12(A), "binary"),
            Z = _12(S12(Q), B);
        return Ko1.format("%s.%s", G, Z)
    }

function k12(A) {
        var {
            header: Q,
            payload: B
        } = A, G = A.secret || A.privateKey, Z = A.encoding, I = $05(Q.alg), Y = q05(Q, B, Z), J = I.sign(Y, G);
        return Ko1.format("%s.%s", Y, J)
    }

function w01(A) {
        var Q = A.secret || A.privateKey || A.key,
            B = new j12(Q);
        this.readable = !0, this.header = A.header, this.encoding = A.encoding, this.secret = this.privateKey = this.key = B, this.payload = new j12(A.payload), this.secret.once("close", function() {
            if (!this.payload.writable && this.readable) this.sign()
        }.bind(this)), this.payload.once("close", function() {
            if (!this.secret.writable && this.readable) this.sign()
        }.bind(this))
    }
    Ko1.inherits(w01, w05);
    w01.prototype.sign = function() {
        try {
            var Q = k12({
                header: this.header,
                payload: this.payload.buffer,
                secret: this.secret.buffer,
                encoding: this.encoding
            });
            return this.emit("done", Q), this.emit("data", Q), this.emit("end"), this.readable = !1, Q
        } catch (B) {
            this.readable = !1, this.emit("error", B), this.emit("close")
        }
    };
    w01.sign = k12;
    y12.exports = w01
});
var p12 = U((TDG, c12) => {
    var b12 = Gk().Buffer,
        v12 = Yo1(),
        N05 = Fo1(),
        L05 = UA("stream"),
        f12 = Vo1(),
        M05 = UA("util"),
        O05 = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

function R05(A) {
        return Object.prototype.toString.call(A) === "[object Object]"
    }

function T05(A) {
        if (R05(A)) return A;
        try {
            return JSON.parse(A)
        } catch (Q) {
            return
        }
    }

function h12(A) {
        var Q = A.split(".", 1)[0];
        return T05(b12.from(Q, "base64").toString("binary"))
    }

function P05(A) {
        return A.split(".", 2).join(".")
    }

function g12(A) {
        return A.split(".")[2]
    }

function j05(A, Q) {
        Q = Q || "utf8";
        var B = A.split(".")[1];
        return b12.from(B, "base64").toString(Q)
    }

function u12(A) {
        return O05.test(A) && !!h12(A)
    }

function m12(A, Q, B) {
        if (!Q) {
            var G = Error("Missing algorithm parameter for jws.verify");
            throw G.code = "MISSING_ALGORITHM", G
        }
        A = f12(A);
        var Z = g12(A),
            I = P05(A),
            Y = N05(Q);
        return Y.verify(I, Z, B)
    }

function d12(A, Q) {
        if (Q = Q || {}, A = f12(A), !u12(A)) return null;
        var B = h12(A);
        if (!B) return null;
        var G = j05(A);
        if (B.typ === "JWT" || Q.json) G = JSON.parse(G, Q.encoding);
        return {
            header: B,
            payload: G,
            signature: g12(A)
        }
    }

function WIA(A) {
        A = A || {};
        var Q = A.secret || A.publicKey || A.key,
            B = new v12(Q);
        this.readable = !0, this.algorithm = A.algorithm, this.encoding = A.encoding, this.secret = this.publicKey = this.key = B, this.signature = new v12(A.signature), this.secret.once("close", function() {
            if (!this.signature.writable && this.readable) this.verify()
        }.bind(this)), this.signature.once("close", function() {
            if (!this.secret.writable && this.readable) this.verify()
        }.bind(this))
    }
    M05.inherits(WIA, L05);
    WIA.prototype.verify = function() {
        try {
            var Q = m12(this.signature.buffer, this.algorithm, this.key.buffer),
                B = d12(this.signature.buffer, this.encoding);
            return this.emit("done", Q, B), this.emit("data", Q), this.emit("end"), this.readable = !1, Q
        } catch (G) {
            this.readable = !1, this.emit("error", G), this.emit("close")
        }
    };
    WIA.decode = d12;
    WIA.isValid = u12;
    WIA.verify = m12;
    c12.exports = WIA
});
var N01 = U((_05) => {
    var l12 = x12(),
        q01 = p12(),
        S05 = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
    _05.ALGORITHMS = S05;
    _05.sign = l12.sign;
    _05.verify = q01.verify;
    _05.decode = q01.decode;
    _05.isValid = q01.isValid;
    _05.createSign = function(Q) {
        return new l12(Q)
    };
    _05.createVerify = function(Q) {
        return new q01(Q)
    }
});
var Do1 = U((jDG, i12) => {
    var g05 = N01();
    i12.exports = function(A, Q) {
        Q = Q || {};
        var B = g05.decode(A, Q);
        if (!B) return null;
        var G = B.payload;
        if (typeof G === "string") try {
            var Z = JSON.parse(G);
            if (Z !== null && typeof Z === "object") G = Z
        } catch (I) {}
        if (Q.complete === !0) return {
            header: B.header,
            payload: G,
            signature: B.signature
        };
        return G
    }
});
var tNA = U((SDG, n12) => {
    var L01 = function(A, Q) {
        if (Error.call(this, A), Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
        if (this.name = "JsonWebTokenError", this.message = A, Q) this.inner = Q
    };
    L01.prototype = Object.create(Error.prototype);
    L01.prototype.constructor = L01;
    n12.exports = L01
});
var Ho1 = U((_DG, s12) => {
    var a12 = tNA(),
        M01 = function(A, Q) {
            a12.call(this, A), this.name = "NotBeforeError", this.date = Q
        };
    M01.prototype = Object.create(a12.prototype);
    M01.prototype.constructor = M01;
    s12.exports = M01
});
var Co1 = U((kDG, o12) => {
    var r12 = tNA(),
        O01 = function(A, Q) {
            r12.call(this, A), this.name = "TokenExpiredError", this.expiredAt = Q
        };
    O01.prototype = Object.create(r12.prototype);
    O01.prototype.constructor = O01;
    o12.exports = O01
});
var Eo1 = U((yDG, t12) => {
    var u05 = aX1();
    t12.exports = function(A, Q) {
        var B = Q || Math.floor(Date.now() / 1000);
        if (typeof A === "string") {
            var G = u05(A);
            if (typeof G > "u") return;
            return Math.floor(B + G / 1000)
        } else if (typeof A === "number") return B + A;
        else return
    }
});
var A02 = U((xDG, e12) => {
    var m05 = WE();
    e12.exports = m05.satisfies(process.version, ">=15.7.0")
});
var B02 = U((vDG, Q02) => {
    var d05 = WE();
    Q02.exports = d05.satisfies(process.version, ">=16.9.0")
});
var zo1 = U((bDG, G02) => {
    var c05 = A02(),
        p05 = B02(),
        l05 = {
            ec: ["ES256", "ES384", "ES512"],
            rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
            "rsa-pss": ["PS256", "PS384", "PS512"]
        },
        i05 = {
            ES256: "prime256v1",
            ES384: "secp384r1",
            ES512: "secp521r1"
        };
    G02.exports = function(A, Q) {
        if (!A || !Q) return;
        let B = Q.asymmetricKeyType;
        if (!B) return;
        let G = l05[B];
        if (!G) throw Error(`Unknown key type "${B}".`);
        if (!G.includes(A)) throw Error(`"alg" parameter for "${B}" key type must be one of: ${G.join(", ")}.`);
        if (c05) switch (B) {
            case "ec":
                let Z = Q.asymmetricKeyDetails.namedCurve,
                    I = i05[A];
                if (Z !== I) throw Error(`"alg" parameter "${A}" requires curve "${I}".`);
                break;
            case "rsa-pss":
                if (p05) {
                    let Y = parseInt(A.slice(-3), 10),
                        {
                            hashAlgorithm: J,
                            mgf1HashAlgorithm: W,
                            saltLength: X
                        } = Q.asymmetricKeyDetails;
                    if (J !== `sha${Y}` || W !== J) throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${A}.`);
                    if (X !== void 0 && X > Y >> 3) throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${A}.`)
                }
                break
        }
    }
});
var Uo1 = U((fDG, Z02) => {
    var n05 = WE();
    Z02.exports = n05.satisfies(process.version, "^6.12.0 || >=8.0.0")
});
var J02 = U((hDG, Y02) => {
    var fZ = tNA(),
        a05 = Ho1(),
        I02 = Co1(),
        s05 = Do1(),
        r05 = Eo1(),
        o05 = zo1(),
        t05 = Uo1(),
        e05 = N01(),
        {
            KeyObject: AQ5,
            createSecretKey: QQ5,
            createPublicKey: BQ5
        } = UA("crypto"),
        $o1 = ["RS256", "RS384", "RS512"],
        GQ5 = ["ES256", "ES384", "ES512"],
        wo1 = ["RS256", "RS384", "RS512"],
        ZQ5 = ["HS256", "HS384", "HS512"];
    if (t05) $o1.splice($o1.length, 0, "PS256", "PS384", "PS512"), wo1.splice(wo1.length, 0, "PS256", "PS384", "PS512");
    Y02.exports = function(A, Q, B, G) {
        if (typeof B === "function" && !G) G = B, B = {};
        if (!B) B = {};
        B = Object.assign({}, B);
        let Z;
        if (G) Z = G;
        else Z = function(F, V) {
            if (F) throw F;
            return V
        };
        if (B.clockTimestamp && typeof B.clockTimestamp !== "number") return Z(new fZ("clockTimestamp must be a number"));
        if (B.nonce !== void 0 && (typeof B.nonce !== "string" || B.nonce.trim() === "")) return Z(new fZ("nonce must be a non-empty string"));
        if (B.allowInvalidAsymmetricKeyTypes !== void 0 && typeof B.allowInvalidAsymmetricKeyTypes !== "boolean") return Z(new fZ("allowInvalidAsymmetricKeyTypes must be a boolean"));
        let I = B.clockTimestamp || Math.floor(Date.now() / 1000);
        if (!A) return Z(new fZ("jwt must be provided"));
        if (typeof A !== "string") return Z(new fZ("jwt must be a string"));
        let Y = A.split(".");
        if (Y.length !== 3) return Z(new fZ("jwt malformed"));
        let J;
        try {
            J = s05(A, {
                complete: !0
            })
        } catch (F) {
            return Z(F)
        }
        if (!J) return Z(new fZ("invalid token"));
        let W = J.header,
            X;
        if (typeof Q === "function") {
            if (!G) return Z(new fZ("verify must be called asynchronous if secret or public key is provided as a callback"));
            X = Q
        } else X = function(F, V) {
            return V(null, Q)
        };
        return X(W, function(F, V) {
            if (F) return Z(new fZ("error in secret or public key callback: " + F.message));
            let K = Y[2].trim() !== "";
            if (!K && V) return Z(new fZ("jwt signature is required"));
            if (K && !V) return Z(new fZ("secret or public key must be provided"));
            if (!K && !B.algorithms) return Z(new fZ('please specify "none" in "algorithms" to verify unsigned tokens'));
            if (V != null && !(V instanceof AQ5)) try {
                V = BQ5(V)
            } catch (C) {
                try {
                    V = QQ5(typeof V === "string" ? Buffer.from(V) : V)
                } catch (E) {
                    return Z(new fZ("secretOrPublicKey is not valid key material"))
                }
            }
            if (!B.algorithms)
                if (V.type === "secret") B.algorithms = ZQ5;
                else if (["rsa", "rsa-pss"].includes(V.asymmetricKeyType)) B.algorithms = wo1;
            else if (V.asymmetricKeyType === "ec") B.algorithms = GQ5;
            else B.algorithms = $o1;
            if (B.algorithms.indexOf(J.header.alg) === -1) return Z(new fZ("invalid algorithm"));
            if (W.alg.startsWith("HS") && V.type !== "secret") return Z(new fZ(`secretOrPublicKey must be a symmetric key when using ${W.alg}`));
            else if (/^(?:RS|PS|ES)/.test(W.alg) && V.type !== "public") return Z(new fZ(`secretOrPublicKey must be an asymmetric key when using ${W.alg}`));
            if (!B.allowInvalidAsymmetricKeyTypes) try {
                o05(W.alg, V)
            } catch (C) {
                return Z(C)
            }
            let D;
            try {
                D = e05.verify(A, J.header.alg, V)
            } catch (C) {
                return Z(C)
            }
            if (!D) return Z(new fZ("invalid signature"));
            let H = J.payload;
            if (typeof H.nbf < "u" && !B.ignoreNotBefore) {
                if (typeof H.nbf !== "number") return Z(new fZ("invalid nbf value"));
                if (H.nbf > I + (B.clockTolerance || 0)) return Z(new a05("jwt not active", new Date(H.nbf * 1000)))
            }
            if (typeof H.exp < "u" && !B.ignoreExpiration) {
                if (typeof H.exp !== "number") return Z(new fZ("invalid exp value"));
                if (I >= H.exp + (B.clockTolerance || 0)) return Z(new I02("jwt expired", new Date(H.exp * 1000)))
            }
            if (B.audience) {
                let C = Array.isArray(B.audience) ? B.audience : [B.audience];
                if (!(Array.isArray(H.aud) ? H.aud : [H.aud]).some(function(w) {
                        return C.some(function(N) {
                            return N instanceof RegExp ? N.test(w) : N === w
                        })
                    })) return Z(new fZ("jwt audience invalid. expected: " + C.join(" or ")))
            }
            if (B.issuer) {
                if (typeof B.issuer === "string" && H.iss !== B.issuer || Array.isArray(B.issuer) && B.issuer.indexOf(H.iss) === -1) return Z(new fZ("jwt issuer invalid. expected: " + B.issuer))
            }
            if (B.subject) {
                if (H.sub !== B.subject) return Z(new fZ("jwt subject invalid. expected: " + B.subject))
            }
            if (B.jwtid) {
                if (H.jti !== B.jwtid) return Z(new fZ("jwt jwtid invalid. expected: " + B.jwtid))
            }
            if (B.nonce) {
                if (H.nonce !== B.nonce) return Z(new fZ("jwt nonce invalid. expected: " + B.nonce))
            }
            if (B.maxAge) {
                if (typeof H.iat !== "number") return Z(new fZ("iat required when maxAge is specified"));
                let C = r05(B.maxAge, H.iat);
                if (typeof C > "u") return Z(new fZ('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
                if (I >= C + (B.clockTolerance || 0)) return Z(new I02("maxAge exceeded", new Date(C * 1000)))
            }
            if (B.complete === !0) {
                let C = J.signature;
                return Z(null, {
                    header: W,
                    payload: H,
                    signature: C
                })
            }
            return Z(null, H)
        })
    }
});