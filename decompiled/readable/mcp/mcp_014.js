/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.014Z
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 14/29
 * Lines: 281002 - 282501 (1500 lines)
 * Original file: cli.js
 */

            else {
                let N = process.env.CLAUDE_CODE_SHELL_PREFIX || Q.command,
                    q = process.env.CLAUDE_CODE_SHELL_PREFIX ? [
                        [Q.command, ...Q.args].join(" ")
                    ] : Q.args;
                Z = new IA0({
                    command: N,
                    args: q,
                    env: {
                        ...process.env,
                        ...Q.env
                    },
                    stderr: "pipe"
                })
            }
            if (Q.type === "stdio" || !Q.type) {
                let N = Z;
                if (N.stderr) N.stderr.on("data", (q) => {
                    let R = q.toString().trim();
                    if (R) CI(A, `Server stderr: ${R}`)
                })
            }
            let Y = new sQ1({
                name: "claude-code",
                version: {
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://docs.claude.com/s/claude-code",
                    VERSION: "2.0.57",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                }.VERSION ?? "unknown"
            }, {
                capabilities: {
                    roots: {},
                    ...{}
                }
            });
            if (Q.type === "http") f0(A, "Client created, setting up request handler");
            if (Y.setRequestHandler(_e1, async () => {
                    return f0(A, "Received ListRoots request from server"), {
                        roots: [{
                            uri: `file://${pQ()}`
                        }]
                    }
                }), f0(A, `Starting connection with timeout of ${pB1()}ms`), Q.type === "http") {
                f0(A, `Testing basic HTTP connectivity to ${Q.url}`);
                try {
                    let N = new URL(Q.url);
                    if (f0(A, `Parsed URL: host=${N.hostname}, port=${N.port||"default"}, protocol=${N.protocol}`), N.hostname === "127.0.0.1" || N.hostname === "localhost") f0(A, `Using loopback address: ${N.hostname}`)
                } catch (N) {
                    f0(A, `Failed to parse URL: ${N}`)
                }
            }
            let J = Y.connect(Z),
                W = new Promise((N, q) => {
                    let R = setTimeout(() => {
                        let P = Date.now() - G;
                        f0(A, `Connection timeout triggered after ${P}ms (limit: ${pB1()}ms)`), q(Error(`Connection to MCP server "${A}" timed out after ${pB1()}ms`))
                    }, pB1());
                    J.then(() => {
                        clearTimeout(R)
                    }, (P) => {
                        clearTimeout(R)
                    })
                });
            try {
                await Promise.race([J, W]);
                let N = Date.now() - G;
                f0(A, `Successfully connected to ${Q.type} server in ${N}ms`)
            } catch (N) {
                let q = Date.now() - G;
                if (Q.type === "sse" && N instanceof Error) {
                    if (f0(A, `SSE Connection failed after ${q}ms: ${JSON.stringify({url:Q.url,error:N.message,errorType:N.constructor.name,stack:N.stack})}`), CI(A, N), N instanceof nH) return BA("tengu_mcp_server_needs_auth", {}), f0(A, "Authentication required for SSE server"), {
                        name: A,
                        type: "needs-auth",
                        config: Q
                    }
                } else if (Q.type === "http" && N instanceof Error) {
                    let R = N;
                    if (f0(A, `HTTP Connection failed after ${q}ms: ${N.message} (code: ${R.code||"none"}, errno: ${R.errno||"none"})`), CI(A, N), N instanceof nH) return BA("tengu_mcp_server_needs_auth", {}), f0(A, "Authentication required for HTTP server"), {
                        name: A,
                        type: "needs-auth",
                        config: Q
                    }
                } else if (Q.type === "sse-ide" || Q.type === "ws-ide") BA("tengu_mcp_ide_server_connection_failed", {});
                throw N
            }
            let X = Y.getServerCapabilities(),
                F = Y.getServerVersion(),
                V = Y.getInstructions();
            if (f0(A, `Connection established with capabilities: ${JSON.stringify({hasTools:!!X?.tools,hasPrompts:!!X?.prompts,hasResources:!!X?.resources,serverVersion:F||"unknown"})}`), Q.type === "sse-ide" || Q.type === "ws-ide") {
                BA("tengu_mcp_ide_server_connection_succeeded", {
                    serverVersion: F
                });
                try {
                    D62(Y)
                } catch (N) {
                    CI(A, `Failed to send ide_connected notification: ${N}`)
                }
            }
            let K = Date.now(),
                D = !1,
                H = Y.onerror,
                C = Y.onclose;
            Y.onerror = (N) => {
                let q = Date.now() - K;
                D = !0;
                let R = Q.type || "stdio";
                if (f0(A, `${R.toUpperCase()} connection dropped after ${Math.floor(q/1000)}s uptime`), N.message)
                    if (N.message.includes("ECONNRESET")) f0(A, "Connection reset - server may have crashed or restarted");
                    else if (N.message.includes("ETIMEDOUT")) f0(A, "Connection timeout - network issue or server unresponsive");
                else if (N.message.includes("ECONNREFUSED")) f0(A, "Connection refused - server may be down");
                else if (N.message.includes("EPIPE")) f0(A, "Broken pipe - server closed connection unexpectedly");
                else if (N.message.includes("EHOSTUNREACH")) f0(A, "Host unreachable - network connectivity issue");
                else if (N.message.includes("ESRCH")) f0(A, "Process not found - stdio server process terminated");
                else if (N.message.includes("spawn")) f0(A, "Failed to spawn process - check command and permissions");
                else f0(A, `Connection error: ${N.message}`);
                if (H) H(N)
            }, Y.onclose = () => {
                let N = Date.now() - K,
                    q = Q.type ?? "unknown";
                if (f0(A, `${q.toUpperCase()} connection closed after ${Math.floor(N/1000)}s (${D?"with errors":"cleanly"})`), C) C()
            };
            let E = async () => {
                if (Q.type === "stdio") try {
                    let q = Z.pid;
                    if (q) {
                        f0(A, "Sending SIGINT to MCP server process");
                        try {
                            process.kill(q, "SIGINT")
                        } catch (R) {
                            f0(A, `Error sending SIGINT: ${R}`);
                            return
                        }
                        await new Promise(async (R) => {
                            let P = !1,
                                y = setInterval(() => {
                                    try {
                                        process.kill(q, 0)
                                    } catch {
                                        if (!P) P = !0, clearInterval(y), clearTimeout(v), f0(A, "MCP server process exited cleanly"), R()
                                    }
                                }, 50),
                                v = setTimeout(() => {
                                    if (!P) P = !0, clearInterval(y), f0(A, "Cleanup timeout reached, stopping process monitoring"), R()
                                }, 600);
                            try {
                                if (await new Promise((x) => setTimeout(x, 100)), !P) {
                                    try {
                                        process.kill(q, 0), f0(A, "SIGINT failed, sending SIGTERM to MCP server process");
                                        try {
                                            process.kill(q, "SIGTERM")
                                        } catch (x) {
                                            f0(A, `Error sending SIGTERM: ${x}`), P = !0, clearInterval(y), clearTimeout(v), R();
                                            return
                                        }
                                    } catch {
                                        P = !0, clearInterval(y), clearTimeout(v), R();
                                        return
                                    }
                                    if (await new Promise((x) => setTimeout(x, 400)), !P) try {
                                        process.kill(q, 0), f0(A, "SIGTERM failed, sending SIGKILL to MCP server process");
                                        try {
                                            process.kill(q, "SIGKILL")
                                        } catch (x) {
                                            f0(A, `Error sending SIGKILL: ${x}`)
                                        }
                                    } catch {
                                        P = !0, clearInterval(y), clearTimeout(v), R()
                                    }
                                }
                                if (!P) P = !0, clearInterval(y), clearTimeout(v), R()
                            } catch {
                                if (!P) P = !0, clearInterval(y), clearTimeout(v), R()
                            }
                        })
                    }
                } catch (N) {
                    f0(A, `Error terminating process: ${N}`)
                }
                try {
                    await Y.close()
                } catch (N) {
                    f0(A, `Error closing client: ${N}`)
                }
            }, z = wG(E), w = async () => {
                z?.(), await E()
            };
            return BA("tengu_mcp_server_connection_succeeded", {}), {
                name: A,
                client: Y,
                type: "connected",
                capabilities: X ?? {},
                serverInfo: F,
                instructions: V,
                config: Q,
                cleanup: w
            }
        } catch (Z) {
            BA("tengu_mcp_server_connection_failed", {
                totalServers: B?.totalServers || 1,
                stdioCount: B?.stdioCount || (Q.type === "stdio" ? 1 : 0),
                sseCount: B?.sseCount || (Q.type === "sse" ? 1 : 0),
                httpCount: B?.httpCount || (Q.type === "http" ? 1 : 0),
                sseIdeCount: B?.sseIdeCount || (Q.type === "sse-ide" ? 1 : 0),
                wsIdeCount: B?.wsIdeCount || (Q.type === "ws-ide" ? 1 : 0),
                transportType: Q.type
            });
            let I = Date.now() - (G || 0);
            return f0(A, `Connection failed after ${I}ms: ${Z instanceof Error?Z.message:String(Z)}`), CI(A, `Connection failed: ${Z instanceof Error?Z.message:String(Z)}`), {
                name: A,
                type: "failed",
                config: Q
            }
        }
    }, f52);
    rA0 = t1(async (A) => {
        if (A.type !== "connected") return [];
        try {
            if (!A.capabilities?.tools) return [];
            let Q = await A.client.request({
                method: "tools/list"
            }, TLA);
            return gIA(Q.tools).map((G) => ({
                ...v62,
                name: `mcp__${v7(A.name)}__${v7(G.name)}`,
                originalMcpToolName: G.name,
                isMcp: !0,
                async description() {
                    return G.description ?? ""
                },
                async prompt() {
                    return G.description ?? ""
                },
                isConcurrencySafe() {
                    return G.annotations?.readOnlyHint ?? !1
                },
                isReadOnly() {
                    return G.annotations?.readOnlyHint ?? !1
                },
                isDestructive() {
                    return G.annotations?.destructiveHint ?? !1
                },
                isOpenWorld() {
                    return G.annotations?.openWorldHint ?? !1
                },
                inputJSONSchema: G.inputSchema,
                async call(Z, I, Y, J) {
                    let W = ZZ5(J),
                        X = W ? {
                            "claudecode/toolUseId": W
                        } : {};
                    return {
                        data: await m52({
                            client: A,
                            tool: G.name,
                            args: Z,
                            meta: X,
                            signal: I.abortController.signal
                        })
                    }
                },
                userFacingName() {
                    let Z = G.annotations?.title || G.name;
                    return `${A.name} - ${Z} (MCP)`
                }
            })).filter(QZ5)
        } catch (Q) {
            return CI(A.name, `Failed to fetch tools: ${Q instanceof Error?Q.message:String(Q)}`), []
        }
    }), h52 = t1(async (A) => {
        if (A.type !== "connected") return [];
        try {
            if (!A.capabilities?.resources) return [];
            let Q = await A.client.request({
                method: "resources/list"
            }, aAA);
            if (!Q.resources) return [];
            return Q.resources.map((B) => ({
                ...B,
                server: A.name
            }))
        } catch (Q) {
            return CI(A.name, `Failed to fetch resources: ${Q instanceof Error?Q.message:String(Q)}`), []
        }
    }), g52 = t1(async (A) => {
        if (A.type !== "connected") return [];
        let Q = A;
        try {
            if (!A.capabilities?.prompts) return [];
            let B = await A.client.request({
                method: "prompts/list"
            }, RLA);
            if (!B.prompts) return [];
            return gIA(B.prompts).map((Z) => {
                let I = Object.values(Z.arguments ?? {}).map((Y) => Y.name);
                return {
                    type: "prompt",
                    name: "mcp__" + v7(Q.name) + "__" + Z.name,
                    description: Z.description ?? "",
                    hasUserSpecifiedDescription: !!Z.description,
                    isEnabled: () => !0,
                    isHidden: !1,
                    isMcp: !0,
                    progressMessage: "running",
                    userFacingName() {
                        let Y = Z.title || Z.name;
                        return `${Q.name}:${Y} (MCP)`
                    },
                    argNames: I,
                    source: "mcp",
                    async getPromptForCommand(Y) {
                        let J = Y.split(" ");
                        try {
                            let W = await Q.client.getPrompt({
                                name: Z.name,
                                arguments: H3B(I, J)
                            });
                            return (await Promise.all(W.messages.map((F) => u52(F.content, A.name)))).flat()
                        } catch (W) {
                            throw CI(A.name, `Error running command '${Z.name}': ${W instanceof Error?W.message:String(W)}`), W
                        }
                    }
                }
            })
        } catch (B) {
            return CI(A.name, `Failed to fetch commands: ${B instanceof Error?B.message:String(B)}`), []
        }
    });
    iB1 = t1(async (A) => {
        return new Promise((Q) => {
            let B = 0,
                G = 0;
            if (B = Object.keys(A).length, B === 0) {
                Q({
                    clients: [],
                    tools: [],
                    commands: []
                });
                return
            }
            let Z = [],
                I = [],
                Y = [];
            oA0((J) => {
                if (Z.push(J.client), I.push(...J.tools), Y.push(...J.commands), G++, G >= B) {
                    let W = Y.reduce((X, F) => {
                        let V = F.name.length + (F.description ?? "").length + (F.argumentHint ?? "").length;
                        return X + V
                    }, 0);
                    BA("tengu_mcp_tools_commands_loaded", {
                        tools_count: I.length,
                        commands_count: Y.length,
                        commands_metadata_length: W
                    }), Q({
                        clients: Z,
                        tools: I,
                        commands: Y
                    })
                }
            }, A).catch((J) => {
                CI("prefetchAllMcpResources", `Failed to get MCP resources: ${J instanceof Error?J.message:String(J)}`), Q({
                    clients: [],
                    tools: [],
                    commands: []
                })
            })
        })
    })
});

function JZ5(A) {
    let Q = WZ5(A),
        B = YZ5.get(Q);
    return B !== void 0 ? B : IZ5
}

function WZ5(A) {
    let Q = aV(A);
    return (Q[Q.length - 1] || A).trim().split(/\s+/)[0] || ""
}

function c52(A, Q, B, G) {
    let I = JZ5(A)(Q, B, G);
    return {
        isError: I.isError,
        message: I.message
    }
}
var IZ5 = (A, Q, B) => ({
        isError: A !== 0,
        message: A !== 0 ? `Command failed with exit code ${A}` : void 0
    }),
    YZ5;
var p52 = L(() => {
    gU();
    YZ5 = new Map([
        ["grep", (A, Q, B) => ({
            isError: A >= 2,
            message: A === 1 ? "No matches found" : void 0
        })],
        ["rg", (A, Q, B) => ({
            isError: A >= 2,
            message: A === 1 ? "No matches found" : void 0
        })],
        ["find", (A, Q, B) => ({
            isError: A >= 2,
            message: A === 1 ? "Some directories were inaccessible" : void 0
        })],
        ["diff", (A, Q, B) => ({
            isError: A >= 2,
            message: A === 1 ? "Files differ" : void 0
        })],
        ["test", (A, Q, B) => ({
            isError: A >= 2,
            message: A === 1 ? "Condition is false" : void 0
        })],
        ["[", (A, Q, B) => ({
            isError: A >= 2,
            message: A === 1 ? "Condition is false" : void 0
        })]
    ])
});

function A10() {
    return {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null
    }
}

function r52(A) {
    G1A = A
}

function YG(A, Q = "") {
    let B = typeof A === "string" ? A : A.source,
        G = {
            replace: (Z, I) => {
                let Y = typeof I === "string" ? I : I.source;
                return Y = Y.replace(vE.caret, "$1"), B = B.replace(Z, Y), G
            },
            getRegex: () => {
                return new RegExp(B, Q)
            }
        };
    return G
}

function Pk(A, Q) {
    if (Q) {
        if (vE.escapeTest.test(A)) return A.replace(vE.escapeReplace, i52)
    } else if (vE.escapeTestNoEncode.test(A)) return A.replace(vE.escapeReplaceNoEncode, i52);
    return A
}

function n52(A) {
    try {
        A = encodeURI(A).replace(vE.percentDecode, "%")
    } catch {
        return null
    }
    return A
}

function a52(A, Q) {
    let B = A.replace(vE.findPipe, (I, Y, J) => {
            let W = !1,
                X = Y;
            while (--X >= 0 && J[X] === "\\") W = !W;
            if (W) return "|";
            else return " |"
        }),
        G = B.split(vE.splitPipe),
        Z = 0;
    if (!G[0].trim()) G.shift();
    if (G.length > 0 && !G.at(-1)?.trim()) G.pop();
    if (Q)
        if (G.length > Q) G.splice(Q);
        else
            while (G.length < Q) G.push("");
    for (; Z < G.length; Z++) G[Z] = G[Z].trim().replace(vE.slashPipe, "|");
    return G
}

function pLA(A, Q, B) {
    let G = A.length;
    if (G === 0) return "";
    let Z = 0;
    while (Z < G)
        if (A.charAt(G - Z - 1) === Q) Z++;
        else break;
    return A.slice(0, G - Z)
}

function mZ5(A, Q) {
    if (A.indexOf(Q[1]) === -1) return -1;
    let B = 0;
    for (let G = 0; G < A.length; G++)
        if (A[G] === "\\") G++;
        else if (A[G] === Q[0]) B++;
    else if (A[G] === Q[1]) {
        if (B--, B < 0) return G
    }
    return -1
}

function s52(A, Q, B, G, Z) {
    let I = Q.href,
        Y = Q.title || null,
        J = A[1].replace(Z.other.outputLinkReplace, "$1");
    if (A[0].charAt(0) !== "!") {
        G.state.inLink = !0;
        let W = {
            type: "link",
            raw: B,
            href: I,
            title: Y,
            text: J,
            tokens: G.inlineTokens(J)
        };
        return G.state.inLink = !1, W
    }
    return {
        type: "image",
        raw: B,
        href: I,
        title: Y,
        text: J
    }
}

function dZ5(A, Q, B) {
    let G = A.match(B.other.indentCodeCompensation);
    if (G === null) return Q;
    let Z = G[1];
    return Q.split(`
`).map((I) => {
        let Y = I.match(B.other.beginningSpace);
        if (Y === null) return I;
        let [J] = Y;
        if (J.length >= Z.length) return I.slice(Z.length);
        return I
    }).join(`
`)
}

class nLA {
    options;
    rules;
    lexer;
    constructor(A) {
        this.options = A || G1A
    }
    space(A) {
        let Q = this.rules.block.newline.exec(A);
        if (Q && Q[0].length > 0) return {
            type: "space",
            raw: Q[0]
        }
    }
    code(A) {
        let Q = this.rules.block.code.exec(A);
        if (Q) {
            let B = Q[0].replace(this.rules.other.codeRemoveIndent, "");
            return {
                type: "code",
                raw: Q[0],
                codeBlockStyle: "indented",
                text: !this.options.pedantic ? pLA(B, `
`) : B
            }
        }
    }
    fences(A) {
        let Q = this.rules.block.fences.exec(A);
        if (Q) {
            let B = Q[0],
                G = dZ5(B, Q[3] || "", this.rules);
            return {
                type: "code",
                raw: B,
                lang: Q[2] ? Q[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : Q[2],
                text: G
            }
        }
    }
    heading(A) {
        let Q = this.rules.block.heading.exec(A);
        if (Q) {
            let B = Q[2].trim();
            if (this.rules.other.endingHash.test(B)) {
                let G = pLA(B, "#");
                if (this.options.pedantic) B = G.trim();
                else if (!G || this.rules.other.endingSpaceChar.test(G)) B = G.trim()
            }
            return {
                type: "heading",
                raw: Q[0],
                depth: Q[1].length,
                text: B,
                tokens: this.lexer.inline(B)
            }
        }
    }
    hr(A) {
        let Q = this.rules.block.hr.exec(A);
        if (Q) return {
            type: "hr",
            raw: pLA(Q[0], `
`)
        }
    }
    blockquote(A) {
        let Q = this.rules.block.blockquote.exec(A);
        if (Q) {
            let B = pLA(Q[0], `
`).split(`
`),
                G = "",
                Z = "",
                I = [];
            while (B.length > 0) {
                let Y = !1,
                    J = [],
                    W;
                for (W = 0; W < B.length; W++)
                    if (this.rules.other.blockquoteStart.test(B[W])) J.push(B[W]), Y = !0;
                    else if (!Y) J.push(B[W]);
                else break;
                B = B.slice(W);
                let X = J.join(`
`),
                    F = X.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
                G = G ? `${G}
${X}` : X, Z = Z ? `${Z}
${F}` : F;
                let V = this.lexer.state.top;
                if (this.lexer.state.top = !0, this.lexer.blockTokens(F, I, !0), this.lexer.state.top = V, B.length === 0) break;
                let K = I.at(-1);
                if (K?.type === "code") break;
                else if (K?.type === "blockquote") {
                    let D = K,
                        H = D.raw + `
` + B.join(`
`),
                        C = this.blockquote(H);
                    I[I.length - 1] = C, G = G.substring(0, G.length - D.raw.length) + C.raw, Z = Z.substring(0, Z.length - D.text.length) + C.text;
                    break
                } else if (K?.type === "list") {
                    let D = K,
                        H = D.raw + `
` + B.join(`
`),
                        C = this.list(H);
                    I[I.length - 1] = C, G = G.substring(0, G.length - K.raw.length) + C.raw, Z = Z.substring(0, Z.length - D.raw.length) + C.raw, B = H.substring(I.at(-1).raw.length).split(`
`);
                    continue
                }
            }
            return {
                type: "blockquote",
                raw: G,
                tokens: I,
                text: Z
            }
        }
    }
    list(A) {
        let Q = this.rules.block.list.exec(A);
        if (Q) {
            let B = Q[1].trim(),
                G = B.length > 1,
                Z = {
                    type: "list",
                    raw: "",
                    ordered: G,
                    start: G ? +B.slice(0, -1) : "",
                    loose: !1,
                    items: []
                };
            if (B = G ? `\\d{1,9}\\${B.slice(-1)}` : `\\${B}`, this.options.pedantic) B = G ? B : "[*+-]";
            let I = this.rules.other.listItemRegex(B),
                Y = !1;
            while (A) {
                let W = !1,
                    X = "",
                    F = "";
                if (!(Q = I.exec(A))) break;
                if (this.rules.block.hr.test(A)) break;
                X = Q[0], A = A.substring(X.length);
                let V = Q[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (z) => " ".repeat(3 * z.length)),
                    K = A.split(`
`, 1)[0],
                    D = !V.trim(),
                    H = 0;
                if (this.options.pedantic) H = 2, F = V.trimStart();
                else if (D) H = Q[1].length + 1;
                else H = Q[2].search(this.rules.other.nonSpaceChar), H = H > 4 ? 1 : H, F = V.slice(H), H += Q[1].length;
                if (D && this.rules.other.blankLine.test(K)) X += K + `
`, A = A.substring(K.length + 1), W = !0;
                if (!W) {
                    let z = this.rules.other.nextBulletRegex(H),
                        w = this.rules.other.hrRegex(H),
                        N = this.rules.other.fencesBeginRegex(H),
                        q = this.rules.other.headingBeginRegex(H),
                        R = this.rules.other.htmlBeginRegex(H);
                    while (A) {
                        let P = A.split(`
`, 1)[0],
                            y;
                        if (K = P, this.options.pedantic) K = K.replace(this.rules.other.listReplaceNesting, "  "), y = K;
                        else y = K.replace(this.rules.other.tabCharGlobal, "    ");
                        if (N.test(K)) break;
                        if (q.test(K)) break;
                        if (R.test(K)) break;
                        if (z.test(K)) break;
                        if (w.test(K)) break;
                        if (y.search(this.rules.other.nonSpaceChar) >= H || !K.trim()) F += `
` + y.slice(H);
                        else {
                            if (D) break;
                            if (V.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4) break;
                            if (N.test(V)) break;
                            if (q.test(V)) break;
                            if (w.test(V)) break;
                            F += `
` + K
                        }
                        if (!D && !K.trim()) D = !0;
                        X += P + `
`, A = A.substring(P.length + 1), V = y.slice(H)
                    }
                }
                if (!Z.loose) {
                    if (Y) Z.loose = !0;
                    else if (this.rules.other.doubleBlankLine.test(X)) Y = !0
                }
                let C = null,
                    E;
                if (this.options.gfm) {
                    if (C = this.rules.other.listIsTask.exec(F), C) E = C[0] !== "[ ] ", F = F.replace(this.rules.other.listReplaceTask, "")
                }
                Z.items.push({
                    type: "list_item",
                    raw: X,
                    task: !!C,
                    checked: E,
                    loose: !1,
                    text: F,
                    tokens: []
                }), Z.raw += X
            }
            let J = Z.items.at(-1);
            if (J) J.raw = J.raw.trimEnd(), J.text = J.text.trimEnd();
            else return;
            Z.raw = Z.raw.trimEnd();
            for (let W = 0; W < Z.items.length; W++)
                if (this.lexer.state.top = !1, Z.items[W].tokens = this.lexer.blockTokens(Z.items[W].text, []), !Z.loose) {
                    let X = Z.items[W].tokens.filter((V) => V.type === "space"),
                        F = X.length > 0 && X.some((V) => this.rules.other.anyLine.test(V.raw));
                    Z.loose = F
                } if (Z.loose)
                for (let W = 0; W < Z.items.length; W++) Z.items[W].loose = !0;
            return Z
        }
    }
    html(A) {
        let Q = this.rules.block.html.exec(A);
        if (Q) return {
            type: "html",
            block: !0,
            raw: Q[0],
            pre: Q[1] === "pre" || Q[1] === "script" || Q[1] === "style",
            text: Q[0]
        }
    }
    def(A) {
        let Q = this.rules.block.def.exec(A);
        if (Q) {
            let B = Q[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "),
                G = Q[2] ? Q[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "",
                Z = Q[3] ? Q[3].substring(1, Q[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : Q[3];
            return {
                type: "def",
                tag: B,
                raw: Q[0],
                href: G,
                title: Z
            }
        }
    }
    table(A) {
        let Q = this.rules.block.table.exec(A);
        if (!Q) return;
        if (!this.rules.other.tableDelimiter.test(Q[2])) return;
        let B = a52(Q[1]),
            G = Q[2].replace(this.rules.other.tableAlignChars, "").split("|"),
            Z = Q[3]?.trim() ? Q[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [],
            I = {
                type: "table",
                raw: Q[0],
                header: [],
                align: [],
                rows: []
            };
        if (B.length !== G.length) return;
        for (let Y of G)
            if (this.rules.other.tableAlignRight.test(Y)) I.align.push("right");
            else if (this.rules.other.tableAlignCenter.test(Y)) I.align.push("center");
        else if (this.rules.other.tableAlignLeft.test(Y)) I.align.push("left");
        else I.align.push(null);
        for (let Y = 0; Y < B.length; Y++) I.header.push({
            text: B[Y],
            tokens: this.lexer.inline(B[Y]),
            header: !0,
            align: I.align[Y]
        });
        for (let Y of Z) I.rows.push(a52(Y, I.header.length).map((J, W) => {
            return {
                text: J,
                tokens: this.lexer.inline(J),
                header: !1,
                align: I.align[W]
            }
        }));
        return I
    }
    lheading(A) {
        let Q = this.rules.block.lheading.exec(A);
        if (Q) return {
            type: "heading",
            raw: Q[0],
            depth: Q[2].charAt(0) === "=" ? 1 : 2,
            text: Q[1],
            tokens: this.lexer.inline(Q[1])
        }
    }
    paragraph(A) {
        let Q = this.rules.block.paragraph.exec(A);
        if (Q) {
            let B = Q[1].charAt(Q[1].length - 1) === `
` ? Q[1].slice(0, -1) : Q[1];
            return {
                type: "paragraph",
                raw: Q[0],
                text: B,
                tokens: this.lexer.inline(B)
            }
        }
    }
    text(A) {
        let Q = this.rules.block.text.exec(A);
        if (Q) return {
            type: "text",
            raw: Q[0],
            text: Q[0],
            tokens: this.lexer.inline(Q[0])
        }
    }
    escape(A) {
        let Q = this.rules.inline.escape.exec(A);
        if (Q) return {
            type: "escape",
            raw: Q[0],
            text: Q[1]
        }
    }
    tag(A) {
        let Q = this.rules.inline.tag.exec(A);
        if (Q) {
            if (!this.lexer.state.inLink && this.rules.other.startATag.test(Q[0])) this.lexer.state.inLink = !0;
            else if (this.lexer.state.inLink && this.rules.other.endATag.test(Q[0])) this.lexer.state.inLink = !1;
            if (!this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(Q[0])) this.lexer.state.inRawBlock = !0;
            else if (this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(Q[0])) this.lexer.state.inRawBlock = !1;
            return {
                type: "html",
                raw: Q[0],
                inLink: this.lexer.state.inLink,
                inRawBlock: this.lexer.state.inRawBlock,
                block: !1,
                text: Q[0]
            }
        }
    }
    link(A) {
        let Q = this.rules.inline.link.exec(A);
        if (Q) {
            let B = Q[2].trim();
            if (!this.options.pedantic && this.rules.other.startAngleBracket.test(B)) {
                if (!this.rules.other.endAngleBracket.test(B)) return;
                let I = pLA(B.slice(0, -1), "\\");
                if ((B.length - I.length) % 2 === 0) return
            } else {
                let I = mZ5(Q[2], "()");
                if (I > -1) {
                    let J = (Q[0].indexOf("!") === 0 ? 5 : 4) + Q[1].length + I;
                    Q[2] = Q[2].substring(0, I), Q[0] = Q[0].substring(0, J).trim(), Q[3] = ""
                }
            }
            let G = Q[2],
                Z = "";
            if (this.options.pedantic) {
                let I = this.rules.other.pedanticHrefTitle.exec(G);
                if (I) G = I[1], Z = I[3]
            } else Z = Q[3] ? Q[3].slice(1, -1) : "";
            if (G = G.trim(), this.rules.other.startAngleBracket.test(G))
                if (this.options.pedantic && !this.rules.other.endAngleBracket.test(B)) G = G.slice(1);
                else G = G.slice(1, -1);
            return s52(Q, {
                href: G ? G.replace(this.rules.inline.anyPunctuation, "$1") : G,
                title: Z ? Z.replace(this.rules.inline.anyPunctuation, "$1") : Z
            }, Q[0], this.lexer, this.rules)
        }
    }
    reflink(A, Q) {
        let B;
        if ((B = this.rules.inline.reflink.exec(A)) || (B = this.rules.inline.nolink.exec(A))) {
            let G = (B[2] || B[1]).replace(this.rules.other.multipleSpaceGlobal, " "),
                Z = Q[G.toLowerCase()];
            if (!Z) {
                let I = B[0].charAt(0);
                return {
                    type: "text",
                    raw: I,
                    text: I
                }
            }
            return s52(B, Z, B[0], this.lexer, this.rules)
        }
    }
    emStrong(A, Q, B = "") {
        let G = this.rules.inline.emStrongLDelim.exec(A);
        if (!G) return;
        if (G[3] && B.match(this.rules.other.unicodeAlphaNumeric)) return;
        if (!(G[1] || G[2]) || !B || this.rules.inline.punctuation.exec(B)) {
            let I = [...G[0]].length - 1,
                Y, J, W = I,
                X = 0,
                F = G[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
            F.lastIndex = 0, Q = Q.slice(-1 * A.length + I);
            while ((G = F.exec(Q)) != null) {
                if (Y = G[1] || G[2] || G[3] || G[4] || G[5] || G[6], !Y) continue;
                if (J = [...Y].length, G[3] || G[4]) {
                    W += J;
                    continue
                } else if (G[5] || G[6]) {
                    if (I % 3 && !((I + J) % 3)) {
                        X += J;
                        continue
                    }
                }
                if (W -= J, W > 0) continue;
                J = Math.min(J, J + W + X);
                let V = [...G[0]][0].length,
                    K = A.slice(0, I + G.index + V + J);
                if (Math.min(I, J) % 2) {
                    let H = K.slice(1, -1);
                    return {
                        type: "em",
                        raw: K,
                        text: H,
                        tokens: this.lexer.inlineTokens(H)
                    }
                }
                let D = K.slice(2, -2);
                return {
                    type: "strong",
                    raw: K,
                    text: D,
                    tokens: this.lexer.inlineTokens(D)
                }
            }
        }
    }
    codespan(A) {
        let Q = this.rules.inline.code.exec(A);
        if (Q) {
            let B = Q[2].replace(this.rules.other.newLineCharGlobal, " "),
                G = this.rules.other.nonSpaceChar.test(B),
                Z = this.rules.other.startingSpaceChar.test(B) && this.rules.other.endingSpaceChar.test(B);
            if (G && Z) B = B.substring(1, B.length - 1);
            return {
                type: "codespan",
                raw: Q[0],
                text: B
            }
        }
    }
    br(A) {
        let Q = this.rules.inline.br.exec(A);
        if (Q) return {
            type: "br",
            raw: Q[0]
        }
    }
    del(A) {
        let Q = this.rules.inline.del.exec(A);
        if (Q) return {
            type: "del",
            raw: Q[0],
            text: Q[2],
            tokens: this.lexer.inlineTokens(Q[2])
        }
    }
    autolink(A) {
        let Q = this.rules.inline.autolink.exec(A);
        if (Q) {
            let B, G;
            if (Q[2] === "@") B = Q[1], G = "mailto:" + B;
            else B = Q[1], G = B;
            return {
                type: "link",
                raw: Q[0],
                text: B,
                href: G,
                tokens: [{
                    type: "text",
                    raw: B,
                    text: B
                }]
            }
        }
    }
    url(A) {
        let Q;
        if (Q = this.rules.inline.url.exec(A)) {
            let B, G;
            if (Q[2] === "@") B = Q[0], G = "mailto:" + B;
            else {
                let Z;
                do Z = Q[0], Q[0] = this.rules.inline._backpedal.exec(Q[0])?.[0] ?? ""; while (Z !== Q[0]);
                if (B = Q[0], Q[1] === "www.") G = "http://" + Q[0];
                else G = Q[0]
            }
            return {
                type: "link",
                raw: Q[0],
                text: B,
                href: G,
                tokens: [{
                    type: "text",
                    raw: B,
                    text: B
                }]
            }
        }
    }
    inlineText(A) {
        let Q = this.rules.inline.text.exec(A);
        if (Q) {
            let B = this.lexer.state.inRawBlock;
            return {
                type: "text",
                raw: Q[0],
                text: Q[0],
                escaped: B
            }
        }
    }
}

class bE {
    tokens;
    options;
    state;
    tokenizer;
    inlineQueue;
    constructor(A) {
        this.tokens = [], this.tokens.links = Object.create(null), this.options = A || G1A, this.options.tokenizer = this.options.tokenizer || new nLA, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
            inLink: !1,
            inRawBlock: !1,
            top: !0
        };
        let Q = {
            other: vE,
            block: nB1.normal,
            inline: cLA.normal
        };
        if (this.options.pedantic) Q.block = nB1.pedantic, Q.inline = cLA.pedantic;
        else if (this.options.gfm)
            if (Q.block = nB1.gfm, this.options.breaks) Q.inline = cLA.breaks;
            else Q.inline = cLA.gfm;
        this.tokenizer.rules = Q
    }
    static get rules() {
        return {
            block: nB1,
            inline: cLA
        }
    }
    static lex(A, Q) {
        return new bE(Q).lex(A)
    }
    static lexInline(A, Q) {
        return new bE(Q).inlineTokens(A)
    }
    lex(A) {
        A = A.replace(vE.carriageReturn, `
`), this.blockTokens(A, this.tokens);
        for (let Q = 0; Q < this.inlineQueue.length; Q++) {
            let B = this.inlineQueue[Q];
            this.inlineTokens(B.src, B.tokens)
        }
        return this.inlineQueue = [], this.tokens
    }
    blockTokens(A, Q = [], B = !1) {
        if (this.options.pedantic) A = A.replace(vE.tabCharGlobal, "    ").replace(vE.spaceLine, "");
        while (A) {
            let G;
            if (this.options.extensions?.block?.some((I) => {
                    if (G = I.call({
                            lexer: this
                        }, A, Q)) return A = A.substring(G.raw.length), Q.push(G), !0;
                    return !1
                })) continue;
            if (G = this.tokenizer.space(A)) {
                A = A.substring(G.raw.length);
                let I = Q.at(-1);
                if (G.raw.length === 1 && I !== void 0) I.raw += `
`;
                else Q.push(G);
                continue
            }
            if (G = this.tokenizer.code(A)) {
                A = A.substring(G.raw.length);
                let I = Q.at(-1);
                if (I?.type === "paragraph" || I?.type === "text") I.raw += `
` + G.raw, I.text += `
` + G.text, this.inlineQueue.at(-1).src = I.text;
                else Q.push(G);
                continue
            }
            if (G = this.tokenizer.fences(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            if (G = this.tokenizer.heading(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            if (G = this.tokenizer.hr(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            if (G = this.tokenizer.blockquote(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            if (G = this.tokenizer.list(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            if (G = this.tokenizer.html(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            if (G = this.tokenizer.def(A)) {
                A = A.substring(G.raw.length);
                let I = Q.at(-1);
                if (I?.type === "paragraph" || I?.type === "text") I.raw += `
` + G.raw, I.text += `
` + G.raw, this.inlineQueue.at(-1).src = I.text;
                else if (!this.tokens.links[G.tag]) this.tokens.links[G.tag] = {
                    href: G.href,
                    title: G.title
                };
                continue
            }
            if (G = this.tokenizer.table(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            if (G = this.tokenizer.lheading(A)) {
                A = A.substring(G.raw.length), Q.push(G);
                continue
            }
            let Z = A;
            if (this.options.extensions?.startBlock) {
                let I = 1 / 0,
                    Y = A.slice(1),
                    J;
                if (this.options.extensions.startBlock.forEach((W) => {
                        if (J = W.call({
                                lexer: this
                            }, Y), typeof J === "number" && J >= 0) I = Math.min(I, J)
                    }), I < 1 / 0 && I >= 0) Z = A.substring(0, I + 1)
            }
            if (this.state.top && (G = this.tokenizer.paragraph(Z))) {
                let I = Q.at(-1);
                if (B && I?.type === "paragraph") I.raw += `
` + G.raw, I.text += `
` + G.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = I.text;
                else Q.push(G);
                B = Z.length !== A.length, A = A.substring(G.raw.length);
                continue
            }
            if (G = this.tokenizer.text(A)) {
                A = A.substring(G.raw.length);
                let I = Q.at(-1);
                if (I?.type === "text") I.raw += `
` + G.raw, I.text += `
` + G.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = I.text;
                else Q.push(G);
                continue
            }
            if (A) {
                let I = "Infinite loop on byte: " + A.charCodeAt(0);
                if (this.options.silent) {
                    console.error(I);
                    break
                } else throw Error(I)
            }
        }
        return this.state.top = !0, Q
    }
    inline(A, Q = []) {
        return this.inlineQueue.push({
            src: A,
            tokens: Q
        }), Q
    }
    inlineTokens(A, Q = []) {
        let B = A,
            G = null;
        if (this.tokens.links) {
            let Y = Object.keys(this.tokens.links);
            if (Y.length > 0) {
                while ((G = this.tokenizer.rules.inline.reflinkSearch.exec(B)) != null)
                    if (Y.includes(G[0].slice(G[0].lastIndexOf("[") + 1, -1))) B = B.slice(0, G.index) + "[" + "a".repeat(G[0].length - 2) + "]" + B.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex)
            }
        }
        while ((G = this.tokenizer.rules.inline.blockSkip.exec(B)) != null) B = B.slice(0, G.index) + "[" + "a".repeat(G[0].length - 2) + "]" + B.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        while ((G = this.tokenizer.rules.inline.anyPunctuation.exec(B)) != null) B = B.slice(0, G.index) + "++" + B.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
        let Z = !1,
            I = "";
        while (A) {
            if (!Z) I = "";
            Z = !1;
            let Y;
            if (this.options.extensions?.inline?.some((W) => {
                    if (Y = W.call({
                            lexer: this
                        }, A, Q)) return A = A.substring(Y.raw.length), Q.push(Y), !0;
                    return !1
                })) continue;
            if (Y = this.tokenizer.escape(A)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.tag(A)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.link(A)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.reflink(A, this.tokens.links)) {
                A = A.substring(Y.raw.length);
                let W = Q.at(-1);
                if (Y.type === "text" && W?.type === "text") W.raw += Y.raw, W.text += Y.text;
                else Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.emStrong(A, B, I)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.codespan(A)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.br(A)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.del(A)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (Y = this.tokenizer.autolink(A)) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            if (!this.state.inLink && (Y = this.tokenizer.url(A))) {
                A = A.substring(Y.raw.length), Q.push(Y);
                continue
            }
            let J = A;
            if (this.options.extensions?.startInline) {
                let W = 1 / 0,
                    X = A.slice(1),
                    F;
                if (this.options.extensions.startInline.forEach((V) => {
                        if (F = V.call({
                                lexer: this
                            }, X), typeof F === "number" && F >= 0) W = Math.min(W, F)
                    }), W < 1 / 0 && W >= 0) J = A.substring(0, W + 1)
            }
            if (Y = this.tokenizer.inlineText(J)) {
                if (A = A.substring(Y.raw.length), Y.raw.slice(-1) !== "_") I = Y.raw.slice(-1);
                Z = !0;
                let W = Q.at(-1);
                if (W?.type === "text") W.raw += Y.raw, W.text += Y.text;
                else Q.push(Y);
                continue
            }
            if (A) {
                let W = "Infinite loop on byte: " + A.charCodeAt(0);
                if (this.options.silent) {
                    console.error(W);
                    break
                } else throw Error(W)
            }
        }
        return Q
    }
}

class aLA {
    options;
    parser;
    constructor(A) {
        this.options = A || G1A
    }
    space(A) {
        return ""
    }
    code({
        text: A,
        lang: Q,
        escaped: B
    }) {
        let G = (Q || "").match(vE.notSpaceStart)?.[0],
            Z = A.replace(vE.endingNewline, "") + `
`;
        if (!G) return "<pre><code>" + (B ? Z : Pk(Z, !0)) + `</code></pre>
`;
        return '<pre><code class="language-' + Pk(G) + '">' + (B ? Z : Pk(Z, !0)) + `</code></pre>
`
    }
    blockquote({
        tokens: A
    }) {
        return `<blockquote>
${this.parser.parse(A)}</blockquote>
`
    }
    html({
        text: A
    }) {
        return A
    }
    heading({
        tokens: A,
        depth: Q
    }) {
        return `<h${Q}>${this.parser.parseInline(A)}</h${Q}>
`
    }
    hr(A) {
        return `<hr>
`
    }
    list(A) {
        let {
            ordered: Q,
            start: B
        } = A, G = "";
        for (let Y = 0; Y < A.items.length; Y++) {
            let J = A.items[Y];
            G += this.listitem(J)
        }
        let Z = Q ? "ol" : "ul",
            I = Q && B !== 1 ? ' start="' + B + '"' : "";
        return "<" + Z + I + `>
` + G + "</" + Z + `>
`
    }
    listitem(A) {
        let Q = "";
        if (A.task) {
            let B = this.checkbox({
                checked: !!A.checked
            });
            if (A.loose)
                if (A.tokens[0]?.type === "paragraph") {
                    if (A.tokens[0].text = B + " " + A.tokens[0].text, A.tokens[0].tokens && A.tokens[0].tokens.length > 0 && A.tokens[0].tokens[0].type === "text") A.tokens[0].tokens[0].text = B + " " + Pk(A.tokens[0].tokens[0].text), A.tokens[0].tokens[0].escaped = !0
                } else A.tokens.unshift({
                    type: "text",
                    raw: B + " ",
                    text: B + " ",
                    escaped: !0
                });
            else Q += B + " "
        }
        return Q += this.parser.parse(A.tokens, !!A.loose), `<li>${Q}</li>
`
    }
    checkbox({
        checked: A
    }) {
        return "<input " + (A ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
    }
    paragraph({
        tokens: A
    }) {
        return `<p>${this.parser.parseInline(A)}</p>
`
    }
    table(A) {
        let Q = "",
            B = "";
        for (let Z = 0; Z < A.header.length; Z++) B += this.tablecell(A.header[Z]);
        Q += this.tablerow({
            text: B
        });
        let G = "";
        for (let Z = 0; Z < A.rows.length; Z++) {
            let I = A.rows[Z];
            B = "";
            for (let Y = 0; Y < I.length; Y++) B += this.tablecell(I[Y]);
            G += this.tablerow({
                text: B
            })
        }
        if (G) G = `<tbody>${G}</tbody>`;
        return `<table>
<thead>
` + Q + `</thead>
` + G + `</table>
`
    }
    tablerow({
        text: A
    }) {
        return `<tr>
${A}</tr>
`
    }
    tablecell(A) {
        let Q = this.parser.parseInline(A.tokens),
            B = A.header ? "th" : "td";
        return (A.align ? `<${B} align="${A.align}">` : `<${B}>`) + Q + `</${B}>
`
    }
    strong({
        tokens: A
    }) {
        return `<strong>${this.parser.parseInline(A)}</strong>`
    }
    em({
        tokens: A
    }) {
        return `<em>${this.parser.parseInline(A)}</em>`
    }
    codespan({
        text: A
    }) {
        return `<code>${Pk(A,!0)}</code>`
    }
    br(A) {
        return "<br>"
    }
    del({
        tokens: A
    }) {
        return `<del>${this.parser.parseInline(A)}</del>`
    }
    link({
        href: A,
        title: Q,
        tokens: B
    }) {
        let G = this.parser.parseInline(B),
            Z = n52(A);
        if (Z === null) return G;
        A = Z;
        let I = '<a href="' + A + '"';
        if (Q) I += ' title="' + Pk(Q) + '"';
        return I += ">" + G + "</a>", I
    }
    image({
        href: A,
        title: Q,
        text: B
    }) {
        let G = n52(A);
        if (G === null) return Pk(B);
        A = G;
        let Z = `<img src="${A}" alt="${B}"`;