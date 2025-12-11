/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: prompts_003.js
 * 处理时间: 2025-12-09T03:41:38.195Z
 * 变量映射: 46 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 3/10
 * Lines: 207640 - 209139 (1500 lines)
 * Original file: cli.js
 */

    USB();
    wGA = esmImport(VA(), 1)
});

function cd1(A) {
    let Q = A.toString();
    if (Q.includes("\x1B[I")) dd1 = !0, Fe.forEach((B) => B(!0));
    if (Q.includes("\x1B[O")) dd1 = !1, Fe.forEach((B) => B(!1))
}

function $SB() {
    let A = () => {
        if (Fe.size === 0) return;
        process.stdin.off("data", cd1), process.stdout.write("\x1B[?1004l")
    };
    process.on("exit", A)
}

function XoA() {
    let [A, Q] = Ff.useState(dd1), [B, G] = Ff.useState(!1), Z = Ff.useCallback((Y) => {
        Q(Y), G(!1)
    }, []);
    Ff.useEffect(() => {
        if (!process.stdout.isTTY) return;
        if (Fe.add(Z), Fe.size === 1) process.stdout.write("\x1B[?1004h"), process.stdin.on("data", cd1);
        return () => {
            if (Fe.delete(Z), Fe.size === 0) process.stdin.off("data", cd1), process.stdout.write("\x1B[?1004l")
        }
    }, [Z]), Ff.useEffect(() => {
        if (!A && B) BA("tengu_typing_without_terminal_focus", {})
    }, [A, B]);
    let I = Ff.useCallback((Y, J) => {
        if (Y === "\x1B[I" || Y === "\x1B[O" || Y === "[I" || Y === "[O") return "";
        if ((Y || J) && !A) G(!0);
        return Y
    }, [A]);
    return {
        isFocused: A || B,
        filterFocusSequences: I
    }
}
var Ff, dd1 = !0,
    Fe;
var FoA = lazyLoader(() => {
    w0();
    Ff = esmImport(VA(), 1), Fe = new Set
});

function s4(A) {
    let [Q] = $B(), {
        isFocused: B,
        filterFocusSequences: G
    } = XoA(), Z = YoA({
        value: A.value,
        onChange: A.onChange,
        onSubmit: A.onSubmit,
        onExit: A.onExit,
        onExitMessage: A.onExitMessage,
        onHistoryReset: A.onHistoryReset,
        onHistoryUp: A.onHistoryUp,
        onHistoryDown: A.onHistoryDown,
        focus: A.focus,
        mask: A.mask,
        multiline: A.multiline,
        cursorChar: A.showCursor ? " " : "",
        highlightPastedText: A.highlightPastedText,
        invert: B ? oA.inverse : (I) => I,
        themeText: tQ("text", Q),
        columns: A.columns,
        onImagePaste: A.onImagePaste,
        disableCursorMovementForUpDownKeys: A.disableCursorMovementForUpDownKeys,
        externalOffset: A.cursorOffset,
        onOffsetChange: A.onChangeCursorOffset,
        inputFilter: G
    });
    return wSB.default.createElement(WoA, {
        inputState: Z,
        terminalFocus: B,
        highlights: A.highlights,
        ...A
    })
}
var wSB;
var QY = lazyLoader(() => {
    J9();
    vd1();
    md1();
    FoA();
    hA();
    wSB = esmImport(VA(), 1)
});

function qGA({
    option: A,
    isFocused: Q,
    isSelected: B,
    shouldShowDownArrow: G,
    shouldShowUpArrow: Z,
    maxIndexWidth: I,
    index: Y,
    inputValue: J,
    onInputChange: W,
    onSubmit: X,
    onExit: F,
    layout: V,
    children: K
}) {
    let [D, H] = Aq.useState(0), C = V === "expanded" ? I + 3 : I + 4;
    return Aq.default.createElement(j, {
        flexDirection: "column",
        flexShrink: 0
    }, Aq.default.createElement(wp, {
        isFocused: Q,
        isSelected: B,
        shouldShowDownArrow: G,
        shouldShowUpArrow: Z
    }, Aq.default.createElement(j, {
        flexDirection: "row",
        flexShrink: V === "compact" ? 0 : void 0
    }, Aq.default.createElement(TextComponent, {
        color: B ? "success" : Q ? "suggestion" : void 0
    }, oA.dim(`TextComponent{Y}.`.padEnd(I + 1)), " "), K, Q ? Aq.default.createElement(s4, {
        value: J,
        onChange: (E) => {
            W(E), A.onChange(E)
        },
        onSubmit: X,
        onExit: F,
        placeholder: A.placeholder || A.label,
        focus: !0,
        showCursor: !0,
        cursorOffset: D,
        onChangeCursorOffset: H,
        columns: 80
    }) : Aq.default.createElement(j, {
        width: 80
    }, Aq.default.createElement(TextComponent, {
        color: B ? "success" : Q ? "suggestion" : J ? void 0 : "inactive"
    }, J || A.placeholder || A.label)))), A.description && Aq.default.createElement(j, {
        paddingLeft: C
    }, Aq.default.createElement(TextComponent, {
        dimColor: A.dimDescription !== !1,
        color: B ? "success" : Q ? "suggestion" : void 0
    }, A.description)), V === "expanded" && Aq.default.createElement(TextComponent, null, " "))
}
var Aq;
var pd1 = lazyLoader(() => {
    hA();
    $rA();
    QY();
    J9();
    Aq = esmImport(VA(), 1)
});

function M0({
    isDisabled: A = !1,
    hideIndexes: Q = !1,
    visibleOptionCount: B = 5,
    highlightText: G,
    options: Z,
    defaultValue: I,
    onCancel: Y,
    onChange: J,
    onFocus: W,
    focusValue: X,
    layout: F = "compact",
    disableSelection: V = !1
}) {
    let [K, D] = I3.useState(() => {
        let q = new Map;
        return Z.forEach((R) => {
            if (R.type === "input" && R.initialValue) q.set(R.value, R.initialValue)
        }), q
    }), H = xTB({
        visibleOptionCount: B,
        options: Z,
        defaultValue: I,
        onChange: J,
        onCancel: Y,
        onFocus: W,
        focusValue: X
    });
    bTB({
        isDisabled: A,
        disableSelection: V || (Q ? "numeric" : !1),
        state: H,
        options: Z,
        isMultiSelect: !1
    });
    let C = {
        container: () => ({
            flexDirection: "column"
        }),
        highlightedText: () => ({
            bold: !0
        })
    };
    if (F === "expanded") {
        let q = H.options.length.toString().length;
        return I3.default.createElement(j, {
            ...C.container()
        }, H.visibleOptions.map((R, P) => {
            let y = R.index === H.visibleFromIndex,
                v = R.index === H.visibleToIndex - 1,
                x = H.visibleToIndex < Z.length,
                p = H.visibleFromIndex > 0,
                u = H.visibleFromIndex + P + 1,
                o = !A && H.focusedValue === R.value,
                l = H.value === R.value;
            if (R.type === "input") {
                let HA = K.get(R.value) || "";
                return I3.default.createElement(qGA, {
                    key: String(R.value),
                    option: R,
                    isFocused: o,
                    isSelected: l,
                    shouldShowDownArrow: x && v,
                    shouldShowUpArrow: p && y,
                    maxIndexWidth: q,
                    index: u,
                    inputValue: HA,
                    onInputChange: (wA) => {
                        D((KA) => {
                            let SA = new Map(KA);
                            return SA.set(R.value, wA), SA
                        })
                    },
                    onSubmit: (wA) => {
                        if (wA.trim()) J?.(R.value)
                    },
                    onExit: Y,
                    layout: "expanded"
                })
            }
            let k = R.label,
                d = k;
            if (G && k.includes(G)) {
                let HA = k.indexOf(G);
                d = I3.default.createElement(I3.default.Fragment, null, k.slice(0, HA), I3.default.createElement(TextComponent, {
                    ...C.highlightedText()
                }, G), k.slice(HA + G.length))
            }
            let QA = R.disabled === !0,
                IA = QA ? void 0 : l ? "success" : o ? "suggestion" : void 0;
            return I3.default.createElement(j, {
                key: String(R.value),
                flexDirection: "column",
                flexShrink: 0
            }, I3.default.createElement(wp, {
                isFocused: o,
                isSelected: l,
                shouldShowDownArrow: x && v,
                shouldShowUpArrow: p && y
            }, I3.default.createElement(TextComponent, {
                dimColor: QA,
                color: IA
            }, d)), R.description && I3.default.createElement(j, {
                paddingLeft: 2
            }, I3.default.createElement(TextComponent, {
                dimColor: QA || R.dimDescription !== !1,
                color: IA
            }, R.description)), I3.default.createElement(TextComponent, null, " "))
        }))
    }
    if (F === "compact-vertical") {
        let q = Q ? 0 : H.options.length.toString().length;
        return I3.default.createElement(j, {
            ...C.container()
        }, H.visibleOptions.map((R, P) => {
            let y = R.index === H.visibleFromIndex,
                v = R.index === H.visibleToIndex - 1,
                x = H.visibleToIndex < Z.length,
                p = H.visibleFromIndex > 0,
                u = H.visibleFromIndex + P + 1,
                o = !A && H.focusedValue === R.value,
                l = H.value === R.value;
            if (R.type === "input") {
                let IA = K.get(R.value) || "";
                return I3.default.createElement(qGA, {
                    key: String(R.value),
                    option: R,
                    isFocused: o,
                    isSelected: l,
                    shouldShowDownArrow: x && v,
                    shouldShowUpArrow: p && y,
                    maxIndexWidth: q,
                    index: u,
                    inputValue: IA,
                    onInputChange: (HA) => {
                        D((wA) => {
                            let KA = new Map(wA);
                            return KA.set(R.value, HA), KA
                        })
                    },
                    onSubmit: (HA) => {
                        if (HA.trim()) J?.(R.value)
                    },
                    onExit: Y,
                    layout: "compact"
                })
            }
            let k = R.label,
                d = k;
            if (G && k.includes(G)) {
                let IA = k.indexOf(G);
                d = I3.default.createElement(I3.default.Fragment, null, k.slice(0, IA), I3.default.createElement(TextComponent, {
                    ...C.highlightedText()
                }, G), k.slice(IA + G.length))
            }
            let QA = R.disabled === !0;
            return I3.default.createElement(j, {
                key: String(R.value),
                flexDirection: "column",
                flexShrink: 0
            }, I3.default.createElement(wp, {
                isFocused: o,
                isSelected: l,
                shouldShowDownArrow: x && v,
                shouldShowUpArrow: p && y
            }, I3.default.createElement(TextComponent, {
                dimColor: QA,
                color: QA ? void 0 : l ? "success" : o ? "suggestion" : void 0
            }, !Q && oA.dim(`TextComponent{u}.`.padEnd(q + 2)), d)), R.description && I3.default.createElement(j, {
                paddingLeft: Q ? 2 : q + 4
            }, I3.default.createElement(TextComponent, {
                dimColor: QA || R.dimDescription !== !1,
                color: QA ? void 0 : l ? "success" : o ? "suggestion" : void 0
            }, R.description)))
        }))
    }
    let E = Q ? 0 : H.options.length.toString().length,
        z = Math.max(...H.options.map((q) => q.label.length)),
        w = Q ? 0 : 2,
        N = E + z + w;
    return I3.default.createElement(j, {
        ...C.container()
    }, H.visibleOptions.map((q, R) => {
        if (q.type === "input") {
            let QA = K.get(q.value) || "",
                IA = q.index === H.visibleFromIndex,
                HA = q.index === H.visibleToIndex - 1,
                wA = H.visibleToIndex < Z.length,
                KA = H.visibleFromIndex > 0,
                SA = H.visibleFromIndex + R + 1,
                sA = !A && H.focusedValue === q.value,
                NA = H.value === q.value;
            return I3.default.createElement(qGA, {
                key: String(q.value),
                option: q,
                isFocused: sA,
                isSelected: NA,
                shouldShowDownArrow: wA && HA,
                shouldShowUpArrow: KA && IA,
                maxIndexWidth: E,
                index: SA,
                inputValue: QA,
                onInputChange: (qA) => {
                    D((DA) => {
                        let yA = new Map(DA);
                        return yA.set(q.value, qA), yA
                    })
                },
                onSubmit: (qA) => {
                    if (qA.trim()) J?.(q.value)
                },
                onExit: Y,
                layout: "compact"
            })
        }
        let P = q.label,
            y = P;
        if (G && P.includes(G)) {
            let QA = P.indexOf(G);
            y = I3.default.createElement(I3.default.Fragment, null, P.slice(0, QA), I3.default.createElement(TextComponent, {
                ...C.highlightedText()
            }, G), P.slice(QA + G.length))
        }
        let v = q.index === H.visibleFromIndex,
            x = q.index === H.visibleToIndex - 1,
            p = H.visibleToIndex < Z.length,
            u = H.visibleFromIndex > 0,
            o = H.visibleFromIndex + R + 1,
            l = !A && H.focusedValue === q.value,
            k = H.value === q.value,
            d = q.disabled === !0;
        return I3.default.createElement(wp, {
            key: String(q.value),
            isFocused: l,
            isSelected: k,
            shouldShowDownArrow: p && x,
            shouldShowUpArrow: u && v
        }, I3.default.createElement(j, {
            flexDirection: "row",
            flexShrink: 0,
            width: q.description ? N : void 0
        }, I3.default.createElement(TextComponent, {
            dimColor: d,
            color: d ? void 0 : k ? "success" : l ? "suggestion" : void 0
        }, !Q && oA.dim(`TextComponent{o}.`.padEnd(E + 2)), y)), q.description && I3.default.createElement(j, {
            flexShrink: 99,
            marginLeft: 2
        }, I3.default.createElement(TextComponent, {
            wrap: "wrap-trim",
            dimColor: d || q.dimDescription !== !1,
            color: d ? void 0 : k ? "success" : l ? "suggestion" : void 0
        }, q.description)))
    }))
}
var I3;
var T5 = lazyLoader(() => {
    hA();
    $rA();
    vTB();
    fTB();
    J9();
    pd1();
    I3 = esmImport(VA(), 1)
});
var qSB = "https://claude.com/claude-code";

function VoA() {
    let A = process.env.BASH_DEFAULT_TIMEOUT_MS;
    if (A) {
        let Q = parseInt(A, 10);
        if (!isNaN(Q) && Q > 0) return Q
    }
    return 120000
}

/* getReadToolDescription = getReadToolDescription() - Read tool description */
/* Signature: () => string */
function getReadToolDescription() {
    let A = process.env.BASH_MAX_TIMEOUT_MS;
    if (A) {
        let Q = parseInt(A, 10);
        if (!isNaN(Q) && Q > 0) return Math.max(Q, VoA())
    }
    return Math.max(600000, VoA())
}

/* isClaudeCodeRemote = isClaudeCodeRemote() - Check remote */
/* Signature: () => boolean */
function isClaudeCodeRemote() {
    return parseBoolean(process.env.ENABLE_EXPERIMENTAL_MCP_CLI)
}

function NGA() {
    return isClaudeCodeRemote() && !Nj(process.env.ENABLE_MCP_CLI_ENDPOINT)
}

function Ve(A) {
    let Q = A.match(/^mcp-cli\s+(call|read)\s+([a-zA-Z0-9_-]+)\/([a-zA-Z0-9_-]+)(?:\s+([\s\S]+))?TextComponent/);
    if (!Q) return null;
    let [, B, G, Z, I = ""] = Q;
    if (!B || !G || !Z) return null;
    return {
        command: B,
        server: G,
        tool: Z,
        toolName: Z,
        args: I,
        fullCommand: A
    }
}

function ld1(A) {
    let Q = FU(A);
    if (!Q || !Q.toolName) return null;
    return `TextComponent{Q.serverName}/TextComponent{Q.toolName}`
}
var EE = lazyLoader(() => {
    hQ();
    xX()
});

/* getMaxOutputLength = getMaxOutputLength() - Returns 30000 characters */
function getMaxOutputLength() {
    let A = a_A.validate(process.env.BASH_MAX_OUTPUT_LENGTH);
    if (A.status === "capped") g(`BASH_MAX_OUTPUT_LENGTH TextComponent{A.message}`);
    return A.effective
}

/* getDefaultTimeout = getDefaultTimeout() - Returns 120000ms (2 minutes) */
function getDefaultTimeout() {
    return VoA()
}

/* getMaxTimeout = getMaxTimeout() - Returns 600000ms (10 minutes) */
function getMaxTimeout() {
    return getReadToolDescription()
}

/* getGitConfig = getGitConfig() - Git commit/pr config object */
function getGitConfig() {
    if (!(((c0() || {}).includeCoAuthoredBy ?? !0) && BkA() !== "remote")) return {
        commit: "",
        pr: ""
    };
    let B = `\uD83E\uDD16 Generated with [Claude Code](TextComponent{qSB})`;
    return {
        commit: `TextComponent{B}

   Co-Authored-By: Claude <noreply@anthropic.com>`,
        pr: B
    }
}

/* getSandboxHint = getSandboxHint() - Returns sandbox usage hint */
function getSandboxHint() {
    if (!lQ.isSandboxingEnabled()) return "";
    let A = lQ.getFsReadConfig(),
        Q = lQ.getFsWriteConfig(),
        B = lQ.getNetworkRestrictionConfig(),
        G = lQ.getAllowUnixSockets(),
        Z = lQ.getIgnoreViolations(),
        I = lQ.areUnsandboxedCommandsAllowed(),
        Y = {
            read: A,
            write: Q
        },
        J = {
            ...B?.allowedHosts && {
                allowedHosts: B.allowedHosts
            },
            ...B?.deniedHosts && {
                deniedHosts: B.deniedHosts
            },
            ...G && {
                allowUnixSockets: G
            }
        },
        W = [];
    if (Object.keys(Y).length > 0) W.push(`    - Filesystem: TextComponent{JSON.stringify(Y,null,2).split(`
`).join(`
      `)}`);
    if (Object.keys(J).length > 0) W.push(`    - Network: TextComponent{JSON.stringify(J,null,2).split(`
`).join(`
      `)}`);
    if (Z) W.push(`    - Ignored violations: TextComponent{JSON.stringify(Z,null,2).split(`
`).join(`
      `)}`);
    let X = isClaudeCodeRemote() ? "    - EXCEPTION: `mcp-cli` commands must always be called with `dangerouslyDisableSandbox: true` as they do not work properly in sandboxed mode\n" : "",
        F = I ? `  - CRITICAL: Commands run in sandbox mode by default - do NOT set \`dangerouslyDisableSandbox\`
    - Even if you have recently run commands with \`dangerouslyDisableSandbox: true\`, you MUST NOT continue that pattern
    - VERY IMPORTANT: Do NOT learn from or repeat the pattern of overriding sandbox - each command should run sandboxed by default
TextComponent{X}    - Set \`dangerouslyDisableSandbox: true\` if:
      1. The user *explicitly* asks to bypass sandbox, OR
      2. A command just failed and you see evidence of sandbox restrictions causing the failure
    - When analyzing failures:
      - Commands can fail for many reasons unrelated to the sandbox (missing files, wrong arguments, network issues, etc.)
      - Evidence of sandbox-caused failures includes:
        - "Operation not permitted" errors for file/network operations
        - Access denied to specific paths outside allowed directories
        - Network connection failures to non-whitelisted hosts
        - Unix socket connection errors
      - Sandbox violation logs can be noisy, but clear permission errors are strong indicators
    - When you see evidence of sandbox-caused failure:
      - IMMEDIATELY retry with \`dangerouslyDisableSandbox: true\` (don't ask, just do it)
      - Briefly explain what sandbox restriction likely caused the failure
      - Mention: "Use \`/sandbox\` to manage restrictions"
      - This will prompt the user for permission
    - Example of normal usage: { "command": "ls", "description": "List files" }
    - Example of override: { "command": "my-tool", "description": "Run my-tool", "dangerouslyDisableSandbox": true }
    - DO NOT suggest adding sensitive paths like ~/.bashrc, ~/.zshrc, ~/.ssh/*, or credential files to the allowlist` : "  - CRITICAL: All commands MUST run in sandbox mode - the `dangerouslyDisableSandbox` parameter is disabled by policy\n    - Commands cannot run outside the sandbox under any circumstances\n    - If a command fails due to sandbox restrictions, work with the user to adjust sandbox settings instead";
    return `- Commands run in a sandbox by default with the following restrictions:
TextComponent{W.join(`
`)}
TextComponent{F}
  - IMPORTANT: For temporary files, use \`/tmp/claude/\` as your temporary directory
    - The TMPDIR environment variable is automatically set to \`/tmp/claude\` when running in sandbox mode
    - Do NOT use \`/tmp\` directly - use \`/tmp/claude/\` or rely on TMPDIR instead
    - Most programs that respect TMPDIR will automatically use \`/tmp/claude/\``
}

/* getBashToolDescription = getBashToolDescription() - Bash tool description */
/* Signature: () => string */
function getBashToolDescription() {
    return `Executes a given bash command in a persistent shell session with optional timeout, ensuring proper handling and security measures.

IMPORTANT: This tool is for terminal operations like git, npm, docker, etc. DO NOT use it for file operations (reading, writing, editing, searching, finding files) - use the specialized tools for this instead.

Before executing the command, please follow these steps:

1. Directory Verification:
   - If the command will create new directories or files, first use \`ls\` to verify the parent directory exists and is the correct location
   - For example, before running "mkdir foo/bar", first use \`ls foo\` to check that "foo" exists and is the intended parent directory

2. Command Execution:
   - Always quote file paths that contain spaces with double quotes (e.g., cd "path with spaces/file.txt")
   - Examples of proper quoting:
     - cd "/Users/name/My Documents" (correct)
     - cd /Users/name/My Documents (incorrect - will fail)
     - python "/path/with spaces/script.py" (correct)
     - python /path/with spaces/script.py (incorrect - will fail)
   - After ensuring proper quoting, execute the command.
   - Capture the output of the command.

Usage notes:
  - The command argument is required.
  - You can specify an optional timeout in milliseconds (up to TextComponent{getMaxTimeout()}ms / TextComponent{getMaxTimeout()/60000} minutes). If not specified, commands will timeout after TextComponent{getDefaultTimeout()}ms (TextComponent{getDefaultTimeout()/60000} minutes).
  - It is very helpful if you write a clear, concise description of what this command does in 5-10 words.
  - If the output exceeds TextComponent{getMaxOutputLength()} characters, output will be truncated before being returned to you.
  - You can use the \`run_in_background\` parameter to run the command in the background, which allows you to continue working while the command runs. You can monitor the output using the TextComponent{BASH_TOOL_NAME} tool as it becomes available. You do not need to use '&' at the end of the command when using this parameter.
  TextComponent{getSandboxHint()}
  - Avoid using Bash with the \`find\`, \`grep\`, \`cat\`, \`head\`, \`tail\`, \`sed\`, \`awk\`, or \`echo\` commands, unless explicitly instructed or when these commands are truly necessary for the task. Instead, always prefer using the dedicated tools for these commands:
    - File search: Use TextComponent{GLOB_TOOL_NAME} (NOT find or ls)
    - Content search: Use TextComponent{GREP_TOOL_NAME} (NOT grep or rg)
    - Read files: Use TextComponent{READ_TOOL_NAME} (NOT cat/head/tail)
    - Edit files: Use TextComponent{EDIT_TOOL_NAME} (NOT sed/awk)
    - Write files: Use TextComponent{WRITE_TOOL_NAME} (NOT echo >/cat <<EOF)
    - Communication: Output text directly (NOT echo/printf)
  - When issuing multiple commands:
    - If the commands are independent and can run in parallel, make multiple TextComponent{BASH_TOOL_NAME} tool calls in a single message. For example, if you need to run "git status" and "git diff", send a single message with two TextComponent{BASH_TOOL_NAME} tool calls in parallel.
    - If the commands depend on each other and must run sequentially, use a single TextComponent{BASH_TOOL_NAME} call with '&&' to chain them together (e.g., \`git add . && git commit -m "message" && git push\`). For instance, if one operation must complete before another starts (like mkdir before cp, Write before Bash for git operations, or git add before git commit), run these operations sequentially instead.
    - Use ';' only when you need to run commands sequentially but don't care if earlier commands fail
    - DO NOT use newlines to separate commands (newlines are ok in quoted strings)
  - Try to maintain your current working directory throughout the session by using absolute paths and avoiding usage of \`cd\`. You may use \`cd\` if the User explicitly requests it.
    <good-example>
    pytest /foo/bar/tests
    </good-example>
    <bad-example>
    cd /foo/bar && pytest tests
    </bad-example>

TextComponent{getGitCommitInstructions()}`
}

/* getGitCommitInstructions = getGitCommitInstructions() - Git commit instructions */
function getGitCommitInstructions() {
    let {
        commit: Q,
        pr: B
    } = getGitConfig();
    return `# Committing changes with git

Only create commits when requested by the user. If unclear, ask first. When the user asks you to create a new git commit, follow these steps carefully:

Git Safety Protocol:
- NEVER update the git config
- NEVER run destructive/irreversible git commands (like push --force, hard reset, etc) unless the user explicitly requests them 
- NEVER skip hooks (--no-verify, --no-gpg-sign, etc) unless the user explicitly requests it
- NEVER run force push to main/master, warn the user if they request it
- Avoid git commit --amend.  ONLY use --amend when either (1) user explicitly requested amend OR (2) adding edits from pre-commit hook (additional instructions below) 
- Before amending: ALWAYS check authorship (git log -1 --format='%an %ae')
- NEVER commit changes unless the user explicitly asks you to. It is VERY IMPORTANT to only commit when explicitly asked, otherwise the user will feel that you are being too proactive.

1. You can call multiple tools in a single response. When multiple independent pieces of information are requested and all commands are likely to succeed, run multiple tool calls in parallel for optimal performance. run the following bash commands in parallel, each using the TextComponent{BASH_TOOL_NAME} tool:
  - Run a git status command to see all untracked files.
  - Run a git diff command to see both staged and unstaged changes that will be committed.
  - Run a git log command to see recent commit messages, so that you can follow this repository's commit message style.
2. Analyze all staged changes (both previously staged and newly added) and draft a commit message:
  - Summarize the nature of the changes (eg. new feature, enhancement to an existing feature, bug fix, refactoring, test, docs, etc.). Ensure the message accurately reflects the changes and their purpose (i.e. "add" means a wholly new feature, "update" means an enhancement to an existing feature, "fix" means a bug fix, etc.).
  - Do not commit files that likely contain secrets (.env, credentials.json, etc). Warn the user if they specifically request to commit those files
  - Draft a concise (1-2 sentences) commit message that focuses on the "why" rather than the "what"
  - Ensure it accurately reflects the changes and their purpose
3. You can call multiple tools in a single response. When multiple independent pieces of information are requested and all commands are likely to succeed, run multiple tool calls in parallel for optimal performance. run the following commands:
   - Add relevant untracked files to the staging area.
   - Create the commit with a message${Q?` ending with:
   TextComponent{Q}`:"."}
   - Run git status after the commit completes to verify success.
   Note: git status depends on the commit completing, so run it sequentially after the commit.
4. If the commit fails due to pre-commit hook changes, retry ONCE. If it succeeds but files were modified by the hook, verify it's safe to amend:
   - Check HEAD commit: git log -1 --format='[%h] (%an <%ae>) %s'. VERIFY it matches your commit
   - Check not pushed: git status shows "Your branch is ahead"
   - If both true: amend your commit. Otherwise: create NEW commit (never amend other developers' commits)

Important notes:
- NEVER run additional commands to read or explore code, besides git bash commands
- NEVER use the TextComponent{TODO_READ_TOOL.name} or TextComponent{TASK_TOOL_NAME} tools
- DO NOT push to the remote repository unless the user explicitly asks you to do so
- IMPORTANT: Never use git commands with the -i flag (like git rebase -i or git add -i) since they require interactive input which is not supported.
- If there are no changes to commit (i.e., no untracked files and no modifications), do not create an empty commit
- In order to ensure good formatting, ALWAYS pass the commit message via a HEREDOC, a la this example:
<example>
git commit -m "TextComponent(cat <<'EOF'
   Commit message here.TextComponent{Q?`

   TextComponent{Q}`:""}
   EOF
   )"
</example>

# Creating pull requests
Use the gh command via the Bash tool for ALL GitHub-related tasks including working with issues, pull requests, checks, and releases. If given a Github URL use the gh command to get the information needed.

IMPORTANT: When the user asks you to create a pull request, follow these steps carefully:

1. You can call multiple tools in a single response. When multiple independent pieces of information are requested and all commands are likely to succeed, run multiple tool calls in parallel for optimal performance. run the following bash commands in parallel using the TextComponent{BASH_TOOL_NAME} tool, in order to understand the current state of the branch since it diverged from the main branch:
   - Run a git status command to see all untracked files
   - Run a git diff command to see both staged and unstaged changes that will be committed
   - Check if the current branch tracks a remote branch and is up to date with the remote, so you know if you need to push to the remote
   - Run a git log command and \`git diff [base-branch]...HEAD\` to understand the full commit history for the current branch (from the time it diverged from the base branch)
2. Analyze all changes that will be included in the pull request, making sure to look at all relevant commits (NOT just the latest commit, but ALL commits that will be included in the pull request!!!), and draft a pull request summary
3. You can call multiple tools in a single response. When multiple independent pieces of information are requested and all commands are likely to succeed, run multiple tool calls in parallel for optimal performance. run the following commands in parallel:
   - Create new branch if needed
   - Push to remote with -u flag if needed
   - Create PR using gh pr create with the format below. Use a HEREDOC to pass the body to ensure correct formatting.
<example>
gh pr create --title "the pr title" --body "TextComponent(cat <<'EOF'
## Summary
<1-3 bullet points>

## Test plan
[Bulleted markdown checklist of TODOs for testing the pull request...]TextComponent{B?`

TextComponent{B}`:""}
EOF
)"
</example>

Important:
- DO NOT use the TextComponent{TODO_READ_TOOL.name} or TextComponent{TASK_TOOL_NAME} tools
- Return the PR URL when you're done, so the user can see it

# Other common operations
- View comments on a Github PR: gh api repos/foo/bar/pulls/123/comments`
}
var MGA = lazyLoader(() => {
    noOpFunction();
    RB();
    xV();
    L_();
    Ht();
    D0();
    r_A();
    S0();
    MJ();
    EE()
});

/* hasHeredoc = hasHeredoc(cmd) - Check heredoc */
/* Signature: (cmd: string) => boolean */
function hasHeredoc(A) {
    if (/\d\s*<<\s*\d/.test(A) || /\[\[\s*\d+\s*<<\s*\d+\s*\]\]/.test(A) || /\TextComponent\(\(.*<<.*\)\)/.test(A)) return !1;
    return /<<-?\s*(?:(['"]?)(\w+)\1|\\(\w+))/.test(A)
}

/* hasMultilineString = hasMultilineString(cmd) - Check multiline */
/* Signature: (cmd: string) => boolean */
function hasMultilineString(A) {
    let Q = /'(?:[^'\\]|\\.)*\n(?:[^'\\]|\\.)*'/,
        B = /"(?:[^"\\]|\\.)*\n(?:[^"\\]|\\.)*"/;
    return Q.test(A) || B.test(A)
}

/* wrapBashCommand = wrapBashCommand(cmd) - Wrap command */
/* Signature: (cmd: string, addDevNull?: boolean) => string */
function wrapBashCommand(A, Q = !0) {
    if (hasHeredoc(A) || hasMultilineString(A)) {
        let G = `'TextComponent{A.replace(/'/g,`'"'"'`)}'`;
        if (hasHeredoc(A)) return G;
        return Q ? `TextComponent{G} < /dev/null` : G
    }
    if (Q) return shellEscape([A, "<", "/dev/null"]);
    return shellEscape([A])
}

/* hasInputRedirect = hasInputRedirect(cmd) - Check redirect */
/* Signature: (cmd: string) => boolean */
function hasInputRedirect(A) {
    return /(?:^|[\s;&|])<(?![<(])\s*\S+/.test(A)
}

/* shouldAddDevNull = shouldAddDevNull(cmd) - Check /dev/null need */
/* Signature: (cmd: string) => boolean */
function shouldAddDevNull(A) {
    if (hasHeredoc(A)) return !1;
    if (hasInputRedirect(A)) return !1;
    return !0
}
/* bashCommandHelpers = bashCommandHelpers loader */
var bashCommandHelpers = lazyLoader(() => {
    KH()
});

/* addDevNullToCommand = addDevNullToCommand(cmd) - Add /dev/null */
/* Signature: (cmd: string) => string */
function addDevNullToCommand(A) {
    if (A.includes("`")) return shellEscape([A, "<", "/dev/null"]);
    let Q = tokenize(A);
    if (!Q.success) return shellEscape([A, "<", "/dev/null"]);
    let B = Q.tokens,
        G = findPipeIndex(B);
    if (G <= 0) return shellEscape([A, "<", "/dev/null"]);
    let Z = [...extractTokensRange(B, 0, G), "< /dev/null", ...extractTokensRange(B, G, B.length)];
    return shellEscape([Z.join(" ")])
}

/* findPipeIndex = findPipeIndex(tokens) - Find pipe */
function findPipeIndex(A) {
    for (let Q = 0; Q < A.length; Q++) {
        let B = A[Q];
        if (isOperator(B, "|")) return Q
    }
    return -1
}

/* extractTokensRange = extractTokensRange() - Extract tokens */
function extractTokensRange(A, Q, B) {
    let G = [],
        Z = !1;
    for (let I = Q; I < B; I++) {
        let Y = A[I];
        if (typeof Y === "string" && /^[012]TextComponent/.test(Y) && I + 2 < B && isOperator(A[I + 1])) {
            let J = A[I + 1],
                W = A[I + 2];
            if (J.op === ">&" && typeof W === "string" && /^[012]TextComponent/.test(W)) {
                G.push(`TextComponent{Y}>&TextComponent{W}`), I += 2;
                continue
            }
            if (J.op === ">" && W === "/dev/null") {
                G.push(`TextComponent{Y}>/dev/null`), I += 2;
                continue
            }
            if (J.op === ">" && typeof W === "string" && W.startsWith("&")) {
                let X = W.slice(1);
                if (/^[012]TextComponent/.test(X)) {
                    G.push(`TextComponent{Y}>&TextComponent{X}`), I += 2;
                    continue
                }
            }
        }
        if (typeof Y === "string")
            if (!Z && isEnvAssignment(Y)) {
                let W = Y.indexOf("="),
                    X = Y.slice(0, W),
                    F = Y.slice(W + 1),
                    V = shellEscape([F]);
                G.push(`TextComponent{X}=TextComponent{V}`)
            } else Z = !0, G.push(shellEscape([Y]));
        else if (isOperator(Y)) {
            if (Y.op === "glob" && "pattern" in Y) G.push(Y.pattern);
            else if (G.push(Y.op), isCommandSeparator(Y.op)) Z = !1
        }
    }
    return G
}

/* isEnvAssignment = isEnvAssignment(token) - Check env assign */
function isEnvAssignment(A) {
    return /^[A-Za-z_][A-Za-z0-9_]*=/.test(A)
}

/* isCommandSeparator = isCommandSeparator(op) - Check separator */
function isCommandSeparator(A) {
    return A === "&&" || A === "||" || A === ";"
}

/* isOperator = isOperator(token, op) - Check operator */
/* Signature: (token, op?) => boolean */
function isOperator(A, Q) {
    if (!A || typeof A !== "object" || !("op" in A)) return !1;
    return Q ? A.op === Q : !0
}
var jSB = lazyLoader(() => {
    KH()
});
import {
    existsSync as fsExistsSync,
    statSync as fsStatSync,
    mkdirSync as fsMkdirSync,
    realpathSync as fsRealpathSync
} from "node:fs";
import {
    execSync as execSync,
    execFile as execFile
} from "node:child_process";
import {
    join as pathJoin
} from "node:path";
import * as DoA from "node:os";

/* getRipgrepCommand = getRipgrepCommand() - Get rg command */
function getRipgrepCommand() {
    let A = getRipgrepConfig(),
        Q = shellEscape([A.rgPath]),
        B = A.rgArgs.map((G) => shellEscape([G]));
    return A.rgArgs.length > 0 ? `TextComponent{Q} TextComponent{B.join(" ")}` : Q
}

/* getShellRcFile = getShellRcFile() - Get .bashrc/.zshrc */
function getShellRcFile(A) {
    let Q = A.includes("zsh") ? ".zshrc" : A.includes("bash") ? ".bashrc" : ".profile";
    return pathJoin(DoA.homedir(), Q)
}

/* getShellSnapshotScript = getShellSnapshotScript() */
function getShellSnapshotScript(A) {
    let Q = A.endsWith(".zshrc"),
        B = "";
    if (Q) B += `
      echo "# Functions" >> "$SNAPSHOT_FILE"

      # Force autoload all functions first
      typeset -f > /dev/null 2>&1

      # Now get user function names - filter system ones and write directly to file
      typeset +f | grep -vE '^(_|__)' | while read func; do
        typeset -f "$func" >> "$SNAPSHOT_FILE"
      done
    `;
    else B += `
      echo "# Functions" >> "$SNAPSHOT_FILE"

      # Force autoload all functions first
      declare -f > /dev/null 2>&1

      # Now get user function names - filter system ones and give the rest to eval in b64 encoding
      declare -F | cut -d' ' -f3 | grep -vE '^(_|__)' | while read func; do
        # Encode the function to base64, preserving all special characters
        encoded_func=TextComponent(declare -f "$func" | base64 )
        # Write the function definition to the snapshot
        echo "eval TextComponent{ad1}"TextComponent{ad1}TextComponent(echo '$encoded_func' | base64 -d)TextComponent{ad1}" > /dev/null 2>&1" >> "$SNAPSHOT_FILE"
      done
    `;
    if (Q) B += `
      echo "# Shell Options" >> "$SNAPSHOT_FILE"
      setopt | sed 's/^/setopt /' | head -n 1000 >> "$SNAPSHOT_FILE"
    `;
    else B += `
      echo "# Shell Options" >> "$SNAPSHOT_FILE"
      shopt -p | head -n 1000 >> "$SNAPSHOT_FILE"
      set -o | grep "on" | awk '{print "set -o " $1}' | head -n 1000 >> "$SNAPSHOT_FILE"
      echo "shopt -s expand_aliases" >> "$SNAPSHOT_FILE"
    `;
    return B += `
      echo "# Aliases" >> "$SNAPSHOT_FILE"
      # Filter out winpty aliases on Windows to avoid "stdin is not a tty" errors
      # Git Bash automatically creates aliases like "alias node='winpty node.exe'" for
      # programs that need Win32 Console in mintty, but winpty fails when there's no TTY
      if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        alias | grep -v "='winpty " | sed 's/^alias //g' | sed 's/^/alias -- /' | head -n 1000 >> "$SNAPSHOT_FILE"
      else
        alias | sed 's/^alias //g' | sed 's/^/alias -- /' | head -n 1000 >> "$SNAPSHOT_FILE"
      fi
  `, B
}

function VO6() {
    if (!isClaudeCodeRemote()) return null;
    try {
        let A = HJ() ? process.execPath : process.argv[1];
        if (!A) return null;
        try {
            A = fsRealpathSync(A)
        } catch {}
        if (uQ() === "windows") A = pj(A);
        return {
            cliPath: A,
            args: ["--mcp-cli"]
        }
    } catch (A) {
        return e(A instanceof Error ? A : Error(String(A))), null
    }
}

function KO6() {
    let A = process.env.PATH;
    if (uQ() === "windows") try {
        A = execSync("echo $PATH", {
            encoding: "utf8"
        }).trim()
    } catch {}
    let Q = getRipgrepCommand(),
        B = VO6(),
        G = "";
    if (G += `
      # Check for rg availability
      echo "# Check for rg availability" >> "$SNAPSHOT_FILE"
      echo "if ! command -v rg >/dev/null 2>&1; then" >> "$SNAPSHOT_FILE"
      echo '  alias rg='"'TextComponent{Q.replace(/'/g,"'\\''")}'" >> "$SNAPSHOT_FILE"
      echo "fi" >> "$SNAPSHOT_FILE"
  `, B) {
        let Z = shellEscape([B.cliPath]),
            I = B.args.map((J) => shellEscape([J])),
            Y = `TextComponent{Z} TextComponent{I.join(" ")}`;
        G += `

      # Check for mcp-cli availability
      echo "# Check for mcp-cli availability" >> "$SNAPSHOT_FILE"
      echo "if ! command -v mcp-cli >/dev/null 2>&1; then" >> "$SNAPSHOT_FILE"
      echo '  alias mcp-cli='"'TextComponent{Y.replace(/'/g,"'\\''")}'" >> "$SNAPSHOT_FILE"
      echo "fi" >> "$SNAPSHOT_FILE"
    `
    }
    return G += `

      # Add PATH to the file
      echo "export PATH=TextComponent{shellEscape([A||""])}" >> "$SNAPSHOT_FILE"
  `, G
}

function DO6(A, Q, B) {
    let G = getShellRcFile(A),
        Z = G.endsWith(".zshrc"),
        I = B ? getShellSnapshotScript(G) : !Z ? 'echo "shopt -s expand_aliases" >> "$SNAPSHOT_FILE"' : "",
        Y = KO6();
    return `SNAPSHOT_FILE=TextComponent{shellEscape([Q])}
      TextComponent{B?`source "TextComponent{G}" < /dev/null`:"# No user config file to source"}

      # First, create/clear the snapshot file
      echo "# Snapshot file" >| "$SNAPSHOT_FILE"

      # When this file is sourced, we first unalias to avoid conflicts
      # This is necessary because aliases get "frozen" inside function definitions at definition time,
      # which can cause unexpected behavior when functions use commands that conflict with aliases
      echo "# Unset all aliases to avoid conflicts with functions" >> "$SNAPSHOT_FILE"
      echo "unalias -a 2>/dev/null || true" >> "$SNAPSHOT_FILE"

      TextComponent{I}

      TextComponent{Y}

      # Exit silently on success, only report errors
      if [ ! -f "$SNAPSHOT_FILE" ]; then
        echo "Error: Snapshot file was not created at $SNAPSHOT_FILE" >&2
        exit 1
      fi
    `
}
var ad1 = "\\",
    SSB = 1e4,
    _SB = async (A) => {
        let Q = A.includes("zsh") ? "zsh" : A.includes("bash") ? "bash" : "sh";
        return g(`Creating shell snapshot for TextComponent{Q} (TextComponent{A})`), new Promise(async (B) => {
            try {
                let G = getShellRcFile(A);
                g(`Looking for shell config file: TextComponent{G}`);
                let Z = fsExistsSync(G);
                if (!Z) g(`Shell config file not found: TextComponent{G}, creating snapshot with Claude Code defaults only`);
                let I = Date.now(),
                    Y = Math.random().toString(36).substring(2, 8),
                    J = pathJoin(PQ(), "shell-snapshots");
                g(`Snapshots directory: TextComponent{J}`);
                let W = pathJoin(J, `snapshot-TextComponent{Q}-TextComponent{I}-TextComponent{Y}.sh`);
                fsMkdirSync(J, {
                    recursive: !0
                });
                let X = DO6(A, W, Z);
                g(`Creating snapshot at: TextComponent{W}`), g(`Shell binary exists: TextComponent{fsExistsSync(A)}`), g(`Execution timeout: TextComponent{SSB}ms`), execFile(A, ["-c", "-l", X], {
                    env: {
                        ...process.env.CLAUDE_CODE_DONT_INHERIT_ENV ? {} : process.env,
                        SHELL: A,
                        GIT_EDITOR: "true",
                        CLAUDECODE: "1"
                    },
                    timeout: SSB,
                    maxBuffer: 1048576,
                    encoding: "utf8"
                }, async (F, V, K) => {
                    if (F) {
                        let D = F;
                        if (g(`Shell snapshot creation failed: TextComponent{F.message}`), g("Error details:"), g(`  - Error code: TextComponent{D?.code}`), g(`  - Error signal: TextComponent{D?.signal}`), g(`  - Error killed: TextComponent{D?.killed}`), g(`  - Shell path: TextComponent{A}`), g(`  - Config file: TextComponent{getShellRcFile(A)}`), g(`  - Config file exists: TextComponent{Z}`), g(`  - Working directory: TextComponent{H0()}`), g(`  - Claude home: TextComponent{PQ()}`), g(`Full snapshot script:
TextComponent{X}`), V) g(`stdout output (TextComponent{V.length} chars):
TextComponent{V}`);
                        else g("No stdout output captured");
                        if (K) g(`stderr output (TextComponent{K.length} chars): TextComponent{K}`);
                        else g("No stderr output captured");
                        e(Error(`Failed to create shell snapshot: TextComponent{F.message}`));
                        let H = D?.signal ? DoA.constants.signals[D.signal] : void 0;
                        BA("tengu_shell_snapshot_failed", {
                            stderr_length: K?.length || 0,
                            has_error_code: !!D?.code,
                            error_signal_number: H,
                            error_killed: D?.killed
                        }), B(void 0)
                    } else if (fsExistsSync(W)) {
                        let D = fsStatSync(W).size;
                        g(`Shell snapshot created successfully (TextComponent{D} bytes)`), wG(async () => {
                            try {
                                if (fsExistsSync(W)) OA().unlinkSync(W), g(`Cleaned up session snapshot: TextComponent{W}`)
                            } catch (H) {
                                g(`Error cleaning up session snapshot: TextComponent{H}`)
                            }
                        }), B(W)
                    } else {
                        g(`Shell snapshot file not found after creation: TextComponent{W}`), g(`Checking if parent directory still exists: TextComponent{J}`);
                        let D = fsExistsSync(J);
                        if (g(`Parent directory exists: TextComponent{D}`), D) try {
                            let H = OA().readdirSync(J);
                            g(`Directory contains TextComponent{H.length} files`)
                        } catch (H) {
                            g(`Could not read directory contents: TextComponent{H}`)
                        }
                        BA("tengu_shell_unknown_error", {}), B(void 0)
                    }
                })
            } catch (G) {
                if (g(`Unexpected error during snapshot creation: TextComponent{G}`), G instanceof Error) g(`Error stack trace: TextComponent{G.stack}`);
                e(G instanceof Error ? G : Error(String(G))), BA("tengu_shell_snapshot_error", {}), B(void 0)
            }
        })
    };
var kSB = lazyLoader(() => {
    KH();
    u1();
    w0();
    hQ();
    XH();
    o0();
    s5();
    D0();
    cj();
    R2();
    L9A();
    EE()
});
import {
    constants as HO6,
    readFileSync as CO6,
    existsSync as EO6
} from "node:fs";
import {
    execSync as xSB,
    spawn as zO6
} from "node:child_process";
import {
    isAbsolute as UO6,
    resolve as $O6
} from "node:path";
import * as vSB from "node:os";
import {
    accessSync as wO6
} from "fs";

function ySB(A) {
    try {
        return wO6(A, HO6.X_OK), !0
    } catch (Q) {
        try {
            return xSB(`TextComponent{A} --version`, {
                timeout: 1000,
                stdio: "ignore"
            }), !0
        } catch {
            return !1
        }
    }
}

function NO6(A) {
    if (A.includes("zsh") || A.includes("bash")) return "{ shopt -u extglob || setopt NO_EXTENDED_GLOB; } 2>/dev/null || true";
    return null
}

function LO6() {
    let A = (F) => {
            try {
                return xSB(`which TextComponent{F}`, {
                    stdio: ["ignore", "pipe", "ignore"]
                }).toString().trim()
            } catch {
                return null
            }
        },
        Q = process.env.SHELL,
        B = Q && (Q.includes("bash") || Q.includes("zsh")),
        G = Q?.includes("bash"),
        Z = A("zsh"),
        I = A("bash"),
        Y = ["/bin", "/usr/bin", "/usr/local/bin", "/opt/homebrew/bin"],
        W = (G ? ["bash", "zsh"] : ["zsh", "bash"]).flatMap((F) => Y.map((V) => `TextComponent{V}/TextComponent{F}`));
    if (G) {
        if (I) W.unshift(I);
        if (Z) W.push(Z)
    } else {
        if (Z) W.unshift(Z);
        if (I) W.push(I)
    }
    if (B && ySB(Q)) W.unshift(Q);
    let X = W.find((F) => F && ySB(F));
    if (!X) {
        let F = "No suitable shell found. Claude CLI requires a Posix shell environment. Please ensure you have a valid shell installed and the SHELL environment variable set.";
        throw e(Error(F)), Error(F)
    }
    return X
}
async function MO6() {
    let A = LO6(),
        Q;
    try {
        Q = await _SB(A)
    } catch (B) {
        g(`Failed to create shell snapshot: TextComponent{B}`), Q = void 0
    }
    return {
        binShell: A,
        snapshotFilePath: Q
    }
}
async function HoA(A, Q, B, G, Z, I, Y, J) {
    let W = B || qO6,
        {
            binShell: X,
            snapshotFilePath: F
        } = await GwA();
    if (G) X = G, F = void 0;
    let V = Math.floor(Math.random() * 65536).toString(16).padStart(4, "0"),
        K = vSB.tmpdir();
    if (uQ() === "windows") K = pj(K);
    let D = `TextComponent{K}/claude-TextComponent{V}-cwd`,
        H = shouldAddDevNull(A),
        C = wrapBashCommand(A, H);
    if (!Y && A.includes("|") && H) C = addDevNullToCommand(A);
    let E = [];
    if (F) {
        if (!EO6(F)) g(`Snapshot file missing, recreating: TextComponent{F}`), GwA.cache?.clear?.(), F = (await GwA()).snapshotFilePath;
        if (F) {
            let y = uQ() === "windows" ? pj(F) : F;
            E.push(`source TextComponent{shellEscape([y])}`)
        }
    }
    let z = _TB();
    if (z) E.push(z);
    let w = NO6(X);
    if (w) E.push(w);
    E.push(`eval TextComponent{C}`), E.push(`pwd -P >| TextComponent{D}`);
    let N = E.join(" && ");
    if (process.env.CLAUDE_CODE_SHELL_PREFIX) N = zrA(process.env.CLAUDE_CODE_SHELL_PREFIX, N);
    let q = wH1();
    if (Q.aborted) return RTB();
    if (Y) {
        N = await lQ.wrapWithSandbox(N, X, void 0, Q);
        try {
            let y = OA(),
                v = "/tmp/claude";
            if (!y.existsSync("/tmp/claude")) y.mkdirSync("/tmp/claude")
        } catch (y) {
            g(`Failed to create /tmp/claude directory: TextComponent{y}`)
        }
    }
    let R = (process.env.CLAUDE_BASH_NO_LOGIN === "true" || process.env.CLAUDE_BASH_NO_LOGIN === "1") && F !== void 0,
        P = ["-c", ...R ? [] : ["-l"], N];
    if (R) g("Spawning shell without login (-l flag skipped)");
    try {
        let y = zO6(X, P, {
                env: {
                    ...process.env,
                    SHELL: X,
                    GIT_EDITOR: "true",
                    CLAUDECODE: "1",
                    ...{},
                    ...Y ? {
                        TMPDIR: "/tmp/claude"
                    } : {}
                },
                cwd: q,
                detached: !0
            }),
            v = ErA(y, Q, W, Z, J);
        return v.result.then(async (x) => {
            if (x && !I && !x.backgroundTaskId) try {
                Qq(CO6(D, {
                    encoding: "utf8"
                }).trim(), q)
            } catch {
                BA("tengu_shell_set_cwd", {
                    success: !1
                })
            }
        }), v
    } catch (y) {
        return g(`Shell exec error: TextComponent{y instanceof Error?y.message:String(y)}`), {
            status: "killed",
            background: () => null,
            kill: () => {},
            result: Promise.resolve({
                code: 126,
                stdout: "",
                stderr: y instanceof Error ? y.message : String(y),
                interrupted: !1
            })
        }
    }
}

function Qq(A, Q) {
    let B = UO6(A) ? A : $O6(Q || OA().cwd(), A);
    if (!OA().existsSync(B)) throw Error(`Path "TextComponent{B}" does not exist`);
    let G = OA().realpathSync(B);
    oC0(G);
    try {
        BA("tengu_shell_set_cwd", {
            success: !0
        })
    } catch (Z) {}
}
var qO6 = 1800000,
    GwA;
var m_ = lazyLoader(() => {
    KH();
    Qd1();
    bashCommandHelpers();
    u1();
    w0();
    Ad1();
    o0();
    S0();
    L9A();
    s5();
    D0();
    jSB();
    kSB();
    o2();
    R2();
    MJ();
    m$A();
    GwA = t1(MO6)
});
import {
    join as bSB
} from "path";

function Vf(A) {
    let Q = A.split(`
`),
        B = 0;
    while (B < Q.length && Q[B]?.trim() === "") B++;
    let G = Q.length - 1;
    while (G >= 0 && Q[G]?.trim() === "") G--;
    if (B > G) return "";
    return Q.slice(B, G + 1).join(`
`)
}

function d_(A) {
    let Q = /^data:image\/[a-z0-9.+_-]+;base64,/i.test(A);
    if (Q) return {
        totalLines: 1,
        truncatedContent: A,
        isImage: Q
    };
    let B = getMaxOutputLength();
    if (A.length <= B) return {
        totalLines: A.split(`
`).length,
        truncatedContent: A,
        isImage: Q
    };
    let G = A.slice(0, B),
        Z = A.slice(B).split(`
`).length,
        I = `TextComponent{G}

... [TextComponent{Z} lines truncated] ...`;
    return {
        totalLines: A.split(`
`).length,
        truncatedContent: I,
        isImage: Q
    }
}

function EoA(A) {
    if (TW1() || !qT(H0(), A)) {
        if (Qq(pQ()), !TW1()) return BA("tengu_bash_tool_reset_to_original_dir", {}), !0
    }
    return !1
}
async function fSB(A, Q, B, G) {
    let I = (await gX({
        systemPrompt: [`Extract any file paths that this command reads or modifies. For commands like "git diff" and "cat", include the paths of files being shown. Use paths verbatim -- don't add any slashes or try to resolve them. Do not try to infer paths that were not explicitly listed in the command output.

IMPORTANT: Commands that do not display the contents of the files should not return any filepaths. For eg. "ls", pwd", "find". Even more complicated commands that don't display the contents should not be considered: eg "find . -type f -exec ls -la {} + | sort -k5 -nr | head -5"

First, determine if the command displays the contents of the files. If it does, then <is_displaying_contents> tag should be true. If it does not, then <is_displaying_contents> tag should be false.

Format your response as:
<is_displaying_contents>
true
</is_displaying_contents>

<filepaths>
path/to/file1
path/to/file2
</filepaths>

If no files are read or modified, return empty filepaths tags:
<filepaths>
</filepaths>

Do not include any other text in your response.`],
        userPrompt: `Command: TextComponent{A}
Output: TextComponent{Q}`,
        enablePromptCaching: !0,
        signal: B,
        options: {
            querySource: "bash_extract_command_paths",
            agents: [],
            isNonInteractiveSession: G,
            hasAppendSystemPrompt: !1,
            mcpTools: [],
            agentIdOrSessionId: G0()
        }
    })).message.content.filter((Y) => Y.type === "text").map((Y) => Y.text).join("");
    return e2(I, "filepaths")?.trim().split(`
`).filter(Boolean) || []
}

function hSB(A, Q) {
    let B = OA(),
        G = G0(),
        Z = bSB("/tmp/claude/mcp-outputs", G),
        I = new Date().toISOString().replace(/[:.]/g, "-"),
        J = `mcp-output-TextComponent{Q.replace(/[^a-zA-Z0-9_-]/g,"_").slice(0,50)}-TextComponent{I}.json`,
        W = bSB(Z, J);
    if (!zoA(Z)) return e(Error(`Failed to create directory for MCP output: TextComponent{Z}`)), "";
    try {
        return B.writeFileSync(W, A, {
            encoding: "utf8",
            flush: !0
        }), W
    } catch (X) {
        return e(X instanceof Error ? X : Error(String(X))), ""
    }
}

function gSB(A) {
    let Q = [],
        B = 0,
        G = 0;
    for (let I of A)
        if (I.type === "image") G++;
        else if (I.type === "text" && "text" in I) {
        B++;
        let Y = I.text.slice(0, 200);
        Q.push(Y + (I.text.length > 200 ? "..." : ""))
    }
    let Z = [];
    if (G > 0) Z.push(`[TextComponent{G} image${G>1?"s":""}]`);
    if (B > 0) Z.push(`[TextComponent{B} text block${B>1?"s":""}]`);
    return `MCP Result: TextComponent{Z.join(", ")}TextComponent{Q.length>0?`

`+Q.join(`

`):""}`
}
var CoA = (A) => `TextComponent{A.trim()}
Shell cwd was reset to TextComponent{pQ()}`;
var yp = lazyLoader(() => {
    hQ();
    kZ();
    nQ();
    MGA();
    _Y();
    S0();
    w0();
    R2();
    m_();
    o0();
    M9();
    u1()
});

function uSB() {
    return `You are analyzing output from a bash command to determine if it should be summarized.

Your task is to:
1. Determine if the output contains mostly repetitive logs, verbose build output, or other "log spew"
2. If it does, extract only the relevant information (errors, test results, completion status, etc.)
3. Consider the conversation context - if the user specifically asked to see detailed output, preserve it

You MUST output your response using XML tags in the following format:
<should_summarize>true/false</should_summarize>
<reason>reason for why you decided to summarize or not summarize the output</reason>
<summary>markdown summary as described below (only if should_summarize is true)</summary>

If should_summarize is true, include all three tags with a comprehensive summary.
If should_summarize is false, include only the first two tags and omit the summary tag.

Summary: The summary should be extremely comprehensive and detailed in markdown format. Especially consider the converstion context to determine what to focus on.
Freely copy parts of the output verbatim into the summary if you think it is relevant to the conversation context or what the user is asking for.
It's fine if the summary is verbose. The summary should contain the following sections: (Make sure to include all of these sections)
1. Overview: An overview of the output including the most interesting information summarized.
2. Detailed summary: An extremely detailed summary of the output.
3. Errors: List of relevant errors that were encountered. Include snippets of the output wherever possible.
4. Verbatim output: Copy any parts of the provided output verbatim that are relevant to the conversation context. This is critical. Make sure to include ATLEAST 3 snippets of the output verbatim. 
5. DO NOT provide a recommendation. Just summarize the facts.

Reason: If providing a reason, it should comprehensively explain why you decided not to summarize the output.

Examples of when to summarize:
- Verbose build logs with only the final status being important. Eg. if we are running npm run build to test if our code changes build.
- Test output where only the pass/fail results matter
- Repetitive debug logs with a few key errors

Examples of when NOT to summarize:
- User explicitly asked to see the full output
- Output contains unique, non-repetitive information
- Error messages that need full stack traces for debugging


CRITICAL: You MUST start your response with the <should_summarize> tag as the very first thing. Do not include any other text before the first tag. The summary tag can contain markdown format, but ensure all XML tags are properly closed.`
}

function mSB(A, Q, B) {
    return `Command executed: \`TextComponent{A}\`

Recent conversation context:
TextComponent{Q||"No recent conversation context"}

Bash output to analyze:
TextComponent{B}

Should this output be summarized? If yes, provide a summary focusing on the most relevant information.`
}
import {
    createHash as RO6
} from "crypto";
import {
    join as dSB
} from "path";

function SO6(A) {
    let Q = new Date().toISOString().replace(/[:.]/g, "-"),
        B = RO6("sha256").update(A).digest("hex").slice(0, 8);
    return `TextComponent{Q}-TextComponent{B}.txt`
}

function _O6(A, Q, B) {
    return `COMMAND: TextComponent{A}

STDOUT:
TextComponent{Q}

STDERR:
TextComponent{B}`
}

function kO6(A, Q, B) {
    let G = OA(),
        Z = G0(),
        I = dSB(uH(pQ()), jO6, Z),
        Y = dSB(I, SO6(B));