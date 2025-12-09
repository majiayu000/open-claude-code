/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: agents_005.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (5次) = lazyLoader(fn) - Lazy module loader
 *   pG       (1次) = esmExport(obj, key) - ESM export binding
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 5/13
 * Lines: 414271 - 415764 (1494 lines)
 * Original file: cli.js
 */

            if (N.additionalContexts && N.additionalContexts.length > 0) z.messages.push(p9({
                type: "hook_additional_context",
                content: N.additionalContexts.map(hJ9),
                hookName: "UserPromptSubmit",
                toolUseID: `hook-${ij3()}`,
                hookEvent: "UserPromptSubmit"
            }));
            if (N.message) switch (N.message.attachment.type) {
                case "hook_success":
                    if (!N.message.attachment.content) break;
                    z.messages.push({
                        ...N.message,
                        attachment: {
                            ...N.message.attachment,
                            content: hJ9(N.message.attachment.content)
                        }
                    });
                    break;
                default:
                    z.messages.push(N.message);
                    break
            }
        }
        return p7("query_hooks_end"), z
    } finally {
        X?.(void 0)
    }
}

function hJ9(A) {
    if (A.length > lX0) return `${A.substring(0,lX0)}… [output truncated - exceeded ${lX0} characters]`;
    return A
}
async function nj3(A, Q, B, G, Z, I, Y, J, W, X, F, V, K, D, H) {
    let C = null,
        E = [];
    if (typeof A === "string") C = A;
    else if (A.length > 0) {
        p7("query_image_processing_start");
        for (let R = 0; R < A.length; R++) {
            let P = A[R];
            if (P.type === "image") A[R] = await zjB(P)
        }
        p7("query_image_processing_end");
        let q = A[A.length - 1];
        if (q?.type === "text") C = q.text, E = [...A.slice(0, -1)];
        else E = A
    }
    if (C === null && Q !== "prompt") throw Error(`Mode: ${Q} requires a string input.`);
    let z = I ? Object.values(I).filter((q) => q.type === "image").map((q) => ({
            type: "image",
            source: {
                type: "base64",
                media_type: q.mediaType || "image/png",
                data: q.content
            }
        })) : [],
        w = C !== null && (Q !== "prompt" || !C.startsWith("/"));
    p7("query_attachment_loading_start");
    let N = w ? await V91(HYA(C, Z, Y ?? null, [], W, D)) : [];
    if (p7("query_attachment_loading_end"), C !== null && Q === "bash") return await ST2(C, E, N, Z, G, B);
    if (C !== null && Q === "background") return await TT2(C, E, N, Z, G, B);
    if (C !== null && Q === "memorySelect" && J) return xJ9(C, E, N, Z, J);
    if (C !== null && C.startsWith("/")) return await TJ9(C, E, z, N, Z, B, G, X, F);
    if (C !== null && Q === "prompt") {
        let q = C.trim(),
            R = N.find((P) => P.attachment.type === "agent_mention");
        if (R) {
            let P = `@agent-${R.attachment.agentType}`,
                y = q === P,
                v = q.startsWith(P) && !y;
            BA("tengu_subagent_at_mention", {
                is_subagent_only: y,
                is_prefix: v
            })
        }
    }
    return bJ9(A, z, N, B, X, V, K, H)
}
var lX0 = 1e4;
var vXA = L(() => {
    nQ();
    wi();
    eM();
    nQ();
    AO();
    j80();
    _T2();
    jTA();
    vJ9();
    fJ9();
    Ie();
    w0();
    JjA()
});

function oI1(A, Q) {
    if (A.includes("$ARGUMENTS")) return A.replaceAll("$ARGUMENTS", Q);
    return A + `

ARGUMENTS: ${Q}`
}
var mjA;
var aX0 = L(() => {
    h2();
    mjA = _.object({
        ok: _.boolean().describe("Whether the condition was met"),
        reason: _.string().describe("Reason, if the condition was not met").optional()
    })
});
import {
    randomUUID as aj3
} from "crypto";
async function gJ9(A, Q, B, G, Z, I, Y, J) {
    let W = J || `hook-${aj3()}`;
    try {
        let X = oI1(A.prompt, G);
        g(`Hooks: Processing prompt hook with prompt: ${X}`);
        let F = {
                ...I,
                onChangeAPIKey: () => {},
                onChangeDynamicMcpConfig: void 0,
                onInstallIDEExtension: void 0,
                resume: void 0,
                options: {
                    ...I.options,
                    dynamicMcpConfig: void 0,
                    ideInstallationStatus: null,
                    theme: "dark"
                }
            },
            V = await pP({
                input: X,
                mode: "prompt",
                setIsLoading: () => {},
                setToolJSX: () => {},
                context: F
            });
        if (!V.shouldQuery) {
            let N = V.messages.map((q) => {
                if (q.type === "user" && q.message?.content) {
                    if (typeof q.message.content === "string") return q.message.content;
                    return q.message.content.filter((R) => R.type === "text").map((R) => R.text).join("")
                }
                return ""
            }).join(`
`);
            return {
                hook: A,
                outcome: "success",
                message: p9({
                    type: "hook_success",
                    hookName: Q,
                    toolUseID: W,
                    hookEvent: B,
                    content: N
                })
            }
        }
        let K = Y && Y.length > 0 ? [...Y, ...V.messages] : V.messages;
        g(`Hooks: Querying model with ${K.length} messages`);
        let D = A.timeout ? A.timeout * 1000 : 30000,
            H = s9(),
            C = setTimeout(() => {
                H.abort()
            }, D),
            {
                signal: E,
                cleanup: z
            } = yk(Z, H.signal),
            w = [...K, xD({
                content: "{"
            })];
        try {
            let N = await Ky({
                messages: w,
                systemPrompt: [`You are evaluating a hook in Claude Code.

CRITICAL: You MUST return ONLY valid JSON with no other text, explanation, or commentary before or after the JSON. Do not include any markdown code blocks, thinking, or additional text.

Your response must be a single JSON object matching one of the following schemas:
1. If the condition is met, return: {"ok": true}
2. If the condition is not met, return: {"ok": false, "reason": "Reason for why it is not met"}

Return the JSON object directly with no preamble or explanation.`],
                maxThinkingTokens: 0,
                tools: I.options.tools,
                signal: E,
                options: {
                    async getToolPermissionContext() {
                        return (await I.getAppState()).toolPermissionContext
                    },
                    model: A.model ?? LW(),
                    toolChoice: void 0,
                    isNonInteractiveSession: !0,
                    hasAppendSystemPrompt: !1,
                    agents: [],
                    querySource: "hook_prompt",
                    mcpTools: [],
                    agentIdOrSessionId: I.agentId
                }
            });
            clearTimeout(C), z();
            let q = N.message.content.filter((v) => v.type === "text").map((v) => v.text).join("");
            I.setResponseLength((v) => v + q.length);
            let R = ("{" + q).trim();
            g(`Hooks: Model response: ${R}`);
            let P = S7(R);
            if (!P) return g(`Hooks: error parsing response as JSON: ${R}`), {
                hook: A,
                outcome: "non_blocking_error",
                message: p9({
                    type: "hook_non_blocking_error",
                    hookName: Q,
                    toolUseID: W,
                    hookEvent: B,
                    stderr: "JSON validation failed",
                    stdout: R,
                    exitCode: 1
                })
            };
            let y = mjA.safeParse(P);
            if (!y.success) return g(`Hooks: model response does not conform to expected schema: ${y.error.message}`), {
                hook: A,
                outcome: "non_blocking_error",
                message: p9({
                    type: "hook_non_blocking_error",
                    hookName: Q,
                    toolUseID: W,
                    hookEvent: B,
                    stderr: `Schema validation failed: ${y.error.message}`,
                    stdout: R,
                    exitCode: 1
                })
            };
            if (!y.data.ok) return g(`Hooks: Prompt hook condition was not met: ${y.data.reason}`), {
                hook: A,
                outcome: "blocking",
                blockingError: {
                    blockingError: `Prompt hook condition was not met: ${y.data.reason}`,
                    command: A.prompt
                },
                preventContinuation: !0,
                stopReason: y.data.reason
            };
            return g("Hooks: Prompt hook condition was met"), {
                hook: A,
                outcome: "success",
                message: p9({
                    type: "hook_success",
                    hookName: Q,
                    toolUseID: W,
                    hookEvent: B,
                    content: "Condition met"
                })
            }
        } catch (N) {
            if (clearTimeout(C), z(), E.aborted) return {
                hook: A,
                outcome: "cancelled"
            };
            throw N
        }
    } catch (X) {
        let F = X instanceof Error ? X.message : String(X);
        return g(`Hooks: Prompt hook error: ${F}`), {
            hook: A,
            outcome: "non_blocking_error",
            message: p9({
                type: "hook_non_blocking_error",
                hookName: Q,
                toolUseID: W,
                hookEvent: B,
                stderr: `Error executing prompt hook: ${F}`,
                stdout: "",
                exitCode: 1
            })
        }
    }
}
var uJ9 = L(() => {
    D0();
    vXA();
    nQ();
    kZ();
    s2();
    j21();
    UZ();
    eM();
    zV();
    aX0()
});
import {
    randomUUID as mJ9
} from "crypto";
async function dJ9(A, Q, B, G, Z, I, Y, J) {
    let W = Y || `hook-${mJ9()}`,
        X = I.agentId !== G0() ? eXA(I.agentId) : yJA(),
        F = Date.now();
    try {
        let V = oI1(A.prompt(J), G);
        g(`Hooks: Processing agent hook with prompt: ${V}`);
        let K = {
                ...I,
                onChangeAPIKey: () => {},
                onChangeDynamicMcpConfig: void 0,
                onInstallIDEExtension: void 0,
                resume: void 0,
                options: {
                    ...I.options,
                    dynamicMcpConfig: void 0,
                    ideInstallationStatus: null,
                    theme: "dark"
                }
            },
            D = await pP({
                input: V,
                mode: "prompt",
                setIsLoading: () => {},
                setToolJSX: () => {},
                context: K
            });
        if (!D.shouldQuery) {
            let R = D.messages.map((P) => {
                if (P.type === "user" && P.message?.content) {
                    if (typeof P.message.content === "string") return P.message.content;
                    return P.message.content.filter((y) => y.type === "text").map((y) => y.text).join("")
                }
                return ""
            }).join(`
`);
            return {
                hook: A,
                outcome: "success",
                message: p9({
                    type: "hook_success",
                    hookName: Q,
                    toolUseID: W,
                    hookEvent: B,
                    content: R
                })
            }
        }
        let H = D.messages;
        g(`Hooks: Starting agent query with ${H.length} messages`);
        let C = A.timeout ? A.timeout * 1000 : 60000,
            E = s9(),
            {
                signal: z,
                cleanup: w
            } = yk(Z, AbortSignal.timeout(C)),
            N = () => E.abort();
        z.addEventListener("abort", N);
        let q = E.signal;
        try {
            let R = sj3(),
                y = [...I.options.tools.filter((QA) => QA.name !== Az).filter((QA) => !eRA.has(QA.name)), R],
                v = [`You are verifying a stop condition in Claude Code. Your task is to verify that the agent completed the given plan. The conversation transcript is available at: ${X}
You can read this file to analyze the conversation history if needed.

Use the available tools to inspect the codebase and verify the condition.
Use as few steps as possible - be efficient and direct.

When done, return your result using the ${Az} tool with:
- ok: true if the condition is met
- ok: false with reason if the condition is not met`],
                x = A.model ?? LW(),
                p = 50,
                u = `hook-agent-${mJ9()}`,
                o = {
                    ...I,
                    agentId: u,
                    abortController: E,
                    options: {
                        ...I.options,
                        tools: y,
                        mainLoopModel: x,
                        isNonInteractiveSession: !0,
                        maxThinkingTokens: 0
                    },
                    setInProgressToolUseIDs: () => {},
                    async getAppState() {
                        let QA = await I.getAppState(),
                            IA = QA.toolPermissionContext.alwaysAllowRules.session ?? [];
                        return {
                            ...QA,
                            toolPermissionContext: {
                                ...QA.toolPermissionContext,
                                mode: "dontAsk",
                                alwaysAllowRules: {
                                    ...QA.toolPermissionContext.alwaysAllowRules,
                                    session: [...IA, `Read(/${X})`]
                                }
                            }
                        }
                    }
                };
            N21(I.setAppState, u, "Stop", "", (QA) => tI1(QA, Az), `You MUST call the ${Az} tool to complete this request. Call this tool now.`, {
                timeout: 5000
            });
            let l = null,
                k = 0,
                d = !1;
            for await (let QA of J$({
                messages: H,
                systemPrompt: v,
                userContext: {},
                systemContext: {},
                canUseTool: L$,
                toolUseContext: o,
                querySource: "hook_agent"
            })) {
                if (RQA(QA, () => {}, (IA) => I.setResponseLength((HA) => HA + IA.length), I.setStreamMode ?? (() => {}), () => {}), QA.type === "stream_event" || QA.type === "stream_request_start") continue;
                if (QA.type === "assistant") {
                    if (k++, k >= 50) {
                        d = !0, g(`Hooks: Agent turn ${k} hit max turns, aborting`), E.abort();
                        break
                    }
                }
                if (QA.type === "attachment" && QA.attachment.type === "structured_output") {
                    let IA = mjA.safeParse(QA.attachment.data);
                    if (IA.success) {
                        l = IA.data, g(`Hooks: Got structured output: ${JSON.stringify(l)}`), E.abort();
                        break
                    }
                }
            }
            if (z.removeEventListener("abort", N), w(), M21(I.setAppState, u), !l) {
                if (d) return g("Hooks: Agent hook did not complete within 50 turns"), BA("tengu_agent_stop_hook_max_turns", {
                    durationMs: Date.now() - F,
                    turnCount: k
                }), {
                    hook: A,
                    outcome: "cancelled"
                };
                return g("Hooks: Agent hook did not return structured output"), BA("tengu_agent_stop_hook_error", {
                    durationMs: Date.now() - F,
                    turnCount: k,
                    errorType: 1
                }), {
                    hook: A,
                    outcome: "cancelled"
                }
            }
            if (!l.ok) return g(`Hooks: Agent hook condition was not met: ${l.reason}`), {
                hook: A,
                outcome: "blocking",
                blockingError: {
                    blockingError: `Agent hook condition was not met: ${l.reason}`,
                    command: A.prompt(J)
                }
            };
            return g("Hooks: Agent hook condition was met"), BA("tengu_agent_stop_hook_success", {
                durationMs: Date.now() - F,
                turnCount: k
            }), {
                hook: A,
                outcome: "success",
                message: p9({
                    type: "hook_success",
                    hookName: Q,
                    toolUseID: W,
                    hookEvent: B,
                    content: "Condition met"
                })
            }
        } catch (R) {
            if (z.removeEventListener("abort", N), w(), q.aborted) return {
                hook: A,
                outcome: "cancelled"
            };
            throw R
        }
    } catch (V) {
        let K = V instanceof Error ? V.message : String(V);
        return g(`Hooks: Agent hook error: ${K}`), BA("tengu_agent_stop_hook_error", {
            durationMs: Date.now() - F,
            errorType: 2
        }), {
            hook: A,
            outcome: "non_blocking_error",
            message: p9({
                type: "hook_non_blocking_error",
                hookName: Q,
                toolUseID: W,
                hookEvent: B,
                stderr: `Error executing agent hook: ${K}`,
                stdout: "",
                exitCode: 1
            })
        }
    }
}

function sj3() {
    return {
        ...fX0,
        inputSchema: mjA,
        inputJSONSchema: {
            type: "object",
            properties: {
                ok: {
                    type: "boolean",
                    description: "Whether the condition was met"
                },
                reason: {
                    type: "string",
                    description: "Reason, if the condition was not met"
                }
            },
            required: ["ok"],
            additionalProperties: !1
        },
        async prompt() {
            return "Use this tool to return your verification result. You MUST call this tool exactly once at the end of your response."
        }
    }
}
var cJ9 = L(() => {
    D0();
    vXA();
    aG();
    wn();
    s2();
    eM();
    w0();
    oXA();
    UZ();
    j21();
    aX0();
    S0();
    GG();
    nQ();
    jq();
    eIA()
});
var nJ9 = {};
pG(nJ9, {
    getUserPromptSubmitHookBlockingMessage: () => iX0,
    getStopHookMessage: () => x30,
    getPreToolHookBlockingMessage: () => y30,
    getMatchingHooks: () => rX0,
    executeUserPromptSubmitHooks: () => nX0,
    executeSubagentStartHooks: () => qX0,
    executeStopHooks: () => h30,
    executeStatusLineCommand: () => HJ0,
    executeSessionStartHooks: () => R00,
    executeSessionEndHooks: () => tX0,
    executePreToolHooks: () => v30,
    executePreCompactHooks: () => j00,
    executePostToolUseFailureHooks: () => f30,
    executePostToolHooks: () => b30,
    executePermissionRequestHooks: () => CW0,
    executeNotificationHooks: () => U80,
    createBaseHookInput: () => rE
});
import {
    spawn as rj3
} from "node:child_process";
import {
    randomUUID as AFA
} from "crypto";

function pJ9() {
    if (!!H5()) return !1;
    return !_X(!1)
}

function rE(A, Q) {
    let B = Q ?? G0();
    return {
        session_id: B,
        transcript_path: djA(B),
        cwd: H0(),
        permission_mode: A
    }
}

function lJ9(A) {
    let Q = A.trim();
    if (!Q.startsWith("{")) return g("Hook output does not start with {, treating as plain text"), {
        plainText: A
    };
    try {
        let B = JSON.parse(Q),
            G = P21.safeParse(B);
        if (G.success) return g("Successfully parsed and validated hook JSON output"), {
            json: G.data
        };
        else {
            let I = `Hook JSON output validation failed:
${G.error.errors.map((Y)=>`  - ${Y.path.join(".")}: ${Y.message}`).join(`
`)}

Expected schema:
${JSON.stringify({continue:"boolean (optional)",suppressOutput:"boolean (optional)",stopReason:"string (optional)",decision:'"approve" | "block" (optional)',reason:"string (optional)",systemMessage:"string (optional)",permissionDecision:'"allow" | "deny" | "ask" (optional)',hookSpecificOutput:{"for PreToolUse":{hookEventName:'"PreToolUse"',permissionDecision:'"allow" | "deny" | "ask" (optional)',permissionDecisionReason:"string (optional)",updatedInput:"object (optional) - Modified tool input to use"},"for UserPromptSubmit":{hookEventName:'"UserPromptSubmit"',additionalContext:"string (required)"},"for PostToolUse":{hookEventName:'"PostToolUse"',additionalContext:"string (optional)"}}},null,2)}. The hook's stdout was: ${JSON.stringify(B,null,2)}`;
            return g(I), {
                plainText: A,
                validationError: I
            }
        }
    } catch (B) {
        return g(`Failed to parse hook output as JSON: ${B}`), {
            plainText: A
        }
    }
}

function iJ9({
    json: A,
    command: Q,
    hookName: B,
    toolUseID: G,
    hookEvent: Z,
    expectedHookEvent: I,
    stdout: Y,
    stderr: J,
    exitCode: W
}) {
    let X = {},
        F = A;
    if (F.continue === !1) {
        if (X.preventContinuation = !0, F.stopReason) X.stopReason = F.stopReason
    }
    if (A.decision) switch (A.decision) {
        case "approve":
            X.permissionBehavior = "allow";
            break;
        case "block":
            X.permissionBehavior = "deny", X.blockingError = {
                blockingError: A.reason || "Blocked by hook",
                command: Q
            };
            break;
        default:
            throw Error(`Unknown hook decision type: ${A.decision}. Valid types are: approve, block`)
    }
    if (A.systemMessage) X.systemMessage = A.systemMessage;
    if (A.hookSpecificOutput?.hookEventName === "PreToolUse" && A.hookSpecificOutput.permissionDecision) switch (A.hookSpecificOutput.permissionDecision) {
        case "allow":
            X.permissionBehavior = "allow";
            break;
        case "deny":
            X.permissionBehavior = "deny", X.blockingError = {
                blockingError: A.reason || "Blocked by hook",
                command: Q
            };
            break;
        case "ask":
            X.permissionBehavior = "ask";
            break;
        default:
            throw Error(`Unknown hook permissionDecision type: ${A.hookSpecificOutput.permissionDecision}. Valid types are: allow, deny, ask`)
    }
    if (X.permissionBehavior !== void 0 && A.reason !== void 0) X.hookPermissionDecisionReason = A.reason;
    if (A.hookSpecificOutput) {
        if (I && A.hookSpecificOutput.hookEventName !== I) throw Error(`Hook returned incorrect event name: expected '${I}' but got '${A.hookSpecificOutput.hookEventName}'. Full stdout: ${JSON.stringify(A,null,2)}`);
        switch (A.hookSpecificOutput.hookEventName) {
            case "PreToolUse":
                if (A.hookSpecificOutput.permissionDecision) switch (A.hookSpecificOutput.permissionDecision) {
                    case "allow":
                        X.permissionBehavior = "allow";
                        break;
                    case "deny":
                        X.permissionBehavior = "deny", X.blockingError = {
                            blockingError: A.hookSpecificOutput.permissionDecisionReason || A.reason || "Blocked by hook",
                            command: Q
                        };
                        break;
                    case "ask":
                        X.permissionBehavior = "ask";
                        break
                }
                if (X.hookPermissionDecisionReason = A.hookSpecificOutput.permissionDecisionReason, A.hookSpecificOutput.updatedInput) X.updatedInput = A.hookSpecificOutput.updatedInput;
                break;
            case "UserPromptSubmit":
                X.additionalContext = A.hookSpecificOutput.additionalContext;
                break;
            case "SessionStart":
                X.additionalContext = A.hookSpecificOutput.additionalContext;
                break;
            case "SubagentStart":
                X.additionalContext = A.hookSpecificOutput.additionalContext;
                break;
            case "PostToolUse":
                if (X.additionalContext = A.hookSpecificOutput.additionalContext, A.hookSpecificOutput.updatedMCPToolOutput) X.updatedMCPToolOutput = A.hookSpecificOutput.updatedMCPToolOutput;
                break;
            case "PostToolUseFailure":
                X.additionalContext = A.hookSpecificOutput.additionalContext;
                break;
            case "PermissionRequest":
                if (A.hookSpecificOutput.decision) {
                    if (X.permissionRequestResult = A.hookSpecificOutput.decision, X.permissionBehavior = A.hookSpecificOutput.decision.behavior === "allow" ? "allow" : "deny", A.hookSpecificOutput.decision.behavior === "allow" && A.hookSpecificOutput.decision.updatedInput) X.updatedInput = A.hookSpecificOutput.decision.updatedInput
                }
                break
        }
    }
    return {
        ...X,
        message: X.blockingError ? p9({
            type: "hook_blocking_error",
            hookName: B,
            toolUseID: G,
            hookEvent: Z,
            blockingError: X.blockingError
        }) : p9({
            type: "hook_success",
            hookName: B,
            toolUseID: G,
            hookEvent: Z,
            content: "Success",
            stdout: Y,
            stderr: J,
            exitCode: W
        })
    }
}
async function sX0(A, Q, B, G, Z, I) {
    let Y = pQ(),
        J = process.env.CLAUDE_CODE_SHELL_PREFIX ? zrA(process.env.CLAUDE_CODE_SHELL_PREFIX, A.command) : A.command,
        W = A.timeout ? A.timeout * 1000 : 60000,
        X = {
            ...process.env,
            CLAUDE_PROJECT_DIR: Y
        };
    if (Q === "SessionStart" && I !== void 0) X.CLAUDE_ENV_FILE = UrA(I);
    let F = rj3(J, [], {
            env: X,
            cwd: H0(),
            shell: !0
        }),
        V = ErA(F, Z, W),
        K = "",
        D = "";
    F.stdout.setEncoding("utf8"), F.stderr.setEncoding("utf8");
    let H = !1,
        C = null,
        E = new Promise((q) => {
            C = q
        });
    F.stdout.on("data", (q) => {
        if (K += q, !H && K.trim().includes("}")) {
            H = !0, g(`Hooks: Checking initial response for async: ${K.trim()}`);
            try {
                let R = JSON.parse(K.trim());
                if (g(`Hooks: Parsed initial response: ${JSON.stringify(R)}`), BYA(R)) {
                    let P = `async_hook_${F.pid}`;
                    g(`Hooks: Detected async hook, backgrounding process ${P}`);
                    let y = V.background(P);
                    if (y) mG2({
                        processId: P,
                        asyncResponse: R,
                        hookEvent: Q,
                        hookName: B,
                        command: A.command,
                        shellCommand: V
                    }), y.stdoutStream.on("data", (v) => {
                        dG2(P, v.toString())
                    }), y.stderrStream.on("data", (v) => {
                        cG2(P, v.toString())
                    }), C?.({
                        stdout: K,
                        stderr: D,
                        status: 0
                    })
                } else g("Hooks: Initial response is not async, continuing normal processing")
            } catch (R) {
                g(`Hooks: Failed to parse initial response as JSON: ${R}`)
            }
        }
    }), F.stderr.on("data", (q) => {
        D += q
    });
    let z = new Promise((q, R) => {
            F.stdin.on("error", R), F.stdin.write(G, "utf8"), F.stdin.end(), q()
        }),
        w = new Promise((q, R) => {
            F.on("error", R)
        }),
        N = new Promise((q) => {
            F.on("close", (R) => {
                q({
                    stdout: K,
                    stderr: D,
                    status: R ?? 1,
                    aborted: Z.aborted
                })
            })
        });
    try {
        return await Promise.race([z, w]), await Promise.race([E, N, w])
    } catch (q) {
        let R = q;
        if (R.code === "EPIPE") return g("EPIPE error while writing to hook stdin (hook command likely closed early)"), {
            stdout: "",
            stderr: "Hook command closed stdin before hook input was fully written (EPIPE)",
            status: 1
        };
        else if (R.code === "ABORT_ERR") return {
            stdout: "",
            stderr: "Hook cancelled",
            status: 1,
            aborted: !0
        };
        else return {
            stdout: "",
            stderr: `Error occurred while executing hook command: ${q instanceof Error?q.message:String(q)}`,
            status: 1
        }
    }
}

function oj3(A, Q) {
    if (!Q || Q === "*") return !0;
    if (/^[a-zA-Z0-9_|]+$/.test(Q)) {
        if (Q.includes("|")) return Q.split("|").map((G) => G.trim()).includes(A);
        return A === Q
    }
    try {
        return new RegExp(Q).test(A)
    } catch {
        return g(`Invalid regex pattern in hook matcher: ${Q}`), !1
    }
}

function tj3(A) {
    let Q = {},
        B = hG2();
    if (B)
        for (let [G, Z] of Object.entries(B)) Q[G] = Z.map((I) => ({
            matcher: I.matcher,
            hooks: I.hooks
        }));
    if (!O21()) {
        let G = IkA();
        if (G)
            for (let [Z, I] of Object.entries(G)) {
                if (!Q[Z]) Q[Z] = [];
                for (let Y of I) Q[Z].push({
                    matcher: Y.matcher,
                    hooks: Y.hooks
                })
            }
    }
    if (A) {
        let G = G0(),
            Z = L21(A, G);
        for (let [I, Y] of Z.entries()) {
            if (!Q[I]) Q[I] = [];
            for (let J of Y) Q[I].push({
                matcher: J.matcher,
                hooks: J.hooks
            })
        }
    }
    return Q
}

function rX0(A, Q, B) {
    try {
        let Z = tj3(A)?.[Q] ?? [],
            I = void 0;
        switch (B.hook_event_name) {
            case "PreToolUse":
            case "PostToolUse":
            case "PostToolUseFailure":
            case "PermissionRequest":
                I = B.tool_name;
                break;
            case "SessionStart":
                I = B.source;
                break;
            case "PreCompact":
                I = B.trigger;
                break;
            case "Notification":
                I = B.notification_type;
                break;
            case "SessionEnd":
                I = B.reason;
                break;
            case "SubagentStart":
                I = B.agent_type;
                break;
            default:
                break
        }
        g(`Getting matching hook commands for ${Q} with query: ${I}`), g(`Found ${Z.length} hook matchers in settings`);
        let Y;
        if (!I) Y = Z.flatMap((K) => K.hooks);
        else Y = Z.filter((K) => !K.matcher || oj3(I, K.matcher)).flatMap((K) => K.hooks);
        let J = Array.from(new Map(Y.filter((K) => K.type === "command").map((K) => [K.command, K])).values()),
            W = Array.from(new Map(Y.filter((K) => K.type === "prompt").map((K) => [K.prompt, K])).values()),
            X = Array.from(new Map(Y.filter((K) => K.type === "agent").map((K) => [K.prompt([]), K])).values()),
            F = Y.filter((K) => K.type === "callback"),
            V = [...J, ...W, ...X, ...F];
        return g(`Matched ${V.length} unique hooks for query "${I||"no match query"}" (${Y.length} before deduplication)`), V
    } catch {
        return []
    }
}

function y30(A, Q) {
    return `${A} hook error: ${Q.blockingError}`
}

function x30(A) {
    return `Stop hook feedback:
${A.blockingError}`
}

function iX0(A) {
    return `UserPromptSubmit operation blocked by hook:
${A.blockingError}`
}
async function* Xa({
    hookInput: A,
    toolUseID: Q,
    matchQuery: B,
    signal: G,
    timeoutMs: Z = tq,
    toolUseContext: I,
    messages: Y
}) {
    if (c0().disableAllHooks) return;
    let J = A.hook_event_name,
        W = B ? `${J}:${B}` : J;
    if (pJ9()) {
        g(`Skipping ${W} hook execution - workspace trust not accepted`);
        return
    }
    let X = I ? await I.getAppState() : void 0,
        F = rX0(X, J, A);
    if (F.length === 0) return;
    if (G?.aborted) return;
    BA("tengu_run_hook", {
        hookName: W,
        numCommands: F.length
    });
    for (let H of F) yield {
        message: {
            type: "progress",
            data: {
                type: "hook_progress",
                hookEvent: J,
                hookName: W,
                command: gE(H),
                promptText: H.type === "prompt" ? H.prompt : void 0,
                statusMessage: "statusMessage" in H ? H.statusMessage : void 0
            },
            parentToolUseID: Q,
            toolUseID: Q,
            timestamp: new Date().toISOString(),
            uuid: AFA()
        }
    };
    let V = F.map(async function*(H, C) {
            if (H.type === "callback") {
                let N = H.timeout ? H.timeout * 1000 : Z,
                    {
                        signal: q,
                        cleanup: R
                    } = yk(AbortSignal.timeout(N), G);
                yield AS3({
                    toolUseID: Q,
                    hook: H,
                    hookEvent: J,
                    hookInput: A,
                    signal: q,
                    hookIndex: C
                }).finally(R);
                return
            }
            if (H.type === "function") {
                if (!Y) {
                    yield {
                        message: p9({
                            type: "hook_error_during_execution",
                            hookName: W,
                            toolUseID: Q,
                            hookEvent: J,
                            content: "Messages not provided for function hook"
                        }),
                        outcome: "non_blocking_error",
                        hook: H
                    };
                    return
                }
                yield ej3({
                    hook: H,
                    messages: Y,
                    hookName: W,
                    toolUseID: Q,
                    hookEvent: J,
                    timeoutMs: Z,
                    signal: G
                });
                return
            }
            let E = H.timeout ? H.timeout * 1000 : Z,
                {
                    signal: z,
                    cleanup: w
                } = yk(AbortSignal.timeout(E), G);
            try {
                let N;
                try {
                    N = JSON.stringify(A)
                } catch (v) {
                    e(Error(`Failed to stringify hook ${W} input`, {
                        cause: v
                    })), yield {
                        message: p9({
                            type: "hook_error_during_execution",
                            hookName: W,
                            toolUseID: Q,
                            hookEvent: J,
                            content: `Failed to prepare hook input: ${v instanceof Error?v.message:String(v)}`
                        }),
                        outcome: "non_blocking_error",
                        hook: H
                    };
                    return
                }
                if (H.type === "prompt") {
                    if (!I) throw Error("ToolUseContext is required for prompt hooks. This is a bug.");
                    yield await gJ9(H, W, J, N, z, I, Y, Q), w?.();
                    return
                }
                if (H.type === "agent") {
                    if (!I) throw Error("ToolUseContext is required for agent hooks. This is a bug.");
                    if (!Y) throw Error("Messages are required for agent hooks. This is a bug.");
                    yield await dJ9(H, W, J, N, z, I, Q, Y), w?.();
                    return
                }
                let q = await sX0(H, J, W, N, z, C);
                if (w?.(), q.aborted) {
                    yield {
                        message: p9({
                            type: "hook_cancelled",
                            hookName: W,
                            toolUseID: Q,
                            hookEvent: J
                        }),
                        outcome: "cancelled",
                        hook: H
                    };
                    return
                }
                let {
                    json: R,
                    plainText: P,
                    validationError: y
                } = lJ9(q.stdout);
                if (y) {
                    yield {
                        message: p9({
                            type: "hook_non_blocking_error",
                            hookName: W,
                            toolUseID: Q,
                            hookEvent: J,
                            stderr: `JSON validation failed: ${y}`,
                            stdout: q.stdout,
                            exitCode: 1
                        }),
                        outcome: "non_blocking_error",
                        hook: H
                    };
                    return
                }
                if (R) {
                    if (BYA(R)) {
                        yield {
                            outcome: "success",
                            hook: H
                        };
                        return
                    }
                    let v = iJ9({
                        json: R,
                        command: H.type === "command" ? H.command : "prompt",
                        hookName: W,
                        toolUseID: Q,
                        hookEvent: J,
                        expectedHookEvent: J,
                        stdout: q.stdout,
                        stderr: q.stderr,
                        exitCode: q.status
                    });
                    if (uG2(R) && !R.suppressOutput && P && q.status === 0) {
                        let x = `${oA.bold(W)} completed`;
                        yield {
                            ...v,
                            message: v.message || p9({
                                type: "hook_success",
                                hookName: W,
                                toolUseID: Q,
                                hookEvent: J,
                                content: x,
                                stdout: q.stdout,
                                stderr: q.stderr,
                                exitCode: q.status
                            }),
                            outcome: "success",
                            hook: H
                        };
                        return
                    }
                    yield {
                        ...v,
                        outcome: "success",
                        hook: H
                    };
                    return
                }
                if (q.status === 0) {
                    yield {
                        message: p9({
                            type: "hook_success",
                            hookName: W,
                            toolUseID: Q,
                            hookEvent: J,
                            content: q.stdout.trim(),
                            stdout: q.stdout,
                            stderr: q.stderr,
                            exitCode: q.status
                        }),
                        outcome: "success",
                        hook: H
                    };
                    return
                }
                if (q.status === 2) {
                    yield {
                        blockingError: {
                            blockingError: `[${H.command}]: ${q.stderr||"No stderr output"}`,
                            command: H.command
                        },
                        outcome: "blocking",
                        hook: H
                    };
                    return
                }
                yield {
                    message: p9({
                        type: "hook_non_blocking_error",
                        hookName: W,
                        toolUseID: Q,
                        hookEvent: J,
                        stderr: `Failed with non-blocking status code: ${q.stderr.trim()||"No stderr output"}`,
                        stdout: q.stdout,
                        exitCode: q.status
                    }),
                    outcome: "non_blocking_error",
                    hook: H
                };
                return
            } catch (N) {
                w?.();
                let q = N instanceof Error ? N.message : String(N);
                yield {
                    message: p9({
                        type: "hook_non_blocking_error",
                        hookName: W,
                        toolUseID: Q,
                        hookEvent: J,
                        stderr: `Failed to run: ${q}`,
                        stdout: "",
                        exitCode: 1
                    }),
                    outcome: "non_blocking_error",
                    hook: H
                };
                return
            }
        }),
        K = {
            success: 0,
            blocking: 0,
            non_blocking_error: 0,
            cancelled: 0
        },
        D;
    for await (let H of CYA(V)) {
        if (K[H.outcome]++, H.preventContinuation) yield {
            preventContinuation: !0,
            stopReason: H.stopReason
        };
        if (H.blockingError) yield {
            blockingError: H.blockingError
        };
        if (H.message) yield {
            message: H.message
        };
        if (H.systemMessage) yield {
            message: p9({
                type: "hook_system_message",
                content: H.systemMessage,
                hookName: W,
                toolUseID: Q,
                hookEvent: J
            })
        };
        if (H.additionalContext) yield {
            additionalContexts: [H.additionalContext]
        };
        if (H.updatedMCPToolOutput) yield {
            updatedMCPToolOutput: H.updatedMCPToolOutput
        };
        if (H.permissionBehavior) switch (H.permissionBehavior) {
            case "deny":
                D = "deny";
                break;
            case "ask":
                if (D !== "deny") D = "ask";
                break;
            case "allow":
                if (!D) D = "allow";
                break;
            case "passthrough":
                break
        }
        if (D !== void 0) yield {
            permissionBehavior: D,
            hookPermissionDecisionReason: H.hookPermissionDecisionReason,
            updatedInput: H.updatedInput && H.permissionBehavior === "allow" ? H.updatedInput : void 0
        };
        if (H.permissionRequestResult) yield {
            permissionRequestResult: H.permissionRequestResult
        };
        if (X && H.hook.type !== "callback") {
            let C = G0(),
                z = SG2(X, C, J, B ?? "", H.hook);
            if (z?.onHookSuccess && H.outcome === "success") try {
                z.onHookSuccess(H.hook, H)
            } catch (w) {
                e(Error("Session hook success callback failed", {
                    cause: w
                }))
            }
        }
    }
    BA("tengu_repl_hook_finished", {
        hookName: W,
        numCommands: F.length,
        numSuccess: K.success,
        numBlocking: K.blocking,
        numNonBlockingError: K.non_blocking_error,
        numCancelled: K.cancelled
    })
}
async function oX0({
    getAppState: A,
    hookInput: Q,
    matchQuery: B,
    signal: G,
    timeoutMs: Z = tq
}) {
    let I = Q.hook_event_name,
        Y = B ? `${I}:${B}` : I;
    if (c0().disableAllHooks) return g(`Skipping hooks for ${Y} due to 'disableAllHooks' setting`), [];
    if (pJ9()) return g(`Skipping ${Y} hook execution - workspace trust not accepted`), [];
    let J = A ? await A() : void 0,
        W = rX0(J, I, Q);
    if (W.length === 0) return [];
    if (G?.aborted) return [];
    BA("tengu_run_hook", {
        hookName: Y,
        numCommands: W.length
    });
    let X;
    try {
        X = JSON.stringify(Q)
    } catch (V) {
        return e(V instanceof Error ? V : Error(String(V))), []
    }
    let F = W.map(async (V, K) => {
        if (V.type === "callback") {
            let E = V.timeout ? V.timeout * 1000 : Z,
                {
                    signal: z,
                    cleanup: w
                } = yk(AbortSignal.timeout(E), G);
            try {
                let N = AFA(),
                    q = await V.callback(Q, N, z, K);
                if (w?.(), BYA(q)) return g(`${Y} [callback] returned async response, returning empty output`), {
                    command: "callback",
                    succeeded: !0,
                    output: ""
                };
                let R = q.systemMessage || "";
                return g(`${Y} [callback] completed successfully`), {
                    command: "callback",
                    succeeded: !0,
                    output: R
                }
            } catch (N) {
                w?.();
                let q = N instanceof Error ? N.message : String(N);
                return g(`${Y} [callback] failed to run: ${q}`, {
                    level: "error"
                }), {
                    command: "callback",
                    succeeded: !1,
                    output: q
                }
            }
        }
        if (V.type === "prompt") return {
            command: V.prompt,
            succeeded: !1,
            output: "Prompt stop hooks are not yet supported outside REPL"
        };
        if (V.type === "agent") return {
            command: V.prompt([]),
            succeeded: !1,
            output: "Agent stop hooks are not yet supported outside REPL"
        };
        if (V.type === "function") return e(Error(`Function hook reached executeHooksOutsideREPL for ${I}. Function hooks should only be used in REPL context (Stop hooks).`)), {
            command: "function",
            succeeded: !1,
            output: "Internal error: function hook executed outside REPL context"
        };
        let D = V.timeout ? V.timeout * 1000 : Z,
            {
                signal: H,
                cleanup: C
            } = yk(AbortSignal.timeout(D), G);
        try {
            let E = await sX0(V, I, Y, X, H, K);
            if (C?.(), E.aborted) return g(`${Y} [${V.command}] cancelled`), {
                command: V.command,
                succeeded: !1,
                output: "Hook cancelled"
            };
            g(`${Y} [${V.command}] completed with status ${E.status}`);
            let {
                json: z,
                validationError: w
            } = lJ9(E.stdout);
            if (w) throw qj(`${oA.bold(Y)} [${V.command}] ${oA.yellow("Hook JSON output validation failed")}`), Error(w);
            if (z && !BYA(z)) {
                if (g(`Parsed JSON output from hook: ${JSON.stringify(z)}`), z.systemMessage) N9(z.systemMessage)
            }
            let N = E.status === 0 ? E.stdout || "" : E.stderr || "";
            return {
                command: V.command,
                succeeded: E.status === 0,
                output: N
            }
        } catch (E) {
            C?.();
            let z = E instanceof Error ? E.message : String(E);
            return g(`${Y} [${V.command}] failed to run: ${z}`, {
                level: "error"
            }), {
                command: V.command,
                succeeded: !1,
                output: z
            }
        }
    });
    return await Promise.all(F)
}
async function* v30(A, Q, B, G, Z, I, Y = tq) {
    g(`executePreToolHooks called for tool: ${A}`);
    let J = {
        ...rE(Z),
        hook_event_name: "PreToolUse",
        tool_name: A,
        tool_input: B,
        tool_use_id: Q
    };
    yield* Xa({
        hookInput: J,
        toolUseID: Q,
        matchQuery: A,
        signal: I,
        timeoutMs: Y,
        toolUseContext: G
    })
}
async function* b30(A, Q, B, G, Z, I, Y, J = tq) {
    let W = {
        ...rE(I),
        hook_event_name: "PostToolUse",
        tool_name: A,
        tool_input: B,
        tool_response: G,
        tool_use_id: Q
    };
    yield* Xa({
        hookInput: W,
        toolUseID: Q,
        matchQuery: A,
        signal: Y,
        timeoutMs: J,
        toolUseContext: Z
    })
}
async function* f30(A, Q, B, G, Z, I, Y, J, W = tq) {
    let X = {
        ...rE(Y),
        hook_event_name: "PostToolUseFailure",
        tool_name: A,
        tool_input: B,
        tool_use_id: Q,
        error: G,
        is_interrupt: I
    };
    yield* Xa({
        hookInput: X,
        toolUseID: Q,
        matchQuery: A,
        signal: J,
        timeoutMs: W,
        toolUseContext: Z
    })
}
async function U80(A, Q = tq) {
    let {
        message: B,
        title: G,
        notificationType: Z
    } = A, I = {
        ...rE(void 0),
        hook_event_name: "Notification",
        message: B,
        title: G,
        notification_type: Z
    };
    await oX0({
        hookInput: I,
        timeoutMs: Q,
        matchQuery: Z
    })
}
async function* h30(A, Q, B = tq, G = !1, Z, I, Y) {
    let J = Z ? {
        ...rE(A),
        hook_event_name: "SubagentStop",
        stop_hook_active: G,
        agent_id: Z,
        agent_transcript_path: eXA(Z)
    } : {
        ...rE(A),
        hook_event_name: "Stop",
        stop_hook_active: G
    };
    yield* Xa({
        hookInput: J,
        toolUseID: AFA(),
        signal: Q,
        timeoutMs: B,
        toolUseContext: I,
        messages: Y
    })
}
async function* nX0(A, Q, B) {
    let G = {
        ...rE(Q),
        hook_event_name: "UserPromptSubmit",
        prompt: A
    };
    yield* Xa({
        hookInput: G,
        toolUseID: AFA(),
        signal: B.abortController.signal,
        timeoutMs: tq,
        toolUseContext: B
    })
}
async function* R00(A, Q, B, G = tq) {
    let Z = {
        ...rE(void 0, Q),
        hook_event_name: "SessionStart",
        source: A
    };
    yield* Xa({
        hookInput: Z,
        toolUseID: AFA(),
        matchQuery: A,
        signal: B,
        timeoutMs: G
    })
}
async function* qX0(A, Q, B, G = tq) {
    let Z = {
        ...rE(void 0),
        hook_event_name: "SubagentStart",
        agent_id: A,
        agent_type: Q
    };