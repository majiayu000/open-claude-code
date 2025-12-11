/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: prompts_010.js
 * 处理时间: 2025-12-09T03:41:38.275Z
 * 变量映射: 5 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 10/10
 * Lines: 442679 - 444178 (1500 lines)
 * Original file: cli.js
 */

    if (Q) {
        let G = `/mnt/c${Q.replace(/^[A-Z]:/,"")}/AppData/Roaming/Claude/claude_desktop_config.json`;
        if (OA().existsSync(G)) return G
    }
    try {
        if (OA().existsSync("/mnt/c/Users")) {
            let G = OA().readdirSync("/mnt/c/Users");
            for (let Z of G) {
                if (Z.name === "Public" || Z.name === "Default" || Z.name === "Default User" || Z.name === "All Users") continue;
                let I = hK0.join("/mnt/c/Users", Z.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
                if (OA().existsSync(I)) return I
            }
        }
    } catch (B) {
        e(B instanceof Error ? B : Error(String(B)))
    }
    throw Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.")
}

function oE9() {
    if (!OH1.includes(uQ())) throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
    try {
        let A = hb3();
        if (!OA().existsSync(A)) return {};
        let Q = OA().readFileSync(A, {
                encoding: "utf8"
            }),
            B = S7(Q);
        if (!B || typeof B !== "object") return {};
        let G = B.mcpServers;
        if (!G || typeof G !== "object") return {};
        let Z = {};
        for (let [I, Y] of Object.entries(G)) {
            if (!Y || typeof Y !== "object") continue;
            let J = jC1.safeParse(Y);
            if (J.success) Z[I] = J.data
        }
        return Z
    } catch (A) {
        return e(A instanceof Error ? A : Error(String(A))), {}
    }
}
var tE9 = lazyLoader(() => {
    zV();
    u1();
    s9A();
    s5();
    o0()
});

function $J1({
    customApiKeyTruncated: A,
    onDone: Q
}) {
    function B(Z) {
        let I = L1();
        switch (Z) {
            case "yes": {
                d0({
                    ...I,
                    customApiKeyResponses: {
                        ...I.customApiKeyResponses,
                        approved: [...I.customApiKeyResponses?.approved ?? [], A]
                    }
                }), Q();
                break
            }
            case "no": {
                d0({
                    ...I,
                    customApiKeyResponses: {
                        ...I.customApiKeyResponses,
                        rejected: [...I.customApiKeyResponses?.rejected ?? [], A]
                    }
                }), Q();
                break
            }
        }
    }
    let G = DQ();
    return TC.default.createElement(TC.default.Fragment, null, TC.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "warning"
    }, TC.default.createElement(TextComponent, {
        bold: !0,
        color: "warning"
    }, "Detected a custom API key in your environment"), TC.default.createElement(TextComponent, null, TC.default.createElement(TextComponent, {
        bold: !0
    }, "ANTHROPIC_API_KEY"), TC.default.createElement(TextComponent, null, ": sk-ant-...", A)), TC.default.createElement(TextComponent, null, "Do you want to use this API key?"), TC.default.createElement(M0, {
        defaultValue: "no",
        focusValue: "no",
        options: [{
            label: "Yes",
            value: "yes"
        }, {
            label: `No (TextComponent{oA.bold("recommended")})`,
            value: "no"
        }],
        onChange: (Z) => B(Z),
        onCancel: () => B("no")
    })), TC.default.createElement(j, {
        marginLeft: 3
    }, TC.default.createElement(TextComponent, {
        dimColor: !0
    }, G.pending ? TC.default.createElement(TC.default.Fragment, null, "Press ", G.keyName, " again to exit") : TC.default.createElement(TC.default.Fragment, null, "Enter to confirm ", V1.dot, " Esc to cancel"))))
}
var TC;
var gK0 = lazyLoader(() => {
    hA();
    jQ();
    T6();
    c9();
    J9();
    n2();
    TC = esmImport(VA(), 1)
});
async function gb3() {
    try {
        let A = ["https://api.anthropic.com/api/hello", "https://console.anthropic.com/v1/oauth/hello"],
            Q = async (Z) => {
                try {
                    let I = await GQ.get(Z, {
                        headers: {
                            "User-Agent": Wp()
                        }
                    });
                    if (I.status !== 200) return {
                        success: !1,
                        error: `Failed to connect to TextComponent{new URL(Z).hostname}: Status TextComponent{I.status}`
                    };
                    return {
                        success: !0
                    }
                } catch (I) {
                    return {
                        success: !1,
                        error: `Failed to connect to TextComponent{new URL(Z).hostname}: TextComponent{I instanceof Error?I.code||I.message:String(I)}`
                    }
                }
            }, G = (await Promise.all(A.map(Q))).find((Z) => !Z.success);
        if (G) BA("tengu_preflight_check_failed", {
            isConnectivityError: !1,
            hasErrorMessage: !!G.error
        });
        return G || {
            success: !0
        }
    } catch (A) {
        return e(A), BA("tengu_preflight_check_failed", {
            isConnectivityError: !0
        }), {
            success: !1,
            error: `Connectivity check error: TextComponent{A instanceof Error?A.code||A.message:String(A)}`
        }
    }
}

function eE9({
    onSuccess: A
}) {
    let [Q, B] = LK.useState(null), [G, Z] = LK.useState(!0), I = e31(1000) && G;
    return LK.useEffect(() => {
        async function Y() {
            let J = await gb3();
            B(J), Z(!1)
        }
        Y()
    }, []), LK.useEffect(() => {
        if (Q?.success) A();
        else if (Q && !Q.success) {
            let Y = setTimeout(() => process.exit(1), 100);
            return () => clearTimeout(Y)
        }
    }, [Q, A]), LK.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        paddingLeft: 1
    }, G && I ? LK.default.createElement(j, {
        paddingLeft: 1
    }, LK.default.createElement(e9, null), LK.default.createElement(TextComponent, null, "Checking connectivity...")) : !Q?.success && !G && LK.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, LK.default.createElement(TextComponent, {
        color: "error"
    }, "Unable to connect to Anthropic services"), LK.default.createElement(TextComponent, {
        color: "error"
    }, Q?.error), LK.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, LK.default.createElement(TextComponent, null, "Please check your internet connection and network settings."), LK.default.createElement(TextComponent, null, "Note: Claude Code might not be available in your country. Check supported countries at", " ", LK.default.createElement(TextComponent, {
        color: "suggestion"
    }, "https://anthropic.com/supported-countries")))))
}
var LK;
var Az9 = lazyLoader(() => {
    hA();
    XE();
    u1();
    zI();
    _G0();
    w0();
    w3();
    LK = esmImport(VA(), 1)
});

function qJ1() {
    let [A] = $B(), Q = "Welcome to Claude Code";
    if (m0.terminal === "Apple_Terminal") return R0.default.createElement(ub3, {
        theme: A,
        welcomeMessage: "Welcome to Claude Code"
    });
    if (["light", "light-daltonized", "light-ansi"].includes(A)) return R0.default.createElement(j, {
        width: wJ1
    }, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        color: "claude"
    }, "Welcome to Claude Code", " "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "v", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION, " ")), R0.default.createElement(TextComponent, null, "…………………………………………………………………………………………………………………………………………………………"), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "            ░░░░░░                                        "), R0.default.createElement(TextComponent, null, "    ░░░   ░░░░░░░░░░                                      "), R0.default.createElement(TextComponent, null, "   ░░░░░░░░░░░░░░░░░░░                                    "), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                           ░░░░"), R0.default.createElement(TextComponent, null, "                     ██    ")), R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                         ░░░░░░░░░░"), R0.default.createElement(TextComponent, null, "               ██▒▒██  ")), R0.default.createElement(TextComponent, null, "                                            ▒▒      ██   ▒"), R0.default.createElement(TextComponent, null, "      ", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, " █████████ "), "                         ▒▒░░▒▒      ▒ ▒▒"), R0.default.createElement(TextComponent, null, "      ", R0.default.createElement(TextComponent, {
        color: "clawd_body",
        backgroundColor: "clawd_background"
    }, "██▄█████▄██"), "                           ▒▒         ▒▒ "), R0.default.createElement(TextComponent, null, "      ", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, " █████████ "), "                          ░          ▒   "), R0.default.createElement(TextComponent, null, "…………………", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, "█ █   █ █"), "……………………………………………………………………░…………………………▒…………")));
    return R0.default.createElement(j, {
        width: wJ1
    }, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        color: "claude"
    }, "Welcome to Claude Code", " "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "v", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION, " ")), R0.default.createElement(TextComponent, null, "…………………………………………………………………………………………………………………………………………………………"), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "     *                                       █████▓▓░     "), R0.default.createElement(TextComponent, null, "                                 *         ███▓░     ░░   "), R0.default.createElement(TextComponent, null, "            ░░░░░░                        ███▓░           "), R0.default.createElement(TextComponent, null, "    ░░░   ░░░░░░░░░░                      ███▓░           "), R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, null, "   ░░░░░░░░░░░░░░░░░░░    "), R0.default.createElement(TextComponent, {
        bold: !0
    }, "*"), R0.default.createElement(TextComponent, null, "                ██▓░░      ▓   ")), R0.default.createElement(TextComponent, null, "                                             ░▓▓███▓▓░    "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, " *                                 ░░░░                   "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                                 ░░░░░░░░                 "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                               ░░░░░░░░░░░░░░░░           "), R0.default.createElement(TextComponent, null, "      ", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, " █████████ "), "                                       ", R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "*"), R0.default.createElement(TextComponent, null, " ")), R0.default.createElement(TextComponent, null, "      ", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, "██▄█████▄██"), R0.default.createElement(TextComponent, null, "                        "), R0.default.createElement(TextComponent, {
        bold: !0
    }, "*"), R0.default.createElement(TextComponent, null, "                ")), R0.default.createElement(TextComponent, null, "      ", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, " █████████ "), "     *                                   "), R0.default.createElement(TextComponent, null, "…………………", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, "█ █   █ █"), "………………………………………………………………………………………………………………")))
}

function ub3({
    theme: A,
    welcomeMessage: Q
}) {
    if (["light", "light-daltonized", "light-ansi"].includes(A)) return R0.default.createElement(j, {
        width: wJ1
    }, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        color: "claude"
    }, Q, " "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "v", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION, " ")), R0.default.createElement(TextComponent, null, "…………………………………………………………………………………………………………………………………………………………"), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "            ░░░░░░                                        "), R0.default.createElement(TextComponent, null, "    ░░░   ░░░░░░░░░░                                      "), R0.default.createElement(TextComponent, null, "   ░░░░░░░░░░░░░░░░░░░                                    "), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                           ░░░░"), R0.default.createElement(TextComponent, null, "                     ██    ")), R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                         ░░░░░░░░░░"), R0.default.createElement(TextComponent, null, "               ██▒▒██  ")), R0.default.createElement(TextComponent, null, "                                            ▒▒      ██   ▒"), R0.default.createElement(TextComponent, null, "                                          ▒▒░░▒▒      ▒ ▒▒"), R0.default.createElement(TextComponent, null, "      ", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, "▗"), R0.default.createElement(TextComponent, {
        color: "clawd_background",
        backgroundColor: "clawd_body"
    }, " ", "▗", "     ", "▖", " "), R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, "▖"), "                           ▒▒         ▒▒ "), R0.default.createElement(TextComponent, null, "       ", R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " ".repeat(9)), "                           ░          ▒   "), R0.default.createElement(TextComponent, null, "…………………", R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), R0.default.createElement(TextComponent, null, " "), R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), R0.default.createElement(TextComponent, null, "   "), R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), R0.default.createElement(TextComponent, null, " "), R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), "……………………………………………………………………░…………………………▒…………")));
    return R0.default.createElement(j, {
        width: wJ1
    }, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, {
        color: "claude"
    }, Q, " "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "v", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION, " ")), R0.default.createElement(TextComponent, null, "…………………………………………………………………………………………………………………………………………………………"), R0.default.createElement(TextComponent, null, "                                                          "), R0.default.createElement(TextComponent, null, "     *                                       █████▓▓░     "), R0.default.createElement(TextComponent, null, "                                 *         ███▓░     ░░   "), R0.default.createElement(TextComponent, null, "            ░░░░░░                        ███▓░           "), R0.default.createElement(TextComponent, null, "    ░░░   ░░░░░░░░░░                      ███▓░           "), R0.default.createElement(TextComponent, null, R0.default.createElement(TextComponent, null, "   ░░░░░░░░░░░░░░░░░░░    "), R0.default.createElement(TextComponent, {
        bold: !0
    }, "*"), R0.default.createElement(TextComponent, null, "                ██▓░░      ▓   ")), R0.default.createElement(TextComponent, null, "                                             ░▓▓███▓▓░    "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, " *                                 ░░░░                   "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                                 ░░░░░░░░                 "), R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "                               ░░░░░░░░░░░░░░░░           "), R0.default.createElement(TextComponent, null, "                                                      ", R0.default.createElement(TextComponent, {
        dimColor: !0
    }, "*"), R0.default.createElement(TextComponent, null, " ")), R0.default.createElement(TextComponent, null, "        ", R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, "▗"), R0.default.createElement(TextComponent, {
        color: "clawd_background",
        backgroundColor: "clawd_body"
    }, " ", "▗", "     ", "▖", " "), R0.default.createElement(TextComponent, {
        color: "clawd_body"
    }, "▖"), R0.default.createElement(TextComponent, null, "                       "), R0.default.createElement(TextComponent, {
        bold: !0
    }, "*"), R0.default.createElement(TextComponent, null, "                ")), R0.default.createElement(TextComponent, null, "        ", R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " ".repeat(9)), "      *                                   "), R0.default.createElement(TextComponent, null, "…………………", R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), R0.default.createElement(TextComponent, null, " "), R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), R0.default.createElement(TextComponent, null, "   "), R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), R0.default.createElement(TextComponent, null, " "), R0.default.createElement(TextComponent, {
        backgroundColor: "clawd_body"
    }, " "), "………………………………………………………………………………………………………………")))
}
var R0, wJ1 = 58;
var uK0 = lazyLoader(() => {
    hA();
    f5();
    R0 = esmImport(VA(), 1)
});

function Qz9({
    onDone: A
}) {
    let [Q, B] = $8.useState(0), G = ZU(), [Z, I] = $B();
    $8.useEffect(() => {
        BA("tengu_began_setup", {
            oauthEnabled: G
        })
    }, [G]);

    function Y() {
        if (Q < D.length - 1) {
            let H = Q + 1;
            B(H), BA("tengu_onboarding_step", {
                oauthEnabled: G,
                stepId: D[H]?.id
            })
        } else A()
    }

    function J(H) {
        I(H), Y()
    }
    let W = DQ();
    h1(async (H, C) => {
        let E = D[Q];
        if (C.return && E && E.id === "security")
            if (Q === D.length - 1) {
                A();
                return
            } else Y();
        else if (C.escape && E?.id === "terminal-setup") Y()
    });
    let X = $8.default.createElement(ZY1, {
            initialTheme: Z,
            onThemeSelect: J,
            showIntroText: !0,
            helpText: "To change this later, run /theme",
            hideEscToCancel: !0,
            skipExitHandling: !0
        }),
        F = $8.default.createElement(j, {
            flexDirection: "column",
            gap: 1,
            paddingLeft: 1
        }, $8.default.createElement(TextComponent, {
            bold: !0
        }, "Security notes:"), $8.default.createElement(j, {
            flexDirection: "column",
            width: 70
        }, $8.default.createElement(s$A, null, $8.default.createElement(s$A.Item, null, $8.default.createElement(TextComponent, null, "Claude can make mistakes"), $8.default.createElement(TextComponent, {
            dimColor: !0,
            wrap: "wrap"
        }, "You should always review Claude's responses, especially when", $8.default.createElement(gV, null), "running code.", $8.default.createElement(gV, null))), $8.default.createElement(s$A.Item, null, $8.default.createElement(TextComponent, null, "Due to prompt injection risks, only use it with code you trust"), $8.default.createElement(TextComponent, {
            dimColor: !0,
            wrap: "wrap"
        }, "For more details see:", $8.default.createElement(gV, null), $8.default.createElement(a4, {
            url: "https://code.claude.com/docs/AGENT_OUTPUT_TOOL_NAME/security"
        }))))), $8.default.createElement(KY1, null)),
        V = $8.default.createElement(eE9, {
            onSuccess: Y
        }),
        K = $8.useMemo(() => {
            if (!process.env.ANTHROPIC_API_KEY) return "";
            let H = xw(process.env.ANTHROPIC_API_KEY);
            if (wlA(H) === "new") return H
        }, []),
        D = [];
    if (G) D.push({
        id: "preflight",
        component: V
    });
    if (D.push({
            id: "theme",
            component: X
        }), G) D.push({
        id: "oauth",
        component: $8.default.createElement(ei, {
            onDone: Y
        })
    });
    if (K) D.push({
        id: "api-key",
        component: $8.default.createElement($J1, {
            customApiKeyTruncated: K,
            onDone: Y
        })
    });
    if (D.push({
            id: "security",
            component: F
        }), t$A()) D.push({
        id: "terminal-setup",
        component: $8.default.createElement(j, {
            flexDirection: "column",
            gap: 1,
            paddingLeft: 1
        }, $8.default.createElement(TextComponent, {
            bold: !0
        }, "Use Claude Code's terminal setup?"), $8.default.createElement(j, {
            flexDirection: "column",
            width: 70,
            gap: 1
        }, $8.default.createElement(TextComponent, null, "For the optimal coding experience, enable the recommended settings", $8.default.createElement(gV, null), "for your terminal:", " ", m0.terminal === "Apple_Terminal" ? "Option+Enter for newlines and visual bell" : "Shift+Enter for newlines"), $8.default.createElement(M0, {
            options: [{
                label: "Yes, use recommended settings",
                value: "install"
            }, {
                label: "No, maybe later with /terminal-setup",
                value: "no"
            }],
            onChange: (H) => {
                if (H === "install") Sd1(Z).then(() => {
                    Y()
                });
                else Y()
            },
            onCancel: () => Y()
        }), $8.default.createElement(TextComponent, {
            dimColor: !0
        }, W.pending ? $8.default.createElement($8.default.Fragment, null, "Press ", W.keyName, " again to exit") : $8.default.createElement($8.default.Fragment, null, "Enter to confirm · Esc to skip"))))
    });
    return $8.default.createElement(j, {
        flexDirection: "column"
    }, $8.default.createElement(Ap, {
        items: [$8.default.createElement(qJ1, {
            key: "welcome"
        })]
    }, (H) => H), $8.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, D[Q]?.component, W.pending && $8.default.createElement(j, {
        padding: 1
    }, $8.default.createElement(TextComponent, {
        dimColor: !0
    }, "Press ", W.keyName, " again to exit"))))
}
var $8;
var Bz9 = lazyLoader(() => {
    hA();
    jQ();
    nEA();
    Md1();
    c9();
    KRA();
    gK0();
    hB();
    hA();
    zF0();
    Az9();
    YF0();
    w0();
    f5();
    T5();
    DGA();
    uK0();
    $8 = esmImport(VA(), 1)
});
import {
    sep as mK0
} from "path";

function dK0(A) {
    let Q = bc();
    if (A === Q.HOME) return "home";
    if (A === Q.DESKTOP || A.startsWith(Q.DESKTOP + mK0)) return "desktop";
    if (A === Q.DOCUMENTS || A.startsWith(Q.DOCUMENTS + mK0)) return "documents";
    if (A === Q.DOWNLOADS || A.startsWith(Q.DOWNLOADS + mK0)) return "downloads";
    return "other"
}

function Gz9(A) {
    if (A === null || A.disableAllHooks) return !1;
    if (A.statusLine) return !0;
    if (!A.hooks) return !1;
    for (let Q of Object.values(A.hooks))
        if (Q.length > 0) return !0;
    return !1
}

function Wz9() {
    let A = [],
        Q = LB("projectSettings");
    if (Gz9(Q)) A.push(".claude/settings.json");
    let B = LB("localSettings");
    if (Gz9(B)) A.push(".claude/settings.local.json");
    return A
}

function Zz9(A) {
    return A.some((Q) => Q.ruleBehavior === "allow" && (Q.ruleValue.toolName === BASH_TOOL_NAME || Q.ruleValue.toolName.startsWith(BASH_TOOL_NAME + "(")))
}

function Xz9() {
    let A = [],
        Q = JvA("projectSettings");
    if (Zz9(Q)) A.push(".claude/settings.json");
    let B = JvA("localSettings");
    if (Zz9(B)) A.push(".claude/settings.local.json");
    return A
}

function LSA(A, Q) {
    if (A.length === 0) return "";
    let B = Q === 0 ? void 0 : Q;
    if (!B || A.length <= B) {
        if (A.length === 1) return A[0];
        if (A.length === 2) return `TextComponent{A[0]} and TextComponent{A[1]}`;
        let I = A[A.length - 1];
        return `TextComponent{A.slice(0,-1).join(", ")}, and TextComponent{I}`
    }
    let G = A.slice(0, B),
        Z = A.length - B;
    if (G.length === 1) return `TextComponent{G[0]} and TextComponent{Z} more`;
    return `TextComponent{G.join(", ")}, and TextComponent{Z} more`
}

function Iz9(A) {
    return !!A?.otelHeadersHelper
}

function Fz9() {
    let A = [],
        Q = LB("projectSettings");
    if (Iz9(Q)) A.push(".claude/settings.json");
    let B = LB("localSettings");
    if (Iz9(B)) A.push(".claude/settings.local.json");
    return A
}

function Yz9(A) {
    return !!A?.apiKeyHelper
}

function Vz9() {
    let A = [],
        Q = LB("projectSettings");
    if (Yz9(Q)) A.push(".claude/settings.json");
    let B = LB("localSettings");
    if (Yz9(B)) A.push(".claude/settings.local.json");
    return A
}

function Jz9(A) {
    return !!(A?.awsAuthRefresh || A?.awsCredentialExport)
}

function Kz9() {
    let A = [],
        Q = LB("projectSettings");
    if (Jz9(Q)) A.push(".claude/settings.json");
    let B = LB("localSettings");
    if (Jz9(B)) A.push(".claude/settings.local.json");
    return A
}
var Dz9 = lazyLoader(() => {
    Gr();
    RB();
    bzA()
});
var Hz9;
var Cz9 = lazyLoader(() => {
    Hz9 = {
        control: {
            title: "Do you trust the files in this folder?",
            bodyText: null,
            showDetailedPermissions: !0,
            learnMoreText: "Learn more",
            yesButtonLabel: "Yes, proceed",
            noButtonLabel: "No, exit"
        },
        variant_positive_attitude: {
            title: "Ready to code here?",
            bodyText: `I'll need permission to work with your files.

This means I can:
- Read any file in this folder
- Create, edit, or delete files
- Run commands (like npm, git, tests, ls, rm)
- Use tools defined in .mcp.json`,
            showDetailedPermissions: !1,
            learnMoreText: "Learn more",
            yesButtonLabel: "Yes, continue",
            noButtonLabel: "No, exit"
        },
        variant_normalize_action: {
            title: "Accessing workspace:",
            bodyText: `Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what's in this folder first.

Claude Code'll be able to read, edit, and execute files here.`,
            showDetailedPermissions: !1,
            learnMoreText: "Security guide",
            yesButtonLabel: "Yes, I trust this folder",
            noButtonLabel: "No, exit"
        },
        variant_explicit: {
            title: "Do you want to work in this folder?",
            bodyText: `In order to work in this folder, we need your permission for Claude Code to read, edit, and execute files.

If this folder has malicious code or untrusted scripts, Claude Code could run them while trying to help.

Only continue if this is your code or a project you trust.`,
            showDetailedPermissions: !1,
            learnMoreText: "Security details",
            yesButtonLabel: "Yes, continue",
            noButtonLabel: "No, exit"
        }
    }
});
import {
    homedir as Ez9
} from "os";

function zz9({
    onDone: A,
    commands: Q
}) {
    let {
        servers: B
    } = yX("project"), G = getFeatureFlag("trust_folder_dialog_copy", "variant", "control"), Z = Hz9[G], I = Object.keys(B).length > 0, Y = Wz9(), J = Y.length > 0, W = Xz9(), X = Vz9(), F = X.length > 0, V = Kz9(), K = V.length > 0, D = Fz9(), H = D.length > 0, C = [...new Set([...Y, ...W, ...X, ...V, ...D])], E = Q?.filter((d) => d.type === "prompt" && d.source === "projectSettings" && !d.isSkill && d.allowedTools?.some((QA) => QA === BASH_TOOL_NAME || QA.startsWith(BASH_TOOL_NAME + "("))) ?? [], z = Q?.filter((d) => d.type === "prompt" && d.source === "localSettings" && d.isSkill && d.allowedTools?.some((QA) => QA === BASH_TOOL_NAME || QA.startsWith(BASH_TOOL_NAME + "("))) ?? [], w = E.length > 0, N = z.length > 0, q = E.map((d) => d.name), R = z.map((d) => d.name), P = W.length > 0 || w || N, y = _X(J || P || F || K || H), x = [{
        name: "MCP servers",
        shouldShowWarning: () => I,
        onChange: () => {
            let d = {
                enabledMcpjsonServers: Object.keys(B),
                enableAllProjectMcpServers: !0
            };
            cB("localSettings", d)
        }
    }, {
        name: "hooks",
        shouldShowWarning: () => J
    }, {
        name: "bash commands",
        shouldShowWarning: () => P
    }, {
        name: "OpenTelemetry headers helper commands",
        shouldShowWarning: () => H
    }].filter((d) => d.shouldShowWarning()), p = new Set(x.map((d) => d.name)), u = Object.keys(B);

    function o() {
        let d = ["files"];
        if (p.has("MCP servers")) d.push("MCP servers");
        if (p.has("hooks")) d.push("hooks");
        if (p.has("bash commands")) d.push("bash commands");
        if (p.has("OpenTelemetry headers helper commands")) d.push("OpenTelemetry headers helper commands");
        return LSA(d)
    }
    S5.default.useEffect(() => {
        let d = Ez9() === H0();
        BA("tengu_trust_dialog_shown", {
            isHomeDir: d,
            hasMcpServers: I,
            hasHooks: J,
            hasBashExecution: P,
            hasApiKeyHelper: F,
            hasAwsCommands: K,
            hasOtelHeadersHelper: H,
            folderType: dK0(H0()),
            copyVariant: G
        })
    }, [I, J, P, F, K, H, G]);

    function l(d) {
        let QA = M5();
        if (d === "exit") {
            c8(1);
            return
        }
        let IA = Ez9() === H0();
        if (BA("tengu_trust_dialog_accept", {
                isHomeDir: IA,
                hasMcpServers: I,
                hasHooks: J,
                hasBashExecution: P,
                hasApiKeyHelper: F,
                hasAwsCommands: K,
                hasOtelHeadersHelper: H,
                enableMcp: !0,
                folderType: dK0(H0()),
                copyVariant: G
            }), !IA) aI({
            ...QA,
            hasTrustDialogAccepted: !0
        });
        x.forEach((HA) => {
            if (HA.onChange !== void 0) HA.onChange()
        }), A()
    }
    let k = DQ();
    if (h1((d, QA) => {
            if (QA.escape) {
                c8(0);
                return
            }
        }), y) return setTimeout(A), null;
    return S5.default.createElement(hJ, {
        color: "warning",
        titleColor: "warning",
        title: Z.title
    }, S5.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        paddingTop: 1
    }, S5.default.createElement(TextComponent, {
        bold: !0
    }, OA().cwd()), Z.bodyText !== null ? S5.default.createElement(TextComponent, null, Z.bodyText) : S5.default.createElement(TextComponent, null, "Claude Code may read, write, or execute files contained in this directory. This can pose security risks, so only use", " ", o(), " from trusted sources."), Z.showDetailedPermissions && (I || J || P || F || K || H) && S5.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, S5.default.createElement(TextComponent, {
        dimColor: !0
    }, "Execution allowed by:"), I && S5.default.createElement(j, {
        paddingLeft: 2
    }, S5.default.createElement(TextComponent, null, S5.default.createElement(TextComponent, {
        dimColor: !0
    }, "• "), S5.default.createElement(TextComponent, {
        bold: !0
    }, ".mcp.json"), u.length > 0 && S5.default.createElement(TextComponent, {
        dimColor: !0
    }, " ", "(", LSA(u, 3), ")"))), C.length > 0 && S5.default.createElement(j, {
        paddingLeft: 2
    }, S5.default.createElement(TextComponent, null, S5.default.createElement(TextComponent, {
        dimColor: !0
    }, "• "), S5.default.createElement(TextComponent, {
        bold: !0
    }, C.join(", ")))), w && S5.default.createElement(j, {
        paddingLeft: 2
    }, S5.default.createElement(TextComponent, null, S5.default.createElement(TextComponent, {
        dimColor: !0
    }, "• "), S5.default.createElement(TextComponent, {
        bold: !0
    }, ".claude/commands"), S5.default.createElement(TextComponent, {
        dimColor: !0
    }, " ", "(", LSA(q, 3), ")"))), N && S5.default.createElement(j, {
        paddingLeft: 2
    }, S5.default.createElement(TextComponent, null, S5.default.createElement(TextComponent, {
        dimColor: !0
    }, "• "), S5.default.createElement(TextComponent, {
        bold: !0
    }, ".claude/skills"), S5.default.createElement(TextComponent, {
        dimColor: !0
    }, " (", LSA(R, 3), ")")))), S5.default.createElement(TextComponent, {
        dimColor: !0
    }, S5.default.createElement(a4, {
        url: "https://code.claude.com/docs/AGENT_OUTPUT_TOOL_NAME/security"
    }, Z.learnMoreText)), S5.default.createElement(M0, {
        options: [{
            label: Z.yesButtonLabel,
            value: "enable_all"
        }, {
            label: Z.noButtonLabel,
            value: "exit"
        }],
        onChange: (d) => l(d),
        onCancel: () => l("exit")
    }), S5.default.createElement(TextComponent, {
        dimColor: !0
    }, k.pending ? S5.default.createElement(S5.default.Fragment, null, "Press ", k.keyName, " again to exit") : S5.default.createElement(S5.default.Fragment, null, "Enter to confirm · Esc to exit"))))
}
var S5;
var Uz9 = lazyLoader(() => {
    hA();
    T6();
    jQ();
    GM();
    RB();
    O9();
    w0();
    c9();
    R2();
    hA();
    o0();
    _J();
    Dz9();
    Cz9();
    CO();
    S5 = esmImport(VA(), 1)
});
var NJ1;
var $z9 = lazyLoader(() => {
    LY1();
    u1();
    GG();
    u1();
    _J();
    m8();
    NJ1 = esmImport(VA(), 1)
});

function wz9({
    commands: A,
    initialLogs: Q,
    initialTools: B,
    mcpClients: G,
    dynamicMcpConfig: Z,
    appState: I,
    onChangeAppState: Y,
    debug: J,
    strictMcpConfig: W = !1,
    systemPrompt: X,
    appendSystemPrompt: F
}) {
    let {
        rows: V
    } = YB(), [K, D] = zY.default.useState(Q), [H, C] = zY.default.useState(!1), [E, z] = zY.default.useState(!1), [w, N] = zY.default.useState(null), [q, R] = zY.default.useState(null), P = K.filter((o) => !o.isSidechain);
    DQ();
    let y = !1,
        v = zY.default.useCallback((o) => {
            C(!0), (o ? RY1 : Qx)().then((k) => {
                D(k)
            }).catch((k) => {
                e(k)
            }).finally(() => {
                C(!1)
            })
        }, []);
    zY.default.useEffect(() => {
        v(E)
    }, [v, E]);
    let x = zY.default.useCallback(() => {
        z((o) => !o)
    }, []);

    function p() {
        process.exit(1)
    }
    async function u(o) {
        let l = OY1(o, E);
        if (l.isCrossProject) {
            await Ka(l.command), R(l.command);
            return
        }
        try {
            let k = await qi(o, void 0);
            if (!k) throw Error("Failed to load conversation");
            if (!bH()) await SJ();
            N(k)
        } catch (k) {
            throw e(k), k
        }
    }
    if (q) return zY.default.createElement(mb3, {
        command: q
    });
    if (w) return zY.default.createElement(N7, {
        initialState: I,
        onChangeAppState: Y
    }, zY.default.createElement(sXA, {
        initialPrompt: "",
        debug: J,
        commands: A,
        initialTools: B,
        initialMessages: w.messages,
        initialFileHistorySnapshots: w.fileHistorySnapshots,
        mcpClients: G,
        dynamicMcpConfig: Z,
        strictMcpConfig: W,
        systemPrompt: X,
        appendSystemPrompt: F
    }));
    if (H) return zY.default.createElement(j, null, zY.default.createElement(e9, null), zY.default.createElement(TextComponent, null, " Loading conversations…"));
    return zY.default.createElement(N7, {
        initialState: I,
        onChangeAppState: Y
    }, zY.default.createElement(sjA, {
        logs: P,
        maxHeight: V,
        onCancel: p,
        onSelect: u,
        onLogsChanged: y ? () => v(E) : void 0,
        showAllProjects: E,
        onToggleAllProjects: x
    }))
}

function mb3({
    command: A
}) {
    return zY.default.useEffect(() => {
        let Q = setTimeout(() => {
            process.exit(0)
        }, 100);
        return () => clearTimeout(Q)
    }, []), zY.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, zY.default.createElement(TextComponent, null, "This conversation is from a different directory."), zY.default.createElement(j, {
        flexDirection: "column"
    }, zY.default.createElement(TextComponent, null, "To resume, run:"), zY.default.createElement(TextComponent, null, " ", A)), zY.default.createElement(TextComponent, {
        dimColor: !0
    }, "(Command copied to clipboard)"))
}
var zY;
var qz9 = lazyLoader(() => {
    hA();
    zI();
    gI1();
    LY1();
    u1();
    GG();
    Bh();
    jt();
    c9();
    H9();
    wYA();
    m8();
    rjA();
    iF0();
    zY = esmImport(VA(), 1)
});
var Nz9, cK0;
var Lz9 = lazyLoader(() => {
    ye1();
    PD();
    Nz9 = esmImport(aQ1(), 1);
    cK0 = class cK0 extends PLA {
        constructor(A, Q) {
            var B;
            super(Q);
            this._serverInfo = A, this._capabilities = (B = Q === null || Q === void 0 ? void 0 : Q.capabilities) !== null && B !== void 0 ? B : {}, this._instructions = Q === null || Q === void 0 ? void 0 : Q.instructions, this.setRequestHandler(Ue1, (G) => this._oninitialize(G)), this.setNotificationHandler(MQ1, () => {
                var G;
                return (G = this.oninitialized) === null || G === void 0 ? void 0 : G.call(this)
            })
        }
        registerCapabilities(A) {
            if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
            this._capabilities = jQ1(this._capabilities, A)
        }
        assertCapabilityForMethod(A) {
            var Q, B, G;
            switch (A) {
                case "sampling/createMessage":
                    if (!((Q = this._clientCapabilities) === null || Q === void 0 ? void 0 : Q.sampling)) throw Error(`Client does not support sampling (required for TextComponent{A})`);
                    break;
                case "elicitation/create":
                    if (!((B = this._clientCapabilities) === null || B === void 0 ? void 0 : B.elicitation)) throw Error(`Client does not support elicitation (required for TextComponent{A})`);
                    break;
                case "roots/list":
                    if (!((G = this._clientCapabilities) === null || G === void 0 ? void 0 : G.roots)) throw Error(`Client does not support listing roots (required for TextComponent{A})`);
                    break;
                case "ping":
                    break
            }
        }
        assertNotificationCapability(A) {
            switch (A) {
                case "notifications/message":
                    if (!this._capabilities.logging) throw Error(`Server does not support logging (required for TextComponent{A})`);
                    break;
                case "notifications/resources/updated":
                case "notifications/resources/list_changed":
                    if (!this._capabilities.resources) throw Error(`Server does not support notifying about resources (required for TextComponent{A})`);
                    break;
                case "notifications/tools/list_changed":
                    if (!this._capabilities.tools) throw Error(`Server does not support notifying of tool list changes (required for TextComponent{A})`);
                    break;
                case "notifications/prompts/list_changed":
                    if (!this._capabilities.prompts) throw Error(`Server does not support notifying of prompt list changes (required for TextComponent{A})`);
                    break;
                case "notifications/cancelled":
                    break;
                case "notifications/progress":
                    break
            }
        }
        assertRequestHandlerCapability(A) {
            switch (A) {
                case "sampling/createMessage":
                    if (!this._capabilities.sampling) throw Error(`Server does not support sampling (required for TextComponent{A})`);
                    break;
                case "logging/setLevel":
                    if (!this._capabilities.logging) throw Error(`Server does not support logging (required for TextComponent{A})`);
                    break;
                case "prompts/get":
                case "prompts/list":
                    if (!this._capabilities.prompts) throw Error(`Server does not support prompts (required for TextComponent{A})`);
                    break;
                case "resources/list":
                case "resources/templates/list":
                case "resources/read":
                    if (!this._capabilities.resources) throw Error(`Server does not support resources (required for TextComponent{A})`);
                    break;
                case "tools/call":
                case "tools/list":
                    if (!this._capabilities.tools) throw Error(`Server does not support tools (required for TextComponent{A})`);
                    break;
                case "ping":
                case "initialize":
                    break
            }
        }
        async _oninitialize(A) {
            let Q = A.params.protocolVersion;
            return this._clientCapabilities = A.params.capabilities, this._clientVersion = A.params.clientInfo, {
                protocolVersion: $Q1.includes(Q) ? Q : ol,
                capabilities: this.getCapabilities(),
                serverInfo: this._serverInfo,
                ...this._instructions && {
                    instructions: this._instructions
                }
            }
        }
        getClientCapabilities() {
            return this._clientCapabilities
        }
        getClientVersion() {
            return this._clientVersion
        }
        getCapabilities() {
            return this._capabilities
        }
        async ping() {
            return this.request({
                method: "ping"
            }, Yh)
        }
        async createMessage(A, Q) {
            return this.request({
                method: "sampling/createMessage",
                params: A
            }, Pe1, Q)
        }
        async elicitInput(A, Q) {
            let B = await this.request({
                method: "elicitation/create",
                params: A
            }, je1, Q);
            if (B.action === "accept" && B.content) try {
                let G = new Nz9.default,
                    Z = G.compile(A.requestedSchema);
                if (!Z(B.content)) throw new yE(kE.InvalidParams, `Elicitation response content does not match requested schema: TextComponent{G.errorsText(Z.errors)}`)
            } catch (G) {
                if (G instanceof yE) throw G;
                throw new yE(kE.InternalError, `Error validating elicitation response: TextComponent{G}`)
            }
            return B
        }
        async listRoots(A, Q) {
            return this.request({
                method: "roots/list",
                params: A
            }, ke1, Q)
        }
        async sendLoggingMessage(A) {
            return this.notification({
                method: "notifications/message",
                params: A
            })
        }
        async sendResourceUpdated(A) {
            return this.notification({
                method: "notifications/resources/updated",
                params: A
            })
        }
        async sendResourceListChanged() {
            return this.notification({
                method: "notifications/resources/list_changed"
            })
        }
        async sendToolListChanged() {
            return this.notification({
                method: "notifications/tools/list_changed"
            })
        }
        async sendPromptListChanged() {
            return this.notification({
                method: "notifications/prompts/list_changed"
            })
        }
    }
});
import Mz9 from "node:process";
class pK0 {
    constructor(A = Mz9.stdin, Q = Mz9.stdout) {
        this._stdin = A, this._stdout = Q, this._readBuffer = new SLA, this._started = !1, this._ondata = (B) => {
            this._readBuffer.append(B), this.processReadBuffer()
        }, this._onerror = (B) => {
            var G;
            (G = this.onerror) === null || G === void 0 || G.call(this, B)
        }
    }
    async start() {
        if (this._started) throw Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
        this._started = !0, this._stdin.on("data", this._ondata), this._stdin.on("error", this._onerror)
    }
    processReadBuffer() {
        var A, Q;
        while (!0) try {
            let B = this._readBuffer.readMessage();
            if (B === null) break;
            (A = this.onmessage) === null || A === void 0 || A.call(this, B)
        } catch (B) {
            (Q = this.onerror) === null || Q === void 0 || Q.call(this, B)
        }
    }
    async close() {
        var A;
        if (this._stdin.off("data", this._ondata), this._stdin.off("error", this._onerror), this._stdin.listenerCount("data") === 0) this._stdin.pause();
        this._readBuffer.clear(), (A = this.onclose) === null || A === void 0 || A.call(this)
    }
    send(A) {
        return new Promise((Q) => {
            let B = rQ1(A);
            if (this._stdout.write(B)) Q();
            else this._stdout.once("drain", Q)
        })
    }
}
var Oz9 = lazyLoader(() => {
    ZA0()
});
async function Tz9(A, Q, B) {
    let Z = Gh(100);
    Qq(A);
    let I = new cK0({
        name: "claude/tengu",
        version: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION
    }, {
        capabilities: {
            tools: {}
        }
    });
    I.setRequestHandler(Re1, async () => {
        let J = DE(),
            W = JC(J);
        return {
            tools: await Promise.all(W.map(async (X) => {
                let F;
                if (X.outputSchema) {
                    let V = _RA(X.outputSchema);
                    if (typeof V === "object" && V !== null && "type" in V && V.type === "object") F = V
                }
                return {
                    ...X,
                    description: await X.prompt({
                        getToolPermissionContext: async () => J,
                        tools: W,
                        agents: []
                    }),
                    inputSchema: _RA(X.inputSchema),
                    outputSchema: F
                }
            }))
        }
    }), I.setRequestHandler(Te1, async ({
        params: {
            name: J,
            arguments: W
        }
    }) => {
        let X = DE(),
            F = JC(X),
            V = F.find((K) => K.name === J);
        if (!V) throw Error(`Tool TextComponent{J} not found`);
        try {
            if (!V.isEnabled()) throw Error(`Tool TextComponent{J} is not enabled`);
            let K = getDefaultSonnetModel(),
                D = await V.validateInput?.(W ?? {}, {
                    abortController: s9(),
                    options: {
                        commands: Rz9,
                        tools: F,
                        mainLoopModel: K,
                        maxThinkingTokens: 0,
                        mcpClients: [],
                        mcpResources: {},
                        isNonInteractiveSession: !0,
                        hasAppendSystemPrompt: !1,
                        debug: Q,
                        verbose: B,
                        agentDefinitions: {
                            activeAgents: [],
                            allAgents: []
                        }
                    },
                    getAppState: async () => _p(),
                    setAppState: () => {},
                    messages: [],
                    setMessages: () => {},
                    readFileState: Z,
                    setInProgressToolUseIDs: () => {},
                    setResponseLength: () => {},
                    updateFileHistoryState: () => {},
                    agentId: G0()
                });
            if (D && !D.result) throw Error(`Tool TextComponent{J} input is invalid: TextComponent{D.message}`);
            let H = await V.call(W ?? {}, {
                abortController: s9(),
                options: {
                    commands: Rz9,
                    tools: F,
                    mainLoopModel: getDefaultSonnetModel(),
                    maxThinkingTokens: 0,
                    mcpClients: [],
                    mcpResources: {},
                    isNonInteractiveSession: !0,
                    hasAppendSystemPrompt: !1,
                    debug: Q,
                    verbose: B,
                    agentDefinitions: {
                        activeAgents: [],
                        allAgents: []
                    }
                },
                getAppState: async () => _p(),
                setAppState: () => {},
                messages: [],
                setMessages: () => {},
                readFileState: Z,
                setInProgressToolUseIDs: () => {},
                setResponseLength: () => {},
                updateFileHistoryState: () => {},
                agentId: G0()
            }, L$, xD({
                content: []
            }));
            return {
                content: [{
                    type: "text",
                    text: typeof H === "string" ? H : JSON.stringify(H.data)
                }]
            }
        } catch (K) {
            return e(K instanceof Error ? K : Error(String(K))), {
                isError: !0,
                content: [{
                    type: "text",
                    text: (K instanceof Error ? k30(K) : [String(K)]).filter(Boolean).join(`
`).trim() || "Error"
                }]
            }
        }
    });
    async function Y() {
        let J = new pK0;
        await I.connect(J)
    }
    return await Y()
}
var Rz9;
var Pz9 = lazyLoader(() => {
    Lz9();
    Oz9();
    PD();
    $50();
    aG();
    m_();
    s2();
    u1();
    uM();
    wn();
    S0();
    nF0();
    nQ();
    jq();
    UZ();
    H9();
    Rz9 = [TY1]
});

function lK0(A, Q, B) {
    let G = "";
    if (Object.keys(B?.enabledPlugins || {}).forEach((Z) => {
            if (Z === A || Z === Q.name || Z.startsWith(`TextComponent{Q.name}@`)) G = Z
        }), !G) G = A.includes("@") ? A : Q.name;
    return G
}

function jz9(A) {
    if (A.includes("@")) {
        let Q = A.split("@");
        return {
            name: Q[0] || "",
            marketplace: Q[1]
        }
    }
    return {
        name: A
    }
}

function iK0(A, Q) {
    let {
        name: B,
        marketplace: G
    } = jz9(A);
    return Q.find((Z) => {
        if (Z.name === A || Z.name === B) return !0;
        if (G && Z.source) return Z.name === B && Z.source.includes(`@TextComponent{G}`);
        return !1
    })
}

function nK0(A, Q, B) {
    let Z = {
        ...LB("userSettings")?.enabledPlugins
    };
    Object.keys(Z).forEach((Y) => {
        if (Y === A || Y === B.name || Y.startsWith(`TextComponent{B.name}@`)) Z[Y] = Q
    });
    let {
        error: I
    } = cB("userSettings", {
        enabledPlugins: Z
    });
    if (I) throw I;
    oF()
}

function LJ1(A, Q) {
    e(A instanceof Error ? A : Error(String(A))), console.error(`TextComponent{V1.cross} Failed to TextComponent{Q}: TextComponent{A instanceof Error?A.message:String(A)}`), process.exit(1)
}
async function Sz9(A) {
    try {
        let {
            name: Q,
            marketplace: B
        } = jz9(A), G = await TZ(), Z, I;
        for (let [X] of Object.entries(G)) {
            if (B && X !== B) continue;
            let V = (await VD(X)).plugins.find((K) => K.name === Q);
            if (V) {
                Z = V, I = X;
                break
            }
        }
        if (!Z || !I) {
            let X = B ? `marketplace "TextComponent{B}"` : "any configured marketplace";
            throw Error(`Plugin "TextComponent{Q}" not found in TextComponent{X}`)
        }
        if (typeof Z.source !== "string") console.log(`Installing plugin "TextComponent{Q}" from marketplace "TextComponent{I}"...`), await U3A(Z.source, {
            manifest: {
                name: Z.name
            }
        });
        let Y = `TextComponent{Z.name}@TextComponent{I}`,
            W = {
                ...LB("userSettings")?.enabledPlugins,
                [Y]: !0
            };
        cB("userSettings", {
            enabledPlugins: W
        }), oF(), console.log(`TextComponent{V1.tick} Successfully installed plugin: TextComponent{Y}`), BA("tengu_plugin_installed_cli", {
            plugin_id: Y,
            marketplace_name: I
        }), process.exit(0)
    } catch (Q) {
        LJ1(Q, `install plugin "TextComponent{A}"`)
    }
}
async function _z9(A) {
    try {
        let {
            enabled: Q,
            disabled: B
        } = await y7(), G = [...Q, ...B], Z = iK0(A, G);
        if (!Z) throw Error(`Plugin "TextComponent{A}" not found in installed plugins`);
        let I = LB("userSettings"),
            Y = lK0(A, Z, I);
        if (I?.enabledPlugins?.[Y] === !1) throw Error(`Plugin "TextComponent{A}" is already uninstalled`);
        nK0(Y, !1, Z);
        let V = NQA().plugins[Y]?.find((H) => H.scope === "user")?.installPath;
        RI1(Y, "user");
        let D = NQA().plugins[Y];
        if ((!D || D.length === 0) && V) try {
            TI1(V)
        } catch {}
        console.log(`TextComponent{V1.tick} Successfully uninstalled plugin: TextComponent{Z.name}`), BA("tengu_plugin_uninstalled_cli", {
            plugin_id: Y
        }), process.exit(0)
    } catch (Q) {
        LJ1(Q, `uninstall plugin "TextComponent{A}"`)
    }
}
async function kz9(A) {
    try {
        let {
            disabled: Q
        } = await y7(), B = iK0(A, Q);
        if (!B) throw Error(`Plugin "TextComponent{A}" not found in disabled plugins`);
        let G = LB("userSettings"),
            Z = lK0(A, B, G);
        nK0(Z, !0, B), console.log(`TextComponent{V1.tick} Successfully enabled plugin: TextComponent{B.name}`), BA("tengu_plugin_enabled_cli", {
            plugin_id: Z
        }), process.exit(0)
    } catch (Q) {
        LJ1(Q, `enable plugin "TextComponent{A}"`)
    }
}
async function yz9(A) {
    try {
        let {
            enabled: Q
        } = await y7(), B = iK0(A, Q);
        if (!B) throw Error(`Plugin "TextComponent{A}" not found in enabled plugins`);
        let G = LB("userSettings"),
            Z = lK0(A, B, G);
        nK0(Z, !1, B), console.log(`TextComponent{V1.tick} Successfully disabled plugin: TextComponent{B.name}`), BA("tengu_plugin_disabled_cli", {
            plugin_id: Z
        }), process.exit(0)
    } catch (Q) {
        LJ1(Q, `disable plugin "TextComponent{A}"`)
    }
}
var xz9 = lazyLoader(() => {
    n2();
    u1();
    w0();
    NF();
    Ia();
    kH();
    RB();
    bQA()
});
import {
    join as S$
} from "path";

function MSA() {
    let B = ((c0() || {}).cleanupPeriodDays ?? db3) * 24 * 60 * 60 * 1000;
    return new Date(Date.now() - B)
}

function cb3(A, Q) {
    return {
        messages: A.messages + Q.messages,
        errors: A.errors + Q.errors
    }
}
