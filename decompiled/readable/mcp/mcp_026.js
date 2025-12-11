/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: mcp_026.js
 * 处理时间: 2025-12-09T03:41:38.025Z
 * 变量映射: 2 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 26/29
 * Lines: 429222 - 430696 (1475 lines)
 * Original file: cli.js
 */

                        qA.push({
                            name: rA,
                            totalPlugins: WA.plugins.length,
                            installedCount: XA,
                            source: BzA(K1.source)
                        })
                    } C(qA);
                let DA = sA.filter((rA) => rA.data !== null).length,
                    yA = TlA(NA, DA);
                if (yA)
                    if (yA.type === "warning") IA(yA.message + ". Showing available marketplaces.");
                    else throw Error(yA.message);
                if (qA.length === 1 && !Y && !J) {
                    let rA = qA[0];
                    if (rA) V(rA.name), X("plugin-list")
                }
                if (J) {
                    let rA = null,
                        K1 = null;
                    for (let [WA] of Object.entries(SA)) {
                        let XA = await VD(WA);
                        if (XA) {
                            let zA = XA.plugins.find(($A) => $A.name === J);
                            if (zA) {
                                rA = {
                                    entry: zA,
                                    marketplaceName: WA,
                                    pluginId: z3A(zA.name, WA)
                                }, K1 = WA;
                                break
                            }
                        }
                    }
                    if (rA && K1) {
                        let WA = rA.pluginId;
                        if (jg(WA)) Q(`Plugin 'TextComponent{WA}' is already installed. Use '/plugin' to manage existing plugins.`);
                        else V(K1), D(rA), X("plugin-details")
                    } else Q(`Plugin "TextComponent{J}" not found in any marketplace`)
                } else if (Y)
                    if (qA.some((K1) => K1.name === Y)) V(Y), X("plugin-list");
                    else Q(`Marketplace "TextComponent{Y}" not found`)
            } catch (SA) {
                Q(SA instanceof Error ? SA.message : "Failed to load marketplaces")
            } finally {
                N(!1)
            }
        }
        KA()
    }, [Q, Y, J]), qK.useEffect(() => {
        if (!F) return;
        async function KA(SA) {
            N(!0);
            try {
                let sA = await VD(SA);
                if (!sA) throw Error(`Failed to load marketplace: TextComponent{SA}`);
                let NA = [];
                for (let qA of sA.plugins) {
                    let DA = z3A(qA.name, SA);
                    if (!jg(DA)) NA.push({
                        entry: qA,
                        marketplaceName: SA,
                        pluginId: DA
                    })
                }
                z(NA), R(0), y(new Set)
            } catch (sA) {
                Q(sA instanceof Error ? sA.message : "Failed to load plugins")
            } finally {
                N(!1)
            }
        }
        KA(F)
    }, [F, Q]);
    let HA = async () => {
        if (P.size === 0) return;
        let KA = E.filter((qA) => P.has(qA.pluginId));
        x(new Set(KA.map((qA) => qA.pluginId)));
        let SA = 0,
            sA = 0,
            NA = [];
        for (let qA of KA) try {
            if (typeof qA.entry.source !== "string") await nP(qA.pluginId, qA.entry);
            let yA = {
                ...LB("userSettings")?.enabledPlugins,
                [qA.pluginId]: !0
            };
            cB("userSettings", {
                enabledPlugins: yA
            }), SA++, BA("tengu_plugin_installed", {
                plugin_id: qA.pluginId,
                marketplace_name: qA.marketplaceName
            })
        } catch (DA) {
            sA++;
            let yA = DA instanceof Error ? DA.message : String(DA);
            NA.push({
                name: qA.entry.name,
                reason: yA
            }), e(DA instanceof Error ? DA : Error(`Failed to install TextComponent{qA.entry.name}: TextComponent{DA}`))
        }
        if (x(new Set), y(new Set), oF(), sA === 0) {
            let qA = `✓ Installed TextComponent{SA} plugin${SA!==1?"s":""}. Restart Claude Code to load new plugins.`;
            G(qA)
        } else if (SA === 0) Q(`Failed to install: TextComponent{Xx1(NA,!0)}`);
        else {
            let qA = `✓ Installed TextComponent{SA} of TextComponent{SA+sA} plugins. Failed: TextComponent{Xx1(NA,!1)}. Restart Claude Code to load successfully installed plugins.`;
            G(qA)
        }
        if (SA > 0) {
            if (I) await I()
        }
        Z({
            type: "menu"
        })
    }, wA = async (KA) => {
        l(!0), d(null);
        try {
            if (typeof KA.entry.source !== "string") await nP(KA.pluginId, KA.entry);
            let sA = {
                ...LB("userSettings")?.enabledPlugins,
                [KA.pluginId]: !0
            };
            cB("userSettings", {
                enabledPlugins: sA
            }), BA("tengu_plugin_installed", {
                plugin_id: KA.pluginId,
                marketplace_name: KA.marketplaceName
            }), oF();
            let NA = `✓ Installed TextComponent{KA.entry.name}. Restart Claude Code to load new plugins.`;
            if (G(NA), I) await I();
            Z({
                type: "menu"
            })
        } catch (SA) {
            l(!1);
            let sA = SA instanceof Error ? SA.message : String(SA);
            d(`Failed to install: TextComponent{sA}`), e(SA instanceof Error ? SA : Error(`Failed to install plugin: TextComponent{String(SA)}`))
        }
    };
    if (qK.useEffect(() => {
            if (A) G(A)
        }, [A, G]), h1((KA, SA) => {
            if (SA.escape) {
                if (W === "plugin-list") X("marketplace-list"), V(null), y(new Set);
                else if (W === "plugin-details") X("plugin-list"), D(null);
                return
            }
            if (W === "marketplace-list") {
                if ((SA.upArrow || KA === "k") && q > 0) R(q - 1);
                else if ((SA.downArrow || KA === "j") && q < H.length - 1) R(q + 1);
                else if (SA.return) {
                    let sA = H[q];
                    if (sA) V(sA.name), X("plugin-list")
                }
            } else if (W === "plugin-list") {
                let sA = E.length;
                if ((SA.upArrow || KA === "k") && q > 0) R(q - 1);
                else if ((SA.downArrow || KA === "j") && q < sA - 1) R(q + 1);
                else if (KA === " ") {
                    if (q < E.length) {
                        let NA = E[q];
                        if (NA) {
                            let qA = new Set(P);
                            if (qA.has(NA.pluginId)) qA.delete(NA.pluginId);
                            else qA.add(NA.pluginId);
                            y(qA)
                        }
                    }
                } else if (SA.return) {
                    if (q === E.length && P.size > 0) HA();
                    else if (q < E.length) {
                        let NA = E[q];
                        if (NA) D(NA), X("plugin-details"), u(0), d(null)
                    }
                } else if (KA === "i" && P.size > 0) HA()
            } else if (W === "plugin-details" && K) {
                let sA = K.entry.homepage,
                    qA = K.entry.source && typeof K.entry.source === "object" && "source" in K.entry.source && K.entry.source.source === "github" && typeof K.entry.source === "object" && "repo" in K.entry.source ? K.entry.source.repo : null,
                    DA = [];
                if (DA.push({
                        label: "Install now",
                        action: "install"
                    }), sA) DA.push({
                    label: "Open homepage",
                    action: "homepage"
                });
                if (qA) DA.push({
                    label: "View on GitHub",
                    action: "github"
                });
                if (DA.push({
                        label: "Back to plugin list",
                        action: "back"
                    }), (SA.upArrow || KA === "k") && p > 0) u(p - 1);
                else if ((SA.downArrow || KA === "j") && p < DA.length - 1) u(p + 1);
                else if (SA.return) {
                    let yA = DA[p]?.action;
                    if (yA === "mark") {
                        let rA = new Set(P);
                        if (rA.has(K.pluginId)) rA.delete(K.pluginId);
                        else rA.add(K.pluginId);
                        y(rA), X("plugin-list"), D(null)
                    } else if (yA === "install") wA(K);
                    else if (yA === "homepage" && sA) gZ(sA);
                    else if (yA === "github" && qA) gZ(`https://github.com/TextComponent{qA}`);
                    else if (yA === "back") X("plugin-list"), D(null)
                }
            }
        }), w) return e1.createElement(j, {
        flexDirection: "column"
    }, e1.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, e1.createElement(TextComponent, null, "Loading…")));
    if (A) return e1.createElement(j, {
        flexDirection: "column"
    }, e1.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, e1.createElement(TextComponent, {
        color: "error"
    }, A)));
    if (W === "marketplace-list") {
        if (H.length === 0) return e1.createElement(j, {
            flexDirection: "column"
        }, e1.createElement(j, {
            flexDirection: "column",
            paddingX: 1,
            borderStyle: "round"
        }, e1.createElement(j, {
            marginBottom: 1
        }, e1.createElement(TextComponent, {
            bold: !0
        }, "Select marketplace")), e1.createElement(TextComponent, null, "No marketplaces configured."), e1.createElement(TextComponent, {
            dimColor: !0
        }, "Add a marketplace first using ", "'Add marketplace'", ".")), e1.createElement(j, {
            marginTop: 1,
            paddingLeft: 1
        }, e1.createElement(TextComponent, {
            dimColor: !0
        }, "Esc to go back")));
        return e1.createElement(j, {
            flexDirection: "column"
        }, e1.createElement(j, {
            flexDirection: "column",
            paddingX: 1,
            borderStyle: "round"
        }, e1.createElement(j, {
            marginBottom: 1
        }, e1.createElement(TextComponent, {
            bold: !0
        }, "Select marketplace")), QA && e1.createElement(j, {
            marginBottom: 1,
            flexDirection: "column"
        }, e1.createElement(TextComponent, {
            color: "warning"
        }, V1.warning, " ", QA)), H.map((KA, SA) => e1.createElement(j, {
            key: KA.name,
            flexDirection: "column",
            marginBottom: SA < H.length - 1 ? 1 : 0
        }, e1.createElement(j, null, e1.createElement(TextComponent, {
            color: q === SA ? "suggestion" : void 0
        }, q === SA ? V1.pointer : " ", " ", KA.name)), e1.createElement(j, {
            marginLeft: 2
        }, e1.createElement(TextComponent, {
            dimColor: !0
        }, KA.totalPlugins, " plugin", KA.totalPlugins !== 1 ? "s" : "", " available", KA.installedCount > 0 && ` · TextComponent{KA.installedCount} already installed`, KA.source && ` · TextComponent{KA.source}`))))), e1.createElement(j, {
            paddingLeft: 1
        }, e1.createElement(TextComponent, {
            dimColor: !0,
            italic: !0
        }, "Enter to select · esc to go back")))
    }
    if (W === "plugin-details" && K) {
        let KA = K.entry.homepage,
            sA = K.entry.source && typeof K.entry.source === "object" && "source" in K.entry.source && K.entry.source.source === "github" && typeof K.entry.source === "object" && "repo" in K.entry.source ? K.entry.source.repo : null,
            NA = [];
        if (NA.push({
                label: "Install now",
                action: "install"
            }), KA) NA.push({
            label: "Open homepage",
            action: "homepage"
        });
        if (sA) NA.push({
            label: "View on GitHub",
            action: "github"
        });
        return NA.push({
            label: "Back to plugin list",
            action: "back"
        }), e1.createElement(j, {
            flexDirection: "column"
        }, e1.createElement(j, {
            flexDirection: "column",
            paddingX: 1,
            borderStyle: "round"
        }, e1.createElement(j, {
            marginBottom: 1
        }, e1.createElement(TextComponent, {
            bold: !0
        }, "Plugin Details")), e1.createElement(j, {
            flexDirection: "column",
            marginBottom: 1
        }, e1.createElement(TextComponent, {
            bold: !0
        }, K.entry.name), K.entry.version && e1.createElement(TextComponent, {
            dimColor: !0
        }, "Version: ", K.entry.version), K.entry.description && e1.createElement(j, {
            marginTop: 1
        }, e1.createElement(TextComponent, null, K.entry.description)), K.entry.author && e1.createElement(j, {
            marginTop: 1
        }, e1.createElement(TextComponent, {
            dimColor: !0
        }, "By:", " ", typeof K.entry.author === "string" ? K.entry.author : K.entry.author.name))), e1.createElement(j, {
            flexDirection: "column",
            marginBottom: 1
        }, e1.createElement(TextComponent, {
            bold: !0
        }, "Will install:"), K.entry.commands && e1.createElement(TextComponent, {
            dimColor: !0
        }, "• Commands:", " ", Array.isArray(K.entry.commands) ? K.entry.commands.join(", ") : Object.keys(K.entry.commands).join(", ")), K.entry.agents && e1.createElement(TextComponent, {
            dimColor: !0
        }, "• Agents:", " ", Array.isArray(K.entry.agents) ? K.entry.agents.join(", ") : Object.keys(K.entry.agents).join(", ")), K.entry.hooks && e1.createElement(TextComponent, {
            dimColor: !0
        }, "• Hooks: ", Object.keys(K.entry.hooks).join(", ")), K.entry.mcpServers && e1.createElement(TextComponent, {
            dimColor: !0
        }, "• MCP Servers:", " ", Array.isArray(K.entry.mcpServers) ? K.entry.mcpServers.join(", ") : typeof K.entry.mcpServers === "object" ? Object.keys(K.entry.mcpServers).join(", ") : "configured"), !K.entry.commands && !K.entry.agents && !K.entry.hooks && !K.entry.mcpServers && e1.createElement(e1.Fragment, null, typeof K.entry.source === "object" && "source" in K.entry.source && (K.entry.source.source === "github" || K.entry.source.source === "url" || K.entry.source.source === "npm" || K.entry.source.source === "pip") ? e1.createElement(TextComponent, {
            dimColor: !0
        }, "• Component summary not available for remote plugin") : e1.createElement(TextComponent, {
            dimColor: !0
        }, "• Components will be discovered at installation"))), k && e1.createElement(j, {
            marginBottom: 1
        }, e1.createElement(TextComponent, {
            color: "error"
        }, "Error: ", k)), e1.createElement(j, {
            flexDirection: "column"
        }, NA.map((qA, DA) => e1.createElement(j, {
            key: qA.action
        }, p === DA && e1.createElement(TextComponent, null, "> "), p !== DA && e1.createElement(TextComponent, null, "  "), e1.createElement(TextComponent, {
            bold: p === DA
        }, o && qA.action === "install" ? "Installing…" : qA.label))))), e1.createElement(j, {
            marginTop: 1,
            paddingLeft: 1
        }, e1.createElement(TextComponent, {
            dimColor: !0
        }, e1.createElement(TextComponent, {
            bold: !0
        }, "Select:"), " Enter", " • ", e1.createElement(TextComponent, {
            bold: !0
        }, "Back:"), " Esc")))
    }
    if (E.length === 0) return e1.createElement(j, {
        flexDirection: "column"
    }, e1.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, e1.createElement(j, {
        marginBottom: 1
    }, e1.createElement(TextComponent, {
        bold: !0
    }, F, " ", V1.pointerSmall, " Install plugins")), e1.createElement(TextComponent, {
        dimColor: !0
    }, "No new plugins available to install."), e1.createElement(TextComponent, {
        dimColor: !0
    }, "All plugins from this marketplace are already installed.")), e1.createElement(j, {
        marginLeft: 3
    }, e1.createElement(TextComponent, {
        dimColor: !0,
        italic: !0
    }, "Esc to go back")));
    return e1.createElement(j, {
        flexDirection: "column"
    }, e1.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, e1.createElement(j, {
        marginBottom: 1
    }, e1.createElement(TextComponent, {
        bold: !0
    }, F, " ", V1.pointerSmall, " Install plugins")), E.map((KA, SA) => {
        let sA = q === SA,
            NA = P.has(KA.pluginId),
            qA = v.has(KA.pluginId),
            DA = SA === E.length - 1;
        return e1.createElement(j, {
            key: KA.pluginId,
            flexDirection: "column",
            marginBottom: DA && !A ? 0 : 1
        }, e1.createElement(j, null, e1.createElement(TextComponent, {
            color: sA ? "suggestion" : void 0
        }, sA ? V1.pointer : " ", " "), e1.createElement(TextComponent, null, qA ? V1.ellipsis : NA ? V1.radioOn : V1.radioOff, " ", KA.entry.name, KA.entry.category && e1.createElement(TextComponent, {
            dimColor: !0
        }, " [", KA.entry.category, "]"))), KA.entry.description && e1.createElement(j, {
            marginLeft: 4
        }, e1.createElement(TextComponent, {
            dimColor: !0
        }, KA.entry.description.length > 60 ? KA.entry.description.substring(0, 57) + "..." : KA.entry.description), KA.entry.version && e1.createElement(TextComponent, {
            dimColor: !0
        }, " · v", KA.entry.version)))
    }), A && e1.createElement(j, {
        marginTop: 1
    }, e1.createElement(TextComponent, {
        color: "error"
    }, V1.cross, " ", A))), e1.createElement(m_3, {
        hasSelection: P.size > 0
    }))
}

function m_3({
    hasSelection: A
}) {
    let Q = [];
    return Q.push("Space to (de)select"), Q.push("Enter for details"), Q.push("Esc to go back"), e1.createElement(j, {
        marginLeft: 3
    }, e1.createElement(TextComponent, {
        italic: !0
    }, A && e1.createElement(TextComponent, {
        bold: !0,
        color: "suggestion"
    }, "Press i to install ·", " "), e1.createElement(TextComponent, {
        dimColor: !0
    }, "Space: (de)select · Enter: details · Esc: back")))
}
var e1, qK;
var dK9 = lazyLoader(() => {
    hA();
    hA();
    n2();
    kH();
    YzA();
    RB();
    bQA();
    w0();
    u1();
    lM();
    yjA();
    Ia();
    e1 = esmImport(VA(), 1), qK = esmImport(VA(), 1)
});

function cK9({
    pluginName: A,
    serverName: Q,
    configSchema: B,
    onSave: G,
    onCancel: Z
}) {
    let I = Object.keys(B),
        [Y, J] = i7.useState(0),
        [W, X] = i7.useState({}),
        [F, V] = i7.useState(""),
        K = I[Y],
        D = K ? B[K] : null,
        H = DQ(Z);
    if (h1((w, N) => {
            if (N.escape) {
                Z();
                return
            }
            if (N.tab && Y < I.length - 1) {
                if (K) X({
                    ...W,
                    [K]: F
                });
                J(Y + 1), V("");
                return
            }
            if (N.return) {
                if (K) {
                    let q = {
                        ...W,
                        [K]: F
                    };
                    if (Y === I.length - 1) {
                        let R = {};
                        for (let P of I) {
                            let y = q[P] || "",
                                v = B[P];
                            if (v?.type === "number") {
                                let x = Number(y);
                                R[P] = isNaN(x) ? y : x
                            } else if (v?.type === "boolean") R[P] = y.toLowerCase() === "true" || y === "1";
                            else R[P] = y
                        }
                        G(R)
                    } else X(q), J(Y + 1), V("")
                }
                return
            }
            if (N.backspace || N.delete) {
                V(F.slice(0, -1));
                return
            }
            if (w && !N.ctrl && !N.meta) V(F + w)
        }), !D || !K) return null;
    let C = D.sensitive === !0,
        E = D.required === !0,
        z = C ? "*".repeat(F.length) : F;
    return i7.default.createElement(j, {
        flexDirection: "column"
    }, i7.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round"
    }, i7.default.createElement(TextComponent, {
        bold: !0
    }, "Configure ", Q), i7.default.createElement(j, {
        marginLeft: 1
    }, i7.default.createElement(TextComponent, {
        dimColor: !0
    }, "Plugin: ", A)), i7.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, i7.default.createElement(TextComponent, {
        bold: !0
    }, D.title || K, E && i7.default.createElement(TextComponent, {
        color: "error"
    }, " *")), D.description && i7.default.createElement(TextComponent, {
        dimColor: !0
    }, D.description), i7.default.createElement(j, {
        marginTop: 1
    }, i7.default.createElement(TextComponent, null, V1.pointerSmall, " "), i7.default.createElement(TextComponent, null, z), i7.default.createElement(TextComponent, null, "█"))), i7.default.createElement(j, {
        marginTop: 1
    }, i7.default.createElement(TextComponent, {
        dimColor: !0
    }, "Field ", Y + 1, " of ", I.length)), Y < I.length - 1 && i7.default.createElement(j, null, i7.default.createElement(TextComponent, {
        dimColor: !0
    }, "Tab: Next field · Enter: Save and continue")), Y === I.length - 1 && i7.default.createElement(j, null, i7.default.createElement(TextComponent, {
        dimColor: !0
    }, "Enter: Save configuration"))), i7.default.createElement(j, {
        marginLeft: 3
    }, i7.default.createElement(TextComponent, {
        dimColor: !0
    }, H.pending ? i7.default.createElement(i7.default.Fragment, null, "Press ", H.keyName, " again to exit") : i7.default.createElement(i7.default.Fragment, null, "Esc to cancel"))))
}
var i7;
var pK9 = lazyLoader(() => {
    hA();
    c9();
    n2();
    i7 = esmImport(VA(), 1)
});
import * as hQA from "fs/promises";
import * as KFA from "path";
async function lK9(A) {
    try {
        return (await hQA.readdir(A, {
            withFileTypes: !0
        })).filter((B) => B.isFile() && B.name.endsWith(".md")).map((B) => {
            return KFA.basename(B.name, ".md")
        })
    } catch (Q) {
        let B = Q instanceof Error ? Q.message : String(Q);
        return g(`Failed to read plugin components from TextComponent{A}: TextComponent{B}`, {
            level: "error"
        }), e(Q instanceof Error ? Q : Error(`Failed to read plugin components: TextComponent{B}`)), []
    }
}
async function d_3(A) {
    try {
        let Q = await hQA.readdir(A, {
                withFileTypes: !0
            }),
            B = [];
        for (let G of Q)
            if (G.isDirectory() || G.isSymbolicLink()) {
                let Z = KFA.join(A, G.name, "SKILL.md");
                try {
                    await hQA.access(Z), B.push(G.name)
                } catch {}
            } return B
    } catch (Q) {
        let B = Q instanceof Error ? Q.message : String(Q);
        return g(`Failed to read skill directories from TextComponent{A}: TextComponent{B}`, {
            level: "error"
        }), e(Q instanceof Error ? Q : Error(`Failed to read skill directories: TextComponent{B}`)), []
    }
}

function c_3({
    plugin: A,
    marketplace: Q
}) {
    let [B, G] = rJ.useState(null), [Z, I] = rJ.useState(!0), [Y, J] = rJ.useState(null);
    if (rJ.useEffect(() => {
            async function X() {
                try {
                    let V = (await VD(Q)).plugins.find((K) => K.name === A.name);
                    if (V) {
                        let K = [];
                        if (A.commandsPath) K.push(A.commandsPath);
                        if (A.commandsPaths) K.push(...A.commandsPaths);
                        let D = [];
                        for (let q of K)
                            if (typeof q === "string") {
                                let R = await lK9(q);
                                D.push(...R)
                            } let H = [];
                        if (A.agentsPath) H.push(A.agentsPath);
                        if (A.agentsPaths) H.push(...A.agentsPaths);
                        let C = [];
                        for (let q of H)
                            if (typeof q === "string") {
                                let R = await lK9(q);
                                C.push(...R)
                            } let E = [];
                        if (A.skillsPath) E.push(A.skillsPath);
                        if (A.skillsPaths) E.push(...A.skillsPaths);
                        let z = [];
                        for (let q of E)
                            if (typeof q === "string") {
                                let R = await d_3(q);
                                z.push(...R)
                            } let w = [];
                        if (A.hooksConfig) w.push(Object.keys(A.hooksConfig));
                        if (V.hooks) w.push(V.hooks);
                        let N = [];
                        if (A.mcpServers) N.push(Object.keys(A.mcpServers));
                        if (V.mcpServers) N.push(V.mcpServers);
                        G({
                            commands: D.length > 0 ? D : null,
                            agents: C.length > 0 ? C : null,
                            skills: z.length > 0 ? z : null,
                            hooks: w.length > 0 ? w : null,
                            mcpServers: N.length > 0 ? N : null
                        })
                    } else J(`Plugin TextComponent{A.name} not found in marketplace`)
                } catch (F) {
                    J(F instanceof Error ? F.message : "Failed to load components")
                } finally {
                    I(!1)
                }
            }
            X()
        }, [A.name, A.commandsPath, A.commandsPaths, A.agentsPath, A.agentsPaths, A.skillsPath, A.skillsPaths, A.hooksConfig, A.mcpServers, Q]), Z) return null;
    if (Y) return A0.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, A0.createElement(TextComponent, {
        bold: !0
    }, "Components:"), A0.createElement(TextComponent, {
        dimColor: !0
    }, "Error: ", Y));
    if (!B) return null;
    if (!(B.commands || B.agents || B.skills || B.hooks || B.mcpServers)) return null;
    return A0.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, A0.createElement(TextComponent, {
        bold: !0
    }, "Installed components:"), B.commands ? A0.createElement(TextComponent, {
        dimColor: !0
    }, "• Commands:", " ", typeof B.commands === "string" ? B.commands : Array.isArray(B.commands) ? B.commands.join(", ") : Object.keys(B.commands).join(", ")) : null, B.agents ? A0.createElement(TextComponent, {
        dimColor: !0
    }, "• Agents:", " ", typeof B.agents === "string" ? B.agents : Array.isArray(B.agents) ? B.agents.join(", ") : Object.keys(B.agents).join(", ")) : null, B.skills ? A0.createElement(TextComponent, {
        dimColor: !0
    }, "• Skills:", " ", typeof B.skills === "string" ? B.skills : Array.isArray(B.skills) ? B.skills.join(", ") : Object.keys(B.skills).join(", ")) : null, B.hooks ? A0.createElement(TextComponent, {
        dimColor: !0
    }, "• Hooks:", " ", typeof B.hooks === "string" ? B.hooks : Array.isArray(B.hooks) ? B.hooks.map(String).join(", ") : typeof B.hooks === "object" && B.hooks !== null ? Object.keys(B.hooks).join(", ") : String(B.hooks)) : null, B.mcpServers ? A0.createElement(TextComponent, {
        dimColor: !0
    }, "• MCP Servers:", " ", typeof B.mcpServers === "string" ? B.mcpServers : Array.isArray(B.mcpServers) ? B.mcpServers.map(String).join(", ") : typeof B.mcpServers === "object" && B.mcpServers !== null ? Object.keys(B.mcpServers).join(", ") : String(B.mcpServers)) : null)
}
async function NV0(A, Q) {
    let G = (await VD(Q))?.plugins.find((Z) => Z.name === A);
    if (G && typeof G.source === "string") return `Local plugins cannot be updated remotely. To update, modify the source at: TextComponent{G.source}`;
    return null
}

function iK9({
    setViewState: A,
    setResult: Q,
    onManageComplete: B,
    targetPlugin: G,
    action: Z
}) {
    let [I, Y] = rJ.useState("marketplace-list"), [J, W] = rJ.useState(null), [X, F] = rJ.useState(null), [V, K] = rJ.useState([]), [D, H] = rJ.useState([]), [C, E] = rJ.useState(!0), [z, w] = rJ.useState(0), [N, q] = rJ.useState(0), [R, P] = rJ.useState(!1), [y, v] = rJ.useState(null), [x, p] = rJ.useState(null), [u, o] = rJ.useState(!1), [l, k] = rJ.useState(!1);
    rJ.useEffect(() => {
        if (!X) {
            k(!1);
            return
        }
        async function DA() {
            let yA = X.plugin.manifest.mcpServers,
                rA = !1;
            if (yA) rA = typeof yA === "string" && QM(yA) || Array.isArray(yA) && yA.some((K1) => typeof K1 === "string" && QM(K1));
            if (!rA) try {
                let K1 = KFA.join(X.plugin.path, ".."),
                    WA = KFA.join(K1, ".claude-plugin", "marketplace.json"),
                    XA = await hQA.readFile(WA, "utf-8"),
                    $A = JSON.parse(XA).plugins?.find((LA) => LA.name === X.plugin.name);
                if ($A?.mcpServers) {
                    let LA = $A.mcpServers;
                    rA = typeof LA === "string" && QM(LA) || Array.isArray(LA) && LA.some((TA) => typeof TA === "string" && QM(TA))
                }
            } catch (K1) {
                g(`Failed to read raw marketplace.json: TextComponent{K1}`)
            }
            k(rA)
        }
        DA()
    }, [X]), rJ.useEffect(() => {
        async function DA() {
            E(!0);
            try {
                let {
                    enabled: yA,
                    disabled: rA
                } = await y7(), K1 = [...yA, ...rA], WA = c0(), XA = {};
                for (let $A of K1) {
                    let LA = $A.source.split("@")[1] || "local";
                    if (!XA[LA]) XA[LA] = [];
                    XA[LA].push($A)
                }
                let zA = [];
                for (let [$A, LA] of Object.entries(XA)) {
                    let TA = LA.filter((BASE64_CHARS) => {
                            let I1 = `TextComponent{BASE64_CHARS.name}@TextComponent{$A}`;
                            return WA?.enabledPlugins?.[I1] !== !1
                        }).length,
                        eA = LA.length - TA;
                    zA.push({
                        name: $A,
                        installedPlugins: LA,
                        enabledCount: TA,
                        disabledCount: eA
                    })
                }
                zA.sort(($A, LA) => $A.name.localeCompare(LA.name)), K(zA), w(0)
            } finally {
                E(!1)
            }
        }
        DA()
    }, []), rJ.useEffect(() => {
        if (J && I === "plugin-list") {
            let DA = V.find((yA) => yA.name === J);
            if (DA) {
                let yA = DA.installedPlugins.map((rA) => {
                    return {
                        plugin: rA,
                        marketplace: DA.name,
                        pendingEnable: void 0,
                        pendingUpdate: !1
                    }
                });
                H(yA), w(0)
            }
        }
    }, [J, I, V]);
    let d = () => {
            return D.some((DA) => DA.pendingEnable !== void 0 || DA.pendingUpdate)
        },
        QA = () => {
            let DA = D.filter((K1) => K1.pendingUpdate).length,
                yA = D.filter((K1) => K1.pendingEnable === !0).length,
                rA = D.filter((K1) => K1.pendingEnable === !1).length;
            return {
                updateCount: DA,
                enableCount: yA,
                disableCount: rA
            }
        },
        IA = async () => {
            P(!0), v(null);
            try {
                let yA = {
                        ...LB("userSettings")?.enabledPlugins
                    },
                    rA = 0,
                    K1 = 0,
                    WA = 0;
                for (let $A of D) {
                    let LA = `TextComponent{$A.plugin.name}@TextComponent{$A.marketplace}`;
                    if ($A.pendingUpdate) {
                        let eA = (await VD($A.marketplace))?.plugins.find((BASE64_CHARS) => BASE64_CHARS.name === $A.plugin.name);
                        if (eA && typeof eA.source !== "string") await nP(LA, eA), rA++
                    }
                    if ($A.pendingEnable !== void 0)
                        if ($A.pendingEnable) {
                            if (!jg(LA)) {
                                let eA = (await VD($A.marketplace))?.plugins.find((BASE64_CHARS) => BASE64_CHARS.name === $A.plugin.name);
                                if (eA && typeof eA.source !== "string") await nP(LA, eA)
                            }
                            yA[LA] = !0, K1++
                        } else yA[LA] = !1, WA++
                }
                cB("userSettings", {
                    enabledPlugins: yA
                }), oF();
                let XA = [];
                if (rA > 0) XA.push(`Updated TextComponent{rA} plugin${rA!==1?"s":""}`);
                if (K1 > 0) XA.push(`Enabled TextComponent{K1} plugin${K1!==1?"s":""}`);
                if (WA > 0) XA.push(`Disabled TextComponent{WA} plugin${WA!==1?"s":""}`);
                let zA = `✓ TextComponent{XA.join(", ")}. Restart Claude Code to apply changes.`;
                if (Q(zA), B) await B();
                A({
                    type: "menu"
                })
            } catch (DA) {
                P(!1);
                let yA = DA instanceof Error ? DA.message : String(DA);
                v(`Failed to apply changes: TextComponent{yA}`), e(DA instanceof Error ? DA : Error(`Failed to apply plugin changes: TextComponent{String(DA)}`))
            }
        }, HA = async (DA) => {
            let rA = {
                    ...LB("userSettings")?.enabledPlugins
                },
                zA = NQA().plugins[DA]?.find((LA) => LA.scope === "user")?.installPath;
            if ($59(DA), RI1(DA, "user"), zA && zA.includes("/cache/")) try {
                TI1(zA)
            } catch (LA) {
                e(LA instanceof Error ? LA : Error(String(LA)))
            } else if (zA) g(`Skipping cache deletion for plugin TextComponent{DA} at TextComponent{zA} (not a cache path)`);
            rA[DA] = void 0;
            let {
                error: $A
            } = cB("userSettings", {
                enabledPlugins: rA
            });
            if ($A) throw $A;
            oF()
        }, wA = async (DA) => {
            if (!X) return;
            P(!0), v(null);
            try {
                let yA = `TextComponent{X.plugin.name}@TextComponent{X.marketplace}`,
                    K1 = {
                        ...LB("userSettings")?.enabledPlugins
                    };
                switch (DA) {
                    case "enable": {
                        if (!jg(yA)) {
                            let $A = (await VD(X.marketplace))?.plugins.find((LA) => LA.name === X.plugin.name);
                            if ($A && typeof $A.source !== "string") await nP(yA, $A)
                        }
                        K1[yA] = !0;
                        break
                    }
                    case "disable":
                        K1[yA] = !1;
                        break;
                    case "uninstall": {
                        await HA(yA);
                        break
                    }
                    case "update": {
                        let $A = (await VD(X.marketplace))?.plugins.find((LA) => LA.name === X.plugin.name);
                        if ($A && typeof $A.source !== "string") await nP(yA, $A);
                        break
                    }
                }
                if (DA !== "uninstall") {
                    let {
                        error: zA
                    } = cB("userSettings", {
                        enabledPlugins: K1
                    });
                    if (zA) throw zA;
                    oF()
                }
                let XA = `✓ TextComponent{DA==="enable"?"Enabled":DA==="disable"?"Disabled":DA==="update"?"Updated":"Uninstalled"} TextComponent{X.plugin.name}. Restart Claude Code to apply changes.`;
                if (Q(XA), B) await B();
                A({
                    type: "menu"
                })
            } catch (yA) {
                P(!1);
                let rA = yA instanceof Error ? yA.message : String(yA);
                v(`Failed to TextComponent{DA}: TextComponent{rA}`), e(yA instanceof Error ? yA : Error(`Failed to TextComponent{DA} plugin: TextComponent{String(yA)}`))
            }
        }, KA = async (DA) => {
            P(!0), v(null);
            try {
                let yA = `TextComponent{DA.plugin.name}@TextComponent{DA.marketplace}`;
                await HA(yA);
                let {
                    enabled: rA,
                    disabled: K1
                } = await y7(), WA = [...rA, ...K1];
                if (V.find((zA) => zA.name === J)) {
                    let zA = WA.filter((BASE64_CHARS) => {
                            return (BASE64_CHARS.source.split("@")[1] || "local") === J
                        }),
                        $A = zA.map((BASE64_CHARS) => ({
                            plugin: BASE64_CHARS,
                            marketplace: J,
                            pendingEnable: void 0,
                            pendingUpdate: !1
                        }));
                    H($A);
                    let LA = c0(),
                        TA = zA.filter((BASE64_CHARS) => {
                            let I1 = `TextComponent{BASE64_CHARS.name}@TextComponent{J}`;
                            return LA?.enabledPlugins?.[I1] !== !1
                        }).length,
                        eA = zA.length - TA;
                    if (K((BASE64_CHARS) => BASE64_CHARS.map((I1) => I1.name === J ? {
                            ...I1,
                            installedPlugins: zA,
                            enabledCount: TA,
                            disabledCount: eA
                        } : I1)), z >= $A.length) w(Math.max(0, $A.length - 1))
                }
                Q(`✓ Uninstalled TextComponent{DA.plugin.name}. Restart Claude Code to apply changes.`)
            } catch (yA) {
                let rA = yA instanceof Error ? yA.message : String(yA);
                v(`Failed to uninstall: TextComponent{rA}`), e(yA instanceof Error ? yA : Error(`Failed to uninstall plugin: TextComponent{String(yA)}`))
            } finally {
                P(!1)
            }
        };
    if (h1((DA, yA) => {
            if (yA.escape) {
                if (I === "plugin-list") Y("marketplace-list"), W(null), H([]);
                else if (I === "plugin-details") Y("plugin-list"), F(null), v(null);
                else if (I === "configuring") Y("plugin-details"), p(null);
                else A({
                    type: "menu"
                });
                return
            }
            if (I === "marketplace-list") {
                if ((yA.upArrow || DA === "k") && z > 0) w(z - 1);
                else if ((yA.downArrow || DA === "j") && z < V.length - 1) w(z + 1);
                else if (yA.return) {
                    let rA = V[z];
                    if (rA) W(rA.name), Y("plugin-list")
                }
            } else if (I === "plugin-list") {
                let rA = d(),
                    K1 = D.length + (rA ? 1 : 0);
                if ((yA.upArrow || DA === "k") && z > 0) w(z - 1);
                else if ((yA.downArrow || DA === "j") && z < K1 - 1) w(z + 1);
                else if (DA === " " && z < D.length) {
                    let WA = [...D],
                        XA = WA[z];
                    if (XA) {
                        let zA = c0(),
                            $A = `TextComponent{XA.plugin.name}@TextComponent{XA.marketplace}`,
                            LA = zA?.enabledPlugins?.[$A] !== !1;
                        if (XA.pendingEnable === void 0) XA.pendingEnable = !LA;
                        else XA.pendingEnable = void 0;
                        H(WA)
                    }
                } else if (DA === "u" && z < D.length) {
                    let WA = [...D],
                        XA = WA[z];
                    if (XA)(async () => {
                        try {
                            let $A = await NV0(XA.plugin.name, XA.marketplace);
                            if ($A) {
                                v($A);
                                return
                            }
                            XA.pendingUpdate = !XA.pendingUpdate, H(WA)
                        } catch ($A) {
                            v($A instanceof Error ? $A.message : "Failed to check plugin update availability")
                        }
                    })()
                } else if (yA.delete || yA.backspace) {
                    if (z < D.length && !R) {
                        let WA = D[z];
                        if (WA) KA(WA)
                    }
                } else if (yA.return) {
                    if (z === D.length && rA) IA();
                    else if (z < D.length) {
                        let WA = D[z];
                        if (WA) F(WA), Y("plugin-details"), q(0), v(null)
                    }
                }
            } else if (I === "plugin-details" && X) {
                let rA = c0(),
                    K1 = `TextComponent{X.plugin.name}@TextComponent{X.marketplace}`,
                    WA = rA?.enabledPlugins?.[K1] !== !1,
                    XA = [];
                if (XA.push({
                        label: WA ? "Disable plugin" : "Enable plugin",
                        action: () => void wA(WA ? "disable" : "enable")
                    }), XA.push({
                        label: X.pendingUpdate ? "Unmark for update" : "Mark for update",
                        action: async () => {
                            try {
                                let zA = await NV0(X.plugin.name, X.marketplace);
                                if (zA) {
                                    v(zA);
                                    return
                                }
                                let $A = [...D],
                                    LA = $A.findIndex((TA) => TA.plugin.name === X.plugin.name && TA.marketplace === X.marketplace);
                                if (LA !== -1) $A[LA].pendingUpdate = !X.pendingUpdate, H($A), F({
                                    ...X,
                                    pendingUpdate: !X.pendingUpdate
                                })
                            } catch (zA) {
                                v(zA instanceof Error ? zA.message : "Failed to check plugin update availability")
                            }
                        }
                    }), l) XA.push({
                    label: "Configure",
                    action: async () => {
                        o(!0);
                        try {
                            let zA = X.plugin.manifest.mcpServers,
                                $A = null;
                            if (typeof zA === "string" && QM(zA)) $A = zA;
                            else if (Array.isArray(zA)) {
                                for (let eA of zA)
                                    if (typeof eA === "string" && QM(eA)) {
                                        $A = eA;
                                        break
                                    }
                            }
                            if (!$A) {
                                v("No MCPB file found in plugin"), o(!1);
                                return
                            }
                            let LA = `TextComponent{X.plugin.name}@TextComponent{X.marketplace}`,
                                TA = await fzA($A, X.plugin.path, LA, void 0, void 0, !0);
                            if ("status" in TA && TA.status === "needs-config") p(TA), Y("configuring");
                            else v("Failed to load MCPB for configuration")
                        } catch (zA) {
                            let $A = zA instanceof Error ? zA.message : String(zA);
                            v(`Failed to load configuration: TextComponent{$A}`)
                        } finally {
                            o(!1)
                        }
                    }
                });
                if (XA.push({
                        label: "Update now",
                        action: () => void wA("update")
                    }), XA.push({
                        label: "Uninstall",
                        action: () => void wA("uninstall")
                    }), X.plugin.manifest.homepage) XA.push({
                    label: "Open homepage",
                    action: () => void gZ(X.plugin.manifest.homepage)
                });
                if (X.plugin.manifest.repository) XA.push({
                    label: "View on GitHub",
                    action: () => void gZ(X.plugin.manifest.repository)
                });
                if (XA.push({
                        label: "Back to plugin list",
                        action: () => {
                            Y("plugin-list"), F(null), v(null)
                        }
                    }), (yA.upArrow || DA === "k") && N > 0) q(N - 1);
                else if ((yA.downArrow || DA === "j") && N < XA.length - 1) q(N + 1);
                else if (yA.return && XA[N]) XA[N].action()
            }
        }), C) return A0.createElement(j, {
        flexDirection: "column"
    }, A0.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, A0.createElement(TextComponent, null, "Loading installed plugins…")));
    if (V.length === 0) return A0.createElement(j, {
        flexDirection: "column"
    }, A0.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, A0.createElement(j, {
        marginBottom: 1
    }, A0.createElement(TextComponent, {
        bold: !0
    }, "Manage plugins")), A0.createElement(TextComponent, null, "No plugins installed.")), A0.createElement(j, {
        marginTop: 1,
        paddingLeft: 1
    }, A0.createElement(TextComponent, {
        dimColor: !0
    }, "Esc to go back")));
    if (I === "marketplace-list") return A0.createElement(j, {
        flexDirection: "column"
    }, A0.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, A0.createElement(TextComponent, {
        bold: !0
    }, "Manage plugins"), A0.createElement(j, {
        marginBottom: 1
    }, A0.createElement(TextComponent, {
        dimColor: !0
    }, "Select a marketplace to manage plugins:")), V.map((DA, yA) => {
        let rA = yA === z,
            K1 = DA.installedPlugins.length,
            WA = DA.enabledCount ?? K1,
            XA = DA.disabledCount ?? 0,
            zA = yA === V.length - 1;
        return A0.createElement(j, {
            key: DA.name,
            flexDirection: "column",
            marginBottom: zA ? 0 : 1
        }, A0.createElement(j, null, A0.createElement(TextComponent, {
            color: rA ? "suggestion" : void 0
        }, rA ? V1.pointer : " ", " ", DA.name)), A0.createElement(j, {
            marginLeft: 2
        }, A0.createElement(TextComponent, {
            dimColor: !0
        }, K1, " plugin", K1 !== 1 ? "s" : "", " installed", WA > 0 && ` · TextComponent{WA} enabled`, XA > 0 && ` · TextComponent{XA} disabled`)))
    })), A0.createElement(j, {
        paddingLeft: 1
    }, A0.createElement(TextComponent, {
        dimColor: !0,
        italic: !0
    }, V1.arrowUp, V1.arrowDown, " enter to select · esc to go back")));
    if (I === "configuring" && x && X) {
        let rA = function() {
                p(null), Y("plugin-details")
            },
            DA = `TextComponent{X.plugin.name}@TextComponent{X.marketplace}`;
        async function yA(K1) {
            if (!x || !X) return;
            try {
                let WA = X.plugin.manifest.mcpServers,
                    XA = null;
                if (typeof WA === "string" && QM(WA)) XA = WA;
                else if (Array.isArray(WA)) {
                    for (let zA of WA)
                        if (typeof zA === "string" && QM(zA)) {
                            XA = zA;
                            break
                        }
                }
                if (!XA) {
                    v("No MCPB file found"), Y("plugin-details");
                    return
                }
                await fzA(XA, X.plugin.path, DA, void 0, K1), v(null), p(null), Y("plugin-details"), Q("Configuration saved. Restart Claude Code for changes to take effect.")
            } catch (WA) {
                let XA = WA instanceof Error ? WA.message : String(WA);
                v(`Failed to save configuration: TextComponent{XA}`), Y("plugin-details")
            }
        }
        return A0.createElement(cK9, {
            pluginName: X.plugin.name,
            serverName: x.manifest.name,
            configSchema: x.configSchema,
            onSave: yA,
            onCancel: rA
        })
    }
    if (I === "plugin-details" && X) {
        let DA = c0(),
            yA = `TextComponent{X.plugin.name}@TextComponent{X.marketplace}`,
            rA = DA?.enabledPlugins?.[yA] !== !1,
            K1 = [];
        if (K1.push({
                label: rA ? "Disable plugin" : "Enable plugin",
                action: () => void wA(rA ? "disable" : "enable")
            }), K1.push({
                label: X.pendingUpdate ? "Unmark for update" : "Mark for update",
                action: async () => {
                    try {
                        let WA = await NV0(X.plugin.name, X.marketplace);
                        if (WA) {
                            v(WA);
                            return
                        }
                        let XA = [...D],
                            zA = XA.findIndex(($A) => $A.plugin.name === X.plugin.name && $A.marketplace === X.marketplace);
                        if (zA !== -1) XA[zA].pendingUpdate = !X.pendingUpdate, H(XA), F({
                            ...X,
                            pendingUpdate: !X.pendingUpdate
                        })
                    } catch (WA) {
                        v(WA instanceof Error ? WA.message : "Failed to check plugin update availability")
                    }
                }
            }), l) K1.push({
            label: "Configure",
            action: () => {}
        });
        if (K1.push({
                label: "Update now",
                action: () => void wA("update")
            }), K1.push({
                label: "Uninstall",
                action: () => void wA("uninstall")
            }), X.plugin.manifest.homepage) K1.push({
            label: "Open homepage",
            action: () => void gZ(X.plugin.manifest.homepage)
        });
        if (X.plugin.manifest.repository) K1.push({
            label: "View on GitHub",
            action: () => void gZ(X.plugin.manifest.repository)
        });
        return K1.push({
            label: "Back to plugin list",
            action: () => {
                Y("plugin-list"), F(null), v(null)
            }
        }), A0.createElement(j, {
            flexDirection: "column"
        }, A0.createElement(j, {
            flexDirection: "column",
            paddingX: 1,
            borderStyle: "round"
        }, A0.createElement(j, {
            marginBottom: 1
        }, A0.createElement(TextComponent, {
            bold: !0
        }, X.plugin.name, " @ ", X.marketplace)), X.plugin.manifest.version && A0.createElement(j, {
            marginBottom: 1
        }, A0.createElement(TextComponent, {
            dimColor: !0
        }, "Version: "), A0.createElement(TextComponent, null, X.plugin.manifest.version)), X.plugin.manifest.description && A0.createElement(j, {
            marginBottom: 1
        }, A0.createElement(TextComponent, null, X.plugin.manifest.description)), X.plugin.manifest.author && A0.createElement(j, {
            marginBottom: 1
        }, A0.createElement(TextComponent, {
            dimColor: !0
        }, "Author: "), A0.createElement(TextComponent, null, X.plugin.manifest.author.name)), A0.createElement(j, {
            marginBottom: 1
        }, A0.createElement(TextComponent, {
            dimColor: !0
        }, "Status: "), A0.createElement(TextComponent, {
            color: rA ? "success" : "warning"
        }, rA ? "Enabled" : "Disabled"), X.pendingUpdate && A0.createElement(TextComponent, {
            color: "suggestion"
        }, " · Marked for update")), A0.createElement(c_3, {
            plugin: X.plugin,
            marketplace: X.marketplace
        }), A0.createElement(j, {
            marginTop: 1,
            flexDirection: "column"
        }, K1.map((WA, XA) => {
            let zA = XA === N;
            return A0.createElement(j, {
                key: XA
            }, zA && A0.createElement(TextComponent, null, V1.pointer, " "), !zA && A0.createElement(TextComponent, null, "  "), A0.createElement(TextComponent, {
                bold: zA,
                color: WA.label.includes("Uninstall") ? "error" : WA.label.includes("Update") ? "suggestion" : void 0
            }, WA.label))
        })), R && A0.createElement(j, {
            marginTop: 1
        }, A0.createElement(TextComponent, null, "Processing…")), y && A0.createElement(j, {
            marginTop: 1
        }, A0.createElement(TextComponent, {
            color: "error"
        }, y))), A0.createElement(j, {
            marginTop: 1,
            paddingLeft: 1
        }, A0.createElement(TextComponent, {
            dimColor: !0
        }, A0.createElement(TextComponent, {
            bold: !0
        }, "Navigate:"), " ", V1.arrowUp, V1.arrowDown, " • ", A0.createElement(TextComponent, {
            bold: !0
        }, "Select:"), " Enter", " • ", A0.createElement(TextComponent, {
            bold: !0
        }, "Back:"), " Esc")))
    }
    let SA = d(),
        {
            updateCount: sA,
            enableCount: NA,
            disableCount: qA
        } = QA();
    return A0.createElement(j, {
        flexDirection: "column"
    }, A0.createElement(j, {
        flexDirection: "column",
        paddingX: 1,
        borderStyle: "round"
    }, A0.createElement(j, {
        marginBottom: 1
    }, A0.createElement(TextComponent, {
        bold: !0
    }, J, " ", V1.pointerSmall, " Manage plugins")), D.map((DA, yA) => {
        let rA = c0(),
            K1 = `TextComponent{DA.plugin.name}@TextComponent{DA.marketplace}`,
            WA = rA?.enabledPlugins?.[K1] !== !1,
            XA = DA.pendingEnable !== void 0 ? DA.pendingEnable : WA,
            zA = yA === z,
            $A = DA.pendingEnable !== void 0 || DA.pendingUpdate,
            LA = yA === D.length - 1;
        return A0.createElement(j, {
            key: K1,
            flexDirection: "column",
            marginBottom: LA ? 0 : 1
        }, A0.createElement(j, null, A0.createElement(TextComponent, {
            color: zA ? "suggestion" : void 0
        }, zA ? V1.pointer : " ", " "), A0.createElement(TextComponent, {
            color: DA.pendingEnable !== void 0 ? "warning" : XA ? "success" : void 0
        }, XA ? V1.radioOn : V1.radioOff, " "), A0.createElement(TextComponent, {
            bold: zA,
            color: DA.pendingUpdate ? "suggestion" : $A ? "warning" : void 0
        }, DA.plugin.name)), A0.createElement(j, {
            marginLeft: 4
        }, A0.createElement(TextComponent, {
            dimColor: !0
        }, DA.plugin.manifest.description ? DA.plugin.manifest.description.length > 50 ? DA.plugin.manifest.description.substring(0, 47) + "..." : DA.plugin.manifest.description : "No description", DA.plugin.manifest.version && ` · v${DA.plugin.manifest.version}`), DA.pendingUpdate && A0.createElement(TextComponent, {
            color: "suggestion"
        }, " · Marked for update")))
    }), SA && A0.createElement(j, {
        marginTop: 1
    }, z === D.length && A0.createElement(TextComponent, null, V1.pointer, " "), z !== D.length && A0.createElement(TextComponent, null, "  "), A0.createElement(TextComponent, {
        bold: z === D.length,
        color: "success"
    }, "Apply changes"), A0.createElement(TextComponent, {
        dimColor: !0
    }, " ", sA > 0 && `(update TextComponent{sA})`, NA > 0 && ` (enable TextComponent{NA})`, qA > 0 && ` (disable TextComponent{qA})`))), SA && A0.createElement(j, {
        marginTop: 1,
        paddingLeft: 1
    }, A0.createElement(TextComponent, {
        color: "warning"
    }, "Restart to apply changes")), A0.createElement(j, {
        paddingLeft: 3,
        flexDirection: "column"
    }, A0.createElement(TextComponent, {
        dimColor: !0,
        italic: !0
    }, "Space to toggle enabled · 'u' to mark update · Delete to uninstall"), A0.createElement(TextComponent, {
        dimColor: !0,
        italic: !0
    }, "Enter for details · Esc to back")))
}
var A0, rJ;
var nK9 = lazyLoader(() => {
    hA();
    hA();
    n2();
    NF();
    kH();
    RB();
    bQA();
    lM();
    u1();
    D0();
    Ia();
    yjA();
    pK9();
    ev1();
    A0 = esmImport(VA(), 1), rJ = esmImport(VA(), 1)
});

function p_3(A) {
    switch (A.type) {
        case "path-not-found":
            return `TextComponent{A.component} path not found: TextComponent{A.path}`;
        case "git-auth-failed":
            return `Git TextComponent{A.authType.toUpperCase()} authentication failed for TextComponent{A.gitUrl}`;
        case "git-timeout":
            return `Git TextComponent{A.operation} timed out for TextComponent{A.gitUrl}`;
        case "network-error":
            return `Network error accessing TextComponent{A.url}TextComponent{A.details?`: TextComponent{A.details}`:""}`;
        case "manifest-parse-error":
            return `Failed to parse manifest at TextComponent{A.manifestPath}: TextComponent{A.parseError}`;
        case "manifest-validation-error":
            return `Invalid manifest at TextComponent{A.manifestPath}: TextComponent{A.validationErrors.join(", ")}`;
        case "plugin-not-found":
            return `Plugin 'TextComponent{A.pluginId}' not found in marketplace 'TextComponent{A.marketplace}'`;
        case "marketplace-not-found":
            return `Marketplace 'TextComponent{A.marketplace}' not found`;
        case "marketplace-load-failed":
            return `Failed to load marketplace 'TextComponent{A.marketplace}': TextComponent{A.reason}`;
        case "repository-scan-failed":
            return `Failed to scan repository at TextComponent{A.repositoryPath}: TextComponent{A.reason}`;
        case "mcp-config-invalid":
            return `Invalid MCP server config for 'TextComponent{A.serverName}': TextComponent{A.validationError}`;
        case "hook-load-failed":
            return `Failed to load hooks from TextComponent{A.hookPath}: TextComponent{A.reason}`;
        case "component-load-failed":
            return `Failed to load TextComponent{A.component} from TextComponent{A.path}: TextComponent{A.reason}`;
        case "mcpb-download-failed":
            return `Failed to download MCPB from TextComponent{A.url}: TextComponent{A.reason}`;
        case "mcpb-extract-failed":
            return `Failed to extract MCPB TextComponent{A.mcpbPath}: TextComponent{A.reason}`;
        case "mcpb-invalid-manifest":
            return `MCPB manifest invalid at TextComponent{A.mcpbPath}: TextComponent{A.validationError}`;
        case "marketplace-blocked-by-policy":
            return `Marketplace 'TextComponent{A.marketplace}' is not allowed by enterprise policy`;
        case "generic-error":
            return A.error;
        default:
            return "Unknown error"
    }
}

function aK9(A) {
    switch (A.type) {
        case "path-not-found":
            return "→ Check that the path in your manifest or marketplace config is correct";
        case "git-auth-failed":
            return A.authType === "ssh" ? "→ Configure SSH keys or use HTTPS URL instead" : "→ Configure credentials or use SSH URL instead";
        case "git-timeout":
        case "network-error":
            return "→ Check your internet connection and try again";
        case "manifest-parse-error":
            return "→ Check manifest file syntax in the plugin directory";
        case "manifest-validation-error":
            return "→ Check manifest file follows the required schema";
        case "plugin-not-found":
            return `→ Plugin may not exist in marketplace 'TextComponent{A.marketplace}'`;
        case "marketplace-not-found":
            return A.availableMarketplaces.length > 0 ? `→ Available marketplaces: TextComponent{A.availableMarketplaces.join(", ")}` : "→ Add the marketplace first using /plugin marketplace add";
        case "mcp-config-invalid":
            return "→ Check MCP server configuration in .mcp.json or manifest";
        case "hook-load-failed":
            return "→ Check hooks.json file syntax and structure";
        case "component-load-failed":
            return `→ Check TextComponent{A.component} directory structure and file permissions`;
        case "mcpb-download-failed":
            return "→ Check your internet connection and URL accessibility";
        case "mcpb-extract-failed":
            return "→ Verify the MCPB file is valid and not corrupted";
        case "mcpb-invalid-manifest":
            return "→ Contact the plugin author about the invalid manifest";
        case "marketplace-blocked-by-policy":
            return A.allowedSources.length > 0 ? `→ Allowed sources: TextComponent{A.allowedSources.join(", ")}` : "→ Contact your administrator to configure allowed marketplace sources";
        case "repository-scan-failed":
        case "marketplace-load-failed":
        case "generic-error":
            return null;
        default:
            return null
    }
}

function rK9({
    onComplete: A
}) {
    let [Q, B] = _Q(), {
        installationStatus: G,
        errors: Z
    } = Q.plugins;
    DQ();
    let I = sK9.useCallback(() => {
        B((V) => ({
            ...V,
            plugins: {
                ...V.plugins,
                installationStatus: {
                    marketplaces: V.plugins.installationStatus.marketplaces.map((K) => K.status === "failed" ? {
                        ...K,
                        status: "pending"
                    } : K),
                    plugins: V.plugins.installationStatus.plugins.map((K) => K.status === "failed" ? {
                        ...K,
                        status: "pending"
                    } : K)
                }
            }
        })), hI1(B)
    }, [B]);
    h1((V, K) => {
        if (K.escape) A();
        else if (V === "r" || V === "R") I()
    });
    let Y = {
            pending: G.marketplaces.filter((V) => V.status === "pending").length,
            installing: G.marketplaces.filter((V) => V.status === "installing").length,
            installed: G.marketplaces.filter((V) => V.status === "installed").length,
            failed: G.marketplaces.filter((V) => V.status === "failed").length
        },
        J = {
            pending: G.plugins.filter((V) => V.status === "pending").length,
            installing: G.plugins.filter((V) => V.status === "installing").length,
            installed: G.plugins.filter((V) => V.status === "installed").length,
            failed: G.plugins.filter((V) => V.status === "failed").length
        },
        W = Y.installing > 0 || J.installing > 0 || Y.pending > 0 || J.pending > 0,
        X = Z.length > 0,
        F = G.marketplaces.length > 0 || G.plugins.length > 0;