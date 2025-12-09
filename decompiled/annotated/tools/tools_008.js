/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: tools_008.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (15次) = lazyLoader(fn) - Lazy module loader
 *   GA       (9次) = esmImport(module) - ESM import helper
 *   MGA      (2次) = bashToolModule loader
 *   D9       (1次) = BASH_TOOL_NAME = "Bash"
 *   uY       (1次) = GREP_TOOL_NAME = "Grep"
 *   LSB      (1次) = getBashToolDescription() - Returns Bash tool description
 *   KoA      (1次) = getMaxTimeout() - Returns max timeout (600000ms)
 *   LGA      (1次) = getDefaultTimeout() - Returns default timeout (120000ms)
 *   Ke       (1次) = getMaxOutputLength() - Returns max output length (30000)
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 8/25
 * Lines: 288485 - 289978 (1494 lines)
 * Original file: cli.js
 */

    return rH.default.createElement(j, {
        flexDirection: "column"
    }, A !== "" ? rH.default.createElement(xU, {
        content: A,
        verbose: Y
    }) : null, W !== "" ? rH.default.createElement(xU, {
        content: W,
        verbose: Y,
        isError: !0
    }) : null, A === "" && W === "" ? rH.default.createElement(y0, {
        height: 1
    }, rH.default.createElement($, {
        dimColor: !0
    }, I ? "Running in the background (down arrow to manage)" : Z || "(No content)")) : null)
}
var rH;
var U21 = L(() => {
    hA();
    wIA();
    u8();
    Hh();
    rH = GA(VA(), 1)
});

function $21({
    output: A,
    fullOutput: Q,
    elapsedTimeSeconds: B,
    totalLines: G,
    verbose: Z
}) {
    let I = mY(Q.trim()),
        J = mY(A.trim()).split(`
`).filter((V) => V),
        W = Z ? I : J.slice(-5).join(`
`),
        X = Z ? 0 : G ? Math.max(0, G - 5) : 0,
        F = B !== void 0 ? `(${FE(B*1000)})` : void 0;
    if (!J.length) return _k.default.createElement(y0, null, _k.default.createElement($, {
        dimColor: !0
    }, "Running… ", F));
    return _k.default.createElement(y0, null, _k.default.createElement(j, {
        flexDirection: "column"
    }, _k.default.createElement(j, {
        height: Z ? void 0 : Math.min(5, J.length),
        flexDirection: "column",
        overflow: "hidden"
    }, _k.default.createElement($, {
        dimColor: !0
    }, W)), _k.default.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, !Z && X > 0 && _k.default.createElement($, {
        dimColor: !0
    }, X > 0 && `+${X} more line${X===1?"":"s"}`), F && _k.default.createElement($, {
        dimColor: !0
    }, F))))
}
var _k;
var f10 = L(() => {
    hA();
    HT();
    u8();
    _k = GA(VA(), 1)
});

function UG2({
    onBackground: A
}) {
    h1((B, G) => {
        if (B === "b" && G.ctrl) A()
    });
    let Q = m0.terminal === "tmux" ? "ctrl+b ctrl+b to run in background" : "ctrl+b to run in background";
    return nY.createElement(j, {
        paddingLeft: 5
    }, nY.createElement($, {
        dimColor: !0
    }, Q))
}

function $G2(A, {
    verbose: Q,
    theme: B
}) {
    let {
        command: G
    } = A;
    if (!G) return null;
    let Z = G;
    if (G.includes(`"$(cat <<'EOF'`)) {
        let I = G.match(/^(.*?)"?\$\(cat <<'EOF'\n([\s\S]*?)\n\s*EOF\n\s*\)"(.*)$/);
        if (I && I[1] && I[2]) {
            let Y = I[1],
                J = I[2],
                W = I[3] || "";
            Z = `${Y.trim()} "${J.trim()}"${W.trim()}`
        }
    }
    if (!Q) {
        let I = Z.split(`
`),
            Y = I.length > zG2,
            J = Z.length > h10;
        if (Y || J) {
            let W = Z;
            if (Y) W = I.slice(0, zG2).join(`
`);
            if (W.length > h10) W = W.slice(0, h10);
            return nY.createElement($, null, W.trim(), "…")
        }
    }
    return Z
}

function wG2() {
    return nY.createElement(k3, null)
}

function qG2(A, {
    verbose: Q,
    tools: B,
    terminalSize: G,
    inProgressToolCallCount: Z
}) {
    let I = A.at(-1);
    if (!I || !I.data || !I.data.output) return nY.createElement(y0, {
        height: 1
    }, nY.createElement($, {
        dimColor: !0
    }, "Running…"));
    let Y = I.data;
    return nY.createElement($21, {
        fullOutput: Y.fullOutput,
        output: Y.output,
        elapsedTimeSeconds: Y.elapsedTimeSeconds,
        totalLines: Y.totalLines,
        verbose: Q
    })
}

function NG2() {
    return nY.createElement(y0, {
        height: 1
    }, nY.createElement($, {
        dimColor: !0
    }, "Waiting…"))
}

function LG2(A, Q, {
    verbose: B,
    theme: G,
    tools: Z,
    style: I
}) {
    return nY.createElement(V1A, {
        content: A,
        verbose: B
    })
}

function MG2(A, {
    verbose: Q,
    progressMessagesForMessage: B,
    tools: G
}) {
    return nY.createElement(A5, {
        result: A,
        verbose: Q
    })
}
var nY, zG2 = 2,
    h10 = 160;
var g10 = L(() => {
    hA();
    lV();
    lX();
    u8();
    U21();
    f10();
    f5();
    nY = GA(VA(), 1)
});
import {
    EOL as FMA
} from "os";
import {
    isAbsolute as pX5,
    resolve as lX5
} from "path";

function RG2(A) {
    let Q = aV(A);
    if (Q.length === 0) return "other";
    for (let B of Q) {
        let G = B.split(" ")[0] || "";
        if (sX5.includes(G)) return G
    }
    return "other"
}

function oX5(A, Q) {
    if (Q !== 0) return;
    if (A.match(/\bgit\s+commit\b/)) {
        if (BA("tengu_git_operation", {
                operation: "commit"
            }), A.match(/--amend\b/)) BA("tengu_git_operation", {
            operation: "commit_amend"
        });
        VE0()?.add(1)
    }
    if (A.match(/\bgh\s+pr\s+create\b/)) BA("tengu_git_operation", {
        operation: "pr_create"
    }), rW1()?.add(1);
    if (A.match(/\bglab\s+mr\s+create\b/)) BA("tengu_git_operation", {
        operation: "pr_create"
    }), rW1()?.add(1)
}

function tX5(A) {
    let Q = aV(A);
    if (Q.length === 0) return !0;
    let B = Q[0]?.trim();
    if (!B) return !0;
    return !nX5.includes(B)
}

function eX5(A) {
    let B = c0().sandbox?.excludedCommands ?? [];
    if (B.length === 0) return !1;
    for (let G of B) {
        let Z = Xe1(G);
        switch (Z.type) {
            case "exact":
                if (A.trim() === Z.command) return !0;
                break;
            case "prefix": {
                let I = A.trim();
                if (I === Z.prefix || I.startsWith(Z.prefix + " ")) return !0;
                break
            }
        }
    }
    return !1
}

function TIA(A) {
    if (!lQ.isSandboxingEnabled()) return !1;
    if (A.dangerouslyDisableSandbox && lQ.areUnsandboxedCommandsAllowed()) return !1;
    if (!A.command) return !1;
    if (eX5(A.command)) return !1;
    return !0
}
async function AF5(A, Q, B, G, Z) {
    return null
}
async function* QF5({
    input: A,
    abortController: Q,
    setAppState: B,
    setToolJSX: G,
    preventCwdChanges: Z
}) {
    let {
        command: I,
        description: Y,
        timeout: J,
        shellExecutable: W,
        run_in_background: X
    } = A, F = J || LGA(), V = "", K = "", D = 0, H = void 0, C = tX5(I), E = await HoA(I, Q.signal, F, W, (y, v, x) => {
        K = y, V = v, D = x
    }, Z, TIA(A), C), z = E.result;

    function w(y, v) {
        B((x) => {
            let p = x.backgroundTasks[y];
            if (p && p.type !== "shell") return x;
            return {
                ...x,
                backgroundTasks: {
                    ...x.backgroundTasks,
                    [y]: v(p)
                }
            }
        })
    }

    function N(y, v) {
        let x = jt1(I, E, Y || I, w);
        if (H = x, BA(y, {
                command_type: RG2(I)
            }), v) v(x)
    }

    function q() {
        N("tengu_bash_command_backgrounded")
    }
    if (E.onTimeout && C) E.onTimeout((y) => {
        N("tengu_bash_command_timeout_backgrounded", y)
    });
    if (X === !0) {
        let y = jt1(I, E, Y || I, w);
        return BA("tengu_bash_command_explicitly_backgrounded", {
            command_type: RG2(I)
        }), {
            stdout: "",
            stderr: "",
            code: 0,
            interrupted: !1,
            backgroundTaskId: y
        }
    }
    let R = Date.now(),
        P = R + OG2;
    while (!0) {
        let y = Date.now(),
            v = Math.max(0, P - y),
            x = await Promise.race([z, new Promise((o) => setTimeout(() => o(null), v))]);
        if (x !== null) return x;
        if (H) return {
            stdout: "",
            stderr: "",
            code: 0,
            interrupted: !1,
            backgroundTaskId: H
        };
        let p = Date.now() - R,
            u = Math.floor(p / 1000);
        if (H === void 0 && u >= OG2 / 1000 && G) G({
            jsx: u10.createElement(UG2, {
                onBackground: q
            }),
            shouldHidePromptInput: !1,
            shouldContinueAnimation: !0,
            showSpinner: !0
        });
        yield {
            type: "progress",
            fullOutput: V,
            output: K,
            elapsedTimeSeconds: u,
            totalLines: D
        }, P = Date.now() + iX5
    }
}
async function BF5(A, Q, B) {
    try {
        let G = JSON.parse(A),
            {
                content: Z,
                type: I,
                schema: Y
            } = await tA0(G, B.tool, B.server);
        if (!await uA0(Z)) {
            if (Array.isArray(Z)) return {
                stdout: gSB(Z),
                structuredContent: Z,
                rawOutputPath: void 0
            };
            else if (typeof Z === "string") return {
                stdout: Z,
                structuredContent: void 0,
                rawOutputPath: void 0
            };
            return null
        }
        let W = typeof Z === "string" ? Z : JSON.stringify(Z, null, 2),
            X = hSB(W, Q),
            F;
        switch (I) {
            case "toolResult":
                F = "Plain text";
                break;
            case "structuredContent":
                F = Y ? `JSON with schema: ${Y}` : "JSON";
                break;
            case "contentArray":
                F = Y ? `JSON array with schema: ${Y}` : "JSON array";
                break
        }
        return {
            stdout: `Error: result (${W.length.toLocaleString()} characters) exceeds maximum allowed tokens. Output has been saved to ${X}.
Format: ${F}
Use offset and limit parameters to read specific portions of the file, the ${uY} tool to search for specific content, and jq to make structured queries.
REQUIREMENTS FOR SUMMARIZATION/ANALYSIS/REVIEW:
- You MUST read the content from the file at ${X} in sequential chunks until 100% of the content has been read.
- If you receive truncation warnings when reading the file ("[N lines truncated]"), reduce the chunk size until you have read 100% of the content without truncation ***DO NOT PROCEED UNTIL YOU HAVE DONE THIS***. Bash output is limited to ${Ke().toLocaleString()} chars.
- Before producing ANY summary or analysis, you MUST explicitly describe what portion of the content you have read. ***If you did not read the entire content, you MUST explicitly state this.***
`,
            structuredContent: void 0,
            rawOutputPath: X
        }
    } catch (G) {
        return e(G), null
    }
}
var u10, OG2 = 2000,
    iX5 = 1000,
    nX5, aX5, sX5, rX5, X9;
var nV = L(() => {
    h2();
    pSB();
    gU();
    u1();
    UZ();
    Ie();
    R2();
    hQ();
    Kq();
    gAA();
    MGA();
    MJ();
    uM();
    yp();
    De1();
    ze1();
    O9();
    w0();
    S0();
    Tk();
    TB1();
    RB();
    $Z();
    p52();
    MGA();
    S0();
    g10();
    m_();
    EE();
    XT();
    u10 = GA(VA(), 1), nX5 = ["sleep"], aX5 = _.strictObject({
        command: _.string().describe("The command to execute"),
        timeout: _.number().optional().describe(`Optional timeout in milliseconds (max ${KoA()})`),
        description: _.string().optional().describe(`Clear, concise description of what this command does in 5-10 words, in active voice. Examples:
Input: ls
Output: List files in current directory

Input: git status
Output: Show working tree status

Input: npm install
Output: Install package dependencies

Input: mkdir foo
Output: Create directory 'foo'`),
        run_in_background: _.boolean().optional().describe("Set to true to run this command in the background. Use BashOutput to read the output later."),
        dangerouslyDisableSandbox: _.boolean().optional().describe("Set this to true to dangerously override sandbox mode and run commands without sandboxing.")
    }), sX5 = ["npm", "yarn", "pnpm", "node", "python", "python3", "go", "cargo", "make", "docker", "terraform", "webpack", "vite", "jest", "pytest", "curl", "wget", "build", "test", "serve", "watch", "dev"];
    rX5 = _.object({
        stdout: _.string().describe("The standard output of the command"),
        stderr: _.string().describe("The standard error output of the command"),
        summary: _.string().optional().describe("Summarized output when available"),
        rawOutputPath: _.string().optional().describe("Path to raw output file when summarized"),
        interrupted: _.boolean().describe("Whether the command was interrupted"),
        isImage: _.boolean().optional().describe("Flag to indicate if stdout contains image data"),
        backgroundTaskId: _.string().optional().describe("ID of the background task if command is running in background"),
        dangerouslyDisableSandbox: _.boolean().optional().describe("Flag to indicate if sandbox mode was overridden"),
        returnCodeInterpretation: _.string().optional().describe("Semantic interpretation for non-error exit codes with special meaning"),
        structuredContent: _.array(_.any()).optional().describe("Structured content blocks from mcp-cli commands")
    });
    X9 = {
        name: D9,
        strict: !0,
        async description({
            description: A
        }) {
            return A || "Run shell command"
        },
        async prompt() {
            return LSB()
        },
        isConcurrencySafe(A) {
            return this.isReadOnly(A)
        },
        isReadOnly(A) {
            return F92(A).behavior === "allow"
        },
        inputSchema: aX5,
        outputSchema: rX5,
        userFacingName(A) {
            if (!A) return "Bash";
            return TIA(A) && V0(process.env.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR) ? "SandboxedBash" : "Bash"
        },
        getToolUseSummary(A) {
            if (!A?.command) return null;
            let {
                command: Q,
                description: B
            } = A;
            if (B) return B;
            return B7(Q, wk)
        },
        isEnabled() {
            return !0
        },
        async checkPermissions(A, Q) {
            return await Ke1(A, Q)
        },
        renderToolUseMessage: $G2,
        renderToolUseRejectedMessage: wG2,
        renderToolUseProgressMessage: qG2,
        renderToolUseQueuedMessage: NG2,
        renderToolResultMessage: LG2,
        mapToolResultToToolResultBlockParam({
            interrupted: A,
            stdout: Q,
            stderr: B,
            summary: G,
            isImage: Z,
            backgroundTaskId: I,
            structuredContent: Y
        }, J) {
            if (Y && Y.length > 0) return {
                tool_use_id: J,
                type: "tool_result",
                content: Y
            };
            if (Z) {
                let V = Q.trim().match(/^data:([^;]+);base64,(.+)$/);
                if (V) {
                    let K = V[1],
                        D = V[2];
                    return {
                        tool_use_id: J,
                        type: "tool_result",
                        content: [{
                            type: "image",
                            source: {
                                type: "base64",
                                media_type: K || "image/jpeg",
                                data: D || ""
                            }
                        }]
                    }
                }
            }
            if (G) return {
                tool_use_id: J,
                type: "tool_result",
                content: G,
                is_error: A
            };
            let W = Q;
            if (Q) W = Q.replace(/^(\s*\n)+/, ""), W = W.trimEnd();
            let X = B.trim();
            if (A) {
                if (B) X += FMA;
                X += "<error>Command was aborted before completion</error>"
            }
            let F = I ? `Command running in background with ID: ${I}` : "";
            return {
                tool_use_id: J,
                type: "tool_result",
                content: [W, X, F].filter(Boolean).join(`
`),
                is_error: A
            }
        },
        async call(A, Q, B, G, Z) {
            let {
                abortController: I,
                readFileState: Y,
                getAppState: J,
                setAppState: W,
                setToolJSX: X,
                messages: F
            } = Q, V = new QGA, K = new QGA, D, H = 0, C = !1, E, w = Q.agentId !== G0();
            try {
                let HA = QF5({
                        input: A,
                        abortController: I,
                        setAppState: W,
                        setToolJSX: X,
                        preventCwdChanges: w
                    }),
                    wA;
                do
                    if (wA = await HA.next(), !wA.done && Z) {
                        let SA = wA.value;
                        Z({
                            toolUseID: `bash-progress-${H++}`,
                            data: {
                                type: "bash_progress",
                                output: SA.output,
                                fullOutput: SA.fullOutput,
                                elapsedTimeSeconds: SA.elapsedTimeSeconds,
                                totalLines: SA.totalLines
                            }
                        })
                    } while (!wA.done);
                if (E = wA.value, oX5(A.command, E.code), V.append((E.stdout || "").trimEnd() + FMA), D = c52(A.command, E.code, E.stdout || "", E.stderr || ""), E.stderr && E.stderr.includes(".git/index.lock': File exists")) BA("tengu_git_index_lock_error", {});
                if (D.isError) {
                    if (K.append(E.stderr.trimEnd() + FMA), E.code !== 0) K.append(`Exit code ${E.code}`)
                } else if (Ve(A.command) !== null) K.append(E.stderr.trimEnd() + FMA);
                else V.append(E.stderr.trimEnd() + FMA);
                if (!w) {
                    let SA = await J();
                    if (EoA(SA.toolPermissionContext)) {
                        let sA = K.toString();
                        K.clear(), K.append(CoA(sA))
                    }
                }
                let KA = lQ.annotateStderrWithSandboxFailures(A.command, E.stderr || "");
                if (D.isError) throw new oj(E.stdout, KA, E.code, E.interrupted);
                C = E.interrupted
            } finally {
                if (X) X(null)
            }
            let N = V.toString(),
                q = K.toString();
            {
                let HA = s9();
                fSB(A.command, N, HA.signal, Q.options.isNonInteractiveSession).then(async (wA) => {
                    for (let KA of wA) {
                        let SA = pX5(KA) ? KA : lX5(H0(), KA);
                        try {
                            if (!(await d8.validateInput({
                                    file_path: SA
                                }, Q)).result) {
                                Y.delete(SA);
                                continue
                            }
                            await d8.call({
                                file_path: SA
                            }, Q)
                        } catch (sA) {
                            Y.delete(SA), e(sA)
                        }
                    }
                    BA("tengu_bash_tool_haiku_file_paths_read", {
                        filePathsExtracted: wA.length,
                        readFileStateSize: Y.size,
                        readFileStateValuesCharLength: dl(Y).reduce((KA, SA) => {
                            let sA = Y.get(SA);
                            return KA + (sA?.content.length || 0)
                        }, 0)
                    })
                }).catch((wA) => {
                    if (wA instanceof Error && wA.message.includes("Request was aborted")) return;
                    e(wA)
                })
            }
            let R = await AF5(N, q, A.command, I, F || []),
                P = R?.shouldSummarize === !0,
                y = R?.modelReason,
                v = A.command.split(" ")[0];
            BA("tengu_bash_tool_command_executed", {
                command_type: v,
                stdout_length: N.length,
                stderr_length: q.length,
                exit_code: E.code,
                interrupted: C,
                summarization_attempted: R !== null,
                summarization_succeeded: P,
                summarization_duration_ms: R?.queryDurationMs,
                summarization_reason: !P && R ? R.reason : void 0,
                model_summarization_reason: y,
                summary_length: R?.shouldSummarize && R.summary ? R.summary.length : void 0
            });
            let {
                truncatedContent: x,
                isImage: p
            } = d_(Vf(N)), {
                truncatedContent: u
            } = d_(Vf(q)), o = void 0, l = x, k = void 0, d = Ve(A.command);
            if (d !== null) {
                let HA = await BF5(N, A.command, d);
                if (HA !== null) l = HA.stdout, k = HA.structuredContent, o = HA.rawOutputPath
            }
            let QA = l;
            if (p) {
                let HA = l.trim().match(/^data:([^;]+);base64,(.+)$/);
                if (HA && HA[1] && HA[2]) {
                    let wA = HA[1],
                        KA = HA[2],
                        SA = Buffer.from(KA, "base64"),
                        sA = await Ze(SA, void 0, wA);
                    QA = `data:${sA.mediaType};base64,${sA.base64}`
                }
            }
            return {
                data: {
                    stdout: QA,
                    stderr: u,
                    summary: P ? R?.summary : void 0,
                    rawOutputPath: P ? R?.rawOutputPath : o,
                    interrupted: C,
                    isImage: p,
                    returnCodeInterpretation: D?.message,
                    backgroundTaskId: E.backgroundTaskId,
                    structuredContent: k,
                    dangerouslyDisableSandbox: "dangerouslyDisableSandbox" in A ? A.dangerouslyDisableSandbox : void 0
                }
            }
        },
        renderToolUseErrorMessage: MG2
    }
});

function w21({
    ruleValue: A
}) {
    switch (A.toolName) {
        case X9.name:
            if (A.ruleContent)
                if (A.ruleContent.endsWith(":*")) return hE.createElement($, {
                    dimColor: !0
                }, "Any Bash command starting with", " ", hE.createElement($, {
                    bold: !0
                }, A.ruleContent.slice(0, -2)));
                else return hE.createElement($, {
                    dimColor: !0
                }, "The Bash command ", hE.createElement($, {
                    bold: !0
                }, A.ruleContent));
            else return hE.createElement($, {
                dimColor: !0
            }, "Any Bash command");
        default:
            if (!A.ruleContent) return hE.createElement($, {
                dimColor: !0
            }, "Any use of the ", hE.createElement($, {
                bold: !0
            }, A.toolName), " tool");
            else return null
    }
}
var hE;
var m10 = L(() => {
    hA();
    nV();
    hE = GA(VA(), 1)
});

function GF5({
    orientation: A = "horizontal",
    width: Q = "auto",
    dividerChar: B,
    dividerColor: G,
    dividerDimColor: Z = !0,
    boxProps: I
}) {
    let Y = A === "vertical",
        J = B || (Y ? "│" : "─");
    if (Y) return Ki.default.createElement(j, {
        height: "100%",
        borderStyle: {
            topLeft: "",
            top: "",
            topRight: "",
            right: J,
            bottomRight: "",
            bottom: "",
            bottomLeft: "",
            left: ""
        },
        borderColor: G,
        borderDimColor: Z,
        borderBottom: !1,
        borderTop: !1,
        borderLeft: !1,
        borderRight: !0,
        ...I
    });
    return Ki.default.createElement(j, {
        width: Q,
        borderStyle: {
            topLeft: "",
            top: "",
            topRight: "",
            right: "",
            bottomRight: "",
            bottom: J,
            bottomLeft: "",
            left: ""
        },
        borderColor: G,
        borderDimColor: Z,
        flexGrow: 1,
        borderBottom: !0,
        borderTop: !1,
        borderLeft: !1,
        borderRight: !1,
        ...I
    })
}

function ZF5({
    orientation: A = "horizontal",
    title: Q,
    width: B = "auto",
    padding: G = 0,
    titlePadding: Z = 1,
    titleColor: I = "text",
    titleDimColor: Y = !0,
    dividerChar: J,
    dividerColor: W,
    dividerDimColor: X = !0,
    boxProps: F
}) {
    let V = A === "vertical",
        D = Ki.default.createElement(GF5, {
            orientation: A,
            dividerChar: J || (V ? "│" : "─"),
            dividerColor: W,
            dividerDimColor: X,
            boxProps: F
        });
    if (V) return D;
    if (!Q) return Ki.default.createElement(j, {
        paddingLeft: G,
        paddingRight: G
    }, D);
    return Ki.default.createElement(j, {
        width: B,
        paddingLeft: G,
        paddingRight: G,
        gap: Z
    }, D, Ki.default.createElement(j, null, Ki.default.createElement($, {
        color: I,
        dimColor: Y
    }, Q)), D)
}
var Ki, J3;
var eV = L(() => {
    hA();
    Ki = GA(VA(), 1);
    J3 = ZF5
});

function kD({
    title: A,
    subtitle: Q,
    children: B,
    onCancel: G,
    color: Z,
    borderDimColor: I,
    hideInputGuide: Y,
    hideBorder: J
}) {
    return oH.default.createElement(IF5, {
        title: A,
        subtitle: Q,
        onCancel: G,
        color: Z,
        borderDimColor: I,
        hideInputGuide: Y,
        hideBorder: J
    }, B)
}

function IF5({
    title: A,
    subtitle: Q,
    children: B,
    onCancel: G,
    color: Z = "permission",
    borderDimColor: I = !0,
    hideInputGuide: Y,
    hideBorder: J
}) {
    let W = DQ();
    return h1((X, F) => {
        if (F.escape) {
            G();
            return
        }
    }), oH.default.createElement(oH.default.Fragment, null, oH.default.createElement(j, {
        flexDirection: "column",
        paddingBottom: 1
    }, !J && oH.default.createElement(J3, {
        dividerColor: Z,
        dividerDimColor: I
    }), oH.default.createElement(j, {
        flexDirection: "column",
        paddingX: J ? 0 : 1,
        gap: 1
    }, oH.default.createElement(j, {
        flexDirection: "column"
    }, oH.default.createElement($, {
        bold: !0,
        color: Z
    }, A), Q && oH.default.createElement($, {
        dimColor: !0
    }, Q)), B)), !Y && oH.default.createElement(j, {
        paddingX: J ? 0 : 1
    }, oH.default.createElement($, {
        dimColor: !0,
        italic: !0
    }, W.pending ? oH.default.createElement(oH.default.Fragment, null, "Press ", W.keyName, " again to exit") : oH.default.createElement(oH.default.Fragment, null, "Enter to confirm · Esc to cancel"))))
}
var oH;
var Di = L(() => {
    hA();
    c9();
    eV();
    oH = GA(VA(), 1)
});

function d10(A) {
    switch (A) {
        case "localSettings":
            return {
                label: "Project settings (local)", description: `Saved in ${VMA("localSettings")}`, value: A
            };
        case "projectSettings":
            return {
                label: "Project settings", description: `Checked in at ${VMA("projectSettings")}`, value: A
            };
        case "userSettings":
            return {
                label: "User settings", description: "Saved in at ~/.claude/settings.json", value: A
            }
    }
}

function PG2({
    onAddRules: A,
    onCancel: Q,
    ruleValues: B,
    ruleBehavior: G,
    initialContext: Z,
    setToolPermissionContext: I
}) {
    let Y = tIA.map(d10),
        J = TG2.useCallback((X) => {
            if (X === "cancel") {
                Q();
                return
            } else if (tIA.includes(X)) {
                let F = X,
                    V = $V(Z, {
                        type: "addRules",
                        rules: B,
                        behavior: G,
                        destination: F
                    });
                Yv({
                    type: "addRules",
                    rules: B,
                    behavior: G,
                    destination: F
                }), I(V);
                let K = B.map((D) => ({
                    ruleValue: D,
                    ruleBehavior: G,
                    source: F
                }));
                A(K)
            }
        }, [A, Q, B, G, Z, I]),
        W = `Add ${G} permission rule${B.length===1?"":"s"}`;
    return yD.createElement(kD, {
        title: W,
        onCancel: Q,
        color: "permission"
    }, yD.createElement(j, {
        flexDirection: "column",
        paddingX: 2
    }, B.map((X) => yD.createElement(j, {
        flexDirection: "column",
        key: r5(X)
    }, yD.createElement($, {
        bold: !0
    }, r5(X)), yD.createElement(w21, {
        ruleValue: X
    })))), yD.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, yD.createElement($, null, B.length === 1 ? "Where should this rule be saved?" : "Where should these rules be saved?"), yD.createElement(M0, {
        options: Y,
        onChange: J,
        onCancel: Q
    })))
}
var yD, TG2, tIA;
var q21 = L(() => {
    hA();
    T5();
    aG();
    hK();
    hK();
    m10();
    RB();
    Di();
    yD = GA(VA(), 1), TG2 = GA(VA(), 1);
    tIA = ["localSettings", "projectSettings", "userSettings"]
});

function N21(A, Q, B, G, Z, I, Y) {
    let J = {
        type: "function",
        timeout: Y?.timeout || 5000,
        callback: Z,
        errorMessage: I
    };
    YF5(A, Q, B, G, J)
}

function YF5(A, Q, B, G, Z, I) {
    A((Y) => {
        let J = Y.sessionHooks[Q] || {
                hooks: {}
            },
            W = J.hooks[B] || [],
            X = W.findIndex((K) => K.matcher === G),
            F;
        if (X >= 0) {
            F = [...W];
            let K = F[X];
            F[X] = {
                matcher: K.matcher,
                hooks: [...K.hooks, {
                    hook: Z,
                    onHookSuccess: I
                }]
            }
        } else F = [...W, {
            matcher: G,
            hooks: [{
                hook: Z,
                onHookSuccess: I
            }]
        }];
        let V = {
            ...J.hooks,
            [B]: F
        };
        return {
            ...Y,
            sessionHooks: {
                ...Y.sessionHooks,
                [Q]: {
                    hooks: V
                }
            }
        }
    }), g(`Added session hook for event ${B} in session ${Q}`)
}

function jG2(A) {
    return A.map((Q) => ({
        matcher: Q.matcher,
        hooks: Q.hooks.map((B) => B.hook).filter((B) => B.type !== "function")
    }))
}

function L21(A, Q, B) {
    let G = A.sessionHooks[Q];
    if (!G) return new Map;
    let Z = new Map;
    if (B) {
        let I = G.hooks[B];
        if (I) Z.set(B, jG2(I));
        return Z
    }
    for (let I of jKA) {
        let Y = G.hooks[I];
        if (Y) Z.set(I, jG2(Y))
    }
    return Z
}

function SG2(A, Q, B, G, Z) {
    let I = A.sessionHooks[Q];
    if (!I) return;
    let Y = I.hooks[B];
    if (!Y) return;
    for (let J of Y)
        if (J.matcher === G || G === "") {
            let W = J.hooks.find((X) => KMA(X.hook, Z));
            if (W) return W
        } return
}

function M21(A, Q) {
    A((B) => {
        let G = {
            ...B.sessionHooks
        };
        return delete G[Q], {
            ...B,
            sessionHooks: G
        }
    }), g(`Cleared all session hooks for session ${Q}`)
}
var eIA = L(() => {
    ZvA();
    D0();
    kk()
});

function KMA(A, Q) {
    if (A.type !== Q.type) return !1;
    switch (A.type) {
        case "command":
            return Q.type === "command" && A.command === Q.command;
        case "prompt":
            return Q.type === "prompt" && A.prompt === Q.prompt;
        case "agent":
            return Q.type === "agent" && A.prompt === Q.prompt;
        case "function":
            return !1
    }
}

function gE(A) {
    if ("statusMessage" in A && A.statusMessage) return A.statusMessage;
    switch (A.type) {
        case "command":
            return A.command;
        case "prompt":
            return A.prompt;
        case "agent":
            return A.prompt([]);
        case "callback":
            return "callback";
        case "function":
            return "function"
    }
}

function _G2(A) {
    let Q = [];
    if (LB("policySettings")?.allowManagedHooksOnly !== !0) {
        let Y = ["userSettings", "projectSettings", "localSettings"];
        for (let J of Y) {
            let W = LB(J);
            if (!W?.hooks) continue;
            for (let [X, F] of Object.entries(W.hooks))
                for (let V of F)
                    for (let K of V.hooks) Q.push({
                        event: X,
                        config: K,
                        matcher: V.matcher,
                        source: J
                    })
        }
    }
    let Z = G0(),
        I = L21(A, Z);
    for (let [Y, J] of I.entries())
        for (let W of J)
            for (let X of W.hooks) Q.push({
                event: Y,
                config: X,
                matcher: W.matcher,
                source: "sessionHook"
            });
    return Q
}
async function kG2(A, Q, B = "", G = "userSettings") {
    let I = (LB(G) ?? {}).hooks ?? {},
        Y = I[A] ?? [],
        J = Y.findIndex((V) => V.matcher === B),
        W;
    if (J >= 0) {
        W = [...Y];
        let V = W[J];
        W[J] = {
            matcher: V.matcher,
            hooks: [...V.hooks, Q]
        }
    } else W = [...Y, {
        matcher: B,
        hooks: [Q]
    }];
    let X = {
            ...I,
            [A]: W
        },
        {
            error: F
        } = cB(G, {
            hooks: X
        });
    if (F) throw Error(F.message);
    DMA()
}
async function yG2(A) {
    if (A.source === "pluginHook") throw Error("Plugin hooks cannot be removed through settings. Disable the plugin instead.");
    if (A.source === "sessionHook") throw Error("Session hooks cannot be removed through settings. They are temporary and will be cleared when the session ends.");
    let Q = LB(A.source) ?? {},
        B = Q.hooks ?? {},
        Z = (B[A.event] ?? []).map((J) => {
            if (J.matcher === A.matcher) {
                let W = J.hooks.filter((X) => !KMA(X, A.config));
                return W.length > 0 ? {
                    ...J,
                    hooks: W
                } : null
            }
            return J
        }).filter((J) => J !== null),
        I = {
            ...B,
            [A.event]: Z.length > 0 ? Z : void 0
        },
        Y = Object.values(I).some((J) => J !== void 0);
    cB(A.source, {
        ...Q,
        hooks: Y ? I : void 0
    }), DMA()
}

function xG2(A) {
    switch (A) {
        case "userSettings":
            return "User settings (~/.claude/settings.json)";
        case "projectSettings":
            return "Project settings (.claude/settings.json)";
        case "localSettings":
            return "Local settings (.claude/settings.local.json)";
        case "pluginHook":
            return "Plugin hooks (~/.claude/plugins/*/hooks/hooks.json)";
        case "sessionHook":
            return "Session hooks (in-memory, temporary)";
        default:
            return A
    }
}

function c10(A) {
    switch (A) {
        case "userSettings":
            return "User Settings";
        case "projectSettings":
            return "Project Settings";
        case "localSettings":
            return "Local Settings";
        case "pluginHook":
            return "Plugin Hooks";
        case "sessionHook":
            return "Session Hooks";
        default:
            return A
    }
}

function vG2(A) {
    switch (A) {
        case "userSettings":
            return "User";
        case "projectSettings":
            return "Project";
        case "localSettings":
            return "Local";
        case "pluginHook":
            return "Plugin";
        case "sessionHook":
            return "Session";
        default:
            return A
    }
}

function bG2(A, Q, B) {
    let G = tIA.reduce((Z, I, Y) => {
        return Z[I] = Y, Z
    }, {});
    return [...A].sort((Z, I) => {
        let Y = Q[B]?.[Z] || [],
            J = Q[B]?.[I] || [],
            W = Array.from(new Set(Y.map((D) => D.source))),
            X = Array.from(new Set(J.map((D) => D.source))),
            F = (D) => D === "pluginHook" ? 999 : G[D],
            V = Math.min(...W.map(F)),
            K = Math.min(...X.map(F));
        if (V !== K) return V - K;
        return Z.localeCompare(I)
    })
}
var kk = L(() => {
    RB();
    q21();
    AYA();
    eIA();
    S0()
});

function p10() {
    let A = LB("policySettings");
    if (A?.allowManagedHooksOnly === !0) return A.hooks ?? {};
    return c0().hooks ?? {}
}

function O21() {
    return LB("policySettings")?.allowManagedHooksOnly === !0
}

function l10(A) {
    if (!A) return null;
    let Q = {},
        B = Object.keys(A).sort();
    for (let G of B) {
        let Z = A[G];
        if (!Z) continue;
        let I = [...Z].sort((Y, J) => {
            let W = Y.matcher || "",
                X = J.matcher || "";
            return W.localeCompare(X)
        });
        Q[G] = I.map((Y) => ({
            matcher: Y.matcher,
            hooks: [...Y.hooks].sort((J, W) => gE(J).localeCompare(gE(W)))
        }))
    }
    return Q
}

function i10() {
    let A = p10();
    Hi = l10(A)
}

function DMA() {
    let A = p10();
    Hi = l10(A)
}

function fG2() {
    if (Hi === null) return null;
    let A = l10(p10()),
        Q = JSON.stringify(Hi),
        B = JSON.stringify(A);
    if (Q === B) return null;
    let G = [],
        Z = new Set(Object.keys(Hi || {})),
        I = new Set(Object.keys(A || {}));
    for (let Y of I)
        if (!Z.has(Y)) G.push(`Added hooks for event: ${Y}`);
    for (let Y of Z)
        if (!I.has(Y)) G.push(`Removed all hooks for event: ${Y}`);
    for (let Y of Z)
        if (I.has(Y)) {
            let J = Hi?.[Y] || [],
                W = A?.[Y] || [];
            if (JSON.stringify(J) !== JSON.stringify(W)) {
                let X = [],
                    F = new Map(J.map((K) => [K.matcher || "", K])),
                    V = new Map(W.map((K) => [K.matcher || "", K]));
                for (let [K] of V)
                    if (!F.has(K)) X.push(`  - Added matcher: ${K||"(no matcher)"}`);
                for (let [K] of F)
                    if (!V.has(K)) X.push(`  - Removed matcher: ${K||"(no matcher)"}`);
                for (let [K, D] of V)
                    if (F.has(K)) {
                        let H = F.get(K);
                        if (JSON.stringify(H.hooks) !== JSON.stringify(D.hooks)) X.push(`  - Modified hooks for matcher: ${K||"(no matcher)"}`)
                    } if (X.length > 0) G.push(`Modified hooks for event: ${Y}`), G.push(...X);
                else G.push(`Modified hooks for event: ${Y}`)
            }
        } return G.length > 0 ? G.join(`
`) : "Hooks configuration has been modified"
}

function hG2() {
    if (Hi === null) i10();
    return Hi
}
var Hi = null;
var AYA = L(() => {
    RB();
    kk();
    S0()
});
var j_G, R21;
var gG2 = L(() => {
    h2();
    j_G = I2.enum(["allow", "deny", "ask"]), R21 = I2.object({
        toolName: I2.string(),
        ruleContent: I2.string().optional()
    })
});
var QYA, T21;
var n10 = L(() => {
    h2();
    gG2();
    Bw();
    QYA = I2.enum(["userSettings", "projectSettings", "localSettings", "session", "cliArg"]), T21 = I2.discriminatedUnion("type", [I2.object({
        type: I2.literal("addRules"),
        rules: I2.array(R21),
        behavior: I2.enum(["allow", "deny", "ask"]),
        destination: QYA
    }), I2.object({
        type: I2.literal("replaceRules"),
        rules: I2.array(R21),
        behavior: I2.enum(["allow", "deny", "ask"]),
        destination: QYA
    }), I2.object({
        type: I2.literal("removeRules"),
        rules: I2.array(R21),
        behavior: I2.enum(["allow", "deny", "ask"]),
        destination: QYA
    }), I2.object({
        type: I2.literal("setMode"),
        mode: Fl0,
        destination: QYA
    }), I2.object({
        type: I2.literal("addDirectories"),
        directories: I2.array(I2.string()),
        destination: QYA
    }), I2.object({
        type: I2.literal("removeDirectories"),
        directories: I2.array(I2.string()),
        destination: QYA
    })])
});

function uG2(A) {
    return !(("async" in A) && A.async === !0)
}

function BYA(A) {
    return "async" in A && A.async === !0
}
var JF5, WF5, P21;
var a10 = L(() => {
    h2();
    ZvA();
    n10();
    JF5 = _.object({
        async: _.literal(!0),
        asyncTimeout: _.number().optional()
    }), WF5 = _.object({
        continue: _.boolean().describe("Whether Claude should continue after hook (default: true)").optional(),
        suppressOutput: _.boolean().describe("Hide stdout from transcript (default: false)").optional(),
        stopReason: _.string().describe("Message shown when continue is false").optional(),
        decision: _.enum(["approve", "block"]).optional(),
        reason: _.string().describe("Explanation for the decision").optional(),
        systemMessage: _.string().describe("Warning message shown to the user").optional(),
        hookSpecificOutput: _.union([_.object({
            hookEventName: _.literal("PreToolUse"),
            permissionDecision: _.enum(["allow", "deny", "ask"]).optional(),
            permissionDecisionReason: _.string().optional(),
            updatedInput: _.record(_.unknown()).optional()
        }), _.object({
            hookEventName: _.literal("UserPromptSubmit"),
            additionalContext: _.string().optional()
        }), _.object({
            hookEventName: _.literal("SessionStart"),
            additionalContext: _.string().optional()
        }), _.object({
            hookEventName: _.literal("SubagentStart"),
            additionalContext: _.string().optional()
        }), _.object({
            hookEventName: _.literal("PostToolUse"),
            additionalContext: _.string().optional(),
            updatedMCPToolOutput: _.unknown().describe("Updates the output for MCP tools").optional()
        }), _.object({
            hookEventName: _.literal("PostToolUseFailure"),
            additionalContext: _.string().optional()
        }), _.object({
            hookEventName: _.literal("PermissionRequest"),
            decision: _.union([_.object({
                behavior: _.literal("allow"),
                updatedInput: _.record(_.unknown()).optional(),
                updatedPermissions: _.array(T21).optional()
            }), _.object({
                behavior: _.literal("deny"),
                message: _.string().optional(),
                interrupt: _.boolean().optional()
            })])
        })]).optional()
    }), P21 = _.union([JF5, WF5])
});

function yk(A, Q) {
    let B = s9(),
        G = () => {
            B.abort()
        };
    A.addEventListener("abort", G), Q?.addEventListener("abort", G);
    let Z = () => {
        A.removeEventListener("abort", G), Q?.removeEventListener("abort", G)
    };
    return {
        signal: B.signal,
        cleanup: Z
    }
}
var j21 = L(() => {
    UZ()
});

function mG2({
    processId: A,
    asyncResponse: Q,
    hookName: B,
    hookEvent: G,
    command: Z,
    shellCommand: I,
    toolName: Y
}) {
    let J = Q.asyncTimeout || 15000;