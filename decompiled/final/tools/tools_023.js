/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_023.js
 * 处理时间: 2025-12-09T03:41:38.846Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * dC       (  4x) last()
 * TY       (  1x) isObject()
 * V0       (  1x) parseBoolean(value) - Parse bool env
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 23/25
 * Lines: 435189 - 436687 (1499 lines)
 * Original file: cli.js
 */

    if (W) return {
        behavior: "allow",
        updatedInput: Q,
        decisionReason: {
            type: "rule",
            rule: W
        }
    };
    let X = J.behavior === "passthrough" ? {
        ...J,
        behavior: "ask",
        message: PF(A.name, J.decisionReason)
    } : J;
    if (X.behavior === "ask" && X.suggestions) g(`Permission suggestions for ${A.name}: ${JSON.stringify(X.suggestions,null,2)}`);
    return X
}
async function IW9({
    rule: A,
    initialContext: Q,
    setToolPermissionContext: B
}) {
    if (A.source === "policySettings") throw Error("Cannot delete permission rules from managed settings");
    let G = $V(Q, {
        type: "removeRules",
        rules: [A.ruleValue],
        behavior: A.ruleBehavior,
        destination: A.source
    });
    switch (A.source) {
        case "localSettings":
        case "userSettings":
        case "projectSettings": {
            Dl0(A);
            break
        }
        case "cliArg":
        case "command":
        case "flagSettings":
            break;
        case "session":
            break
    }
    B(G)
}

function zH9(A, Q) {
    let B = new Map;
    for (let Z of A) {
        let I = `${Z.source}:${Z.ruleBehavior}`;
        if (!B.has(I)) B.set(I, []);
        B.get(I).push(Z.ruleValue)
    }
    let G = [];
    for (let [Z, I] of B) {
        let [Y, J] = Z.split(":");
        G.push({
            type: Q,
            rules: I,
            behavior: J,
            destination: Y
        })
    }
    return G
}

function OJ9(A, Q) {
    let B = zH9(Q, "addRules");
    return Rm(A, B)
}

function GSB(A, Q) {
    let B = zH9(Q, "replaceRules");
    return Rm(A, B)
}
var dV0, L$ = async (A, Q, B, G, Z) => {
    let I = await Fy3(A, Q, B, G);
    if (I.behavior === "ask") {
        let Y = await B.getAppState();
        if (Y.toolPermissionContext.mode === "dontAsk") return {
            behavior: "deny",
            decisionReason: {
                type: "mode",
                mode: "dontAsk"
            },
            message: `Permission to use ${A.name} has been auto-denied in dontAsk mode.`
        };
        if (Y.toolPermissionContext.shouldAvoidPermissionPrompts) return {
            behavior: "deny",
            decisionReason: {
                type: "asyncAgent",
                reason: "Permission prompts are not available in this context"
            },
            message: `Permission to use ${A.name} has been auto-denied (prompts unavailable).`
        }
    }
    return I
};
var aG = L(() => {
    hK();
    $Z();
    u1();
    D0();
    Gr();
    UF();
    xX();
    MJ();
    Bw();
    gU();
    EH9();
    O9();
    dV0 = [...gN, "cliArg", "command", "session"]
});

function UH9(A) {
    return lV0.filePatternTools.includes(A)
}

function $H9(A) {
    return lV0.bashPrefixTools.includes(A)
}

function wH9(A) {
    return lV0.customValidation[A]
}
var lV0;
var qH9 = L(() => {
    lV0 = {
        filePatternTools: ["Read", "Write", "Edit", "Glob", "NotebookRead", "NotebookEdit"],
        bashPrefixTools: ["Bash"],
        customValidation: {
            WebSearch: (A) => {
                if (A.includes("*") || A.includes("?")) return {
                    valid: !1,
                    error: "WebSearch does not support wildcards",
                    suggestion: "Use exact search terms without * or ?",
                    examples: ["WebSearch(claude ai)", "WebSearch(typescript tutorial)"]
                };
                return {
                    valid: !0
                }
            },
            WebFetch: (A) => {
                if (A.includes("://") || A.startsWith("http")) return {
                    valid: !1,
                    error: "WebFetch permissions use domain format, not URLs",
                    suggestion: 'Use "domain:hostname" format',
                    examples: ["WebFetch(domain:example.com)", "WebFetch(domain:github.com)"]
                };
                if (!A.startsWith("domain:")) return {
                    valid: !1,
                    error: 'WebFetch permissions must use "domain:" prefix',
                    suggestion: 'Use "domain:hostname" format',
                    examples: ["WebFetch(domain:example.com)", "WebFetch(domain:*.google.com)"]
                };
                return {
                    valid: !0
                }
            }
        }
    }
});

function Vy3(A) {
    if (!A || A.trim() === "") return {
        valid: !1,
        error: "Permission rule cannot be empty"
    };
    let Q = (A.match(/\(/g) || []).length,
        B = (A.match(/\)/g) || []).length;
    if (Q !== B) return {
        valid: !1,
        error: "Mismatched parentheses",
        suggestion: "Ensure all opening parentheses have matching closing parentheses"
    };
    if (A.includes("()")) {
        let Y = A.substring(0, A.indexOf("("));
        if (!Y) return {
            valid: !1,
            error: "Empty parentheses with no tool name",
            suggestion: "Specify a tool name before the parentheses"
        };
        return {
            valid: !1,
            error: "Empty parentheses",
            suggestion: `Either specify a pattern or use just "${Y}" without parentheses`,
            examples: [`${Y}`, `${Y}(some-pattern)`]
        }
    }
    let G = mN(A),
        Z = FU(G.toolName);
    if (Z) {
        if (G.ruleContent !== void 0) return {
            valid: !1,
            error: "MCP rules do not support patterns",
            suggestion: `Use "${G.toolName}" without parentheses`,
            examples: [`mcp__${Z.serverName}`, Z.toolName ? `mcp__${Z.serverName}__${Z.toolName}` : void 0].filter(Boolean)
        };
        return {
            valid: !0
        }
    }
    if (!G.toolName || G.toolName.length === 0) return {
        valid: !1,
        error: "Tool name cannot be empty"
    };
    if (G.toolName[0] !== G.toolName[0]?.toUpperCase()) return {
        valid: !1,
        error: "Tool names must start with uppercase",
        suggestion: `Use "${String(G.toolName).charAt(0).toUpperCase()+String(G.toolName).slice(1)}"`
    };
    let I = wH9(G.toolName);
    if (I && G.ruleContent !== void 0) {
        let Y = I(G.ruleContent);
        if (!Y.valid) return Y
    }
    if ($H9(G.toolName) && G.ruleContent !== void 0) {
        let Y = G.ruleContent;
        if (Y.includes(":*") && !Y.endsWith(":*")) return {
            valid: !1,
            error: "The :* pattern must be at the end",
            suggestion: "Move :* to the end for prefix matching",
            examples: ["Bash(npm run:*)", "Bash(git commit:*)"]
        };
        if (Y.includes(" * ") && !Y.endsWith(":*")) return {
            valid: !1,
            error: "Wildcards in the middle of commands are not supported",
            suggestion: 'Use prefix matching with ":*" or specify exact commands',
            examples: ["Bash(npm run:*) - allows any npm run command", "Bash(npm install express) - allows exact command", "Bash - allows all commands"]
        };
        if (Y === ":*") return {
            valid: !1,
            error: "Prefix cannot be empty before :*",
            suggestion: "Specify a command prefix before :*",
            examples: ["Bash(npm:*)", "Bash(git:*)"]
        };
        let J = ['"', "'"];
        for (let X of J)
            if ((Y.match(new RegExp(X, "g")) || []).length % 2 !== 0) return {
                valid: !1,
                error: `Unmatched ${X} in Bash pattern`,
                suggestion: "Ensure all quotes are properly paired"
            };
        if (Y === "*") return {
            valid: !1,
            error: 'Use "Bash" without parentheses to allow all commands',
            suggestion: "Remove the parentheses or specify a command pattern",
            examples: ["Bash", "Bash(npm:*)", "Bash(npm install)"]
        };
        let W = Y.indexOf("*");
        if (W !== -1 && !Y.includes("/")) {
            if (!Y.substring(0, W).endsWith(":")) return {
                valid: !1,
                error: 'Use ":*" for prefix matching, not just "*"',
                suggestion: `Change to "Bash(${String(Y).replace(/\*/g,":*")})" for prefix matching`,
                examples: ["Bash(npm run:*)", "Bash(git:*)"]
            }
        }
    }
    if (UH9(G.toolName) && G.ruleContent !== void 0) {
        let Y = G.ruleContent;
        if (Y.includes(":*")) return {
            valid: !1,
            error: 'The ":*" syntax is only for Bash prefix rules',
            suggestion: 'Use glob patterns like "*" or "**" for file matching',
            examples: [`${G.toolName}(*.ts) - matches .ts files`, `${G.toolName}(src/**) - matches all files in src`, `${G.toolName}(**/*.test.ts) - matches test files`]
        };
        if (Y.includes("*") && !Y.match(/^\*|\*$|\*\*|\/\*|\*\.|\*\)/) && !Y.includes("**")) return {
            valid: !1,
            error: "Wildcard placement might be incorrect",
            suggestion: "Wildcards are typically used at path boundaries",
            examples: [`${G.toolName}(*.js) - all .js files`, `${G.toolName}(src/*) - all files directly in src`, `${G.toolName}(src/**) - all files recursively in src`]
        }
    }
    return {
        valid: !0
    }
}
var nY1;
var NH9 = L(() => {
    h2();
    aG();
    xX();
    qH9();
    nY1 = _.string().superRefine((A, Q) => {
        let B = Vy3(A);
        if (!B.valid) {
            let G = B.error;
            if (B.suggestion) G += `. ${B.suggestion}`;
            if (B.examples && B.examples.length > 0) G += `. Examples: ${B.examples.join(", ")}`;
            Q.addIssue({
                code: _.ZodIssueCode.custom,
                message: G,
                params: {
                    received: A
                }
            })
        }
    })
});
var Ky3, LH9;
var MH9 = L(() => {
    h2();
    Ky3 = _.object({
        allowUnixSockets: _.array(_.string()).optional(),
        allowAllUnixSockets: _.boolean().optional(),
        allowLocalBinding: _.boolean().optional(),
        httpProxyPort: _.number().optional(),
        socksProxyPort: _.number().optional()
    }).optional(), LH9 = _.object({
        enabled: _.boolean().optional(),
        autoAllowBashIfSandboxed: _.boolean().optional(),
        allowUnsandboxedCommands: _.boolean().optional().describe("Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. Default: true."),
        network: Ky3,
        ignoreViolations: _.record(_.string(), _.array(_.string())).optional(),
        enableWeakerNestedSandbox: _.boolean().optional(),
        excludedCommands: _.array(_.string()).optional(),
        ripgrep: _.object({
            command: _.string(),
            args: _.array(_.string()).optional()
        }).optional().describe("Custom ripgrep configuration for bundled ripgrep support")
    }).passthrough()
});

function gzA(A) {
    return "serverName" in A && A.serverName !== void 0
}

function hiA(A) {
    return "serverCommand" in A && A.serverCommand !== void 0
}
var Dy3, Hy3, Cy3, Ey3, zy3, Uy3, $y3, AzA, wy3, qy3, Ny3, D0A;
var E3A = L(() => {
    h2();
    ZvA();
    Bw();
    NH9();
    UF();
    ho();
    MH9();
    Dy3 = _.record(_.coerce.string()), Hy3 = _.object({
        allow: _.array(nY1).optional().describe("List of permission rules for allowed operations"),
        deny: _.array(nY1).optional().describe("List of permission rules for denied operations"),
        ask: _.array(nY1).optional().describe("List of permission rules that should always prompt for confirmation"),
        defaultMode: _.enum(OR).optional().describe("Default permission mode when Claude Code needs access"),
        disableBypassPermissionsMode: _.enum(["disable"]).optional().describe("Disable the ability to bypass permission prompts"),
        additionalDirectories: _.array(_.string()).optional().describe("Additional directories to include in the permission scope")
    }).passthrough(), Cy3 = _.object({
        type: _.literal("command").describe("Bash command hook type"),
        command: _.string().describe("Shell command to execute"),
        timeout: _.number().positive().optional().describe("Timeout in seconds for this specific command"),
        statusMessage: _.string().optional().describe("Custom status message to display in spinner while hook runs")
    }), Ey3 = _.object({
        type: _.literal("prompt").describe("LLM prompt hook type"),
        prompt: _.string().describe("Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON."),
        timeout: _.number().positive().optional().describe("Timeout in seconds for this specific prompt evaluation"),
        model: _.string().optional().describe('Model to use for this prompt hook (e.g., "claude-sonnet-4-5-20250929"). If not specified, uses the default small fast model.'),
        statusMessage: _.string().optional().describe("Custom status message to display in spinner while hook runs")
    }), zy3 = _.object({
        type: _.literal("agent").describe("Agentic verifier hook type"),
        prompt: _.string().transform((A) => (Q) => A).describe('Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.'),
        timeout: _.number().positive().optional().describe("Timeout in seconds for agent execution (default 60)"),
        model: _.string().optional().describe('Model to use for this agent hook (e.g., "claude-sonnet-4-5-20250929"). If not specified, uses Haiku.'),
        statusMessage: _.string().optional().describe("Custom status message to display in spinner while hook runs")
    }), Uy3 = _.discriminatedUnion("type", [Cy3, Ey3, zy3]), $y3 = _.object({
        matcher: _.string().optional().describe('String pattern to match (e.g. tool names like "Write")'),
        hooks: _.array(Uy3).describe("List of hooks to execute when the matcher matches")
    }), AzA = _.record(_.enum(jKA), _.array($y3)), wy3 = _.object({
        source: OlA.describe("Where to fetch the marketplace from"),
        installLocation: _.string().optional().describe("Local cache path where marketplace manifest is stored (auto-generated if not provided)")
    }), qy3 = _.object({
        serverName: _.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that users are allowed to configure"),
        serverCommand: _.array(_.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for allowed stdio servers")
    }).refine((A) => A.serverName !== void 0 && A.serverCommand === void 0 || A.serverName === void 0 && A.serverCommand !== void 0, {
        message: 'Entry must have either "serverName" or "serverCommand", but not both'
    }), Ny3 = _.object({
        serverName: _.string().regex(/^[a-zA-Z0-9_-]+$/, "Server name can only contain letters, numbers, hyphens, and underscores").optional().describe("Name of the MCP server that is explicitly blocked"),
        serverCommand: _.array(_.string()).min(1, "Server command must have at least one element (the command)").optional().describe("Command array [command, ...args] to match exactly for blocked stdio servers")
    }).refine((A) => A.serverName !== void 0 && A.serverCommand === void 0 || A.serverName === void 0 && A.serverCommand !== void 0, {
        message: 'Entry must have either "serverName" or "serverCommand", but not both'
    }), D0A = _.object({
        $schema: _.literal(op0).optional().describe("JSON Schema reference for Claude Code settings"),
        apiKeyHelper: _.string().optional().describe("Path to a script that outputs authentication values"),
        awsCredentialExport: _.string().optional().describe("Path to a script that exports AWS credentials"),
        awsAuthRefresh: _.string().optional().describe("Path to a script that refreshes AWS authentication"),
        cleanupPeriodDays: _.number().nonnegative().int().optional().describe("Number of days to retain chat transcripts (0 to disable cleanup)"),
        env: Dy3.optional().describe("Environment variables to set for Claude Code sessions"),
        includeCoAuthoredBy: _.boolean().optional().describe("Whether to include Claude's co-authored by attribution in commits and PRs (defaults to true)"),
        permissions: Hy3.optional().describe("Tool usage permissions configuration"),
        model: _.string().optional().describe("Override the default model used by Claude Code"),
        enableAllProjectMcpServers: _.boolean().optional().describe("Whether to automatically approve all MCP servers in the project"),
        enabledMcpjsonServers: _.array(_.string()).optional().describe("List of approved MCP servers from .mcp.json"),
        disabledMcpjsonServers: _.array(_.string()).optional().describe("List of rejected MCP servers from .mcp.json"),
        allowedMcpServers: _.array(qy3).optional().describe("Enterprise allowlist of MCP servers that can be used. Applies to all scopes including enterprise servers from managed-mcp.json. If undefined, all servers are allowed. If empty array, no servers are allowed. Denylist takes precedence - if a server is on both lists, it is denied."),
        deniedMcpServers: _.array(Ny3).optional().describe("Enterprise denylist of MCP servers that are explicitly blocked. If a server is on the denylist, it will be blocked across all scopes including enterprise. Denylist takes precedence over allowlist - if a server is on both lists, it is denied."),
        hooks: AzA.optional().describe("Custom commands to run before/after tool executions"),
        disableAllHooks: _.boolean().optional().describe("Disable all hooks and statusLine execution"),
        allowManagedHooksOnly: _.boolean().optional().describe("When true (and set in managed settings), only hooks from managed settings run. User, project, and local hooks are ignored."),
        statusLine: _.object({
            type: _.literal("command"),
            command: _.string(),
            padding: _.number().optional()
        }).optional().describe("Custom status line display configuration"),
        enabledPlugins: _.record(_.union([_.array(_.string()), _.boolean(), _.undefined()])).optional().describe('Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. Also supports extended format with version constraints.'),
        extraKnownMarketplaces: _.record(_.string(), wy3).optional().describe("Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources."),
        skippedMarketplaces: _.array(_.string()).optional().describe("List of marketplace names the user has chosen not to install when prompted"),
        skippedPlugins: _.array(_.string()).optional().describe("List of plugin IDs (plugin@marketplace format) the user has chosen not to install when prompted"),
        strictKnownMarketplaces: _.array(OlA).optional().describe("Enterprise strict list of allowed marketplace sources. When set in managed settings, ONLY these exact sources can be added as marketplaces. The check happens BEFORE downloading, so blocked sources never touch the filesystem."),
        forceLoginMethod: _.enum(["claudeai", "console"]).optional().describe('Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing'),
        forceLoginOrgUUID: _.string().optional().describe("Organization UUID to use for OAuth login"),
        otelHeadersHelper: _.string().optional().describe("Path to a script that outputs OpenTelemetry headers"),
        outputStyle: _.string().optional().describe("Controls the output style for assistant responses"),
        skipWebFetchPreflight: _.boolean().optional().describe("Skip the WebFetch blocklist check for enterprise environments with restrictive security policies"),
        sandbox: LH9.optional(),
        spinnerTipsEnabled: _.boolean().optional().describe("Whether to show tips in the spinner"),
        alwaysThinkingEnabled: _.boolean().optional().describe("Whether extended thinking is always enabled (default: false)"),
        companyAnnouncements: _.array(_.string()).optional().describe("Company announcements to display at startup (one will be randomly selected if multiple are provided)"),
        pluginConfigs: _.record(_.string(), _.object({
            mcpServers: _.record(_.string(), _.record(_.string(), _.union([_.string(), _.number(), _.boolean(), _.array(_.string())]))).optional().describe("User configuration values for MCP servers keyed by server name")
        })).optional().describe("Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format)"),
        remote: _.object({
            defaultEnvironmentId: _.string().optional().describe("Default environment ID to use for remote sessions")
        }).optional().describe("Remote session configuration")
    }).passthrough()
});
import {
    dirname as OH9,
    join as VSA,
    resolve as XSA
} from "path";

function hw() {
    switch (uQ()) {
        case "macos":
            return "/Library/Application Support/ClaudeCode";
        case "windows":
            return "C:\\ProgramData\\ClaudeCode";
        default:
            return "/etc/claude-code"
    }
}

function Ly3() {
    return VSA(hw(), "managed-settings.json")
}

function My3(A, Q) {
    if (typeof A === "object" && A && "code" in A && A.code === "ENOENT") g(`Broken symlink or missing file encountered for settings.json at path: ${Q}`);
    else e(A instanceof Error ? A : Error(String(A)))
}

function RH9(A) {
    let Q = OA();
    if (!Q.existsSync(A)) return {
        settings: null,
        errors: []
    };
    try {
        let {
            resolvedPath: B
        } = kK(Q, A), G = Tq(B);
        if (G.trim() === "") return {
            settings: {},
            errors: []
        };
        let Z = S7(G, !1),
            I = D0A.safeParse(Z);
        if (!I.success) return {
            settings: null,
            errors: B50(I.error, A)
        };
        return {
            settings: I.data,
            errors: []
        }
    } catch (B) {
        return My3(B, A), {
            settings: null,
            errors: []
        }
    }
}

function aY1(A) {
    switch (A) {
        case "userSettings":
            return XSA(PQ());
        case "policySettings":
        case "projectSettings":
        case "localSettings":
            return XSA(pQ());
        case "flagSettings": {
            let Q = QX1();
            return Q ? OH9(XSA(Q)) : XSA(pQ())
        }
    }
}

function pw(A) {
    switch (A) {
        case "userSettings":
            return VSA(aY1(A), "settings.json");
        case "projectSettings":
        case "localSettings":
            return VSA(aY1(A), VMA(A));
        case "policySettings":
            return Ly3();
        case "flagSettings":
            return QX1()
    }
}

function VMA(A) {
    switch (A) {
        case "projectSettings":
            return VSA(".claude", "settings.json");
        case "localSettings":
            return VSA(".claude", "settings.local.json")
    }
}

function LB(A) {
    let Q = pw(A);
    if (!Q) return null;
    let {
        settings: B
    } = RH9(Q);
    return B
}

function cB(A, Q) {
    if (A === "policySettings" || A === "flagSettings") return {
        error: null
    };
    let B = pw(A);
    if (!B) return {
        error: null
    };
    try {
        let G = OH9(B);
        if (!OA().existsSync(G)) OA().mkdirSync(G);
        let Z = LB(A);
        if (!Z && OA().existsSync(B)) {
            let Y = Tq(B),
                J = S7(Y);
            if (J === null) return {
                error: Error(`Invalid JSON syntax in settings file at ${B}`)
            };
            if (J && typeof J === "object") Z = J, g(`Using raw settings from ${B} due to validation failure`)
        }
        let I = DC1(Z || {}, Q, (Y, J, W, X) => {
            if (J === void 0 && X && typeof W === "string") {
                delete X[W];
                return
            }
            if (Array.isArray(J)) return J;
            return
        });
        if (uc.markInternalWrite(A), J_(B, JSON.stringify(I, null, 2) + `
`), EGA(), A === "localSettings") UJ0(VMA("localSettings"), pQ())
    } catch (G) {
        let Z = Error(`Failed to read raw settings from ${B}: ${G}`);
        return e(Z), {
            error: Z
        }
    }
    return {
        error: null
    }
}

function Oy3(A, Q) {
    let B = [...A, ...Q];
    return Array.from(new Set(B))
}

function TH9(A) {
    let Q = D0A.strip().parse(A),
        B = ["permissions", "sandbox", "hooks"],
        G = [],
        Z = {
            permissions: new Set(["allow", "deny", "ask", "defaultMode", "disableBypassPermissionsMode", "additionalDirectories"]),
            sandbox: new Set(["network", "ignoreViolations", "excludedCommands", "autoAllowBashIfSandboxed", "enableWeakerNestedSandbox"]),
            hooks: new Set(["PreToolUse", "PostToolUse", "Notification", "UserPromptSubmit", "SessionStart", "SessionEnd", "Stop", "SubagentStop", "PreCompact"])
        };
    for (let I of Object.keys(Q))
        if (B.includes(I) && Q[I] && typeof Q[I] === "object") {
            let Y = Q[I],
                J = Z[I];
            if (J) {
                for (let W of Object.keys(Y))
                    if (J.has(W)) G.push(`${I}.${W}`)
            }
        } else G.push(I);
    return G.sort()
}

function EGA() {
    FSA = null
}

function Ry3() {
    let A = {},
        Q = [],
        B = new Set,
        G = new Set;
    for (let I of rs()) {
        let Y = pw(I);
        if (!Y) continue;
        let J = XSA(Y);
        if (G.has(J)) continue;
        G.add(J);
        let {
            settings: W,
            errors: X
        } = RH9(Y);
        for (let F of X) {
            let V = `${F.file}:${F.path}:${F.message}`;
            if (!B.has(V)) B.add(V), Q.push(F)
        }
        if (W) A = DC1(A, W, (F, V) => {
            if (Array.isArray(F) && Array.isArray(V)) return Oy3(F, V);
            return
        })
    }
    let Z = ["user", "project", "local"];
    return Q.push(...Z.flatMap((I) => yX(I).errors)), {
        settings: A,
        errors: Q
    }
}

function kp() {
    let {
        settings: A
    } = Wa();
    return A || {}
}

function Wa() {
    if (FSA !== null) return FSA;
    return FSA = Ry3(), FSA
}
var FSA = null,
    c0;
var RB = L(() => {
    vp0();
    M9();
    o0();
    zV();
    u1();
    D0();
    s5();
    UF();
    E3A();
    S0();
    $J0();
    hQ();
    Z50();
    GM();
    tzA();
    c0 = kp
});
import {
    basename as Ty3
} from "path";
var PH9;
var jH9 = L(() => {
    o2();
    u1();
    Ny();
    gY1();
    PH9 = t1(async () => {
        try {
            return (await qn("output-styles")).map(({
                filePath: B,
                frontmatter: G,
                content: Z,
                source: I
            }) => {
                try {
                    let J = Ty3(B).replace(/\.md$/, ""),
                        W = G.name || J,
                        X = G.description || qy(Z, `Custom ${J} output style`),
                        F = G["keep-coding-instructions"],
                        V = F === "true" ? !0 : F === "false" ? !1 : void 0;
                    return {
                        name: W,
                        description: X,
                        prompt: Z.trim(),
                        source: I,
                        keepCodingInstructions: V
                    }
                } catch (Y) {
                    return e(Y instanceof Error ? Y : Error(String(Y))), null
                }
            }).filter((B) => B !== null)
        } catch (A) {
            return e(A instanceof Error ? A : Error(String(A))), []
        }
    })
});
async function _QA() {
    let A = await PH9(),
        Q = await $V0(),
        B = {
            ...zQA
        },
        G = A.filter((J) => J.source === "policySettings"),
        Z = A.filter((J) => J.source === "userSettings"),
        I = A.filter((J) => J.source === "projectSettings"),
        Y = [Q, Z, I, G];
    for (let J of Y)
        for (let W of J) B[W.name] = {
            name: W.name,
            description: W.description,
            prompt: W.prompt,
            source: W.source,
            keepCodingInstructions: W.keepCodingInstructions
        };
    return B
}
async function IH9() {
    let Q = c0()?.outputStyle || EK;
    return (await _QA())[Q] ?? null
}
var SH9, EK = "default",
    zQA;
var ry = L(() => {
    n2();
    RB();
    jH9();
    gY1();
    SH9 = `
## Insights
In order to encourage learning, before and after writing code, always provide brief educational explanations about implementation choices using (with backticks):
"\`${V1.star} Insight ─────────────────────────────────────\`
[2-3 key educational points]
\`─────────────────────────────────────────────────\`"

These insights should be included in the conversation, not in the codebase. You should generally focus on interesting insights that are specific to the codebase or the code you just wrote, rather than general programming concepts.`, zQA = {
        [EK]: null,
        Explanatory: {
            name: "Explanatory",
            source: "built-in",
            description: "Claude explains its implementation choices and codebase patterns",
            keepCodingInstructions: !0,
            prompt: `You are an interactive CLI tool that helps users with software engineering tasks. In addition to software engineering tasks, you should provide educational insights about the codebase along the way.

You should be clear and educational, providing helpful explanations while remaining focused on the task. Balance educational content with task completion. When providing insights, you may exceed typical length constraints, but remain focused and relevant.

# Explanatory Style Active
${SH9}`
        },
        Learning: {
            name: "Learning",
            source: "built-in",
            description: "Claude pauses and asks you to write small pieces of code for hands-on practice",
            keepCodingInstructions: !0,
            prompt: `You are an interactive CLI tool that helps users with software engineering tasks. In addition to software engineering tasks, you should help users learn more about the codebase through hands-on practice and educational insights.

You should be collaborative and encouraging. Balance task completion with learning by requesting user input for meaningful design decisions while handling routine implementation yourself.   

# Learning Style Active
## Requesting Human Contributions
In order to encourage learning, ask the human to contribute 2-10 line code pieces when generating 20+ lines involving:
- Design decisions (error handling, data structures)
- Business logic with multiple valid approaches  
- Key algorithms or interface definitions

**TodoList Integration**: If using a TodoList for the overall task, include a specific todo item like "Request human input on [specific decision]" when planning to request human input. This ensures proper task tracking. Note: TodoList is not required for all tasks.

Example TodoList flow:
   ✓ "Set up component structure with placeholder for logic"
   ✓ "Request human collaboration on decision logic implementation"
   ✓ "Integrate contribution and complete feature"

### Request Format
\`\`\`
${V1.bullet} **Learn by Doing**
**Context:** [what's built and why this decision matters]
**Your Task:** [specific function/section in file, mention file and TODO(human) but do not include line numbers]
**Guidance:** [trade-offs and constraints to consider]
\`\`\`

### Key Guidelines
- Frame contributions as valuable design decisions, not busy work
- You must first add a TODO(human) section into the codebase with your editing tools before making the Learn by Doing request      
- Make sure there is one and only one TODO(human) section in the code
- Don't take any action or output anything after the Learn by Doing request. Wait for human implementation before proceeding.

### Example Requests

**Whole Function Example:**
\`\`\`
${V1.bullet} **Learn by Doing**

**Context:** I've set up the hint feature UI with a button that triggers the hint system. The infrastructure is ready: when clicked, it calls selectHintCell() to determine which cell to hint, then highlights that cell with a yellow background and shows possible values. The hint system needs to decide which empty cell would be most helpful to reveal to the user.

**Your Task:** In sudoku.js, implement the selectHintCell(board) function. Look for TODO(human). This function should analyze the board and return {row, col} for the best cell to hint, or null if the puzzle is complete.

**Guidance:** Consider multiple strategies: prioritize cells with only one possible value (naked singles), or cells that appear in rows/columns/boxes with many filled cells. You could also consider a balanced approach that helps without making it too easy. The board parameter is a 9x9 array where 0 represents empty cells.
\`\`\`

**Partial Function Example:**
\`\`\`
${V1.bullet} **Learn by Doing**

**Context:** I've built a file upload component that validates files before accepting them. The main validation logic is complete, but it needs specific handling for different file type categories in the switch statement.

**Your Task:** In upload.js, inside the validateFile() function's switch statement, implement the 'case "document":' branch. Look for TODO(human). This should validate document files (pdf, doc, docx).

**Guidance:** Consider checking file size limits (maybe 10MB for documents?), validating the file extension matches the MIME type, and returning {valid: boolean, error?: string}. The file object has properties: name, size, type.
\`\`\`

**Debugging Example:**
\`\`\`
${V1.bullet} **Learn by Doing**

**Context:** The user reported that number inputs aren't working correctly in the calculator. I've identified the handleInput() function as the likely source, but need to understand what values are being processed.

**Your Task:** In calculator.js, inside the handleInput() function, add 2-3 console.log statements after the TODO(human) comment to help debug why number inputs fail.

**Guidance:** Consider logging: the raw input value, the parsed result, and any validation state. This will help us understand where the conversion breaks.
\`\`\`

### After Contributions
Share one insight connecting their code to broader patterns or system effects. Avoid praise or repetition.

## Insights
${SH9}`
        }
    }
});

function _H9() {
    if (process.env.CLAUDE_CODE_PLAN_V2_AGENT_COUNT) {
        let B = parseInt(process.env.CLAUDE_CODE_PLAN_V2_AGENT_COUNT, 10);
        if (!isNaN(B) && B > 0 && B <= 10) return B
    }
    let A = x4(),
        Q = Dc();
    if (A === "max" && Q === "default_claude_max_20x") return 3;
    if (A === "enterprise" || A === "team") return 3;
    return 1
}

function kH9() {
    if (process.env.CLAUDE_CODE_PLAN_V2_EXPLORE_AGENT_COUNT) {
        let A = parseInt(process.env.CLAUDE_CODE_PLAN_V2_EXPLORE_AGENT_COUNT, 10);
        if (!isNaN(A) && A > 0 && A <= 10) return A
    }
    return 3
}
var yH9 = L(() => {
    hB()
});
import {
    randomUUID as uO
} from "crypto";

function f51(A) {
    return A.type !== "progress" && A.type !== "attachment" && A.type !== "system" && Array.isArray(A.message.content) && A.message.content[0]?.type === "text" && K00.has(A.message.content[0].text)
}

function Py3(A) {
    return A.type === "assistant" && A.isApiErrorMessage === !0 && A.message.model === "<synthetic>"
}

function mXA(A) {
    let Q = A.filter((B) => B.type === "assistant");
    return dC(Q)
}

function HSA(A) {
    for (let Q = A.length - 1; Q >= 0; Q--) {
        let B = A[Q];
        if (B && B.type === "assistant") {
            let Z = B.message.content;
            if (Array.isArray(Z)) return Z.some((I) => I.type === "tool_use")
        }
    }
    return !1
}

function bH9({
    content: A,
    isApiErrorMessage: Q = !1,
    error: B,
    usage: G = {
        input_tokens: 0,
        output_tokens: 0,
        cache_creation_input_tokens: 0,
        cache_read_input_tokens: 0,
        server_tool_use: {
            web_search_requests: 0,
            web_fetch_requests: 0
        },
        service_tier: null,
        cache_creation: {
            ephemeral_1h_input_tokens: 0,
            ephemeral_5m_input_tokens: 0
        }
    }
}) {
    return {
        type: "assistant",
        uuid: uO(),
        timestamp: new Date().toISOString(),
        message: {
            id: uO(),
            container: null,
            model: "<synthetic>",
            role: "assistant",
            stop_reason: "stop_sequence",
            stop_sequence: "",
            type: "message",
            usage: G,
            content: A,
            context_management: null
        },
        requestId: void 0,
        error: B,
        isApiErrorMessage: Q
    }
}

function xD({
    content: A,
    usage: Q
}) {
    return bH9({
        content: typeof A === "string" ? [{
            type: "text",
            text: A === "" ? Eq : A
        }] : A,
        usage: Q
    })
}

function WY({
    content: A,
    error: Q
}) {
    return bH9({
        content: [{
            type: "text",
            text: A === "" ? Eq : A
        }],
        isApiErrorMessage: !0,
        error: Q
    })
}

function j0({
    content: A,
    isMeta: Q,
    isVisibleInTranscriptOnly: B,
    isCompactSummary: G,
    toolUseResult: Z,
    uuid: I,
    thinkingMetadata: Y,
    timestamp: J,
    todos: W
}) {
    return {
        type: "user",
        message: {
            role: "user",
            content: A || Eq
        },
        isMeta: Q,
        isVisibleInTranscriptOnly: B,
        isCompactSummary: G,
        uuid: I ?? uO(),
        timestamp: J ?? new Date().toISOString(),
        toolUseResult: Z,
        thinkingMetadata: Y,
        todos: W
    }
}

function G$({
    inputString: A,
    precedingInputBlocks: Q
}) {
    if (Q.length === 0) return A;
    return [...Q, {
        text: A,
        type: "text"
    }]
}

function tRA({
    toolUse: A = !1
}) {
    return j0({
        content: [{
            type: "text",
            text: A ? DO : xJA
        }]
    })
}

function hF() {
    return j0({
        content: "Caveat: The messages below were generated by the user while running local commands. DO NOT respond to these messages or otherwise consider them in your response unless the user explicitly asks you to.",
        isMeta: !0
    })
}

function Jb2({
    toolUseID: A,
    parentToolUseID: Q,
    data: B
}) {
    return {
        type: "progress",
        data: B,
        toolUseID: A,
        parentToolUseID: Q,
        uuid: uO(),
        timestamp: new Date().toISOString()
    }
}

function g30(A) {
    return {
        type: "tool_result",
        content: HWA,
        is_error: !0,
        tool_use_id: A
    }
}

function e2(A, Q) {
    if (!A.trim() || !Q.trim()) return null;
    let B = Q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        G = new RegExp(`<${B}(?:\\s+[^>]*)?>([\\s\\S]*?)<\\/${B}>`, "gi"),
        Z, I = 0,
        Y = 0,
        J = new RegExp(`<${B}(?:\\s+[^>]*?)?>`, "gi"),
        W = new RegExp(`<\\/${B}>`, "gi");
    while ((Z = G.exec(A)) !== null) {
        let X = Z[1],
            F = A.slice(Y, Z.index);
        I = 0, J.lastIndex = 0;
        while (J.exec(F) !== null) I++;
        W.lastIndex = 0;
        while (W.exec(F) !== null) I--;
        if (I === 0 && X) return X;
        Y = Z.index + Z[0].length
    }
    return null
}

function LjA(A) {
    if (A.type === "progress" || A.type === "attachment" || A.type === "system") return !0;
    if (typeof A.message.content === "string") return A.message.content.trim().length > 0;
    if (A.message.content.length === 0) return !1;
    if (A.message.content.length > 1) return !0;
    if (A.message.content[0].type !== "text") return !0;
    return A.message.content[0].text.trim().length > 0 && A.message.content[0].text !== Eq && A.message.content[0].text !== DO
}

function lJ(A) {
    let Q = !1;
    return A.flatMap((B) => {
        switch (B.type) {
            case "assistant":
                return Q = Q || B.message.content.length > 1, B.message.content.map((G) => {
                    let Z = Q ? uO() : B.uuid;
                    return {
                        type: "assistant",
                        timestamp: B.timestamp,
                        message: {
                            ...B.message,
                            content: [G],
                            context_management: B.message.context_management ?? null
                        },
                        isMeta: B.isMeta,
                        requestId: B.requestId,
                        uuid: Z,
                        error: B.error,
                        isApiErrorMessage: B.isApiErrorMessage
                    }
                });
            case "attachment":
                return [B];
            case "progress":
                return [B];
            case "system":
                return [B];
            case "user": {
                if (typeof B.message.content === "string") {
                    let G = Q ? uO() : B.uuid;
                    return [{
                        ...B,
                        uuid: G,
                        message: {
                            ...B.message,
                            content: [{
                                type: "text",
                                text: B.message.content
                            }]
                        }
                    }]
                }
                return Q = Q || B.message.content.length > 1, B.message.content.map((G) => ({
                    ...j0({
                        content: [G],
                        toolUseResult: B.toolUseResult,
                        isMeta: B.isMeta,
                        isVisibleInTranscriptOnly: B.isVisibleInTranscriptOnly,
                        timestamp: B.timestamp
                    }),
                    uuid: Q ? uO() : B.uuid
                }))
            }
        }
    })
}

function xH9(A) {
    return A.type === "assistant" && A.message.content.some((Q) => Q.type === "tool_use")
}

function vb2(A) {
    return A.type === "user" && (Array.isArray(A.message.content) && A.message.content[0]?.type === "tool_result" || Boolean(A.toolUseResult))
}

function v69(A, Q) {
    let B = new Map;
    for (let Y of A) {
        if (xH9(Y)) {
            let J = Y.message.content[0]?.id;
            if (J) {
                if (!B.has(J)) B.set(J, {
                    toolUse: null,
                    preHooks: [],
                    toolResult: null,
                    postHooks: []
                });
                B.get(J).toolUse = Y
            }
            continue
        }
        if (DFA(Y) && Y.attachment.hookEvent === "PreToolUse") {
            let J = Y.attachment.toolUseID;
            if (!B.has(J)) B.set(J, {
                toolUse: null,
                preHooks: [],
                toolResult: null,
                postHooks: []
            });
            B.get(J).preHooks.push(Y);
            continue
        }
        if (Y.type === "user" && Y.message.content[0]?.type === "tool_result") {
            let J = Y.message.content[0].tool_use_id;
            if (!B.has(J)) B.set(J, {
                toolUse: null,
                preHooks: [],
                toolResult: null,
                postHooks: []
            });
            B.get(J).toolResult = Y;
            continue
        }
        if (DFA(Y) && Y.attachment.hookEvent === "PostToolUse") {
            let J = Y.attachment.toolUseID;
            if (!B.has(J)) B.set(J, {
                toolUse: null,
                preHooks: [],
                toolResult: null,
                postHooks: []
            });
            B.get(J).postHooks.push(Y);
            continue
        }
    }
    let G = [],
        Z = new Set;
    for (let Y of A) {
        if (xH9(Y)) {
            let J = Y.message.content[0]?.id;
            if (J && !Z.has(J)) {
                Z.add(J);
                let W = B.get(J);
                if (W && W.toolUse) {
                    if (G.push(W.toolUse), G.push(...W.preHooks), W.toolResult) G.push(W.toolResult);
                    G.push(...W.postHooks)
                }
            }
            continue
        }
        if (DFA(Y) && (Y.attachment.hookEvent === "PreToolUse" || Y.attachment.hookEvent === "PostToolUse")) continue;
        if (Y.type === "user" && Y.message.content[0]?.type === "tool_result") continue;
        if (Y.type === "system" && Y.subtype === "api_error") {
            let J = G.at(-1);
            if (J?.type === "system" && J.subtype === "api_error") G[G.length - 1] = Y;
            else G.push(Y);
            continue
        }
        G.push(Y)
    }
    for (let Y of Q) G.push(Y);
    let I = G.at(-1);
    return G.filter((Y) => Y.type !== "system" || Y.subtype !== "api_error" || Y === I)
}

function DFA(A) {
    return A.type === "attachment" && (A.attachment.type === "hook_blocking_error" || A.attachment.type === "hook_cancelled" || A.attachment.type === "hook_error_during_execution" || A.attachment.type === "hook_non_blocking_error" || A.attachment.type === "hook_success" || A.attachment.type === "hook_system_message" || A.attachment.type === "hook_additional_context" || A.attachment.type === "hook_stopped_continuation")
}

function c09(A, Q, B) {
    return A.filter((G) => G.type === "progress" && G.data.type === "hook_progress" && G.data.hookEvent === B && G.parentToolUseID === Q).length
}

function p09(A, Q, B) {
    return A.filter((G) => DFA(G) && G.attachment.toolUseID === Q && G.attachment.hookEvent === B).length
}

function $I1(A) {
    return Object.fromEntries(A.flatMap((Q) => Q.type === "user" && Q.message.content[0]?.type === "tool_result" ? [
        [Q.message.content[0].tool_use_id, Q.message.content[0].is_error ?? !1]
    ] : []))
}

function b69(A, Q) {
    let B = new Map,
        G = new Map;
    for (let W of Q)
        if (W.type === "assistant") {
            let X = W.message.id,
                F = B.get(X);
            if (!F) F = new Set, B.set(X, F);
            for (let V of W.message.content)
                if (V.type === "tool_use") F.add(V.id), G.set(V.id, X)
        } let Z = new Map;
    for (let [W, X] of G) Z.set(W, B.get(X));
    let I = new Map,
        Y = new Map,
        J = new Map;
    for (let W of A) {
        if (W.type === "progress") {
            let X = W.parentToolUseID,
                F = I.get(X);
            if (F) F.push(W);
            else I.set(X, [W]);
            if (W.data.type === "hook_progress") {
                let V = W.data.hookEvent,
                    K = Y.get(X);
                if (!K) K = new Map, Y.set(X, K);
                K.set(V, (K.get(V) ?? 0) + 1)
            }
        }
        if (DFA(W)) {
            let X = W.attachment.toolUseID,
                F = W.attachment.hookEvent,
                V = J.get(X);
            if (!V) V = new Map, J.set(X, V);
            V.set(F, (V.get(F) ?? 0) + 1)
        }
    }
    return {
        siblingToolUseIDs: Z,
        progressMessagesByToolUseID: I,
        inProgressHookCounts: Y,
        resolvedHookCounts: J
    }
}

function f69(A, Q) {
    let B = MjA(A);
    if (!B) return new Set;
    return Q.siblingToolUseIDs.get(B) ?? new Set
}

function h69(A, Q) {
    let B = MjA(A);
    if (!B) return [];
    return Q.progressMessagesByToolUseID.get(B) ?? []
}

function g69(A, Q, B) {
    let G = B.inProgressHookCounts.get(A)?.get(Q) ?? 0,
        Z = B.resolvedHookCounts.get(A)?.get(Q) ?? 0;
    return G > Z
}

function TX0(A) {
    let Q = $I1(A),
        B = jy3(A);
    return p89(B, new Set(Object.keys(Q)))
}

function jy3(A) {
    return new Set(A.filter((Q) => Q.type === "assistant" && Array.isArray(Q.message.content) && Q.message.content[0]?.type === "tool_use").map((Q) => Q.message.content[0].id))
}

function u69(A) {
    let Q = $I1(A);
    return new Set(A.filter((B) => B.type === "assistant" && Array.isArray(B.message.content) && B.message.content[0]?.type === "tool_use" && (B.message.content[0]?.id in Q) && Q[B.message.content[0]?.id] === !0).map((B) => B.message.content[0].id))
}

function Sy3(A) {
    let Q = [],
        B = [];
    for (let G = A.length - 1; G >= 0; G--) {
        let Z = A[G];
        if (Z.type === "attachment") B.unshift(Z);
        else if ((Z.type === "assistant" || Z.type === "user" && Array.isArray(Z.message.content) && Z.message.content[0]?.type === "tool_result") && B.length > 0) Q.unshift(Z, ...B), B.length = 0;
        else Q.unshift(Z)
    }
    return Q.unshift(...B), Q
}

function jJ9(A) {
    return A.type === "system" && A.subtype === "local_command"
}

function BZ(A, Q = []) {
    let B = Sy3(A),
        G = [];
    return B.filter((Z) => {
        if (Z.type === "progress" || Z.type === "system" || Py3(Z)) return !1;
        return !0
    }).forEach((Z) => {
        switch (Z.type) {
            case "user": {
                let I = dC(G);
                if (I?.type === "user") {
                    G[G.indexOf(I)] = xy3(I, Z);
                    return
                }
                G.push(Z);
                return
            }
            case "assistant": {
                let I = {
                    ...Z,
                    message: {
                        ...Z.message,
                        content: Z.message.content.map((Y) => {
                            if (Y.type === "tool_use") {
                                let J = Q.find((W) => W.name === Y.name);
                                if (J) return {
                                    ...Y,
                                    input: Sv2(J, Y.input)
                                }
                            }
                            return Y
                        })
                    }
                };
                for (let Y = G.length - 1; Y >= 0; Y--) {
                    let J = G[Y];
                    if (J.type !== "assistant" && !yy3(J)) break;
                    if (J.type === "assistant") {
                        if (J.message.id === I.message.id) {
                            G[Y] = ky3(J, I);
                            return
                        }
                        break
                    }
                }
                G.push(I);
                return
            }
            case "attachment": {
                let I = uy3(Z.attachment),
                    Y = dC(G);
                if (Y?.type === "user") {
                    G[G.indexOf(Y)] = I.reduce((J, W) => _y3(J, W), Y);
                    return
                }
                G.push(...I);
                return
            }
        }
    }), dy3(G)
}

function _y3(A, Q) {
    let B = sY1(A.message.content),
        G = sY1(Q.message.content);
    return {
        ...A,
        message: {
            ...A.message,
            content: fH9(vy3(B, G))
        }
    }
}

function ky3(A, Q) {
    return {
        ...A,
        message: {
            ...A.message,
            content: [...A.message.content, ...Q.message.content]
        }
    }
}

function yy3(A) {
    if (A.type !== "user") return !1;
    let Q = A.message.content;
    if (typeof Q === "string") return !1;
    return Q.some((B) => B.type === "tool_result")
}

function xy3(A, Q) {
    let B = sY1(A.message.content),
        G = sY1(Q.message.content);
    return {
        ...A,
        message: {
            ...A.message,
            content: fH9([...B, ...G])
        }
    }
}

function fH9(A) {
    let Q = [],
        B = [];
    for (let G of A)
        if (G.type === "tool_result") Q.push(G);
        else B.push(G);
    return [...Q, ...B]
}

function sY1(A) {
    if (typeof A === "string") return [{
        type: "text",
        text: A
    }];
    return A
}

function vy3(A, Q) {
    let B = dC(A);
    if (B?.type === "tool_result" && typeof B.content === "string" && Q.every((G) => G.type === "text")) return [...A.slice(0, -1), {
        ...B,
        content: [B.content, ...Q.map((G) => G.text)].map((G) => G.trim()).filter(Boolean).join(`

`)
    }];
    return [...A, ...Q]
}

function bV0(A, Q, B) {
    return A.map((G) => {
        switch (G.type) {
            case "tool_use": {
                if (typeof G.input !== "string" && !TY(G.input)) throw Error("Tool use input must be a string or object");
                let Z = typeof G.input === "string" ? S7(G.input) ?? {} : G.input;
                if (typeof Z === "object" && Z !== null) {
                    let I = Q.find((Y) => Y.name === G.name);
                    if (I) try {
                        Z = jv2(I, Z, B)
                    } catch (Y) {
                        e(Error("Error normalizing tool input: " + Y))
                    }
                }
                return {
                    ...G,
                    input: Z
                }
            }
            case "text":
                if (G.text.trim().length === 0) return BA("tengu_empty_model_response", {}), {
                    type: "text",
                    text: Eq
                };
                return G;
            case "code_execution_tool_result":
            case "mcp_tool_use":
            case "mcp_tool_result":
            case "container_upload":
            case "server_tool_use":
                return G;
            default:
                return G
        }
    })
}

function h51(A) {
    return XMA(A).trim() === "" || A.trim() === Eq
}

function XMA(A) {
    let Q = new RegExp(`<(${by3.join("|")})>.*?</\\1>
?`, "gs");
    return A.replace(Q, "").trim()
}
