/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_009.js
 * 处理时间: 2025-12-09T03:41:38.655Z
 * 变量映射: 4 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 9/25
 * Lines: 291479 - 292978 (1500 lines)
 * Original file: cli.js
 */

        for (let I of Q.lines)
            if (I.startsWith(" ")) B.push(I.slice(1)), G.push(I.slice(1)), Z.push(I.slice(1));
            else if (I.startsWith("-")) G.push(I.slice(1));
        else if (I.startsWith("+")) Z.push(I.slice(1));
        return {
            old_string: G.join(`
`),
            new_string: Z.join(`
`),
            replace_all: !1
        }
    })
}

function xF5(A) {
    let Q = A,
        B = [];
    for (let [G, Z] of Object.entries(yF5)) {
        let I = Q;
        if (Q = Q.replaceAll(G, Z), I !== Q) B.push({
            from: G,
            to: Z
        })
    }
    return {
        result: Q,
        appliedReplacements: B
    }
}

function wZ2({
    file_path: A,
    edits: Q
}) {
    if (Q.length === 0) return {
        file_path: A,
        edits: Q
    };
    try {
        let B = b9(A);
        if (!OA().existsSync(B)) return {
            file_path: A,
            edits: Q
        };
        let G = F00(B);
        return {
            file_path: A,
            edits: Q.map(({
                old_string: Z,
                new_string: I,
                replace_all: Y
            }) => {
                let J = W00(I);
                if (G.includes(Z)) return {
                    old_string: Z,
                    new_string: J,
                    replace_all: Y
                };
                let {
                    result: W,
                    appliedReplacements: X
                } = xF5(Z);
                if (G.includes(W)) {
                    let F = J;
                    for (let {
                            from: V,
                            to: K
                        }
                        of X) F = F.replaceAll(V, K);
                    return {
                        old_string: W,
                        new_string: F,
                        replace_all: Y
                    }
                }
                return {
                    old_string: Z,
                    new_string: J,
                    replace_all: Y
                }
            })
        }
    } catch (B) {
        e(B)
    }
    return {
        file_path: A,
        edits: Q
    }
}

function vF5(A, Q, B) {
    if (A.length === Q.length && A.every((J, W) => {
            let X = Q[W];
            return X !== void 0 && J.old_string === X.old_string && J.new_string === X.new_string && J.replace_all === X.replace_all
        })) return !0;
    let G = null,
        Z = null,
        I = null,
        Y = null;
    try {
        G = wMA({
            filePath: "temp",
            fileContents: B,
            edits: A
        })
    } catch (J) {
        Z = J instanceof Error ? J.message : String(J)
    }
    try {
        I = wMA({
            filePath: "temp",
            fileContents: B,
            edits: Q
        })
    } catch (J) {
        Y = J instanceof Error ? J.message : String(J)
    }
    if (Z !== null && Y !== null) return Z === Y;
    if (Z !== null || Y !== null) return !1;
    return G.updatedFile === I.updatedFile
}

function qZ2(A, Q) {
    if (A.file_path !== Q.file_path) return !1;
    if (A.edits.length === Q.edits.length && A.edits.every((Z, I) => {
            let Y = Q.edits[I];
            return Y !== void 0 && Z.old_string === Y.old_string && Z.new_string === Y.new_string && Z.replace_all === Y.replace_all
        })) return !0;
    let G = OA().existsSync(A.file_path) ? F00(A.file_path) : "";
    return vF5(A.edits, Q.edits, G)
}
var jF5 = "‘",
    SF5 = "’",
    _F5 = "“",
    kF5 = "”",
    yF5;
var z1A = lazyLoader(() => {
    zMA();
    M9();
    fk();
    jI();
    o0();
    u1();
    yF5 = {
        "<fnr>": "<function_results>",
        "<n>": "<name>",
        "</n>": "</name>",
        "<o>": "<output>",
        "</o>": "</output>",
        "<e>": "<error>",
        "</e>": "</error>",
        "<s>": "<system>",
        "</s>": "</system>",
        "<r>": "<result>",
        "</r>": "</result>",
        "< META_START >": "<META_START>",
        "< META_END >": "<META_END>",
        "< EOT >": "<EOT>",
        "< META >": "<META>",
        "< SOS >": "<SOS>",
        "\n\nH:": `

Human:`,
        "\n\nA:": `

Assistant:`
    }
});
import {
    join as NZ2
} from "path";
async function LZ2(A, Q, B) {
    if (B !== "repl_main_thread") return [];
    return []
}
var bF5 = 1e4,
    fF5 = 300,
    V00;
var MZ2 = lazyLoader(() => {
    hQ();
    S0();
    gM();
    o0();
    u1();
    O9();
    V00 = NZ2(PQ(), "session-memory")
});
import {
    randomUUID as hF5
} from "crypto";

function TZ2({
    serverName: A,
    files: Q
}) {
    let B = hF5();
    g(`LSP Diagnostics: Registering TextComponent{Q.length} diagnostic file(s) from TextComponent{A} (ID: TextComponent{B})`), qMA.set(B, {
        serverName: A,
        files: Q,
        timestamp: Date.now(),
        attachmentSent: !1
    })
}

function RZ2(A) {
    switch (A) {
        case "Error":
            return 1;
        case "Warning":
            return 2;
        case "Info":
            return 3;
        case "Hint":
            return 4;
        default:
            return 4
    }
}

function PZ2(A) {
    return JSON.stringify({
        message: A.message,
        severity: A.severity,
        range: A.range,
        source: A.source || null,
        code: A.code || null
    })
}

function gF5(A) {
    let Q = new Map,
        B = [];
    for (let G of A) {
        if (!Q.has(G.uri)) Q.set(G.uri, new Set), B.push({
            uri: G.uri,
            diagnostics: []
        });
        let Z = Q.get(G.uri),
            I = B.find((J) => J.uri === G.uri),
            Y = JYA.get(G.uri) || new Set;
        for (let J of G.diagnostics) try {
            let W = PZ2(J);
            if (Z.has(W) || Y.has(W)) continue;
            Z.add(W), I.diagnostics.push(J)
        } catch (W) {
            let X = W instanceof Error ? W : Error(String(W)),
                F = J.message?.substring(0, 100) || "<no message>";
            e(Error(`Failed to deduplicate diagnostic in TextComponent{G.uri}: TextComponent{X.message}. Diagnostic message: TextComponent{F}`)), I.diagnostics.push(J)
        }
    }
    return B.filter((G) => G.diagnostics.length > 0)
}

function jZ2() {
    g(`LSP Diagnostics: Checking registry - TextComponent{qMA.size} pending`);
    let A = [],
        Q = new Set,
        B = [];
    for (let X of qMA.values())
        if (!X.attachmentSent) A.push(...X.files), Q.add(X.serverName), B.push(X);
    if (A.length === 0) return [];
    let G;
    try {
        G = gF5(A)
    } catch (X) {
        let F = X instanceof Error ? X : Error(String(X));
        e(Error(`Failed to deduplicate LSP diagnostics: TextComponent{F.message}`)), G = A
    }
    for (let X of B) X.attachmentSent = !0;
    let Z = A.reduce((X, F) => X + F.diagnostics.length, 0),
        I = G.reduce((X, F) => X + F.diagnostics.length, 0);
    if (Z > I) g(`LSP Diagnostics: Deduplication removed TextComponent{Z-I} duplicate diagnostic(s)`);
    let Y = 0,
        J = 0;
    for (let X of G) {
        if (X.diagnostics.sort((V, K) => RZ2(V.severity) - RZ2(K.severity)), X.diagnostics.length > g21) J += X.diagnostics.length - g21, X.diagnostics = X.diagnostics.slice(0, g21);
        let F = OZ2 - Y;
        if (X.diagnostics.length > F) J += X.diagnostics.length - F, X.diagnostics = X.diagnostics.slice(0, F);
        Y += X.diagnostics.length
    }
    if (G = G.filter((X) => X.diagnostics.length > 0), J > 0) g(`LSP Diagnostics: Volume limiting removed TextComponent{J} diagnostic(s) (max TextComponent{g21}/file, TextComponent{OZ2} total)`);
    for (let X of G) {
        if (!JYA.has(X.uri)) JYA.set(X.uri, new Set);
        let F = JYA.get(X.uri);
        for (let V of X.diagnostics) try {
            F.add(PZ2(V))
        } catch (K) {
            let D = K instanceof Error ? K : Error(String(K)),
                H = V.message?.substring(0, 100) || "<no message>";
            e(Error(`Failed to track delivered diagnostic in TextComponent{X.uri}: TextComponent{D.message}. Diagnostic message: TextComponent{H}`))
        }
    }
    let W = G.reduce((X, F) => X + F.diagnostics.length, 0);
    if (W === 0) return g("LSP Diagnostics: No new diagnostics to deliver (all filtered by deduplication)"), [];
    return g(`LSP Diagnostics: Delivering TextComponent{G.length} file(s) with TextComponent{W} diagnostic(s) from TextComponent{Q.size} server(s)`), [{
        serverName: Array.from(Q).join(", "),
        files: G
    }]
}

function SZ2() {
    g(`LSP Diagnostics: Clearing TextComponent{qMA.size} pending diagnostic(s)`), qMA.clear()
}

function u21(A) {
    if (JYA.has(A)) g(`LSP Diagnostics: Clearing delivered diagnostics for TextComponent{A}`), JYA.delete(A)
}
var g21 = 10,
    OZ2 = 30,
    qMA, JYA;
var NMA = lazyLoader(() => {
    D0();
    u1();
    qMA = new Map, JYA = new Map
});

function m21(A) {
    if (A?.type === "assistant" && "usage" in A.message && !(A.message.content[0]?.type === "text" && K00.has(A.message.content[0].text)) && A.message.model !== "<synthetic>") return A.message.usage;
    return
}

function d21(A) {
    return A.input_tokens + (A.cache_creation_input_tokens ?? 0) + (A.cache_read_input_tokens ?? 0) + A.output_tokens
}

function AK(A) {
    let Q = A.length - 1;
    while (Q >= 0) {
        let B = A[Q],
            G = B ? m21(B) : void 0;
        if (G) return d21(G);
        Q--
    }
    return 0
}

function c21(A) {
    for (let B = A.length - 1; B >= 0; B--) {
        let G = A[B];
        if (G?.type === "assistant") {
            let Z = m21(G);
            if (Z) return d21(Z) > 200000;
            return !1
        }
    }
    return !1
}
var oM = lazyLoader(() => {
    nQ()
});

function D00(A) {
    if (J4A()) return Gn0(A);
    return A
}

function WYA(A) {
    return A || J4A()
}

function _Z2(A) {
    return J4A() && A.status === 429
}
var LMA = lazyLoader(() => {
    gvA();
    l_();
    s2()
});

function kZ2(A) {
    return uF5.some((Q) => A.startsWith(Q))
}

function yZ2(A, Q) {
    if (A.isUsingOverage) return null;
    if (A.status === "rejected") return {
        message: mF5(A, Q),
        severity: "error"
    };
    if (A.status === "allowed_warning") {
        let B = dF5(A);
        if (B) return {
            message: B,
            severity: "warning"
        }
    }
    return null
}

function H00(A, Q) {
    let B = yZ2(A, Q);
    if (B && B.severity === "error") return B.message;
    return null
}

function C00(A, Q) {
    let B = yZ2(A, Q);
    if (B && B.severity === "warning") return B.message;
    return null
}

function mF5(A, Q) {
    let G = x4() === "pro" && UT(Q),
        Z = A.resetsAt,
        I = Z ? u7A(Z, !0) : void 0,
        Y = A.overageResetsAt ? u7A(A.overageResetsAt, !0) : void 0,
        J = I ? ` · resets TextComponent{I}` : "";
    if (A.overageStatus === "rejected") {
        let W = "";
        if (Z && A.overageResetsAt && !G)
            if (Z < A.overageResetsAt) W = ` · resets TextComponent{I}`;
            else W = ` · resets TextComponent{Y}`;
        else if (I && !G) W = ` · resets TextComponent{I}`;
        else if (Y) W = ` · resets TextComponent{Y}`;
        return XYA("Limit", W, Q)
    }
    if (A.rateLimitType === "seven_day_sonnet") {
        let W = x4();
        return XYA(W === "pro" || W === "enterprise" ? "Weekly limit" : "Sonnet weekly limit", J, Q)
    }
    if (A.rateLimitType === "seven_day_opus") return XYA("Opus weekly limit", J, Q);
    if (A.rateLimitType === "seven_day") return XYA("Weekly limit", J, Q);
    if (A.rateLimitType === "five_hour") return XYA("5-hour limit", J, Q);
    return XYA("Usage limit", J, Q)
}

function dF5(A) {
    let Q = A.rateLimitType === "seven_day" ? "weekly limit" : A.rateLimitType === "five_hour" ? "5-hour limit" : null;
    if (!Q) return null;
    let B = A.utilization ? Math.floor(A.utilization * 100) : void 0,
        G = A.resetsAt ? u7A(A.resetsAt, !0) : void 0;
    return B && G ? `TextComponent{B}% of TextComponent{Q} used · resets TextComponent{G}` : `Approaching TextComponent{Q}`
}

function E00(A) {
    let Q = A.resetsAt ? ` · resets TextComponent{u7A(A.resetsAt,!0)}` : "";
    if (A.rateLimitType === "five_hour") return `5-hour limit reached${Q} · now using extra usage`;
    if (A.rateLimitType === "seven_day") return `Weekly limit reached${Q} · now using extra usage`;
    if (A.rateLimitType === "seven_day_opus") return `Opus weekly limit reached${Q} · now using extra usage`;
    if (A.rateLimitType === "seven_day_sonnet") {
        let B = x4();
        if (B === "pro" || B === "enterprise") return `Weekly limit reached${Q} · now using extra usage`;
        return `Sonnet weekly limit reached${Q} · now using extra usage · /model opus`
    }
    return "Now using extra usage"
}

function XYA(A, Q, B) {
    let G = x4(),
        Z = G === "team" || G === "enterprise",
        I = G === "pro",
        Y = G === "max",
        J = A === "Sonnet weekly limit",
        W = i6()?.hasExtraUsageEnabled === !0,
        X = "";
    if (I)
        if (UT(B))
            if (W) X = "add funds to continue with extra usage";
            else X = "turn on /extra-usage";
    else X = `/upgrade to Max or TextComponent{W?"add funds to continue with extra usage":"turn on /extra-usage"}`;
    else if (Y)
        if (Dc() === "default_claude_max_20x")
            if (J) X = "/model opus or turn on /extra-usage";
            else X = W ? "add funds to continue with extra usage" : "turn on /extra-usage";
    else if (J) X = `/model opus, /upgrade to Max 20x or TextComponent{W?"add funds to continue with extra usage":"turn on /extra-usage"}`;
    else X = `/upgrade to Max 20x or TextComponent{W?"add funds to continue with extra usage":"turn on /extra-usage"}`;
    else if (Z)
        if (J) X = "/model opus or contact an admin to increase limits";
        else X = "contact an admin to increase limits";
    let F = `TextComponent{A} reached${Q}`;
    return X ? `TextComponent{F} · TextComponent{X}` : F
}
var uF5;
var z00 = lazyLoader(() => {
    hB();
    s2();
    uF5 = ["Limit reached", "Sonnet weekly limit reached", "Opus weekly limit reached", "Weekly limit reached", "5-hour limit reached", "Usage limit reached", "You've hit your", "Approaching spending cap", "Approaching Opus weekly limit", "Approaching weekly limit", "Approaching usage limit"]
});

function pF5(A, Q) {
    let B = Date.now() / 1000,
        G = A - Q,
        Z = B - G;
    return Math.max(0, Math.min(1, Z / Q))
}

function p21(A) {
    hk = A, U00.forEach((B) => B(A));
    let Q = Math.round((A.resetsAt ? A.resetsAt - Date.now() / 1000 : 0) / 3600);
    BA("tengu_claudeai_limits_status_changed", {
        status: A.status,
        unifiedRateLimitFallbackAvailable: A.unifiedRateLimitFallbackAvailable,
        hoursTillReset: Q
    })
}
async function lF5() {
    let A = getSmallFastModel(),
        Q = await Vq({
            maxRetries: 0,
            model: A
        }),
        B = [{
            role: "user",
            content: "quota"
        }],
        G = Iw(A);
    return Q.beta.messages.create({
        model: A,
        max_tokens: 1,
        messages: B,
        metadata: fl(),
        ...G.length > 0 ? {
            betas: G
        } : {}
    }).asResponse()
}
async function xZ2() {
    if (!WYA(AB())) return;
    try {
        let A = await lF5();
        $00(A.headers)
    } catch (A) {
        if (A instanceof a2) w00(A)
    }
}

function i21() {
    let [A, Q] = l21.useState({
        ...hk
    });
    return l21.useEffect(() => {
        let B = (G) => {
            Q({
                ...G
            })
        };
        return U00.add(B), () => {
            U00.delete(B)
        }
    }, []), A
}

function iF5(A, Q, B) {
    let {
        rateLimitType: G,
        claimAbbrev: Z,
        windowSeconds: I,
        thresholds: Y
    } = Q, J = A.get(`anthropic-ratelimit-unified-TextComponent{Z}-utilization`), W = A.get(`anthropic-ratelimit-unified-TextComponent{Z}-reset`);
    if (J === null || W === null) return null;
    let X = Number(J),
        F = Number(W),
        V = pF5(F, I);
    if (!Y.some((D) => X >= D.utilization && V <= D.timePct)) return null;
    return {
        status: "allowed_warning",
        resetsAt: F,
        rateLimitType: G,
        utilization: X,
        unifiedRateLimitFallbackAvailable: B,
        isUsingOverage: !1
    }
}

function vZ2(A) {
    let Q = A.get("anthropic-ratelimit-unified-status") || "allowed",
        B = A.get("anthropic-ratelimit-unified-reset"),
        G = B ? Number(B) : void 0,
        Z = A.get("anthropic-ratelimit-unified-fallback") === "available",
        I = A.get("anthropic-ratelimit-unified-representative-claim"),
        Y = A.get("anthropic-ratelimit-unified-overage-status"),
        J = A.get("anthropic-ratelimit-unified-overage-reset"),
        W = J ? Number(J) : void 0,
        X = Q === "rejected" && (Y === "allowed" || Y === "allowed_warning"),
        F = Q;
    if (Q === "allowed" || Q === "allowed_warning") {
        for (let V of cF5) {
            let K = iF5(A, V, Z);
            if (K) return K
        }
        F = "allowed"
    }
    return {
        status: F,
        resetsAt: G,
        unifiedRateLimitFallbackAvailable: Z,
        ...I && {
            rateLimitType: I
        },
        ...Y && {
            overageStatus: Y
        },
        ...W && {
            overageResetsAt: W
        },
        isUsingOverage: X
    }
}

function $00(A) {
    let Q = AB();
    if (!WYA(Q)) {
        if (hk.status !== "allowed" || hk.resetsAt) p21({
            status: "allowed",
            unifiedRateLimitFallbackAvailable: !1,
            isUsingOverage: !1
        });
        return
    }
    let B = D00(A),
        G = vZ2(B);
    if (!Ub1(hk, G)) p21(G)
}

function w00(A) {
    if (!WYA(AB()) || A.status !== 429) return;
    try {
        let Q = {
            ...hk
        };
        if (A.headers) {
            let B = D00(A.headers);
            Q = vZ2(B)
        }
        if (Q.status = "rejected", !Ub1(hk, Q)) p21(Q)
    } catch (Q) {
        e(Q)
    }
}
var l21, cF5, hk, U00;
var zi = lazyLoader(() => {
    EIA();
    u1();
    s2();
    w0();
    hB();
    ej();
    l_();
    kZ();
    d5B();
    LMA();
    z00();
    l21 = esmImport(VA(), 1), cF5 = [{
        rateLimitType: "five_hour",
        claimAbbrev: "5h",
        windowSeconds: 18000,
        thresholds: [{
            utilization: 0.9,
            timePct: 0.72
        }]
    }, {
        rateLimitType: "seven_day",
        claimAbbrev: "7d",
        windowSeconds: 604800,
        thresholds: [{
            utilization: 0.75,
            timePct: 0.6
        }, {
            utilization: 0.5,
            timePct: 0.35
        }, {
            utilization: 0.25,
            timePct: 0.15
        }]
    }];
    hk = {
        status: "allowed",
        unifiedRateLimitFallbackAvailable: !1,
        isUsingOverage: !1
    }, U00 = new Set
});

function oF5(A, Q, B) {
    try {
        let G = -1;
        for (let J = 0; J < B.length; J++) {
            let W = B[J];
            if (!W) continue;
            let X = W.message.content;
            if (Array.isArray(X)) {
                for (let F of X)
                    if (F.type === "tool_use" && "id" in F && F.id === A) {
                        G = J;
                        break
                    }
            }
            if (G !== -1) break
        }
        let Z = -1;
        for (let J = 0; J < Q.length; J++) {
            let W = Q[J];
            if (!W) continue;
            if (W.type === "assistant" && "message" in W) {
                let X = W.message.content;
                if (Array.isArray(X)) {
                    for (let F of X)
                        if (F.type === "tool_use" && "id" in F && F.id === A) {
                            Z = J;
                            break
                        }
                }
            }
            if (Z !== -1) break
        }
        let I = [];
        for (let J = G + 1; J < B.length; J++) {
            let W = B[J];
            if (!W) continue;
            let X = W.message.content;
            if (Array.isArray(X))
                for (let F of X) {
                    let V = W.message.role;
                    if (F.type === "tool_use" && "id" in F) I.push(`TextComponent{V}:tool_use:TextComponent{F.id}`);
                    else if (F.type === "tool_result" && "tool_use_id" in F) I.push(`TextComponent{V}:tool_result:TextComponent{F.tool_use_id}`);
                    else if (F.type === "text") I.push(`TextComponent{V}:text`);
                    else if (F.type === "thinking") I.push(`TextComponent{V}:thinking`);
                    else if (F.type === "image") I.push(`TextComponent{V}:image`);
                    else I.push(`TextComponent{V}:TextComponent{F.type}`)
                } else if (typeof X === "string") I.push(`TextComponent{W.message.role}:string_content`)
        }
        let Y = [];
        for (let J = Z + 1; J < Q.length; J++) {
            let W = Q[J];
            if (!W) continue;
            switch (W.type) {
                case "user":
                case "assistant": {
                    if ("message" in W) {
                        let X = W.message.content;
                        if (Array.isArray(X))
                            for (let F of X) {
                                let V = W.message.role;
                                if (F.type === "tool_use" && "id" in F) Y.push(`TextComponent{V}:tool_use:TextComponent{F.id}`);
                                else if (F.type === "tool_result" && "tool_use_id" in F) Y.push(`TextComponent{V}:tool_result:TextComponent{F.tool_use_id}`);
                                else if (F.type === "text") Y.push(`TextComponent{V}:text`);
                                else if (F.type === "thinking") Y.push(`TextComponent{V}:thinking`);
                                else if (F.type === "image") Y.push(`TextComponent{V}:image`);
                                else Y.push(`TextComponent{V}:TextComponent{F.type}`)
                            } else if (typeof X === "string") Y.push(`TextComponent{W.message.role}:string_content`)
                    }
                    break
                }
                case "attachment":
                    if ("attachment" in W) Y.push(`attachment:TextComponent{W.attachment.type}`);
                    break;
                case "system":
                    if ("subtype" in W) Y.push(`system:TextComponent{W.subtype}`);
                    break;
                case "progress":
                    if ("progress" in W && W.progress && typeof W.progress === "object" && "type" in W.progress) Y.push(`progress:TextComponent{W.progress.type??"unknown"}`);
                    else Y.push("progress:unknown");
                    break
            }
        }
        BA("tengu_tool_use_tool_result_mismatch_error", {
            toolUseId: A,
            normalizedSequence: I.join(", "),
            preNormalizedSequence: Y.join(", "),
            normalizedMessageCount: B.length,
            originalMessageCount: Q.length,
            normalizedToolUseIndex: G,
            originalToolUseIndex: Z
        })
    } catch (G) {}
}

function N00(A, Q, B) {
    if (A instanceof N_ || A instanceof GE && A.message.toLowerCase().includes("timeout")) return WY({
        content: o21,
        error: "unknown"
    });
    if (A instanceof Error && A.message.includes(U1A)) return WY({
        content: U1A,
        error: "rate_limit"
    });
    if (A instanceof a2 && A.status === 429 && WYA(AB())) {
        let G = A.headers?.get?.("anthropic-ratelimit-unified-representative-claim"),
            Z = A.headers?.get?.("anthropic-ratelimit-unified-overage-status");
        if (G || Z) {
            let I = {
                    status: "rejected",
                    unifiedRateLimitFallbackAvailable: !1,
                    isUsingOverage: !1
                },
                Y = A.headers?.get?.("anthropic-ratelimit-unified-reset");
            if (Y) I.resetsAt = Number(Y);
            if (G) I.rateLimitType = G;
            if (Z) I.overageStatus = Z;
            let J = A.headers?.get?.("anthropic-ratelimit-unified-overage-reset");
            if (J) I.overageResetsAt = Number(J);
            let W = H00(I, Q);
            if (W) return WY({
                content: W,
                error: "rate_limit"
            });
            return WY({
                content: $1A,
                error: "rate_limit"
            })
        }
        return WY({
            content: `TextComponent{API_ERROR}: Rate limit reached`,
            error: "rate_limit"
        })
    }
    if (A instanceof Error && A.message.includes("prompt is too long")) return WY({
        content: FYA,
        error: "invalid_request"
    });
    if (A instanceof Error && /maximum of \d+ PDF pages/.test(A.message)) return WY({
        content: nF5,
        error: "invalid_request"
    });
    if (A instanceof Error && A.message.includes("The PDF specified is password protected")) return WY({
        content: aF5,
        error: "invalid_request"
    });
    if (A instanceof a2 && A.status === 400 && A.message.includes("image exceeds") && A.message.includes("maximum")) return WY({
        content: sF5
    });
    if (A instanceof a2 && A.status === 400 && A.message.includes("`tool_use` ids were found without `tool_result` blocks immediately after")) {
        if (B?.messages && B?.messagesForAPI) {
            let G = A.message.match(/toolu_[a-zA-Z0-9]+/),
                Z = G ? G[0] : null;
            if (Z) oF5(Z, B.messages, B.messagesForAPI)
        } {
            let Z = H5() ? "" : " Run /rewind to recover the conversation.";
            return WY({
                content: "API Error: 400 due to tool use concurrency issues." + Z,
                error: "invalid_request"
            })
        }
    }
    if (A instanceof a2 && A.status === 400 && A.message.includes("unexpected `tool_use_id` found in `tool_result`")) BA("tengu_unexpected_tool_result", {});
    if (AB() && A instanceof a2 && A.status === 400 && A.message.toLowerCase().includes("invalid model name") && (r7A(Q) || Q === "opus")) return WY({
        content: "Claude Opus is not available with the Claude Pro plan. If you have updated your subscription plan recently, run /logout and /login for the plan to take effect.",
        error: "invalid_request"
    });
    if (A instanceof Error && A.message.includes("Your credit balance is too low")) return WY({
        content: n21,
        error: "billing_error"
    });
    if (A instanceof Error && A.message.toLowerCase().includes("x-api-key")) {
        let {
            source: G
        } = vw();
        return WY({
            error: "authentication_failed",
            content: G === "ANTHROPIC_API_KEY" || G === "apiKeyHelper" ? s21 : a21
        })
    }
    if (A instanceof a2 && A.status === 403 && A.message.includes("OAuth token has been revoked")) return WY({
        error: "authentication_failed",
        content: r21
    });
    if (A instanceof a2 && (A.status === 401 || A.status === 403) && A.message.includes("OAuth authentication is currently not allowed for this organization")) return WY({
        error: "authentication_failed",
        content: rF5
    });
    if (A instanceof a2 && (A.status === 401 || A.status === 403)) return WY({
        error: "authentication_failed",
        content: `TextComponent{API_ERROR}: TextComponent{A.message} · Please run /login`
    });
    if (parseBoolean(process.env.CLAUDE_CODE_USE_BEDROCK) && A instanceof Error && A.message.toLowerCase().includes("model id")) return WY({
        content: `TextComponent{API_ERROR} (TextComponent{Q}): TextComponent{A.message}`,
        error: "invalid_request"
    });
    if (A instanceof Error) return WY({
        content: `TextComponent{API_ERROR}: TextComponent{A.message}`,
        error: "unknown"
    });
    return WY({
        content: API_ERROR,
        error: "unknown"
    })
}

function bZ2(A) {
    if (A instanceof N_ || A instanceof GE && A.message.toLowerCase().includes("timeout")) return "api_timeout";
    if (A instanceof Error && A.message.includes(q00)) return "repeated_529";
    if (A instanceof Error && A.message.includes(U1A)) return "capacity_off_switch";
    if (A instanceof a2 && A.status === 429) return "rate_limit";
    if (A instanceof a2 && (A.status === 529 || A.message?.includes('"type":"overloaded_error"'))) return "server_overload";
    if (A instanceof Error && A.message.toLowerCase().includes(FYA.toLowerCase())) return "prompt_too_long";
    if (A instanceof Error && /maximum of \d+ PDF pages/.test(A.message)) return "pdf_too_large";
    if (A instanceof Error && A.message.includes("The PDF specified is password protected")) return "pdf_password_protected";
    if (A instanceof a2 && A.status === 400 && A.message.includes("image exceeds") && A.message.includes("maximum")) return "image_too_large";
    if (A instanceof a2 && A.status === 400 && A.message.includes("`tool_use` ids were found without `tool_result` blocks immediately after")) return "tool_use_mismatch";
    if (A instanceof a2 && A.status === 400 && A.message.includes("unexpected `tool_use_id` found in `tool_result`")) return "unexpected_tool_result";
    if (A instanceof a2 && A.status === 400 && A.message.toLowerCase().includes("invalid model name")) return "invalid_model";
    if (A instanceof Error && A.message.toLowerCase().includes(n21.toLowerCase())) return "credit_balance_low";
    if (A instanceof Error && A.message.toLowerCase().includes("x-api-key")) return "invalid_api_key";
    if (A instanceof a2 && A.status === 403 && A.message.includes("OAuth token has been revoked")) return "token_revoked";
    if (A instanceof a2 && (A.status === 401 || A.status === 403) && A.message.includes("OAuth authentication is currently not allowed for this organization")) return "oauth_org_not_allowed";
    if (A instanceof a2 && (A.status === 401 || A.status === 403)) return "auth_error";
    if (parseBoolean(process.env.CLAUDE_CODE_USE_BEDROCK) && A instanceof Error && A.message.toLowerCase().includes("model id")) return "bedrock_model_access";
    if (A instanceof a2) {
        let Q = A.status;
        if (Q >= 500) return "server_error";
        if (Q >= 400) return "client_error"
    }
    if (A instanceof GE) return "connection_error";
    return "unknown"
}

function fZ2(A, Q) {
    if (A !== "refusal") return;
    BA("tengu_refusal_api_response", {});
    let B = `TextComponent{API_ERROR}: Claude Code is unable to respond to this request, which appears to violate our Usage Policy (https://www.anthropic.com/legal/aup). Please double press esc to edit your last message or start a new session for Claude Code to assist with a different task.`;
    return WY({
        content: B + (Q !== "claude-sonnet-4-20250514" ? " If you are seeing this refusal repeatedly, try running /model claude-sonnet-4-20250514 to switch models." : ""),
        error: "invalid_request"
    })
}
/* API_ERROR = API_ERROR = "API Error" */
var API_ERROR = "API Error",
    FYA = "Prompt is too long",
    n21 = "Credit balance is too low",
    a21 = "Invalid API key · Please run /login",
    s21 = "Invalid API key · Fix external API key",
    Eq = "(no content)",
    r21 = "OAuth token revoked · Please run /login",
    q00 = "Repeated 529 Overloaded errors",
    U1A = "Opus is experiencing high load, please use /model to switch to Sonnet",
    o21 = "Request timed out",
    nF5 = "PDF too large. Please double press esc to edit your message and try again.",
    aF5 = "PDF is password protected. Please double press esc to edit your message and try again.",
    sF5 = "Image was too large. Double press esc to go back and try again with a smaller image.",
    rF5 = "Your account does not have access to Claude Code. Please run /login.";
var tM = lazyLoader(() => {
    l_();
    hB();
    nQ();
    s2();
    w0();
    zi();
    LMA();
    hQ();
    S0()
});

function t21(A) {
    if (!A || A.trim() === "") return `Your task is to create a detailed summary of the conversation so far, paying close attention to the user's explicit requests and your previous actions.
This summary should be thorough in capturing technical details, code patterns, and architectural decisions that would be essential for continuing development work without losing context.

Before providing your final summary, wrap your analysis in <analysis> tags to organize your thoughts and ensure you've covered all necessary points. In your analysis process:

1. Chronologically analyze each message and section of the conversation. For each section thoroughly identify:
   - The user's explicit requests and intents
   - Your approach to addressing the user's requests
   - Key decisions, technical concepts and code patterns
   - Specific details like:
     - file names
     - full code snippets
     - function signatures
     - file edits
  - Errors that you ran into and how you fixed them
  - Pay special attention to specific user feedback that you received, especially if the user told you to do something differently.
2. Double-check for technical accuracy and completeness, addressing each required element thoroughly.

Your summary should include the following sections:

1. Primary Request and Intent: Capture all of the user's explicit requests and intents in detail
2. Key Technical Concepts: List all important technical concepts, technologies, and frameworks discussed.
3. Files and Code Sections: Enumerate specific files and code sections examined, modified, or created. Pay special attention to the most recent messages and include full code snippets where applicable and include a summary of why this file read or edit is important.
4. Errors and fixes: List all errors that you ran into, and how you fixed them. Pay special attention to specific user feedback that you received, especially if the user told you to do something differently.
5. Problem Solving: Document problems solved and any ongoing troubleshooting efforts.
6. All user messages: List ALL user messages that are not tool results. These are critical for understanding the users' feedback and changing intent.
6. Pending Tasks: Outline any pending tasks that you have explicitly been asked to work on.
7. Current Work: Describe in detail precisely what was being worked on immediately before this summary request, paying special attention to the most recent messages from both user and assistant. Include file names and code snippets where applicable.
8. Optional Next Step: List the next step that you will take that is related to the most recent work you were doing. IMPORTANT: ensure that this step is DIRECTLY in line with the user's most recent explicit requests, and the task you were working on immediately before this summary request. If your last task was concluded, then only list next steps if they are explicitly in line with the users request. Do not start on tangential requests or really old requests that were already completed without confirming with the user first.
                       If there is a next step, include direct quotes from the most recent conversation showing exactly what task you were working on and where you left off. This should be verbatim to ensure there's no drift in task interpretation.

Here's an example of how your output should be structured:

<example>
<analysis>
[Your thought process, ensuring all points are covered thoroughly and accurately]
</analysis>

<summary>
1. Primary Request and Intent:
   [Detailed description]

2. Key Technical Concepts:
   - [Concept 1]
   - [Concept 2]
   - [...]

3. Files and Code Sections:
   - [File Name 1]
      - [Summary of why this file is important]
      - [Summary of the changes made to this file, if any]
      - [Important Code Snippet]
   - [File Name 2]
      - [Important Code Snippet]
   - [...]

4. Errors and fixes:
    - [Detailed description of error 1]:
      - [How you fixed the error]
      - [User feedback on the error if any]
    - [...]

5. Problem Solving:
   [Description of solved problems and ongoing troubleshooting]

6. All user messages: 
    - [Detailed non tool use user message]
    - [...]

7. Pending Tasks:
   - [Task 1]
   - [Task 2]
   - [...]

8. Current Work:
   [Precise description of current work]

9. Optional Next Step:
   [Optional Next step to take]

</summary>
</example>

Please provide your summary based on the conversation so far, following this structure and ensuring precision and thoroughness in your response. 

There may be additional summarization instructions provided in the included context. If so, remember to follow these instructions when creating the above summary. Examples of instructions include:
<example>
## Compact Instructions
When summarizing the conversation focus on typescript code changes and also remember the mistakes you made and how you fixed them.
</example>

<example>
# Summary instructions
When you are using compact - please focus on test output and code changes. Include file reads verbatim.
</example>
`;
    return `Your task is to create a detailed summary of the conversation so far, paying close attention to the user's explicit requests and your previous actions.
This summary should be thorough in capturing technical details, code patterns, and architectural decisions that would be essential for continuing development work without losing context.

Before providing your final summary, wrap your analysis in <analysis> tags to organize your thoughts and ensure you've covered all necessary points. In your analysis process:

1. Chronologically analyze each message and section of the conversation. For each section thoroughly identify:
   - The user's explicit requests and intents
   - Your approach to addressing the user's requests
   - Key decisions, technical concepts and code patterns
   - Specific details like:
     - file names
     - full code snippets
     - function signatures
     - file edits
  - Errors that you ran into and how you fixed them
  - Pay special attention to specific user feedback that you received, especially if the user told you to do something differently.
2. Double-check for technical accuracy and completeness, addressing each required element thoroughly.

Your summary should include the following sections:

1. Primary Request and Intent: Capture all of the user's explicit requests and intents in detail
2. Key Technical Concepts: List all important technical concepts, technologies, and frameworks discussed.
3. Files and Code Sections: Enumerate specific files and code sections examined, modified, or created. Pay special attention to the most recent messages and include full code snippets where applicable and include a summary of why this file read or edit is important.
4. Errors and fixes: List all errors that you ran into, and how you fixed them. Pay special attention to specific user feedback that you received, especially if the user told you to do something differently.
5. Problem Solving: Document problems solved and any ongoing troubleshooting efforts.
6. All user messages: List ALL user messages that are not tool results. These are critical for understanding the users' feedback and changing intent.
6. Pending Tasks: Outline any pending tasks that you have explicitly been asked to work on.
7. Current Work: Describe in detail precisely what was being worked on immediately before this summary request, paying special attention to the most recent messages from both user and assistant. Include file names and code snippets where applicable.
8. Optional Next Step: List the next step that you will take that is related to the most recent work you were doing. IMPORTANT: ensure that this step is DIRECTLY in line with the user's most recent explicit requests, and the task you were working on immediately before this summary request. If your last task was concluded, then only list next steps if they are explicitly in line with the users request. Do not start on tangential requests or really old requests that were already completed without confirming with the user first.
                       If there is a next step, include direct quotes from the most recent conversation showing exactly what task you were working on and where you left off. This should be verbatim to ensure there's no drift in task interpretation.

Here's an example of how your output should be structured:

<example>
<analysis>
[Your thought process, ensuring all points are covered thoroughly and accurately]
</analysis>

<summary>
1. Primary Request and Intent:
   [Detailed description]

2. Key Technical Concepts:
   - [Concept 1]
   - [Concept 2]
   - [...]

3. Files and Code Sections:
   - [File Name 1]
      - [Summary of why this file is important]
      - [Summary of the changes made to this file, if any]
      - [Important Code Snippet]
   - [File Name 2]
      - [Important Code Snippet]
   - [...]

4. Errors and fixes:
    - [Detailed description of error 1]:
      - [How you fixed the error]
      - [User feedback on the error if any]
    - [...]

5. Problem Solving:
   [Description of solved problems and ongoing troubleshooting]

6. All user messages: 
    - [Detailed non tool use user message]
    - [...]

7. Pending Tasks:
   - [Task 1]
   - [Task 2]
   - [...]

8. Current Work:
   [Precise description of current work]

9. Optional Next Step:
   [Optional Next step to take]

</summary>
</example>

Please provide your summary based on the conversation so far, following this structure and ensuring precision and thoroughness in your response. 

There may be additional summarization instructions provided in the included context. If so, remember to follow these instructions when creating the above summary. Examples of instructions include:
<example>
## Compact Instructions
When summarizing the conversation focus on typescript code changes and also remember the mistakes you made and how you fixed them.
</example>

<example>
# Summary instructions
When you are using compact - please focus on test output and code changes. Include file reads verbatim.
</example>


Additional Instructions:
TextComponent{A}`
}

function tF5(A) {
    let Q = A,
        B = Q.match(/<analysis>([\s\S]*?)<\/analysis>/);
    if (B) {
        let Z = B[1] || "";
        Q = Q.replace(/<analysis>[\s\S]*?<\/analysis>/, `Analysis:
TextComponent{Z.trim()}`)
    }
    let G = Q.match(/<summary>([\s\S]*?)<\/summary>/);
    if (G) {
        let Z = G[1] || "";
        Q = Q.replace(/<summary>[\s\S]*?<\/summary>/, `Summary:
TextComponent{Z.trim()}`)
    }
    return Q = Q.replace(/\n\n+/g, `

`), Q.trim()
}

function e21(A, Q) {
    let G = `This session is being continued from a previous conversation that ran out of context. The conversation is summarized below:
TextComponent{tF5(A)}.`;
    if (Q) return `TextComponent{G}
Please continue the conversation from where we left it off without asking the user any further questions. Continue with the last task that you were asked to work on.`;
    return G
}

function A91(A, Q) {
    return
}
var eF5, AV5;
var L00 = lazyLoader(() => {
    o0();
    w0();
    o2();
    eF5 = t1(() => {
        return null
    }), AV5 = t1(() => {
        return null
    })
});

function M00(A) {
    if (A === "Local") return "project (local)";
    return A.toLowerCase()
}
var hZ2;
var O00 = lazyLoader(() => {
    hZ2 = ["User", "Project", "Local", "Managed", "ExperimentalUltraClaudeMd"]
});

function uZ2(A) {
    let Q = {
            toolRequests: new Map,
            toolResults: new Map,
            humanMessages: 0,
            assistantMessages: 0,
            localCommandOutputs: 0,
            other: 0,
            attachments: new Map,
            duplicateFileReads: new Map,
            total: 0
        },
        B = new Map,
        G = new Map,
        Z = new Map;
    return A.forEach((Y) => {
        if (Y.type === "attachment") {
            let J = Y.attachment.type || "unknown";
            Q.attachments.set(J, (Q.attachments.get(J) || 0) + 1)
        }
    }), BZ(A).forEach((Y) => {
        let {
            content: J
        } = Y.message;
        if (typeof J === "string") {
            let W = SG(J);
            if (Q.total += W, Y.type === "user" && J.includes("local-command-stdout")) Q.localCommandOutputs += W;
            else Q[Y.type === "user" ? "humanMessages" : "assistantMessages"] += W
        } else J.forEach((W) => QV5(W, Y, Q, B, G, Z))
    }), Z.forEach((Y, J) => {
        if (Y.count > 1) {
            let X = Math.floor(Y.totalTokens / Y.count) * (Y.count - 1);
            Q.duplicateFileReads.set(J, {
                count: Y.count,
                tokens: X
            })
        }
    }), Q
}

function QV5(A, Q, B, G, Z, I) {
    let Y = SG(JSON.stringify(A));
    switch (B.total += Y, A.type) {
        case "text":
            if (Q.type === "user" && "text" in A && A.text.includes("local-command-stdout")) B.localCommandOutputs += Y;
            else B[Q.type === "user" ? "humanMessages" : "assistantMessages"] += Y;
            break;
        case "tool_use": {
            if ("name" in A && "id" in A) {
                let J = A.name || "unknown";
                if (gZ2(B.toolRequests, J, Y), G.set(A.id, J), J === "Read" && "input" in A && A.input && typeof A.input === "object" && "file_path" in A.input) {
                    let W = String(A.input.file_path);
                    Z.set(A.id, W)
                }
            }
            break
        }
        case "tool_result": {
            if ("tool_use_id" in A) {
                let J = G.get(A.tool_use_id) || "unknown";
                if (gZ2(B.toolResults, J, Y), J === "Read") {
                    let W = Z.get(A.tool_use_id);
                    if (W) {
                        let X = I.get(W) || {
                            count: 0,
                            totalTokens: 0
                        };
                        I.set(W, {
                            count: X.count + 1,
                            totalTokens: X.totalTokens + Y
                        })
                    }
                }
            }
            break
        }
        case "image":
        case "server_tool_use":
        case "web_search_tool_result":
        case "search_result":
        case "document":
        case "thinking":
        case "redacted_thinking":
        case "code_execution_tool_result":
        case "mcp_tool_use":
        case "mcp_tool_result":
        case "container_upload":
        case "web_fetch_tool_result":
        case "bash_code_execution_tool_result":
        case "text_editor_code_execution_tool_result":
            B.other += Y;
            break
    }
}

function gZ2(A, Q, B) {
    A.set(Q, (A.get(Q) || 0) + B)
}

function mZ2(A) {
    let Q = {
        total_tokens: A.total,
        human_message_tokens: A.humanMessages,
        assistant_message_tokens: A.assistantMessages,
        local_command_output_tokens: A.localCommandOutputs,
        other_tokens: A.other
    };
    A.attachments.forEach((G, Z) => {
        Q[`attachment_${Z}_count`] = G
    }), A.toolRequests.forEach((G, Z) => {
        Q[`tool_request_${Z}_tokens`] = G
    }), A.toolResults.forEach((G, Z) => {
        Q[`tool_result_${Z}_tokens`] = G
    });
    let B = [...A.duplicateFileReads.values()].reduce((G, Z) => G + Z.tokens, 0);
    if (Q.duplicate_read_tokens = B, Q.duplicate_read_file_count = A.duplicateFileReads.size, A.total > 0) {
        Q.human_message_percent = Math.round(A.humanMessages / A.total * 100), Q.assistant_message_percent = Math.round(A.assistantMessages / A.total * 100), Q.local_command_output_percent = Math.round(A.localCommandOutputs / A.total * 100), Q.duplicate_read_percent = Math.round(B / A.total * 100);
        let G = [...A.toolRequests.values()].reduce((I, Y) => I + Y, 0),
            Z = [...A.toolResults.values()].reduce((I, Y) => I + Y, 0);
        Q.tool_request_percent = Math.round(G / A.total * 100), Q.tool_result_percent = Math.round(Z / A.total * 100), A.toolRequests.forEach((I, Y) => {
            Q[`tool_request_${Y}_percent`] = Math.round(I / A.total * 100)
        }), A.toolResults.forEach((I, Y) => {
            Q[`tool_result_${Y}_percent`] = Math.round(I / A.total * 100)
        })
    }
    return Q
}
var dZ2 = lazyLoader(() => {
    gM();
    nQ()
});
import {
    spawn as BV5
} from "node:child_process";

function GV5(A, Q, B) {
    return {
        type: "callback",
        timeout: B,
        callback: async (G, Z, I, Y) => {
            let J = A.replace(/\TextComponent\{CLAUDE_PLUGIN_ROOT\}/g, Q),
                W = {
                    ...process.env,
                    CLAUDE_PLUGIN_ROOT: Q,
                    CLAUDE_PROJECT_DIR: pQ()
                };
            if (G.hook_event_name === "SessionStart" && Y !== void 0) W.CLAUDE_ENV_FILE = UrA(Y);
            let X = JSON.stringify(G),
                F = BV5(J, [], {
                    env: W,
                    shell: !0,
                    signal: I
                }),
                V = "",
                K = "";
            F.stdout.on("data", (H) => {
                V += H.toString()
            }), F.stderr.on("data", (H) => {
                K += H.toString()
            }), F.stdin.write(X), F.stdin.end();
            let D = await new Promise((H, C) => {
                F.on("close", (E) => {
                    H(E ?? 1)
                }), F.on("error", C)
            });
            try {
                let H = V.trim();
                if (H.startsWith("{")) return JSON.parse(H)
            } catch {}
            if (D === 0) return {
                suppressOutput: !1
            };
            else if (D === 2) return {
                decision: "block",
                reason: K
            };
            else return {
                suppressOutput: !1,
                systemMessage: `Plugin hook error: TextComponent{K}`
            }
        }
    }
}

function ZV5(A) {
    let Q = {
        PreToolUse: [],
        PostToolUse: [],
        PostToolUseFailure: [],
        Notification: [],
        UserPromptSubmit: [],
        SessionStart: [],
        SessionEnd: [],
        Stop: [],
        SubagentStart: [],
        SubagentStop: [],
        PreCompact: [],
        PermissionRequest: []
    };
    if (!A.hooksConfig) return Q;
    for (let [B, G] of Object.entries(A.hooksConfig)) {
        let Z = B;
        if (!Q[Z]) continue;
        for (let I of G) {
            let Y = [];
            for (let J of I.hooks)
                if (J.type === "command") Y.push(GV5(J.command, A.path, J.timeout));
            if (Y.length > 0) Q[Z].push({
                matcher: I.matcher,
                hooks: Y,
                pluginName: A.name
            })
        }
    }
    return Q
}

function cZ2() {
    w1A.cache?.clear?.()
}
var w1A;
var MMA = lazyLoader(() => {
    o2();
    NF();
    D0();
    S0();
    m$A();
    w1A = t1(async () => {
        let {
            enabled: A
        } = await y7(), Q = {
            PreToolUse: [],
            PostToolUse: [],
            PostToolUseFailure: [],
            Notification: [],
            UserPromptSubmit: [],
            SessionStart: [],
            SessionEnd: [],
            Stop: [],
            SubagentStart: [],
            SubagentStop: [],
            PreCompact: [],
            PermissionRequest: []
        };
        for (let G of A) {
            if (!G.hooksConfig) continue;
            g(`Loading hooks from plugin: TextComponent{G.name}`);
            let Z = ZV5(G);
            for (let I of Object.keys(Z)) Q[I].push(...Z[I])
        }
        ZkA(Q);
        let B = Object.values(Q).reduce((G, Z) => G + Z.reduce((I, Y) => I + Y.hooks.length, 0), 0);
        g(`Registered TextComponent{B} hooks from TextComponent{A.length} plugins`)
    })
});
async function zq(A, Q) {
    let B = [],
        G = [];
    if (O21()) g("Skipping plugin hooks - allowManagedHooksOnly is enabled");
    else try {
        await w1A()
    } catch (Z) {
        let I = Z instanceof Error ? Error(`Failed to load plugin hooks during TextComponent{A}: TextComponent{Z.message}`) : Error(`Failed to load plugin hooks during TextComponent{A}: TextComponent{String(Z)}`);
        if (Z instanceof Error && Z.stack) I.stack = Z.stack;
        e(I);
        let Y = Z instanceof Error ? Z.message : String(Z),
            J = "";
        if (Y.includes("Failed to clone") || Y.includes("network") || Y.includes("ETIMEDOUT") || Y.includes("ENOTFOUND")) J = "This appears to be a network issue. Check your internet connection and try again.";
        else if (Y.includes("Permission denied") || Y.includes("EACCES") || Y.includes("EPERM")) J = "This appears to be a permissions issue. Check file permissions on ~/.claude/plugins/";
        else if (Y.includes("Invalid") || Y.includes("parse") || Y.includes("JSON") || Y.includes("schema")) J = "This appears to be a configuration issue. Check your plugin settings in .claude/settings.json";
        else J = "Please fix the plugin configuration or remove problematic plugins from your settings.";
        g(`Warning: Failed to load plugin hooks. SessionStart hooks from plugins will not execute. Error: TextComponent{Y}. TextComponent{J}`, {
            level: "warn"
        })
    }
    for await (let Z of R00(A, Q)) {
        if (Z.message) B.push(Z.message);
        if (Z.additionalContexts && Z.additionalContexts.length > 0) G.push(...Z.additionalContexts)
    }
    if (G.length > 0) {
        let Z = p9({
            type: "hook_additional_context",
            content: G,
            hookName: "SessionStart",
            toolUseID: "SessionStart",
            hookEvent: "SessionStart"
        });
        B.push(Z)
    }
    return B
}
var q1A = lazyLoader(() => {
    AO();
    MMA();
    u1();
    D0();
    eM();
    AYA()
});
async function Q91(A, Q, B, G, Z = !1) {
    try {
        if (A.length === 0) throw Error(OMA);
        let I = AK(A),
            Y = uZ2(A),
            J = {};
        try {
            J = mZ2(Y)
        } catch (o) {
            e(o)
        }