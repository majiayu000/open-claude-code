/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_020.js
 * 处理时间: 2025-12-09T03:41:37.964Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       (  3x) esmImport(module) - ESM import
 * ZQ       (  2x) execGit(cmd, args) - Execute git command
 * en       (  1x) AGENT_OUTPUT_TOOL = "AgentOutputTool"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 20/29
 * Lines: 406777 - 408275 (1499 lines)
 * Original file: cli.js
 */

        if (!Q) return g(`installed_plugins.json doesn't exist yet at ${A}, returning empty object`), Pg = {
            version: 1,
            plugins: {}
        }, Pg.plugins;
        if (Q.version === 2) {
            let G = RlA.parse(Q.data),
                Z = bT3(G);
            return Pg = {
                version: 1,
                plugins: Z
            }, g(`Loaded ${Object.keys(Z).length} installed plugins from V2 file at ${A}`), Z
        }
        let B = QzA.parse(Q.data);
        return Pg = B, g(`Loaded ${Object.keys(B.plugins).length} installed plugins from ${A} (schema version ${B.version})`), B.plugins
    } catch (Q) {
        let B = Q instanceof Error ? Q.message : String(Q);
        return g(`Failed to load installed_plugins.json: ${B}. Starting with empty state.`, {
            level: "error"
        }), e(Q instanceof Error ? Q : Error(`Failed to load installed_plugins.json: ${B}`)), Pg = {
            version: 1,
            plugins: {}
        }, Pg.plugins
    }
}

function OI1(A) {
    let Q = OA(),
        B = MI1();
    try {
        let G = Bx(PQ(), "plugins");
        if (!Q.existsSync(G)) Q.mkdirSync(G);
        let Z = {
                version: 1,
                plugins: A
            },
            I = JSON.stringify(Z, null, 2);
        Q.writeFileSync(B, I, {
            encoding: "utf-8",
            flush: !0
        }), Pg = Z, g(`Saved ${Object.keys(A).length} installed plugins to ${B} (schema version ${qQA})`)
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G);
        throw e(G instanceof Error ? G : Error(`Failed to save installed_plugins.json: ${Z}`)), G
    }
}

function cW0(A) {
    let Q = {};
    for (let [B, G] of Object.entries(A.plugins)) {
        let Z = klA(B, G.version);
        Q[B] = [{
            scope: "user",
            installPath: Z,
            version: G.version,
            installedAt: G.installedAt,
            lastUpdated: G.lastUpdated,
            gitCommitSha: G.gitCommitSha,
            isLocal: G.isLocal
        }]
    }
    return {
        version: 2,
        plugins: Q
    }
}

function fT3(A) {
    return cW0(A)
}

function NQA() {
    if (M$ !== null) return M$;
    if (j8("tengu_enable_versioned_plugins")) return hT3();
    return gT3()
}

function hT3() {
    let A = dW0();
    try {
        let Q = vT3();
        if (Q) {
            let G = RlA.parse(Q.data);
            return M$ = G, g(`Loaded ${Object.keys(G.plugins).length} installed plugins from V2 file at ${A}`), G
        }
        let B = PjA();
        if (B) {
            let G = QzA.parse(B.data),
                Z = cW0(G);
            return C59(Z), g(`Migrated ${Object.keys(G.plugins).length} plugins from V1 to V2 file`), Z
        }
        return g("Neither V1 nor V2 installed_plugins file exists, returning empty V2 object"), M$ = {
            version: 2,
            plugins: {}
        }, M$
    } catch (Q) {
        let B = Q instanceof Error ? Q.message : String(Q);
        return g(`Failed to load installed_plugins_v2.json: ${B}. Starting with empty state.`, {
            level: "error"
        }), e(Q instanceof Error ? Q : Error(`Failed to load installed_plugins_v2.json: ${B}`)), M$ = {
            version: 2,
            plugins: {}
        }, M$
    }
}

function gT3() {
    let A = MI1();
    try {
        let Q = PjA();
        if (!Q) return g(`installed_plugins.json doesn't exist yet at ${A}, returning empty V2 object`), M$ = {
            version: 2,
            plugins: {}
        }, M$;
        let B = QzA.parse(Q.data),
            G = fT3(B);
        return M$ = G, g(`Loaded ${Object.keys(B.plugins).length} plugins from V1 file and wrapped as V2`), G
    } catch (Q) {
        let B = Q instanceof Error ? Q.message : String(Q);
        return g(`Failed to load installed_plugins.json (V2): ${B}. Starting with empty state.`, {
            level: "error"
        }), e(Q instanceof Error ? Q : Error(`Failed to load installed_plugins.json (V2): ${B}`)), M$ = {
            version: 2,
            plugins: {}
        }, M$
    }
}

function C59(A) {
    let Q = OA(),
        B = dW0();
    try {
        let G = Bx(PQ(), "plugins");
        if (!Q.existsSync(G)) Q.mkdirSync(G);
        let Z = JSON.stringify(A, null, 2);
        Q.writeFileSync(B, Z, {
            encoding: "utf-8",
            flush: !0
        }), M$ = A, g(`Saved ${Object.keys(A.plugins).length} installed plugins to V2 file at ${B}`)
    } catch (G) {
        let Z = G instanceof Error ? G.message : String(G);
        throw e(G instanceof Error ? G : Error(`Failed to save installed_plugins_v2.json: ${Z}`)), G
    }
}

function E59(A) {
    let Q = j8("tengu_enable_versioned_plugins"),
        B = dT3(A);
    if (OI1(B), Q) C59(A);
    M$ = A
}

function uT3(A) {
    let Q = Ec(),
        [B] = A.split("@");
    if (!B) return Q;
    let G = B.replace(/[^a-zA-Z0-9-_]/g, "-");
    return Bx(Q, G)
}

function mT3(A) {
    let [Q, B] = A.split("@");
    if (!Q || !B) return "";
    let G = Bx(PQ(), "plugins", "marketplaces");
    return Bx(G, B, Q)
}

function dT3(A) {
    let Q = {};
    for (let [B, G] of Object.entries(A.plugins)) {
        let Z = G[0];
        if (Z) {
            let I = Z.isLocal ? mT3(B) : uT3(B);
            Q[B] = {
                version: Z.version || "unknown",
                installedAt: Z.installedAt || new Date().toISOString(),
                lastUpdated: Z.lastUpdated,
                installPath: I,
                gitCommitSha: Z.gitCommitSha,
                isLocal: Z.isLocal
            }
        }
    }
    return Q
}

function RI1(A, Q, B) {
    let G = NQA(),
        Z = G.plugins[A];
    if (!Z) return;
    if (G.plugins[A] = Z.filter((I) => !(I.scope === Q && I.projectPath === B)), G.plugins[A].length === 0) delete G.plugins[A];
    E59(G), g(`Removed installation for ${A} at scope ${Q}`)
}

function pW0() {
    if (mW0 === null) mW0 = NQA();
    return mW0
}
async function z59() {
    try {
        await lW0()
    } catch (A) {
        e(A instanceof Error ? A : Error(String(A)))
    }
    if (j8("tengu_enable_versioned_plugins")) {
        let A = pW0();
        g(`Initialized versioned plugins system with ${Object.keys(A.plugins).length} plugins`)
    }
}

function cT3(A) {
    return dXA()[A]
}

function jg(A) {
    return cT3(A) !== void 0
}

function U59(A, Q) {
    let B = dXA(),
        G = A in B;
    B[A] = Q, OI1(B), g(`${G?"Updated":"Added"} installed plugin: ${A}`)
}

function $59(A) {
    let Q = dXA(),
        B = Q[A];
    if (B) delete Q[A], OI1(Q), g(`Removed installed plugin: ${A}`);
    return B
}

function TI1(A) {
    let Q = OA();
    try {
        if (Q.existsSync(A)) {
            Q.rmSync(A, {
                recursive: !0,
                force: !0
            }), g(`Deleted plugin cache at ${A}`);
            let B = Ec();
            if (A.includes("/cache/") && A.startsWith(B)) {
                let G = kT3(A);
                if (Q.existsSync(G) && G !== B && G.startsWith(B)) {
                    if (Q.readdirSync(G).length === 0) Q.rmdirSync(G), g(`Deleted empty plugin directory at ${G}`)
                }
            }
        } else g(`Plugin cache at ${A} doesn't exist, skipping deletion`)
    } catch (B) {
        let G = B instanceof Error ? B.message : String(B);
        throw e(B instanceof Error ? B : Error(`Failed to delete plugin cache: ${G}`)), Error(`Failed to delete plugin cache at ${A}: ${G}`)
    }
}

function pT3(A) {
    if (Object.keys(A).length === 0) return !0;
    let Q = PjA();
    if (!Q) return !1;
    if (Q.version !== qQA) return !1;
    try {
        let G = Q.data?.plugins || {};
        for (let Z of Object.keys(A))
            if (Z.includes("@") && !(Z in G)) return !1
    } catch {
        return !1
    }
    return !0
}

function lT3(A, Q) {
    if (!A.includes("@")) return !1;
    if (A in Q) return g(`Plugin ${A} already in installed_plugins.json, skipping`), !1;
    return !0
}
async function LI1(A) {
    try {
        let Q = await ZQ("git", ["-C", A, "rev-parse", "HEAD"]);
        if (Q.code === 0 && Q.stdout) return Q.stdout.trim();
        return
    } catch (Q) {
        g(`Failed to get git commit SHA from ${A}: ${Q}`);
        return
    }
}

function H59(A, Q) {
    let B = OA(),
        G = Bx(A, ".claude-plugin", "plugin.json");
    if (!B.existsSync(G)) return "unknown";
    try {
        let Z = B.readFileSync(G, {
            encoding: "utf-8"
        });
        return JSON.parse(Z).version || "unknown"
    } catch {
        return g(`Could not read version from manifest for ${Q}`), "unknown"
    }
}
async function lW0() {
    let Q = c0().enabledPlugins || {},
        B = PjA(),
        G = B !== null,
        Z = B?.version ?? 0;
    if (pT3(Q)) return;
    if (!G || Z !== qQA) g(`Schema version mismatch (current: ${Z}, expected: ${qQA}), syncing installed_plugins.json`);
    else g("Syncing installed_plugins.json with enabledPlugins from settings");
    let I = OA(),
        Y = dXA(),
        J = new Date().toISOString(),
        W = 0,
        X = 0;
    for (let [F] of Object.entries(Q)) {
        if (!lT3(F, Y)) {
            X++;
            continue
        }
        let V = F.split("@"),
            K = V[0];
        if (!K || V.length !== 2) {
            g(`Invalid plugin ID format: ${F}, skipping migration`), X++;
            continue
        }
        try {
            let D, H = "unknown",
                C = void 0,
                E = !1;
            try {
                let z = await Cc(F);
                if (!z) {
                    g(`Plugin ${F} not found in any marketplace, skipping`), X++;
                    continue
                }
                let {
                    entry: w,
                    marketplaceInstallLocation: N
                } = z;
                if (typeof w.source === "string") E = !0, D = Bx(N, w.source), H = H59(D, F), C = await LI1(D);
                else {
                    let q = Ec(),
                        R = K.replace(/[^a-zA-Z0-9-_]/g, "-"),
                        P = Bx(q, R);
                    if (!I.existsSync(P)) {
                        g(`External plugin ${F} not in cache, skipping`), X++;
                        continue
                    }
                    D = P, H = H59(P, F), C = await LI1(P)
                }
                if (H === "unknown" && C) H = C.substring(0, 12), g(`Using git SHA as version for ${F}: ${H}`)
            } catch (z) {
                g(`Failed to get plugin info for ${F}: ${z}, skipping`), X++;
                continue
            }
            Y[F] = {
                version: H,
                installedAt: J,
                lastUpdated: J,
                installPath: D,
                gitCommitSha: C,
                isLocal: E
            }, W++, g(`Added ${F} to installed_plugins.json`)
        } catch (D) {
            let H = D instanceof Error ? D.message : String(D);
            g(`Failed to migrate plugin ${F}: ${H}`, {
                level: "warn"
            }), X++
        }
    }
    if (W > 0 || !G || Z !== qQA)
        if (j8("tengu_enable_versioned_plugins")) {
            let V = cW0({
                version: 1,
                plugins: Y
            });
            E59(V), g(`Sync completed (V2): ${W} plugins added to installed_plugins.json, ${X} skipped`)
        } else if (OI1(Y), !G || Z !== qQA) g(`Updated installed_plugins.json to schema version ${qQA} (${W} plugins added, ${X} skipped)`);
    else g(`Sync completed: ${W} plugins added to installed_plugins.json, ${X} skipped`);
    else if (X > 0) g(`Sync completed: All ${X} plugins already in installed_plugins.json`)
}
var yT3 = "installed_plugins.json",
    xT3 = "installed_plugins_v2.json",
    qQA = 1,
    Pg = null,
    M$ = null,
    mW0 = null;
var Ia = L(() => {
    o0();
    D0();
    u1();
    hQ();
    O9();
    ho();
    RB();
    NF();
    I6();
    kH()
});
async function iT3() {
    return "claude-code" in await TZ()
}
async function nT3() {
    let A = await ZQ("rg", ["--files", "--glob", "*.{html,css,htm}", "--max-count=1"], {
        timeout: 5000
    });
    return A.code === 0 && A.stdout.trim().length > 0
}
async function PI1() {
    let A = [...aT3, ...sT3],
        Q = await Promise.all(A.map((B) => B.isRelevant()));
    return A.filter((B, G) => Q[G]).filter((B) => NI1(B.id) >= B.cooldownSessions)
}
var aT3, sT3;
var iW0 = L(() => {
    jQ();
    ED();
    Ia();
    kH();
    I6();
    s2();
    DGA();
    f5();
    yJ();
    s5();
    jp();
    RB();
    uW0();
    iU();
    D0();
    mUA();
    aT3 = [{
        id: "new-user-warmup",
        content: async () => "Start with small features or bug fixes, tell Claude to propose a plan, and verify its suggested edits",
        cooldownSessions: 3,
        async isRelevant() {
            return L1().numStartups < 10
        }
    }, {
        id: "plan-mode-for-complex-tasks",
        content: async () => `Use Plan Mode to prepare for a complex request before making changes. Press ${EU.displayText} twice to enable.`,
        cooldownSessions: 5,
        isRelevant: async () => {
            let A = L1();
            return (A.lastPlanModeUse ? (Date.now() - A.lastPlanModeUse) / 86400000 : 1 / 0) > 7
        }
    }, {
        id: "default-permission-mode-config",
        content: async () => "Use /config to change your default permission mode (including Plan Mode)",
        cooldownSessions: 10,
        isRelevant: async () => {
            try {
                let A = L1(),
                    Q = c0(),
                    B = Boolean(A.lastPlanModeUse),
                    G = Boolean(Q?.permissions?.defaultMode);
                return B && !G
            } catch (A) {
                return g(`Failed to check default-permission-mode-config tip relevance: ${A}`, {
                    level: "warn"
                }), !1
            }
        }
    }, {
        id: "git-worktrees",
        content: async () => "Use git worktrees to run multiple Claude sessions in parallel.",
        cooldownSessions: 10,
        isRelevant: async () => {
            try {
                let A = L1();
                return await zUA() <= 1 && A.numStartups > 50
            } catch (A) {
                return !1
            }
        }
    }, {
        id: "terminal-setup",
        content: async () => m0.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable convenient terminal integration like Option + Enter for new line and more" : "Run /terminal-setup to enable convenient terminal integration like Shift + Enter for new line and more",
        cooldownSessions: 10,
        async isRelevant() {
            let A = L1();
            if (m0.terminal === "Apple_Terminal") return Tp.isEnabled() && !A.optionAsMetaKeyInstalled;
            return Tp.isEnabled() && !A.shiftEnterKeyBindingInstalled
        }
    }, {
        id: "shift-enter",
        content: async () => m0.terminal === "Apple_Terminal" ? "Press Option+Enter to send a multi-line message" : "Press Shift+Enter to send a multi-line message",
        cooldownSessions: 10,
        async isRelevant() {
            let A = L1();
            return Boolean((m0.terminal === "Apple_Terminal" ? A.optionAsMetaKeyInstalled : A.shiftEnterKeyBindingInstalled) && A.numStartups > 3)
        }
    }, {
        id: "shift-enter-setup",
        content: async () => m0.terminal === "Apple_Terminal" ? "Run /terminal-setup to enable Option+Enter for new lines" : "Run /terminal-setup to enable Shift+Enter for new lines",
        cooldownSessions: 10,
        async isRelevant() {
            if (!t$A()) return !1;
            let A = L1();
            return !(m0.terminal === "Apple_Terminal" ? A.optionAsMetaKeyInstalled : A.shiftEnterKeyBindingInstalled)
        }
    }, {
        id: "memory-command",
        content: async () => "Use /memory to view and manage Claude memory",
        cooldownSessions: 15,
        async isRelevant() {
            return L1().memoryUsageCount <= 0
        }
    }, {
        id: "theme-command",
        content: async () => "Use /theme to change the color theme",
        cooldownSessions: 20,
        isRelevant: async () => !0
    }, {
        id: "status-line",
        content: async () => "Use /statusline to set up a custom status line that will display beneath the input box",
        cooldownSessions: 25,
        isRelevant: async () => c0().statusLine === void 0
    }, {
        id: "stickers-command",
        content: async () => "Use /stickers to order Claude Code swag",
        cooldownSessions: 20,
        isRelevant: async () => !0
    }, {
        id: "prompt-queue",
        content: async () => "Hit Enter to queue up additional messages while Claude is working.",
        cooldownSessions: 5,
        async isRelevant() {
            return L1().promptQueueUseCount <= 3
        }
    }, {
        id: "enter-to-steer-in-relatime",
        content: async () => "Send messages to Claude while it works to steer Claude in real-time",
        cooldownSessions: 20,
        isRelevant: async () => !0
    }, {
        id: "todo-list",
        content: async () => "Ask Claude to create a todo list when working on complex tasks to track progress and remain on track",
        cooldownSessions: 20,
        isRelevant: async () => !0
    }, {
        id: "vscode-command-install",
        content: async () => `Open the Command Palette (Cmd+Shift+P) and run "Shell Command: Install '${m0.terminal==="vscode"?"code":m0.terminal}' command in PATH" to enable IDE integration`,
        cooldownSessions: 0,
        async isRelevant() {
            if (!uLA()) return !1;
            if (uQ() !== "macos") return !1;
            switch (m0.terminal) {
                case "vscode":
                    return !z62();
                case "cursor":
                    return !C62();
                case "windsurf":
                    return !E62();
                default:
                    return !1
            }
        }
    }, {
        id: "ide-upsell-external-terminal",
        content: async () => "Connect Claude to your IDE · /ide",
        cooldownSessions: 4,
        async isRelevant() {
            if (_F()) return !1;
            if (qB1().length !== 0) return !1;
            return LB1().length > 0
        }
    }, {
        id: "# for memory",
        content: async () => "Want Claude to remember something? Hit # to add preferences, tools, and instructions to Claude's memory",
        cooldownSessions: 10,
        isRelevant: async () => L1().memoryUsageCount <= 10
    }, {
        id: "install-github-app",
        content: async () => "Run /install-github-app to tag @claude right from your Github issues and PRs",
        cooldownSessions: 10,
        isRelevant: async () => !L1().githubActionSetupCount
    }, {
        id: "permissions",
        content: async () => "Use /permissions to pre-approve and pre-deny bash, edit, and MCP tools",
        cooldownSessions: 10,
        async isRelevant() {
            return L1().numStartups > 10
        }
    }, {
        id: "drag-and-drop-images",
        content: async () => "Did you know you can drag and drop image files into your terminal?",
        cooldownSessions: 10,
        isRelevant: async () => !0
    }, {
        id: "paste-images-mac",
        content: async () => "Paste images into Claude Code using control+v (not cmd+v!)",
        cooldownSessions: 10,
        isRelevant: async () => uQ() === "macos"
    }, {
        id: "double-esc",
        content: async () => "Double-tap esc to rewind the conversation to a previous point in time",
        cooldownSessions: 10,
        isRelevant: async () => !JG()
    }, {
        id: "double-esc-code-restore",
        content: async () => "Double-tap esc to rewind the code and/or conversation to a previous point in time",
        cooldownSessions: 10,
        isRelevant: async () => JG()
    }, {
        id: "continue",
        content: async () => "Run claude --continue or claude --resume to resume a conversation",
        cooldownSessions: 10,
        isRelevant: async () => !0
    }, {
        id: "custom-commands",
        content: async () => "Create custom slash commands by adding .md files to .claude/commands/ in your project or ~/.claude/commands/ for commands that work in any project",
        cooldownSessions: 15,
        async isRelevant() {
            return L1().numStartups > 10
        }
    }, {
        id: "shift-tab",
        content: async () => `Hit ${EU.displayText} to cycle between default mode, auto-accept edit mode, and plan mode`,
        cooldownSessions: 10,
        isRelevant: async () => !0
    }, {
        id: "image-paste",
        content: async () => `Use ${Ye.displayText} to paste images from your clipboard`,
        cooldownSessions: 20,
        isRelevant: async () => !0
    }, {
        id: "tab-toggle-thinking",
        content: async () => "Hit tab to toggle thinking mode on and off",
        cooldownSessions: 10,
        isRelevant: async () => !0
    }, {
        id: "ultrathink-keyword",
        content: async () => "Type 'ultrathink' in your message to enable thinking for just that turn",
        cooldownSessions: 10,
        isRelevant: async () => !0
    }, {
        id: "custom-agents",
        content: async () => "Use /agents to optimize specific tasks. Eg. Software Architect, Code Writer, Code Reviewer",
        cooldownSessions: 15,
        async isRelevant() {
            return L1().numStartups > 5
        }
    }, {
        id: "opusplan-mode-reminder",
        content: async () => `Your default model setting is Opus Plan Mode. Press ${EU.displayText} twice to activate Plan Mode and plan with Claude Opus.`,
        cooldownSessions: 2,
        async isRelevant() {
            let A = L1(),
                B = ot() === "opusplan",
                G = A.lastPlanModeUse ? (Date.now() - A.lastPlanModeUse) / 86400000 : 1 / 0;
            return B && G > 3
        }
    }, {
        id: "frontend-design-plugin",
        content: async (A) => {
            let Q = await iT3(),
                B = tQ("suggestion", A.theme);
            if (!Q) return `Working with HTML/CSS? Add the frontend-design plugin:
${B("/plugin marketplace add anthropics/claude-code")}
${B("/plugin install frontend-design@claude-code-plugins")}`;
            return `Working with HTML/CSS? Install the frontend-design plugin:
${B("/plugin install frontend-design@claude-code-plugins")}`
        },
        cooldownSessions: 3,
        async isRelevant() {
            if (jg("frontend-design@claude-code-plugins")) return !1;
            return nT3()
        }
    }], sT3 = []
});

function rT3(A) {
    if (A.length === 0) return;
    if (A.length === 1) return A[0];
    let Q = A.map((B) => ({
        tip: B,
        sessions: NI1(B.id)
    }));
    return Q.sort((B, G) => G.sessions - B.sessions), Q[0]?.tip
}
async function w59() {
    if (c0().spinnerTipsEnabled === !1) return;
    let A = await PI1();
    if (A.length === 0) return;
    return rT3(A)
}

function q59(A) {
    D59(A.id), BA("tengu_tip_shown", {
        tipIdLength: A.id,
        cooldownSessions: A.cooldownSessions
    })
}
var N59 = L(() => {
    uW0();
    w0();
    jQ();
    RB();
    gXA();
    iW0()
});

function M59() {
    let [A, Q] = _Q(), {
        toolPermissionContext: B
    } = A;
    L59.useEffect(() => {
        nW0(B, Q)
    }, [])
}
var L59, nW0;
var O59 = L(() => {
    o2();
    H9();
    zWA();
    L59 = GA(VA(), 1), nW0 = t1(async (A, Q) => {
        if (!A.isBypassPermissionsModeAvailable) return;
        if (!await aW0()) return;
        Q((G) => {
            return {
                ...G,
                toolPermissionContext: R59(G.toolPermissionContext)
            }
        })
    })
});

function T59(A, Q, B) {
    let G = jI1.useRef(!1);
    jI1.useEffect(() => {
        if (!JG() || G.current) return;
        if (G.current = !0, A) $YA(A, B)
    }, [Q, A, B])
}
var jI1;
var P59 = L(() => {
    iU();
    jI1 = GA(VA(), 1)
});

function j59({
    hostPattern: {
        host: A
    },
    onUserResponse: Q
}) {
    function B(Z) {
        switch (Z) {
            case "yes":
                Q({
                    allow: !0,
                    persistToSettings: !1
                });
                break;
            case "yes-dont-ask-again":
                Q({
                    allow: !0,
                    persistToSettings: !0
                });
                break;
            case "no":
                Q({
                    allow: !1,
                    persistToSettings: !1
                });
                break
        }
    }
    let G = [{
        label: "Yes",
        value: "yes"
    }, {
        label: `Yes, and don't ask again for ${oA.bold(A)}`,
        value: "yes-dont-ask-again"
    }, {
        label: `No, and tell Claude what to do differently ${oA.bold.dim("(esc)")}`,
        value: "no"
    }];
    return nF.createElement(hJ, {
        title: "Network request outside of sandbox"
    }, nF.createElement(j, {
        flexDirection: "column",
        paddingX: 2,
        paddingY: 1
    }, nF.createElement(j, null, nF.createElement($, {
        dimColor: !0
    }, "Host:"), nF.createElement($, null, " ", A)), nF.createElement(j, {
        marginTop: 1
    }, nF.createElement($, null, "Do you want to allow this connection?")), nF.createElement(j, null, nF.createElement(M0, {
        options: G,
        onChange: B,
        onCancel: () => {
            Q({
                allow: !1,
                persistToSettings: !1
            })
        }
    }))))
}
var nF;
var S59 = L(() => {
    hA();
    T5();
    CO();
    J9();
    w0();
    nF = GA(VA(), 1)
});
var oT3, cyZ, SI1 = 604800000,
    _59 = 86400000,
    sW0;
var jjA = L(() => {
    oT3 = Math.pow(10, 8) * 24 * 60 * 60 * 1000, cyZ = -oT3, sW0 = Symbol.for("constructDateFrom")
});

function O$(A, Q) {
    if (typeof A === "function") return A(Q);
    if (A && typeof A === "object" && sW0 in A) return A[sW0](Q);
    if (A instanceof Date) return new A.constructor(Q);
    return new Date(Q)
}
var Ya = L(() => {
    jjA()
});

function nJ(A, Q) {
    return O$(Q || A, A)
}
var oq = L(() => {
    Ya()
});
var k59 = () => {};
var y59 = () => {};
var x59 = () => {};
var v59 = () => {};
var b59 = () => {};
var f59 = () => {};
var h59 = () => {};
var g59 = () => {};
var u59 = () => {};

function Ja() {
    return tT3
}
var tT3;
var SjA = L(() => {
    tT3 = {}
});

function Sg(A, Q) {
    let B = Ja(),
        G = Q?.weekStartsOn ?? Q?.locale?.options?.weekStartsOn ?? B.weekStartsOn ?? B.locale?.options?.weekStartsOn ?? 0,
        Z = nJ(A, Q?.in),
        I = Z.getDay(),
        Y = (I < G ? 7 : 0) + I - G;
    return Z.setDate(Z.getDate() - Y), Z.setHours(0, 0, 0, 0), Z
}
var cXA = L(() => {
    SjA();
    oq()
});

function LQA(A, Q) {
    return Sg(A, {
        ...Q,
        weekStartsOn: 1
    })
}
var _jA = L(() => {
    cXA()
});

function _I1(A, Q) {
    let B = nJ(A, Q?.in),
        G = B.getFullYear(),
        Z = O$(B, 0);
    Z.setFullYear(G + 1, 0, 4), Z.setHours(0, 0, 0, 0);
    let I = LQA(Z),
        Y = O$(B, 0);
    Y.setFullYear(G, 0, 4), Y.setHours(0, 0, 0, 0);
    let J = LQA(Y);
    if (B.getTime() >= I.getTime()) return G + 1;
    else if (B.getTime() >= J.getTime()) return G;
    else return G - 1
}
var kI1 = L(() => {
    Ya();
    _jA();
    oq()
});

function rW0(A) {
    let Q = nJ(A),
        B = new Date(Date.UTC(Q.getFullYear(), Q.getMonth(), Q.getDate(), Q.getHours(), Q.getMinutes(), Q.getSeconds(), Q.getMilliseconds()));
    return B.setUTCFullYear(Q.getFullYear()), +A - +B
}
var m59 = L(() => {
    oq()
});

function d59(A, ...Q) {
    let B = O$.bind(null, A || Q.find((G) => typeof G === "object"));
    return Q.map(B)
}
var c59 = L(() => {
    Ya()
});

function oW0(A, Q) {
    let B = nJ(A, Q?.in);
    return B.setHours(0, 0, 0, 0), B
}
var tW0 = L(() => {
    oq()
});

function p59(A, Q, B) {
    let [G, Z] = d59(B?.in, A, Q), I = oW0(G), Y = oW0(Z), J = +I - rW0(I), W = +Y - rW0(Y);
    return Math.round((J - W) / _59)
}
var eW0 = L(() => {
    m59();
    c59();
    jjA();
    tW0()
});

function l59(A, Q) {
    let B = _I1(A, Q),
        G = O$(Q?.in || A, 0);
    return G.setFullYear(B, 0, 4), G.setHours(0, 0, 0, 0), LQA(G)
}
var AX0 = L(() => {
    Ya();
    kI1();
    _jA()
});
var i59 = () => {};
var n59 = () => {};
var a59 = () => {};
var s59 = () => {};
var r59 = () => {};
var o59 = () => {};
var t59 = () => {};
var e59 = () => {};
var A39 = () => {};
var Q39 = () => {};
var B39 = () => {};
var G39 = () => {};
var Z39 = () => {};
var I39 = () => {};
var Y39 = () => {};
var J39 = () => {};
var W39 = () => {};
var X39 = () => {};

function F39(A) {
    return A instanceof Date || typeof A === "object" && Object.prototype.toString.call(A) === "[object Date]"
}
var QX0 = () => {};

function V39(A) {
    return !(!F39(A) && typeof A !== "number" || isNaN(+nJ(A)))
}
var BX0 = L(() => {
    QX0();
    oq()
});
var K39 = () => {};
var D39 = () => {};
var H39 = () => {};
var C39 = () => {};
var E39 = () => {};
var z39 = () => {};
var U39 = () => {};
var $39 = () => {};
var w39 = () => {};
var q39 = () => {};
var N39 = () => {};
var L39 = () => {};
var M39 = () => {};
var O39 = () => {};
var R39 = () => {};
var T39 = () => {};
var P39 = () => {};
var j39 = () => {};
var S39 = () => {};
var _39 = () => {};
var k39 = () => {};
var y39 = () => {};
var x39 = () => {};
var v39 = () => {};
var b39 = () => {};
var f39 = () => {};
var h39 = () => {};
var g39 = () => {};
var u39 = () => {};
var m39 = () => {};
var d39 = () => {};
var c39 = () => {};
var p39 = () => {};

function l39(A, Q) {
    let B = nJ(A, Q?.in);
    return B.setFullYear(B.getFullYear(), 0, 1), B.setHours(0, 0, 0, 0), B
}
var GX0 = L(() => {
    oq()
});
var i39 = () => {};
var n39 = () => {};
var a39 = () => {};
var s39 = () => {};
var r39 = () => {};
var o39 = () => {};
var t39 = () => {};
var e39 = () => {};
var A79 = () => {};
var Q79 = () => {};
var B79 = () => {};
var G79 = () => {};
var Z79 = () => {};
var eT3, I79 = (A, Q, B) => {
    let G, Z = eT3[A];
    if (typeof Z === "string") G = Z;
    else if (Q === 1) G = Z.one;
    else G = Z.other.replace("{{count}}", Q.toString());
    if (B?.addSuffix)
        if (B.comparison && B.comparison > 0) return "in " + G;
        else return G + " ago";
    return G
};
var Y79 = L(() => {
    eT3 = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    }
});

function yI1(A) {
    return (Q = {}) => {
        let B = Q.width ? String(Q.width) : A.defaultWidth;
        return A.formats[B] || A.formats[A.defaultWidth]
    }
}
var AP3, QP3, BP3, J79;
var W79 = L(() => {
    AP3 = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    }, QP3 = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    }, BP3 = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    }, J79 = {
        date: yI1({
            formats: AP3,
            defaultWidth: "full"
        }),
        time: yI1({
            formats: QP3,
            defaultWidth: "full"
        }),
        dateTime: yI1({
            formats: BP3,
            defaultWidth: "full"
        })
    }
});
var GP3, X79 = (A, Q, B, G) => GP3[A];
var F79 = L(() => {
    GP3 = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    }
});

function pXA(A) {
    return (Q, B) => {
        let G = B?.context ? String(B.context) : "standalone",
            Z;
        if (G === "formatting" && A.formattingValues) {
            let Y = A.defaultFormattingWidth || A.defaultWidth,
                J = B?.width ? String(B.width) : Y;
            Z = A.formattingValues[J] || A.formattingValues[Y]
        } else {
            let Y = A.defaultWidth,
                J = B?.width ? String(B.width) : A.defaultWidth;
            Z = A.values[J] || A.values[Y]
        }
        let I = A.argumentCallback ? A.argumentCallback(Q) : Q;
        return Z[I]
    }
}
var ZP3, IP3, YP3, JP3, WP3, XP3, FP3 = (A, Q) => {
        let B = Number(A),
            G = B % 100;
        if (G > 20 || G < 10) switch (G % 10) {
            case 1:
                return B + "st";
            case 2:
                return B + "nd";
            case 3:
                return B + "rd"
        }
        return B + "th"
    },
    V79;
var K79 = L(() => {
    ZP3 = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    }, IP3 = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    }, YP3 = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }, JP3 = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }, WP3 = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    }, XP3 = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    }, V79 = {
        ordinalNumber: FP3,
        era: pXA({
            values: ZP3,
            defaultWidth: "wide"
        }),
        quarter: pXA({
            values: IP3,
            defaultWidth: "wide",
            argumentCallback: (A) => A - 1
        }),
        month: pXA({
            values: YP3,
            defaultWidth: "wide"
        }),
        day: pXA({
            values: JP3,
            defaultWidth: "wide"
        }),
        dayPeriod: pXA({
            values: WP3,
            defaultWidth: "wide",
            formattingValues: XP3,
            defaultFormattingWidth: "wide"
        })
    }
});

function lXA(A) {
    return (Q, B = {}) => {
        let G = B.width,
            Z = G && A.matchPatterns[G] || A.matchPatterns[A.defaultMatchWidth],
            I = Q.match(Z);
        if (!I) return null;
        let Y = I[0],
            J = G && A.parsePatterns[G] || A.parsePatterns[A.defaultParseWidth],
            W = Array.isArray(J) ? KP3(J, (V) => V.test(Y)) : VP3(J, (V) => V.test(Y)),
            X;
        X = A.valueCallback ? A.valueCallback(W) : W, X = B.valueCallback ? B.valueCallback(X) : X;
        let F = Q.slice(Y.length);
        return {
            value: X,
            rest: F
        }
    }
}

function VP3(A, Q) {
    for (let B in A)
        if (Object.prototype.hasOwnProperty.call(A, B) && Q(A[B])) return B;
    return
}

function KP3(A, Q) {
    for (let B = 0; B < A.length; B++)
        if (Q(A[B])) return B;
    return
}

function D79(A) {
    return (Q, B = {}) => {
        let G = Q.match(A.matchPattern);
        if (!G) return null;
        let Z = G[0],
            I = Q.match(A.parsePattern);
        if (!I) return null;
        let Y = A.valueCallback ? A.valueCallback(I[0]) : I[0];
        Y = B.valueCallback ? B.valueCallback(Y) : Y;
        let J = Q.slice(Z.length);
        return {
            value: Y,
            rest: J
        }
    }
}
var DP3, HP3, CP3, EP3, zP3, UP3, $P3, wP3, qP3, NP3, LP3, MP3, H79;
var C79 = L(() => {
    DP3 = /^(\d+)(th|st|nd|rd)?/i, HP3 = /\d+/i, CP3 = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    }, EP3 = {
        any: [/^b/i, /^(a|c)/i]
    }, zP3 = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    }, UP3 = {
        any: [/1/i, /2/i, /3/i, /4/i]
    }, $P3 = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    }, wP3 = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    }, qP3 = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    }, NP3 = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    }, LP3 = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    }, MP3 = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    }, H79 = {
        ordinalNumber: D79({
            matchPattern: DP3,
            parsePattern: HP3,
            valueCallback: (A) => parseInt(A, 10)
        }),
        era: lXA({
            matchPatterns: CP3,
            defaultMatchWidth: "wide",
            parsePatterns: EP3,
            defaultParseWidth: "any"
        }),
        quarter: lXA({
            matchPatterns: zP3,
            defaultMatchWidth: "wide",
            parsePatterns: UP3,
            defaultParseWidth: "any",
            valueCallback: (A) => A + 1
        }),
        month: lXA({
            matchPatterns: $P3,
            defaultMatchWidth: "wide",
            parsePatterns: wP3,
            defaultParseWidth: "any"
        }),
        day: lXA({
            matchPatterns: qP3,
            defaultMatchWidth: "wide",
            parsePatterns: NP3,
            defaultParseWidth: "any"
        }),
        dayPeriod: lXA({
            matchPatterns: LP3,
            defaultMatchWidth: "any",
            parsePatterns: MP3,
            defaultParseWidth: "any"
        })
    }
});
var ZX0;
var E79 = L(() => {
    Y79();
    W79();
    F79();
    K79();
    C79();
    ZX0 = {
        code: "en-US",
        formatDistance: I79,
        formatLong: J79,
        formatRelative: X79,
        localize: V79,
        match: H79,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    }
});
var z79 = L(() => {
    E79()
});

function U79(A, Q) {
    let B = nJ(A, Q?.in);
    return p59(B, l39(B)) + 1
}
var IX0 = L(() => {
    eW0();
    GX0();
    oq()
});

function $79(A, Q) {
    let B = nJ(A, Q?.in),
        G = +LQA(B) - +l59(B);
    return Math.round(G / SI1) + 1
}
var YX0 = L(() => {
    jjA();
    _jA();
    AX0();
    oq()
});

function xI1(A, Q) {
    let B = nJ(A, Q?.in),
        G = B.getFullYear(),
        Z = Ja(),
        I = Q?.firstWeekContainsDate ?? Q?.locale?.options?.firstWeekContainsDate ?? Z.firstWeekContainsDate ?? Z.locale?.options?.firstWeekContainsDate ?? 1,
        Y = O$(Q?.in || A, 0);
    Y.setFullYear(G + 1, 0, I), Y.setHours(0, 0, 0, 0);
    let J = Sg(Y, Q),
        W = O$(Q?.in || A, 0);
    W.setFullYear(G, 0, I), W.setHours(0, 0, 0, 0);
    let X = Sg(W, Q);
    if (+B >= +J) return G + 1;
    else if (+B >= +X) return G;
    else return G - 1
}
var vI1 = L(() => {
    SjA();
    Ya();
    cXA();
    oq()
});

function w79(A, Q) {
    let B = Ja(),
        G = Q?.firstWeekContainsDate ?? Q?.locale?.options?.firstWeekContainsDate ?? B.firstWeekContainsDate ?? B.locale?.options?.firstWeekContainsDate ?? 1,
        Z = xI1(A, Q),
        I = O$(Q?.in || A, 0);
    return I.setFullYear(Z, 0, G), I.setHours(0, 0, 0, 0), Sg(I, Q)
}
var JX0 = L(() => {
    SjA();
    Ya();
    vI1();
    cXA()
});

function q79(A, Q) {
    let B = nJ(A, Q?.in),
        G = +Sg(B, Q) - +w79(B, Q);
    return Math.round(G / SI1) + 1
}