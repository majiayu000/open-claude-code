/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: prompts_007.js
 * 处理时间: 2025-12-09T03:41:38.241Z
 * 变量映射: 5 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       (  6x) esmImport(module) - ESM import
 * o9       (  2x) getConfig() - Returns config with BASE_API_URL, OAut...
 * S3       (  2x) getDefaultSonnetModel() - Returns "claude-sonnet-4-5...
 * Cf1      (  1x) getMainBranch() - Get main branch name
 * V0       (  1x) parseBoolean(value) - Parse bool env
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 7/10
 * Lines: 333422 - 334920 (1499 lines)
 * Original file: cli.js
 */

        if (GQ.isAxiosError(Z) && Z.response?.status === 404) throw BA("tengu_teleport_error_session_not_found_404", {
            sessionId: A
        }), new GI(`${A} not found.`, `${A} not found.
${oA.dim("Run /status in Claude Code to check your account.")}`);
        throw e(I), Error(`Failed to fetch session from Sessions API: ${I.message}`)
    }
}
async function M80(A) {
    let {
        initialMessage: Q,
        description: B,
        signal: G
    } = A;
    try {
        await ko();
        let Z = U6()?.accessToken;
        if (!Z) return e(Error("No access token found for remote session creation")), null;
        let I = await tj();
        if (!I) return e(Error("Unable to get organization UUID for remote session creation")), null;
        let Y = await JO(),
            J = null,
            W = null,
            {
                title: X,
                branchName: F
            } = await Qv5(B || Q || "Background task", G);
        if (Y) {
            let [y, v] = Y.split("/");
            if (y && v) J = {
                type: "git_repository",
                url: `https://github.com/${y}/${v}`,
                revision: A.branchName
            }, W = {
                type: "git_repository",
                git_info: {
                    type: "github",
                    repo: `${y}/${v}`,
                    branches: [F]
                }
            };
            else e(Error(`Invalid repository format: ${Y} - expected 'owner/name'`))
        }
        let V = await kJA();
        if (!V || V.length === 0) return e(Error("No environments available for session creation")), null;
        let D = c0()?.remote?.defaultEnvironmentId,
            H = V[0];
        if (D) {
            let y = V.find((v) => v.environment_id === D);
            if (y) H = y, g(`Using configured default environment: ${D}`);
            else g(`Configured default environment ${D} not found in available environments, using first available`)
        }
        if (!H) return e(Error("No environments available for session creation")), null;
        let C = H.environment_id;
        g(`Selected environment: ${C} (${H.name})`);
        let E = `${o9().BASE_API_URL}/v1/sessions`,
            z = {
                ...BC(Z),
                "x-organization-uuid": I
            },
            w = {
                sources: J ? [J] : [],
                outcomes: W ? [W] : [],
                model: S3()
            },
            N = Q ? [{
                type: "event",
                data: {
                    uuid: ox5(),
                    session_id: "",
                    type: "user",
                    parent_tool_use_id: null,
                    message: {
                        role: "user",
                        content: Q
                    }
                }
            }] : [],
            q = {
                title: X,
                events: N,
                session_context: w,
                environment_id: C
            };
        g(`Creating session with payload: ${JSON.stringify(q,null,2)}`);
        let R = await GQ.post(E, q, {
            headers: z,
            signal: G
        });
        if (R.status !== 200 && R.status !== 201) return e(Error(`API request failed with status ${R.status}: ${R.statusText}

Response data: ${JSON.stringify(R.data,null,2)}`)), null;
        let P = R.data;
        if (P && typeof P.id === "string") return g(`Successfully created remote session: ${P.id}`), {
            id: P.id,
            title: P.title || X
        };
        return e(Error(`Cannot determine session ID from API response: ${JSON.stringify(R.data)}`)), null
    } catch (Z) {
        let I = Z instanceof Error ? Z : Error(String(Z));
        return e(I), null
    }
}
var L80, Av5 = `You are coming up with a succinct title and git branch name for a coding session based on the provided description. The title should be clear, concise, and accurately reflect the content of the coding task.
You should keep it short and simple, ideally no more than 6 words. Avoid using jargon or overly technical terms unless absolutely necessary. The title should be easy to understand for anyone reading it.
You should wrap the title in <title> tags.

The branch name should be clear, concise, and accurately reflect the content of the coding task.
You should keep it short and simple, ideally no more than 4 words. The branch should always start with "claude/" and should be all lower case, with words separated by dashes.
You should wrap the branch name in <branch> tags.

The title should always come first, followed by the branch. Do not include any other text other than the title and branch.

Example 1:
<title>Fix login button not working on mobile</title>
<branch>claude/fix-mobile-login-button</branch>

Example 2:
<title>Update README with installation instructions</title>
<branch>claude/update-readme</branch>

Example 3:
<title>Improve performance of data processing script</title>
<branch>claude/improve-data-processing</branch>

Here is the session description:
<description>{description}</description>
Please generate a title and branch name for this session.`;
var W0A = L(() => {
    I6();
    ED();
    wYA();
    J9();
    $Z();
    D0();
    u1();
    hA();
    H9();
    N80();
    hB();
    pN();
    w3();
    EX();
    hB();
    Y0A();
    kZ();
    s2();
    w0();
    nQ();
    S0();
    An();
    X61();
    VT2();
    RB();
    L80 = GA(VA(), 1)
});
async function $T2() {
    let A = [],
        [Q, B, G, Z] = await Promise.all([F61(), IT2(), YT2(), JO()]);
    if (Q) A.push({
        type: "not_logged_in"
    });
    if (!B) A.push({
        type: "no_remote_environment"
    });
    if (!G) A.push({
        type: "not_in_git_repo"
    });
    if (Z) {
        let [I, Y] = Z.split("/");
        if (I && Y) {
            if (!await JT2(I, Y)) A.push({
                type: "github_app_not_installed"
            })
        }
    }
    return A
}
var wT2 = L(() => {
    w80();
    Y0A()
});

function NT2(A) {
    let Q = qT2.get(A);
    if (!Q) Q = I_(async (B, G, Z) => await Xv5(A, B, G, Z)), qT2.set(A, Q);
    return Q
}
async function Xv5(A, Q, B, G) {
    for (let Z = 1; Z <= H61; Z++) {
        try {
            let Y = R80.get(A),
                J = {
                    ...G
                };
            if (Y) J["Last-Uuid"] = Y;
            let W = await GQ.put(B, Q, {
                headers: J,
                validateStatus: (X) => X < 500
            });
            if (W.status === 200 || W.status === 201) return R80.set(A, Q.uuid), g(`Successfully persisted session log entry for session ${A}`), !0;
            if (W.status === 409) {
                let F = W.data.error?.message || "Concurrent modification detected";
                return e(Error(`Session persistence conflict: UUID mismatch for session ${A}, entry ${Q.uuid}. ${F}`)), R6("error", "session_persist_fail_concurrent_modification"), !1
            }
            if (W.status === 401) return g("Session token expired or invalid"), R6("error", "session_persist_fail_bad_token"), !1;
            g(`Failed to persist session log: ${W.status} ${W.statusText}`), R6("error", "session_persist_fail_status", {
                status: W.status,
                attempt: Z
            })
        } catch (Y) {
            let J = Y;
            e(Error(`Error persisting session log: ${J.message}`)), R6("error", "session_persist_fail_status", {
                status: J.status,
                attempt: Z
            })
        }
        if (Z === H61) return g(`Remote persistence failed after ${H61} attempts`), R6("error", "session_persist_error_retries_exhausted", {
            attempt: Z
        }), !1;
        let I = Math.min(Wv5 * Math.pow(2, Z - 1), 8000);
        g(`Remote persistence attempt ${Z}/${H61} failed, retrying in ${I}ms…`), await new Promise((Y) => setTimeout(Y, I))
    }
    return !1
}
async function LT2(A, Q, B) {
    let G = tAA();
    if (!G) return g("No session token available for session persistence"), R6("error", "session_persist_fail_jwt_no_token"), !1;
    let Z = {
        Authorization: `Bearer ${G}`,
        "Content-Type": "application/json"
    };
    return await NT2(A)(Q, B, Z)
}
async function MT2(A, Q) {
    try {
        let {
            accessToken: B,
            orgUUID: G
        } = await J0A(), Z = `${o9().BASE_API_URL}/v1/session_ingress/session/${A}`, I = {
            ...BC(B),
            "x-organization-uuid": G
        };
        return await NT2(A)(Q, Z, I)
    } catch (B) {
        return g(`Failed to get OAuth credentials: ${B instanceof Error?B.message:String(B)}`), R6("error", "session_persist_fail_oauth_no_token"), !1
    }
}
async function OT2(A, Q) {
    let B = tAA();
    if (!B) return g("No session token available for fetching session logs"), R6("error", "session_get_fail_no_token"), null;
    try {
        let G = await GQ.get(Q, {
            headers: {
                Authorization: `Bearer ${B}`
            },
            validateStatus: (Z) => Z < 500
        });
        if (G.status === 200) {
            let Z = G.data;
            if (!Z || typeof Z !== "object" || !Array.isArray(Z.loglines)) return e(Error(`Invalid session logs response format: ${JSON.stringify(Z)}`)), R6("error", "session_get_fail_invalid_response"), null;
            let I = Z.loglines;
            if (!O80.has(A)) O80.set(A, new Set);
            let Y = O80.get(A);
            for (let J of I)
                if ("uuid" in J && J.uuid) Y.add(J.uuid);
            if (Array.isArray(I) && I.length > 0) {
                let J = I[I.length - 1];
                if (J && "uuid" in J && J.uuid) R80.set(A, J.uuid)
            }
            return g(`Fetched ${I.length} session logs for session ${A}`), I
        }
        if (G.status === 404) return g(`No existing logs for session ${A}`), R6("warn", "session_get_no_logs_for_session"), [];
        if (G.status === 401) return g("Session token expired or invalid"), R6("error", "session_get_fail_bad_token"), null;
        return g(`Failed to fetch session logs: ${G.status} ${G.statusText}`), R6("error", "session_get_fail_status", {
            status: G.status
        }), null
    } catch (G) {
        let Z = G;
        return e(Error(`Error fetching session logs: ${Z.message}`)), R6("error", "session_get_fail_status", {
            status: Z.status
        }), null
    }
}
var R80, O80, H61 = 10,
    Wv5 = 500,
    qT2;
var T80 = L(() => {
    w3();
    u1();
    D0();
    OB1();
    EX();
    An();
    uIA();
    R80 = new Map, O80 = new Map, qT2 = new Map
});

function P80({
    issue: A,
    branchName: Q,
    onDone: B,
    color: G = "permission",
    loadingState: Z
}) {
    let {
        hasUncommitted: I,
        hasUnpushed: Y
    } = A, J = "";
    if (I && Y) J = `Uncommitted changes and unpushed commits detected on ${Q}`;
    else if (I) J = "Uncommitted changes detected";
    else J = `Unpushed commits detected on ${Q}`;

    function W(V) {
        B(V)
    }
    let X = I ? "Commit and push my changes" : "Push my changes",
        F = Z === "committing" ? "Committing…" : Z === "pushing" ? "Pushing…" : null;
    return fW.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: G,
        borderLeft: !1,
        borderRight: !1,
        borderBottom: !1,
        marginTop: 1
    }, fW.createElement(j, {
        paddingX: 1
    }, fW.createElement($, {
        color: G,
        bold: !0
    }, "Include local changes in the remote task?")), fW.createElement(j, {
        flexDirection: "column",
        paddingX: 1
    }, fW.createElement($, {
        dimColor: !0
    }, J), fW.createElement(j, {
        marginTop: 1
    }, F ? fW.createElement(j, {
        flexDirection: "row"
    }, fW.createElement(e9, null), fW.createElement($, null, F)) : fW.createElement(M0, {
        options: [{
            label: X,
            value: "commit-push"
        }, {
            label: "Run remote task without my local changes",
            value: "continue"
        }, {
            label: "Cancel",
            value: "cancel"
        }],
        onChange: W,
        onCancel: () => W("cancel"),
        layout: "compact-vertical"
    }))))
}
var fW;
var RT2 = L(() => {
    hA();
    T5();
    zI();
    fW = GA(VA(), 1)
});

function Vv5(A) {
    switch (A.type) {
        case "not_logged_in":
            return "Please run /login and sign in with your Claude.ai account (not Console).";
        case "no_remote_environment":
            return "No environments available, please ensure you've gone through onboarding at claude.ai/code";
        case "not_in_git_repo":
            return "Background tasks require a git repository. Initialize git or run from a git repository.";
        case "github_app_not_installed":
            return `The Claude GitHub app must be installed on this repository first.
https://github.com/apps/claude/installations/new`
    }
}
async function TT2(A, Q, B, G, Z, I) {
    BA("tengu_input_background", {}), I(!0);
    let Y = {
            text: `<background-task-input>${A}</background-task-input>`,
            type: "text"
        },
        J = j0({
            content: G$({
                inputString: Y.text,
                precedingInputBlocks: Q
            })
        });
    Z({
        jsx: VG.createElement(j, {
            flexDirection: "column"
        }, VG.createElement(R1A, {
            addMargin: !0,
            param: Y
        }), VG.createElement(y0, null, VG.createElement($, {
            dimColor: !0
        }, "Initializing session…"))),
        shouldHidePromptInput: !1
    });
    try {
        let W = await $T2();
        if (W.length > 0) {
            let q = W.map(Vv5).join(`

`);
            return {
                messages: [hF(), J, ...B, j0({
                    content: `<bash-stderr>Cannot launch remote Claude Code session.

${q}</bash-stderr>`
                })],
                shouldQuery: !1
            }
        }
        let X = await TGB(),
            F = await mb(),
            V = await Cf1(),
            K = X.commitsAheadOfDefaultBranch === 0;
        if ((X.hasUncommitted || X.hasUnpushed) && !K) {
            let q = await new Promise((R) => {
                Z({
                    jsx: VG.createElement(j, {
                        flexDirection: "column"
                    }, VG.createElement(R1A, {
                        addMargin: !0,
                        param: Y
                    }), VG.createElement(P80, {
                        issue: X,
                        branchName: F,
                        onDone: R,
                        color: "background"
                    })),
                    shouldHidePromptInput: !0
                })
            });
            if (q === "cancel") return {
                messages: [hF(), J, ...B, j0({
                    content: "<bash-stderr>Background task cancelled.</bash-stderr>"
                })],
                shouldQuery: !1
            };
            if (q === "commit-push") {
                let R = (v) => {
                    Z({
                        jsx: VG.createElement(j, {
                            flexDirection: "column"
                        }, VG.createElement(R1A, {
                            addMargin: !0,
                            param: Y
                        }), VG.createElement(P80, {
                            issue: X,
                            branchName: F,
                            onDone: () => {},
                            color: "background",
                            loadingState: v
                        })),
                        shouldHidePromptInput: !0
                    })
                };
                if (X.hasUncommitted) R("committing");
                else R("pushing");
                let P = `Background task: ${A.slice(0,60)}${A.length>60?"...":""}`,
                    y = await PGB(P, (v) => {
                        R(v)
                    });
                if (!y.success) return {
                    messages: [hF(), J, ...B, j0({
                        content: `<bash-stderr>Failed to commit and push changes:
${y.error}</bash-stderr>`
                    })],
                    shouldQuery: !1
                }
            }
        }
        let D = yJA(),
            H = [];
        try {
            H = await ss(D)
        } catch (q) {
            g(`Could not read transcript file: ${q instanceof Error?q.message:String(q)}`)
        }
        let C = H.filter(S80);
        Z({
            jsx: VG.createElement(j, {
                flexDirection: "column"
            }, VG.createElement(R1A, {
                addMargin: !0,
                param: Y
            }), VG.createElement(y0, null, VG.createElement($, {
                dimColor: !0
            }, "Creating background task…"))),
            shouldHidePromptInput: !1
        });
        let E = X.commitsAheadOfDefaultBranch === 0 ? V : F,
            z = await M80({
                initialMessage: null,
                branchName: E,
                description: A,
                signal: G.abortController.signal
            });
        if (!z) throw Error("Failed to create remote session");
        if (C.length > 0)
            for (let q = 0; q < C.length; q++) {
                let R = C[q];
                if (!R) continue;
                if (!await MT2(z.id, R)) throw Error(`Failed to upload session history (message ${q+1}/${C.length})`)
            }
        if (!await GT2(z.id, A)) throw Error("Failed to send user task message to remote session");
        G.setAppState((q) => ({
            ...q,
            backgroundTasks: {
                ...q.backgroundTasks,
                [z.id]: {
                    id: z.id,
                    command: A,
                    startTime: Date.now(),
                    status: "starting",
                    todoList: [],
                    title: z.title,
                    type: "remote_session",
                    deltaSummarySinceLastFlushToAttachment: null,
                    log: []
                }
            }
        }));
        let N = `https://claude.ai/code/${z.id}`;
        return {
            messages: [hF(), J, ...B, j0({
                content: `<background-task-output>This task is now running in the background.
Monitor it with /tasks or at ${N}

Or, resume it later with: claude --teleport ${z.id}</background-task-output>`
            })],
            shouldQuery: !1
        }
    } catch (W) {
        let X = W instanceof Error ? W.message : String(W);
        return {
            messages: [hF(), J, ...B, j0({
                content: `<bash-stderr>Failed to create background session: ${X}. Try running /login and signing in with a claude.ai account (not Console).</bash-stderr>`
            })],
            shouldQuery: !1
        }
    } finally {
        Z(null)
    }
}
async function PT2(A, Q, B, G, Z) {
    let I = BZ(A);
    if (!I.length) return null;
    return Ui(await Ky({
        messages: [...I, ...BZ([j0({
            content: t21()
        })])],
        systemPrompt: ["You are a helpful AI assistant tasked with summarizing conversations."],
        maxThinkingTokens: 0,
        tools: [d8],
        signal: Q,
        options: {
            getToolPermissionContext: B,
            model: S3(),
            toolChoice: void 0,
            isNonInteractiveSession: G,
            hasAppendSystemPrompt: Z,
            maxOutputTokensOverride: o_A,
            querySource: "summarize_for_background_task",
            agents: [],
            mcpTools: [],
            agentIdOrSessionId: G0()
        }
    }))
}
var VG;
var j80 = L(() => {
    w0();
    nQ();
    hA();
    u00();
    u8();
    W0A();
    An();
    wT2();
    T80();
    D0();
    GG();
    zV();
    kZ();
    Kq();
    s2();
    ED();
    RT2();
    S0();
    VG = GA(VA(), 1)
});

function C61({
    param: {
        text: A
    },
    addMargin: Q
}) {
    let B = e2(A, "bash-input");
    if (!B) return null;
    return vh.createElement(j, {
        flexDirection: "column",
        marginTop: Q ? 1 : 0,
        width: "100%"
    }, vh.createElement(j, null, vh.createElement($, {
        backgroundColor: "bashMessageBackgroundColor",
        color: "bashBorder"
    }, "!"), vh.createElement($, {
        backgroundColor: "bashMessageBackgroundColor",
        color: "text"
    }, " ", B, " ")))
}
var vh;
var _80 = L(() => {
    hA();
    nQ();
    vh = GA(VA(), 1)
});

function k80({
    input: A,
    progress: Q,
    verbose: B
}) {
    return E61.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, E61.default.createElement(C61, {
        addMargin: !1,
        param: {
            text: `<bash-input>${A}</bash-input>`,
            type: "text"
        }
    }), Q ? E61.default.createElement($21, {
        fullOutput: Q.fullOutput,
        output: Q.output,
        elapsedTimeSeconds: Q.elapsedTimeSeconds,
        totalLines: Q.totalLines,
        verbose: B
    }) : X9.renderToolUseProgressMessage([], {
        verbose: B,
        tools: [],
        terminalSize: void 0
    }))
}
var E61;
var jT2 = L(() => {
    hA();
    _80();
    f10();
    nV();
    E61 = GA(VA(), 1)
});
async function ST2(A, Q, B, G, Z, I) {
    BA("tengu_input_bash", {}), I(!0);
    let Y = j0({
            content: G$({
                inputString: `<bash-input>${A}</bash-input>`,
                precedingInputBlocks: Q
            })
        }),
        J;
    Z({
        jsx: Dy.createElement(k80, {
            input: A,
            progress: null,
            verbose: G.options.verbose
        }),
        shouldHidePromptInput: !1
    });
    try {
        let W = {
                ...G,
                setToolJSX: (D) => {
                    J = D?.jsx
                }
            },
            F = (await X9.call({
                command: A,
                dangerouslyDisableSandbox: !0
            }, W, void 0, void 0, (D) => {
                Z({
                    jsx: Dy.createElement(Dy.Fragment, null, Dy.createElement(k80, {
                        input: A,
                        progress: D.data,
                        verbose: G.options.verbose
                    }), J),
                    shouldHidePromptInput: !1,
                    showSpinner: !1
                })
            })).data;
        if (!F) throw Error("No result received from bash command");
        let V = F.stderr,
            K = await G.getAppState();
        if (EoA(K.toolPermissionContext)) V = CoA(V);
        return {
            messages: [hF(), Y, ...B, j0({
                content: `<bash-stdout>${F.stdout}</bash-stdout><bash-stderr>${V}</bash-stderr>`
            })],
            shouldQuery: !1
        }
    } catch (W) {
        if (W instanceof oj) {
            if (W.interrupted) return {
                messages: [hF(), Y, j0({
                    content: xJA
                }), ...B],
                shouldQuery: !1
            };
            return {
                messages: [hF(), Y, ...B, j0({
                    content: `<bash-stdout>${W.stdout}</bash-stdout><bash-stderr>${W.stderr}</bash-stderr>`
                })],
                shouldQuery: !1
            }
        }
        return {
            messages: [hF(), Y, ...B, j0({
                content: `<bash-stderr>Command failed: ${W instanceof Error?W.message:String(W)}</bash-stderr>`
            })],
            shouldQuery: !1
        }
    } finally {
        Z(null)
    }
}
var Dy;
var _T2 = L(() => {
    w0();
    nQ();
    nQ();
    jT2();
    nV();
    yp();
    yp();
    $Z();
    Dy = GA(VA(), 1)
});

function vJA(A) {
    let Q = A.trim();
    if (!Q.startsWith("/")) return null;
    let G = Q.slice(1).split(" ");
    if (!G[0]) return null;
    let Z = G[0],
        I = !1,
        Y = 1;
    if (G.length > 1 && G[1] === "(MCP)") Z = Z + " (MCP)", I = !0, Y = 2;
    let J = G.slice(Y).join(" ");
    return {
        commandName: Z,
        args: J,
        isMcp: I
    }
}

function Kv5() {
    return V0(process.env.OTEL_LOG_USER_PROMPTS)
}

function z61(A) {
    return Kv5() ? A : "<REDACTED>"
}
async function WO(A, Q = {}) {
    let B = HE0();
    if (!B) return;
    let G = {
        ...zJA(),
        "event.name": A,
        "event.timestamp": new Date().toISOString()
    };
    for (let [Z, I] of Object.entries(Q))
        if (I !== void 0) G[Z] = I;
    B.emit({
        body: `claude_code.${A}`,
        attributes: G
    })
}
var bJA = L(() => {
    S0();
    _81();
    hQ()
});
var fJA = U((xT2) => {
    Object.defineProperty(xT2, "__esModule", {
        value: !0
    });
    xT2.stringArray = xT2.array = xT2.func = xT2.error = xT2.number = xT2.string = xT2.boolean = void 0;

    function Dv5(A) {
        return A === !0 || A === !1
    }
    xT2.boolean = Dv5;

    function kT2(A) {
        return typeof A === "string" || A instanceof String
    }
    xT2.string = kT2;

    function Hv5(A) {
        return typeof A === "number" || A instanceof Number
    }
    xT2.number = Hv5;

    function Cv5(A) {
        return A instanceof Error
    }
    xT2.error = Cv5;

    function Ev5(A) {
        return typeof A === "function"
    }
    xT2.func = Ev5;

    function yT2(A) {
        return Array.isArray(A)
    }
    xT2.array = yT2;

    function zv5(A) {
        return yT2(A) && A.every((Q) => kT2(Q))
    }
    xT2.stringArray = zv5
});
var v80 = U((IP2) => {
    Object.defineProperty(IP2, "__esModule", {
        value: !0
    });
    IP2.Message = IP2.NotificationType9 = IP2.NotificationType8 = IP2.NotificationType7 = IP2.NotificationType6 = IP2.NotificationType5 = IP2.NotificationType4 = IP2.NotificationType3 = IP2.NotificationType2 = IP2.NotificationType1 = IP2.NotificationType0 = IP2.NotificationType = IP2.RequestType9 = IP2.RequestType8 = IP2.RequestType7 = IP2.RequestType6 = IP2.RequestType5 = IP2.RequestType4 = IP2.RequestType3 = IP2.RequestType2 = IP2.RequestType1 = IP2.RequestType = IP2.RequestType0 = IP2.AbstractMessageSignature = IP2.ParameterStructures = IP2.ResponseError = IP2.ErrorCodes = void 0;
    var X0A = fJA(),
        y80;
    (function(A) {
        A.ParseError = -32700, A.InvalidRequest = -32600, A.MethodNotFound = -32601, A.InvalidParams = -32602, A.InternalError = -32603, A.jsonrpcReservedErrorRangeStart = -32099, A.serverErrorStart = -32099, A.MessageWriteError = -32099, A.MessageReadError = -32098, A.PendingResponseRejected = -32097, A.ConnectionInactive = -32096, A.ServerNotInitialized = -32002, A.UnknownErrorCode = -32001, A.jsonrpcReservedErrorRangeEnd = -32000, A.serverErrorEnd = -32000
    })(y80 || (IP2.ErrorCodes = y80 = {}));
    class x80 extends Error {
        constructor(A, Q, B) {
            super(Q);
            this.code = X0A.number(A) ? A : y80.UnknownErrorCode, this.data = B, Object.setPrototypeOf(this, x80.prototype)
        }
        toJson() {
            let A = {
                code: this.code,
                message: this.message
            };
            if (this.data !== void 0) A.data = this.data;
            return A
        }
    }
    IP2.ResponseError = x80;
    class GC {
        constructor(A) {
            this.kind = A
        }
        static is(A) {
            return A === GC.auto || A === GC.byName || A === GC.byPosition
        }
        toString() {
            return this.kind
        }
    }
    IP2.ParameterStructures = GC;
    GC.auto = new GC("auto");
    GC.byPosition = new GC("byPosition");
    GC.byName = new GC("byName");
    class XY {
        constructor(A, Q) {
            this.method = A, this.numberOfParams = Q
        }
        get parameterStructures() {
            return GC.auto
        }
    }
    IP2.AbstractMessageSignature = XY;
    class fT2 extends XY {
        constructor(A) {
            super(A, 0)
        }
    }
    IP2.RequestType0 = fT2;
    class hT2 extends XY {
        constructor(A, Q = GC.auto) {
            super(A, 1);
            this._parameterStructures = Q
        }
        get parameterStructures() {
            return this._parameterStructures
        }
    }
    IP2.RequestType = hT2;
    class gT2 extends XY {
        constructor(A, Q = GC.auto) {
            super(A, 1);
            this._parameterStructures = Q
        }
        get parameterStructures() {
            return this._parameterStructures
        }
    }
    IP2.RequestType1 = gT2;
    class uT2 extends XY {
        constructor(A) {
            super(A, 2)
        }
    }
    IP2.RequestType2 = uT2;
    class mT2 extends XY {
        constructor(A) {
            super(A, 3)
        }
    }
    IP2.RequestType3 = mT2;
    class dT2 extends XY {
        constructor(A) {
            super(A, 4)
        }
    }
    IP2.RequestType4 = dT2;
    class cT2 extends XY {
        constructor(A) {
            super(A, 5)
        }
    }
    IP2.RequestType5 = cT2;
    class pT2 extends XY {
        constructor(A) {
            super(A, 6)
        }
    }
    IP2.RequestType6 = pT2;
    class lT2 extends XY {
        constructor(A) {
            super(A, 7)
        }
    }
    IP2.RequestType7 = lT2;
    class iT2 extends XY {
        constructor(A) {
            super(A, 8)
        }
    }
    IP2.RequestType8 = iT2;
    class nT2 extends XY {
        constructor(A) {
            super(A, 9)
        }
    }
    IP2.RequestType9 = nT2;
    class aT2 extends XY {
        constructor(A, Q = GC.auto) {
            super(A, 1);
            this._parameterStructures = Q
        }
        get parameterStructures() {
            return this._parameterStructures
        }
    }
    IP2.NotificationType = aT2;
    class sT2 extends XY {
        constructor(A) {
            super(A, 0)
        }
    }
    IP2.NotificationType0 = sT2;
    class rT2 extends XY {
        constructor(A, Q = GC.auto) {
            super(A, 1);
            this._parameterStructures = Q
        }
        get parameterStructures() {
            return this._parameterStructures
        }
    }
    IP2.NotificationType1 = rT2;
    class oT2 extends XY {
        constructor(A) {
            super(A, 2)
        }
    }
    IP2.NotificationType2 = oT2;
    class tT2 extends XY {
        constructor(A) {
            super(A, 3)
        }
    }
    IP2.NotificationType3 = tT2;
    class eT2 extends XY {
        constructor(A) {
            super(A, 4)
        }
    }
    IP2.NotificationType4 = eT2;
    class AP2 extends XY {
        constructor(A) {
            super(A, 5)
        }
    }
    IP2.NotificationType5 = AP2;
    class QP2 extends XY {
        constructor(A) {
            super(A, 6)
        }
    }
    IP2.NotificationType6 = QP2;
    class BP2 extends XY {
        constructor(A) {
            super(A, 7)
        }
    }
    IP2.NotificationType7 = BP2;
    class GP2 extends XY {
        constructor(A) {
            super(A, 8)
        }
    }
    IP2.NotificationType8 = GP2;
    class ZP2 extends XY {
        constructor(A) {
            super(A, 9)
        }
    }
    IP2.NotificationType9 = ZP2;
    var bT2;
    (function(A) {
        function Q(Z) {
            let I = Z;
            return I && X0A.string(I.method) && (X0A.string(I.id) || X0A.number(I.id))
        }
        A.isRequest = Q;

        function B(Z) {
            let I = Z;
            return I && X0A.string(I.method) && Z.id === void 0
        }
        A.isNotification = B;

        function G(Z) {
            let I = Z;
            return I && (I.result !== void 0 || !!I.error) && (X0A.string(I.id) || X0A.number(I.id) || I.id === null)
        }
        A.isResponse = G
    })(bT2 || (IP2.Message = bT2 = {}))
});
var f80 = U((XP2) => {
    var JP2;
    Object.defineProperty(XP2, "__esModule", {
        value: !0
    });
    XP2.LRUCache = XP2.LinkedMap = XP2.Touch = void 0;
    var ZC;
    (function(A) {
        A.None = 0, A.First = 1, A.AsOld = A.First, A.Last = 2, A.AsNew = A.Last
    })(ZC || (XP2.Touch = ZC = {}));
    class b80 {
        constructor() {
            this[JP2] = "LinkedMap", this._map = new Map, this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0
        }
        clear() {
            this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++
        }
        isEmpty() {
            return !this._head && !this._tail
        }
        get size() {
            return this._size
        }
        get first() {
            return this._head?.value
        }
        get last() {
            return this._tail?.value
        }
        has(A) {
            return this._map.has(A)
        }
        get(A, Q = ZC.None) {
            let B = this._map.get(A);
            if (!B) return;
            if (Q !== ZC.None) this.touch(B, Q);
            return B.value
        }
        set(A, Q, B = ZC.None) {
            let G = this._map.get(A);
            if (G) {
                if (G.value = Q, B !== ZC.None) this.touch(G, B)
            } else {
                switch (G = {
                        key: A,
                        value: Q,
                        next: void 0,
                        previous: void 0
                    }, B) {
                    case ZC.None:
                        this.addItemLast(G);
                        break;
                    case ZC.First:
                        this.addItemFirst(G);
                        break;
                    case ZC.Last:
                        this.addItemLast(G);
                        break;
                    default:
                        this.addItemLast(G);
                        break
                }
                this._map.set(A, G), this._size++
            }
            return this
        }
        delete(A) {
            return !!this.remove(A)
        }
        remove(A) {
            let Q = this._map.get(A);
            if (!Q) return;
            return this._map.delete(A), this.removeItem(Q), this._size--, Q.value
        }
        shift() {
            if (!this._head && !this._tail) return;
            if (!this._head || !this._tail) throw Error("Invalid list");
            let A = this._head;
            return this._map.delete(A.key), this.removeItem(A), this._size--, A.value
        }
        forEach(A, Q) {
            let B = this._state,
                G = this._head;
            while (G) {
                if (Q) A.bind(Q)(G.value, G.key, this);
                else A(G.value, G.key, this);
                if (this._state !== B) throw Error("LinkedMap got modified during iteration.");
                G = G.next
            }
        }
        keys() {
            let A = this._state,
                Q = this._head,
                B = {
                    [Symbol.iterator]: () => {
                        return B
                    },
                    next: () => {
                        if (this._state !== A) throw Error("LinkedMap got modified during iteration.");
                        if (Q) {
                            let G = {
                                value: Q.key,
                                done: !1
                            };
                            return Q = Q.next, G
                        } else return {
                            value: void 0,
                            done: !0
                        }
                    }
                };
            return B
        }
        values() {
            let A = this._state,
                Q = this._head,
                B = {
                    [Symbol.iterator]: () => {
                        return B
                    },
                    next: () => {
                        if (this._state !== A) throw Error("LinkedMap got modified during iteration.");
                        if (Q) {
                            let G = {
                                value: Q.value,
                                done: !1
                            };
                            return Q = Q.next, G
                        } else return {
                            value: void 0,
                            done: !0
                        }
                    }
                };
            return B
        }
        entries() {
            let A = this._state,
                Q = this._head,
                B = {
                    [Symbol.iterator]: () => {
                        return B
                    },
                    next: () => {
                        if (this._state !== A) throw Error("LinkedMap got modified during iteration.");
                        if (Q) {
                            let G = {
                                value: [Q.key, Q.value],
                                done: !1
                            };
                            return Q = Q.next, G
                        } else return {
                            value: void 0,
                            done: !0
                        }
                    }
                };
            return B
        } [(JP2 = Symbol.toStringTag, Symbol.iterator)]() {
            return this.entries()
        }
        trimOld(A) {
            if (A >= this.size) return;
            if (A === 0) {
                this.clear();
                return
            }
            let Q = this._head,
                B = this.size;
            while (Q && B > A) this._map.delete(Q.key), Q = Q.next, B--;
            if (this._head = Q, this._size = B, Q) Q.previous = void 0;
            this._state++
        }
        addItemFirst(A) {
            if (!this._head && !this._tail) this._tail = A;
            else if (!this._head) throw Error("Invalid list");
            else A.next = this._head, this._head.previous = A;
            this._head = A, this._state++
        }
        addItemLast(A) {
            if (!this._head && !this._tail) this._head = A;
            else if (!this._tail) throw Error("Invalid list");
            else A.previous = this._tail, this._tail.next = A;
            this._tail = A, this._state++
        }
        removeItem(A) {
            if (A === this._head && A === this._tail) this._head = void 0, this._tail = void 0;
            else if (A === this._head) {
                if (!A.next) throw Error("Invalid list");
                A.next.previous = void 0, this._head = A.next
            } else if (A === this._tail) {
                if (!A.previous) throw Error("Invalid list");
                A.previous.next = void 0, this._tail = A.previous
            } else {
                let {
                    next: Q,
                    previous: B
                } = A;
                if (!Q || !B) throw Error("Invalid list");
                Q.previous = B, B.next = Q
            }
            A.next = void 0, A.previous = void 0, this._state++
        }
        touch(A, Q) {
            if (!this._head || !this._tail) throw Error("Invalid list");
            if (Q !== ZC.First && Q !== ZC.Last) return;
            if (Q === ZC.First) {
                if (A === this._head) return;
                let {
                    next: B,
                    previous: G
                } = A;
                if (A === this._tail) G.next = void 0, this._tail = G;
                else B.previous = G, G.next = B;
                A.previous = void 0, A.next = this._head, this._head.previous = A, this._head = A, this._state++
            } else if (Q === ZC.Last) {
                if (A === this._tail) return;
                let {
                    next: B,
                    previous: G
                } = A;
                if (A === this._head) B.previous = void 0, this._head = B;
                else B.previous = G, G.next = B;
                A.next = void 0, A.previous = this._tail, this._tail.next = A, this._tail = A, this._state++
            }
        }
        toJSON() {
            let A = [];
            return this.forEach((Q, B) => {
                A.push([B, Q])
            }), A
        }
        fromJSON(A) {
            this.clear();
            for (let [Q, B] of A) this.set(Q, B)
        }
    }
    XP2.LinkedMap = b80;
    class WP2 extends b80 {
        constructor(A, Q = 1) {
            super();
            this._limit = A, this._ratio = Math.min(Math.max(0, Q), 1)
        }
        get limit() {
            return this._limit
        }
        set limit(A) {
            this._limit = A, this.checkTrim()
        }
        get ratio() {
            return this._ratio
        }
        set ratio(A) {
            this._ratio = Math.min(Math.max(0, A), 1), this.checkTrim()
        }
        get(A, Q = ZC.AsNew) {
            return super.get(A, Q)
        }
        peek(A) {
            return super.get(A, ZC.None)
        }
        set(A, Q) {
            return super.set(A, Q, ZC.Last), this.checkTrim(), this
        }
        checkTrim() {
            if (this.size > this._limit) this.trimOld(Math.round(this._limit * this._ratio))
        }
    }
    XP2.LRUCache = WP2
});
var HP2 = U((KP2) => {
    Object.defineProperty(KP2, "__esModule", {
        value: !0
    });
    KP2.Disposable = void 0;
    var VP2;
    (function(A) {
        function Q(B) {
            return {
                dispose: B
            }
        }
        A.create = Q
    })(VP2 || (KP2.Disposable = VP2 = {}))
});
var Qn = U((CP2) => {
    Object.defineProperty(CP2, "__esModule", {
        value: !0
    });
    var h80;

    function g80() {
        if (h80 === void 0) throw Error("No runtime abstraction layer installed");
        return h80
    }(function(A) {
        function Q(B) {
            if (B === void 0) throw Error("No runtime abstraction layer provided");
            h80 = B
        }
        A.install = Q
    })(g80 || (g80 = {}));
    CP2.default = g80
});
var hJA = U((UP2) => {
    Object.defineProperty(UP2, "__esModule", {
        value: !0
    });
    UP2.Emitter = UP2.Event = void 0;
    var ev5 = Qn(),
        EP2;
    (function(A) {
        let Q = {
            dispose() {}
        };
        A.None = function() {
            return Q
        }
    })(EP2 || (UP2.Event = EP2 = {}));
    class zP2 {
        add(A, Q = null, B) {
            if (!this._callbacks) this._callbacks = [], this._contexts = [];
            if (this._callbacks.push(A), this._contexts.push(Q), Array.isArray(B)) B.push({
                dispose: () => this.remove(A, Q)
            })
        }
        remove(A, Q = null) {
            if (!this._callbacks) return;
            let B = !1;
            for (let G = 0, Z = this._callbacks.length; G < Z; G++)
                if (this._callbacks[G] === A)
                    if (this._contexts[G] === Q) {
                        this._callbacks.splice(G, 1), this._contexts.splice(G, 1);
                        return
                    } else B = !0;
            if (B) throw Error("When adding a listener with a context, you should remove it with the same context")
        }
        invoke(...A) {
            if (!this._callbacks) return [];
            let Q = [],
                B = this._callbacks.slice(0),
                G = this._contexts.slice(0);
            for (let Z = 0, I = B.length; Z < I; Z++) try {
                Q.push(B[Z].apply(G[Z], A))
            } catch (Y) {
                (0, ev5.default)().console.error(Y)
            }
            return Q
        }
        isEmpty() {
            return !this._callbacks || this._callbacks.length === 0
        }
        dispose() {
            this._callbacks = void 0, this._contexts = void 0
        }
    }
    class U61 {
        constructor(A) {
            this._options = A
        }
        get event() {
            if (!this._event) this._event = (A, Q, B) => {
                if (!this._callbacks) this._callbacks = new zP2;
                if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) this._options.onFirstListenerAdd(this);
                this._callbacks.add(A, Q);
                let G = {
                    dispose: () => {
                        if (!this._callbacks) return;
                        if (this._callbacks.remove(A, Q), G.dispose = U61._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) this._options.onLastListenerRemove(this)
                    }
                };
                if (Array.isArray(B)) B.push(G);
                return G
            };
            return this._event
        }
        fire(A) {
            if (this._callbacks) this._callbacks.invoke.call(this._callbacks, A)
        }
        dispose() {
            if (this._callbacks) this._callbacks.dispose(), this._callbacks = void 0
        }
    }
    UP2.Emitter = U61;
    U61._noop = function() {}
});
var w61 = U((qP2) => {
    Object.defineProperty(qP2, "__esModule", {
        value: !0
    });
    qP2.CancellationTokenSource = qP2.CancellationToken = void 0;
    var Qb5 = Qn(),
        Bb5 = fJA(),
        u80 = hJA(),
        $61;
    (function(A) {
        A.None = Object.freeze({
            isCancellationRequested: !1,
            onCancellationRequested: u80.Event.None
        }), A.Cancelled = Object.freeze({
            isCancellationRequested: !0,
            onCancellationRequested: u80.Event.None
        });

        function Q(B) {
            let G = B;
            return G && (G === A.None || G === A.Cancelled || Bb5.boolean(G.isCancellationRequested) && !!G.onCancellationRequested)
        }
        A.is = Q
    })($61 || (qP2.CancellationToken = $61 = {}));
    var Gb5 = Object.freeze(function(A, Q) {
        let B = (0, Qb5.default)().timer.setTimeout(A.bind(Q), 0);
        return {
            dispose() {
                B.dispose()
            }
        }
    });
    class m80 {
        constructor() {
            this._isCancelled = !1
        }
        cancel() {
            if (!this._isCancelled) {
                if (this._isCancelled = !0, this._emitter) this._emitter.fire(void 0), this.dispose()
            }
        }
        get isCancellationRequested() {
            return this._isCancelled
        }
        get onCancellationRequested() {
            if (this._isCancelled) return Gb5;
            if (!this._emitter) this._emitter = new u80.Emitter;
            return this._emitter.event
        }
        dispose() {
            if (this._emitter) this._emitter.dispose(), this._emitter = void 0
        }
    }
    class wP2 {
        get token() {
            if (!this._token) this._token = new m80;
            return this._token
        }
        cancel() {
            if (!this._token) this._token = $61.Cancelled;
            else this._token.cancel()
        }
        dispose() {
            if (!this._token) this._token = $61.None;
            else if (this._token instanceof m80) this._token.dispose()
        }
    }
    qP2.CancellationTokenSource = wP2
});