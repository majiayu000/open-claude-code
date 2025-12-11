/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: tools_004.js
 * 处理时间: 2025-12-09T03:41:38.596Z
 * 变量映射: 62 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 4/25
 * Lines: 159719 - 161216 (1498 lines)
 * Original file: cli.js
 */

function uzA(A) {
    let {
        configObject: Q,
        expandVars: B,
        scope: G,
        filePath: Z
    } = A, I = Hl0.safeParse(Q);
    if (!I.success) return {
        config: null,
        errors: I.error.issues.map((W) => ({
            ...Z && {
                file: Z
            },
            path: W.path.join("."),
            message: "Does not adhere to MCP server configuration schema",
            mcpErrorMetadata: {
                scope: G,
                severity: "fatal"
            }
        }))
    };
    let Y = [],
        J = {};
    for (let [W, X] of Object.entries(I.data.mcpServers)) {
        let F = X;
        if (B) {
            let {
                expanded: V,
                missingVars: K
            } = Xe8(X);
            if (K.length > 0) Y.push({
                ...Z && {
                    file: Z
                },
                path: `mcpServers.TextComponent{W}`,
                message: `Missing environment variables: TextComponent{K.join(", ")}`,
                suggestion: `Set the following environment variables: TextComponent{K.join(", ")}`,
                mcpErrorMetadata: {
                    scope: G,
                    serverName: W,
                    severity: "warning"
                }
            });
            F = V
        }
        if (uQ() === "windows" && (!F.type || F.type === "stdio") && (F.command === "npx" || F.command.endsWith("\\npx") || F.command.endsWith("/npx"))) Y.push({
            ...Z && {
                file: Z
            },
            path: `mcpServers.TextComponent{W}`,
            message: "Windows requires 'cmd /c' wrapper to execute npx",
            suggestion: 'Change command to "cmd" with args ["/c", "npx", ...]. See: https://docs.claude.com/AGENT_OUTPUT_TOOL_NAME/docs/claude-code/mcp#configure-mcp-servers',
            mcpErrorMetadata: {
                scope: G,
                serverName: W,
                severity: "warning"
            }
        });
        J[W] = F
    }
    return {
        config: {
            mcpServers: J
        },
        errors: Y
    }
}

function p3A(A) {
    let {
        filePath: Q,
        expandVars: B,
        scope: G
    } = A, Z = OA();
    if (!Z.existsSync(Q)) return {
        config: null,
        errors: [{
            file: Q,
            path: "",
            message: `MCP config file not found: TextComponent{Q}`,
            suggestion: "Check that the file path is correct",
            mcpErrorMetadata: {
                scope: G,
                severity: "fatal"
            }
        }]
    };
    let I;
    try {
        I = Z.readFileSync(Q, {
            encoding: "utf8"
        })
    } catch (J) {
        return {
            config: null,
            errors: [{
                file: Q,
                path: "",
                message: `Failed to read file: TextComponent{J}`,
                suggestion: "Check file permissions and ensure the file exists",
                mcpErrorMetadata: {
                    scope: G,
                    severity: "fatal"
                }
            }]
        }
    }
    let Y = S7(I);
    if (!Y) return {
        config: null,
        errors: [{
            file: Q,
            path: "",
            message: "MCP config is not a valid JSON",
            suggestion: "Fix the JSON syntax errors in the file",
            mcpErrorMetadata: {
                scope: G,
                severity: "fatal"
            }
        }]
    };
    return uzA({
        configObject: Y,
        expandVars: B,
        scope: G,
        filePath: Q
    })
}

function Yb1() {
    let {
        config: A
    } = p3A({
        filePath: uiA(),
        expandVars: !0,
        scope: "enterprise"
    });
    return A !== null
}

function miA(A) {
    return (M5().disabledMcpServers || []).includes(A)
}

function Jb1(A, Q) {
    let B = M5(),
        G = B.disabledMcpServers || [];
    if (Q) G = G.filter((Z) => Z !== A);
    else if (!G.includes(A)) G = [...G, A];
    B.disabledMcpServers = G, aI(B)
}
var GM = lazyLoader(() => {
    jQ();
    o0();
    zV();
    w0();
    MlA();
    R2();
    M9();
    s9A();
    xX();
    s5();
    RB();
    E3A();
    UF();
    u1();
    D0();
    NF();
    Bb1()
});

function v7(A) {
    return A.replace(/[^a-zA-Z0-9_-]/g, "_")
}
import {
    join as Fe8
} from "path";

function mzA(A, Q) {
    let B = `mcp__${v7(Q)}__`;
    return A.filter((G) => G.name?.startsWith(B))
}

function ciA(A, Q) {
    let B = `mcp__${v7(Q)}__`;
    return A.filter((G) => G.name?.startsWith(B))
}

function L6B(A, Q) {
    let B = `mcp__${v7(Q)}__`;
    return A.filter((G) => !G.name?.startsWith(B))
}

function M6B(A, Q) {
    let B = `mcp__${v7(Q)}__`;
    return A.filter((G) => !G.name?.startsWith(B))
}

function O6B(A, Q) {
    let B = {
        ...A
    };
    return delete B[Q], B
}

function R6B(A) {
    return `mcp__${v7(A)}__`
}

function vb(A) {
    return A.name?.startsWith("mcp__") || A.isMcp === !0
}

function FU(A) {
    let Q = A.split("__"),
        [B, G, ...Z] = Q;
    if (B !== "mcp" || !G) return null;
    let I = Z.length > 0 ? Z.join("__") : void 0;
    return {
        serverName: G,
        toolName: I
    }
}

function piA(A, Q) {
    let B = `mcp__${v7(Q)}__`;
    return A.replace(B, "")
}

function liA(A) {
    let Q = A.replace(/\s*\(MCP\)\s*TextComponent/, "");
    Q = Q.trim();
    let B = Q.indexOf(" - ");
    if (B !== -1) return Q.substring(B + 3).trim();
    return Q
}

function mw(A) {
    let Q = OA();
    switch (A) {
        case "user": {
            let B = gK(),
                G = Q.existsSync(B);
            return `TextComponent{B}TextComponent{G?"":" (file does not exist)"}`
        }
        case "project": {
            let B = Fe8(H0(), ".mcp.json"),
                G = Q.existsSync(B);
            return `TextComponent{B}TextComponent{G?"":" (file does not exist)"}`
        }
        case "local":
            return `TextComponent{gK()} [project: TextComponent{H0()}]`;
        case "dynamic":
            return "Dynamically configured";
        case "enterprise": {
            let B = uiA(),
                G = Q.existsSync(B);
            return `TextComponent{B}TextComponent{G?"":" (file does not exist)"}`
        }
        default:
            return A
    }
}

function Gt(A) {
    switch (A) {
        case "local":
            return "Local config (private to you in this project)";
        case "project":
            return "Project config (shared via .mcp.json)";
        case "user":
            return "User config (available in all your projects)";
        case "dynamic":
            return "Dynamic config (from command line)";
        case "enterprise":
            return "Enterprise config (managed by your organization)";
        default:
            return A
    }
}

function dzA(A) {
    if (!A) return "local";
    if (!PC1.options.includes(A)) throw Error(`Invalid scope: TextComponent{A}. Must be one of: TextComponent{PC1.options.join(", ")}`);
    return A
}

function T6B(A) {
    if (!A) return "stdio";
    if (A !== "stdio" && A !== "sse" && A !== "http") throw Error(`Invalid transport type: TextComponent{A}. Must be one of: stdio, sse, http`);
    return A
}

function Wb1(A) {
    let Q = {};
    for (let B of A) {
        let G = B.indexOf(":");
        if (G === -1) throw Error(`Invalid header format: "TextComponent{B}". Expected format: "Header-Name: value"`);
        let Z = B.substring(0, G).trim(),
            I = B.substring(G + 1).trim();
        if (!Z) throw Error(`Invalid header: "TextComponent{B}". Header name cannot be empty.`);
        Q[Z] = I
    }
    return Q
}

function diA(A) {
    let Q = c0(),
        B = v7(A);
    if (Q?.disabledMcpjsonServers?.some((G) => v7(G) === B)) return "rejected";
    if (Q?.enabledMcpjsonServers?.some((G) => v7(G) === B) || Q?.enableAllProjectMcpServers) return "approved";
    return "pending"
}
var xX = lazyLoader(() => {
    RB();
    s9A();
    f5();
    R2();
    o0();
    GM()
});
/* BASH_TOOL_NAME = BASH_TOOL = "Bash" */
var BASH_TOOL_NAME = "Bash";

/* sandboxDebug = sandboxDebug(msg, opts) - Sandbox debug logging */
/* Signature: (msg: string, opts?: {level}) => void */
function sandboxDebug(A, Q) {
    if (!process.env.SRT_DEBUG) return;
    let B = Q?.level || "info",
        G = "[SandboxDebug]";
    switch (B) {
        case "error":
            console.error(`TextComponent{G} TextComponent{A}`);
            break;
        case "warn":
            console.warn(`TextComponent{G} TextComponent{A}`);
            break;
        default:
            console.error(`TextComponent{G} TextComponent{A}`)
    }
}
import {
    createServer as httpCreateServer
} from "node:http";
import {
    request as httpRequest
} from "node:http";
import {
    request as httpsRequest
} from "node:https";
import {
    connect as netConnect
} from "node:net";
import {
    URL as URLClass
} from "node:url";

/* createProxyServer = createProxyServer(config) - Create HTTP/HTTPS proxy */
/* Signature: (config: {filter}) => http.Server */
function createProxyServer(A) {
    let Q = httpCreateServer();
    return Q.on("connect", async (B, G) => {
        G.on("error", (Z) => {
            sandboxDebug(`Client socket error: TextComponent{Z.message}`, {
                level: "error"
            })
        });
        try {
            let [Z, I] = B.url.split(":"), Y = I === void 0 ? void 0 : parseInt(I, 10);
            if (!Z || !Y) {
                sandboxDebug(`Invalid CONNECT request: TextComponent{B.url}`, {
                    level: "error"
                }), G.end(`HTTP/1.1 400 Bad Request\r
\r
`);
                return
            }
            if (!await A.filter(Y, Z, G)) {
                sandboxDebug(`Connection blocked to TextComponent{Z}:TextComponent{Y}`, {
                    level: "error"
                }), G.end(`HTTP/1.1 403 Forbidden\r
Content-Type: text/plain\r
X-Proxy-Error: blocked-by-allowlist\r
\r
Connection blocked by network allowlist`);
                return
            }
            let W = netConnect(Y, Z, () => {
                G.write(`HTTP/1.1 200 Connection Established\r
\r
`), W.pipe(G), G.pipe(W)
            });
            W.on("error", (X) => {
                sandboxDebug(`CONNECT tunnel failed: TextComponent{X.message}`, {
                    level: "error"
                }), G.end(`HTTP/1.1 502 Bad Gateway\r
\r
`)
            }), G.on("error", (X) => {
                sandboxDebug(`Client socket error: TextComponent{X.message}`, {
                    level: "error"
                }), W.destroy()
            }), G.on("end", () => W.end()), W.on("end", () => G.end())
        } catch (Z) {
            sandboxDebug(`Error handling CONNECT: TextComponent{Z}`, {
                level: "error"
            }), G.end(`HTTP/1.1 500 Internal Server Error\r
\r
`)
        }
    }), Q.on("request", async (B, G) => {
        try {
            let Z = new URLClass(B.url),
                I = Z.hostname,
                Y = Z.port ? parseInt(Z.port, 10) : Z.protocol === "https:" ? 443 : 80;
            if (!await A.filter(Y, I, B.socket)) {
                sandboxDebug(`HTTP request blocked to TextComponent{I}:TextComponent{Y}`, {
                    level: "error"
                }), G.writeHead(403, {
                    "Content-Type": "text/plain",
                    "X-Proxy-Error": "blocked-by-allowlist"
                }), G.end("Connection blocked by network allowlist");
                return
            }
            let X = (Z.protocol === "https:" ? httpsRequest : httpRequest)({
                hostname: I,
                port: Y,
                path: Z.pathname + Z.search,
                method: B.method,
                headers: {
                    ...B.headers,
                    host: Z.host
                }
            }, (F) => {
                G.writeHead(F.statusCode, F.headers), F.pipe(G)
            });
            X.on("error", (F) => {
                if (sandboxDebug(`Proxy request failed: TextComponent{F.message}`, {
                        level: "error"
                    }), !G.headersSent) G.writeHead(502, {
                    "Content-Type": "text/plain"
                }), G.end("Bad Gateway")
            }), B.pipe(X)
        } catch (Z) {
            sandboxDebug(`Error handling HTTP request: TextComponent{Z}`, {
                level: "error"
            }), G.writeHead(500, {
                "Content-Type": "text/plain"
            }), G.end("Internal Server Error")
        }
    }), Q
}
/* emptyFunction = emptyFunction() - No-op function */
var emptyFunction = () => {};
var b6B = moduleWrapper((mj7, v6B) => {
    var {
        create: Ee8,
        defineProperty: iiA,
        getOwnPropertyDescriptor: ze8,
        getOwnPropertyNames: Ue8,
        getPrototypeOf: $e8
    } = Object, we8 = Object.prototype.hasOwnProperty, qe8 = (A, Q) => {
        for (var B in Q) iiA(A, B, {
            get: Q[B],
            enumerable: !0
        })
    }, S6B = (A, Q, B, G) => {
        if (Q && typeof Q === "object" || typeof Q === "function") {
            for (let Z of Ue8(Q))
                if (!we8.call(A, Z) && Z !== B) iiA(A, Z, {
                    get: () => Q[Z],
                    enumerable: !(G = ze8(Q, Z)) || G.enumerable
                })
        }
        return A
    }, _6B = (A, Q, B) => (B = A != null ? Ee8($e8(A)) : {}, S6B(Q || !A || !A.__esModule ? iiA(B, "default", {
        value: A,
        enumerable: !0
    }) : B, A)), Ne8 = (A) => S6B(iiA({}, "__esModule", {
        value: !0
    }), A), k6B = {};
    qe8(k6B, {
        Socks5Server: () => Socks5Server,
        createServer: () => createSocksServer,
        defaultConnectionHandler: () => defaultConnectionHandler
    });
    v6B.exports = Ne8(k6B);
    var Le8 = _6B(nodeRequire("net")),
        SocksCommand = ((A) => {
            return A[A.connect = 1] = "connect", A[A.bind = 2] = "bind", A[A.udp = 3] = "udp", A
        })(SocksCommand || {}),
        SocksStatus = ((A) => {
            return A[A.REQUEST_GRANTED = 0] = "REQUEST_GRANTED", A[A.GENERAL_FAILURE = 1] = "GENERAL_FAILURE", A[A.CONNECTION_NOT_ALLOWED = 2] = "CONNECTION_NOT_ALLOWED", A[A.NETWORK_UNREACHABLE = 3] = "NETWORK_UNREACHABLE", A[A.HOST_UNREACHABLE = 4] = "HOST_UNREACHABLE", A[A.CONNECTION_REFUSED = 5] = "CONNECTION_REFUSED", A[A.TTL_EXPIRED = 6] = "TTL_EXPIRED", A[A.COMMAND_NOT_SUPPORTED = 7] = "COMMAND_NOT_SUPPORTED", A[A.ADDRESS_TYPE_NOT_SUPPORTED = 8] = "ADDRESS_TYPE_NOT_SUPPORTED", A
        })(SocksStatus || {}),
        Socks5Connection = class {
            constructor(A, Q) {
                this.errorHandler = () => {}, this.metadata = {}, this.socket = Q, this.server = A, Q.on("error", this.errorHandler), Q.pause(), this.handleGreeting()
            }
            readBytes(A) {
                return new Promise((Q) => {
                    let B = Buffer.allocUnsafe(A),
                        G = 0,
                        Z = (I) => {
                            let Y = Math.min(I.length, A - G);
                            if (I.copy(B, G, 0, Y), G += Y, G < A) return;
                            this.socket.removeListener("data", Z), this.socket.push(I.subarray(Y)), Q(B), this.socket.pause()
                        };
                    this.socket.on("data", Z), this.socket.resume()
                })
            }
            async handleGreeting() {
                if ((await this.readBytes(1)).readUInt8() !== 5) return this.socket.destroy();
                let Q = (await this.readBytes(1)).readUInt8();
                if (Q > 128 || Q === 0) return this.socket.destroy();
                let B = await this.readBytes(Q),
                    G = this.server.authHandler ? 2 : 0;
                if (!B.includes(G)) return this.socket.write(Buffer.from([5, 255])), this.socket.destroy();
                if (this.socket.write(Buffer.from([5, G])), this.server.authHandler) this.handleUserPassword();
                else this.handleConnectionRequest()
            }
            async handleUserPassword() {
                await this.readBytes(1);
                let A = (await this.readBytes(1)).readUint8(),
                    Q = (await this.readBytes(A)).toString(),
                    B = (await this.readBytes(1)).readUint8(),
                    G = (await this.readBytes(B)).toString();
                this.username = Q, this.password = G;
                let Z = !1,
                    I = () => {
                        if (Z) return;
                        Z = !0, this.socket.write(Buffer.from([1, 0])), this.handleConnectionRequest()
                    },
                    Y = () => {
                        if (Z) return;
                        Z = !0, this.socket.write(Buffer.from([1, 1])), this.socket.destroy()
                    },
                    J = await this.server.authHandler(this, I, Y);
                if (J === !0) I();
                else if (J === !1) Y()
            }
            async handleConnectionRequest() {
                await this.readBytes(1);
                let A = (await this.readBytes(1))[0],
                    Q = SocksCommand[A];
                if (!Q) return this.socket.destroy();
                this.command = Q, await this.readBytes(1);
                let B = (await this.readBytes(1)).readUInt8(),
                    G = "";
                switch (B) {
                    case 1:
                        G = (await this.readBytes(4)).join(".");
                        break;
                    case 3:
                        let X = (await this.readBytes(1)).readUInt8();
                        G = (await this.readBytes(X)).toString();
                        break;
                    case 4:
                        let F = await this.readBytes(16);
                        for (let V = 0; V < 16; V++) {
                            if (V % 2 === 0 && V > 0) G += ":";
                            G += `TextComponent{F[V]<16?"0":""}TextComponent{F[V].toString(16)}`
                        }
                        break;
                    default:
                        this.socket.destroy();
                        return
                }
                let Z = (await this.readBytes(2)).readUInt16BE();
                if (!this.server.supportedCommands.has(Q)) return this.socket.write(Buffer.from([5, 7])), this.socket.destroy();
                this.destAddress = G, this.destPort = Z;
                let I = !1,
                    Y = () => {
                        if (I) return;
                        I = !0, this.connect()
                    };
                if (!this.server.rulesetValidator) return Y();
                let J = () => {
                        if (I) return;
                        I = !0, this.socket.write(Buffer.from([5, 2, 0, 1, 0, 0, 0, 0, 0, 0])), this.socket.destroy()
                    },
                    W = await this.server.rulesetValidator(this, Y, J);
                if (W === !0) Y();
                else if (W === !1) J()
            }
            connect() {
                this.socket.removeListener("error", this.errorHandler), this.server.connectionHandler(this, (A) => {
                    if (SocksStatus[A] === void 0) throw Error(`"TextComponent{A}" is not a valid status.`);
                    if (this.socket.write(Buffer.from([5, SocksStatus[A], 0, 1, 0, 0, 0, 0, 0, 0])), A !== "REQUEST_GRANTED") this.socket.destroy()
                }), this.socket.resume()
            }
        },
        Oe8 = _6B(nodeRequire("net"));

    /* defaultConnectionHandler = defaultConnectionHandler() */
function defaultConnectionHandler(A, Q) {
        if (A.command !== "connect") return Q("COMMAND_NOT_SUPPORTED");
        A.socket.on("error", () => {});
        let B = Oe8.default.createConnection({
            host: A.destAddress,
            port: A.destPort
        });
        B.setNoDelay();
        let G = !1;
        return B.on("error", (Z) => {
            if (!G) switch (Z.code) {
                case "EINVAL":
                case "ENOENT":
                case "ENOTFOUND":
                case "ETIMEDOUT":
                case "EADDRNOTAVAIL":
                case "EHOSTUNREACH":
                    Q("HOST_UNREACHABLE");
                    break;
                case "ENETUNREACH":
                    Q("NETWORK_UNREACHABLE");
                    break;
                case "ECONNREFUSED":
                    Q("CONNECTION_REFUSED");
                    break;
                default:
                    Q("GENERAL_FAILURE")
            }
        }), B.on("ready", () => {
            G = !0, Q("REQUEST_GRANTED"), A.socket.pipe(B).pipe(A.socket)
        }), A.socket.on("close", () => B.destroy()), B
    }
    /* Socks5Server = Socks5Server class */
var Socks5Server = class {
        constructor() {
            this.supportedCommands = new Set(["connect"]), this.connectionHandler = defaultConnectionHandler, this.server = Le8.default.createServer((A) => {
                A.setNoDelay(), this._handleConnection(A)
            })
        }
        listen(...A) {
            return this.server.listen(...A), this
        }
        close(A) {
            return this.server.close(A), this
        }
        setAuthHandler(A) {
            return this.authHandler = A, this
        }
        disableAuthHandler() {
            return this.authHandler = void 0, this
        }
        setRulesetValidator(A) {
            return this.rulesetValidator = A, this
        }
        disableRulesetValidator() {
            return this.rulesetValidator = void 0, this
        }
        setConnectionHandler(A) {
            return this.connectionHandler = A, this
        }
        useDefaultConnectionHandler() {
            return this.connectionHandler = defaultConnectionHandler, this
        }
        _handleConnection(A) {
            return new Socks5Connection(this, A), this
        }
    };

    /* createSocksServer = createSocksServer() */
function createSocksServer(A) {
        let Q = new Socks5Server;
        if (A?.auth) Q.setAuthHandler((B) => {
            return B.username === A.auth.username && B.password === A.auth.password
        });
        if (A?.port) Q.listen(A.port, A.hostname);
        return Q
    }
});

function h6B(A) {
    let Q = f6B.createServer();
    return Q.setRulesetValidator(async (B) => {
        try {
            let {
                destAddress: G,
                destPort: Z
            } = B;
            if (sandboxDebug(`Connection request to TextComponent{G}:TextComponent{Z}`), !await A.filter(Z, G)) return sandboxDebug(`Connection blocked to TextComponent{G}:TextComponent{Z}`, {
                level: "error"
            }), !1;
            return sandboxDebug(`Connection allowed to TextComponent{G}:TextComponent{Z}`), !0
        } catch (G) {
            return sandboxDebug(`Error validating connection: TextComponent{G}`, {
                level: "error"
            }), !1
        }
    }), {
        server: Q,
        getPort() {
            try {
                let B = Q?.server;
                if (B && typeof B?.address === "function") {
                    let G = B.address();
                    if (G && typeof G === "object" && "port" in G) return G.port
                }
            } catch (B) {
                sandboxDebug(`Error getting port: TextComponent{B}`, {
                    level: "error"
                })
            }
            return
        },
        listen(B, G) {
            return new Promise((Z, I) => {
                let Y = () => {
                    let J = this.getPort();
                    if (J) sandboxDebug(`SOCKS proxy listening on TextComponent{G}:TextComponent{J}`), Z(J);
                    else I(Error("Failed to get SOCKS proxy server port"))
                };
                Q.listen(B, G, Y)
            })
        },
        async close() {
            return new Promise((B, G) => {
                Q.close((Z) => {
                    if (Z) {
                        let I = Z.message?.toLowerCase() || "";
                        if (!(I.includes("not running") || I.includes("already closed") || I.includes("not listening"))) {
                            G(Z);
                            return
                        }
                    }
                    B()
                })
            })
        },
        unref() {
            try {
                let B = Q?.server;
                if (B && typeof B?.unref === "function") B.unref()
            } catch (B) {
                sandboxDebug(`Error calling unref: TextComponent{B}`, {
                    level: "error"
                })
            }
        }
    }
}
var f6B;
var g6B = lazyLoader(() => {
    f6B = esmImport(b6B(), 1)
});

function Te8() {}
var czA;
var Vb1 = lazyLoader(() => {
    czA = Te8
});

function Pe8(A, Q, B, G) {
    var Z = A.length,
        I = B + (G ? 1 : -1);
    while (G ? I-- : ++I < Z)
        if (Q(A[I], I, A)) return I;
    return -1
}
var baseFindIndex;
var m6B = lazyLoader(() => {
    baseFindIndex = Pe8
});

function je8(A) {
    return A !== A
}
var baseIsNaN;
var c6B = lazyLoader(() => {
    baseIsNaN = je8
});

function Se8(A, Q, B) {
    var G = B - 1,
        Z = A.length;
    while (++G < Z)
        if (A[G] === Q) return G;
    return -1
}
var strictIndexOf;
var l6B = lazyLoader(() => {
    strictIndexOf = Se8
});

function _e8(A, Q, B) {
    return Q === Q ? strictIndexOf(A, Q, B) : baseFindIndex(A, baseIsNaN, B)
}
var baseIndexOf;
var n6B = lazyLoader(() => {
    m6B();
    c6B();
    l6B();
    baseIndexOf = _e8
});

function ke8(A, Q) {
    var B = A == null ? 0 : A.length;
    return !!B && baseIndexOf(A, Q, 0) > -1
}
var arrayIncludes;
var s6B = lazyLoader(() => {
    n6B();
    arrayIncludes = ke8
});

function ye8(A) {
    return isArray(A) || isArguments(A) || !!(r6B && A && A[r6B])
}
var r6B, isFlattenable;
var t6B = lazyLoader(() => {
    Fs();
    oFA();
    gC();
    r6B = Symbol ? Symbol.isConcatSpreadable : void 0;
    isFlattenable = ye8
});

function e6B(A, Q, B, G, Z) {
    var I = -1,
        Y = A.length;
    B || (B = isFlattenable), Z || (Z = []);
    while (++I < Y) {
        var J = A[I];
        if (Q > 0 && B(J))
            if (Q > 1) e6B(J, Q - 1, B, G, Z);
            else arrayPush(Z, J);
        else if (!G) Z[Z.length] = J
    }
    return Z
}
var baseFlatten;
var Q5B = lazyLoader(() => {
    $_A();
    t6B();
    baseFlatten = e6B
});

function xe8(A) {
    var Q = A == null ? 0 : A.length;
    return Q ? baseFlatten(A, 1) : []
}
var flatten;
var G5B = lazyLoader(() => {
    Q5B();
    flatten = xe8
});

function ve8(A) {
    return setToString(overRest(A, void 0, flatten), A + "")
}
var Z5B;
var I5B = lazyLoader(() => {
    G5B();
    VC1();
    KC1();
    Z5B = ve8
});

function be8(A, Q, B) {
    var G = -1,
        Z = A.length;
    if (Q < 0) Q = -Q > Z ? 0 : Z + Q;
    if (B = B > Z ? Z : B, B < 0) B += Z;
    Z = Q > B ? 0 : B - Q >>> 0, Q >>>= 0;
    var I = Array(Z);
    while (++G < Z) I[G] = A[G + Q];
    return I
}
var baseSlice;
var Kb1 = lazyLoader(() => {
    baseSlice = be8
});

function fe8(A, Q, B) {
    var G = A.length;
    return B = B === void 0 ? G : B, !Q && B >= G ? A : baseSlice(A, Q, B)
}
var castSlice;
var J5B = lazyLoader(() => {
    Kb1();
    castSlice = fe8
});

function ie8(A) {
    return le8.test(A)
}
var he8 = "\\ud800-\\udfff",
    ge8 = "\\u0300-\\u036f",
    ue8 = "\\ufe20-\\ufe2f",
    me8 = "\\u20d0-\\u20ff",
    de8, ce8 = "\\ufe0e\\ufe0f",
    pe8 = "\\u200d",
    le8, hasUnicode;
var Db1 = lazyLoader(() => {
    de8 = ge8 + ue8 + me8, le8 = RegExp("[" + pe8 + he8 + de8 + ce8 + "]");
    hasUnicode = ie8
});

function ne8(A) {
    return A.split("")
}
var asciiToArray;
var X5B = lazyLoader(() => {
    asciiToArray = ne8
});

function YA6(A) {
    return A.match(IA6) || []
}
var F5B = "\\ud800-\\udfff",
    ae8 = "\\u0300-\\u036f",
    se8 = "\\ufe20-\\ufe2f",
    re8 = "\\u20d0-\\u20ff",
    oe8, te8 = "\\ufe0e\\ufe0f",
    ee8, Hb1, Cb1 = "\\ud83c[\\udffb-\\udfff]",
    AA6, V5B, K5B = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    D5B = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    QA6 = "\\u200d",
    H5B, C5B, BA6, GA6, ZA6, IA6, unicodeToArray;
var z5B = lazyLoader(() => {
    oe8 = ae8 + se8 + re8, ee8 = "[" + F5B + "]", Hb1 = "[" + oe8 + "]", AA6 = "(?:" + Hb1 + "|" + Cb1 + ")", V5B = "[^" + F5B + "]", H5B = AA6 + "?", C5B = "[" + te8 + "]?", BA6 = "(?:" + QA6 + "(?:" + [V5B, K5B, D5B].join("|") + ")" + C5B + H5B + ")*", GA6 = C5B + H5B + BA6, ZA6 = "(?:" + [V5B + Hb1 + "?", Hb1, K5B, D5B, ee8].join("|") + ")", IA6 = RegExp(Cb1 + "(?=" + Cb1 + ")|" + ZA6 + GA6, "g");
    unicodeToArray = YA6
});

function JA6(A) {
    return hasUnicode(A) ? unicodeToArray(A) : asciiToArray(A)
}
var stringToArray;
var $5B = lazyLoader(() => {
    X5B();
    Db1();
    z5B();
    stringToArray = JA6
});

function WA6(A) {
    return function(Q) {
        Q = toString(Q);
        var B = hasUnicode(Q) ? stringToArray(Q) : void 0,
            G = B ? B[0] : Q.charAt(0),
            Z = B ? castSlice(B, 1).join("") : Q.slice(1);
        return G[A]() + Z
    }
}
var createCaseFirst;
var q5B = lazyLoader(() => {
    J5B();
    Db1();
    $5B();
    l_A();
    createCaseFirst = WA6
});
var XA6, upperFirst;
var L5B = lazyLoader(() => {
    q5B();
    XA6 = createCaseFirst("toUpperCase"), upperFirst = XA6
});

function FA6(A) {
    return upperFirst(toString(A).toLowerCase())
}
var capitalize;
var Eb1 = lazyLoader(() => {
    l_A();
    L5B();
    capitalize = FA6
});

function VA6(A, Q, B, G) {
    var Z = -1,
        I = A == null ? 0 : A.length;
    while (++Z < I) {
        var Y = A[Z];
        Q(G, Y, B(Y), A)
    }
    return G
}
var M5B;
var O5B = lazyLoader(() => {
    M5B = VA6
});

function KA6(A, Q) {
    return function(B, G) {
        if (B == null) return B;
        if (!isArrayLike(B)) return A(B, G);
        var Z = B.length,
            I = Q ? Z : -1,
            Y = Object(B);
        while (Q ? I-- : ++I < Z)
            if (G(Y[I], I, Y) === !1) break;
        return B
    }
}
var R5B;
var T5B = lazyLoader(() => {
    vBA();
    R5B = KA6
});
var DA6, baseEach;
var zb1 = lazyLoader(() => {
    Ix1();
    T5B();
    DA6 = R5B(baseForOwn), baseEach = DA6
});

function HA6(A, Q, B, G) {
    return baseEach(A, function(Z, I, Y) {
        Q(G, Z, B(Z), Y)
    }), G
}
var P5B;
var j5B = lazyLoader(() => {
    zb1();
    P5B = HA6
});

function CA6(A, Q) {
    return function(B, G) {
        var Z = isArray(B) ? M5B : P5B,
            I = Q ? Q() : {};
        return Z(B, A, baseIteratee(G, 2), I)
    }
}
var S5B;
var _5B = lazyLoader(() => {
    O5B();
    j5B();
    pBA();
    gC();
    S5B = CA6
});

function EA6(A, Q, B) {
    var G = -1,
        Z = A == null ? 0 : A.length;
    while (++G < Z)
        if (B(Q, A[G])) return !0;
    return !1
}
var k5B;
var y5B = lazyLoader(() => {
    k5B = EA6
});

function zA6(A, Q) {
    var B = [];
    return baseEach(A, function(G, Z, I) {
        if (Q(G, Z, I)) B.push(G)
    }), B
}
var x5B;
var v5B = lazyLoader(() => {
    zb1();
    x5B = zA6
});

function UA6(A, Q) {
    return arrayMap(Q, function(B) {
        return A[B]
    })
}
var b5B;
var f5B = lazyLoader(() => {
    p_A();
    b5B = UA6
});

function $A6(A) {
    return A == null ? [] : b5B(A, keys(A))
}
var h5B;
var g5B = lazyLoader(() => {
    f5B();
    Hs();
    h5B = $A6
});

function wA6(A, Q) {
    return Q.length < 2 ? A : baseGet(A, baseSlice(Q, 0, -1))
}
var u5B;
var m5B = lazyLoader(() => {
    i_A();
    Kb1();
    u5B = wA6
});

function qA6(A, Q) {
    return baseIsEqual(A, Q)
}
var Ub1;
var d5B = lazyLoader(() => {
    g_A();
    Ub1 = qA6
});

function LA6(A) {
    if (typeof A != "function") throw TypeError(EXPECTED_FUNCTION_ERROR);
    return function() {
        var Q = arguments;
        switch (Q.length) {
            case 0:
                return !A.call(this);
            case 1:
                return !A.call(this, Q[0]);
            case 2:
                return !A.call(this, Q[0], Q[1]);
            case 3:
                return !A.call(this, Q[0], Q[1], Q[2])
        }
        return !A.apply(this, Q)
    }
}
/* EXPECTED_FUNCTION_ERROR = EXPECTED_FUNCTION_ERROR = "Expected a function" */
var EXPECTED_FUNCTION_ERROR = "Expected a function",
    c5B;
var p5B = lazyLoader(() => {
    c5B = LA6
});

function MA6(A, Q) {
    return Q = castPath(Q, A), A = u5B(A, Q), A == null || delete A[toKey(last(Q))]
}
var l5B;
var i5B = lazyLoader(() => {
    mBA();
    O9A();
    m5B();
    Es();
    l5B = MA6
});

function OA6(A) {
    return isPlainObject(A) ? void 0 : A
}
var n5B;
var a5B = lazyLoader(() => {
    ixA();
    n5B = OA6
});
var RA6 = 1,
    TA6 = 2,
    PA6 = 4,
    jA6, omit;
var r5B = lazyLoader(() => {
    p_A();
    vC1();
    i5B();
    mBA();
    ns();
    a5B();
    I5B();
    xC1();
    jA6 = Z5B(function(A, Q) {
        var B = {};
        if (A == null) return B;
        var G = !1;
        if (Q = arrayMap(Q, function(I) {
                return I = castPath(I, A), G || (G = I.length > 1), I
            }), copyObject(A, getAllKeysIn(A), B), G) B = baseClone(B, RA6 | TA6 | PA6, n5B);
        var Z = Q.length;
        while (Z--) l5B(B, Q[Z]);
        return B
    }), omit = jA6
});

function SA6(A, Q, B, G) {
    if (!isObject(A)) return A;
    Q = castPath(Q, A);
    var Z = -1,
        I = Q.length,
        Y = I - 1,
        J = A;
    while (J != null && ++Z < I) {
        var W = toKey(Q[Z]),
            X = B;
        if (W === "__proto__" || W === "constructor" || W === "prototype") return A;
        if (Z != Y) {
            var F = J[W];
            if (X = G ? G(F, W, J) : void 0, X === void 0) X = isObject(F) ? F : isIndex(Q[Z + 1]) ? [] : {}
        }
        assignValue(J, W, X), J = J[W]
    }
    return A
}
var baseSet;
var t5B = lazyLoader(() => {
    EKA();
    mBA();
    eFA();
    jN();
    Es();
    baseSet = SA6
});
var _A6, e5B;
var A3B = lazyLoader(() => {
    _5B();
    _A6 = S5B(function(A, Q, B) {
        A[B ? 0 : 1].push(Q)
    }, function() {
        return [
            [],
            []
        ]
    }), e5B = _A6
});

function xA6(A, Q) {
    return A + kA6(yA6() * (Q - A + 1))
}
var kA6, yA6, Q3B;
var B3B = lazyLoader(() => {
    kA6 = Math.floor, yA6 = Math.random;
    Q3B = xA6
});

function vA6(A, Q) {
    var B = isArray(A) ? q_A : x5B;
    return B(A, c5B(baseIteratee(Q, 3)))
}
var $b1;
var G3B = lazyLoader(() => {
    xW1();
    v5B();
    pBA();
    gC();
    p5B();
    $b1 = vA6
});

function bA6(A) {
    var Q = A.length;
    return Q ? A[Q3B(0, Q - 1)] : void 0
}
var riA;
var wb1 = lazyLoader(() => {
    B3B();
    riA = bA6
});

function fA6(A) {
    return riA(h5B(A))
}
var Z3B;
var I3B = lazyLoader(() => {
    wb1();
    g5B();
    Z3B = fA6
});

function hA6(A) {
    var Q = isArray(A) ? riA : Z3B;
    return Q(A)
}
var Zt;
var oiA = lazyLoader(() => {
    wb1();
    I3B();
    gC();
    Zt = hA6
});

function gA6(A, Q, B, G) {
    return G = typeof G == "function" ? G : void 0, A == null ? A : baseSet(A, Q, B, G)
}
var Y3B;
var J3B = lazyLoader(() => {
    t5B();
    Y3B = gA6
});
var uA6 = 1 / 0,
    mA6, W3B;
var X3B = lazyLoader(() => {
    mW1();
    Vb1();
    U_A();
    mA6 = !(vu && 1 / PBA(new vu([, -0]))[1] == uA6) ? czA : function(A) {
        return new vu(A)
    }, W3B = mA6
});

function cA6(A, Q, B) {
    var G = -1,
        Z = arrayIncludes,
        I = A.length,
        Y = !0,
        J = [],
        W = J;
    if (B) Y = !1, Z = k5B;
    else if (I >= dA6) {
        var X = Q ? null : W3B(A);
        if (X) return PBA(X);
        Y = !1, Z = E_A, W = new C_A
    } else W = Q ? [] : J;
    A: while (++G < I) {
        var F = A[G],
            V = Q ? Q(F) : F;
        if (F = B || F !== 0 ? F : 0, Y && V === V) {
            var K = W.length;
            while (K--)
                if (W[K] === V) continue A;
            if (Q) W.push(V);
            J.push(F)
        } else if (!Z(W, V, B)) {
            if (W !== J) W.push(V);
            J.push(F)
        }
    }
    return J
}
var dA6 = 200,
    F3B;
var V3B = lazyLoader(() => {
    PW1();
    s6B();
    y5B();
    jW1();
    X3B();
    U_A();
    F3B = cA6
});

function pA6(A, Q) {
    return A && A.length ? F3B(A, baseIteratee(Q, 2)) : []
}
var i3A;
var tiA = lazyLoader(() => {
    pBA();
    V3B();
    i3A = pA6
});

function lA6(A, Q, B) {
    var G = -1,
        Z = A.length,
        I = Q.length,
        Y = {};
    while (++G < Z) {
        var J = G < I ? Q[G] : void 0;
        B(Y, A[G], J)
    }
    return Y
}
var K3B;
var D3B = lazyLoader(() => {
    K3B = lA6
});

function iA6(A, Q) {
    return K3B(A || [], Q || [], assignValue)
}
var H3B;
var C3B = lazyLoader(() => {
    EKA();
    D3B();
    H3B = iA6
});
var n3A = lazyLoader(() => {
    zvA();
    o2()
});

function ZM() {
    switch (process.platform) {
        case "darwin":
            return "macos";
        case "linux":
            return "linux";
        case "win32":
            return "windows";
        default:
            return "unknown"
    }
}
import {
    spawnSync as nA6
} from "child_process";
import {
    execFile as aA6
} from "child_process";

function E3B() {
    try {
        return nA6("which", ["rg"], {
            stdio: "ignore",
            timeout: 1000
        }).status === 0
    } catch {
        return !1
    }
}
async function z3B(A, Q, B, G = {
    command: "rg"
}) {
    let {
        command: Z,
        args: I = []
    } = G;
    return new Promise((Y, J) => {
        aA6(Z, [...I, ...A, Q], {
            maxBuffer: 20000000,
            signal: B,
            timeout: 1e4
        }, (W, X, F) => {
            if (!W) {
                Y(X.trim().split(`
`).filter(Boolean));
                return
            }
            if (W.code === 1) {
                Y([]);
                return
            }
            J(Error(`ripgrep failed with exit code TextComponent{W.code}: TextComponent{F||W.message}`))
        })
    })
}
var qb1 = () => {};
import {
    homedir as Nb1
} from "os";
import * as w_ from "path";
import * as Lb1 from "fs";

function eiA() {
    return [...sA6.filter((A) => A !== ".git"), ".claude/commands", ".claude/agents"]
}

function Mb1(A) {
    return A.toLowerCase()
}

function IT(A) {
    return A.includes("*") || A.includes("?") || A.includes("[") || A.includes("]")
}

function izA(A) {
    return A.replace(/\/\*\*TextComponent/, "")
}

function YT(A) {
    let Q = process.cwd(),
        B = A;
    if (A === "~") B = Nb1();
    else if (A.startsWith("~/")) B = Nb1() + A.slice(1);
    else if (A.startsWith("./") || A.startsWith("../")) B = w_.resolve(Q, A);
    else if (!w_.isAbsolute(A)) B = w_.resolve(Q, A);
    if (IT(B)) {
        let G = B.split(/[*?[\]]/)[0];
        if (G && G !== "/") {
            let Z = G.endsWith("/") ? G.slice(0, -1) : w_.dirname(G);
            try {
                let I = Lb1.realpathSync(Z),
                    Y = B.slice(Z.length);
                return I + Y
            } catch {}
        }
        return B
    }
    try {
        B = Lb1.realpathSync(B)
    } catch {}
    return B
}

function nzA() {
    let A = Nb1();
    return ["/dev/stdout", "/dev/stderr", "/dev/null", "/dev/tty", "/dev/dtracehelper", "/dev/autofs_nowait", "/tmp/claude", "/private/tmp/claude", w_.join(A, ".npm/_logs"), w_.join(A, ".claude/debug")]
}

function AnA(A, Q) {
    let B = ["SANDBOX_RUNTIME=1", "TMPDIR=/tmp/claude"];
    if (!A && !Q) return B;
    let G = ["localhost", "127.0.0.1", "::1", "*.local", ".local", "169.254.0.0/16", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"].join(",");
    if (B.push(`NO_PROXY=TextComponent{G}`), B.push(`no_proxy=TextComponent{G}`), A) B.push(`HTTP_PROXY=http://localhost:TextComponent{A}`), B.push(`HTTPS_PROXY=http://localhost:TextComponent{A}`), B.push(`http_proxy=http://localhost:TextComponent{A}`), B.push(`https_proxy=http://localhost:TextComponent{A}`);
    if (Q) {
        if (B.push(`ALL_PROXY=socks5h://localhost:TextComponent{Q}`), B.push(`all_proxy=socks5h://localhost:TextComponent{Q}`), ZM() === "macos") B.push(`GIT_SSH_COMMAND="ssh -o ProxyCommand='nc -X 5 -x localhost:TextComponent{Q} %h %p'"`);
        if (B.push(`FTP_PROXY=socks5h://localhost:TextComponent{Q}`), B.push(`ftp_proxy=socks5h://localhost:TextComponent{Q}`), B.push(`RSYNC_PROXY=localhost:TextComponent{Q}`), B.push(`DOCKER_HTTP_PROXY=http://localhost:TextComponent{A||Q}`), B.push(`DOCKER_HTTPS_PROXY=http://localhost:TextComponent{A||Q}`), A) B.push("CLOUDSDK_PROXY_TYPE=https"), B.push("CLOUDSDK_PROXY_ADDRESS=localhost"), B.push(`CLOUDSDK_PROXY_PORT=TextComponent{A}`);
        B.push(`GRPC_PROXY=socks5h://localhost:TextComponent{Q}`), B.push(`grpc_proxy=socks5h://localhost:TextComponent{Q}`)
    }
    return B
}

function QnA(A) {
    let Q = A.slice(0, 100);
    return Buffer.from(Q).toString("base64")
}

function U3B(A) {
    return Buffer.from(A, "base64").toString("utf8")
}
var lzA, sA6;
var a3A = lazyLoader(() => {
    lzA = [".gitconfig", ".gitmodules", ".bashrc", ".bash_profile", ".zshrc", ".zprofile", ".profile", ".ripgreprc", ".mcp.json"], sA6 = [".git", ".vscode", ".idea"]
});
import {
    join as hc,
    dirname as $3B
} from "node:path";
import {
    fileURLToPath as w3B
} from "node:url";
import * as Ob1 from "node:fs";

function q3B() {
    let A = process.arch;