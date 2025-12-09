/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: agents_012.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (20次) = lazyLoader(fn) - Lazy module loader
 *   R5       (7次) = EDIT_TOOL_NAME = "Edit"
 *   GA       (6次) = esmImport(module) - ESM import helper
 *   pG       (1次) = esmExport(obj, key) - ESM export binding
 *   UA       (1次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 12/13
 * Lines: 441179 - 442678 (1500 lines)
 * Original file: cli.js
 */

    else if (typeof G.description === "function") try {
        Z = await G.description({}, {
            isNonInteractiveSession: !0,
            toolPermissionContext: DE(),
            tools: []
        }) || ""
    } catch {}
    return {
        server: Q,
        name: B,
        fullName: G.name,
        description: Z,
        inputSchema: G.inputJSONSchema || {}
    }
}
var TK0 = () => {};

function XJ1(A, {
    pattern: Q,
    ignoreCase: B
}) {
    let G;
    try {
        G = new RegExp(Q, B ? "i" : "")
    } catch (Y) {
        throw Error(`Invalid regex pattern: ${Y instanceof Error?Y.message:String(Y)}`)
    }
    let Z = A.filter((Y) => Y.name.startsWith("mcp__")),
        I = [];
    for (let Y of Z) {
        let J = FU(Y.name),
            W = J?.serverName || "unknown",
            X = J?.toolName || Y.name,
            F = typeof Y.description === "string" ? Y.description : "";
        if (G.test(X) || G.test(F)) I.push({
            server: W,
            name: X,
            fullName: Y.name,
            description: F
        })
    }
    return I
}
var PK0 = L(() => {
    xX()
});

function FJ1(A, Q, B) {
    let G = Q?.server;
    if (G) {
        let Z = A[G] || [],
            I = G;
        if (Z.length === 0 && B) {
            let Y = B[G];
            if (Y && A[Y]) Z = A[Y], I = Y
        }
        return Z.map((Y) => ({
            ...Y,
            server: v7(I)
        }))
    }
    return Object.entries(A).flatMap(([Z, I]) => I.map((Y) => ({
        ...Y,
        server: v7(Z)
    })))
}
var jK0 = () => {};
var fv3, cC9, hv3, pC9, gv3, lC9, uv3, mv3, iC9, dv3, nC9, cv3, aC9;
var SK0 = L(() => {
    h2();
    PD();
    fv3 = _.object({
        command: _.literal("servers")
    }), cC9 = _.array(_.object({
        name: _.string(),
        type: _.string(),
        hasTools: _.boolean().optional(),
        hasResources: _.boolean().optional(),
        hasPrompts: _.boolean().optional(),
        serverInfo: _.object({
            name: _.string(),
            version: _.string()
        }).optional()
    })), hv3 = _.object({
        command: _.literal("tools"),
        params: _.object({
            server: _.string().optional()
        }).optional()
    }), pC9 = _.array(_.object({
        server: _.string(),
        name: _.string(),
        description: _.string().optional(),
        fullName: _.string()
    })), gv3 = _.object({
        command: _.literal("info"),
        params: _.object({
            server: _.string(),
            toolName: _.string()
        })
    }), lC9 = _.object({
        server: _.string(),
        name: _.string(),
        fullName: _.string(),
        description: _.string(),
        inputSchema: _.record(_.unknown())
    }).or(_.null()), uv3 = _.object({
        command: _.literal("call"),
        params: _.object({
            server: _.string(),
            tool: _.string(),
            args: _.record(_.unknown()),
            timeoutMs: _.number().optional()
        })
    }), mv3 = _.object({
        command: _.literal("grep"),
        params: _.object({
            pattern: _.string(),
            ignoreCase: _.boolean().optional()
        })
    }), iC9 = _.array(_.object({
        server: _.string(),
        name: _.string(),
        fullName: _.string(),
        description: _.string()
    })), dv3 = _.object({
        command: _.literal("resources"),
        params: _.object({
            server: _.string().optional()
        }).optional()
    }), nC9 = _.array(_.object({
        uri: _.string(),
        name: _.string().optional(),
        description: _.string().optional(),
        mimeType: _.string().optional(),
        server: _.string()
    })), cv3 = _.object({
        command: _.literal("read"),
        params: _.object({
            server: _.string(),
            uri: _.string(),
            timeoutMs: _.number().optional()
        })
    }), aC9 = _.discriminatedUnion("command", [fv3, hv3, gv3, uv3, mv3, dv3, cv3])
});
import {
    join as pv3
} from "path";
import {
    writeFileSync as lv3,
    readFileSync as iv3,
    mkdirSync as nv3
} from "fs";

function VJ1() {
    let A = EFA();
    return pv3(cg(), `${A}.endpoint`)
}

function KJ1(A) {
    if (A) _K0 = A;
    if (!_K0) return;
    nv3(cg(), {
        recursive: !0
    });
    let Q = VJ1(),
        B = Buffer.from(JSON.stringify(_K0)).toString("base64");
    lv3(Q, B, {
        mode: 384
    })
}

function sC9() {
    let A = VJ1();
    try {
        let Q = iv3(A, "utf-8");
        return JSON.parse(Buffer.from(Q, "base64").toString("utf-8"))
    } catch {
        return null
    }
}
var _K0 = null;
var DJ1 = L(() => {
    zFA()
});

function $SA(A, Q, B) {
    let G = A.find((I) => I.name === Q);
    if (G) return G;
    let Z = B?.[Q];
    if (Z) return A.find((I) => I.name === Z);
    return
}

function gQA(A, Q) {
    if (!Q) return Error(`Server '${A}' not found`);
    if (Q !== "connected") return Error(`Server '${A}' is not connected (${Q==="needs-auth"?"needs authentication":Q}). Run '/mcp' to manage server connections.`);
    return null
}
var QE9 = {};
pG(QE9, {
    ripgrepMain: () => Ib3
});
import {
    createRequire as Qb3
} from "module";
import {
    fileURLToPath as Bb3
} from "url";
import {
    dirname as Gb3,
    join as Zb3
} from "path";

function Ib3(A) {
    let Q;
    if (process.env.RIPGREP_NODE_PATH) Q = UA(process.env.RIPGREP_NODE_PATH).ripgrepMain;
    else {
        let B = Zb3(Gb3(Bb3(import.meta.url)), "ripgrep.node");
        Q = Qb3(import.meta.url)(B).ripgrepMain
    }
    return Q(["--no-config", ...A])
}
var BE9 = () => {};
import {
    posix as GE9,
    win32 as ZE9
} from "path";

function Yb3() {
    let A = process.argv[1] || "",
        Q = process.execPath || process.argv[0] || "";
    if (uQ() === "windows") A = A.split(ZE9.sep).join(GE9.sep), Q = Q.split(ZE9.sep).join(GE9.sep);
    let B = [A, Q],
        G = ["/build-ant/", "/build-external/", "/build-external-native/", "/build-ant-native/"];
    return B.some((Z) => G.some((I) => Z.includes(I)))
}

function Wb3(A) {
    let Q = `${A.name}: ${A.message}`;
    return Jb3.some((B) => B.test(Q))
}

function YE9() {
    let A = process.listeners("warning");
    if (HJ1 && A.includes(HJ1)) return;
    if (!Yb3()) process.removeAllListeners("warning");
    HJ1 = (B) => {
        try {
            let G = `${B.name}: ${B.message.slice(0,50)}`,
                Z = IE9.get(G) || 0;
            IE9.set(G, Z + 1);
            let I = Wb3(B);
            if (BA("tengu_node_warning", {
                    is_internal: I ? 1 : 0,
                    occurrence_count: Z + 1,
                    classname: B.name,
                    ...!1
                }), process.env.CLAUDE_DEBUG === "true") g(`${I?"[Internal Warning]":"[Warning]"} ${B.toString()}`, {
                level: "warn"
            })
        } catch {}
    }, process.on("warning", HJ1)
}
var IE9, Jb3, HJ1 = null;
var JE9 = L(() => {
    w0();
    D0();
    s5();
    IE9 = new Map;
    Jb3 = [/MaxListenersExceededWarning.*AbortSignal/, /MaxListenersExceededWarning.*EventTarget/]
});

function XE9() {}

function FE9() {
    let A = c0() || {},
        Q = L1().env || {},
        B = A.env || {};
    for (let [G, Z] of Object.entries(Q))
        if (WE9.has(G.toUpperCase())) process.env[G] = Z;
    for (let [G, Z] of Object.entries(B))
        if (WE9.has(G.toUpperCase())) process.env[G] = Z;
    XE9()
}

function xK0() {
    let A = c0() || {};
    Object.assign(process.env, L1().env), Object.assign(process.env, A.env), W4A(), XE9()
}
var WE9;
var vK0 = L(() => {
    jQ();
    RB();
    ej();
    WE9 = new Set(["ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "ANTHROPIC_BASE_URL", "ANTHROPIC_CUSTOM_HEADERS", "ANTHROPIC_DEFAULT_HAIKU_MODEL", "ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_DEFAULT_OPUS_MODEL", "ANTHROPIC_DEFAULT_SONNET_MODEL", "ANTHROPIC_MODEL", "ANTHROPIC_SMALL_FAST_MODEL", "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION", "AWS_BEARER_TOKEN_BEDROCK", "AWS_DEFAULT_REGION", "AWS_PROFILE", "AWS_REGION", "BASH_DEFAULT_TIMEOUT_MS", "BASH_MAX_TIMEOUT_MS", "BASH_MAX_OUTPUT_LENGTH", "CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR", "CLAUDE_CODE_API_KEY_HELPER_TTL_MS", "CLAUDE_CODE_ENABLE_TELEMETRY", "CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL", "CLAUDE_CODE_MAX_OUTPUT_TOKENS", "CLAUDE_CODE_USE_BEDROCK", "CLAUDE_CODE_USE_FOUNDRY", "CLAUDE_CODE_USE_VERTEX", "CLAUDE_CODE_SKIP_BEDROCK_AUTH", "CLAUDE_CODE_SKIP_FOUNDRY_AUTH", "CLAUDE_CODE_SKIP_VERTEX_AUTH", "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC", "CLAUDE_CODE_DISABLE_TERMINAL_TITLE", "CLAUDE_CODE_SUBAGENT_MODEL", "DISABLE_AUTOUPDATER", "DISABLE_BUG_COMMAND", "DISABLE_COST_WARNINGS", "DISABLE_ERROR_REPORTING", "DISABLE_TELEMETRY", "HTTP_PROXY", "HTTPS_PROXY", "MAX_THINKING_TOKENS", "MCP_TIMEOUT", "MCP_TOOL_TIMEOUT", "MAX_MCP_OUTPUT_TOKENS", "NO_PROXY", "OTEL_EXPORTER_OTLP_ENDPOINT", "OTEL_EXPORTER_OTLP_HEADERS", "OTEL_EXPORTER_OTLP_LOGS_HEADERS", "OTEL_EXPORTER_OTLP_METRICS_HEADERS", "OTEL_EXPORTER_OTLP_TRACES_HEADERS", "OTEL_EXPORTER_OTLP_PROTOCOL", "OTEL_EXPORTER_OTLP_LOGS_PROTOCOL", "OTEL_EXPORTER_OTLP_LOGS_ENDPOINT", "OTEL_EXPORTER_OTLP_METRICS_PROTOCOL", "OTEL_EXPORTER_OTLP_METRICS_ENDPOINT", "OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY", "OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE", "OTEL_LOG_USER_PROMPTS", "OTEL_LOGS_EXPORTER", "OTEL_LOGS_EXPORT_INTERVAL", "OTEL_METRICS_INCLUDE_SESSION_ID", "OTEL_METRICS_INCLUDE_VERSION", "OTEL_METRICS_INCLUDE_ACCOUNT_UUID", "OTEL_METRICS_EXPORTER", "OTEL_METRIC_EXPORT_INTERVAL", "OTEL_RESOURCE_ATTRIBUTES", "USE_BUILTIN_RIPGREP", "VERTEX_REGION_CLAUDE_3_5_HAIKU", "VERTEX_REGION_CLAUDE_3_5_SONNET", "VERTEX_REGION_CLAUDE_3_7_SONNET", "VERTEX_REGION_CLAUDE_4_0_OPUS", "VERTEX_REGION_CLAUDE_4_0_SONNET", "VERTEX_REGION_CLAUDE_4_1_OPUS", "VERTEX_REGION_CLAUDE_HAIKU_4_5"])
});

function Xb3({
    filePath: A,
    errorDescription: Q,
    onExit: B,
    onReset: G
}) {
    h1((Y, J) => {
        if (J.escape) B()
    });
    let Z = DQ();
    return RC.default.createElement(RC.default.Fragment, null, RC.default.createElement(j, {
        flexDirection: "column",
        borderColor: "error",
        borderStyle: "round",
        padding: 1,
        width: 70,
        gap: 1
    }, RC.default.createElement($, {
        bold: !0
    }, "Configuration Error"), RC.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, RC.default.createElement($, null, "The configuration file at ", RC.default.createElement($, {
        bold: !0
    }, A), " contains invalid JSON."), RC.default.createElement($, null, Q)), RC.default.createElement(j, {
        flexDirection: "column"
    }, RC.default.createElement($, {
        bold: !0
    }, "Choose an option:"), RC.default.createElement(M0, {
        options: [{
            label: "Exit and fix manually",
            value: "exit"
        }, {
            label: "Reset with default configuration",
            value: "reset"
        }],
        onChange: (Y) => {
            if (Y === "exit") B();
            else G()
        },
        onCancel: B
    }))), Z.pending ? RC.default.createElement($, {
        dimColor: !0
    }, "Press ", Z.keyName, " again to exit") : RC.default.createElement(gV, null))
}
async function VE9({
    error: A
}) {
    let Q = {
        exitOnCtrlC: !1,
        theme: Fb3
    };
    await new Promise(async (B) => {
        let {
            unmount: G
        } = await Z3(RC.default.createElement(N7, null, RC.default.createElement(Xb3, {
            filePath: A.filePath,
            errorDescription: A.message,
            onExit: () => {
                G(), B(), process.exit(1)
            },
            onReset: () => {
                OA().writeFileSync(A.filePath, JSON.stringify(A.defaultConfig, null, 2), {
                    flush: !1,
                    encoding: "utf8"
                }), G(), B(), process.exit(0)
            }
        })), Q)
    })
}
var RC, Fb3 = "dark";
var KE9 = L(() => {
    hA();
    T6();
    hA();
    o0();
    c9();
    H9();
    RC = GA(VA(), 1)
});
import {
    realpathSync as Vb3,
    existsSync as Kb3
} from "fs";
async function DE9() {
    try {
        let A = await JO();
        if (!A) {
            g("Not in a GitHub repository, skipping path mapping update");
            return
        }
        let Q;
        try {
            Q = Vb3(pQ())
        } catch {
            Q = pQ()
        }
        let B = A.toLowerCase(),
            G = L1(),
            Z = G.githubRepoPaths?.[B] ?? [];
        if (Z.includes(Q)) {
            g(`Path ${Q} already tracked for repo ${B}`);
            return
        }
        let I = [Q, ...Z];
        d0({
            ...G,
            githubRepoPaths: {
                ...G.githubRepoPaths,
                [B]: I
            }
        }), g(`Added ${Q} to tracked paths for repo ${B}`)
    } catch (A) {
        g(`Error updating repo path mapping: ${A}`)
    }
}

function HE9(A) {
    let Q = L1(),
        B = A.toLowerCase();
    return Q.githubRepoPaths?.[B] ?? []
}

function CE9(A) {
    return A.filter((Q) => Kb3(Q))
}
async function EE9(A, Q) {
    try {
        let {
            stdout: B,
            code: G
        } = await q3("git", ["remote", "get-url", "origin"], {
            cwd: A,
            preserveOutputOnError: !1
        });
        if (G !== 0 || !B) return !1;
        let Z = xh(B.trim());
        if (!Z) return !1;
        return Z.toLowerCase() === Q.toLowerCase()
    } catch {
        return !1
    }
}

function zE9(A, Q) {
    let B = L1(),
        G = A.toLowerCase(),
        Z = B.githubRepoPaths?.[G] ?? [],
        I = Z.filter((J) => J !== Q);
    if (I.length === Z.length) return;
    let Y = {
        ...B.githubRepoPaths
    };
    if (I.length === 0) delete Y[G];
    else Y[G] = I;
    d0({
        ...B,
        githubRepoPaths: Y
    }), g(`Removed ${Q} from tracked paths for repo ${G}`)
}
var CJ1 = L(() => {
    Y0A();
    jQ();
    S0();
    D0();
    I6()
});

function $E9() {
    if (bK0) return;
    wE9(), bK0 = !0
}

function wE9() {
    let A = XM2();
    if (A) XE0(A, (B, G) => {
        let Z = A?.createCounter(B, G);
        return {
            add(I, Y = {}) {
                let W = {
                    ...zJA(),
                    ...Y
                };
                Z?.add(I, W)
            }
        }
    })
}
var bK0 = !1,
    UE9;
var qE9 = L(() => {
    Qe();
    S0();
    jQ();
    jQ();
    vK0();
    $Z();
    KE9();
    _J();
    XH();
    o2();
    S0();
    x40();
    _$A();
    _81();
    Vc();
    X3A();
    L9A();
    tzA();
    hB();
    jQ();
    S0();
    pN();
    R60();
    CJ1();
    zFA();
    EE();
    LRA();
    UE9 = t1(() => {
        v4("init_function_start");
        try {
            qlA(), v4("init_configs_enabled"), FE9(), v4("init_safe_env_vars_applied"), uc.initialize(), v4("init_settings_detector_initialized"), aJ9(), v4("init_after_graceful_shutdown"), DTB(), v4("init_after_1p_event_logging"), ei0(), v4("init_after_oauth_populate");
            let A = tEA() && !_X(!0) && !H5();
            if (v4("init_after_defer_check"), !A) wE9(), bK0 = !0;
            if (v4("init_telemetry_setup"), TQB(), r0B(), QQB(), v4("init_network_configured"), cc0(), _S2(), DE9(), hj2(), wG(gj2), RJ()) process.env.CLAUDE_CODE_SESSION_ID = G0(), sH9();
            v4("init_function_end")
        } catch (A) {
            if (A instanceof uz) return VE9({
                error: A
            });
            else throw A
        }
    })
});
import {
    createHash as Db3
} from "crypto";

function NE9() {
    let A = !(V0(process.env.CLAUDE_CODE_USE_BEDROCK) || V0(process.env.CLAUDE_CODE_USE_VERTEX) || V0(process.env.CLAUDE_CODE_USE_FOUNDRY) || process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC || process.env.DISABLE_ERROR_REPORTING);
    La.init({
        dsn: bRB,
        enabled: A,
        environment: "external",
        release: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION,
        integrations: [new La.Integrations.OnUncaughtException({
            exitEvenIfOtherHandlersAreRegistered: !1
        }), new La.Integrations.OnUnhandledRejection({
            mode: "warn"
        }), new La.Integrations.Http({
            tracing: !0
        }), La.rewriteFramesIntegration()],
        tracesSampleRate: 1,
        tracePropagationTargets: ["localhost"],
        beforeSend(Q) {
            try {
                let B = Vp();
                if (B.userID) {
                    let G = Db3("sha256").update(B.userID).digest("hex");
                    Q.user = {
                        id: G
                    }
                }
            } catch {}
            try {
                Q.tags = {
                    ...Q.tags,
                    terminal: m0.terminal,
                    userType: "external",
                    ...KC9()
                }
            } catch {}
            try {
                Q.extra = {
                    ...Q.extra,
                    sessionId: G0()
                }
            } catch {}
            return Q
        }
    })
}
var La;
var LE9 = L(() => {
    eb();
    f5();
    O9();
    S0();
    hQ();
    La = GA(bY0(), 1)
});
import {
    join as ME9
} from "path";

function Cb3() {
    return `IMPORTANT: This message and these instructions are NOT part of the actual user conversation. Do NOT include any references to "note-taking", "session notes extraction", or these update instructions in the notes content.

Based on the user conversation above (EXCLUDING this note-taking instruction message as well as system prompt, claude.md entries, or any past session summaries), update the session notes file.

The file {{notesPath}} has already been read for you. Here are its current contents:
<current_notes_content>
{{currentNotes}}
</current_notes_content>

Your ONLY task is to use the Edit tool to update the notes file, then stop. You can make multiple edits (update every section as needed) - make all Edit tool calls in parallel in a single message. Do not call any other tools.

CRITICAL RULES FOR EDITING:
- The file must maintain its exact structure with all sections, headers, and italic descriptions intact
-- NEVER modify, delete, or add section headers (the lines starting with '##' like ## Task specification)
-- NEVER modify or delete the italic _section description_ lines (these are the lines in italics immediately following each header - they start and end with underscores)
-- The italic _section descriptions_ are TEMPLATE INSTRUCTIONS that must be preserved exactly as-is - they guide what content belongs in each section
-- ONLY update the actual content that appears BELOW the italic _section descriptions_ within each existing section
-- Do NOT add any new sections, summaries, or information outside the existing structure
- Do NOT reference this note-taking process or instructions anywhere in the notes
- It's OK to skip updating a section if there are no substantial new insights to add. Do not add filler content like "No info yet", just leave sections blank/unedited if appropriate.
- Write DETAILED, INFO-DENSE content for each section - include specifics like file paths, function names, error messages, exact commands, technical details, etc.
- For "Key results", include the complete, exact output the user requested (e.g., full table, full answer, etc.)
- Do not include information that's already in the CLAUDE.md files included in the context
- Keep each section under ~${OE9} tokens/words - if a section is approaching this limit, condense it by cycling out less important details while preserving the most critical information
- Do not repeat information from past session summaries - only use the current user conversation starting with the first non system-reminder user message.
- Focus on actionable, specific information that would help someone understand or recreate the work discussed in the conversation

Use the Edit tool with file_path: {{notesPath}}

STRUCTURE PRESERVATION REMINDER:
Each section has TWO parts that must be preserved exactly as they appear in the current file:
1. The section header (line starting with #)
2. The italic description line (the _italicized text_ immediately after the header - this is a template instruction)

You ONLY update the actual content that comes AFTER these two preserved lines. The italic description lines starting and ending with underscores are part of the template structure, NOT content to be edited or removed.

REMEMBER: Use the Edit tool in parallel and stop. Do not continue after the edits. Only include insights from the actual user conversation, never from these note-taking instructions. Do not delete or change section headers or italic _section descriptions_.`
}
async function RE9() {
    let A = OA(),
        Q = ME9(PQ(), "session-memory", "config", "template.md");
    if (A.existsSync(Q)) try {
        return A.readFileSync(Q, {
            encoding: "utf-8"
        })
    } catch (B) {
        e(B instanceof Error ? B : Error(`Failed to load custom session memory template: ${B}`))
    }
    return Hb3
}
async function Eb3() {
    let A = OA(),
        Q = ME9(PQ(), "session-memory", "config", "prompt.md");
    if (A.existsSync(Q)) try {
        return A.readFileSync(Q, {
            encoding: "utf-8"
        })
    } catch (B) {
        e(B instanceof Error ? B : Error(`Failed to load custom session memory prompt: ${B}`))
    }
    return Cb3()
}

function zb3(A) {
    let Q = {},
        B = A.split(`
`),
        G = "",
        Z = [];
    for (let I of B)
        if (I.startsWith("# ")) {
            if (G && Z.length > 0) {
                let Y = Z.join(`
`).trim();
                Q[G] = SG(Y)
            }
            G = I, Z = []
        } else Z.push(I);
    if (G && Z.length > 0) {
        let I = Z.join(`
`).trim();
        Q[G] = SG(I)
    }
    return Q
}

function Ub3(A) {
    let Q = Object.entries(A).filter(([B, G]) => G > OE9).map(([B, G]) => `- The "${B}" section is currently ~${G} tokens and growing long. Consider condensing it a bit while keeping all important details.`);
    if (Q.length === 0) return "";
    return `

` + Q.join(`
`)
}

function $b3(A, Q) {
    let B = A;
    for (let [G, Z] of Object.entries(Q)) B = B.replace(new RegExp(`\\{\\{${G}\\}\\}`, "g"), Z);
    return B
}
async function TE9(A, Q) {
    let B = await Eb3(),
        G = zb3(A),
        Z = Ub3(G);
    return $b3(B, {
        currentNotes: A,
        notesPath: Q
    }) + Z
}
var OE9 = 2000,
    Hb3 = `
# Session Title
_A short and distinctive 5-10 word descriptive title for the session. Super info dense, no filler_

# Task specification
_What did the user ask to build? Any design decisions or other explanatory context_

# Files and Functions
_What are the important files? In short, what do they contain and why are they relevant?_

# Workflow
_What bash commands are usually run and in what order? How to interpret their output if not obvious?_

# User Corrections / Mistakes
_What did the user correct Assistant about? What did not work and should not be tried again?_

# Codebase and System Documentation
_What are the important system components? How do they work/fit together?_

# Learnings
_What has worked well? What has not? What to avoid? Do not duplicate items from other sections_

# Key results
_If the user asked a specific output such as an answer to a question, a table, or other document, repeat the exact result here_

# Worklog
_Step by step, what was attempted, done? Very terse summary for each step_
`;
var PE9 = L(() => {
    o0();
    hQ();
    u1();
    gM()
});

function qb3(A, Q) {
    let B = 0,
        G = Q === null || Q === void 0;
    for (let Z of A) {
        if (!G) {
            if (Z.uuid === Q) G = !0;
            continue
        }
        if (Z.type === "assistant") {
            let Y = Z.message.content;
            if (Array.isArray(Y)) B += Y.filter((J) => J.type === "tool_use").length
        }
    }
    return B
}

function Nb3(A) {
    let Q = qb3(A, jE9);
    if (!HSA(A) || Q >= wb3) {
        let G = A[A.length - 1];
        if (G?.uuid) jE9 = G.uuid;
        return !0
    }
    return !1
}
async function Lb3(A) {
    let Q = OA(),
        B = eY1();
    if (!Q.existsSync(B)) Q.mkdirSync(B);
    let G = Z91();
    if (!Q.existsSync(G)) {
        let J = await RE9();
        Q.writeFileSync(G, J, {
            encoding: "utf-8",
            flush: !1,
            mode: 384
        })
    }
    let Z = await d8.call({
            file_path: G
        }, A),
        I = "",
        Y = Z.data;
    if (Y.type === "text") I = Y.file.content;
    return {
        memoryPath: G,
        currentMemory: I
    }
}
async function SE9() {}
var wb3 = 3,
    jE9, BLI;
var _E9 = L(() => {
    _Y();
    o0();
    Kq();
    PE9();
    O51();
    iRA();
    O9();
    nQ();
    S00();
    BLI = I_(async function(A) {
        let {
            messages: Q,
            toolUseContext: B,
            querySource: G
        } = A;
        if (G !== "repl_main_thread") return;
        if (!Nb3(Q)) return;
        nZ2();
        let Z = sRA(B),
            {
                memoryPath: I,
                currentMemory: Y
            } = await Lb3(Z),
            J = await TE9(Y, I),
            W = async (X, F) => {
                if (X.name === R5 && typeof F === "object" && F !== null && "file_path" in F) {
                    if (F.file_path === I) return {
                        behavior: "allow",
                        updatedInput: F
                    }
                }
                return {
                    behavior: "deny",
                    message: `only ${R5} on ${I} is allowed`,
                    decisionReason: {
                        type: "other",
                        reason: `only ${R5} on ${I} is allowed`
                    }
                }
            };
        if (await M51({
                promptMessages: [j0({
                    content: J
                })],
                cacheSafeParams: L51(A),
                canUseTool: W,
                querySource: "session_memory",
                forkLabel: "session_memory"
            }), !HSA(Q)) {
            let X = Q[Q.length - 1];
            if (X?.uuid) iZ2(X.uuid)
        }
        aZ2()
    })
});
import {
    join as Mb3
} from "path";

function Ob3() {
    return `IMPORTANT: This message and these instructions are NOT part of the actual user conversation. Do NOT include any references to "documentation updates", "magic docs", or these update instructions in the document content.

Based on the user conversation above (EXCLUDING this documentation update instruction message), update the Magic Doc file to incorporate any NEW learnings, insights, or information that would be valuable to preserve.

The file {{docPath}} has already been read for you. Here are its current contents:
<current_doc_content>
{{docContents}}
</current_doc_content>

Document title: {{docTitle}}
{{customInstructions}}

Your ONLY task is to use the Edit tool to update the documentation file if there is substantial new information to add, then stop. You can make multiple edits (update multiple sections as needed) - make all Edit tool calls in parallel in a single message. If there's nothing substantial to add, simply respond with a brief explanation and do not call any tools.

CRITICAL RULES FOR EDITING:
- Preserve the Magic Doc header exactly as-is: # MAGIC DOC: {{docTitle}}
- If there's an italicized line immediately after the header, preserve it exactly as-is
- Keep the document CURRENT with the latest state of the codebase - this is NOT a changelog or history
- Update information IN-PLACE to reflect the current state - do NOT append historical notes or track changes over time
- Remove or replace outdated information rather than adding "Previously..." or "Updated to..." notes
- Clean up or DELETE sections that are no longer relevant or don't align with the document's purpose
- Fix obvious errors: typos, grammar mistakes, broken formatting, incorrect information, or confusing statements
- Keep the document well organized: use clear headings, logical section order, consistent formatting, and proper nesting

DOCUMENTATION PHILOSOPHY - READ CAREFULLY:
- BE TERSE. High signal only. No filler words or unnecessary elaboration.
- Documentation is for OVERVIEWS, ARCHITECTURE, and ENTRY POINTS - not detailed code walkthroughs
- Do NOT duplicate information that's already obvious from reading the source code
- Do NOT document every function, parameter, or line number reference
- Focus on: WHY things exist, HOW components connect, WHERE to start reading, WHAT patterns are used
- Skip: detailed implementation steps, exhaustive API docs, play-by-play narratives

What TO document:
- High-level architecture and system design
- Non-obvious patterns, conventions, or gotchas
- Key entry points and where to start reading code
- Important design decisions and their rationale
- Critical dependencies or integration points
- References to related files, docs, or code (like a wiki) - help readers navigate to relevant context

What NOT to document:
- Anything obvious from reading the code itself
- Exhaustive lists of files, functions, or parameters
- Step-by-step implementation details
- Low-level code mechanics
- Information already in CLAUDE.md or other project docs

Use the Edit tool with file_path: {{docPath}}

REMEMBER: Only update if there is substantial new information. The Magic Doc header (# MAGIC DOC: {{docTitle}}) must remain unchanged.`
}
async function Rb3() {
    let A = OA(),
        Q = Mb3(PQ(), "magic-docs", "prompt.md");
    if (A.existsSync(Q)) try {
        return A.readFileSync(Q, {
            encoding: "utf-8"
        })
    } catch {}
    return Ob3()
}

function Tb3(A, Q) {
    let B = A;
    for (let [G, Z] of Object.entries(Q)) B = B.replace(new RegExp(`\\{\\{${G}\\}\\}`, "g"), Z);
    return B
}
async function kE9(A, Q, B, G) {
    let Z = await Rb3(),
        I = G ? `

DOCUMENT-SPECIFIC UPDATE INSTRUCTIONS:
The document author has provided specific instructions for how this file should be updated. Pay extra attention to these instructions and follow them carefully:

"${G}"

These instructions take priority over the general rules below. Make sure your updates align with these specific guidelines.` : "";
    return Tb3(Z, {
        docContents: A,
        docPath: Q,
        docTitle: B,
        customInstructions: I
    })
}
var yE9 = L(() => {
    o0();
    hQ()
});

function Sb3(A) {
    let Q = A.match(Pb3);
    if (!Q || !Q[1]) return null;
    let B = Q[1].trim(),
        G = Q.index + Q[0].length,
        I = A.slice(G).match(/^\s*\n(?:\s*\n)?(.+?)(?:\n|$)/);
    if (I && I[1]) {
        let J = I[1].match(jb3);
        if (J && J[1]) {
            let W = J[1].trim();
            return {
                title: B,
                instructions: W
            }
        }
    }
    return {
        title: B
    }
}

function _b3() {
    return {
        agentType: "magic-docs",
        whenToUse: "Update Magic Docs",
        tools: [R5],
        model: "sonnet",
        source: "built-in",
        baseDir: "built-in",
        getSystemPrompt: () => ""
    }
}
async function kb3(A, Q) {
    let {
        messages: B,
        systemPrompt: G,
        userContext: Z,
        systemContext: I,
        toolUseContext: Y
    } = Q, J = uAA(Y.readFileState), W = {
        ...Y,
        readFileState: J
    };
    if (!OA().existsSync(A.path)) {
        EJ1.delete(A.path);
        return
    }
    let F = await d8.call({
            file_path: A.path
        }, W),
        V = "",
        K = F.data;
    if (K.type === "text") V = K.file.content;
    let D = Sb3(V);
    if (!D) {
        EJ1.delete(A.path);
        return
    }
    let H = await kE9(V, A.path, D.title, D.instructions),
        C = async (E, z) => {
            if (E.name === R5 && typeof z === "object" && z !== null && "file_path" in z) {
                let w = z.file_path;
                if (typeof w === "string" && w === A.path) return {
                    behavior: "allow",
                    updatedInput: z
                }
            }
            return {
                behavior: "deny",
                message: `only ${R5} is allowed for ${A.path}`,
                decisionReason: {
                    type: "other",
                    reason: `only ${R5} is allowed`
                }
            }
        };
    for await (let E of uI1({
        agentDefinition: _b3(),
        promptMessages: [j0({
            content: H
        })],
        toolUseContext: W,
        canUseTool: C,
        isAsync: !0,
        forkContextMessages: B,
        querySource: "magic_docs",
        override: {
            systemPrompt: G,
            userContext: Z,
            systemContext: I
        }
    }));
}
async function xE9() {}
var Pb3, jb3, EJ1, wLI;
var vE9 = L(() => {
    o0();
    Kq();
    yE9();
    R51();
    iRA();
    uM();
    nQ();
    Kq();
    Pb3 = /^#\s*MAGIC\s+DOC:\s*(.+)$/im, jb3 = /^[_*](.+?)[_*]\s*$/m, EJ1 = new Map;
    wLI = I_(async function(A) {
        let {
            messages: Q,
            querySource: B
        } = A;
        if (B !== "repl_main_thread") return;
        if (HSA(Q)) return;
        if (EJ1.size === 0) return;
        for (let I of Array.from(EJ1.values())) await kb3(I, A)
    })
});

function bE9(A) {
    let Q = [];
    for (let B of A)
        if (B.type === "user" && B.message?.content) {
            let G = "";
            if (typeof B.message.content === "string") G = B.message.content;
            else if (Array.isArray(B.message.content)) {
                for (let Z of B.message.content)
                    if (Z.type === "text") G += Z.text + " "
            }
            if (G.trim()) Q.push(G.trim().slice(0, yb3))
        } return Q
}

function xb3(A) {
    return A.map((B) => `User: ${B}
Asst: [response hidden]`).join(`
`)
}

function vb3(A) {
    let Q = e2(A, "frustrated"),
        B = e2(A, "pr_request");
    return {
        isFrustrated: Q === "true",
        hasPRRequest: B === "true"
    }
}
async function fE9() {
    return
}
var yb3 = 300,
    bb3;
var hE9 = L(() => {
    L30();
    iRA();
    nQ();
    s2();
    w0();
    nQ();
    bb3 = {
        name: "session_quality_classifier",
        async shouldRun(A) {
            if (A.querySource !== "repl_main_thread") return !1;
            return bE9(A.messages).length > 0
        },
        buildMessages(A) {
            let Q = bE9(A.messages),
                B = xb3(Q);
            return [j0({
                content: `Analyze the following conversation between a user and an assistant (assistant responses are hidden).

${B}

Think step-by-step about:
1. Does the user seem frustrated at the Asst based on their messages? Look for signs like repeated corrections, negative language, etc.
2. Has the user explicitly asked to SEND/CREATE/PUSH a pull request to GitHub? This means they want to actually submit a PR to a repository, not just work on code together or prepare changes. Look for explicit requests like: "create a pr", "send a pull request", "push a pr", "open a pr", "submit a pr to github", etc. Do NOT count mentions of working on a PR together, preparing for a PR, or discussing PR content.

Based on your analysis, output:
<frustrated>true/false</frustrated>
<pr_request>true/false</pr_request>`
            })]
        },
        systemPrompt: "You are analyzing user messages from a conversation to detect certain features of the interaction.",
        useTools: !1,
        parseResponse(A) {
            return vb3(A)
        },
        logResult(A, Q) {
            if (A.type === "success") {
                let B = A.result;
                if (B.isFrustrated || B.hasPRRequest) BA("tengu_session_quality_classification", {
                    uuid: A.uuid,
                    isFrustrated: B.isFrustrated ? 1 : 0,
                    hasPRRequest: B.hasPRRequest ? 1 : 0,
                    messageCount: Q.queryMessageCount
                })
            }
        },
        getModel: LW
    }
});

function gE9({
    isFocused: A,
    isSelected: Q,
    children: B
}) {
    return NSA.default.createElement(j, {
        gap: 1,
        paddingLeft: A ? 0 : 2
    }, A && NSA.default.createElement($, {
        color: "suggestion"
    }, V1.pointer), NSA.default.createElement($, {
        color: Q ? "success" : A ? "suggestion" : void 0
    }, B), Q && NSA.default.createElement($, {
        color: "success"
    }, V1.tick))
}
var NSA;
var uE9 = L(() => {
    hA();
    n2();
    NSA = GA(VA(), 1)
});
var zJ1;
var mE9 = L(() => {
    zJ1 = class zJ1 extends Map {
        first;
        last;
        constructor(A) {
            let Q = [],
                B, G, Z, I = 0;
            for (let Y of A) {
                let J = {
                    ...Y,
                    previous: Z,
                    next: void 0,
                    index: I
                };
                if (Z) Z.next = J;
                B ||= J, G = J, Q.push([Y.value, J]), I++, Z = J
            }
            super(Q);
            this.first = B, this.last = G
        }
    }
});
import {
    isDeepStrictEqual as dE9
} from "node:util";
var ZN, fb3 = (A, Q) => {
        switch (Q.type) {
            case "focus-next-option": {
                if (!A.focusedValue) return A;
                let B = A.optionMap.get(A.focusedValue);
                if (!B) return A;
                let G = B.next || A.optionMap.first;
                if (!G) return A;
                if (!B.next && G === A.optionMap.first) return {
                    ...A,
                    focusedValue: G.value,
                    visibleFromIndex: 0,
                    visibleToIndex: A.visibleOptionCount
                };
                if (!(G.index >= A.visibleToIndex)) return {
                    ...A,
                    focusedValue: G.value
                };
                let I = Math.min(A.optionMap.size, A.visibleToIndex + 1),
                    Y = I - A.visibleOptionCount;
                return {
                    ...A,
                    focusedValue: G.value,
                    visibleFromIndex: Y,
                    visibleToIndex: I
                }
            }
            case "focus-previous-option": {
                if (!A.focusedValue) return A;
                let B = A.optionMap.get(A.focusedValue);
                if (!B) return A;
                let G = B.previous || A.optionMap.last;
                if (!G) return A;
                if (!B.previous && G === A.optionMap.last) {
                    let J = A.optionMap.size,
                        W = Math.max(0, J - A.visibleOptionCount);
                    return {
                        ...A,
                        focusedValue: G.value,
                        visibleFromIndex: W,
                        visibleToIndex: J
                    }
                }
                if (!(G.index <= A.visibleFromIndex)) return {
                    ...A,
                    focusedValue: G.value
                };
                let I = Math.max(0, A.visibleFromIndex - 1),
                    Y = I + A.visibleOptionCount;
                return {
                    ...A,
                    focusedValue: G.value,
                    visibleFromIndex: I,
                    visibleToIndex: Y
                }
            }
            case "toggle-focused-option": {
                if (!A.focusedValue) return A;
                if (A.value.includes(A.focusedValue)) {
                    let B = new Set(A.value);
                    return B.delete(A.focusedValue), {
                        ...A,
                        previousValue: A.value,
                        value: [...B]
                    }
                }
                return {
                    ...A,
                    previousValue: A.value,
                    value: [...A.value, A.focusedValue]
                }
            }
            case "reset":
                return Q.state
        }
    },
    cE9 = ({
        visibleOptionCount: A,
        defaultValue: Q,
        options: B
    }) => {
        let G = typeof A === "number" ? Math.min(A, B.length) : B.length,
            Z = new zJ1(B),
            I = Q ?? [];
        return {
            optionMap: Z,
            visibleOptionCount: G,
            focusedValue: Z.first?.value,
            visibleFromIndex: 0,
            visibleToIndex: G,
            previousValue: I,
            value: I
        }
    },
    pE9 = ({
        visibleOptionCount: A = 5,
        options: Q,
        defaultValue: B,
        onChange: G,
        onSubmit: Z
    }) => {
        let [I, Y] = ZN.useReducer(fb3, {
            visibleOptionCount: A,
            defaultValue: B,
            options: Q
        }, cE9), [J, W] = ZN.useState(Q);
        if (Q !== J && !dE9(Q, J)) Y({
            type: "reset",
            state: cE9({
                visibleOptionCount: A,
                defaultValue: B,
                options: Q
            })
        }), W(Q);
        let X = ZN.useCallback(() => {
                Y({
                    type: "focus-next-option"
                })
            }, []),
            F = ZN.useCallback(() => {
                Y({
                    type: "focus-previous-option"
                })
            }, []),
            V = ZN.useCallback(() => {
                Y({
                    type: "toggle-focused-option"
                })
            }, []),
            K = ZN.useCallback(() => {
                Z?.(I.value)
            }, [I.value, Z]),
            D = ZN.useMemo(() => {
                return Q.map((H, C) => ({
                    ...H,
                    index: C
                })).slice(I.visibleFromIndex, I.visibleToIndex)
            }, [Q, I.visibleFromIndex, I.visibleToIndex]);
        return ZN.useEffect(() => {
            if (!dE9(I.previousValue, I.value)) G?.(I.value)
        }, [I.previousValue, I.value, Q, G]), {
            focusedValue: I.focusedValue,
            visibleFromIndex: I.visibleFromIndex,
            visibleToIndex: I.visibleToIndex,
            value: I.value,
            visibleOptions: D,
            focusNextOption: X,
            focusPreviousOption: F,
            toggleFocusedOption: V,
            submit: K
        }
    };
var lE9 = L(() => {
    mE9();
    ZN = GA(VA(), 1)
});
var iE9 = ({
    isDisabled: A = !1,
    state: Q
}) => {
    h1((B, G) => {
        if (G.downArrow) Q.focusNextOption();
        if (G.upArrow) Q.focusPreviousOption();
        if (B === " ") Q.toggleFocusedOption();
        if (G.return) Q.submit()
    }, {
        isActive: !A
    })
};
var nE9 = L(() => {
    hA()
});

function UJ1({
    isDisabled: A = !1,
    visibleOptionCount: Q = 5,
    highlightText: B,
    options: G,
    defaultValue: Z,
    onChange: I,
    onSubmit: Y
}) {
    let J = pE9({
        visibleOptionCount: Q,
        options: G,
        defaultValue: Z,
        onChange: I,
        onSubmit: Y
    });
    return iE9({
        isDisabled: A,
        state: J
    }), qFA.default.createElement(j, {
        flexDirection: "column"
    }, J.visibleOptions.map((W) => {
        let X = W.label;
        if (B && W.label.includes(B)) {
            let F = W.label.indexOf(B);
            X = qFA.default.createElement(qFA.default.Fragment, null, W.label.slice(0, F), qFA.default.createElement($, {
                bold: !0
            }, B), W.label.slice(F + B.length))
        }
        return qFA.default.createElement(gE9, {
            key: W.value,
            isFocused: !A && J.focusedValue === W.value,
            isSelected: J.value.includes(W.value)
        }, X)
    }))
}
var qFA;
var fK0 = L(() => {
    hA();
    uE9();
    lE9();
    nE9();
    qFA = GA(VA(), 1)
});

function aE9({
    servers: A,
    scope: Q,
    onDone: B
}) {
    let G = Object.keys(A),
        [Z, I] = AV.useState({});
    AV.useEffect(() => {
        $_().then(({
            servers: V
        }) => I(V))
    }, []);
    let Y = G.filter((V) => Z[V] !== void 0);

    function J(V) {
        let K = 0;
        for (let D of V) {
            let H = A[D];
            if (H) {
                let C = D;
                if (Z[C] !== void 0) {
                    let E = 1;
                    while (Z[`${D}_${E}`] !== void 0) E++;
                    C = `${D}_${E}`
                }
                Bt(C, H, Q), K++
            }
        }
        F(K)
    }
    let W = DQ();
    h1((V, K) => {
        if (K.escape) {
            F(0);
            return
        }
    });
    let [X] = $B();

    function F(V) {
        if (V > 0) N9(`
${tQ("success",X)(`Successfully imported ${V} MCP server${V!==1?"s":""} to ${Q} config.`)}
`);
        else N9(`
No servers were imported.`);
        B(), S6()
    }
    return AV.default.createElement(AV.default.Fragment, null, AV.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "success"
    }, AV.default.createElement($, {
        bold: !0,
        color: "success"
    }, "Import MCP Servers from Claude Desktop"), AV.default.createElement($, null, "Found ", G.length, " MCP server", G.length !== 1 ? "s" : "", " in Claude Desktop."), Y.length > 0 && AV.default.createElement($, {
        color: "warning"
    }, "Note: Some servers already exist with the same name. If selected, they will be imported with a numbered suffix."), AV.default.createElement($, null, "Please select the servers you want to import:"), AV.default.createElement(UJ1, {
        options: G.map((V) => ({
            label: `${V}${Y.includes(V)?" (already exists)":""}`,
            value: V
        })),
        defaultValue: G.filter((V) => !Y.includes(V)),
        onSubmit: J
    })), AV.default.createElement(j, {
        marginLeft: 3
    }, AV.default.createElement($, {
        dimColor: !0
    }, W.pending ? AV.default.createElement(AV.default.Fragment, null, "Press ", W.keyName, " again to exit") : AV.default.createElement(AV.default.Fragment, null, "Space to select · Enter to confirm · Esc to cancel"))))
}
var AV;
var sE9 = L(() => {
    hA();
    fK0();
    c9();
    GM();
    _J();
    AV = GA(VA(), 1)
});
import * as hK0 from "path";
import * as rE9 from "os";

function hb3() {
    let A = uQ();
    if (!OH1.includes(A)) throw Error(`Unsupported platform: ${A} - Claude Desktop integration only works on macOS and WSL.`);
    if (A === "macos") return hK0.join(rE9.homedir(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
    let Q = process.env.USERPROFILE ? process.env.USERPROFILE.replace(/\\/g, "/") : null;