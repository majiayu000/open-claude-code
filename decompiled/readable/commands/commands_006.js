/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: commands_006.js
 * 处理时间: 2025-12-09T03:41:37.123Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: commands
 * File: 6/8
 * Lines: 370833 - 372332 (1500 lines)
 * Original file: cli.js
 */

                throw X
            }
        } else {
            if (!B.existsSync(Q)) throw Error(`Source file does not exist: TextComponent{Q}`);
            B.copyFileSync(Q, A)
        }
        return !0
    } catch (J) {
        return e(Error(`Failed to copy executable from TextComponent{Q} to TextComponent{A}: TextComponent{J}`)), !1
    }
    let I = _y(A);
    if (!B.existsSync(I)) try {
        B.mkdirSync(I), g(`Created directory TextComponent{I} for symlink`)
    } catch (J) {
        return e(Error(`Failed to create directory TextComponent{I}: TextComponent{J}`)), !1
    }
    try {
        if (B.existsSync(A)) {
            try {
                let J = B.readlinkSync(A),
                    W = ky(_y(A), J),
                    X = ky(Q);
                if (W === X) return !1
            } catch {}
            B.unlinkSync(A)
        }
    } catch (J) {
        e(Error(`Failed to check/remove existing symlink: TextComponent{J}`))
    }
    let Y = `TextComponent{A}.tmp.TextComponent{process.pid}.TextComponent{Date.now()}`;
    try {
        return B.symlinkSync(Q, Y), B.renameSync(Y, A), !0
    } catch (J) {
        try {
            if (B.existsSync(Y)) B.unlinkSync(Y)
        } catch {}
        return e(Error(`Failed to create symlink from TextComponent{A} to TextComponent{Q}: TextComponent{J}`)), !1
    }
}
async function x0A() {
    if (L1().installMethod === "native") return !0;
    return await tV("tengu_native_installation")
}
async function yy(A = !1) {
    if (parseBoolean(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
    let Q = await Mk(),
        B = L1();
    if (!(A || Q === "native" || B.installMethod === "native")) return [];
    let Z = OA(),
        I = y0A(),
        Y = [],
        J = _y(I.executable),
        W = ky(J),
        F = Sy().startsWith("win32");
    if (!Z.existsSync(J)) Y.push({
        message: `installMethod is native, but directory TextComponent{J} does not exist`,
        userActionRequired: !0,
        type: "error"
    });
    if (!Z.existsSync(I.executable)) Y.push({
        message: `installMethod is native, but claude command not found at TextComponent{I.executable}`,
        userActionRequired: !0,
        type: "error"
    });
    else if (!F) try {
        let K = Z.readlinkSync(I.executable),
            D = ky(_y(I.executable), K);
        if (!Z.existsSync(D)) Y.push({
            message: `Claude symlink points to non-existent file: TextComponent{K}`,
            userActionRequired: !0,
            type: "error"
        });
        else if (!uWA(D)) Y.push({
            message: `Claude symlink points to invalid binary: TextComponent{K}`,
            userActionRequired: !0,
            type: "error"
        })
    } catch {
        if (!uWA(I.executable)) Y.push({
            message: `TextComponent{I.executable} exists but is not a valid Claude binary`,
            userActionRequired: !0,
            type: "error"
        })
    } else if (!uWA(I.executable)) Y.push({
        message: `TextComponent{I.executable} exists but is not a valid Claude binary`,
        userActionRequired: !0,
        type: "error"
    });
    if (!(process.env.PATH || "").split(Cr5).some((K) => {
            try {
                let D = ky(K);
                if (F) return D.toLowerCase() === W.toLowerCase();
                return D === W
            } catch {
                return !1
            }
        }))
        if (F) {
            let K = J.replace(/\//g, "\\");
            Y.push({
                message: `Native installation exists but TextComponent{K} is not in your PATH. Add it by opening: System Properties → Environment Variables → Edit User PATH → New → Add the path above. Then restart your terminal.`,
                userActionRequired: !0,
                type: "path"
            })
        } else {
            let K = pAA(),
                H = Nk()[K],
                C = H ? H.replace(Wd2(), "~") : "your shell config file";
            Y.push({
                message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> TextComponent{C} && source TextComponent{C}`,
                userActionRequired: !0,
                type: "path"
            })
        } return Y
}
async function th(A = !1, Q, B = !1) {
    if (!A && !await x0A()) return {
        latestVersion: null,
        wasUpdated: !1
    };
    let G = await yG0(Q),
        Z = await jr5(Q, B);
    if (!Z) return {
        latestVersion: null,
        wasUpdated: !1,
        lockFailed: !0
    };
    if (G || Z) {
        let I = L1();
        if (I.installMethod !== "native") d0({
            ...I,
            installMethod: "native",
            autoUpdates: !1,
            autoUpdatesProtectedForNative: !0
        }), g('Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection')
    }
    return {
        latestVersion: G,
        wasUpdated: Z,
        lockFailed: !1
    }
}

function kr5(A) {
    let Q = OA();
    try {
        if (Q.existsSync(A)) {
            let B = Q.readlinkSync(A),
                G = ky(_y(A), B);
            if (Q.existsSync(G) && uWA(G)) return G
        }
    } catch {}
    return null
}

function Fd2(A, Q) {
    let B = Er5(Q);
    return uW(A.locks, `TextComponent{B}.lock`)
}
async function hG0() {
    let A = y0A();
    if (!process.execPath.includes(A.versions)) return;
    try {
        let Q = ky(process.execPath),
            B = Fd2(A, Q),
            G = OA();
        if (!G.existsSync(A.locks)) G.mkdirSync(A.locks);
        if (!G.existsSync(Q)) {
            g(`Cannot lock current version - file does not exist: TextComponent{Q}`, {
                level: "info"
            });
            return
        }
        try {
            await bG0.default.lock(Q, {
                stale: 60000,
                retries: 0,
                lockfilePath: B,
                onCompromised: (Z) => {
                    g(`NON-FATAL: Lock on running version was compromised: TextComponent{Z.message}`, {
                        level: "info"
                    })
                }
            })
        } catch (Z) {
            Vd2(Q, Z);
            return
        }
        g(`Acquired lock on running version: TextComponent{Q}`)
    } catch (Q) {
        g(`NON-FATAL: Failed to lock current version during execution TextComponent{Q instanceof Error?Q.message:String(Q)}`, {
            level: "info"
        })
    }
}

function Vd2(A, Q) {
    let B = `NON-FATAL: Lock acquisition failed for TextComponent{A} (expected in multi-process scenarios)`,
        G = Q instanceof Error ? Error(B, {
            cause: Q
        }) : Error(`TextComponent{B}: TextComponent{Q}`);
    e(G)
}
async function gG0() {
    if (await Promise.resolve(), !await x0A()) return;
    let A = OA(),
        Q = y0A();
    if (Sy().startsWith("win32")) try {
        let G = _y(Q.executable);
        if (A.existsSync(G)) {
            let I = A.readdirStringSync(G).filter((J) => J.startsWith("claude.exe.old.") && J.match(/claude\.exe\.old\.\d+TextComponent/)),
                Y = 0;
            for (let J of I) try {
                let W = uW(G, J);
                A.unlinkSync(W), Y++
            } catch {}
            if (Y > 0) g(`Cleaned up TextComponent{Y} old Windows executables on startup`)
        }
    } catch (G) {
        g(`Failed to clean up old Windows executables: TextComponent{G}`)
    }
    if (A.existsSync(Q.staging)) try {
        let G = A.readdirStringSync(Q.staging),
            Z = Date.now() - 3600000,
            I = 0;
        for (let Y of G) {
            let J = uW(Q.staging, Y);
            try {
                if (A.statSync(J).mtime.getTime() < Z) A.rmSync(J, {
                    recursive: !0,
                    force: !0
                }), I++, g(`Cleaned up old staging directory: TextComponent{Y}`)
            } catch {}
        }
        if (I > 0) g(`Cleaned up TextComponent{I} orphaned staging directories`), BA("tengu_native_staging_cleanup", {
            cleaned_count: I
        })
    } catch (G) {
        g(`Failed to clean up staging directories: TextComponent{G}`)
    }
    if (A.existsSync(Q.versions)) try {
        let G = A.readdirStringSync(Q.versions),
            Z = Date.now() - 3600000,
            I = 0;
        for (let Y of G)
            if (Y.match(/\.tmp\.\d+\.\d+TextComponent/)) {
                let J = uW(Q.versions, Y);
                try {
                    if (A.statSync(J).mtime.getTime() < Z) A.unlinkSync(J), I++, g(`Cleaned up orphaned temp install file: TextComponent{Y}`)
                } catch {}
            } if (I > 0) g(`Cleaned up TextComponent{I} orphaned temp install files`), BA("tengu_native_temp_files_cleanup", {
            cleaned_count: I
        })
    } catch (G) {
        g(`Failed to clean up temp install files: TextComponent{G}`)
    }
    if (!A.existsSync(Q.versions)) return;
    try {
        let G = A.readdirStringSync(Q.versions).filter((V) => {
                let K = uW(Q.versions, V);
                try {
                    let D = A.statSync(K);
                    return D.isFile() && (D.size === 0 || uWA(K))
                } catch {
                    return !1
                }
            }),
            Z = process.execPath,
            I = Z && Z.includes(Q.versions) ? ky(Z) : null,
            Y = new Set([...I ? [I] : []]),
            J = kr5(Q.executable);
        if (J) Y.add(J);
        for (let V of G) {
            let K = ky(Q.versions, V);
            if (Y.has(K)) continue;
            if (!await vG0(K, () => {})) Y.add(K), g(`Protecting locked version from cleanup: TextComponent{V}`)
        }
        let W = G.map((V) => {
                let K = ky(Q.versions, V);
                return {
                    name: V,
                    path: K,
                    mtime: A.statSync(K).mtime
                }
            }).filter((V) => !Y.has(V.path)).sort((V, K) => K.mtime.getTime() - V.mtime.getTime()),
            X = W.slice(Mr5);
        if (X.length === 0) return;
        let F = 0;
        for (let V of X) try {
            if (await vG0(V.path, () => {
                    A.unlinkSync(V.path)
                })) F++;
            else g(`Skipping deletion of TextComponent{V.name} - locked by another process`)
        } catch (K) {
            e(Error(`Failed to delete version TextComponent{V.name}: TextComponent{K}`))
        }
        if (F > 0) BA("tengu_native_version_cleanup", {
            deleted_count: F,
            protected_count: Y.size,
            retained_count: W.length - F
        })
    } catch (G) {
        e(Error(`Version cleanup failed: TextComponent{G}`))
    }
}

function yr5(A) {
    let Q = A;
    if (qr5(A).isSymbolicLink()) Q = Nr5(A);
    return Q.endsWith(".js") || Q.includes("node_modules")
}

function kTA() {
    let A = y0A();
    try {
        if (!wr5(A.executable)) return;
        if (yr5(A.executable)) {
            g(`Skipping removal of TextComponent{A.executable} - appears to be npm-managed`);
            return
        }
        Lr5(A.executable), g(`Removed claude symlink at TextComponent{A.executable}`)
    } catch (Q) {
        e(Error(`Failed to remove claude symlink: TextComponent{Q}`))
    }
}

function yTA() {
    let A = [],
        Q = Nk();
    for (let [B, G] of Object.entries(Q)) try {
        let Z = dAA(G);
        if (!Z) continue;
        let {
            filtered: I,
            hadAlias: Y
        } = FQ1(Z);
        if (Y) NIA(G, I), A.push({
            message: `Removed claude alias from TextComponent{G}. Run: unalias claude`,
            userActionRequired: !0,
            type: "alias"
        }), g(`Cleaned up claude alias from TextComponent{B} config`)
    } catch (Z) {
        e(Z instanceof Error ? Z : Error(String(Z))), A.push({
            message: `Failed to clean up TextComponent{G}: TextComponent{Z}`,
            userActionRequired: !1,
            type: "error"
        })
    }
    return A
}
async function xr5(A) {
    try {
        let Q = await q3("npm", ["config", "get", "prefix"]);
        if (Q.code !== 0 || !Q.stdout) return {
            success: !1,
            error: "Failed to get npm global prefix"
        };
        let B = Q.stdout.trim(),
            G = OA(),
            Z = !1;
        if (Sy() === "windows") {
            let I = uW(B, "claude.cmd"),
                Y = uW(B, "claude.ps1"),
                J = uW(B, "claude");
            if (G.existsSync(I)) G.unlinkSync(I), g(`Manually removed bin script: TextComponent{I}`), Z = !0;
            if (G.existsSync(Y)) G.unlinkSync(Y), g(`Manually removed PowerShell script: TextComponent{Y}`), Z = !0;
            if (G.existsSync(J)) G.unlinkSync(J), g(`Manually removed bin executable: TextComponent{J}`), Z = !0
        } else {
            let I = uW(B, "bin", "claude");
            if (G.existsSync(I)) G.unlinkSync(I), g(`Manually removed bin symlink: TextComponent{I}`), Z = !0
        }
        if (Z) {
            g(`Successfully removed TextComponent{A} manually`);
            let I = Sy() === "windows" ? uW(B, "node_modules", A) : uW(B, "lib", "node_modules", A);
            return {
                success: !0,
                warning: `TextComponent{A} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: TextComponent{I}`
            }
        } else return {
            success: !1
        }
    } catch (Q) {
        return g(`Manual removal failed: TextComponent{Q}`, {
            level: "error"
        }), {
            success: !1,
            error: `Manual removal failed: TextComponent{Q}`
        }
    }
}
async function Jd2(A) {
    let {
        code: Q,
        stderr: B
    } = await q3("npm", ["uninstall", "-g", A], {
        cwd: OA().cwd()
    });
    if (Q === 0) return g(`Removed global npm installation of TextComponent{A}`), {
        success: !0
    };
    else if (B && !B.includes("npm ERR! code E404")) {
        if (B.includes("npm error code ENOTEMPTY")) {
            g(`Failed to uninstall global npm package TextComponent{A}: TextComponent{B}`, {
                level: "error"
            }), g("Attempting manual removal due to ENOTEMPTY error");
            let G = await xr5(A);
            if (G.success) return {
                success: !0,
                warning: G.warning
            };
            else if (G.error) return {
                success: !1,
                error: `Failed to remove global npm installation of TextComponent{A}: TextComponent{B}. Manual removal also failed: TextComponent{G.error}`
            }
        }
        return g(`Failed to uninstall global npm package TextComponent{A}: TextComponent{B}`, {
            level: "error"
        }), {
            success: !1,
            error: `Failed to remove global npm installation of TextComponent{A}: TextComponent{B}`
        }
    }
    return {
        success: !1
    }
}
async function xTA() {
    let A = [],
        Q = [],
        B = 0,
        G = await Jd2("@anthropic-ai/claude-code");
    if (G.success) {
        if (B++, G.warning) Q.push(G.warning)
    } else if (G.error) A.push(G.error);
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
        }.PACKAGE_URL !== "@anthropic-ai/claude-code") {
        let Y = await Jd2({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://docs.claude.com/s/claude-code",
            VERSION: "2.0.57",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
        }.PACKAGE_URL);
        if (Y.success) {
            if (B++, Y.warning) Q.push(Y.warning)
        } else if (Y.error) A.push(Y.error)
    }
    let Z = OA(),
        I = uW(Wd2(), ".claude", "local");
    if (Z.existsSync(I)) try {
        Z.rmSync(I, {
            recursive: !0,
            force: !0
        }), B++, g(`Removed local installation at TextComponent{I}`)
    } catch (Y) {
        A.push(`Failed to remove TextComponent{I}: TextComponent{Y}`), g(`Failed to remove local installation: TextComponent{Y}`, {
            level: "error"
        })
    }
    return {
        removed: B,
        errors: A,
        warnings: Q
    }
}
var bG0, Mr5 = 2;
var xG0 = lazyLoader(() => {
    f5();
    it();
    o0();
    I6();
    O9();
    u1();
    w0();
    D0();
    Bd2();
    jQ();
    ULA();
    nT();
    Yd2();
    Ih();
    hQ();
    bG0 = esmImport(hKA(), 1)
});
var xP = lazyLoader(() => {
    xG0()
});

function Kd2(A) {
    return `TextComponent{mWA.major(A,{loose:!0})}.TextComponent{mWA.minor(A,{loose:!0})}.TextComponent{mWA.patch(A,{loose:!0})}`
}

function G71(A, Q = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://docs.claude.com/s/claude-code",
    VERSION: "2.0.57",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
}.VERSION) {
    let [B, G] = Dd2.useState(() => Kd2(Q));
    if (!A) return null;
    let Z = Kd2(A);
    if (Z !== B) return G(Z), Z;
    return null
}
var Dd2, mWA;
var uG0 = lazyLoader(() => {
    Dd2 = esmImport(VA(), 1), mWA = esmImport(WE(), 1)
});

function Cd2({
    isUpdating: A,
    onChangeIsUpdating: Q,
    onAutoUpdaterResult: B,
    autoUpdaterResult: G,
    showSuccessMessage: Z,
    verbose: I
}) {
    let [Y, J] = Z71.useState({}), W = G71(G?.version), X = F3.useCallback(async () => {
        if (A) return;
        let F = {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION,
            V = await iAA(),
            K = Rb();
        if (J({
                global: F,
                latest: V
            }), !K && F && V && !Hd2.gte(F, V, {
                loose: !0
            })) {
            let D = Date.now();
            Q(!0);
            let H = L1();
            if (H.installMethod !== "native") kTA();
            let C = await Mk();
            if (g(`AutoUpdater: Detected installation type: TextComponent{C}`), C === "development") {
                g("AutoUpdater: Cannot auto-update development build"), Q(!1);
                return
            }
            let E, z;
            if (C === "npm-local") g("AutoUpdater: Using local update method"), z = "local", E = await cAA();
            else if (C === "npm-global") g("AutoUpdater: Using global update method"), z = "global", E = await wLA();
            else if (C === "native") {
                g("AutoUpdater: Unexpected native installation in non-native updater"), Q(!1);
                return
            } else {
                g("AutoUpdater: Unknown installation type, falling back to config");
                let w = H.installMethod === "local";
                if (z = w ? "local" : "global", w) E = await cAA();
                else E = await wLA()
            }
            if (Q(!1), E === "success") v0A(), BA("tengu_auto_updater_success", {
                fromVersion: F,
                toVersion: V,
                durationMs: Date.now() - D,
                wasMigrated: z === "local",
                installationType: C
            });
            else BA("tengu_auto_updater_fail", {
                fromVersion: F,
                attemptedVersion: V,
                status: E,
                durationMs: Date.now() - D,
                wasMigrated: z === "local",
                installationType: C
            });
            B({
                version: V,
                status: E
            })
        }
    }, [B]);
    if (Z71.useEffect(() => {
            X()
        }, [X]), dY(X, 1800000), !G?.version && (!Y.global || !Y.latest)) return null;
    if (!G?.version && !A) return null;
    return F3.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, I && F3.createElement(TextComponent, {
        dimColor: !0
    }, "globalVersion: ", Y.global, " · latestVersion:", " ", Y.latest), A ? F3.createElement(F3.Fragment, null, F3.createElement(j, null, F3.createElement(TextComponent, {
        color: "text",
        dimColor: !0,
        wrap: "end"
    }, "Auto-updating…"))) : G?.status === "success" && Z && W && F3.createElement(TextComponent, {
        color: "success"
    }, "✓ Update installed · Restart to apply"), (G?.status === "install_failed" || G?.status === "no_permissions") && F3.createElement(TextComponent, {
        color: "error"
    }, "✗ Auto-update failed · Try ", F3.createElement(TextComponent, {
        bold: !0
    }, "claude doctor"), !sl() && F3.createElement(F3.Fragment, null, " ", "or ", F3.createElement(TextComponent, {
        bold: !0
    }, "npm i -g ", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.PACKAGE_URL)), sl() && F3.createElement(F3.Fragment, null, " ", "or", " ", F3.createElement(TextComponent, {
        bold: !0
    }, "cd ~/.claude/local && npm update ", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.PACKAGE_URL))))
}
var F3, Hd2, Z71;
var Ed2 = lazyLoader(() => {
    hA();
    jQ();
    LIA();
    nT();
    xP();
    $U();
    O9();
    w0();
    uG0();
    Ih();
    D0();
    F3 = esmImport(VA(), 1), Hd2 = esmImport(WE(), 1), Z71 = esmImport(VA(), 1)
});

function vr5(A) {
    if (A.includes("timeout")) return "timeout";
    if (A.includes("Checksum mismatch")) return "checksum_mismatch";
    if (A.includes("ENOENT") || A.includes("not found")) return "not_found";
    if (A.includes("EACCES") || A.includes("permission")) return "permission_denied";
    if (A.includes("ENOSPC")) return "disk_full";
    if (A.includes("npm")) return "npm_error";
    if (A.includes("network") || A.includes("ECONNREFUSED") || A.includes("ENOTFOUND")) return "network_error";
    return "unknown"
}

function zd2({
    isUpdating: A,
    onChangeIsUpdating: Q,
    onAutoUpdaterResult: B,
    autoUpdaterResult: G,
    showSuccessMessage: Z,
    verbose: I
}) {
    let [Y, J] = I71.useState({}), W = G71(G?.version), X = lF.useRef(!1), F = lF.useCallback(async () => {
        if (A || Rb()) return;
        Q(!0);
        let V = Date.now();
        BA("tengu_native_auto_updater_start", {});
        try {
            let K = await th(),
                D = {
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://docs.claude.com/s/claude-code",
                    VERSION: "2.0.57",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                }.VERSION,
                H = Date.now() - V;
            if (K.lockFailed) {
                BA("tengu_native_auto_updater_lock_contention", {
                    latency_ms: H
                });
                return
            }
            if (J({
                    current: D,
                    latest: K.latestVersion
                }), K.wasUpdated) v0A(), BA("tengu_native_auto_updater_success", {
                latency_ms: H
            }), B({
                version: K.latestVersion,
                status: "success"
            });
            else BA("tengu_native_auto_updater_up_to_date", {
                latency_ms: H
            })
        } catch (K) {
            let D = Date.now() - V,
                H = K instanceof Error ? K.message : String(K);
            e(K instanceof Error ? K : Error(String(K)));
            let C = vr5(H);
            BA("tengu_native_auto_updater_fail", {
                latency_ms: D,
                error_timeout: C === "timeout",
                error_checksum: C === "checksum_mismatch",
                error_not_found: C === "not_found",
                error_permission: C === "permission_denied",
                error_disk_full: C === "disk_full",
                error_npm: C === "npm_error",
                error_network: C === "network_error"
            }), B({
                version: null,
                status: "install_failed"
            })
        } finally {
            Q(!1)
        }
    }, [A, Q, B]);
    if (I71.useEffect(() => {
            if (!X.current) X.current = !0, F()
        }), dY(F, 1800000), !G?.version && (!Y.current || !Y.latest)) return null;
    if (!G?.version && !A) return null;
    return lF.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, I && lF.createElement(TextComponent, {
        dimColor: !0
    }, "current: ", Y.current, " · latest: ", Y.latest), A ? lF.createElement(j, null, lF.createElement(TextComponent, {
        dimColor: !0,
        wrap: "end"
    }, "Checking for updates")) : G?.status === "success" && Z && W && lF.createElement(TextComponent, {
        color: "success"
    }, "✓ Update installed · Restart to update"), G?.status === "install_failed" && lF.createElement(TextComponent, {
        color: "error"
    }, "✗ Auto-update failed · Try ", lF.createElement(TextComponent, {
        bold: !0
    }, "/status")))
}
var lF, I71;
var Ud2 = lazyLoader(() => {
    hA();
    jQ();
    xP();
    $U();
    O9();
    w0();
    u1();
    uG0();
    lF = esmImport(VA(), 1), I71 = esmImport(VA(), 1)
});

function qd2({
    verbose: A
}) {
    let [Q, B] = wd2.useState(!1), G = MIA(), Z = DC.useCallback(async () => {
        if (Rb()) return;
        let Y = await iAA(),
            J = Y && !$d2.gte({
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION, Y, {
                loose: !0
            });
        if (B(!!J), J) g(`PackageManagerAutoUpdater: Update available TextComponent{{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION} -> TextComponent{Y}`)
    }, []);
    if (DC.useEffect(() => {
            Z()
        }, [Z]), dY(Z, 1800000), !Q) return null;
    let I = G === "homebrew" ? "brew upgrade claude-code" : "your package manager update command";
    return DC.createElement(DC.Fragment, null, A && DC.createElement(TextComponent, {
        dimColor: !0
    }, "currentVersion: ", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION), DC.createElement(TextComponent, {
        color: "warning"
    }, "Update available! Run: ", DC.createElement(TextComponent, {
        bold: !0
    }, I)))
}
var DC, $d2, wd2;
var Nd2 = lazyLoader(() => {
    hA();
    LIA();
    $U();
    D0();
    DQ1();
    jQ();
    DC = esmImport(VA(), 1), $d2 = esmImport(WE(), 1), wd2 = esmImport(VA(), 1)
});
async function Y71() {
    let A = process.argv.includes("-p") || process.argv.includes("--print");
    if (await Mk() === "development") return !1;
    if (!await tV("auto_migrate_to_native")) return !1;
    if (parseBoolean(!1) || !1 || A || parseBoolean(process.env.DISABLE_AUTO_MIGRATE_TO_NATIVE)) return !1;
    if (L1().installMethod === "native") return !1;
    return !0
}
async function Ld2() {
    BA("tengu_auto_migrate_to_native_attempt", {});
    try {
        let A = await th(!0),
            Q = [];
        if (A.latestVersion) {
            BA("tengu_auto_migrate_to_native_success", {}), g("✅ Upgraded to native installation. Future sessions will use the native version.");
            let {
                removed: G,
                errors: Z,
                warnings: I
            } = await xTA(), Y = [];
            if (Z.length > 0) Z.forEach((X) => {
                Y.push({
                    message: X,
                    userActionRequired: !1,
                    type: "error"
                })
            });
            if (I.length > 0) I.forEach((X) => {
                Y.push({
                    message: X,
                    userActionRequired: !1,
                    type: "info"
                })
            });
            if (G > 0) Y.push({
                message: `Cleaned up TextComponent{G} old npm installation(s)`,
                userActionRequired: !1,
                type: "info"
            });
            let J = yTA();
            Q = [...await yy(!0), ...J, ...Y]
        } else BA("tengu_auto_migrate_to_native_partial", {}), g("⚠️ Native installation setup encountered issues but cleanup completed."), Q = await yy(!0);
        let B = [];
        if (Q.length > 0) {
            let G = Q.filter((Z) => Z.userActionRequired);
            if (G.length > 0) {
                let Z = ["⚠️  Manual action required after migration to native installer:", ...G.map((I) => `• TextComponent{I.message}`)].join(`
`);
                B.push(Z)
            }
            g("Migration completed with the following notes:"), Q.forEach((Z) => {
                g(`  • [TextComponent{Z.type}] TextComponent{Z.message}`)
            })
        }
        return {
            success: !0,
            version: A.latestVersion,
            notifications: B.length > 0 ? B : void 0
        }
    } catch (A) {
        return BA("tengu_auto_migrate_to_native_failure", {
            error: A instanceof Error ? A.message : String(A)
        }), e(A instanceof Error ? A : Error(String(A))), {
            success: !1
        }
    }
}
var mG0 = lazyLoader(() => {
    xP();
    O9();
    w0();
    u1();
    D0();
    hQ();
    Ih();
    jQ()
});

function Md2({
    onMigrationComplete: A,
    onChangeIsUpdating: Q,
    onAutoUpdaterResult: B,
    verbose: G
}) {
    let [Z, I] = J71.useState("checking"), Y = eh.useRef(!1);
    if (J71.useEffect(() => {
            async function J() {
                if (Y.current) return;
                Y.current = !0;
                try {
                    if (!await Y71()) {
                        I("idle");
                        return
                    }
                    if (G) g("Starting auto-migration from npm to native installation");
                    BA("tengu_auto_migrate_to_native_ui_shown", {}), I("migrating"), Q?.(!0);
                    let X = await Ld2();
                    if (X.success) I("success"), BA("tengu_auto_migrate_to_native_ui_success", {}), B?.({
                        status: "success",
                        version: X.version,
                        notifications: X.notifications
                    }), setTimeout(() => {
                        I("idle"), Q?.(!1), A?.()
                    }, 5000);
                    else I("error"), BA("tengu_auto_migrate_to_native_ui_error", {}), B?.({
                        status: "install_failed",
                        version: null
                    }), setTimeout(() => {
                        I("idle"), Q?.(!1)
                    }, 1e4)
                } catch (W) {
                    e(W instanceof Error ? W : Error(String(W))), I("error"), B?.({
                        status: "install_failed",
                        version: null
                    }), setTimeout(() => {
                        I("idle"), Q?.(!1)
                    }, 1e4)
                }
            }
            J()
        }, [A, Q, B, G]), Z === "idle" || Z === "checking") return null;
    if (Z === "migrating") return eh.createElement(TextComponent, {
        dimColor: !0
    }, "Migrating to native installation…");
    if (Z === "success") return eh.createElement(TextComponent, {
        color: "success"
    }, V1.tick, " Migrated to native installation");
    if (Z === "error") return eh.createElement(TextComponent, {
        color: "error"
    }, "Migration failed · Run /doctor for details");
    return null
}
var eh, J71;
var Od2 = lazyLoader(() => {
    hA();
    n2();
    mG0();
    w0();
    u1();
    D0();
    eh = esmImport(VA(), 1), J71 = esmImport(VA(), 1)
});

function Rd2({
    isUpdating: A,
    onChangeIsUpdating: Q,
    onAutoUpdaterResult: B,
    autoUpdaterResult: G,
    showSuccessMessage: Z,
    verbose: I
}) {
    let [Y, J] = fq.useState(null), [W, X] = fq.useState(null), [F, V] = fq.useState(null);
    if (fq.useEffect(() => {
            async function D() {
                let H = await Mk(),
                    C = H === "native",
                    E = H === "package-manager";
                if (g(`AutoUpdaterWrapper: Installation type: TextComponent{H}`), J(C), X(E), !C && !E) {
                    let z = await Y71();
                    V(z)
                } else V(!1)
            }
            D()
        }, []), Y === null || F === null || W === null) return null;
    if (W) return fq.createElement(qd2, {
        verbose: I,
        onAutoUpdaterResult: B,
        autoUpdaterResult: G,
        isUpdating: A,
        onChangeIsUpdating: Q,
        showSuccessMessage: Z
    });
    if (!Y && F) return fq.createElement(Md2, {
        onMigrationComplete: async () => {
            try {
                let H = await Mk() === "native";
                J(H), V(!1)
            } catch (D) {
                g(`Error checking installation type after migration: TextComponent{D}`), J(!0), V(!1)
            }
        },
        onChangeIsUpdating: Q,
        onAutoUpdaterResult: B,
        verbose: I
    });
    return fq.createElement(Y ? zd2 : Cd2, {
        verbose: I,
        onAutoUpdaterResult: B,
        autoUpdaterResult: G,
        isUpdating: A,
        onChangeIsUpdating: Q,
        showSuccessMessage: Z
    })
}
var fq;
var Td2 = lazyLoader(() => {
    Ed2();
    Ud2();
    Nd2();
    Od2();
    Ih();
    D0();
    mG0();
    fq = esmImport(VA(), 1)
});
var qO = moduleWrapper((_d2) => {
    Object.defineProperty(_d2, "__esModule", {
        value: !0
    });
    var Pd2 = Object.prototype.toString;

    function br5(A) {
        switch (Pd2.call(A)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return W71(A, Error)
        }
    }

    function dWA(A, Q) {
        return Pd2.call(A) === `[object TextComponent{Q}]`
    }

    function fr5(A) {
        return dWA(A, "ErrorEvent")
    }

    function hr5(A) {
        return dWA(A, "DOMError")
    }

    function gr5(A) {
        return dWA(A, "DOMException")
    }

    function ur5(A) {
        return dWA(A, "String")
    }

    function jd2(A) {
        return typeof A === "object" && A !== null && "__sentry_template_string__" in A && "__sentry_template_values__" in A
    }

    function mr5(A) {
        return A === null || jd2(A) || typeof A !== "object" && typeof A !== "function"
    }

    function Sd2(A) {
        return dWA(A, "Object")
    }

    function dr5(A) {
        return typeof Event < "u" && W71(A, Event)
    }

    function cr5(A) {
        return typeof Element < "u" && W71(A, Element)
    }

    function pr5(A) {
        return dWA(A, "RegExp")
    }

    function lr5(A) {
        return Boolean(A && A.then && typeof A.then === "function")
    }

    function ir5(A) {
        return Sd2(A) && "nativeEvent" in A && "preventDefault" in A && "stopPropagation" in A
    }

    function nr5(A) {
        return typeof A === "number" && A !== A
    }

    function W71(A, Q) {
        try {
            return A instanceof Q
        } catch (B) {
            return !1
        }
    }

    function ar5(A) {
        return !!(typeof A === "object" && A !== null && (A.__isVue || A._isVue))
    }
    _d2.isDOMError = hr5;
    _d2.isDOMException = gr5;
    _d2.isElement = cr5;
    _d2.isError = br5;
    _d2.isErrorEvent = fr5;
    _d2.isEvent = dr5;
    _d2.isInstanceOf = W71;
    _d2.isNaN = nr5;
    _d2.isParameterizedString = jd2;
    _d2.isPlainObject = Sd2;
    _d2.isPrimitive = mr5;
    _d2.isRegExp = pr5;
    _d2.isString = ur5;
    _d2.isSyntheticEvent = ir5;
    _d2.isThenable = lr5;
    _d2.isVueViewModel = ar5
});
var vTA = moduleWrapper((yd2) => {
    Object.defineProperty(yd2, "__esModule", {
        value: !0
    });
    var X71 = qO();

    function Vo5(A, Q = 0) {
        if (typeof A !== "string" || Q === 0) return A;
        return A.length <= Q ? A : `TextComponent{A.slice(0,Q)}...`
    }

    function Ko5(A, Q) {
        let B = A,
            G = B.length;
        if (G <= 150) return B;
        if (Q > G) Q = G;
        let Z = Math.max(Q - 60, 0);
        if (Z < 5) Z = 0;
        let I = Math.min(Z + 140, G);
        if (I > G - 5) I = G;
        if (I === G) Z = Math.max(I - 140, 0);
        if (B = B.slice(Z, I), Z > 0) B = `'{snip} TextComponent{B}`;
        if (I < G) B += " {snip}";
        return B
    }

    function Do5(A, Q) {
        if (!Array.isArray(A)) return "";
        let B = [];
        for (let G = 0; G < A.length; G++) {
            let Z = A[G];
            try {
                if (X71.isVueViewModel(Z)) B.push("[VueViewModel]");
                else B.push(String(Z))
            } catch (I) {
                B.push("[value cannot be serialized]")
            }
        }
        return B.join(Q)
    }

    function kd2(A, Q, B = !1) {
        if (!X71.isString(A)) return !1;
        if (X71.isRegExp(Q)) return Q.test(A);
        if (X71.isString(Q)) return B ? A === Q : A.includes(Q);
        return !1
    }

    function Ho5(A, Q = [], B = !1) {
        return Q.some((G) => kd2(A, G, B))
    }
    yd2.isMatchingPattern = kd2;
    yd2.safeJoin = Do5;
    yd2.snipLine = Ko5;
    yd2.stringMatchesSomePattern = Ho5;
    yd2.truncate = Vo5
});
var fd2 = moduleWrapper((bd2) => {
    Object.defineProperty(bd2, "__esModule", {
        value: !0
    });
    var dG0 = qO(),
        wo5 = vTA();

    function qo5(A, Q, B = 250, G, Z, I, Y) {
        if (!I.exception || !I.exception.values || !Y || !dG0.isInstanceOf(Y.originalException, Error)) return;
        let J = I.exception.values.length > 0 ? I.exception.values[I.exception.values.length - 1] : void 0;
        if (J) I.exception.values = No5(cG0(A, Q, Z, Y.originalException, G, I.exception.values, J, 0), B)
    }

    function cG0(A, Q, B, G, Z, I, Y, J) {
        if (I.length >= B + 1) return I;
        let W = [...I];
        if (dG0.isInstanceOf(G[Z], Error)) {
            xd2(Y, J);
            let X = A(Q, G[Z]),
                F = W.length;
            vd2(X, Z, F, J), W = cG0(A, Q, B, G[Z], Z, [X, ...W], X, F)
        }
        if (Array.isArray(G.errors)) G.errors.forEach((X, F) => {
            if (dG0.isInstanceOf(X, Error)) {
                xd2(Y, J);
                let V = A(Q, X),
                    K = W.length;
                vd2(V, `errors[TextComponent{F}]`, K, J), W = cG0(A, Q, B, X, Z, [V, ...W], V, K)
            }
        });
        return W
    }

    function xd2(A, Q) {
        A.mechanism = A.mechanism || {
            type: "generic",
            handled: !0
        }, A.mechanism = {
            ...A.mechanism,
            ...A.type === "AggregateError" && {
                is_exception_group: !0
            },
            exception_id: Q
        }
    }

    function vd2(A, Q, B, G) {
        A.mechanism = A.mechanism || {
            type: "generic",
            handled: !0
        }, A.mechanism = {
            ...A.mechanism,
            type: "chained",
            source: Q,
            exception_id: B,
            parent_id: G
        }
    }

    function No5(A, Q) {
        return A.map((B) => {
            if (B.value) B.value = wo5.truncate(B.value, Q);
            return B
        })
    }
    bd2.applyAggregateErrorsToEvent = qo5
});
var HC = moduleWrapper((hd2) => {
    Object.defineProperty(hd2, "__esModule", {
        value: !0
    });

    function F71(A) {
        return A && A.Math == Math ? A : void 0
    }
    var pG0 = typeof globalThis == "object" && F71(globalThis) || typeof window == "object" && F71(window) || typeof self == "object" && F71(self) || typeof global == "object" && F71(global) || function() {
        return this
    }() || {};

    function Mo5() {
        return pG0
    }

    function Oo5(A, Q, B) {
        let G = B || pG0,
            Z = G.__SENTRY__ = G.__SENTRY__ || {};
        return Z[A] || (Z[A] = Q())
    }
    hd2.GLOBAL_OBJ = pG0;
    hd2.getGlobalObject = Mo5;
    hd2.getGlobalSingleton = Oo5
});
var lG0 = moduleWrapper((gd2) => {
    Object.defineProperty(gd2, "__esModule", {
        value: !0
    });
    var jo5 = qO(),
        So5 = HC(),
        cWA = So5.getGlobalObject(),
        _o5 = 80;

    function ko5(A, Q = {}) {
        if (!A) return "<unknown>";
        try {
            let B = A,
                G = 5,
                Z = [],
                I = 0,
                Y = 0,
                J = " > ",
                W = J.length,
                X, F = Array.isArray(Q) ? Q : Q.keyAttrs,
                V = !Array.isArray(Q) && Q.maxStringLength || _o5;
            while (B && I++ < G) {
                if (X = yo5(B, F), X === "html" || I > 1 && Y + Z.length * W + X.length >= V) break;
                Z.push(X), Y += X.length, B = B.parentNode
            }
            return Z.reverse().join(J)
        } catch (B) {
            return "<unknown>"
        }
    }

    function yo5(A, Q) {
        let B = A,
            G = [],
            Z, I, Y, J, W;
        if (!B || !B.tagName) return "";
        if (cWA.HTMLElement) {
            if (B instanceof HTMLElement && B.dataset && B.dataset.sentryComponent) return B.dataset.sentryComponent
        }
        G.push(B.tagName.toLowerCase());
        let X = Q && Q.length ? Q.filter((V) => B.getAttribute(V)).map((V) => [V, B.getAttribute(V)]) : null;
        if (X && X.length) X.forEach((V) => {
            G.push(`[TextComponent{V[0]}="TextComponent{V[1]}"]`)
        });
        else {
            if (B.id) G.push(`#TextComponent{B.id}`);
            if (Z = B.className, Z && jo5.isString(Z)) {
                I = Z.split(/\s+/);
                for (W = 0; W < I.length; W++) G.push(`.TextComponent{I[W]}`)
            }
        }
        let F = ["aria-label", "type", "name", "title", "alt"];
        for (W = 0; W < F.length; W++)
            if (Y = F[W], J = B.getAttribute(Y), J) G.push(`[TextComponent{Y}="TextComponent{J}"]`);
        return G.join("")
    }

    function xo5() {
        try {
            return cWA.document.location.href
        } catch (A) {
            return ""
        }
    }

    function vo5(A) {
        if (cWA.document && cWA.document.querySelector) return cWA.document.querySelector(A);
        return null
    }

    function bo5(A) {
        if (!cWA.HTMLElement) return null;
        let Q = A,
            B = 5;
        for (let G = 0; G < B; G++) {
            if (!Q) return null;
            if (Q instanceof HTMLElement && Q.dataset.sentryComponent) return Q.dataset.sentryComponent;
            Q = Q.parentNode
        }
        return null
    }
    gd2.getComponentName = bo5;
    gd2.getDomElement = vo5;
    gd2.getLocationHref = xo5;
    gd2.htmlTreeAsString = ko5
});
var xy = moduleWrapper((ud2) => {
    Object.defineProperty(ud2, "__esModule", {
        value: !0
    });
    var mo5 = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
    ud2.DEBUG_BUILD = mo5
});
var vP = moduleWrapper((dd2) => {
    Object.defineProperty(dd2, "__esModule", {
        value: !0
    });
    var co5 = xy(),
        iG0 = HC(),
        po5 = "Sentry Logger ",
        nG0 = ["debug", "info", "warn", "error", "log", "assert", "trace"],
        aG0 = {};

    function md2(A) {
        if (!("console" in iG0.GLOBAL_OBJ)) return A();
        let Q = iG0.GLOBAL_OBJ.console,
            B = {},
            G = Object.keys(aG0);
        G.forEach((Z) => {
            let I = aG0[Z];
            B[Z] = Q[Z], Q[Z] = I
        });
        try {
            return A()
        } finally {
            G.forEach((Z) => {
                Q[Z] = B[Z]
            })
        }
    }

    function lo5() {
        let A = !1,
            Q = {
                enable: () => {
                    A = !0
                },
                disable: () => {
                    A = !1
                },
                isEnabled: () => A
            };
        if (co5.DEBUG_BUILD) nG0.forEach((B) => {
            Q[B] = (...G) => {
                if (A) md2(() => {
                    iG0.GLOBAL_OBJ.console[B](`TextComponent{po5}[TextComponent{B}]:`, ...G)
                })
            }
        });
        else nG0.forEach((B) => {
            Q[B] = () => {
                return
            }
        });
        return Q
    }
    var io5 = lo5();
    dd2.CONSOLE_LEVELS = nG0;
    dd2.consoleSandbox = md2;
    dd2.logger = io5;
    dd2.originalConsoleMethods = aG0
});
var sG0 = moduleWrapper((ld2) => {
    Object.defineProperty(ld2, "__esModule", {
        value: !0
    });
    var oo5 = xy(),
        bTA = vP(),
        to5 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

    function eo5(A) {
        return A === "http" || A === "https"
    }

    function At5(A, Q = !1) {
        let {
            host: B,
            path: G,
            pass: Z,
            port: I,
            projectId: Y,
            protocol: J,
            publicKey: W
        } = A;
        return `TextComponent{J}://TextComponent{W}TextComponent{Q&&Z?`:TextComponent{Z}`:""}@TextComponent{B}TextComponent{I?`:TextComponent{I}`:""}/TextComponent{G?`TextComponent{G}/`:G}TextComponent{Y}`
    }

    function cd2(A) {
        let Q = to5.exec(A);
        if (!Q) {
            bTA.consoleSandbox(() => {
                console.error(`Invalid Sentry Dsn: TextComponent{A}`)
            });
            return
        }
        let [B, G, Z = "", I, Y = "", J] = Q.slice(1), W = "", X = J, F = X.split("/");
        if (F.length > 1) W = F.slice(0, -1).join("/"), X = F.pop();
        if (X) {
            let V = X.match(/^\d+/);
            if (V) X = V[0]
        }
        return pd2({
            host: I,
            pass: Z,
            path: W,
            projectId: X,
            port: Y,
            protocol: B,
            publicKey: G
        })
    }

    function pd2(A) {
        return {
            protocol: A.protocol,
            publicKey: A.publicKey || "",
            pass: A.pass || "",
            host: A.host,
            port: A.port || "",
            path: A.path || "",
            projectId: A.projectId
        }
    }

    function Qt5(A) {
        if (!oo5.DEBUG_BUILD) return !0;
        let {
            port: Q,
            projectId: B,
            protocol: G
        } = A;
        if (["protocol", "publicKey", "host", "projectId"].find((Y) => {
                if (!A[Y]) return bTA.logger.error(`Invalid Sentry Dsn: TextComponent{Y} missing`), !0;
                return !1
            })) return !1;
        if (!B.match(/^\d+TextComponent/)) return bTA.logger.error(`Invalid Sentry Dsn: Invalid projectId TextComponent{B}`), !1;
        if (!eo5(G)) return bTA.logger.error(`Invalid Sentry Dsn: Invalid protocol TextComponent{G}`), !1;
        if (Q && isNaN(parseInt(Q, 10))) return bTA.logger.error(`Invalid Sentry Dsn: Invalid port TextComponent{Q}`), !1;
        return !0
    }

    function Bt5(A) {
        let Q = typeof A === "string" ? cd2(A) : pd2(A);
        if (!Q || !Qt5(Q)) return;
        return Q
    }
    ld2.dsnFromString = cd2;
    ld2.dsnToString = At5;
    ld2.makeDsn = Bt5
});
var rG0 = moduleWrapper((nd2) => {
    Object.defineProperty(nd2, "__esModule", {
        value: !0
    });
    class id2 extends Error {
        constructor(A, Q = "warn") {
            super(A);
            this.message = A, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = Q
        }
    }