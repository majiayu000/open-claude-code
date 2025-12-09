/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: mcp_012.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (12次) = lazyLoader(fn) - Lazy module loader
 *   U        (7次) = moduleWrapper(fn) - CommonJS module wrapper
 *   GA       (4次) = esmImport(module) - ESM import helper
 *   pzA      (2次) = capitalize() - Capitalize string
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 12/29
 * Lines: 278026 - 279505 (1480 lines)
 * Original file: cli.js
 */

async function r35() {
    try {
        let A = qB1();
        for (let Q of A) {
            let B = K62(Q);
            if (!B) {
                try {
                    OA().unlinkSync(Q)
                } catch (I) {
                    e(I)
                }
                continue
            }
            let G = await w62(B.runningInWindows, B.port),
                Z = !1;
            if (B.pid) {
                if (!V62(B.pid)) {
                    if (uQ() !== "wsl") Z = !0;
                    else if (!await xA0(G, B.port)) Z = !0
                }
            } else if (!await xA0(G, B.port)) Z = !0;
            if (Z) try {
                OA().unlinkSync(Q)
            } catch (I) {
                e(I)
            }
        }
    } catch (A) {
        e(A)
    }
}
async function e35(A) {
    try {
        let Q = await B75(A);
        BA("tengu_ext_installed", {});
        let B = L1();
        if (!B.diffTool) d0({
            ...B,
            diffTool: "auto"
        });
        return {
            installed: !0,
            error: null,
            installedVersion: Q,
            ideType: A
        }
    } catch (Q) {
        BA("tengu_ext_install_error", {});
        let B = Q instanceof Error ? Q.message : String(Q);
        return e(Q), {
            installed: !1,
            error: B,
            installedVersion: null,
            ideType: A
        }
    }
}
async function J62() {
    if ($B1) $B1.abort();
    $B1 = s9();
    let A = $B1.signal;
    await r35();
    let Q = Date.now();
    while (Date.now() - Q < 30000 && !A.aborted) {
        let B = await mLA(!1);
        if (A.aborted) return null;
        if (B.length === 1) return B[0];
        await new Promise((G) => setTimeout(G, 1000))
    }
    return null
}
async function mLA(A) {
    let Q = [];
    try {
        let B = process.env.CLAUDE_CODE_SSE_PORT,
            G = B ? parseInt(B) : null,
            Z = pQ(),
            I = qB1();
        for (let Y of I) {
            let J = K62(Y);
            if (!J) continue;
            if (uQ() !== "wsl" && _F() && (!J.pid || !n35(J.pid))) continue;
            let W = !1;
            if (process.env.CLAUDE_CODE_IDE_SKIP_VALID_CHECK === "true") W = !0;
            else if (J.port === G) W = !0;
            else W = J.workspaceFolders.some((K) => {
                if (!K) return !1;
                let D = K;
                if (uQ() === "wsl" && J.runningInWindows && process.env.WSL_DISTRO_NAME) {
                    if (!Y62(K, process.env.WSL_DISTRO_NAME)) return !1;
                    let C = gLA(D);
                    if (Z === C || Z.startsWith(C + wB1)) return !0;
                    D = new fIA(process.env.WSL_DISTRO_NAME).toLocalPath(K)
                }
                let H = gLA(D);
                if (uQ() === "windows") {
                    let C = Z.replace(/^[a-zA-Z]:/, (z) => z.toUpperCase()),
                        E = H.replace(/^[a-zA-Z]:/, (z) => z.toUpperCase());
                    return C === E || C.startsWith(E + wB1)
                }
                return Z === H || Z.startsWith(H + wB1)
            });
            if (!W && !A) continue;
            let X = J.ideName ?? (_F() ? aH(DU.terminal) : "IDE"),
                F = await w62(J.runningInWindows, J.port),
                V;
            if (J.useWebSocket) V = `ws://${F}:${J.port}`;
            else V = `http://${F}:${J.port}/sse`;
            Q.push({
                url: V,
                name: X,
                workspaceFolders: J.workspaceFolders,
                port: J.port,
                isValid: W,
                authToken: J.authToken,
                ideRunningInWindows: J.runningInWindows
            })
        }
        if (!A && G) {
            let Y = Q.filter((J) => J.isValid && J.port === G);
            if (Y.length === 1) return Y
        }
    } catch (B) {
        e(B)
    }
    return Q
}
async function D62(A) {
    await A.notification({
        method: "ide_connected",
        params: {
            pid: process.pid
        }
    })
}

function NB1(A) {
    return A.some((Q) => Q.type === "connected" && Q.name === "ide")
}
async function Q75(A) {
    if (vA0(A)) {
        let Q = H62(A);
        if (Q) try {
            if ((await q3(Q, ["--list-extensions"], {
                    env: fA0()
                })).stdout?.includes(A75)) return !0
        } catch {}
    } else if (pM(A)) return B62(A);
    return !1
}
async function B75(A) {
    if (vA0(A)) {
        let Q = H62(A);
        if (Q) {
            let B = await G75(Q);
            if (!B || F62.lt(B, W62())) {
                await new Promise((Z) => {
                    setTimeout(Z, 500)
                });
                let G = await q3(Q, ["--force", "--install-extension", "anthropic.claude-code"], {
                    env: fA0()
                });
                if (G.code !== 0) throw Error(`${G.code}: ${G.error} ${G.stderr}`);
                B = W62()
            }
            return B
        }
    } else if (pM(A) && uQ() !== "wsl") return await Q62(A, gLA(t35, "vendor", "claude-code-jetbrains-plugin"));
    return null
}

function fA0() {
    if (uQ() === "linux") return {
        ...process.env,
        DISPLAY: ""
    };
    return
}

function W62() {
    return {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://docs.claude.com/s/claude-code",
        VERSION: "2.0.57",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
    }.VERSION
}
async function G75(A) {
    let {
        stdout: Q
    } = await ZQ(A, ["--list-extensions", "--show-versions"], {
        env: fA0()
    }), B = Q?.split(`
`) || [];
    for (let G of B) {
        let [Z, I] = G.split("@");
        if (Z === "anthropic.claude-code" && I) return I
    }
    return null
}

function Z75() {
    try {
        if (uQ() !== "macos") return null;
        let Q = process.ppid;
        for (let B = 0; B < 10; B++) {
            if (!Q || Q === 0 || Q === 1) break;
            let G = iG(`ps -o command= -p ${Q}`)?.trim();
            if (G) {
                let I = {
                        "Visual Studio Code.app": "code",
                        "Cursor.app": "cursor",
                        "Windsurf.app": "windsurf",
                        "Visual Studio Code - Insiders.app": "code",
                        "VSCodium.app": "codium"
                    },
                    Y = "/Contents/MacOS/Electron";
                for (let [J, W] of Object.entries(I)) {
                    let X = G.indexOf(J + "/Contents/MacOS/Electron");
                    if (X !== -1) {
                        let F = X + J.length;
                        return G.substring(0, F) + "/Contents/Resources/app/bin/" + W
                    }
                }
            }
            let Z = iG(`ps -o ppid= -p ${Q}`)?.trim();
            if (!Z) break;
            Q = parseInt(Z.trim())
        }
        return null
    } catch {
        return null
    }
}

function H62(A) {
    let Q = Z75();
    if (Q) {
        if (OA().existsSync(Q)) return Q
    }
    switch (A) {
        case "vscode":
            return "code";
        case "cursor":
            return "cursor";
        case "windsurf":
            return "windsurf";
        default:
            break
    }
    return null
}

function LB1() {
    let A = [];
    try {
        let Q = uQ();
        if (Q === "macos") {
            let B = iG('ps aux | grep -E "Visual Studio Code|Code Helper|Cursor Helper|Windsurf Helper|IntelliJ IDEA|PyCharm|WebStorm|PhpStorm|RubyMine|CLion|GoLand|Rider|DataGrip|AppCode|DataSpell|Aqua|Gateway|Fleet|Android Studio" | grep -v grep') ?? "";
            for (let [G, Z] of Object.entries(hIA))
                for (let I of Z.processKeywordsMac)
                    if (B.includes(I)) {
                        A.push(G);
                        break
                    }
        } else if (Q === "windows") {
            let G = (iG('tasklist | findstr /I "Code.exe Cursor.exe Windsurf.exe idea64.exe pycharm64.exe webstorm64.exe phpstorm64.exe rubymine64.exe clion64.exe goland64.exe rider64.exe datagrip64.exe appcode.exe dataspell64.exe aqua64.exe gateway64.exe fleet.exe studio64.exe"') ?? "").toLowerCase();
            for (let [Z, I] of Object.entries(hIA))
                for (let Y of I.processKeywordsWindows)
                    if (G.includes(Y.toLowerCase())) {
                        A.push(Z);
                        break
                    }
        } else if (Q === "linux") {
            let G = (iG('ps aux | grep -E "code|cursor|windsurf|idea|pycharm|webstorm|phpstorm|rubymine|clion|goland|rider|datagrip|dataspell|aqua|gateway|fleet|android-studio" | grep -v grep') ?? "").toLowerCase();
            for (let [Z, I] of Object.entries(hIA))
                for (let Y of I.processKeywordsLinux)
                    if (G.includes(Y)) {
                        if (Z !== "vscode") {
                            A.push(Z);
                            break
                        } else if (!G.includes("cursor") && !G.includes("appcode")) {
                            A.push(Z);
                            break
                        }
                    }
        }
    } catch (Q) {
        e(Q)
    }
    return A
}

function MB1(A) {
    let Q = A.find((B) => B.type === "connected" && B.name === "ide");
    return hA0(Q)
}

function hA0(A) {
    let Q = A?.config;
    return Q?.type === "sse-ide" || Q?.type === "ws-ide" ? Q.ideName : _F() ? aH(DU.terminal) : null
}

function aH(A) {
    if (!A) return "IDE";
    let Q = hIA[A];
    if (Q) return Q.displayName;
    let B = X62[A.toLowerCase().trim()];
    if (B) return B;
    let G = A.split(" ")[0],
        Z = G ? p35(G).toLowerCase() : null;
    if (Z) {
        let I = X62[Z];
        if (I) return I;
        return pzA(Z)
    }
    return pzA(A)
}

function cU(A) {
    if (!A) return;
    let Q = A.find((B) => B.type === "connected" && B.name === "ide");
    return Q?.type === "connected" ? Q : void 0
}
async function U62(A) {
    try {
        await Wh("closeAllDiffTabs", {}, A)
    } catch (Q) {}
}
async function $62(A, Q, B, G) {
    J62().then(A);
    let Z = L1().autoInstallIdeExtension ?? !0;
    if (process.env.CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL !== "true" && Z) {
        let I = Q ?? a35();
        if (I) Q75(I).then(async (Y) => {
            e35(I).catch((J) => {
                return {
                    installed: !1,
                    error: J.message || "Installation failed",
                    installedVersion: null,
                    ideType: I
                }
            }).then((J) => {
                if (G(J), J?.installed) J62().then(A);
                if (!Y && J?.installed === !0 && !SA0()) B()
            })
        })
    }
}
var F62, hIA, uLA, bA0, _F, o35, t35, $B1 = null,
    A75 = "anthropic.claude-code",
    C62, E62, z62, X62, w62;
var yJ = L(() => {
    f5();
    hQ();
    Hm1();
    I6();
    jQ();
    w0();
    Eb1();
    o2();
    S0();
    o0();
    u1();
    s5();
    Tk();
    G62();
    _A0();
    kA0();
    D0();
    UZ();
    it();
    F62 = GA(WE(), 1);
    hIA = {
        cursor: {
            ideKind: "vscode",
            displayName: "Cursor",
            processKeywordsMac: ["Cursor Helper", "Cursor.app"],
            processKeywordsWindows: ["cursor.exe"],
            processKeywordsLinux: ["cursor"]
        },
        windsurf: {
            ideKind: "vscode",
            displayName: "Windsurf",
            processKeywordsMac: ["Windsurf Helper", "Windsurf.app"],
            processKeywordsWindows: ["windsurf.exe"],
            processKeywordsLinux: ["windsurf"]
        },
        vscode: {
            ideKind: "vscode",
            displayName: "VS Code",
            processKeywordsMac: ["Visual Studio Code", "Code Helper"],
            processKeywordsWindows: ["code.exe"],
            processKeywordsLinux: ["code"]
        },
        intellij: {
            ideKind: "jetbrains",
            displayName: "IntelliJ IDEA",
            processKeywordsMac: ["IntelliJ IDEA"],
            processKeywordsWindows: ["idea64.exe"],
            processKeywordsLinux: ["idea", "intellij"]
        },
        pycharm: {
            ideKind: "jetbrains",
            displayName: "PyCharm",
            processKeywordsMac: ["PyCharm"],
            processKeywordsWindows: ["pycharm64.exe"],
            processKeywordsLinux: ["pycharm"]
        },
        webstorm: {
            ideKind: "jetbrains",
            displayName: "WebStorm",
            processKeywordsMac: ["WebStorm"],
            processKeywordsWindows: ["webstorm64.exe"],
            processKeywordsLinux: ["webstorm"]
        },
        phpstorm: {
            ideKind: "jetbrains",
            displayName: "PhpStorm",
            processKeywordsMac: ["PhpStorm"],
            processKeywordsWindows: ["phpstorm64.exe"],
            processKeywordsLinux: ["phpstorm"]
        },
        rubymine: {
            ideKind: "jetbrains",
            displayName: "RubyMine",
            processKeywordsMac: ["RubyMine"],
            processKeywordsWindows: ["rubymine64.exe"],
            processKeywordsLinux: ["rubymine"]
        },
        clion: {
            ideKind: "jetbrains",
            displayName: "CLion",
            processKeywordsMac: ["CLion"],
            processKeywordsWindows: ["clion64.exe"],
            processKeywordsLinux: ["clion"]
        },
        goland: {
            ideKind: "jetbrains",
            displayName: "GoLand",
            processKeywordsMac: ["GoLand"],
            processKeywordsWindows: ["goland64.exe"],
            processKeywordsLinux: ["goland"]
        },
        rider: {
            ideKind: "jetbrains",
            displayName: "Rider",
            processKeywordsMac: ["Rider"],
            processKeywordsWindows: ["rider64.exe"],
            processKeywordsLinux: ["rider"]
        },
        datagrip: {
            ideKind: "jetbrains",
            displayName: "DataGrip",
            processKeywordsMac: ["DataGrip"],
            processKeywordsWindows: ["datagrip64.exe"],
            processKeywordsLinux: ["datagrip"]
        },
        appcode: {
            ideKind: "jetbrains",
            displayName: "AppCode",
            processKeywordsMac: ["AppCode"],
            processKeywordsWindows: ["appcode.exe"],
            processKeywordsLinux: ["appcode"]
        },
        dataspell: {
            ideKind: "jetbrains",
            displayName: "DataSpell",
            processKeywordsMac: ["DataSpell"],
            processKeywordsWindows: ["dataspell64.exe"],
            processKeywordsLinux: ["dataspell"]
        },
        aqua: {
            ideKind: "jetbrains",
            displayName: "Aqua",
            processKeywordsMac: [],
            processKeywordsWindows: ["aqua64.exe"],
            processKeywordsLinux: []
        },
        gateway: {
            ideKind: "jetbrains",
            displayName: "Gateway",
            processKeywordsMac: [],
            processKeywordsWindows: ["gateway64.exe"],
            processKeywordsLinux: []
        },
        fleet: {
            ideKind: "jetbrains",
            displayName: "Fleet",
            processKeywordsMac: [],
            processKeywordsWindows: ["fleet.exe"],
            processKeywordsLinux: []
        },
        androidstudio: {
            ideKind: "jetbrains",
            displayName: "Android Studio",
            processKeywordsMac: ["Android Studio"],
            processKeywordsWindows: ["studio64.exe"],
            processKeywordsLinux: ["android-studio"]
        }
    };
    uLA = t1(() => {
        return vA0(m0.terminal)
    }), bA0 = t1(() => {
        return pM(DU.terminal)
    }), _F = t1(() => {
        return uLA() || bA0() || Boolean(process.env.FORCE_CODE_TERMINAL)
    });
    o35 = l35(import.meta.url), t35 = gLA(o35, "../");
    C62 = t1(() => {
        try {
            return iG("cursor --version"), !0
        } catch {
            return !1
        }
    }), E62 = t1(() => {
        try {
            return iG("windsurf --version"), !0
        } catch {
            return !1
        }
    }), z62 = t1(() => {
        try {
            let A = iG("code --help");
            return Boolean(A && A.includes("Visual Studio Code"))
        } catch {
            return !1
        }
    });
    X62 = {
        code: "VS Code",
        cursor: "Cursor",
        windsurf: "Windsurf",
        antigravity: "Antigravity",
        vi: "Vim",
        vim: "Vim",
        nano: "nano",
        notepad: "Notepad",
        "start /wait notepad": "Notepad",
        emacs: "Emacs",
        subl: "Sublime Text",
        atom: "Atom"
    };
    w62 = t1(async (A, Q) => {
        if (process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE) return process.env.CLAUDE_CODE_IDE_HOST_OVERRIDE;
        if (uQ() !== "wsl" || !A) return "127.0.0.1";
        try {
            let G = c35("ip route show | grep -i default", {
                encoding: "utf8"
            }).match(/default via (\d+\.\d+\.\d+\.\d+)/);
            if (G) {
                let Z = G[1];
                if (await xA0(Z, Q)) return Z
            }
        } catch (B) {}
        return "127.0.0.1"
    })
});

function I75() {
    let A = NE0();
    if (A !== void 0) return A;
    let Q = process.env.CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR;
    if (!Q) return sBA(null), null;
    let B = parseInt(Q, 10);
    if (Number.isNaN(B)) return g(`CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR must be a valid file descriptor number, got: ${Q}`, {
        level: "error"
    }), sBA(null), null;
    try {
        let G = OA(),
            Z = process.platform === "darwin" || process.platform === "freebsd" ? `/dev/fd/${B}` : `/proc/self/fd/${B}`,
            I = G.readFileSync(Z, {
                encoding: "utf8"
            }).trim();
        if (!I) return g("File descriptor contained empty token", {
            level: "error"
        }), sBA(null), null;
        return g(`Successfully read token from file descriptor ${B}`), sBA(I), I
    } catch (G) {
        return g(`Failed to read token from file descriptor ${B}: ${G instanceof Error?G.message:String(G)}`, {
            level: "error"
        }), sBA(null), null
    }
}

function tAA() {
    let A = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
    if (A) return A;
    return I75()
}
var OB1 = L(() => {
    D0();
    o0();
    S0()
});

function Y75(A) {
    let Q = A,
        B = "",
        G = 0,
        Z = 10;
    while (Q !== B && G < Z) B = Q, Q = Q.normalize("NFKC"), Q = Q.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, ""), Q = Q.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, ""), G++;
    if (G >= Z) throw Error(`Unicode sanitization reached maximum iterations (${Z}) for input: ${A.slice(0,100)}`);
    return Q
}

function gIA(A) {
    if (typeof A === "string") return Y75(A);
    if (Array.isArray(A)) return A.map(gIA);
    if (A !== null && typeof A === "object") {
        let Q = {};
        for (let [B, G] of Object.entries(A)) Q[gIA(B)] = gIA(G);
        return Q
    }
    return A
}

function RB1() {
    return parseInt(process.env.MAX_MCP_OUTPUT_TOKENS ?? "25000", 10)
}

function N62(A) {
    return A.type === "text"
}

function L62(A) {
    return A.type === "image"
}

function gA0(A) {
    if (!A) return 0;
    if (typeof A === "string") return SG(A);
    return A.reduce((Q, B) => {
        if (N62(B)) return Q + SG(B.text);
        else if (L62(B)) return Q + q62;
        return Q
    }, 0)
}

function W75() {
    return RB1() * 4
}

function X75() {
    return `

[OUTPUT TRUNCATED - exceeded ${RB1()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`
}

function F75(A, Q) {
    if (A.length <= Q) return A;
    return A.slice(0, Q)
}
async function V75(A, Q) {
    let B = [],
        G = 0;
    for (let Z of A)
        if (N62(Z)) {
            let I = Q - G;
            if (I <= 0) break;
            if (Z.text.length <= I) B.push(Z), G += Z.text.length;
            else {
                B.push({
                    type: "text",
                    text: Z.text.slice(0, I)
                });
                break
            }
        } else if (L62(Z)) {
        let I = q62 * 4;
        if (G + I <= Q) B.push(Z), G += I;
        else {
            let Y = Q - G;
            if (Y > 0) {
                let J = Math.floor(Y * 0.75);
                try {
                    let W = await $jB(Z, J);
                    if (B.push(W), W.source.type === "base64") G += W.source.data.length;
                    else G += I
                } catch {}
            }
        }
    } else B.push(Z);
    return B
}
async function uA0(A) {
    if (!A) return !1;
    if (gA0(A) <= RB1() * J75) return !1;
    try {
        let G = await FLA(typeof A === "string" ? [{
            role: "user",
            content: A
        }] : [{
            role: "user",
            content: A
        }], []);
        return !!(G && G > RB1())
    } catch (B) {
        return e(B instanceof Error ? B : Error(String(B))), !1
    }
}
async function K75(A) {
    if (!A) return A;
    let Q = W75(),
        B = X75();
    if (typeof A === "string") return F75(A, Q) + B;
    else {
        let G = await V75(A, Q);
        return G.push({
            type: "text",
            text: B
        }), G
    }
}
async function M62(A) {
    if (!await uA0(A)) return A;
    return await K75(A)
}
var J75 = 0.5,
    q62 = 1600;
var TB1 = L(() => {
    gM();
    u1();
    Ie()
});
import {
    dirname as O62
} from "path";

function R6(A, Q, B = {}) {
    let G = D75();
    if (!G) return;
    let Z = {
            timestamp: new Date().toISOString(),
            level: A,
            event: Q,
            data: B
        },
        I = OA();
    if (!I.existsSync(O62(G))) I.mkdirSync(O62(G));
    I.appendFileSync(G, JSON.stringify(Z) + `
`)
}

function D75() {
    return process.env.CLAUDE_CODE_DIAGNOSTICS_FILE
}
var uIA = L(() => {
    o0()
});
class PB1 {
    ws;
    started = !1;
    opened;
    constructor(A) {
        this.ws = A;
        this.opened = new Promise((Q, B) => {
            if (this.ws.readyState === j_.OPEN) Q();
            else this.ws.on("open", () => {
                Q()
            }), this.ws.on("error", (G) => {
                R6("error", "mcp_websocket_connect_fail"), B(G)
            })
        }), this.ws.on("message", this.onMessageHandler), this.ws.on("error", this.onErrorHandler), this.ws.on("close", this.onCloseHandler)
    }
    onclose;
    onerror;
    onmessage;
    onMessageHandler = (A) => {
        try {
            let Q = JSON.parse(A.toString("utf-8")),
                B = Rk.parse(Q);
            this.onmessage?.(B)
        } catch (Q) {
            this.onErrorHandler(Q)
        }
    };
    onErrorHandler = (A) => {
        R6("error", "mcp_websocket_message_fail"), this.onerror?.(A instanceof Error ? A : Error("Failed to process message"))
    };
    onCloseHandler = () => {
        this.onclose?.(), this.ws.off("message", this.onMessageHandler), this.ws.off("error", this.onErrorHandler), this.ws.off("close", this.onCloseHandler)
    };
    async start() {
        if (this.started) throw Error("Start can only be called once per transport.");
        if (await this.opened, this.ws.readyState !== j_.OPEN) throw R6("error", "mcp_websocket_start_not_opened"), Error("WebSocket is not open. Cannot start transport.");
        this.started = !0
    }
    async close() {
        if (this.ws.readyState === j_.OPEN || this.ws.readyState === j_.CONNECTING) this.ws.close();
        this.onCloseHandler()
    }
    async send(A) {
        if (this.ws.readyState !== j_.OPEN) throw R6("error", "mcp_websocket_send_not_opened"), Error("WebSocket is not open. Cannot send message.");
        let Q = JSON.stringify(A);
        try {
            await new Promise((B, G) => {
                this.ws.send(Q, (Z) => {
                    if (Z) G(Z);
                    else B()
                })
            })
        } catch (B) {
            throw this.onErrorHandler(B), B
        }
    }
}
var R62 = L(() => {
    fUA();
    PD();
    uIA()
});
var T62 = "",
    P62 = "";

function j62(A) {
    if (Object.keys(A).length === 0) return null;
    return Object.entries(A).map(([Q, B]) => `${Q}: ${JSON.stringify(B)}`).join(", ")
}

function S62() {
    return IG.createElement(k3, null)
}

function _62(A, {
    verbose: Q
}) {
    return IG.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function k62() {
    return null
}

function y62(A, Q, {
    verbose: B
}) {
    let G = A,
        Z = gA0(G),
        Y = Z > H75 ? `${V1.warning} Large MCP response (~${QZ(Z)} tokens), this can fill up context quickly` : null,
        J;
    if (Array.isArray(G)) {
        let W = G.map((X, F) => {
            if (X.type === "image") return IG.createElement(j, {
                key: F,
                justifyContent: "space-between",
                overflowX: "hidden",
                width: "100%"
            }, IG.createElement(y0, {
                height: 1
            }, IG.createElement($, null, "[Image]")));
            let V = X.type === "text" && "text" in X && X.text !== null && X.text !== void 0 ? String(X.text) : "";
            return IG.createElement(xU, {
                key: F,
                content: V,
                verbose: B
            })
        });
        J = IG.createElement(j, {
            flexDirection: "column",
            width: "100%"
        }, W)
    } else if (!G) J = IG.createElement(j, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%"
    }, IG.createElement(y0, {
        height: 1
    }, IG.createElement($, {
        dimColor: !0
    }, "(No content)")));
    else J = IG.createElement(xU, {
        content: G,
        verbose: B
    });
    if (Y) return IG.createElement(j, {
        flexDirection: "column"
    }, IG.createElement(y0, {
        height: 1
    }, IG.createElement($, {
        color: "warning"
    }, Y)), J);
    return J
}
var IG, H75 = 1e4;
var x62 = L(() => {
    hA();
    lV();
    lX();
    wIA();
    u8();
    n2();
    TB1();
    IG = GA(VA(), 1)
});
var C75, E75, v62;
var b62 = L(() => {
    h2();
    x62();
    C75 = _.object({}).passthrough(), E75 = _.string().describe("MCP tool execution result"), v62 = {
        isMcp: !0,
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !1
        },
        isReadOnly() {
            return !1
        },
        isDestructive() {
            return !1
        },
        isOpenWorld() {
            return !1
        },
        name: "mcp",
        async description() {
            return P62
        },
        async prompt() {
            return T62
        },
        inputSchema: C75,
        outputSchema: E75,
        async call() {
            return {
                data: ""
            }
        },
        async checkPermissions() {
            return {
                behavior: "passthrough",
                message: "MCPTool requires permission."
            }
        },
        renderToolUseMessage: j62,
        userFacingName: () => "mcp",
        renderToolUseRejectedMessage: S62,
        renderToolUseErrorMessage: _62,
        renderToolUseProgressMessage: k62,
        renderToolResultMessage: y62,
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: A
            }
        }
    }
});
var f62 = `
Lists available resources from configured MCP servers.
Each resource object includes a 'server' field indicating which server it's from.

Usage examples:
- List all resources from all servers: \`listMcpResources\`
- List resources from a specific server: \`listMcpResources({ server: "myserver" })\`
`,
    h62 = `
List available resources from configured MCP servers.
Each returned resource will include all standard MCP resource fields plus a 'server' field 
indicating which server the resource belongs to.

Parameters:
- server (optional): The name of a specific MCP server to get resources from. If not provided,
  resources from all servers will be returned.
`;

function g62(A) {
    return A.server ? `List MCP resources from server "${A.server}"` : "List all MCP resources"
}

function u62() {
    return xE.createElement(k3, null)
}

function m62(A, {
    verbose: Q
}) {
    return xE.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function d62() {
    return null
}

function c62(A, Q, {
    verbose: B
}) {
    if (!A || A.length === 0) return xE.createElement(j, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%"
    }, xE.createElement(j, {
        flexDirection: "row"
    }, xE.createElement($, null, "  ⎿  "), xE.createElement($, {
        dimColor: !0
    }, "(No resources found)")));
    let G = JSON.stringify(A, null, 2);
    return xE.createElement(xU, {
        content: G,
        verbose: B
    })
}
var xE;
var p62 = L(() => {
    hA();
    lV();
    lX();
    wIA();
    xE = GA(VA(), 1)
});
var z75, U75, Xh;
var jB1 = L(() => {
    h2();
    PD();
    u1();
    p62();
    z75 = _.object({
        server: _.string().optional().describe("Optional server name to filter resources by")
    }), U75 = _.array(_.object({
        uri: _.string().describe("Resource URI"),
        name: _.string().describe("Resource name"),
        mimeType: _.string().optional().describe("MIME type of the resource"),
        description: _.string().optional().describe("Resource description"),
        server: _.string().describe("Server that provides this resource")
    })), Xh = {
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        name: "ListMcpResourcesTool",
        async description() {
            return f62
        },
        async prompt() {
            return h62
        },
        inputSchema: z75,
        outputSchema: U75,
        async call(A, {
            options: {
                mcpClients: Q
            }
        }) {
            let B = [],
                {
                    server: G
                } = A,
                Z = G ? Q.filter((I) => I.name === G) : Q;
            if (G && Z.length === 0) throw Error(`Server "${G}" not found. Available servers: ${Q.map((I)=>I.name).join(", ")}`);
            for (let I of Z) {
                if (I.type !== "connected") continue;
                let Y = I;
                try {
                    if (!Y.capabilities?.resources) continue;
                    let J = await Y.client.request({
                        method: "resources/list"
                    }, aAA);
                    if (!J.resources) continue;
                    let W = J.resources.map((X) => ({
                        ...X,
                        server: I.name
                    }));
                    B.push(...W)
                } catch (J) {
                    CI(I.name, `Failed to fetch resources: ${J instanceof Error?J.message:String(J)}`)
                }
            }
            return {
                data: B
            }
        },
        async checkPermissions(A) {
            return {
                behavior: "allow",
                updatedInput: A
            }
        },
        renderToolUseMessage: g62,
        userFacingName: () => "listMcpResources",
        renderToolUseRejectedMessage: u62,
        renderToolUseErrorMessage: m62,
        renderToolUseProgressMessage: d62,
        renderToolResultMessage: c62,
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: JSON.stringify(A)
            }
        }
    }
});
var l62 = `
Reads a specific resource from an MCP server.
- server: The name of the MCP server to read from
- uri: The URI of the resource to read

Usage examples:
- Read a resource from a server: \`readMcpResource({ server: "myserver", uri: "my-resource-uri" })\`
`,
    i62 = `
Reads a specific resource from an MCP server, identified by server name and resource URI.

Parameters:
- server (required): The name of the MCP server from which to read the resource
- uri (required): The URI of the resource to read
`;

function n62(A) {
    if (!A.uri || !A.server) return null;
    return `Read resource "${A.uri}" from server "${A.server}"`
}

function a62() {
    return "readMcpResource"
}

function s62() {
    return Hq.createElement(k3, null)
}

function r62(A, {
    verbose: Q
}) {
    return Hq.createElement(A5, {
        result: A,
        verbose: Q
    })
}

function o62() {
    return null
}

function t62(A, Q, {
    verbose: B
}) {
    if (!A || !A.contents || A.contents.length === 0) return Hq.createElement(j, {
        justifyContent: "space-between",
        overflowX: "hidden",
        width: "100%"
    }, Hq.createElement(y0, {
        height: 1
    }, Hq.createElement($, {
        dimColor: !0
    }, "(No content)")));
    let G = JSON.stringify(A, null, 2);
    return Hq.createElement(xU, {
        content: G,
        verbose: B
    })
}
var Hq;
var e62 = L(() => {
    hA();
    lV();
    lX();
    u8();
    wIA();
    Hq = GA(VA(), 1)
});
var $75, w75, Fh;
var SB1 = L(() => {
    h2();
    PD();
    e62();
    $75 = _.object({
        server: _.string().describe("The MCP server name"),
        uri: _.string().describe("The resource URI to read")
    }), w75 = _.object({
        contents: _.array(_.object({
            uri: _.string().describe("Resource URI"),
            mimeType: _.string().optional().describe("MIME type of the content"),
            text: _.string().optional().describe("Text content of the resource")
        }))
    }), Fh = {
        isEnabled() {
            return !0
        },
        isConcurrencySafe() {
            return !0
        },
        isReadOnly() {
            return !0
        },
        name: "ReadMcpResourceTool",
        async description() {
            return l62
        },
        async prompt() {
            return i62
        },
        inputSchema: $75,
        outputSchema: w75,
        async call(A, {
            options: {
                mcpClients: Q
            }
        }) {
            let {
                server: B,
                uri: G
            } = A, Z = Q.find((J) => J.name === B);
            if (!Z) throw Error(`Server "${B}" not found. Available servers: ${Q.map((J)=>J.name).join(", ")}`);
            if (Z.type !== "connected") throw Error(`Server "${B}" is not connected`);
            let I = Z;
            if (!I.capabilities?.resources) throw Error(`Server "${B}" does not support resources`);
            return {
                data: await I.client.request({
                    method: "resources/read",
                    params: {
                        uri: G
                    }
                }, tl)
            }
        },
        async checkPermissions(A) {
            return {
                behavior: "allow",
                updatedInput: A
            }
        },
        renderToolUseMessage: n62,
        userFacingName: a62,
        renderToolUseRejectedMessage: s62,
        renderToolUseErrorMessage: r62,
        renderToolUseProgressMessage: o62,
        renderToolResultMessage: t62,
        mapToolResultToToolResultBlockParam(A, Q) {
            return {
                tool_use_id: Q,
                type: "tool_result",
                content: JSON.stringify(A)
            }
        }
    }
});

function q75(A) {
    let Q;
    try {
        Q = new URL(A)
    } catch (B) {
        throw Error(`Invalid URL format: ${A}`)
    }
    if (Q.protocol !== "http:" && Q.protocol !== "https:") throw Error(`Invalid URL protocol: must use http:// or https://, got ${Q.protocol}`)
}
async function gZ(A) {
    try {
        q75(A);
        let Q = process.env.BROWSER,
            B = process.platform;
        if (B === "win32") {
            if (Q) {
                let {
                    code: Z
                } = await ZQ(Q, [`"${A}"`]);
                return Z === 0
            }
            let {
                code: G
            } = await ZQ("rundll32", ["url,OpenURL", A], {});
            return G === 0
        } else {
            let G = Q || (B === "darwin" ? "open" : "xdg-open"),
                {
                    code: Z
                } = await ZQ(G, [A]);
            return Z === 0
        }
    } catch (Q) {
        return !1
    }
}
var lM = L(() => {
    I6()
});
var mA0 = U((R75) => {
    function A52() {
        var A = {};
        return A["align-content"] = !1, A["align-items"] = !1, A["align-self"] = !1, A["alignment-adjust"] = !1, A["alignment-baseline"] = !1, A.all = !1, A["anchor-point"] = !1, A.animation = !1, A["animation-delay"] = !1, A["animation-direction"] = !1, A["animation-duration"] = !1, A["animation-fill-mode"] = !1, A["animation-iteration-count"] = !1, A["animation-name"] = !1, A["animation-play-state"] = !1, A["animation-timing-function"] = !1, A.azimuth = !1, A["backface-visibility"] = !1, A.background = !0, A["background-attachment"] = !0, A["background-clip"] = !0, A["background-color"] = !0, A["background-image"] = !0, A["background-origin"] = !0, A["background-position"] = !0, A["background-repeat"] = !0, A["background-size"] = !0, A["baseline-shift"] = !1, A.binding = !1, A.bleed = !1, A["bookmark-label"] = !1, A["bookmark-level"] = !1, A["bookmark-state"] = !1, A.border = !0, A["border-bottom"] = !0, A["border-bottom-color"] = !0, A["border-bottom-left-radius"] = !0, A["border-bottom-right-radius"] = !0, A["border-bottom-style"] = !0, A["border-bottom-width"] = !0, A["border-collapse"] = !0, A["border-color"] = !0, A["border-image"] = !0, A["border-image-outset"] = !0, A["border-image-repeat"] = !0, A["border-image-slice"] = !0, A["border-image-source"] = !0, A["border-image-width"] = !0, A["border-left"] = !0, A["border-left-color"] = !0, A["border-left-style"] = !0, A["border-left-width"] = !0, A["border-radius"] = !0, A["border-right"] = !0, A["border-right-color"] = !0, A["border-right-style"] = !0, A["border-right-width"] = !0, A["border-spacing"] = !0, A["border-style"] = !0, A["border-top"] = !0, A["border-top-color"] = !0, A["border-top-left-radius"] = !0, A["border-top-right-radius"] = !0, A["border-top-style"] = !0, A["border-top-width"] = !0, A["border-width"] = !0, A.bottom = !1, A["box-decoration-break"] = !0, A["box-shadow"] = !0, A["box-sizing"] = !0, A["box-snap"] = !0, A["box-suppress"] = !0, A["break-after"] = !0, A["break-before"] = !0, A["break-inside"] = !0, A["caption-side"] = !1, A.chains = !1, A.clear = !0, A.clip = !1, A["clip-path"] = !1, A["clip-rule"] = !1, A.color = !0, A["color-interpolation-filters"] = !0, A["column-count"] = !1, A["column-fill"] = !1, A["column-gap"] = !1, A["column-rule"] = !1, A["column-rule-color"] = !1, A["column-rule-style"] = !1, A["column-rule-width"] = !1, A["column-span"] = !1, A["column-width"] = !1, A.columns = !1, A.contain = !1, A.content = !1, A["counter-increment"] = !1, A["counter-reset"] = !1, A["counter-set"] = !1, A.crop = !1, A.cue = !1, A["cue-after"] = !1, A["cue-before"] = !1, A.cursor = !1, A.direction = !1, A.display = !0, A["display-inside"] = !0, A["display-list"] = !0, A["display-outside"] = !0, A["dominant-baseline"] = !1, A.elevation = !1, A["empty-cells"] = !1, A.filter = !1, A.flex = !1, A["flex-basis"] = !1, A["flex-direction"] = !1, A["flex-flow"] = !1, A["flex-grow"] = !1, A["flex-shrink"] = !1, A["flex-wrap"] = !1, A.float = !1, A["float-offset"] = !1, A["flood-color"] = !1, A["flood-opacity"] = !1, A["flow-from"] = !1, A["flow-into"] = !1, A.font = !0, A["font-family"] = !0, A["font-feature-settings"] = !0, A["font-kerning"] = !0, A["font-language-override"] = !0, A["font-size"] = !0, A["font-size-adjust"] = !0, A["font-stretch"] = !0, A["font-style"] = !0, A["font-synthesis"] = !0, A["font-variant"] = !0, A["font-variant-alternates"] = !0, A["font-variant-caps"] = !0, A["font-variant-east-asian"] = !0, A["font-variant-ligatures"] = !0, A["font-variant-numeric"] = !0, A["font-variant-position"] = !0, A["font-weight"] = !0, A.grid = !1, A["grid-area"] = !1, A["grid-auto-columns"] = !1, A["grid-auto-flow"] = !1, A["grid-auto-rows"] = !1, A["grid-column"] = !1, A["grid-column-end"] = !1, A["grid-column-start"] = !1, A["grid-row"] = !1, A["grid-row-end"] = !1, A["grid-row-start"] = !1, A["grid-template"] = !1, A["grid-template-areas"] = !1, A["grid-template-columns"] = !1, A["grid-template-rows"] = !1, A["hanging-punctuation"] = !1, A.height = !0, A.hyphens = !1, A.icon = !1, A["image-orientation"] = !1, A["image-resolution"] = !1, A["ime-mode"] = !1, A["initial-letters"] = !1, A["inline-box-align"] = !1, A["justify-content"] = !1, A["justify-items"] = !1, A["justify-self"] = !1, A.left = !1, A["letter-spacing"] = !0, A["lighting-color"] = !0, A["line-box-contain"] = !1, A["line-break"] = !1, A["line-grid"] = !1, A["line-height"] = !1, A["line-snap"] = !1, A["line-stacking"] = !1, A["line-stacking-ruby"] = !1, A["line-stacking-shift"] = !1, A["line-stacking-strategy"] = !1, A["list-style"] = !0, A["list-style-image"] = !0, A["list-style-position"] = !0, A["list-style-type"] = !0, A.margin = !0, A["margin-bottom"] = !0, A["margin-left"] = !0, A["margin-right"] = !0, A["margin-top"] = !0, A["marker-offset"] = !1, A["marker-side"] = !1, A.marks = !1, A.mask = !1, A["mask-box"] = !1, A["mask-box-outset"] = !1, A["mask-box-repeat"] = !1, A["mask-box-slice"] = !1, A["mask-box-source"] = !1, A["mask-box-width"] = !1, A["mask-clip"] = !1, A["mask-image"] = !1, A["mask-origin"] = !1, A["mask-position"] = !1, A["mask-repeat"] = !1, A["mask-size"] = !1, A["mask-source-type"] = !1, A["mask-type"] = !1, A["max-height"] = !0, A["max-lines"] = !1, A["max-width"] = !0, A["min-height"] = !0, A["min-width"] = !0, A["move-to"] = !1, A["nav-down"] = !1, A["nav-index"] = !1, A["nav-left"] = !1, A["nav-right"] = !1, A["nav-up"] = !1, A["object-fit"] = !1, A["object-position"] = !1, A.opacity = !1, A.order = !1, A.orphans = !1, A.outline = !1, A["outline-color"] = !1, A["outline-offset"] = !1, A["outline-style"] = !1, A["outline-width"] = !1, A.overflow = !1, A["overflow-wrap"] = !1, A["overflow-x"] = !1, A["overflow-y"] = !1, A.padding = !0, A["padding-bottom"] = !0, A["padding-left"] = !0, A["padding-right"] = !0, A["padding-top"] = !0, A.page = !1, A["page-break-after"] = !1, A["page-break-before"] = !1, A["page-break-inside"] = !1, A["page-policy"] = !1, A.pause = !1, A["pause-after"] = !1, A["pause-before"] = !1, A.perspective = !1, A["perspective-origin"] = !1, A.pitch = !1, A["pitch-range"] = !1, A["play-during"] = !1, A.position = !1, A["presentation-level"] = !1, A.quotes = !1, A["region-fragment"] = !1, A.resize = !1, A.rest = !1, A["rest-after"] = !1, A["rest-before"] = !1, A.richness = !1, A.right = !1, A.rotation = !1, A["rotation-point"] = !1, A["ruby-align"] = !1, A["ruby-merge"] = !1, A["ruby-position"] = !1, A["shape-image-threshold"] = !1, A["shape-outside"] = !1, A["shape-margin"] = !1, A.size = !1, A.speak = !1, A["speak-as"] = !1, A["speak-header"] = !1, A["speak-numeral"] = !1, A["speak-punctuation"] = !1, A["speech-rate"] = !1, A.stress = !1, A["string-set"] = !1, A["tab-size"] = !1, A["table-layout"] = !1, A["text-align"] = !0, A["text-align-last"] = !0, A["text-combine-upright"] = !0, A["text-decoration"] = !0, A["text-decoration-color"] = !0, A["text-decoration-line"] = !0, A["text-decoration-skip"] = !0, A["text-decoration-style"] = !0, A["text-emphasis"] = !0, A["text-emphasis-color"] = !0, A["text-emphasis-position"] = !0, A["text-emphasis-style"] = !0, A["text-height"] = !0, A["text-indent"] = !0, A["text-justify"] = !0, A["text-orientation"] = !0, A["text-overflow"] = !0, A["text-shadow"] = !0, A["text-space-collapse"] = !0, A["text-transform"] = !0, A["text-underline-position"] = !0, A["text-wrap"] = !0, A.top = !1, A.transform = !1, A["transform-origin"] = !1, A["transform-style"] = !1, A.transition = !1, A["transition-delay"] = !1, A["transition-duration"] = !1, A["transition-property"] = !1, A["transition-timing-function"] = !1, A["unicode-bidi"] = !1, A["vertical-align"] = !1, A.visibility = !1, A["voice-balance"] = !1, A["voice-duration"] = !1, A["voice-family"] = !1, A["voice-pitch"] = !1, A["voice-range"] = !1, A["voice-rate"] = !1, A["voice-stress"] = !1, A["voice-volume"] = !1, A.volume = !1, A["white-space"] = !1, A.widows = !1, A.width = !0, A["will-change"] = !1, A["word-break"] = !0, A["word-spacing"] = !0, A["word-wrap"] = !0, A["wrap-flow"] = !1, A["wrap-through"] = !1, A["writing-mode"] = !1, A["z-index"] = !1, A
    }

    function N75(A, Q, B) {}

    function L75(A, Q, B) {}
    var M75 = /javascript\s*\:/img;

    function O75(A, Q) {
        if (M75.test(Q)) return "";
        return Q
    }
    R75.whiteList = A52();
    R75.getDefaultWhiteList = A52;
    R75.onAttr = N75;
    R75.onIgnoreAttr = L75;
    R75.safeAttrValue = O75
});
var dA0 = U((PTG, Q52) => {
    Q52.exports = {
        indexOf: function(A, Q) {
            var B, G;
            if (Array.prototype.indexOf) return A.indexOf(Q);
            for (B = 0, G = A.length; B < G; B++)
                if (A[B] === Q) return B;
            return -1
        },
        forEach: function(A, Q, B) {
            var G, Z;
            if (Array.prototype.forEach) return A.forEach(Q, B);
            for (G = 0, Z = A.length; G < Z; G++) Q.call(B, A[G], G, A)
        },
        trim: function(A) {
            if (String.prototype.trim) return A.trim();
            return A.replace(/(^\s*)|(\s*$)/g, "")
        },
        trimRight: function(A) {
            if (String.prototype.trimRight) return A.trimRight();
            return A.replace(/(\s*$)/g, "")
        }
    }
});
var G52 = U((jTG, B52) => {
    var dLA = dA0();

    function k75(A, Q) {
        if (A = dLA.trimRight(A), A[A.length - 1] !== ";") A += ";";
        var B = A.length,
            G = !1,
            Z = 0,
            I = 0,
            Y = "";

        function J() {
            if (!G) {
                var F = dLA.trim(A.slice(Z, I)),
                    V = F.indexOf(":");
                if (V !== -1) {
                    var K = dLA.trim(F.slice(0, V)),
                        D = dLA.trim(F.slice(V + 1));
                    if (K) {
                        var H = Q(Z, Y.length, K, D, F);
                        if (H) Y += H + "; "
                    }
                }
            }
            Z = I + 1
        }
        for (; I < B; I++) {
            var W = A[I];
            if (W === "/" && A[I + 1] === "*") {
                var X = A.indexOf("*/", I + 2);
                if (X === -1) break;
                I = X + 1, Z = I + 1, G = !1
            } else if (W === "(") G = !0;
            else if (W === ")") G = !1;
            else if (W === ";")
                if (G);
                else J();
            else if (W === `
`) J()
        }
        return dLA.trim(Y)
    }
    B52.exports = k75
});
var J52 = U((_TG, Y52) => {
    var _B1 = mA0(),
        y75 = G52(),
        STG = dA0();

    function Z52(A) {
        return A === void 0 || A === null
    }

    function x75(A) {
        var Q = {};
        for (var B in A) Q[B] = A[B];
        return Q
    }

    function I52(A) {
        A = x75(A || {}), A.whiteList = A.whiteList || _B1.whiteList, A.onAttr = A.onAttr || _B1.onAttr, A.onIgnoreAttr = A.onIgnoreAttr || _B1.onIgnoreAttr, A.safeAttrValue = A.safeAttrValue || _B1.safeAttrValue, this.options = A
    }
    I52.prototype.process = function(A) {
        if (A = A || "", A = A.toString(), !A) return "";
        var Q = this,
            B = Q.options,
            G = B.whiteList,
            Z = B.onAttr,
            I = B.onIgnoreAttr,
            Y = B.safeAttrValue,
            J = y75(A, function(W, X, F, V, K) {
                var D = G[F],
                    H = !1;
                if (D === !0) H = D;
                else if (typeof D === "function") H = D(V);
                else if (D instanceof RegExp) H = D.test(V);
                if (H !== !0) H = !1;
                if (V = Y(F, V), !V) return;
                var C = {
                    position: X,
                    sourcePosition: W,
                    source: K,
                    isWhite: H
                };
                if (H) {
                    var E = Z(F, V, C);
                    if (Z52(E)) return F + ":" + V;
                    else return E
                } else {
                    var E = I(F, V, C);
                    if (!Z52(E)) return E
                }
            });
        return J
    };
    Y52.exports = I52
});
var xB1 = U((yB1, cA0) => {
    var W52 = mA0(),
        X52 = J52();

    function v75(A, Q) {
        var B = new X52(Q);
        return B.process(A)
    }
    yB1 = cA0.exports = v75;
    yB1.FilterCSS = X52;
    for (kB1 in W52) yB1[kB1] = W52[kB1];
    var kB1;
    if (typeof window < "u") window.filterCSS = cA0.exports
});
var vB1 = U((kTG, F52) => {
    F52.exports = {
        indexOf: function(A, Q) {
            var B, G;
            if (Array.prototype.indexOf) return A.indexOf(Q);
            for (B = 0, G = A.length; B < G; B++)
                if (A[B] === Q) return B;
            return -1
        },
        forEach: function(A, Q, B) {
            var G, Z;
            if (Array.prototype.forEach) return A.forEach(Q, B);
            for (G = 0, Z = A.length; G < Z; G++) Q.call(B, A[G], G, A)
        },
        trim: function(A) {
            if (String.prototype.trim) return A.trim();
            return A.replace(/(^\s*)|(\s*$)/g, "")
        },
        spaceIndex: function(A) {
            var Q = /\s|\n|\t/,
                B = Q.exec(A);
            return B ? B.index : -1
        }
    }
});
var pA0 = U((AG5) => {
    var b75 = xB1().FilterCSS,
        f75 = xB1().getDefaultWhiteList,
        fB1 = vB1();
