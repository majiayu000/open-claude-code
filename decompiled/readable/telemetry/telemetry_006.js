/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.049Z
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 6/14
 * Lines: 264542 - 266040 (1499 lines)
 * Original file: cli.js
 */

function q45(A) {
    let {
        originalCommand: Q
    } = A;
    if (!kt1.test(Q)) return {
        behavior: "passthrough",
        message: "No heredoc in substitution"
    };
    if (w45(Q)) return {
        behavior: "allow",
        updatedInput: {
            command: Q
        },
        decisionReason: {
            type: "other",
            reason: "Safe command substitution: cat with quoted/escaped heredoc delimiter"
        }
    };
    return {
        behavior: "passthrough",
        message: "Command substitution needs validation"
    }
}

function N45(A) {
    let {
        originalCommand: Q,
        baseCommand: B
    } = A;
    if (B !== "git" || !/^git\s+commit\s+/.test(Q)) return {
        behavior: "passthrough",
        message: "Not a git commit"
    };
    let G = Q.match(/^git\s+commit\s+.*-m\s+(["'])([\s\S]*?)\1(.*)$/);
    if (G) {
        let [, Z, I, Y] = G;
        if (Z === '"' && I && /\$\(|`|\$\{/.test(I)) return BA("tengu_bash_security_check_triggered", {
            checkId: iV.GIT_COMMIT_SUBSTITUTION,
            subId: 1
        }), {
            behavior: "ask",
            message: "Git commit message contains command substitution patterns"
        };
        if (Y && /\$\(|`|\$\{/.test(Y)) return {
            behavior: "passthrough",
            message: "Check patterns in flags"
        };
        return {
            behavior: "allow",
            updatedInput: {
                command: Q
            },
            decisionReason: {
                type: "other",
                reason: "Git commit with simple quoted message is allowed"
            }
        }
    }
    return {
        behavior: "passthrough",
        message: "Git commit needs validation"
    }
}

function L45(A) {
    let {
        originalCommand: Q
    } = A;
    if (kt1.test(Q)) return {
        behavior: "passthrough",
        message: "Heredoc in substitution"
    };
    let B = /<<-?\s*'[^']+'/,
        G = /<<-?\s*\\\w+/;
    if (B.test(Q) || G.test(Q)) return {
        behavior: "allow",
        updatedInput: {
            command: Q
        },
        decisionReason: {
            type: "other",
            reason: "Heredoc with quoted/escaped delimiter is safe"
        }
    };
    return {
        behavior: "passthrough",
        message: "No heredoc patterns"
    }
}

function M45(A) {
    let {
        originalCommand: Q,
        baseCommand: B
    } = A;
    if (B !== "jq") return {
        behavior: "passthrough",
        message: "Not jq"
    };
    if (/\bsystem\s*\(/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.JQ_SYSTEM_FUNCTION,
        subId: 1
    }), {
        behavior: "ask",
        message: "jq command contains system() function which executes arbitrary commands"
    };
    let G = Q.substring(3).trim();
    if (/(?:^|\s)(?:-f\b|--from-file|--rawfile|--slurpfile|-L\b|--library-path)/.test(G)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.JQ_FILE_ARGUMENTS,
        subId: 1
    }), {
        behavior: "ask",
        message: "jq command contains dangerous flags that could execute code or read arbitrary files"
    };
    return {
        behavior: "passthrough",
        message: "jq command is safe"
    }
}

function O45(A) {
    let {
        unquotedContent: Q
    } = A, B = "Command contains shell metacharacters (;, |, or &) in arguments";
    if (/(?:^|\s)["'][^"']*[;&][^"']*["'](?:\s|$)/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.SHELL_METACHARACTERS,
        subId: 1
    }), {
        behavior: "ask",
        message: "Command contains shell metacharacters (;, |, or &) in arguments"
    };
    if ([/-name\s+["'][^"']*[;|&][^"']*["']/, /-path\s+["'][^"']*[;|&][^"']*["']/, /-iname\s+["'][^"']*[;|&][^"']*["']/].some((Z) => Z.test(Q))) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.SHELL_METACHARACTERS,
        subId: 2
    }), {
        behavior: "ask",
        message: "Command contains shell metacharacters (;, |, or &) in arguments"
    };
    if (/-regex\s+["'][^"']*[;&][^"']*["']/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.SHELL_METACHARACTERS,
        subId: 3
    }), {
        behavior: "ask",
        message: "Command contains shell metacharacters (;, |, or &) in arguments"
    };
    return {
        behavior: "passthrough",
        message: "No metacharacters"
    }
}

function R45(A) {
    let {
        fullyUnquotedContent: Q
    } = A;
    if (/[<>|]\s*\$[A-Za-z_]/.test(Q) || /\$[A-Za-z_][A-Za-z0-9_]*\s*[|<>]/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.DANGEROUS_VARIABLES,
        subId: 1
    }), {
        behavior: "ask",
        message: "Command contains variables in dangerous contexts (redirections or pipes)"
    };
    return {
        behavior: "passthrough",
        message: "No dangerous variables"
    }
}

function T45(A) {
    let {
        unquotedContent: Q,
        fullyUnquotedContent: B
    } = A;
    if (z45(Q, "`")) return {
        behavior: "ask",
        message: "Command contains backticks (`) for command substitution"
    };
    for (let {
            pattern: G,
            message: Z
        }
        of H45)
        if (G.test(Q)) return BA("tengu_bash_security_check_triggered", {
            checkId: iV.DANGEROUS_PATTERNS_COMMAND_SUBSTITUTION,
            subId: 1
        }), {
            behavior: "ask",
            message: `Command contains ${Z}`
        };
    if (/</.test(B)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.DANGEROUS_PATTERNS_INPUT_REDIRECTION,
        subId: 1
    }), {
        behavior: "ask",
        message: "Command contains input redirection (<) which could read sensitive files"
    };
    if (/>/.test(B)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.DANGEROUS_PATTERNS_OUTPUT_REDIRECTION,
        subId: 1
    }), {
        behavior: "ask",
        message: "Command contains output redirection (>) which could write to arbitrary files"
    };
    return {
        behavior: "passthrough",
        message: "No dangerous patterns"
    }
}

function P45(A) {
    let {
        fullyUnquotedContent: Q
    } = A;
    if (!/[\n\r]/.test(Q)) return {
        behavior: "passthrough",
        message: "No newlines"
    };
    if (/[\n\r]\s*[a-zA-Z/.~]/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.NEWLINES,
        subId: 1
    }), {
        behavior: "ask",
        message: "Command contains newlines that could separate multiple commands"
    };
    return {
        behavior: "passthrough",
        message: "Newlines appear to be within data"
    }
}

function j45(A) {
    let {
        originalCommand: Q
    } = A;
    if (/\$IFS|\$\{[^}]*IFS/.test(Q)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.IFS_INJECTION,
        subId: 1
    }), {
        behavior: "ask",
        message: "Command contains IFS variable usage which could bypass security validation"
    };
    return {
        behavior: "passthrough",
        message: "No IFS injection detected"
    }
}

function S45(A) {
    let {
        originalCommand: Q,
        baseCommand: B
    } = A;
    if (B === "echo") return {
        behavior: "passthrough",
        message: "echo command is safe and has no dangerous flags"
    };
    let G = !1,
        Z = !1,
        I = !1;
    for (let Y = 0; Y < Q.length - 1; Y++) {
        let J = Q[Y],
            W = Q[Y + 1];
        if (I) {
            I = !1;
            continue
        }
        if (J === "\\") {
            I = !0;
            continue
        }
        if (J === "'" && !Z) {
            G = !G;
            continue
        }
        if (J === '"' && !G) {
            Z = !Z;
            continue
        }
        if (G || Z) continue;
        if (J && W && /\s/.test(J) && W === "-") {
            let X = Y + 1,
                F = "";
            while (X < Q.length) {
                let V = Q[X];
                if (!V) break;
                if (/[\s=]/.test(V)) break;
                if (/['"`]/.test(V)) {
                    if (B === "cut" && F === "-d" && /['"`]/.test(V)) break;
                    if (X + 1 < Q.length) {
                        let K = Q[X + 1];
                        if (K && !/[a-zA-Z0-9_'"-]/.test(K)) break
                    }
                }
                F += V, X++
            }
            if (F.includes('"') || F.includes("'")) return BA("tengu_bash_security_check_triggered", {
                checkId: iV.OBFUSCATED_FLAGS,
                subId: 1
            }), {
                behavior: "ask",
                message: "Command contains quoted characters in flag names"
            }
        }
    }
    if (/\s['"`]-/.test(A.fullyUnquotedContent)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.OBFUSCATED_FLAGS,
        subId: 2
    }), {
        behavior: "ask",
        message: "Command contains quoted characters in flag names"
    };
    if (/['"`]{2}-/.test(A.fullyUnquotedContent)) return BA("tengu_bash_security_check_triggered", {
        checkId: iV.OBFUSCATED_FLAGS,
        subId: 3
    }), {
        behavior: "ask",
        message: "Command contains quoted characters in flag names"
    };
    return {
        behavior: "passthrough",
        message: "No obfuscated flags detected"
    }
}

function cl(A) {
    let Q = A.split(" ")[0] || "",
        {
            withDoubleQuotes: B,
            fullyUnquoted: G
        } = C45(A, Q === "jq"),
        Z = {
            originalCommand: A,
            baseCommand: Q,
            unquotedContent: B,
            fullyUnquotedContent: E45(G)
        },
        I = [U45, $45, q45, L45, N45];
    for (let J of I) {
        let W = J(Z);
        if (W.behavior === "allow") return {
            behavior: "passthrough",
            message: W.decisionReason?.type === "other" ? W.decisionReason.reason : "Command allowed"
        };
        if (W.behavior !== "passthrough") return W
    }
    let Y = [M45, S45, O45, R45, P45, j45, T45];
    for (let J of Y) {
        let W = J(Z);
        if (W.behavior === "ask") return W
    }
    return {
        behavior: "passthrough",
        message: "Command passed all security checks"
    }
}
var kt1, H45, iV;
var IQ1 = L(() => {
    w0();
    kt1 = /\$\(.*<</, H45 = [{
        pattern: /<\(/,
        message: "process substitution <()"
    }, {
        pattern: />\(/,
        message: "process substitution >()"
    }, {
        pattern: /\$\(/,
        message: "$() command substitution"
    }, {
        pattern: /\$\{/,
        message: "${} parameter substitution"
    }, {
        pattern: /~\[/,
        message: "Zsh-style parameter expansion"
    }, {
        pattern: /\(e:/,
        message: "Zsh-style glob qualifiers"
    }, {
        pattern: /<#/,
        message: "PowerShell comment syntax"
    }], iV = {
        INCOMPLETE_COMMANDS: 1,
        JQ_SYSTEM_FUNCTION: 2,
        JQ_FILE_ARGUMENTS: 3,
        OBFUSCATED_FLAGS: 4,
        SHELL_METACHARACTERS: 5,
        DANGEROUS_VARIABLES: 6,
        NEWLINES: 7,
        DANGEROUS_PATTERNS_COMMAND_SUBSTITUTION: 8,
        DANGEROUS_PATTERNS_INPUT_REDIRECTION: 9,
        DANGEROUS_PATTERNS_OUTPUT_REDIRECTION: 10,
        IFS_INJECTION: 11,
        GIT_COMMIT_SUBSTITUTION: 12
    }
});

function qIA(A) {
    if (A !== ll) throw Error("Illegal constructor")
}

function ELA(A) {
    return !!A && typeof A.row === "number" && typeof A.column === "number"
}

function C22(A) {
    W1 = A
}

function ft1(A, Q, B, G) {
    let Z = B - Q,
        I = A.textCallback(Q, G);
    if (I) {
        Q += I.length;
        while (Q < B) {
            let Y = A.textCallback(Q, G);
            if (Y && Y.length > 0) Q += Y.length, I += Y;
            else break
        }
        if (Q > B) I = I.slice(0, Z)
    }
    return I ?? ""
}

function bt1(A, Q, B, G, Z) {
    for (let I = 0, Y = Z.length; I < Y; I++) {
        let J = W1.getValue(B, "i32");
        B += u2;
        let W = YY(Q, B);
        B += hU, Z[I] = {
            patternIndex: G,
            name: A.captureNames[J],
            node: W
        }
    }
    return B
}

function C8(A, Q = 0) {
    let B = z2 + Q * hU;
    W1.setValue(B, A.id, "i32"), B += u2, W1.setValue(B, A.startIndex, "i32"), B += u2, W1.setValue(B, A.startPosition.row, "i32"), B += u2, W1.setValue(B, A.startPosition.column, "i32"), B += u2, W1.setValue(B, A[0], "i32")
}

function YY(A, Q = z2) {
    let B = W1.getValue(Q, "i32");
    if (Q += u2, B === 0) return null;
    let G = W1.getValue(Q, "i32");
    Q += u2;
    let Z = W1.getValue(Q, "i32");
    Q += u2;
    let I = W1.getValue(Q, "i32");
    Q += u2;
    let Y = W1.getValue(Q, "i32");
    return new v45(ll, {
        id: B,
        tree: A,
        startIndex: G,
        startPosition: {
            row: Z,
            column: I
        },
        other: Y
    })
}

function JZ(A, Q = z2) {
    W1.setValue(Q + 0 * u2, A[0], "i32"), W1.setValue(Q + 1 * u2, A[1], "i32"), W1.setValue(Q + 2 * u2, A[2], "i32"), W1.setValue(Q + 3 * u2, A[3], "i32")
}

function Dq(A) {
    A[0] = W1.getValue(z2 + 0 * u2, "i32"), A[1] = W1.getValue(z2 + 1 * u2, "i32"), A[2] = W1.getValue(z2 + 2 * u2, "i32"), A[3] = W1.getValue(z2 + 3 * u2, "i32")
}

function mM(A, Q) {
    W1.setValue(A, Q.row, "i32"), W1.setValue(A + u2, Q.column, "i32")
}

function mAA(A) {
    return {
        row: W1.getValue(A, "i32") >>> 0,
        column: W1.getValue(A + u2, "i32") >>> 0
    }
}

function E22(A, Q) {
    mM(A, Q.startPosition), A += qk, mM(A, Q.endPosition), A += qk, W1.setValue(A, Q.startIndex, "i32"), A += u2, W1.setValue(A, Q.endIndex, "i32"), A += u2
}

function JQ1(A) {
    let Q = {};
    return Q.startPosition = mAA(A), A += qk, Q.endPosition = mAA(A), A += qk, Q.startIndex = W1.getValue(A, "i32") >>> 0, A += u2, Q.endIndex = W1.getValue(A, "i32") >>> 0, Q
}

function z22(A, Q = z2) {
    mM(Q, A.startPosition), Q += qk, mM(Q, A.oldEndPosition), Q += qk, mM(Q, A.newEndPosition), Q += qk, W1.setValue(Q, A.startIndex, "i32"), Q += u2, W1.setValue(Q, A.oldEndIndex, "i32"), Q += u2, W1.setValue(Q, A.newEndIndex, "i32"), Q += u2
}

function U22(A) {
    let Q = {};
    return Q.major_version = W1.getValue(A, "i32"), A += u2, Q.minor_version = W1.getValue(A, "i32"), A += u2, Q.field_count = W1.getValue(A, "i32"), Q
}

function $22(A, Q, B, G) {
    if (A.length !== 3) throw Error(`Wrong number of arguments to \`#${B}\` predicate. Expected 2, got ${A.length-1}`);
    if (!H22(A[1])) throw Error(`First argument of \`#${B}\` predicate must be a capture. Got "${A[1].value}"`);
    let Z = B === "eq?" || B === "any-eq?",
        I = !B.startsWith("any-");
    if (H22(A[2])) {
        let Y = A[1].name,
            J = A[2].name;
        G[Q].push((W) => {
            let X = [],
                F = [];
            for (let K of W) {
                if (K.name === Y) X.push(K.node);
                if (K.name === J) F.push(K.node)
            }
            let V = K0((K, D, H) => {
                return H ? K.text === D.text : K.text !== D.text
            }, "compare");
            return I ? X.every((K) => F.some((D) => V(K, D, Z))) : X.some((K) => F.some((D) => V(K, D, Z)))
        })
    } else {
        let Y = A[1].name,
            J = A[2].value,
            W = K0((F) => F.text === J, "matches"),
            X = K0((F) => F.text !== J, "doesNotMatch");
        G[Q].push((F) => {
            let V = [];
            for (let D of F)
                if (D.name === Y) V.push(D.node);
            let K = Z ? W : X;
            return I ? V.every(K) : V.some(K)
        })
    }
}

function w22(A, Q, B, G) {
    if (A.length !== 3) throw Error(`Wrong number of arguments to \`#${B}\` predicate. Expected 2, got ${A.length-1}.`);
    if (A[1].type !== "capture") throw Error(`First argument of \`#${B}\` predicate must be a capture. Got "${A[1].value}".`);
    if (A[2].type !== "string") throw Error(`Second argument of \`#${B}\` predicate must be a string. Got @${A[2].name}.`);
    let Z = B === "match?" || B === "any-match?",
        I = !B.startsWith("any-"),
        Y = A[1].name,
        J = new RegExp(A[2].value);
    G[Q].push((W) => {
        let X = [];
        for (let V of W)
            if (V.name === Y) X.push(V.node.text);
        let F = K0((V, K) => {
            return K ? J.test(V) : !J.test(V)
        }, "test");
        if (X.length === 0) return !Z;
        return I ? X.every((V) => F(V, Z)) : X.some((V) => F(V, Z))
    })
}

function q22(A, Q, B, G) {
    if (A.length < 2) throw Error(`Wrong number of arguments to \`#${B}\` predicate. Expected at least 1. Got ${A.length-1}.`);
    if (A[1].type !== "capture") throw Error(`First argument of \`#${B}\` predicate must be a capture. Got "${A[1].value}".`);
    let Z = B === "any-of?",
        I = A[1].name,
        Y = A.slice(2);
    if (!Y.every(ht1)) throw Error(`Arguments to \`#${B}\` predicate must be strings.".`);
    let J = Y.map((W) => W.value);
    G[Q].push((W) => {
        let X = [];
        for (let F of W)
            if (F.name === I) X.push(F.node.text);
        if (X.length === 0) return !Z;
        return X.every((F) => J.includes(F)) === Z
    })
}

function N22(A, Q, B, G, Z) {
    if (A.length < 2 || A.length > 3) throw Error(`Wrong number of arguments to \`#${B}\` predicate. Expected 1 or 2. Got ${A.length-1}.`);
    if (!A.every(ht1)) throw Error(`Arguments to \`#${B}\` predicate must be strings.".`);
    let I = B === "is?" ? G : Z;
    if (!I[Q]) I[Q] = {};
    I[Q][A[1].value] = A[2]?.value ?? null
}

function L22(A, Q, B) {
    if (A.length < 2 || A.length > 3) throw Error(`Wrong number of arguments to \`#set!\` predicate. Expected 1 or 2. Got ${A.length-1}.`);
    if (!A.every(ht1)) throw Error('Arguments to `#set!` predicate must be strings.".');
    if (!B[Q]) B[Q] = {};
    B[Q][A[1].value] = A[2]?.value ?? null
}

function M22(A, Q, B, G, Z, I, Y, J, W, X, F) {
    if (Q === b45) {
        let V = G[B];
        I.push({
            type: "capture",
            name: V
        })
    } else if (Q === f45) I.push({
        type: "string",
        value: Z[B]
    });
    else if (I.length > 0) {
        if (I[0].type !== "string") throw Error("Predicates must begin with a literal value");
        let V = I[0].value;
        switch (V) {
            case "any-not-eq?":
            case "not-eq?":
            case "any-eq?":
            case "eq?":
                $22(I, A, V, Y);
                break;
            case "any-not-match?":
            case "not-match?":
            case "any-match?":
            case "match?":
                w22(I, A, V, Y);
                break;
            case "not-any-of?":
            case "any-of?":
                q22(I, A, V, Y);
                break;
            case "is?":
            case "is-not?":
                N22(I, A, V, X, F);
                break;
            case "set!":
                L22(I, A, W);
                break;
            default:
                J[A].push({
                    operator: V,
                    operands: I.slice(1)
                })
        }
        I.length = 0
    }
}

async function O22(A) {
    if (!YQ1) YQ1 = await d45(A);
    return YQ1
}

function R22() {
    return !!YQ1
}
var _45, K0 = (A, Q) => _45(A, "name", {
        value: Q,
        configurable: !0
    }),
    D22 = 2,
    u2 = 4,
    yt1, hU, qk, zLA, pl, ll, W1, k45, y45, x45, v45, b45 = 1,
    f45 = 2,
    h45, eqG, H22, ht1, iT, CLA, g45, u45, gt1, m45, d45, YQ1 = null,
    z2, xt1, vt1, ut1;
var T22 = L(() => {
    _45 = Object.defineProperty, yt1 = 4 * u2, hU = 5 * u2, qk = 2 * u2, zLA = 2 * u2 + 2 * qk, pl = {
        row: 0,
        column: 0
    }, ll = Symbol("INTERNAL");
    K0(qIA, "assertInternal");
    K0(ELA, "isPoint");
    K0(C22, "setModule");
    k45 = class {
        static {
            K0(this, "LookaheadIterator")
        } [0] = 0;
        language;
        constructor(A, Q, B) {
            qIA(A), this[0] = Q, this.language = B
        }
        get currentTypeId() {
            return W1._ts_lookahead_iterator_current_symbol(this[0])
        }
        get currentType() {
            return this.language.types[this.currentTypeId] || "ERROR"
        }
        delete() {
            W1._ts_lookahead_iterator_delete(this[0]), this[0] = 0
        }
        reset(A, Q) {
            if (W1._ts_lookahead_iterator_reset(this[0], A[0], Q)) return this.language = A, !0;
            return !1
        }
        resetState(A) {
            return Boolean(W1._ts_lookahead_iterator_reset_state(this[0], A))
        } [Symbol.iterator]() {
            return {
                next: K0(() => {
                    if (W1._ts_lookahead_iterator_next(this[0])) return {
                        done: !1,
                        value: this.currentType
                    };
                    return {
                        done: !0,
                        value: ""
                    }
                }, "next")
            }
        }
    };
    K0(ft1, "getText");
    y45 = class A {
        static {
            K0(this, "Tree")
        } [0] = 0;
        textCallback;
        language;
        constructor(Q, B, G, Z) {
            qIA(Q), this[0] = B, this.language = G, this.textCallback = Z
        }
        copy() {
            let Q = W1._ts_tree_copy(this[0]);
            return new A(ll, Q, this.language, this.textCallback)
        }
        delete() {
            W1._ts_tree_delete(this[0]), this[0] = 0
        }
        get rootNode() {
            return W1._ts_tree_root_node_wasm(this[0]), YY(this)
        }
        rootNodeWithOffset(Q, B) {
            let G = z2 + hU;
            return W1.setValue(G, Q, "i32"), mM(G + u2, B), W1._ts_tree_root_node_with_offset_wasm(this[0]), YY(this)
        }
        edit(Q) {
            z22(Q), W1._ts_tree_edit_wasm(this[0])
        }
        walk() {
            return this.rootNode.walk()
        }
        getChangedRanges(Q) {
            if (!(Q instanceof A)) throw TypeError("Argument must be a Tree");
            W1._ts_tree_get_changed_ranges_wasm(this[0], Q[0]);
            let B = W1.getValue(z2, "i32"),
                G = W1.getValue(z2 + u2, "i32"),
                Z = Array(B);
            if (B > 0) {
                let I = G;
                for (let Y = 0; Y < B; Y++) Z[Y] = JQ1(I), I += zLA;
                W1._free(G)
            }
            return Z
        }
        getIncludedRanges() {
            W1._ts_tree_included_ranges_wasm(this[0]);
            let Q = W1.getValue(z2, "i32"),
                B = W1.getValue(z2 + u2, "i32"),
                G = Array(Q);
            if (Q > 0) {
                let Z = B;
                for (let I = 0; I < Q; I++) G[I] = JQ1(Z), Z += zLA;
                W1._free(B)
            }
            return G
        }
    }, x45 = class A {
        static {
            K0(this, "TreeCursor")
        } [0] = 0;
        [1] = 0;
        [2] = 0;
        [3] = 0;
        tree;
        constructor(Q, B) {
            qIA(Q), this.tree = B, Dq(this)
        }
        copy() {
            let Q = new A(ll, this.tree);
            return W1._ts_tree_cursor_copy_wasm(this.tree[0]), Dq(Q), Q
        }
        delete() {
            JZ(this), W1._ts_tree_cursor_delete_wasm(this.tree[0]), this[0] = this[1] = this[2] = 0
        }
        get currentNode() {
            return JZ(this), W1._ts_tree_cursor_current_node_wasm(this.tree[0]), YY(this.tree)
        }
        get currentFieldId() {
            return JZ(this), W1._ts_tree_cursor_current_field_id_wasm(this.tree[0])
        }
        get currentFieldName() {
            return this.tree.language.fields[this.currentFieldId]
        }
        get currentDepth() {
            return JZ(this), W1._ts_tree_cursor_current_depth_wasm(this.tree[0])
        }
        get currentDescendantIndex() {
            return JZ(this), W1._ts_tree_cursor_current_descendant_index_wasm(this.tree[0])
        }
        get nodeType() {
            return this.tree.language.types[this.nodeTypeId] || "ERROR"
        }
        get nodeTypeId() {
            return JZ(this), W1._ts_tree_cursor_current_node_type_id_wasm(this.tree[0])
        }
        get nodeStateId() {
            return JZ(this), W1._ts_tree_cursor_current_node_state_id_wasm(this.tree[0])
        }
        get nodeId() {
            return JZ(this), W1._ts_tree_cursor_current_node_id_wasm(this.tree[0])
        }
        get nodeIsNamed() {
            return JZ(this), W1._ts_tree_cursor_current_node_is_named_wasm(this.tree[0]) === 1
        }
        get nodeIsMissing() {
            return JZ(this), W1._ts_tree_cursor_current_node_is_missing_wasm(this.tree[0]) === 1
        }
        get nodeText() {
            JZ(this);
            let Q = W1._ts_tree_cursor_start_index_wasm(this.tree[0]),
                B = W1._ts_tree_cursor_end_index_wasm(this.tree[0]);
            W1._ts_tree_cursor_start_position_wasm(this.tree[0]);
            let G = mAA(z2);
            return ft1(this.tree, Q, B, G)
        }
        get startPosition() {
            return JZ(this), W1._ts_tree_cursor_start_position_wasm(this.tree[0]), mAA(z2)
        }
        get endPosition() {
            return JZ(this), W1._ts_tree_cursor_end_position_wasm(this.tree[0]), mAA(z2)
        }
        get startIndex() {
            return JZ(this), W1._ts_tree_cursor_start_index_wasm(this.tree[0])
        }
        get endIndex() {
            return JZ(this), W1._ts_tree_cursor_end_index_wasm(this.tree[0])
        }
        gotoFirstChild() {
            JZ(this);
            let Q = W1._ts_tree_cursor_goto_first_child_wasm(this.tree[0]);
            return Dq(this), Q === 1
        }
        gotoLastChild() {
            JZ(this);
            let Q = W1._ts_tree_cursor_goto_last_child_wasm(this.tree[0]);
            return Dq(this), Q === 1
        }
        gotoParent() {
            JZ(this);
            let Q = W1._ts_tree_cursor_goto_parent_wasm(this.tree[0]);
            return Dq(this), Q === 1
        }
        gotoNextSibling() {
            JZ(this);
            let Q = W1._ts_tree_cursor_goto_next_sibling_wasm(this.tree[0]);
            return Dq(this), Q === 1
        }
        gotoPreviousSibling() {
            JZ(this);
            let Q = W1._ts_tree_cursor_goto_previous_sibling_wasm(this.tree[0]);
            return Dq(this), Q === 1
        }
        gotoDescendant(Q) {
            JZ(this), W1._ts_tree_cursor_goto_descendant_wasm(this.tree[0], Q), Dq(this)
        }
        gotoFirstChildForIndex(Q) {
            JZ(this), W1.setValue(z2 + yt1, Q, "i32");
            let B = W1._ts_tree_cursor_goto_first_child_for_index_wasm(this.tree[0]);
            return Dq(this), B === 1
        }
        gotoFirstChildForPosition(Q) {
            JZ(this), mM(z2 + yt1, Q);
            let B = W1._ts_tree_cursor_goto_first_child_for_position_wasm(this.tree[0]);
            return Dq(this), B === 1
        }
        reset(Q) {
            C8(Q), JZ(this, z2 + hU), W1._ts_tree_cursor_reset_wasm(this.tree[0]), Dq(this)
        }
        resetTo(Q) {
            JZ(this, z2), JZ(Q, z2 + yt1), W1._ts_tree_cursor_reset_to_wasm(this.tree[0], Q.tree[0]), Dq(this)
        }
    }, v45 = class {
        static {
            K0(this, "Node")
        } [0] = 0;
        _children;
        _namedChildren;
        constructor(A, {
            id: Q,
            tree: B,
            startIndex: G,
            startPosition: Z,
            other: I
        }) {
            qIA(A), this[0] = I, this.id = Q, this.tree = B, this.startIndex = G, this.startPosition = Z
        }
        id;
        startIndex;
        startPosition;
        tree;
        get typeId() {
            return C8(this), W1._ts_node_symbol_wasm(this.tree[0])
        }
        get grammarId() {
            return C8(this), W1._ts_node_grammar_symbol_wasm(this.tree[0])
        }
        get type() {
            return this.tree.language.types[this.typeId] || "ERROR"
        }
        get grammarType() {
            return this.tree.language.types[this.grammarId] || "ERROR"
        }
        get isNamed() {
            return C8(this), W1._ts_node_is_named_wasm(this.tree[0]) === 1
        }
        get isExtra() {
            return C8(this), W1._ts_node_is_extra_wasm(this.tree[0]) === 1
        }
        get isError() {
            return C8(this), W1._ts_node_is_error_wasm(this.tree[0]) === 1
        }
        get isMissing() {
            return C8(this), W1._ts_node_is_missing_wasm(this.tree[0]) === 1
        }
        get hasChanges() {
            return C8(this), W1._ts_node_has_changes_wasm(this.tree[0]) === 1
        }
        get hasError() {
            return C8(this), W1._ts_node_has_error_wasm(this.tree[0]) === 1
        }
        get endIndex() {
            return C8(this), W1._ts_node_end_index_wasm(this.tree[0])
        }
        get endPosition() {
            return C8(this), W1._ts_node_end_point_wasm(this.tree[0]), mAA(z2)
        }
        get text() {
            return ft1(this.tree, this.startIndex, this.endIndex, this.startPosition)
        }
        get parseState() {
            return C8(this), W1._ts_node_parse_state_wasm(this.tree[0])
        }
        get nextParseState() {
            return C8(this), W1._ts_node_next_parse_state_wasm(this.tree[0])
        }
        equals(A) {
            return this.tree === A.tree && this.id === A.id
        }
        child(A) {
            return C8(this), W1._ts_node_child_wasm(this.tree[0], A), YY(this.tree)
        }
        namedChild(A) {
            return C8(this), W1._ts_node_named_child_wasm(this.tree[0], A), YY(this.tree)
        }
        childForFieldId(A) {
            return C8(this), W1._ts_node_child_by_field_id_wasm(this.tree[0], A), YY(this.tree)
        }
        childForFieldName(A) {
            let Q = this.tree.language.fields.indexOf(A);
            if (Q !== -1) return this.childForFieldId(Q);
            return null
        }
        fieldNameForChild(A) {
            C8(this);
            let Q = W1._ts_node_field_name_for_child_wasm(this.tree[0], A);
            if (!Q) return null;
            return W1.AsciiToString(Q)
        }
        fieldNameForNamedChild(A) {
            C8(this);
            let Q = W1._ts_node_field_name_for_named_child_wasm(this.tree[0], A);
            if (!Q) return null;
            return W1.AsciiToString(Q)
        }
        childrenForFieldName(A) {
            let Q = this.tree.language.fields.indexOf(A);
            if (Q !== -1 && Q !== 0) return this.childrenForFieldId(Q);
            return []
        }
        childrenForFieldId(A) {
            C8(this), W1._ts_node_children_by_field_id_wasm(this.tree[0], A);
            let Q = W1.getValue(z2, "i32"),
                B = W1.getValue(z2 + u2, "i32"),
                G = Array(Q);
            if (Q > 0) {
                let Z = B;
                for (let I = 0; I < Q; I++) G[I] = YY(this.tree, Z), Z += hU;
                W1._free(B)
            }
            return G
        }
        firstChildForIndex(A) {
            C8(this);
            let Q = z2 + hU;
            return W1.setValue(Q, A, "i32"), W1._ts_node_first_child_for_byte_wasm(this.tree[0]), YY(this.tree)
        }
        firstNamedChildForIndex(A) {
            C8(this);
            let Q = z2 + hU;
            return W1.setValue(Q, A, "i32"), W1._ts_node_first_named_child_for_byte_wasm(this.tree[0]), YY(this.tree)
        }
        get childCount() {
            return C8(this), W1._ts_node_child_count_wasm(this.tree[0])
        }
        get namedChildCount() {
            return C8(this), W1._ts_node_named_child_count_wasm(this.tree[0])
        }
        get firstChild() {
            return this.child(0)
        }
        get firstNamedChild() {
            return this.namedChild(0)
        }
        get lastChild() {
            return this.child(this.childCount - 1)
        }
        get lastNamedChild() {
            return this.namedChild(this.namedChildCount - 1)
        }
        get children() {
            if (!this._children) {
                C8(this), W1._ts_node_children_wasm(this.tree[0]);
                let A = W1.getValue(z2, "i32"),
                    Q = W1.getValue(z2 + u2, "i32");
                if (this._children = Array(A), A > 0) {
                    let B = Q;
                    for (let G = 0; G < A; G++) this._children[G] = YY(this.tree, B), B += hU;
                    W1._free(Q)
                }
            }
            return this._children
        }
        get namedChildren() {
            if (!this._namedChildren) {
                C8(this), W1._ts_node_named_children_wasm(this.tree[0]);
                let A = W1.getValue(z2, "i32"),
                    Q = W1.getValue(z2 + u2, "i32");
                if (this._namedChildren = Array(A), A > 0) {
                    let B = Q;
                    for (let G = 0; G < A; G++) this._namedChildren[G] = YY(this.tree, B), B += hU;
                    W1._free(Q)
                }
            }
            return this._namedChildren
        }
        descendantsOfType(A, Q = pl, B = pl) {
            if (!Array.isArray(A)) A = [A];
            let G = [],
                Z = this.tree.language.types;
            for (let X of A)
                if (X == "ERROR") G.push(65535);
            for (let X = 0, F = Z.length; X < F; X++)
                if (A.includes(Z[X])) G.push(X);
            let I = W1._malloc(u2 * G.length);
            for (let X = 0, F = G.length; X < F; X++) W1.setValue(I + X * u2, G[X], "i32");
            C8(this), W1._ts_node_descendants_of_type_wasm(this.tree[0], I, G.length, Q.row, Q.column, B.row, B.column);
            let Y = W1.getValue(z2, "i32"),
                J = W1.getValue(z2 + u2, "i32"),
                W = Array(Y);
            if (Y > 0) {
                let X = J;
                for (let F = 0; F < Y; F++) W[F] = YY(this.tree, X), X += hU
            }
            return W1._free(J), W1._free(I), W
        }
        get nextSibling() {
            return C8(this), W1._ts_node_next_sibling_wasm(this.tree[0]), YY(this.tree)
        }
        get previousSibling() {
            return C8(this), W1._ts_node_prev_sibling_wasm(this.tree[0]), YY(this.tree)
        }
        get nextNamedSibling() {
            return C8(this), W1._ts_node_next_named_sibling_wasm(this.tree[0]), YY(this.tree)
        }
        get previousNamedSibling() {
            return C8(this), W1._ts_node_prev_named_sibling_wasm(this.tree[0]), YY(this.tree)
        }
        get descendantCount() {
            return C8(this), W1._ts_node_descendant_count_wasm(this.tree[0])
        }
        get parent() {
            return C8(this), W1._ts_node_parent_wasm(this.tree[0]), YY(this.tree)
        }
        childWithDescendant(A) {
            return C8(this), C8(A, 1), W1._ts_node_child_with_descendant_wasm(this.tree[0]), YY(this.tree)
        }
        descendantForIndex(A, Q = A) {
            if (typeof A !== "number" || typeof Q !== "number") throw Error("Arguments must be numbers");
            C8(this);
            let B = z2 + hU;
            return W1.setValue(B, A, "i32"), W1.setValue(B + u2, Q, "i32"), W1._ts_node_descendant_for_index_wasm(this.tree[0]), YY(this.tree)
        }
        namedDescendantForIndex(A, Q = A) {
            if (typeof A !== "number" || typeof Q !== "number") throw Error("Arguments must be numbers");
            C8(this);
            let B = z2 + hU;
            return W1.setValue(B, A, "i32"), W1.setValue(B + u2, Q, "i32"), W1._ts_node_named_descendant_for_index_wasm(this.tree[0]), YY(this.tree)
        }
        descendantForPosition(A, Q = A) {
            if (!ELA(A) || !ELA(Q)) throw Error("Arguments must be {row, column} objects");
            C8(this);
            let B = z2 + hU;
            return mM(B, A), mM(B + qk, Q), W1._ts_node_descendant_for_position_wasm(this.tree[0]), YY(this.tree)
        }
        namedDescendantForPosition(A, Q = A) {
            if (!ELA(A) || !ELA(Q)) throw Error("Arguments must be {row, column} objects");
            C8(this);
            let B = z2 + hU;
            return mM(B, A), mM(B + qk, Q), W1._ts_node_named_descendant_for_position_wasm(this.tree[0]), YY(this.tree)
        }
        walk() {
            return C8(this), W1._ts_tree_cursor_new_wasm(this.tree[0]), new x45(ll, this.tree)
        }
        edit(A) {
            if (this.startIndex >= A.oldEndIndex) {
                this.startIndex = A.newEndIndex + (this.startIndex - A.oldEndIndex);
                let Q, B;
                if (this.startPosition.row > A.oldEndPosition.row) Q = this.startPosition.row - A.oldEndPosition.row, B = this.startPosition.column;
                else if (Q = 0, B = this.startPosition.column, this.startPosition.column >= A.oldEndPosition.column) B = this.startPosition.column - A.oldEndPosition.column;
                if (Q > 0) this.startPosition.row += Q, this.startPosition.column = B;
                else this.startPosition.column += B
            } else if (this.startIndex > A.startIndex) this.startIndex = A.newEndIndex, this.startPosition.row = A.newEndPosition.row, this.startPosition.column = A.newEndPosition.column
        }
        toString() {
            C8(this);
            let A = W1._ts_node_to_string_wasm(this.tree[0]),
                Q = W1.AsciiToString(A);
            return W1._free(A), Q
        }
    };
    K0(bt1, "unmarshalCaptures");
    K0(C8, "marshalNode");
    K0(YY, "unmarshalNode");
    K0(JZ, "marshalTreeCursor");
    K0(Dq, "unmarshalTreeCursor");
    K0(mM, "marshalPoint");
    K0(mAA, "unmarshalPoint");
    K0(E22, "marshalRange");
    K0(JQ1, "unmarshalRange");
    K0(z22, "marshalEdit");
    K0(U22, "unmarshalLanguageMetadata");
    h45 = /[\w-]+/g, eqG = {
        Zero: 0,
        ZeroOrOne: 1,
        ZeroOrMore: 2,
        One: 3,
        OneOrMore: 4
    }, H22 = K0((A) => A.type === "capture", "isCaptureStep"), ht1 = K0((A) => A.type === "string", "isStringStep"), iT = {
        Syntax: 1,
        NodeName: 2,
        FieldName: 3,
        CaptureName: 4,
        PatternStructure: 5
    }, CLA = class A extends Error {
        constructor(Q, B, G, Z) {
            super(A.formatMessage(Q, B));
            this.kind = Q, this.info = B, this.index = G, this.length = Z, this.name = "QueryError"
        }
        static {
            K0(this, "QueryError")
        }
        static formatMessage(Q, B) {
            switch (Q) {
                case iT.NodeName:
                    return `Bad node name '${B.word}'`;
                case iT.FieldName:
                    return `Bad field name '${B.word}'`;
                case iT.CaptureName:
                    return `Bad capture name @${B.word}`;
                case iT.PatternStructure:
                    return `Bad pattern structure at offset ${B.suffix}`;
                case iT.Syntax:
                    return `Bad syntax at offset ${B.suffix}`
            }
        }
    };
    K0($22, "parseAnyPredicate");
    K0(w22, "parseMatchPredicate");
    K0(q22, "parseAnyOfPredicate");
    K0(N22, "parseIsPredicate");
    K0(L22, "parseSetDirective");
    K0(M22, "parsePattern");
    g45 = class {
        static {
            K0(this, "Query")
        } [0] = 0;
        exceededMatchLimit;
        textPredicates;
        captureNames;
        captureQuantifiers;
        predicates;
        setProperties;
        assertedProperties;
        refutedProperties;
        matchLimit;
        constructor(A, Q) {
            let B = W1.lengthBytesUTF8(Q),
                G = W1._malloc(B + 1);
            W1.stringToUTF8(Q, G, B + 1);
            let Z = W1._ts_query_new(A[0], G, B, z2, z2 + u2);
            if (!Z) {
                let E = W1.getValue(z2 + u2, "i32"),
                    z = W1.getValue(z2, "i32"),
                    w = W1.UTF8ToString(G, z).length,
                    N = Q.slice(w, w + 100).split(`
`)[0],
                    q = N.match(h45)?.[0] ?? "";
                switch (W1._free(G), E) {
                    case iT.Syntax:
                        throw new CLA(iT.Syntax, {
                            suffix: `${w}: '${N}'...`
                        }, w, 0);
                    case iT.NodeName:
                        throw new CLA(E, {
                            word: q
                        }, w, q.length);
                    case iT.FieldName:
                        throw new CLA(E, {
                            word: q
                        }, w, q.length);
                    case iT.CaptureName:
                        throw new CLA(E, {
                            word: q
                        }, w, q.length);
                    case iT.PatternStructure:
                        throw new CLA(E, {
                            suffix: `${w}: '${N}'...`
                        }, w, 0)
                }
            }
            let I = W1._ts_query_string_count(Z),
                Y = W1._ts_query_capture_count(Z),
                J = W1._ts_query_pattern_count(Z),
                W = Array(Y),
                X = Array(J),
                F = Array(I);
            for (let E = 0; E < Y; E++) {
                let z = W1._ts_query_capture_name_for_id(Z, E, z2),
                    w = W1.getValue(z2, "i32");
                W[E] = W1.UTF8ToString(z, w)
            }
            for (let E = 0; E < J; E++) {
                let z = Array(Y);
                for (let w = 0; w < Y; w++) {
                    let N = W1._ts_query_capture_quantifier_for_id(Z, E, w);
                    z[w] = N
                }
                X[E] = z
            }
            for (let E = 0; E < I; E++) {
                let z = W1._ts_query_string_value_for_id(Z, E, z2),
                    w = W1.getValue(z2, "i32");
                F[E] = W1.UTF8ToString(z, w)
            }
            let V = Array(J),
                K = Array(J),
                D = Array(J),
                H = Array(J),
                C = Array(J);
            for (let E = 0; E < J; E++) {
                let z = W1._ts_query_predicates_for_pattern(Z, E, z2),
                    w = W1.getValue(z2, "i32");
                H[E] = [], C[E] = [];
                let N = [],
                    q = z;
                for (let R = 0; R < w; R++) {
                    let P = W1.getValue(q, "i32");
                    q += u2;
                    let y = W1.getValue(q, "i32");
                    q += u2, M22(E, P, y, W, F, N, C, H, V, K, D)
                }
                Object.freeze(C[E]), Object.freeze(H[E]), Object.freeze(V[E]), Object.freeze(K[E]), Object.freeze(D[E])
            }
            W1._free(G), this[0] = Z, this.captureNames = W, this.captureQuantifiers = X, this.textPredicates = C, this.predicates = H, this.setProperties = V, this.assertedProperties = K, this.refutedProperties = D, this.exceededMatchLimit = !1
        }
        delete() {
            W1._ts_query_delete(this[0]), this[0] = 0
        }
        matches(A, Q = {}) {
            let B = Q.startPosition ?? pl,
                G = Q.endPosition ?? pl,
                Z = Q.startIndex ?? 0,
                I = Q.endIndex ?? 0,
                Y = Q.matchLimit ?? 4294967295,
                J = Q.maxStartDepth ?? 4294967295,
                W = Q.timeoutMicros ?? 0,
                X = Q.progressCallback;
            if (typeof Y !== "number") throw Error("Arguments must be numbers");
            if (this.matchLimit = Y, I !== 0 && Z > I) throw Error("`startIndex` cannot be greater than `endIndex`");
            if (G !== pl && (B.row > G.row || B.row === G.row && B.column > G.column)) throw Error("`startPosition` cannot be greater than `endPosition`");
            if (X) W1.currentQueryProgressCallback = X;
            C8(A), W1._ts_query_matches_wasm(this[0], A.tree[0], B.row, B.column, G.row, G.column, Z, I, Y, J, W);
            let F = W1.getValue(z2, "i32"),
                V = W1.getValue(z2 + u2, "i32"),
                K = W1.getValue(z2 + 2 * u2, "i32"),
                D = Array(F);
            this.exceededMatchLimit = Boolean(K);
            let H = 0,
                C = V;
            for (let E = 0; E < F; E++) {
                let z = W1.getValue(C, "i32");
                C += u2;
                let w = W1.getValue(C, "i32");
                C += u2;
                let N = Array(w);
                if (C = bt1(this, A.tree, C, z, N), this.textPredicates[z].every((q) => q(N))) {
                    D[H] = {
                        pattern: z,
                        patternIndex: z,
                        captures: N
                    };
                    let q = this.setProperties[z];
                    D[H].setProperties = q;
                    let R = this.assertedProperties[z];
                    D[H].assertedProperties = R;
                    let P = this.refutedProperties[z];
                    D[H].refutedProperties = P, H++
                }
            }
            return D.length = H, W1._free(V), W1.currentQueryProgressCallback = null, D
        }
        captures(A, Q = {}) {
            let B = Q.startPosition ?? pl,
                G = Q.endPosition ?? pl,
                Z = Q.startIndex ?? 0,
                I = Q.endIndex ?? 0,
                Y = Q.matchLimit ?? 4294967295,
                J = Q.maxStartDepth ?? 4294967295,
                W = Q.timeoutMicros ?? 0,
                X = Q.progressCallback;
            if (typeof Y !== "number") throw Error("Arguments must be numbers");
            if (this.matchLimit = Y, I !== 0 && Z > I) throw Error("`startIndex` cannot be greater than `endIndex`");
            if (G !== pl && (B.row > G.row || B.row === G.row && B.column > G.column)) throw Error("`startPosition` cannot be greater than `endPosition`");
            if (X) W1.currentQueryProgressCallback = X;
            C8(A), W1._ts_query_captures_wasm(this[0], A.tree[0], B.row, B.column, G.row, G.column, Z, I, Y, J, W);
            let F = W1.getValue(z2, "i32"),
                V = W1.getValue(z2 + u2, "i32"),
                K = W1.getValue(z2 + 2 * u2, "i32"),
                D = [];
            this.exceededMatchLimit = Boolean(K);
            let H = [],
                C = V;
            for (let E = 0; E < F; E++) {
                let z = W1.getValue(C, "i32");
                C += u2;
                let w = W1.getValue(C, "i32");
                C += u2;
                let N = W1.getValue(C, "i32");
                if (C += u2, H.length = w, C = bt1(this, A.tree, C, z, H), this.textPredicates[z].every((q) => q(H))) {
                    let q = H[N],
                        R = this.setProperties[z];
                    q.setProperties = R;
                    let P = this.assertedProperties[z];
                    q.assertedProperties = P;
                    let y = this.refutedProperties[z];
                    q.refutedProperties = y, D.push(q)
                }
            }
            return W1._free(V), W1.currentQueryProgressCallback = null, D
        }
        predicatesForPattern(A) {
            return this.predicates[A]
        }
        disableCapture(A) {
            let Q = W1.lengthBytesUTF8(A),
                B = W1._malloc(Q + 1);
            W1.stringToUTF8(A, B, Q + 1), W1._ts_query_disable_capture(this[0], B, Q), W1._free(B)
        }
        disablePattern(A) {
            if (A >= this.predicates.length) throw Error(`Pattern index is ${A} but the pattern count is ${this.predicates.length}`);
            W1._ts_query_disable_pattern(this[0], A)
        }
        didExceedMatchLimit() {
            return this.exceededMatchLimit
        }
        startIndexForPattern(A) {
            if (A >= this.predicates.length) throw Error(`Pattern index is ${A} but the pattern count is ${this.predicates.length}`);
            return W1._ts_query_start_byte_for_pattern(this[0], A)
        }
        endIndexForPattern(A) {
            if (A >= this.predicates.length) throw Error(`Pattern index is ${A} but the pattern count is ${this.predicates.length}`);
            return W1._ts_query_end_byte_for_pattern(this[0], A)
        }
        patternCount() {
            return W1._ts_query_pattern_count(this[0])
        }
        captureIndexForName(A) {
            return this.captureNames.indexOf(A)
        }
        isPatternRooted(A) {
            return W1._ts_query_is_pattern_rooted(this[0], A) === 1
        }
        isPatternNonLocal(A) {
            return W1._ts_query_is_pattern_non_local(this[0], A) === 1
        }
        isPatternGuaranteedAtStep(A) {
            return W1._ts_query_is_pattern_guaranteed_at_step(this[0], A) === 1
        }
    }, u45 = /^tree_sitter_\w+$/, gt1 = class A {
        static {
            K0(this, "Language")
        } [0] = 0;
        types;
        fields;
        constructor(Q, B) {
            qIA(Q), this[0] = B, this.types = Array(W1._ts_language_symbol_count(this[0]));
            for (let G = 0, Z = this.types.length; G < Z; G++)
                if (W1._ts_language_symbol_type(this[0], G) < 2) this.types[G] = W1.UTF8ToString(W1._ts_language_symbol_name(this[0], G));
            this.fields = Array(W1._ts_language_field_count(this[0]) + 1);
            for (let G = 0, Z = this.fields.length; G < Z; G++) {
                let I = W1._ts_language_field_name_for_id(this[0], G);
                if (I !== 0) this.fields[G] = W1.UTF8ToString(I);
                else this.fields[G] = null
            }
        }
        get name() {
            let Q = W1._ts_language_name(this[0]);
            if (Q === 0) return null;
            return W1.UTF8ToString(Q)
        }
        get version() {
            return W1._ts_language_version(this[0])
        }
        get abiVersion() {
            return W1._ts_language_abi_version(this[0])
        }
        get metadata() {
            W1._ts_language_metadata(this[0]);
            let Q = W1.getValue(z2, "i32"),
                B = W1.getValue(z2 + u2, "i32");
            if (Q === 0) return null;
            return U22(B)
        }
        get fieldCount() {
            return this.fields.length - 1
        }
        get stateCount() {
            return W1._ts_language_state_count(this[0])
        }
        fieldIdForName(Q) {
            let B = this.fields.indexOf(Q);
            return B !== -1 ? B : null
        }
        fieldNameForId(Q) {
            return this.fields[Q] ?? null
        }
        idForNodeType(Q, B) {
            let G = W1.lengthBytesUTF8(Q),
                Z = W1._malloc(G + 1);
            W1.stringToUTF8(Q, Z, G + 1);
            let I = W1._ts_language_symbol_for_name(this[0], Z, G, B ? 1 : 0);
            return W1._free(Z), I || null
        }
        get nodeTypeCount() {
            return W1._ts_language_symbol_count(this[0])
        }
        nodeTypeForId(Q) {
            let B = W1._ts_language_symbol_name(this[0], Q);
            return B ? W1.UTF8ToString(B) : null
        }
        nodeTypeIsNamed(Q) {
            return W1._ts_language_type_is_named_wasm(this[0], Q) ? !0 : !1
        }
        nodeTypeIsVisible(Q) {
            return W1._ts_language_type_is_visible_wasm(this[0], Q) ? !0 : !1
        }
        get supertypes() {
            W1._ts_language_supertypes_wasm(this[0]);
            let Q = W1.getValue(z2, "i32"),
                B = W1.getValue(z2 + u2, "i32"),
                G = Array(Q);
            if (Q > 0) {
                let Z = B;
                for (let I = 0; I < Q; I++) G[I] = W1.getValue(Z, "i16"), Z += D22
            }
            return G
        }
        subtypes(Q) {
            W1._ts_language_subtypes_wasm(this[0], Q);
            let B = W1.getValue(z2, "i32"),
                G = W1.getValue(z2 + u2, "i32"),
                Z = Array(B);
            if (B > 0) {
                let I = G;
                for (let Y = 0; Y < B; Y++) Z[Y] = W1.getValue(I, "i16"), I += D22
            }
            return Z
        }
        nextState(Q, B) {
            return W1._ts_language_next_state(this[0], Q, B)
        }
        lookaheadIterator(Q) {
            let B = W1._ts_lookahead_iterator_new(this[0], Q);
            if (B) return new k45(ll, B, this);
            return null
        }
        query(Q) {
            return console.warn("Language.query is deprecated. Use new Query(language, source) instead."), new g45(this, Q)
        }
        static async load(Q) {
            let B;
            if (Q instanceof Uint8Array) B = Promise.resolve(Q);
            else if (globalThis.process?.versions.node) B = (await import("fs/promises")).readFile(Q);
            else B = fetch(Q).then((J) => J.arrayBuffer().then((W) => {
                if (J.ok) return new Uint8Array(W);
                else {
                    let X = new TextDecoder("utf-8").decode(W);
                    throw Error(`Language.load failed with status ${J.status}.

${X}`)
                }
            }));