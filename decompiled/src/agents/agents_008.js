/**
 * Claude Code Decompiled
 * Category: agents
 * File: 8/13
 * Lines: 424724 - 426222 (1499 lines)
 * Original file: cli.js
 */

    if (TQ.useEffect(() => {
            async function F() {
                let [V, K] = await Promise.all([qYA(), Ni()]);
                Y(K);
                let D = YV9(V, K, A);
                if (Z(D), !D) {
                    B("skip_rendering");
                    return
                }
                n00(), BA("tengu_grove_policy_viewed", {
                    location: Q,
                    dismissable: K?.notice_is_grace_period
                })
            }
            F()
        }, [A, Q, B]), G === null) return null;
    if (!G) return null;
    async function W(F) {
        switch (F) {
            case "accept_opt_in": {
                await C91(!0), BA("tengu_grove_policy_submitted", {
                    state: !0,
                    dismissable: I?.notice_is_grace_period
                });
                break
            }
            case "accept_opt_out": {
                await C91(!1), BA("tengu_grove_policy_submitted", {
                    state: !1,
                    dismissable: I?.notice_is_grace_period
                });
                break
            }
            case "defer":
                BA("tengu_grove_policy_dismissed", {
                    state: !0
                });
                break;
            case "escape":
                BA("tengu_grove_policy_escaped", {});
                break
        }
        B(F)
    }
    let X = I?.domain_excluded ? [{
        label: "Accept terms • Help improve Claude: OFF (for emails with your domain)",
        value: "accept_opt_out"
    }] : [{
        label: "Accept terms • Help improve Claude: ON",
        value: "accept_opt_in"
    }, {
        label: "Accept terms • Help improve Claude: OFF",
        value: "accept_opt_out"
    }];
    return TQ.default.createElement(TQ.default.Fragment, null, TQ.default.createElement(j, {
        flexDirection: "column",
        width: 100,
        gap: 1,
        paddingTop: 1,
        paddingLeft: 1,
        paddingRight: 1,
        borderStyle: "round",
        borderColor: "professionalBlue"
    }, TQ.default.createElement(j, {
        flexDirection: "row"
    }, TQ.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        flexGrow: 1
    }, I?.notice_is_grace_period ? TQ.default.createElement(O_3, null) : TQ.default.createElement(R_3, null)), TQ.default.createElement(j, {
        flexShrink: 0
    }, TQ.default.createElement($, {
        color: "professionalBlue"
    }, M_3))), TQ.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "professionalBlue"
    }, TQ.default.createElement(j, {
        flexDirection: "column"
    }, TQ.default.createElement($, {
        bold: !0
    }, "Please select how you'd like to continue"), TQ.default.createElement($, null, "Your choice takes effect immediately upon confirmation.")), TQ.default.createElement(M0, {
        options: [...X, ...I?.notice_is_grace_period ? [{
            label: "Not now",
            value: "defer"
        }] : []],
        onChange: (F) => W(F),
        onCancel: () => {
            if (I?.notice_is_grace_period) {
                W("defer");
                return
            }
            W("escape")
        }
    }))), TQ.default.createElement(j, {
        marginLeft: 1
    }, TQ.default.createElement($, {
        dimColor: !0
    }, J.pending ? TQ.default.createElement(TQ.default.Fragment, null, "Press ", J.keyName, " again to exit") : TQ.default.createElement(TQ.default.Fragment, null, "Enter to confirm · Esc to exit"))))
}

function JV9({
    settings: A,
    domainExcluded: Q,
    onDone: B
}) {
    let G = DQ(),
        [Z, I] = TQ.useState(A.grove_enabled);
    TQ.default.useEffect(() => {
        BA("tengu_grove_privacy_settings_viewed", {})
    }, []), h1(async (J, W) => {
        if (W.escape) B();
        if (!Q && (W.tab || W.return || J === " ")) {
            let X = !Z;
            I(X), await C91(X)
        }
    });
    let Y = TQ.default.createElement($, {
        color: "error"
    }, "false");
    if (Q) Y = TQ.default.createElement($, {
        color: "error"
    }, "false (for emails with your domain)");
    else if (Z) Y = TQ.default.createElement($, {
        color: "success"
    }, "true");
    return TQ.default.createElement(TQ.default.Fragment, null, TQ.default.createElement(j, {
        flexDirection: "column",
        gap: 1,
        padding: 1,
        borderStyle: "round",
        borderColor: "professionalBlue"
    }, TQ.default.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, TQ.default.createElement($, {
        bold: !0,
        color: "professionalBlue"
    }, "Data Privacy"), TQ.default.createElement($, null, "Review and manage your privacy settings at", " ", TQ.default.createElement(a4, {
        url: "https://claude.ai/settings/data-privacy-controls"
    })), TQ.default.createElement(j, null, TQ.default.createElement(j, {
        width: 44
    }, TQ.default.createElement($, {
        bold: !0
    }, "Help improve Claude")), TQ.default.createElement(j, null, Y)))), TQ.default.createElement(j, {
        marginLeft: 1
    }, Q ? TQ.default.createElement($, {
        dimColor: !0
    }, G.pending ? TQ.default.createElement(TQ.default.Fragment, null, "Press ", G.keyName, " again to exit") : TQ.default.createElement(TQ.default.Fragment, null, "Esc to exit")) : TQ.default.createElement($, {
        dimColor: !0
    }, G.pending ? TQ.default.createElement(TQ.default.Fragment, null, "Press ", G.keyName, " again to exit") : TQ.default.createElement(TQ.default.Fragment, null, "Enter/Tab/Space to toggle · Esc to exit"))))
}
async function WV9() {
    let [A, Q] = await Promise.all([qYA(), Ni()]);
    if (YV9(A, Q, !1))
        if (BA("tengu_grove_print_viewed", {
                dismissable: Q?.notice_is_grace_period
            }), Q === null || Q.notice_is_grace_period) qj(`
An update to our Consumer Terms and Privacy Policy will take effect on October 8, 2025. Run \`claude\` to review the updated terms.

`), await n00();
        else qj(`
[ACTION REQUIRED] An update to our Consumer Terms and Privacy Policy has taken effect on October 8, 2025. You must run \`claude\` to review the updated terms.

`), await S6(1)
}
var TQ, M_3 = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
var jY1 = L(() => {
    hA();
    T6();
    w0();
    c9();
    LYA();
    _J();
    hA();
    TQ = GA(VA(), 1)
});
var ojA, XV9 = "Review and manage your privacy settings at https://claude.ai/settings/data-privacy-controls",
    T_3, FV9;
var VV9 = L(() => {
    jY1();
    LYA();
    w0();
    hB();
    ojA = GA(VA(), 1), T_3 = {
        type: "local-jsx",
        name: "privacy-settings",
        description: "View and update your privacy settings",
        isEnabled: () => {
            return UlA()
        },
        isHidden: !1,
        async call(A) {
            if (!await NYA()) return A(XV9), null;
            let [B, G] = await Promise.all([qYA(), Ni()]);
            if (B === null) return A(XV9), null;
            async function Z(Y) {
                if (Y === "escape" || Y === "defer") {
                    A("Privacy settings dialog dismissed", {
                        display: "system"
                    });
                    return
                }
                await I()
            }
            async function I() {
                let Y = await qYA();
                if (Y === null) {
                    A("Unable to retrieve updated privacy settings", {
                        display: "system"
                    });
                    return
                }
                let J = Y.grove_enabled ? "true" : "false";
                if (A(`"Help improve Claude" set to ${J}.`), B !== null && B.grove_enabled !== null && B.grove_enabled !== Y.grove_enabled) BA("tengu_grove_policy_toggled", {
                    state: Y.grove_enabled,
                    location: "settings"
                })
            }
            if (B.grove_enabled !== null) return ojA.createElement(JV9, {
                settings: B,
                domainExcluded: G?.domain_excluded,
                onDone: I
            });
            return ojA.createElement(PY1, {
                showIfAlreadyViewed: !0,
                onDone: Z,
                location: "settings"
            })
        },
        userFacingName() {
            return "privacy-settings"
        }
    }, FV9 = T_3
});

function KV9({
    event: A,
    eventSummary: Q,
    config: B,
    matcher: G,
    onSuccess: Z,
    onCancel: I
}) {
    let [Y, J] = eF0.useState(!1), [W, X] = eF0.useState(null), F = tIA.map(d10), V = async (K) => {
        J(!0), X(null);
        try {
            await kG2(A, B, G, K), Z()
        } catch (D) {
            X(D instanceof Error ? D.message : "Failed to add hook"), J(!1)
        }
    };
    if (Y) return f3.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, f3.createElement(j, {
        flexDirection: "row",
        gap: 1
    }, f3.createElement(e9, null), f3.createElement($, null, "Adding hook configuration...")));
    if (W) return f3.createElement(j, {
        flexDirection: "column",
        gap: 1,
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "error"
    }, f3.createElement($, {
        bold: !0,
        color: "error"
    }, "Failed to add hook"), f3.createElement($, null, W), f3.createElement(M0, {
        options: [{
            label: "OK",
            value: "ok"
        }],
        onChange: I,
        onCancel: I
    }));
    return f3.createElement(j, {
        flexDirection: "column",
        gap: 1,
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "success"
    }, f3.createElement($, {
        bold: !0,
        color: "success"
    }, "Save hook configuration"), f3.createElement(j, {
        flexDirection: "column",
        marginX: 2
    }, f3.createElement($, null, "Event: ", A, " - ", Q), f3.createElement($, null, "Matcher: ", G), f3.createElement($, null, B.type === "command" ? "Command" : "Prompt", ":", " ", gE(B))), f3.createElement($, null, "Where should this hook be saved?"), f3.createElement(M0, {
        options: F,
        onChange: (K) => V(K),
        onCancel: I,
        visibleOptionCount: 3
    }))
}
var f3, eF0;
var DV9 = L(() => {
    hA();
    kk();
    T5();
    zI();
    q21();
    f3 = GA(VA(), 1), eF0 = GA(VA(), 1)
});

function HV9({
    hookEventMetadata: A,
    exitStatePending: Q,
    exitStateKeyName: B,
    configDifference: G,
    restrictedByPolicy: Z,
    onSelectEvent: I
}) {
    return mB.createElement(mB.Fragment, null, mB.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "warning"
    }, mB.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, mB.createElement(j, null, mB.createElement($, {
        bold: !0,
        color: "warning"
    }, "Hook Configuration")), mB.createElement(j, {
        flexDirection: "column"
    }, mB.createElement(j, {
        marginY: 1
    }, mB.createElement($, null, oA.bold("Hooks"), " are shell commands you can register to run during Claude Code processing.", " ", mB.createElement(a4, {
        url: "https://docs.claude.com/en/docs/claude-code/hooks"
    }, "Docs"))), mB.createElement(j, {
        flexDirection: "column",
        paddingTop: 1
    }, mB.createElement($, null, "• Each hook event has its own input and output behavior"), mB.createElement($, null, "• Multiple hooks can be registered per event, executed in parallel"), mB.createElement($, null, "• Any changes to hooks outside of /hooks require a restart"), mB.createElement($, null, "• Timeout: 60 seconds"))), mB.createElement(j, {
        flexDirection: "column",
        marginY: 1
    }, mB.createElement($, null, V1.warning, " Hooks execute shell commands with your full user permissions. This can pose security risks, so only use hooks from trusted sources."), mB.createElement($, {
        dimColor: !0
    }, "Learn more:", " ", mB.createElement(a4, {
        url: "https://docs.claude.com/en/docs/claude-code/hooks"
    }, "https://docs.claude.com/en/docs/claude-code/hooks"))), Z && mB.createElement(j, {
        borderStyle: "round",
        borderColor: "suggestion",
        paddingX: 1,
        marginY: 1
    }, mB.createElement(j, {
        flexDirection: "column"
    }, mB.createElement($, {
        bold: !0,
        color: "suggestion"
    }, V1.info, " Hooks Restricted by Policy"), mB.createElement($, null, "Only hooks from managed settings can run. User-defined hooks from ~/.claude/settings.json, .claude/settings.json, and .claude/settings.local.json are blocked."))), G && mB.createElement(j, {
        borderStyle: "round",
        borderColor: "warning",
        paddingX: 1,
        marginY: 1
    }, mB.createElement(j, {
        flexDirection: "column"
    }, mB.createElement($, {
        bold: !0,
        color: "warning"
    }, V1.warning, " Settings Changed"), mB.createElement($, null, "Hook settings have been modified outside of this menu. Review the following changes carefully:"), mB.createElement($, {
        dimColor: !0
    }, G)))), mB.createElement(j, {
        flexDirection: "column"
    }, mB.createElement($, {
        bold: !0
    }, "Select hook event:"), mB.createElement(M0, {
        onChange: (Y) => {
            if (Y === "disable-all") I("disable-all");
            else I(Y)
        },
        onCancel: () => {},
        options: [...Object.entries(A).map(([Y, J]) => ({
            label: `${Y} - ${J.summary}`,
            value: Y
        })), {
            label: oA.red("Disable all hooks"),
            value: "disable-all"
        }]
    }))), mB.createElement(j, {
        marginLeft: 3
    }, Q ? mB.createElement($, {
        dimColor: !0
    }, "Press ", B, " again to exit") : mB.createElement($, {
        dimColor: !0
    }, "Enter to select · Esc to exit")))
}
var mB;
var CV9 = L(() => {
    hA();
    T5();
    J9();
    n2();
    hA();
    mB = GA(VA(), 1)
});

function EV9({
    selectedEvent: A,
    matchersForSelectedEvent: Q,
    hooksByEventAndMatcher: B,
    eventDescription: G,
    onSelect: Z,
    onCancel: I
}) {
    let Y = fG.useMemo(() => {
        return Q.map((J) => {
            let W = B[A]?.[J] || [],
                X = Array.from(new Set(W.map((F) => F.source)));
            return {
                matcher: J,
                sources: X,
                hookCount: W.length
            }
        })
    }, [Q, B, A]);
    return fG.createElement(fG.Fragment, null, fG.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "suggestion"
    }, fG.createElement($, {
        bold: !0,
        color: "suggestion"
    }, A, " - Tool Matchers"), G && fG.createElement(j, {
        marginTop: 1
    }, fG.createElement($, {
        dimColor: !0
    }, G)), fG.createElement(j, {
        marginY: 1
    }, fG.createElement(M0, {
        options: [{
            label: `+ Add new matcher${V1.ellipsis}`,
            value: "add-new"
        }, ...Y.map((J) => {
            return {
                label: `[${J.sources.map(vG2).join(", ")}] ${J.matcher}`,
                value: J.matcher,
                description: `${J.hookCount} hook${J.hookCount!==1?"s":""}`
            }
        })],
        onChange: (J) => {
            if (J === "add-new") Z(null);
            else Z(J)
        },
        onCancel: I
    }), Q.length === 0 && fG.createElement(j, {
        marginLeft: 2
    }, fG.createElement($, {
        dimColor: !0
    }, "No matchers configured yet")))), fG.createElement(j, {
        marginLeft: 3
    }, fG.createElement($, {
        dimColor: !0
    }, "Enter to select · Esc to go back")))
}
var fG;
var zV9 = L(() => {
    hA();
    n2();
    kk();
    T5();
    fG = GA(VA(), 1)
});

function UV9({
    selectedEvent: A,
    newMatcher: Q,
    onChangeNewMatcher: B,
    eventDescription: G,
    matcherMetadata: Z
}) {
    let [I, Y] = x6.useState(Q.length);
    return x6.createElement(x6.Fragment, null, x6.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "success",
        gap: 1
    }, x6.createElement($, {
        bold: !0,
        color: "success"
    }, "Add new matcher for ", A), G && x6.createElement(j, {
        marginBottom: 1
    }, x6.createElement($, {
        dimColor: !0
    }, G)), x6.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, x6.createElement($, null, "Possible matcher values for field ", Z.fieldToMatch, ":"), x6.createElement($, {
        dimColor: !0
    }, Z.values.join(", "))), x6.createElement(j, {
        flexDirection: "column"
    }, x6.createElement($, null, "Tool matcher:"), x6.createElement(j, {
        borderStyle: "round",
        borderDimColor: !0,
        paddingLeft: 1,
        paddingRight: 1
    }, x6.createElement(s4, {
        value: Q,
        onChange: B,
        columns: 78,
        showCursor: !0,
        cursorOffset: I,
        onChangeCursorOffset: Y
    }))), x6.createElement(j, {
        flexDirection: "column",
        gap: 1
    }, x6.createElement($, {
        dimColor: !0
    }, "Example Matchers:", `
`, "• Write (single tool)", `
`, "• Write|Edit (multiple tools)", `
`, "• Web.* (regex pattern)"))), x6.createElement(j, {
        marginLeft: 3
    }, x6.createElement($, {
        dimColor: !0
    }, "Enter to confirm · Esc to cancel")))
}
var x6;
var $V9 = L(() => {
    hA();
    QY();
    x6 = GA(VA(), 1)
});

function wV9({
    selectedEvent: A,
    selectedMatcher: Q,
    eventDescription: B,
    fullDescription: G,
    supportsMatcher: Z,
    command: I,
    onChangeCommand: Y
}) {
    let [J, W] = B9.useState(I.length), {
        columns: X
    } = YB(), F = I.trim().split(/\s+/)[0] || "", V = F && !F.startsWith("/") && !F.startsWith("~") && F.includes("/"), K = /\bsudo\b/.test(I);
    return B9.createElement(B9.Fragment, null, B9.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "success",
        gap: 1
    }, B9.createElement($, {
        bold: !0,
        color: "success"
    }, "Add new hook"), B9.createElement(j, {
        flexDirection: "column"
    }, B9.createElement($, null, V1.warning, " Hooks execute shell commands with your full user permissions. This can pose security risks, so only use hooks from trusted sources."), B9.createElement($, {
        dimColor: !0
    }, "Learn more:", " ", B9.createElement(a4, {
        url: "https://docs.claude.com/en/docs/claude-code/hooks"
    }, "https://docs.claude.com/en/docs/claude-code/hooks"))), B9.createElement($, null, "Event: ", B9.createElement($, {
        bold: !0
    }, A), " - ", B), G && B9.createElement(j, null, B9.createElement($, {
        dimColor: !0
    }, G)), Z && B9.createElement($, null, "Matcher: ", B9.createElement($, {
        bold: !0
    }, Q)), B9.createElement($, null, "Command:"), B9.createElement(j, {
        borderStyle: "round",
        borderDimColor: !0,
        paddingLeft: 1,
        paddingRight: 1
    }, B9.createElement(s4, {
        value: I,
        onChange: Y,
        columns: X - 8,
        showCursor: !0,
        cursorOffset: J,
        onChangeCursorOffset: W,
        multiline: !0
    })), (V || K) && B9.createElement(j, {
        flexDirection: "column",
        gap: 0
    }, V && B9.createElement($, {
        color: "warning"
    }, V1.warning, " Warning: Using a relative path for the executable may be insecure. Consider using an absolute path instead."), K && B9.createElement($, {
        color: "warning"
    }, V1.warning, " Warning: Using sudo in hooks can be dangerous and may expose your system to security risks.")), B9.createElement($, {
        dimColor: !0
    }, "Examples:", B9.createElement(gV, null), `• jq -r '.tool_input.file_path | select(endswith(".go"))' | xargs -r gofmt -w`, B9.createElement(gV, null), `• jq -r '"\\(.tool_input.command) - \\(.tool_input.description // "No description")"' >> ~/.claude/bash-command-log.txt`, B9.createElement(gV, null), "• /usr/local/bin/security_check.sh", B9.createElement(gV, null), "• python3 ~/hooks/validate_changes.py")), B9.createElement(j, {
        marginLeft: 3
    }, B9.createElement($, {
        dimColor: !0
    }, "Enter to confirm · Esc to cancel")))
}
var B9;
var qV9 = L(() => {
    hA();
    QY();
    n2();
    hA();
    m8();
    B9 = GA(VA(), 1)
});

function NV9({
    selectedMatcher: A,
    selectedEvent: Q,
    onDelete: B,
    onCancel: G
}) {
    return CY.createElement(CY.Fragment, null, CY.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "error",
        gap: 1
    }, CY.createElement($, {
        bold: !0,
        color: "error"
    }, "Delete matcher?"), CY.createElement(j, {
        flexDirection: "column",
        marginX: 2
    }, CY.createElement($, {
        bold: !0
    }, A), CY.createElement($, {
        color: "text"
    }, "Event: ", Q)), CY.createElement($, null, "This matcher has no hooks configured. Delete it?"), CY.createElement(M0, {
        onChange: (Z) => Z === "yes" ? B() : G(),
        onCancel: G,
        options: [{
            label: "Yes",
            value: "yes"
        }, {
            label: "No",
            value: "no"
        }]
    })), CY.createElement(j, {
        marginLeft: 3
    }, CY.createElement($, {
        dimColor: !0
    }, "Enter to confirm · Esc to cancel")))
}
var CY;
var LV9 = L(() => {
    hA();
    T5();
    CY = GA(VA(), 1)
});

function MV9({
    selectedEvent: A,
    selectedMatcher: Q,
    hooksForSelectedMatcher: B,
    hookEventMetadata: G,
    onSelect: Z,
    onCancel: I
}) {
    return lZ.createElement(lZ.Fragment, null, lZ.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "success"
    }, lZ.createElement($, {
        bold: !0,
        color: "success"
    }, A, G.matcherMetadata !== void 0 ? ` - Matcher: ${Q}` : ""), G.description && lZ.createElement(j, {
        marginTop: 1
    }, lZ.createElement($, {
        dimColor: !0
    }, G.description)), lZ.createElement(j, {
        marginY: 1
    }, lZ.createElement(M0, {
        options: [{
            label: `+ Add new hook${V1.ellipsis}`,
            value: "add-new"
        }, ...B.map((Y, J) => ({
            label: Y.source === "pluginHook" ? `${gE(Y.config)} (read-only)` : gE(Y.config),
            value: J.toString(),
            description: Y.source === "pluginHook" ? `${c10(Y.source)} - disable ${Y.pluginName?Y.pluginName:"plugin"} to remove` : c10(Y.source),
            disabled: Y.source === "pluginHook"
        }))],
        onChange: (Y) => {
            if (Y === "add-new") Z(null);
            else {
                let J = parseInt(Y, 10),
                    W = B[J];
                if (W) Z(W)
            }
        },
        onCancel: I
    }), B.length === 0 && lZ.createElement(j, {
        marginLeft: 2
    }, lZ.createElement($, {
        dimColor: !0
    }, "No hooks configured yet")))), lZ.createElement(j, {
        marginLeft: 3
    }, lZ.createElement($, {
        dimColor: !0
    }, "Enter to select · Esc to go back")))
}
var lZ;
var OV9 = L(() => {
    n2();
    hA();
    kk();
    T5();
    lZ = GA(VA(), 1)
});

function RV9({
    selectedHook: A,
    eventSupportsMatcher: Q,
    onDelete: B,
    onCancel: G
}) {
    return hG.createElement(hG.Fragment, null, hG.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "error",
        gap: 1
    }, hG.createElement($, {
        bold: !0,
        color: "error"
    }, "Delete hook?"), hG.createElement(j, {
        flexDirection: "column",
        marginX: 2
    }, hG.createElement($, {
        bold: !0
    }, gE(A.config)), hG.createElement($, {
        dimColor: !0
    }, "Event: ", A.event), Q && hG.createElement($, {
        dimColor: !0
    }, "Matcher: ", A.matcher), hG.createElement($, {
        dimColor: !0
    }, xG2(A.source))), hG.createElement($, null, "This will remove the hook configuration from your settings."), hG.createElement(M0, {
        onChange: (Z) => Z === "yes" ? B() : G(),
        onCancel: G,
        options: [{
            label: "Yes",
            value: "yes"
        }, {
            label: "No",
            value: "no"
        }]
    })), hG.createElement(j, {
        marginLeft: 3
    }, hG.createElement($, {
        dimColor: !0
    }, "Enter to confirm · Esc to cancel")))
}
var hG;
var TV9 = L(() => {
    hA();
    kk();
    T5();
    hG = GA(VA(), 1)
});

function PV9(A, Q) {
    let B = {
            PreToolUse: {},
            PostToolUse: {},
            PostToolUseFailure: {},
            Notification: {},
            UserPromptSubmit: {},
            SessionStart: {},
            SessionEnd: {},
            Stop: {},
            SubagentStart: {},
            SubagentStop: {},
            PreCompact: {},
            PermissionRequest: {}
        },
        G = tjA(Q);
    _G2(A).forEach((I) => {
        let Y = B[I.event];
        if (Y) {
            let J = G[I.event].matcherMetadata !== void 0 ? I.matcher || "" : "";
            if (!Y[J]) Y[J] = [];
            Y[J].push(I)
        }
    });
    let Z = IkA();
    if (Z)
        for (let [I, Y] of Object.entries(Z)) {
            let J = I,
                W = B[J];
            if (!W) continue;
            for (let X of Y) {
                let F = X.matcher || "";
                if (!W[F]) W[F] = [];
                for (let V of X.hooks)
                    if (V.type === "callback") W[F].push({
                        event: J,
                        config: {
                            type: "command",
                            command: "[Plugin Hook]"
                        },
                        matcher: X.matcher,
                        source: "pluginHook",
                        pluginName: X.pluginName
                    })
            }
        }
    return B
}

function jV9(A, Q) {
    let B = Object.keys(A[Q] || {});
    return bG2(B, A, Q)
}

function SV9(A, Q, B) {
    let G = B ?? "";
    return A[Q]?.[G] ?? []
}

function vg(A, Q) {
    return tjA(Q)[A].matcherMetadata
}

function _V9(A, Q) {
    return tjA(Q)[A].summary
}
var tjA;
var kV9 = L(() => {
    o2();
    kk();
    S0();
    tjA = t1(function(A) {
        return {
            PreToolUse: {
                summary: "Before tool execution",
                description: `Input to command is JSON of tool call arguments.
Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and block tool call
Other exit codes - show stderr to user only but continue with tool call`,
                matcherMetadata: {
                    fieldToMatch: "tool_name",
                    values: A
                }
            },
            PostToolUse: {
                summary: "After tool execution",
                description: `Input to command is JSON with fields "inputs" (tool call arguments) and "response" (tool call response).
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
                matcherMetadata: {
                    fieldToMatch: "tool_name",
                    values: A
                }
            },
            PostToolUseFailure: {
                summary: "After tool execution fails",
                description: `Input to command is JSON with tool_name, tool_input, tool_use_id, error, error_type, is_interrupt, and is_timeout.
Exit code 0 - stdout shown in transcript mode (ctrl+o)
Exit code 2 - show stderr to model immediately
Other exit codes - show stderr to user only`,
                matcherMetadata: {
                    fieldToMatch: "tool_name",
                    values: A
                }
            },
            Notification: {
                summary: "When notifications are sent",
                description: `Input to command is JSON with notification message and type.
Exit code 0 - stdout/stderr not shown
Other exit codes - show stderr to user only`,
                matcherMetadata: {
                    fieldToMatch: "notification_type",
                    values: ["permission_prompt", "idle_prompt", "auth_success", "elicitation_dialog"]
                }
            },
            UserPromptSubmit: {
                summary: "When the user submits a prompt",
                description: `Input to command is JSON with original user prompt text.
Exit code 0 - stdout shown to Claude
Exit code 2 - block processing, erase original prompt, and show stderr to user only
Other exit codes - show stderr to user only`
            },
            SessionStart: {
                summary: "When a new session is started",
                description: `Input to command is JSON with session start source.
Exit code 0 - stdout shown to Claude
Blocking errors are ignored
Other exit codes - show stderr to user only`,
                matcherMetadata: {
                    fieldToMatch: "source",
                    values: ["startup", "resume", "clear", "compact"]
                }
            },
            Stop: {
                summary: "Right before Claude concludes its response",
                description: `Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to model and continue conversation
Other exit codes - show stderr to user only`
            },
            SubagentStart: {
                summary: "When a subagent (Task tool call) is started",
                description: `Input to command is JSON with agent_id and agent_type.
Exit code 0 - stdout shown to subagent
Blocking errors are ignored
Other exit codes - show stderr to user only`,
                matcherMetadata: {
                    fieldToMatch: "agent_type",
                    values: []
                }
            },
            SubagentStop: {
                summary: "Right before a subagent (Task tool call) concludes its response",
                description: `Exit code 0 - stdout/stderr not shown
Exit code 2 - show stderr to subagent and continue having it run
Other exit codes - show stderr to user only`
            },
            PreCompact: {
                summary: "Before conversation compaction",
                description: `Input to command is JSON with compaction details.
Exit code 0 - stdout appended as custom compact instructions
Exit code 2 - block compaction
Other exit codes - show stderr to user only but continue with compaction`,
                matcherMetadata: {
                    fieldToMatch: "trigger",
                    values: ["manual", "auto"]
                }
            },
            SessionEnd: {
                summary: "When a session is ending",
                description: `Input to command is JSON with session end reason.
Exit code 0 - command completes successfully
Other exit codes - show stderr to user only`,
                matcherMetadata: {
                    fieldToMatch: "reason",
                    values: ["clear", "logout", "prompt_input_exit", "other"]
                }
            },
            PermissionRequest: {
                summary: "When a permission dialog is displayed",
                description: `Input to command is JSON with tool_name, tool_input, and tool_use_id.
Output JSON with hookSpecificOutput containing decision to allow or deny.
Exit code 0 - use hook decision if provided
Other exit codes - show stderr to user only`,
                matcherMetadata: {
                    fieldToMatch: "tool_name",
                    values: A
                }
            }
        }
    })
});

function yV9({
    toolNames: A,
    onExit: Q
}) {
    let [B, G] = aJ.useState([]), [Z, I] = aJ.useState({
        mode: "select-event"
    }), [Y, J] = aJ.useState(0), [W, X] = aJ.useState(() => {
        return c0()?.disableAllHooks === !0 && LB("policySettings")?.disableAllHooks === !0
    }), [F, V] = aJ.useState(() => {
        return LB("policySettings")?.allowManagedHooksOnly === !0
    });
    CGA((KA) => {
        if (KA === "policySettings") {
            let sA = c0()?.disableAllHooks === !0;
            X(sA && LB("policySettings")?.disableAllHooks === !0), V(LB("policySettings")?.allowManagedHooksOnly === !0)
        }
    });
    let [K, D] = aJ.useState(""), [H, C] = aJ.useState(""), E = Z.mode, z = "event" in Z ? Z.event : "PreToolUse", w = "matcher" in Z ? Z.matcher : null, [N] = _Q(), {
        mcp: q
    } = N, R = aJ.useMemo(() => [...A, ...q.tools.map((KA) => KA.name)], [A, q.tools]), P = aJ.useMemo(() => PV9(N, R), [R, Y, N]), y = aJ.useMemo(() => jV9(P, z), [P, z]), v = aJ.useMemo(() => SV9(P, z, w), [P, z, w]), x = DQ();
    h1((KA, SA) => {
        if (E === "save-hook") return;
        if (SA.escape) {
            switch (E) {
                case "select-event":
                    if (B.length > 0) Q(B.join(`
`));
                    else Q("Hooks dialog dismissed", {
                        display: "system"
                    });
                    break;
                case "select-matcher":
                    I({
                        mode: "select-event"
                    });
                    break;
                case "add-matcher":
                    if ("event" in Z) I({
                        mode: "select-matcher",
                        event: Z.event,
                        matcherMetadata: Z.matcherMetadata
                    });
                    C("");
                    break;
                case "delete-matcher":
                    if ("event" in Z) I({
                        mode: "select-matcher",
                        event: Z.event,
                        matcherMetadata: Z.matcherMetadata
                    });
                    break;
                case "select-hook":
                    if ("event" in Z) {
                        let sA = vg(Z.event, R);
                        if (sA !== void 0) I({
                            mode: "select-matcher",
                            event: Z.event,
                            matcherMetadata: sA
                        });
                        else I({
                            mode: "select-event"
                        })
                    }
                    break;
                case "add-hook":
                    if ("event" in Z && "matcher" in Z) I({
                        mode: "select-hook",
                        event: Z.event,
                        matcher: Z.matcher
                    });
                    D("");
                    break;
                case "delete-hook":
                    if ("event" in Z && Z.mode === "delete-hook") {
                        let {
                            hook: sA
                        } = Z;
                        I({
                            mode: "select-hook",
                            event: Z.event,
                            matcher: sA.matcher || ""
                        })
                    }
                    break
            }
            return
        }
        switch (E) {
            case "select-event":
                if (SA.return) {
                    let sA = z,
                        NA = vg(sA, R);
                    if (NA !== void 0) I({
                        mode: "select-matcher",
                        event: sA,
                        matcherMetadata: NA
                    });
                    else I({
                        mode: "select-hook",
                        event: sA,
                        matcher: ""
                    })
                }
                break;
            case "add-matcher":
                if (SA.return && H.trim() && "event" in Z) I({
                    mode: "select-hook",
                    event: Z.event,
                    matcher: H.trim()
                });
                break;
            case "add-hook":
                if (SA.return && K.trim() && "event" in Z && "matcher" in Z) {
                    let sA = {
                        event: Z.event,
                        config: {
                            type: "command",
                            command: K.trim()
                        },
                        matcher: vg(Z.event, R) !== void 0 ? Z.matcher : ""
                    };
                    I({
                        mode: "save-hook",
                        event: Z.event,
                        hookToSave: sA
                    })
                }
                break;
            case "delete-matcher":
            case "delete-hook":
            case "select-matcher":
            case "select-hook":
                break
        }
    });
    let p = aJ.useCallback(() => {
            if (Z.mode === "save-hook") {
                let {
                    hookToSave: KA
                } = Z;
                G((SA) => [...SA, `Added ${KA.event} hook: ${oA.bold(gE(KA.config))}`]), I({
                    mode: "select-hook",
                    event: KA.event,
                    matcher: KA.matcher
                })
            }
            D(""), J((KA) => KA + 1)
        }, [Z]),
        u = aJ.useCallback(() => {
            if (Z.mode === "save-hook") {
                let {
                    hookToSave: KA
                } = Z;
                I({
                    mode: "select-hook",
                    event: KA.event,
                    matcher: KA.matcher
                })
            }
            D("")
        }, [Z]),
        o = aJ.useCallback(async () => {
            if (Z.mode !== "delete-hook") return;
            let {
                hook: KA,
                event: SA
            } = Z;
            await yG2(KA), G((qA) => [...qA, `Deleted ${KA.event} hook: ${oA.bold(gE(KA.config))}`]), J((qA) => qA + 1);
            let sA = KA.matcher || "",
                NA = P[SA]?.[sA]?.filter((qA) => !KMA(qA.config, KA.config));
            if (!NA || NA.length === 0) {
                let qA = vg(SA, R);
                if (qA !== void 0) I({
                    mode: "select-matcher",
                    event: SA,
                    matcherMetadata: qA
                });
                else I({
                    mode: "select-event"
                })
            } else I({
                mode: "select-hook",
                event: SA,
                matcher: sA
            })
        }, [Z, P, R]),
        l = aJ.useCallback(() => {
            if (Z.mode === "delete-matcher") {
                let {
                    matcher: KA,
                    event: SA
                } = Z;
                G((sA) => [...sA, `Deleted matcher: ${oA.bold(KA)}`]), I({
                    mode: "select-matcher",
                    event: SA,
                    matcherMetadata: Z.matcherMetadata
                })
            }
        }, [Z]),
        k = tjA(R),
        d = fG2();
    aJ.useEffect(() => {
        DMA()
    }, []);
    let IA = c0()?.disableAllHooks === !0,
        HA = aJ.useCallback(() => {
            Q(B.length > 0 ? B.join(`
`) : "Hooks dialog dismissed", {
                display: B.length === 0 ? "system" : void 0
            })
        }, [B, Q]),
        wA = aJ.useMemo(() => Object.values(P).reduce((KA, SA) => {
            return KA + Object.values(SA).reduce((sA, NA) => sA + NA.length, 0)
        }, 0), [P]);
    if (IA) return _9.createElement(_9.Fragment, null, _9.createElement(j, {
        flexDirection: "column",
        borderStyle: "round",
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: "warning"
    }, _9.createElement(j, {
        flexDirection: "column",
        marginBottom: 1
    }, _9.createElement(j, null, _9.createElement($, {
        bold: !0,
        color: "warning"
    }, "Hook Configuration - Disabled")), _9.createElement(j, {
        flexDirection: "column",
        marginTop: 1
    }, _9.createElement($, null, "All hooks are currently ", oA.red("disabled"), W && " by a managed settings file", ". You have", " ", oA.bold(wA), " configured hook", wA !== 1 ? "s" : "", " that", " ", wA !== 1 ? "are" : "is", " not running."), _9.createElement(j, {
        marginTop: 1
    }, _9.createElement($, null, "When hooks are disabled:")), _9.createElement($, null, "• No hook commands will execute"), _9.createElement($, null, "• StatusLine will not be displayed"), _9.createElement($, null, "• Tool operations will proceed without hook validation"))), !W && _9.createElement(j, {
        flexDirection: "column"
    }, _9.createElement($, {
        bold: !0
    }, "Options:"), _9.createElement(M0, {
        options: [{
            label: "Re-enable all hooks",
            value: "enable"
        }, {
            label: "Exit",
            value: "exit"
        }],
        onChange: (KA) => {
            if (KA === "enable") cB("localSettings", {
                disableAllHooks: !1
            }), Q("Re-enabled all hooks");
            else HA()
        },
        onCancel: HA
    }))), _9.createElement(j, {
        marginLeft: 3
    }, _9.createElement($, {
        dimColor: !0
    }, W ? "Esc to exit" : "Enter to select · Esc to exit")));
    switch (Z.mode) {
        case "save-hook":
            return _9.createElement(KV9, {
                event: Z.hookToSave.event,
                eventSummary: k[Z.hookToSave.event].summary,
                config: Z.hookToSave.config,
                matcher: Z.hookToSave.matcher,
                onSuccess: p,
                onCancel: u
            });
        case "select-event":
            return _9.createElement(HV9, {
                hookEventMetadata: k,
                exitStatePending: x.pending,
                exitStateKeyName: x.keyName || void 0,
                configDifference: d,
                restrictedByPolicy: F,
                onSelectEvent: (KA) => {
                    if (KA === "disable-all") cB("localSettings", {
                        disableAllHooks: !0
                    }), Q("All hooks have been disabled");
                    else {
                        let SA = vg(KA, R);
                        if (SA !== void 0) I({
                            mode: "select-matcher",
                            event: KA,
                            matcherMetadata: SA
                        });
                        else I({
                            mode: "select-hook",
                            event: KA,
                            matcher: ""
                        })
                    }
                }
            });
        case "select-matcher":
            return _9.createElement(EV9, {
                selectedEvent: Z.event,
                matchersForSelectedEvent: y,
                hooksByEventAndMatcher: P,
                eventDescription: k[Z.event].description,
                onSelect: (KA) => {
                    if (KA === null) I({
                        mode: "add-matcher",
                        event: Z.event,
                        matcherMetadata: Z.matcherMetadata
                    });
                    else if ((P[Z.event]?.[KA] || []).length === 0) I({
                        mode: "delete-matcher",
                        event: Z.event,
                        matcher: KA,
                        matcherMetadata: Z.matcherMetadata
                    });
                    else I({
                        mode: "select-hook",
                        event: Z.event,
                        matcher: KA
                    })
                },
                onCancel: () => {
                    I({
                        mode: "select-event"
                    })
                }
            });
        case "add-matcher":
            return _9.createElement(UV9, {
                selectedEvent: Z.event,
                newMatcher: H,
                onChangeNewMatcher: C,
                eventDescription: k[Z.event].description,
                matcherMetadata: Z.matcherMetadata
            });
        case "delete-matcher":
            return _9.createElement(NV9, {
                selectedMatcher: Z.matcher,
                selectedEvent: Z.event,
                onDelete: l,
                onCancel: () => I({
                    mode: "select-matcher",
                    event: Z.event,
                    matcherMetadata: Z.matcherMetadata
                })
            });
        case "select-hook":
            return _9.createElement(MV9, {
                selectedEvent: Z.event,
                selectedMatcher: Z.matcher,
                hooksForSelectedMatcher: v,
                hookEventMetadata: k[Z.event],
                onSelect: (KA) => {
                    if (KA === null) I({
                        mode: "add-hook",
                        event: Z.event,
                        matcher: Z.matcher
                    });
                    else I({
                        mode: "delete-hook",
                        event: Z.event,
                        hook: KA
                    })
                },
                onCancel: () => {
                    let KA = vg(Z.event, R);
                    if (KA !== void 0) I({
                        mode: "select-matcher",
                        event: Z.event,
                        matcherMetadata: KA
                    });
                    else I({
                        mode: "select-event"
                    })
                }
            });
        case "add-hook":
            return _9.createElement(wV9, {
                selectedEvent: Z.event,
                selectedMatcher: Z.matcher,
                eventDescription: _V9(Z.event, R),
                fullDescription: k[Z.event].description,
                supportsMatcher: vg(Z.event, R) !== void 0,
                command: K,
                onChangeCommand: D
            });
        case "delete-hook":
            return _9.createElement(RV9, {
                selectedHook: Z.hook,
                eventSupportsMatcher: vg(Z.event, R) !== void 0,
                onDelete: o,
                onCancel: () => {
                    let {
                        event: KA,
                        hook: SA
                    } = Z;
                    I({
                        mode: "select-hook",
                        event: KA,
                        matcher: SA.matcher || ""
                    })
                }
            })
    }
}
var _9, aJ;
var xV9 = L(() => {
    J9();
    hA();
    c9();
    kk();
    DV9();
    CV9();
    zV9();
    $V9();
    qV9();
    LV9();
    OV9();
    TV9();
    T6();
    kV9();
    AYA();
    H9();
    RB();
    QoA();
    _9 = GA(VA(), 1), aJ = GA(VA(), 1)
});
var AV0, P_3, vV9;
var bV9 = L(() => {
    xV9();
    jq();
    AV0 = GA(VA(), 1), P_3 = {
        type: "local-jsx",
        name: "hooks",
        description: "Manage hook configurations for tool events",
        isEnabled: () => !0,
        isHidden: !1,
        async call(A, Q) {
            let G = (await Q.getAppState()).toolPermissionContext,
                Z = JC(G).map((I) => I.name);
            return AV0.createElement(yV9, {
                toolNames: Z,
                onExit: A
            })
        },
        userFacingName() {
            return "hooks"
        }
    }, vV9 = P_3
});
import {
    relative as j_3
} from "path";
var S_3, fV9;
var hV9 = L(() => {
    R2();
    uM();
    S_3 = {
        type: "local",
        name: "files",
        description: "List all files currently in context",
        isEnabled: () => !1,
        isHidden: !1,
        supportsNonInteractive: !0,
        async call(A, Q) {
            let B = Q.readFileState ? dl(Q.readFileState) : [];
            if (B.length === 0) return {
                type: "text",
                value: "No files in context"
            };
            return {
                type: "text",
                value: `Files in context:
${B.map((Z)=>j_3(H0(),Z)).join(`
`)}`
            }
        },
        userFacingName() {
            return "files"
        }
    }, fV9 = S_3
});
var Fx;
var gV9 = L(() => {
    Fx = {
        FOLDER_NAME: ".claude",
        AGENTS_DIR: "agents"
    }
});
import {
    join as bg
} from "path";

function uV9(A, Q, B, G, Z, I) {
    let Y = Q.replace(/\n/g, "\\n"),
        W = B === void 0 || B.length === 1 && B[0] === "*" ? "" : `
tools: ${B.join(", ")}`,
        X = I ? `
model: ${I}` : "",
        F = Z ? `
color: ${Z}` : "";
    return `---
name: ${A}
description: ${Y}${W}${X}${F}
---

${G}
`
}

function SY1(A) {
    switch (A) {
        case "flagSettings":
            throw Error(`Cannot get directory path for ${A} agents`);
        case "userSettings":
            return bg(PQ(), Fx.AGENTS_DIR);
        case "projectSettings":
            return bg(H0(), Fx.FOLDER_NAME, Fx.AGENTS_DIR);
        case "policySettings":
            return bg(hw(), Fx.FOLDER_NAME, Fx.AGENTS_DIR);
        case "localSettings":
            return bg(H0(), Fx.FOLDER_NAME, Fx.AGENTS_DIR)
    }
}

function mV9(A) {
    switch (A) {
        case "projectSettings":
            return bg(".", Fx.FOLDER_NAME, Fx.AGENTS_DIR);
        default:
            return SY1(A)
    }
}

function QV0(A) {
    let Q = SY1(A.source);
    return bg(Q, `${A.agentType}.md`)
}
