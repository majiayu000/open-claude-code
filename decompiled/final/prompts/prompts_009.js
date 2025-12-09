/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: prompts_009.js
 * 处理时间: 2025-12-09T03:41:38.264Z
 * 变量映射: 4 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       ( 16x) esmImport(module) - ESM import
 * sF       ( 11x) React.createElement
 * en       (  1x) AGENT_OUTPUT_TOOL = "AgentOutputTool"
 * M8       (  1x) shellEscape(args) - Escape shell args
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 9/10
 * Lines: 423226 - 424723 (1498 lines)
 * Original file: cli.js
 */

    switch (kO.default.useEffect(() => {
            async function W() {
                let X = await Promise.all(J.map(async (F) => {
                    let V = F.config.scope,
                        K = F.config.type === "sse",
                        D = F.config.type === "http",
                        H = void 0;
                    if (K || D) {
                        let z = await new A1A(F.name, F.config).tokens();
                        H = Boolean(z)
                    }
                    let C = {
                        name: F.name,
                        client: F,
                        scope: V
                    };
                    if (K) return {
                        ...C,
                        transport: "sse",
                        isAuthenticated: H,
                        config: F.config
                    };
                    else if (D) return {
                        ...C,
                        transport: "http",
                        isAuthenticated: H,
                        config: F.config
                    };
                    else return {
                        ...C,
                        transport: "stdio",
                        config: F.config
                    }
                }));
                Y(X)
            }
            W()
        }, [J]), kO.useEffect(() => {
            if (I.length === 0 && J.length > 0) return;
            if (I.length === 0) A("No MCP servers configured. Please run /doctor if this is unexpected. Otherwise, run `claude mcp` or visit https://docs.claude.com/en/docs/claude-code/mcp to learn more.")
        }, [I.length, J.length, A]), G.type) {
        case "list":
            return kO.default.createElement(jF0, {
                servers: I,
                onSelectServer: (W) => Z({
                    type: "server-menu",
                    server: W
                }),
                onComplete: A
            });
        case "server-menu": {
            let W = mzA(Q.mcp.tools, G.server.name);
            if (G.server.transport === "stdio") return kO.default.createElement(kF0, {
                server: G.server,
                serverToolsCount: W.length,
                onViewTools: () => Z({
                    type: "server-tools",
                    server: G.server
                }),
                onCancel: () => Z({
                    type: "list"
                }),
                onComplete: A
            });
            else return kO.default.createElement(xF0, {
                server: G.server,
                serverToolsCount: W.length,
                onViewTools: () => Z({
                    type: "server-tools",
                    server: G.server
                }),
                onCancel: () => Z({
                    type: "list"
                }),
                onComplete: A
            })
        }
        case "server-tools":
            return kO.default.createElement(bF0, {
                server: G.server,
                onSelectTool: (W, X) => Z({
                    type: "server-tool-detail",
                    server: G.server,
                    toolIndex: X
                }),
                onBack: () => Z({
                    type: "server-menu",
                    server: G.server
                })
            });
        case "server-tool-detail": {
            let X = mzA(Q.mcp.tools, G.server.name)[G.toolIndex];
            if (!X) return Z({
                type: "server-tools",
                server: G.server
            }), null;
            return kO.default.createElement(hF0, {
                tool: X,
                server: G.server,
                onBack: () => Z({
                    type: "server-tools",
                    server: G.server
                })
            })
        }
    }
}
var kO;
var wF9 = L(() => {
    dB1();
    H9();
    xX();
    SF0();
    yF0();
    vF0();
    fF0();
    gF0();
    kO = GA(VA(), 1)
});

function mF0({
    serverName: A,
    onComplete: Q
}) {
    let [B] = $B(), [G] = _Q(), Z = OXA(), [I, Y] = sD.useState(!0), [J, W] = sD.useState(null);
    if (sD.useEffect(() => {
            async function X() {
                try {
                    if (!G.mcp.clients.find((K) => K.name === A)) {
                        W(`MCP server "${A}" not found`), Y(!1);
                        return
                    }
                    switch ((await Z(A)).client.type) {
                        case "connected":
                            Q(`Successfully reconnected to ${A}`);
                            break;
                        case "needs-auth":
                            W(`${A} requires authentication`), Y(!1), Q(`${A} requires authentication. Use /mcp to authenticate.`);
                            break;
                        case "pending":
                        case "failed":
                        case "disabled":
                            W(`Failed to reconnect to ${A}`), Y(!1), Q(`Failed to reconnect to ${A}`);
                            break
                    }
                } catch (F) {
                    let V = F instanceof Error ? F.message : String(F);
                    W(V), Y(!1), Q(`Error: ${V}`)
                }
            }
            X()
        }, [A, Z, G.mcp.clients, Q]), I) return sD.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1
    }, sD.default.createElement($, {
        color: "text"
    }, "Reconnecting to ", sD.default.createElement($, {
        bold: !0
    }, A)), sD.default.createElement(j, null, sD.default.createElement(e9, null), sD.default.createElement($, null, " Establishing connection to MCP server")));
    if (J) return sD.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1
    }, sD.default.createElement(j, null, sD.default.createElement($, null, tQ("error", B)(V1.cross), " "), sD.default.createElement($, {
        color: "error"
    }, "Failed to reconnect to ", A)), sD.default.createElement($, {
        dimColor: !0
    }, "Error: ", J));
    return null
}
var sD;
var dF0 = L(() => {
    hA();
    zI();
    FQA();
    H9();
    hA();
    n2();
    sD = GA(VA(), 1)
});
var qF9 = L(() => {
    wF9();
    SF0();
    yF0();
    vF0();
    fF0();
    gF0();
    dF0()
});
var cF0, I_3, NF9;
var LF9 = L(() => {
    qF9();
    dF0();
    cF0 = GA(VA(), 1), I_3 = {
        type: "local-jsx",
        name: "mcp",
        description: "Manage MCP servers",
        isEnabled: () => !0,
        isHidden: !1,
        argumentHint: "[reconnect <server-name>]",
        async call(A, Q, B) {
            if (B) {
                let G = B.trim().split(/\s+/);
                if (G[0] === "reconnect" && G[1]) {
                    let Z = G.slice(1).join(" ");
                    return cF0.default.createElement(mF0, {
                        serverName: Z,
                        onComplete: A
                    })
                }
            }
            return cF0.default.createElement(uF0, {
                onComplete: A
            })
        },
        userFacingName() {
            return "mcp"
        }
    }, NF9 = I_3
});
var MF9 = () => {};
var OF9 = () => {};
var RF9;
var TF9 = L(() => {
    RF9 = {
        type: "prompt",
        name: "pr-comments",
        description: "Get comments from a GitHub pull request",
        progressMessage: "fetching PR comments",
        useSmallFastModel: !0,
        isEnabled: () => !0,
        isHidden: !1,
        userFacingName() {
            return "pr-comments"
        },
        source: "builtin",
        async getPromptForCommand(A) {
            return [{
                type: "text",
                text: `You are an AI assistant integrated into a git-based version control system. Your task is to fetch and display comments from a GitHub pull request.

Follow these steps:

1. Use \`gh pr view --json number,headRepository\` to get the PR number and repository info
2. Use \`gh api /repos/{owner}/{repo}/issues/{number}/comments\` to get PR-level comments
3. Use \`gh api /repos/{owner}/{repo}/pulls/{number}/comments\` to get review comments. Pay particular attention to the following fields: \`body\`, \`diff_hunk\`, \`path\`, \`line\`, etc. If the comment references some code, consider fetching it using eg \`gh api /repos/{owner}/{repo}/contents/{path}?ref={branch} | jq .content -r | base64 -d\`
4. Parse and format all comments in a readable way
5. Return ONLY the formatted comments, with no additional text

Format the comments as:

## Comments

[For each comment thread:]
- @author file.ts#line:
  \`\`\`diff
  [diff_hunk from the API response]
  \`\`\`
  > quoted comment text
  
  [any replies indented]

If there are no comments, return "No comments found."

Remember:
1. Only show the actual comments, no explanatory text
2. Include both PR-level and code review comments
3. Preserve the threading/nesting of comment replies
4. Show the file and line number context for code review comments
5. Use jq to parse the JSON responses from the GitHub API

${A?"Additional user input: "+A:""}
`
            }]
        }
    }
});

function PF9(A) {
    return A.map(([Q, B]) => {
        let G = `Version ${Q}:`,
            Z = B.map((I) => `• ${I}`).join(`
`);
        return `${G}
${Z}`
    }).join(`

`)
}
var Y_3, jF9;
var SF9 = L(() => {
    gXA();
    Y_3 = {
        description: "View release notes",
        isEnabled: () => !0,
        isHidden: !1,
        name: "release-notes",
        userFacingName() {
            return "release-notes"
        },
        type: "local",
        supportsNonInteractive: !0,
        async call() {
            let A = [];
            try {
                let B = new Promise((G, Z) => {
                    setTimeout(() => Z(Error("Timeout")), 500)
                });
                await Promise.race([_W0(), B]), A = kW0(wQA())
            } catch {}
            if (A.length > 0) return {
                type: "text",
                value: PF9(A)
            };
            let Q = kW0();
            if (Q.length > 0) return {
                type: "text",
                value: PF9(Q)
            };
            return {
                type: "text",
                value: `See the full changelog at: ${t89}`
            }
        }
    }, jF9 = Y_3
});
var J_3, _F9;
var kF9 = L(() => {
    GG();
    S0();
    J_3 = {
        type: "local",
        name: "rename",
        description: "Rename the current conversation",
        isEnabled: () => !1,
        isHidden: !1,
        supportsNonInteractive: !1,
        argumentHint: "<name>",
        async call(A) {
            if (!A || A.trim() === "") return {
                type: "text",
                value: "Please provide a name for the session. Usage: /rename <name>"
            };
            let Q = G0();
            return await NY1(Q, A.trim()), {
                type: "text",
                value: `Session renamed to: ${A.trim()}`
            }
        },
        userFacingName() {
            return "rename"
        }
    }, _F9 = J_3
});
var W_3;
var yF9 = L(() => {
    T5();
    hA();
    W_3 = GA(VA(), 1)
});
var X_3;
var xF9 = L(() => {
    hA();
    UI1();
    jq();
    X_3 = GA(VA(), 1)
});

function vF9(A, Q) {
    let B = A.replace(/\s+/g, " ").trim();
    if (B.length <= Q) return B;
    return B.slice(0, Q).trim() + "…"
}

function pF0(A, Q, B) {
    let {
        isGroupHeader: G = !1,
        isChild: Z = !1,
        forkCount: I = 0
    } = B || {}, Y = G && I > 0 ? F_3 : Z ? V_3 : 0, J = G && I > 0 ? ` (+${I} other ${I===1?"session":"sessions"})` : "", W = A.isSidechain ? " (sidechain)" : "", X = Q - Y - W.length - J.length;
    return `${vF9(ajA(A),X)}${W}${J}`
}

function lF0(A, Q) {
    let {
        isChild: B = !1,
        showProjectPath: G = !1
    } = Q || {}, Z = [Xp(A.modified, {
        style: "short"
    }), `${A.messageCount} messages`, A.gitBranch || "-"];
    if (G && A.projectPath) Z.push(A.projectPath);
    let I = Z.join(" · ");
    return (B ? "    " : "") + I
}

function sjA({
    logs: A,
    maxHeight: Q = 1 / 0,
    forceWidth: B,
    onCancel: G,
    onSelect: Z,
    onLogsChanged: I,
    showAllProjects: Y = !1,
    onToggleAllProjects: J
}) {
    let W = YB(),
        X = B === void 0 ? W.columns : B,
        F = DQ(G),
        {
            isFocused: V
        } = XoA(),
        K = !1,
        [D, H] = z8.default.useState(null),
        [C, E] = z8.default.useState(!1),
        [z, w] = z8.default.useState(""),
        [N, q] = z8.default.useState(""),
        [R, P] = z8.default.useState(0),
        [y, v] = z8.default.useState(new Set),
        [x, p] = z8.default.useState(null),
        [u, o] = z8.default.useState("list"),
        [l, k] = z8.default.useState(null),
        d = z8.default.useRef(null);
    z8.default.useEffect(() => {
        mb().then((XA) => H(XA))
    }, []);
    let QA = z8.default.useMemo(() => {
            let XA = A;
            if (C && D) XA = XA.filter((zA) => zA.gitBranch === D);
            if (z) {
                let zA = z.toLowerCase();
                XA = XA.filter(($A) => {
                    let LA = ajA($A).toLowerCase(),
                        TA = ($A.gitBranch || "").toLowerCase();
                    return LA.includes(zA) || TA.includes(zA)
                })
            }
            return XA
        }, [A, !1, C, D, z]),
        IA = Math.max(30, X - 4),
        HA = z8.default.useMemo(() => {
            return []
        }, [!1, QA, IA, Y]),
        wA = z8.default.useMemo(() => {
            return QA.map((XA, zA) => {
                let LA = ajA(XA) + (XA.isSidechain ? " (sidechain)" : ""),
                    TA = vF9(LA, IA),
                    eA = [Xp(XA.modified, {
                        style: "short"
                    }), `${XA.messageCount} messages`, XA.gitBranch || "-"];
                if (Y && XA.projectPath) eA.push(XA.projectPath);
                return {
                    label: TA,
                    description: eA.join(" · "),
                    dimDescription: !0,
                    value: zA.toString()
                }
            })
        }, [!1, QA, IA, Y]),
        KA = x?.value.log ?? null,
        SA = () => {
            return ""
        },
        sA = z8.default.useCallback(async () => {
            let XA = KA?.messages[0];
            if (!KA || !XA) {
                o("list"), q("");
                return
            }
            if (N.trim()) {
                let zA = XA.sessionId;
                await NY1(zA, N.trim())
            }
            o("list"), q("")
        }, [KA, N, I, !1]),
        NA = z8.default.useCallback((XA) => {
            let zA = parseInt(XA, 10),
                $A = QA[zA];
            if (!$A || d.current === zA.toString()) return;
            d.current = zA.toString(), p({
                id: zA.toString(),
                value: {
                    log: $A,
                    indexInFiltered: zA
                },
                label: ""
            })
        }, [QA]),
        qA = z8.default.useCallback((XA) => {
            p(XA)
        }, []);
    if (h1((XA, zA) => {
            if (u === "preview") return;
            if (u === "rename") {
                if (zA.escape) o("list"), q("")
            } else if (u === "search") {
                if (zA.escape || zA.return) o("list"), BA("tengu_session_search_toggled", {
                    enabled: !1
                });
                else if (zA.backspace || zA.delete) w(($A) => $A.slice(0, -1));
                else if (XA && !zA.ctrl && !zA.meta) w(($A) => $A + XA)
            } else {
                let $A = !zA.ctrl && !zA.meta,
                    LA = XA.toLowerCase();
                if (LA === "a" && $A && J) J(), BA("tengu_session_all_projects_toggled", {
                    enabled: !Y
                });
                else if (LA === "b" && $A) {
                    let TA = !C;
                    E(TA), BA("tengu_session_branch_filter_toggled", {
                        enabled: TA
                    })
                } else if (LA === "/" && $A) o("search"), BA("tengu_session_search_toggled", {
                    enabled: !0
                })
            }
        }, {
            isActive: !0
        }), A.length === 0) return null;
    let DA = [];
    if (C && D) DA.push(D);
    if (z && u !== "search") DA.push(`/${z}`);
    let yA = DA.length > 0 || u === "search",
        rA = 5 + (yA ? 1 : 0),
        K1 = 2,
        WA = Math.max(1, Math.floor((Q - rA - K1) / 3));
    return z8.default.createElement(j, {
        flexDirection: "column",
        height: Q - 1
    }, z8.default.createElement(j, {
        flexShrink: 0
    }, z8.default.createElement($, {
        color: "suggestion"
    }, "─".repeat(X))), z8.default.createElement(j, {
        flexShrink: 0
    }, z8.default.createElement($, null, " ")), z8.default.createElement(j, {
        flexShrink: 0
    }, z8.default.createElement($, {
        bold: !0,
        color: "suggestion"
    }, "Resume Session", Y ? " (All Projects)" : "")), yA && z8.default.createElement(j, {
        flexShrink: 0,
        paddingLeft: 2
    }, u === "search" ? z8.default.createElement($, null, DA.length > 0 && z8.default.createElement($, {
        dimColor: !0
    }, DA.join(" · "), " · "), "/", z8.default.createElement($, {
        bold: !0
    }, z), V && z8.default.createElement($, {
        dimColor: !0
    }, "█")) : z8.default.createElement($, {
        dimColor: !0
    }, DA.join(" · "))), z8.default.createElement(j, {
        flexShrink: 0
    }, z8.default.createElement($, null, " ")), u === "rename" && KA ? z8.default.createElement(j, {
        paddingLeft: 2,
        flexDirection: "column"
    }, z8.default.createElement($, {
        bold: !0
    }, "Rename session:"), z8.default.createElement(j, {
        paddingTop: 1
    }, z8.default.createElement(s4, {
        value: N,
        onChange: q,
        onSubmit: sA,
        placeholder: ajA(KA, "Enter new session name"),
        columns: X,
        cursorOffset: R,
        onChangeCursorOffset: P,
        showCursor: !0
    }))) : z8.default.createElement(M0, {
        options: wA,
        onChange: (XA) => {
            let zA = parseInt(XA, 10),
                $A = QA[zA];
            if ($A) Z($A)
        },
        visibleOptionCount: WA,
        onCancel: G,
        onFocus: NA,
        focusValue: x?.id.toString(),
        layout: "expanded",
        isDisabled: u === "search"
    }), z8.default.createElement(j, {
        paddingLeft: 2
    }, F.pending ? z8.default.createElement($, {
        dimColor: !0
    }, "Press ", F.keyName, " again to exit") : u === "rename" ? z8.default.createElement($, {
        dimColor: !0
    }, "Enter to save · Esc to cancel") : u === "search" ? z8.default.createElement($, {
        dimColor: !0
    }, "Enter or Esc to finish · type to filter") : z8.default.createElement($, {
        dimColor: !0
    }, (J ? `A to show ${Y?"current dir":"all projects"} · ` : "") + (D ? "B to toggle branch · " : "") + "/ to search · Esc to exit" + SA())))
}

function K_3(A) {
    let Q = A.reduce((B, G) => {
        let Z = G.messages[0]?.sessionId;
        if (Z) {
            let I = B.get(Z) || [];
            B.set(Z, [...I, G])
        }
        return B
    }, new Map);
    return Q.forEach((B) => B.sort((G, Z) => new Date(Z.modified).getTime() - new Date(G.modified).getTime())), Q
}
var z8, F_3 = 2,
    V_3 = 4;
var LY1 = L(() => {
    hA();
    m8();
    T5();
    yF9();
    c9();
    ED();
    FoA();
    QY();
    GG();
    S0();
    w0();
    xF9();
    u1();
    z8 = GA(VA(), 1)
});
async function Ka(A) {
    let Q = uQ(),
        G = {
            macos: ["pbcopy"],
            linux: ["xclip -selection clipboard", "wl-copy"],
            wsl: ["clip.exe"],
            windows: ["clip"],
            unknown: ["xclip -selection clipboard", "wl-copy"]
        } [Q];
    for (let Z of G) try {
        return await ds(Z, {
            input: A,
            shell: !0,
            reject: !0
        }), !0
    } catch (I) {
        e(Error(`Failed to execute clipboard command "${Z}": ${I}`));
        continue
    }
    return e(Error(`Failed to copy to clipboard on ${Q}`)), !1
}

function MY1() {
    let A = uQ();
    return {
        macos: "Failed to copy to clipboard. Make sure the `pbcopy` command is available on your system and try again.",
        windows: "Failed to copy to clipboard. Make sure the `clip` command is available on your system and try again.",
        wsl: "Failed to copy to clipboard. Make sure the `clip.exe` command is available in your WSL environment and try again.",
        linux: "Failed to copy to clipboard. Make sure `xclip` or `wl-copy` is installed on your system and try again.",
        unknown: "Failed to copy to clipboard. Make sure `xclip` or `wl-copy` is installed on your system and try again."
    } [A]
}
var rjA = L(() => {
    YKA();
    u1();
    s5()
});

function OY1(A, Q) {
    let B = pQ();
    if (Q && A.projectPath && A.projectPath !== B) {
        let G = A.messages.find((I) => I.sessionId)?.sessionId;
        return {
            isCrossProject: !0,
            command: `cd ${M8([A.projectPath])} && claude --resume ${G}`,
            projectPath: A.projectPath
        }
    }
    return {
        isCrossProject: !1
    }
}
var iF0 = L(() => {
    S0();
    KH()
});

function D_3({
    onDone: A,
    onResume: Q
}) {
    let [B, G] = IF.useState([]), [Z, I] = IF.useState(!0), [Y, J] = IF.useState(!1), {
        rows: W
    } = YB(), X = IF.useCallback(async (H) => {
        try {
            let C = H ? await RY1() : await Qx();
            if (C.length === 0) A("No conversations found to resume");
            else G(C)
        } catch (C) {
            A("Failed to load conversations")
        } finally {
            I(!1)
        }
    }, [A]);
    IF.useEffect(() => {
        I(!0), G([]), X(Y)
    }, [Y]);
    let F = IF.useCallback(() => {
        J((H) => !H)
    }, []);
    async function V(H) {
        let C = Y$(H.messages.find((z) => z.sessionId)?.sessionId);
        if (!C) {
            A("Failed to resume conversation");
            return
        }
        let E = OY1(H, Y);
        if (E.isCrossProject) {
            await Ka(E.command);
            let z = ["", "This conversation is from a different directory.", "", "To resume, run:", `  ${E.command}`, "", "(Command copied to clipboard)", ""].join(`
`);
            A(z, {
                display: "user"
            });
            return
        }
        Q(C, H)
    }

    function K() {
        A("Resume cancelled", {
            display: "system"
        })
    }
    if (Z) return IF.createElement(j, null, IF.createElement(e9, null), IF.createElement($, null, " Loading conversations…"));
    let D = B.filter((H) => !H.isSidechain);
    return IF.createElement(sjA, {
        logs: D,
        maxHeight: W - 2,
        onCancel: K,
        onSelect: V,
        onLogsChanged: () => X(Y),
        showAllProjects: Y,
        onToggleAllProjects: F
    })
}
var IF, H_3, bF9;
var fF9 = L(() => {
    hA();
    zI();
    LY1();
    GG();
    wy();
    m8();
    rjA();
    iF0();
    IF = GA(VA(), 1);
    H_3 = {
        type: "local-jsx",
        name: "resume",
        description: "Resume a conversation",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            let B = async (G, Z) => {
                await Q.resume?.(G, Z), A(void 0, {
                    display: "skip"
                })
            };
            return IF.createElement(D_3, {
                key: Date.now(),
                onDone: A,
                onResume: B
            })
        },
        userFacingName() {
            return "resume"
        }
    }, bF9 = H_3
});
var TY1;
var nF0 = L(() => {
    nV();
    TY1 = {
        type: "prompt",
        name: "review",
        description: "Review a pull request",
        isEnabled: () => !0,
        isHidden: !1,
        progressMessage: "reviewing pull request",
        userFacingName() {
            return "review"
        },
        source: "builtin",
        async getPromptForCommand(A) {
            return [{
                type: "text",
                text: `
      You are an expert code reviewer. Follow these steps:

      1. If no PR number is provided in the args, use ${X9.name}("gh pr list") to show open PRs
      2. If a PR number is provided, use ${X9.name}("gh pr view <number>") to get PR details
      3. Use ${X9.name}("gh pr diff <number>") to get the diff
      4. Analyze the changes and provide a thorough code review that includes:
         - Overview of what the PR does
         - Analysis of code quality and style
         - Specific suggestions for improvements
         - Any potential issues or risks
      
      Keep your review concise but thorough. Focus on:
      - Code correctness
      - Following project conventions
      - Performance implications
      - Test coverage
      - Security considerations

      Format your review with clear sections and bullet points.

      PR number: ${A}
    `
            }]
        }
    }
});
var hF9 = () => {};
var aF0, C_3, gF9;
var uF9 = L(() => {
    FY1();
    aF0 = GA(VA(), 1), C_3 = {
        type: "local-jsx",
        name: "status",
        description: "Show Claude Code status including version, model, account, API connectivity, and tool statuses",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            return aF0.createElement(ZFA, {
                onClose: A,
                context: Q,
                defaultTab: "Status"
            })
        },
        userFacingName() {
            return "status"
        }
    }, gF9 = C_3
});
var sF0, E_3, mF9;
var dF9 = L(() => {
    VW0();
    sF0 = GA(VA(), 1), E_3 = {
        type: "local-jsx",
        name: "tasks",
        aliases: ["bashes"],
        description: "List and manage background tasks",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            return sF0.createElement(oZ1, {
                toolUseContext: Q,
                onDone: A
            })
        },
        userFacingName() {
            return "tasks"
        }
    }, mF9 = E_3
});
var cF9 = () => {};
var yQA, z_3, pF9;
var lF9 = L(() => {
    Ei();
    S0();
    hA();
    ljA();
    rOA();
    yQA = GA(VA(), 1), z_3 = {
        type: "local",
        name: "todos",
        description: "List current todo items",
        isEnabled: () => !0,
        isHidden: !1,
        supportsNonInteractive: !0,
        async call(A, Q) {
            let B = G0(),
                G = Eh(B);
            if (G.length === 0) return {
                type: "text",
                value: "No todos currently tracked"
            };
            let Z = yQA.default.createElement(j, {
                flexDirection: "column"
            }, yQA.default.createElement($, null, yQA.default.createElement($, {
                bold: !0
            }, G.length, " ", G.length === 1 ? "todo" : "todos"), yQA.default.createElement($, null, ":")), yQA.default.createElement(j, {
                marginTop: 1
            }, yQA.default.createElement(si, {
                todos: G
            })));
            return {
                type: "text",
                value: await Va(Z)
            }
        },
        userFacingName() {
            return "todos"
        }
    }, pF9 = z_3
});
var U_3 = `---
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git log:*), Bash(git show:*), Bash(git remote show:*), Read, Glob, Grep, LS, Task
description: Complete a security review of the pending changes on the current branch
---

You are a senior security engineer conducting a focused security review of the changes on this branch.

GIT STATUS:

\`\`\`
!\`git status\`
\`\`\`

FILES MODIFIED:

\`\`\`
!\`git diff --name-only origin/HEAD...\`
\`\`\`

COMMITS:

\`\`\`
!\`git log --no-decorate origin/HEAD...\`
\`\`\`

DIFF CONTENT:

\`\`\`
!\`git diff --merge-base origin/HEAD\`
\`\`\`

Review the complete diff above. This contains all code changes in the PR.


OBJECTIVE:
Perform a security-focused code review to identify HIGH-CONFIDENCE security vulnerabilities that could have real exploitation potential. This is not a general code review - focus ONLY on security implications newly added by this PR. Do not comment on existing security concerns.

CRITICAL INSTRUCTIONS:
1. MINIMIZE FALSE POSITIVES: Only flag issues where you're >80% confident of actual exploitability
2. AVOID NOISE: Skip theoretical issues, style concerns, or low-impact findings
3. FOCUS ON IMPACT: Prioritize vulnerabilities that could lead to unauthorized access, data breaches, or system compromise
4. EXCLUSIONS: Do NOT report the following issue types:
   - Denial of Service (DOS) vulnerabilities, even if they allow service disruption
   - Secrets or sensitive data stored on disk (these are handled by other processes)
   - Rate limiting or resource exhaustion issues

SECURITY CATEGORIES TO EXAMINE:

**Input Validation Vulnerabilities:**
- SQL injection via unsanitized user input
- Command injection in system calls or subprocesses
- XXE injection in XML parsing
- Template injection in templating engines
- NoSQL injection in database queries
- Path traversal in file operations

**Authentication & Authorization Issues:**
- Authentication bypass logic
- Privilege escalation paths
- Session management flaws
- JWT token vulnerabilities
- Authorization logic bypasses

**Crypto & Secrets Management:**
- Hardcoded API keys, passwords, or tokens
- Weak cryptographic algorithms or implementations
- Improper key storage or management
- Cryptographic randomness issues
- Certificate validation bypasses

**Injection & Code Execution:**
- Remote code execution via deseralization
- Pickle injection in Python
- YAML deserialization vulnerabilities
- Eval injection in dynamic code execution
- XSS vulnerabilities in web applications (reflected, stored, DOM-based)

**Data Exposure:**
- Sensitive data logging or storage
- PII handling violations
- API endpoint data leakage
- Debug information exposure

Additional notes:
- Even if something is only exploitable from the local network, it can still be a HIGH severity issue

ANALYSIS METHODOLOGY:

Phase 1 - Repository Context Research (Use file search tools):
- Identify existing security frameworks and libraries in use
- Look for established secure coding patterns in the codebase
- Examine existing sanitization and validation patterns
- Understand the project's security model and threat model

Phase 2 - Comparative Analysis:
- Compare new code changes against existing security patterns
- Identify deviations from established secure practices
- Look for inconsistent security implementations
- Flag code that introduces new attack surfaces

Phase 3 - Vulnerability Assessment:
- Examine each modified file for security implications
- Trace data flow from user inputs to sensitive operations
- Look for privilege boundaries being crossed unsafely
- Identify injection points and unsafe deserialization

REQUIRED OUTPUT FORMAT:

You MUST output your findings in markdown. The markdown output should contain the file, line number, severity, category (e.g. \`sql_injection\` or \`xss\`), description, exploit scenario, and fix recommendation. 

For example:

# Vuln 1: XSS: \`foo.py:42\`

* Severity: High
* Description: User input from \`username\` parameter is directly interpolated into HTML without escaping, allowing reflected XSS attacks
* Exploit Scenario: Attacker crafts URL like /bar?q=<script>alert(document.cookie)</script> to execute JavaScript in victim's browser, enabling session hijacking or data theft
* Recommendation: Use Flask's escape() function or Jinja2 templates with auto-escaping enabled for all user inputs rendered in HTML

SEVERITY GUIDELINES:
- **HIGH**: Directly exploitable vulnerabilities leading to RCE, data breach, or authentication bypass
- **MEDIUM**: Vulnerabilities requiring specific conditions but with significant impact
- **LOW**: Defense-in-depth issues or lower-impact vulnerabilities

CONFIDENCE SCORING:
- 0.9-1.0: Certain exploit path identified, tested if possible
- 0.8-0.9: Clear vulnerability pattern with known exploitation methods
- 0.7-0.8: Suspicious pattern requiring specific conditions to exploit
- Below 0.7: Don't report (too speculative)

FINAL REMINDER:
Focus on HIGH and MEDIUM findings only. Better to miss some theoretical issues than flood the report with false positives. Each finding should be something a security engineer would confidently raise in a PR review.

FALSE POSITIVE FILTERING:

> You do not need to run commands to reproduce the vulnerability, just read the code to determine if it is a real vulnerability. Do not use the bash tool or write to any files.
>
> HARD EXCLUSIONS - Automatically exclude findings matching these patterns:
> 1. Denial of Service (DOS) vulnerabilities or resource exhaustion attacks.
> 2. Secrets or credentials stored on disk if they are otherwise secured.
> 3. Rate limiting concerns or service overload scenarios.
> 4. Memory consumption or CPU exhaustion issues.
> 5. Lack of input validation on non-security-critical fields without proven security impact.
> 6. Input sanitization concerns for GitHub Action workflows unless they are clearly triggerable via untrusted input.
> 7. A lack of hardening measures. Code is not expected to implement all security best practices, only flag concrete vulnerabilities.
> 8. Race conditions or timing attacks that are theoretical rather than practical issues. Only report a race condition if it is concretely problematic.
> 9. Vulnerabilities related to outdated third-party libraries. These are managed separately and should not be reported here.
> 10. Memory safety issues such as buffer overflows or use-after-free-vulnerabilities are impossible in rust. Do not report memory safety issues in rust or any other memory safe languages.
> 11. Files that are only unit tests or only used as part of running tests.
> 12. Log spoofing concerns. Outputting un-sanitized user input to logs is not a vulnerability.
> 13. SSRF vulnerabilities that only control the path. SSRF is only a concern if it can control the host or protocol.
> 14. Including user-controlled content in AI system prompts is not a vulnerability.
> 15. Regex injection. Injecting untrusted content into a regex is not a vulnerability.
> 16. Regex DOS concerns.
> 16. Insecure documentation. Do not report any findings in documentation files such as markdown files.
> 17. A lack of audit logs is not a vulnerability.
> 
> PRECEDENTS -
> 1. Logging high value secrets in plaintext is a vulnerability. Logging URLs is assumed to be safe.
> 2. UUIDs can be assumed to be unguessable and do not need to be validated.
> 3. Environment variables and CLI flags are trusted values. Attackers are generally not able to modify them in a secure environment. Any attack that relies on controlling an environment variable is invalid.
> 4. Resource management issues such as memory or file descriptor leaks are not valid.
> 5. Subtle or low impact web vulnerabilities such as tabnabbing, XS-Leaks, prototype pollution, and open redirects should not be reported unless they are extremely high confidence.
> 6. React and Angular are generally secure against XSS. These frameworks do not need to sanitize or escape user input unless it is using dangerouslySetInnerHTML, bypassSecurityTrustHtml, or similar methods. Do not report XSS vulnerabilities in React or Angular components or tsx files unless they are using unsafe methods.
> 7. Most vulnerabilities in github action workflows are not exploitable in practice. Before validating a github action workflow vulnerability ensure it is concrete and has a very specific attack path.
> 8. A lack of permission checking or authentication in client-side JS/TS code is not a vulnerability. Client-side code is not trusted and does not need to implement these checks, they are handled on the server-side. The same applies to all flows that send untrusted data to the backend, the backend is responsible for validating and sanitizing all inputs.
> 9. Only include MEDIUM findings if they are obvious and concrete issues.
> 10. Most vulnerabilities in ipython notebooks (*.ipynb files) are not exploitable in practice. Before validating a notebook vulnerability ensure it is concrete and has a very specific attack path where untrusted input can trigger the vulnerability.
> 11. Logging non-PII data is not a vulnerability even if the data may be sensitive. Only report logging vulnerabilities if they expose sensitive information such as secrets, passwords, or personally identifiable information (PII).
> 12. Command injection vulnerabilities in shell scripts are generally not exploitable in practice since shell scripts generally do not run with untrusted user input. Only report command injection vulnerabilities in shell scripts if they are concrete and have a very specific attack path for untrusted input.
> 
> SIGNAL QUALITY CRITERIA - For remaining findings, assess:
> 1. Is there a concrete, exploitable vulnerability with a clear attack path?
> 2. Does this represent a real security risk vs theoretical best practice?
> 3. Are there specific code locations and reproduction steps?
> 4. Would this finding be actionable for a security team?
> 
> For each finding, assign a confidence score from 1-10:
> - 1-3: Low confidence, likely false positive or noise
> - 4-6: Medium confidence, needs investigation
> - 7-10: High confidence, likely true vulnerability

START ANALYSIS:

Begin your analysis now. Do this in 3 steps:

1. Use a sub-task to identify vulnerabilities. Use the repository exploration tools to understand the codebase context, then analyze the PR changes for security implications. In the prompt for this sub-task, include all of the above.
2. Then for each vulnerability identified by the above sub-task, create a new sub-task to filter out false-positives. Launch these sub-tasks as parallel sub-tasks. In the prompt for these sub-tasks, include everything in the "FALSE POSITIVE FILTERING" instructions.
3. Filter out any vulnerabilities where the sub-task reported a confidence less than 8.

Your final reply must contain the markdown report and nothing else.`,
    iF9;
var nF9 = L(() => {
    XjA();
    Ny();
    iF9 = {
        type: "prompt",
        name: "security-review",
        description: "Complete a security review of the pending changes on the current branch",
        isEnabled: () => !0,
        isHidden: !1,
        progressMessage: "analyzing code changes for security risks",
        userFacingName() {
            return "security-review"
        },
        source: "builtin",
        async getPromptForCommand(A, Q) {
            let B = yF(U_3),
                G = HO(B.frontmatter["allowed-tools"]);
            return [{
                type: "text",
                text: await Ba(B.content, {
                    ...Q,
                    async getAppState() {
                        let I = await Q.getAppState();
                        return {
                            ...I,
                            toolPermissionContext: {
                                ...I.toolPermissionContext,
                                alwaysAllowRules: {
                                    ...I.toolPermissionContext.alwaysAllowRules,
                                    command: G
                                }
                            }
                        }
                    }
                }, "security-review")
            }]
        }
    }
});
var rF0, aF9;
var sF9 = L(() => {
    FY1();
    rF0 = GA(VA(), 1), aF9 = {
        type: "local-jsx",
        name: "usage",
        description: "Show plan usage limits",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            return rF0.createElement(ZFA, {
                onClose: A,
                context: Q,
                defaultTab: "Usage"
            })
        },
        userFacingName() {
            return "usage"
        }
    }
});

function $_3() {
    let A = L1(),
        Q = A.editorMode || "normal";
    if (Q === "emacs") Q = "normal";
    let B = Q === "normal" ? "vim" : "normal";
    return d0({
        ...A,
        editorMode: B
    }), BA("tengu_editor_mode_changed", {
        mode: B,
        source: "command"
    }), Promise.resolve({
        type: "text",
        value: `Editor mode set to ${B}. ${B==="vim"?"Use Escape key to toggle between INSERT and NORMAL modes.":"Using standard (readline) keyboard bindings."}`
    })
}
var w_3, rF9;
var oF9 = L(() => {
    jQ();
    w0();
    w_3 = {
        name: "vim",
        description: "Toggle between Vim and Normal editing modes",
        isEnabled: () => !0,
        isHidden: !1,
        supportsNonInteractive: !1,
        type: "local",
        userFacingName: () => "vim",
        call: $_3
    }, rF9 = w_3
});
var oF0, q_3, tF9;
var eF9 = L(() => {
    BF0();
    oF0 = GA(VA(), 1), q_3 = {
        type: "local-jsx",
        name: "permissions",
        aliases: ["allowed-tools"],
        description: "Manage allow & deny tool permission rules",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A) {
            return oF0.createElement(AY1, {
                onExit: A
            })
        },
        userFacingName() {
            return "permissions"
        }
    }, tF9 = q_3
});
var sF, N_3, AV9;
var QV9 = L(() => {
    hA();
    S0();
    _E();
    vn();
    yJ();
    ljA();
    sF = GA(VA(), 1), N_3 = {
        type: "local",
        name: "plan",
        description: "View or open the current session plan",
        argumentHint: "[open]",
        isEnabled: () => !0,
        isHidden: !1,
        supportsNonInteractive: !0,
        async call(A, Q) {
            let B = G0(),
                G = fU(B),
                Z = bU(B);
            if (!G) return {
                type: "text",
                value: "No plan found for current session"
            };
            if (A.trim().split(/\s+/)[0] === "open") try {
                return await xn(Z), {
                    type: "text",
                    value: `Opened plan in editor: ${Z}`
                }
            } catch (F) {
                return {
                    type: "text",
                    value: `Failed to open plan in editor: ${F}`
                }
            }
            let Y = rh(),
                J = Y ? aH(Y) : void 0;
            return {
                type: "text",
                value: await Va(sF.createElement(j, {
                    flexDirection: "column"
                }, sF.createElement($, {
                    bold: !0
                }, "Current Plan"), sF.createElement($, {
                    dimColor: !0
                }, Z), sF.createElement(j, {
                    marginTop: 1
                }, sF.createElement($, null, G)), J && sF.createElement(j, {
                    marginTop: 1
                }, sF.createElement($, {
                    dimColor: !0
                }, '"/plan open"'), sF.createElement($, {
                    dimColor: !0
                }, " to edit this plan in "), sF.createElement($, {
                    bold: !0,
                    dimColor: !0
                }, J))))
            }
        },
        userFacingName() {
            return "plan"
        }
    }, AV9 = N_3
});

function L_3(A) {
    return A.map((Q) => {
        let B = Q.isAvailable ? "Available" : "Redeemed";
        return {
            label: `${Q.isAvailable?V1.tick:V1.circle} Pass ${Q.passNumber} · ${B}`,
            value: Q.passNumber
        }
    })
}

function BV9({
    onDone: A
}) {
    let [Q, B] = xQA.useState(!0), [G, Z] = xQA.useState([]), [I, Y] = xQA.useState(!1), [J, W] = xQA.useState(null), X = DQ(() => A("Guest passes dialog dismissed", {
        display: "system"
    }));
    h1((V, K) => {
        if (K.escape) A("Guest passes dialog dismissed", {
            display: "system"
        })
    });
    let F = async (V) => {
        if (!G.find((D) => D.passNumber === V)) return;
        if (J)
            if (await Ka(J)) A("Referral link copied to clipboard!");
            else A(MY1(), {
                display: "system"
            });
        else A("No referral link available", {
            display: "system"
        })
    };
    if (xQA.useEffect(() => {
            async function V() {
                try {
                    let K = await UjA();
                    if (!K || !K.eligible) {
                        Y(!1), B(!1);
                        return
                    }
                    if (Y(!0), K.referral_code_details?.referral_link) W(K.referral_code_details.referral_link);
                    let D;
                    try {
                        D = await w69()
                    } catch (z) {
                        e(z), Y(!1), B(!1);
                        return
                    }
                    let H = D.redemptions || [],
                        C = D.limit || 3,
                        E = [];
                    for (let z = 0; z < C; z++) {
                        let w = H[z];
                        E.push({
                            passNumber: z + 1,
                            isAvailable: !w
                        })
                    }
                    Z(E), B(!1)
                } catch (K) {
                    e(K), Y(!1), B(!1)
                }
            }
            V()
        }, []), Q) return z9.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1
    }, z9.createElement($, {
        dimColor: !0
    }, "Loading guest pass information…"), z9.createElement($, {
        dimColor: !0,
        italic: !0
    }, X.pending ? z9.createElement(z9.Fragment, null, "Press ", X.keyName, " again to exit") : z9.createElement(z9.Fragment, null, "Esc to exit")));
    if (!I) return z9.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1
    }, z9.createElement($, null, "Guest passes are not currently available."), z9.createElement($, {
        dimColor: !0,
        italic: !0
    }, X.pending ? z9.createElement(z9.Fragment, null, "Press ", X.keyName, " again to exit") : z9.createElement(z9.Fragment, null, "Esc to exit")));
    return z9.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1
    }, z9.createElement($, {
        bold: !0
    }, "Guest Passes"), z9.createElement(j, {
        flexDirection: "column"
    }, z9.createElement($, {
        dimColor: !0
    }, "Share a 7-day free Pro trial with friends. They'll get full access to Claude Pro features."), J && z9.createElement(j, {
        marginTop: 1
    }, z9.createElement($, {
        dimColor: !0
    }, J))), z9.createElement(M0, {
        options: L_3(G),
        onChange: F,
        onCancel: () => A("Guest passes dialog dismissed", {
            display: "system"
        }),
        layout: "compact-vertical",
        visibleOptionCount: G.length
    }), z9.createElement(j, {
        marginTop: 1
    }, z9.createElement($, {
        dimColor: !0,
        italic: !0
    }, X.pending ? z9.createElement(z9.Fragment, null, "Press ", X.keyName, " again to exit") : z9.createElement(z9.Fragment, null, "Enter to copy link · Esc to exit"))))
}
var z9, xQA;
var GV9 = L(() => {
    hA();
    $jA();
    u1();
    n2();
    rjA();
    T6();
    c9();
    z9 = GA(VA(), 1), xQA = GA(VA(), 1)
});
var tF0, ZV9;
var IV9 = L(() => {
    GV9();
    jQ();
    w0();
    tF0 = GA(VA(), 1), ZV9 = {
        type: "local-jsx",
        name: "passes",
        description: "Share a 7-day free Pro trial with friends!",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A) {
            let Q = L1(),
                B = !Q.hasVisitedPasses;
            if (B) d0({
                ...Q,
                hasVisitedPasses: !0
            });
            return BA("tengu_guest_passes_visited", {
                is_first_visit: B
            }), tF0.createElement(BV9, {
                onDone: A
            })
        },
        userFacingName() {
            return "passes"
        }
    }
});

function YV9(A, Q, B) {
    if (A !== null && A.grove_enabled !== null) return !1;
    if (B) return !0;
    if (Q !== null && !Q.notice_is_grace_period) return !0;
    let Z = Q?.notice_reminder_frequency;
    if (Z !== null && Z !== void 0 && A?.grove_notice_viewed_at) return Math.floor((Date.now() - new Date(A.grove_notice_viewed_at).getTime()) / 86400000) >= Z;
    else {
        let I = A?.grove_notice_viewed_at;
        return I === null || I === void 0
    }
}

function O_3() {
    return TQ.default.createElement(TQ.default.Fragment, null, TQ.default.createElement(j, {
        flexDirection: "column"
    }, TQ.default.createElement($, {
        bold: !0,
        color: "professionalBlue"
    }, "Updates to Consumer Terms and Policies"), TQ.default.createElement($, null, "An update to our Consumer Terms and Privacy Policy will take effect on", " ", TQ.default.createElement($, {
        bold: !0
    }, "October 8, 2025"), ". You can accept the updated terms today.")), TQ.default.createElement(j, {
        flexDirection: "column"
    }, TQ.default.createElement($, null, "What's changing?"), TQ.default.createElement(j, {
        paddingLeft: 1
    }, TQ.default.createElement($, null, TQ.default.createElement($, null, "• "), TQ.default.createElement($, {
        bold: !0
    }, "You can help improve Claude "), TQ.default.createElement($, null, "— Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (", TQ.default.createElement(a4, {
        url: "https://claude.ai/settings/data-privacy-controls"
    }), ")."))), TQ.default.createElement(j, {
        paddingLeft: 1
    }, TQ.default.createElement($, null, TQ.default.createElement($, null, "• "), TQ.default.createElement($, {
        bold: !0
    }, "Updates to data retention "), TQ.default.createElement($, null, "— To help us improve our AI models and safety protections, we're extending data retention to 5 years.")))), TQ.default.createElement($, null, "Learn more (", TQ.default.createElement(a4, {
        url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
    }), ") or read the updated Consumer Terms (", TQ.default.createElement(a4, {
        url: "https://anthropic.com/legal/terms"
    }), ") and Privacy Policy (", TQ.default.createElement(a4, {
        url: "https://anthropic.com/legal/privacy"
    }), ")"))
}

function R_3() {
    return TQ.default.createElement(TQ.default.Fragment, null, TQ.default.createElement(j, {
        flexDirection: "column"
    }, TQ.default.createElement($, {
        bold: !0,
        color: "professionalBlue"
    }, "Updates to Consumer Terms and Policies"), TQ.default.createElement($, null, "We've updated our Consumer Terms and Privacy Policy.")), TQ.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, TQ.default.createElement($, null, "What's changing?"), TQ.default.createElement(j, {
        flexDirection: "column"
    }, TQ.default.createElement($, {
        bold: !0
    }, "Help improve Claude"), TQ.default.createElement($, null, "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings"), TQ.default.createElement(a4, {
        url: "https://claude.ai/settings/data-privacy-controls"
    })), TQ.default.createElement(j, {
        flexDirection: "column"
    }, TQ.default.createElement($, {
        bold: !0
    }, "How this affects data retention"), TQ.default.createElement($, null, "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime."))), TQ.default.createElement($, null, "Learn more (", TQ.default.createElement(a4, {
        url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
    }), ") or read the updated Consumer Terms (", TQ.default.createElement(a4, {
        url: "https://anthropic.com/legal/terms"
    }), ") and Privacy Policy (", TQ.default.createElement(a4, {
        url: "https://anthropic.com/legal/privacy"
    }), ")"))
}

function PY1({
    showIfAlreadyViewed: A,
    location: Q,
    onDone: B
}) {
    let [G, Z] = TQ.useState(null), [I, Y] = TQ.useState(null), J = DQ();