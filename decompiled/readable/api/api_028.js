/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:37.883Z
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 28/30
 * Lines: 339419 - 340918 (1500 lines)
 * Original file: cli.js
 */

        if (Q) {
            let I = () => {
                clearTimeout(Z), G(new gY)
            };
            if (Q.aborted) {
                I();
                return
            }
            Q.addEventListener("abort", I, {
                once: !0
            }), setTimeout(() => {
                Q?.removeEventListener("abort", I)
            }, A)
        }
    })
}
var L60 = L(() => {
    l_()
});
async function* f61(A, Q, B) {
    let G = pf5(B),
        Z = {
            model: B.model,
            maxThinkingTokens: B.maxThinkingTokens
        },
        I = null,
        Y = 0,
        J;
    for (let W = 1; W <= G + 1; W++) {
        if (B.signal?.aborted) throw new gY;
        try {
            if (I === null || J instanceof a2 && J.status === 401 || PS2(J)) I = await A();
            return await Q(I, W, Z)
        } catch (X) {
            if (J = X, mf5(X) && (process.env.FALLBACK_FOR_ALL_PRIMARY_MODELS || !AB() && r7A(B.model))) {
                if (Y++, Y >= ff5) {
                    if (B.fallbackModel) throw BA("tengu_api_opus_fallback_triggered", {
                        original_model: B.model,
                        fallback_model: B.fallbackModel,
                        provider: TR()
                    }), new b61(B.model, B.fallbackModel);
                    if (!process.env.IS_SANDBOX) throw BA("tengu_api_custom_529_overloaded_error", {}), new Jn(Error(q00), Z)
                }
            }
            if (W > G) throw new Jn(X, Z);
            if (!df5(X) && (!(X instanceof a2) || !cf5(X))) throw new Jn(X, Z);
            if (X instanceof a2) {
                let D = TS2(X);
                if (D) {
                    let {
                        inputTokens: H,
                        contextLimit: C
                    } = D, E = 1000, z = Math.max(0, C - H - 1000);
                    if (z < M60) throw e(Error(`availableContext ${z} is less than FLOOR_OUTPUT_TOKENS ${M60}`)), X;
                    let w = (Z.maxThinkingTokens || 0) + 1,
                        N = Math.max(M60, z, w);
                    Z.maxTokensOverride = N, BA("tengu_max_tokens_context_overflow_adjustment", {
                        inputTokens: H,
                        contextLimit: C,
                        adjustedMaxTokens: N,
                        attempt: W
                    });
                    continue
                }
            }
            let V = gf5(X),
                K = uf5(W, V);
            if (X instanceof a2) yield jS2(X, K, W, G);
            BA("tengu_api_retry", {
                attempt: W,
                delayMs: K,
                error: X.message,
                status: X.status,
                provider: TR()
            }), await RS2(K, B.signal)
        }
    }
    throw new Jn(J, Z)
}

function gf5(A) {
    return (A.headers?.["retry-after"] || A.headers?.get?.("retry-after")) ?? null
}

function uf5(A, Q) {
    if (Q) {
        let Z = parseInt(Q, 10);
        if (!isNaN(Z)) return Z * 1000
    }
    let B = Math.min(hf5 * Math.pow(2, A - 1), 32000),
        G = Math.random() * 0.25 * B;
    return B + G
}

function TS2(A) {
    if (A.status !== 400 || !A.message) return;
    if (!A.message.includes("input length and `max_tokens` exceed context limit")) return;
    let Q = /input length and `max_tokens` exceed context limit: (\d+) \+ (\d+) > (\d+)/,
        B = A.message.match(Q);
    if (!B || B.length !== 4) return;
    if (!B[1] || !B[2] || !B[3]) {
        e(Error("Unable to parse max_tokens from max_tokens exceed context limit error message"));
        return
    }
    let G = parseInt(B[1], 10),
        Z = parseInt(B[2], 10),
        I = parseInt(B[3], 10);
    if (isNaN(G) || isNaN(Z) || isNaN(I)) return;
    return {
        inputTokens: G,
        maxTokens: Z,
        contextLimit: I
    }
}

function mf5(A) {
    if (!(A instanceof a2)) return !1;
    return A.status === 529 || (A.message?.includes('"type":"overloaded_error"') ?? !1)
}

function PS2(A) {
    if (V0(process.env.CLAUDE_CODE_USE_BEDROCK)) {
        if (ONQ(A) || A instanceof a2 && A.status === 403) return !0
    }
    return !1
}

function df5(A) {
    if (PS2(A)) return zlA(), !0;
    return !1
}

function cf5(A) {
    if (_Z2(A)) return !1;
    if (A.message?.includes('"type":"overloaded_error"')) return !0;
    if (TS2(A)) return !0;
    let Q = A.headers?.get("x-should-retry");
    if (Q === "true" && !AB()) return !0;
    if (Q === "false") return !1;
    if (A instanceof GE) return !0;
    if (!A.status) return !1;
    if (A.status === 408) return !0;
    if (A.status === 409) return !0;
    if (A.status === 429) return !AB();
    if (A.status === 401) return ElA(), !0;
    if (A.status && A.status >= 500) return !0;
    return !1
}

function pf5(A) {
    if (A.maxRetries) return A.maxRetries;
    if (process.env.CLAUDE_CODE_MAX_RETRIES) return parseInt(process.env.CLAUDE_CODE_MAX_RETRIES, 10);
    return bf5
}
var bf5 = 10,
    M60 = 3000,
    ff5 = 3,
    hf5 = 500,
    Jn, b61;
var O60 = L(() => {
    l_();
    u1();
    s2();
    dK();
    hB();
    w0();
    tM();
    MO1();
    LMA();
    nQ();
    L60();
    hQ();
    Jn = class Jn extends Error {
        originalError;
        retryContext;
        constructor(A, Q) {
            let B = A instanceof Error ? A.message : String(A);
            super(B);
            this.originalError = A;
            this.retryContext = Q;
            if (this.name = "RetryError", A instanceof Error && A.stack) this.stack = A.stack
        }
    };
    b61 = class b61 extends Error {
        originalModel;
        fallbackModel;
        constructor(A, Q) {
            super(`Model fallback triggered: ${A} -> ${Q}`);
            this.originalModel = A;
            this.fallbackModel = Q;
            this.name = "FallbackTriggeredError"
        }
    }
});
// Async function: _S2
async function _S2() {
    let A = U6();
    if (!A?.accessToken) return;
    let Q = `${o9().BASE_API_URL}/api/oauth/claude_cli/client_data`;
    try {
        SS2 = (await GQ.get(Q, {
            headers: {
                Authorization: `Bearer ${A.accessToken}`,
                "Content-Type": "application/json"
            }
        })).data.client_data
    } catch (B) {
        e(B)
    }
}

function kS2() {
    return SS2
}
var lf5, SS2;
var R60 = L(() => {
    w3();
    EX();
    hB();
    u1();
    lf5 = {}, SS2 = lf5
});

function T60(A) {
    return Number.isInteger(A)
}

function P60() {
    let A = kS2();
    if (A.effortLevel !== void 0) return A.effortLevel;
    let Q = process.env.CLAUDE_CODE_EFFORT_LEVEL;
    if (Q) {
        if (Q === "unset") return;
        let Z = parseInt(Q, 10);
        if (!isNaN(Z) && T60(Z)) return Z;
        if (["low", "medium", "high"].includes(Q)) return Q
    }
    let G = c0().effortLevel;
    if (G === "unset") return;
    if (G !== void 0) {
        if (typeof G === "number" && T60(G)) return G;
        if (typeof G === "string" && ["low", "medium", "high"].includes(G)) return G
    }
    return
}
var j60 = L(() => {
    RB();
    R60()
});
var yS2;
var xS2 = L(() => {
    xV();
    yS2 = `Performs exact string replacements in files. 

Usage:
- You must use your \`${READ_TOOL_NAME}\` tool at least once in the conversation before editing. This tool will error if you attempt an edit without reading the file. 
- When editing text from Read tool output, ensure you preserve the exact indentation (tabs/spaces) as it appears AFTER the line number prefix. The line number prefix format is: spaces + line number + tab. Everything after that tab is the actual file content to match. Never include any part of the line number prefix in the old_string or new_string.
- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.
- Only use emojis if the user explicitly requests it. Avoid adding emojis to files unless asked.
- The edit will FAIL if \`old_string\` is not unique in the file. Either provide a larger string with more surrounding context to make it unique or use \`replace_all\` to change every instance of \`old_string\`. 
- Use \`replace_all\` for replacing and renaming strings across the file. This parameter is useful if you want to rename a variable for instance.`
});

function vS2(A) {
    let Q = if5.find((G) => G.matches(A));
    if (!Q) return null;
    let B = {
        ...Q.tip
    };
    if (A.code === "invalid_enum_value" && A.enumValues && !B.suggestion) B.suggestion = `Valid values: ${A.enumValues.map((G)=>`"${G}"`).join(", ")}`;
    if (!B.docLink && A.path) {
        let G = A.path.split(".")[0];
        if (G) B.docLink = nf5[G]
    }
    return B
}
var if5, nf5;
var bS2 = L(() => {
    if5 = [{
        matches: (A) => A.path === "permissions.defaultMode" && A.code === "invalid_enum_value",
        tip: {
            suggestion: 'Valid modes: "acceptEdits" (ask before file changes), "plan" (analysis only), "bypassPermissions" (auto-accept all), or "default" (standard behavior)',
            docLink: "https://docs.claude.com/en/docs/claude-code/iam#permission-modes"
        }
    }, {
        matches: (A) => A.path === "apiKeyHelper" && A.code === "invalid_type",
        tip: {
            suggestion: 'Provide a shell command that outputs your API key to stdout. The script should output only the API key. Example: "/bin/generate_temp_api_key.sh"'
        }
    }, {
        matches: (A) => A.path === "cleanupPeriodDays" && A.code === "too_small" && A.expected === "0",
        tip: {
            suggestion: "Must be 0 or greater. Use 0 to disable automatic cleanup and keep chat transcripts forever, or set a positive number for days to retain (default is 30 days)"
        }
    }, {
        matches: (A) => A.path.startsWith("env.") && A.code === "invalid_type",
        tip: {
            suggestion: 'Environment variables must be strings. Wrap numbers and booleans in quotes. Example: "DEBUG": "true", "PORT": "3000"',
            docLink: "https://docs.claude.com/en/docs/claude-code/settings#environment-variables"
        }
    }, {
        matches: (A) => (A.path === "permissions.allow" || A.path === "permissions.deny") && A.code === "invalid_type" && A.expected === "array",
        tip: {
            suggestion: 'Permission rules must be in an array. Format: ["Tool(specifier)"]. Examples: ["Bash(npm run build)", "Edit(docs/**)", "Read(~/.zshrc)"]. Use * for wildcards.'
        }
    }, {
        matches: (A) => A.path.includes("hooks") && A.code === "invalid_type",
        tip: {
            suggestion: 'Hooks use a new format with matchers. Example: {"PostToolUse": [{"matcher": {"tools": ["BashTool"]}, "hooks": [{"type": "command", "command": "echo Done"}]}]}'
        }
    }, {
        matches: (A) => A.code === "invalid_type" && A.expected === "boolean",
        tip: {
            suggestion: 'Use true or false without quotes. Example: "includeCoAuthoredBy": true'
        }
    }, {
        matches: (A) => A.code === "unrecognized_keys",
        tip: {
            suggestion: "Check for typos or refer to the documentation for valid fields",
            docLink: "https://docs.claude.com/en/docs/claude-code/settings"
        }
    }, {
        matches: (A) => A.code === "invalid_enum_value" && A.enumValues !== void 0,
        tip: {
            suggestion: void 0
        }
    }, {
        matches: (A) => A.code === "invalid_type" && A.expected === "object" && A.received === null && A.path === "",
        tip: {
            suggestion: "Check for missing commas, unmatched brackets, or trailing commas. Use a JSON validator to identify the exact syntax error."
        }
    }, {
        matches: (A) => A.path === "permissions.additionalDirectories" && A.code === "invalid_type",
        tip: {
            suggestion: 'Must be an array of directory paths. Example: ["~/projects", "/tmp/workspace"]. You can also use --add-dir flag or /add-dir command',
            docLink: "https://docs.claude.com/en/docs/claude-code/iam#working-directories"
        }
    }], nf5 = {
        permissions: "https://docs.claude.com/en/docs/claude-code/iam#configuring-permissions",
        env: "https://docs.claude.com/en/docs/claude-code/settings#environment-variables",
        hooks: "https://docs.claude.com/en/docs/claude-code/hooks"
    }
});
var hS2, fS2, gS2 = (A) => typeof A === "string" ? {
    ...fS2,
    name: A
} : {
    ...fS2,
    ...A
};
var h61 = L(() => {
    hS2 = Symbol("Let zodToJsonSchema decide on which parser to use"), fS2 = {
        name: void 0,
        $refStrategy: "root",
        basePath: ["#"],
        effectStrategy: "input",
        pipeStrategy: "all",
        dateStrategy: "format:date-time",
        mapStrategy: "entries",
        removeAdditionalStrategy: "passthrough",
        allowedAdditionalProperties: !0,
        rejectedAdditionalProperties: !1,
        definitionPath: "definitions",
        target: "jsonSchema7",
        strictUnions: !1,
        definitions: {},
        errorMessages: !1,
        markdownDescription: !1,
        patternStrategy: "escape",
        applyRegexFlags: !1,
        emailStrategy: "format:email",
        base64Strategy: "contentEncoding:base64",
        nameStrategy: "ref"
    }
});
var uS2 = (A) => {
    let Q = gS2(A),
        B = Q.name !== void 0 ? [...Q.basePath, Q.definitionPath, Q.name] : Q.basePath;
    return {
        ...Q,
        currentPath: B,
        propertyPath: void 0,
        seen: new Map(Object.entries(Q.definitions).map(([G, Z]) => [Z._def, {
            def: Z._def,
            path: [...Q.basePath, Q.definitionPath, G],
            jsonSchema: void 0
        }]))
    }
};
var S60 = L(() => {
    h61()
});

function _60(A, Q, B, G) {
    if (!G?.errorMessages) return;
    if (B) A.errorMessage = {
        ...A.errorMessage,
        [Q]: B
    }
}

function d5(A, Q, B, G, Z) {
    A[Q] = B, _60(A, Q, G, Z)
}

function mS2() {
    return {}
}

function dS2(A, Q) {
    let B = {
        type: "array"
    };
    if (A.type?._def && A.type?._def?.typeName !== OQ.ZodAny) B.items = C4(A.type._def, {
        ...Q,
        currentPath: [...Q.currentPath, "items"]
    });
    if (A.minLength) d5(B, "minItems", A.minLength.value, A.minLength.message, Q);
    if (A.maxLength) d5(B, "maxItems", A.maxLength.value, A.maxLength.message, Q);
    if (A.exactLength) d5(B, "minItems", A.exactLength.value, A.exactLength.message, Q), d5(B, "maxItems", A.exactLength.value, A.exactLength.message, Q);
    return B
}
var k60 = L(() => {
    h2();
    tX()
});

function cS2(A, Q) {
    let B = {
        type: "integer",
        format: "int64"
    };
    if (!A.checks) return B;
    for (let G of A.checks) switch (G.kind) {
        case "min":
            if (Q.target === "jsonSchema7")
                if (G.inclusive) d5(B, "minimum", G.value, G.message, Q);
                else d5(B, "exclusiveMinimum", G.value, G.message, Q);
            else {
                if (!G.inclusive) B.exclusiveMinimum = !0;
                d5(B, "minimum", G.value, G.message, Q)
            }
            break;
        case "max":
            if (Q.target === "jsonSchema7")
                if (G.inclusive) d5(B, "maximum", G.value, G.message, Q);
                else d5(B, "exclusiveMaximum", G.value, G.message, Q);
            else {
                if (!G.inclusive) B.exclusiveMaximum = !0;
                d5(B, "maximum", G.value, G.message, Q)
            }
            break;
        case "multipleOf":
            d5(B, "multipleOf", G.value, G.message, Q);
            break
    }
    return B
}
var y60 = () => {};

function pS2() {
    return {
        type: "boolean"
    }
}

function g61(A, Q) {
    return C4(A.type._def, Q)
}
var u61 = L(() => {
    tX()
});
var lS2 = (A, Q) => {
    return C4(A.innerType._def, Q)
};
var x60 = L(() => {
    tX()
});

function v60(A, Q, B) {
    let G = B ?? Q.dateStrategy;
    if (Array.isArray(G)) return {
        anyOf: G.map((Z, I) => v60(A, Q, Z))
    };
    switch (G) {
        case "string":
        case "format:date-time":
            return {
                type: "string", format: "date-time"
            };
        case "format:date":
            return {
                type: "string", format: "date"
            };
        case "integer":
            return af5(A, Q)
    }
}
var af5 = (A, Q) => {
    let B = {
        type: "integer",
        format: "unix-time"
    };
    if (Q.target === "openApi3") return B;
    for (let G of A.checks) switch (G.kind) {
        case "min":
            d5(B, "minimum", G.value, G.message, Q);
            break;
        case "max":
            d5(B, "maximum", G.value, G.message, Q);
            break
    }
    return B
};
var b60 = () => {};

function iS2(A, Q) {
    return {
        ...C4(A.innerType._def, Q),
        default: A.defaultValue()
    }
}
var f60 = L(() => {
    tX()
});

function nS2(A, Q) {
    return Q.effectStrategy === "input" ? C4(A.schema._def, Q) : {}
}
var h60 = L(() => {
    tX()
});

function aS2(A) {
    return {
        type: "string",
        enum: Array.from(A.values)
    }
}

function sS2(A, Q) {
    let B = [C4(A.left._def, {
            ...Q,
            currentPath: [...Q.currentPath, "allOf", "0"]
        }), C4(A.right._def, {
            ...Q,
            currentPath: [...Q.currentPath, "allOf", "1"]
        })].filter((I) => !!I),
        G = Q.target === "jsonSchema2019-09" ? {
            unevaluatedProperties: !1
        } : void 0,
        Z = [];
    return B.forEach((I) => {
        if (sf5(I)) {
            if (Z.push(...I.allOf), I.unevaluatedProperties === void 0) G = void 0
        } else {
            let Y = I;
            if ("additionalProperties" in I && I.additionalProperties === !1) {
                let {
                    additionalProperties: J,
                    ...W
                } = I;
                Y = W
            } else G = void 0;
            Z.push(Y)
        }
    }), Z.length ? {
        allOf: Z,
        ...G
    } : void 0
}
var sf5 = (A) => {
    if ("type" in A && A.type === "string") return !1;
    return "allOf" in A
};
var g60 = L(() => {
    tX()
});

function rS2(A, Q) {
    let B = typeof A.value;
    if (B !== "bigint" && B !== "number" && B !== "boolean" && B !== "string") return {
        type: Array.isArray(A.value) ? "array" : "object"
    };
    if (Q.target === "openApi3") return {
        type: B === "bigint" ? "integer" : B,
        enum: [A.value]
    };
    return {
        type: B === "bigint" ? "integer" : B,
        const: A.value
    }
}

function m61(A, Q) {
    let B = {
        type: "string"
    };
    if (A.checks)
        for (let G of A.checks) switch (G.kind) {
            case "min":
                d5(B, "minLength", typeof B.minLength === "number" ? Math.max(B.minLength, G.value) : G.value, G.message, Q);
                break;
            case "max":
                d5(B, "maxLength", typeof B.maxLength === "number" ? Math.min(B.maxLength, G.value) : G.value, G.message, Q);
                break;
            case "email":
                switch (Q.emailStrategy) {
                    case "format:email":
                        NP(B, "email", G.message, Q);
                        break;
                    case "format:idn-email":
                        NP(B, "idn-email", G.message, Q);
                        break;
                    case "pattern:zod":
                        pE(B, qP.email, G.message, Q);
                        break
                }
                break;
            case "url":
                NP(B, "uri", G.message, Q);
                break;
            case "uuid":
                NP(B, "uuid", G.message, Q);
                break;
            case "regex":
                pE(B, G.regex, G.message, Q);
                break;
            case "cuid":
                pE(B, qP.cuid, G.message, Q);
                break;
            case "cuid2":
                pE(B, qP.cuid2, G.message, Q);
                break;
            case "startsWith":
                pE(B, RegExp(`^${m60(G.value,Q)}`), G.message, Q);
                break;
            case "endsWith":
                pE(B, RegExp(`${m60(G.value,Q)}$`), G.message, Q);
                break;
            case "datetime":
                NP(B, "date-time", G.message, Q);
                break;
            case "date":
                NP(B, "date", G.message, Q);
                break;
            case "time":
                NP(B, "time", G.message, Q);
                break;
            case "duration":
                NP(B, "duration", G.message, Q);
                break;
            case "length":
                d5(B, "minLength", typeof B.minLength === "number" ? Math.max(B.minLength, G.value) : G.value, G.message, Q), d5(B, "maxLength", typeof B.maxLength === "number" ? Math.min(B.maxLength, G.value) : G.value, G.message, Q);
                break;
            case "includes": {
                pE(B, RegExp(m60(G.value, Q)), G.message, Q);
                break
            }
            case "ip": {
                if (G.version !== "v6") NP(B, "ipv4", G.message, Q);
                if (G.version !== "v4") NP(B, "ipv6", G.message, Q);
                break
            }
            case "base64url":
                pE(B, qP.base64url, G.message, Q);
                break;
            case "jwt":
                pE(B, qP.jwt, G.message, Q);
                break;
            case "cidr": {
                if (G.version !== "v6") pE(B, qP.ipv4Cidr, G.message, Q);
                if (G.version !== "v4") pE(B, qP.ipv6Cidr, G.message, Q);
                break
            }
            case "emoji":
                pE(B, qP.emoji(), G.message, Q);
                break;
            case "ulid": {
                pE(B, qP.ulid, G.message, Q);
                break
            }
            case "base64": {
                switch (Q.base64Strategy) {
                    case "format:binary": {
                        NP(B, "binary", G.message, Q);
                        break
                    }
                    case "contentEncoding:base64": {
                        d5(B, "contentEncoding", "base64", G.message, Q);
                        break
                    }
                    case "pattern:zod": {
                        pE(B, qP.base64, G.message, Q);
                        break
                    }
                }
                break
            }
            case "nanoid":
                pE(B, qP.nanoid, G.message, Q);
            case "toLowerCase":
            case "toUpperCase":
            case "trim":
                break;
            default:
                ((Z) => {})(G)
        }
    return B
}

function m60(A, Q) {
    return Q.patternStrategy === "escape" ? of5(A) : A
}

function of5(A) {
    let Q = "";
    for (let B = 0; B < A.length; B++) {
        if (!rf5.has(A[B])) Q += "\\";
        Q += A[B]
    }
    return Q
}

function NP(A, Q, B, G) {
    if (A.format || A.anyOf?.some((Z) => Z.format)) {
        if (!A.anyOf) A.anyOf = [];
        if (A.format) {
            if (A.anyOf.push({
                    format: A.format,
                    ...A.errorMessage && G.errorMessages && {
                        errorMessage: {
                            format: A.errorMessage.format
                        }
                    }
                }), delete A.format, A.errorMessage) {
                if (delete A.errorMessage.format, Object.keys(A.errorMessage).length === 0) delete A.errorMessage
            }
        }
        A.anyOf.push({
            format: Q,
            ...B && G.errorMessages && {
                errorMessage: {
                    format: B
                }
            }
        })
    } else d5(A, "format", Q, B, G)
}

function pE(A, Q, B, G) {
    if (A.pattern || A.allOf?.some((Z) => Z.pattern)) {
        if (!A.allOf) A.allOf = [];
        if (A.pattern) {
            if (A.allOf.push({
                    pattern: A.pattern,
                    ...A.errorMessage && G.errorMessages && {
                        errorMessage: {
                            pattern: A.errorMessage.pattern
                        }
                    }
                }), delete A.pattern, A.errorMessage) {
                if (delete A.errorMessage.pattern, Object.keys(A.errorMessage).length === 0) delete A.errorMessage
            }
        }
        A.allOf.push({
            pattern: oS2(Q, G),
            ...B && G.errorMessages && {
                errorMessage: {
                    pattern: B
                }
            }
        })
    } else d5(A, "pattern", oS2(Q, G), B, G)
}

function oS2(A, Q) {
    if (!Q.applyRegexFlags || !A.flags) return A.source;
    let B = {
            i: A.flags.includes("i"),
            m: A.flags.includes("m"),
            s: A.flags.includes("s")
        },
        G = B.i ? A.source.toLowerCase() : A.source,
        Z = "",
        I = !1,
        Y = !1,
        J = !1;
    for (let W = 0; W < G.length; W++) {
        if (I) {
            Z += G[W], I = !1;
            continue
        }
        if (B.i) {
            if (Y) {
                if (G[W].match(/[a-z]/)) {
                    if (J) Z += G[W], Z += `${G[W-2]}-${G[W]}`.toUpperCase(), J = !1;
                    else if (G[W + 1] === "-" && G[W + 2]?.match(/[a-z]/)) Z += G[W], J = !0;
                    else Z += `${G[W]}${G[W].toUpperCase()}`;
                    continue
                }
            } else if (G[W].match(/[a-z]/)) {
                Z += `[${G[W]}${G[W].toUpperCase()}]`;
                continue
            }
        }
        if (B.m) {
            if (G[W] === "^") {
                Z += `(^|(?<=[\r
]))`;
                continue
            } else if (G[W] === "$") {
                Z += `($|(?=[\r
]))`;
                continue
            }
        }
        if (B.s && G[W] === ".") {
            Z += Y ? `${G[W]}\r
` : `[${G[W]}\r
]`;
            continue
        }
        if (Z += G[W], G[W] === "\\") I = !0;
        else if (Y && G[W] === "]") Y = !1;
        else if (!Y && G[W] === "[") Y = !0
    }
    try {
        new RegExp(Z)
    } catch {
        return console.warn(`Could not convert regex pattern at ${Q.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), A.source
    }
    return Z
}
var u60 = void 0,
    qP, rf5;
var d61 = L(() => {
    qP = {
        cuid: /^[cC][^\s-]{8,}$/,
        cuid2: /^[0-9a-z]+$/,
        ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
        email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
        emoji: () => {
            if (u60 === void 0) u60 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
            return u60
        },
        uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
        ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
        ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        nanoid: /^[a-zA-Z0-9_-]{21}$/,
        jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
    };
    rf5 = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789")
});

function c61(A, Q) {
    if (Q.target === "openAi") console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead.");
    if (Q.target === "openApi3" && A.keyType?._def.typeName === OQ.ZodEnum) return {
        type: "object",
        required: A.keyType._def.values,
        properties: A.keyType._def.values.reduce((G, Z) => ({
            ...G,
            [Z]: C4(A.valueType._def, {
                ...Q,
                currentPath: [...Q.currentPath, "properties", Z]
            }) ?? {}
        }), {}),
        additionalProperties: Q.rejectedAdditionalProperties
    };
    let B = {
        type: "object",
        additionalProperties: C4(A.valueType._def, {
            ...Q,
            currentPath: [...Q.currentPath, "additionalProperties"]
        }) ?? Q.allowedAdditionalProperties
    };
    if (Q.target === "openApi3") return B;
    if (A.keyType?._def.typeName === OQ.ZodString && A.keyType._def.checks?.length) {
        let {
            type: G,
            ...Z
        } = m61(A.keyType._def, Q);
        return {
            ...B,
            propertyNames: Z
        }
    } else if (A.keyType?._def.typeName === OQ.ZodEnum) return {
        ...B,
        propertyNames: {
            enum: A.keyType._def.values
        }
    };
    else if (A.keyType?._def.typeName === OQ.ZodBranded && A.keyType._def.type._def.typeName === OQ.ZodString && A.keyType._def.type._def.checks?.length) {
        let {
            type: G,
            ...Z
        } = g61(A.keyType._def, Q);
        return {
            ...B,
            propertyNames: Z
        }
    }
    return B
}
var p61 = L(() => {
    h2();
    tX();
    d61();
    u61()
});

function tS2(A, Q) {
    if (Q.mapStrategy === "record") return c61(A, Q);
    let B = C4(A.keyType._def, {
            ...Q,
            currentPath: [...Q.currentPath, "items", "items", "0"]
        }) || {},
        G = C4(A.valueType._def, {
            ...Q,
            currentPath: [...Q.currentPath, "items", "items", "1"]
        }) || {};
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [B, G],
            minItems: 2,
            maxItems: 2
        }
    }
}
var d60 = L(() => {
    tX();
    p61()
});

function eS2(A) {
    let Q = A.values,
        G = Object.keys(A.values).filter((I) => {
            return typeof Q[Q[I]] !== "number"
        }).map((I) => Q[I]),
        Z = Array.from(new Set(G.map((I) => typeof I)));
    return {
        type: Z.length === 1 ? Z[0] === "string" ? "string" : "number" : ["string", "number"],
        enum: G
    }
}

function A_2() {
    return {
        not: {}
    }
}

function Q_2(A) {
    return A.target === "openApi3" ? {
        enum: ["null"],
        nullable: !0
    } : {
        type: "null"
    }
}

function G_2(A, Q) {
    if (Q.target === "openApi3") return B_2(A, Q);
    let B = A.options instanceof Map ? Array.from(A.options.values()) : A.options;
    if (B.every((G) => (G._def.typeName in PRA) && (!G._def.checks || !G._def.checks.length))) {
        let G = B.reduce((Z, I) => {
            let Y = PRA[I._def.typeName];
            return Y && !Z.includes(Y) ? [...Z, Y] : Z
        }, []);
        return {
            type: G.length > 1 ? G : G[0]
        }
    } else if (B.every((G) => G._def.typeName === "ZodLiteral" && !G.description)) {
        let G = B.reduce((Z, I) => {
            let Y = typeof I._def.value;
            switch (Y) {
                case "string":
                case "number":
                case "boolean":
                    return [...Z, Y];
                case "bigint":
                    return [...Z, "integer"];
                case "object":
                    if (I._def.value === null) return [...Z, "null"];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return Z
            }
        }, []);
        if (G.length === B.length) {
            let Z = G.filter((I, Y, J) => J.indexOf(I) === Y);
            return {
                type: Z.length > 1 ? Z : Z[0],
                enum: B.reduce((I, Y) => {
                    return I.includes(Y._def.value) ? I : [...I, Y._def.value]
                }, [])
            }
        }
    } else if (B.every((G) => G._def.typeName === "ZodEnum")) return {
        type: "string",
        enum: B.reduce((G, Z) => [...G, ...Z._def.values.filter((I) => !G.includes(I))], [])
    };
    return B_2(A, Q)
}
var PRA, B_2 = (A, Q) => {
    let B = (A.options instanceof Map ? Array.from(A.options.values()) : A.options).map((G, Z) => C4(G._def, {
        ...Q,
        currentPath: [...Q.currentPath, "anyOf", `${Z}`]
    })).filter((G) => !!G && (!Q.strictUnions || typeof G === "object" && Object.keys(G).length > 0));
    return B.length ? {
        anyOf: B
    } : void 0
};
var l61 = L(() => {
    tX();
    PRA = {
        ZodString: "string",
        ZodNumber: "number",
        ZodBigInt: "integer",
        ZodBoolean: "boolean",
        ZodNull: "null"
    }
});

function Z_2(A, Q) {
    if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(A.innerType._def.typeName) && (!A.innerType._def.checks || !A.innerType._def.checks.length)) {
        if (Q.target === "openApi3") return {
            type: PRA[A.innerType._def.typeName],
            nullable: !0
        };
        return {
            type: [PRA[A.innerType._def.typeName], "null"]
        }
    }
    if (Q.target === "openApi3") {
        let G = C4(A.innerType._def, {
            ...Q,
            currentPath: [...Q.currentPath]
        });
        if (G && "$ref" in G) return {
            allOf: [G],
            nullable: !0
        };
        return G && {
            ...G,
            nullable: !0
        }
    }
    let B = C4(A.innerType._def, {
        ...Q,
        currentPath: [...Q.currentPath, "anyOf", "0"]
    });
    return B && {
        anyOf: [B, {
            type: "null"
        }]
    }
}
var c60 = L(() => {
    tX();
    l61()
});

function I_2(A, Q) {
    let B = {
        type: "number"
    };
    if (!A.checks) return B;
    for (let G of A.checks) switch (G.kind) {
        case "int":
            B.type = "integer", _60(B, "type", G.message, Q);
            break;
        case "min":
            if (Q.target === "jsonSchema7")
                if (G.inclusive) d5(B, "minimum", G.value, G.message, Q);
                else d5(B, "exclusiveMinimum", G.value, G.message, Q);
            else {
                if (!G.inclusive) B.exclusiveMinimum = !0;
                d5(B, "minimum", G.value, G.message, Q)
            }
            break;
        case "max":
            if (Q.target === "jsonSchema7")
                if (G.inclusive) d5(B, "maximum", G.value, G.message, Q);
                else d5(B, "exclusiveMaximum", G.value, G.message, Q);
            else {
                if (!G.inclusive) B.exclusiveMaximum = !0;
                d5(B, "maximum", G.value, G.message, Q)
            }
            break;
        case "multipleOf":
            d5(B, "multipleOf", G.value, G.message, Q);
            break
    }
    return B
}
var p60 = () => {};

function Y_2(A, Q) {
    let B = Q.target === "openAi",
        G = {
            type: "object",
            properties: {}
        },
        Z = [],
        I = A.shape();
    for (let J in I) {
        let W = I[J];
        if (W === void 0 || W._def === void 0) continue;
        let X = ef5(W);
        if (X && B) {
            if (W instanceof e$) W = W._def.innerType;
            if (!W.isNullable()) W = W.nullable();
            X = !1
        }
        let F = C4(W._def, {
            ...Q,
            currentPath: [...Q.currentPath, "properties", J],
            propertyPath: [...Q.currentPath, "properties", J]
        });
        if (F === void 0) continue;
        if (G.properties[J] = F, !X) Z.push(J)
    }
    if (Z.length) G.required = Z;
    let Y = tf5(A, Q);
    if (Y !== void 0) G.additionalProperties = Y;
    return G
}

function tf5(A, Q) {
    if (A.catchall._def.typeName !== "ZodNever") return C4(A.catchall._def, {
        ...Q,
        currentPath: [...Q.currentPath, "additionalProperties"]
    });
    switch (A.unknownKeys) {
        case "passthrough":
            return Q.allowedAdditionalProperties;
        case "strict":
            return Q.rejectedAdditionalProperties;
        case "strip":
            return Q.removeAdditionalStrategy === "strict" ? Q.allowedAdditionalProperties : Q.rejectedAdditionalProperties
    }
}

function ef5(A) {
    try {
        return A.isOptional()
    } catch {
        return !0
    }
}
var l60 = L(() => {
    h2();
    tX()
});
var J_2 = (A, Q) => {
    if (Q.currentPath.toString() === Q.propertyPath?.toString()) return C4(A.innerType._def, Q);
    let B = C4(A.innerType._def, {
        ...Q,
        currentPath: [...Q.currentPath, "anyOf", "1"]
    });
    return B ? {
        anyOf: [{
            not: {}
        }, B]
    } : {}
};
var i60 = L(() => {
    tX()
});
var W_2 = (A, Q) => {
    if (Q.pipeStrategy === "input") return C4(A.in._def, Q);
    else if (Q.pipeStrategy === "output") return C4(A.out._def, Q);
    let B = C4(A.in._def, {
            ...Q,
            currentPath: [...Q.currentPath, "allOf", "0"]
        }),
        G = C4(A.out._def, {
            ...Q,
            currentPath: [...Q.currentPath, "allOf", B ? "1" : "0"]
        });
    return {
        allOf: [B, G].filter((Z) => Z !== void 0)
    }
};
var n60 = L(() => {
    tX()
});

function X_2(A, Q) {
    return C4(A.type._def, Q)
}
var a60 = L(() => {
    tX()
});

function F_2(A, Q) {
    let G = {
        type: "array",
        uniqueItems: !0,
        items: C4(A.valueType._def, {
            ...Q,
            currentPath: [...Q.currentPath, "items"]
        })
    };
    if (A.minSize) d5(G, "minItems", A.minSize.value, A.minSize.message, Q);
    if (A.maxSize) d5(G, "maxItems", A.maxSize.value, A.maxSize.message, Q);
    return G
}
var s60 = L(() => {
    tX()
});

function V_2(A, Q) {
    if (A.rest) return {
        type: "array",
        minItems: A.items.length,
        items: A.items.map((B, G) => C4(B._def, {
            ...Q,
            currentPath: [...Q.currentPath, "items", `${G}`]
        })).reduce((B, G) => G === void 0 ? B : [...B, G], []),
        additionalItems: C4(A.rest._def, {
            ...Q,
            currentPath: [...Q.currentPath, "additionalItems"]
        })
    };
    else return {
        type: "array",
        minItems: A.items.length,
        maxItems: A.items.length,
        items: A.items.map((B, G) => C4(B._def, {
            ...Q,
            currentPath: [...Q.currentPath, "items", `${G}`]
        })).reduce((B, G) => G === void 0 ? B : [...B, G], [])
    }
}
var r60 = L(() => {
    tX()
});

function K_2() {
    return {
        not: {}
    }
}

function D_2() {
    return {}
}
var H_2 = (A, Q) => {
    return C4(A.innerType._def, Q)
};
var o60 = L(() => {
    tX()
});
var C_2 = (A, Q, B) => {
    switch (Q) {
        case OQ.ZodString:
            return m61(A, B);
        case OQ.ZodNumber:
            return I_2(A, B);
        case OQ.ZodObject:
            return Y_2(A, B);
        case OQ.ZodBigInt:
            return cS2(A, B);
        case OQ.ZodBoolean:
            return pS2();
        case OQ.ZodDate:
            return v60(A, B);
        case OQ.ZodUndefined:
            return K_2();
        case OQ.ZodNull:
            return Q_2(B);
        case OQ.ZodArray:
            return dS2(A, B);
        case OQ.ZodUnion:
        case OQ.ZodDiscriminatedUnion:
            return G_2(A, B);
        case OQ.ZodIntersection:
            return sS2(A, B);
        case OQ.ZodTuple:
            return V_2(A, B);
        case OQ.ZodRecord:
            return c61(A, B);
        case OQ.ZodLiteral:
            return rS2(A, B);
        case OQ.ZodEnum:
            return aS2(A);
        case OQ.ZodNativeEnum:
            return eS2(A);
        case OQ.ZodNullable:
            return Z_2(A, B);
        case OQ.ZodOptional:
            return J_2(A, B);
        case OQ.ZodMap:
            return tS2(A, B);
        case OQ.ZodSet:
            return F_2(A, B);
        case OQ.ZodLazy:
            return () => A.getter()._def;
        case OQ.ZodPromise:
            return X_2(A, B);
        case OQ.ZodNaN:
        case OQ.ZodNever:
            return A_2();
        case OQ.ZodEffects:
            return nS2(A, B);
        case OQ.ZodAny:
            return mS2();
        case OQ.ZodUnknown:
            return D_2();
        case OQ.ZodDefault:
            return iS2(A, B);
        case OQ.ZodBranded:
            return g61(A, B);
        case OQ.ZodReadonly:
            return H_2(A, B);
        case OQ.ZodCatch:
            return lS2(A, B);
        case OQ.ZodPipeline:
            return W_2(A, B);
        case OQ.ZodFunction:
        case OQ.ZodVoid:
        case OQ.ZodSymbol:
            return;
        default:
            return ((G) => {
                return
            })(Q)
    }
};
var t60 = L(() => {
    h2();
    k60();
    y60();
    u61();
    x60();
    b60();
    f60();
    h60();
    g60();
    d60();
    c60();
    p60();
    l60();
    i60();
    n60();
    a60();
    p61();
    s60();
    d61();
    r60();
    l61();
    o60()
});

function C4(A, Q, B = !1) {
    let G = Q.seen.get(A);
    if (Q.override) {
        let J = Q.override?.(A, Q, G, B);
        if (J !== hS2) return J
    }
    if (G && !B) {
        let J = Ah5(G, Q);
        if (J !== void 0) return J
    }
    let Z = {
        def: A,
        path: Q.currentPath,
        jsonSchema: void 0
    };
    Q.seen.set(A, Z);
    let I = C_2(A, A.typeName, Q),
        Y = typeof I === "function" ? C4(I(), Q) : I;
    if (Y) Bh5(A, Q, Y);
    if (Q.postProcess) {
        let J = Q.postProcess(Y, A, Q);
        return Z.jsonSchema = Y, J
    }
    return Z.jsonSchema = Y, Y
}
var Ah5 = (A, Q) => {
        switch (Q.$refStrategy) {
            case "root":
                return {
                    $ref: A.path.join("/")
                };
            case "relative":
                return {
                    $ref: Qh5(Q.currentPath, A.path)
                };
            case "none":
            case "seen": {
                if (A.path.length < Q.currentPath.length && A.path.every((B, G) => Q.currentPath[G] === B)) return console.warn(`Recursive reference detected at ${Q.currentPath.join("/")}! Defaulting to any`), {};
                return Q.$refStrategy === "seen" ? {} : void 0
            }
        }
    },
    Qh5 = (A, Q) => {
        let B = 0;
        for (; B < A.length && B < Q.length; B++)
            if (A[B] !== Q[B]) break;
        return [(A.length - B).toString(), ...Q.slice(B)].join("/")
    },
    Bh5 = (A, Q, B) => {
        if (A.description) {
            if (B.description = A.description, Q.markdownDescription) B.markdownDescription = A.description
        }
        return B
    };
var tX = L(() => {
    h61();
    t60()
});
var E_2 = () => {};
var jRA = (A, Q) => {
    let B = uS2(Q),
        G = typeof Q === "object" && Q.definitions ? Object.entries(Q.definitions).reduce((W, [X, F]) => ({
            ...W,
            [X]: C4(F._def, {
                ...B,
                currentPath: [...B.basePath, B.definitionPath, X]
            }, !0) ?? {}
        }), {}) : void 0,
        Z = typeof Q === "string" ? Q : Q?.nameStrategy === "title" ? void 0 : Q?.name,
        I = C4(A._def, Z === void 0 ? B : {
            ...B,
            currentPath: [...B.basePath, B.definitionPath, Z]
        }, !1) ?? {},
        Y = typeof Q === "object" && Q.name !== void 0 && Q.nameStrategy === "title" ? Q.name : void 0;
    if (Y !== void 0) I.title = Y;
    let J = Z === void 0 ? G ? {
        ...I,
        [B.definitionPath]: G
    } : I : {
        $ref: [...B.$refStrategy === "relative" ? [] : B.basePath, B.definitionPath, Z].join("/"),
        [B.definitionPath]: {
            ...G,
            [Z]: I
        }
    };
    if (B.target === "jsonSchema7") J.$schema = "http://json-schema.org/draft-07/schema#";
    else if (B.target === "jsonSchema2019-09" || B.target === "openAi") J.$schema = "https://json-schema.org/draft/2019-09/schema#";
    if (B.target === "openAi" && (("anyOf" in J) || ("oneOf" in J) || ("allOf" in J) || ("type" in J) && Array.isArray(J.type))) console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
    return J
};
var e60 = L(() => {
    tX();
    S60()
});
var A50 = L(() => {
    e60();
    h61();
    S60();
    tX();
    E_2();
    k60();
    y60();
    u61();
    x60();
    b60();
    f60();
    h60();
    g60();
    d60();
    c60();
    p60();
    l60();
    i60();
    n60();
    a60();
    o60();
    p61();
    s60();
    d61();
    r60();
    l61();
    t60();
    e60()
});

function Q50() {
    let A = jRA(D0A, {
        name: "ClaudeCodeSettings",
        $refStrategy: "none"
    });
    return JSON.stringify(A, null, 2)
}
var z_2 = L(() => {
    A50();
    E3A()
});