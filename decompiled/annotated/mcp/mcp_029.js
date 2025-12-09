/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: mcp_029.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 29/29
 * Lines: 450174 - 450258 (85 lines)
 * Original file: cli.js
 */

    try {
        if (await Na.parseAsync(A, {
                from: "user"
            }), !OC()) await (await pg())?.flush();
        return 0
    } catch (Q) {
        if (console.error(oA.red("Error:"), Q), !OC()) await (await pg())?.flush();
        return 1
    }
}
var AE9 = 1048576;

function ev3(A, ...Q) {
    console.error(`[Claude Chrome Native Host] ${A}`, ...Q)
}
class Ab3 {
    buffer = Buffer.alloc(0);
    pendingResolve = null;
    closed = !1;
    constructor() {
        process.stdin.on("data", (A) => {
            this.buffer = Buffer.concat([this.buffer, A]), this.tryProcessMessage()
        }), process.stdin.on("end", () => {
            if (this.closed = !0, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null
        }), process.stdin.on("error", () => {
            if (this.closed = !0, this.pendingResolve) this.pendingResolve(null), this.pendingResolve = null
        })
    }
    tryProcessMessage() {
        if (!this.pendingResolve) return;
        if (this.buffer.length < 4) return;
        let A = this.buffer.readUInt32LE(0);
        if (A === 0 || A > AE9) {
            ev3(`Invalid message length: ${A}`), this.pendingResolve(null), this.pendingResolve = null;
            return
        }
        if (this.buffer.length < 4 + A) return;
        let Q = this.buffer.subarray(4, 4 + A);
        this.buffer = this.buffer.subarray(4 + A);
        let B = Q.toString("utf-8");
        this.pendingResolve(B), this.pendingResolve = null
    }
    async read() {
        if (this.closed) return null;
        if (this.buffer.length >= 4) {
            let A = this.buffer.readUInt32LE(0);
            if (A > 0 && A <= AE9 && this.buffer.length >= 4 + A) {
                let Q = this.buffer.subarray(4, 4 + A);
                return this.buffer = this.buffer.subarray(4 + A), Q.toString("utf-8")
            }
        }
        return new Promise((A) => {
            this.pendingResolve = A, this.tryProcessMessage()
        })
    }
}
process.env.COREPACK_ENABLE_AUTO_PIN = "0";
v4("cli_entry");
v4("cli_imports_loaded");
async function Kh3() {
    let A = process.argv.slice(2);
    if (A.length === 1 && (A[0] === "--version" || A[0] === "-v" || A[0] === "-V")) {
        v4("cli_version_fast_path"), console.log(`${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION} (Claude Code)`);
        return
    }
    if (RJ() && A[0] === "--mcp-cli") {
        let B = A.slice(1);
        process.exit(await eC9(B))
    }
    if (A[0] === "--ripgrep") {
        v4("cli_ripgrep_path");
        let B = A.slice(1),
            {
                ripgrepMain: G
            } = await Promise.resolve().then(() => (BE9(), QE9));
        process.exitCode = G(B);
        return
    }
    v4("cli_before_main_import");
    let {
        main: Q
    } = await Promise.resolve().then(() => (Q$9(), A$9));
    v4("cli_after_main_import"), await Q(), v4("cli_after_main_complete")
}
Kh3();