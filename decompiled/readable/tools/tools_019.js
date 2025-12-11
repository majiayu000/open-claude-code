/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_019.js
 * 处理时间: 2025-12-09T03:41:38.756Z
 * 变量映射: 11 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 19/25
 * Lines: 411273 - 412771 (1499 lines)
 * Original file: cli.js
 */

function mI1({
    prompt: A,
    theme: Q,
    dim: B = !1
}) {
    return t0.createElement(j, {
        flexDirection: "column"
    }, t0.createElement(TextComponent, {
        color: "success",
        bold: !0
    }, "Prompt:"), t0.createElement(j, {
        paddingLeft: 2
    }, t0.createElement(TextComponent, {
        dimColor: B
    }, Q ? _D(A, Q) : A)))
}

function KY9({
    content: A,
    theme: Q
}) {
    return t0.createElement(j, {
        flexDirection: "column"
    }, t0.createElement(TextComponent, {
        color: "success",
        bold: !0
    }, "Response:"), A.map((B, G) => t0.createElement(j, {
        key: G,
        paddingLeft: 2,
        marginTop: G === 0 ? 0 : 1
    }, t0.createElement(TextComponent, null, Q ? _D(B.text, Q) : B.text))))
}

function DY9(A, Q, {
    tools: B,
    verbose: G,
    theme: Z
}) {
    if (A.status === "async_launched") {
        let {
            prompt: C
        } = A;
        return t0.createElement(j, {
            flexDirection: "column"
        }, t0.createElement(y0, {
            height: 1
        }, t0.createElement(TextComponent, null, "Backgrounded agent", !G && oA.dim(C ? " (down arrow ↓ to manage · ctrl+o to expand)" : " (down arrow ↓ to manage)"))), G && C && t0.createElement(y0, null, t0.createElement(mI1, {
            prompt: C,
            theme: Z
        })))
    }
    if (A.status !== "completed") return null;
    let {
        agentId: I,
        totalDurationMs: Y,
        totalToolUseCount: J,
        totalTokens: W,
        usage: X,
        content: F,
        prompt: V
    } = A, D = `Done (TextComponent{[J===1?"1 tool use":`TextComponent{J} tool uses`,QZ(W)+" tokens",FE(Y)].join(" · ")})`, H = xD({
        content: D,
        usage: X
    });
    return t0.createElement(j, {
        flexDirection: "column"
    }, !1, G && V && t0.createElement(y0, null, t0.createElement(mI1, {
        prompt: V,
        theme: Z
    })), G ? t0.createElement(wt1, null, Q.map((C) => t0.createElement(y0, {
        key: C.uuid
    }, t0.createElement(Mg, {
        message: C.data.message,
        messages: C.data.normalizedMessages,
        addMargin: !1,
        tools: B,
        verbose: G,
        erroredToolUseIDs: new Set,
        inProgressToolUseIDs: new Set,
        resolvedToolUseIDs: new Set,
        progressMessagesForMessage: Q,
        shouldAnimate: !1,
        shouldShowDot: !1,
        isTranscriptMode: !1,
        isStatic: !0
    })))) : null, G && F && F.length > 0 && t0.createElement(y0, null, t0.createElement(KY9, {
        content: F,
        theme: Z
    })), t0.createElement(y0, {
        height: 1
    }, t0.createElement(Mg, {
        message: H,
        messages: lJ([H]),
        addMargin: !1,
        tools: B,
        verbose: G,
        erroredToolUseIDs: new Set,
        inProgressToolUseIDs: new Set,
        resolvedToolUseIDs: new Set,
        progressMessagesForMessage: [],
        shouldAnimate: !1,
        shouldShowDot: !1,
        isTranscriptMode: !1,
        isStatic: !0
    })))
}

function HY9({
    description: A,
    prompt: Q
}) {
    if (!A || !Q) return null;
    return A
}

function dI1(A, {
    tools: Q,
    verbose: B,
    terminalSize: G,
    inProgressToolCallCount: Z
}) {
    if (!A.length) return t0.createElement(y0, {
        height: 1
    }, t0.createElement(TextComponent, {
        dimColor: !0
    }, iP3));
    let I = (Z ?? 1) * pP3 + lP3,
        Y = !B && G && G.rows && G.rows < I,
        J = () => {
            let D = A.filter((E) => {
                    return E.data.message.message.content.some((w) => w.type === "tool_use")
                }).length,
                H = [...A].reverse().find((E) => E.data.message.type === "assistant"),
                C = null;
            if (H?.data.message.type === "assistant") {
                let E = H.data.message.message.usage;
                C = (E.cache_creation_input_tokens ?? 0) + (E.cache_read_input_tokens ?? 0) + E.input_tokens + E.output_tokens
            }
            return {
                toolUseCount: D,
                tokens: C
            }
        };
    if (Y) {
        let {
            toolUseCount: D,
            tokens: H
        } = J();
        return t0.createElement(y0, {
            height: 1
        }, t0.createElement(TextComponent, {
            dimColor: !0
        }, "In progress… · ", t0.createElement(TextComponent, {
            bold: !0
        }, D), " tool", " ", D === 1 ? "use" : "uses", H && ` · TextComponent{QZ(H)} tokens`, " · (ctrl+o to expand)"))
    }
    let W = A.filter((D) => {
            return D.data.message.message.content.some((C) => C.type === "tool_use")
        }).length,
        X = B ? A : A.slice(-NX0),
        F = X.filter((D) => {
            return D.data.message.message.content.some((C) => C.type === "tool_use")
        }).length,
        V = W - F;
    if (!B && A.length > NX0) X = A.slice(-NX0 + 1);
    let K = A[0]?.data.prompt;
    return t0.createElement(y0, null, t0.createElement(j, {
        flexDirection: "column"
    }, t0.createElement(wt1, null, B && K && t0.createElement(j, {
        marginBottom: 1
    }, t0.createElement(mI1, {
        prompt: K
    })), X.map((D) => t0.createElement(j, {
        key: D.uuid,
        height: 1,
        overflow: "hidden"
    }, t0.createElement(Mg, {
        message: D.data.message,
        messages: D.data.normalizedMessages,
        addMargin: !1,
        tools: Q,
        verbose: B,
        erroredToolUseIDs: new Set,
        inProgressToolUseIDs: new Set,
        resolvedToolUseIDs: TX0(A),
        progressMessagesForMessage: A,
        shouldAnimate: !1,
        shouldShowDot: !1,
        style: "condensed",
        isTranscriptMode: !1,
        isStatic: !0
    })))), V > 0 && t0.createElement(TextComponent, {
        dimColor: !0
    }, "+", V, " more tool ", V === 1 ? "use" : "uses", " ", t0.createElement(hl, null))))
}

function CY9(A, {
    progressMessagesForMessage: Q,
    tools: B,
    verbose: G
}) {
    let Z = Q[0]?.data?.agentId;
    return t0.createElement(t0.Fragment, null, !1, dI1(Q, {
        tools: B,
        verbose: G
    }), t0.createElement(k3, null))
}

function EY9(A, {
    progressMessagesForMessage: Q,
    tools: B,
    verbose: G
}) {
    return t0.createElement(t0.Fragment, null, dI1(Q, {
        tools: B,
        verbose: G
    }), t0.createElement(A5, {
        result: A,
        verbose: G
    }))
}

function nP3(A) {
    let Q = A.filter((Z) => {
            let I = Z.data.message;
            return I.type === "user" && I.message.content.some((Y) => Y.type === "tool_result")
        }).length,
        B = [...A].reverse().find((Z) => Z.data.message.type === "assistant"),
        G = null;
    if (B?.data.message.type === "assistant") {
        let Z = B.data.message.message.usage;
        G = (Z.cache_creation_input_tokens ?? 0) + (Z.cache_read_input_tokens ?? 0) + Z.input_tokens + Z.output_tokens
    }
    return {
        toolUseCount: Q,
        tokens: G
    }
}

function zY9(A, Q) {
    let {
        shouldAnimate: B,
        tools: G
    } = Q, Z = A.map(({
        param: V,
        isResolved: K,
        isError: D,
        progressMessages: H
    }) => {
        let C = nP3(H),
            E = aP3(H, G),
            z = RX0.safeParse(V.input),
            w = z.success ? LX0(z.data) : "Task",
            N = z.success ? z.data.description : void 0,
            q = z.success ? MX0(z.data) : void 0,
            R = z.success && "run_in_background" in z.data && z.data.run_in_background === !0;
        return {
            id: V.id,
            agentType: w,
            description: N,
            toolUseCount: C.toolUseCount,
            tokens: C.tokens,
            isResolved: K,
            isError: D,
            isAsync: R,
            color: q,
            lastToolInfo: E
        }
    }), I = A.some((V) => !V.isResolved), Y = A.some((V) => V.isError), J = !I, W = Z.length > 0 && Z.every((V) => V.agentType === Z[0]?.agentType), X = W ? Z[0]?.agentType : null, F = Z.every((V) => V.isAsync);
    return t0.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, t0.createElement(j, {
        flexDirection: "row"
    }, t0.createElement(_Z1, {
        shouldAnimate: B && I,
        isUnresolved: I,
        isError: Y
    }), t0.createElement(TextComponent, null, J ? t0.createElement(t0.Fragment, null, t0.createElement(TextComponent, {
        bold: !0
    }, A.length), " ", X ? `TextComponent{X} agents` : "agents", " ", F ? "launched" : "finished") : t0.createElement(t0.Fragment, null, "Running ", t0.createElement(TextComponent, {
        bold: !0
    }, A.length), " ", X ? `TextComponent{X} agents` : "agents", "…")), t0.createElement(TextComponent, {
        dimColor: !0
    }, " (ctrl+o to expand)")), Z.map((V, K) => t0.createElement(FY9, {
        key: V.id,
        agentType: V.agentType,
        description: V.description,
        toolUseCount: V.toolUseCount,
        tokens: V.tokens,
        color: V.color,
        isLast: K === Z.length - 1,
        isResolved: V.isResolved,
        isError: V.isError,
        isAsync: V.isAsync,
        shouldAnimate: B,
        lastToolInfo: V.lastToolInfo,
        hideType: W
    })))
}

function LX0(A) {
    if (A?.subagent_type && A.subagent_type !== y51.agentType) return A.subagent_type;
    return "Task"
}

function MX0(A) {
    if (!A?.subagent_type) return;
    return oJA(A.subagent_type)
}

function aP3(A, Q) {
    let B = [...A].reverse().find((G) => {
        let Z = G.data.message;
        return Z.type === "user" && Z.message.content.some((I) => I.type === "tool_result")
    });
    if (B?.data.message.type === "user") {
        let G = B.data.message.message.content.find((Z) => Z.type === "tool_result");
        if (G?.type === "tool_result") {
            let Z = G.tool_use_id,
                I = A.find((Y) => {
                    let J = Y.data.message;
                    return J.type === "assistant" && J.message.content.some((W) => W.type === "tool_use" && W.id === Z)
                });
            if (I?.data.message.type === "assistant") {
                let Y = I.data.message.message.content.find((J) => J.type === "tool_use" && J.id === Z);
                if (Y?.type === "tool_use") {
                    let J = Q.find((V) => V.name === Y.name);
                    if (!J) return Y.name;
                    let W = Y.input,
                        X = J.inputSchema.safeParse(W),
                        F = J.userFacingName(X.success ? X.data : void 0);
                    if (J.getToolUseSummary) {
                        let V = J.getToolUseSummary(X.success ? X.data : void 0);
                        if (V) return `TextComponent{F}: TextComponent{V}`
                    }
                    return F
                }
            }
        }
    }
    return null
}
var t0, NX0 = 3,
    pP3 = 9,
    lP3 = 7,
    iP3 = "Initializing…";
var OX0 = lazyLoader(() => {
    J9();
    hA();
    lV();
    lX();
    Hh();
    u8();
    QjA();
    nQ();
    nQ();
    c30();
    Yn();
    $IA();
    OJ0();
    VY9();
    TRA();
    nRA();
    M9();
    t0 = esmImport(VA(), 1)
});
var sP3, gaZ;
var PX0 = lazyLoader(() => {
    h2();
    hA();
    rZ1();
    $Z();
    lV();
    OX0();
    sP3 = esmImport(VA(), 1), gaZ = _.strictObject({
        agentId: _.string().describe("The agent ID to retrieve results for"),
        block: _.boolean().default(!0).describe("Whether to block until results are ready"),
        wait_up_to: _.number().min(0).max(300).default(150).describe("Maximum time to wait in seconds")
    })
});

function Qj3(A) {
    let Q = 0,
        B = lJ(A);
    for (let G of B)
        if (G.type === "assistant") {
            for (let Z of G.message.content)
                if (Z.type === "tool_use") Q++
        } return Q
}

function Bj3(A, Q, B) {
    let {
        prompt: G,
        resolvedAgentModel: Z,
        isBuiltInAgent: I,
        startTime: Y
    } = B, J = mXA(A);
    if (J === void 0) throw Error("No assistant messages found");
    let W = J.message.content.filter((V) => V.type === "text"),
        X = d21(J.message.usage),
        F = Qj3(A);
    return BA("tengu_agent_tool_completed", {
        model: Z,
        prompt_char_count: G.length,
        response_char_count: W.length,
        assistant_message_count: A.length,
        total_tool_uses: F,
        duration_ms: Date.now() - Y,
        total_tokens: X,
        is_built_in_agent: I
    }), {
        agentId: Q,
        content: W,
        totalDurationMs: Date.now() - Y,
        totalTokens: X,
        totalToolUseCount: F,
        usage: J.message.usage
    }
}
var rP3, UY9, EsZ, RX0, oP3, tP3, eP3, Aj3, In;
var TRA = lazyLoader(() => {
    O9A();
    h2();
    nQ();
    LS2();
    Yn();
    s2();
    $Z();
    w0();
    R51();
    oM();
    nQ();
    OX0();
    rZ1();
    Oy();
    EWA();
    PX0();
    qW0();
    wy();
    GG();
    g10();
    D0();
    $n();
    rP3 = esmImport(VA(), 1), UY9 = _.object({
        description: _.string().describe("A short (3-5 word) description of the task"),
        prompt: _.string().describe("The task for the agent to perform"),
        subagent_type: _.string().describe("The type of specialized agent to use for this task"),
        model: _.enum(["sonnet", "opus", "haiku"]).optional().describe("Optional model to use for this agent. If not specified, inherits from parent. Prefer haiku for quick, straightforward tasks to minimize cost and latency."),
        resume: _.string().optional().describe("Optional agent ID to resume from. If provided, the agent will continue from the previous execution transcript.")
    }), EsZ = UY9.extend({
        run_in_background: _.boolean().optional().describe("Set to true to run this agent in the background. Use AgentOutputTool to read the output later.")
    }), RX0 = UY9, oP3 = _.object({
        agentId: _.string(),
        content: _.array(_.object({
            type: _.literal("text"),
            text: _.string()
        })),
        totalToolUseCount: _.number(),
        totalDurationMs: _.number(),
        totalTokens: _.number(),
        usage: _.object({
            input_tokens: _.number(),
            output_tokens: _.number(),
            cache_creation_input_tokens: _.number().nullable(),
            cache_read_input_tokens: _.number().nullable(),
            server_tool_use: _.object({
                web_search_requests: _.number(),
                web_fetch_requests: _.number()
            }).nullable(),
            service_tier: _.enum(["standard", "priority", "batch"]).nullable(),
            cache_creation: _.object({
                ephemeral_1h_input_tokens: _.number(),
                ephemeral_5m_input_tokens: _.number()
            }).nullable()
        })
    }), tP3 = oP3.extend({
        status: _.literal("completed"),
        prompt: _.string()
    }), eP3 = _.object({
        status: _.literal("async_launched"),
        agentId: _.string().describe("The ID of the async agent"),
        description: _.string().describe("The description of the task"),
        prompt: _.string().describe("The prompt for the agent")
    }), Aj3 = _.union([tP3, eP3, Xb2]);
    In = {
        async prompt({
            agents: A
        }) {
            return await NS2(A)
        },
        name: TASK_TOOL_NAME,
        async description() {
            return "Launch a new task"
        },
        inputSchema: RX0,
        outputSchema: Aj3,
        async call({
            prompt: A,
            subagent_type: Q,
            description: B,
            model: G,
            resume: Z,
            run_in_background: I
        }, Y, J, W, X) {
            let F = Date.now(),
                V = Y.options.agentDefinitions.activeAgents,
                K = V.find((P) => P.agentType === Q);
            if (!K) throw Error(`Agent type 'TextComponent{Q}' not found. Available agents: TextComponent{V.map((P)=>P.agentType).join(", ")}`);
            if (K.color) tJA(Q, K.color);
            let D = await Y.getAppState(),
                H = D.toolPermissionContext.mode,
                C = WrA(K.model, Y.options.mainLoopModel, G, H);
            BA("tengu_agent_tool_selected", {
                agent_type: K.agentType,
                model: C,
                source: K.source,
                color: K.color,
                is_built_in_agent: Ly(K)
            });
            let E;
            if (Z) {
                let P = await cI1(Z);
                if (!P) throw Error(`No transcript found for agent ID: TextComponent{Z}`);
                E = P
            }
            let z = K?.forkContext ? Y.messages : void 0,
                w;
            try {
                let P = Array.from(D.toolPermissionContext.additionalWorkingDirectories.keys()),
                    y = K.getSystemPrompt({
                        toolUseContext: Y
                    });
                w = await fjA([y], C, P)
            } catch (P) {
                g(`Failed to get system prompt for agent TextComponent{K.agentType}: TextComponent{P instanceof Error?P.message:String(P)}`)
            }
            let N = K?.forkContext ? Fb2(A, W) : [j0({
                    content: A
                })],
                q = {
                    prompt: A,
                    resolvedAgentModel: C,
                    isBuiltInAgent: Ly(K),
                    startTime: F
                },
                R = {
                    agentDefinition: K,
                    promptMessages: E ? [...E, ...N] : N,
                    toolUseContext: Y,
                    canUseTool: J,
                    forkContextMessages: z,
                    isAsync: I === !0,
                    querySource: S89(K.agentType, Ly(K)),
                    model: G,
                    override: w ? {
                        systemPrompt: w
                    } : void 0
                };
            {
                let P = Z || KWA(),
                    y = [],
                    v = Date.now();
                if (N[0] && N[0].type === "user") {
                    let HA = lJ(N),
                        wA = HA.find((KA) => KA.type === "user");
                    if (wA && wA.type === "user" && X) X({
                        toolUseID: `agent_${W.message.id}`,
                        data: {
                            message: wA,
                            normalizedMessages: HA,
                            type: "agent_progress",
                            prompt: A,
                            resume: Z,
                            agentId: P
                        }
                    })
                }
                let x, p = new Promise((HA) => {
                        x = HA
                    }),
                    u = () => {
                        x()
                    },
                    o = !1,
                    k = setInterval(() => {
                        let HA = Date.now() - v
                    }, 100),
                    d = uI1({
                        ...R,
                        override: {
                            ...R.override,
                            agentId: P
                        }
                    })[Symbol.asyncIterator]();
                try {
                    while (!0) {
                        let HA = d.next(),
                            wA = await Promise.race([HA.then((NA) => ({
                                type: "message",
                                result: NA
                            })), p.then(() => ({
                                type: "background"
                            }))]);
                        wA.type;
                        let {
                            result: KA
                        } = wA;
                        if (KA.done) break;
                        let SA = KA.value;
                        if (y.push(SA), SA.type !== "assistant" && SA.type !== "user") continue;
                        RQA(SA, () => {}, (NA) => Y.setResponseLength((qA) => qA + NA.length), () => {}, () => {});
                        let sA = lJ(y);
                        for (let NA of lJ([SA]))
                            for (let qA of NA.message.content) {
                                if (qA.type !== "tool_use" && qA.type !== "tool_result") continue;
                                if (X) X({
                                    toolUseID: `agent_${W.message.id}`,
                                    data: {
                                        message: NA,
                                        normalizedMessages: sA,
                                        type: "agent_progress",
                                        prompt: A,
                                        resume: Z,
                                        agentId: P
                                    }
                                })
                            }
                    }
                } finally {
                    if (k) clearInterval(k);
                    if (Y.setToolJSX) Y.setToolJSX(null)
                }
                let QA = last(y.filter((HA) => HA.type !== "system" && HA.type !== "progress"));
                if (QA && f51(QA)) throw new YW;
                let IA = Bj3(y, P, q);
                return {
                    data: {
                        status: "completed",
                        prompt: A,
                        ...IA
                    }
                }
            }
        },
        isReadOnly() {
            return !0
        },
        isConcurrencySafe() {
            return !0
        },
        isEnabled() {
            return !0
        },
        userFacingName: LX0,
        userFacingNameBackgroundColor: MX0,
        async checkPermissions(A) {
            return {
                behavior: "allow",
                updatedInput: A
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            if (A.status === "async_launched") return {
                tool_use_id: Q,
                type: "tool_result",
                content: [{
                    type: "text",
                    text: `Async agent launched successfully.
agentId: TextComponent{A.agentId} (This is an internal ID for your use, do not mention it to the user. Use this ID to retrieve results with TextComponent{AGENT_OUTPUT_TOOL_NAME} when the agent finishes). 
The agent is currently working in the background. If you have other tasks you you should continue working on them now. Wait to call TextComponent{AGENT_OUTPUT_TOOL_NAME} until either:
- If you want to check on the agent's progress - call TextComponent{AGENT_OUTPUT_TOOL_NAME} with block=false to get an immediate update on the agent's status
- If you run out of things to do and the agent is still running - call TextComponent{AGENT_OUTPUT_TOOL_NAME} with block=true to idle and wait for the agent's result (do not use block=true unless you completely run out of things to do as it will waste time).`
                }]
            };
            if (A.status === "completed") return {
                tool_use_id: Q,
                type: "tool_result",
                content: A.content
            };
            throw Error(`Unexpected agent tool result status: TextComponent{A.status}`)
        },
        renderToolResultMessage: DY9,
        renderToolUseMessage: HY9,
        renderToolUseProgressMessage: dI1,
        renderToolUseRejectedMessage: CY9,
        renderToolUseErrorMessage: EY9,
        renderGroupedToolUse: zY9
    }
});
/* KILL_SHELL_TOOL_NAME = KILL_SHELL_TOOL = "KillShell" */
var KILL_SHELL_TOOL_NAME = "KillShell",
    $Y9 = `
- Kills a running background bash shell by its ID
- Takes a shell_id parameter identifying the shell to kill
- Returns a success or failure status 
- Use this tool when you need to terminate a long-running shell
- Shell IDs can be found using the /tasks command
`;

function wY9({
    shell_id: A
}) {
    if (!A) return null;
    return `Kill shell: TextComponent{A}`
}

function qY9() {
    return null
}

function NY9() {
    return rXA.default.createElement(k3, null)
}

function LY9(A, {
    verbose: Q
}) {
    return rXA.default.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function MY9(A) {
    return rXA.default.createElement(j, null, rXA.default.createElement(TextComponent, null, "  ⎿  "), rXA.default.createElement(TextComponent, null, "Shell ", A.shell_id, " killed"))
}
var rXA;
var OY9 = lazyLoader(() => {
    hA();
    lV();
    lX();
    rXA = esmImport(VA(), 1)
});
var Gj3, Zj3, lI1;
var jX0 = lazyLoader(() => {
    h2();
    gAA();
    OY9();
    Gj3 = _.strictObject({
        shell_id: _.string().describe("The ID of the background shell to kill")
    }), Zj3 = _.object({
        message: _.string().describe("Status message about the operation"),
        shell_id: _.string().describe("The ID of the shell that was killed")
    }), lI1 = {
        name: KILL_SHELL_TOOL_NAME,
        userFacingName: () => "Kill Shell",
        inputSchema: Gj3,
        outputSchema: Zj3,
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !1
        },
        async checkPermissions(A) {
            return {
                behavior: "allow",
                updatedInput: A
            }
        },
        async validateInput({
            shell_id: A
        }, {
            getAppState: Q
        }) {
            let G = (await Q()).backgroundTasks[A];
            if (!G) return {
                result: !1,
                message: `No shell found with ID: TextComponent{A}`,
                errorCode: 1
            };
            if (G.type !== "shell") return {
                result: !1,
                message: `Shell TextComponent{A} is not a shell`,
                errorCode: 2
            };
            return {
                result: !0
            }
        },
        async description() {
            return "Kill a background bash shell by ID"
        },
        async prompt() {
            return $Y9
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: JSON.stringify(A)
            }
        },
        renderToolUseMessage: wY9,
        renderToolUseProgressMessage: qY9,
        renderToolUseRejectedMessage: NY9,
        renderToolUseErrorMessage: LY9,
        renderToolResultMessage: MY9,
        async call({
            shell_id: A
        }, {
            getAppState: Q,
            setAppState: B
        }) {
            let Z = (await Q()).backgroundTasks[A];
            if (!Z) throw Error(`No shell found with ID: TextComponent{A}`);
            if (Z.type !== "shell") throw Error(`Shell TextComponent{A} is not a shell`);
            if (Z.status !== "running") throw Error(`Shell TextComponent{A} is not running, so cannot be killed (status: TextComponent{Z.status})`);
            let I = GQ1(Z);
            return B((Y) => ({
                ...Y,
                backgroundTasks: {
                    ...Y.backgroundTasks,
                    [A]: I
                }
            })), {
                data: {
                    message: `Successfully killed shell: TextComponent{A} (TextComponent{Z.command})`,
                    shell_id: A
                }
            }
        }
    }
});

function RY9() {
    return `
- Retrieves output from a running or completed background bash shell
- Takes a shell_id parameter identifying the shell
- Always returns only new output since the last check
- Returns stdout and stderr output along with shell status
- Supports optional regex filtering to show only lines matching a pattern
- Use this tool when you need to monitor or check the output of a long-running shell
- Shell IDs can be found using the /tasks command
`
}

function SX0(A) {
    let Q = getMaxOutputLength();
    if (A.length <= Q) return {
        totalLines: A.split(`
`).length,
        truncatedContent: A
    };
    let B = A.slice(0, Q),
        G = A.slice(Q).split(`
`).length,
        Z = `TextComponent{B}

... [TextComponent{G} lines truncated] ...`;
    return {
        totalLines: A.split(`
`).length,
        truncatedContent: Z
    }
}
var TY9 = lazyLoader(() => {
    MGA();
    yp()
});

function PY9(A, Q, B) {
    let G = {
        stdout: A.stdout,
        stderr: A.stderr,
        isImage: !1,
        dangerouslyDisableSandbox: !0,
        returnCodeInterpretation: A.error || void 0
    };
    return PQA.createElement(V1A, {
        content: G,
        verbose: B.verbose
    })
}

function jY9(A) {
    if (A?.filter) return `Reading shell output (filtered: TextComponent{A.filter})`;
    return "Reading shell output"
}

function SY9() {
    return null
}

function _Y9() {
    return PQA.createElement(k3, null)
}

function kY9(A, {
    verbose: Q
}) {
    return PQA.createElement(A5, {
        result: A,
        verbose: Q
    })
}
var PQA;
var yY9 = lazyLoader(() => {
    lV();
    lX();
    U21();
    PQA = esmImport(VA(), 1)
});

function xY9(A, Q) {
    if (!Q || !A.trim()) return A;
    let B = new RegExp(Q, "i");
    return A.split(`
`).filter((I) => B.test(I)).join(`
`)
}
var Ij3, Yj3, iI1;
var _X0 = lazyLoader(() => {
    h2();
    gAA();
    TY9();
    yY9();
    Ij3 = _.object({
        shellId: _.string().describe("The ID of the background shell"),
        command: _.string().describe("The command that was run in the shell"),
        status: _.enum(["running", "completed", "failed", "killed"]).describe("The current status of the shell command"),
        exitCode: _.number().nullable().describe("The exit code of the command, if available"),
        stdout: _.string().describe("The standard output of the command"),
        stderr: _.string().describe("The standard error output of the command"),
        stdoutLines: _.number().describe("Total number of lines in original stdout, even if truncated or filtered"),
        stderrLines: _.number().describe("Total number of lines in original stderr, even if truncated or filtered"),
        error: _.string().optional().describe("Error message if the shell command failed"),
        filterPattern: _.string().optional().describe("The regex pattern used for filtering (only present when filter is applied)"),
        timestamp: _.string().describe("The current timestamp when the output was retrieved")
    }), Yj3 = _.strictObject({
        bash_id: _.string().describe("The ID of the background shell to retrieve output from"),
        filter: _.string().optional().describe("Optional regular expression to filter the output lines. Only lines matching this regex will be included in the result. Any lines that do not match will no longer be available to read.")
    }), iI1 = {
        name: "BashOutput",
        async description() {
            return "Retrieves output from a background bash shell"
        },
        async prompt() {
            return RY9()
        },
        userFacingName() {
            return "BashOutput"
        },
        isEnabled() {
            return !0
        },
        inputSchema: Yj3,
        outputSchema: Ij3,
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        async checkPermissions(A) {
            return {
                behavior: "allow",
                updatedInput: A
            }
        },
        async validateInput({
            bash_id: A,
            filter: Q
        }, {
            getAppState: B
        }) {
            if (Q) try {
                new RegExp(Q, "i")
            } catch (I) {
                return {
                    result: !1,
                    message: `Invalid regex pattern "TextComponent{Q}": TextComponent{I instanceof Error?I.message:String(I)}`,
                    errorCode: 1
                }
            }
            let Z = (await B()).backgroundTasks[A];
            if (!Z) return {
                result: !1,
                message: `No shell found with ID: TextComponent{A}`,
                errorCode: 2
            };
            if (Z.type !== "shell") return {
                result: !1,
                message: `Shell TextComponent{A} is not a shell`,
                errorCode: 3
            };
            return {
                result: !0
            }
        },
        async call({
            bash_id: A,
            filter: Q
        }, {
            getAppState: B
        }) {
            let I = (await B()).backgroundTasks[A];
            if (!I) throw Error(`No shell found with ID: TextComponent{A}`);
            if (I.type !== "shell") throw Error(`Shell TextComponent{A} is not a shell`);
            let Y = BQ1(I),
                J = xY9(Y.stdout, Q),
                W = xY9(Y.stderr, Q),
                {
                    truncatedContent: X
                } = SX0(Vf(J)),
                {
                    truncatedContent: F
                } = SX0(Vf(W)),
                V = Y.stdout.split(`
`).length,
                K = Y.stderr.split(`
`).length;
            return {
                data: {
                    shellId: I.id,
                    command: I.command,
                    status: I.status,
                    exitCode: I.result?.code ?? null,
                    stdout: X,
                    stderr: F,
                    stdoutLines: V,
                    stderrLines: K,
                    timestamp: new Date().toISOString(),
                    ...Q && {
                        filterPattern: Q
                    }
                }
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            let B = [];
            if (B.push(`<status>TextComponent{A.status}</status>`), A.exitCode !== null && A.exitCode !== void 0) B.push(`<exit_code>TextComponent{A.exitCode}</exit_code>`);
            if (A.stdout.trim()) B.push(`<stdout>
TextComponent{A.stdout.trimEnd()}
</stdout>`);
            if (A.stderr.trim()) B.push(`<stderr>
TextComponent{A.stderr.trim()}
</stderr>`);
            return B.push(`<timestamp>TextComponent{A.timestamp}</timestamp>`), {
                tool_use_id: Q,
                type: "tool_result",
                content: B.join(`

`)
            }
        },
        renderToolUseProgressMessage: SY9,
        renderToolResultMessage: PY9,
        renderToolUseMessage: jY9,
        renderToolUseRejectedMessage: _Y9,
        renderToolUseErrorMessage: kY9
    }
});

function Jj3(A) {
    let Q = 0,
        B = 0;
    for (let G of A)
        if (typeof G !== "string") Q++, B += G.content.length;
    return {
        searchCount: Q,
        totalResultCount: B
    }
}

function vY9({
    query: A,
    allowed_domains: Q,
    blocked_domains: B
}, {
    verbose: G
}) {
    if (!A) return null;
    let Z = "";
    if (A) Z += `"TextComponent{A}"`;
    if (G) {
        if (Q && Q.length > 0) Z += `, only allowing domains: TextComponent{Q.join(", ")}`;
        if (B && B.length > 0) Z += `, blocking domains: TextComponent{B.join(", ")}`
    }
    return Z
}

function bY9() {
    return Ix.default.createElement(k3, null)
}

function fY9(A, {
    verbose: Q
}) {
    return Ix.default.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function hY9(A) {
    if (A.length === 0) return null;
    let Q = A[A.length - 1];
    if (!Q?.data) return null;
    let B = Q.data;
    switch (B.type) {
        case "query_update":
            return Ix.default.createElement(y0, null, Ix.default.createElement(TextComponent, {
                dimColor: !0
            }, "Searching: ", B.query));
        case "search_results_received":
            return Ix.default.createElement(y0, null, Ix.default.createElement(TextComponent, {
                dimColor: !0
            }, "Found ", B.resultCount, ' results for "', B.query, '"'));
        default:
            return null
    }
}

function gY9(A) {
    let {
        searchCount: Q
    } = Jj3(A.results), B = A.durationSeconds >= 1 ? `TextComponent{Math.round(A.durationSeconds)}s` : `TextComponent{Math.round(A.durationSeconds*1000)}ms`;
    return Ix.default.createElement(j, {
        justifyContent: "space-between",
        width: "100%"
    }, Ix.default.createElement(y0, {
        height: 1
    }, Ix.default.createElement(TextComponent, null, "Did ", Q, " search", Q !== 1 ? "es" : "", " in ", B)))
}

function uY9(A) {
    if (!A?.query) return null;
    return B7(A.query, wk)
}
var Ix;
var mY9 = lazyLoader(() => {
    hA();
    u8();
    lV();
    lX();
    Ix = esmImport(VA(), 1)
});

function Dj3(A, Q, B) {
    let G = [],
        Z = "",
        I = !0;
    for (let Y of A) {
        if (Y.type === "server_tool_use") {
            if (I) {
                if (I = !1, Z.trim().length > 0) G.push(Z.trim());
                Z = ""
            }
            continue
        }
        if (Y.type === "web_search_tool_result") {
            if (!Array.isArray(Y.content)) {
                let W = `Web search error: TextComponent{Y.content.error_code}`;
                e(Error(W)), G.push(W);
                continue
            }
            let J = Y.content.map((W) => ({
                title: W.title,
                url: W.url
            }));
            G.push({
                tool_use_id: Y.tool_use_id,
                content: J
            })
        }
        if (Y.type === "text")
            if (I) Z += Y.text;
            else I = !0, Z = Y.text
    }
    if (Z.length) G.push(Z.trim());
    return {
        query: Q,
        results: G,
        durationSeconds: B
    }
}
var Wj3, Xj3, Fj3, Vj3, Kj3 = (A) => {
        return {
            type: "web_search_20250305",
            name: "web_search",
            allowed_domains: A.allowed_domains,
            blocked_domains: A.blocked_domains,
            max_uses: 8
        }
    },
    hjA;
var kX0 = lazyLoader(() => {
    h2();
    noOpFunction2();
    kZ();
    nQ();
    s2();
    dK();
    u1();
    mY9();
    Wj3 = _.strictObject({
        query: _.string().min(2).describe("The search query to use"),
        allowed_domains: _.array(_.string()).optional().describe("Only include search results from these domains"),
        blocked_domains: _.array(_.string()).optional().describe("Never include search results from these domains")
    }), Xj3 = _.object({
        title: _.string().describe("The title of the search result"),
        url: _.string().describe("The URL of the search result")
    }), Fj3 = _.object({
        tool_use_id: _.string().describe("ID of the tool use"),
        content: _.array(Xj3).describe("Array of search hits")
    }), Vj3 = _.object({
        query: _.string().describe("The search query that was executed"),
        results: _.array(_.union([Fj3, _.string()])).describe("Search results and/or text commentary from the model"),
        durationSeconds: _.number().describe("Time taken to complete the search operation")
    });
    hjA = {
        name: WEB_SEARCH_TOOL_NAME,
        async description(A) {
            return `Claude wants to search the web for: TextComponent{A.query}`
        },
        userFacingName() {
            return "Web Search"
        },
        getToolUseSummary: uY9,
        isEnabled() {
            let A = getProvider(),
                Q = getDefaultSonnetModel();
            if (A === "firstParty") return !0;
            if (A === "vertex") return Q.includes("claude-opus-4") || Q.includes("claude-sonnet-4") || Q.includes("claude-haiku-4");
            if (A === "foundry") return !0;
            return !1
        },
        inputSchema: Wj3,
        outputSchema: Vj3,
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        async checkPermissions(A) {
            return {
                behavior: "passthrough",
                message: "WebSearchTool requires permission."
            }
        },
        async prompt() {
            return getWebSearchDescription()
        },
        renderToolUseMessage: vY9,
        renderToolUseRejectedMessage: bY9,
        renderToolUseErrorMessage: fY9,
        renderToolUseProgressMessage: hY9,
        renderToolResultMessage: gY9,
        async validateInput(A) {
            let {
                query: Q,
                allowed_domains: B,
                blocked_domains: G
            } = A;
            if (!Q.length) return {
                result: !1,
                message: "Error: Missing query",
                errorCode: 1
            };
            if (B && G) return {
                result: !1,
                message: "Error: Cannot specify both allowed_domains and blocked_domains in the same request",
                errorCode: 2
            };
            return {
                result: !0
            }
        },
        async call(A, Q, B, G, Z) {
            let I = performance.now(),
                {
                    query: Y
                } = A,
                J = j0({
                    content: "Perform a web search for the query: " + Y
                }),
                W = Kj3(A),
                X = VYA({
                    messages: [J],
                    systemPrompt: ["You are an assistant for performing a web search tool use"],
                    maxThinkingTokens: Q.options.maxThinkingTokens,
                    tools: [],
                    signal: Q.abortController.signal,
                    options: {
                        getToolPermissionContext: async () => {
                            return (await Q.getAppState()).toolPermissionContext
                        },
                        model: getDefaultSonnetModel(),
                        toolChoice: void 0,
                        isNonInteractiveSession: Q.options.isNonInteractiveSession,
                        hasAppendSystemPrompt: Q.options.hasAppendSystemPrompt,
                        extraToolSchemas: [W],
                        querySource: "web_search_tool",
                        agents: Q.options.agentDefinitions.activeAgents,
                        mcpTools: [],
                        agentIdOrSessionId: Q.agentId
                    }
                }),
                F = [],
                V = null,
                K = "",
                D = 0,
                H = new Map;
            for await (let q of X) {
                if (F.push(q), q.type === "stream_event" && q.event?.type === "content_block_start") {
                    let R = q.event.content_block;
                    if (R && R.type === "server_tool_use") {
                        V = R.id, K = "";
                        continue
                    }
                }
                if (V && q.type === "stream_event" && q.event?.type === "content_block_delta") {
                    let R = q.event.delta;
                    if (R?.type === "input_json_delta" && R.partial_json) {
                        K += R.partial_json;
                        try {
                            let P = K.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
                            if (P && P[1]) {
                                let y = JSON.parse('"' + P[1] + '"');
                                if (!H.has(V) || H.get(V) !== y) {
                                    if (H.set(V, y), D++, Z) Z({
                                        toolUseID: `search-progress-TextComponent{D}`,
                                        data: {
                                            type: "query_update",
                                            query: y
                                        }
                                    })
                                }
                            }
                        } catch {}
                    }
                }
                if (q.type === "stream_event" && q.event?.type === "content_block_start") {
                    let R = q.event.content_block;
                    if (R && R.type === "web_search_tool_result") {
                        let P = R.tool_use_id,
                            y = H.get(P) || Y,
                            v = R.content;
                        if (D++, Z) Z({
                            toolUseID: P || `search-progress-TextComponent{D}`,
                            data: {
                                type: "search_results_received",
                                resultCount: Array.isArray(v) ? v.length : 0,
                                query: y
                            }
                        })
                    }
                }
            }
            let E = F.filter((q) => q.type === "assistant").flatMap((q) => q.message.content),
                w = (performance.now() - I) / 1000;
            return {
                data: Dj3(E, Y, w)
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            let {
                query: B,
                results: G
            } = A, Z = `Web search results for query: "TextComponent{B}"

`;
            return G.forEach((I) => {
                if (typeof I === "string") Z += I + `

`;
                else if (I.content.length > 0) Z += `Links: TextComponent{JSON.stringify(I.content)}

`;
                else Z += `No links found.

`
            }), Z += `
REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.`, {
                tool_use_id: Q,
                type: "tool_result",
                content: Z.trim()
            }
        }
    }
});
var IrZ;
var dY9 = lazyLoader(() => {
    h2();
    IrZ = _.strictObject({})
});
var Hj3, Cj3, Ej3, zj3, Uj3, cY9;
var pY9 = lazyLoader(() => {
    h2();
    Hj3 = _.strictObject({
        operation: _.literal("goToDefinition"),
        filePath: _.string().describe("The absolute or relative path to the file"),
        line: _.number().int().nonnegative().describe("The line number (0-indexed) in the file"),
        character: _.number().int().nonnegative().describe("The character offset (0-indexed) on the line")
    }), Cj3 = _.strictObject({
        operation: _.literal("findReferences"),
        filePath: _.string().describe("The absolute or relative path to the file"),
        line: _.number().int().nonnegative().describe("The line number (0-indexed) in the file"),
        character: _.number().int().nonnegative().describe("The character offset (0-indexed) on the line")
    }), Ej3 = _.strictObject({
        operation: _.literal("hover"),
        filePath: _.string().describe("The absolute or relative path to the file"),
        line: _.number().int().nonnegative().describe("The line number (0-indexed) in the file"),
        character: _.number().int().nonnegative().describe("The character offset (0-indexed) on the line")
    }), zj3 = _.strictObject({
        operation: _.literal("documentSymbol"),
        filePath: _.string().describe("The absolute or relative path to the file"),
        line: _.number().int().nonnegative().describe("The line number (0-indexed) in the file"),
        character: _.number().int().nonnegative().describe("The character offset (0-indexed) on the line")
    }), Uj3 = _.strictObject({
        operation: _.literal("workspaceSymbol"),
        filePath: _.string().describe("The absolute or relative path to the file"),
        line: _.number().int().nonnegative().describe("The line number (0-indexed) in the file"),
        character: _.number().int().nonnegative().describe("The character offset (0-indexed) on the line")
    }), cY9 = _.discriminatedUnion("operation", [Hj3, Cj3, Ej3, zj3, Uj3])
});
import {
    relative as $j3
} from "path";

function nY9(A, Q) {
    if (!A) return g("formatUri called with undefined URI - indicates malformed LSP server response", {
        level: "warn"
    }), "<unknown location>";
    let B = A.replace(/^file:\/\//, "");
    try {
        B = decodeURIComponent(B)
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G);
        g(`Failed to decode LSP URI 'TextComponent{A}': TextComponent{Z}. Using un-decoded path: TextComponent{B}`, {
            level: "warn"
        })
    }
    if (Q) {
        let G = $j3(Q, B);
        if (G.length < B.length && !G.startsWith("../../")) return G
    }
    return B
}

function aY9(A, Q) {
    let B = new Map;
    for (let G of A) {
        let Z = "uri" in G ? G.uri : G.location.uri,
            I = nY9(Z, Q),
            Y = B.get(I);
        if (Y) Y.push(G);
        else B.set(I, [G])
    }
    return B
}

function nI1(A, Q) {
    let B = nY9(A.uri, Q),
        G = A.range.start.line + 1,
        Z = A.range.start.character + 1;
    return `TextComponent{B}:TextComponent{G}:TextComponent{Z}`
}

function lY9(A) {
    return {
        uri: A.targetUri,
        range: A.targetSelectionRange || A.targetRange
    }
}

function iY9(A) {
    return "targetUri" in A
}

function sY9(A, Q) {
    if (!A) return "No definition found";
    if (Array.isArray(A)) {
        let G = A.map((J) => iY9(J) ? lY9(J) : J),
            Z = G.filter((J) => !J || !J.uri);
        if (Z.length > 0) g(`formatGoToDefinitionResult: Filtering out TextComponent{Z.length} invalid location(s) - this should have been caught earlier`, {
            level: "warn"
        });
        let I = G.filter((J) => J && J.uri);
        if (I.length === 0) return "No definition found";
        if (I.length === 1) return `Defined in TextComponent{nI1(I[0],Q)}`;
        let Y = I.map((J) => `  TextComponent{nI1(J,Q)}`).join(`
`);
        return `Found TextComponent{I.length} definitions:
TextComponent{Y}`
    }
    let B = iY9(A) ? lY9(A) : A;
    return `Defined in TextComponent{nI1(B,Q)}`
}

function rY9(A, Q) {
    if (!A || A.length === 0) return "No references found";
    let B = A.filter((Y) => !Y || !Y.uri);