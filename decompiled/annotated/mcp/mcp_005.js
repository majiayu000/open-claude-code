/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: mcp_005.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (9次) = lazyLoader(fn) - Lazy module loader
 *   GA       (3次) = esmImport(module) - ESM import helper
 *   U        (1次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 5/29
 * Lines: 141843 - 143259 (1417 lines)
 * Original file: cli.js
 */

        if (B) Q.credentials = {
            accessKeyId: B.accessKeyId,
            secretAccessKey: B.secretAccessKey,
            sessionToken: B.sessionToken
        }
    }
    return new V3A.BedrockClient(Q)
}
var V3A, GQB, IQB;
var iy1 = L(() => {
    o2();
    hQ();
    u1();
    Vc();
    hB();
    V3A = GA(gxQ(), 1), GQB = t1(async function() {
        let A = await ZQB(),
            Q = [],
            B;
        try {
            do {
                let G = new V3A.ListInferenceProfilesCommand({
                        ...B && {
                            nextToken: B
                        },
                        typeEquals: "SYSTEM_DEFINED"
                    }),
                    Z = await A.send(G);
                if (Z.inferenceProfileSummaries) Q.push(...Z.inferenceProfileSummaries);
                B = Z.nextToken
            } while (B);
            return Q.filter((G) => G.inferenceProfileId?.includes("anthropic")).map((G) => G.inferenceProfileId).filter(Boolean)
        } catch (G) {
            throw e(G), G
        }
    });
    IQB = t1(async function(A) {
        try {
            let Q = await ZQB(),
                B = new V3A.GetInferenceProfileCommand({
                    inferenceProfileIdentifier: A
                }),
                G = await Q.send(B);
            if (!G.models || G.models.length === 0) return null;
            let Z = G.models[0];
            if (!Z?.modelArn) return null;
            let I = Z.modelArn.lastIndexOf("/");
            return I >= 0 ? Z.modelArn.substring(I + 1) : Z.modelArn
        } catch (Q) {
            return e(Q), null
        }
    })
});

function YQB(A) {
    if (J6() === "foundry") return;
    let Q = A.toLowerCase();
    if (Q.includes("claude-sonnet-4-5") && Q.includes("[1m]")) return "Sonnet 4.5 (with 1M context)";
    if (Q.includes("claude-sonnet-4-5")) return "Sonnet 4.5";
    if (Q.includes("claude-sonnet-4") && Q.includes("[1m]")) return "Sonnet 4 (with 1M context)";
    if (Q.includes("claude-sonnet-4")) return "Sonnet 4";
    if (Q.includes("claude-opus-4-5")) return "Opus 4.5";
    if (Q.includes("claude-opus-4-1")) return "Opus 4.1";
    if (Q.includes("claude-opus-4")) return "Opus 4";
    if (Q.includes("claude-3-7-sonnet")) return "Claude 3.7 Sonnet";
    if (Q.includes("claude-3-5-sonnet")) return "Claude 3.5 Sonnet";
    if (Q.includes("claude-haiku-4-5")) return "Haiku 4.5";
    if (Q.includes("claude-3-5-haiku")) return "Claude 3.5 Haiku";
    return
}
var gEA, uEA, mEA, dEA, _o, ny1, cEA, pEA, lEA;
var iEA = L(() => {
    dK();
    gEA = {
        firstParty: "claude-3-7-sonnet-20250219",
        bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
        vertex: "claude-3-7-sonnet@20250219",
        foundry: "claude-3-7-sonnet"
    }, uEA = {
        firstParty: "claude-3-5-sonnet-20241022",
        bedrock: "anthropic.claude-3-5-sonnet-20241022-v2:0",
        vertex: "claude-3-5-sonnet-v2@20241022",
        foundry: "claude-3-5-sonnet"
    }, mEA = {
        firstParty: "claude-3-5-haiku-20241022",
        bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
        vertex: "claude-3-5-haiku@20241022",
        foundry: "claude-3-5-haiku"
    }, dEA = {
        firstParty: "claude-haiku-4-5-20251001",
        bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
        vertex: "claude-haiku-4-5@20251001",
        foundry: "claude-haiku-4-5"
    }, _o = {
        firstParty: "claude-sonnet-4-20250514",
        bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
        vertex: "claude-sonnet-4@20250514",
        foundry: "claude-sonnet-4"
    }, ny1 = {
        firstParty: "claude-sonnet-4-5-20250929",
        bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
        vertex: "claude-sonnet-4-5@20250929",
        foundry: "claude-sonnet-4-5"
    }, cEA = {
        firstParty: "claude-opus-4-20250514",
        bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
        vertex: "claude-opus-4@20250514",
        foundry: "claude-opus-4"
    }, pEA = {
        firstParty: "claude-opus-4-1-20250805",
        bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
        vertex: "claude-opus-4-1@20250805",
        foundry: "claude-opus-4-1"
    }, lEA = {
        firstParty: "claude-opus-4-5-20251101",
        bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0",
        vertex: "claude-opus-4-5@20251101",
        foundry: "claude-opus-4-5"
    }
});

function I_(A) {
    let Q = [],
        B = !1;
    async function G() {
        if (B) return;
        if (Q.length === 0) return;
        B = !0;
        while (Q.length > 0) {
            let {
                args: Z,
                resolve: I,
                reject: Y,
                context: J
            } = Q.shift();
            try {
                let W = await A.apply(J, Z);
                I(W)
            } catch (W) {
                Y(W)
            }
        }
        if (B = !1, Q.length > 0) G()
    }
    return function(...Z) {
        return new Promise((I, Y) => {
            Q.push({
                args: Z,
                resolve: I,
                reject: Y,
                context: this
            }), G()
        })
    }
}

function ClA(A) {
    return {
        haiku35: mEA[A],
        haiku45: dEA[A],
        sonnet35: uEA[A],
        sonnet37: gEA[A],
        sonnet40: _o[A],
        sonnet45: ny1[A],
        opus40: cEA[A],
        opus41: pEA[A],
        opus45: lEA[A]
    }
}
async function Sp8() {
    let A;
    try {
        A = await GQB()
    } catch (F) {
        return e(F), ClA("bedrock")
    }
    if (!A?.length) return ClA("bedrock");
    let Q = Z_(A, "claude-3-5-haiku-20241022"),
        B = Z_(A, "claude-haiku-4-5-20251001"),
        G = Z_(A, "claude-3-5-sonnet-20241022"),
        Z = Z_(A, "claude-3-7-sonnet-20250219"),
        I = Z_(A, "claude-sonnet-4-20250514"),
        Y = Z_(A, "claude-sonnet-4-5-20250929"),
        J = Z_(A, "claude-opus-4-20250514"),
        W = Z_(A, "claude-opus-4-1-20250805"),
        X = Z_(A, "claude-opus-4-5-20251101");
    return {
        haiku35: Q || mEA.bedrock,
        haiku45: B || dEA.bedrock,
        sonnet35: G || uEA.bedrock,
        sonnet37: Z || gEA.bedrock,
        sonnet40: I || _o.bedrock,
        sonnet45: Y || ny1.bedrock,
        opus40: J || cEA.bedrock,
        opus41: W || pEA.bedrock,
        opus45: X || lEA.bedrock
    }
}

function kp8() {
    if (AkA() !== null) return;
    if (J6() !== "bedrock") {
        aW1(ClA(J6()));
        return
    }
    _p8()
}

function nI() {
    let A = AkA();
    if (A === null) return kp8(), ClA(J6());
    return A
}
var _p8;
var ay1 = L(() => {
    S0();
    u1();
    iy1();
    iEA();
    dK();
    _p8 = I_(async () => {
        if (AkA() !== null) return;
        try {
            let A = await Sp8();
            aW1(A)
        } catch (A) {
            e(A)
        }
    })
});

function JQB() {
    if (process.platform === "darwin") {
        let A = ym();
        iG(`security delete-generic-password -a $USER -s "${A}"`)
    }
}

function xw(A) {
    return A.slice(-20)
}
var nEA = L(() => {
    cKA();
    zxA()
});
class _H {
    static instance = null;
    status = {
        isAuthenticating: !1,
        output: []
    };
    listeners = new Set;
    static getInstance() {
        if (!_H.instance) _H.instance = new _H;
        return _H.instance
    }
    getStatus() {
        return {
            ...this.status,
            output: [...this.status.output]
        }
    }
    startAuthentication() {
        this.status = {
            isAuthenticating: !0,
            output: []
        }, this.notifyListeners()
    }
    addOutput(A) {
        this.status.output.push(A), this.notifyListeners()
    }
    setError(A) {
        this.status.error = A, this.notifyListeners()
    }
    endAuthentication(A) {
        if (A) this.status = {
            isAuthenticating: !1,
            output: []
        };
        else this.status.isAuthenticating = !1;
        this.notifyListeners()
    }
    subscribe(A) {
        return this.listeners.add(A), () => {
            this.listeners.delete(A)
        }
    }
    notifyListeners() {
        this.listeners.forEach((A) => A(this.getStatus()))
    }
    static reset() {
        if (_H.instance) _H.instance.listeners.clear(), _H.instance = null
    }
}
import {
    exec as yp8
} from "child_process";

function ZU() {
    let A = V0(process.env.CLAUDE_CODE_USE_BEDROCK) || V0(process.env.CLAUDE_CODE_USE_VERTEX) || V0(process.env.CLAUDE_CODE_USE_FOUNDRY),
        B = (c0() || {}).apiKeyHelper,
        G = process.env.ANTHROPIC_AUTH_TOKEN || B || process.env.CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR,
        {
            source: Z
        } = vw({
            skipRetrievingKeyFromApiKeyHelper: !0
        });
    return !(A || G || (Z === "ANTHROPIC_API_KEY" || Z === "apiKeyHelper") && !V0(process.env.CLAUDE_CODE_REMOTE))
}

function Kc() {
    if (process.env.ANTHROPIC_AUTH_TOKEN) return {
        source: "ANTHROPIC_AUTH_TOKEN",
        hasToken: !0
    };
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN) return {
        source: "CLAUDE_CODE_OAUTH_TOKEN",
        hasToken: !0
    };
    if (ZE1()) return {
        source: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
        hasToken: !0
    };
    if (aEA()) return {
        source: "apiKeyHelper",
        hasToken: !0
    };
    let B = U6();
    if (Xv(B?.scopes) && B?.accessToken) return {
        source: "claude.ai",
        hasToken: !0
    };
    return {
        source: "none",
        hasToken: !1
    }
}

function Zw() {
    let {
        key: A
    } = vw();
    return A
}

function XQB() {
    let {
        key: A,
        source: Q
    } = vw({
        skipRetrievingKeyFromApiKeyHelper: !0
    });
    return A !== null && Q !== "none"
}

function vw(A = {}) {
    if (_E0() && process.env.ANTHROPIC_API_KEY) return {
        key: process.env.ANTHROPIC_API_KEY,
        source: "ANTHROPIC_API_KEY"
    };
    if (V0(!1)) {
        let G = IE1();
        if (G) return {
            key: G,
            source: "ANTHROPIC_API_KEY"
        };
        if (!process.env.ANTHROPIC_API_KEY && !process.env.CLAUDE_CODE_OAUTH_TOKEN && !process.env.CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR) throw Error("ANTHROPIC_API_KEY or CLAUDE_CODE_OAUTH_TOKEN env var is required");
        if (process.env.ANTHROPIC_API_KEY) return {
            key: process.env.ANTHROPIC_API_KEY,
            source: "ANTHROPIC_API_KEY"
        };
        return {
            key: null,
            source: "none"
        }
    }
    if (process.env.ANTHROPIC_API_KEY && L1().customApiKeyResponses?.approved?.includes(xw(process.env.ANTHROPIC_API_KEY))) return {
        key: process.env.ANTHROPIC_API_KEY,
        source: "ANTHROPIC_API_KEY"
    };
    let Q = IE1();
    if (Q) return {
        key: Q,
        source: "ANTHROPIC_API_KEY"
    };
    if (A.skipRetrievingKeyFromApiKeyHelper) {
        if (aEA()) return {
            key: null,
            source: "apiKeyHelper"
        }
    } else {
        let G = sEA(H5());
        if (G) return {
            key: G,
            source: "apiKeyHelper"
        }
    }
    let B = rEA();
    if (B) return B;
    return {
        key: null,
        source: "none"
    }
}

function aEA() {
    return (c0() || {}).apiKeyHelper
}

function FQB() {
    let A = aEA();
    if (!A) return !1;
    let Q = LB("projectSettings"),
        B = LB("localSettings");
    return Q?.apiKeyHelper === A || B?.apiKeyHelper === A
}

function sy1() {
    return (c0() || {}).awsAuthRefresh
}

function VQB() {
    let A = sy1();
    if (!A) return !1;
    let Q = LB("projectSettings"),
        B = LB("localSettings");
    return Q?.awsAuthRefresh === A || B?.awsAuthRefresh === A
}

function ry1() {
    return (c0() || {}).awsCredentialExport
}

function KQB() {
    let A = ry1();
    if (!A) return !1;
    let Q = LB("projectSettings"),
        B = LB("localSettings");
    return Q?.awsCredentialExport === A || B?.awsCredentialExport === A
}

function vp8() {
    let A = process.env.CLAUDE_CODE_API_KEY_HELPER_TTL_MS;
    if (A) {
        let Q = parseInt(A, 10);
        if (!Number.isNaN(Q) && Q >= 0) return Q;
        g(`Found CLAUDE_CODE_API_KEY_HELPER_TTL_MS env var, but it was not a valid number. Got ${A}`, {
            level: "error"
        })
    }
    return xp8
}

function ElA() {
    sEA.cache.clear()
}

function DQB(A) {
    if (aEA()) {
        if (FQB()) {
            if (!_X(!0)) return
        }
    }
    sEA(A)
}
async function fp8() {
    let A = sy1();
    if (!A) return !1;
    if (VQB()) {
        if (!_X(!0) && !H5()) {
            let B = Error(`Security: awsAuthRefresh executed before workspace trust is confirmed. If you see this message, post in ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.FEEDBACK_CHANNEL}.`);
            return yN("awsAuthRefresh invoked before trust check", B), BA("tengu_awsAuthRefresh_missing_trust", {}), !1
        }
    }
    try {
        return g("Fetching AWS caller identity for AWS auth refresh command"), await LO1(), g("Fetched AWS caller identity, skipping AWS auth refresh command"), !1
    } catch {
        return HQB(A)
    }
}

function HQB(A) {
    g("Running AWS auth refresh command");
    let Q = _H.getInstance();
    return Q.startAuthentication(), new Promise((B) => {
        let G = yp8(A);
        G.stdout.on("data", (Z) => {
            let I = Z.toString().trim();
            if (I) Q.addOutput(I), g(I, {
                level: "debug"
            })
        }), G.stderr.on("data", (Z) => {
            let I = Z.toString().trim();
            if (I) Q.setError(I), g(I, {
                level: "error"
            })
        }), G.on("close", (Z) => {
            if (Z === 0) g("AWS auth refresh completed successfully"), Q.endAuthentication(!0), B(!0);
            else {
                let I = oA.red("Error running awsAuthRefresh (in settings or ~/.claude.json):");
                console.error(I), Q.endAuthentication(!1), B(!1)
            }
        })
    })
}
async function hp8() {
    let A = ry1();
    if (!A) return null;
    if (KQB()) {
        if (!_X(!0) && !H5()) {
            let B = Error(`Security: awsCredentialExport executed before workspace trust is confirmed. If you see this message, post in ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.FEEDBACK_CHANNEL}.`);
            return yN("awsCredentialExport invoked before trust check", B), BA("tengu_awsCredentialExport_missing_trust", {}), null
        }
    }
    try {
        return g("Fetching AWS caller identity for credential export command"), await LO1(), g("Fetched AWS caller identity, skipping AWS credential export command"), null
    } catch {
        try {
            g("Running AWS credential export command");
            let Q = iG(A)?.toString().trim();
            if (!Q) throw Error("awsCredentialExport did not return a valid value");
            let B = JSON.parse(Q);
            if (!RNQ(B)) throw Error("awsCredentialExport did not return valid AWS STS output structure");
            return g("AWS credentials retrieved from awsCredentialExport"), {
                accessKeyId: B.Credentials.AccessKeyId,
                secretAccessKey: B.Credentials.SecretAccessKey,
                sessionToken: B.Credentials.SessionToken
            }
        } catch (Q) {
            let B = oA.red("Error getting AWS credentials from awsCredentialExport (in settings or ~/.claude.json):");
            if (Q instanceof Error && "stderr" in Q) console.error(B, String(Q.stderr));
            else if (Q instanceof Error) console.error(B, Q.message);
            else console.error(B, Q);
            return null
        }
    }
}

function zlA() {
    K3A.cache.clear()
}

function CQB() {
    let A = sy1(),
        Q = ry1();
    if (!A && !Q) return;
    if (VQB() || KQB()) {
        if (!_X(!0) && !H5()) return
    }
    K3A(), nI()
}

function gp8(A) {
    return /^[a-zA-Z0-9-_]+$/.test(A)
}

function An0(A) {
    if (!gp8(A)) throw Error("Invalid API key format. API key must contain only alphanumeric characters, dashes, and underscores.");
    let Q = L1();
    if (zQB(), process.platform === "darwin") try {
        let G = ym(),
            Z = dKA(),
            I = Buffer.from(A, "utf-8").toString("hex"),
            Y = `add-generic-password -U -a "${Z}" -s "${G}" -X "${I}"
`;
        iG("security -i", {
            input: Y,
            stdio: ["pipe", "pipe", "pipe"]
        }), BA("tengu_api_key_saved_to_keychain", {})
    } catch (G) {
        e(G), BA("tengu_api_key_keychain_error", {
            error: G.message
        }), Q.primaryApiKey = A, BA("tengu_api_key_saved_to_config", {})
    } else Q.primaryApiKey = A, BA("tengu_api_key_saved_to_config", {});
    if (!Q.customApiKeyResponses) Q.customApiKeyResponses = {
        approved: [],
        rejected: []
    };
    if (!Q.customApiKeyResponses.approved) Q.customApiKeyResponses.approved = [];
    let B = xw(A);
    if (!Q.customApiKeyResponses.approved.includes(B)) Q.customApiKeyResponses.approved.push(B);
    d0(Q), rEA.cache.clear?.()
}

function EQB() {
    zQB();
    let A = L1();
    A.primaryApiKey = void 0, d0(A), rEA.cache.clear?.()
}

function zQB() {
    try {
        JQB()
    } catch (A) {
        e(A)
    }
}

function oEA(A) {
    if (!Xv(A.scopes)) return BA("tengu_oauth_tokens_not_claude_ai", {}), {
        success: !0
    };
    if (!A.refreshToken || !A.expiresAt) return BA("tengu_oauth_tokens_inference_only", {}), {
        success: !0
    };
    let Q = Gw(),
        B = Q.name;
    try {
        let G = Q.read() || {};
        G.claudeAiOauth = {
            accessToken: A.accessToken,
            refreshToken: A.refreshToken,
            expiresAt: A.expiresAt,
            scopes: A.scopes,
            subscriptionType: A.subscriptionType,
            rateLimitTier: A.rateLimitTier
        };
        let Z = Q.update(G);
        if (Z.success) BA("tengu_oauth_tokens_saved", {
            storageBackend: B
        });
        else BA("tengu_oauth_tokens_save_failed", {
            storageBackend: B
        });
        return U6.cache?.clear?.(), W4A(), Z
    } catch (G) {
        return e(G), BA("tengu_oauth_tokens_save_exception", {
            storageBackend: B,
            error: G.message
        }), {
            success: !1,
            warning: "Failed to save OAuth tokens"
        }
    }
}
async function ko(A = 0) {
    let B = U6();
    if (!B?.refreshToken || !xm(B.expiresAt)) return !1;
    if (!Xv(B.scopes)) return !1;
    if (U6.cache?.clear?.(), B = U6(), !B?.refreshToken || !xm(B.expiresAt)) return !1;
    let G = PQ();
    OA().mkdirSync(G);
    let I;
    try {
        I = await WQB.lock(G)
    } catch (Y) {
        if (Y.code === "ELOCKED") {
            if (A < 5) return BA("tengu_oauth_token_refresh_lock_retry", {
                retryCount: A + 1
            }), await new Promise((J) => setTimeout(J, 1000 + Math.random() * 1000)), ko(A + 1);
            return BA("tengu_oauth_token_refresh_lock_retry_limit_reached", {
                maxRetries: 5
            }), !1
        }
        return e(Y), BA("tengu_oauth_token_refresh_lock_error", {
            error: Y.message
        }), !1
    }
    try {
        if (U6.cache?.clear?.(), B = U6(), !B?.refreshToken || !xm(B.expiresAt)) return BA("tengu_oauth_token_refresh_race_resolved", {}), !1;
        let Y = await ri0(B.refreshToken);
        return oEA(Y), U6.cache?.clear?.(), !0
    } catch (Y) {
        return e(Y instanceof Error ? Y : Error(String(Y))), !1
    } finally {
        await I()
    }
}

function AB() {
    if (!ZU()) return !1;
    return Xv(U6()?.scopes)
}

function UQB() {
    if (V0(process.env.CLAUDE_CODE_USE_BEDROCK) || V0(process.env.CLAUDE_CODE_USE_VERTEX) || V0(process.env.CLAUDE_CODE_USE_FOUNDRY)) return !1;
    if (AB()) return !1;
    return !0
}

function i6() {
    return ZU() ? L1().oauthAccount : void 0
}

function bw() {
    let A = i6(),
        Q = x4();
    return Q === "max" || Q === "enterprise" || Q === "team" || Q === null || Q === "pro" && A?.hasExtraUsageEnabled === !0
}

function x4() {
    if (In0()) return Zn0();
    if (!ZU()) return null;
    let A = U6();
    if (!A) return null;
    return A.subscriptionType ?? null
}

function Dc() {
    if (!ZU()) return null;
    let A = U6();
    if (!A) return null;
    return A.rateLimitTier ?? null
}

function oy1() {
    switch (x4()) {
        case "enterprise":
            return "Claude Enterprise";
        case "team":
            return "Claude Team";
        case "max":
            return "Claude Max";
        case "pro":
            return "Claude Pro";
        default:
            return "Claude API"
    }
}

function Y_() {
    return !!(V0(process.env.CLAUDE_CODE_USE_BEDROCK) || V0(process.env.CLAUDE_CODE_USE_VERTEX) || V0(process.env.CLAUDE_CODE_USE_FOUNDRY))
}

function $QB() {
    return (c0() || {}).otelHeadersHelper
}

function tEA() {
    let A = $QB();
    if (!A) return !1;
    let Q = LB("projectSettings"),
        B = LB("localSettings");
    return Q?.otelHeadersHelper === A || B?.otelHeadersHelper === A
}

function wQB() {
    let A = $QB();
    if (!A) return {};
    if (tEA()) {
        if (!_X(!0)) return {}
    }
    try {
        let Q = iG(A)?.toString().trim();
        if (!Q) throw Error("otelHeadersHelper did not return a valid value");
        let B = JSON.parse(Q);
        if (typeof B !== "object" || B === null || Array.isArray(B)) throw Error("otelHeadersHelper must return a JSON object with string key-value pairs");
        for (let [G, Z] of Object.entries(B))
            if (typeof Z !== "string") throw Error(`otelHeadersHelper returned non-string value for key "${G}": ${typeof Z}`);
        return B
    } catch (Q) {
        throw e(Error(`Error getting OpenTelemetry headers from otelHeadersHelper (in settings): ${Q instanceof Error?Q.message:String(Q)}`)), Q
    }
}

function up8(A) {
    return A === "max" || A === "pro"
}

function UlA() {
    let A = x4();
    return AB() && A !== null && up8(A)
}

function $lA() {
    if (J6() !== "firstParty") return;
    let {
        source: Q
    } = Kc(), B = {};
    if (AB()) B.subscription = oy1();
    else B.tokenSource = Q;
    let {
        key: G,
        source: Z
    } = vw();
    if (G) B.apiKeySource = Z;
    if (Q === "claude.ai" || Z === "/login managed key") {
        let Y = i6()?.organizationName;
        if (Y) B.organization = Y
    }
    let I = i6()?.emailAddress;
    if ((Q === "claude.ai" || Z === "/login managed key") && I) B.email = I;
    return B
}
var WQB, xp8 = 300000,
    sEA, bp8 = 3600000,
    K3A, rEA, U6;
var hB = L(() => {
    jQ();
    RB();
    I6();
    o2();
    kvA();
    u1();
    D0();
    J9();
    vvA();
    ai0();
    pN();
    gvA();
    ej();
    o0();
    hQ();
    cKA();
    S0();
    MO1();
    w0();
    dK();
    ay1();
    nEA();
    WQB = GA(hKA(), 1);
    sEA = oC1((A) => {
        let Q = aEA();
        if (!Q) return null;
        if (FQB()) {
            if (!_X(!0) && !A) {
                let G = Error(`Security: apiKeyHelper executed before workspace trust is confirmed. If you see this message, post in ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.FEEDBACK_CHANNEL}.`);
                yN("apiKeyHelper invoked before trust check", G), BA("tengu_apiKeyHelper_missing_trust6", {})
            }
        }
        try {
            let B = iG(Q)?.toString().trim();
            if (!B) throw Error("apiKeyHelper did not return a valid value");
            return B
        } catch (B) {
            let G = oA.red("Error getting API key from apiKeyHelper (in settings or ~/.claude.json):");
            if (B instanceof Error && "stderr" in B) console.error(G, String(B.stderr));
            else if (B instanceof Error) console.error(G, B.message);
            else console.error(G, B);
            return " "
        }
    }, vp8());
    K3A = oC1(async () => {
        let A = await fp8(),
            Q = await hp8();
        if (A || Q) await TNQ();
        return Q
    }, bp8);
    rEA = t1(() => {
        if (process.platform === "darwin") {
            let Q = ym();
            try {
                let B = iG(`security find-generic-password -a $USER -w -s "${Q}"`);
                if (B) return {
                    key: B,
                    source: "/login managed key"
                }
            } catch (B) {
                e(B)
            }
        }
        let A = L1();
        if (!A.primaryApiKey) return null;
        return {
            key: A.primaryApiKey,
            source: "/login managed key"
        }
    });
    U6 = t1(() => {
        if (process.env.CLAUDE_CODE_OAUTH_TOKEN) return {
            accessToken: process.env.CLAUDE_CODE_OAUTH_TOKEN,
            refreshToken: null,
            expiresAt: null,
            scopes: ["user:inference"],
            subscriptionType: null,
            rateLimitTier: null
        };
        let A = ZE1();
        if (A) return {
            accessToken: A,
            refreshToken: null,
            expiresAt: null,
            scopes: ["user:inference"],
            subscriptionType: null,
            rateLimitTier: null
        };
        try {
            let G = Gw().read()?.claudeAiOauth;
            if (!G?.accessToken) return null;
            return G
        } catch (Q) {
            return e(Q), null
        }
    })
});
import {
    resolve as NQB,
    dirname as LQB,
    normalize as mp8,
    join as yo
} from "path";
import {
    randomBytes as dp8,
    randomUUID as cp8
} from "crypto";
import {
    execSync as pp8
} from "child_process";

function _X(A) {
    let Q = Hc(gK(), fw);
    if (Q.bypassPermissionsModeAccepted) return !0;
    let B = Qx1();
    if (Q.projects?.[B]?.hasTrustDialogAccepted) return !0;
    let Z = H0();
    if (A) return Q.projects?.[Z]?.hasTrustDialogAccepted === !0;
    while (!0) {
        if (Q.projects?.[Z]?.hasTrustDialogAccepted) return !0;
        let Y = NQB(Z, "..");
        if (Y === Z) break;
        Z = Y
    }
    return !1
}

function d0(A) {
    try {
        RQB(gK(), fw, (Q) => ({
            ...A,
            projects: qQB(Q.projects)
        })), Ob.config = null, Ob.mtime = 0
    } catch (Q) {
        g(`Failed to save config with lock: ${Q}`, {
            level: "error"
        });
        let B = Hc(gK(), fw);
        OQB(gK(), {
            ...A,
            projects: qQB(B.projects)
        }, fw), Ob.config = null, Ob.mtime = 0
    }
}

function ty1(A) {
    if (A.installMethod !== void 0) return A;
    let Q = "unknown",
        B = A.autoUpdates ?? !0;
    switch (A.autoUpdaterStatus) {
        case "migrated":
            Q = "local";
            break;
        case "installed":
            Q = "native";
            break;
        case "disabled":
            B = !1;
            break;
        case "enabled":
        case "no_permissions":
        case "not_configured":
            Q = "global";
            break;
        case void 0:
            break
    }
    return {
        ...A,
        installMethod: Q,
        autoUpdates: B
    }
}

function qQB(A) {
    if (!A) return A;
    let Q = {},
        B = !1;
    for (let [G, Z] of Object.entries(A))
        if (Z.history !== void 0) {
            B = !0;
            let {
                history: I,
                ...Y
            } = Z;
            Q[G] = Y
        } else Q[G] = Z;
    return B ? Q : A
}

function L1() {
    try {
        let A = OA().existsSync(gK()) ? OA().statSync(gK()) : null;
        if (Ob.config && A) {
            if (A.mtimeMs <= Ob.mtime) return Ob.config
        }
        let Q = ty1(Hc(gK(), fw));
        if (A) Ob = {
            config: Q,
            mtime: A.mtimeMs
        };
        else Ob = {
            config: Q,
            mtime: Date.now()
        };
        return ty1(Q)
    } catch {
        return ty1(Hc(gK(), fw))
    }
}

function wlA(A) {
    let Q = L1();
    if (Q.customApiKeyResponses?.approved?.includes(A)) return "approved";
    if (Q.customApiKeyResponses?.rejected?.includes(A)) return "rejected";
    return "new"
}

function OQB(A, Q, B) {
    let G = LQB(A),
        Z = OA();
    if (!Z.existsSync(G)) Z.mkdirSync(G);
    let I = Object.fromEntries(Object.entries(Q).filter(([Y, J]) => JSON.stringify(J) !== JSON.stringify(B[Y])));
    J_(A, JSON.stringify(I, null, 2), {
        encoding: "utf-8",
        mode: !Z.existsSync(A) ? 384 : void 0
    })
}

function RQB(A, Q, B) {
    let G = LQB(A),
        Z = OA();
    if (!Z.existsSync(G)) Z.mkdirSync(G);
    let I;
    try {
        let Y = `${A}.lock`,
            J = Date.now();
        if (I = MQB.lockSync(A, {
                lockfilePath: Y
            }), Date.now() - J > 100) g("Lock acquisition took longer than expected - another Claude instance may be running");
        let X = Hc(A, Q),
            F = B(X),
            V = Object.fromEntries(Object.entries(F).filter(([K, D]) => JSON.stringify(D) !== JSON.stringify(Q[K])));
        if (Z.existsSync(A)) try {
            let K = `${A}.backup`;
            Z.copyFileSync(A, K)
        } catch (K) {
            g(`Failed to backup config: ${K}`, {
                level: "error"
            })
        }
        J_(A, JSON.stringify(V, null, 2), {
            encoding: "utf-8",
            mode: !Z.existsSync(A) ? 384 : void 0
        })
    } finally {
        if (I) I()
    }
}

function qlA() {
    if (Ax1) return;
    Ax1 = !0, Hc(gK(), fw, !0)
}

function Hc(A, Q, B) {
    if (!Ax1) throw Error("Config accessed before allowed.");
    let G = OA();
    if (!G.existsSync(A)) {
        let Z = `${A}.backup`;
        if (G.existsSync(Z)) process.stdout.write(`
Claude configuration file not found at: ${A}
A backup file exists at: ${Z}
You can manually restore it by running: cp "${Z}" "${A}"

`);
        return Jv(Q)
    }
    try {
        let Z = G.readFileSync(A, {
            encoding: "utf-8"
        });
        try {
            let I = JSON.parse(Z);
            return {
                ...Jv(Q),
                ...I
            }
        } catch (I) {
            let Y = I instanceof Error ? I.message : String(I);
            throw new uz(Y, A, Q)
        }
    } catch (Z) {
        if (Z instanceof uz && B) throw Z;
        if (Z instanceof uz) {
            g(`Config file corrupted, resetting to defaults: ${Z.message}`, {
                level: "error"
            }), e(Z), process.stdout.write(`
Claude configuration file at ${A} is corrupted: ${Z.message}
`);
            let I = `${A}.corrupted.${Date.now()}`;
            try {
                G.copyFileSync(A, I), g(`Corrupted config backed up to: ${I}`, {
                    level: "error"
                })
            } catch {}
            let Y = `${A}.backup`;
            if (process.stdout.write(`
Claude configuration file at ${A} is corrupted
The corrupted file has been backed up to: ${I}
`), G.existsSync(Y)) process.stdout.write(`A backup file exists at: ${Y}
You can manually restore it by running: cp "${Y}" "${A}"

`);
            else process.stdout.write(`
`)
        }
        return Jv(Q)
    }
}

function M5() {
    let A = Qx1(),
        Q = Hc(gK(), fw);
    if (!Q.projects) return ey1;
    let B = Q.projects[A] ?? ey1;
    if (typeof B.allowedTools === "string") B.allowedTools = S7(B.allowedTools) ?? [];
    return B
}

function aI(A) {
    let Q = Qx1();
    try {
        RQB(gK(), fw, (B) => ({
            ...B,
            projects: {
                ...B.projects,
                [Q]: A
            }
        }))
    } catch (B) {
        g(`Failed to save config with lock: ${B}`, {
            level: "error"
        });
        let G = Hc(gK(), fw);
        OQB(gK(), {
            ...G,
            projects: {
                ...G.projects,
                [Q]: A
            }
        }, fw)
    }
}

function Rb() {
    let A = L1();
    return !!(V0(process.env.DISABLE_AUTOUPDATER) || process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC || A.autoUpdates === !1 && (A.installMethod !== "native" || A.autoUpdatesProtectedForNative !== !0))
}

function NlA() {
    if (V0(process.env.DISABLE_COST_WARNINGS)) return !1;
    if (AB()) return !1;
    let Q = Kc(),
        B = Zw() !== null;
    if (!Q.hasToken && !B) return !1;
    let G = L1(),
        Z = G.oauthAccount?.organizationRole,
        I = G.oauthAccount?.workspaceRole;
    if (!Z || !I) return !1;
    return ["admin", "billing"].includes(Z) || ["workspace_admin", "workspace_billing"].includes(I)
}

function Tb() {
    let A = L1();
    if (A.userID) return A.userID;
    let Q = dp8(32).toString("hex");
    return d0({
        ...A,
        userID: Q
    }), Q
}

function Bx1() {
    let A = L1();
    if (A.anonymousId) return A.anonymousId;
    let Q = `claudecode.v1.${cp8()}`;
    return d0({
        ...A,
        anonymousId: Q
    }), Q
}

function TQB() {
    let A = L1();
    if (!A.firstStartTime) d0({
        ...A,
        firstStartTime: new Date().toISOString()
    })
}

function xo(A) {
    let Q = pQ();
    if (A === "ExperimentalUltraClaudeMd") return xo("User");
    switch (A) {
        case "User":
            return yo(PQ(), "CLAUDE.md");
        case "Local":
            return yo(Q, "CLAUDE.local.md");
        case "Project":
            return yo(Q, "CLAUDE.md");
        case "Managed":
            return yo(hw(), "CLAUDE.md");
        case "ExperimentalUltraClaudeMd":
            return yo(PQ(), "ULTRACLAUDE.md")
    }
}

function Gx1() {
    return yo(hw(), ".claude", "rules")
}

function Zx1() {
    return yo(PQ(), ".claude", "rules")
}
var MQB, ey1, fw, IO7, YO7, Ob, Ax1 = !1,
    Qx1;
var jQ = L(() => {
    zvA();
    o2();
    f5();
    hQ();
    R2();
    zV();
    $Z();
    S0();
    o0();
    M9();
    hB();
    D0();
    u1();
    RB();
    MQB = GA(hKA(), 1), ey1 = {
        allowedTools: [],
        mcpContextUris: [],
        mcpServers: {},
        enabledMcpjsonServers: [],
        disabledMcpjsonServers: [],
        hasTrustDialogAccepted: !1,
        projectOnboardingSeenCount: 0,
        hasClaudeMdExternalIncludesApproved: !1,
        hasClaudeMdExternalIncludesWarningShown: !1
    }, fw = {
        numStartups: 0,
        installMethod: void 0,
        autoUpdates: void 0,
        theme: "dark",
        preferredNotifChannel: "auto",
        verbose: !1,
        editorMode: "normal",
        autoCompactEnabled: !0,
        hasSeenTasksHint: !1,
        queuedCommandUpHintCount: 0,
        diffTool: "auto",
        customApiKeyResponses: {
            approved: [],
            rejected: []
        },
        env: {},
        tipsHistory: {},
        memoryUsageCount: 0,
        promptQueueUseCount: 0,
        todoFeatureEnabled: !0,
        showExpandedTodos: !1,
        messageIdleNotifThresholdMs: 60000,
        autoConnectIde: !1,
        autoInstallIdeExtension: !0,
        checkpointingShadowRepos: [],
        fileCheckpointingEnabled: !0,
        terminalProgressBarEnabled: !0,
        cachedStatsigGates: {},
        cachedDynamicConfigs: {},
        cachedGrowthBookFeatures: {},
        respectGitignore: !0
    };
    IO7 = {
        ...fw,
        autoUpdates: !1
    }, YO7 = {
        ...ey1
    };
    Ob = {
        config: null,
        mtime: 0
    };
    Qx1 = t1(() => {
        let A = pQ();
        try {
            return mp8(pp8("git rev-parse --show-toplevel", {
                cwd: A,
                encoding: "utf8",
                stdio: ["pipe", "pipe", "ignore"]
            }).trim())
        } catch {
            return NQB(A)
        }
    })
});

function lp8(A, Q) {
    return A && hxA(A, Q, SN)
}
var LlA;
var Ix1 = L(() => {
    IC1();
    Hs();
    LlA = lp8
});

function ip8(A, Q) {
    var B = {};
    return Q = jj(Q, 3), LlA(A, function(G, Z, I) {
        Um(B, Z, Q(G, Z, I))
    }), B
}
var vo;
var MlA = L(() => {
    KKA();
    Ix1();
    pBA();
    vo = ip8
});

function eEA(A) {
    let Q = [];
    return {
        expanded: A.replace(/\$\{([^}]+)\}/g, (G, Z) => {
            let [I, Y] = Z.split(":-", 2), J = process.env[I];
            if (J !== void 0) return J;
            if (Y !== void 0) return Y;
            return Q.push(I), G
        }),
        missingVars: Q
    }
}
var Pb, D3A, PQB, Yx1, Jx1, SQB, np8, _QB, ap8, sp8, rp8, op8, tp8, ep8, Al8, jQB, Ql8, H3A, Bl8, fo, kQB, OlA, Gl8, Zl8, C3A, bo, $O7, Il8, QzA, Yl8, Jl8, RlA, wO7, Wl8, Wx1;
var ho = L(() => {
    h2();
    E3A();
    s9A();
    Pb = _.string().startsWith("./"), D3A = Pb.endsWith(".json"), PQB = _.union([Pb.refine((A) => A.endsWith(".mcpb") || A.endsWith(".dxt"), {
        message: "MCPB file path must end with .mcpb or .dxt"
    }).describe("Path to MCPB file relative to plugin root"), _.string().url().refine((A) => A.endsWith(".mcpb") || A.endsWith(".dxt"), {
        message: "MCPB URL must end with .mcpb or .dxt"
    }).describe("URL to MCPB file")]), Yx1 = Pb.endsWith(".md"), Jx1 = _.union([Yx1, Pb]), SQB = _.object({
        name: _.string().min(1, "Author name cannot be empty").describe("Display name of the plugin author or organization"),
        email: _.string().optional().describe("Contact email for support or feedback"),
        url: _.string().optional().describe("Website, GitHub profile, or organization URL")
    }), np8 = _.object({
        name: _.string().min(1, "Plugin name cannot be empty").refine((A) => !A.includes(" "), {
            message: 'Plugin name cannot contain spaces. Use kebab-case (e.g., "my-plugin")'
        }).describe("Unique identifier for the plugin, used for namespacing (prefer kebab-case)"),
        version: _.string().optional().describe("Semantic version (e.g., 1.2.3) following semver.org specification"),
        description: _.string().optional().describe("Brief, user-facing explanation of what the plugin provides"),
        author: SQB.optional().describe("Information about the plugin creator or maintainer"),
        homepage: _.string().url().optional().describe("Plugin homepage or documentation URL"),
        repository: _.string().optional().describe("Source code repository URL"),
        license: _.string().optional().describe("SPDX license identifier (e.g., MIT, Apache-2.0)"),
        keywords: _.array(_.string()).optional().describe("Tags for plugin discovery and categorization")
    }), _QB = _.object({
        description: _.string().optional().describe("Brief, user-facing explanation of what these hooks provide"),
        hooks: _.lazy(() => AzA).describe("The hooks provided by the plugin, in the same format as the one used for settings")
    }), ap8 = _.object({
        hooks: _.union([D3A.describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"), _.lazy(() => AzA).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)"), _.array(_.union([D3A.describe("Path to file with additional hooks (in addition to those in hooks/hooks.json, if it exists), relative to the plugin root"), _.lazy(() => AzA).describe("Additional hooks (in addition to those in hooks/hooks.json, if it exists)")]))])
    }), sp8 = _.object({
        source: Jx1.optional().describe("Path to command markdown file, relative to plugin root"),
        content: _.string().optional().describe("Inline markdown content for the command"),
        description: _.string().optional().describe("Command description override"),
        argumentHint: _.string().optional().describe('Hint for command arguments (e.g., "[file]")'),
        model: _.string().optional().describe("Default model for this command"),
        allowedTools: _.array(_.string()).optional().describe("Tools allowed when command runs")
    }).refine((A) => A.source && !A.content || !A.source && A.content, {
        message: 'Command must have either "source" (file path) or "content" (inline markdown), but not both'
    }), rp8 = _.object({
        commands: _.union([Jx1.describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root"), _.array(Jx1.describe("Path to additional command file or skill directory (in addition to those in the commands/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional command files or skill directories"), _.record(_.string(), sp8).describe('Object mapping of command names to their metadata and source files. Command name becomes the slash command name (e.g., "about" → "/plugin:about")')])
    }), op8 = _.object({
        agents: _.union([Yx1.describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root"), _.array(Yx1.describe("Path to additional agent file (in addition to those in the agents/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional agent files")])
    }), tp8 = _.object({
        skills: _.union([Pb.describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root"), _.array(Pb.describe("Path to additional skill directory (in addition to those in the skills/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional skill directories")])
    }), ep8 = _.object({
        outputStyles: _.union([Pb.describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root"), _.array(Pb.describe("Path to additional output styles directory or file (in addition to those in the output-styles/ directory, if it exists), relative to the plugin root")).describe("List of paths to additional output styles directories or files")])
    }), Al8 = _.object({
        mcpServers: _.union([D3A.describe("MCP servers to include in the plugin (in addition to those in the .mcp.json file, if it exists)"), PQB.describe("Path or URL to MCPB file containing MCP server configuration"), _.record(_.string(), Tm).describe("MCP server configurations keyed by server name"), _.array(_.union([D3A.describe("Path to MCP servers configuration file"), PQB.describe("Path or URL to MCPB file"), _.record(_.string(), Tm).describe("Inline MCP server configurations")])).describe("Array of MCP server configurations (paths, MCPB files, or inline definitions)")])
    }), jQB = _.string().min(1), Ql8 = _.string().min(2).refine((A) => A.startsWith("."), {
        message: 'File extensions must start with dot (e.g., ".ts", not "ts")'
    }), H3A = _.strictObject({
        command: _.string().min(1).refine((A) => {
            if (A.includes(" ") && !A.startsWith("/")) return !1;
            return !0
        }, {
            message: "Command should not contain spaces. Use args array for arguments."
        }).describe('Command to execute the LSP server (e.g., "typescript-language-server")'),
        args: _.array(jQB).optional().describe("Command-line arguments to pass to the server"),
        extensionToLanguage: _.record(Ql8, jQB).refine((A) => Object.keys(A).length > 0, {
            message: "extensionToLanguage must have at least one mapping"
        }).describe("Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping."),
        transport: _.enum(["stdio", "socket"]).default("stdio").describe("Communication transport mechanism"),
        env: _.record(_.string(), _.string()).optional().describe("Environment variables to set when starting the server"),
        initializationOptions: _.unknown().optional().describe("Initialization options passed to the server during initialization"),
        settings: _.unknown().optional().describe("Settings passed to the server via workspace/didChangeConfiguration"),
        workspaceFolder: _.string().optional().describe("Workspace folder path to use for the server"),
        startupTimeout: _.number().int().positive().optional().describe("Maximum time to wait for server startup (milliseconds)"),
        shutdownTimeout: _.number().int().positive().optional().describe("Maximum time to wait for graceful shutdown (milliseconds)"),
        restartOnCrash: _.boolean().optional().describe("Whether to restart the server if it crashes"),
        maxRestarts: _.number().int().nonnegative().optional().describe("Maximum number of restart attempts before giving up")
    }), Bl8 = _.object({
        lspServers: _.union([D3A.describe("Path to .lsp.json configuration file relative to plugin root"), _.record(_.string(), H3A).describe("LSP server configurations keyed by server name"), _.array(_.union([D3A.describe("Path to LSP configuration file"), _.record(_.string(), H3A).describe("Inline LSP server configurations")])).describe("Array of LSP server configurations (paths or inline definitions)")])
    }), fo = _.object({
        ...np8.shape,
        ...ap8.partial().shape,
        ...rp8.partial().shape,
        ...op8.partial().shape,
        ...tp8.partial().shape,
        ...ep8.partial().shape,
        ...Al8.partial().shape,
        ...Bl8.partial().shape
    }).strict(), kQB = _.string().refine((A) => !A.includes("..") && !A.includes("//"), "Package name cannot contain path traversal patterns").refine((A) => {
        let Q = /^@[a-z0-9][a-z0-9-._]*\/[a-z0-9][a-z0-9-._]*$/,
            B = /^[a-z0-9][a-z0-9-._]*$/;