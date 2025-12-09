/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: agents_004.js
 * 处理时间: 2025-12-09T03:37:23.606Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * GA         ( 14x) = esmImport(module) - ESM import helper
 * vX         (  1x) = WEB_FETCH_TOOL = "WebFetch"
 * WY9        (  1x) = AGENT_SYSTEM_PROMPT = "You are an agent..."
 * tool_use   (  1x) = TOOL_USE content type
 * thinking   (  1x) = THINKING content type
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 4/13
 * Lines: 409774 - 411272 (1499 lines)
 * Original file: cli.js
 */

async function hP3(A, Q) {
    try {
        let G = (await KX0()).filter((Z) => Z.endsWith(`@${A}`));
        if (G.length > 0) {
            let Z = await uI9(G);
            if (Z.length > 0) g(`Installing ${Z.length} plugins from newly installed marketplace ${A}`), await dI9(Z, Q)
        }
    } catch (B) {
        e(B instanceof Error ? B : Error(String(B)))
    }
}
async function dI9(A, Q) {
    let G = {
            ...LB("userSettings")?.enabledPlugins
        },
        Z = [],
        I = [];
    for (let Y of A) {
        CX0(Q, Y, "installing");
        try {
            let J = await Cc(Y);
            if (!J) throw Error("Plugin not found in any marketplace");
            let {
                entry: W
            } = J;
            if (typeof W.source !== "string" || !W.source.startsWith("./")) await nP(Y, W);
            if (c0().enabledPlugins?.[Y] !== !0) G[Y] = !0;
            Z.push(Y), CX0(Q, Y, "installed")
        } catch (J) {
            let W = J instanceof Error ? J.message : String(J);
            I.push({
                name: Y,
                error: W
            }), CX0(Q, Y, "failed", W), e(J instanceof Error ? J : Error(String(J)))
        }
    }
    if (Object.keys(G).length > 0) {
        let Y = LB("userSettings");
        cB("userSettings", {
            ...Y,
            enabledPlugins: G
        })
    }
    return {
        installed: Z,
        failed: I
    }
}
async function hI1(A) {
    g("performBackgroundPluginInstallations called");
    try {
        let Q = [],
            B = [],
            G = await TZ(),
            Z = await fI9();
        if (Z.size > 0) {
            g(`Found ${Z.size} extra marketplaces in settings`);
            let J = await hI9(Z);
            if (J.length > 0) {
                g(`Installing ${J.length} marketplaces automatically`);
                for (let W of J) {
                    let X = Z.get(W);
                    if (X) Q.push({
                        name: W,
                        marketplace: X
                    })
                }
            }
        }
        let I = await KX0(),
            Y = [];
        if (I.length > 0) {
            g(`Found ${I.length} enabled plugins`);
            let J = await DX0(),
                W = I.filter((F) => !J.includes(F));
            g(`Found ${W.length} missing plugins (not installed): ${W.join(", ")}`);
            let X = [];
            for (let F of W) {
                let [, V] = F.split("@");
                if (!V) X.push(F);
                else if (V in G || Z.has(V) || Q.some((K) => K.name === V)) X.push(F);
                else Y.push(F)
            }
            if (Y.length > 0) {
                let F = [...new Set(Y.map((V) => V.split("@")[1]))];
                g(`Cannot install ${Y.length} plugins because their marketplaces are not installed or configured: ${F.join(", ")}`), g(`Uninstallable plugins: ${Y.join(", ")}`)
            }
            if (X.length > 0) g(`Installing ${X.length} plugins automatically`), B.push(...X)
        }
        if (g(`Setting installation status: ${Q.length} marketplaces, ${B.length} installable plugins, ${Y.length} uninstallable plugins`), A((J) => ({
                ...J,
                plugins: {
                    ...J.plugins,
                    installationStatus: {
                        marketplaces: Q.map(({
                            name: W
                        }) => ({
                            name: W,
                            status: "pending"
                        })),
                        plugins: [...B.map((W) => {
                            let [X] = W.split("@");
                            return {
                                id: W,
                                name: X || W,
                                status: "pending"
                            }
                        }), ...Y.map((W) => {
                            let [X, F] = W.split("@");
                            return {
                                id: W,
                                name: X || W,
                                status: "failed",
                                error: `Marketplace '${F}' is not installed or configured`
                            }
                        })]
                    }
                }
            })), Q.length > 0) fP3(Q.map((J) => J.name), Z, A).catch((J) => {
            e(J instanceof Error ? J : Error(String(J)))
        });
        if (B.length > 0) {
            let J = B.filter((W) => {
                let [, X] = W.split("@");
                return !Q.some((F) => F.name === X)
            });
            if (J.length > 0) dI9(J, A).catch((W) => {
                e(W instanceof Error ? W : Error(String(W)))
            })
        }
    } catch (Q) {
        e(Q instanceof Error ? Q : Error(String(Q)))
    }
}
var EX0 = L(() => {
    D0();
    u1();
    gI9();
    mI9();
    kH();
    kH();
    NF();
    yjA();
    RB()
});
async function cI9(A) {
    if (g("performStartupChecks called"), !_X(!0)) {
        g("Trust not accepted for current directory - skipping plugin installations");
        return
    }
    try {
        g("Starting background plugin installations"), await hI1(A)
    } catch (Q) {
        g(`Error initiating background plugin installations: ${Q}`)
    }
}
var pI9 = L(() => {
    D0();
    EX0();
    jQ()
});

function iI9() {
    let {
        addNotification: A
    } = _Z(), [{
        thinkingEnabled: Q
    }] = _Q();
    lI9.useEffect(() => {
        A({
            key: "toggled-thinking-initial",
            jsx: Q ? xjA.createElement($, {
                color: "suggestion"
            }, "Thinking on (tab to toggle)") : xjA.createElement($, {
                dimColor: !0
            }, "Thinking off (tab to toggle)"),
            priority: "low",
            timeoutMs: 20000
        })
    }, [A])
}
var xjA, lI9;
var nI9 = L(() => {
    UU();
    hA();
    H9();
    xjA = GA(VA(), 1), lI9 = GA(VA(), 1)
});

function aI9(A) {
    let {
        addNotification: Q
    } = _Z(), B = i21(), G = C00(B, A), Z = E00(B), I = OQA.useRef(null), [Y, J] = OQA.useState(!1);
    OQA.useEffect(() => {
        if (B.isUsingOverage && !Y) Q({
            key: "limit-reached",
            text: Z,
            priority: "immediate"
        }), J(!0);
        else if (!B.isUsingOverage && Y) J(!1)
    }, [B.isUsingOverage, Z, Y, Q]), OQA.useEffect(() => {
        if (G && G !== I.current) I.current = G, Q({
            key: "rate-limit-warning",
            jsx: vjA.createElement($, null, vjA.createElement($, {
                color: "warning"
            }, G)),
            priority: "high"
        })
    }, [G, Q])
}
var vjA, OQA;
var sI9 = L(() => {
    UU();
    zi();
    hA();
    vjA = GA(VA(), 1), OQA = GA(VA(), 1)
});

function oI9({
    ideSelection: A,
    mcpClients: Q,
    ideInstallationStatus: B
}) {
    let {
        addNotification: G
    } = _Z(), Z = wXA(Q), I = B ? pM(B?.ideType) : !1, Y = B?.error || I, J = Z === "connected" && (A?.filePath || A?.text && A.lineCount > 0), W = Z === "connected" && !J, X = Y && !I && !W && !J, F = Y && I && !W && !J;
    rI9.useEffect(() => {
        if (_F() || Z !== null) return;
        mLA(!0).then((V) => {
            if (V.length > 0) {
                let K = V[0]?.name;
                if (K && !F) G({
                    key: "ide-status-hint",
                    jsx: aP.createElement($, {
                        dimColor: !0
                    }, V1.circle, " /ide for ", gP3(K)),
                    priority: "low"
                });
                else if (!X && Z === "disconnected") G({
                    key: "ide-status-disconnected",
                    jsx: aP.createElement($, {
                        color: "error",
                        key: "ide-status"
                    }, V1.circle, " IDE disconnected"),
                    priority: "medium"
                });
                else if (F) G({
                    key: "ide-status-jetbrains-disconnected",
                    jsx: aP.createElement($, {
                        dimColor: !0
                    }, "IDE plugin not connected · /status for info"),
                    priority: "medium"
                });
                else if (W) G({
                    key: "ide-status-connected",
                    jsx: aP.createElement($, {
                        color: "ide",
                        key: "ide-status"
                    }, V1.circle, "IDE connected"),
                    priority: "low"
                });
                else if (X) G({
                    key: "ide-status-install-error",
                    jsx: aP.createElement($, {
                        color: "error"
                    }, "IDE extension install failed (see /status for info)"),
                    priority: "medium"
                })
            }
        })
    }, [G, Z, W, X, F])
}

function gP3(A) {
    if (A === "Visual Studio Code") return "VS Code";
    return A
}
var rI9, aP;
var tI9 = L(() => {
    UU();
    yJ();
    XZ1();
    hA();
    n2();
    rI9 = GA(VA(), 1), aP = GA(VA(), 1)
});

function AY9() {
    let {
        addNotification: A
    } = _Z();
    eI9.useEffect(() => {
        let B = L1().sonnet45MigrationTimestamp;
        if (B) {
            if (Date.now() - B < 3000) A({
                key: "sonnet-4.5-update",
                text: "Model updated to Sonnet 4.5",
                color: "suggestion",
                priority: "high",
                timeoutMs: 3000
            })
        }
    }, [A])
}
var eI9;
var QY9 = L(() => {
    UU();
    jQ();
    eI9 = GA(VA(), 1)
});

function GY9() {
    let {
        addNotification: A
    } = _Z();
    BY9.useEffect(() => {
        if (L1().subscriptionNoticeCount ?? 0 >= uP3) return;
        mP3().then((Q) => {
            if (Q === null) return;
            let B = L1();
            d0({
                ...B,
                subscriptionNoticeCount: (B.subscriptionNoticeCount ?? 0) + 1
            }), BA("tengu_switch_to_subscription_notice_shown", {}), A({
                key: "switch-to-subscription",
                jsx: bjA.createElement($, {
                    color: "suggestion"
                }, "Use your existing Claude ", Q, " plan with Claude Code", bjA.createElement($, {
                    color: "text",
                    dimColor: !0
                }, " ", "· /login to activate")),
                priority: "low"
            })
        })
    }, [A])
}
async function mP3() {
    if (AB()) return null;
    let A = await bvA();
    if (!A) return null;
    if (A.account.has_claude_max) return "Max";
    if (A.account.has_claude_pro) return "Pro";
    return null
}
var bjA, BY9, uP3 = 3;
var ZY9 = L(() => {
    hA();
    pKA();
    jQ();
    w0();
    hB();
    UU();
    bjA = GA(VA(), 1), BY9 = GA(VA(), 1)
});

function IY9({
    onRun: A,
    onCancel: Q,
    reason: B
}) {
    let G = aXA.useRef(!1);
    return h1(aXA.useCallback((Z, I) => {
        if (I.escape) Q()
    }, [Q])), aXA.useEffect(() => {
        if (!G.current) G.current = !0, A()
    }, [A]), eE.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, eE.createElement(j, null, eE.createElement($, {
        bold: !0
    }, "Running /issue to capture feedback...")), eE.createElement(j, null, eE.createElement($, {
        dimColor: !0
    }, "Press Esc anytime to cancel")), eE.createElement(j, null, eE.createElement($, {
        dimColor: !0
    }, "Reason: ", B)))
}

function zX0(A) {
    return !1;
    switch (A) {
        case "feedback_survey_bad":
            return !0;
        case "feedback_survey_good":
        default:
            return !1
    }
}

function YY9(A) {
    switch (A) {
        case "feedback_survey_bad":
            return 'You responded "Bad" to the feedback survey';
        case "feedback_survey_good":
            return 'You responded "Good" to the feedback survey';
        default:
            return "Unknown reason"
    }
}
var eE, aXA;
var JY9 = L(() => {
    hA();
    eE = GA(VA(), 1), aXA = GA(VA(), 1)
});
import {
    randomUUID as UX0
} from "crypto";

function sXA({
    commands: A,
    debug: Q,
    initialPrompt: B,
    initialTools: G,
    initialMessages: Z,
    initialFileHistorySnapshots: I,
    mcpClients: Y,
    dynamicMcpConfig: J,
    mcpCliEndpoint: W,
    autoConnectIdeFlag: X,
    strictMcpConfig: F = !1,
    systemPrompt: V,
    appendSystemPrompt: K,
    onBeforeQuery: D,
    onTurnComplete: H,
    disabled: C = !1
}) {
    let [E, z] = _Q(), {
        toolPermissionContext: w,
        verbose: N,
        mcp: q,
        plugins: R,
        agentDefinitions: P
    } = E, y = tn(), v = GB.useMemo(() => JC(w), [w]);
    M59();
    let [x, p] = GB.useState(J), u = GB.useCallback((AQ) => {
        p(AQ)
    }, [p]), [o, l] = GB.useState("prompt"), [k, d] = GB.useState(1), [QA, IA] = GB.useState(!1), {
        addNotification: HA
    } = _Z(), wA = P89(Y, q.clients), [KA, SA] = GB.useState(void 0), [sA, NA] = GB.useState(null), [qA, DA] = GB.useState(null), [yA, rA] = GB.useState(!1);
    AY9(), GY9(), oI9({
        ideSelection: KA,
        mcpClients: wA,
        ideInstallationStatus: qA
    }), yI9({
        mcpClients: wA
    }), vI9(), bI1(), iI9(), aI9(y), F59();
    let K1 = GB.useMemo(() => {
        return [...v, ...G]
    }, [v, G]);
    YI1(), GB.useEffect(() => {
        cI9(z)
    }, [z]);
    let WA = BI1(K1, q.tools),
        XA = LW0(A, R.commands),
        zA = LW0(XA, q.commands);
    fb2(q.clients), l69(q.clients, SA);
    let [$A, LA] = GB.useState("responding"), [TA, eA] = GB.useState([]), [aA, I1] = GB.useState(null), [w1, PA] = GB.useState(!1), [B1, Q0] = GB.useState(0), [b1, Y0] = GB.useState(void 0), x0 = GB.useCallback((AQ) => {
        if (PA(AQ), AQ) Q0(0)
    }, []);
    dY(() => {
        if (w1 && I0 !== "tool-permission") Q0((AQ) => AQ + 100)
    }, 100);
    let [u0, k1] = GB.useState(null);
    GB.useEffect(() => {
        if (u0?.notifications) u0.notifications.forEach((AQ) => {
            HA({
                key: "auto-updater-notification",
                text: AQ,
                priority: "low"
            })
        })
    }, [u0, HA]);
    let [T0, fQ] = GB.useState(null), [F1, R1] = GB.useState([]), [N1, Z0] = GB.useState([]), [J0, s1] = GB.useState(Z ?? []), [p0, HQ] = GB.useState([]), [ZB, rQ] = GB.useState(""), [PB, IQ] = GB.useState("prompt"), [l9, h4] = GB.useState({}), [p5, uG] = GB.useState(0), [DG, C3] = GB.useState(0), [CZ, LI] = GB.useState(0), [e8, _5] = GB.useState(null), [mG, dG] = GB.useState(null), [U1, nA] = GB.useState(null), [C1, O1] = GB.useState(!1), [y1, O0] = GB.useState(!1), [oQ, lB] = GB.useState(UX0()), [k9, C6] = GB.useState(L1().hasAcknowledgedCostThreshold), [y9, A6] = GB.useState(new Set), [v6, w8] = GB.useState("INSERT"), [i9, Q6] = GB.useState(!1), [$4, n7] = GB.useState(!1), B6 = GB.useRef(!1), k5 = GB.useRef(null), [g9] = $B(), g4 = GB.useCallback(() => {
        w59().then(async (AQ) => {
            if (AQ) {
                let C2 = await AQ.content({
                    theme: g9
                });
                z((xQ) => ({
                    ...xQ,
                    spinnerTip: C2
                })), q59(AQ)
            } else z((C2) => ({
                ...C2,
                spinnerTip: void 0
            }))
        })
    }, [z, g9]), q8 = GB.useCallback(() => {
        x0(!1), Y0(void 0), C3(0), eA([]), _5(null), dG(null), nA(null), g4(), k81()
    }, [x0, g4]), B8 = U89(ZB), W5 = (!T0 || T0.showSpinner === !0) && F1.length === 0 && w1, u9 = G59(J0, w1, p5), w4 = GB.useMemo(() => ({
        ...u9,
        handleSelect: (AQ) => {
            if (u9.handleSelect(AQ), AQ === "bad" && zX0("feedback_survey_bad") || AQ === "good" && zX0("feedback_survey_good")) xA(AQ === "bad" ? "feedback_survey_bad" : "feedback_survey_good")
        }
    }), [u9]);
    r69({
        autoConnectIdeFlag: X,
        ideToInstallExtension: sA,
        setDynamicMcpConfig: p,
        setShowIdeOnboarding: rA,
        setIDEInstallationState: DA
    }), T59(I, E.fileHistory, (AQ) => z((C2) => ({
        ...C2,
        fileHistory: AQ
    })));
    let E3 = GB.useCallback(async (AQ, C2) => {
            let xQ = jMA(C2.messages),
                IB = await zq("resume", AQ);
            if (xQ.push(...IB), _21(C2), s01(C2), C2.fileHistorySnapshots) $YA(C2.fileHistorySnapshots, (E6) => {
                z((X8) => ({
                    ...X8,
                    fileHistory: E6
                }))
            }), D91(C2);
            if (q8(), I1(null), !bH()) await SJ();
            lB(AQ), FR(AQ), await Zx(), VJ0(), s1(() => xQ), fQ(null), rQ(""), HQ([])
        }, [q8, z]),
        V9 = G0(),
        Q4 = GB.useMemo(() => Ci(G0()), []),
        dA = GB.useRef((() => {
            let AQ = Gh($X0);
            return AQ.set(Q4, {
                content: JSON.stringify(E.todos[V9] || []),
                timestamp: 0,
                offset: void 0,
                limit: void 0
            }), AQ
        })()),
        {
            status: YA,
            reverify: ZA
        } = I89(),
        [jA, xA] = GB.useState(null),
        [mA, E1] = GB.useState(null),
        [S1, P1] = GB.useState(!1),
        c1 = !w1 && y1;

    function l1() {
        if (S1 || mA) return;
        if (C1) return "message-selector";
        if (N1[0]) return "sandbox-permission";
        let AQ = !T0 || T0.shouldContinueAnimation;
        if (AQ && F1[0]) return "tool-permission";
        if (AQ && E.elicitation.queue[0]) return "elicitation";
        if (AQ && c1) return "cost";
        if (AQ && yA) return "ide-onboarding";
        return
    }
    let I0 = l1();

    function e0() {
        if (I0 === "elicitation") return;
        if (q8(), I0 === "tool-permission") F1[0]?.onAbort(), R1([]);
        else aA?.abort()
    }
    let dQ = GB.useCallback(async () => {
        let AQ = await j51(ZB, 0, async () => new Promise((C2) => z((xQ) => {
            return C2(xQ), xQ
        })), z);
        if (!AQ) return;
        rQ(AQ.text), IQ("prompt")
    }, [z, rQ, IQ, ZB]);
    F89(R1, e0, C1 || i9, o, aA?.signal, dQ, v6, T0?.isLocalJSXCommand, $4), GB.useEffect(() => {
        if (yK() >= 5 && !y1 && !k9) {
            if (BA("tengu_cost_threshold_reached", {}), NlA()) O0(!0)
        }
    }, [J0, y1, k9]);
    let iB = GB.useCallback(async (AQ) => {
        return new Promise((C2) => {
            Z0((xQ) => [...xQ, {
                hostPattern: AQ,
                resolvePromise: C2
            }])
        })
    }, []);
    if (lQ.isSandboxingEnabled()) lQ.initialize(iB).catch((AQ) => {
        process.stderr.write(`
❌ Sandbox Error: ${AQ instanceof Error?AQ.message:String(AQ)}
`), c8(1, "other")
    });
    let EB = GB.useCallback((AQ) => {
            z((C2) => ({
                ...C2,
                toolPermissionContext: AQ
            })), setImmediate(() => {
                R1((C2) => {
                    return C2.forEach((xQ) => {
                        xQ.recheckPermission()
                    }), C2
                })
            })
        }, [z, R1]),
        m2 = C89(R1, EB),
        q4 = GB.useCallback((AQ, C2, xQ, IB, E6, X8) => {
            return {
                abortController: xQ,
                options: {
                    commands: zA,
                    tools: WA,
                    debug: Q,
                    verbose: N,
                    mainLoopModel: X8,
                    maxThinkingTokens: E6 ?? (E.thinkingEnabled ? Xf(C2, void 0) : 0),
                    mcpClients: wA,
                    mcpResources: q.resources,
                    ideInstallationStatus: qA,
                    isNonInteractiveSession: !1,
                    hasAppendSystemPrompt: !1,
                    dynamicMcpConfig: x,
                    theme: g9,
                    agentDefinitions: P
                },
                getAppState() {
                    return new Promise((U9) => {
                        z((G8) => {
                            return U9(G8), {
                                ...G8,
                                toolPermissionContext: {
                                    ...G8.toolPermissionContext,
                                    alwaysAllowRules: {
                                        ...G8.toolPermissionContext.alwaysAllowRules,
                                        command: IB
                                    }
                                }
                            }
                        })
                    })
                },
                setAppState: z,
                messages: AQ,
                setMessages: s1,
                updateFileHistoryState(U9) {
                    z((G8) => ({
                        ...G8,
                        fileHistory: U9(G8.fileHistory)
                    }))
                },
                openMessageSelector: () => {
                    if (!C) O1(!0)
                },
                onChangeAPIKey: ZA,
                readFileState: dA.current,
                setToolJSX: fQ,
                addNotification: HA,
                onChangeDynamicMcpConfig: u,
                onInstallIDEExtension: NA,
                nestedMemoryAttachmentTriggers: new Set,
                setResponseLength: C3,
                setStreamMode: LA,
                setSpinnerMessage: _5,
                setSpinnerColor: dG,
                setSpinnerShimmerColor: nA,
                setInProgressToolUseIDs: A6,
                agentId: V9,
                resume: E3
            }
        }, [zA, WA, Q, N, wA, q.resources, qA, x, g9, P, z, ZA, HA, u, V9, E3, E.thinkingEnabled, C]),
        J7 = GB.useCallback((AQ) => {
            rQ(AQ)
        }, [ZB, z]),
        X5 = GB.useCallback(async (AQ, C2, xQ, IB, E6, X8, U9) => {
            let G8 = C2.filter((s7) => s7.type === "user" || s7.type === "assistant").pop();
            if (IB) {
                Uh.handleQueryStart(wA);
                let s7 = cU(wA);
                if (s7) U62(s7)
            }
            if (FGA(), G8?.type === "user" && typeof G8.message.content === "string") mB2(G8.message.content);
            if (!IB) {
                q8(), I1(null);
                return
            }
            let AW = q4(AQ, C2, xQ, E6, U9, X8);
            p7("query_context_loading_start");
            let [, M4, a7, iZ] = await Promise.all([nW0(w, z), Un(WA, X8, Array.from(w.additionalWorkingDirectories.keys()), wA, w), XK(), uD()]);
            p7("query_context_loading_end");
            let p8 = [...V ? [V] : M4, ...K ? [K] : []];
            p7("query_query_start");
            for await (let s7 of J$({
                messages: AQ,
                systemPrompt: p8,
                userContext: a7,
                systemContext: iZ,
                canUseTool: m2,
                toolUseContext: AW,
                querySource: WjA()
            })) RQA(s7, ($Y) => {
                s1((PC) => [...PC, $Y])
            }, ($Y) => C3((PC) => PC + $Y.length), LA, eA);
            p7("query_end"), q8(), M89(), H?.()
        }, [wA, q8, q4, w, z, WA, V, H, K, m2]),
        sW = GB.useCallback(async (AQ, C2, xQ, IB, E6, X8, U9, G8) => {
            if (B6.current) {
                BA("tengu_concurrent_onquery_detected", {});
                let AW = AQ.filter((M4) => M4.type === "user").map((M4) => yXA(M4.message.content)).filter((M4) => M4 !== null);
                if (AW.length > 0) BA("tengu_concurrent_onquery_enqueued", {}), z((M4) => ({
                    ...M4,
                    queuedCommands: [...M4.queuedCommands, ...AW.map((a7) => ({
                        value: a7,
                        mode: "prompt"
                    }))]
                }));
                return x0(!1), {
                    status: "skipped",
                    reason: "already_running"
                }
            }
            B6.current = !0, k5.current = AQ;
            try {
                if (x0(!0), s1((M4) => [...M4, ...AQ]), Y0(void 0), C3(0), eA([]), U9 && G8) {
                    let M4 = [...J0, ...AQ];
                    if (!await U9(G8, M4)) return {
                        status: "skipped",
                        reason: "blocked_by_callback"
                    }
                }
                let AW = await new Promise((M4) => {
                    s1((a7) => {
                        return M4(a7), a7
                    })
                });
                await X5(AW, AQ, C2, xQ, IB, E6, X8)
            } finally {
                B6.current = !1, LI(Date.now()), q8()
            }
            return {
                status: "completed"
            }
        }, [J0, X5, x0, z, q8]),
        l5 = GB.useCallback(async (AQ, C2, xQ) => {
            await wW0({
                input: AQ,
                memoryPath: C2,
                helpers: xQ,
                isLoading: w1,
                mode: PB,
                commands: zA,
                onInputChange: rQ,
                onModeChange: IQ,
                setPastedContents: h4,
                onSubmitCountChange: uG,
                setIDESelection: SA,
                setIsLoading: x0,
                setToolJSX: fQ,
                getToolUseContext: q4,
                messages: J0,
                mainLoopModel: y,
                pastedContents: l9,
                ideSelection: KA,
                setUserInputOnProcessing: Y0,
                setAbortController: I1,
                onQuery: sW,
                resetLoadingState: q8,
                thinkingTokens: B8.tokens,
                thinkingEnabled: E.thinkingEnabled,
                getAppState: () => new Promise((IB) => z((E6) => {
                    return IB(E6), E6
                })),
                setAppState: z,
                querySource: WjA(),
                onBeforeQuery: D
            })
        }, [w1, PB, zA, rQ, IQ, h4, uG, SA, x0, fQ, q4, J0, y, l9, KA, Y0, I1, sW, q8, B8.tokens, E.thinkingEnabled, z, D]),
        tJ = GB.useCallback(() => {
            xA(null), l5("/issue", void 0, {
                setCursorOffset: () => {},
                clearBuffer: () => {},
                resetHistory: () => {}
            })
        }, [l5]),
        AJ = GB.useCallback(() => {
            xA(null)
        }, []),
        B4 = GB.useCallback(() => {
            l5("/rate-limit-options", void 0, {
                setCursorOffset: () => {},
                clearBuffer: () => {},
                resetHistory: () => {}
            })
        }, [l5]);
    async function QV() {
        ZA();
        let AQ = xF();
        for (let xQ of AQ) dA.current.set(xQ.path, {
            content: xQ.content,
            timestamp: Date.now(),
            offset: void 0,
            limit: void 0
        });
        if (!B) return;
        x0(!0), C3(0), eA([]);
        let C2 = bL0();
        I1(C2);
        try {
            let {
                messages: xQ,
                shouldQuery: IB,
                allowedTools: E6
            } = await pP({
                input: B,
                mode: "prompt",
                setIsLoading: x0,
                setToolJSX: fQ,
                context: q4(J0, J0, C2, [], void 0, y),
                ideSelection: KA,
                messages: J0,
                setUserInputOnProcessing: Y0,
                querySource: WjA()
            });
            if (JG()) xQ.filter(Ln).forEach((X8) => {
                UYA((U9) => {
                    z((G8) => ({
                        ...G8,
                        fileHistory: U9(G8.fileHistory)
                    }))
                }, X8.uuid)
            });
            if (xQ.length) {
                for (let iZ of xQ)
                    if (iZ.type === "user") Jf(B);
                if (s1((iZ) => [...iZ, ...xQ]), !IB) {
                    I1(null);
                    return
                }
                let [X8, U9, G8] = await Promise.all([Un(WA, y, Array.from(w.additionalWorkingDirectories.keys()), wA, w), XK(), uD()]), AW = [...V ? [V] : X8, ...K ? [K] : []], M4 = q4([...J0, ...xQ], xQ, C2, [], void 0, y), a7 = E6 ? {
                    ...M4,
                    async getAppState() {
                        return {
                            ...E,
                            toolPermissionContext: {
                                ...E.toolPermissionContext,
                                alwaysAllowRules: {
                                    ...E.toolPermissionContext.alwaysAllowRules,
                                    command: E6
                                }
                            }
                        }
                    }
                } : M4;
                for await (let iZ of J$({
                    messages: [...J0, ...xQ],
                    systemPrompt: AW,
                    userContext: U9,
                    systemContext: G8,
                    canUseTool: m2,
                    toolUseContext: a7,
                    querySource: WjA()
                })) RQA(iZ, (p8) => {
                    s1((s7) => [...s7, p8])
                }, (p8) => C3((s7) => s7 + p8.length), LA, eA);
                H?.()
            } else Jf(B);
            C6(L1().hasAcknowledgedCostThreshold || !1)
        } finally {
            q8()
        }
    }
    hOB(), Sb2(J0, J0.length === Z?.length), G89(), GB.useEffect(() => {
        if (E.queuedCommands.length < 1) return;
        let AQ = L1();
        d0({
            ...AQ,
            promptQueueUseCount: (AQ.promptQueueUseCount ?? 0) + 1
        })
    }, [E.queuedCommands.length]), GB.useEffect(() => {
        sOA.recordUserActivity(), ZVA()
    }, [ZB, p5]);
    let HG = GB.useRef(new Set);
    GB.useEffect(() => {
        let AQ = new Set(J0.filter((xQ) => TQA(xQ)).map((xQ) => xQ.uuid));
        if (Array.from(AQ).some((xQ) => !HG.current.has(xQ))) {
            if (HG.current = AQ, !bH()) SJ();
            lB(UX0())
        }
    }, [J0]), GB.useEffect(() => {
        if (w1) return;
        if (p5 === 0) return;
        if (CZ === 0) return;
        let AQ = setTimeout(() => {
            if (t_A() > CZ) return;
            let xQ = Date.now() - CZ;
            if (!w1 && !T0 && I0 === void 0 && xQ >= L1().messageIdleNotifThresholdMs) I0A({
                message: "Claude is waiting for your input",
                notificationType: "idle_prompt"
            })
        }, L1().messageIdleNotifThresholdMs);
        return () => clearTimeout(AQ)
    }, [w1, T0, p5, I0, CZ]), n69(w1, CZ), GB.useEffect(() => {
        return QV(), VJ0(), () => {
            Uh.shutdown()
        }
    }, []);
    let {
        internal_eventEmitter: eJ
    } = Bp(), [WF, BV] = GB.useState(0);
    GB.useEffect(() => {
        let AQ = () => {
                process.stdout.write(`
Claude Code has been suspended. Run \`fg\` to bring Claude Code back.
Note: ctrl + z now suspends Claude Code, ctrl + _ undoes input.
`)
            },
            C2 = () => {
                BV((xQ) => xQ + 1)
            };
        return eJ?.on("suspend", AQ), eJ?.on("resume", C2), () => {
            eJ?.off("suspend", AQ), eJ?.off("resume", C2)
        }
    }, [eJ]);
    let z3 = GB.useMemo(() => lJ(p0).filter(LjA), [p0]),
        GV = GB.useMemo(() => {
            if (!w1) return null;
            let AQ = J0.filter((M4) => M4.type === "progress" && M4.data.type === "hook_progress" && (M4.data.hookEvent === "Stop" || M4.data.hookEvent === "SubagentStop"));
            if (AQ.length === 0) return null;
            let C2 = [...new Set(AQ.map((M4) => M4.toolUseID))],
                xQ = C2[C2.length - 1];
            if (!xQ) return null;
            if (J0.some((M4) => M4.type === "system" && M4.subtype === "stop_hook_summary" && M4.toolUseID === xQ)) return null;
            let E6 = AQ.filter((M4) => M4.toolUseID === xQ),
                X8 = E6.length,
                U9 = J0.filter((M4) => {
                    if (M4.type !== "attachment") return !1;
                    let a7 = M4.attachment;
                    return "hookEvent" in a7 && (a7.hookEvent === "Stop" || a7.hookEvent === "SubagentStop") && "toolUseID" in a7 && a7.toolUseID === xQ
                }).length,
                G8 = E6.find((M4) => M4.data.statusMessage)?.data.statusMessage;
            if (G8) return X8 === 1 ? `${G8}…` : `${G8}… ${U9}/${X8}`;
            let AW = E6[0]?.data.hookEvent === "SubagentStop" ? "subagent stop" : "stop";
            return X8 === 1 ? `running ${AW} hook` : `running stop hooks… ${U9}/${X8}`
        }, [J0, w1]);
    c69(o, l, d, IA, SJ);
    let UY = E.todos[V9];
    if (W89(UY), o === "transcript") return E9.createElement(E9.Fragment, null, E9.createElement(uXA, {
        messages: J0,
        normalizedMessageHistory: z3,
        tools: WA,
        verbose: !0,
        toolJSX: null,
        toolUseConfirmQueue: [],
        inProgressToolUseIDs: y9,
        isMessageSelectorVisible: !1,
        conversationId: oQ,
        screen: o,
        agentDefinitions: P,
        screenToggleId: k,
        streamingToolUses: TA,
        showAllInTranscript: QA,
        onOpenRateLimitOptions: B4
    }), T0 && E9.createElement(j, {
        flexDirection: "column",
        width: "100%"
    }, T0.jsx), E9.createElement(SI9, null), E9.createElement(j, {
        alignItems: "center",
        alignSelf: "center",
        borderTopDimColor: !0,
        borderBottom: !1,
        borderLeft: !1,
        borderRight: !1,
        borderStyle: "single",
        marginTop: 1,
        paddingLeft: 2,
        width: "100%"
    }, E9.createElement($, {
        dimColor: !0
    }, "Showing detailed transcript · ctrl+o to toggle")));
    return E9.createElement($Z1, {
        key: WF,
        dynamicMcpConfig: x,
        isStrictMcpConfig: F,
        mcpCliEndpoint: W
    }, E9.createElement(uXA, {
        messages: J0,
        normalizedMessageHistory: z3,
        tools: WA,
        verbose: N,
        toolJSX: T0,
        toolUseConfirmQueue: F1,
        inProgressToolUseIDs: y9,
        isMessageSelectorVisible: C1,
        conversationId: oQ,
        screen: o,
        screenToggleId: k,
        streamingToolUses: TA,
        showAllInTranscript: QA,
        agentDefinitions: P,
        onOpenRateLimitOptions: B4
    }), E9.createElement(A59, null), T0 && E9.createElement(j, {
        flexDirection: "column",
        width: "100%"
    }, T0.jsx), E9.createElement(j, {
        flexDirection: "column",
        width: "100%"
    }, !C && b1 && E9.createElement(HQA, {
        param: {
            text: b1,
            type: "text"
        },
        addMargin: !0,
        verbose: N
    }), !1, W5 && E9.createElement(RM2, {
        mode: $A,
        spinnerTip: E.spinnerTip,
        currentResponseLength: DG,
        overrideMessage: e8,
        spinnerSuffix: GV,
        verbose: N,
        elapsedTimeMs: B1,
        todos: UY,
        overrideColor: mG,
        overrideShimmerColor: U1,
        hasActiveTools: y9.size > 0
    }), !W5 && E.showExpandedTodos && E9.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, E9.createElement(si, {
        todos: UY || [],
        isStandalone: !0
    })), I0 === "sandbox-permission" && E9.createElement(j59, {
        key: N1[0].hostPattern.host,
        hostPattern: N1[0].hostPattern,
        onUserResponse: (AQ) => {
            let {
                allow: C2,
                persistToSettings: xQ
            } = AQ, IB = N1[0];
            if (!IB) return;
            let E6 = IB.hostPattern.host;
            if (xQ) {
                let X8 = {
                    type: "addRules",
                    rules: [{
                        toolName: vX,
                        ruleContent: `domain:${E6}`
                    }],
                    behavior: C2 ? "allow" : "deny",
                    destination: "localSettings"
                };
                z((U9) => ({
                    ...U9,
                    toolPermissionContext: $V(U9.toolPermissionContext, X8)
                })), Yv(X8), lQ.refreshConfig()
            }
            Z0((X8) => {
                return X8.filter((U9) => U9.hostPattern.host === E6).forEach((U9) => U9.resolvePromise(C2)), X8.filter((U9) => U9.hostPattern.host !== E6)
            })
        }
    }), I0 === "tool-permission" && E9.createElement(lm2, {
        key: F1[0]?.toolUseID,
        onDone: () => R1(([AQ, ...C2]) => C2),
        onReject: dQ,
        toolUseConfirm: F1[0],
        toolUseContext: q4(J0, J0, aA ?? s9(), [], void 0, y),
        verbose: N
    }), I0 === "elicitation" && E9.createElement(rm2, {
        serverName: E.elicitation.queue[0].serverName,
        request: E.elicitation.queue[0].request,
        onResponse: (AQ, C2) => {
            let xQ = E.elicitation.queue[0];
            if (xQ) z((IB) => ({
                ...IB,
                elicitation: {
                    queue: IB.elicitation.queue.slice(1)
                }
            })), xQ.respond({
                action: AQ,
                content: C2
            })
        },
        signal: E.elicitation.queue[0].signal
    }), I0 === "cost" && E9.createElement(Tb2, {
        onDone: () => {
            O0(!1), C6(!0);
            let AQ = L1();
            d0({
                ...AQ,
                hasAcknowledgedCostThreshold: !0
            }), BA("tengu_cost_threshold_acknowledged", {})
        }
    }), I0 === "ide-onboarding" && E9.createElement(Z62, {
        onDone: () => rA(!1),
        installationStatus: qA
    }), mA, !T0?.shouldHidePromptInput && !I0 && !S1 && !C && E9.createElement(E9.Fragment, null, jA && E9.createElement(IY9, {
        onRun: tJ,
        onCancel: AJ,
        reason: YY9(jA)
    }), E9.createElement(J59, {
        state: w4.state,
        handleSelect: w4.handleSelect,
        inputValue: ZB,
        setInputValue: rQ
    }), E9.createElement(A89, {
        debug: Q,
        ideSelection: KA,
        getToolUseContext: q4,
        toolPermissionContext: w,
        setToolPermissionContext: EB,
        apiKeyStatus: YA,
        commands: zA,
        agents: P.activeAgents,
        isLoading: w1,
        onExit: async () => {
            P1(!0);
            let AQ = await qI1.call(() => {});
            E1(AQ)
        },
        verbose: N,
        messages: J0,
        onAutoUpdaterResult: k1,
        autoUpdaterResult: u0,
        input: ZB,
        onInputChange: J7,
        mode: PB,
        onModeChange: IQ,
        submitCount: p5,
        onShowMessageSelector: () => O1((AQ) => !AQ),
        mcpClients: wA,
        pastedContents: l9,
        setPastedContents: h4,
        vimMode: v6,
        setVimMode: w8,
        showBashesDialog: i9,
        setShowBashesDialog: Q6,
        onSubmit: l5,
        isSearchingHistory: $4,
        setIsSearchingHistory: n7
    }))), I0 === "message-selector" && E9.createElement(yb2, {
        messages: J0,
        onPreRestore: e0,
        onRestoreCode: async (AQ) => {
            await PMA((C2) => {
                z((xQ) => ({
                    ...xQ,
                    fileHistory: C2(xQ.fileHistory)
                }))
            }, AQ.uuid)
        },
        onRestoreMessage: async (AQ) => {
            let C2 = J0.indexOf(AQ),
                xQ = J0.slice(0, C2);
            setImmediate(async () => {
                if (!bH()) await SJ();
                if (s1([...xQ]), lB(UX0()), z((IB) => ({
                        ...IB,
                        todos: {
                            ...IB.todos,
                            [V9]: AQ.todos ?? []
                        },
                        promptSuggestion: {
                            text: null,
                            shownAt: 0
                        }
                    })), GYA(AQ.todos ?? [], V9), typeof AQ.message.content === "string") {
                    let IB = AQ.message.content,
                        E6 = e2(IB, "bash-input"),
                        X8 = e2(IB, "command-name");
                    if (E6) rQ(E6), IQ("bash");
                    else if (X8) {
                        let U9 = e2(IB, "command-args") || "";
                        rQ(`${X8} ${U9}`), IQ("prompt")
                    } else rQ(IB), IQ("prompt")
                } else if (Array.isArray(AQ.message.content) && AQ.message.content.length >= 2 && AQ.message.content.some((IB) => IB.type === "image") && AQ.message.content.some((IB) => IB.type === "text")) {
                    let IB = AQ.message.content.find((X8) => X8.type === "text");
                    if (IB && IB.type === "text") rQ(IB.text), IQ("prompt");
                    let E6 = AQ.message.content.filter((X8) => X8.type === "image");
                    if (E6.length > 0) {
                        let X8 = {};
                        E6.forEach((U9, G8) => {
                            if (U9.source.type === "base64") X8[G8 + 1] = {
                                id: G8 + 1,
                                type: "image",
                                content: U9.source.data,
                                mediaType: U9.source.media_type
                            }
                        }), h4(X8)
                    }
                }
            })
        },
        onClose: () => O1(!1)
    }))
}
var E9, GB, $X0 = 100;
var gI1 = L(() => {
    hA();
    Pb2();
    $U();
    UU();
    W61();
    uM();
    S0();
    A0A();
    _b2();
    QTA();
    hb2();
    im2();
    om2();
    Q89();
    KJ0();
    zI();
    $n();
    $y();
    uE();
    x_();
    Z89();
    Pp();
    Y89();
    X89();
    V89();
    E89();
    $89();
    hK();
    jQ();
    w0();
    nQ();
    Bh();
    jt();
    zU();
    _J();
    R89();
    JjA();
    wn();
    j89();
    qW0();
    NW0();
    y89();
    OW0();
    UI1();
    rOA();
    r$A();
    p69();
    q1A();
    i69();
    jq();
    bPA();
    H9();
    vXA();
    Ei();
    _E();
    GG();
    wYA();
    iU();
    a69();
    yJ();
    o69();
    hW0();
    DWA();
    C1A();
    _A0();
    g40();
    UZ();
    FQA();
    Q59();
    Z59();
    W59();
    V59();
    N59();
    O59();
    MJ();
    P59();
    S59();
    _I9();
    VX0();
    xI9();
    bI9();
    pI9();
    aZ1();
    nI9();
    sI9();
    tI9();
    QY9();
    ZY9();
    JY9();
    E9 = GA(VA(), 1), GB = GA(VA(), 1)
});
import {
    randomUUID as dP3
} from "crypto";
async function* uI1({
    agentDefinition: A,
    promptMessages: Q,
    toolUseContext: B,
    canUseTool: G,
    isAsync: Z,
    forkContextMessages: I,
    querySource: Y,
    override: J,
    model: W
}) {
    let X = await B.getAppState(),
        F = X.toolPermissionContext.mode,
        V = WrA(A.model, B.options.mainLoopModel, W, F),
        K = J?.agentId ? J.agentId : KWA(),
        H = [...I ? P30(I) : [], ...Q],
        C = I !== void 0 ? uAA(B.readFileState) : Gh($X0),
        [E, z] = await Promise.all([J?.userContext ?? XK(), J?.systemContext ?? uD()]),
        w = A.permissionMode,
        q = w !== void 0 || Z ? async () => {
            let QA = await B.getAppState(),
                IA = QA.toolPermissionContext;
            if (w && QA.toolPermissionContext.mode !== "bypassPermissions") IA = {
                ...IA,
                mode: w
            };
            if (Z) IA = {
                ...IA,
                shouldAvoidPermissionPrompts: !0
            };
            if (IA === QA.toolPermissionContext) return QA;
            return {
                ...QA,
                toolPermissionContext: IA
            }
        }: B.getAppState, P = CWA(A, B.options.tools, Z).resolvedTools, y = Array.from(X.toolPermissionContext.additionalWorkingDirectories.keys()), v = J?.systemPrompt ? J.systemPrompt : await cP3(A, B, V, y), x = [], p, u = J?.abortController ? J.abortController : Z ? new AbortController : B.abortController, o = [];
    for await (let QA of qX0(K, A.agentType, u.signal)) if (QA.additionalContexts && QA.additionalContexts.length > 0) o.push(...QA.additionalContexts);
    if (o.length > 0) {
        let QA = p9({
            type: "hook_additional_context",
            content: o,
            hookName: "SubagentStart",
            toolUseID: dP3(),
            hookEvent: "SubagentStart"
        });
        H.push(QA)
    }
    let l = A.skills ?? [];
    if (l.length > 0) {
        let QA = await VWA(),
            IA = [];
        for (let HA of l) {
            if (!oh(HA, QA)) {
                g(`[Agent: ${A.agentType}] Warning: Skill '${HA}' specified in frontmatter was not found`, {
                    level: "warn"
                });
                continue
            }
            let wA = vq(HA, QA);
            if (wA.type !== "prompt") {
                g(`[Agent: ${A.agentType}] Warning: Skill '${HA}' is not a prompt-based skill`, {
                    level: "warn"
                });
                continue
            }
            IA.push({
                skillName: HA,
                skill: wA
            })
        }
        for (let {
                skillName: HA,
                skill: wA
            }
            of IA) {
            let KA = await wA.getPromptForCommand("", B);
            g(`[Agent: ${A.agentType}] Preloaded skill '${HA}'`);
            let SA = wX0(HA, wA.progressMessage);
            H.push(j0({
                content: [{
                    type: "text",
                    text: SA
                }, ...KA]
            }))
        }
    }
    let k = {
            isNonInteractiveSession: Z ? !0 : B.options.isNonInteractiveSession ?? !1,
            hasAppendSystemPrompt: B.options.hasAppendSystemPrompt,
            tools: P,
            commands: [],
            debug: B.options.debug,
            verbose: B.options.verbose,
            mainLoopModel: V,
            maxThinkingTokens: Xf(H),
            mcpClients: B.options.mcpClients,
            mcpResources: B.options.mcpResources,
            agentDefinitions: B.options.agentDefinitions
        },
        d = sRA(B, {
            options: k,
            agentId: K,
            messages: H,
            readFileState: C,
            abortController: u,
            getAppState: q,
            shareSetAppState: !Z,
            shareSetResponseLength: !0
        });
    for await (let QA of J$({
        messages: H,
        systemPrompt: v,
        userContext: E,
        systemContext: z,
        canUseTool: G,
        toolUseContext: d,
        querySource: Y
    })) if (QA.type === "assistant" || QA.type === "user" || QA.type === "progress" || QA.type === "system" && QA.subtype === "compact_boundary") x.push(QA), p = XY9(x, K).catch((IA) => g(`Failed to record sidechain transcript: ${IA}`)), yield QA;
    if (await p, u.signal.aborted) throw new YW;
    if (Ly(A) && A.callback) A.callback()
}

function P30(A) {
    let Q = new Set;
    for (let B of A)
        if (B?.type === "user") {
            let Z = B.message.content;
            if (Array.isArray(Z)) {
                for (let I of Z)
                    if (I.type === "tool_result" && I.tool_use_id) Q.add(I.tool_use_id)
            }
        } return A.filter((B) => {
        if (B?.type === "assistant") {
            let Z = B.message.content;
            if (Array.isArray(Z)) return !Z.some((Y) => Y.type === "tool_use" && Y.id && !Q.has(Y.id))
        }
        return !0
    })
}
async function cP3(A, Q, B, G) {
    try {
        let Z = A.getSystemPrompt({
            toolUseContext: Q
        });
        return await fjA([Z], B, G)
    } catch (Z) {
        return await fjA([WY9], B, G)
    }
}
var R51 = L(() => {
    wn();
    $Z();
    wy();
    $y();
    $n();
    s2();
    zU();
    EWA();
    Oy();
    uM();
    gI1();
    AO();
    eM();
    GG();
    D0();
    nRA();
    M9();
    nE();
    nQ();
    jTA();
    O51()
});

function FY9({
    agentType: A,
    description: Q,
    toolUseCount: B,
    tokens: G,
    color: Z,
    isLast: I,
    isResolved: Y,
    isError: J,
    isAsync: W = !1,
    shouldAnimate: X,
    lastToolInfo: F,
    hideType: V = !1
}) {
    let K = I ? "└─" : "├─",
        D = () => {
            if (!Y) return F || "Initializing…";
            return W ? "Launched" : "Done"
        };
    return _6.createElement(j, {
        flexDirection: "column"
    }, _6.createElement(j, {
        paddingLeft: 3
    }, _6.createElement($, {
        dimColor: !Y
    }, K, " ", V ? _6.createElement($, {
        bold: !0
    }, Q || A) : _6.createElement(_6.Fragment, null, _6.createElement($, {
        bold: !0,
        backgroundColor: Z,
        color: Z ? "inverseText" : void 0
    }, A), Q && _6.createElement($, null, " (", Q, ")")), " · ", W && Y ? _6.createElement($, null, "Running in background") : _6.createElement(_6.Fragment, null, _6.createElement($, {
        bold: !0
    }, B), " tool", " ", B === 1 ? "use" : "uses"), G !== null && _6.createElement(_6.Fragment, null, " · ", QZ(G), " tokens"))), _6.createElement(j, {
        paddingLeft: 3,
        flexDirection: "row"
    }, _6.createElement($, {
        dimColor: !Y
    }, I ? "   " : "│  "), _6.createElement($, {
        dimColor: !0
    }, "⎿ "), _6.createElement($, {
        dimColor: !0
    }, D())))
}
var _6;
var VY9 = L(() => {
    hA();
    _6 = GA(VA(), 1)
});
