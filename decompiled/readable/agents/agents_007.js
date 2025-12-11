/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code Decompiled - 完整逻辑还原版 v3.0                   ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 原始文件: agents_007.js
 * 处理时间: 2025-12-09T03:41:35.901Z
 * 变量映射: 3 个已识别变量
 *
 * 注意: 代码逻辑100%保留，仅添加变量名解释注释
 *
 * ===================== 变量已替换 =====================
 */

/**
 * Claude Code Decompiled
 * Category: agents
 * File: 7/13
 * Lines: 418765 - 420242 (1478 lines)
 * Original file: cli.js
 */

    let B = {
            "Content-Type": "application/json",
            "User-Agent": MF(),
            ...Q.headers
        },
        G = `TextComponent{getConfig().BASE_API_URL}/api/oauth/usage`;
    return (await GQ.get(G, {
        headers: B,
        timeout: 5000
    })).data
}
var KF0 = lazyLoader(() => {
    w3();
    XE();
    EX();
    hB();
    pN()
});

function DF0({
    ratio: A,
    width: Q,
    fillColor: B,
    emptyColor: G
}) {
    let Z = Math.min(1, Math.max(0, A)),
        I = Math.floor(Z * Q),
        Y = [pjA[pjA.length - 1].repeat(I)];
    if (I < Q) {
        let J = Z * Q - I,
            W = Math.floor(J * pjA.length);
        Y.push(pjA[W]);
        let X = Q - I - 1;
        if (X > 0) Y.push(pjA[0].repeat(X))
    }
    return gW9.default.createElement(TextComponent, {
        color: B,
        backgroundColor: G
    }, Y.join(""))
}
var gW9, pjA;
var uW9 = lazyLoader(() => {
    hA();
    gW9 = esmImport(VA(), 1), pjA = [" ", "▏", "▎", "▍", "▌", "▋", "▊", "▉", "█"]
});

function mW9({
    title: A,
    limit: Q,
    maxWidth: B,
    showTimeInReset: G = !0,
    extraSubtext: Z
}) {
    let {
        utilization: I,
        resets_at: Y
    } = Q;
    if (I === null) return null;
    let J = `TextComponent{Math.floor(I)}% used`,
        W;
    if (Y) W = `Resets TextComponent{bOB(Y,!0,G)}`;
    if (Z)
        if (W) W = `TextComponent{Z} · TextComponent{W}`;
        else W = Z;
    let X = 50;
    if (B >= X + 12) return JB.createElement(j, {
        flexDirection: "column"
    }, JB.createElement(TextComponent, {
        bold: !0
    }, A), JB.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, JB.createElement(DF0, {
        ratio: I / 100,
        width: X,
        fillColor: "rate_limit_fill",
        emptyColor: "rate_limit_empty"
    }), JB.createElement(TextComponent, null, J)), W && JB.createElement(TextComponent, {
        dimColor: !0
    }, W));
    else return JB.createElement(j, {
        flexDirection: "column"
    }, JB.createElement(TextComponent, null, JB.createElement(TextComponent, {
        bold: !0
    }, A), W && JB.createElement(JB.Fragment, null, JB.createElement(TextComponent, null, " "), JB.createElement(TextComponent, {
        dimColor: !0
    }, "· ", W))), JB.createElement(DF0, {
        ratio: I / 100,
        width: B,
        fillColor: "rate_limit_fill",
        emptyColor: "rate_limit_empty"
    }), JB.createElement(TextComponent, null, J))
}

function dW9() {
    let [A, Q] = GFA.useState(null), [B, G] = GFA.useState(null), [Z, I] = GFA.useState(!0), {
        columns: Y
    } = YB(), J = Y - 2, W = Math.min(J, 80), X = JB.useCallback(async () => {
        I(!0), G(null);
        try {
            let V = await VF0();
            Q(V)
        } catch (V) {
            e(V);
            let K = V,
                D = K.response?.data ? JSON.stringify(K.response.data) : void 0;
            G(D ? `Failed to load usage data: TextComponent{D}` : "Failed to load usage data")
        } finally {
            I(!1)
        }
    }, []);
    if (GFA.useEffect(() => {
            X()
        }, [X]), h1((V) => {
            if (V === "r" && B && !Z) X()
        }), B) return JB.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1
    }, JB.createElement(TextComponent, {
        color: "error"
    }, "Error: ", B), JB.createElement(TextComponent, {
        dimColor: !0,
        italic: !0
    }, "r to retry · Esc to exit"));
    if (!A) return JB.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1
    }, JB.createElement(TextComponent, {
        dimColor: !0
    }, "Loading usage data…"), JB.createElement(TextComponent, {
        dimColor: !0,
        italic: !0
    }, "Esc to exit"));
    let F = [{
        title: "Current session",
        limit: A.five_hour
    }, {
        title: "Current week (all models)",
        limit: A.seven_day
    }, {
        title: "Current week (Sonnet only)",
        limit: A.seven_day_sonnet
    }];
    return JB.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        gap: 1,
        width: "100%"
    }, F.some(({
        limit: V
    }) => V) || JB.createElement(TextComponent, {
        dimColor: !0
    }, "/usage is only available for subscription plans."), F.map(({
        title: V,
        limit: K
    }) => K && JB.createElement(mW9, {
        key: V,
        title: V,
        limit: K,
        maxWidth: W
    })), A.extra_usage && JB.createElement(jS3, {
        extraUsage: A.extra_usage,
        maxWidth: W
    }), JB.createElement(SS3, null), JB.createElement(TextComponent, {
        dimColor: !0,
        italic: !0
    }, "Esc to exit"))
}

function jS3({
    extraUsage: A,
    maxWidth: Q
}) {
    if (!j8("tengu_show_extra_usage_bar")) return;
    let B = x4();
    if (!(B === "pro" || B === "max")) return !1;
    if (!A.is_enabled) {
        if (GW0() !== "control" && ey.isEnabled()) return JB.createElement(j, {
            flexDirection: "column"
        }, JB.createElement(TextComponent, {
            bold: !0
        }, HF0), JB.createElement(TextComponent, {
            dimColor: !0
        }, "Extra usage not enabled • /extra-usage to enable"));
        return null
    }
    if (A.monthly_limit === null) return JB.createElement(j, {
        flexDirection: "column"
    }, JB.createElement(TextComponent, {
        bold: !0
    }, HF0), JB.createElement(TextComponent, {
        dimColor: !0
    }, "Unlimited"));
    if (typeof A.used_credits !== "number" || typeof A.utilization !== "number") return null;
    let Z = L$A(A.used_credits / 100, 2),
        I = L$A(A.monthly_limit / 100, 2),
        Y = new Date,
        J = new Date(Y.getFullYear(), Y.getMonth() + 1, 1);
    return JB.createElement(mW9, {
        title: HF0,
        limit: {
            utilization: A.utilization,
            resets_at: J.toISOString()
        },
        showTimeInReset: !1,
        extraSubtext: `TextComponent{Z} / TextComponent{I} spent`,
        maxWidth: Q
    })
}

function SS3() {
    let A = x4();
    if (!A) return null;
    let Q = null;
    if (A === "pro") Q = "Pro users can now use /extra-usage for access to Opus 4.5 in Claude Code. Opus models are still included with your plan on claude.ai";
    else if (A === "enterprise") Q = "We've removed the Opus cap so you can use Opus 4.5 up to your overall limit. We may continue to adjust limits as we learn how usage patterns evolve over time.";
    else if (A === "max" || A === "team") Q = "We've increased your limits and removed the Opus cap, so you can use Opus 4.5 up to your overall limit. Sonnet now has its own limit—it's set to match your previous overall limit, so you can use just as much as before. We may continue to adjust limits as we learn how usage patterns evolve over time.";
    if (!Q) return null;
    return JB.createElement(j, {
        flexDirection: "column"
    }, JB.createElement(TextComponent, {
        bold: !0
    }, "Nov 24, 2025 update:"), JB.createElement(TextComponent, {
        dimColor: !0
    }, Q))
}
var JB, GFA, HF0 = "Extra usage";
var cW9 = lazyLoader(() => {
    hA();
    m8();
    KF0();
    u1();
    uW9();
    rPA();
    x_();
    hB();
    ZW0();
    O9();
    JB = esmImport(VA(), 1), GFA = esmImport(VA(), 1)
});

function ZFA({
    onClose: A,
    context: Q,
    defaultTab: B
}) {
    let [G, Z] = XY1.useState(!1), [I, Y] = XY1.useState(!1), [J, W] = XY1.useState(!1);
    return h1((F, V) => {
        if (V.escape || V.ctrl && (F === "c" || F === "d")) A("Status dialog dismissed", {
            display: "system"
        })
    }), iW.createElement(j, {
        flexDirection: "column"
    }, iW.createElement(J3, {
        dividerColor: I ? "warning" : "permission",
        dividerDimColor: !I
    }), iW.createElement(j, {
        marginX: J ? 0 : 1
    }, iW.createElement(Fa, {
        title: "Settings:",
        color: "permission",
        defaultTab: B,
        hidden: G
    }, [iW.createElement(nD, {
        key: "status",
        title: "Status"
    }, iW.createElement(xW9, {
        context: Q
    })), iW.createElement(nD, {
        key: "config",
        title: "Config"
    }, iW.createElement(fW9, {
        context: Q,
        onClose: A,
        setTabsHidden: Z,
        setIsWarning: Y,
        setHideMargin: W
    })), iW.createElement(nD, {
        key: "usage",
        title: "Usage"
    }, iW.createElement(dW9, null))])))
}
var iW, XY1;
var FY1 = lazyLoader(() => {
    hA();
    eV();
    cjA();
    vW9();
    hW9();
    cW9();
    iW = esmImport(VA(), 1), XY1 = esmImport(VA(), 1)
});
var CF0, _S3, pW9;
var lW9 = lazyLoader(() => {
    FY1();
    CF0 = esmImport(VA(), 1), _S3 = {
        aliases: ["theme"],
        type: "local-jsx",
        name: "config",
        description: "Open config panel",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            return CF0.createElement(ZFA, {
                onClose: A,
                context: Q,
                defaultTab: "Config"
            })
        },
        userFacingName() {
            return "config"
        }
    }, pW9 = _S3
});

function kS3(A) {
    return `TextComponent{Math.round(A/1000)}k`
}

function iW9({
    data: A
}) {
    let {
        categories: Q,
        totalTokens: B,
        rawMaxTokens: G,
        percentage: Z,
        gridRows: I,
        model: Y,
        memoryFiles: J,
        mcpTools: W,
        agents: X,
        slashCommands: F,
        skills: V,
        messageBreakdown: K
    } = A, {
        columns: D
    } = YB(), H = D < 80, C = Q.filter((z) => z.tokens > 0 && z.name !== "Free space" && z.name !== VY1), E = Q.find((z) => z.name === VY1);
    return XQ.createElement(j, {
        flexDirection: "column",
        padding: H ? 0 : 1
    }, XQ.createElement(TextComponent, {
        bold: !0
    }, "Context Usage"), XQ.createElement(j, {
        flexDirection: "row",
        gap: 2
    }, XQ.createElement(j, {
        flexDirection: "column",
        flexShrink: 0
    }, I.map((z, w) => XQ.createElement(j, {
        key: w,
        flexDirection: "row",
        marginLeft: -1
    }, z.map((N, q) => {
        if (N.categoryName === "Free space") return XQ.createElement(TextComponent, {
            key: q,
            dimColor: !0
        }, "⛶ ");
        if (N.categoryName === VY1) return XQ.createElement(TextComponent, {
            key: q,
            color: N.color
        }, "⛝ ");
        return XQ.createElement(TextComponent, {
            key: q,
            color: N.color
        }, N.squareFullness >= 0.7 ? "⛁ " : "⛀ ")
    })))), XQ.createElement(j, {
        flexDirection: "column",
        gap: 0,
        flexShrink: 0
    }, XQ.createElement(TextComponent, {
        dimColor: !0
    }, Y, " · ", Math.round(B / 1000), "k/", Math.round(G / 1000), "k tokens (", Z, "%)"), XQ.createElement(TextComponent, null, " "), C.map((z, w) => {
        let N = z.tokens < 1000 ? `TextComponent{z.tokens}` : `TextComponent{(z.tokens/1000).toFixed(1)}k`,
            q = (z.tokens / G * 100).toFixed(1),
            R = z.name === VY1,
            P = z.name,
            y = R ? "⛝" : "⛁";
        return XQ.createElement(j, {
            key: w
        }, XQ.createElement(TextComponent, {
            color: z.color
        }, y), XQ.createElement(TextComponent, null, " ", P, ": "), XQ.createElement(TextComponent, {
            dimColor: !0
        }, N, " tokens (", q, "%)"))
    }), (Q.find((z) => z.name === "Free space")?.tokens ?? 0) > 0 && XQ.createElement(j, null, XQ.createElement(TextComponent, {
        dimColor: !0
    }, "⛶"), XQ.createElement(TextComponent, null, " Free space: "), XQ.createElement(TextComponent, {
        dimColor: !0
    }, kS3(Q.find((z) => z.name === "Free space")?.tokens || 0), " ", "(", ((Q.find((z) => z.name === "Free space")?.tokens || 0) / G * 100).toFixed(1), "%)")), E && E.tokens > 0 && XQ.createElement(j, null, XQ.createElement(TextComponent, {
        color: E.color
    }, "⛝"), XQ.createElement(TextComponent, {
        dimColor: !0
    }, " ", E.name, ": "), XQ.createElement(TextComponent, {
        dimColor: !0
    }, E.tokens < 1000 ? `TextComponent{E.tokens}` : `TextComponent{(E.tokens/1000).toFixed(1)}k`, " ", "tokens (", (E.tokens / G * 100).toFixed(1), "%)")))), XQ.createElement(j, {
        flexDirection: "column",
        marginLeft: -1
    }, W.length > 0 && XQ.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, XQ.createElement(j, null, XQ.createElement(TextComponent, {
        bold: !0
    }, "MCP tools"), XQ.createElement(TextComponent, {
        dimColor: !0
    }, " · /mcp")), W.map((z, w) => XQ.createElement(j, {
        key: w
    }, XQ.createElement(TextComponent, null, "└ ", z.name, " (", z.serverName, "):", " "), XQ.createElement(TextComponent, {
        dimColor: !0
    }, z.tokens < 1000 ? `TextComponent{z.tokens}` : `TextComponent{(z.tokens/1000).toFixed(1)}k`, " ", "tokens")))), X.length > 0 && XQ.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, XQ.createElement(j, null, XQ.createElement(TextComponent, {
        bold: !0
    }, "Custom agents"), XQ.createElement(TextComponent, {
        dimColor: !0
    }, " · /agents")), X.map((z, w) => {
        let N = z.source === "projectSettings" ? "Project" : z.source === "userSettings" ? "User" : z.source === "localSettings" ? "Local" : z.source === "flagSettings" ? "Flag" : z.source === "policySettings" ? "Policy" : z.source === "plugin" ? "Plugin" : z.source === "built-in" ? "Built-in" : String(z.source);
        return XQ.createElement(j, {
            key: w
        }, XQ.createElement(TextComponent, null, "└ ", z.agentType, " (", N, "):", " "), XQ.createElement(TextComponent, {
            dimColor: !0
        }, z.tokens < 1000 ? `TextComponent{z.tokens}` : `TextComponent{(z.tokens/1000).toFixed(1)}k`, " ", "tokens"))
    })), J.length > 0 && XQ.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, XQ.createElement(j, null, XQ.createElement(TextComponent, {
        bold: !0
    }, "Memory files"), XQ.createElement(TextComponent, {
        dimColor: !0
    }, " · /memory")), J.map((z, w) => XQ.createElement(j, {
        key: w
    }, XQ.createElement(TextComponent, null, "└ ", z.type, " (", z.path, "):", " "), XQ.createElement(TextComponent, {
        dimColor: !0
    }, z.tokens < 1000 ? `TextComponent{z.tokens}` : `TextComponent{(z.tokens/1000).toFixed(1)}k`, " ", "tokens")))), F && F.tokens > 0 && XQ.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, XQ.createElement(j, null, XQ.createElement(TextComponent, {
        bold: !0
    }, "SlashCommand Tool"), XQ.createElement(TextComponent, {
        dimColor: !0
    }, " ", "·", " ", F.includedCommands < F.totalCommands ? `TextComponent{F.includedCommands} of TextComponent{F.totalCommands} commands` : `TextComponent{F.totalCommands} commands`)), XQ.createElement(j, null, XQ.createElement(TextComponent, null, "└ Total: "), XQ.createElement(TextComponent, {
        dimColor: !0
    }, F.tokens < 1000 ? `TextComponent{F.tokens}` : `TextComponent{(F.tokens/1000).toFixed(1)}k`, " ", "tokens"))), V && V.tokens > 0 && !1, K && !1))
}
var XQ, VY1 = "Autocompact buffer";
var nW9 = lazyLoader(() => {
    hA();
    m8();
    XQ = esmImport(VA(), 1)
});
import {
    PassThrough as yS3
} from "stream";

function xS3({
    children: A
}) {
    let {
        exit: Q
    } = Sg1();
    return Jx.useLayoutEffect(() => {
        let B = setTimeout(Q, 0);
        return () => clearTimeout(B)
    }, [Q]), Jx.createElement(Jx.Fragment, null, A)
}

function Va(A) {
    return new Promise(async (Q) => {
        let B = "",
            G = new yS3;
        G.on("data", (I) => {
            B += I.toString()
        }), await (await Z3(Jx.createElement(xS3, null, A), {
            stdout: G
        })).waitUntilExit(), Q(B)
    })
}
var Jx;
var ljA = lazyLoader(() => {
    hA();
    Jx = esmImport(VA(), 1)
});

function yg(A) {
    return A < 1000 ? `TextComponent{A}` : `TextComponent{(A/1000).toFixed(1)}k`
}

function bS3(A) {
    let {
        categories: Q,
        totalTokens: B,
        rawMaxTokens: G,
        percentage: Z,
        model: I,
        memoryFiles: Y,
        mcpTools: J,
        agents: W,
        slashCommands: X,
        skills: F,
        messageBreakdown: V
    } = A, K = `## Context Usage

`;
    K += `**Model:** TextComponent{I}  
`, K += `**Tokens:** TextComponent{yg(B)} / TextComponent{yg(G)} (TextComponent{Z}%)

`;
    let D = Q.filter((H) => H.tokens > 0 && H.name !== "Free space" && H.name !== "Autocompact buffer");
    if (D.length > 0) {
        K += `### Categories

`, K += `| Category | Tokens | Percentage |
`, K += `|----------|--------|------------|
`;
        for (let E of D) {
            let z = (E.tokens / G * 100).toFixed(1);
            K += `| TextComponent{E.name} | TextComponent{yg(E.tokens)} | TextComponent{z}% |
`
        }
        let H = Q.find((E) => E.name === "Free space");
        if (H && H.tokens > 0) {
            let E = (H.tokens / G * 100).toFixed(1);
            K += `| Free space | TextComponent{yg(H.tokens)} | TextComponent{E}% |
`
        }
        let C = Q.find((E) => E.name === "Autocompact buffer");
        if (C && C.tokens > 0) {
            let E = (C.tokens / G * 100).toFixed(1);
            K += `| Autocompact buffer | TextComponent{yg(C.tokens)} | TextComponent{E}% |
`
        }
        K += `
`
    }
    if (J.length > 0) {
        K += `### MCP Tools

`, K += `| Tool | Server | Tokens |
`, K += `|------|--------|--------|
`;
        for (let H of J) K += `| TextComponent{H.name} | TextComponent{H.serverName} | TextComponent{yg(H.tokens)} |
`;
        K += `
`
    }
    if (W.length > 0) {
        K += `### Custom Agents

`, K += `| Agent Type | Source | Tokens |
`, K += `|------------|--------|--------|
`;
        for (let H of W) {
            let C;
            switch (H.source) {
                case "projectSettings":
                    C = "Project";
                    break;
                case "userSettings":
                    C = "User";
                    break;
                case "localSettings":
                    C = "Local";
                    break;
                case "flagSettings":
                    C = "Flag";
                    break;
                case "policySettings":
                    C = "Policy";
                    break;
                case "plugin":
                    C = "Plugin";
                    break;
                case "built-in":
                    C = "Built-in";
                    break;
                default:
                    C = String(H.source)
            }
            K += `| TextComponent{H.agentType} | TextComponent{C} | TextComponent{yg(H.tokens)} |
`
        }
        K += `
`
    }
    if (Y.length > 0) {
        K += `### Memory Files

`, K += `| Type | Path | Tokens |
`, K += `|------|------|--------|
`;
        for (let H of Y) K += `| TextComponent{H.type} | TextComponent{H.path} | TextComponent{yg(H.tokens)} |
`;
        K += `
`
    }
    if (X && X.tokens > 0) K += `### SlashCommand Tool

`, K += `**Commands:** TextComponent{X.includedCommands<X.totalCommands?`TextComponent{X.includedCommands} of TextComponent{X.totalCommands}`:X.totalCommands}  
`, K += `**Total tokens:** TextComponent{yg(X.tokens)}

`;
    return F && F.tokens > 0, K
}
var EF0, vS3, aW9;
var sW9 = lazyLoader(() => {
    nW9();
    C51();
    ljA();
    N1A();
    nQ();
    EF0 = esmImport(VA(), 1), vS3 = {
        name: "context",
        description: "Visualize current context usage as a colored grid",
        isEnabled: () => !0,
        isHidden: !1,
        type: "local",
        supportsNonInteractive: !0,
        userFacingName() {
            return this.name
        },
        async call(A, {
            messages: Q,
            getAppState: B,
            options: {
                mainLoopModel: G,
                tools: Z,
                isNonInteractiveSession: I
            }
        }) {
            let Y = gk(Q),
                {
                    messages: J
                } = await $i(Y),
                W = process.stdout.columns || 80,
                X = await B(),
                F = await Ov2(J, G, async () => X.toolPermissionContext, Z, X.agentDefinitions, W);
            if (I) return {
                type: "text",
                value: bS3(F)
            };
            return {
                type: "text",
                value: await Va(EF0.createElement(iW9, {
                    data: F
                }))
            }
        }
    };
    aW9 = vS3
});
var fS3, rW9;
var oW9 = lazyLoader(() => {
    x_();
    hB();
    zi();
    fS3 = {
        type: "local",
        name: "cost",
        description: "Show the total cost and duration of the current session",
        isEnabled: () => !0,
        get isHidden() {
            return AB()
        },
        supportsNonInteractive: !0,
        async call() {
            if (AB()) {
                let A;
                if (hk.isUsingOverage) A = "You are currently using your overages to power your Claude Code usage. We will automatically switch you back to your subscription rate limits when they reset";
                else A = "You are currently using your subscription to power your Claude Code usage";
                return {
                    type: "text",
                    value: A
                }
            }
            return {
                type: "text",
                value: Cm1()
            }
        },
        userFacingName() {
            return "cost"
        }
    }, rW9 = fS3
});
var tW9 = () => {};

function KY1() {
    return ijA.createElement(TextComponent, {
        color: "permission"
    }, "Press ", ijA.createElement(TextComponent, {
        bold: !0
    }, "Enter"), " to continue…")
}
var ijA;
var zF0 = lazyLoader(() => {
    hA();
    ijA = esmImport(VA(), 1)
});

function eW9(A, Q = {}) {
    let {
        showValues: B = !0,
        hideFunctions: G = !1,
        themeName: Z = "dark",
        treeCharColors: I = {}
    } = Q, Y = [], J = new WeakSet;

    function W(V, K) {
        if (!K) return V;
        return tQ(K, Z)(V)
    }

    function X(V, K, D, H = 0) {
        if (typeof V === "string") {
            Y.push(K + W(V, I.value));
            return
        }
        if (typeof V !== "object" || V === null) {
            if (B) {
                let E = String(V);
                Y.push(K + W(E, I.value))
            }
            return
        }
        if (J.has(V)) {
            Y.push(K + W("[Circular]", I.value));
            return
        }
        J.add(V);
        let C = Object.keys(V).filter((E) => {
            let z = V[E];
            if (G && typeof z === "function") return !1;
            return !0
        });
        C.forEach((E, z) => {
            let w = V[E],
                N = z === C.length - 1,
                q = H === 0 && z === 0 ? "" : K,
                R = N ? njA.lastBranch : njA.branch,
                P = W(R, I.treeChar),
                y = E.trim() === "" ? "" : W(E, I.key),
                v = q + P + (y ? " " + y : ""),
                x = E.trim() !== "";
            if (w && typeof w === "object" && J.has(w)) {
                let p = W("[Circular]", I.value);
                Y.push(v + (x ? ": " : v ? " " : "") + p)
            } else if (w && typeof w === "object" && !Array.isArray(w)) {
                Y.push(v);
                let p = N ? njA.empty : njA.line,
                    u = W(p, I.treeChar),
                    o = q + u + " ";
                X(w, o, N, H + 1)
            } else if (Array.isArray(w)) Y.push(v + (x ? ": " : v ? " " : "") + "[Array(" + w.length + ")]");
            else if (B) {
                let p = typeof w === "function" ? "[Function]" : String(w),
                    u = W(p, I.value);
                v += (x ? ": " : v ? " " : "") + u, Y.push(v)
            } else Y.push(v)
        })
    }
    let F = Object.keys(A);
    if (F.length === 0) return W("(empty)", I.value);
    if (F.length === 1 && F[0] !== void 0 && F[0].trim() === "" && typeof A[F[0]] === "string") {
        let V = F[0],
            K = W(njA.lastBranch, I.treeChar),
            D = W(A[V], I.value);
        return K + " " + D
    }
    return X(A, "", !0), Y.join(`
`)
}
var njA;
var AX9 = lazyLoader(() => {
    n2();
    hA();
    njA = {
        branch: V1.lineUpDownRight,
        lastBranch: V1.lineUpRight,
        line: V1.lineVertical,
        empty: " "
    }
});

function hS3(A) {
    let Q = {};
    return A.forEach((B) => {
        if (!B.path) {
            Q[""] = B.message;
            return
        }
        let G = B.path.split("."),
            Z = B.path;
        if (B.invalidValue !== null && B.invalidValue !== void 0 && G.length > 0) {
            let I = [];
            for (let Y = 0; Y < G.length; Y++) {
                let J = G[Y];
                if (!J) continue;
                let W = parseInt(J, 10);
                if (!isNaN(W) && Y === G.length - 1) {
                    let X;
                    if (typeof B.invalidValue === "string") X = `"TextComponent{B.invalidValue}"`;
                    else if (B.invalidValue === null) X = "null";
                    else if (B.invalidValue === void 0) X = "undefined";
                    else X = String(B.invalidValue);
                    I.push(X)
                } else I.push(J)
            }
            Z = I.join(".")
        }
        Y3B(Q, Z, B.message, Object)
    }), Q
}

function QX9({
    errors: A
}) {
    let [Q] = $B();
    if (A.length === 0) return null;
    let B = A.reduce((Z, I) => {
            let Y = I.file || "(file not specified)";
            if (!Z[Y]) Z[Y] = [];
            return Z[Y].push(I), Z
        }, {}),
        G = Object.keys(B).sort();
    return nW.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        marginBottom: 1
    }, nW.createElement(TextComponent, {
        bold: !0
    }, "Invalid Settings"), G.map((Z) => {
        let I = B[Z] || [];
        I.sort((X, F) => {
            if (!X.path && F.path) return -1;
            if (X.path && !F.path) return 1;
            return (X.path || "").localeCompare(F.path || "")
        });
        let Y = hS3(I),
            J = new Map;
        I.forEach((X) => {
            if (X.suggestion || X.docLink) {
                let F = `TextComponent{X.suggestion||""}|TextComponent{X.docLink||""}`;
                if (!J.has(F)) J.set(F, {
                    suggestion: X.suggestion,
                    docLink: X.docLink
                })
            }
        });
        let W = eW9(Y, {
            showValues: !0,
            themeName: Q,
            treeCharColors: {
                treeChar: "inactive",
                key: "text",
                value: "inactive"
            }
        });
        return nW.createElement(j, {
            key: Z,
            flexDirection: "column"
        }, nW.createElement(TextComponent, null, Z), nW.createElement(j, {
            marginLeft: 1
        }, nW.createElement(TextComponent, {
            dimColor: !0
        }, W)), J.size > 0 && nW.createElement(j, {
            flexDirection: "column",
            marginTop: 1
        }, Array.from(J.values()).map((X, F) => nW.createElement(j, {
            key: `suggestion-pair-TextComponent{F}`,
            flexDirection: "column",
            marginBottom: 1
        }, X.suggestion && nW.createElement(TextComponent, {
            dimColor: !0,
            wrap: "wrap"
        }, X.suggestion), X.docLink && nW.createElement(TextComponent, {
            dimColor: !0,
            wrap: "wrap"
        }, "Learn more: ", X.docLink)))))
    }))
}
var nW;
var BX9 = lazyLoader(() => {
    hA();
    J3B();
    AX9();
    nW = esmImport(VA(), 1)
});

function UF0({
    scope: A,
    parsingErrors: Q,
    warnings: B
}) {
    let G = Q.length > 0,
        Z = B.length > 0;
    if (!G && !Z) return null;
    return READ_TOOL_NAME.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, READ_TOOL_NAME.default.createElement(j, null, (G || Z) && READ_TOOL_NAME.default.createElement(TextComponent, {
        color: G ? "error" : "warning"
    }, "[", G ? "Failed to parse" : "Contains warnings", "]", " "), READ_TOOL_NAME.default.createElement(TextComponent, null, Gt(A))), READ_TOOL_NAME.default.createElement(j, null, READ_TOOL_NAME.default.createElement(TextComponent, {
        dimColor: !0
    }, "Location: "), READ_TOOL_NAME.default.createElement(TextComponent, {
        dimColor: !0
    }, mw(A))), READ_TOOL_NAME.default.createElement(j, {
        marginLeft: 1,
        flexDirection: "column"
    }, Q.map((I, Y) => {
        let J = I.mcpErrorMetadata?.serverName;
        return READ_TOOL_NAME.default.createElement(j, {
            key: `error-TextComponent{Y}`
        }, READ_TOOL_NAME.default.createElement(TextComponent, null, READ_TOOL_NAME.default.createElement(TextComponent, {
            dimColor: !0
        }, "└ "), READ_TOOL_NAME.default.createElement(TextComponent, {
            color: "error"
        }, "[Error]"), READ_TOOL_NAME.default.createElement(TextComponent, {
            dimColor: !0
        }, " ", J && `[TextComponent{J}] `, I.path && I.path !== "" ? `TextComponent{I.path}: ` : "", I.message)))
    }), B.map((I, Y) => {
        let J = I.mcpErrorMetadata?.serverName;
        return READ_TOOL_NAME.default.createElement(j, {
            key: `warning-TextComponent{Y}`
        }, READ_TOOL_NAME.default.createElement(TextComponent, null, READ_TOOL_NAME.default.createElement(TextComponent, {
            dimColor: !0
        }, "└ "), READ_TOOL_NAME.default.createElement(TextComponent, {
            color: "warning"
        }, "[Warning]"), READ_TOOL_NAME.default.createElement(TextComponent, {
            dimColor: !0
        }, " ", J && `[TextComponent{J}] `, I.path && I.path !== "" ? `TextComponent{I.path}: ` : "", I.message)))
    })))
}

function DY1() {
    let A = yX("user"),
        Q = yX("project"),
        B = yX("local"),
        G = {
            user: A.errors.filter((J) => J.mcpErrorMetadata && J.mcpErrorMetadata.severity === "fatal"),
            project: Q.errors.filter((J) => J.mcpErrorMetadata && J.mcpErrorMetadata.severity === "fatal"),
            local: B.errors.filter((J) => J.mcpErrorMetadata && J.mcpErrorMetadata.severity === "fatal")
        },
        Z = {
            user: A.errors.filter((J) => J.mcpErrorMetadata && J.mcpErrorMetadata.severity === "warning"),
            project: Q.errors.filter((J) => J.mcpErrorMetadata && J.mcpErrorMetadata.severity === "warning"),
            local: B.errors.filter((J) => J.mcpErrorMetadata && J.mcpErrorMetadata.severity === "warning")
        },
        I = G.user.length > 0 || G.project.length > 0 || G.local.length > 0,
        Y = Z.user.length > 0 || Z.project.length > 0 || Z.local.length > 0;
    if (!I && !Y) return null;
    return READ_TOOL_NAME.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1,
        marginBottom: 1
    }, READ_TOOL_NAME.default.createElement(TextComponent, {
        bold: !0
    }, "MCP Config Diagnostics"), READ_TOOL_NAME.default.createElement(j, {
        marginTop: 1
    }, READ_TOOL_NAME.default.createElement(TextComponent, {
        dimColor: !0
    }, "For help configuring MCP servers, see:", " ", READ_TOOL_NAME.default.createElement(a4, {
        url: "https://docs.claude.com/AGENT_OUTPUT_TOOL_NAME/docs/claude-code/mcp"
    }, "https://docs.claude.com/AGENT_OUTPUT_TOOL_NAME/docs/claude-code/mcp"))), READ_TOOL_NAME.default.createElement(UF0, {
        scope: "user",
        parsingErrors: G.user,
        warnings: Z.user
    }), READ_TOOL_NAME.default.createElement(UF0, {
        scope: "project",
        parsingErrors: G.project,
        warnings: Z.project
    }), READ_TOOL_NAME.default.createElement(UF0, {
        scope: "local",
        parsingErrors: G.local,
        warnings: Z.local
    }))
}
var READ_TOOL_NAME;
var $F0 = lazyLoader(() => {
    hA();
    GM();
    xX();
    hA();
    READ_TOOL_NAME = esmImport(VA(), 1)
});

function GX9() {
    return OE0().map((Q) => ({
        name: Q.name,
        value: process.env[Q.name],
        ...Q.validate(process.env[Q.name])
    })).filter((Q) => Q.status !== "valid")
}
var ZX9 = lazyLoader(() => {
    S0()
});
async function gS3() {
    let A = D1A();
    if (A.length === 0) return null;
    let Q = A.sort((G, Z) => Z.content.length - G.content.length).map((G) => `TextComponent{G.path}: TextComponent{G.content.length.toLocaleString()} chars`);
    return {
        type: "claudemd_files",
        severity: "warning",
        message: A.length === 1 ? `Large CLAUDE.md file detected (TextComponent{A[0].content.length.toLocaleString()} chars > TextComponent{zh.toLocaleString()})` : `TextComponent{A.length} large CLAUDE.md files detected (each > TextComponent{zh.toLocaleString()} chars)`,
        details: Q,
        currentValue: A.length,
        threshold: zh
    }
}
async function uS3(A) {
    if (!A) return null;
    let Q = DjA(A);
    if (Q <= $QA) return null;
    let B = A.activeAgents.filter((Z) => Z.source !== "built-in").map((Z) => {
            let I = `TextComponent{Z.agentType}: TextComponent{Z.whenToUse}`;
            return {
                name: Z.agentType,
                tokens: SG(I)
            }
        }).sort((Z, I) => I.tokens - Z.tokens),
        G = B.slice(0, 5).map((Z) => `TextComponent{Z.name}: ~TextComponent{Z.tokens.toLocaleString()} tokens`);
    if (B.length > 5) G.push(`(TextComponent{B.length-5} more custom agents)`);
    return {
        type: "agent_descriptions",
        severity: "warning",
        message: `Large agent descriptions (~TextComponent{Q.toLocaleString()} tokens > TextComponent{$QA.toLocaleString()})`,
        details: G,
        currentValue: Q,
        threshold: $QA
    }
}
async function mS3(A, Q, B) {
    let G = A.filter((Z) => Z.isMcp);
    if (G.length === 0) return null;
    try {
        let {
            mcpToolTokens: Z,
            mcpToolDetails: I
        } = await lRA(A, Q, B);
        if (Z <= IFA) return null;
        let Y = new Map;
        for (let X of I) {
            let V = X.name.split("__")[1] || "unknown",
                K = Y.get(V) || {
                    count: 0,
                    tokens: 0
                };
            Y.set(V, {
                count: K.count + 1,
                tokens: K.tokens + X.tokens
            })
        }
        let J = Array.from(Y.entries()).sort((X, F) => F[1].tokens - X[1].tokens),
            W = J.slice(0, 5).map(([X, F]) => `TextComponent{X}: TextComponent{F.count} tools (~TextComponent{F.tokens.toLocaleString()} tokens)`);
        if (J.length > 5) W.push(`(TextComponent{J.length-5} more servers)`);
        return {
            type: "mcp_tools",
            severity: "warning",
            message: `Large MCP tools context (~TextComponent{Z.toLocaleString()} tokens > TextComponent{IFA.toLocaleString()})`,
            details: W,
            currentValue: Z,
            threshold: IFA
        }
    } catch (Z) {
        let I = G.reduce((Y, J) => {
            let W = (J.name?.length || 0) + J.description.length;
            return Y + SG(W.toString())
        }, 0);
        if (I <= IFA) return null;
        return {
            type: "mcp_tools",
            severity: "warning",
            message: `Large MCP tools context (~TextComponent{I.toLocaleString()} tokens estimated > TextComponent{IFA.toLocaleString()})`,
            details: [`TextComponent{G.length} MCP tools detected (token count estimated)`],
            currentValue: I,
            threshold: IFA
        }
    }
}
async function IX9(A, Q, B) {
    let [G, Z, I] = await Promise.all([gS3(), uS3(Q), mS3(A, B, Q)]);
    return {
        claudeMdWarning: G,
        agentWarning: Z,
        mcpWarning: I
    }
}
var IFA = 25000;
var YX9 = lazyLoader(() => {
    uE();
    PW0();
    C51();
    gM()
});
import {
    join as JX9
} from "path";

function HY1({
    onDone: A
}) {
    let [Q] = _Q(), B = Q.agentDefinitions, G = WB.useMemo(() => {
        return Q?.mcp?.tools || []
    }, [Q?.mcp?.tools]), [Z, I] = WB.useState(null), [Y, J] = WB.useState(null), [W, X] = WB.useState(null), V = bI1().filter((D) => D.mcpErrorMetadata === void 0), K = WB.useMemo(() => GX9(), []);
    if (WB.useEffect(() => {
            OIA().then(I), (async () => {
                let D = OA(),
                    H = JX9(PQ(), "agents"),
                    C = JX9(pQ(), ".claude", "agents"),
                    {
                        activeAgents: E,
                        allAgents: z,
                        failedFiles: w
                    } = B,
                    N = {
                        activeAgents: E.map((R) => ({
                            agentType: R.agentType,
                            source: R.source
                        })),
                        userAgentsDir: H,
                        projectAgentsDir: C,
                        userDirExists: D.existsSync(H),
                        projectDirExists: D.existsSync(C),
                        failedFiles: w
                    };
                J(N);
                let q = await IX9(G, {
                    activeAgents: E,
                    allAgents: z,
                    failedFiles: w
                }, async () => Q.toolPermissionContext);
                X(q)
            })()
        }, [Q.toolPermissionContext, G, B]), h1((D, H) => {
            if (H.return || H.escape || H.ctrl && D === "c") A("Claude Code diagnostics dismissed", {
                display: "system"
            })
        }), !Z) return WB.default.createElement(j, {
        paddingX: 1,
        paddingTop: 1
    }, WB.default.createElement(TextComponent, {
        dimColor: !0
    }, "Checking installation status…"));
    return WB.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        paddingX: 1,
        paddingTop: 1
    }, WB.default.createElement(j, {
        flexDirection: "column"
    }, WB.default.createElement(TextComponent, {
        bold: !0
    }, "Diagnostics"), WB.default.createElement(TextComponent, null, "└ Currently running: ", Z.installationType, " (", Z.version, ")"), Z.packageManager && WB.default.createElement(TextComponent, null, "└ Package manager: ", Z.packageManager), WB.default.createElement(TextComponent, null, "└ Path: ", Z.installationPath), WB.default.createElement(TextComponent, null, "└ Invoked: ", Z.invokedBinary), WB.default.createElement(TextComponent, null, "└ Config install method: ", Z.configInstallMethod), WB.default.createElement(TextComponent, null, "└ Auto-updates:", " ", Z.packageManager ? "Managed by package manager" : Z.autoUpdates), Z.hasUpdatePermissions !== null && WB.default.createElement(TextComponent, null, "└ Update permissions:", " ", Z.hasUpdatePermissions ? "Yes" : "No (requires sudo)"), WB.default.createElement(TextComponent, null, "└ Search: ", Z.ripgrepStatus.working ? "OK" : "Not working", " (", Z.ripgrepStatus.mode === "builtin" ? HJ() ? "bundled" : "vendor" : Z.ripgrepStatus.systemPath || "system", ")"), Z.recommendation && WB.default.createElement(WB.default.Fragment, null, WB.default.createElement(TextComponent, null), WB.default.createElement(TextComponent, {
        color: "warning"
    }, "Recommendation: ", Z.recommendation.split(`
`)[0]), WB.default.createElement(TextComponent, {
        dimColor: !0
    }, Z.recommendation.split(`
`)[1])), Z.multipleInstallations.length > 1 && WB.default.createElement(WB.default.Fragment, null, WB.default.createElement(TextComponent, null), WB.default.createElement(TextComponent, {
        color: "warning"
    }, "Warning: Multiple installations found"), Z.multipleInstallations.map((D, H) => WB.default.createElement(TextComponent, {
        key: H
    }, "└ ", D.type, " at ", D.path))), Z.warnings.length > 0 && WB.default.createElement(WB.default.Fragment, null, WB.default.createElement(TextComponent, null), Z.warnings.map((D, H) => WB.default.createElement(j, {
        key: H,
        flexDirection: "column"
    }, WB.default.createElement(TextComponent, {
        color: "warning"
    }, "Warning: ", D.issue), WB.default.createElement(TextComponent, null, "Fix: ", D.fix)))), V.length > 0 && WB.default.createElement(WB.default.Fragment, null, WB.default.createElement(TextComponent, null), WB.default.createElement(QX9, {
        errors: V
    }))), WB.default.createElement(DY1, null), K.length > 0 && WB.default.createElement(j, {
        flexDirection: "column"
    }, WB.default.createElement(TextComponent, {
        bold: !0
    }, "Environment Variables"), K.map((D, H) => WB.default.createElement(TextComponent, {
        key: H
    }, "└ ", D.name, ":", " ", WB.default.createElement(TextComponent, {
        color: D.status === "capped" ? "warning" : "error"
    }, D.message)))), Y?.failedFiles && Y.failedFiles.length > 0 && WB.default.createElement(j, {
        flexDirection: "column"
    }, WB.default.createElement(TextComponent, {
        bold: !0,
        color: "error"
    }, "Agent Parse Errors"), WB.default.createElement(TextComponent, {
        color: "error"
    }, "└ Failed to parse ", Y.failedFiles.length, " agent file(s):"), Y.failedFiles.map((D, H) => WB.default.createElement(TextComponent, {
        key: H,
        dimColor: !0
    }, "  ", "└ ", D.path, ": ", D.error))), Q.plugins.errors.length > 0 && WB.default.createElement(j, {
        flexDirection: "column"
    }, WB.default.createElement(TextComponent, {
        bold: !0,
        color: "error"
    }, "Plugin Errors"), WB.default.createElement(TextComponent, {
        color: "error"
    }, "└ ", Q.plugins.errors.length, " plugin error(s) detected:"), Q.plugins.errors.map((D, H) => WB.default.createElement(TextComponent, {
        key: H,
        dimColor: !0
    }, "  ", "└ ", D.source || "unknown", "plugin" in D && D.plugin ? ` [TextComponent{D.plugin}]` : "", ":", " ", BM(D)))), W && (W.claudeMdWarning || W.agentWarning || W.mcpWarning) && WB.default.createElement(j, {
        flexDirection: "column"
    }, WB.default.createElement(TextComponent, {
        bold: !0
    }, "Context Usage Warnings"), W.claudeMdWarning && WB.default.createElement(WB.default.Fragment, null, WB.default.createElement(TextComponent, null, "└", " ", WB.default.createElement(TextComponent, {
        color: "warning"
    }, V1.warning, " ", W.claudeMdWarning.message)), WB.default.createElement(TextComponent, null, "  ", "└ Files:"), W.claudeMdWarning.details.map((D, H) => WB.default.createElement(TextComponent, {
        key: H,
        dimColor: !0
    }, "    ", "└ ", D))), W.agentWarning && WB.default.createElement(WB.default.Fragment, null, WB.default.createElement(TextComponent, null, "└", " ", WB.default.createElement(TextComponent, {
        color: "warning"
    }, V1.warning, " ", W.agentWarning.message)), WB.default.createElement(TextComponent, null, "  ", "└ Top contributors:"), W.agentWarning.details.map((D, H) => WB.default.createElement(TextComponent, {
        key: H,
        dimColor: !0
    }, "    ", "└ ", D))), W.mcpWarning && WB.default.createElement(WB.default.Fragment, null, WB.default.createElement(TextComponent, null, "└", " ", WB.default.createElement(TextComponent, {
        color: "warning"
    }, V1.warning, " ", W.mcpWarning.message)), WB.default.createElement(TextComponent, null, "  ", "└ MCP servers:"), W.mcpWarning.details.map((D, H) => WB.default.createElement(TextComponent, {
        key: H,
        dimColor: !0
    }, "    ", "└ ", D)))), WB.default.createElement(j, null, WB.default.createElement(KY1, null)))
}
var WB;
var wF0 = lazyLoader(() => {
    hA();
    n2();
    Ih();
    zF0();
    VX0();
    BX9();
    $F0();
    S0();
    o0();
    hQ();
    ZX9();
    YX9();
    H9();
    WB = esmImport(VA(), 1)
});
var WX9, dS3, XX9;
var FX9 = lazyLoader(() => {
    wF0();
    WX9 = esmImport(VA(), 1), dS3 = {
        name: "doctor",
        description: "Diagnose and verify your Claude Code installation and settings",
        isEnabled: () => !process.env.DISABLE_DOCTOR_COMMAND,
        isHidden: !1,
        userFacingName() {
            return "doctor"
        },
        type: "local-jsx",
        call(A, Q, B) {
            return new Promise((G) => G(WX9.default.createElement(HY1, {
                onDone: A
            })))
        }
    }, XX9 = dS3
});
var qF0 = lazyLoader(() => {
    hQ()
});
var NF0 = lazyLoader(() => {
    vzA();
    D0();
    o0();
    bzA();
    qF0()
});
var LF0 = lazyLoader(() => {
    vzA();
    D0();
    u1();
    rv1();
    av1();
    qF0();
    o0();
    bzA();
    NF0()
});
var lS3;
var VX9 = lazyLoader(() => {
    hA();
    T6();
    c9();
    hA();
    lS3 = esmImport(VA(), 1)
});
var KX9;
var DX9 = lazyLoader(() => {
    hA();
    KX9 = esmImport(VA(), 1)
});
var MF0;
var HX9 = lazyLoader(() => {
    hA();
    QY();
    zI();
    NF0();
    D0();
    MF0 = esmImport(VA(), 1)
});
var CY1;
var CX9 = lazyLoader(() => {
    hA();
    zI();
    LF0();
    VX9();
    DX9();
    HX9();
    D0();
    CY1 = esmImport(VA(), 1)
});
var OF0;
var EX9 = lazyLoader(() => {
    hA();
    zI();
    LF0();
    D0();
    o0();
    jI();
    CX9();
    OF0 = esmImport(VA(), 1)
});

function nS3({
    onDone: A
}) {
    RF0.useState(() => {
        xF.cache.clear?.()
    });
    let {
        columns: Q
    } = YB(), B = async (W) => {
        try {
            if (W.includes(PQ())) {
                let D = PQ();
                if (!OA().existsSync(D)) OA().mkdirSync(D)
            }
            if (!OA().existsSync(W)) OA().writeFileSync(W, "", {
                encoding: "utf8",
                flush: !0
            });
            await xn(W);
            let X = "default",
                F = "";
            if (process.env.VISUAL) X = "$VISUAL", F = process.env.VISUAL;
            else if (process.env.EDITOR) X = "$EDITOR", F = process.env.EDITOR;
            let V = X !== "default" ? `Using TextComponent{X}="TextComponent{F}".` : "",
                K = V ? `> TextComponent{V} To change editor, set $EDITOR or $VISUAL environment variable.` : "> To use a different editor, set the $EDITOR or $VISUAL environment variable.";
            A(`Opened memory file at TextComponent{dX0(W)}

TextComponent{K}`, {
                display: "system"
            })
        } catch (X) {
            e(X instanceof Error ? X : Error(String(X))), A(`Error opening memory file: TextComponent{X}`)
        }
    }, G = () => {
        A("Cancelled memory editing", {
            display: "system"
        })
    }, I = [].length, [Y, J] = RF0.useState(!1);
    return h1((W, X) => {}), AN.createElement(j, {
        flexDirection: "column"
    }, AN.createElement(j, {
        marginTop: 1,
        marginBottom: 1
    }, AN.createElement(TextComponent, {
        dimColor: !0
    }, "Learn more:", " ", AN.createElement(a4, {
        url: "https://docs.claude.com/AGENT_OUTPUT_TOOL_NAME/docs/claude-code/memory"
    }))), !1, !1, !1, !Y && AN.createElement(TZ1, {
        title: "Select memory to edit:",
        onSelect: B,
        onCancel: G
    }))
}
var AN, RF0, iS3, zX9;
var UX9 = lazyLoader(() => {
    hQ();
    u1();
    vn();
    o0();
    qJ0();
    cX0();
    hA();
    hA();
    uE();
    m8();
    AN = esmImport(VA(), 1), RF0 = esmImport(VA(), 1), iS3 = {
        type: "local-jsx",
        name: "memory",
        description: "Edit Claude memory files",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A) {
            return AN.createElement(nS3, {
                onDone: A
            })
        },
        userFacingName() {
            return this.name
        }
    };
    zX9 = iS3
});

function $X9({
    onCancel: A
}) {
    return h1((Q, B) => {
        if (B.escape) A()
    }), Qz.createElement(j, {
        flexDirection: "column",
        paddingY: 1,
        gap: 1
    }, Qz.createElement(j, null, Qz.createElement(TextComponent, null, "Claude understands your codebase, makes edits with your permission, and executes commands — right from your terminal.")), Qz.createElement(j, {
        flexDirection: "column"
    }, Qz.createElement(j, null, Qz.createElement(TextComponent, {
        bold: !0
    }, "Shortcuts")), Qz.createElement(OZ1, {
        gap: 2
    })))
}
var Qz;
var wX9 = lazyLoader(() => {
    hA();
    zJ0();
    Qz = esmImport(VA(), 1)
});

function TF0({
    commands: A,
    maxHeight: Q,
    title: B,
    onCancel: G,
    emptyMessage: Z
}) {
    let I = Math.max(1, Q - 8),
        Y = qX9.useMemo(() => [...A].sort((J, W) => J.name.localeCompare(W.name)).map((J) => ({
            label: `/TextComponent{J.name}`,
            value: J.name,
            description: J.description
        })), [A]);
    return MC.createElement(j, {
        flexDirection: "column",
        paddingY: 1
    }, A.length === 0 && Z ? MC.createElement(TextComponent, {
        dimColor: !0
    }, Z) : MC.createElement(MC.Fragment, null, MC.createElement(TextComponent, null, B), MC.createElement(j, {
        marginTop: 1
    }, MC.createElement(M0, {
        options: Y,
        visibleOptionCount: I,
        onCancel: G,
        disableSelection: !0,
        hideIndexes: !0
    }))))
}
var MC, qX9;
var NX9 = lazyLoader(() => {
    hA();
    T5();
    MC = esmImport(VA(), 1), qX9 = esmImport(VA(), 1)
});

function LX9({
    onClose: A,
    commands: Q
}) {
    let {
        rows: B
    } = YB(), G = Math.floor(B / 2), Z = () => A("Help dialog dismissed", {
        display: "system"
    }), I = DQ(Z), Y = jy(), J = Q.filter((V) => Y.has(V.name) && !V.isHidden), W = [], X = Q.filter((V) => !Y.has(V.name) && !V.isHidden), F = [y6.createElement(nD, {
        key: "general",
        title: "general"
    }, y6.createElement($X9, {
        onCancel: Z
    }))];