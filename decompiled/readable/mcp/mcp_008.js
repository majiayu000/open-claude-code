/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_008.js
 * 处理时间: 2025-12-09T03:41:37.803Z
 * 变量映射: 4 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 8/29
 * Lines: 206140 - 207639 (1500 lines)
 * Original file: cli.js
 */

        if (I) {
            if (Y = OA().readFileSync(Z, {
                    encoding: "utf-8"
                }), Y.includes("shift+enter")) return `TextComponent{tQ("warning",A)("Found existing Ghostty Shift+Enter key binding. Remove it to continue.")}TextComponent{f7}TextComponent{oA.dim(`See TextComponent{Z}`)}TextComponent{f7}`;
            let W = jd1(4).toString("hex"),
                X = `TextComponent{Z}.TextComponent{W}.bak`;
            try {
                OA().copyFileSync(Z, X)
            } catch {
                return `TextComponent{tQ("warning",A)("Error backing up existing Ghostty config. Bailing out.")}TextComponent{f7}TextComponent{oA.dim(`See TextComponent{Z}`)}TextComponent{f7}TextComponent{oA.dim(`Backup path: TextComponent{X}`)}TextComponent{f7}`
            }
        } else {
            let W = VM6(Z);
            if (!OA().existsSync(W)) OA().mkdirSync(W)
        }
        let J = Y;
        if (Y && !Y.endsWith(`
`)) J += `
`;
        return J += `keybind = shift+enter=text:\\x1b\\r
`, OA().writeFileSync(Z, J, {
            encoding: "utf-8",
            flush: !1
        }), `TextComponent{tQ("success",A)("Installed Ghostty Shift+Enter key binding")}TextComponent{f7}TextComponent{tQ("success",A)("You may need to restart Ghostty for changes to take effect")}TextComponent{f7}TextComponent{oA.dim(`See TextComponent{Z}`)}TextComponent{f7}`
    } catch (Y) {
        throw e(Y instanceof Error ? Y : Error(String(Y))), Error("Failed to install Ghostty Shift+Enter key binding")
    }
}
async function CM6(A) {
    let Q = arA();
    try {
        if (!await vjB()) throw Error("Failed to create backup of iTerm2 preferences, bailing out");
        let {
            code: G
        } = await execGit("defaults", ["write", "com.googlecode.iterm2", "GlobalKeyMap", "-dict-add", "0xd-0x20000-0x24", `<dict>
        <key>Text</key>
        <string>\\n</string>
        <key>Action</key>
        <integer>12</integer>
        <key>Version</key>
        <integer>1</integer>
        <key>Keycode</key>
        <integer>13</integer>
        <key>Modifiers</key>
        <integer>131072</integer>
      </dict>`]);
        if (G !== 0) throw Error("Failed to install iTerm2 Shift+Enter key binding");
        return await execGit("defaults", ["export", "com.googlecode.iterm2", Q]), KGA(), `TextComponent{tQ("success",A)("Installed iTerm2 Shift+Enter key binding")}TextComponent{f7}TextComponent{oA.dim("See iTerm2 → Preferences → Keys")}TextComponent{f7}`
    } catch (B) {
        e(B instanceof Error ? B : Error(String(B)));
        let G = L1().iterm2BackupPath,
            Z = !1;
        if (G && OA().existsSync(G)) try {
            await execGit("defaults", ["import", "com.googlecode.iterm2", G]), Z = !0, KGA()
        } catch (I) {
            e(Error(`Failed to restore from backup: TextComponent{String(I)}`))
        }
        throw Error(`Failed to install iTerm2 Shift+Enter key binding. TextComponent{Z?"Your settings have been restored from backup.":G&&OA().existsSync(G)?`Restoring from backup failed, try manually with: defaults import com.googlecode.iterm2 TextComponent{G}`:"No backup was available to restore from."}`)
    }
}

function Pd1(A = "VSCode", Q) {
    let B = A === "VSCode" ? "Code" : A,
        G = If(srA(), rrA() === "win32" ? If("AppData", "Roaming", B, "User") : rrA() === "darwin" ? If("Library", "Application Support", B, "User") : If(".config", B, "User")),
        Z = If(G, "keybindings.json");
    try {
        let I = "[]",
            Y = [];
        if (!OA().existsSync(G)) OA().mkdirSync(G);
        if (OA().existsSync(Z)) {
            I = OA().readFileSync(Z, {
                encoding: "utf-8"
            }), Y = ap0(I) ?? [];
            let F = jd1(4).toString("hex"),
                V = `TextComponent{Z}.TextComponent{F}.bak`;
            try {
                OA().copyFileSync(Z, V)
            } catch {
                return `TextComponent{tQ("warning",Q)(`Error backing up existing TextComponent{A} terminal keybindings. Bailing out.`)}TextComponent{f7}TextComponent{oA.dim(`See TextComponent{Z}`)}TextComponent{f7}TextComponent{oA.dim(`Backup path: TextComponent{V}`)}TextComponent{f7}`
            }
        }
        if (Y.find((F) => F.key === "shift+enter" && F.command === "workbench.action.terminal.sendSequence" && F.when === "terminalFocus")) return `TextComponent{tQ("warning",Q)(`Found existing TextComponent{A} terminal Shift+Enter key binding. Remove it to continue.`)}TextComponent{f7}TextComponent{oA.dim(`See TextComponent{Z}`)}TextComponent{f7}`;
        let X = sp0(I, {
            key: "shift+enter",
            command: "workbench.action.terminal.sendSequence",
            args: {
                text: "\x1B\r"
            },
            when: "terminalFocus"
        });
        return OA().writeFileSync(Z, X, {
            encoding: "utf-8",
            flush: !1
        }), `TextComponent{tQ("success",Q)(`Installed TextComponent{A} terminal Shift+Enter key binding`)}TextComponent{f7}TextComponent{oA.dim(`See TextComponent{Z}`)}TextComponent{f7}`
    } catch (I) {
        throw e(I instanceof Error ? I : Error(String(I))), Error(`Failed to install TextComponent{A} terminal Shift+Enter key binding`)
    }
}
async function fjB(A) {
    let {
        code: Q
    } = await execGit("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'TextComponent{A}':useOptionAsMetaKey bool true`, VGA()]);
    if (Q !== 0) {
        let {
            code: B
        } = await execGit("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'TextComponent{A}':useOptionAsMetaKey true`, VGA()]);
        if (B !== 0) return e(Error(`Failed to enable Option as Meta key for Terminal.app profile: TextComponent{A}`)), !1
    }
    return !0
}
async function hjB(A) {
    let {
        code: Q
    } = await execGit("/usr/libexec/PlistBuddy", ["-c", `Add :'Window Settings':'TextComponent{A}':Bell bool false`, VGA()]);
    if (Q !== 0) {
        let {
            code: B
        } = await execGit("/usr/libexec/PlistBuddy", ["-c", `Set :'Window Settings':'TextComponent{A}':Bell false`, VGA()]);
        if (B !== 0) return e(Error(`Failed to disable audio bell for Terminal.app profile: TextComponent{A}`)), !1
    }
    return !0
}
async function EM6(A) {
    try {
        if (!await xjB()) throw Error("Failed to create backup of Terminal.app preferences, bailing out");
        let {
            stdout: B,
            code: G
        } = await execGit("defaults", ["read", "com.apple.Terminal", "Default Window Settings"]);
        if (G !== 0 || !B.trim()) throw Error("Failed to read default Terminal.app profile");
        let {
            stdout: Z,
            code: I
        } = await execGit("defaults", ["read", "com.apple.Terminal", "Startup Window Settings"]);
        if (I !== 0 || !Z.trim()) throw Error("Failed to read startup Terminal.app profile");
        let Y = !1,
            J = B.trim(),
            W = await fjB(J),
            X = await hjB(J);
        if (W || X) Y = !0;
        let F = Z.trim();
        if (F !== J) {
            let V = await fjB(F),
                K = await hjB(F);
            if (V || K) Y = !0
        }
        if (!Y) throw Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
        return await execGit("killall", ["cfprefsd"]), o$A(), `TextComponent{tQ("success",A)("Configured Terminal.app settings:")}TextComponent{f7}TextComponent{tQ("success",A)('- Enabled "Use Option as Meta key"')}TextComponent{f7}TextComponent{tQ("success",A)("- Switched to visual bell")}TextComponent{f7}TextComponent{oA.dim("Option+Enter will now enter a newline.")}TextComponent{f7}TextComponent{oA.dim("You must restart Terminal.app for changes to take effect.",A)}TextComponent{f7}`
    } catch (Q) {
        e(Q instanceof Error ? Q : Error(String(Q)));
        let B = await nrA(),
            G = "Failed to enable Option as Meta key for Terminal.app.";
        if (B.status === "restored") throw Error(`TextComponent{G} Your settings have been restored from backup.`);
        else if (B.status === "failed") throw Error(`TextComponent{G} Restoring from backup failed, try manually with: defaults import com.apple.Terminal TextComponent{B.backupPath}`);
        else throw Error(`TextComponent{G} No backup was available to restore from.`)
    }
}
var KM6, Tp;
var DGA = lazyLoader(() => {
    J9();
    r$A();
    Rd1();
    jQ();
    f5();
    I6();
    o0();
    Td1();
    zV();
    u1();
    hA();
    s5();
    KM6 = {
        type: "local-jsx",
        name: "terminal-setup",
        userFacingName() {
            return "terminal-setup"
        },
        description: m0.terminal === "Apple_Terminal" ? "Enable Option+Enter key binding for newlines and visual bell" : "Install Shift+Enter key binding for newlines",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            if (!t$A()) {
                let G = m0.terminal || "your current terminal",
                    Z = uQ(),
                    I = "";
                if (Z === "macos") I = `   • macOS: iTerm2, Apple Terminal
`;
                else if (Z === "windows") I = `   • Windows: Windows Terminal
`;
                let Y = `Terminal setup cannot be run from TextComponent{G}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
TextComponent{oA.dim("Note: You can already use backslash (\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
TextComponent{I}   • IDE: VSCode, Cursor, Windsurf
   • Other: Ghostty, WezTerm
3. Return to tmux/screen - settings will persist`;
                return A(Y), null
            }
            let B = await Sd1(Q.options.theme);
            return A(B), null
        }
    };
    Tp = KM6
});
import {
    join as pjB
} from "path";

function trA(A) {
    return (A.match(/\r\n|\r|\n/g) || []).length
}

function ijB(A, Q) {
    if (Q === 0) return `[Pasted text #TextComponent{A}]`;
    return `[Pasted text #TextComponent{A} +TextComponent{Q} lines]`
}

function njB(A) {
    return `[Image #TextComponent{A}]`
}

function ajB(A) {
    let Q = /\[(Pasted text|Image|\.\.\.Truncated text) #(\d+)(?: \+\d+ lines)?(\.)*\]/g;
    return [...A.matchAll(Q)].map((G) => ({
        id: parseInt(G[2] || "0"),
        match: G[0]
    })).filter((G) => G.id > 0)
}

function $M6(A) {
    return JSON.parse(A)
}
async function* erA() {
    for (let B = Yf.length - 1; B >= 0; B--) yield Yf[B];
    let A = pjB(PQ(), "history.jsonl");
    if (!OA().existsSync(A)) return;
    for await (let B of VH0(A)) try {
        yield $M6(B)
    } catch (G) {
        g(`Failed to parse history line: TextComponent{G}`)
    }
}
async function* kd1() {
    let A = pQ(),
        Q = 0;
    for await (let B of erA()) if (B.project === A) {
        if (yield B, Q++, Q >= zM6) break
    }
}
async function sjB() {
    if (Yf.length === 0) return;
    let A;
    try {
        let Q = pjB(PQ(), "history.jsonl"),
            B = OA();
        if (!B.existsSync(Q)) B.writeFileSync(Q, "", {
            encoding: "utf8",
            flush: !0,
            mode: 384
        });
        A = await ljB.lock(Q, {
            stale: 1e4,
            retries: {
                retries: 3,
                minTimeout: 50
            }
        });
        let G = Yf.map((Z) => JSON.stringify(Z) + `
`);
        Yf = [], B.appendFileSync(Q, G.join(""), {
            mode: 384
        })
    } catch (Q) {
        g(`Failed to write prompt history: TextComponent{Q}`)
    } finally {
        if (A) await A()
    }
}
async function rjB(A) {
    if (_d1 || Yf.length === 0) return;
    if (A > 5) return;
    _d1 = !0;
    try {
        await sjB()
    } finally {
        if (_d1 = !1, Yf.length > 0) await new Promise((Q) => setTimeout(Q, 500)), rjB(A + 1)
    }
}
async function wM6(A) {
    let Q = typeof A === "string" ? {
            display: A,
            pastedContents: {}
        } : A,
        B = {};
    if (Q.pastedContents) {
        for (let [Z, I] of Object.entries(Q.pastedContents))
            if (I.type !== "image" && I.content.length <= UM6) B[Number(Z)] = I
    }
    let G = {
        ...Q,
        pastedContents: B,
        timestamp: Date.now(),
        project: pQ(),
        sessionId: G0()
    };
    Yf.push(G), orA = rjB(0)
}

function Jf(A) {
    if (!cjB) cjB = !0, wG(async () => {
        if (orA) await orA;
        if (Yf.length > 0) await sjB()
    });
    wM6(A)
}
var ljB, zM6 = 100,
    UM6 = 1024,
    Yf, _d1 = !1,
    orA = null,
    cjB = !1;
var Pp = lazyLoader(() => {
    hQ();
    o0();
    S0();
    D0();
    XH();
    ljB = esmImport(hKA(), 1);
    Yf = []
});
var yd1, qM6, EU, Ye;
var jp = lazyLoader(() => {
    s5();
    yd1 = esmImport(WE(), 1), qM6 = uQ() !== "windows" || (cs() ? yd1.default.satisfies(process.versions.bun, ">=1.2.23") : yd1.default.satisfies(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0")), EU = !qM6 ? {
        displayText: "alt+m",
        check: (A, Q) => Q.meta && (A === "m" || A === "M")
    } : {
        displayText: "shift+tab",
        check: (A, Q) => Q.tab && Q.shift
    }, Ye = uQ() === "windows" ? {
        displayText: "alt+v",
        check: (A, Q) => Q.meta && (A === "v" || A === "V")
    } : {
        displayText: "ctrl+v",
        check: (A, Q) => Q.ctrl && (A === "v" || A === "V")
    }
});

function ojB(A, Q) {
    switch (Q) {
        case "bash":
            return `!TextComponent{A}`;
        case "memorySelect":
            return `#TextComponent{A}`;
        case "background":
            return `&TextComponent{A}`;
        default:
            return A
    }
}

function Wf(A) {
    if (A.startsWith("!")) return "bash";
    if (A.startsWith("#")) return "memory";
    if (A.startsWith("&") && j8("tengu_web_tasks")) return "background";
    return "prompt"
}

function Je(A) {
    if (Wf(A) === "prompt") return A;
    return A.slice(1)
}

function tjB(A) {
    return A === "!" || A === "#" || j8("tengu_web_tasks") && A === "&"
}
var HGA = lazyLoader(() => {
    O9()
});

function Sp(A) {
    return A.filter((Q) => Q.data?.type !== "hook_progress")
}
var DE = () => ({
    mode: "default",
    additionalWorkingDirectories: new Map,
    alwaysAllowRules: {},
    alwaysDenyRules: {},
    alwaysAskRules: {},
    isBypassPermissionsModeAvailable: !1
});

function CGA(A) {
    let Q = AoA.useCallback((B) => {
        EGA();
        let G = c0();
        A(B, G)
    }, [A]);
    AoA.useEffect(() => uc.subscribe(Q), [Q])
}
var AoA;
var QoA = lazyLoader(() => {
    tzA();
    RB();
    AoA = esmImport(VA(), 1)
});

function GoA(A) {
    let Q = A.toLowerCase();
    return Q === "ultrathink" || Q === "think ultra hard" || Q === "think ultrahard"
}

function e$A(A, Q = !1) {
    let B = Q ? LM6 : NM6;
    return B[A % B.length]
}

function ASB(A, Q) {
    let B = [],
        G = 0;
    for (let Z of Q) {
        if (Z.start > G) B.push({
            text: A.slice(G, Z.start),
            isTrigger: !1,
            start: G
        });
        B.push({
            text: A.slice(Z.start, Z.end),
            isTrigger: !0,
            start: Z.start
        }), G = Z.end
    }
    if (G < A.length) B.push({
        text: A.slice(G),
        isTrigger: !1,
        start: G
    });
    return B
}

function Xf(A, Q) {
    if (process.env.MAX_THINKING_TOKENS) {
        let B = parseInt(process.env.MAX_THINKING_TOKENS, 10);
        if (B > 0) BA("tengu_thinking", {
            provider: getProviderIdentifier(),
            tokenCount: B
        });
        return B
    }
    return Math.max(...A.filter((B) => B.type === "user" && !B.isMeta).map(RM6), Q ?? 0)
}

function OM6(A) {
    return A === "high" ? xd1.ULTRATHINK : 0
}

function RM6(A) {
    if (A.isMeta) return 0;
    if (A.thinkingMetadata) {
        let {
            level: G,
            disabled: Z
        } = A.thinkingMetadata;
        if (Z) return 0;
        let I = OM6(G);
        if (I > 0) BA("tengu_thinking", {
            provider: getProviderIdentifier(),
            tokenCount: I
        });
        return I
    }
    let Q = TM6(A),
        {
            tokens: B
        } = We(Q);
    if (B > 0) BA("tengu_thinking", {
        provider: getProviderIdentifier(),
        tokenCount: B
    });
    return B
}

function TM6(A) {
    if (typeof A.message.content === "string") return A.message.content;
    return A.message.content.map((Q) => Q.type === "text" ? Q.text : "").join("")
}

function We(A) {
    let Q = /\bultrathink\b/i.test(A);
    return {
        tokens: Q ? xd1.ULTRATHINK : xd1.NONE,
        level: Q ? "high" : "none"
    }
}

function ZoA(A) {
    let Q = [],
        B = A.matchAll(MM6);
    for (let G of B)
        if (G.index !== void 0) Q.push({
            word: G[0],
            start: G.index,
            end: G.index + G[0].length
        });
    return Q
}

function IoA() {
    if (process.env.MAX_THINKING_TOKENS) return parseInt(process.env.MAX_THINKING_TOKENS, 10) > 0;
    let Q = c0().alwaysThinkingEnabled;
    if (Q === !0 || Q === !1) return Q;
    if (!getDefaultSonnetModel().includes("claude-sonnet-4-5")) return !1;
    return !0
}
var BoA, ejB, NM6, LM6, xd1, MM6;
var zU = lazyLoader(() => {
    w0();
    dK();
    RB();
    s2();
    BoA = {
        none: "text",
        high: "claude"
    }, ejB = {
        none: "promptBorderShimmer",
        high: "claudeShimmer"
    }, NM6 = ["rainbow_red", "rainbow_orange", "rainbow_yellow", "rainbow_green", "rainbow_blue", "rainbow_indigo", "rainbow_violet"], LM6 = ["rainbow_red_shimmer", "rainbow_orange_shimmer", "rainbow_yellow_shimmer", "rainbow_green_shimmer", "rainbow_blue_shimmer", "rainbow_indigo_shimmer", "rainbow_violet_shimmer"];
    xd1 = {
        ULTRATHINK: 31999,
        NONE: 0
    }, MM6 = /\bultrathink\b/gi
});

function _p() {
    return {
        settings: kp(),
        backgroundTasks: {},
        verbose: !1,
        mainLoopModel: null,
        mainLoopModelForSession: null,
        statusLineText: void 0,
        showExpandedTodos: !1,
        toolPermissionContext: DE(),
        agentDefinitions: {
            activeAgents: [],
            allAgents: []
        },
        fileHistory: {
            snapshots: [],
            trackedFiles: new Set
        },
        mcp: {
            clients: [],
            tools: [],
            commands: [],
            resources: {}
        },
        plugins: {
            enabled: [],
            disabled: [],
            commands: [],
            agents: [],
            errors: [],
            installationStatus: {
                marketplaces: [],
                plugins: []
            }
        },
        todos: {},
        notifications: {
            current: null,
            queue: []
        },
        elicitation: {
            queue: []
        },
        thinkingEnabled: IoA(),
        feedbackSurvey: {
            timeLastShown: null,
            submitCountAtLastAppearance: null
        },
        sessionHooks: {},
        promptSuggestion: {
            text: null,
            shownAt: 0
        },
        queuedCommands: []
    }
}

function N7({
    children: A,
    initialState: Q,
    onChangeAppState: B
}) {
    if (HE.useContext(QSB)) throw Error("AppStateProvider can not be nested within another AppStateProvider");
    let [Z, I] = HE.useState({
        currentState: Q ?? _p(),
        previousState: null
    }), Y = HE.useCallback((W) => {
        I(({
            currentState: X
        }) => {
            let F = {
                currentState: W(X),
                previousState: X
            };
            return B?.({
                newState: F.currentState,
                oldState: F.previousState
            }), F
        })
    }, [B]), J = HE.useMemo(() => {
        let W = [Z.currentState, Y];
        return W.__IS_INITIALIZED__ = !0, W
    }, [Z.currentState, Y]);
    return CGA(HE.useCallback((W, X) => {
        g(`Settings changed from TextComponent{W}, updating AppState`);
        let F = YvA();
        Y((V) => ({
            ...V,
            settings: X,
            toolPermissionContext: GSB(V.toolPermissionContext, F)
        }))
    }, [Y])), HE.default.createElement(QSB.Provider, {
        value: !0
    }, HE.default.createElement(BSB.Provider, {
        value: J
    }, A))
}

function _Q() {
    let A = HE.useContext(BSB);
    if (!A.__IS_INITIALIZED__) throw ReferenceError("useAppState cannot be called outside of an <AppStateProvider />");
    return A
}
var HE, BSB, QSB;
var H9 = lazyLoader(() => {
    QoA();
    aG();
    Gr();
    zU();
    RB();
    D0();
    HE = esmImport(VA(), 1);
    BSB = HE.default.createContext([{}, (A) => A]), QSB = HE.default.createContext(!1)
});

function _Z() {
    let [A, Q] = _Q(), B = AwA.useCallback(() => {
        Q((Z) => {
            let I = PM6(Z.notifications.queue);
            if (Z.notifications.current !== null || !I) return Z;
            return Xe = setTimeout(() => {
                Xe = null, Q((Y) => {
                    if (Y.notifications.current?.key !== I.key) return Y;
                    return {
                        ...Y,
                        notifications: {
                            queue: Y.notifications.queue,
                            current: null
                        }
                    }
                }), B()
            }, I.timeoutMs ?? ZSB), {
                ...Z,
                notifications: {
                    queue: Z.notifications.queue.filter((Y) => Y !== I),
                    current: I
                }
            }
        })
    }, [Q]), G = AwA.useCallback((Z) => {
        if (Z.priority === "immediate") {
            if (Xe) clearTimeout(Xe), Xe = null;
            Xe = setTimeout(() => {
                Xe = null, Q((I) => {
                    if (I.notifications.current?.key !== Z.key) return I;
                    return {
                        ...I,
                        notifications: {
                            queue: I.notifications.queue.filter((Y) => !Z.invalidates?.includes(Y.key)),
                            current: null
                        }
                    }
                }), B()
            }, Z.timeoutMs ?? ZSB), Q((I) => ({
                ...I,
                notifications: {
                    current: Z,
                    queue: [...I.notifications.current ? [I.notifications.current] : [], ...I.notifications.queue].filter((Y) => Y.priority !== "immediate" && !Z.invalidates?.includes(Y.key))
                }
            }));
            return
        }
        Q((I) => {
            if (Z.priority === "immediate") return I;
            let J = !new Set(I.notifications.queue.map((W) => W.key)).has(Z.key) && I.notifications.current?.key !== Z.key;
            return {
                ...I,
                notifications: {
                    current: I.notifications.current,
                    queue: J ? [...I.notifications.queue.filter((W) => W.priority !== "immediate" && !Z.invalidates?.includes(W.key)), Z] : I.notifications.queue
                }
            }
        }), B()
    }, [Q, B]);
    return AwA.useEffect(() => {
        if (A.notifications.queue.length > 0) B()
    }, []), {
        addNotification: G
    }
}

function PM6(A) {
    return A.sort((Q, B) => {
        let G = ISB[Q.priority] ?? 999,
            Z = ISB[B.priority] ?? 999;
        return G - Z
    })[0]
}
var AwA, ZSB = 8000,
    Xe = null,
    ISB;
var UU = lazyLoader(() => {
    H9();
    AwA = esmImport(VA(), 1);
    ISB = {
        immediate: 0,
        high: 1,
        medium: 2,
        low: 3
    }
});

function YSB(A) {
    return function(Q) {
        return (new Map(A).get(Q) ?? (() => {}))(Q)
    }
}

function YoA({
    value: A,
    onChange: Q,
    onSubmit: B,
    onExit: G,
    onExitMessage: Z,
    onHistoryUp: I,
    onHistoryDown: Y,
    onHistoryReset: J,
    mask: W = "",
    multiline: X = !1,
    cursorChar: F,
    invert: V,
    columns: K,
    onImagePaste: D,
    disableCursorMovementForUpDownKeys: H = !1,
    externalOffset: C,
    onOffsetChange: E,
    inputFilter: z
}) {
    let w = C,
        N = E,
        q = q7.fromText(A, K, w),
        {
            addNotification: R
        } = _Z(),
        P = ab((qA) => {
            Z?.(qA, "Ctrl-C")
        }, () => G?.(), () => {
            if (A) Q(""), N(0), J?.()
        }),
        y = ab((qA) => {
            if (!A || !qA) return;
            R({
                key: "escape-again-to-clear",
                text: "Press Escape again to clear",
                priority: "immediate",
                timeoutMs: 1000
            })
        }, () => {
            if (A) {
                if (A.trim() !== "") Jf(A);
                Q(""), N(0), J?.()
            }
        });

    function v() {
        if (A.trim() !== "") Jf(A), J?.();
        return q7.fromText("", K, 0)
    }
    let x = ab((qA) => {
        if (A !== "") return;
        Z?.(qA, "Ctrl-D")
    }, () => {
        if (A !== "") return;
        G?.()
    });

    function p() {
        if (q.text === "") return x(), q;
        return q.del()
    }

    function u() {
        if (!D) return;
        prA().then((qA) => {
            if (qA) D(qA.base64, qA.mediaType);
            else R({
                key: "no-image-in-clipboard",
                text: `No image found in clipboard. Use TextComponent{Ye.displayText} to paste images.`,
                priority: "immediate",
                timeoutMs: 1000
            })
        })
    }

    function o() {
        let {
            cursor: qA,
            killed: DA
        } = q.deleteToLineEnd();
        return OrA(DA, !0), qA
    }

    function l() {
        let {
            cursor: qA,
            killed: DA
        } = q.deleteToLineStart();
        return OrA(DA, !0), qA
    }

    function k() {
        let {
            cursor: qA,
            killed: DA
        } = q.deleteWordBefore();
        return OrA(DA, !0), qA
    }

    function d() {
        let qA = hTB();
        if (qA.length > 0) return q.insert(qA);
        return q
    }
    let QA = YSB([
            ["a", () => q.startOfLine()],
            ["b", () => q.left()],
            ["c", P],
            ["d", p],
            ["e", () => q.endOfLine()],
            ["f", () => q.right()],
            ["h", () => q.backspace()],
            ["k", o],
            ["l", () => v()],
            ["n", () => KA()],
            ["p", () => wA()],
            ["u", l],
            ["w", k],
            ["y", d]
        ]),
        IA = YSB([
            ["b", () => q.prevWord()],
            ["f", () => q.nextWord()],
            ["d", () => q.deleteWordAfter()]
        ]);

    function HA(qA) {
        if (X && q.offset > 0 && q.text[q.offset - 1] === "\\") return djB(), q.backspace().insert(`
`);
        if (qA.meta) return q.insert(`
`);
        B?.(A)
    }

    function wA() {
        if (H) return I?.(), q;
        let qA = q.up();
        if (!qA.equals(q)) return qA;
        if (X) {
            let DA = q.upLogicalLine();
            if (!DA.equals(q)) return DA
        }
        return I?.(), q
    }

    function KA() {
        if (H) return Y?.(), q;
        let qA = q.down();
        if (!qA.equals(q)) return qA;
        if (X) {
            let DA = q.downLogicalLine();
            if (!DA.equals(q)) return DA
        }
        return Y?.(), q
    }

    function SA(qA) {
        switch (!0) {
            case qA.escape:
                return () => {
                    return y(), q
                };
            case (qA.leftArrow && (qA.ctrl || qA.meta || qA.fn)):
                return () => q.prevWord();
            case (qA.rightArrow && (qA.ctrl || qA.meta || qA.fn)):
                return () => q.nextWord();
            case qA.backspace:
                return qA.meta ? k : () => q.backspace();
            case qA.delete:
                return qA.meta ? o : () => q.del();
            case qA.ctrl:
                return QA;
            case qA.home:
                return () => q.startOfLine();
            case qA.end:
                return () => q.endOfLine();
            case qA.pageDown:
                return () => q.endOfLine();
            case qA.pageUp:
                return () => q.startOfLine();
            case qA.meta:
                return IA;
            case qA.return:
                return () => HA(qA);
            case qA.tab:
                return () => q;
            case qA.upArrow:
                return wA;
            case qA.downArrow:
                return KA;
            case qA.leftArrow:
                return () => q.left();
            case qA.rightArrow:
                return () => q.right();
            default:
                return function(DA) {
                    switch (!0) {
                        case (DA === "\x1B[H" || DA === "\x1B[1~"):
                            return q.startOfLine();
                        case (DA === "\x1B[F" || DA === "\x1B[4~"):
                            return q.endOfLine();
                        default:
                            if (q.isAtStart() && tjB(DA)) return q.insert(mY(DA).replace(/\r/g, `
`)).left();
                            return q.insert(mY(DA).replace(/\r/g, `
`))
                    }
                }
        }
    }

    function sA(qA, DA) {
        if (qA.ctrl && (DA === "k" || DA === "u" || DA === "w")) return !0;
        if (qA.meta && (qA.backspace || qA.delete)) return !0;
        return !1
    }

    function NA(qA, DA) {
        if (Ye.check(qA, DA) && D) {
            u(), RrA();
            return
        }
        let yA = z ? z(qA, DA) : qA;
        if (yA === "" && qA !== "") return;
        if (!DA.backspace && !DA.delete && qA.includes("")) {
            let K1 = (qA.match(/\x7f/g) || []).length,
                WA = q;
            for (let XA = 0; XA < K1; XA++) WA = WA.backspace();
            if (!q.equals(WA)) {
                if (q.text !== WA.text) Q(WA.text);
                N(WA.offset)
            }
            RrA();
            return
        }
        if (!sA(DA, yA)) RrA();
        let rA = SA(DA)(yA);
        if (rA) {
            if (!q.equals(rA)) {
                if (q.text !== rA.text) Q(rA.text);
                N(rA.offset)
            }
        }
    }
    return {
        onInput: NA,
        renderedValue: q.render(F, W, V),
        offset: w,
        setOffset: N
    }
}
var vd1 = lazyLoader(() => {
    HT();
    AsA();
    Yd1();
    lrA();
    DGA();
    Pp();
    jp();
    HGA();
    UU()
});
var FSB = moduleWrapper((Fe7, XSB) => {
    var jM6 = "Expected a function",
        JSB = NaN,
        SM6 = "[object Symbol]",
        _M6 = /^\s+|\s+TextComponent/g,
        kM6 = /^[-+]0x[0-9a-f]+TextComponent/i,
        yM6 = /^0b[01]+TextComponent/i,
        xM6 = /^0o[0-7]+TextComponent/i,
        vM6 = parseInt,
        bM6 = typeof global == "object" && global && global.Object === Object && global,
        fM6 = typeof self == "object" && self && self.Object === Object && self,
        hM6 = bM6 || fM6 || Function("return this")(),
        gM6 = Object.prototype,
        uM6 = gM6.toString,
        mM6 = Math.max,
        dM6 = Math.min,
        bd1 = function() {
            return hM6.Date.now()
        };

    function cM6(A, Q, B) {
        var G, Z, I, Y, J, W, X = 0,
            F = !1,
            V = !1,
            K = !0;
        if (typeof A != "function") throw TypeError(jM6);
        if (Q = WSB(Q) || 0, fd1(B)) F = !!B.leading, V = "maxWait" in B, I = V ? mM6(WSB(B.maxWait) || 0, Q) : I, K = "trailing" in B ? !!B.trailing : K;

        function D(P) {
            var y = G,
                v = Z;
            return G = Z = void 0, X = P, Y = A.apply(v, y), Y
        }

        function H(P) {
            return X = P, J = setTimeout(z, Q), F ? D(P) : Y
        }

        function C(P) {
            var y = P - W,
                v = P - X,
                x = Q - y;
            return V ? dM6(x, I - v) : x
        }

        function E(P) {
            var y = P - W,
                v = P - X;
            return W === void 0 || y >= Q || y < 0 || V && v >= I
        }

        function z() {
            var P = bd1();
            if (E(P)) return w(P);
            J = setTimeout(z, C(P))
        }

        function w(P) {
            if (J = void 0, K && G) return D(P);
            return G = Z = void 0, Y
        }

        function N() {
            if (J !== void 0) clearTimeout(J);
            X = 0, G = W = Z = J = void 0
        }

        function q() {
            return J === void 0 ? Y : w(bd1())
        }

        function R() {
            var P = bd1(),
                y = E(P);
            if (G = arguments, Z = this, W = P, y) {
                if (J === void 0) return H(W);
                if (V) return J = setTimeout(z, Q), D(W)
            }
            if (J === void 0) J = setTimeout(z, Q);
            return Y
        }
        return R.cancel = N, R.flush = q, R
    }

    function fd1(A) {
        var Q = typeof A;
        return !!A && (Q == "object" || Q == "function")
    }

    function pM6(A) {
        return !!A && typeof A == "object"
    }

    function lM6(A) {
        return typeof A == "symbol" || pM6(A) && uM6.call(A) == SM6
    }

    function WSB(A) {
        if (typeof A == "number") return A;
        if (lM6(A)) return JSB;
        if (fd1(A)) {
            var Q = typeof A.valueOf == "function" ? A.valueOf() : A;
            A = fd1(Q) ? Q + "" : Q
        }
        if (typeof A != "string") return A === 0 ? A : +A;
        A = A.replace(_M6, "");
        var B = yM6.test(A);
        return B || xM6.test(A) ? vM6(A.slice(2), B ? 2 : 8) : kM6.test(A) ? JSB : +A
    }
    XSB.exports = cM6
});

function dY(A, Q) {
    let B = CE.useRef(A);
    iM6(() => {
        B.current = A
    }, [A]), CE.useEffect(() => {
        if (Q === null) return;
        let G = setInterval(() => {
            B.current()
        }, Q);
        return () => {
            clearInterval(G)
        }
    }, [Q])
}

function nM6(A) {
    let Q = CE.useRef(A);
    Q.current = A, CE.useEffect(() => () => {
        Q.current()
    }, [])
}

function zGA(A, Q = 500, B) {
    let G = CE.useRef();
    nM6(() => {
        if (G.current) G.current.cancel()
    });
    let Z = CE.useMemo(() => {
        let I = hd1.default(A, Q, B),
            Y = (...J) => {
                return I(...J)
            };
        return Y.cancel = () => {
            I.cancel()
        }, Y.isPending = () => {
            return !!G.current
        }, Y.flush = () => {
            return I.flush()
        }, Y
    }, [A, Q, B]);
    return CE.useEffect(() => {
        G.current = hd1.default(A, Q, B)
    }, [A, Q, B]), Z
}
var CE, hd1, iM6;
var $U = lazyLoader(() => {
    CE = esmImport(VA(), 1), hd1 = esmImport(FSB(), 1), iM6 = typeof window < "u" ? CE.useLayoutEffect : CE.useEffect
});

function VSB({
    onPaste: A,
    onInput: Q,
    onImagePaste: B
}) {
    let [G, Z] = wT.default.useState({
        chunks: [],
        timeoutId: null
    }), [I, Y] = wT.default.useState(!1), J = wT.default.useRef(!1), W = wT.default.useRef(!1), X = wT.default.useRef(!0), F = wT.default.useMemo(() => uQ() === "macos", []);
    wT.default.useEffect(() => {
        return () => {
            X.current = !1
        }
    }, []);
    let V = wT.default.useCallback(() => {
            if (!B || !X.current) return;
            prA().then((E) => {
                if (E && X.current) B(E.base64, E.mediaType)
            }).catch((E) => {
                if (X.current) e(E)
            }).finally(() => {
                if (X.current) Y(!1)
            })
        }, [B]),
        K = zGA(V, aM6),
        D = wT.default.useCallback((E) => {
            if (E) clearTimeout(E);
            return setTimeout(() => {
                Z(({
                    chunks: z
                }) => {
                    let w = z.join("").replace(/\[I$/, "").replace(/\[O$/, "");
                    if (B && Ld1(w)) {
                        let N = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(w);
                        return OjB(w).then((q) => {
                            if (q) B(q.base64, q.mediaType);
                            else if (N && F) K();
                            else {
                                if (A) A(w);
                                Y(!1)
                            }
                        }), {
                            chunks: [],
                            timeoutId: null
                        }
                    }
                    if (F && B && w.length === 0) return K(), {
                        chunks: [],
                        timeoutId: null
                    };
                    if (A) A(w);
                    return Y(!1), {
                        chunks: [],
                        timeoutId: null
                    }
                })
            }, sM6)
        }, [K, F, B, A]),
        {
            stdin: H
        } = Bp();
    return wT.default.useEffect(() => {
        if (!H) return;
        let E = (z) => {
            let w = z.toString();
            if (w.includes("\x1B[200~")) Y(!0), J.current = !0, W.current = !1;
            if (w.includes("\x1B[201~")) {
                if (Y(!1), F && J.current && !W.current && B) K();
                J.current = !1, W.current = !1, Z({
                    chunks: [],
                    timeoutId: null
                })
            }
        };
        return H.on("data", E), () => {
            H.off("data", E), Y(!1)
        }
    }, [H, B, K, F]), {
        wrappedOnInput: (E, z) => {
            if (J.current) W.current = !0;
            let w = Ld1(E);
            if (A && (E.length > crA || G.timeoutId || w || I)) {
                Z(({
                    chunks: q,
                    timeoutId: R
                }) => {
                    return {
                        chunks: [...q, E],
                        timeoutId: D(R)
                    }
                });
                return
            }
            if (Q(E, z), E.length > 10) Y(!1)
        },
        pasteState: G,
        isPasting: I
    }
}
var wT, aM6 = 50,
    sM6 = 100;
var KSB = lazyLoader(() => {
    hA();
    $U();
    lrA();
    s5();
    u1();
    wT = esmImport(VA(), 1)
});

function DSB({
    placeholder: A,
    value: Q,
    showCursor: B,
    focus: G,
    terminalFocus: Z = !0
}) {
    let I = void 0;
    if (A) {
        if (I = oA.dim(A), B && G && Z) I = A.length > 0 ? oA.inverse(A[0]) + oA.dim(A.slice(1)) : oA.inverse(" ")
    }
    let Y = Q.length === 0 && Boolean(A);
    return {
        renderedPlaceholder: I,
        showPlaceholder: Y
    }
}
var HSB = lazyLoader(() => {
    J9()
});

function UGA({
    char: A,
    index: Q,
    glimmerIndex: B,
    messageColor: G,
    shimmerColor: Z
}) {
    let I = Q === B,
        Y = Math.abs(Q - B) === 1;
    return gd1.createElement(TextComponent, {
        color: I || Y ? Z : G
    }, A)
}
var gd1;
var JoA = lazyLoader(() => {
    hA();
    gd1 = esmImport(VA(), 1)
});

function QwA(A, Q, B, G) {
    let Z = $GA.useRef(Date.now()),
        [I, Y] = $GA.useState(A === "requesting" ? -1 : 10),
        J = $GA.useMemo(() => {
            if (A === "requesting") return 50;
            return 200
        }, [A]);
    return dY(() => {
        if (B === !1 || G) return;
        let W = Date.now() - Z.current,
            X = Math.floor(W / J),
            F = Q.length,
            V = F + 20;
        if (A === "requesting") {
            let K = X % V - 10;
            Y(K)
        } else {
            let K = F + 10 - X % V;
            Y(K)
        }
    }, J), I
}
var $GA;
var ud1 = lazyLoader(() => {
    $U();
    $GA = esmImport(VA(), 1)
});

function CSB(A, Q) {
    if (Q.length === 0) return [{
        text: A,
        start: 0
    }];
    let B = [...Q].sort((W, X) => {
            if (W.start !== X.start) return W.start - X.start;
            return X.priority - W.priority
        }),
        G = [],
        Z = [];
    for (let W of B)
        if (!Z.some((F) => W.start >= F.start && W.start < F.end || W.end > F.start && W.end <= F.end || W.start <= F.start && W.end >= F.end)) G.push(W), Z.push({
            start: W.start,
            end: W.end
        });
    let I = [],
        Y = 0,
        J = mY(A).length;
    for (let W of G) {
        if (W.start > Y) I.push({
            text: Ot(A, Y, W.start),
            start: Y
        });
        I.push({
            text: Ot(A, W.start, W.end),
            start: W.start,
            highlight: W
        }), Y = W.end
    }
    if (Y < J) I.push({
        text: Ot(A, Y),
        start: Y
    });
    return I
}
var ESB = lazyLoader(() => {
    Mh1();
    HT()
});

function zSB({
    text: A,
    highlights: Q = []
}) {
    let B = CSB(A, Q),
        G = QwA("requesting", A, !0, !1);
    return gH.createElement(gH.Fragment, null, B.map((Z, I) => {
        if (!Z.highlight) return gH.createElement(TextComponent, {
            key: I
        }, Z.text);
        let {
            style: Y
        } = Z.highlight;
        if (Y.type === "rainbow") return Z.text.split("").map((J, W) => {
            let X = Z.start + W,
                F = e$A(W, !1),
                V = e$A(W, !0);
            return gH.createElement(UGA, {
                key: `TextComponent{I}-TextComponent{W}`,
                char: J,
                index: X,
                glimmerIndex: G,
                messageColor: F,
                shimmerColor: V
            })
        });
        else if (Y.type === "shimmer") return Z.text.split("").map((J, W) => {
            let X = Z.start + W;
            return gH.createElement(UGA, {
                key: `TextComponent{I}-TextComponent{W}`,
                char: J,
                index: X,
                glimmerIndex: G,
                messageColor: Y.baseColor,
                shimmerColor: Y.shimmerColor
            })
        });
        else if (Y.type === "solid") return gH.createElement(TextComponent, {
            key: I,
            color: Y.color
        }, Z.text);
        return gH.createElement(TextComponent, {
            key: I
        }, Z.text)
    }))
}
var gH;
var USB = lazyLoader(() => {
    hA();
    JoA();
    ud1();
    zU();
    ESB();
    gH = esmImport(VA(), 1)
});

function WoA({
    inputState: A,
    children: Q,
    terminalFocus: B,
    ...G
}) {
    let {
        onInput: Z,
        renderedValue: I
    } = A, {
        wrappedOnInput: Y,
        isPasting: J
    } = VSB({
        onPaste: G.onPaste,
        onInput: (C, E) => {
            if (J && E.return) return;
            Z(C, E)
        },
        onImagePaste: G.onImagePaste
    }), {
        onIsPastingChange: W
    } = G;
    wGA.default.useEffect(() => {
        if (W) W(J)
    }, [J, W]);
    let {
        showPlaceholder: X,
        renderedPlaceholder: F
    } = DSB({
        placeholder: G.placeholder,
        value: G.value,
        showCursor: G.showCursor,
        focus: G.focus,
        terminalFocus: B
    });
    h1(Y, {
        isActive: G.focus
    });
    let V = G.value && G.value.trim().indexOf(" ") === -1 || G.value && G.value.endsWith(" "),
        K = Boolean(G.argumentHint && G.value && V && G.value.startsWith("/")),
        D = G.showCursor && G.highlights ? G.highlights.filter((C) => G.cursorOffset < C.start || G.cursorOffset >= C.end) : G.highlights,
        H = D && D.length > 0;
    return wGA.default.createElement(j, null, wGA.default.createElement(TextComponent, {
        wrap: "truncate-end",
        dimColor: G.dimColor
    }, X ? F : H ? wGA.default.createElement(zSB, {
        text: I,
        highlights: D
    }) : I, K && wGA.default.createElement(TextComponent, {
        dimColor: !0
    }, G.value?.endsWith(" ") ? "" : " ", G.argumentHint), Q))
}
var wGA;
var md1 = lazyLoader(() => {
    hA();
    KSB();
    HSB();