/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: commands_008.js
 * 处理时间: 2025-12-09T03:41:37.145Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量索引 =====================
 * aA       (  7x) BASE64_CHARS = "ABCDEF...+/"
 * MGB      (  1x) getRepoHash() - Get repository hash
 * GA       (  1x) esmImport(module) - ESM import
 * ======================================================
 */

/**
 * Claude Code Decompiled
 * Category: commands
 * File: 8/8
 * Lines: 448674 - 450173 (1500 lines)
 * Original file: cli.js
 */

            for (let s1 of N1) {
                let p0 = null,
                    HQ = [],
                    ZB = S7(s1);
                if (ZB) {
                    let rQ = uzA({
                        configObject: ZB,
                        filePath: "command line",
                        expandVars: !0,
                        scope: "dynamic"
                    });
                    if (rQ.config) p0 = rQ.config.mcpServers;
                    else HQ = rQ.errors
                } else {
                    let rQ = ZD0(s1),
                        PB = p3A({
                            filePath: rQ,
                            expandVars: !0,
                            scope: "dynamic"
                        });
                    if (PB.config) p0 = PB.config.mcpServers;
                    else HQ = PB.errors
                }
                if (HQ.length > 0) J0.push(...HQ);
                else if (p0) Z0 = {
                    ...Z0,
                    ...p0
                }
            }
            if (J0.length > 0) {
                let s1 = J0.map((p0) => `${p0.path?p0.path+": ":""}${p0.message}`).join(`
`);
                throw Error(`Invalid MCP configuration:
${s1}`)
            }
            if (Object.keys(Z0).length > 0) {
                let s1 = vo(Z0, (p0) => ({
                    ...p0,
                    scope: "dynamic"
                }));
                qA = {
                    ...qA,
                    ...s1
                }
            }
        }
        let {
            toolPermissionContext: DA,
            warnings: yA
        } = NJ9({
            allowedToolsCli: D,
            disallowedToolsCli: H,
            baseToolsCli: K,
            permissionMode: sA,
            allowDangerouslySkipPermissions: V,
            addDirs: z
        });
        yA.forEach((N1) => {
            console.error(N1)
        }), y22();
        let {
            servers: rA
        } = o ? {
            servers: {}
        } : await $_(), K1 = {
            ...rA,
            ...qA
        }, WA = {}, XA = {};
        for (let [N1, Z0] of Object.entries(K1)) {
            let J0 = Z0;
            if (J0.type === "sdk") WA[N1] = J0;
            else XA[N1] = J0
        }
        if (x && x !== "text" && x !== "stream-json") console.error(`Error: Invalid input format "${x}".`), process.exit(1);
        if (x === "stream-json" && v !== "stream-json") console.error("Error: --input-format=stream-json requires output-format=stream-json."), process.exit(1);
        if (QA) {
            if (x !== "stream-json" || v !== "stream-json") console.error("Error: --sdk-url requires both --input-format=stream-json and --output-format=stream-json."), process.exit(1)
        }
        if (J.replayUserMessages) {
            if (x !== "stream-json" || v !== "stream-json") console.error("Error: --replay-user-messages requires both --input-format=stream-json and --output-format=stream-json."), process.exit(1)
        }
        if (R) {
            if (!wA || v !== "stream-json") qj("Error: --include-partial-messages requires --print and --output-format=stream-json."), process.exit(1)
        }
        if (K.length > 0 && !wA) qj("Error: --tools can only be used with --print mode."), process.exit(1);
        let zA = await Wh3(Y || "", x ?? "text"),
            $A = JC(DA),
            LA;
        if (UJ9({
                isNonInteractiveSession: wA
            }) && J.jsonSchema) LA = JSON.parse(J.jsonSchema);
        if (LA) {
            let N1 = aI1(LA);
            if (N1) $A = [...$A, N1], BA("tengu_structured_output_enabled", {
                schema_property_count: Object.keys(LA.properties || {}).length,
                has_required_fields: Boolean(LA.required)
            });
            else BA("tengu_structured_output_failure", {
                error: "Invalid JSON schema"
            })
        }
        await jJ1(GD0(), sA, V, l, q ? Y$(q) : void 0);
        let TA = J.model === "default" ? et() : J.model,
            eA = w === "default" ? et() : w,
            [aA, I1] = await Promise.all([aE(), Rb2()]),
            w1 = [];
        if (y) try {
            let N1 = S7(y);
            if (N1) w1 = b51(N1, "flagSettings")
        } catch (N1) {
            e(N1 instanceof Error ? N1 : Error(String(N1)))
        }
        let PA = [...I1.allAgents, ...w1],
            B1 = {
                ...I1,
                allAgents: PA,
                activeAgents: My(PA)
            };
        if (!wA) {
            if (await eU9(sA, V, aA) && Y?.trim().toLowerCase() === "/login") Y = ""
        }
        if (process.exitCode !== void 0) {
            g("Graceful shutdown initiated, skipping further initialization");
            return
        }
        xZ2().catch((N1) => e(N1)), pOB(), L69(), nU9(), dz9(H5());
        let Q0 = iB1(XA),
            b1 = zA || wA ? await Q0 : {
                clients: [],
                tools: [],
                commands: []
            },
            Y0 = b1.clients,
            x0 = b1.tools,
            u0 = b1.commands,
            k1;
        if (NGA()) k1 = new BD0(Y0, x0), k1.start().then(({
            url: N1
        }) => {
            let Z0 = k1.getSecret();
            KJ1({
                url: N1,
                key: Z0
            }), g(`[MCP CLI Endpoint] Started at ${N1}`)
        }).catch((N1) => {
            e(N1 instanceof Error ? N1 : Error(String(N1)))
        }), wG(async () => {
            await k1?.stop()
        });
        if (R6("info", "started"), wG(async () => {
                R6("info", "exited")
            }), Fh3({
                hasInitialPrompt: Boolean(Y),
                hasStdin: Boolean(zA),
                verbose: p,
                debug: W,
                debugToStderr: X,
                print: u ?? !1,
                outputFormat: v ?? "text",
                inputFormat: x ?? "text",
                numAllowedTools: D.length,
                numDisallowedTools: H.length,
                mcpClientCount: Object.keys(K1).length,
                worktree: l,
                skipWebFetchPreflight: kp().skipWebFetchPreflight,
                githubActionInputs: process.env.GITHUB_ACTION_INPUTS,
                dangerouslySkipPermissionsPassed: F ?? !1,
                modeIsBypass: sA === "bypassPermissions",
                allowDangerouslySkipPermissionsPassed: V,
                systemPromptFlag: KA ? J.systemPromptFile ? "file" : "flag" : void 0,
                appendSystemPromptFlag: SA ? J.appendSystemPromptFile ? "file" : "flag" : void 0
            }), Pv2(XA, DA), A91(null, "initialization"), rf3(), await z59(), zs(TA), wA) {
            if (v === "stream-json" || v === "json") mE0(!0);
            xK0();
            let N1 = aA.filter((J0) => J0.type === "prompt" && !J0.disableNonInteractive || J0.type === "local" && J0.supportsNonInteractive),
                Z0 = _p();
            if (Z0 = {
                    ...Z0,
                    mcp: {
                        ...Z0.mcp,
                        clients: Y0,
                        commands: u0,
                        tools: x0
                    },
                    toolPermissionContext: DA
                }, DA.mode === "bypassPermissions" || V) MJ9(DA);
            jU9(zA, async () => Z0, (J0) => {
                let s1 = Z0;
                Z0 = J0(Z0), ng({
                    newState: Z0,
                    oldState: s1
                })
            }, N1, $A, WA, B1.activeAgents, {
                continue: J.continue,
                resume: J.resume,
                verbose: p,
                outputFormat: v,
                jsonSchema: LA,
                permissionPromptToolName: J.permissionPromptTool,
                allowedTools: D,
                maxThinkingTokens: J.maxThinkingTokens,
                maxTurns: J.maxTurns,
                maxBudgetUsd: J.maxBudgetUsd,
                systemPrompt: KA,
                appendSystemPrompt: SA,
                userSpecifiedModel: TA,
                fallbackModel: eA,
                teleport: IA,
                sdkUrl: QA,
                replayUserMessages: J.replayUserMessages,
                includePartialMessages: R,
                forkSession: J.forkSession || !1,
                resumeSessionAt: J.resumeSessionAt || void 0,
                enableAuthStatus: J.enableAuthStatus
            });
            return
        }
        let T0 = Jh3(!1);
        ij2(), BA("tengu_startup_manual_model_config", {
            cli_flag: J.model,
            env_var: process.env.ANTHROPIC_MODEL,
            settings_file: (kp() || {}).model,
            subscriptionType: x4()
        });
        let fQ = J.model || process.env.ANTHROPIC_MODEL || kp().model;
        if (AB() && !bw() && fQ !== void 0 && UT(fQ)) console.error(oA.yellow("Your Pro plan doesn't include Opus in Claude Code. You can turn on /extra-usage or /upgrade to Max to access it. The current model is now Sonnet."));
        WE0(GrA() || null);
        let F1 = G0(),
            R1 = {
                settings: kp(),
                backgroundTasks: {},
                verbose: p ?? L1().verbose ?? !1,
                mainLoopModel: e_A(),
                mainLoopModelForSession: null,
                showExpandedTodos: L1().showExpandedTodos ?? !1,
                toolPermissionContext: DA,
                agentDefinitions: B1,
                mcp: {
                    clients: [],
                    tools: [],
                    commands: [],
                    resources: {}
                },
                plugins: {
                    enabled: [],
                    disabled: [],
                    commands: [],
                    agents: [],
                    errors: [],
                    installationStatus: {
                        marketplaces: [],
                        plugins: []
                    }
                },
                statusLineText: void 0,
                notifications: {
                    current: null,
                    queue: NA ? [{
                        key: "permission-mode-notification",
                        text: NA,
                        priority: "high"
                    }] : []
                },
                elicitation: {
                    queue: []
                },
                todos: {
                    [F1]: Eh(F1)
                },
                fileHistory: {
                    snapshots: [],
                    trackedFiles: new Set
                },
                thinkingEnabled: IoA(),
                feedbackSurvey: {
                    timeLastShown: null,
                    submitCountAtLastAppearance: null
                },
                sessionHooks: {},
                promptSuggestion: {
                    text: null,
                    shownAt: 0
                },
                queuedCommands: []
            };
        if (tf3(), J.continue) try {
            BA("tengu_continue", {});
            let N1 = await qi(void 0, void 0);
            if (!N1) console.error("No conversation found to continue"), process.exit(1);
            if (!J.forkSession) {
                if (N1.sessionId) FR(N1.sessionId), await Zx()
            }
            await Z3(c5.default.createElement(N7, {
                initialState: R1,
                onChangeAppState: ng
            }, c5.default.createElement(sXA, {
                debug: W || X,
                initialPrompt: zA,
                commands: [...aA, ...u0],
                initialTools: x0,
                initialMessages: N1.messages,
                initialFileHistorySnapshots: N1.fileHistorySnapshots,
                mcpClients: Y0,
                dynamicMcpConfig: qA,
                autoConnectIdeFlag: N,
                strictMcpConfig: o,
                appendSystemPrompt: SA
            })), T0)
        } catch (N1) {
            e(N1 instanceof Error ? N1 : Error(String(N1))), process.exit(1)
        } else if (J.resume || IA || HA) {
            let N1 = null,
                Z0 = void 0,
                J0 = Y$(J.resume);
            if (HA) {
                BA("tengu_remote_create_session", {
                    description_length: String(HA.length)
                });
                let s1 = await UT2(HA, new AbortController().signal);
                if (!s1) BA("tengu_remote_create_session_error", {
                    error: "unable_to_create_session"
                }), process.stderr.write(oA.red(`Error: Unable to create remote session
`)), await S6(1), process.exit(1);
                BA("tengu_remote_create_session_success", {
                    session_id: s1.id
                }), process.stdout.write(`Created remote session: ${s1.title}
`), process.stdout.write(`View: https://claude.ai/code/${s1.id}?m=0
`), process.stdout.write(`Resume with: claude --teleport ${s1.id}
`), await S6(0), process.exit(0)
            } else if (IA) {
                if (IA === !0 || IA === "") {
                    BA("tengu_teleport_interactive_mode", {});
                    let s1 = await pU9();
                    if (!s1) await S6(0), process.exit(0);
                    N1 = (await HRA(Ug(s1.log), s1.branch)).messages
                } else if (typeof IA === "string") {
                    BA("tengu_teleport_resume_session", {
                        mode: "direct"
                    });
                    try {
                        let s1 = await HT2(IA);
                        if (s1.status === "mismatch" || s1.status === "not_in_repo") {
                            let HQ = s1.sessionRepo;
                            if (HQ) {
                                let ZB = HE9(HQ),
                                    rQ = CE9(ZB);
                                if (rQ.length > 0) {
                                    let PB = await new Promise(async (IQ) => {
                                        let {
                                            unmount: l9
                                        } = await Z3(c5.default.createElement(N7, null, c5.default.createElement(fU9, {
                                            targetRepo: HQ,
                                            initialPaths: rQ,
                                            onSelectPath: (h4) => {
                                                l9(), IQ(h4)
                                            },
                                            onCancel: () => {
                                                l9(), IQ(null)
                                            }
                                        })), {
                                            exitOnCtrlC: !1
                                        })
                                    });
                                    if (PB) process.chdir(PB), Qq(PB), rC0(PB);
                                    else await S6(0)
                                } else throw new GI(`You must run claude --teleport ${IA} from a checkout of ${HQ}.`, oA.red(`You must run claude --teleport ${IA} from a checkout of ${oA.bold(HQ)}.
`))
                            }
                        } else if (s1.status === "error") throw new GI(s1.errorMessage || "Failed to validate session", oA.red(`Error: ${s1.errorMessage||"Failed to validate session"}
`));
                        await D61();
                        let p0 = await zT2(IA);
                        N1 = (await HRA(Ug(p0.log), p0.branch)).messages
                    } catch (s1) {
                        if (s1 instanceof GI) process.stderr.write(s1.formattedMessage + `
`);
                        else e(s1 instanceof Error ? s1 : Error(String(s1))), process.stderr.write(`Error: ${s1 instanceof Error?s1.message:String(s1)}
`);
                        await S6(1)
                    }
                }
            }
            if (J0) {
                let s1 = J0;
                try {
                    let p0 = await qi(s1, void 0);
                    if (!p0) console.error(`No conversation found with session ID: ${s1}`), process.exit(1);
                    if (N1 = p0.messages, Z0 = p0.fileHistorySnapshots, !J.forkSession) FR(s1), await Zx()
                } catch (p0) {
                    e(p0 instanceof Error ? p0 : Error(String(p0))), console.error(`Failed to resume session ${s1}`), process.exit(1)
                }
            }
            if (Array.isArray(N1)) await Z3(c5.default.createElement(N7, {
                initialState: R1,
                onChangeAppState: ng
            }, c5.default.createElement(sXA, {
                debug: W || X,
                initialPrompt: zA,
                commands: [...aA, ...u0],
                initialTools: x0,
                initialMessages: N1,
                initialFileHistorySnapshots: Z0,
                mcpClients: Y0,
                dynamicMcpConfig: qA,
                autoConnectIdeFlag: N,
                strictMcpConfig: o,
                appendSystemPrompt: SA
            })), T0);
            else {
                let s1 = await Qx();
                if (!s1.length) console.error("No conversations found to resume"), process.exit(1);
                await Z3(c5.default.createElement(wz9, {
                    commands: [...aA, ...u0],
                    debug: W || X,
                    initialLogs: s1,
                    initialTools: x0,
                    mcpClients: Y0,
                    dynamicMcpConfig: qA,
                    appState: R1,
                    onChangeAppState: ng,
                    strictMcpConfig: o,
                    systemPrompt: KA,
                    appendSystemPrompt: SA
                }), T0)
            }
        } else {
            let N1 = await zq("startup");
            await Z3(c5.default.createElement(N7, {
                initialState: R1,
                onChangeAppState: ng
            }, c5.default.createElement(sXA, {
                debug: W || X,
                commands: [...aA, ...u0],
                initialPrompt: zA,
                initialTools: x0,
                initialMessages: N1,
                mcpClients: Y0,
                dynamicMcpConfig: qA,
                autoConnectIdeFlag: N,
                strictMcpConfig: o,
                systemPrompt: KA,
                appendSystemPrompt: SA,
                mcpCliEndpoint: k1
            })), T0)
        }
    }).version(`${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://docs.claude.com/s/claude-code",VERSION:"2.0.57",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues"}.VERSION} (Claude Code)`, "-v, --version", "Output the version number"), A.addOption(new eF("--sdk-url <url>", "Use remote WebSocket endpoint for SDK I/O streaming (only with -p and stream-json format)").hideHelp()), A.addOption(new eF("--teleport [session]", "Resume a teleport session, optionally specify session ID").hideHelp()), A.addOption(new eF("--remote <description>", "Create a remote session with the given description").hideHelp());
    let Q = A.command("mcp").description("Configure and manage MCP servers").helpOption("-h, --help", "Display help for command");
    Q.command("serve").description("Start the Claude Code MCP server").helpOption("-h, --help", "Display help for command").option("-d, --debug", "Enable debug mode", () => !0).option("--verbose", "Override verbose mode setting from config", () => !0).action(async ({
        debug: Y,
        verbose: J
    }) => {
        let W = GD0();
        if (BA("tengu_mcp_start", {}), !PJ1(W)) console.error(`Error: Directory ${W} does not exist`), process.exit(1);
        try {
            await jJ1(W, "default", !1, !1, void 0), await Tz9(W, Y ?? !1, J ?? !1)
        } catch (X) {
            console.error("Error: Failed to start MCP server:", X), process.exit(1)
        }
    }), Q.command("add <name> <commandOrUrl> [args...]").description(`Add an MCP server to Claude Code.

Examples:
  # Add HTTP server:
  claude mcp add --transport http sentry https://mcp.sentry.dev/mcp

  # Add SSE server:
  claude mcp add --transport sse asana https://mcp.asana.com/sse

  # Add stdio server:
  claude mcp add --transport stdio airtable --env AIRTABLE_API_KEY=YOUR_KEY -- npx -y airtable-mcp-server`).option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local").option("-t, --transport <transport>", "Transport type (stdio, sse, http). Defaults to stdio if not specified.").option("-e, --env <env...>", "Set environment variables (e.g. -e KEY=value)").option("-H, --header <header...>", 'Set WebSocket headers (e.g. -H "X-Api-Key: abc123" -H "X-Custom: value")').helpOption("-h, --help", "Display help for command").action(async (Y, J, W, X) => {
        if (!Y) console.error("Error: Server name is required."), console.error("Usage: claude mcp add <name> <command> [args...]"), process.exit(1);
        else if (!J) console.error("Error: Command is required when server name is provided."), console.error("Usage: claude mcp add <name> <command> [args...]"), process.exit(1);
        try {
            let F = dzA(X.scope),
                V = T6B(X.transport),
                K = X.transport !== void 0,
                D = J.startsWith("http://") || J.startsWith("https://") || J.startsWith("localhost") || J.endsWith("/sse") || J.endsWith("/mcp");
            if (BA("tengu_mcp_add", {
                    type: V,
                    scope: F,
                    source: "command",
                    transport: V,
                    transportExplicit: K,
                    looksLikeUrl: D
                }), V === "sse") {
                if (!J) console.error("Error: URL is required for SSE transport."), process.exit(1);
                let H = X.header ? Wb1(X.header) : void 0;
                if (Bt(Y, {
                        type: "sse",
                        url: J,
                        headers: H
                    }, F), process.stdout.write(`Added SSE MCP server ${Y} with URL: ${J} to ${F} config
`), H) process.stdout.write(`Headers: ${JSON.stringify(H,null,2)}
`)
            } else if (V === "http") {
                if (!J) console.error("Error: URL is required for HTTP transport."), process.exit(1);
                let H = X.header ? Wb1(X.header) : void 0;
                if (Bt(Y, {
                        type: "http",
                        url: J,
                        headers: H
                    }, F), process.stdout.write(`Added HTTP MCP server ${Y} with URL: ${J} to ${F} config
`), H) process.stdout.write(`Headers: ${JSON.stringify(H,null,2)}
`)
            } else {
                if (!K && D) process.stderr.write(`
Warning: The command "${J}" looks like a URL, but is being interpreted as a stdio server as --transport was not specified.
`), process.stderr.write(`If this is an HTTP server, use: claude mcp add --transport http ${Y} ${J}
`), process.stderr.write(`If this is an SSE server, use: claude mcp add --transport sse ${Y} ${J}
`);
                let H = KH0(X.env);
                Bt(Y, {
                    type: "stdio",
                    command: J,
                    args: W || [],
                    env: H
                }, F), process.stdout.write(`Added stdio MCP server ${Y} with command: ${J} ${(W||[]).join(" ")} to ${F} config
`)
            }
            process.stdout.write(`File modified: ${mw(F)}
`), process.exit(0)
        } catch (F) {
            console.error(F.message), process.exit(1)
        }
    }), Q.command("remove <name>").description("Remove an MCP server").option("-s, --scope <scope>", "Configuration scope (local, user, or project) - if not specified, removes from whichever scope it exists in").helpOption("-h, --help", "Display help for command").action(async (Y, J) => {
        try {
            if (J.scope) {
                let D = dzA(J.scope);
                BA("tengu_mcp_delete", {
                    name: Y,
                    scope: D
                }), Ib1(Y, D), process.stdout.write(`Removed MCP server ${Y} from ${D} config
`), process.stdout.write(`File modified: ${mw(D)}
`), process.exit(0)
            }
            let W = M5(),
                X = L1(),
                {
                    servers: F
                } = yX("project"),
                V = !!F[Y],
                K = [];
            if (W.mcpServers?.[Y]) K.push("local");
            if (V) K.push("project");
            if (X.mcpServers?.[Y]) K.push("user");
            if (K.length === 0) process.stderr.write(`No MCP server found with name: "${Y}"
`), process.exit(1);
            else if (K.length === 1) {
                let D = K[0];
                BA("tengu_mcp_delete", {
                    name: Y,
                    scope: D
                }), Ib1(Y, D), process.stdout.write(`Removed MCP server "${Y}" from ${D} config
`), process.stdout.write(`File modified: ${mw(D)}
`), process.exit(0)
            } else process.stderr.write(`MCP server "${Y}" exists in multiple scopes:
`), K.forEach((D) => {
                process.stderr.write(`  - ${Gt(D)} (${mw(D)})
`)
            }), process.stderr.write(`
To remove from a specific scope, use:
`), K.forEach((D) => {
                process.stderr.write(`  claude mcp remove "${Y}" -s ${D}
`)
            }), process.exit(1)
        } catch (W) {
            process.stderr.write(`${W.message}
`), process.exit(1)
        }
    }), Q.command("list").description("List configured MCP servers").helpOption("-h, --help", "Display help for command").action(async () => {
        BA("tengu_mcp_list", {});
        let {
            servers: Y
        } = await $_();
        if (Object.keys(Y).length === 0) console.log("No MCP servers configured. Use `claude mcp add` to add a server.");
        else {
            console.log(`Checking MCP server health...
`);
            for (let [J, W] of Object.entries(Y)) {
                let X = await oU9(J, W);
                if (W.type === "sse") console.log(`${J}: ${W.url} (SSE) - ${X}`);
                else if (W.type === "http") console.log(`${J}: ${W.url} (HTTP) - ${X}`);
                else if (!W.type || W.type === "stdio") {
                    let F = Array.isArray(W.args) ? W.args : [];
                    console.log(`${J}: ${W.command} ${F.join(" ")} - ${X}`)
                }
            }
        }
        process.exit(0)
    }), Q.command("get <name>").description("Get details about an MCP server").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        BA("tengu_mcp_get", {
            name: Y
        });
        let J = l3A(Y);
        if (!J) console.error(`No MCP server found with name: ${Y}`), process.exit(1);
        console.log(`${Y}:`), console.log(`  Scope: ${Gt(J.scope)}`);
        let W = await oU9(Y, J);
        if (console.log(`  Status: ${W}`), J.type === "sse") {
            if (console.log("  Type: sse"), console.log(`  URL: ${J.url}`), J.headers) {
                console.log("  Headers:");
                for (let [X, F] of Object.entries(J.headers)) console.log(`    ${X}: ${F}`)
            }
        } else if (J.type === "http") {
            if (console.log("  Type: http"), console.log(`  URL: ${J.url}`), J.headers) {
                console.log("  Headers:");
                for (let [X, F] of Object.entries(J.headers)) console.log(`    ${X}: ${F}`)
            }
        } else if (J.type === "stdio") {
            console.log("  Type: stdio"), console.log(`  Command: ${J.command}`);
            let X = Array.isArray(J.args) ? J.args : [];
            if (console.log(`  Args: ${X.join(" ")}`), J.env) {
                console.log("  Environment:");
                for (let [F, V] of Object.entries(J.env)) console.log(`    ${F}=${V}`)
            }
        }
        console.log(`
To remove this server, run: claude mcp remove "${Y}" -s ${J.scope}`), process.exit(0)
    }), Q.command("add-json <name> <json>").description("Add an MCP server (stdio or SSE) with a JSON string").option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local").helpOption("-h, --help", "Display help for command").action(async (Y, J, W) => {
        try {
            let X = dzA(W.scope),
                F = S7(J);
            Bt(Y, F, X);
            let V = F && typeof F === "object" && "type" in F ? String(F.type || "stdio") : "stdio";
            BA("tengu_mcp_add", {
                scope: X,
                source: "json",
                type: V
            }), console.log(`Added ${V} MCP server ${Y} to ${X} config`), process.exit(0)
        } catch (X) {
            console.error(X.message), process.exit(1)
        }
    }), Q.command("add-from-claude-desktop").description("Import MCP servers from Claude Desktop (Mac and WSL only)").option("-s, --scope <scope>", "Configuration scope (local, user, or project)", "local").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        try {
            let J = dzA(Y.scope),
                W = uQ();
            BA("tengu_mcp_add", {
                scope: J,
                platform: W,
                source: "desktop"
            });
            let X = oE9();
            if (Object.keys(X).length === 0) console.log("No MCP servers found in Claude Desktop configuration or configuration file does not exist."), process.exit(0);
            let {
                unmount: F
            } = await Z3(c5.default.createElement(N7, null, c5.default.createElement(aE9, {
                servers: X,
                scope: J,
                onDone: () => {
                    F()
                }
            })), {
                exitOnCtrlC: !0
            })
        } catch (J) {
            console.error(J.message), process.exit(1)
        }
    }), Q.command("reset-project-choices").description("Reset all approved and rejected project-scoped (.mcp.json) servers within this project").helpOption("-h, --help", "Display help for command").action(async () => {
        BA("tengu_mcp_reset_mcpjson_choices", {});
        let Y = M5();
        aI({
            ...Y,
            enabledMcpjsonServers: [],
            disabledMcpjsonServers: [],
            enableAllProjectMcpServers: !1
        }), console.log("All project-scoped (.mcp.json) server approvals and rejections have been reset."), console.log("You will be prompted for approval next time you start Claude Code."), process.exit(0)
    });

    function B(Y, J) {
        e(Y instanceof Error ? Y : Error(String(Y))), console.error(`${V1.cross} Failed to ${J}: ${Y instanceof Error?Y.message:String(Y)}`), process.exit(1)
    }
    let G = A.command("plugin").description("Manage Claude Code plugins").helpOption("-h, --help", "Display help for command");
    G.command("validate <path>").description("Validate a plugin or marketplace manifest").helpOption("-h, --help", "Display help for command").action((Y) => {
        try {
            let J = mY1(Y);
            if (console.log(`Validating ${J.fileType} manifest: ${J.filePath}
`), J.errors.length > 0) console.log(`${V1.cross} Found ${J.errors.length} error${J.errors.length===1?"":"s"}:
`), J.errors.forEach((W) => {
                console.log(`  ${V1.pointer} ${W.path}: ${W.message}`)
            }), console.log("");
            if (J.warnings.length > 0) console.log(`${V1.warning} Found ${J.warnings.length} warning${J.warnings.length===1?"":"s"}:
`), J.warnings.forEach((W) => {
                console.log(`  ${V1.pointer} ${W.path}: ${W.message}`)
            }), console.log("");
            if (J.success) {
                if (J.warnings.length > 0) console.log(`${V1.tick} Validation passed with warnings`);
                else console.log(`${V1.tick} Validation passed`);
                process.exit(0)
            } else console.log(`${V1.cross} Validation failed`), process.exit(1)
        } catch (J) {
            e(J instanceof Error ? J : Error(String(J))), console.error(`${V1.cross} Unexpected error during validation: ${J instanceof Error?J.message:String(J)}`), process.exit(2)
        }
    });
    let Z = G.command("marketplace").description("Manage Claude Code marketplaces").helpOption("-h, --help", "Display help for command");
    Z.command("add <source>").description("Add a marketplace from a URL, path, or GitHub repo").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        try {
            let J = uY1(Y);
            if (!J) console.error(`${V1.cross} Invalid marketplace source format. Try: owner/repo, https://..., or ./path`), process.exit(1);
            if ("error" in J) console.error(`${V1.cross} ${J.error}`), process.exit(1);
            let W = J;
            console.log("Adding marketplace...");
            let {
                name: X
            } = await go(W, (V) => {
                console.log(V)
            });
            oF();
            let F = W.source;
            if (W.source === "github") F = W.repo;
            BA("tengu_marketplace_added", {
                source_type: F
            }), console.log(`${V1.tick} Successfully added marketplace: ${X}`), process.exit(0)
        } catch (J) {
            B(J, "add marketplace")
        }
    }), Z.command("list").description("List all configured marketplaces").helpOption("-h, --help", "Display help for command").action(async () => {
        try {
            let Y = await TZ(),
                J = Object.keys(Y);
            if (J.length === 0) console.log("No marketplaces configured"), process.exit(0);
            console.log(`Configured marketplaces:
`), J.forEach((W) => {
                let X = Y[W];
                if (console.log(`  ${V1.pointer} ${W}`), X?.source) {
                    let F = X.source;
                    if (F.source === "github") console.log(`    Source: GitHub (${F.repo})`);
                    else if (F.source === "git") console.log(`    Source: Git (${F.url})`);
                    else if (F.source === "url") console.log(`    Source: URL (${F.url})`);
                    else if (F.source === "directory") console.log(`    Source: Directory (${F.path})`);
                    else if (F.source === "file") console.log(`    Source: File (${F.path})`)
                }
                console.log("")
            }), process.exit(0)
        } catch (Y) {
            B(Y, "list marketplaces")
        }
    }), Z.command("remove <name>").alias("rm").description("Remove a configured marketplace").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        try {
            await jlA(Y), oF(), BA("tengu_marketplace_removed", {
                marketplace_name: Y
            }), console.log(`${V1.tick} Successfully removed marketplace: ${Y}`), process.exit(0)
        } catch (J) {
            B(J, "remove marketplace")
        }
    }), Z.command("update [name]").description("Update marketplace(s) from their source - updates all if no name specified").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        try {
            if (Y) console.log(`Updating marketplace: ${Y}...`), await SlA(Y, (J) => {
                console.log(J)
            }), oF(), BA("tengu_marketplace_updated", {
                marketplace_name: Y
            }), console.log(`${V1.tick} Successfully updated marketplace: ${Y}`), process.exit(0);
            else {
                let J = await TZ(),
                    W = Object.keys(J);
                if (W.length === 0) console.log("No marketplaces configured"), process.exit(0);
                console.log(`Updating ${W.length} marketplace(s)...`), await mQB(), oF(), BA("tengu_marketplace_updated_all", {
                    count: W.length
                }), console.log(`${V1.tick} Successfully updated ${W.length} marketplace(s)`), process.exit(0)
            }
        } catch (J) {
            B(J, "update marketplace(s)")
        }
    }), G.command("install <plugin>").alias("i").description("Install a plugin from available marketplaces (use plugin@marketplace for specific marketplace)").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        BA("tengu_plugin_install_command", {
            plugin: Y
        }), await Sz9(Y)
    }), G.command("uninstall <plugin>").alias("remove").alias("rm").description("Uninstall an installed plugin").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        BA("tengu_plugin_uninstall_command", {
            plugin: Y
        }), await _z9(Y)
    }), G.command("enable <plugin>").description("Enable a disabled plugin").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        BA("tengu_plugin_enable_command", {
            plugin: Y
        }), await kz9(Y)
    }), G.command("disable <plugin>").description("Disable an enabled plugin").helpOption("-h, --help", "Display help for command").action(async (Y) => {
        BA("tengu_plugin_disable_command", {
            plugin: Y
        }), await yz9(Y)
    }), A.command("migrate-installer").description("Migrate from global npm installation to local installation").helpOption("-h, --help", "Display help for command").action(async () => {
        if (al()) console.log("Already running from local installation. No migration needed."), process.exit(0);
        BA("tengu_migrate_installer_command", {}), await new Promise(async (Y) => {
            let {
                waitUntilExit: J
            } = await Z3(c5.default.createElement(N7, null, c5.default.createElement(JFA, null)));
            J().then(() => {
                Y()
            })
        }), process.exit(0)
    }), A.command("setup-token").description("Set up a long-lived authentication token (requires Claude subscription)").helpOption("-h, --help", "Display help for command").action(async () => {
        if (BA("tengu_setup_token_command", {}), await SJ(), !ZU()) process.stderr.write(oA.yellow(`Warning: You already have authentication configured via environment variable or API key helper.
`)), process.stderr.write(oA.yellow(`The setup-token command will create a new OAuth token which you can use instead.
`));
        await new Promise(async (Y) => {
            let {
                unmount: J
            } = await Z3(c5.default.createElement(N7, {
                onChangeAppState: ng
            }, c5.default.createElement(j, {
                flexDirection: "column",
                gap: 1
            }, c5.default.createElement(Ap, {
                items: [c5.default.createElement(qJ1, {
                    key: "welcome"
                })]
            }, (W) => W), c5.default.createElement(ei, {
                onDone: () => {
                    J(), Y()
                },
                mode: "setup-token",
                startingMessage: "This will guide you through long-lived (1-year) auth token setup for your Claude account. Claude subscription required."
            }))))
        }), process.exit(0)
    });

    function I({
        onDone: Y
    }) {
        return YI1(), c5.default.createElement(HY1, {
            onDone: Y
        })
    }
    return A.command("doctor").description("Check the health of your Claude Code auto-updater").helpOption("-h, --help", "Display help for command").action(async () => {
        BA("tengu_doctor_command", {}), await new Promise(async (Y) => {
            let {
                unmount: J
            } = await Z3(c5.default.createElement(N7, null, c5.default.createElement($Z1, {
                dynamicMcpConfig: void 0,
                isStrictMcpConfig: !1
            }, c5.default.createElement(I, {
                onDone: () => {
                    J(), Y()
                }
            }))), {
                exitOnCtrlC: !1
            })
        }), process.exit(0)
    }), A.command("update").description("Check for updates and install if available").helpOption("-h, --help", "Display help for command").action(kU9), A.command("install [target]").description("Install Claude Code native build. Use [target] to specify version (stable, latest, or specific version)").option("--force", "Force installation even if already installed").helpOption("-h, --help", "Display help for command").action(async (Y, J) => {
        await jJ1(GD0(), "default", !1, !1, void 0), await new Promise((W) => {
            let X = [];
            if (Y) X.push(Y);
            if (J.force) X.push("--force");
            vU9.call(() => {
                W(), process.exit(0)
            }, {}, X)
        })
    }), v4("run_before_parse"), await A.parseAsync(process.argv), v4("run_after_parse"), v4("main_after_run"), OC9(), A
}
async function Fh3({
    hasInitialPrompt: A,
    hasStdin: Q,
    verbose: B,
    debug: G,
    debugToStderr: Z,
    print: I,
    outputFormat: Y,
    inputFormat: J,
    numAllowedTools: W,
    numDisallowedTools: X,
    mcpClientCount: F,
    worktree: V,
    skipWebFetchPreflight: K,
    githubActionInputs: D,
    dangerouslySkipPermissionsPassed: H,
    modeIsBypass: C,
    allowDangerouslySkipPermissionsPassed: E,
    systemPromptFlag: z,
    appendSystemPromptFlag: w
}) {
    try {
        let N = await MGB();
        BA("tengu_init", {
            entrypoint: "claude",
            hasInitialPrompt: A,
            hasStdin: Q,
            verbose: B,
            debug: G,
            debugToStderr: Z,
            print: I,
            outputFormat: Y,
            inputFormat: J,
            numAllowedTools: W,
            numDisallowedTools: X,
            mcpClientCount: F,
            worktree: V,
            skipWebFetchPreflight: K,
            ...D && {
                githubActionInputs: D
            },
            dangerouslySkipPermissionsPassed: H,
            modeIsBypass: C,
            allowDangerouslySkipPermissionsPassed: E,
            ...z && {
                systemPromptFlag: z
            },
            ...w && {
                appendSystemPromptFlag: w
            },
            ...N && {
                rh: N
            }
        })
    } catch (N) {
        e(N instanceof Error ? N : Error(String(N)))
    }
}

function Vh3() {
    (process.stderr.isTTY ? process.stderr : process.stdout.isTTY ? process.stdout : void 0)?.write(`\x1B[?25h${Gg1}`)
}
var c5;
var Q$9 = L(() => {
    Qe();
    JE9();
    qE9();
    BrA();
    LE9();
    hB();
    f5();
    it();
    vK0();
    _E9();
    vE9();
    hE9();
    O30();
    j30();
    MlA();
    hA();
    gI1();
    $y();
    DI1();
    MK0();
    jq();
    oXA();
    J9();
    sE9();
    tE9();
    vsA();
    $jA();
    s5();
    jQ();
    hB();
    nEA();
    LYA();
    Td1();
    Rd1();
    u1();
    GG();
    zi();
    GG();
    Bz9();
    KRA();
    wF0();
    OW0();
    gK0();
    Uz9();
    zY1();
    XF0();
    uE();
    s2();
    RB();
    $z9();
    qz9();
    Pz9();
    SV0();
    hQ();
    nE();
    Oy();
    MMA();
    OV0();
    kH();
    bQA();
    qV0();
    xz9();
    Ia();
    n2();
    fz9();
    gz9();
    ED();
    cz9();
    hQ();
    zV();
    wy();
    NG0();
    GG();
    UZ();
    H60();
    sz9();
    O9();
    w0();
    w0();
    KW0();
    yaA();
    LIA();
    nT();
    xP();
    Bh();
    rz9();
    Bw();
    tz9();
    Tk();
    zWA();
    cj();
    wYA();
    q1A();
    m_();
    eb();
    S0();
    H9();
    FQA();
    ez9();
    Ei();
    AYA();
    S0();
    NF();
    D0();
    QU9();
    GU9();
    IU9();
    JU9();
    XU9();
    VU9();
    FoA();
    SU9();
    yU9();
    RjA();
    _E();
    I6();
    bU9();
    W0A();
    CJ1();
    hU9();
    lU9();
    zU();
    _J();
    XH();
    $Z();
    GM();
    xX();
    L00();
    o0();
    m_();
    R2();
    jY1();
    hPA();
    iW0();
    UF();
    uK0();
    gXA();
    mh();
    aU9();
    MJ();
    sU9();
    EE();
    DJ1();
    uIA();
    c5 = GA(VA(), 1);
    v4("main_tsx_entry");
    v4("main_tsx_imports_loaded");
    if (of3()) process.exit(1)
});
Qe();
D0();
EE();
MK0();
zFA();
J9();
Tk();
PD();
jQ();
O9();
w0();
w3();
OK0();
RK0();
TK0();
PK0();
jK0();
SK0();
EE();
DJ1();
import {
    readFileSync as av3,
    existsSync as sv3
} from "fs";
var kK0, rC9 = !1;

function oC9() {
    if (kK0 === void 0) kK0 = sC9();
    return kK0
}

function OC() {
    let A = NGA(),
        Q = oC9();
    if (!rC9) {
        if (rC9 = !0, A && Q === null) {
            let B = VJ1(),
                G = EFA();
            console.error(oA.yellow(`Warning: MCP endpoint file not found at ${B} (session: ${G}). Falling back to state file.`))
        }
    }
    return A && Q !== null
}
class wSA extends Error {
    constructor(A) {
        super(A);
        this.name = "ConnectionFailedError"
    }
}
async function qSA(A, Q, B, G) {
    let Z = Date.now();
    try {
        let I = await Q();
        if (!OC()) {
            let Y = typeof B === "function" ? B(I) : B || {};
            await wa("tengu_mcp_cli_command_executed", {
                command: A,
                success: !0,
                duration_ms: Date.now() - Z,
                ...Y
            })
        }
        return {
            success: !0,
            data: I
        }
    } catch (I) {
        let Y = I instanceof Error ? I : Error(String(I));
        if (console.error(oA.red("Error:"), Y.message), !OC()) {
            let J = typeof B === "object" ? B : {};
            await wa("tengu_mcp_cli_command_executed", {
                command: A,
                success: !1,
                error_type: Y.constructor.name,
                duration_ms: Date.now() - Z,
                ...J,
                ...G
            })
        }
        return {
            success: !1,
            error: Y
        }
    }
}

function qa() {
    let A = rV0();
    if (!sv3(A)) {
        let Q = EFA();
        throw Error(`MCP state file not found at ${A} (session: ${Q}). Is Claude Code running?`)
    }
    try {
        return JSON.parse(av3(A, "utf-8"))
    } catch (Q) {
        throw Error(`Error reading MCP state file ${A}: ${Q instanceof Error?Q.message:String(Q)}`)
    }
}

function tC9(A, Q) {
    if (A.configs?.[Q]) return A.configs[Q];
    let B = A.normalizedNames?.[Q];
    if (B && A.configs?.[B]) return A.configs[B];
    return
}

function rv3(A, Q) {
    if (A.resources?.[Q]) return A.resources[Q];
    let B = A.normalizedNames?.[Q];
    if (B && A.resources?.[B]) return A.resources[B];
    return []
}

function yK0(A) {
    let Q = A.split("/");
    if (Q.length !== 2 || !Q[0] || !Q[1]) throw Error(`Invalid tool identifier '${A}'. Expected format: <server>/<tool>`);
    return {
        server: Q[0],
        tool: Q[1]
    }
}
async function uQA(A, Q, B = 1e4) {
    let G = oC9();
    if (!G) throw Error("MCP CLI endpoint not enabled");
    try {
        let Z = await GQ({
            method: "POST",
            url: `${G.url}/mcp`,
            data: Q,
            headers: {
                Authorization: `Bearer ${G.key}`,
                "Content-Type": "application/json"
            },
            timeout: B,
            validateStatus: () => !0
        });
        if (Z.status >= 400) {
            let I = Z.data,
                Y = Error(I.error || `HTTP ${Z.status}: ${Z.statusText}`);
            if (I.type) Y.name = I.type;
            throw Y
        }
        return A.parse(Z.data)
    } catch (Z) {
        if (GQ.isAxiosError(Z)) {
            if (Z.code === "ECONNREFUSED") throw Error("Connection refused - is the MCP endpoint running?");
            if (Z.code === "ETIMEDOUT" || Z.message.includes("timeout")) throw Error("Request timeout");
            if (Z.message.startsWith("HTTP ")) throw Z;
            throw Error(`Network error: ${Z.message}`)
        }
        throw Z
    }
}
var Na = new IJ1().name("mcp-cli").description("Interact with MCP servers and tools").version("1.0.0");
Na.command("servers").description("List all connected MCP servers").option("--json", "Output in JSON format").action(async (A) => {
    let Q = await qSA("servers", async () => {
        return OC() ? await uQA(cC9, {
            command: "servers"
        }) : YJ1(qa().clients)
    }, (G) => ({
        server_count: G.length
    }));
    if (!Q.success) process.exit(1);
    let B = Q.data;
    if (A.json) console.log(JSON.stringify(B));
    else B.forEach((G) => {
        let Z = G.type === "connected" ? oA.green("connected") : G.type === "failed" ? oA.red("failed") : oA.yellow(G.type),
            I = "";
        if (G.type === "connected") {
            let Y = [];
            if (G.hasTools) Y.push("tools");
            if (G.hasResources) Y.push("resources");
            if (G.hasPrompts) Y.push("prompts");
            if (Y.length > 0) I = ` (${Y.join(", ")})`
        }
        console.log(`${G.name} - ${Z}${I}`)
    })
});
Na.command("tools").description("List all available tools").argument("[server]", "Filter by server name").option("--json", "Output in JSON format").action(async (A, Q) => {
    let B = {
            server: A
        },
        G = await qSA("tools", async () => {
            return OC() ? await uQA(pC9, {
                command: "tools",
                params: B
            }) : JJ1(qa().tools, B)
        }, (I) => ({
            tool_count: I.length,
            filtered: !!A
        }));
    if (!G.success) process.exit(1);
    let Z = G.data;
    if (Q.json) console.log(JSON.stringify(Z));
    else if (A) Z.forEach((I) => console.log(I.name));
    else Z.forEach((I) => console.log(`${I.server}/${I.name}`))
});
Na.command("info").description("Get detailed information about a tool").argument("<tool>", "Tool identifier in format <server>/<tool>").option("--json", "Output in JSON format").action(async (A, Q) => {
    let B = await qSA("info", async () => {
        let {
            server: Z,
            tool: I
        } = yK0(A), Y = {
            server: Z,
            toolName: I
        };
        if (OC()) return await uQA(lC9, {
            command: "info",
            params: Y
        });
        let J = qa(),
            W = await WJ1(J.tools, Y);
        if (!W) {
            let X = $SA(J.clients, Z, J.normalizedNames),
                F = gQA(Z, X?.type);
            if (F) throw F;
            throw Error(`Tool '${I}' not found on server '${Z}'`)
        }
        return W
    }, () => ({
        tool_found: !0
    }), {
        tool_found: !1
    });
    if (!B.success) process.exit(1);
    let G = B.data;
    if (Q.json) console.log(JSON.stringify(G));
    else {
        if (console.log(oA.bold(`Tool: ${A}`)), console.log(oA.dim(`Server: ${G.server}`)), G.description) console.log(oA.dim(`Description: ${G.description}`));
        console.log(), console.log(oA.bold("Input Schema:")), console.log(JSON.stringify(G.inputSchema, null, 2))
    }
});
async function ov3(A, Q, B, G) {
    let Z = qa(),
        I = tC9(Z, Q);
    if (!I) throw Error(`Server '${Q}' not found`);
    if (G.debug) console.error(`Connecting to ${Q} (${I.type})...`);
    let Y = await Q1A(Q, I);
    if (Y.client.type !== "connected") throw gQA(Q, Y.client.type) ?? new wSA(`Failed to connect to server '${Q}'`);
    let J = (() => {
        let F = `mcp__${v7(Q)}__${v7(A)}`;
        return Z.tools.find((K) => K.name === F)?.originalToolName || A
    })();
    if (G.debug) console.error(`Calling tool ${J}...`);
    let W = await Y.client.client.request({
        method: "tools/call",
        params: {
            name: J,
            arguments: B
        }
    }, sT, {
        signal: AbortSignal.timeout(parseInt(G.timeout, 10))
    });
    return Y.client.client.close(), W
}
Na.command("call").description("Invoke an MCP tool").argument("<tool>", "Tool identifier in format <server>/<tool>").argument("<args>", 'Tool arguments as JSON string or "-" for stdin').option("--json", "Output in JSON format").option("--timeout <ms>", "Timeout in milliseconds", "30000").option("--debug", "Show debug output").action(async (A, Q, B) => {
    let {
        server: G,
        tool: Z
    } = yK0(A);
    if (Q === "-") {
        let W = [];
        for await (let X of process.stdin) W.push(X);
        Q = Buffer.concat(W).toString("utf-8").trim()
    }
    let I;
    try {
        I = JSON.parse(Q)
    } catch (W) {
        console.error(oA.red("Error: Invalid JSON arguments")), console.error(String(W)), process.exit(1)
    }
    let Y = `mcp__${v7(G)}__${v7(Z)}`,
        J = Date.now();
    try {
        let W = parseInt(B.timeout, 10),
            X = {
                server: G,
                tool: Z,
                args: I,
                timeoutMs: W
            },
            F = OC() ? await uQA(sT, {
                command: "call",
                params: X
            }, W) : await ov3(Z, G, I, B),
            V = B.json ? JSON.stringify(F) : typeof F === "string" ? F : JSON.stringify(F, null, 2);
        if (await new Promise((K) => {
                process.stdout.write(V + `
`, () => K())
            }), !OC()) await wa("tengu_mcp_cli_command_executed", {
            command: "call",
            tool_name: Y,
            success: !0,
            duration_ms: Date.now() - J
        });
        process.exit(0)
    } catch (W) {
        console.error(oA.red("Error calling tool:"), String(W));
        let X = Date.now() - J,
            F = String(W).slice(0, 2000);
        if (!OC()) await wa("tengu_tool_use_error", {
            toolName: Y,
            isMcp: !0,
            error: F,
            durationMs: X
        }), await wa("tengu_mcp_cli_command_executed", {
            command: "call",
            tool_name: Y,
            success: !1,
            error_type: W instanceof wSA ? "connection_failed" : "tool_execution_failed",
            duration_ms: Date.now() - J
        });
        process.exit(1)
    }
});
Na.command("grep").description("Search tool names and descriptions using regex patterns").argument("<pattern>", "Regex pattern to search for").option("--json", "Output in JSON format").option("-i, --ignore-case", "Case insensitive search (default: true)", !0).action(async (A, Q) => {
    let B = await qSA("grep", async () => {
        try {
            new RegExp(A, Q.ignoreCase ? "i" : "")
        } catch (I) {
            throw Error(`Invalid regex pattern: ${I instanceof Error?I.message:String(I)}`)
        }
        let Z = {
            pattern: A,
            ignoreCase: Q.ignoreCase
        };
        return OC() ? await uQA(iC9, {
            command: "grep",
            params: Z
        }) : XJ1(qa().tools, Z)
    }, (Z) => ({
        match_count: Z.length
    }));
    if (!B.success) process.exit(1);
    let G = B.data;
    if (Q.json) console.log(JSON.stringify(G));
    else if (G.length === 0) console.log(oA.yellow("No tools found matching pattern"));
    else G.forEach((Z) => {
        if (console.log(oA.bold(`${Z.server}/${Z.name}`)), Z.description) {
            let I = Z.description.length > 100 ? Z.description.slice(0, 100) + "..." : Z.description;
            console.log(oA.dim(`  ${I}`))
        }
        console.log()
    })
});
Na.command("resources").description("List MCP resources").argument("[server]", "Filter by server name").option("--json", "Output in JSON format").action(async (A, Q) => {
    let B = {
            server: A
        },
        G = await qSA("resources", async () => {
            if (OC()) return await uQA(nC9, {
                command: "resources",
                params: B
            });
            else {
                let I = qa();
                return FJ1(I.resources, B, I.normalizedNames)
            }
        }, (I) => ({
            resource_count: I.length,
            filtered: !!A
        }));
    if (!G.success) process.exit(1);
    let Z = G.data;
    if (Q.json) console.log(JSON.stringify(Z));
    else Z.forEach((I) => {
        console.log(`${I.server}/${I.name||I.uri}`)
    })
});
async function tv3(A, Q, B) {
    let G = qa(),
        Z = tC9(G, A);
    if (!Z) throw Error(`Server '${A}' not found`);
    if (B.debug) console.error(`Connecting to ${A} (${Z.type})...`);
    let I = await Q1A(A, Z);
    if (I.client.type !== "connected") throw gQA(A, I.client.type) ?? new wSA(`Failed to connect to server '${A}'`);
    if (B.debug) console.error(`Reading resource: ${Q}`);
    let Y = await I.client.client.readResource({
        uri: Q
    }, {
        signal: AbortSignal.timeout(parseInt(B.timeout, 10))
    });
    return I.client.client.close(), Y
}
Na.command("read").description("Read an MCP resource").argument("<resource>", "Resource identifier in format <server>/<resource> or <server> <uri>").argument("[uri]", "Optional: Direct resource URI (file://, https://, etc.)").option("--json", "Output in JSON format").option("--timeout <ms>", "Timeout in milliseconds", "30000").option("--debug", "Show debug output").action(async (A, Q, B) => {
    let G, Z, I;
    if (Q) G = A, I = Q;
    else {
        let W = yK0(A);
        G = W.server, Z = W.tool
    }
    let Y;
    if (I) {
        if (Y = I, B.debug) console.log(`Using direct URI: ${Y}`)
    } else {
        let W = qa(),
            F = rv3(W, G).find((V) => V.name === Z || V.uri === Z);
        if (!F) console.error(oA.red(`Error: Resource '${Z}' not found on server '${G}'`)), process.exit(1);
        Y = F.uri
    }
    let J = Date.now();
    try {
        let W = parseInt(B.timeout, 10),
            X = {
                server: G,
                uri: Y,
                timeoutMs: W
            },
            F = OC() ? await uQA(tl, {
                command: "read",
                params: X
            }, W) : await tv3(G, Y, B);
        if (B.json) console.log(JSON.stringify(F));
        else if (F.contents && Array.isArray(F.contents)) F.contents.forEach((V) => {
            if (V && typeof V === "object") {
                if ("text" in V) console.log(V.text);
                else if ("blob" in V) {
                    console.log(oA.yellow("[Binary blob content]"));
                    let K = "mimeType" in V ? V.mimeType : void 0;
                    console.log(oA.dim(`MIME type: ${K||"unknown"}`))
                }
            }
        });
        else console.log(JSON.stringify(F, null, 2));
        if (!OC()) await wa("tengu_mcp_cli_command_executed", {
            command: "read",
            success: !0,
            duration_ms: Date.now() - J
        });
        process.exit(0)
    } catch (W) {
        if (console.error(oA.red("Error reading resource:"), String(W)), !OC()) await wa("tengu_mcp_cli_command_executed", {
            command: "read",
            success: !1,
            error_type: W instanceof wSA ? "connection_failed" : "read_failed",
            duration_ms: Date.now() - J
        });
        process.exit(1)
    }
});
async function eC9(A) {
    if (qlA(), !OC()) pg();