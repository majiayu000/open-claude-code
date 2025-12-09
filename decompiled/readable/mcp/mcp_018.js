/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.017Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 18/29
 * Lines: 391818 - 393317 (1500 lines)
 * Original file: cli.js
 */

    AO();
    w0();
    D0();
    H9();
    ry();
    x_();
    oM();
    uPA = GA(VA(), 1), qg = GA(VA(), 1)
});

function EJ0({
    suggestions: A,
    selectedSuggestion: Q
}) {
    let {
        rows: B
    } = YB(), G = Math.min(10, Math.max(1, B - 3)), Z = (X) => {
        return Math.max(...X.map((F) => F.displayText.length)) + 5
    };
    if (A.length === 0) return null;
    let I = Z(A),
        Y = Math.max(0, Math.min(Q - Math.floor(G / 2), A.length - G)),
        J = Math.min(Y + G, A.length),
        W = A.slice(Y, J);
    return oE.createElement(j, {
        flexDirection: "column"
    }, W.map((X) => oE.createElement(SL3, {
        key: X.id,
        item: X,
        maxColumnWidth: I,
        isSelected: X.id === A[Q]?.id
    })))
}
var oE, CJ0, SL3, XwZ;
var w09 = L(() => {
    hA();
    m8();
    oE = GA(VA(), 1), CJ0 = GA(VA(), 1), SL3 = CJ0.memo(function({
        item: Q,
        maxColumnWidth: B,
        isSelected: G
    }) {
        let Z = YB().columns,
            I = B ?? Q.displayText.length + 5,
            Y = Z < 80 || Q.description && I * 2 > Z,
            J = Q.color || (G ? "suggestion" : void 0),
            W = !G;
        return oE.createElement(j, {
            key: Q.id,
            flexDirection: Y ? "column" : "row"
        }, oE.createElement(j, {
            width: Y ? void 0 : I
        }, oE.createElement($, {
            color: J,
            dimColor: W
        }, Q.displayText)), Q.description && oE.createElement(j, {
            width: Z - (Y ? 4 : I + 4),
            paddingLeft: Y ? 4 : 0
        }, oE.createElement($, {
            color: G ? "suggestion" : void 0,
            dimColor: !G,
            wrap: "wrap-trim"
        }, Q.description)))
    });
    XwZ = CJ0.memo(EJ0)
});

function OZ1(A) {
    let {
        dimColor: Q,
        fixedWidth: B,
        gap: G,
        paddingX: Z
    } = A;
    return w2.createElement(j, {
        paddingX: Z,
        flexDirection: "row",
        gap: G
    }, w2.createElement(j, {
        flexDirection: "column",
        width: B ? 22 : void 0
    }, w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "! for bash mode")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "/ for commands")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "@ for file paths")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "# to memorize")), j8("tengu_web_tasks") && w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "& for background"))), w2.createElement(j, {
        flexDirection: "column",
        width: B ? 35 : void 0
    }, w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "double tap esc to clear input")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, EU.displayText.replace("+", " + "), " to auto-accept edits")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "ctrl + o for verbose output")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "ctrl + t to show todos")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "tab to toggle thinking")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, G09()))), w2.createElement(j, {
        flexDirection: "column"
    }, w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "ctrl + _ to undo")), Nv0 && w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, "ctrl + z to suspend")), w2.createElement(j, null, w2.createElement($, {
        dimColor: Q
    }, Ye.displayText.replace("+", " + "), " to paste images"))))
}
var w2;
var zJ0 = L(() => {
    hA();
    jp();
    s5();
    vPA();
    O9();
    w2 = GA(VA(), 1)
});

function _L3({
    apiKeyStatus: A,
    debug: Q,
    exitMessage: B,
    vimMode: G,
    mode: Z,
    autoUpdaterResult: I,
    isAutoUpdating: Y,
    verbose: J,
    onAutoUpdaterResult: W,
    onChangeIsUpdating: X,
    suggestions: F,
    selectedSuggestion: V,
    toolPermissionContext: K,
    helpOpen: D,
    suppressHint: H,
    tasksSelected: C,
    ideSelection: E,
    mcpClients: z,
    isPasting: w = !1,
    isInputWrapped: N = !1,
    messages: q,
    isSearching: R,
    historyQuery: P,
    setHistoryQuery: y,
    historyFailedMatch: v,
    shouldShowSearchHint: x
}) {
    let p = wg(),
        u = H || DJ0(p) || R;
    if (F.length) return lD.createElement(j, {
        paddingX: 2,
        paddingY: 0
    }, lD.createElement(EJ0, {
        suggestions: F,
        selectedSuggestion: V
    }));
    if (D) return lD.createElement(OZ1, {
        dimColor: !0,
        fixedWidth: !0,
        paddingX: 2
    });
    return lD.createElement(j, {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingX: 2
    }, lD.createElement(j, {
        flexDirection: "column"
    }, Z === "prompt" && !B.show && !w && DJ0(p) && lD.createElement(U09, {
        messages: q
    }), lD.createElement(E09, {
        exitMessage: B,
        vimMode: G,
        mode: Z,
        toolPermissionContext: K,
        suppressHint: u,
        tasksSelected: C,
        isPasting: w,
        isSearching: R,
        historyQuery: P,
        setHistoryQuery: y,
        historyFailedMatch: v,
        messages: q
    })), lD.createElement(Y19, {
        apiKeyStatus: A,
        autoUpdaterResult: I,
        debug: Q,
        isAutoUpdating: Y,
        verbose: J,
        messages: q,
        onAutoUpdaterResult: W,
        onChangeIsUpdating: X,
        ideSelection: E,
        mcpClients: z,
        isInputWrapped: N,
        shouldShowSearchHint: x
    }))
}
var lD, q09, N09;
var L09 = L(() => {
    hA();
    z09();
    fY0();
    $09();
    gPA();
    w09();
    zJ0();
    lD = GA(VA(), 1), q09 = GA(VA(), 1);
    N09 = q09.memo(_L3)
});
import {
    join as kL3,
    dirname as yL3
} from "path";
import {
    homedir as xL3
} from "os";

async function vL3(A, Q) {
    let {
        code: B
    } = await q3("git", ["check-ignore", A], {
        preserveOutputOnError: !1,
        cwd: Q
    });
    return B === 0
}

function bL3() {
    return kL3(xL3(), ".config", "git", "ignore")
}

async function UJ0(A, Q = H0()) {
    try {
        if (!await LGB(Q)) return;
        let B = `**/${A}`,
            G = A.endsWith("/") ? `${A}sample-file.txt` : A;
        if (await vL3(G, Q)) return;
        let Z = bL3(),
            I = OA(),
            Y = yL3(Z);
        if (!I.existsSync(Y)) I.mkdirSync(Y);
        if (I.existsSync(Z)) {
            if (I.readFileSync(Z, {
                    encoding: "utf-8"
                }).includes(B)) return;
            I.appendFileSync(Z, `
${B}
`)
        } else I.writeFileSync(Z, `${B}
`, {
            encoding: "utf-8",
            flush: !1
        })
    } catch (B) {
        e(B instanceof Error ? B : Error(String(B)))
    }
}
var $J0 = L(() => {
    ED();
    o0();
    R2();
    u1();
    I6()
});
import {
    execFileSync as fL3
} from "child_process";

function M09(A) {
    if (!OA().existsSync(A)) return "";
    return OA().readFileSync(A, {
        encoding: "utf-8"
    })
}

function O09(A) {
    try {
        fL3("git", ["rev-parse", "--is-inside-work-tree"], {
            cwd: A,
            stdio: "ignore"
        })
    } catch (Q) {
        return !1
    }
    return !0
}
var wJ0 = L(() => {
    o0();
    $J0()
});
import {
    join as R09
} from "path";

function TZ1({
    onSelect: A,
    onCancel: Q,
    title: B,
    renderDetails: G
}) {
    let Z = xF(),
        I = R09(PQ(), "CLAUDE.md"),
        Y = R09(pQ(), "CLAUDE.md"),
        J = Z.some((z) => z.path === I),
        W = Z.some((z) => z.path === Y),
        X = [...Z.map((z) => ({
            ...z,
            exists: !0
        })), ...J ? [] : [{
            path: I,
            type: "User",
            content: "",
            exists: !1
        }], ...W ? [] : [{
            path: Y,
            type: "Project",
            content: "",
            exists: !1
        }]],
        F = new Map,
        V = X.map((z) => {
            let w = Q5(z.path),
                N = z.exists ? "" : " (new)",
                q = z.parent ? (F.get(z.parent) ?? 0) + 1 : 0;
            F.set(z.path, q);
            let R = q > 0 ? "  ".repeat(q - 1) : "",
                P;
            if (z.type === "User" && !z.isNested && z.path === I) P = "User memory";
            else if (z.type === "Project" && !z.isNested && z.path === Y) P = "Project memory";
            else if (q > 0) P = `${R}L ${w}${N}`;
            else P = `${w}`;
            let y, v = O09(pQ());
            if (z.type === "User" && !z.isNested) y = "Saved in ~/.claude/CLAUDE.md";
            else if (z.type === "Project" && !z.isNested && z.path === Y) y = `${v?"Checked in at":"Saved in"} ./CLAUDE.md`;
            else if (z.type, z.parent) y = "@-imported";
            else if (z.isNested) y = "dynamically loaded";
            else y = "";
            return {
                label: P,
                value: z.path,
                description: y
            }
        }),
        K = RZ1 && V.some((z) => z.value === RZ1) ? RZ1 : V[0]?.value || "",
        [D, H] = T09.useState(K),
        E = X.find((z) => z.path === D)?.type;
    return DQ(), h1((z, w) => {
        if (w.escape) Q()
    }), iq.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "remember",
        padding: 1,
        width: "100%"
    }, iq.createElement(j, {
        marginBottom: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }, iq.createElement($, {
        color: "remember",
        bold: !0
    }, B || "Select memory file to edit:")), iq.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, iq.createElement(M0, {
        focusValue: K,
        options: V,
        onFocus: (z) => H(z),
        onChange: (z) => {
            RZ1 = z, A(z)
        },
        onCancel: Q
    })), G && iq.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, G(D, E)))
}
var iq, T09, RZ1;
var qJ0 = L(() => {
    hA();
    T6();
    c9();
    uE();
    M9();
    wJ0();
    S0();
    hQ();
    iq = GA(VA(), 1), T09 = GA(VA(), 1)
});

function P09(A, Q) {
    let B = PZ1.useRef(void 0);
    PZ1.useEffect(() => {
        let G = cU(A);
        if (B.current !== G) B.current = G;
        if (G) G.client.setNotificationHandler(gL3, (Z) => {
            if (B.current !== G) return;
            try {
                let I = Z.params,
                    Y = I.lineStart !== void 0 ? I.lineStart + 1 : void 0,
                    J = I.lineEnd !== void 0 ? I.lineEnd + 1 : void 0;
                Q({
                    filePath: I.filePath,
                    lineStart: Y,
                    lineEnd: J
                })
            } catch (I) {
                e(I)
            }
        })
    }, [A, Q])
}
var PZ1, hL3 = "at_mentioned",
    gL3;
var j09 = L(() => {
    h2();
    yJ();
    u1();
    PZ1 = GA(VA(), 1), gL3 = _.object({
        method: _.literal(hL3),
        params: _.object({
            filePath: _.string(),
            lineStart: _.number().optional(),
            lineEnd: _.number().optional()
        })
    })
});

function S09({
    maxBufferSize: A,
    debounceMs: Q
}) {
    let [B, G] = oy.useState([]), [Z, I] = oy.useState(-1), Y = oy.useRef(0), J = oy.useRef(null), W = oy.useCallback((K, D, H = {}) => {
        let C = Date.now();
        if (J.current) clearTimeout(J.current), J.current = null;
        if (C - Y.current < Q) {
            J.current = setTimeout(() => {
                W(K, D, H)
            }, Q);
            return
        }
        Y.current = C, G((E) => {
            let z = Z >= 0 ? E.slice(0, Z + 1) : E,
                w = z[z.length - 1];
            if (w && w.text === K) return z;
            let N = [...z, {
                text: K,
                cursorOffset: D,
                pastedContents: H,
                timestamp: C
            }];
            if (N.length > A) return N.slice(-A);
            return N
        }), I((E) => {
            let z = E >= 0 ? E + 1 : B.length;
            return Math.min(z, A - 1)
        })
    }, [Q, A, Z, B.length]), X = oy.useCallback(() => {
        if (Z < 0 || B.length === 0) return;
        let K = Math.max(0, Z - 1),
            D = B[K];
        if (D) return I(K), D;
        return
    }, [B, Z]), F = oy.useCallback(() => {
        if (G([]), I(-1), Y.current = 0, J.current) clearTimeout(J.current), J.current = null
    }, [Y, J]), V = Z > 0 && B.length > 1;
    return {
        pushToBuffer: W,
        undo: X,
        canUndo: V,
        clearBuffer: F
    }
}
var oy;
var _09 = L(() => {
    oy = GA(VA(), 1)
});

function k09({
    shell: A,
    onDone: Q,
    onKillShell: B,
    onBack: G
}) {
    let {
        columns: Z
    } = YB(), [I, Y] = mPA.useState(0), [J, W] = mPA.useState({
        stdout: "",
        stderr: "",
        stdoutLines: 0,
        stderrLines: 0
    });
    h1((K, D) => {
        if (D.escape || D.return || K === " ") Q("Shell details dismissed", {
            display: "system"
        });
        else if (D.leftArrow && G) G();
        else if (K === "k" && A.status === "running" && B) B()
    });
    let X = DQ(),
        F = (K) => {
            let D = Math.floor((Date.now() - K) / 1000),
                H = Math.floor(D / 3600),
                C = Math.floor((D - H * 3600) / 60),
                E = D - H * 3600 - C * 60;
            return `${H>0?`${H}h `:""}${C>0||H>0?`${C}m `:""}${E}s`
        };
    mPA.useEffect(() => {
        let K = BQ1(A),
            D = (q, R, P = 10) => {
                if (!R) return q;
                let y = q.split(`
`),
                    v = R.split(`
`);
                return [...y, ...v].slice(-P).join(`
`)
            },
            H = D(J.stdout, K.stdout),
            C = D(J.stderr, K.stderr),
            {
                totalLines: E,
                truncatedContent: z
            } = d_(H),
            {
                totalLines: w,
                truncatedContent: N
            } = d_(C);
        if (W({
                stdout: z,
                stderr: N,
                stdoutLines: E,
                stderrLines: w
            }), A.status === "running") {
            let q = setTimeout(() => {
                Y((R) => R + 1)
            }, 1000);
            return () => clearTimeout(q)
        }
    }, [A.id, A.status, I, J.stdout, J.stderr, A]);
    let V = A.command.length > 70 ? A.command.substring(0, 67) + "..." : A.command;
    return V3.default.createElement(j, {
        width: "100%",
        flexDirection: "column"
    }, V3.default.createElement(j, {
        width: "100%"
    }, V3.default.createElement(j, {
        borderStyle: "round",
        borderColor: "background",
        flexDirection: "column",
        marginTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        width: "100%"
    }, V3.default.createElement(j, null, V3.default.createElement($, {
        color: "background",
        bold: !0
    }, "Shell details")), V3.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, V3.default.createElement($, null, V3.default.createElement($, {
        bold: !0
    }, "Status:"), " ", A.status === "running" ? V3.default.createElement($, {
        color: "background"
    }, A.status, A.result?.code !== void 0 && ` (exit code: ${A.result.code})`) : A.status === "completed" ? V3.default.createElement($, {
        color: "success"
    }, A.status, A.result?.code !== void 0 && ` (exit code: ${A.result.code})`) : V3.default.createElement($, {
        color: "error"
    }, A.status, A.result?.code !== void 0 && ` (exit code: ${A.result.code})`)), V3.default.createElement($, null, V3.default.createElement($, {
        bold: !0
    }, "Runtime:"), " ", F(A.startTime)), V3.default.createElement($, {
        wrap: "truncate-end"
    }, V3.default.createElement($, {
        bold: !0
    }, "Command:"), " ", V)), V3.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, V3.default.createElement($, {
        bold: !0
    }, "Stdout:"), J.stdout ? V3.default.createElement(V3.default.Fragment, null, V3.default.createElement(j, {
        borderStyle: "round",
        borderDimColor: !0,
        paddingX: 1,
        flexDirection: "column",
        height: 12,
        maxWidth: Z - 8
    }, J.stdout.split(`
`).slice(-10).map((K, D) => V3.default.createElement($, {
        key: D,
        wrap: "truncate-end"
    }, K))), V3.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, J.stdoutLines > 10 ? `Showing last 10 lines of ${J.stdoutLines} total lines` : `Showing ${J.stdoutLines} lines`)) : V3.default.createElement($, {
        dimColor: !0
    }, "No stdout output available")), J.stderr && V3.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, V3.default.createElement($, {
        bold: !0,
        color: "error"
    }, "Stderr:"), V3.default.createElement(j, {
        borderStyle: "round",
        borderColor: "error",
        paddingX: 1,
        flexDirection: "column",
        height: 3,
        maxWidth: Z - 8
    }, J.stderr.split(`
`).slice(-1).map((K, D) => V3.default.createElement($, {
        key: D,
        color: "error",
        wrap: "truncate-end"
    }, K))), V3.default.createElement($, {
        dimColor: !0,
        italic: !0,
        color: "error"
    }, J.stderrLines > 1 ? `Showing last line of ${J.stderrLines} total lines` : `Showing ${J.stderrLines} line`)))), V3.default.createElement(j, {
        marginLeft: 2
    }, X.pending ? V3.default.createElement($, {
        dimColor: !0
    }, "Press ", X.keyName, " again to exit") : V3.default.createElement($, {
        dimColor: !0
    }, G ? V3.default.createElement($, null, "← to go back · ") : null, "Esc/Enter/Space to close", A.status === "running" && B ? V3.default.createElement($, null, " · k to kill") : null)))
}
var V3, mPA;
var y09 = L(() => {
    hA();
    m8();
    c9();
    gAA();
    yp();
    V3 = GA(VA(), 1), mPA = GA(VA(), 1)
});

function x09() {
    return dPA.createElement(y0, {
        height: 1
    }, dPA.createElement(Uk, null))
}
var dPA;
var v09 = L(() => {
    zIA();
    u8();
    dPA = GA(VA(), 1)
});

function b09({
    feedback: A
}) {
    return cPA.createElement(y0, null, cPA.createElement($, {
        color: "error"
    }, "Tool use rejected with user message: ", A))
}
var cPA;
var f09 = L(() => {
    hA();
    u8();
    cPA = GA(VA(), 1)
});

function h09({
    progressMessagesForMessage: A,
    tool: Q,
    tools: B,
    param: G,
    verbose: Z
}) {
    let [I] = $B();
    if (typeof G.content === "string" && G.content.includes(DO)) return uP.createElement(y0, {
        height: 1
    }, uP.createElement(Uk, null));
    if (typeof G.content === "string" && G.content.startsWith(NJ0)) {
        let Y = G.content.substring(NJ0.length);
        return uP.createElement(y31, {
            plan: Y,
            themeName: I
        })
    }
    if (typeof G.content === "string" && G.content.startsWith(pPA)) {
        let Y = G.content.substring(pPA.length);
        return uP.createElement(b09, {
            feedback: Y
        })
    }
    if (!Q) return uP.createElement(A5, {
        result: G.content,
        verbose: Z
    });
    return Q.renderToolUseErrorMessage(G.content, {
        progressMessagesForMessage: Sp(A),
        tools: B,
        verbose: Z
    })
}
var uP;
var g09 = L(() => {
    nQ();
    zIA();
    u8();
    lX();
    hA();
    qG0();
    f09();
    uP = GA(VA(), 1)
});

function u09({
    input: A,
    progressMessagesForMessage: Q,
    style: B,
    tool: G,
    tools: Z,
    messages: I,
    verbose: Y
}) {
    let {
        columns: J
    } = YB(), [W] = $B();
    if (!G) return lPA.createElement(k3, null);
    let X = G.inputSchema.safeParse(A);
    if (!X.success) return lPA.createElement(k3, null);
    return G.renderToolUseRejectedMessage(X.data, {
        columns: J,
        messages: I,
        tools: Z,
        verbose: Y,
        progressMessagesForMessage: Sp(Q),
        style: B,
        theme: W
    })
}
var lPA;
var m09 = L(() => {
    lV();
    m8();
    hA();
    lPA = GA(VA(), 1)
});
var d09 = "\x1B[0m\x1B(B";

function jZ1({
    hookEvent: A,
    messages: Q,
    toolUseID: B,
    verbose: G
}) {
    let Z = c09(Q, B, A),
        I = p09(Q, B, A);
    if (I === Z) return null;
    return cW.createElement(y0, null, cW.createElement(j, {
        flexDirection: "column"
    }, cW.createElement(j, {
        flexDirection: "row"
    }, cW.createElement($, {
        dimColor: !0
    }, "Running "), cW.createElement($, {
        dimColor: !0,
        bold: !0
    }, A), Z === 1 ? cW.createElement($, {
        dimColor: !0
    }, " hook…") : cW.createElement($, {
        dimColor: !0
    }, " ", "hooks… (", I, "/", Z, " done)")), G && cW.createElement(uL3, {
        messages: Q,
        toolUseID: B,
        hookEvent: A
    })))
}

function uL3({
    messages: A,
    toolUseID: Q,
    hookEvent: B
}) {
    let G = A.filter((Z) => Z.type === "progress" && Z.data.type === "hook_progress" && Z.data.hookEvent === B && Z.parentToolUseID === Q);
    return cW.createElement(j, {
        flexDirection: "column",
        marginLeft: 2
    }, G.map((Z) => cW.createElement($, {
        dimColor: !0,
        key: Z.uuid
    }, "· ", Z.data.hookName, ": ", Z.data.command)))
}
var cW;
var LJ0 = L(() => {
    u8();
    hA();
    nQ();
    cW = GA(VA(), 1)
});

function l09({
    message: A,
    messages: Q,
    toolUseID: B,
    progressMessagesForMessage: G,
    style: Z,
    tool: I,
    tools: Y,
    verbose: J,
    width: W
}) {
    let [X] = $B();
    if (!A.toolUseResult || !I) return null;
    let F = I.renderToolResultMessage(A.toolUseResult, Sp(G), {
        style: Z,
        theme: X,
        tools: Y,
        verbose: J
    });
    if (F === null) return null;
    return mP.createElement(j, {
        flexDirection: "column"
    }, mP.createElement(j, {
        flexDirection: "row",
        width: W
    }, F, mP.createElement($, null, d09)), mP.createElement(YQA, null, mP.createElement(jZ1, {
        hookEvent: "PostToolUse",
        messages: Q,
        toolUseID: B,
        verbose: J
    })))
}
var mP;
var i09 = L(() => {
    hA();
    LJ0();
    JZ1();
    mP = GA(VA(), 1)
});

function mL3(A, Q) {
    let B = null;
    for (let G of Q) {
        if (G.type !== "assistant" || !Array.isArray(G.message.content)) continue;
        for (let Z of G.message.content)
            if (Z.type === "tool_use" && Z.id === A) B = Z
    }
    return B
}

function a09(A, Q, B) {
    return n09.useMemo(() => {
        let G = mL3(A, B);
        if (!G) return null;
        let Z = Q.find((I) => I.name === G.name);
        if (!Z) return null;
        return {
            tool: Z,
            toolUse: G
        }
    }, [A, B, Q])
}
var n09;
var s09 = L(() => {
    n09 = GA(VA(), 1)
});

function r09({
    param: A,
    message: Q,
    messages: B,
    progressMessagesForMessage: G,
    style: Z,
    tools: I,
    verbose: Y,
    width: J
}) {
    let W = a09(A.tool_use_id, I, B);
    if (!W) return null;
    if (A.content === HWA) return Ng.createElement(x09, null);
    if (A.content === iPA || A.content === DO) return Ng.createElement(u09, {
        input: W.toolUse.input,
        progressMessagesForMessage: G,
        tool: W.tool,
        tools: I,
        messages: B,
        style: Z,
        verbose: Y
    });
    if (A.is_error) return Ng.createElement(h09, {
        progressMessagesForMessage: G,
        tool: W.tool,
        tools: I,
        param: A,
        verbose: Y
    });
    return Ng.createElement(l09, {
        message: Q,
        messages: B,
        toolUseID: W.toolUse.id,
        progressMessagesForMessage: G,
        style: Z,
        tool: W.tool,
        tools: I,
        verbose: Y,
        width: J
    })
}
var Ng;
var o09 = L(() => {
    nQ();
    v09();
    g09();
    m09();
    i09();
    s09();
    Ng = GA(VA(), 1)
});

function dL3() {
    let A = new oc;
    A.setMaxListeners(100);
    let Q = null,
        B = !0;
    return {
        subscribe(G) {
            if (A.on("blink", G), A.listenerCount("blink") === 1) Q = setInterval(() => {
                B = !B, A.emit("blink")
            }, 600);
            return B
        },
        unsubscribe(G) {
            if (A.off("blink", G), A.listenerCount("blink") === 0 && Q) clearInterval(Q), Q = null
        },
        getCurrentState() {
            return B
        }
    }
}

function e09(A) {
    let Q = t09(),
        [B, G] = SZ1.useState(Q.getCurrentState());
    return SZ1.useEffect(() => {
        if (!A) return;
        let Z = t09(),
            I = () => G(Z.getCurrentState()),
            Y = Z.subscribe(I);
        return G(Y), () => {
            Z.unsubscribe(I)
        }
    }, [A]), A ? B : !0
}
var SZ1, t09;
var AQ9 = L(() => {
    hA();
    o2();
    SZ1 = GA(VA(), 1);
    t09 = t1(dL3)
});

function _Z1({
    isError: A,
    isUnresolved: Q,
    shouldAnimate: B
}) {
    let G = e09(B);
    return MJ0.default.createElement(j, {
        minWidth: 2
    }, MJ0.default.createElement($, {
        color: Q ? void 0 : A ? "error" : "success",
        dimColor: Q
    }, !B || G || A || !Q ? pD : " "))
}
var MJ0;
var OJ0 = L(() => {
    hA();
    yn();
    AQ9();
    MJ0 = GA(VA(), 1)
});
var en = "AgentOutputTool";

function QQ9({
    param: A,
    addMargin: Q,
    tools: B,
    verbose: G,
    erroredToolUseIDs: Z,
    inProgressToolUseIDs: I,
    resolvedToolUseIDs: Y,
    progressMessagesForMessage: J,
    shouldAnimate: W,
    shouldShowDot: X,
    inProgressToolCallCount: F,
    messages: V
}) {
    let K = YB(),
        [D] = $B();
    if (!B) return e(Error(`Tools array is undefined for tool ${A.name}`)), null;
    let H = B.find((R) => R.name === A.name);
    if (!H) return e(Error(`Tool ${A.name} not found`)), null;
    let C = Y.has(A.id),
        E = !I.has(A.id) && !C,
        z = H.inputSchema.safeParse(A.input),
        w = H.userFacingName(z.success ? z.data : void 0),
        N = H.userFacingNameBackgroundColor?.(z.success ? z.data : void 0);
    if (w === "") return null;
    let q = z.success ? cL3(H, z.data, {
        theme: D,
        verbose: G
    }) : null;
    if (q === null) return null;
    return tY.default.createElement(j, {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Q ? 1 : 0,
        width: "100%"
    }, tY.default.createElement(j, {
        flexDirection: "column"
    }, tY.default.createElement(j, {
        flexDirection: "row",
        flexWrap: "nowrap",
        minWidth: w.length + (X ? 2 : 0)
    }, X && (E ? tY.default.createElement(j, {
        minWidth: 2
    }, tY.default.createElement($, {
        dimColor: E
    }, pD)) : tY.default.createElement(_Z1, {
        shouldAnimate: W,
        isUnresolved: !C,
        isError: Z.has(A.id)
    })), tY.default.createElement(j, {
        flexShrink: 0
    }, tY.default.createElement($, {
        bold: !0,
        wrap: "truncate-end",
        backgroundColor: N,
        color: N ? "inverseText" : void 0
    }, w)), q !== "" && tY.default.createElement(j, {
        flexWrap: "nowrap"
    }, tY.default.createElement($, null, "(", q, ")")), H.name === BASH_TOOL_NAME && z.success && z.data.timeout && (() => {
        let R = z.data.timeout,
            P = LGA();
        if (R !== P) return tY.default.createElement(j, {
            flexWrap: "nowrap",
            marginLeft: 1
        }, tY.default.createElement($, {
            dimColor: !0
        }, "timeout: ", FE(R)));
        return null
    })(), H.name === TASK_TOOL_NAME && z.success && z.data.resume && tY.default.createElement(j, {
        flexWrap: "nowrap",
        marginLeft: 1
    }, tY.default.createElement($, {
        dimColor: !0
    }, "resuming ", z.data.resume)), H.name === TASK_TOOL_NAME && z.success && z.data.model && (() => {
        let R = VE(z.data.model),
            P = S3();
        if (R !== P) return tY.default.createElement(j, {
            flexWrap: "nowrap",
            marginLeft: 1
        }, tY.default.createElement($, {
            dimColor: !0
        }, Ep(R)));
        return null
    })(), H.name === en && z.success && z.data.agentId && tY.default.createElement(j, {
        flexWrap: "nowrap",
        marginLeft: 1
    }, tY.default.createElement($, {
        dimColor: !0
    }, z.data.agentId))), !C && !E && pL3(H, B, V, A.id, J, {
        verbose: G,
        inProgressToolCallCount: F
    }, K), !C && E && lL3(H)))
}

function cL3(A, Q, {
    theme: B,
    verbose: G
}) {
    try {
        let Z = A.inputSchema.safeParse(Q);
        if (!Z.success) return "";
        return A.renderToolUseMessage(Z.data, {
            theme: B,
            verbose: G
        })
    } catch (Z) {
        return e(Error(`Error rendering tool use message for ${A.name}: ${Z}`)), ""
    }
}

function pL3(A, Q, B, G, Z, {
    verbose: I,
    inProgressToolCallCount: Y
}, J) {
    let W = Z.filter((X) => X.data.type !== "hook_progress");
    try {
        let X = A.renderToolUseProgressMessage(W, {
            tools: Q,
            verbose: I,
            terminalSize: J,
            inProgressToolCallCount: Y ?? 1
        });
        return tY.default.createElement(tY.default.Fragment, null, tY.default.createElement(YQA, null, tY.default.createElement(jZ1, {
            hookEvent: "PreToolUse",
            messages: B,
            toolUseID: G,
            verbose: I
        })), X)
    } catch (X) {
        return e(Error(`Error rendering tool use progress message for ${A.name}: ${X}`)), null
    }
}

function lL3(A) {
    try {
        return A.renderToolUseQueuedMessage?.()
    } catch (Q) {
        return e(Error(`Error rendering tool use queued message for ${A.name}: ${Q}`)), null
    }
}
var tY;
var BQ9 = L(() => {
    hA();
    u1();
    OJ0();
    yn();
    m8();
    MGA();
    s2();
    LJ0();
    JZ1();
    tY = GA(VA(), 1)
});
var dP = U((VNZ, xZ1) => {
    var GQ9, ZQ9, IQ9, YQ9, JQ9, WQ9, XQ9, FQ9, VQ9, KQ9, DQ9, HQ9, CQ9, kZ1, RJ0, EQ9, zQ9, UQ9, jXA, $Q9, wQ9, qQ9, NQ9, LQ9, MQ9, OQ9, RQ9, TQ9, yZ1, PQ9, jQ9, SQ9;
    (function(A) {
        var Q = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) define("tslib", ["exports"], function(G) {
            A(B(Q, B(G)))
        });
        else if (typeof xZ1 === "object" && typeof VNZ === "object") A(B(Q, B(VNZ)));
        else A(B(Q));

function B(G, Z) {
            if (G !== Q)
                if (typeof Object.create === "function") Object.defineProperty(G, "__esModule", {
                    value: !0
                });
                else G.__esModule = !0;
            return function(I, Y) {
                return G[I] = Z ? Z(I, Y) : Y
            }
        }
    })(function(A) {
        var Q = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(I, Y) {
            I.__proto__ = Y
        } || function(I, Y) {
            for (var J in Y)
                if (Object.prototype.hasOwnProperty.call(Y, J)) I[J] = Y[J]
        };
        GQ9 = function(I, Y) {
            if (typeof Y !== "function" && Y !== null) throw TypeError("Class extends value " + String(Y) + " is not a constructor or null");
            Q(I, Y);

function J() {
                this.constructor = I
            }
            I.prototype = Y === null ? Object.create(Y) : (J.prototype = Y.prototype, new J)
        }, ZQ9 = Object.assign || function(I) {
            for (var Y, J = 1, W = arguments.length; J < W; J++) {
                Y = arguments[J];
                for (var X in Y)
                    if (Object.prototype.hasOwnProperty.call(Y, X)) I[X] = Y[X]
            }
            return I
        }, IQ9 = function(I, Y) {
            var J = {};
            for (var W in I)
                if (Object.prototype.hasOwnProperty.call(I, W) && Y.indexOf(W) < 0) J[W] = I[W];
            if (I != null && typeof Object.getOwnPropertySymbols === "function") {
                for (var X = 0, W = Object.getOwnPropertySymbols(I); X < W.length; X++)
                    if (Y.indexOf(W[X]) < 0 && Object.prototype.propertyIsEnumerable.call(I, W[X])) J[W[X]] = I[W[X]]
            }
            return J
        }, YQ9 = function(I, Y, J, W) {
            var X = arguments.length,
                F = X < 3 ? Y : W === null ? W = Object.getOwnPropertyDescriptor(Y, J) : W,
                V;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") F = Reflect.decorate(I, Y, J, W);
            else
                for (var K = I.length - 1; K >= 0; K--)
                    if (V = I[K]) F = (X < 3 ? V(F) : X > 3 ? V(Y, J, F) : V(Y, J)) || F;
            return X > 3 && F && Object.defineProperty(Y, J, F), F
        }, JQ9 = function(I, Y) {
            return function(J, W) {
                Y(J, W, I)
            }
        }, WQ9 = function(I, Y, J, W, X, F) {
            function V(P) {
                if (P !== void 0 && typeof P !== "function") throw TypeError("Function expected");
                return P
            }
            var K = W.kind,
                D = K === "getter" ? "get" : K === "setter" ? "set" : "value",
                H = !Y && I ? W.static ? I : I.prototype : null,
                C = Y || (H ? Object.getOwnPropertyDescriptor(H, W.name) : {}),
                E, z = !1;
            for (var w = J.length - 1; w >= 0; w--) {
                var N = {};
                for (var q in W) N[q] = q === "access" ? {} : W[q];
                for (var q in W.access) N.access[q] = W.access[q];
                N.addInitializer = function(P) {
                    if (z) throw TypeError("Cannot add initializers after decoration has completed");
                    F.push(V(P || null))
                };
                var R = (0, J[w])(K === "accessor" ? {
                    get: C.get,
                    set: C.set
                } : C[D], N);
                if (K === "accessor") {
                    if (R === void 0) continue;
                    if (R === null || typeof R !== "object") throw TypeError("Object expected");
                    if (E = V(R.get)) C.get = E;
                    if (E = V(R.set)) C.set = E;
                    if (E = V(R.init)) X.unshift(E)
                } else if (E = V(R))
                    if (K === "field") X.unshift(E);
                    else C[D] = E
            }
            if (H) Object.defineProperty(H, W.name, C);
            z = !0
        }, XQ9 = function(I, Y, J) {
            var W = arguments.length > 2;
            for (var X = 0; X < Y.length; X++) J = W ? Y[X].call(I, J) : Y[X].call(I);
            return W ? J : void 0
        }, FQ9 = function(I) {
            return typeof I === "symbol" ? I : "".concat(I)
        }, VQ9 = function(I, Y, J) {
            if (typeof Y === "symbol") Y = Y.description ? "[".concat(Y.description, "]") : "";
            return Object.defineProperty(I, "name", {
                configurable: !0,
                value: J ? "".concat(J, " ", Y) : Y
            })
        }, KQ9 = function(I, Y) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(I, Y)
        }, DQ9 = function(I, Y, J, W) {
            function X(F) {
                return F instanceof J ? F : new J(function(V) {
                    V(F)
                })
            }
            return new(J || (J = Promise))(function(F, V) {
                function K(C) {
                    try {
                        H(W.next(C))
                    } catch (E) {
                        V(E)
                    }
                }

function D(C) {
                    try {
                        H(W.throw(C))
                    } catch (E) {
                        V(E)
                    }
                }

function H(C) {
                    C.done ? F(C.value) : X(C.value).then(K, D)
                }
                H((W = W.apply(I, Y || [])).next())
            })
        }, HQ9 = function(I, Y) {
            var J = {
                    label: 0,
                    sent: function() {
                        if (F[0] & 1) throw F[1];
                        return F[1]
                    },
                    trys: [],
                    ops: []
                },
                W, X, F, V = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
            return V.next = K(0), V.throw = K(1), V.return = K(2), typeof Symbol === "function" && (V[Symbol.iterator] = function() {
                return this
            }), V;

function K(H) {
                return function(C) {
                    return D([H, C])
                }
            }

function D(H) {
                if (W) throw TypeError("Generator is already executing.");
                while (V && (V = 0, H[0] && (J = 0)), J) try {
                    if (W = 1, X && (F = H[0] & 2 ? X.return : H[0] ? X.throw || ((F = X.return) && F.call(X), 0) : X.next) && !(F = F.call(X, H[1])).done) return F;
                    if (X = 0, F) H = [H[0] & 2, F.value];
                    switch (H[0]) {
                        case 0:
                        case 1:
                            F = H;
                            break;
                        case 4:
                            return J.label++, {
                                value: H[1],
                                done: !1
                            };
                        case 5:
                            J.label++, X = H[1], H = [0];
                            continue;
                        case 7:
                            H = J.ops.pop(), J.trys.pop();
                            continue;
                        default:
                            if ((F = J.trys, !(F = F.length > 0 && F[F.length - 1])) && (H[0] === 6 || H[0] === 2)) {
                                J = 0;
                                continue
                            }
                            if (H[0] === 3 && (!F || H[1] > F[0] && H[1] < F[3])) {
                                J.label = H[1];
                                break
                            }
                            if (H[0] === 6 && J.label < F[1]) {
                                J.label = F[1], F = H;
                                break
                            }
                            if (F && J.label < F[2]) {
                                J.label = F[2], J.ops.push(H);
                                break
                            }
                            if (F[2]) J.ops.pop();
                            J.trys.pop();
                            continue
                    }
                    H = Y.call(I, J)
                } catch (C) {
                    H = [6, C], X = 0
                } finally {
                    W = F = 0
                }
                if (H[0] & 5) throw H[1];
                return {
                    value: H[0] ? H[1] : void 0,
                    done: !0
                }
            }
        }, CQ9 = function(I, Y) {
            for (var J in I)
                if (J !== "default" && !Object.prototype.hasOwnProperty.call(Y, J)) yZ1(Y, I, J)
        }, yZ1 = Object.create ? function(I, Y, J, W) {
            if (W === void 0) W = J;
            var X = Object.getOwnPropertyDescriptor(Y, J);
            if (!X || ("get" in X ? !Y.__esModule : X.writable || X.configurable)) X = {
                enumerable: !0,
                get: function() {
                    return Y[J]
                }
            };
            Object.defineProperty(I, W, X)
        } : function(I, Y, J, W) {
            if (W === void 0) W = J;
            I[W] = Y[J]
        }, kZ1 = function(I) {
            var Y = typeof Symbol === "function" && Symbol.iterator,
                J = Y && I[Y],
                W = 0;
            if (J) return J.call(I);
            if (I && typeof I.length === "number") return {
                next: function() {
                    if (I && W >= I.length) I = void 0;
                    return {
                        value: I && I[W++],
                        done: !I
                    }
                }
            };
            throw TypeError(Y ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, RJ0 = function(I, Y) {
            var J = typeof Symbol === "function" && I[Symbol.iterator];
            if (!J) return I;
            var W = J.call(I),
                X, F = [],
                V;
            try {
                while ((Y === void 0 || Y-- > 0) && !(X = W.next()).done) F.push(X.value)
            } catch (K) {
                V = {
                    error: K
                }
            } finally {
                try {
                    if (X && !X.done && (J = W.return)) J.call(W)
                } finally {
                    if (V) throw V.error
                }
            }
            return F
        }, EQ9 = function() {
            for (var I = [], Y = 0; Y < arguments.length; Y++) I = I.concat(RJ0(arguments[Y]));
            return I
        }, zQ9 = function() {
            for (var I = 0, Y = 0, J = arguments.length; Y < J; Y++) I += arguments[Y].length;
            for (var W = Array(I), X = 0, Y = 0; Y < J; Y++)
                for (var F = arguments[Y], V = 0, K = F.length; V < K; V++, X++) W[X] = F[V];
            return W
        }, UQ9 = function(I, Y, J) {
            if (J || arguments.length === 2) {
                for (var W = 0, X = Y.length, F; W < X; W++)
                    if (F || !(W in Y)) {
                        if (!F) F = Array.prototype.slice.call(Y, 0, W);
                        F[W] = Y[W]
                    }
            }
            return I.concat(F || Array.prototype.slice.call(Y))
        }, jXA = function(I) {
            return this instanceof jXA ? (this.v = I, this) : new jXA(I)
        }, $Q9 = function(I, Y, J) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var W = J.apply(I, Y || []),
                X, F = [];
            return X = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), K("next"), K("throw"), K("return", V), X[Symbol.asyncIterator] = function() {
                return this
            }, X;

function V(w) {
                return function(N) {
                    return Promise.resolve(N).then(w, E)
                }
            }

function K(w, N) {
                if (W[w]) {
                    if (X[w] = function(q) {
                            return new Promise(function(R, P) {
                                F.push([w, q, R, P]) > 1 || D(w, q)
                            })
                        }, N) X[w] = N(X[w])
                }
            }

function D(w, N) {
                try {
                    H(W[w](N))
                } catch (q) {
                    z(F[0][3], q)
                }
            }

function H(w) {
                w.value instanceof jXA ? Promise.resolve(w.value.v).then(C, E) : z(F[0][2], w)
            }

function C(w) {
                D("next", w)
            }

function E(w) {
                D("throw", w)
            }

function z(w, N) {
                if (w(N), F.shift(), F.length) D(F[0][0], F[0][1])
            }
        }, wQ9 = function(I) {
            var Y, J;
            return Y = {}, W("next"), W("throw", function(X) {
                throw X
            }), W("return"), Y[Symbol.iterator] = function() {
                return this
            }, Y;

function W(X, F) {
                Y[X] = I[X] ? function(V) {
                    return (J = !J) ? {
                        value: jXA(I[X](V)),
                        done: !1
                    } : F ? F(V) : V
                } : F
            }
        }, qQ9 = function(I) {
            if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
            var Y = I[Symbol.asyncIterator],
                J;
            return Y ? Y.call(I) : (I = typeof kZ1 === "function" ? kZ1(I) : I[Symbol.iterator](), J = {}, W("next"), W("throw"), W("return"), J[Symbol.asyncIterator] = function() {
                return this
            }, J);

function W(F) {
                J[F] = I[F] && function(V) {
                    return new Promise(function(K, D) {
                        V = I[F](V), X(K, D, V.done, V.value)
                    })
                }
            }
