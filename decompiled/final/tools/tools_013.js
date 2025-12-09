/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_013.js
 * 处理时间: 2025-12-09T03:41:38.696Z
 * 变量映射: 11 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * D9       (  7x) BASH_TOOL = "Bash"
 * R5       (  5x) EDIT_TOOL = "Edit"
 * bX       (  5x) WRITE_TOOL = "Write"
 * g5       (  4x) READ_TOOL = "Read"
 * s8       (  4x) TASK_TOOL = "Task"
 * CD       (  2x) GLOB_TOOL = "Glob"
 * uY       (  2x) GREP_TOOL = "Grep"
 * M_       (  2x) NOTEBOOK_EDIT_TOOL = "NotebookEdit"
 * a61      (  2x) EXIT_PLAN_MODE = "ExitPlanMode"
 * XT       (  2x) noOpFunction() - Empty function
 * V0       (  2x) parseBoolean(value) - Parse bool env
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 13/25
 * Lines: 348416 - 349915 (1500 lines)
 * Original file: cli.js
 */

            return
        }
        for await (let W of Xp5(I, A.id, J, G, B, Q, Y)) yield W
    } catch (W) {
        e(W instanceof Error ? W : Error(String(W)));
        let X = W instanceof Error ? W.message : String(W),
            V = `Error calling tool${I?` (${I.name})`:""}: ${X}`;
        yield {
            message: j0({
                content: [{
                    type: "tool_result",
                    content: `<tool_use_error>${V}</tool_use_error>`,
                    is_error: !0,
                    tool_use_id: A.id
                }],
                toolUseResult: V
            })
        }
    }
}

function Xp5(A, Q, B, G, Z, I, Y) {
    let J = new oRA;
    return Fp5(A, Q, B, G, Z, I, Y, (W) => {
        BA("tengu_tool_use_progress", {
            messageID: Y,
            toolName: A.name,
            isMcp: A.isMcp ?? !1,
            queryChainId: G.queryTracking?.chainId,
            queryDepth: G.queryTracking?.depth
        }), J.enqueue({
            message: Jb2({
                toolUseID: W.toolUseID,
                parentToolUseID: Q,
                data: W.data
            })
        })
    }).then((W) => {
        for (let X of W) J.enqueue(X)
    }).catch((W) => {
        J.error(W)
    }).finally(() => {
        J.done()
    }), J
}
async function Fp5(A, Q, B, G, Z, I, Y, J) {
    let W = A.inputSchema.safeParse(B);
    if (!W.success) {
        let q = Hp5(A.name, W.error);
        return BA("tengu_tool_use_error", {
            error: "InputValidationError",
            errorDetails: q.slice(0, 2000),
            messageID: Y,
            toolName: A.name,
            isMcp: A.isMcp ?? !1,
            queryChainId: G.queryTracking?.chainId,
            queryDepth: G.queryTracking?.depth
        }), [{
            message: j0({
                content: [{
                    type: "tool_result",
                    content: `<tool_use_error>InputValidationError: ${q}</tool_use_error>`,
                    is_error: !0,
                    tool_use_id: Q
                }],
                toolUseResult: `InputValidationError: ${W.error.message}`
            })
        }]
    }
    let X = await A.validateInput?.(W.data, G);
    if (X?.result === !1) return BA("tengu_tool_use_error", {
        messageID: Y,
        toolName: A.name,
        error: X.message,
        errorCode: X.errorCode,
        isMcp: A.isMcp ?? !1,
        queryChainId: G.queryTracking?.chainId,
        queryDepth: G.queryTracking?.depth
    }), [{
        message: j0({
            content: [{
                type: "tool_result",
                content: `<tool_use_error>${X.message}</tool_use_error>`,
                is_error: !0,
                tool_use_id: Q
            }],
            toolUseResult: `Error: ${X.message}`
        })
    }];
    let F = [],
        V = W.data,
        K = !1,
        D, H;
    for await (let q of Dp5(G, A, V, Q, I.message.id)) switch (q.type) {
        case "message":
            if (q.message.message.type === "progress") J(q.message.message);
            else F.push(q.message);
            break;
        case "hookPermissionResult":
            H = q.hookPermissionResult;
            break;
        case "preventContinuation":
            K = q.shouldPreventContinuation;
            break;
        case "stopReason":
            D = q.stopReason;
            break;
        case "stop":
            return F.push({
                message: j0({
                    content: [g30(Q)],
                    toolUseResult: `Error: ${D}`
                })
            }), F
    }
    let C = {};
    if (V && typeof V === "object") {
        if (A.name === g5 && "file_path" in V) C.file_path = String(V.file_path);
        else if ((A.name === R5 || A.name === bX) && "file_path" in V) C.file_path = String(V.file_path);
        else if (A.name === D9 && "command" in V) {
            let q = V;
            C.full_command = q.command
        }
    }
    sL2(A.name, C), rL2();
    let E;
    if (H !== void 0 && H.behavior === "allow") g(`Hook approved tool use for ${A.name}, bypassing permission check`), E = H;
    else if (H !== void 0 && H.behavior === "deny") g(`Hook denied tool use for ${A.name}`), E = H;
    else {
        let q = H?.behavior === "ask" ? H : void 0;
        E = await Z(A, V, G, I, Q, q)
    }
    if (E.decisionReason?.type === "hook" && E.decisionReason.hookName === "PermissionRequest" && E.behavior !== "ask") F.push({
        message: p9({
            type: "hook_permission_decision",
            decision: E.behavior,
            toolUseID: Q,
            hookEvent: "PermissionRequest"
        })
    });
    if (E.behavior !== "allow") {
        let q = G.toolDecisions?.get(Q);
        T40("reject", q?.source || "unknown"), y81(), BA("tengu_tool_use_can_use_tool_rejected", {
            messageID: Y,
            toolName: A.name,
            queryChainId: G.queryTracking?.chainId,
            queryDepth: G.queryTracking?.depth
        });
        let R = E.message;
        if (K && !R) R = `Execution stopped by PreToolUse hook${D?`: ${D}`:""}`;
        return F.push({
            message: j0({
                content: [{
                    type: "tool_result",
                    content: R,
                    is_error: !0,
                    tool_use_id: Q
                }],
                toolUseResult: `Error: ${R}`
            })
        }), F
    }
    BA("tengu_tool_use_can_use_tool_allowed", {
        messageID: Y,
        toolName: A.name,
        queryChainId: G.queryTracking?.chainId,
        queryDepth: G.queryTracking?.depth
    }), V = E.updatedInput;
    let z = {};
    if (A.name === D9 && "command" in V) {
        let q = V;
        z = {
            bash_command: q.command.trim().split(/\s+/)[0] || "",
            full_command: q.command,
            ...q.timeout !== void 0 && {
                timeout: q.timeout
            },
            ...q.description !== void 0 && {
                description: q.description
            },
            ..."dangerouslyDisableSandbox" in q && {
                dangerouslyDisableSandbox: q.dangerouslyDisableSandbox
            }
        }
    }
    let w = G.toolDecisions?.get(Q);
    T40(w?.decision || "unknown", w?.source || "unknown"), oL2();
    let N = Date.now();
    try {
        let q = await A.call(V, {
                ...G,
                userModified: E.userModified ?? !1
            }, Z, I, (u) => {
                BA("tengu_tool_use_progress", {
                    messageID: I.message.id,
                    toolName: A.name,
                    isMcp: A.isMcp ?? !1
                }), J({
                    toolUseID: u.toolUseID,
                    data: u.data
                })
            }),
            R = Date.now() - N;
        if (pW1(R), q.data && typeof q.data === "object") {
            let u = {};
            if (A.name === g5 && "content" in q.data) {
                if ("file_path" in V) u.file_path = String(V.file_path);
                u.content = String(q.data.content)
            }
            if ((A.name === R5 || A.name === bX) && "file_path" in V) {
                if (u.file_path = String(V.file_path), A.name === R5 && "diff" in q.data) u.diff = String(q.data.diff);
                if (A.name === bX && "content" in V) u.content = String(V.content)
            }
            if (A.name === D9 && "command" in V) {
                let o = V;
                if (u.bash_command = o.command, "output" in q.data) u.output = String(q.data.output)
            }
            if (Object.keys(u).length > 0) tL2("tool.output", u)
        }
        if (typeof q === "object" && "structured_output" in q) F.push({
            message: p9({
                type: "structured_output",
                data: q.structured_output
            })
        });
        P40({
            success: !0
        }), y81();
        let P = 0;
        try {
            P = JSON.stringify(q.data).length
        } catch (u) {
            e(u instanceof Error ? u : Error(String(u)))
        }
        BA("tengu_tool_use_success", {
            messageID: Y,
            toolName: A.name,
            isMcp: A.isMcp ?? !1,
            durationMs: R,
            queryChainId: G.queryTracking?.chainId,
            queryDepth: G.queryTracking?.depth
        }), WO("tool_result", {
            tool_name: A.name,
            success: "true",
            duration_ms: String(R),
            ...Object.keys(z).length > 0 && {
                tool_parameters: JSON.stringify(z)
            },
            tool_result_size_bytes: String(P),
            ...w && {
                decision_source: w.source,
                decision_type: w.decision
            }
        });
        let y = q.data,
            v = [],
            x = q.contextModifier;
        async function p(u) {
            F.push({
                message: j0({
                    content: [await fv2(A, u, Q)],
                    toolUseResult: u
                }),
                contextModifier: x ? {
                    toolUseID: Q,
                    modifyContext: x
                } : void 0
            })
        }
        if (!vb(A)) await p(y);
        for await (let u of Vp5(G, A, Q, I.message.id, E, y)) if ("updatedMCPToolOutput" in u) {
            if (vb(A)) y = u.updatedMCPToolOutput
        } else if (vb(A)) v.push(u);
        else F.push(u);
        if (vb(A)) await p(y);
        if (q.newMessages && q.newMessages.length > 0)
            for (let u of q.newMessages) F.push({
                message: u
            });
        if (K) F.push({
            message: p9({
                type: "hook_stopped_continuation",
                message: D || "Execution stopped by hook",
                hookName: `PreToolUse:${A.name}`,
                toolUseID: Q,
                hookEvent: "PreToolUse"
            })
        });
        for (let u of v) F.push(u);
        return F
    } catch (q) {
        let R = Date.now() - N;
        if (pW1(R), P40({
                success: !1,
                error: q instanceof Error ? q.message : String(q)
            }), y81(), !(q instanceof YW)) {
            if (!(q instanceof oj)) e(q instanceof Error ? q : Error(String(q)));
            BA("tengu_tool_use_error", {
                messageID: Y,
                toolName: A.name,
                error: q instanceof Error ? q.constructor.name : "UnknownError",
                isMcp: A.isMcp ?? !1,
                queryChainId: G.queryTracking?.chainId,
                queryDepth: G.queryTracking?.depth
            }), WO("tool_result", {
                tool_name: A.name,
                use_id: Q,
                success: "false",
                duration_ms: String(R),
                error: q instanceof Error ? q.message : String(q),
                ...Object.keys(z).length > 0 && {
                    tool_parameters: JSON.stringify(z)
                },
                ...w && {
                    decision_source: w.source,
                    decision_type: w.decision
                }
            })
        }
        let P = _51(q),
            y = q instanceof YW,
            v = [];
        for await (let x of Kp5(G, A, Q, Y, V, P, y)) v.push(x);
        return [{
            message: j0({
                content: [{
                    type: "tool_result",
                    content: P,
                    is_error: !0,
                    tool_use_id: Q
                }],
                toolUseResult: `Error: ${P}`
            })
        }, ...v]
    } finally {
        if (w) G.toolDecisions?.delete(Q)
    }
}
async function* Vp5(A, Q, B, G, Z, I) {
    let Y = Date.now();
    try {
        let W = (await A.getAppState()).toolPermissionContext.mode,
            X = I;
        for await (let F of b30(Q.name, B, Z.updatedInput, X, A, W, A.abortController.signal)) try {
            if (F.message?.type === "attachment" && F.message.attachment.type === "hook_cancelled") {
                BA("tengu_post_tool_hooks_cancelled", {
                    toolName: Q.name,
                    queryChainId: A.queryTracking?.chainId,
                    queryDepth: A.queryTracking?.depth
                }), yield {
                    message: p9({
                        type: "hook_cancelled",
                        hookName: `PostToolUse:${Q.name}`,
                        toolUseID: B,
                        hookEvent: "PostToolUse"
                    })
                };
                continue
            }
            if (F.message) yield {
                message: F.message
            };
            if (F.blockingError) yield {
                message: p9({
                    type: "hook_blocking_error",
                    hookName: `PostToolUse:${Q.name}`,
                    toolUseID: B,
                    hookEvent: "PostToolUse",
                    blockingError: F.blockingError
                })
            };
            if (F.preventContinuation) {
                yield {
                    message: p9({
                        type: "hook_stopped_continuation",
                        message: F.stopReason || "Execution stopped by PostToolUse hook",
                        hookName: `PostToolUse:${Q.name}`,
                        toolUseID: B,
                        hookEvent: "PostToolUse"
                    })
                };
                return
            }
            if (F.additionalContexts && F.additionalContexts.length > 0) yield {
                message: p9({
                    type: "hook_additional_context",
                    content: F.additionalContexts,
                    hookName: `PostToolUse:${Q.name}`,
                    toolUseID: B,
                    hookEvent: "PostToolUse"
                })
            };
            if (F.updatedMCPToolOutput && vb(Q)) X = F.updatedMCPToolOutput, yield {
                updatedMCPToolOutput: X
            }
        } catch (V) {
            let K = Date.now() - Y;
            BA("tengu_post_tool_hook_error", {
                messageID: G,
                toolName: Q.name,
                isMcp: Q.isMcp ?? !1,
                duration: K,
                queryChainId: A.queryTracking?.chainId,
                queryDepth: A.queryTracking?.depth
            }), yield {
                message: p9({
                    type: "hook_error_during_execution",
                    content: _51(V),
                    hookName: `PostToolUse:${Q.name}`,
                    toolUseID: B,
                    hookEvent: "PostToolUse"
                })
            }
        }
    } catch (J) {
        e(J instanceof Error ? J : Error(String(J)))
    }
}
async function* Kp5(A, Q, B, G, Z, I, Y) {
    let J = Date.now();
    try {
        let X = (await A.getAppState()).toolPermissionContext.mode;
        for await (let F of f30(Q.name, B, Z, I, A, Y, X, A.abortController.signal)) try {
            if (F.message?.type === "attachment" && F.message.attachment.type === "hook_cancelled") {
                BA("tengu_post_tool_failure_hooks_cancelled", {
                    toolName: Q.name,
                    queryChainId: A.queryTracking?.chainId,
                    queryDepth: A.queryTracking?.depth
                }), yield {
                    message: p9({
                        type: "hook_cancelled",
                        hookName: `PostToolUseFailure:${Q.name}`,
                        toolUseID: B,
                        hookEvent: "PostToolUseFailure"
                    })
                };
                continue
            }
            if (F.message) yield {
                message: F.message
            };
            if (F.blockingError) yield {
                message: p9({
                    type: "hook_blocking_error",
                    hookName: `PostToolUseFailure:${Q.name}`,
                    toolUseID: B,
                    hookEvent: "PostToolUseFailure",
                    blockingError: F.blockingError
                })
            };
            if (F.additionalContexts && F.additionalContexts.length > 0) yield {
                message: p9({
                    type: "hook_additional_context",
                    content: F.additionalContexts,
                    hookName: `PostToolUseFailure:${Q.name}`,
                    toolUseID: B,
                    hookEvent: "PostToolUseFailure"
                })
            }
        } catch (V) {
            let K = Date.now() - J;
            BA("tengu_post_tool_failure_hook_error", {
                messageID: G,
                toolName: Q.name,
                isMcp: Q.isMcp ?? !1,
                duration: K,
                queryChainId: A.queryTracking?.chainId,
                queryDepth: A.queryTracking?.depth
            }), yield {
                message: p9({
                    type: "hook_error_during_execution",
                    content: _51(V),
                    hookName: `PostToolUseFailure:${Q.name}`,
                    toolUseID: B,
                    hookEvent: "PostToolUseFailure"
                })
            }
        }
    } catch (W) {
        e(W instanceof Error ? W : Error(String(W)))
    }
}
async function* Dp5(A, Q, B, G, Z) {
    let I = Date.now();
    try {
        let Y = await A.getAppState();
        for await (let J of v30(Q.name, G, B, A, Y.toolPermissionContext.mode, A.abortController.signal)) try {
            if (J.message) yield {
                type: "message",
                message: {
                    message: J.message
                }
            };
            if (J.blockingError) {
                let W = y30(`PreToolUse:${Q.name}`, J.blockingError);
                yield {
                    type: "hookPermissionResult",
                    hookPermissionResult: {
                        behavior: "deny",
                        message: W,
                        decisionReason: {
                            type: "hook",
                            hookName: `PreToolUse:${Q.name}`,
                            reason: W
                        }
                    }
                }
            }
            if (J.preventContinuation) {
                if (yield {
                        type: "preventContinuation",
                        shouldPreventContinuation: !0
                    }, J.stopReason) yield {
                    type: "stopReason",
                    stopReason: J.stopReason
                }
            }
            if (J.permissionBehavior !== void 0) {
                g(`Hook result has permissionBehavior=${J.permissionBehavior}`);
                let W = {
                    type: "hook",
                    hookName: `PreToolUse:${Q.name}`,
                    reason: J.hookPermissionDecisionReason
                };
                if (J.permissionBehavior === "allow") yield {
                    type: "hookPermissionResult",
                    hookPermissionResult: {
                        behavior: "allow",
                        updatedInput: J.updatedInput || B,
                        decisionReason: W
                    }
                };
                else yield {
                    type: "hookPermissionResult",
                    hookPermissionResult: {
                        behavior: J.permissionBehavior,
                        message: J.hookPermissionDecisionReason || `Hook PreToolUse:${Q.name} ${MS2(J.permissionBehavior)} this tool`,
                        decisionReason: W
                    }
                }
            }
            if (A.abortController.signal.aborted) {
                BA("tengu_pre_tool_hooks_cancelled", {
                    toolName: Q.name,
                    queryChainId: A.queryTracking?.chainId,
                    queryDepth: A.queryTracking?.depth
                }), yield {
                    type: "message",
                    message: {
                        message: p9({
                            type: "hook_cancelled",
                            hookName: `PreToolUse:${Q.name}`,
                            toolUseID: G,
                            hookEvent: "PreToolUse"
                        })
                    }
                }, yield {
                    type: "stop"
                };
                return
            }
        } catch (W) {
            e(W instanceof Error ? W : Error(String(W)));
            let X = Date.now() - I;
            BA("tengu_pre_tool_hook_error", {
                messageID: Z,
                toolName: Q.name,
                isMcp: Q.isMcp ?? !1,
                duration: X,
                queryChainId: A.queryTracking?.chainId,
                queryDepth: A.queryTracking?.depth
            }), yield {
                type: "message",
                message: {
                    message: p9({
                        type: "hook_error_during_execution",
                        content: _51(W),
                        hookName: `PreToolUse:${Q.name}`,
                        toolUseID: G,
                        hookEvent: "PreToolUse"
                    })
                }
            }, yield {
                type: "stop"
            }
        }
    } catch (Y) {
        e(Y instanceof Error ? Y : Error(String(Y))), yield {
            type: "stop"
        };
        return
    }
}

function _51(A) {
    if (A instanceof YW) return A.message || DO;
    if (!(A instanceof Error)) return String(A);
    let B = k30(A).filter(Boolean).join(`
`).trim() || "Command failed with no output";
    if (B.length <= 1e4) return B;
    let G = 5000,
        Z = B.slice(0, G),
        I = B.slice(-G);
    return `${Z}

... [${B.length-1e4} characters truncated] ...

${I}`
}

function k30(A) {
    if (A instanceof oj) return [`Exit code ${A.code}`, A.interrupted ? DO : "", A.stderr, A.stdout];
    let Q = [A.message];
    if ("stderr" in A && typeof A.stderr === "string") Q.push(A.stderr);
    if ("stdout" in A && typeof A.stdout === "string") Q.push(A.stdout);
    return Q
}

function Ib2(A) {
    if (A.length === 0) return "";
    return A.reduce((Q, B, G) => {
        if (typeof B === "number") return `${Q}[${B}]`;
        return G === 0 ? B : `${Q}.${B}`
    }, "")
}

function Hp5(A, Q) {
    let B = Q.errors.filter((J) => J.code === "invalid_type" && J.received === "undefined" && J.message === "Required").map((J) => Ib2(J.path)),
        G = Q.errors.filter((J) => J.code === "unrecognized_keys").flatMap((J) => J.keys),
        Z = Q.errors.filter((J) => J.code === "invalid_type" && ("received" in J) && J.received !== "undefined" && J.message !== "Required").map((J) => {
            let W = J;
            return {
                param: Ib2(J.path),
                expected: W.expected,
                received: W.received
            }
        }),
        I = Q.message,
        Y = [];
    if (B.length > 0) {
        let J = B.map((W) => `The required parameter \`${W}\` is missing`);
        Y.push(...J)
    }
    if (G.length > 0) {
        let J = G.map((W) => `An unexpected parameter \`${W}\` was provided`);
        Y.push(...J)
    }
    if (Z.length > 0) {
        let J = Z.map(({
            param: W,
            expected: X,
            received: F
        }) => `The parameter \`${W}\` type is expected as \`${X}\` but provided as \`${F}\``);
        Y.push(...J)
    }
    if (Y.length > 0) I = `${A} failed due to the following ${Y.length>1?"issues":"issue"}:
${Y.join(`
`)}`;
    return I
}
var wn = L(() => {
    kZ();
    O60();
    M1A();
    N1A();
    O9();
    w0();
    j60();
    bJA();
    A0A();
    S0();
    xV();
    L_();
    yv2();
    $Z();
    wi();
    u1();
    D0();
    $51();
    nQ();
    mh();
    eM();
    S0();
    s2();
    oM();
    AO();
    iRA();
    nRA();
    pv2();
    lv2();
    O30();
    j30();
    xX();
    DWA();
    S30()
});
import {
    randomUUID as Cp5
} from "crypto";

function u30({
    tools: A,
    isBuiltIn: Q,
    isAsync: B = !1
}) {
    return A.filter((G) => {
        if (process.env.CLAUDE_CODE_ALLOW_MCP_TOOLS_FOR_SUBAGENTS && G.name.startsWith("mcp__")) return !0;
        if (eRA.has(G.name)) return !1;
        if (!Q && Vb2.has(G.name)) return !1;
        if (B && !Kb2.has(G.name)) return !1;
        return !0
    })
}

function CWA(A, Q, B = !1) {
    let {
        tools: G,
        disallowedTools: Z,
        source: I
    } = A, Y = u30({
        tools: Q,
        isBuiltIn: I === "built-in",
        isAsync: B
    }), J = new Set(Z?.map((C) => {
        let {
            toolName: E
        } = mN(C);
        return E
    }) ?? []), W = Y.filter((C) => !J.has(C.name));
    if (G === void 0 || G.length === 1 && G[0] === "*") return {
        hasWildcard: !0,
        validTools: [],
        invalidTools: [],
        resolvedTools: W
    };
    let F = new Map;
    for (let C of W) F.set(C.name, C);
    let V = [],
        K = [],
        D = [],
        H = new Set;
    for (let C of G) {
        let {
            toolName: E
        } = mN(C);
        if (E === s8) {
            V.push(C);
            continue
        }
        let z = F.get(E);
        if (z) {
            if (V.push(C), !H.has(z)) D.push(z), H.add(z)
        } else K.push(C)
    }
    return {
        hasWildcard: !1,
        validTools: V,
        invalidTools: K,
        resolvedTools: D
    }
}

function Fb2(A, Q) {
    let B = j0({
            content: A
        }),
        G = Q.message.content.find((W) => {
            if (W.type !== "tool_use" || W.name !== s8) return !1;
            let X = W.input;
            return "prompt" in X && X.prompt === A
        });
    if (!G) return g(`Could not find matching AgentTool tool use for prompt: ${A.slice(0,50)}...`, {
        level: "error"
    }), [B];
    let Z = {
            ...Q,
            uuid: Cp5(),
            message: {
                ...Q.message,
                content: [G]
            }
        },
        I = `### FORKING CONVERSATION CONTEXT ###
### ENTERING SUB-AGENT ROUTINE ###
Entered sub-agent context

PLEASE NOTE: 
- The messages above this point are from the main thread prior to sub-agent execution. They are provided as context only.
- Context messages may include tool_use blocks for tools that are not available in the sub-agent context. You should only use the tools specifically provided to you in the system prompt.
- Only complete the specific sub-agent task you have been assigned below.`,
        Y = {
            status: "sub_agent_entered",
            description: "Entered sub-agent context",
            message: I
        },
        J = j0({
            content: [{
                type: "tool_result",
                tool_use_id: G.id,
                content: [{
                    type: "text",
                    text: I
                }]
            }],
            toolUseResult: Y
        });
    return [Z, J, B]
}
var Xb2;
var EWA = L(() => {
    aG();
    jq();
    nQ();
    D0();
    h2();
    Xb2 = _.object({
        status: _.literal("sub_agent_entered"),
        description: _.string(),
        message: _.string()
    })
});
import {
    dirname as Ep5,
    join as k51,
    resolve as Db2
} from "path";
import {
    readdir as zp5,
    readFile as Up5,
    stat as Hb2,
    realpath as $p5
} from "fs/promises";
import {
    existsSync as d30
} from "fs";
import {
    homedir as wp5
} from "os";

function qy(A, Q = "Custom item") {
    let B = A.split(`
`);
    for (let G of B) {
        let Z = G.trim();
        if (Z) {
            let Y = Z.match(/^#+\s+(.+)$/)?.[1] ?? Z;
            return Y.length > 100 ? Y.substring(0, 97) + "..." : Y
        }
    }
    return Q
}

function Eb2(A) {
    if (A === void 0 || A === null) return null;
    if (!A) return [];
    let Q = [];
    if (typeof A === "string") Q = [A];
    else if (Array.isArray(A)) Q = A.filter((G) => typeof G === "string");
    if (Q.length === 0) return [];
    let B = w0A(Q);
    if (B.includes("*")) return ["*"];
    return B
}

function $0A(A) {
    let Q = Eb2(A);
    if (Q === null) return A === void 0 ? void 0 : [];
    if (Q.includes("*")) return;
    return Q
}

function HO(A) {
    let Q = Eb2(A);
    if (Q === null) return [];
    return Q
}

function qp5(A) {
    let Q = Db2(wp5()),
        B = Db2(H0()),
        G = [];
    if (!d30(B)) return G;
    while (!0) {
        if (B === Q) break;
        let Z = k51(B, ".claude", A);
        if (d30(Z)) G.push(Z);
        let I = Ep5(B);
        if (I === B) break;
        B = I
    }
    return G
}
async function Np5(A, Q) {
    let B = [],
        G = new Set;
    async function Z(I) {
        if (Q.aborted) return;
        try {
            let Y = await Hb2(I);
            if (Y.isDirectory()) {
                let J = Y.dev !== void 0 && Y.ino !== void 0 ? `${Y.dev}:${Y.ino}` : await $p5(I);
                if (G.has(J)) {
                    g(`Skipping already visited directory (circular symlink): ${I}`);
                    return
                }
                G.add(J)
            }
        } catch (Y) {
            let J = Y instanceof Error ? Y.message : String(Y);
            g(`Failed to stat directory ${I}: ${J}`);
            return
        }
        try {
            let Y = await zp5(I, {
                withFileTypes: !0
            });
            for (let J of Y) {
                if (Q.aborted) break;
                let W = k51(I, J.name);
                try {
                    if (J.isSymbolicLink()) try {
                            let X = await Hb2(W);
                            if (X.isDirectory()) await Z(W);
                            else if (X.isFile() && J.name.endsWith(".md")) B.push(W)
                        } catch (X) {
                            let F = X instanceof Error ? X.message : String(X);
                            g(`Failed to follow symlink ${W}: ${F}`)
                        } else if (J.isDirectory()) await Z(W);
                        else if (J.isFile() && J.name.endsWith(".md")) B.push(W)
                } catch (X) {
                    let F = X instanceof Error ? X.message : String(X);
                    g(`Failed to access ${W}: ${F}`)
                }
            }
        } catch (Y) {
            let J = Y instanceof Error ? Y.message : String(Y);
            g(`Failed to read directory ${I}: ${J}`)
        }
    }
    return await Z(A), B
}
async function m30(A) {
    let Q = s9(),
        B = setTimeout(() => Q.abort(), 3000);
    try {
        if (!d30(A)) return [];
        let Z = V0(process.env.CLAUDE_CODE_USE_NATIVE_FILE_SEARCH) ? await Np5(A, Q.signal) : await dj(["--files", "--hidden", "--follow", "--no-ignore", "--glob", "*.md"], A, Q.signal);
        return (await Promise.all(Z.map(async (Y) => {
            try {
                let J = await Up5(Y, {
                        encoding: "utf-8"
                    }),
                    {
                        frontmatter: W,
                        content: X
                    } = yF(J);
                return {
                    filePath: Y,
                    frontmatter: W,
                    content: X
                }
            } catch (J) {
                let W = J instanceof Error ? J.message : String(J);
                return g(`Failed to read/parse markdown file:  ${Y}: ${W}`), null
            }
        }))).filter((Y) => Y !== null)
    } finally {
        clearTimeout(B)
    }
}
var Cb2, qn;
var Ny = L(() => {
    cj();
    zWA();
    D0();
    UZ();
    hQ();
    R2();
    RB();
    w0();
    UF();
    o2();
    Cb2 = ["commands", "agents", "output-styles", "skills"];
    qn = t1(async function(A) {
        let Q = Date.now(),
            B = k51(PQ(), A),
            G = k51(hw(), ".claude", A),
            Z = qp5(A),
            [I, Y, J] = await Promise.all([m30(G).then((X) => X.map((F) => ({
                ...F,
                baseDir: G,
                source: "policySettings"
            }))), DH("userSettings") ? m30(B).then((X) => X.map((F) => ({
                ...F,
                baseDir: B,
                source: "userSettings"
            }))) : Promise.resolve([]), DH("projectSettings") ? Promise.all(Z.map((X) => m30(X).then((F) => F.map((V) => ({
                ...V,
                baseDir: X,
                source: "projectSettings"
            }))))) : Promise.resolve([])]),
            W = J.flat();
        return BA("tengu_dir_search", {
            durationMs: Date.now() - Q,
            managedFilesFound: I.length,
            userFilesFound: Y.length,
            projectFilesFound: W.length,
            projectDirsSearched: Z.length,
            subdir: A
        }), [...I, ...Y, ...W]
    })
});
var y51;
var c30 = L(() => {
    y51 = {
        agentType: "general-purpose",
        whenToUse: "General-purpose agent for researching complex questions, searching for code, and executing multi-step tasks. When you are searching for a keyword or file and are not confident that you will find the right match in the first few tries use this agent to perform the search for you.",
        tools: ["*"],
        source: "built-in",
        baseDir: "built-in",
        model: "sonnet",
        getSystemPrompt: () => `You are an agent for Claude Code, Anthropic's official CLI for Claude. Given the user's message, you should use the tools available to complete the task. Do what has been asked; nothing more, nothing less. When you complete the task simply respond with a detailed writeup.

Your strengths:
- Searching for code, configurations, and patterns across large codebases
- Analyzing multiple files to understand system architecture
- Investigating complex questions that require exploring many files
- Performing multi-step research tasks

Guidelines:
- For file searches: Use Grep or Glob when you need to search broadly. Use Read when you know the specific file path.
- For analysis: Start broad and narrow down. Use multiple search strategies if the first doesn't yield results.
- Be thorough: Check multiple locations, consider different naming conventions, look for related files.
- NEVER create files unless they're absolutely necessary for achieving your goal. ALWAYS prefer editing an existing file to creating a new one.
- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested.
- In your final response always share relevant file names and code snippets. Any file paths you return in your response MUST be absolute. Do NOT use relative paths.
- For clear communication, avoid using emojis.`
    }
});
var zb2;
var Ub2 = L(() => {
    zb2 = {
        agentType: "statusline-setup",
        whenToUse: "Use this agent to configure the user's Claude Code status line setting.",
        tools: ["Read", "Edit"],
        source: "built-in",
        baseDir: "built-in",
        model: "sonnet",
        color: "orange",
        getSystemPrompt: () => `You are a status line setup agent for Claude Code. Your job is to create or update the statusLine command in the user's Claude Code settings.

When asked to convert the user's shell PS1 configuration, follow these steps:
1. Read the user's shell configuration files in this order of preference:
   - ~/.zshrc
   - ~/.bashrc  
   - ~/.bash_profile
   - ~/.profile

2. Extract the PS1 value using this regex pattern: /(?:^|\\n)\\s*(?:export\\s+)?PS1\\s*=\\s*["']([^"']+)["']/m

3. Convert PS1 escape sequences to shell commands:
   - \\u → $(whoami)
   - \\h → $(hostname -s)  
   - \\H → $(hostname)
   - \\w → $(pwd)
   - \\W → $(basename "$(pwd)")
   - \\$ → $
   - \\n → \\n
   - \\t → $(date +%H:%M:%S)
   - \\d → $(date "+%a %b %d")
   - \\@ → $(date +%I:%M%p)
   - \\# → #
   - \\! → !

4. When using ANSI color codes, be sure to use \`printf\`. Do not remove colors. Note that the status line will be printed in a terminal using dimmed colors.

5. If the imported PS1 would have trailing "$" or ">" characters in the output, you MUST remove them.

6. If no PS1 is found and user did not provide other instructions, ask for further instructions.

How to use the statusLine command:
1. The statusLine command will receive the following JSON input via stdin:
   {
     "session_id": "string", // Unique session ID
     "transcript_path": "string", // Path to the conversation transcript
     "cwd": "string",         // Current working directory
     "model": {
       "id": "string",           // Model ID (e.g., "claude-3-5-sonnet-20241022")
       "display_name": "string"  // Display name (e.g., "Claude 3.5 Sonnet")
     },
     "workspace": {
       "current_dir": "string",  // Current working directory path
       "project_dir": "string"   // Project root directory path
     },
     "version": "string",        // Claude Code app version (e.g., "1.0.71")
     "output_style": {
       "name": "string",         // Output style name (e.g., "default", "Explanatory", "Learning")
     }
   }
   
   You can use this JSON data in your command like:
   - $(cat | jq -r '.model.display_name')
   - $(cat | jq -r '.workspace.current_dir')
   - $(cat | jq -r '.output_style.name')
   
   Or store it in a variable first:
   - input=$(cat); echo "$(echo "$input" | jq -r '.model.display_name') in $(echo "$input" | jq -r '.workspace.current_dir')"

2. For longer commands, you can save a new file in the user's ~/.claude directory, e.g.:
   - ~/.claude/statusline-command.sh and reference that file in the settings.

3. Update the user's ~/.claude/settings.json with:
   {
     "statusLine": {
       "type": "command", 
       "command": "your_command_here"
     }
   }

4. If ~/.claude/settings.json is a symlink, update the target file instead.

Guidelines:
- Preserve existing settings when updating
- Return a summary of what was configured, including the name of the script file if used
- If the script includes git commands, they should skip optional locks
- IMPORTANT: At the end of your response, inform the parent agent that this "statusline-setup" agent must be used for further status line changes.
  Also ensure that the user is informed that they can ask Claude to continue to make changes to the status line.
`
    }
});
var Lp5, Sq;
var UWA = L(() => {
    xV();
    L_();
    XT();
    Lp5 = `You are a file search specialist for Claude Code, Anthropic's official CLI for Claude. You excel at thoroughly navigating and exploring codebases.

=== CRITICAL: READ-ONLY MODE - NO FILE MODIFICATIONS ===
This is a READ-ONLY exploration task. You are STRICTLY PROHIBITED from:
- Creating new files (no Write, touch, or file creation of any kind)
- Modifying existing files (no Edit operations)
- Deleting files (no rm or deletion)
- Moving or copying files (no mv or cp)
- Creating temporary files anywhere, including /tmp
- Using redirect operators (>, >>, |) or heredocs to write to files
- Running ANY commands that change system state

Your role is EXCLUSIVELY to search and analyze existing code. You do NOT have access to file editing tools - attempting to edit files will fail.

Your strengths:
- Rapidly finding files using glob patterns
- Searching code and text with powerful regex patterns
- Reading and analyzing file contents

Guidelines:
- Use ${CD} for broad file pattern matching
- Use ${uY} for searching file contents with regex
- Use ${g5} when you know the specific file path you need to read
- Use ${D9} ONLY for read-only operations (ls, git status, git log, git diff, find, cat, head, tail)
- NEVER use ${D9} for: mkdir, touch, rm, cp, mv, git add, git commit, npm install, pip install, or any file creation/modification
- Adapt your search approach based on the thoroughness level specified by the caller
- Return file paths as absolute paths in your final response
- For clear communication, avoid using emojis
- Communicate your final report directly as a regular message - do NOT attempt to create files

NOTE: You are meant to be a fast agent that returns output as quickly as possible. In order to achieve this you must:
- Make efficient use of the tools that you have at your disposal: be smart about how you search for files and implementations
- Wherever possible you should try to spawn multiple parallel tool calls for grepping and reading files

Complete the user's search request efficiently and report your findings clearly.`, Sq = {
        agentType: "Explore",
        whenToUse: 'Fast agent specialized for exploring codebases. Use this when you need to quickly find files by patterns (eg. "src/components/**/*.tsx"), search code for keywords (eg. "API endpoints"), or answer questions about the codebase (eg. "how do API endpoints work?"). When calling this agent, specify the desired thoroughness level: "quick" for basic searches, "medium" for moderate exploration, or "very thorough" for comprehensive analysis across multiple locations and naming conventions.',
        disallowedTools: [s8, a61, R5, bX, M_],
        source: "built-in",
        baseDir: "built-in",
        model: "haiku",
        getSystemPrompt: () => Lp5
    }
});
var Mp5, $WA;
var x51 = L(() => {
    UWA();
    XT();
    xV();
    L_();
    Mp5 = `You are a software architect and planning specialist for Claude Code. Your role is to explore the codebase and design implementation plans.

=== CRITICAL: READ-ONLY MODE - NO FILE MODIFICATIONS ===
This is a READ-ONLY planning task. You are STRICTLY PROHIBITED from:
- Creating new files (no Write, touch, or file creation of any kind)
- Modifying existing files (no Edit operations)
- Deleting files (no rm or deletion)
- Moving or copying files (no mv or cp)
- Creating temporary files anywhere, including /tmp
- Using redirect operators (>, >>, |) or heredocs to write to files
- Running ANY commands that change system state

Your role is EXCLUSIVELY to explore the codebase and design implementation plans. You do NOT have access to file editing tools - attempting to edit files will fail.

You will be provided with a set of requirements and optionally a perspective on how to approach the design process.

## Your Process

1. **Understand Requirements**: Focus on the requirements provided and apply your assigned perspective throughout the design process.

2. **Explore Thoroughly**:
   - Read any files provided to you in the initial prompt
   - Find existing patterns and conventions using ${CD}, ${uY}, and ${g5}
   - Understand the current architecture
   - Identify similar features as reference
   - Trace through relevant code paths
   - Use ${D9} ONLY for read-only operations (ls, git status, git log, git diff, find, cat, head, tail)
   - NEVER use ${D9} for: mkdir, touch, rm, cp, mv, git add, git commit, npm install, pip install, or any file creation/modification

3. **Design Solution**:
   - Create implementation approach based on your assigned perspective
   - Consider trade-offs and architectural decisions
   - Follow existing patterns where appropriate

4. **Detail the Plan**:
   - Provide step-by-step implementation strategy
   - Identify dependencies and sequencing
   - Anticipate potential challenges

## Required Output

End your response with:

### Critical Files for Implementation
List 3-5 files most critical for implementing this plan:
- path/to/file1.ts - [Brief reason: e.g., "Core logic to modify"]
- path/to/file2.ts - [Brief reason: e.g., "Interfaces to implement"]
- path/to/file3.ts - [Brief reason: e.g., "Pattern to follow"]

REMEMBER: You can ONLY explore and plan. You CANNOT and MUST NOT write, edit, or modify any files. You do NOT have access to file editing tools.`, $WA = {
        agentType: "Plan",
        whenToUse: "Software architect agent for designing implementation plans. Use this when you need to plan the implementation strategy for a task. Returns step-by-step plans, identifies critical files, and considers architectural trade-offs.",
        disallowedTools: [s8, a61, R5, bX, M_],
        source: "built-in",
        tools: Sq.tools,
        baseDir: "built-in",
        model: "inherit",
        getSystemPrompt: () => Mp5
    }
});
var $b2 = () => {};

function p30() {
    let A = [y51, zb2, Sq, $WA];
    if (V0(process.env.ENABLE_CODE_GUIDE_SUBAGENT) || process.env.CLAUDE_CODE_ENTRYPOINT !== "sdk-ts" && process.env.CLAUDE_CODE_ENTRYPOINT !== "sdk-py" && process.env.CLAUDE_CODE_ENTRYPOINT !== "sdk-cli") A.push(SGB);
    return A
}
var wb2 = L(() => {
    c30();
    Ub2();
    UWA();
    x51();
    $f1();
    $b2();
    hQ()
});
import {
    join as Op5,
    basename as Rp5
} from "path";

function qb2(A, Q, B) {
    let G = [],
        Z = OA();

    function I(Y, J = []) {
        try {
            let W = Z.readdirSync(Y);
            for (let X of W) {
                let F = Op5(Y, X.name);
                if (X.isDirectory()) I(F, [...J, X.name]);
                else if (X.isFile() && X.name.endsWith(".md")) {
                    let V = Nb2(F, Q, J, B);
                    if (V) G.push(V)
                }
            }
        } catch (W) {
            g(`Failed to scan agents directory ${Y}: ${W}`, {
                level: "error"
            })
        }
    }
    return I(A), G
}

function Nb2(A, Q, B, G) {
    let Z = OA();
    try {
        let I = Z.readFileSync(A, {
                encoding: "utf-8"
            }),
            {
                frontmatter: Y,
                content: J
            } = yF(I),
            W = Y.name || Rp5(A).replace(/\.md$/, ""),
            F = [Q, ...B, W].join(":"),
            V = Y.description || Y["when-to-use"] || `Agent from ${Q} plugin`,
            K = $0A(Y.tools),
            D = HO(Y.skills),
            H = Y.color,
            C = Y.model,
            E = Y.forkContext,
            z = J.trim();
        return {
            agentType: F,
            whenToUse: V,
            tools: K,
            ...D !== void 0 ? {
                skills: D
            } : {},
            getSystemPrompt: () => z,
            source: "plugin",
            color: H,
            model: C,
            filename: W,
            plugin: G,
            ...{}
        }
    } catch (I) {
        return g(`Failed to load agent from ${A}: ${I}`, {
            level: "error"
        }), null
    }
}

function Lb2() {
    q0A.cache?.clear?.()
}
var q0A;
var ATA = L(() => {
    o2();
    o0();
    NF();
    D0();
    Ny();
    q0A = t1(async () => {
        let {
            enabled: A,
            errors: Q
        } = await y7(), B = [];
        if (Q.length > 0) g(`Plugin loading errors: ${Q.map((G)=>BM(G)).join(", ")}`);
        for (let G of A) {
            if (G.agentsPath) try {
                let Z = qb2(G.agentsPath, G.name, G.source);
                if (B.push(...Z), Z.length > 0) g(`Loaded ${Z.length} agents from plugin ${G.name} default directory`)
            } catch (Z) {
                g(`Failed to load agents from plugin ${G.name} default directory: ${Z}`, {
                    level: "error"
                })
            }
            if (G.agentsPaths)
                for (let Z of G.agentsPaths) try {
                    let Y = OA().statSync(Z);
                    if (Y.isDirectory()) {
                        let J = qb2(Z, G.name, G.source);
                        if (B.push(...J), J.length > 0) g(`Loaded ${J.length} agents from plugin ${G.name} custom path: ${Z}`)
                    } else if (Y.isFile() && Z.endsWith(".md")) {
                        let J = Nb2(Z, G.name, [], G.source);
                        if (J) B.push(J), g(`Loaded agent from plugin ${G.name} custom file: ${Z}`)
                    }
                } catch (I) {
                    g(`Failed to load agents from plugin ${G.name} custom path ${Z}: ${I}`, {
                        level: "error"
                    })
                }
        }
        return g(`Total plugin agents loaded: ${B.length}`), B
    })
});
import {
    basename as Tp5
} from "path";

function Ly(A) {
    return A.source === "built-in"
}

function Ob2(A) {
    return A.source !== "built-in" && A.source !== "plugin"
}

function v51(A) {
    return A.source === "plugin"
}

function My(A) {
    let Q = A.filter((X) => X.source === "built-in"),
        B = A.filter((X) => X.source === "plugin"),
        G = A.filter((X) => X.source === "userSettings"),
        Z = A.filter((X) => X.source === "projectSettings"),
        I = A.filter((X) => X.source === "policySettings"),
        Y = A.filter((X) => X.source === "flagSettings"),
        J = [Q, B, G, Z, Y, I],
        W = new Map;
    for (let X of J)
        for (let F of X) W.set(F.agentType, F);
    return Array.from(W.values())
}

function jp5(A) {
    let {
        name: Q,
        description: B,
        model: G
    } = A;
    if (!Q || typeof Q !== "string") return 'Missing required "name" field in frontmatter';
    if (!B || typeof B !== "string") return 'Missing required "description" field in frontmatter';
    if (G && typeof G === "string" && !s7A.includes(G)) return `Invalid model "${G}". Valid options: ${s7A.join(", ")}`;
    return "Unknown parsing error"
}

function Sp5(A, Q, B = "flagSettings") {
    try {
        let G = Mb2.parse(Q),
            Z = $0A(G.tools),
            I = G.disallowedTools !== void 0 ? $0A(G.disallowedTools) : void 0,
            Y = G.prompt;
        return {
            agentType: A,
            whenToUse: G.description,
            ...Z !== void 0 ? {
                tools: Z
            } : {},
            ...I !== void 0 ? {
                disallowedTools: I
            } : {},
            getSystemPrompt: () => Y,
            source: B,
            ...G.model ? {
                model: G.model
            } : {},
            ...G.permissionMode ? {
                permissionMode: G.permissionMode
            } : {}
        }
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G);
        return g(`Error parsing agent '${A}' from JSON: ${Z}`), e(G instanceof Error ? G : Error(String(G))), null
    }
}

function b51(A, Q = "flagSettings") {
    try {
        let B = Pp5.parse(A);
        return Object.entries(B).map(([G, Z]) => Sp5(G, Z, Q)).filter((G) => G !== null)
    } catch (B) {
        let G = B instanceof Error ? B.message : String(B);
        return g(`Error parsing agents from JSON: ${G}`), e(B instanceof Error ? B : Error(String(B))), []
    }
}

function _p5(A, Q, B, G, Z) {
    try {
        let {
            name: I,
            description: Y
        } = B;
        if (!I || typeof I !== "string" || !Y || typeof Y !== "string") {
            let P = `Agent file ${A} is missing required '${!I||typeof I!=="string"?"name":"description"}' in frontmatter`;
            return g(P), null
        }
        Y = Y.replace(/\\n/g, `
`);
        let {
            color: J,
            model: W,
            forkContext: X
        } = B;
        if (X !== void 0 && X !== "true" && X !== "false") {
            let R = `Agent file ${A} has invalid forkContext value '${X}'. Must be 'true', 'false', or omitted.`;
            g(R)
        }
        let F = X === "true";
        if (F && W !== "inherit") {
            let R = `Agent file ${A} has forkContext: true but model is not 'inherit'. Overriding to 'inherit'. Agents with forkContext must use model: inherit to avoid context length mismatch.`;
            g(R), W = "inherit"
        }
        let V = W && typeof W === "string" && s7A.includes(W);
        if (W && typeof W === "string" && !V) {
            let R = `Agent file ${A} has invalid model '${W}'. Valid options: ${s7A.join(", ")}`;
            g(R)
        }
        let K = B.permissionMode,
            D = K && OR.includes(K);
        if (K && !D) {
            let R = `Agent file ${A} has invalid permissionMode '${K}'. Valid options: ${OR.join(", ")}`;
            g(R)
        }
        let H = Tp5(A, ".md"),
            C = $0A(B.tools),
            E = B.disallowedTools,
            z = E !== void 0 ? $0A(E) : void 0,
            w = HO(B.skills),
            N = G.trim();