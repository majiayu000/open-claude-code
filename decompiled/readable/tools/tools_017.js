/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.079Z
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 17/25
 * Lines: 367836 - 369333 (1498 lines)
 * Original file: cli.js
 */

var RTA = L(() => {
    h2();
    S0();
    Xm2();
    Cm2();
    _E();
    eIA();
    ks5 = _.strictObject({}).passthrough(), ys5 = _.object({
        plan: _.string().describe("The plan that was presented to the user"),
        isAgent: _.boolean(),
        filePath: _.string().optional().describe("The file path where the plan was saved")
    }), xq = {
        name: kRA,
        async description() {
            return "Prompts the user to exit plan mode and start coding"
        },
        async prompt() {
            return Wm2
        },
        inputSchema: ks5,
        outputSchema: ys5,
        userFacingName() {
            return ""
        },
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
                behavior: "ask",
                message: "Exit plan mode?",
                updatedInput: A
            }
        },
        renderToolUseMessage: Fm2,
        renderToolUseProgressMessage: Vm2,
        renderToolResultMessage: Km2,
        renderToolUseRejectedMessage: Dm2,
        renderToolUseErrorMessage: Hm2,
        async call(A, Q) {
            let B = G0(),
                G = Q.agentId !== B,
                Z = bU(Q.agentId),
                I = fU(Q.agentId);
            if (!I) throw Error(`No plan file found at ${Z}. Please write your plan to this file before calling ExitPlanMode.`);
            return {
                data: {
                    plan: I,
                    isAgent: G,
                    filePath: Z
                }
            }
        },
        mapToolResultToToolResultBlockParam({
            isAgent: A,
            plan: Q,
            filePath: B
        }, G) {
            if (A) return {
                type: "tool_result",
                content: 'User has approved the plan. There is nothing else needed from you now. Please respond with "ok"',
                tool_use_id: G
            };
            return {
                type: "tool_result",
                content: `User has approved your plan. You can now start coding. Start with updating your todo list if applicable

Your plan has been saved to: ${B}
You can refer back to it if needed during implementation.

## Approved Plan:
${Q}`,
                tool_use_id: G
            }
        }
    }
});
import {
    execSync as Em2
} from "child_process";

function xs5(A) {
    try {
        let Q = process.platform === "win32" ? "where" : "which";
        return Em2(`${Q} ${A}`, {
            stdio: "ignore"
        }), !0
    } catch {
        return !1
    }
}

async function xn(A) {
    let Q = rh();
    if (!Q) throw Error("No editor available");
    Em2(`${Q} "${A}"`, {
        stdio: "inherit"
    })
}
var rh;
var vn = L(() => {
    o2();
    rh = t1(() => {
        if (process.env.VISUAL?.trim()) return process.env.VISUAL.trim();
        if (process.env.EDITOR?.trim()) return process.env.EDITOR.trim();
        if (process.platform === "win32") return "start /wait notepad";
        return ["code", "vi", "nano"].find((Q) => xs5(Q))
    })
});
import {
    join as vs5
} from "path";
import {
    tmpdir as bs5
} from "os";
import {
    randomUUID as fs5
} from "crypto";

function x31(A = "claude-prompt", Q = ".md") {
    let B = fs5();
    return vs5(bs5(), `${A}-${B}${Q}`)
}
var NG0 = () => {};
import {
    execSync as hs5
} from "child_process";

function ms5(A) {
    let Q = A.split(" ")[0] ?? "";
    return us5.some((B) => Q.includes(B))
}

function LG0(A) {
    let Q = OA(),
        B = nb.get(process.stdout);
    if (!B) throw Error("Ink instance not found - cannot pause rendering");
    let G = rh();
    if (!G) return null;
    if (!Q.existsSync(A)) return null;
    let Z = !ms5(G);
    try {
        if (B.pause(), B.suspendStdin(), Z) process.stdout.write("\x1B[?1049h\x1B[?1004l\x1B[0m\x1B[?25h\x1B[2J\x1B[H");
        let I = gs5[G] ?? G;
        return hs5(`${I} "${A}"`, {
            stdio: "inherit"
        }), Q.readFileSync(A, {
            encoding: "utf-8"
        })
    } catch (I) {
        return null
    } finally {
        if (Z) process.stdout.write("\x1B[?1049l\x1B[?1004h\x1B[?25l");
        B.resumeStdin(), B.resume()
    }
}

function v31(A) {
    let Q = OA(),
        B = x31();
    try {
        Q.writeFileSync(B, A, {
            encoding: "utf-8",
            flush: !0
        });
        let G = LG0(B);
        if (G === null) return null;
        if (G.endsWith(`
`) && !G.endsWith(`

`)) return G.slice(0, -1);
        return G
    } finally {
        try {
            if (Q.existsSync(B)) Q.unlinkSync(B)
        } catch {}
    }
}
var gs5, us5;
var MG0 = L(() => {
    vn();
    o0();
    NG0();
    qaA();
    gs5 = {
        code: "code -w",
        subl: "subl --wait"
    }, us5 = ["code", "subl", "atom", "gedit", "notepad++", "notepad"]
});

function zm2({
    toolUseConfirm: A,
    onDone: Q,
    onReject: B
}) {
    let [G] = $B(), [Z] = _Q(), [I, Y] = KG.useState(""), [J, W] = KG.useState(null), X = A.input.plan, F = X === void 0, V = F ? bU(G0()) : void 0, [K, D] = KG.useState(() => {
        if (X) return X;
        return fU(G0()) ?? "No plan found. Please write your plan to the plan file first."
    }), [H, C] = KG.useState(!1);
    KG.useEffect(() => {
        if (H) {
            let N = setTimeout(() => {
                C(!1)
            }, 5000);
            return () => clearTimeout(N)
        }
    }, [H]), h1((N, q) => {
        if (q.ctrl && N.toLowerCase() === "g")
            if (BA("tengu_plan_external_editor_used", {}), F && V) {
                let R = LG0(V);
                if (R !== null) D(R), C(!0)
            } else {
                let R = v31(K);
                if (R !== null && R !== K) D(R), C(!0)
            }
    });

function E(N) {
        let q = F ? {} : {
            plan: K
        };
        if (N === "yes-bypass-permissions") BA("tengu_plan_exit", {
            planLengthChars: K.length,
            outcome: N
        }), hu(!0), Q(), A.onAllow(q, [{
            type: "setMode",
            mode: "bypassPermissions",
            destination: "session"
        }]);
        else if (N === "yes-accept-edits") BA("tengu_plan_exit", {
            planLengthChars: K.length,
            outcome: N
        }), hu(!0), Q(), A.onAllow(q, [{
            type: "setMode",
            mode: "acceptEdits",
            destination: "session"
        }]);
        else if (N === "yes-default") BA("tengu_plan_exit", {
            planLengthChars: K.length,
            outcome: N
        }), hu(!0), Q(), A.onAllow(q, [{
            type: "setMode",
            mode: "default",
            destination: "session"
        }]);
        else {
            let R = I.trim();
            if (!R) {
                W("no");
                return
            }
            BA("tengu_plan_exit", {
                planLengthChars: K.length,
                outcome: "no"
            }), Q(), B(), A.onReject(R)
        }
    }
    let z = rh(),
        w = z ? aH(z) : null;
    return KG.default.createElement(KG.default.Fragment, null, KG.default.createElement(hJ, {
        color: "planMode",
        title: "Ready to code?",
        innerPaddingX: 0
    }, KG.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, KG.default.createElement(j, {
        paddingX: 1
    }, KG.default.createElement($, null, "Here is Claude's plan:")), KG.default.createElement(j, {
        borderDimColor: !0,
        borderColor: "subtle",
        borderStyle: "dashed",
        flexDirection: "column",
        borderLeft: !1,
        borderRight: !1,
        paddingX: 1,
        marginBottom: 1,
        overflow: "hidden"
    }, KG.default.createElement($, null, _D(K, G))), KG.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, KG.default.createElement(WC, {
        permissionResult: A.permissionResult,
        toolType: "tool"
    }), KG.default.createElement($, {
        dimColor: !0
    }, "Would you like to proceed?"), KG.default.createElement(j, {
        marginTop: 1
    }, KG.default.createElement(M0, {
        options: [...Z.toolPermissionContext.isBypassPermissionsModeAvailable ? [{
            label: "Yes, and bypass permissions",
            value: "yes-bypass-permissions"
        }] : [{
            label: "Yes, and auto-accept edits",
            value: "yes-accept-edits"
        }], {
            label: "Yes, and manually approve edits",
            value: "yes-default"
        }, {
            type: "input",
            label: "No, keep planning",
            value: "no",
            placeholder: "Type here to tell Claude what to change",
            onChange: Y
        }],
        onChange: (N) => E(N),
        onCancel: () => {
            BA("tengu_plan_exit", {
                planLengthChars: K.length,
                outcome: "no"
            }), Q(), B(), A.onReject()
        },
        onFocus: W,
        focusValue: J || void 0
    }))))), w && KG.default.createElement(j, {
        flexDirection: "row",
        gap: 1,
        paddingX: 1,
        marginTop: 1
    }, KG.default.createElement(j, null, KG.default.createElement($, {
        dimColor: !0
    }, "ctrl-g to edit in "), KG.default.createElement($, {
        bold: !0,
        dimColor: !0
    }, w), F && V && KG.default.createElement($, {
        dimColor: !0
    }, " · ", V)), H && KG.default.createElement(j, null, KG.default.createElement($, {
        dimColor: !0
    }, " · "), KG.default.createElement($, {
        color: "success"
    }, V1.tick, "Plan saved!"))))
}
var KG;
var Um2 = L(() => {
    hA();
    T6();
    CO();
    Hh();
    ih();
    H9();
    MG0();
    w0();
    n2();
    vn();
    yJ();
    _E();
    S0();
    KG = GA(VA(), 1)
});
var $m2;
var wm2 = L(() => {
    $m2 = `Use this tool when you encounter a complex task that requires careful planning and exploration before implementation. This tool transitions you into plan mode where you can thoroughly explore the codebase and design an implementation approach.

## When to Use This Tool

Use EnterPlanMode when ANY of these conditions apply:

1. **Multiple Valid Approaches**: The task can be solved in several different ways, each with trade-offs
   - Example: "Add caching to the API" - could use Redis, in-memory, file-based, etc.
   - Example: "Improve performance" - many optimization strategies possible

2. **Significant Architectural Decisions**: The task requires choosing between architectural patterns
   - Example: "Add real-time updates" - WebSockets vs SSE vs polling
   - Example: "Implement state management" - Redux vs Context vs custom solution

3. **Large-Scale Changes**: The task touches many files or systems
   - Example: "Refactor the authentication system"
   - Example: "Migrate from REST to GraphQL"

4. **Unclear Requirements**: You need to explore before understanding the full scope
   - Example: "Make the app faster" - need to profile and identify bottlenecks
   - Example: "Fix the bug in checkout" - need to investigate root cause

5. **User Input Needed**: You'll need to ask clarifying questions before starting
   - If you would use ${dJ} to clarify the approach, consider EnterPlanMode instead
   - Plan mode lets you explore first, then present options with context

## When NOT to Use This Tool

Do NOT use EnterPlanMode for:
- Simple, straightforward tasks with obvious implementation
- Small bug fixes where the solution is clear
- Adding a single function or small feature
- Tasks you're already confident how to implement
- Research-only tasks (use the Task tool with explore agent instead)

## What Happens in Plan Mode

In plan mode, you'll:
1. Thoroughly explore the codebase using Glob, Grep, and Read tools
2. Understand existing patterns and architecture
3. Design an implementation approach
4. Present your plan to the user for approval
5. Use ${dJ} if you need to clarify approaches
6. Exit plan mode with ExitPlanMode when ready to implement

## Examples

### GOOD - Use EnterPlanMode:
User: "Add user authentication to the app"
- This requires architectural decisions (session vs JWT, where to store tokens, middleware structure)

User: "Optimize the database queries"
- Multiple approaches possible, need to profile first, significant impact

User: "Implement dark mode"
- Architectural decision on theme system, affects many components

### BAD - Don't use EnterPlanMode:
User: "Fix the typo in the README"
- Straightforward, no planning needed

User: "Add a console.log to debug this function"
- Simple, obvious implementation

User: "What files handle routing?"
- Research task, not implementation planning

## Important Notes

- This tool REQUIRES user approval - they must consent to entering plan mode
- Be thoughtful about when to use it - unnecessary plan mode slows down simple tasks
- If unsure whether to use it, err on the side of starting implementation
- You can always ask the user "Would you like me to plan this out first?"
`
});

function qm2() {
    return null
}

function Nm2() {
    return null
}

function Lm2(A, Q, B) {
    return pF.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, pF.createElement(j, {
        flexDirection: "row"
    }, pF.createElement($, {
        color: sj("plan")
    }, pD), pF.createElement($, null, " Entered plan mode")), pF.createElement(j, {
        marginTop: 1,
        paddingLeft: 2
    }, pF.createElement($, {
        dimColor: !0
    }, "Claude is now exploring and designing an implementation approach.")))
}

function Mm2() {
    return pF.createElement(j, {
        flexDirection: "row",
        marginTop: 1
    }, pF.createElement($, {
        color: sj("default")
    }, pD), pF.createElement($, null, " User declined to enter plan mode"))
}

function Om2() {
    return null
}
var pF;
var Rm2 = L(() => {
    hA();
    yn();
    Bw();
    pF = GA(VA(), 1)
});
var b31 = "EnterPlanMode";
var ds5, cs5, TTA;
var OG0 = L(() => {
    h2();
    S0();
    wm2();
    Rm2();
    ds5 = _.strictObject({}), cs5 = _.object({
        message: _.string().describe("Confirmation that plan mode was entered")
    }), TTA = {
        name: b31,
        async description() {
            return "Requests permission to enter plan mode for complex tasks requiring exploration and design"
        },
        async prompt() {
            return $m2
        },
        inputSchema: ds5,
        outputSchema: cs5,
        userFacingName() {
            return ""
        },
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        async checkPermissions(A) {
            return {
                behavior: "ask",
                message: "Enter plan mode?",
                updatedInput: A
            }
        },
        renderToolUseMessage: qm2,
        renderToolUseProgressMessage: Nm2,
        renderToolResultMessage: Lm2,
        renderToolUseRejectedMessage: Mm2,
        renderToolUseErrorMessage: Om2,
        async call(A, Q) {
            let B = G0();
            if (Q.agentId !== B) throw Error("EnterPlanMode tool cannot be used in agent contexts");
            return {
                data: {
                    message: "Entered plan mode. You should now focus on exploring the codebase and designing an implementation approach."
                }
            }
        },
        mapToolResultToToolResultBlockParam({
            message: A
        }, Q) {
            return {
                type: "tool_result",
                content: `${A}

In plan mode, you should:
1. Thoroughly explore the codebase to understand existing patterns
2. Identify similar features and architectural approaches
3. Consider multiple approaches and their trade-offs
4. Use AskUserQuestion if you need to clarify the approach
5. Design a concrete implementation strategy
6. When ready, use ExitPlanMode to present your plan for approval

Remember: DO NOT write or edit any files yet. This is a read-only exploration and planning phase.`,
                tool_use_id: Q
            }
        }
    }
});

function Tm2({
    toolUseConfirm: A,
    onDone: Q,
    onReject: B
}) {
    function G(Z) {
        if (Z === "yes") Q(), A.onAllow({}, [{
            type: "setMode",
            mode: "plan",
            destination: "session"
        }]);
        else Q(), B(), A.onReject()
    }
    return H$.default.createElement(hJ, {
        color: "planMode",
        title: "Enter plan mode?"
    }, H$.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        paddingX: 1
    }, H$.default.createElement($, null, "Claude wants to enter plan mode to explore and design an implementation approach."), H$.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, H$.default.createElement($, {
        dimColor: !0
    }, "In plan mode, Claude will:"), H$.default.createElement($, {
        dimColor: !0
    }, " · Explore the codebase thoroughly"), H$.default.createElement($, {
        dimColor: !0
    }, " · Identify existing patterns"), H$.default.createElement($, {
        dimColor: !0
    }, " · Design an implementation strategy"), H$.default.createElement($, {
        dimColor: !0
    }, " · Present a plan for your approval")), H$.default.createElement(j, {
        marginTop: 1
    }, H$.default.createElement($, {
        dimColor: !0
    }, "No code changes will be made until you approve the plan.")), H$.default.createElement(j, {
        marginTop: 1
    }, H$.default.createElement(M0, {
        options: [{
            label: "Yes, enter plan mode",
            value: "yes"
        }, {
            label: "No, start implementing now",
            value: "no"
        }],
        onChange: G,
        onCancel: () => G("no")
    }))))
}
var H$;
var Pm2 = L(() => {
    hA();
    T6();
    CO();
    H$ = GA(VA(), 1)
});

function f31() {
    return null
}

function h31() {
    return null
}

function g31() {
    return null
}

function u31() {
    return PTA.createElement(k3, null)
}

function m31(A, {
    verbose: Q
}) {
    return PTA.createElement(A5, {
        result: A,
        verbose: Q
    })
}
var PTA;
var RG0 = L(() => {
    lX();
    lV();
    PTA = GA(VA(), 1)
});

function d31(A, Q) {
    if (!Q) return A;
    return A.map((B) => {
        if (B.type === "user") return {
            ...B,
            sourceToolUseID: Q
        };
        return B
    })
}

function c31(A, Q) {
    let B = A.message.content.find((G) => G.type === "tool_use" && G.name === Q);
    return B && B.type === "tool_use" ? B.id : void 0
}
var ps5, ls5, bn;
var p31 = L(() => {
    h2();
    nE();
    aG();
    jTA();
    U30();
    RG0();
    w0();
    D0();
    ps5 = _.object({
        skill: _.string().describe('The skill name (no arguments). E.g., "pdf" or "xlsx"')
    }), ls5 = _.object({
        success: _.boolean().describe("Whether the skill is valid"),
        commandName: _.string().describe("The name of the skill")
    }), bn = {
        name: Pq,
        inputSchema: ps5,
        outputSchema: ls5,
        description: async ({
            skill: A
        }) => `Execute skill: ${A}`,
        prompt: async () => Nv2(),
        userFacingName: () => Pq,
        isConcurrencySafe: () => !1,
        isEnabled: () => !0,
        isReadOnly: () => !1,
        async validateInput({
            skill: A
        }, Q) {
            let B = A.trim();
            if (!B) return {
                result: !1,
                message: `Invalid skill format: ${A}`,
                errorCode: 1
            };
            let G = B.startsWith("/") ? B.substring(1) : B,
                Z = await aE();
            if (!oh(G, Z)) return {
                result: !1,
                message: `Unknown skill: ${G}`,
                errorCode: 2
            };
            let I = vq(G, Z);
            if (!I) return {
                result: !1,
                message: `Could not load skill: ${G}`,
                errorCode: 3
            };
            if (I.disableModelInvocation) return {
                result: !1,
                message: `Skill ${G} cannot be used with ${Pq} tool due to disable-model-invocation`,
                errorCode: 4
            };
            if (I.type !== "prompt") return {
                result: !1,
                message: `Skill ${G} is not a prompt-based skill`,
                errorCode: 5
            };
            return {
                result: !0
            }
        },
        async checkPermissions({
            skill: A
        }, Q) {
            let B = A.trim(),
                G = B.startsWith("/") ? B.substring(1) : B,
                I = (await Q.getAppState()).toolPermissionContext,
                Y = await aE(),
                J = vq(G, Y),
                W = (K) => {
                    if (K === A) return !0;
                    if (K.endsWith(":*")) {
                        let D = K.slice(0, -2);
                        return A.startsWith(D)
                    }
                    return !1
                },
                X = uU(I, bn, "deny");
            for (let [K, D] of X.entries())
                if (W(K)) return {
                    behavior: "deny",
                    message: "Skill execution blocked by permission rules",
                    decisionReason: {
                        type: "rule",
                        rule: D
                    }
                };
            let F = uU(I, bn, "allow");
            for (let [K, D] of F.entries())
                if (W(K)) return {
                    behavior: "allow",
                    updatedInput: {
                        skill: A
                    },
                    decisionReason: {
                        type: "rule",
                        rule: D
                    }
                };
            let V = [{
                type: "addRules",
                rules: [{
                    toolName: Pq,
                    ruleContent: A
                }],
                behavior: "allow",
                destination: "localSettings"
            }];
            return {
                behavior: "ask",
                message: `Execute skill: ${G}`,
                decisionReason: void 0,
                suggestions: V,
                metadata: {
                    command: J
                }
            }
        },
        async call({
            skill: A
        }, Q, B, G) {
            let Z = A.trim(),
                I = Z.startsWith("/") ? Z.substring(1) : Z,
                Y = await aE(),
                J = await l31(I, "", Y, Q);
            if (!J.shouldQuery) throw Error("Command processing failed");
            let W = J.allowedTools || [],
                X = J.model,
                F = J.maxThinkingTokens,
                V = jy().has(I) ? I : "custom";
            BA("tengu_skill_tool_invocation", {
                command_name: V
            });
            let K = c31(G, Pq),
                D = d31(J.messages.filter((H) => H.type !== "progress"), K);
            return g(`SkillTool returning ${D.length} newMessages for skill ${I}`), D.forEach((H, C) => {
                if (H.type === "user" && "message" in H) {
                    let E = typeof H.message.content === "string" ? H.message.content : JSON.stringify(H.message.content);
                    g(`  newMessage ${C+1}: ${E.substring(0,150)}...`)
                }
            }), {
                data: {
                    success: !0,
                    commandName: I
                },
                newMessages: D,
                contextModifier(H) {
                    let C = H;
                    if (W.length > 0) C = {
                        ...C,
                        async getAppState() {
                            let E = await Q.getAppState();
                            return {
                                ...E,
                                toolPermissionContext: {
                                    ...E.toolPermissionContext,
                                    alwaysAllowRules: {
                                        ...E.toolPermissionContext.alwaysAllowRules,
                                        command: [...new Set([...E.toolPermissionContext.alwaysAllowRules.command || [], ...W])]
                                    }
                                }
                            }
                        }
                    };
                    if (X) C = {
                        ...C,
                        options: {
                            ...C.options,
                            mainLoopModel: X
                        }
                    };
                    if (F !== void 0) C = {
                        ...C,
                        options: {
                            ...C.options,
                            maxThinkingTokens: F
                        }
                    };
                    return C
                }
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                type: "tool_result",
                tool_use_id: Q,
                content: `Launching skill: ${A.commandName}`
            }
        },
        renderToolResultMessage: f31,
        renderToolUseMessage: h31,
        renderToolUseProgressMessage: g31,
        renderToolUseRejectedMessage: u31,
        renderToolUseErrorMessage: m31
    }
});
var yP = "SlashCommand";

function is5() {
    return Number(process.env.SLASH_COMMAND_TOOL_CHAR_BUDGET) || 15000
}

function jm2(A) {
    let Q = `/${A.name}`,
        B = A.argumentHint ? ` ${A.argumentHint}` : "",
        G = A.whenToUse ? `- ${A.whenToUse}` : "";
    return `- ${Q}${B}: ${A.description} ${G}`.trim()
}

function ns5(A) {
    let Q = [],
        B = 0;
    for (let G of A) {
        let Z = jm2(G);
        if (B += Z.length + 1, B > is5()) break;
        Q.push(G)
    }
    return Q
}

function as5(A) {
    return {
        limitedCommands: ns5(A)
    }
}
var Sm2;
var _m2 = L(() => {
    nE();
    D0();
    n3A();
    Sm2 = t1(async () => {
        let A = await i31(),
            {
                limitedCommands: Q
            } = as5(A),
            B = Q.length > 0 ? Q.map((Y) => jm2(Y)).join(`
`) : "",
            G = Q.map((Y) => `/${Y.userFacingName()}`).join(", ");
        g(`Slash commands included in SlashCommand tool: ${G}`);
        let Z = A.length > Q.length ? `
(Showing ${Q.length} of ${A.length} commands due to token limits)` : "";
        return `Execute a slash command within the main conversation

How slash commands work:
When you use this tool or when a user types a slash command, you will see <command-message>{name} is running…</command-message> followed by the expanded prompt. For example, if .claude/commands/foo.md contains "Print today's date", then /foo expands to that prompt in the next message.

Usage:
- \`command\` (required): The slash command to execute, including any arguments
- Example: \`command: "/review-pr 123"\`

IMPORTANT: Only use this tool for custom slash commands that appear in the Available Commands list below. Do NOT use for:
- Built-in CLI commands (like /help, /clear, etc.)
- Commands not shown in the list
- Commands you think might exist but aren't listed

${B?`Available Commands:
${B}${Z}
`:""}Notes:
- When a user requests multiple slash commands, execute each one sequentially and check for <command-message>{name} is running…</command-message> to verify each has been processed
- Do not invoke a command that is already running. For example, if you see <command-message>foo is running…</command-message>, do NOT use this tool with "/foo" - process the expanded prompt in the following message
- Only custom slash commands with descriptions are listed in Available Commands. If a user's command is not listed, ask them to check the slash command file and consult the docs.
`
    })
});
var ss5, rs5, fn;
var n31 = L(() => {
    h2();
    nE();
    aG();
    jTA();
    _m2();
    RG0();
    w0();
    ss5 = _.object({
        command: _.string().describe('The slash command to execute with its arguments, e.g., "/review-pr 123"')
    }), rs5 = _.object({
        success: _.boolean().describe("Whether the slash command is valid"),
        commandName: _.string().describe("The name of the slash command")
    }), fn = {
        name: yP,
        inputSchema: ss5,
        outputSchema: rs5,
        description: async ({
            command: A
        }) => `Execute slash command: ${A}`,
        prompt: async () => Sm2(),
        userFacingName: () => yP,
        isConcurrencySafe: () => !1,
        isEnabled: () => !0,
        isReadOnly: () => !1,
        async validateInput({
            command: A
        }, Q) {
            let B = vJA(A);
            if (!B) return {
                result: !1,
                message: `Invalid slash command format: ${A}`,
                errorCode: 1
            };
            let {
                commandName: G
            } = B, Z = await aE();
            if (!oh(G, Z)) return {
                result: !1,
                message: `Unknown slash command: ${G}`,
                errorCode: 2
            };
            let I = vq(G, Z);
            if (!I) return {
                result: !1,
                message: `Could not load slash command: ${G}`,
                errorCode: 3
            };
            if (I.disableModelInvocation) return {
                result: !1,
                message: `Slash command ${G} cannot be used with ${yP} tool due to disable-model-invocation`,
                errorCode: 4
            };
            if (I.type !== "prompt") return {
                result: !1,
                message: `Slash command ${G} is not a prompt-based command`,
                errorCode: 5
            };
            return {
                result: !0
            }
        },
        async checkPermissions({
            command: A
        }, Q) {
            let {
                commandName: B
            } = vJA(A) || {
                commandName: "unknown"
            }, Z = (await Q.getAppState()).toolPermissionContext, I = await aE(), Y = vq(B, I), J = (K) => {
                if (K === A) return !0;
                if (K.endsWith(":*")) {
                    let D = K.slice(0, -2);
                    return A.startsWith(D)
                }
                return !1
            }, W = uU(Z, fn, "deny");
            for (let [K, D] of W.entries())
                if (J(K)) return {
                    behavior: "deny",
                    message: "Slash command execution blocked by permission rules",
                    decisionReason: {
                        type: "rule",
                        rule: D
                    }
                };
            let X = uU(Z, fn, "allow");
            for (let [K, D] of X.entries())
                if (J(K)) return {
                    behavior: "allow",
                    updatedInput: {
                        command: A
                    },
                    decisionReason: {
                        type: "rule",
                        rule: D
                    }
                };
            let F = [{
                    type: "addRules",
                    rules: [{
                        toolName: yP,
                        ruleContent: A
                    }],
                    behavior: "allow",
                    destination: "localSettings"
                }],
                V = A.indexOf(" ");
            if (V > 0) {
                let K = A.substring(0, V);
                F.push({
                    type: "addRules",
                    rules: [{
                        toolName: yP,
                        ruleContent: `${K}:*`
                    }],
                    behavior: "allow",
                    destination: "localSettings"
                })
            }
            return {
                behavior: "ask",
                message: `Execute slash command: /${B}`,
                decisionReason: void 0,
                suggestions: F,
                metadata: {
                    command: Y
                }
            }
        },
        async call({
            command: A
        }, Q, B, G) {
            let {
                commandName: Z,
                args: I
            } = vJA(A), Y = await aE(), J = await l31(Z, I, Y, Q);
            if (!J.shouldQuery) throw Error("Command processing failed");
            let W = J.allowedTools || [],
                X = J.model,
                F = J.maxThinkingTokens,
                V = jy().has(Z) ? Z : "custom";
            BA("tengu_slash_command_tool_invocation", {
                command_name: V
            });
            let K = c31(G, yP),
                D = d31(J.messages.filter((H) => H.type !== "progress"), K);
            return {
                data: {
                    success: !0,
                    commandName: Z
                },
                newMessages: D,
                contextModifier(H) {
                    let C = H;
                    if (W.length > 0) C = {
                        ...C,
                        async getAppState() {
                            let E = await Q.getAppState();
                            return {
                                ...E,
                                toolPermissionContext: {
                                    ...E.toolPermissionContext,
                                    alwaysAllowRules: {
                                        ...E.toolPermissionContext.alwaysAllowRules,
                                        command: [...new Set([...E.toolPermissionContext.alwaysAllowRules.command || [], ...W])]
                                    }
                                }
                            }
                        }
                    };
                    if (X) C = {
                        ...C,
                        options: {
                            ...C.options,
                            mainLoopModel: X
                        }
                    };
                    if (F !== void 0) C = {
                        ...C,
                        options: {
                            ...C.options,
                            maxThinkingTokens: F
                        }
                    };
                    return C
                }
            }
        },
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                type: "tool_result",
                tool_use_id: Q,
                content: `Launching command: /${A.commandName}`
            }
        },
        renderToolResultMessage: f31,
        renderToolUseMessage: h31,
        renderToolUseProgressMessage: g31,
        renderToolUseRejectedMessage: u31,
        renderToolUseErrorMessage: m31
    }
});

function km2(A) {
    let {
        toolUseConfirm: Q,
        onDone: B,
        onReject: G,
        verbose: Z
    } = A, Y = ((K) => {
        let D = bn.inputSchema.safeParse(K);
        if (!D.success) return e(Error(`Failed to parse skill tool input: ${D.error.message}`)), "";
        return D.data.skill
    })(Q.input), J = Q.permissionResult.behavior === "ask" && Q.permissionResult.metadata && "command" in Q.permissionResult.metadata ? Q.permissionResult.metadata.command : void 0, W = UO.useMemo(() => ({
        completion_type: "tool_use_single",
        language_name: "none"
    }), []);
    X$(Q, W);
    let X = pQ(),
        F = UO.useMemo(() => {
            let K = [{
                    label: "Yes",
                    value: "yes"
                }],
                D = {
                    label: `Yes, and don't ask again for ${oA.bold(Y)} in ${oA.bold(X)}`,
                    value: "yes-exact"
                },
                H = Y.indexOf(" "),
                C = [];
            if (H > 0) {
                let z = Y.substring(0, H);
                C.push({
                    label: `Yes, and don't ask again for ${oA.bold(z+":*")} commands in ${oA.bold(X)}`,
                    value: "yes-prefix"
                })
            }
            let E = {
                label: `No, and tell Claude what to do differently ${oA.bold.dim("(esc)")}`,
                value: "no"
            };
            return [...K, D, ...C, E]
        }, [Y, X]),
        V = (K) => {
            switch (K) {
                case "yes":
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), Q.onAllow(Q.input, []), B();
                    break;
                case "yes-exact": {
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), Q.onAllow(Q.input, [{
                        type: "addRules",
                        rules: [{
                            toolName: Pq,
                            ruleContent: Y
                        }],
                        behavior: "allow",
                        destination: "localSettings"
                    }]), B();
                    break
                }
                case "yes-prefix": {
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    });
                    let D = Y.indexOf(" "),
                        H = D > 0 ? Y.substring(0, D) : Y;
                    Q.onAllow(Q.input, [{
                        type: "addRules",
                        rules: [{
                            toolName: Pq,
                            ruleContent: `${H}:*`
                        }],
                        behavior: "allow",
                        destination: "localSettings"
                    }]), B();
                    break
                }
                case "no":
                    FY({
                        completion_type: "tool_use_single",
                        event: "reject",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), Q.onReject(), G(), B();
                    break
            }
        };
    return UO.default.createElement(hJ, {
        title: `Use skill "${Y}"?`
    }, UO.default.createElement($, null, "Claude may use instructions, code, or files from this Skill."), UO.default.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, UO.default.createElement($, {
        dimColor: !0
    }, J?.description)), UO.default.createElement(j, {
        flexDirection: "column"
    }, UO.default.createElement(WC, {
        permissionResult: Q.permissionResult,
        toolType: "tool"
    }), UO.default.createElement($, null, "Do you want to proceed?"), UO.default.createElement(M0, {
        options: F,
        onChange: V,
        onCancel: () => V("no")
    })))
}
var UO;
var ym2 = L(() => {
    hA();
    T6();
    CO();
    Mn();
    f5();
    S0();
    J9();
    On();
    ih();
    p31();
    u1();
    UO = GA(VA(), 1)
});

function xm2(A) {
    let {
        toolUseConfirm: Q,
        onDone: B,
        onReject: G,
        verbose: Z
    } = A, Y = ((K) => {
        let D = fn.inputSchema.safeParse(K);
        if (!D.success) return e(Error(`Failed to parse slash command tool input: ${D.error.message}`)), "";
        return D.data.command
    })(Q.input), J = Q.permissionResult.behavior === "ask" && Q.permissionResult.metadata && "command" in Q.permissionResult.metadata ? Q.permissionResult.metadata.command : void 0, W = $O.useMemo(() => ({
        completion_type: "tool_use_single",
        language_name: "none"
    }), []);
    X$(Q, W);
    let X = pQ(),
        F = $O.useMemo(() => {
            let K = [{
                    label: "Yes",
                    value: "yes"
                }],
                D = {
                    label: `Yes, and don't ask again for ${oA.bold(Y)} in ${oA.bold(X)}`,
                    value: "yes-exact"
                },
                H = Y.indexOf(" "),
                C = [];
            if (H > 0) {
                let z = Y.substring(0, H);
                C.push({
                    label: `Yes, and don't ask again for ${oA.bold(z+":*")} commands in ${oA.bold(X)}`,
                    value: "yes-prefix"
                })
            }
            let E = {
                label: `No, and tell Claude what to do differently ${oA.bold.dim("(esc)")}`,
                value: "no"
            };
            return [...K, D, ...C, E]
        }, [Y, X]),
        V = (K) => {
            switch (K) {
                case "yes":
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), Q.onAllow(Q.input, []), B();
                    break;
                case "yes-exact": {
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), Q.onAllow(Q.input, [{
                        type: "addRules",
                        rules: [{
                            toolName: yP,
                            ruleContent: Y
                        }],
                        behavior: "allow",
                        destination: "localSettings"
                    }]), B();
                    break
                }
                case "yes-prefix": {
                    FY({
                        completion_type: "tool_use_single",
                        event: "accept",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    });
                    let D = Y.indexOf(" "),
                        H = D > 0 ? Y.substring(0, D) : Y;
                    Q.onAllow(Q.input, [{
                        type: "addRules",
                        rules: [{
                            toolName: yP,
                            ruleContent: `${H}:*`
                        }],
                        behavior: "allow",
                        destination: "localSettings"
                    }]), B();
                    break
                }
                case "no":
                    FY({
                        completion_type: "tool_use_single",
                        event: "reject",
                        metadata: {
                            language_name: "none",
                            message_id: Q.assistantMessage.message.id,
                            platform: m0.platform
                        }
                    }), Q.onReject(), G(), B();
                    break
            }
        };
    return $O.default.createElement(hJ, {
        title: yP
    }, $O.default.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, $O.default.createElement($, null, Y), $O.default.createElement($, {
        dimColor: !0
    }, J?.description)), $O.default.createElement(j, {
        flexDirection: "column"
    }, $O.default.createElement(WC, {
        permissionResult: Q.permissionResult,
        toolType: "tool"
    }), $O.default.createElement($, null, "Do you want to proceed?"), $O.default.createElement(M0, {
        options: F,
        onChange: V,
        onCancel: () => V("no")
    })))
}
var $O;
var vm2 = L(() => {
    hA();
    T6();
    CO();
    Mn();
    f5();
    S0();
    J9();
    On();
    ih();
    n31();
    u1();
    $O = GA(VA(), 1)
});

function ts5({
    answers: A
}) {
    return oY.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, oY.createElement(j, {
        flexDirection: "row"
    }, oY.createElement($, {
        color: sj("default")
    }, pD, " "), oY.createElement($, null, "User answered Claude's questions:")), oY.createElement(y0, null, oY.createElement(j, {
        flexDirection: "column"
    }, Object.entries(A).map(([Q, B]) => oY.createElement($, {
        key: Q,
        color: "inactive"
    }, "· ", Q, " → ", B)))))
}
var oY, os5, bm2, TG0, nXZ, a31;
var s31 = L(() => {
    h2();
    hA();
    u8();
    yn();
    Bw();
    S0();
    hQ();
    oY = GA(VA(), 1), os5 = _.object({
        label: _.string().describe("The display text for this option that the user will see and select. Should be concise (1-5 words) and clearly describe the choice."),
        description: _.string().describe("Explanation of what this option means or what will happen if chosen. Useful for providing context about trade-offs or implications.")
    }), bm2 = _.object({
        question: _.string().describe('The complete question to ask the user. Should be clear, specific, and end with a question mark. Example: "Which library should we use for date formatting?" If multiSelect is true, phrase it accordingly, e.g. "Which features do you want to enable?"'),
        header: _.string().describe(`Very short label displayed as a chip/tag (max ${Im2} chars). Examples: "Auth method", "Library", "Approach".`),
        options: _.array(os5).min(2).max(4).describe("The available choices for this question. Must have 2-4 options. Each option should be a distinct, mutually exclusive choice (unless multiSelect is enabled). There should be no 'Other' option, that will be provided automatically."),
        multiSelect: _.boolean().describe("Set to true to allow the user to select multiple options instead of just one. Use when choices are not mutually exclusive.")
    }), TG0 = _.strictObject({
        questions: _.array(bm2).min(1).max(4).describe("Questions to ask the user (1-4 questions)"),
        answers: _.record(_.string(), _.string()).optional().describe("User answers collected by the permission component")
    }).refine((A) => {
        let Q = A.questions.map((B) => B.question);
        if (Q.length !== new Set(Q).size) return !1;
        for (let B of A.questions) {
            let G = B.options.map((Z) => Z.label);
            if (G.length !== new Set(G).size) return !1
        }
        return !0
    }, {
        message: "Question texts must be unique, option labels must be unique within each question"
    }), nXZ = _.object({
        questions: _.array(bm2).describe("The questions that were asked"),
        answers: _.record(_.string(), _.string()).describe("The answers provided by the user (question text -> answer string; multi-select answers are comma-separated)")
    });
    a31 = {
        name: dJ,
        async description() {
            return Ym2
        },
        async prompt() {
            return Jm2
        },
        inputSchema: TG0,
        userFacingName() {
            return ""
        },
        isEnabled() {
            return QkA() || V0(process.env.CLAUDE_CODE_ENABLE_ASK_USER_QUESTION_TOOL)
        },
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        requiresUserInteraction() {
            return !0
        },
        async checkPermissions(A) {
            return {
                behavior: "ask",
                message: "Answer questions?",
                updatedInput: A
            }
        },
        renderToolUseMessage() {
            return null
        },