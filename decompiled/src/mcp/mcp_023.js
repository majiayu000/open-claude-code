/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 23/29
 * Lines: 417265 - 418764 (1500 lines)
 * Original file: cli.js
 */

    mQ = GA(VA(), 1), _O = GA(VA(), 1)
});
var VW9 = L(() => {
    S0();
    u1();
    hB()
});
var KW9, GY1;
var DW9 = L(() => {
    hA();
    QY();
    u1();
    f5();
    ED();
    m8();
    w0();
    c9();
    ZF0();
    eV();
    iU();
    I6();
    VW9();
    nQ();
    QjA();
    S0();
    $n();
    jq();
    D0();
    KW9 = GA(VA(), 1), GY1 = GA(VA(), 1)
});
var zS3;
var HW9 = L(() => {
    DW9();
    zS3 = GA(VA(), 1)
});

function US3(A, Q, B, G = "") {
    return IF0.createElement(FW9, {
        abortSignal: Q,
        messages: B,
        initialDescription: G,
        onDone: A
    })
}
var IF0, $S3, CW9;
var EW9 = L(() => {
    ZF0();
    hQ();
    IF0 = GA(VA(), 1);
    $S3 = {
        aliases: ["bug"],
        type: "local-jsx",
        name: "feedback",
        description: "Submit feedback about Claude Code",
        argumentHint: "[report]",
        isEnabled: () => !(V0(process.env.CLAUDE_CODE_USE_BEDROCK) || V0(process.env.CLAUDE_CODE_USE_VERTEX) || V0(process.env.CLAUDE_CODE_USE_FOUNDRY) || process.env.DISABLE_FEEDBACK_COMMAND || process.env.DISABLE_BUG_COMMAND || process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC),
        isHidden: !1,
        async call(A, {
            abortController: Q,
            messages: B
        }, G) {
            let Z = G || "";
            return US3(A, Q.signal, B, Z)
        },
        userFacingName() {
            return "feedback"
        }
    }, CW9 = $S3
});
async function wS3({
    setMessages: A,
    readFileState: Q,
    getAppState: B,
    setAppState: G
}) {
    if (await tX0("clear", {
            getAppState: B,
            setAppState: G
        }), !bH()) await SJ();
    if (A(() => []), XK.cache.clear?.(), uD.cache.clear?.(), z30.cache.clear?.(), xF.cache.clear?.(), Qq(pQ()), Q.clear(), G) G((I) => ({
        ...I,
        fileHistory: {
            snapshots: [],
            trackedFiles: new Set
        },
        mcp: {
            clients: [],
            tools: [],
            commands: [],
            resources: {}
        }
    }));
    sC0(), await Zx();
    let Z = await zq("clear");
    if (Z.length > 0) A(() => Z)
}
var qS3, zW9;
var UW9 = L(() => {
    $y();
    uE();
    Bh();
    jt();
    S0();
    m_();
    GG();
    q1A();
    AO();
    qS3 = {
        type: "local",
        name: "clear",
        description: "Clear conversation history and free up context",
        aliases: ["reset", "new"],
        isEnabled: () => !0,
        isHidden: !1,
        supportsNonInteractive: !1,
        async call(A, Q) {
            return await wS3(Q), {
                type: "text",
                value: ""
            }
        },
        userFacingName() {
            return "clear"
        }
    }, zW9 = qS3
});
var NS3, $W9;
var wW9 = L(() => {
    $y();
    uE();
    TMA();
    N1A();
    v00();
    u1();
    J9();
    WZ1();
    hQ();
    NS3 = {
        type: "local",
        name: "compact",
        description: "Clear conversation history but keep a summary in context. Optional: /compact [instructions for summarization]",
        isEnabled: () => !V0(process.env.DISABLE_COMPACT),
        isHidden: !1,
        supportsNonInteractive: !0,
        argumentHint: "<optional custom summarization instructions>",
        async call(A, Q) {
            let {
                abortController: B,
                messages: G
            } = Q;
            if (G.length === 0) throw Error("No messages to compact");
            let Z = A.trim();
            try {
                if (!Z) {
                    let F = await W91(G, Q.agentId);
                    if (F) {
                        XK.cache.clear?.(), xF.cache.clear?.();
                        let V = JQA("tip"),
                            K = [...Q.options.verbose ? [] : ["(ctrl+o to see full summary)"], ...V ? [V] : []];
                        return {
                            type: "compact",
                            compactionResult: F,
                            displayText: oA.dim("Compacted " + K.join(`
`))
                        }
                    }
                }
                let Y = (await $i(G, void 0, Q)).messages,
                    J = await Q91(Y, Q, !1, Z);
                XK.cache.clear?.(), xF.cache.clear?.();
                let W = JQA("tip"),
                    X = [...Q.options.verbose ? [] : ["(ctrl+o to see full summary)"], ...J.userDisplayMessage ? [J.userDisplayMessage] : [], ...W ? [W] : []];
                return {
                    type: "compact",
                    compactionResult: J,
                    displayText: oA.dim("Compacted " + X.join(`
`))
                }
            } catch (I) {
                if (B.signal.aborted) throw Error("Compaction canceled.");
                else if (I instanceof Error && I.message === OMA) throw Error(OMA);
                else throw e(I instanceof Error ? I : Error(String(I))), Error(`Error during compaction: ${I}`)
            }
        },
        userFacingName() {
            return "compact"
        }
    }, $W9 = NS3
});

function qW9({
    context: A,
    flat: Q
} = {}) {
    let B = xF(),
        G = [];
    if (A?.readFileState) dl(A.readFileState).forEach((Y) => {
        let J = A.readFileState.get(Y);
        if (J && Y.endsWith("/CLAUDE.md") && !B.some((W) => W.path === Y)) G.push({
            path: Y,
            content: J.content,
            type: "Project",
            isNested: !0
        })
    });
    let Z = [...B, ...G];
    if (Z.length === 0) return null;
    if (Q) return lW.createElement(j, {
        flexDirection: "row",
        columnGap: 1,
        flexWrap: "wrap"
    }, Z.map((Y, J) => {
        let W = Q5(Y.path),
            X = Y.isNested ? "nested" : M00(Y.type),
            F = J < Z.length - 1 ? "," : "";
        return lW.createElement(j, {
            key: J,
            flexDirection: "row",
            flexShrink: 0
        }, lW.createElement($, null, X, " "), lW.createElement($, {
            dimColor: !0
        }, "(", W, ")"), lW.createElement($, null, F))
    }));
    let I = new Map;
    return lW.createElement(j, {
        flexDirection: "column"
    }, Z.map((Y, J) => {
        let W = Q5(Y.path),
            X = Y.isNested ? "nested: " : `${M00(Y.type)}: `,
            F = Y.parent ? (I.get(Y.parent) ?? 0) + 1 : 0;
        if (I.set(Y.path, F), F === 0) return lW.createElement($, {
            key: J
        }, lW.createElement($, {
            dimColor: !0
        }, " L "), `${X}${W}`);
        else {
            let V = "  ".repeat(F - 1);
            return lW.createElement($, {
                key: J
            }, " ".repeat(X.length + 2), V, lW.createElement($, {
                dimColor: !0
            }, " L "), W)
        }
    }))
}
var lW;
var NW9 = L(() => {
    hA();
    uE();
    M9();
    O00();
    uM();
    lW = GA(VA(), 1)
});

function LW9() {
    return []
}

function MW9(A, Q = null, B) {
    let G = A?.find((Z) => Z.name === "ide");
    if (Q) {
        let Z = aH(Q.ideType);
        if (Q.error)
            if (pM(Q.ideType)) return [{
                label: "IDE",
                value: sP.createElement($, null, tQ("error", B)(V1.cross), " Error installing", " ", Z, " plugin: ", Q.error, `
`, "Please restart your IDE or try installing from https://docs.claude.com/s/claude-code-jetbrains")
            }];
            else return [{
                label: "IDE",
                value: sP.createElement($, null, tQ("error", B)(V1.cross), " Error installing", " ", Z, " extension: ", Q.error, `
`, "Please restart your IDE and try again.")
            }];
        if (Q.installed)
            if (G && G.type === "connected")
                if (Q.installedVersion !== G.serverInfo?.version) return [{
                    label: "IDE",
                    value: `Connected to ${Z} extension version ${Q.installedVersion} (server version: ${G.serverInfo?.version})`
                }];
                else return [{
                    label: "IDE",
                    value: `Connected to ${Z} extension version ${Q.installedVersion}`
                }];
        else if (pM(Q.ideType)) return [{
            label: "IDE",
            value: sP.createElement($, null, "Installed ", Z, " plugin but connection is not established.", `
`, "Please restart your IDE or try installing from https://docs.claude.com/s/claude-code-jetbrains")
        }];
        else return [{
            label: "IDE",
            value: `Installed ${Z} extension`
        }]
    } else if (G) {
        let Z = hA0(G) ?? "IDE";
        if (G.type === "connected") return [{
            label: "IDE",
            value: `Connected to ${Z} extension`
        }];
        else return [{
            label: "IDE",
            value: `${tQ("error",B)(V1.cross)} Not connected to ${Z}`
        }]
    }
    return []
}

function OW9(A = [], Q) {
    let B = A.filter((G) => G.name !== "ide");
    if (!B.length) return [];
    return [{
        label: "MCP servers",
        value: sP.createElement(j, {
            flexDirection: "row"
        }, B.map((G, Z) => {
            let I = "";
            if (G.type === "connected") I = tQ("success", Q)(V1.tick);
            else if (G.type === "pending") I = tQ("inactive", Q)(V1.radioOff);
            else if (G.type === "needs-auth") I = tQ("warning", Q)(V1.triangleUpOutline);
            else if (G.type === "failed") I = tQ("error", Q)(V1.cross);
            else I = tQ("error", Q)(V1.cross);
            let Y = Z < B.length - 1 ? "," : "";
            return sP.createElement($, {
                key: Z
            }, G.name, " ", I, Y)
        }))
    }]
}

function RW9() {
    let A = D1A(),
        Q = H1A(),
        B = [];
    if (A.forEach((G) => {
            let Z = Q5(G.path);
            B.push(`Large ${Z} will impact performance (${QZ(G.content.length)} chars > ${QZ(zh)})`)
        }), Q && Q.content.length > IYA) B.push(`CLAUDE.md entries marked as IMPORTANT exceed ${QZ(IYA)} characters (${QZ(Q.content.length)} chars)`);
    return B
}

function TW9() {
    return [{
        label: "Setting sources",
        value: rs().map((B) => {
            switch (B) {
                case "userSettings":
                    return "User settings";
                case "projectSettings":
                    return "Shared project settings";
                case "localSettings":
                    return "Local";
                case "policySettings":
                    return "Enterprise managed policies";
                case "flagSettings":
                    return "Command line arguments"
            }
        })
    }]
}
async function PW9() {
    return (await yy()).map((Q) => Q.message)
}
async function jW9() {
    let A = await OIA(),
        Q = [],
        {
            errors: B
        } = Wa();
    if (B.length > 0) {
        let Z = Array.from(new Set(B.map((I) => I.file))).join(", ");
        Q.push(`Found invalid settings files: ${Z}. They will be ignored.`)
    }
    if (A.multipleInstallations.length > 1) Q.push(`Multiple installations detected (${A.multipleInstallations.length} found)`);
    if (A.warnings.forEach((G) => {
            Q.push(G.issue)
        }), A.hasUpdatePermissions === !1) Q.push("No write permissions for auto-updates (requires sudo)");
    if (A.configInstallMethod !== "not set") {
        let Z = {
            "npm-local": "local",
            "npm-global": "global",
            native: "native",
            development: "development",
            unknown: "unknown"
        } [A.installationType];
        if (Z && Z !== A.configInstallMethod) Q.push(`Installation config mismatch: running ${A.installationType} but config says ${A.configInstallMethod}`)
    }
    return Q
}

function SW9() {
    let A = $lA();
    if (!A) return [];
    let Q = [];
    if (A.subscription) Q.push({
        label: "Login method",
        value: `${A.subscription} Account`
    });
    if (A.tokenSource) Q.push({
        label: "Auth token",
        value: A.tokenSource
    });
    if (A.apiKeySource) Q.push({
        label: "API key",
        value: A.apiKeySource
    });
    if (A.organization) Q.push({
        label: "Organization",
        value: A.organization
    });
    if (A.email) Q.push({
        label: "Email",
        value: A.email
    });
    return Q
}

function _W9() {
    let A = J6(),
        Q = [];
    if (A !== "firstParty") {
        let Z = {
            bedrock: "AWS Bedrock",
            vertex: "Google Vertex AI",
            foundry: "Microsoft Foundry"
        } [A];
        Q.push({
            label: "API provider",
            value: Z
        })
    }
    if (A === "firstParty") {
        let Z = process.env.ANTHROPIC_BASE_URL;
        if (Z) Q.push({
            label: "Anthropic base URL",
            value: Z
        })
    } else if (A === "bedrock") {
        let Z = process.env.BEDROCK_BASE_URL;
        if (Z) Q.push({
            label: "Bedrock base URL",
            value: Z
        });
        if (Q.push({
                label: "AWS region",
                value: OBA()
            }), V0(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH)) Q.push({
            value: "AWS auth skipped"
        })
    } else if (A === "vertex") {
        let Z = process.env.VERTEX_BASE_URL;
        if (Z) Q.push({
            label: "Vertex base URL",
            value: Z
        });
        let I = process.env.ANTHROPIC_VERTEX_PROJECT_ID;
        if (I) Q.push({
            label: "GCP project",
            value: I
        });
        if (Q.push({
                label: "Default region",
                value: XR()
            }), V0(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)) Q.push({
            value: "GCP auth skipped"
        })
    } else if (A === "foundry") {
        let Z = process.env.ANTHROPIC_FOUNDRY_BASE_URL;
        if (Z) Q.push({
            label: "Microsoft Foundry base URL",
            value: Z
        });
        let I = process.env.ANTHROPIC_FOUNDRY_RESOURCE;
        if (I) Q.push({
            label: "Microsoft Foundry resource",
            value: I
        });
        if (V0(process.env.CLAUDE_CODE_SKIP_FOUNDRY_AUTH)) Q.push({
            value: "Microsoft Foundry auth skipped"
        })
    }
    let B = Fc();
    if (B) Q.push({
        label: "Proxy",
        value: B
    });
    let G = oR();
    if (process.env.NODE_EXTRA_CA_CERTS) Q.push({
        label: "Additional CA cert(s)",
        value: process.env.NODE_EXTRA_CA_CERTS
    });
    if (G) {
        if (G.cert && process.env.CLAUDE_CODE_CLIENT_CERT) Q.push({
            label: "mTLS client cert",
            value: process.env.CLAUDE_CODE_CLIENT_CERT
        });
        if (G.key && process.env.CLAUDE_CODE_CLIENT_KEY) Q.push({
            label: "mTLS client key",
            value: process.env.CLAUDE_CODE_CLIENT_KEY
        })
    }
    return Q
}

function kW9(A) {
    let Q = UM(A);
    if (A === null && AB()) {
        let B = YrA();
        if (bw()) Q = `${oA.bold("Default")} ${B}`;
        else Q = `${oA.bold("Sonnet")} ${B}`
    }
    return Q
}
var sP;
var yW9 = L(() => {
    hA();
    xP();
    hB();
    yJ();
    uE();
    M9();
    dK();
    s2();
    J9();
    Ih();
    hQ();
    Vc();
    X3A();
    RB();
    MJ();
    n2();
    hB();
    UF();
    sP = GA(VA(), 1)
});

function LS3() {
    return [{
        label: "Version",
        value: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION
    }, {
        label: "Session ID",
        value: G0()
    }, {
        label: "cwd",
        value: H0()
    }, ...SW9(), ..._W9()]
}

function MS3({
    appState: A,
    theme: Q,
    context: B
}) {
    return [{
        label: "Model",
        value: kW9(A.mainLoopModel)
    }, ...MW9(A.mcp.clients, B.options.ideInstallationStatus, Q), ...OW9(A.mcp.clients, Q), {
        label: "Memory",
        value: k6.createElement(qW9, {
            context: B,
            flat: !0
        })
    }, ...LW9(), ...TW9()]
}
async function OS3() {
    return [...await x0A() ? await PW9() : [], ...await jW9(), ...RW9()]
}

function RS3({
    value: A
}) {
    if (Array.isArray(A)) return k6.createElement(j, {
        flexWrap: "wrap",
        columnGap: 1,
        flexShrink: 99
    }, A.map((Q, B) => {
        return k6.createElement($, {
            key: B
        }, Q, B < A.length - 1 ? "," : "")
    }));
    if (typeof A === "string") return k6.createElement($, null, A);
    return A
}

function xW9({
    context: A
}) {
    let [Q] = _Q(), [B, G] = k6.useState([]), [Z, I] = k6.useState([]), Y = A.options.ideInstallationStatus, [J] = $B();
    return k6.useEffect(() => {
        async function W() {
            let X = [LS3(), MS3({
                    appState: Q,
                    theme: J,
                    context: A
                })],
                F = await OS3();
            G(X), I(F)
        }
        W()
    }, [Q, J, Y, A]), k6.createElement(j, {
        flexDirection: "column"
    }, k6.createElement(j, {
        flexDirection: "column",
        gap: 1,
        marginTop: 1
    }, B.map((W, X) => W.length > 0 && k6.createElement(j, {
        key: X,
        flexDirection: "column"
    }, W.map(({
        label: F,
        value: V
    }, K) => k6.createElement(j, {
        key: K,
        flexDirection: "row",
        gap: 1,
        flexShrink: 0
    }, F !== void 0 && k6.createElement($, {
        bold: !0
    }, F, ":"), k6.createElement(RS3, {
        value: V
    }))))), Z.length > 0 && k6.createElement(j, {
        flexDirection: "column",
        paddingBottom: 1
    }, k6.createElement($, {
        bold: !0
    }, "System Diagnostics"), Z.map((W, X) => k6.createElement(j, {
        key: X,
        flexDirection: "row",
        gap: 1,
        paddingX: 1
    }, k6.createElement($, {
        color: "error"
    }, V1.warning), typeof W === "string" ? k6.createElement($, {
        wrap: "wrap"
    }, W) : W)))), k6.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Esc to exit"))
}
var k6;
var vW9 = L(() => {
    hA();
    n2();
    H9();
    S0();
    NW9();
    xP();
    yW9();
    R2();
    k6 = GA(VA(), 1)
});

function ZY1({
    onThemeSelect: A,
    showIntroText: Q = !1,
    helpText: B = "",
    showHelpTextBelow: G = !1,
    hideEscToCancel: Z = !1,
    skipExitHandling: I = !1
}) {
    let [Y] = $B(), {
        setPreviewTheme: J,
        savePreview: W
    } = sh1(), X = DQ(I ? () => {} : void 0), V = f4.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, f4.createElement(j, {
        flexDirection: "column",
        gap: 1,
        marginX: 1
    }, Q ? f4.createElement($, null, "Let's get started.") : f4.createElement($, {
        bold: !0,
        color: "permission"
    }, "Theme"), f4.createElement(j, {
        flexDirection: "column"
    }, f4.createElement($, {
        bold: !0
    }, "Choose the text style that looks best with your terminal"), B && !G && f4.createElement($, {
        dimColor: !0
    }, B)), f4.createElement(M0, {
        options: [{
            label: "Dark mode",
            value: "dark"
        }, {
            label: "Light mode",
            value: "light"
        }, {
            label: "Dark mode (colorblind-friendly)",
            value: "dark-daltonized"
        }, {
            label: "Light mode (colorblind-friendly)",
            value: "light-daltonized"
        }, {
            label: "Dark mode (ANSI colors only)",
            value: "dark-ansi"
        }, {
            label: "Light mode (ANSI colors only)",
            value: "light-ansi"
        }],
        onFocus: (K) => {
            J(K)
        },
        onChange: (K) => {
            W(), A(K)
        },
        onCancel: I ? () => {
            W()
        } : async () => {
            W(), await S6(0)
        },
        visibleOptionCount: 6,
        defaultValue: Y
    })), f4.createElement(j, {
        flexDirection: "column",
        width: "100%",
        marginBottom: 1,
        borderTop: !0,
        borderBottom: !0,
        borderLeft: !1,
        borderRight: !1,
        borderStyle: "dashed",
        borderColor: "subtle",
        borderDimColor: !0
    }, f4.createElement(Z$, {
        patch: {
            oldStart: 1,
            newStart: 1,
            oldLines: 3,
            newLines: 3,
            lines: [" function greet() {", '-  console.log("Hello, World!");', '+  console.log("Hello, Claude!");', " }"]
        },
        dim: !1,
        filePath: "demo.js",
        skipHighlighting: !0
    })));
    if (!Q) return f4.createElement(f4.Fragment, null, f4.createElement(j, {
        flexDirection: "column"
    }, V), f4.createElement(j, {
        marginX: 1
    }, G && B && f4.createElement(j, {
        marginLeft: 3,
        marginTop: 1
    }, f4.createElement($, {
        dimColor: !0
    }, B)), !Z && f4.createElement(j, {
        marginLeft: 3
    }, f4.createElement($, {
        dimColor: !0
    }, X.pending ? f4.createElement(f4.Fragment, null, "Press ", X.keyName, " again to exit") : f4.createElement(f4.Fragment, null, "Esc to cancel")))));
    return V
}
var f4;
var YF0 = L(() => {
    hA();
    T6();
    Zn();
    c9();
    _J();
    hA();
    f4 = GA(VA(), 1)
});

function YY1({
    initial: A,
    sessionModel: Q,
    onSelect: B,
    isStandaloneCommand: G
}) {
    let Z = A === null ? JF0 : A,
        [I, Y] = IY1.useState(Z),
        J = IY1.useMemo(() => JrA(), []),
        W = DQ(),
        X = i6(),
        F = AB() && x4() === "pro",
        V = X?.hasExtraUsageEnabled === !0,
        K = 10,
        D = Math.min(10, J.length),
        H = Math.max(0, J.length - D);
    return X4.createElement(j, {
        flexDirection: "column",
        width: "100%"
    }, G && X4.createElement(J3, {
        dividerColor: "permission"
    }), X4.createElement(j, {
        flexDirection: "column",
        paddingX: G ? 1 : 0
    }, X4.createElement(j, {
        flexDirection: "column"
    }, X4.createElement(j, {
        marginBottom: 1,
        flexDirection: "column"
    }, X4.createElement($, {
        color: "remember",
        bold: !0
    }, "Select model"), X4.createElement($, {
        dimColor: !0
    }, "Switch between Claude models. Applies to this session and future Claude Code sessions. For other/previous model names, specify with --model.")), Q && X4.createElement(j, {
        marginBottom: 1,
        flexDirection: "column"
    }, X4.createElement($, {
        dimColor: !0
    }, "Currently using ", UM(Q), " for this session (set by plan mode). Selecting a model will undo this.")), X4.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, X4.createElement(j, {
        flexDirection: "column"
    }, X4.createElement(M0, {
        defaultValue: I,
        focusValue: J.some((C) => C.value === I) ? I : J[0]?.value ?? void 0,
        options: J.map((C) => ({
            ...C,
            value: C.value === null ? JF0 : C.value
        })),
        onFocus: (C) => Y(C),
        onChange: (C) => B(C === JF0 ? null : C),
        onCancel: () => {},
        visibleOptionCount: D
    })), H > 0 && X4.createElement(j, {
        paddingLeft: 3
    }, X4.createElement($, {
        dimColor: !0
    }, "and ", H, " more…"))), F && X4.createElement(j, {
        marginBottom: 1,
        flexDirection: "column"
    }, V ? X4.createElement($, {
        dimColor: !0
    }, "You now have access to Opus 4.5 by paying with your extra usage") : X4.createElement($, {
        dimColor: !0
    }, "Want Opus 4.5? Run ", X4.createElement($, {
        color: "remember"
    }, "/upgrade"), " to get the Max plan or ", X4.createElement($, {
        color: "remember"
    }, "/extra-usage"), " ", "to pay per use"))), G && X4.createElement($, {
        dimColor: !0,
        italic: !0
    }, W.pending ? X4.createElement(X4.Fragment, null, "Press ", W.keyName, " again to exit") : X4.createElement(X4.Fragment, null, "Enter to confirm · Esc to exit"))))
}
var X4, IY1, JF0 = "__NO_PREFERENCE__";
var WF0 = L(() => {
    hA();
    s2();
    T6();
    c9();
    hB();
    eV();
    X4 = GA(VA(), 1), IY1 = GA(VA(), 1)
});

function JY1({
    onDone: A,
    isStandaloneDialog: Q
}) {
    LC.default.useEffect(() => {
        BA("tengu_claude_md_includes_dialog_shown", {})
    }, []);

    function B(Z) {
        let I = M5();
        if (Z === "no") BA("tengu_claude_md_external_includes_dialog_declined", {}), aI({
            ...I,
            hasClaudeMdExternalIncludesApproved: !1,
            hasClaudeMdExternalIncludesWarningShown: !0
        });
        else BA("tengu_claude_md_external_includes_dialog_accepted", {}), aI({
            ...I,
            hasClaudeMdExternalIncludesApproved: !0,
            hasClaudeMdExternalIncludesWarningShown: !0
        });
        A()
    }
    let G = DQ();
    return h1((Z, I) => {
        if (I.escape) {
            B("no");
            return
        }
    }), LC.default.createElement(LC.default.Fragment, null, LC.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        paddingX: Q ? 1 : 0,
        marginBottom: 1,
        borderStyle: Q ? "round" : void 0,
        borderTop: Q,
        borderLeft: !1,
        borderRight: !1,
        borderBottom: !1,
        borderColor: "warning"
    }, LC.default.createElement($, {
        bold: !0,
        color: "warning"
    }, "Allow external CLAUDE.md file imports?"), LC.default.createElement($, null, "This project's CLAUDE.md imports files outside the current working directory. Never allow this for third-party repositories."), LC.default.createElement($, {
        dimColor: !0
    }, "Important: Only use Claude Code with files you trust. Accessing untrusted files may pose security risks", " ", LC.default.createElement(a4, {
        url: "https://code.claude.com/docs/en/security"
    }), " "), LC.default.createElement(M0, {
        options: [{
            label: "Yes, allow external imports",
            value: "yes"
        }, {
            label: "No, disable external imports",
            value: "no"
        }],
        onChange: (Z) => B(Z),
        onCancel: () => B("no")
    })), Q && LC.default.createElement(j, {
        marginLeft: 1
    }, LC.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, G.pending ? LC.default.createElement(LC.default.Fragment, null, "Press ", G.keyName, " again to exit") : LC.default.createElement(LC.default.Fragment, null, "Enter to confirm · Esc to disable external includes"))))
}
var LC;
var XF0 = L(() => {
    hA();
    T6();
    jQ();
    w0();
    c9();
    hA();
    LC = GA(VA(), 1)
});

function bW9(A) {
    return Object.entries(A).map(([Q, B]) => ({
        label: B?.name ?? TS3,
        value: Q,
        description: B?.description ?? PS3
    }))
}

function WY1({
    initialStyle: A,
    onComplete: Q,
    onCancel: B,
    isStandaloneCommand: G
}) {
    let [Z, I] = SQA.useState([]), [Y, J] = SQA.useState(!0);
    SQA.useEffect(() => {
        _QA().then((X) => {
            let F = bW9(X);
            I(F), J(!1)
        }).catch(() => {
            let X = bW9(zQA);
            I(X), J(!1)
        })
    }, []);
    let W = SQA.useCallback((X) => {
        Q(X)
    }, [Q]);
    return eq.createElement(kD, {
        title: "Preferred output style",
        onCancel: B,
        borderDimColor: !0,
        hideInputGuide: !G,
        hideBorder: !G
    }, eq.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, eq.createElement(j, {
        marginTop: 1
    }, eq.createElement($, {
        dimColor: !0
    }, "This changes how Claude Code communicates with you")), Y ? eq.createElement($, {
        dimColor: !0
    }, "Loading output styles…") : eq.createElement(M0, {
        options: Z,
        onChange: W,
        onCancel: B,
        visibleOptionCount: 10,
        defaultValue: A
    })))
}
var eq, SQA, TS3 = "Default",
    PS3 = "Claude completes coding tasks efficiently and provides concise responses";
var FF0 = L(() => {
    hA();
    T5();
    ry();
    Di();
    eq = GA(VA(), 1), SQA = GA(VA(), 1)
});

function fW9({
    onClose: A,
    context: Q,
    setTabsHidden: B,
    setIsWarning: G,
    setHideMargin: Z
}) {
    let [I, Y] = $B(), [J, W] = kQA.useState(L1()), X = yQ.useRef(L1()), [F, V] = kQA.useState(c0()), [K, D] = kQA.useState(F?.outputStyle || EK), H = yQ.useRef(K), [C, E] = kQA.useState(0), [{
        mainLoopModel: z,
        verbose: w
    }, N] = _Q(), [q, R] = kQA.useState({}), [P, y] = kQA.useState(null), v = NB1(Q.options.mcpClients), x = !V0(process.env.CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING), p = e10();
    async function u(k) {
        BA("tengu_config_model_changed", {
            from_model: z,
            to_model: k
        }), N((QA) => ({
            ...QA,
            mainLoopModel: k
        })), R((QA) => {
            let IA = UM(k);
            if ("model" in QA) {
                let {
                    model: HA,
                    ...wA
                } = QA;
                return {
                    ...wA,
                    model: IA
                }
            }
            return {
                ...QA,
                model: IA
            }
        })
    }

    function o(k) {
        let d = {
            ...L1(),
            verbose: k
        };
        d0(d), W(d), N((QA) => ({
            ...QA,
            verbose: k
        })), R((QA) => {
            if ("verbose" in QA) {
                let {
                    verbose: IA,
                    ...HA
                } = QA;
                return HA
            }
            return {
                ...QA,
                verbose: k
            }
        })
    }
    let l = [{
        id: "autoCompactEnabled",
        label: "Auto-compact",
        value: J.autoCompactEnabled,
        type: "boolean",
        onChange(k) {
            let d = {
                ...L1(),
                autoCompactEnabled: k
            };
            d0(d), W(d), BA("tengu_auto_compact_setting_changed", {
                enabled: k
            })
        }
    }, {
        id: "spinnerTipsEnabled",
        label: "Show tips",
        value: F?.spinnerTipsEnabled ?? !0,
        type: "boolean",
        onChange(k) {
            cB("localSettings", {
                spinnerTipsEnabled: k
            }), V((d) => ({
                ...d,
                spinnerTipsEnabled: k
            })), BA("tengu_tips_setting_changed", {
                enabled: k
            })
        }
    }, ...x ? [{
        id: "fileCheckpointingEnabled",
        label: "Rewind code (checkpoints)",
        value: J.fileCheckpointingEnabled,
        type: "boolean",
        onChange(k) {
            let d = {
                ...L1(),
                fileCheckpointingEnabled: k
            };
            d0(d), W(d), BA("tengu_file_history_snapshots_setting_changed", {
                enabled: k
            })
        }
    }] : [], {
        id: "verbose",
        label: "Verbose output",
        value: w,
        type: "boolean",
        onChange: o
    }, {
        id: "terminalProgressBarEnabled",
        label: "Terminal progress bar",
        value: J.terminalProgressBarEnabled,
        type: "boolean",
        onChange(k) {
            let d = {
                ...L1(),
                terminalProgressBarEnabled: k
            };
            d0(d), W(d), BA("tengu_terminal_progress_bar_setting_changed", {
                enabled: k
            })
        }
    }, {
        id: "defaultPermissionMode",
        label: "Default permission mode",
        value: F?.permissions?.defaultMode || "default",
        options: (() => {
            let k = ["default", "plan"],
                d = ["bypassPermissions"];
            return [...k, ...OR.filter((QA) => !k.includes(QA) && !d.includes(QA))]
        })(),
        type: "enum",
        onChange(k) {
            let d = IvA(k),
                QA = cB("userSettings", {
                    permissions: {
                        ...F?.permissions,
                        defaultMode: d
                    }
                });
            if (QA.error) {
                e(QA.error);
                return
            }
            V((IA) => ({
                ...IA,
                permissions: {
                    ...IA?.permissions,
                    defaultMode: d
                }
            })), R((IA) => ({
                ...IA,
                defaultPermissionMode: k
            })), BA("tengu_config_changed", {
                setting: "defaultPermissionMode",
                value: k
            })
        }
    }, {
        id: "respectGitignore",
        label: "Respect .gitignore in file picker",
        value: J.respectGitignore,
        type: "boolean",
        onChange(k) {
            let d = {
                ...L1(),
                respectGitignore: k
            };
            d0(d), W(d), BA("tengu_respect_gitignore_setting_changed", {
                enabled: k
            })
        }
    }, {
        id: "theme",
        label: "Theme",
        value: I,
        type: "managedEnum",
        onChange: Y
    }, {
        id: "notifChannel",
        label: "Notifications",
        value: J.preferredNotifChannel,
        options: ["auto", "iterm2", "terminal_bell", "iterm2_with_bell", "kitty", "ghostty", "notifications_disabled"],
        type: "enum",
        onChange(k) {
            let d = {
                ...L1(),
                preferredNotifChannel: k
            };
            d0(d), W(d)
        }
    }, {
        id: "outputStyle",
        label: "Output style",
        value: K,
        type: "managedEnum",
        onChange: () => {}
    }, {
        id: "editorMode",
        label: "Editor mode",
        value: J.editorMode === "emacs" ? "normal" : J.editorMode || "normal",
        options: ["normal", "vim"],
        type: "enum",
        onChange(k) {
            let d = {
                ...L1(),
                editorMode: k
            };
            d0(d), W(d), BA("tengu_editor_mode_changed", {
                mode: k,
                source: "config_panel"
            })
        }
    }, {
        id: "model",
        label: "Model",
        value: z === null ? "Default (recommended)" : z,
        type: "managedEnum",
        onChange: u
    }, ...v ? [{
        id: "diffTool",
        label: "Diff tool",
        value: J.diffTool ?? "auto",
        options: ["terminal", "auto"],
        type: "enum",
        onChange(k) {
            let d = {
                ...L1(),
                diffTool: k
            };
            d0(d), W(d), BA("tengu_diff_tool_changed", {
                tool: k,
                source: "config_panel"
            })
        }
    }] : [], ...!_F() ? [{
        id: "autoConnectIde",
        label: "Auto-connect to IDE (external terminal)",
        value: J.autoConnectIde ?? !1,
        type: "boolean",
        onChange(k) {
            let d = {
                ...L1(),
                autoConnectIde: k
            };
            d0(d), W(d), BA("tengu_auto_connect_ide_changed", {
                enabled: k,
                source: "config_panel"
            })
        }
    }] : [], ..._F() ? [{
        id: "autoInstallIdeExtension",
        label: "Auto-install IDE extension",
        value: J.autoInstallIdeExtension ?? !0,
        type: "boolean",
        onChange(k) {
            let d = {
                ...L1(),
                autoInstallIdeExtension: k
            };
            d0(d), W(d), BA("tengu_auto_install_ide_extension_changed", {
                enabled: k,
                source: "config_panel"
            })
        }
    }] : [], ...p ? [{
        id: "showExternalIncludesDialog",
        label: "External CLAUDE.md includes",
        value: (() => {
            if (M5().hasClaudeMdExternalIncludesApproved) return "true";
            else return "false"
        })(),
        type: "managedEnum",
        onChange() {}
    }] : [], ...process.env.ANTHROPIC_API_KEY ? [{
        id: "apiKey",
        label: `Use custom API key: ${oA.bold(xw(process.env.ANTHROPIC_API_KEY))}`,
        value: Boolean(process.env.ANTHROPIC_API_KEY && J.customApiKeyResponses?.approved?.includes(xw(process.env.ANTHROPIC_API_KEY))),
        type: "boolean",
        onChange(k) {
            let d = {
                ...L1()
            };
            if (!d.customApiKeyResponses) d.customApiKeyResponses = {
                approved: [],
                rejected: []
            };
            if (!d.customApiKeyResponses.approved) d.customApiKeyResponses.approved = [];
            if (!d.customApiKeyResponses.rejected) d.customApiKeyResponses.rejected = [];
            if (process.env.ANTHROPIC_API_KEY) {
                let QA = xw(process.env.ANTHROPIC_API_KEY);
                if (k) d.customApiKeyResponses.approved = [...d.customApiKeyResponses.approved.filter((IA) => IA !== QA), QA], d.customApiKeyResponses.rejected = d.customApiKeyResponses.rejected.filter((IA) => IA !== QA);
                else d.customApiKeyResponses.approved = d.customApiKeyResponses.approved.filter((IA) => IA !== QA), d.customApiKeyResponses.rejected = [...d.customApiKeyResponses.rejected.filter((IA) => IA !== QA), QA]
            }
            d0(d), W(d)
        }
    }] : []];
    return h1((k, d) => {
        if (d.escape) {
            if (P !== null) {
                B(!1), G(!1), Z(!1), y(null);
                return
            }
            let IA = Object.entries(q).map(([KA, SA]) => {
                    return BA("tengu_config_changed", {
                        key: KA,
                        value: SA
                    }), `Set ${KA} to ${oA.bold(SA)}`
                }),
                HA = Boolean(process.env.ANTHROPIC_API_KEY && X.current.customApiKeyResponses?.approved?.includes(xw(process.env.ANTHROPIC_API_KEY))),
                wA = Boolean(process.env.ANTHROPIC_API_KEY && J.customApiKeyResponses?.approved?.includes(xw(process.env.ANTHROPIC_API_KEY)));
            if (HA !== wA) IA.push(`${wA?"Enabled":"Disabled"} custom API key`), BA("tengu_config_changed", {
                key: "env.ANTHROPIC_API_KEY",
                value: wA
            });
            if (J.theme !== X.current.theme) IA.push(`Set theme to ${oA.bold(J.theme)}`);
            if (J.preferredNotifChannel !== X.current.preferredNotifChannel) IA.push(`Set notifications to ${oA.bold(J.preferredNotifChannel)}`);
            if (K !== H.current) IA.push(`Set output style to ${oA.bold(K)}`);
            if (J.editorMode !== X.current.editorMode) IA.push(`Set editor mode to ${oA.bold(J.editorMode||"emacs")}`);
            if (J.diffTool !== X.current.diffTool) IA.push(`Set diff tool to ${oA.bold(J.diffTool)}`);
            if (J.autoConnectIde !== X.current.autoConnectIde) IA.push(`${J.autoConnectIde?"Enabled":"Disabled"} auto-connect to IDE`);
            if (J.autoInstallIdeExtension !== X.current.autoInstallIdeExtension) IA.push(`${J.autoInstallIdeExtension?"Enabled":"Disabled"} auto-install IDE extension`);
            if (J.autoCompactEnabled !== X.current.autoCompactEnabled) IA.push(`${J.autoCompactEnabled?"Enabled":"Disabled"} auto-compact`);
            if (J.respectGitignore !== X.current.respectGitignore) IA.push(`${J.respectGitignore?"Enabled":"Disabled"} respect .gitignore in file picker`);
            if (J.terminalProgressBarEnabled !== X.current.terminalProgressBarEnabled) IA.push(`${J.terminalProgressBarEnabled?"Enabled":"Disabled"} terminal progress bar`);
            if (IA.length > 0) A(IA.join(`
`));
            else A("Config dialog dismissed", {
                display: "system"
            });
            return
        }
        if (P !== null) return;

        function QA() {
            let IA = l[C];
            if (!IA || !IA.onChange) return;
            if (IA.type === "boolean") {
                IA.onChange(!IA.value);
                return
            }
            if (IA.id === "theme" && d.return) {
                y(0), B(!0), Z(!0);
                return
            }
            if (IA.id === "model" && d.return) {
                y(1), B(!0);
                return
            }
            if (IA.id === "showExternalIncludesDialog" && d.return) {
                y(2), B(!0), G(!0);
                return
            }
            if (IA.id === "outputStyle" && d.return) {
                y(3), B(!0);
                return
            }
            if (IA.type === "enum") {
                let wA = (IA.options.indexOf(IA.value) + 1) % IA.options.length;
                IA.onChange(IA.options[wA]);
                return
            }
        }
        if (d.return || k === " ") {
            QA();
            return
        }
        if (d.upArrow) E((IA) => Math.max(0, IA - 1));
        if (d.downArrow) E((IA) => Math.min(l.length - 1, IA + 1))
    }), yQ.createElement(j, {
        flexDirection: "column",
        width: "100%"
    }, P === 0 ? yQ.createElement(yQ.Fragment, null, yQ.createElement(ZY1, {
        initialTheme: I,
        onThemeSelect: (k) => {
            Y(k), y(null), Z(!1), B(!1)
        },
        hideEscToCancel: !0,
        skipExitHandling: !0
    }), yQ.createElement(j, {
        marginLeft: 1
    }, yQ.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Esc to exit"))) : P === 1 ? yQ.createElement(yQ.Fragment, null, yQ.createElement(YY1, {
        initial: z,
        onSelect: (k) => {
            u(k), y(null), B(!1)
        }
    }), yQ.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Enter to confirm · Esc to exit")) : P === 2 ? yQ.createElement(yQ.Fragment, null, yQ.createElement(JY1, {
        onDone: () => {
            y(null), B(!1), G(!1)
        }
    }), yQ.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Enter to confirm · Esc to disable external includes")) : P === 3 ? yQ.createElement(yQ.Fragment, null, yQ.createElement(WY1, {
        initialStyle: K,
        onComplete: (k) => {
            D(k ?? EK), y(null), B(!1), cB("localSettings", {
                outputStyle: k
            }), BA("tengu_output_style_changed", {
                style: k ?? EK,
                source: "config_panel",
                settings_source: "localSettings"
            })
        },
        onCancel: () => {
            y(null), B(!1)
        }
    }), yQ.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Enter to confirm · Esc to exit")) : yQ.createElement(j, {
        flexDirection: "column",
        marginY: 1,
        gap: 1
    }, yQ.createElement($, null, "Configure Claude Code preferences"), yQ.createElement(j, {
        flexDirection: "column"
    }, l.map((k, d) => {
        let QA = d === C;
        return yQ.createElement(j, {
            key: k.id
        }, yQ.createElement(j, {
            width: 44
        }, yQ.createElement($, {
            color: QA ? "suggestion" : void 0
        }, QA ? V1.pointer : " ", " ", k.label)), yQ.createElement(j, null, k.type === "boolean" ? yQ.createElement($, {
            color: QA ? "suggestion" : void 0
        }, k.value.toString()) : k.id === "theme" ? yQ.createElement($, {
            color: QA ? "suggestion" : void 0
        }, (() => {
            return {
                dark: "Dark mode",
                light: "Light mode",
                "dark-daltonized": "Dark mode (colorblind-friendly)",
                "light-daltonized": "Light mode (colorblind-friendly)",
                "dark-ansi": "Dark mode (ANSI colors only)",
                "light-ansi": "Light mode (ANSI colors only)"
            } [k.value.toString()] || k.value.toString()
        })()) : k.id === "notifChannel" ? yQ.createElement($, {
            color: QA ? "suggestion" : void 0
        }, (() => {
            switch (k.value.toString()) {
                case "auto":
                    return "Auto";
                case "iterm2":
                    return yQ.createElement(yQ.Fragment, null, "iTerm2 ", yQ.createElement($, {
                        dimColor: !0
                    }, "(OSC 9)"));
                case "terminal_bell":
                    return yQ.createElement(yQ.Fragment, null, "Terminal Bell ", yQ.createElement($, {
                        dimColor: !0
                    }, "(\\a)"));
                case "kitty":
                    return yQ.createElement(yQ.Fragment, null, "Kitty ", yQ.createElement($, {
                        dimColor: !0
                    }, "(OSC 99)"));
                case "ghostty":
                    return yQ.createElement(yQ.Fragment, null, "Ghostty ", yQ.createElement($, {
                        dimColor: !0
                    }, "(OSC 777)"));
                case "iterm2_with_bell":
                    return "iTerm2 w/ Bell";
                case "notifications_disabled":
                    return "Disabled";
                default:
                    return k.value.toString()
            }
        })()) : k.id === "defaultPermissionMode" ? yQ.createElement($, {
            color: QA ? "suggestion" : void 0
        }, Iv(k.value)) : yQ.createElement($, {
            color: QA ? "suggestion" : void 0
        }, k.value.toString())))
    })), yQ.createElement($, {
        dimColor: !0,
        italic: !0
    }, "Enter/Space to change · Esc to exit")))
}
var yQ, kQA;
var hW9 = L(() => {
    hA();
    n2();
    jQ();
    nEA();
    jQ();
    J9();
    Bw();
    u1();
    w0();
    YF0();
    H9();
    WF0();
    s2();
    XF0();
    FF0();
    uE();
    yJ();
    RB();
    ry();
    hQ();
    yQ = GA(VA(), 1), kQA = GA(VA(), 1)
});
async function VF0() {
    if (!AB()) return {};
    let A = U6();
    if (A && xm(A.expiresAt)) return null;
    let Q = VI();
    if (Q.error) throw Error(`Auth error: ${Q.error}`);