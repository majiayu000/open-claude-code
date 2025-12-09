/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: tools_004.js
 * 处理时间: 2025-12-09T03:37:25.533Z
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
 * ==================== 变量索引 ====================
 * SQ         ( 17x) = sandboxDebug(msg, opts) - Sandbox debug logging
 * Xb1        (  4x) = SocksStatus enum (REQUEST_GRANTED, GENERAL_FAILURE, etc)
 * Fb1        (  4x) = defaultConnectionHandler() - Default SOCKS handler
 * niA        (  4x) = baseSlice() - Base array slice
 * aiA        (  4x) = hasUnicode() - Check for unicode
 * siA        (  4x) = baseEach() - Base forEach
 * j7         (  4x) = isArray() - Check if array
 * x6B        (  3x) = Socks5Server class
 * y6B        (  3x) = SocksCommand enum (connect, bind, udp)
 * u6B        (  3x) = baseFindIndex() - Base find index
 * d6B        (  3x) = baseIsNaN() - Check if NaN
 * p6B        (  3x) = strictIndexOf() - Strict array indexOf
 * i6B        (  3x) = baseIndexOf() - Base indexOf with NaN
 * a6B        (  3x) = arrayIncludes() - Array includes check
 * o6B        (  3x) = isFlattenable() - Check if flattenable
 * A5B        (  3x) = baseFlatten() - Flatten array
 * B5B        (  3x) = flatten() - Flatten one level
 * Y5B        (  3x) = castSlice() - Cast to slice
 * W5B        (  3x) = asciiToArray() - ASCII to array
 * E5B        (  3x) = unicodeToArray() - Unicode to array
 * U5B        (  3x) = stringToArray() - String to array
 * w5B        (  3x) = createCaseFirst() - Create case function
 * N5B        (  3x) = upperFirst() - Uppercase first char
 * o5B        (  3x) = baseSet() - Base set property
 * jj         (  3x) = baseIteratee() - Base iteratee
 * Pj         (  3x) = castPath() - Cast to path array
 * Me8        (  2x) = Socks5Connection class
 * Re8        (  2x) = createSocksServer() - Create SOCKS5 server
 * Ve8        (  2x) = http.createServer
 * Ke8        (  2x) = http.request
 * De8        (  2x) = https.request
 * He8        (  2x) = net.connect
 * Ce8        (  2x) = URL class
 * UA         (  2x) = require(moduleName) - Node.js require
 * HV         (  2x) = Symbol - Symbol reference
 * pzA        (  2x) = capitalize() - Capitalize string
 * s5B        (  2x) = omit() - Omit properties
 * uBA        (  2x) = toString() - Convert to string
 * TY         (  2x) = isObject() - Check if object
 * gBA        (  2x) = arrayMap() - Array map
 * ... 还有 21 个变量 ...
 * ===================================================
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
                path: `mcpServers.${W}`,
                message: `Missing environment variables: ${K.join(", ")}`,
                suggestion: `Set the following environment variables: ${K.join(", ")}`,
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
            path: `mcpServers.${W}`,
            message: "Windows requires 'cmd /c' wrapper to execute npx",
            suggestion: 'Change command to "cmd" with args ["/c", "npx", ...]. See: https://docs.claude.com/en/docs/claude-code/mcp#configure-mcp-servers',
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
            message: `MCP config file not found: ${Q}`,
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
                message: `Failed to read file: ${J}`,
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
var GM = L(() => {
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
    let Q = A.replace(/\s*\(MCP\)\s*$/, "");
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
            return `${B}${G?"":" (file does not exist)"}`
        }
        case "project": {
            let B = Fe8(H0(), ".mcp.json"),
                G = Q.existsSync(B);
            return `${B}${G?"":" (file does not exist)"}`
        }
        case "local":
            return `${gK()} [project: ${H0()}]`;
        case "dynamic":
            return "Dynamically configured";
        case "enterprise": {
            let B = uiA(),
                G = Q.existsSync(B);
            return `${B}${G?"":" (file does not exist)"}`
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
    if (!PC1.options.includes(A)) throw Error(`Invalid scope: ${A}. Must be one of: ${PC1.options.join(", ")}`);
    return A
}

function T6B(A) {
    if (!A) return "stdio";
    if (A !== "stdio" && A !== "sse" && A !== "http") throw Error(`Invalid transport type: ${A}. Must be one of: stdio, sse, http`);
    return A
}

function Wb1(A) {
    let Q = {};
    for (let B of A) {
        let G = B.indexOf(":");
        if (G === -1) throw Error(`Invalid header format: "${B}". Expected format: "Header-Name: value"`);
        let Z = B.substring(0, G).trim(),
            I = B.substring(G + 1).trim();
        if (!Z) throw Error(`Invalid header: "${B}". Header name cannot be empty.`);
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
var xX = L(() => {
    RB();
    s9A();
    f5();
    R2();
    o0();
    GM()
});
/* D9 = BASH_TOOL = "Bash" */
var D9 = "Bash";

/* SQ = sandboxDebug(msg, opts) - Sandbox debug logging */
/* Signature: (message: string, options?: {level: "info"|"warn"|"error"}) => void */
function SQ(A, Q) {
    if (!process.env.SRT_DEBUG) return;
    let B = Q?.level || "info",
        G = "[SandboxDebug]";
    switch (B) {
        case "error":
            console.error(`${G} ${A}`);
            break;
        case "warn":
            console.warn(`${G} ${A}`);
            break;
        default:
            console.error(`${G} ${A}`)
    }
}
import {
    createServer as Ve8
} from "node:http";
import {
    request as Ke8
} from "node:http";
import {
    request as De8
} from "node:https";
import {
    connect as He8
} from "node:net";
import {
    URL as Ce8
} from "node:url";

/* P6B = createProxyServer(config) - Create HTTP/HTTPS proxy */
/* Signature: (config: {filter: FilterFn}) => http.Server */
function P6B(A) {
    let Q = Ve8();
    return Q.on("connect", async (B, G) => {
        G.on("error", (Z) => {
            SQ(`Client socket error: ${Z.message}`, {
                level: "error"
            })
        });
        try {
            let [Z, I] = B.url.split(":"), Y = I === void 0 ? void 0 : parseInt(I, 10);
            if (!Z || !Y) {
                SQ(`Invalid CONNECT request: ${B.url}`, {
                    level: "error"
                }), G.end(`HTTP/1.1 400 Bad Request\r
\r
`);
                return
            }
            if (!await A.filter(Y, Z, G)) {
                SQ(`Connection blocked to ${Z}:${Y}`, {
                    level: "error"
                }), G.end(`HTTP/1.1 403 Forbidden\r
Content-Type: text/plain\r
X-Proxy-Error: blocked-by-allowlist\r
\r
Connection blocked by network allowlist`);
                return
            }
            let W = He8(Y, Z, () => {
                G.write(`HTTP/1.1 200 Connection Established\r
\r
`), W.pipe(G), G.pipe(W)
            });
            W.on("error", (X) => {
                SQ(`CONNECT tunnel failed: ${X.message}`, {
                    level: "error"
                }), G.end(`HTTP/1.1 502 Bad Gateway\r
\r
`)
            }), G.on("error", (X) => {
                SQ(`Client socket error: ${X.message}`, {
                    level: "error"
                }), W.destroy()
            }), G.on("end", () => W.end()), W.on("end", () => G.end())
        } catch (Z) {
            SQ(`Error handling CONNECT: ${Z}`, {
                level: "error"
            }), G.end(`HTTP/1.1 500 Internal Server Error\r
\r
`)
        }
    }), Q.on("request", async (B, G) => {
        try {
            let Z = new Ce8(B.url),
                I = Z.hostname,
                Y = Z.port ? parseInt(Z.port, 10) : Z.protocol === "https:" ? 443 : 80;
            if (!await A.filter(Y, I, B.socket)) {
                SQ(`HTTP request blocked to ${I}:${Y}`, {
                    level: "error"
                }), G.writeHead(403, {
                    "Content-Type": "text/plain",
                    "X-Proxy-Error": "blocked-by-allowlist"
                }), G.end("Connection blocked by network allowlist");
                return
            }
            let X = (Z.protocol === "https:" ? De8 : Ke8)({
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
                if (SQ(`Proxy request failed: ${F.message}`, {
                        level: "error"
                    }), !G.headersSent) G.writeHead(502, {
                    "Content-Type": "text/plain"
                }), G.end("Bad Gateway")
            }), B.pipe(X)
        } catch (Z) {
            SQ(`Error handling HTTP request: ${Z}`, {
                level: "error"
            }), G.writeHead(500, {
                "Content-Type": "text/plain"
            }), G.end("Internal Server Error")
        }
    }), Q
}
/* j6B = emptyFunction() - No-op function */
var j6B = () => {};
var b6B = U((mj7, v6B) => {
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
        Socks5Server: () => x6B,
        createServer: () => Re8,
        defaultConnectionHandler: () => Fb1
    });
    v6B.exports = Ne8(k6B);
    var Le8 = _6B(UA("net")),
        y6B = ((A) => {
            return A[A.connect = 1] = "connect", A[A.bind = 2] = "bind", A[A.udp = 3] = "udp", A
        })(y6B || {}),
        Xb1 = ((A) => {
            return A[A.REQUEST_GRANTED = 0] = "REQUEST_GRANTED", A[A.GENERAL_FAILURE = 1] = "GENERAL_FAILURE", A[A.CONNECTION_NOT_ALLOWED = 2] = "CONNECTION_NOT_ALLOWED", A[A.NETWORK_UNREACHABLE = 3] = "NETWORK_UNREACHABLE", A[A.HOST_UNREACHABLE = 4] = "HOST_UNREACHABLE", A[A.CONNECTION_REFUSED = 5] = "CONNECTION_REFUSED", A[A.TTL_EXPIRED = 6] = "TTL_EXPIRED", A[A.COMMAND_NOT_SUPPORTED = 7] = "COMMAND_NOT_SUPPORTED", A[A.ADDRESS_TYPE_NOT_SUPPORTED = 8] = "ADDRESS_TYPE_NOT_SUPPORTED", A
        })(Xb1 || {}),
        Me8 = class {
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
                    Q = y6B[A];
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
                            G += `${F[V]<16?"0":""}${F[V].toString(16)}`
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
                    if (Xb1[A] === void 0) throw Error(`"${A}" is not a valid status.`);
                    if (this.socket.write(Buffer.from([5, Xb1[A], 0, 1, 0, 0, 0, 0, 0, 0])), A !== "REQUEST_GRANTED") this.socket.destroy()
                }), this.socket.resume()
            }
        },
        Oe8 = _6B(UA("net"));

    /* Fb1 = defaultConnectionHandler() - Default SOCKS handler */
function Fb1(A, Q) {
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
    /* x6B = Socks5Server class */
var x6B = class {
        constructor() {
            this.supportedCommands = new Set(["connect"]), this.connectionHandler = Fb1, this.server = Le8.default.createServer((A) => {
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
            return this.connectionHandler = Fb1, this
        }
        _handleConnection(A) {
            return new Me8(this, A), this
        }
    };

    /* Re8 = createSocksServer() - Create SOCKS5 server */
function Re8(A) {
        let Q = new x6B;
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
            if (SQ(`Connection request to ${G}:${Z}`), !await A.filter(Z, G)) return SQ(`Connection blocked to ${G}:${Z}`, {
                level: "error"
            }), !1;
            return SQ(`Connection allowed to ${G}:${Z}`), !0
        } catch (G) {
            return SQ(`Error validating connection: ${G}`, {
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
                SQ(`Error getting port: ${B}`, {
                    level: "error"
                })
            }
            return
        },
        listen(B, G) {
            return new Promise((Z, I) => {
                let Y = () => {
                    let J = this.getPort();
                    if (J) SQ(`SOCKS proxy listening on ${G}:${J}`), Z(J);
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
                SQ(`Error calling unref: ${B}`, {
                    level: "error"
                })
            }
        }
    }
}
var f6B;
var g6B = L(() => {
    f6B = GA(b6B(), 1)
});

function Te8() {}
var czA;
var Vb1 = L(() => {
    czA = Te8
});

function Pe8(A, Q, B, G) {
    var Z = A.length,
        I = B + (G ? 1 : -1);
    while (G ? I-- : ++I < Z)
        if (Q(A[I], I, A)) return I;
    return -1
}
var u6B;
var m6B = L(() => {
    u6B = Pe8
});

function je8(A) {
    return A !== A
}
var d6B;
var c6B = L(() => {
    d6B = je8
});

function Se8(A, Q, B) {
    var G = B - 1,
        Z = A.length;
    while (++G < Z)
        if (A[G] === Q) return G;
    return -1
}
var p6B;
var l6B = L(() => {
    p6B = Se8
});

function _e8(A, Q, B) {
    return Q === Q ? p6B(A, Q, B) : u6B(A, d6B, B)
}
var i6B;
var n6B = L(() => {
    m6B();
    c6B();
    l6B();
    i6B = _e8
});

function ke8(A, Q) {
    var B = A == null ? 0 : A.length;
    return !!B && i6B(A, Q, 0) > -1
}
var a6B;
var s6B = L(() => {
    n6B();
    a6B = ke8
});

function ye8(A) {
    return j7(A) || px(A) || !!(r6B && A && A[r6B])
}
var r6B, o6B;
var t6B = L(() => {
    Fs();
    oFA();
    gC();
    r6B = HV ? HV.isConcatSpreadable : void 0;
    o6B = ye8
});

function e6B(A, Q, B, G, Z) {
    var I = -1,
        Y = A.length;
    B || (B = o6B), Z || (Z = []);
    while (++I < Y) {
        var J = A[I];
        if (Q > 0 && B(J))
            if (Q > 1) e6B(J, Q - 1, B, G, Z);
            else jBA(Z, J);
        else if (!G) Z[Z.length] = J
    }
    return Z
}
var A5B;
var Q5B = L(() => {
    $_A();
    t6B();
    A5B = e6B
});

function xe8(A) {
    var Q = A == null ? 0 : A.length;
    return Q ? A5B(A, 1) : []
}
var B5B;
var G5B = L(() => {
    Q5B();
    B5B = xe8
});

function ve8(A) {
    return axA(nxA(A, void 0, B5B), A + "")
}
var Z5B;
var I5B = L(() => {
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
var niA;
var Kb1 = L(() => {
    niA = be8
});

function fe8(A, Q, B) {
    var G = A.length;
    return B = B === void 0 ? G : B, !Q && B >= G ? A : niA(A, Q, B)
}
var Y5B;
var J5B = L(() => {
    Kb1();
    Y5B = fe8
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
    le8, aiA;
var Db1 = L(() => {
    de8 = ge8 + ue8 + me8, le8 = RegExp("[" + pe8 + he8 + de8 + ce8 + "]");
    aiA = ie8
});

function ne8(A) {
    return A.split("")
}
var W5B;
var X5B = L(() => {
    W5B = ne8
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
    H5B, C5B, BA6, GA6, ZA6, IA6, E5B;
var z5B = L(() => {
    oe8 = ae8 + se8 + re8, ee8 = "[" + F5B + "]", Hb1 = "[" + oe8 + "]", AA6 = "(?:" + Hb1 + "|" + Cb1 + ")", V5B = "[^" + F5B + "]", H5B = AA6 + "?", C5B = "[" + te8 + "]?", BA6 = "(?:" + QA6 + "(?:" + [V5B, K5B, D5B].join("|") + ")" + C5B + H5B + ")*", GA6 = C5B + H5B + BA6, ZA6 = "(?:" + [V5B + Hb1 + "?", Hb1, K5B, D5B, ee8].join("|") + ")", IA6 = RegExp(Cb1 + "(?=" + Cb1 + ")|" + ZA6 + GA6, "g");
    E5B = YA6
});

function JA6(A) {
    return aiA(A) ? E5B(A) : W5B(A)
}
var U5B;
var $5B = L(() => {
    X5B();
    Db1();
    z5B();
    U5B = JA6
});

function WA6(A) {
    return function(Q) {
        Q = uBA(Q);
        var B = aiA(Q) ? U5B(Q) : void 0,
            G = B ? B[0] : Q.charAt(0),
            Z = B ? Y5B(B, 1).join("") : Q.slice(1);
        return G[A]() + Z
    }
}
var w5B;
var q5B = L(() => {
    J5B();
    Db1();
    $5B();
    l_A();
    w5B = WA6
});
var XA6, N5B;
var L5B = L(() => {
    q5B();
    XA6 = w5B("toUpperCase"), N5B = XA6
});

function FA6(A) {
    return N5B(uBA(A).toLowerCase())
}
var pzA;
var Eb1 = L(() => {
    l_A();
    L5B();
    pzA = FA6
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
var O5B = L(() => {
    M5B = VA6
});

function KA6(A, Q) {
    return function(B, G) {
        if (B == null) return B;
        if (!Tj(B)) return A(B, G);
        var Z = B.length,
            I = Q ? Z : -1,
            Y = Object(B);
        while (Q ? I-- : ++I < Z)
            if (G(Y[I], I, Y) === !1) break;
        return B
    }
}
var R5B;
var T5B = L(() => {
    vBA();
    R5B = KA6
});
var DA6, siA;
var zb1 = L(() => {
    Ix1();
    T5B();
    DA6 = R5B(LlA), siA = DA6
});

function HA6(A, Q, B, G) {
    return siA(A, function(Z, I, Y) {
        Q(G, Z, B(Z), Y)
    }), G
}
var P5B;
var j5B = L(() => {
    zb1();
    P5B = HA6
});

function CA6(A, Q) {
    return function(B, G) {
        var Z = j7(B) ? M5B : P5B,
            I = Q ? Q() : {};
        return Z(B, A, jj(G, 2), I)
    }
}
var S5B;
var _5B = L(() => {
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
var y5B = L(() => {
    k5B = EA6
});

function zA6(A, Q) {
    var B = [];
    return siA(A, function(G, Z, I) {
        if (Q(G, Z, I)) B.push(G)
    }), B
}
var x5B;
var v5B = L(() => {
    zb1();
    x5B = zA6
});

function UA6(A, Q) {
    return gBA(Q, function(B) {
        return A[B]
    })
}
var b5B;
var f5B = L(() => {
    p_A();
    b5B = UA6
});

function $A6(A) {
    return A == null ? [] : b5B(A, SN(A))
}
var h5B;
var g5B = L(() => {
    f5B();
    Hs();
    h5B = $A6
});

function wA6(A, Q) {
    return Q.length < 2 ? A : dBA(A, niA(Q, 0, -1))
}
var u5B;
var m5B = L(() => {
    i_A();
    Kb1();
    u5B = wA6
});

function qA6(A, Q) {
    return bBA(A, Q)
}
var Ub1;
var d5B = L(() => {
    g_A();
    Ub1 = qA6
});

function LA6(A) {
    if (typeof A != "function") throw TypeError(NA6);
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
var NA6 = "Expected a function",
    c5B;
var p5B = L(() => {
    c5B = LA6
});

function MA6(A, Q) {
    return Q = Pj(Q, A), A = u5B(A, Q), A == null || delete A[_N(dC(Q))]
}
var l5B;
var i5B = L(() => {
    mBA();
    O9A();
    m5B();
    Es();
    l5B = MA6
});

function OA6(A) {
    return j9A(A) ? void 0 : A
}
var n5B;
var a5B = L(() => {
    ixA();
    n5B = OA6
});
var RA6 = 1,
    TA6 = 2,
    PA6 = 4,
    jA6, s5B;
var r5B = L(() => {
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
        if (Q = gBA(Q, function(I) {
                return I = Pj(I, A), G || (G = I.length > 1), I
            }), hN(A, HvA(A), B), G) B = EvA(B, RA6 | TA6 | PA6, n5B);
        var Z = Q.length;
        while (Z--) l5B(B, Q[Z]);
        return B
    }), s5B = jA6
});

function SA6(A, Q, B, G) {
    if (!TY(A)) return A;
    Q = Pj(Q, A);
    var Z = -1,
        I = Q.length,
        Y = I - 1,
        J = A;
    while (J != null && ++Z < I) {
        var W = _N(Q[Z]),
            X = B;
        if (W === "__proto__" || W === "constructor" || W === "prototype") return A;
        if (Z != Y) {
            var F = J[W];
            if (X = G ? G(F, W, J) : void 0, X === void 0) X = TY(F) ? F : xu(Q[Z + 1]) ? [] : {}
        }
        $m(J, W, X), J = J[W]
    }
    return A
}
var o5B;
var t5B = L(() => {
    EKA();
    mBA();
    eFA();
    jN();
    Es();
    o5B = SA6
});
var _A6, e5B;
var A3B = L(() => {
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
var B3B = L(() => {
    kA6 = Math.floor, yA6 = Math.random;
    Q3B = xA6
});

function vA6(A, Q) {
    var B = j7(A) ? q_A : x5B;
    return B(A, c5B(jj(Q, 3)))
}
var $b1;
var G3B = L(() => {
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
var wb1 = L(() => {
    B3B();
    riA = bA6
});

function fA6(A) {
    return riA(h5B(A))
}
var Z3B;
var I3B = L(() => {
    wb1();
    g5B();
    Z3B = fA6
});

function hA6(A) {
    var Q = j7(A) ? riA : Z3B;
    return Q(A)
}
var Zt;
var oiA = L(() => {
    wb1();
    I3B();
    gC();
    Zt = hA6
});

function gA6(A, Q, B, G) {
    return G = typeof G == "function" ? G : void 0, A == null ? A : o5B(A, Q, B, G)
}
var Y3B;
var J3B = L(() => {
    t5B();
    Y3B = gA6
});
var uA6 = 1 / 0,
    mA6, W3B;
var X3B = L(() => {
    mW1();
    Vb1();
    U_A();
    mA6 = !(vu && 1 / PBA(new vu([, -0]))[1] == uA6) ? czA : function(A) {
        return new vu(A)
    }, W3B = mA6
});

function cA6(A, Q, B) {
    var G = -1,
        Z = a6B,
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
var V3B = L(() => {
    PW1();
    s6B();
    y5B();
    jW1();
    X3B();
    U_A();
    F3B = cA6
});

function pA6(A, Q) {
    return A && A.length ? F3B(A, jj(Q, 2)) : []
}
var i3A;
var tiA = L(() => {
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
var D3B = L(() => {
    K3B = lA6
});

function iA6(A, Q) {
    return K3B(A || [], Q || [], $m)
}
var H3B;
var C3B = L(() => {
    EKA();
    D3B();
    H3B = iA6
});
var n3A = L(() => {
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
            J(Error(`ripgrep failed with exit code ${W.code}: ${F||W.message}`))
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
    return A.replace(/\/\*\*$/, "")
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
    if (B.push(`NO_PROXY=${G}`), B.push(`no_proxy=${G}`), A) B.push(`HTTP_PROXY=http://localhost:${A}`), B.push(`HTTPS_PROXY=http://localhost:${A}`), B.push(`http_proxy=http://localhost:${A}`), B.push(`https_proxy=http://localhost:${A}`);
    if (Q) {
        if (B.push(`ALL_PROXY=socks5h://localhost:${Q}`), B.push(`all_proxy=socks5h://localhost:${Q}`), ZM() === "macos") B.push(`GIT_SSH_COMMAND="ssh -o ProxyCommand='nc -X 5 -x localhost:${Q} %h %p'"`);
        if (B.push(`FTP_PROXY=socks5h://localhost:${Q}`), B.push(`ftp_proxy=socks5h://localhost:${Q}`), B.push(`RSYNC_PROXY=localhost:${Q}`), B.push(`DOCKER_HTTP_PROXY=http://localhost:${A||Q}`), B.push(`DOCKER_HTTPS_PROXY=http://localhost:${A||Q}`), A) B.push("CLOUDSDK_PROXY_TYPE=https"), B.push("CLOUDSDK_PROXY_ADDRESS=localhost"), B.push(`CLOUDSDK_PROXY_PORT=${A}`);
        B.push(`GRPC_PROXY=socks5h://localhost:${Q}`), B.push(`grpc_proxy=socks5h://localhost:${Q}`)
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
var a3A = L(() => {
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