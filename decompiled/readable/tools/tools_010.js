/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.072Z
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 10/25
 * Lines: 292979 - 294472 (1494 lines)
 * Original file: cli.js
 */

        let W = await Q.getAppState();
        A91(W.toolPermissionContext, "summary"), Q.setSpinnerColor?.("claudeBlue_FOR_SYSTEM_SPINNER"), Q.setSpinnerShimmerColor?.("claudeBlueShimmer_FOR_SYSTEM_SPINNER"), Q.setSpinnerMessage?.("Running PreCompact hooks..."), Q.setSDKStatus?.("compacting");
        let X = await j00({
            trigger: Z ? "auto" : "manual",
            customInstructions: G ?? null,
            sessionId: Q.agentId
        }, Q.abortController.signal);
        if (X.newCustomInstructions) G = G ? `${G}

${X.newCustomInstructions}` : X.newCustomInstructions;
        let F = X.userDisplayMessage;
        Q.setStreamMode?.("requesting"), Q.setResponseLength?.(() => 0), Q.setSpinnerMessage?.("Compacting conversation");
        let V = t21(G),
            K = j0({
                content: V
            }),
            H = VYA({
                messages: BZ([...gk(A), K]),
                systemPrompt: ["You are a helpful AI assistant tasked with summarizing conversations."],
                maxThinkingTokens: 0,
                tools: [d8],
                signal: Q.abortController.signal,
                options: {
                    async getToolPermissionContext() {
                        return (await Q.getAppState()).toolPermissionContext
                    },
                    model: S3(),
                    toolChoice: void 0,
                    isNonInteractiveSession: Q.options.isNonInteractiveSession,
                    hasAppendSystemPrompt: Q.options.hasAppendSystemPrompt,
                    maxOutputTokensOverride: o_A,
                    querySource: "compact",
                    agents: Q.options.agentDefinitions.activeAgents,
                    mcpTools: [],
                    agentIdOrSessionId: G0()
                }
            })[Symbol.asyncIterator](),
            C = await H.next(),
            E = !1,
            z;
        while (!C.done) {
            let o = C.value;
            if (!E && o.type === "stream_event" && o.event.type === "content_block_start" && o.event.content_block.type === "text") E = !0, Q.setStreamMode?.("responding");
            if (o.type === "stream_event" && o.event.type === "content_block_delta" && o.event.delta.type === "text_delta") {
                let l = o.event.delta.text.length;
                Q.setResponseLength?.((k) => k + l)
            }
            if (o.type === "assistant") z = o;
            C = await H.next()
        }
        if (!z) throw Error("Failed to get summary response from streaming");
        let w = Ui(z);
        if (!w) throw BA("tengu_compact_failed", {
            reason: "no_summary",
            preCompactTokenCount: I
        }), Error("Failed to generate conversation summary - response did not contain valid text content");
        else if (w.startsWith(vF)) throw BA("tengu_compact_failed", {
            reason: "api_error",
            preCompactTokenCount: I
        }), Error(w);
        else if (w.startsWith(FYA)) throw BA("tengu_compact_failed", {
            reason: "prompt_too_long",
            preCompactTokenCount: I
        }), Error(WV5);
        let N = V22(Q.readFileState);
        Q.readFileState.clear();
        let q = await FV5(N, Q, IV5),
            R = VV5(Q.agentId);
        if (R) q.push(R);
        let P = T00(Q.agentId);
        if (P) q.push(P);
        Q.setSpinnerMessage?.("Running SessionStart hooks...");
        let y = await zq("compact"),
            v = AK([z]),
            x = m21(z);
        BA("tengu_compact", {
            preCompactTokenCount: I,
            postCompactTokenCount: v,
            compactionInputTokens: x?.input_tokens,
            compactionOutputTokens: x?.output_tokens,
            compactionCacheReadTokens: x?.cache_read_input_tokens ?? 0,
            compactionCacheCreationTokens: x?.cache_creation_input_tokens ?? 0,
            compactionTotalTokens: x ? x.input_tokens + (x.cache_creation_input_tokens ?? 0) + (x.cache_read_input_tokens ?? 0) + x.output_tokens : 0,
            ...J
        });
        let p = B91(Z ? "auto" : "manual", I ?? 0),
            u = [j0({
                content: e21(w, B),
                isCompactSummary: !0,
                isVisibleInTranscriptOnly: !0
            })];
        return {
            boundaryMarker: p,
            summaryMessages: u,
            attachments: q,
            hookResults: y,
            userDisplayMessage: F,
            preCompactTokenCount: I,
            postCompactTokenCount: v,
            compactionUsage: x
        }
    } catch (I) {
        throw XV5(I, Q), I
    } finally {
        Q.setStreamMode?.("requesting"), Q.setResponseLength?.(() => 0), Q.setSpinnerMessage?.(null), Q.setSDKStatus?.(null), Q.setSpinnerColor?.(null), Q.setSpinnerShimmerColor?.(null)
    }
}

function XV5(A, Q) {
    if (!kKA(A, RMA) && !kKA(A, OMA)) Q.addNotification?.({
        key: "error-compacting-conversation",
        text: "Error compacting conversation",
        priority: "immediate",
        color: "error"
    })
}

async function FV5(A, Q, B) {
    let G = Object.entries(A).map(([Y, J]) => ({
            filename: Y,
            ...J
        })).filter((Y) => !KV5(Y.filename, Q.agentId)).sort((Y, J) => J.timestamp - Y.timestamp).slice(0, B),
        Z = await Promise.all(G.map(async (Y) => {
            let J = await P00(Y.filename, {
                ...Q,
                fileReadingLimits: {
                    maxTokens: JV5
                }
            }, "tengu_post_compact_file_restore_success", "tengu_post_compact_file_restore_error", "compact");
            return J ? p9(J) : null
        })),
        I = 0;
    return Z.filter((Y) => {
        if (Y === null) return !1;
        let J = SG(JSON.stringify(Y));
        if (I + J <= YV5) return I += J, !0;
        return !1
    })
}

function VV5(A) {
    let Q = Eh(A);
    if (Q.length === 0) return null;
    return p9({
        type: "todo",
        content: Q,
        itemCount: Q.length,
        context: "post-compact"
    })
}

function T00(A) {
    let Q = fU(A);
    if (!Q) return null;
    let B = bU(A);
    return p9({
        type: "plan_file_reference",
        planFilePath: B,
        planContent: Q
    })
}

function KV5(A, Q) {
    let B = gl(A);
    try {
        let G = gl(Ci(Q));
        if (B === G) return !0
    } catch {}
    try {
        let G = gl(bU(Q));
        if (B === G) return !0
    } catch {}
    try {
        if (new Set(hZ2.map((Z) => gl(xo(Z)))).has(B)) return !0
    } catch {}
    return !1
}
var IV5 = 5,
    YV5 = 50000,
    JV5 = 5000,
    OMA = "Not enough messages to compact.",
    WV5 = "Conversation too long. Press esc twice to go up a few messages and try again.",
    RMA = "API Error: Request was aborted.";
var TMA = L(() => {
    kZ();
    tM();
    nQ();
    w0();
    $Z();
    oM();
    Kq();
    uM();
    L00();
    s2();
    eM();
    Ei();
    jQ();
    _E();
    M9();
    O00();
    gM();
    dZ2();
    u1();
    AO();
    q1A();
    S0()
});

function lZ2() {
    return pZ2
}

function iZ2(A) {
    pZ2 = A
}

function nZ2() {
    G91 = Date.now()
}

function aZ2() {
    G91 = void 0
}
// Async function: sZ2
async function sZ2() {
    let A = Date.now();
    while (G91) {
        if (Date.now() - G91 > HV5) return;
        if (Date.now() - A > DV5) return;
        await new Promise((B) => setTimeout(B, 1000))
    }
}

function rZ2() {
    let A = OA(),
        Q = Z91();
    if (!A.existsSync(Q)) return null;
    return A.readFileSync(Q, {
        encoding: "utf-8"
    })
}
var DV5 = 15000,
    HV5 = 60000,
    pZ2, G91;
var S00 = L(() => {
    o0();
    _Y()
});

function $V5(A, Q) {
    if (!Q.some((G) => G.type === "assistant") && !y00.has(A)) {
        if (ZI("cc_microcompact_ext", "mc_disabled", !1)) y00.add(A)
    }
    return y00.has(A)
}

function eZ2(A) {
    if (!A.content) return 0;
    if (typeof A.content === "string") return SG(A.content);
    return A.content.reduce((Q, B) => {
        if (B.type === "text") return Q + SG(B.text);
        else if (B.type === "image") return Q + tZ2;
        return Q
    }, 0)
}

function wV5(A, Q) {
    let B = oZ2.get(A);
    if (B === void 0) B = eZ2(Q), oZ2.set(A, B);
    return B
}

function x00(A) {
    let Q = 0;
    for (let B of A) {
        if (B.type !== "user" && B.type !== "assistant") continue;
        if (!Array.isArray(B.message.content)) continue;
        for (let G of B.message.content)
            if (G.type === "text") Q += SG(G.text);
            else if (G.type === "tool_result") Q += eZ2(G);
        else if (G.type === "image") Q += tZ2;
        else Q += SG(JSON.stringify(G))
    }
    return Math.ceil(Q * 1.3333333333333333)
}

function qV5(A) {
    return I91.push(A), () => {
        I91 = I91.filter((Q) => Q !== A)
    }
}

function NV5() {
    I91.forEach((A) => A())
}
async function $i(A, Q, B) {
    if (Y91 = !1, V0(process.env.DISABLE_MICROCOMPACT)) return {
        messages: A
    };
    if ($V5(G0(), A)) return {
        messages: A
    };
    V0(process.env.USE_API_CONTEXT_MANAGEMENT);
    let G = Q !== void 0,
        Z = G ? Q : EV5,
        I = [],
        Y = new Map;
    for (let D of A)
        if ((D.type === "user" || D.type === "assistant") && Array.isArray(D.message.content)) {
            for (let H of D.message.content)
                if (H.type === "tool_use" && UV5.has(H.name)) {
                    if (!_00.has(H.id)) I.push(H.id)
                } else if (H.type === "tool_result" && I.includes(H.tool_use_id)) {
                let C = wV5(H.tool_use_id, H);
                Y.set(H.tool_use_id, C)
            }
        } let J = I.slice(-zV5),
        W = Array.from(Y.values()).reduce((D, H) => D + H, 0),
        X = 0,
        F = new Set;
    for (let D of I) {
        if (J.includes(D)) continue;
        if (W - X > Z) F.add(D), X += Y.get(D) || 0
    }
    if (!G) {
        let D = AK(A);
        if (!L1A(D).isAboveWarningThreshold || X < CV5) F.clear(), X = 0
    }
    let V = (D) => {
        return _00.has(D) || F.has(D)
    };
    if (F.size > 0, F.size > 0) A.filter((H) => H && H.type === "attachment" && H.attachment.type === "memory" && !k00.has(H.uuid)).map((H) => ({
        uuid: H.uuid
    })).forEach((H) => k00.add(H.uuid));
    let K = [];
    for (let D of A) {
        if (D.type === "attachment" && k00.has(D.uuid)) continue;
        if (D.type !== "user" && D.type !== "assistant") {
            K.push(D);
            continue
        }
        if (!Array.isArray(D.message.content)) {
            K.push(D);
            continue
        }
        if (D.type === "user") {
            let H = [];
            for (let C of D.message.content)
                if (C.type === "tool_result" && V(C.tool_use_id)) H.push({
                    ...C,
                    content: "[Old tool result content cleared]"
                });
                else H.push(C);
            if (H.length > 0) K.push({
                ...D,
                message: {
                    ...D.message,
                    content: H
                }
            })
        } else {
            let H = [];
            for (let C of D.message.content) H.push(C);
            K.push({
                ...D,
                message: {
                    ...D.message,
                    content: H
                }
            })
        }
    }
    if (B && F.size > 0) {
        let D = new Map,
            H = new Set;
        for (let C of A)
            if ((C.type === "user" || C.type === "assistant") && Array.isArray(C.message.content)) {
                for (let E of C.message.content)
                    if (E.type === "tool_use" && E.name === READ_TOOL_NAME) {
                        let z = E.input?.file_path;
                        if (typeof z === "string")
                            if (F.has(E.id)) D.set(z, E.id);
                            else H.add(z)
                    }
            } for (let [C] of D)
            if (!H.has(C)) B.readFileState.delete(C)
    }
    for (let D of F) _00.add(D);
    if (F.size > 0) return BA("tengu_microcompact", {
        toolsCompacted: F.size,
        totalUncompactedTokens: W,
        tokensAfterCompaction: W - X,
        tokensSaved: X,
        triggerType: G ? "manual" : "auto"
    }), Y91 = !0, NV5(), {
        messages: K
    };
    return {
        messages: K
    }
}

function AI2() {
    let [A, Q] = J91.useState(Y91);
    return J91.useEffect(() => {
        return qV5(() => {
            Q(Y91)
        })
    }, []), A
}
var J91, CV5 = 20000,
    EV5 = 40000,
    zV5 = 3,
    tZ2 = 2000,
    UV5, _00, k00, oZ2, y00, Y91 = !1,
    I91;
var N1A = L(() => {
    gM();
    O9();
    w0();
    hQ();
    S0();
    nQ();
    oM();
    M1A();
    xV();
    XT();
    B7A();
    L_();
    J91 = GA(VA(), 1), UV5 = new Set([READ_TOOL_NAME, BASH_TOOL_NAME, GREP_TOOL_NAME, GLOB_TOOL_NAME, WEB_SEARCH_TOOL_NAME, WEB_FETCH_TOOL_NAME, EDIT_TOOL_NAME, WRITE_TOOL_NAME]), _00 = new Set, k00 = new Set, oZ2 = new Map, y00 = new Set;
    I91 = []
});
// Async function: LV5
async function LV5() {
    return !1
}

function MV5(A, Q, B, G) {
    let Z = AK(A),
        I = B91("auto", Z ?? 0),
        Y = [j0({
            content: e21(Q, !0),
            isCompactSummary: !0,
            isVisibleInTranscriptOnly: !0
        })],
        J = T00(G);
    return {
        boundaryMarker: I,
        summaryMessages: Y,
        attachments: J ? [J] : [],
        hookResults: [],
        messagesToKeep: B,
        preCompactTokenCount: Z,
        postCompactTokenCount: x00(Y)
    }
}

async function W91(A, Q, B) {
    if (!await LV5()) return null;
    await sZ2();
    let G = lZ2(),
        Z = rZ2();
    if (!G || !Z) return null;
    try {
        let I = A.findIndex((F) => F.uuid === G);
        if (I === -1) return null;
        let Y = A.slice(I + 1),
            J = MV5(A, Z, Y, Q),
            W = [J.boundaryMarker, ...J.summaryMessages, ...J.attachments, ...J.hookResults, ...Y],
            X = x00(W);
        if (B !== void 0 && X >= B) return BA("tengu_sm_compact_threshold_exceeded", {
            postCompactTokenCount: X,
            autoCompactThreshold: B
        }), null;
        return {
            ...J,
            postCompactTokenCount: X
        }
    } catch {
        return null
    }
}
var v00 = L(() => {
    TMA();
    oM();
    nQ();
    S00();
    O9();
    w0();
    N1A()
});

function KYA() {
    let A = S3(),
        Q = f00(A);
    return bu(A) - Q
}

function QI2() {
    let A = KYA(),
        Q = A - b00,
        B = process.env.CLAUDE_AUTOCOMPACT_PCT_OVERRIDE;
    if (B) {
        let G = parseFloat(B);
        if (!isNaN(G) && G > 0 && G <= 100) {
            let Z = Math.floor(A * (G / 100));
            return Math.min(Z, Q)
        }
    }
    return Q
}

function L1A(A) {
    let Q = QI2(),
        B = O1A() ? Q : KYA(),
        G = Math.max(0, Math.round((B - A) / B * 100)),
        Z = B - OV5,
        I = B - RV5,
        Y = A >= Z,
        J = A >= I,
        W = O1A() && A >= Q;
    return {
        percentLeft: G,
        isAboveWarningThreshold: Y,
        isAboveErrorThreshold: J,
        isAboveAutoCompactThreshold: W
    }
}

function O1A() {
    return L1().autoCompactEnabled
}

async function TV5(A, Q) {
    if (Q === "session_memory") return !1;
    if (!O1A()) return !1;
    let B = AK(A),
        {
            isAboveAutoCompactThreshold: G
        } = L1A(B);
    return G
}

async function BI2(A, Q, B) {
    if (V0(process.env.DISABLE_COMPACT)) return {
        wasCompacted: !1
    };
    if (!await TV5(A, B)) return {
        wasCompacted: !1
    };
    let Z = await W91(A, Q.agentId, QI2());
    if (Z) return {
        wasCompacted: !0,
        compactionResult: Z
    };
    try {
        return {
            wasCompacted: !0,
            compactionResult: await Q91(A, Q, !0, void 0, !0)
        }
    } catch (I) {
        if (!kKA(I, RMA)) e(I instanceof Error ? I : Error(String(I)));
        return {
            wasCompacted: !1
        }
    }
}
var b00 = 13000,
    OV5 = 20000,
    RV5 = 20000;
var M1A = L(() => {
    oM();
    TMA();
    u1();
    jQ();
    $Z();
    s2();
    kZ();
    hQ();
    v00()
});
import {
    randomUUID as PV5
} from "node:crypto";

async function _V5(A, Q, B, G, Z, I) {
    if (V0(process.env.CLAUDE_CODE_DISABLE_ATTACHMENTS)) return [];
    let Y = s9();
    setTimeout(() => {
        Y.abort()
    }, 1000);
    let J = {
            ...Q,
            abortController: Y
        },
        W = Q.agentId === G0(),
        X = A ? [SW("at_mentioned_files", () => gV5(A, J)), SW("mcp_resources", () => mV5(A, J)), SW("agent_mentions", () => Promise.resolve(uV5(A, Q.options.agentDefinitions.activeAgents)))] : [],
        F = await Promise.all(X),
        V = [SW("changed_files", () => dV5(J)), SW("nested_memory", () => cV5(J)), SW("ultra_claude_md", async () => bV5(Z)), SW("plan_mode", () => xV5(Z, Q)), SW("todo_reminders", () => eV5(Z, Q))],
        K = W ? [SW("ide_selection", async () => fV5(B, Q)), SW("ide_opened_file", async () => hV5(B, Q)), SW("output_style", async () => Promise.resolve(vV5())), SW("queued_commands", async () => kV5(G)), SW("diagnostics", async () => rV5()), SW("lsp_diagnostics", async () => oV5()), SW("background_shells", async () => QK5(Q)), SW("background_remote_sessions", async () => AK5(Q)), SW("async_hook_responses", async () => BK5()), SW("memory", async () => LZ2(Q, Z, I)), SW("token_usage", async () => Promise.resolve(GK5(Z ?? []))), SW("budget_usd", async () => Promise.resolve(ZK5(Q.options.maxBudgetUsd))), SW("async_agents", async () => IK5(Q))] : [],
        [D, H] = await Promise.all([Promise.all(V), Promise.all(K)]);
    return [...F.flat(), ...D.flat(), ...H.flat()]
}

async function SW(A, Q) {
    let B = Date.now();
    try {
        let G = await Q(),
            Z = Date.now() - B,
            I = G.reduce((Y, J) => {
                return Y + JSON.stringify(J).length
            }, 0);
        if (Math.random() < 0.05) BA("tengu_attachment_compute_duration", {
            label: A,
            duration_ms: Z,
            attachment_size_bytes: I,
            attachment_count: G.length
        });
        return G
    } catch (G) {
        let Z = Date.now() - B;
        if (Math.random() < 0.05) BA("tengu_attachment_compute_duration", {
            label: A,
            duration_ms: Z,
            error: !0
        });
        return e(G), yN(`Attachment error in ${A}`, G), []
    }
}

function kV5(A) {
    if (!A) return [];
    return A.filter((Q) => Q.mode === "prompt").map((Q) => ({
        type: "queued_command",
        prompt: Q.value,
        source_uuid: Q.uuid
    }))
}

function yV5(A) {
    let Q = 0,
        B = !1;
    for (let G = A.length - 1; G >= 0; G--) {
        let Z = A[G];
        if (Z?.type === "assistant") {
            if (h00(Z)) continue;
            Q++
        } else if (Z?.type === "attachment" && (Z.attachment.type === "plan_mode" || Z.attachment.type === "plan_mode_reentry")) {
            B = !0;
            break
        }
    }
    return {
        turnCount: Q,
        foundPlanModeAttachment: B
    }
}

async function xV5(A, Q) {
    if ((await Q.getAppState()).toolPermissionContext.mode !== "plan") return [];
    if (A && A.length > 0) {
        let {
            turnCount: J,
            foundPlanModeAttachment: W
        } = yV5(A);
        if (W && J < jV5.TURNS_BETWEEN_ATTACHMENTS) return []
    }
    let Z = bU(Q.agentId),
        I = fU(Q.agentId),
        Y = [];
    if (vE0() && I !== null) Y.push({
        type: "plan_mode_reentry",
        planFilePath: Z
    }), hu(!1);
    return Y.push({
        type: "plan_mode",
        isSubAgent: Q.isSubAgent,
        planFilePath: Z,
        planExists: I !== null
    }), Y
}

function vV5() {
    let Q = c0()?.outputStyle || "default";
    if (Q === "default") return [];
    return [{
        type: "output_style",
        style: Q
    }]
}

function bV5(A) {
    return []
}

async function fV5(A, Q) {
    let B = MB1(Q.options.mcpClients);
    if (!B || A?.lineStart === void 0 || !A.text || !A.filePath) return [];
    let G = await Q.getAppState();
    if (DYA(A.filePath, G.toolPermissionContext)) return [];
    return [{
        type: "selected_lines_in_ide",
        ideName: B,
        lineStart: A.lineStart,
        lineEnd: A.lineStart + A.lineCount - 1,
        filename: A.filePath,
        content: A.text
    }]
}

function ZI2(A, Q, B) {
    let G = [];
    try {
        let Z = AZ2(A, B.toolPermissionContext);
        for (let I of Z)
            if (!Q.readFileState.has(I.path)) G.push({
                type: "nested_memory",
                path: I.path,
                content: I
            }), Q.readFileState.set(I.path, {
                content: I.content,
                timestamp: Date.now(),
                offset: void 0,
                limit: void 0
            })
    } catch (Z) {
        e(Z)
    }
    return G
}

async function hV5(A, Q) {
    if (!A?.filePath || A.text) return [];
    let B = await Q.getAppState();
    if (DYA(A.filePath, B.toolPermissionContext)) return [];
    return [...ZI2(A.filePath, Q, B), {
        type: "opened_file_in_ide",
        filename: A.filePath
    }]
}

async function gV5(A, Q) {
    let B = pV5(A),
        G = await Q.getAppState();
    return (await Promise.all(B.map(async (I) => {
        try {
            let {
                filename: Y,
                lineStart: J,
                lineEnd: W
            } = nV5(I), X = b9(Y);
            if (DYA(X, G.toolPermissionContext)) return null;
            try {
                if (OA().statSync(X).isDirectory()) try {
                    let V = await X9.call({
                        command: `ls ${M8([X])}`,
                        description: `Lists files in ${X}`
                    }, Q);
                    BA("tengu_at_mention_extracting_directory_success", {});
                    let K = V.data.stdout;
                    return {
                        type: "directory",
                        path: X,
                        content: K
                    }
                } catch {
                    return null
                }
            } catch {}
            return await P00(X, Q, "tengu_at_mention_extracting_filename_success", "tengu_at_mention_extracting_filename_error", "at-mention", {
                offset: J,
                limit: W && J ? W - J + 1 : void 0
            })
        } catch {
            BA("tengu_at_mention_extracting_filename_error", {})
        }
    }))).filter(Boolean)
}

function uV5(A, Q) {
    let B = iV5(A);
    if (B.length === 0) return [];
    return B.map((Z) => {
        let I = Z.replace("agent-", ""),
            Y = Q.find((J) => J.agentType === I);
        if (!Y) return BA("tengu_at_mention_agent_not_found", {}), null;
        return BA("tengu_at_mention_agent_success", {}), {
            type: "agent_mention",
            agentType: Y.agentType
        }
    }).filter((Z) => Z !== null)
}

async function mV5(A, Q) {
    let B = lV5(A);
    if (B.length === 0) return [];
    let G = Q.options.mcpClients || [];
    return (await Promise.all(B.map(async (I) => {
        try {
            let [Y, ...J] = I.split(":"), W = J.join(":");
            if (!Y || !W) return BA("tengu_at_mention_mcp_resource_error", {}), null;
            let X = G.find((K) => K.name === Y);
            if (!X || X.type !== "connected") return BA("tengu_at_mention_mcp_resource_error", {}), null;
            let V = (Q.options.mcpResources?.[Y] || []).find((K) => K.uri === W);
            if (!V) return BA("tengu_at_mention_mcp_resource_error", {}), null;
            try {
                let K = await X.client.readResource({
                    uri: W
                });
                return BA("tengu_at_mention_mcp_resource_success", {}), {
                    type: "mcp_resource",
                    server: Y,
                    uri: W,
                    name: V.name || W,
                    description: V.description,
                    content: K
                }
            } catch (K) {
                return BA("tengu_at_mention_mcp_resource_error", {}), e(K), null
            }
        } catch {
            return BA("tengu_at_mention_mcp_resource_error", {}), null
        }
    }))).filter((I) => I !== null)
}

async function dV5(A) {
    let Q = await A.getAppState();
    return (await Promise.all(dl(A.readFileState).map(async (G) => {
        let Z = A.readFileState.get(G);
        if (!Z) return null;
        if (Z.offset !== void 0 || Z.limit !== void 0) return null;
        let I = b9(G);
        if (DYA(I, Q.toolPermissionContext)) return null;
        try {
            if (RD(I) <= Z.timestamp) return null;
            let Y = {
                file_path: I
            };
            if (!(await d8.validateInput(Y, A)).result) return null;
            let W = await d8.call(Y, A);
            if (I === Ci(A.agentId)) {
                let X = Eh(A.agentId);
                return {
                    type: "todo",
                    content: X,
                    itemCount: X.length,
                    context: "file-watch"
                }
            }
            if (W.data.type === "text") {
                if (X00(Z.content, W.data.file.content) === "") return null;
                return {
                    type: "edited_text_file",
                    filename: I,
                    snippet: X00(Z.content, W.data.file.content)
                }
            }
            if (W.data.type === "image") try {
                let X = await Pt1(I);
                return {
                    type: "edited_image_file",
                    filename: I,
                    content: X
                }
            } catch (X) {
                return e(X), BA("tengu_watched_file_compression_failed", {
                    file: I
                }), null
            }
        } catch {
            return BA("tengu_watched_file_stat_error", {}), null
        }
    }))).filter((G) => G !== null)
}

async function cV5(A) {
    let Q = await A.getAppState(),
        B = [];
    if (A.nestedMemoryAttachmentTriggers && A.nestedMemoryAttachmentTriggers.size > 0) {
        for (let G of A.nestedMemoryAttachmentTriggers) {
            let Z = ZI2(G, A, Q);
            B.push(...Z)
        }
        A.nestedMemoryAttachmentTriggers.clear()
    }
    return B
}

function pV5(A) {
    let Q = /(^|\s)@"([^"]+)"/g,
        B = /(^|\s)@([^\s]+)\b/g,
        G = [],
        Z = [],
        I;
    while ((I = Q.exec(A)) !== null)
        if (I[2]) G.push(I[2]);
    return (A.match(B) || []).forEach((J) => {
        let W = J.slice(J.indexOf("@") + 1);
        if (!W.startsWith('"')) Z.push(W)
    }), [...new Set([...G, ...Z])]
}

function lV5(A) {
    let Q = /(^|\s)@([^\s]+:[^\s]+)\b/g,
        B = A.match(Q) || [];
    return [...new Set(B.map((G) => G.slice(G.indexOf("@") + 1)))]
}

function iV5(A) {
    let Q = /(^|\s)@(agent-[\w:.@-]+)/g,
        B = A.match(Q) || [];
    return [...new Set(B.map((G) => G.slice(G.indexOf("@") + 1)))]
}

function nV5(A) {
    let Q = A.match(/^([^#]+)(?:#L(\d+)(?:-(\d+))?)?$/);
    if (!Q) return {
        filename: A
    };
    let [, B, G, Z] = Q, I = G ? parseInt(G, 10) : void 0, Y = Z ? parseInt(Z, 10) : I;
    return {
        filename: B ?? A,
        lineStart: I,
        lineEnd: Y
    }
}

function aV5(A) {
    let Q = 0,
        B = !1;
    for (let G = A.length - 1; G >= 0; G--) {
        let Z = A[G];
        if (Z?.type === "attachment" && Z.attachment.type === "ultramemory") {
            B = !0;
            break
        }
        if (Z?.type === "assistant") Q += xB2(Z)
    }
    return B ? Q : null
}

function sV5(A) {
    if (!A || A.length === 0) return !0;
    let Q = aV5(A);
    if (Q === null) return !0;
    return Q >= SV5.TOKEN_COOLDOWN
}
// Async function: rV5
async function rV5() {
    let A = await Uh.getNewDiagnostics();
    if (A.length === 0) return [];
    return [{
        type: "diagnostics",
        files: A,
        isNew: !0
    }]
}
// Async function: oV5
async function oV5() {
    g("LSP Diagnostics: getLSPDiagnosticAttachments called");
    try {
        let A = jZ2();
        if (A.length === 0) return [];
        g(`LSP Diagnostics: Found ${A.length} pending diagnostic set(s)`);
        let Q = A.map(({
            files: B
        }) => ({
            type: "diagnostics",
            files: B,
            isNew: !0
        }));
        if (A.length > 0) SZ2(), g(`LSP Diagnostics: Cleared ${A.length} delivered diagnostic(s) from registry`);
        return g(`LSP Diagnostics: Returning ${Q.length} diagnostic attachment(s)`), Q
    } catch (A) {
        let Q = A instanceof Error ? A : Error(String(A));
        return e(Error(`Failed to get LSP diagnostic attachments: ${Q.message}`)), []
    }
}
async function* HYA(A, Q, B, G, Z, I) {
    let Y = await _V5(A, Q, B, G, Z, I);
    if (Y.length === 0) return;
    BA("tengu_attachments", {
        attachment_types: Y.map((J) => J.type)
    });
    for (let J of Y) yield p9(J)
}

async function P00(A, Q, B, G, Z, I) {
    let {
        offset: Y,
        limit: J
    } = I ?? {}, W = await Q.getAppState();
    if (DYA(A, W.toolPermissionContext)) return null;
    if (Z === "at-mention" && !QQ1(A)) try {
        let F = OA().statSync(A);
        return BA("tengu_attachment_file_too_large", {
            size_bytes: F.size,
            mode: Z
        }), null
    } catch {}
    let X = Q.readFileState.get(A);
    if (X && Z === "at-mention") try {
        let F = RD(A);
        if (X.timestamp <= F && F === X.timestamp) return BA(B, {}), {
            type: "already_read_file",
            filename: A,
            content: {
                type: "text",
                file: {
                    filePath: A,
                    content: X.content,
                    numLines: X.content.split(`
`).length,
                    startLine: Y ?? 1,
                    totalLines: X.content.split(`
`).length
                }
            }
        }
    } catch {}
    try {
        let F = {
            file_path: A,
            offset: Y,
            limit: J
        };
        // Async function: V
async function V() {
            if (Z === "compact") return {
                type: "compact_file_reference",
                filename: A
            };
            let D = await Q.getAppState();
            if (DYA(A, D.toolPermissionContext)) return null;
            try {
                let H = {
                        file_path: A,
                        offset: Y ?? 1,
                        limit: ezA
                    },
                    C = await d8.call(H, Q);
                return BA(B, {}), {
                    type: "file",
                    filename: A,
                    content: C.data,
                    truncated: !0
                }
            } catch {
                return BA(G, {}), null
            }
        }
        let K = await d8.validateInput(F, Q);
        if (!K.result) {
            if (K.meta?.fileSize) return await V();
            return null
        }
        try {
            let D = await d8.call(F, Q);
            return BA(B, {}), {
                type: "file",
                filename: A,
                content: D.data
            }
        } catch (D) {
            if (D instanceof e01) return await V();
            throw D
        }
    } catch {
        return BA(G, {}), null
    }
}

function p9(A) {
    return {
        attachment: A,
        type: "attachment",
        uuid: PV5(),
        timestamp: new Date().toISOString()
    }
}

function tV5(A) {
    let Q = -1,
        B = -1,
        G = 0,
        Z = 0;
    for (let I = A.length - 1; I >= 0; I--) {
        let Y = A[I];
        if (Y?.type === "assistant") {
            if (h00(Y)) continue;
            if (Q === -1) G++;
            if (B === -1) Z++;
            if (Q === -1 && "message" in Y && Array.isArray(Y.message?.content) && Y.message.content.some((J) => J.type === "tool_use" && J.name === "TodoWrite")) Q = I
        } else if (B === -1 && Y?.type === "attachment" && Y.attachment.type === "todo_reminder") B = I;
        if (Q !== -1 && B !== -1) break
    }
    return {
        turnsSinceLastTodoWrite: G,
        turnsSinceLastReminder: Z
    }
}

async function eV5(A, Q) {
    if (!A || A.length === 0) return [];
    let {
        turnsSinceLastTodoWrite: B,
        turnsSinceLastReminder: G
    } = tV5(A);
    if (B >= GI2.TURNS_SINCE_WRITE && G >= GI2.TURNS_BETWEEN_REMINDERS) {
        let Z = Eh(Q.agentId);
        return [{
            type: "todo_reminder",
            content: Z,
            itemCount: Z.length
        }]
    }
    return []
}

async function AK5(A) {
    if (!j8("tengu_web_tasks")) return [];
    let Q = await A.getAppState(),
        B = Object.values(Q.backgroundTasks).filter((Z) => Z.type === "remote_session" && Z.deltaSummarySinceLastFlushToAttachment !== null),
        G = B.map((Z) => ({
            type: "background_remote_session_status",
            taskId: Z.id,
            title: Z.title,
            status: Z.status,
            deltaSummarySinceLastFlushToAttachment: Z.deltaSummarySinceLastFlushToAttachment
        }));
    return A.setAppState((Z) => ({
        ...Z,
        backgroundTasks: {
            ...Z.backgroundTasks,
            ...Object.fromEntries(B.map((I) => [I.id, {
                ...I,
                deltaSummarySinceLastFlushToAttachment: null
            }]))
        }
    })), G
}

async function QK5(A) {
    let Q = await A.getAppState(),
        B = Object.values(Q.backgroundTasks).filter((I) => I.type === "shell"),
        G = X22(B).filter((I) => I.hasNewOutput).map((I) => ({
            type: "background_shell_status",
            taskId: I.id,
            command: I.command,
            status: "running",
            hasNewOutput: I.hasNewOutput
        })),
        Z = F22(B).map((I) => ({
            type: "background_shell_status",
            taskId: I.id,
            command: I.command,
            status: I.status,
            exitCode: I.result?.code,
            hasNewOutput: St1(I)
        }));
    return A.setAppState((I) => ({
        ...I,
        backgroundTasks: {
            ...I.backgroundTasks,
            ...Object.fromEntries(B.map((Y) => [Y.id, {
                ...Y,
                completionStatusSentInAttachment: !0
            }]))
        }
    })), [...G, ...Z]
}
// Async function: BK5
async function BK5() {
    let A = await pG2();
    if (A.length === 0) return [];
    g(`Hooks: getAsyncHookResponseAttachments found ${A.length} responses`);
    let Q = A.map(({
        processId: B,
        response: G,
        hookName: Z,
        hookEvent: I,
        toolName: Y,
        stdout: J,
        stderr: W,
        exitCode: X
    }) => {
        return g(`Hooks: Creating attachment for ${B} (${Z}): ${JSON.stringify(G)}`), {
            type: "async_hook_response",
            processId: B,
            hookName: Z,
            hookEvent: I,
            toolName: Y,
            response: G,
            stdout: J,
            stderr: W,
            exitCode: X
        }
    });
    if (A.length > 0) {
        let B = A.map((G) => G.processId);
        lG2(B), g(`Hooks: Removed ${B.length} delivered hooks from registry`)
    }
    return g(`Hooks: getAsyncHookResponseAttachments found ${Q.length} attachments`), Q
}

function GK5(A) {
    if (!V0(process.env.CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT)) return [];
    let Q = KYA(),
        B = AK(A);
    return [{
        type: "token_usage",
        used: B,
        total: Q,
        remaining: Q - B
    }]
}

function ZK5(A) {
    if (A === void 0) return [];
    let Q = yK(),
        B = A - Q;
    return [{
        type: "budget_usd",
        used: Q,
        total: A,
        remaining: B
    }]
}

async function IK5(A) {
    let Q = await A.getAppState(),
        G = Object.values(Q.backgroundTasks).filter((Z) => Z.type === "async_agent").filter((Z) => Z.status !== "running" && !Z.notified).map((Z) => ({
            type: "async_agent_status",
            agentId: Z.agentId,
            description: Z.description,
            status: Z.status,
            error: Z.error
        }));
    if (G.length > 0) A.setAppState((Z) => {
        let I = {
            ...Z.backgroundTasks
        };
        for (let {
                agentId: Y
            }
            of G) {
            let J = I[Y];
            if (J?.type === "async_agent") I[Y] = {
                ...J,
                notified: !0
            }
        }
        return {
            ...Z,
            backgroundTasks: I
        }
    });
    return G
}

function X91(A) {
    return A.attachment.type === "queued_command"
}

function II2(A) {
    return A.type === "async_hook_response" && A.hookEvent === "SessionStart"
}

function F91(A) {
    if (A.type !== "hook_success" && A.type !== "hook_non_blocking_error") return !1;
    return A.hookEvent === "SessionStart"
}

function DYA(A, Q) {
    return TD(A, Q, "read", "deny") !== null
}
var GI2, jV5, SV5;
var eM = L(() => {
    w0();
    O9();
    Kq();
    jI();
    o0();
    Ei();
    _E();
    yJ();
    uE();
    u1();
    gM();
    D0();
    C1A();
    RB();
    z1A();
    KH();
    xV();
    uM();
    UZ();
    M9();
    _Y();
    gAA();
    MZ2();
    S0();
    nV();
    s10();
    NMA();
    D0();
    nQ();
    hQ();
    oM();
    M1A();
    GI2 = {
        TURNS_SINCE_WRITE: 7,
        TURNS_BETWEEN_REMINDERS: 3
    }, jV5 = {
        TURNS_BETWEEN_ATTACHMENTS: 5
    }, SV5 = {
        TOKEN_COOLDOWN: 5000
    }
});

async function YI2(A) {
    let Q;
    do Q = await A.next(); while (!Q.done);
    return Q.value
}
async function* CYA(A, Q = 1 / 0) {
    let B = (I) => {
            let Y = I.next().then(({
                done: J,
                value: W
            }) => ({
                done: J,
                value: W,
                generator: I,
                promise: Y
            }));
            return Y
        },
        G = [...A],
        Z = new Set;
    while (Z.size < Q && G.length > 0) {
        let I = G.shift();
        Z.add(B(I))
    }
    while (Z.size > 0) {
        let {
            done: I,
            value: Y,
            generator: J,
            promise: W
        } = await Promise.race(Z);
        if (Z.delete(W), !I) {
            if (Z.add(B(J)), Y !== void 0) yield Y
        } else if (G.length > 0) {
            let X = G.shift();
            Z.add(B(X))
        }
    }
}

async function V91(A) {
    let Q = [];
    for await (let B of A) Q.push(B);
    return Q
}
async function* g00(A) {
    for (let Q of A) yield Q
}
var pvG;
var wi = L(() => {
    pvG = Symbol("NO_VALUE")
});

function R1A({
    param: {
        text: A
    },
    addMargin: Q
}) {
    let B = e2(A, "background-task-input");
    if (!B) return null;
    return $h.createElement(j, {
        flexDirection: "column",
        marginTop: Q ? 1 : 0,
        width: "100%"
    }, $h.createElement(j, null, $h.createElement($, {
        color: "background"
    }, "&"), $h.createElement($, {
        dimColor: !0
    }, " ", B)))
}
var $h;
var u00 = L(() => {
    hA();
    nQ();
    $h = GA(VA(), 1)
});
import {
    createHash as YK5
} from "crypto";
import {
    join as WI2,
    dirname as d00,
    isAbsolute as XI2,
    relative as JK5
} from "path";
import {
    inspect as WK5
} from "util";
import {
    chmodSync as FI2
} from "fs";

function JG() {
    if (H5()) return XK5();
    return L1().fileCheckpointingEnabled !== !1 && !V0(process.env.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING)
}

function XK5() {
    return V0(process.env.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING) && !V0(process.env.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING)
}

async function zYA(A, Q, B) {
    if (!JG()) return;
    A((G) => {
        try {
            let Z = G.snapshots.at(-1);
            if (!Z) return e(Error("FileHistory: Missing most recent snapshot")), BA("tengu_file_history_track_edit_failed", {}), G;
            let I = DI2(Q);
            if (Z.trackedFileBackups[I]) return G;
            let Y = G.trackedFiles.has(I) ? G.trackedFiles : new Set(G.trackedFiles).add(I),
                W = !OA().existsSync(Q),
                X = W ? m00(null, 1) : m00(Q, 1),
                F = Jv(Z);
            F.trackedFileBackups[I] = X;
            let V = {
                ...G,
                snapshots: [...G.snapshots.slice(0, -1), F],
                trackedFiles: Y
            };
            return CI2(V), H91(B, F, !0).catch((K) => {
                e(Error(`FileHistory: Failed to record snapshot: ${K}`))
            }), BA("tengu_file_history_track_edit_success", {
                isNewFile: W,
                version: X.version
            }), g(`FileHistory: Tracked file modification for ${Q}`), V
        } catch (Z) {
            return e(Z), BA("tengu_file_history_track_edit_failed", {}), G
        }
    })
}

async function UYA(A, Q) {
    if (!JG()) return;
    A((B) => {
        try {
            let G = OA(),
                Z = new Date,
                I = {},
                Y = B.snapshots.at(-1);
            if (Y) {
                g(`FileHistory: Making snapshot for message ${Q}`);
                for (let X of B.trackedFiles) try {
                    let F = HI2(X);
                    if (!G.existsSync(F)) {
                        let V = Y.trackedFileBackups[X],
                            K = V ? V.version + 1 : 1;
                        I[X] = {
                            backupFileName: null,
                            version: K,
                            backupTime: new Date
                        }, BA("tengu_file_history_backup_deleted_file", {
                            version: K
                        }), g(`FileHistory: Missing tracked file: ${X}`)
                    } else {
                        let V = Y.trackedFileBackups[X];
                        if (V && V.backupFileName !== null && !KI2(F, V.backupFileName)) {
                            I[X] = V;
                            continue
                        }
                        let K = V ? V.version + 1 : 1,
                            D = m00(F, K);
                        I[X] = D
                    }
                } catch (F) {
                    e(F), BA("tengu_file_history_backup_file_failed", {})
                }
            }
            let J = {
                    messageId: Q,
                    trackedFileBackups: I,
                    timestamp: Z
                },
                W = {
                    ...B,
                    snapshots: [...B.snapshots, J]
                };
            return CI2(W), H91(Q, J, !1).catch((X) => {
                e(Error(`FileHistory: Failed to record snapshot: ${X}`))
            }), g(`FileHistory: Added snapshot for ${Q}, tracking ${B.trackedFiles.size} files`), BA("tengu_file_history_snapshot_success", {
                trackedFilesCount: B.trackedFiles.size,
                snapshotCount: W.snapshots.length
            }), W
        } catch (G) {
            return e(G), BA("tengu_file_history_snapshot_failed", {}), B
        }
    })
}

async function PMA(A, Q) {
    if (!JG()) return;
    let B = null;
    if (A((G) => {
            let Z = G;
            try {
                let I = G.snapshots.findLast((J) => J.messageId === Q);
                if (!I) return e(Error(`FileHistory: Snapshot for ${Q} not found`)), BA("tengu_file_history_rewind_failed", {
                    trackedFilesCount: Z.trackedFiles.size,
                    snapshotFound: !1
                }), B = Error("The selected snapshot was not found"), Z;
                g(`FileHistory: [Rewind] Rewinding to snapshot for ${Q}`);
                let Y = VI2(Z, I, !1);