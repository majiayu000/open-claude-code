/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: telemetry_004.js
 * 处理时间: 2025-12-09T03:37:25.356Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * SQ         ( 71x) = sandboxDebug(msg, opts) - Sandbox debug logging
 * GA         (  2x) = esmImport(module) - ESM import helper
 * P6B        (  1x) = createProxyServer(config) - Create HTTP/HTTPS proxy
 * j6B        (  1x) = emptyFunction() - No-op function
 * ===================================================
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 4/14
 * Lines: 161217 - 162716 (1500 lines)
 * Original file: cli.js
 */

    switch (A) {
        case "x64":
        case "x86_64":
            return "x64";
        case "arm64":
        case "aarch64":
            return "arm64";
        case "ia32":
        case "x86":
            return SQ("[SeccompFilter] 32-bit x86 (ia32) is not currently supported due to missing socketcall() syscall blocking. The current seccomp filter only blocks socket(AF_UNIX, ...), but on 32-bit x86, socketcall() can be used to bypass this.", {
                level: "error"
            }), null;
        default:
            return SQ(`[SeccompFilter] Unsupported architecture: ${A}. Only x64 and arm64 are supported.`), null
    }
}

function Rb1() {
    let A = q3B();
    if (!A) return SQ(`[SeccompFilter] Cannot find pre-generated BPF filter: unsupported architecture ${process.arch}`), null;
    SQ(`[SeccompFilter] Detected architecture: ${A}`);
    let Q = $3B(w3B(import.meta.url)),
        B = hc("vendor", "seccomp", A, "unix-block.bpf"),
        G = [hc(Q, B), hc(Q, "..", "..", B), hc(Q, "..", B)];
    for (let Z of G)
        if (Ob1.existsSync(Z)) return SQ(`[SeccompFilter] Found pre-generated BPF filter: ${Z} (${A})`), Z;
    return SQ(`[SeccompFilter] Pre-generated BPF filter not found in any expected location (${A})`), null
}

function BnA() {
    let A = q3B();
    if (!A) return SQ(`[SeccompFilter] Cannot find apply-seccomp binary: unsupported architecture ${process.arch}`), null;
    SQ(`[SeccompFilter] Looking for apply-seccomp binary for architecture: ${A}`);
    let Q = $3B(w3B(import.meta.url)),
        B = hc("vendor", "seccomp", A, "apply-seccomp"),
        G = [hc(Q, B), hc(Q, "..", "..", B), hc(Q, "..", B)];
    for (let Z of G)
        if (Ob1.existsSync(Z)) return SQ(`[SeccompFilter] Found apply-seccomp binary: ${Z} (${A})`), Z;
    return SQ(`[SeccompFilter] apply-seccomp binary not found in any expected location (${A})`), null
}

function N3B() {
    let A = Rb1();
    if (A) return SQ("[SeccompFilter] Using pre-generated BPF filter"), A;
    return SQ("[SeccompFilter] Pre-generated BPF filter not available for this architecture. Only x64 and arm64 are supported.", {
        level: "error"
    }), null
}

function Tb1(A) {}
var L3B = () => {};
import {
    randomBytes as rA6
} from "node:crypto";
import * as JT from "fs";
import {
    spawn as M3B,
    spawnSync as Pb1
} from "node:child_process";
import {
    tmpdir as O3B
} from "node:os";
import q_, {
    join as R3B
} from "node:path";
async function oA6(A = {
    command: "rg"
}, Q = Sb1, B) {
    let G = process.cwd(),
        Z = new AbortController,
        I = B ?? Z.signal,
        Y = eiA(),
        J = [...lzA.map((F) => q_.resolve(G, F)), ...Y.map((F) => q_.resolve(G, F)), q_.resolve(G, ".git/hooks"), q_.resolve(G, ".git/config")],
        W = [];
    for (let F of lzA) W.push("--iglob", F);
    for (let F of Y) W.push("--iglob", `**/${F}/**`);
    W.push("--iglob", "**/.git/hooks/**"), W.push("--iglob", "**/.git/config");
    let X = [];
    try {
        X = await z3B(["--files", "--hidden", "--max-depth", String(Q), ...W, "-g", "!**/node_modules/**"], G, I, A)
    } catch (F) {
        SQ(`[Sandbox] ripgrep scan failed: ${F}`)
    }
    for (let F of X) {
        let V = q_.resolve(G, F),
            K = !1;
        for (let D of [...Y, ".git"]) {
            let H = Mb1(D),
                C = V.split(q_.sep),
                E = C.findIndex((z) => Mb1(z) === H);
            if (E !== -1) {
                if (D === ".git") {
                    let z = C.slice(0, E + 1).join(q_.sep);
                    if (F.includes(".git/hooks")) J.push(q_.join(z, "hooks"));
                    else if (F.includes(".git/config")) J.push(q_.join(z, "config"))
                } else J.push(C.slice(0, E + 1).join(q_.sep));
                K = !0;
                break
            }
        }
        if (!K) J.push(V)
    }
    return [...new Set(J)]
}

function tA6() {
    if (T3B) return;
    process.on("exit", () => {
        for (let A of jb1) try {
            Tb1(A)
        } catch {}
    }), T3B = !0
}

function P3B(A = !1) {
    try {
        let Q = Pb1("which", ["bwrap"], {
                stdio: "ignore",
                timeout: 1000
            }),
            B = Pb1("which", ["socat"], {
                stdio: "ignore",
                timeout: 1000
            }),
            G = Q.status === 0 && B.status === 0;
        if (!A) {
            let Z = Rb1() !== null,
                I = BnA() !== null;
            if (!Z || !I) SQ(`[Sandbox Linux] Seccomp filtering not available (missing binaries for ${process.arch}). Sandbox will run without Unix socket blocking (allowAllUnixSockets mode). This is less restrictive but still provides filesystem and network isolation.`, {
                level: "warn"
            })
        }
        return G
    } catch {
        return !1
    }
}
async function j3B(A, Q) {
    let B = rA6(8).toString("hex"),
        G = R3B(O3B(), `claude-http-${B}.sock`),
        Z = R3B(O3B(), `claude-socks-${B}.sock`),
        I = [`UNIX-LISTEN:${G},fork,reuseaddr`, `TCP:localhost:${A},keepalive,keepidle=10,keepintvl=5,keepcnt=3`];
    SQ(`Starting HTTP bridge: socat ${I.join(" ")}`);
    let Y = M3B("socat", I, {
        stdio: "ignore"
    });
    if (!Y.pid) throw Error("Failed to start HTTP bridge process");
    Y.on("error", (F) => {
        SQ(`HTTP bridge process error: ${F}`, {
            level: "error"
        })
    }), Y.on("exit", (F, V) => {
        SQ(`HTTP bridge process exited with code ${F}, signal ${V}`, {
            level: F === 0 ? "info" : "error"
        })
    });
    let J = [`UNIX-LISTEN:${Z},fork,reuseaddr`, `TCP:localhost:${Q},keepalive,keepidle=10,keepintvl=5,keepcnt=3`];
    SQ(`Starting SOCKS bridge: socat ${J.join(" ")}`);
    let W = M3B("socat", J, {
        stdio: "ignore"
    });
    if (!W.pid) {
        if (Y.pid) try {
            process.kill(Y.pid, "SIGTERM")
        } catch {}
        throw Error("Failed to start SOCKS bridge process")
    }
    W.on("error", (F) => {
        SQ(`SOCKS bridge process error: ${F}`, {
            level: "error"
        })
    }), W.on("exit", (F, V) => {
        SQ(`SOCKS bridge process exited with code ${F}, signal ${V}`, {
            level: F === 0 ? "info" : "error"
        })
    });
    let X = 5;
    for (let F = 0; F < X; F++) {
        if (!Y.pid || Y.killed || !W.pid || W.killed) throw Error("Linux bridge process died unexpectedly");
        try {
            if (JT.existsSync(G) && JT.existsSync(Z)) {
                SQ(`Linux bridges ready after ${F+1} attempts`);
                break
            }
        } catch (V) {
            SQ(`Error checking sockets (attempt ${F+1}): ${V}`, {
                level: "error"
            })
        }
        if (F === X - 1) {
            if (Y.pid) try {
                process.kill(Y.pid, "SIGTERM")
            } catch {}
            if (W.pid) try {
                process.kill(W.pid, "SIGTERM")
            } catch {}
            throw Error(`Failed to create bridge sockets after ${X} attempts`)
        }
        await new Promise((V) => setTimeout(V, F * 100))
    }
    return {
        httpSocketPath: G,
        socksSocketPath: Z,
        httpBridgeProcess: Y,
        socksBridgeProcess: W,
        httpProxyPort: A,
        socksProxyPort: Q
    }
}

function eA6(A, Q, B, G, Z) {
    let I = Z || "bash",
        Y = [`socat TCP-LISTEN:3128,fork,reuseaddr UNIX-CONNECT:${A} >/dev/null 2>&1 &`, `socat TCP-LISTEN:1080,fork,reuseaddr UNIX-CONNECT:${Q} >/dev/null 2>&1 &`, 'trap "kill %1 %2 2>/dev/null; exit" EXIT'];
    if (G) {
        let J = BnA();
        if (!J) throw Error("apply-seccomp binary not found. This should have been caught earlier. Ensure vendor/seccomp/{x64,arm64}/apply-seccomp binaries are included in the package.");
        let W = It.default.quote([J, G, I, "-c", B]),
            X = [...Y, W].join(`
`);
        return `${I} -c ${It.default.quote([X])}`
    } else {
        let J = [...Y, `eval ${It.default.quote([B])}`].join(`
`);
        return `${I} -c ${It.default.quote([J])}`
    }
}
async function A16(A, Q, B = {
    command: "rg"
}, G = Sb1, Z) {
    let I = [];
    if (Q) {
        I.push("--ro-bind", "/", "/");
        let J = [];
        for (let X of Q.allowOnly || []) {
            let F = YT(X);
            if (SQ(`[Sandbox Linux] Processing write path: ${X} -> ${F}`), F.startsWith("/dev/")) {
                SQ(`[Sandbox Linux] Skipping /dev path: ${F}`);
                continue
            }
            if (!JT.existsSync(F)) {
                SQ(`[Sandbox Linux] Skipping non-existent write path: ${F}`);
                continue
            }
            I.push("--bind", F, F), J.push(F)
        }
        let W = [...Q.denyWithinAllow || [], ...await oA6(B, G, Z)];
        for (let X of W) {
            let F = YT(X);
            if (F.startsWith("/dev/")) continue;
            if (!JT.existsSync(F)) {
                SQ(`[Sandbox Linux] Skipping non-existent deny path: ${F}`);
                continue
            }
            if (J.some((K) => F.startsWith(K + "/") || F === K)) I.push("--ro-bind", F, F);
            else SQ(`[Sandbox Linux] Skipping deny path not within allowed paths: ${F}`)
        }
    } else I.push("--bind", "/", "/");
    let Y = [...A?.denyOnly || []];
    if (JT.existsSync("/etc/ssh/ssh_config.d")) Y.push("/etc/ssh/ssh_config.d");
    for (let J of Y) {
        let W = YT(J);
        if (!JT.existsSync(W)) {
            SQ(`[Sandbox Linux] Skipping non-existent read deny path: ${W}`);
            continue
        }
        if (JT.statSync(W).isDirectory()) I.push("--tmpfs", W);
        else I.push("--ro-bind", "/dev/null", W)
    }
    return I
}
async function S3B(A) {
    let {
        command: Q,
        needsNetworkRestriction: B,
        httpSocketPath: G,
        socksSocketPath: Z,
        httpProxyPort: I,
        socksProxyPort: Y,
        readConfig: J,
        writeConfig: W,
        enableWeakerNestedSandbox: X,
        allowAllUnixSockets: F,
        binShell: V,
        ripgrepConfig: K = {
            command: "rg"
        },
        mandatoryDenySearchDepth: D = Sb1,
        abortSignal: H
    } = A, C = J && J.denyOnly.length > 0, E = W !== void 0;
    if (!B && !C && !E) return Q;
    let z = [],
        w = void 0;
    try {
        if (!F)
            if (w = N3B() ?? void 0, !w) SQ("[Sandbox Linux] Seccomp filter not available (missing binaries). Continuing without Unix socket blocking - sandbox will still provide filesystem and network isolation but Unix sockets will be allowed.", {
                level: "warn"
            });
            else {
                if (!w.includes("/vendor/seccomp/")) jb1.add(w), tA6();
                SQ("[Sandbox Linux] Generated seccomp BPF filter for Unix socket blocking")
            }
        else if (F) SQ("[Sandbox Linux] Skipping seccomp filter - allowAllUnixSockets is enabled");
        if (B) {
            if (z.push("--unshare-net"), G && Z) {
                if (!JT.existsSync(G)) throw Error(`Linux HTTP bridge socket does not exist: ${G}. The bridge process may have died. Try reinitializing the sandbox.`);
                if (!JT.existsSync(Z)) throw Error(`Linux SOCKS bridge socket does not exist: ${Z}. The bridge process may have died. Try reinitializing the sandbox.`);
                z.push("--bind", G, G), z.push("--bind", Z, Z);
                let x = AnA(3128, 1080);
                if (z.push(...x.flatMap((p) => {
                        let u = p.indexOf("="),
                            o = p.slice(0, u),
                            l = p.slice(u + 1);
                        return ["--setenv", o, l]
                    })), I !== void 0) z.push("--setenv", "CLAUDE_CODE_HOST_HTTP_PROXY_PORT", String(I));
                if (Y !== void 0) z.push("--setenv", "CLAUDE_CODE_HOST_SOCKS_PROXY_PORT", String(Y))
            }
        }
        let N = await A16(J, W, K, D, H);
        if (z.push(...N), z.push("--dev", "/dev"), z.push("--unshare-pid"), !X) z.push("--proc", "/proc");
        let q = V || "bash",
            R = Pb1("which", [q], {
                encoding: "utf8"
            });
        if (R.status !== 0) throw Error(`Shell '${q}' not found in PATH`);
        let P = R.stdout.trim();
        if (z.push("--", P, "-c"), B && G && Z) {
            let x = eA6(G, Z, Q, w, P);
            z.push(x)
        } else if (w) {
            let x = BnA();
            if (!x) throw Error("apply-seccomp binary not found. This should have been caught earlier. Ensure vendor/seccomp/{x64,arm64}/apply-seccomp binaries are included in the package.");
            let p = It.default.quote([x, w, P, "-c", Q]);
            z.push(p)
        } else z.push(Q);
        let y = It.default.quote(["bwrap", ...z]),
            v = [];
        if (B) v.push("network");
        if (C || E) v.push("filesystem");
        if (w) v.push("seccomp(unix-block)");
        return SQ(`[Sandbox Linux] Wrapped command with bwrap (${v.join(", ")} restrictions)`), y
    } catch (N) {
        if (w && !w.includes("/vendor/seccomp/")) {
            jb1.delete(w);
            try {
                Tb1(w)
            } catch (q) {
                SQ(`[Sandbox Linux] Failed to clean up seccomp filter on error: ${q}`, {
                    level: "error"
                })
            }
        }
        throw N
    }
}
var It, Sb1 = 3,
    jb1, T3B = !1;
var _3B = L(() => {
    qb1();
    a3A();
    L3B();
    It = GA(bxA(), 1);
    jb1 = new Set
});
import {
    spawn as Q16,
    spawnSync as B16
} from "child_process";
import * as bb from "path";

function G16() {
    let A = process.cwd(),
        Q = [];
    for (let B of lzA) Q.push(bb.resolve(A, B)), Q.push(`**/${B}`);
    for (let B of eiA()) Q.push(bb.resolve(A, B)), Q.push(`**/${B}/**`);
    return Q.push(bb.resolve(A, ".git/hooks")), Q.push(bb.resolve(A, ".git/config")), Q.push("**/.git/hooks/**"), Q.push("**/.git/config"), [...new Set(Q)]
}

function GnA(A) {
    return "^" + A.replace(/[.^$+{}()|\\]/g, "\\$&").replace(/\[([^\]]*?)$/g, "\\[$1").replace(/\*\*\//g, "__GLOBSTAR_SLASH__").replace(/\*\*/g, "__GLOBSTAR__").replace(/\*/g, "[^/]*").replace(/\?/g, "[^/]").replace(/__GLOBSTAR_SLASH__/g, "(.*/)?").replace(/__GLOBSTAR__/g, ".*") + "$"
}

function Z16(A) {
    return `CMD64_${QnA(A)}_END_${x3B}`
}

function k3B(A) {
    let Q = [],
        B = bb.dirname(A);
    while (B !== "/" && B !== ".") {
        Q.push(B);
        let G = bb.dirname(B);
        if (G === B) break;
        B = G
    }
    return Q
}

function v3B(A, Q) {
    let B = [];
    for (let G of A) {
        let Z = YT(G);
        if (IT(Z)) {
            let I = GnA(Z);
            B.push("(deny file-write-unlink", `  (regex ${dw(I)})`, `  (with message "${Q}"))`);
            let Y = Z.split(/[*?[\]]/)[0];
            if (Y && Y !== "/") {
                let J = Y.endsWith("/") ? Y.slice(0, -1) : bb.dirname(Y);
                B.push("(deny file-write-unlink", `  (literal ${dw(J)})`, `  (with message "${Q}"))`);
                for (let W of k3B(J)) B.push("(deny file-write-unlink", `  (literal ${dw(W)})`, `  (with message "${Q}"))`)
            }
        } else {
            B.push("(deny file-write-unlink", `  (subpath ${dw(Z)})`, `  (with message "${Q}"))`);
            for (let I of k3B(Z)) B.push("(deny file-write-unlink", `  (literal ${dw(I)})`, `  (with message "${Q}"))`)
        }
    }
    return B
}

function I16(A, Q) {
    if (!A) return ["(allow file-read*)"];
    let B = [];
    B.push("(allow file-read*)");
    for (let G of A.denyOnly || []) {
        let Z = YT(G);
        if (IT(Z)) {
            let I = GnA(Z);
            B.push("(deny file-read*", `  (regex ${dw(I)})`, `  (with message "${Q}"))`)
        } else B.push("(deny file-read*", `  (subpath ${dw(Z)})`, `  (with message "${Q}"))`)
    }
    return B.push(...v3B(A.denyOnly || [], Q)), B
}

function Y16(A, Q) {
    if (!A) return ["(allow file-write*)"];
    let B = [],
        G = W16();
    for (let I of G) {
        let Y = YT(I);
        B.push("(allow file-write*", `  (subpath ${dw(Y)})`, `  (with message "${Q}"))`)
    }
    for (let I of A.allowOnly || []) {
        let Y = YT(I);
        if (IT(Y)) {
            let J = GnA(Y);
            B.push("(allow file-write*", `  (regex ${dw(J)})`, `  (with message "${Q}"))`)
        } else B.push("(allow file-write*", `  (subpath ${dw(Y)})`, `  (with message "${Q}"))`)
    }
    let Z = [...A.denyWithinAllow || [], ...G16()];
    for (let I of Z) {
        let Y = YT(I);
        if (IT(Y)) {
            let J = GnA(Y);
            B.push("(deny file-write*", `  (regex ${dw(J)})`, `  (with message "${Q}"))`)
        } else B.push("(deny file-write*", `  (subpath ${dw(Y)})`, `  (with message "${Q}"))`)
    }
    return B.push(...v3B(Z, Q)), B
}

function J16({
    readConfig: A,
    writeConfig: Q,
    httpProxyPort: B,
    socksProxyPort: G,
    needsNetworkRestriction: Z,
    allowUnixSockets: I,
    allowAllUnixSockets: Y,
    allowLocalBinding: J,
    logTag: W
}) {
    let X = ["(version 1)", `(deny default (with message "${W}"))`, "", `; LogTag: ${W}`, "", "; Essential permissions - based on Chrome sandbox policy", "; Process permissions", "(allow process-exec)", "(allow process-fork)", "(allow process-info* (target same-sandbox))", "(allow signal (target same-sandbox))", "(allow mach-priv-task-port (target same-sandbox))", "", "; User preferences", "(allow user-preference-read)", "", "; Mach IPC - specific services only (no wildcard)", "(allow mach-lookup", '  (global-name "com.apple.audio.systemsoundserver")', '  (global-name "com.apple.distributed_notifications@Uv3")', '  (global-name "com.apple.FontObjectsServer")', '  (global-name "com.apple.fonts")', '  (global-name "com.apple.logd")', '  (global-name "com.apple.lsd.mapdb")', '  (global-name "com.apple.PowerManagement.control")', '  (global-name "com.apple.system.logger")', '  (global-name "com.apple.system.notification_center")', '  (global-name "com.apple.trustd.agent")', '  (global-name "com.apple.system.opendirectoryd.libinfo")', '  (global-name "com.apple.system.opendirectoryd.membership")', '  (global-name "com.apple.bsd.dirhelper")', '  (global-name "com.apple.securityd.xpc")', '  (global-name "com.apple.coreservices.launchservicesd")', ")", "", "; POSIX IPC - shared memory", "(allow ipc-posix-shm)", "", "; POSIX IPC - semaphores for Python multiprocessing", "(allow ipc-posix-sem)", "", "; IOKit - specific operations only", "(allow iokit-open", '  (iokit-registry-entry-class "IOSurfaceRootUserClient")', '  (iokit-registry-entry-class "RootDomainUserClient")', '  (iokit-user-client-class "IOSurfaceSendRight")', ")", "", "; IOKit properties", "(allow iokit-get-properties)", "", "; Specific safe system-sockets, doesn't allow network access", "(allow system-socket (require-all (socket-domain AF_SYSTEM) (socket-protocol 2)))", "", "; sysctl - specific sysctls only", "(allow sysctl-read", '  (sysctl-name "hw.activecpu")', '  (sysctl-name "hw.busfrequency_compat")', '  (sysctl-name "hw.byteorder")', '  (sysctl-name "hw.cacheconfig")', '  (sysctl-name "hw.cachelinesize_compat")', '  (sysctl-name "hw.cpufamily")', '  (sysctl-name "hw.cpufrequency")', '  (sysctl-name "hw.cpufrequency_compat")', '  (sysctl-name "hw.cputype")', '  (sysctl-name "hw.l1dcachesize_compat")', '  (sysctl-name "hw.l1icachesize_compat")', '  (sysctl-name "hw.l2cachesize_compat")', '  (sysctl-name "hw.l3cachesize_compat")', '  (sysctl-name "hw.logicalcpu")', '  (sysctl-name "hw.logicalcpu_max")', '  (sysctl-name "hw.machine")', '  (sysctl-name "hw.memsize")', '  (sysctl-name "hw.ncpu")', '  (sysctl-name "hw.nperflevels")', '  (sysctl-name "hw.packages")', '  (sysctl-name "hw.pagesize_compat")', '  (sysctl-name "hw.pagesize")', '  (sysctl-name "hw.physicalcpu")', '  (sysctl-name "hw.physicalcpu_max")', '  (sysctl-name "hw.tbfrequency_compat")', '  (sysctl-name "hw.vectorunit")', '  (sysctl-name "kern.argmax")', '  (sysctl-name "kern.bootargs")', '  (sysctl-name "kern.hostname")', '  (sysctl-name "kern.maxfiles")', '  (sysctl-name "kern.maxfilesperproc")', '  (sysctl-name "kern.maxproc")', '  (sysctl-name "kern.ngroups")', '  (sysctl-name "kern.osproductversion")', '  (sysctl-name "kern.osrelease")', '  (sysctl-name "kern.ostype")', '  (sysctl-name "kern.osvariant_status")', '  (sysctl-name "kern.osversion")', '  (sysctl-name "kern.secure_kernel")', '  (sysctl-name "kern.tcsm_available")', '  (sysctl-name "kern.tcsm_enable")', '  (sysctl-name "kern.usrstack64")', '  (sysctl-name "kern.version")', '  (sysctl-name "kern.willshutdown")', '  (sysctl-name "machdep.cpu.brand_string")', '  (sysctl-name "machdep.ptrauth_enabled")', '  (sysctl-name "security.mac.lockdown_mode_state")', '  (sysctl-name "sysctl.proc_cputype")', '  (sysctl-name "vm.loadavg")', '  (sysctl-name-prefix "hw.optional.arm")', '  (sysctl-name-prefix "hw.optional.arm.")', '  (sysctl-name-prefix "hw.optional.armv8_")', '  (sysctl-name-prefix "hw.perflevel")', '  (sysctl-name-prefix "kern.proc.pgrp.")', '  (sysctl-name-prefix "kern.proc.pid.")', '  (sysctl-name-prefix "machdep.cpu.")', '  (sysctl-name-prefix "net.routetable.")', ")", "", "; V8 thread calculations", "(allow sysctl-write", '  (sysctl-name "kern.tcsm_enable")', ")", "", "; Distributed notifications", "(allow distributed-notification-post)", "", "; Specific mach-lookup permissions for security operations", '(allow mach-lookup (global-name "com.apple.SecurityServer"))', "", "; File I/O on device files", '(allow file-ioctl (literal "/dev/null"))', '(allow file-ioctl (literal "/dev/zero"))', '(allow file-ioctl (literal "/dev/random"))', '(allow file-ioctl (literal "/dev/urandom"))', '(allow file-ioctl (literal "/dev/dtracehelper"))', '(allow file-ioctl (literal "/dev/tty"))', "", "(allow file-ioctl file-read-data file-write-data", "  (require-all", '    (literal "/dev/null")', "    (vnode-type CHARACTER-DEVICE)", "  )", ")", ""];
    if (X.push("; Network"), !Z) X.push("(allow network*)");
    else {
        if (J) X.push('(allow network-bind (local ip "localhost:*"))'), X.push('(allow network-inbound (local ip "localhost:*"))'), X.push('(allow network-outbound (local ip "localhost:*"))');
        if (Y) X.push('(allow network* (subpath "/"))');
        else if (I && I.length > 0)
            for (let F of I) {
                let V = YT(F);
                X.push(`(allow network* (subpath ${dw(V)}))`)
            }
        if (B !== void 0) X.push(`(allow network-bind (local ip "localhost:${B}"))`), X.push(`(allow network-inbound (local ip "localhost:${B}"))`), X.push(`(allow network-outbound (remote ip "localhost:${B}"))`);
        if (G !== void 0) X.push(`(allow network-bind (local ip "localhost:${G}"))`), X.push(`(allow network-inbound (local ip "localhost:${G}"))`), X.push(`(allow network-outbound (remote ip "localhost:${G}"))`)
    }
    return X.push(""), X.push("; File read"), X.push(...I16(A, W)), X.push(""), X.push("; File write"), X.push(...Y16(Q, W)), X.join(`
`)
}

function dw(A) {
    return JSON.stringify(A)
}

function W16() {
    let A = process.env.TMPDIR;
    if (!A) return [];
    if (!A.match(/^\/(private\/)?var\/folders\/[^/]{2}\/[^/]+\/T\/?$/)) return [];
    let B = A.replace(/\/T\/?$/, "");
    if (B.startsWith("/private/var/")) return [B, B.replace("/private", "")];
    else if (B.startsWith("/var/")) return [B, "/private" + B];
    return [B]
}

function b3B(A) {
    let {
        command: Q,
        needsNetworkRestriction: B,
        httpProxyPort: G,
        socksProxyPort: Z,
        allowUnixSockets: I,
        allowAllUnixSockets: Y,
        allowLocalBinding: J,
        readConfig: W,
        writeConfig: X,
        binShell: F
    } = A, V = W && W.denyOnly.length > 0;
    if (!B && !V && X === void 0) return Q;
    let D = Z16(Q),
        H = J16({
            readConfig: W,
            writeConfig: X,
            httpProxyPort: G,
            socksProxyPort: Z,
            needsNetworkRestriction: B,
            allowUnixSockets: I,
            allowAllUnixSockets: Y,
            allowLocalBinding: J,
            logTag: D
        }),
        C = `export ${AnA(G,Z).join(" ")} && `,
        E = F || "bash",
        z = B16("which", [E], {
            encoding: "utf8"
        });
    if (z.status !== 0) throw Error(`Shell '${E}' not found in PATH`);
    let w = z.stdout.trim(),
        N = y3B.default.quote(["sandbox-exec", "-p", H, w, "-c", C + Q]);
    return SQ(`[Sandbox macOS] Applied restrictions - network: ${!!(G||Z)}, read: ${W?"allowAllExcept"in W?"allowAllExcept":"denyAllExcept":"none"}, write: ${X?"allowAllExcept"in X?"allowAllExcept":"denyAllExcept":"none"}`), N
}

function f3B(A, Q) {
    let B = /CMD64_(.+?)_END/,
        G = /Sandbox:\s+(.+)$/,
        Z = Q?.["*"] || [],
        I = Q ? Object.entries(Q).filter(([J]) => J !== "*") : [],
        Y = Q16("log", ["stream", "--predicate", `(eventMessage ENDSWITH "${x3B}")`, "--style", "compact"]);
    return Y.stdout?.on("data", (J) => {
        let W = J.toString().split(`
`),
            X = W.find((C) => C.includes("Sandbox:") && C.includes("deny")),
            F = W.find((C) => C.startsWith("CMD64_"));
        if (!X) return;
        let V = X.match(G);
        if (!V?.[1]) return;
        let K = V[1],
            D, H;
        if (F) {
            if (H = F.match(B)?.[1], H) try {
                D = U3B(H)
            } catch {}
        }
        if (K.includes("mDNSResponder") || K.includes("mach-lookup com.apple.diagnosticd") || K.includes("mach-lookup com.apple.analyticsd")) return;
        if (Q && D) {
            if (Z.length > 0) {
                if (Z.some((E) => K.includes(E))) return
            }
            for (let [C, E] of I)
                if (D.includes(C)) {
                    if (E.some((w) => K.includes(w))) return
                }
        }
        A({
            line: K,
            command: D,
            encodedCommand: H,
            timestamp: new Date
        })
    }), Y.stderr?.on("data", (J) => {
        SQ(`[Sandbox Monitor] Log stream stderr: ${J.toString()}`)
    }), Y.on("error", (J) => {
        SQ(`[Sandbox Monitor] Failed to start log stream: ${J.message}`)
    }), Y.on("exit", (J) => {
        SQ(`[Sandbox Monitor] Log stream exited with code: ${J}`)
    }), () => {
        SQ("[Sandbox Monitor] Stopping log monitor"), Y.kill("SIGTERM")
    }
}
var y3B, x3B;
var h3B = L(() => {
    a3A();
    y3B = GA(bxA(), 1);
    x3B = `_${Math.random().toString(36).slice(2,11)}_SBX`
});
class azA {
    constructor() {
        this.violations = [], this.totalCount = 0, this.maxSize = 100, this.listeners = new Set
    }
    addViolation(A) {
        if (this.violations.push(A), this.totalCount++, this.violations.length > this.maxSize) this.violations = this.violations.slice(-this.maxSize);
        this.notifyListeners()
    }
    getViolations(A) {
        if (A === void 0) return [...this.violations];
        return this.violations.slice(-A)
    }
    getCount() {
        return this.violations.length
    }
    getTotalCount() {
        return this.totalCount
    }
    getViolationsForCommand(A) {
        let Q = QnA(A);
        return this.violations.filter((B) => B.encodedCommand === Q)
    }
    clear() {
        this.violations = [], this.notifyListeners()
    }
    subscribe(A) {
        return this.listeners.add(A), A(this.getViolations()), () => {
            this.listeners.delete(A)
        }
    }
    notifyListeners() {
        let A = this.getViolations();
        this.listeners.forEach((Q) => Q(A))
    }
}
var _b1 = L(() => {
    a3A()
});
import * as yb1 from "fs";
import {
    EOL as kb1
} from "node:os";

function X16() {
    if (g3B) return;
    let A = () => xb1().catch((Q) => {
        SQ(`Cleanup failed in registerCleanup ${Q}`, {
            level: "error"
        })
    });
    process.once("exit", A), process.once("SIGINT", A), process.once("SIGTERM", A), g3B = !0
}

function u3B(A, Q) {
    if (Q.startsWith("*.")) {
        let B = Q.substring(2);
        return A.toLowerCase().endsWith("." + B.toLowerCase())
    }
    return A.toLowerCase() === Q.toLowerCase()
}
async function d3B(A, Q, B) {
    if (!a8) return SQ("No config available, denying network request"), !1;
    for (let G of a8.network.deniedDomains)
        if (u3B(Q, G)) return SQ(`Denied by config rule: ${Q}:${A}`), !1;
    for (let G of a8.network.allowedDomains)
        if (u3B(Q, G)) return SQ(`Allowed by config rule: ${Q}:${A}`), !0;
    if (!B) return SQ(`No matching config rule, denying: ${Q}:${A}`), !1;
    SQ(`No matching config rule, asking user: ${Q}:${A}`);
    try {
        if (await B({
                host: Q,
                port: A
            })) return SQ(`User allowed: ${Q}:${A}`), !0;
        else return SQ(`User denied: ${Q}:${A}`), !1
    } catch (G) {
        return SQ(`Error in permission callback: ${G}`, {
            level: "error"
        }), !1
    }
}
async function F16(A) {
    return s3A = P6B({
        filter: (Q, B) => d3B(Q, B, A)
    }), new Promise((Q, B) => {
        if (!s3A) {
            B(Error("HTTP proxy server undefined before listen"));
            return
        }
        let G = s3A;
        G.once("error", B), G.once("listening", () => {
            let Z = G.address();
            if (Z && typeof Z === "object") G.unref(), SQ(`HTTP proxy listening on localhost:${Z.port}`), Q(Z.port);
            else B(Error("Failed to get proxy server address"))
        }), G.listen(0, "127.0.0.1")
    })
}
async function V16(A) {
    return Yt = h6B({
        filter: (Q, B) => d3B(Q, B, A)
    }), new Promise((Q, B) => {
        if (!Yt) {
            B(Error("SOCKS proxy server undefined before listen"));
            return
        }
        Yt.listen(0, "127.0.0.1").then((G) => {
            Yt?.unref(), Q(G)
        }).catch(B)
    })
}
async function K16(A, Q, B = !1) {
    if (gc) {
        await gc;
        return
    }
    if (a8 = A, !p3B()) {
        let G = ZM(),
            Z = "Sandbox dependencies are not available on this system.";
        if (G === "linux") Z += " Required: ripgrep (rg), bubblewrap (bwrap), and socat.";
        else if (G === "macos") Z += " Required: ripgrep (rg).";
        else Z += ` Platform '${G}' is not supported.`;
        throw Error(Z)
    }
    if (B && ZM() === "macos") ZnA = f3B(InA.addViolation.bind(InA), a8.ignoreViolations), SQ("Started macOS sandbox log monitor");
    X16(), gc = (async () => {
        try {
            let G;
            if (a8.network.httpProxyPort !== void 0) G = a8.network.httpProxyPort, SQ(`Using external HTTP proxy on port ${G}`);
            else G = await F16(Q);
            let Z;
            if (a8.network.socksProxyPort !== void 0) Z = a8.network.socksProxyPort, SQ(`Using external SOCKS proxy on port ${Z}`);
            else Z = await V16(Q);
            let I;
            if (ZM() === "linux") I = await j3B(G, Z);
            let Y = {
                httpProxyPort: G,
                socksProxyPort: Z,
                linuxBridge: I
            };
            return IM = Y, SQ("Network infrastructure initialized"), Y
        } catch (G) {
            throw gc = void 0, IM = void 0, xb1().catch((Z) => {
                SQ(`Cleanup failed in initializationPromise ${Z}`, {
                    level: "error"
                })
            }), G
        }
    })(), await gc
}

function c3B(A) {
    return ["macos", "linux"].includes(A)
}

function D16() {
    return a8 !== void 0
}

function p3B(A) {
    let Q = ZM();
    if (!c3B(Q)) return !1;
    if ((A ?? a8?.ripgrep)?.command === void 0) {
        if (!E3B()) return !1
    }
    if (Q === "linux") {
        let Z = a8?.network?.allowAllUnixSockets ?? !1;
        return P3B(Z)
    }
    return !0
}

function H16() {
    if (!a8) return {
        denyOnly: []
    };
    return {
        denyOnly: a8.filesystem.denyRead.map((Q) => izA(Q)).filter((Q) => {
            if (ZM() === "linux" && IT(Q)) return SQ(`Skipping glob pattern on Linux: ${Q}`), !1;
            return !0
        })
    }
}

function C16() {
    if (!a8) return {
        allowOnly: nzA(),
        denyWithinAllow: []
    };
    let A = a8.filesystem.allowWrite.map((G) => izA(G)).filter((G) => {
            if (ZM() === "linux" && IT(G)) return SQ(`Skipping glob pattern on Linux: ${G}`), !1;
            return !0
        }),
        Q = a8.filesystem.denyWrite.map((G) => izA(G)).filter((G) => {
            if (ZM() === "linux" && IT(G)) return SQ(`Skipping glob pattern on Linux: ${G}`), !1;
            return !0
        });
    return {
        allowOnly: [...nzA(), ...A],
        denyWithinAllow: Q
    }
}

function E16() {
    if (!a8) return {};
    let A = a8.network.allowedDomains,
        Q = a8.network.deniedDomains;
    return {
        ...A.length > 0 && {
            allowedHosts: A
        },
        ...Q.length > 0 && {
            deniedHosts: Q
        }
    }
}

function l3B() {
    return a8?.network?.allowUnixSockets
}

function m3B() {
    return a8?.network?.allowAllUnixSockets
}

function i3B() {
    return a8?.network?.allowLocalBinding
}

function n3B() {
    return a8?.ignoreViolations
}

function a3B() {
    return a8?.enableWeakerNestedSandbox
}

function z16() {
    return a8?.ripgrep ?? {
        command: "rg"
    }
}

function U16() {
    return a8?.mandatoryDenySearchDepth ?? 3
}

function s3B() {
    return IM?.httpProxyPort
}

function r3B() {
    return IM?.socksProxyPort
}

function o3B() {
    return IM?.linuxBridge?.httpSocketPath
}

function t3B() {
    return IM?.linuxBridge?.socksSocketPath
}
async function e3B() {
    if (!a8) return !1;
    if (gc) try {
        return await gc, !0
    } catch {
        return !1
    }
    return IM !== void 0
}
async function $16(A, Q, B, G) {
    let Z = ZM(),
        I = B?.filesystem?.allowWrite ?? a8?.filesystem.allowWrite ?? [],
        Y = {
            allowOnly: [...nzA(), ...I],
            denyWithinAllow: B?.filesystem?.denyWrite ?? a8?.filesystem.denyWrite ?? []
        },
        J = {
            denyOnly: B?.filesystem?.denyRead ?? a8?.filesystem.denyRead ?? []
        },
        W = B?.network?.allowedDomains !== void 0 || a8?.network?.allowedDomains !== void 0,
        X = B?.network?.allowedDomains ?? a8?.network.allowedDomains ?? [],
        F = W,
        V = X.length > 0;
    if (V) await e3B();
    switch (Z) {
        case "macos":
            return b3B({
                command: A,
                needsNetworkRestriction: F,
                httpProxyPort: V ? s3B() : void 0,
                socksProxyPort: V ? r3B() : void 0,
                readConfig: J,
                writeConfig: Y,
                allowUnixSockets: l3B(),
                allowAllUnixSockets: m3B(),
                allowLocalBinding: i3B(),
                ignoreViolations: n3B(),
                binShell: Q
            });
        case "linux":
            return S3B({
                command: A,
                needsNetworkRestriction: F,
                httpSocketPath: V ? o3B() : void 0,
                socksSocketPath: V ? t3B() : void 0,
                httpProxyPort: V ? IM?.httpProxyPort : void 0,
                socksProxyPort: V ? IM?.socksProxyPort : void 0,
                readConfig: J,
                writeConfig: Y,
                enableWeakerNestedSandbox: a3B(),
                allowAllUnixSockets: m3B(),
                binShell: Q,
                ripgrepConfig: z16(),
                mandatoryDenySearchDepth: U16(),
                abortSignal: G
            });
        default:
            throw Error(`Sandbox configuration is not supported on platform: ${Z}`)
    }
}

function w16() {
    return a8
}

function q16(A) {
    a8 = Jv(A), SQ("Sandbox configuration updated")
}
async function xb1() {
    if (ZnA) ZnA(), ZnA = void 0;
    if (IM?.linuxBridge) {
        let {
            httpSocketPath: Q,
            socksSocketPath: B,
            httpBridgeProcess: G,
            socksBridgeProcess: Z
        } = IM.linuxBridge, I = [];
        if (G.pid && !G.killed) try {
            process.kill(G.pid, "SIGTERM"), SQ("Sent SIGTERM to HTTP bridge process"), I.push(new Promise((Y) => {
                G.once("exit", () => {
                    SQ("HTTP bridge process exited"), Y()
                }), setTimeout(() => {
                    if (!G.killed) {
                        SQ("HTTP bridge did not exit, forcing SIGKILL", {
                            level: "warn"
                        });
                        try {
                            if (G.pid) process.kill(G.pid, "SIGKILL")
                        } catch {}
                    }
                    Y()
                }, 5000)
            }))
        } catch (Y) {
            if (Y.code !== "ESRCH") SQ(`Error killing HTTP bridge: ${Y}`, {
                level: "error"
            })
        }
        if (Z.pid && !Z.killed) try {
            process.kill(Z.pid, "SIGTERM"), SQ("Sent SIGTERM to SOCKS bridge process"), I.push(new Promise((Y) => {
                Z.once("exit", () => {
                    SQ("SOCKS bridge process exited"), Y()
                }), setTimeout(() => {
                    if (!Z.killed) {
                        SQ("SOCKS bridge did not exit, forcing SIGKILL", {
                            level: "warn"
                        });
                        try {
                            if (Z.pid) process.kill(Z.pid, "SIGKILL")
                        } catch {}
                    }
                    Y()
                }, 5000)
            }))
        } catch (Y) {
            if (Y.code !== "ESRCH") SQ(`Error killing SOCKS bridge: ${Y}`, {
                level: "error"
            })
        }
        if (await Promise.all(I), Q) try {
            yb1.rmSync(Q, {
                force: !0
            }), SQ("Cleaned up HTTP socket")
        } catch (Y) {
            SQ(`HTTP socket cleanup error: ${Y}`, {
                level: "error"
            })
        }
        if (B) try {
            yb1.rmSync(B, {
                force: !0
            }), SQ("Cleaned up SOCKS socket")
        } catch (Y) {
            SQ(`SOCKS socket cleanup error: ${Y}`, {
                level: "error"
            })
        }
    }
    let A = [];
    if (s3A) {
        let Q = s3A,
            B = new Promise((G) => {
                Q.close((Z) => {
                    if (Z && Z.message !== "Server is not running.") SQ(`Error closing HTTP proxy server: ${Z.message}`, {
                        level: "error"
                    });
                    G()
                })
            });
        A.push(B)
    }
    if (Yt) {
        let Q = Yt.close().catch((B) => {
            SQ(`Error closing SOCKS proxy server: ${B.message}`, {
                level: "error"
            })
        });
        A.push(Q)
    }
    await Promise.all(A), s3A = void 0, Yt = void 0, IM = void 0, gc = void 0
}

function N16() {
    return InA
}

function L16(A, Q) {
    if (!a8) return Q;
    let B = InA.getViolationsForCommand(A);
    if (B.length === 0) return Q;
    let G = Q;
    G += kb1 + "<sandbox_violations>" + kb1;
    for (let Z of B) G += Z.line + kb1;
    return G += "</sandbox_violations>", G
}

function M16() {
    if (ZM() !== "linux" || !a8) return [];
    let A = [],
        Q = [...a8.filesystem.denyRead, ...a8.filesystem.allowWrite, ...a8.filesystem.denyWrite];
    for (let B of Q) {
        let G = izA(B);
        if (IT(G)) A.push(B)
    }
    return A
}
var a8, s3A, Yt, IM, gc, g3B = !1,
    ZnA, InA, rI;
var A7B = L(() => {
    j6B();
    g6B();
    n3A();
    _3B();
    h3B();
    a3A();
    qb1();
    _b1();
    InA = new azA;
    rI = {
        initialize: K16,
        isSupportedPlatform: c3B,
        isSandboxingEnabled: D16,
        checkDependencies: p3B,
        getFsReadConfig: H16,
        getFsWriteConfig: C16,
        getNetworkRestrictionConfig: E16,
        getAllowUnixSockets: l3B,
        getAllowLocalBinding: i3B,
        getIgnoreViolations: n3B,
        getEnableWeakerNestedSandbox: a3B,
        getProxyPort: s3B,
        getSocksProxyPort: r3B,
        getLinuxHttpSocketPath: o3B,
        getLinuxSocksSocketPath: t3B,
        waitForNetworkInitialization: e3B,
        wrapWithSandbox: $16,
        reset: xb1,
        getSandboxViolationStore: N16,
        annotateStderrWithSandboxFailures: L16,
        getLinuxGlobPatternWarnings: M16,
        getConfig: w16,
        updateConfig: q16
    }
});
var Q7B, vb1, B7B, G7B, Z7B, I7B, Y7B;
var J7B = L(() => {
    h2();
    Q7B = _.string().refine((A) => {
        if (A.includes("://") || A.includes("/") || A.includes(":")) return !1;
        if (A === "localhost") return !0;
        if (A.startsWith("*.")) {
            let Q = A.slice(2);
            if (!Q.includes(".") || Q.startsWith(".") || Q.endsWith(".")) return !1;
            let B = Q.split(".");
            return B.length >= 2 && B.every((G) => G.length > 0)
        }
        if (A.includes("*")) return !1;
        return A.includes(".") && !A.startsWith(".") && !A.endsWith(".")
    }, {
        message: 'Invalid domain pattern. Must be a valid domain (e.g., "example.com") or wildcard (e.g., "*.example.com"). Overly broad patterns like "*.com" or "*" are not allowed for security reasons.'
    }), vb1 = _.string().min(1, "Path cannot be empty"), B7B = _.object({
        allowedDomains: _.array(Q7B).describe('List of allowed domains (e.g., ["github.com", "*.npmjs.org"])'),
        deniedDomains: _.array(Q7B).describe("List of denied domains"),
        allowUnixSockets: _.array(_.string()).optional().describe("Unix socket paths that are allowed (macOS only)"),
        allowAllUnixSockets: _.boolean().optional().describe("Allow ALL Unix sockets (Linux only - disables Unix socket blocking)"),
        allowLocalBinding: _.boolean().optional().describe("Whether to allow binding to local ports (default: false)"),
        httpProxyPort: _.number().int().min(1).max(65535).optional().describe("Port of an external HTTP proxy to use instead of starting a local one. When provided, the library will skip starting its own HTTP proxy and use this port. The external proxy must handle domain filtering."),
        socksProxyPort: _.number().int().min(1).max(65535).optional().describe("Port of an external SOCKS proxy to use instead of starting a local one. When provided, the library will skip starting its own SOCKS proxy and use this port. The external proxy must handle domain filtering.")
    }), G7B = _.object({
        denyRead: _.array(vb1).describe("Paths denied for reading"),
        allowWrite: _.array(vb1).describe("Paths allowed for writing"),
        denyWrite: _.array(vb1).describe("Paths denied for writing (takes precedence over allowWrite)")
    }), Z7B = _.record(_.string(), _.array(_.string())).describe('Map of command patterns to filesystem paths to ignore violations for. Use "*" to match all commands'), I7B = _.object({
        command: _.string().describe('The ripgrep command to execute (e.g., "rg", "claude")'),
        args: _.array(_.string()).optional().describe('Additional arguments to pass before ripgrep args (e.g., ["--ripgrep"])')
    }), Y7B = _.object({
        network: B7B.describe("Network restrictions configuration"),
        filesystem: G7B.describe("Filesystem restrictions configuration"),
        ignoreViolations: Z7B.optional().describe("Optional configuration for ignoring specific violations"),
        enableWeakerNestedSandbox: _.boolean().optional().describe("Enable weaker nested sandbox mode (for Docker environments)"),
        ripgrep: I7B.optional().describe('Custom ripgrep configuration (default: { command: "rg" })'),
        mandatoryDenySearchDepth: _.number().int().min(1).max(10).optional().describe("Maximum directory depth to search for dangerous files on Linux (default: 3). Higher values provide more protection but slower performance.")
    })
});
var W7B = L(() => {
    A7B();
    _b1();
    J7B();
    a3A()
});
import {
    stat as O16,
    lstat as X7B,
    readdir as R16,
    realpath as T16
} from "node:fs/promises";
import {
    Readable as P16
} from "node:stream";
import {
    resolve as F7B,
    relative as j16,
    join as S16,
    sep as _16
} from "node:path";

function E7B(A, Q = {}) {
    let B = Q.entryType || Q.type;
    if (B === "both") B = cw.FILE_DIR_TYPE;
    if (B) Q.type = B;
    if (!A) throw Error("readdirp: root argument is required. Usage: readdirp(root, options)");
    else if (typeof A !== "string") throw TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
    else if (B && !V7B.includes(B)) throw Error(`readdirp: Invalid type passed. Use one of ${V7B.join(", ")}`);
    return Q.root = A, new C7B(Q)
}
var cw, bb1, H7B = "READDIRP_RECURSIVE_ERROR",
    k16, V7B, y16, x16, v16 = (A) => k16.has(A.code),
    b16, K7B = (A) => !0,
    D7B = (A) => {
        if (A === void 0) return K7B;
        if (typeof A === "function") return A;
        if (typeof A === "string") {
            let Q = A.trim();
            return (B) => B.basename === Q
        }
        if (Array.isArray(A)) {
            let Q = A.map((B) => B.trim());
            return (B) => Q.some((G) => B.basename === G)
        }
        return K7B
    },
    C7B;
var z7B = L(() => {
    cw = {
        FILE_TYPE: "files",
        DIR_TYPE: "directories",
        FILE_DIR_TYPE: "files_directories",
        EVERYTHING_TYPE: "all"
    }, bb1 = {
        root: ".",
        fileFilter: (A) => !0,
        directoryFilter: (A) => !0,
        type: cw.FILE_TYPE,
        lstat: !1,
        depth: 2147483648,
        alwaysStat: !1,
        highWaterMark: 4096
    };
    Object.freeze(bb1);
    k16 = new Set(["ENOENT", "EPERM", "EACCES", "ELOOP", H7B]), V7B = [cw.DIR_TYPE, cw.EVERYTHING_TYPE, cw.FILE_DIR_TYPE, cw.FILE_TYPE], y16 = new Set([cw.DIR_TYPE, cw.EVERYTHING_TYPE, cw.FILE_DIR_TYPE]), x16 = new Set([cw.EVERYTHING_TYPE, cw.FILE_DIR_TYPE, cw.FILE_TYPE]), b16 = process.platform === "win32";
    C7B = class C7B extends P16 {
        constructor(A = {}) {
            super({
                objectMode: !0,
                autoDestroy: !0,
                highWaterMark: A.highWaterMark
            });
            let Q = {
                    ...bb1,
                    ...A
                },
                {
                    root: B,
                    type: G
                } = Q;
            this._fileFilter = D7B(Q.fileFilter), this._directoryFilter = D7B(Q.directoryFilter);
            let Z = Q.lstat ? X7B : O16;
            if (b16) this._stat = (I) => Z(I, {
                bigint: !0
            });
            else this._stat = Z;
            this._maxDepth = Q.depth ?? bb1.depth, this._wantsDir = G ? y16.has(G) : !1, this._wantsFile = G ? x16.has(G) : !1, this._wantsEverything = G === cw.EVERYTHING_TYPE, this._root = F7B(B), this._isDirent = !Q.alwaysStat, this._statsProp = this._isDirent ? "dirent" : "stats", this._rdOptions = {
                encoding: "utf8",
                withFileTypes: this._isDirent
            }, this.parents = [this._exploreDir(B, 1)], this.reading = !1, this.parent = void 0
        }
        async _read(A) {
            if (this.reading) return;
            this.reading = !0;
            try {
                while (!this.destroyed && A > 0) {
                    let Q = this.parent,
                        B = Q && Q.files;
                    if (B && B.length > 0) {
                        let {
                            path: G,
                            depth: Z
                        } = Q, I = B.splice(0, A).map((J) => this._formatEntry(J, G)), Y = await Promise.all(I);
                        for (let J of Y) {
                            if (!J) continue;
                            if (this.destroyed) return;
                            let W = await this._getEntryType(J);
                            if (W === "directory" && this._directoryFilter(J)) {
                                if (Z <= this._maxDepth) this.parents.push(this._exploreDir(J.fullPath, Z + 1));
                                if (this._wantsDir) this.push(J), A--
                            } else if ((W === "file" || this._includeAsFile(J)) && this._fileFilter(J)) {
                                if (this._wantsFile) this.push(J), A--
                            }
                        }
                    } else {
                        let G = this.parents.pop();
                        if (!G) {
                            this.push(null);
                            break
                        }
                        if (this.parent = await G, this.destroyed) return
                    }
                }
            } catch (Q) {
                this.destroy(Q)
            } finally {
                this.reading = !1
            }
        }
        async _exploreDir(A, Q) {
            let B;
            try {
                B = await R16(A, this._rdOptions)
            } catch (G) {
                this._onError(G)
            }
            return {
                files: B,
                depth: Q,
                path: A
            }
        }
        async _formatEntry(A, Q) {
            let B, G = this._isDirent ? A.name : A;
            try {
                let Z = F7B(S16(Q, G));
                B = {
                    path: j16(this._root, Z),
                    fullPath: Z,
                    basename: G
                }, B[this._statsProp] = this._isDirent ? A : await this._stat(Z)
            } catch (Z) {
                this._onError(Z);
                return
            }
            return B
        }
        _onError(A) {
            if (v16(A) && !this.destroyed) this.emit("warn", A);
            else this.destroy(A)
        }
        async _getEntryType(A) {
            if (!A && this._statsProp in A) return "";
            let Q = A[this._statsProp];
            if (Q.isFile()) return "file";
            if (Q.isDirectory()) return "directory";
            if (Q && Q.isSymbolicLink()) {
                let B = A.fullPath;
                try {
                    let G = await T16(B),
                        Z = await X7B(G);
                    if (Z.isFile()) return "file";
                    if (Z.isDirectory()) {
                        let I = G.length;
                        if (B.startsWith(G) && B.substr(I, 1) === _16) {
                            let Y = Error(`Circular symlink detected: "${B}" points to "${G}"`);
                            return Y.code = H7B, this._onError(Y)
                        }
                        return "directory"
                    }
                } catch (G) {
                    return this._onError(G), ""
                }
            }
        }
        _includeAsFile(A) {
            let Q = A && A[this._statsProp];
            return Q && this._wantsEverything && !Q.isDirectory()
        }
    }
});
import {
    watchFile as f16,
    unwatchFile as U7B,
    watch as h16
} from "fs";
import {
    open as g16,
    stat as w7B,
    lstat as u16,
    realpath as fb1
} from "fs/promises";
import * as oI from "path";
import {
    type as m16
} from "os";

function $7B(A, Q, B, G, Z) {
    let I = (Y, J) => {
        if (B(A), Z(Y, J, {
                watchedPath: A
            }), J && A !== J) WnA(oI.resolve(A, J), Jt, oI.join(A, J))
    };
    try {
        return h16(A, {
            persistent: Q.persistent
        }, I)
    } catch (Y) {
        G(Y);
        return
    }
}
class db1 {
    constructor(A) {
        this.fsw = A, this._boundHandleError = (Q) => A._handleError(Q)
    }
    _watchWithNodeFs(A, Q) {
        let B = this.fsw.options,
            G = oI.dirname(A),
            Z = oI.basename(A);
        this.fsw._getWatchedDir(G).add(Z);
        let Y = oI.resolve(A),
            J = {
                persistent: B.persistent
            };
        if (!Q) Q = XnA;
        let W;
        if (B.usePolling) {
            let X = B.interval !== B.binaryInterval;
            J.interval = X && r16(Z) ? B.binaryInterval : B.interval, W = e16(A, Y, J, {
                listener: Q,
                rawEmitter: this.fsw._emitRaw
            })
        } else W = t16(A, Y, J, {
            listener: Q,
            errHandler: this._boundHandleError,
            rawEmitter: this.fsw._emitRaw
        });
        return W
    }
    _handleFile(A, Q, B) {
        if (this.fsw.closed) return;
        let G = oI.dirname(A),
            Z = oI.basename(A),
            I = this.fsw._getWatchedDir(G),
            Y = Q;
        if (I.has(Z)) return;
        let J = async (X, F) => {
            if (!this.fsw._throttle(i16, A, 5)) return;
            if (!F || F.mtimeMs === 0) try {
                let V = await w7B(A);
                if (this.fsw.closed) return;
                let {
                    atimeMs: K,
                    mtimeMs: D
                } = V;
                if (!K || K <= D || D !== Y.mtimeMs) this.fsw._emit(WT.CHANGE, A, V);
                if ((c16 || p16 || l16) && Y.ino !== V.ino) {
                    this.fsw._closeFile(X), Y = V;
                    let H = this._watchWithNodeFs(A, J);
                    if (H) this.fsw._addPathCloser(X, H)
                } else Y = V
            } catch (V) {
                this.fsw._remove(G, Z)
            } else if (I.has(Z)) {
                let {
                    atimeMs: V,
                    mtimeMs: K
                } = F;
                if (!V || V <= K || K !== Y.mtimeMs) this.fsw._emit(WT.CHANGE, A, F);
                Y = F
            }
        }, W = this._watchWithNodeFs(A, J);
        if (!(B && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(A)) {
            if (!this.fsw._throttle(WT.ADD, A, 0)) return;
            this.fsw._emit(WT.ADD, A, Q)
        }
        return W
    }
    async _handleSymlink(A, Q, B, G) {
        if (this.fsw.closed) return;
        let Z = A.fullPath,
            I = this.fsw._getWatchedDir(Q);
        if (!this.fsw.options.followSymlinks) {
            this.fsw._incrReadyCount();
            let Y;
            try {
                Y = await fb1(B)
            } catch (J) {
                return this.fsw._emitReady(), !0
            }
            if (this.fsw.closed) return;
            if (I.has(G)) {
                if (this.fsw._symlinkPaths.get(Z) !== Y) this.fsw._symlinkPaths.set(Z, Y), this.fsw._emit(WT.CHANGE, B, A.stats)
            } else I.add(G), this.fsw._symlinkPaths.set(Z, Y), this.fsw._emit(WT.ADD, B, A.stats);
            return this.fsw._emitReady(), !0
        }
        if (this.fsw._symlinkPaths.has(Z)) return !0;
        this.fsw._symlinkPaths.set(Z, !0)
    }
    _handleRead(A, Q, B, G, Z, I, Y) {
        if (A = oI.join(A, ""), Y = this.fsw._throttle("readdir", A, 1000), !Y) return;
        let J = this.fsw._getWatchedDir(B.path),
            W = new Set,
            X = this.fsw._readdirp(A, {
                fileFilter: (F) => B.filterPath(F),
                directoryFilter: (F) => B.filterDir(F)
            });
        if (!X) return;
        return X.on(d16, async (F) => {
            if (this.fsw.closed) {
                X = void 0;
                return
            }
            let V = F.path,
                K = oI.join(A, V);
            if (W.add(V), F.stats.isSymbolicLink() && await this._handleSymlink(F, A, K, V)) return;
            if (this.fsw.closed) {
                X = void 0;
                return
            }
            if (V === G || !G && !J.has(V)) this.fsw._incrReadyCount(), K = oI.join(Z, oI.relative(Z, K)), this._addToNodeFs(K, Q, B, I + 1)
        }).on(WT.ERROR, this._boundHandleError), new Promise((F, V) => {
            if (!X) return V();
            X.once(ub1, () => {
                if (this.fsw.closed) {
                    X = void 0;
                    return
                }
                let K = Y ? Y.clear() : !1;
                if (F(void 0), J.getChildren().filter((D) => {
                        return D !== A && !W.has(D)
                    }).forEach((D) => {
                        this.fsw._remove(A, D)
                    }), X = void 0, K) this._handleRead(A, !1, B, G, Z, I, Y)
            })
        })
    }
    async _handleDir(A, Q, B, G, Z, I, Y) {
        let J = this.fsw._getWatchedDir(oI.dirname(A)),
            W = J.has(oI.basename(A));
        if (!(B && this.fsw.options.ignoreInitial) && !Z && !W) this.fsw._emit(WT.ADD_DIR, A, Q);
        J.add(oI.basename(A)), this.fsw._getWatchedDir(A);
        let X, F, V = this.fsw.options.depth;
        if ((V == null || G <= V) && !this.fsw._symlinkPaths.has(Y)) {
            if (!Z) {
                if (await this._handleRead(A, B, I, Z, A, G, X), this.fsw.closed) return
            }
            F = this._watchWithNodeFs(A, (K, D) => {
                if (D && D.mtimeMs === 0) return;
                this._handleRead(K, !1, I, Z, A, G, X)
            })
        }
        return F
    }
    async _addToNodeFs(A, Q, B, G, Z) {
        let I = this.fsw._emitReady;
        if (this.fsw._isIgnored(A) || this.fsw.closed) return I(), !1;
        let Y = this.fsw._getWatchHelpers(A);
        if (B) Y.filterPath = (J) => B.filterPath(J), Y.filterDir = (J) => B.filterDir(J);
        try {
            let J = await n16[Y.statMethod](Y.watchPath);
            if (this.fsw.closed) return;
            if (this.fsw._isIgnored(Y.watchPath, J)) return I(), !1;
            let W = this.fsw.options.followSymlinks,
                X;
            if (J.isDirectory()) {
                let F = oI.resolve(A),
                    V = W ? await fb1(A) : A;
                if (this.fsw.closed) return;
                if (X = await this._handleDir(Y.watchPath, J, Q, G, Z, Y, V), this.fsw.closed) return;
                if (F !== V && V !== void 0) this.fsw._symlinkPaths.set(F, V)
            } else if (J.isSymbolicLink()) {
                let F = W ? await fb1(A) : A;
                if (this.fsw.closed) return;