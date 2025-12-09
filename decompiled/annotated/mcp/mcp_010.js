/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: mcp_010.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   IW       (7次) = tokenize() - Tokenize bash command
 *   L        (6次) = lazyLoader(fn) - Lazy module loader
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 10/29
 * Lines: 269036 - 270527 (1492 lines)
 * Original file: cli.js
 */

    }, N85 = Object.keys(Qe1), L85 = {
        cd: "change directories to",
        ls: "list files in",
        find: "search files in",
        mkdir: "create directories in",
        touch: "create or modify files in",
        rm: "remove files from",
        rmdir: "remove directories from",
        mv: "move files to/from",
        cp: "copy files to/from",
        cat: "concatenate files from",
        head: "read the beginning of files from",
        tail: "read the end of files from",
        sort: "sort contents of files from",
        uniq: "filter duplicate lines from files in",
        wc: "count lines/words/bytes in files from",
        cut: "extract columns from files in",
        paste: "merge files from",
        column: "format files from",
        tr: "transform text from files in",
        file: "examine file types in",
        stat: "read file stats from",
        diff: "compare files from",
        awk: "process text from files in",
        strings: "extract strings from files in",
        hexdump: "display hex dump of files from",
        od: "display octal dump of files from",
        base64: "encode/decode files from",
        nl: "number lines in files from",
        grep: "search for patterns in files from",
        rg: "search for patterns in files from",
        sed: "edit files in",
        git: "access files with git from",
        jq: "process JSON from files in"
    }, s22 = {
        cd: "read",
        ls: "read",
        find: "read",
        mkdir: "create",
        touch: "create",
        rm: "write",
        rmdir: "write",
        mv: "write",
        cp: "write",
        cat: "read",
        head: "read",
        tail: "read",
        sort: "read",
        uniq: "read",
        wc: "read",
        cut: "read",
        paste: "read",
        column: "read",
        tr: "read",
        file: "read",
        stat: "read",
        diff: "read",
        awk: "read",
        strings: "read",
        hexdump: "read",
        od: "read",
        base64: "read",
        nl: "read",
        grep: "read",
        rg: "read",
        sed: "write",
        git: "read",
        jq: "read"
    }, M85 = {
        mv: (A) => !A.some((Q) => Q?.startsWith("-")),
        cp: (A) => !A.some((Q) => Q?.startsWith("-"))
    }
});

function _85(A) {
    return S85.includes(A)
}

function k85(A, Q) {
    let B = A.trim(),
        [G] = B.split(/\s+/);
    if (!G) return {
        behavior: "passthrough",
        message: "Base command not found"
    };
    if (Q.mode === "acceptEdits" && _85(G)) return {
        behavior: "allow",
        updatedInput: {
            command: A
        },
        decisionReason: {
            type: "mode",
            mode: "acceptEdits"
        }
    };
    return {
        behavior: "passthrough",
        message: `No mode-specific handling for '${G}' in ${Q.mode} mode`
    }
}

function o22(A, Q) {
    if (Q.mode === "bypassPermissions") return {
        behavior: "passthrough",
        message: "Bypass mode is handled in main permission flow"
    };
    if (Q.mode === "dontAsk") return {
        behavior: "passthrough",
        message: "DontAsk mode is handled in main permission flow"
    };
    let B = aV(A.command);
    for (let G of B) {
        let Z = k85(G, Q);
        if (Z.behavior !== "passthrough") return Z
    }
    return {
        behavior: "passthrough",
        message: "No mode-specific validation required"
    }
}
var S85;
var t22 = L(() => {
    gU();
    S85 = ["mkdir", "touch", "rm", "rmdir", "mv", "cp", "sed"]
});

function A92(A, Q) {
    for (let B of A)
        if (B.startsWith("-") && !B.startsWith("--") && B.length > 2)
            for (let G = 1; G < B.length; G++) {
                let Z = "-" + B[G];
                if (!Q.includes(Z)) return !1
            } else if (!Q.includes(B)) return !1;
    return !0
}

function y85(A, Q) {
    let B = A.match(/^\s*sed\s+/);
    if (!B) return !1;
    let G = A.slice(B[0].length),
        Z = IW(G);
    if (!Z.success) return !1;
    let I = Z.tokens,
        Y = [];
    for (let X of I)
        if (typeof X === "string" && X.startsWith("-") && X !== "--") Y.push(X);
    if (!A92(Y, ["-n", "--quiet", "--silent", "-E", "--regexp-extended", "-r", "-z", "--zero-terminated", "--posix"])) return !1;
    let W = !1;
    for (let X of Y) {
        if (X === "-n" || X === "--quiet" || X === "--silent") {
            W = !0;
            break
        }
        if (X.startsWith("-") && !X.startsWith("--") && X.includes("n")) {
            W = !0;
            break
        }
    }
    if (!W) return !1;
    if (Q.length === 0) return !1;
    for (let X of Q) {
        let F = X.split(";");
        for (let V of F)
            if (!x85(V.trim())) return !1
    }
    return !0
}

function x85(A) {
    if (!A) return !1;
    if (!A.endsWith("p")) return !1;
    if (A === "p") return !0;
    let Q = A.slice(0, -1);
    if (/^\d+$/.test(Q)) return !0;
    if (/^\d+,\d+$/.test(Q)) return !0;
    return !1
}

function e22(A, Q, B, G) {
    let Z = G?.allowFileWrites ?? !1;
    if (!Z && B) return !1;
    let I = A.match(/^\s*sed\s+/);
    if (!I) return !1;
    let Y = A.slice(I[0].length),
        J = IW(Y);
    if (!J.success) return !1;
    let W = J.tokens,
        X = [];
    for (let N of W)
        if (typeof N === "string" && N.startsWith("-") && N !== "--") X.push(N);
    let F = ["-E", "--regexp-extended", "-r", "--posix"];
    if (Z) F.push("-i", "--in-place");
    if (!A92(X, F)) return !1;
    if (Q.length !== 1) return !1;
    let V = Q[0].trim();
    if (!V.startsWith("s")) return !1;
    let K = V.match(/^s\/(.*?)$/);
    if (!K) return !1;
    let D = K[1],
        H = 0,
        C = -1,
        E = 0;
    while (E < D.length) {
        if (D[E] === "\\") {
            E += 2;
            continue
        }
        if (D[E] === "/") H++, C = E;
        E++
    }
    if (H !== 2) return !1;
    let z = D.slice(C + 1);
    if (!/^[gpimIM]*[1-9]?[gpimIM]*$/.test(z)) return !1;
    return !0
}

function Ze1(A, Q) {
    let B = Q?.allowFileWrites ?? !1,
        G;
    try {
        G = b85(A)
    } catch (J) {
        return !1
    }
    let Z = v85(A),
        I = !1,
        Y = !1;
    if (B) Y = e22(A, G, Z, {
        allowFileWrites: !0
    });
    else I = y85(A, G), Y = e22(A, G, Z);
    if (!I && !Y) return !1;
    for (let J of G)
        if (Y && J.includes(";")) return !1;
    for (let J of G)
        if (f85(J)) return !1;
    return !0
}

function v85(A) {
    let Q = A.match(/^\s*sed\s+/);
    if (!Q) return !1;
    let B = A.slice(Q[0].length),
        G = IW(B);
    if (!G.success) return !0;
    let Z = G.tokens;
    try {
        let I = 0,
            Y = !1;
        for (let J = 0; J < Z.length; J++) {
            let W = Z[J];
            if (typeof W !== "string" && typeof W !== "object") continue;
            if (typeof W === "object" && W !== null && "op" in W && W.op === "glob") return !0;
            if (typeof W !== "string") continue;
            if ((W === "-e" || W === "--expression") && J + 1 < Z.length) {
                Y = !0, J++;
                continue
            }
            if (W.startsWith("--expression=")) {
                Y = !0;
                continue
            }
            if (W.startsWith("-e=")) {
                Y = !0;
                continue
            }
            if (W.startsWith("-")) continue;
            if (I++, Y) return !0;
            if (I > 1) return !0
        }
        return !1
    } catch (I) {
        return !0
    }
}

function b85(A) {
    let Q = [],
        B = A.match(/^\s*sed\s+/);
    if (!B) return Q;
    let G = A.slice(B[0].length);
    if (/-e[wWe]/.test(G) || /-w[eE]/.test(G)) throw Error("Dangerous flag combination detected");
    let Z = IW(G);
    if (!Z.success) throw Error(`Malformed shell syntax: ${Z.error}`);
    let I = Z.tokens;
    try {
        let Y = !1,
            J = !1;
        for (let W = 0; W < I.length; W++) {
            let X = I[W];
            if (typeof X !== "string") continue;
            if ((X === "-e" || X === "--expression") && W + 1 < I.length) {
                Y = !0;
                let F = I[W + 1];
                if (typeof F === "string") Q.push(F), W++;
                continue
            }
            if (X.startsWith("--expression=")) {
                Y = !0, Q.push(X.slice(13));
                continue
            }
            if (X.startsWith("-e=")) {
                Y = !0, Q.push(X.slice(3));
                continue
            }
            if (X.startsWith("-")) continue;
            if (!Y && !J) {
                Q.push(X), J = !0;
                continue
            }
            break
        }
    } catch (Y) {
        throw Error(`Failed to parse sed command: ${Y instanceof Error?Y.message:"Unknown error"}`)
    }
    return Q
}

function f85(A) {
    let Q = A.trim();
    if (!Q) return !1;
    if (/[^\x01-\x7F]/.test(Q)) return !0;
    if (Q.includes("{") || Q.includes("}")) return !0;
    if (Q.includes(`
`)) return !0;
    let B = Q.indexOf("#");
    if (B !== -1 && !(B > 0 && Q[B - 1] === "s")) return !0;
    if (/^!/.test(Q) || /[/\d$]!/.test(Q)) return !0;
    if (/\d\s*~\s*\d|,\s*~\s*\d|\$\s*~\s*\d/.test(Q)) return !0;
    if (/^,/.test(Q)) return !0;
    if (/,\s*[+-]/.test(Q)) return !0;
    if (/s\\/.test(Q) || /\\[|#%@]/.test(Q)) return !0;
    if (/\\\/.*[wW]/.test(Q)) return !0;
    if (/\/[^/]*\s+[wWeE]/.test(Q)) return !0;
    if (/^s\//.test(Q) && !/^s\/[^/]*\/[^/]*\/[^/]*$/.test(Q)) return !0;
    if (/^s./.test(Q) && /[wWeE]$/.test(Q)) {
        if (!/^s([^\\\n]).*?\1.*?\1[^wWeE]*$/.test(Q)) return !0
    }
    if (/^[wW]\s*\S+/.test(Q) || /^\d+\s*[wW]\s*\S+/.test(Q) || /^\$\s*[wW]\s*\S+/.test(Q) || /^\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(Q) || /^\d+,\d+\s*[wW]\s*\S+/.test(Q) || /^\d+,\$\s*[wW]\s*\S+/.test(Q) || /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*[wW]\s*\S+/.test(Q)) return !0;
    if (/^e/.test(Q) || /^\d+\s*e/.test(Q) || /^\$\s*e/.test(Q) || /^\/[^/]*\/[IMim]*\s*e/.test(Q) || /^\d+,\d+\s*e/.test(Q) || /^\d+,\$\s*e/.test(Q) || /^\/[^/]*\/[IMim]*,\/[^/]*\/[IMim]*\s*e/.test(Q)) return !0;
    let G = Q.match(/s([^\\\n]).*?\1.*?\1(.*?)$/);
    if (G) {
        let I = G[2] || "";
        if (I.includes("w") || I.includes("W")) return !0;
        if (I.includes("e") || I.includes("E")) return !0
    }
    if (Q.match(/y([^\\\n])/)) {
        if (/[wWeE]/.test(Q)) return !0
    }
    return !1
}

function Q92(A, Q) {
    let B = aV(A.command);
    for (let G of B) {
        let Z = G.trim();
        if (Z.split(/\s+/)[0] !== "sed") continue;
        let Y = Q.mode === "acceptEdits";
        if (!Ze1(Z, {
                allowFileWrites: Y
            })) return {
            behavior: "ask",
            message: "sed command requires approval (contains potentially dangerous operations)",
            decisionReason: {
                type: "other",
                reason: "sed command contains operations that require explicit approval (e.g., write commands, execute commands)"
            }
        }
    }
    return {
        behavior: "passthrough",
        message: "No dangerous sed operations detected"
    }
}
var Ie1 = L(() => {
    gU();
    KH()
});

function Je1(A) {
    return [{
        type: "addRules",
        rules: [{
            toolName: X9.name,
            ruleContent: A
        }],
        behavior: "allow",
        destination: "localSettings"
    }]
}

function h85(A) {
    return [{
        type: "addRules",
        rules: [{
            toolName: X9.name,
            ruleContent: `${A}:*`
        }],
        behavior: "allow",
        destination: "localSettings"
    }]
}

function B92(A) {
    return /^[a-zA-Z0-9_-]{1,64}$/.test(A)
}

function G92(A) {
    return [{
        type: "addRules",
        rules: [{
            toolName: A,
            ruleContent: void 0
        }],
        behavior: "allow",
        destination: "localSettings"
    }]
}

function g85(A, Q) {
    let B = Ve(A);
    if (!B) return null;
    try {
        if (aV(A).length > 1) return null
    } catch {
        return null
    }
    let {
        server: G,
        toolName: Z
    } = B;
    if (!B92(G) || !B92(Z)) return {
        behavior: "deny",
        message: "Invalid MCP server or tool name. Names must contain only letters, numbers, hyphens, and underscores.",
        decisionReason: {
            type: "other",
            reason: "Security: Invalid characters in MCP identifier"
        }
    };
    let I = `mcp__${G}__${Z}`,
        Y = {
            name: I
        },
        J = Ce1(Q, Y);
    if (J) return {
        behavior: "deny",
        message: `MCP tool ${G}/${Z} has been denied`,
        decisionReason: {
            type: "rule",
            rule: J
        }
    };
    let W = Ee1(Q, Y);
    if (W) return {
        behavior: "ask",
        message: PF(I),
        decisionReason: {
            type: "rule",
            rule: W
        },
        suggestions: G92(I)
    };
    let X = He1(Q, Y);
    if (X) return {
        behavior: "allow",
        updatedInput: {
            command: A
        },
        decisionReason: {
            type: "rule",
            rule: X
        }
    };
    return {
        behavior: "ask",
        message: PF(I),
        decisionReason: {
            type: "other",
            reason: "MCP tool requires permission"
        },
        suggestions: G92(I)
    }
}

function Xe1(A) {
    let Q = We1(A);
    if (Q !== null) return {
        type: "prefix",
        prefix: Q
    };
    else return {
        type: "exact",
        command: A
    }
}

function Ye1(A, Q, B) {
    let G = A.command.trim(),
        Z = aT(G).commandWithoutRedirections,
        Y = (B === "exact" ? [G, Z] : [Z]).flatMap((J) => {
            return process.env.ENABLE_BASH_WRAPPER_MATCHING || process.env.ENABLE_BASH_ENV_VAR_MATCHING, [J]
        });
    return Array.from(Q.entries()).filter(([J]) => {
        let W = Xe1(J);
        return Y.some((X) => {
            switch (W.type) {
                case "exact":
                    return W.command === X;
                case "prefix":
                    switch (B) {
                        case "exact":
                            return W.prefix === X;
                        case "prefix":
                            if (X === W.prefix) return !0;
                            return X.startsWith(W.prefix + " ")
                    }
            }
        })
    }).map(([, J]) => J)
}

function Fe1(A, Q, B) {
    let G = uU(Q, X9, "deny"),
        Z = Ye1(A, G, B),
        I = uU(Q, X9, "ask"),
        Y = Ye1(A, I, B),
        J = uU(Q, X9, "allow"),
        W = Ye1(A, J, B);
    return {
        matchingDenyRules: Z,
        matchingAskRules: Y,
        matchingAllowRules: W
    }
}

function Z92(A, Q, B, G) {
    let Z = Ve1(A, Q);
    if (Z.behavior !== "passthrough") return Z;
    let I = I92(A, Q, G);
    if (I.behavior === "deny" || I.behavior === "ask") return I;
    if (!V0(process.env.CLAUDE_CODE_DISABLE_COMMAND_INJECTION_CHECK)) {
        let J = cl(A.command);
        if (J.behavior !== "passthrough") {
            let W = {
                type: "other",
                reason: J.behavior === "ask" && J.message ? J.message : "This command contains patterns that could pose security risks and requires approval"
            };
            return {
                behavior: "ask",
                message: PF(X9.name, W),
                decisionReason: W,
                suggestions: []
            }
        }
    }
    if (I.behavior === "allow") return I;
    let Y = B?.commandPrefix ? h85(B.commandPrefix) : Je1(A.command);
    return {
        ...I,
        suggestions: Y
    }
}

function u85(A, Q) {
    let B = A.command.trim(),
        {
            matchingDenyRules: G,
            matchingAskRules: Z
        } = Fe1(A, Q, "prefix");
    if (G[0] !== void 0) return {
        behavior: "deny",
        message: `Permission to use ${X9.name} with command ${B} has been denied.`,
        decisionReason: {
            type: "rule",
            rule: G[0]
        }
    };
    if (Z[0] !== void 0) return {
        behavior: "ask",
        message: PF(X9.name),
        decisionReason: {
            type: "rule",
            rule: Z[0]
        }
    };
    return {
        behavior: "allow",
        updatedInput: A,
        decisionReason: {
            type: "other",
            reason: "Auto-allowed with sandbox (autoAllowBashIfSandboxed enabled)"
        }
    }
}
async function Ke1(A, Q, B = Y92) {
    let G = await Q.getAppState(),
        Z = IW(A.command);
    if (!Z.success) {
        let q = {
            type: "other",
            reason: `Command contains malformed syntax that cannot be parsed: ${Z.error}`
        };
        return {
            behavior: "ask",
            decisionReason: q,
            message: PF(X9.name, q)
        }
    }
    if (lQ.isSandboxingEnabled() && lQ.isAutoAllowBashIfSandboxedEnabled() && TIA(A) && G.toolPermissionContext.mode === "acceptEdits") {
        let q = u85(A, G.toolPermissionContext);
        if (q.behavior !== "passthrough") return q
    }
    let I = Ve1(A, G.toolPermissionContext);
    if (I.behavior === "deny") return I;
    let Y = await m22(A, (q) => Ke1(q, Q, B));
    if (Y.behavior !== "passthrough") return Y;
    let J = aV(A.command).filter((q) => {
            if (q === `cd ${H0()}`) return !1;
            return !0
        }),
        W = J.filter((q) => q.startsWith("cd "));
    if (W.length > 1) {
        let q = {
            type: "other",
            reason: "Multiple directory changes in one command require approval for clarity"
        };
        return {
            behavior: "ask",
            decisionReason: q,
            message: PF(X9.name, q)
        }
    }
    let X = W.length > 0;
    G = await Q.getAppState();
    let F = J.map((q) => {
        let R = g85(q, G.toolPermissionContext);
        if (R !== null) return R;
        return I92({
            command: q
        }, G.toolPermissionContext, X)
    });
    if (F.find((q) => q.behavior === "deny") !== void 0) return {
        behavior: "deny",
        message: `Permission to use ${X9.name} with command ${A.command} has been denied.`,
        decisionReason: {
            type: "subcommandResults",
            reasons: new Map(F.map((q, R) => [J[R], q]))
        }
    };
    let K = Be1(A, H0(), G.toolPermissionContext, X);
    if (K.behavior !== "passthrough") return K;
    let D = F.find((q) => q.behavior === "ask");
    if (D !== void 0) return D;
    if (I.behavior === "allow") return I;
    let H = V0(process.env.CLAUDE_CODE_DISABLE_COMMAND_INJECTION_CHECK) ? !1 : J.some((q) => cl(q).behavior !== "passthrough");
    if (F.every((q) => q.behavior === "allow") && !H) return {
        behavior: "allow",
        updatedInput: A,
        decisionReason: {
            type: "subcommandResults",
            reasons: new Map(F.map((q, R) => [J[R], q]))
        }
    };
    let C = await B(A.command, Q.abortController.signal, Q.options.isNonInteractiveSession);
    if (Q.abortController.signal.aborted) throw new YW;
    if (G = await Q.getAppState(), J.length === 1) return Z92({
        command: J[0]
    }, G.toolPermissionContext, C, X);
    let E = new Map;
    for (let q of J) E.set(q, Z92({
        ...A,
        command: q
    }, G.toolPermissionContext, C?.subcommandPrefixes.get(q), X));
    if (J.every((q) => {
            return E.get(q)?.behavior === "allow"
        })) return {
        behavior: "allow",
        updatedInput: A,
        decisionReason: {
            type: "subcommandResults",
            reasons: E
        }
    };
    let z = new Map;
    for (let q of E.values())
        if (q.behavior === "ask" || q.behavior === "passthrough") {
            let R = "suggestions" in q ? q.suggestions : void 0,
                P = a9A(R);
            for (let y of P) {
                let v = r5(y);
                z.set(v, y)
            }
        } let w = {
            type: "subcommandResults",
            reasons: E
        },
        N = z.size > 0 ? [{
            type: "addRules",
            rules: Array.from(z.values()),
            behavior: "allow",
            destination: "localSettings"
        }] : void 0;
    return {
        behavior: "passthrough",
        message: PF(X9.name, w),
        decisionReason: w,
        suggestions: N
    }
}
var We1 = (A) => {
        return A.match(/^(.+):\*$/)?.[1] ?? null
    },
    Ve1 = (A, Q) => {
        let B = A.command.trim(),
            {
                matchingDenyRules: G,
                matchingAskRules: Z,
                matchingAllowRules: I
            } = Fe1(A, Q, "exact");
        if (G[0] !== void 0) return {
            behavior: "deny",
            message: `Permission to use ${X9.name} with command ${B} has been denied.`,
            decisionReason: {
                type: "rule",
                rule: G[0]
            }
        };
        if (Z[0] !== void 0) return {
            behavior: "ask",
            message: PF(X9.name),
            decisionReason: {
                type: "rule",
                rule: Z[0]
            }
        };
        if (I[0] !== void 0) return {
            behavior: "allow",
            updatedInput: A,
            decisionReason: {
                type: "rule",
                rule: I[0]
            }
        };
        let Y = {
            type: "other",
            reason: "This command requires approval"
        };
        return {
            behavior: "passthrough",
            message: PF(X9.name, Y),
            decisionReason: Y,
            suggestions: Je1(B)
        }
    },
    I92 = (A, Q, B) => {
        let G = A.command.trim(),
            Z = Ve1(A, Q);
        if (Z.behavior === "deny" || Z.behavior === "ask") return Z;
        let {
            matchingDenyRules: I,
            matchingAskRules: Y,
            matchingAllowRules: J
        } = Fe1(A, Q, "prefix");
        if (I[0] !== void 0) return {
            behavior: "deny",
            message: `Permission to use ${X9.name} with command ${G} has been denied.`,
            decisionReason: {
                type: "rule",
                rule: I[0]
            }
        };
        if (Y[0] !== void 0) return {
            behavior: "ask",
            message: PF(X9.name),
            decisionReason: {
                type: "rule",
                rule: Y[0]
            }
        };
        let W = Be1(A, H0(), Q, B);
        if (W.behavior !== "passthrough") return W;
        if (Z.behavior === "allow") return Z;
        if (J[0] !== void 0) return {
            behavior: "allow",
            updatedInput: A,
            decisionReason: {
                type: "rule",
                rule: J[0]
            }
        };
        let X = Q92(A, Q);
        if (X.behavior !== "passthrough") return X;
        let F = o22(A, Q);
        if (F.behavior !== "passthrough") return F;
        if (X9.isReadOnly(A)) return {
            behavior: "allow",
            updatedInput: A,
            decisionReason: {
                type: "other",
                reason: "Read-only command is allowed"
            }
        };
        let V = {
            type: "other",
            reason: "This command requires approval"
        };
        return {
            behavior: "passthrough",
            message: PF(X9.name, V),
            decisionReason: V,
            suggestions: Je1(G)
        }
    };
var De1 = L(() => {
    nV();
    MJ();
    IQ1();
    gU();
    KH();
    $Z();
    R2();
    hK();
    aG();
    d22();
    hQ();
    r22();
    gU();
    t22();
    Ie1();
    EE()
});

function X92(A, Q) {
    switch (Q) {
        case "none":
            return !1;
        case "number":
            return /^\d+$/.test(A);
        case "string":
            return !0;
        case "char":
            return A.length === 1;
        case "{}":
            return A === "{}";
        case "EOF":
            return A === "EOF";
        default:
            return !1
    }
}

function d85(A) {
    let Q = IW(A, (W) => `$${W}`);
    if (!Q.success) return !1;
    let B = Q.tokens.map((W) => {
        if (typeof W !== "string") {
            if (W = W, W.op === "glob") return W.pattern
        }
        return W
    });
    if (B.some((W) => typeof W !== "string")) return !1;
    let Z = B;
    if (Z.length === 0) return !1;
    let I, Y = 0;
    for (let [W] of Object.entries(W92)) {
        let X = W.split(" ");
        if (Z.length >= X.length) {
            let F = !0;
            for (let V = 0; V < X.length; V++)
                if (Z[V] !== X[V]) {
                    F = !1;
                    break
                } if (F) {
                I = W92[W], Y = X.length;
                break
            }
        }
    }
    if (!I) return !1;
    if (Z[0] === "git" && Z[1] === "ls-remote")
        for (let W = 2; W < Z.length; W++) {
            let X = Z[W];
            if (X && !X.startsWith("-")) {
                if (X.includes("://")) return !1;
                if (X.includes("@") || X.includes(":")) return !1;
                if (X.includes("$")) return !1
            }
        }
    let J = Y;
    while (J < Z.length) {
        let W = Z[J];
        if (!W) {
            J++;
            continue
        }
        if (Z[0] === "xargs" && (!W.startsWith("-") || W === "--")) {
            if (W === "--" && J + 1 < Z.length) J++, W = Z[J];
            if (W && m85.includes(W)) break;
            return !1
        }
        if (W === "--") {
            J++;
            break
        }
        if (W.startsWith("-") && W.length > 1 && J92.test(W)) {
            let [X, ...F] = W.split("="), V = F.join("=");
            if (!X) return !1;
            let K = I.safeFlags[X];
            if (!K) {
                if (Z[0] === "git" && X.match(/^-\d+$/)) {
                    J++;
                    continue
                }
                if ((Z[0] === "grep" || Z[0] === "rg") && X.startsWith("-") && !X.startsWith("--") && X.length > 2) {
                    let D = X.substring(0, 2),
                        H = X.substring(2);
                    if (I.safeFlags[D] && /^\d+$/.test(H)) {
                        let C = I.safeFlags[D];
                        if (C === "number" || C === "string")
                            if (X92(H, C)) {
                                J++;
                                continue
                            } else return !1
                    }
                }
                if (X.startsWith("-") && !X.startsWith("--") && X.length > 2) {
                    for (let D = 1; D < X.length; D++) {
                        let H = "-" + X[D];
                        if (!I.safeFlags[H]) return !1
                    }
                    J++;
                    continue
                } else return !1
            }
            if (K === "none") {
                if (V) return !1;
                J++
            } else {
                let D;
                if (V) D = V, J++;
                else {
                    if (J + 1 >= Z.length || Z[J + 1] && Z[J + 1].startsWith("-") && Z[J + 1].length > 1 && J92.test(Z[J + 1])) return !1;
                    D = Z[J + 1] || "", J += 2
                }
                if (K === "string" && D.startsWith("-"))
                    if (X === "--sort" && Z[0] === "git" && D.match(/^-[a-zA-Z]/));
                    else return !1;
                if (!X92(D, K)) return !1
            }
        } else J++
    }
    if (I.regex && !I.regex.test(A)) return !1;
    if (!I.regex && /`/.test(A)) return !1;
    if (!I.regex && (Z[0] === "rg" || Z[0] === "grep") && /[\n\r]/.test(A)) return !1;
    if (I.additionalCommandIsDangerousCallback && I.additionalCommandIsDangerousCallback(A)) return !1;
    return !0
}

function c85(A) {
    return new RegExp(`^${A}(?:\\s|$)[^<>()$\`|{}&;\\n\\r]*$`)
}

function UQ1(A) {
    if (uQ() !== "windows") return !1;
    if (/\\\\[a-zA-Z0-9._\-:[\]%]+(?:@(?:\d+|ssl))?\\/i.test(A)) return !0;
    if (/\/\/[a-zA-Z0-9._\-:[\]%]+(?:@(?:\d+|ssl))?\//i.test(A)) return !0;
    if (/@SSL@\d+/i.test(A) || /@\d+@SSL/i.test(A)) return !0;
    if (/DavWWWRoot/i.test(A)) return !0;
    if (/^\\\\(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[\\/]/.test(A) || /^\/\/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})[\\/]/.test(A)) return !0;
    if (/^\\\\(\[[\da-fA-F:]+\])[\\/]/.test(A) || /^\/\/(\[[\da-fA-F:]+\])[\\/]/.test(A)) return !0;
    return !1
}

function i85(A) {
    let Q = !1,
        B = !1,
        G = !1;
    for (let Z = 0; Z < A.length; Z++) {
        let I = A[Z];
        if (G) {
            G = !1;
            continue
        }
        if (I === "\\") {
            G = !0;
            continue
        }
        if (I === "'" && !B) {
            Q = !Q;
            continue
        }
        if (I === '"' && !Q) {
            B = !B;
            continue
        }
        if (Q || B) continue;
        if (I && /[?*[\]]/.test(I)) return !0
    }
    return !1
}

function n85(A) {
    let Q = A.trim();
    if (Q.endsWith(" 2>&1")) Q = Q.slice(0, -5).trim();
    if (UQ1(Q)) return !1;
    if (i85(Q)) return !1;
    if (d85(Q)) return !0;
    for (let B of l85)
        if (B.test(Q)) {
            if (Q.includes("git") && /\s-c[\s=]/.test(Q)) return !1;
            if (Q.includes("git") && /\s--exec-path[\s=]/.test(Q)) return !1;
            if (Q.includes("git") && /\s--config-env[\s=]/.test(Q)) return !1;
            return !0
        } return !1
}

function F92(A) {
    let {
        command: Q
    } = A;
    if (!IW(Q, (Z) => `$${Z}`).success) return {
        behavior: "passthrough",
        message: "Command cannot be parsed, requires further permission checks"
    };
    if (cl(Q).behavior !== "passthrough") return {
        behavior: "passthrough",
        message: "Command is not read-only, requires further permission checks"
    };
    if (UQ1(Q)) return {
        behavior: "ask",
        message: "Command contains Windows UNC path that could be vulnerable to WebDAV attacks"
    };
    if (aV(Q).every((Z) => {
            if (cl(Z).behavior !== "passthrough") return !1;
            return n85(Z)
        })) return {
        behavior: "allow",
        updatedInput: A
    };
    return {
        behavior: "passthrough",
        message: "Command is not read-only, requires further permission checks"
    }
}
var J92, W92, m85, p85, l85;
var ze1 = L(() => {
    gU();
    KH();
    IQ1();
    Ie1();
    s5();
    J92 = /^-[a-zA-Z0-9_-]/, W92 = {
        xargs: {
            safeFlags: {
                "-I": "{}",
                "-i": "none",
                "-n": "number",
                "-P": "number",
                "-L": "number",
                "-s": "number",
                "-E": "EOF",
                "-e": "EOF",
                "-0": "none",
                "-t": "none",
                "-r": "none",
                "-x": "none",
                "-d": "char"
            }
        },
        "git diff": {
            safeFlags: {
                "--stat": "none",
                "--numstat": "none",
                "--shortstat": "none",
                "--dirstat": "none",
                "--summary": "none",
                "--patch-with-stat": "none",
                "--name-only": "none",
                "--name-status": "none",
                "--color": "none",
                "--no-color": "none",
                "--word-diff": "none",
                "--word-diff-regex": "string",
                "--color-words": "none",
                "--no-renames": "none",
                "--no-ext-diff": "none",
                "--check": "none",
                "--ws-error-highlight": "string",
                "--full-index": "none",
                "--binary": "none",
                "--abbrev": "number",
                "--break-rewrites": "none",
                "--find-renames": "none",
                "--find-copies": "none",
                "--find-copies-harder": "none",
                "--irreversible-delete": "none",
                "--diff-algorithm": "string",
                "--histogram": "none",
                "--patience": "none",
                "--minimal": "none",
                "--ignore-space-at-eol": "none",
                "--ignore-space-change": "none",
                "--ignore-all-space": "none",
                "--ignore-blank-lines": "none",
                "--inter-hunk-context": "number",
                "--function-context": "none",
                "--exit-code": "none",
                "--quiet": "none",
                "--cached": "none",
                "--staged": "none",
                "--pickaxe-regex": "none",
                "--pickaxe-all": "none",
                "--no-index": "none",
                "--relative": "string",
                "--diff-filter": "string",
                "-p": "none",
                "-u": "none",
                "-s": "none",
                "-M": "none",
                "-C": "none",
                "-B": "none",
                "-D": "none",
                "-l": "none",
                "-S": "none",
                "-G": "none",
                "-O": "none",
                "-R": "none"
            }
        },
        "git log": {
            safeFlags: {
                "--oneline": "none",
                "--stat": "none",
                "--numstat": "none",
                "--shortstat": "none",
                "--name-only": "none",
                "--name-status": "none",
                "--graph": "none",
                "--color": "none",
                "--no-color": "none",
                "--decorate": "none",
                "--no-decorate": "none",
                "--abbrev-commit": "none",
                "--full-history": "none",
                "--dense": "none",
                "--sparse": "none",
                "--simplify-merges": "none",
                "--ancestry-path": "none",
                "--date": "string",
                "--relative-date": "none",
                "--all": "none",
                "--branches": "none",
                "--tags": "none",
                "--remotes": "none",
                "--first-parent": "none",
                "--merges": "none",
                "--no-merges": "none",
                "--reverse": "none",
                "--walk-reflogs": "none",
                "--grep": "string",
                "--author": "string",
                "--committer": "string",
                "--since": "string",
                "--after": "string",
                "--until": "string",
                "--before": "string",
                "--max-count": "number",
                "--skip": "number",
                "--max-age": "number",
                "--min-age": "number",
                "--no-min-parents": "none",
                "--no-max-parents": "none",
                "--follow": "none",
                "--patch": "none",
                "-p": "none",
                "--no-patch": "none",
                "--no-ext-diff": "none",
                "-s": "none",
                "--pretty": "string",
                "--format": "string",
                "--diff-filter": "string",
                "-n": "number",
                "-S": "string",
                "-G": "string",
                "--pickaxe-regex": "none",
                "--pickaxe-all": "none"
            }
        },
        "git show": {
            safeFlags: {
                "--stat": "none",
                "--numstat": "none",
                "--shortstat": "none",
                "--name-only": "none",
                "--name-status": "none",
                "--color": "none",
                "--no-color": "none",
                "--abbrev-commit": "none",
                "--oneline": "none",
                "--graph": "none",
                "--decorate": "none",
                "--no-decorate": "none",
                "--date": "string",
                "--relative-date": "none",
                "--word-diff": "none",
                "--word-diff-regex": "string",
                "--color-words": "none",
                "--no-patch": "none",
                "--no-ext-diff": "none",
                "--patch": "none",
                "--pretty": "string",
                "--first-parent": "none",
                "--diff-filter": "string",
                "-s": "none",
                "-p": "none",
                "-m": "none",
                "--quiet": "none"
            }
        },
        "git reflog": {
            safeFlags: {
                "--date": "string",
                "--relative-date": "none",
                "--all": "none",
                "--branches": "none",
                "--tags": "none",
                "--remotes": "none",
                "--grep": "string",
                "--author": "string",
                "--committer": "string",
                "--since": "string",
                "--after": "string",
                "--until": "string",
                "--before": "string",
                "--max-count": "number",
                "-n": "number",
                "--oneline": "none",
                "--graph": "none",
                "--decorate": "none",
                "--no-decorate": "none"
            }
        },
        "git stash list": {
            safeFlags: {
                "--oneline": "none",
                "--graph": "none",
                "--decorate": "none",
                "--no-decorate": "none",
                "--date": "string",
                "--relative-date": "none",
                "--all": "none",
                "--branches": "none",
                "--tags": "none",
                "--remotes": "none",
                "--max-count": "number",
                "-n": "number"
            }
        },
        "git ls-remote": {
            safeFlags: {
                "--branches": "none",
                "-b": "none",
                "--tags": "none",
                "-t": "none",
                "--heads": "none",
                "-h": "none",
                "--refs": "none",
                "--quiet": "none",
                "-q": "none",
                "--exit-code": "none",
                "--get-url": "none",
                "--symref": "none",
                "--sort": "string",
                "--server-option": "string",
                "-o": "string"
            }
        },
        file: {
            safeFlags: {
                "--brief": "none",
                "-b": "none",
                "--mime": "none",
                "-i": "none",
                "--mime-type": "none",
                "--mime-encoding": "none",
                "--apple": "none",
                "--check-encoding": "none",
                "-c": "none",
                "--exclude": "string",
                "--exclude-quiet": "string",
                "--print0": "none",
                "-0": "none",
                "-f": "string",
                "-F": "string",
                "--separator": "string",
                "--help": "none",
                "--version": "none",
                "-v": "none",
                "--no-dereference": "none",
                "-h": "none",
                "--dereference": "none",
                "-L": "none",
                "--magic-file": "string",
                "-m": "string",
                "--keep-going": "none",
                "-k": "none",
                "--list": "none",
                "-l": "none",
                "--no-buffer": "none",
                "-n": "none",
                "--preserve-date": "none",
                "-p": "none",
                "--raw": "none",
                "-r": "none",
                "-s": "none",
                "--special-files": "none",
                "--uncompress": "none",
                "-z": "none"
            }
        },
        sed: {
            safeFlags: {
                "--expression": "string",
                "-e": "string",
                "--quiet": "none",
                "--silent": "none",
                "-n": "none",
                "--regexp-extended": "none",
                "-r": "none",
                "--posix": "none",
                "-E": "none",
                "--line-length": "number",
                "-l": "number",
                "--zero-terminated": "none",
                "-z": "none",
                "--separate": "none",
                "-s": "none",
                "--unbuffered": "none",
                "-u": "none",
                "--debug": "none",
                "--help": "none",
                "--version": "none"
            },
            additionalCommandIsDangerousCallback: (A) => !Ze1(A)
        },
        "pip list": {
            safeFlags: {
                "--outdated": "none",
                "-o": "none",
                "--uptodate": "none",
                "-u": "none",
                "--editable": "none",
                "-e": "none",
                "--local": "none",
                "-l": "none",
                "--user": "none",
                "--pre": "none",
                "--format": "string",
                "--not-required": "none",
                "--exclude-editable": "none",
                "--include-editable": "none",
                "--exclude": "string",
                "--help": "none",
                "-h": "none",
                "--version": "none",
                "-V": "none",
                "--verbose": "none",
                "-v": "none",
                "--quiet": "none",
                "-q": "none",
                "--no-color": "none",
                "--no-input": "none",
                "--disable-pip-version-check": "none",
                "--no-python-version-warning": "none"
            }
        },
        sort: {
            safeFlags: {
                "--ignore-leading-blanks": "none",
                "-b": "none",
                "--dictionary-order": "none",
                "-d": "none",
                "--ignore-case": "none",
                "-f": "none",
                "--general-numeric-sort": "none",
                "-g": "none",
                "--human-numeric-sort": "none",
                "-h": "none",
                "--ignore-nonprinting": "none",
                "-i": "none",
                "--month-sort": "none",
                "-M": "none",
                "--numeric-sort": "none",
                "-n": "none",
                "--random-sort": "none",
                "-R": "none",
                "--reverse": "none",
                "-r": "none",
                "--sort": "string",
                "--stable": "none",
                "-s": "none",
                "--unique": "none",
                "-u": "none",
                "--version-sort": "none",
                "-V": "none",
                "--zero-terminated": "none",
                "-z": "none",
                "--key": "string",
                "-k": "string",
                "--field-separator": "string",
                "-t": "string",
                "--check": "none",
                "-c": "none",
                "--check-char-order": "none",
                "-C": "none",
                "--merge": "none",
                "-m": "none",
                "--buffer-size": "string",
                "-S": "string",
                "--parallel": "number",
                "--batch-size": "number",
                "--help": "none",
                "--version": "none"
            }
        },
        man: {
            safeFlags: {
                "-a": "none",
                "--all": "none",
                "-d": "none",
                "-f": "none",
                "--whatis": "none",
                "-h": "none",
                "-k": "none",
                "--apropos": "none",
                "-l": "string",
                "-w": "none",
                "-S": "string",
                "-s": "string"
            }
        },
        "npm list": {
            safeFlags: {
                "--all": "none",
                "-a": "none",
                "--json": "none",
                "--long": "none",
                "-l": "none",
                "--global": "none",
                "-g": "none",
                "--depth": "number",
                "--omit": "string",
                "--include": "string",
                "--link": "none",
                "--workspace": "string",
                "-w": "string",
                "--workspaces": "none",
                "-ws": "none"
            }
        },
        "mcp-cli servers": {
            safeFlags: {
                "--json": "none"
            }
        },
        "mcp-cli tools": {
            safeFlags: {
                "--json": "none"
            }
        },
        "mcp-cli info": {
            safeFlags: {
                "--json": "none"
            }
        },
        "mcp-cli grep": {
            safeFlags: {
                "--json": "none",
                "-i": "none",
                "--ignore-case": "none"
            }
        },
        "mcp-cli resources": {
            safeFlags: {
                "--json": "none"
            }
        },
        "mcp-cli read": {
            safeFlags: {
                "--json": "none"
            }
        },