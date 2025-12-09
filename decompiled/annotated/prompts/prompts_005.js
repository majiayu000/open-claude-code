/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: prompts_005.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (7次) = lazyLoader(fn) - Lazy module loader
 *   U        (3次) = moduleWrapper(fn) - CommonJS module wrapper
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: prompts
 * File: 5/10
 * Lines: 270528 - 272027 (1500 lines)
 * Original file: cli.js
 */

        netstat: {
            safeFlags: {
                "-a": "none",
                "-L": "none",
                "-l": "none",
                "-n": "none",
                "-f": "string",
                "-g": "none",
                "-i": "none",
                "-I": "string",
                "-s": "none",
                "-r": "none",
                "-m": "none",
                "-v": "none"
            }
        },
        ps: {
            safeFlags: {
                "-e": "none",
                "-A": "none",
                "-a": "none",
                "-d": "none",
                "-N": "none",
                "--deselect": "none",
                "-f": "none",
                "-F": "none",
                "-l": "none",
                "-j": "none",
                "-y": "none",
                "-w": "none",
                "-ww": "none",
                "--width": "number",
                "-c": "none",
                "-H": "none",
                "--forest": "none",
                "--headers": "none",
                "--no-headers": "none",
                "-n": "string",
                "--sort": "string",
                "-L": "none",
                "-T": "none",
                "-m": "none",
                "-C": "string",
                "-G": "string",
                "-g": "string",
                "-p": "string",
                "--pid": "string",
                "-q": "string",
                "--quick-pid": "string",
                "-s": "string",
                "--sid": "string",
                "-t": "string",
                "--tty": "string",
                "-U": "string",
                "-u": "string",
                "--user": "string",
                "--help": "none",
                "--info": "none",
                "-V": "none",
                "--version": "none"
            },
            additionalCommandIsDangerousCallback: (A) => {
                return /\s[a-zA-Z]*e[a-zA-Z]*(?:\s|$)/.test(A)
            }
        },
        base64: {
            safeFlags: {
                "-d": "none",
                "-D": "none",
                "--decode": "none",
                "-b": "number",
                "--break": "number",
                "-w": "number",
                "--wrap": "number",
                "-i": "string",
                "--input": "string",
                "--ignore-garbage": "none",
                "-h": "none",
                "--help": "none",
                "--version": "none"
            }
        },
        grep: {
            safeFlags: {
                "-e": "string",
                "--regexp": "string",
                "-f": "string",
                "--file": "string",
                "-F": "none",
                "--fixed-strings": "none",
                "-G": "none",
                "--basic-regexp": "none",
                "-E": "none",
                "--extended-regexp": "none",
                "-P": "none",
                "--perl-regexp": "none",
                "-i": "none",
                "--ignore-case": "none",
                "--no-ignore-case": "none",
                "-v": "none",
                "--invert-match": "none",
                "-w": "none",
                "--word-regexp": "none",
                "-x": "none",
                "--line-regexp": "none",
                "-c": "none",
                "--count": "none",
                "--color": "string",
                "--colour": "string",
                "-L": "none",
                "--files-without-match": "none",
                "-l": "none",
                "--files-with-matches": "none",
                "-m": "number",
                "--max-count": "number",
                "-o": "none",
                "--only-matching": "none",
                "-q": "none",
                "--quiet": "none",
                "--silent": "none",
                "-s": "none",
                "--no-messages": "none",
                "-b": "none",
                "--byte-offset": "none",
                "-H": "none",
                "--with-filename": "none",
                "-h": "none",
                "--no-filename": "none",
                "--label": "string",
                "-n": "none",
                "--line-number": "none",
                "-T": "none",
                "--initial-tab": "none",
                "-u": "none",
                "--unix-byte-offsets": "none",
                "-Z": "none",
                "--null": "none",
                "-z": "none",
                "--null-data": "none",
                "-A": "number",
                "--after-context": "number",
                "-B": "number",
                "--before-context": "number",
                "-C": "number",
                "--context": "number",
                "--group-separator": "string",
                "--no-group-separator": "none",
                "-a": "none",
                "--text": "none",
                "--binary-files": "string",
                "-D": "string",
                "--devices": "string",
                "-d": "string",
                "--directories": "string",
                "--exclude": "string",
                "--exclude-from": "string",
                "--exclude-dir": "string",
                "--include": "string",
                "-r": "none",
                "--recursive": "none",
                "-R": "none",
                "--dereference-recursive": "none",
                "--line-buffered": "none",
                "-U": "none",
                "--binary": "none",
                "--help": "none",
                "-V": "none",
                "--version": "none"
            }
        },
        rg: {
            safeFlags: {
                "-e": "string",
                "--regexp": "string",
                "-f": "string",
                "-i": "none",
                "--ignore-case": "none",
                "-S": "none",
                "--smart-case": "none",
                "-F": "none",
                "--fixed-strings": "none",
                "-w": "none",
                "--word-regexp": "none",
                "-v": "none",
                "--invert-match": "none",
                "-c": "none",
                "--count": "none",
                "-l": "none",
                "--files-with-matches": "none",
                "--files-without-match": "none",
                "-n": "none",
                "--line-number": "none",
                "-o": "none",
                "--only-matching": "none",
                "-A": "number",
                "--after-context": "number",
                "-B": "number",
                "--before-context": "number",
                "-C": "number",
                "--context": "number",
                "-H": "none",
                "-h": "none",
                "--heading": "none",
                "--no-heading": "none",
                "-q": "none",
                "--quiet": "none",
                "--column": "none",
                "-g": "string",
                "--glob": "string",
                "-t": "string",
                "--type": "string",
                "-T": "string",
                "--type-not": "string",
                "--type-list": "none",
                "--hidden": "none",
                "--no-ignore": "none",
                "-u": "none",
                "-m": "number",
                "--max-count": "number",
                "-d": "number",
                "--max-depth": "number",
                "-a": "none",
                "--text": "none",
                "-z": "none",
                "-L": "none",
                "--follow": "none",
                "--color": "string",
                "--json": "none",
                "--stats": "none",
                "--help": "none",
                "--version": "none",
                "--debug": "none",
                "--": "none"
            }
        }
    }, m85 = ["echo", "printf", "wc", "grep", "head", "tail"];
    p85 = ["date", "cal", "uptime", "head", "tail", "wc", "stat", "strings", "hexdump", "od", "nl", "id", "uname", "free", "df", "du", "locale", "hostname", "groups", "nproc", "docker ps", "docker images", "info", "help", "basename", "dirname", "realpath", "cut", "tr", "column", "diff", "true", "false", "sleep", "which", "type"], l85 = new Set([...p85.map(c85), /^echo(?:\s+(?:'[^']*'|"[^"$<>\n\r]*"|[^|;&`$(){}><#\\!"'\s]+))*(?:\s+2>&1)?\s*$/, /^claude -h$/, /^claude --help$/, /^git status(?:\s|$)[^<>()$`|{}&;\n\r]*$/, /^git blame(?:\s|$)[^<>()$`|{}&;\n\r]*$/, /^git ls-files(?:\s|$)[^<>()$`|{}&;\n\r]*$/, /^git config --get[^<>()$`|{}&;\n\r]*$/, /^git remote -v$/, /^git remote show\s+[a-zA-Z0-9_-]+$/, /^git tag$/, /^git tag -l[^<>()$`|{}&;\n\r]*$/, /^git branch$/, /^git branch (?:-v|-vv|--verbose)$/, /^git branch (?:-a|--all)$/, /^git branch (?:-r|--remotes)$/, /^git branch (?:-l|--list)(?:\s+".*"|'[^']*')?$/, /^git branch (?:--color|--no-color|--column|--no-column)$/, /^git branch --sort=\S+$/, /^git branch --show-current$/, /^git branch (?:--contains|--no-contains)\s+\S+$/, /^git branch (?:--merged|--no-merged)(?:\s+\S+)?$/, /^uniq(?:\s+(?:-[a-zA-Z]+|--[a-zA-Z-]+(?:=\S+)?|-[fsw]\s+\d+))*(?:\s|$)\s*$/, /^pwd$/, /^whoami$/, /^node -v$/, /^npm -v$/, /^python --version$/, /^python3 --version$/, /^tree$/, /^history(?:\s+\d+)?\s*$/, /^alias$/, /^arch(?:\s+(?:--help|-h))?\s*$/, /^ip addr$/, /^ifconfig(?:\s+[a-zA-Z][a-zA-Z0-9_-]*)?\s*$/, /^jq(?!\s+.*(?:-f\b|--from-file|--rawfile|--slurpfile|--run-tests|-L\b|--library-path))(?:\s+(?:-[a-zA-Z]+|--[a-zA-Z-]+(?:=\S+)?))*(?:\s+'[^'`]*'|\s+"[^"`]*"|\s+[^-\s'"][^\s]*)+\s*$/, /^cd(?:\s+(?:'[^']*'|"[^"]*"|[^\s;|&`$(){}><#\\]+))?$/, /^ls(?:\s+[^<>()$`|{}&;\n\r]*)?$/, /^find(?:\s+(?:\\[()]|(?!-delete\b|-exec\b|-execdir\b|-ok\b|-okdir\b|-fprint0?\b|-fls\b|-fprintf\b)[^<>()$`|{}&;\n\r\s]|\s)+)?$/])
});
var ol = "2025-06-18",
    $Q1, wQ1 = "2.0",
    V92, K92, a85, dM, mU, LLA, Ok, cM, qQ1, D92, NQ1 = (A) => D92.safeParse(A).success,
    H92, C92 = (A) => H92.safeParse(A).success,
    E92, MLA = (A) => E92.safeParse(A).success,
    kE, z92, U92 = (A) => z92.safeParse(A).success,
    Rk, Yh, LQ1, OLA, $92, s85, Ue1, r85, $e1, MQ1, w92 = (A) => MQ1.safeParse(A).success,
    OQ1, o85, RQ1, TQ1, PQ1, q92, N92, we1, L92, M92, t85, e85, aAA, A65, qe1, Q65, tl, B65, G65, Z65, I65, Y65, J65, W65, RLA, X65, Ne1, Le1, Me1, F65, V65, O92, K65, Oe1, D65, H65, C65, Re1, TLA, sT, ZMG, Te1, E65, R92, z65, U65, $65, w65, q65, N65, Pe1, L65, M65, O65, R65, T65, T92, je1, P65, j65, S65, Se1, _65, _e1, ke1, k65, IMG, YMG, JMG, WMG, XMG, FMG, yE;
var PD = L(() => {
    h2();
    $Q1 = [ol, "2025-03-26", "2024-11-05", "2024-10-07"], V92 = _.union([_.string(), _.number().int()]), K92 = _.string(), a85 = _.object({
        progressToken: _.optional(V92)
    }).passthrough(), dM = _.object({
        _meta: _.optional(a85)
    }).passthrough(), mU = _.object({
        method: _.string(),
        params: _.optional(dM)
    }), LLA = _.object({
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), Ok = _.object({
        method: _.string(),
        params: _.optional(LLA)
    }), cM = _.object({
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), qQ1 = _.union([_.string(), _.number().int()]), D92 = _.object({
        jsonrpc: _.literal(wQ1),
        id: qQ1
    }).merge(mU).strict(), H92 = _.object({
        jsonrpc: _.literal(wQ1)
    }).merge(Ok).strict(), E92 = _.object({
        jsonrpc: _.literal(wQ1),
        id: qQ1,
        result: cM
    }).strict();
    (function(A) {
        A[A.ConnectionClosed = -32000] = "ConnectionClosed", A[A.RequestTimeout = -32001] = "RequestTimeout", A[A.ParseError = -32700] = "ParseError", A[A.InvalidRequest = -32600] = "InvalidRequest", A[A.MethodNotFound = -32601] = "MethodNotFound", A[A.InvalidParams = -32602] = "InvalidParams", A[A.InternalError = -32603] = "InternalError"
    })(kE || (kE = {}));
    z92 = _.object({
        jsonrpc: _.literal(wQ1),
        id: qQ1,
        error: _.object({
            code: _.number().int(),
            message: _.string(),
            data: _.optional(_.unknown())
        })
    }).strict(), Rk = _.union([D92, H92, E92, z92]), Yh = cM.strict(), LQ1 = Ok.extend({
        method: _.literal("notifications/cancelled"),
        params: LLA.extend({
            requestId: qQ1,
            reason: _.string().optional()
        })
    }), OLA = _.object({
        name: _.string(),
        title: _.optional(_.string())
    }).passthrough(), $92 = OLA.extend({
        version: _.string()
    }), s85 = _.object({
        experimental: _.optional(_.object({}).passthrough()),
        sampling: _.optional(_.object({}).passthrough()),
        elicitation: _.optional(_.object({}).passthrough()),
        roots: _.optional(_.object({
            listChanged: _.optional(_.boolean())
        }).passthrough())
    }).passthrough(), Ue1 = mU.extend({
        method: _.literal("initialize"),
        params: dM.extend({
            protocolVersion: _.string(),
            capabilities: s85,
            clientInfo: $92
        })
    }), r85 = _.object({
        experimental: _.optional(_.object({}).passthrough()),
        logging: _.optional(_.object({}).passthrough()),
        completions: _.optional(_.object({}).passthrough()),
        prompts: _.optional(_.object({
            listChanged: _.optional(_.boolean())
        }).passthrough()),
        resources: _.optional(_.object({
            subscribe: _.optional(_.boolean()),
            listChanged: _.optional(_.boolean())
        }).passthrough()),
        tools: _.optional(_.object({
            listChanged: _.optional(_.boolean())
        }).passthrough())
    }).passthrough(), $e1 = cM.extend({
        protocolVersion: _.string(),
        capabilities: r85,
        serverInfo: $92,
        instructions: _.optional(_.string())
    }), MQ1 = Ok.extend({
        method: _.literal("notifications/initialized")
    }), OQ1 = mU.extend({
        method: _.literal("ping")
    }), o85 = _.object({
        progress: _.number(),
        total: _.optional(_.number()),
        message: _.optional(_.string())
    }).passthrough(), RQ1 = Ok.extend({
        method: _.literal("notifications/progress"),
        params: LLA.merge(o85).extend({
            progressToken: V92
        })
    }), TQ1 = mU.extend({
        params: dM.extend({
            cursor: _.optional(K92)
        }).optional()
    }), PQ1 = cM.extend({
        nextCursor: _.optional(K92)
    }), q92 = _.object({
        uri: _.string(),
        mimeType: _.optional(_.string()),
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), N92 = q92.extend({
        text: _.string()
    }), we1 = _.string().refine((A) => {
        try {
            return atob(A), !0
        } catch (Q) {
            return !1
        }
    }, {
        message: "Invalid Base64 string"
    }), L92 = q92.extend({
        blob: we1
    }), M92 = OLA.extend({
        uri: _.string(),
        description: _.optional(_.string()),
        mimeType: _.optional(_.string()),
        _meta: _.optional(_.object({}).passthrough())
    }), t85 = OLA.extend({
        uriTemplate: _.string(),
        description: _.optional(_.string()),
        mimeType: _.optional(_.string()),
        _meta: _.optional(_.object({}).passthrough())
    }), e85 = TQ1.extend({
        method: _.literal("resources/list")
    }), aAA = PQ1.extend({
        resources: _.array(M92)
    }), A65 = TQ1.extend({
        method: _.literal("resources/templates/list")
    }), qe1 = PQ1.extend({
        resourceTemplates: _.array(t85)
    }), Q65 = mU.extend({
        method: _.literal("resources/read"),
        params: dM.extend({
            uri: _.string()
        })
    }), tl = cM.extend({
        contents: _.array(_.union([N92, L92]))
    }), B65 = Ok.extend({
        method: _.literal("notifications/resources/list_changed")
    }), G65 = mU.extend({
        method: _.literal("resources/subscribe"),
        params: dM.extend({
            uri: _.string()
        })
    }), Z65 = mU.extend({
        method: _.literal("resources/unsubscribe"),
        params: dM.extend({
            uri: _.string()
        })
    }), I65 = Ok.extend({
        method: _.literal("notifications/resources/updated"),
        params: LLA.extend({
            uri: _.string()
        })
    }), Y65 = _.object({
        name: _.string(),
        description: _.optional(_.string()),
        required: _.optional(_.boolean())
    }).passthrough(), J65 = OLA.extend({
        description: _.optional(_.string()),
        arguments: _.optional(_.array(Y65)),
        _meta: _.optional(_.object({}).passthrough())
    }), W65 = TQ1.extend({
        method: _.literal("prompts/list")
    }), RLA = PQ1.extend({
        prompts: _.array(J65)
    }), X65 = mU.extend({
        method: _.literal("prompts/get"),
        params: dM.extend({
            name: _.string(),
            arguments: _.optional(_.record(_.string()))
        })
    }), Ne1 = _.object({
        type: _.literal("text"),
        text: _.string(),
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), Le1 = _.object({
        type: _.literal("image"),
        data: we1,
        mimeType: _.string(),
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), Me1 = _.object({
        type: _.literal("audio"),
        data: we1,
        mimeType: _.string(),
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), F65 = _.object({
        type: _.literal("resource"),
        resource: _.union([N92, L92]),
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), V65 = M92.extend({
        type: _.literal("resource_link")
    }), O92 = _.union([Ne1, Le1, Me1, V65, F65]), K65 = _.object({
        role: _.enum(["user", "assistant"]),
        content: O92
    }).passthrough(), Oe1 = cM.extend({
        description: _.optional(_.string()),
        messages: _.array(K65)
    }), D65 = Ok.extend({
        method: _.literal("notifications/prompts/list_changed")
    }), H65 = _.object({
        title: _.optional(_.string()),
        readOnlyHint: _.optional(_.boolean()),
        destructiveHint: _.optional(_.boolean()),
        idempotentHint: _.optional(_.boolean()),
        openWorldHint: _.optional(_.boolean())
    }).passthrough(), C65 = OLA.extend({
        description: _.optional(_.string()),
        inputSchema: _.object({
            type: _.literal("object"),
            properties: _.optional(_.object({}).passthrough()),
            required: _.optional(_.array(_.string()))
        }).passthrough(),
        outputSchema: _.optional(_.object({
            type: _.literal("object"),
            properties: _.optional(_.object({}).passthrough()),
            required: _.optional(_.array(_.string()))
        }).passthrough()),
        annotations: _.optional(H65),
        _meta: _.optional(_.object({}).passthrough())
    }), Re1 = TQ1.extend({
        method: _.literal("tools/list")
    }), TLA = PQ1.extend({
        tools: _.array(C65)
    }), sT = cM.extend({
        content: _.array(O92).default([]),
        structuredContent: _.object({}).passthrough().optional(),
        isError: _.optional(_.boolean())
    }), ZMG = sT.or(cM.extend({
        toolResult: _.unknown()
    })), Te1 = mU.extend({
        method: _.literal("tools/call"),
        params: dM.extend({
            name: _.string(),
            arguments: _.optional(_.record(_.unknown()))
        })
    }), E65 = Ok.extend({
        method: _.literal("notifications/tools/list_changed")
    }), R92 = _.enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), z65 = mU.extend({
        method: _.literal("logging/setLevel"),
        params: dM.extend({
            level: R92
        })
    }), U65 = Ok.extend({
        method: _.literal("notifications/message"),
        params: LLA.extend({
            level: R92,
            logger: _.optional(_.string()),
            data: _.unknown()
        })
    }), $65 = _.object({
        name: _.string().optional()
    }).passthrough(), w65 = _.object({
        hints: _.optional(_.array($65)),
        costPriority: _.optional(_.number().min(0).max(1)),
        speedPriority: _.optional(_.number().min(0).max(1)),
        intelligencePriority: _.optional(_.number().min(0).max(1))
    }).passthrough(), q65 = _.object({
        role: _.enum(["user", "assistant"]),
        content: _.union([Ne1, Le1, Me1])
    }).passthrough(), N65 = mU.extend({
        method: _.literal("sampling/createMessage"),
        params: dM.extend({
            messages: _.array(q65),
            systemPrompt: _.optional(_.string()),
            includeContext: _.optional(_.enum(["none", "thisServer", "allServers"])),
            temperature: _.optional(_.number()),
            maxTokens: _.number().int(),
            stopSequences: _.optional(_.array(_.string())),
            metadata: _.optional(_.object({}).passthrough()),
            modelPreferences: _.optional(w65)
        })
    }), Pe1 = cM.extend({
        model: _.string(),
        stopReason: _.optional(_.enum(["endTurn", "stopSequence", "maxTokens"]).or(_.string())),
        role: _.enum(["user", "assistant"]),
        content: _.discriminatedUnion("type", [Ne1, Le1, Me1])
    }), L65 = _.object({
        type: _.literal("boolean"),
        title: _.optional(_.string()),
        description: _.optional(_.string()),
        default: _.optional(_.boolean())
    }).passthrough(), M65 = _.object({
        type: _.literal("string"),
        title: _.optional(_.string()),
        description: _.optional(_.string()),
        minLength: _.optional(_.number()),
        maxLength: _.optional(_.number()),
        format: _.optional(_.enum(["email", "uri", "date", "date-time"]))
    }).passthrough(), O65 = _.object({
        type: _.enum(["number", "integer"]),
        title: _.optional(_.string()),
        description: _.optional(_.string()),
        minimum: _.optional(_.number()),
        maximum: _.optional(_.number())
    }).passthrough(), R65 = _.object({
        type: _.literal("string"),
        title: _.optional(_.string()),
        description: _.optional(_.string()),
        enum: _.array(_.string()),
        enumNames: _.optional(_.array(_.string()))
    }).passthrough(), T65 = _.union([L65, M65, O65, R65]), T92 = mU.extend({
        method: _.literal("elicitation/create"),
        params: dM.extend({
            message: _.string(),
            requestedSchema: _.object({
                type: _.literal("object"),
                properties: _.record(_.string(), T65),
                required: _.optional(_.array(_.string()))
            }).passthrough()
        })
    }), je1 = cM.extend({
        action: _.enum(["accept", "decline", "cancel"]),
        content: _.optional(_.record(_.string(), _.unknown()))
    }), P65 = _.object({
        type: _.literal("ref/resource"),
        uri: _.string()
    }).passthrough(), j65 = _.object({
        type: _.literal("ref/prompt"),
        name: _.string()
    }).passthrough(), S65 = mU.extend({
        method: _.literal("completion/complete"),
        params: dM.extend({
            ref: _.union([j65, P65]),
            argument: _.object({
                name: _.string(),
                value: _.string()
            }).passthrough(),
            context: _.optional(_.object({
                arguments: _.optional(_.record(_.string(), _.string()))
            }))
        })
    }), Se1 = cM.extend({
        completion: _.object({
            values: _.array(_.string()).max(100),
            total: _.optional(_.number().int()),
            hasMore: _.optional(_.boolean())
        }).passthrough()
    }), _65 = _.object({
        uri: _.string().startsWith("file://"),
        name: _.optional(_.string()),
        _meta: _.optional(_.object({}).passthrough())
    }).passthrough(), _e1 = mU.extend({
        method: _.literal("roots/list")
    }), ke1 = cM.extend({
        roots: _.array(_65)
    }), k65 = Ok.extend({
        method: _.literal("notifications/roots/list_changed")
    }), IMG = _.union([OQ1, Ue1, S65, z65, X65, W65, e85, A65, Q65, G65, Z65, Te1, Re1]), YMG = _.union([LQ1, RQ1, MQ1, k65]), JMG = _.union([Yh, Pe1, je1, ke1]), WMG = _.union([OQ1, N65, T92, _e1]), XMG = _.union([LQ1, RQ1, U65, I65, B65, E65, D65]), FMG = _.union([Yh, $e1, Se1, Oe1, RLA, aAA, qe1, tl, sT, TLA]);
    yE = class yE extends Error {
        constructor(A, Q, B) {
            super(`MCP error ${A}: ${Q}`);
            this.code = A, this.data = B, this.name = "McpError"
        }
    }
});
class PLA {
    constructor(A) {
        this._options = A, this._requestMessageId = 0, this._requestHandlers = new Map, this._requestHandlerAbortControllers = new Map, this._notificationHandlers = new Map, this._responseHandlers = new Map, this._progressHandlers = new Map, this._timeoutInfo = new Map, this._pendingDebouncedNotifications = new Set, this.setNotificationHandler(LQ1, (Q) => {
            let B = this._requestHandlerAbortControllers.get(Q.params.requestId);
            B === null || B === void 0 || B.abort(Q.params.reason)
        }), this.setNotificationHandler(RQ1, (Q) => {
            this._onprogress(Q)
        }), this.setRequestHandler(OQ1, (Q) => ({}))
    }
    _setupTimeout(A, Q, B, G, Z = !1) {
        this._timeoutInfo.set(A, {
            timeoutId: setTimeout(G, Q),
            startTime: Date.now(),
            timeout: Q,
            maxTotalTimeout: B,
            resetTimeoutOnProgress: Z,
            onTimeout: G
        })
    }
    _resetTimeout(A) {
        let Q = this._timeoutInfo.get(A);
        if (!Q) return !1;
        let B = Date.now() - Q.startTime;
        if (Q.maxTotalTimeout && B >= Q.maxTotalTimeout) throw this._timeoutInfo.delete(A), new yE(kE.RequestTimeout, "Maximum total timeout exceeded", {
            maxTotalTimeout: Q.maxTotalTimeout,
            totalElapsed: B
        });
        return clearTimeout(Q.timeoutId), Q.timeoutId = setTimeout(Q.onTimeout, Q.timeout), !0
    }
    _cleanupTimeout(A) {
        let Q = this._timeoutInfo.get(A);
        if (Q) clearTimeout(Q.timeoutId), this._timeoutInfo.delete(A)
    }
    async connect(A) {
        var Q, B, G;
        this._transport = A;
        let Z = (Q = this.transport) === null || Q === void 0 ? void 0 : Q.onclose;
        this._transport.onclose = () => {
            Z === null || Z === void 0 || Z(), this._onclose()
        };
        let I = (B = this.transport) === null || B === void 0 ? void 0 : B.onerror;
        this._transport.onerror = (J) => {
            I === null || I === void 0 || I(J), this._onerror(J)
        };
        let Y = (G = this._transport) === null || G === void 0 ? void 0 : G.onmessage;
        this._transport.onmessage = (J, W) => {
            if (Y === null || Y === void 0 || Y(J, W), MLA(J) || U92(J)) this._onresponse(J);
            else if (NQ1(J)) this._onrequest(J, W);
            else if (C92(J)) this._onnotification(J);
            else this._onerror(Error(`Unknown message type: ${JSON.stringify(J)}`))
        }, await this._transport.start()
    }
    _onclose() {
        var A;
        let Q = this._responseHandlers;
        this._responseHandlers = new Map, this._progressHandlers.clear(), this._pendingDebouncedNotifications.clear(), this._transport = void 0, (A = this.onclose) === null || A === void 0 || A.call(this);
        let B = new yE(kE.ConnectionClosed, "Connection closed");
        for (let G of Q.values()) G(B)
    }
    _onerror(A) {
        var Q;
        (Q = this.onerror) === null || Q === void 0 || Q.call(this, A)
    }
    _onnotification(A) {
        var Q;
        let B = (Q = this._notificationHandlers.get(A.method)) !== null && Q !== void 0 ? Q : this.fallbackNotificationHandler;
        if (B === void 0) return;
        Promise.resolve().then(() => B(A)).catch((G) => this._onerror(Error(`Uncaught error in notification handler: ${G}`)))
    }
    _onrequest(A, Q) {
        var B, G;
        let Z = (B = this._requestHandlers.get(A.method)) !== null && B !== void 0 ? B : this.fallbackRequestHandler,
            I = this._transport;
        if (Z === void 0) {
            I === null || I === void 0 || I.send({
                jsonrpc: "2.0",
                id: A.id,
                error: {
                    code: kE.MethodNotFound,
                    message: "Method not found"
                }
            }).catch((W) => this._onerror(Error(`Failed to send an error response: ${W}`)));
            return
        }
        let Y = new AbortController;
        this._requestHandlerAbortControllers.set(A.id, Y);
        let J = {
            signal: Y.signal,
            sessionId: I === null || I === void 0 ? void 0 : I.sessionId,
            _meta: (G = A.params) === null || G === void 0 ? void 0 : G._meta,
            sendNotification: (W) => this.notification(W, {
                relatedRequestId: A.id
            }),
            sendRequest: (W, X, F) => this.request(W, X, {
                ...F,
                relatedRequestId: A.id
            }),
            authInfo: Q === null || Q === void 0 ? void 0 : Q.authInfo,
            requestId: A.id,
            requestInfo: Q === null || Q === void 0 ? void 0 : Q.requestInfo
        };
        Promise.resolve().then(() => Z(A, J)).then((W) => {
            if (Y.signal.aborted) return;
            return I === null || I === void 0 ? void 0 : I.send({
                result: W,
                jsonrpc: "2.0",
                id: A.id
            })
        }, (W) => {
            var X;
            if (Y.signal.aborted) return;
            return I === null || I === void 0 ? void 0 : I.send({
                jsonrpc: "2.0",
                id: A.id,
                error: {
                    code: Number.isSafeInteger(W.code) ? W.code : kE.InternalError,
                    message: (X = W.message) !== null && X !== void 0 ? X : "Internal error"
                }
            })
        }).catch((W) => this._onerror(Error(`Failed to send response: ${W}`))).finally(() => {
            this._requestHandlerAbortControllers.delete(A.id)
        })
    }
    _onprogress(A) {
        let {
            progressToken: Q,
            ...B
        } = A.params, G = Number(Q), Z = this._progressHandlers.get(G);
        if (!Z) {
            this._onerror(Error(`Received a progress notification for an unknown token: ${JSON.stringify(A)}`));
            return
        }
        let I = this._responseHandlers.get(G),
            Y = this._timeoutInfo.get(G);
        if (Y && I && Y.resetTimeoutOnProgress) try {
            this._resetTimeout(G)
        } catch (J) {
            I(J);
            return
        }
        Z(B)
    }
    _onresponse(A) {
        let Q = Number(A.id),
            B = this._responseHandlers.get(Q);
        if (B === void 0) {
            this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(A)}`));
            return
        }
        if (this._responseHandlers.delete(Q), this._progressHandlers.delete(Q), this._cleanupTimeout(Q), MLA(A)) B(A);
        else {
            let G = new yE(A.error.code, A.error.message, A.error.data);
            B(G)
        }
    }
    get transport() {
        return this._transport
    }
    async close() {
        var A;
        await ((A = this._transport) === null || A === void 0 ? void 0 : A.close())
    }
    request(A, Q, B) {
        let {
            relatedRequestId: G,
            resumptionToken: Z,
            onresumptiontoken: I
        } = B !== null && B !== void 0 ? B : {};
        return new Promise((Y, J) => {
            var W, X, F, V, K, D;
            if (!this._transport) {
                J(Error("Not connected"));
                return
            }
            if (((W = this._options) === null || W === void 0 ? void 0 : W.enforceStrictCapabilities) === !0) this.assertCapabilityForMethod(A.method);
            (X = B === null || B === void 0 ? void 0 : B.signal) === null || X === void 0 || X.throwIfAborted();
            let H = this._requestMessageId++,
                C = {
                    ...A,
                    jsonrpc: "2.0",
                    id: H
                };
            if (B === null || B === void 0 ? void 0 : B.onprogress) this._progressHandlers.set(H, B.onprogress), C.params = {
                ...A.params,
                _meta: {
                    ...((F = A.params) === null || F === void 0 ? void 0 : F._meta) || {},
                    progressToken: H
                }
            };
            let E = (N) => {
                var q;
                this._responseHandlers.delete(H), this._progressHandlers.delete(H), this._cleanupTimeout(H), (q = this._transport) === null || q === void 0 || q.send({
                    jsonrpc: "2.0",
                    method: "notifications/cancelled",
                    params: {
                        requestId: H,
                        reason: String(N)
                    }
                }, {
                    relatedRequestId: G,
                    resumptionToken: Z,
                    onresumptiontoken: I
                }).catch((R) => this._onerror(Error(`Failed to send cancellation: ${R}`))), J(N)
            };
            this._responseHandlers.set(H, (N) => {
                var q;
                if ((q = B === null || B === void 0 ? void 0 : B.signal) === null || q === void 0 ? void 0 : q.aborted) return;
                if (N instanceof Error) return J(N);
                try {
                    let R = Q.parse(N.result);
                    Y(R)
                } catch (R) {
                    J(R)
                }
            }), (V = B === null || B === void 0 ? void 0 : B.signal) === null || V === void 0 || V.addEventListener("abort", () => {
                var N;
                E((N = B === null || B === void 0 ? void 0 : B.signal) === null || N === void 0 ? void 0 : N.reason)
            });
            let z = (K = B === null || B === void 0 ? void 0 : B.timeout) !== null && K !== void 0 ? K : y65,
                w = () => E(new yE(kE.RequestTimeout, "Request timed out", {
                    timeout: z
                }));
            this._setupTimeout(H, z, B === null || B === void 0 ? void 0 : B.maxTotalTimeout, w, (D = B === null || B === void 0 ? void 0 : B.resetTimeoutOnProgress) !== null && D !== void 0 ? D : !1), this._transport.send(C, {
                relatedRequestId: G,
                resumptionToken: Z,
                onresumptiontoken: I
            }).catch((N) => {
                this._cleanupTimeout(H), J(N)
            })
        })
    }
    async notification(A, Q) {
        var B, G;
        if (!this._transport) throw Error("Not connected");
        if (this.assertNotificationCapability(A.method), ((G = (B = this._options) === null || B === void 0 ? void 0 : B.debouncedNotificationMethods) !== null && G !== void 0 ? G : []).includes(A.method) && !A.params && !(Q === null || Q === void 0 ? void 0 : Q.relatedRequestId)) {
            if (this._pendingDebouncedNotifications.has(A.method)) return;
            this._pendingDebouncedNotifications.add(A.method), Promise.resolve().then(() => {
                var J;
                if (this._pendingDebouncedNotifications.delete(A.method), !this._transport) return;
                let W = {
                    ...A,
                    jsonrpc: "2.0"
                };
                (J = this._transport) === null || J === void 0 || J.send(W, Q).catch((X) => this._onerror(X))
            });
            return
        }
        let Y = {
            ...A,
            jsonrpc: "2.0"
        };
        await this._transport.send(Y, Q)
    }
    setRequestHandler(A, Q) {
        let B = A.shape.method.value;
        this.assertRequestHandlerCapability(B), this._requestHandlers.set(B, (G, Z) => {
            return Promise.resolve(Q(A.parse(G), Z))
        })
    }
    removeRequestHandler(A) {
        this._requestHandlers.delete(A)
    }
    assertCanSetRequestHandler(A) {
        if (this._requestHandlers.has(A)) throw Error(`A request handler for ${A} already exists, which would be overridden`)
    }
    setNotificationHandler(A, Q) {
        this._notificationHandlers.set(A.shape.method.value, (B) => Promise.resolve(Q(A.parse(B))))
    }
    removeNotificationHandler(A) {
        this._notificationHandlers.delete(A)
    }
}

function jQ1(A, Q) {
    return Object.entries(Q).reduce((B, [G, Z]) => {
        if (Z && typeof Z === "object") B[G] = B[G] ? {
            ...B[G],
            ...Z
        } : Z;
        else B[G] = Z;
        return B
    }, {
        ...A
    })
}
var y65 = 60000;
var ye1 = L(() => {
    PD()
});
var j92 = U((SQ1, P92) => {
    (function(A, Q) {
        typeof SQ1 === "object" && typeof P92 < "u" ? Q(SQ1) : typeof define === "function" && define.amd ? define(["exports"], Q) : Q(A.URI = A.URI || {})
    })(SQ1, function(A) {
        function Q() {
            for (var U1 = arguments.length, nA = Array(U1), C1 = 0; C1 < U1; C1++) nA[C1] = arguments[C1];
            if (nA.length > 1) {
                nA[0] = nA[0].slice(0, -1);
                var O1 = nA.length - 1;
                for (var y1 = 1; y1 < O1; ++y1) nA[y1] = nA[y1].slice(1, -1);
                return nA[O1] = nA[O1].slice(1), nA.join("")
            } else return nA[0]
        }

        function B(U1) {
            return "(?:" + U1 + ")"
        }

        function G(U1) {
            return U1 === void 0 ? "undefined" : U1 === null ? "null" : Object.prototype.toString.call(U1).split(" ").pop().split("]").shift().toLowerCase()
        }

        function Z(U1) {
            return U1.toUpperCase()
        }

        function I(U1) {
            return U1 !== void 0 && U1 !== null ? U1 instanceof Array ? U1 : typeof U1.length !== "number" || U1.split || U1.setInterval || U1.call ? [U1] : Array.prototype.slice.call(U1) : []
        }

        function Y(U1, nA) {
            var C1 = U1;
            if (nA)
                for (var O1 in nA) C1[O1] = nA[O1];
            return C1
        }

        function J(U1) {
            var nA = "[A-Za-z]",
                C1 = "[\\x0D]",
                O1 = "[0-9]",
                y1 = "[\\x22]",
                O0 = Q(O1, "[A-Fa-f]"),
                oQ = "[\\x0A]",
                lB = "[\\x20]",
                k9 = B(B("%[EFef]" + O0 + "%" + O0 + O0 + "%" + O0 + O0) + "|" + B("%[89A-Fa-f]" + O0 + "%" + O0 + O0) + "|" + B("%" + O0 + O0)),
                C6 = "[\\:\\/\\?\\#\\[\\]\\@]",
                y9 = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
                A6 = Q(C6, y9),
                v6 = U1 ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
                w8 = U1 ? "[\\uE000-\\uF8FF]" : "[]",
                i9 = Q(nA, O1, "[\\-\\.\\_\\~]", v6),
                Q6 = B(nA + Q(nA, O1, "[\\+\\-\\.]") + "*"),
                $4 = B(B(k9 + "|" + Q(i9, y9, "[\\:]")) + "*"),
                n7 = B(B("25[0-5]") + "|" + B("2[0-4]" + O1) + "|" + B("1" + O1 + O1) + "|" + B("[1-9]" + O1) + "|" + O1),
                B6 = B(B("25[0-5]") + "|" + B("2[0-4]" + O1) + "|" + B("1" + O1 + O1) + "|" + B("0?[1-9]" + O1) + "|0?0?" + O1),
                k5 = B(B6 + "\\." + B6 + "\\." + B6 + "\\." + B6),
                g9 = B(O0 + "{1,4}"),
                g4 = B(B(g9 + "\\:" + g9) + "|" + k5),
                q8 = B(B(g9 + "\\:") + "{6}" + g4),
                B8 = B("\\:\\:" + B(g9 + "\\:") + "{5}" + g4),
                W5 = B(B(g9) + "?\\:\\:" + B(g9 + "\\:") + "{4}" + g4),
                u9 = B(B(B(g9 + "\\:") + "{0,1}" + g9) + "?\\:\\:" + B(g9 + "\\:") + "{3}" + g4),
                w4 = B(B(B(g9 + "\\:") + "{0,2}" + g9) + "?\\:\\:" + B(g9 + "\\:") + "{2}" + g4),
                E3 = B(B(B(g9 + "\\:") + "{0,3}" + g9) + "?\\:\\:" + g9 + "\\:" + g4),
                V9 = B(B(B(g9 + "\\:") + "{0,4}" + g9) + "?\\:\\:" + g4),
                Q4 = B(B(B(g9 + "\\:") + "{0,5}" + g9) + "?\\:\\:" + g9),
                dA = B(B(B(g9 + "\\:") + "{0,6}" + g9) + "?\\:\\:"),
                YA = B([q8, B8, W5, u9, w4, E3, V9, Q4, dA].join("|")),
                ZA = B(B(i9 + "|" + k9) + "+"),
                jA = B(YA + "\\%25" + ZA),
                xA = B(YA + B("\\%25|\\%(?!" + O0 + "{2})") + ZA),
                mA = B("[vV]" + O0 + "+\\." + Q(i9, y9, "[\\:]") + "+"),
                E1 = B("\\[" + B(xA + "|" + YA + "|" + mA) + "\\]"),
                S1 = B(B(k9 + "|" + Q(i9, y9)) + "*"),
                P1 = B(E1 + "|" + k5 + "(?!" + S1 + ")|" + S1),
                c1 = B(O1 + "*"),
                l1 = B(B($4 + "@") + "?" + P1 + B("\\:" + c1) + "?"),
                I0 = B(k9 + "|" + Q(i9, y9, "[\\:\\@]")),
                e0 = B(I0 + "*"),
                dQ = B(I0 + "+"),
                iB = B(B(k9 + "|" + Q(i9, y9, "[\\@]")) + "+"),
                EB = B(B("\\/" + e0) + "*"),
                m2 = B("\\/" + B(dQ + EB) + "?"),
                q4 = B(iB + EB),
                J7 = B(dQ + EB),
                X5 = "(?!" + I0 + ")",
                sW = B(EB + "|" + m2 + "|" + q4 + "|" + J7 + "|" + X5),
                l5 = B(B(I0 + "|" + Q("[\\/\\?]", w8)) + "*"),
                tJ = B(B(I0 + "|[\\/\\?]") + "*"),
                AJ = B(B("\\/\\/" + l1 + EB) + "|" + m2 + "|" + J7 + "|" + X5),
                B4 = B(Q6 + "\\:" + AJ + B("\\?" + l5) + "?" + B("\\#" + tJ) + "?"),
                QV = B(B("\\/\\/" + l1 + EB) + "|" + m2 + "|" + q4 + "|" + X5),
                HG = B(QV + B("\\?" + l5) + "?" + B("\\#" + tJ) + "?"),
                eJ = B(B4 + "|" + HG),
                WF = B(Q6 + "\\:" + AJ + B("\\?" + l5) + "?"),
                BV = "^(" + Q6 + ")\\:" + B(B("\\/\\/(" + B("(" + $4 + ")@") + "?(" + P1 + ")" + B("\\:(" + c1 + ")") + "?)") + "?(" + EB + "|" + m2 + "|" + J7 + "|" + X5 + ")") + B("\\?(" + l5 + ")") + "?" + B("\\#(" + tJ + ")") + "?$",
                z3 = "^(){0}" + B(B("\\/\\/(" + B("(" + $4 + ")@") + "?(" + P1 + ")" + B("\\:(" + c1 + ")") + "?)") + "?(" + EB + "|" + m2 + "|" + q4 + "|" + X5 + ")") + B("\\?(" + l5 + ")") + "?" + B("\\#(" + tJ + ")") + "?$",
                GV = "^(" + Q6 + ")\\:" + B(B("\\/\\/(" + B("(" + $4 + ")@") + "?(" + P1 + ")" + B("\\:(" + c1 + ")") + "?)") + "?(" + EB + "|" + m2 + "|" + J7 + "|" + X5 + ")") + B("\\?(" + l5 + ")") + "?$",
                UY = "^" + B("\\#(" + tJ + ")") + "?$",
                AQ = "^" + B("(" + $4 + ")@") + "?(" + P1 + ")" + B("\\:(" + c1 + ")") + "?$";
            return {
                NOT_SCHEME: new RegExp(Q("[^]", nA, O1, "[\\+\\-\\.]"), "g"),
                NOT_USERINFO: new RegExp(Q("[^\\%\\:]", i9, y9), "g"),
                NOT_HOST: new RegExp(Q("[^\\%\\[\\]\\:]", i9, y9), "g"),
                NOT_PATH: new RegExp(Q("[^\\%\\/\\:\\@]", i9, y9), "g"),
                NOT_PATH_NOSCHEME: new RegExp(Q("[^\\%\\/\\@]", i9, y9), "g"),
                NOT_QUERY: new RegExp(Q("[^\\%]", i9, y9, "[\\:\\@\\/\\?]", w8), "g"),
                NOT_FRAGMENT: new RegExp(Q("[^\\%]", i9, y9, "[\\:\\@\\/\\?]"), "g"),
                ESCAPE: new RegExp(Q("[^]", i9, y9), "g"),
                UNRESERVED: new RegExp(i9, "g"),
                OTHER_CHARS: new RegExp(Q("[^\\%]", i9, A6), "g"),
                PCT_ENCODED: new RegExp(k9, "g"),
                IPV4ADDRESS: new RegExp("^(" + k5 + ")$"),
                IPV6ADDRESS: new RegExp("^\\[?(" + YA + ")" + B(B("\\%25|\\%(?!" + O0 + "{2})") + "(" + ZA + ")") + "?\\]?$")
            }
        }
        var W = J(!1),
            X = J(!0),
            F = function() {
                function U1(nA, C1) {
                    var O1 = [],
                        y1 = !0,
                        O0 = !1,
                        oQ = void 0;
                    try {
                        for (var lB = nA[Symbol.iterator](), k9; !(y1 = (k9 = lB.next()).done); y1 = !0)
                            if (O1.push(k9.value), C1 && O1.length === C1) break
                    } catch (C6) {
                        O0 = !0, oQ = C6
                    } finally {
                        try {
                            if (!y1 && lB.return) lB.return()
                        } finally {
                            if (O0) throw oQ
                        }
                    }
                    return O1
                }
                return function(nA, C1) {
                    if (Array.isArray(nA)) return nA;
                    else if (Symbol.iterator in Object(nA)) return U1(nA, C1);
                    else throw TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            V = function(U1) {
                if (Array.isArray(U1)) {
                    for (var nA = 0, C1 = Array(U1.length); nA < U1.length; nA++) C1[nA] = U1[nA];
                    return C1
                } else return Array.from(U1)
            },
            K = 2147483647,
            D = 36,
            H = 1,
            C = 26,
            E = 38,
            z = 700,
            w = 72,
            N = 128,
            q = "-",
            R = /^xn--/,
            P = /[^\0-\x7E]/,
            y = /[\x2E\u3002\uFF0E\uFF61]/g,
            v = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            x = D - H,
            p = Math.floor,
            u = String.fromCharCode;

        function o(U1) {
            throw RangeError(v[U1])
        }

        function l(U1, nA) {
            var C1 = [],
                O1 = U1.length;
            while (O1--) C1[O1] = nA(U1[O1]);
            return C1
        }

        function k(U1, nA) {
            var C1 = U1.split("@"),
                O1 = "";
            if (C1.length > 1) O1 = C1[0] + "@", U1 = C1[1];
            U1 = U1.replace(y, ".");
            var y1 = U1.split("."),
                O0 = l(y1, nA).join(".");
            return O1 + O0
        }

        function d(U1) {
            var nA = [],
                C1 = 0,
                O1 = U1.length;
            while (C1 < O1) {
                var y1 = U1.charCodeAt(C1++);
                if (y1 >= 55296 && y1 <= 56319 && C1 < O1) {
                    var O0 = U1.charCodeAt(C1++);
                    if ((O0 & 64512) == 56320) nA.push(((y1 & 1023) << 10) + (O0 & 1023) + 65536);
                    else nA.push(y1), C1--
                } else nA.push(y1)
            }
            return nA
        }
        var QA = function(nA) {
                return String.fromCodePoint.apply(String, V(nA))
            },
            IA = function(nA) {
                if (nA - 48 < 10) return nA - 22;
                if (nA - 65 < 26) return nA - 65;
                if (nA - 97 < 26) return nA - 97;
                return D
            },
            HA = function(nA, C1) {
                return nA + 22 + 75 * (nA < 26) - ((C1 != 0) << 5)
            },
            wA = function(nA, C1, O1) {
                var y1 = 0;
                nA = O1 ? p(nA / z) : nA >> 1, nA += p(nA / C1);
                for (; nA > x * C >> 1; y1 += D) nA = p(nA / x);
                return p(y1 + (x + 1) * nA / (nA + E))
            },
            KA = function(nA) {
                var C1 = [],
                    O1 = nA.length,
                    y1 = 0,
                    O0 = N,
                    oQ = w,
                    lB = nA.lastIndexOf(q);
                if (lB < 0) lB = 0;
                for (var k9 = 0; k9 < lB; ++k9) {
                    if (nA.charCodeAt(k9) >= 128) o("not-basic");
                    C1.push(nA.charCodeAt(k9))
                }
                for (var C6 = lB > 0 ? lB + 1 : 0; C6 < O1;) {
                    var y9 = y1;
                    for (var A6 = 1, v6 = D;; v6 += D) {
                        if (C6 >= O1) o("invalid-input");
                        var w8 = IA(nA.charCodeAt(C6++));
                        if (w8 >= D || w8 > p((K - y1) / A6)) o("overflow");
                        y1 += w8 * A6;
                        var i9 = v6 <= oQ ? H : v6 >= oQ + C ? C : v6 - oQ;
                        if (w8 < i9) break;
                        var Q6 = D - i9;
                        if (A6 > p(K / Q6)) o("overflow");
                        A6 *= Q6
                    }
                    var $4 = C1.length + 1;
                    if (oQ = wA(y1 - y9, $4, y9 == 0), p(y1 / $4) > K - O0) o("overflow");
                    O0 += p(y1 / $4), y1 %= $4, C1.splice(y1++, 0, O0)
                }
                return String.fromCodePoint.apply(String, C1)
            },
            SA = function(nA) {
                var C1 = [];
                nA = d(nA);
                var O1 = nA.length,
                    y1 = N,
                    O0 = 0,
                    oQ = w,
                    lB = !0,
                    k9 = !1,
                    C6 = void 0;
                try {
                    for (var y9 = nA[Symbol.iterator](), A6; !(lB = (A6 = y9.next()).done); lB = !0) {
                        var v6 = A6.value;
                        if (v6 < 128) C1.push(u(v6))
                    }
                } catch (xA) {
                    k9 = !0, C6 = xA
                } finally {
                    try {
                        if (!lB && y9.return) y9.return()
                    } finally {
                        if (k9) throw C6
                    }
                }
                var w8 = C1.length,
                    i9 = w8;
                if (w8) C1.push(q);
                while (i9 < O1) {
                    var Q6 = K,
                        $4 = !0,
                        n7 = !1,
                        B6 = void 0;
                    try {
                        for (var k5 = nA[Symbol.iterator](), g9; !($4 = (g9 = k5.next()).done); $4 = !0) {
                            var g4 = g9.value;
                            if (g4 >= y1 && g4 < Q6) Q6 = g4
                        }
                    } catch (xA) {
                        n7 = !0, B6 = xA
                    } finally {
                        try {
                            if (!$4 && k5.return) k5.return()
                        } finally {
                            if (n7) throw B6
                        }
                    }
                    var q8 = i9 + 1;
                    if (Q6 - y1 > p((K - O0) / q8)) o("overflow");
                    O0 += (Q6 - y1) * q8, y1 = Q6;
                    var B8 = !0,
                        W5 = !1,
                        u9 = void 0;
                    try {
                        for (var w4 = nA[Symbol.iterator](), E3; !(B8 = (E3 = w4.next()).done); B8 = !0) {
                            var V9 = E3.value;
                            if (V9 < y1 && ++O0 > K) o("overflow");
                            if (V9 == y1) {
                                var Q4 = O0;
                                for (var dA = D;; dA += D) {
                                    var YA = dA <= oQ ? H : dA >= oQ + C ? C : dA - oQ;
                                    if (Q4 < YA) break;
                                    var ZA = Q4 - YA,
                                        jA = D - YA;
                                    C1.push(u(HA(YA + ZA % jA, 0))), Q4 = p(ZA / jA)
                                }
                                C1.push(u(HA(Q4, 0))), oQ = wA(O0, q8, i9 == w8), O0 = 0, ++i9
                            }
                        }
                    } catch (xA) {
                        W5 = !0, u9 = xA
                    } finally {
                        try {
                            if (!B8 && w4.return) w4.return()
                        } finally {
                            if (W5) throw u9
                        }
                    }++O0, ++y1
                }
                return C1.join("")
            },
            sA = function(nA) {
                return k(nA, function(C1) {
                    return R.test(C1) ? KA(C1.slice(4).toLowerCase()) : C1
                })
            },
            NA = function(nA) {
                return k(nA, function(C1) {
                    return P.test(C1) ? "xn--" + SA(C1) : C1
                })
            },
            qA = {
                version: "2.1.0",
                ucs2: {
                    decode: d,
                    encode: QA
                },
                decode: KA,
                encode: SA,
                toASCII: NA,
                toUnicode: sA
            },
            DA = {};

        function yA(U1) {
            var nA = U1.charCodeAt(0),
                C1 = void 0;
            if (nA < 16) C1 = "%0" + nA.toString(16).toUpperCase();
            else if (nA < 128) C1 = "%" + nA.toString(16).toUpperCase();
            else if (nA < 2048) C1 = "%" + (nA >> 6 | 192).toString(16).toUpperCase() + "%" + (nA & 63 | 128).toString(16).toUpperCase();
            else C1 = "%" + (nA >> 12 | 224).toString(16).toUpperCase() + "%" + (nA >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (nA & 63 | 128).toString(16).toUpperCase();
            return C1
        }

        function rA(U1) {
            var nA = "",
                C1 = 0,
                O1 = U1.length;
            while (C1 < O1) {
                var y1 = parseInt(U1.substr(C1 + 1, 2), 16);
                if (y1 < 128) nA += String.fromCharCode(y1), C1 += 3;
                else if (y1 >= 194 && y1 < 224) {
                    if (O1 - C1 >= 6) {
                        var O0 = parseInt(U1.substr(C1 + 4, 2), 16);
                        nA += String.fromCharCode((y1 & 31) << 6 | O0 & 63)
                    } else nA += U1.substr(C1, 6);
                    C1 += 6
                } else if (y1 >= 224) {
                    if (O1 - C1 >= 9) {
                        var oQ = parseInt(U1.substr(C1 + 4, 2), 16),
                            lB = parseInt(U1.substr(C1 + 7, 2), 16);
                        nA += String.fromCharCode((y1 & 15) << 12 | (oQ & 63) << 6 | lB & 63)
                    } else nA += U1.substr(C1, 9);
                    C1 += 9
                } else nA += U1.substr(C1, 3), C1 += 3
            }
            return nA
        }

        function K1(U1, nA) {
            function C1(O1) {
                var y1 = rA(O1);
                return !y1.match(nA.UNRESERVED) ? O1 : y1
            }
            if (U1.scheme) U1.scheme = String(U1.scheme).replace(nA.PCT_ENCODED, C1).toLowerCase().replace(nA.NOT_SCHEME, "");
            if (U1.userinfo !== void 0) U1.userinfo = String(U1.userinfo).replace(nA.PCT_ENCODED, C1).replace(nA.NOT_USERINFO, yA).replace(nA.PCT_ENCODED, Z);
            if (U1.host !== void 0) U1.host = String(U1.host).replace(nA.PCT_ENCODED, C1).toLowerCase().replace(nA.NOT_HOST, yA).replace(nA.PCT_ENCODED, Z);
            if (U1.path !== void 0) U1.path = String(U1.path).replace(nA.PCT_ENCODED, C1).replace(U1.scheme ? nA.NOT_PATH : nA.NOT_PATH_NOSCHEME, yA).replace(nA.PCT_ENCODED, Z);
            if (U1.query !== void 0) U1.query = String(U1.query).replace(nA.PCT_ENCODED, C1).replace(nA.NOT_QUERY, yA).replace(nA.PCT_ENCODED, Z);
            if (U1.fragment !== void 0) U1.fragment = String(U1.fragment).replace(nA.PCT_ENCODED, C1).replace(nA.NOT_FRAGMENT, yA).replace(nA.PCT_ENCODED, Z);
            return U1
        }

        function WA(U1) {
            return U1.replace(/^0*(.*)/, "$1") || "0"
        }

        function XA(U1, nA) {
            var C1 = U1.match(nA.IPV4ADDRESS) || [],
                O1 = F(C1, 2),
                y1 = O1[1];
            if (y1) return y1.split(".").map(WA).join(".");
            else return U1
        }

        function zA(U1, nA) {
            var C1 = U1.match(nA.IPV6ADDRESS) || [],
                O1 = F(C1, 3),
                y1 = O1[1],
                O0 = O1[2];
            if (y1) {
                var oQ = y1.toLowerCase().split("::").reverse(),
                    lB = F(oQ, 2),
                    k9 = lB[0],
                    C6 = lB[1],
                    y9 = C6 ? C6.split(":").map(WA) : [],
                    A6 = k9.split(":").map(WA),
                    v6 = nA.IPV4ADDRESS.test(A6[A6.length - 1]),
                    w8 = v6 ? 7 : 8,
                    i9 = A6.length - w8,
                    Q6 = Array(w8);
                for (var $4 = 0; $4 < w8; ++$4) Q6[$4] = y9[$4] || A6[i9 + $4] || "";
                if (v6) Q6[w8 - 1] = XA(Q6[w8 - 1], nA);
                var n7 = Q6.reduce(function(q8, B8, W5) {
                        if (!B8 || B8 === "0") {
                            var u9 = q8[q8.length - 1];
                            if (u9 && u9.index + u9.length === W5) u9.length++;
                            else q8.push({
                                index: W5,
                                length: 1
                            })
                        }
                        return q8
                    }, []),
                    B6 = n7.sort(function(q8, B8) {
                        return B8.length - q8.length
                    })[0],
                    k5 = void 0;
                if (B6 && B6.length > 1) {
                    var g9 = Q6.slice(0, B6.index),
                        g4 = Q6.slice(B6.index + B6.length);
                    k5 = g9.join(":") + "::" + g4.join(":")
                } else k5 = Q6.join(":");
                if (O0) k5 += "%" + O0;
                return k5
            } else return U1
        }
        var $A = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
            LA = "".match(/(){0}/)[1] === void 0;

        function TA(U1) {
            var nA = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                C1 = {},
                O1 = nA.iri !== !1 ? X : W;
            if (nA.reference === "suffix") U1 = (nA.scheme ? nA.scheme + ":" : "") + "//" + U1;
            var y1 = U1.match($A);
            if (y1) {
                if (LA) {
                    if (C1.scheme = y1[1], C1.userinfo = y1[3], C1.host = y1[4], C1.port = parseInt(y1[5], 10), C1.path = y1[6] || "", C1.query = y1[7], C1.fragment = y1[8], isNaN(C1.port)) C1.port = y1[5]
                } else if (C1.scheme = y1[1] || void 0, C1.userinfo = U1.indexOf("@") !== -1 ? y1[3] : void 0, C1.host = U1.indexOf("//") !== -1 ? y1[4] : void 0, C1.port = parseInt(y1[5], 10), C1.path = y1[6] || "", C1.query = U1.indexOf("?") !== -1 ? y1[7] : void 0, C1.fragment = U1.indexOf("#") !== -1 ? y1[8] : void 0, isNaN(C1.port)) C1.port = U1.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? y1[4] : void 0;
                if (C1.host) C1.host = zA(XA(C1.host, O1), O1);
                if (C1.scheme === void 0 && C1.userinfo === void 0 && C1.host === void 0 && C1.port === void 0 && !C1.path && C1.query === void 0) C1.reference = "same-document";
                else if (C1.scheme === void 0) C1.reference = "relative";
                else if (C1.fragment === void 0) C1.reference = "absolute";
                else C1.reference = "uri";
                if (nA.reference && nA.reference !== "suffix" && nA.reference !== C1.reference) C1.error = C1.error || "URI is not a " + nA.reference + " reference.";
                var O0 = DA[(nA.scheme || C1.scheme || "").toLowerCase()];
                if (!nA.unicodeSupport && (!O0 || !O0.unicodeSupport)) {
                    if (C1.host && (nA.domainHost || O0 && O0.domainHost)) try {
                        C1.host = qA.toASCII(C1.host.replace(O1.PCT_ENCODED, rA).toLowerCase())
                    } catch (oQ) {
                        C1.error = C1.error || "Host's domain name can not be converted to ASCII via punycode: " + oQ
                    }
                    K1(C1, W)
                } else K1(C1, O1);
                if (O0 && O0.parse) O0.parse(C1, nA)
            } else C1.error = C1.error || "URI can not be parsed.";
            return C1
        }

        function eA(U1, nA) {
            var C1 = nA.iri !== !1 ? X : W,
                O1 = [];
            if (U1.userinfo !== void 0) O1.push(U1.userinfo), O1.push("@");
            if (U1.host !== void 0) O1.push(zA(XA(String(U1.host), C1), C1).replace(C1.IPV6ADDRESS, function(y1, O0, oQ) {
                return "[" + O0 + (oQ ? "%25" + oQ : "") + "]"
            }));
            if (typeof U1.port === "number" || typeof U1.port === "string") O1.push(":"), O1.push(String(U1.port));
            return O1.length ? O1.join("") : void 0
        }
        var aA = /^\.\.?\//,
            I1 = /^\/\.(\/|$)/,
            w1 = /^\/\.\.(\/|$)/,
            PA = /^\/?(?:.|\n)*?(?=\/|$)/;

        function B1(U1) {
            var nA = [];
            while (U1.length)
                if (U1.match(aA)) U1 = U1.replace(aA, "");
                else if (U1.match(I1)) U1 = U1.replace(I1, "/");
            else if (U1.match(w1)) U1 = U1.replace(w1, "/"), nA.pop();
            else if (U1 === "." || U1 === "..") U1 = "";
            else {
                var C1 = U1.match(PA);
                if (C1) {
                    var O1 = C1[0];
                    U1 = U1.slice(O1.length), nA.push(O1)
                } else throw Error("Unexpected dot segment condition")
            }
            return nA.join("")
        }

        function Q0(U1) {
            var nA = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                C1 = nA.iri ? X : W,
                O1 = [],
                y1 = DA[(nA.scheme || U1.scheme || "").toLowerCase()];
            if (y1 && y1.serialize) y1.serialize(U1, nA);
            if (U1.host) {
                if (C1.IPV6ADDRESS.test(U1.host));
                else if (nA.domainHost || y1 && y1.domainHost) try {
                    U1.host = !nA.iri ? qA.toASCII(U1.host.replace(C1.PCT_ENCODED, rA).toLowerCase()) : qA.toUnicode(U1.host)
                } catch (lB) {
                    U1.error = U1.error || "Host's domain name can not be converted to " + (!nA.iri ? "ASCII" : "Unicode") + " via punycode: " + lB
                }
            }
            if (K1(U1, C1), nA.reference !== "suffix" && U1.scheme) O1.push(U1.scheme), O1.push(":");
            var O0 = eA(U1, nA);
            if (O0 !== void 0) {
                if (nA.reference !== "suffix") O1.push("//");
                if (O1.push(O0), U1.path && U1.path.charAt(0) !== "/") O1.push("/")
            }
            if (U1.path !== void 0) {
                var oQ = U1.path;
                if (!nA.absolutePath && (!y1 || !y1.absolutePath)) oQ = B1(oQ);
                if (O0 === void 0) oQ = oQ.replace(/^\/\//, "/%2F");
                O1.push(oQ)
            }
            if (U1.query !== void 0) O1.push("?"), O1.push(U1.query);
            if (U1.fragment !== void 0) O1.push("#"), O1.push(U1.fragment);
            return O1.join("")
        }

        function b1(U1, nA) {
            var C1 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                O1 = arguments[3],
                y1 = {};
            if (!O1) U1 = TA(Q0(U1, C1), C1), nA = TA(Q0(nA, C1), C1);
            if (C1 = C1 || {}, !C1.tolerant && nA.scheme) y1.scheme = nA.scheme, y1.userinfo = nA.userinfo, y1.host = nA.host, y1.port = nA.port, y1.path = B1(nA.path || ""), y1.query = nA.query;
            else {
                if (nA.userinfo !== void 0 || nA.host !== void 0 || nA.port !== void 0) y1.userinfo = nA.userinfo, y1.host = nA.host, y1.port = nA.port, y1.path = B1(nA.path || ""), y1.query = nA.query;
                else {
                    if (!nA.path)
                        if (y1.path = U1.path, nA.query !== void 0) y1.query = nA.query;
                        else y1.query = U1.query;
                    else {
                        if (nA.path.charAt(0) === "/") y1.path = B1(nA.path);
                        else {
                            if ((U1.userinfo !== void 0 || U1.host !== void 0 || U1.port !== void 0) && !U1.path) y1.path = "/" + nA.path;
                            else if (!U1.path) y1.path = nA.path;
                            else y1.path = U1.path.slice(0, U1.path.lastIndexOf("/") + 1) + nA.path;
                            y1.path = B1(y1.path)
                        }
                        y1.query = nA.query
                    }
                    y1.userinfo = U1.userinfo, y1.host = U1.host, y1.port = U1.port
                }
                y1.scheme = U1.scheme
            }
            return y1.fragment = nA.fragment, y1
        }

        function Y0(U1, nA, C1) {
            var O1 = Y({
                scheme: "null"
            }, C1);
            return Q0(b1(TA(U1, O1), TA(nA, O1), O1, !0), O1)
        }

        function x0(U1, nA) {
            if (typeof U1 === "string") U1 = Q0(TA(U1, nA), nA);
            else if (G(U1) === "object") U1 = TA(Q0(U1, nA), nA);
            return U1
        }

        function u0(U1, nA, C1) {
            if (typeof U1 === "string") U1 = Q0(TA(U1, C1), C1);
            else if (G(U1) === "object") U1 = Q0(U1, C1);
            if (typeof nA === "string") nA = Q0(TA(nA, C1), C1);
            else if (G(nA) === "object") nA = Q0(nA, C1);