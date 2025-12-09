/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: agents_009.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (24次) = lazyLoader(fn) - Lazy module loader
 *   GA       (19次) = esmImport(module) - ESM import helper
 *   s8       (3次) = TASK_TOOL_NAME = "Task"
 *   tI       (1次) = TODO_READ_TOOL = TodoRead tool object
 *   pzA      (1次) = capitalize() - Capitalize string
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 9/13
 * Lines: 426223 - 427722 (1500 lines)
 * Original file: cli.js
 */

function _Y1(A) {
    if (A.source === "built-in") return "Built-in";
    if (A.source === "plugin") throw Error("Cannot get file path for plugin agents");
    let Q = SY1(A.source),
        B = A.filename || A.agentType;
    return bg(Q, `${B}.md`)
}

function dV9(A) {
    if (A.source === "built-in") return "Built-in";
    let Q = mV9(A.source);
    return bg(Q, `${A.agentType}.md`)
}

function cV9(A) {
    if (Ly(A)) return "Built-in";
    if (v51(A)) return `Plugin: ${A.plugin||"Unknown"}`;
    let Q = mV9(A.source),
        B = A.filename || A.agentType;
    return bg(Q, `${B}.md`)
}

function __3(A) {
    let Q = SY1(A),
        B = OA();
    if (!B.existsSync(Q)) B.mkdirSync(Q);
    return Q
}
async function BV0(A, Q, B, G, Z, I = !0, Y, J) {
    if (A === "built-in") throw Error("Cannot save built-in agents");
    __3(A);
    let W = QV0({
            source: A,
            agentType: Q
        }),
        X = OA();
    if (I && X.existsSync(W)) throw Error(`Agent file already exists: ${W}`);
    let F = uV9(Q, B, G, Z, Y, J);
    X.writeFileSync(W, F, {
        encoding: "utf-8",
        flush: !0
    })
}
async function pV9(A, Q, B, G, Z, I) {
    if (A.source === "built-in") throw Error("Cannot update built-in agents");
    let Y = OA(),
        J = _Y1(A),
        W = uV9(A.agentType, Q, B, G, Z, I);
    Y.writeFileSync(J, W, {
        encoding: "utf-8",
        flush: !0
    })
}
async function lV9(A) {
    if (A.source === "built-in") throw Error("Cannot delete built-in agents");
    let Q = OA(),
        B = _Y1(A);
    if (Q.existsSync(B)) Q.unlinkSync(B)
}
var WFA = L(() => {
    o0();
    R2();
    hQ();
    Oy();
    gV9();
    RB()
});

function Da({
    title: A,
    titleColor: Q = "text",
    borderColor: B = "suggestion",
    children: G,
    subtitle: Z
}) {
    return rP.createElement(j, {
        borderStyle: "round",
        borderColor: B,
        flexDirection: "column"
    }, rP.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, rP.createElement($, {
        bold: !0,
        color: Q
    }, A), Z && rP.createElement($, {
        dimColor: !0
    }, Z)), rP.createElement(j, {
        paddingX: 1,
        flexDirection: "column"
    }, G))
}
var rP;
var GV0 = L(() => {
    hA();
    rP = GA(VA(), 1)
});

function XFA(A) {
    if (A === "all") return "Agents";
    if (A === "built-in") return "Built-in agents";
    if (A === "plugin") return "Plugin agents";
    return pzA(wm(A))
}
var kY1 = L(() => {
    Eb1();
    UF()
});

function iV9({
    source: A,
    agents: Q,
    onBack: B,
    onSelect: G,
    onCreateNew: Z,
    changes: I
}) {
    let [Y, J] = LQ.useState(null), [W, X] = LQ.useState(!0), F = (w) => {
        return {
            isOverridden: !!w.overriddenBy,
            overriddenBy: w.overriddenBy || null
        }
    }, V = () => {
        return LQ.createElement(j, null, LQ.createElement($, {
            color: W ? "suggestion" : void 0
        }, W ? `${V1.pointer} ` : "  "), LQ.createElement($, {
            color: W ? "suggestion" : void 0
        }, "Create new agent"))
    }, K = (w) => {
        let N = w.source === "built-in",
            q = !N && !W && Y?.agentType === w.agentType && Y?.source === w.source,
            {
                isOverridden: R,
                overriddenBy: P
            } = F(w),
            y = N || R,
            v = !N && q ? "suggestion" : void 0,
            x = w.model || gm1;
        return LQ.createElement(j, {
            key: `${w.agentType}-${w.source}`
        }, LQ.createElement($, {
            dimColor: y && !q,
            color: v
        }, N ? "" : q ? `${V1.pointer} ` : "  "), LQ.createElement($, {
            dimColor: y && !q,
            color: v
        }, w.agentType), x && LQ.createElement($, {
            dimColor: !0,
            color: v
        }, " · ", x === "inherit" ? "inherit" : x), P && LQ.createElement($, {
            dimColor: !q,
            color: q ? "warning" : void 0
        }, " ", V1.warning, " overridden by ", P))
    }, D = LQ.useMemo(() => {
        let w = Q.filter((N) => N.source !== "built-in");
        if (A === "all") return [...w.filter((N) => N.source === "userSettings"), ...w.filter((N) => N.source === "projectSettings"), ...w.filter((N) => N.source === "policySettings")];
        return w
    }, [Q, A]);
    LQ.useEffect(() => {
        if (!Y && !W && D.length > 0)
            if (Z) X(!0);
            else J(D[0] || null)
    }, [D, Y, W, Z]), h1((w, N) => {
        if (N.escape) {
            B();
            return
        }
        if (N.return) {
            if (W && Z) Z();
            else if (Y) G(Y);
            return
        }
        if (!N.upArrow && !N.downArrow) return;
        let q = !!Z,
            R = D.length + (q ? 1 : 0);
        if (R === 0) return;
        let P = 0;
        if (!W && Y) {
            let v = D.findIndex((x) => x.agentType === Y.agentType && x.source === Y.source);
            if (v >= 0) P = q ? v + 1 : v
        }
        let y = N.upArrow ? P === 0 ? R - 1 : P - 1 : P === R - 1 ? 0 : P + 1;
        if (q && y === 0) X(!0), J(null);
        else {
            let v = q ? y - 1 : y,
                x = D[v];
            if (x) X(!1), J(x)
        }
    });
    let H = (w = "Built-in (always available):") => {
            let N = Q.filter((q) => q.source === "built-in");
            return LQ.createElement(j, {
                flexDirection: "column",
                marginBottom: 1,
                paddingLeft: 2
            }, LQ.createElement($, {
                bold: !0,
                dimColor: !0
            }, w), N.map(K))
        },
        C = (w, N) => {
            if (!N.length) return null;
            let q = N[0]?.baseDir;
            return LQ.createElement(j, {
                flexDirection: "column",
                marginBottom: 1
            }, LQ.createElement(j, {
                paddingLeft: 2
            }, LQ.createElement($, {
                bold: !0,
                dimColor: !0
            }, w), q && LQ.createElement($, {
                dimColor: !0
            }, " (", q, ")")), N.map((R) => K(R)))
        },
        E = XFA(A);
    if (!Q.length || A !== "built-in" && !Q.some((w) => w.source !== "built-in")) return LQ.createElement(Da, {
        title: E,
        subtitle: "No agents found"
    }, Z && LQ.createElement(j, {
        marginY: 1
    }, V()), LQ.createElement($, {
        dimColor: !0
    }, "No agents found. Create specialized subagents that Claude can delegate to."), LQ.createElement($, {
        dimColor: !0
    }, "Each subagent has its own context window, custom system prompt, and specific tools."), LQ.createElement($, {
        dimColor: !0
    }, "Try creating: Code Reviewer, Code Simplifier, Security Reviewer, Tech Lead, or UX Reviewer."), A !== "built-in" && Q.some((w) => w.source === "built-in") && LQ.createElement(LQ.Fragment, null, LQ.createElement(j, {
        marginTop: 1
    }, LQ.createElement(J3, null)), H()));
    return LQ.createElement(Da, {
        title: E,
        subtitle: `${Q.filter((w)=>!w.overriddenBy).length} agents`
    }, I && I.length > 0 && LQ.createElement(j, {
        marginTop: 1
    }, LQ.createElement($, {
        dimColor: !0
    }, I[I.length - 1])), LQ.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, Z && LQ.createElement(j, {
        marginBottom: 1
    }, V()), A === "all" ? LQ.createElement(LQ.Fragment, null, C("User agents", Q.filter((w) => w.source === "userSettings")), C("Project agents", Q.filter((w) => w.source === "projectSettings")), C("Managed agents", Q.filter((w) => w.source === "policySettings")), C("Plugin agents", Q.filter((w) => w.source === "plugin")), C("CLI arg agents", Q.filter((w) => w.source === "flagSettings")), (() => {
        let w = Q.filter((N) => N.source === "built-in");
        return w.length > 0 ? LQ.createElement(j, {
            flexDirection: "column",
            marginBottom: 1,
            paddingLeft: 2
        }, LQ.createElement($, {
            dimColor: !0
        }, LQ.createElement($, {
            bold: !0
        }, "Built-in agents"), " (always available)"), w.map(K)) : null
    })()) : A === "built-in" ? LQ.createElement(LQ.Fragment, null, LQ.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Built-in agents are provided by default and cannot be modified."), LQ.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, Q.map((w) => K(w)))) : LQ.createElement(LQ.Fragment, null, Q.filter((w) => w.source !== "built-in").map((w) => K(w)), Q.some((w) => w.source === "built-in") && LQ.createElement(LQ.Fragment, null, LQ.createElement(j, {
        marginTop: 1
    }, LQ.createElement(J3, null)), H()))))
}
var LQ;
var nV9 = L(() => {
    hA();
    hA();
    n2();
    eV();
    GV0();
    s2();
    kY1();
    LQ = GA(VA(), 1)
});

function IV0({
    steps: A,
    initialData: Q = {},
    onComplete: B,
    onCancel: G,
    children: Z,
    title: I,
    showStepCounter: Y = !0
}) {
    let [J, W] = YF.useState(0), [X, F] = YF.useState(Q), [V, K] = YF.useState(!1), [D, H] = YF.useState([]);
    DQ(), YF.useEffect(() => {
        if (V) H([]), B(X)
    }, [V, X, B]);
    let C = YF.useCallback(() => {
            if (J < A.length - 1) {
                if (D.length > 0) H((P) => [...P, J]);
                W((P) => P + 1)
            } else K(!0)
        }, [J, A.length, D]),
        E = YF.useCallback(() => {
            if (D.length > 0) {
                let P = D[D.length - 1];
                if (P !== void 0) H((y) => y.slice(0, -1)), W(P)
            } else if (J > 0) W((P) => P - 1);
            else if (G) G()
        }, [J, D, G]),
        z = YF.useCallback((P) => {
            if (P >= 0 && P < A.length) H((y) => [...y, J]), W(P)
        }, [J, A.length]),
        w = YF.useCallback(() => {
            if (H([]), G) G()
        }, [G]),
        N = YF.useCallback((P) => {
            F((y) => ({
                ...y,
                ...P
            }))
        }, []),
        q = YF.useMemo(() => ({
            currentStepIndex: J,
            totalSteps: A.length,
            wizardData: X,
            setWizardData: F,
            updateWizardData: N,
            goNext: C,
            goBack: E,
            goToStep: z,
            cancel: w,
            title: I,
            showStepCounter: Y
        }), [J, A.length, X, N, C, E, z, w, I, Y]),
        R = A[J];
    if (!R || V) return null;
    return YF.default.createElement(ZV0.Provider, {
        value: q
    }, Z || YF.default.createElement(R, null))
}
var YF, ZV0;
var YV0 = L(() => {
    c9();
    YF = GA(VA(), 1), ZV0 = YF.createContext(null)
});

function NI() {
    let A = aV9.useContext(ZV0);
    if (!A) throw Error("useWizard must be used within a WizardProvider");
    return A
}
var aV9;
var JV0 = L(() => {
    YV0();
    aV9 = GA(VA(), 1)
});

function XV0({
    instructions: A = "Press ↑↓ to navigate · Enter to select · Esc to go back"
}) {
    let Q = DQ();
    return WV0.default.createElement(j, {
        marginLeft: 3
    }, WV0.default.createElement($, {
        dimColor: !0
    }, Q.pending ? `Press ${Q.keyName} again to exit` : A))
}
var WV0;
var FV0 = L(() => {
    hA();
    c9();
    WV0 = GA(VA(), 1)
});

function sJ({
    title: A,
    titleColor: Q = "text",
    borderColor: B = "suggestion",
    children: G,
    subtitle: Z,
    footerText: I
}) {
    let {
        currentStepIndex: Y,
        totalSteps: J,
        title: W,
        showStepCounter: X
    } = NI();
    return fg.default.createElement(fg.default.Fragment, null, fg.default.createElement(j, {
        borderStyle: "round",
        borderColor: B,
        flexDirection: "column"
    }, fg.default.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, fg.default.createElement($, {
        bold: !0,
        color: Q
    }, A || W || "Wizard", X !== !1 && ` (${Y+1}/${J})`), Z && fg.default.createElement($, {
        dimColor: !0
    }, Z)), fg.default.createElement(j, {
        paddingX: 1,
        flexDirection: "column"
    }, G)), fg.default.createElement(XV0, {
        instructions: I
    }))
}
var fg;
var yO = L(() => {
    hA();
    JV0();
    FV0();
    fg = GA(VA(), 1)
});
var QN = L(() => {
    YV0();
    JV0();
    yO();
    FV0()
});

function sV9() {
    let {
        goNext: A,
        updateWizardData: Q,
        cancel: B
    } = NI();
    return yY1.default.createElement(sJ, {
        subtitle: "Choose location",
        footerText: "Press ↑↓ to navigate · Enter to select · Esc to cancel"
    }, yY1.default.createElement(j, {
        marginTop: 1
    }, yY1.default.createElement(M0, {
        key: "location-select",
        options: [{
            label: "Project (.claude/agents/)",
            value: "projectSettings"
        }, {
            label: "Personal (~/.claude/agents/)",
            value: "userSettings"
        }],
        onChange: (Z) => {
            Q({
                location: Z
            }), A()
        },
        onCancel: () => B()
    })))
}
var yY1;
var rV9 = L(() => {
    hA();
    T5();
    yO();
    QN();
    yY1 = GA(VA(), 1)
});

function oV9() {
    let {
        goNext: A,
        goBack: Q,
        updateWizardData: B,
        goToStep: G
    } = NI();
    return xY1.default.createElement(sJ, {
        subtitle: "Creation method",
        footerText: "Press ↑↓ to navigate · Enter to select · Esc to go back"
    }, xY1.default.createElement(j, {
        marginTop: 1
    }, xY1.default.createElement(M0, {
        key: "method-select",
        options: [{
            label: "Generate with Claude (recommended)",
            value: "generate"
        }, {
            label: "Manual configuration",
            value: "manual"
        }],
        onChange: (I) => {
            let Y = I;
            if (B({
                    method: Y,
                    wasGenerated: Y === "generate"
                }), Y === "generate") A();
            else G(3)
        },
        onCancel: () => Q()
    })))
}
var xY1;
var tV9 = L(() => {
    hA();
    T5();
    yO();
    QN();
    xY1 = GA(VA(), 1)
});
async function eV9(A, Q, B, G) {
    let Z = B.length > 0 ? `

IMPORTANT: The following identifiers already exist and must NOT be used: ${B.join(", ")}` : "",
        I = `Create an agent configuration based on this request: "${A}".${Z}
  Return ONLY the JSON object, no other text.`,
        Y = j0({
            content: I
        }),
        J = await XK(),
        W = U0A([Y], J),
        V = (await Ky({
            messages: BZ(W),
            systemPrompt: [k_3],
            maxThinkingTokens: 0,
            tools: [],
            signal: G,
            options: {
                getToolPermissionContext: async () => DE(),
                model: Q,
                toolChoice: void 0,
                agents: [],
                isNonInteractiveSession: !1,
                hasAppendSystemPrompt: !1,
                querySource: "agent_creation",
                mcpTools: [],
                agentIdOrSessionId: G0()
            }
        })).message.content.filter((D) => D.type === "text").map((D) => D.text).join(`
`),
        K;
    try {
        K = JSON.parse(V.trim())
    } catch {
        let D = V.match(/\{[\s\S]*\}/);
        if (!D) throw Error("No JSON object found in response");
        K = JSON.parse(D[0])
    }
    if (!K.identifier || !K.whenToUse || !K.systemPrompt) throw Error("Invalid agent configuration generated");
    return BA("tengu_agent_definition_generated", {
        agent_identifier: K.identifier
    }), {
        identifier: K.identifier,
        whenToUse: K.whenToUse,
        systemPrompt: K.systemPrompt
    }
}
var k_3;
var AK9 = L(() => {
    kZ();
    nQ();
    $y();
    w0();
    mh();
    S0();
    k_3 = `You are an elite AI agent architect specializing in crafting high-performance agent configurations. Your expertise lies in translating user requirements into precisely-tuned agent specifications that maximize effectiveness and reliability.

**Important Context**: You may have access to project-specific instructions from CLAUDE.md files and other context that may include coding standards, project structure, and custom requirements. Consider this context when creating agents to ensure they align with the project's established patterns and practices.

When a user describes what they want an agent to do, you will:

1. **Extract Core Intent**: Identify the fundamental purpose, key responsibilities, and success criteria for the agent. Look for both explicit requirements and implicit needs. Consider any project-specific context from CLAUDE.md files. For agents that are meant to review code, you should assume that the user is asking to review recently written code and not the whole codebase, unless the user has explicitly instructed you otherwise.

2. **Design Expert Persona**: Create a compelling expert identity that embodies deep domain knowledge relevant to the task. The persona should inspire confidence and guide the agent's decision-making approach.

3. **Architect Comprehensive Instructions**: Develop a system prompt that:
   - Establishes clear behavioral boundaries and operational parameters
   - Provides specific methodologies and best practices for task execution
   - Anticipates edge cases and provides guidance for handling them
   - Incorporates any specific requirements or preferences mentioned by the user
   - Defines output format expectations when relevant
   - Aligns with project-specific coding standards and patterns from CLAUDE.md

4. **Optimize for Performance**: Include:
   - Decision-making frameworks appropriate to the domain
   - Quality control mechanisms and self-verification steps
   - Efficient workflow patterns
   - Clear escalation or fallback strategies

5. **Create Identifier**: Design a concise, descriptive identifier that:
   - Uses lowercase letters, numbers, and hyphens only
   - Is typically 2-4 words joined by hyphens
   - Clearly indicates the agent's primary function
   - Is memorable and easy to type
   - Avoids generic terms like "helper" or "assistant"

6 **Example agent descriptions**:
  - in the 'whenToUse' field of the JSON object, you should include examples of when this agent should be used.
  - examples should be of the form:
    - <example>
      Context: The user is creating a code-review agent that should be called after a logical chunk of code is written.
      user: "Please write a function that checks if a number is prime"
      assistant: "Here is the relevant function: "
      <function call omitted for brevity only for this example>
      <commentary>
      Since the user is greeting, use the ${s8} tool to launch the greeting-responder agent to respond with a friendly joke. 
      </commentary>
      assistant: "Now let me use the code-reviewer agent to review the code"
    </example>
    - <example>
      Context: User is creating an agent to respond to the word "hello" with a friendly jok.
      user: "Hello"
      assistant: "I'm going to use the ${s8} tool to launch the greeting-responder agent to respond with a friendly joke"
      <commentary>
      Since the user is greeting, use the greeting-responder agent to respond with a friendly joke. 
      </commentary>
    </example>
  - If the user mentioned or implied that the agent should be used proactively, you should include examples of this.
- NOTE: Ensure that in the examples, you are making the assistant use the Agent tool and not simply respond directly to the task.

Your output must be a valid JSON object with exactly these fields:
{
  "identifier": "A unique, descriptive identifier using lowercase letters, numbers, and hyphens (e.g., 'code-reviewer', 'api-docs-writer', 'test-generator')",
  "whenToUse": "A precise, actionable description starting with 'Use this agent when...' that clearly defines the triggering conditions and use cases. Ensure you include examples as described above.",
  "systemPrompt": "The complete system prompt that will govern the agent's behavior, written in second person ('You are...', 'You will...') and structured for maximum clarity and effectiveness"
}

Key principles for your system prompts:
- Be specific rather than generic - avoid vague instructions
- Include concrete examples when they would clarify behavior
- Balance comprehensiveness with clarity - every instruction should add value
- Ensure the agent has enough context to handle variations of the core task
- Make the agent proactive in seeking clarification when needed
- Build in quality assurance and self-correction mechanisms

Remember: The agents you create should be autonomous experts capable of handling their designated tasks with minimal additional guidance. Your system prompts are their complete operational manual.
`
});

function QK9() {
    let {
        updateWizardData: A,
        goBack: Q,
        goToStep: B,
        wizardData: G
    } = NI(), [Z, I] = rD.useState(G.generationPrompt || ""), [Y, J] = rD.useState(!1), [W, X] = rD.useState(null), [F, V] = rD.useState(Z.length), K = tn(), D = rD.useRef(null);
    h1((E, z) => {
        if (z.escape) {
            if (Y && D.current) D.current.abort(), D.current = null, J(!1), X("Generation cancelled");
            else if (!Y) A({
                generationPrompt: "",
                agentType: "",
                systemPrompt: "",
                whenToUse: "",
                generatedAgent: void 0,
                wasGenerated: !1
            }), I(""), X(null), Q()
        }
    });
    let H = async () => {
        let E = Z.trim();
        if (!E) {
            X("Please describe what the agent should do");
            return
        }
        X(null), J(!0), A({
            generationPrompt: E,
            isGenerating: !0
        });
        let z = s9();
        D.current = z;
        try {
            let w = await eV9(E, K, [], z.signal);
            A({
                agentType: w.identifier,
                whenToUse: w.whenToUse,
                systemPrompt: w.systemPrompt,
                generatedAgent: w,
                isGenerating: !1,
                wasGenerated: !0
            }), B(6)
        } catch (w) {
            if (w instanceof Error && !w.message.includes("No assistant message found")) X(w.message || "Failed to generate agent");
            A({
                isGenerating: !1
            })
        } finally {
            J(!1), D.current = null
        }
    }, C = "Describe what this agent should do and when it should be used (be comprehensive for best results)";
    if (Y) return rD.default.createElement(sJ, {
        subtitle: C,
        footerText: "Esc to cancel"
    }, rD.default.createElement(j, {
        marginTop: 1,
        flexDirection: "row",
        alignItems: "center"
    }, rD.default.createElement(e9, null), rD.default.createElement($, {
        color: "suggestion"
    }, " Generating agent from description...")));
    return rD.default.createElement(sJ, {
        subtitle: C,
        footerText: "Press Enter to submit · Esc to go back"
    }, rD.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, W && rD.default.createElement(j, {
        marginBottom: 1
    }, rD.default.createElement($, {
        color: "error"
    }, W)), rD.default.createElement(s4, {
        value: Z,
        onChange: I,
        onSubmit: H,
        placeholder: "e.g., Help me write unit tests for my code...",
        columns: 80,
        cursorOffset: F,
        onChangeCursorOffset: V,
        focus: !0,
        showCursor: !0
    })))
}
var rD;
var BK9 = L(() => {
    hA();
    hA();
    QY();
    yO();
    QN();
    zI();
    AK9();
    bPA();
    UZ();
    rD = GA(VA(), 1)
});

function VV0(A) {
    if (!A) return "Agent type is required";
    if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/.test(A)) return "Agent type must start and end with alphanumeric characters and contain only letters, numbers, and hyphens";
    if (A.length < 3) return "Agent type must be at least 3 characters long";
    if (A.length > 50) return "Agent type must be less than 50 characters";
    return null
}

function GK9(A, Q, B) {
    let G = [],
        Z = [];
    if (!A.agentType) G.push("Agent type is required");
    else {
        let Y = VV0(A.agentType);
        if (Y) G.push(Y);
        let J = B.find((W) => W.agentType === A.agentType && W.source !== A.source);
        if (J) G.push(`Agent type "${A.agentType}" already exists in ${XFA(J.source)}`)
    }
    if (!A.whenToUse) G.push("Description (description) is required");
    else if (A.whenToUse.length < 10) Z.push("Description should be more descriptive (at least 10 characters)");
    else if (A.whenToUse.length > 5000) Z.push("Description is very long (over 5000 characters)");
    if (A.tools !== void 0 && !Array.isArray(A.tools)) G.push("Tools must be an array");
    else {
        if (A.tools === void 0) Z.push("Agent has access to all tools");
        else if (A.tools.length === 0) Z.push("No tools selected - agent will have very limited capabilities");
        let Y = CWA(A, Q, !1);
        if (Y.invalidTools.length > 0) G.push(`Invalid tools: ${Y.invalidTools.join(", ")}`)
    }
    let I = A.getSystemPrompt();
    if (!I) G.push("System prompt is required");
    else if (I.length < 20) G.push("System prompt is too short (minimum 20 characters)");
    else if (I.length > 1e4) Z.push("System prompt is very long (over 10,000 characters)");
    return {
        isValid: G.length === 0,
        errors: G,
        warnings: Z
    }
}
var KV0 = L(() => {
    EWA();
    kY1()
});

function ZK9(A) {
    let {
        goNext: Q,
        goBack: B,
        updateWizardData: G,
        wizardData: Z
    } = NI(), [I, Y] = xO.useState(Z.agentType || ""), [J, W] = xO.useState(null), [X, F] = xO.useState(I.length);
    return h1((K, D) => {
        if (D.escape) B()
    }), xO.default.createElement(sJ, {
        subtitle: "Agent type (identifier)",
        footerText: "Type to enter text · Enter to continue · Esc to go back"
    }, xO.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, xO.default.createElement($, null, "Enter a unique identifier for your agent:"), xO.default.createElement(j, {
        marginTop: 1
    }, xO.default.createElement(s4, {
        value: I,
        onChange: Y,
        onSubmit: (K) => {
            let D = K.trim(),
                H = VV0(D);
            if (H) {
                W(H);
                return
            }
            W(null), G({
                agentType: D
            }), Q()
        },
        placeholder: "e.g., code-reviewer, tech-lead, etc",
        columns: 60,
        cursorOffset: X,
        onChangeCursorOffset: F,
        focus: !0,
        showCursor: !0
    })), J && xO.default.createElement(j, {
        marginTop: 1
    }, xO.default.createElement($, {
        color: "error"
    }, J))))
}
var xO;
var IK9 = L(() => {
    hA();
    hA();
    QY();
    yO();
    QN();
    KV0();
    xO = GA(VA(), 1)
});

function YK9() {
    let {
        goNext: A,
        goBack: Q,
        updateWizardData: B,
        wizardData: G
    } = NI(), [Z, I] = BN.useState(G.systemPrompt || ""), [Y, J] = BN.useState(Z.length), [W, X] = BN.useState(null);
    return h1((V, K) => {
        if (K.escape) Q()
    }), BN.default.createElement(sJ, {
        subtitle: "System prompt",
        footerText: "Type to enter text · Enter to continue · Esc to go back"
    }, BN.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, BN.default.createElement($, null, "Enter the system prompt for your agent:"), BN.default.createElement($, {
        dimColor: !0
    }, "Be comprehensive for best results"), BN.default.createElement(j, {
        marginTop: 1
    }, BN.default.createElement(s4, {
        value: Z,
        onChange: I,
        onSubmit: () => {
            let V = Z.trim();
            if (!V) {
                X("System prompt is required");
                return
            }
            X(null), B({
                systemPrompt: V
            }), A()
        },
        placeholder: "You are a helpful code reviewer who...",
        columns: 80,
        cursorOffset: Y,
        onChangeCursorOffset: J,
        focus: !0,
        showCursor: !0
    })), W && BN.default.createElement(j, {
        marginTop: 1
    }, BN.default.createElement($, {
        color: "error"
    }, W))))
}
var BN;
var JK9 = L(() => {
    hA();
    hA();
    QY();
    yO();
    QN();
    BN = GA(VA(), 1)
});

function WK9() {
    let {
        goNext: A,
        goBack: Q,
        updateWizardData: B,
        wizardData: G
    } = NI(), [Z, I] = vO.useState(G.whenToUse || ""), [Y, J] = vO.useState(Z.length), [W, X] = vO.useState(null);
    return h1((V, K) => {
        if (K.escape) Q()
    }), vO.default.createElement(sJ, {
        subtitle: "Description (tell Claude when to use this agent)",
        footerText: "Type to enter text · Enter to continue · Esc to go back"
    }, vO.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, vO.default.createElement($, null, "When should Claude use this agent?"), vO.default.createElement(j, {
        marginTop: 1
    }, vO.default.createElement(s4, {
        value: Z,
        onChange: I,
        onSubmit: (V) => {
            let K = V.trim();
            if (!K) {
                X("Description is required");
                return
            }
            X(null), B({
                whenToUse: K
            }), A()
        },
        placeholder: "e.g., use this agent after you're done writing code...",
        columns: 80,
        cursorOffset: Y,
        onChangeCursorOffset: J,
        focus: !0,
        showCursor: !0
    })), W && vO.default.createElement(j, {
        marginTop: 1
    }, vO.default.createElement($, {
        color: "error"
    }, W))))
}
var vO;
var XK9 = L(() => {
    hA();
    hA();
    QY();
    yO();
    QN();
    vO = GA(VA(), 1)
});

function y_3(A) {
    let Q = new Map;
    return A.forEach((B) => {
        if (vb(B)) {
            let G = FU(B.name);
            if (G?.serverName) {
                let Z = Q.get(G.serverName) || [];
                Z.push(B), Q.set(G.serverName, Z)
            }
        }
    }), Array.from(Q.entries()).map(([B, G]) => ({
        serverName: B,
        tools: G
    })).sort((B, G) => B.serverName.localeCompare(G.serverName))
}

function vY1({
    tools: A,
    initialTools: Q,
    onComplete: B,
    onCancel: G
}) {
    let Z = JF.useMemo(() => u30({
            tools: A,
            isBuiltIn: !1,
            isAsync: !1
        }), [A]),
        I = !Q || Q.includes("*") ? Z.map((x) => x.name) : Q,
        [Y, J] = JF.useState(I),
        [W, X] = JF.useState(0),
        [F, V] = JF.useState(!1),
        K = JF.useMemo(() => {
            let x = new Set(Z.map((p) => p.name));
            return Y.filter((p) => x.has(p))
        }, [Y, Z]),
        D = new Set(K),
        H = K.length === Z.length && Z.length > 0,
        C = (x) => {
            if (!x) return;
            J((p) => p.includes(x) ? p.filter((u) => u !== x) : [...p, x])
        },
        E = (x, p) => {
            J((u) => {
                if (p) {
                    let o = x.filter((l) => !u.includes(l));
                    return [...u, ...o]
                } else return u.filter((o) => !x.includes(o))
            })
        },
        z = () => {
            let x = Z.map((o) => o.name),
                u = K.length === x.length && x.every((o) => K.includes(o)) ? void 0 : K;
            B(u)
        },
        w = JF.useMemo(() => {
            let x = FK9(),
                p = {
                    readOnly: [],
                    edit: [],
                    execution: [],
                    mcp: [],
                    other: []
                };
            return Z.forEach((u) => {
                if (vb(u)) p.mcp.push(u);
                else if (x.READ_ONLY.toolNames.has(u.name)) p.readOnly.push(u);
                else if (x.EDIT.toolNames.has(u.name)) p.edit.push(u);
                else if (x.EXECUTION.toolNames.has(u.name)) p.execution.push(u);
                else if (u.name !== s8) p.other.push(u)
            }), p
        }, [Z]),
        N = (x) => {
            let u = x.filter((o) => D.has(o.name)).length < x.length;
            return () => {
                let o = x.map((l) => l.name);
                E(o, u)
            }
        },
        q = [];
    q.push({
        id: "continue",
        label: "Continue",
        action: z,
        isContinue: !0
    }), q.push({
        id: "bucket-all",
        label: `${H?V1.checkboxOn:V1.checkboxOff} All tools`,
        action: () => {
            let x = Z.map((p) => p.name);
            E(x, !H)
        }
    });
    let R = FK9();
    [{
        id: "bucket-readonly",
        name: R.READ_ONLY.name,
        tools: w.readOnly
    }, {
        id: "bucket-edit",
        name: R.EDIT.name,
        tools: w.edit
    }, {
        id: "bucket-execution",
        name: R.EXECUTION.name,
        tools: w.execution
    }, {
        id: "bucket-mcp",
        name: R.MCP.name,
        tools: w.mcp
    }, {
        id: "bucket-other",
        name: R.OTHER.name,
        tools: w.other
    }].forEach(({
        id: x,
        name: p,
        tools: u
    }) => {
        if (u.length === 0) return;
        let l = u.filter((k) => D.has(k.name)).length === u.length;
        q.push({
            id: x,
            label: `${l?V1.checkboxOn:V1.checkboxOff} ${p}`,
            action: N(u)
        })
    });
    let y = q.length;
    q.push({
        id: "toggle-individual",
        label: F ? "Hide advanced options" : "Show advanced options",
        action: () => {
            if (V(!F), F && W > y) X(y)
        },
        isToggle: !0
    });
    let v = JF.useMemo(() => y_3(Z), [Z]);
    if (F) {
        if (v.length > 0) q.push({
            id: "mcp-servers-header",
            label: "MCP Servers:",
            action: () => {},
            isHeader: !0
        }), v.forEach(({
            serverName: x,
            tools: p
        }) => {
            let o = p.filter((l) => D.has(l.name)).length === p.length;
            q.push({
                id: `mcp-server-${x}`,
                label: `${o?V1.checkboxOn:V1.checkboxOff} ${x} (${p.length} tool${p.length===1?"":"s"})`,
                action: () => {
                    let l = p.map((k) => k.name);
                    E(l, !o)
                }
            })
        }), q.push({
            id: "tools-header",
            label: "Individual Tools:",
            action: () => {},
            isHeader: !0
        });
        Z.forEach((x) => {
            let p = x.name;
            if (x.name.startsWith("mcp__")) {
                let u = FU(x.name);
                p = u ? `${u.toolName} (${u.serverName})` : x.name
            }
            q.push({
                id: `tool-${x.name}`,
                label: `${D.has(x.name)?V1.checkboxOn:V1.checkboxOff} ${p}`,
                action: () => C(x.name)
            })
        })
    }
    return h1((x, p) => {
        if (p.return) {
            let u = q[W];
            if (u && !u.isHeader) u.action()
        } else if (p.escape)
            if (G) G();
            else B(Q);
        else if (p.upArrow) {
            let u = W - 1;
            while (u > 0 && q[u]?.isHeader) u--;
            X(Math.max(0, u))
        } else if (p.downArrow) {
            let u = W + 1;
            while (u < q.length - 1 && q[u]?.isHeader) u++;
            X(Math.min(q.length - 1, u))
        }
    }), JF.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, JF.default.createElement($, {
        color: W === 0 ? "suggestion" : void 0,
        bold: W === 0
    }, W === 0 ? `${V1.pointer} ` : "  ", "[ Continue ]"), JF.default.createElement($, {
        dimColor: !0
    }, "─".repeat(40)), q.slice(1).map((x, p) => {
        let u = p + 1 === W,
            o = x.isToggle,
            l = x.isHeader;
        return JF.default.createElement(JF.default.Fragment, {
            key: x.id
        }, o && JF.default.createElement($, {
            dimColor: !0
        }, "─".repeat(40)), l && p > 0 && JF.default.createElement(j, {
            marginTop: 1
        }), JF.default.createElement($, {
            color: l ? void 0 : u ? "suggestion" : void 0,
            dimColor: l,
            bold: o && u
        }, l ? "" : u ? `${V1.pointer} ` : "  ", o ? `[ ${x.label} ]` : x.label))
    }), JF.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, JF.default.createElement($, {
        dimColor: !0
    }, H ? "All tools selected" : `${D.size} of ${Z.length} tools selected`)))
}
var JF, FK9 = () => ({
    READ_ONLY: {
        name: "Read-only tools",
        toolNames: new Set([FO.name, Hy.name, xq.name, d8.name, cF.name, tI.name, hjA.name, lI1.name, iI1.name, Xh.name, Fh.name])
    },
    EDIT: {
        name: "Edit tools",
        toolNames: new Set([gD.name, oX.name, LP.name])
    },
    EXECUTION: {
        name: "Execution tools",
        toolNames: new Set([X9.name, void 0].filter(Boolean))
    },
    MCP: {
        name: "MCP tools",
        toolNames: new Set,
        isMcp: !0
    },
    OTHER: {
        name: "Other tools",
        toolNames: new Set
    }
});
var DV0 = L(() => {
    hA();
    hA();
    n2();
    xX();
    RRA();
    MRA();
    RTA();
    Kq();
    hWA();
    Ht();
    kX0();
    jX0();
    _X0();
    jB1();
    SB1();
    Wn();
    gh();
    eJA();
    nV();
    EWA();
    JF = GA(VA(), 1)
});

function VK9({
    tools: A
}) {
    let {
        goNext: Q,
        goBack: B,
        updateWizardData: G,
        wizardData: Z
    } = NI(), I = (J) => {
        G({
            selectedTools: J
        }), Q()
    }, Y = Z.selectedTools;
    return HV0.default.createElement(sJ, {
        subtitle: "Select tools",
        footerText: "Press Enter to toggle selection · ↑↓ to navigate · Esc to go back"
    }, HV0.default.createElement(vY1, {
        tools: A,
        initialTools: Y,
        onComplete: I,
        onCancel: B
    }))
}
var HV0;
var KK9 = L(() => {
    DV0();
    yO();
    QN();
    HV0 = GA(VA(), 1)
});

function bY1({
    initialModel: A,
    onComplete: Q,
    onCancel: B
}) {
    let G = bO.useMemo(() => tRB(), []),
        Z = bO.useMemo(() => {
            if (A && G.some((I) => I.value === A)) return A;
            return "sonnet"
        }, [A, G]);
    return bO.createElement(j, {
        flexDirection: "column"
    }, bO.createElement(j, {
        marginBottom: 1
    }, bO.createElement($, {
        dimColor: !0
    }, "Model determines the agent's reasoning capabilities and speed.")), bO.createElement(M0, {
        options: G,
        defaultValue: Z,
        onChange: (I) => {
            Q(I)
        },
        onCancel: () => B ? B() : Q(A)
    }))
}
var bO;
var CV0 = L(() => {
    hA();
    T5();
    s2();
    bO = GA(VA(), 1)
});

function DK9() {
    let {
        goNext: A,
        goBack: Q,
        updateWizardData: B,
        wizardData: G
    } = NI(), Z = (I) => {
        B({
            selectedModel: I
        }), A()
    };
    return EV0.default.createElement(sJ, {
        subtitle: "Select model",
        footerText: "Press ↑↓ to navigate · Enter to select · Esc to go back"
    }, EV0.default.createElement(bY1, {
        initialModel: G.selectedModel,
        onComplete: Z,
        onCancel: Q
    }))
}
var EV0;
var HK9 = L(() => {
    CV0();
    yO();
    QN();
    EV0 = GA(VA(), 1)
});

function fY1({
    agentName: A,
    currentColor: Q = "automatic",
    onConfirm: B
}) {
    let [G, Z] = Zz.useState(Math.max(0, FFA.findIndex((Y) => Y === Q)));
    h1((Y, J) => {
        if (J.upArrow) Z((W) => W > 0 ? W - 1 : FFA.length - 1);
        else if (J.downArrow) Z((W) => W < FFA.length - 1 ? W + 1 : 0);
        else if (J.return) {
            let W = FFA[G];
            B(W === "automatic" ? void 0 : W)
        }
    });
    let I = FFA[G];
    return Zz.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, Zz.default.createElement(j, {
        flexDirection: "column"
    }, FFA.map((Y, J) => {
        let W = J === G;
        return Zz.default.createElement(j, {
            key: Y,
            flexDirection: "row",
            gap: 1
        }, Zz.default.createElement($, {
            color: W ? "suggestion" : void 0
        }, W ? V1.pointer : " "), Y === "automatic" ? Zz.default.createElement($, {
            bold: W
        }, "Automatic color") : Zz.default.createElement(j, {
            gap: 1
        }, Zz.default.createElement($, {
            backgroundColor: v61[Y],
            color: "inverseText"
        }, " "), Zz.default.createElement($, {
            bold: W
        }, Y.charAt(0).toUpperCase() + Y.slice(1))))
    })), Zz.default.createElement(j, {
        marginTop: 1
    }, Zz.default.createElement($, null, "Preview: "), I === void 0 || I === "automatic" ? Zz.default.createElement($, {
        inverse: !0,
        bold: !0
    }, " ", A, " ") : Zz.default.createElement($, {
        backgroundColor: v61[I],
        color: "inverseText",
        bold: !0
    }, " ", A, " ")))
}
var Zz, FFA;
var zV0 = L(() => {
    hA();
    Yn();
    n2();
    Zz = GA(VA(), 1), FFA = ["automatic", ...rJA]
});

function CK9() {
    let {
        goNext: A,
        goBack: Q,
        updateWizardData: B,
        wizardData: G
    } = NI();
    h1((I, Y) => {
        if (Y.escape) Q()
    });
    let Z = (I) => {
        B({
            selectedColor: I,
            finalAgent: {
                agentType: G.agentType,
                whenToUse: G.whenToUse,
                getSystemPrompt: () => G.systemPrompt,
                tools: G.selectedTools,
                ...G.selectedModel ? {
                    model: G.selectedModel
                } : {},
                ...I ? {
                    color: I
                } : {},
                source: G.location
            }
        }), A()
    };
    return hY1.default.createElement(sJ, {
        subtitle: "Choose background color",
        footerText: "Press ↑↓ to navigate · Enter to select · Esc to go back"
    }, hY1.default.createElement(j, {
        marginTop: 1
    }, hY1.default.createElement(fY1, {
        agentName: G.agentType || "agent",
        currentColor: "automatic",
        onConfirm: Z
    })))
}
var hY1;
var EK9 = L(() => {
    hA();
    hA();
    zV0();
    yO();
    QN();
    hY1 = GA(VA(), 1)
});

function zK9({
    tools: A,
    existingAgents: Q,
    onSave: B,
    onSaveAndEdit: G,
    error: Z
}) {
    let {
        goBack: I,
        wizardData: Y
    } = NI();
    h1((F, V) => {
        if (V.escape) I();
        else if (F === "s" || V.return) B();
        else if (F === "e") G()
    });
    let J = Y.finalAgent,
        W = GK9(J, A, Q),
        X = (F) => {
            if (F === void 0) return "All tools";
            if (F.length === 0) return "None";
            if (F.length === 1) return F[0] || "None";
            if (F.length === 2) return F.join(" and ");
            return `${F.slice(0,-1).join(", ")}, and ${F[F.length-1]}`
        };
    return H3.default.createElement(sJ, {
        subtitle: "Confirm and save",
        footerText: "Press s/Enter to save · e to edit in your editor · Esc to cancel"
    }, H3.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, H3.default.createElement($, null, H3.default.createElement($, {
        bold: !0
    }, "Name"), ": ", J.agentType), H3.default.createElement($, null, H3.default.createElement($, {
        bold: !0
    }, "Location"), ":", " ", dV9({
        source: Y.location,
        agentType: J.agentType
    })), H3.default.createElement($, null, H3.default.createElement($, {
        bold: !0
    }, "Tools"), ": ", X(J.tools)), H3.default.createElement($, null, H3.default.createElement($, {
        bold: !0
    }, "Model"), ": ", XrA(J.model)), H3.default.createElement(j, {
        marginTop: 1
    }, H3.default.createElement($, null, H3.default.createElement($, {
        bold: !0
    }, "Description"), " (tells Claude when to use this agent):")), H3.default.createElement(j, {
        marginLeft: 2,
        marginTop: 1
    }, H3.default.createElement($, null, J.whenToUse.length > 240 ? J.whenToUse.slice(0, 240) + "…" : J.whenToUse)), H3.default.createElement(j, {
        marginTop: 1
    }, H3.default.createElement($, null, H3.default.createElement($, {
        bold: !0
    }, "System prompt"), ":")), H3.default.createElement(j, {
        marginLeft: 2,
        marginTop: 1
    }, H3.default.createElement($, null, (() => {
        let F = J.getSystemPrompt();
        return F.length > 240 ? F.slice(0, 240) + "…" : F
    })())), W.warnings.length > 0 && H3.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, H3.default.createElement($, {
        color: "warning"
    }, "Warnings:"), W.warnings.map((F, V) => H3.default.createElement($, {
        key: V,
        dimColor: !0
    }, " ", "• ", F))), W.errors.length > 0 && H3.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, H3.default.createElement($, {
        color: "error"
    }, "Errors:"), W.errors.map((F, V) => H3.default.createElement($, {
        key: V,
        color: "error"
    }, " ", "• ", F))), Z && H3.default.createElement(j, {
        marginTop: 1
    }, H3.default.createElement($, {
        color: "error"
    }, Z)), H3.default.createElement(j, {
        marginTop: 2
    }, H3.default.createElement($, {
        color: "success"
    }, "Press ", H3.default.createElement($, {
        bold: !0
    }, "s"), " or ", H3.default.createElement($, {
        bold: !0
    }, "Enter"), " to save,", " ", H3.default.createElement($, {
        bold: !0
    }, "e"), " to save and edit"))))
}
var H3;
var UK9 = L(() => {
    hA();
    hA();
    yO();
    QN();
    KV0();
    WFA();
    s2();
    H3 = GA(VA(), 1)
});

function $K9({
    tools: A,
    existingAgents: Q,
    onComplete: B
}) {
    let {
        wizardData: G
    } = NI(), [Z, I] = vQA.useState(null), [, Y] = _Q(), J = vQA.useCallback(async () => {
        if (!G?.finalAgent) return;
        try {
            await BV0(G.location, G.finalAgent.agentType, G.finalAgent.whenToUse, G.finalAgent.tools, G.finalAgent.getSystemPrompt(), !0, G.finalAgent.color, G.finalAgent.model), Y((X) => {
                if (!G.finalAgent) return X;
                let F = X.agentDefinitions.allAgents.concat(G.finalAgent);