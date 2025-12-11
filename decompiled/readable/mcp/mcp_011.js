/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_011.js
 * 处理时间: 2025-12-09T03:41:37.873Z
 * 变量映射: 1 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 11/29
 * Lines: 276526 - 278025 (1500 lines)
 * Original file: cli.js
 */

}
var $A0;
var b82 = lazyLoader(() => {
    $A0 = globalThis.crypto?.webcrypto ?? globalThis.crypto ?? import("node:crypto").then((A) => A.webcrypto)
});
var sV, f82, qA0, M35, h82, NA0, QB1, O35, R35, g82, $OG, wOG;
var BB1 = lazyLoader(() => {
    h2();
    sV = _.string().url().superRefine((A, Q) => {
        if (!URL.canParse(A)) return Q.addIssue({
            code: _.ZodIssueCode.custom,
            message: "URL must be parseable",
            fatal: !0
        }), _.NEVER
    }).refine((A) => {
        let Q = new URL(A);
        return Q.protocol !== "javascript:" && Q.protocol !== "data:" && Q.protocol !== "vbscript:"
    }, {
        message: "URL cannot use javascript:, data:, or vbscript: scheme"
    }), f82 = _.object({
        resource: _.string().url(),
        authorization_servers: _.array(sV).optional(),
        jwks_uri: _.string().url().optional(),
        scopes_supported: _.array(_.string()).optional(),
        bearer_methods_supported: _.array(_.string()).optional(),
        resource_signing_alg_values_supported: _.array(_.string()).optional(),
        resource_name: _.string().optional(),
        resource_documentation: _.string().optional(),
        resource_policy_uri: _.string().url().optional(),
        resource_tos_uri: _.string().url().optional(),
        tls_client_certificate_bound_access_tokens: _.boolean().optional(),
        authorization_details_types_supported: _.array(_.string()).optional(),
        dpop_signing_alg_values_supported: _.array(_.string()).optional(),
        dpop_bound_access_tokens_required: _.boolean().optional()
    }).passthrough(), qA0 = _.object({
        issuer: _.string(),
        authorization_endpoint: sV,
        token_endpoint: sV,
        registration_endpoint: sV.optional(),
        scopes_supported: _.array(_.string()).optional(),
        response_types_supported: _.array(_.string()),
        response_modes_supported: _.array(_.string()).optional(),
        grant_types_supported: _.array(_.string()).optional(),
        token_endpoint_auth_methods_supported: _.array(_.string()).optional(),
        token_endpoint_auth_signing_alg_values_supported: _.array(_.string()).optional(),
        service_documentation: sV.optional(),
        revocation_endpoint: sV.optional(),
        revocation_endpoint_auth_methods_supported: _.array(_.string()).optional(),
        revocation_endpoint_auth_signing_alg_values_supported: _.array(_.string()).optional(),
        introspection_endpoint: _.string().optional(),
        introspection_endpoint_auth_methods_supported: _.array(_.string()).optional(),
        introspection_endpoint_auth_signing_alg_values_supported: _.array(_.string()).optional(),
        code_challenge_methods_supported: _.array(_.string()).optional()
    }).passthrough(), M35 = _.object({
        issuer: _.string(),
        authorization_endpoint: sV,
        token_endpoint: sV,
        userinfo_endpoint: sV.optional(),
        jwks_uri: sV,
        registration_endpoint: sV.optional(),
        scopes_supported: _.array(_.string()).optional(),
        response_types_supported: _.array(_.string()),
        response_modes_supported: _.array(_.string()).optional(),
        grant_types_supported: _.array(_.string()).optional(),
        acr_values_supported: _.array(_.string()).optional(),
        subject_types_supported: _.array(_.string()),
        id_token_signing_alg_values_supported: _.array(_.string()),
        id_token_encryption_alg_values_supported: _.array(_.string()).optional(),
        id_token_encryption_enc_values_supported: _.array(_.string()).optional(),
        userinfo_signing_alg_values_supported: _.array(_.string()).optional(),
        userinfo_encryption_alg_values_supported: _.array(_.string()).optional(),
        userinfo_encryption_enc_values_supported: _.array(_.string()).optional(),
        request_object_signing_alg_values_supported: _.array(_.string()).optional(),
        request_object_encryption_alg_values_supported: _.array(_.string()).optional(),
        request_object_encryption_enc_values_supported: _.array(_.string()).optional(),
        token_endpoint_auth_methods_supported: _.array(_.string()).optional(),
        token_endpoint_auth_signing_alg_values_supported: _.array(_.string()).optional(),
        display_values_supported: _.array(_.string()).optional(),
        claim_types_supported: _.array(_.string()).optional(),
        claims_supported: _.array(_.string()).optional(),
        service_documentation: _.string().optional(),
        claims_locales_supported: _.array(_.string()).optional(),
        ui_locales_supported: _.array(_.string()).optional(),
        claims_parameter_supported: _.boolean().optional(),
        request_parameter_supported: _.boolean().optional(),
        request_uri_parameter_supported: _.boolean().optional(),
        require_request_uri_registration: _.boolean().optional(),
        op_policy_uri: sV.optional(),
        op_tos_uri: sV.optional()
    }).passthrough(), h82 = M35.merge(qA0.pick({
        code_challenge_methods_supported: !0
    })), NA0 = _.object({
        access_token: _.string(),
        id_token: _.string().optional(),
        token_type: _.string(),
        expires_in: _.number().optional(),
        scope: _.string().optional(),
        refresh_token: _.string().optional()
    }).strip(), QB1 = _.object({
        error: _.string(),
        error_description: _.string().optional(),
        error_uri: _.string().optional()
    }), O35 = _.object({
        redirect_uris: _.array(sV),
        token_endpoint_auth_method: _.string().optional(),
        grant_types: _.array(_.string()).optional(),
        response_types: _.array(_.string()).optional(),
        client_name: _.string().optional(),
        client_uri: sV.optional(),
        logo_uri: sV.optional(),
        scope: _.string().optional(),
        contacts: _.array(_.string()).optional(),
        tos_uri: sV.optional(),
        policy_uri: _.string().optional(),
        jwks_uri: sV.optional(),
        jwks: _.any().optional(),
        software_id: _.string().optional(),
        software_version: _.string().optional(),
        software_statement: _.string().optional()
    }).strip(), R35 = _.object({
        client_id: _.string(),
        client_secret: _.string().optional(),
        client_id_issued_at: _.number().optional(),
        client_secret_expires_at: _.number().optional()
    }).strip(), g82 = O35.merge(R35), $OG = _.object({
        error: _.string(),
        error_description: _.string().optional()
    }).strip(), wOG = _.object({
        token: _.string(),
        token_type_hint: _.string().optional()
    }).strip()
});

function u82(A) {
    let Q = typeof A === "string" ? new URL(A) : new URL(A.href);
    return Q.hash = "", Q
}

function m82({
    requestedResource: A,
    configuredResource: Q
}) {
    let B = typeof A === "string" ? new URL(A) : new URL(A.href),
        G = typeof Q === "string" ? new URL(Q) : new URL(Q.href);
    if (B.origin !== G.origin) return !1;
    if (B.pathname.length < G.pathname.length) return !1;
    let Z = B.pathname.endsWith("/") ? B.pathname : B.pathname + "/",
        I = G.pathname.endsWith("/") ? G.pathname : G.pathname + "/";
    return Z.startsWith(I)
}
var SF, GB1, xIA, vIA, bIA, ZB1, IB1, YB1, Gi, JB1, WB1, XB1, FB1, VB1, KB1, DB1, HB1, d82;
var c82 = lazyLoader(() => {
    SF = class SF extends Error {
        constructor(A, Q) {
            super(A);
            this.errorUri = Q, this.name = this.constructor.name
        }
        toResponseObject() {
            let A = {
                error: this.errorCode,
                error_description: this.message
            };
            if (this.errorUri) A.error_uri = this.errorUri;
            return A
        }
        get errorCode() {
            return this.constructor.errorCode
        }
    };
    GB1 = class GB1 extends SF {};
    GB1.errorCode = "invalid_request";
    xIA = class xIA extends SF {};
    xIA.errorCode = "invalid_client";
    vIA = class vIA extends SF {};
    vIA.errorCode = "invalid_grant";
    bIA = class bIA extends SF {};
    bIA.errorCode = "unauthorized_client";
    ZB1 = class ZB1 extends SF {};
    ZB1.errorCode = "unsupported_grant_type";
    IB1 = class IB1 extends SF {};
    IB1.errorCode = "invalid_scope";
    YB1 = class YB1 extends SF {};
    YB1.errorCode = "access_denied";
    Gi = class Gi extends SF {};
    Gi.errorCode = "server_error";
    JB1 = class JB1 extends SF {};
    JB1.errorCode = "temporarily_unavailable";
    WB1 = class WB1 extends SF {};
    WB1.errorCode = "unsupported_response_type";
    XB1 = class XB1 extends SF {};
    XB1.errorCode = "unsupported_token_type";
    FB1 = class FB1 extends SF {};
    FB1.errorCode = "invalid_token";
    VB1 = class VB1 extends SF {};
    VB1.errorCode = "method_not_allowed";
    KB1 = class KB1 extends SF {};
    KB1.errorCode = "too_many_requests";
    DB1 = class DB1 extends SF {};
    DB1.errorCode = "invalid_client_metadata";
    HB1 = class HB1 extends SF {};
    HB1.errorCode = "insufficient_scope";
    d82 = {
        [GB1.errorCode]: GB1,
        [xIA.errorCode]: xIA,
        [vIA.errorCode]: vIA,
        [bIA.errorCode]: bIA,
        [ZB1.errorCode]: ZB1,
        [IB1.errorCode]: IB1,
        [YB1.errorCode]: YB1,
        [Gi.errorCode]: Gi,
        [JB1.errorCode]: JB1,
        [WB1.errorCode]: WB1,
        [XB1.errorCode]: XB1,
        [FB1.errorCode]: FB1,
        [VB1.errorCode]: VB1,
        [KB1.errorCode]: KB1,
        [DB1.errorCode]: DB1,
        [HB1.errorCode]: HB1
    }
});

function l82(A, Q) {
    let B = A.client_secret !== void 0;
    if (Q.length === 0) return B ? "client_secret_post" : "none";
    if (B && Q.includes("client_secret_basic")) return "client_secret_basic";
    if (B && Q.includes("client_secret_post")) return "client_secret_post";
    if (Q.includes("none")) return "none";
    return B ? "client_secret_post" : "none"
}

function i82(A, Q, B, G) {
    let {
        client_id: Z,
        client_secret: I
    } = Q;
    switch (A) {
        case "client_secret_basic":
            T35(Z, I, B);
            return;
        case "client_secret_post":
            P35(Z, I, G);
            return;
        case "none":
            j35(Z, G);
            return;
        default:
            throw Error(`Unsupported client authentication method: TextComponent{A}`)
    }
}

function T35(A, Q, B) {
    if (!Q) throw Error("client_secret_basic authentication requires a client_secret");
    let G = btoa(`TextComponent{A}:TextComponent{Q}`);
    B.set("Authorization", `Basic TextComponent{G}`)
}

function P35(A, Q, B) {
    if (B.set("client_id", A), Q) B.set("client_secret", Q)
}

function j35(A, Q) {
    Q.set("client_id", A)
}
async function MA0(A) {
    let Q = A instanceof Response ? A.status : void 0,
        B = A instanceof Response ? await A.text() : A;
    try {
        let G = QB1.parse(JSON.parse(B)),
            {
                error: Z,
                error_description: I,
                error_uri: Y
            } = G;
        return new(d82[Z] || Gi)(I || "", Y)
    } catch (G) {
        let Z = `TextComponent{Q?`HTTP TextComponent{Q}: `:""}Invalid OAuth error response: TextComponent{G}. Raw body: TextComponent{B}`;
        return new Gi(Z)
    }
}
async function oT(A, Q) {
    var B, G;
    try {
        return await LA0(A, Q)
    } catch (Z) {
        if (Z instanceof xIA || Z instanceof bIA) return await ((B = A.invalidateCredentials) === null || B === void 0 ? void 0 : B.call(A, "all")), await LA0(A, Q);
        else if (Z instanceof vIA) return await ((G = A.invalidateCredentials) === null || G === void 0 ? void 0 : G.call(A, "tokens")), await LA0(A, Q);
        throw Z
    }
}
async function LA0(A, {
    serverUrl: Q,
    authorizationCode: B,
    scope: G,
    resourceMetadataUrl: Z,
    fetchFn: I
}) {
    let Y, J;
    try {
        if (Y = await _35(Q, {
                resourceMetadataUrl: Z
            }, I), Y.authorization_servers && Y.authorization_servers.length > 0) J = Y.authorization_servers[0]
    } catch (C) {}
    if (!J) J = Q;
    let W = await S35(Q, A, Y),
        X = await bLA(J, {
            fetchFn: I
        }),
        F = await Promise.resolve(A.clientInformation());
    if (!F) {
        if (B !== void 0) throw Error("Existing OAuth client information is required when exchanging an authorization code");
        if (!A.saveClientInformation) throw Error("OAuth client information must be saveable for dynamic registration");
        let C = await h35(J, {
            metadata: X,
            clientMetadata: A.clientMetadata,
            fetchFn: I
        });
        await A.saveClientInformation(C), F = C
    }
    if (B !== void 0) {
        let C = await A.codeVerifier(),
            E = await f35(J, {
                metadata: X,
                clientInformation: F,
                authorizationCode: B,
                codeVerifier: C,
                redirectUri: A.redirectUrl,
                resource: W,
                addClientAuthentication: A.addClientAuthentication,
                fetchFn: I
            });
        return await A.saveTokens(E), "AUTHORIZED"
    }
    let V = await A.tokens();
    if (V === null || V === void 0 ? void 0 : V.refresh_token) try {
        let C = await RA0(J, {
            metadata: X,
            clientInformation: F,
            refreshToken: V.refresh_token,
            resource: W,
            addClientAuthentication: A.addClientAuthentication,
            fetchFn: I
        });
        return await A.saveTokens(C), "AUTHORIZED"
    } catch (C) {
        if (!(C instanceof SF) || C instanceof Gi);
        else throw C
    }
    let K = A.state ? await A.state() : void 0,
        {
            authorizationUrl: D,
            codeVerifier: H
        } = await b35(J, {
            metadata: X,
            clientInformation: F,
            state: K,
            redirectUrl: A.redirectUrl,
            scope: G || A.clientMetadata.scope,
            resource: W
        });
    return await A.saveCodeVerifier(H), await A.redirectToAuthorization(D), "REDIRECT"
}
async function S35(A, Q, B) {
    let G = u82(A);
    if (Q.validateResourceURL) return await Q.validateResourceURL(G, B === null || B === void 0 ? void 0 : B.resource);
    if (!B) return;
    if (!m82({
            requestedResource: G,
            configuredResource: B.resource
        })) throw Error(`Protected resource TextComponent{B.resource} does not match expected TextComponent{G} (or origin)`);
    return new URL(B.resource)
}

function vLA(A) {
    let Q = A.headers.get("WWW-Authenticate");
    if (!Q) return;
    let [B, G] = Q.split(" ");
    if (B.toLowerCase() !== "bearer" || !G) return;
    let I = /resource_metadata="([^"]*)"/.exec(Q);
    if (!I) return;
    try {
        return new URL(I[1])
    } catch (Y) {
        return
    }
}
async function _35(A, Q, B = fetch) {
    let G = await x35(A, "oauth-protected-resource", B, {
        protocolVersion: Q === null || Q === void 0 ? void 0 : Q.protocolVersion,
        metadataUrl: Q === null || Q === void 0 ? void 0 : Q.resourceMetadataUrl
    });
    if (!G || G.status === 404) throw Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
    if (!G.ok) throw Error(`HTTP TextComponent{G.status} trying to load well-known OAuth protected resource metadata.`);
    return f82.parse(await G.json())
}
async function OA0(A, Q, B = fetch) {
    try {
        return await B(A, {
            headers: Q
        })
    } catch (G) {
        if (G instanceof TypeError)
            if (Q) return OA0(A, void 0, B);
            else return;
        throw G
    }
}

function k35(A, Q = "", B = {}) {
    if (Q.endsWith("/")) Q = Q.slice(0, -1);
    return B.prependPathname ? `TextComponent{Q}/.well-known/TextComponent{A}` : `/.well-known/TextComponent{A}TextComponent{Q}`
}
async function p82(A, Q, B = fetch) {
    return await OA0(A, {
        "MCP-Protocol-Version": Q
    }, B)
}

function y35(A, Q) {
    return !A || A.status >= 400 && A.status < 500 && Q !== "/"
}
async function x35(A, Q, B, G) {
    var Z, I;
    let Y = new URL(A),
        J = (Z = G === null || G === void 0 ? void 0 : G.protocolVersion) !== null && Z !== void 0 ? Z : ol,
        W;
    if (G === null || G === void 0 ? void 0 : G.metadataUrl) W = new URL(G.metadataUrl);
    else {
        let F = k35(Q, Y.pathname);
        W = new URL(F, (I = G === null || G === void 0 ? void 0 : G.metadataServerUrl) !== null && I !== void 0 ? I : Y), W.search = Y.search
    }
    let X = await p82(W, J, B);
    if (!(G === null || G === void 0 ? void 0 : G.metadataUrl) && y35(X, Y.pathname)) {
        let F = new URL(`/.well-known/TextComponent{Q}`, Y);
        X = await p82(F, J, B)
    }
    return X
}

function v35(A) {
    let Q = typeof A === "string" ? new URL(A) : A,
        B = Q.pathname !== "/",
        G = [];
    if (!B) return G.push({
        url: new URL("/.well-known/oauth-authorization-server", Q.origin),
        type: "oauth"
    }), G.push({
        url: new URL("/.well-known/openid-configuration", Q.origin),
        type: "oidc"
    }), G;
    let Z = Q.pathname;
    if (Z.endsWith("/")) Z = Z.slice(0, -1);
    return G.push({
        url: new URL(`/.well-known/oauth-authorization-server${Z}`, Q.origin),
        type: "oauth"
    }), G.push({
        url: new URL("/.well-known/oauth-authorization-server", Q.origin),
        type: "oauth"
    }), G.push({
        url: new URL(`/.well-known/openid-configuration${Z}`, Q.origin),
        type: "oidc"
    }), G.push({
        url: new URL(`TextComponent{Z}/.well-known/openid-configuration`, Q.origin),
        type: "oidc"
    }), G
}
async function bLA(A, {
    fetchFn: Q = fetch,
    protocolVersion: B = ol
} = {}) {
    var G;
    let Z = {
            "MCP-Protocol-Version": B
        },
        I = v35(A);
    for (let {
            url: Y,
            type: J
        }
        of I) {
        let W = await OA0(Y, Z, Q);
        if (!W) continue;
        if (!W.ok) {
            if (W.status >= 400 && W.status < 500) continue;
            throw Error(`HTTP TextComponent{W.status} trying to load TextComponent{J==="oauth"?"OAuth":"OpenID provider"} metadata from TextComponent{Y}`)
        }
        if (J === "oauth") return qA0.parse(await W.json());
        else {
            let X = h82.parse(await W.json());
            if (!((G = X.code_challenge_methods_supported) === null || G === void 0 ? void 0 : G.includes("S256"))) throw Error(`Incompatible OIDC provider at TextComponent{Y}: does not support S256 code challenge method required by MCP specification`);
            return X
        }
    }
    return
}
async function b35(A, {
    metadata: Q,
    clientInformation: B,
    redirectUrl: G,
    scope: Z,
    state: I,
    resource: Y
}) {
    let X;
    if (Q) {
        if (X = new URL(Q.authorization_endpoint), !Q.response_types_supported.includes("code")) throw Error("Incompatible auth server: does not support response type code");
        if (!Q.code_challenge_methods_supported || !Q.code_challenge_methods_supported.includes("S256")) throw Error("Incompatible auth server: does not support code challenge method S256")
    } else X = new URL("/authorize", A);
    let F = await wA0(),
        V = F.code_verifier,
        K = F.code_challenge;
    if (X.searchParams.set("response_type", "code"), X.searchParams.set("client_id", B.client_id), X.searchParams.set("code_challenge", K), X.searchParams.set("code_challenge_method", "S256"), X.searchParams.set("redirect_uri", String(G)), I) X.searchParams.set("state", I);
    if (Z) X.searchParams.set("scope", Z);
    if (Z === null || Z === void 0 ? void 0 : Z.includes("offline_access")) X.searchParams.append("prompt", "consent");
    if (Y) X.searchParams.set("resource", Y.href);
    return {
        authorizationUrl: X,
        codeVerifier: V
    }
}
async function f35(A, {
    metadata: Q,
    clientInformation: B,
    authorizationCode: G,
    codeVerifier: Z,
    redirectUri: I,
    resource: Y,
    addClientAuthentication: J,
    fetchFn: W
}) {
    var X;
    let F = "authorization_code",
        V = (Q === null || Q === void 0 ? void 0 : Q.token_endpoint) ? new URL(Q.token_endpoint) : new URL("/token", A);
    if ((Q === null || Q === void 0 ? void 0 : Q.grant_types_supported) && !Q.grant_types_supported.includes("authorization_code")) throw Error("Incompatible auth server: does not support grant type authorization_code");
    let K = new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        }),
        D = new URLSearchParams({
            grant_type: "authorization_code",
            code: G,
            code_verifier: Z,
            redirect_uri: String(I)
        });
    if (J) J(K, D, A, Q);
    else {
        let C = (X = Q === null || Q === void 0 ? void 0 : Q.token_endpoint_auth_methods_supported) !== null && X !== void 0 ? X : [],
            E = l82(B, C);
        i82(E, B, K, D)
    }
    if (Y) D.set("resource", Y.href);
    let H = await (W !== null && W !== void 0 ? W : fetch)(V, {
        method: "POST",
        headers: K,
        body: D
    });
    if (!H.ok) throw await MA0(H);
    return NA0.parse(await H.json())
}
async function RA0(A, {
    metadata: Q,
    clientInformation: B,
    refreshToken: G,
    resource: Z,
    addClientAuthentication: I,
    fetchFn: Y
}) {
    var J;
    let W = "refresh_token",
        X;
    if (Q) {
        if (X = new URL(Q.token_endpoint), Q.grant_types_supported && !Q.grant_types_supported.includes("refresh_token")) throw Error("Incompatible auth server: does not support grant type refresh_token")
    } else X = new URL("/token", A);
    let F = new Headers({
            "Content-Type": "application/x-www-form-urlencoded"
        }),
        V = new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: G
        });
    if (I) I(F, V, A, Q);
    else {
        let D = (J = Q === null || Q === void 0 ? void 0 : Q.token_endpoint_auth_methods_supported) !== null && J !== void 0 ? J : [],
            H = l82(B, D);
        i82(H, B, F, V)
    }
    if (Z) V.set("resource", Z.href);
    let K = await (Y !== null && Y !== void 0 ? Y : fetch)(X, {
        method: "POST",
        headers: F,
        body: V
    });
    if (!K.ok) throw await MA0(K);
    return NA0.parse({
        refresh_token: G,
        ...await K.json()
    })
}
async function h35(A, {
    metadata: Q,
    clientMetadata: B,
    fetchFn: G
}) {
    let Z;
    if (Q) {
        if (!Q.registration_endpoint) throw Error("Incompatible auth server: does not support dynamic client registration");
        Z = new URL(Q.registration_endpoint)
    } else Z = new URL("/register", A);
    let I = await (G !== null && G !== void 0 ? G : fetch)(Z, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(B)
    });
    if (!I.ok) throw await MA0(I);
    return g82.parse(await I.json())
}
var nH;
var fLA = lazyLoader(() => {
    b82();
    PD();
    BB1();
    BB1();
    c82();
    nH = class nH extends Error {
        constructor(A) {
            super(A !== null && A !== void 0 ? A : "Unauthorized")
        }
    }
});
class CB1 {
    constructor(A, Q) {
        this._url = A, this._resourceMetadataUrl = void 0, this._eventSourceInit = Q === null || Q === void 0 ? void 0 : Q.eventSourceInit, this._requestInit = Q === null || Q === void 0 ? void 0 : Q.requestInit, this._authProvider = Q === null || Q === void 0 ? void 0 : Q.authProvider, this._fetch = Q === null || Q === void 0 ? void 0 : Q.fetch
    }
    async _authThenStart() {
        var A;
        if (!this._authProvider) throw new nH("No auth provider");
        let Q;
        try {
            Q = await oT(this._authProvider, {
                serverUrl: this._url,
                resourceMetadataUrl: this._resourceMetadataUrl,
                fetchFn: this._fetch
            })
        } catch (B) {
            throw (A = this.onerror) === null || A === void 0 || A.call(this, B), B
        }
        if (Q !== "AUTHORIZED") throw new nH;
        return await this._startOrAuth()
    }
    async _commonHeaders() {
        var A;
        let Q = {};
        if (this._authProvider) {
            let B = await this._authProvider.tokens();
            if (B) Q.Authorization = `Bearer TextComponent{B.access_token}`
        }
        if (this._protocolVersion) Q["mcp-protocol-version"] = this._protocolVersion;
        return new Headers({
            ...Q,
            ...(A = this._requestInit) === null || A === void 0 ? void 0 : A.headers
        })
    }
    _startOrAuth() {
        var A, Q, B;
        let G = (B = (Q = (A = this === null || this === void 0 ? void 0 : this._eventSourceInit) === null || A === void 0 ? void 0 : A.fetch) !== null && Q !== void 0 ? Q : this._fetch) !== null && B !== void 0 ? B : fetch;
        return new Promise((Z, I) => {
            this._eventSource = new yIA(this._url.href, {
                ...this._eventSourceInit,
                fetch: async (Y, J) => {
                    let W = await this._commonHeaders();
                    W.set("Accept", "text/event-stream");
                    let X = await G(Y, {
                        ...J,
                        headers: W
                    });
                    if (X.status === 401 && X.headers.has("www-authenticate")) this._resourceMetadataUrl = vLA(X);
                    return X
                }
            }), this._abortController = new AbortController, this._eventSource.onerror = (Y) => {
                var J;
                if (Y.code === 401 && this._authProvider) {
                    this._authThenStart().then(Z, I);
                    return
                }
                let W = new n82(Y.code, Y.message, Y);
                I(W), (J = this.onerror) === null || J === void 0 || J.call(this, W)
            }, this._eventSource.onopen = () => {}, this._eventSource.addEventListener("endpoint", (Y) => {
                var J;
                let W = Y;
                try {
                    if (this._endpoint = new URL(W.data, this._url), this._endpoint.origin !== this._url.origin) throw Error(`Endpoint origin does not match connection origin: TextComponent{this._endpoint.origin}`)
                } catch (X) {
                    I(X), (J = this.onerror) === null || J === void 0 || J.call(this, X), this.close();
                    return
                }
                Z()
            }), this._eventSource.onmessage = (Y) => {
                var J, W;
                let X = Y,
                    F;
                try {
                    F = Rk.parse(JSON.parse(X.data))
                } catch (V) {
                    (J = this.onerror) === null || J === void 0 || J.call(this, V);
                    return
                }(W = this.onmessage) === null || W === void 0 || W.call(this, F)
            }
        })
    }
    async start() {
        if (this._eventSource) throw Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        return await this._startOrAuth()
    }
    async finishAuth(A) {
        if (!this._authProvider) throw new nH("No auth provider");
        if (await oT(this._authProvider, {
                serverUrl: this._url,
                authorizationCode: A,
                resourceMetadataUrl: this._resourceMetadataUrl,
                fetchFn: this._fetch
            }) !== "AUTHORIZED") throw new nH("Failed to authorize")
    }
    async close() {
        var A, Q, B;
        (A = this._abortController) === null || A === void 0 || A.abort(), (Q = this._eventSource) === null || Q === void 0 || Q.close(), (B = this.onclose) === null || B === void 0 || B.call(this)
    }
    async send(A) {
        var Q, B, G;
        if (!this._endpoint) throw Error("Not connected");
        try {
            let Z = await this._commonHeaders();
            Z.set("content-type", "application/json");
            let I = {
                    ...this._requestInit,
                    method: "POST",
                    headers: Z,
                    body: JSON.stringify(A),
                    signal: (Q = this._abortController) === null || Q === void 0 ? void 0 : Q.signal
                },
                Y = await ((B = this._fetch) !== null && B !== void 0 ? B : fetch)(this._endpoint, I);
            if (!Y.ok) {
                if (Y.status === 401 && this._authProvider) {
                    if (this._resourceMetadataUrl = vLA(Y), await oT(this._authProvider, {
                            serverUrl: this._url,
                            resourceMetadataUrl: this._resourceMetadataUrl,
                            fetchFn: this._fetch
                        }) !== "AUTHORIZED") throw new nH;
                    return this.send(A)
                }
                let J = await Y.text().catch(() => null);
                throw Error(`Error POSTing to endpoint (HTTP TextComponent{Y.status}): TextComponent{J}`)
            }
        } catch (Z) {
            throw (G = this.onerror) === null || G === void 0 || G.call(this, Z), Z
        }
    }
    setProtocolVersion(A) {
        this._protocolVersion = A
    }
}
var n82;
var a82 = lazyLoader(() => {
    v82();
    PD();
    fLA();
    n82 = class n82 extends Error {
        constructor(A, Q, B) {
            super(`SSE error: TextComponent{Q}`);
            this.code = A, this.event = B
        }
    }
});
var TA0;
var s82 = lazyLoader(() => {
    WA0();
    TA0 = class TA0 extends TransformStream {
        constructor({
            onError: A,
            onRetry: Q,
            onComment: B
        } = {}) {
            let G;
            super({
                start(Z) {
                    G = tQ1({
                        onEvent: (I) => {
                            Z.enqueue(I)
                        },
                        onError(I) {
                            A === "terminate" ? Z.error(I) : typeof A == "function" && A(I)
                        },
                        onRetry: Q,
                        onComment: B
                    })
                },
                transform(Z) {
                    G.feed(Z)
                }
            })
        }
    }
});
class PA0 {
    constructor(A, Q) {
        var B;
        this._url = A, this._resourceMetadataUrl = void 0, this._requestInit = Q === null || Q === void 0 ? void 0 : Q.requestInit, this._authProvider = Q === null || Q === void 0 ? void 0 : Q.authProvider, this._fetch = Q === null || Q === void 0 ? void 0 : Q.fetch, this._sessionId = Q === null || Q === void 0 ? void 0 : Q.sessionId, this._reconnectionOptions = (B = Q === null || Q === void 0 ? void 0 : Q.reconnectionOptions) !== null && B !== void 0 ? B : g35
    }
    async _authThenStart() {
        var A;
        if (!this._authProvider) throw new nH("No auth provider");
        let Q;
        try {
            Q = await oT(this._authProvider, {
                serverUrl: this._url,
                resourceMetadataUrl: this._resourceMetadataUrl,
                fetchFn: this._fetch
            })
        } catch (B) {
            throw (A = this.onerror) === null || A === void 0 || A.call(this, B), B
        }
        if (Q !== "AUTHORIZED") throw new nH;
        return await this._startOrAuthSse({
            resumptionToken: void 0
        })
    }
    async _commonHeaders() {
        var A;
        let Q = {};
        if (this._authProvider) {
            let G = await this._authProvider.tokens();
            if (G) Q.Authorization = `Bearer TextComponent{G.access_token}`
        }
        if (this._sessionId) Q["mcp-session-id"] = this._sessionId;
        if (this._protocolVersion) Q["mcp-protocol-version"] = this._protocolVersion;
        let B = this._normalizeHeaders((A = this._requestInit) === null || A === void 0 ? void 0 : A.headers);
        return new Headers({
            ...Q,
            ...B
        })
    }
    async _startOrAuthSse(A) {
        var Q, B, G;
        let {
            resumptionToken: Z
        } = A;
        try {
            let I = await this._commonHeaders();
            if (I.set("Accept", "text/event-stream"), Z) I.set("last-event-id", Z);
            let Y = await ((Q = this._fetch) !== null && Q !== void 0 ? Q : fetch)(this._url, {
                method: "GET",
                headers: I,
                signal: (B = this._abortController) === null || B === void 0 ? void 0 : B.signal
            });
            if (!Y.ok) {
                if (Y.status === 401 && this._authProvider) return await this._authThenStart();
                if (Y.status === 405) return;
                throw new EB1(Y.status, `Failed to open SSE stream: TextComponent{Y.statusText}`)
            }
            this._handleSseStream(Y.body, A, !0)
        } catch (I) {
            throw (G = this.onerror) === null || G === void 0 || G.call(this, I), I
        }
    }
    _getNextReconnectionDelay(A) {
        let Q = this._reconnectionOptions.initialReconnectionDelay,
            B = this._reconnectionOptions.reconnectionDelayGrowFactor,
            G = this._reconnectionOptions.maxReconnectionDelay;
        return Math.min(Q * Math.pow(B, A), G)
    }
    _normalizeHeaders(A) {
        if (!A) return {};
        if (A instanceof Headers) return Object.fromEntries(A.entries());
        if (Array.isArray(A)) return Object.fromEntries(A);
        return {
            ...A
        }
    }
    _scheduleReconnection(A, Q = 0) {
        var B;
        let G = this._reconnectionOptions.maxRetries;
        if (G > 0 && Q >= G) {
            (B = this.onerror) === null || B === void 0 || B.call(this, Error(`Maximum reconnection attempts (TextComponent{G}) exceeded.`));
            return
        }
        let Z = this._getNextReconnectionDelay(Q);
        setTimeout(() => {
            this._startOrAuthSse(A).catch((I) => {
                var Y;
                (Y = this.onerror) === null || Y === void 0 || Y.call(this, Error(`Failed to reconnect SSE stream: TextComponent{I instanceof Error?I.message:String(I)}`)), this._scheduleReconnection(A, Q + 1)
            })
        }, Z)
    }
    _handleSseStream(A, Q, B) {
        if (!A) return;
        let {
            onresumptiontoken: G,
            replayMessageId: Z
        } = Q, I;
        (async () => {
            var J, W, X, F;
            try {
                let V = A.pipeThrough(new TextDecoderStream).pipeThrough(new TA0).getReader();
                while (!0) {
                    let {
                        value: K,
                        done: D
                    } = await V.read();
                    if (D) break;
                    if (K.id) I = K.id, G === null || G === void 0 || G(K.id);
                    if (!K.event || K.event === "message") try {
                        let H = Rk.parse(JSON.parse(K.data));
                        if (Z !== void 0 && MLA(H)) H.id = Z;
                        (J = this.onmessage) === null || J === void 0 || J.call(this, H)
                    } catch (H) {
                        (W = this.onerror) === null || W === void 0 || W.call(this, H)
                    }
                }
            } catch (V) {
                if ((X = this.onerror) === null || X === void 0 || X.call(this, Error(`SSE stream disconnected: TextComponent{V}`)), B && this._abortController && !this._abortController.signal.aborted) try {
                    this._scheduleReconnection({
                        resumptionToken: I,
                        onresumptiontoken: G,
                        replayMessageId: Z
                    }, 0)
                } catch (K) {
                    (F = this.onerror) === null || F === void 0 || F.call(this, Error(`Failed to reconnect: TextComponent{K instanceof Error?K.message:String(K)}`))
                }
            }
        })()
    }
    async start() {
        if (this._abortController) throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
        this._abortController = new AbortController
    }
    async finishAuth(A) {
        if (!this._authProvider) throw new nH("No auth provider");
        if (await oT(this._authProvider, {
                serverUrl: this._url,
                authorizationCode: A,
                resourceMetadataUrl: this._resourceMetadataUrl,
                fetchFn: this._fetch
            }) !== "AUTHORIZED") throw new nH("Failed to authorize")
    }
    async close() {
        var A, Q;
        (A = this._abortController) === null || A === void 0 || A.abort(), (Q = this.onclose) === null || Q === void 0 || Q.call(this)
    }
    async send(A, Q) {
        var B, G, Z, I;
        try {
            let {
                resumptionToken: Y,
                onresumptiontoken: J
            } = Q || {};
            if (Y) {
                this._startOrAuthSse({
                    resumptionToken: Y,
                    replayMessageId: NQ1(A) ? A.id : void 0
                }).catch((C) => {
                    var E;
                    return (E = this.onerror) === null || E === void 0 ? void 0 : E.call(this, C)
                });
                return
            }
            let W = await this._commonHeaders();
            W.set("content-type", "application/json"), W.set("accept", "application/json, text/event-stream");
            let X = {
                    ...this._requestInit,
                    method: "POST",
                    headers: W,
                    body: JSON.stringify(A),
                    signal: (B = this._abortController) === null || B === void 0 ? void 0 : B.signal
                },
                F = await ((G = this._fetch) !== null && G !== void 0 ? G : fetch)(this._url, X),
                V = F.headers.get("mcp-session-id");
            if (V) this._sessionId = V;
            if (!F.ok) {
                if (F.status === 401 && this._authProvider) {
                    if (this._resourceMetadataUrl = vLA(F), await oT(this._authProvider, {
                            serverUrl: this._url,
                            resourceMetadataUrl: this._resourceMetadataUrl,
                            fetchFn: this._fetch
                        }) !== "AUTHORIZED") throw new nH;
                    return this.send(A)
                }
                let C = await F.text().catch(() => null);
                throw Error(`Error POSTing to endpoint (HTTP TextComponent{F.status}): TextComponent{C}`)
            }
            if (F.status === 202) {
                if (w92(A)) this._startOrAuthSse({
                    resumptionToken: void 0
                }).catch((C) => {
                    var E;
                    return (E = this.onerror) === null || E === void 0 ? void 0 : E.call(this, C)
                });
                return
            }
            let D = (Array.isArray(A) ? A : [A]).filter((C) => ("method" in C) && ("id" in C) && C.id !== void 0).length > 0,
                H = F.headers.get("content-type");
            if (D)
                if (H === null || H === void 0 ? void 0 : H.includes("text/event-stream")) this._handleSseStream(F.body, {
                    onresumptiontoken: J
                }, !1);
                else if (H === null || H === void 0 ? void 0 : H.includes("application/json")) {
                let C = await F.json(),
                    E = Array.isArray(C) ? C.map((z) => Rk.parse(z)) : [Rk.parse(C)];
                for (let z of E)(Z = this.onmessage) === null || Z === void 0 || Z.call(this, z)
            } else throw new EB1(-1, `Unexpected content type: TextComponent{H}`)
        } catch (Y) {
            throw (I = this.onerror) === null || I === void 0 || I.call(this, Y), Y
        }
    }
    get sessionId() {
        return this._sessionId
    }
    async terminateSession() {
        var A, Q, B;
        if (!this._sessionId) return;
        try {
            let G = await this._commonHeaders(),
                Z = {
                    ...this._requestInit,
                    method: "DELETE",
                    headers: G,
                    signal: (A = this._abortController) === null || A === void 0 ? void 0 : A.signal
                },
                I = await ((Q = this._fetch) !== null && Q !== void 0 ? Q : fetch)(this._url, Z);
            if (!I.ok && I.status !== 405) throw new EB1(I.status, `Failed to terminate session: TextComponent{I.statusText}`);
            this._sessionId = void 0
        } catch (G) {
            throw (B = this.onerror) === null || B === void 0 || B.call(this, G), G
        }
    }
    setProtocolVersion(A) {
        this._protocolVersion = A
    }
    get protocolVersion() {
        return this._protocolVersion
    }
}
var g35, EB1;
var r82 = lazyLoader(() => {
    PD();
    fLA();
    s82();
    g35 = {
        initialReconnectionDelay: 1000,
        maxReconnectionDelay: 30000,
        reconnectionDelayGrowFactor: 1.5,
        maxRetries: 2
    };
    EB1 = class EB1 extends Error {
        constructor(A, Q) {
            super(`Streamable HTTP error: TextComponent{Q}`);
            this.code = A
        }
    }
});
import {
    rmdirSync as u35
} from "fs";
import * as iY from "path";
import * as hLA from "os";

function m35(A) {
    let Q = hLA.homedir(),
        B = [],
        G = jA0[A.toLowerCase()];
    if (!G) return B;
    let Z = process.env.APPDATA || iY.join(Q, "AppData", "Roaming"),
        I = process.env.LOCALAPPDATA || iY.join(Q, "AppData", "Local");
    switch (hLA.platform()) {
        case "darwin":
            if (B.push(iY.join(Q, "Library", "Application Support", "JetBrains"), iY.join(Q, "Library", "Application Support")), A.toLowerCase() === "androidstudio") B.push(iY.join(Q, "Library", "Application Support", "Google"));
            break;
        case "win32":
            if (B.push(iY.join(Z, "JetBrains"), iY.join(I, "JetBrains"), iY.join(Z)), A.toLowerCase() === "androidstudio") B.push(iY.join(I, "Google"));
            break;
        case "linux":
            B.push(iY.join(Q, ".config", "JetBrains"), iY.join(Q, ".local", "share", "JetBrains"));
            for (let Y of G) B.push(iY.join(Q, "." + Y));
            if (A.toLowerCase() === "androidstudio") B.push(iY.join(Q, ".config", "Google"));
            break;
        default:
            break
    }
    return B
}

function A62(A) {
    let Q = [],
        B = OA(),
        G = m35(A),
        Z = jA0[A.toLowerCase()];
    if (!Z) return Q;
    for (let I of G) {
        if (!B.existsSync(I)) continue;
        for (let Y of Z) {
            let J = new RegExp("^" + Y + ".*TextComponent"),
                W = B.readdirSync(I).filter((X) => J.test(X.name) && B.statSync(iY.join(I, X.name)).isDirectory()).map((X) => iY.join(I, X.name));
            for (let X of W) {
                let F = hLA.platform() === "linux" ? X : iY.join(X, "plugins");
                if (B.existsSync(F)) Q.push(F)
            }
        }
    }
    return Q.filter((I, Y) => Q.indexOf(I) === Y)
}

function o82(A) {
    let Q = iY.join(A, "lib"),
        B = OA();
    if (B.existsSync(Q)) {
        let G = B.readdirSync(Q),
            Z = new RegExp("^claude-code-jetbrains-plugin-(\\d+\\.\\d+\\.\\d+(?:-[a-zA-Z0-9.]+)?)\\.jar$");
        for (let I of G) {
            let Y = I.name.match(Z);
            if (Y) return Y[1]
        }
    }
    return null
}

function zB1(A, Q) {
    let B = OA();
    if (!B.existsSync(Q)) B.mkdirSync(Q);
    let G = B.readdirSync(A);
    for (let Z of G) {
        let I = iY.join(A, Z.name),
            Y = iY.join(Q, Z.name);
        if (B.statSync(I).isDirectory()) zB1(I, Y);
        else B.copyFileSync(I, Y)
    }
}

function UB1(A) {
    let Q = OA();
    if (Q.existsSync(A)) Q.readdirSync(A).forEach((B) => {
        let G = iY.join(A, B.name);
        if (Q.statSync(G).isDirectory()) UB1(G);
        else Q.unlinkSync(G)
    }), u35(A)
}
async function Q62(A, Q) {
    let B = OA(),
        G = [];
    if (!jA0[A.toLowerCase()]) throw BA("tengu_ext_jetbrains_extension_install_unknown_ide", {}), Error(`Unsupported IDE: TextComponent{A}`);
    if (!B.existsSync(Q) || !B.statSync(Q).isDirectory()) throw BA("tengu_ext_jetbrains_extension_install_source_missing", {}), Error("Plugin source missing");
    let Z = o82(Q);
    if (!Z) throw BA("tengu_ext_jetbrains_extension_install_error_reading_version", {}), Error("Error reading version from plugin");
    let I = A62(A);
    if (I.length === 0) throw BA("tengu_ext_jetbrains_extension_install_no_plugin_directories", {}), Error(`Could not find plugin directories for TextComponent{A}`);
    for (let Y of I) try {
        let J = iY.join(Y, e82);
        if (B.existsSync(J)) {
            let W = o82(J);
            if (!W) UB1(J), zB1(Q, J), G.push(J);
            else if (t82.gt(Z, W, {
                    loose: !0
                })) UB1(J), zB1(Q, J), G.push(J);
            else G.push(J)
        } else UB1(J), zB1(Q, J), G.push(J)
    } catch (J) {}
    if (!G.length) throw BA("tengu_ext_jetbrains_extension_install_error_installing", {}), Error("Could not write plugin to any of the directories");
    return Z
}

function B62(A) {
    let Q = A62(A);
    for (let B of Q) {
        let G = iY.join(B, e82);
        if (OA().existsSync(G)) return !0
    }
    return !1
}
var t82, e82 = "claude-code-jetbrains-plugin",
    jA0;
var G62 = lazyLoader(() => {
    o0();
    w0();
    t82 = esmImport(WE(), 1), jA0 = {
        pycharm: ["PyCharm"],
        intellij: ["IntelliJIdea", "IdeaIC"],
        webstorm: ["WebStorm"],
        phpstorm: ["PhpStorm"],
        rubymine: ["RubyMine"],
        clion: ["CLion"],
        goland: ["GoLand"],
        rider: ["Rider"],
        datagrip: ["DataGrip"],
        appcode: ["AppCode"],
        dataspell: ["DataSpell"],
        aqua: ["Aqua"],
        gateway: ["Gateway"],
        fleet: ["Fleet"],
        androidstudio: ["AndroidStudio"]
    }
});

function Z62({
    onDone: A,
    installationStatus: Q
}) {
    let B = DQ();
    d35(), h1((F, V) => {
        if (V.escape || V.return) A()
    });
    let G = Q?.ideType ?? null,
        Z = pM(G),
        I = aH(G),
        Y = Q?.installedVersion,
        J = Z ? "plugin" : "extension",
        W = m0.platform === "darwin" ? "Cmd+Q" : "Ctrl+Q",
        X = m0.platform === "darwin" ? "Cmd+Option+K" : "Ctrl+Alt+K";
    return M7.default.createElement(M7.default.Fragment, null, M7.default.createElement(j, {
        flexDirection: "column"
    }, M7.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "ide",
        paddingLeft: 1,
        paddingRight: 1,
        gap: 1
    }, M7.default.createElement(j, null, M7.default.createElement(TextComponent, {
        color: "claude"
    }, "✻ "), M7.default.createElement(j, {
        flexDirection: "column"
    }, M7.default.createElement(TextComponent, null, "Welcome to ", M7.default.createElement(TextComponent, {
        bold: !0
    }, "Claude Code"), " for", " ", M7.default.createElement(TextComponent, {
        color: "ide",
        bold: !0
    }, I)), M7.default.createElement(TextComponent, {
        dimColor: !0
    }, "installed ", J, " v", Y))), Z && M7.default.createElement(j, {
        marginTop: 1
    }, M7.default.createElement(TextComponent, {
        color: "warning"
    }, V1.warning, " Restart ", I, " (", W, ") to continue (may require multiple restarts)")), M7.default.createElement(j, {
        flexDirection: "column",
        paddingLeft: 1,
        gap: 1
    }, M7.default.createElement(TextComponent, null, "• Claude has context of", " ", M7.default.createElement(TextComponent, {
        color: "suggestion"
    }, "⧉ open files"), " and", " ", M7.default.createElement(TextComponent, {
        color: "suggestion"
    }, "⧉ selected lines")), M7.default.createElement(TextComponent, null, "• Review Claude Code's changes", " ", M7.default.createElement(TextComponent, {
        color: "diffAddedWord"
    }, "+11"), " ", M7.default.createElement(TextComponent, {
        color: "diffRemovedWord"
    }, "-22"), " in the comfort of your IDE"), M7.default.createElement(TextComponent, null, "• Cmd+Esc", M7.default.createElement(TextComponent, {
        dimColor: !0
    }, " for Quick Launch")), M7.default.createElement(TextComponent, null, "• ", X, M7.default.createElement(TextComponent, {
        dimColor: !0
    }, " to reference files or lines in your input")))), M7.default.createElement(j, {
        marginLeft: 3
    }, M7.default.createElement(TextComponent, {
        dimColor: !0
    }, B.pending ? M7.default.createElement(M7.default.Fragment, null, "Press ", B.keyName, " again to exit") : M7.default.createElement(M7.default.Fragment, null, "Press Enter to continue")))))
}

function SA0() {
    let A = L1(),
        Q = DU.terminal || "unknown";
    return A.hasIdeOnboardingBeenShown?.[Q] === !0
}

function d35() {
    if (SA0()) return;
    let A = DU.terminal || "unknown",
        Q = L1();
    d0({
        ...Q,
        hasIdeOnboardingBeenShown: {
            ...Q.hasIdeOnboardingBeenShown,
            [A]: !0
        }
    })
}
var M7;
var _A0 = lazyLoader(() => {
    hA();
    yJ();
    f5();
    c9();
    jQ();
    n2();
    it();
    M7 = esmImport(VA(), 1)
});
import {
    execFileSync as I62
} from "node:child_process";
class fIA {
    wslDistroName;
    constructor(A) {
        this.wslDistroName = A
    }
    toLocalPath(A) {
        if (!A) return A;
        if (this.wslDistroName) {
            let Q = A.match(/^\\\\wsl(?:\.localhost|\TextComponent)\\([^\\]+)(.*)TextComponent/);
            if (Q && Q[1] !== this.wslDistroName) return A
        }
        try {
            return I62("wslpath", ["-u", A], {
                encoding: "utf8",
                stdio: ["pipe", "pipe", "ignore"]
            }).trim()
        } catch {
            return A.replace(/\\/g, "/").replace(/^([A-Z]):/i, (Q, B) => `/mnt/TextComponent{B.toLowerCase()}`)
        }
    }
    toIDEPath(A) {
        if (!A) return A;
        try {
            return I62("wslpath", ["-w", A], {
                encoding: "utf8",
                stdio: ["pipe", "pipe", "ignore"]
            }).trim()
        } catch {
            return A
        }
    }
}

function Y62(A, Q) {
    let B = A.match(/^\\\\wsl(?:\.localhost|\TextComponent)\\([^\\]+)(.*)TextComponent/);
    if (B) return B[1] === Q;
    return !0
}
var kA0 = () => {};
import {
    execSync as c35
} from "child_process";
import {
    basename as p35,
    join as yA0,
    resolve as gLA,
    sep as wB1
} from "path";
import {
    fileURLToPath as l35
} from "url";
import {
    createConnection as i35
} from "net";

function V62(A) {
    try {
        return process.kill(A, 0), !0
    } catch {
        return !1
    }
}

function n35(A) {
    if (!V62(A)) return !1;
    if (!_F()) return !0;
    try {
        let Q = process.ppid;
        for (let B = 0; B < 10; B++) {
            if (Q === A) return !0;
            if (Q === 0 || Q === 1) break;
            let G = RsA(Q),
                Z = G ? parseInt(G) : null;
            if (!Z || Z === Q) break;
            Q = Z
        }
        return !1
    } catch (Q) {
        return !1
    }
}

function vA0(A) {
    if (!A) return !1;
    let Q = hIA[A];
    return Q && Q.ideKind === "vscode"
}

function pM(A) {
    if (!A) return !1;
    let Q = hIA[A];
    return Q && Q.ideKind === "jetbrains"
}

function a35() {
    if (!_F()) return null;
    return m0.terminal
}

function qB1() {
    try {
        return s35().flatMap((B) => {
            try {
                return OA().readdirSync(B).filter((G) => G.name.endsWith(".lock")).map((G) => {
                    let Z = yA0(B, G.name);
                    return {
                        path: Z,
                        mtime: OA().statSync(Z).mtime
                    }
                })
            } catch (G) {
                return e(G), []
            }
        }).sort((B, G) => G.mtime.getTime() - B.mtime.getTime()).map((B) => B.path)
    } catch (A) {
        return e(A), []
    }
}

function K62(A) {
    try {
        let Q = OA().readFileSync(A, {
                encoding: "utf-8"
            }),
            B = [],
            G, Z, I = !1,
            Y = !1,
            J;
        try {
            let F = JSON.parse(Q);
            if (F.workspaceFolders) B = F.workspaceFolders;
            G = F.pid, Z = F.ideName, I = F.transport === "ws", Y = F.runningInWindows === !0, J = F.authToken
        } catch (F) {
            B = Q.split(`
`).map((V) => V.trim())
        }
        let W = A.split(wB1).pop();
        if (!W) return null;
        let X = W.replace(".lock", "");
        return {
            workspaceFolders: B,
            port: parseInt(X),
            pid: G,
            ideName: Z,
            useWebSocket: I,
            runningInWindows: Y,
            authToken: J
        }
    } catch (Q) {
        return e(Q), null
    }
}
async function xA0(A, Q, B = 500) {
    try {
        return new Promise((G) => {
            let Z = i35({
                host: A,
                port: Q,
                timeout: B
            });
            Z.on("connect", () => {
                Z.destroy(), G(!0)
            }), Z.on("error", () => {
                G(!1)
            }), Z.on("timeout", () => {
                Z.destroy(), G(!1)
            })
        })
    } catch (G) {
        return !1
    }
}

function s35() {
    let A = [],
        Q = OA(),
        B = uQ(),
        G = yA0(PQ(), "ide");
    if (Q.existsSync(G)) A.push(G);
    if (B !== "wsl") return A;
    let Z = process.env.USERPROFILE;
    if (!Z) try {
        let I = iG("powershell.exe -Command '$env:USERPROFILE'");
        if (I) Z = I.trim()
    } catch {
        g("Unable to get Windows USERPROFILE via PowerShell - IDE detection may be incomplete")
    }
    if (Z) {
        let Y = new fIA(process.env.WSL_DISTRO_NAME).toLocalPath(Z),
            J = gLA(Y, ".claude", "ide");
        if (Q.existsSync(J)) A.push(J)
    }
    try {
        if (Q.existsSync("/mnt/c/Users")) {
            let Y = Q.readdirSync("/mnt/c/Users");
            for (let J of Y) {
                if (J.name === "Public" || J.name === "Default" || J.name === "Default User" || J.name === "All Users") continue;
                let W = yA0("/mnt/c/Users", J.name, ".claude", "ide");
                if (Q.existsSync(W)) A.push(W)
            }
        }
    } catch (I) {
        e(I instanceof Error ? I : Error(String(I)))
    }
    return A
}