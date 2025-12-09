/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: 2025-12-08T11:28:38.081Z
 */

/**
 * Claude Code Decompiled
 * Category: tools
 * File: 20/25
 * Lines: 430697 - 432193 (1497 lines)
 * Original file: cli.js
 */

    return E0.createElement(j, {
        flexDirection: "column"
    }, E0.createElement(j, {
        marginBottom: 1
    }, E0.createElement($, {
        bold: !0
    }, X && !F ? "Plugin Loading Errors" : "Plugin Status")), G.marketplaces.length > 0 && E0.createElement(E0.Fragment, null, E0.createElement(j, {
        marginBottom: 1
    }, E0.createElement($, {
        dimColor: !0
    }, "Marketplaces:")), G.marketplaces.map((V) => E0.createElement(j, {
        key: V.name,
        marginLeft: 2
    }, V.status === "installing" && E0.createElement(E0.Fragment, null, E0.createElement(e9, null), E0.createElement(j, {
        marginLeft: 1
    }, E0.createElement($, null, V.name), E0.createElement($, {
        dimColor: !0
    }, " · Installing…"))), V.status === "pending" && E0.createElement($, null, E0.createElement($, {
        dimColor: !0
    }, V1.circle || "○", " "), V.name, E0.createElement($, {
        dimColor: !0
    }, " · Pending")), V.status === "installed" && E0.createElement($, null, E0.createElement($, {
        color: "success"
    }, V1.tick || "✓", " "), V.name, E0.createElement($, {
        dimColor: !0
    }, " · Installed")), V.status === "failed" && E0.createElement(j, {
        flexDirection: "column"
    }, E0.createElement($, null, E0.createElement($, {
        color: "error"
    }, V1.cross || "✗", " "), V.name, E0.createElement($, {
        color: "error"
    }, " · Failed")), V.error && E0.createElement(j, {
        marginLeft: 3
    }, E0.createElement($, {
        color: "error",
        dimColor: !0
    }, V.error)))))), G.plugins.length > 0 && E0.createElement(E0.Fragment, null, E0.createElement(j, {
        marginTop: 1,
        marginBottom: 1
    }, E0.createElement($, {
        dimColor: !0
    }, "Plugins:")), G.plugins.map((V) => E0.createElement(j, {
        key: V.id,
        marginLeft: 2
    }, V.status === "installing" && E0.createElement(E0.Fragment, null, E0.createElement(e9, null), E0.createElement(j, {
        marginLeft: 1
    }, E0.createElement($, null, V.name), E0.createElement($, {
        dimColor: !0
    }, " · Installing…"))), V.status === "pending" && E0.createElement($, null, E0.createElement($, {
        dimColor: !0
    }, V1.circle || "○", " "), V.name, E0.createElement($, {
        dimColor: !0
    }, " · Pending")), V.status === "installed" && E0.createElement($, null, E0.createElement($, {
        color: "success"
    }, V1.tick || "✓", " "), V.name, E0.createElement($, {
        dimColor: !0
    }, " · Installed")), V.status === "failed" && E0.createElement(j, {
        flexDirection: "column"
    }, E0.createElement($, null, E0.createElement($, {
        color: "error"
    }, V1.cross || "✗", " "), V.name, E0.createElement($, {
        color: "error"
    }, " · Failed")), V.error && E0.createElement(j, {
        marginLeft: 3
    }, E0.createElement($, {
        color: "error",
        dimColor: !0
    }, V.error)))))), G.marketplaces.length === 0 && G.plugins.length === 0 && Z.length === 0 && E0.createElement(j, {
        marginTop: 1
    }, E0.createElement($, {
        dimColor: !0
    }, "No pending installations or errors")), Z.length > 0 && E0.createElement(E0.Fragment, null, E0.createElement(j, {
        marginTop: 1,
        marginBottom: 1
    }, E0.createElement($, {
        dimColor: !0
    }, "Plugin Loading Errors:")), Z.map((V, K) => {
        let D = "plugin" in V ? V.plugin : void 0;
        return E0.createElement(j, {
            key: K,
            marginLeft: 2,
            flexDirection: "column"
        }, E0.createElement($, null, E0.createElement($, {
            color: "error"
        }, V1.cross || "✗", " "), D ? E0.createElement(E0.Fragment, null, "Plugin ", E0.createElement($, {
            bold: !0
        }, D), " from", " ", E0.createElement($, {
            dimColor: !0
        }, V.source)) : E0.createElement($, {
            dimColor: !0
        }, V.source)), E0.createElement(j, {
            marginLeft: 3
        }, E0.createElement($, {
            color: "error",
            dimColor: !0
        }, p_3(V))), aK9(V) && E0.createElement(j, {
            marginLeft: 3,
            marginTop: 1
        }, E0.createElement($, {
            dimColor: !0,
            italic: !0
        }, aK9(V))))
    })), E0.createElement(j, {
        marginTop: 2
    }, E0.createElement($, {
        dimColor: !0
    }, W ? "Installing…" : E0.createElement(E0.Fragment, null, "Press", " ", Y.failed > 0 || J.failed > 0 ? E0.createElement(E0.Fragment, null, E0.createElement($, {
        bold: !0
    }, "r"), " to retry failed installations ·", " ") : null, E0.createElement($, {
        bold: !0
    }, "Esc"), " to return"))))
}
var E0, sK9;
var oK9 = L(() => {
    hA();
    c9();
    H9();
    EX0();
    zI();
    n2();
    E0 = GA(VA(), 1), sK9 = GA(VA(), 1)
});
import * as Yz from "fs";
import * as hO from "path";

function l_3(A) {
    let Q = hO.basename(A),
        B = hO.basename(hO.dirname(A));
    if (Q === "plugin.json") return "plugin";
    if (Q === "marketplace.json") return "marketplace";
    if (B === ".claude-plugin") return "plugin";
    return "unknown"
}

function tK9(A) {
    return A.errors.map((Q) => ({
        path: Q.path.join(".") || "root",
        message: Q.message,
        code: Q.code
    }))
}

function QSA(A, Q, B) {
    if (A.includes("..")) B.push({
        path: Q,
        message: `Path contains ".." which could be a path traversal attempt: ${A}`
    })
}

function LV0(A) {
    let Q = [],
        B = [],
        G = hO.resolve(A);
    if (!Yz.existsSync(G)) return {
        success: !1,
        errors: [{
            path: "file",
            message: `File not found: ${G}`
        }],
        warnings: [],
        filePath: G,
        fileType: "plugin"
    };
    if (!Yz.statSync(G).isFile()) return {
        success: !1,
        errors: [{
            path: "file",
            message: `Path is not a file: ${G}`
        }],
        warnings: [],
        filePath: G,
        fileType: "plugin"
    };
    let I;
    try {
        I = Yz.readFileSync(G, {
            encoding: "utf-8"
        })
    } catch (W) {
        return {
            success: !1,
            errors: [{
                path: "file",
                message: `Failed to read file: ${W instanceof Error?W.message:String(W)}`
            }],
            warnings: [],
            filePath: G,
            fileType: "plugin"
        }
    }
    let Y;
    try {
        Y = JSON.parse(I)
    } catch (W) {
        return {
            success: !1,
            errors: [{
                path: "json",
                message: `Invalid JSON syntax: ${W instanceof Error?W.message:String(W)}`
            }],
            warnings: [],
            filePath: G,
            fileType: "plugin"
        }
    }
    if (Y && typeof Y === "object") {
        let W = Y;
        if (W.commands)(Array.isArray(W.commands) ? W.commands : [W.commands]).forEach((F, V) => {
            if (typeof F === "string") QSA(F, `commands[${V}]`, Q)
        });
        if (W.agents)(Array.isArray(W.agents) ? W.agents : [W.agents]).forEach((F, V) => {
            if (typeof F === "string") QSA(F, `agents[${V}]`, Q)
        });
        if (W.skills)(Array.isArray(W.skills) ? W.skills : [W.skills]).forEach((F, V) => {
            if (typeof F === "string") QSA(F, `skills[${V}]`, Q)
        })
    }
    let J = fo.safeParse(Y);
    if (!J.success) Q.push(...tK9(J.error));
    if (J.success) {
        let W = J.data;
        if (!W.version) B.push({
            path: "version",
            message: 'No version specified. Consider adding a version following semver (e.g., "1.0.0")'
        });
        if (!W.description) B.push({
            path: "description",
            message: "No description provided. Adding a description helps users understand what your plugin does"
        });
        if (!W.author) B.push({
            path: "author",
            message: "No author information provided. Consider adding author details for plugin attribution"
        })
    }
    return {
        success: Q.length === 0,
        errors: Q,
        warnings: B,
        filePath: G,
        fileType: "plugin"
    }
}

function MV0(A) {
    let Q = [],
        B = [],
        G = hO.resolve(A);
    if (!Yz.existsSync(G)) return {
        success: !1,
        errors: [{
            path: "file",
            message: `File not found: ${G}`
        }],
        warnings: [],
        filePath: G,
        fileType: "marketplace"
    };
    if (!Yz.statSync(G).isFile()) return {
        success: !1,
        errors: [{
            path: "file",
            message: `Path is not a file: ${G}`
        }],
        warnings: [],
        filePath: G,
        fileType: "marketplace"
    };
    let I;
    try {
        I = Yz.readFileSync(G, {
            encoding: "utf-8"
        })
    } catch (W) {
        return {
            success: !1,
            errors: [{
                path: "file",
                message: `Failed to read file: ${W instanceof Error?W.message:String(W)}`
            }],
            warnings: [],
            filePath: G,
            fileType: "marketplace"
        }
    }
    let Y;
    try {
        Y = JSON.parse(I)
    } catch (W) {
        return {
            success: !1,
            errors: [{
                path: "json",
                message: `Invalid JSON syntax: ${W instanceof Error?W.message:String(W)}`
            }],
            warnings: [],
            filePath: G,
            fileType: "marketplace"
        }
    }
    if (Y && typeof Y === "object") {
        let W = Y;
        if (Array.isArray(W.plugins)) W.plugins.forEach((X, F) => {
            if (X && typeof X === "object" && "source" in X) {
                let V = X.source;
                if (typeof V === "string") QSA(V, `plugins[${F}].source`, Q);
                if (V && typeof V === "object" && "path" in V && typeof V.path === "string") QSA(V.path, `plugins[${F}].source.path`, Q)
            }
        })
    }
    let J = C3A.safeParse(Y);
    if (!J.success) Q.push(...tK9(J.error));
    if (J.success) {
        let W = J.data;
        if (!W.plugins || W.plugins.length === 0) B.push({
            path: "plugins",
            message: "Marketplace has no plugins defined"
        });
        if (W.plugins) W.plugins.forEach((X, F) => {
            if (typeof X.source === "object" && X.source.source === "npm") B.push({
                path: `plugins[${F}].source`,
                message: `Plugin "${X.name}" uses npm source which is not yet fully implemented`
            });
            if (W.plugins.filter((K) => K.name === X.name).length > 1) Q.push({
                path: `plugins[${F}].name`,
                message: `Duplicate plugin name "${X.name}" found in marketplace`
            })
        });
        if (!W.metadata?.description) B.push({
            path: "metadata.description",
            message: "No marketplace description provided. Adding a description helps users understand what this marketplace offers"
        })
    }
    return {
        success: Q.length === 0,
        errors: Q,
        warnings: B,
        filePath: G,
        fileType: "marketplace"
    }
}

function mY1(A) {
    let Q = hO.resolve(A);
    if (Yz.existsSync(Q) && Yz.statSync(Q).isDirectory()) {
        let G = hO.join(Q, ".claude-plugin", "marketplace.json"),
            Z = hO.join(Q, ".claude-plugin", "plugin.json");
        if (Yz.existsSync(G)) return MV0(G);
        else if (Yz.existsSync(Z)) return LV0(Z);
        else return {
            success: !1,
            errors: [{
                path: "directory",
                message: "No manifest found in directory. Expected .claude-plugin/marketplace.json or .claude-plugin/plugin.json"
            }],
            warnings: [],
            filePath: Q,
            fileType: "plugin"
        }
    }
    switch (l_3(A)) {
        case "plugin":
            return LV0(A);
        case "marketplace":
            return MV0(A);
        case "unknown": {
            if (!Yz.existsSync(Q)) return {
                success: !1,
                errors: [{
                    path: "file",
                    message: `File not found: ${Q}`
                }],
                warnings: [],
                filePath: Q,
                fileType: "plugin"
            };
            try {
                let G = Yz.readFileSync(Q, {
                        encoding: "utf-8"
                    }),
                    Z = JSON.parse(G);
                if (Array.isArray(Z.plugins)) return MV0(A)
            } catch {}
            return LV0(A)
        }
    }
}
var OV0 = L(() => {
    ho()
});

function AD9({
    onComplete: A,
    path: Q
}) {
    return eK9.useEffect(() => {
        // Async function: B
async function B() {
            if (!Q) {
                A(`Usage: /plugin validate <path>

Validate a plugin or marketplace manifest file or directory.

Examples:
  /plugin validate .claude-plugin/plugin.json
  /plugin validate /path/to/plugin-directory
  /plugin validate .

When given a directory, automatically validates .claude-plugin/marketplace.json
or .claude-plugin/plugin.json (prefers marketplace if both exist).

Or from the command line:
  claude plugin validate <path>`);
                return
            }
            try {
                let G = mY1(Q),
                    Z = "";
                if (Z += `Validating ${G.fileType} manifest: ${G.filePath}

`, G.errors.length > 0) Z += `${V1.cross} Found ${G.errors.length} error${G.errors.length===1?"":"s"}:

`, G.errors.forEach((I) => {
                    Z += `  ${V1.pointer} ${I.path}: ${I.message}
`
                }), Z += `
`;
                if (G.warnings.length > 0) Z += `${V1.warning} Found ${G.warnings.length} warning${G.warnings.length===1?"":"s"}:

`, G.warnings.forEach((I) => {
                    Z += `  ${V1.pointer} ${I.path}: ${I.message}
`
                }), Z += `
`;
                if (G.success) {
                    if (G.warnings.length > 0) Z += `${V1.tick} Validation passed with warnings
`;
                    else Z += `${V1.tick} Validation passed
`;
                    process.exitCode = 0
                } else Z += `${V1.cross} Validation failed
`, process.exitCode = 1;
                A(Z)
            } catch (G) {
                process.exitCode = 2, e(G instanceof Error ? G : Error(String(G))), A(`${V1.cross} Unexpected error during validation: ${G instanceof Error?G.message:String(G)}`)
            }
        }
        B()
    }, [A, Q]), BSA.createElement(j, {
        flexDirection: "column"
    }, BSA.createElement($, null, "Running validation..."))
}
var BSA, eK9;
var QD9 = L(() => {
    hA();
    OV0();
    n2();
    u1();
    BSA = GA(VA(), 1), eK9 = GA(VA(), 1)
});

function BD9(A) {
    if (!A) return {
        type: "menu"
    };
    let Q = A.trim().split(/\s+/);
    switch (Q[0]?.toLowerCase()) {
        case "help":
        case "--help":
        case "-h":
            return {
                type: "help"
            };
        case "install":
        case "i": {
            let G = Q[1];
            if (!G) return {
                type: "install"
            };
            if (G.includes("@")) {
                let [I, Y] = G.split("@");
                return {
                    type: "install",
                    plugin: I,
                    marketplace: Y
                }
            }
            if (G.startsWith("http://") || G.startsWith("https://") || G.startsWith("file://") || G.includes("/") || G.includes("\\")) return {
                type: "install",
                marketplace: G
            };
            return {
                type: "install",
                plugin: G
            }
        }
        case "manage":
            return {
                type: "manage"
            };
        case "uninstall":
            return {
                type: "uninstall", plugin: Q[1]
            };
        case "enable":
            return {
                type: "enable", plugin: Q[1]
            };
        case "disable":
            return {
                type: "disable", plugin: Q[1]
            };
        case "validate":
            return {
                type: "validate", path: Q.slice(1).join(" ").trim() || void 0
            };
        case "marketplace":
        case "market": {
            let G = Q[1]?.toLowerCase(),
                Z = Q.slice(2).join(" ");
            switch (G) {
                case "add":
                    return {
                        type: "marketplace", action: "add", target: Z
                    };
                case "remove":
                case "rm":
                    return {
                        type: "marketplace", action: "remove", target: Z
                    };
                case "update":
                    return {
                        type: "marketplace", action: "update", target: Z
                    };
                case "list":
                    return {
                        type: "marketplace", action: "list"
                    };
                default:
                    return {
                        type: "marketplace"
                    }
            }
        }
        default:
            return {
                type: "menu"
            }
    }
}

function i_3({
    onComplete: A
}) {
    return gO.useEffect(() => {
        // Async function: Q
async function Q() {
            try {
                let B = await TZ(),
                    G = Object.keys(B);
                if (G.length === 0) A("No marketplaces configured");
                else A(`Configured marketplaces:
${G.map((Z)=>`  • ${Z}`).join(`
`)}`)
            } catch (B) {
                A(`Error loading marketplaces: ${B instanceof Error?B.message:String(B)}`)
            }
        }
        Q()
    }, [A]), eQ.createElement($, null, "Loading marketplaces...")
}

function n_3(A) {
    switch (A.type) {
        case "help":
            return {
                type: "help"
            };
        case "validate":
            return {
                type: "validate", path: A.path
            };
        case "install":
            if (A.marketplace || A.plugin) return {
                type: "browse-marketplace",
                targetMarketplace: A.marketplace,
                targetPlugin: A.plugin
            };
            return {
                type: "browse-marketplace"
            };
        case "manage":
            return {
                type: "manage-plugins"
            };
        case "uninstall":
            return {
                type: "manage-plugins", targetPlugin: A.plugin, action: "uninstall"
            };
        case "enable":
            return {
                type: "manage-plugins", targetPlugin: A.plugin, action: "enable"
            };
        case "disable":
            return {
                type: "manage-plugins", targetPlugin: A.plugin, action: "disable"
            };
        case "marketplace":
            if (A.action === "list") return {
                type: "marketplace-list"
            };
            if (A.action === "add") return {
                type: "add-marketplace",
                initialValue: A.target
            };
            if (A.action === "remove") return {
                type: "manage-marketplaces",
                targetMarketplace: A.target,
                action: "remove"
            };
            if (A.action === "update") return {
                type: "manage-marketplaces",
                targetMarketplace: A.target,
                action: "update"
            };
            return {
                type: "marketplace-menu"
            };
        case "menu":
        default:
            return {
                type: "menu"
            }
    }
}

function GD9({
    onComplete: A,
    args: Q
}) {
    let B = BD9(Q),
        [G, Z] = gO.useState(n_3(B)),
        [I, Y] = gO.useState(G.type === "add-marketplace" ? G.initialValue || "" : ""),
        [J, W] = gO.useState(0),
        [X, F] = gO.useState(null),
        [V, K] = gO.useState(null),
        [, D] = _Q(),
        H = DQ(),
        C = B.type === "marketplace" && B.action === "add" && B.target !== void 0,
        E = gO.useCallback(async () => {
            let {
                enabled: z,
                disabled: w,
                errors: N
            } = await y7(), [q, R] = await Promise.all([UQA(), q0A()]);
            D((P) => ({
                ...P,
                plugins: {
                    ...P.plugins,
                    enabled: z,
                    disabled: w,
                    commands: q,
                    agents: R,
                    errors: N
                }
            }))
        }, [D]);
    if (h1((z, w) => {
            if (w.escape) {
                if (G.type === "add-marketplace") Z({
                    type: "menu"
                }), Y(""), F(null);
                else if (G.type === "manage-marketplaces") Z({
                    type: "menu"
                }), F(null), K(null);
                else if (G.type === "browse-marketplace") Z({
                    type: "menu"
                });
                return
            }
        }), gO.useEffect(() => {
            if (V) A(V)
        }, [V, A]), gO.useEffect(() => {
            if (G.type === "help") A()
        }, [G.type, A]), G.type === "help") return eQ.createElement(j, {
        flexDirection: "column"
    }, eQ.createElement($, {
        bold: !0
    }, "Plugin Command Usage:"), eQ.createElement($, null, " "), eQ.createElement($, {
        dimColor: !0
    }, "Installation:"), eQ.createElement($, null, " /plugin install - Browse and install plugins"), eQ.createElement($, null, " ", "/plugin install <marketplace> - Install from specific marketplace"), eQ.createElement($, null, " /plugin install <plugin> - Install specific plugin"), eQ.createElement($, null, " ", "/plugin install <plugin>@<market> - Install plugin from marketplace"), eQ.createElement($, null, " "), eQ.createElement($, {
        dimColor: !0
    }, "Management:"), eQ.createElement($, null, " /plugin manage - Manage installed plugins"), eQ.createElement($, null, " /plugin enable <plugin> - Enable a plugin"), eQ.createElement($, null, " /plugin disable <plugin> - Disable a plugin"), eQ.createElement($, null, " /plugin uninstall <plugin> - Uninstall a plugin"), eQ.createElement($, null, " "), eQ.createElement($, {
        dimColor: !0
    }, "Marketplaces:"), eQ.createElement($, null, " /plugin marketplace - Marketplace management menu"), eQ.createElement($, null, " /plugin marketplace add - Add a marketplace"), eQ.createElement($, null, " ", "/plugin marketplace add <path/url> - Add marketplace directly"), eQ.createElement($, null, " /plugin marketplace update - Update marketplaces"), eQ.createElement($, null, " ", "/plugin marketplace update <name> - Update specific marketplace"), eQ.createElement($, null, " /plugin marketplace remove - Remove a marketplace"), eQ.createElement($, null, " ", "/plugin marketplace remove <name> - Remove specific marketplace"), eQ.createElement($, null, " /plugin marketplace list - List all marketplaces"), eQ.createElement($, null, " "), eQ.createElement($, {
        dimColor: !0
    }, "Validation:"), eQ.createElement($, null, " ", "/plugin validate <path> - Validate a manifest file or directory"), eQ.createElement($, null, " "), eQ.createElement($, {
        dimColor: !0
    }, "Other:"), eQ.createElement($, null, " /plugin - Main plugin menu"), eQ.createElement($, null, " /plugin help - Show this help"), eQ.createElement($, null, " /plugins - Alias for /plugin"));
    if (G.type === "validate") return eQ.createElement(AD9, {
        onComplete: A,
        path: G.path
    });
    if (G.type === "marketplace-menu") return Z({
        type: "menu"
    }), null;
    if (G.type === "marketplace-list") return eQ.createElement(i_3, {
        onComplete: A
    });
    if (G.type === "add-marketplace") return eQ.createElement(fK9, {
        inputValue: I,
        setInputValue: Y,
        cursorOffset: J,
        setCursorOffset: W,
        error: X,
        setError: F,
        result: V,
        setResult: K,
        setViewState: Z,
        onAddComplete: E,
        cliMode: C
    });
    if (G.type === "manage-marketplaces") return eQ.createElement(gK9, {
        setViewState: Z,
        error: X,
        setError: F,
        setResult: K,
        exitState: H,
        onManageComplete: E,
        targetMarketplace: G.targetMarketplace,
        action: G.action
    });
    if (G.type === "browse-marketplace") return eQ.createElement(mK9, {
        error: X,
        setError: F,
        result: V,
        setResult: K,
        setViewState: Z,
        onInstallComplete: E,
        targetMarketplace: G.targetMarketplace,
        targetPlugin: G.targetPlugin
    });
    if (G.type === "manage-plugins") return eQ.createElement(iK9, {
        setViewState: Z,
        setResult: K,
        onManageComplete: E,
        targetPlugin: G.targetPlugin,
        action: G.action
    });
    if (G.type === "installation-status") return eQ.createElement(rK9, {
        onComplete: () => Z({
            type: "menu"
        })
    });
    return eQ.createElement(kK9, {
        setViewState: Z,
        onComplete: A,
        exitState: H
    })
}
var eQ, gO;
var ZD9 = L(() => {
    hA();
    c9();
    NF();
    H9();
    VjA();
    ATA();
    yK9();
    hK9();
    uK9();
    dK9();
    nK9();
    oK9();
    QD9();
    kH();
    eQ = GA(VA(), 1), gO = GA(VA(), 1)
});
var RV0, a_3, ID9;
var YD9 = L(() => {
    ZD9();
    RV0 = GA(VA(), 1), a_3 = {
        type: "local-jsx",
        name: "plugin",
        aliases: ["plugins", "marketplace"],
        description: "Manage Claude Code plugins",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q, B) {
            return RV0.createElement(GD9, {
                onComplete: A,
                args: B
            })
        },
        userFacingName() {
            return "plugin"
        }
    }, ID9 = a_3
});
var s_3, JD9;
var WD9 = L(() => {
    s_3 = {
        description: "Restore the code and/or conversation to a previous point",
        name: "rewind",
        aliases: ["checkpoint"],
        userFacingName: () => "rewind",
        argumentHint: "",
        isEnabled: () => !0,
        type: "local",
        isHidden: !1,
        supportsNonInteractive: !1,
        async call(A, Q) {
            if (Q.openMessageSelector) Q.openMessageSelector();
            return {
                type: "skip"
            }
        }
    }, JD9 = s_3
});
var XD9 = L(() => {
    M9()
});
var r_3, o_3;
var FD9 = L(() => {
    hA();
    T6();
    gvA();
    r_3 = GA(VA(), 1), o_3 = GA(VA(), 1)
});
var t_3;
var VD9 = L(() => {
    EX();
    hA();
    zi();
    hB();
    D0();
    XE();
    u1();
    T6();
    KF0();
    eV();
    S0();
    t_3 = GA(VA(), 1)
});
var KD9 = () => {};

function DD9() {
    if (!lQ.isSandboxingEnabled()) return S4.createElement(j, {
        flexDirection: "column",
        paddingY: 1
    }, S4.createElement($, {
        color: "subtle"
    }, "Sandbox is not enabled"));
    let Q = lQ.getFsReadConfig(),
        B = lQ.getFsWriteConfig(),
        G = lQ.getNetworkRestrictionConfig(),
        Z = lQ.getAllowUnixSockets(),
        I = lQ.getExcludedCommands(),
        Y = lQ.getLinuxGlobPatternWarnings();
    return S4.createElement(j, {
        flexDirection: "column",
        paddingY: 1
    }, S4.createElement(j, {
        flexDirection: "column"
    }, S4.createElement($, {
        bold: !0,
        color: "permission"
    }, "Excluded Commands:"), S4.createElement($, {
        dimColor: !0
    }, I.length > 0 ? I.join(", ") : "None")), Q.denyOnly.length > 0 && S4.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, S4.createElement($, {
        bold: !0,
        color: "permission"
    }, "Filesystem Read Restrictions:"), S4.createElement($, {
        dimColor: !0
    }, "Denied: ", Q.denyOnly.join(", "))), B.allowOnly.length > 0 && S4.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, S4.createElement($, {
        bold: !0,
        color: "permission"
    }, "Filesystem Write Restrictions:"), S4.createElement($, {
        dimColor: !0
    }, "Allowed: ", B.allowOnly.join(", ")), B.denyWithinAllow.length > 0 && S4.createElement($, {
        dimColor: !0
    }, "Denied within allowed: ", B.denyWithinAllow.join(", "))), (G.allowedHosts && G.allowedHosts.length > 0 || G.deniedHosts && G.deniedHosts.length > 0) && S4.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, S4.createElement($, {
        bold: !0,
        color: "permission"
    }, "Network Restrictions:"), G.allowedHosts && G.allowedHosts.length > 0 && S4.createElement($, {
        dimColor: !0
    }, "Allowed: ", G.allowedHosts.join(", ")), G.deniedHosts && G.deniedHosts.length > 0 && S4.createElement($, {
        dimColor: !0
    }, "Denied: ", G.deniedHosts.join(", "))), Z && Z.length > 0 && S4.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, S4.createElement($, {
        bold: !0,
        color: "permission"
    }, "Allowed Unix Sockets:"), S4.createElement($, {
        dimColor: !0
    }, Z.join(", "))), Y.length > 0 && S4.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, S4.createElement($, {
        bold: !0,
        color: "warning"
    }, "⚠ Warning: Glob patterns not fully supported on Linux"), S4.createElement($, {
        dimColor: !0
    }, "The following patterns will be ignored:", " ", Y.slice(0, 3).join(", "), Y.length > 3 && ` (${Y.length-3} more)`)))
}
var S4;
var HD9 = L(() => {
    hA();
    MJ();
    S4 = GA(VA(), 1)
});

function CD9({
    onComplete: A
}) {
    let [Q] = $B(), B = lQ.isSandboxingEnabled(), G = lQ.areUnsandboxedCommandsAllowed(), Z = lQ.areSandboxSettingsLockedByPolicy(), I = G ? "open" : "closed", Y = tQ("success", Q)("(current)"), J = [{
        label: I === "open" ? `Allow unsandboxed fallback ${Y}` : "Allow unsandboxed fallback",
        value: "open"
    }, {
        label: I === "closed" ? `Strict sandbox mode ${Y}` : "Strict sandbox mode",
        value: "closed"
    }];

async function W(X) {
        let F = X;
        await lQ.setSandboxSettings({
            allowUnsandboxedCommands: F === "open"
        }), A(F === "open" ? "✓ Unsandboxed fallback allowed - commands can run outside sandbox when necessary" : "✓ Strict sandbox mode - all commands must run in sandbox or be excluded via the `excludedCommands` option")
    }
    if (h1((X, F) => {
            if (F.escape) A()
        }), !B) return NK.default.createElement(j, {
        flexDirection: "column",
        paddingY: 1
    }, NK.default.createElement($, {
        color: "subtle"
    }, "Sandbox is not enabled. Enable sandbox to configure override settings."));
    if (Z) return NK.default.createElement(j, {
        flexDirection: "column",
        paddingY: 1
    }, NK.default.createElement($, {
        color: "subtle"
    }, "Override settings are managed by a higher-priority configuration and cannot be changed locally."), NK.default.createElement(j, {
        marginTop: 1
    }, NK.default.createElement($, {
        dimColor: !0
    }, "Current setting:", " ", I === "closed" ? "Strict sandbox mode" : "Allow unsandboxed fallback")));
    return NK.default.createElement(j, {
        flexDirection: "column",
        paddingY: 1
    }, NK.default.createElement(j, {
        marginBottom: 1
    }, NK.default.createElement($, {
        bold: !0
    }, "Configure Overrides:")), NK.default.createElement(M0, {
        options: J,
        onChange: W,
        onCancel: () => A()
    }), NK.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1
    }, NK.default.createElement($, {
        dimColor: !0
    }, NK.default.createElement($, {
        bold: !0,
        dimColor: !0
    }, "Allow unsandboxed fallback:"), " ", "When a command fails due to sandbox restrictions, Claude can retry with dangerouslyDisableSandbox to run outside the sandbox (falling back to default permissions)."), NK.default.createElement($, {
        dimColor: !0
    }, NK.default.createElement($, {
        bold: !0,
        dimColor: !0
    }, "Strict sandbox mode:"), " ", "All bash commands invoked by the model must run in the sandbox unless they are explicitly listed in excludedCommands."), NK.default.createElement($, {
        dimColor: !0
    }, "Learn more:", " ", NK.default.createElement(a4, {
        url: "https://docs.claude.com/en/docs/claude-code/sandboxing#configure-sandboxing"
    }, "docs.claude.com/en/docs/claude-code/sandboxing#configure-sandboxing"))))
}
var NK;
var ED9 = L(() => {
    hA();
    T5();
    MJ();
    hA();
    NK = GA(VA(), 1)
});

function zD9({
    onComplete: A
}) {
    let [Q] = $B(), B = lQ.isSandboxingEnabled(), G = lQ.isAutoAllowBashIfSandboxedEnabled(), I = (() => {
        if (!B) return "disabled";
        if (G) return "auto-allow";
        return "regular"
    })(), Y = tQ("success", Q)("(current)"), J = [{
        label: I === "auto-allow" ? `Sandbox BashTool, with auto-allow in accept edits mode ${Y}` : "Sandbox BashTool, with auto-allow in accept edits mode",
        value: "auto-allow"
    }, {
        label: I === "regular" ? `Sandbox BashTool, with regular permissions ${Y}` : "Sandbox BashTool, with regular permissions",
        value: "regular"
    }, {
        label: I === "disabled" ? `No Sandbox ${Y}` : "No Sandbox",
        value: "disabled"
    }];

async function W(X) {
        switch (X) {
            case "auto-allow":
                await lQ.setSandboxSettings({
                    enabled: !0,
                    autoAllowBashIfSandboxed: !0
                }), A("✓ Sandbox enabled with auto-allow for bash commands when in accept-edits mode");
                break;
            case "regular":
                await lQ.setSandboxSettings({
                    enabled: !0,
                    autoAllowBashIfSandboxed: !1
                }), A("✓ Sandbox enabled with regular bash permissions");
                break;
            case "disabled":
                await lQ.setSandboxSettings({
                    enabled: !1,
                    autoAllowBashIfSandboxed: !1
                }), A("○ Sandbox disabled");
                break
        }
    }
    return h1((X, F) => {
        if (F.escape) A()
    }), tF.default.createElement(j, {
        flexDirection: "column"
    }, tF.default.createElement(J3, {
        dividerColor: "permission",
        dividerDimColor: !0
    }), tF.default.createElement(j, {
        marginX: 1
    }, tF.default.createElement(Fa, {
        title: "Sandbox:",
        color: "permission",
        defaultTab: "Mode"
    }, tF.default.createElement(nD, {
        key: "mode",
        title: "Mode"
    }, tF.default.createElement(j, {
        flexDirection: "column",
        paddingY: 1
    }, tF.default.createElement(j, {
        marginBottom: 1
    }, tF.default.createElement($, {
        bold: !0
    }, "Configure Mode:")), tF.default.createElement(M0, {
        options: J,
        onChange: W,
        onCancel: () => A()
    }), tF.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1
    }, tF.default.createElement($, {
        dimColor: !0
    }, tF.default.createElement($, {
        bold: !0,
        dimColor: !0
    }, "Auto-allow mode:"), " ", "When in accept-edits mode, commands will try to run in the sandbox automatically, and attempts to run outside of the sandbox fallback to regular permissions. Explicit ask/deny rules are always respected."), tF.default.createElement($, {
        dimColor: !0
    }, "Learn more:", " ", tF.default.createElement(a4, {
        url: "https://docs.claude.com/en/docs/claude-code/sandboxing"
    }, "docs.claude.com/en/docs/claude-code/sandboxing"))))), tF.default.createElement(nD, {
        key: "overrides",
        title: "Overrides"
    }, tF.default.createElement(CD9, {
        onComplete: A
    })), tF.default.createElement(nD, {
        key: "config",
        title: "Config"
    }, tF.default.createElement(DD9, null)))))
}
var tF;
var UD9 = L(() => {
    hA();
    T5();
    MJ();
    cjA();
    eV();
    hA();
    HD9();
    ED9();
    tF = GA(VA(), 1)
});
import * as $BASH_TOOL_NAME from "path";

async function e_3(A, Q, B) {
    let Z = c0().theme || "light";
    if (!lQ.isSupportedPlatform(uQ())) {
        let Y = tQ("error", Z)("Error: Sandboxing is currently only supported on macOS and Linux");
        return A(Y), null
    }
    if (!lQ.checkDependencies()) {
        let J = uQ() === "linux" ? "Error: Sandbox requires socat and bubblewrap. Please install these packages." : "Error: Sandbox dependencies are not available on this system.",
            W = tQ("error", Z)(J);
        return A(W), null
    }
    if (lQ.areSandboxSettingsLockedByPolicy()) {
        let Y = tQ("error", Z)("Error: Sandbox settings are overridden by a higher-priority configuration and cannot be changed locally.");
        return A(Y), null
    }
    let I = B?.trim() || "";
    if (!I) return wD9.default.createElement(zD9, {
        onComplete: A
    });
    if (I) {
        let J = I.split(" ")[0];
        if (J === "exclude") {
            let W = I.slice(8).trim();
            if (!W) {
                let D = tQ("error", Z)('Error: Please provide a command pattern to exclude (e.g., /sandbox exclude "npm run test:*")');
                return A(D), null
            }
            let X = W.replace(/^["']|["']$/g, "");
            o7B(X);
            let F = pw("localSettings"),
                V = F ? $BASH_TOOL_NAME.relative(iBA(), F) : ".claude/settings.local.json",
                K = tQ("success", Z)(`Added "${X}" to excluded commands in ${V}`);
            return A(K), null
        } else {
            let W = tQ("error", Z)(`Error: Unknown subcommand "${J}". Available subcommand: exclude`);
            return A(W), null
        }
    }
    return null
}
var wD9, Ak3, qD9;
var ND9 = L(() => {
    MJ();
    hA();
    RB();
    MJ();
    RB();
    S0();
    UD9();
    s5();
    wD9 = GA(VA(), 1);
    Ak3 = {
        name: "sandbox",
        get description() {
            let A = lQ.isSandboxingEnabled(),
                Q = lQ.isAutoAllowBashIfSandboxedEnabled(),
                B = lQ.areUnsandboxedCommandsAllowed(),
                G = lQ.areSandboxSettingsLockedByPolicy(),
                Z = A ? "✓" : "○",
                I = "sandbox disabled";
            if (A) I = Q ? "sandbox enabled (auto-allow)" : "sandbox enabled", I += B ? ", fallback allowed" : "";
            if (G) I += " (managed)";
            return `${Z} ${I} (⏎ to configure)`
        },
        argumentHint: 'exclude "command pattern"',
        isEnabled: () => !0,
        isHidden: !lQ.isSupportedPlatform(uQ()),
        type: "local-jsx",
        userFacingName: () => "sandbox",
        call: e_3
    }, qD9 = Ak3
});
var Qk3, LD9;
var MD9 = L(() => {
    lM();
    Qk3 = {
        type: "local",
        name: "stickers",
        description: "Order Claude Code stickers",
        isEnabled: () => !0,
        isHidden: !1,
        supportsNonInteractive: !1,
        async call() {
            if (await gZ("https://www.stickermule.com/claudecode")) return {
                type: "text",
                value: "Opening sticker page in browser…"
            };
            else return {
                type: "text",
                value: "Failed to open browser. Visit: https://www.stickermule.com/claudecode"
            }
        },
        userFacingName() {
            return "stickers"
        }
    }, LD9 = Qk3
});
import {
    dirname as GSA,
    basename as dY1,
    sep as Bk3
} from "path";

function TV0(A) {
    return /^skill\.md$/i.test(dY1(A))
}

function Gk3(A) {
    let Q = new Map;
    for (let G of A) {
        let Z = GSA(G.filePath),
            I = Q.get(Z) ?? [];
        I.push(G), Q.set(Z, I)
    }
    let B = [];
    for (let [G, Z] of Q) {
        let I = Z.filter((Y) => TV0(Y.filePath));
        if (I.length > 0) {
            let Y = I[0];
            if (I.length > 1) g(`Multiple skill files found in ${G}, using ${dY1(Y.filePath)}`);
            B.push(Y)
        } else B.push(...Z)
    }
    return B
}

function OD9(A, Q) {
    let B = Q.endsWith("/") ? Q.slice(0, -1) : Q;
    if (A === B) return "";
    let G = A.slice(B.length + 1);
    return G ? G.split(Bk3).join(":") : ""
}

function Zk3(A, Q) {
    let B = GSA(A),
        G = GSA(B),
        Z = dY1(B),
        I = OD9(G, Q);
    return I ? `${I}:${Z}` : Z
}

function Ik3(A, Q) {
    let B = dY1(A),
        G = GSA(A),
        Z = B.replace(/\.md$/, ""),
        I = OD9(G, Q);
    return I ? `${I}:${Z}` : Z
}

function Yk3(A) {
    return TV0(A.filePath) ? Zk3(A.filePath, A.baseDir) : Ik3(A.filePath, A.baseDir)
}
var RD9;
var TD9 = L(() => {
    o2();
    u1();
    D0();
    XjA();
    Ny();
    UF();
    hQ();
    s2();
    RD9 = t1(async () => {
        try {
            let A = await qn("commands");
            return Gk3(A).map(({
                baseDir: G,
                filePath: Z,
                frontmatter: I,
                content: Y,
                source: J
            }) => {
                try {
                    let W = I.description ?? qy(Y, "Custom command"),
                        X = HO(I["allowed-tools"]),
                        F = I["argument-hint"],
                        V = I.when_to_use,
                        K = I.version,
                        D = V0(I["disable-model-invocation"] ?? void 0),
                        H = I.model === "inherit" ? void 0 : I.model ? VE(I.model) : void 0,
                        C = TV0(Z),
                        E = C ? GSA(Z) : void 0,
                        z = Yk3({
                            baseDir: G,
                            filePath: Z,
                            frontmatter: I,
                            content: Y,
                            source: J
                        }),
                        w = `${W} (${wm(J)})`;
                    return {
                        type: "prompt",
                        name: z,
                        description: w,
                        hasUserSpecifiedDescription: !!I.description,
                        allowedTools: X,
                        argumentHint: F,
                        whenToUse: V,
                        version: K,
                        model: H,
                        isSkill: C,
                        disableModelInvocation: D,
                        isEnabled: () => !0,
                        isHidden: !1,
                        progressMessage: C ? "loading" : "running",
                        userFacingName() {
                            return z
                        },
                        source: J,
                        async getPromptForCommand(N, q) {
                            let R = Y;
                            if (C && E) R = `Base directory for this skill: ${E}

${R}`;
                            if (N)
                                if (R.includes("$ARGUMENTS")) R = R.replaceAll("$ARGUMENTS", N);
                                else R = R + `

ARGUMENTS: ${N}`;
                            return R = await Ba(R, {
                                ...q,
                                async getAppState() {
                                    let P = await q.getAppState();
                                    return {
                                        ...P,
                                        toolPermissionContext: {
                                            ...P.toolPermissionContext,
                                            alwaysAllowRules: {
                                                ...P.toolPermissionContext.alwaysAllowRules,
                                                command: X
                                            }
                                        }
                                    }
                                }
                            }, `/${z}`), [{
                                type: "text",
                                text: R
                            }]
                        }
                    }
                } catch (W) {
                    return e(W instanceof Error ? W : Error(String(W))), null
                }
            }).filter((G) => G !== null)
        } catch (A) {
            return e(A instanceof Error ? A : Error(String(A))), []
        }
    })
});
import {
    join as hg
} from "path";

function Jk3(A, Q) {
    let B = OA();
    try {
        let G = B.statSync(A),
            Z = B.statSync(Q);
        return G.ino === Z.ino && G.dev === Z.dev
    } catch {
        return !1
    }
}

async function PV0(A, Q) {
    let B = OA(),
        G = [];
    try {
        if (!B.existsSync(A)) return [];
        let Z = B.readdirSync(A);
        for (let I of Z) {
            if (!I.isDirectory() && !I.isSymbolicLink()) continue;
            let Y = hg(A, I.name),
                J = hg(Y, "SKILL.md");
            if (B.existsSync(J)) try {
                let W = B.readFileSync(J, {
                        encoding: "utf-8"
                    }),
                    {
                        frontmatter: X,
                        content: F
                    } = yF(W),
                    V = I.name,
                    K = X.description ?? qy(F, "Skill"),
                    D = HO(X["allowed-tools"]),
                    H = X["argument-hint"],
                    C = X.when_to_use,
                    E = X.version,
                    z = X.name,
                    w = X["disable-model-invocation"],
                    N = w === void 0 ? !1 : V0(w),
                    q = X.model === "inherit" ? void 0 : X.model,
                    R = `${K} (${wm(Q)})`;
                G.push({
                    type: "prompt",
                    name: V,
                    description: R,
                    hasUserSpecifiedDescription: !!X.description,
                    allowedTools: D,
                    argumentHint: H,
                    whenToUse: C,
                    version: E,
                    model: q,
                    isSkill: !0,
                    disableModelInvocation: N,
                    isEnabled: () => !0,
                    isHidden: !0,
                    progressMessage: "running",
                    userFacingName() {
                        return z || V
                    },
                    source: Q,
                    async getPromptForCommand(P, y) {
                        let v = `Base directory for this skill: ${Y}

${F}`;
                        if (P)
                            if (v.includes("$ARGUMENTS")) v = v.replaceAll("$ARGUMENTS", P);
                            else v = v + `

ARGUMENTS: ${P}`;
                        return v = await Ba(v, {
                            ...y,
                            async getAppState() {
                                let x = await y.getAppState();
                                return {
                                    ...x,
                                    toolPermissionContext: {
                                        ...x.toolPermissionContext,
                                        alwaysAllowRules: {
                                            ...x.toolPermissionContext.alwaysAllowRules,
                                            command: D
                                        }
                                    }
                                }
                            }
                        }, `/${V}`), [{
                            type: "text",
                            text: v
                        }]
                    }
                })
            } catch (W) {
                e(W instanceof Error ? W : Error(String(W)))
            }
        }
    } catch (Z) {
        e(Z instanceof Error ? Z : Error(String(Z)))
    }
    return G
}

function PD9() {
    jV0.cache?.clear?.()
}
var jV0;
var jD9 = L(() => {
    o2();
    u1();
    D0();
    XjA();
    Ny();
    UF();
    hQ();
    o0();
    hQ();
    R2();
    RB();
    UF();
    jV0 = t1(async () => {
        let A = hg(PQ(), "skills"),
            Q = hg(H0(), ".claude", "skills"),
            B = hg(hw(), ".claude", "skills");
        g(`Loading skills from directories: managed=${B}, user=${A}, project=${Q}`);
        let [G, Z, I] = await Promise.all([PV0(B, "policySettings"), DH("userSettings") ? PV0(A, "userSettings") : Promise.resolve([]), DH("projectSettings") ? PV0(Q, "projectSettings") : Promise.resolve([])]), Y = [...G, ...Z, ...I], J = [], W = new Map;
        for (let X of Y) {
            if (X.type !== "prompt") continue;
            let F = X.source === "policySettings" ? hg(hw(), ".claude", "skills", X.name) : X.source === "userSettings" ? hg(PQ(), "skills", X.name) : hg(H0(), ".claude", "skills", X.name),
                V = hg(F, "SKILL.md"),
                K = W.get(X.name);
            if (K && Jk3(K, V)) {
                g(`Skipping duplicate skill '${X.name}' from ${X.source} (same file as earlier source)`);
                continue
            }
            W.set(X.name, V), J.push(X)
        }
        if (J.length < Y.length) g(`Deduplicated ${Y.length-J.length} duplicate skills`);
        return g(`Loaded ${J.length} unique skills (managed: ${G.length}, user: ${Z.length}, project: ${I.length}, duplicates removed: ${Y.length-J.length})`), J
    })
});
import {
    join as Wk3
} from "path";

function SD9({
    content: A,
    defaultFilename: Q,
    onDone: B
}) {
    let [, G] = HZ.useState(null), [Z, I] = HZ.useState(Q), [Y, J] = HZ.useState(Q.length), [W, X] = HZ.useState(!1), F = DQ();
    return h1((H, C) => {
        if (C.escape)
            if (W) X(!1), G(null);