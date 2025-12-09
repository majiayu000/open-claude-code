/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: agents_006.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   GA       (13次) = esmImport(module) - ESM import helper
 *   L        (11次) = lazyLoader(fn) - Lazy module loader
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 6/13
 * Lines: 415765 - 417264 (1500 lines)
 * Original file: cli.js
 */

    yield* Xa({
        hookInput: Z,
        toolUseID: AFA(),
        matchQuery: Q,
        signal: B,
        timeoutMs: G
    })
}
async function j00(A, Q, B = tq) {
    let G = {
            ...rE(void 0),
            hook_event_name: "PreCompact",
            trigger: A.trigger,
            custom_instructions: A.customInstructions
        },
        Z = await oX0({
            hookInput: G,
            matchQuery: A.trigger,
            signal: Q,
            timeoutMs: B
        });
    if (Z.length === 0) return {};
    let I = Z.filter((J) => J.succeeded && J.output.trim().length > 0).map((J) => J.output.trim()),
        Y = [];
    for (let J of Z)
        if (J.succeeded)
            if (J.output.trim()) Y.push(`PreCompact [${J.command}] completed successfully: ${J.output.trim()}`);
            else Y.push(`PreCompact [${J.command}] completed successfully`);
    else if (J.output.trim()) Y.push(`PreCompact [${J.command}] failed: ${J.output.trim()}`);
    else Y.push(`PreCompact [${J.command}] failed`);
    return {
        newCustomInstructions: I.length > 0 ? I.join(`

`) : void 0,
        userDisplayMessage: Y.length > 0 ? Y.join(`
`) : void 0
    }
}
async function tX0(A, Q) {
    let {
        getAppState: B,
        setAppState: G,
        signal: Z,
        timeoutMs: I = tq
    } = Q || {}, Y = {
        ...rE(void 0),
        hook_event_name: "SessionEnd",
        reason: A
    };
    if (await oX0({
            getAppState: B,
            hookInput: Y,
            matchQuery: A,
            signal: Z,
            timeoutMs: I
        }), G) {
        let J = G0();
        M21(G, J)
    }
}
async function* CW0(A, Q, B, G, Z, I, Y, J = tq) {
    g(`executePermissionRequestHooks called for tool: ${A}`);
    let W = {
        ...rE(Z),
        hook_event_name: "PermissionRequest",
        tool_name: A,
        tool_input: B,
        permission_suggestions: I
    };
    yield* Xa({
        hookInput: W,
        toolUseID: Q,
        matchQuery: A,
        signal: Y,
        timeoutMs: J,
        toolUseContext: G
    })
}
async function HJ0(A, Q, B = 5000) {
    let G = c0(),
        Z = G?.statusLine;
    if (G?.disableAllHooks === !0) return;
    if (!Z || Z.type !== "command") return;
    let I = Q || AbortSignal.timeout(B);
    try {
        let Y = JSON.stringify(A),
            J = await sX0(Z, "StatusLine", "statusLine", Y, I);
        if (J.aborted) return;
        if (J.status === 0) {
            let W = J.stdout.trim().split(`
`).flatMap((X) => X.trim() || []).join(`
`);
            if (W) return W
        }
        return
    } catch (Y) {
        g(`Status hook failed: ${Y}`, {
            level: "error"
        });
        return
    }
}
async function ej3({
    hook: A,
    messages: Q,
    hookName: B,
    toolUseID: G,
    hookEvent: Z,
    timeoutMs: I,
    signal: Y
}) {
    let J = A.timeout ?? I,
        {
            signal: W,
            cleanup: X
        } = yk(AbortSignal.timeout(J), Y);
    try {
        if (W.aborted) return X(), {
            outcome: "cancelled",
            hook: A
        };
        let F = await new Promise((V, K) => {
            let D = () => K(Error("Function hook cancelled"));
            W.addEventListener("abort", D), Promise.resolve(A.callback(Q, W)).then((H) => {
                W.removeEventListener("abort", D), V(H)
            }).catch((H) => {
                W.removeEventListener("abort", D), K(H)
            })
        });
        if (X(), F) return {
            outcome: "success",
            hook: A
        };
        return {
            blockingError: {
                blockingError: A.errorMessage,
                command: "function"
            },
            outcome: "blocking",
            hook: A
        }
    } catch (F) {
        if (X(), F instanceof Error && (F.message === "Function hook cancelled" || F.name === "AbortError")) return {
            outcome: "cancelled",
            hook: A
        };
        return e(F instanceof Error ? F : Error(String(F))), {
            message: p9({
                type: "hook_error_during_execution",
                hookName: B,
                toolUseID: G,
                hookEvent: Z,
                content: F instanceof Error ? F.message : "Function hook execution error"
            }),
            outcome: "non_blocking_error",
            hook: A
        }
    }
}
async function AS3({
    toolUseID: A,
    hook: Q,
    hookEvent: B,
    hookInput: G,
    signal: Z,
    hookIndex: I
}) {
    let Y = await Q.callback(G, A, Z, I);
    if (BYA(Y)) return {
        outcome: "success",
        hook: Q
    };
    return {
        ...iJ9({
            json: Y,
            command: "callback",
            hookName: `${B}:Callback`,
            toolUseID: A,
            hookEvent: B,
            expectedHookEvent: B,
            stdout: void 0,
            stderr: void 0,
            exitCode: void 0
        }),
        outcome: "success",
        hook: Q
    }
}
var tq = 60000;
var AO = L(() => {
    Ad1();
    R2();
    Qd1();
    m$A();
    S0();
    jQ();
    AYA();
    GG();
    RB();
    w0();
    a10();
    J9();
    kk();
    D0();
    u1();
    j21();
    s10();
    eM();
    wi();
    uJ9();
    cJ9();
    eIA()
});

function QS3() {
    try {
        if (process.stdin.isTTY && typeof process.stdin.setRawMode === "function") process.stdin.setRawMode(!1), process.stdin.unref()
    } catch {}
}

function c8(A = 0, Q = "other", B) {
    process.exitCode = A, S6(A, Q, B).catch((G) => {
        g(`Graceful shutdown failed: ${G}`, {
            level: "error"
        }), process.exit(A)
    })
}
async function S6(A = 0, Q = "other", B) {
    process.exitCode = A, QS3();
    try {
        let {
            executeSessionEndHooks: G
        } = await Promise.resolve().then(() => (AO(), nJ9));
        await G(Q, B)
    } catch {}
    try {
        let G = (async () => {
            try {
                await hE0()
            } catch {}
        })();
        await Promise.race([G, new Promise((Z, I) => setTimeout(() => I(Error("Cleanup timeout")), 2000))]), await sm1(), process.exit(A)
    } catch {
        await sm1(), process.exit(A)
    }
}
var aJ9;
var _J = L(() => {
    o2();
    D0();
    XH();
    _$A();
    aJ9 = t1(() => {
        process.on("SIGINT", () => {
            S6(0)
        }), process.on("SIGTERM", () => {
            S6(143)
        })
    })
});

function DQ(A) {
    let [Q, B] = sJ9.useState({
        pending: !1,
        keyName: null
    }), G = ab((I) => B({
        pending: I,
        keyName: "Ctrl-C"
    }), A ? A : async () => {
        await S6(0)
    }), Z = ab((I) => B({
        pending: I,
        keyName: "Ctrl-D"
    }), A ? A : async () => {
        await S6(0)
    });
    return h1((I, Y) => {
        if (Y.ctrl && I === "c") G();
        if (Y.ctrl && I === "d") Z()
    }), Q
}
var sJ9;
var c9 = L(() => {
    hA();
    AsA();
    _J();
    sJ9 = GA(VA(), 1)
});

function rJ9() {
    return b4.createElement($, {
        dimColor: !0
    }, "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on.")
}

function GS3({
    path: A
}) {
    return b4.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        gap: 1
    }, b4.createElement($, {
        color: "permission"
    }, A), b4.createElement(rJ9, null))
}

function ZS3({
    value: A,
    onChange: Q,
    onSubmit: B,
    error: G
}) {
    return b4.createElement(j, {
        flexDirection: "column"
    }, b4.createElement($, null, "Enter the path to the directory:"), b4.createElement(j, {
        borderDimColor: !0,
        borderStyle: "round",
        marginY: 1,
        paddingLeft: 1
    }, b4.createElement(s4, {
        showCursor: !0,
        placeholder: `Directory path${V1.ellipsis}`,
        value: A,
        onChange: Q,
        onSubmit: B,
        columns: 80,
        cursorOffset: A.length,
        onChangeCursorOffset: () => {}
    })), G && b4.createElement($, {
        color: "error"
    }, G))
}

function eI1({
    onAddDirectory: A,
    onCancel: Q,
    permissionContext: B,
    directoryPath: G
}) {
    let [Z, I] = kg.useState(""), [Y, J] = kg.useState(null), W = DQ(), X = kg.useMemo(() => BS3, []);
    h1(kg.useCallback((K, D) => {
        if (D.escape || D.ctrl && K === "c") Q()
    }, [Q]));
    let F = kg.useCallback((K) => {
            let D = gjA(K, B);
            if (D.resultType === "success") A(D.absolutePath, !1);
            else J(ujA(D))
        }, [B, A]),
        V = kg.useCallback((K) => {
            if (!G) return;
            switch (K) {
                case "yes-session":
                    A(G, !1);
                    break;
                case "yes-remember":
                    A(G, !0);
                    break;
                case "no":
                    Q();
                    break
            }
        }, [G, A, Q]);
    return b4.createElement(b4.Fragment, null, b4.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        gap: 1,
        borderColor: "permission"
    }, b4.createElement($, {
        bold: !0,
        color: "permission"
    }, "Add directory to workspace"), G ? b4.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, b4.createElement(GS3, {
        path: G
    }), b4.createElement(M0, {
        options: X,
        onChange: V,
        onCancel: () => V("no")
    })) : b4.createElement(j, {
        flexDirection: "column",
        gap: 1,
        marginX: 2
    }, b4.createElement(rJ9, null), b4.createElement(ZS3, {
        value: Z,
        onChange: I,
        onSubmit: F,
        error: Y
    }))), !G && b4.createElement(j, {
        marginLeft: 3
    }, W.pending ? b4.createElement($, {
        dimColor: !0
    }, "Press ", W.keyName, " again to exit") : b4.createElement($, {
        dimColor: !0
    }, "Enter to add · Esc to cancel")))
}
var b4, kg, BS3;
var eX0 = L(() => {
    hA();
    c9();
    QY();
    sI1();
    n2();
    T5();
    b4 = GA(VA(), 1), kg = GA(VA(), 1), BS3 = [{
        value: "yes-session",
        label: "Yes, for this session"
    }, {
        value: "yes-remember",
        label: "Yes, and remember this directory"
    }, {
        value: "no",
        label: "No"
    }]
});

function oJ9({
    onCancel: A,
    onSubmit: Q,
    ruleBehavior: B
}) {
    let [G, Z] = AF0.useState(""), [I, Y] = AF0.useState(0), J = DQ();
    h1((V, K) => {
        if (K.escape) A()
    });
    let {
        columns: W
    } = YB(), X = W - 6, F = (V) => {
        let K = V.trim();
        if (K.length === 0) return;
        let D = mN(K);
        Q(D, B)
    };
    return Y7.createElement(Y7.Fragment, null, Y7.createElement(j, {
        flexDirection: "column",
        gap: 1,
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "permission"
    }, Y7.createElement($, {
        bold: !0,
        color: "permission"
    }, "Add ", B, " permission rule"), Y7.createElement(j, {
        flexDirection: "column"
    }, Y7.createElement($, null, "Permission rules are a tool name, optionally followed by a specifier in parentheses.", Y7.createElement(gV, null), "e.g.,", " ", Y7.createElement($, {
        bold: !0
    }, r5({
        toolName: cF.name
    })), Y7.createElement($, {
        bold: !1
    }, " or "), Y7.createElement($, {
        bold: !0
    }, r5({
        toolName: X9.name,
        ruleContent: "ls:*"
    }))), Y7.createElement(j, {
        borderDimColor: !0,
        borderStyle: "round",
        marginY: 1,
        paddingLeft: 1
    }, Y7.createElement(s4, {
        showCursor: !0,
        value: G,
        onChange: Z,
        onSubmit: F,
        placeholder: `Enter permission rule${V1.ellipsis}`,
        columns: X,
        cursorOffset: I,
        onChangeCursorOffset: Y
    })))), Y7.createElement(j, {
        marginLeft: 3
    }, J.pending ? Y7.createElement($, {
        dimColor: !0
    }, "Press ", J.keyName, " again to exit") : Y7.createElement($, {
        dimColor: !0
    }, "Enter to submit · Esc to cancel")))
}
var Y7, AF0;
var tJ9 = L(() => {
    hA();
    c9();
    aG();
    m8();
    hWA();
    nV();
    QY();
    n2();
    Y7 = GA(VA(), 1), AF0 = GA(VA(), 1)
});

function AW9({
    onExit: A,
    getToolPermissionContext: Q,
    onRequestAddDirectory: B,
    onRequestRemoveDirectory: G
}) {
    let Z = Q(),
        I = R$.useMemo(() => {
            return Array.from(Z.additionalWorkingDirectories.keys()).map((W) => ({
                path: W,
                isCurrent: !1,
                isDeletable: !0
            }))
        }, [Z.additionalWorkingDirectories]),
        Y = eJ9.useCallback((W) => {
            if (W === "add-directory") {
                B();
                return
            }
            let X = I.find((F) => F.path === W);
            if (X && X.isDeletable) G(X.path)
        }, [I, B, G]),
        J = R$.useMemo(() => {
            let W = I.map((X) => ({
                label: X.path,
                value: X.path
            }));
            return W.push({
                label: `Add directory${V1.ellipsis}`,
                value: "add-directory"
            }), W
        }, [I]);
    return R$.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, R$.createElement(j, {
        flexDirection: "row",
        marginTop: 1,
        marginLeft: 2,
        gap: 1
    }, R$.createElement($, null, `-  ${pQ()}`), R$.createElement($, {
        dimColor: !0
    }, "(Original working directory)")), R$.createElement(M0, {
        options: J,
        onChange: Y,
        onCancel: () => A("Workspace dialog dismissed", {
            display: "system"
        }),
        visibleOptionCount: Math.min(10, J.length)
    }))
}
var R$, eJ9;
var QW9 = L(() => {
    hA();
    T5();
    n2();
    S0();
    R$ = GA(VA(), 1), eJ9 = GA(VA(), 1)
});

function BW9({
    directoryPath: A,
    onRemove: Q,
    onCancel: B,
    permissionContext: G,
    setPermissionContext: Z
}) {
    let I = DQ();
    h1((W, X) => {
        if (X.escape) B()
    });
    let Y = QF0.useCallback(() => {
            let W = $V(G, {
                type: "removeDirectories",
                directories: [A],
                destination: "session"
            });
            Z(W), Q()
        }, [A, G, Z, Q]),
        J = QF0.useCallback((W) => {
            if (W === "yes") Y();
            else B()
        }, [Y, B]);
    return cZ.createElement(cZ.Fragment, null, cZ.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "error"
    }, cZ.createElement($, {
        bold: !0,
        color: "error"
    }, "Remove directory from workspace?"), cZ.createElement(j, {
        marginY: 1,
        marginX: 2,
        flexDirection: "column"
    }, cZ.createElement($, {
        bold: !0
    }, A)), cZ.createElement($, null, "Claude Code will no longer have access to files in this directory."), cZ.createElement(j, {
        marginY: 1
    }, cZ.createElement(M0, {
        onChange: J,
        onCancel: B,
        options: [{
            label: "Yes",
            value: "yes"
        }, {
            label: "No",
            value: "no"
        }]
    }))), cZ.createElement(j, {
        marginLeft: 3
    }, I.pending ? cZ.createElement($, {
        dimColor: !0
    }, "Press ", I.keyName, " again to exit") : cZ.createElement($, {
        dimColor: !0
    }, "↑/↓ to select · Enter to confirm · Esc to cancel")))
}
var cZ, QF0;
var GW9 = L(() => {
    hA();
    c9();
    T5();
    hK();
    cZ = GA(VA(), 1), QF0 = GA(VA(), 1)
});

function Fa({
    title: A,
    color: Q,
    defaultTab: B,
    children: G,
    hidden: Z
}) {
    let I = G.map((X) => [X.props.id ?? X.props.title, X.props.title]),
        Y = B ? I.findIndex((X) => B === X[0]) : 0,
        [J, W] = T$.useState(Y !== -1 ? Y : 0);
    return h1((X, F) => {
        if (F.tab) {
            let V = F.shift ? -1 : 1;
            W((J + I.length + V) % I.length)
        }
    }, {
        isActive: !Z
    }), T$.default.createElement(ZW9.Provider, {
        value: I[J][0]
    }, T$.default.createElement(j, {
        flexDirection: "column"
    }, !Z && T$.default.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, A !== void 0 && T$.default.createElement($, {
        bold: !0,
        color: Q
    }, A), I.map(([X, F], V) => T$.default.createElement($, {
        key: X,
        backgroundColor: Q && J === V ? Q : void 0,
        color: Q && J === V ? "inverseText" : void 0,
        bold: J === V
    }, " ", F, " ")), T$.default.createElement($, {
        dimColor: !0
    }, " (tab to cycle)")), T$.default.createElement(j, null, G)))
}

function nD({
    title: A,
    id: Q,
    children: B
}) {
    if (T$.useContext(ZW9) !== (Q ?? A)) return null;
    return B
}
var T$, ZW9;
var cjA = L(() => {
    hA();
    T$ = GA(VA(), 1), ZW9 = T$.createContext(void 0)
});

function IS3({
    rule: A
}) {
    return zQ.createElement($, {
        dimColor: !0
    }, `From ${GF0(A.source)}`)
}

function YS3(A) {
    switch (A) {
        case "allow":
            return "allowed";
        case "deny":
            return "denied";
        case "ask":
            return "ask"
    }
}

function JS3({
    rule: A,
    onDelete: Q,
    onCancel: B
}) {
    let G = DQ();
    h1((Y, J) => {
        if (J.escape) B()
    });
    let Z = zQ.createElement(j, {
            flexDirection: "column",
            marginX: 2
        }, zQ.createElement($, {
            bold: !0
        }, r5(A.ruleValue)), zQ.createElement(w21, {
            ruleValue: A.ruleValue
        }), zQ.createElement(IS3, {
            rule: A
        })),
        I = zQ.createElement(j, {
            marginLeft: 3
        }, G.pending ? zQ.createElement($, {
            dimColor: !0
        }, "Press ", G.keyName, " again to exit") : zQ.createElement($, {
            dimColor: !0
        }, "Esc to cancel"));
    if (A.source === "policySettings") return zQ.createElement(zQ.Fragment, null, zQ.createElement(j, {
        flexDirection: "column",
        gap: 1,
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "permission"
    }, zQ.createElement($, {
        bold: !0,
        color: "permission"
    }, "Rule details"), Z, zQ.createElement($, {
        italic: !0
    }, "This rule is configured by managed settings and cannot be modified.", `
`, "Contact your system administrator for more information.")), I);
    return zQ.createElement(zQ.Fragment, null, zQ.createElement(j, {
        flexDirection: "column",
        gap: 1,
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "error"
    }, zQ.createElement($, {
        bold: !0,
        color: "error"
    }, "Delete ", YS3(A.ruleBehavior), " tool?"), Z, zQ.createElement($, null, "Are you sure you want to delete this permission rule?"), zQ.createElement(M0, {
        onChange: (Y) => Y === "yes" ? Q() : B(),
        onCancel: B,
        options: [{
            label: "Yes",
            value: "yes"
        }, {
            label: "No",
            value: "no"
        }]
    })), I)
}

function AY1({
    onExit: A,
    initialTab: Q = "allow"
}) {
    let [B, G] = $K.useState([]), [{
        toolPermissionContext: Z
    }, I] = _Q(), [Y, J] = $K.useState(), [W, X] = $K.useState(null), [F, V] = $K.useState(null), [K, D] = $K.useState(!1), [H, C] = $K.useState(null), E = $K.useMemo(() => {
        let k = new Map;
        return QFA(Z).forEach((d) => {
            k.set(JSON.stringify(d), d)
        }), k
    }, [Z]), z = $K.useMemo(() => {
        let k = new Map;
        return tXA(Z).forEach((d) => {
            k.set(JSON.stringify(d), d)
        }), k
    }, [Z]), w = $K.useMemo(() => {
        let k = new Map;
        return QY1(Z).forEach((d) => {
            k.set(JSON.stringify(d), d)
        }), k
    }, [Z]), N = $K.useCallback((k) => {
        let d = (() => {
                switch (k) {
                    case "allow":
                        return E;
                    case "deny":
                        return z;
                    case "ask":
                        return w;
                    case "workspace":
                        return new Map
                }
            })(),
            QA = [];
        if (k !== "workspace") QA.push({
            label: `Add a new rule${V1.ellipsis}`,
            value: "add-new-rule"
        });
        let IA = Array.from(d.keys()).sort((HA, wA) => {
            let KA = d.get(HA),
                SA = d.get(wA);
            if (KA && SA) {
                let sA = r5(KA.ruleValue).toLowerCase(),
                    NA = r5(SA.ruleValue).toLowerCase();
                return sA.localeCompare(NA)
            }
            return 0
        });
        for (let HA of IA) {
            let wA = d.get(HA);
            if (wA) QA.push({
                label: r5(wA.ruleValue),
                value: HA
            })
        }
        return {
            options: QA,
            rulesByKey: d
        }
    }, [E, z, w]), q = DQ(), R = $K.useCallback((k, d) => {
        let {
            rulesByKey: QA
        } = N(d);
        if (k === "add-new-rule") {
            X(d);
            return
        } else {
            J(QA.get(k));
            return
        }
    }, [N]), P = $K.useCallback(() => {
        X(null)
    }, []), y = $K.useCallback((k, d) => {
        V({
            ruleValue: k,
            ruleBehavior: d
        }), X(null)
    }, []), v = $K.useCallback((k) => {
        V(null);
        for (let d of k) G((QA) => [...QA, `Added ${d.ruleBehavior} rule ${oA.bold(r5(d.ruleValue))}`])
    }, []), x = $K.useCallback(() => {
        V(null)
    }, []), p = () => {
        if (!Y) return;
        IW9({
            rule: Y,
            initialContext: Z,
            setToolPermissionContext(k) {
                I((d) => ({
                    ...d,
                    toolPermissionContext: k
                }))
            }
        }), G((k) => [...k, `Deleted ${Y.ruleBehavior} rule ${oA.bold(r5(Y.ruleValue))}`]), J(void 0)
    };
    if (Y) return zQ.createElement(JS3, {
        rule: Y,
        onDelete: p,
        onCancel: () => J(void 0)
    });
    if (W && W !== "workspace") return zQ.createElement(oJ9, {
        onCancel: P,
        onSubmit: y,
        ruleBehavior: W
    });
    if (F) return zQ.createElement(PG2, {
        onAddRules: v,
        onCancel: x,
        ruleValues: [F.ruleValue],
        ruleBehavior: F.ruleBehavior,
        initialContext: Z,
        setToolPermissionContext: (k) => {
            I((d) => ({
                ...d,
                toolPermissionContext: k
            }))
        }
    });
    if (K) return zQ.createElement(eI1, {
        onAddDirectory: (k, d) => {
            let IA = {
                    type: "addDirectories",
                    directories: [k],
                    destination: d ? "localSettings" : "session"
                },
                HA = $V(Z, IA);
            if (I((wA) => ({
                    ...wA,
                    toolPermissionContext: HA
                })), d) Yv(IA);
            G((wA) => [...wA, `Added directory ${oA.bold(k)} to workspace${d?" and saved to local settings":" for this session"}`]), D(!1)
        },
        onCancel: () => D(!1),
        permissionContext: Z
    });
    if (H) return zQ.createElement(BW9, {
        directoryPath: H,
        onRemove: () => {
            G((k) => [...k, `Removed directory ${oA.bold(H)} from workspace`]), C(null)
        },
        onCancel: () => C(null),
        permissionContext: Z,
        setPermissionContext: (k) => {
            I((d) => ({
                ...d,
                toolPermissionContext: k
            }))
        }
    });

    function u(k) {
        switch (k) {
            case "allow":
                return "Claude Code won't ask before using allowed tools.";
            case "deny":
                return "Claude Code will always reject requests to use denied tools.";
            case "ask":
                return "Claude Code will always ask for confirmation before using these tools.";
            case "workspace":
                return "Claude Code can read files in the workspace, and make edits when auto-accept edits is on."
        }
    }

    function o(k) {
        if (k === "workspace") return zQ.createElement(AW9, {
            onExit: A,
            getToolPermissionContext: () => Z,
            onRequestAddDirectory: () => D(!0),
            onRequestRemoveDirectory: (QA) => C(QA)
        });
        let {
            options: d
        } = N(k);
        return zQ.createElement(j, {
            marginY: 1
        }, zQ.createElement(M0, {
            options: d,
            onChange: (QA) => R(QA, k),
            onCancel: () => {
                if (B.length > 0) A(B.join(`
`));
                else A("Permissions dialog dismissed", {
                    display: "system"
                })
            },
            visibleOptionCount: Math.min(10, d.length)
        }))
    }
    return zQ.createElement(j, {
        flexDirection: "column"
    }, zQ.createElement(J3, {
        dividerColor: "permission"
    }), zQ.createElement(j, {
        paddingX: 1,
        flexDirection: "column"
    }, zQ.createElement(Fa, {
        title: "Permissions:",
        color: "permission",
        defaultTab: Q,
        hidden: !!Y || !!W || !!F || K || !!H
    }, zQ.createElement(nD, {
        id: "allow",
        title: "Allow"
    }, zQ.createElement(j, {
        flexDirection: "column"
    }, zQ.createElement($, null, u("allow")), o("allow"))), zQ.createElement(nD, {
        id: "ask",
        title: "Ask"
    }, zQ.createElement(j, {
        flexDirection: "column"
    }, zQ.createElement($, null, u("ask")), o("ask"))), zQ.createElement(nD, {
        id: "deny",
        title: "Deny"
    }, zQ.createElement(j, {
        flexDirection: "column"
    }, zQ.createElement($, null, u("deny")), o("deny"))), zQ.createElement(nD, {
        id: "workspace",
        title: "Workspace"
    }, zQ.createElement(j, {
        flexDirection: "column"
    }, zQ.createElement($, null, u("workspace")), o("workspace")))), zQ.createElement(j, {
        marginTop: 1
    }, zQ.createElement($, {
        dimColor: !0
    }, q.pending ? zQ.createElement(zQ.Fragment, null, "Press ", q.keyName, " again to exit") : zQ.createElement(zQ.Fragment, null, "Press ↑↓ to navigate · Enter to select · Esc to exit")))))
}
var zQ, $K;
var BF0 = L(() => {
    hA();
    T5();
    c9();
    aG();
    n2();
    m10();
    q21();
    tJ9();
    J9();
    QW9();
    eX0();
    GW9();
    hK();
    H9();
    cjA();
    eV();
    zQ = GA(VA(), 1), $K = GA(VA(), 1)
});
import {
    dirname as WS3
} from "path";

function XS3({
    message: A,
    args: Q,
    onDone: B
}) {
    return Yx.useEffect(() => {
        let G = setTimeout(B, 0);
        return () => clearTimeout(G)
    }, [B]), Yx.default.createElement(j, {
        flexDirection: "column"
    }, Yx.default.createElement($, {
        dimColor: !0
    }, "> /add-dir ", Q), Yx.default.createElement(y0, null, Yx.default.createElement($, null, A)))
}

function gjA(A, Q) {
    if (!A) return {
        resultType: "emptyPath"
    };
    let B = b9(A),
        G = OA();
    if (!G.existsSync(B)) return {
        resultType: "pathNotFound",
        directoryPath: A,
        absolutePath: B
    };
    if (!G.statSync(B).isDirectory()) return {
        resultType: "notADirectory",
        directoryPath: A,
        absolutePath: B
    };
    let Z = RIA(Q);
    for (let I of Z)
        if (bk(B, I)) return {
            resultType: "alreadyInWorkingDirectory",
            directoryPath: A,
            workingDir: I
        };
    return {
        resultType: "success",
        absolutePath: B
    }
}

function ujA(A) {
    switch (A.resultType) {
        case "emptyPath":
            return "Please provide a directory path.";
        case "pathNotFound":
            return `Path ${oA.bold(A.absolutePath)} was not found.`;
        case "notADirectory": {
            let Q = WS3(A.absolutePath);
            return `${oA.bold(A.directoryPath)} is not a directory. Did you mean to add the parent directory ${oA.bold(Q)}?`
        }
        case "alreadyInWorkingDirectory":
            return `${oA.bold(A.directoryPath)} is already accessible within the existing working directory ${oA.bold(A.workingDir)}.`;
        case "success":
            return `Added ${oA.bold(A.absolutePath)} as a working directory.`
    }
}
var Yx, FS3, YW9;
var sI1 = L(() => {
    J9();
    hA();
    _Y();
    o0();
    jI();
    eX0();
    u8();
    BF0();
    hK();
    Yx = GA(VA(), 1);
    FS3 = {
        type: "local-jsx",
        name: "add-dir",
        description: "Add a new working directory",
        argumentHint: "<path>",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q, B) {
            let G = B.trim();
            if (!G) return Yx.default.createElement(AY1, {
                onExit: A,
                initialTab: "workspace"
            });
            let Z = await Q.getAppState(),
                I = gjA(G, Z.toolPermissionContext);
            if (I.resultType !== "success") {
                let Y = ujA(I);
                return Yx.default.createElement(XS3, {
                    message: Y,
                    args: B,
                    onDone: () => A(Y)
                })
            }
            return Yx.default.createElement(eI1, {
                directoryPath: I.absolutePath,
                permissionContext: Z.toolPermissionContext,
                onAddDirectory: async (Y, J) => {
                    let X = {
                            type: "addDirectories",
                            directories: [Y],
                            destination: J ? "localSettings" : "session"
                        },
                        F = await Q.getAppState(),
                        V = $V(F.toolPermissionContext, X);
                    Q.setAppState((H) => ({
                        ...H,
                        toolPermissionContext: V
                    }));
                    let K;
                    if (J) try {
                        Yv(X), K = `Added ${oA.bold(Y)} as a working directory and saved to local settings`
                    } catch (H) {
                        K = `Added ${oA.bold(Y)} as a working directory. Failed to save to local settings: ${H instanceof Error?H.message:"Unknown error"}`
                    } else K = `Added ${oA.bold(Y)} as a working directory for this session`;
                    let D = `${K} ${oA.dim("· /permissions to manage")}`;
                    A(D)
                },
                onCancel: () => {
                    A(`Did not add ${oA.bold(I.absolutePath)} as a working directory.`)
                }
            })
        },
        userFacingName() {
            return "add-dir"
        }
    }, YW9 = FS3
});

function jQA(A) {
    let Q = A;
    return Q = Q.replace(/"(sk-ant[^\s"']{24,})"/g, '"[REDACTED_API_KEY]"'), Q = Q.replace(/(?<![A-Za-z0-9"'])(sk-ant-?[A-Za-z0-9_-]{10,})(?![A-Za-z0-9"'])/g, "[REDACTED_API_KEY]"), Q = Q.replace(/AWS key: "(AWS[A-Z0-9]{20,})"/g, 'AWS key: "[REDACTED_AWS_KEY]"'), Q = Q.replace(/(AKIA[A-Z0-9]{16})/g, "[REDACTED_AWS_KEY]"), Q = Q.replace(/(?<![A-Za-z0-9])(AIza[A-Za-z0-9_-]{35})(?![A-Za-z0-9])/g, "[REDACTED_GCP_KEY]"), Q = Q.replace(/(?<![A-Za-z0-9])([a-z0-9-]+@[a-z0-9-]+\.iam\.gserviceaccount\.com)(?![A-Za-z0-9])/g, "[REDACTED_GCP_SERVICE_ACCOUNT]"), Q = Q.replace(/(["']?x-api-key["']?\s*[:=]\s*["']?)[^"',\s)}\]]+/gi, "$1[REDACTED_API_KEY]"), Q = Q.replace(/(["']?authorization["']?\s*[:=]\s*["']?(bearer\s+)?)[^"',\s)}\]]+/gi, "$1[REDACTED_TOKEN]"), Q = Q.replace(/(AWS[_-][A-Za-z0-9_]+\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED_AWS_VALUE]"), Q = Q.replace(/(GOOGLE[_-][A-Za-z0-9_]+\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED_GCP_VALUE]"), Q = Q.replace(/((API[-_]?KEY|TOKEN|SECRET|PASSWORD)\s*[=:]\s*)["']?[^"',\s)}\]]+["']?/gi, "$1[REDACTED]"), Q
}

function KS3(A) {
    let Q = [];
    for (let B of A) {
        if (B.type !== "user") continue;
        let G = B.message.content;
        if (!Array.isArray(G)) continue;
        for (let Z of G) {
            if (Z.type !== "tool_result") continue;
            let I = Z.content;
            if (typeof I === "string") try {
                let Y = JSON.parse(I);
                if (Y && typeof Y.agentId === "string") Q.push(Y.agentId)
            } catch {} else if (Array.isArray(I)) {
                for (let Y of I)
                    if (Y.type === "text" && typeof Y.text === "string") try {
                        let J = JSON.parse(Y.text);
                        if (J && typeof J.agentId === "string") Q.push(J.agentId)
                    } catch {}
            }
        }
    }
    return [...new Set(Q)]
}
async function DS3(A) {
    let Q = await Promise.all(A.map(async (G) => {
            try {
                let Z = await cI1(G);
                if (Z && Z.length > 0) return {
                    agentId: G,
                    transcript: Z
                };
                return null
            } catch {
                return null
            }
        })),
        B = {};
    for (let G of Q)
        if (G) B[G.agentId] = G.transcript;
    return B
}

function WW9() {
    return BFA().map((A) => {
        let Q = {
            ...A
        };
        if (Q && typeof Q.error === "string") Q.error = jQA(Q.error);
        return Q
    })
}

function FW9({
    abortSignal: A,
    messages: Q,
    initialDescription: B,
    onDone: G
}) {
    let [Z, I] = _O.useState("userInput"), [Y, J] = _O.useState(0), [W, X] = _O.useState(B ?? ""), [F, V] = _O.useState(null), [K, D] = _O.useState(null), [H, C] = _O.useState({
        isGit: !1,
        gitState: null
    }), [E, z] = _O.useState(null), w = YB().columns - 4;
    _O.useEffect(() => {
        async function R() {
            let P = await FT(),
                y = null;
            if (P) y = await zf1();
            C({
                isGit: P,
                gitState: y
            })
        }
        R()
    }, []);
    let N = DQ(),
        q = _O.useCallback(async () => {
            I("submitting"), D(null), V(null);
            let R = WW9(),
                y = mXA(Q)?.requestId ?? null,
                v = KS3(Q),
                x = await DS3(v),
                p = {
                    latestAssistantMessageId: y,
                    message_count: Q.length,
                    datetime: new Date().toISOString(),
                    description: W,
                    platform: m0.platform,
                    gitRepo: H.isGit,
                    terminal: m0.terminal,
                    version: {
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://docs.claude.com/s/claude-code",
                        VERSION: "2.0.57",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                    }.VERSION,
                    transcript: BZ(Q),
                    errors: R,
                    lastApiRequest: GkA(),
                    ...Object.keys(x).length > 0 && {
                        subagentTranscripts: x
                    }
                },
                [u, o] = await Promise.all([ES3(p), CS3(W, A)]);
            if (z(o), u.success) {
                if (u.feedbackId) V(u.feedbackId), BA("tengu_bug_report_submitted", {
                    feedback_id: u.feedbackId,
                    last_assistant_message_id: y
                });
                I("done")
            } else {
                if (u.isZdrOrg) D("Feedback collection is not available for organizations with custom data retention policies.");
                else D("Could not submit feedback. Please try again later.");
                I("done")
            }
        }, [W, H.isGit, Q]);
    return h1((R, P) => {
        if (Z === "done") {
            if (P.return && E) {
                let y = HS3(F ?? "", E, W, WW9());
                gZ(y)
            }
            if (K) G("Error submitting feedback / bug report", {
                display: "system"
            });
            else G("Feedback / bug report submitted", {
                display: "system"
            });
            return
        }
        if (K) {
            G("Error submitting feedback / bug report", {
                display: "system"
            });
            return
        }
        if (P.escape) {
            G("Feedback / bug report cancelled", {
                display: "system"
            });
            return
        }
        if (Z === "consent" && (P.return || R === " ")) q()
    }), mQ.createElement(mQ.Fragment, null, mQ.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "permission",
        paddingX: 1,
        paddingBottom: 1,
        gap: 1
    }, mQ.createElement($, {
        bold: !0,
        color: "permission"
    }, "Submit Feedback / Bug Report"), Z === "userInput" && mQ.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, mQ.createElement($, null, "Describe the issue below:"), mQ.createElement(s4, {
        value: W,
        onChange: X,
        columns: w,
        onSubmit: () => I("consent"),
        onExitMessage: () => G("Feedback cancelled", {
            display: "system"
        }),
        cursorOffset: Y,
        onChangeCursorOffset: J
    }), K && mQ.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, mQ.createElement($, {
        color: "error"
    }, K), mQ.createElement($, {
        dimColor: !0
    }, "Press any key to close"))), Z === "consent" && mQ.createElement(j, {
        flexDirection: "column"
    }, mQ.createElement($, null, "This report will include:"), mQ.createElement(j, {
        marginLeft: 2,
        flexDirection: "column"
    }, mQ.createElement($, null, "- Your feedback / bug description:", " ", mQ.createElement($, {
        dimColor: !0
    }, W)), mQ.createElement($, null, "- Environment info:", " ", mQ.createElement($, {
        dimColor: !0
    }, m0.platform, ", ", m0.terminal, ", v", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION)), H.gitState && mQ.createElement($, null, "- Git repo metadata:", " ", mQ.createElement($, {
        dimColor: !0
    }, H.gitState.branchName, H.gitState.commitHash ? `, ${H.gitState.commitHash.slice(0,7)}` : "", H.gitState.remoteUrl ? ` @ ${H.gitState.remoteUrl}` : "", !H.gitState.isHeadOnRemote && ", not synced", !H.gitState.isClean && ", has local changes")), mQ.createElement($, null, "- Current session transcript")), mQ.createElement(j, {
        marginTop: 1
    }, mQ.createElement($, {
        wrap: "wrap",
        dimColor: !0
    }, "We will use your feedback to debug related issues or to improve", " ", "Claude Code's functionality (eg. to reduce the risk of bugs occurring in the future).")), mQ.createElement(j, {
        marginTop: 1
    }, mQ.createElement($, null, "Press ", mQ.createElement($, {
        bold: !0
    }, "Enter"), " to confirm and submit."))), Z === "submitting" && mQ.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, mQ.createElement($, null, "Submitting report…")), Z === "done" && mQ.createElement(j, {
        flexDirection: "column"
    }, K ? mQ.createElement($, {
        color: "error"
    }, K) : mQ.createElement($, {
        color: "success"
    }, "Thank you for your report!"), F && mQ.createElement($, {
        dimColor: !0
    }, "Feedback ID: ", F), mQ.createElement(j, {
        marginTop: 1
    }, mQ.createElement($, null, "Press "), mQ.createElement($, {
        bold: !0
    }, "Enter "), mQ.createElement($, null, "to open your browser and draft a GitHub issue, or any other key to close.")))), mQ.createElement(j, {
        marginLeft: 1
    }, mQ.createElement($, {
        dimColor: !0
    }, N.pending ? mQ.createElement(mQ.Fragment, null, "Press ", N.keyName, " again to exit") : Z === "userInput" ? mQ.createElement(mQ.Fragment, null, "Enter to continue · Esc to cancel") : Z === "consent" ? mQ.createElement(mQ.Fragment, null, "Enter to submit · Esc to cancel") : null)))
}

function HS3(A, Q, B, G) {
    let Z = jQA(Q),
        I = jQA(B),
        Y = encodeURIComponent(`**Bug Description**
${I}

**Environment Info**
- Platform: ${m0.platform}
- Terminal: ${m0.terminal}
- Version: ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION||"unknown"}
- Feedback ID: ${A}

**Errors**
\`\`\`json
`),
        J = encodeURIComponent("\n```\n"),
        W = encodeURIComponent(`
**Note:** Error logs were truncated.
`),
        X = JSON.stringify(G),
        F = encodeURIComponent(X),
        V = `${JW9}/new?title=${encodeURIComponent(Z)}&labels=user-reported,bug&body=`,
        K = VS3 - V.length - Y.length - J.length - W.length,
        D = "";
    if (F.length <= K) D = Y + F + J;
    else {
        let H = F.substring(0, K);
        D = Y + H + J + W
    }
    return `${JW9}/new?title=${encodeURIComponent(Z)}&body=${D}&labels=user-reported,bug`
}
async function CS3(A, Q) {
    try {
        let B = await gX({
                systemPrompt: ["Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.", "Claude Code is an agentic coding CLI based on the Anthropic API.", "The title should:", "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title", "- Be concise, specific and descriptive of the actual problem", "- Use technical terminology appropriate for a software issue", '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)', "- Be direct and clear for developers to understand the problem", '- If you cannot determine a clear issue, use "Bug Report: [brief description]"', "- Any LLM API errors are from the Anthropic API, not from any other model provider", "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination", 'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"'],
                userPrompt: A,
                signal: Q,
                options: {
                    hasAppendSystemPrompt: !1,
                    toolChoice: void 0,
                    isNonInteractiveSession: !1,
                    agents: [],
                    querySource: "feedback",
                    mcpTools: [],
                    agentIdOrSessionId: G0()
                }
            }),
            G = B.message.content[0]?.type === "text" ? B.message.content[0].text : "Bug Report";
        if (G.startsWith(vF)) return XW9(A);
        return G
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), XW9(A)
    }
}

function XW9(A) {
    let Q = A.split(`
`)[0] || "";
    if (Q.length <= 60 && Q.length > 5) return Q;
    let B = Q.slice(0, 60);
    if (Q.length > 60) {
        let G = B.lastIndexOf(" ");
        if (G > 30) B = B.slice(0, G);
        B += "..."
    }
    return B.length < 10 ? "Bug Report" : B
}

function BY1(A) {
    if (A instanceof Error) {
        let Q = Error(jQA(A.message));
        if (A.stack) Q.stack = jQA(A.stack);
        e(Q)
    } else {
        let Q = jQA(String(A));
        e(Error(Q))
    }
}
async function ES3(A) {
    try {
        let Q = VI();
        if (Q.error) return {
            success: !1
        };
        let B = {
                "Content-Type": "application/json",
                "User-Agent": Wp(),
                ...Q.headers
            },
            G = await GQ.post("https://api.anthropic.com/api/claude_cli_feedback", {
                content: JSON.stringify(A)
            }, {
                headers: B
            });
        if (G.status === 200) {
            let Z = G.data;
            if (Z?.feedback_id) return {
                success: !0,
                feedbackId: Z.feedback_id
            };
            return BY1(Error("Failed to submit feedback: request did not return feedback_id")), {
                success: !1
            }
        }
        return BY1(Error("Failed to submit feedback:" + G.status)), {
            success: !1
        }
    } catch (Q) {
        if (GQ.isAxiosError(Q) && Q.response?.status === 403) {
            let B = Q.response.data;
            if (B?.error?.type === "permission_error" && B?.error?.message?.includes("Custom data retention settings")) return BY1(Error("Cannot submit feedback because custom data retention settings are enabled")), {
                success: !1,
                isZdrOrg: !0
            }
        }
        return BY1(Q), {
            success: !1
        }
    }
}
var mQ, _O, VS3 = 7250,
    JW9 = "https://github.com/anthropics/claude-code/issues";
var ZF0 = L(() => {
    hA();
    QY();
    u1();
    f5();
    ED();
    m8();
    XE();
    w0();
    kZ();
    tM();
    lM();
    c9();
    w3();
    nQ();
    S0();
    GG();