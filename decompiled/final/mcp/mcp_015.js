/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_015.js
 * 处理时间: 2025-12-09T03:41:37.916Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * GA       (  1x) esmImport(module) - ESM import
 * V0       (  1x) parseBoolean(value) - Parse bool env
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 15/29
 * Lines: 289979 - 291478 (1500 lines)
 * Original file: cli.js
 */

    g(`Hooks: Registering async hook ${A} (${B}) with timeout ${J}ms`), Ch.set(A, {
        processId: A,
        hookName: B,
        hookEvent: G,
        toolName: Y,
        command: Z,
        startTime: Date.now(),
        timeout: J,
        stdout: "",
        stderr: "",
        responseAttachmentSent: !1,
        shellCommand: I
    })
}

function dG2(A, Q) {
    let B = Ch.get(A);
    if (B) g(`Hooks: Adding stdout to ${A}: ${Q.substring(0,50)}...`), B.stdout += Q;
    else g(`Hooks: Attempted to add output to unknown process ${A}`)
}

function cG2(A, Q) {
    let B = Ch.get(A);
    if (B) g(`Hooks: Adding stderr to ${A}: ${Q.substring(0,50)}...`), B.stderr += Q;
    else g(`Hooks: Attempted to add stderr to unknown process ${A}`)
}
async function pG2() {
    let A = [],
        Q = Ch.size;
    g(`Hooks: Found ${Q} total hooks in registry`);
    let B = [];
    for (let G of Ch.values()) {
        if (g(`Hooks: Checking hook ${G.processId} (${G.hookName}) - attachmentSent: ${G.responseAttachmentSent}, stdout length: ${G.stdout.length}`), !G.shellCommand) {
            g(`Hooks: Hook ${G.processId} has no shell command, removing from registry`), B.push(G.processId);
            continue
        }
        if (g(`Hooks: Hook shell status ${G.shellCommand.status}`), G.shellCommand.status === "killed") {
            g(`Hooks: Hook ${G.processId} is ${G.shellCommand.status}, removing from registry`), B.push(G.processId);
            continue
        }
        if (G.shellCommand.status !== "completed") continue;
        if (G.responseAttachmentSent || !G.stdout.trim()) {
            g(`Hooks: Skipping hook ${G.processId} - already delivered/sent or no stdout`), B.push(G.processId);
            continue
        }
        let Z = G.stdout.split(`
`);
        g(`Hooks: Processing ${Z.length} lines of stdout for ${G.processId}`);
        let Y = (await G.shellCommand.result).code,
            J = {};
        for (let W of Z)
            if (W.trim().startsWith("{")) {
                g(`Hooks: Found JSON line: ${W.trim().substring(0,100)}...`);
                try {
                    let X = JSON.parse(W.trim());
                    if (!("async" in X)) {
                        g(`Hooks: Found sync response from ${G.processId}: ${JSON.stringify(X)}`), J = X;
                        break
                    }
                } catch {
                    g(`Hooks: Failed to parse JSON from ${G.processId}: ${W.trim()}`)
                }
            } if (A.push({
                processId: G.processId,
                response: J,
                hookName: G.hookName,
                hookEvent: G.hookEvent,
                toolName: G.toolName,
                stdout: G.stdout,
                stderr: G.stderr,
                exitCode: Y
            }), G.responseAttachmentSent = !0, Ch.delete(G.processId), G.hookEvent === "SessionStart") g(`Invalidating session env cache after SessionStart hook ${G.processId} completed`), STB()
    }
    for (let G of B) Ch.delete(G);
    return g(`Hooks: checkForNewResponses returning ${A.length} responses`), A
}

function lG2(A) {
    for (let Q of A) {
        let B = Ch.get(Q);
        if (B && B.responseAttachmentSent) g(`Hooks: Removing delivered hook ${Q}`), Ch.delete(Q)
    }
}
var Ch;
var s10 = L(() => {
    D0();
    m$A();
    Ch = new Map
});
import {
    join as S21
} from "path";

function r10() {
    let A = S21(PQ(), "todos");
    if (!OA().existsSync(A)) OA().mkdirSync(A);
    return A
}

function Ci(A) {
    let Q = `${G0()}-agent-${A}.json`;
    return S21(r10(), Q)
}

function Eh(A) {
    return iG2(Ci(A))
}

function GYA(A, Q) {
    nG2(A, Ci(Q))
}

function _21(A) {
    if (A.messages.length > 0) {
        let Q = A.messages[0];
        if (Q && "sessionId" in Q) XF5(Q.sessionId, G0())
    }
}

function XF5(A, Q) {
    let B = S21(r10(), `${A}-agent-${A}.json`),
        G = S21(r10(), `${Q}-agent-${Q}.json`);
    try {
        let Z = iG2(B);
        if (Z.length === 0) return !1;
        return nG2(Z, G), !0
    } catch (Z) {
        return e(Z instanceof Error ? Z : Error(String(Z))), !1
    }
}

function iG2(A) {
    if (!OA().existsSync(A)) return [];
    try {
        let Q = JSON.parse(OA().readFileSync(A, {
            encoding: "utf-8"
        }));
        return Z7A.parse(Q)
    } catch (Q) {
        return e(Q instanceof Error ? Q : Error(String(Q))), []
    }
}

function nG2(A, Q) {
    try {
        J_(Q, JSON.stringify(A, null, 2))
    } catch (B) {
        e(B instanceof Error ? B : Error(String(B)))
    }
}
var Ei = L(() => {
    M9();
    S0();
    o0();
    hQ();
    u1();
    wf1()
});

function yF(A) {
    let Q = /^---\s*\n([\s\S]*?)---\s*\n?/,
        B = A.match(Q);
    if (!B) return {
        frontmatter: {},
        content: A
    };
    let G = B[1] || "",
        Z = A.slice(B[0].length),
        I = {},
        Y = G.split(`
`);
    for (let J of Y) {
        let W = J.indexOf(":");
        if (W > 0) {
            let X = J.slice(0, W).trim(),
                F = J.slice(W + 1).trim();
            if (X) {
                let V = F.replace(/^["']|["']$/g, "");
                I[X] = V
            }
        }
    }
    return {
        frontmatter: I,
        content: Z
    }
}

function aG2(A) {
    let Q = [],
        B = "",
        G = 0;
    for (let I = 0; I < A.length; I++) {
        let Y = A[I];
        if (Y === "{") G++, B += Y;
        else if (Y === "}") G--, B += Y;
        else if (Y === "," && G === 0) {
            let J = B.trim();
            if (J) Q.push(J);
            B = ""
        } else B += Y
    }
    let Z = B.trim();
    if (Z) Q.push(Z);
    return Q.filter((I) => I.length > 0).flatMap((I) => sG2(I))
}

function sG2(A) {
    let Q = A.match(/^([^{]*)\{([^}]+)\}(.*)$/);
    if (!Q) return [A];
    let B = Q[1] || "",
        G = Q[2] || "",
        Z = Q[3] || "",
        I = G.split(",").map((J) => J.trim()),
        Y = [];
    for (let J of I) {
        let W = B + J + Z,
            X = sG2(W);
        Y.push(...X)
    }
    return Y
}
import {
    join as xk,
    parse as o10,
    dirname as K1A,
    resolve as FF5,
    relative as VF5,
    isAbsolute as KF5
} from "path";

function oG2(A) {
    return bk(A, pQ())
}

function HF5(A) {
    let {
        frontmatter: Q,
        content: B
    } = yF(A);
    if (!Q.paths) return {
        content: B
    };
    let G = aG2(Q.paths).map((Z) => {
        return Z.endsWith("/**") ? Z.slice(0, -3) : Z
    }).filter((Z) => Z.length > 0);
    if (G.length === 0 || G.every((Z) => Z === "**")) return {
        content: B
    };
    return {
        content: B,
        paths: G
    }
}

function tG2(A, Q) {
    try {
        if (OA().existsSync(A)) {
            if (!OA().statSync(A).isFile()) return null;
            let G = OA().readFileSync(A, {
                    encoding: "utf-8"
                }),
                {
                    content: Z,
                    paths: I
                } = HF5(G);
            return {
                path: A,
                type: Q,
                content: Z,
                globs: I
            }
        }
    } catch (B) {
        if (B instanceof Error && B.message.includes("EACCES")) BA("tengu_claude_md_permission_error", {
            is_access_error: 1,
            has_home_dir: A.includes(PQ()) ? 1 : 0
        })
    }
    return null
}

function CF5(A, Q) {
    let B = new Set,
        Z = new bE().lex(A);

    function I(Y) {
        for (let J of Y) {
            if (J.type === "code" || J.type === "codespan") continue;
            if (J.type === "text") {
                let W = J.text || "",
                    X = /(?:^|\s)@((?:[^\s\\]|\\ )+)/g,
                    F;
                while ((F = X.exec(W)) !== null) {
                    let V = F[1];
                    if (!V) continue;
                    if (V = V.replace(/\\ /g, " "), V) {
                        if (V.startsWith("./") || V.startsWith("~/") || V.startsWith("/") && V !== "/" || !V.startsWith("@") && !V.match(/^[#%^&*()]+/) && V.match(/^[a-zA-Z0-9._-]/)) {
                            let D = b9(V, K1A(Q));
                            B.add(D)
                        }
                    }
                }
            }
            if (J.tokens) I(J.tokens);
            if (J.items) I(J.items)
        }
    }
    return I(Z), [...B]
}

function vk(A, Q, B, G, Z = 0, I) {
    if (B.has(A) || Z >= EF5) return [];
    let Y = tG2(A, Q);
    if (!Y || !Y.content.trim()) return [];
    if (I) Y.parent = I;
    B.add(A);
    let J = [];
    J.push(Y);
    let {
        resolvedPath: W
    } = kK(OA(), A);
    if (W !== A) B.add(W);
    let X = CF5(Y.content, W);
    for (let F of X) {
        if (!oG2(F) && !G) continue;
        let K = vk(F, Q, B, G, Z + 1, A);
        J.push(...K)
    }
    return J
}

function ZYA({
    rulesDir: A,
    type: Q,
    processedPaths: B,
    includeExternal: G,
    conditionalRule: Z,
    visitedDirs: I = new Set
}) {
    let Y = [];
    if (!V0(process.env.CLAUDE_CODE_ENABLE_PROCESS_CLAUDE_RULES)) return Y;
    try {
        if (!OA().existsSync(A)) return Y;
        if (!OA().statSync(A).isDirectory()) return Y;
        let X;
        try {
            X = OA().realpathSync(A)
        } catch {
            X = A
        }
        if (I.has(X)) return Y;
        I.add(X);
        let F = OA().readdirSync(A);
        for (let V of F) {
            let K = V.name,
                D = xk(A, K);
            if (V.isDirectory()) {
                let H = ZYA({
                    rulesDir: D,
                    type: Q,
                    processedPaths: B,
                    includeExternal: G,
                    conditionalRule: Z,
                    visitedDirs: I
                });
                Y.push(...H)
            } else if (V.isFile() && K.endsWith(".md")) {
                let H = vk(D, Q, B, G);
                if (Z) {
                    let C = H.filter((E) => E.globs);
                    Y.push(...C)
                } else {
                    let C = H.filter((E) => !E.globs);
                    Y.push(...C)
                }
            }
        }
    } catch (W) {
        if (W instanceof Error && W.message.includes("EACCES")) BA("tengu_claude_rules_md_permission_error", {
            is_access_error: 1,
            has_home_dir: A.includes(PQ()) ? 1 : 0
        })
    }
    return Y
}

function D1A() {
    return xF().filter((A) => A.content.length > zh)
}

function H1A() {
    return null
}

function t10() {
    return []
}

function AZ2(A, Q) {
    let B = [];
    if (!qT(A, Q)) return B;
    let G = new Set,
        Z = pQ(),
        I = Gx1();
    if (B.push(...k21(A, I, "Managed", G, !1)), DH("userSettings")) {
        let X = Zx1();
        B.push(...k21(A, X, "User", G, !0))
    }
    let Y = K1A(FF5(A)),
        J = [],
        W = Y;
    while (W !== Z && W !== o10(W).root) {
        if (W.startsWith(Z)) J.push(W);
        W = K1A(W)
    }
    for (let X of J.reverse()) {
        if (DH("projectSettings")) {
            let K = xk(X, "CLAUDE.md");
            B.push(...vk(K, "Project", G, !1));
            let D = xk(X, ".claude", "CLAUDE.md");
            B.push(...vk(D, "Project", G, !1))
        }
        if (DH("localSettings")) {
            let K = xk(X, "CLAUDE.local.md");
            B.push(...vk(K, "Local", G, !1))
        }
        let F = xk(X, ".claude", "rules"),
            V = new Set(G);
        B.push(...ZYA({
            rulesDir: F,
            type: "Project",
            processedPaths: V,
            includeExternal: !1,
            conditionalRule: !1
        })), B.push(...k21(A, F, "Project", G, !1));
        for (let K of V) G.add(K)
    }
    J.length = 0, W = pQ();
    while (W !== o10(W).root) J.push(W), W = K1A(W);
    for (let X of J.reverse()) {
        let F = xk(X, ".claude", "rules");
        B.push(...k21(A, F, "Project", G, !1))
    }
    return B
}

function k21(A, Q, B, G, Z) {
    return ZYA({
        rulesDir: Q,
        type: B,
        processedPaths: G,
        includeExternal: Z,
        conditionalRule: !0
    }).filter((Y) => {
        if (!Y.globs || Y.globs.length === 0) return !1;
        let J = B === "Project" ? K1A(K1A(Q)) : pQ(),
            W = KF5(A) ? VF5(J, A) : A;
        return rG2.default().add(Y.globs).ignores(W)
    })
}

function e10() {
    for (let A of xF(!0))
        if (A.type !== "User" && A.parent && !oG2(A.path)) return !0;
    return !1
}
async function QZ2() {
    let A = M5();
    if (A.hasClaudeMdExternalIncludesApproved || A.hasClaudeMdExternalIncludesWarningShown) return !1;
    return e10()
}
var rG2, DF5 = "Codebase and user instructions are shown below. Be sure to adhere to these instructions. IMPORTANT: These instructions OVERRIDE any default behavior and you MUST follow them exactly as written.",
    zh = 40000,
    IYA = 3000,
    EF5 = 5,
    xF, eG2 = () => {
        let A = xF(),
            Q = [];
        for (let B of A)
            if (B.content) {
                let G = B.type === "Project" ? " (project instructions, checked into the codebase)" : B.type === "Local" ? " (user's private project instructions, not checked in)" : " (user's private global instructions for all projects)";
                Q.push(`Contents of ${B.path}${G}:

${B.content}`)
            } if (Q.length === 0) return "";
        return `${DF5}

${Q.join(`

`)}`
    };
var uE = L(() => {
    o2();
    S0();
    o0();
    jI();
    O9();
    w0();
    J10();
    UF();
    _Y();
    jQ();
    hQ();
    rG2 = GA(clA(), 1);
    xF = t1((A = !1) => {
        let Q = [],
            B = new Set,
            G = M5(),
            Z = A || G.hasClaudeMdExternalIncludesApproved || !1,
            I = xo("Managed");
        Q.push(...vk(I, "Managed", B, Z));
        let Y = Gx1();
        if (Q.push(...ZYA({
                rulesDir: Y,
                type: "Managed",
                processedPaths: B,
                includeExternal: Z,
                conditionalRule: !1
            })), DH("userSettings")) {
            let X = xo("User");
            Q.push(...vk(X, "User", B, !0));
            let F = Zx1();
            Q.push(...ZYA({
                rulesDir: F,
                type: "User",
                processedPaths: B,
                includeExternal: !0,
                conditionalRule: !1
            }))
        }
        let J = [],
            W = pQ();
        while (W !== o10(W).root) J.push(W), W = K1A(W);
        for (let X of J.reverse()) {
            if (DH("projectSettings")) {
                let F = xk(X, "CLAUDE.md");
                Q.push(...vk(F, "Project", B, Z));
                let V = xk(X, ".claude", "CLAUDE.md");
                Q.push(...vk(V, "Project", B, Z));
                let K = xk(X, ".claude", "rules");
                Q.push(...ZYA({
                    rulesDir: K,
                    type: "Project",
                    processedPaths: B,
                    includeExternal: Z,
                    conditionalRule: !1
                }))
            }
            if (DH("localSettings")) {
                let F = xk(X, "CLAUDE.local.md");
                Q.push(...vk(F, "Local", B, Z))
            }
        }
        return Q
    })
});
class QP {
    static instance;
    baseline = new Map;
    initialized = !1;
    mcpClient;
    lastProcessedTimestamps = new Map;
    rightFileDiagnosticsState = new Map;
    static getInstance() {
        if (!QP.instance) QP.instance = new QP;
        return QP.instance
    }
    initialize(A) {
        if (this.initialized) return;
        this.mcpClient = A, this.initialized = !0
    }
    async shutdown() {
        this.initialized = !1, this.baseline.clear()
    }
    reset() {
        this.baseline.clear(), this.rightFileDiagnosticsState.clear()
    }
    normalizeFileUri(A) {
        let Q = ["file://", "_claude_fs_right:", "_claude_fs_left:"];
        for (let B of Q)
            if (A.startsWith(B)) return A.slice(B.length);
        return A
    }
    async ensureFileOpened(A) {
        if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return;
        try {
            await Wh("openFile", {
                filePath: A,
                preview: !1,
                startText: "",
                endText: "",
                selectToEndOfLine: !1,
                makeFrontmost: !1
            }, this.mcpClient)
        } catch (Q) {
            e(Q)
        }
    }
    async beforeFileEdited(A) {
        if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return;
        let Q = Date.now();
        try {
            let B = await Wh("getDiagnostics", {
                    uri: `file://${A}`
                }, this.mcpClient),
                G = this.parseDiagnosticResult(B)[0];
            if (G) {
                if (A !== this.normalizeFileUri(G.uri)) {
                    e(new BZ2(`Diagnostics file path mismatch: expected ${A}, got ${G.uri})`));
                    return
                }
                this.baseline.set(A, G.diagnostics), this.lastProcessedTimestamps.set(A, Q)
            } else this.baseline.set(A, []), this.lastProcessedTimestamps.set(A, Q)
        } catch (B) {}
    }
    async getNewDiagnostics() {
        if (!this.initialized || !this.mcpClient || this.mcpClient.type !== "connected") return [];
        let A = [];
        try {
            let Z = await Wh("getDiagnostics", {}, this.mcpClient);
            A = this.parseDiagnosticResult(Z)
        } catch (Z) {
            return []
        }
        let Q = A.filter((Z) => this.baseline.has(this.normalizeFileUri(Z.uri))).filter((Z) => Z.uri.startsWith("file://")),
            B = new Map;
        A.filter((Z) => this.baseline.has(this.normalizeFileUri(Z.uri))).filter((Z) => Z.uri.startsWith("_claude_fs_right:")).forEach((Z) => {
            B.set(this.normalizeFileUri(Z.uri), Z)
        });
        let G = [];
        for (let Z of Q) {
            let I = this.normalizeFileUri(Z.uri),
                Y = this.baseline.get(I) || [],
                J = B.get(I),
                W = Z;
            if (J) {
                let F = this.rightFileDiagnosticsState.get(I);
                if (!F || !this.areDiagnosticArraysEqual(F, J.diagnostics)) W = J;
                this.rightFileDiagnosticsState.set(I, J.diagnostics)
            }
            let X = W.diagnostics.filter((F) => !Y.some((V) => this.areDiagnosticsEqual(F, V)));
            if (X.length > 0) G.push({
                uri: Z.uri,
                diagnostics: X
            });
            this.baseline.set(I, W.diagnostics)
        }
        return G
    }
    parseDiagnosticResult(A) {
        if (Array.isArray(A)) {
            let Q = A.find((B) => B.type === "text");
            if (Q && "text" in Q) return JSON.parse(Q.text)
        }
        return []
    }
    areDiagnosticsEqual(A, Q) {
        return A.message === Q.message && A.severity === Q.severity && A.source === Q.source && A.code === Q.code && A.range.start.line === Q.range.start.line && A.range.start.character === Q.range.start.character && A.range.end.line === Q.range.end.line && A.range.end.character === Q.range.end.character
    }
    areDiagnosticArraysEqual(A, Q) {
        if (A.length !== Q.length) return !1;
        return A.every((B) => Q.some((G) => this.areDiagnosticsEqual(B, G))) && Q.every((B) => A.some((G) => this.areDiagnosticsEqual(G, B)))
    }
    isLinterDiagnostic(A) {
        let Q = ["eslint", "eslint-plugin", "tslint", "prettier", "stylelint", "jshint", "standardjs", "xo", "rome", "biome", "deno-lint", "rubocop", "pylint", "flake8", "black", "ruff", "clippy", "rustfmt", "golangci-lint", "gofmt", "swiftlint", "detekt", "ktlint", "checkstyle", "pmd", "sonarqube", "sonarjs"];
        if (!A.source) return !1;
        let B = A.source.toLowerCase();
        return Q.some((G) => B.includes(G))
    }
    async handleQueryStart(A) {
        if (!this.initialized) {
            let Q = cU(A);
            if (Q) this.initialize(Q)
        } else this.reset()
    }
    static formatDiagnosticsSummary(A) {
        return A.map((Q) => {
            let B = Q.uri.split("/").pop() || Q.uri,
                G = Q.diagnostics.map((Z) => {
                    return `  ${QP.getSeveritySymbol(Z.severity)} [Line ${Z.range.start.line+1}:${Z.range.start.character+1}] ${Z.message}${Z.code?` [${Z.code}]`:""}${Z.source?` (${Z.source})`:""}`
                }).join(`
`);
            return `${B}:
${G}`
        }).join(`

`)
    }
    static getSeveritySymbol(A) {
        return {
            Error: V1.cross,
            Warning: V1.warning,
            Info: V1.info,
            Hint: V1.star
        } [A] || V1.bullet
    }
}
var BZ2, Uh;
var C1A = L(() => {
    Tk();
    yJ();
    u1();
    $Z();
    n2();
    BZ2 = class BZ2 extends _KA {};
    Uh = QP.getInstance()
});

function BP() {}

function GZ2(A, Q, B, G, Z) {
    var I = [],
        Y;
    while (Q) I.push(Q), Y = Q.previousComponent, delete Q.previousComponent, Q = Y;
    I.reverse();
    var J = 0,
        W = I.length,
        X = 0,
        F = 0;
    for (; J < W; J++) {
        var V = I[J];
        if (!V.removed) {
            if (!V.added && Z) {
                var K = B.slice(X, X + V.count);
                K = K.map(function(D, H) {
                    var C = G[F + H];
                    return C.length > D.length ? C : D
                }), V.value = A.join(K)
            } else V.value = A.join(B.slice(X, X + V.count));
            if (X += V.count, !V.added) F += V.count
        } else V.value = A.join(G.slice(F, F + V.count)), F += V.count
    }
    return I
}

function ZZ2(A, Q) {
    var B;
    for (B = 0; B < A.length && B < Q.length; B++)
        if (A[B] != Q[B]) return A.slice(0, B);
    return A.slice(0, B)
}

function IZ2(A, Q) {
    var B;
    if (!A || !Q || A[A.length - 1] != Q[Q.length - 1]) return "";
    for (B = 0; B < A.length && B < Q.length; B++)
        if (A[A.length - (B + 1)] != Q[Q.length - (B + 1)]) return A.slice(-B);
    return A.slice(-B)
}

function Q00(A, Q, B) {
    if (A.slice(0, Q.length) != Q) throw Error("string ".concat(JSON.stringify(A), " doesn't start with prefix ").concat(JSON.stringify(Q), "; this is a bug"));
    return B + A.slice(Q.length)
}

function B00(A, Q, B) {
    if (!Q) return A + B;
    if (A.slice(-Q.length) != Q) throw Error("string ".concat(JSON.stringify(A), " doesn't end with suffix ").concat(JSON.stringify(Q), "; this is a bug"));
    return A.slice(0, -Q.length) + B
}

function HMA(A, Q) {
    return Q00(A, Q, "")
}

function y21(A, Q) {
    return B00(A, Q, "")
}

function YZ2(A, Q) {
    return Q.slice(0, zF5(A, Q))
}

function zF5(A, Q) {
    var B = 0;
    if (A.length > Q.length) B = A.length - Q.length;
    var G = Q.length;
    if (A.length < Q.length) G = A.length;
    var Z = Array(G),
        I = 0;
    Z[0] = 0;
    for (var Y = 1; Y < G; Y++) {
        if (Q[Y] == Q[I]) Z[Y] = Z[I];
        else Z[Y] = I;
        while (I > 0 && Q[Y] != Q[I]) I = Z[I];
        if (Q[Y] == Q[I]) I++
    }
    I = 0;
    for (var J = B; J < A.length; J++) {
        while (I > 0 && A[J] != Q[I]) I = Z[I];
        if (A[J] == Q[I]) I++
    }
    return I
}

function JZ2(A, Q, B, G) {
    if (Q && B) {
        var Z = Q.value.match(/^\s*/)[0],
            I = Q.value.match(/\s*$/)[0],
            Y = B.value.match(/^\s*/)[0],
            J = B.value.match(/\s*$/)[0];
        if (A) {
            var W = ZZ2(Z, Y);
            A.value = B00(A.value, Y, W), Q.value = HMA(Q.value, W), B.value = HMA(B.value, W)
        }
        if (G) {
            var X = IZ2(I, J);
            G.value = Q00(G.value, J, X), Q.value = y21(Q.value, X), B.value = y21(B.value, X)
        }
    } else if (B) {
        if (A) B.value = B.value.replace(/^\s*/, "");
        if (G) G.value = G.value.replace(/^\s*/, "")
    } else if (A && G) {
        var F = G.value.match(/^\s*/)[0],
            V = Q.value.match(/^\s*/)[0],
            K = Q.value.match(/\s*$/)[0],
            D = ZZ2(F, V);
        Q.value = HMA(Q.value, D);
        var H = IZ2(HMA(F, D), K);
        Q.value = y21(Q.value, H), G.value = Q00(G.value, F, H), A.value = B00(A.value, F, F.slice(0, F.length - H.length))
    } else if (G) {
        var C = G.value.match(/^\s*/)[0],
            E = Q.value.match(/\s*$/)[0],
            z = YZ2(E, C);
        Q.value = y21(Q.value, z)
    } else if (A) {
        var w = A.value.match(/\s*$/)[0],
            N = Q.value.match(/^\s*/)[0],
            q = YZ2(w, N);
        Q.value = HMA(Q.value, q)
    }
}

function VZ2(A, Q, B) {
    return FZ2.diff(A, Q, B)
}

function v21(A, Q, B) {
    return f21.diff(A, Q, B)
}

function WZ2(A, Q) {
    var B = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
        var G = Object.getOwnPropertySymbols(A);
        Q && (G = G.filter(function(Z) {
            return Object.getOwnPropertyDescriptor(A, Z).enumerable
        })), B.push.apply(B, G)
    }
    return B
}

function XZ2(A) {
    for (var Q = 1; Q < arguments.length; Q++) {
        var B = arguments[Q] != null ? arguments[Q] : {};
        Q % 2 ? WZ2(Object(B), !0).forEach(function(G) {
            LF5(A, G, B[G])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(B)) : WZ2(Object(B)).forEach(function(G) {
            Object.defineProperty(A, G, Object.getOwnPropertyDescriptor(B, G))
        })
    }
    return A
}

function qF5(A, Q) {
    if (typeof A != "object" || !A) return A;
    var B = A[Symbol.toPrimitive];
    if (B !== void 0) {
        var G = B.call(A, Q || "default");
        if (typeof G != "object") return G;
        throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return (Q === "string" ? String : Number)(A)
}

function NF5(A) {
    var Q = qF5(A, "string");
    return typeof Q == "symbol" ? Q : Q + ""
}

function G00(A) {
    return G00 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(Q) {
        return typeof Q
    } : function(Q) {
        return Q && typeof Symbol == "function" && Q.constructor === Symbol && Q !== Symbol.prototype ? "symbol" : typeof Q
    }, G00(A)
}

function LF5(A, Q, B) {
    if (Q = NF5(Q), Q in A) Object.defineProperty(A, Q, {
        value: B,
        enumerable: !0,
        configurable: !0,
        writable: !0
    });
    else A[Q] = B;
    return A
}

function A00(A) {
    return MF5(A) || OF5(A) || RF5(A) || TF5()
}

function MF5(A) {
    if (Array.isArray(A)) return Z00(A)
}

function OF5(A) {
    if (typeof Symbol < "u" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A)
}

function RF5(A, Q) {
    if (!A) return;
    if (typeof A === "string") return Z00(A, Q);
    var B = Object.prototype.toString.call(A).slice(8, -1);
    if (B === "Object" && A.constructor) B = A.constructor.name;
    if (B === "Map" || B === "Set") return Array.from(A);
    if (B === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B)) return Z00(A, Q)
}

function Z00(A, Q) {
    if (Q == null || Q > A.length) Q = A.length;
    for (var B = 0, G = Array(Q); B < Q; B++) G[B] = A[B];
    return G
}

function TF5() {
    throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function I00(A, Q, B, G, Z) {
    if (Q = Q || [], B = B || [], G) A = G(Z, A);
    var I;
    for (I = 0; I < Q.length; I += 1)
        if (Q[I] === A) return B[I];
    var Y;
    if (Object.prototype.toString.call(A) === "[object Array]") {
        Q.push(A), Y = Array(A.length), B.push(Y);
        for (I = 0; I < A.length; I += 1) Y[I] = I00(A[I], Q, B, G, Z);
        return Q.pop(), B.pop(), Y
    }
    if (A && A.toJSON) A = A.toJSON();
    if (G00(A) === "object" && A !== null) {
        Q.push(A), Y = {}, B.push(Y);
        var J = [],
            W;
        for (W in A)
            if (Object.prototype.hasOwnProperty.call(A, W)) J.push(W);
        J.sort();
        for (I = 0; I < J.length; I += 1) W = J[I], Y[W] = I00(A[W], Q, B, G, W);
        Q.pop(), B.pop()
    } else Y = A;
    return Y
}

function EMA(A, Q, B, G, Z, I, Y) {
    if (!Y) Y = {};
    if (typeof Y === "function") Y = {
        callback: Y
    };
    if (typeof Y.context > "u") Y.context = 4;
    if (Y.newlineIsToken) throw Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
    if (!Y.callback) return X(v21(B, G, Y));
    else {
        var J = Y,
            W = J.callback;
        v21(B, G, XZ2(XZ2({}, Y), {}, {
            callback: function(V) {
                var K = X(V);
                W(K)
            }
        }))
    }

    function X(F) {
        if (!F) return;
        F.push({
            value: "",
            lines: []
        });

        function V(v) {
            return v.map(function(x) {
                return " " + x
            })
        }
        var K = [],
            D = 0,
            H = 0,
            C = [],
            E = 1,
            z = 1,
            w = function() {
                var x = F[N],
                    p = x.lines || PF5(x.value);
                if (x.lines = p, x.added || x.removed) {
                    var u;
                    if (!D) {
                        var o = F[N - 1];
                        if (D = E, H = z, o) C = Y.context > 0 ? V(o.lines.slice(-Y.context)) : [], D -= C.length, H -= C.length
                    }
                    if ((u = C).push.apply(u, A00(p.map(function(IA) {
                            return (x.added ? "+" : "-") + IA
                        }))), x.added) z += p.length;
                    else E += p.length
                } else {
                    if (D)
                        if (p.length <= Y.context * 2 && N < F.length - 2) {
                            var l;
                            (l = C).push.apply(l, A00(V(p)))
                        } else {
                            var k, d = Math.min(p.length, Y.context);
                            (k = C).push.apply(k, A00(V(p.slice(0, d))));
                            var QA = {
                                oldStart: D,
                                oldLines: E - D + d,
                                newStart: H,
                                newLines: z - H + d,
                                lines: C
                            };
                            K.push(QA), D = 0, H = 0, C = []
                        } E += p.length, z += p.length
                }
            };
        for (var N = 0; N < F.length; N++) w();
        for (var q = 0, R = K; q < R.length; q++) {
            var P = R[q];
            for (var y = 0; y < P.lines.length; y++)
                if (P.lines[y].endsWith(`
`)) P.lines[y] = P.lines[y].slice(0, -1);
                else P.lines.splice(y + 1, 0, "\\ No newline at end of file"), y++
        }
        return {
            oldFileName: A,
            newFileName: Q,
            oldHeader: Z,
            newHeader: I,
            hunks: K
        }
    }
}

function PF5(A) {
    var Q = A.endsWith(`
`),
        B = A.split(`
`).map(function(G) {
            return G + `
`
        });
    if (Q) B.pop();
    else B.push(B.pop().slice(0, -1));
    return B
}
var wkG, x21 = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",
    UF5, b21, FZ2, f21, $F5, wF5, CMA, Y00;
var zMA = L(() => {
    BP.prototype = {
        diff: function(Q, B) {
            var G, Z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                I = Z.callback;
            if (typeof Z === "function") I = Z, Z = {};
            var Y = this;

            function J(q) {
                if (q = Y.postProcess(q, Z), I) return setTimeout(function() {
                    I(q)
                }, 0), !0;
                else return q
            }
            Q = this.castInput(Q, Z), B = this.castInput(B, Z), Q = this.removeEmpty(this.tokenize(Q, Z)), B = this.removeEmpty(this.tokenize(B, Z));
            var W = B.length,
                X = Q.length,
                F = 1,
                V = W + X;
            if (Z.maxEditLength != null) V = Math.min(V, Z.maxEditLength);
            var K = (G = Z.timeout) !== null && G !== void 0 ? G : 1 / 0,
                D = Date.now() + K,
                H = [{
                    oldPos: -1,
                    lastComponent: void 0
                }],
                C = this.extractCommon(H[0], B, Q, 0, Z);
            if (H[0].oldPos + 1 >= X && C + 1 >= W) return J(GZ2(Y, H[0].lastComponent, B, Q, Y.useLongestToken));
            var E = -1 / 0,
                z = 1 / 0;

            function w() {
                for (var q = Math.max(E, -F); q <= Math.min(z, F); q += 2) {
                    var R = void 0,
                        P = H[q - 1],
                        y = H[q + 1];
                    if (P) H[q - 1] = void 0;
                    var v = !1;
                    if (y) {
                        var x = y.oldPos - q;
                        v = y && 0 <= x && x < W
                    }
                    var p = P && P.oldPos + 1 < X;
                    if (!v && !p) {
                        H[q] = void 0;
                        continue
                    }
                    if (!p || v && P.oldPos < y.oldPos) R = Y.addToPath(y, !0, !1, 0, Z);
                    else R = Y.addToPath(P, !1, !0, 1, Z);
                    if (C = Y.extractCommon(R, B, Q, q, Z), R.oldPos + 1 >= X && C + 1 >= W) return J(GZ2(Y, R.lastComponent, B, Q, Y.useLongestToken));
                    else {
                        if (H[q] = R, R.oldPos + 1 >= X) z = Math.min(z, q - 1);
                        if (C + 1 >= W) E = Math.max(E, q + 1)
                    }
                }
                F++
            }
            if (I)(function q() {
                setTimeout(function() {
                    if (F > V || Date.now() > D) return I();
                    if (!w()) q()
                }, 0)
            })();
            else
                while (F <= V && Date.now() <= D) {
                    var N = w();
                    if (N) return N
                }
        },
        addToPath: function(Q, B, G, Z, I) {
            var Y = Q.lastComponent;
            if (Y && !I.oneChangePerToken && Y.added === B && Y.removed === G) return {
                oldPos: Q.oldPos + Z,
                lastComponent: {
                    count: Y.count + 1,
                    added: B,
                    removed: G,
                    previousComponent: Y.previousComponent
                }
            };
            else return {
                oldPos: Q.oldPos + Z,
                lastComponent: {
                    count: 1,
                    added: B,
                    removed: G,
                    previousComponent: Y
                }
            }
        },
        extractCommon: function(Q, B, G, Z, I) {
            var Y = B.length,
                J = G.length,
                W = Q.oldPos,
                X = W - Z,
                F = 0;
            while (X + 1 < Y && W + 1 < J && this.equals(G[W + 1], B[X + 1], I))
                if (X++, W++, F++, I.oneChangePerToken) Q.lastComponent = {
                    count: 1,
                    previousComponent: Q.lastComponent,
                    added: !1,
                    removed: !1
                };
            if (F && !I.oneChangePerToken) Q.lastComponent = {
                count: F,
                previousComponent: Q.lastComponent,
                added: !1,
                removed: !1
            };
            return Q.oldPos = W, X
        },
        equals: function(Q, B, G) {
            if (G.comparator) return G.comparator(Q, B);
            else return Q === B || G.ignoreCase && Q.toLowerCase() === B.toLowerCase()
        },
        removeEmpty: function(Q) {
            var B = [];
            for (var G = 0; G < Q.length; G++)
                if (Q[G]) B.push(Q[G]);
            return B
        },
        castInput: function(Q) {
            return Q
        },
        tokenize: function(Q) {
            return Array.from(Q)
        },
        join: function(Q) {
            return Q.join("")
        },
        postProcess: function(Q) {
            return Q
        }
    };
    wkG = new BP;
    UF5 = new RegExp("[".concat(x21, "]+|\\s+|[^").concat(x21, "]"), "ug"), b21 = new BP;
    b21.equals = function(A, Q, B) {
        if (B.ignoreCase) A = A.toLowerCase(), Q = Q.toLowerCase();
        return A.trim() === Q.trim()
    };
    b21.tokenize = function(A) {
        var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            B;
        if (Q.intlSegmenter) {
            if (Q.intlSegmenter.resolvedOptions().granularity != "word") throw Error('The segmenter passed must have a granularity of "word"');
            B = Array.from(Q.intlSegmenter.segment(A), function(I) {
                return I.segment
            })
        } else B = A.match(UF5) || [];
        var G = [],
            Z = null;
        return B.forEach(function(I) {
            if (/\s/.test(I))
                if (Z == null) G.push(I);
                else G.push(G.pop() + I);
            else if (/\s/.test(Z))
                if (G[G.length - 1] == Z) G.push(G.pop() + I);
                else G.push(Z + I);
            else G.push(I);
            Z = I
        }), G
    };
    b21.join = function(A) {
        return A.map(function(Q, B) {
            if (B == 0) return Q;
            else return Q.replace(/^\s+/, "")
        }).join("")
    };
    b21.postProcess = function(A, Q) {
        if (!A || Q.oneChangePerToken) return A;
        var B = null,
            G = null,
            Z = null;
        if (A.forEach(function(I) {
                if (I.added) G = I;
                else if (I.removed) Z = I;
                else {
                    if (G || Z) JZ2(B, Z, G, I);
                    B = I, G = null, Z = null
                }
            }), G || Z) JZ2(B, Z, G, null);
        return A
    };
    FZ2 = new BP;
    FZ2.tokenize = function(A) {
        var Q = new RegExp("(\\r?\\n)|[".concat(x21, "]+|[^\\S\\n\\r]+|[^").concat(x21, "]"), "ug");
        return A.match(Q) || []
    };
    f21 = new BP;
    f21.tokenize = function(A, Q) {
        if (Q.stripTrailingCr) A = A.replace(/\r\n/g, `
`);
        var B = [],
            G = A.split(/(\n|\r\n)/);
        if (!G[G.length - 1]) G.pop();
        for (var Z = 0; Z < G.length; Z++) {
            var I = G[Z];
            if (Z % 2 && !Q.newlineIsToken) B[B.length - 1] += I;
            else B.push(I)
        }
        return B
    };
    f21.equals = function(A, Q, B) {
        if (B.ignoreWhitespace) {
            if (!B.newlineIsToken || !A.includes(`
`)) A = A.trim();
            if (!B.newlineIsToken || !Q.includes(`
`)) Q = Q.trim()
        } else if (B.ignoreNewlineAtEof && !B.newlineIsToken) {
            if (A.endsWith(`
`)) A = A.slice(0, -1);
            if (Q.endsWith(`
`)) Q = Q.slice(0, -1)
        }
        return BP.prototype.equals.call(this, A, Q, B)
    };
    $F5 = new BP;
    $F5.tokenize = function(A) {
        return A.split(/(\S.+?[.!?])(?=\s+|$)/)
    };
    wF5 = new BP;
    wF5.tokenize = function(A) {
        return A.split(/([{}:;,]|\s+)/)
    };
    CMA = new BP;
    CMA.useLongestToken = !0;
    CMA.tokenize = f21.tokenize;
    CMA.castInput = function(A, Q) {
        var {
            undefinedReplacement: B,
            stringifyReplacer: G
        } = Q, Z = G === void 0 ? function(I, Y) {
            return typeof Y > "u" ? B : Y
        } : G;
        return typeof A === "string" ? A : JSON.stringify(I00(A, null, null, Z), Z, "  ")
    };
    CMA.equals = function(A, Q, B) {
        return BP.prototype.equals.call(CMA, A.replace(/,([\r\n])/g, "$1"), Q.replace(/,([\r\n])/g, "$1"), B)
    };
    Y00 = new BP;
    Y00.tokenize = function(A) {
        return A.slice()
    };
    Y00.join = Y00.removeEmpty = function(A) {
        return A
    }
});

function UMA(A) {
    return A.replaceAll("&", DZ2).replaceAll("$", HZ2)
}

function CZ2(A) {
    return A.replaceAll(DZ2, "&").replaceAll(HZ2, "$")
}

function $MA(A, Q) {
    let B = 0,
        G = 0;
    if (A.length === 0 && Q) B = Q.split(/\r?\n/).length;
    else B = A.reduce((Z, I) => Z + I.lines.filter((Y) => Y.startsWith("+")).length, 0), G = A.reduce((Z, I) => Z + I.lines.filter((Y) => Y.startsWith("-")).length, 0);
    lW1(B, G), sW1()?.add(B, {
        type: "added"
    }), sW1()?.add(G, {
        type: "removed"
    }), BA("tengu_file_changed", {
        lines_added: B,
        lines_removed: G
    })
}

function J00({
    filePath: A,
    oldContent: Q,
    newContent: B,
    ignoreWhitespace: G = !1,
    singleHunk: Z = !1
}) {
    return EMA(A, A, UMA(Q), UMA(B), void 0, void 0, {
        ignoreWhitespace: G,
        context: Z ? 1e5 : KZ2
    }).hunks.map((I) => ({
        ...I,
        lines: I.lines.map(CZ2)
    }))
}

function Cq({
    filePath: A,
    fileContents: Q,
    edits: B,
    ignoreWhitespace: G = !1
}) {
    let Z = UMA(YYA(Q));
    return EMA(A, A, Z, B.reduce((I, Y) => {
        let {
            old_string: J,
            new_string: W
        } = Y, X = "replace_all" in Y ? Y.replace_all : !1, F = UMA(YYA(J)), V = UMA(YYA(W));
        if (X) return I.replaceAll(F, () => V);
        else return I.replace(F, () => V)
    }, Z), void 0, void 0, {
        context: KZ2,
        ignoreWhitespace: G
    }).hunks.map((I) => ({
        ...I,
        lines: I.lines.map(CZ2)
    }))
}
var KZ2 = 3,
    DZ2 = "<<:AMPERSAND_TOKEN:>>",
    HZ2 = "<<:DOLLAR_TOKEN:>>";
var fk = L(() => {
    zMA();
    x_();
    M9();
    w0();
    S0()
});

function EZ2(A) {
    return A.replaceAll(jF5, "'").replaceAll(SF5, "'").replaceAll(_F5, '"').replaceAll(kF5, '"')
}

function W00(A) {
    let Q = A.split(/(\r\n|\n|\r)/),
        B = "";
    for (let G = 0; G < Q.length; G++) {
        let Z = Q[G];
        if (Z !== void 0)
            if (G % 2 === 0) B += Z.replace(/\s+$/, "");
            else B += Z
    }
    return B
}

function E1A(A, Q) {
    if (A.includes(Q)) return Q;
    let B = EZ2(Q),
        Z = EZ2(A).indexOf(B);
    if (Z !== -1) return A.substring(Z, Z + Q.length);
    return null
}

function zZ2(A, Q, B, G = !1) {
    let Z = G ? (Y, J, W) => Y.replaceAll(J, () => W) : (Y, J, W) => Y.replace(J, () => W);
    if (B !== "") return Z(A, Q, B);
    return !Q.endsWith(`
`) && A.includes(Q + `
`) ? Z(A, Q + `
`, B) : Z(A, Q, B)
}

function h21({
    filePath: A,
    fileContents: Q,
    oldString: B,
    newString: G,
    replaceAll: Z = !1
}) {
    return wMA({
        filePath: A,
        fileContents: Q,
        edits: [{
            old_string: B,
            new_string: G,
            replace_all: Z
        }]
    })
}

function wMA({
    filePath: A,
    fileContents: Q,
    edits: B
}) {
    let G = Q,
        Z = [];
    if (!Q && B.length === 1 && B[0] && B[0].old_string === "" && B[0].new_string === "") return {
        patch: Cq({
            filePath: A,
            fileContents: Q,
            edits: [{
                old_string: Q,
                new_string: G,
                replace_all: !1
            }]
        }),
        updatedFile: ""
    };
    for (let Y of B) {
        let J = Y.old_string.replace(/\n+$/, "");
        for (let X of Z)
            if (J !== "" && X.includes(J)) throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
        let W = G;
        if (G = Y.old_string === "" ? Y.new_string : zZ2(G, Y.old_string, Y.new_string, Y.replace_all), G === W) throw Error("String not found in file. Failed to apply edit.");
        Z.push(Y.new_string)
    }
    if (G === Q) throw Error("Original and edited file match exactly. Failed to apply edit.");
    return {
        patch: Cq({
            filePath: A,
            fileContents: Q,
            edits: [{
                old_string: Q,
                new_string: G,
                replace_all: !1
            }]
        }),
        updatedFile: G
    }
}

function X00(A, Q) {
    return EMA("file.txt", "file.txt", A, Q, void 0, void 0, {
        context: 8
    }).hunks.map((G) => ({
        startLine: G.oldStart,
        content: G.lines.filter((Z) => !Z.startsWith("-") && !Z.startsWith("\\")).map((Z) => Z.slice(1)).join(`
`)
    })).map(ml).join(`
...
`)
}

function UZ2(A, Q, B, G = 4) {
    let I = (A.split(Q)[0] ?? "").split(/\r?\n/).length - 1,
        Y = zZ2(A, Q, B).split(/\r?\n/),
        J = Math.max(0, I - G),
        W = I + G + B.split(/\r?\n/).length;
    return {
        snippet: Y.slice(J, W).join(`
`),
        startLine: J + 1
    }
}

function $Z2(A) {
    return A.map((Q) => {
        let B = [],
            G = [],
            Z = [];