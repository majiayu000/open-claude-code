/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 7/14
 * Lines: 267541 - 269035 (1495 lines)
 * Original file: cli.js
 */

async function cAA(A = "latest") {
    try {
        if (!await ct1()) return "install_failed";
        let Q = await q3("npm", ["install", `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}@${A}`], {
            cwd: nl,
            maxBuffer: 1e6
        });
        if (Q.code !== 0) return e(Error(`Failed to install Claude CLI package: ${Q.stderr}`)), Q.code === 190 ? "in_progress" : "install_failed";
        let B = L1();
        return d0({
            ...B,
            installMethod: "local"
        }), "success"
    } catch (Q) {
        return e(Q instanceof Error ? Q : Error(String(Q))), "install_failed"
    }
}

function sl() {
    return OA().existsSync($LA(nl, "node_modules", ".bin", "claude"))
}

function pAA() {
    let A = process.env.SHELL || "";
    if (A.includes("zsh")) return "zsh";
    if (A.includes("bash")) return "bash";
    if (A.includes("fish")) return "fish";
    return "unknown"
}
async function S22() {
    let A = pAA(),
        Q = Nk(),
        B = "",
        G = A in Q ? Q[A] : null,
        Z = `alias claude="${il}"`;
    try {
        if (G) {
            let I = dAA(G);
            if (I)
                if (I.some((J) => XQ1.test(J)))
                    if (I.some((W) => W === Z)) B += `✓ Alias already exists in ${G}

`;
                    else B += `✓ Custom claude alias found in ${G}
`, B += `  Keeping your existing alias configuration

`;
            else NIA(G, [...I, Z, ""]), B += `✓ Added alias to ${G}
`, B += `To use it right away, run: source ${G}

`;
            else B += `To configure claude, add this line to your ${G}:
`, B += `  ${Z}
`, B += `
Then run: source ${G}

`
        } else B += `To configure claude, add this line to your shell config file:
`, B += `  ${Z}
`, B += `
Then run: source <your-config-file>

`
    } catch {
        if (G) B += `To add it to your PATH, add this line to your ${G}:
`, B += `  alias claude="${il}"
`, B += `
Then run: source ${G}

`;
        else B += `Could not identify startup file
`, B += `  alias claude="${il}"

`
    }
    if (!B) B += `To create an alias, add this line to your shell configuration file:
`, B += `  ${Z}

`, B += `or create a symlink:
`, B += `  mkdir -p ~/bin
`, B += `  ln -sf ${il} ~/bin/claude
`, B += `  # Make sure ~/bin is in your PATH
`;
    return B
}
async function _22() {
    try {
        let A = ["uninstall", "-g", "--force", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.PACKAGE_URL],
            Q = await ZQ("npm", A);
        if (Q.code !== 0) return e(Error(`Failed to uninstall global version: ${Q.stderr}`)), !1;
        return !0
    } catch (A) {
        return e(A instanceof Error ? A : Error(String(A))), !1
    }
}

function rl(A, Q) {
    BA("tengu_local_install_migration", {
        result: A,
        reason: Q
    })
}
var nl, j22, il;
var nT = L(() => {
    I6();
    u1();
    w0();
    jQ();
    o0();
    hQ();
    ULA();
    nl = $LA(PQ(), "local"), j22 = $LA(nl, "package.json"), il = $LA(nl, "claude")
});
import {
    constants as c45
} from "fs";
import {
    join as p45
} from "path";
import {
    accessSync as l45
} from "fs";
async function y22() {
    try {
        let A = await Zh("tengu_version_config", {
            minVersion: "0.0.0"
        });
        if (A.minVersion && k22.lt({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION, A.minVersion)) console.error(`
It looks like your version of Claude Code (${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION}) needs an update.
A newer version (${A.minVersion} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.
`), c8(1)
    } catch (A) {
        e(A)
    }
}

function lAA() {
    return p45(PQ(), ".update.lock")
}

function n45() {
    try {
        if (!OA().existsSync(PQ())) OA().mkdirSync(PQ());
        if (OA().existsSync(lAA())) {
            let A = OA().statSync(lAA());
            if (Date.now() - A.mtimeMs < i45) return !1;
            try {
                OA().unlinkSync(lAA())
            } catch (B) {
                return e(B), !1
            }
        }
        return OA().writeFileSync(lAA(), `${process.pid}`, {
            encoding: "utf8",
            flush: !1
        }), !0
    } catch (A) {
        return e(A), !1
    }
}

function a45() {
    try {
        if (OA().existsSync(lAA())) {
            if (OA().readFileSync(lAA(), {
                    encoding: "utf8"
                }) === `${process.pid}`) OA().unlinkSync(lAA())
        }
    } catch (A) {
        e(A)
    }
}
async function s45() {
    let A = m0.isRunningWithBun(),
        Q = null;
    if (A) Q = await ZQ("bun", ["pm", "bin", "-g"]);
    else Q = await ZQ("npm", ["-g", "config", "get", "prefix"]);
    if (Q.code !== 0) return e(Error(`Failed to check ${A?"bun":"npm"} permissions`)), null;
    return Q.stdout.trim()
}
async function pt1() {
    try {
        let A = await s45();
        if (!A) return {
            hasPermissions: !1,
            npmPrefix: null
        };
        let Q = !1;
        try {
            l45(A, c45.W_OK), Q = !0
        } catch {
            Q = !1
        }
        if (Q) return {
            hasPermissions: !0,
            npmPrefix: A
        };
        return e(new VQ1("Insufficient permissions for global npm install.")), {
            hasPermissions: !1,
            npmPrefix: A
        }
    } catch (A) {
        return e(A), {
            hasPermissions: !1,
            npmPrefix: null
        }
    }
}
async function iAA() {
    let A = s9();
    setTimeout(() => A.abort(), 5000);
    let Q = await ZQ("npm", ["view", `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}@latest`, "version", "--prefer-online"], {
        abortSignal: A.signal
    });
    if (Q.code !== 0) {
        if (g(`npm view failed with code ${Q.code}`), Q.stderr) g(`npm stderr: ${Q.stderr.trim()}`);
        else g("npm stderr: (empty)");
        if (Q.stdout) g(`npm stdout: ${Q.stdout.trim()}`);
        return null
    }
    return Q.stdout.trim()
}
async function wLA() {
    if (!n45()) return e(new VQ1("Another process is currently installing an update")), BA("tengu_auto_updater_lock_contention", {
        pid: process.pid,
        currentVersion: {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION
    }), "in_progress";
    try {
        if (r45(), !m0.isRunningWithBun() && m0.isNpmFromWindowsPath()) return e(Error("Windows NPM detected in WSL environment")), BA("tengu_auto_updater_windows_npm_in_wsl", {
            currentVersion: {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION
        }), console.error(`
Error: Windows NPM detected in WSL

You're running Claude Code in WSL but using the Windows NPM installation from /mnt/c/.
This configuration is not supported for updates.

To fix this issue:
  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm
  2. Make sure Linux NPM is in your PATH before the Windows version
  3. Try updating again with 'claude update'
`), "install_failed";
        let {
            hasPermissions: A
        } = await pt1();
        if (!A) return "no_permissions";
        let Q = m0.isRunningWithBun() ? "bun" : "npm",
            B = await ZQ(Q, ["install", "-g", {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.PACKAGE_URL]);
        if (B.code !== 0) return e(new VQ1(`Failed to install new version of claude: ${B.stdout} ${B.stderr}`)), "install_failed";
        let G = L1();
        return d0({
            ...G,
            installMethod: "global"
        }), "success"
    } finally {
        a45()
    }
}

function r45() {
    let A = Nk();
    for (let [, Q] of Object.entries(A)) try {
        let B = dAA(Q);
        if (!B) continue;
        let {
            filtered: G,
            hadAlias: Z
        } = FQ1(B);
        if (Z) NIA(Q, G), g(`Removed claude alias from ${Q}`)
    } catch (B) {
        g(`Failed to remove alias from ${Q}: ${B}`, {
            level: "error"
        })
    }
}
var k22, VQ1, i45 = 300000;
var LIA = L(() => {
    w0();
    O9();
    UZ();
    jQ();
    D0();
    f5();
    hQ();
    $Z();
    I6();
    o0();
    _J();
    u1();
    ULA();
    k22 = GA(WE(), 1);
    VQ1 = class VQ1 extends _KA {}
});

function KQ1() {
    let A = uQ();
    if (A !== "macos" && A !== "linux" && A !== "wsl") return !1;
    let Q = process.execPath || process.argv[0] || "";
    if (Q.includes("/Caskroom/")) return g(`Detected Homebrew cask installation: ${Q}`), !0;
    return !1
}
var MIA;
var DQ1 = L(() => {
    s5();
    D0();
    o2();
    MIA = t1(() => {
        if (KQ1()) return "homebrew";
        return "unknown"
    })
});
import {
    homedir as nAA
} from "os";
import {
    join as Lk,
    posix as qLA,
    win32 as NLA,
    delimiter as o45
} from "path";
async function Mk() {
    let A = process.argv[1] || "",
        Q = process.execPath || process.argv[0] || "";
    if (uQ() === "windows") A = A.split(NLA.sep).join(qLA.sep), Q = Q.split(NLA.sep).join(qLA.sep);
    let B = [A, Q],
        G = ["/build-ant/", "/build-external/", "/build-external-native/", "/build-ant-native/"];
    if (B.some((Y) => G.some((J) => Y.includes(J)))) return "development";
    if (HJ()) {
        if (KQ1()) return "package-manager";
        return "native"
    }
    if (al()) return "npm-local";
    if (["/usr/local/lib/node_modules", "/usr/lib/node_modules", "/opt/homebrew/lib/node_modules", "/opt/homebrew/bin", "/usr/local/bin", "/.nvm/versions/node/"].some((Y) => A.includes(Y))) return "npm-global";
    if (A.includes("/npm/") || A.includes("/nvm/")) return "npm-global";
    let I = await JKA("npm config get prefix");
    if (I && A.startsWith(I)) return "npm-global";
    return "unknown"
}
async function t45() {
    if (HJ()) {
        let A = await ZQ("which", ["claude"]);
        if (A.code === 0 && A.stdout) return A.stdout.trim();
        if (OA().existsSync(Lk(nAA(), ".local/bin/claude"))) return Lk(nAA(), ".local/bin/claude");
        return "native"
    }
    try {
        return process.argv[0] || "unknown"
    } catch {
        return "unknown"
    }
}

function lt1() {
    try {
        if (HJ()) return process.execPath || "unknown";
        return process.argv[1] || "unknown"
    } catch {
        return "unknown"
    }
}
async function e45() {
    let A = OA(),
        Q = [],
        B = Lk(nAA(), ".claude", "local");
    if (sl()) Q.push({
        type: "npm-local",
        path: B
    });
    let G = ["@anthropic-ai/claude-code"];
    if ({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.PACKAGE_URL && {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.PACKAGE_URL !== "@anthropic-ai/claude-code") G.push({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.PACKAGE_URL);
    let Z = await ZQ("npm", ["-g", "config", "get", "prefix"]);
    if (Z.code === 0 && Z.stdout) {
        let J = Z.stdout.trim(),
            W = uQ() === "windows",
            X = W ? Lk(J, "claude") : Lk(J, "bin", "claude");
        if (A.existsSync(X)) {
            let F = !1;
            try {
                if (A.realpathSync(X).includes("/Caskroom/")) F = KQ1()
            } catch {}
            if (!F) Q.push({
                type: "npm-global",
                path: X
            })
        } else
            for (let F of G) {
                let V = W ? Lk(J, "node_modules", F) : Lk(J, "lib", "node_modules", F);
                if (A.existsSync(V)) Q.push({
                    type: "npm-global-orphan",
                    path: V
                })
            }
    }
    let I = Lk(nAA(), ".local", "bin", "claude");
    if (A.existsSync(I)) Q.push({
        type: "native",
        path: I
    });
    if (L1().installMethod === "native") {
        let J = Lk(nAA(), ".local", "share", "claude");
        if (A.existsSync(J) && !Q.some((W) => W.type === "native")) Q.push({
            type: "native",
            path: J
        })
    }
    return Q
}

function A85(A) {
    let Q = [],
        B = L1();
    if (A === "development") return Q;
    if (A === "native") {
        let Y = (process.env.PATH || "").split(o45),
            J = nAA(),
            W = Lk(J, ".local", "bin"),
            X = W;
        if (uQ() === "windows") X = W.split(NLA.sep).join(qLA.sep);
        if (!Y.some((V) => {
                let K = V;
                if (uQ() === "windows") K = V.split(NLA.sep).join(qLA.sep);
                return K === X || V === "~/.local/bin" || V === "$HOME/.local/bin"
            }))
            if (uQ() === "windows") {
                let K = W.split(qLA.sep).join(NLA.sep);
                Q.push({
                    issue: `Native installation exists but ${K} is not in your PATH`,
                    fix: "Add it by opening: System Properties → Environment Variables → Edit User PATH → New → Add the path above. Then restart your terminal."
                })
            } else {
                let K = pAA(),
                    H = Nk()[K],
                    C = H ? H.replace(nAA(), "~") : "your shell config file";
                Q.push({
                    issue: "Native installation exists but ~/.local/bin is not in your PATH",
                    fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${C} then open a new terminal or run: source ${C}`
                })
            }
    }
    if (!V0(process.env.DISABLE_INSTALLATION_CHECKS)) {
        if (A === "npm-local" && B.installMethod !== "local") Q.push({
            issue: `Running from local installation but config install method is '${B.installMethod}'`,
            fix: "Run claude migrate-installer to fix configuration"
        });
        if (A === "native" && B.installMethod !== "native") Q.push({
            issue: `Running native installation but config install method is '${B.installMethod}'`,
            fix: "Run claude install to update configuration"
        })
    }
    if (A === "npm-global" && sl()) Q.push({
        issue: "Local installation exists but not being used",
        fix: "Consider using local installation: claude migrate-installer"
    });
    let G = dt1(),
        Z = P22();
    if (A === "npm-local") {
        if (G && !Z) Q.push({
            issue: "Local installation not accessible",
            fix: `Alias exists but points to invalid target: ${G}. Update alias: alias claude="~/.claude/local/claude"`
        });
        else if (!G) Q.push({
            issue: "Local installation not accessible",
            fix: 'Create alias: alias claude="~/.claude/local/claude"'
        })
    }
    return Q
}

function Q85() {
    if (uQ() !== "linux") return [];
    let A = [],
        Q = lQ.getLinuxGlobPatternWarnings();
    if (Q.length > 0) {
        let B = Q.slice(0, 3).join(", "),
            G = Q.length - 3,
            Z = G > 0 ? `${B} (${G} more)` : B;
        A.push({
            issue: "Glob patterns in sandbox permission rules are not fully supported on Linux",
            fix: `Found ${Q.length} pattern(s): ${Z}. On Linux, glob patterns in Edit/Read rules will be ignored.`
        })
    }
    return A
}
async function OIA() {
    let A = await Mk(),
        Q = {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION ? {
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.VERSION : "unknown",
        B = await t45(),
        G = lt1(),
        Z = await e45(),
        I = A85(A);
    if (I.push(...Q85()), A === "native") {
        let D = Z.filter((C) => C.type === "npm-global" || C.type === "npm-global-orphan" || C.type === "npm-local"),
            H = uQ() === "windows";
        for (let C of D)
            if (C.type === "npm-global") {
                let E = "npm -g uninstall @anthropic-ai/claude-code";
                if ({
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://docs.claude.com/s/claude-code",
                        VERSION: "2.0.57",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                    }.PACKAGE_URL && {
                        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                        PACKAGE_URL: "@anthropic-ai/claude-code",
                        README_URL: "https://docs.claude.com/s/claude-code",
                        VERSION: "2.0.57",
                        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                    }.PACKAGE_URL !== "@anthropic-ai/claude-code") E += ` && npm -g uninstall ${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.PACKAGE_URL}`;
                I.push({
                    issue: `Leftover npm global installation at ${C.path}`,
                    fix: `Run: ${E}`
                })
            } else if (C.type === "npm-global-orphan") I.push({
            issue: `Orphaned npm global package at ${C.path}`,
            fix: H ? `Run: rmdir /s /q "${C.path}"` : `Run: rm -rf ${C.path}`
        });
        else if (C.type === "npm-local") I.push({
            issue: `Leftover npm local installation at ${C.path}`,
            fix: H ? `Run: rmdir /s /q "${C.path}"` : `Run: rm -rf ${C.path}`
        })
    }
    let J = L1().installMethod || "not set",
        W = null;
    if (A === "npm-global") {
        if (W = (await pt1()).hasPermissions, !W && !Rb()) I.push({
            issue: "Insufficient permissions for auto-updates",
            fix: "Do one of: (1) Re-install node without sudo, (2) Use `claude migrate-installer` to relocate claude, or (3) Use `claude install` for native installation"
        })
    }
    let X = Rv0(),
        F = {
            working: X.working ?? !0,
            mode: X.mode,
            systemPath: X.mode === "system" ? X.path : null
        },
        V = A === "package-manager" ? MIA() : void 0;
    return {
        installationType: A,
        version: Q,
        installationPath: B,
        invokedBinary: G,
        configInstallMethod: J,
        autoUpdates: Rb() === !0 ? "false" : "default (true)",
        hasUpdatePermissions: W,
        multipleInstallations: Z,
        warnings: I,
        packageManager: V,
        ripgrepStatus: F
    }
}
var Ih = L(() => {
    o0();
    R2();
    nT();
    jQ();
    LIA();
    ULA();
    s5();
    I6();
    cj();
    MJ();
    hQ();
    DQ1()
});
var st1 = {};
pG(st1, {
    parseCommand: () => F85,
    extractCommandArguments: () => K85,
    ensureInitialized: () => f22
});
import {
    fileURLToPath as B85
} from "url";
import {
    dirname as x22,
    join as v22
} from "path";

function J85() {
    let A = x22(B85(import.meta.url));
    return x22(lt1())
}

function W85(A) {
    if (!HJ() || typeof Bun > "u" || !Bun.embeddedFiles) return null;
    for (let Q of Bun.embeddedFiles) {
        let B = Q.name;
        if (B && B.endsWith(A)) return Q
    }
    return null
}
async function b22(A) {
    let Q = W85(A);
    if (!Q) return null;
    let B = await Q.arrayBuffer();
    return new Uint8Array(B)
}
async function X85() {
    let A = OA(),
        Q = null,
        B = null,
        G = null;
    if (HJ()) {
        if (Q = await b22("tree-sitter.wasm"), B = await b22("tree-sitter-bash.wasm"), Q && B) G = "embedded"
    }
    if (!Q || !B) {
        let Z = J85(),
            I = !1,
            Y = v22(Z, "tree-sitter.wasm"),
            J = v22(Z, "tree-sitter-bash.wasm");
        if (!A.existsSync(Y) || !A.existsSync(J)) {
            g("tree-sitter: WASM files not found"), BA("tengu_tree_sitter_load", {
                success: !1
            });
            return
        }
        Q = A.readFileBytesSync(Y), B = A.readFileBytesSync(J), G = "disk"
    }
    if (!Q || !B) {
        g("tree-sitter: failed to get WASM bytes"), BA("tengu_tree_sitter_load", {
            success: !1
        });
        return
    }
    await ut1.init({
        wasmBinary: Q
    }), HQ1 = new ut1, at1 = await gt1.load(B), HQ1.setLanguage(at1), g(`tree-sitter: loaded from ${G}`), BA("tengu_tree_sitter_load", {
        success: !0,
        from_embedded: G === "embedded"
    })
}
async function f22() {
    if (!nt1) nt1 = X85();
    await nt1
}
async function F85(A) {
    if (await f22(), !A || A.length > G85 || !HQ1 || !at1) return null;
    try {
        let Q = HQ1.parse(A),
            B = Q?.rootNode;
        if (!B) return null;
        let G = h22(B),
            Z = V85(G);
        return {
            tree: Q,
            rootNode: B,
            envVars: Z,
            commandNode: G,
            originalCommand: A
        }
    } catch {
        return null
    }
}

function h22(A) {
    let {
        type: Q,
        children: B,
        parent: G
    } = A;
    if (it1.has(Q)) return A;
    if (Q === "variable_assignment" && G) return G.children.find((Z) => Z && it1.has(Z.type) && Z.startIndex > A.startIndex) ?? null;
    if (Q === "pipeline" || Q === "redirected_statement") return B.find((Z) => Z && it1.has(Z.type)) ?? null;
    for (let Z of B) {
        let I = Z && h22(Z);
        if (I) return I
    }
    return null
}

function V85(A) {
    if (!A || A.type !== "command") return [];
    let Q = [];
    for (let B of A.children) {
        if (!B) continue;
        if (B.type === "variable_assignment") Q.push(B.text);
        else if (B.type === "command_name" || B.type === "word") break
    }
    return Q
}

function K85(A) {
    if (A.type === "declaration_command") {
        let G = A.children[0];
        return G && Z85.has(G.text) ? [G.text] : []
    }
    let Q = [],
        B = !1;
    for (let G of A.children) {
        if (!G || G.type === "variable_assignment") continue;
        if (G.type === "command_name" || !B && G.type === "word") {
            B = !0, Q.push(G.text);
            continue
        }
        if (I85.has(G.type)) Q.push(D85(G.text));
        else if (Y85.has(G.type)) break
    }
    return Q
}

function D85(A) {
    return A.length >= 2 && (A[0] === '"' && A.at(-1) === '"' || A[0] === "'" && A.at(-1) === "'") ? A.slice(1, -1) : A
}
var G85 = 1e4,
    Z85, I85, Y85, it1, HQ1 = null,
    at1 = null,
    nt1 = null;
var rt1 = L(() => {
    T22();
    o0();
    Ih();
    w0();
    D0();
    Z85 = new Set(["export", "declare", "typeset", "readonly", "local", "unset", "unsetenv"]), I85 = new Set(["word", "string", "raw_string", "number"]), Y85 = new Set(["command_substitution", "process_substitution"]), it1 = new Set(["command", "declaration_command"])
});
class g22 {
    originalCommand;
    constructor(A) {
        this.originalCommand = A
    }
    toString() {
        return this.originalCommand
    }
    getPipeSegments() {
        try {
            let A = ot1(this.originalCommand),
                Q = [],
                B = [];
            for (let G of A)
                if (G === "|") {
                    if (B.length > 0) Q.push(B.join(" ")), B = []
                } else B.push(G);
            if (B.length > 0) Q.push(B.join(" "));
            return Q.length > 0 ? Q : [this.originalCommand]
        } catch {
            return [this.originalCommand]
        }
    }
    withoutOutputRedirections() {
        if (!this.originalCommand.includes(">")) return this.originalCommand;
        let {
            commandWithoutRedirections: A,
            redirections: Q
        } = aT(this.originalCommand);
        return Q.length > 0 ? A : this.originalCommand
    }
    getOutputRedirections() {
        let {
            redirections: A
        } = aT(this.originalCommand);
        return A
    }
}
var H85, CQ1;
var u22 = L(() => {
    o2();
    gU();
    H85 = t1(async () => {
        try {
            let {
                parseCommand: A
            } = await Promise.resolve().then(() => (rt1(), st1));
            if (!await A("echo test")) return null;
            return class {
                originalCommand;
                rootNode;
                constructor(G, Z) {
                    this.originalCommand = G, this.rootNode = Z
                }
                toString() {
                    return this.originalCommand
                }
                getPipeSegments() {
                    let G = [];
                    if (this.visitNodes(this.rootNode, (J) => {
                            if (J.type === "pipeline") {
                                let W = J.children;
                                for (let X of W)
                                    if (X && X.type === "|") G.push(X.startIndex)
                            }
                        }), G.length === 0) return [this.originalCommand];
                    let Z = [],
                        I = 0;
                    for (let J of G) {
                        let W = this.originalCommand.slice(I, J).trim();
                        if (W) Z.push(W);
                        I = J + 1
                    }
                    let Y = this.originalCommand.slice(I).trim();
                    if (Y) Z.push(Y);
                    return Z
                }
                withoutOutputRedirections() {
                    let G = this.findOutputRedirectionNodes();
                    if (G.length === 0) return this.originalCommand;
                    G.sort((I, Y) => Y.startIndex - I.startIndex);
                    let Z = this.originalCommand;
                    for (let I of G) Z = Z.slice(0, I.startIndex) + Z.slice(I.endIndex);
                    return Z.trim().replace(/\s+/g, " ")
                }
                getOutputRedirections() {
                    return this.findOutputRedirectionNodes().map(({
                        target: G,
                        operator: Z
                    }) => ({
                        target: G,
                        operator: Z
                    }))
                }
                findOutputRedirectionNodes() {
                    let G = [];
                    return this.visitNodes(this.rootNode, (Z) => {
                        if (Z.type === "file_redirect") {
                            let I = Z.children,
                                Y = I.find((W) => W && (W.type === ">" || W.type === ">>")),
                                J = I.find((W) => W && W.type === "word");
                            if (Y && J) G.push({
                                startIndex: Z.startIndex,
                                endIndex: Z.endIndex,
                                target: J.text,
                                operator: Y.type
                            })
                        }
                    }), G
                }
                visitNodes(G, Z) {
                    let I = G;
                    Z(I);
                    for (let Y of I.children)
                        if (Y) this.visitNodes(Y, Z)
                }
            }
        } catch {
            return null
        }
    }), CQ1 = {
        async parse(A) {
            if (!A) return null;
            let Q = await H85();
            if (Q) try {
                let {
                    parseCommand: B
                } = await Promise.resolve().then(() => (rt1(), st1)), G = await B(A);
                if (G) return new Q(A, G.rootNode)
            } catch {}
            return new g22(A)
        }
    }
});
async function C85(A, Q, B) {
    if (Q.filter((X) => {
            let F = X.trim();
            return F.startsWith("cd ") || F === "cd"
        }).length > 1) {
        let X = {
            type: "other",
            reason: "Multiple directory changes in one command require approval for clarity"
        };
        return {
            behavior: "ask",
            decisionReason: X,
            message: PF(X9.name, X)
        }
    }
    let Z = new Map;
    for (let X of Q) {
        let F = X.trim();
        if (!F) continue;
        let V = await B({
            ...A,
            command: F
        });
        Z.set(F, V)
    }
    let I = Array.from(Z.entries()).find(([, X]) => X.behavior === "deny");
    if (I) {
        let [X, F] = I;
        return {
            behavior: "deny",
            message: F.behavior === "deny" ? F.message : `Permission denied for: ${X}`,
            decisionReason: {
                type: "subcommandResults",
                reasons: Z
            }
        }
    }
    if (Array.from(Z.values()).every((X) => X.behavior === "allow")) return {
        behavior: "allow",
        updatedInput: A,
        decisionReason: {
            type: "subcommandResults",
            reasons: Z
        }
    };
    let J = [];
    for (let [, X] of Z)
        if (X.behavior !== "allow" && "suggestions" in X && X.suggestions) J.push(...X.suggestions);
    let W = {
        type: "subcommandResults",
        reasons: Z
    };
    return {
        behavior: "ask",
        message: PF(X9.name, W),
        decisionReason: W,
        suggestions: J.length > 0 ? J : void 0
    }
}
async function E85(A) {
    if (!A.includes(">")) return A;
    return (await CQ1.parse(A))?.withoutOutputRedirections() ?? A
}
async function m22(A, Q) {
    if (c22(A.command)) {
        let I = cl(A.command),
            Y = {
                type: "other",
                reason: I.behavior === "ask" && I.message ? I.message : "This command uses shell operators that require approval for safety"
            };
        return {
            behavior: "ask",
            message: PF(X9.name, Y),
            decisionReason: Y
        }
    }
    let B = await CQ1.parse(A.command);
    if (!B) return {
        behavior: "passthrough",
        message: "Failed to parse command"
    };
    let G = B.getPipeSegments();
    if (G.length <= 1) return {
        behavior: "passthrough",
        message: "No pipes found in command"
    };
    let Z = await Promise.all(G.map((I) => E85(I)));
    return C85(A, Z, Q)
}
var d22 = L(() => {
    nV();
    gU();
    aG();
    IQ1();
    u22()
});
import {
    isAbsolute as EQ1,
    resolve as zQ1,
    dirname as z85
} from "path";
import {
    homedir as Ae1
} from "os";

function i22(A) {
    let Q = A.length;
    if (Q <= tt1) return A.map((G) => `'${G}'`).join(", ");
    return `${A.slice(0,tt1).map((G)=>`'${G}'`).join(", ")}, and ${Q-tt1} more`
}

function U85(A) {
    let Q = A.match(l22);
    if (!Q || Q.index === void 0) return A;
    let B = A.substring(0, Q.index),
        G = B.lastIndexOf("/");
    if (G === -1) return ".";
    return B.substring(0, G) || "/"
}

function et1(A, Q, B) {
    let G = B === "read" ? "read" : "edit",
        Z = TD(A, Q, G, "deny");
    if (Z !== null) return {
        allowed: !1,
        decisionReason: {
            type: "rule",
            rule: Z
        }
    };
    if (B !== "read") {
        let Y = Ge1(A);
        if (!Y.safe) return {
            allowed: !1,
            decisionReason: {
                type: "other",
                reason: Y.message
            }
        }
    }
    if (qT(A, Q)) return {
        allowed: !0
    };
    let I = TD(A, Q, G, "allow");
    if (I !== null) return {
        allowed: !0,
        decisionReason: {
            type: "rule",
            rule: I
        }
    };
    return {
        allowed: !1
    }
}

function $85(A, Q, B, G) {
    if (M9A(A)) {
        let W = EQ1(A) ? A : zQ1(Q, A),
            {
                resolvedPath: X
            } = kK(OA(), W),
            F = et1(X, B, G);
        return {
            allowed: F.allowed,
            resolvedPath: X,
            decisionReason: F.decisionReason
        }
    }
    let Z = U85(A),
        I = EQ1(Z) ? Z : zQ1(Q, Z),
        {
            resolvedPath: Y
        } = kK(OA(), I),
        J = et1(Y, B, G);
    return {
        allowed: J.allowed,
        resolvedPath: Y,
        decisionReason: J.decisionReason
    }
}

function n22(A) {
    if (A === "~" || A.startsWith("~/")) return Ae1() + A.slice(1);
    return A
}

function w85(A) {
    if (A === "*" || A.endsWith("/*")) return !0;
    let Q = A === "/" ? A : A.replace(/\/$/, "");
    if (Q === "/") return !0;
    let B = Ae1();
    if (Q === B) return !0;
    if (z85(Q) === "/") return !0;
    return !1
}

function a22(A, Q, B, G) {
    let Z = n22(A.replace(/^['"]|['"]$/g, ""));
    if (Z.includes("$") || Z.includes("%")) return {
        allowed: !1,
        resolvedPath: Z,
        decisionReason: {
            type: "other",
            reason: "Shell expansion syntax in paths requires manual approval"
        }
    };
    if (l22.test(Z)) {
        if (G === "write" || G === "create") return {
            allowed: !1,
            resolvedPath: Z,
            decisionReason: {
                type: "other",
                reason: "Glob patterns are not allowed in write operations. Please specify an exact file path."
            }
        };
        return $85(Z, Q, B, G)
    }
    let I = EQ1(Z) ? Z : zQ1(Q, Z),
        {
            resolvedPath: Y
        } = kK(OA(), I),
        J = et1(Y, B, G);
    return {
        allowed: J.allowed,
        resolvedPath: Y,
        decisionReason: J.decisionReason
    }
}

function q85(A, Q, B) {
    let G = Qe1[A],
        Z = G(Q);
    for (let I of Z) {
        let Y = n22(I.replace(/^['"]|['"]$/g, "")),
            J = EQ1(Y) ? Y : zQ1(B, Y);
        if (w85(J)) return {
            behavior: "ask",
            message: `Dangerous ${A} operation detected: '${J}'

This command would remove a critical system directory. This requires explicit approval and cannot be auto-allowed by permission rules.`,
            decisionReason: {
                type: "other",
                reason: `Dangerous ${A} operation on critical path: ${J}`
            },
            suggestions: []
        }
    }
    return {
        behavior: "passthrough",
        message: `No dangerous removals detected for ${A} command`
    }
}

function p22(A, Q, B = []) {
    let G = [],
        Z = !1;
    for (let I = 0; I < A.length; I++) {
        let Y = A[I];
        if (Y === void 0 || Y === null) continue;
        if (Y.startsWith("-")) {
            let J = Y.split("=")[0];
            if (J && ["-e", "--regexp", "-f", "--file"].includes(J)) Z = !0;
            if (J && Q.has(J) && !Y.includes("=")) I++;
            continue
        }
        if (!Z) {
            Z = !0;
            continue
        }
        G.push(Y)
    }
    return G.length > 0 ? G : B
}

function O85(A, Q, B, G, Z) {
    let I = Qe1[A],
        Y = I(Q),
        J = s22[A],
        W = M85[A];
    if (W && !W(Q)) return {
        behavior: "ask",
        message: `${A} with flags requires manual approval to ensure path safety. For security, Claude Code cannot automatically validate ${A} commands that use flags, as some flags like --target-directory=PATH can bypass path validation.`,
        decisionReason: {
            type: "other",
            reason: `${A} command with flags requires manual approval`
        }
    };
    if (Z && J !== "read") return {
        behavior: "ask",
        message: "Commands that change directories and perform write operations require explicit approval to ensure paths are evaluated correctly. For security, Claude Code cannot automatically determine the final working directory when 'cd' is used in compound commands.",
        decisionReason: {
            type: "other",
            reason: "Compound command contains cd with write operation - manual approval required to prevent path resolution bypass"
        }
    };
    for (let X of Y) {
        let {
            allowed: F,
            resolvedPath: V,
            decisionReason: K
        } = a22(X, B, G, J);
        if (!F) {
            let D = Array.from(RIA(G)),
                H = i22(D),
                C = K?.type === "other" ? K.reason : `${A} in '${V}' was blocked. For security, Claude Code may only ${L85[A]} the allowed working directories for this session: ${H}.`;
            if (K?.type === "rule") return {
                behavior: "deny",
                message: C,
                decisionReason: K
            };
            return {
                behavior: "ask",
                message: C,
                blockedPath: V,
                decisionReason: K
            }
        }
    }
    return {
        behavior: "passthrough",
        message: `Path validation passed for ${A} command`
    }
}

function R85(A) {
    return (Q, B, G, Z) => {
        let I = O85(A, Q, B, G, Z);
        if (I.behavior === "deny") return I;
        if (A === "rm" || A === "rmdir") {
            let Y = q85(A, Q, B);
            if (Y.behavior !== "passthrough") return Y
        }
        if (I.behavior === "passthrough") return I;
        if (I.behavior === "ask") {
            let Y = s22[A],
                J = [];
            if (I.blockedPath)
                if (Y === "read") {
                    let W = Qv(I.blockedPath),
                        X = FvA(W, "session");
                    if (X) J.push(X)
                } else J.push({
                    type: "addDirectories",
                    directories: [Qv(I.blockedPath)],
                    destination: "session"
                });
            if (Y === "write" || Y === "create") J.push({
                type: "setMode",
                mode: "acceptEdits",
                destination: "session"
            });
            I.suggestions = J
        }
        return I
    }
}

function T85(A) {
    let Q = IW(A, (Z) => `$${Z}`);
    if (!Q.success) return [];
    let B = Q.tokens,
        G = [];
    for (let Z of B)
        if (typeof Z === "string") G.push(Z);
        else if (typeof Z === "object" && Z !== null && "op" in Z && Z.op === "glob" && "pattern" in Z) G.push(String(Z.pattern));
    return G
}

function P85(A, Q, B, G) {
    let Z = T85(A);
    if (Z.length === 0) return {
        behavior: "passthrough",
        message: "Empty command - no paths to validate"
    };
    let [I, ...Y] = Z;
    if (!I || !N85.includes(I)) return {
        behavior: "passthrough",
        message: `Command '${I}' is not a path-restricted command`
    };
    return R85(I)(Y, Q, B, G)
}

function j85(A, Q, B, G) {
    if (G && A.length > 0) return {
        behavior: "ask",
        message: "Commands that change directories and write via output redirection require explicit approval to ensure paths are evaluated correctly. For security, Claude Code cannot automatically determine the final working directory when 'cd' is used in compound commands.",
        decisionReason: {
            type: "other",
            reason: "Compound command contains cd with output redirection - manual approval required to prevent path resolution bypass"
        }
    };
    for (let {
            target: Z
        }
        of A) {
        if (Z === "/dev/null") continue;
        let {
            allowed: I,
            resolvedPath: Y,
            decisionReason: J
        } = a22(Z, Q, B, "create");
        if (!I) {
            let W = Array.from(RIA(B)),
                X = i22(W),
                F = J?.type === "other" ? J.reason : J?.type === "rule" ? `Output redirection to '${Y}' was blocked by a deny rule.` : `Output redirection to '${Y}' was blocked. For security, Claude Code may only write to files in the allowed working directories for this session: ${X}.`;
            if (J?.type === "rule") return {
                behavior: "deny",
                message: F,
                decisionReason: J
            };
            return {
                behavior: "ask",
                message: F,
                blockedPath: Y,
                suggestions: [{
                    type: "addDirectories",
                    directories: [Qv(Y)],
                    destination: "session"
                }]
            }
        }
    }
    return {
        behavior: "passthrough",
        message: "No unsafe redirections found"
    }
}

function Be1(A, Q, B, G) {
    if (/(?:>>?)\s*\S*[$%]/.test(A.command)) return {
        behavior: "ask",
        message: "Shell expansion syntax in paths requires manual approval",
        decisionReason: {
            type: "other",
            reason: "Shell expansion syntax in paths requires manual approval"
        }
    };
    let {
        redirections: Z
    } = aT(A.command), I = j85(Z, Q, B, G);
    if (I.behavior !== "passthrough") return I;
    let Y = aV(A.command);
    for (let J of Y) {
        let W = P85(J, Q, B, G);
        if (W.behavior === "ask" || W.behavior === "deny") return W
    }
    return {
        behavior: "passthrough",
        message: "All path commands validated successfully"
    }
}
var tt1 = 5,
    l22, hZ = (A) => A.filter((Q) => !Q?.startsWith("-")),
    Qe1, N85, L85, s22, M85;
var r22 = L(() => {
    o0();
    _Y();
    hK();
    jI();
    gU();
    KH();
    l22 = /[*?[\]{}]/;
    Qe1 = {
        cd: (A) => A.length === 0 ? [Ae1()] : [A.join(" ")],
        ls: (A) => {
            let Q = hZ(A);
            return Q.length > 0 ? Q : ["."]
        },
        find: (A) => {
            let Q = [],
                B = new Set(["-newer", "-anewer", "-cnewer", "-mnewer", "-samefile", "-path", "-wholename", "-ilname", "-lname", "-ipath", "-iwholename"]),
                G = /^-newer[acmBt][acmtB]$/,
                Z = !1;
            for (let I = 0; I < A.length; I++) {
                let Y = A[I];
                if (!Y) continue;
                if (Y.startsWith("-")) {
                    if (["-H", "-L", "-P"].includes(Y)) continue;
                    if (Z = !0, B.has(Y) || G.test(Y)) {
                        let J = A[I + 1];
                        if (J) Q.push(J), I++
                    }
                    continue
                }
                if (!Z) Q.push(Y)
            }
            return Q.length > 0 ? Q : ["."]
        },
        mkdir: hZ,
        touch: hZ,
        rm: hZ,
        rmdir: hZ,
        mv: hZ,
        cp: hZ,
        cat: hZ,
        head: hZ,
        tail: hZ,
        sort: hZ,
        uniq: hZ,
        wc: hZ,
        cut: hZ,
        paste: hZ,
        column: hZ,
        file: hZ,
        stat: hZ,
        diff: hZ,
        awk: hZ,
        strings: hZ,
        hexdump: hZ,
        od: hZ,
        base64: hZ,
        nl: hZ,
        tr: (A) => {
            let Q = A.some((G) => G === "-d" || G === "--delete" || G.startsWith("-") && G.includes("d"));
            return hZ(A).slice(Q ? 1 : 2)
        },
        grep: (A) => {
            let B = p22(A, new Set(["-e", "--regexp", "-f", "--file", "--exclude", "--include", "--exclude-dir", "--include-dir", "-m", "--max-count", "-A", "--after-context", "-B", "--before-context", "-C", "--context"]));
            if (B.length === 0 && A.some((G) => ["-r", "-R", "--recursive"].includes(G))) return ["."];
            return B
        },
        rg: (A) => {
            return p22(A, new Set(["-e", "--regexp", "-f", "--file", "-t", "--type", "-T", "--type-not", "-g", "--glob", "-m", "--max-count", "--max-depth", "-r", "--replace", "-A", "--after-context", "-B", "--before-context", "-C", "--context"]), ["."])
        },
        sed: (A) => {
            let Q = [],
                B = !1,
                G = !1;
            for (let Z = 0; Z < A.length; Z++) {
                if (B) {
                    B = !1;
                    continue
                }
                let I = A[Z];
                if (!I) continue;
                if (I.startsWith("-")) {
                    if (["-f", "--file"].includes(I)) {
                        let Y = A[Z + 1];
                        if (Y) Q.push(Y), B = !0;
                        G = !0
                    } else if (["-e", "--expression"].includes(I)) B = !0, G = !0;
                    else if (I.includes("e") || I.includes("f")) G = !0;
                    continue
                }
                if (!G) {
                    G = !0;
                    continue
                }
                Q.push(I)
            }
            return Q
        },
        jq: (A) => {
            let Q = [],
                B = new Set(["-e", "--expression", "-f", "--from-file", "--arg", "--argjson", "--slurpfile", "--rawfile", "--args", "--jsonargs", "-L", "--library-path", "--indent", "--tab"]),
                G = !1;
            for (let Z = 0; Z < A.length; Z++) {
                let I = A[Z];
                if (I === void 0 || I === null) continue;
                if (I.startsWith("-")) {
                    let Y = I.split("=")[0];
                    if (Y && ["-e", "--expression"].includes(Y)) G = !0;
                    if (Y && B.has(Y) && !I.includes("=")) Z++;
                    continue
                }
                if (!G) {
                    G = !0;
                    continue
                }
                Q.push(I)
            }
            return Q
        },
        git: (A) => {
            if (A.length >= 1 && A[0] === "diff") {
                if (A.includes("--no-index")) return A.slice(1).filter((G) => !G?.startsWith("-")).slice(0, 2)
            }
            return []
        }