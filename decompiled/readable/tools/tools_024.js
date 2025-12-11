/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_024.js
 * 处理时间: 2025-12-09T03:41:38.859Z
 * 变量映射: 8 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 24/25
 * Lines: 444179 - 445675 (1497 lines)
 * Original file: cli.js
 */

function pb3(A) {
    let Q = A.split(".")[0].replace(/T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z/, "T$1:$2:$3.$4Z");
    return new Date(Q)
}

function vz9(A, Q, B) {
    let G = {
        messages: 0,
        errors: 0
    };
    try {
        let Z = OA().readdirSync(A);
        for (let I of Z) try {
            if (pb3(I.name) < Q)
                if (OA().unlinkSync(S$(A, I.name)), B) G.messages++;
                else G.errors++
        } catch (Y) {
            e(Y)
        }
    } catch (Z) {
        if (Z instanceof Error && "code" in Z && Z.code !== "ENOENT") e(Z)
    }
    return G
}
async function lb3() {
    let A = OA(),
        Q = MSA(),
        B = Xx.errors(),
        G = Xx.baseLogs(),
        Z = vz9(B, Q, !1);
    try {
        if (A.existsSync(G)) {
            let Y = A.readdirSync(G).filter((J) => J.isDirectory() && J.name.startsWith("mcp-logs-")).map((J) => S$(G, J.name));
            for (let J of Y) {
                Z = cb3(Z, vz9(J, Q, !0));
                try {
                    if (A.isDirEmptySync(J)) A.rmdirSync(J)
                } catch {}
            }
        }
    } catch (I) {
        if (I instanceof Error && "code" in I && I.code !== "ENOENT") e(I)
    }
    return Z
}

function MJ1(A, Q, B, G) {
    let Z = {
        messages: 0,
        errors: 0
    };
    if (!G.existsSync(A)) return Z;
    let Y = G.readdirSync(A).filter((J) => J.isFile() && J.name.endsWith(B));
    for (let J of Y) try {
        let W = S$(A, J.name);
        if (G.statSync(W).mtime < Q) G.unlinkSync(W), Z.messages++
    } catch {
        Z.errors++
    }
    try {
        if (G.isDirEmptySync(A)) G.rmdirSync(A)
    } catch {
        Z.errors++
    }
    return Z
}

function ib3() {
    let A = MSA(),
        Q = {
            messages: 0,
            errors: 0
        },
        B = HFA(),
        G = OA();
    try {
        if (!G.existsSync(B)) return Q;
        let I = G.readdirSync(B).filter((Y) => Y.isDirectory()).map((Y) => S$(B, Y.name));
        for (let Y of I) try {
            let J = MJ1(Y, A, ".jsonl", G);
            Q.messages += J.messages, Q.errors += J.errors;
            let W = S$(Y, "bash-outputs");
            if (G.existsSync(W)) try {
                let X = G.readdirSync(W);
                for (let F of X)
                    if (F.isDirectory()) {
                        let V = S$(W, F.name),
                            K = MJ1(V, A, ".txt", G);
                        Q.messages += K.messages, Q.errors += K.errors
                    } if (G.isDirEmptySync(W)) G.rmdirSync(W)
            } catch {
                Q.errors++
            }
            if (G.existsSync(Y)) try {
                let X = G.readdirSync(Y);
                for (let F of X) {
                    if (!F.isDirectory()) continue;
                    if (F.name === "bash-outputs") continue;
                    let V = S$(Y, F.name, q30);
                    if (!G.existsSync(V)) continue;
                    try {
                        let K = G.readdirSync(V);
                        for (let D of K) {
                            if (!D.isDirectory()) continue;
                            let H = S$(V, D.name),
                                C = MJ1(H, A, "", G);
                            Q.messages += C.messages, Q.errors += C.errors;
                            try {
                                if (G.isDirEmptySync(H)) G.rmdirSync(H)
                            } catch {}
                        }
                        try {
                            if (G.isDirEmptySync(V)) G.rmdirSync(V)
                        } catch {}
                        try {
                            let D = S$(Y, F.name);
                            if (G.isDirEmptySync(D)) G.rmdirSync(D)
                        } catch {}
                    } catch {}
                }
            } catch {
                Q.errors++
            }
            try {
                if (G.isDirEmptySync(Y)) G.rmdirSync(Y)
            } catch {}
        } catch {
            Q.errors++;
            continue
        }
    } catch {
        Q.errors++
    }
    return Q
}

function nb3(A, Q, B = !0) {
    let G = MSA(),
        Z = {
            messages: 0,
            errors: 0
        },
        I = OA();
    try {
        if (!I.existsSync(A)) return Z;
        let Y = MJ1(A, G, Q, I);
        if (Z.messages += Y.messages, Z.errors += Y.errors, B) try {
            if (I.isDirEmptySync(A)) I.rmdirSync(A)
        } catch {}
    } catch {
        Z.errors++
    }
    return Z
}

function ab3() {
    let A = S$(PQ(), "plans");
    return nb3(A, ".md")
}

function sb3() {
    let A = MSA(),
        Q = {
            messages: 0,
            errors: 0
        },
        B = OA();
    try {
        let G = PQ(),
            Z = S$(G, "file-history");
        if (!B.existsSync(Z)) return Q;
        let Y = B.readdirSync(Z).filter((J) => J.isDirectory()).map((J) => S$(Z, J.name));
        for (let J of Y) try {
            if (!B.existsSync(J)) continue;
            if (B.statSync(J).mtime < A) B.rmSync(J, {
                recursive: !0,
                force: !0
            }), Q.messages++
        } catch {
            Q.errors++
        }
        try {
            if (B.isDirEmptySync(Z)) B.rmdirSync(Z)
        } catch {}
    } catch (G) {
        e(G)
    }
    return Q
}

function rb3() {
    let A = MSA(),
        Q = {
            messages: 0,
            errors: 0
        },
        B = OA();
    try {
        let G = PQ(),
            Z = S$(G, "session-env");
        if (!B.existsSync(Z)) return Q;
        let Y = B.readdirSync(Z).filter((J) => J.isDirectory()).map((J) => S$(Z, J.name));
        for (let J of Y) try {
            if (!B.existsSync(J)) continue;
            if (B.statSync(J).mtime < A) B.rmSync(J, {
                recursive: !0,
                force: !0
            }), Q.messages++
        } catch {
            Q.errors++
        }
        try {
            if (B.isDirEmptySync(Z)) B.rmdirSync(Z)
        } catch {}
    } catch (G) {
        e(G)
    }
    return Q
}

function bz9() {
    setImmediate(() => {
        lb3(), ib3(), ab3(), sb3(), rb3()
    }).unref()
}
var db3 = 30;
var fz9 = lazyLoader(() => {
    $51();
    u1();
    M9();
    o0();
    RB();
    GG();
    hQ();
    jQ();
    D0()
});
/* BROWSER_EXTENSION_ID = BROWSER_EXTENSION_ID = "com.anthropic.claude_code_browser_extension" */
var BROWSER_EXTENSION_ID = "com.anthropic.claude_code_browser_extension",
    PRI, jRI;
var gz9 = lazyLoader(() => {
    s5();
    D0();
    u1();
    I6();
    hQ();
    PRI = `TextComponent{BROWSER_EXTENSION_ID}.json`, jRI = `HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts\\TextComponent{BROWSER_EXTENSION_ID}`
});
import {
    join as mz9,
    basename as ob3
} from "path";

function eb3() {
    let A = getSmallFastModel(),
        Q = bu(A);
    if (Q <= uz9) return Math.floor(Q * 0.8);
    return Q - uz9
}

function Af3(A) {
    return lJ(A).map((Q) => {
        if (Q.type === "user") {
            if (typeof Q.message.content === "string") return `User: TextComponent{Q.message.content}`;
            else if (Array.isArray(Q.message.content)) return `User: TextComponent{Q.message.content.filter((B)=>B.type==="text").map((B)=>B.type==="text"?B.text:"").join(`
`).trim()}`
        } else if (Q.type === "assistant") {
            let B = Ui(Q);
            if (B) return `Claude: TextComponent{XMA(B).trim()}`
        }
        return null
    }).filter((Q) => Q !== null).join(`

`)
}
async function Qf3(A, Q) {
    if (!A.length) throw Error("Can't summarize empty conversation");
    let B = [],
        G = 0,
        Z = eb3(),
        I = null;
    for (let V = A.length - 1; V >= 0; V--) {
        let K = A[V];
        if (!K) continue;
        let D = AK([K]),
            H = 0;
        if (I !== null && D > 0 && D < I) H = I - D;
        if (G + H > Z) break;
        if (B.unshift(K), G += H, D > 0) I = D
    }
    let Y = B.length < A.length;
    g(Y ? `Summarizing last TextComponent{B.length} of TextComponent{A.length} messages (~TextComponent{G} tokens)` : `Summarizing all TextComponent{A.length} messages (~TextComponent{G} tokens)`);
    let J = Af3(B),
        X = [`Please write a 5-10 word title for the following conversation:

TextComponent{Y?`[Last TextComponent{B.length} of TextComponent{A.length} messages]

`:""}TextComponent{J}
`, "Respond with the title for the conversation and nothing else."];
    return (await gX({
        systemPrompt: [tb3],
        userPrompt: X.join(`
`),
        enablePromptCaching: !0,
        signal: new AbortController().signal,
        options: {
            querySource: "summarize_for_resume",
            agents: [],
            isNonInteractiveSession: Q,
            hasAppendSystemPrompt: !1,
            mcpTools: [],
            agentIdOrSessionId: G0()
        }
    })).message.content.filter((V) => V.type === "text").map((V) => V.text).join("")
}

function Bf3(A) {
    return mz9(HFA(), A.replace(/[^a-zA-Z0-9]/g, "-"))
}

function Gf3(A) {
    let Q = OA();
    try {
        Q.statSync(A)
    } catch {
        return []
    }
    return Q.readdirSync(A).filter((G) => G.isFile() && G.name.endsWith(".jsonl")).map((G) => mz9(A, G.name)).sort((G, Z) => {
        let I = Q.statSync(G);
        return Q.statSync(Z).mtime.getTime() - I.mtime.getTime()
    })
}

function Zf3(A, Q) {
    let B = [],
        G = A;
    while (G) {
        let {
            isSidechain: Z,
            parentUuid: I,
            ...Y
        } = G;
        B.unshift(Y), G = G.parentUuid ? Q.get(G.parentUuid) : void 0
    }
    return B
}

function If3(A) {
    let Q = new Set([...A.values()].map((B) => B.parentUuid).filter((B) => B !== null));
    return [...A.values()].filter((B) => !Q.has(B.uuid))
}

function Yf3(A) {
    let Q = OA();
    try {
        let {
            buffer: B
        } = Q.readSync(A, {
            length: 512
        }), G = B.toString("utf8"), Z = G.indexOf(`
`);
        if (Z === -1) return JSON.parse(G.trim()).type === "summary";
        let I = G.substring(0, Z);
        return JSON.parse(I).type === "summary"
    } catch {
        return !1
    }
}
async function dz9(A) {
    if (H5()) return;
    let Q = Bf3(H0()),
        B = Gf3(Q);
    for (let G of B) try {
        if (Yf3(G)) break;
        if (!Y$(ob3(G, ".jsonl"))) continue;
        let {
            messages: Y,
            summaries: J
        } = await CFA(G), W = If3(Y);
        for (let X of W) {
            if (J.has(X.uuid)) continue;
            let F = Zf3(X, Y);
            if (F.length === 0) continue;
            try {
                let V = await Qf3(F, A);
                if (V) await cH9(X.uuid, V)
            } catch (V) {
                e(V instanceof Error ? V : Error(String(V)))
            }
        }
    } catch (Z) {
        e(Z instanceof Error ? Z : Error(String(Z)))
    }
}
var tb3, uz9 = 50000;
var cz9 = lazyLoader(() => {
    kZ();
    nQ();
    GG();
    u1();
    D0();
    o0();
    wy();
    R2();
    oM();
    s2();
    S0();
    tb3 = `
Summarize this coding conversation in under 50 characters.
Capture the main task, key files, problems addressed, and current status.
`.trim()
});

function OJ1() {
    return aK0.default.createElement(TextComponent, null, "MCP servers may execute code or access system resources. All tool calls require approval. Learn more in the", " ", aK0.default.createElement(a4, {
        url: "https://docs.claude.com/s/claude-code-mcp"
    }, "MCP documentation"), ".")
}
var aK0;
var sK0 = lazyLoader(() => {
    hA();
    hA();
    aK0 = esmImport(VA(), 1)
});

function pz9({
    serverNames: A,
    onDone: Q
}) {
    function B(Z) {
        let I = c0() || {},
            Y = I.enabledMcpjsonServers || [],
            J = I.disabledMcpjsonServers || [],
            [W, X] = e5B(A, (F) => Z.includes(F));
        if (BA("tengu_mcp_multidialog_choice", {
                approved: W.length,
                rejected: X.length
            }), W.length > 0) {
            let F = [...new Set([...Y, ...W])];
            cB("localSettings", {
                enabledMcpjsonServers: F
            })
        }
        if (X.length > 0) {
            let F = [...new Set([...J, ...X])];
            cB("localSettings", {
                disabledMcpjsonServers: F
            })
        }
        Q()
    }
    let G = DQ();
    return h1((Z, I) => {
        if (I.escape) {
            let J = (c0() || {}).disabledMcpjsonServers || [],
                W = [...new Set([...J, ...A])];
            cB("localSettings", {
                disabledMcpjsonServers: W
            }), Q();
            return
        }
    }), _$.default.createElement(_$.default.Fragment, null, _$.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "warning"
    }, _$.default.createElement(TextComponent, {
        bold: !0,
        color: "warning"
    }, A.length, " new MCP servers found in .mcp.json"), _$.default.createElement(TextComponent, null, "Select any you wish to enable."), _$.default.createElement(OJ1, null), _$.default.createElement(UJ1, {
        options: A.map((Z) => ({
            label: Z,
            value: Z
        })),
        defaultValue: A,
        onSubmit: B
    })), _$.default.createElement(j, {
        marginLeft: 3
    }, _$.default.createElement(TextComponent, {
        dimColor: !0
    }, G.pending ? _$.default.createElement(_$.default.Fragment, null, "Press ", G.keyName, " again to exit") : _$.default.createElement(_$.default.Fragment, null, "Space to select · Enter to confirm · Esc to reject all"))))
}
var _$;
var lz9 = lazyLoader(() => {
    hA();
    fK0();
    RB();
    A3B();
    sK0();
    c9();
    w0();
    _$ = esmImport(VA(), 1)
});

function iz9({
    serverName: A,
    onDone: Q
}) {
    function B(Z) {
        switch (BA("tengu_mcp_dialog_choice", {
                choice: Z
            }), Z) {
            case "yes":
            case "yes_all": {
                let Y = (c0() || {}).enabledMcpjsonServers || [];
                if (!Y.includes(A)) cB("localSettings", {
                    enabledMcpjsonServers: [...Y, A]
                });
                if (Z === "yes_all") cB("localSettings", {
                    enableAllProjectMcpServers: !0
                });
                Q();
                break
            }
            case "no": {
                let Y = (c0() || {}).disabledMcpjsonServers || [];
                if (!Y.includes(A)) cB("localSettings", {
                    disabledMcpjsonServers: [...Y, A]
                });
                Q();
                break
            }
        }
    }
    let G = DQ();
    return h1((Z, I) => {
        if (I.escape) {
            Q();
            return
        }
    }), IN.default.createElement(IN.default.Fragment, null, IN.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "warning"
    }, IN.default.createElement(TextComponent, {
        bold: !0,
        color: "warning"
    }, "New MCP server found in .mcp.json: ", A), IN.default.createElement(OJ1, null), IN.default.createElement(M0, {
        options: [{
            label: "Use this and all future MCP servers in this project",
            value: "yes_all"
        }, {
            label: "Use this MCP server",
            value: "yes"
        }, {
            label: "Continue without using this MCP server",
            value: "no"
        }],
        onChange: (Z) => B(Z),
        onCancel: () => B("no")
    })), IN.default.createElement(j, {
        marginLeft: 3
    }, IN.default.createElement(TextComponent, {
        dimColor: !0
    }, G.pending ? IN.default.createElement(IN.default.Fragment, null, "Press ", G.keyName, " again to exit") : IN.default.createElement(IN.default.Fragment, null, "Enter to confirm · Esc to reject"))))
}
var IN;
var nz9 = lazyLoader(() => {
    hA();
    T6();
    RB();
    sK0();
    c9();
    w0();
    IN = esmImport(VA(), 1)
});
async function az9() {
    let {
        servers: A
    } = yX("project"), Q = Object.keys(A).filter((B) => diA(B) === "pending");
    if (Q.length === 0) return;
    await new Promise(async (B) => {
        let G = () => {
            process.stdout.write("\x1B[2J\x1B[3J\x1B[H", () => {
                B()
            })
        };
        if (Q.length === 1 && Q[0] !== void 0) {
            let Z = await Z3(OSA.default.createElement(N7, null, OSA.default.createElement(iz9, {
                serverName: Q[0],
                onDone: () => {
                    Z.unmount?.(), G()
                }
            })), {
                exitOnCtrlC: !1
            })
        } else {
            let Z = await Z3(OSA.default.createElement(N7, null, OSA.default.createElement(pz9, {
                serverNames: Q,
                onDone: () => {
                    Z.unmount?.(), G()
                }
            })), {
                exitOnCtrlC: !1
            })
        }
    })
}
var OSA;
var sz9 = lazyLoader(() => {
    hA();
    lz9();
    nz9();
    H9();
    GM();
    xX();
    OSA = esmImport(VA(), 1)
});
var Jf3;
var rz9 = lazyLoader(() => {
    Jf3 = esmImport(z21(), 1)
});

function oz9({
    onAccept: A
}) {
    MK.default.useEffect(() => {
        BA("tengu_bypass_permissions_mode_dialog_shown", {})
    }, []);

    function Q(G) {
        let Z = L1();
        switch (G) {
            case "accept": {
                BA("tengu_bypass_permissions_mode_dialog_accept", {}), d0({
                    ...Z,
                    bypassPermissionsModeAccepted: !0
                }), A();
                break
            }
            case "decline": {
                c8(1);
                break
            }
        }
    }
    let B = DQ();
    return h1((G, Z) => {
        if (Z.escape) {
            c8(0);
            return
        }
    }), MK.default.createElement(MK.default.Fragment, null, MK.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "error"
    }, MK.default.createElement(TextComponent, {
        bold: !0,
        color: "error"
    }, "WARNING: Claude Code running in Bypass Permissions mode"), MK.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, MK.default.createElement(TextComponent, null, "In Bypass Permissions mode, Claude Code will not ask for your approval before running potentially dangerous commands.", MK.default.createElement(gV, null), "This mode should only be used in a sandboxed container/VM that has restricted internet access and can easily be restored if damaged."), MK.default.createElement(TextComponent, null, "By proceeding, you accept all responsibility for actions taken while running in Bypass Permissions mode."), MK.default.createElement(a4, {
        url: "https://code.claude.com/docs/AGENT_OUTPUT_TOOL_NAME/security"
    })), MK.default.createElement(M0, {
        options: [{
            label: "No, exit",
            value: "decline"
        }, {
            label: "Yes, I accept",
            value: "accept"
        }],
        onChange: (G) => Q(G),
        onCancel: () => Q("decline")
    })), MK.default.createElement(j, {
        marginLeft: 3
    }, MK.default.createElement(TextComponent, {
        dimColor: !0
    }, B.pending ? MK.default.createElement(MK.default.Fragment, null, "Press ", B.keyName, " again to exit") : MK.default.createElement(MK.default.Fragment, null, "Enter to confirm · Esc to exit"))))
}
var MK;
var tz9 = lazyLoader(() => {
    hA();
    T6();
    jQ();
    w0();
    c9();
    hA();
    _J();
    MK = esmImport(VA(), 1)
});

function ng({
    newState: A,
    oldState: Q
}) {
    if (A.mainLoopModel !== Q.mainLoopModel && A.mainLoopModel === null) cB("userSettings", {
        model: void 0
    }), zs(null);
    if (A.mainLoopModel !== Q.mainLoopModel && A.mainLoopModel !== null) cB("userSettings", {
        model: A.mainLoopModel
    }), zs(A.mainLoopModel);
    if (A.showExpandedTodos !== Q.showExpandedTodos && L1().showExpandedTodos !== A.showExpandedTodos) d0({
        ...L1(),
        showExpandedTodos: A.showExpandedTodos
    });
    if (Q !== null && A.todos !== Q.todos)
        for (let B in A.todos) GYA(A.todos[B], B);
    if (A.verbose !== Q.verbose && L1().verbose !== A.verbose) d0({
        ...L1(),
        verbose: A.verbose
    });
    if (A.thinkingEnabled !== Q.thinkingEnabled) cB("userSettings", {
        alwaysThinkingEnabled: A.thinkingEnabled
    });
    if (A.feedbackSurvey.timeLastShown !== Q.feedbackSurvey.timeLastShown && A.feedbackSurvey.timeLastShown !== null) d0({
        ...L1(),
        feedbackSurveyState: {
            lastShownTime: A.feedbackSurvey.timeLastShown
        }
    });
    if (isClaudeCodeRemote() && (A.mcp.tools.length > 0 || A.mcp.clients.length > 0 || Object.keys(A.mcp.resources).length > 0 || A.mcp !== Q.mcp)) {
        if (rH9(A.mcp.clients, A.mcp.tools, A.mcp.resources), NGA()) KJ1()
    }
    if (A.settings !== Q.settings) try {
        ElA(), zlA()
    } catch (B) {
        e(B instanceof Error ? B : Error(`Failed to clear auth caches: TextComponent{B}`))
    }
}
var ez9 = lazyLoader(() => {
    jQ();
    jQ();
    S0();
    RB();
    Ei();
    zFA();
    EE();
    DJ1();
    hB();
    u1()
});

function AU9() {
    let A = L1();
    if (A.autoUpdates !== !1 || A.autoUpdatesProtectedForNative === !0) return;
    try {
        let Q = LB("userSettings") || {};
        cB("userSettings", {
            ...Q,
            env: {
                ...Q.env,
                DISABLE_AUTOUPDATER: "1"
            }
        }), BA("tengu_migrate_autoupdates_to_settings", {
            was_user_preference: !0,
            already_had_env_var: !!Q.env?.DISABLE_AUTOUPDATER
        }), process.env.DISABLE_AUTOUPDATER = "1";
        let {
            autoUpdates: B,
            autoUpdatesProtectedForNative: G,
            ...Z
        } = A;
        d0(Z)
    } catch (Q) {
        e(Error(`Failed to migrate auto-updates: TextComponent{Q}`)), BA("tengu_migrate_autoupdates_error", {
            has_error: !0
        })
    }
}
var QU9 = lazyLoader(() => {
    jQ();
    RB();
    w0();
    u1()
});
async function BU9() {
    if (!(await tV("force_local_installation_migration") && !al() && !print && !parseBoolean(!1) && !0 && !x0A())) return;
    g("Migrating Claude CLI to local installation. This improves auto-updates and removes dependency on global npm permissions. Your existing configuration and history will be preserved.");
    try {
        BA("tengu_forced_migration_start", {
            gateControlled: !0
        }), await new Promise(async (Q) => {
            let {
                waitUntilExit: B
            } = await Z3(RSA.createElement(N7, null, RSA.createElement(JFA, null)));
            B().then(() => {
                Q()
            })
        }), BA("tengu_forced_migration_success", {
            gateControlled: !0
        }), g("Migration complete! Please restart Claude CLI to use the new installation."), process.exit(0)
    } catch (Q) {
        let B = Q instanceof Error ? Q : Error(String(Q));
        e(B), BA("tengu_forced_migration_failure", {
            gateControlled: !0
        }), g("Migration encountered an error, continuing with global installation.", {
            level: "error"
        })
    }
}
var RSA;
var GU9 = lazyLoader(() => {
    hA();
    zY1();
    O9();
    w0();
    H9();
    nT();
    u1();
    xP();
    hQ();
    D0();
    RSA = esmImport(VA(), 1)
});

function ZU9() {
    let A = M5(),
        Q = A.enableAllProjectMcpServers !== void 0,
        B = A.enabledMcpjsonServers && A.enabledMcpjsonServers.length > 0,
        G = A.disabledMcpjsonServers && A.disabledMcpjsonServers.length > 0;
    if (!Q && !B && !G) return;
    try {
        let Z = LB("localSettings") || {},
            I = {},
            Y = [];
        if (Q && Z.enableAllProjectMcpServers === void 0) I.enableAllProjectMcpServers = A.enableAllProjectMcpServers, Y.push("enableAllProjectMcpServers");
        else if (Q) Y.push("enableAllProjectMcpServers");
        if (B && A.enabledMcpjsonServers) {
            let J = Z.enabledMcpjsonServers || [];
            I.enabledMcpjsonServers = [...new Set([...J, ...A.enabledMcpjsonServers])], Y.push("enabledMcpjsonServers")
        }
        if (G && A.disabledMcpjsonServers) {
            let J = Z.disabledMcpjsonServers || [];
            I.disabledMcpjsonServers = [...new Set([...J, ...A.disabledMcpjsonServers])], Y.push("disabledMcpjsonServers")
        }
        if (Object.keys(I).length > 0) cB("localSettings", I);
        if (Y.length > 0) {
            let J = M5(),
                {
                    enableAllProjectMcpServers: W,
                    enabledMcpjsonServers: X,
                    disabledMcpjsonServers: F,
                    ...V
                } = J;
            if (Y.includes("enableAllProjectMcpServers") || Y.includes("enabledMcpjsonServers") || Y.includes("disabledMcpjsonServers")) aI(V)
        }
        BA("tengu_migrate_mcp_approval_fields_success", {
            migratedCount: Y.length
        })
    } catch {
        BA("tengu_migrate_mcp_approval_fields_error", {})
    }
}
var IU9 = lazyLoader(() => {
    jQ();
    RB();
    w0()
});
import {
    posix as Wf3
} from "path";

function Xf3(A) {
    let Q = VvA(A).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    return Wf3.isAbsolute(Q) && !Q.startsWith("//") ? "/" + Q : Q
}

function YU9() {
    let A = M5(),
        Q = A.ignorePatterns;
    if (!Q || !Array.isArray(Q) || Q.length === 0) return;
    let B = [];
    for (let I of Q) {
        let Y = Xf3(I);
        B.push({
            toolName: "Read",
            ruleContent: Y
        }, {
            toolName: "Edit",
            ruleContent: Y
        })
    }
    if (WvA({
            ruleValues: B,
            ruleBehavior: "deny"
        }, "localSettings")) try {
        delete A.ignorePatterns, aI(A), BA("tengu_migrate_ignore_patterns_success", {
            ignore_patterns_count: Q.length
        })
    } catch (I) {
        e(Error(`Failed to remove ignorePatterns from config: TextComponent{I instanceof Error?I.message:String(I)}`)), BA("tengu_migrate_ignore_patterns_config_cleanup_error", {
            ignore_patterns_count: Q.length
        })
    } else e(Error("Failed to migrate ignorePatterns to settings permissions")), BA("tengu_migrate_ignore_patterns_error", {
        ignore_patterns_count: Q.length
    })
}
var JU9 = lazyLoader(() => {
    jQ();
    w0();
    u1();
    _Y();
    Gr()
});

function WU9() {
    if (L1().sonnet45MigrationComplete) return;
    if (getProvider() !== "firstParty") {
        d0({
            ...L1(),
            sonnet45MigrationComplete: !0
        });
        return
    }
    if (c0()?.model !== void 0) cB("userSettings", {
        model: void 0
    }), d0({
        ...L1(),
        sonnet45MigrationComplete: !0,
        sonnet45MigrationTimestamp: Date.now()
    });
    else d0({
        ...L1(),
        sonnet45MigrationComplete: !0
    })
}
var XU9 = lazyLoader(() => {
    jQ();
    RB();
    dK()
});

function FU9() {
    if (L1().opus45MigrationComplete) return;
    let Q = getProvider(),
        B = x$A() || v$A();
    if (Q !== "firstParty" || !B) {
        d0({
            ...L1(),
            opus45MigrationComplete: !0
        });
        return
    }
    if (c0()?.model !== void 0) cB("userSettings", {
        model: void 0
    });
    d0({
        ...L1(),
        opus45MigrationComplete: !0
    })
}
var VU9 = lazyLoader(() => {
    jQ();
    RB();
    dK();
    s2()
});

function TSA(A, Q, B, G) {
    let Z = {
        type: "permissionPromptTool",
        permissionPromptToolName: Q.name,
        toolResult: A
    };
    if (A.behavior === "allow") {
        let I = A.updatedPermissions;
        if (I) G.setAppState((Y) => ({
            ...Y,
            toolPermissionContext: Rm(Y.toolPermissionContext, I)
        })), SKA(I);
        return {
            ...A,
            decisionReason: Z
        }
    } else if (A.behavior === "deny" && A.interrupt) G.abortController.abort("tool-rejection");
    return {
        ...A,
        decisionReason: Z
    }
}
var qPI, Ff3, Vf3, RJ1;
var rK0 = lazyLoader(() => {
    h2();
    n10();
    hK();
    qPI = I2.object({
        tool_name: I2.string().describe("The name of the tool requesting permission"),
        input: I2.record(I2.unknown()).describe("The input for the tool"),
        tool_use_id: I2.string().optional().describe("The unique tool use request ID")
    }), Ff3 = I2.object({
        behavior: I2.literal("allow"),
        updatedInput: I2.record(I2.unknown()),
        updatedPermissions: I2.array(T21).optional(),
        toolUseID: I2.string().optional()
    }), Vf3 = I2.object({
        behavior: I2.literal("deny"),
        message: I2.string(),
        interrupt: I2.boolean().optional(),
        toolUseID: I2.string().optional()
    }), RJ1 = I2.union([Ff3, Vf3])
});
import {
    randomUUID as Kf3
} from "crypto";

function Df3(A) {
    if (!A) return;
    switch (A.type) {
        case "rule":
        case "mode":
        case "subcommandResults":
        case "permissionPromptTool":
            return;
        case "hook":
        case "asyncAgent":
        case "sandboxOverride":
        case "classifier":
        case "workingDir":
        case "other":
            return A.reason
    }
}
class PSA {
    input;
    replayUserMessages;
    structuredInput;
    pendingRequests = new Map;
    inputClosed = !1;
    unexpectedResponseCallback;
    constructor(A, Q) {
        this.input = A;
        this.replayUserMessages = Q;
        this.input = A, this.structuredInput = this.read()
    }
    async * read() {
        let A = "";
        for await (let Q of this.input) {
            A += Q;
            let B;
            while ((B = A.indexOf(`
`)) !== -1) {
                let G = A.slice(0, B);
                A = A.slice(B + 1);
                let Z = await this.processLine(G);
                if (Z) yield Z
            }
        }
        if (A) {
            let Q = await this.processLine(A);
            if (Q) yield Q
        }
        this.inputClosed = !0;
        for (let Q of this.pendingRequests.values()) Q.reject(Error("Tool permission stream closed before response received"))
    }
    getPendingPermissionRequests() {
        return this.pendingRequests.values().map((A) => A.request).filter((A) => A.request.subtype === "can_use_tool").toArray()
    }
    setUnexpectedResponseCallback(A) {
        this.unexpectedResponseCallback = A
    }
    async processLine(A) {
        try {
            let Q = JSON.parse(A);
            if (Q.type === "keep_alive") return;
            if (Q.type === "control_response") {
                let B = this.pendingRequests.get(Q.response.request_id);
                if (!B) {
                    if (this.unexpectedResponseCallback) await this.unexpectedResponseCallback(Q);
                    return
                }
                if (this.pendingRequests.delete(Q.response.request_id), Q.response.subtype === "error") {
                    B.reject(Error(Q.response.error));
                    return
                }
                let G = Q.response.response;
                if (B.schema) try {
                    B.resolve(B.schema.parse(G))
                } catch (Z) {
                    B.reject(Z)
                } else B.resolve({});
                if (this.replayUserMessages) return Q;
                return
            }
            if (Q.type !== "user" && Q.type !== "control_request") oK0(`Error: Expected message type 'user' or 'control', got 'TextComponent{Q.type}'`);
            if (Q.type === "control_request") {
                if (!Q.request) oK0("Error: Missing request on control_request");
                return Q
            }
            if (Q.message.role !== "user") oK0(`Error: Expected message role 'user', got 'TextComponent{Q.message.role}'`);
            return Q
        } catch (Q) {
            console.error(`Error parsing streaming input line: TextComponent{A}: TextComponent{Q}`), process.exit(1)
        }
    }
    write(A) {
        N9(JSON.stringify(A) + `
`)
    }
    async sendRequest(A, Q, B) {
        let G = Kf3(),
            Z = {
                type: "control_request",
                request_id: G,
                request: A
            };
        if (this.inputClosed) throw Error("Stream closed");
        if (B?.aborted) throw Error("Request aborted");
        this.write(Z);
        let I = () => {
            this.write({
                type: "control_cancel_request",
                request_id: G
            });
            let Y = this.pendingRequests.get(G);
            if (Y) Y.reject(new YW)
        };
        if (B) B.addEventListener("abort", I, {
            once: !0
        });
        try {
            return await new Promise((Y, J) => {
                this.pendingRequests.set(G, {
                    request: {
                        type: "control_request",
                        request_id: G,
                        request: A
                    },
                    resolve: (W) => {
                        Y(W)
                    },
                    reject: J,
                    schema: Q
                })
            })
        } finally {
            if (B) B.removeEventListener("abort", I);
            this.pendingRequests.delete(G)
        }
    }
    createCanUseTool() {
        return async (A, Q, B, G, Z) => {
            let I = await L$(A, Q, B, G, Z);
            if (I.behavior === "allow" || I.behavior === "deny") return I;
            try {
                let Y = await this.sendRequest({
                    subtype: "can_use_tool",
                    tool_name: A.name,
                    input: Q,
                    permission_suggestions: I.suggestions,
                    blocked_path: I.blockedPath,
                    decision_reason: Df3(I.decisionReason),
                    tool_use_id: Z,
                    agent_id: B.agentId
                }, RJ1, B.abortController.signal);
                return TSA(Y, A, Q, B)
            } catch (Y) {
                return TSA({
                    behavior: "deny",
                    message: `Tool permission request failed: TextComponent{Y}`,
                    toolUseID: Z
                }, A, Q, B)
            }
        }
    }
    createHookCallback(A, Q) {
        return {
            type: "callback",
            timeout: Q,
            callback: async (B, G, Z) => {
                try {
                    return await this.sendRequest({
                        subtype: "hook_callback",
                        callback_id: A,
                        input: B,
                        tool_use_id: G || void 0
                    }, P21, Z)
                } catch (I) {
                    return console.error(`Error in hook callback TextComponent{A}:`, I), {}
                }
            }
        }
    }
    async sendMcpMessage(A, Q) {
        return (await this.sendRequest({
            subtype: "mcp_message",
            server_name: A,
            message: Q
        }, _.object({
            mcp_response: _.any()
        }))).mcp_response
    }
}

function oK0(A) {
    console.error(A), process.exit(1)
}
var tK0 = lazyLoader(() => {
    aG();
    h2();
    rK0();
    a10();
    $Z()
});
class eK0 {
    ws = null;
    lastSentId = null;
    url;
    state = "idle";
    onData;
    onCloseCallback;
    headers;
    reconnectAttempts = 0;
    reconnectTimer = null;
    pingInterval = null;
    messageBuffer;
    constructor(A, Q = {}) {
        this.url = A, this.headers = Q, this.messageBuffer = new u$A(Hf3)
    }
    connect() {
        if (this.state !== "idle" && this.state !== "reconnecting") {
            g(`WebSocketTransport: Cannot connect, current state is TextComponent{this.state}`, {
                level: "error"
            }), R6("error", "cli_websocket_connect_failed");
            return
        }
        this.state = "reconnecting", g(`WebSocketTransport: Opening TextComponent{this.url.href}`), R6("info", "cli_websocket_connect_opening");
        let A = {
            ...this.headers
        };
        if (this.lastSentId) A["X-Last-Request-Id"] = this.lastSentId, g(`WebSocketTransport: Adding X-Last-Request-Id header: TextComponent{this.lastSentId}`);
        this.ws = new j_(this.url.href, {
            headers: A,
            agent: hEA(this.url.href)
        }), this.ws.on("open", () => {
            g("WebSocketTransport: Connected"), R6("info", "cli_websocket_connect_connected");
            let Q = this.ws.upgradeReq;
            if (Q?.headers?.["x-last-request-id"]) {
                let B = Q.headers["x-last-request-id"];
                this.replayBufferedMessages(B)
            }
            this.reconnectAttempts = 0, this.state = "connected", this.startPingInterval()
        }), this.ws.on("message", (Q) => {
            let B = Q.toString();
            if (this.onData) this.onData(B)
        }), this.ws.on("error", (Q) => {
            g(`WebSocketTransport: Error: TextComponent{Q.message}`, {
                level: "error"
            }), R6("error", "cli_websocket_connect_error"), this.handleConnectionError()
        }), this.ws.on("close", (Q, B) => {
            g(`WebSocketTransport: Closed: TextComponent{Q}`, {
                level: "error"
            }), R6("error", "cli_websocket_connect_closed"), this.handleConnectionError()
        })
    }
    sendLine(A) {
        if (!this.ws || this.state !== "connected") return g("WebSocketTransport: Not connected"), R6("info", "cli_websocket_send_not_connected"), !1;
        try {
            return this.ws.send(A), !0
        } catch (Q) {
            return g(`WebSocketTransport: Failed to send: TextComponent{Q}`, {
                level: "error"
            }), R6("error", "cli_websocket_send_error"), this.ws = null, this.handleConnectionError(), !1
        }
    }
    doDisconnect() {
        if (this.stopPingInterval(), this.ws) this.ws.close(), this.ws = null
    }
    handleConnectionError() {
        if (g(`WebSocketTransport: Disconnected from TextComponent{this.url.href}`), R6("info", "cli_websocket_disconnected"), this.doDisconnect(), this.state === "closing" || this.state === "closed") return;
        if (this.reconnectAttempts < KU9) {
            if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
            this.state = "reconnecting", this.reconnectAttempts++;
            let A = Math.min(Cf3 * Math.pow(2, this.reconnectAttempts - 1), Ef3);
            g(`WebSocketTransport: Reconnecting in TextComponent{A}ms (attempt TextComponent{this.reconnectAttempts}/TextComponent{KU9})`), R6("error", "cli_websocket_reconnect_attempt", {
                reconnectAttempts: this.reconnectAttempts
            }), this.reconnectTimer = setTimeout(() => {
                this.reconnectTimer = null, this.connect()
            }, A)
        } else if (g(`WebSocketTransport: Max reconnection attempts reached for TextComponent{this.url.href}`, {
                level: "error"
            }), R6("error", "cli_websocket_reconnect_exhausted", {
                reconnectAttempts: this.reconnectAttempts
            }), this.state = "closed", this.onCloseCallback) this.onCloseCallback()
    }
    close() {
        if (this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
        this.stopPingInterval(), this.state = "closing", this.doDisconnect()
    }
    replayBufferedMessages(A) {
        let Q = this.messageBuffer.toArray();
        if (Q.length === 0) return;
        let B = 0;
        if (A) {
            let Z = Q.findIndex((I) => ("uuid" in I) && I.uuid === A);
            if (Z >= 0) B = Z + 1
        }
        let G = Q.slice(B);
        if (G.length === 0) {
            g("WebSocketTransport: No new messages to replay"), R6("info", "cli_websocket_no_messages_to_replay");
            return
        }
        g(`WebSocketTransport: Replaying TextComponent{G.length} buffered messages`), R6("info", "cli_websocket_messages_to_replay", {
            count: G.length
        });
        for (let Z of G) {
            let I = JSON.stringify(Z) + `
`;
            if (!this.sendLine(I)) {
                this.handleConnectionError();
                break
            }
        }
    }
    isConnectedStatus() {
        return this.state === "connected"
    }
    setOnData(A) {
        this.onData = A
    }
    setOnClose(A) {
        this.onCloseCallback = A
    }
    write(A) {
        if ("uuid" in A && typeof A.uuid === "string") this.messageBuffer.add(A), this.lastSentId = A.uuid;
        let Q = JSON.stringify(A) + `
`;
        if (this.state !== "connected") return;
        this.sendLine(Q)
    }
    startPingInterval() {
        this.stopPingInterval(), this.pingInterval = setInterval(() => {
            if (this.state === "connected" && this.ws) try {
                this.ws.ping()
            } catch (A) {
                g(`WebSocketTransport: Ping failed: TextComponent{A}`, {
                    level: "error"
                }), R6("error", "cli_websocket_ping_failed")
            }
        }, zf3)
    }
    stopPingInterval() {
        if (this.pingInterval) clearInterval(this.pingInterval), this.pingInterval = null
    }
}
var Hf3 = 1000,
    KU9 = 3,
    Cf3 = 1000,
    Ef3 = 30000,
    zf3 = 1e4;
var DU9 = lazyLoader(() => {
    fUA();
    D0();
    Vc();
    uIA()
});

function HU9(A, Q = {}) {
    if (A.protocol === "ws:" || A.protocol === "wss:") return new eK0(A, Q);
    else throw Error(`Unsupported protocol: TextComponent{A.protocol}`)
}
var CU9 = lazyLoader(() => {
    DU9()
});
import {
    URL as Uf3
} from "url";
import {
    PassThrough as $f3
} from "stream";
var AD0;
var EU9 = lazyLoader(() => {
    tK0();
    CU9();
    XH();
    OB1();
    AD0 = class AD0 extends PSA {
        url;
        transport;
        inputStream;
        constructor(A, Q, B) {
            let G = new $f3({
                encoding: "utf8"
            });
            super(G, B);
            this.inputStream = G, this.url = new Uf3(A);
            let Z = {},
                I = tAA();
            if (I) Z.Authorization = `Bearer TextComponent{I}`;
            if (this.transport = HU9(this.url, Z), this.transport.setOnData((Y) => {
                    this.inputStream.write(Y)
                }), this.transport.setOnClose(() => {
                    this.inputStream.end()
                }), this.transport.connect(), wG(async () => this.close()), Q) {
                let Y = this.inputStream;
                (async () => {
                    for await (let J of Q) Y.write(J + `
`)
                })()
            }
        }
        write(A) {
            this.transport.write(A)
        }
        close() {
            this.transport.close(), this.inputStream.end()
        }
    }
});
import {
    randomUUID as Ma
} from "node:crypto";
async function* qf3(A, Q, B, G) {
    let {
        permissionResult: Z,
        assistantMessage: I
    } = A, {
        toolUseID: Y
    } = Z;
    if (!Y) return;
    let J = I.message.content,
        W;
    if (Array.isArray(J)) {
        for (let C of J)
            if (C.type === "tool_use" && C.id === Y) {
                W = C;
                break
            }
    }
    if (!W) return;
    let {
        name: X,
        input: F
    } = W;
    if (!Q.find((C) => C.name === X)) return;
    let K = {
            ...W,
            input: Z.behavior === "allow" ? Z.updatedInput : F
        },
        D = async () => ({
            ...Z,
            decisionReason: {
                type: "mode",
                mode: "default"
            }
        });
    B.push(I), await N0A(B), yield {
        ...I,
        session_id: G0(),
        parent_tool_use_id: null
    };
    for await (let C of _30([K], [I], D, G)) if (C.message) B.push(C.message), await N0A(B), yield {
        ...C.message,
        session_id: G0(),
        parent_tool_use_id: null
    }
}

function Nf3(A) {
    if (!A) return !1;
    if (A.type === "assistant") {
        let Q = last(A.message.content);
        return Q?.type === "text" || Q?.type === "thinking" || Q?.type === "redacted_thinking"
    }
    if (A.type === "user") {
        let Q = A.message.content;
        if (!Array.isArray(Q) || Q.length === 0) return !1;
        return Q.every((B) => ("type" in B) && B.type === "tool_result")
    }
    return !1
}
async function* UU9({
    commands: A,
    prompt: Q,
    promptUuid: B,
    cwd: G,
    tools: Z,
    mcpClients: I,
    verbose: Y = !1,
    maxThinkingTokens: J,
    maxTurns: W,
    maxBudgetUsd: X,
    canUseTool: F,
    mutableMessages: V = [],
    customSystemPrompt: K,
    appendSystemPrompt: D,
    userSpecifiedModel: H,
    fallbackModel: C,
    jsonSchema: E,
    getAppState: z,
    setAppState: w,
    abortController: N,
    replayUserMessages: q = !1,
    includePartialMessages: R = !1,
    agents: P = [],
    setSDKStatus: y,
    orphanedPermission: v
}) {
    Qq(G);
    let x = Date.now(),
        p = [],
        u = async (k1, T0, fQ, F1, R1, N1) => {
            let Z0 = await F(k1, T0, fQ, F1, R1, N1);