/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.853Z
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 13/13
 * Lines: 447174 - 448673 (1500 lines)
 * Original file: cli.js
 */

        case "no_permissions":
            if (process.stderr.write(`Error: Insufficient permissions to install update
`), Z) process.stderr.write(`Try manually updating with:
`), process.stderr.write(`  cd ~/.claude/local && npm update ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}
`);
            else process.stderr.write(`Try running with sudo or fix npm permissions
`), process.stderr.write(`Or consider migrating to a local installation with:
`), process.stderr.write(`  claude migrate-installer
`);
            await S6(1);
            break;
        case "install_failed":
            if (process.stderr.write(`Error: Failed to install update
`), Z) process.stderr.write(`Try manually updating with:
`), process.stderr.write(`  cd ~/.claude/local && npm update ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}
`);
            else process.stderr.write(`Or consider migrating to a local installation with:
`), process.stderr.write(`  claude migrate-installer
`);
            await S6(1);
            break;
        case "in_progress":
            process.stderr.write(`Error: Another instance is currently performing an update
`), process.stderr.write(`Please wait and try again later
`), await S6(1);
            break
    }
    await S6(0)
}
var _U9;
var yU9 = L(() => {
    w0();
    LIA();
    DQ1();
    jQ();
    nT();
    xP();
    Ih();
    J9();
    D0();
    _J();
    _U9 = GA(WE(), 1)
});
import {
    homedir as bf3
} from "node:os";
import {
    join as ff3
} from "node:path";

function hf3() {
    let A = m0.platform === "win32",
        Q = bf3();
    if (A) return ff3(Q, ".local", "bin", "claude.exe").replace(/\//g, "\\");
    return "~/.local/bin/claude"
}

function xU9({
    messages: A
}) {
    if (A.length === 0) return null;
    return R8.default.createElement(j, {
        flexDirection: "column",
        gap: 0,
        marginBottom: 1
    }, R8.default.createElement(j, null, R8.default.createElement($, {
        color: "warning"
    }, V1.warning, " Setup notes:")), A.map((Q, B) => R8.default.createElement(j, {
        key: B,
        marginLeft: 2
    }, R8.default.createElement($, {
        dimColor: !0
    }, "• ", Q))))
}

function gf3({
    onDone: A,
    force: Q,
    target: B
}) {
    let [G, Z] = R8.useState({
        type: "checking"
    });
    return R8.useEffect(() => {
        // Async function: I
async function I() {
            try {
                g(`Install: Starting installation process (force=${Q}, target=${B})`), Z({
                    type: "installing",
                    version: B || "stable"
                }), g(`Install: Calling installLatest(force=true, target=${B}, forceReinstall=${Q})`);
                let J = await th(!0, B, Q);
                if (g(`Install: installLatest returned version=${J.latestVersion}, wasUpdated=${J.wasUpdated}, lockFailed=${J.lockFailed}`), J.lockFailed) throw Error("Could not install - another process is currently installing Claude. Please try again in a moment.");
                if (!J.latestVersion) g("Install: Failed to retrieve version information during install", {
                    level: "error"
                });
                if (!J.wasUpdated) g("Install: Already up to date");
                Z({
                    type: "setting-up"
                });
                let W = await yy(!0);
                if (g(`Install: Setup launcher completed with ${W.length} messages`), W.length > 0) W.forEach((H) => g(`Install: Setup message: ${H.message}`));
                g("Install: Cleaning up npm installations after successful install");
                let {
                    removed: X,
                    errors: F,
                    warnings: V
                } = await xTA();
                if (X > 0) g(`Cleaned up ${X} npm installation(s)`);
                if (F.length > 0) g(`Cleanup errors: ${F.join(", ")}`);
                let K = yTA();
                if (K.length > 0) g(`Shell alias cleanup: ${K.map((H)=>H.message).join("; ")}`);
                BA("tengu_claude_install_command", {
                    has_version: J.latestVersion ? 1 : 0,
                    forced: Q ? 1 : 0
                });
                let D = [...V, ...K.map((H) => H.message)];
                if (W.length > 0) Z({
                    type: "set-up",
                    messages: W.map((H) => H.message)
                }), setTimeout(() => {
                    Z({
                        type: "success",
                        version: J.latestVersion || "current",
                        setupMessages: [...W.map((H) => H.message), ...D]
                    })
                }, 2000);
                else g("Install: Shell PATH already configured"), Z({
                    type: "success",
                    version: J.latestVersion || "current",
                    setupMessages: D.length > 0 ? D : void 0
                })
            } catch (Y) {
                g(`Install command failed: ${Y}`, {
                    level: "error"
                }), Z({
                    type: "error",
                    message: Y instanceof Error ? Y.message : String(Y)
                })
            }
        }
        I()
    }, [Q, B]), R8.useEffect(() => {
        if (G.type === "success") setTimeout(() => {
            A("Claude Code installation completed successfully", {
                display: "system"
            })
        }, 2000);
        else if (G.type === "error") setTimeout(() => {
            A("Claude Code installation failed", {
                display: "system"
            })
        }, 3000)
    }, [G, A]), R8.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, G.type === "checking" && R8.default.createElement($, {
        color: "claude"
    }, "Checking installation status..."), G.type === "cleaning-npm" && R8.default.createElement($, {
        color: "warning"
    }, "Cleaning up old npm installations..."), G.type === "installing" && R8.default.createElement($, {
        color: "claude"
    }, "Installing Claude Code native build ", G.version, "..."), G.type === "setting-up" && R8.default.createElement($, {
        color: "claude"
    }, "Setting up launcher and shell integration..."), G.type === "set-up" && R8.default.createElement(xU9, {
        messages: G.messages
    }), G.type === "success" && R8.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, R8.default.createElement(j, null, R8.default.createElement($, {
        color: "success"
    }, V1.tick, " "), R8.default.createElement($, {
        color: "success",
        bold: !0
    }, "Claude Code successfully installed!")), R8.default.createElement(j, {
        marginLeft: 2,
        flexDirection: "column",
        gap: 1
    }, G.version !== "current" && R8.default.createElement(j, null, R8.default.createElement($, {
        dimColor: !0
    }, "Version: "), R8.default.createElement($, {
        color: "claude"
    }, G.version)), R8.default.createElement(j, null, R8.default.createElement($, {
        dimColor: !0
    }, "Location: "), R8.default.createElement($, {
        color: "text"
    }, hf3()))), R8.default.createElement(j, {
        marginLeft: 2,
        flexDirection: "column",
        gap: 1
    }, R8.default.createElement(j, {
        marginTop: 1
    }, R8.default.createElement($, {
        dimColor: !0
    }, "Next: Run "), R8.default.createElement($, {
        color: "claude",
        bold: !0
    }, "claude --help"), R8.default.createElement($, {
        dimColor: !0
    }, " to get started"))), G.setupMessages && R8.default.createElement(xU9, {
        messages: G.setupMessages
    })), G.type === "error" && R8.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, R8.default.createElement(j, null, R8.default.createElement($, {
        color: "error"
    }, V1.cross, " "), R8.default.createElement($, {
        color: "error"
    }, "Installation failed")), R8.default.createElement($, {
        color: "error"
    }, G.message), R8.default.createElement(j, {
        marginTop: 1
    }, R8.default.createElement($, {
        dimColor: !0
    }, "Try running with --force to override checks"))))
}
var R8, vU9;
var bU9 = L(() => {
    hA();
    hA();
    xP();
    D0();
    w0();
    n2();
    f5();
    R8 = GA(VA(), 1);
    vU9 = {
        type: "local-jsx",
        name: "install",
        description: "Install Claude Code native build",
        argumentHint: "[options]",
        async call(A, Q, B) {
            let G = B.includes("--force"),
                I = B.filter((J) => !J.startsWith("--"))[0],
                {
                    unmount: Y
                } = await Z3(R8.default.createElement(gf3, {
                    onDone: (J, W) => {
                        Y(), A(J, W)
                    },
                    force: G,
                    target: I
                }))
        }
    }
});

function fU9({
    targetRepo: A,
    initialPaths: Q,
    onSelectPath: B,
    onCancel: G
}) {
    let [Z, I] = aW.useState(Q), [Y, J] = aW.useState(null), [W, X] = aW.useState(!1), F = aW.useCallback(async (K) => {
        if (K === "cancel") {
            G();
            return
        }
        if (X(!0), J(null), await EE9(K, A)) {
            B(K);
            return
        }
        zE9(A, K);
        let H = Z.filter((C) => C !== K);
        I(H), X(!1), J(`${Q5(K)} no longer contains the correct repository. Select another path.`)
    }, [A, Z, B, G]), V = [...Z.map((K) => ({
        label: `Use ${oA.bold(Q5(K))}`,
        value: K
    })), {
        label: "Cancel",
        value: "cancel"
    }];
    return aW.default.createElement(kD, {
        title: "Teleport to Repo",
        onCancel: G,
        color: "background",
        borderDimColor: !0
    }, Z.length > 0 ? aW.default.createElement(aW.default.Fragment, null, aW.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, Y && aW.default.createElement($, {
        color: "error"
    }, Y), aW.default.createElement($, null, "Open Claude Code in ", aW.default.createElement($, {
        bold: !0
    }, A), ":")), W ? aW.default.createElement(j, null, aW.default.createElement(e9, null), aW.default.createElement($, null, " Validating repository…")) : aW.default.createElement(M0, {
        options: V,
        onChange: (K) => void F(K),
        onCancel: G
    })) : aW.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, Y && aW.default.createElement($, {
        color: "error"
    }, Y), aW.default.createElement($, {
        dimColor: !0
    }, "Run claude --teleport from a checkout of ", A)))
}
var aW;
var hU9 = L(() => {
    hA();
    Di();
    T6();
    zI();
    M9();
    CJ1();
    J9();
    aW = GA(VA(), 1)
});

function uU9({
    onSelect: A,
    onCancel: Q,
    isEmbedded: B = !1
}) {
    let {
        rows: G
    } = YB(), [Z, I] = _4.useState([]), [Y, J] = _4.useState(null), [W, X] = _4.useState(!0), [F, V] = _4.useState(null), [K, D] = _4.useState(!1), [H, C] = _4.useState(!1), E = _4.useCallback(async () => {
        try {
            X(!0), V(null);
            let v = await JO();
            J(v), g(`Current repository: ${v||"not detected"}`);
            let x = await BT2(),
                p = x;
            if (v) p = x.filter((o) => {
                if (!o.repo) return !1;
                return `${o.repo.owner.login}/${o.repo.name}` === v
            }), g(`Filtered ${p.length} sessions for repo ${v} from ${x.length} total`);
            let u = [...p].sort((o, l) => {
                let k = new Date(o.updated_at);
                return new Date(l.updated_at).getTime() - k.getTime()
            });
            I(u)
        } catch (v) {
            let x = v instanceof Error ? v.message : String(v);
            g(`Error loading code sessions: ${x}`), V(mf3(x))
        } finally {
            X(!1), D(!1)
        }
    }, []), z = () => {
        D(!0), E()
    };
    h1((v, x) => {
        if (x.escape || x.ctrl && v === "c") {
            Q();
            return
        }
        if (x.ctrl && v === "r" && F) {
            z();
            return
        }
        if (F !== null && x.return) {
            Q();
            return
        }
    });
    let w = _4.useCallback(() => {
        C(!0), E()
    }, [C, E]);
    if (!H) return _4.default.createElement(V61, {
        onComplete: w
    });
    if (W) return _4.default.createElement(j, {
        flexDirection: "column",
        padding: 1
    }, _4.default.createElement(j, {
        flexDirection: "row"
    }, _4.default.createElement(e9, null), _4.default.createElement($, {
        bold: !0
    }, "Loading Claude Code sessions…")), _4.default.createElement($, {
        dimColor: !0
    }, K ? "Retrying…" : "Fetching your Claude Code sessions…"));
    if (F) return _4.default.createElement(j, {
        flexDirection: "column",
        padding: 1
    }, _4.default.createElement($, {
        bold: !0,
        color: "error"
    }, "Error loading Claude Code sessions"), df3(F), _4.default.createElement($, {
        dimColor: !0
    }, "Press ", _4.default.createElement($, {
        bold: !0
    }, "Ctrl+R"), " to retry · Press ", _4.default.createElement($, {
        bold: !0
    }, "Esc"), " ", "to cancel"));
    if (Z.length === 0) return _4.default.createElement(j, {
        flexDirection: "column",
        padding: 1
    }, _4.default.createElement($, {
        bold: !0
    }, "No Claude Code sessions found", Y && _4.default.createElement($, null, " for ", Y)), _4.default.createElement(j, {
        marginTop: 1
    }, _4.default.createElement($, {
        dimColor: !0
    }, "Press ", _4.default.createElement($, {
        bold: !0
    }, "Esc"), " to cancel")));
    let N = Z.map((v) => ({
            ...v,
            timeString: TsA(new Date(v.updated_at))
        })),
        q = Math.max(gU9.length, ...N.map((v) => v.timeString.length)),
        R = N.map(({
            timeString: v,
            title: x,
            id: p
        }) => {
            return {
                label: `${v.padEnd(q," ")}  ${x}`,
                value: p
            }
        }),
        P = B ? Math.min(Z.length + 7, G - 6) : G - 1,
        y = B ? Math.min(Z.length, 12) : Math.min(Z.length, G - 6);
    return _4.default.createElement(j, {
        flexDirection: "column",
        padding: 1,
        height: P
    }, _4.default.createElement($, {
        bold: !0
    }, "Select a session to resume", Y && _4.default.createElement($, {
        dimColor: !0
    }, " (", Y, ")"), ":"), _4.default.createElement(j, {
        flexDirection: "column",
        marginY: 1,
        flexGrow: 1
    }, _4.default.createElement(j, {
        marginLeft: 2
    }, _4.default.createElement($, {
        bold: !0
    }, gU9.padEnd(q, " "), uf3, "Session Title")), _4.default.createElement(M0, {
        visibleOptionCount: y,
        options: R,
        onCancel: () => {},
        onChange: (v) => {
            let x = Z.find((p) => p.id === v);
            if (x) A(x)
        }
    })), _4.default.createElement(j, {
        flexDirection: "row"
    }, _4.default.createElement($, {
        dimColor: !0
    }, "↑/↓ to select · Enter to confirm · Esc to cancel")))
}

function mf3(A) {
    let Q = A.toLowerCase();
    if (Q.includes("fetch") || Q.includes("network") || Q.includes("timeout")) return "network";
    if (Q.includes("auth") || Q.includes("token") || Q.includes("permission") || Q.includes("oauth") || Q.includes("not authenticated") || Q.includes("/login") || Q.includes("console account") || Q.includes("403")) return "auth";
    if (Q.includes("api") || Q.includes("rate limit") || Q.includes("500") || Q.includes("529")) return "api";
    return "other"
}

function df3(A) {
    switch (A) {
        case "network":
            return _4.default.createElement(j, {
                marginY: 1,
                flexDirection: "column"
            }, _4.default.createElement($, {
                dimColor: !0
            }, "Check your internet connection"));
        case "auth":
            return _4.default.createElement(j, {
                marginY: 1,
                flexDirection: "column"
            }, _4.default.createElement($, {
                dimColor: !0
            }, "Teleport requires a Claude account"), _4.default.createElement($, {
                dimColor: !0
            }, "Run ", _4.default.createElement($, {
                bold: !0
            }, "/login"), ' and select "Claude account with subscription"'));
        case "api":
            return _4.default.createElement(j, {
                marginY: 1,
                flexDirection: "column"
            }, _4.default.createElement($, {
                dimColor: !0
            }, "Sorry, Claude encountered an error"));
        case "other":
            return _4.default.createElement(j, {
                marginY: 1,
                flexDirection: "row"
            }, _4.default.createElement($, {
                dimColor: !0
            }, "Sorry, Claude Code encountered an error"))
    }
}
var _4, gU9 = "Updated",
    uf3 = "  ";
var mU9 = L(() => {
    hA();
    T6();
    zI();
    m8();
    D0();
    N80();
    Y0A();
    An();
    _4 = GA(VA(), 1)
});

function dU9(A) {
    let [Q, B] = mQA.useState(!1), [G, Z] = mQA.useState(null), [I, Y] = mQA.useState(null), J = mQA.useCallback(async (X) => {
        B(!0), Z(null), Y(X), BA("tengu_teleport_resume_session", {
            source: A,
            session_id: X.id
        });
        try {
            let F = await CRA(X.id);
            return B(!1), F
        } catch (F) {
            let V = {
                message: F instanceof GI ? F.message : F instanceof Error ? F.message : String(F),
                formattedMessage: F instanceof GI ? F.formattedMessage : void 0,
                isOperationError: F instanceof GI
            };
            return Z(V), B(!1), null
        }
    }, [A]), W = mQA.useCallback(() => {
        Z(null)
    }, []);
    return {
        resumeSession: J,
        isResuming: Q,
        error: G,
        selectedSession: I,
        clearError: W
    }
}
var mQA;
var cU9 = L(() => {
    W0A();
    $Z();
    w0();
    mQA = GA(VA(), 1)
});

function cf3({
    onComplete: A,
    onCancel: Q,
    onError: B,
    isEmbedded: G = !1,
    source: Z
}) {
    let {
        resumeSession: I,
        isResuming: Y,
        error: J,
        selectedSession: W
    } = dU9(Z), X = async (V) => {
        let K = await I(V);
        if (K) A(K);
        else if (J) {
            if (B) B(J.message, J.formattedMessage)
        }
    }, F = () => {
        BA("tengu_teleport_cancelled", {}), Q()
    };
    if (Y && W) return Xz.default.createElement(j, {
        flexDirection: "column",
        padding: 1
    }, Xz.default.createElement(j, {
        flexDirection: "row"
    }, Xz.default.createElement(e9, null), Xz.default.createElement($, {
        bold: !0
    }, "Resuming session…")), Xz.default.createElement($, {
        dimColor: !0
    }, 'Loading "', W.title, '"…'));
    if (J && !B) return Xz.default.createElement(j, {
        flexDirection: "column",
        padding: 1
    }, Xz.default.createElement($, {
        bold: !0,
        color: "error"
    }, "Failed to resume session"), Xz.default.createElement($, {
        dimColor: !0
    }, J.message), Xz.default.createElement(j, {
        marginTop: 1
    }, Xz.default.createElement($, {
        dimColor: !0
    }, "Press ", Xz.default.createElement($, {
        bold: !0
    }, "Esc"), " to cancel")));
    return Xz.default.createElement(uU9, {
        onSelect: X,
        onCancel: F,
        isEmbedded: G
    })
}
// Async function: pU9
async function pU9() {
    return g("selectAndResumeTeleportTask: Starting teleport flow..."), new Promise(async (A) => {
        let {
            unmount: Q
        } = await Z3(Xz.default.createElement(N7, null, Xz.default.createElement(cf3, {
            onComplete: (B) => {
                Q(), A(B)
            },
            onCancel: () => {
                Q(), A(null)
            },
            onError: (B, G) => {
                process.stderr.write(G ? G + `
` : `Error: ${B}
`), Q(), A(null)
            },
            source: "cliArg"
        })), {
            exitOnCtrlC: !1
        })
    })
}
var Xz;
var lU9 = L(() => {
    hA();
    mU9();
    zI();
    cU9();
    w0();
    H9();
    D0();
    Xz = GA(VA(), 1)
});

function nU9() {
    if (process.env.CLAUDE_CODE_REMOTE === "true") return;
    iU9(Sq), iU9($WA)
}

function iU9(A) {
    try {
        In.call({
            prompt: "Warmup",
            subagent_type: A.agentType,
            description: "Warmup"
        }, {
            options: {
                agentDefinitions: {
                    allAgents: [A],
                    activeAgents: [A]
                },
                commands: [],
                debug: !1,
                mainLoopModel: S3(),
                tools: [],
                verbose: !1,
                maxThinkingTokens: 1000,
                mcpClients: [],
                mcpResources: {},
                isNonInteractiveSession: !1,
                hasAppendSystemPrompt: !1
            },
            abortController: new AbortController,
            readFileState: new km({
                max: 1000
            }),
            getAppState: async () => _p(),
            setAppState: async () => {},
            setMessages: async () => {},
            setInProgressToolUseIDs: async () => {},
            setResponseLength: async () => {},
            updateFileHistoryState: async () => {},
            agentId: "warmup",
            messages: []
        }, async () => ({
            behavior: "deny",
            message: "Warmup",
            decisionReason: {
                type: "other",
                reason: "Warmup"
            }
        }), xD({
            content: "Warmup"
        }), () => {}).catch(() => {})
    } catch {}
}
var aU9 = L(() => {
    SvA();
    TRA();
    UWA();
    H9();
    nQ();
    s2();
    x51()
});
import {
    createServer as pf3
} from "http";
import {
    randomBytes as lf3,
    timingSafeEqual as if3
} from "crypto";

class BD0 {
    server = null;
    secret;
    port = null;
    mcpClients;
    availableTools;
    resources;
    constructor(A, Q) {
        this.mcpClients = A, this.availableTools = Q || [], this.resources = {}, this.secret = lf3(32).toString("hex")
    }
    async start() {
        if (this.server) throw Error("MCP CLI endpoint already started");
        return new Promise((A, Q) => {
            this.server = pf3((B, G) => {
                this.handleRequest(B, G)
            }), this.server.on("error", (B) => {
                e(B), Q(B)
            }), this.server.listen(0, "127.0.0.1", () => {
                let B = this.server.address();
                if (!B || typeof B === "string") {
                    Q(Error("Failed to get server address"));
                    return
                }
                this.port = B.port;
                let G = `http://127.0.0.1:${this.port}`;
                g(`[MCP CLI Endpoint] Started on ${G}`), A({
                    port: this.port,
                    url: G
                })
            })
        })
    }
    getSecret() {
        return this.secret
    }
    async handleRequest(A, Q) {
        if (A.setTimeout(30000), A.on("timeout", () => {
                g("[MCP CLI Endpoint] Request timeout"), Q.writeHead(408, {
                    "Content-Type": "application/json"
                }), Q.end(JSON.stringify({
                    error: "Request Timeout"
                }))
            }), A.method !== "POST" || A.url !== "/mcp") {
            Q.writeHead(404, {
                "Content-Type": "application/json"
            }), Q.end(JSON.stringify({
                error: "Not Found"
            }));
            return
        }
        let B = A.headers.authorization;
        if (!B?.startsWith("Bearer ")) {
            Q.writeHead(403, {
                "Content-Type": "application/json"
            }), Q.end(JSON.stringify({
                error: "Forbidden"
            }));
            return
        }
        let G = B.slice(7);
        if (!this.validateSecret(G)) {
            Q.writeHead(403, {
                "Content-Type": "application/json"
            }), Q.end(JSON.stringify({
                error: "Forbidden"
            }));
            return
        }
        let Z = 10485760,
            I = 0,
            Y = "";
        A.on("data", (J) => {
            if (I += J.length, I > Z) {
                g(`[MCP CLI Endpoint] Request too large: ${I} bytes`), Q.writeHead(413, {
                    "Content-Type": "application/json"
                }), Q.end(JSON.stringify({
                    error: "Payload Too Large"
                })), A.destroy();
                return
            }
            Y += J.toString()
        }), A.on("end", async () => {
            try {
                let J = JSON.parse(Y),
                    W = aC9.parse(J),
                    X = await this.handleCommand(W);
                Q.writeHead(200, {
                    "Content-Type": "application/json"
                }), Q.end(JSON.stringify(X))
            } catch (J) {
                let W = 500;
                if (J instanceof SyntaxError) W = 400;
                else if (J && typeof J === "object" && "name" in J) {
                    if (J.name === "ZodError") W = 400
                }
                Q.writeHead(W, {
                    "Content-Type": "application/json"
                }), Q.end(JSON.stringify({
                    error: J instanceof Error ? J.message : "Unknown error",
                    type: J instanceof Error ? J.constructor.name : "Error"
                })), e(J instanceof Error ? J : Error(String(J)))
            }
        }), A.on("error", (J) => {
            if (e(J), !Q.headersSent) Q.writeHead(500, {
                "Content-Type": "application/json"
            }), Q.end(JSON.stringify({
                error: "Internal Server Error"
            }))
        })
    }
    validateSecret(A) {
        try {
            let Q = Buffer.from(A),
                B = Buffer.from(this.secret);
            if (Q.length !== B.length) return !1;
            return if3(Q, B)
        } catch {
            return !1
        }
    }
    async handleCommand(A) {
        let Q = Date.now(),
            B = A.command === "call" ? `mcp__${A.params.server}__${A.params.tool}` : void 0;
        try {
            let {
                data: G,
                metadata: Z
            } = await this.executeCommand(A), I = Date.now() - Q;
            if (A.command === "call") BA("tengu_tool_use_success", {
                toolName: B,
                isMcp: !0,
                durationMs: I
            });
            return BA("tengu_mcp_cli_command_executed", {
                command: A.command,
                success: !0,
                duration_ms: I,
                ...Z
            }), G
        } catch (G) {
            let Z = G instanceof Error ? G : Error(String(G)),
                I = Date.now() - Q,
                Y = String(G).slice(0, 2000);
            if (A.command === "call") BA("tengu_tool_use_error", {
                toolName: B,
                isMcp: !0,
                error: Y,
                durationMs: I
            });
            throw BA("tengu_mcp_cli_command_executed", {
                command: A.command,
                success: !1,
                error_type: A.command === "call" ? "tool_execution_failed" : Z.constructor,
                duration_ms: Date.now() - Q
            }), G
        }
    }
    async executeCommand(A) {
        switch (A.command) {
            case "servers": {
                let Q = YJ1(this.mcpClients);
                return {
                    data: Q,
                    metadata: {
                        server_count: Q.length
                    }
                }
            }
            case "tools": {
                let Q = JJ1(this.availableTools, A.params);
                return {
                    data: Q,
                    metadata: {
                        tool_count: Q.length,
                        filtered: !!A.params?.server
                    }
                }
            }
            case "info": {
                let Q = await WJ1(this.availableTools, A.params);
                if (!Q) {
                    let B = $SA(this.mcpClients, A.params.server, this.getNormalizedNames()),
                        G = gQA(A.params.server, B?.type);
                    if (G) throw G;
                    throw new QD0(`Tool '${A.params.toolName}' not found on server '${A.params.server}'`)
                }
                return {
                    data: Q,
                    metadata: {
                        tool_found: !0
                    }
                }
            }
            case "grep": {
                let Q = XJ1(this.availableTools, A.params);
                return {
                    data: Q,
                    metadata: {
                        match_count: Q.length
                    }
                }
            }
            case "resources": {
                let Q = FJ1(this.resources, A.params, this.getNormalizedNames());
                return {
                    data: Q,
                    metadata: {
                        resource_count: Q.length,
                        filtered: !!A.params?.server
                    }
                }
            }
            case "call": {
                let {
                    server: Q,
                    tool: B
                } = A.params;
                return {
                    data: await this.callTool(A.params),
                    metadata: {
                        tool_name: `mcp__${Q}__${B}`
                    }
                }
            }
            case "read":
                return {
                    data: await this.readResource(A.params), metadata: {
                        server: A.params.server
                    }
                };
            default: {
                let Q = A;
                throw Error("Unknown command")
            }
        }
    }
    getConnectedClient(A) {
        let Q = $SA(this.mcpClients, A, this.getNormalizedNames()),
            B = gQA(A, Q?.type);
        if (B) throw B;
        return Q
    }
    async callTool({
        server: A,
        tool: Q,
        args: B,
        timeoutMs: G
    }) {
        let Z = this.getConnectedClient(A),
            I = `mcp__${A}__${Q}`,
            Y = this.availableTools.find((X) => X.name === I);
        if (this.availableTools.length > 0 && !Y) throw new QD0(`Tool '${Q}' not found on server '${A}'`);
        let J = Y?.originalMcpToolName || Q;
        return await Z.client.request({
            method: "tools/call",
            params: {
                name: J,
                arguments: B
            }
        }, sT, G ? {
            signal: AbortSignal.timeout(G)
        } : void 0)
    }
    async readResource({
        server: A,
        uri: Q,
        timeoutMs: B
    }) {
        return await this.getConnectedClient(A).client.readResource({
            uri: Q
        }, B ? {
            signal: AbortSignal.timeout(B)
        } : void 0)
    }
    async stop() {
        if (!this.server) return;
        return new Promise((A, Q) => {
            this.server.close((B) => {
                if (B) Q(B);
                else g("[MCP CLI Endpoint] Stopped"), this.server = null, this.port = null, A()
            })
        })
    }
    updateClients(A) {
        this.mcpClients = A
    }
    updateTools(A) {
        this.availableTools = A
    }
    updateResources(A) {
        this.resources = A
    }
    getNormalizedNames() {
        let A = {};
        for (let Q of this.mcpClients) A[v7(Q.name)] = Q.name;
        return A
    }
}
var QD0;
var sU9 = L(() => {
    PD();
    OK0();
    RK0();
    TK0();
    PK0();
    jK0();
    D0();
    u1();
    w0();
    SK0();
    QD0 = class QD0 extends Error {
        constructor(A) {
            super(A);
            this.name = "ToolNotFoundError"
        }
    }
});
var A$9 = {};
pG(A$9, {
    showSetupScreens: () => eU9,
    setup: () => jJ1,
    main: () => Yh3,
    completeOnboarding: () => tU9
});
import {
    ReadStream as nf3
} from "tty";
import {
    openSync as af3,
    existsSync as PJ1,
    readFileSync as rU9,
    writeFileSync as sf3
} from "fs";
import {
    cwd as GD0
} from "process";
import {
    resolve as ZD0
} from "path";

function rf3() {
    try {
        let A = LB("policySettings");
        if (A) {
            let Q = TH9(A);
            BA("tengu_managed_settings_loaded", {
                keyCount: Q.length,
                keys: Q.join(",")
            })
        }
    } catch {}
}

function of3() {
    let A = cs(),
        Q = process.execArgv.some((G) => {
            if (A) return /--inspect(-brk)?/.test(G);
            else return /--inspect(-brk)?|--debug(-brk)?/.test(G)
        }),
        B = process.env.NODE_OPTIONS && /--inspect(-brk)?|--debug(-brk)?/.test(process.env.NODE_OPTIONS);
    try {
        return !!global.require("inspector").url() || Q || B
    } catch {
        return Q || B
    }
}

function tU9() {
    let A = L1();
    d0({
        ...A,
        hasCompletedOnboarding: !0,
        lastOnboardingVersion: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION
    })
}

async function eU9(A, Q, B) {
    if (V0(!1) || process.env.IS_DEMO) return !1;
    let G = L1(),
        Z = !1;
    if (!G.theme || !G.hasCompletedOnboarding) Z = !0, await SJ(), await new Promise(async (I) => {
        let {
            unmount: Y
        } = await Z3(c5.default.createElement(N7, {
            onChangeAppState: ng
        }, c5.default.createElement(Qz9, {
            onDone: async () => {
                tU9(), Y(), await SJ(), I()
            }
        })), {
            exitOnCtrlC: !1
        })
    });
    if (A !== "bypassPermissions" && process.env.CLAUBBIT !== "true") {
        let I = _X(!1);
        if (await new Promise(async (W) => {
                let {
                    unmount: X
                } = await Z3(c5.default.createElement(N7, null, c5.default.createElement(zz9, {
                    commands: B,
                    onDone: async () => {
                        if (X(), !I) await SJ();
                        W()
                    }
                })), {
                    exitOnCtrlC: !1
                })
            }), tEA()) $E9();
        n7A(), uD();
        let {
            errors: J
        } = Wa();
        if (J.length === 0) await az9();
        if (await QZ2()) await new Promise(async (W) => {
            let {
                unmount: X
            } = await Z3(c5.default.createElement(N7, null, c5.default.createElement(JY1, {
                onDone: () => {
                    X(), W()
                },
                isStandaloneDialog: !0
            })), {
                exitOnCtrlC: !1
            })
        })
    }
    if (await NYA()) await new Promise(async (I) => {
        let {
            unmount: Y
        } = await Z3(c5.default.createElement(N7, null, c5.default.createElement(PY1, {
            showIfAlreadyViewed: !1,
            location: Z ? "onboarding" : "policy_update_modal",
            onDone: async (J) => {
                if (J === "escape") {
                    BA("tengu_grove_policy_exited", {}), c8(0);
                    return
                }
                if (Y(), J !== "skip_rendering") await SJ();
                I()
            }
        })), {
            exitOnCtrlC: !1
        })
    });
    if (process.env.ANTHROPIC_API_KEY) {
        let I = xw(process.env.ANTHROPIC_API_KEY);
        if (wlA(I) === "new") await new Promise(async (J) => {
            let {
                unmount: W
            } = await Z3(c5.default.createElement(N7, {
                onChangeAppState: ng
            }, c5.default.createElement($J1, {
                customApiKeyTruncated: I,
                onDone: async () => {
                    W(), await SJ(), J()
                }
            })), {
                exitOnCtrlC: !1
            })
        })
    }
    if (xK0(), (A === "bypassPermissions" || Q) && !L1().bypassPermissionsModeAccepted) await new Promise(async (I) => {
        let {
            unmount: Y
        } = await Z3(c5.default.createElement(N7, null, c5.default.createElement(oz9, {
            onAccept: () => {
                Y(), I()
            }
        })))
    });
    return Z
}

async function oU9(A, Q) {
    try {
        let B = await dIA(A, Q);
        if (B.type === "connected") return "✓ Connected";
        else if (B.type === "needs-auth") return "⚠ Needs authentication";
        else return "✗ Failed to connect"
    } catch (B) {
        return "✗ Connection error"
    }
}

function tf3() {
    let A = L1();
    d0({
        ...A,
        numStartups: (A.numStartups ?? 0) + 1
    }), ef3(), FE0()?.add(1)
}
// Async function: ef3
async function ef3() {
    let [A, Q] = await Promise.all([FT(), zUA()]);
    BA("tengu_startup_telemetry", {
        is_git: A,
        worktree_count: Q,
        sandbox_enabled: lQ.isSandboxingEnabled(),
        are_unsandboxed_commands_allowed: lQ.areUnsandboxedCommandsAllowed(),
        is_auto_bash_allowed_if_sandbox_enabled: lQ.isAutoAllowBashIfSandboxedEnabled()
    })
}

function Ah3() {
    AU9(), BU9(), ZU9(), WU9(), FU9(), YU9()
}

function Qh3() {
    if (H5()) {
        uD();
        return
    }
    if (_X(!0)) uD()
}

async function jJ1(A, Q, B, G, Z) {
    let I = process.version.match(/^v(\d+)\./)?.[1];
    if (!I || parseInt(I) < 18) console.error(oA.bold.red("Error: Claude Code requires Node.js version 18 or higher.")), process.exit(1);
    if (Z) FR(Z);
    i10();
    let Y = bjB();
    if (Y.status === "restored") console.log(oA.yellow("Detected an interrupted iTerm2 setup. Your original settings have been restored. You may need to restart iTerm2 for the changes to take effect."));
    else if (Y.status === "failed") console.error(oA.red(`Failed to restore iTerm2 settings. Please manually restore your original settings with: defaults import com.googlecode.iterm2 ${Y.backupPath}.`));
    try {
        let F = await nrA();
        if (F.status === "restored") console.log(oA.yellow("Detected an interrupted Terminal.app setup. Your original settings have been restored. You may need to restart Terminal.app for the changes to take effect."));
        else if (F.status === "failed") console.error(oA.red(`Failed to restore Terminal.app settings. Please manually restore your original settings with: defaults import com.apple.Terminal ${F.backupPath}.`))
    } catch (F) {
        e(F instanceof Error ? F : Error(String(F)))
    }
    if (Qq(A), SE9(), xE9(), fE9(), iv2(), ov2(), bz9(), hG0(), gG0(), v4("setup_before_prefetch"), NE9(), dOB(), aE(), PI1(), w1A(), u49(), XK(), Qh3(), pg(), FC9(), $C9(), DQB(H5()), V0(process.env.CLAUDE_CODE_USE_BEDROCK) && !V0(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH)) CQB();
    GwA().catch((F) => e(F)), GYA([], G0()), $SB(), v4("setup_after_prefetch");
    let {
        hasReleaseNotes: J
    } = HjA(L1().lastReleaseNotesSeen);
    if (J) await Z69();
    let W = s9();
    if (setTimeout(() => W.abort(), 3000), wxA(H0(), W.signal, []), Q === "bypassPermissions" || B) {
        if (process.platform !== "win32" && typeof process.getuid === "function" && process.getuid() === 0 && !process.env.IS_SANDBOX) console.error("--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons"), process.exit(1)
    }
    let X = M5();
    if (X.lastCost !== void 0 && X.lastDuration !== void 0) BA("tengu_exit", {
        last_session_cost: X.lastCost,
        last_session_api_duration: X.lastAPIDuration,
        last_session_tool_duration: X.lastToolDuration,
        last_session_duration: X.lastDuration,
        last_session_lines_added: X.lastLinesAdded,
        last_session_lines_removed: X.lastLinesRemoved,
        last_session_total_input_tokens: X.lastTotalInputTokens,
        last_session_total_output_tokens: X.lastTotalOutputTokens,
        last_session_total_cache_creation_input_tokens: X.lastTotalCacheCreationInputTokens,
        last_session_total_cache_read_input_tokens: X.lastTotalCacheReadInputTokens,
        last_session_id: X.lastSessionId
    }), aI({
        ...X,
        lastCost: void 0,
        lastAPIDuration: void 0,
        lastToolDuration: void 0,
        lastDuration: void 0,
        lastLinesAdded: void 0,
        lastLinesRemoved: void 0,
        lastTotalInputTokens: void 0,
        lastTotalOutputTokens: void 0,
        lastTotalCacheCreationInputTokens: void 0,
        lastTotalCacheReadInputTokens: void 0,
        lastSessionId: void 0
    })
}

function Bh3(A) {
    try {
        let Q = A.trim(),
            B = Q.startsWith("{") && Q.endsWith("}"),
            G;
        if (B) {
            if (!S7(Q)) process.stderr.write(oA.red(`Error: Invalid JSON provided to --settings
`)), process.exit(1);
            G = x31("claude-settings", ".json"), sf3(G, Q, "utf8")
        } else {
            let {
                resolvedPath: Z
            } = kK(OA(), A);
            if (!PJ1(Z)) process.stderr.write(oA.red(`Error: Settings file not found: ${Z}
`)), process.exit(1);
            G = Z
        }
        qE0(G), EGA()
    } catch (Q) {
        if (Q instanceof Error) e(Q);
        process.stderr.write(oA.red(`Error processing settings: ${Q instanceof Error?Q.message:String(Q)}
`)), process.exit(1)
    }
}

function Gh3(A) {
    try {
        let Q = rp0(A);
        SE0(Q), EGA()
    } catch (Q) {
        if (Q instanceof Error) e(Q);
        process.stderr.write(oA.red(`Error processing --setting-sources: ${Q instanceof Error?Q.message:String(Q)}
`)), process.exit(1)
    }
}

function Zh3() {
    v4("eagerLoadSettings_start");
    let A = process.argv.findIndex((B) => B === "--settings");
    if (A !== -1 && A + 1 < process.argv.length) {
        let B = process.argv[A + 1];
        if (B) Bh3(B)
    }
    let Q = process.argv.findIndex((B) => B === "--setting-sources");
    if (Q !== -1 && Q + 1 < process.argv.length) {
        let B = process.argv[Q + 1];
        if (B !== void 0) Gh3(B)
    }
    v4("eagerLoadSettings_end")
}

function Ih3(A) {
    if (process.env.CLAUDE_CODE_ENTRYPOINT) return;
    let Q = process.argv.slice(2),
        B = Q.indexOf("mcp");
    if (B !== -1 && Q[B + 1] === "serve") {
        process.env.CLAUDE_CODE_ENTRYPOINT = "mcp";
        return
    }
    if (V0(process.env.CLAUDE_CODE_ACTION)) {
        process.env.CLAUDE_CODE_ENTRYPOINT = "claude-code-github-action";
        return
    }
    process.env.CLAUDE_CODE_ENTRYPOINT = A ? "sdk-cli" : "cli"
}
// Async function: Yh3
async function Yh3() {
    v4("main_function_start"), process.env.NoDefaultCurrentDirectoryInExePath = "1", YE9(), process.on("exit", () => {
        Vh3()
    }), process.on("SIGINT", () => {
        process.exit(0)
    }), v4("main_warning_handler_initialized");
    let A = process.argv.slice(2),
        Q = A.includes("-p") || A.includes("--print"),
        B = A.some((Y) => Y.startsWith("--sdk-url")),
        G = Q || B || !process.stdout.isTTY;
    $E0(!G), Ih3(G);
    let I = (() => {
        if (process.env.GITHUB_ACTIONS === "true") return "github-action";
        if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-ts") return "sdk-typescript";
        if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-py") return "sdk-python";
        if (process.env.CLAUDE_CODE_ENTRYPOINT === "sdk-cli") return "sdk-cli";
        if (process.env.CLAUDE_CODE_ENTRYPOINT === "claude-vscode") return "claude-vscode";
        if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN || process.env.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR) return "remote";
        return "cli"
    })();
    wE0(I), v4("main_client_type_determined"), Zh3(), v4("main_before_run"), process.title = "claude", await Xh3(), v4("main_after_run")
}

function Jh3(A) {
    let Q = 0,
        B = {
            exitOnCtrlC: A,
            onFlicker: (G, Z, I, Y) => {
                let J = Date.now();
                if (J - Q < 1000) BA("tengu_flicker", {
                    desiredHeight: G,
                    actualHeight: Z,
                    ink2Enabled: I,
                    reason: Y
                });
                Q = J
            }
        };
    if (!process.stdin.isTTY && !V0(!1) && !process.argv.includes("mcp")) {
        if (BA("tengu_stdin_interactive", {}), process.platform !== "win32") try {
            let G = af3("/dev/tty", "r");
            B = {
                ...B,
                stdin: new nf3(G)
            }
        } catch (G) {
            e(G)
        }
    }
    return B
}

async function Wh3(A, Q) {
    if (!process.stdin.isTTY && !process.argv.includes("mcp")) {
        if (Q === "stream-json") return process.stdin;
        process.stdin.setEncoding("utf8");
        let B = "";
        return process.stdin.on("data", (G) => {
            B += G
        }), await new Promise((G) => {
            process.stdin.on("end", G)
        }), [A, B].filter(Boolean).join(`
`)
    }
    return A
}
// Async function: Xh3
async function Xh3() {
    v4("run_function_start");
    let A = new IJ1;
    v4("run_commander_initialized"), A.hook("preAction", async () => {
        v4("preAction_start");
        let Y = UE9();
        if (Y instanceof Promise) await Y;
        v4("preAction_after_init"), Ah3(), v4("preAction_after_migrations")
    }), A.name("claude").description("Claude Code - starts an interactive session by default, use -p/--print for non-interactive output").argument("[prompt]", "Your prompt", String).helpOption("-h, --help", "Display help for command").option("-d, --debug [filter]", 'Enable debug mode with optional category filtering (e.g., "api,hooks" or "!statsig,!file")', (Y) => {
        return !0
    }).addOption(new eF("-d2e, --debug-to-stderr", "Enable debug mode (to stderr)").argParser(Boolean).hideHelp()).option("--verbose", "Override verbose mode setting from config", () => !0).option("-p, --print", "Print response and exit (useful for pipes). Note: The workspace trust dialog is skipped when Claude is run with the -p mode. Only use this flag in directories you trust.", () => !0).addOption(new eF("--output-format <format>", 'Output format (only works with --print): "text" (default), "json" (single result), or "stream-json" (realtime streaming)').choices(["text", "json", "stream-json"])).addOption(new eF("--json-schema <schema>", 'JSON Schema for structured output validation. Example: {"type":"object","properties":{"name":{"type":"string"}},"required":["name"]}').argParser(String)).option("--include-partial-messages", "Include partial message chunks as they arrive (only works with --print and --output-format=stream-json)", () => !0).addOption(new eF("--input-format <format>", 'Input format (only works with --print): "text" (default), or "stream-json" (realtime streaming input)').choices(["text", "stream-json"])).option("--mcp-debug", "[DEPRECATED. Use --debug instead] Enable MCP debug mode (shows MCP server errors)", () => !0).option("--dangerously-skip-permissions", "Bypass all permission checks. Recommended only for sandboxes with no internet access.", () => !0).option("--allow-dangerously-skip-permissions", "Enable bypassing all permission checks as an option, without it being enabled by default. Recommended only for sandboxes with no internet access.", () => !0).addOption(new eF("--max-thinking-tokens <tokens>", "Maximum number of thinking tokens.  (only works with --print)").argParser(Number).hideHelp()).addOption(new eF("--max-turns <turns>", "Maximum number of agentic turns in non-interactive mode. This will early exit the conversation after the specified number of turns. (only works with --print)").argParser(Number).hideHelp()).addOption(new eF("--max-budget-usd <amount>", "Maximum dollar amount to spend on API calls (only works with --print)").argParser((Y) => {
        let J = Number(Y);
        if (isNaN(J) || J <= 0) throw Error("--max-budget-usd must be a positive number greater than 0");
        return J
    }).hideHelp()).option("--replay-user-messages", "Re-emit user messages from stdin back on stdout for acknowledgment (only works with --input-format=stream-json and --output-format=stream-json)", () => !0).addOption(new eF("--enable-auth-status", "Enable auth status messages in SDK mode").default(!1).hideHelp()).option("--allowedTools, --allowed-tools <tools...>", 'Comma or space-separated list of tool names to allow (e.g. "Bash(git:*) Edit")').option("--tools <tools...>", 'Specify the list of available tools from the built-in set. Use "" to disable all tools, "default" to use all tools, or specify tool names (e.g. "Bash,Edit,Read"). Only works with --print mode.').option("--disallowedTools, --disallowed-tools <tools...>", 'Comma or space-separated list of tool names to deny (e.g. "Bash(git:*) Edit")').option("--mcp-config <configs...>", "Load MCP servers from JSON files or strings (space-separated)").addOption(new eF("--permission-prompt-tool <tool>", "MCP tool to use for permission prompts (only works with --print)").argParser(String).hideHelp()).addOption(new eF("--system-prompt <prompt>", "System prompt to use for the session").argParser(String)).addOption(new eF("--system-prompt-file <file>", "Read system prompt from a file").argParser(String).hideHelp()).addOption(new eF("--append-system-prompt <prompt>", "Append a system prompt to the default system prompt").argParser(String)).addOption(new eF("--append-system-prompt-file <file>", "Read system prompt from a file and append to the default system prompt").argParser(String).hideHelp()).addOption(new eF("--permission-mode <mode>", "Permission mode to use for the session").argParser(String).choices(OR)).option("-c, --continue", "Continue the most recent conversation", () => !0).option("-r, --resume [sessionId]", "Resume a conversation - provide a session ID or interactively select a conversation to resume", (Y) => Y || !0).option("--fork-session", "When resuming, create a new session ID instead of reusing the original (use with --resume or --continue)", () => !0).addOption(new eF("--resume-session-at <message id>", "When resuming, only messages up to and including the assistant message with <message.id> (use with --resume in print mode)").argParser(String).hideHelp()).option("--model <model>", "Model for the current session. Provide an alias for the latest model (e.g. 'sonnet' or 'opus') or a model's full name (e.g. 'claude-sonnet-4-5-20250929').").option("--fallback-model <model>", "Enable automatic fallback to specified model when default model is overloaded (only works with --print)").option("--settings <file-or-json>", "Path to a settings JSON file or a JSON string to load additional settings from").option("--add-dir <directories...>", "Additional directories to allow tool access to").option("--ide", "Automatically connect to IDE on startup if exactly one valid IDE is available", () => !0).option("--strict-mcp-config", "Only use MCP servers from --mcp-config, ignoring all other MCP configurations", () => !0).option("--session-id <uuid>", "Use a specific session ID for the conversation (must be a valid UUID)").option("--agents <json>", `JSON object defining custom agents (e.g. '{"reviewer": {"description": "Reviews code", "prompt": "You are a code reviewer"}}')`).option("--setting-sources <sources>", "Comma-separated list of setting sources to load (user, project, local).").option("--plugin-dir <paths...>", "Load plugins from directories for this session only (repeatable)").action(async (Y, J) => {
        if (Y === "code") BA("tengu_code_prompt_ignored", {}), console.warn(oA.yellow("Tip: You can launch Claude Code with just `claude`")), Y = void 0;
        if (Y && typeof Y === "string" && !/\s/.test(Y) && Y.length > 0) BA("tengu_single_word_prompt", {
            length: Y.length
        });
        let {
            debug: W = !1,
            debugToStderr: X = !1,
            dangerouslySkipPermissions: F,
            allowDangerouslySkipPermissions: V = !1,
            tools: K = [],
            allowedTools: D = [],
            disallowedTools: H = [],
            mcpConfig: C = [],
            permissionMode: E,
            addDir: z = [],
            fallbackModel: w,
            ide: N = !1,
            sessionId: q,
            includePartialMessages: R,
            pluginDir: P = []
        } = J, y = J.agents;
        if (P.length > 0) kE0(P), $3A();
        let {
            outputFormat: v,
            inputFormat: x
        } = J, p = J.verbose ?? L1().verbose, u = J.print;
        if (Yb1() && (J.strictMcpConfig || J.mcpConfig)) process.stderr.write(oA.red("You cannot dynamically configure your MCP configuration when an enterprise MCP config is present")), process.exit(1);
        let o = J.strictMcpConfig || !1,
            l = !1,
            k = J,
            d = !1,
            QA = J.sdkUrl ?? void 0;
        if (QA) {
            if (!x) x = "stream-json";
            if (!v) v = "stream-json";
            if (J.verbose === void 0) p = !0;
            if (!J.print) u = !0
        }
        let IA = J.teleport ?? null,
            HA = J.remote ?? null;
        if (q) {
            if (J.continue || J.resume) process.stderr.write(oA.red(`Error: --session-id cannot be used with --continue or --resume.
`)), process.exit(1);
            let N1 = Y$(q);
            if (!N1) process.stderr.write(oA.red(`Error: Invalid session ID. Must be a valid UUID.
`)), process.exit(1);
            if (gH9(N1)) process.stderr.write(oA.red(`Error: Session ID ${N1} is already in use.
`)), process.exit(1)
        }
        let wA = H5();
        if (w && J.model && w === J.model) process.stderr.write(oA.red(`Error: Fallback model cannot be the same as the main model. Please specify a different model for --fallback-model.
`)), process.exit(1);
        let KA = J.systemPrompt;
        if (J.systemPromptFile) {
            if (J.systemPrompt) process.stderr.write(oA.red(`Error: Cannot use both --system-prompt and --system-prompt-file. Please use only one.
`)), process.exit(1);
            try {
                let N1 = ZD0(J.systemPromptFile);
                if (!PJ1(N1)) process.stderr.write(oA.red(`Error: System prompt file not found: ${N1}
`)), process.exit(1);
                KA = rU9(N1, "utf8")
            } catch (N1) {
                process.stderr.write(oA.red(`Error reading system prompt file: ${N1 instanceof Error?N1.message:String(N1)}
`)), process.exit(1)
            }
        }
        let SA = J.appendSystemPrompt;
        if (J.appendSystemPromptFile) {
            if (J.appendSystemPrompt) process.stderr.write(oA.red(`Error: Cannot use both --append-system-prompt and --append-system-prompt-file. Please use only one.
`)), process.exit(1);
            try {
                let N1 = ZD0(J.appendSystemPromptFile);
                if (!PJ1(N1)) process.stderr.write(oA.red(`Error: Append system prompt file not found: ${N1}
`)), process.exit(1);
                SA = rU9(N1, "utf8")
            } catch (N1) {
                process.stderr.write(oA.red(`Error reading append system prompt file: ${N1 instanceof Error?N1.message:String(N1)}
`)), process.exit(1)
            }
        }
        let {
            mode: sA,
            notification: NA
        } = qJ9({
            permissionModeCli: E,
            dangerouslySkipPermissions: F
        });
        xE0(sA === "bypassPermissions");
        let qA = {};
        if (C && C.length > 0) {
            let N1 = C.map((s1) => s1.trim()).filter((s1) => s1.length > 0),
                Z0 = {},
                J0 = [];