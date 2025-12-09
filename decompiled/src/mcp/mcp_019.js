/**
 * Claude Code Decompiled
 * Category: mcp
 * File: 19/29
 * Lines: 405277 - 406776 (1500 lines)
 * Original file: cli.js
 */

}

function J69(A) {
    let Q = wQA();
    if (!Q) return [];
    let B = JI1(Q),
        G = [],
        Z = Object.keys(B).sort((I, Y) => e89.gt(I, Y, {
            loose: !0
        }) ? -1 : 1).slice(0, 3);
    for (let I of Z) {
        let Y = B[I];
        if (Y) G.push(...Y)
    }
    return G.slice(0, A)
}
var e89, A69 = 50,
    FT3 = 20,
    yW0 = 4,
    WI1 = 1,
    XI1 = 2,
    CjA, FI1 = null;
var DI1 = L(() => {
    gXA();
    GG();
    S0();
    R2();
    M9();
    hB();
    s2();
    e89 = GA(WE(), 1);
    CjA = []
});

function xW0() {
    if (m0.terminal === "Apple_Terminal") return J5.createElement(VT3, null);
    return J5.createElement(j, {
        flexDirection: "column"
    }, J5.createElement($, null, J5.createElement($, {
        color: "clawd_body"
    }, " ▐"), J5.createElement($, {
        color: "clawd_body",
        backgroundColor: "clawd_background"
    }, "▛███▜"), J5.createElement($, {
        color: "clawd_body"
    }, "▌")), J5.createElement($, null, J5.createElement($, {
        color: "clawd_body"
    }, "▝▜"), J5.createElement($, {
        color: "clawd_body",
        backgroundColor: "clawd_background"
    }, "█████"), J5.createElement($, {
        color: "clawd_body"
    }, "▛▘")), J5.createElement($, {
        color: "clawd_body"
    }, "  ", "▘▘ ▝▝", "  "))
}

function VT3() {
    return J5.createElement(j, {
        flexDirection: "column",
        alignItems: "center"
    }, J5.createElement($, null, J5.createElement($, {
        color: "clawd_body"
    }, "▗"), J5.createElement($, {
        color: "clawd_background",
        backgroundColor: "clawd_body"
    }, " ", "▗", "   ", "▖", " "), J5.createElement($, {
        color: "clawd_body"
    }, "▖")), J5.createElement($, {
        backgroundColor: "clawd_body"
    }, " ".repeat(7)), J5.createElement($, {
        color: "clawd_body"
    }, "▘▘ ▝▝"))
}
var J5;
var W69 = L(() => {
    hA();
    f5();
    J5 = GA(VA(), 1)
});

function X69(A) {
    let {
        title: Q,
        lines: B,
        footer: G,
        emptyMessage: Z,
        customContent: I
    } = A, Y = Q.length;
    if (I !== void 0) Y = Math.max(Y, I.width);
    else if (B.length === 0 && Z) Y = Math.max(Y, Z.length);
    else {
        let W = Math.max(0, ...B.map((X) => X.timestamp ? X.timestamp.length : 0));
        for (let X of B) {
            let F = W > 0 ? W : 0,
                V = X.text.length + (F > 0 ? F + 2 : 0);
            Y = Math.max(Y, V)
        }
    }
    if (G) Y = Math.max(Y, G.length);
    return Y
}

function F69({
    config: A,
    actualWidth: Q
}) {
    let {
        title: B,
        lines: G,
        footer: Z,
        emptyMessage: I,
        customContent: Y
    } = A, J = "  ", W = Math.max(0, ...G.map((X) => X.timestamp ? X.timestamp.length : 0));
    return l7.createElement(j, {
        flexDirection: "column",
        width: Q
    }, l7.createElement($, {
        bold: !0,
        color: "claude"
    }, B), Y ? l7.createElement(l7.Fragment, null, Y.content, Z && l7.createElement($, {
        dimColor: !0,
        italic: !0
    }, B7(Z, Q))) : G.length === 0 && I ? l7.createElement($, {
        dimColor: !0
    }, B7(I, Q)) : l7.createElement(l7.Fragment, null, G.map((X, F) => {
        let V = Math.max(10, Q - (W > 0 ? W + 2 : 0));
        return l7.createElement($, {
            key: F
        }, W > 0 && l7.createElement(l7.Fragment, null, l7.createElement($, {
            dimColor: !0
        }, (X.timestamp || "").padEnd(W)), "  "), l7.createElement($, null, B7(X.text, V)))
    }), Z && l7.createElement($, {
        dimColor: !0,
        italic: !0
    }, B7(Z, Q))))
}
var l7;
var V69 = L(() => {
    hA();
    l7 = GA(VA(), 1)
});

function K69({
    feeds: A,
    maxWidth: Q
}) {
    let B = A.map((I) => X69(I)),
        G = Math.max(...B),
        Z = Math.min(G, Q);
    return lP.createElement(j, {
        flexDirection: "column"
    }, A.map((I, Y) => lP.createElement(lP.Fragment, {
        key: Y
    }, lP.createElement(F69, {
        config: I,
        actualWidth: Z
    }), Y < A.length - 1 && lP.createElement(J3, {
        dividerColor: "claude"
    }))))
}
var lP;
var D69 = L(() => {
    hA();
    V69();
    eV();
    lP = GA(VA(), 1)
});
import {
    homedir as KT3
} from "os";

function HI1(A) {
    let Q = A.map((B) => {
        let G = Xp(B.modified);
        return {
            text: (B.summary && B.summary !== "No prompt" ? B.summary : B.firstPrompt) || "",
            timestamp: G
        }
    });
    return {
        title: "Recent activity",
        lines: Q,
        footer: Q.length > 0 ? "/resume for more" : void 0,
        emptyMessage: "No recent activity"
    }
}

function H69(A) {
    let Q = A.map((G) => {
            return {
                text: G
            }
        }),
        B = "Check the Claude Code changelog for updates";
    return {
        title: "What's new",
        lines: Q,
        footer: Q.length > 0 ? "/release-notes for more" : void 0,
        emptyMessage: "Check the Claude Code changelog for updates"
    }
}

function C69(A) {
    let B = A.filter(({
            isEnabled: Z
        }) => Z).sort((Z, I) => Number(Z.isComplete) - Number(I.isComplete)).map(({
            text: Z,
            isComplete: I
        }) => {
            return {
                text: `${I?`${V1.tick} `:""}${Z}`
            }
        }),
        G = H0() === KT3() ? "Note: You have launched claude in your home directory. For the best experience, launch it in a project directory instead." : void 0;
    if (G) B.push({
        text: G
    });
    return {
        title: "Tips for getting started",
        lines: B
    }
}

function E69() {
    return {
        title: "3 guest passes",
        lines: [],
        customContent: {
            content: SO.createElement(SO.Fragment, null, SO.createElement(j, {
                marginY: 1
            }, SO.createElement($, {
                color: "claude"
            }, "[✻] [✻] [✻]")), SO.createElement($, {
                dimColor: !0
            }, "Share Claude Code with friends")),
            width: 30
        },
        footer: "/passes"
    }
}
var SO;
var z69 = L(() => {
    n2();
    R2();
    hA();
    SO = GA(VA(), 1)
});
async function DT3(A = "claude_code_guest_pass") {
    let {
        accessToken: Q,
        orgUUID: B
    } = await J0A(), G = {
        ...BC(Q),
        "x-organization-uuid": B
    }, Z = `${o9().BASE_API_URL}/api/oauth/organizations/${B}/referral/eligibility`;
    return (await GQ.get(Z, {
        headers: G,
        params: {
            campaign: A
        }
    })).data
}
async function w69(A = "claude_code_guest_pass") {
    let {
        accessToken: Q,
        orgUUID: B
    } = await J0A(), G = {
        ...BC(Q),
        "x-organization-uuid": B
    }, Z = `${o9().BASE_API_URL}/api/oauth/organizations/${B}/referral/redemptions`;
    return (await GQ.get(Z, {
        headers: G,
        params: {
            campaign: A
        }
    })).data
}

function q69() {
    return !!(i6()?.organizationUuid && AB() && x4() === "max")
}

function N69() {
    if (!q69()) return {
        eligible: !1,
        needsRefresh: !1,
        hasCache: !1
    };
    let A = i6()?.organizationUuid;
    if (!A) return {
        eligible: !1,
        needsRefresh: !1,
        hasCache: !1
    };
    let B = L1().passesEligibilityCache?.[A];
    if (!B) return {
        eligible: !1,
        needsRefresh: !0,
        hasCache: !1
    };
    let {
        eligible: G,
        timestamp: Z
    } = B, Y = Date.now() - Z > $69;
    return {
        eligible: G,
        needsRefresh: Y,
        hasCache: !0
    }
}
async function U69() {
    if (zjA) return g("Passes: Reusing in-flight eligibility fetch"), zjA;
    let A = i6()?.organizationUuid;
    if (!A) return null;
    return zjA = (async () => {
        try {
            let Q = await DT3(),
                B = L1(),
                G = {
                    ...B.passesEligibilityCache,
                    [A]: {
                        ...Q,
                        timestamp: Date.now()
                    }
                };
            return d0({
                ...B,
                passesEligibilityCache: G
            }), g(`Passes eligibility cached for org ${A}: ${Q.eligible}`), Q
        } catch (Q) {
            return g("Failed to fetch and cache passes eligibility"), e(Q), null
        } finally {
            zjA = null
        }
    })(), zjA
}
async function UjA() {
    if (!q69()) return null;
    let A = i6()?.organizationUuid;
    if (!A) return null;
    let B = L1().passesEligibilityCache?.[A],
        G = Date.now();
    if (!B) return g("Passes: No cache, fetching eligibility"), await U69();
    if (G - B.timestamp > $69) {
        g("Passes: Cache stale, returning cached data and refreshing in background"), U69();
        let {
            timestamp: Y,
            ...J
        } = B;
        return J
    }
    g("Passes: Using fresh cached eligibility data");
    let {
        timestamp: Z,
        ...I
    } = B;
    return I
}
async function L69() {
    UjA()
}
var $69 = 3600000,
    zjA = null;
var $jA = L(() => {
    w3();
    EX();
    An();
    jQ();
    hB();
    D0();
    u1()
});

function HT3() {
    let A = L1(),
        {
            eligible: Q,
            hasCache: B
        } = N69();
    if (!Q || !B) return !1;
    if ((A.passesUpsellSeenCount ?? 0) >= 3) return !1;
    if (A.hasVisitedPasses) return !1;
    return !0
}

function CI1() {
    let [A] = M69.useState(() => HT3());
    return A
}

function EI1() {
    let A = L1(),
        Q = (A.passesUpsellSeenCount ?? 0) + 1;
    d0({
        ...A,
        passesUpsellSeenCount: Q
    }), BA("tengu_guest_passes_upsell_shown", {
        seen_count: Q
    })
}

function O69() {
    return Rg.createElement($, {
        dimColor: !0
    }, Rg.createElement($, {
        color: "claude"
    }, "[✻]"), " ", Rg.createElement($, {
        color: "claude"
    }, "[✻]"), " ", Rg.createElement($, {
        color: "claude"
    }, "[✻]"), " · 3 guest passes at /passes")
}
var Rg, M69;
var vW0 = L(() => {
    hA();
    jQ();
    $jA();
    w0();
    Rg = GA(VA(), 1), M69 = GA(VA(), 1)
});

function CT3() {
    if (m0.terminal === "Apple_Terminal") return v2.createElement(j, {
        flexDirection: "column",
        alignItems: "center"
    }, v2.createElement($, null, v2.createElement($, {
        color: "clawd_body"
    }, "▗"), v2.createElement($, {
        color: "clawd_background",
        backgroundColor: "clawd_body"
    }, " ", "▗", "   ", "▖", " "), v2.createElement($, {
        color: "clawd_body"
    }, "▖")), v2.createElement($, {
        backgroundColor: "clawd_body"
    }, " ".repeat(7)), v2.createElement($, {
        color: "clawd_body"
    }, "▘▘ ▝▝"));
    return v2.createElement(j, {
        flexDirection: "column"
    }, v2.createElement($, null, v2.createElement($, {
        color: "clawd_body"
    }, " ▐"), v2.createElement($, {
        color: "clawd_body",
        backgroundColor: "clawd_background"
    }, "▛███▜"), v2.createElement($, {
        color: "clawd_body"
    }, "▌")), v2.createElement($, null, v2.createElement($, {
        color: "clawd_body"
    }, "▝▜"), v2.createElement($, {
        color: "clawd_body",
        backgroundColor: "clawd_background"
    }, "█████"), v2.createElement($, {
        color: "clawd_body"
    }, "▛▘")), v2.createElement($, {
        color: "clawd_body"
    }, "  ", "▘▘ ▝▝", "  "))
}

function T69() {
    let {
        columns: A
    } = YB(), {
        version: Q,
        cwd: B,
        modelDisplayName: G,
        billingType: Z
    } = KI1(), I = CI1();
    R69.useEffect(() => {
        if (I) EI1()
    }, [I]);
    let Y = Math.max(A - 15, 20),
        W = B7(Q, Math.max(Y - "Claude Code v".length, 6)),
        {
            shouldSplit: X,
            truncatedModel: F,
            truncatedBilling: V
        } = Y69(G, Z, Y),
        K = EjA(B, Y);
    return v2.createElement(j, {
        flexDirection: "row",
        gap: 2,
        alignItems: "center"
    }, v2.createElement(CT3, null), v2.createElement(j, {
        flexDirection: "column"
    }, v2.createElement($, null, v2.createElement($, {
        bold: !0
    }, "Claude Code"), " ", v2.createElement($, {
        dimColor: !0
    }, "v", W)), X ? v2.createElement(v2.Fragment, null, v2.createElement($, {
        dimColor: !0
    }, F), v2.createElement($, {
        dimColor: !0
    }, V)) : v2.createElement($, {
        dimColor: !0
    }, F, " · ", V), v2.createElement($, {
        dimColor: !0
    }, K), I && v2.createElement(O69, null)))
}
var v2, R69;
var P69 = L(() => {
    hA();
    f5();
    m8();
    DI1();
    vW0();
    v2 = GA(VA(), 1), R69 = GA(VA(), 1)
});

function bW0() {
    let A = zI1.useMemo(zT3, []);
    if (zI1.useEffect(() => {
            _69(j69)
        }, [A.tip]), !A.tip) return null;
    return wjA.createElement(j, {
        paddingLeft: 2,
        flexDirection: "column"
    }, wjA.createElement($, {
        ...A.color === "warning" ? {
            color: "warning"
        } : A.color === "error" ? {
            color: "error"
        } : {
            dimColor: !0
        }
    }, A.tip))
}

function zT3() {
    return G7A(j69, ET3)
}
var wjA, zI1, j69 = "tengu-top-of-feed-tip",
    ET3;
var S69 = L(() => {
    hA();
    O9();
    wjA = GA(VA(), 1), zI1 = GA(VA(), 1);
    ET3 = {
        tip: "",
        color: "dim"
    }
});

function y69({
    isBeforeFirstMessage: A
}) {
    let Q = r89(A),
        B = I69(),
        G = L1().oauthAccount?.displayName ?? "",
        Z = J69(3),
        {
            columns: I
        } = YB(),
        Y = _jB(),
        J = lQ.isSandboxingEnabled(),
        W = CI1(),
        X = wg(),
        F = L1(),
        V = X.companyAnnouncements,
        [K] = qjA.useState(() => V && V.length > 0 ? F.numStartups === 1 ? V[0] : V[Math.floor(Math.random() * V.length)] : void 0),
        {
            hasReleaseNotes: D
        } = HjA(F.lastReleaseNotesSeen);
    qjA.useEffect(() => {
        let l = L1();
        if (l.lastReleaseNotesSeen === {
                ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://docs.claude.com/s/claude-code",
                VERSION: "2.0.57",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
            }.VERSION) return;
        if (d0({
                ...l,
                lastReleaseNotesSeen: {
                    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
                    PACKAGE_URL: "@anthropic-ai/claude-code",
                    README_URL: "https://docs.claude.com/s/claude-code",
                    VERSION: "2.0.57",
                    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues"
                }.VERSION
            }), Y) kjB()
    }, [F, Y]), qjA.useEffect(() => {
        if (W && !Y) EI1()
    }, [W, Y]);
    let {
        version: H,
        cwd: C,
        modelDisplayName: E,
        billingType: z
    } = KI1(), w = B7(E, k69 - 20);
    if (!D && !Y && !V0(process.env.CLAUDE_CODE_FORCE_FULL_LOGO)) return NQ.createElement(NQ.Fragment, null, NQ.createElement(j, null), NQ.createElement(T69, null), tBA() && NQ.createElement(j, {
        paddingLeft: 2,
        flexDirection: "column"
    }, NQ.createElement($, {
        color: "warning"
    }, "Debug mode enabled"), NQ.createElement($, {
        dimColor: !0
    }, "Logging to: ", Sj() ? "stderr" : WVA())), NQ.createElement(bW0, null), K && NQ.createElement(j, {
        paddingLeft: 2,
        flexDirection: "column"
    }, NQ.createElement($, null, K)), !1, !1);
    let N = Q69(I),
        q = L1().theme,
        R = ` ${tQ("claude",q)("Claude Code")} ${tQ("inactive",q)(`v${H}`)} `,
        P = tQ("claude", q)(" Claude Code ");
    if (N === "compact") {
        let k = VI1(G);
        if (k.length > I - 4) k = VI1(null);
        let d = EjA(C, I - 4);
        return NQ.createElement(NQ.Fragment, null, NQ.createElement(j, {
            flexDirection: "column",
            borderStyle: "round",
            borderColor: "claude",
            borderText: {
                content: P,
                position: "top",
                align: "start",
                offset: 1
            },
            paddingX: 1,
            paddingY: 1,
            alignItems: "center",
            width: I
        }, NQ.createElement($, {
            bold: !0
        }, k), NQ.createElement(j, {
            marginY: 1
        }, NQ.createElement(j, {
            height: 5,
            flexDirection: "column",
            justifyContent: "flex-end"
        }, NQ.createElement(j, {
            marginBottom: Q
        }, NQ.createElement(xW0, null)))), NQ.createElement($, {
            dimColor: !0
        }, w), NQ.createElement($, {
            dimColor: !0
        }, z), NQ.createElement($, {
            dimColor: !0
        }, d)), J && NQ.createElement(j, {
            marginTop: 1,
            flexDirection: "column"
        }, NQ.createElement($, {
            color: "warning"
        }, "Your bash commands will be sandboxed. Disable with /sandbox.")))
    }
    let y = VI1(G),
        v = `${w} · ${z}`,
        x = EjA(C, k69),
        p = G69(y, x, v),
        {
            leftWidth: u,
            rightWidth: o
        } = B69(I, N, p);
    return NQ.createElement(NQ.Fragment, null, NQ.createElement(j, null), NQ.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "claude",
        borderText: {
            content: R,
            position: "top",
            align: "start",
            offset: 3
        }
    }, NQ.createElement(j, {
        flexDirection: N === "horizontal" ? "row" : "column",
        paddingX: 1,
        gap: 1
    }, NQ.createElement(j, {
        flexDirection: "column",
        width: u,
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 9
    }, NQ.createElement(j, {
        marginTop: 1
    }, NQ.createElement($, {
        bold: !0
    }, y)), NQ.createElement(j, {
        height: 5,
        flexDirection: "column",
        justifyContent: "flex-end"
    }, NQ.createElement(j, {
        marginBottom: Q
    }, NQ.createElement(xW0, null))), NQ.createElement(j, {
        flexDirection: "column",
        alignItems: "center"
    }, NQ.createElement($, {
        dimColor: !0
    }, v), NQ.createElement($, {
        dimColor: !0
    }, x))), N === "horizontal" && NQ.createElement(J3, {
        orientation: "vertical",
        dividerColor: "claude"
    }), N === "horizontal" && NQ.createElement(K69, {
        feeds: Y ? [C69(Od1()), HI1(B)] : W ? [HI1(B), E69()] : [HI1(B), H69(Z)],
        maxWidth: o
    }))), tBA() && NQ.createElement(j, {
        paddingLeft: 2,
        flexDirection: "column"
    }, NQ.createElement($, {
        color: "warning"
    }, "Debug mode enabled"), NQ.createElement($, {
        dimColor: !0
    }, "Logging to: ", Sj() ? "stderr" : WVA())), NQ.createElement(bW0, null), K && NQ.createElement(j, {
        paddingLeft: 2,
        flexDirection: "column"
    }, NQ.createElement($, null, K)), J && NQ.createElement(j, {
        paddingLeft: 2,
        flexDirection: "column"
    }, NQ.createElement($, {
        color: "warning"
    }, "Your bash commands will be sandboxed. Disable with /sandbox.")), !1, !1)
}
var NQ, qjA, k69 = 50;
var x69 = L(() => {
    hA();
    m8();
    o89();
    DI1();
    M9();
    W69();
    D69();
    z69();
    eV();
    jQ();
    gPA();
    D0();
    r$A();
    P69();
    gXA();
    nRA();
    hQ();
    Qe();
    S69();
    MJ();
    vW0();
    NQ = GA(VA(), 1), qjA = GA(VA(), 1)
});

function $T3(A, Q, B, G, Z, I, Y) {
    if (I === "transcript") return !0;
    switch (A.type) {
        case "attachment":
        case "user":
        case "assistant": {
            let J = MjA(A);
            if (!J) return !0;
            if (Q.has(J)) return !1;
            if (G.has(J)) return !1;
            if (g69(J, "PostToolUse", Y)) return !1;
            return l89(Z, B)
        }
        case "system":
            return A.subtype !== "api_error";
        case "grouped_tool_use":
            return A.messages.every((W) => {
                let X = W.message.content[0];
                return X?.type === "tool_use" && B.has(X.id)
            })
    }
}
var t8, Tg, NjA = 10,
    UT3 = ({
        messages: A,
        normalizedMessageHistory: Q,
        tools: B,
        verbose: G,
        toolJSX: Z,
        toolUseConfirmQueue: I,
        inProgressToolUseIDs: Y,
        isMessageSelectorVisible: J,
        conversationId: W,
        screen: X,
        screenToggleId: F,
        streamingToolUses: V,
        showAllInTranscript: K = !1,
        agentDefinitions: D,
        onOpenRateLimitOptions: H
    }) => {
        let {
            columns: C
        } = YB(), E = Tg.useContext(ec), z = Tg.useMemo(() => [...Q, ...lJ(A).filter(LjA)], [A, Q]), w = Tg.useMemo(() => new Set(Object.keys($I1(z))), [z]), N = Tg.useMemo(() => u69(z), [z]), q = Tg.useMemo(() => V.filter((p) => {
            if (Y.has(p.contentBlock.id)) return !1;
            if (z.some((u) => u.type === "assistant" && u.message.content[0].type === "tool_use" && u.message.content[0].id === p.contentBlock.id)) return !1;
            return !0
        }), [V, Y, z]), R = Tg.useMemo(() => q.flatMap((p) => lJ([xD({
            content: [p.contentBlock]
        })])), [q]), P = Tg.useMemo(() => {
            let p = X === "transcript",
                u = p && !K,
                o = G ? z : gk(z),
                l = v69(o.filter((IA) => IA.type !== "progress").filter((IA) => m69(IA, p)), R),
                k = u ? l.slice(-NjA) : l,
                d = u && l.length > NjA;
            return [{
                type: "static",
                jsx: t8.createElement(j, {
                    flexDirection: "column",
                    gap: 1,
                    key: `logo-${W}-${F}`
                }, t8.createElement(y69, {
                    isBeforeFirstMessage: !1
                }), t8.createElement(d89, {
                    agentDefinitions: D
                }))
            }, ...d ? [{
                type: "static",
                jsx: t8.createElement(J3, {
                    key: `truncation-indicator-${W}-${F}`,
                    dividerChar: "─",
                    title: `Ctrl+E to show ${oA.bold(z.length-NjA)} previous messages`,
                    width: C
                })
            }] : [], ...p && K && z.length > NjA ? [{
                type: "static",
                jsx: t8.createElement(J3, {
                    key: `hide-indicator-${W}-${F}`,
                    dividerChar: "─",
                    title: `Ctrl+E to hide ${oA.bold(z.length-NjA)} previous messages`,
                    width: C
                })
            }] : [], ...(() => {
                let {
                    messages: IA
                } = g89(k, B, G), HA = b69(z, k), wA = new Set(V.map((SA) => SA.contentBlock.id)), KA = (!Z || !!Z.shouldContinueAnimation) && !I.length && !J;
                return IA.map((SA) => {
                    let sA = SA.type === "grouped_tool_use",
                        NA = sA ? SA.displayMessage : SA,
                        qA = sA ? [] : h69(SA, HA),
                        DA = sA ? new Set : f69(SA, HA),
                        yA = $T3(SA, wA, w, Y, DA, X, HA) ? "static" : "transient",
                        rA = !1;
                    if (KA)
                        if (sA) rA = SA.messages.some((K1) => {
                            let WA = K1.message.content[0];
                            return WA?.type === "tool_use" && Y.has(WA.id)
                        });
                        else {
                            let K1 = MjA(SA);
                            rA = !K1 || Y.has(K1)
                        } return {
                        type: yA,
                        jsx: t8.createElement(j, {
                            key: `${SA.uuid}-${W}-${F}`,
                            width: C,
                            flexDirection: "row",
                            flexWrap: "nowrap",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            gap: 1
                        }, t8.createElement(Mg, {
                            message: SA,
                            messages: z,
                            addMargin: !0,
                            tools: B,
                            verbose: G,
                            erroredToolUseIDs: N,
                            inProgressToolUseIDs: Y,
                            progressMessagesForMessage: qA,
                            shouldAnimate: rA,
                            shouldShowDot: !0,
                            resolvedToolUseIDs: w,
                            isTranscriptMode: p,
                            isStatic: yA === "static",
                            onOpenRateLimitOptions: H
                        }), t8.createElement(i89, {
                            message: NA,
                            isTranscriptMode: p
                        }), t8.createElement(a89, {
                            message: NA,
                            isTranscriptMode: p
                        }))
                    }
                })
            })()]
        }, [X, K, G, z, R, W, F, D, C, V, w, B, N, Y, Z, I.length, J, H]), y = Y.size > 0;
        if (E) return t8.createElement(t8.Fragment, null, P.map((p) => p.jsx), y ? t8.createElement(KjA, {
            state: "indeterminate"
        }) : t8.createElement(KjA, {
            state: "completed"
        }));
        let v = P.filter((p) => p.type === "static"),
            x = P.filter((p) => p.type === "transient");
        return t8.createElement(t8.Fragment, null, t8.createElement(Ap, {
            key: `static-messages-${W}-${F}`,
            items: v
        }, (p) => p.jsx), x.map((p) => p.jsx), y ? t8.createElement(KjA, {
            state: "indeterminate"
        }) : t8.createElement(KjA, {
            state: "completed"
        }))
    },
    uXA;
var UI1 = L(() => {
    hA();
    hA();
    h89();
    rUA();
    nQ();
    c89();
    QjA();
    m8();
    eV();
    J9();
    n89();
    s89();
    x69();
    t8 = GA(VA(), 1), Tg = GA(VA(), 1), uXA = t8.memo(UT3, (A, Q) => {
        let B = Object.keys(A);
        for (let G of B) {
            if (G === "onOpenRateLimitOptions") continue;
            if (A[G] !== Q[G]) {
                if (G === "streamingToolUses") {
                    let Z = A.streamingToolUses,
                        I = Q.streamingToolUses;
                    if (Z.length === I.length && Z.every((Y, J) => Y.contentBlock === I[J]?.contentBlock)) continue
                }
                return !1
            }
        }
        return !0
    })
});

function c69(A, Q, B, G, Z) {
    let I = d69.useContext(ec);
    h1(async (Y, J) => {
        if (J.ctrl && Y === "o") {
            if (Q((W) => W === "transcript" ? "prompt" : "transcript"), B((W) => W + 1), G(!1), !I) await Z()
        }
        if (J.ctrl && Y === "e" && A === "transcript") {
            if (G((W) => !W), B((W) => W + 1), !I) await Z()
        }
        if (J.ctrl && Y === "c" && A === "transcript" || J.escape && A === "transcript") {
            if (Q("prompt"), B((W) => W + 1), G(!1), !I) await Z()
        }
    })
}
var d69;
var p69 = L(() => {
    hA();
    rUA();
    d69 = GA(VA(), 1)
});

function l69(A, Q) {
    let B = OjA.useRef(!1),
        G = OjA.useRef(null);
    OjA.useEffect(() => {
        let Z = cU(A);
        if (G.current !== Z) B.current = !1, G.current = Z || null, Q({
            lineCount: 0,
            lineStart: void 0,
            text: void 0,
            filePath: void 0
        });
        if (B.current || !Z) return;
        let I = (Y) => {
            if (Y.selection?.start && Y.selection?.end) {
                let {
                    start: J,
                    end: W
                } = Y.selection, X = W.line - J.line + 1;
                if (W.character === 0) X--;
                let F = {
                    lineCount: X,
                    lineStart: J.line,
                    text: Y.text,
                    filePath: Y.filePath
                };
                Q(F)
            }
        };
        Z.client.setNotificationHandler(wT3, (Y) => {
            if (G.current !== Z) return;
            try {
                let J = Y.params;
                if (J.selection && J.selection.start && J.selection.end) I(J);
                else if (J.text !== void 0) I({
                    selection: null,
                    text: J.text,
                    filePath: J.filePath
                })
            } catch (J) {
                e(J)
            }
        }), B.current = !0
    }, [A, Q])
}
var OjA, wT3;
var i69 = L(() => {
    h2();
    yJ();
    u1();
    OjA = GA(VA(), 1), wT3 = _.object({
        method: _.literal("selection_changed"),
        params: _.object({
            selection: _.object({
                start: _.object({
                    line: _.number(),
                    character: _.number()
                }),
                end: _.object({
                    line: _.number(),
                    character: _.number()
                })
            }).nullable().optional(),
            text: _.string().optional(),
            filePath: _.string().optional()
        })
    })
});

function qT3() {
    return ZI("cache_warming", "config", {
        enabled: !1,
        idleThresholdMs: 240000,
        subsequentWarmupIntervalMs: 300000,
        maxRequests: 1
    })
}

function n69(A, Q) {
    let B = wI1.useRef(null);
    wI1.useEffect(() => {
        let G = qT3();
        if (!G.enabled) return;
        if (A || Q === 0) {
            if (B.current) B.current.abort(), B.current = null;
            return
        }
        let Z = 0,
            I = null,
            Y = async () => {
                let W = GkA();
                if (!W) {
                    g("Cache warming: No previous API request to replay");
                    return
                }
                if (B.current) B.current.abort();
                B.current = s9();
                try {
                    g(`Cache warming: Sending request ${Z+1}/${G.maxRequests}`);
                    let X = {
                            ...W,
                            messages: [...W.messages, {
                                role: "user",
                                content: 'Reply with just "OK"'
                            }],
                            max_tokens: 10
                        },
                        V = (await Vq({
                            maxRetries: 0,
                            model: W.model
                        })).beta.messages.stream(X, {
                            signal: B.current.signal
                        });
                    for await (let H of V) if (B.current?.signal.aborted) break;
                    let D = (await V.finalMessage()).usage;
                    if (g("Cache warming: Request completed"), BA("tengu_cache_warming_request", {
                            warmup_number: Z + 1,
                            cache_read_tokens: D.cache_read_input_tokens ?? 0,
                            cache_creation_tokens: D.cache_creation_input_tokens ?? 0,
                            input_tokens: D.input_tokens,
                            output_tokens: D.output_tokens
                        }), Z++, Z < G.maxRequests) J(G.subsequentWarmupIntervalMs)
                } catch (X) {
                    if (X instanceof Error) e(X)
                } finally {
                    B.current = null
                }
            }, J = (W) => {
                I = setTimeout(() => {
                    Y()
                }, W)
            };
        return J(G.idleThresholdMs), () => {
            if (I) clearTimeout(I);
            if (B.current) B.current.abort(), B.current = null
        }
    }, [A, Q])
}
var wI1;
var a69 = L(() => {
    EIA();
    S0();
    D0();
    UZ();
    O9();
    w0();
    u1();
    wI1 = GA(VA(), 1)
});

function r69({
    autoConnectIdeFlag: A,
    ideToInstallExtension: Q,
    setDynamicMcpConfig: B,
    setShowIdeOnboarding: G,
    setIDEInstallationState: Z
}) {
    s69.useEffect(() => {
        function I(Y) {
            if (!Y) return;
            if (!((L1().autoConnectIde || A || _F() || Q || V0(process.env.CLAUDE_CODE_AUTO_CONNECT_IDE)) && !Nj(process.env.CLAUDE_CODE_AUTO_CONNECT_IDE))) return;
            B((X) => {
                if (X?.ide) return X;
                return {
                    ...X,
                    ide: {
                        type: Y.url.startsWith("ws:") ? "ws-ide" : "sse-ide",
                        url: Y.url,
                        ideName: Y.name,
                        authToken: Y.authToken,
                        ideRunningInWindows: Y.ideRunningInWindows,
                        scope: "dynamic"
                    }
                }
            })
        }
        $62(I, Q, () => G(!0), (Y) => Z(Y))
    }, [A, Q, B, G, Z])
}
var s69;
var o69 = L(() => {
    jQ();
    yJ();
    hQ();
    s69 = GA(VA(), 1)
});
var RjA = L(() => {
    I6();
    R2();
    o0();
    ED();
    D0();
    jQ()
});
var fW0;
var t69 = L(() => {
    hA();
    T5();
    RjA();
    zI();
    m_();
    I6();
    w0();
    Di();
    fW0 = GA(VA(), 1)
});
var DkZ;
var e69 = L(() => {
    t69();
    _J();
    DkZ = GA(VA(), 1)
});

function MT3() {
    return Zt(LT3) ?? "Goodbye!"
}
var NT3, LT3, OT3, qI1;
var hW0 = L(() => {
    oiA();
    _J();
    RjA();
    e69();
    NT3 = GA(VA(), 1), LT3 = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"];
    OT3 = {
        type: "local-jsx",
        name: "exit",
        aliases: ["quit"],
        description: "Exit the REPL",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A) {
            return A(MT3()), await S6(0, "prompt_input_exit"), null
        },
        userFacingName() {
            return "exit"
        }
    }, qI1 = OT3
});

function A59() {
    let [A, Q] = iP.useState(_H.getInstance().getStatus());
    if (iP.useEffect(() => {
            return _H.getInstance().subscribe(Q)
        }, []), !A.isAuthenticating && !A.error && A.output.length === 0) return null;
    if (!A.isAuthenticating && !A.error) return null;
    return iP.default.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        borderColor: "permission",
        paddingX: 1,
        marginY: 1
    }, iP.default.createElement($, {
        bold: !0,
        color: "permission"
    }, "AWS Authentication"), A.output.length > 0 && iP.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, A.output.slice(-5).map((B, G) => iP.default.createElement($, {
        key: G,
        dimColor: !0
    }, B))), A.error && iP.default.createElement(j, {
        marginTop: 1
    }, iP.default.createElement($, {
        color: "error"
    }, A.error)))
}
var iP;
var Q59 = L(() => {
    hA();
    iP = GA(VA(), 1)
});
import {
    randomUUID as B59
} from "crypto";

function G59(A, Q, B) {
    let G = mXA(A)?.message?.id || "unknown",
        [Z, I] = NC.useState("closed"),
        [Y, J] = _Q(),
        W = h81("tengu_feedback_survey_config", RT3),
        X = NC.useRef(B59()),
        F = NC.useRef(Date.now()),
        V = NC.useRef(B),
        K = NC.useCallback((N, q) => {
            J((R) => ({
                ...R,
                feedbackSurvey: {
                    timeLastShown: N,
                    submitCountAtLastAppearance: q
                }
            }))
        }, [J]),
        D = NC.useCallback(() => {
            if (Z !== "closed") return;
            I("open"), K(Date.now(), B), X.current = B59(), BA("tengu_feedback_survey_event", {
                event_type: "appeared",
                appearance_id: X.current,
                last_assistant_message_id: G
            })
        }, [Z, G, B, K]),
        H = NC.useCallback(() => {
            I("thanks"), setTimeout(() => I("closed"), W.hideThanksAfterMs)
        }, [W.hideThanksAfterMs]),
        C = S3(),
        E = NC.useMemo(() => {
            if (W.onForModels.length === 0) return !1;
            if (W.onForModels.includes("*")) return !0;
            return W.onForModels.includes(C)
        }, [W.onForModels, C]),
        z = NC.useMemo(() => {
            if (Z !== "closed") return !1;
            if (Q) return !1;
            if (process.env.CLAUDE_FORCE_DISPLAY_SURVEY && !Y.feedbackSurvey.timeLastShown) return !0;
            if (!E) return !1;
            if (V0(process.env.CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY)) return !1;
            if (hX()) return !1;
            if (Y.feedbackSurvey.timeLastShown) {
                if (Y.feedbackSurvey.submitCountAtLastAppearance !== null && B < Y.feedbackSurvey.submitCountAtLastAppearance + W.minUserTurnsBetweenFeedback) return !1
            } else {
                if (Date.now() - F.current < W.minTimeBeforeFeedbackMs) return !1;
                if (B < V.current + W.minUserTurnsBeforeFeedback) return !1
            }
            if (Math.random() > W.probability) return !1;
            let N = L1().feedbackSurveyState;
            if (N?.lastShownTime) {
                if (Date.now() - N.lastShownTime < W.minTimeBetweenGlobalFeedbackMs) return !1
            }
            return !0
        }, [Z, Q, E, Y.feedbackSurvey.timeLastShown, Y.feedbackSurvey.submitCountAtLastAppearance, B, W.minTimeBetweenGlobalFeedbackMs, W.minUserTurnsBetweenFeedback, W.minTimeBeforeFeedbackMs, W.minUserTurnsBeforeFeedback, W.probability]);
    NC.useEffect(() => {
        if (z) D()
    }, [z, D]);
    let w = NC.useCallback((N) => {
        if (K(Date.now(), B), N === "dismissed") I("closed");
        else H();
        BA("tengu_feedback_survey_event", {
            event_type: "responded",
            appearance_id: X.current,
            response: N,
            last_assistant_message_id: G
        })
    }, [G, H, K, B]);
    return {
        state: Z,
        handleSelect: w
    }
}
var NC, RT3;
var Z59 = L(() => {
    O9();
    w0();
    St();
    jQ();
    s2();
    hQ();
    H9();
    nQ();
    NC = GA(VA(), 1), RT3 = {
        minTimeBeforeFeedbackMs: 600000,
        minTimeBetweenGlobalFeedbackMs: 1e8,
        minUserTurnsBeforeFeedback: 5,
        minUserTurnsBetweenFeedback: 10,
        hideThanksAfterMs: 3000,
        onForModels: ["*"],
        probability: 0.005
    }
});

function I59({
    onSelect: A,
    inputValue: Q,
    setInputValue: B
}) {
    let G = zK.useRef(Q);
    return zK.useEffect(() => {
        if (Q !== G.current) {
            let Z = Q.slice(-1);
            if (gW0(Z)) B(Q.slice(0, -1)), A(PT3[Z])
        }
    }, [Q, A, B]), zK.default.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, zK.default.createElement(j, null, zK.default.createElement($, null, oA.cyan("● ")), zK.default.createElement($, {
        bold: !0
    }, "How is Claude doing this session? (optional)")), zK.default.createElement(j, {
        marginLeft: 2
    }, zK.default.createElement(j, {
        width: 10
    }, zK.default.createElement($, null, oA.cyan("1"), ": Bad")), zK.default.createElement(j, {
        width: 10
    }, zK.default.createElement($, null, oA.cyan("2"), ": Fine")), zK.default.createElement(j, {
        width: 10
    }, zK.default.createElement($, null, oA.cyan("3"), ": Good")), zK.default.createElement(j, null, zK.default.createElement($, null, oA.cyan("0"), ": Dismiss"))))
}
var zK, TT3, PT3, gW0 = (A) => TT3.includes(A);
var Y59 = L(() => {
    J9();
    hA();
    zK = GA(VA(), 1), TT3 = ["0", "1", "2", "3"], PT3 = {
        "0": "dismissed",
        "1": "bad",
        "2": "fine",
        "3": "good"
    }
});

function J59({
    state: A,
    handleSelect: Q,
    inputValue: B,
    setInputValue: G
}) {
    if (A === "closed") return null;
    if (A === "thanks") return TjA.default.createElement(j, {
        marginTop: 1,
        flexDirection: "column"
    }, TjA.default.createElement($, {
        color: "success"
    }, "✓ Thanks for helping make Claude better!"), TjA.default.createElement($, {
        dimColor: !0
    }, "Use /feedback to share detailed feedback or file a bug."));
    if (B && !gW0(B)) return null;
    return TjA.default.createElement(I59, {
        onSelect: Q,
        inputValue: B,
        setInputValue: G
    })
}
var TjA;
var W59 = L(() => {
    hA();
    Y59();
    TjA = GA(VA(), 1)
});

function F59() {
    let {
        addNotification: A
    } = _Z();
    X59.useEffect(() => {
        yy().then((Q) => {
            Q.forEach((B, G) => {
                let Z = "low";
                if (B.type === "error" || B.userActionRequired) Z = "high";
                else if (B.type === "path" || B.type === "alias") Z = "medium";
                A({
                    key: `install-message-${G}-${B.type}`,
                    text: B.message,
                    priority: Z,
                    color: B.type === "error" ? "error" : "warning"
                })
            })
        })
    }, [A])
}
var X59;
var V59 = L(() => {
    UU();
    xP();
    X59 = GA(VA(), 1)
});

function K59() {
    return L1().tipsHistory || {}
}

function jT3(A) {
    let Q = L1();
    d0({
        ...Q,
        tipsHistory: A
    })
}

function D59(A) {
    let Q = K59(),
        B = L1().numStartups;
    Q[A] = B, jT3(Q)
}

function ST3(A) {
    return K59()[A] || 0
}

function NI1(A) {
    let Q = ST3(A);
    if (Q === 0) return 1 / 0;
    return L1().numStartups - Q
}
var uW0 = L(() => {
    jQ()
});
import {
    dirname as kT3,
    join as Bx
} from "path";

function MI1() {
    return Bx(PQ(), "plugins", yT3)
}

function dW0() {
    return Bx(PQ(), "plugins", xT3)
}

function PjA() {
    let A = OA(),
        Q = MI1();
    if (!A.existsSync(Q)) return null;
    let B = A.readFileSync(Q, {
            encoding: "utf-8"
        }),
        G = JSON.parse(B);
    return {
        version: typeof G?.version === "number" ? G.version : 1,
        data: G
    }
}

function vT3() {
    let A = OA(),
        Q = dW0();
    if (!A.existsSync(Q)) return null;
    let B = A.readFileSync(Q, {
            encoding: "utf-8"
        }),
        G = JSON.parse(B);
    return {
        version: typeof G?.version === "number" ? G.version : 2,
        data: G
    }
}

function bT3(A) {
    let Q = {};
    for (let [B, G] of Object.entries(A.plugins)) {
        let Z = G[0];
        if (Z) Q[B] = {
            version: Z.version || "unknown",
            installedAt: Z.installedAt || new Date().toISOString(),
            lastUpdated: Z.lastUpdated,
            installPath: Z.installPath,
            gitCommitSha: Z.gitCommitSha,
            isLocal: Z.isLocal
        }
    }
    return Q
}

function dXA() {
    if (Pg !== null) return Pg.plugins;
    let A = MI1();
    try {
        let Q = PjA();