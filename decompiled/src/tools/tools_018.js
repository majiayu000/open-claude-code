/**
 * Claude Code Decompiled
 * Category: tools
 * File: 18/25
 * Lines: 402284 - 403776 (1493 lines)
 * Original file: cli.js
 */

    let z = K.filter((P) => P.status === "running").length,
        w = D.filter((P) => P.status === "running" || P.status === "starting").length,
        N = H.filter((P) => P.status === "running").length,
        q = fF([...z > 0 ? [K3.default.createElement($, {
            key: "shells"
        }, z, " ", z !== 1 ? "active shells" : "active shell")] : [], ...w > 0 ? [K3.default.createElement($, {
            key: "sessions"
        }, w, " ", w !== 1 ? "active session" : "active session")] : [], ...[]], (P) => K3.default.createElement($, {
            key: `separator-${P}`
        }, " · ")),
        R = [K3.default.createElement($, {
            key: "upDown"
        }, "↑/↓ to select"), K3.default.createElement($, {
            key: "enter"
        }, "Enter to view"), ...(E?.type === "shell" || E?.type === "async_agent") && E.status === "running" ? [K3.default.createElement($, {
            key: "kill"
        }, "k to kill")] : [], K3.default.createElement($, {
            key: "esc"
        }, "Esc to close")];
    return K3.default.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, K3.default.createElement(j, {
        borderStyle: "round",
        borderColor: "background",
        flexDirection: "column",
        marginTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        width: "100%"
    }, K3.default.createElement($, {
        color: "background",
        bold: !0
    }, "Background tasks"), K3.default.createElement($, {
        dimColor: !0
    }, q), F.length === 0 ? K3.default.createElement($, {
        dimColor: !0
    }, "No tasks currently running") : K3.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, K.length > 0 && K3.default.createElement(j, {
        flexDirection: "column"
    }, (D.length > 0 || H.length > 0) && K3.default.createElement($, {
        dimColor: !0
    }, K3.default.createElement($, {
        bold: !0
    }, "  ", "Bashes"), " (", K.length, ")"), K3.default.createElement(j, {
        flexDirection: "column"
    }, K.map((P, y) => K3.default.createElement(k49, {
        key: P.id,
        item: P,
        isSelected: y === Y
    })))), D.length > 0 && K3.default.createElement(j, {
        flexDirection: "column",
        marginTop: K.length > 0 ? 1 : 0
    }, K3.default.createElement($, {
        dimColor: !0
    }, K3.default.createElement($, {
        bold: !0
    }, "  ", "Remote sessions"), " (", D.length, ")"), K3.default.createElement(j, {
        flexDirection: "column"
    }, D.map((P, y) => K3.default.createElement(k49, {
        key: P.id,
        item: P,
        isSelected: K.length + y === Y
    })))), !1)), K3.default.createElement(j, {
        marginLeft: 2
    }, W.pending ? K3.default.createElement($, {
        dimColor: !0
    }, "Press ", W.keyName, " again to exit") : K3.default.createElement($, {
        dimColor: !0
    }, fF(R, (P) => K3.default.createElement($, {
        key: `separator-${P}`
    }, " · ")))))
}

function PR3(A) {
    switch (A.type) {
        case "shell":
            return {
                id: A.id, type: "shell", label: A.description, status: A.status, task: A
            };
        case "remote_session":
            return {
                id: A.id, type: "remote_session", label: A.title, status: A.status, task: A
            };
        case "async_agent":
            return {
                id: A.agentId, type: "async_agent", label: A.description, status: A.status, task: A
            }
    }
}

function k49({
    item: A,
    isSelected: Q
}) {
    return K3.default.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, K3.default.createElement($, {
        color: Q ? "suggestion" : void 0
    }, Q ? V1.pointer + " " : "  ", K3.default.createElement(MZ1, {
        task: A.task
    })))
}
var K3, EQA;
var VW0 = L(() => {
    hA();
    n2();
    c9();
    y09();
    j49();
    _49();
    H9();
    gAA();
    rZ1();
    FJ0();
    K3 = GA(VA(), 1), EQA = GA(VA(), 1)
});

function SR3(A, Q) {
    if (A.length <= jR3) return {
        truncatedText: A,
        placeholderContent: ""
    };
    let B = Math.floor(y49 / 2),
        G = Math.floor(y49 / 2),
        Z = A.slice(0, B),
        I = A.slice(-G),
        Y = A.slice(B, -G),
        J = trA(Y),
        X = _R3(Q, J);
    return {
        truncatedText: Z + X + I,
        placeholderContent: Y
    }
}

function _R3(A, Q) {
    return `[...Truncated text #${A} +${Q} lines...]`
}

function x49(A, Q) {
    let B = Object.keys(Q).map(Number),
        G = B.length > 0 ? Math.max(...B) + 1 : 1,
        {
            truncatedText: Z,
            placeholderContent: I
        } = SR3(A, G);
    if (!I) return {
        newInput: A,
        newPastedContents: Q
    };
    return {
        newInput: Z,
        newPastedContents: {
            ...Q,
            [G]: {
                id: G,
                type: "text",
                content: I
            }
        }
    }
}
var jR3 = 1e4,
    y49 = 1000;
var v49 = L(() => {
    Pp()
});

function b49({
    input: A,
    pastedContents: Q,
    onInputChange: B,
    setCursorOffset: G,
    setPastedContents: Z
}) {
    let [I, Y] = GjA.useState(!1);
    GjA.useEffect(() => {
        if (I) return;
        if (A.length <= 1e4) return;
        let {
            newInput: J,
            newPastedContents: W
        } = x49(A, Q);
        B(J), G(J.length), Z(W), Y(!0)
    }, [A, I, Q, B, Z, G]), GjA.useEffect(() => {
        if (A === "") Y(!1)
    }, [A])
}
var GjA;
var f49 = L(() => {
    v49();
    GjA = GA(VA(), 1)
});

function h49(A, Q = 20) {
    let B = new Map;
    for (let Z of A) B.set(Z, (B.get(Z) || 0) + 1);
    return Array.from(B.entries()).sort((Z, I) => I[1] - Z[1]).slice(0, Q).map(([Z, I]) => `${I.toString().padStart(6)} ${Z}`).join(`
`)
}
async function kR3() {
    if (m0.platform === "win32") return [];
    if (!await FT()) return [];
    try {
        let A = "",
            {
                stdout: Q
            } = await q3("git", ["config", "user.email"], {
                cwd: H0()
            }),
            B = "";
        if (Q.trim()) {
            let {
                stdout: Y
            } = await q3("git", ["log", "-n", "1000", "--pretty=format:", "--name-only", "--diff-filter=M", `--author=${Q.trim()}`], {
                cwd: H0()
            }), J = Y.split(`
`).filter((W) => W.trim());
            B = h49(J)
        }
        if (A = `Files modified by user:
` + B, B.split(`
`).length < 10) {
            let {
                stdout: Y
            } = await q3("git", ["log", "-n", "1000", "--pretty=format:", "--name-only", "--diff-filter=M"], {
                cwd: H0()
            }), J = Y.split(`
`).filter((X) => X.trim()), W = h49(J);
            A += `

Files modified by other users:
` + W
        }
        let Z = (await gX({
            systemPrompt: ["You are an expert at analyzing git history. Given a list of files and their modification counts, return exactly five filenames that are frequently modified and represent core application logic (not auto-generated files, dependencies, or configuration). Make sure filenames are diverse, not all in the same folder, and are a mix of user and other users. Return only the filenames' basenames (without the path) separated by newlines with no explanation."],
            userPrompt: A,
            signal: new AbortController().signal,
            options: {
                querySource: "example_commands_frequently_modified",
                agents: [],
                isNonInteractiveSession: !1,
                hasAppendSystemPrompt: !1,
                mcpTools: [],
                agentIdOrSessionId: G0()
            }
        })).message.content[0];
        if (!Z || Z.type !== "text") return [];
        let I = Z.text.trim().split(`
`);
        if (I.length < 5) return [];
        return I
    } catch (A) {
        return e(A), []
    }
}
var yR3 = 604800000,
    g49, u49;
var KW0 = L(() => {
    jQ();
    f5();
    R2();
    kZ();
    I6();
    u1();
    o2();
    oiA();
    ED();
    S0();
    g49 = t1(() => {
        let A = M5(),
            Q = A.exampleFiles?.length ? Zt(A.exampleFiles) : "<filepath>",
            B = ["fix lint errors", "fix typecheck errors", `how does ${Q} work?`, `refactor ${Q}`, "how do I log an error?", `edit ${Q} to...`, `write a test for ${Q}`, "create a util logging.py that..."];
        return `Try "${Zt(B)}"`
    }), u49 = t1(async () => {
        let A = M5(),
            Q = Date.now(),
            B = A.exampleFilesGeneratedAt ?? 0;
        if (Q - B > yR3) A.exampleFiles = [];
        if (!A.exampleFiles?.length) kR3().then((G) => {
            if (G.length) aI({
                ...M5(),
                exampleFiles: G,
                exampleFilesGeneratedAt: Date.now()
            })
        })
    })
});

function d49({
    input: A,
    mode: Q,
    submitCount: B
}) {
    let [{
        queuedCommands: G
    }] = _Q(), Z = m49.useMemo(() => {
        if (A !== "") return;
        if (G.length > 0 && (L1().queuedCommandUpHintCount || 0) < xR3) return "Press up to edit queued messages";
        if (B < 1) return g49()
    }, [A, G, B]);
    if (Q === "memory") return 'Add to memory. Try "Always use descriptive variable names"';
    return Z
}
var m49, xR3 = 3;
var c49 = L(() => {
    H9();
    jQ();
    KW0();
    m49 = GA(VA(), 1)
});

function p49({
    mode: A,
    isLoading: Q
}) {
    return cP.createElement(j, {
        alignItems: "flex-start",
        alignSelf: "flex-start",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        width: 2
    }, A === "bash" ? cP.createElement($, {
        color: "bashBorder",
        dimColor: Q
    }, "! ") : A === "memory" || A === "memorySelect" ? cP.createElement($, {
        color: "remember",
        dimColor: Q
    }, "# ") : A === "background" ? cP.createElement($, {
        color: "background",
        dimColor: Q
    }, "& ") : cP.createElement($, {
        dimColor: Q
    }, "> "))
}
var cP;
var l49 = L(() => {
    hA();
    cP = GA(VA(), 1)
});

function i49() {
    let {
        columns: A
    } = YB(), [{
        queuedCommands: Q
    }] = _Q();
    if (Q.length === 0) return null;
    return ZjA.createElement(j, {
        marginTop: 1,
        paddingLeft: 2,
        flexDirection: "column",
        width: A - 4
    }, ZjA.createElement($, {
        dimColor: !0,
        wrap: "wrap"
    }, Q.map((B) => B.value).join(`
`)))
}
var ZjA;
var n49 = L(() => {
    m8();
    H9();
    hA();
    ZjA = GA(VA(), 1)
});

function a49(A, Q, B, G, Z, I, Y, J, W) {
    let [X, F] = rq.useState(""), [V, K] = rq.useState(!1), [D, H] = rq.useState(""), [C, E] = rq.useState(0), [z, w] = rq.useState("prompt"), [N, q] = rq.useState(void 0), R = rq.useRef(void 0), P = rq.useRef(new Set), y = rq.useRef(null);

    function v() {
        if (R.current) R.current.return(void 0), R.current = void 0
    }

    function x() {
        W(!1), F(""), K(!1), H(""), E(0), w("prompt"), q(void 0), v(), P.current.clear()
    }
    async function p(u, o) {
        if (!J) return;
        if (X.length === 0) {
            v(), P.current.clear(), q(void 0), K(!1), B(D), G(C), I(z);
            return
        }
        if (!u) v(), R.current = erA(), P.current.clear();
        if (!R.current) return;
        while (!0) {
            if (o?.aborted) return;
            let l = await R.current.next();
            if (l.done) {
                K(!0);
                return
            }
            let k = l.value.display,
                d = k.lastIndexOf(X);
            if (d !== -1 && !P.current.has(k)) {
                P.current.add(k), q(l.value), K(!1);
                let QA = Wf(k);
                I(QA), B(k);
                let HA = Je(k).lastIndexOf(X);
                G(HA !== -1 ? HA : d);
                return
            }
        }
    }
    return h1((u, o) => {
        if (J) {
            if (o.ctrl && u === "r") p(!0);
            else if (o.escape || o.tab) {
                if (N) {
                    let l = typeof N === "string" ? N : N.display,
                        k = Wf(l),
                        d = Je(l);
                    B(d), I(k)
                }
                x()
            } else if (o.ctrl && u === "c" || o.backspace && X === "") B(D), G(C), x();
            else if (o.return) {
                if (X.length === 0) A({
                    display: D,
                    pastedContents: {}
                });
                else if (N) {
                    let l = typeof N === "string" ? N : N.display,
                        k = Wf(l),
                        d = Je(l);
                    I(k), A({
                        display: d,
                        pastedContents: {}
                    })
                }
                x()
            }
        } else if (o.ctrl && u === "r") W(!0), H(Q), E(Z), w(Y), R.current = erA(), P.current.clear()
    }, {
        isActive: !0
    }), rq.useEffect(() => {
        y.current?.abort();
        let u = new AbortController;
        return y.current = u, p(!1, u.signal), () => {
            u.abort()
        }
    }, [X]), {
        historyQuery: X,
        setHistoryQuery: F,
        historyMatch: N,
        historyFailedMatch: V
    }
}
var rq;
var s49 = L(() => {
    hA();
    Pp();
    HGA();
    rq = GA(VA(), 1)
});

function o49({
    inputValue: A,
    isAssistantResponding: Q
}) {
    let [B, G] = _Q(), I = Q || A.length > 0 ? null : B.promptSuggestion.text, Y = DW0.useCallback(() => {
        G((W) => ({
            ...W,
            promptSuggestion: {
                text: null,
                shownAt: 0
            }
        }))
    }, [G]), J = DW0.useCallback(() => {
        let W = B.promptSuggestion.text;
        if (W) {
            let X = B.promptSuggestion.shownAt;
            return BA("tengu_prompt_suggestion_accepted", {
                timeToAcceptMs: X > 0 ? Date.now() - X : 0,
                ...!1
            }), Y(), W
        }
        return null
    }, [B.promptSuggestion, Y]);
    return {
        suggestion: I,
        acceptSuggestion: J,
        clearSuggestion: Y
    }
}
var DW0, r49 = " (enter to submit)";
var t49 = L(() => {
    H9();
    w0();
    DW0 = GA(VA(), 1)
});
import * as e49 from "path";

function vR3({
    debug: A,
    ideSelection: Q,
    toolPermissionContext: B,
    setToolPermissionContext: G,
    apiKeyStatus: Z,
    commands: I,
    agents: Y,
    isLoading: J,
    verbose: W,
    messages: X,
    onAutoUpdaterResult: F,
    autoUpdaterResult: V,
    input: K,
    onInputChange: D,
    mode: H,
    onModeChange: C,
    submitCount: E,
    onShowMessageSelector: z,
    mcpClients: w,
    pastedContents: N,
    setPastedContents: q,
    vimMode: R,
    setVimMode: P,
    showBashesDialog: y,
    setShowBashesDialog: v,
    onExit: x,
    getToolUseContext: p,
    onSubmit: u,
    isSearchingHistory: o,
    setIsSearchingHistory: l
}) {
    let k = tn(),
        [d, QA] = iJ.useState(!1),
        [IA, HA] = iJ.useState({
            show: !1
        }),
        [wA, KA] = iJ.useState(K.length),
        [SA, sA] = _Q(),
        {
            historyQuery: NA,
            setHistoryQuery: qA,
            historyMatch: DA,
            historyFailedMatch: yA
        } = a49((O1) => {
            let y1 = typeof O1 === "string" ? O1 : O1.display;
            PB(y1)
        }, K, D, KA, wA, C, H, o, l),
        rA = iJ.useMemo(() => {
            let O1 = Object.keys(N).map(Number);
            if (O1.length === 0) return 1;
            return Math.max(...O1) + 1
        }, [N]),
        [K1, WA] = iJ.useState(!1),
        [XA, zA] = iJ.useState(!1),
        [$A, LA] = iJ.useState(!1),
        [TA, eA] = iJ.useState(!1),
        {
            suggestion: aA,
            acceptSuggestion: I1,
            clearSuggestion: w1
        } = o49({
            inputValue: K,
            isAssistantResponding: J
        }),
        PA = iJ.useMemo(() => o && DA ? Je(typeof DA === "string" ? DA : DA.display) : K, [o, DA, K]),
        B1 = iJ.useMemo(() => ZoA(PA), [PA]),
        Q0 = iJ.useMemo(() => {
            let O1 = [];
            if (o && DA && !yA) O1.push({
                start: wA,
                end: wA + NA.length,
                style: {
                    type: "solid",
                    color: "warning"
                },
                priority: 20
            });
            if (B1.length > 0) {
                let y1 = We(PA);
                if (y1.level !== "none") {
                    let O0 = BoA[y1.level],
                        oQ = ejB[y1.level];
                    for (let lB of B1) O1.push({
                        start: lB.start,
                        end: lB.end,
                        style: GoA(lB.word) ? {
                            type: "rainbow",
                            useShimmer: !0
                        } : {
                            type: "shimmer",
                            baseColor: O0,
                            shimmerColor: oQ
                        },
                        priority: 10
                    })
                }
            }
            return O1
        }, [o, NA, DA, yA, wA, B1, PA]),
        {
            addNotification: b1
        } = _Z();
    iJ.useEffect(() => {
        if (!B1.length) return;
        if (B1.length && !SA.thinkingEnabled) b1({
            key: "thinking-toggled-via-keyword",
            jsx: KZ.createElement($, {
                color: "suggestion"
            }, "Thinking on"),
            priority: "immediate",
            timeoutMs: 3000
        })
    }, [b1, SA.thinkingEnabled, sA, B1.length]);
    let {
        pushToBuffer: Y0,
        undo: x0,
        canUndo: u0,
        clearBuffer: k1
    } = S09({
        maxBufferSize: 50,
        debounceMs: 1000
    });
    b49({
        input: K,
        pastedContents: N,
        onInputChange: D,
        setCursorOffset: KA,
        setPastedContents: q
    });
    let T0 = d49({
            input: K,
            mode: H,
            submitCount: E
        }),
        fQ = iJ.useCallback((O1) => {
            if (O1 === "?") {
                BA("tengu_help_toggled", {}), WA((k9) => !k9);
                return
            }
            WA(!1);
            let y1 = O1.length === K.length + 1,
                O0 = wA === 0,
                oQ = Wf(O1);
            if (y1 && O0 && oQ !== "prompt") {
                C(oQ);
                return
            }
            let lB = O1.replaceAll("\t", "    ");
            if (K !== lB) Y0(K, wA, N);
            D(lB)
        }, [D, C, K, wA, Y0, N]),
        {
            resetHistory: F1,
            onHistoryUp: R1,
            onHistoryDown: N1,
            shouldShowSearchHint: Z0,
            dismissSearchHint: J0,
            historyIndex: s1
        } = J19((O1, y1, O0) => {
            fQ(O1), C(y1), q(O0)
        }, K, N, KA);
    iJ.useEffect(() => {
        if (o) J0()
    }, [o, J0]);

    function p0() {
        if (IQ.length > 1) return;
        if (SA.queuedCommands.length > 0) {
            LI();
            return
        }
        if (XA) zA(!1);
        else R1()
    }

    function HQ() {
        if (IQ.length > 1) return;
        let O1 = N1(),
            y1 = Object.values(SA.backgroundTasks).filter((O0) => O0.status === "running").length;
        if (O1 && y1 > 0) {
            zA(!0);
            let O0 = L1();
            if (!O0.hasSeenTasksHint) d0({
                ...O0,
                hasSeenTasksHint: !0
            })
        } else zA(!1)
    }
    let [ZB, rQ] = iJ.useState({
        suggestions: [],
        selectedSuggestion: -1,
        commandArgumentHint: void 0
    }), PB = iJ.useCallback(async (O1, y1 = !1, O0) => {
        let oQ = O1.trim() === "" && aA ? I1() ?? "" : O1;
        if (w1(), oQ.trim() === "") return;
        let lB = ZB.suggestions.length > 0 && ZB.suggestions.every((k9) => k9.description === "directory");
        if (ZB.suggestions.length > 0 && !y1 && !lB) return;
        await u(oQ, O0, {
            setCursorOffset: KA,
            clearBuffer: k1,
            resetHistory: F1
        })
    }, [ZB.suggestions, u, KA, k1, F1, w1, aA, I1]), {
        suggestions: IQ,
        selectedSuggestion: l9,
        commandArgumentHint: h4
    } = t19({
        commands: I,
        onInputChange: D,
        onSubmit: PB,
        setCursorOffset: KA,
        input: K,
        cursorOffset: wA,
        mode: H,
        agents: Y,
        setSuggestionsState: rQ,
        suggestionsState: ZB,
        suppressSuggestions: o || s1 > 0
    }), p5 = H === "prompt" && IQ.length === 0 && aA ? aA + r49 : T0;

    function uG(O1, y1) {
        BA("tengu_paste_image", {}), C("prompt");
        let O0 = {
            id: rA,
            type: "image",
            content: O1,
            mediaType: y1 || "image/png"
        };
        q((oQ) => ({
            ...oQ,
            [rA]: O0
        })), C3(njB(O0.id))
    }

    function DG(O1) {
        let y1 = mY(O1).replace(/\r/g, `
`).replaceAll("\t", "    "),
            O0 = trA(y1),
            oQ = Math.min(mG - 10, 2);
        if (y1.length > crA || O0 > oQ) {
            let lB = {
                id: rA,
                type: "text",
                content: y1
            };
            q((k9) => ({
                ...k9,
                [rA]: lB
            })), C3(ijB(lB.id, O0))
        } else C3(y1)
    }

    function C3(O1) {
        Y0(K, wA, N);
        let y1 = K.slice(0, wA) + O1 + K.slice(wA);
        D(y1), KA(wA + O1.length)
    }
    let CZ = ab(() => {}, () => z()),
        LI = iJ.useCallback(async () => {
            let O1 = await j51(K, wA, async () => new Promise((y1) => sA((O0) => {
                return y1(O0), O0
            })), sA);
            if (!O1) return;
            D(O1.text), C("prompt"), KA(O1.cursorOffset)
        }, [sA, D, C, K, wA]);
    P09(w, function(O1) {
        BA("tengu_ext_at_mentioned", {});
        let y1, O0 = e49.relative(H0(), O1.filePath);
        if (O1.lineStart && O1.lineEnd) y1 = O1.lineStart === O1.lineEnd ? `@${O0}#L${O1.lineStart} ` : `@${O0}#L${O1.lineStart}-${O1.lineEnd} `;
        else y1 = `@${O0} `;
        let oQ = K[wA - 1] ?? " ";
        if (!/\s/.test(oQ)) y1 = ` ${y1}`;
        C3(y1)
    }), h1((O1, y1) => {
        if (y1.ctrl && O1 === "_") {
            if (u0) {
                let O0 = x0();
                if (O0) D(O0.text), KA(O0.cursorOffset), q(O0.pastedContents)
            }
            return
        }
        if (y1.ctrl && O1.toLowerCase() === "g") {
            BA("tengu_external_editor_used", {}), eA(!0);
            let O0 = v31(K);
            if (eA(!1), O0 !== null && O0 !== K) Y0(K, wA, N), D(O0), KA(O0.length);
            return
        }
        if (y1.return && XA) {
            v(!0), zA(!1);
            return
        }
        if (wA === 0 && (y1.escape || y1.backspace || y1.delete)) C("prompt"), WA(!1);
        if (K1 && K === "" && (y1.backspace || y1.delete)) WA(!1);
        if (EU.check(O1, y1)) {
            let O0 = I09(B);
            if (BA("tengu_mode_cycle", {
                    to: O0
                }), B.mode === "plan" && O0 !== "plan") hu(!0);
            if (O0 === "plan") {
                let lB = L1();
                d0({
                    ...lB,
                    lastPlanModeUse: Date.now()
                })
            }
            let oQ = $V(B, {
                type: "setMode",
                mode: O0,
                destination: "session"
            });
            if (G(oQ), K1) WA(!1);
            return
        }
        if (y1.escape) {
            if (XA) {
                zA(!1);
                return
            }
            if (SA.queuedCommands.length > 0) {
                LI();
                return
            }
            if (X.length > 0 && !K && !J) CZ()
        }
        if (y1.return && K1) WA(!1)
    });
    let {
        columns: _5,
        rows: mG
    } = YB(), dG = _5 - 3, U1 = iJ.useMemo(() => {
        let O1 = K.split(`
`);
        for (let y1 of O1)
            if (y1.length > dG) return !0;
        return O1.length > 1
    }, [K, dG]);
    if (y) return KZ.createElement(oZ1, {
        onDone: () => {
            v(!1)
        },
        toolUseContext: p(X, [], new AbortController, [], void 0, k)
    });
    let nA = {
            multiline: !0,
            onSubmit: PB,
            onChange: fQ,
            value: DA ? Je(typeof DA === "string" ? DA : DA.display) : K,
            onHistoryUp: p0,
            onHistoryDown: HQ,
            onHistoryReset: F1,
            placeholder: p5,
            onExit: x,
            onExitMessage: (O1, y1) => HA({
                show: O1,
                key: y1
            }),
            onImagePaste: uG,
            columns: dG,
            disableCursorMovementForUpDownKeys: IQ.length > 0,
            cursorOffset: wA,
            onChangeCursorOffset: KA,
            onPaste: DG,
            onIsPastingChange: LA,
            focus: H !== "memorySelect" && !o,
            showCursor: H !== "memorySelect" && !XA && !o,
            argumentHint: h4,
            onUndo: u0 ? () => {
                let O1 = x0();
                if (O1) D(O1.text), KA(O1.cursorOffset), q(O1.pastedContents)
            } : void 0,
            highlights: Q0
        },
        C1 = () => {
            let O1 = {
                bash: "bashBorder",
                memory: "remember",
                memorySelect: "remember",
                background: "background"
            };
            if (O1[H]) return O1[H];
            return SA.thinkingEnabled ? "suggestion" : "promptBorder"
        };
    if (TA) return KZ.createElement(j, {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: C1(),
        borderDimColor: H !== "memory",
        borderStyle: "round",
        borderLeft: !1,
        borderRight: !1,
        borderBottom: !0,
        width: "100%"
    }, KZ.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Save and close editor to continue..."));
    return KZ.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, KZ.createElement(i49, null), KZ.createElement(j, {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderColor: C1(),
        borderDimColor: H !== "memory",
        borderStyle: "round",
        borderLeft: !1,
        borderRight: !1,
        borderBottom: !0,
        width: "100%"
    }, KZ.createElement(p49, {
        mode: H,
        isLoading: J
    }), KZ.createElement(j, {
        flexGrow: 1,
        flexShrink: 1
    }, TXA() ? KZ.createElement(WJ0, {
        ...nA,
        initialMode: R,
        onModeChange: P,
        isLoading: J
    }) : KZ.createElement(s4, {
        ...nA
    }))), H === "memorySelect" && KZ.createElement(TZ1, {
        onSelect: (O1) => {
            PB(K, !1, O1)
        },
        onCancel: () => {
            C("memory")
        }
    }), KZ.createElement(N09, {
        apiKeyStatus: Z,
        debug: A,
        exitMessage: IA,
        vimMode: R,
        mode: H,
        autoUpdaterResult: V,
        isAutoUpdating: d,
        verbose: W,
        onAutoUpdaterResult: F,
        onChangeIsUpdating: QA,
        suggestions: IQ,
        selectedSuggestion: l9,
        toolPermissionContext: B,
        helpOpen: K1,
        suppressHint: K.length > 0,
        tasksSelected: XA,
        ideSelection: Q,
        mcpClients: w,
        isPasting: $A,
        isInputWrapped: U1,
        messages: X,
        isSearching: o,
        historyQuery: NA,
        setHistoryQuery: qA,
        historyFailedMatch: yA,
        shouldShowSearchHint: Z0
    }))
}
var KZ, iJ, A89;
var Q89 = L(() => {
    hA();
    HT();
    W19();
    e19();
    jQ();
    Pp();
    QY();
    B09();
    vPA();
    m8();
    bPA();
    hK();
    S0();
    L09();
    qJ0();
    AsA();
    w0();
    lrA();
    jp();
    j09();
    R2();
    _09();
    zU();
    VW0();
    MG0();
    zU();
    H9();
    HGA();
    f49();
    c49();
    l49();
    n49();
    DWA();
    s49();
    UU();
    t49();
    KZ = GA(VA(), 1), iJ = GA(VA(), 1);
    A89 = vR3
});

function G89() {
    B89.useEffect(() => {
        let A = Math.round(process.uptime() * 1000);
        BA("tengu_timer", {
            event: "startup",
            durationMs: A
        })
    }, [])
}
var B89;
var Z89 = L(() => {
    w0();
    B89 = GA(VA(), 1)
});

function I89() {
    let [A, Q] = IjA.useState(() => {
        let I = Zw();
        if (!ZU() || AB()) return "valid";
        if (I) return "loading";
        return "missing"
    }), [B, G] = IjA.useState(null), Z = IjA.useCallback(async () => {
        if (!ZU() || AB()) {
            Q("valid");
            return
        }
        let I = Zw();
        if (!I) {
            Q("missing");
            return
        }
        try {
            let J = await J89(I, !1) ? "valid" : "invalid";
            Q(J);
            return
        } catch (Y) {
            G(Y), Q("error");
            return
        }
    }, []);
    return {
        status: A,
        reverify: Z,
        error: B
    }
}
var IjA;
var Y89 = L(() => {
    kZ();
    hB();
    IjA = GA(VA(), 1)
});

function W89(A) {
    let [Q, B] = _Q();
    h1((G, Z) => {
        if (Z.ctrl && G === "t") BA("tengu_toggle_todos", {
            is_expanded: Q.showExpandedTodos,
            has_todos: A && A.length > 0
        }), B((I) => ({
            ...I,
            showExpandedTodos: !I.showExpandedTodos
        }))
    })
}
var X89 = L(() => {
    hA();
    H9();
    w0()
});

function F89(A, Q, B, G, Z, I, Y, J, W) {
    let [{
        queuedCommands: X
    }] = _Q();
    h1((F, V) => {
        if (!V.escape) return;
        if (G === "transcript") return;
        if (W) return;
        if (Z?.aborted) return;
        if (!Z) return;
        if (B) return;
        if (TXA() && Y === "INSERT") return;
        if (X.length > 0) {
            if (I) I()
        }
        BA("tengu_cancel", {}), A(() => []), Q()
    })
}
var V89 = L(() => {
    hA();
    w0();
    vPA();
    H9()
});

function tZ1(A) {
    return bR3.includes(A)
}

function eZ1(A, Q, B, G) {
    if (!A.toolDecisions) A.toolDecisions = new Map;
    A.toolDecisions.set(Q, {
        source: G,
        decision: B,
        timestamp: Date.now()
    })
}

function AI1(A, Q, B, G) {
    let Z;
    if (A.getPath && Q) {
        let I = A.inputSchema.safeParse(Q);
        if (I.success) {
            let Y = A.getPath(I.data);
            if (Y) Z = NWA(Y)
        }
    }
    return {
        decision: B,
        source: G,
        tool_name: A.name,
        ...Z && {
            language: Z
        }
    }
}
async function QI1(A, Q, B) {
    await WO("tool_decision", {
        decision: Q,
        source: B,
        tool_name: A
    })
}

function K89(A, Q, B, G, Z) {
    if (BA("tengu_tool_use_granted_in_config", {
            messageID: G,
            toolName: A.name,
            sandboxEnabled: lQ.isSandboxingEnabled()
        }), tZ1(A.name)) {
        let I = AI1(A, Q, "accept", "config");
        YVA()?.add(1, I)
    }
    eZ1(B, Z, "accept", "config"), QI1(A.name, "accept", "config")
}

function fR3(A) {
    switch (A.type) {
        case "hook":
            return "hook";
        case "user":
            return A.permanent ? "user_permanent" : "user_temporary"
    }
}

function D89(A, Q, B, G, Z, I) {
    switch (I.type) {
        case "user":
            BA(I.permanent ? "tengu_tool_use_granted_in_prompt_permanent" : "tengu_tool_use_granted_in_prompt_temporary", {
                messageID: G,
                toolName: A.name,
                sandboxEnabled: lQ.isSandboxingEnabled()
            });
            break;
        case "hook":
            BA("tengu_tool_use_granted_by_permission_hook", {
                messageID: G,
                toolName: A.name,
                sandboxEnabled: lQ.isSandboxingEnabled(),
                permanent: I.permanent ?? !1
            });
            break
    }
    let Y = fR3(I);
    if (tZ1(A.name)) {
        let J = AI1(A, Q, "accept", Y);
        YVA()?.add(1, J)
    }
    eZ1(B, Z, "accept", Y), QI1(A.name, "accept", Y)
}

function HW0(A, Q, B, G, Z, I) {
    let Y = I.type === "hook",
        J = Y ? "hook" : I.type;
    if (Y) BA("tengu_tool_use_rejected_in_prompt", {
        messageID: G,
        toolName: A.name,
        sandboxEnabled: lQ.isSandboxingEnabled(),
        isHook: !0
    });
    else {
        let W = I.type === "user_reject" ? I.hasFeedback : !1;
        BA("tengu_tool_use_rejected_in_prompt", {
            messageID: G,
            toolName: A.name,
            sandboxEnabled: lQ.isSandboxingEnabled(),
            hasFeedback: W
        })
    }
    if (tZ1(A.name)) {
        let W = AI1(A, Q, "reject", J);
        YVA()?.add(1, W)
    }
    eZ1(B, Z, "reject", J), QI1(A.name, "reject", J)
}

function hR3(A, Q) {
    return H89.useCallback(async (B, G, Z, I, Y, J) => {
        return new Promise((W) => {
            function X() {
                BA("tengu_tool_use_cancelled", {
                    messageID: I.message.id,
                    toolName: B.name
                })
            }

            function F(K) {
                let D = K ? `${pPA}${K}` : iPA;
                if (W({
                        behavior: "ask",
                        message: D
                    }), !K) Z.abortController.abort("tool-rejection")
            }
            if (Z.abortController.signal.aborted) {
                X(), F();
                return
            }
            return (J !== void 0 ? Promise.resolve(J) : L$(B, G, Z, I, Y)).then(async (K) => {
                if (K.behavior === "allow") {
                    K89(B, G, Z, I.message.id, Y), W({
                        ...K,
                        updatedInput: G,
                        userModified: !1
                    });
                    return
                }
                let D = await Z.getAppState(),
                    H = await B.description(G, {
                        isNonInteractiveSession: Z.options.isNonInteractiveSession,
                        toolPermissionContext: D.toolPermissionContext,
                        tools: Z.options.tools
                    });
                if (Z.abortController.signal.aborted) {
                    X(), F();
                    return
                }
                switch (K.behavior) {
                    case "deny": {
                        if (BA("tengu_tool_use_denied_in_config", {
                                messageID: I.message.id,
                                toolName: B.name,
                                sandboxEnabled: lQ.isSandboxingEnabled()
                            }), tZ1(B.name)) {
                            let C = AI1(B, G, "reject", "config");
                            YVA()?.add(1, C)
                        }
                        eZ1(Z, Y, "reject", "config"), QI1(B.name, "reject", "config"), W(K);
                        return
                    }
                    case "ask": {
                        let C = !1;
                        A((z) => [...z, {
                            assistantMessage: I,
                            tool: B,
                            description: H,
                            input: G,
                            toolUseContext: Z,
                            toolUseID: Y,
                            permissionResult: K,
                            onAbort() {
                                if (C) return;
                                C = !0, X(), HW0(B, G, Z, I.message.id, Y, {
                                    type: "user_abort"
                                }), F()
                            },
                            async onAllow(w, N) {
                                if (C) return;
                                C = !0, SKA(N);
                                let q = await Z.getAppState(),
                                    R = Rm(q.toolPermissionContext, N);
                                Q(R);
                                let P = N.some((v) => XvA(v.destination));
                                D89(B, w, Z, I.message.id, Y, {
                                    type: "user",
                                    permanent: P
                                });
                                let y = B.inputsEquivalent ? !B.inputsEquivalent(G, w) : !1;
                                W({
                                    behavior: "allow",
                                    updatedInput: w,
                                    userModified: y
                                })
                            },
                            onReject(w) {
                                if (C) return;
                                C = !0, HW0(B, G, Z, I.message.id, Y, {
                                    type: "user_reject",
                                    hasFeedback: !!w
                                }), F(w)
                            },
                            async recheckPermission() {
                                if (C) return;
                                let w = await L$(B, G, Z, I, Y);
                                if (w.behavior === "allow") A((N) => N.filter((q) => q.toolUseID !== Y)), K89(B, G, Z, I.message.id, Y), C = !0, W({
                                    behavior: "allow",
                                    updatedInput: w.updatedInput || G,
                                    userModified: !1
                                })
                            }
                        }]);
                        let E = await Z.getAppState();
                        (async () => {
                            for await (let z of CYA([CW0(B.name, Y, G, Z, E.toolPermissionContext.mode, K.suggestions, Z.abortController.signal)])) {
                                if (C) return;
                                if (z.permissionRequestResult && (z.permissionRequestResult.behavior === "allow" || z.permissionRequestResult.behavior === "deny")) {
                                    C = !0, A((N) => N.filter((q) => q.toolUseID !== Y));
                                    let w = z.permissionRequestResult;
                                    if (w.behavior === "allow") {
                                        let N = w.updatedInput || G,
                                            q = w.updatedPermissions ?? [];
                                        if (q.length > 0) {
                                            SKA(q);
                                            let P = await Z.getAppState(),
                                                y = Rm(P.toolPermissionContext, q);
                                            Q(y)
                                        }
                                        let R = q.some((P) => XvA(P.destination));
                                        D89(B, N, Z, I.message.id, Y, {
                                            type: "hook",
                                            permanent: R
                                        }), W({
                                            behavior: "allow",
                                            updatedInput: N,
                                            userModified: !1,
                                            decisionReason: {
                                                type: "hook",
                                                hookName: "PermissionRequest"
                                            }
                                        });
                                        return
                                    } else if (w.behavior === "deny") {
                                        if (HW0(B, G, Z, I.message.id, Y, {
                                                type: "hook"
                                            }), W({
                                                behavior: "deny",
                                                message: w.message || "Permission denied by hook",
                                                decisionReason: {
                                                    type: "hook",
                                                    hookName: "PermissionRequest",
                                                    reason: w.message
                                                }
                                            }), w.interrupt) Z.abortController.abort("tool-rejection");
                                        return
                                    }
                                }
                            }
                        })();
                        return
                    }
                }
            }).catch((K) => {
                if (K instanceof YW) X(), F();
                else e(K)
            })
        })
    }, [A, Q])
}
var H89, bR3, C89;
var E89 = L(() => {
    aG();
    w0();
    nQ();
    $Z();
    u1();
    S0();
    bJA();
    M9();
    hK();
    MJ();
    AO();
    wi();
    H89 = GA(VA(), 1), bR3 = ["Edit", "Write", "NotebookEdit"];
    C89 = hR3
});

function U89(A) {
    return z89.useMemo(() => {
        let Q = We(A);
        return {
            level: Q.level,
            tokens: Q.tokens
        }
    }, [A])
}
var z89;
var $89 = L(() => {
    zU();
    z89 = GA(VA(), 1)
});

function $W0() {
    if (!EW0) EW0 = UA("perf_hooks").performance;
    return EW0
}

function N89() {
    if (!YjA) return;
    $W0().clearMarks(), UW0.clear(), zW0 = null, q89++, p7("query_user_input_received")
}

function p7(A) {
    if (!YjA) return;
    let Q = $W0();
    if (Q.mark(A), UW0.set(A, process.memoryUsage()), A === "query_first_chunk_received" && zW0 === null) {
        let B = Q.getEntriesByType("mark");
        if (B.length > 0) zW0 = B[B.length - 1]?.startTime ?? 0
    }
}

function L89() {
    if (!YjA) return;
    p7("query_profile_end")
}

function xXA(A) {
    return A.toFixed(3)
}

function w89(A) {
    return (A / 1024 / 1024).toFixed(2)
}

function gR3(A, Q) {
    if (Q === "query_user_input_received") return "";
    if (A > 1000) return " ⚠️  VERY SLOW";
    if (A > 100) return " ⚠️  SLOW";
    if (Q.includes("git_status") && A > 50) return " ⚠️  git status";
    if (Q.includes("tool_schema") && A > 50) return " ⚠️  tool schemas";
    if (Q.includes("client_creation") && A > 50) return " ⚠️  client creation";
    return ""
}

function uR3() {
    if (!YjA) return "Query profiling not enabled (set CLAUDE_CODE_PROFILE_QUERY=1)";
    let Q = $W0().getEntriesByType("mark");
    if (Q.length === 0) return "No query profiling checkpoints recorded";
    let B = [];
    B.push("=".repeat(80)), B.push(`QUERY PROFILING REPORT - Query #${q89}`), B.push("=".repeat(80)), B.push("");
    let G = Q[0]?.startTime ?? 0,
        Z = G,
        I = 0,
        Y = 0;
    for (let X of Q) {
        let F = X.startTime - G,
            V = xXA(F),
            K = X.startTime - Z,
            D = xXA(K),
            H = UW0.get(X.name),
            C = gR3(K, X.name),
            E = H ? ` | RSS: ${w89(H.rss)}MB, Heap: ${w89(H.heapUsed)}MB` : "";
        if (B.push(`[+${V.padStart(10)}ms] (+${D.padStart(9)}ms) ${X.name}${C}${E}`), X.name === "query_api_request_sent") I = F;
        if (X.name === "query_first_chunk_received") Y = F;
        Z = X.startTime
    }
    let J = Q[Q.length - 1],
        W = J ? J.startTime - G : 0;
    if (B.push(""), B.push("-".repeat(80)), Y > 0) {
        let X = I,
            F = Y - I,
            V = (X / Y * 100).toFixed(1),
            K = (F / Y * 100).toFixed(1);
        B.push(`Total TTFT: ${xXA(Y)}ms`), B.push(`  - Pre-request overhead: ${xXA(X)}ms (${V}%)`), B.push(`  - Network latency: ${xXA(F)}ms (${K}%)`)
    } else B.push(`Total time: ${xXA(W)}ms`);
    return B.push("=".repeat(80)), B.join(`
`)
}

function M89() {
    if (!YjA) return;
    g(uR3())
}
var YjA, UW0, q89 = 0,
    zW0 = null,
    EW0 = null;
var JjA = L(() => {
    D0();
    YjA = process.env.CLAUDE_CODE_PROFILE_QUERY === "1", UW0 = new Map
});

function mR3() {
    Nt1(""), c8(0)
}