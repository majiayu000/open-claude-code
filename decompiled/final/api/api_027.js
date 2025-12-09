/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: api_027.js
 * 处理时间: 2025-12-09T03:41:36.299Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * UA       (  5x) require(name) - Node require
 * GA       (  1x) esmImport(module) - ESM import
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: api
 * File: 27/30
 * Lines: 336421 - 337920 (1500 lines)
 * Original file: cli.js
 */

    Object.defineProperty(x2, "LinkedMap", {
        enumerable: !0,
        get: function() {
            return Q60.LinkedMap
        }
    });
    Object.defineProperty(x2, "LRUCache", {
        enumerable: !0,
        get: function() {
            return Q60.LRUCache
        }
    });
    Object.defineProperty(x2, "Touch", {
        enumerable: !0,
        get: function() {
            return Q60.Touch
        }
    });
    var xb5 = HP2();
    Object.defineProperty(x2, "Disposable", {
        enumerable: !0,
        get: function() {
            return xb5.Disposable
        }
    });
    var Jj2 = hJA();
    Object.defineProperty(x2, "Event", {
        enumerable: !0,
        get: function() {
            return Jj2.Event
        }
    });
    Object.defineProperty(x2, "Emitter", {
        enumerable: !0,
        get: function() {
            return Jj2.Emitter
        }
    });
    var Wj2 = w61();
    Object.defineProperty(x2, "CancellationTokenSource", {
        enumerable: !0,
        get: function() {
            return Wj2.CancellationTokenSource
        }
    });
    Object.defineProperty(x2, "CancellationToken", {
        enumerable: !0,
        get: function() {
            return Wj2.CancellationToken
        }
    });
    var Xj2 = jP2();
    Object.defineProperty(x2, "SharedArraySenderStrategy", {
        enumerable: !0,
        get: function() {
            return Xj2.SharedArraySenderStrategy
        }
    });
    Object.defineProperty(x2, "SharedArrayReceiverStrategy", {
        enumerable: !0,
        get: function() {
            return Xj2.SharedArrayReceiverStrategy
        }
    });
    var B60 = fP2();
    Object.defineProperty(x2, "MessageReader", {
        enumerable: !0,
        get: function() {
            return B60.MessageReader
        }
    });
    Object.defineProperty(x2, "AbstractMessageReader", {
        enumerable: !0,
        get: function() {
            return B60.AbstractMessageReader
        }
    });
    Object.defineProperty(x2, "ReadableStreamMessageReader", {
        enumerable: !0,
        get: function() {
            return B60.ReadableStreamMessageReader
        }
    });
    var G60 = lP2();
    Object.defineProperty(x2, "MessageWriter", {
        enumerable: !0,
        get: function() {
            return G60.MessageWriter
        }
    });
    Object.defineProperty(x2, "AbstractMessageWriter", {
        enumerable: !0,
        get: function() {
            return G60.AbstractMessageWriter
        }
    });
    Object.defineProperty(x2, "WriteableStreamMessageWriter", {
        enumerable: !0,
        get: function() {
            return G60.WriteableStreamMessageWriter
        }
    });
    var vb5 = sP2();
    Object.defineProperty(x2, "AbstractMessageBuffer", {
        enumerable: !0,
        get: function() {
            return vb5.AbstractMessageBuffer
        }
    });
    var hD = Yj2();
    Object.defineProperty(x2, "ConnectionStrategy", {
        enumerable: !0,
        get: function() {
            return hD.ConnectionStrategy
        }
    });
    Object.defineProperty(x2, "ConnectionOptions", {
        enumerable: !0,
        get: function() {
            return hD.ConnectionOptions
        }
    });
    Object.defineProperty(x2, "NullLogger", {
        enumerable: !0,
        get: function() {
            return hD.NullLogger
        }
    });
    Object.defineProperty(x2, "createMessageConnection", {
        enumerable: !0,
        get: function() {
            return hD.createMessageConnection
        }
    });
    Object.defineProperty(x2, "ProgressToken", {
        enumerable: !0,
        get: function() {
            return hD.ProgressToken
        }
    });
    Object.defineProperty(x2, "ProgressType", {
        enumerable: !0,
        get: function() {
            return hD.ProgressType
        }
    });
    Object.defineProperty(x2, "Trace", {
        enumerable: !0,
        get: function() {
            return hD.Trace
        }
    });
    Object.defineProperty(x2, "TraceValues", {
        enumerable: !0,
        get: function() {
            return hD.TraceValues
        }
    });
    Object.defineProperty(x2, "TraceFormat", {
        enumerable: !0,
        get: function() {
            return hD.TraceFormat
        }
    });
    Object.defineProperty(x2, "SetTraceNotification", {
        enumerable: !0,
        get: function() {
            return hD.SetTraceNotification
        }
    });
    Object.defineProperty(x2, "LogTraceNotification", {
        enumerable: !0,
        get: function() {
            return hD.LogTraceNotification
        }
    });
    Object.defineProperty(x2, "ConnectionErrors", {
        enumerable: !0,
        get: function() {
            return hD.ConnectionErrors
        }
    });
    Object.defineProperty(x2, "ConnectionError", {
        enumerable: !0,
        get: function() {
            return hD.ConnectionError
        }
    });
    Object.defineProperty(x2, "CancellationReceiverStrategy", {
        enumerable: !0,
        get: function() {
            return hD.CancellationReceiverStrategy
        }
    });
    Object.defineProperty(x2, "CancellationSenderStrategy", {
        enumerable: !0,
        get: function() {
            return hD.CancellationSenderStrategy
        }
    });
    Object.defineProperty(x2, "CancellationStrategy", {
        enumerable: !0,
        get: function() {
            return hD.CancellationStrategy
        }
    });
    Object.defineProperty(x2, "MessageStrategy", {
        enumerable: !0,
        get: function() {
            return hD.MessageStrategy
        }
    });
    var bb5 = Qn();
    x2.RAL = bb5.default
});
var Cj2 = U((Hj2) => {
    Object.defineProperty(Hj2, "__esModule", {
        value: !0
    });
    var Fj2 = UA("util"),
        bh = T61();
    class P61 extends bh.AbstractMessageBuffer {
        constructor(A = "utf-8") {
            super(A)
        }
        emptyBuffer() {
            return P61.emptyBuffer
        }
        fromString(A, Q) {
            return Buffer.from(A, Q)
        }
        toString(A, Q) {
            if (A instanceof Buffer) return A.toString(Q);
            else return new Fj2.TextDecoder(Q).decode(A)
        }
        asNative(A, Q) {
            if (Q === void 0) return A instanceof Buffer ? A : Buffer.from(A);
            else return A instanceof Buffer ? A.slice(0, Q) : Buffer.from(A, 0, Q)
        }
        allocNative(A) {
            return Buffer.allocUnsafe(A)
        }
    }
    P61.emptyBuffer = Buffer.allocUnsafe(0);
    class Vj2 {
        constructor(A) {
            this.stream = A
        }
        onClose(A) {
            return this.stream.on("close", A), bh.Disposable.create(() => this.stream.off("close", A))
        }
        onError(A) {
            return this.stream.on("error", A), bh.Disposable.create(() => this.stream.off("error", A))
        }
        onEnd(A) {
            return this.stream.on("end", A), bh.Disposable.create(() => this.stream.off("end", A))
        }
        onData(A) {
            return this.stream.on("data", A), bh.Disposable.create(() => this.stream.off("data", A))
        }
    }
    class Kj2 {
        constructor(A) {
            this.stream = A
        }
        onClose(A) {
            return this.stream.on("close", A), bh.Disposable.create(() => this.stream.off("close", A))
        }
        onError(A) {
            return this.stream.on("error", A), bh.Disposable.create(() => this.stream.off("error", A))
        }
        onEnd(A) {
            return this.stream.on("end", A), bh.Disposable.create(() => this.stream.off("end", A))
        }
        write(A, Q) {
            return new Promise((B, G) => {
                let Z = (I) => {
                    if (I === void 0 || I === null) B();
                    else G(I)
                };
                if (typeof A === "string") this.stream.write(A, Q, Z);
                else this.stream.write(A, Z)
            })
        }
        end() {
            this.stream.end()
        }
    }
    var Dj2 = Object.freeze({
        messageBuffer: Object.freeze({
            create: (A) => new P61(A)
        }),
        applicationJson: Object.freeze({
            encoder: Object.freeze({
                name: "application/json",
                encode: (A, Q) => {
                    try {
                        return Promise.resolve(Buffer.from(JSON.stringify(A, void 0, 0), Q.charset))
                    } catch (B) {
                        return Promise.reject(B)
                    }
                }
            }),
            decoder: Object.freeze({
                name: "application/json",
                decode: (A, Q) => {
                    try {
                        if (A instanceof Buffer) return Promise.resolve(JSON.parse(A.toString(Q.charset)));
                        else return Promise.resolve(JSON.parse(new Fj2.TextDecoder(Q.charset).decode(A)))
                    } catch (B) {
                        return Promise.reject(B)
                    }
                }
            })
        }),
        stream: Object.freeze({
            asReadableStream: (A) => new Vj2(A),
            asWritableStream: (A) => new Kj2(A)
        }),
        console,
        timer: Object.freeze({
            setTimeout(A, Q, ...B) {
                let G = setTimeout(A, Q, ...B);
                return {
                    dispose: () => clearTimeout(G)
                }
            },
            setImmediate(A, ...Q) {
                let B = setImmediate(A, ...Q);
                return {
                    dispose: () => clearImmediate(B)
                }
            },
            setInterval(A, Q, ...B) {
                let G = setInterval(A, Q, ...B);
                return {
                    dispose: () => clearInterval(G)
                }
            }
        })
    });

    function Z60() {
        return Dj2
    }(function(A) {
        function Q() {
            bh.RAL.install(Dj2)
        }
        A.install = Q
    })(Z60 || (Z60 = {}));
    Hj2.default = Z60
});
var Nj2 = U((m5) => {
    var mb5 = m5 && m5.__createBinding || (Object.create ? function(A, Q, B, G) {
            if (G === void 0) G = B;
            var Z = Object.getOwnPropertyDescriptor(Q, B);
            if (!Z || ("get" in Z ? !Q.__esModule : Z.writable || Z.configurable)) Z = {
                enumerable: !0,
                get: function() {
                    return Q[B]
                }
            };
            Object.defineProperty(A, G, Z)
        } : function(A, Q, B, G) {
            if (G === void 0) G = B;
            A[G] = Q[B]
        }),
        db5 = m5 && m5.__exportStar || function(A, Q) {
            for (var B in A)
                if (B !== "default" && !Object.prototype.hasOwnProperty.call(Q, B)) mb5(Q, A, B)
        };
    Object.defineProperty(m5, "__esModule", {
        value: !0
    });
    m5.createMessageConnection = m5.createServerSocketTransport = m5.createClientSocketTransport = m5.createServerPipeTransport = m5.createClientPipeTransport = m5.generateRandomPipeName = m5.StreamMessageWriter = m5.StreamMessageReader = m5.SocketMessageWriter = m5.SocketMessageReader = m5.PortMessageWriter = m5.PortMessageReader = m5.IPCMessageWriter = m5.IPCMessageReader = void 0;
    var mJA = Cj2();
    mJA.default.install();
    var Ej2 = UA("path"),
        cb5 = UA("os"),
        pb5 = UA("crypto"),
        j61 = UA("net"),
        Rq = T61();
    db5(T61(), m5);
    class Uj2 extends Rq.AbstractMessageReader {
        constructor(A) {
            super();
            this.process = A;
            let Q = this.process;
            Q.on("error", (B) => this.fireError(B)), Q.on("close", () => this.fireClose())
        }
        listen(A) {
            return this.process.on("message", A), Rq.Disposable.create(() => this.process.off("message", A))
        }
    }
    m5.IPCMessageReader = Uj2;
    class $j2 extends Rq.AbstractMessageWriter {
        constructor(A) {
            super();
            this.process = A, this.errorCount = 0;
            let Q = this.process;
            Q.on("error", (B) => this.fireError(B)), Q.on("close", () => this.fireClose)
        }
        write(A) {
            try {
                if (typeof this.process.send === "function") this.process.send(A, void 0, void 0, (Q) => {
                    if (Q) this.errorCount++, this.handleError(Q, A);
                    else this.errorCount = 0
                });
                return Promise.resolve()
            } catch (Q) {
                return this.handleError(Q, A), Promise.reject(Q)
            }
        }
        handleError(A, Q) {
            this.errorCount++, this.fireError(A, Q, this.errorCount)
        }
        end() {}
    }
    m5.IPCMessageWriter = $j2;
    class wj2 extends Rq.AbstractMessageReader {
        constructor(A) {
            super();
            this.onData = new Rq.Emitter, A.on("close", () => this.fireClose), A.on("error", (Q) => this.fireError(Q)), A.on("message", (Q) => {
                this.onData.fire(Q)
            })
        }
        listen(A) {
            return this.onData.event(A)
        }
    }
    m5.PortMessageReader = wj2;
    class qj2 extends Rq.AbstractMessageWriter {
        constructor(A) {
            super();
            this.port = A, this.errorCount = 0, A.on("close", () => this.fireClose()), A.on("error", (Q) => this.fireError(Q))
        }
        write(A) {
            try {
                return this.port.postMessage(A), Promise.resolve()
            } catch (Q) {
                return this.handleError(Q, A), Promise.reject(Q)
            }
        }
        handleError(A, Q) {
            this.errorCount++, this.fireError(A, Q, this.errorCount)
        }
        end() {}
    }
    m5.PortMessageWriter = qj2;
    class dJA extends Rq.ReadableStreamMessageReader {
        constructor(A, Q = "utf-8") {
            super((0, mJA.default)().stream.asReadableStream(A), Q)
        }
    }
    m5.SocketMessageReader = dJA;
    class cJA extends Rq.WriteableStreamMessageWriter {
        constructor(A, Q) {
            super((0, mJA.default)().stream.asWritableStream(A), Q);
            this.socket = A
        }
        dispose() {
            super.dispose(), this.socket.destroy()
        }
    }
    m5.SocketMessageWriter = cJA;
    class I60 extends Rq.ReadableStreamMessageReader {
        constructor(A, Q) {
            super((0, mJA.default)().stream.asReadableStream(A), Q)
        }
    }
    m5.StreamMessageReader = I60;
    class Y60 extends Rq.WriteableStreamMessageWriter {
        constructor(A, Q) {
            super((0, mJA.default)().stream.asWritableStream(A), Q)
        }
    }
    m5.StreamMessageWriter = Y60;
    var zj2 = process.env.XDG_RUNTIME_DIR,
        lb5 = new Map([
            ["linux", 107],
            ["darwin", 103]
        ]);

    function ib5() {
        let A = (0, pb5.randomBytes)(21).toString("hex");
        if (process.platform === "win32") return `\\\\.\\pipe\\vscode-jsonrpc-${A}-sock`;
        let Q;
        if (zj2) Q = Ej2.join(zj2, `vscode-ipc-${A}.sock`);
        else Q = Ej2.join(cb5.tmpdir(), `vscode-${A}.sock`);
        let B = lb5.get(process.platform);
        if (B !== void 0 && Q.length > B)(0, mJA.default)().console.warn(`WARNING: IPC handle "${Q}" is longer than ${B} characters.`);
        return Q
    }
    m5.generateRandomPipeName = ib5;

    function nb5(A, Q = "utf-8") {
        let B, G = new Promise((Z, I) => {
            B = Z
        });
        return new Promise((Z, I) => {
            let Y = (0, j61.createServer)((J) => {
                Y.close(), B([new dJA(J, Q), new cJA(J, Q)])
            });
            Y.on("error", I), Y.listen(A, () => {
                Y.removeListener("error", I), Z({
                    onConnected: () => {
                        return G
                    }
                })
            })
        })
    }
    m5.createClientPipeTransport = nb5;

    function ab5(A, Q = "utf-8") {
        let B = (0, j61.createConnection)(A);
        return [new dJA(B, Q), new cJA(B, Q)]
    }
    m5.createServerPipeTransport = ab5;

    function sb5(A, Q = "utf-8") {
        let B, G = new Promise((Z, I) => {
            B = Z
        });
        return new Promise((Z, I) => {
            let Y = (0, j61.createServer)((J) => {
                Y.close(), B([new dJA(J, Q), new cJA(J, Q)])
            });
            Y.on("error", I), Y.listen(A, "127.0.0.1", () => {
                Y.removeListener("error", I), Z({
                    onConnected: () => {
                        return G
                    }
                })
            })
        })
    }
    m5.createClientSocketTransport = sb5;

    function rb5(A, Q = "utf-8") {
        let B = (0, j61.createConnection)(A, "127.0.0.1");
        return [new dJA(B, Q), new cJA(B, Q)]
    }
    m5.createServerSocketTransport = rb5;

    function ob5(A) {
        let Q = A;
        return Q.read !== void 0 && Q.addListener !== void 0
    }

    function tb5(A) {
        let Q = A;
        return Q.write !== void 0 && Q.addListener !== void 0
    }

    function eb5(A, Q, B, G) {
        if (!B) B = Rq.NullLogger;
        let Z = ob5(A) ? new I60(A) : A,
            I = tb5(Q) ? new Y60(Q) : Q;
        if (Rq.ConnectionStrategy.is(G)) G = {
            connectionStrategy: G
        };
        return (0, Rq.createMessageConnection)(Z, I, B, G)
    }
    m5.createMessageConnection = eb5
});
import {
    spawn as Af5
} from "child_process";

function Lj2(A) {
    let Q, B, G, Z = !1,
        I = !1,
        Y, J = !1,
        W = [],
        X = [];

    function F() {
        if (I) throw Y || Error(`LSP server ${A} failed to start`)
    }
    return {
        get capabilities() {
            return G
        },
        get isInitialized() {
            return Z
        },
        async start(V, K, D) {
            try {
                if (Q = Af5(V, K, {
                        stdio: ["pipe", "pipe", "pipe"],
                        env: D?.env ? {
                            ...globalThis.process.env,
                            ...D.env
                        } : void 0,
                        cwd: D?.cwd
                    }), !Q.stdout || !Q.stdin) throw Error("LSP server process stdio not available");
                let H = Q;
                if (await new Promise((z, w) => {
                        let N = () => {
                                R(), z()
                            },
                            q = (P) => {
                                R(), w(P)
                            },
                            R = () => {
                                H.removeListener("spawn", N), H.removeListener("error", q)
                            };
                        H.once("spawn", N), H.once("error", q)
                    }), Q.stderr) Q.stderr.on("data", (z) => {
                    let w = z.toString().trim();
                    if (w) g(`[LSP SERVER ${A}] ${w}`)
                });
                Q.on("error", (z) => {
                    if (!J) I = !0, Y = z, e(Error(`LSP server ${A} failed to start: ${z.message}`))
                }), Q.on("exit", (z, w) => {
                    if (z !== 0 && z !== null && !J) Z = !1, I = !1, Y = void 0, e(Error(`LSP server ${A} crashed with exit code ${z}`))
                }), Q.stdin.on("error", (z) => {
                    if (!J) g(`LSP server ${A} stdin error: ${z.message}`)
                });
                let C = new Bn.StreamMessageReader(Q.stdout),
                    E = new Bn.StreamMessageWriter(Q.stdin);
                B = Bn.createMessageConnection(C, E), B.onError(([z, w, N]) => {
                    if (!J) I = !0, Y = z, e(Error(`LSP server ${A} connection error: ${z.message}`))
                }), B.onClose(() => {
                    if (!J) Z = !1, g(`LSP server ${A} connection closed`)
                }), B.listen(), B.trace(Bn.Trace.Verbose, {
                    log: (z) => {
                        g(`[LSP PROTOCOL ${A}] ${z}`)
                    }
                }).catch((z) => {
                    g(`Failed to enable tracing for ${A}: ${z.message}`)
                });
                for (let {
                        method: z,
                        handler: w
                    }
                    of W) B.onNotification(z, w), g(`Applied queued notification handler for ${A}.${z}`);
                W.length = 0;
                for (let {
                        method: z,
                        handler: w
                    }
                    of X) B.onRequest(z, w), g(`Applied queued request handler for ${A}.${z}`);
                X.length = 0, g(`LSP client started for ${A}`)
            } catch (H) {
                throw e(Error(`LSP server ${A} failed to start: ${H.message}`)), H
            }
        },
        async initialize(V) {
            if (!B) throw Error("LSP client not started");
            F();
            try {
                let K = await B.sendRequest("initialize", V);
                return G = K.capabilities, await B.sendNotification("initialized", {}), Z = !0, g(`LSP server ${A} initialized`), K
            } catch (K) {
                throw e(Error(`LSP server ${A} initialize failed: ${K.message}`)), K
            }
        },
        async sendRequest(V, K) {
            if (!B) throw Error("LSP client not started");
            if (F(), !Z) throw Error("LSP server not initialized");
            try {
                return await B.sendRequest(V, K)
            } catch (D) {
                throw e(Error(`LSP server ${A} request ${V} failed: ${D.message}`)), D
            }
        },
        async sendNotification(V, K) {
            if (!B) throw Error("LSP client not started");
            F();
            try {
                await B.sendNotification(V, K)
            } catch (D) {
                e(Error(`LSP server ${A} notification ${V} failed: ${D.message}`)), g(`Notification ${V} failed but continuing`)
            }
        },
        onNotification(V, K) {
            if (!B) {
                W.push({
                    method: V,
                    handler: K
                }), g(`Queued notification handler for ${A}.${V} (connection not ready)`);
                return
            }
            F(), B.onNotification(V, K)
        },
        onRequest(V, K) {
            if (!B) {
                X.push({
                    method: V,
                    handler: K
                }), g(`Queued request handler for ${A}.${V} (connection not ready)`);
                return
            }
            F(), B.onRequest(V, K)
        },
        async stop() {
            let V;
            J = !0;
            try {
                if (B) await B.sendRequest("shutdown", null), await B.sendNotification("exit", null)
            } catch (K) {
                let D = K;
                e(Error(`LSP server ${A} stop failed: ${D.message}`)), V = D
            } finally {
                if (B) {
                    try {
                        B.dispose()
                    } catch (K) {
                        g(`Connection disposal failed for ${A}: ${K.message}`)
                    }
                    B = void 0
                }
                if (Q) {
                    if (Q.removeAllListeners("error"), Q.removeAllListeners("exit"), Q.stdin) Q.stdin.removeAllListeners("error");
                    if (Q.stderr) Q.stderr.removeAllListeners("data");
                    try {
                        Q.kill()
                    } catch (K) {
                        g(`Process kill failed for ${A} (may already be dead): ${K.message}`)
                    }
                    Q = void 0
                }
                if (Z = !1, G = void 0, J = !1, V) I = !0, Y = V;
                g(`LSP client stopped for ${A}`)
            }
            if (V) throw V
        }
    }
}
var Bn;
var Mj2 = L(() => {
    u1();
    D0();
    Bn = GA(Nj2(), 1)
});
import * as Oj2 from "path";

function Rj2(A, Q) {
    if (Q.restartOnCrash !== void 0) throw Error(`LSP server '${A}': restartOnCrash is not yet implemented. Remove this field from the configuration.`);
    if (Q.startupTimeout !== void 0) throw Error(`LSP server '${A}': startupTimeout is not yet implemented. Remove this field from the configuration.`);
    if (Q.shutdownTimeout !== void 0) throw Error(`LSP server '${A}': shutdownTimeout is not yet implemented. Remove this field from the configuration.`);
    let B = Lj2(A),
        G = "stopped",
        Z, I, Y = 0;
    async function J() {
        if (G === "running" || G === "starting") return;
        try {
            G = "starting", g(`Starting LSP server instance: ${A}`), await B.start(Q.command, Q.args || [], {
                env: Q.env,
                cwd: Q.workspaceFolder
            });
            let C = Q.workspaceFolder || H0(),
                E = `file://${C}`,
                z = {
                    processId: process.pid,
                    workspaceFolders: [{
                        uri: E,
                        name: Oj2.basename(C)
                    }],
                    rootPath: C,
                    rootUri: E,
                    capabilities: {
                        workspace: {
                            configuration: !1,
                            workspaceFolders: !1
                        },
                        textDocument: {
                            synchronization: {
                                dynamicRegistration: !1,
                                willSave: !1,
                                willSaveWaitUntil: !1,
                                didSave: !0
                            },
                            publishDiagnostics: {
                                relatedInformation: !0,
                                tagSupport: {
                                    valueSet: [1, 2]
                                },
                                versionSupport: !1,
                                codeDescriptionSupport: !0,
                                dataSupport: !1
                            },
                            hover: {
                                dynamicRegistration: !1,
                                contentFormat: ["markdown", "plaintext"]
                            },
                            definition: {
                                dynamicRegistration: !1,
                                linkSupport: !0
                            },
                            references: {
                                dynamicRegistration: !1
                            },
                            documentSymbol: {
                                dynamicRegistration: !1,
                                hierarchicalDocumentSymbolSupport: !0
                            }
                        },
                        general: {
                            positionEncodings: ["utf-16"]
                        }
                    }
                };
            await B.initialize(z), G = "running", Z = new Date, g(`LSP server instance started: ${A}`)
        } catch (C) {
            throw G = "error", I = C, e(C), C
        }
    }
    async function W() {
        if (G === "stopped" || G === "stopping") return;
        try {
            G = "stopping", await B.stop(), G = "stopped", g(`LSP server instance stopped: ${A}`)
        } catch (C) {
            throw G = "error", I = C, e(C), C
        }
    }
    async function X() {
        try {
            await W()
        } catch (E) {
            let z = Error(`Failed to stop LSP server '${A}' during restart: ${E.message}`);
            throw e(z), z
        }
        Y++;
        let C = Q.maxRestarts ?? 3;
        if (Y > C) {
            let E = Error(`Max restart attempts (${C}) exceeded for server '${A}'`);
            throw e(E), E
        }
        try {
            await J()
        } catch (E) {
            let z = Error(`Failed to start LSP server '${A}' during restart (attempt ${Y}/${C}): ${E.message}`);
            throw e(z), z
        }
    }

    function F() {
        return G === "running" && B.isInitialized
    }
    async function V(C, E) {
        if (!F()) {
            let z = Error(`Cannot send request to LSP server '${A}': server is ${G}${I?`, last error: ${I.message}`:""}`);
            throw e(z), z
        }
        try {
            return await B.sendRequest(C, E)
        } catch (z) {
            let w = Error(`LSP request '${C}' failed for server '${A}': ${z.message}`);
            throw e(w), w
        }
    }
    async function K(C, E) {
        if (!F()) {
            let z = Error(`Cannot send notification to LSP server '${A}': server is ${G}`);
            throw e(z), z
        }
        try {
            await B.sendNotification(C, E)
        } catch (z) {
            let w = Error(`LSP notification '${C}' failed for server '${A}': ${z.message}`);
            throw e(w), w
        }
    }

    function D(C, E) {
        B.onNotification(C, E)
    }

    function H(C, E) {
        B.onRequest(C, E)
    }
    return {
        name: A,
        config: Q,
        get state() {
            return G
        },
        get startTime() {
            return Z
        },
        get lastError() {
            return I
        },
        get restartCount() {
            return Y
        },
        start: J,
        stop: W,
        restart: X,
        isHealthy: F,
        sendRequest: V,
        sendNotification: K,
        onNotification: D,
        onRequest: H
    }
}
var Tj2 = L(() => {
    Mj2();
    u1();
    D0();
    R2()
});
import {
    readFile as Pj2
} from "fs/promises";
import {
    join as Qf5,
    resolve as J60,
    relative as Bf5
} from "path";

function Gf5(A, Q) {
    let B = J60(A),
        G = J60(A, Q),
        Z = Bf5(B, G);
    if (Z.startsWith("..") || J60(Z) === Z) return null;
    return G
}
async function jj2(A, Q = []) {
    let B = {},
        G = Qf5(A.path, ".lsp.json");
    try {
        let Z = await Pj2(G, "utf-8"),
            I = JSON.parse(Z),
            Y = _.record(_.string(), H3A).safeParse(I);
        if (Y.success) Object.assign(B, Y.data);
        else {
            let J = `LSP config validation failed for .lsp.json in plugin ${A.name}: ${Y.error.message}`;
            e(Error(J)), Q.push({
                type: "lsp-config-invalid",
                plugin: A.name,
                serverName: ".lsp.json",
                validationError: Y.error.message,
                source: "plugin"
            })
        }
    } catch (Z) {
        if (Z.code !== "ENOENT") {
            let I = Z instanceof Error ? `Failed to read/parse .lsp.json in plugin ${A.name}: ${Z.message}` : `Failed to read/parse .lsp.json file in plugin ${A.name}`;
            e(Z instanceof Error ? Z : Error(I)), Q.push({
                type: "lsp-config-invalid",
                plugin: A.name,
                serverName: ".lsp.json",
                validationError: Z instanceof Error ? `Failed to parse JSON: ${Z.message}` : "Failed to parse JSON file",
                source: "plugin"
            })
        }
    }
    if (A.manifest.lspServers) {
        let Z = await Zf5(A.manifest.lspServers, A.path, A.name, Q);
        if (Z) Object.assign(B, Z)
    }
    return Object.keys(B).length > 0 ? B : void 0
}
async function Zf5(A, Q, B, G) {
    let Z = {},
        I = Array.isArray(A) ? A : [A];
    for (let Y of I)
        if (typeof Y === "string") {
            let J = Gf5(Q, Y);
            if (!J) {
                let W = `Security: Path traversal attempt blocked in plugin ${B}: ${Y}`;
                e(Error(W)), g(W, {
                    level: "warn"
                }), G.push({
                    type: "lsp-config-invalid",
                    plugin: B,
                    serverName: Y,
                    validationError: "Invalid path: must be relative and within plugin directory",
                    source: "plugin"
                });
                continue
            }
            try {
                let W = await Pj2(J, "utf-8"),
                    X = JSON.parse(W),
                    F = _.record(_.string(), H3A).safeParse(X);
                if (F.success) Object.assign(Z, F.data);
                else {
                    let V = `LSP config validation failed for ${Y} in plugin ${B}: ${F.error.message}`;
                    e(Error(V)), G.push({
                        type: "lsp-config-invalid",
                        plugin: B,
                        serverName: Y,
                        validationError: F.error.message,
                        source: "plugin"
                    })
                }
            } catch (W) {
                let X = W instanceof Error ? `Failed to read/parse LSP config from ${Y} in plugin ${B}: ${W.message}` : `Failed to read/parse LSP config file ${Y} in plugin ${B}`;
                e(W instanceof Error ? W : Error(X)), G.push({
                    type: "lsp-config-invalid",
                    plugin: B,
                    serverName: Y,
                    validationError: W instanceof Error ? `Failed to parse JSON: ${W.message}` : "Failed to parse JSON file",
                    source: "plugin"
                })
            }
        } else
            for (let [J, W] of Object.entries(Y)) {
                let X = H3A.safeParse(W);
                if (X.success) Z[J] = X.data;
                else {
                    let F = `LSP config validation failed for inline server "${J}" in plugin ${B}: ${X.error.message}`;
                    e(Error(F)), G.push({
                        type: "lsp-config-invalid",
                        plugin: B,
                        serverName: J,
                        validationError: X.error.message,
                        source: "plugin"
                    })
                }
            }
    return Object.keys(Z).length > 0 ? Z : void 0
}

function Sj2(A, Q) {
    let B = {};
    for (let [G, Z] of Object.entries(A)) {
        let I = `plugin:${Q}:${G}`;
        B[I] = {
            ...Z,
            scope: "dynamic",
            source: Q
        }
    }
    return B
}
var _j2 = L(() => {
    ho();
    h2();
    D0();
    u1()
});
async function kj2() {
    let A = {};
    try {
        let {
            enabled: Q
        } = await y7();
        for (let B of Q) {
            let G = [],
                Z = await jj2(B, G);
            if (Z && Object.keys(Z).length > 0) {
                let I = Sj2(Z, B.name);
                Object.assign(A, I), g(`Loaded ${Object.keys(Z).length} LSP server(s) from plugin: ${B.name}`)
            }
            if (G.length > 0) g(`${G.length} error(s) loading LSP servers from plugin: ${B.name}`)
        }
        g(`Total LSP servers loaded: ${Object.keys(A).length}`)
    } catch (Q) {
        e(Q instanceof Error ? Q : Error(`Failed to load LSP servers: ${String(Q)}`)), g(`Error loading LSP servers: ${Q instanceof Error?Q.message:String(Q)}`)
    }
    return {
        servers: A
    }
}
var yj2 = L(() => {
    NF();
    _j2();
    D0();
    u1()
});
import * as Gn from "path";

function xj2() {
    let A = new Map,
        Q = new Map,
        B = new Map;
    async function G() {
        g("[LSP SERVER MANAGER] initialize() called");
        let D;
        try {
            g("[LSP SERVER MANAGER] Calling getAllLspServers()"), D = (await kj2()).servers, g(`[LSP SERVER MANAGER] getAllLspServers returned ${Object.keys(D).length} server(s)`)
        } catch (H) {
            throw e(Error(`Failed to load LSP server configuration: ${H.message}`)), H
        }
        for (let [H, C] of Object.entries(D)) try {
            if (!C.command) throw Error(`Server ${H} missing required 'command' field`);
            if (!C.extensionToLanguage || Object.keys(C.extensionToLanguage).length === 0) throw Error(`Server ${H} missing required 'extensionToLanguage' field`);
            let E = Object.keys(C.extensionToLanguage);
            for (let w of E) {
                let N = w.toLowerCase();
                if (!Q.has(N)) Q.set(N, []);
                let q = Q.get(N);
                if (q) q.push(H)
            }
            let z = Rj2(H, C);
            A.set(H, z), z.onRequest("workspace/configuration", (w) => {
                return g(`LSP: Received workspace/configuration request from ${H}`), w.items.map(() => null)
            }), z.start().catch((w) => {
                e(Error(`Failed to start LSP server ${H}: ${w.message}`))
            })
        } catch (E) {
            e(Error(`Failed to initialize LSP server ${H}: ${E.message}`))
        }
        g(`LSP manager initialized with ${A.size} servers`)
    }
    async function Z() {
        let D = [];
        for (let [H, C] of A.entries())
            if (C.state === "running") try {
                await C.stop()
            } catch (E) {
                let z = E;
                e(Error(`Failed to stop LSP server ${H}: ${z.message}`)), D.push(z)
            }
        if (A.clear(), Q.clear(), B.clear(), D.length > 0) {
            let H = Error(`Failed to stop ${D.length} LSP server(s): ${D.map((C)=>C.message).join("; ")}`);
            throw e(H), H
        }
    }

    function I(D) {
        let H = Gn.extname(D).toLowerCase(),
            C = Q.get(H);
        if (!C || C.length === 0) return;
        let E = C[0];
        if (!E) return;
        return A.get(E)
    }
    async function Y(D) {
        let H = I(D);
        if (!H) return;
        if (H.state === "stopped") try {
            await H.start()
        } catch (C) {
            throw e(Error(`Failed to start LSP server for file ${D}: ${C.message}`)), C
        }
        return H
    }
    async function J(D, H, C) {
        let E = await Y(D);
        if (!E) return;
        try {
            return await E.sendRequest(H, C)
        } catch (z) {
            throw e(Error(`LSP request failed for file ${D}, method '${H}': ${z.message}`)), z
        }
    }

    function W() {
        return A
    }
    async function X(D, H) {
        let C = await Y(D);
        if (!C) return;
        let E = `file://${Gn.resolve(D)}`;
        if (B.get(E) === C.name) {
            g(`LSP: File already open, skipping didOpen for ${D}`);
            return
        }
        let z = Gn.extname(D).toLowerCase(),
            w = C.config.extensionToLanguage[z] || "plaintext";
        try {
            await C.sendNotification("textDocument/didOpen", {
                textDocument: {
                    uri: E,
                    languageId: w,
                    version: 1,
                    text: H
                }
            }), B.set(E, C.name), g(`LSP: Sent didOpen for ${D} (languageId: ${w})`)
        } catch (N) {
            let q = Error(`Failed to sync file open ${D}: ${N.message}`);
            throw e(q), q
        }
    }
    async function F(D, H) {
        let C = I(D);
        if (!C || C.state !== "running") return X(D, H);
        let E = `file://${Gn.resolve(D)}`;
        if (B.get(E) !== C.name) return X(D, H);
        try {
            await C.sendNotification("textDocument/didChange", {
                textDocument: {
                    uri: E,
                    version: 1
                },
                contentChanges: [{
                    text: H
                }]
            }), g(`LSP: Sent didChange for ${D}`)
        } catch (z) {
            let w = Error(`Failed to sync file change ${D}: ${z.message}`);
            throw e(w), w
        }
    }
    async function V(D) {
        let H = I(D);
        if (!H || H.state !== "running") return;
        try {
            await H.sendNotification("textDocument/didSave", {
                textDocument: {
                    uri: `file://${Gn.resolve(D)}`
                }
            }), g(`LSP: Sent didSave for ${D}`)
        } catch (C) {
            let E = Error(`Failed to sync file save ${D}: ${C.message}`);
            throw e(E), E
        }
    }
    async function K(D) {
        let H = I(D);
        if (!H || H.state !== "running") return;
        let C = `file://${Gn.resolve(D)}`;
        try {
            await H.sendNotification("textDocument/didClose", {
                textDocument: {
                    uri: C
                }
            }), B.delete(C), g(`LSP: Sent didClose for ${D}`)
        } catch (E) {
            let z = Error(`Failed to sync file close ${D}: ${E.message}`);
            throw e(z), z
        }
    }
    return {
        initialize: G,
        shutdown: Z,
        getServerForFile: I,
        ensureServerStarted: Y,
        sendRequest: J,
        getAllServers: W,
        openFile: X,
        changeFile: F,
        saveFile: V,
        closeFile: K
    }
}
var vj2 = L(() => {
    Tj2();
    yj2();
    D0();
    u1()
});
import {
    fileURLToPath as If5
} from "url";

function Yf5(A) {
    switch (A) {
        case 1:
            return "Error";
        case 2:
            return "Warning";
        case 3:
            return "Info";
        case 4:
            return "Hint";
        default:
            return "Error"
    }
}

function Jf5(A) {
    let Q;
    try {
        Q = A.uri.startsWith("file://") ? If5(A.uri) : A.uri
    } catch (G) {
        let Z = G instanceof Error ? G : Error(String(G));
        e(Z), g(`Failed to convert URI to file path: ${A.uri}. Error: ${Z.message}. Using original URI as fallback.`), Q = A.uri
    }
    let B = A.diagnostics.map((G) => ({
        message: G.message,
        severity: Yf5(G.severity),
        range: {
            start: {
                line: G.range.start.line,
                character: G.range.start.character
            },
            end: {
                line: G.range.end.line,
                character: G.range.end.character
            }
        },
        source: G.source,
        code: G.code !== void 0 && G.code !== null ? String(G.code) : void 0
    }));
    return [{
        uri: Q,
        diagnostics: B
    }]
}

function bj2(A) {
    let Q = A.getAllServers(),
        B = [],
        G = 0,
        Z = new Map;
    for (let [Y, J] of Q.entries()) try {
        if (!J || typeof J.onNotification !== "function") {
            let W = !J ? "Server instance is null/undefined" : "Server instance has no onNotification method";
            B.push({
                serverName: Y,
                error: W
            });
            let X = Error(`${W} for ${Y}`);
            e(X), g(`Skipping handler registration for ${Y}: ${W}`);
            continue
        }
        J.onNotification("textDocument/publishDiagnostics", async (W) => {
            g(`[PASSIVE DIAGNOSTICS] Handler invoked for ${Y}! Params type: ${typeof W}`);
            try {
                if (!W || typeof W !== "object" || !("uri" in W) || !("diagnostics" in W)) {
                    let K = Error(`LSP server ${Y} sent invalid diagnostic params (missing uri or diagnostics)`);
                    e(K), g(`Invalid diagnostic params from ${Y}: ${JSON.stringify(W)}`);
                    return
                }
                let X = W;
                g(`Received diagnostics from ${Y}: ${X.diagnostics.length} diagnostic(s) for ${X.uri}`);
                let F = Jf5(X),
                    V = F[0];
                if (!V || F.length === 0 || V.diagnostics.length === 0) {
                    g(`Skipping empty diagnostics from ${Y} for ${X.uri}`);
                    return
                }
                try {
                    TZ2({
                        serverName: Y,
                        files: F
                    }), g(`LSP Diagnostics: Registered ${F.length} diagnostic file(s) from ${Y} for async delivery`), Z.delete(Y)
                } catch (K) {
                    let D = K instanceof Error ? K : Error(`Failed to register LSP diagnostics: ${String(K)}`);
                    e(D), g(`Error registering LSP diagnostics from ${Y}: URI: ${X.uri}, Diagnostic count: ${V.diagnostics.length}, Error: ${D.message}`);
                    let H = Z.get(Y) || {
                        count: 0,
                        lastError: ""
                    };
                    if (H.count++, H.lastError = D.message, Z.set(Y, H), H.count >= 3) g(`WARNING: LSP diagnostic handler for ${Y} has failed ${H.count} times consecutively. Last error: ${H.lastError}. This may indicate a problem with the LSP server or diagnostic processing. Check logs for details.`)
                }
            } catch (X) {
                let F = X instanceof Error ? X : Error(`Unexpected error in diagnostic handler: ${String(X)}`);
                e(F), g(`Unexpected error processing diagnostics from ${Y}: ${F.message}`);
                let V = Z.get(Y) || {
                    count: 0,
                    lastError: ""
                };
                if (V.count++, V.lastError = F.message, Z.set(Y, V), V.count >= 3) g(`WARNING: LSP diagnostic handler for ${Y} has failed ${V.count} times consecutively. Last error: ${V.lastError}. This may indicate a problem with the LSP server or diagnostic processing. Check logs for details.`)
            }
        }), g(`Registered diagnostics handler for ${Y}`), G++
    } catch (W) {
        let X = W instanceof Error ? W : Error(`Handler registration failed: ${String(W)}`);
        B.push({
            serverName: Y,
            error: X.message
        }), e(X), g(`Failed to register diagnostics handler for ${Y}: Error: ${X.message}`)
    }
    let I = Q.size;
    if (B.length > 0) {
        let Y = B.map((J) => `${J.serverName} (${J.error})`).join(", ");
        e(Error(`Failed to register diagnostics for ${B.length} LSP server(s): ${Y}`)), g(`LSP notification handler registration: ${G}/${I} succeeded. Failed servers: ${Y}. Diagnostics from failed servers will not be delivered.`)
    } else g(`LSP notification handlers registered successfully for all ${I} server(s)`);
    return {
        totalServers: I,
        successCount: G,
        registrationErrors: B,
        diagnosticFailures: Z
    }
}
var fj2 = L(() => {
    NMA();
    D0();
    u1()
});

function pJA() {
    if (F0A === "failed") return;
    return wP
}

function hj2() {
    if (g("[LSP MANAGER] initializeLspServerManager() called"), wP !== void 0 && F0A !== "failed") {
        g("[LSP MANAGER] Already initialized or initializing, skipping");
        return
    }
    if (F0A === "failed") wP = void 0, W60 = void 0;
    wP = xj2(), F0A = "pending", g("[LSP MANAGER] Created manager instance, state=pending");
    let A = ++S61;
    g(`[LSP MANAGER] Starting async initialization (generation ${A})`), wP.initialize().then(() => {
        if (A === S61) {
            if (F0A = "success", g("LSP server manager initialized successfully"), wP) bj2(wP)
        }
    }).catch((Q) => {
        if (A === S61) F0A = "failed", W60 = Q, wP = void 0, e(Q), g(`Failed to initialize LSP server manager: ${Q instanceof Error?Q.message:String(Q)}`)
    })
}
async function gj2() {
    if (wP === void 0) return;
    try {
        await wP.shutdown(), g("LSP server manager shut down successfully")
    } catch (A) {
        e(A), g(`Failed to shutdown LSP server manager: ${A instanceof Error?A.message:String(A)}`)
    } finally {
        wP = void 0, F0A = "not-started", W60 = void 0, S61++
    }
}
var wP, F0A = "not-started",
    W60, S61 = 0;
var LRA = L(() => {
    vj2();
    fj2();
    D0();
    u1()
});
var uj2, X60, mj2;
var F60 = L(() => {
    h2();
    uj2 = _.strictObject({
        file_path: _.string().describe("The absolute path to the file to modify"),
        old_string: _.string().describe("The text to replace"),
        new_string: _.string().describe("The text to replace it with (must be different from old_string)"),
        replace_all: _.boolean().default(!1).optional().describe("Replace all occurences of old_string (default false)")
    }), X60 = _.object({
        oldStart: _.number(),
        oldLines: _.number(),
        newStart: _.number(),
        newLines: _.number(),
        lines: _.array(_.string())
    }), mj2 = _.object({
        filePath: _.string().describe("The file path that was edited"),
        oldString: _.string().describe("The original string that was replaced"),
        newString: _.string().describe("The new string that replaced it"),
        originalFile: _.string().describe("The original file contents before editing"),
        structuredPatch: _.array(X60).describe("Diff patch showing the changes"),
        userModified: _.boolean().describe("Whether the user modified the proposed changes"),
        replaceAll: _.boolean().describe("Whether all occurrences were replaced")
    })
});

function cj2({
    patch: A,
    dim: Q,
    width: B
}) {
    let [G] = $B(), Z = dj2.useMemo(() => Df5(A.lines, A.oldStart, B, Q, G), [A.lines, A.oldStart, B, Q, G]);
    return D6.createElement(j, {
        flexDirection: "column",
        flexGrow: 1
    }, Z.map((I, Y) => D6.createElement(j, {
        key: Y
    }, I)))
}

function Xf5(A) {
    return A.map((Q) => {
        if (Q.startsWith("+")) return {
            code: " " + Q.slice(1),
            i: 0,
            type: "add",
            originalCode: Q.slice(1)
        };
        if (Q.startsWith("-")) return {
            code: " " + Q.slice(1),
            i: 0,
            type: "remove",
            originalCode: Q.slice(1)
        };
        return {
            code: Q,
            i: 0,
            type: "nochange",
            originalCode: Q
        }
    })
}

function Ff5(A) {
    let Q = [],
        B = 0;
    while (B < A.length) {
        let G = A[B];
        if (!G) {
            B++;
            continue
        }
        if (G.type === "remove") {
            let Z = [G],
                I = B + 1;
            while (I < A.length && A[I]?.type === "remove") {
                let J = A[I];
                if (J) Z.push(J);
                I++
            }
            let Y = [];
            while (I < A.length && A[I]?.type === "add") {
                let J = A[I];
                if (J) Y.push(J);
                I++
            }
            if (Z.length > 0 && Y.length > 0) {
                let J = Math.min(Z.length, Y.length);
                for (let W = 0; W < J; W++) {
                    let X = Z[W],
                        F = Y[W];
                    if (X && F) X.wordDiff = !0, F.wordDiff = !0, X.matchedLine = F, F.matchedLine = X
                }