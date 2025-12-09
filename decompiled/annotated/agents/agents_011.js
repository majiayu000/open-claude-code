/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: agents_011.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   tI       (1次) = TODO_READ_TOOL = TodoRead tool object
 *   L        (1次) = lazyLoader(fn) - Lazy module loader
 *   M8       (1次) = shellEscape() - Shell escape utility
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 11/13
 * Lines: 436688 - 438186 (1499 lines)
 * Original file: cli.js
 */

function MjA(A) {
    switch (A.type) {
        case "attachment":
            if (DFA(A)) return A.attachment.toolUseID;
            return null;
        case "assistant":
            if (A.message.content[0]?.type !== "tool_use") return null;
            return A.message.content[0].id;
        case "user":
            if (A.sourceToolUseID) return A.sourceToolUseID;
            if (A.message.content[0]?.type !== "tool_result") return null;
            return A.message.content[0].tool_use_id;
        case "progress":
            return A.toolUseID;
        case "system":
            return A.subtype === "informational" ? A.toolUseID ?? null : null
    }
}

function UI2(A) {
    let Q = lJ(A),
        B = TX0(Q);
    return Q.filter((Z, I) => {
        if (Z.type === "assistant" && Z.message.content[0]?.type === "tool_use" && B.has(Z.message.content[0].id)) return !1;
        return !0
    })
}

function Ui(A) {
    if (A.type !== "assistant") return null;
    if (Array.isArray(A.message.content)) return A.message.content.filter((Q) => Q.type === "text").map((Q) => Q.type === "text" ? Q.text : "").join(`
`).trim() || null;
    return null
}

function yXA(A) {
    if (typeof A === "string") return A;
    if (Array.isArray(A)) return A.filter((Q) => Q.type === "text").map((Q) => Q.type === "text" ? Q.text : "").join(`
`).trim() || null;
    return null
}

function RQA(A, Q, B, G, Z) {
    if (A.type !== "stream_event" && A.type !== "stream_request_start") {
        Q(A);
        return
    }
    if (A.type === "stream_request_start") {
        G("requesting");
        return
    }
    if (A.event.type === "message_stop") {
        G("tool-use"), Z(() => []);
        return
    }
    switch (A.event.type) {
        case "content_block_start":
            switch (A.event.content_block.type) {
                case "thinking":
                case "redacted_thinking":
                    G("thinking");
                    return;
                case "text":
                    G("responding");
                    return;
                case "tool_use": {
                    G("tool-input");
                    let I = A.event.content_block,
                        Y = A.event.index;
                    Z((J) => [...J, {
                        index: Y,
                        contentBlock: I,
                        unparsedToolInput: ""
                    }]);
                    return
                }
                case "server_tool_use":
                case "web_search_tool_result":
                case "code_execution_tool_result":
                case "mcp_tool_use":
                case "mcp_tool_result":
                case "container_upload":
                case "web_fetch_tool_result":
                case "bash_code_execution_tool_result":
                case "text_editor_code_execution_tool_result":
                    G("tool-input");
                    return
            }
            break;
        case "content_block_delta":
            switch (A.event.delta.type) {
                case "text_delta":
                    B(A.event.delta.text);
                    return;
                case "input_json_delta": {
                    let I = A.event.delta.partial_json,
                        Y = A.event.index;
                    B(I), Z((J) => {
                        let W = J.find((X) => X.index === Y);
                        if (!W) return J;
                        return [...J.filter((X) => X !== W), {
                            ...W,
                            unparsedToolInput: W.unparsedToolInput + I
                        }]
                    });
                    return
                }
                case "thinking_delta":
                    B(A.event.delta.thinking);
                    return;
                case "signature_delta":
                    B(A.event.delta.signature);
                    return;
                default:
                    return
            }
        case "message_delta":
            G("responding");
            return;
        default:
            G("responding");
            return
    }
}

function mg(A) {
    return `<system-reminder>
${A}
</system-reminder>`
}

function gG(A) {
    return A.map((Q) => {
        if (typeof Q.message.content === "string") return {
            ...Q,
            message: {
                ...Q.message,
                content: mg(Q.message.content)
            }
        };
        else if (Array.isArray(Q.message.content)) {
            let B = Q.message.content.map((G) => {
                if (G.type === "text") return {
                    ...G,
                    text: mg(G.text)
                };
                return G
            });
            return {
                ...Q,
                message: {
                    ...Q.message,
                    content: B
                }
            }
        }
        return Q
    })
}

function fy3(A) {
    if (A.isSubAgent) return gy3(A);
    return hy3(A)
}

function hy3(A) {
    if (A.isSubAgent) return [];
    let Q = _H9(),
        B = kH9(),
        Z = `Plan mode is active. The user indicated that they do not want you to execute yet -- you MUST NOT make any edits (with the exception of the plan file mentioned below), run any non-readonly tools (including changing configs or making commits), or otherwise make any changes to the system. This supercedes any other instructions you have received.

## Plan File Info:
${A.planExists?`A plan file already exists at ${A.planFilePath}. You can read it and make incremental edits using the ${gD.name} tool.`:`No plan file exists yet. You should create your plan at ${A.planFilePath} using the ${oX.name} tool.`}
You should build your plan incrementally by writing to or editing this file. NOTE that this is the only file you are allowed to edit - other than this you are only allowed to take READ-ONLY actions.

## Plan Workflow

### Phase 1: Initial Understanding
Goal: Gain a comprehensive understanding of the user's request by reading through code and asking them questions. Critical: In this phase you should only use the ${Sq.agentType} subagent type.

1. Focus on understanding the user's request and the code associated with their request

2. **Launch up to ${B} ${Sq.agentType} agents IN PARALLEL** (single message, multiple tool calls) to efficiently explore the codebase.
   - Use 1 agent when the task is isolated to known files, the user provided specific file paths, or you're making a small targeted change.
   - Use multiple agents when: the scope is uncertain, multiple areas of the codebase are involved, or you need to understand existing patterns before planning.
   - Quality over quantity - ${B} agents maximum, but you should try to use the minimum number of agents necessary (usually just 1)
   - If using multiple agents: Provide each agent with a specific search focus or area to explore. Example: One agent searches for existing implementations, another explores related components, a third investigates testing patterns

3. After exploring the code, use the ${dJ} tool to clarify ambiguities in the user request up front.

### Phase 2: Design
Goal: Design an implementation approach.

Launch ${$WA.agentType} agent(s) to design the implementation based on the user's intent and your exploration results from Phase 1.

You can launch up to ${Q} agent(s) in parallel.

**Guidelines:**
- **Default**: Launch at least 1 Plan agent for most tasks - it helps validate your understanding and consider alternatives
- **Skip agents**: Only for truly trivial tasks (typo fixes, single-line changes, simple renames)
${Q>1?`- **Multiple agents**: Use up to ${Q} agents for complex tasks that benefit from different perspectives

Examples of when to use multiple agents:
- The task touches multiple parts of the codebase
- It's a large refactor or architectural change
- There are many edge cases to consider
- You'd benefit from exploring different approaches

Example perspectives by task type:
- New feature: simplicity vs performance vs maintainability
- Bug fix: root cause vs workaround vs prevention
- Refactoring: minimal change vs clean architecture
`:""}
In the agent prompt:
- Provide comprehensive background context from Phase 1 exploration including filenames and code path traces
- Describe requirements and constraints
- Request a detailed implementation plan

### Phase 3: Review
Goal: Review the plan(s) from Phase 2 and ensure alignment with the user's intentions.
1. Read the critical files identified by agents to deepen your understanding
2. Ensure that the plans align with the user's original request
3. Use ${dJ} to clarify any remaining questions with the user

### Phase 4: Final Plan
Goal: Write your final plan to the plan file (the only file you can edit).
- Include only your recommended approach, not all alternatives
- Ensure that the plan file is concise enough to scan quickly, but detailed enough to execute effectively
- Include the paths of critical files to be modified

### Phase 5: Call ${xq.name}
At the very end of your turn, once you have asked the user questions and are happy with your final plan file - you should always call ${xq.name} to indicate to the user that you are done planning.
This is critical - your turn should only end with either asking the user a question or calling ${xq.name}. Do not stop unless it's for these 2 reasons.

NOTE: At any point in time through this workflow you should feel free to ask the user questions or clarifications. Don't make large assumptions about user intent. The goal is to present a well researched plan to the user, and tie any loose ends before implementation begins.`;
    return gG([j0({
        content: Z,
        isMeta: !0
    })])
}

function gy3(A) {
    let B = `Plan mode is active. The user indicated that they do not want you to execute yet -- you MUST NOT make any edits, run any non-readonly tools (including changing configs or making commits), or otherwise make any changes to the system. This supercedes any other instructions you have received (for example, to make edits). Instead, you should:

## Plan File Info:
${A.planExists?`A plan file already exists at ${A.planFilePath}. You can read it and make incremental edits using the ${gD.name} tool if you need to.`:`No plan file exists yet. You should create your plan at ${A.planFilePath} using the ${oX.name} tool if you need to.`}
You should build your plan incrementally by writing to or editing this file. NOTE that this is the only file you are allowed to edit - other than this you are only allowed to take READ-ONLY actions.
Answer the user's query comprehensively, using the ${dJ} tool if you need to ask the user clarifying questions. If you do use the ${dJ}, make sure to ask all clarifying questions you need to fully understand the user's intent before proceeding.`;
    return gG([j0({
        content: B,
        isMeta: !0
    })])
}

function uy3(A) {
    switch (A.type) {
        case "directory":
            return gG([DSA(X9.name, {
                command: `ls ${M8([A.path])}`,
                description: `Lists files in ${A.path}`
            }), KSA(X9, {
                stdout: A.content,
                stderr: "",
                interrupted: !1
            })]);
        case "edited_text_file":
            return gG([j0({
                content: `Note: ${A.filename} was modified, either by the user or by a linter. This change was intentional, so make sure to take it into account as you proceed (ie. don't revert it unless the user asks you to). Don't tell the user this, since they are already aware. Here are the relevant changes (shown with line numbers):
${A.snippet}`,
                isMeta: !0
            })]);
        case "file": {
            let B = A.content;
            switch (B.type) {
                case "image":
                    return gG([DSA(d8.name, {
                        file_path: A.filename
                    }), KSA(d8, B)]);
                case "text":
                    return gG([DSA(d8.name, {
                        file_path: A.filename
                    }), KSA(d8, B), ...A.truncated ? [j0({
                        content: `Note: The file ${A.filename} was too large and has been truncated to the first ${ezA} lines. Don't tell the user about this truncation. Use ${d8.name} to read more of the file if you need.`,
                        isMeta: !0
                    })] : []]);
                case "notebook":
                    return gG([DSA(d8.name, {
                        file_path: A.filename
                    }), KSA(d8, B)]);
                case "pdf":
                    return gG([DSA(d8.name, {
                        file_path: A.filename
                    }), KSA(d8, B)])
            }
            break
        }
        case "compact_file_reference":
            return gG([j0({
                content: `Note: ${A.filename} was read before the last conversation was summarized, but the contents are too large to include. Use ${d8.name} tool if you need to access it.`,
                isMeta: !0
            })]);
        case "selected_lines_in_ide": {
            let G = A.content.length > 2000 ? A.content.substring(0, 2000) + `
... (truncated)` : A.content;
            return gG([j0({
                content: `The user selected the lines ${A.lineStart} to ${A.lineEnd} from ${A.filename}:
${G}

This may or may not be related to the current task.`,
                isMeta: !0
            })])
        }
        case "opened_file_in_ide":
            return gG([j0({
                content: `The user opened the file ${A.filename} in the IDE. This may or may not be related to the current task.`,
                isMeta: !0
            })]);
        case "todo":
            if (A.itemCount === 0) return gG([j0({
                content: `This is a reminder that your todo list is currently empty. DO NOT mention this to the user explicitly because they are already aware. If you are working on tasks that would benefit from a todo list please use the ${tI.name} tool to create one. If not, please feel free to ignore. Again do not mention this message to the user.`,
                isMeta: !0
            })]);
            else return gG([j0({
                content: `Your todo list has changed. DO NOT mention this explicitly to the user. Here are the latest contents of your todo list:

${JSON.stringify(A.content)}. Continue on with the tasks at hand if applicable.`,
                isMeta: !0
            })]);
        case "plan_file_reference":
            return gG([j0({
                content: `A plan file exists from plan mode at: ${A.planFilePath}

Plan contents:

${A.planContent}

If this plan is relevant to the current work and not already complete, continue working on it.`,
                isMeta: !0
            })]);
        case "todo_reminder": {
            let B = A.content.map((Z, I) => `${I+1}. [${Z.status}] ${Z.content}`).join(`
`),
                G = `The TodoWrite tool hasn't been used recently. If you're working on tasks that would benefit from tracking progress, consider using the TodoWrite tool to track progress. Also consider cleaning up the todo list if has become stale and no longer matches what you are working on. Only use it if it's relevant to the current work. This is just a gentle reminder - ignore if not applicable. Make sure that you NEVER mention this reminder to the user
`;
            if (B.length > 0) G += `

Here are the existing contents of your todo list:

[${B}]`;
            return gG([j0({
                content: G,
                isMeta: !0
            })])
        }
        case "nested_memory":
            return gG([j0({
                content: `Contents of ${A.content.path}:

${A.content.content}`,
                isMeta: !0
            })]);
        case "queued_command": {
            let B = Array.isArray(A.prompt) ? A.prompt.map((G) => G.type === "text" ? G.text : "").join(`
`) : A.prompt;
            return gG([j0({
                content: `The user sent the following message:
${B}

Please address this message and continue with your tasks.`,
                isMeta: !0
            })])
        }
        case "ultramemory":
            return gG([j0({
                content: A.content,
                isMeta: !0
            })]);
        case "output_style": {
            let B = zQA[A.style];
            if (!B) return [];
            return gG([j0({
                content: `${B.name} output style is active. Remember to follow the specific guidelines for this style.`,
                isMeta: !0
            })])
        }
        case "diagnostics": {
            if (A.files.length === 0) return [];
            let B = QP.formatDiagnosticsSummary(A.files);
            return gG([j0({
                content: `<new-diagnostics>The following new diagnostic issues were detected:

${B}</new-diagnostics>`,
                isMeta: !0
            })])
        }
        case "plan_mode":
            return fy3(A);
        case "plan_mode_reentry": {
            let B = `## Re-entering Plan Mode

You are returning to plan mode after having previously exited it. A plan file exists at ${A.planFilePath} from your previous planning session.

**Before proceeding with any new planning, you should:**
1. Read the existing plan file to understand what was previously planned
2. Evaluate the user's current request against that plan
3. Decide how to proceed:
   - **Different task**: If the user's request is for a different task—even if it's similar or related—start fresh by overwriting the existing plan
   - **Same task, continuing**: If this is explicitly a continuation or refinement of the exact same task, modify the existing plan while cleaning up outdated or irrelevant sections
4. Continue on with the plan process and most importantly you should always edit the plan file one way or the other before calling ${xq.name}

Treat this as a fresh planning session. Do not assume the existing plan is relevant without evaluating it first.`;
            return gG([j0({
                content: B,
                isMeta: !0
            })])
        }
        case "mcp_resource": {
            let B = A.content;
            if (!B || !B.contents || B.contents.length === 0) return gG([j0({
                content: `<mcp-resource server="${A.server}" uri="${A.uri}">(No content)</mcp-resource>`,
                isMeta: !0
            })]);
            let G = [];
            for (let Z of B.contents)
                if (Z && typeof Z === "object") {
                    if ("text" in Z && typeof Z.text === "string") G.push({
                        type: "text",
                        text: "Full contents of resource:"
                    }, {
                        type: "text",
                        text: Z.text
                    }, {
                        type: "text",
                        text: "Do NOT read this resource again unless you think it may have changed, since you already have the full contents."
                    });
                    else if ("blob" in Z) {
                        let I = "mimeType" in Z ? String(Z.mimeType) : "application/octet-stream";
                        G.push({
                            type: "text",
                            text: `[Binary content: ${I}]`
                        })
                    }
                } if (G.length > 0) return gG([j0({
                content: G,
                isMeta: !0
            })]);
            else return f0(A.server, `No displayable content found in MCP resource ${A.uri}.`), gG([j0({
                content: `<mcp-resource server="${A.server}" uri="${A.uri}">(No displayable content)</mcp-resource>`,
                isMeta: !0
            })])
        }
        case "agent_mention":
            return gG([j0({
                content: `The user has expressed a desire to invoke the agent "${A.agentType}". Please invoke the agent appropriately, passing in the required context to it. `,
                isMeta: !0
            })]);
        case "background_remote_session_status":
            return gG([j0({
                content: `<background-remote-session-status>Task id:${A.taskId}
Title:${A.title}
Status:${A.status}
Delta summary since last flush:${A.deltaSummarySinceLastFlushToAttachment}</background-remote-session-status>`,
                isMeta: !0
            })]);
        case "background_shell_status": {
            let B = [`Background Bash ${A.taskId}`, `(command: ${A.command})`, `(status: ${A.status})`];
            if (A.exitCode !== void 0) B.push(`(exit code: ${A.exitCode})`);
            if (A.hasNewOutput) B.push("Has new output available. You can check its output using the BashOutput tool.");
            return [j0({
                content: mg(B.join(" ")),
                isMeta: !0
            })]
        }
        case "async_hook_response": {
            let B = A.response,
                G = [];
            if (B.systemMessage) G.push(j0({
                content: B.systemMessage,
                isMeta: !0
            }));
            if (B.hookSpecificOutput && "additionalContext" in B.hookSpecificOutput && B.hookSpecificOutput.additionalContext) G.push(j0({
                content: B.hookSpecificOutput.additionalContext,
                isMeta: !0
            }));
            return gG(G)
        }
        case "async_agent_status": {
            let B = A.status,
                G = A.error ? `: ${A.error}` : "";
            return [j0({
                content: `<system-notification>Async agent "${A.description}" ${B}${G}. The output can be retrieved using AgentOutputTool with agentId: "${A.agentId}"</system-notification>`,
                isMeta: !0
            })]
        }
        case "memory": {
            let B = A.memories.map((G) => {
                let Z = G.remainingLines && G.remainingLines > 0 ? ` (${G.remainingLines} more lines in full file)` : "";
                return `## Previous Session (${(G.lastModified instanceof Date?G.lastModified:new Date(G.lastModified)).toLocaleDateString()})
Full session notes: ${G.fullPath}${Z}

${G.content}`
            }).join(`

---

`);
            return gG([j0({
                content: `<session-memory>
These session summaries are from PAST sessions that might not be related to the current task and may have outdated info. Do not assume the current task is related to these summaries, until the user's messages indicate so or reference similar tasks. Only a preview of each memory is shown - use the Read tool with the provided path to access full session memory when a session is relevant.

${B}
</session-memory>`,
                isMeta: !0
            })])
        }
        case "token_usage":
            return [j0({
                content: mg(`Token usage: ${A.used}/${A.total}; ${A.remaining} remaining`),
                isMeta: !0
            })];
        case "budget_usd":
            return [j0({
                content: mg(`USD budget: $${A.used}/$${A.total}; $${A.remaining} remaining`),
                isMeta: !0
            })];
        case "hook_blocking_error":
            return [j0({
                content: mg(`${A.hookName} hook blocking error from command: "${A.blockingError.command}": ${A.blockingError.blockingError}`),
                isMeta: !0
            })];
        case "hook_success":
            if (A.hookEvent !== "SessionStart" && A.hookEvent !== "UserPromptSubmit") return [];
            if (A.content === "") return [];
            return [j0({
                content: mg(`${A.hookName} hook success: ${A.content}`),
                isMeta: !0
            })];
        case "hook_additional_context": {
            if (A.content.length === 0) return [];
            return [j0({
                content: mg(`${A.hookName} hook additional context: ${A.content.join(`
`)}`),
                isMeta: !0
            })]
        }
        case "hook_stopped_continuation":
            return [j0({
                content: mg(`${A.hookName} hook stopped continuation: ${A.message}`),
                isMeta: !0
            })];
        case "already_read_file":
        case "command_permissions":
        case "edited_image_file":
        case "hook_cancelled":
        case "hook_error_during_execution":
        case "hook_non_blocking_error":
        case "hook_system_message":
        case "structured_output":
        case "hook_permission_decision":
            return []
    }
    if (["autocheckpointing", "background_task_status"].includes(A.type)) return [];
    return yN("normalizeAttachmentForAPI", Error(`Unknown attachment type: ${A.type}`)), []
}

function KSA(A, Q) {
    try {
        let B = A.mapToolResultToToolResultBlockParam(Q, "1");
        if (Array.isArray(B.content) && B.content.some((G) => G.type === "image")) return j0({
            content: B.content,
            isMeta: !0
        });
        return j0({
            content: `Result of calling the ${A.name} tool: ${JSON.stringify(B.content)}`,
            isMeta: !0
        })
    } catch {
        return j0({
            content: `Result of calling the ${A.name} tool: Error`,
            isMeta: !0
        })
    }
}

function DSA(A, Q) {
    return j0({
        content: `Called the ${A} tool with the following input: ${JSON.stringify(Q)}`,
        isMeta: !0
    })
}

function Vy(A, Q, B, G) {
    return {
        type: "system",
        subtype: "informational",
        content: A,
        isMeta: !1,
        timestamp: new Date().toISOString(),
        uuid: uO(),
        toolUseID: B,
        level: Q,
        ...G && {
            preventContinuation: G
        }
    }
}

function Wb2(A, Q, B, G, Z, I, Y, J) {
    return {
        type: "system",
        subtype: "stop_hook_summary",
        hookCount: A,
        hookInfos: Q,
        hookErrors: B,
        preventedContinuation: G,
        stopReason: Z,
        hasOutput: I,
        level: Y,
        timestamp: new Date().toISOString(),
        uuid: uO(),
        toolUseID: J
    }
}

function uX0(A) {
    return {
        type: "system",
        subtype: "local_command",
        content: A,
        level: "info",
        timestamp: new Date().toISOString(),
        uuid: uO(),
        isMeta: !1
    }
}

function B91(A, Q) {
    return {
        type: "system",
        subtype: "compact_boundary",
        content: "Conversation compacted",
        isMeta: !1,
        timestamp: new Date().toISOString(),
        uuid: uO(),
        level: "info",
        compactMetadata: {
            trigger: A,
            preTokens: Q
        }
    }
}

function jS2(A, Q, B, G) {
    return {
        type: "system",
        subtype: "api_error",
        level: "error",
        cause: A.cause instanceof Error ? A.cause : void 0,
        error: A,
        retryInMs: Q,
        retryAttempt: B,
        maxRetries: G,
        timestamp: new Date().toISOString(),
        uuid: uO()
    }
}

function TQA(A) {
    return A?.type === "system" && A.subtype === "compact_boundary"
}

function my3(A) {
    for (let Q = A.length - 1; Q >= 0; Q--) {
        let B = A[Q];
        if (B && TQA(B)) return Q
    }
    return -1
}

function gk(A) {
    let Q = my3(A);
    if (Q === -1) return A;
    return A.slice(Q)
}

function m69(A, Q) {
    if (A.type !== "user") return !0;
    if (A.isMeta) return !1;
    if (A.isVisibleInTranscriptOnly && !Q) return !1;
    return !0
}

function h00(A) {
    if (A.type !== "assistant") return !1;
    if (!Array.isArray(A.message.content)) return !1;
    return A.message.content.every((Q) => Q.type === "thinking")
}

function iV0(A, Q, B) {
    let G = 0;
    for (let Z of A) {
        if (!Z) continue;
        if (Z.type === "assistant" && Array.isArray(Z.message.content)) {
            if (Z.message.content.some((Y) => Y.type === "tool_use" && Y.name === Q)) {
                if (G++, B && G >= B) return G
            }
        }
    }
    return G
}

function tI1(A, Q) {
    let B;
    for (let G = A.length - 1; G >= 0; G--) {
        let Z = A[G];
        if (!Z) continue;
        if (Z.type === "assistant" && Array.isArray(Z.message.content)) {
            let I = Z.message.content.find((Y) => Y.type === "tool_use" && Y.name === Q);
            if (I) {
                B = I.id;
                break
            }
        }
    }
    if (!B) return !1;
    for (let G = A.length - 1; G >= 0; G--) {
        let Z = A[G];
        if (!Z) continue;
        if (Z.type === "user" && Array.isArray(Z.message.content)) {
            let I = Z.message.content.find((Y) => Y.type === "tool_result" && Y.tool_use_id === B);
            if (I) return I.is_error !== !0
        }
    }
    return !1
}

function vH9(A) {
    return A.type === "thinking" || A.type === "redacted_thinking"
}

function dy3(A) {
    let Q = A[A.length - 1];
    if (!Q || Q.type !== "assistant") return A;
    let B = Q.message.content,
        G = B[B.length - 1];
    if (!G || !vH9(G)) return A;
    let Z = B.length - 1;
    while (Z >= 0) {
        let J = B[Z];
        if (!J || !vH9(J)) break;
        Z--
    }
    BA("tengu_filtered_trailing_thinking_block", {
        messageUUID: Q.uuid,
        blocksRemoved: B.length - Z - 1,
        remainingBlocks: Z + 1
    });
    let I = Z < 0 ? [{
            type: "text",
            text: "[No message content]",
            citations: []
        }] : B.slice(0, Z + 1),
        Y = [...A];
    return Y[A.length - 1] = {
        ...Q,
        message: {
            ...Q.message,
            content: I
        }
    }, Y
}
var xJA = "[Request interrupted by user]",
    DO = "[Request interrupted by user for tool use]",
    IW0 = "Tool call rejected -- yielding control back to user for further instructions.",
    HWA = "The user doesn't want to take this action right now. STOP what you are doing and wait for the user to tell you how to proceed.",
    iPA = "The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). STOP what you are doing and wait for the user to tell you how to proceed.",
    pPA = `The user doesn't want to proceed with this tool use. The tool use was rejected (eg. if it was a file edit, the new_string was NOT written to the file). To tell you how to proceed, the user said:
`,
    NJ0 = `The agent proposed a plan that was rejected by the user. The user chose to stay in plan mode rather than proceed with implementation.

Rejected plan:
`,
    $1A = "No response requested.",
    K00, by3;
var nQ = L(() => {
    jN();
    O9A();
    w0();
    ry();
    tM();
    KH();
    C1A();
    Kq();
    Ht();
    zV();
    u1();
    D0();
    xV();
    mh();
    nV();
    x51();
    yH9();
    UWA();
    Wn();
    gh();
    RTA();
    K00 = new Set([xJA, DO, HWA, iPA, IW0, $1A]);
    by3 = ["commit_analysis", "context", "function_analysis", "pr_analysis"]
});
import {
    join as dg
} from "path";
import {
    basename as cy3
} from "path";

function S80(A) {
    return A.type === "user" || A.type === "assistant" || A.type === "attachment" || A.type === "system"
}

function HFA() {
    return dg(PQ(), "projects")
}

function yJA() {
    return djA(G0())
}

function djA(A) {
    let Q = uH(za);
    return dg(Q, `${A}.jsonl`)
}

function eXA(A) {
    let Q = uH(za);
    return dg(Q, `agent-${A}.jsonl`)
}

function gH9(A) {
    let Q = uH(za),
        B = dg(Q, `${A}.jsonl`),
        G = OA();
    try {
        return G.statSync(B), !0
    } catch {
        return !1
    }
}

function py3() {
    return "production"
}

function uH9() {
    return "external"
}

function ly3(A) {
    return A.replace(/[^a-zA-Z0-9]/g, "-")
}

function uH(A) {
    return dg(HFA(), ly3(A))
}

function j$() {
    if (!rY1) {
        if (rY1 = new mH9, !hH9) wG(async () => {
            await rY1?.flush()
        }), hH9 = !0
    }
    return rY1
}
class mH9 {
    summaries;
    customTitles;
    messages;
    fileHistorySnapshots;
    didLoad = !1;
    sessionFile = null;
    remoteIngressUrl = null;
    pendingWriteCount = 0;
    flushResolvers = [];
    constructor() {
        this.summaries = new Map, this.customTitles = new Map, this.messages = new Map, this.fileHistorySnapshots = new Map
    }
    incrementPendingWrites() {
        this.pendingWriteCount++
    }
    decrementPendingWrites() {
        if (this.pendingWriteCount--, this.pendingWriteCount === 0) {
            for (let A of this.flushResolvers) A();
            this.flushResolvers = []
        }
    }
    async trackWrite(A) {
        this.incrementPendingWrites();
        try {
            return await A()
        } finally {
            this.decrementPendingWrites()
        }
    }
    async flush() {
        if (this.pendingWriteCount === 0) return;
        return new Promise((A) => {
            this.flushResolvers.push(A)
        })
    }
    async insertMessageChain(A, Q = !1, B) {
        return this.trackWrite(async () => {
            let G = null,
                Z;
            try {
                Z = await mb()
            } catch {
                Z = void 0
            }
            let I = G0(),
                Y = JVA().get(I);
            for (let J of A) {
                let W = TQA(J),
                    X = {
                        parentUuid: W ? null : G,
                        logicalParentUuid: W ? G : void 0,
                        isSidechain: Q,
                        userType: uH9(),
                        cwd: H0(),
                        sessionId: I,
                        version: {
                            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                            PACKAGE_URL: "@anthropic-ai/claude-code",
                            README_URL: "https://docs.claude.com/s/claude-code",
                            VERSION: "2.0.57",
                            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                        }.VERSION,
                        gitBranch: Z,
                        agentId: B,
                        slug: Y,
                        ...J
                    };
                this.messages.set(J.uuid, X), await this.appendEntry(X), G = J.uuid
            }
        })
    }
    async insertFileHistorySnapshot(A, Q, B) {
        return this.trackWrite(async () => {
            let G = {
                type: "file-history-snapshot",
                messageId: A,
                snapshot: Q,
                isSnapshotUpdate: B
            };
            await this.appendEntry(G)
        })
    }
    async insertQueueOperation(A) {
        return this.trackWrite(async () => {
            await this.appendEntry(A)
        })
    }
    async appendEntry(A) {
        let Q = process.env.TEST_ENABLE_SESSION_PERSISTENCE === "true";
        if (py3() === "test" && !Q || c0()?.cleanupPeriodDays === 0) return;
        let B = OA();
        if (this.sessionFile === null) {
            let Z = uH(za);
            try {
                B.statSync(Z)
            } catch {
                B.mkdirSync(Z)
            }
            this.sessionFile = yJA();
            try {
                B.statSync(this.sessionFile)
            } catch {
                B.writeFileSync(this.sessionFile, "", {
                    encoding: "utf8",
                    flush: !0,
                    mode: 384
                })
            }
        }
        if (this.sessionFile !== null) try {
            B.statSync(this.sessionFile)
        } catch {
            let Z = uH(za);
            try {
                B.statSync(Z)
            } catch {
                B.mkdirSync(Z)
            }
            B.writeFileSync(this.sessionFile, "", {
                encoding: "utf8",
                flush: !0,
                mode: 384
            })
        }
        let G = G0();
        if (A.type === "summary") B.appendFileSync(this.sessionFile, JSON.stringify(A) + `
`, {
            mode: 384
        });
        else if (A.type === "custom-title") B.appendFileSync(this.sessionFile, JSON.stringify(A) + `
`, {
            mode: 384
        });
        else if (A.type === "file-history-snapshot") B.appendFileSync(this.sessionFile, JSON.stringify(A) + `
`, {
            mode: 384
        });
        else {
            let Z = await pH9(G);
            if (A.type === "queue-operation") B.appendFileSync(this.sessionFile, JSON.stringify(A) + `
`, {
                mode: 384
            });
            else {
                let I = A.isSidechain && A.agentId !== void 0,
                    Y = I ? eXA(A.agentId) : this.sessionFile;
                if (I) try {
                    B.statSync(Y)
                } catch {
                    let J = uH(za);
                    try {
                        B.statSync(J)
                    } catch {
                        B.mkdirSync(J)
                    }
                    B.writeFileSync(Y, "", {
                        encoding: "utf8",
                        flush: !0,
                        mode: 384
                    })
                }
                if (!Z.has(A.uuid)) {
                    if (B.appendFileSync(Y, JSON.stringify(A) + `
`, {
                            mode: 384
                        }), Z.add(A.uuid), this.remoteIngressUrl && S80(A)) await this.persistToRemote(G, A)
                }
            }
        }
    }
    async persistToRemote(A, Q) {
        if (!this.remoteIngressUrl) return;
        if (!await LT2(A, Q, this.remoteIngressUrl)) throw BA("tengu_session_persistence_failed", {}), Error("Failed to persist session log to remote")
    }
    setRemoteIngressUrl(A) {
        this.remoteIngressUrl = A, g(`Remote persistence enabled with URL: ${A}`)
    }
    async getAllTranscripts(A) {
        await this.loadAllSessions(A);
        let Q = [...this.messages.values()],
            B = new Set(Q.map((G) => G.parentUuid));
        return Q.filter((G) => !B.has(G.uuid)).map((G) => this.getTranscript(G)).filter((G) => G.length)
    }
    getTranscript(A) {
        return oY1(this.messages, A)
    }
    async getLastLog(A) {
        let {
            messages: Q
        } = await sV0(A);
        if (Q.size === 0) return null;
        let G = Array.from(Q.values()).filter((I) => !I.isSidechain).sort((I, Y) => new Date(Y.timestamp).getTime() - new Date(I.timestamp).getTime())[0];
        if (!G) return null;
        return oY1(Q, G)
    }
    loadAllSessions = t1(async (A) => {
        let Q = uH(za),
            B = OA();
        if (this.didLoad && !A) return this;
        try {
            B.statSync(Q)
        } catch {
            return this
        }
        let Z = B.readdirSync(Q).filter((Y) => Y.isFile() && Y.name.endsWith(".jsonl")).map((Y) => dg(Q, Y.name));
        if (A) Z = Z.sort((Y, J) => {
            let W = B.statSync(Y);
            return B.statSync(J).mtime.getTime() - W.mtime.getTime()
        }).slice(0, A);
        let I = await Promise.all(Z.sort((Y, J) => {
            let W = B.statSync(Y),
                X = B.statSync(J);
            return W.mtime.getTime() - X.mtime.getTime()
        }).map(async (Y) => {
            let J = Y$(cy3(Y, ".jsonl"));
            if (!J) return {
                sessionId: J,
                sessionMessages: new Set
            };
            let W = new Map,
                X = new Map,
                F = new Map,
                V = new Map;
            try {
                await B.stat(Y);
                for (let K of await ss(Y))
                    if (K.type === "user" || K.type === "assistant" || K.type === "attachment" || K.type === "system") W.set(K.uuid, K);
                    else if (K.type === "summary" && K.leafUuid) X.set(K.leafUuid, K.summary);
                else if (K.type === "custom-title" && K.sessionId) F.set(K.sessionId, K.customTitle);
                else if (K.type === "file-history-snapshot") V.set(K.messageId, K)
            } catch {}
            return {
                sessionId: J,
                sessionMessages: W,
                summaries: X,
                customTitles: F,
                fileHistorySnapshots: V
            }
        }));
        for (let {
                sessionId: Y,
                sessionMessages: J,
                summaries: W,
                customTitles: X,
                fileHistorySnapshots: F
            }
            of I) {
            if (!Y) continue;
            for (let [V, K] of J.entries()) this.messages.set(V, K);
            for (let [V, K] of W.entries()) this.summaries.set(V, K);
            for (let [V, K] of X.entries()) this.customTitles.set(V, K);
            for (let [V, K] of F.entries()) this.fileHistorySnapshots.set(V, K)
        }
        if (!A) this.didLoad = !0;
        return this
    }, (A) => A?.toString() || "all")
}
async function N0A(A) {
    let Q = iH9(A);
    return await j$().insertMessageChain(Q), Q[Q.length - 1]?.uuid || null
}
async function XY9(A, Q) {
    await j$().insertMessageChain(iH9(A), !0, Q)
}
async function Gb2(A) {
    await j$().insertQueueOperation(A)
}
async function H91(A, Q, B) {
    await j$().insertFileHistorySnapshot(A, Q, B)
}
async function Zx() {
    let A = j$();
    A.sessionFile = yJA()
}
async function dH9(A, Q) {
    FR(A);
    let B = j$();
    try {
        let G = await OT2(A, Q) || [],
            Z = OA(),
            I = uH(za);
        try {
            Z.statSync(I)
        } catch {
            Z.mkdirSync(I)
        }
        let Y = djA(A);
        if (Z.existsSync(Y)) Z.unlinkSync(Y);
        for (let J of G) Z.appendFileSync(Y, JSON.stringify(J) + `
`, {
            mode: 384
        });
        if (G.length === 0 && !Z.existsSync(Y)) Z.writeFileSync(Y, "", {
            encoding: "utf8",
            flush: !0,
            mode: 384
        });
        return g(`Hydrated ${G.length} entries from remote`), G.length > 0
    } catch (G) {
        return g(`Error hydrating session from remote: ${G}`), R6("error", "hydrate_remote_session_fail"), !1
    } finally {
        B.setRemoteIngressUrl(Q)
    }
}

function iy3(A) {
    let Q = ny3(A);
    if (Q) {
        let B = Q.replace(/\n/g, " ").trim();
        if (B.length > 200) B = B.slice(0, 200).trim() + "…";
        return B
    }
    return "No prompt"
}

function ny3(A) {
    for (let Q of A) {
        if (Q.type !== "user" || Q.isMeta) continue;
        let B = Q.message?.content;
        if (!B) continue;
        let G = "";
        if (typeof B === "string") G = B;
        else if (Array.isArray(B)) G = B.find((Y) => Y.type === "text")?.text || "";
        if (!G) continue;
        let Z = e2(G, "command-name");
        if (Z) {
            let I = Z.replace(/^\//, "");
            if (jy().has(I)) continue;
            else {
                let Y = e2(G, "command-args");
                if (!Y || Y.trim() === "") continue
            }
        }
        if (G.match(/^<local-command-stdout>/)) continue;
        if (G.match(/^<session-start-hook>/)) continue;
        return G
    }
    return
}

function ay3(A) {
    return A.map((Q) => {
        let {
            isSidechain: B,
            parentUuid: G,
            ...Z
        } = Q;
        return Z
    })
}

function oY1(A, Q) {
    let B = [],
        G = Q;
    while (G) B.unshift(G), G = G.parentUuid ? A.get(G.parentUuid) : void 0;
    return B
}

function nV0(A, Q) {
    let B = [];
    for (let G of Q) {
        let Z = A.get(G.uuid);
        if (!Z) continue;
        if (!Z.isSnapshotUpdate) B.push(Z.snapshot);
        else {
            let I = B.findLastIndex((Y) => Y.messageId === Z.snapshot.messageId);
            if (I === -1) B.push(Z.snapshot);
            else B[I] = Z.snapshot
        }
    }
    return B
}

function aV0(A, Q = 0, B, G, Z) {
    let I = A[A.length - 1],
        Y = A[0],
        J = iy3(A),
        W = new Date(Y.timestamp),
        X = new Date(I.timestamp);
    return {
        date: I.timestamp,
        messages: ay3(A),
        fullPath: "n/a",
        value: Q,
        created: W,
        modified: X,
        firstPrompt: J,
        messageCount: A.length,
        isSidechain: Y.isSidechain,
        leafUuid: I.uuid,
        summary: B,
        customTitle: G,
        fileHistorySnapshots: Z,
        gitBranch: I.gitBranch,
        projectPath: Y.cwd
    }
}
async function sy3(A) {
    let Q = new Map,
        B = 0;
    for (let Y of A) {
        let J = Y.messages[0]?.sessionId;
        if (J) {
            let W = (Q.get(J) || 0) + 1;
            Q.set(J, W), B = Math.max(W, B)
        }
    }
    if (B <= 1) return;
    let G = Array.from(Q.values()).filter((Y) => Y > 1),
        Z = G.length,
        I = G.reduce((Y, J) => Y + J, 0);
    BA("tengu_session_forked_branches_fetched", {
        total_sessions: Q.size,
        sessions_with_branches: Z,
        max_branches_per_session: Math.max(...G),
        avg_branches_per_session: Math.round(I / Z),
        total_transcript_count: A.length
    })
}
async function ry3(A) {
    let Q = await j$().getAllTranscripts(A),
        B = j$().summaries,
        G = j$().customTitles,
        Z = Q.map((I, Y) => {
            let J = I[I.length - 1],
                W = J ? B.get(J.uuid) : void 0,
                X = J ? G.get(J.sessionId) : void 0,
                F = nV0(j$().fileHistorySnapshots, I);
            return aV0(I, Y, W, X, F)
        }).sort((I, Y) => {
            return Y.modified.getTime() - I.modified.getTime()
        });
    return await sy3(Z), Z
}
async function cH9(A, Q) {
    await j$().appendEntry({
        type: "summary",
        summary: Q,
        leafUuid: A
    })
}
async function NY1(A, Q) {
    await j$().appendEntry({
        type: "custom-title",
        customTitle: Q,
        sessionId: A
    }), j$().customTitles.set(A, Q), BA("tengu_session_renamed", {})
}
async function CFA(A) {
    let Q = new Map,
        B = new Map,
        G = new Map,
        Z = new Map;
    try {
        let I = await ss(A);
        for (let Y of I)
            if (Y.type === "user" || Y.type === "assistant" || Y.type === "attachment" || Y.type === "system") Q.set(Y.uuid, Y);
            else if (Y.type === "summary" && Y.leafUuid) B.set(Y.leafUuid, Y.summary);
        else if (Y.type === "custom-title" && Y.sessionId) G.set(Y.sessionId, Y.customTitle);
        else if (Y.type === "file-history-snapshot") Z.set(Y.messageId, Y)
    } catch {}
    return {
        messages: Q,
        summaries: B,
        customTitles: G,
        fileHistorySnapshots: Z
    }
}
async function sV0(A) {
    let Q = dg(uH(pQ()), `${A}.jsonl`);
    return CFA(Q)
}
async function lH9(A, Q) {
    return (await pH9(A)).has(Q)
}
async function $I2(A) {
    let Q = await j$().getLastLog(A);
    if (Q !== null && Q !== void 0) {
        let B = Q[Q.length - 1],
            {
                summaries: G,
                customTitles: Z,
                fileHistorySnapshots: I
            } = await sV0(A),
            Y = B ? G.get(B.uuid) : void 0,
            J = B ? Z.get(B.sessionId) : void 0;
        return aV0(Q, 0, Y, J, nV0(I, Q))
    }
    return null
}
async function Qx(A) {
    let B = (await ry3(A)).filter((G) => {
        if (!G.messages.length) return !1;
        if (G.firstPrompt?.startsWith("API Error")) return !1;
        if (G.summary?.startsWith("API Error")) return !1;
        if (G.isSidechain) return !1;
        return !0
    });
    return LyA(B).map((G, Z) => ({
        ...G,
        value: Z
    }))
}
async function RY1(A) {
    let Q = OA(),
        B = HFA();
    try {
        Q.statSync(B)
    } catch {
        return []
    }
    let G = [],
        I = Q.readdirSync(B).filter((J) => J.isDirectory()).map((J) => dg(B, J.name));
    for (let J of I) try {
        let X = Q.readdirSync(J).filter((F) => F.isFile() && F.name.endsWith(".jsonl")).map((F) => dg(J, F.name));
        if (A) X = X.sort((F, V) => {
            let K = Q.statSync(F);
            return Q.statSync(V).mtime.getTime() - K.mtime.getTime()
        }).slice(0, A);
        for (let F of X) {
            let {
                messages: V,
                summaries: K,
                customTitles: D,
                fileHistorySnapshots: H
            } = await CFA(F);
            if (V.size === 0) continue;
            let C = [...V.values()],
                E = new Set(C.map((w) => w.parentUuid)),
                z = C.filter((w) => !E.has(w.uuid));
            for (let w of z) {
                let N = oY1(V, w);
                if (N.length === 0) continue;
                let q = K.get(w.uuid),
                    R = w.sessionId,
                    P = D.get(R),
                    y = nV0(H, N),
                    v = aV0(N, 0, q, P, y);
                G.push(v)
            }
        }
    } catch {
        continue
    }
    let Y = G.filter((J) => {
        if (!J.messages.length) return !1;
        if (J.firstPrompt?.startsWith("API Error")) return !1;
        if (J.summary?.startsWith("API Error")) return !1;
        if (J.isSidechain) return !1;
        return !0
    });
    return LyA(Y).map((J, W) => ({
        ...J,
        value: W
    }))
}
async function cI1(A) {
    let Q = eXA(A),
        B = OA();
    try {
        B.statSync(Q)
    } catch {
        return null
    }
    try {
        let {
            messages: G
        } = await CFA(Q), Z = Array.from(G.values()).filter((X) => X.agentId === A && X.isSidechain);
        if (Z.length === 0) return null;
        let I = new Set(Z.map((X) => X.parentUuid)),
            Y = Z.filter((X) => !I.has(X.uuid)).sort((X, F) => new Date(F.timestamp).getTime() - new Date(X.timestamp).getTime())[0];
        if (!Y) return null;
        return oY1(G, Y).filter((X) => X.agentId === A).map(({
            isSidechain: X,
            parentUuid: F,
            ...V
        }) => V)
    } catch {
        return null
    }
}

function iH9(A) {
    return A.filter((Q) => {
        if (Q.type === "progress") return !1;
        if (Q.type === "attachment" && uH9() !== "ant") return !1;
        return !0
    })
}
async function wI2(A) {
    return (await Qx())[A] || null
}
async function nH9(A) {
    try {
        let Q = G0(),
            B = djA(Q),
            {
                messages: G
            } = await CFA(B),
            Z = null;
        for (let I of G.values())
            if (I.type === "assistant") {
                let Y = I.message.content;
                if (Array.isArray(Y)) {
                    for (let J of Y)
                        if (J.type === "tool_use" && J.id === A) {
                            Z = I;
                            break
                        }
                }
            } else if (I.type === "user") {
            let Y = I.message.content;
            if (Array.isArray(Y)) {
                for (let J of Y)
                    if (J.type === "tool_result" && J.tool_use_id === A) return null
            }
        }
        return Z
    } catch {
        return null
    }
}
var za, rY1 = null,
    hH9 = !1,
    pH9;