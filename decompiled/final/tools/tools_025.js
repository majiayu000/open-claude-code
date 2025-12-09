/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_025.js
 * 处理时间: 2025-12-09T03:41:38.870Z
 * 变量映射: 6 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * dC       (  3x) last()
 * aA       (  2x) BASE64_CHARS = "ABCDEF...+/"
 * g5       (  1x) READ_TOOL = "Read"
 * bX       (  1x) WRITE_TOOL = "Write"
 * S3       (  1x) getDefaultSonnetModel() - Returns "claude-sonnet-4-5...
 * RJ       (  1x) isClaudeCodeRemote() - Check remote
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 25/25
 * Lines: 445676 - 447173 (1498 lines)
 * Original file: cli.js
 */

            if (Z0.behavior !== "allow") {
                let J0 = {
                    tool_name: k1.name,
                    tool_use_id: R1,
                    tool_input: T0
                };
                p.push(J0)
            }
            return Z0
        }, o = await z(), l = H ? VE(H) : S3(), [k, d, QA] = await Promise.all([Un(Z, l, Array.from(o.toolPermissionContext.additionalWorkingDirectories.keys()), I, o.toolPermissionContext), XK(), typeof K === "string" ? Promise.resolve({}) : uD()]), IA = [...typeof K === "string" ? [K] : k, ...D ? [D] : []], HA = typeof D === "string", wA = Z.some((k1) => k1.name === Az);
    if (E && wA) N21(w, G0(), "Stop", "", (k1) => tI1(k1, Az), `You MUST call the ${Az} tool to complete this request. Call this tool now.`, {
        timeout: 5000
    });
    let KA = {
        messages: V,
        setMessages: () => {},
        onChangeAPIKey: () => {},
        options: {
            commands: A,
            debug: !1,
            tools: Z,
            verbose: Y,
            mainLoopModel: l,
            maxThinkingTokens: J ?? 0,
            mcpClients: I,
            mcpResources: {},
            ideInstallationStatus: null,
            isNonInteractiveSession: !0,
            hasAppendSystemPrompt: HA,
            agentDefinitions: {
                activeAgents: P,
                allAgents: []
            },
            theme: L1().theme,
            maxBudgetUsd: X
        },
        getAppState: z,
        setAppState: w,
        abortController: N ?? s9(),
        readFileState: zU9(V, G),
        setInProgressToolUseIDs: () => {},
        setResponseLength: () => {},
        updateFileHistoryState: (k1) => {
            w((T0) => ({
                ...T0,
                fileHistory: k1(T0.fileHistory)
            }))
        },
        agentId: G0(),
        setSDKStatus: y
    };
    if (v)
        for await (let k1 of qf3(v, Z, V, KA)) yield k1;
    let {
        messages: SA,
        shouldQuery: sA,
        allowedTools: NA,
        maxThinkingTokens: qA,
        model: DA
    } = await pP({
        input: Q,
        mode: "prompt",
        setIsLoading: () => {},
        setToolJSX: () => {},
        context: {
            ...KA,
            messages: V
        },
        messages: V,
        uuid: B,
        querySource: "sdk"
    });
    V.push(...SA);
    let yA = J ?? qA ?? 0,
        rA = [...V],
        K1 = SA.filter((k1) => k1.type === "user" && !k1.isMeta && !k1.toolUseResult || k1.type === "system" && k1.subtype === "compact_boundary"),
        WA = q ? K1 : [];
    w((k1) => ({
        ...k1,
        toolPermissionContext: {
            ...k1.toolPermissionContext,
            alwaysAllowRules: {
                ...k1.toolPermissionContext.alwaysAllowRules,
                command: NA
            }
        }
    }));
    let XA = DA ?? l,
        zA = zU9(rA, G),
        $A = K22(zA, KA.readFileState);
    KA = {
        messages: rA,
        setMessages: () => {},
        onChangeAPIKey: () => {},
        options: {
            commands: A,
            debug: !1,
            tools: Z,
            verbose: Y,
            mainLoopModel: XA,
            maxThinkingTokens: yA,
            mcpClients: I,
            mcpResources: {},
            ideInstallationStatus: null,
            isNonInteractiveSession: !0,
            hasAppendSystemPrompt: HA,
            theme: L1().theme,
            agentDefinitions: {
                activeAgents: P,
                allAgents: []
            },
            maxBudgetUsd: X
        },
        getAppState: z,
        setAppState: w,
        abortController: N || s9(),
        readFileState: $A,
        setInProgressToolUseIDs: () => {},
        setResponseLength: () => {},
        updateFileHistoryState: KA.updateFileHistoryState,
        agentId: G0(),
        setSDKStatus: y
    };
    let TA = c0()?.outputStyle ?? EK,
        [eA, {
            enabled: aA
        }] = await Promise.all([D51(), y7()]);
    if (yield {
            type: "system",
            subtype: "init",
            cwd: G,
            session_id: G0(),
            tools: Z.map((k1) => k1.name),
            mcp_servers: I.map((k1) => ({
                name: k1.name,
                status: k1.type
            })),
            model: XA,
            permissionMode: o.toolPermissionContext.mode,
            slash_commands: A.map((k1) => k1.name),
            apiKeySource: vw().source,
            claude_code_version: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION,
            output_style: TA,
            agents: P.map((k1) => k1.agentType),
            skills: eA.map((k1) => k1.name),
            plugins: aA.map((k1) => ({
                name: k1.name,
                path: k1.path
            })),
            uuid: Ma()
        }, !sA) {
        for (let k1 of K1) {
            if (k1.type === "user" && typeof k1.message.content === "string" && (k1.message.content.includes("<local-command-stdout>") || k1.message.content.includes("<local-command-stderr>") || k1.isCompactSummary)) rA.push(k1), yield {
                type: "user",
                message: {
                    ...k1.message,
                    content: mY(k1.message.content)
                },
                session_id: G0(),
                parent_tool_use_id: null,
                uuid: k1.uuid,
                isReplay: !k1.isCompactSummary
            };
            if (k1.type === "system" && k1.subtype === "compact_boundary") rA.push(k1), yield {
                type: "system",
                subtype: "compact_boundary",
                session_id: G0(),
                uuid: k1.uuid,
                compact_metadata: {
                    trigger: k1.compactMetadata.trigger,
                    pre_tokens: k1.compactMetadata.preTokens
                }
            }
        }
        await N0A(rA), yield {
            type: "result",
            subtype: "success",
            is_error: !1,
            duration_ms: Date.now() - x,
            duration_api_ms: kN(),
            num_turns: rA.length - 1,
            result: "",
            session_id: G0(),
            total_cost_usd: yK(),
            usage: KO,
            modelUsage: {},
            permission_denials: p,
            uuid: Ma()
        };
        return
    }
    if (JG()) SA.filter(Ln).forEach((k1) => {
        UYA((T0) => {
            w((fQ) => ({
                ...fQ,
                fileHistory: T0(fQ.fileHistory)
            }))
        }, k1.uuid)
    });
    let I1 = KO,
        w1 = KO,
        PA = 1,
        B1 = !1,
        Q0, b1 = E ? iV0(V, Az) : 0;
    for await (let k1 of J$({
        messages: rA,
        systemPrompt: IA,
        userContext: d,
        systemContext: QA,
        canUseTool: u,
        toolUseContext: KA,
        fallbackModel: C,
        querySource: "sdk"
    })) {
        if (k1.type === "assistant" || k1.type === "user" || k1.type === "system" && k1.subtype === "compact_boundary") {
            if (rA.push(k1), await N0A(rA), !B1 && WA.length > 0) {
                B1 = !0;
                for (let T0 of WA)
                    if (T0.type === "user") yield {
                        type: "user",
                        message: T0.message,
                        session_id: G0(),
                        parent_tool_use_id: null,
                        uuid: T0.uuid,
                        isReplay: !0
                    }
            }
        }
        if (k1.type === "user") PA++;
        switch (k1.type) {
            case "assistant":
            case "progress":
            case "user":
                V.push(k1), yield* Mf3(k1);
                break;
            case "stream_event":
                if (k1.event.type === "message_start") w1 = KO, w1 = JSA(w1, k1.event.message.usage);
                if (k1.event.type === "message_delta") w1 = JSA(w1, k1.event.usage);
                if (k1.event.type === "message_stop") I1 = T51(I1, w1);
                if (R) yield {
                    type: "stream_event",
                    event: k1.event,
                    session_id: G0(),
                    parent_tool_use_id: null,
                    uuid: Ma()
                };
                break;
            case "attachment":
                if (V.push(k1), II2(k1.attachment)) yield {
                    type: "system",
                    subtype: "hook_response",
                    session_id: G0(),
                    uuid: k1.uuid,
                    hook_name: k1.attachment.hookName,
                    hook_event: k1.attachment.hookEvent,
                    stdout: k1.attachment.stdout,
                    stderr: k1.attachment.stderr,
                    exit_code: k1.attachment.exitCode
                };
                else if (F91(k1.attachment)) yield {
                    type: "system",
                    subtype: "hook_response",
                    session_id: G0(),
                    uuid: k1.uuid,
                    hook_name: k1.attachment.hookName,
                    hook_event: k1.attachment.hookEvent,
                    stdout: k1.attachment.stdout || "",
                    stderr: k1.attachment.stderr || "",
                    exit_code: k1.attachment.exitCode
                };
                else if (q && X91(k1)) {
                    let T0 = k1.attachment;
                    if (T0.type === "queued_command") yield {
                        type: "user",
                        message: {
                            role: "user",
                            content: typeof T0.prompt === "string" ? T0.prompt : T0.prompt
                        },
                        session_id: G0(),
                        parent_tool_use_id: null,
                        uuid: T0.source_uuid || k1.uuid,
                        isReplay: !0
                    }
                } else if (k1.attachment.type === "structured_output") Q0 = k1.attachment.data;
                break;
            case "stream_request_start":
                break;
            case "system":
                if (V.push(k1), k1.subtype === "compact_boundary" && k1.compactMetadata) yield {
                    type: "system",
                    subtype: "compact_boundary",
                    session_id: G0(),
                    uuid: k1.uuid,
                    compact_metadata: {
                        trigger: k1.compactMetadata.trigger,
                        pre_tokens: k1.compactMetadata.preTokens
                    }
                };
                break
        }
        if (k1.type === "user" && W && PA >= W) {
            yield {
                type: "result",
                subtype: "error_max_turns",
                duration_ms: Date.now() - x,
                duration_api_ms: kN(),
                is_error: !1,
                num_turns: PA,
                session_id: G0(),
                total_cost_usd: yK(),
                usage: I1,
                modelUsage: fu(),
                permission_denials: p,
                uuid: Ma(),
                errors: []
            };
            return
        }
        if (X !== void 0 && yK() >= X) {
            yield {
                type: "result",
                subtype: "error_max_budget_usd",
                duration_ms: Date.now() - x,
                duration_api_ms: kN(),
                is_error: !1,
                num_turns: PA,
                session_id: G0(),
                total_cost_usd: yK(),
                usage: I1,
                modelUsage: fu(),
                permission_denials: p,
                uuid: Ma(),
                errors: []
            };
            return
        }
        if (k1.type === "user" && E) {
            let fQ = iV0(V, Az) - b1,
                F1 = parseInt(process.env.MAX_STRUCTURED_OUTPUT_RETRIES || "5", 10);
            if (fQ >= F1) {
                yield {
                    type: "result",
                    subtype: "error_max_structured_output_retries",
                    duration_ms: Date.now() - x,
                    duration_api_ms: kN(),
                    is_error: !1,
                    num_turns: PA,
                    session_id: G0(),
                    total_cost_usd: yK(),
                    usage: I1,
                    modelUsage: fu(),
                    permission_denials: p,
                    uuid: Ma(),
                    errors: [`Failed to provide valid structured output after ${F1} attempts`]
                };
                return
            }
        }
    }
    let Y0 = dC(rA);
    if (!Nf3(Y0)) {
        yield {
            type: "result",
            subtype: "error_during_execution",
            duration_ms: Date.now() - x,
            duration_api_ms: kN(),
            is_error: !1,
            num_turns: PA,
            session_id: G0(),
            total_cost_usd: yK(),
            usage: I1,
            modelUsage: fu(),
            permission_denials: p,
            uuid: Ma(),
            errors: BFA().map((k1) => k1.error)
        };
        return
    }
    let x0 = "",
        u0 = !1;
    if (Y0.type === "assistant") {
        let k1 = dC(Y0.message.content);
        if (k1?.type === "text") x0 = k1.text;
        u0 = Boolean(Y0.isApiErrorMessage)
    }
    yield {
        type: "result",
        subtype: "success",
        is_error: u0,
        duration_ms: Date.now() - x,
        duration_api_ms: kN(),
        num_turns: PA,
        result: x0,
        session_id: G0(),
        total_cost_usd: yK(),
        usage: I1,
        modelUsage: fu(),
        permission_denials: p,
        structured_output: Q0,
        uuid: Ma()
    }
}

function* Mf3(A) {
    switch (A.type) {
        case "assistant":
            for (let Q of lJ([A])) yield {
                type: "assistant",
                message: Q.message,
                parent_tool_use_id: null,
                session_id: G0(),
                uuid: Q.uuid,
                error: Q.error
            };
            return;
        case "progress":
            if (A.data.type === "agent_progress")
                for (let Q of lJ([A.data.message])) switch (Q.type) {
                    case "assistant":
                        yield {
                            type: "assistant", message: Q.message, parent_tool_use_id: A.parentToolUseID, session_id: G0(), uuid: Q.uuid, error: Q.error
                        };
                        break;
                    case "user":
                        yield {
                            type: "user", message: Q.message, parent_tool_use_id: A.parentToolUseID, session_id: G0(), uuid: Q.uuid, isSynthetic: Q.isMeta || Q.isVisibleInTranscriptOnly, tool_use_result: Q.toolUseResult
                        };
                        break
                } else if (A.data.type === "bash_progress") {
                    if (!process.env.CLAUDE_CODE_REMOTE && !process.env.CLAUDE_CODE_CONTAINER_ID) break;
                    let Q = A.parentToolUseID,
                        B = Date.now(),
                        G = jSA.get(Q) || 0;
                    if (B - G >= 60000) {
                        if (jSA.size >= Lf3) {
                            let I = jSA.keys().next().value;
                            if (I !== void 0) jSA.delete(I)
                        }
                        jSA.set(Q, B), yield {
                            type: "tool_progress",
                            tool_use_id: A.toolUseID,
                            tool_name: "Bash",
                            parent_tool_use_id: A.parentToolUseID,
                            elapsed_time_seconds: A.data.elapsedTimeSeconds,
                            session_id: G0(),
                            uuid: A.uuid
                        }
                    }
                } break;
        case "user":
            for (let Q of lJ([A])) yield {
                type: "user",
                message: Q.message,
                parent_tool_use_id: null,
                session_id: G0(),
                uuid: Q.uuid,
                isSynthetic: Q.isMeta || Q.isVisibleInTranscriptOnly,
                tool_use_result: Q.toolUseResult
            };
            return;
        default:
    }
}

function zU9(A, Q) {
    let B = Gh(wf3),
        G = new Map,
        Z = new Map;
    for (let I of A)
        if (I.type === "assistant" && Array.isArray(I.message.content)) {
            for (let Y of I.message.content)
                if (Y.type === "tool_use" && Y.name === g5) {
                    let J = Y.input;
                    if (J?.file_path && J?.offset === void 0 && J?.limit === void 0) {
                        let W = b9(J.file_path, Q);
                        G.set(Y.id, W)
                    }
                } else if (Y.type === "tool_use" && Y.name === bX) {
                let J = Y.input;
                if (J?.file_path && J?.content) {
                    let W = b9(J.file_path, Q);
                    Z.set(Y.id, {
                        filePath: W,
                        content: J.content
                    })
                }
            }
        } for (let I of A)
        if (I.type === "user" && Array.isArray(I.message.content)) {
            for (let Y of I.message.content)
                if (Y.type === "tool_result" && Y.tool_use_id) {
                    let J = G.get(Y.tool_use_id);
                    if (J && typeof Y.content === "string") {
                        let V = Y.content.replace(/<system-reminder>[\s\S]*?<\/system-reminder>/g, "").split(`
`).map((K) => {
                            let D = K.match(/^\s*\d+→(.*)$/);
                            return D ? D[1] : K
                        }).join(`
`).trim();
                        if (I.timestamp) {
                            let K = new Date(I.timestamp).getTime();
                            B.set(J, {
                                content: V,
                                timestamp: K,
                                offset: void 0,
                                limit: void 0
                            })
                        }
                    }
                    let W = Z.get(Y.tool_use_id);
                    if (W && I.timestamp) {
                        let X = new Date(I.timestamp).getTime();
                        B.set(W.filePath, {
                            content: W.content,
                            timestamp: X,
                            offset: void 0,
                            limit: void 0
                        })
                    }
                }
        } return B
}
var wf3 = 10,
    Lf3 = 100,
    jSA;
var $U9 = L(() => {
    O9A();
    nE();
    $n();
    $y();
    x_();
    wn();
    uM();
    xV();
    L_();
    m_();
    jI();
    GG();
    nQ();
    oXA();
    vXA();
    S0();
    s2();
    eIA();
    HT();
    hB();
    eM();
    aRA();
    kZ();
    jQ();
    UZ();
    ry();
    RB();
    NF();
    u1();
    iU();
    QTA();
    jSA = new Map
});

function wU9(A) {
    let Q = process.env.CLAUDE_CODE_EXIT_AFTER_STOP_DELAY,
        B = Q ? parseInt(Q, 10) : null,
        G = B && !isNaN(B) && B > 0,
        Z = null,
        I = 0;
    return {
        start() {
            if (Z) clearTimeout(Z), Z = null;
            if (G) I = Date.now(), Z = setTimeout(() => {
                let Y = Date.now() - I;
                if (A() && Y >= B) g(`Exiting after ${B}ms of idle time`), c8()
            }, B)
        },
        stop() {
            if (Z) clearTimeout(Z), Z = null
        }
    }
}
var qU9 = L(() => {
    D0();
    _J()
});
import {
    randomUUID as NU9
} from "crypto";

function LU9(A) {
    try {
        let Q = new URL(A);
        return {
            sessionId: NU9(),
            ingressUrl: Q.href,
            isUrl: !0,
            jsonlFile: null,
            isJsonlFile: !1
        }
    } catch {
        if (Y$(A)) return {
            sessionId: A,
            ingressUrl: null,
            isUrl: !1,
            jsonlFile: null,
            isJsonlFile: !1
        };
        if (A.endsWith(".jsonl")) return {
            sessionId: NU9(),
            ingressUrl: null,
            isUrl: !1,
            jsonlFile: A,
            isJsonlFile: !0
        }
    }
    return null
}
var MU9 = L(() => {
    wy()
});

function OU9(A) {
    let Q = A.find((B) => B.name === "claude-vscode");
    if (Q && Q.type === "connected") {
        Q.client.setNotificationHandler(Of3, async (G) => {
            let {
                eventName: Z,
                eventData: I
            } = G.params;
            BA(`tengu_vscode_${Z}`, I)
        });
        let B = {
            tengu_vscode_review_upsell: j8("tengu_vscode_review_upsell")
        };
        Q.client.notification({
            method: "experiment_gates",
            params: {
                gates: B
            }
        })
    }
}
var Of3;
var RU9 = L(() => {
    h2();
    w0();
    O9();
    Of3 = _.object({
        method: _.literal("log_event"),
        params: _.object({
            eventName: _.string(),
            eventData: _.object({}).passthrough()
        })
    })
});
import {
    cwd as Rf3
} from "process";
import {
    randomUUID as TJ1
} from "crypto";
async function jU9(A, Q, B, G, Z, I, Y, J) {
    if (await NYA()) await WV9();
    if (lQ.isSandboxingEnabled()) try {
        await lQ.initialize()
    } catch (w) {
        process.stderr.write(`
❌ Sandbox Error: ${w instanceof Error?w.message:String(w)}
`), c8(1, "other");
        return
    }
    if (J.resumeSessionAt && !J.resume) {
        process.stderr.write(`Error: --resume-session-at requires --resume
`), c8(1);
        return
    }
    let W = await Q(),
        X = await yf3(B, {
            continue: J.continue,
            teleport: J.teleport,
            resume: J.resume,
            resumeSessionAt: J.resumeSessionAt,
            forkSession: J.forkSession
        }),
        F = typeof J.resume === "string" && (Boolean(Y$(J.resume)) || J.resume.endsWith(".jsonl")),
        V = Boolean(J.sdkUrl);
    if (!A && !F && !V) {
        process.stderr.write(`Error: Input must be provided either through stdin or as a prompt argument when using --print
`), c8(1);
        return
    }
    if (J.outputFormat === "stream-json" && !J.verbose) {
        process.stderr.write(`Error: When using --print, --output-format=stream-json requires --verbose
`), c8(1);
        return
    }
    let K = RJ() ? Z : [...Z, ...W.mcp.tools],
        D = xf3(A, J),
        H = J.sdkUrl ? "stdio" : J.permissionPromptToolName,
        C = jf3(H, D, W.mcp.tools);
    if (J.permissionPromptToolName) K = K.filter((w) => w.name !== J.permissionPromptToolName);
    let E = [];
    for await (let w of Tf3(D, W.mcp.clients, [...G, ...W.mcp.commands], K, X, C, I, Q, B, Y, J)) {
        if (J.outputFormat === "stream-json" && J.verbose) D.write(w);
        if (w.type !== "control_response" && w.type !== "control_request" && w.type !== "control_cancel_request" && w.type !== "stream_event" && w.type !== "keep_alive") E.push(w)
    }
    let z = dC(E);
    switch (J.outputFormat) {
        case "json":
            if (!z || z.type !== "result") throw Error("No messages returned");
            if (J.verbose) {
                N9(JSON.stringify(E) + `
`);
                break
            }
            N9(JSON.stringify(z) + `
`);
            break;
        case "stream-json":
            break;
        default:
            if (!z || z.type !== "result") throw Error("No messages returned");
            switch (z.subtype) {
                case "success":
                    N9(z.result.endsWith(`
`) ? z.result : z.result + `
`);
                    break;
                case "error_during_execution":
                    N9("Execution error");
                    break;
                case "error_max_turns":
                    N9(`Error: Reached max turns (${J.maxTurns})`);
                    break;
                case "error_max_budget_usd":
                    N9(`Error: Exceeded USD budget (${J.maxBudgetUsd})`);
                    break;
                case "error_max_structured_output_retries":
                    N9("Error: Failed to provide valid structured output after maximum retries")
            }
    }
    c8(z?.type === "result" && z?.is_error ? 1 : 0)
}

function Tf3(A, Q, B, G, Z, I, Y, J, W, X, F) {
    let V = !1,
        K = !1,
        D, H = new oRA;
    if (F.enableAuthStatus) _H.getInstance().subscribe((k) => {
        H.enqueue({
            type: "auth_status",
            isAuthenticating: k.isAuthenticating,
            output: k.output,
            error: k.error,
            uuid: TJ1(),
            session_id: G0()
        })
    });
    let C = X09(Z),
        E = [],
        z = !1,
        w = Z;
    for (let l of C)
        if (l.type === "system" && l.subtype === "hook_response" && l.hook_event === "SessionStart") E.push(l);
    let q = JrA().map((l) => {
            return {
                value: l.value === null ? "default" : l.value,
                displayName: l.label,
                description: l.description
            }
        }),
        R = F.userSpecifiedModel,
        P = [],
        y = [];
    async function v() {
        let l = new Set(Object.keys(Y)),
            k = new Set(P.map((HA) => HA.name)),
            d = Array.from(l).some((HA) => !k.has(HA)),
            QA = Array.from(k).some((HA) => !l.has(HA));
        if (d || QA) {
            for (let wA of P)
                if (!l.has(wA.name)) {
                    if (wA.type === "connected") await wA.cleanup()
                } let HA = await d52(Y, (wA, KA) => A.sendMcpMessage(wA, KA));
            P = HA.clients, y = HA.tools, OU9(P)
        }
    }
    v();
    let x = wU9(() => !V),
        p = async () => {
            if (V) return;
            if (V = !0, x.stop(), !z) {
                z = !0;
                for (let QA of E) H.enqueue(QA)
            }
            await v();
            let l = [...Q, ...P],
                k = [...G, ...y],
                d = BX1();
            if (d && !F.jsonSchema) {
                let QA = aI1(d);
                if (QA) k = [...k, QA]
            }
            try {
                let QA;
                while (QA = await Ab2(J, W)) {
                    if (QA.mode !== "prompt" && QA.mode !== "orphaned-permission") throw Error("only prompt commands are supported in streaming mode");
                    let IA = QA.value;
                    D = s9();
                    for await (let HA of UU9({
                        commands: B,
                        prompt: IA,
                        promptUuid: QA.uuid,
                        cwd: Rf3(),
                        tools: k,
                        verbose: F.verbose,
                        mcpClients: l,
                        maxThinkingTokens: F.maxThinkingTokens,
                        maxTurns: F.maxTurns,
                        maxBudgetUsd: F.maxBudgetUsd,
                        canUseTool: I,
                        userSpecifiedModel: R,
                        fallbackModel: F.fallbackModel,
                        jsonSchema: BX1() ?? F.jsonSchema,
                        mutableMessages: w,
                        customSystemPrompt: F.systemPrompt,
                        appendSystemPrompt: F.appendSystemPrompt,
                        getAppState: J,
                        setAppState: W,
                        abortController: D,
                        replayUserMessages: F.replayUserMessages,
                        includePartialMessages: F.includePartialMessages,
                        agents: X,
                        orphanedPermission: QA.orphanedPermission,
                        setSDKStatus: (wA) => {
                            H.enqueue({
                                type: "system",
                                subtype: "status",
                                status: wA,
                                session_id: G0(),
                                uuid: TJ1()
                            })
                        }
                    })) {
                        let wA = (HA.type === "assistant" || HA.type === "user") && HA.parent_tool_use_id,
                            KA = HA.type === "user" && "isReplay" in HA && HA.isReplay;
                        if (!wA && !KA && HA.type !== "stream_event") C.push(HA);
                        H.enqueue(HA)
                    }
                }
            } catch (QA) {
                try {
                    A.write({
                        type: "result",
                        subtype: "error_during_execution",
                        duration_ms: 0,
                        duration_api_ms: 0,
                        is_error: !0,
                        num_turns: 0,
                        session_id: G0(),
                        total_cost_usd: 0,
                        usage: KO,
                        modelUsage: {},
                        permission_denials: [],
                        uuid: TJ1(),
                        errors: [QA instanceof Error ? QA.message : String(QA), ...BFA().map((IA) => IA.error)]
                    })
                } catch {}
                c8(1);
                return
            } finally {
                V = !1, x.start()
            }
            if (K) H.done()
        }, u = function(l, k) {
            H.enqueue({
                type: "control_response",
                response: {
                    subtype: "success",
                    request_id: l.request_id,
                    response: k
                }
            })
        }, o = function(l, k) {
            H.enqueue({
                type: "control_response",
                response: {
                    subtype: "error",
                    request_id: l.request_id,
                    error: k
                }
            })
        };
    return A.setUnexpectedResponseCallback(async (l) => {
        await vf3({
            message: l,
            setAppState: W,
            onEnqueued: () => {
                p()
            }
        })
    }), (async () => {
        let l = !1;
        for await (let k of A.structuredInput) {
            if (k.type === "control_request") {
                if (k.request.subtype === "interrupt") {
                    if (D) D.abort();
                    u(k)
                } else if (k.request.subtype === "initialize") {
                    if (k.request.sdkMcpServers && k.request.sdkMcpServers.length > 0)
                        for (let d of k.request.sdkMcpServers) Y[d] = {
                            type: "sdk",
                            name: d
                        };
                    await Sf3(k.request, k.request_id, l, H, B, q, A, !!F.enableAuthStatus, F, X), l = !0
                } else if (k.request.subtype === "set_permission_mode") {
                    let d = k.request;
                    W((QA) => ({
                        ...QA,
                        toolPermissionContext: kf3(d, k.request_id, QA.toolPermissionContext, H)
                    })), u(k)
                } else if (k.request.subtype === "set_model") {
                    let d = k.request.model === "default" ? et() : k.request.model;
                    R = d, zs(d), u(k)
                } else if (k.request.subtype === "set_max_thinking_tokens") {
                    if (k.request.max_thinking_tokens === null) F.maxThinkingTokens = void 0;
                    else F.maxThinkingTokens = k.request.max_thinking_tokens;
                    u(k)
                } else if (k.request.subtype === "mcp_status") {
                    let d = [...Q, ...P].map((QA) => {
                        return {
                            name: QA.name,
                            status: QA.type,
                            serverInfo: QA.type === "connected" ? QA.serverInfo : void 0
                        }
                    });
                    u(k, {
                        mcpServers: d
                    })
                } else if (k.request.subtype === "mcp_message") {
                    let d = k.request,
                        QA = P.find((IA) => IA.name === d.server_name);
                    if (QA && QA.type === "connected") {
                        if (QA.client.transport?.onmessage) QA.client.transport.onmessage(d.message)
                    }
                    u(k)
                } else if (k.request.subtype === "rewind_code") {
                    let d = await J(),
                        QA = await _f3(k.request.user_message_id, d, W);
                    if (!QA) u(k);
                    else o(k, QA)
                }
                continue
            } else if (k.type === "control_response") {
                if (F.replayUserMessages) H.enqueue(k);
                continue
            } else if (k.type === "keep_alive") continue;
            if (l = !0, k.uuid) {
                let d = G0();
                if (await lH9(d, k.uuid) || TU9.has(k.uuid)) {
                    if (g(`Skipping duplicate user message: ${k.uuid}`), F.replayUserMessages) g(`Sending acknowledgment for duplicate user message: ${k.uuid}`), H.enqueue({
                        type: "user",
                        message: k.message,
                        session_id: d,
                        parent_tool_use_id: null,
                        uuid: k.uuid,
                        isReplay: !0
                    });
                    continue
                }
                TU9.add(k.uuid)
            }
            W((d) => ({
                ...d,
                queuedCommands: [...d.queuedCommands, {
                    mode: "prompt",
                    value: k.message.content,
                    uuid: k.uuid
                }]
            })), p()
        }
        if (K = !0, !V) H.done()
    })(), H
}

function Pf3(A) {
    let Q = async (B, G, Z, I, Y) => {
        let J = await L$(B, G, Z, I, Y);
        if (J.behavior === "allow" || J.behavior === "deny") return J;
        let W = await A.call({
            tool_name: B.name,
            input: G,
            tool_use_id: Y
        }, Z, Q, I);
        if (Z.abortController.signal.aborted) return {
            behavior: "deny",
            message: "Permission prompt was aborted.",
            decisionReason: {
                type: "permissionPromptTool",
                permissionPromptToolName: B.name,
                toolResult: W
            }
        };
        let X = A.mapToolResultToToolResultBlockParam(W.data, "1");
        if (!X.content || !Array.isArray(X.content) || !X.content[0] || X.content[0].type !== "text" || typeof X.content[0].text !== "string") throw Error('Permission prompt tool returned an invalid result. Expected a single text block param with type="text" and a string text value.');
        return TSA(RJ1.parse(S7(X.content[0].text)), A, G, Z)
    };
    return Q
}

function jf3(A, Q, B) {
    if (A === "stdio") return Q.createCanUseTool();
    else if (A) {
        let G = B.find((Z) => Z.name === A);
        if (!G) {
            let Z = `Error: MCP tool ${A} (passed via --permission-prompt-tool) not found. Available MCP tools: ${B.map((I)=>I.name).join(", ")||"none"}`;
            throw process.stderr.write(`${Z}
`), c8(1), Error(Z)
        }
        if (!G.inputJSONSchema) {
            let Z = `Error: tool ${A} (passed via --permission-prompt-tool) must be an MCP tool`;
            throw process.stderr.write(`${Z}
`), c8(1), Error(Z)
        }
        return Pf3(G)
    }
    return L$
}
async function Sf3(A, Q, B, G, Z, I, Y, J, W, X) {
    if (B) {
        G.enqueue({
            type: "control_response",
            response: {
                subtype: "error",
                error: "Already initialized",
                request_id: Q,
                pending_permission_requests: Y.getPendingPermissionRequests()
            }
        });
        return
    }
    if (A.systemPrompt !== void 0) W.systemPrompt = A.systemPrompt;
    if (A.appendSystemPrompt !== void 0) W.appendSystemPrompt = A.appendSystemPrompt;
    if (A.agents) {
        let H = b51(A.agents, "flagSettings");
        X.push(...H)
    }
    let V = c0()?.outputStyle || EK,
        K = await _QA(),
        D = $lA();
    if (A.hooks) {
        let H = {};
        for (let [C, E] of Object.entries(A.hooks)) H[C] = E.map((z) => {
            let w = z.hookCallbackIds.map((N) => {
                return Y.createHookCallback(N, z.timeout)
            });
            return {
                matcher: z.matcher,
                hooks: w
            }
        });
        ZkA(H)
    }
    if (A.jsonSchema) bE0(A.jsonSchema);
    if (G.enqueue({
            type: "control_response",
            response: {
                subtype: "success",
                request_id: Q,
                response: {
                    commands: Z.map((H) => ({
                        name: H.userFacingName(),
                        description: H.description,
                        argumentHint: H.argumentHint || ""
                    })),
                    output_style: V,
                    available_output_styles: Object.keys(K),
                    models: I,
                    account: {
                        email: D?.email,
                        organization: D?.organization,
                        subscriptionType: D?.subscription,
                        tokenSource: D?.tokenSource,
                        apiKeySource: D?.apiKeySource
                    }
                }
            }
        }), J) {
        let C = _H.getInstance().getStatus();
        if (C) G.enqueue({
            type: "auth_status",
            isAuthenticating: C.isAuthenticating,
            output: C.output,
            error: C.error,
            uuid: TJ1(),
            session_id: G0()
        })
    }
}
async function _f3(A, Q, B) {
    if (!JG()) return "Code rewinding is not enabled for the SDK.";
    if (!K91(Q.fileHistory, A)) return `No code checkpoint found for message ${A}`;
    try {
        await PMA((G) => B((Z) => ({
            ...Z,
            fileHistory: G(Z.fileHistory)
        })), A)
    } catch (G) {
        return `Failed to rewind code: ${G.message}`
    }
    return
}

function kf3(A, Q, B, G) {
    if (A.mode === "bypassPermissions" && LJ9()) return G.enqueue({
        type: "control_response",
        response: {
            subtype: "error",
            request_id: Q,
            error: "Cannot set permission mode to bypassPermissions because it is disabled by settings or configuration"
        }
    }), B;
    return G.enqueue({
        type: "control_response",
        response: {
            subtype: "success",
            request_id: Q,
            response: {
                mode: A.mode
            }
        }
    }), {
        ...B,
        mode: A.mode
    }
}
async function yf3(A, Q) {
    if (Q.continue) try {
        BA("tengu_continue_print", {});
        let B = await qi(void 0, void 0);
        if (B) {
            if (!Q.forkSession) {
                if (B.sessionId) FR(B.sessionId), await Zx()
            }
            return PU9(B.fileHistorySnapshots, A), B.messages
        }
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), c8(1), []
    }
    if (Q.teleport) try {
        BA("tengu_teleport_print", {});
        let B = typeof Q.teleport === "string" ? Q.teleport : null;
        await D61();
        let G = await ERA(B);
        return (await HRA(Ug(G.log), G.branch)).messages
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), c8(1), []
    }
    if (Q.resume) try {
        BA("tengu_resume_print", {});
        let B = LU9(typeof Q.resume === "string" ? Q.resume : "");
        if (!B) {
            if (process.stderr.write(`Error: --resume requires a valid session ID when used with --print
`), process.stderr.write(`Usage: claude -p --resume <session-id>
`), typeof Q.resume === "string") process.stderr.write(`Session IDs must be in UUID format (e.g., 550e8400-e29b-41d4-a716-446655440000)
`), process.stderr.write(`Provided value "${Q.resume}" is not a valid UUID
`);
            return c8(1), []
        }
        if (B.isUrl && B.ingressUrl) await dH9(B.sessionId, B.ingressUrl);
        let G = await qi(B.sessionId, B.jsonlFile || void 0);
        if (!G)
            if (B.isUrl) return await zq("startup");
            else return process.stderr.write(`No conversation found with session ID: ${B.sessionId}
`), c8(1), [];
        if (Q.resumeSessionAt) {
            let Z = G.messages.findIndex((I) => I.uuid === Q.resumeSessionAt);
            if (Z < 0) return process.stderr.write(`No message found with message.uuid of: ${Q.resumeSessionAt}
`), c8(1), [];
            G.messages = Z >= 0 ? G.messages.slice(0, Z + 1) : []
        }
        if (!Q.forkSession && G.sessionId) FR(G.sessionId), await Zx();
        return PU9(G.fileHistorySnapshots, A), G.messages
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), process.stderr.write(`Failed to resume session with --print mode
`), c8(1), []
    }
    return await zq("startup")
}

function xf3(A, Q) {
    let B;
    if (typeof A === "string")
        if (A.trim() !== "") B = g00([JSON.stringify({
            type: "user",
            session_id: "",
            message: {
                role: "user",
                content: A
            },
            parent_tool_use_id: null
        })]);
        else B = g00([]);
    else B = A;
    return Q.sdkUrl ? new AD0(Q.sdkUrl, B, Q.replayUserMessages) : new PSA(B, Q.replayUserMessages)
}
async function vf3({
    message: A,
    setAppState: Q,
    onEnqueued: B
}) {
    if (A.response.subtype === "success" && A.response.response?.toolUseID && typeof A.response.response.toolUseID === "string") {
        let G = A.response.response,
            {
                toolUseID: Z
            } = G;
        if (!Z) return !1;
        let I = await nH9(Z);
        if (I) return Q((Y) => ({
            ...Y,
            queuedCommands: [...Y.queuedCommands, {
                mode: "orphaned-permission",
                value: [],
                orphanedPermission: {
                    permissionResult: G,
                    assistantMessage: I
                }
            }]
        })), B?.(), !0
    }
    return !1
}

function PU9(A, Q) {
    if (A && A.length > 0) $YA(A, (B) => Q((G) => ({
        ...G,
        fileHistory: B
    })))
}
var TU9;
var SU9 = L(() => {
    tK0();
    EU9();
    w0();
    D0();
    Oy();
    DWA();
    u1();
    S30();
    aRA();
    wYA();
    wy();
    wi();
    $U9();
    _J();
    qU9();
    O9A();
    W0A();
    aG();
    zV();
    rK0();
    UZ();
    q1A();
    ry();
    RB();
    zWA();
    hB();
    S0();
    oXA();
    MU9();
    GG();
    Tk();
    RU9();
    EE();
    LYA();
    jY1();
    hPA();
    s2();
    S0();
    iU();
    MJ();
    TU9 = new Set
});
async function kU9() {
    BA("tengu_update_check", {}), N9(`Current version: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION}
`), N9(`Checking for updates...
`), g("update: Starting update check"), g("update: Running diagnostic");
    let A = await OIA();
    if (g(`update: Installation type: ${A.installationType}`), g(`update: Config install method: ${A.configInstallMethod}`), A.multipleInstallations.length > 1) {
        N9(`
`), N9(oA.yellow("Warning: Multiple installations found") + `
`);
        for (let J of A.multipleInstallations) {
            let W = A.installationType === J.type ? " (currently running)" : "";
            N9(`- ${J.type} at ${J.path}${W}
`)
        }
    }
    if (A.warnings.length > 0) {
        N9(`
`);
        for (let J of A.warnings) g(`update: Warning detected: ${J.issue}`), g(`update: Showing warning: ${J.issue}`), N9(oA.yellow(`Warning: ${J.issue}
`)), N9(oA.bold(`Fix: ${J.fix}
`))
    }
    let Q = L1();
    if (!Q.installMethod && A.installationType !== "package-manager") {
        N9(`
`), N9(`Updating configuration to track installation method...
`);
        let J = "unknown";
        switch (A.installationType) {
            case "npm-local":
                J = "local";
                break;
            case "native":
                J = "native";
                break;
            case "npm-global":
                J = "global";
                break;
            default:
                J = "unknown"
        }
        d0({
            ...Q,
            installMethod: J
        }), N9(`Installation method set to: ${J}
`)
    }
    if (A.installationType === "development") N9(`
`), N9(oA.yellow("Warning: Cannot update development build") + `
`), await S6(1);
    if (A.installationType === "package-manager") {
        let J = MIA();
        if (N9(`
`), J === "homebrew") {
            N9(`Claude is managed by Homebrew.
`);
            let W = await iAA();
            if (W && !_U9.gte({
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://docs.claude.com/s/claude-code",
                    VERSION: "2.0.57",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                }.VERSION, W, {
                    loose: !0
                })) N9(`Update available: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION} → ${W}
`), N9(`
`), N9(`To update, run:
`), N9(oA.bold("  brew upgrade claude-code") + `
`);
            else N9(`Claude is up to date!
`)
        } else N9(`Claude is managed by a package manager.
`), N9(`Please use your package manager to update.
`);
        await S6(0)
    }
    if (Q.installMethod && A.configInstallMethod !== "not set" && A.installationType !== "package-manager") {
        let {
            installationType: J,
            configInstallMethod: W
        } = A, F = {
            "npm-local": "local",
            "npm-global": "global",
            native: "native",
            development: "development",
            unknown: "unknown"
        } [J] || J;
        if (F !== W && W !== "unknown") N9(`
`), N9(oA.yellow("Warning: Configuration mismatch") + `
`), N9(`Config expects: ${W} installation
`), N9(`Currently running: ${J}
`), N9(oA.yellow(`Updating the ${J} installation you are currently using`) + `
`), d0({
            ...Q,
            installMethod: F
        }), N9(`Config updated to reflect current installation method: ${F}
`)
    }
    if (A.installationType === "native") {
        g("update: Detected native installation, using native updater");
        try {
            let J = await th();
            if (J.lockFailed) N9(oA.yellow("Another process is currently updating Claude. Please try again in a moment.") + `
`), await S6(0);
            if (!J.latestVersion) process.stderr.write(`Failed to check for updates
`), await S6(1);
            if (J.latestVersion === {
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://docs.claude.com/s/claude-code",
                    VERSION: "2.0.57",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                }.VERSION) N9(oA.green(`Claude Code is up to date (${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION})`) + `
`);
            else if (J.wasUpdated) N9(oA.green(`Successfully updated from ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION} to version ${J.latestVersion}`) + `
`);
            else N9(oA.green(`Claude Code is up to date (${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION})`) + `
`);
            await S6(0)
        } catch (J) {
            process.stderr.write(`Error: Failed to install native update
`), process.stderr.write(String(J) + `
`), process.stderr.write(`Try running "claude doctor" for diagnostics
`), await S6(1)
        }
    }
    if (Q.installMethod !== "native") kTA();
    g("update: Checking npm registry for latest version"), g(`update: Package URL: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}`);
    let B = `npm view ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}@latest version`;
    g(`update: Running: ${B}`);
    let G = await iAA();
    if (g(`update: Latest version from npm: ${G||"FAILED"}`), !G) {
        if (g("update: Failed to get latest version from npm registry"), process.stderr.write(oA.red("Failed to check for updates") + `
`), process.stderr.write(`Unable to fetch latest version from npm registry
`), process.stderr.write(`
`), process.stderr.write(`Possible causes:
`), process.stderr.write(`  • Network connectivity issues
`), process.stderr.write(`  • npm registry is unreachable
`), process.stderr.write(`  • Corporate proxy/firewall blocking npm
`), {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.PACKAGE_URL && !{
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.PACKAGE_URL.startsWith("@anthropic")) process.stderr.write(`  • Internal/development build not published to npm
`);
        process.stderr.write(`
`), process.stderr.write(`Try:
`), process.stderr.write(`  • Check your internet connection
`), process.stderr.write(`  • Run with --debug flag for more details
`);
        let J = {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.PACKAGE_URL || "@anthropic-ai/claude-code";
        process.stderr.write(`  • Manually check: npm view ${J} version
`), process.stderr.write(`  • Check if you need to login: npm whoami
`), await S6(1)
    }
    if (G === {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION) N9(oA.green(`Claude Code is up to date (${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION})`) + `
`), await S6(0);
    N9(`New version available: ${G} (current: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION})
`), N9(`Installing update...
`);
    let Z = !1,
        I = "";
    switch (A.installationType) {
        case "npm-local":
            Z = !0, I = "local";
            break;
        case "npm-global":
            Z = !1, I = "global";
            break;
        case "unknown": {
            let J = sl();
            Z = J, I = J ? "local" : "global", N9(oA.yellow("Warning: Could not determine installation type") + `
`), N9(`Attempting ${I} update based on file detection...
`);
            break
        }
        default:
            process.stderr.write(`Error: Cannot update ${A.installationType} installation
`), await S6(1)
    }
    N9(`Using ${I} installation update method...
`), g(`update: Update method determined: ${I}`), g(`update: useLocalUpdate: ${Z}`);
    let Y;
    if (Z) g("update: Calling installOrUpdateClaudePackage() for local update"), Y = await cAA();
    else g("update: Calling installGlobalPackage() for global update"), Y = await wLA();
    switch (g(`update: Installation status: ${Y}`), Y) {
        case "success":
            N9(oA.green(`Successfully updated from ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION} to version ${G}`) + `
`);
            break;