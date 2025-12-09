/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: telemetry_003.js
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
 * 本文件中使用的混淆变量:
 *   L        (16次) = lazyLoader(fn) - Lazy module loader
 *   GA       (3次) = esmImport(module) - ESM import helper
 *   U        (2次) = moduleWrapper(fn) - CommonJS module wrapper
 *   C9A      (2次) = getRipgrepConfig() - Get ripgrep path and args
 *   UA       (1次) = require(moduleName) - Node.js require
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: telemetry
 * File: 3/14
 * Lines: 29961 - 31460 (1500 lines)
 * Original file: cli.js
 */

    if (Y !== void 0) px0({
        convertedChunk: Y,
        state: A,
        getSize: Q,
        truncateChunk: B,
        addChunk: G,
        maxBuffer: I
    })
}, px0 = ({
    convertedChunk: A,
    state: Q,
    getSize: B,
    truncateChunk: G,
    addChunk: Z,
    maxBuffer: I
}) => {
    let Y = B(A),
        J = Q.length + Y;
    if (J <= I) {
        dx0(A, Q, Z, J);
        return
    }
    let W = G(A, I - Q.length);
    if (W !== void 0) dx0(W, Q, Z, I);
    throw new IH1
}, dx0 = (A, Q, B, G) => {
    Q.contents = B(A, Q, G), Q.length = G
}, B14 = (A) => typeof A === "object" && A !== null && typeof A[Symbol.asyncIterator] === "function", G14 = (A) => {
    let Q = typeof A;
    if (Q === "string") return "string";
    if (Q !== "object" || A === null) return "others";
    if (globalThis.Buffer?.isBuffer(A)) return "buffer";
    let B = cx0.call(A);
    if (B === "[object ArrayBuffer]") return "arrayBuffer";
    if (B === "[object DataView]") return "dataView";
    if (Number.isInteger(A.byteLength) && Number.isInteger(A.byteOffset) && cx0.call(A.buffer) === "[object ArrayBuffer]") return "typedArray";
    return "others"
}, cx0, IH1;
var ZKA = L(() => {
    ({
        toString: cx0
    } = Object.prototype);
    IH1 = class IH1 extends Error {
        name = "MaxBufferError";
        constructor() {
            super("maxBuffer exceeded")
        }
    }
});
var YH1 = (A) => A,
    JH1 = () => {
        return
    },
    WH1 = ({
        contents: A
    }) => A,
    VxA = (A) => {
        throw Error(`Streams in object mode are not supported: ${String(A)}`)
    },
    KxA = (A) => A.length;
var lx0 = L(() => {
    ZKA()
});
async function XH1(A, Q) {
    return GKA(A, K14, Q)
}
var Z14 = () => ({
        contents: new ArrayBuffer(0)
    }),
    I14 = (A) => Y14.encode(A),
    Y14, ix0 = (A) => new Uint8Array(A),
    nx0 = (A) => new Uint8Array(A.buffer, A.byteOffset, A.byteLength),
    J14 = (A, Q) => A.slice(0, Q),
    W14 = (A, {
        contents: Q,
        length: B
    }, G) => {
        let Z = rx0() ? F14(Q, G) : X14(Q, G);
        return new Uint8Array(Z).set(A, B), Z
    },
    X14 = (A, Q) => {
        if (Q <= A.byteLength) return A;
        let B = new ArrayBuffer(sx0(Q));
        return new Uint8Array(B).set(new Uint8Array(A), 0), B
    },
    F14 = (A, Q) => {
        if (Q <= A.maxByteLength) return A.resize(Q), A;
        let B = new ArrayBuffer(Q, {
            maxByteLength: sx0(Q)
        });
        return new Uint8Array(B).set(new Uint8Array(A), 0), B
    },
    sx0 = (A) => ax0 ** Math.ceil(Math.log(A) / Math.log(ax0)),
    ax0 = 2,
    V14 = ({
        contents: A,
        length: Q
    }) => rx0() ? A : A.slice(0, Q),
    rx0 = () => ("resize" in ArrayBuffer.prototype),
    K14;
var FH1 = L(() => {
    ZKA();
    Y14 = new TextEncoder, K14 = {
        init: Z14,
        convertChunk: {
            string: I14,
            buffer: ix0,
            arrayBuffer: ix0,
            dataView: nx0,
            typedArray: nx0,
            others: VxA
        },
        getSize: KxA,
        truncateChunk: J14,
        addChunk: W14,
        getFinalChunk: JH1,
        finalize: V14
    }
});
async function DxA(A, Q) {
    if (!("Buffer" in globalThis)) throw Error("getStreamAsBuffer() is only supported in Node.js");
    try {
        return ox0(await XH1(A, Q))
    } catch (B) {
        if (B.bufferedData !== void 0) B.bufferedData = ox0(B.bufferedData);
        throw B
    }
}
var ox0 = (A) => globalThis.Buffer.from(A);
var tx0 = L(() => {
    FH1()
});
async function VH1(A, Q) {
    return GKA(A, z14, Q)
}
var D14 = () => ({
        contents: "",
        textDecoder: new TextDecoder
    }),
    HxA = (A, {
        textDecoder: Q
    }) => Q.decode(A, {
        stream: !0
    }),
    H14 = (A, {
        contents: Q
    }) => Q + A,
    C14 = (A, Q) => A.slice(0, Q),
    E14 = ({
        textDecoder: A
    }) => {
        let Q = A.decode();
        return Q === "" ? void 0 : Q
    },
    z14;
var ex0 = L(() => {
    ZKA();
    z14 = {
        init: D14,
        convertChunk: {
            string: YH1,
            buffer: HxA,
            arrayBuffer: HxA,
            dataView: HxA,
            typedArray: HxA,
            others: VxA
        },
        getSize: KxA,
        truncateChunk: C14,
        addChunk: H14,
        getFinalChunk: E14,
        finalize: WH1
    }
});
var Av0 = L(() => {
    lx0();
    FH1();
    tx0();
    ex0();
    ZKA()
});
var Bv0 = U((UB7, Qv0) => {
    var {
        PassThrough: U14
    } = UA("stream");
    Qv0.exports = function() {
        var A = [],
            Q = new U14({
                objectMode: !0
            });
        return Q.setMaxListeners(0), Q.add = B, Q.isEmpty = G, Q.on("unpipe", Z), Array.prototype.slice.call(arguments).forEach(B), Q;

        function B(I) {
            if (Array.isArray(I)) return I.forEach(B), this;
            return A.push(I), I.once("end", Z.bind(null, I)), I.once("error", Q.emit.bind(Q, "error")), I.pipe(Q, {
                end: !1
            }), this
        }

        function G() {
            return A.length == 0
        }

        function Z(I) {
            if (A = A.filter(function(Y) {
                    return Y !== I
                }), !A.length && Q.readable) Q.end()
        }
    }
});
import {
    createReadStream as $14,
    readFileSync as w14
} from "node:fs";
import {
    setTimeout as q14
} from "node:timers/promises";
var Gv0, Zv0 = (A) => {
        if (A !== void 0) throw TypeError("The `input` and `inputFile` options cannot be both set.")
    },
    N14 = ({
        input: A,
        inputFile: Q
    }) => {
        if (typeof Q !== "string") return A;
        return Zv0(A), w14(Q)
    },
    Iv0 = (A) => {
        let Q = N14(A);
        if (FxA(Q)) throw TypeError("The `input` option cannot be a stream in sync mode");
        return Q
    },
    L14 = ({
        input: A,
        inputFile: Q
    }) => {
        if (typeof Q !== "string") return A;
        return Zv0(A), $14(Q)
    },
    Yv0 = (A, Q) => {
        let B = L14(Q);
        if (B === void 0) return;
        if (FxA(B)) B.pipe(A.stdin);
        else A.stdin.end(B)
    },
    Jv0 = (A, {
        all: Q
    }) => {
        if (!Q || !A.stdout && !A.stderr) return;
        let B = Gv0.default();
        if (A.stdout) B.add(A.stdout);
        if (A.stderr) B.add(A.stderr);
        return B
    },
    KH1 = async (A, Q) => {
        if (!A || Q === void 0) return;
        await q14(0), A.destroy();
        try {
            return await Q
        } catch (B) {
            return B.bufferedData
        }
    }, DH1 = (A, {
        encoding: Q,
        buffer: B,
        maxBuffer: G
    }) => {
        if (!A || !B) return;
        if (Q === "utf8" || Q === "utf-8") return VH1(A, {
            maxBuffer: G
        });
        if (Q === null || Q === "buffer") return DxA(A, {
            maxBuffer: G
        });
        return M14(A, G, Q)
    }, M14 = async (A, Q, B) => {
        return (await DxA(A, {
            maxBuffer: Q
        })).toString(B)
    }, Wv0 = async ({
        stdout: A,
        stderr: Q,
        all: B
    }, {
        encoding: G,
        buffer: Z,
        maxBuffer: I
    }, Y) => {
        let J = DH1(A, {
                encoding: G,
                buffer: Z,
                maxBuffer: I
            }),
            W = DH1(Q, {
                encoding: G,
                buffer: Z,
                maxBuffer: I
            }),
            X = DH1(B, {
                encoding: G,
                buffer: Z,
                maxBuffer: I * 2
            });
        try {
            return await Promise.all([Y, J, W, X])
        } catch (F) {
            return Promise.all([{
                error: F,
                signal: F.signal,
                timedOut: F.timedOut
            }, KH1(A, J), KH1(Q, W), KH1(B, X)])
        }
    };
var Xv0 = L(() => {
    Av0();
    Gv0 = GA(Bv0(), 1)
});
var O14, R14, HH1 = (A, Q) => {
        for (let [B, G] of R14) {
            let Z = typeof Q === "function" ? (...I) => Reflect.apply(G.value, Q(), I) : G.value.bind(Q);
            Reflect.defineProperty(A, B, {
                ...G,
                value: Z
            })
        }
    },
    Fv0 = (A) => new Promise((Q, B) => {
        if (A.on("exit", (G, Z) => {
                Q({
                    exitCode: G,
                    signal: Z
                })
            }), A.on("error", (G) => {
                B(G)
            }), A.stdin) A.stdin.on("error", (G) => {
            B(G)
        })
    });
var Vv0 = L(() => {
    O14 = (async () => {})().constructor.prototype, R14 = ["then", "catch", "finally"].map((A) => [A, Reflect.getOwnPropertyDescriptor(O14, A)])
});
import {
    Buffer as T14
} from "node:buffer";
import {
    ChildProcess as P14
} from "node:child_process";
var Hv0 = (A, Q = []) => {
        if (!Array.isArray(Q)) return [A];
        return [A, ...Q]
    },
    j14, S14 = (A) => {
        if (typeof A !== "string" || j14.test(A)) return A;
        return `"${A.replaceAll('"',"\\\"")}"`
    },
    CH1 = (A, Q) => Hv0(A, Q).join(" "),
    EH1 = (A, Q) => Hv0(A, Q).map((B) => S14(B)).join(" "),
    _14, Kv0 = (A) => {
        let Q = typeof A;
        if (Q === "string") return A;
        if (Q === "number") return String(A);
        if (Q === "object" && A !== null && !(A instanceof P14) && "stdout" in A) {
            let B = typeof A.stdout;
            if (B === "string") return A.stdout;
            if (T14.isBuffer(A.stdout)) return A.stdout.toString();
            throw TypeError(`Unexpected "${B}" stdout in template expression`)
        }
        throw TypeError(`Unexpected "${Q}" in template expression`)
    },
    Dv0 = (A, Q, B) => B || A.length === 0 || Q.length === 0 ? [...A, ...Q] : [...A.slice(0, -1), `${A.at(-1)}${Q[0]}`, ...Q.slice(1)],
    k14 = ({
        templates: A,
        expressions: Q,
        tokens: B,
        index: G,
        template: Z
    }) => {
        let I = Z ?? A.raw[G],
            Y = I.split(_14).filter(Boolean),
            J = Dv0(B, Y, I.startsWith(" "));
        if (G === Q.length) return J;
        let W = Q[G],
            X = Array.isArray(W) ? W.map((F) => Kv0(F)) : [Kv0(W)];
        return Dv0(J, X, I.endsWith(" "))
    },
    zH1 = (A, Q) => {
        let B = [];
        for (let [G, Z] of A.entries()) B = k14({
            templates: A,
            expressions: Q,
            tokens: B,
            index: G,
            template: Z
        });
        return B
    };
var Cv0 = L(() => {
    j14 = /^[\w.-]+$/, _14 = / +/g
});
import {
    debuglog as y14
} from "node:util";
import x14 from "node:process";
var Ev0, CxA = (A, Q) => String(A).padStart(Q, "0"),
    v14 = () => {
        let A = new Date;
        return `${CxA(A.getHours(),2)}:${CxA(A.getMinutes(),2)}:${CxA(A.getSeconds(),2)}.${CxA(A.getMilliseconds(),3)}`
    },
    UH1 = (A, {
        verbose: Q
    }) => {
        if (!Q) return;
        x14.stderr.write(`[${v14()}] ${A}
`)
    };
var zv0 = L(() => {
    Ev0 = y14("execa").enabled
});
import {
    Buffer as b14
} from "node:buffer";
import f14 from "node:path";
import $H1 from "node:child_process";
import ExA from "node:process";

function ds(A, Q, B) {
    let G = wv0(A, Q, B),
        Z = CH1(A, Q),
        I = EH1(A, Q);
    UH1(I, G.options), fx0(G.options);
    let Y;
    try {
        Y = $H1.spawn(G.file, G.args, G.options)
    } catch (D) {
        let H = new $H1.ChildProcess,
            C = Promise.reject(BKA({
                error: D,
                stdout: "",
                stderr: "",
                all: "",
                command: Z,
                escapedCommand: I,
                parsed: G,
                timedOut: !1,
                isCanceled: !1,
                killed: !1
            }));
        return HH1(H, C), H
    }
    let J = Fv0(Y),
        W = bx0(Y, G.options, J),
        X = hx0(Y, G.options, W),
        F = {
            isCanceled: !1
        };
    Y.kill = xx0.bind(null, Y.kill.bind(Y)), Y.cancel = vx0.bind(null, Y, F);
    let K = Ux0(async () => {
        let [{
            error: D,
            exitCode: H,
            signal: C,
            timedOut: E
        }, z, w, N] = await Wv0(Y, G.options, X), q = IKA(G.options, z), R = IKA(G.options, w), P = IKA(G.options, N);
        if (D || H !== 0 || C !== null) {
            let y = BKA({
                error: D,
                exitCode: H,
                signal: C,
                stdout: q,
                stderr: R,
                all: P,
                command: Z,
                escapedCommand: I,
                parsed: G,
                timedOut: E,
                isCanceled: F.isCanceled || (G.options.signal ? G.options.signal.aborted : !1),
                killed: Y.killed
            });
            if (!G.options.reject) return y;
            throw y
        }
        return {
            command: Z,
            escapedCommand: I,
            exitCode: 0,
            stdout: q,
            stderr: R,
            all: P,
            failed: !1,
            timedOut: !1,
            isCanceled: !1,
            killed: !1
        }
    });
    return Yv0(Y, G.options), Y.all = Jv0(Y, G.options), ux0(Y), HH1(Y, K), Y
}

function H9A(A, Q, B) {
    let G = wv0(A, Q, B),
        Z = CH1(A, Q),
        I = EH1(A, Q);
    UH1(I, G.options);
    let Y = Iv0(G.options),
        J;
    try {
        J = $H1.spawnSync(G.file, G.args, {
            ...G.options,
            input: Y
        })
    } catch (F) {
        throw BKA({
            error: F,
            stdout: "",
            stderr: "",
            all: "",
            command: Z,
            escapedCommand: I,
            parsed: G,
            timedOut: !1,
            isCanceled: !1,
            killed: !1
        })
    }
    let W = IKA(G.options, J.stdout, J.error),
        X = IKA(G.options, J.stderr, J.error);
    if (J.error || J.status !== 0 || J.signal !== null) {
        let F = BKA({
            stdout: W,
            stderr: X,
            error: J.error,
            signal: J.signal,
            exitCode: J.status,
            command: Z,
            escapedCommand: I,
            parsed: G,
            timedOut: J.error && J.error.code === "ETIMEDOUT",
            isCanceled: !1,
            killed: J.signal !== null
        });
        if (!G.options.reject) return F;
        throw F
    }
    return {
        command: Z,
        escapedCommand: I,
        exitCode: 0,
        stdout: W,
        stderr: X,
        failed: !1,
        timedOut: !1,
        isCanceled: !1,
        killed: !1
    }
}

function qv0(A) {
    function Q(B, ...G) {
        if (!Array.isArray(B)) return qv0({
            ...A,
            ...B
        });
        let [Z, ...I] = zH1(B, G);
        return ds(Z, I, Uv0(A))
    }
    return Q.sync = (B, ...G) => {
        if (!Array.isArray(B)) throw TypeError("Please use $(options).sync`command` instead of $.sync(options)`command`.");
        let [Z, ...I] = zH1(B, G);
        return H9A(Z, I, Uv0(A))
    }, Q
}
var $v0, h14 = 1e8,
    g14 = ({
        env: A,
        extendEnv: Q,
        preferLocal: B,
        localDir: G,
        execPath: Z
    }) => {
        let I = Q ? {
            ...ExA.env,
            ...A
        } : A;
        if (B) return Hx0({
            env: I,
            cwd: G,
            execPath: Z
        });
        return I
    },
    wv0 = (A, Q, B = {}) => {
        let G = $v0.default._parse(A, Q, B);
        if (A = G.command, Q = G.args, B = G.options, B = {
                maxBuffer: h14,
                buffer: !0,
                stripFinalNewline: !0,
                extendEnv: !0,
                preferLocal: !1,
                localDir: B.cwd || ExA.cwd(),
                execPath: ExA.execPath,
                encoding: "utf8",
                reject: !0,
                cleanup: !0,
                all: !1,
                windowsHide: !0,
                verbose: Ev0,
                ...B
            }, B.env = g14(B), B.stdio = Px0(B), ExA.platform === "win32" && f14.basename(A, ".exe") === "cmd") Q.unshift("/q");
        return {
            file: A,
            args: Q,
            options: B,
            parsed: G
        }
    },
    IKA = (A, Q, B) => {
        if (typeof Q !== "string" && !b14.isBuffer(Q)) return B === void 0 ? void 0 : "";
        if (A.stripFinalNewline) return aD1(Q);
        return Q
    },
    u14 = ({
        input: A,
        inputFile: Q,
        stdio: B
    }) => A === void 0 && Q === void 0 && B === void 0 ? {
        stdin: "inherit"
    } : {},
    Uv0 = (A = {}) => ({
        preferLocal: !0,
        ...u14(A),
        ...A
    }),
    aB7;
var YKA = L(() => {
    Cx0();
    $x0();
    Tx0();
    jx0();
    gx0();
    mx0();
    Xv0();
    Vv0();
    Cv0();
    zv0();
    $v0 = GA(nD1(), 1);
    aB7 = qv0()
});

function wH1() {
    return iBA()
}

function H0() {
    try {
        return wH1()
    } catch {
        return pQ()
    }
}
var R2 = L(() => {
    S0()
});

function iG(A, Q, B = 10 * NH1 * qH1) {
    let G;
    if (Q === void 0) G = {};
    else if (Q instanceof AbortSignal) G = {
        abortSignal: Q,
        timeout: B
    };
    else G = Q;
    let {
        abortSignal: Z,
        timeout: I = 10 * NH1 * qH1,
        input: Y,
        stdio: J = ["ignore", "pipe", "pipe"]
    } = G;
    Z?.throwIfAborted();
    try {
        let W = H9A(A, {
            env: process.env,
            maxBuffer: 1e6,
            timeout: I,
            cwd: H0(),
            stdio: J,
            shell: !0,
            reject: !1,
            input: Y
        });
        if (!W.stdout) return null;
        return W.stdout.trim() || null
    } catch {
        return null
    }
}
async function JKA(A, Q = {}) {
    let {
        abortSignal: B,
        timeout: G = 10 * NH1 * qH1
    } = Q;
    B?.throwIfAborted();
    try {
        let Z = await ds(A, {
            env: process.env,
            maxBuffer: 1e6,
            signal: B,
            timeout: G,
            cwd: H0(),
            shell: !0,
            reject: !1
        });
        if (!Z.stdout) return null;
        return Z.stdout.trim() || null
    } catch {
        return null
    }
}
var qH1 = 1000,
    NH1 = 60;
var zxA = L(() => {
    YKA();
    R2()
});

function ZQ(A, Q, B = {
    timeout: 10 * MH1 * LH1,
    preserveOutputOnError: !0,
    useCwd: !0
}) {
    return q3(A, Q, {
        abortSignal: B.abortSignal,
        timeout: B.timeout,
        preserveOutputOnError: B.preserveOutputOnError,
        cwd: B.useCwd ? H0() : void 0,
        env: B.env
    })
}

function q3(A, Q, {
    abortSignal: B,
    timeout: G = 10 * MH1 * LH1,
    preserveOutputOnError: Z = !0,
    cwd: I,
    env: Y,
    maxBuffer: J,
    shell: W
} = {
    timeout: 10 * MH1 * LH1,
    preserveOutputOnError: !0,
    maxBuffer: 1e6
}) {
    return new Promise((X) => {
        ds(A, Q, {
            maxBuffer: J,
            signal: B,
            timeout: G,
            cwd: I,
            env: Y,
            shell: W,
            reject: !1
        }).then((F) => {
            if (F.failed)
                if (Z) {
                    let V = F.exitCode ?? 1;
                    X({
                        stdout: F.stdout || "",
                        stderr: F.stderr || "",
                        code: V,
                        error: typeof F.signal === "string" ? F.signal : String(V)
                    })
                } else X({
                    stdout: "",
                    stderr: "",
                    code: F.exitCode ?? 1
                });
            else X({
                stdout: F.stdout,
                stderr: F.stderr,
                code: 0
            })
        }).catch((F) => {
            e(F), X({
                stdout: "",
                stderr: "",
                code: 1
            })
        })
    })
}
var LH1 = 1000,
    MH1 = 60;
var I6 = L(() => {
    YKA();
    R2();
    u1();
    zxA()
});

function cs() {
    return process.versions.bun !== void 0
}

function HJ() {
    return cs() && Array.isArray(Bun?.embeddedFiles) && Bun.embeddedFiles.length > 0
}
var OH1, uQ, ps, Nv0;
var s5 = L(() => {
    o2();
    u1();
    o0();
    OH1 = ["macos", "wsl"], uQ = t1(() => {
        try {
            if (process.platform === "darwin") return "macos";
            if (process.platform === "win32") return "windows";
            if (process.platform === "linux") {
                try {
                    let A = OA().readFileSync("/proc/version", {
                        encoding: "utf8"
                    });
                    if (A.toLowerCase().includes("microsoft") || A.toLowerCase().includes("wsl")) return "wsl"
                } catch (A) {
                    e(A instanceof Error ? A : Error(String(A)))
                }
                return "linux"
            }
            return "unknown"
        } catch (A) {
            return e(A instanceof Error ? A : Error(String(A))), "unknown"
        }
    }), ps = t1(() => {
        if (process.platform !== "linux") return;
        try {
            let A = OA().readFileSync("/proc/version", {
                    encoding: "utf8"
                }),
                Q = A.match(/WSL(\d+)/i);
            if (Q && Q[1]) return Q[1];
            if (A.toLowerCase().includes("microsoft")) return "1";
            return
        } catch (A) {
            e(A instanceof Error ? A : Error(String(A)));
            return
        }
    }), Nv0 = uQ() !== "windows"
});
import {
    fileURLToPath as m14
} from "node:url";
import * as Em from "node:path";
import {
    homedir as d14
} from "node:os";
import {
    execFile as c14
} from "child_process";

/* C9A */
/* getRipgrepConfig() - Get ripgrep path and args */
function C9A() {
    let A = $xA();
    return {
        rgPath: A.command,
        rgArgs: A.args
    }
}

function n14(A, Q, B, G) {
    let {
        rgPath: Z,
        rgArgs: I
    } = C9A();
    return c14(Z, [...I, ...A, Q], {
        maxBuffer: i14,
        signal: B,
        timeout: uQ() === "wsl" ? 60000 : 1e4
    }, G)
}
async function dj(A, Q, B) {
    if (!HJ()) await s14();
    return a14().catch((G) => {
        e(G instanceof Error ? G : Error(String(G)))
    }), new Promise((G) => {
        n14(A, Q, B, (Z, I, Y) => {
            if (!Z) {
                G(I.trim().split(`
`).filter(Boolean));
                return
            }
            if (Z.code === 1) {
                G([]);
                return
            }
            let J = I && I.trim().length > 0,
                W = Z.signal === "SIGTERM" || Z.code === "ABORT_ERR",
                X = Z.code === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER",
                F = Z.code === 2,
                V = (W || X || F) && J,
                K = [];
            if (V) {
                if (K = I.trim().split(`
`).filter(Boolean), K.length > 0 && (W || X)) K = K.slice(0, -1)
            }
            if (g(`rg error (signal=${Z.signal}, code=${Z.code}, stderr: ${Y}), ${K.length} results`), Z.code !== 2) e(Z);
            G(K)
        })
    })
}
async function Ov0(A, Q, B) {
    try {
        return (await dj(["-l", "."], A, Q)).slice(0, B)
    } catch {
        return []
    }
}

function Rv0() {
    let A = $xA();
    return {
        mode: A.mode,
        path: A.command,
        working: UxA?.working ?? null
    }
}
async function s14() {
    if (process.platform !== "darwin" || Lv0) return;
    Lv0 = !0;
    let A = $xA();
    if (A.mode !== "builtin" || HJ()) return;
    let Q = A.command;
    if (!(await ZQ("codesign", ["-vv", "-d", Q], {
            preserveOutputOnError: !1
        })).stdout.split(`
`).find((Z) => Z.includes("linker-signed"))) return;
    try {
        let Z = await ZQ("codesign", ["--sign", "-", "--force", "--preserve-metadata=entitlements,requirements,flags,runtime", Q]);
        if (Z.code !== 0) e(Error(`Failed to sign ripgrep: ${Z.stdout} ${Z.stderr}`));
        let I = await ZQ("xattr", ["-d", "com.apple.quarantine", Q]);
        if (I.code !== 0) e(Error(`Failed to remove quarantine: ${I.stdout} ${I.stderr}`))
    } catch (Z) {
        e(Z)
    }
}
var Mv0, p14, l14, $xA, i14 = 20000000,
    wxA, UxA = null,
    a14, Lv0 = !1;
var cj = L(() => {
    o2();
    u1();
    I6();
    D0();
    hQ();
    w0();
    s5();
    Mv0 = GA(fD1(), 1), p14 = m14(import.meta.url), l14 = Em.join(p14, "../"), $xA = t1(() => {
        if (Nj(process.env.USE_BUILTIN_RIPGREP)) {
            let {
                cmd: G
            } = Mv0.findActualExecutable("rg", []);
            if (G !== "rg") return {
                mode: "system",
                command: "rg",
                args: []
            }
        }
        if (HJ()) return {
            mode: "builtin",
            command: process.execPath,
            args: ["--ripgrep"]
        };
        let Q = Em.resolve(l14, "vendor", "ripgrep");
        return {
            mode: "builtin",
            command: process.platform === "win32" ? Em.resolve(Q, "x64-win32", "rg.exe") : Em.resolve(Q, `${process.arch}-${process.platform}`, "rg"),
            args: []
        }
    });
    wxA = t1(async (A, Q, B = []) => {
        if (Em.resolve(A) === Em.resolve(d14())) return;
        try {
            let G = ["--files", "--hidden"];
            B.forEach((W) => {
                G.push("--glob", `!${W}`)
            });
            let I = (await dj(G, A, Q)).length;
            if (I === 0) return 0;
            let Y = Math.floor(Math.log10(I)),
                J = Math.pow(10, Y);
            return Math.round(I / J) * J
        } catch (G) {
            e(G instanceof Error ? G : Error(String(G)))
        }
    });
    a14 = t1(async () => {
        if (UxA !== null) return;
        let A = $xA();
        try {
            let Q = await ZQ(A.command, [...A.args, "--version"], {
                    timeout: 5000
                }),
                B = Q.code === 0 && !!Q.stdout && Q.stdout.startsWith("ripgrep ");
            UxA = {
                working: B,
                lastTested: Date.now(),
                config: A
            }, g(`Ripgrep first use test: ${B?"PASSED":"FAILED"} (mode=${A.mode}, path=${A.command})`), BA("tengu_ripgrep_availability", {
                working: B ? 1 : 0,
                using_system: A.mode === "system" ? 1 : 0
            })
        } catch (Q) {
            UxA = {
                working: !1,
                lastTested: Date.now(),
                config: A
            }, e(Q instanceof Error ? Q : Error(String(Q)))
        }
    })
});
var cv0 = U((L27, dv0) => {
    function SH1(A) {
        if (A instanceof Map) A.clear = A.delete = A.set = function() {
            throw Error("map is read-only")
        };
        else if (A instanceof Set) A.add = A.clear = A.delete = function() {
            throw Error("set is read-only")
        };
        return Object.freeze(A), Object.getOwnPropertyNames(A).forEach(function(Q) {
            var B = A[Q];
            if (typeof B == "object" && !Object.isFrozen(B)) SH1(B)
        }), A
    }
    var yv0 = SH1,
        r14 = SH1;
    yv0.default = r14;
    class PH1 {
        constructor(A) {
            if (A.data === void 0) A.data = {};
            this.data = A.data, this.isMatchIgnored = !1
        }
        ignoreMatch() {
            this.isMatchIgnored = !0
        }
    }

    function E9A(A) {
        return A.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    }

    function zm(A, ...Q) {
        let B = Object.create(null);
        for (let G in A) B[G] = A[G];
        return Q.forEach(function(G) {
            for (let Z in G) B[Z] = G[Z]
        }), B
    }
    var o14 = "</span>",
        Tv0 = (A) => {
            return !!A.kind
        };
    class xv0 {
        constructor(A, Q) {
            this.buffer = "", this.classPrefix = Q.classPrefix, A.walk(this)
        }
        addText(A) {
            this.buffer += E9A(A)
        }
        openNode(A) {
            if (!Tv0(A)) return;
            let Q = A.kind;
            if (!A.sublanguage) Q = `${this.classPrefix}${Q}`;
            this.span(Q)
        }
        closeNode(A) {
            if (!Tv0(A)) return;
            this.buffer += o14
        }
        value() {
            return this.buffer
        }
        span(A) {
            this.buffer += `<span class="${A}">`
        }
    }
    class _H1 {
        constructor() {
            this.rootNode = {
                children: []
            }, this.stack = [this.rootNode]
        }
        get top() {
            return this.stack[this.stack.length - 1]
        }
        get root() {
            return this.rootNode
        }
        add(A) {
            this.top.children.push(A)
        }
        openNode(A) {
            let Q = {
                kind: A,
                children: []
            };
            this.add(Q), this.stack.push(Q)
        }
        closeNode() {
            if (this.stack.length > 1) return this.stack.pop();
            return
        }
        closeAllNodes() {
            while (this.closeNode());
        }
        toJSON() {
            return JSON.stringify(this.rootNode, null, 4)
        }
        walk(A) {
            return this.constructor._walk(A, this.rootNode)
        }
        static _walk(A, Q) {
            if (typeof Q === "string") A.addText(Q);
            else if (Q.children) A.openNode(Q), Q.children.forEach((B) => this._walk(A, B)), A.closeNode(Q);
            return A
        }
        static _collapse(A) {
            if (typeof A === "string") return;
            if (!A.children) return;
            if (A.children.every((Q) => typeof Q === "string")) A.children = [A.children.join("")];
            else A.children.forEach((Q) => {
                _H1._collapse(Q)
            })
        }
    }
    class vv0 extends _H1 {
        constructor(A) {
            super();
            this.options = A
        }
        addKeyword(A, Q) {
            if (A === "") return;
            this.openNode(Q), this.addText(A), this.closeNode()
        }
        addText(A) {
            if (A === "") return;
            this.add(A)
        }
        addSublanguage(A, Q) {
            let B = A.root;
            B.kind = Q, B.sublanguage = !0, this.add(B)
        }
        toHTML() {
            return new xv0(this, this.options).value()
        }
        finalize() {
            return !0
        }
    }

    function t14(A) {
        return new RegExp(A.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
    }

    function WKA(A) {
        if (!A) return null;
        if (typeof A === "string") return A;
        return A.source
    }

    function e14(...A) {
        return A.map((B) => WKA(B)).join("")
    }

    function A04(...A) {
        return "(" + A.map((B) => WKA(B)).join("|") + ")"
    }

    function Q04(A) {
        return new RegExp(A.toString() + "|").exec("").length - 1
    }

    function B04(A, Q) {
        let B = A && A.exec(Q);
        return B && B.index === 0
    }
    var G04 = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

    function Z04(A, Q = "|") {
        let B = 0;
        return A.map((G) => {
            B += 1;
            let Z = B,
                I = WKA(G),
                Y = "";
            while (I.length > 0) {
                let J = G04.exec(I);
                if (!J) {
                    Y += I;
                    break
                }
                if (Y += I.substring(0, J.index), I = I.substring(J.index + J[0].length), J[0][0] === "\\" && J[1]) Y += "\\" + String(Number(J[1]) + Z);
                else if (Y += J[0], J[0] === "(") B++
            }
            return Y
        }).map((G) => `(${G})`).join(Q)
    }
    var I04 = /\b\B/,
        bv0 = "[a-zA-Z]\\w*",
        kH1 = "[a-zA-Z_]\\w*",
        yH1 = "\\b\\d+(\\.\\d+)?",
        fv0 = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        hv0 = "\\b(0b[01]+)",
        Y04 = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        J04 = (A = {}) => {
            let Q = /^#![ ]*\//;
            if (A.binary) A.begin = e14(Q, /.*\b/, A.binary, /\b.*/);
            return zm({
                className: "meta",
                begin: Q,
                end: /$/,
                relevance: 0,
                "on:begin": (B, G) => {
                    if (B.index !== 0) G.ignoreMatch()
                }
            }, A)
        },
        XKA = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        },
        W04 = {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [XKA]
        },
        X04 = {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [XKA]
        },
        gv0 = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        },
        NxA = function(A, Q, B = {}) {
            let G = zm({
                className: "comment",
                begin: A,
                end: Q,
                contains: []
            }, B);
            return G.contains.push(gv0), G.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                relevance: 0
            }), G
        },
        F04 = NxA("//", "$"),
        V04 = NxA("/\\*", "\\*/"),
        K04 = NxA("#", "$"),
        D04 = {
            className: "number",
            begin: yH1,
            relevance: 0
        },
        H04 = {
            className: "number",
            begin: fv0,
            relevance: 0
        },
        C04 = {
            className: "number",
            begin: hv0,
            relevance: 0
        },
        E04 = {
            className: "number",
            begin: yH1 + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        },
        z04 = {
            begin: /(?=\/[^/\n]*\/)/,
            contains: [{
                className: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [XKA, {
                    begin: /\[/,
                    end: /\]/,
                    relevance: 0,
                    contains: [XKA]
                }]
            }]
        },
        U04 = {
            className: "title",
            begin: bv0,
            relevance: 0
        },
        $04 = {
            className: "title",
            begin: kH1,
            relevance: 0
        },
        w04 = {
            begin: "\\.\\s*" + kH1,
            relevance: 0
        },
        q04 = function(A) {
            return Object.assign(A, {
                "on:begin": (Q, B) => {
                    B.data._beginMatch = Q[1]
                },
                "on:end": (Q, B) => {
                    if (B.data._beginMatch !== Q[1]) B.ignoreMatch()
                }
            })
        },
        qxA = Object.freeze({
            __proto__: null,
            MATCH_NOTHING_RE: I04,
            IDENT_RE: bv0,
            UNDERSCORE_IDENT_RE: kH1,
            NUMBER_RE: yH1,
            C_NUMBER_RE: fv0,
            BINARY_NUMBER_RE: hv0,
            RE_STARTERS_RE: Y04,
            SHEBANG: J04,
            BACKSLASH_ESCAPE: XKA,
            APOS_STRING_MODE: W04,
            QUOTE_STRING_MODE: X04,
            PHRASAL_WORDS_MODE: gv0,
            COMMENT: NxA,
            C_LINE_COMMENT_MODE: F04,
            C_BLOCK_COMMENT_MODE: V04,
            HASH_COMMENT_MODE: K04,
            NUMBER_MODE: D04,
            C_NUMBER_MODE: H04,
            BINARY_NUMBER_MODE: C04,
            CSS_NUMBER_MODE: E04,
            REGEXP_MODE: z04,
            TITLE_MODE: U04,
            UNDERSCORE_TITLE_MODE: $04,
            METHOD_GUARD: w04,
            END_SAME_AS_BEGIN: q04
        });

    function N04(A, Q) {
        if (A.input[A.index - 1] === ".") Q.ignoreMatch()
    }

    function L04(A, Q) {
        if (!Q) return;
        if (!A.beginKeywords) return;
        if (A.begin = "\\b(" + A.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", A.__beforeBegin = N04, A.keywords = A.keywords || A.beginKeywords, delete A.beginKeywords, A.relevance === void 0) A.relevance = 0
    }

    function M04(A, Q) {
        if (!Array.isArray(A.illegal)) return;
        A.illegal = A04(...A.illegal)
    }

    function O04(A, Q) {
        if (!A.match) return;
        if (A.begin || A.end) throw Error("begin & end are not supported with match");
        A.begin = A.match, delete A.match
    }

    function R04(A, Q) {
        if (A.relevance === void 0) A.relevance = 1
    }
    var T04 = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"],
        P04 = "keyword";

    function uv0(A, Q, B = P04) {
        let G = {};
        if (typeof A === "string") Z(B, A.split(" "));
        else if (Array.isArray(A)) Z(B, A);
        else Object.keys(A).forEach(function(I) {
            Object.assign(G, uv0(A[I], Q, I))
        });
        return G;

        function Z(I, Y) {
            if (Q) Y = Y.map((J) => J.toLowerCase());
            Y.forEach(function(J) {
                let W = J.split("|");
                G[W[0]] = [I, j04(W[0], W[1])]
            })
        }
    }

    function j04(A, Q) {
        if (Q) return Number(Q);
        return S04(A) ? 0 : 1
    }

    function S04(A) {
        return T04.includes(A.toLowerCase())
    }

    function _04(A, {
        plugins: Q
    }) {
        function B(J, W) {
            return new RegExp(WKA(J), "m" + (A.case_insensitive ? "i" : "") + (W ? "g" : ""))
        }
        class G {
            constructor() {
                this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
            }
            addRule(J, W) {
                W.position = this.position++, this.matchIndexes[this.matchAt] = W, this.regexes.push([W, J]), this.matchAt += Q04(J) + 1
            }
            compile() {
                if (this.regexes.length === 0) this.exec = () => null;
                let J = this.regexes.map((W) => W[1]);
                this.matcherRe = B(Z04(J), !0), this.lastIndex = 0
            }
            exec(J) {
                this.matcherRe.lastIndex = this.lastIndex;
                let W = this.matcherRe.exec(J);
                if (!W) return null;
                let X = W.findIndex((V, K) => K > 0 && V !== void 0),
                    F = this.matchIndexes[X];
                return W.splice(0, X), Object.assign(W, F)
            }
        }
        class Z {
            constructor() {
                this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
            }
            getMatcher(J) {
                if (this.multiRegexes[J]) return this.multiRegexes[J];
                let W = new G;
                return this.rules.slice(J).forEach(([X, F]) => W.addRule(X, F)), W.compile(), this.multiRegexes[J] = W, W
            }
            resumingScanAtSamePosition() {
                return this.regexIndex !== 0
            }
            considerAll() {
                this.regexIndex = 0
            }
            addRule(J, W) {
                if (this.rules.push([J, W]), W.type === "begin") this.count++
            }
            exec(J) {
                let W = this.getMatcher(this.regexIndex);
                W.lastIndex = this.lastIndex;
                let X = W.exec(J);
                if (this.resumingScanAtSamePosition())
                    if (X && X.index === this.lastIndex);
                    else {
                        let F = this.getMatcher(0);
                        F.lastIndex = this.lastIndex + 1, X = F.exec(J)
                    } if (X) {
                    if (this.regexIndex += X.position + 1, this.regexIndex === this.count) this.considerAll()
                }
                return X
            }
        }

        function I(J) {
            let W = new Z;
            if (J.contains.forEach((X) => W.addRule(X.begin, {
                    rule: X,
                    type: "begin"
                })), J.terminatorEnd) W.addRule(J.terminatorEnd, {
                type: "end"
            });
            if (J.illegal) W.addRule(J.illegal, {
                type: "illegal"
            });
            return W
        }

        function Y(J, W) {
            let X = J;
            if (J.isCompiled) return X;
            [O04].forEach((V) => V(J, W)), A.compilerExtensions.forEach((V) => V(J, W)), J.__beforeBegin = null, [L04, M04, R04].forEach((V) => V(J, W)), J.isCompiled = !0;
            let F = null;
            if (typeof J.keywords === "object") F = J.keywords.$pattern, delete J.keywords.$pattern;
            if (J.keywords) J.keywords = uv0(J.keywords, A.case_insensitive);
            if (J.lexemes && F) throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
            if (F = F || J.lexemes || /\w+/, X.keywordPatternRe = B(F, !0), W) {
                if (!J.begin) J.begin = /\B|\b/;
                if (X.beginRe = B(J.begin), J.endSameAsBegin) J.end = J.begin;
                if (!J.end && !J.endsWithParent) J.end = /\B|\b/;
                if (J.end) X.endRe = B(J.end);
                if (X.terminatorEnd = WKA(J.end) || "", J.endsWithParent && W.terminatorEnd) X.terminatorEnd += (J.end ? "|" : "") + W.terminatorEnd
            }
            if (J.illegal) X.illegalRe = B(J.illegal);
            if (!J.contains) J.contains = [];
            if (J.contains = [].concat(...J.contains.map(function(V) {
                    return k04(V === "self" ? J : V)
                })), J.contains.forEach(function(V) {
                    Y(V, X)
                }), J.starts) Y(J.starts, W);
            return X.matcher = I(X), X
        }
        if (!A.compilerExtensions) A.compilerExtensions = [];
        if (A.contains && A.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");