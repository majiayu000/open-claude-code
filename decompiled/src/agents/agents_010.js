/**
 * Claude Code Decompiled
 * Category: agents
 * File: 10/13
 * Lines: 427723 - 429221 (1499 lines)
 * Original file: cli.js
 */

                return {
                    ...X,
                    agentDefinitions: {
                        ...X.agentDefinitions,
                        activeAgents: My(F),
                        allAgents: F
                    }
                }
            }), BA("tengu_agent_created", {
                agent_type: G.finalAgent.agentType,
                generation_method: G.wasGenerated ? "generated" : "manual",
                source: G.location,
                tool_count: G.finalAgent.tools?.length ?? "all",
                has_custom_model: !!G.finalAgent.model,
                has_custom_color: !!G.finalAgent.color
            }), B(`Created agent: ${oA.bold(G.finalAgent.agentType)}`)
        } catch (X) {
            I(X instanceof Error ? X.message : "Failed to save agent")
        }
    }, [G, B, Y]), W = vQA.useCallback(async () => {
        if (!G?.finalAgent) return;
        try {
            await BV0(G.location, G.finalAgent.agentType, G.finalAgent.whenToUse, G.finalAgent.tools, G.finalAgent.getSystemPrompt(), !0, G.finalAgent.color, G.finalAgent.model), Y((F) => {
                if (!G.finalAgent) return F;
                let V = F.agentDefinitions.allAgents.concat(G.finalAgent);
                return {
                    ...F,
                    agentDefinitions: {
                        ...F.agentDefinitions,
                        activeAgents: My(V),
                        allAgents: V
                    }
                }
            });
            let X = QV0({
                source: G.location,
                agentType: G.finalAgent.agentType
            });
            await xn(X), BA("tengu_agent_created", {
                agent_type: G.finalAgent.agentType,
                generation_method: G.wasGenerated ? "generated" : "manual",
                source: G.location,
                tool_count: G.finalAgent.tools?.length ?? "all",
                has_custom_model: !!G.finalAgent.model,
                has_custom_color: !!G.finalAgent.color,
                opened_in_editor: !0
            }), B(`Created agent: ${oA.bold(G.finalAgent.agentType)} and opened in editor. If you made edits, restart to load the latest version.`)
        } catch (X) {
            I(X instanceof Error ? X.message : "Failed to save agent")
        }
    }, [G, B, Y]);
    return vQA.default.createElement(zK9, {
        tools: A,
        existingAgents: Q,
        onSave: J,
        onSaveAndEdit: W,
        error: Z
    })
}
var vQA;
var wK9 = L(() => {
    J9();
    QN();
    UK9();
    WFA();
    Oy();
    vn();
    w0();
    H9();
    vQA = GA(VA(), 1)
});

function qK9({
    tools: A,
    existingAgents: Q,
    onComplete: B,
    onCancel: G
}) {
    return ejA.default.createElement(IV0, {
        steps: [sV9, oV9, QK9, () => ejA.default.createElement(ZK9, {
            existingAgents: Q
        }), YK9, WK9, () => ejA.default.createElement(VK9, {
            tools: A
        }), DK9, CK9, () => ejA.default.createElement($K9, {
            tools: A,
            existingAgents: Q,
            onComplete: B
        })],
        initialData: {},
        onComplete: () => {},
        onCancel: G,
        title: "Create new agent",
        showStepCounter: !1
    })
}
var ejA;
var NK9 = L(() => {
    QN();
    rV9();
    tV9();
    BK9();
    IK9();
    JK9();
    XK9();
    KK9();
    HK9();
    EK9();
    wK9();
    ejA = GA(VA(), 1)
});

function LK9({
    agent: A,
    tools: Q,
    onSaved: B,
    onBack: G
}) {
    let [, Z] = _Q(), [I, Y] = fO.useState("menu"), [J, W] = fO.useState(0), [X, F] = fO.useState(null), [V, K] = fO.useState(A.color), D = fO.useCallback(async () => {
        try {
            let N = _Y1(A);
            await xn(N), B(`Opened ${A.agentType} in editor. If you made edits, restart to load the latest version.`)
        } catch (N) {
            F(N instanceof Error ? N.message : "Failed to open editor")
        }
    }, [A, B]), H = fO.useCallback(async (N = {}) => {
        let {
            tools: q,
            color: R,
            model: P
        } = N, y = R ?? V, v = q !== void 0, x = P !== void 0, p = y !== A.color;
        if (!v && !x && !p) return !1;
        try {
            if (!Ob2(A) && !v51(A)) return !1;
            if (await pV9(A, A.whenToUse, q ?? A.tools, A.getSystemPrompt(), y, P ?? A.model), p && y) tJA(A.agentType, y);
            return Z((u) => {
                let o = u.agentDefinitions.allAgents.map((l) => l.agentType === A.agentType ? {
                    ...l,
                    tools: q ?? l.tools,
                    color: y,
                    model: P ?? l.model
                } : l);
                return {
                    ...u,
                    agentDefinitions: {
                        ...u.agentDefinitions,
                        activeAgents: My(o),
                        allAgents: o
                    }
                }
            }), B(`Updated agent: ${oA.bold(A.agentType)}`), !0
        } catch (u) {
            return F(u instanceof Error ? u.message : "Failed to save agent"), !1
        }
    }, [A, V, B, Z]), C = fO.useMemo(() => [{
        label: "Open in editor",
        action: D
    }, {
        label: "Edit tools",
        action: () => Y("edit-tools")
    }, {
        label: "Edit model",
        action: () => Y("edit-model")
    }, {
        label: "Edit color",
        action: () => Y("edit-color")
    }], [D]), E = fO.useCallback(() => {
        if (F(null), I === "menu") G();
        else Y("menu")
    }, [I, G]), z = fO.useCallback((N) => {
        if (N.upArrow) W((q) => Math.max(0, q - 1));
        else if (N.downArrow) W((q) => Math.min(C.length - 1, q + 1));
        else if (N.return) {
            let q = C[J];
            if (q) q.action()
        }
    }, [C, J]);
    h1((N, q) => {
        if (q.escape) {
            E();
            return
        }
        if (I === "menu") z(q)
    });
    let w = () => rF.createElement(j, {
        flexDirection: "column"
    }, rF.createElement($, {
        dimColor: !0
    }, "Source: ", XFA(A.source)), rF.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, C.map((N, q) => rF.createElement($, {
        key: N.label,
        color: q === J ? "suggestion" : void 0
    }, q === J ? `${V1.pointer} ` : "  ", N.label))), X && rF.createElement(j, {
        marginTop: 1
    }, rF.createElement($, {
        color: "error"
    }, X)));
    switch (I) {
        case "menu":
            return w();
        case "edit-tools":
            return rF.createElement(vY1, {
                tools: Q,
                initialTools: A.tools,
                onComplete: async (N) => {
                    Y("menu"), await H({
                        tools: N
                    })
                }
            });
        case "edit-color":
            return rF.createElement(fY1, {
                agentName: A.agentType,
                currentColor: V || A.color || "automatic",
                onConfirm: async (N) => {
                    K(N), Y("menu"), await H({
                        color: N
                    })
                }
            });
        case "edit-model":
            return rF.createElement(bY1, {
                initialModel: A.model,
                onComplete: async (N) => {
                    Y("menu"), await H({
                        model: N
                    })
                }
            });
        default:
            return null
    }
}
var rF, fO;
var MK9 = L(() => {
    hA();
    J9();
    Oy();
    DV0();
    zV0();
    CV0();
    WFA();
    vn();
    Yn();
    n2();
    kY1();
    H9();
    rF = GA(VA(), 1), fO = GA(VA(), 1)
});

function OK9({
    agent: A,
    tools: Q,
    onBack: B
}) {
    let [G] = $B(), Z = CWA(A, Q, !1), I = cV9(A), Y = oJA(A.agentType);
    h1((W, X) => {
        if (X.escape || X.return) B()
    });

    function J() {
        if (Z.hasWildcard) return l2.createElement($, null, "All tools");
        if (!A.tools || A.tools.length === 0) return l2.createElement($, null, "None");
        return l2.createElement(l2.Fragment, null, Z.validTools.length > 0 && l2.createElement($, null, Z.validTools.join(", ")), Z.invalidTools.length > 0 && l2.createElement($, {
            color: "warning"
        }, V1.warning, " Unrecognized:", " ", Z.invalidTools.join(", ")))
    }
    return l2.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, l2.createElement($, {
        dimColor: !0
    }, I), l2.createElement(j, {
        flexDirection: "column"
    }, l2.createElement($, null, l2.createElement($, {
        bold: !0
    }, "Description"), " (tells Claude when to use this agent):"), l2.createElement(j, {
        marginLeft: 2
    }, l2.createElement($, null, A.whenToUse))), l2.createElement(j, null, l2.createElement($, null, l2.createElement($, {
        bold: !0
    }, "Tools"), ":", " "), J()), l2.createElement($, null, l2.createElement($, {
        bold: !0
    }, "Model"), ": ", XrA(A.model)), Y && l2.createElement(j, null, l2.createElement($, null, l2.createElement($, {
        bold: !0
    }, "Color"), ":", " ", l2.createElement($, {
        backgroundColor: Y,
        color: "inverseText"
    }, " ", A.agentType, " "))), !Ly(A) && l2.createElement(l2.Fragment, null, l2.createElement(j, null, l2.createElement($, null, l2.createElement($, {
        bold: !0
    }, "System prompt"), ":")), l2.createElement(j, {
        marginLeft: 2,
        marginRight: 2
    }, l2.createElement($, null, _D(A.getSystemPrompt(), G)))))
}
var l2;
var RK9 = L(() => {
    hA();
    n2();
    Oy();
    EWA();
    Hh();
    WFA();
    Yn();
    s2();
    l2 = GA(VA(), 1)
});

function VFA({
    instructions: A = "Press ↑↓ to navigate · Enter to select · Esc to go back"
}) {
    let Q = DQ();
    return ASA.createElement(j, {
        marginLeft: 3
    }, ASA.createElement($, {
        dimColor: !0
    }, Q.pending ? `Press ${Q.keyName} again to exit` : A))
}
var ASA;
var TK9 = L(() => {
    hA();
    c9();
    ASA = GA(VA(), 1)
});

function PK9({
    tools: A,
    onExit: Q
}) {
    let [B, G] = Ha.useState({
        mode: "list-agents",
        source: "all"
    }), [Z, I] = _Q(), {
        allAgents: Y,
        activeAgents: J
    } = Z.agentDefinitions, [W, X] = Ha.useState([]), F = BI1(A, Z.mcp.tools);
    DQ();
    let V = Ha.useMemo(() => ({
        "built-in": Y.filter((H) => H.source === "built-in"),
        userSettings: Y.filter((H) => H.source === "userSettings"),
        projectSettings: Y.filter((H) => H.source === "projectSettings"),
        policySettings: Y.filter((H) => H.source === "policySettings"),
        localSettings: Y.filter((H) => H.source === "localSettings"),
        flagSettings: Y.filter((H) => H.source === "flagSettings"),
        plugin: Y.filter((H) => H.source === "plugin"),
        all: Y
    }), [Y]);
    h1((H, C) => {
        if (!C.escape) return;
        let E = W.length > 0 ? `Agent changes:
${W.join(`
`)}` : void 0;
        switch (B.mode) {
            case "list-agents":
                Q(E ?? "Agents dialog dismissed", {
                    display: W.length === 0 ? "system" : void 0
                });
                break;
            case "create-agent":
                return;
            case "view-agent":
                return;
            default:
                if ("previousMode" in B) G(B.previousMode)
        }
    });
    let K = Ha.useCallback((H) => {
            X((C) => [...C, H]), G({
                mode: "list-agents",
                source: "all"
            })
        }, []),
        D = Ha.useCallback(async (H) => {
            try {
                await lV9(H), I((C) => {
                    let E = C.agentDefinitions.allAgents.filter((z) => !(z.agentType === H.agentType && z.source === H.source));
                    return {
                        ...C,
                        agentDefinitions: {
                            ...C.agentDefinitions,
                            allAgents: E,
                            activeAgents: My(E)
                        }
                    }
                }), X((C) => [...C, `Deleted agent: ${oA.bold(H.agentType)}`]), G({
                    mode: "list-agents",
                    source: "all"
                })
            } catch (C) {
                e(C instanceof Error ? C : Error("Failed to delete agent"))
            }
        }, []);
    switch (B.mode) {
        case "list-agents": {
            let H = B.source === "all" ? [...V["built-in"], ...V.userSettings, ...V.projectSettings, ...V.policySettings, ...V.flagSettings, ...V.plugin] : V[B.source],
                C = new Map;
            J.forEach((z) => C.set(z.agentType, z));
            let E = H.map((z) => {
                let w = C.get(z.agentType),
                    N = w && w.source !== z.source ? w.source : void 0;
                return {
                    ...z,
                    overriddenBy: N
                }
            });
            return oB.createElement(oB.Fragment, null, oB.createElement(iV9, {
                source: B.source,
                agents: E,
                onBack: () => {
                    let z = W.length > 0 ? `Agent changes:
${W.join(`
`)}` : void 0;
                    Q(z ?? "Agents dialog dismissed", {
                        display: W.length === 0 ? "system" : void 0
                    })
                },
                onSelect: (z) => G({
                    mode: "agent-menu",
                    agent: z,
                    previousMode: B
                }),
                onCreateNew: () => G({
                    mode: "create-agent"
                }),
                changes: W
            }), oB.createElement(VFA, null))
        }
        case "create-agent":
            return oB.createElement(qK9, {
                tools: F,
                existingAgents: J,
                onComplete: K,
                onCancel: () => G({
                    mode: "list-agents",
                    source: "all"
                })
            });
        case "agent-menu": {
            let C = Y.find((N) => N.agentType === B.agent.agentType && N.source === B.agent.source) || B.agent,
                E = C.source === "built-in",
                z = [{
                    label: "View agent",
                    value: "view"
                }, ...!E ? [{
                    label: "Edit agent",
                    value: "edit"
                }, {
                    label: "Delete agent",
                    value: "delete"
                }] : [], {
                    label: "Back",
                    value: "back"
                }],
                w = (N) => {
                    switch (N) {
                        case "view":
                            G({
                                mode: "view-agent",
                                agent: C,
                                previousMode: B.previousMode
                            });
                            break;
                        case "edit":
                            G({
                                mode: "edit-agent",
                                agent: C,
                                previousMode: B
                            });
                            break;
                        case "delete":
                            G({
                                mode: "delete-confirm",
                                agent: C,
                                previousMode: B
                            });
                            break;
                        case "back":
                            G(B.previousMode);
                            break
                    }
                };
            return oB.createElement(oB.Fragment, null, oB.createElement(Da, {
                title: B.agent.agentType
            }, oB.createElement(j, {
                flexDirection: "column",
                marginTop: 1
            }, oB.createElement(M0, {
                options: z,
                onChange: w,
                onCancel: () => G(B.previousMode)
            }), W.length > 0 && oB.createElement(j, {
                marginTop: 1
            }, oB.createElement($, {
                dimColor: !0
            }, W[W.length - 1])))), oB.createElement(VFA, null))
        }
        case "view-agent": {
            let C = Y.find((E) => E.agentType === B.agent.agentType && E.source === B.agent.source) || B.agent;
            return oB.createElement(oB.Fragment, null, oB.createElement(Da, {
                title: C.agentType
            }, oB.createElement(OK9, {
                agent: C,
                tools: F,
                allAgents: Y,
                onBack: () => G({
                    mode: "agent-menu",
                    agent: C,
                    previousMode: B.previousMode
                })
            })), oB.createElement(VFA, {
                instructions: "Press Enter or Esc to go back"
            }))
        }
        case "delete-confirm": {
            let H = [{
                label: "Yes, delete",
                value: "yes"
            }, {
                label: "No, cancel",
                value: "no"
            }];
            return oB.createElement(oB.Fragment, null, oB.createElement(Da, {
                title: "Delete agent",
                titleColor: "error",
                borderColor: "error"
            }, oB.createElement($, null, "Are you sure you want to delete the agent", " ", oB.createElement($, {
                bold: !0
            }, B.agent.agentType), "?"), oB.createElement(j, {
                marginTop: 1
            }, oB.createElement($, {
                dimColor: !0
            }, "Source: ", B.agent.source)), oB.createElement(j, {
                marginTop: 1
            }, oB.createElement(M0, {
                options: H,
                onChange: (C) => {
                    if (C === "yes") D(B.agent);
                    else if ("previousMode" in B) G(B.previousMode)
                },
                onCancel: () => {
                    if ("previousMode" in B) G(B.previousMode)
                }
            }))), oB.createElement(VFA, {
                instructions: "Press ↑↓ to navigate, Enter to select, Esc to cancel"
            }))
        }
        case "edit-agent": {
            let C = Y.find((E) => E.agentType === B.agent.agentType && E.source === B.agent.source) || B.agent;
            return oB.createElement(oB.Fragment, null, oB.createElement(Da, {
                title: `Edit agent: ${C.agentType}`
            }, oB.createElement(LK9, {
                agent: C,
                tools: F,
                onSaved: (E) => {
                    K(E), G(B.previousMode)
                },
                onBack: () => G(B.previousMode)
            })), oB.createElement(VFA, null))
        }
        default:
            return null
    }
}
var oB, Ha;
var jK9 = L(() => {
    hA();
    hA();
    J9();
    c9();
    Oy();
    WFA();
    T5();
    nV9();
    NK9();
    MK9();
    RK9();
    u1();
    TK9();
    GV0();
    H9();
    NW0();
    oB = GA(VA(), 1), Ha = GA(VA(), 1)
});
var UV0, x_3, SK9;
var _K9 = L(() => {
    jK9();
    jq();
    UV0 = GA(VA(), 1), x_3 = {
        type: "local-jsx",
        name: "agents",
        description: "Manage agent configurations",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            let G = (await Q.getAppState()).toolPermissionContext,
                Z = JC(G);
            return UV0.createElement(PK9, {
                tools: Z,
                onExit: A
            })
        },
        userFacingName() {
            return "agents"
        }
    }, SK9 = x_3
});

function kK9({
    setViewState: A,
    onComplete: Q,
    exitState: B
}) {
    let [G] = _Q(), {
        installationStatus: Z,
        errors: I
    } = G.plugins, Y = Z.marketplaces.length > 0 || Z.plugins.length > 0, J = Z.marketplaces.some((V) => V.status === "failed") || Z.plugins.some((V) => V.status === "failed"), W = I.length > 0, F = [{
        value: "browse-marketplace",
        label: "Browse and install plugins"
    }, {
        value: "manage-plugins",
        label: "Manage and uninstall plugins"
    }, {
        value: "add-marketplace",
        label: "Add marketplace"
    }, {
        value: "manage-marketplaces",
        label: "Manage marketplaces"
    }, ...Y || W ? [{
        value: "installation-status",
        label: `View installation status${J||W?" (errors)":""}`
    }] : []];
    return EY.createElement(j, {
        flexDirection: "column"
    }, EY.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, EY.createElement(j, {
        marginBottom: 1
    }, EY.createElement($, {
        bold: !0
    }, "Plugins")), EY.createElement(M0, {
        options: F,
        onChange: (V) => {
            if (V === "add-marketplace") A({
                type: "add-marketplace"
            });
            else if (V === "manage-marketplaces") A({
                type: "manage-marketplaces"
            });
            else if (V === "browse-marketplace") A({
                type: "browse-marketplace"
            });
            else if (V === "manage-plugins") A({
                type: "manage-plugins"
            });
            else if (V === "installation-status") A({
                type: "installation-status"
            })
        },
        onCancel: () => Q()
    })), EY.createElement(j, {
        marginLeft: 3
    }, EY.createElement($, {
        dimColor: !0,
        italic: !0
    }, B.pending ? EY.createElement(EY.Fragment, null, "Press ", B.keyName, " again to exit") : EY.createElement(EY.Fragment, null, "Press ↑↓ to navigate · Enter to select · Esc to exit"))))
}
var EY;
var yK9 = L(() => {
    hA();
    T5();
    H9();
    EY = GA(VA(), 1)
});
import {
    join as v_3,
    basename as b_3
} from "path";

function xK9(A, Q) {
    let B = [],
        G = OA();

    function Z(I) {
        try {
            let Y = G.readdirSync(I);
            for (let J of Y) {
                let W = v_3(I, J.name);
                if (J.isDirectory()) Z(W);
                else if (J.isFile() && J.name.endsWith(".md")) {
                    let X = vK9(W, Q);
                    if (X) B.push(X)
                }
            }
        } catch (Y) {
            g(`Failed to scan output-styles directory ${I}: ${Y}`, {
                level: "error"
            })
        }
    }
    return Z(A), B
}

function vK9(A, Q) {
    let B = OA();
    try {
        let G = B.readFileSync(A, {
                encoding: "utf-8"
            }),
            {
                frontmatter: Z,
                content: I
            } = yF(G),
            Y = b_3(A, ".md"),
            J = Z.name || Y,
            W = `${Q}:${J}`,
            X = Z.description || qy(I, `Output style from ${Q} plugin`);
        return {
            name: W,
            description: X,
            prompt: I.trim(),
            source: "plugin"
        }
    } catch (G) {
        return g(`Failed to load output style from ${A}: ${G}`, {
            level: "error"
        }), null
    }
}

function wV0() {
    $V0.cache?.clear?.()
}
var $V0;
var gY1 = L(() => {
    o2();
    o0();
    NF();
    D0();
    Ny();
    $V0 = t1(async () => {
        let {
            enabled: A,
            errors: Q
        } = await y7(), B = [];
        if (Q.length > 0) g(`Plugin loading errors: ${Q.map((G)=>BM(G)).join(", ")}`);
        for (let G of A) {
            if (G.outputStylesPath) try {
                let Z = xK9(G.outputStylesPath, G.name);
                if (B.push(...Z), Z.length > 0) g(`Loaded ${Z.length} output styles from plugin ${G.name} default directory`)
            } catch (Z) {
                g(`Failed to load output styles from plugin ${G.name} default directory: ${Z}`, {
                    level: "error"
                })
            }
            if (G.outputStylesPaths)
                for (let Z of G.outputStylesPaths) try {
                    let Y = OA().statSync(Z);
                    if (Y.isDirectory()) {
                        let J = xK9(Z, G.name);
                        if (B.push(...J), J.length > 0) g(`Loaded ${J.length} output styles from plugin ${G.name} custom path: ${Z}`)
                    } else if (Y.isFile() && Z.endsWith(".md")) {
                        let J = vK9(Z, G.name);
                        if (J) B.push(J), g(`Loaded output style from plugin ${G.name} custom file: ${Z}`)
                    }
                } catch (I) {
                    g(`Failed to load output styles from plugin ${G.name} custom path ${Z}: ${I}`, {
                        level: "error"
                    })
                }
        }
        return g(`Total plugin output styles loaded: ${B.length}`), B
    })
});

function f_3() {
    $3A(), ZI1(), Lb2(), cZ2(), wV0()
}

function oF() {
    f_3(), bK9()
}
var bQA = L(() => {
    NF();
    VjA();
    ATA();
    MMA();
    gY1();
    nE()
});
import {
    resolve as h_3
} from "path";
import {
    homedir as g_3
} from "os";

function uY1(A) {
    let Q = A.trim(),
        B = OA(),
        G = Q.match(/^(git@[^:]+:.+\.git)(#(.+))?$/);
    if (G?.[1]) {
        let Z = G[1],
            I = G[3];
        return I ? {
            source: "git",
            url: Z,
            ref: I
        } : {
            source: "git",
            url: Z
        }
    }
    if (Q.startsWith("http://") || Q.startsWith("https://")) {
        let Z = Q.match(/^([^#]+)(#(.+))?$/),
            I = Z?.[1] || Q,
            Y = Z?.[3];
        if (I.endsWith(".git")) return Y ? {
            source: "git",
            url: I,
            ref: Y
        } : {
            source: "git",
            url: I
        };
        let J;
        try {
            J = new URL(I)
        } catch (W) {
            return {
                source: "url",
                url: I
            }
        }
        if (J.hostname === "github.com" || J.hostname === "www.github.com") {
            if (J.pathname.match(/^\/([^/]+\/[^/]+?)(\/|\.git|$)/)?.[1]) {
                let X = I.endsWith(".git") ? I : `${I}.git`;
                return Y ? {
                    source: "git",
                    url: X,
                    ref: Y
                } : {
                    source: "git",
                    url: X
                }
            }
        }
        return {
            source: "url",
            url: I
        }
    }
    if (Q.startsWith("./") || Q.startsWith("../") || Q.startsWith("/") || Q.startsWith("~")) {
        let Z = h_3(Q.startsWith("~") ? Q.replace(/^~/, g_3()) : Q);
        if (!B.existsSync(Z)) return {
            error: `Path does not exist: ${Z}`
        };
        let I = B.statSync(Z);
        if (I.isFile())
            if (Z.endsWith(".json")) return {
                source: "file",
                path: Z
            };
            else return {
                error: `File path must point to a .json file (marketplace.json), but got: ${Z}`
            };
        else if (I.isDirectory()) return {
            source: "directory",
            path: Z
        };
        else return {
            error: `Path is neither a file nor a directory: ${Z}`
        }
    }
    if (Q.includes("/") && !Q.startsWith("@")) {
        if (Q.includes(":")) return null;
        let Z = Q.match(/^([^#]+)(#(.+))?$/),
            I = Z?.[1] || Q,
            Y = Z?.[3];
        return Y ? {
            source: "github",
            repo: I,
            ref: Y
        } : {
            source: "github",
            repo: I
        }
    }
    return null
}
var qV0 = L(() => {
    o0()
});

function fK9({
    inputValue: A,
    setInputValue: Q,
    cursorOffset: B,
    setCursorOffset: G,
    error: Z,
    setError: I,
    result: Y,
    setResult: J,
    setViewState: W,
    onAddComplete: X,
    cliMode: F = !1
}) {
    let V = fQA.useRef(!1),
        [K, D] = fQA.useState(!1),
        [H, C] = fQA.useState(""),
        E = async () => {
            let z = A.trim();
            if (!z) {
                I("Please enter a marketplace source");
                return
            }
            let w = uY1(z);
            if (!w) {
                I("Invalid marketplace source format. Try: owner/repo, https://..., or ./path");
                return
            }
            if ("error" in w) {
                I(w.error);
                return
            }
            I(null);
            try {
                D(!0), C("");
                let {
                    name: N
                } = await go(w, (R) => {
                    C(R)
                });
                oF();
                let q = w.source;
                if (w.source === "github") q = w.repo;
                if (BA("tengu_marketplace_added", {
                        source_type: q
                    }), X) await X();
                if (C(""), D(!1), F) J(`Successfully added marketplace: ${N}`);
                else W({
                    type: "browse-marketplace",
                    targetMarketplace: N
                })
            } catch (N) {
                let q = N instanceof Error ? N : Error(String(N));
                if (e(q), I(q.message), C(""), D(!1), F) J(`Error: ${q.message}`);
                else J(null)
            }
        };
    return fQA.useEffect(() => {
        if (A && !V.current && !Z && !Y) V.current = !0, E()
    }, []), Q8.createElement(j, {
        flexDirection: "column"
    }, Q8.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, Q8.createElement(j, {
        marginBottom: 1
    }, Q8.createElement($, {
        bold: !0
    }, "Add Marketplace")), Q8.createElement(j, {
        flexDirection: "column"
    }, Q8.createElement($, null, "Enter marketplace source:"), Q8.createElement($, {
        dimColor: !0
    }, "Examples:"), Q8.createElement($, {
        dimColor: !0
    }, " • owner/repo (GitHub)"), Q8.createElement($, {
        dimColor: !0
    }, " • git@github.com:owner/repo.git (SSH)"), Q8.createElement($, {
        dimColor: !0
    }, " • https://example.com/marketplace.json"), Q8.createElement($, {
        dimColor: !0
    }, " • ./path/to/marketplace"), Q8.createElement(j, {
        marginTop: 1
    }, Q8.createElement(s4, {
        value: A,
        onChange: Q,
        onSubmit: E,
        columns: 80,
        cursorOffset: B,
        onChangeCursorOffset: G,
        focus: !0,
        showCursor: !0
    }))), K && Q8.createElement(j, {
        marginTop: 1
    }, Q8.createElement(e9, null), Q8.createElement($, null, H || "Adding marketplace to configuration…")), Z && Q8.createElement(j, {
        marginTop: 1
    }, Q8.createElement($, {
        color: "error"
    }, Z)), Y && Q8.createElement(j, {
        marginTop: 1
    }, Q8.createElement($, null, Y))), Q8.createElement(j, {
        marginLeft: 3
    }, Q8.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Enter to add · Esc to cancel")))
}
var Q8, fQA;
var hK9 = L(() => {
    hA();
    QY();
    kH();
    bQA();
    w0();
    qV0();
    zI();
    u1();
    Q8 = GA(VA(), 1), fQA = GA(VA(), 1)
});

function gK9({
    setViewState: A,
    error: Q,
    setError: B,
    setResult: G,
    exitState: Z,
    onManageComplete: I,
    targetMarketplace: Y,
    action: J
}) {
    let [W, X] = Iz.useState([]), [F, V] = Iz.useState(!0), [K, D] = Iz.useState(0), [H, C] = Iz.useState(!1), [E, z] = Iz.useState(null), [w, N] = Iz.useState(null), [q, R] = Iz.useState(null), [P, y] = Iz.useState("list"), [v, x] = Iz.useState(null), [p, u] = Iz.useState(0), o = Iz.useRef(!1);
    Iz.useEffect(() => {
        async function wA() {
            try {
                let KA = await TZ(),
                    {
                        enabled: SA,
                        disabled: sA
                    } = await y7(),
                    NA = [...SA, ...sA],
                    {
                        marketplaces: qA,
                        failures: DA
                    } = await GzA(KA),
                    yA = [];
                for (let {
                        name: WA,
                        config: XA,
                        data: zA
                    }
                    of qA) {
                    let $A = NA.filter((LA) => LA.source.endsWith(`@${WA}`));
                    yA.push({
                        name: WA,
                        source: BzA(XA.source),
                        lastUpdated: XA.lastUpdated,
                        pluginCount: zA?.plugins.length,
                        installedPlugins: $A,
                        pendingUpdate: !1,
                        pendingRemove: !1
                    })
                }
                yA.sort((WA, XA) => WA.name.localeCompare(XA.name)), X(yA);
                let rA = qA.filter((WA) => WA.data !== null).length,
                    K1 = TlA(DA, rA);
                if (K1)
                    if (K1.type === "warning") z(K1.message);
                    else throw Error(K1.message);
                if (Y && J && !o.current && !Q) {
                    o.current = !0;
                    let WA = yA.findIndex((XA) => XA.name === Y);
                    if (WA >= 0) {
                        D(WA);
                        let XA = [...yA];
                        if (J === "update") XA[WA].pendingUpdate = !0;
                        else if (J === "remove") XA[WA].pendingRemove = !0;
                        X(XA), setTimeout(() => {
                            d(XA)
                        }, 100)
                    } else if (B) B(`Marketplace not found: ${Y}`)
                }
            } catch (KA) {
                if (B) B(KA instanceof Error ? KA.message : "Failed to load marketplaces");
                z(KA instanceof Error ? KA.message : "Failed to load marketplaces")
            } finally {
                V(!1)
            }
        }
        wA()
    }, [Y, J, Q]);
    let l = () => {
            return W.some((wA) => wA.pendingUpdate || wA.pendingRemove)
        },
        k = () => {
            let wA = W.filter((SA) => SA.pendingUpdate).length,
                KA = W.filter((SA) => SA.pendingRemove).length;
            return {
                updateCount: wA,
                removeCount: KA
            }
        },
        d = async (wA) => {
            let KA = wA || W,
                SA = P === "details";
            C(!0), z(null), N(null), R(null);
            try {
                let sA = LB("userSettings"),
                    NA = 0,
                    qA = 0;
                for (let $A of KA) {
                    if ($A.pendingRemove) {
                        if ($A.installedPlugins && $A.installedPlugins.length > 0) {
                            let LA = {
                                ...sA?.enabledPlugins
                            };
                            for (let TA of $A.installedPlugins) {
                                let eA = z3A(TA.name, $A.name);
                                LA[eA] = !1
                            }
                            cB("userSettings", {
                                enabledPlugins: LA
                            })
                        }
                        await jlA($A.name), qA++, BA("tengu_marketplace_removed", {
                            marketplace_name: $A.name,
                            plugins_uninstalled: $A.installedPlugins?.length || 0
                        });
                        continue
                    }
                    if ($A.pendingUpdate) await SlA($A.name, (LA) => {
                        R(LA)
                    }), NA++, BA("tengu_marketplace_updated", {
                        marketplace_name: $A.name
                    })
                }
                if (oF(), I) await I();
                let DA = await TZ(),
                    {
                        enabled: yA,
                        disabled: rA
                    } = await y7(),
                    K1 = [...yA, ...rA],
                    {
                        marketplaces: WA
                    } = await GzA(DA),
                    XA = [];
                for (let {
                        name: $A,
                        config: LA,
                        data: TA
                    }
                    of WA) {
                    let eA = K1.filter((aA) => aA.source.endsWith(`@${$A}`));
                    XA.push({
                        name: $A,
                        source: BzA(LA.source),
                        lastUpdated: LA.lastUpdated,
                        pluginCount: TA?.plugins.length,
                        installedPlugins: eA,
                        pendingUpdate: !1,
                        pendingRemove: !1
                    })
                }
                if (XA.sort(($A, LA) => $A.name.localeCompare(LA.name)), X(XA), SA && v) {
                    let $A = XA.find((LA) => LA.name === v.name);
                    if ($A) x($A)
                }
                let zA = [];
                if (NA > 0) zA.push(`Updated ${NA} marketplace${NA>1?"s":""}`);
                if (qA > 0) zA.push(`Removed ${qA} marketplace${qA>1?"s":""}`);
                if (zA.length > 0) {
                    let $A = `${V1.tick} ${zA.join(", ")}`;
                    if (SA) N($A);
                    else G($A), setTimeout(() => {
                        A({
                            type: "menu"
                        })
                    }, 2000)
                } else if (!SA) A({
                    type: "menu"
                })
            } catch (sA) {
                let NA = sA instanceof Error ? sA.message : String(sA);
                if (z(NA), B) B(NA)
            } finally {
                C(!1), R(null)
            }
        }, QA = async () => {
            if (!v) return;
            let wA = W.map((KA) => KA.name === v.name ? {
                ...KA,
                pendingRemove: !0
            } : KA);
            X(wA), await d(wA)
        };
    if (h1((wA, KA) => {
            if (H) return;
            if (KA.escape) {
                if (P === "details" || P === "confirm-remove") {
                    y("list"), u(0);
                    return
                }
                if (l()) X((SA) => SA.map((sA) => ({
                    ...sA,
                    pendingUpdate: !1,
                    pendingRemove: !1
                }))), D(0);
                else A({
                    type: "menu"
                });
                return
            }
            if (P === "list") {
                if (KA.upArrow || wA === "k") D((SA) => Math.max(0, SA - 1));
                else if (KA.downArrow || wA === "j") D((SA) => Math.min(W.length - 1, SA + 1));
                else if (wA === "u" || wA === "U") X((SA) => SA.map((sA, NA) => NA === K ? {
                    ...sA,
                    pendingUpdate: !sA.pendingUpdate,
                    pendingRemove: sA.pendingUpdate ? sA.pendingRemove : !1
                } : sA));
                else if (wA === "r" || wA === "R") {
                    let SA = W[K];
                    if (SA) x(SA), y("confirm-remove")
                } else if (KA.return) {
                    let SA = W[K];
                    if (SA && !l()) x(SA), y("details"), u(0);
                    else if (l()) d()
                }
            } else if (P === "details") {
                let sA = v?.source.startsWith("http") ? 2 : 1;
                if (KA.upArrow || wA === "k") u((NA) => Math.max(0, NA - 1));
                else if (KA.downArrow || wA === "j") u((NA) => Math.min(sA, NA + 1));
                else if (KA.return && v) {
                    if (p === 0) {
                        let NA = W.map((qA) => qA.name === v.name ? {
                            ...qA,
                            pendingUpdate: !0
                        } : qA);
                        X(NA), d(NA)
                    } else if (p === 1) y("confirm-remove");
                    else if (p === 2) {
                        if (v.source.startsWith("http")) gZ(v.source)
                    }
                }
            } else if (P === "confirm-remove") {
                if (wA === "y" || wA === "Y") QA();
                else if (wA === "n" || wA === "N") y("list"), x(null)
            }
        }), F) return r1.createElement(j, {
        flexDirection: "column"
    }, r1.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, r1.createElement($, null, "Loading marketplaces…")));
    if (W.length === 0) return r1.createElement(j, {
        flexDirection: "column"
    }, r1.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, r1.createElement($, null, "No marketplaces configured.")), r1.createElement(j, {
        marginLeft: 3,
        marginTop: 1
    }, r1.createElement($, {
        dimColor: !0
    }, Z.pending ? r1.createElement(r1.Fragment, null, "Press ", Z.keyName, " again to go back") : r1.createElement(r1.Fragment, null, "Esc to go back"))));
    if (P === "confirm-remove" && v) {
        let wA = v.installedPlugins?.length || 0;
        return r1.createElement(j, {
            flexDirection: "column"
        }, r1.createElement(j, {
            flexDirection: "column",
            paddingX: 1,
            borderStyle: "round"
        }, r1.createElement($, {
            bold: !0,
            color: "warning"
        }, "Remove marketplace ", r1.createElement($, {
            italic: !0
        }, v.name), "?"), r1.createElement(j, {
            flexDirection: "column"
        }, wA > 0 && r1.createElement(j, {
            marginTop: 1
        }, r1.createElement($, {
            color: "warning"
        }, "This will also uninstall ", wA, " plugin", wA !== 1 ? "s" : "", " from this marketplace:")), v.installedPlugins && v.installedPlugins.length > 0 && r1.createElement(j, {
            flexDirection: "column",
            marginTop: 1,
            marginLeft: 2
        }, v.installedPlugins.map((KA) => r1.createElement($, {
            key: KA.name,
            dimColor: !0
        }, "• ", KA.name))), r1.createElement(j, {
            marginTop: 1
        }, r1.createElement($, null, "Press ", r1.createElement($, {
            bold: !0
        }, "y"), " to confirm or ", r1.createElement($, {
            bold: !0
        }, "n"), " to cancel")))))
    }
    if (P === "details" && v) {
        let wA = v.pendingUpdate || H,
            KA = [{
                label: "Update marketplace",
                value: "update"
            }, {
                label: "Remove marketplace",
                value: "remove"
            }, v.source.startsWith("http") && {
                label: "Open in browser",
                value: "browser"
            }].filter(Boolean);
        return r1.createElement(j, {
            flexDirection: "column"
        }, r1.createElement(j, {
            flexDirection: "column",
            paddingX: 1,
            borderStyle: "round"
        }, r1.createElement($, {
            bold: !0
        }, v.name), r1.createElement($, {
            dimColor: !0
        }, v.source), v.lastUpdated && r1.createElement($, {
            dimColor: !0
        }, "Last updated:", " ", new Date(v.lastUpdated).toLocaleDateString()), r1.createElement(j, {
            marginTop: 1
        }, r1.createElement($, null, v.pluginCount || 0, " available plugin", v.pluginCount !== 1 ? "s" : "")), v.installedPlugins && v.installedPlugins.length > 0 && r1.createElement(j, {
            flexDirection: "column",
            marginTop: 1
        }, r1.createElement($, {
            bold: !0
        }, "Installed plugins (", v.installedPlugins.length, "):"), r1.createElement(j, {
            flexDirection: "column",
            marginLeft: 1
        }, v.installedPlugins.map((SA) => r1.createElement(j, {
            key: SA.name,
            flexDirection: "row",
            gap: 1
        }, r1.createElement($, null, V1.bullet), r1.createElement(j, {
            flexDirection: "column"
        }, r1.createElement($, null, SA.name), r1.createElement($, {
            dimColor: !0
        }, SA.manifest.description)))))), wA && r1.createElement(j, {
            marginTop: 1,
            flexDirection: "column"
        }, r1.createElement($, {
            color: "claude"
        }, "Updating marketplace…"), q && r1.createElement($, {
            dimColor: !0
        }, q)), !wA && w && r1.createElement(j, {
            marginTop: 1
        }, r1.createElement($, {
            color: "claude"
        }, w)), !wA && E && r1.createElement(j, {
            marginTop: 1
        }, r1.createElement($, {
            color: "error"
        }, E)), !wA && r1.createElement(j, {
            flexDirection: "column",
            marginTop: 1
        }, KA.map((SA, sA) => {
            if (!SA) return null;
            let NA = sA === p;
            return r1.createElement(j, {
                key: SA.value
            }, r1.createElement($, {
                color: NA ? "claude" : void 0
            }, NA ? V1.pointer : " ", " ", SA.label))
        }))), r1.createElement(j, {
            marginLeft: 3
        }, r1.createElement($, {
            dimColor: !0,
            italic: !0
        }, wA ? r1.createElement(r1.Fragment, null, "Please wait…") : r1.createElement(r1.Fragment, null, V1.arrowUp, V1.arrowDown, " · enter to select · Esc to go back"))))
    }
    let {
        updateCount: IA,
        removeCount: HA
    } = k();
    return r1.createElement(j, {
        flexDirection: "column"
    }, r1.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, r1.createElement(j, {
        marginBottom: 1
    }, r1.createElement($, {
        bold: !0
    }, "Manage marketplaces")), r1.createElement(j, {
        flexDirection: "column"
    }, W.map((wA, KA) => {
        let SA = KA === K,
            sA = [];
        if (wA.pendingUpdate) sA.push("UPDATE");
        if (wA.pendingRemove) sA.push("REMOVE");
        return r1.createElement(j, {
            key: wA.name,
            flexDirection: "row",
            gap: 1,
            marginBottom: 1
        }, r1.createElement($, {
            color: SA ? "claude" : void 0
        }, SA ? V1.pointer : " ", " ", wA.pendingRemove ? V1.cross : V1.bullet), r1.createElement(j, {
            flexDirection: "column",
            flexGrow: 1
        }, r1.createElement(j, {
            flexDirection: "row",
            gap: 1
        }, r1.createElement($, {
            bold: !0,
            strikethrough: wA.pendingRemove,
            dimColor: wA.pendingRemove
        }, wA.name), sA.length > 0 && r1.createElement($, {
            color: "warning"
        }, "[", sA.join(", "), "]")), r1.createElement($, {
            dimColor: !0
        }, wA.source), r1.createElement($, {
            dimColor: !0
        }, wA.pluginCount !== void 0 && r1.createElement(r1.Fragment, null, wA.pluginCount, " available"), wA.installedPlugins && wA.installedPlugins.length > 0 && r1.createElement(r1.Fragment, null, " • ", wA.installedPlugins.length, " installed"), wA.lastUpdated && r1.createElement(r1.Fragment, null, " ", "• Updated", " ", new Date(wA.lastUpdated).toLocaleDateString()))))
    })), l() && r1.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, r1.createElement($, null, r1.createElement($, {
        bold: !0
    }, "Pending changes:"), " ", r1.createElement($, {
        dimColor: !0
    }, "Enter to apply")), IA > 0 && r1.createElement($, null, "• Update ", IA, " marketplace", IA > 1 ? "s" : ""), HA > 0 && r1.createElement($, {
        color: "warning"
    }, "• Remove ", HA, " marketplace", HA > 1 ? "s" : "")), H && r1.createElement(j, {
        marginTop: 1
    }, r1.createElement($, {
        color: "claude"
    }, "Processing changes…")), E && r1.createElement(j, {
        marginTop: 1
    }, r1.createElement($, {
        color: "error"
    }, E))), r1.createElement(u_3, {
        exitState: Z,
        hasPendingActions: l()
    }))
}

function u_3({
    exitState: A,
    hasPendingActions: Q
}) {
    let B = [];
    if (A.pending) B.push(`Press ${A.keyName} again to go back`);
    else {
        if (B.push(`${V1.arrowUp}${V1.arrowDown}`), Q) B.push("Enter to apply changes");
        else B.push("Enter for details"), B.push("u update"), B.push("r remove");
        B.push(Q ? "Esc to cancel" : "Esc to go back")
    }
    return r1.createElement(j, {
        marginLeft: 3
    }, r1.createElement($, {
        dimColor: !0,
        italic: !0
    }, B.join(" · ")))
}
var r1, Iz;
var uK9 = L(() => {
    hA();
    hA();
    n2();
    kH();
    bQA();
    w0();
    NF();
    YzA();
    lM();
    RB();
    r1 = GA(VA(), 1), Iz = GA(VA(), 1)
});

function mK9({
    error: A,
    setError: Q,
    result: B,
    setResult: G,
    setViewState: Z,
    onInstallComplete: I,
    targetMarketplace: Y,
    targetPlugin: J
}) {
    let [W, X] = qK.useState("marketplace-list"), [F, V] = qK.useState(null), [K, D] = qK.useState(null), [H, C] = qK.useState([]), [E, z] = qK.useState([]), [w, N] = qK.useState(!0), [q, R] = qK.useState(0), [P, y] = qK.useState(new Set), [v, x] = qK.useState(new Set), [p, u] = qK.useState(0), [o, l] = qK.useState(!1), [k, d] = qK.useState(null), [QA, IA] = qK.useState(null);
    qK.useEffect(() => {
        async function KA() {
            try {
                let SA = await TZ(),
                    {
                        marketplaces: sA,
                        failures: NA
                    } = await GzA(SA),
                    qA = [];
                for (let {
                        name: rA,
                        config: K1,
                        data: WA
                    }
                    of sA)
                    if (WA) {
                        let XA = WA.plugins.filter((zA) => jg(z3A(zA.name, rA))).length;