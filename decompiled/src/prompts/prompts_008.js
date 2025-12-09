/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 8/10
 * Lines: 346917 - 348415 (1499 lines)
 * Original file: cli.js
 */

    let {
        preview: W,
        hasMore: X
    } = nc5(A, xv2), F = `<persisted-output>
`;
    if (F += `Output too large (${LJ(A.length)}). Full output saved to: ${J}

`, F += `Preview (first ${LJ(xv2)}):
`, F += W, X) F += `
...

`;
    else F += `

`;
    if (F += `You can explore this file using:
`, F += `- ${g5} tool to view portions of the file
`, F += `- ${uY} tool to search for patterns
`, I) F += `- ${D9} with jq to query JSON data (e.g., jq ".results[] | select(.status == \\"error\\")" ${J})
`;
    return F += `- ${D9} with head/tail for beginning/end (e.g., head -100 ${J})
`, F += "</persisted-output>", g(`Persisted large tool result to ${J} (${LJ(A.length)})`), BA("tengu_tool_result_persisted", {
        toolName: Q,
        originalSizeBytes: A.length,
        persistedSizeBytes: F.length,
        estimatedOriginalTokens: Math.ceil(A.length / _t1),
        estimatedPersistedTokens: Math.ceil(F.length / _t1)
    }), F
}
async function fv2(A, Q, B) {
    let G = A.mapToolResultToToolResultBlockParam(Q, B);
    return ic5(G, A.name)
}
async function ic5(A, Q) {
    if (!process.env.ENABLE_TOOL_RESULT_SIZE_LIMIT) return A;
    if (typeof A.content === "string" && A.content.length > ZQ1) return {
        ...A,
        content: await vv2(A.content, Q)
    };
    if (Array.isArray(A.content)) {
        let B = !1,
            G = await Promise.all(A.content.map(async (Z) => {
                if ("type" in Z && Z.type === "text" && "text" in Z && typeof Z.text === "string" && Z.text.length > ZQ1) return B = !0, {
                    ...Z,
                    text: await vv2(Z.text, Q)
                };
                return Z
            }));
        if (B) return {
            ...A,
            content: G
        }
    }
    return A
}

function nc5(A, Q) {
    if (A.length <= Q) return {
        preview: A,
        hasMore: !1
    };
    let G = A.slice(0, Q).lastIndexOf(`
`),
        Z = G > Q * 0.5 ? G : Q;
    return {
        preview: A.slice(0, Z),
        hasMore: !0
    }
}
var q30 = "tool-results",
    xv2 = 2000;
var $51 = L(() => {
    D0();
    u1();
    M9();
    w0();
    zV();
    S0();
    GG();
    R2();
    xV();
    XT()
});

function hv2(A) {
    let Q = A.toLowerCase();
    return /\b(wtf|wth|ffs|omfg|shit(ty|tiest)?|dumbass|horrible|awful|piss(ed|ing)? off|piece of (shit|crap|junk)|what the (fuck|hell)|fucking? (broken|useless|terrible|awful|horrible)|fuck you|screw (this|you)|so frustrating|this sucks|damn it)\b/.test(Q)
}

function gv2(A) {
    let Q = A.toLowerCase().trim();
    if (Q === "continue") return !0;
    return /\b(keep going|go on)\b/.test(Q)
}

function uv2(A) {
    let Q = A.toLowerCase();
    return /\b(you'?re absolutely right|you'?re right)\b/.test(Q)
}

function dv2(A) {
    mv2.push(A)
}
async function cv2(A, Q, B, G, Z, I) {
    let Y = {
        messages: A,
        systemPrompt: Q,
        userContext: B,
        systemContext: G,
        toolUseContext: Z,
        querySource: I
    };
    for (let J of mv2) try {
        await J(Y)
    } catch (W) {
        e(W instanceof Error ? W : Error(`Post-sampling hook failed: ${W}`))
    }
}
var mv2;
var iRA = L(() => {
    u1();
    mv2 = []
});
var nRA = L(() => {
    o0();
    S0();
    hQ()
});
var w51;
var pv2 = L(() => {
    S0();
    w51 = new Map
});
class N30 {
    toolDefinitions;
    canUseTool;
    tools = [];
    toolUseContext;
    constructor(A, Q, B) {
        this.toolDefinitions = A;
        this.canUseTool = Q;
        this.toolUseContext = B
    }
    addTool(A, Q) {
        let B = this.toolDefinitions.find((I) => I.name === A.name);
        if (!B) return;
        let G = B.inputSchema.safeParse(A.input),
            Z = G?.success ? B.isConcurrencySafe(G.data) : !1;
        this.tools.push({
            id: A.id,
            block: A,
            assistantMessage: Q,
            status: "queued",
            isConcurrencySafe: Z
        }), this.processQueue()
    }
    canExecuteTool(A) {
        let Q = this.tools.filter((B) => B.status === "executing");
        return Q.length === 0 || A && Q.every((B) => B.isConcurrencySafe)
    }
    async processQueue() {
        for (let A of this.tools) {
            if (A.status !== "queued") continue;
            if (this.canExecuteTool(A.isConcurrencySafe)) await this.executeTool(A);
            else if (!A.isConcurrencySafe) break
        }
    }
    async executeTool(A) {
        A.status = "executing", this.toolUseContext.setInProgressToolUseIDs((I) => new Set([...I, A.id]));
        let Q = [],
            B = [],
            Z = (async () => {
                let I = q51(A.block, A.assistantMessage, this.canUseTool, this.toolUseContext);
                for await (let Y of I) {
                    if (Y.message) Q.push(Y.message);
                    if (Y.contextModifier) B.push(Y.contextModifier.modifyContext)
                }
                if (A.results = Q, A.contextModifiers = B, A.status = "completed", !A.isConcurrencySafe && B.length > 0)
                    for (let Y of B) this.toolUseContext = Y(this.toolUseContext)
            })();
        A.promise = Z, Z.finally(() => {
            this.processQueue()
        })
    }* getCompletedResults() {
        for (let A of this.tools) {
            if (A.status === "yielded") continue;
            if (A.status === "completed" && A.results) {
                A.status = "yielded";
                for (let Q of A.results) yield {
                    message: Q
                };
                ac5(this.toolUseContext, A.id)
            } else if (A.status === "executing" && !A.isConcurrencySafe) break
        }
    }
    async * getRemainingResults() {
        while (this.hasUnfinishedTools()) {
            await this.processQueue();
            for (let A of this.getCompletedResults()) yield A;
            if (this.hasExecutingTools() && !this.hasCompletedResults()) {
                let A = this.tools.filter((Q) => Q.status === "executing" && Q.promise).map((Q) => Q.promise);
                if (A.length > 0) await Promise.race(A)
            }
        }
        for (let A of this.getCompletedResults()) yield A
    }
    hasCompletedResults() {
        return this.tools.some((A) => A.status === "completed")
    }
    hasExecutingTools() {
        return this.tools.some((A) => A.status === "executing")
    }
    hasUnfinishedTools() {
        return this.tools.some((A) => A.status !== "yielded")
    }
    getUpdatedContext() {
        return this.toolUseContext
    }
}

function ac5(A, Q) {
    A.setInProgressToolUseIDs((B) => new Set([...B].filter((G) => G !== Q)))
}
var lv2 = L(() => {
    wn()
});
import {
    randomUUID as sc5
} from "crypto";

function N51(A) {
    return async (Q) => {
        try {
            if (!await A.shouldRun(Q)) return;
            let G = sc5(),
                Z = A.buildMessages(Q);
            Q.queryMessageCount = Z.length;
            let I = A.systemPrompt ? [A.systemPrompt] : Q.systemPrompt,
                J = A.useTools ?? !0 ? Q.toolUseContext.options.tools : [],
                W = A.getModel(),
                X = await Ky({
                    messages: Z,
                    systemPrompt: I,
                    maxThinkingTokens: 0,
                    tools: J,
                    signal: s9().signal,
                    options: {
                        getToolPermissionContext: async () => {
                            return (await Q.toolUseContext.getAppState()).toolPermissionContext
                        },
                        model: W,
                        toolChoice: void 0,
                        isNonInteractiveSession: Q.toolUseContext.options.isNonInteractiveSession,
                        hasAppendSystemPrompt: Q.toolUseContext.options.hasAppendSystemPrompt,
                        temperatureOverride: 0,
                        agents: Q.toolUseContext.options.agentDefinitions.activeAgents,
                        querySource: A.name,
                        mcpTools: [],
                        agentIdOrSessionId: Q.toolUseContext.agentId
                    }
                }),
                F = X.message.content.filter((V) => V.type === "text").map((V) => V.text).join("").trim();
            try {
                let V = A.parseResponse(F, Q);
                A.logResult({
                    type: "success",
                    queryName: A.name,
                    result: V,
                    messageId: X.message.id,
                    model: W,
                    uuid: G
                }, Q)
            } catch (V) {
                A.logResult({
                    type: "error",
                    queryName: A.name,
                    error: V,
                    uuid: G
                }, Q)
            }
        } catch (B) {
            e(B instanceof Error ? B : Error(`API query hook ${A.name} failed`))
        }
    }
}
var L30 = L(() => {
    kZ();
    UZ();
    u1()
});
async function iv2() {
    return
}
async function nv2(A) {
    if (M30) await M30(A)
}
var M30 = null;
var O30 = L(() => {
    L30();
    nQ();
    w0();
    O9();
    s2();
    mh()
});

function R30(A) {
    let Q = new Set;
    A.forEach((B, G) => Q.add(G));
    for (let [B, G] of Object.entries(rc5))
        if (G.prefixes?.some((Z) => Array.from(Q).some((I) => I.startsWith(Z)))) return B;
    return
}

function T30() {
    return {
        ...process.env.ANTHROPIC_BASE_URL ? {
            baseUrl: process.env.ANTHROPIC_BASE_URL
        } : {},
        ...process.env.ANTHROPIC_MODEL ? {
            envModel: process.env.ANTHROPIC_MODEL
        } : {},
        ...process.env.ANTHROPIC_SMALL_FAST_MODEL ? {
            envSmallFastModel: process.env.ANTHROPIC_SMALL_FAST_MODEL
        } : {}
    }
}

function av2({
    model: A,
    messagesLength: Q,
    temperature: B,
    betas: G,
    permissionMode: Z,
    querySource: I,
    queryTracking: Y
}) {
    BA("tengu_api_query", {
        model: A,
        messagesLength: Q,
        temperature: B,
        provider: TR(),
        ...G?.length ? {
            betas: G.join(",")
        } : {},
        permissionMode: Z,
        querySource: I,
        ...Y ? {
            queryChainId: Y.chainId,
            queryDepth: Y.depth
        } : {},
        ...T30()
    })
}

function sv2({
    error: A,
    model: Q,
    messageCount: B,
    messageTokens: G,
    durationMs: Z,
    durationMsIncludingRetries: I,
    attempt: Y,
    requestId: J,
    didFallBackToNonStreaming: W,
    promptCategory: X,
    headers: F,
    queryTracking: V
}) {
    let K = void 0;
    if (A instanceof a2 && A.headers) K = R30(A.headers);
    else if (F) K = R30(F);
    let D = A instanceof Error ? A.message : String(A),
        H = A instanceof a2 ? String(A.status) : void 0,
        C = bZ2(A);
    e(A), BA("tengu_api_error", {
        model: Q,
        error: D,
        status: H,
        errorType: C,
        messageCount: B,
        messageTokens: G,
        durationMs: Z,
        durationMsIncludingRetries: I,
        attempt: Y,
        provider: TR(),
        requestId: J || void 0,
        didFallBackToNonStreaming: W,
        ...X ? {
            promptCategory: X
        } : {},
        ...K ? {
            gateway: K
        } : {},
        ...V ? {
            queryChainId: V.chainId,
            queryDepth: V.depth
        } : {},
        ...T30()
    }), WO("api_error", {
        model: Q,
        error: D,
        status_code: String(H),
        duration_ms: String(Z),
        attempt: String(Y)
    }), R40({
        success: !1,
        statusCode: H ? parseInt(H) : void 0,
        error: D,
        attempt: Y
    })
}

function oc5({
    model: A,
    preNormalizedModel: Q,
    messageCount: B,
    messageTokens: G,
    usage: Z,
    durationMs: I,
    durationMsIncludingRetries: Y,
    attempt: J,
    ttftMs: W,
    requestId: X,
    stopReason: F,
    costUSD: V,
    didFallBackToNonStreaming: K,
    querySource: D,
    gateway: H,
    queryTracking: C,
    permissionMode: E
}) {
    let z = H5(),
        w = process.argv.includes("-p") || process.argv.includes("--print");
    BA("tengu_api_success", {
        model: A,
        ...Q !== A ? {
            preNormalizedModel: Q
        } : {},
        messageCount: B,
        messageTokens: G,
        inputTokens: Z.input_tokens,
        outputTokens: Z.output_tokens,
        cachedInputTokens: Z.cache_read_input_tokens ?? 0,
        uncachedInputTokens: Z.cache_creation_input_tokens ?? 0,
        durationMs: I,
        durationMsIncludingRetries: Y,
        attempt: J,
        ttftMs: W ?? void 0,
        provider: TR(),
        requestId: X ?? void 0,
        stop_reason: F ?? void 0,
        costUSD: V,
        didFallBackToNonStreaming: K,
        isNonInteractiveSession: z,
        print: w,
        isTTY: process.stdout.isTTY ?? !1,
        querySource: D,
        ...H ? {
            gateway: H
        } : {},
        ...C ? {
            queryChainId: C.chainId,
            queryDepth: C.depth
        } : {},
        permissionMode: E,
        ...T30()
    })
}

function rv2({
    model: A,
    preNormalizedModel: Q,
    start: B,
    startIncludingRetries: G,
    ttftMs: Z,
    usage: I,
    attempt: Y,
    messageCount: J,
    messageTokens: W,
    requestId: X,
    stopReason: F,
    didFallBackToNonStreaming: V,
    querySource: K,
    headers: D,
    costUSD: H,
    queryTracking: C,
    permissionMode: E
}) {
    let z = D ? R30(D) : void 0,
        w = Date.now() - B,
        N = Date.now() - G;
    tC0(N, w), oc5({
        model: A,
        preNormalizedModel: Q,
        messageCount: J,
        messageTokens: W,
        usage: I,
        durationMs: w,
        durationMsIncludingRetries: N,
        attempt: Y,
        ttftMs: Z,
        requestId: X,
        stopReason: F,
        costUSD: H,
        didFallBackToNonStreaming: V,
        querySource: K,
        gateway: z,
        queryTracking: C,
        permissionMode: E
    }), WO("api_request", {
        model: A,
        input_tokens: String(I.input_tokens),
        output_tokens: String(I.output_tokens),
        cache_read_tokens: String(I.cache_read_input_tokens),
        cache_creation_tokens: String(I.cache_creation_input_tokens),
        cost_usd: String(H),
        duration_ms: String(w)
    }), R40({
        success: !0,
        inputTokens: I.input_tokens,
        outputTokens: I.output_tokens,
        cacheReadTokens: I.cache_read_input_tokens,
        cacheCreationTokens: I.cache_creation_input_tokens,
        attempt: Y
    })
}
var rc5, KO;
var aRA = L(() => {
    l_();
    u1();
    dK();
    w0();
    bJA();
    A0A();
    S0();
    tM();
    rc5 = {
        litellm: {
            prefixes: ["x-litellm-"]
        },
        helicone: {
            prefixes: ["helicone-"]
        },
        portkey: {
            prefixes: ["x-portkey-"]
        },
        "cloudflare-ai-gateway": {
            prefixes: ["cf-aig-"]
        }
    };
    KO = {
        input_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0,
        output_tokens: 0,
        server_tool_use: {
            web_search_requests: 0,
            web_fetch_requests: 0
        },
        service_tier: "standard",
        cache_creation: {
            ephemeral_1h_input_tokens: 0,
            ephemeral_5m_input_tokens: 0
        }
    }
});
import {
    randomBytes as tc5
} from "crypto";

function Y$(A) {
    if (typeof A !== "string") return null;
    return ec5.test(A) ? A : null
}

function KWA() {
    return tc5(4).toString("hex")
}
var ec5;
var wy = L(() => {
    ec5 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
});
import {
    randomUUID as Ap5
} from "crypto";

function L51(A) {
    return {
        systemPrompt: A.systemPrompt,
        userContext: A.userContext,
        systemContext: A.systemContext,
        toolUseContext: A.toolUseContext,
        forkContextMessages: A.messages
    }
}

function sRA(A, Q) {
    let B = Q?.abortController ?? (Q?.shareAbortController ? A.abortController : fL0(A.abortController)),
        G = Q?.getAppState ? Q.getAppState : Q?.shareAbortController ? A.getAppState : async () => {
            let Z = await A.getAppState();
            if (Z.toolPermissionContext.shouldAvoidPermissionPrompts) return Z;
            return {
                ...Z,
                toolPermissionContext: {
                    ...Z.toolPermissionContext,
                    shouldAvoidPermissionPrompts: !0
                }
            }
        };
    return {
        readFileState: Q?.readFileState ?? uAA(A.readFileState),
        nestedMemoryAttachmentTriggers: new Set,
        toolDecisions: void 0,
        pendingSteeringAttachments: void 0,
        abortController: B,
        getAppState: G,
        setAppState: Q?.shareSetAppState ? A.setAppState : () => {},
        setMessages: () => {},
        setInProgressToolUseIDs: () => {},
        setResponseLength: Q?.shareSetResponseLength ? A.setResponseLength : () => {},
        updateFileHistoryState: () => {},
        addNotification: void 0,
        setToolJSX: void 0,
        setStreamMode: void 0,
        setSpinnerMessage: void 0,
        setSpinnerColor: void 0,
        setSpinnerShimmerColor: void 0,
        setSDKStatus: void 0,
        openMessageSelector: void 0,
        options: Q?.options ?? A.options,
        messages: Q?.messages ?? A.messages,
        agentId: Q?.agentId ?? KWA(),
        isSubAgent: !0,
        queryTracking: {
            chainId: Ap5(),
            depth: (A.queryTracking?.depth ?? -1) + 1
        },
        fileReadingLimits: A.fileReadingLimits,
        userModified: A.userModified
    }
}
async function M51({
    promptMessages: A,
    cacheSafeParams: Q,
    canUseTool: B,
    querySource: G,
    forkLabel: Z
}) {
    let I = Date.now(),
        Y = [],
        J = {
            ...KO
        },
        {
            systemPrompt: W,
            userContext: X,
            systemContext: F,
            toolUseContext: V,
            forkContextMessages: K
        } = Q,
        D = sRA(V),
        H = [...P30(K), ...A];
    for await (let E of J$({
        messages: H,
        systemPrompt: W,
        userContext: X,
        systemContext: F,
        canUseTool: B,
        toolUseContext: D,
        querySource: G
    })) {
        if (E.type === "stream_event" || E.type === "stream_request_start") continue;
        if (E.type === "assistant") {
            let w = E.message.usage;
            if (w) J = T51(J, {
                input_tokens: w.input_tokens ?? 0,
                cache_creation_input_tokens: w.cache_creation_input_tokens ?? 0,
                cache_read_input_tokens: w.cache_read_input_tokens ?? 0,
                output_tokens: w.output_tokens ?? 0,
                server_tool_use: {
                    web_search_requests: w.server_tool_use?.web_search_requests ?? 0,
                    web_fetch_requests: w.server_tool_use?.web_fetch_requests ?? 0
                },
                service_tier: w.service_tier ?? "standard",
                cache_creation: {
                    ephemeral_1h_input_tokens: w.cache_creation?.ephemeral_1h_input_tokens ?? 0,
                    ephemeral_5m_input_tokens: w.cache_creation?.ephemeral_5m_input_tokens ?? 0
                }
            })
        }
        Y.push(E)
    }
    let C = Date.now() - I;
    return Qp5({
        forkLabel: Z,
        querySource: G,
        durationMs: C,
        messageCount: Y.length,
        totalUsage: J,
        queryTracking: V.queryTracking
    }), {
        messages: Y,
        totalUsage: J
    }
}

function Qp5({
    forkLabel: A,
    querySource: Q,
    durationMs: B,
    messageCount: G,
    totalUsage: Z,
    queryTracking: I
}) {
    let Y = Z.input_tokens + Z.cache_creation_input_tokens + Z.cache_read_input_tokens,
        J = Y > 0 ? Z.cache_read_input_tokens / Y : 0;
    BA("tengu_fork_agent_query", {
        forkLabel: A,
        querySource: Q,
        durationMs: B,
        messageCount: G,
        inputTokens: Z.input_tokens,
        outputTokens: Z.output_tokens,
        cacheReadInputTokens: Z.cache_read_input_tokens,
        cacheCreationInputTokens: Z.cache_creation_input_tokens,
        serviceTier: Z.service_tier,
        cacheCreationEphemeral1hTokens: Z.cache_creation.ephemeral_1h_input_tokens,
        cacheCreationEphemeral5mTokens: Z.cache_creation.ephemeral_5m_input_tokens,
        cacheHitRate: J,
        ...I ? {
            queryChainId: I.chainId,
            queryDepth: I.depth
        } : {}
    })
}
var O51 = L(() => {
    wn();
    kZ();
    aRA();
    w0();
    R51();
    uM();
    wy();
    UZ()
});
async function ov2() {
    if (H5()) return;
    if (!1 === "false") {
        P51 = !1;
        return
    }
    if (!1 === "1") {
        P51 = !0;
        return
    }
    return
}
async function tv2(A) {
    if (!P51) return;
    if (A.querySource !== "repl_main_thread") return;
    try {
        let B = {
                ...A.toolUseContext,
                options: {
                    ...A.toolUseContext.options,
                    maxThinkingTokens: 0
                }
            },
            G = await M51({
                promptMessages: [j0({
                    content: `You are now a prompt suggestion generator. The conversation above is context - your job is to suggest what Claude could help with next.

Based on the conversation, suggest the user's next prompt. Short casual input, 3-8 words (like "run the tests" or "now fix the linting errors").

Even if the immediate task seems done, think about natural follow-ups: run tests, commit changes, verify it works, clean up, etc. Almost always suggest something useful. Only say "done" if you truly cannot think of any reasonable next step.

Reply with ONLY the suggestion text, no quotes, no explanation, no markdown.`
                })],
                cacheSafeParams: {
                    ...L51(A),
                    toolUseContext: B
                },
                canUseTool: async () => ({
                    behavior: "deny",
                    message: "No tools needed for suggestion",
                    decisionReason: {
                        type: "other",
                        reason: "suggestion only"
                    }
                }),
                querySource: "prompt_suggestion",
                forkLabel: "prompt_suggestion"
            }),
            I = G.messages.find((X) => X.type === "assistant")?.message?.content?.find((X) => X.type === "text");
        if (!I || I.type !== "text") return;
        let Y = I.text.trim(),
            J = Y.toLowerCase();
        if (g(`Prompt suggestion returned: "${Y}"`), !Y || J === "done" || Y.length >= 100 || Y.includes(`
`) || Y.includes("**") || Y.includes("*")) return;
        if (J.includes("prompt is too long") || J.includes("context length") || J.includes("token limit")) return;
        if (J.includes("thanks") || J.includes("thank you") || J.includes("looks good") || J.includes("that worked") || J.includes("that's all")) return;
        A.toolUseContext.setAppState((X) => ({
            ...X,
            promptSuggestion: {
                text: Y,
                shownAt: Date.now()
            }
        }));
        let W = G.totalUsage.input_tokens + G.totalUsage.cache_creation_input_tokens + G.totalUsage.cache_read_input_tokens;
        BA("tengu_prompt_suggestion_shown", {
            source: "forked_agent",
            ...W > 0 && {
                cacheHitRate: G.totalUsage.cache_read_input_tokens / W
            },
            ...!1
        })
    } catch (Q) {
        e(Q instanceof Error ? Q : Error("Prompt suggestion generation failed"))
    }
}
var Bp5 = "tengu_prompt_suggestion",
    P51 = !1;
var j30 = L(() => {
    O51();
    nQ();
    O9();
    S0();
    w0();
    u1();
    D0()
});

function rRA(A, Q) {
    let B = G0(),
        G = {
            type: "queue-operation",
            operation: A,
            timestamp: new Date().toISOString(),
            sessionId: B,
            ...Q !== void 0 && {
                content: Q
            }
        };
    Gb2(G)
}

function ev2(A, Q) {
    Q((B) => ({
        ...B,
        queuedCommands: [...B.queuedCommands, A]
    })), rRA("enqueue", typeof A.value === "string" ? A.value : void 0)
}
async function Ab2(A, Q) {
    let B = await A();
    if (B.queuedCommands.length === 0) return;
    let [G, ...Z] = B.queuedCommands;
    return Q((I) => ({
        ...I,
        queuedCommands: Z
    })), rRA("dequeue"), G
}
async function Qb2(A, Q) {
    let B = await A();
    if (B.queuedCommands.length === 0) return [];
    let G = [...B.queuedCommands];
    Q((Z) => ({
        ...Z,
        queuedCommands: []
    }));
    for (let Z of G) rRA("dequeue");
    return G
}

function Bb2(A, Q) {
    if (A.length === 0) return;
    Q((B) => ({
        ...B,
        queuedCommands: B.queuedCommands.filter((G) => !A.some((Z) => Z.value === G.value))
    }));
    for (let B of A) rRA("remove")
}
async function j51(A, Q, B, G) {
    let Z = await B();
    if (Z.queuedCommands.length === 0) return;
    let I = Z.queuedCommands.map((W) => W.value),
        Y = [...I, A].filter(Boolean).join(`
`),
        J = I.join(`
`).length + 1 + Q;
    for (let W of Z.queuedCommands) rRA("popAll", typeof W.value === "string" ? W.value : void 0);
    return G((W) => ({
        ...W,
        queuedCommands: []
    })), {
        text: Y,
        cursorOffset: J
    }
}
var DWA = L(() => {
    GG();
    S0()
});
var oRA;
var S30 = L(() => {
    oRA = class oRA {
        returned;
        queue = [];
        readResolve;
        readReject;
        isDone = !1;
        hasError;
        started = !1;
        constructor(A) {
            this.returned = A
        } [Symbol.asyncIterator]() {
            if (this.started) throw Error("Stream can only be iterated once");
            return this.started = !0, this
        }
        next() {
            if (this.queue.length > 0) return Promise.resolve({
                done: !1,
                value: this.queue.shift()
            });
            if (this.isDone) return Promise.resolve({
                done: !0,
                value: void 0
            });
            if (this.hasError) return Promise.reject(this.hasError);
            return new Promise((A, Q) => {
                this.readResolve = A, this.readReject = Q
            })
        }
        enqueue(A) {
            if (this.readResolve) {
                let Q = this.readResolve;
                this.readResolve = void 0, this.readReject = void 0, Q({
                    done: !1,
                    value: A
                })
            } else this.queue.push(A)
        }
        done() {
            if (this.isDone = !0, this.readResolve) {
                let A = this.readResolve;
                this.readResolve = void 0, this.readReject = void 0, A({
                    done: !0,
                    value: void 0
                })
            }
        }
        error(A) {
            if (this.hasError = A, this.readReject) {
                let Q = this.readReject;
                this.readResolve = void 0, this.readReject = void 0, Q(A)
            }
        }
        return () {
            if (this.isDone = !0, this.returned) this.returned();
            return Promise.resolve({
                done: !0,
                value: void 0
            })
        }
    }
});
import {
    randomUUID as Zb2
} from "crypto";

function Gp5() {
    return parseInt(process.env.CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY || "", 10) || 10
}

function* S51(A, Q) {
    for (let B of A) {
        let G = B.message.content.filter((Z) => Z.type === "tool_use");
        for (let Z of G) yield j0({
            content: [{
                type: "tool_result",
                content: Q,
                is_error: !0,
                tool_use_id: Z.id
            }],
            toolUseResult: Q
        })
    }
}
async function* J$({
    messages: A,
    systemPrompt: Q,
    userContext: B,
    systemContext: G,
    canUseTool: Z,
    toolUseContext: I,
    autoCompactTracking: Y,
    fallbackModel: J,
    stopHookActive: W,
    querySource: X
}) {
    yield {
        type: "stream_request_start"
    };
    let F = I.queryTracking ? {
            chainId: I.queryTracking.chainId,
            depth: I.queryTracking.depth + 1
        } : {
            chainId: Zb2(),
            depth: 0
        },
        V = F.chainId;
    I = {
        ...I,
        queryTracking: F
    };
    let K = G0();
    if (!w51.has(K)) w51.set(K, new Set);
    let D = w51.get(K),
        H = gk(A),
        C = Y,
        E = await $i(H, void 0, I);
    if (H = E.messages, E.compactionInfo?.systemMessage) yield E.compactionInfo.systemMessage;
    let {
        compactionResult: z
    } = await BI2(H, I, X);
    if (z) {
        let {
            preCompactTokenCount: KA,
            postCompactTokenCount: SA,
            compactionUsage: sA
        } = z;
        if (BA("tengu_auto_compact_succeeded", {
                originalMessageCount: A.length,
                compactedMessageCount: z.summaryMessages.length + z.attachments.length + z.hookResults.length,
                preCompactTokenCount: KA,
                postCompactTokenCount: SA,
                compactionInputTokens: sA?.input_tokens,
                compactionOutputTokens: sA?.output_tokens,
                compactionCacheReadTokens: sA?.cache_read_input_tokens ?? 0,
                compactionCacheCreationTokens: sA?.cache_creation_input_tokens ?? 0,
                compactionTotalTokens: sA ? sA.input_tokens + (sA.cache_creation_input_tokens ?? 0) + (sA.cache_read_input_tokens ?? 0) + sA.output_tokens : 0,
                queryChainId: V,
                queryDepth: F.depth
            }), !C?.compacted) C = {
            compacted: !0,
            turnId: Zb2(),
            turnCounter: 0
        };
        let NA = [z.boundaryMarker, ...z.summaryMessages, ...z.attachments, ...z.hookResults, ...z.messagesToKeep ?? []];
        for (let qA of NA) yield qA;
        H = NA
    }
    I = {
        ...I,
        messages: H
    };
    let w = [],
        N = [],
        R = await tV("tengu_streaming_tool_execution") ? new N30(I.options.tools, Z, I) : null,
        P = await I.getAppState(),
        y = P.toolPermissionContext.mode,
        v = tt({
            permissionMode: y,
            mainLoopModel: I.options.mainLoopModel,
            exceeds200kTokens: y === "plan" && c21(H)
        }),
        x = Tv2(Q, G),
        p = !0;
    try {
        while (p) {
            p = !1;
            try {
                let KA = !1,
                    SA = H.filter((sA) => !D.has(sA.uuid));
                for await (let sA of VYA({
                    messages: U0A(SA, B),
                    systemPrompt: x,
                    maxThinkingTokens: I.options.maxThinkingTokens,
                    tools: I.options.tools,
                    signal: I.abortController.signal,
                    options: {
                        async getToolPermissionContext() {
                            return (await I.getAppState()).toolPermissionContext
                        },
                        model: v,
                        toolChoice: void 0,
                        isNonInteractiveSession: I.options.isNonInteractiveSession,
                        fallbackModel: J,
                        onStreamingFallback: () => {
                            KA = !0
                        },
                        querySource: X,
                        agents: I.options.agentDefinitions.activeAgents,
                        hasAppendSystemPrompt: I.options.hasAppendSystemPrompt,
                        fetchOverride: void 0,
                        mcpTools: P.mcp.tools,
                        queryTracking: F,
                        taskIntensityOverride: P60(),
                        agentIdOrSessionId: I.agentId
                    }
                })) {
                    if (KA) {
                        for (let NA of w) D.add(NA.uuid);
                        BA("tengu_orphaned_messages_tracked", {
                            orphanedMessageCount: w.length,
                            queryChainId: V,
                            queryDepth: F.depth
                        }), yield* S51(w, "Streaming fallback triggered"), w.length = 0
                    }
                    if (yield sA, sA.type === "assistant") {
                        if (w.push(sA), R) {
                            let NA = sA.message.content.filter((qA) => qA.type === "tool_use");
                            for (let qA of NA) R.addTool(qA, sA)
                        }
                    }
                    if (R) {
                        for (let NA of R.getCompletedResults())
                            if (NA.message) yield NA.message, N.push(...BZ([NA.message]).filter((qA) => qA.type === "user"))
                    }
                }
            } catch (KA) {
                if (KA instanceof b61 && J) {
                    v = J, p = !0, yield* S51(w, "Model fallback triggered"), w.length = 0, I.options.mainLoopModel = J, BA("tengu_model_fallback_triggered", {
                        original_model: KA.originalModel,
                        fallback_model: J,
                        entrypoint: "cli",
                        queryChainId: V,
                        queryDepth: F.depth
                    }), yield Vy(`Model fallback triggered: switching from ${KA.originalModel} to ${KA.fallbackModel}`, "info");
                    continue
                }
                throw KA
            }
        }
    } catch (KA) {
        e(KA instanceof Error ? KA : Error(String(KA)));
        let SA = KA instanceof Error ? KA.message : String(KA);
        BA("tengu_query_error", {
            assistantMessages: w.length,
            toolUses: w.flatMap((sA) => sA.message.content.filter((NA) => NA.type === "tool_use")).length,
            queryChainId: V,
            queryDepth: F.depth
        }), yield* S51(w, SA), yield tRA({
            toolUse: !1
        }), yN("Query error", KA);
        return
    }
    if (w.length > 0) cv2([...H, ...w], Q, B, G, I, X);
    if (w.some((KA) => KA.message.content.some((SA) => SA.type === "text" && uv2(SA.text)))) BA("tengu_model_response_keyword_detected", {
        is_overly_agreeable: !0,
        queryChainId: V,
        queryDepth: F.depth
    });
    if (I.abortController.signal.aborted) {
        yield* S51(w, "Interrupted by user"), yield tRA({
            toolUse: !1
        });
        return
    }
    let o = w.flatMap((KA) => KA.message.content.filter((SA) => SA.type === "tool_use"));
    if (!w.length || !o.length) {
        yield* Ip5(H, w, Q, B, G, Z, I, X, C, J, W), yield* Zp5(H, w, Q, B, G, Z, I, X, C, J);
        return
    }
    let l = !1,
        k = I;
    if (R) {
        BA("tengu_streaming_tool_execution_used", {
            tool_count: o.length,
            queryChainId: V,
            queryDepth: F.depth
        });
        for await (let KA of R.getRemainingResults()) {
            let SA = KA.message;
            if (!SA) continue;
            if (yield SA, SA && SA.type === "attachment" && SA.attachment.type === "hook_stopped_continuation") l = !0;
            N.push(...BZ([SA]).filter((sA) => sA.type === "user"))
        }
        k = {
            ...R.getUpdatedContext(),
            queryTracking: F
        }
    } else {
        BA("tengu_streaming_tool_execution_not_used", {
            tool_count: o.length,
            queryChainId: V,
            queryDepth: F.depth
        });
        for await (let KA of _30(o, w, Z, I)) {
            if (KA.message) {
                if (yield KA.message, KA.message.type === "attachment" && KA.message.attachment.type === "hook_stopped_continuation") l = !0;
                N.push(...BZ([KA.message]).filter((SA) => SA.type === "user"))
            }
            if (KA.newContext) k = {
                ...KA.newContext,
                queryTracking: F
            }
        }
    }
    if (I.abortController.signal.aborted) {
        let KA = I.abortController.signal.reason === "tool-rejection";
        yield tRA({
            toolUse: !0
        });
        return
    }
    if (l) return;
    if (C?.compacted) C.turnCounter++, BA("tengu_post_autocompact_turn", {
        turnId: C.turnId,
        turnCounter: C.turnCounter,
        queryChainId: V,
        queryDepth: F.depth
    });
    let QA = [...(await k.getAppState()).queuedCommands],
        IA = [];
    BA("tengu_query_before_attachments", {
        messagesForQueryCount: H.length,
        assistantMessagesCount: w.length,
        toolResultsCount: N.length,
        queryChainId: V,
        queryDepth: F.depth
    });
    for await (let KA of HYA(null, k, null, QA, [...H, ...w, ...N], X)) if (yield KA, N.push(KA), X91(KA)) IA.push(KA);
    let HA = N.filter((KA) => KA.type === "attachment" && KA.attachment.type === "edited_text_file").length;
    BA("tengu_query_after_attachments", {
        totalToolResultsCount: N.length,
        fileChangeAttachmentCount: HA,
        queryChainId: V,
        queryDepth: F.depth
    }), Bb2(QA, k.setAppState);
    let wA = {
        ...k,
        pendingSteeringAttachments: IA.length > 0 ? IA : void 0,
        queryTracking: F
    };
    yield* J$({
        messages: [...H, ...w, ...N],
        systemPrompt: Q,
        userContext: B,
        systemContext: G,
        canUseTool: Z,
        toolUseContext: wA,
        autoCompactTracking: C,
        fallbackModel: J,
        stopHookActive: W,
        querySource: X
    })
}
async function* Zp5(A, Q, B, G, Z, I, Y, J, W, X) {
    if (Y.pendingSteeringAttachments && Y.pendingSteeringAttachments.length > 0) {
        let F = [];
        for (let V of Y.pendingSteeringAttachments) {
            let K = V.attachment;
            if (K.type === "queued_command") {
                let D = j0({
                    content: K.prompt,
                    isMeta: !0
                });
                F.push(D)
            }
        }
        if (F.length > 0) {
            let V = {
                ...Y,
                pendingSteeringAttachments: void 0
            };
            BA("tengu_steering_attachment_resending", {
                queryChainId: Y.queryTracking?.chainId,
                queryDepth: Y.queryTracking?.depth
            }), yield* J$({
                messages: [...A, ...Q, ...F],
                systemPrompt: B,
                userContext: G,
                systemContext: Z,
                canUseTool: I,
                toolUseContext: V,
                autoCompactTracking: W,
                fallbackModel: X,
                querySource: J
            })
        }
        return
    }
}
async function* Ip5(A, Q, B, G, Z, I, Y, J, W, X, F) {
    let V = Date.now(),
        K = {
            messages: [...A, ...Q],
            systemPrompt: B,
            userContext: G,
            systemContext: Z,
            toolUseContext: Y,
            querySource: J
        };
    if (nv2(K), !1 !== "false") tv2(K);
    try {
        let D = [],
            C = (await Y.getAppState()).toolPermissionContext.mode,
            E = h30(C, Y.abortController.signal, void 0, F ?? !1, Y.agentId !== G0() ? Y.agentId : void 0, Y, Q),
            z = "",
            w = 0,
            N = !1,
            q = "",
            R = !1,
            P = [],
            y = [];
        for await (let v of E) {
            if (v.message) {
                if (yield v.message, v.message.type === "progress" && v.message.toolUseID) {
                    z = v.message.toolUseID, w++;
                    let x = v.message.data;
                    if (x.command) y.push({
                        command: x.command,
                        promptText: x.promptText
                    })
                }
                if (v.message.type === "attachment") {
                    let x = v.message.attachment;
                    if ("hookEvent" in x && (x.hookEvent === "Stop" || x.hookEvent === "SubagentStop")) {
                        if (x.type === "hook_non_blocking_error") P.push(x.stderr || `Exit code ${x.exitCode}`), R = !0;
                        else if (x.type === "hook_error_during_execution") P.push(x.content), R = !0;
                        else if (x.type === "hook_success") {
                            if (x.stdout && x.stdout.trim() || x.stderr && x.stderr.trim()) R = !0
                        }
                    }
                }
            }
            if (v.blockingError) {
                let x = j0({
                    content: x30(v.blockingError),
                    isMeta: !0
                });
                D.push(x), yield x, R = !0, P.push(v.blockingError.blockingError)
            }
            if (v.preventContinuation) N = !0, q = v.stopReason || "Stop hook prevented continuation", yield p9({
                type: "hook_stopped_continuation",
                message: q,
                hookName: "Stop",
                toolUseID: z,
                hookEvent: "Stop"
            });
            if (Y.abortController.signal.aborted) {
                BA("tengu_pre_stop_hooks_cancelled", {
                    queryChainId: Y.queryTracking?.chainId,
                    queryDepth: Y.queryTracking?.depth
                }), yield tRA({
                    toolUse: !1
                });
                return
            }
        }
        if (w > 0) {
            if (yield Wb2(w, y, P, N, q, R, "suggestion", z), P.length > 0) Y.addNotification?.({
                key: "stop-hook-error",
                text: "Stop hook error occurred · ctrl+o to see",
                priority: "immediate"
            })
        }
        if (N) return;
        if (D.length > 0) yield* J$({
            messages: [...A, ...Q, ...D],
            systemPrompt: B,
            userContext: G,
            systemContext: Z,
            canUseTool: I,
            toolUseContext: Y,
            autoCompactTracking: W,
            fallbackModel: X,
            stopHookActive: !0,
            querySource: J
        })
    } catch (D) {
        let H = Date.now() - V;
        BA("tengu_stop_hook_error", {
            duration: H,
            queryChainId: Y.queryTracking?.chainId,
            queryDepth: Y.queryTracking?.depth
        }), yield Vy(`Stop hook failed: ${D instanceof Error?D.message:String(D)}`, "warning")
    }
}
async function* _30(A, Q, B, G) {
    let Z = G;
    for (let {
            isConcurrencySafe: I,
            blocks: Y
        }
        of Yp5(A, Z))
        if (I) {
            let J = {};
            for await (let W of Wp5(Y, Q, B, Z)) {
                if (W.contextModifier) {
                    let {
                        toolUseID: X,
                        modifyContext: F
                    } = W.contextModifier;
                    if (!J[X]) J[X] = [];
                    J[X].push(F)
                }
                yield {
                    message: W.message,
                    newContext: Z
                }
            }
            for (let W of Y) {
                let X = J[W.id];
                if (!X) continue;
                for (let F of X) Z = F(Z)
            }
            yield {
                newContext: Z
            }
        } else
            for await (let J of Jp5(Y, Q, B, Z)) {
                if (J.newContext) Z = J.newContext;
                yield {
                    message: J.message,
                    newContext: Z
                }
            }
}

function Yp5(A, Q) {
    return A.reduce((B, G) => {
        let Z = Q.options.tools.find((J) => J.name === G.name),
            I = Z?.inputSchema.safeParse(G.input),
            Y = I?.success ? Boolean(Z?.isConcurrencySafe(I.data)) : !1;
        if (Y && B[B.length - 1]?.isConcurrencySafe) B[B.length - 1].blocks.push(G);
        else B.push({
            isConcurrencySafe: Y,
            blocks: [G]
        });
        return B
    }, [])
}
async function* Jp5(A, Q, B, G) {
    let Z = G;
    for (let I of A) {
        G.setInProgressToolUseIDs((Y) => new Set([...Y, I.id]));
        for await (let Y of q51(I, Q.find((J) => J.message.content.some((W) => W.type === "tool_use" && W.id === I.id)), B, Z)) {
            if (Y.contextModifier) Z = Y.contextModifier.modifyContext(Z);
            yield {
                message: Y.message,
                newContext: Z
            }
        }
        Yb2(G, I.id)
    }
}
async function* Wp5(A, Q, B, G) {
    yield* CYA(A.map(async function*(Z) {
        G.setInProgressToolUseIDs((I) => new Set([...I, Z.id])), yield* q51(Z, Q.find((I) => I.message.content.some((Y) => Y.type === "tool_use" && Y.id === Z.id)), B, G), Yb2(G, Z.id)
    }), Gp5())
}

function Yb2(A, Q) {
    A.setInProgressToolUseIDs((B) => new Set([...B].filter((G) => G !== Q)))
}
async function* q51(A, Q, B, G) {
    let Z = A.name,
        I = G.options.tools.find((W) => W.name === Z),
        Y = Q.message.id;
    if (!I) {
        BA("tengu_tool_use_error", {
            error: `No such tool available: ${Z}`,
            toolName: Z,
            toolUseID: A.id,
            isMcp: Z.startsWith("mcp__"),
            queryChainId: G.queryTracking?.chainId,
            queryDepth: G.queryTracking?.depth
        }), yield {
            message: j0({
                content: [{
                    type: "tool_result",
                    content: `<tool_use_error>Error: No such tool available: ${Z}</tool_use_error>`,
                    is_error: !0,
                    tool_use_id: A.id
                }],
                toolUseResult: `Error: No such tool available: ${Z}`
            })
        };
        return
    }
    let J = A.input;
    try {
        if (G.abortController.signal.aborted) {
            BA("tengu_tool_use_cancelled", {
                toolName: I.name,
                toolUseID: A.id,
                isMcp: I.isMcp ?? !1,
                queryChainId: G.queryTracking?.chainId,
                queryDepth: G.queryTracking?.depth
            });
            let W = g30(A.id);
            yield {
                message: j0({
                    content: [W],
                    toolUseResult: HWA
                })
            };