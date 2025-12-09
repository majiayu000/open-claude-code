/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: mcp_027.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (8次) = lazyLoader(fn) - Lazy module loader
 *   GA       (4次) = esmImport(module) - ESM import helper
 *   g5       (1次) = READ_TOOL_NAME = "Read"
 *   R5       (1次) = EDIT_TOOL_NAME = "Edit"
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 27/29
 * Lines: 438187 - 439686 (1500 lines)
 * Original file: cli.js
 */

var GG = L(() => {
    nQ();
    S0();
    hQ();
    R2();
    o0();
    zV();
    wy();
    RB();
    o2();
    ED();
    T80();
    D0();
    nE();
    w0();
    XH();
    uIA();
    za = H0();
    pH9 = t1(async (A) => {
        let {
            messages: Q
        } = await sV0(A);
        return new Set(Q.keys())
    }, (A) => A)
});
import {
    join as aH9
} from "path";
import {
    tmpdir as oy3
} from "os";
import {
    writeFileSync as ty3,
    mkdirSync as ey3,
    rmSync as Ax3
} from "fs";

function cg() {
    return process.env.USE_MCP_CLI_DIR || aH9(oy3(), "claude-code-mcp-cli")
}

function EFA() {
    if (RJ()) {
        let A = process.env.CLAUDE_CODE_SESSION_ID;
        if (A) return A
    }
    return G0()
}

function sH9() {
    if (!RJ()) return;
    wG(async () => {
        try {
            Ax3(cg(), {
                recursive: !0,
                force: !0
            })
        } catch {}
    })
}

function rV0() {
    let A = EFA();
    return aH9(cg(), `${A}.json`)
}

function Qx3(A) {
    let Q = {
        name: A.name,
        type: A.type
    };
    if (A.type === "connected") return {
        ...Q,
        capabilities: A.capabilities
    };
    return Q
}
async function Bx3(A) {
    let Q = "";
    try {
        Q = await A.description({}, {
            isNonInteractiveSession: !1,
            toolPermissionContext: {
                mode: "default",
                additionalWorkingDirectories: new Map,
                alwaysAllowRules: {},
                alwaysDenyRules: {},
                alwaysAskRules: {},
                isBypassPermissionsModeAvailable: !1
            },
            tools: []
        })
    } catch {}
    return {
        name: A.name,
        description: Q,
        inputJSONSchema: A.inputJSONSchema,
        isMcp: A.isMcp,
        originalToolName: A.originalMcpToolName
    }
}
async function rH9(A, Q, B) {
    if (!RJ()) return;
    try {
        ey3(cg(), {
            recursive: !0
        });
        let G = await Promise.all(Q.filter((W) => W.isMcp).map(Bx3)),
            Z = {},
            I = {};
        for (let W of A) {
            Z[W.name] = W.config;
            let X = v7(W.name);
            if (I[X] && I[X] !== W.name) console.warn(`Warning: MCP server name collision detected. Both "${I[X]}" and "${W.name}" normalize to "${X}". Only "${W.name}" will be accessible via normalized lookup.`);
            I[X] = W.name
        }
        let Y = {
                clients: A.map(Qx3),
                configs: Z,
                tools: G,
                resources: B,
                normalizedNames: I
            },
            J = rV0();
        ty3(J, JSON.stringify(Y, null, 2))
    } catch {}
}
var zFA = L(() => {
    S0();
    XH();
    EE()
});
import {
    join as UFA,
    posix as $a,
    sep as tY1
} from "path";
import {
    homedir as Gx3
} from "os";

function Ua(A) {
    return A.toLowerCase()
}

function tH9(A, Q) {
    if (uQ() === "windows") {
        let B = pj(A),
            G = pj(Q);
        return $a.relative(B, G)
    }
    return $a.relative(A, Q)
}

function VvA(A) {
    if (uQ() === "windows") return pj(A);
    return A
}

function Yx3() {
    return gN.map((A) => pw(A)).filter((A) => A !== void 0)
}

function I50(A) {
    let Q = b9(A),
        B = Ua(Q);
    if (B.endsWith("/.claude/settings.json") || B.endsWith("/.claude/settings.local.json")) return !0;
    return Yx3().some((G) => Ua(G) === B)
}

function Jx3(A) {
    if (I50(A)) return !0;
    let Q = UFA(pQ(), ".claude", "commands"),
        B = UFA(pQ(), ".claude", "agents"),
        G = UFA(pQ(), ".claude", "skills");
    return bk(A, Q) || bk(A, B) || bk(A, G)
}

function Wx3(A) {
    if (!cg()) return !1;
    let Q = b9(A);
    return bk(Q, cg())
}

function eH9(A) {
    let Q = bU();
    return A === Q
}

function eY1() {
    return UFA(uH(H0()), G0(), "session-memory")
}

function Z91() {
    return UFA(eY1(), "summary.md")
}

function Xx3(A) {
    let Q = eY1();
    return A.startsWith(Q + tY1)
}

function Fx3(A) {
    let B = b9(A).split(tY1),
        G = B[B.length - 1];
    if (A.startsWith("\\\\") || A.startsWith("//")) return !0;
    for (let Z of Ix3) {
        let I = Ua(Z);
        if (B.some((Y) => Ua(Y) === I)) return !0
    }
    if (G) {
        let Z = Ua(G);
        if (Zx3.some((I) => Ua(I) === Z)) return !0
    }
    return !1
}

function AC9(A) {
    if (A.indexOf(":", 2) !== -1) return !0;
    if (/~\d/.test(A)) return !0;
    if (A.startsWith("\\\\?\\") || A.startsWith("\\\\.\\") || A.startsWith("//?/") || A.startsWith("//./")) return !0;
    if (/[.\s]+$/.test(A)) return !0;
    if (/\.(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(A)) return !0;
    if (/(^|\/|\\)\.{3,}(\/|\\|$)/.test(A)) return !0;
    if (UQ1(A)) return !0;
    return !1
}

function Ge1(A) {
    let Q = Ds(A);
    for (let B of Q)
        if (AC9(B)) return {
            safe: !1,
            message: `Claude requested permissions to write to ${A}, which contains a suspicious Windows path pattern that requires manual approval.`
        };
    for (let B of Q)
        if (Jx3(B)) return {
            safe: !1,
            message: `Claude requested permissions to write to ${A}, but you haven't granted it yet.`
        };
    for (let B of Q)
        if (Wx3(B));
    for (let B of Q)
        if (Fx3(B)) return {
            safe: !1,
            message: `Claude requested permissions to edit ${A} which is a sensitive file.`
        };
    return {
        safe: !0
    }
}

function RIA(A) {
    return new Set([pQ(), ...A.additionalWorkingDirectories.keys()])
}

function qT(A, Q) {
    return Ds(A).every((G) => Array.from(RIA(Q)).some((Z) => bk(G, Z)))
}

function bk(A, Q) {
    let B = b9(A),
        G = b9(Q),
        Z = B.replace(/^\/private\/var\//, "/var/").replace(/^\/private\/tmp(\/|$)/, "/tmp$1"),
        I = G.replace(/^\/private\/var\//, "/var/").replace(/^\/private\/tmp(\/|$)/, "/tmp$1"),
        Y = Ua(Z),
        J = Ua(I),
        W = tH9(J, Y);
    if (W === "") return !0;
    if (M9A(W)) return !1;
    return !$a.isAbsolute(W)
}

function Vx3(A) {
    switch (A) {
        case "cliArg":
        case "command":
        case "session":
            return b9(pQ());
        case "userSettings":
        case "policySettings":
        case "projectSettings":
        case "localSettings":
        case "flagSettings":
            return aY1(A)
    }
}

function oV0(A) {
    return $a.join(Wz, A)
}

function Kx3({
    patternRoot: A,
    pattern: Q,
    rootPath: B
}) {
    let G = $a.join(A, Q);
    if (A === B) return oV0(Q);
    else if (G.startsWith(`${B}${Wz}`)) {
        let Z = G.slice(B.length);
        return oV0(Z)
    } else {
        let Z = $a.relative(B, A);
        if (!Z || Z.startsWith(`..${Wz}`) || Z === "..") return null;
        else {
            let I = $a.join(Z, Q);
            return oV0(I)
        }
    }
}

function aJA(A, Q) {
    let B = new Set(A.get(null) ?? []);
    for (let [G, Z] of A.entries()) {
        if (G === null) continue;
        for (let I of Z) {
            let Y = Kx3({
                patternRoot: G,
                pattern: I,
                rootPath: Q
            });
            if (Y) B.add(Y)
        }
    }
    return Array.from(B)
}

function sJA(A) {
    let Q = QC9(A, "read", "deny"),
        B = new Map;
    for (let [G, Z] of Q.entries()) B.set(G, Array.from(Z.keys()));
    return B
}

function Dx3(A, Q) {
    if (A.startsWith(`${Wz}${Wz}`)) {
        let G = A.slice(1);
        if (uQ() === "windows" && G.match(/^\/[a-z]\//i)) {
            let Z = G[1]?.toUpperCase() ?? "C",
                I = G.slice(2),
                Y = `${Z}:\\`;
            return {
                relativePattern: I.startsWith("/") ? I.slice(1) : I,
                root: Y
            }
        }
        return {
            relativePattern: G,
            root: Wz
        }
    } else if (A.startsWith(`~${Wz}`)) return {
        relativePattern: A.slice(1),
        root: Gx3()
    };
    else if (A.startsWith(Wz)) return {
        relativePattern: A,
        root: Vx3(Q)
    };
    let B = A;
    if (A.startsWith(`.${Wz}`)) B = A.slice(2);
    return {
        relativePattern: B,
        root: null
    }
}

function QC9(A, Q, B) {
    let G = (() => {
            switch (Q) {
                case "edit":
                    return R5;
                case "read":
                    return g5
            }
        })(),
        Z = pV0(A, G, B),
        I = new Map;
    for (let [Y, J] of Z.entries()) {
        let {
            relativePattern: W,
            root: X
        } = Dx3(Y, J.source), F = I.get(X);
        if (F === void 0) F = new Map, I.set(X, F);
        F.set(W, J)
    }
    return I
}

function TD(A, Q, B, G) {
    let Z = b9(A);
    if (uQ() === "windows" && Z.includes("\\")) Z = pj(Z);
    let I = QC9(Q, B, G);
    for (let [Y, J] of I.entries()) {
        let W = Array.from(J.keys()).map((K) => {
                let D = K;
                if (Y === Wz && K.startsWith(Wz)) D = K.slice(1);
                if (D.endsWith("/**")) D = D.slice(0, -3);
                return D
            }),
            X = oH9.default().add(W),
            F = tH9(Y ?? H0(), Z ?? H0());
        if (F.startsWith(`..${Wz}`)) continue;
        if (!F) continue;
        let V = X.test(F);
        if (V.ignored && V.rule) {
            let K = V.rule.pattern,
                D = K + "/**";
            if (J.has(D)) return J.get(D) ?? null;
            if (Y === Wz && !K.startsWith(Wz)) {
                K = Wz + K;
                let H = K + "/**";
                if (J.has(H)) return J.get(H) ?? null
            }
            return J.get(K) ?? null
        }
    }
    return null
}

function ul(A, Q, B) {
    if (typeof A.getPath !== "function") return {
        behavior: "ask",
        message: `Claude requested permissions to use ${A.name}, but you haven't granted it yet.`
    };
    let G = A.getPath(Q),
        Z = Ds(G);
    for (let F of Z)
        if (F.startsWith("\\\\") || F.startsWith("//")) return {
            behavior: "ask",
            message: `Claude requested permissions to read from ${G}, which appears to be a UNC path that could access network resources.`,
            decisionReason: {
                type: "other",
                reason: "UNC path detected (defense-in-depth check)"
            }
        };
    for (let F of Z)
        if (AC9(F)) return {
            behavior: "ask",
            message: `Claude requested permissions to read from ${G}, which contains a suspicious Windows path pattern that requires manual approval.`,
            decisionReason: {
                type: "other",
                reason: "Path contains suspicious Windows-specific patterns (alternate data streams, short names, long path prefixes, or three or more consecutive dots) that require manual verification"
            }
        };
    for (let F of Z) {
        let V = TD(F, B, "read", "deny");
        if (V) return {
            behavior: "deny",
            message: `Permission to read ${G} has been denied.`,
            decisionReason: {
                type: "rule",
                rule: V
            }
        }
    }
    for (let F of Z) {
        let V = TD(F, B, "read", "ask");
        if (V) return {
            behavior: "ask",
            message: `Claude requested permissions to read from ${G}, but you haven't granted it yet.`,
            decisionReason: {
                type: "rule",
                rule: V
            }
        }
    }
    let I = V0A(A, Q, B);
    if (I.behavior === "allow") return I;
    if (qT(G, B)) return {
        behavior: "allow",
        updatedInput: Q,
        decisionReason: {
            type: "mode",
            mode: "default"
        }
    };
    let J = b9(G),
        W = Hx3(J);
    if (W) return {
        behavior: "allow",
        updatedInput: Q,
        decisionReason: {
            type: "other",
            reason: W
        }
    };
    let X = TD(G, B, "read", "allow");
    if (X) return {
        behavior: "allow",
        updatedInput: Q,
        decisionReason: {
            type: "rule",
            rule: X
        }
    };
    return {
        behavior: "ask",
        message: `Claude requested permissions to read from ${G}, but you haven't granted it yet.`,
        suggestions: m51(G, "read", B),
        decisionReason: {
            type: "workingDir",
            reason: "Path is outside allowed working directories"
        }
    }
}

function V0A(A, Q, B) {
    if (typeof A.getPath !== "function") return {
        behavior: "ask",
        message: `Claude requested permissions to use ${A.name}, but you haven't granted it yet.`
    };
    let G = A.getPath(Q),
        Z = Ds(G);
    for (let X of Z) {
        let F = TD(X, B, "edit", "deny");
        if (F) return {
            behavior: "deny",
            message: `Permission to edit ${G} has been denied.`,
            decisionReason: {
                type: "rule",
                rule: F
            }
        }
    }
    let I = b9(G);
    if (eH9(I)) return {
        behavior: "allow",
        updatedInput: Q,
        decisionReason: {
            type: "other",
            reason: "Plan files for current session are allowed for writing"
        }
    };
    let Y = Ge1(G);
    if (!Y.safe) return {
        behavior: "ask",
        message: Y.message,
        decisionReason: {
            type: "other",
            reason: Y.message
        }
    };
    for (let X of Z) {
        let F = TD(X, B, "edit", "ask");
        if (F) return {
            behavior: "ask",
            message: `Claude requested permissions to write to ${G}, but you haven't granted it yet.`,
            decisionReason: {
                type: "rule",
                rule: F
            }
        }
    }
    let J = qT(G, B);
    if (B.mode === "acceptEdits" && J) return {
        behavior: "allow",
        updatedInput: Q,
        decisionReason: {
            type: "mode",
            mode: B.mode
        }
    };
    let W = TD(G, B, "edit", "allow");
    if (W) return {
        behavior: "allow",
        updatedInput: Q,
        decisionReason: {
            type: "rule",
            rule: W
        }
    };
    return {
        behavior: "ask",
        message: `Claude requested permissions to write to ${G}, but you haven't granted it yet.`,
        suggestions: m51(G, "write", B),
        decisionReason: !J ? {
            type: "workingDir",
            reason: "Path is outside allowed working directories"
        } : void 0
    }
}

function m51(A, Q, B) {
    let G = !qT(A, B);
    if (Q === "read" && G) {
        let Z = Qv(A);
        return Ds(Z).map((J) => FvA(J, "session")).filter((J) => J !== void 0)
    }
    if (Q === "write" || Q === "create") {
        let Z = [{
            type: "setMode",
            mode: "acceptEdits",
            destination: "session"
        }];
        if (G) {
            let I = Qv(A),
                Y = Ds(I);
            Z.push({
                type: "addDirectories",
                directories: Y,
                destination: "session"
            })
        }
        return Z
    }
    return [{
        type: "setMode",
        mode: "acceptEdits",
        destination: "session"
    }]
}

function Hx3(A) {
    let Q = UFA(uH(pQ()), "bash-outputs", G0());
    if (A.startsWith(Q)) return "Bash output files from current session are allowed for reading";
    if (Xx3(A)) return "Session memory files are allowed for reading";
    if (eH9(A)) return "Plan files for current session are allowed for reading";
    let B = U51(),
        G = B.endsWith(tY1) ? B : B + tY1;
    if (A === B || A.startsWith(G)) return "Tool result files are allowed for reading";
    return
}
var oH9, Zx3, Ix3, Wz;
var _Y = L(() => {
    S0();
    R2();
    jI();
    L9A();
    GG();
    s5();
    jI();
    hK();
    aG();
    xV();
    RB();
    UF();
    o0();
    zFA();
    ze1();
    _E();
    $51();
    oH9 = GA(clA(), 1), Zx3 = [".gitconfig", ".gitmodules", ".bashrc", ".bash_profile", ".zshrc", ".zprofile", ".profile", ".ripgreprc", ".mcp.json"], Ix3 = [".git", ".vscode", ".idea", ".claude"];
    Wz = $a.sep
});
import {
    isAbsolute as AK0,
    resolve as BC9,
    relative as Cx3,
    sep as Ex3,
    basename as tV0,
    dirname as GC9,
    extname as eV0,
    join as $FA
} from "path";
import {
    homedir as zx3
} from "os";
import {
    chmodSync as Ux3
} from "fs";
async function qS2(A, Q, {
    limit: B,
    offset: G
}, Z, I) {
    let Y = aJA(sJA(I), Q),
        J = ["--files", "--glob", A, "--sort=modified", "--no-ignore", "--hidden"];
    for (let K of Y) J.push("--glob", `!${K}`);
    let X = (await dj(J, Q, Z)).map((K) => AK0(K) ? K : $FA(Q, K)),
        F = X.length > G + B;
    return {
        files: X.slice(G, G + B),
        truncated: F
    }
}

function RD(A) {
    let Q = OA();
    return Math.ceil(Q.statSync(A).mtimeMs)
}

function J22(A, Q = 0, B) {
    let I = OA().readFileSync(A, {
            encoding: "utf8"
        }).split(/\r?\n/),
        Y = B !== void 0 && I.length - Q > B ? I.slice(Q, Q + B) : I.slice(Q);
    return {
        content: Y.join(`
`),
        lineCount: Y.length,
        totalLines: I.length
    }
}

function nJA(A, Q, B, G) {
    let Z = Q;
    if (G === "CRLF") Z = Q.split(`
`).join(`\r
`);
    J_(A, Z, {
        encoding: B
    })
}

function VH(A) {
    try {
        let B = OA(),
            {
                resolvedPath: G
            } = kK(B, A),
            {
                buffer: Z,
                bytesRead: I
            } = B.readSync(G, {
                length: 4096
            });
        if (I >= 2) {
            if (Z[0] === 255 && Z[1] === 254) return "utf16le"
        }
        if (I >= 3 && Z[0] === 239 && Z[1] === 187 && Z[2] === 191) return "utf8";
        return Z.slice(0, I).toString("utf8").length > 0 ? "utf8" : "ascii"
    } catch (B) {
        return e(B), "utf8"
    }
}

function K0A(A, Q = "utf8") {
    try {
        let B = OA(),
            {
                resolvedPath: G
            } = kK(B, A),
            {
                buffer: Z,
                bytesRead: I
            } = B.readSync(G, {
                length: 4096
            }),
            Y = Z.toString(Q, 0, I);
        return $x3(Y)
    } catch (B) {
        return e(B), "LF"
    }
}

function $x3(A) {
    let Q = 0,
        B = 0;
    for (let G = 0; G < A.length; G++)
        if (A[G] === `
`)
            if (G > 0 && A[G - 1] === "\r") Q++;
            else B++;
    return Q > B ? "CRLF" : "LF"
}

function gl(A) {
    let Q = AK0(A) ? A : BC9(H0(), A),
        B = OA(),
        G = String.fromCharCode(8239),
        Z = /^(.+)([ \u202F])(AM|PM)(\.png)$/,
        I = tV0(Q).match(Z);
    if (I) {
        if (B.existsSync(Q)) return Q;
        let Y = I[2],
            J = Y === " " ? G : " ",
            W = Q.replace(`${Y}${I[3]}${I[4]}`, `${J}${I[3]}${I[4]}`);
        if (B.existsSync(W)) return W
    }
    return Q
}

function YYA(A) {
    return A.replace(/^\t+/gm, (Q) => "  ".repeat(Q.length))
}

function wx3(A) {
    let Q = A ? b9(A) : void 0,
        B = Q ? Cx3(H0(), Q) : void 0;
    return {
        absolutePath: Q,
        relativePath: B
    }
}

function Q5(A) {
    let {
        relativePath: Q
    } = wx3(A);
    if (Q && !Q.startsWith("..")) return Q;
    let B = zx3();
    if (A.startsWith(B + Ex3)) return "~" + A.slice(B.length);
    return A
}

function AQ1(A) {
    let Q = OA();
    try {
        let B = GC9(A),
            G = tV0(A, eV0(A));
        if (!Q.existsSync(B)) return;
        let Y = Q.readdirSync(B).filter((J) => tV0(J.name, eV0(J.name)) === G && $FA(B, J.name) !== A)[0];
        if (Y) return Y.name;
        return
    } catch (B) {
        e(B);
        return
    }
}

function ml({
    content: A,
    startLine: Q
}) {
    if (!A) return "";
    return A.split(/\r?\n/).map((G, Z) => {
        let I = Z + Q,
            Y = String(I);
        if (Y.length >= 6) return `${Y}→${G}`;
        return `${Y.padStart(6," ")}→${G}`
    }).join(`
`)
}

function yjB(A) {
    let Q = OA();
    if (!Q.existsSync(A)) return !0;
    return Q.isDirEmptySync(A)
}

function Tq(A) {
    let Q = OA(),
        {
            resolvedPath: B,
            isSymlink: G
        } = kK(Q, A);
    if (G) g(`Reading through symlink: ${A} -> ${B}`);
    let Z = VH(B);
    return Q.readFileSync(B, {
        encoding: Z
    }).replaceAll(`\r
`, `
`)
}

function F00(A) {
    let {
        content: Q
    } = _c0.readFile(A);
    return Q
}

function J_(A, Q, B = {
    encoding: "utf-8"
}) {
    let G = OA(),
        Z = A;
    if (G.existsSync(A)) try {
        let Y = G.readlinkSync(A);
        Z = AK0(Y) ? Y : BC9(GC9(A), Y), g(`Writing through symlink: ${A} -> ${Z}`)
    } catch (Y) {
        Z = A
    }
    let I = `${Z}.tmp.${process.pid}.${Date.now()}`;
    try {
        g(`Writing to temp file: ${I}`);
        let Y, J = G.existsSync(Z);
        if (J) Y = G.statSync(Z).mode, g(`Preserving file permissions: ${Y.toString(8)}`);
        else if (B.mode !== void 0) Y = B.mode, g(`Setting permissions for new file: ${Y.toString(8)}`);
        let W = {
            encoding: B.encoding,
            flush: !0
        };
        if (!J && B.mode !== void 0) W.mode = B.mode;
        if (G.writeFileSync(I, Q, W), g(`Temp file written successfully, size: ${Q.length} bytes`), J && Y !== void 0) Ux3(I, Y), g("Applied original permissions to temp file");
        g(`Renaming ${I} to ${Z}`), G.renameSync(I, Z), g(`File ${Z} written atomically`)
    } catch (Y) {
        g(`Failed to write file atomically: ${Y}`), e(Y), BA("tengu_atomic_write_error", {});
        try {
            if (G.existsSync(I)) g(`Cleaning up temp file: ${I}`), G.unlinkSync(I)
        } catch (J) {
            g(`Failed to clean up temp file: ${J}`)
        }
        g(`Falling back to non-atomic write for ${Z}`);
        try {
            let J = {
                encoding: B.encoding,
                flush: !0
            };
            if (!G.existsSync(Z) && B.mode !== void 0) J.mode = B.mode;
            G.writeFileSync(Z, Q, J), g(`File ${Z} written successfully with non-atomic fallback`)
        } catch (J) {
            throw g(`Non-atomic write also failed: ${J}`), J
        }
    }
}

function QJ1(A) {
    return A.replace(/[^a-zA-Z0-9]/g, "-")
}

function LJ(A) {
    let Q = A / 1024;
    if (Q < 1) return `${A} bytes`;
    if (Q < 1024) return `${Q.toFixed(1).replace(/\.0$/,"")}KB`;
    let B = Q / 1024;
    if (B < 1024) return `${B.toFixed(1).replace(/\.0$/,"")}MB`;
    return `${(B/1024).toFixed(1).replace(/\.0$/,"")}GB`
}

function NWA(A) {
    let Q = eV0(A);
    if (!Q) return "unknown";
    return ZC9.getLanguage(Q.slice(1))?.name ?? "unknown"
}

function zoA(A) {
    let Q = OA();
    try {
        if (!Q.existsSync(A)) Q.mkdirSync(A);
        return !0
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), !1
    }
}

function QQ1(A, Q = HLA) {
    try {
        return OA().statSync(A).size <= Q
    } catch {
        return !1
    }
}
var ZC9, HLA = 262144,
    IS2, AJ1, Xx;
var M9 = L(() => {
    u1();
    D0();
    UZ();
    w0();
    gL0();
    cj();
    R2();
    o2();
    o0();
    kc0();
    _Y();
    s5();
    jI();
    ZC9 = GA(tH1(), 1);
    IS2 = t1(async () => {
        let A = s9();
        setTimeout(() => {
            A.abort()
        }, 1000);
        let Q = await Ov0(H0(), A.signal, 15),
            B = 0;
        for (let G of Q)
            if (K0A(G) === "CRLF") B++;
        return B > 3 ? "CRLF" : "LF"
    });
    AJ1 = XV1("claude-cli");
    Xx = {
        baseLogs: () => $FA(AJ1.cache, QJ1(OA().cwd())),
        errors: () => $FA(AJ1.cache, QJ1(OA().cwd()), "errors"),
        messages: () => $FA(AJ1.cache, QJ1(OA().cwd()), "messages"),
        mcpLogs: (A) => $FA(AJ1.cache, QJ1(OA().cwd()), `mcp-logs-${A}`)
    }
});
import {
    dirname as qx3,
    join as QK0
} from "path";

function ajA(A, Q) {
    return A.customTitle || A.summary || A.firstPrompt || Q || ""
}

function Nx3(A) {
    return A.toISOString().replace(/[:.]/g, "-")
}

function Lx3() {
    return QK0(Xx.errors(), BK0 + ".txt")
}

function e(A) {
    try {
        if (V0(process.env.CLAUDE_CODE_USE_BEDROCK) || V0(process.env.CLAUDE_CODE_USE_VERTEX) || V0(process.env.CLAUDE_CODE_USE_FOUNDRY) || process.env.DISABLE_ERROR_REPORTING || process.env.CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC) return;
        let Q = A.stack || A.message,
            B = {
                error: Q,
                timestamp: new Date().toISOString()
            };
        g(`${A.name}: ${Q}`, {
            level: "error"
        }), PE0(B), Mx3(Lx3(), {
            error: Q
        })
    } catch {}
}

function BFA() {
    return TE0()
}

function GK0(A) {
    if (!OA().existsSync(A)) return [];
    try {
        return JSON.parse(OA().readFileSync(A, {
            encoding: "utf8"
        }))
    } catch {
        return []
    }
}

function Mx3(A, Q) {
    return
}

function CI(A, Q) {
    if (g(`MCP server "${A}" ${Q}`, {
            level: "error"
        }), (c0() || {}).cleanupPeriodDays === 0) return;
    try {
        let G = Xx.mcpLogs(A),
            Z = Q instanceof Error ? Q.stack || Q.message : String(Q),
            I = new Date().toISOString(),
            Y = QK0(G, BK0 + ".txt");
        if (!OA().existsSync(G)) OA().mkdirSync(G);
        if (!OA().existsSync(Y)) OA().writeFileSync(Y, "[]", {
            encoding: "utf8",
            flush: !1
        });
        let J = {
                error: Z,
                timestamp: I,
                sessionId: G0(),
                cwd: OA().cwd()
            },
            W = GK0(Y);
        W.push(J), OA().writeFileSync(Y, JSON.stringify(W, null, 2), {
            encoding: "utf8",
            flush: !1
        })
    } catch {}
}

function f0(A, Q) {
    g(`MCP server "${A}": ${Q}`);
    try {
        let B = Xx.mcpLogs(A),
            G = new Date().toISOString(),
            Z = QK0(B, BK0 + ".txt");
        if (!OA().existsSync(B)) OA().mkdirSync(B);
        if (!OA().existsSync(Z)) OA().writeFileSync(Z, "[]", {
            encoding: "utf8",
            flush: !1
        });
        let I = {
                debug: Q,
                timestamp: G,
                sessionId: G0(),
                cwd: OA().cwd()
            },
            Y = GK0(Z);
        Y.push(I), OA().writeFileSync(Z, JSON.stringify(Y, null, 2), {
            encoding: "utf8",
            flush: !1
        })
    } catch {}
}

function fV0(A, Q) {
    if (!Q || Q !== "repl_main_thread") return;
    let B = structuredClone(A);
    RE0(B)
}
var BK0;
var u1 = L(() => {
    S0();
    M9();
    o0();
    RB();
    hQ();
    S0();
    D0();
    BK0 = Nx3(new Date)
});
import * as CSA from "path";
import {
    existsSync as IC9,
    mkdirSync as Ox3,
    readdirSync as Rx3,
    readFileSync as Tx3,
    writeFileSync as Px3,
    unlinkSync as jx3
} from "fs";

function wFA() {
    return CSA.join(PQ(), "statsig")
}
class ZK0 {
    cache = new Map;
    ready = !1;
    constructor() {
        try {
            if (!IC9(wFA())) Ox3(wFA(), {
                recursive: !0
            });
            let A = Rx3(wFA());
            for (let Q of A) {
                let B = decodeURIComponent(Q),
                    G = Tx3(CSA.join(wFA(), Q), "utf8");
                this.cache.set(B, G)
            }
            this.ready = !0
        } catch (A) {
            e(A), this.ready = !0
        }
    }
    isReady() {
        return this.ready
    }
    isReadyResolver() {
        return this.ready ? Promise.resolve() : null
    }
    getProviderName() {
        return "FileSystemStorageProvider"
    }
    getItem(A) {
        return this.cache.get(A) ?? null
    }
    setItem(A, Q) {
        this.cache.set(A, Q);
        try {
            let B = encodeURIComponent(A);
            Px3(CSA.join(wFA(), B), Q, "utf8")
        } catch (B) {
            e(B)
        }
    }
    removeItem(A) {
        this.cache.delete(A);
        let Q = encodeURIComponent(A),
            B = CSA.join(wFA(), Q);
        if (!IC9(B)) return;
        try {
            jx3(B)
        } catch (G) {
            e(G)
        }
    }
    getAllKeys() {
        return Array.from(this.cache.keys())
    }
}
var YC9 = L(() => {
    u1();
    hQ()
});
import {
    createHash as Sx3
} from "crypto";

function WC9(A) {
    let Q = Vp(!0),
        B = {
            networkConfig: {
                api: "https://statsig.anthropic.com/v1/"
            },
            environment: {
                tier: ["test", "dev"].includes("production") ? "development" : "production"
            },
            includeCurrentPageUrlWithEvents: !1,
            logLevel: BJ1.LogLevel.None,
            storageProvider: new ZK0,
            customUserCacheKeyFunc: (I, Y) => {
                return Sx3("sha1").update(I).update(Y.userID || "").digest("hex").slice(0, 10)
            }
        },
        G = new BJ1.StatsigClient(A, Q, B);
    G.on("error", () => {
        GQ.head("https://api.anthropic.com/api/hello").catch(() => {})
    });
    let Z = G.initializeAsync();
    return process.on("beforeExit", async () => {
        await G.flush()
    }), process.on("exit", () => {
        G.flush()
    }), {
        client: G,
        initialized: Z
    }
}

function ESA(A) {
    return JK0()
}

function KM2() {
    YK0 = !1, JK0.cache?.clear?.(), XC9.cache?.clear?.(), pg.cache?.clear?.(), N60.cache?.clear?.(), tV.cache?.clear?.()
}

function _v2() {
    return hX()
}
async function v0A() {
    if (hX()) return;
    try {
        let A = Vp(!0),
            Q = await pg(),
            B = XC9(),
            G = [];
        if (Q) G.push(Q.updateUserAsync(A));
        if (B) G.push(B.initialized.then(() => B.client.updateUserAsync(A)));
        await Promise.all(G)
    } catch (A) {
        e(A instanceof Error ? A : Error(`Statsig: Force refresh failed: ${A}`))
    }
}

function FC9() {
    if (hX()) return;
    let A = setInterval(() => {
        v0A()
    }, _x3);
    process.on("beforeExit", () => {
        clearInterval(A)
    })
}
async function WK0(A, Q) {
    if (hX()) return;
    try {
        let [B, G] = await Promise.all([pg(), Up({
            model: Q.model
        })]);
        if (!B) return;
        let Z = eRB(G, Q),
            I = {
                eventName: A,
                metadata: Z
            };
        B.logEvent(I), await B.flush()
    } catch (B) {}
}

function VC9(A, Q) {
    WK0(A, Q)
}

function KC9() {
    return {
        ...JC9
    }
}
async function Zh(A, Q) {
    if (hX()) return Q;
    let B = ESA(A);
    if (!B) return Q;
    await B.initialized;
    let G = B.client.getDynamicConfig(A);
    if (Object.keys(G.value).length === 0) return Q;
    return G.value
}

function ZI(A, Q, B) {
    let G = ESA(A);
    if (!G) return B;
    let Z = G.client.getExperiment(A);
    if (!Z) return B;
    return Z.get(Q, B)
}

function HTB(A, Q) {
    let B = ESA(A);
    if (!B) return Q;
    let G = B.client.getDynamicConfig(A);
    if (!G || Object.keys(G.value).length === 0) return Q;
    return G.value
}

function j8(A) {
    return yx3(A), L1().cachedStatsigGates[A] ?? !1
}
async function RJ9(A) {
    if (YK0) return j8(A);
    return tV(A)
}

function G7A(A, Q) {
    let G = L1().cachedDynamicConfigs?.[A];
    return kx3(A, Q).then((Z) => {
        let I = L1();
        if (Z === I.cachedDynamicConfigs?.[A]) return;
        d0({
            ...I,
            cachedDynamicConfigs: {
                ...I.cachedDynamicConfigs,
                [A]: Z
            }
        })
    }), G ?? Q
}

function _69(A) {
    let Q = L1();
    if (Q.cachedDynamicConfigs?.[A] === void 0) return;
    d0({
        ...Q,
        cachedDynamicConfigs: {
            ...Q.cachedDynamicConfigs,
            [A]: void 0
        }
    })
}
var IK0, BJ1, _x3 = 21600000,
    JC9, YK0 = !1,
    JK0, XC9, pg, tV, h81 = (A, Q) => {
        let [B, G] = IK0.default.useState(Q);
        return IK0.default.useEffect(() => {
            Zh(A, Q).then(G)
        }, [A, Q]), B
    },
    N60, kx3, yx3;
var O9 = L(() => {
    o2();
    w3();
    vL0();
    YC9();
    eb();
    D0();
    u1();
    jQ();
    t7A();
    St();
    IK0 = GA(VA(), 1), BJ1 = GA(xL0(), 1), JC9 = {};
    JK0 = t1(() => {
        if (hX()) return null;
        let A = WC9(fRB);
        return A.initialized.then(() => {
            YK0 = !0
        }), A
    }), XC9 = t1(() => {
        if (hX() || !xm1) return null;
        return WC9(xm1)
    });
    pg = t1(async () => {
        let A = JK0();
        if (!A) return null;
        return await A.initialized, A.client
    });
    tV = t1(async (A) => {
        if (hX()) return !1;
        let Q = ESA(A);
        if (!Q) return !1;
        await Q.initialized;
        let B = Q.client.checkGate(A);
        return JC9[A] = B, B
    });
    N60 = t1(async (A, Q) => {
        if (hX()) return Q;
        let B = ESA(A);
        if (!B) return Q;
        await B.initialized;
        let G = B.client.getExperiment(A);
        if (Object.keys(G.value).length === 0) return Q;
        return G.value
    });
    kx3 = t1(Zh);
    yx3 = t1(async (A) => {
        let Q = await tV(A),
            B = L1();
        B.cachedStatsigGates[A] = Q, d0(B)
    })
});

function DC9(A) {
    return A.replace(/[A-Z]/g, (Q) => `_${Q.toLowerCase()}`)
}
async function XK0() {
    if (zSA.length === 0) return;
    let A = [...zSA];
    zSA = [];
    try {
        await GQ.post(xx3, A, {
            headers: {
                "Content-Type": "application/json",
                "DD-API-KEY": vx3
            },
            timeout: hx3
        })
    } catch (Q) {
        e(Q instanceof Error ? Q : Error(String(Q)))
    }
}

function mx3() {
    if (lg) return;
    lg = setTimeout(() => {
        lg = null, XK0()
    }, bx3).unref()
}
async function FK0(A, Q) {
    if (!await dx3() || !gx3.has(A)) return;
    try {
        let G = await Up({
                model: Q.model
            }),
            {
                envContext: Z,
                ...I
            } = G,
            Y = {
                ...I,
                ...Z,
                ...Q
            };
        if (typeof Y.toolName === "string" && Y.toolName.startsWith("mcp__")) Y.toolName = "mcp";
        if (typeof Y.model === "string" && !Y.model.startsWith("claude-")) Y.model = "other";
        if (typeof Y.version === "string") Y.version = Y.version.replace(/^(\d+\.\d+\.\d+-dev\.\d{8})\.t\d+\.sha[a-f0-9]+$/, "$1");
        if (Y.status !== void 0 && Y.status !== null) {
            let F = String(Y.status);
            Y.http_status = F;
            let V = F.charAt(0);
            if (V >= "1" && V <= "5") Y.http_status_range = `${V}xx`;
            delete Y.status
        }
        let J = Y,
            X = {
                ddsource: "nodejs",
                ddtags: ux3.filter((F) => J[F] !== void 0 && J[F] !== null).map((F) => `${DC9(F)}:${J[F]}`).join(","),
                message: A,
                service: "claude-code",
                hostname: "claude-code",
                env: "external"
            };
        for (let [F, V] of Object.entries(Y))
            if (V !== void 0 && V !== null) X[DC9(F)] = V;
        if (zSA.push(X), zSA.length >= fx3) {
            if (lg) clearTimeout(lg), lg = null;
            await XK0()
        } else mx3()
    } catch (G) {
        e(G instanceof Error ? G : Error(String(G)))
    }
}
var xx3 = "https://http-intake.logs.datadoghq.com/api/v2/logs",
    vx3 = "pubbc113c03434b701e6e00977875d7382f",
    bx3 = 15000,
    fx3 = 100,
    hx3 = 5000,
    gx3, ux3, zSA, lg = null,
    dx3;
var HC9 = L(() => {
    w3();
    o2();
    u1();
    t7A();
    St();
    gx3 = new Set(["tengu_api_error", "tengu_api_success", "tengu_compact_failed", "tengu_model_fallback_triggered", "tengu_oauth_error", "tengu_oauth_success", "tengu_oauth_token_refresh_failure", "tengu_oauth_token_refresh_success", "tengu_query_error", "tengu_tool_use_error", "tengu_tool_use_success"]), ux3 = ["arch", "clientType", "errorType", "http_status_range", "http_status", "model", "platform", "provider", "toolName", "userType", "version", "versionBase"];
    zSA = [];
    dx3 = t1(async () => {
        if (hX()) return !1;
        try {
            let A = async () => {
                if (lg) clearTimeout(lg), lg = null;
                await XK0()
            };
            return process.on("beforeExit", A), !0
        } catch (A) {
            return e(A instanceof Error ? A : Error(String(A))), !1
        }
    })
});

function zC9() {
    if (VK0 !== void 0) return VK0;
    try {
        return L1().cachedStatsigGates[CC9] ?? !1
    } catch {
        return !1
    }
}

function UC9() {
    if (KK0 !== void 0) return KK0;
    try {
        return L1().cachedStatsigGates[EC9] ?? !1
    } catch {
        return !1
    }
}
async function $C9() {
    VK0 = await tV(CC9), KK0 = await tV(EC9)
}

function BA(A, Q) {
    let B = am1(A);